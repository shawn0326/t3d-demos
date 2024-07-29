import * as t3d from "t3d";
import { ImprovedNoise } from "./ImprovedNoise.js";
import { Texture2DLoader } from 't3d/addons/loaders/Texture2DLoader.js';

/*************************************************************************************
 * CLASS NAME:  Terrain
 * DESCRIPTION: Generate terrain with rise and fall
 * NOTE:
 *
 *************************************************************************************/
class Terrain {
  constructor(length, width, lengthVertex, widthVertex) {
    this.length = length;
    this.width = width;
    this.lengthVertex = lengthVertex;
    this.widthVertex = widthVertex;
    this.quality = 1; // improved Perlin noise's quality, default is 1

    this.planeGeometry = new t3d.PlaneGeometry(
      length,
      width,
      lengthVertex - 1,
      widthVertex - 1
    );
    // this.planeGeometry.rotateX(-Math.PI / 2);  // TODO LSH

    this.planeMaterial; // default material

    this.vertices = {
      length: lengthVertex,
      width: widthVertex,
      array: this.planeGeometry.attributes.a_Position.buffer.array, // array of 3 * lengthVertex * widthVertex
    };
  }

  setImprovedNoise(quality) {
    this.quality = quality;

    const { lengthVertex, widthVertex, vertices } = this;
    const size = lengthVertex * widthVertex;
    const perlin = new ImprovedNoise();
    const data = new Uint8Array(size);

    let z = Math.random() * 100;
    for (let j = 0; j < 4; j++) {
      for (let i = 0; i < size; i++) {
        let x = i % widthVertex;
        let y = ~~(i / widthVertex);
        data[i] += Math.abs(
          perlin.noise(x / quality, y / quality, z) * quality * 4.75
        );
      }
      quality *= 5;
    }

    for (let i = 0, j = 0, l = vertices.array.length; i < l; i++, j += 3) {
      vertices.array[j + 1] = data[i] * 2;
    }

    return vertices;
  }

  loadTexture(base_url, normal_url) {
    const textureLoader = new Texture2DLoader();
    let base_texture = textureLoader.load(base_url);
    let normal_texture = textureLoader.load(normal_url);
    base_texture.encoding = t3d.TEXEL_ENCODING_TYPE.SRGB;
    normal_texture.encoding = t3d.TEXEL_ENCODING_TYPE.SRGB;
    base_texture.wrapS = normal_texture.wrapS = t3d.TEXTURE_WRAP.REPEAT;
    base_texture.wrapT = normal_texture.wrapT = t3d.TEXTURE_WRAP.REPEAT;
    let repeatsInwidth = 256,
      repeatsInlength = 256;
    this.planeMaterial = new t3d.PBRMaterial({
      // color: "white",
      // map: base_texture,
      // normalMap: normal_texture,
      // wireframe: true,
    });
    this.planeMaterial.shading = t3d.SHADING_TYPE.FLAT_SHADING;
    this.planeMaterial.metalness = 0.2;
    this.planeMaterial.roughness = 0.8;
    this.planeMaterial.diffuse.setHex(0xffffff);
    this.planeMaterial.envMapIntensity = 0.5;
    this.planeMaterial.diffuseMap = base_texture;
    this.planeMaterial.normalMap = normal_texture;
    this.planeMaterial.diffuseMapTransform.setUvTransform(0, 0, repeatsInlength, repeatsInwidth, 0, 0, 0);
    this.planeMaterial.normalScale.set(3, 3);
    // base_texture.repeat.set(repeatsInlength, repeatsInwidth);
    // normal_texture.repeat.set(repeatsInlength, repeatsInwidth);
  }

  getBoundingBox(box) {
    this.planeGeometry.computeBoundingBox();
    box.min = this.planeGeometry.boundingBox.min;
    box.max = this.planeGeometry.boundingBox.max;
    return box;//this.planeGeometry.boundingBox;
  }

  getMesh() {
    return new t3d.Mesh(this.planeGeometry, this.planeMaterial);
  }
}

export { Terrain };
