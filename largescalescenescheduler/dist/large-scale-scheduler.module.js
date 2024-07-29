import { EventDispatcher, Vector3, Box3, Matrix4, Frustum, Sphere, BUFFER_USAGE, Attribute, Buffer } from 't3d';

/**
 * The IndicesManager is a tool designed for managing various index states.
 * It oversees three primary statuses: 'Assigned Active', 'Assigned Inactive', and 'Unassigned Inactive'.
 */
class IndicesManager extends EventDispatcher {

	constructor(maxLimitCount = 1000, isTriggering = false) {
		super();

		this._maxLimitCount = maxLimitCount;
		this._allocatedCount = 0;
		this._allocatedAndActiveTailIndex = -1;

		this._map = new Map();
		this._reverseMap = new Map();

		this._isTriggering = isTriggering;
		this._taskQueue = new Map();
	}

	set maxLimitCount(value) {
		this._maxLimitCount = value;
	}

	get maxLimitCount() {
		return this._maxLimitCount;
	}

	get allocatedCount() {
		return this._allocatedCount;
	}

	get activeCount() {
		return this._allocatedAndActiveTailIndex + 1;
	}

	getIndex(object) {
		if (!this._map.has(object)) {
			console.warn('IndicesManager: Index not found, will attempt to allocate..');
			return this.allocateIndex(object);
		}

		return this._map.get(object);
	}

	hasIndex(object) {
		return this._map.has(object);
	}

	allocateIndex(object, activate = false) {
		if (this._map.has(object)) {
			console.warn('IndicesManager: Index already allocated.');
			return this._map.get(object);
		}

		let index = this._allocatedCount;
		this._allocatedCount++;

		if (this._allocatedCount > this._maxLimitCount) {
			console.warn('IndicesManager: Max limit is <' + this._maxLimitCount + '> .');
			index--;
			this._allocatedCount--;
		}

		this._map.set(object, index);
		this._reverseMap.set(index, object);

		if (activate) {
			this.activateIndex(object);
		} else {
			this.deactivateIndex(object);
		}

		return index;
	}

	releaseIndex(object, isTriggering = false) {
		if (!this._map.has(object)) {
			return false;
		}

		if (this._isTriggering && isTriggering) {
			this._taskQueue.set(object, 'releaseIndex');
			return;
		}

		this.deactivateIndex(object);

		const sourceIndex = this._allocatedCount - 1;
		const targetIndex = this._map.get(object);
		this._map.delete(object);
		this._reverseMap.delete(targetIndex);
		this._allocatedCount--;

		this.moveIndex(sourceIndex, targetIndex);

		return true;
	}

	moveIndex(sourceIndex, targetIndex) {
		if (sourceIndex === targetIndex) {
			return false;
		}

		const sourceObject = this._reverseMap.get(sourceIndex);
		this._map.set(sourceObject, targetIndex);
		this._reverseMap.set(targetIndex, sourceObject);

		this.dispatchEvent({ type: EVENT_TYPES.INDEX_CHANGED, sourceIndex, targetIndex });

		return true;
	}

	swapIndex(sourceIndex, targetIndex) {
		if (sourceIndex === targetIndex) {
			return false;
		}

		const sourceObject = this._reverseMap.get(sourceIndex);
		const targetObject = this._reverseMap.get(targetIndex);
		this._map.set(sourceObject, targetIndex);
		this._map.set(targetObject, sourceIndex);
		this._reverseMap.set(sourceIndex, targetObject);
		this._reverseMap.set(targetIndex, sourceObject);

		this.dispatchEvent({ type: EVENT_TYPES.INDEX_CHANGED, sourceIndex, targetIndex });

		return true;
	}

	activateIndex(object, isTriggering = false) {
		if (!this._map.has(object)) {
			return false;
		}

		if (this._isTriggering && isTriggering) {
			this._taskQueue.set(object, 'activateIndex');
			return;
		}

		const index = this._map.get(object);
		if (index > this._allocatedAndActiveTailIndex) {
			this._allocatedAndActiveTailIndex++;
			const swapped = this.swapIndex(index, this._allocatedAndActiveTailIndex);
			if (!swapped) {	// If the swap failed, then the index was already at the tail.
				this.dispatchEvent({ type: EVENT_TYPES.ACTIVE_COUNT_CHANGED, activeCount: this.activeCount });
			}
		}

		return true;
	}

