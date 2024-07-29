var Qe=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports);import{E as Pe,S as ie,m as qe,A as ae,M as G,d as ke,C as u,Q as fe,V as p,a as Ze,b as Je,c as Ke,R as et,T as we,e as tt,D as Oe,G as De,W as it,f as nt,g as st,h as rt,i as at,j as ot,k as lt,l as dt,O as ht,n as ue,H as pt,o as ft,P as ut,p as ct,q as gt,r as Le,s as mt,t as vt,u as yt,v as $e,w as We,x as _t,y as wt,I as Mt}from"./t3d-Xprb8rDB.js";var ti=Qe(ye=>{(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function i(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=i(r);fetch(r.href,s)}})();class xt extends Pe{constructor(){super(),this.bufferDependencies=[{key:"SceneBuffer"},{key:"GBuffer"}],this.multiBounce=!1,this.maxDistance=10,this.maxPixel=40,this.rayMarchSegment=10,this.darkFactor=1,this._gtaoPass=new ie(At),this._blendPass=new ie(qe),this._blendPass.material.premultipliedAlpha=!0}render(e,i,n,r,s){const a=i._renderTargetCache.allocate(0),h=i.getBuffer("SceneBuffer"),c=i.getBuffer("GBuffer"),d=c.getCurrentRenderStates();Me.copy(d.camera.projectionMatrix).inverse(),xe.copy(d.camera.viewMatrix).inverse(),e.setRenderTarget(n?a:r),e.setClearColor(1,1,1,1),e.clear(!0,!0,!1),this._gtaoPass.uniforms.maxDistance=this.maxDistance,this._gtaoPass.uniforms.maxPixel=this.maxPixel,this._gtaoPass.uniforms.rayMarchSegment=this.rayMarchSegment,this._gtaoPass.uniforms.darkFactor=this.darkFactor,this._setDirections(),this._gtaoPass.uniforms.normalTex=c.output()._attachments[ae.COLOR_ATTACHMENT0],this._gtaoPass.uniforms.depthTex=c.output()._attachments[ae.DEPTH_STENCIL_ATTACHMENT],this._gtaoPass.uniforms.colorTex=h.output()._attachments[ae.COLOR_ATTACHMENT0],this._gtaoPass.uniforms.cameraNear=d.camera.near,this._gtaoPass.uniforms.cameraFar=d.camera.far,Me.toArray(this._gtaoPass.uniforms.projectionInv),xe.toArray(this._gtaoPass.uniforms.viewInv),this._gtaoPass.uniforms.texSize[0]=c.output().width,this._gtaoPass.uniforms.texSize[1]=c.output().height,this._gtaoPass.material.defines.MULTI_BOUNCE!=this.multiBounce&&(this._gtaoPass.material.needsUpdate=!0,this._gtaoPass.material.defines.MULTI_BOUNCE=this.multiBounce),this._gtaoPass.render(e),n&&(e.setRenderTarget(r),e.setClearColor(0,0,0,0),s?e.clear(i.clearColor,i.clearDepth,i.clearStencil):e.clear(!0,!0,!1),this._blendPass.uniforms.texture1=n.texture,this._blendPass.uniforms.texture2=a.texture,s&&(this._blendPass.material.transparent=i._tempClearColor[3]<1||!i.clearColor,this._blendPass.renderStates.camera.rect.fromArray(i._tempViewport)),this._blendPass.render(e),s&&(this._blendPass.material.transparent=!1,this._blendPass.renderStates.camera.rect.set(0,0,1,1))),i._renderTargetCache.release(a,0)}dispose(){this._gtaoPass.dispose(),this._blendPass.dispose()}_setDirections(e=0){e=e%2+1,oe[e]||(oe[e]=bt(e)),this._gtaoPass.uniforms.directions=oe[e]}}const Me=new G,xe=new G,oe={};function bt(t){const e=new Float32Array(16),i=Math.PI*2*t/16,n=Math.PI*2/8;for(let r=0;r<8;r++){const s=i+r*n;e[r*2]=Math.sin(s),e[r*2+1]=Math.cos(s)}return e}const At={name:"ec_gtao",defines:{MULTI_BOUNCE:!1},uniforms:{maxDistance:10,maxPixel:40,darkFactor:1,rayMarchSegment:10,directions:new Float32Array(16),normalTex:null,depthTex:null,colorTex:null,cameraNear:1,cameraFar:500,projectionInv:new Float32Array(16),viewInv:new Float32Array(16),texSize:[1024,1024]},vertexShader:ke,fragmentShader:`
		uniform float maxDistance;
		uniform float maxPixel;
		uniform float darkFactor;
		uniform float rayMarchSegment;
		uniform vec2 directions[8];

		uniform sampler2D depthTex;
		uniform sampler2D normalTex;
		#ifdef MULTI_BOUNCE
			uniform sampler2D colorTex;
		#endif

		uniform float cameraNear;
		uniform float cameraFar;
		uniform mat4 projectionInv;
		uniform mat4 viewInv;
		uniform vec2 texSize;

		varying vec2 v_Uv;

		vec3 MultiBounce(float AO, vec3 Albedo) {
			vec3 A = 2.0 * Albedo - vec3(0.33);
			vec3 B = -4.8 * Albedo + vec3(0.64);
			vec3 C = 2.75 * Albedo + vec3(0.69);
			return max(vec3(AO), ((AO * A + B) * AO + C) * AO);
		}
		
		float calcPixelByNDC(float ndcZ) {
			float nearAspect = cameraNear / (cameraFar - cameraNear);
			float aspect = (1.0 + nearAspect) / (ndcZ + nearAspect);
			float viewPortMax = max(float(texSize[0]), float(texSize[1]));
			float maxPixel = min(viewPortMax, maxPixel * aspect);
			maxPixel = max(0.1, maxPixel);
			return maxPixel;
		}

		vec4 getPosition(const in vec2 screenPosition) {
			float sampleDepth = texture2D(depthTex, screenPosition).r;
			float z = sampleDepth * 2.0 - 1.0;
			vec4 Pos = vec4(screenPosition.xy * 2.0 - 1.0, z, 1.0);
			Pos = viewInv * projectionInv * Pos;
			return Pos/Pos.w;
		}
		
		float rayMarch(float maxPixelScaled) {
			vec4 normalAndGloss = texture2D(normalTex, v_Uv);
			vec3 originNormal = normalAndGloss.rgb * 2.0 - 1.0;
			float stepPixel = maxPixelScaled / rayMarchSegment;
			float totalWeight = 0.1;
			float darkWeight = 0.0;

			vec4 wPosition = getPosition(v_Uv);
			for (int i = 0; i < 8; i += 1) {
				vec2 dirVec2 = directions[i];
				for(float j = 1.1; j < maxPixelScaled; j += stepPixel) {
					vec2 sampleCoord = dirVec2 * j / texSize + v_Uv;
					if(sampleCoord.x >= 0. && sampleCoord.y >= 0.
						&& sampleCoord.x < texSize.x
						&& sampleCoord.y < texSize.y) {
						totalWeight += 1.0;
						vec4 samplePosition = getPosition(sampleCoord);
						vec3 distanceVec2 = samplePosition.xyz - wPosition.xyz;
						float distance = length(distanceVec2);
						if(distance < maxDistance){
							vec3 sampleDir = normalize(distanceVec2);
							float factor = max(0.0, dot(sampleDir, originNormal) - 0.1);
							factor *= 1.0 - distance / maxDistance;
							darkWeight += factor;
						}
					}
				}
			}
			return darkWeight / totalWeight;
		}
		
		void main() {
			float depth = texture2D(depthTex, v_Uv).r;
			if(depth >= (1.0 - EPSILON)) {
				discard;
			}
			vec4 wNormal = texture2D(normalTex, v_Uv);
			float ndcZ = depth * 2.0 - 1.0;
			float maxPixelScaled = calcPixelByNDC(ndcZ);
			float newFactor = rayMarch(maxPixelScaled);
		
			float factor = newFactor;
			factor = max(0., 1.0 - factor * darkFactor);
			vec3 gtao = vec3(factor);
			
			#ifdef MULTI_BOUNCE
				vec4 oc = texture2D(colorTex, v_Uv);
				gtao = MultiBounce(factor, oc.xyz);
			#endif
			
			gl_FragColor = vec4(gtao.xyz, 1.0);
		}
    `};class Et{constructor(e){this._sunLight=e.sunLight||null,this._moonLight=e.moonLight||null,this._hemisphereLight=e.hemisphereLight||null,this._lightColorGradient=new de().setColors({0:new u(255/255,231/255,0/255),.39:new u(180/255,220/255,255/255),.51:new u(180/255,220/255,255/255),.7:new u(180/255,220/255,255/255),1:new u(255/255,231/255,0/255)}),this._skyColorGradient=new de().setColors({0:new u(180/255,220/255,255/255),.39:new u(180/255,220/255,255/255),.51:new u(180/255,220/255,255/255),.7:new u(180/255,220/255,255/255),1:new u(203/255,146/255,65/255)}),this._groundColorGradient=new de().setColors({0:new u(63/255,149/255,255/255),.39:new u(180/255,220/255,255/255),.51:new u(180/255,220/255,255/255),.7:new u(180/255,220/255,255/255),1:new u(63/255,149/255,255/255)}),this._lightExposure=1,this._sunAndMoon={sunDirection:0,sunEquatorOffset:30,moonPositionOffset:0,distance:50},this._sunIntensity=1,this._moonIntensity=.1,this._timeline=0,this._stats={sunQuaternion:new fe,moonQuaternion:new fe,sunDirection:new p,moonDirection:new p,dayTimeBrightness:0,nightTimeBrightness:0,normalizedTime:0,lightColor:new u,skyColor:new u,equatorColor:new u,groundColor:new u}}set timeline(e){this._timeline=e,this.refresh()}get timeline(){return this._timeline}refresh(){this._updateStats(),this._updateLights()}_updateStats(){const e=this._timeline,i=this._sunAndMoon,n=this._lightColorGradient,r=this._skyColorGradient,s=this._groundColorGradient,a=this._stats,{sunQuaternion:h,moonQuaternion:c,sunDirection:d,moonDirection:g,lightColor:o,skyColor:f,groundColor:l}=a,_=e*360/24-90;N.set(0,B(i.sunDirection-90),B(i.sunEquatorOffset)),h.setFromEuler(N),N.set(B(_),0,0),le.setFromEuler(N),h.multiply(le),N.set(B(180),B(i.moonPositionOffset),B(180)),c.copy(h).multiply(le.setFromEuler(N)),J(d,h,-1),J(g,c,-1),a.dayTimeBrightness=Ie(Math.max(d.y+.2,0)/1.2,0,1),a.nightTimeBrightness=1-a.dayTimeBrightness,a.normalizedTime=d.y*.5+.5,n.evaluate(o,a.normalizedTime),r.evaluate(f,a.normalizedTime),s.evaluate(l,a.normalizedTime);const v=Math.pow(this._lightExposure,.4);Ee(o,v),Ee(f,v)}_updateLights(){const e=this._sunLight,i=this._moonLight,n=this._hemisphereLight,r=this._sunAndMoon,s=this._sunIntensity,a=this._moonIntensity,h=this._stats,{sunQuaternion:c,moonQuaternion:d,dayTimeBrightness:g,nightTimeBrightness:o,normalizedTime:f,lightColor:l,skyColor:_,groundColor:v}=h,b=Ie(g*4,0,1),m=o;e&&(J(e.position,c,-r.distance),e.lookAt(be,Ae),e.color.setRGB(l.r*b,l.g*b,l.b*b),e.intensity=f>.48?s:0),i&&(J(i.position,d,-r.distance),i.lookAt(be,Ae),i.color.setRGB(l.r*m,l.g*m,l.b*m),i.intensity=f<.5&&a>.01?a:0),n&&(n.color.copy(_),n.groundColor.copy(v))}}const be=new p(0,0,0),Ae=new p(0,1,0),N=new Ze(0,0,0,"YZX"),le=new fe;function B(t){return t*Math.PI/180}function J(t,e,i){return t.set(0,0,1),t.applyQuaternion(e),t.normalize(),t.multiplyScalar(i)}class de{constructor(){this._array=[]}setColors(e){this._array.length=0;for(const i in e)this._array.push({key:+i,value:e[i]});return this._array.sort((i,n)=>i.key-n.key),this}evaluate(e,i){for(let n=0;n<this._array.length-1;n++){const r=this._array[n],s=this._array[n+1];if(r.key<=i&&i<=s.key){const a=(i-r.key)/(s.key-r.key);e.lerpColors(r.value,s.value,a)}}return e}}function Ee(t,e){return t.r*=e,t.g*=e,t.b*=e,t}function Ie(t,e,i){return t>i?i:t<e?e:t}let he;const It=new p(0,1,0),O=new p,K=new p(0,1,0),U=new p,ee=new G;class Ct{constructor(){this.time=0,this.lines=[]}createLine(e){he=new Je,he.setFromPoints(e.array,{close:!1,bevelRadius:3.5}),this.lines.push({curvePath3:he.computeFrames({divisions:12,up:new p(0,1,0)}),id:e.id})}getPositionAndQuaternionOnPath(e,i,n,r){let s=this.lines.find(d=>d.id===e).curvePath3;const h=s.lengths[s.lengths.length-1]*i,c=s.lengths.findIndex(d=>d>=h);if(c===0)O.copy(s.tangents[0]),n.position.copy(s.points[0]);else{const d=s.lengths[c-1],g=s.lengths[c]-d,o=(h-d)/g,f=s.points[c],l=s.points[c-1];O.copy(f).sub(l).normalize(),n.position.copy(O).multiplyScalar(g*o).add(l)}U.crossVectors(O,It).normalize(),K.crossVectors(U,O).normalize(),ee.set(U.x,U.y,U.z,0,K.x,K.y,K.z,0,-O.x,-O.y,-O.z,0,0,0,0,1),ee.inverse(),ee.multiply(r),n.quaternion.setFromRotationMatrix(ee)}}class Tt extends Pe{constructor(e,i){super(),this.type=0,this._mixPass=new ie(St),this._copyPass=new ie(Ke),this._renderTarget=new et(e,i),this._renderTarget.texture.generateMipmaps=!1,this._renderTarget.texture.minFilter=we.LINEAR,this._renderTarget.texture.magFilter=we.LINEAR,this.progress=0,this.strength=.3}resize(e,i){this._renderTarget.resize(e,i)}render(e,i,n,r,s){this.progress<1&&(this.progress===0?(e.setRenderTarget(this._renderTarget),this._copyPass.material.uniforms.tDiffuse=n.texture,e.setClearColor(0,0,0,0),this._copyPass.render(e),this._copyPass.material.uniforms.tDiffuse=this._renderTarget.texture,e.setRenderTarget(r),e.setClearColor(0,0,0,0),this._copyPass.render(e)):(this._mixPass.material.uniforms.texture1=n.texture,this._mixPass.material.uniforms.texture2=this._renderTarget.texture,this._mixPass.material.uniforms.type=this.type,this._mixPass.material.uniforms.progress=this.progress,this._mixPass.material.uniforms.strength=this.strength,e.setRenderTarget(r),e.setClearColor(0,0,0,0),this._mixPass.render(e)))}dispose(){this._mixPass.dispose()}}const St={name:"ec_mixShader",defines:{},uniforms:{texture1:null,texture2:null,type:0,progress:0,strength:.3},vertexShader:ke,fragmentShader:`
    uniform sampler2D texture1;
    uniform sampler2D texture2;
    uniform int type;
    uniform float progress;
    uniform float strength;
    varying vec2 v_Uv;

    float Linear_ease(in float begin, in float change, in float duration, in float time) {
        return change * time / duration + begin;
    }

    float Exponential_easeInOut(in float begin, in float change, in float duration, in float time) {
        if (time == 0.0)
            return begin;
        else if (time == duration)
            return begin + change;
        time = time / (duration / 2.0);
        if (time < 1.0)
            return change / 2.0 * pow(2.0, 10.0 * (time - 1.0)) + begin;
        return change / 2.0 * (-pow(2.0, -10.0 * (time - 1.0)) + 2.0) + begin;
    }

    float Sinusoidal_easeInOut(in float begin, in float change, in float duration, in float time) {
        return -change / 2.0 * (cos(PI * time / duration) - 1.0) + begin;
    }

    float random(in vec3 scale, in float seed) {
        return fract(sin(dot(gl_FragCoord.xyz + seed, scale)) * 43758.5453 + seed);
    }

    vec3 crossFade(in vec2 uv, in float dissolve) {
        return mix(texture(texture1, uv).rgb, texture(texture2, uv).rgb, dissolve);
    }
    void main() {
        vec4 color1 = texture2D(texture1, v_Uv);
        vec4 color2 = texture2D(texture2, v_Uv);
        if(type == 0){
            gl_FragColor = mix(color1, color2, progress);
        }else{
            vec2 center = vec2(Linear_ease(0.5, 0.0, 1.0, progress),0.5);
            float dissolve = Exponential_easeInOut(0.0, 1.0, 0.4, progress);
            float strength = Sinusoidal_easeInOut(0.0, strength, 0.5, progress);
            vec3 color = vec3(0.0);
            float total = 0.0;
            vec2 toCenter = center - v_Uv;
            float offset = random(vec3(12.9898, 78.233, 151.7182), 0.0)*0.5;
            
            for (float t = 0.0; t <= 20.0; t++) {
                float percent = (t + offset) / 20.0;
                float weight = 1.0 * (percent - percent * percent);
                color += crossFade(v_Uv + toCenter * percent * strength, dissolve) * weight;
                total += weight;
            }

            gl_FragColor = vec4(color / total, 1.0);
        }
    }
`};var Ft=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Pt(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Re={exports:{}};(function(t,e){(function(i,n){t.exports=n()})(Ft,function(){var i=function(){function n(l){return a.appendChild(l.dom),l}function r(l){for(var _=0;_<a.children.length;_++)a.children[_].style.display=_===l?"block":"none";s=l}var s=0,a=document.createElement("div");a.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",a.addEventListener("click",function(l){l.preventDefault(),r(++s%a.children.length)},!1);var h=(performance||Date).now(),c=h,d=0,g=n(new i.Panel("FPS","#0ff","#002")),o=n(new i.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var f=n(new i.Panel("MB","#f08","#201"));return r(0),{REVISION:16,dom:a,addPanel:n,showPanel:r,begin:function(){h=(performance||Date).now()},end:function(){d++;var l=(performance||Date).now();if(o.update(l-h,200),l>c+1e3&&(g.update(1e3*d/(l-c),100),c=l,d=0,f)){var _=performance.memory;f.update(_.usedJSHeapSize/1048576,_.jsHeapSizeLimit/1048576)}return l},update:function(){h=this.end()},domElement:a,setMode:r}};return i.Panel=function(n,r,s){var a=1/0,h=0,c=Math.round,d=c(window.devicePixelRatio||1),g=80*d,o=48*d,f=3*d,l=2*d,_=3*d,v=15*d,b=74*d,m=30*d,y=document.createElement("canvas");y.width=g,y.height=o,y.style.cssText="width:80px;height:48px";var M=y.getContext("2d");return M.font="bold "+9*d+"px Helvetica,Arial,sans-serif",M.textBaseline="top",M.fillStyle=s,M.fillRect(0,0,g,o),M.fillStyle=r,M.fillText(n,f,l),M.fillRect(_,v,b,m),M.fillStyle=s,M.globalAlpha=.9,M.fillRect(_,v,b,m),{dom:y,update:function(A,W){a=Math.min(a,A),h=Math.max(h,A),M.fillStyle=s,M.globalAlpha=1,M.fillRect(0,0,g,v),M.fillStyle=r,M.fillText(c(A)+" "+n+" ("+c(a)+"-"+c(h)+")",f,l),M.drawImage(y,_+d,v,b-d,m,_,v,b-d,m),M.fillRect(_+b-d,v,d,m),M.fillStyle=s,M.globalAlpha=.9,M.fillRect(_+b-d,v,d,c((1-A/W)*m))}}},i})})(Re);var kt=Re.exports;const Ot=Pt(kt),V=new Ot;class Dt{constructor(){const e=window.devicePixelRatio;let i=window.innerWidth||2,n=window.innerHeight||2;const r=document.createElement("canvas");r.width=Math.floor(i*e),r.height=Math.floor(n*e),r.style.width=i+"px",r.style.height=n+"px",document.body.appendChild(r),V.domElement.style.position="absolute",V.domElement.style.top="0px",r.parentElement.appendChild(V.domElement);const s=r.getContext("webgl2",{antialias:!0,alpha:!1}),a=new it(s);this._renderer=a;const h=new ct,c=new nt(i,n,{webgl2:!0,highDynamicRange:!0,samplerNumber:Math.min(a.capabilities.maxSamples,5),floatColorBuffer:!!a.capabilities.getExtension("EXT_color_buffer_float")});c.sceneMSAA=!0;const d=new xt;d.active=!0,d.maxPixel=14,c.addEffect("GTAO",d,1);const g=new st;g.toneMapping=rt.Linear,g.toneMappingExposure=1,g.outputColorSpace=at.SRGB,c.addEffect("ToneMapping",g,199),this.mixEffect=new Tt(i,n),c.addEffect("Mix",this.mixEffect,9999),this.mixEffect.speed=2;const o=new ot(r),f=new lt,l=new dt;l.position.set(-100,100,-200),l.setPerspective(5/180*Math.PI,i/n,10,3e3),f.add(l);const _=new ht(l,r);this.controls=_;const v=new ue;v.castShadow=!0,v.shadow.cameraNear=1,v.shadow.cameraFar=100,v.shadow.mapSize.set(1024,1024),v.shadow.windowSize=50,v.shadow.bias=-.002,f.add(v);const b=new ue;b.castShadow=!0,b.shadow.cameraNear=1,b.shadow.cameraFar=100,b.shadow.mapSize.set(1024,1024),b.shadow.windowSize=50,b.shadow.bias=-.002,f.add(b);const m=new pt;m.intensity=.1,f.add(m);const y=new Et({sunLight:v,moonLight:b,hemisphereLight:m});this._skyTimeline=y,y._sunAndMoon.sunEquatorOffset=60,y._lightExposure=16,y.timeline=10,y.needsUpdate=!1,this.trajectory=new Ct,this.trajectory.createLine({array:[new p(-19.962,0,16.648),new p(-17.962,0,-16.694),new p(19.822,0,-16.694)],id:1}),this.trajectory.createLine({array:[new p(17.822,0,-15.694),new p(-17.062,0,-15.048),new p(-18.062,0,14.048)],id:2}),this.trajectory.createLine({array:[new p(-11.939,.15,-4.198),new p(-12.363,.15,8.289)],id:3}),this.trajectory.createLine({array:[new p(2.075,.15,-5.131),new p(-2.195,.15,-5.131),new p(-2.195,.15,-11.256)],id:4}),this.elevators=[];let M=0;j.load("./models/Car/Car.gltf").then(I=>{this.car=I.root,this.cars=[];for(let x=0;x<12;x++)this.cars.push(this.car.clone()),x<6?(this.cars[x].euler.set(0,Math.PI,0),this.cars[x].updateMatrix(!0),this.cars[x].userData.matrix=new G().copy(this.cars[x].matrix),this.cars[x].userData.speed=.8+Math.random()*.2):(this.cars[x].euler.set(0,Math.PI,0),this.cars[x].updateMatrix(!0),this.cars[x].userData.matrix=new G().copy(this.cars[x].matrix),this.cars[x].userData.speed=.8+Math.random()*.2),this.cars[x].userData.progress=x*.16,this.scene.add(this.cars[x])}),this.infoModels=[],this.points=[],j.load("./models/tag/pos/pos.gltf").then(I=>{for(let x=0;x<P.point.length;x++){I.root.children[0].children[0].material.depthWrite=!1,I.root.children[0].children[1].material.depthWrite=!1;const w=I.root.clone();P.point[x].y+=.1,w.position.copy(P.point[x]),w.position=P.point[x],w.userData.progress=x*.16,w.userData.speed=1.2+Math.random()*.2,w.userData.matrix=new G,this.infoModels.push(w),this.points.push(w),w.visible=!1,this.scene.add(w)}}),j.load("./models/tag/camera/camera.gltf").then(I=>{for(let x=0;x<P.camera.length;x++){const w=I.root.clone();w.position.copy(P.camera[x]),w.position=P.camera[x].pos,this.infoModels.push(w),w.visible=!1,w.lookAt(P.camera[x].target,new p(0,1,0)),this.scene.add(w)}}),this.floors=[],j.load("./models/floor/floor.gltf").then(I=>{for(let x=0;x<P.camera.length;x++){const w=I.root.clone();w.euler.set(0,Math.PI,0),w.visible=!1,this.floor=w,this.floors.push(w),this.scene.add(w)}});let A=0;const W=new gt,Z=I=>{requestAnimationFrame(Z),V.begin();const x=I-M;if(M=I,this._loop(x/1e3),A=W.getDelta(),this.cars)for(let w=0;w<6;w++)this.trajectory.getPositionAndQuaternionOnPath(1,this.cars[w].userData.progress%1,this.cars[w],this.cars[w].userData.matrix),this.trajectory.getPositionAndQuaternionOnPath(2,this.cars[w+6].userData.progress%1,this.cars[w+6],this.cars[w+6].userData.matrix),this.cars[w].userData.progress+=this.cars[w].userData.speed*A*.045,this.cars[w+6].userData.progress+=this.cars[w+6].userData.speed*A*.045;if(this.points&&this.points.length>0){this.trajectory.getPositionAndQuaternionOnPath(3,this.points[4].userData.progress%1,this.points[4],this.points[4].userData.matrix),this.points[4].userData.progress+=this.points[4].userData.speed*A*.045;for(let w=0;w<2;w++)this.trajectory.getPositionAndQuaternionOnPath(4,this.points[5+w].userData.progress%1,this.points[5+w],this.points[5+w].userData.matrix),this.points[5+w].userData.progress+=this.points[5+w].userData.speed*A*.045}if(this.elevators.length>0)for(let w=0;w<this.elevators.length;w++){const C=this.elevators[w];C.userData.progress>=1||(C.userData.progress===0&&C.position.copy(C.userData.array[0]),C.position.lerpVectors(C.userData.array[0],C.userData.array[1],C.userData.progress),C.userData.progress+=C.userData.speed*A*.09)}this.mixEffect&&(this.mixEffect!=0&&(this.mixEffect.progress-=A*this.mixEffect.speed),this.mixEffect.progress<0&&(this.mixEffect.progress=0)),(this._skyTimeline||this._skyTimeline.needsUpdate)&&(this._skyTimeline.updateNightToDay&&(this._skyTimeline.timeline-=A*14,this._skyTimeline.timeline<9.84&&(this._skyTimeline.updateNightToDay=!1,this._skyTimeline.needsUpdate=!1,this._skyTimeline.timeline=9.84)),this._skyTimeline.updateDayToNight&&(this._skyTimeline.timeline+=A*14,this._skyTimeline.timeline>24&&(this._skyTimeline.updateDayToNight=!1,this._skyTimeline.needsUpdate=!1,this._skyTimeline.timeline=24))),_.update(),f.updateMatrix(),f.updateRenderStates(l),f.updateRenderQueue(l),h.render(a,f),a.setClearColor(0,0,0,1),c.render(a,f,l,o),V.end()};requestAnimationFrame(Z);function re(){i=window.innerWidth||2,n=window.innerHeight||2,l.setPerspective(5/180*Math.PI,i/n,10,3e3),o.resize(Math.floor(i*e),Math.floor(n*e)),c.resize(i,n),r.style.width=i+"px",r.style.height=n+"px"}window.addEventListener("resize",re,!1),this.effectComposer=c,this._scene=f,this._camera=l,this._loop=function(){}}setEnvironmentTexture(e){const{name:i,ext:n,tex:r}=Ce[e];r?this.scene.environment=r:Lt.loadAsync(`images/${i}.${n}`).then(s=>{let a=new ft;return a.image={data:s.data,width:s.width,height:s.height},a.type=s.type,s.magFilter!==void 0&&(a.magFilter=s.magFilter),s.minFilter!==void 0&&(a.minFilter=s.minFilter),s.generateMipmaps!==void 0&&(a.generateMipmaps=s.generateMipmaps),a}).then(s=>ut.prefilterEnvironmentMap(this._renderer,s,{sampleSize:1024})).then(s=>{Ce[e].tex=s,this.scene.environment=s})}setEnvironmentParams(e){this.scene.environmentLightIntensity=e.diffuseIntensity}get scene(){return this._scene}get camera(){return this._camera}set loop(e){this._loop=e}}const Lt=new tt,ze=new Oe;ze.setDecoderPath("./libs/draco/");const j=new De;j.setDRACOLoader(ze);const Ce={Pisa:{name:"pisa",ext:"hdr"},Factory_Catwalk:{name:"Factory_Catwalk",ext:"hdr"},Barce_Rooftop_C:{name:"Barce_Rooftop_C",ext:"hdr"},Grand_Canyon_C:{name:"Grand_Canyon_C",ext:"hdr"},blue:{name:"blue",ext:"hdr"},Hall:{name:"Hall",ext:"hdr"},Ice_Lake:{name:"Ice_Lake",ext:"hdr"},Old_Industrial_Hall:{name:"Old_Industrial_Hall",ext:"hdr"},Venice_Sunset_1k:{name:"venice_sunset_1k",ext:"hdr"}},P={point:[new p(-1.211,0,-6.891),new p(-1.211,0,-9.801),new p(-15.48,0,6.772),new p(-15.46,0,9.127),new p(-2.89,.15,-9.801),new p(-14.165,.15,6.772),new p(-13.495,.15,9.127)],topCard:[new p(17.822,0,-15.694),new p(-17.062,0,-15.048),new p(-18.062,0,14.048)],camera:[{pos:new p(12.592,3,-14.055),target:new p(13.592,3,-10.055)},{pos:new p(5.49,3,-14.055),target:new p(5.49,3,-10.055)},{pos:new p(4.101,3,-14.055),target:new p(4.101,3,-17.055)},{pos:new p(.101,3,-14.055),target:new p(.101,3,-14.055)},{pos:new p(-4.93,3,-12.807),target:new p(-4.93,3,-12.807)},{pos:new p(-11.157,3,-12.807),target:new p(-11.157,3,-12.807)},{pos:new p(-1.282,3,-11.379),target:new p(-1.282,3,-19.379)},{pos:new p(-1.282,3,-8.327),target:new p(-1.282,3,-10.327)},{pos:new p(-10.44,3,-4.213),target:new p(-10.44,3,-8.213)},{pos:new p(-12.159,3,-1.868),target:new p(-12.159,3,-9.801)},{pos:new p(-12.159,3,-1.868),target:new p(-12.159,3,-9.801)},{pos:new p(-12.787,3,12.047),target:new p(-12.787,3,-9.801)},{pos:new p(2.252,3,7.131),target:new p(2.252,3,-9.801)}]};/**
 * lil-gui
 * https://lil-gui.georgealways.com
 * @version 0.19.1
 * @author George Michael Brower
 * @license MIT
 */class S{constructor(e,i,n,r,s="div"){this.parent=e,this.object=i,this.property=n,this._disabled=!1,this._hidden=!1,this.initialValue=this.getValue(),this.domElement=document.createElement(s),this.domElement.classList.add("controller"),this.domElement.classList.add(r),this.$name=document.createElement("div"),this.$name.classList.add("name"),S.nextNameID=S.nextNameID||0,this.$name.id=`lil-gui-name-${++S.nextNameID}`,this.$widget=document.createElement("div"),this.$widget.classList.add("widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.domElement.addEventListener("keydown",a=>a.stopPropagation()),this.domElement.addEventListener("keyup",a=>a.stopPropagation()),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(n)}name(e){return this._name=e,this.$name.innerHTML=e,this}onChange(e){return this._onChange=e,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(e=!0){return this.disable(!e)}disable(e=!0){return e===this._disabled?this:(this._disabled=e,this.domElement.classList.toggle("disabled",e),this.$disable.toggleAttribute("disabled",e),this)}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}options(e){const i=this.parent.add(this.object,this.property,e);return i.name(this._name),this.destroy(),i}min(e){return this}max(e){return this}step(e){return this}decimals(e){return this}listen(e=!0){return this._listening=e,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);const e=this.save();e!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=e}getValue(){return this.object[this.property]}setValue(e){return this.object[this.property]=e,this._callOnChange(),this.updateDisplay(),this}updateDisplay(){return this}load(e){return this.setValue(e),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}}class $t extends S{constructor(e,i,n){super(e,i,n,"boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}}function ce(t){let e,i;return(e=t.match(/(#|0x)?([a-f0-9]{6})/i))?i=e[2]:(e=t.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?i=parseInt(e[1]).toString(16).padStart(2,0)+parseInt(e[2]).toString(16).padStart(2,0)+parseInt(e[3]).toString(16).padStart(2,0):(e=t.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(i=e[1]+e[1]+e[2]+e[2]+e[3]+e[3]),i?"#"+i:!1}const Wt={isPrimitive:!0,match:t=>typeof t=="string",fromHexString:ce,toHexString:ce},X={isPrimitive:!0,match:t=>typeof t=="number",fromHexString:t=>parseInt(t.substring(1),16),toHexString:t=>"#"+t.toString(16).padStart(6,0)},Rt={isPrimitive:!1,match:t=>Array.isArray(t),fromHexString(t,e,i=1){const n=X.fromHexString(t);e[0]=(n>>16&255)/255*i,e[1]=(n>>8&255)/255*i,e[2]=(n&255)/255*i},toHexString([t,e,i],n=1){n=255/n;const r=t*n<<16^e*n<<8^i*n<<0;return X.toHexString(r)}},zt={isPrimitive:!1,match:t=>Object(t)===t,fromHexString(t,e,i=1){const n=X.fromHexString(t);e.r=(n>>16&255)/255*i,e.g=(n>>8&255)/255*i,e.b=(n&255)/255*i},toHexString({r:t,g:e,b:i},n=1){n=255/n;const r=t*n<<16^e*n<<8^i*n<<0;return X.toHexString(r)}},Nt=[Wt,X,Rt,zt];function Bt(t){return Nt.find(e=>e.match(t))}class Gt extends S{constructor(e,i,n,r){super(e,i,n,"color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=Bt(this.initialValue),this._rgbScale=r,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{const s=ce(this.$text.value);s&&this._setValueFromHexString(s)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(e){if(this._format.isPrimitive){const i=this._format.fromHexString(e);this.setValue(i)}else this._format.fromHexString(e,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(e){return this._setValueFromHexString(e),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}}class pe extends S{constructor(e,i,n){super(e,i,n,"function"),this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",r=>{r.preventDefault(),this.getValue().call(this.object),this._callOnChange()}),this.$button.addEventListener("touchstart",()=>{},{passive:!0}),this.$disable=this.$button}}class Ut extends S{constructor(e,i,n,r,s,a){super(e,i,n,"number"),this._initInput(),this.min(r),this.max(s);const h=a!==void 0;this.step(h?a:this._getImplicitStep(),h),this.updateDisplay()}decimals(e){return this._decimals=e,this.updateDisplay(),this}min(e){return this._min=e,this._onUpdateMinMax(),this}max(e){return this._max=e,this._onUpdateMinMax(),this}step(e,i=!0){return this._step=e,this._stepExplicit=i,this}updateDisplay(){const e=this.getValue();if(this._hasSlider){let i=(e-this._min)/(this._max-this._min);i=Math.max(0,Math.min(i,1)),this.$fill.style.width=i*100+"%"}return this._inputFocused||(this.$input.value=this._decimals===void 0?e:e.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),window.matchMedia("(pointer: coarse)").matches&&(this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any")),this.$widget.appendChild(this.$input),this.$disable=this.$input;const i=()=>{let y=parseFloat(this.$input.value);isNaN(y)||(this._stepExplicit&&(y=this._snap(y)),this.setValue(this._clamp(y)))},n=y=>{const M=parseFloat(this.$input.value);isNaN(M)||(this._snapClampSetValue(M+y),this.$input.value=this.getValue())},r=y=>{y.key==="Enter"&&this.$input.blur(),y.code==="ArrowUp"&&(y.preventDefault(),n(this._step*this._arrowKeyMultiplier(y))),y.code==="ArrowDown"&&(y.preventDefault(),n(this._step*this._arrowKeyMultiplier(y)*-1))},s=y=>{this._inputFocused&&(y.preventDefault(),n(this._step*this._normalizeMouseWheel(y)))};let a=!1,h,c,d,g,o;const f=5,l=y=>{h=y.clientX,c=d=y.clientY,a=!0,g=this.getValue(),o=0,window.addEventListener("mousemove",_),window.addEventListener("mouseup",v)},_=y=>{if(a){const M=y.clientX-h,A=y.clientY-c;Math.abs(A)>f?(y.preventDefault(),this.$input.blur(),a=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(M)>f&&v()}if(!a){const M=y.clientY-d;o-=M*this._step*this._arrowKeyMultiplier(y),g+o>this._max?o=this._max-g:g+o<this._min&&(o=this._min-g),this._snapClampSetValue(g+o)}d=y.clientY},v=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",_),window.removeEventListener("mouseup",v)},b=()=>{this._inputFocused=!0},m=()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()};this.$input.addEventListener("input",i),this.$input.addEventListener("keydown",r),this.$input.addEventListener("wheel",s,{passive:!1}),this.$input.addEventListener("mousedown",l),this.$input.addEventListener("focus",b),this.$input.addEventListener("blur",m)}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("hasSlider");const e=(m,y,M,A,W)=>(m-y)/(M-y)*(W-A)+A,i=m=>{const y=this.$slider.getBoundingClientRect();let M=e(m,y.left,y.right,this._min,this._max);this._snapClampSetValue(M)},n=m=>{this._setDraggingStyle(!0),i(m.clientX),window.addEventListener("mousemove",r),window.addEventListener("mouseup",s)},r=m=>{i(m.clientX)},s=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",r),window.removeEventListener("mouseup",s)};let a=!1,h,c;const d=m=>{m.preventDefault(),this._setDraggingStyle(!0),i(m.touches[0].clientX),a=!1},g=m=>{m.touches.length>1||(this._hasScrollBar?(h=m.touches[0].clientX,c=m.touches[0].clientY,a=!0):d(m),window.addEventListener("touchmove",o,{passive:!1}),window.addEventListener("touchend",f))},o=m=>{if(a){const y=m.touches[0].clientX-h,M=m.touches[0].clientY-c;Math.abs(y)>Math.abs(M)?d(m):(window.removeEventListener("touchmove",o),window.removeEventListener("touchend",f))}else m.preventDefault(),i(m.touches[0].clientX)},f=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",o),window.removeEventListener("touchend",f)},l=this._callOnFinishChange.bind(this),_=400;let v;const b=m=>{if(Math.abs(m.deltaX)<Math.abs(m.deltaY)&&this._hasScrollBar)return;m.preventDefault();const M=this._normalizeMouseWheel(m)*this._step;this._snapClampSetValue(this.getValue()+M),this.$input.value=this.getValue(),clearTimeout(v),v=setTimeout(l,_)};this.$slider.addEventListener("mousedown",n),this.$slider.addEventListener("touchstart",g,{passive:!1}),this.$slider.addEventListener("wheel",b,{passive:!1})}_setDraggingStyle(e,i="horizontal"){this.$slider&&this.$slider.classList.toggle("active",e),document.body.classList.toggle("lil-gui-dragging",e),document.body.classList.toggle(`lil-gui-${i}`,e)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(e){let{deltaX:i,deltaY:n}=e;return Math.floor(e.deltaY)!==e.deltaY&&e.wheelDelta&&(i=0,n=-e.wheelDelta/120,n*=this._stepExplicit?1:10),i+-n}_arrowKeyMultiplier(e){let i=this._stepExplicit?1:10;return e.shiftKey?i*=10:e.altKey&&(i/=10),i}_snap(e){const i=Math.round(e/this._step)*this._step;return parseFloat(i.toPrecision(15))}_clamp(e){return e<this._min&&(e=this._min),e>this._max&&(e=this._max),e}_snapClampSetValue(e){this.setValue(this._clamp(this._snap(e)))}get _hasScrollBar(){const e=this.parent.root.$children;return e.scrollHeight>e.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}}class Vt extends S{constructor(e,i,n,r){super(e,i,n,"option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.options(r)}options(e){return this._values=Array.isArray(e)?e:Object.values(e),this._names=Array.isArray(e)?e:Object.keys(e),this.$select.replaceChildren(),this._names.forEach(i=>{const n=document.createElement("option");n.innerHTML=i,this.$select.appendChild(n)}),this.updateDisplay(),this}updateDisplay(){const e=this.getValue(),i=this._values.indexOf(e);return this.$select.selectedIndex=i,this.$display.innerHTML=i===-1?e:this._names[i],this}}class jt extends S{constructor(e,i,n){super(e,i,n,"string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",r=>{r.code==="Enter"&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}}const Ht=`.lil-gui {
  font-family: var(--font-family);
  font-size: var(--font-size);
  line-height: 1;
  font-weight: normal;
  font-style: normal;
  text-align: left;
  color: var(--text-color);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  --background-color: #1f1f1f;
  --text-color: #ebebeb;
  --title-background-color: #111111;
  --title-text-color: #ebebeb;
  --widget-color: #424242;
  --hover-color: #4f4f4f;
  --focus-color: #595959;
  --number-color: #2cc9ff;
  --string-color: #a2db3c;
  --font-size: 11px;
  --input-font-size: 11px;
  --font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif;
  --font-family-mono: Menlo, Monaco, Consolas, "Droid Sans Mono", monospace;
  --padding: 4px;
  --spacing: 4px;
  --widget-height: 20px;
  --title-height: calc(var(--widget-height) + var(--spacing) * 1.25);
  --name-width: 45%;
  --slider-knob-width: 2px;
  --slider-input-width: 27%;
  --color-input-width: 27%;
  --slider-input-min-width: 45px;
  --color-input-min-width: 45px;
  --folder-indent: 7px;
  --widget-padding: 0 0 0 3px;
  --widget-border-radius: 2px;
  --checkbox-size: calc(0.75 * var(--widget-height));
  --scrollbar-width: 5px;
}
.lil-gui, .lil-gui * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.lil-gui.root {
  width: var(--width, 245px);
  display: flex;
  flex-direction: column;
  background: var(--background-color);
}
.lil-gui.root > .title {
  background: var(--title-background-color);
  color: var(--title-text-color);
}
.lil-gui.root > .children {
  overflow-x: hidden;
  overflow-y: auto;
}
.lil-gui.root > .children::-webkit-scrollbar {
  width: var(--scrollbar-width);
  height: var(--scrollbar-width);
  background: var(--background-color);
}
.lil-gui.root > .children::-webkit-scrollbar-thumb {
  border-radius: var(--scrollbar-width);
  background: var(--focus-color);
}
@media (pointer: coarse) {
  .lil-gui.allow-touch-styles, .lil-gui.allow-touch-styles .lil-gui {
    --widget-height: 28px;
    --padding: 6px;
    --spacing: 6px;
    --font-size: 13px;
    --input-font-size: 16px;
    --folder-indent: 10px;
    --scrollbar-width: 7px;
    --slider-input-min-width: 50px;
    --color-input-min-width: 65px;
  }
}
.lil-gui.force-touch-styles, .lil-gui.force-touch-styles .lil-gui {
  --widget-height: 28px;
  --padding: 6px;
  --spacing: 6px;
  --font-size: 13px;
  --input-font-size: 16px;
  --folder-indent: 10px;
  --scrollbar-width: 7px;
  --slider-input-min-width: 50px;
  --color-input-min-width: 65px;
}
.lil-gui.autoPlace {
  max-height: 100%;
  position: fixed;
  top: 0;
  right: 15px;
  z-index: 1001;
}

.lil-gui .controller {
  display: flex;
  align-items: center;
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
}
.lil-gui .controller.disabled {
  opacity: 0.5;
}
.lil-gui .controller.disabled, .lil-gui .controller.disabled * {
  pointer-events: none !important;
}
.lil-gui .controller > .name {
  min-width: var(--name-width);
  flex-shrink: 0;
  white-space: pre;
  padding-right: var(--spacing);
  line-height: var(--widget-height);
}
.lil-gui .controller .widget {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  min-height: var(--widget-height);
}
.lil-gui .controller.string input {
  color: var(--string-color);
}
.lil-gui .controller.boolean {
  cursor: pointer;
}
.lil-gui .controller.color .display {
  width: 100%;
  height: var(--widget-height);
  border-radius: var(--widget-border-radius);
  position: relative;
}
@media (hover: hover) {
  .lil-gui .controller.color .display:hover:before {
    content: " ";
    display: block;
    position: absolute;
    border-radius: var(--widget-border-radius);
    border: 1px solid #fff9;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
}
.lil-gui .controller.color input[type=color] {
  opacity: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
}
.lil-gui .controller.color input[type=text] {
  margin-left: var(--spacing);
  font-family: var(--font-family-mono);
  min-width: var(--color-input-min-width);
  width: var(--color-input-width);
  flex-shrink: 0;
}
.lil-gui .controller.option select {
  opacity: 0;
  position: absolute;
  width: 100%;
  max-width: 100%;
}
.lil-gui .controller.option .display {
  position: relative;
  pointer-events: none;
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  line-height: var(--widget-height);
  max-width: 100%;
  overflow: hidden;
  word-break: break-all;
  padding-left: 0.55em;
  padding-right: 1.75em;
  background: var(--widget-color);
}
@media (hover: hover) {
  .lil-gui .controller.option .display.focus {
    background: var(--focus-color);
  }
}
.lil-gui .controller.option .display.active {
  background: var(--focus-color);
}
.lil-gui .controller.option .display:after {
  font-family: "lil-gui";
  content: "↕";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  padding-right: 0.375em;
}
.lil-gui .controller.option .widget,
.lil-gui .controller.option select {
  cursor: pointer;
}
@media (hover: hover) {
  .lil-gui .controller.option .widget:hover .display {
    background: var(--hover-color);
  }
}
.lil-gui .controller.number input {
  color: var(--number-color);
}
.lil-gui .controller.number.hasSlider input {
  margin-left: var(--spacing);
  width: var(--slider-input-width);
  min-width: var(--slider-input-min-width);
  flex-shrink: 0;
}
.lil-gui .controller.number .slider {
  width: 100%;
  height: var(--widget-height);
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
  padding-right: var(--slider-knob-width);
  overflow: hidden;
  cursor: ew-resize;
  touch-action: pan-y;
}
@media (hover: hover) {
  .lil-gui .controller.number .slider:hover {
    background: var(--hover-color);
  }
}
.lil-gui .controller.number .slider.active {
  background: var(--focus-color);
}
.lil-gui .controller.number .slider.active .fill {
  opacity: 0.95;
}
.lil-gui .controller.number .fill {
  height: 100%;
  border-right: var(--slider-knob-width) solid var(--number-color);
  box-sizing: content-box;
}

.lil-gui-dragging .lil-gui {
  --hover-color: var(--widget-color);
}
.lil-gui-dragging * {
  cursor: ew-resize !important;
}

.lil-gui-dragging.lil-gui-vertical * {
  cursor: ns-resize !important;
}

.lil-gui .title {
  height: var(--title-height);
  line-height: calc(var(--title-height) - 4px);
  font-weight: 600;
  padding: 0 var(--padding);
  -webkit-tap-highlight-color: transparent;
  cursor: pointer;
  outline: none;
  text-decoration-skip: objects;
}
.lil-gui .title:before {
  font-family: "lil-gui";
  content: "▾";
  padding-right: 2px;
  display: inline-block;
}
.lil-gui .title:active {
  background: var(--title-background-color);
  opacity: 0.75;
}
@media (hover: hover) {
  body:not(.lil-gui-dragging) .lil-gui .title:hover {
    background: var(--title-background-color);
    opacity: 0.85;
  }
  .lil-gui .title:focus {
    text-decoration: underline var(--focus-color);
  }
}
.lil-gui.root > .title:focus {
  text-decoration: none !important;
}
.lil-gui.closed > .title:before {
  content: "▸";
}
.lil-gui.closed > .children {
  transform: translateY(-7px);
  opacity: 0;
}
.lil-gui.closed:not(.transition) > .children {
  display: none;
}
.lil-gui.transition > .children {
  transition-duration: 300ms;
  transition-property: height, opacity, transform;
  transition-timing-function: cubic-bezier(0.2, 0.6, 0.35, 1);
  overflow: hidden;
  pointer-events: none;
}
.lil-gui .children:empty:before {
  content: "Empty";
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
  display: block;
  height: var(--widget-height);
  font-style: italic;
  line-height: var(--widget-height);
  opacity: 0.5;
}
.lil-gui.root > .children > .lil-gui > .title {
  border: 0 solid var(--widget-color);
  border-width: 1px 0;
  transition: border-color 300ms;
}
.lil-gui.root > .children > .lil-gui.closed > .title {
  border-bottom-color: transparent;
}
.lil-gui + .controller {
  border-top: 1px solid var(--widget-color);
  margin-top: 0;
  padding-top: var(--spacing);
}
.lil-gui .lil-gui .lil-gui > .title {
  border: none;
}
.lil-gui .lil-gui .lil-gui > .children {
  border: none;
  margin-left: var(--folder-indent);
  border-left: 2px solid var(--widget-color);
}
.lil-gui .lil-gui .controller {
  border: none;
}

.lil-gui label, .lil-gui input, .lil-gui button {
  -webkit-tap-highlight-color: transparent;
}
.lil-gui input {
  border: 0;
  outline: none;
  font-family: var(--font-family);
  font-size: var(--input-font-size);
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  background: var(--widget-color);
  color: var(--text-color);
  width: 100%;
}
@media (hover: hover) {
  .lil-gui input:hover {
    background: var(--hover-color);
  }
  .lil-gui input:active {
    background: var(--focus-color);
  }
}
.lil-gui input:disabled {
  opacity: 1;
}
.lil-gui input[type=text],
.lil-gui input[type=number] {
  padding: var(--widget-padding);
  -moz-appearance: textfield;
}
.lil-gui input[type=text]:focus,
.lil-gui input[type=number]:focus {
  background: var(--focus-color);
}
.lil-gui input[type=checkbox] {
  appearance: none;
  width: var(--checkbox-size);
  height: var(--checkbox-size);
  border-radius: var(--widget-border-radius);
  text-align: center;
  cursor: pointer;
}
.lil-gui input[type=checkbox]:checked:before {
  font-family: "lil-gui";
  content: "✓";
  font-size: var(--checkbox-size);
  line-height: var(--checkbox-size);
}
@media (hover: hover) {
  .lil-gui input[type=checkbox]:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui button {
  outline: none;
  cursor: pointer;
  font-family: var(--font-family);
  font-size: var(--font-size);
  color: var(--text-color);
  width: 100%;
  height: var(--widget-height);
  text-transform: none;
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
  border: none;
}
@media (hover: hover) {
  .lil-gui button:hover {
    background: var(--hover-color);
  }
  .lil-gui button:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui button:active {
  background: var(--focus-color);
}

@font-face {
  font-family: "lil-gui";
  src: url("data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAUsAAsAAAAACJwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAAH4AAADAImwmYE9TLzIAAAGIAAAAPwAAAGBKqH5SY21hcAAAAcgAAAD0AAACrukyyJBnbHlmAAACvAAAAF8AAACEIZpWH2hlYWQAAAMcAAAAJwAAADZfcj2zaGhlYQAAA0QAAAAYAAAAJAC5AHhobXR4AAADXAAAABAAAABMAZAAAGxvY2EAAANsAAAAFAAAACgCEgIybWF4cAAAA4AAAAAeAAAAIAEfABJuYW1lAAADoAAAASIAAAIK9SUU/XBvc3QAAATEAAAAZgAAAJCTcMc2eJxVjbEOgjAURU+hFRBK1dGRL+ALnAiToyMLEzFpnPz/eAshwSa97517c/MwwJmeB9kwPl+0cf5+uGPZXsqPu4nvZabcSZldZ6kfyWnomFY/eScKqZNWupKJO6kXN3K9uCVoL7iInPr1X5baXs3tjuMqCtzEuagm/AAlzQgPAAB4nGNgYRBlnMDAysDAYM/gBiT5oLQBAwuDJAMDEwMrMwNWEJDmmsJwgCFeXZghBcjlZMgFCzOiKOIFAB71Bb8AeJy1kjFuwkAQRZ+DwRAwBtNQRUGKQ8OdKCAWUhAgKLhIuAsVSpWz5Bbkj3dEgYiUIszqWdpZe+Z7/wB1oCYmIoboiwiLT2WjKl/jscrHfGg/pKdMkyklC5Zs2LEfHYpjcRoPzme9MWWmk3dWbK9ObkWkikOetJ554fWyoEsmdSlt+uR0pCJR34b6t/TVg1SY3sYvdf8vuiKrpyaDXDISiegp17p7579Gp3p++y7HPAiY9pmTibljrr85qSidtlg4+l25GLCaS8e6rRxNBmsnERunKbaOObRz7N72ju5vdAjYpBXHgJylOAVsMseDAPEP8LYoUHicY2BiAAEfhiAGJgZWBgZ7RnFRdnVJELCQlBSRlATJMoLV2DK4glSYs6ubq5vbKrJLSbGrgEmovDuDJVhe3VzcXFwNLCOILB/C4IuQ1xTn5FPilBTj5FPmBAB4WwoqAHicY2BkYGAA4sk1sR/j+W2+MnAzpDBgAyEMQUCSg4EJxAEAwUgFHgB4nGNgZGBgSGFggJMhDIwMqEAYAByHATJ4nGNgAIIUNEwmAABl3AGReJxjYAACIQYlBiMGJ3wQAEcQBEV4nGNgZGBgEGZgY2BiAAEQyQWEDAz/wXwGAAsPATIAAHicXdBNSsNAHAXwl35iA0UQXYnMShfS9GPZA7T7LgIu03SSpkwzYTIt1BN4Ak/gKTyAeCxfw39jZkjymzcvAwmAW/wgwHUEGDb36+jQQ3GXGot79L24jxCP4gHzF/EIr4jEIe7wxhOC3g2TMYy4Q7+Lu/SHuEd/ivt4wJd4wPxbPEKMX3GI5+DJFGaSn4qNzk8mcbKSR6xdXdhSzaOZJGtdapd4vVPbi6rP+cL7TGXOHtXKll4bY1Xl7EGnPtp7Xy2n00zyKLVHfkHBa4IcJ2oD3cgggWvt/V/FbDrUlEUJhTn/0azVWbNTNr0Ens8de1tceK9xZmfB1CPjOmPH4kitmvOubcNpmVTN3oFJyjzCvnmrwhJTzqzVj9jiSX911FjeAAB4nG3HMRKCMBBA0f0giiKi4DU8k0V2GWbIZDOh4PoWWvq6J5V8If9NVNQcaDhyouXMhY4rPTcG7jwYmXhKq8Wz+p762aNaeYXom2n3m2dLTVgsrCgFJ7OTmIkYbwIbC6vIB7WmFfAAAA==") format("woff");
}`;function Yt(t){const e=document.createElement("style");e.innerHTML=t;const i=document.querySelector("head link[rel=stylesheet], head style");i?document.head.insertBefore(e,i):document.head.appendChild(e)}let Te=!1;class Q{constructor({parent:e,autoPlace:i=e===void 0,container:n,width:r,title:s="Controls",closeFolders:a=!1,injectStyles:h=!0,touchStyles:c=!0}={}){if(this.parent=e,this.root=e?e.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("div"),this.$title.classList.add("title"),this.$title.setAttribute("role","button"),this.$title.setAttribute("aria-expanded",!0),this.$title.setAttribute("tabindex",0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("keydown",d=>{(d.code==="Enter"||d.code==="Space")&&(d.preventDefault(),this.$title.click())}),this.$title.addEventListener("touchstart",()=>{},{passive:!0}),this.$children=document.createElement("div"),this.$children.classList.add("children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(s),this.parent){this.parent.children.push(this),this.parent.folders.push(this),this.parent.$children.appendChild(this.domElement);return}this.domElement.classList.add("root"),c&&this.domElement.classList.add("allow-touch-styles"),!Te&&h&&(Yt(Ht),Te=!0),n?n.appendChild(this.domElement):i&&(this.domElement.classList.add("autoPlace"),document.body.appendChild(this.domElement)),r&&this.domElement.style.setProperty("--width",r+"px"),this._closeFolders=a}add(e,i,n,r,s){if(Object(n)===n)return new Vt(this,e,i,n);const a=e[i];switch(typeof a){case"number":return new Ut(this,e,i,n,r,s);case"boolean":return new $t(this,e,i);case"string":return new jt(this,e,i);case"function":return new pe(this,e,i)}console.error(`gui.add failed
	property:`,i,`
	object:`,e,`
	value:`,a)}addColor(e,i,n=1){return new Gt(this,e,i,n)}addFolder(e){const i=new Q({parent:this,title:e});return this.root._closeFolders&&i.close(),i}load(e,i=!0){return e.controllers&&this.controllers.forEach(n=>{n instanceof pe||n._name in e.controllers&&n.load(e.controllers[n._name])}),i&&e.folders&&this.folders.forEach(n=>{n._title in e.folders&&n.load(e.folders[n._title])}),this}save(e=!0){const i={controllers:{},folders:{}};return this.controllers.forEach(n=>{if(!(n instanceof pe)){if(n._name in i.controllers)throw new Error(`Cannot save GUI with duplicate property "${n._name}"`);i.controllers[n._name]=n.save()}}),e&&this.folders.forEach(n=>{if(n._title in i.folders)throw new Error(`Cannot save GUI with duplicate folder "${n._title}"`);i.folders[n._title]=n.save()}),i}open(e=!0){return this._setClosed(!e),this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("closed",this._closed),this}close(){return this.open(!1)}_setClosed(e){this._closed!==e&&(this._closed=e,this._callOnOpenClose(this))}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}openAnimated(e=!0){return this._setClosed(!e),this.$title.setAttribute("aria-expanded",!this._closed),requestAnimationFrame(()=>{const i=this.$children.clientHeight;this.$children.style.height=i+"px",this.domElement.classList.add("transition");const n=s=>{s.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("transition"),this.$children.removeEventListener("transitionend",n))};this.$children.addEventListener("transitionend",n);const r=e?this.$children.scrollHeight:0;this.domElement.classList.toggle("closed",!e),requestAnimationFrame(()=>{this.$children.style.height=r+"px"})}),this}title(e){return this._title=e,this.$title.innerHTML=e,this}reset(e=!0){return(e?this.controllersRecursive():this.controllers).forEach(n=>n.reset()),this}onChange(e){return this._onChange=e,this}_callOnChange(e){this.parent&&this.parent._callOnChange(e),this._onChange!==void 0&&this._onChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(e){this.parent&&this.parent._callOnFinishChange(e),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onOpenClose(e){return this._onOpenClose=e,this}_callOnOpenClose(e){this.parent&&this.parent._callOnOpenClose(e),this._onOpenClose!==void 0&&this._onOpenClose.call(this,e)}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(e=>e.destroy())}controllersRecursive(){let e=Array.from(this.controllers);return this.folders.forEach(i=>{e=e.concat(i.controllersRecursive())}),e}foldersRecursive(){let e=Array.from(this.folders);return this.folders.forEach(i=>{e=e.concat(i.foldersRecursive())}),e}}class Se extends mt{constructor(){super(),this.type=vt.SHADER,this.shaderName="ColorMappingPBRShader",this.vertexShader=z,this.fragmentShader=q,this.uniforms={colorMapping1:null,colorMapping2:null,colorMappingIntensity:1,colorMappingMixRatio:0}}copy(e){return this.defines=Object.assign({},e.defines),this.precision=e.precision,this.transparent=e.transparent,this.blending=e.blending,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.premultipliedAlpha=e.premultipliedAlpha,this.vertexColors=e.vertexColors,this.vertexTangents=e.vertexTangents,this.opacity=e.opacity,this.diffuse.copy(e.diffuse),this.diffuseMap=e.diffuseMap,this.diffuseMapCoord=e.diffuseMapCoord,this.diffuseMapTransform.copy(e.diffuseMapTransform),this.alphaMap=e.alphaMap,this.alphaMapCoord=e.alphaMapCoord,this.alphaMapTransform.copy(e.alphaMapTransform),this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveMapCoord=e.emissiveMapCoord,this.emissiveMapTransform.copy(e.emissiveMapTransform),this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.aoMapCoord=e.aoMapCoord,this.aoMapTransform.copy(e.aoMapTransform),this.normalMap=e.normalMap,this.normalScale.copy(e.normalScale),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.envMapCombine=e.envMapCombine,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.colorWrite=e.colorWrite,this.stencilTest=e.stencilTest,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilFuncBack=e.stencilFuncBack,this.stencilRefBack=e.stencilRefBack,this.stencilFuncMaskBack=e.stencilFuncMaskBack,this.stencilFailBack=e.stencilFailBack,this.stencilZFailBack=e.stencilZFailBack,this.stencilZPassBack=e.stencilZPassBack,this.clippingPlanes=e.clippingPlanes,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.side=e.side,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.shading=e.shading,this.dithering=e.dithering,this.acceptLight=e.acceptLight,this.fog=e.fog,this.drawMode=e.drawMode,this.roughness=e.roughness,this.metalness=e.metalness,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this}}let q=Le.pbr_frag,z=Le.pbr_vert;q=q.replace("#include <clippingPlanes_pars_frag>",`
  #include <clippingPlanes_pars_frag>

  uniform sampler2D colorMapping1;
  uniform sampler2D colorMapping2;

  uniform float colorMappingIntensity;
  uniform float colorMappingMixRatio;
  `);q=q.replace("#include <alphamap_frag>",`
  #include <alphamap_frag>
  
  float gray = clamp(dot(outColor.rgb, vec3(0.333, 0.333, 0.333)), 0.0, 1.0);
  vec3 colorMappingTexel1 = texture2D(colorMapping1, vec2(gray, 0.5)).rgb;
  vec3 colorMappingTexel2 = texture2D(colorMapping2, vec2(gray, 0.5)).rgb;
  vec3 colorMappingTexel = mix(colorMappingTexel1, colorMappingTexel2, colorMappingMixRatio);
  outColor.rgb = mix(outColor.rgb, colorMappingTexel, colorMappingIntensity);
  `);z=z.replace("#include <emissiveMap_vert>",`
  #ifdef USE_EMISSIVEMAP
	#if (USE_EMISSIVEMAP == 2)
        vEmissiveMapUV = (emissiveMapUVTransform * vec3(a_Uv2, 1.)).xy;
    #elif (USE_EMISSIVEMAP == 3)
       #ifdef USE_UV3
        vEmissiveMapUV = (emissiveMapUVTransform * vec3(a_Uv3, 1.)).xy;
        #endif
    #else
        vEmissiveMapUV = (emissiveMapUVTransform * vec3(a_Uv, 1.)).xy;
    #endif
  #endif
  `);z=z.replace("#include <uv_pars_vert>",`
  #if defined(USE_UV1) || defined(USE_UV2)
  uniform mat3 uvTransform;
  #endif

  #ifdef USE_UV1
    attribute vec2 a_Uv;
    varying vec2 v_Uv;
  #endif

  #ifdef USE_UV2
    attribute vec2 a_Uv2;
    varying vec2 v_Uv2;
  #endif

  #ifdef USE_UV3
    attribute vec2 a_Uv3;
    varying vec2 v_Uv3;
  #endif
  `);z=z.replace("#include <uv_vert>",`
  #ifdef USE_UV1
  v_Uv = (uvTransform * vec3(a_Uv, 1.)).xy;
  #endif

  #ifdef USE_UV2
    v_Uv2 = (uvTransform * vec3(a_Uv2, 1.)).xy;
  #endif

  #ifdef USE_UV3
    v_Uv3 = (uvTransform * vec3(a_Uv3, 1.)).xy;
  #endif
    `);class E{static lerpNumber(e,i,n){return e+(i-e)*n}static lerpVector2(e,i,n,r=new yt){return r.x=E.lerpNumber(e.x,i.x,n),r.y=E.lerpNumber(e.y,i.y,n),r}static lerpVector3(e,i,n,r=new Vector3){return r.x=E.lerpNumber(e.x,i.x,n),r.y=E.lerpNumber(e.y,i.y,n),r.z=E.lerpNumber(e.z,i.z,n),r}static lerpColor3(e,i,n,r=new Color3){return r.r=E.lerpNumber(e.r,i.r,n),r.g=E.lerpNumber(e.g,i.g,n),r.b=E.lerpNumber(e.b,i.b,n),r}static isNumber(e){return typeof e=="number"}static isColor3(e){return e&&typeof e=="object"&&"r"in e&&"g"in e&&"b"in e&&typeof e.r=="number"&&e.r>=0&&e.r<=255&&typeof e.g=="number"&&e.g>=0&&e.g<=255&&typeof e.b=="number"&&e.b>=0&&e.b<=255}static isObject(e){return e&&typeof e=="object"}static isString(e){return e&&typeof e=="string"}}var k=Object.freeze({Linear:Object.freeze({None:function(t){return t},In:function(t){return this.None(t)},Out:function(t){return this.None(t)},InOut:function(t){return this.None(t)}}),Quadratic:Object.freeze({In:function(t){return t*t},Out:function(t){return t*(2-t)},InOut:function(t){return(t*=2)<1?.5*t*t:-.5*(--t*(t-2)-1)}}),Cubic:Object.freeze({In:function(t){return t*t*t},Out:function(t){return--t*t*t+1},InOut:function(t){return(t*=2)<1?.5*t*t*t:.5*((t-=2)*t*t+2)}}),Quartic:Object.freeze({In:function(t){return t*t*t*t},Out:function(t){return 1- --t*t*t*t},InOut:function(t){return(t*=2)<1?.5*t*t*t*t:-.5*((t-=2)*t*t*t-2)}}),Quintic:Object.freeze({In:function(t){return t*t*t*t*t},Out:function(t){return--t*t*t*t*t+1},InOut:function(t){return(t*=2)<1?.5*t*t*t*t*t:.5*((t-=2)*t*t*t*t+2)}}),Sinusoidal:Object.freeze({In:function(t){return 1-Math.sin((1-t)*Math.PI/2)},Out:function(t){return Math.sin(t*Math.PI/2)},InOut:function(t){return .5*(1-Math.sin(Math.PI*(.5-t)))}}),Exponential:Object.freeze({In:function(t){return t===0?0:Math.pow(1024,t-1)},Out:function(t){return t===1?1:1-Math.pow(2,-10*t)},InOut:function(t){return t===0?0:t===1?1:(t*=2)<1?.5*Math.pow(1024,t-1):.5*(-Math.pow(2,-10*(t-1))+2)}}),Circular:Object.freeze({In:function(t){return 1-Math.sqrt(1-t*t)},Out:function(t){return Math.sqrt(1- --t*t)},InOut:function(t){return(t*=2)<1?-.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1)}}),Elastic:Object.freeze({In:function(t){return t===0?0:t===1?1:-Math.pow(2,10*(t-1))*Math.sin((t-1.1)*5*Math.PI)},Out:function(t){return t===0?0:t===1?1:Math.pow(2,-10*t)*Math.sin((t-.1)*5*Math.PI)+1},InOut:function(t){return t===0?0:t===1?1:(t*=2,t<1?-.5*Math.pow(2,10*(t-1))*Math.sin((t-1.1)*5*Math.PI):.5*Math.pow(2,-10*(t-1))*Math.sin((t-1.1)*5*Math.PI)+1)}}),Back:Object.freeze({In:function(t){var e=1.70158;return t===1?1:t*t*((e+1)*t-e)},Out:function(t){var e=1.70158;return t===0?0:--t*t*((e+1)*t+e)+1},InOut:function(t){var e=2.5949095;return(t*=2)<1?.5*(t*t*((e+1)*t-e)):.5*((t-=2)*t*((e+1)*t+e)+2)}}),Bounce:Object.freeze({In:function(t){return 1-k.Bounce.Out(1-t)},Out:function(t){return t<1/2.75?7.5625*t*t:t<2/2.75?7.5625*(t-=1.5/2.75)*t+.75:t<2.5/2.75?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375},InOut:function(t){return t<.5?k.Bounce.In(t*2)*.5:k.Bounce.Out(t*2-1)*.5+.5}}),generatePow:function(t){return t===void 0&&(t=4),t=t<Number.EPSILON?Number.EPSILON:t,t=t>1e4?1e4:t,{In:function(e){return Math.pow(e,t)},Out:function(e){return 1-Math.pow(1-e,t)},InOut:function(e){return e<.5?Math.pow(e*2,t)/2:(1-Math.pow(2-e*2,t))/2+.5}}}}),R=function(){return performance.now()},me=function(){function t(){this._tweens={},this._tweensAddedDuringUpdate={}}return t.prototype.getAll=function(){var e=this;return Object.keys(this._tweens).map(function(i){return e._tweens[i]})},t.prototype.removeAll=function(){this._tweens={}},t.prototype.add=function(e){this._tweens[e.getId()]=e,this._tweensAddedDuringUpdate[e.getId()]=e},t.prototype.remove=function(e){delete this._tweens[e.getId()],delete this._tweensAddedDuringUpdate[e.getId()]},t.prototype.update=function(e,i){e===void 0&&(e=R()),i===void 0&&(i=!1);var n=Object.keys(this._tweens);if(n.length===0)return!1;for(;n.length>0;){this._tweensAddedDuringUpdate={};for(var r=0;r<n.length;r++){var s=this._tweens[n[r]],a=!i;s&&s.update(e,a)===!1&&!i&&delete this._tweens[n[r]]}n=Object.keys(this._tweensAddedDuringUpdate)}return!0},t}(),$={Linear:function(t,e){var i=t.length-1,n=i*e,r=Math.floor(n),s=$.Utils.Linear;return e<0?s(t[0],t[1],n):e>1?s(t[i],t[i-1],i-n):s(t[r],t[r+1>i?i:r+1],n-r)},Bezier:function(t,e){for(var i=0,n=t.length-1,r=Math.pow,s=$.Utils.Bernstein,a=0;a<=n;a++)i+=r(1-e,n-a)*r(e,a)*t[a]*s(n,a);return i},CatmullRom:function(t,e){var i=t.length-1,n=i*e,r=Math.floor(n),s=$.Utils.CatmullRom;return t[0]===t[i]?(e<0&&(r=Math.floor(n=i*(1+e))),s(t[(r-1+i)%i],t[r],t[(r+1)%i],t[(r+2)%i],n-r)):e<0?t[0]-(s(t[0],t[0],t[1],t[1],-n)-t[0]):e>1?t[i]-(s(t[i],t[i],t[i-1],t[i-1],n-i)-t[i]):s(t[r?r-1:0],t[r],t[i<r+1?i:r+1],t[i<r+2?i:r+2],n-r)},Utils:{Linear:function(t,e,i){return(e-t)*i+t},Bernstein:function(t,e){var i=$.Utils.Factorial;return i(t)/i(e)/i(t-e)},Factorial:function(){var t=[1];return function(e){var i=1;if(t[e])return t[e];for(var n=e;n>1;n--)i*=n;return t[e]=i,i}}(),CatmullRom:function(t,e,i,n,r){var s=(i-t)*.5,a=(n-e)*.5,h=r*r,c=r*h;return(2*e-2*i+s+a)*c+(-3*e+3*i-2*s-a)*h+s*r+e}}},ne=function(){function t(){}return t.nextId=function(){return t._nextId++},t._nextId=0,t}(),ge=new me,se=function(){function t(e,i){i===void 0&&(i=ge),this._object=e,this._group=i,this._isPaused=!1,this._pauseStart=0,this._valuesStart={},this._valuesEnd={},this._valuesStartRepeat={},this._duration=1e3,this._isDynamic=!1,this._initialRepeat=0,this._repeat=0,this._yoyo=!1,this._isPlaying=!1,this._reversed=!1,this._delayTime=0,this._startTime=0,this._easingFunction=k.Linear.None,this._interpolationFunction=$.Linear,this._chainedTweens=[],this._onStartCallbackFired=!1,this._onEveryStartCallbackFired=!1,this._id=ne.nextId(),this._isChainStopped=!1,this._propertiesAreSetUp=!1,this._goToEnd=!1}return t.prototype.getId=function(){return this._id},t.prototype.isPlaying=function(){return this._isPlaying},t.prototype.isPaused=function(){return this._isPaused},t.prototype.getDuration=function(){return this._duration},t.prototype.to=function(e,i){if(i===void 0&&(i=1e3),this._isPlaying)throw new Error("Can not call Tween.to() while Tween is already started or paused. Stop the Tween first.");return this._valuesEnd=e,this._propertiesAreSetUp=!1,this._duration=i<0?0:i,this},t.prototype.duration=function(e){return e===void 0&&(e=1e3),this._duration=e<0?0:e,this},t.prototype.dynamic=function(e){return e===void 0&&(e=!1),this._isDynamic=e,this},t.prototype.start=function(e,i){if(e===void 0&&(e=R()),i===void 0&&(i=!1),this._isPlaying)return this;if(this._group&&this._group.add(this),this._repeat=this._initialRepeat,this._reversed){this._reversed=!1;for(var n in this._valuesStartRepeat)this._swapEndStartRepeatValues(n),this._valuesStart[n]=this._valuesStartRepeat[n]}if(this._isPlaying=!0,this._isPaused=!1,this._onStartCallbackFired=!1,this._onEveryStartCallbackFired=!1,this._isChainStopped=!1,this._startTime=e,this._startTime+=this._delayTime,!this._propertiesAreSetUp||i){if(this._propertiesAreSetUp=!0,!this._isDynamic){var r={};for(var s in this._valuesEnd)r[s]=this._valuesEnd[s];this._valuesEnd=r}this._setupProperties(this._object,this._valuesStart,this._valuesEnd,this._valuesStartRepeat,i)}return this},t.prototype.startFromCurrentValues=function(e){return this.start(e,!0)},t.prototype._setupProperties=function(e,i,n,r,s){for(var a in n){var h=e[a],c=Array.isArray(h),d=c?"array":typeof h,g=!c&&Array.isArray(n[a]);if(!(d==="undefined"||d==="function")){if(g){var o=n[a];if(o.length===0)continue;for(var f=[h],l=0,_=o.length;l<_;l+=1){var v=this._handleRelativeValue(h,o[l]);if(isNaN(v)){g=!1,console.warn("Found invalid interpolation list. Skipping.");break}f.push(v)}g&&(n[a]=f)}if((d==="object"||c)&&h&&!g){i[a]=c?[]:{};var b=h;for(var m in b)i[a][m]=b[m];r[a]=c?[]:{};var o=n[a];if(!this._isDynamic){var y={};for(var m in o)y[m]=o[m];n[a]=o=y}this._setupProperties(b,i[a],o,r[a],s)}else(typeof i[a]>"u"||s)&&(i[a]=h),c||(i[a]*=1),g?r[a]=n[a].slice().reverse():r[a]=i[a]||0}}},t.prototype.stop=function(){return this._isChainStopped||(this._isChainStopped=!0,this.stopChainedTweens()),this._isPlaying?(this._group&&this._group.remove(this),this._isPlaying=!1,this._isPaused=!1,this._onStopCallback&&this._onStopCallback(this._object),this):this},t.prototype.end=function(){return this._goToEnd=!0,this.update(1/0),this},t.prototype.pause=function(e){return e===void 0&&(e=R()),this._isPaused||!this._isPlaying?this:(this._isPaused=!0,this._pauseStart=e,this._group&&this._group.remove(this),this)},t.prototype.resume=function(e){return e===void 0&&(e=R()),!this._isPaused||!this._isPlaying?this:(this._isPaused=!1,this._startTime+=e-this._pauseStart,this._pauseStart=0,this._group&&this._group.add(this),this)},t.prototype.stopChainedTweens=function(){for(var e=0,i=this._chainedTweens.length;e<i;e++)this._chainedTweens[e].stop();return this},t.prototype.group=function(e){return e===void 0&&(e=ge),this._group=e,this},t.prototype.delay=function(e){return e===void 0&&(e=0),this._delayTime=e,this},t.prototype.repeat=function(e){return e===void 0&&(e=0),this._initialRepeat=e,this._repeat=e,this},t.prototype.repeatDelay=function(e){return this._repeatDelayTime=e,this},t.prototype.yoyo=function(e){return e===void 0&&(e=!1),this._yoyo=e,this},t.prototype.easing=function(e){return e===void 0&&(e=k.Linear.None),this._easingFunction=e,this},t.prototype.interpolation=function(e){return e===void 0&&(e=$.Linear),this._interpolationFunction=e,this},t.prototype.chain=function(){for(var e=[],i=0;i<arguments.length;i++)e[i]=arguments[i];return this._chainedTweens=e,this},t.prototype.onStart=function(e){return this._onStartCallback=e,this},t.prototype.onEveryStart=function(e){return this._onEveryStartCallback=e,this},t.prototype.onUpdate=function(e){return this._onUpdateCallback=e,this},t.prototype.onRepeat=function(e){return this._onRepeatCallback=e,this},t.prototype.onComplete=function(e){return this._onCompleteCallback=e,this},t.prototype.onStop=function(e){return this._onStopCallback=e,this},t.prototype.update=function(e,i){var n=this,r;if(e===void 0&&(e=R()),i===void 0&&(i=!0),this._isPaused)return!0;var s,a=this._startTime+this._duration;if(!this._goToEnd&&!this._isPlaying){if(e>a)return!1;i&&this.start(e,!0)}if(this._goToEnd=!1,e<this._startTime)return!0;this._onStartCallbackFired===!1&&(this._onStartCallback&&this._onStartCallback(this._object),this._onStartCallbackFired=!0),this._onEveryStartCallbackFired===!1&&(this._onEveryStartCallback&&this._onEveryStartCallback(this._object),this._onEveryStartCallbackFired=!0);var h=e-this._startTime,c=this._duration+((r=this._repeatDelayTime)!==null&&r!==void 0?r:this._delayTime),d=this._duration+this._repeat*c,g=function(){if(n._duration===0||h>d)return 1;var b=Math.trunc(h/c),m=h-b*c,y=Math.min(m/n._duration,1);return y===0&&h===n._duration?1:y},o=g(),f=this._easingFunction(o);if(this._updateProperties(this._object,this._valuesStart,this._valuesEnd,f),this._onUpdateCallback&&this._onUpdateCallback(this._object,o),this._duration===0||h>=this._duration)if(this._repeat>0){var l=Math.min(Math.trunc((h-this._duration)/c)+1,this._repeat);isFinite(this._repeat)&&(this._repeat-=l);for(s in this._valuesStartRepeat)!this._yoyo&&typeof this._valuesEnd[s]=="string"&&(this._valuesStartRepeat[s]=this._valuesStartRepeat[s]+parseFloat(this._valuesEnd[s])),this._yoyo&&this._swapEndStartRepeatValues(s),this._valuesStart[s]=this._valuesStartRepeat[s];return this._yoyo&&(this._reversed=!this._reversed),this._startTime+=c*l,this._onRepeatCallback&&this._onRepeatCallback(this._object),this._onEveryStartCallbackFired=!1,!0}else{this._onCompleteCallback&&this._onCompleteCallback(this._object);for(var _=0,v=this._chainedTweens.length;_<v;_++)this._chainedTweens[_].start(this._startTime+this._duration,!1);return this._isPlaying=!1,!1}return!0},t.prototype._updateProperties=function(e,i,n,r){for(var s in n)if(i[s]!==void 0){var a=i[s]||0,h=n[s],c=Array.isArray(e[s]),d=Array.isArray(h),g=!c&&d;g?e[s]=this._interpolationFunction(h,r):typeof h=="object"&&h?this._updateProperties(e[s],a,h,r):(h=this._handleRelativeValue(a,h),typeof h=="number"&&(e[s]=a+(h-a)*r))}},t.prototype._handleRelativeValue=function(e,i){return typeof i!="string"?i:i.charAt(0)==="+"||i.charAt(0)==="-"?e+parseFloat(i):parseFloat(i)},t.prototype._swapEndStartRepeatValues=function(e){var i=this._valuesStartRepeat[e],n=this._valuesEnd[e];typeof n=="string"?this._valuesStartRepeat[e]=this._valuesStartRepeat[e]+parseFloat(n):this._valuesStartRepeat[e]=this._valuesEnd[e],this._valuesEnd[e]=i},t}(),Ne="23.1.1",Be=ne.nextId,F=ge,Ge=F.getAll.bind(F),Ue=F.removeAll.bind(F),Ve=F.add.bind(F),je=F.remove.bind(F),ve=F.update.bind(F),ye={Easing:k,Group:me,Interpolation:$,now:R,Sequence:ne,nextId:Be,Tween:se,VERSION:Ne,getAll:Ge,removeAll:Ue,add:Ve,remove:je,update:ve};const Xt=Object.freeze(Object.defineProperty({__proto__:null,Easing:k,Group:me,Interpolation:$,Sequence:ne,Tween:se,VERSION:Ne,add:Ve,default:ye,getAll:Ge,nextId:Be,now:R,remove:je,removeAll:Ue,update:ve},Symbol.toStringTag,{value:"Module"})),Y=new _t;Y.phi=45/180*Math.PI;Y.radius=10;class Qt{constructor(e){this.engine=e,this.root=null,this.gui=null,this.effectConfig={textures:[{name:"colorMapping1",texture:H.getTexture()},{name:"blue",texture:"blue"},{name:"sceneEnvironment",texture:"Grand_Canyon_C"}],effects:[{name:"real",nodeEffect:{A:{metalness:void 0,roughness:void 0,envMapIntensity:void 0,emissive:void 0,depthWrite:void 0,diffuse:void 0,transparent:void 0,opacity:void 0,uniforms:{colorMapping:0,colorMappingIntensity:0}},A7:{metalness:void 0,roughness:void 0,envMapIntensity:void 0,emissive:void 0,depthWrite:void 0,diffuse:void 0,transparent:void 0,opacity:void 0,uniforms:{colorMapping:0,colorMappingIntensity:0}},Ground:{metalness:void 0,roughness:void 0,diffuse:void 0,envMapIntensity:void 0,emissive:void 0,depthWrite:void 0,uniforms:{colorMapping:0,colorMappingIntensity:0}},Grass:{metalness:void 0,roughness:void 0,diffuse:void 0,envMapIntensity:void 0,emissive:void 0,depthWrite:void 0,uniforms:{colorMapping:0,colorMappingIntensity:0}},Road:{metalness:void 0,roughness:void 0,diffuse:void 0,envMapIntensity:void 0,emissive:void 0,depthWrite:void 0,uniforms:{colorMapping:0,colorMappingIntensity:0}},Facade:{metalness:void 0,roughness:void 0,diffuse:void 0,envMapIntensity:void 0,emissive:void 0,depthWrite:void 0,uniforms:{colorMapping:0,colorMappingIntensity:0}},GroundDec:{metalness:void 0,roughness:void 0,diffuse:void 0,envMapIntensity:void 0,emissive:void 0,depthWrite:void 0,uniforms:{colorMapping:0,colorMappingIntensity:0}},Win:{metalness:void 0,roughness:void 0,envMapIntensity:void 0,emissive:void 0,depthWrite:void 0,uniforms:{colorMapping:0,colorMappingIntensity:0}},Other:{metalness:void 0,roughness:void 0,envMapIntensity:void 0,emissive:void 0,depthWrite:void 0,uniforms:{colorMapping:0,colorMappingIntensity:0}},Glass:{metalness:void 0,roughness:void 0,envMapIntensity:void 0,emissive:void 0,depthWrite:void 0,uniforms:{colorMapping:0,colorMappingIntensity:0}},Tree:{metalness:void 0,roughness:void 0,envMapIntensity:void 0,emissive:void 0,depthWrite:void 0,uniforms:{colorMapping:0,colorMappingIntensity:0}},房顶:{metalness:void 0,roughness:void 0,envMapIntensity:void 0,emissive:void 0,depthWrite:void 0,uniforms:{colorMapping:0,colorMappingIntensity:0}},Wall:{metalness:void 0,roughness:void 0,envMapIntensity:void 0,emissive:new u(0,0,0),depthWrite:void 0,uniforms:{colorMapping:0,colorMappingIntensity:0}},A_Elevator_电梯:{metalness:void 0,roughness:void 0,envMapIntensity:void 0,emissive:void 0,depthWrite:void 0,diffuse:void 0,transparent:void 0,opacity:void 0,uniforms:{colorMapping:0,colorMappingIntensity:0}}},globalEffect:{light:{environment:{map:1,intensity:1},directLight1:{intensity:1,phi:45,theta:0}}}},{name:"dark",nodeEffect:{A:{metalness:1,roughness:.69,envMapIntensity:.59,emissive:new u(0,0,0),depthWrite:void 0,diffuse:void 0,transparent:void 0,opacity:void 0,uniforms:{colorMapping:0,colorMappingIntensity:1}},A7:{metalness:1,roughness:.69,envMapIntensity:.59,emissive:new u(0,0,0),depthWrite:void 0,diffuse:void 0,transparent:void 0,opacity:void 0,uniforms:{colorMapping:0,colorMappingIntensity:1}},Ground:{metalness:1,roughness:.7,envMapIntensity:0,diffuse:new u(0),emissive:void 0,depthWrite:void 0,uniforms:{colorMapping:0,colorMappingIntensity:1}},Facade:{metalness:1,roughness:.69,diffuse:new u(4013373),envMapIntensity:.18,emissive:void 0,depthWrite:void 0,uniforms:{colorMapping:0,colorMappingIntensity:1}},GroundDec:{metalness:1,roughness:.69,diffuse:new u(4013373),envMapIntensity:.64,emissive:void 0,depthWrite:void 0,uniforms:{colorMapping:0,colorMappingIntensity:1}},Grass:{metalness:1,roughness:.7,envMapIntensity:0,diffuse:new u(0),emissive:void 0,depthWrite:void 0,uniforms:{colorMapping:0,colorMappingIntensity:1}},Road:{metalness:1,roughness:.62,envMapIntensity:0,diffuse:new u(0),emissive:void 0,depthWrite:void 0,uniforms:{colorMapping:0,colorMappingIntensity:1}},Other:{metalness:1,roughness:.617,envMapIntensity:1,emissive:void 0,depthWrite:void 0,uniforms:{colorMapping:0,colorMappingIntensity:1}},Glass:{metalness:1,roughness:.69,diffuse:new u(4013373),envMapIntensity:.64,emissive:new u(0,0,0),depthWrite:void 0,uniforms:{colorMapping:0,colorMappingIntensity:1}},Tree:{metalness:void 0,roughness:void 0,envMapIntensity:void 0,emissive:void 0,depthWrite:void 0,uniforms:{colorMapping:0,colorMappingIntensity:0}},房顶:{metalness:1,roughness:.69,envMapIntensity:.59,emissive:void 0,depthWrite:void 0,uniforms:{colorMapping:0,colorMappingIntensity:1}},Wall:{metalness:1,roughness:.69,envMapIntensity:.59,emissive:new u(0,0,0),depthWrite:void 0,uniforms:{colorMapping:0,colorMappingIntensity:1}},Win:{metalness:.67,roughness:.43,envMapIntensity:0,emissive:new u(0,0,0),depthWrite:void 0,uniforms:{colorMapping:0,colorMappingIntensity:1}},A_Elevator_电梯:{metalness:void 0,roughness:void 0,envMapIntensity:void 0,emissive:void 0,depthWrite:void 0,diffuse:void 0,transparent:void 0,opacity:void 0,uniforms:{colorMapping:0,colorMappingIntensity:1}}},globalEffect:{light:{environment:{map:2,intensity:1},directLight1:{intensity:1,phi:45,theta:-45}}}},{name:"day",nodeEffect:{A:{metalness:void 0,roughness:void 0,envMapIntensity:void 0,emissive:void 0,depthWrite:void 0,diffuse:void 0,transparent:void 0,opacity:void 0,uniforms:{colorMapping:0,colorMappingIntensity:0}},A7:{metalness:void 0,roughness:void 0,envMapIntensity:void 0,emissive:void 0,depthWrite:void 0,diffuse:void 0,transparent:void 0,opacity:void 0,uniforms:{colorMapping:0,colorMappingIntensity:0}},Ground:{metalness:void 0,roughness:void 0,diffuse:void 0,envMapIntensity:void 0,emissive:void 0,depthWrite:void 0,uniforms:{colorMapping:0,colorMappingIntensity:0}},Grass:{metalness:void 0,roughness:void 0,diffuse:void 0,envMapIntensity:void 0,emissive:void 0,depthWrite:void 0,uniforms:{colorMapping:0,colorMappingIntensity:0}},Road:{metalness:void 0,roughness:void 0,diffuse:void 0,envMapIntensity:void 0,emissive:void 0,depthWrite:void 0,uniforms:{colorMapping:0,colorMappingIntensity:0}},Facade:{metalness:1.4,roughness:.2,diffuse:void 0,envMapIntensity:void 0,emissive:void 0,depthWrite:void 0,uniforms:{colorMapping:0,colorMappingIntensity:0}},GroundDec:{metalness:void 0,roughness:void 0,diffuse:void 0,envMapIntensity:void 0,emissive:void 0,depthWrite:void 0,uniforms:{colorMapping:0,colorMappingIntensity:0}},Other:{metalness:void 0,roughness:void 0,envMapIntensity:void 0,emissive:void 0,depthWrite:void 0,uniforms:{colorMapping:0,colorMappingIntensity:0}},Glass:{metalness:void 0,roughness:void 0,envMapIntensity:void 0,emissive:void 0,depthWrite:!1,uniforms:{colorMapping:0,colorMappingIntensity:0}},Tree:{metalness:void 0,roughness:void 0,envMapIntensity:void 0,emissive:void 0,depthWrite:void 0,uniforms:{colorMapping:0,colorMappingIntensity:0}},房顶:{metalness:void 0,roughness:void 0,envMapIntensity:void 0,emissive:void 0,depthWrite:void 0,uniforms:{colorMapping:0,colorMappingIntensity:0}},Wall:{metalness:void 0,roughness:void 0,envMapIntensity:void 0,emissive:new u(0,0,0),depthWrite:void 0,uniforms:{colorMapping:0,colorMappingIntensity:0}},Win:{metalness:void 0,roughness:void 0,envMapIntensity:void 0,emissive:new u(0,0,0),depthWrite:void 0,uniforms:{colorMapping:0,colorMappingIntensity:0}},A_Elevator_电梯:{metalness:void 0,roughness:void 0,envMapIntensity:void 0,emissive:void 0,depthWrite:void 0,diffuse:void 0,transparent:void 0,opacity:void 0,uniforms:{colorMapping:0,colorMappingIntensity:0}}},globalEffect:{light:{environment:{map:1,intensity:0},directLight1:{intensity:1,phi:45,theta:0}}}},{name:"night",nodeEffect:{A:{metalness:void 0,roughness:void 0,envMapIntensity:void 0,emissive:void 0,depthWrite:void 0,diffuse:void 0,transparent:void 0,opacity:void 0,uniforms:{colorMapping:0,colorMappingIntensity:0}},A7:{metalness:void 0,roughness:void 0,envMapIntensity:void 0,emissive:void 0,depthWrite:void 0,diffuse:void 0,transparent:void 0,opacity:void 0,uniforms:{colorMapping:0,colorMappingIntensity:0}},Ground:{metalness:void 0,roughness:void 0,diffuse:void 0,envMapIntensity:void 0,emissive:void 0,depthWrite:void 0,uniforms:{colorMapping:0,colorMappingIntensity:0}},Grass:{metalness:void 0,roughness:void 0,diffuse:void 0,envMapIntensity:void 0,emissive:void 0,depthWrite:void 0,uniforms:{colorMapping:0,colorMappingIntensity:0}},Road:{metalness:1,roughness:void 0,diffuse:void 0,envMapIntensity:void 0,emissive:void 0,depthWrite:void 0,uniforms:{colorMapping:0,colorMappingIntensity:0}},Facade:{metalness:1.4,roughness:.2,diffuse:void 0,envMapIntensity:void 0,emissive:void 0,depthWrite:void 0,uniforms:{colorMapping:0,colorMappingIntensity:0}},GroundDec:{metalness:void 0,roughness:void 0,diffuse:void 0,envMapIntensity:void 0,emissive:void 0,depthWrite:void 0,uniforms:{colorMapping:0,colorMappingIntensity:0}},Other:{metalness:void 0,roughness:void 0,envMapIntensity:void 0,emissive:void 0,depthWrite:void 0,uniforms:{colorMapping:0,colorMappingIntensity:0}},Glass:{metalness:1,roughness:void 0,envMapIntensity:void 0,emissive:void 0,depthWrite:!1,uniforms:{colorMapping:0,colorMappingIntensity:0}},Tree:{metalness:void 0,roughness:1,envMapIntensity:1.5,emissive:void 0,depthWrite:void 0,uniforms:{colorMapping:0,colorMappingIntensity:0}},房顶:{metalness:void 0,roughness:void 0,envMapIntensity:void 0,emissive:void 0,depthWrite:void 0,uniforms:{colorMapping:0,colorMappingIntensity:0}},Wall:{metalness:void 0,roughness:void 0,envMapIntensity:void 0,emissive:new u(.1,.1,.04),depthWrite:void 0,uniforms:{colorMapping:0,colorMappingIntensity:0}},Win:{metalness:void 0,roughness:void 0,envMapIntensity:void 0,emissive:new u(226/255,226/255,122/255),depthWrite:void 0,uniforms:{colorMapping:0,colorMappingIntensity:0}},A_Elevator_电梯:{metalness:void 0,roughness:void 0,envMapIntensity:void 0,emissive:void 0,depthWrite:void 0,diffuse:void 0,transparent:void 0,opacity:void 0,uniforms:{colorMapping:0,colorMappingIntensity:0}}},globalEffect:{light:{environment:{map:1,intensity:0},directLight1:{intensity:.1,phi:45,theta:0}}}},{name:"transparent_1",nodeEffect:{A:{metalness:0,roughness:1,envMapIntensity:2,emissive:new u(0,0,0),depthWrite:void 0,diffuse:new u(5083647),transparent:!0,opacity:.21,uniforms:{colorMapping:0,colorMappingIntensity:0}},A7:{metalness:0,roughness:1,envMapIntensity:2,emissive:new u(0,0,0),depthWrite:void 0,diffuse:new u(5083647),transparent:!0,opacity:.21,uniforms:{colorMapping:0,colorMappingIntensity:0}},Ground:{metalness:1,roughness:.7,envMapIntensity:0,diffuse:new u(0),emissive:void 0,depthWrite:void 0,uniforms:{colorMapping:0,colorMappingIntensity:1}},Facade:{metalness:1,roughness:.69,diffuse:new u(4013373),envMapIntensity:.18,emissive:void 0,depthWrite:void 0,uniforms:{colorMapping:0,colorMappingIntensity:1}},GroundDec:{metalness:1,roughness:.69,diffuse:new u(4013373),envMapIntensity:.64,emissive:void 0,depthWrite:void 0,uniforms:{colorMapping:0,colorMappingIntensity:1}},Grass:{metalness:1,roughness:.7,envMapIntensity:0,diffuse:new u(0),emissive:void 0,depthWrite:void 0,uniforms:{colorMapping:0,colorMappingIntensity:1}},Road:{metalness:1,roughness:.62,envMapIntensity:0,diffuse:new u(0),emissive:void 0,depthWrite:void 0,uniforms:{colorMapping:0,colorMappingIntensity:1}},Other:{metalness:1,roughness:.617,envMapIntensity:1,emissive:void 0,depthWrite:void 0,uniforms:{colorMapping:0,colorMappingIntensity:1}},Glass:{metalness:1.57,roughness:1,diffuse:new u(4013373),envMapIntensity:2,emissive:new u(0,0,0),depthWrite:void 0,uniforms:{colorMapping:0,colorMappingIntensity:0}},Tree:{metalness:void 0,roughness:void 0,envMapIntensity:void 0,emissive:void 0,depthWrite:void 0,uniforms:{colorMapping:0,colorMappingIntensity:0}},房顶:{metalness:0,roughness:1,envMapIntensity:2,emissive:void 0,depthWrite:void 0,uniforms:{colorMapping:0,colorMappingIntensity:0}},Wall:{metalness:0,roughness:1,envMapIntensity:2,emissive:new u(0,0,0),depthWrite:void 0,uniforms:{colorMapping:0,colorMappingIntensity:0}},Win:{metalness:0,roughness:1,envMapIntensity:2,emissive:new u(0,0,0),depthWrite:void 0,uniforms:{colorMapping:0,colorMappingIntensity:0}},A_Elevator_电梯:{metalness:1.48,roughness:2,envMapIntensity:2,emissive:new u(0,0,0),depthWrite:void 0,diffuse:new u(1041407),transparent:!0,opacity:1,uniforms:{colorMapping:0,colorMappingIntensity:0}}},globalEffect:{light:{environment:{map:2,intensity:1},directLight1:{intensity:1,phi:45,theta:-45}}}},{name:"transparent_2",nodeEffect:{A:{metalness:1,roughness:.69,envMapIntensity:.59,emissive:new u(0,0,0),depthWrite:void 0,diffuse:void 0,transparent:void 0,opacity:void 0,uniforms:{colorMapping:0,colorMappingIntensity:1}},A7:{metalness:1,roughness:1,envMapIntensity:2,emissive:new u(0,0,0),depthWrite:void 0,diffuse:new u(1041407),transparent:!0,opacity:.1,uniforms:{colorMapping:0,colorMappingIntensity:0}},Ground:{metalness:1,roughness:.7,envMapIntensity:0,diffuse:new u(0),emissive:void 0,depthWrite:void 0,uniforms:{colorMapping:0,colorMappingIntensity:1}},Facade:{metalness:1,roughness:.69,diffuse:new u(4013373),envMapIntensity:.18,emissive:void 0,depthWrite:void 0,uniforms:{colorMapping:0,colorMappingIntensity:1}},GroundDec:{metalness:1,roughness:.69,diffuse:new u(4013373),envMapIntensity:.64,emissive:void 0,depthWrite:void 0,uniforms:{colorMapping:0,colorMappingIntensity:1}},Grass:{metalness:1,roughness:.7,envMapIntensity:0,diffuse:new u(0),emissive:void 0,depthWrite:void 0,uniforms:{colorMapping:0,colorMappingIntensity:1}},Road:{metalness:1,roughness:.62,envMapIntensity:0,diffuse:new u(0),emissive:void 0,depthWrite:void 0,uniforms:{colorMapping:0,colorMappingIntensity:1}},Other:{metalness:1,roughness:.617,envMapIntensity:1,emissive:void 0,depthWrite:void 0,uniforms:{colorMapping:0,colorMappingIntensity:1}},Glass:{metalness:1,roughness:.69,diffuse:new u(4013373),envMapIntensity:.64,emissive:new u(0,0,0),depthWrite:void 0,uniforms:{colorMapping:0,colorMappingIntensity:1}},Tree:{metalness:void 0,roughness:void 0,envMapIntensity:void 0,emissive:void 0,depthWrite:void 0,uniforms:{colorMapping:0,colorMappingIntensity:0}},房顶:{metalness:1,roughness:.69,envMapIntensity:.59,emissive:void 0,depthWrite:void 0,uniforms:{colorMapping:0,colorMappingIntensity:1}},Wall:{metalness:1,roughness:.69,envMapIntensity:.59,emissive:new u(0,0,0),depthWrite:void 0,uniforms:{colorMapping:0,colorMappingIntensity:1}},Win:{metalness:.67,roughness:.43,envMapIntensity:0,emissive:new u(0,0,0),depthWrite:void 0,uniforms:{colorMapping:0,colorMappingIntensity:1}},A_Elevator_电梯:{metalness:1,roughness:1,envMapIntensity:2,emissive:new u(0,0,0),depthWrite:void 0,diffuse:new u(1041407),transparent:!0,opacity:.1,uniforms:{colorMapping:0,colorMappingIntensity:0}}},globalEffect:{light:{environment:{map:2,intensity:1},directLight1:{intensity:1,phi:45,theta:-45}}}},{name:"transparent_3",nodeEffect:{A:{metalness:.4,roughness:.4,envMapIntensity:0,emissive:new u(0,0,0),depthWrite:void 0,diffuse:new u(65365),transparent:!0,opacity:.15,uniforms:{colorMapping:0,colorMappingIntensity:0}},A7:{metalness:.4,roughness:.4,envMapIntensity:0,emissive:new u(0,0,0),depthWrite:void 0,diffuse:new u(65365),transparent:!0,opacity:.15,uniforms:{colorMapping:0,colorMappingIntensity:0}},Ground:{metalness:1,roughness:.7,envMapIntensity:0,diffuse:new u(0),emissive:void 0,depthWrite:void 0,uniforms:{colorMapping:0,colorMappingIntensity:1}},Facade:{metalness:1,roughness:.69,diffuse:new u(4013373),envMapIntensity:.18,emissive:void 0,depthWrite:void 0,uniforms:{colorMapping:0,colorMappingIntensity:1}},GroundDec:{metalness:1,roughness:.69,diffuse:new u(4013373),envMapIntensity:.64,emissive:void 0,depthWrite:void 0,uniforms:{colorMapping:0,colorMappingIntensity:1}},Grass:{metalness:1,roughness:.7,envMapIntensity:0,diffuse:new u(0),emissive:void 0,depthWrite:void 0,uniforms:{colorMapping:0,colorMappingIntensity:1}},Road:{metalness:1,roughness:.62,envMapIntensity:0,diffuse:new u(0),emissive:void 0,depthWrite:void 0,uniforms:{colorMapping:0,colorMappingIntensity:1}},Other:{metalness:1,roughness:.617,envMapIntensity:1,emissive:void 0,depthWrite:void 0,uniforms:{colorMapping:0,colorMappingIntensity:1}},Glass:{metalness:1.57,roughness:1,diffuse:new u(4013373),envMapIntensity:2,emissive:new u(0,0,0),depthWrite:void 0,uniforms:{colorMapping:0,colorMappingIntensity:0}},Tree:{metalness:void 0,roughness:void 0,envMapIntensity:void 0,emissive:void 0,depthWrite:void 0,uniforms:{colorMapping:0,colorMappingIntensity:0}},房顶:{metalness:0,roughness:1,envMapIntensity:2,emissive:void 0,depthWrite:void 0,uniforms:{colorMapping:0,colorMappingIntensity:0}},Wall:{metalness:0,roughness:1,envMapIntensity:2,emissive:new u(0,0,0),depthWrite:void 0,uniforms:{colorMapping:0,colorMappingIntensity:0}},Win:{metalness:0,roughness:1,envMapIntensity:2,emissive:new u(0,0,0),depthWrite:void 0,uniforms:{colorMapping:0,colorMappingIntensity:0}},A_Elevator_电梯:{metalness:void 0,roughness:void 0,envMapIntensity:void 0,emissive:void 0,depthWrite:void 0,diffuse:void 0,transparent:void 0,opacity:void 0,uniforms:{colorMapping:0,colorMappingIntensity:0}}},globalEffect:{light:{environment:{map:2,intensity:1},directLight1:{intensity:1,phi:45,theta:-45}}}}],animations:["linear"],transforms:[{effects:[0,1],animation:0,time:0},{effects:[0,2],animation:0,time:0},{effects:[1,2],animation:0,time:0},{effects:[1,3],animation:0,time:0},{effects:[2,3],animation:0,time:0},{effects:[0,3],animation:0,time:0},{effects:[0,4],animation:0,time:0},{effects:[1,4],animation:0,time:0},{effects:[2,4],animation:0,time:0},{effects:[3,4],animation:0,time:0},{effects:[0,5],animation:0,time:0},{effects:[1,5],animation:0,time:0},{effects:[2,5],animation:0,time:0},{effects:[3,5],animation:0,time:0},{effects:[4,5],animation:0,time:0},{effects:[0,6],animation:0,time:0},{effects:[1,6],animation:0,time:0},{effects:[2,6],animation:0,time:0},{effects:[3,6],animation:0,time:0},{effects:[4,6],animation:0,time:0},{effects:[5,6],animation:0,time:0}]};const i=new ue(16777215,0);i.position.setFromSpherical(Y),i.lookAt(new p,new p(0,1,0)),i.intensity=1,this.directionalLightHelper=new wt(i,10),i.add(this.directionalLightHelper),this.currentEffectConfigIndex=0,this.lights={environment:{map:"Grand_Canyon_C",intensity:1},directLight1:{node:i,intensity:0,phi:0,theta:0}},this.animations={linear:{from:{x:0},to:{x:1},delay:0,duration:1e3,easing:k.Linear.None,repeat:0,yoyo:!1}},this.TWEEN=Xt,this.install()}update(e){ve(),this.directionalLightHelper.update()}install(){this.engine.camera.position.set(-100,100,-200),Ye.load("./models/campus/campus.gltf").then(i=>{const n=new WeakMap,r=new WeakMap;this.materialCache=r,i.root.euler.set(0,Math.PI,0),i.root.traverse(s=>{if(!s.isMesh)return;s.material.name.indexOf("辅楼")==-1&&(s.castShadow=!0,s.receiveShadow=!0),s.name.indexOf("Line")!==-1&&(s.visible=!1),s.name.indexOf("Floor")!==-1&&(s.visible=!1),s.name==="A7_Elevator_电梯-1"&&(s.userData.progress=1,s.userData.speed=1.2+Math.random()*.2,s.userData.array=[new p(-.713,-4.429,-1.757),new p(-.713,.746,-1.757)],s.renderOrder=-1,this.engine.elevators.push(s)),s.name==="A1_Elevator_电梯-1"&&(s.userData.progress=1,s.userData.speed=1.2+Math.random()*.2,s.userData.array=[new p(.668,-2.347,-.988),new p(.668,1.914,-.988)],s.renderOrder=-1,this.engine.elevators.push(s)),s.material.name.indexOf("白墙")!==-1&&(s.material.defines={USE_UV3:!0},s.material.emissive=new u(0,0,0)),s.material.name.indexOf("房顶")!==-1&&(s.renderOrder=100),s.material.name.indexOf("墙")!==-1&&(s.renderOrder=100),s.material.name.indexOf("楼梯")!==-1&&(s.renderOrder=100),s.material.name.indexOf("围栏")!==-1&&(s.renderOrder=100),s.material.name.indexOf("窗")!=-1&&s.material.transparent&&(s.material.depthWrite=!1,s.renderOrder=100);const a=s.material;if(n.has(a)&&a.name.indexOf("电梯")===-1)s.material=n.get(a);else{const h=new Se;h.copy(a),h.name=a.name,s.material.name.indexOf("白墙")!==-1&&(window.aaa=h),r.set(h,s.material),h.uniforms={colorMapping1:H.getTexture(),colorMapping2:te.getTexture(),colorMappingIntensity:0,colorMappingMixRatio:0},n.set(a,h),s.material=h}}),this.root=i.root,this.engine.scene.add(this.root),this.init()});let e;document.addEventListener("keydown",i=>{i.keyCode===73&&(e?(e.destroy(),e=null):(e=new Mt(this.engine.effectComposer,Q),e.gui.domElement.style.left="15px"))})}init(){const e=this.root,i={};this.$nodes=i;const n=["GroundDec","Facade","A7_Inside01_InWall_楼层外墙","A7_Inside01_InWall_地板地板","Inside01_InWall_楼层外墙内部","地面","路灯","红绿灯","A7","A7_Floor","A8-1_Floor","A1_Floor","A8_Floor","A2_Floor","A3_Floor","A5_Floor","A6_Floor"],r=["A","Win","Wall","Glass","Road","Grass","Ground","Leaf","Tree","Other","Light","房顶","A_Win_窗户面","A_Elevator_电梯"],s={colorMapping1:H.getTexture(),colorMapping2:te.getTexture(),colorMappingIntensity:0,colorMappingMixRatio:0};this.$uniforms=s,e.traverse(g=>{if(g.isMesh){for(let o=0,f=n.length;o<f;o++){const l=n[o];g.name.indexOf(l)!==-1&&(i[l]||(i[l]=[]),i[l].push(g))}for(let o=0,f=r.length;o<f;o++){const l=r[o];g.material.name.indexOf(l)!==-1&&(i[l]||(i[l]=[]),i[l].push(g))}}});const a=new WeakMap,h=new WeakMap,c=["A7_Inside01_InWall_楼层外墙","A7_Inside01_InWall_地板地板","Inside01_InWall_楼层外墙内部","地面"],d=["A7_Inside01_InWall_白墙"];this.engine.floors.forEach(g=>{g.traverse(o=>{if(!o.isMesh)return;const f=o.material;if(a.has(f))o.material=a.get(f);else{const l=new Se;l.copy(f),l.name=f.name,h.set(l,o.material),l.uniforms={colorMapping1:H.getTexture(),colorMapping2:te.getTexture(),colorMappingIntensity:0,colorMappingMixRatio:0},a.set(f,l),o.material=l}for(let l=0,_=c.length;l<_;l++){const v=c[l];o.name.indexOf(v)!==-1&&(i[v]||(i[v]=[]),i[v].push(o))}for(let l=0,_=d.length;l<_;l++){const v=d[l];o.material.name&&o.material.name.indexOf(v)!==-1&&(i[v]||(i[v]=[]),i[v].push(o))}})})}showEffectUI(e,i=new Q){const n=i.addFolder(e.name),r=this.$nodes,s=e.nodeEffect;for(const h in s){if(h==="name")continue;const c=n.addFolder(h),d=s[h];for(const g in d){const o=d[g];if(o!==void 0){if(E.isNumber(o))c.add(d,g,0,2,.01).onChange(f=>{r[h].forEach(l=>{l.material[g]=f})});else if(E.isColor3(o))c.addColor(d,g).onChange(f=>{r[h].forEach(l=>{l.material[g].copy(f)})});else if(o==="uniforms"){const f=c.addFolder(g);for(const l in o){const _=o[l];E.isNumber(_)&&f.add(o,l,0,2,.01).onChange(v=>{r[h].forEach(b=>{b.material.uniforms[l]=v})})}}}}}const a=this.engine.effectComposer.getEffect("GTAO");return i.add(a,"active").name("GTAO").listen(),this.engine.effectComposer.sceneMSAA=!0,this.engine.effectComposer.getEffect("FXAA").active=!0,n.close(),n}hiddenObjects(e){const i=this.$nodes;for(let n=0,r=e.length;n<r;n++){const s=e[n];i[s].forEach(a=>{a.visible=!1})}}showObjects(e){const i=this.$nodes;for(let n=0,r=e.length;n<r;n++){const s=e[n];i[s].forEach(a=>{a.visible=!0})}}switchNodeEffect(e,i,n,r={number:[],color3:[],vector3:[]}){const s=this,a=this.materialCache;for(const h in i){const c=this.$nodes[h],d=i[h],g=e[h];if(d)for(const o in d)c.forEach(f=>{if(E.isNumber(f.material[o])){let l=a.get(f.material)[o];g&&g[o]!==void 0&&(l=g[o]);let _=a.get(f.material)[o];d[o]!==void 0&&(_=d[o]),r.number.push({target:f.material,prop:o,from:l,to:_})}else if(E.isColor3(f.material[o])){let l=a.get(f.material)[o];g&&g[o]!==void 0&&(l=g[o]);let _=a.get(f.material)[o];d[o]!==void 0&&(_=d[o]),r.color3.push({target:f.material,prop:o,from:l,to:_})}else if(o==="uniforms"){const l=d[o],_=g[o];for(const v in l){let b=a.get(f.material).uniforms[v];_&&_[v]!==void 0&&(b=_[v]);const m=l[v];v==="colorMapping"||v.indexOf("Map")!==-1&&v.indexOf("Intensity")===-1?E.isString(n[m].texture)?f.material.uniforms[v]=s.setTexture(n[m].texture):f.material.uniforms[v]=n[m].texture:E.isNumber(m)?r.number.push({target:f.material.uniforms,prop:v,from:b,to:m}):E.isColor3(m)?r.color3.push({target:f.material.uniforms,prop:v,from:b,to:m}):f.material.uniforms[v]=m}}else if(o.indexOf("Map")!==-1&&o.indexOf("Intensity")===-1)f.material[o]!==n[d[o]].texture&&(f.material[o]||(f.material.needsUpdate=!0),E.isString(n[d[o]].texture)?f.material[o]=s.setTexture(n[d[o]].texture):f.material[o]=n[d[o]].texture);else{let l=a.get(f.material)[o];d[o]!==void 0&&(l=d[o]),f.material[o]=l}})}return r}switchGlobalEffect(e,i,n,r={number:[],color3:[],vector3:[]}){for(const s in i){const a=i[s],h=e[s];if(a)switch(s){case"light":this.switchLight(h,a,n,r);break;case"postEffect":this.switchPostEffect(h,a,r);break}}}switchLight(e,i,n,r){const s=this.lights;for(const a in i){const h=i[a],c=e[a];if(a==="environment"){if(this.engine.setEnvironmentTexture(n[h.map].texture),h.intensity!==this.engine.scene.environmentLightIntensity){let d=s[a].intensity;c&&c[a]!==void 0&&(d=c[a].intensity);let g=s[a].intensity;h[a]!==void 0&&(g=h[a].intensity),r.number.push({target:this.engine.scene,prop:"environmentLightIntensity",from:d,to:g})}}else{const d=s[a];for(const g in h){const o=h[g],f=c[g];if(g==="intensity"){if(o!==f){let l=d.intensity;f!==void 0&&(l=f);let _=d.intensity;o!==void 0&&(_=o),r.number.push({target:d.node,prop:g,from:l,to:_})}}else if((g==="phi"||g==="theta")&&o!==f){let l=d[g];f!==void 0&&(l=f);let _=d[g];o!==void 0&&(_=o),r.number.push({target:d.node,prop:g,from:l,to:_})}}}}}switchPostEffect(e,i,n){}setTexture(e){}switchEffect(e,i=!0){if(this.currentTween)return null;const n=this.effectConfig.textures,r=this.effectConfig.effects,s=this.effectConfig.transforms,a=this.effectConfig.animations,h=r[e],c=r[this.currentEffectConfigIndex||0],d={number:[],color3:[],vector3:[]},g=c.nodeEffect,o=h.nodeEffect,f=c.globalEffect,l=h.globalEffect;if(this.switchNodeEffect(g,o,n,d),this.switchGlobalEffect(f,l,n,d),i){const _=this;for(let v=0,b=s.length;v<b;v++){const m=s[v];if(m.effects.indexOf(e)!==-1&&m.effects.indexOf(this.currentEffectConfigIndex)!==-1){const y=a[m.animation],M=this.animations[y],A=m.time,W=M.delay||0,Z=M.easing||k.Linear.None,re=M.repeat||0,I=M.yoyo||!1;this.currentTween=new se(M.from).to(M.to,A).delay(W).easing(Z).repeat(re).yoyo(I).onUpdate(()=>{const x=M.from.x;_.setProgress(d,x)}).onComplete(()=>{this.currentEffectConfigIndex=e,this.currentTween=null;for(const x in this.animations)this.animations[x].from.x=0}).start();return}}}return d}setProgress(e,i){e.number.forEach(n=>{n.prop==="phi"||n.prop==="theta"?(Y[n.prop]=E.lerpNumber(n.from,n.to,i)/180*Math.PI,n.target.position.setFromSpherical(Y),n.target.lookAt(new p,new p(0,1,0))):n.target[n.prop]=E.lerpNumber(n.from,n.to,i)}),e.color3.forEach(n=>{E.lerpColor3(n.from,n.to,i,n.target[n.prop])})}setInsideEffect(){app.$nodes.A7_Inside01_InWall_楼层外墙.forEach(e=>{e.material.uniforms.colorMappingIntensity=1,e.material.metalness=1.12,e.material.roughness=1.18,e.material.diffuse.setHex(4671303)}),app.$nodes.A7_Inside01_InWall_地板地板.forEach(e=>{e.material.metalness=.46,e.material.roughness=.46,e.material.diffuse.setHex(11579568)}),app.$nodes.Inside01_InWall_楼层外墙内部.forEach(e=>{e.material.metalness=.56,e.material.roughness=.46}),app.$nodes.A7_Inside01_InWall_白墙.forEach(e=>{e.material.metalness=.56,e.material.roughness=.46}),app.$nodes.地面.forEach(e=>{e.material.metalness=.75,e.material.roughness=1,e.material.diffuse.setHex(5395026)}),this.engine.setEnvironmentTexture("Hall"),this.currentEffectConfigIndex=0}uninstall(){this.engine.scene.remove(this.root),this.gui.destroy(),this.root=null,this.gui=null}}const qt=new u(1184274),Zt=new $e().addColorStop(.1,qt).addColorStop(1,new u(3684408)),Jt=new $e().addColorStop(.1,new u(0)),H=new We,te=new We;H.gradient(Zt);te.gradient(Jt);const He=new Oe;He.setDecoderPath("./libs/draco/");const Ye=new De;Ye.setDRACOLoader(He);const _e=new Dt;window.app=new Qt(_e);setTimeout(()=>{},2e3);_e.setEnvironmentTexture("blue");const Xe=new Q,T={switchDark:()=>{let t=new p(-100,100,-200),e=app.engine.camera.position.distanceTo(t);L(new p(-100,100,-200),new p(0,0,0),e/300*1e3+100).onComplete(()=>{D(!1,!0),app.engine._skyTimeline.timeline=9.84,app.root.visible=!0,app.engine.floor.visible=!1,app.currentEffectConfigIndex!==1&&(app.switchEffect(1),app.showObjects(["A"]),app.hiddenObjects(["Light","Tree","路灯","红绿灯","A7_Floor","A8-1_Floor","A1_Floor","A8_Floor","A2_Floor","A3_Floor","A5_Floor","A6_Floor"]),app.engine.cars.forEach(i=>{i.visible=!1}))})},switchTransparent1:()=>{let t=new p(-100,100,-200),e=app.engine.camera.position.distanceTo(t);L(new p(-100,100,-200),new p(0,0,0),e/300*1e3+100).onComplete(()=>{D(),app.engine.elevators.forEach(i=>{i.userData.progress=0}),app.engine._skyTimeline.timeline=9.84,app.root.visible=!0,app.engine.floor.visible=!1,app.currentEffectConfigIndex!==4&&(app.switchEffect(4),app.showObjects(["A"]),app.hiddenObjects(["Light","Tree","路灯","红绿灯","A7_Floor","A8-1_Floor","A1_Floor","A8_Floor","A2_Floor","A3_Floor","A5_Floor","A6_Floor","A_Win_窗户面"]))})},switchTransparent2:()=>{let t=new p(-74.80741605992989,87.54789013578306,-175.63885814153193),e=new p(8.351484865781718,1.3737146771755868,-4.163858141532124),i=app.engine.camera.position.distanceTo(t);L(t,e,i/300*1e3+100).onComplete(()=>{D(),app.engine._skyTimeline.timeline=9.84,app.root.visible=!0,app.engine.floor.visible=!1,app.currentEffectConfigIndex!==5&&(app.switchEffect(5),app.showObjects(["A"]),app.hiddenObjects(["Light","Tree","路灯","红绿灯","A_Win_窗户面","A8-1_Floor","A1_Floor","A8_Floor","A2_Floor","A3_Floor","A5_Floor","A6_Floor","A_Elevator_电梯"]))})},switchTransparent3:()=>{let t=new p(-100,100,-200),e=app.engine.camera.position.distanceTo(t);L(new p(-100,100,-200),new p(0,0,0),e/300*1e3+100).onComplete(()=>{D(),app.engine._skyTimeline.timeline=9.84,app.root.visible=!0,app.engine.floor.visible=!1,app.currentEffectConfigIndex!==6&&(app.switchEffect(6),app.hiddenObjects(["Light","Tree","路灯","红绿灯","A"]),app.showObjects(["A7_Floor","A8-1_Floor","A1_Floor","A8_Floor","A2_Floor","A3_Floor","A5_Floor","A6_Floor"]),setTimeout(()=>{app.$nodes.A7_Floor[10].material.diffuse.setHex(16760576),app.$nodes.A7_Floor[11].material.diffuse.setHex(16760576),app.$nodes.A8_Floor[2].material.diffuse.setHex(16760576),app.$nodes.A8_Floor[3].material.diffuse.setHex(16760576),app.$nodes["A8-1_Floor"][2].material.diffuse.setHex(16760576),app.$nodes["A8-1_Floor"][3].material.diffuse.setHex(16760576),app.$nodes.A1_Floor[2].material.diffuse.setHex(16760576),app.$nodes.A1_Floor[3].material.diffuse.setHex(16760576),app.$nodes.A2_Floor[2].material.diffuse.setHex(16760576),app.$nodes.A2_Floor[3].material.diffuse.setHex(16760576)},1e3))})},switchDay:()=>{let t=new p(-100,100,-200),e=app.engine.camera.position.distanceTo(t);L(new p(-100,100,-200),new p(0,0,0),e/300*1e3+100).onComplete(()=>{D(!0,!1,"nightToDay"),app.root.visible=!0,app.engine.floor.visible=!1,app.currentEffectConfigIndex!==2&&(app.engine.cars.forEach(i=>{i.visible=!0}),app.switchEffect(2),app.showObjects(["Light","Tree","路灯","红绿灯","A"]),app.hiddenObjects(["A7_Floor","A8-1_Floor","A1_Floor","A8_Floor","A2_Floor","A3_Floor","A5_Floor","A6_Floor"]),app.engine.cars.forEach(i=>{i.visible=!0}))})},switchNight:()=>{let t=new p(-100,100,-200),e=new p(0,0,0),i=app.engine.camera.position.distanceTo(t);L(t,e,i/300*1e3+100).onComplete(()=>{D(!0,!1,"dayToNight"),app.root.visible=!0,app.engine.floor.visible=!1,app.currentEffectConfigIndex!==3&&(app.engine.cars.forEach(n=>{n.visible=!0}),app.switchEffect(3),app.showObjects(["Light","Tree","路灯","红绿灯","A"]),app.hiddenObjects(["A7_Floor","A8-1_Floor","A1_Floor","A8_Floor","A2_Floor","A3_Floor","A5_Floor","A6_Floor"]),app.engine.cars.forEach(n=>{n.visible=!0}))})},switchInnerEffect:()=>{let t=new p(-44.67491969383822,101.04916641859452,-105.52861517152931),e=new p(6.135879707752114,9.22813058944339,-10.409765785331254),i=app.engine.camera.position.distanceTo(t);console.log(i),L(t,e,i/300*1e3+100).onComplete(()=>{D(!1,!1),app.engine._skyTimeline.timeline=9.84,app.root.visible=!1,app.engine.floor.visible=!0,app.setInsideEffect()})},switchCamera:()=>{L(new p(-21.11310902101637,24.107456735987483,-18.088254215354155),new p(-14.571347327700803,4.0697410277188,9.70181833506374),1e3).onComplete(()=>{D(!1,!0),app.root.visible=!0,app.engine.floor.visible=!1,app.currentEffectConfigIndex!==1&&(app.switchEffect(1),app.showObjects(["A"]),app.hiddenObjects(["Light","Tree","路灯","红绿灯","A7_Floor","A8-1_Floor","A1_Floor","A8_Floor","A2_Floor","A3_Floor","A5_Floor","A6_Floor"]))})},timeline:t=>{const e=app.switchEffect(3,!1);app.engine._skyTimeline.timeline=t,app.setProgress(e,(t-9.84)/24)}};function D(t=!1,e=!1,i=!1){app.engine.mixEffect.progress==0&&(app.engine.mixEffect.progress=1),i&&(app.engine._skyTimeline.needsUpdate=!0),i=="nightToDay"&&(app.engine._skyTimeline.updateNightToDay=!0),i=="dayToNight"&&(app.engine._skyTimeline.updateDayToNight=!0),app.engine.infoModels.forEach(n=>{n.visible=e}),app.engine.cars.forEach(n=>{n.visible=t})}function Kt(t){const e=t.addFolder("综合态势");e.add(T,"switchDay").name("白天"),e.add(T,"switchNight").name("夜晚"),e.add(app.engine._skyTimeline,"timeline",9.84,24,.01).onChange(T.timeline).name("时间轴").listen();const i=t.addFolder("监控管理");i.add(T,"switchDark").name("监控管理（室外）").onChange(()=>{app.engine.infoModels.forEach(s=>{s.visible=!0})}),i.add(T,"switchTransparent2").name("监控管理（室内）");const n=t.addFolder("设备管理");n.add(T,"switchTransparent1").name("电梯设备"),n.add(T,"switchTransparent2").name("照明设备"),n.add(T,"switchInnerEffect").name("照明设备（室内）"),n.add(T,"switchTransparent3").name("供温设备");const r=Xe.addFolder("设置");r.add(app.effectConfig.transforms[0],"time",0,2e3,10).onChange(s=>{for(let a=0;a<app.effectConfig.transforms.length;a++)app.effectConfig.transforms[a].time=s}).name("插值切换时间"),r.add(app.engine.mixEffect,"active").name("开启虚影"),r.add(app.engine.mixEffect,"type",0,1,1).name("虚影方式"),r.add(app.engine.mixEffect,"speed",0,10,.01).name("虚影速度"),r.close()}const ei=Xe.addFolder("业务");Kt(ei);let Fe=!1;_e.loop=function(t){app.update(),app.root&&!Fe&&(Fe=!0,T.switchDay())};window.engine=app.engine;function L(t,e,i){const n=app.engine.camera,r=app.engine.controls;return new se({x:n.position.x,y:n.position.y,z:n.position.z,tx:r.target.x,ty:r.target.y,tz:r.target.z}).to({x:t.x,y:t.y,z:t.z,tx:e.x,ty:e.y,tz:e.z},i).onUpdate(function(s){n.position.set(s.x,s.y,s.z),r.target.set(s.tx,s.ty,s.tz),r.update()}).start()}});export default ti();
