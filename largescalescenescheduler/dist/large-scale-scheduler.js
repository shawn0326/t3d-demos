(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('t3d')) :
	typeof define === 'function' && define.amd ? define(['exports', 't3d'], factory) :
	(global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.t3d = global.t3d || {}, global.t3d));
})(this, (function (exports, t3d) { 'use strict';

	/**
	 * The IndicesManager is a tool designed for managing various index states.
	 * It oversees three primary statuses: 'Assigned Active', 'Assigned Inactive', and 'Unassigned Inactive'.
	 */
	class IndicesManager extends t3d.EventDispatcher {
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
			this.dispatchEvent({
				type: EVENT_TYPES.INDEX_CHANGED,
				sourceIndex,
				targetIndex
			});
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
			this.dispatchEvent({
				type: EVENT_TYPES.INDEX_CHANGED,
				sourceIndex,
				targetIndex
			});
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
				if (!swapped) {
					// If the swap failed, then the index was already at the tail.
					this.dispatchEvent({
						type: EVENT_TYPES.ACTIVE_COUNT_CHANGED,
						activeCount: this.activeCount
					});
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
				if (!swapped) {
					// If the swap failed, then the index was already at the tail.
					this.dispatchEvent({
						type: EVENT_TYPES.ACTIVE_COUNT_CHANGED,
						activeCount: this.activeCount
					});
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
			this.dispatchEvent({
				type: EVENT_TYPES.ACTIVE_COUNT_CHANGED,
				activeCount: this.activeCount
			});
		}
	}
	const EVENT_TYPES = {
		INDEX_CHANGED: 'IndexChanged',
		ACTIVE_COUNT_CHANGED: 'ActiveCountChanged'
	};

	class Octree {
		constructor(box = new t3d.Box3(), depth = 0) {
			this.box = box;
			this.depth = depth;
			this.subTrees = [];
			this.elements = [];
			this.elementTest = function (box, element) {
				return box.containsPoint(element);
			};
		}
		isEmpty() {
			return this.elements.length === 0 && this.subTrees.length === 0;
		}
		divideElements(maxDepth = 5, capacity = 8) {
			const {
				depth,
				subTrees,
				elements,
				elementTest
			} = this;
			if (depth >= maxDepth || elements.length <= capacity) return;
			this.subdivide();

			// distribute elements to subTrees
			let element = this.elements.pop();
			while (element) {
				for (let i = 0; i < subTrees.length; i++) {
					if (elementTest(subTrees[i].box, element)) {
						subTrees[i].elements.push(element);
					}
				}
				element = this.elements.pop();
			}

			// recursive call
			subTrees.forEach(subTree => subTree.divideElements(maxDepth, capacity));
		}
		addElement(element, maxDepth = 5, capacity = 8) {
			const {
				box,
				depth,
				subTrees,
				elements,
				elementTest
			} = this;
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
				const box = new t3d.Box3();
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
	}
	const _subdivideArray$1 = [new t3d.Vector3(0, 0, 0), new t3d.Vector3(0, 0, 1), new t3d.Vector3(0, 1, 0), new t3d.Vector3(0, 1, 1), new t3d.Vector3(1, 0, 0), new t3d.Vector3(1, 0, 1), new t3d.Vector3(1, 1, 0), new t3d.Vector3(1, 1, 1)];
	const _vec3_1$1 = new t3d.Vector3();
	const _vec3_2$1 = new t3d.Vector3();

	class Quadtree extends Octree {
		constructor(box, depth = 0) {
			super(box, depth);
		}
		subdivide() {
			const halfSize = _vec3_1.copy(this.box.max).sub(this.box.min).multiplyScalar(0.5);
			halfSize.y *= 2;
			_subdivideArray.forEach((v, i) => {
				const box = new t3d.Box3();
				box.min.copy(this.box.min).add(_vec3_2.copy(v).multiply(halfSize));
				box.max.copy(box.min).add(halfSize);
				this.subTrees[i] = new this.constructor(box, this.depth + 1);
			});
		}
	}
	const _subdivideArray = [new t3d.Vector3(0, 0, 0), new t3d.Vector3(0, 0, 1), new t3d.Vector3(1, 0, 0), new t3d.Vector3(1, 0, 1)];
	const _vec3_1 = new t3d.Vector3();
	const _vec3_2 = new t3d.Vector3();

	class Scheduler {
		/**
		 * @param {Box3} boundary - the boundary of all LODs
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
			this._maxDepth = maxDepth;
			this._capacity = capacity;
			this._tree = treeType === 'octree' ? new _Octree() : new _Quadtree();
			this._tree.box.copy(boundary);
			this._cameraStates = {
				position: new t3d.Vector3(),
				frustum: new t3d.Frustum()
			};
		}
		addLOD(lod) {
			this._tree.addElement(lod, this._maxDepth, this._capacity);
		}
		removeLOD(lod) {
			this._tree.removeElement(lod);
		}
		getTree() {
			return this._tree;
		}
		update(camera) {
			if (!this.enabled) {
				return;
			}
			this._updateCameraStates(camera);
			this._updateLODs(this._tree);
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
				this._hideLODs(tree);
				return;
			}
			tree.inactive = false;
			const lods = tree.elements;
			for (let i = 0, l = lods.length; i < l; i++) {
				const lod = lods[i];
				const boundingSphere = lod.boundingSphere;
				if (cameraFrustum.intersectsSphere(boundingSphere)) {
					const distanceSq = cameraPosition.distanceToSquared(boundingSphere.center);
					lod.show(distanceSq);
				} else {
					lod.hide();
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
				lods[i].hide();
			}
			if (tree.subTrees.length > 0) {
				for (let i = 0, l = tree.subTrees.length; i < l; i++) {
					this._hideLODs(tree.subTrees[i]);
				}
			}
			tree.inactive = true;
		}
		dispose() {
			// this._tree.dispose();
			this._tree = null;
			this._cameraStates = null;
		}
	}
	const _mat4_1$1 = new t3d.Matrix4();
	class _Octree extends Octree {
		constructor(box, depth) {
			super(box, depth);
			this.elementTest = function (box, element) {
				return box.containsPoint(element.boundingSphere.center);
			};
			this.inactive = false;
		}
	}
	class _Quadtree extends Quadtree {
		constructor(box, depth) {
			super(box, depth);
			this.elementTest = function (box, element) {
				return box.containsPoint(element.boundingSphere.center);
			};
			this.inactive = false;
		}
	}

	/**
	 * Abstract class for LOD.
	 */
	class LOD {
		constructor(worldMatrix = new t3d.Matrix4(), radius = 0) {
			this.worldMatrix = new t3d.Matrix4();
			this.boundingSphere = new t3d.Sphere();
			this.worldMatrix.copy(worldMatrix);
			this.boundingSphere.radius = radius;
			this.boundingSphere.center.setFromMatrixPosition(this.worldMatrix);
		}
		show(distanceSq) {
			// implement in subclass
		}
		hide() {
			// implement in subclass
		}
	}

	class LargeScaleInstancedManager {
		constructor(boundary, options = {}) {
			this.scheduler = new Scheduler(boundary, options);
			this._resources = new Map();
		}

		/**
		 * @param {String} name
		 * @param {Object} resource - { node, maxCount }
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
		_createInstancedNode(resource, data, distance) {
			const worldMatrix = data.worldMatrix;
			const subNode = {
				distanceSq: distance * distance || 0,
				visible: false,
				disposed: false,
				setVisible: function (visible) {
					if (this.visible !== visible) {
						this.visible = visible;
						resource.setVisible(this, visible);
					}
				},
				dispose: function () {
					if (!this.disposed) {
						this.disposed = true;
						resource.remove(this);
					}
				}
			};
			resource.add(subNode, worldMatrix);
			return subNode;
		}
		createInstancedLODNode(data) {
			const resources = this._resources;
			const types = data.types;
			const distances = data.distances; // 0: most near, n: most far
			const lodObjects = []; // 0: most near, n: most far
			for (let i = 0, len = types.length; i < len; i++) {
				const type = types[i];
				const resource = resources.get(type);
				if (!resource) {
					console.warn(`LargeScaleInstancedScene: Resource type ${type} not registered.`);
					continue;
				}
				const node = this._createInstancedNode(resource, data, distances[i]);
				lodObjects.push(node);
			}
			const lod = new InstancedLod(data, lodObjects);
			this.scheduler.addLOD(lod);
			return lod;
		}
		destroyInstancedLODNode(lod) {
			this.scheduler.removeLOD(lod);
			const objects = lod.objects;
			for (let i = 0, len = objects.length; i < len; i++) {
				objects[i].dispose();
			}
		}
		update(camera) {
			this.scheduler.update(camera);
			this._resources.forEach(resource => {
				resource.flush();
			});
		}
		dispose() {
			this.scheduler.dispose();
			this.scheduler = null;
			this._resources.forEach(resource => {
				resource.dispose();
			});
			this._resources.clear();
			this._resources = null;
		}
	}
	class InstancedLod extends LOD {
		constructor(data, objects = []) {
			super(data.worldMatrix, data.radius);
			this.id = data.id;
			this.name = data.name;
			this.objects = objects;
			this._currentRange = {
				level: -1,
				start: -1,
				end: -1
			};
		}
		show(distanceSq) {
			const objects = this.objects;
			const currentRange = this._currentRange;
			if (currentRange.level > -1) {
				if (distanceSq >= currentRange.start && distanceSq <= currentRange.end) {
					return;
				}
			}
			let i, k;
			for (i = 1, k = objects.length; i < k; i++) {
				if (distanceSq >= objects[i].distanceSq) {
					objects[i - 1].setVisible(false);
				} else {
					break;
				}
			}
			objects[i - 1].setVisible(true);
			currentRange.level = i - 1;
			currentRange.start = i === 1 ? 0 : objects[i - 1].distanceSq;
			currentRange.end = i === k ? Infinity : objects[i].distanceSq;
			for (; i < k; i++) {
				objects[i].setVisible(false);
			}
		}
		hide() {
			const objects = this.objects;
			const currentRange = this._currentRange;
			for (let i = 0, l = objects.length; i < l; i++) {
				objects[i].setVisible(false);
			}
			currentRange.level = -1;
		}
		dispose() {
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
			const attribute = new t3d.Attribute(buffer);
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
			matrix.toArray(this._buffer.array, index * 16);
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
	const _mat4_1 = new t3d.Matrix4();
	const _mat4_2 = new t3d.Matrix4();
	class InstancedBuffer extends t3d.Buffer {
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

	t3d.Box3.prototype.getSize = function (target) {
		return this.isEmpty() ? target.set(0, 0, 0) : target.subVectors(this.max, this.min);
	};
	t3d.Box3.prototype.containsPoint = function (point) {
		return point.x < this.min.x || point.x > this.max.x || point.y < this.min.y || point.y > this.max.y || point.z < this.min.z || point.z > this.max.z ? false : true;
	};

	exports.LOD = LOD;
	exports.LargeScaleInstancedManager = LargeScaleInstancedManager;
	exports.Scheduler = Scheduler;

}));