	deactivateIndex(object, isTriggering = false) {
		if (!this._map.has(object)) {
			return false;
		}

		if (this._isTriggering && isTriggering) {
			this._taskQueue.set(object, 'deactivateIndex');
			return;
		}

		const index = this._map.get(object);
		if (index <= this._allocatedAndActiveTailIndex) {
			this._allocatedAndActiveTailIndex--;
			const swapped = this.swapIndex(this._allocatedAndActiveTailIndex + 1, index);
			if (!swapped) {	// If the swap failed, then the index was already at the tail.
				this.dispatchEvent({ type: EVENT_TYPES.ACTIVE_COUNT_CHANGED, activeCount: this.activeCount });
			}
		}

		return true;
	}

	triggerQueue() {
		if (!this._isTriggering) {
			return;
		}

		this._taskQueue.forEach((task, object) => {
			switch (task) {
				case 'releaseIndex':
					this.releaseIndex(object);
					break;
				case 'activateIndex':
					this.activateIndex(object);
					break;
				case 'deactivateIndex':
					this.deactivateIndex(object);
					break;
			}
		});
		this._taskQueue.clear();
	}

	clear() {
		this._allocatedCount = 0;
		this._allocatedAndActiveTailIndex = -1;
		this._map.clear();
		this._reverseMap.clear();

		this.dispatchEvent({ type: EVENT_TYPES.ACTIVE_COUNT_CHANGED, activeCount: this.activeCount });
	}

}

const EVENT_TYPES = {
	INDEX_CHANGED: 'IndexChanged',
	ACTIVE_COUNT_CHANGED: 'ActiveCountChanged'
};

class Octree {

	constructor(box = new Box3(), depth = 0) {
		this.box = box;
		this.depth = depth;

		this.subTrees = [];

		this.elements = [];

		this.elementTest = function(box, element) {
			return box.containsPoint(element);
		};
	}

	isEmpty() {
		return this.elements.length === 0 && this.subTrees.length === 0;
	}

	divideElements(maxDepth = 5, capacity = 8) {
		const { depth, subTrees, elements, elementTest } = this;

		if (depth >= maxDepth || elements.length <= capacity) return;

		this.subdivide();

		// distribute elements to subTrees
		let element = this.elements.pop();
		while (element) {
			for (let i = 0; i < subTrees.length; i++) {
				if (elementTest(subTrees[i].box, element)) {
					subTrees[i].elements.push(element);
					break;
				}
			}
			element = this.elements.pop();
		}

		// recursive call
		subTrees.forEach(subTree => subTree.divideElements(maxDepth, capacity));
	}

	addElement(element, maxDepth = 5, capacity = 8) {
		const { box, depth, subTrees, elements, elementTest } = this;

		if (!elementTest(box, element)) {
			return false;
		}

		if (subTrees.length === 0) {
			elements.push(element);

			if (elements.length > capacity && depth < maxDepth) {
				this.divideElements(maxDepth, capacity);
			}

			return true;
		}

		for (let i = 0; i < subTrees.length; i++) {
			if (subTrees[i].addElement(element, maxDepth, capacity)) {
				return true;
			}
		}
	}

	removeElement(element) {
		const elements = this.elements;
		const index = elements.indexOf(element);

		if (index !== -1) {
			elements.splice(index, 1);
			return true;
		}

		const subTrees = this.subTrees;

		for (let i = 0; i < subTrees.length; i++) {
			if (subTrees[i].removeElement(element)) {
				return true;
			}
		}

		return false;
	}

	subdivide() {
		const halfSize = _vec3_1$1.copy(this.box.max).sub(this.box.min).multiplyScalar(0.5);
		_subdivideArray$1.forEach((v, i) => {
			const box = new Box3();

			box.min.copy(this.box.min).add(_vec3_2$1.copy(v).multiply(halfSize));
			box.max.copy(box.min).add(halfSize);

			this.subTrees[i] = new this.constructor(box, this.depth + 1);
		});
	}

	count() {
		let count = 1;

		for (let i = 0; i < this.subTrees.length; i++) {
			count += this.subTrees[i].count();
		}

		return count;
	}

	dispose() {
		this.subTrees.forEach(subTree => subTree.dispose());
		this.subTrees.length = 0;
		this.elements.length = 0;
	}

}

