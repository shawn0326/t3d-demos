(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('t3d')) :
	typeof define === 'function' && define.amd ? define(['exports', 't3d'], factory) :
	(global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.t3d = {}, global.t3d));
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

	const BufferUtils = {
		updateBufferRange: (buffer, offset) => {
			const updateRange = buffer.updateRange;
			const stride = buffer.stride;
			if (updateRange.count === -1) {
				updateRange.offset = offset;
				updateRange.count = stride;
				return;
			}
			const prevOffset = updateRange.offset;
			const endOffset = prevOffset + updateRange.count;
			updateRange.offset = Math.min(prevOffset, offset);
			updateRange.count = Math.max(endOffset, offset + stride) - updateRange.offset;
		}
	};

	const _box = /* @__PURE__ */new t3d.Box3();
	class CustomizeBox3 extends t3d.Box3 {
		constructor(min, max) {
			super(min, max);
		}
		getSize(target) {
			return this.isEmpty() ? target.set(0, 0, 0) : target.subVectors(this.max, this.min);
		}
		union(box) {
			this.min.min(box.min);
			this.max.max(box.max);
			return this;
		}
		containsPoint(point) {
			return point.x < this.min.x || point.x > this.max.x || point.y < this.min.y || point.y > this.max.y || point.z < this.min.z || point.z > this.max.z ? false : true;
		}
		expandByPoint(point) {
			this.min.min(point);
			this.max.max(point);
			return this;
		}
		expandByObject(object, precise = false) {
			// Computes the world-axis-aligned bounding box of an object (including its children),
			// accounting for both the object's, and children's, world transforms

			// object.updateWorldMatrix( false, false );// TODO: LSH
			object.worldMatrixNeedsUpdate = false;
			if (object.boundingBox !== undefined) {
				if (object.boundingBox === null) {
					object.computeBoundingBox();
				}
				_box.copy(object.boundingBox);
				_box.applyMatrix4(object.worldMatrix);
				this.union(_box);
			} else {
				const geometry = object.geometry;
				if (geometry !== undefined) {
					if (precise && geometry.attributes !== undefined && geometry.attributes.position !== undefined) {
						const position = geometry.attributes.position;
						for (let i = 0, l = position.count; i < l; i++) {
							_vector.fromBufferAttribute(position, i).applyMatrix4(object.worldMatrix);
							this.expandByPoint(_vector);
						}
					} else {
						if (geometry.boundingBox === null) {
							geometry.computeBoundingBox();
						}
						_box.copy(geometry.boundingBox);
						_box.applyMatrix4(object.worldMatrix);
						this.union(_box);
					}
				}
			}
			const children = object.children;
			for (let i = 0, l = children.length; i < l; i++) {
				this.expandByObject(children[i], precise);
			}
			return this;
		}
		setFromObject(object, precise = false) {
			this.makeEmpty();
			return this.expandByObject(object, precise);
		}
		makeEmpty() {
			this.min.x = this.min.y = this.min.z = +Infinity;
			this.max.x = this.max.y = this.max.z = -Infinity;
			return this;
		}
		isEmpty() {
			// this is a more robust check for empty than ( volume <= 0 ) because volume can get positive with two negative axes

			return this.max.x < this.min.x || this.max.y < this.min.y || this.max.z < this.min.z;
		}
	}

	class Selector {
		constructor() {}
		add(object) {}
		remove(object) {}
		update(camera) {}
		dispose() {}
	}

	const _vec3_1$1 = new t3d.Vector3();
	class OctreeSelector extends Selector {
		constructor(box3, n, depth) {
			super();
			this.box = box3;
			this.capacity = n;
			this.divided = false;
			this.objects = [];
			this.children = [];
			this.depth = depth;
		}
		subdivide() {
			const box = this.box;
			const capacity = this.capacity;
			const depth = this.depth;
			_vec3_1$1.subVectors(box.max, box.min).multiplyScalar(1 / 2);
			const arr = [[0, 0, 0], [_vec3_1$1.x, 0, 0], [0, 0, _vec3_1$1.z], [_vec3_1$1.x, 0, _vec3_1$1.z], [0, _vec3_1$1.y, 0], [_vec3_1$1.x, _vec3_1$1.y, 0], [0, _vec3_1$1.y, _vec3_1$1.z], [_vec3_1$1.x, _vec3_1$1.y, _vec3_1$1.z]];
			for (let i = 0; i < 8; i++) {
				const min = new t3d.Vector3(box.min.x + arr[i][0], box.min.y + arr[i][1], box.min.z + arr[i][2]);
				const max = new t3d.Vector3();
				max.addVectors(min, _vec3_1$1);
				const subBox = new CustomizeBox3(min, max);
				this.children.push(new OctreeSelector(subBox, capacity, depth + 1));
			}
			this.divided = true;
		}
		add(object) {
			const box = this.box;
			if (!box.containsPoint(_vec3_1$1.setFromMatrixPosition(object.worldMatrix))) {
				return false;
			}
			const children = this.children;
			const objects = this.objects;
			if (objects.length < this.capacity) {
				objects.push(object);
				return true;
			} else {
				if (!this.divided) {
					this.subdivide();
				}
				for (let i = 0, l = children.length; i < l; i++) {
					if (children[i].add(object)) {
						return true;
					}
				}
			}
		}
		remove(object) {
			const index = this.objects.indexOf(object);
			if (index !== -1) {
				this.objects.splice(index, 1);
				return true;
			} else {
				const children = this.children;
				for (let i = 0, l = children.length; i < l; i++) {
					if (children[i].remove(object)) {
						return true;
					}
				}
			}
		}
		containsPoint(frustum, point) {
			const planes = frustum.planes;
			for (let i = 0; i < 6; i++) {
				if (planes[i].distanceToPoint(point) < 0) {
					return false;
				}
			}
			return true;
		}

		// update(camera, frustum, onSelect, onUnselect) {
		// 	if (!frustum.intersectsBox(this.box)) {
		// 		// const objects = this.objects;
		// 		// for (let i = 0, l = objects.length; i < l; i++) {
		// 		// 	const object = objects[i];
		// 		// 	onUnselect(object);
		// 		// }

		// 		return;
		// 	}

		// 	const objects = this.objects;
		// 	for (let i = 0, l = objects.length; i < l; i++) {
		// 		const object = objects[i];
		// 		if (this.containsPoint(frustum, _vec3_1.setFromMatrixPosition(object.worldMatrix))) {
		// 			onSelect(object, camera);
		// 		} else {
		// 			onUnselect(object);
		// 		}
		// 	}

		// 	if (this.divided) {
		// 		for (let i = 0, l = this.children.length; i < l; i++) {
		// 			this.children[i].update(camera, frustum, onSelect, onUnselect);
		// 		}
		// 	}
		// }

		update(camera, frustum, onSelect, onUnselect) {
			if (!frustum.intersectsBox(this.box)) {
				return;
			}
			const objects = this.objects;
			if (this.containsPoint(frustum, this.box.getCenter(_vec3_1$1))) {
				for (let i = 0, l = objects.length; i < l; i++) {
					const object = objects[i];
					onSelect(object, camera);
				}
			} else {
				for (let i = 0, l = objects.length; i < l; i++) {
					const object = objects[i];
					onUnselect(object);
				}
			}
			if (this.divided) {
				for (let i = 0, l = this.children.length; i < l; i++) {
					this.children[i].update(camera, frustum, onSelect, onUnselect);
				}
			}
		}
		dispose() {
			this.box = null;
			this.objects = null;
			this.children = null;
		}
	}

	class Scheduler {
		constructor(selector) {
			this.enabled = true;
			this._lodes = [];
			this._selector = selector;
		}

		/**
				* LOD
				* @param {Object} lod
				* @returns
				*/
		addLOD(lod) {
			this._lodes.push(lod);
			if (this._selector) {
				this._selector.add(lod);
			}
		}
		removeLOD(lod) {
			const index = this._lodes.indexOf(lod);
			if (index !== -1) {
				this._lodes.splice(index, 1);
			}
			if (this._selector) {
				this._selector.remove(lod);
			}
		}
		update(camera, renderStates) {
			if (!this.enabled) {
				return;
			}
		}
		dispose() {
			this._enabled = false;
			this._lodes = null;
			this._selector.dispose();
			this._selector = null;
		}
	}

	const _mat4_1$1 = new t3d.Matrix4();
	const _vec3_1 = new t3d.Vector3();
	const _vec3_2 = new t3d.Vector3();
	const onSelect = (lod, camera) => {
		_vec3_1.setFromMatrixPosition(camera.worldMatrix);
		_vec3_2.setFromMatrixPosition(lod.worldMatrix);
		const distance = _vec3_1.distanceTo(_vec3_2);
		lod.objects[0].setVisible(true);
		let j, k;
		for (j = 1, k = lod.objects.length; j < k; j++) {
			const levelDistance = lod.objects[j].distance;

			// if (lod.objects[i].visible) {
			// 	levelDistance -= levelDistance * levels[i].hysteresis;
			// }

			if (distance >= levelDistance) {
				lod.objects[j - 1].setVisible(false);
				lod.objects[j].setVisible(true);
			} else {
				break;
			}
		}
		for (; j < k; j++) {
			lod.objects[j].setVisible(false);
		}
	};
	const onUnselect = lod => {
		for (let i = 0, l = lod.objects.length; i < l; i++) {
			lod.objects[i].setVisible(false);
		}
	};
	class ReplaceScheduler extends Scheduler {
		constructor(selector) {
			super(selector);
			this.distance = 2000;
			this._frustum = new t3d.Frustum();
		}
		_updateFrustum(camera, renderStates) {
			const frustum = this._frustum;
			frustum.setFromMatrix(_mat4_1$1.multiplyMatrices(camera.projectionMatrix, camera.viewMatrix // camera.matrixWorldInverse
			));

			const farPlane = frustum.planes[4],
				nearPlane = frustum.planes[5],
				worldMatrix = camera.worldMatrix,
				near = renderStates.camera.near;
			farPlane.constant = near + this.distance;
			farPlane.normal.set(0, 0, 1);
			farPlane.applyMatrix4(worldMatrix);
			nearPlane.constant = -near;
			nearPlane.normal.set(0, 0, -1);
			nearPlane.applyMatrix4(worldMatrix);
		}
		update(camera, renderStates) {
			if (!this.enabled || !this._selector) {
				return;
			}
			this._updateFrustum(camera, renderStates);
			this._selector.update(camera, this._frustum, onSelect, onUnselect);
		}
		dispose() {
			super.dispose();
			this._frustum = null;
		}
	}

	const _mat4_1 = new t3d.Matrix4();
	const _mat4_2 = new t3d.Matrix4();
	const buildIndexChange = (node, indicesManager) => {
		return function (event) {
			const sourceIndex = event.sourceIndex;
			const targetIndex = event.targetIndex;
			node.traverse(mesh => {
				if (!mesh.isMesh) {
					return;
				}
				const instanceMatrix = mesh.geometry.getAttribute('instanceMatrix');
				const matrixSize = instanceMatrix.size;
				const sourceMatrixOffset = sourceIndex * matrixSize;
				const targetMatrixOffset = targetIndex * matrixSize;
				const matrixBuffer = instanceMatrix.buffer;
				const matrixArray = matrixBuffer.array;
				_mat4_1.fromArray(matrixArray, targetMatrixOffset);
				_mat4_2.fromArray(matrixArray, sourceMatrixOffset);
				_mat4_1.toArray(matrixArray, sourceMatrixOffset);
				_mat4_2.toArray(matrixArray, targetMatrixOffset);
				BufferUtils.updateBufferRange(matrixBuffer, targetMatrixOffset);
				BufferUtils.updateBufferRange(matrixBuffer, sourceMatrixOffset);
				matrixBuffer.version++;
				mesh.geometry.instanceCount = indicesManager.activeCount;
			});
		};
	};
	function buildActiveCountChange(node) {
		return function (event) {
			const activeCount = event.activeCount;
			node.traverse(mesh => {
				if (!mesh.isMesh) {
					return;
				}
				if (mesh.geometry.instanceCount !== activeCount) {
					mesh.geometry.instanceCount = activeCount;
				}
			});
			if (activeCount === 0) {
				node.visible = false;
			} else {
				node.visible = true;
			}
		};
	}
	class LargeScaleInstancedManager {
		constructor(boundary, capacity = 25, depth = 0) {
			const octreeSelector = new OctreeSelector(boundary, capacity, depth);
			const scheduler = new ReplaceScheduler(octreeSelector);
			this.scheduler = scheduler;
			this._isDisposed = false;
			this._resources = new Map();
			this._indicesManagers = [];
		}

		/**
		 * resource: { type, node, maxCount}
		 * @param {String} type
		 * @param {Object} resource
		 * @returns
		 */
		registerResource(resource) {
			const type = resource.type;
			if (this._resources.has(type)) {
				console.warn('LargeScaleInstancedScene: Resource already registered.');
				return;
			}
			const count = resource.maxCount;
			const node = resource.node;
			const indicesManager = new IndicesManager(count, true);
			indicesManager.addEventListener(EVENT_TYPES.INDEX_CHANGED, buildIndexChange(node, indicesManager));
			indicesManager.addEventListener(EVENT_TYPES.ACTIVE_COUNT_CHANGED, buildActiveCountChange(node));
			resource.indicesManager = indicesManager;
			this._indicesManagers.push(indicesManager);
			this._resources.set(type, resource);
		}
		unRegisterResource(type) {
			const resource = this._resources.get(type);
			if (!resource) {
				return;
			}
			resource.indicesManager.clear();
			this._resources.delete(type);
		}
		_createInstancedNode(resource, data, distance) {
			const worldMatrix = data.worldMatrix;
			const indicesManager = resource.indicesManager;
			const subNode = {
				type: resource.type,
				name: data.name || '',
				id: data.id || '',
				distance: distance || 0,
				visible: false,
				disposed: false,
				worldMatrix,
				setVisible: function (visible) {
					if (this.visible !== visible) {
						this.visible = visible;
						if (visible) {
							indicesManager.activateIndex(this, true);
						} else {
							indicesManager.deactivateIndex(this, true);
						}
					}
				},
				dispose: function () {
					if (!this.disposed) {
						this.disposed = true;
						indicesManager.releaseIndex(this, true);
					}
				}
			};
			const index = indicesManager.allocateIndex(subNode, subNode.visible);
			resource.node.traverse(mesh => {
				if (!mesh.isMesh) {
					return;
				}
				const instanceMatrixArray = mesh.geometry.getAttribute('instanceMatrix').buffer.array;
				worldMatrix.toArray(instanceMatrixArray, index * 16);
			});
			return subNode;
		}
		createInstancedLODNode(data) {
			if (this._isDisposed) {
				return;
			}
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
			const lod = {
				id: data.id,
				name: data.name,
				worldMatrix: data.worldMatrix,
				objects: lodObjects
			};
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
		update(camera, renderStates) {
			if (this._isDisposed) {
				return;
			}
			this.scheduler.update(camera, renderStates);
			const indicesManagers = this._indicesManagers;
			for (let i = 0, len = indicesManagers.length; i < len; i++) {
				indicesManagers[i].triggerQueue();
			}
		}
		dispose() {
			if (this._isDisposed) {
				return;
			}
			this._isDisposed = true;
			this.scheduler.dispose();
			this.scheduler = null;
			this._resources.clear();
			this._resources = null;
			const indicesManagers = this._indicesManagers;
			for (let i = 0, len = indicesManagers.length; i < len; i++) {
				indicesManagers[i].dispose();
			}
			this._indicesManagers = null;
		}
	}

	exports.CustomizeBox3 = CustomizeBox3;
	exports.LargeScaleInstancedManager = LargeScaleInstancedManager;
	exports.OctreeSelector = OctreeSelector;
	exports.ReplaceScheduler = ReplaceScheduler;
	exports.Scheduler = Scheduler;
	exports.Selector = Selector;

}));
