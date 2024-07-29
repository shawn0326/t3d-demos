import { LOD, Scheduler } from 'large-scale-scheduler';

class LargeScaleManager {

	constructor(boundary, options = {}) {
		this.scheduler = new Scheduler(boundary, options);
	}

	createLODNode(data, type = 'replace') {
		let lod;
		if (type === 'replace') {
			lod = new NodeReplaceLOD(data);
		} else {
			lod = new NodeAddLOD(data);
		}

		this.scheduler.addLOD(lod);

		return lod;
	}

	destroyLODNode(lod) {
		this.scheduler.removeLOD(lod);
	}

	update(camera) {
		this.scheduler.update(camera);
	}

	dispose() {
		this.scheduler.dispose();
		this.scheduler = null;
	}

}

class NodeReplaceLOD extends LOD {

	constructor(data) {
		const distanceSqArray = data.distances.map(d => d * d);

		super(distanceSqArray);
		this.boundingSphere.center.setFromMatrixPosition(data.worldMatrix);
		this.boundingSphere.radius = data.radius;

		this.id = data.id;
		this.name = data.name;
		this.objects = data.nodes;
	}

	show(lastLevelIndex) {
		const currentLevelIndex = this.getLevelIndex();

		if (lastLevelIndex > -1) {
			this.objects[lastLevelIndex].visible = false;
		}

		this.objects[currentLevelIndex].visible = true;
	}

	hide(lastLevelIndex) {
		this.objects[lastLevelIndex].visible = false;
	}

	dispose() {
		this.objects = [];
	}

}

class NodeAddLOD extends NodeReplaceLOD {

	show(lastLevelIndex) {
		const currentLevelIndex = this.getLevelIndex();

		const objects = this.objects;

		for (let i = 0, l = objects.length; i < l; i++) {
			if (i >= currentLevelIndex) {
				objects[i].visible = true;
			} else {
				objects[i].visible = false;
			}
		}
	}

	hide(lastLevelIndex) {
		const objects = this.objects;

		for (let i = 0, l = objects.length; i < l; i++) {
			objects[i].visible = false;
		}
	}

}

export { LargeScaleManager };