const _subdivideArray$1 = [
	new Vector3(0, 0, 0),
	new Vector3(0, 0, 1),
	new Vector3(0, 1, 0),
	new Vector3(0, 1, 1),
	new Vector3(1, 0, 0),
	new Vector3(1, 0, 1),
	new Vector3(1, 1, 0),
	new Vector3(1, 1, 1)
];

const _vec3_1$1 = new Vector3();
const _vec3_2$1 = new Vector3();

class Quadtree extends Octree {

	constructor(box, depth = 0) {
		super(box, depth);
	}

	subdivide() {
		const halfSize = _vec3_1.copy(this.box.max).sub(this.box.min).multiplyScalar(0.5);
		halfSize.y *= 2;
		_subdivideArray.forEach((v, i) => {
			const box = new Box3();

			box.min.copy(this.box.min).add(_vec3_2.copy(v).multiply(halfSize));
			box.max.copy(box.min).add(halfSize);

			this.subTrees[i] = new this.constructor(box, this.depth + 1);
		});
	}

}

const _subdivideArray = [
	new Vector3(0, 0, 0),
	new Vector3(0, 0, 1),
	new Vector3(1, 0, 0),
	new Vector3(1, 0, 1)
];

const _vec3_1 = new Vector3();
const _vec3_2 = new Vector3();

/**
 * The Scheduler class is responsible for managing and scheduling the display of Levels of Detail (LODs).
 * It uses a spatial partitioning tree (either an octree or a quadtree) to organize the LODs for quick querying and updating.
 * The Scheduler class can add and remove LODs, and it can update the state of the LODs based on the position and frustum of the camera.
 */
class Scheduler {

	/**
	 * Constructs a new Scheduler object.
	 * @param {Box3} boundary - the bounding box of all LODs
	 * @param {Object} [options=] - options
	 * @param {String} [options.treeType='octree'] - the type of the space partition tree, either 'octree' or 'quadtree'
	 * @param {Number} [options.maxDepth=Infinity] - the maximum depth of the space partition tree
	 * @param {Number} [options.capacity=25] - the maximum number of LODs in a leaf node
	 */
	constructor(boundary, options = {}) {
		const treeType = options.treeType !== undefined ? options.treeType : 'octree';
		const maxDepth = options.maxDepth !== undefined ? options.maxDepth : Infinity;
		const capacity = options.capacity !== undefined ? options.capacity : 25;

		this.enabled = true;

		// the distance from the camera at which the LODs are shown
		this.distance = 2000;

		this.strictHide = true;

		this._maxDepth = maxDepth;
		this._capacity = capacity;

		this._tree = treeType === 'octree' ? new _Octree() : new _Quadtree();
		this._tree.box.copy(boundary);

		this._cameraStates = {
			position: new Vector3(),
			frustum: new Frustum()
		};
	}

	/**
	 * Adds an LOD to the Scheduler.
	 * @param {LOD} lod - the LOD to add
	 */
	addLOD(lod) {
		this._tree.addElement(lod, this._maxDepth, this._capacity);
	}

	/**
	 * Removes an LOD from the Scheduler.
	 * @param {LOD} lod - the LOD to remove
	 */
	removeLOD(lod) {
		this._tree.removeElement(lod);
	}

	/**
	 * Adds an array of LODs to the Scheduler.
	 * @param {LOD[]} lods - the array of LODs to add
	 */
	addLODs(lods) {
		this._tree.elements = lods;
		this._tree.divideElements(this._maxDepth, this._capacity);
	}

	/**
	 * Returns the space partition tree.
	 * @return {Octree|Quadtree} the space partition tree
	 */
	getTree() {
		return this._tree;
	}

	/**
	 * Updates the state of the LODs based on the position and frustum of the camera.
	 * @param {Camera} camera - the camera
	 */
	update(camera) {
		if (!this.enabled) {
			return;
		}

		this._updateCameraStates(camera);

		this._updateLODs(this._tree);
	}

	/**
	 * Disposes the Scheduler.
	 */
	dispose() {
		this._tree.dispose();
	}

	_updateCameraStates(camera) {
		const cameraPosition = this._cameraStates.position;
		const cameraFrustum = this._cameraStates.frustum;

		cameraPosition.setFromMatrixPosition(camera.worldMatrix);

		// get camera frustum in world space

		_mat4_1$1.multiplyMatrices(camera.projectionMatrix, camera.viewMatrix);
		cameraFrustum.setFromMatrix(_mat4_1$1);

		// fix far plane by distance

		const nearPlane = cameraFrustum.planes[5];
		const farPlane = cameraFrustum.planes[4];

		farPlane.normal.copy(nearPlane.normal).negate();
		farPlane.constant = -nearPlane.constant + this.distance;
	}

	_updateLODs(tree) {
		const cameraPosition = this._cameraStates.position;
		const cameraFrustum = this._cameraStates.frustum;

		if (!cameraFrustum.intersectsBox(tree.box)) {
			if (this.strictHide) {
				this._hideLODs(tree);
			}
			return;
		}

		tree.inactive = false;

		const lods = tree.elements;
		for (let i = 0, l = lods.length; i < l; i++) {
			const lod = lods[i];

			const boundingSphere = lod.boundingSphere;

			const lastLevelIndex = lod.getLevelIndex();

			if (cameraFrustum.intersectsSphere(boundingSphere)) {
				const distanceSq = cameraPosition.distanceToSquared(boundingSphere.center);

				const levelIndex = lod.setLevel(distanceSq);
				if (lastLevelIndex !== levelIndex) {
					lod.show(lastLevelIndex);
				}
			} else {
				if (lastLevelIndex > -1) {
					lod.clearLevel();
					lod.hide(lastLevelIndex);
				}
			}
		}

		if (tree.subTrees.length > 0) {
			for (let i = 0, l = tree.subTrees.length; i < l; i++) {
				this._updateLODs(tree.subTrees[i]);
			}
		}
	}

	_hideLODs(tree) {
		if (tree.inactive) return;

		const lods = tree.elements;
		for (let i = 0, l = lods.length; i < l; i++) {
			const lod = lods[i];
			const lastLevelIndex = lod.getLevelIndex();
			if (lastLevelIndex > -1) {
				lod.clearLevel();
				lod.hide(lastLevelIndex);
			}
		}

		if (tree.subTrees.length > 0) {
			for (let i = 0, l = tree.subTrees.length; i < l; i++) {
				this._hideLODs(tree.subTrees[i]);
			}
		}

		tree.inactive = true;
	}

}

const _mat4_1$1 = new Matrix4();

class _Octree extends Octree {

	constructor(box, depth) {
		super(box, depth);

		this.elementTest = function(box, element) {
			return box.containsPoint(element.boundingSphere.center);
		};

		this.inactive = false;
	}

}

class _Quadtree extends Quadtree {

	constructor(box, depth) {
		super(box, depth);

		this.elementTest = function(box, element) {
			return box.containsPoint(element.boundingSphere.center);
		};

		this.inactive = false;
	}

}

/**
 * The LOD (Level of Detail) class is an abstract class for managing different levels of detail in a 3D scene.
 * It uses a bounding sphere to determine the visibility of an object and a distance squared array to determine the level of detail.
 * The LOD class can set, clear, and get the current level of detail based on the squared distance from the camera to the object.
 * The LOD class can also show and hide the object based on the current level of detail, which should be implemented in subclass.
 */
class LOD {

	/**
	 * Constructs a new LOD object.
	 * @param {Number[]} distanceSqArray - the array of squared distances from the camera to the object
	 * @param {Sphere} [boundingSphere=new Sphere()] - the bounding sphere of the object
	 */
	constructor(distanceSqArray, boundingSphere = new Sphere()) {
		this.boundingSphere = boundingSphere;

		this._distanceSqArray = distanceSqArray;

		this._currentLevel = { index: -1, start: -1, end: -1 };
	}

	/**
	 * Sets the current level of detail based on the squared distance from the camera to the object.
	 * @param {Number} distanceSq - the squared distance from the camera to the object
	 * @returns {Number} the current level of detail index
	 */
	setLevel(distanceSq) {
		const currentLevel = this._currentLevel;

		if (currentLevel.index > -1) {
			if (distanceSq >= currentLevel.start && distanceSq <= currentLevel.end) {
				return currentLevel.index;
			}
		}

		const distanceSqArray = this._distanceSqArray;

		let i, k;
		for (i = 1, k = distanceSqArray.length; i < k; i++) {
			if (distanceSq < distanceSqArray[i]) {
				break;
			}
		}

		currentLevel.index = i - 1;
		currentLevel.start = i === 1 ? 0 : distanceSqArray[i - 1];
		currentLevel.end = i === k ? Infinity : distanceSqArray[i];

		return currentLevel.index;
	}

	/**
	 * Clears the current level of detail to -1.
	 */
	clearLevel() {
		this._currentLevel.index = -1;
	}

	/**
	 * Gets the current level of detail index.
	 * @returns {Number} the current level of detail index
	 */
	getLevelIndex() {
		return this._currentLevel.index;
	}

	/**
	 * Shows the object based on the current level of detail.
	 * Override this method in subclass.
	 * @param {Number} lastLevelIndex - the last level of detail index
	 */
	show(lastLevelIndex) {
		// const currentLevelIndex = this._currentLevel.index;
		// implement in subclass
	}

	/**
	 * Hides the object based on the last level of detail.
	 * Override this method in subclass.
	 * @param {Number} lastLevelIndex - the last level of detail index
	 */
	hide(lastLevelIndex) {
		// implement in subclass
	}

}

/**
 * This class is responsible for managing and scheduling the display of Levels of Detail (LODs).
 * It uses instanced rendering to display the LODs.
 */
class LargeScaleInstancedManager {

	constructor(boundary, options = {}) {
		this.scheduler = new Scheduler(boundary, options);
		this._resources = new Map();
	}

	/**
	 * Registers an instanced resource.
	 * @param {String} name - the name of the resource
	 * @param {Object} resource - the resource
	 * @param {Object3D} resource.node - the node containing the meshes to be instanced
	 * @param {Number} resource.maxCount - the maximum number of instances
	 */
	registerResource(name, resource) {
		if (this._resources.has(name)) {
			console.warn('LargeScaleInstancedManager: Resource already registered.');
			return;
		}

		const _resource = new InstancedResource(resource.node, resource.maxCount);
		this._resources.set(name, _resource);
	}

	/**
	 * Unregisters an instanced resource.
	 * @param {String} name
	 */
	unRegisterResource(name) {
		const resource = this._resources.get(name);

		if (!resource) {
			return;
		}

		resource.dispose();

		this._resources.delete(name);
	}

	/**
	 * Creates an instanced LOD node.
	 * @param {Object} data
	 * @param {Matrix4} data.worldMatrix
	 * @param {Number} data.radius
	 * @param {String[]} data.resources
	 * @param {Number[]} data.distances
	 * @return {InstancedLOD}
	 */
	createInstancedLODNode(data) {
		const resourceArray = data.resources.map(name => this._resources.get(name));
		const distanceSqArray = data.distances.map(d => d * d);

		const lod = new InstancedLOD(data, distanceSqArray, resourceArray);

		this.scheduler.addLOD(lod);

		return lod;
	}

	/**
	 * Destroys an instanced LOD node.
	 * @param {InstancedLOD} lod - the instanced LOD node to destroy
	 */
	destroyInstancedLODNode(lod) {
		this.scheduler.removeLOD(lod);
		lod.dispose();
	}

	/**
	 * Creates instanced LOD nodes.
	 * This method has better performance than calling createInstancedLODNode multiple times.
	 * @param {Object} data
	 * @param {Matrix4[]} data.worldMatrices
	 * @param {Number[]} data.radiuses
	 * @param {String[]} data.resources
	 * @param {Number[]} data.distances
	 * @return {InstancedLOD[]}
	 */
	createInstancedLODNodes(data) {
		const resourceArray = data.resources.map(name => this._resources.get(name));
		const distanceSqArray = data.distances.map(d => d * d);

		const lods = data.worldMatrices.map((worldMatrix, i) => {
			return new InstancedLOD({ worldMatrix, radius: data.radiuses[i] }, distanceSqArray, resourceArray);
		});

		this.scheduler.addLODs(lods);

		return lods;
	}

	update(camera) {
		this.scheduler.update(camera);
		this._resources.forEach(resource => resource.flush());
	}

	dispose() {
		this.scheduler.dispose();

		this._resources.forEach(resource => resource.dispose());
		this._resources.clear();
	}

}

class InstancedLOD extends LOD {

	constructor(data, distanceSqArray, resourceArray) {
		super(distanceSqArray);
		this.boundingSphere.center.fromArray(data.worldMatrix, 12);
		this.boundingSphere.radius = data.radius;

		const that = this;
		this.objects = resourceArray.map(resource => {
			const object = {
				_visible: false,
				setVisible: function(visible) {
					if (this._visible !== visible) {
						this._visible = visible;
						resource.setVisible(this, visible);
					}
				},
				dispose: function() {
					resource.remove(this);
					that.clearLevel();
				}
			};

			resource.add(object, data.worldMatrix);

			return object;
		});
	}

	show(lastLevelIndex) {
		const currentLevelIndex = this.getLevelIndex();

		if (lastLevelIndex > -1) {
			this.objects[lastLevelIndex].setVisible(false);
		}

		this.objects[currentLevelIndex].setVisible(true);
	}

	hide(lastLevelIndex) {
		this.objects[lastLevelIndex].setVisible(false);
	}

	dispose() {
		this.objects.forEach(object => object.dispose());
		this.objects = [];
	}

}

class InstancedResource {

	constructor(node, maxCount) {
		const geometries = [];
		node.traverse(mesh => {
			if (!mesh.isMesh) return;
			geometries.push(mesh.geometry);
		});

		const indicesManager = new IndicesManager(maxCount, true);

		const buffer = new InstancedBuffer(new Float32Array(maxCount * 16), 16);
		buffer.usage = BUFFER_USAGE.DYNAMIC_DRAW;

		const attribute = new Attribute(buffer);
		attribute.divisor = 1;

		geometries.forEach(geometry => {
			geometry.addAttribute('instanceMatrix', attribute);
		});

		indicesManager.addEventListener(EVENT_TYPES.INDEX_CHANGED, event => {
			const sourceIndex = event.sourceIndex;
			const targetIndex = event.targetIndex;

			buffer.swap(sourceIndex, targetIndex);

			geometries.forEach(geometry => {
				geometry.instanceCount = indicesManager.activeCount;
			});

			node.visible = indicesManager.activeCount !== 0;
		});

		indicesManager.addEventListener(EVENT_TYPES.ACTIVE_COUNT_CHANGED, event => {
			const activeCount = event.activeCount;

			const instanceCount = geometries[0].instanceCount;
			if (activeCount > instanceCount) {
				buffer._expandUpdateRange(instanceCount);
				buffer.version++;
			}

			geometries.forEach(geometry => {
				geometry.instanceCount = activeCount;
			});

			node.visible = activeCount !== 0;
		});

		this._indicesManager = indicesManager;
		this._buffer = buffer;
	}

	add(object, matrix) {
		const index = this._indicesManager.allocateIndex(object, false);
		this._buffer.array.set(matrix, index * 16);
	}

	remove(object) {
		this._indicesManager.releaseIndex(object, true);
	}

	setVisible(object, visible) {
		if (visible) {
			this._indicesManager.activateIndex(object, true);
		} else {
			this._indicesManager.deactivateIndex(object, true);
		}
	}

	flush() {
		this._indicesManager.triggerQueue();
	}

	dispose() {
		this._indicesManager.clear();
	}

}

const _mat4_1 = new Matrix4();
const _mat4_2 = new Matrix4();

class InstancedBuffer extends Buffer {

	constructor(array, stride) {
		super(array, stride);
	}

	swap(sourceIndex, targetIndex) {
		const stride = this.stride;

		const sourceMatrixOffset = sourceIndex * stride;
		const targetMatrixOffset = targetIndex * stride;

		const array = this.array;

		_mat4_1.fromArray(array, targetMatrixOffset);
		_mat4_2.fromArray(array, sourceMatrixOffset);
		_mat4_1.toArray(array, sourceMatrixOffset);
		_mat4_2.toArray(array, targetMatrixOffset);

		this._expandUpdateRange(targetIndex);

		this.version++;
	}

	_expandUpdateRange(index) {
		const updateRange = this.updateRange;
		const stride = this.stride;
		const offset = index * stride;

		if (updateRange.count === -1) {
			updateRange.offset = offset;
			updateRange.count = stride;
			return;
		}

		const prevStart = updateRange.offset;
		const prevEnd = prevStart + updateRange.count;
		updateRange.offset = Math.min(prevStart, offset);
		updateRange.count = Math.max(prevEnd, offset + stride) - updateRange.offset;
	}

}

export { LOD, LargeScaleInstancedManager, Scheduler };
