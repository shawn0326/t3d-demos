/**
 * @license
 * Copyright 2021-present uino
 * SPDX-License-Identifier: BSD-3-Clause
 */class T{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}lerpVectors(e,t,n){return this.subVectors(t,e).multiplyScalar(n).add(e)}set(e=0,t=0,n=0){return this.x=e,this.y=t,this.z=n,this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}getLength(){return Math.sqrt(this.getLengthSquared())}getLengthSquared(){return this.x*this.x+this.y*this.y+this.z*this.z}normalize(e=1){const t=this.getLength()||1,n=e/t;return this.x*=n,this.y*=n,this.z*=n,this}subtract(e,t=new T){return t.set(this.x-e.x,this.y-e.y,this.z-e.z)}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,r=t.x,o=t.y,l=t.z;return this.x=i*l-s*o,this.y=s*r-n*l,this.z=n*o-i*r,this}cross(e){return this.crossVectors(this,e)}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e._x,r=e._y,o=e._z,l=e._w,c=l*t+r*i-o*n,u=l*n+o*t-s*i,h=l*i+s*n-r*t,f=-s*t-r*n-o*i;return this.x=c*l+f*-s+u*-o-h*-r,this.y=u*l+f*-r+h*-s-c*-o,this.z=h*l+f*-o+c*-r-u*-s,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,r=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*r,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*r,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*r,this}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}setFromMatrixPosition(e){return this.setFromMatrixColumn(e,3)}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}setFromSpherical(e){const t=Math.sin(e.phi)*e.radius;return this.x=t*Math.sin(e.theta),this.y=Math.cos(e.phi)*e.radius,this.z=t*Math.cos(e.theta),this}project(e){return this.applyMatrix4(e.projectionViewMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.worldMatrix)}reflect(e){return this.sub(fa.copy(e).multiplyScalar(2*this.dot(e)))}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}clone(){return new T(this.x,this.y,this.z)}}const fa=new T;class U{constructor(){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)}isIdentity(){const e=this.elements;return e[0]===1&&e[4]===0&&e[8]===0&&e[12]===0&&e[1]===0&&e[5]===1&&e[9]===0&&e[13]===0&&e[2]===0&&e[6]===0&&e[10]===1&&e[14]===0&&e[3]===0&&e[7]===0&&e[11]===0&&e[15]===1}set(e,t,n,i,s,r,o,l,c,u,h,f,d,_,p,m){const g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=i,g[1]=s,g[5]=r,g[9]=o,g[13]=l,g[2]=c,g[6]=u,g[10]=h,g[14]=f,g[3]=d,g[7]=_,g[11]=p,g[15]=m,this}clone(){return new U().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1)}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,r=n[0],o=n[4],l=n[8],c=n[12],u=n[1],h=n[5],f=n[9],d=n[13],_=n[2],p=n[6],m=n[10],g=n[14],E=n[3],x=n[7],v=n[11],A=n[15],P=i[0],w=i[4],L=i[8],b=i[12],O=i[1],I=i[5],R=i[9],D=i[13],Q=i[2],H=i[6],K=i[10],ee=i[14],$=i[3],W=i[7],z=i[11],V=i[15];return s[0]=r*P+o*O+l*Q+c*$,s[4]=r*w+o*I+l*H+c*W,s[8]=r*L+o*R+l*K+c*z,s[12]=r*b+o*D+l*ee+c*V,s[1]=u*P+h*O+f*Q+d*$,s[5]=u*w+h*I+f*H+d*W,s[9]=u*L+h*R+f*K+d*z,s[13]=u*b+h*D+f*ee+d*V,s[2]=_*P+p*O+m*Q+g*$,s[6]=_*w+p*I+m*H+g*W,s[10]=_*L+p*R+m*K+g*z,s[14]=_*b+p*D+m*ee+g*V,s[3]=E*P+x*O+v*Q+A*$,s[7]=E*w+x*I+v*H+A*W,s[11]=E*L+x*R+v*K+A*z,s[15]=E*b+x*D+v*ee+A*V,this}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}inverse(){return this.getInverse(this)}getInverse(e){const t=this.elements,n=e.elements,i=n[0],s=n[1],r=n[2],o=n[3],l=n[4],c=n[5],u=n[6],h=n[7],f=n[8],d=n[9],_=n[10],p=n[11],m=n[12],g=n[13],E=n[14],x=n[15],v=d*E*h-g*_*h+g*u*p-c*E*p-d*u*x+c*_*x,A=m*_*h-f*E*h-m*u*p+l*E*p+f*u*x-l*_*x,P=f*g*h-m*d*h+m*c*p-l*g*p-f*c*x+l*d*x,w=m*d*u-f*g*u-m*c*_+l*g*_+f*c*E-l*d*E,L=i*v+s*A+r*P+o*w;if(L===0)return console.warn("Matrix4: can not invert matrix, determinant is 0"),this.identity();const b=1/L;return t[0]=v*b,t[1]=(g*_*o-d*E*o-g*r*p+s*E*p+d*r*x-s*_*x)*b,t[2]=(c*E*o-g*u*o+g*r*h-s*E*h-c*r*x+s*u*x)*b,t[3]=(d*u*o-c*_*o-d*r*h+s*_*h+c*r*p-s*u*p)*b,t[4]=A*b,t[5]=(f*E*o-m*_*o+m*r*p-i*E*p-f*r*x+i*_*x)*b,t[6]=(m*u*o-l*E*o-m*r*h+i*E*h+l*r*x-i*u*x)*b,t[7]=(l*_*o-f*u*o+f*r*h-i*_*h-l*r*p+i*u*p)*b,t[8]=P*b,t[9]=(m*d*o-f*g*o-m*s*p+i*g*p+f*s*x-i*d*x)*b,t[10]=(l*g*o-m*c*o+m*s*h-i*g*h-l*s*x+i*c*x)*b,t[11]=(f*c*o-l*d*o-f*s*h+i*d*h+l*s*p-i*c*p)*b,t[12]=w*b,t[13]=(f*g*r-m*d*r+m*s*_-i*g*_-f*s*E+i*d*E)*b,t[14]=(m*c*r-l*g*r-m*s*u+i*g*u+l*s*E-i*c*E)*b,t[15]=(l*d*r-f*c*r+f*s*u-i*d*u-l*s*_+i*c*_)*b,this}transform(e,t,n){const i=this.elements,s=n._x,r=n._y,o=n._z,l=n._w,c=s+s,u=r+r,h=o+o,f=s*c,d=s*u,_=s*h,p=r*u,m=r*h,g=o*h,E=l*c,x=l*u,v=l*h,A=t.x,P=t.y,w=t.z;return i[0]=(1-(p+g))*A,i[1]=(d+v)*A,i[2]=(_-x)*A,i[3]=0,i[4]=(d-v)*P,i[5]=(1-(f+g))*P,i[6]=(m+E)*P,i[7]=0,i[8]=(_+x)*w,i[9]=(m-E)*w,i[10]=(1-(f+p))*w,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}makeRotationFromQuaternion(e){const t=this.elements,n=e.x,i=e.y,s=e.z,r=e.w,o=n+n,l=i+i,c=s+s,u=n*o,h=n*l,f=n*c,d=i*l,_=i*c,p=s*c,m=r*o,g=r*l,E=r*c;return t[0]=1-(d+p),t[4]=h-E,t[8]=f+g,t[1]=h+E,t[5]=1-(u+p),t[9]=_-m,t[2]=f-g,t[6]=_+m,t[10]=1-(u+d),t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}extractRotation(e){const t=this.elements,n=e.elements,i=1/ht.setFromMatrixColumn(e,0).getLength(),s=1/ht.setFromMatrixColumn(e,1).getLength(),r=1/ht.setFromMatrixColumn(e,2).getLength();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*r,t[9]=n[9]*r,t[10]=n[10]*r,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}lookAtRH(e,t,n){const i=this.elements;return de.subVectors(e,t),de.getLengthSquared()===0&&(de.z=1),de.normalize(),ke.crossVectors(n,de),ke.getLengthSquared()===0&&(Math.abs(n.z)===1?de.x+=1e-4:de.z+=1e-4,de.normalize(),ke.crossVectors(n,de)),ke.normalize(),tn.crossVectors(de,ke),i[0]=ke.x,i[4]=tn.x,i[8]=de.x,i[1]=ke.y,i[5]=tn.y,i[9]=de.y,i[2]=ke.z,i[6]=tn.z,i[10]=de.z,this}decompose(e,t,n){const i=this.elements;let s=ht.set(i[0],i[1],i[2]).getLength();const r=ht.set(i[4],i[5],i[6]).getLength(),o=ht.set(i[8],i[9],i[10]).getLength();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],Se.copy(this);const c=1/s,u=1/r,h=1/o;return Se.elements[0]*=c,Se.elements[1]*=c,Se.elements[2]*=c,Se.elements[4]*=u,Se.elements[5]*=u,Se.elements[6]*=u,Se.elements[8]*=h,Se.elements[9]*=h,Se.elements[10]*=h,t.setFromRotationMatrix(Se),n.x=s,n.y=r,n.z=o,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],r=e[1],o=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],d=e[14],_=e[3],p=e[7],m=e[11],g=e[15];return _*(+s*l*h-i*c*h-s*o*f+n*c*f+i*o*d-n*l*d)+p*(+t*l*d-t*c*f+s*r*f-i*r*d+i*c*u-s*l*u)+m*(+t*c*h-t*o*d-s*r*h+n*r*d+s*o*u-n*c*u)+g*(-i*o*u-t*l*h+t*o*f+i*r*h-n*r*f+n*l*u)}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,r=e.x,o=e.y,l=e.z,c=s*r,u=s*o;return this.set(c*r+n,c*o-i*l,c*l+i*o,0,c*o+i*l,u*o+n,u*l-i*r,0,c*l-i*o,u*l+i*r,s*l*l+n,0,0,0,0,1)}lerpMatrices(e,t,n){if(n===0)return this.copy(e);if(n===1)return this.copy(t);const i=this.elements,s=e.elements,r=t.elements;for(let o=0;o<16;o++)i[o]=s[o]*(1-n)+r[o]*n;return this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const ht=new T,Se=new U,ke=new T,tn=new T,de=new T;class je{constructor(e=0,t=0,n=0,i=1){this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,r,o){let l=n[i+0],c=n[i+1],u=n[i+2],h=n[i+3];const f=s[r+0],d=s[r+1],_=s[r+2],p=s[r+3];if(o===0){e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(o===1){e[t]=f,e[t+1]=d,e[t+2]=_,e[t+3]=p;return}if(h!==p||l!==f||c!==d||u!==_){let m=1-o;const g=l*f+c*d+u*_+h*p,E=g>=0?1:-1,x=1-g*g;if(x>Number.EPSILON){const A=Math.sqrt(x),P=Math.atan2(A,g*E);m=Math.sin(m*P)/A,o=Math.sin(o*P)/A}const v=o*E;if(l=l*m+f*v,c=c*m+d*v,u=u*m+_*v,h=h*m+p*v,m===1-o){const A=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=A,c*=A,u*=A,h*=A}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,s,r){const o=n[i],l=n[i+1],c=n[i+2],u=n[i+3],h=s[r],f=s[r+1],d=s[r+2],_=s[r+3];return e[t]=o*_+u*h+l*d-c*f,e[t+1]=l*_+u*f+c*h-o*d,e[t+2]=c*_+u*d+o*f-l*h,e[t+3]=u*_-o*h-l*f-c*d,e}get x(){return this._x}set x(e){this._x=e,this.onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this.onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this.onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this.onChangeCallback()}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this.onChangeCallback(),this}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}lerpQuaternions(e,t,n){if(n===0)return this.copy(e);if(n===1)return this.copy(t);const i=e._w,s=e._x,r=e._y,o=e._z;let l=t._w,c=t._x,u=t._y,h=t._z;i*l+s*c+r*u+o*h<0&&(l=-l,c=-c,u=-u,h=-h),this._w=i+n*(l-i),this._x=s+n*(c-s),this._y=r+n*(u-r),this._z=o+n*(h-o);const d=1/Math.sqrt(this._w*this._w+this._x*this._x+this._y*this._y+this._z*this._z);return this._w*=d,this._x*=d,this._y*=d,this._z*=d,this.onChangeCallback(),this}slerpQuaternions(e,t,n){if(n===0)return this.copy(e);if(n===1)return this.copy(t);const i=e._w,s=e._x,r=e._y,o=e._z;let l=t._w,c=t._x,u=t._y,h=t._z,f=i*l+s*c+r*u+o*h;if(f<0&&(f=-f,l=-l,c=-c,u=-u,h=-h),f<.95){const d=Math.acos(f),_=1/Math.sin(d),p=Math.sin(d*(1-n))*_,m=Math.sin(d*n)*_;this._w=i*p+l*m,this._x=s*p+c*m,this._y=r*p+u*m,this._z=o*p+h*m}else{this._w=i+n*(l-i),this._x=s+n*(c-s),this._y=r+n*(u-r),this._z=o+n*(h-o);const d=1/Math.sqrt(this._w*this._w+this._x*this._x+this._y*this._y+this._z*this._z);this._w*=d,this._x*=d,this._y*=d,this._z*=d}return this.onChangeCallback(),this}set(e=0,t=0,n=0,i=1){return this._x=e,this._y=t,this._z=n,this._w=i,this.onChangeCallback(),this}clone(){return new je(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w!==void 0?e.w:1,this.onChangeCallback(),this}setFromEuler(e,t=!0){const n=Math.cos(e._x/2),i=Math.cos(e._y/2),s=Math.cos(e._z/2),r=Math.sin(e._x/2),o=Math.sin(e._y/2),l=Math.sin(e._z/2),c=e._order;return c==="XYZ"?(this._x=r*i*s+n*o*l,this._y=n*o*s-r*i*l,this._z=n*i*l+r*o*s,this._w=n*i*s-r*o*l):c==="YXZ"?(this._x=r*i*s+n*o*l,this._y=n*o*s-r*i*l,this._z=n*i*l-r*o*s,this._w=n*i*s+r*o*l):c==="ZXY"?(this._x=r*i*s-n*o*l,this._y=n*o*s+r*i*l,this._z=n*i*l+r*o*s,this._w=n*i*s-r*o*l):c==="ZYX"?(this._x=r*i*s-n*o*l,this._y=n*o*s+r*i*l,this._z=n*i*l-r*o*s,this._w=n*i*s+r*o*l):c==="YZX"?(this._x=r*i*s+n*o*l,this._y=n*o*s+r*i*l,this._z=n*i*l-r*o*s,this._w=n*i*s-r*o*l):c==="XZY"&&(this._x=r*i*s-n*o*l,this._y=n*o*s-r*i*l,this._z=n*i*l+r*o*s,this._w=n*i*s+r*o*l),t===!0&&this.onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],r=t[1],o=t[5],l=t[9],c=t[2],u=t[6],h=t[10],f=n+o+h;let d;return f>0?(d=.5/Math.sqrt(f+1),this._w=.25/d,this._x=(u-l)*d,this._y=(s-c)*d,this._z=(r-i)*d):n>o&&n>h?(d=2*Math.sqrt(1+n-o-h),this._w=(u-l)/d,this._x=.25*d,this._y=(i+r)/d,this._z=(s+c)/d):o>h?(d=2*Math.sqrt(1+o-n-h),this._w=(s-c)/d,this._x=(i+r)/d,this._y=.25*d,this._z=(l+u)/d):(d=2*Math.sqrt(1+h-n-o),this._w=(r-i)/d,this._x=(s+c)/d,this._y=(l+u)/d,this._z=.25*d),this.onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,r=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+r*o+i*c-s*l,this._y=i*u+r*l+s*o-n*c,this._z=s*u+r*c+n*l-i*o,this._w=r*u-n*o-i*l-s*c,this.onChangeCallback(),this}toMatrix4(e=new U){const t=e.elements,n=2*this._x*this._y,i=2*this._x*this._z,s=2*this._x*this._w,r=2*this._y*this._z,o=2*this._y*this._w,l=2*this._z*this._w,c=this._x*this._x,u=this._y*this._y,h=this._z*this._z,f=this._w*this._w;return t[0]=c-u-h+f,t[4]=n-l,t[8]=i+o,t[12]=0,t[1]=n+l,t[5]=-c+u-h+f,t[9]=r-s,t[13]=0,t[2]=i-o,t[6]=r+s,t[10]=-c-u+h+f,t[14]=0,t[3]=0,t[7]=0,t[11]=0,t[15]=1,e}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this.onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this.onChangeCallback(),this}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this.onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}onChange(e){return this.onChangeCallback=e,this}onChangeCallback(){}}class vn{static getValueSize(){return this.values.length/this.times.length}static interpolate(e,t,n,i){throw new Error("Interpolant: call to abstract method")}static copyValue(e,t){const n=this.values,i=this.valueSize,s=i*e;for(let r=0;r<i;r++)t[r]=n[s+r];return t}}class Mt extends vn{static interpolate(e,t,n,i){const s=this.values,r=this.valueSize,o=r*e;for(let l=0;l<r;l++)i[l]=s[o+l];return i}}class Pi extends vn{static interpolate(e,t,n,i){const s=this.values,r=this.valueSize,o=e*r,l=(e+1)*r;let c,u;for(let h=0;h<r;h++)c=s[o+h],u=s[l+h],c!==void 0&&u!==void 0?i[h]=c*(1-t)+u*t:i[h]=c;return i}}class Ci extends vn{static interpolate(e,t,n,i){const s=this.values,r=this.valueSize;return je.slerpFlat(i,0,s,e*r,s,(e+1)*r,t),i}}class Tr extends vn{static getValueSize(){return this.values.length/this.times.length/3}static interpolate(e,t,n,i){const s=this.values,r=this.valueSize,o=r*2,l=r*3,c=t*t,u=c*t,h=e*l,f=h+l,d=-2*u+3*c,_=u-c,p=1-d,m=_-c+t;for(let g=0;g<r;g++){const E=s[h+g+r],x=s[h+g+o]*n,v=s[f+g+r],A=s[f+g]*n;i[g]=p*E+m*x+d*v+_*A}return i}static copyValue(e,t){const n=this.values,i=this.valueSize,s=i*e*3+i;for(let r=0;r<i;r++)t[r]=n[s+r];return t}}class da extends Tr{static interpolate(e,t,n,i){const s=super.interpolate(e,t,n,i);return _a.fromArray(s).normalize().toArray(s),s}}const _a=new je;class Lt{constructor(e,t,n,i,s=Pi){this.target=e,this.propertyPath=t,this.name=this.target.uuid+"."+t,this.times=n,this.values=i,this.valueSize=0,this.interpolant=null,s===!0?s=Pi:s===!1&&(s=Mt),this.setInterpolant(s)}setInterpolant(e){return this.valueSize=e.getValueSize.call(this),this.interpolant=e,this}getValue(e,t){const n=this.interpolant,i=this.times,s=i.length;if(e<=i[0])return n.copyValue.call(this,0,t);if(e>=i[s-1])return n.copyValue.call(this,s-1,t);let r=s-1;for(;e<i[r]&&r>0;)r--;const o=i[r+1]-i[r],l=(e-i[r])/o;return n.interpolate.call(this,r,l,o,t)}}class pa extends Lt{constructor(e,t,n,i,s=Mt){s===!0&&(s=Mt),super(e,t,n,i,s)}}pa.prototype.valueTypeName="bool";class ma extends Lt{constructor(e,t,n,i,s){super(e,t,n,i,s)}}ma.prototype.valueTypeName="color";class Ar extends Lt{constructor(e,t,n,i,s){super(e,t,n,i,s)}}Ar.prototype.valueTypeName="number";class Li extends Lt{constructor(e,t,n,i,s=Ci){s===!0&&(s=Ci),super(e,t,n,i,s)}}Li.prototype.valueTypeName="quaternion";class ga extends Lt{constructor(e,t,n,i,s=Mt){s===!0&&(s=Mt),super(e,t,n,i,s)}}ga.prototype.valueTypeName="string";class vr extends Lt{constructor(e,t,n,i,s){super(e,t,n,i,s)}}vr.prototype.valueTypeName="vector";const Pe={BASIC:"basic",LAMBERT:"lambert",PHONG:"phong",PBR:"pbr",PBR2:"pbr2",POINT:"point",LINE:"line",SHADER:"shader",DEPTH:"depth",DISTANCE:"distance"},Re={NONE:"none",NORMAL:"normal",ADD:"add",SUB:"sub",MUL:"mul",CUSTOM:"custom"},we={ADD:100,SUBTRACT:101,REVERSE_SUBTRACT:102,MIN:103,MAX:104},_e={ZERO:200,ONE:201,SRC_COLOR:202,SRC_ALPHA:203,SRC_ALPHA_SATURATE:204,DST_COLOR:205,DST_ALPHA:206,ONE_MINUS_SRC_COLOR:207,ONE_MINUS_SRC_ALPHA:208,ONE_MINUS_DST_COLOR:209,ONE_MINUS_DST_ALPHA:210},ft={NONE:"none",FRONT:"front",BACK:"back",FRONT_AND_BACK:"front_and_back"},se={FRONT:"front",BACK:"back",DOUBLE:"double"},yt={SMOOTH_SHADING:"smooth_shading",FLAT_SHADING:"flat_shading"},M={DEPTH_COMPONENT:1e3,DEPTH_STENCIL:1001,STENCIL_INDEX8:1002,ALPHA:1003,RED:1004,RGB:1005,RGBA:1006,LUMINANCE:1007,LUMINANCE_ALPHA:1008,RED_INTEGER:1010,RG:1011,RG_INTEGER:1012,RGB_INTEGER:1013,RGBA_INTEGER:1014,R32F:1100,R16F:1101,R8:1102,RG32F:1103,RG16F:1104,RG8:1105,RGB32F:1106,RGB16F:1107,RGB8:1108,RGBA32F:1109,RGBA16F:1110,RGBA8:1111,RGBA4:1112,RGB5_A1:1113,DEPTH_COMPONENT32F:1114,DEPTH_COMPONENT24:1115,DEPTH_COMPONENT16:1116,DEPTH24_STENCIL8:1117,DEPTH32F_STENCIL8:1118,RGB_S3TC_DXT1:1200,RGBA_S3TC_DXT1:1201,RGBA_S3TC_DXT3:1202,RGBA_S3TC_DXT5:1203,RGB_PVRTC_4BPPV1:1204,RGB_PVRTC_2BPPV1:1205,RGBA_PVRTC_4BPPV1:1206,RGBA_PVRTC_2BPPV1:1207,RGB_ETC1:1208,RGBA_ASTC_4x4:1209,RGBA_BPTC:1210},N={UNSIGNED_BYTE:1500,UNSIGNED_SHORT_5_6_5:1501,UNSIGNED_SHORT_4_4_4_4:1502,UNSIGNED_SHORT_5_5_5_1:1503,UNSIGNED_SHORT:1504,UNSIGNED_INT:1505,UNSIGNED_INT_24_8:1506,FLOAT:1507,HALF_FLOAT:1508,FLOAT_32_UNSIGNED_INT_24_8_REV:1509,BYTE:1510,SHORT:1511,INT:1512},C={NEAREST:1600,LINEAR:1601,NEAREST_MIPMAP_NEAREST:1602,LINEAR_MIPMAP_NEAREST:1603,NEAREST_MIPMAP_LINEAR:1604,LINEAR_MIPMAP_LINEAR:1605},q={REPEAT:1700,CLAMP_TO_EDGE:1701,MIRRORED_REPEAT:1702},Pt={LEQUAL:515,GEQUAL:518,LESS:513,GREATER:516,EQUAL:514,NOTEQUAL:517,ALWAYS:519,NEVER:512},Cn={KEEP:7680,REPLACE:7681,INCR:7682,DECR:7683,INVERT:5386,INCR_WRAP:34055,DECR_WRAP:34056},pe={HARD:"hard",POISSON_SOFT:"poisson_soft",PCF3_SOFT:"pcf3_soft",PCF5_SOFT:"pcf5_soft",PCSS16_SOFT:"pcss16_soft",PCSS32_SOFT:"pcss32_soft",PCSS64_SOFT:"pcss64_soft"},ve={LINEAR:"linear",SRGB:"sRGB",GAMMA:"Gamma"},xa={MULTIPLY:"ENVMAP_BLENDING_MULTIPLY",MIX:"ENVMAP_BLENDING_MIX",ADD:"ENVMAP_BLENDING_ADD"},Vt={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},it={NONE:0,RGB:1,RGBA:2},y={COLOR_ATTACHMENT0:2e3,COLOR_ATTACHMENT1:2001,COLOR_ATTACHMENT2:2002,COLOR_ATTACHMENT3:2003,COLOR_ATTACHMENT4:2004,COLOR_ATTACHMENT5:2005,COLOR_ATTACHMENT6:2006,COLOR_ATTACHMENT7:2007,COLOR_ATTACHMENT8:2008,COLOR_ATTACHMENT9:2009,COLOR_ATTACHMENT10:2010,COLOR_ATTACHMENT11:2011,COLOR_ATTACHMENT12:2012,COLOR_ATTACHMENT13:2013,COLOR_ATTACHMENT14:2014,COLOR_ATTACHMENT15:2015,DEPTH_ATTACHMENT:2020,STENCIL_ATTACHMENT:2021,DEPTH_STENCIL_ATTACHMENT:2030},Ta={STREAM_DRAW:35040,STREAM_READ:35041,STREAM_COPY:35042,STATIC_DRAW:35044,STATIC_READ:35045,STATIC_COPY:35046,DYNAMIC_DRAW:35048,DYNAMIC_READ:35049,DYNAMIC_COPY:35050},Ln={ANY_SAMPLES_PASSED:7e3,ANY_SAMPLES_PASSED_CONSERVATIVE:7001,TIME_ELAPSED:7002};class Yt{addEventListener(e,t,n){this._eventMap===void 0&&(this._eventMap={});const i=this._eventMap;i[e]===void 0&&(i[e]=[]),i[e].push({listener:t,thisObject:n||this})}removeEventListener(e,t,n){if(this._eventMap===void 0)return;const s=this._eventMap[e];if(s!==void 0)for(let r=0,o=s.length;r<o;r++){const l=s[r];if(l.listener===t&&l.thisObject===(n||this)){s.splice(r,1);break}}}dispatchEvent(e){if(this._eventMap===void 0)return;const n=this._eventMap[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,r=i.length;s<r;s++){const o=i[s];o.listener.call(o.thisObject,e)}e.target=null}}}class Aa{constructor(e="",t=[],n=-1){this.name=e,this.tracks=t,this.duration=n,this.duration<0&&this.resetDuration()}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n<i;n++){const s=e[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}}class va{constructor(e,t,n){this.isLoading=!1,this.itemsLoaded=0,this.itemsTotal=0,this.urlModifier=void 0,this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n}itemStart(e){this.itemsTotal++,this.isLoading===!1&&this.onStart!==void 0&&this.onStart(e,this.itemsLoaded,this.itemsTotal),this.isLoading=!0}itemEnd(e){this.itemsLoaded++,this.onProgress!==void 0&&this.onProgress(e,this.itemsLoaded,this.itemsTotal),this.itemsLoaded===this.itemsTotal&&(this.isLoading=!1,this.onLoad!==void 0&&this.onLoad())}itemError(e){this.onError!==void 0&&this.onError(e)}resolveURL(e){return this.urlModifier?this.urlModifier(e):e}setURLModifier(e){return this.urlModifier=e,this}}const Er=new va;class wt{constructor(e){this.manager=e!==void 0?e:Er,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setRequestHeader(e){return this.requestHeader=e,this}}class mn extends wt{constructor(e){super(e),this.responseType=void 0,this.mimeType=void 0}load(e,t,n,i){e===void 0&&(e=""),this.path!=null&&(e=this.path+e),e=this.manager.resolveURL(e);const s=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),r=this.mimeType,o=this.responseType;fetch(s).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("t3d.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const c=l.body.getReader(),u=l.headers.get("Content-Length"),h=u?parseInt(u):0,f=h!==0;let d=0;const _=new ReadableStream({start(p){m();function m(){c.read().then(({done:g,value:E})=>{g?p.close():(d+=E.byteLength,n!==void 0&&n(new ProgressEvent("progress",{lengthComputable:f,loaded:d,total:h})),p.enqueue(E),m())})}}});return new Response(_)}else throw new Ea(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(o){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(c=>new DOMParser().parseFromString(c,r));case"json":return l.json();default:if(r===void 0)return l.text();{const u=/charset="?([^;"\s]*)"?/i.exec(r),h=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(h);return l.arrayBuffer().then(d=>f.decode(d))}}}).then(l=>{t&&t(l)}).catch(l=>{i&&i(l),this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class Ea extends Error{constructor(e,t){super(e),this.response=t}}class Sr extends wt{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,r=document.createElementNS("http://www.w3.org/1999/xhtml","img");function o(){c(),t&&t(this),s.manager.itemEnd(e)}function l(u){c(),i&&i(u),s.manager.itemError(e),s.manager.itemEnd(e)}function c(){r.removeEventListener("load",o,!1),r.removeEventListener("error",l,!1)}return r.addEventListener("load",o,!1),r.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(r.crossOrigin=this.crossOrigin),s.manager.itemStart(e),r.src=e,r}}class G{constructor(e=0,t=0){this.x=e,this.y=t}set(e=0,t=0){return this.x=e,this.y=t,this}lerpVectors(e,t,n){return this.subVectors(t,e).multiplyScalar(n).add(e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}getLength(){return Math.sqrt(this.getLengthSquared())}getLengthSquared(){return this.x*this.x+this.y*this.y}normalize(e=1){const t=this.getLength()||1,n=e/t;return this.x*=n,this.y*=n,this}subtract(e,t=new G){return t.set(this.x-e.x,this.y-e.y)}sub(e){return this.x-=e.x,this.y-=e.y,this}copy(e){return this.x=e.x,this.y=e.y,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}add(e){return this.x+=e.x,this.y+=e.y,this}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}clone(){return new G(this.x,this.y)}}const De=[new T,new T,new T,new T,new T,new T,new T,new T];class ct{constructor(e,t){this.min=e!==void 0?e:new T(1/0,1/0,1/0),this.max=t!==void 0?t:new T(-1/0,-1/0,-1/0)}set(e,t){this.min.copy(e),this.max.copy(t)}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByBox3(e){return this.min.min(e.min),this.max.max(e.max),this}setFromArray(e,t=3,n=0){let i=1/0,s=1/0,r=1/0,o=-1/0,l=-1/0,c=-1/0;for(let u=0,h=e.length;u<h;u+=t){const f=e[u+n],d=e[u+n+1],_=e[u+n+2];f<i&&(i=f),d<s&&(s=d),_<r&&(r=_),f>o&&(o=f),d>l&&(l=d),_>c&&(c=_)}return this.min.set(i,s,r),this.max.set(o,l,c),this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}getCenter(e=new T){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e=new T){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(De[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),De[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),De[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),De[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),De[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),De[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),De[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),De[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(De),this)}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(It),nn.subVectors(this.max,It),dt.subVectors(e.a,It),_t.subVectors(e.b,It),pt.subVectors(e.c,It),He.subVectors(_t,dt),Xe.subVectors(pt,_t),Je.subVectors(dt,pt);let t=[0,-He.z,He.y,0,-Xe.z,Xe.y,0,-Je.z,Je.y,He.z,0,-He.x,Xe.z,0,-Xe.x,Je.z,0,-Je.x,-He.y,He.x,0,-Xe.y,Xe.x,0,-Je.y,Je.x,0];return!wn(t,dt,_t,pt,nn)||(t=[1,0,0,0,1,0,0,0,1],!wn(t,dt,_t,pt,nn))?!1:(sn.crossVectors(He,Xe),t=[sn.x,sn.y,sn.z],wn(t,dt,_t,pt,nn))}clone(){return new ct().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}}const dt=new T,_t=new T,pt=new T,He=new T,Xe=new T,Je=new T,It=new T,nn=new T,sn=new T,et=new T;function wn(a,e,t,n,i){for(let s=0,r=a.length-3;s<=r;s+=3){et.fromArray(a,s);const o=i.x*Math.abs(et.x)+i.y*Math.abs(et.y)+i.z*Math.abs(et.z),l=e.dot(et),c=t.dot(et),u=n.dot(et);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}class ge{constructor(e,t,n){if(this.r=0,this.g=0,this.b=0,t===void 0&&n===void 0)return this.setHex(e);this.setRGB(e,t,n)}lerpColors(e,t,n){this.r=n*(t.r-e.r)+e.r,this.g=n*(t.g-e.g)+e.g,this.b=n*(t.b-e.b)+e.b}lerp(e,t){this.lerpColors(this,e,t)}clone(){return new ge(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}setHex(e){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,this}getHex(){return Rn(this.r*255,0,255)<<16^Rn(this.g*255,0,255)<<8^Rn(this.b*255,0,255)<<0}setRGB(e,t,n){return this.r=e,this.g=t,this.b=n,this}setHSL(e,t,n){if(e=Sa(e,1),t=Math.max(0,Math.min(1,t)),n=Math.max(0,Math.min(1,n)),t===0)this.r=this.g=this.b=n;else{const i=n<=.5?n*(1+t):n+t-n*t,s=2*n-i;this.r=bn(s,i,e+1/3),this.g=bn(s,i,e),this.b=bn(s,i,e-1/3)}return this}convertSRGBToLinear(){return this.r=Nn(this.r),this.g=Nn(this.g),this.b=Nn(this.b),this}convertLinearToSRGB(){return this.r=Fn(this.r),this.g=Fn(this.g),this.b=Fn(this.b),this}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}}function Sa(a,e){return(a%e+e)%e}function bn(a,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?a+(e-a)*6*t:t<1/2?e:t<2/3?a+(e-a)*6*(2/3-t):a}function Rn(a,e,t){return Math.max(e,Math.min(t,a))}function Nn(a){return a<.04045?a*.0773993808:Math.pow(a*.9478672986+.0521327014,2.4)}function Fn(a){return a<.0031308?a*12.92:1.055*Math.pow(a,.41666)-.055}const is=new U;class Ct{constructor(e=0,t=0,n=0,i=Ct.DefaultOrder){this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this.onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this.onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this.onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this.onChangeCallback()}clone(){return new Ct(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this.onChangeCallback(),this}set(e=0,t=0,n=0,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this.onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],r=i[4],o=i[8],l=i[1],c=i[5],u=i[9],h=i[2],f=i[6],d=i[10];return t==="XYZ"?(this._y=Math.asin(mt(o,-1,1)),Math.abs(o)<.99999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-r,s)):(this._x=Math.atan2(f,c),this._z=0)):t==="YXZ"?(this._x=Math.asin(-mt(u,-1,1)),Math.abs(u)<.99999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0)):t==="ZXY"?(this._x=Math.asin(mt(f,-1,1)),Math.abs(f)<.99999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-r,c)):(this._y=0,this._z=Math.atan2(l,s))):t==="ZYX"?(this._y=Math.asin(-mt(h,-1,1)),Math.abs(h)<.99999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-r,c))):t==="YZX"?(this._z=Math.asin(mt(l,-1,1)),Math.abs(l)<.99999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(o,d))):t==="XZY"?(this._z=Math.asin(-mt(r,-1,1)),Math.abs(r)<.99999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,d),this._y=0)):console.warn("given unsupported order: "+t),this._order=t,n===!0&&this.onChangeCallback(),this}setFromQuaternion(e,t,n){return e.toMatrix4(is),this.setFromRotationMatrix(is,t,n)}onChange(e){return this.onChangeCallback=e,this}onChangeCallback(){}}Ct.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];Ct.DefaultOrder="XYZ";function mt(a,e,t){return Math.max(e,Math.min(t,a))}class st{constructor(){this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,n,i,s,r,o,l,c){const u=this.elements;return u[0]=e,u[3]=t,u[6]=n,u[1]=i,u[4]=s,u[7]=r,u[2]=o,u[5]=l,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1)}inverse(){return this.getInverse(this)}getInverse(e){const t=e.elements,n=this.elements,i=t[0],s=t[1],r=t[2],o=t[3],l=t[4],c=t[5],u=t[6],h=t[7],f=t[8],d=f*l-c*h,_=c*u-f*o,p=h*o-l*u,m=i*d+s*_+r*p;if(m===0)return console.warn("Matrix3: .getInverse() can not invert matrix, determinant is 0"),this.identity();const g=1/m;return n[0]=d*g,n[1]=(r*h-f*s)*g,n[2]=(c*s-r*l)*g,n[3]=_*g,n[4]=(f*i-r*u)*g,n[5]=(r*o-c*i)*g,n[6]=p*g,n[7]=(s*u-h*i)*g,n[8]=(l*i-s*o)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new st().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,r=n[0],o=n[3],l=n[6],c=n[1],u=n[4],h=n[7],f=n[2],d=n[5],_=n[8],p=i[0],m=i[3],g=i[6],E=i[1],x=i[4],v=i[7],A=i[2],P=i[5],w=i[8];return s[0]=r*p+o*E+l*A,s[3]=r*m+o*x+l*P,s[6]=r*g+o*v+l*w,s[1]=c*p+u*E+h*A,s[4]=c*m+u*x+h*P,s[7]=c*g+u*v+h*w,s[2]=f*p+d*E+_*A,s[5]=f*m+d*x+_*P,s[8]=f*g+d*v+_*w,this}transform(e,t,n,i,s,r,o){const l=this.elements,c=Math.cos(s),u=Math.sin(s);return l[0]=c*n,l[3]=-u*i,l[6]=e,l[1]=u*n,l[4]=c*i,l[7]=t,l[2]=0,l[5]=0,l[8]=1,(r||o)&&(l[6]-=r*l[0]+o*l[3],l[7]-=r*l[1]+o*l[4]),this}setUvTransform(e,t,n,i,s,r,o){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*r+c*o)+r+e,-i*c,i*l,-i*(-c*r+l*o)+o+t,0,0,1)}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10])}}const ss=new T,ya=new T,Ma=new st;class Ue{constructor(e=new T(1,0,0),t=0){this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=ss.subVectors(n,t).cross(ya.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}normalize(){const e=1/this.normal.getLength();return this.normal.multiplyScalar(e),this.constant*=e,this}distanceToPoint(e){return this.normal.dot(e)+this.constant}coplanarPoint(e=new T){return e.copy(this.normal).multiplyScalar(-this.constant)}clone(){return new Ue().copy(this)}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}applyMatrix4(e,t){const n=t||Ma.setFromMatrix4(e).inverse().transpose(),i=this.coplanarPoint(ss).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}}const rn=new T;class Pa{constructor(e=new Ue,t=new Ue,n=new Ue,i=new Ue,s=new Ue,r=new Ue){this.planes=[e,t,n,i,s,r]}set(e,t,n,i,s,r){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(r),this}setFromMatrix(e){const t=this.planes,n=e.elements,i=n[0],s=n[1],r=n[2],o=n[3],l=n[4],c=n[5],u=n[6],h=n[7],f=n[8],d=n[9],_=n[10],p=n[11],m=n[12],g=n[13],E=n[14],x=n[15];return t[0].setComponents(o-i,h-l,p-f,x-m).normalize(),t[1].setComponents(o+i,h+l,p+f,x+m).normalize(),t[2].setComponents(o+s,h+c,p+d,x+g).normalize(),t[3].setComponents(o-s,h-c,p-d,x-g).normalize(),t[4].setComponents(o-r,h-u,p-_,x-E).normalize(),t[5].setComponents(o+r,h+u,p+_,x+E).normalize(),this}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(rn.x=i.normal.x>0?e.max.x:e.min.x,rn.y=i.normal.y>0?e.max.y:e.min.y,rn.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(rn)<0)return!1}return!0}clone(){return new this.constructor().copy(this)}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}}const Ve=new T,an=new T,Dn=new T,on=new T,In=new T;class Ca{constructor(e=new T,t=new T(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}at(e,t=new T){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}distanceSqToPoint(e){const t=Ve.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ve.copy(this.direction).multiplyScalar(t).add(this.origin),Ve.distanceToSquared(e))}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t=new T){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectsBox(e){return this.intersectBox(e,Ve)!==null}intersectBox(e,t){let n,i,s,r,o,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,i=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,i=(e.min.x-f.x)*c),u>=0?(s=(e.min.y-f.y)*u,r=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,r=(e.min.y-f.y)*u),n>r||s>i||((s>n||n!==n)&&(n=s),(r<i||i!==i)&&(i=r),h>=0?(o=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(o=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}intersectSphere(e,t){Ve.subVectors(e.center,this.origin);const n=Ve.dot(this.direction),i=Ve.dot(Ve)-n*n,s=e.radius*e.radius;if(i>s)return null;const r=Math.sqrt(s-i),o=n-r,l=n+r;return o<0&&l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectTriangle(e,t,n,i,s){Dn.subVectors(t,e),on.subVectors(n,e),In.crossVectors(Dn,on);let r=this.direction.dot(In),o;if(r>0){if(i)return null;o=1}else if(r<0)o=-1,r=-r;else return null;an.subVectors(this.origin,e);const l=o*this.direction.dot(on.crossVectors(an,on));if(l<0)return null;const c=o*this.direction.dot(Dn.cross(an));if(c<0||l+c>r)return null;const u=-o*an.dot(In);return u<0?null:this.at(u/r,s)}}const La=new ct,Ut=new T;class bt{constructor(e=new T,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromArray(e,t=3,n=0){const i=this.center;La.setFromArray(e,t).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r+=t)Ut.fromArray(e,r+n),s=Math.max(s,i.distanceToSquared(Ut));return this.radius=Math.sqrt(s),this}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ut.subVectors(e,this.center);const t=Ut.getLengthSquared();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Ut,i/n),this.radius+=i}return this}clone(){return new bt().copy(this)}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}}class gn{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}clone(){return new gn().copy(this)}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.radius=e.getLength(),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e.x,e.z),this.phi=Math.acos(Math.min(1,Math.max(-1,e.y/this.radius)))),this}}class wa{constructor(){this.coefficients=[];for(let e=0;e<9;e++)this.coefficients.push(new T)}set(e){for(let t=0;t<9;t++)this.coefficients[t].copy(e[t]);return this}zero(){for(let e=0;e<9;e++)this.coefficients[e].set(0,0,0);return this}getAt(e,t){const n=e.x,i=e.y,s=e.z,r=this.coefficients;return t.copy(r[0]).multiplyScalar(.282095),t.addScaledVector(r[1],.488603*i),t.addScaledVector(r[2],.488603*s),t.addScaledVector(r[3],.488603*n),t.addScaledVector(r[4],1.092548*(n*i)),t.addScaledVector(r[5],1.092548*(i*s)),t.addScaledVector(r[6],.315392*(3*s*s-1)),t.addScaledVector(r[7],1.092548*(n*s)),t.addScaledVector(r[8],.546274*(n*n-i*i)),t}getIrradianceAt(e,t){const n=e.x,i=e.y,s=e.z,r=this.coefficients;return t.copy(r[0]).multiplyScalar(.886227),t.addScaledVector(r[1],2*.511664*i),t.addScaledVector(r[2],2*.511664*s),t.addScaledVector(r[3],2*.511664*n),t.addScaledVector(r[4],2*.429043*n*i),t.addScaledVector(r[5],2*.429043*i*s),t.addScaledVector(r[6],.743125*s*s-.247708),t.addScaledVector(r[7],2*.429043*n*s),t.addScaledVector(r[8],.429043*(n*n-i*i)),t}add(e){for(let t=0;t<9;t++)this.coefficients[t].add(e.coefficients[t]);return this}addScaledSH(e,t){for(let n=0;n<9;n++)this.coefficients[n].addScaledVector(e.coefficients[n],t);return this}scale(e){for(let t=0;t<9;t++)this.coefficients[t].multiplyScalar(e);return this}lerp(e,t){for(let n=0;n<9;n++)this.coefficients[n].lerpVectors(this.coefficients[n],e.coefficients[n],t);return this}equals(e){for(let t=0;t<9;t++)if(!this.coefficients[t].equals(e.coefficients[t]))return!1;return!0}copy(e){return this.set(e.coefficients)}clone(){return new this.constructor().copy(this)}fromArray(e,t=0){const n=this.coefficients;for(let i=0;i<9;i++)n[i].fromArray(e,t+i*3);return this}toArray(e=[],t=0){const n=this.coefficients;for(let i=0;i<9;i++)n[i].toArray(e,t+i*3);return e}static getBasisAt(e,t){const n=e.x,i=e.y,s=e.z;t[0]=.282095,t[1]=.488603*i,t[2]=.488603*s,t[3]=.488603*n,t[4]=1.092548*n*i,t[5]=1.092548*i*s,t[6]=.315392*(3*s*s-1),t[7]=1.092548*n*s,t[8]=.546274*(n*n-i*i)}}const tt=new T,Ot=new T,Un=new T,Bt=new T;class yr{constructor(e=new T,t=new T,n=new T){this.a=e,this.b=t,this.c=n}static normal(e,t,n,i){const s=i||new T;s.subVectors(n,t),tt.subVectors(e,t),s.cross(tt);const r=s.getLengthSquared();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static barycoordFromPoint(e,t,n,i,s){tt.subVectors(i,t),Ot.subVectors(n,t),Un.subVectors(e,t);const r=tt.dot(tt),o=tt.dot(Ot),l=tt.dot(Un),c=Ot.dot(Ot),u=Ot.dot(Un),h=r*c-o*o,f=s||new T;if(h===0)return f.set(-2,-1,-1);const d=1/h,_=(c*l-o*u)*d,p=(r*u-o*l)*d;return f.set(1-_-p,p,_)}static containsPoint(e,t,n,i){return this.barycoordFromPoint(e,t,n,i,Bt),Bt.x>=0&&Bt.y>=0&&Bt.x+Bt.y<=1}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}}class xe{constructor(e=0,t=0,n=0,i=1){this.x=e,this.y=t,this.z=n,this.w=i}lerpVectors(e,t,n){return this.subVectors(t,e).multiplyScalar(n).add(e)}set(e=0,t=0,n=0,i=1){return this.x=e,this.y=t,this.z=n,this.w=i,this}normalize(){return this.multiplyScalar(1/(this.getLength()||1))}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}getLengthSquared(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}getLength(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}getManhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i+r[12]*s,this.y=r[1]*t+r[5]*n+r[9]*i+r[13]*s,this.z=r[2]*t+r[6]*n+r[10]*i+r[14]*s,this.w=r[3]*t+r[7]*n+r[11]*i+r[15]*s,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}clone(){return new xe(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}}const ne=[];for(let a=0;a<256;a++)ne[a]=(a<16?"0":"")+a.toString(16);function Ii(){const a=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ne[a&255]+ne[a>>8&255]+ne[a>>16&255]+ne[a>>24&255]+"-"+ne[e&255]+ne[e>>8&255]+"-"+ne[e>>16&15|64]+ne[e>>24&255]+"-"+ne[t&63|128]+ne[t>>8&255]+"-"+ne[t>>16&255]+ne[t>>24&255]+ne[n&255]+ne[n>>8&255]+ne[n>>16&255]+ne[n>>24&255]).toUpperCase()}function xn(a){return(a&a-1)===0&&a!==0}function rs(a){return Math.pow(2,Math.round(Math.log(a)/Math.LN2))}function Mr(a){return a--,a|=a>>1,a|=a>>2,a|=a>>4,a|=a>>8,a|=a>>16,a++,a}function Pr(a){const e={};for(const t in a){const n=a[t];Array.isArray(n)||ArrayBuffer.isView(n)?e[t]=n.slice():e[t]=n}return e}function Cr(a){const e=Array.isArray(a)?[]:{};if(a&&typeof a=="object")for(const t in a)a.hasOwnProperty(t)&&(e[t]=a[t]&&typeof a[t]=="object"?Cr(a[t]):a[t]);return e}let ba=0;const as=new U;class Ee{constructor(){this.id=ba++,this.uuid=Ii(),this.name="",this.position=new T,this.scale=new T(1,1,1),this.euler=new Ct,this.quaternion=new je;const e=this.euler,t=this.quaternion;e.onChange(function(){t.setFromEuler(e,!1)}),t.onChange(function(){e.setFromQuaternion(t,void 0,!1)}),this.matrix=new U,this.worldMatrix=new U,this.children=new Array,this.parent=null,this.castShadow=!1,this.receiveShadow=!1,this.shadowType=pe.PCF3_SOFT,this.frustumCulled=!0,this.visible=!0,this.renderOrder=0,this.renderLayer=0,this.renderable=!0,this.userData={},this.matrixAutoUpdate=!0,this.matrixNeedsUpdate=!0,this.worldMatrixNeedsUpdate=!0}onBeforeRender(){}onAfterRender(){}add(e){if(e===this){console.error("Object3D.add: object can't be added as a child of itself.",e);return}e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.worldMatrixNeedsUpdate=!0}remove(e){const t=this.children.indexOf(e);t!==-1&&(e.parent=null,this.children.splice(t,1),e.worldMatrixNeedsUpdate=!0)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}updateMatrix(e){if((this.matrixAutoUpdate||this.matrixNeedsUpdate)&&(this.matrix.transform(this.position,this.scale,this.quaternion),this.matrixNeedsUpdate=!1,this.worldMatrixNeedsUpdate=!0),this.worldMatrixNeedsUpdate||e){if(this.worldMatrix.copy(this.matrix),this.parent){const n=this.parent.worldMatrix;this.worldMatrix.premultiply(n)}this.worldMatrixNeedsUpdate=!1,e=!0}const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrix(e)}getWorldDirection(e=new T){const t=this.worldMatrix.elements;return e.set(t[8],t[9],t[10]).normalize()}lookAt(e,t){as.lookAtRH(e,this.position,t),this.quaternion.setFromRotationMatrix(as)}raycast(e,t){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.position.copy(e.position),this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.worldMatrix.copy(e.worldMatrix),this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.shadowType=e.shadowType,this.frustumCulled=e.frustumCulled,this.visible=e.visible,this.renderOrder=e.renderOrder,this.renderLayer=e.renderLayer,this.renderable=e.renderable,this.userData=Cr(e.userData),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}class Ze extends Ee{constructor(e=16777215,t=1){super(),this.color=new ge(e),this.intensity=t}lookAt(e,t){os.lookAtRH(this.position,e,t),this.quaternion.setFromRotationMatrix(os)}copy(e){return super.copy(e),this.color.copy(e.color),this.intensity=e.intensity,this}}Ze.prototype.isLight=!0;const os=new U;class Wt extends Ze{constructor(e,t,n=10,i=10){super(e,t),this.width=n,this.height=i}get power(){return this.intensity*this.width*this.height*Math.PI}set power(e){this.intensity=e/(this.width*this.height*Math.PI)}copy(e){return super.copy(e),this.width=e.width,this.height=e.height,this}}Wt.prototype.isRectAreaLight=!0;Wt.LTC1=null;Wt.LTC2=null;const We=new T,gt=new U,On=[],Bn=[],zn=[];let Ra=0;class Na{constructor(){this.id=Ra++,this.version=0,this.lights=[],this.ambient=new Float32Array([0,0,0]),this.sh=new Float32Array(27),this.hemisphere=[],this.directional=[],this.directionalShadow=[],this.directionalShadowMap=[],this.directionalShadowDepthMap=[],this.directionalShadowMatrix=new Float32Array(0),this.point=[],this.pointShadow=[],this.pointShadowMap=[],this.pointShadowMatrix=new Float32Array(0),this.spot=[],this.spotShadow=[],this.spotShadowMap=[],this.spotShadowDepthMap=[],this.spotShadowMatrix=new Float32Array(0),this.rectArea=[],this.LTC1=null,this.LTC2=null,this.useAmbient=!1,this.useSphericalHarmonics=!1,this.hemisNum=0,this.directsNum=0,this.pointsNum=0,this.spotsNum=0,this.rectAreaNum=0,this.directShadowNum=0,this.pointShadowNum=0,this.spotShadowNum=0,this.totalNum=0,this.shadowsNum=0,this.hash=new Fa}begin(){this.totalNum=0,this.shadowsNum=0}push(e){this.lights[this.totalNum++]=e,wi(e)&&this.shadowsNum++}end(e){this.lights.length=this.totalNum,this.lights.sort(Da),this._setupCache(e),this.hash.update(this),this.version++}_setupCache(e){for(let s=0;s<3;s++)this.ambient[s]=0;for(let s=0;s<this.sh.length;s++)this.sh[s]=0;this.useAmbient=!1,this.useSphericalHarmonics=!1,this.hemisNum=0,this.directsNum=0,this.pointsNum=0,this.spotsNum=0,this.rectAreaNum=0,this.directShadowNum=0,this.pointShadowNum=0,this.spotShadowNum=0,this.LTC1=null,this.LTC2=null;for(let s=0,r=this.lights.length;s<r;s++){const o=this.lights[s];o.isAmbientLight?this._doAddAmbientLight(o):o.isHemisphereLight?this._doAddHemisphereLight(o,e):o.isDirectionalLight?this._doAddDirectLight(o,e):o.isPointLight?this._doAddPointLight(o,e):o.isSpotLight?this._doAddSpotLight(o,e):o.isSphericalHarmonicsLight?this._doAddSphericalHarmonicsLight(o):o.isRectAreaLight&&this._doAddRectAreaLight(o,e)}const t=this.directShadowNum;if(t>0){this.directionalShadowMap.length=t,this.directionalShadowDepthMap.length=t,On.length=t,this.directionalShadowMatrix.length!==t*16&&(this.directionalShadowMatrix=new Float32Array(t*16));for(let s=0;s<t;s++)On[s].toArray(this.directionalShadowMatrix,s*16)}const n=this.pointShadowNum;if(n>0){this.pointShadowMap.length=n,Bn.length=n,this.pointShadowMatrix.length!==n*16&&(this.pointShadowMatrix=new Float32Array(n*16));for(let s=0;s<n;s++)Bn[s].toArray(this.pointShadowMatrix,s*16)}const i=this.spotShadowNum;if(i>0){this.spotShadowMap.length=i,this.spotShadowDepthMap.length=i,zn.length=i,this.spotShadowMatrix.length!==i*16&&(this.spotShadowMatrix=new Float32Array(i*16));for(let s=0;s<i;s++)zn[s].toArray(this.spotShadowMatrix,s*16)}this.rectAreaNum>0&&(this.LTC1=Wt.LTC1,this.LTC2=Wt.LTC2)}_doAddAmbientLight(e){const t=e.intensity,n=e.color;this.ambient[0]+=n.r*t,this.ambient[1]+=n.g*t,this.ambient[2]+=n.b*t,this.useAmbient=!0}_doAddSphericalHarmonicsLight(e){const t=e.intensity,n=e.sh.coefficients;for(let i=0;i<n.length;i+=1)this.sh[i*3]+=n[i].x*t,this.sh[i*3+1]+=n[i].y*t,this.sh[i*3+2]+=n[i].z*t;this.useSphericalHarmonics=!0}_doAddHemisphereLight(e,t){const n=e.intensity,i=e.color,s=e.groundColor,r=t.useAnchorMatrix,o=zt(e);o.skyColor[0]=i.r*n,o.skyColor[1]=i.g*n,o.skyColor[2]=i.b*n,o.groundColor[0]=s.r*n,o.groundColor[1]=s.g*n,o.groundColor[2]=s.b*n;const l=e.worldMatrix.elements,c=We.set(l[4],l[5],l[6]).normalize();r&&c.transformDirection(t.anchorMatrixInverse),c.toArray(o.direction),this.hemisphere[this.hemisNum++]=o}_doAddDirectLight(e,t){const n=e.intensity,i=e.color,s=t.useAnchorMatrix,r=zt(e);r.color[0]=i.r*n,r.color[1]=i.g*n,r.color[2]=i.b*n;const o=e.getWorldDirection(We);if(s&&o.transformDirection(t.anchorMatrixInverse),o.multiplyScalar(-1).toArray(r.direction),e.castShadow){const l=e.shadow,c=Hn(e);c.shadowBias[0]=l.bias,c.shadowBias[1]=l.normalBias,c.shadowMapSize[0]=l.mapSize.x,c.shadowMapSize[1]=l.mapSize.y,c.shadowParams[0]=l.radius,c.shadowParams[1]=l.frustumEdgeFalloff,this.directionalShadow[this.directShadowNum++]=c,l.update(e),l.updateMatrix(),s&&l.matrix.multiply(t.anchorMatrix),this.directionalShadowMap[this.directsNum]=l.map,this.directionalShadowDepthMap[this.directsNum]=l.depthMap,On[this.directsNum]=l.matrix}this.directional[this.directsNum++]=r}_doAddPointLight(e,t){const n=e.intensity,i=e.color,s=e.distance,r=e.decay,o=t.useAnchorMatrix,l=zt(e);l.color[0]=i.r*n,l.color[1]=i.g*n,l.color[2]=i.b*n,l.distance=s,l.decay=r;const c=We.setFromMatrixPosition(e.worldMatrix);if(o&&c.applyMatrix4(t.anchorMatrixInverse),l.position[0]=c.x,l.position[1]=c.y,l.position[2]=c.z,e.castShadow){const u=e.shadow,h=Hn(e);h.shadowBias[0]=u.bias,h.shadowBias[1]=u.normalBias,h.shadowMapSize[0]=u.mapSize.x,h.shadowMapSize[1]=u.mapSize.y,h.shadowParams[0]=u.radius,h.shadowParams[1]=0,h.shadowCameraRange[0]=u.cameraNear,h.shadowCameraRange[1]=u.cameraFar,this.pointShadow[this.pointShadowNum++]=h,u.update(e,0),u.matrix.makeTranslation(-c.x,-c.y,-c.z),this.pointShadowMap[this.pointsNum]=u.map,Bn[this.pointsNum]=u.matrix}this.point[this.pointsNum++]=l}_doAddSpotLight(e,t){const n=e.intensity,i=e.color,s=e.distance,r=e.decay,o=t.useAnchorMatrix,l=zt(e);l.color[0]=i.r*n,l.color[1]=i.g*n,l.color[2]=i.b*n,l.distance=s,l.decay=r;const c=We.setFromMatrixPosition(e.worldMatrix);o&&c.applyMatrix4(t.anchorMatrixInverse),l.position[0]=c.x,l.position[1]=c.y,l.position[2]=c.z;const u=e.getWorldDirection(We);o&&u.transformDirection(t.anchorMatrixInverse),u.multiplyScalar(-1).toArray(l.direction);const h=Math.cos(e.angle),f=Math.cos(e.angle*(1-e.penumbra));if(l.coneCos=h,l.penumbraCos=f,e.castShadow){const d=e.shadow,_=Hn(e);_.shadowBias[0]=d.bias,_.shadowBias[1]=d.normalBias,_.shadowMapSize[0]=d.mapSize.x,_.shadowMapSize[1]=d.mapSize.y,_.shadowParams[0]=d.radius,_.shadowParams[1]=d.frustumEdgeFalloff,this.spotShadow[this.spotShadowNum++]=_,d.update(e),d.updateMatrix(),o&&d.matrix.multiply(t.anchorMatrix),this.spotShadowMap[this.spotsNum]=d.map,this.spotShadowDepthMap[this.spotsNum]=d.depthMap,zn[this.spotsNum]=d.matrix}this.spot[this.spotsNum++]=l}_doAddRectAreaLight(e,t){const n=e.intensity,i=e.color,s=e.height,r=e.width,o=t.useAnchorMatrix,l=zt(e);l.color[0]=i.r*n,l.color[1]=i.g*n,l.color[2]=i.b*n;const c=We.setFromMatrixPosition(e.worldMatrix);o&&c.applyMatrix4(t.anchorMatrixInverse),l.position[0]=c.x,l.position[1]=c.y,l.position[2]=c.z,gt.copy(e.worldMatrix),o&&gt.premultiply(t.anchorMatrixInverse),gt.extractRotation(gt);const u=We.set(r*.5,0,0);u.applyMatrix4(gt),l.halfWidth[0]=u.x,l.halfWidth[1]=u.y,l.halfWidth[2]=u.z;const h=We.set(0,s*.5,0);h.applyMatrix4(gt),l.halfHeight[0]=h.x,l.halfHeight[1]=h.y,l.halfHeight[2]=h.z,this.rectArea[this.rectAreaNum++]=l}}const Gn=new WeakMap;function zt(a){if(Gn.has(a))return Gn.get(a);let e;return a.isHemisphereLight?e={direction:new Float32Array(3),skyColor:new Float32Array([0,0,0]),groundColor:new Float32Array([0,0,0])}:a.isDirectionalLight?e={direction:new Float32Array(3),color:new Float32Array([0,0,0])}:a.isPointLight?e={position:new Float32Array(3),color:new Float32Array([0,0,0]),distance:0,decay:0}:a.isSpotLight?e={position:new Float32Array(3),direction:new Float32Array(3),color:new Float32Array([0,0,0]),distance:0,coneCos:0,penumbraCos:0,decay:0}:a.isRectAreaLight&&(e={position:new Float32Array(3),color:new Float32Array([0,0,0]),halfWidth:new Float32Array(3),halfHeight:new Float32Array(3)}),Gn.set(a,e),e}const kn=new WeakMap;function Hn(a){if(kn.has(a))return kn.get(a);let e;return a.isDirectionalLight?e={shadowBias:new Float32Array(2),shadowMapSize:new Float32Array(2),shadowParams:new Float32Array(2)}:a.isPointLight?e={shadowBias:new Float32Array(2),shadowMapSize:new Float32Array(2),shadowParams:new Float32Array(2),shadowCameraRange:new Float32Array(2)}:a.isSpotLight&&(e={shadowBias:new Float32Array(2),shadowMapSize:new Float32Array(2),shadowParams:new Float32Array(2)}),kn.set(a,e),e}class Fa{constructor(){this._factor=new Uint16Array(10)}update(e){this._factor[0]=e.useAmbient?1:0,this._factor[1]=e.useSphericalHarmonics?1:0,this._factor[2]=e.hemisNum,this._factor[3]=e.directsNum,this._factor[4]=e.pointsNum,this._factor[5]=e.spotsNum,this._factor[6]=e.rectAreaNum,this._factor[7]=e.directShadowNum,this._factor[8]=e.pointShadowNum,this._factor[9]=e.spotShadowNum}compare(e){if(!e)return!1;for(let t=0,n=e.length;t<n;t++)if(this._factor[t]!==e[t])return!1;return!0}copyTo(e){return e||(e=new this._factor.constructor(this._factor.length)),e.set(this._factor),e}}function Da(a,e){const t=wi(a)?1:0;return(wi(e)?1:0)-t}function wi(a){return a.shadow&&a.castShadow}class Ia{constructor(e){this.id=e,this.opaque=[],this.opaqueCount=0,this.transparent=[],this.transparentCount=0,this._cache=[],this._cacheIndex=0,this._lastCacheIndex=0,this.opaqueSortCompareFn=Ua,this.transparentSortCompareFn=Oa}begin(){this._cacheIndex=0,this.opaqueCount=0,this.transparentCount=0}end(){this.opaque.length=this.opaqueCount,this.transparent.length=this.transparentCount;const e=this._cacheIndex,t=this._lastCacheIndex;if(t>e){const n=this._cache;for(let i=e;i<t;i++){const s=n[i];s.object=null,s.geometry=null,s.material=null,s.group=null}}this._lastCacheIndex=e}addRenderable(e,t,n,i,s){const r=this._cache;let o=r[this._cacheIndex];o===void 0?(o={object:e,geometry:t,material:n,z:i,renderOrder:e.renderOrder,group:s},r[this._cacheIndex]=o):(o.object=e,o.geometry=t,o.material=n,o.z=i,o.renderOrder=e.renderOrder,o.group=s),n.transparent?(this.transparent[this.transparentCount]=o,this.transparentCount++):(this.opaque[this.opaqueCount]=o,this.opaqueCount++),this._cacheIndex++}sort(){this.opaque.sort(this.opaqueSortCompareFn),bi(this.transparent,0,this.transparent.length,this.transparentSortCompareFn)}}function Ua(a,e){return a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.material.id!==e.material.id?a.material.id-e.material.id:a.id-e.id}function Oa(a,e){return a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.z!==e.z?e.z-a.z:a.material.id!==e.material.id?a.material.id-e.material.id:a.id-e.id}function bi(a,e,t,n){for(;;){if(t-e<=10){Ba(a,e,t,n);return}const i=e+t>>1;let s=a[e],r=a[t-1],o=a[i];if(n(s,r)>0){const d=s;s=r,r=d}if(n(s,o)>=0){const d=s;s=o,o=r,r=d}else if(n(r,o)>0){const _=r;r=o,o=_}a[e]=s,a[t-1]=o;const u=r;let h=e+1,f=t-1;a[i]=a[h],a[h]=u;e:for(let d=h+1;d<f;d++){let _=a[d],p=n(_,u);if(p<0)a[d]=a[h],a[h]=_,h++;else if(p>0){do{if(f--,f==d)break e;const m=a[f];p=n(m,u)}while(p>0);a[d]=a[f],a[f]=_,p<0&&(_=a[d],a[d]=a[h],a[h]=_,h++)}}t-f<h-e?(bi(a,f,t,n),t=h):(bi(a,e,h,n),e=f)}}function Ba(a,e,t,n){for(let i=e+1;i<t;i++){let s;const r=a[i];for(s=i-1;s>=e;s--){const o=a[s];if(n(o,r)>0)a[s+1]=o;else break}a[s+1]=r}}class za{constructor(){this.layerMap=new Map,this.layerList=[],this.lightsArray=[],this.skeletons=new Set,this._lastLayer=this.createLayer(0)}begin(){for(let e=0,t=this.layerList.length;e<t;e++)this.layerList[e].begin();this.lightsArray.length=0,this.skeletons.clear()}end(){for(let e=0,t=this.layerList.length;e<t;e++)this.layerList[e].end(),this.layerList[e].sort()}push(e,t){e.skeleton&&this.skeletons.add(e.skeleton),Xn.setFromMatrixPosition(e.worldMatrix),Xn.applyMatrix4(t.projectionViewMatrix);const n=Xn.z,i=e.renderLayer||0;let s=this._lastLayer;if(s.id!==i&&(s=this.layerMap.get(i),s||(s=this.createLayer(i)),this._lastLayer=s),Array.isArray(e.material)){const r=e.geometry.groups;for(let o=0;o<r.length;o++){const l=r[o],c=e.material[l.materialIndex];c&&s.addRenderable(e,e.geometry,c,n,l)}}else s.addRenderable(e,e.geometry,e.material,n)}pushLight(e){this.lightsArray.push(e)}setLayer(e,t){this.layerMap.set(e,t),this.layerList.push(t),this.layerList.sort(Ga)}createLayer(e){const t=new Ia(e);return this.setLayer(e,t),t}getLayer(e){return this.layerMap.get(e)}removeLayer(e){const t=this.layerMap.get(e);if(t){this.layerMap.delete(e);const n=this.layerList.indexOf(t);n!==-1&&this.layerList.splice(n,1),this._lastLayer===e&&(this._lastLayer=null)}}}const Xn=new T;function Ga(a,e){return a.id-e.id}const xt=new Ue;let ka=0;class Ha{constructor(){this.id=ka++,this.version=0,this.useAnchorMatrix=!1,this.anchorMatrix=new U,this.anchorMatrixInverse=new U,this.disableShadowSampler=!1,this.logarithmicDepthBuffer=!1,this.fog=null,this.environment=null,this.environmentLightIntensity=1,this.clippingPlanesData=new Float32Array([]),this.numClippingPlanes=0}update(e){this.useAnchorMatrix=!e.anchorMatrix.isIdentity(),this.anchorMatrix.copy(e.anchorMatrix),this.anchorMatrixInverse.getInverse(e.anchorMatrix),this.disableShadowSampler=e.disableShadowSampler,this.logarithmicDepthBuffer=e.logarithmicDepthBuffer,this.fog=e.fog,this.environment=e.environment,this.environmentLightIntensity=e.environmentLightIntensity,this.clippingPlanesData.length<e.clippingPlanes.length*4&&(this.clippingPlanesData=new Float32Array(e.clippingPlanes.length*4)),this.setClippingPlanesData(e.clippingPlanes,this.clippingPlanesData),this.numClippingPlanes=e.clippingPlanes.length,this.version++}setClippingPlanesData(e,t){for(let n=0;n<e.length;n++)xt.copy(e[n]),this.useAnchorMatrix&&xt.applyMatrix4(this.anchorMatrixInverse),t[n*4+0]=xt.normal.x,t[n*4+1]=xt.normal.y,t[n*4+2]=xt.normal.z,t[n*4+3]=xt.constant;return t}}function Xa(a){return a.elements[11]===-1}let Va=0;class Wa{constructor(e,t){this.scene=e,this.lights=t,this.camera={id:Va++,version:0,near:0,far:0,position:new T,logDepthCameraNear:0,logDepthBufFC:0,viewMatrix:new U,projectionMatrix:new U,projectionViewMatrix:new U,rect:new xe(0,0,1,1)},this.gammaFactor=2,this.outputEncoding=ve.LINEAR}updateCamera(e){const t=this.scene,n=this.camera,i=e.projectionMatrix;let s=0,r=0;Xa(i)?(s=i.elements[14]/(i.elements[10]-1),r=i.elements[14]/(i.elements[10]+1)):(s=(i.elements[14]+1)/i.elements[10],r=(i.elements[14]-1)/i.elements[10]),n.near=s,n.far=r,t.logarithmicDepthBuffer?(n.logDepthCameraNear=s,n.logDepthBufFC=2/(Math.log(r-s+1)*Math.LOG2E)):(n.logDepthCameraNear=0,n.logDepthBufFC=0),n.position.setFromMatrixPosition(e.worldMatrix),t.useAnchorMatrix&&n.position.applyMatrix4(t.anchorMatrixInverse),n.viewMatrix.copy(e.viewMatrix),t.useAnchorMatrix&&n.viewMatrix.multiply(t.anchorMatrix),n.projectionMatrix.copy(i),n.projectionViewMatrix.copy(i).multiply(n.viewMatrix),n.rect.copy(e.rect),n.version++,this.gammaFactor=e.gammaFactor,this.outputEncoding=e.outputEncoding}}class Ui extends Ee{constructor(){super(),this.fog=null,this.environment=null,this.environmentLightIntensity=1,this.clippingPlanes=[],this.disableShadowSampler=!1,this.logarithmicDepthBuffer=!1,this.anchorMatrix=new U,this._sceneData=new Ha,this._lightData=new Na,this._renderQueueMap=new WeakMap,this._renderStatesMap=new WeakMap,this._skeletonVersion=0}updateRenderStates(e,t=!0){this._renderStatesMap.has(e)||this._renderStatesMap.set(e,new Wa(this._sceneData,this._lightData));const n=this._renderStatesMap.get(e);return t&&this._sceneData.update(this),n.updateCamera(e),n}getRenderStates(e){return this._renderStatesMap.get(e)}updateRenderQueue(e,t=!0,n=!0){this._renderQueueMap.has(e)||this._renderQueueMap.set(e,new za);const i=this._renderQueueMap.get(e);if(i.begin(),this._pushToRenderQueue(this,e,i),i.end(),t){this._lightData.begin();for(const s of i.lightsArray)this._lightData.push(s);this._lightData.end(this._sceneData)}n&&this._skeletonVersion++;for(const s of i.skeletons)s._version!==this._skeletonVersion&&(s.updateBones(this._sceneData),s._version=this._skeletonVersion);return i}getRenderQueue(e){return this._renderQueueMap.get(e)}_pushToRenderQueue(e,t,n){if(!e.visible)return;e.geometry&&e.material&&e.renderable?e.frustumCulled&&t.frustumCulled?(ls.copy(e.geometry.boundingSphere).applyMatrix4(e.worldMatrix),t.frustum.intersectsSphere(ls)&&n.push(e,t)):n.push(e,t):e.isLight&&n.pushLight(e);const i=e.children;for(let s=0,r=i.length;s<r;s++)this._pushToRenderQueue(i[s],t,n)}}Ui.prototype.isScene=!0;const ls=new bt;class jt extends Ee{constructor(){super(),this.viewMatrix=new U,this.projectionMatrix=new U,this.projectionMatrixInverse=new U,this.projectionViewMatrix=new U,this.frustum=new Pa,this.gammaFactor=2,this.outputEncoding=ve.LINEAR,this.rect=new xe(0,0,1,1),this.frustumCulled=!0}lookAt(e,t){cs.lookAtRH(this.position,e,t),this.quaternion.setFromRotationMatrix(cs)}setOrtho(e,t,n,i,s,r){this.projectionMatrix.set(2/(t-e),0,0,-(t+e)/(t-e),0,2/(i-n),0,-(i+n)/(i-n),0,0,-2/(r-s),-(r+s)/(r-s),0,0,0,1),this.projectionMatrixInverse.getInverse(this.projectionMatrix)}setPerspective(e,t,n,i){this.projectionMatrix.set(1/(t*Math.tan(e/2)),0,0,0,0,1/Math.tan(e/2),0,0,0,0,-(i+n)/(i-n),-2*i*n/(i-n),0,0,-1,0),this.projectionMatrixInverse.getInverse(this.projectionMatrix)}getWorldDirection(e=new T){return super.getWorldDirection(e).negate()}updateMatrix(e){Ee.prototype.updateMatrix.call(this,e),this.viewMatrix.getInverse(this.worldMatrix),this.projectionViewMatrix.multiplyMatrices(this.projectionMatrix,this.viewMatrix),this.frustum.setFromMatrix(this.projectionViewMatrix)}copy(e,t){return Ee.prototype.copy.call(this,e,t),this.viewMatrix.copy(e.viewMatrix),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.frustum.copy(e.frustum),this.gammaFactor=e.gammaFactor,this.outputEncoding=e.outputEncoding,this.rect.copy(e.rect),this.frustumCulled=e.frustumCulled,this}}jt.prototype.isCamera=!0;const cs=new U,Vn=new bt,us=new U,ln=new Ca,cn=new T,Tt=new T,At=new T,vt=new T,hs=new T,fs=new T,ds=new T,Wn=new T,Qn=new T,Yn=new T,_s=new T,ps=new xe,ms=new xe,Qa=new T,gs=new U,xs=new G,Ts=new G,As=new G,vs=new T,un=new T;class qe extends Ee{constructor(e,t){super(),this.geometry=e,this.material=t,this.morphTargetInfluences=null}raycast(e,t){const n=this.geometry,i=this.worldMatrix;if(Vn.copy(n.boundingSphere),Vn.applyMatrix4(i),!e.intersectsSphere(Vn)||(us.getInverse(i),ln.copy(e).applyMatrix4(us),!ln.intersectsBox(n.boundingBox)))return;const s=n.getAttribute("a_Position");if(!s)return;const r=n.getAttribute("a_Uv"),o=n.morphAttributes.position;let l;if(n.index){const c=n.index.buffer.array;for(let u=0;u<c.length;u+=3){const h=c[u],f=c[u+1],d=c[u+2];l=Es(this,e,ln,s,o,r,h,f,d),l&&(l.faceIndex=Math.floor(u/3),t.push(l))}}else for(let c=0;c<s.buffer.count;c+=3){const u=c,h=c+1,f=c+2;l=Es(this,e,ln,s,o,r,u,h,f),l&&(l.faceIndex=Math.floor(c/3),t.push(l))}}copy(e){return super.copy(e),e.morphTargetInfluences&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),this}clone(){return new this.constructor(this.geometry,this.material).copy(this)}}qe.prototype.isMesh=!0;function Es(a,e,t,n,i,s,r,o,l){let c,u,h;c=n.buffer.array,u=n.buffer.stride,h=n.offset,Tt.fromArray(c,r*u+h),At.fromArray(c,o*u+h),vt.fromArray(c,l*u+h);const f=a.morphTargetInfluences;if(i&&f){Wn.set(0,0,0),Qn.set(0,0,0),Yn.set(0,0,0);for(let _=0;_<i.length;_++){const p=f[_],m=i[_];p!==0&&(c=m.buffer.array,u=m.buffer.stride,h=m.offset,hs.fromArray(c,r*u+h),fs.fromArray(c,o*u+h),ds.fromArray(c,l*u+h),Wn.addScaledVector(hs,p),Qn.addScaledVector(fs,p),Yn.addScaledVector(ds,p))}Tt.add(Wn),At.add(Qn),vt.add(Yn)}a.isSkinnedMesh&&(jn(a,r,Tt),jn(a,o,At),jn(a,l,vt));const d=ja(a,e,t,Tt,At,vt,vs);if(d){s&&(c=s.buffer.array,u=s.buffer.stride,h=s.offset,xs.fromArray(c,r*u+h),Ts.fromArray(c,o*u+h),As.fromArray(c,l*u+h),d.uv=Ya(vs,Tt,At,vt,xs,Ts,As));const _={a:r,b:o,c:l,normal:new T};yr.normal(Tt,At,vt,_.normal),d.face=_}return d}function Ya(a,e,t,n,i,s,r){return yr.barycoordFromPoint(a,e,t,n,cn),i.multiplyScalar(cn.x),s.multiplyScalar(cn.y),r.multiplyScalar(cn.z),i.add(s).add(r),i.clone()}function ja(a,e,t,n,i,s,r){let o;const l=a.material;return l.side===se.BACK?o=t.intersectTriangle(s,i,n,!0,r):o=t.intersectTriangle(n,i,s,l.side!==se.DOUBLE,r),o===null?null:(un.copy(r),un.applyMatrix4(a.worldMatrix),{distance:e.origin.distanceTo(un),point:un.clone(),object:a})}function jn(a,e,t){const n=a.skeleton,i=a.geometry.attributes.skinIndex,s=a.geometry.attributes.skinWeight;ps.fromArray(i.buffer.array,e*i.size),ms.fromArray(s.buffer.array,e*s.size),_s.copy(t).applyMatrix4(a.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const o=Ss(ms,r);if(o<Number.EPSILON)continue;const l=Ss(ps,r);n.bones[l]&&(gs.multiplyMatrices(n.bones[l].worldMatrix,n.boneInverses[l]),t.addScaledVector(Qa.copy(_s).applyMatrix4(gs),o))}return t.applyMatrix4(a.bindMatrixInverse)}function Ss(a,e){switch(e){case 0:return a.x;case 1:return a.y;case 2:return a.z;case 3:return a.w;default:throw new Error("index is out of range: "+e)}}class j{constructor(e,t=e.stride,n=0,i=!1){this.buffer=e,this.size=t,this.offset=n,this.normalized=i,this.divisor=0}copy(e){return this.buffer=e.buffer,this.size=e.size,this.offset=e.offset,this.normalized=e.normalized,this.divisor=e.divisor,this}clone(e){let t;return e?(e.has(this.buffer)||e.set(this.buffer,this.buffer.clone()),t=new j(e.get(this.buffer),this.size,this.offset,this.normalized),t.divisor=this.divisor,t):(console.warn("t3d.Attribute.clone(): now requires a WeakMap as an argument to save shared buffers."),t=new j(this.buffer.clone(),this.size,this.offset,this.normalized),t.divisor=this.divisor,t)}}let ie=class Lr{constructor(e,t){this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Ta.STATIC_DRAW,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}copy(e){return this.array=new e.array.constructor(e.array),this.stride=e.stride,this.count=e.array.length/this.stride,this.usage=e.usage,this}clone(){const e=new this.array.constructor(this.array),t=new Lr(e,this.stride);return t.usage=this.usage,t}},qa=0;const ye=new T,hn=new T,ys=new T,Ie=new ct,qn=new ct;class Be extends Yt{constructor(){super(),this.id=qa++,this.uuid=Ii(),this.attributes={},this.morphAttributes={},this.index=null,this.boundingBox=new ct,this.boundingSphere=new bt,this.groups=[],this.instanceCount=-1,this.version=0}addAttribute(e,t){this.attributes[e]=t}getAttribute(e){return this.attributes[e]}removeAttribute(e){delete this.attributes[e]}setIndex(e){if(Array.isArray(e)){const t=new(Za(e)>65535?Uint32Array:Uint16Array)(e);this.index=new j(new ie(t,1))}else this.index=e}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}computeBoundingBox(){const e=this.attributes.a_Position||this.attributes.position;e&&this.boundingBox.setFromArray(e.buffer.array,e.buffer.stride,e.offset);const t=this.morphAttributes.position;if(t)for(let n=0;n<t.length;n++){const i=t[n];Ie.setFromArray(i.buffer.array,i.buffer.stride,i.offset),ye.addVectors(this.boundingBox.min,Ie.min),this.boundingBox.expandByPoint(ye),ye.addVectors(this.boundingBox.max,Ie.max),this.boundingBox.expandByPoint(ye)}}computeBoundingSphere(){const e=this.attributes.a_Position||this.attributes.position,t=this.morphAttributes.position;if(!e)return;const n=e.buffer.stride,i=e.offset;if(t){Ie.setFromArray(e.buffer.array,n,i);for(let o=0;o<t.length;o++){const l=t[o];qn.setFromArray(l.buffer.array,l.buffer.stride,l.offset),ye.addVectors(Ie.min,qn.min),Ie.expandByPoint(ye),ye.addVectors(Ie.max,qn.max),Ie.expandByPoint(ye)}const s=this.boundingSphere.center;Ie.getCenter(s);let r=0;for(let o=0;o<e.buffer.count;o++){hn.fromArray(e.buffer.array,o*n+i),r=s.distanceToSquared(hn);for(let l=0;l<t.length;l++){const c=t[l];ye.fromArray(c.buffer.array,o*c.buffer.stride+c.offset),ys.addVectors(hn,ye);const u=s.distanceToSquared(ys);u>r&&(r=u,hn.add(ye))}}this.boundingSphere.radius=Math.sqrt(r)}else this.boundingSphere.setFromArray(e.buffer.array,n,i)}dispose(){this.dispatchEvent({type:"dispose"})}copy(e){let t,n,i;this.index=null,this.attributes={},this.morphAttributes={},this.groups=[];const s=new WeakMap,r=e.index;r!==null&&this.setIndex(r.clone(s));const o=e.attributes;for(t in o){const u=o[t];this.addAttribute(t,u.clone(s))}const l=e.morphAttributes;for(t in l){const u=[],h=l[t];for(n=0,i=h.length;n<i;n++)u.push(h[n].clone(s));this.morphAttributes[t]=u}const c=e.groups;for(n=0,i=c.length;n<i;n++){const u=c[n];this.addGroup(u.start,u.count,u.materialIndex)}return this.boundingBox.copy(e.boundingBox),this.boundingSphere.copy(e.boundingSphere),this.instanceCount=e.instanceCount,this}clone(){return new Be().copy(this)}}function Za(a){if(a.length===0)return-1/0;let e=a[0];for(let t=1,n=a.length;t<n;++t)a[t]>e&&(e=a[t]);return e}let Ka=0;class ze extends Yt{constructor(){super(),this.id=Ka++,this.uuid=Ii(),this.type=Pe.SHADER,this.shaderName="",this.defines={},this.uniforms={},this.vertexShader="",this.fragmentShader="",this.precision=null,this.transparent=!1,this.blending=Re.NORMAL,this.blendSrc=_e.SRC_ALPHA,this.blendDst=_e.ONE_MINUS_SRC_ALPHA,this.blendEquation=we.ADD,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.premultipliedAlpha=!1,this.vertexColors=it.NONE,this.vertexTangents=!1,this.opacity=1,this.diffuse=new ge(16777215),this.diffuseMap=null,this.diffuseMapCoord=0,this.diffuseMapTransform=new st,this.alphaMap=null,this.alphaMapCoord=0,this.alphaMapTransform=new st,this.emissive=new ge(0),this.emissiveMap=null,this.emissiveMapCoord=0,this.emissiveMapTransform=new st,this.aoMap=null,this.aoMapIntensity=1,this.aoMapCoord=0,this.aoMapTransform=new st,this.normalMap=null,this.normalScale=new G(1,1),this.bumpMap=null,this.bumpScale=1,this.envMap=null,this.envMapIntensity=1,this.envMapCombine=xa.MULTIPLY,this.depthFunc=Pt.LEQUAL,this.depthTest=!0,this.depthWrite=!0,this.colorWrite=!0,this.stencilTest=!1,this.stencilWriteMask=255,this.stencilFunc=Pt.ALWAYS,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Cn.KEEP,this.stencilZFail=Cn.KEEP,this.stencilZPass=Cn.KEEP,this.stencilFuncBack=null,this.stencilRefBack=null,this.stencilFuncMaskBack=null,this.stencilFailBack=null,this.stencilZFailBack=null,this.stencilZPassBack=null,this.clippingPlanes=null,this.alphaTest=0,this.alphaToCoverage=!1,this.side=se.FRONT,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.shading=yt.SMOOTH_SHADING,this.dithering=!1,this.acceptLight=!1,this.fog=!0,this.drawMode=Vt.TRIANGLES,this.forceUpdateUniforms=!0,this.needsUpdate=!0}copy(e){return this.shaderName=e.shaderName,this.defines=Object.assign({},e.defines),this.uniforms=Pr(e.uniforms),this.vertexShader=e.vertexShader,this.fragmentShader=e.fragmentShader,this.precision=e.precision,this.transparent=e.transparent,this.blending=e.blending,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.premultipliedAlpha=e.premultipliedAlpha,this.vertexColors=e.vertexColors,this.vertexTangents=e.vertexTangents,this.opacity=e.opacity,this.diffuse.copy(e.diffuse),this.diffuseMap=e.diffuseMap,this.diffuseMapCoord=e.diffuseMapCoord,this.diffuseMapTransform.copy(e.diffuseMapTransform),this.alphaMap=e.alphaMap,this.alphaMapCoord=e.alphaMapCoord,this.alphaMapTransform.copy(e.alphaMapTransform),this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveMapCoord=e.emissiveMapCoord,this.emissiveMapTransform.copy(e.emissiveMapTransform),this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.aoMapCoord=e.aoMapCoord,this.aoMapTransform.copy(e.aoMapTransform),this.normalMap=e.normalMap,this.normalScale.copy(e.normalScale),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.envMapCombine=e.envMapCombine,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.colorWrite=e.colorWrite,this.stencilTest=e.stencilTest,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilFuncBack=e.stencilFuncBack,this.stencilRefBack=e.stencilRefBack,this.stencilFuncMaskBack=e.stencilFuncMaskBack,this.stencilFailBack=e.stencilFailBack,this.stencilZFailBack=e.stencilZFailBack,this.stencilZPassBack=e.stencilZPassBack,this.clippingPlanes=e.clippingPlanes,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.side=e.side,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.shading=e.shading,this.dithering=e.dithering,this.acceptLight=e.acceptLight,this.fog=e.fog,this.drawMode=e.drawMode,this}clone(){return new this.constructor().copy(this)}dispose(){this.dispatchEvent({type:"dispose"})}}class at extends ze{constructor(e){super(),e&&(this.shaderName=e.name,Object.assign(this.defines,e.defines),this.uniforms=Pr(e.uniforms),this.vertexShader=e.vertexShader,this.fragmentShader=e.fragmentShader)}}class F{constructor(e){const t=new Ui,n=this.camera=new jt;n.frustumCulled=!1,n.position.set(0,0,1),n.lookAt(new T(0,0,0),new T(0,1,0)),n.setOrtho(-1,1,-1,1,.1,2),t.add(n);const i=this.geometry=new Be;i.addAttribute("a_Position",new j(new ie(new Float32Array([-1,3,0,-1,-1,0,3,-1,0]),3))),i.addAttribute("a_Uv",new j(new ie(new Float32Array([0,2,0,0,2,0]),2)));const s=this.material=new at(e);this.uniforms=s.uniforms;const r=new qe(i,s);r.frustumCulled=!1,t.add(r),t.updateMatrix(),this.renderStates=t.updateRenderStates(n);const o=t.updateRenderQueue(n,!1,!1);this.renderQueueLayer=o.layerList[0],this.renderConfig={}}render(e){e.beginRender(),e.renderRenderableList(this.renderQueueLayer.opaque,this.renderStates,this.renderConfig),e.endRender()}dispose(){this.geometry.dispose(),this.material.dispose()}}class $a extends ze{constructor(){super(),this.type=Pe.DEPTH,this.packToRGBA=!1}}class Ja extends ze{constructor(){super(),this.type=Pe.DISTANCE}}class Mf{constructor(){this.getDepthMaterial=eo,this.getDistanceMaterial=to,this.shadowLayers=null,this.transparentShadow=!1;const e={isPointLight:!1,light:null};this._state=e;const t=this;this._renderOptions={getGeometry:null,getMaterial:function(n){return e.isPointLight?t.getDistanceMaterial(n,e.light):t.getDepthMaterial(n,e.light)},ifRender:function(n){return n.object.castShadow}}}set getGeometry(e){e?this._renderOptions.getGeometry=e:delete this._renderOptions.getGeometry}get getGeometry(){return this._renderOptions.getGeometry}set ifRender(e){e?this._renderOptions.ifRender=e:delete this._renderOptions.ifRender}get ifRender(){return this._renderOptions.ifRender}render(e,t){Gt.copy(e.getClearColor()),e.setClearColor(1,1,1,1);const n=t._lightData.lights,i=t._lightData.shadowsNum;for(let s=0;s<i;s++){const r=n[s],o=r.shadow;if(o.autoUpdate===!1&&o.needsUpdate===!1)continue;const l=o.camera,c=o.renderTarget,u=r.isPointLight,h=u?6:1;this._state.isPointLight=u,this._state.light=r;const f=this._renderOptions;o.prepareDepthMap(!t.disableShadowSampler,e.capabilities);for(let d=0;d<h;d++){u&&(o.update(r,d),c.activeCubeFace=d),e.setRenderTarget(c),e.clear(!0,!0);const _=t.updateRenderStates(l,d===0),p=t.updateRenderQueue(l,!1,!1);e.beginRender();for(let m=0;m<p.layerList.length;m++){const g=p.layerList[m];this.shadowLayers!==null&&this.shadowLayers.indexOf(g.id)===-1||(e.renderRenderableList(g.opaque,_,f),this.transparentShadow&&e.renderRenderableList(g.transparent,_,f))}e.endRender()}o.needsUpdate=!1}e.setClearColor(Gt.x,Gt.y,Gt.z,Gt.w)}}const Gt=new xe,wr={front:se.BACK,back:se.FRONT,double:se.DOUBLE},Ms={},Ps={};function eo(a,e){const t=!!a.object.skeleton,n=a.geometry.morphAttributes.position&&a.geometry.morphAttributes.position.length>0,i=a.material.clippingPlanes,s=i&&i.length>0?i.length:0,r=n<<0|t<<1;let o=Ms[r];o===void 0&&(o={},Ms[r]=o);let l=o[s];return l===void 0&&(l=new $a,l.packToRGBA=!0,o[s]=l),l.side=wr[a.material.side],l.clippingPlanes=a.material.clippingPlanes,l.drawMode=a.material.drawMode,l}function to(a,e){const t=!!a.object.skeleton,n=a.geometry.morphAttributes.position&&a.geometry.morphAttributes.position.length>0,i=a.material.clippingPlanes,s=i&&i.length>0?i.length:0,r=n<<0|t<<1;let o=Ps[r];o===void 0&&(o={},Ps[r]=o);let l=o[s];return l===void 0&&(l=new Ja,o[s]=l),l.side=wr[a.material.side],l.uniforms.nearDistance=e.shadow.cameraNear,l.uniforms.farDistance=e.shadow.cameraFar,l.clippingPlanes=a.material.clippingPlanes,l.drawMode=a.material.drawMode,l}class Ke{constructor(e){this._key=e+"$",this._count=0}get(e){const t=this._key;let n=e[t];return n===void 0&&(n={},e[t]=n,this._count++),n}delete(e){const t=this._key;e[t]&&(this._count--,delete e[t])}size(){return this._count}}let Cs=0;class no{constructor(e){this.id=Cs++,this.context=e,this.capabilities={},this.shaderCompileOptions={checkErrors:!0,compileAsynchronously:!1},this._passInfo={enabled:!1,count:0}}beginRender(){this._passInfo.enabled=!0}endRender(){this._passInfo.enabled=!1,this._passInfo.count++}renderRenderableItem(e,t,n){}renderRenderableList(e,t,n={}){for(let i=0,s=e.length;i<s;i++)this.renderRenderableItem(e[i],t,n)}renderScene(e,t,n={}){const i=e.getRenderStates(t),s=e.getRenderQueue(t);this.beginRender();let r;for(let o=0,l=s.layerList.length;o<l;o++)r=s.layerList[o],this.renderRenderableList(r.opaque,i,n),this.renderRenderableList(r.transparent,i,n);this.endRender()}clear(e,t,n){}setClearColor(e,t,n,i,s){}getClearColor(){}setRenderTarget(e){}getRenderTarget(){}blitRenderTarget(e,t,n=!0,i=!0,s=!0){}readRenderTargetPixels(e,t,n,i,s){}updateRenderTargetMipmap(e){}setTextureExternal(e,t){}setRenderBufferExternal(e,t){}setBufferExternal(e,t){}resetVertexArrayBindings(e){}resetState(){}beginQuery(e,t){}endQuery(e){}queryCounter(e){}isTimerQueryDisjoint(e){}isQueryResultAvailable(e){}getQueryResult(e){}increaseId(){return this.id=Cs++,this.id}}class io extends Be{constructor(e=1,t=1,n=1,i=1,s=1,r=1){super();const o=this;i=Math.floor(i),s=Math.floor(s),r=Math.floor(r);const l=[],c=[],u=[],h=[];let f=0,d=0;_("z","y","x",-1,-1,n,t,e,r,s,0),_("z","y","x",1,-1,n,t,-e,r,s,1),_("x","z","y",1,1,e,n,t,i,r,2),_("x","z","y",1,-1,e,n,-t,i,r,3),_("x","y","z",1,-1,e,t,n,i,s,4),_("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(new j(new ie(c.length/3>65536?new Uint32Array(l):new Uint16Array(l),1))),this.addAttribute("a_Position",new j(new ie(new Float32Array(c),3))),this.addAttribute("a_Normal",new j(new ie(new Float32Array(u),3))),this.addAttribute("a_Uv",new j(new ie(new Float32Array(h),2)));function _(p,m,g,E,x,v,A,P,w,L,b){const O=v/w,I=A/L,R=v/2,D=A/2,Q=P/2,H=w+1,K=L+1;let ee=0,$=0;const W=new T;for(let z=0;z<K;z++){const V=z*I-D;for(let re=0;re<H;re++){const Y=re*O-R;W[p]=Y*E,W[m]=V*x,W[g]=Q,c.push(W.x,W.y,W.z),W[p]=0,W[m]=0,W[g]=P>0?1:-1,u.push(W.x,W.y,W.z),h.push(re/w),h.push(1-z/L),ee+=1}}for(let z=0;z<L;z++)for(let V=0;V<w;V++){const re=f+V+H*z,Y=f+V+H*(z+1),Ce=f+(V+1)+H*(z+1),Le=f+(V+1)+H*z;l.push(re,Y,Le),l.push(Y,Ce,Le),$+=6}o.addGroup(d,$,b),d+=$,f+=ee}this.computeBoundingBox(),this.computeBoundingSphere()}}class so extends Be{constructor(e=1,t=8,n=6,i=0,s=Math.PI*2,r=0,o=Math.PI){super(),t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=r+o;let c,u,h=0;const f=[],d=new T,_=new T,p=[],m=[],g=[],E=[];for(u=0;u<=n;u++){const x=[],v=u/n;let A=0;for(u==0&&r==0?A=.5/t:u==n&&l==Math.PI&&(A=-.5/t),c=0;c<=t;c++){const P=c/t;d.x=-e*Math.cos(i+P*s)*Math.sin(r+v*o),d.y=e*Math.cos(r+v*o),d.z=e*Math.sin(i+P*s)*Math.sin(r+v*o),m.push(d.x,d.y,d.z),_.copy(d).normalize(),g.push(_.x,_.y,_.z),E.push(P+A,1-v),x.push(h++)}f.push(x)}for(u=0;u<n;u++)for(c=0;c<t;c++){const x=f[u][c+1],v=f[u][c],A=f[u+1][c],P=f[u+1][c+1];(u!==0||r>0)&&p.push(x,v,P),(u!==n-1||l<Math.PI)&&p.push(v,A,P)}this.setIndex(new j(new ie(m.length/3>65536?new Uint32Array(p):new Uint16Array(p),1))),this.addAttribute("a_Position",new j(new ie(new Float32Array(m),3))),this.addAttribute("a_Normal",new j(new ie(new Float32Array(g),3))),this.addAttribute("a_Uv",new j(new ie(new Float32Array(E),2))),this.computeBoundingBox(),this.computeBoundingSphere()}}class br extends ze{constructor(){super(),this.type=Pe.BASIC}}class Ri extends ze{constructor(){super(),this.type=Pe.LINE,this.lineWidth=1,this.drawMode=Vt.LINES}copy(e){return super.copy(e),this.lineWidth=e.lineWidth,this}}class ro extends ze{constructor(){super(),this.type=Pe.PBR2,this.specular=new ge(1118481),this.glossiness=.5,this.specularMap=null,this.glossinessMap=null,this.acceptLight=!0}copy(e){return super.copy(e),this.specular=e.specular,this.glossiness=e.glossiness,this.specularMap=e.specularMap,this.glossinessMap=e.glossinessMap,this}}class Oi extends ze{constructor(){super(),this.type=Pe.PBR,this.roughness=.5,this.metalness=.5,this.roughnessMap=null,this.metalnessMap=null,this.clearcoat=0,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new G(1,1),this.clearcoatNormalMap=null,this.acceptLight=!0}copy(e){return super.copy(e),this.roughness=e.roughness,this.metalness=e.metalness,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this}}class ao extends ze{constructor(){super(),this.type=Pe.POINT,this.size=1,this.sizeAttenuation=!0,this.drawMode=Vt.POINTS}copy(e){return super.copy(e),this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this}}class qt extends Yt{constructor(e,t){super(),this.width=e,this.height=t}resize(e,t){return this.width!==e||this.height!==t?(this.width=e,this.height=t,!0):!1}dispose(){this.dispatchEvent({type:"dispose"})}}qt.prototype.isRenderTarget=!0;class Ae extends Yt{constructor(e,t,n=M.RGBA8,i=0){super(),this.width=e,this.height=t,this.format=n,this.multipleSampling=i}resize(e,t){return this.width!==e||this.height!==t?(this.dispose(),this.width=e,this.height=t,!0):!1}clone(){return new this.constructor().copy(this)}copy(e){return this.format=e.format,this.multipleSampling=e.multipleSampling,this}dispose(){this.dispatchEvent({type:"dispose"})}}Ae.prototype.isRenderBuffer=!0;let oo=0;class En extends Yt{constructor(){super(),this.id=oo++,this.mipmaps=[],this.border=0,this.format=M.RGBA,this.internalformat=null,this.type=N.UNSIGNED_BYTE,this.magFilter=C.LINEAR,this.minFilter=C.LINEAR_MIPMAP_LINEAR,this.wrapS=q.CLAMP_TO_EDGE,this.wrapT=q.CLAMP_TO_EDGE,this.anisotropy=1,this.compare=void 0,this.generateMipmaps=!0,this.encoding=ve.LINEAR,this.flipY=!0,this.premultiplyAlpha=!1,this.unpackAlignment=4,this.version=0}clone(){return new this.constructor().copy(this)}copy(e){return this.mipmaps=e.mipmaps.slice(0),this.border=e.border,this.format=e.format,this.internalformat=e.internalformat,this.type=e.type,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.anisotropy=e.anisotropy,this.compare=e.compare,this.generateMipmaps=e.generateMipmaps,this.encoding=e.encoding,this.flipY=e.flipY,this.premultiplyAlpha=e.premultiplyAlpha,this.unpackAlignment=e.unpackAlignment,this.version=e.version,this}dispose(){this.dispatchEvent({type:"dispose"}),this.version=0}}En.prototype.isTexture=!0;class oe extends En{constructor(){super(),this.image=null}copy(e){return super.copy(e),this.image=e.image,this}}oe.prototype.isTexture2D=!0;class fe extends qt{constructor(e,t){super(e,t),this._attachments={},this.attach(new oe,y.COLOR_ATTACHMENT0),this.attach(new Ae(e,t,M.DEPTH_STENCIL),y.DEPTH_STENCIL_ATTACHMENT)}attach(e,t=y.COLOR_ATTACHMENT0){e.isTexture?e.image&&e.image.rtt?(e.image.width!==this.width||e.image.height!==this.height)&&(e.version++,e.image.width=this.width,e.image.height=this.height):(e.version++,e.image={rtt:!0,data:null,width:this.width,height:this.height}):e.resize(this.width,this.height),this._attachments[t]=e}detach(e=y.COLOR_ATTACHMENT0){delete this._attachments[e]}resize(e,t){const n=super.resize(e,t);if(n){this.dispose(!1);for(const i in this._attachments){const s=this._attachments[i];s.isTexture?(s.image={rtt:!0,data:null,width:this.width,height:this.height},s.version++):s.resize(e,t)}}return n}dispose(e=!0){if(super.dispose(),e)for(const t in this._attachments)this._attachments[t].dispose()}}fe.prototype.isRenderTarget2D=!0;Object.defineProperties(fe.prototype,{texture:{set:function(a){a?a.isTexture&&this.attach(a,y.COLOR_ATTACHMENT0):this.detach(y.COLOR_ATTACHMENT0)},get:function(){const a=this._attachments[y.COLOR_ATTACHMENT0];return a.isTexture?a:null}}});class Bi extends En{constructor(){super(),this.image={data:new Uint8Array([255,255,255,255,255,255,255,255]),width:2,height:2,depth:2},this.wrapR=q.CLAMP_TO_EDGE,this.format=M.RED,this.type=N.UNSIGNED_BYTE,this.magFilter=C.NEAREST,this.minFilter=C.NEAREST,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.image=e.image,this}}Bi.prototype.isTexture3D=!0;class Rr extends qt{constructor(e,t,n){super(e,t),this.depth=n,this._attachments={},this.attach(new Bi,y.COLOR_ATTACHMENT0),this.activeLayer=0,this.activeMipmapLevel=0}attach(e,t=y.COLOR_ATTACHMENT0){e.isTexture?e.image&&e.image.rtt?(e.image.width!==this.width||e.image.height!==this.height||e.image.depth!==this.depth)&&(e.version++,e.image.width=this.width,e.image.height=this.height,e.image.depth=this.depth):(e.version++,e.image={rtt:!0,data:null,width:this.width,height:this.height,depth:this.depth}):e.resize(this.width,this.height),this._attachments[t]=e}detach(e=y.COLOR_ATTACHMENT0){delete this._attachments[e]}resize(e,t,n){let i=!1;if((this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,i=!0),i){this.dispose(!1);for(const s in this._attachments){const r=this._attachments[s];r.isTexture?(r.image={rtt:!0,data:null,width:this.width,height:this.height,depth:this.depth},r.version++):r.resize(e,t)}}return i}dispose(e=!0){if(super.dispose(),e)for(const t in this._attachments)this._attachments[t].dispose()}}Rr.prototype.isRenderTarget3D=!0;Object.defineProperties(Rr.prototype,{texture:{set:function(a){a?a.isTexture&&this.attach(a,y.COLOR_ATTACHMENT0):this.detach(y.COLOR_ATTACHMENT0)},get:function(){const a=this._attachments[y.COLOR_ATTACHMENT0];return a.isTexture?a:null}}});class lo extends qt{constructor(e){super(e.width,e.height),this.view=e}resize(e,t){this.view.width=e,this.view.height=t,this.width=e,this.height=t}dispose(){}}lo.prototype.isRenderTargetBack=!0;class Sn extends En{constructor(){super(),this.images=[],this.flipY=!1}copy(e){return super.copy(e),this.images=e.images.slice(0),this}}Sn.prototype.isTextureCube=!0;class Zt extends qt{constructor(e,t){super(e,t),this._attachments={},this.attach(new Sn,y.COLOR_ATTACHMENT0),this.attach(new Ae(e,t,M.DEPTH_STENCIL),y.DEPTH_STENCIL_ATTACHMENT),this.activeCubeFace=0,this.activeMipmapLevel=0}attach(e,t=y.COLOR_ATTACHMENT0){if(e.isTexture){let n=!1;for(let i=0;i<6;i++)e.images[i]&&e.images[i].rtt?(e.images[i].width!==this.width||e.images[i].height!==this.height)&&(e.images[i].width=this.width,e.images[i].height=this.height,n=!0):(e.images[i]={rtt:!0,data:null,width:this.width,height:this.height},n=!0);n&&e.version++}else e.resize(this.width,this.height);this._attachments[t]=e}detach(e=y.COLOR_ATTACHMENT0){delete this._attachments[e]}resize(e,t){if(super.resize(e,t)){this.dispose(!1);for(const i in this._attachments){const s=this._attachments[i];if(s.isTexture){for(let r=0;r<6;r++)s.images[r]={rtt:!0,data:null,width:this.width,height:this.height};s.version++}else s.resize(e,t)}}}dispose(e=!0){if(super.dispose(),e)for(const t in this._attachments)this._attachments[t].dispose()}}Zt.prototype.isRenderTargetCube=!0;Object.defineProperties(Zt.prototype,{texture:{set:function(a){a?a.isTexture&&this.attach(a,y.COLOR_ATTACHMENT0):this.detach(y.COLOR_ATTACHMENT0)},get:function(){const a=this._attachments[y.COLOR_ATTACHMENT0];return a.isTexture?a:null}}});const Zn=new U;class zi{constructor(e,t){this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=new Float32Array(16*this.bones.length),this.boneTexture=void 0,this._version=0}pose(){const e=this.boneInverses;for(let t=0;t<this.bones.length;t++)this.bones[t].worldMatrix.getInverse(e[t]);for(let t=0;t<this.bones.length;t++){const n=this.bones[t];n.parent&&n.parent.isBone?(n.matrix.getInverse(n.parent.worldMatrix),n.matrix.multiply(n.worldMatrix)):n.matrix.copy(n.worldMatrix),n.matrix.decompose(n.position,n.quaternion,n.scale)}}clone(){return new zi(this.bones,this.boneInverses)}updateBones(e){const t=e.useAnchorMatrix,n=e.anchorMatrixInverse,i=this.boneInverses;for(let s=0;s<this.bones.length;s++){const r=this.bones[s];Zn.multiplyMatrices(r.worldMatrix,i[s]),t&&Zn.premultiply(n),Zn.toArray(this.boneMatrices,s*16)}this.boneTexture!==void 0&&this.boneTexture.version++}generateBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Mr(Math.ceil(e)),e=Math.max(4,e);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new oe;n.image={data:t,width:e,height:e},n.format=M.RGBA,n.type=N.FLOAT,n.magFilter=C.NEAREST,n.minFilter=C.NEAREST,n.generateMipmaps=!1,n.flipY=!1,this.boneMatrices=t,this.boneTexture=n}}class co extends Ze{constructor(e,t){super(e,t)}}co.prototype.isAmbientLight=!0;class Gi{constructor(){this.camera=new jt,this.matrix=new U,this.bias=0,this.normalBias=0,this.radius=1,this.cameraNear=1,this.cameraFar=500,this.mapSize=new G(512,512),this.autoUpdate=!0,this.needsUpdate=!1,this.renderTarget=null,this.map=null,this.depthMap=null}update(e,t){}updateMatrix(){const e=this.matrix,t=this.camera;e.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),e.multiply(t.projectionMatrix),e.multiply(t.viewMatrix)}copy(e){return this.camera.copy(e.camera),this.matrix.copy(e.matrix),this.bias=e.bias,this.normalBias=e.normalBias,this.radius=e.radius,this.cameraNear=e.cameraNear,this.cameraFar=e.cameraFar,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}prepareDepthMap(e,t){}}class uo extends Gi{constructor(){super(),this.windowSize=500,this.frustumEdgeFalloff=0,this.camera.frustumCulled=!1,this.renderTarget=new fe(this.mapSize.x,this.mapSize.y);const e=this.renderTarget.texture;e.generateMipmaps=!1,e.minFilter=C.NEAREST,e.magFilter=C.NEAREST;const t=new oe;t.type=N.UNSIGNED_INT,t.format=M.DEPTH_COMPONENT,t.magFilter=C.LINEAR,t.minFilter=C.LINEAR,t.compare=Pt.LESS,t.generateMipmaps=!1;const n=new Ae(this.mapSize.x,this.mapSize.y,M.DEPTH_COMPONENT16);this.renderTarget.detach(y.DEPTH_STENCIL_ATTACHMENT),this.renderTarget.attach(n,y.DEPTH_ATTACHMENT),this.map=e,this.depthMap=t,this._depthBuffer=n,this._lookTarget=new T,this._up=new T(0,1,0)}update(e){this._updateCamera(e),(this.mapSize.x!==this.renderTarget.width||this.mapSize.y!==this.renderTarget.height)&&this.renderTarget.resize(this.mapSize.x,this.mapSize.y)}_updateCamera(e){const t=this.camera,n=this._lookTarget;e.getWorldDirection(n),t.position.setFromMatrixPosition(e.worldMatrix),n.multiplyScalar(-1).add(t.position),t.lookAt(n,this._up),t.updateMatrix();const i=this.windowSize/2;t.setOrtho(-i,i,-i,i,this.cameraNear,this.cameraFar)}copy(e){return super.copy(e),this.windowSize=e.windowSize,this.frustumEdgeFalloff=e.frustumEdgeFalloff,this}prepareDepthMap(e,t){const n=e&&t.version>=2,i=this.renderTarget,r=i._attachments[y.DEPTH_ATTACHMENT]===this.depthMap;n!==r&&(n?(t.getExtension("OES_texture_float_linear")&&(this.depthMap.type=N.FLOAT),i.dispose(),i.attach(this.depthMap,y.DEPTH_ATTACHMENT)):(i.dispose(),i.attach(this._depthBuffer,y.DEPTH_ATTACHMENT)))}}class Nr extends Ze{constructor(e,t){super(e,t),this.shadow=new uo}copy(e){return super.copy(e),this.shadow.copy(e.shadow),this}}Nr.prototype.isDirectionalLight=!0;class ho extends Ze{constructor(e,t,n){super(e,n),this.groundColor=new ge(t!==void 0?t:16777215)}copy(e){super.copy(e),this.groundColor.copy(e.groundColor)}}ho.prototype.isHemisphereLight=!0;class fo extends Gi{constructor(){super(),this.renderTarget=new Zt(this.mapSize.x,this.mapSize.y);const e=this.renderTarget.texture;e.generateMipmaps=!1,e.minFilter=C.NEAREST,e.magFilter=C.NEAREST,this.map=e,this._targets=[new T(1,0,0),new T(-1,0,0),new T(0,1,0),new T(0,-1,0),new T(0,0,1),new T(0,0,-1)],this._ups=[new T(0,-1,0),new T(0,-1,0),new T(0,0,1),new T(0,0,-1),new T(0,-1,0),new T(0,-1,0)],this._lookTarget=new T}update(e,t){this._updateCamera(e,t),(this.mapSize.x!==this.renderTarget.width||this.mapSize.y!==this.renderTarget.height)&&this.renderTarget.resize(this.mapSize.x,this.mapSize.y)}_updateCamera(e,t){const n=this.camera,i=this._lookTarget,s=this._targets,r=this._ups;n.position.setFromMatrixPosition(e.worldMatrix),i.set(s[t].x+n.position.x,s[t].y+n.position.y,s[t].z+n.position.z),n.lookAt(i,r[t]),n.updateMatrix(),n.setPerspective(90/180*Math.PI,1,this.cameraNear,this.cameraFar)}}class Fr extends Ze{constructor(e,t,n,i){super(e,t),this.decay=i!==void 0?i:1,this.distance=n!==void 0?n:200,this.shadow=new fo}copy(e){return super.copy(e),this.shadow.copy(e.shadow),this}}Fr.prototype.isPointLight=!0;class _o extends Ze{constructor(e=new wa,t=1){super(void 0,t),this.sh=e}copy(e){return super.copy(e),this.sh.copy(e.sh),this}}_o.prototype.isSphericalHarmonicsLight=!0;class po extends Gi{constructor(){super(),this.frustumEdgeFalloff=0,this.renderTarget=new fe(this.mapSize.x,this.mapSize.y);const e=this.renderTarget.texture;e.generateMipmaps=!1,e.minFilter=C.NEAREST,e.magFilter=C.NEAREST;const t=new oe;t.type=N.UNSIGNED_INT,t.format=M.DEPTH_COMPONENT,t.magFilter=C.LINEAR,t.minFilter=C.LINEAR,t.compare=Pt.LESS,t.generateMipmaps=!1;const n=new Ae(this.mapSize.x,this.mapSize.y,M.DEPTH_COMPONENT16);this.renderTarget.detach(y.DEPTH_STENCIL_ATTACHMENT),this.renderTarget.attach(n,y.DEPTH_ATTACHMENT),this.map=e,this.depthMap=t,this._depthBuffer=n,this._lookTarget=new T,this._up=new T(0,1,0)}update(e){this._updateCamera(e),(this.mapSize.x!==this.renderTarget.width||this.mapSize.y!==this.renderTarget.height)&&this.renderTarget.resize(this.mapSize.x,this.mapSize.y)}_updateCamera(e){const t=this.camera,n=this._lookTarget;e.getWorldDirection(n),t.position.setFromMatrixPosition(e.worldMatrix),n.multiplyScalar(-1).add(t.position),t.lookAt(n,this._up),t.updateMatrix(),t.setPerspective(e.angle*2,1,this.cameraNear,this.cameraFar)}copy(e){return super.copy(e),this.frustumEdgeFalloff=e.frustumEdgeFalloff,this}prepareDepthMap(e,t){const n=e&&t.version>=2,i=this.renderTarget,r=i._attachments[y.DEPTH_ATTACHMENT]===this.depthMap;n!==r&&(n?(t.getExtension("OES_texture_float_linear")&&(this.depthMap.type=N.FLOAT),i.dispose(),i.attach(this.depthMap,y.DEPTH_ATTACHMENT)):(i.dispose(),i.attach(this._depthBuffer,y.DEPTH_ATTACHMENT)))}}class Dr extends Ze{constructor(e,t,n,i,s,r){super(e,t),this.decay=r!==void 0?r:1,this.distance=n!==void 0?n:200,this.penumbra=s!==void 0?s:0,this.angle=i!==void 0?i:Math.PI/6,this.shadow=new po}copy(e){return super.copy(e),this.shadow.copy(e.shadow),this}}Dr.prototype.isSpotLight=!0;class Ir extends Ee{constructor(){super()}}Ir.prototype.isBone=!0;class Ur extends qe{constructor(e,t){super(e,t),this.skeleton=void 0,this.bindMode="attached",this.bindMatrix=new U,this.bindMatrixInverse=new U}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrix(),t=this.worldMatrix),this.bindMatrix.copy(t),this.bindMatrixInverse.getInverse(t)}updateMatrix(e){super.updateMatrix(e),this.bindMode==="attached"?this.bindMatrixInverse.getInverse(this.worldMatrix):this.bindMode==="detached"?this.bindMatrixInverse.getInverse(this.bindMatrix):console.warn("t3d.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}copy(e){return super.copy(e),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this}}Ur.prototype.isSkinnedMesh=!0;var mo=`#ifdef ALPHATEST
	if ( outColor.a < ALPHATEST ) {
		discard;
	} else {
		outColor.a = u_Opacity;
	}
#endif`,go=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
	varying vec2 vAOMapUV;
#endif`,xo=`#ifdef USE_AOMAP
	uniform mat3 aoMapUVTransform;
	varying vec2 vAOMapUV;
#endif`,To=`#ifdef USE_AOMAP
	#if (USE_AOMAP == 2)
        vAOMapUV = (aoMapUVTransform * vec3(a_Uv2, 1.)).xy;
    #else
        vAOMapUV = (aoMapUVTransform * vec3(a_Uv, 1.)).xy;
    #endif
#endif`,Ao=`
#ifdef USE_AOMAP
    float ambientOcclusion = (texture2D(aoMap, vAOMapUV).r - 1.0) * aoMapIntensity + 1.0;
    
    reflectedLight.indirectDiffuse *= ambientOcclusion;
    #if defined(USE_ENV_MAP) && defined(USE_PBR)
        float dotNV = saturate(dot(N, V));
        reflectedLight.indirectSpecular *= computeSpecularOcclusion(dotNV, ambientOcclusion, roughness);
    #endif
#endif`,vo="vec4 outColor = vec4(u_Color, u_Opacity);",Eo=`vec3 transformed = vec3(a_Position);
vec3 objectNormal = vec3(a_Normal);
#ifdef USE_TANGENT
    vec3 objectTangent = vec3(a_Tangent.xyz);
#endif`,So=`
vec3 BRDF_Diffuse_Lambert(vec3 diffuseColor) {
    return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick(const in vec3 specularColor, const in float dotLH) {
	float fresnel = exp2((-5.55473 * dotLH - 6.98316) * dotLH);
	return (1.0 - specularColor) * fresnel + specularColor;
}
float D_BlinnPhong(const in float shininess, const in float dotNH) {
	return RECIPROCAL_PI * (shininess * 0.5 + 1.0) * pow(dotNH, shininess);
}
float G_BlinnPhong_Implicit() {
	return 0.25;
}
vec3 BRDF_Specular_BlinnPhong(vec3 specularColor, vec3 N, vec3 L, vec3 V, float shininess) {
    vec3 H = normalize(L + V);
    float dotNH = saturate(dot(N, H));
    float dotLH = saturate(dot(L, H));
    vec3 F = F_Schlick(specularColor, dotLH);
    float G = G_BlinnPhong_Implicit();
    float D = D_BlinnPhong(shininess, dotNH);
    return F * G * D;
}
float D_GGX(const in float alpha, const in float dotNH) {
	float a2 = pow2(alpha);
	float denom = pow2(dotNH) * (a2 - 1.0) + 1.0;	return RECIPROCAL_PI * a2 / pow2(denom);
}
float G_GGX_SmithCorrelated(const in float alpha, const in float dotNL, const in float dotNV) {
	float a2 = pow2(alpha);
	float gv = dotNL * sqrt(a2 + (1.0 - a2) * pow2(dotNV));
	float gl = dotNV * sqrt(a2 + (1.0 - a2) * pow2(dotNL));
	return 0.5 / max(gv + gl, EPSILON);
}
vec3 BRDF_Specular_GGX(vec3 specularColor, vec3 N, vec3 L, vec3 V, float roughness) {
	float alpha = pow2(roughness);
	vec3 H = normalize(L + V);
	float dotNL = saturate(dot(N, L));
	float dotNV = saturate(dot(N, V));
	float dotNH = saturate(dot(N, H));
	float dotLH = saturate(dot(L, H));
	vec3 F = F_Schlick(specularColor, dotLH);
	float G = G_GGX_SmithCorrelated(alpha, dotNL, dotNV);
	float D = D_GGX(alpha, dotNH);
	return F * G * D;
}
vec2 integrateSpecularBRDF(const in float dotNV, const in float roughness) {
	const vec4 c0 = vec4(-1, -0.0275, -0.572, 0.022);
	const vec4 c1 = vec4(1, 0.0425, 1.04, -0.04);
	vec4 r = roughness * c0 + c1;
	float a004 = min(r.x * r.x, exp2(-9.28 * dotNV)) * r.x + r.y;
	return vec2(-1.04, 1.04) * a004 + r.zw;
}
vec3 F_Schlick_RoughnessDependent(const in vec3 F0, const in float dotNV, const in float roughness) {
	float fresnel = exp2((-5.55473 * dotNV - 6.98316) * dotNV);
	vec3 Fr = max(vec3(1.0 - roughness), F0) - F0;
	return Fr * fresnel + F0;
}
vec3 BRDF_Specular_GGX_Environment(const in vec3 N, const in vec3 V, const in vec3 specularColor, const in float roughness) {
	float dotNV = saturate(dot(N, V));
	vec2 brdf = integrateSpecularBRDF(dotNV, roughness);
	return specularColor * brdf.x + brdf.y;
}
void BRDF_Specular_Multiscattering_Environment(const in vec3 N, const in vec3 V, const in vec3 specularColor, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter) {
	float dotNV = saturate(dot(N, V));
	vec3 F = F_Schlick_RoughnessDependent(specularColor, dotNV, roughness);
	vec2 brdf = integrateSpecularBRDF(dotNV, roughness);
	vec3 FssEss = F * brdf.x + brdf.y;
	float Ess = brdf.x + brdf.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = specularColor + (1.0 - specularColor) * 0.047619;	vec3 Fms = FssEss * Favg / (1.0 - Ems * Favg);
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}`,yo=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd(vec2 uv) {
		vec2 dSTdx = dFdx( uv );
		vec2 dSTdy = dFdy( uv );
		float Hll = bumpScale * texture2D( bumpMap, uv ).x;
		float dBx = bumpScale * texture2D( bumpMap, uv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, uv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy) {
		vec3 vSigmaX = vec3( dFdx( surf_pos.x ), dFdx( surf_pos.y ), dFdx( surf_pos.z ) );
		vec3 vSigmaY = vec3( dFdy( surf_pos.x ), dFdy( surf_pos.y ), dFdy( surf_pos.z ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 );
		fDet *= ( float( gl_FrontFacing ) * 2.0 - 1.0 );
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Mo=`
#if NUM_CLIPPING_PLANES > 0
    vec4 plane;
    #pragma unroll_loop_start
    for (int i = 0; i < NUM_CLIPPING_PLANES; i++) {
        plane = clippingPlanes[i];
        if ( dot( -v_modelPos, plane.xyz ) > plane.w ) discard;
    }
    #pragma unroll_loop_end
#endif`,Po=`#if NUM_CLIPPING_PLANES > 0
    uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Co=`#ifdef USE_VCOLOR_RGB
    outColor.rgb *= v_Color;
#endif
#ifdef USE_VCOLOR_RGBA
    outColor *= v_Color;
#endif`,Lo=`#ifdef USE_VCOLOR_RGB
    varying vec3 v_Color;
#endif
#ifdef USE_VCOLOR_RGBA
    varying vec4 v_Color;
#endif`,wo=`#ifdef USE_VCOLOR_RGB
    attribute vec3 a_Color;
    varying vec3 v_Color;
#endif
#ifdef USE_VCOLOR_RGBA
    attribute vec4 a_Color;
    varying vec4 v_Color;
#endif`,bo=`#if defined(USE_VCOLOR_RGB) || defined(USE_VCOLOR_RGBA)
    v_Color = a_Color;
#endif`,Ro=`uniform mat4 u_View;
uniform float u_Opacity;
uniform vec3 u_Color;
uniform vec3 u_CameraPosition;
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};`,No=`attribute vec3 a_Position;
attribute vec3 a_Normal;
#ifdef USE_TANGENT
	attribute vec4 a_Tangent;
#endif
#include <transpose>
#include <inverse>
uniform mat4 u_Projection;
uniform mat4 u_View;
uniform mat4 u_Model;
uniform mat4 u_ProjectionView;
uniform vec3 u_CameraPosition;
#define EPSILON 1e-6
#ifdef USE_MORPHTARGETS
    attribute vec3 morphTarget0;
    attribute vec3 morphTarget1;
    attribute vec3 morphTarget2;
    attribute vec3 morphTarget3;
    #ifdef USE_MORPHNORMALS
    	attribute vec3 morphNormal0;
    	attribute vec3 morphNormal1;
    	attribute vec3 morphNormal2;
    	attribute vec3 morphNormal3;
    #else
    	attribute vec3 morphTarget4;
    	attribute vec3 morphTarget5;
    	attribute vec3 morphTarget6;
    	attribute vec3 morphTarget7;
    #endif
#endif
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}`,Fo=`#ifdef USE_DIFFUSE_MAP
    #if (USE_DIFFUSE_MAP == 2)
        vec4 texelColor = texture2D(diffuseMap, v_Uv2);
    #else 
        vec4 texelColor = texture2D(diffuseMap, v_Uv);
    #endif
    
    texelColor = mapTexelToLinear(texelColor);
    outColor *= texelColor;
#endif`,Do=`#ifdef USE_DIFFUSE_MAP
    uniform sampler2D diffuseMap;
#endif`,Io=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = emissiveMapTexelToLinear(texture2D(emissiveMap, vEmissiveMapUV));
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Uo=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
	varying vec2 vEmissiveMapUV;
#endif`,Oo=`#ifdef USE_EMISSIVEMAP
	#if (USE_EMISSIVEMAP == 2)
        vEmissiveMapUV = (emissiveMapUVTransform * vec3(a_Uv2, 1.)).xy;
    #else
        vEmissiveMapUV = (emissiveMapUVTransform * vec3(a_Uv, 1.)).xy;
    #endif
#endif`,Bo=`#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapUVTransform;
	varying vec2 vEmissiveMapUV;
#endif`,zo="gl_FragColor = linearToOutputTexel(gl_FragColor);",Go=`vec4 LinearToLinear(in vec4 value) {
	return value;
}
vec4 GammaToLinear(in vec4 value, in float gammaFactor) {
	return vec4(pow(value.xyz, vec3(gammaFactor)), value.w);
}
vec4 LinearToGamma(in vec4 value, in float gammaFactor) {
	return vec4(pow(value.xyz, vec3(1.0 / gammaFactor)), value.w);
}
vec4 sRGBToLinear(in vec4 value) {
	return vec4(mix(pow(value.rgb * 0.9478672986 + vec3(0.0521327014), vec3(2.4)), value.rgb * 0.0773993808, vec3(lessThanEqual(value.rgb, vec3(0.04045)))), value.w);
}
vec4 LinearTosRGB(in vec4 value) {
	return vec4(mix(pow(value.rgb, vec3(0.41666)) * 1.055 - vec3(0.055), value.rgb * 12.92, vec3(lessThanEqual(value.rgb, vec3(0.0031308)))), value.w);
}`,ko="gl_FragColor = outColor;",Ho=`#ifdef USE_ENV_MAP
    vec3 envDir;
    #ifdef USE_VERTEX_ENVDIR
        envDir = v_EnvDir;
    #else
        envDir = reflect(normalize(v_modelPos - u_CameraPosition), N);
    #endif
    vec4 envColor = textureCube(envMap, vec3(u_EnvMap_Flip * envDir.x, envDir.yz));
    envColor = envMapTexelToLinear( envColor );
    #ifdef ENVMAP_BLENDING_MULTIPLY
		outColor = mix(outColor, envColor * outColor, u_EnvMap_Intensity);
	#elif defined( ENVMAP_BLENDING_MIX )
		outColor = mix(outColor, envColor, u_EnvMap_Intensity);
	#elif defined( ENVMAP_BLENDING_ADD )
		outColor += envColor * u_EnvMap_Intensity;
	#endif
#endif`,Xo=`#ifdef USE_ENV_MAP
    #ifdef USE_VERTEX_ENVDIR
        varying vec3 v_EnvDir;
    #endif
    uniform samplerCube envMap;
    uniform float u_EnvMap_Flip;
    uniform float u_EnvMap_Intensity;
    uniform float u_EnvMapLight_Intensity;
    uniform int maxMipLevel;
#endif`,Vo=`#ifdef USE_ENV_MAP
    #ifdef USE_VERTEX_ENVDIR
        varying vec3 v_EnvDir;
    #endif
#endif`,Wo=`
#ifdef USE_ENV_MAP
    #ifdef USE_VERTEX_ENVDIR
        vec3 transformedNormal = (transposeMat4(inverseMat4(u_Model)) * vec4(objectNormal, 0.0)).xyz;
        transformedNormal = normalize(transformedNormal);
        v_EnvDir = reflect(normalize(worldPosition.xyz - u_CameraPosition), transformedNormal);
    #endif
#endif`,Qo=`#ifdef USE_FOG
    float depth = gl_FragCoord.z / gl_FragCoord.w;
    #ifdef USE_EXP2_FOG
        float fogFactor = 1.0 - exp(-u_FogDensity * u_FogDensity * depth * depth);
    #else
        float fogFactor = smoothstep(u_FogNear, u_FogFar, depth);
    #endif
    gl_FragColor.rgb = mix(gl_FragColor.rgb, u_FogColor, fogFactor);
#endif`,Yo=`#ifdef USE_FOG
    uniform vec3 u_FogColor;
    #ifdef USE_EXP2_FOG
        uniform float u_FogDensity;
    #else
        uniform float u_FogNear;
        uniform float u_FogFar;
    #endif
#endif`,jo=`mat4 inverseMat4(mat4 m) {
    float
    a00 = m[0][0], a01 = m[0][1], a02 = m[0][2], a03 = m[0][3],
    a10 = m[1][0], a11 = m[1][1], a12 = m[1][2], a13 = m[1][3],
    a20 = m[2][0], a21 = m[2][1], a22 = m[2][2], a23 = m[2][3],
    a30 = m[3][0], a31 = m[3][1], a32 = m[3][2], a33 = m[3][3],
    b00 = a00 * a11 - a01 * a10,
    b01 = a00 * a12 - a02 * a10,
    b02 = a00 * a13 - a03 * a10,
    b03 = a01 * a12 - a02 * a11,
    b04 = a01 * a13 - a03 * a11,
    b05 = a02 * a13 - a03 * a12,
    b06 = a20 * a31 - a21 * a30,
    b07 = a20 * a32 - a22 * a30,
    b08 = a20 * a33 - a23 * a30,
    b09 = a21 * a32 - a22 * a31,
    b10 = a21 * a33 - a23 * a31,
    b11 = a22 * a33 - a23 * a32,
    det = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;
    return mat4(
        a11 * b11 - a12 * b10 + a13 * b09,
        a02 * b10 - a01 * b11 - a03 * b09,
        a31 * b05 - a32 * b04 + a33 * b03,
        a22 * b04 - a21 * b05 - a23 * b03,
        a12 * b08 - a10 * b11 - a13 * b07,
        a00 * b11 - a02 * b08 + a03 * b07,
        a32 * b02 - a30 * b05 - a33 * b01,
        a20 * b05 - a22 * b02 + a23 * b01,
        a10 * b10 - a11 * b08 + a13 * b06,
        a01 * b08 - a00 * b10 - a03 * b06,
        a30 * b04 - a31 * b02 + a33 * b00,
        a21 * b02 - a20 * b04 - a23 * b00,
        a11 * b07 - a10 * b09 - a12 * b06,
        a00 * b09 - a01 * b07 + a02 * b06,
        a31 * b01 - a30 * b03 - a32 * b00,
        a20 * b03 - a21 * b01 + a22 * b00) / det;
}`,qo=`
#if (defined(USE_PHONG) || defined(USE_PBR))
    vec3 V = normalize(u_CameraPosition - v_modelPos);
#endif
#ifdef USE_PBR
    #ifdef USE_PBR2
        vec3 diffuseColor = outColor.xyz;
        vec3 specularColor = specularFactor.xyz;
        float roughness = max(1.0 - glossinessFactor, 0.0525);
    #else
        vec3 diffuseColor = outColor.xyz * (1.0 - metalnessFactor);
        vec3 specularColor = mix(vec3(0.04), outColor.xyz, metalnessFactor);
        float roughness = max(roughnessFactor, 0.0525);
    #endif
    vec3 dxy = max(abs(dFdx(geometryNormal)), abs(dFdy(geometryNormal)));
    float geometryRoughness = max(max(dxy.x, dxy.y), dxy.z);
    roughness += geometryRoughness;
    roughness = min(roughness, 1.0);
    #ifdef USE_CLEARCOAT
        float clearcoat = u_Clearcoat;
        float clearcoatRoughness = u_ClearcoatRoughness;
        #ifdef USE_CLEARCOATMAP
		    clearcoat *= texture2D(clearcoatMap, v_Uv).x;
        #endif
        #ifdef USE_CLEARCOAT_ROUGHNESSMAP
		    clearcoatRoughness *= texture2D(clearcoatRoughnessMap, v_Uv).y;
	    #endif
        clearcoat = saturate(clearcoat);
        clearcoatRoughness = max(clearcoatRoughness, 0.0525);
	    clearcoatRoughness += geometryRoughness;
	    clearcoatRoughness = min(clearcoatRoughness, 1.0);
    #endif
#else
    vec3 diffuseColor = outColor.xyz;
    #ifdef USE_PHONG
        vec3 specularColor = u_SpecularColor.xyz;
        float shininess = u_Specular;
    #endif
#endif
vec3 L;
float falloff;
float dotNL;
vec3 irradiance;
float clearcoatDHR;
#ifdef USE_CLEARCOAT
    float ccDotNL;
    vec3 ccIrradiance;
#endif
#if NUM_DIR_LIGHTS > 0
    #pragma unroll_loop_start
    for (int i = 0; i < NUM_DIR_LIGHTS; i++) {
        L = normalize(-u_Directional[i].direction);
        falloff = 1.0;
        #if defined(USE_SHADOW) && (UNROLLED_LOOP_INDEX < NUM_DIR_SHADOWS)
            #ifdef USE_PCSS_SOFT_SHADOW
                falloff *= getShadowWithPCSS(directionalDepthMap[i], directionalShadowMap[i], vDirectionalShadowCoord[i], u_DirectionalShadow[i].shadowMapSize, u_DirectionalShadow[i].shadowBias, u_DirectionalShadow[i].shadowParams);
            #else
                falloff *= getShadow(directionalShadowMap[i], vDirectionalShadowCoord[i], u_DirectionalShadow[i].shadowMapSize, u_DirectionalShadow[i].shadowBias, u_DirectionalShadow[i].shadowParams);
            #endif
        #endif
        dotNL = saturate(dot(N, L));
        irradiance = u_Directional[i].color * falloff * dotNL * PI;
        #ifdef USE_CLEARCOAT        
            ccDotNL = saturate(dot(clearcoatNormal, L));
            ccIrradiance = ccDotNL * u_Directional[i].color * falloff  * PI;
            clearcoatDHR = clearcoat * clearcoatDHRApprox(clearcoatRoughness, ccDotNL);
            reflectedLight.directSpecular += ccIrradiance * clearcoat * BRDF_Specular_GGX(specularColor, clearcoatNormal, L, V, clearcoatRoughness);
        #else
            clearcoatDHR = 0.0;
        #endif
        reflectedLight.directDiffuse += (1.0 - clearcoatDHR) * irradiance * BRDF_Diffuse_Lambert(diffuseColor);
        #ifdef USE_PHONG
            reflectedLight.directSpecular += irradiance * BRDF_Specular_BlinnPhong(specularColor, N, L, V, shininess) * specularStrength;
        #endif
        #ifdef USE_PBR
            reflectedLight.directSpecular += (1.0 - clearcoatDHR) * irradiance * BRDF_Specular_GGX(specularColor, N, L, V, roughness);
        #endif
    }
    #pragma unroll_loop_end
#endif
#if NUM_POINT_LIGHTS > 0
    vec3 worldV;
    #pragma unroll_loop_start
    for (int i = 0; i < NUM_POINT_LIGHTS; i++) {
        worldV = v_modelPos - u_Point[i].position;
        L = -worldV;
        falloff = pow(clamp(1. - length(L) / u_Point[i].distance, 0.0, 1.0), u_Point[i].decay);
        L = normalize(L);
        #if defined(USE_SHADOW) && (UNROLLED_LOOP_INDEX < NUM_POINT_SHADOWS)
            falloff *= getPointShadow(pointShadowMap[i], vPointShadowCoord[i], u_PointShadow[i].shadowMapSize, u_PointShadow[i].shadowBias, u_PointShadow[i].shadowParams, u_PointShadow[i].shadowCameraRange);
        #endif
        dotNL = saturate(dot(N, L));
        irradiance = u_Point[i].color * falloff * dotNL * PI;
        #ifdef USE_CLEARCOAT        
            ccDotNL = saturate(dot(clearcoatNormal, L));
            ccIrradiance = ccDotNL *  u_Point[i].color * falloff  * PI;
            clearcoatDHR = clearcoat * clearcoatDHRApprox(clearcoatRoughness, ccDotNL);
            reflectedLight.directSpecular += ccIrradiance * clearcoat * BRDF_Specular_GGX(specularColor, clearcoatNormal, L, V, clearcoatRoughness);
        #else
            clearcoatDHR = 0.0;
        #endif
        reflectedLight.directDiffuse += (1.0 - clearcoatDHR) * irradiance * BRDF_Diffuse_Lambert(diffuseColor);
        #ifdef USE_PHONG
            reflectedLight.directSpecular += irradiance * BRDF_Specular_BlinnPhong(specularColor, N, L, V, shininess) * specularStrength;
        #endif
        #ifdef USE_PBR
            reflectedLight.directSpecular += (1.0 - clearcoatDHR) * irradiance * BRDF_Specular_GGX(specularColor, N, L, V, roughness);
        #endif
    }
    #pragma unroll_loop_end
#endif
#if NUM_SPOT_LIGHTS > 0
    float lightDistance;
    float angleCos;
    #pragma unroll_loop_start
    for (int i = 0; i < NUM_SPOT_LIGHTS; i++) {
        L = u_Spot[i].position - v_modelPos;
        lightDistance = length(L);
        L = normalize(L);
        angleCos = dot(L, -normalize(u_Spot[i].direction));
        falloff = smoothstep(u_Spot[i].coneCos, u_Spot[i].penumbraCos, angleCos);
        falloff *= pow(clamp(1. - lightDistance / u_Spot[i].distance, 0.0, 1.0), u_Spot[i].decay);
        #if defined(USE_SHADOW) && (UNROLLED_LOOP_INDEX < NUM_SPOT_SHADOWS)
            #ifdef USE_PCSS_SOFT_SHADOW
                falloff *= getShadowWithPCSS(spotDepthMap[i], spotShadowMap[i], vSpotShadowCoord[i], u_SpotShadow[i].shadowMapSize, u_SpotShadow[i].shadowBias, u_SpotShadow[i].shadowParams);
            #else
                falloff *= getShadow(spotShadowMap[i], vSpotShadowCoord[i], u_SpotShadow[i].shadowMapSize, u_SpotShadow[i].shadowBias, u_SpotShadow[i].shadowParams);
            #endif
        #endif
        dotNL = saturate(dot(N, L));
        irradiance = u_Spot[i].color * falloff * dotNL * PI;
        #ifdef USE_CLEARCOAT        
            ccDotNL = saturate(dot(clearcoatNormal, L));
            ccIrradiance = ccDotNL *  u_Spot[i].color * falloff  * PI;
            clearcoatDHR = clearcoat * clearcoatDHRApprox(clearcoatRoughness, ccDotNL);
            reflectedLight.directSpecular += ccIrradiance * clearcoat * BRDF_Specular_GGX(specularColor, clearcoatNormal, L, V, clearcoatRoughness);
        #else
            clearcoatDHR = 0.0;
        #endif
        reflectedLight.directDiffuse += (1.0 - clearcoatDHR) * irradiance * BRDF_Diffuse_Lambert(diffuseColor);
        #ifdef USE_PHONG
            reflectedLight.directSpecular += irradiance * BRDF_Specular_BlinnPhong(specularColor, N, L, V, shininess) * specularStrength;
        #endif
        #ifdef USE_PBR
            reflectedLight.directSpecular += (1.0 - clearcoatDHR) * irradiance * BRDF_Specular_GGX(specularColor, N, L, V, roughness);
        #endif
    }
    #pragma unroll_loop_end
#endif
#if NUM_RECT_AREA_LIGHTS > 0
    vec3 RectAreaLightDirectSpecular;
    vec3 RectAreaLightDirectDiffuse;
    vec3 rectCoords[4];
    #pragma unroll_loop_start
    for (int i = 0; i < NUM_RECT_AREA_LIGHTS; i++) {
        LTC_RectCoords(u_RectArea[i].position, u_RectArea[i].halfWidth, u_RectArea[i].halfHeight, rectCoords);
        reflectedLight.directDiffuse += u_RectArea[i].color * LTC_Diffuse(diffuseColor, N, V, v_modelPos, rectCoords);
        #ifdef USE_PBR
            reflectedLight.directSpecular += u_RectArea[i].color * LTC_Specular(specularColor, N, V, v_modelPos, rectCoords, roughness);
        #endif
    }
    #pragma unroll_loop_end
#endif
vec3 indirectIrradiance = vec3(0., 0., 0.);   
#ifdef USE_AMBIENT_LIGHT
    indirectIrradiance += u_AmbientLightColor * PI;
#endif
#ifdef USE_SPHERICALHARMONICS_LIGHT
    indirectIrradiance += getLightProbeIrradiance(u_SphericalHarmonicsLightData, N);
#endif
#if NUM_HEMI_LIGHTS > 0
    float hemiDiffuseWeight;
    #pragma unroll_loop_start
    for (int i = 0; i < NUM_HEMI_LIGHTS; i++) {
        L = normalize(u_Hemi[i].direction);
        dotNL = dot(N, L);
        hemiDiffuseWeight = 0.5 * dotNL + 0.5;
        indirectIrradiance += mix(u_Hemi[i].groundColor, u_Hemi[i].skyColor, hemiDiffuseWeight) * PI;
    }
    #pragma unroll_loop_end
#endif
reflectedLight.indirectDiffuse += indirectIrradiance * BRDF_Diffuse_Lambert(diffuseColor);
#if defined(USE_ENV_MAP) && defined(USE_PBR)
    vec3 iblIrradiance = vec3(0., 0., 0.);
    vec3 indirectRadiance = vec3(0., 0., 0.);
    vec3 clearcoatRadiance = vec3(0., 0., 0.);
    vec3 envDir;
    #ifdef USE_VERTEX_ENVDIR
        envDir = v_EnvDir;
    #else
        envDir = reflect(normalize(v_modelPos - u_CameraPosition), N);
    #endif
    iblIrradiance += getLightProbeIndirectIrradiance(maxMipLevel, N);
    indirectRadiance += getLightProbeIndirectRadiance(roughness, maxMipLevel, N, envDir);
    #ifdef USE_CLEARCOAT
        vec3 clearcoatDir = reflect(normalize(v_modelPos - u_CameraPosition), clearcoatNormal);
        clearcoatRadiance += getLightProbeIndirectRadiance(clearcoatRoughness, maxMipLevel, clearcoatNormal, clearcoatDir);
    #endif
    #ifdef USE_CLEARCOAT
        float ccDotNV = saturate(dot(clearcoatNormal, V));
        reflectedLight.indirectSpecular += clearcoatRadiance * clearcoat * BRDF_Specular_GGX_Environment(clearcoatNormal, V, specularColor, clearcoatRoughness);
        ccDotNL = ccDotNV;
        clearcoatDHR = clearcoat * clearcoatDHRApprox(clearcoatRoughness, ccDotNL);
    #else
        clearcoatDHR = 0.0;
    #endif
    float clearcoatInv = 1.0 - clearcoatDHR;
    vec3 singleScattering = vec3(0.0);
    vec3 multiScattering = vec3(0.0);
    vec3 cosineWeightedIrradiance = iblIrradiance * RECIPROCAL_PI;
    BRDF_Specular_Multiscattering_Environment(N, V, specularColor, roughness, singleScattering, multiScattering);
    vec3 diffuse = diffuseColor * (1.0 - (singleScattering + multiScattering));
    reflectedLight.indirectSpecular += clearcoatInv * indirectRadiance * singleScattering;
    reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
    reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
#endif`,Zo=`#ifdef USE_AMBIENT_LIGHT
    uniform vec3 u_AmbientLightColor;
#endif
#ifdef USE_SPHERICALHARMONICS_LIGHT
    uniform vec3 u_SphericalHarmonicsLightData[9];
#endif
#ifdef USE_CLEARCOAT
    float clearcoatDHRApprox(const in float roughness, const in float dotNL) {
        return 0.04 + (1.0 - 0.16) * (pow(1.0 - dotNL, 5.0) * pow(1.0 - roughness, 2.0));
    }
#endif
#if NUM_HEMI_LIGHTS > 0
    struct HemisphereLight {
        vec3 direction;
        vec3 skyColor;
		vec3 groundColor;
    };
    uniform HemisphereLight u_Hemi[NUM_HEMI_LIGHTS];
#endif
#if NUM_DIR_LIGHTS > 0
    struct DirectLight {
        vec3 direction;
        vec3 color;
    };
    uniform DirectLight u_Directional[NUM_DIR_LIGHTS];
#endif
#if NUM_POINT_LIGHTS > 0
    struct PointLight {
        vec3 position;
        vec3 color;
        float distance;
        float decay;
    };
    uniform PointLight u_Point[NUM_POINT_LIGHTS];
#endif
#if NUM_SPOT_LIGHTS > 0
    struct SpotLight {
        vec3 position;
        vec3 color;
        float distance;
        float decay;
        float coneCos;
        float penumbraCos;
        vec3 direction;
    };
    uniform SpotLight u_Spot[NUM_SPOT_LIGHTS];
#endif
#if NUM_RECT_AREA_LIGHTS > 0
    struct RectAreaLight {
        vec3 position;
        vec3 color;
		vec3 halfWidth;
		vec3 halfHeight;
    };
    uniform RectAreaLight u_RectArea[NUM_RECT_AREA_LIGHTS];
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
    void LTC_RectCoords(const in vec3 lightPos, const in vec3 halfWidth, const in vec3 halfHeight, inout vec3 rectCoords[4]) {
        rectCoords[0] = lightPos + halfWidth - halfHeight;        rectCoords[1] = lightPos - halfWidth - halfHeight;
        rectCoords[2] = lightPos - halfWidth + halfHeight;
        rectCoords[3] = lightPos + halfWidth + halfHeight;
    }
    vec2 LTC_Uv(const in vec3 N, const in vec3 V, const in float roughness) {
        const float LUT_SIZE = 64.0; 
        const float LUT_SCALE = (LUT_SIZE - 1.0) / LUT_SIZE;
        const float LUT_BIAS = 0.5 / LUT_SIZE;
        float dotNV = saturate(dot(N, V));
        vec2 uv = vec2(roughness, sqrt(1.0 - dotNV));
        uv = uv * LUT_SCALE + LUT_BIAS;
        return uv;
    }
    vec3 LTC_EdgeVectorFormFactor(const in vec3 v1, const in vec3 v2) {
        float x = dot(v1, v2);
        float y = abs(x);
        float a = 0.8543985 + (0.4965155 + 0.0145206 * y) * y;
        float b = 3.4175940 + (4.1616724 + y) * y;
        float v = a / b;
        float theta_sintheta = (x > 0.0) ? v : 0.5 * inversesqrt(max(1.0 - x * x, 1e-7)) - v;
        return cross(v1, v2) * theta_sintheta;
    }
    float LTC_ClippedSphereFormFactor(const in vec3 f) {
        float l = length(f);
        return max((l * l + f.z) / (l + 1.0), 0.0);
    }
    vec3 LTC_Evaluate(const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[4]) {
        vec3 v1 = rectCoords[1] - rectCoords[0];
        vec3 v2 = rectCoords[3] - rectCoords[0];
        vec3 lightNormal = cross(v1, v2);
        if(dot(lightNormal, P - rectCoords[0]) < 0.0) return vec3(0.0);
        vec3 T1, T2;
        T1 = normalize(V - N * dot(V, N));
        T2 = - cross(N, T1);
        mat3 mat = mInv * mat3(
            T1.x, T2.x, N.x,
            T1.y, T2.y, N.y,
            T1.z, T2.z, N.z
        );
        vec3 coords[4];
        coords[0] = mat * (rectCoords[0] - P);
        coords[1] = mat * (rectCoords[1] - P);
        coords[2] = mat * (rectCoords[2] - P);
        coords[3] = mat * (rectCoords[3] - P);
        coords[0] = normalize(coords[0]);
        coords[1] = normalize(coords[1]);
        coords[2] = normalize(coords[2]);
        coords[3] = normalize(coords[3]);
        vec3 vectorFormFactor = vec3(0.0);
        vectorFormFactor += LTC_EdgeVectorFormFactor(coords[0], coords[1]);
        vectorFormFactor += LTC_EdgeVectorFormFactor(coords[1], coords[2]);
        vectorFormFactor += LTC_EdgeVectorFormFactor(coords[2], coords[3]);
        vectorFormFactor += LTC_EdgeVectorFormFactor(coords[3], coords[0]);
        float result = LTC_ClippedSphereFormFactor(vectorFormFactor);
        return vec3(result);
    }
    vec3 LTC_Diffuse(const in vec3 diffuseColor, const in vec3 N, const in vec3 V, const in vec3 P, const in vec3 rectCoords[4]) {
        return diffuseColor * LTC_Evaluate(N, V, P, mat3(1.0), rectCoords);
    }
    vec3 LTC_Specular(const in vec3 specularColor, const in vec3 N, const in vec3 V, const in vec3 P, const in vec3 rectCoords[4], const in float roughness) {
        vec2 ltc_uv = LTC_Uv(N, V, roughness);
        vec4 t1 = texture2D(ltc_1, ltc_uv);
        vec4 t2 = texture2D(ltc_2, ltc_uv);
        mat3 mInv = mat3(
            vec3(t1.x, 0, t1.y),
            vec3(0, 1, 0),
            vec3(t1.z, 0, t1.w)
        );
        vec3 fresnel = (specularColor * t2.x + (vec3(1.0) - specularColor) * t2.y);
        return fresnel * LTC_Evaluate(N, V, P, mInv, rectCoords);
    }
#endif
#if defined(USE_PBR) && defined(USE_ENV_MAP)
    vec3 getLightProbeIndirectIrradiance(const in int maxMIPLevel, const in vec3 N) {
        vec3 coordVec = vec3(u_EnvMap_Flip * N.x, N.yz);
    	#ifdef TEXTURE_LOD_EXT
    		vec4 envMapColor = textureCubeLodEXT(envMap, coordVec, float(maxMIPLevel));
    	#else
    		vec4 envMapColor = textureCube(envMap, coordVec, float(maxMIPLevel));
    	#endif
        envMapColor = envMapTexelToLinear(envMapColor);
        return PI * envMapColor.rgb * u_EnvMap_Intensity * u_EnvMapLight_Intensity;
    }
    float getSpecularMIPLevel(const in float roughness, const in int maxMIPLevel) {
    	float maxMIPLevelScalar = float(maxMIPLevel);
        float sigma = PI * roughness * roughness / (1.0 + roughness);
        float desiredMIPLevel = maxMIPLevelScalar + log2(sigma);
    	return clamp(desiredMIPLevel, 0.0, maxMIPLevelScalar);
    }
    vec3 getLightProbeIndirectRadiance(const in float roughness, const in int maxMIPLevel, const in vec3 normal, const in vec3 envDir) {
        float specularMIPLevel = getSpecularMIPLevel(roughness, maxMIPLevel);
        vec3 coordVec = normalize(mix(envDir, normal, roughness * roughness));
        coordVec.x *= u_EnvMap_Flip;
        #ifdef TEXTURE_LOD_EXT
    		vec4 envMapColor = textureCubeLodEXT(envMap, coordVec, specularMIPLevel);
    	#else
    		vec4 envMapColor = textureCube(envMap, coordVec, specularMIPLevel);
    	#endif
        envMapColor = envMapTexelToLinear(envMapColor);
        return envMapColor.rgb * u_EnvMap_Intensity;
    }
    float computeSpecularOcclusion(const in float dotNV, const in float ambientOcclusion, const in float roughness) {
    	return saturate(pow(dotNV + ambientOcclusion, exp2(-16.0 * roughness - 1.0)) - 1.0 + ambientOcclusion);
    }
#endif
#ifdef USE_SPHERICALHARMONICS_LIGHT
    vec3 shGetIrradianceAt(in vec3 normal, in vec3 shCoefficients[9]) {
        float x = normal.x, y = normal.y, z = normal.z;
        vec3 result = shCoefficients[0] * 0.886227;
        result += shCoefficients[1] * 2.0 * 0.511664 * y;
        result += shCoefficients[2] * 2.0 * 0.511664 * z;
        result += shCoefficients[3] * 2.0 * 0.511664 * x;
        result += shCoefficients[4] * 2.0 * 0.429043 * x * y;
        result += shCoefficients[5] * 2.0 * 0.429043 * y * z;
        result += shCoefficients[6] * (0.743125 * z * z - 0.247708);
        result += shCoefficients[7] * 2.0 * 0.429043 * x * z;
        result += shCoefficients[8] * 0.429043 * (x * x - y * y);
        return result;
    }
    vec3 getLightProbeIrradiance(const in vec3 lightProbe[9], const in vec3 normal) {
        vec3 irradiance = shGetIrradianceAt(normal, lightProbe);
        return irradiance;
    }
#endif`,Ko=`#ifdef USE_ALPHA_MAP
	uniform sampler2D alphaMap;
	varying vec2 vAlphaMapUV;
#endif`,$o=`#ifdef USE_ALPHA_MAP
	outColor.a *= texture2D(alphaMap, vAlphaMapUV).g;
#endif`,Jo=`#ifdef USE_ALPHA_MAP
    uniform mat3 alphaMapUVTransform;
	varying vec2 vAlphaMapUV;
#endif`,el=`#ifdef USE_ALPHA_MAP
	#if (USE_ALPHA_MAP == 2)
        vAlphaMapUV = (alphaMapUVTransform * vec3(a_Uv2, 1.)).xy;
    #else
        vAlphaMapUV = (alphaMapUVTransform * vec3(a_Uv, 1.)).xy;
    #endif
#endif`,tl=`#ifdef USE_NORMAL_MAP
    uniform sampler2D normalMap;
    uniform vec2 normalScale;
#endif
#if defined(USE_NORMAL_MAP) || defined(USE_CLEARCOAT_NORMALMAP)
    #if defined(USE_TANGENT) && !defined(FLAT_SHADED)
        #define USE_TBN
    #else
        #include <tsn>
    #endif
#endif`,nl=`
#ifdef FLAT_SHADED
    vec3 fdx = dFdx(v_modelPos);
    vec3 fdy = dFdy(v_modelPos);
    vec3 N = normalize(cross(fdx, fdy));
#else
    vec3 N = normalize(v_Normal);
    #ifdef DOUBLE_SIDED
        N = N * (float(gl_FrontFacing) * 2.0 - 1.0);
    #endif
#endif
#ifdef USE_TBN
	vec3 tangent = normalize(v_Tangent);
	vec3 bitangent = normalize(v_Bitangent);
	#ifdef DOUBLE_SIDED
		tangent = tangent * (float(gl_FrontFacing) * 2.0 - 1.0);
		bitangent = bitangent * (float(gl_FrontFacing) * 2.0 - 1.0);
	#endif
	mat3 tspace = mat3(tangent, bitangent, N);
#endif
vec3 geometryNormal = N;
#ifdef USE_NORMAL_MAP
    vec3 mapN = texture2D(normalMap, v_Uv).rgb * 2.0 - 1.0;
    mapN.xy *= normalScale;
    #ifdef USE_TBN
        N = normalize(tspace * mapN);
    #else
        mapN.xy *= (float(gl_FrontFacing) * 2.0 - 1.0);
        N = normalize(tsn(N, v_modelPos, v_Uv) * mapN);
    #endif
#elif defined(USE_BUMPMAP)
    N = perturbNormalArb(v_modelPos, N, dHdxy_fwd(v_Uv));
#endif
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D(clearcoatNormalMap, v_Uv).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TBN
		clearcoatNormal = normalize(tspace * clearcoatMapN);
	#else
		clearcoatMapN.xy *= (float(gl_FrontFacing) * 2.0 - 1.0);
		clearcoatNormal = normalize(tsn(clearcoatNormal, v_modelPos, v_Uv) * clearcoatMapN);
	#endif
#endif`,il=`#ifndef FLAT_SHADED
    varying vec3 v_Normal;
    #ifdef USE_TANGENT
        varying vec3 v_Tangent;
		varying vec3 v_Bitangent;
    #endif
#endif`,sl=`#ifndef FLAT_SHADED
    varying vec3 v_Normal;
    #ifdef USE_TANGENT
        varying vec3 v_Tangent;
		varying vec3 v_Bitangent;
    #endif
#endif`,rl=`#ifndef FLAT_SHADED
    v_Normal = (transposeMat4(inverseMat4(u_Model)) * vec4(objectNormal, 0.0)).xyz;
    #ifdef FLIP_SIDED
    	v_Normal = - v_Normal;
    #endif
    #ifdef USE_TANGENT
        v_Tangent = (transposeMat4(inverseMat4(u_Model)) * vec4(objectTangent, 0.0)).xyz;
        #ifdef FLIP_SIDED
            v_Tangent = - v_Tangent;
        #endif
        v_Bitangent = normalize(cross(v_Normal, v_Tangent) * a_Tangent.w);
    #endif
#endif`,al=`const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256.,  256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
    vec4 r = vec4( fract( v * PackFactors ), v );
    r.yzw -= r.xyz * ShiftRight8;    return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
    return dot( v, UnpackFactors );
}`,ol=`#ifdef USE_PREMULTIPLIED_ALPHA
    gl_FragColor.rgb = gl_FragColor.rgb * gl_FragColor.a;
#endif`,ll=`vec4 worldPosition = u_Model * vec4(transformed, 1.0);
gl_Position = u_ProjectionView * worldPosition;`,cl=`#if defined( DITHERING )
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ul=`#if defined( DITHERING )
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,hl=`#ifdef USE_SHADOW_SAMPLER
    float computeShadow(sampler2DShadow shadowMap, vec3 shadowCoord) {
        return texture2D( shadowMap, shadowCoord );
    }
#else
    float computeShadow(sampler2D shadowMap, vec3 shadowCoord) {
        return step(shadowCoord.z, unpackRGBAToDepth(texture2D(shadowMap, shadowCoord.xy)));
    }
#endif
float computeShadowWithPoissonSampling(sampler2DShadow shadowMap, vec3 shadowCoord, float texelSize) {
    vec3 poissonDisk[4];
    poissonDisk[0] = vec3(-0.94201624, -0.39906216, 0);
    poissonDisk[1] = vec3(0.94558609, -0.76890725, 0);
    poissonDisk[2] = vec3(-0.094184101, -0.92938870, 0);
    poissonDisk[3] = vec3(0.34495938, 0.29387760, 0);
    return computeShadow(shadowMap, shadowCoord + poissonDisk[0] * texelSize) * 0.25 +
        computeShadow(shadowMap, shadowCoord + poissonDisk[1] * texelSize) * 0.25 +
        computeShadow(shadowMap, shadowCoord + poissonDisk[2] * texelSize) * 0.25 +
        computeShadow(shadowMap, shadowCoord + poissonDisk[3] * texelSize) * 0.25;
}
float computeShadowWithPCF1(sampler2DShadow shadowSampler, vec3 shadowCoord) {
    return computeShadow(shadowSampler, shadowCoord);
}
float computeShadowWithPCF3(sampler2DShadow shadowSampler, vec3 shadowCoord, vec2 shadowMapSizeAndInverse) {
    vec2 uv = shadowCoord.xy * shadowMapSizeAndInverse.x;    uv += 0.5;    vec2 st = fract(uv);    vec2 base_uv = floor(uv) - 0.5;    base_uv *= shadowMapSizeAndInverse.y;
    vec2 uvw0 = 3. - 2. * st;
    vec2 uvw1 = 1. + 2. * st;
    vec2 u = vec2((2. - st.x) / uvw0.x - 1., st.x / uvw1.x + 1.) * shadowMapSizeAndInverse.y;
    vec2 v = vec2((2. - st.y) / uvw0.y - 1., st.y / uvw1.y + 1.) * shadowMapSizeAndInverse.y;
    float shadow = 0.;
    shadow += uvw0.x * uvw0.y * computeShadow(shadowSampler, vec3(base_uv.xy + vec2(u[0], v[0]), shadowCoord.z));
    shadow += uvw1.x * uvw0.y * computeShadow(shadowSampler, vec3(base_uv.xy + vec2(u[1], v[0]), shadowCoord.z));
    shadow += uvw0.x * uvw1.y * computeShadow(shadowSampler, vec3(base_uv.xy + vec2(u[0], v[1]), shadowCoord.z));
    shadow += uvw1.x * uvw1.y * computeShadow(shadowSampler, vec3(base_uv.xy + vec2(u[1], v[1]), shadowCoord.z));
    shadow = shadow / 16.;
    return shadow;
}
float computeShadowWithPCF5(sampler2DShadow shadowSampler, vec3 shadowCoord, vec2 shadowMapSizeAndInverse) {
    vec2 uv = shadowCoord.xy * shadowMapSizeAndInverse.x;    uv += 0.5;    vec2 st = fract(uv);    vec2 base_uv = floor(uv) - 0.5;    base_uv *= shadowMapSizeAndInverse.y;
    vec2 uvw0 = 4. - 3. * st;
    vec2 uvw1 = vec2(7.);
    vec2 uvw2 = 1. + 3. * st;
    vec3 u = vec3((3. - 2. * st.x) / uvw0.x - 2., (3. + st.x) / uvw1.x, st.x / uvw2.x + 2.) * shadowMapSizeAndInverse.y;
    vec3 v = vec3((3. - 2. * st.y) / uvw0.y - 2., (3. + st.y) / uvw1.y, st.y / uvw2.y + 2.) * shadowMapSizeAndInverse.y;
    float shadow = 0.;
    shadow += uvw0.x * uvw0.y * computeShadow(shadowSampler, vec3(base_uv.xy + vec2(u[0], v[0]), shadowCoord.z));
    shadow += uvw1.x * uvw0.y * computeShadow(shadowSampler, vec3(base_uv.xy + vec2(u[1], v[0]), shadowCoord.z));
    shadow += uvw2.x * uvw0.y * computeShadow(shadowSampler, vec3(base_uv.xy + vec2(u[2], v[0]), shadowCoord.z));
    shadow += uvw0.x * uvw1.y * computeShadow(shadowSampler, vec3(base_uv.xy + vec2(u[0], v[1]), shadowCoord.z));
    shadow += uvw1.x * uvw1.y * computeShadow(shadowSampler, vec3(base_uv.xy + vec2(u[1], v[1]), shadowCoord.z));
    shadow += uvw2.x * uvw1.y * computeShadow(shadowSampler, vec3(base_uv.xy + vec2(u[2], v[1]), shadowCoord.z));
    shadow += uvw0.x * uvw2.y * computeShadow(shadowSampler, vec3(base_uv.xy + vec2(u[0], v[2]), shadowCoord.z));
    shadow += uvw1.x * uvw2.y * computeShadow(shadowSampler, vec3(base_uv.xy + vec2(u[1], v[2]), shadowCoord.z));
    shadow += uvw2.x * uvw2.y * computeShadow(shadowSampler, vec3(base_uv.xy + vec2(u[2], v[2]), shadowCoord.z));
    shadow = shadow / 144.;
    return shadow;
}
float computeFallOff(float value, vec2 clipSpace, float frustumEdgeFalloff) {
    float mask = smoothstep(1.0 - frustumEdgeFalloff, 1.00000012, clamp(dot(clipSpace, clipSpace), 0., 1.));
    return mix(value, 1.0, mask);
}
float getShadow(sampler2DShadow shadowMap, vec4 shadowCoord, vec2 shadowMapSize, vec2 shadowBias, vec2 shadowParams) {
    shadowCoord.xyz /= shadowCoord.w;
    shadowCoord.z += shadowBias.x;
    bvec4 inFrustumVec = bvec4 (shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0);
    bool inFrustum = all(inFrustumVec);
    bvec2 frustumTestVec = bvec2(inFrustum, shadowCoord.z <= 1.0);
    bool frustumTest = all(frustumTestVec);
    float shadow = 1.0;
    if (frustumTest) {
        #ifdef USE_HARD_SHADOW
            shadow = computeShadow(shadowMap, shadowCoord.xyz);
        #else
            #ifdef USE_PCF3_SOFT_SHADOW
                vec2 shadowMapSizeAndInverse = vec2(shadowMapSize.x, 1. / shadowMapSize.x);
                shadow = computeShadowWithPCF3(shadowMap, shadowCoord.xyz, shadowMapSizeAndInverse);
            #else
                #ifdef USE_PCF5_SOFT_SHADOW
                    vec2 shadowMapSizeAndInverse = vec2(shadowMapSize.x, 1. / shadowMapSize.x);
                    shadow = computeShadowWithPCF5(shadowMap, shadowCoord.xyz, shadowMapSizeAndInverse);
                #else
                    float texelSize = shadowParams.x * 0.5 / shadowMapSize.x;
                    shadow = computeShadowWithPoissonSampling(shadowMap, shadowCoord.xyz, texelSize);
                #endif
            #endif
        #endif
        shadow = computeFallOff(shadow, shadowCoord.xy * 2. - 1., shadowParams.y);
    }
    return shadow;
}
float textureCubeCompare(samplerCube depths, vec3 uv, float compare) {
    return step(compare, unpackRGBAToDepth(textureCube(depths, uv)));
}
float getPointShadow(samplerCube shadowMap, vec4 shadowCoord, vec2 shadowMapSize, vec2 shadowBias, vec2 shadowParams, vec2 shadowCameraRange) {
    vec3 V = shadowCoord.xyz;
    float depth = (length(V) - shadowCameraRange.x) / (shadowCameraRange.y - shadowCameraRange.x);    depth += shadowBias.x;
    #ifdef USE_HARD_SHADOW
        return textureCubeCompare(shadowMap, normalize(V), depth);
    #else
        float texelSize = shadowParams.x * 0.5 / shadowMapSize.x;
        vec3 poissonDisk[4];
        poissonDisk[0] = vec3(-1.0, 1.0, -1.0);
        poissonDisk[1] = vec3(1.0, -1.0, -1.0);
        poissonDisk[2] = vec3(-1.0, -1.0, -1.0);
        poissonDisk[3] = vec3(1.0, -1.0, 1.0);
        return textureCubeCompare(shadowMap, normalize(V) + poissonDisk[0] * texelSize, depth) * 0.25 +
            textureCubeCompare(shadowMap, normalize(V) + poissonDisk[1] * texelSize, depth) * 0.25 +
            textureCubeCompare(shadowMap, normalize(V) + poissonDisk[2] * texelSize, depth) * 0.25 +
            textureCubeCompare(shadowMap, normalize(V) + poissonDisk[3] * texelSize, depth) * 0.25;
    #endif
}
#ifdef USE_PCSS_SOFT_SHADOW
    const vec3 PoissonSamplers32[64] = vec3[64](
        vec3(0.06407013, 0.05409927, 0.),
        vec3(0.7366577, 0.5789394, 0.),
        vec3(-0.6270542, -0.5320278, 0.),
        vec3(-0.4096107, 0.8411095, 0.),
        vec3(0.6849564, -0.4990818, 0.),
        vec3(-0.874181, -0.04579735, 0.),
        vec3(0.9989998, 0.0009880066, 0.),
        vec3(-0.004920578, -0.9151649, 0.),
        vec3(0.1805763, 0.9747483, 0.),
        vec3(-0.2138451, 0.2635818, 0.),
        vec3(0.109845, 0.3884785, 0.),
        vec3(0.06876755, -0.3581074, 0.),
        vec3(0.374073, -0.7661266, 0.),
        vec3(0.3079132, -0.1216763, 0.),
        vec3(-0.3794335, -0.8271583, 0.),
        vec3(-0.203878, -0.07715034, 0.),
        vec3(0.5912697, 0.1469799, 0.),
        vec3(-0.88069, 0.3031784, 0.),
        vec3(0.5040108, 0.8283722, 0.),
        vec3(-0.5844124, 0.5494877, 0.),
        vec3(0.6017799, -0.1726654, 0.),
        vec3(-0.5554981, 0.1559997, 0.),
        vec3(-0.3016369, -0.3900928, 0.),
        vec3(-0.5550632, -0.1723762, 0.),
        vec3(0.925029, 0.2995041, 0.),
        vec3(-0.2473137, 0.5538505, 0.),
        vec3(0.9183037, -0.2862392, 0.),
        vec3(0.2469421, 0.6718712, 0.),
        vec3(0.3916397, -0.4328209, 0.),
        vec3(-0.03576927, -0.6220032, 0.),
        vec3(-0.04661255, 0.7995201, 0.),
        vec3(0.4402924, 0.3640312, 0.),
        vec3(0., 0., 0.),
        vec3(0., 0., 0.),
        vec3(0., 0., 0.),
        vec3(0., 0., 0.),
        vec3(0., 0., 0.),
        vec3(0., 0., 0.),
        vec3(0., 0., 0.),
        vec3(0., 0., 0.),
        vec3(0., 0., 0.),
        vec3(0., 0., 0.),
        vec3(0., 0., 0.),
        vec3(0., 0., 0.),
        vec3(0., 0., 0.),
        vec3(0., 0., 0.),
        vec3(0., 0., 0.),
        vec3(0., 0., 0.),
        vec3(0., 0., 0.),
        vec3(0., 0., 0.),
        vec3(0., 0., 0.),
        vec3(0., 0., 0.),
        vec3(0., 0., 0.),
        vec3(0., 0., 0.),
        vec3(0., 0., 0.),
        vec3(0., 0., 0.),
        vec3(0., 0., 0.),
        vec3(0., 0., 0.),
        vec3(0., 0., 0.),
        vec3(0., 0., 0.),
        vec3(0., 0., 0.),
        vec3(0., 0., 0.),
        vec3(0., 0., 0.),
        vec3(0., 0., 0.)
    );
    const vec3 PoissonSamplers64[64] = vec3[64](
        vec3(-0.613392, 0.617481, 0.),
        vec3(0.170019, -0.040254, 0.),
        vec3(-0.299417, 0.791925, 0.),
        vec3(0.645680, 0.493210, 0.),
        vec3(-0.651784, 0.717887, 0.),
        vec3(0.421003, 0.027070, 0.),
        vec3(-0.817194, -0.271096, 0.),
        vec3(-0.705374, -0.668203, 0.),
        vec3(0.977050, -0.108615, 0.),
        vec3(0.063326, 0.142369, 0.),
        vec3(0.203528, 0.214331, 0.),
        vec3(-0.667531, 0.326090, 0.),
        vec3(-0.098422, -0.295755, 0.),
        vec3(-0.885922, 0.215369, 0.),
        vec3(0.566637, 0.605213, 0.),
        vec3(0.039766, -0.396100, 0.),
        vec3(0.751946, 0.453352, 0.),
        vec3(0.078707, -0.715323, 0.),
        vec3(-0.075838, -0.529344, 0.),
        vec3(0.724479, -0.580798, 0.),
        vec3(0.222999, -0.215125, 0.),
        vec3(-0.467574, -0.405438, 0.),
        vec3(-0.248268, -0.814753, 0.),
        vec3(0.354411, -0.887570, 0.),
        vec3(0.175817, 0.382366, 0.),
        vec3(0.487472, -0.063082, 0.),
        vec3(-0.084078, 0.898312, 0.),
        vec3(0.488876, -0.783441, 0.),
        vec3(0.470016, 0.217933, 0.),
        vec3(-0.696890, -0.549791, 0.),
        vec3(-0.149693, 0.605762, 0.),
        vec3(0.034211, 0.979980, 0.),
        vec3(0.503098, -0.308878, 0.),
        vec3(-0.016205, -0.872921, 0.),
        vec3(0.385784, -0.393902, 0.),
        vec3(-0.146886, -0.859249, 0.),
        vec3(0.643361, 0.164098, 0.),
        vec3(0.634388, -0.049471, 0.),
        vec3(-0.688894, 0.007843, 0.),
        vec3(0.464034, -0.188818, 0.),
        vec3(-0.440840, 0.137486, 0.),
        vec3(0.364483, 0.511704, 0.),
        vec3(0.034028, 0.325968, 0.),
        vec3(0.099094, -0.308023, 0.),
        vec3(0.693960, -0.366253, 0.),
        vec3(0.678884, -0.204688, 0.),
        vec3(0.001801, 0.780328, 0.),
        vec3(0.145177, -0.898984, 0.),
        vec3(0.062655, -0.611866, 0.),
        vec3(0.315226, -0.604297, 0.),
        vec3(-0.780145, 0.486251, 0.),
        vec3(-0.371868, 0.882138, 0.),
        vec3(0.200476, 0.494430, 0.),
        vec3(-0.494552, -0.711051, 0.),
        vec3(0.612476, 0.705252, 0.),
        vec3(-0.578845, -0.768792, 0.),
        vec3(-0.772454, -0.090976, 0.),
        vec3(0.504440, 0.372295, 0.),
        vec3(0.155736, 0.065157, 0.),
        vec3(0.391522, 0.849605, 0.),
        vec3(-0.620106, -0.328104, 0.),
        vec3(0.789239, -0.419965, 0.),
        vec3(-0.545396, 0.538133, 0.),
        vec3(-0.178564, -0.596057, 0.)
    );
    float getRand(vec2 seed) {
        return fract(sin(dot(seed.xy ,vec2(12.9898,78.233))) * 43758.5453);
    }
    float computeShadowWithPCSS(sampler2D depthSampler, sampler2DShadow shadowSampler, vec3 shadowCoord, float shadowMapSizeInverse, float lightSizeUV, int searchTapCount, int pcfTapCount, vec3[64] poissonSamplers) {
        float depthMetric = shadowCoord.z;
        float blockerDepth = 0.0;
        float sumBlockerDepth = 0.0;
        float numBlocker = 0.0;
        for (int i = 0; i < searchTapCount; i++) {
            blockerDepth = unpackRGBAToDepth(texture(depthSampler, shadowCoord.xy + (lightSizeUV * shadowMapSizeInverse * PoissonSamplers32[i].xy)));
            if (blockerDepth < depthMetric) {
                sumBlockerDepth += blockerDepth;
                numBlocker++;
            }
        }
        if (numBlocker < 1.0) {
            return 1.0;
        }
        float avgBlockerDepth = sumBlockerDepth / numBlocker;
        float AAOffset = shadowMapSizeInverse * 10.;
        float penumbraRatio = ((depthMetric - avgBlockerDepth) + AAOffset);
        float filterRadius = penumbraRatio * lightSizeUV * shadowMapSizeInverse;
        float random = getRand(shadowCoord.xy);        float rotationAngle = random * 3.1415926;
        vec2 rotationVector = vec2(cos(rotationAngle), sin(rotationAngle));
        float shadow = 0.;
        for (int i = 0; i < pcfTapCount; i++) {
            vec3 offset = poissonSamplers[i];
            offset = vec3(offset.x * rotationVector.x - offset.y * rotationVector.y, offset.y * rotationVector.x + offset.x * rotationVector.y, 0.);
            shadow += texture(shadowSampler, shadowCoord + offset * filterRadius);
        }
        shadow /= float(pcfTapCount);
        shadow = mix(shadow, 1., depthMetric - avgBlockerDepth);
        return shadow;
    }
    float getShadowWithPCSS(sampler2D depthSampler, sampler2DShadow shadowMap, vec4 shadowCoord, vec2 shadowMapSize, vec2 shadowBias, vec2 shadowParams) {
        shadowCoord.xyz /= shadowCoord.w;
        shadowCoord.z += shadowBias.x;
        bvec4 inFrustumVec = bvec4 (shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0);
        bool inFrustum = all(inFrustumVec);
        bvec2 frustumTestVec = bvec2(inFrustum, shadowCoord.z <= 1.0);
        bool frustumTest = all(frustumTestVec);
        float shadow = 1.0;
        if (frustumTest) {
            #ifdef USE_PCSS16_SOFT_SHADOW
                shadow = computeShadowWithPCSS(depthSampler, shadowMap, shadowCoord.xyz, 1. / shadowMapSize.x, 0.1 * shadowMapSize.x, 16, 16, PoissonSamplers32);
            #else
                #ifdef USE_PCSS32_SOFT_SHADOW
                    shadow = computeShadowWithPCSS(depthSampler, shadowMap, shadowCoord.xyz, 1. / shadowMapSize.x, 0.1 * shadowMapSize.x, 16, 32, PoissonSamplers32);
                #else
                    shadow = computeShadowWithPCSS(depthSampler, shadowMap, shadowCoord.xyz, 1. / shadowMapSize.x, 0.1 * shadowMapSize.x, 32, 64, PoissonSamplers64);
                #endif
            #endif
            shadow = computeFallOff(shadow, shadowCoord.xy * 2. - 1., shadowParams.y);
        }
        return shadow;
    }
#endif`,fl=`#ifdef USE_SHADOW
#endif`,dl=`#ifdef USE_SHADOW
	#if NUM_DIR_SHADOWS > 0
		uniform sampler2DShadow directionalShadowMap[NUM_DIR_SHADOWS];
		varying vec4 vDirectionalShadowCoord[NUM_DIR_SHADOWS];
		#ifdef USE_PCSS_SOFT_SHADOW
			uniform sampler2D directionalDepthMap[NUM_DIR_SHADOWS];
		#endif
		struct DirectLightShadow {
			vec2 shadowBias;
			vec2 shadowMapSize;
			vec2 shadowParams;
		};
		uniform DirectLightShadow u_DirectionalShadow[NUM_DIR_SHADOWS];
	#endif
	#if NUM_POINT_SHADOWS > 0
		uniform samplerCube pointShadowMap[NUM_POINT_SHADOWS];
		varying vec4 vPointShadowCoord[NUM_POINT_SHADOWS];
		struct PointLightShadow {
			vec2 shadowBias;
			vec2 shadowMapSize;
			vec2 shadowParams;
			vec2 shadowCameraRange;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow u_PointShadow[NUM_POINT_SHADOWS];
	#endif
	#if NUM_SPOT_SHADOWS > 0
		uniform sampler2DShadow spotShadowMap[NUM_SPOT_SHADOWS];
		varying vec4 vSpotShadowCoord[NUM_SPOT_SHADOWS];
		#ifdef USE_PCSS_SOFT_SHADOW
			uniform sampler2D spotDepthMap[NUM_SPOT_SHADOWS];
		#endif
		struct SpotLightShadow {
			vec2 shadowBias;
			vec2 shadowMapSize;
			vec2 shadowParams;
		};
		uniform SpotLightShadow u_SpotShadow[NUM_SPOT_SHADOWS];
	#endif
	#include <packing>
	#include <shadow>
#endif`,_l=`#ifdef USE_SHADOW
	#if NUM_DIR_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[NUM_DIR_SHADOWS];
		varying vec4 vDirectionalShadowCoord[NUM_DIR_SHADOWS];
		struct DirectLightShadow {
			vec2 shadowBias;
			vec2 shadowMapSize;
			vec2 shadowParams;
		};
		uniform DirectLightShadow u_DirectionalShadow[NUM_DIR_SHADOWS];
	#endif
	#if NUM_POINT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[NUM_POINT_SHADOWS];
		varying vec4 vPointShadowCoord[NUM_POINT_SHADOWS];
		struct PointLightShadow {
			vec2 shadowBias;
			vec2 shadowMapSize;
			vec2 shadowParams;
			vec2 shadowCameraRange;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow u_PointShadow[NUM_POINT_SHADOWS];
	#endif
	#if NUM_SPOT_SHADOWS > 0
		uniform mat4 spotShadowMatrix[NUM_SPOT_SHADOWS];
		varying vec4 vSpotShadowCoord[NUM_SPOT_SHADOWS];
		struct SpotLightShadow {
			vec2 shadowBias;
			vec2 shadowMapSize;
			vec2 shadowParams;
		};
		uniform SpotLightShadow u_SpotShadow[NUM_SPOT_SHADOWS];
	#endif
#endif`,pl=`
#ifdef USE_SHADOW
	#if NUM_DIR_SHADOWS > 0 || NUM_POINT_SHADOWS > 0 || NUM_SPOT_SHADOWS > 0
		vec3 shadowWorldNormal = (transposeMat4(inverseMat4(u_Model)) * vec4(objectNormal, 0.0)).xyz;
		shadowWorldNormal = normalize(shadowWorldNormal);
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_SHADOWS > 0
		#pragma unroll_loop_start
		for (int i = 0; i < NUM_DIR_SHADOWS; i++) {
			shadowWorldPosition = worldPosition + vec4(shadowWorldNormal * u_DirectionalShadow[i].shadowBias[1], 0);
			vDirectionalShadowCoord[i] = directionalShadowMatrix[i] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_SHADOWS > 0
		#pragma unroll_loop_start
		for (int i = 0; i < NUM_POINT_SHADOWS; i++) {
			shadowWorldPosition = worldPosition + vec4(shadowWorldNormal * u_PointShadow[i].shadowBias[1], 0);
			vPointShadowCoord[i] = pointShadowMatrix[i] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_SHADOWS > 0
		#pragma unroll_loop_start
		for (int i = 0; i < NUM_SPOT_SHADOWS; i++) {
			shadowWorldPosition = worldPosition + vec4(shadowWorldNormal * u_SpotShadow[i].shadowBias[1], 0);
			vSpotShadowCoord[i] = spotShadowMatrix[i] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif`,ml=`#ifdef USE_MORPHNORMALS
	objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
	objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
	objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
	objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
#endif`,gl=`#ifdef USE_MORPHTARGETS
	#ifndef USE_MORPHNORMALS
	uniform float morphTargetInfluences[ 8 ];
	#else
	uniform float morphTargetInfluences[ 4 ];
	#endif
#endif`,xl=`#ifdef USE_MORPHTARGETS
	transformed += morphTarget0 * morphTargetInfluences[ 0 ];
	transformed += morphTarget1 * morphTargetInfluences[ 1 ];
	transformed += morphTarget2 * morphTargetInfluences[ 2 ];
	transformed += morphTarget3 * morphTargetInfluences[ 3 ];
	#ifndef USE_MORPHNORMALS
        transformed += morphTarget4 * morphTargetInfluences[ 4 ];
        transformed += morphTarget5 * morphTargetInfluences[ 5 ];
        transformed += morphTarget6 * morphTargetInfluences[ 6 ];
        transformed += morphTarget7 * morphTargetInfluences[ 7 ];
	#endif
#endif`,Tl=`#ifdef USE_SKINNING
    attribute vec4 skinIndex;
	attribute vec4 skinWeight;
    uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
    #ifdef BONE_TEXTURE
        uniform sampler2D boneTexture;
        uniform int boneTextureSize;
        mat4 getBoneMatrix( const in float i ) {
            float j = i * 4.0;
            float x = mod( j, float( boneTextureSize ) );
            float y = floor( j / float( boneTextureSize ) );
            float dx = 1.0 / float( boneTextureSize );
            float dy = 1.0 / float( boneTextureSize );
            y = dy * ( y + 0.5 );
            vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
            vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
            vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
            vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
            mat4 bone = mat4( v1, v2, v3, v4 );
            return bone;
        }
    #else
        uniform mat4 boneMatrices[MAX_BONES];
        mat4 getBoneMatrix(const in float i) {
            mat4 bone = boneMatrices[int(i)];
            return bone;
        }
    #endif
#endif`,Al=`#ifdef USE_SKINNING
    mat4 boneMatX = getBoneMatrix( skinIndex.x );
    mat4 boneMatY = getBoneMatrix( skinIndex.y );
    mat4 boneMatZ = getBoneMatrix( skinIndex.z );
    mat4 boneMatW = getBoneMatrix( skinIndex.w );
    vec4 skinVertex = bindMatrix * vec4(transformed, 1.0);
    vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	skinned = bindMatrixInverse * skinned;
    transformed = skinned.xyz / skinned.w;
#endif`,vl=`#ifdef USE_SKINNING
    mat4 skinMatrix = mat4( 0.0 );
    skinMatrix += skinWeight.x * boneMatX;
    skinMatrix += skinWeight.y * boneMatY;
    skinMatrix += skinWeight.z * boneMatZ;
    skinMatrix += skinWeight.w * boneMatW;
    skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
    objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
    #ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,El=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, v_Uv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Sl=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,yl=`mat4 transposeMat4(mat4 inMatrix) {
    vec4 i0 = inMatrix[0];
    vec4 i1 = inMatrix[1];
    vec4 i2 = inMatrix[2];
    vec4 i3 = inMatrix[3];
    mat4 outMatrix = mat4(
        vec4(i0.x, i1.x, i2.x, i3.x),
        vec4(i0.y, i1.y, i2.y, i3.y),
        vec4(i0.z, i1.z, i2.z, i3.z),
        vec4(i0.w, i1.w, i2.w, i3.w)
    );
    return outMatrix;
}`,Ml=`mat3 tsn(vec3 N, vec3 V, vec2 uv) {
    vec3 q0 = dFdx(V.xyz);
    vec3 q1 = dFdy(V.xyz);
    vec2 st0 = dFdx(uv.xy);
    vec2 st1 = dFdy(uv.xy);
    float scale = sign(st1.y * st0.x - st0.y * st1.x);
    vec3 S = normalize((q0 * st1.y - q1 * st0.y) * scale);
    vec3 T = normalize((-q0 * st1.x + q1 * st0.x) * scale);
    return mat3(S, T, N);
}`,Pl=`#ifdef USE_UV1
    varying vec2 v_Uv;
#endif
#ifdef USE_UV2
    varying vec2 v_Uv2;
#endif`,Cl=`#if defined(USE_UV1) || defined(USE_UV2)
    uniform mat3 uvTransform;
#endif
#ifdef USE_UV1
    attribute vec2 a_Uv;
    varying vec2 v_Uv;
#endif
#ifdef USE_UV2
    attribute vec2 a_Uv2;
    varying vec2 v_Uv2;
#endif`,Ll=`#ifdef USE_UV1
    v_Uv = (uvTransform * vec3(a_Uv, 1.)).xy;
#endif
#ifdef USE_UV2
    v_Uv2 = (uvTransform * vec3(a_Uv2, 1.)).xy;
#endif`,wl="varying vec3 v_modelPos;",bl="varying vec3 v_modelPos;",Rl=`
v_modelPos = worldPosition.xyz;`,Nl=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Fl=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Dl=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		uniform float logDepthCameraNear;
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
		uniform float logDepthCameraNear;
	#endif
#endif`,Il=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w - logDepthCameraNear;
		vIsPerspective = float( isPerspectiveMatrix( u_Projection ) );
	#else
		if ( isPerspectiveMatrix( u_Projection ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w - logDepthCameraNear + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Ul=`#ifdef USE_CLEARCOAT
	uniform float u_Clearcoat;
	uniform float u_ClearcoatRoughness;
#endif
#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`;const ki={alphaTest_frag:mo,aoMap_pars_frag:go,aoMap_pars_vert:xo,aoMap_vert:To,aoMap_frag:Ao,begin_frag:vo,begin_vert:Eo,bsdfs:So,bumpMap_pars_frag:yo,clippingPlanes_frag:Mo,clippingPlanes_pars_frag:Po,color_frag:Co,color_pars_frag:Lo,color_pars_vert:wo,color_vert:bo,common_frag:Ro,common_vert:No,diffuseMap_frag:Fo,diffuseMap_pars_frag:Do,emissiveMap_frag:Io,emissiveMap_pars_frag:Uo,emissiveMap_vert:Oo,emissiveMap_pars_vert:Bo,encodings_frag:zo,encodings_pars_frag:Go,end_frag:ko,envMap_frag:Ho,envMap_pars_frag:Xo,envMap_pars_vert:Vo,envMap_vert:Wo,fog_frag:Qo,fog_pars_frag:Yo,inverse:jo,light_frag:qo,light_pars_frag:Zo,alphamap_pars_frag:Ko,alphamap_frag:$o,alphamap_pars_vert:Jo,alphamap_vert:el,normalMap_pars_frag:tl,normal_frag:nl,normal_pars_frag:il,normal_pars_vert:sl,normal_vert:rl,packing:al,premultipliedAlpha_frag:ol,pvm_vert:ll,dithering_frag:cl,dithering_pars_frag:ul,shadow:hl,shadowMap_frag:fl,shadowMap_pars_frag:dl,shadowMap_pars_vert:_l,shadowMap_vert:pl,morphnormal_vert:ml,morphtarget_pars_vert:gl,morphtarget_vert:xl,skinning_pars_vert:Tl,skinning_vert:Al,skinnormal_vert:vl,specularMap_frag:El,specularMap_pars_frag:Sl,transpose:yl,tsn:Ml,uv_pars_frag:Pl,uv_pars_vert:Cl,uv_vert:Ll,modelPos_pars_frag:wl,modelPos_pars_vert:bl,modelPos_vert:Rl,logdepthbuf_frag:Nl,logdepthbuf_pars_frag:Fl,logdepthbuf_pars_vert:Dl,logdepthbuf_vert:Il,clearcoat_pars_frag:Ul};var Ol=`#include <common_frag>
#include <uv_pars_frag>
#include <color_pars_frag>
#include <diffuseMap_pars_frag>
#include <alphamap_pars_frag>
#include <modelPos_pars_frag>
#if defined(USE_ENV_MAP) && !defined(USE_VERTEX_ENVDIR)
    #include <normalMap_pars_frag>
    #include <normal_pars_frag>    
#endif
#include <envMap_pars_frag>
#include <aoMap_pars_frag>
#include <fog_pars_frag>
#include <logdepthbuf_pars_frag>
#include <clippingPlanes_pars_frag>
void main() {
    #include <clippingPlanes_frag>
    #include <logdepthbuf_frag>
    #include <begin_frag>
    #include <color_frag>
    #include <diffuseMap_frag>
    #include <alphamap_frag>
    #include <alphaTest_frag>
    ReflectedLight reflectedLight = ReflectedLight(vec3(0.0), vec3(0.0), vec3(0.0), vec3(0.0));
    reflectedLight.indirectDiffuse += vec3(1.0);
    #include <aoMap_frag>
    reflectedLight.indirectDiffuse *= outColor.xyz;
    outColor.xyz = reflectedLight.indirectDiffuse;
    #if defined(USE_ENV_MAP) && !defined(USE_VERTEX_ENVDIR)
        #include <normal_frag>
    #endif
    #include <envMap_frag>
    #include <end_frag>
    #include <encodings_frag>
    #include <premultipliedAlpha_frag>
    #include <fog_frag>
}`,Bl=`#include <common_vert>
#include <uv_pars_vert>
#include <color_pars_vert>
#include <modelPos_pars_vert>
#if defined(USE_ENV_MAP) && !defined(USE_VERTEX_ENVDIR)
    #include <normal_pars_vert>
#endif
#include <envMap_pars_vert>
#include <aoMap_pars_vert>
#include <alphamap_pars_vert>
#include <morphtarget_pars_vert>
#include <skinning_pars_vert>
#include <logdepthbuf_pars_vert>
void main() {
    #include <begin_vert>
    #include <morphtarget_vert>
    #include <skinning_vert>
    #include <pvm_vert>
    #include <logdepthbuf_vert>
    #include <uv_vert>
    #include <color_vert>
    #include <modelPos_vert>
    #ifdef USE_ENV_MAP
        #include <morphnormal_vert>
        #include <skinnormal_vert>
        #ifndef USE_VERTEX_ENVDIR
            #include <normal_vert>
        #endif  
    #endif
    #include <envMap_vert>
    #include <aoMap_vert>
    #include <alphamap_vert>
}`,zl=`#include <common_frag>
#include <diffuseMap_pars_frag>
#include <modelPos_pars_frag>
#include <uv_pars_frag>
#include <packing>
#include <logdepthbuf_pars_frag>
#include <clippingPlanes_pars_frag>
void main() {
    #include <clippingPlanes_frag>
    #if defined(USE_DIFFUSE_MAP) && defined(ALPHATEST)
        vec4 texelColor = texture2D( diffuseMap, v_Uv );
        float alpha = texelColor.a * u_Opacity;
        if(alpha < ALPHATEST) discard;
    #endif
    #include <logdepthbuf_frag>
    
    #ifdef DEPTH_PACKING_RGBA
        gl_FragColor = packDepthToRGBA(gl_FragCoord.z);
    #else
        gl_FragColor = vec4( vec3( 1.0 - gl_FragCoord.z ), u_Opacity );
    #endif
}`,Gl=`#include <common_vert>
#include <morphtarget_pars_vert>
#include <skinning_pars_vert>
#include <uv_pars_vert>
#include <modelPos_pars_vert>
#include <logdepthbuf_pars_vert>
void main() {
    #include <uv_vert>
    #include <begin_vert>
    #include <morphtarget_vert>
    #include <skinning_vert>
    #include <pvm_vert>
    #include <logdepthbuf_vert>
    #include <modelPos_vert>
}`,kl=`#include <common_frag>
uniform float nearDistance;
uniform float farDistance;
#include <modelPos_pars_frag>
#include <packing>
#include <clippingPlanes_pars_frag>
void main() {
    #include <clippingPlanes_frag>
    
    float dist = length( v_modelPos - u_CameraPosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
    gl_FragColor = packDepthToRGBA(dist);
}`,Hl=`#include <common_vert>
#include <modelPos_pars_vert>
#include <morphtarget_pars_vert>
#include <skinning_pars_vert>
void main() {
    #include <begin_vert>
    #include <morphtarget_vert>
    #include <skinning_vert>
    #include <pvm_vert>
    #include <modelPos_vert>
}`,Xl=`#define USE_LAMBERT
#include <common_frag>
#include <dithering_pars_frag>
uniform vec3 emissive;
#include <uv_pars_frag>
#include <color_pars_frag>
#include <diffuseMap_pars_frag>
#include <normalMap_pars_frag>
#include <alphamap_pars_frag>
#include <bumpMap_pars_frag>
#include <light_pars_frag>
#include <normal_pars_frag>
#include <modelPos_pars_frag>
#include <bsdfs>
#include <envMap_pars_frag>
#include <aoMap_pars_frag>
#include <shadowMap_pars_frag>
#include <fog_pars_frag>
#include <emissiveMap_pars_frag>
#include <logdepthbuf_pars_frag>
#include <clippingPlanes_pars_frag>
void main() {
    #include <clippingPlanes_frag>
    #include <logdepthbuf_frag>
    #include <begin_frag>
    #include <color_frag>
    #include <diffuseMap_frag>
    #include <alphamap_frag>
    #include <alphaTest_frag>
    #include <normal_frag>
    ReflectedLight reflectedLight = ReflectedLight(vec3(0.0), vec3(0.0), vec3(0.0), vec3(0.0));
    #include <light_frag>
    #include <aoMap_frag>
    outColor.xyz = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
    #include <envMap_frag>
    #include <shadowMap_frag>
    vec3 totalEmissiveRadiance = emissive;
    #include <emissiveMap_frag>
    outColor.xyz += totalEmissiveRadiance;
    #include <end_frag>
    #include <encodings_frag>
    #include <premultipliedAlpha_frag>
    #include <fog_frag>
    #include <dithering_frag>
}`,Vl=`#define USE_LAMBERT
#include <common_vert>
#include <normal_pars_vert>
#include <uv_pars_vert>
#include <color_pars_vert>
#include <modelPos_pars_vert>
#include <envMap_pars_vert>
#include <aoMap_pars_vert>
#include <alphamap_pars_vert>
#include <emissiveMap_pars_vert>
#include <shadowMap_pars_vert>
#include <morphtarget_pars_vert>
#include <skinning_pars_vert>
#include <logdepthbuf_pars_vert>
void main() {
    #include <begin_vert>
    #include <morphtarget_vert>
    #include <morphnormal_vert>
    #include <skinning_vert>
    #include <skinnormal_vert>
    #include <pvm_vert>
    #include <normal_vert>
    #include <logdepthbuf_vert>
    #include <uv_vert>
    #include <color_vert>
    #include <modelPos_vert>
    #include <envMap_vert>
    #include <aoMap_vert>
    #include <alphamap_vert>
    #include <emissiveMap_vert>
    #include <shadowMap_vert>
}`,Wl=`#include <common_frag>
#include <diffuseMap_pars_frag>
#include <uv_pars_frag>
#include <packing>
#include <normal_pars_frag>
#include <logdepthbuf_pars_frag>
void main() {
    #if defined(USE_DIFFUSE_MAP) && defined(ALPHATEST)
        vec4 texelColor = texture2D( diffuseMap, v_Uv );
        float alpha = texelColor.a * u_Opacity;
        if(alpha < ALPHATEST) discard;
    #endif
    #include <logdepthbuf_frag>
    vec4 packedNormalDepth;
    packedNormalDepth.xyz = normalize(v_Normal) * 0.5 + 0.5;
    packedNormalDepth.w = gl_FragCoord.z;
    gl_FragColor = packedNormalDepth;
}`,Ql=`#include <common_vert>
#include <morphtarget_pars_vert>
#include <skinning_pars_vert>
#include <normal_pars_vert>
#include <uv_pars_vert>
#include <logdepthbuf_pars_vert>
void main() {
    #include <uv_vert>
    #include <begin_vert>
    #include <morphtarget_vert>
    #include <morphnormal_vert>
    #include <skinning_vert>
    #include <skinnormal_vert>
    #include <normal_vert>
    #include <pvm_vert>
    #include <logdepthbuf_vert>
}`,Yl=`#define USE_PBR
#include <common_frag>
#include <dithering_pars_frag>
uniform float u_Metalness;
#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif
uniform float u_Roughness;
#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif
uniform vec3 emissive;
#include <uv_pars_frag>
#include <color_pars_frag>
#include <diffuseMap_pars_frag>
#include <alphamap_pars_frag>
#include <normalMap_pars_frag>
#include <bumpMap_pars_frag>
#include <envMap_pars_frag>
#include <aoMap_pars_frag>
#include <light_pars_frag>
#include <normal_pars_frag>
#include <clearcoat_pars_frag>
#include <modelPos_pars_frag>
#include <bsdfs>
#include <shadowMap_pars_frag>
#include <fog_pars_frag>
#include <emissiveMap_pars_frag>
#include <logdepthbuf_pars_frag>
#include <clippingPlanes_pars_frag>
void main() {
    #include <clippingPlanes_frag>
    #include <logdepthbuf_frag>
    #include <begin_frag>
    #include <color_frag>
    #include <diffuseMap_frag>
    #include <alphamap_frag>
    #include <alphaTest_frag>
    #include <normal_frag>
    float roughnessFactor = u_Roughness;
    #ifdef USE_ROUGHNESSMAP
    	vec4 texelRoughness = texture2D( roughnessMap, v_Uv );
    	roughnessFactor *= texelRoughness.g;
    #endif
    float metalnessFactor = u_Metalness;
    #ifdef USE_METALNESSMAP
    	vec4 texelMetalness = texture2D( metalnessMap, v_Uv );
    	metalnessFactor *= texelMetalness.b;
    #endif
    ReflectedLight reflectedLight = ReflectedLight(vec3(0.0), vec3(0.0), vec3(0.0), vec3(0.0));
    #include <light_frag>
    #include <aoMap_frag>
    outColor.xyz = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular;
    #include <shadowMap_frag>
    vec3 totalEmissiveRadiance = emissive;
    #include <emissiveMap_frag>
    outColor.xyz += totalEmissiveRadiance;
    #include <end_frag>
    #include <encodings_frag>
    #include <premultipliedAlpha_frag>
    #include <fog_frag>
    #include <dithering_frag>
}`,jl=`#define USE_PBR
#define USE_PBR2
#include <common_frag>
#include <dithering_pars_frag>
uniform vec3 u_SpecularColor;
#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif
uniform float glossiness;
#ifdef USE_GLOSSINESSMAP
	uniform sampler2D glossinessMap;
#endif
uniform vec3 emissive;
#include <uv_pars_frag>
#include <color_pars_frag>
#include <diffuseMap_pars_frag>
#include <alphamap_pars_frag>
#include <normalMap_pars_frag>
#include <bumpMap_pars_frag>
#include <envMap_pars_frag>
#include <aoMap_pars_frag>
#include <light_pars_frag>
#include <normal_pars_frag>
#include <modelPos_pars_frag>
#include <bsdfs>
#include <shadowMap_pars_frag>
#include <fog_pars_frag>
#include <emissiveMap_pars_frag>
#include <logdepthbuf_pars_frag>
#include <clippingPlanes_pars_frag>
void main() {
    #include <clippingPlanes_frag>
    #include <logdepthbuf_frag>
    #include <begin_frag>
    #include <color_frag>
    #include <diffuseMap_frag>
    #include <alphamap_frag>
    #include <alphaTest_frag>
    #include <normal_frag>
    vec3 specularFactor = u_SpecularColor;
    #ifdef USE_SPECULARMAP
        vec4 texelSpecular = texture2D(specularMap, v_Uv);
        texelSpecular = sRGBToLinear(texelSpecular);
        specularFactor *= texelSpecular.rgb;
    #endif
    float glossinessFactor = glossiness;
    #ifdef USE_GLOSSINESSMAP
        vec4 texelGlossiness = texture2D(glossinessMap, v_Uv);
        glossinessFactor *= texelGlossiness.a;
    #endif
    ReflectedLight reflectedLight = ReflectedLight(vec3(0.0), vec3(0.0), vec3(0.0), vec3(0.0));
    #include <light_frag>
    #include <aoMap_frag>
    outColor.xyz = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular;
    #include <shadowMap_frag>
    vec3 totalEmissiveRadiance = emissive;
    #include <emissiveMap_frag>
    outColor.xyz += totalEmissiveRadiance;
    #include <end_frag>
    #include <encodings_frag>
    #include <premultipliedAlpha_frag>
    #include <fog_frag>
    #include <dithering_frag>
}`,Ls=`#define USE_PBR
#include <common_vert>
#include <normal_pars_vert>
#include <uv_pars_vert>
#include <color_pars_vert>
#include <modelPos_pars_vert>
#include <envMap_pars_vert>
#include <aoMap_pars_vert>
#include <alphamap_pars_vert>
#include <emissiveMap_pars_vert>
#include <shadowMap_pars_vert>
#include <morphtarget_pars_vert>
#include <skinning_pars_vert>
#include <logdepthbuf_pars_vert>
void main() {
    #include <begin_vert>
    #include <morphtarget_vert>
    #include <morphnormal_vert>
    #include <skinning_vert>
    #include <skinnormal_vert>
    #include <pvm_vert>
    #include <normal_vert>
    #include <logdepthbuf_vert>
    #include <uv_vert>
    #include <color_vert>
    #include <modelPos_vert>
    #include <envMap_vert>
    #include <aoMap_vert>
    #include <alphamap_vert>
    #include <emissiveMap_vert>
    #include <shadowMap_vert>
}`,ql=`#define USE_PHONG
#include <common_frag>
#include <dithering_pars_frag>
uniform float u_Specular;
uniform vec3 u_SpecularColor;
#include <specularMap_pars_frag>
uniform vec3 emissive;
#include <uv_pars_frag>
#include <color_pars_frag>
#include <diffuseMap_pars_frag>
#include <alphamap_pars_frag>
#include <normalMap_pars_frag>
#include <bumpMap_pars_frag>
#include <light_pars_frag>
#include <normal_pars_frag>
#include <modelPos_pars_frag>
#include <bsdfs>
#include <envMap_pars_frag>
#include <aoMap_pars_frag>
#include <shadowMap_pars_frag>
#include <fog_pars_frag>
#include <emissiveMap_pars_frag>
#include <logdepthbuf_pars_frag>
#include <clippingPlanes_pars_frag>
void main() {
    #include <clippingPlanes_frag>
    #include <logdepthbuf_frag>
    #include <begin_frag>
    #include <color_frag>
    #include <diffuseMap_frag>
    #include <alphamap_frag>
    #include <alphaTest_frag>
    #include <normal_frag>
    #include <specularMap_frag>
    ReflectedLight reflectedLight = ReflectedLight(vec3(0.0), vec3(0.0), vec3(0.0), vec3(0.0));
    #include <light_frag>
    #include <aoMap_frag>
    outColor.xyz = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular;
    #include <envMap_frag>
    #include <shadowMap_frag>
    vec3 totalEmissiveRadiance = emissive;
    #include <emissiveMap_frag>
    outColor.xyz += totalEmissiveRadiance;
    #include <end_frag>
    #include <encodings_frag>
    #include <premultipliedAlpha_frag>
    #include <fog_frag>
    #include <dithering_frag>
}`,Zl=`#define USE_PHONG
#include <common_vert>
#include <normal_pars_vert>
#include <uv_pars_vert>
#include <color_pars_vert>
#include <modelPos_pars_vert>
#include <envMap_pars_vert>
#include <aoMap_pars_vert>
#include <alphamap_pars_vert>
#include <emissiveMap_pars_vert>
#include <shadowMap_pars_vert>
#include <morphtarget_pars_vert>
#include <skinning_pars_vert>
#include <logdepthbuf_pars_vert>
void main() {
    #include <begin_vert>
    #include <morphtarget_vert>
    #include <morphnormal_vert>
    #include <skinning_vert>
    #include <skinnormal_vert>
    #include <pvm_vert>
    #include <normal_vert>
    #include <logdepthbuf_vert>
    #include <uv_vert>
    #include <color_vert>
    #include <modelPos_vert>
    #include <envMap_vert>
    #include <aoMap_vert>
    #include <alphamap_vert>
    #include <emissiveMap_vert>
    #include <shadowMap_vert>
}`,Kl=`#include <common_frag>
#include <color_pars_frag>
#include <diffuseMap_pars_frag>
#include <fog_pars_frag>
#include <logdepthbuf_pars_frag>
void main() {
    #include <begin_frag>
    #include <color_frag>
    #include <logdepthbuf_frag>
    #ifdef USE_DIFFUSE_MAP
        outColor *= texture2D(diffuseMap, vec2(gl_PointCoord.x, 1.0 - gl_PointCoord.y));
    #endif
    #include <end_frag>
    #include <encodings_frag>
    #include <premultipliedAlpha_frag>
    #include <fog_frag>
}`,$l=`#include <common_vert>
#include <color_pars_vert>
#include <logdepthbuf_pars_vert>
uniform float u_PointSize;
uniform float u_PointScale;
void main() {
    #include <begin_vert>
    #include <pvm_vert>
    #include <color_vert>
    vec4 mvPosition = u_View * u_Model * vec4(transformed, 1.0);
    #ifdef USE_SIZEATTENUATION
        gl_PointSize = u_PointSize * ( u_PointScale / - mvPosition.z );
    #else
        gl_PointSize = u_PointSize;
    #endif
    #include <logdepthbuf_vert>
}`;const Xt={basic_frag:Ol,basic_vert:Bl,depth_frag:zl,depth_vert:Gl,distance_frag:kl,distance_vert:Hl,lambert_frag:Xl,lambert_vert:Vl,normaldepth_frag:Wl,normaldepth_vert:Ql,pbr_frag:Yl,pbr_vert:Ls,pbr2_frag:jl,pbr2_vert:Ls,phong_frag:ql,phong_vert:Zl,point_frag:Kl,point_vert:$l};class Jl{constructor(e,t,n){this.gl=e,this.name=n.name,this.type=n.type,this.size=n.size,this.location=e.getAttribLocation(t,this.name),this.count=ec(e,this.type),this.format=tc(e,this.type),this.locationSize=1,this.type===e.FLOAT_MAT2&&(this.locationSize=2),this.type===e.FLOAT_MAT3&&(this.locationSize=3),this.type===e.FLOAT_MAT4&&(this.locationSize=4)}}function ec(a,e){switch(e){case a.FLOAT:case a.INT:case a.UNSIGNED_INT:return 1;case a.FLOAT_VEC2:case a.INT_VEC2:return 2;case a.FLOAT_VEC3:case a.INT_VEC3:return 3;case a.FLOAT_VEC4:case a.INT_VEC4:return 4;case a.FLOAT_MAT2:return 4;case a.FLOAT_MAT3:return 9;case a.FLOAT_MAT4:return 16;default:return 0}}function tc(a,e){switch(e){case a.FLOAT:case a.FLOAT_VEC2:case a.FLOAT_VEC3:case a.FLOAT_VEC4:case a.FLOAT_MAT2:case a.FLOAT_MAT3:case a.FLOAT_MAT4:return a.FLOAT;case a.INT:case a.INT_VEC2:case a.INT_VEC3:case a.INT_VEC4:return a.INT;case a.UNSIGNED_INT:return a.UNSIGNED_INT;default:return a.FLOAT}}class nc{constructor(e){this._gl=e,this._extensions={},this.version=parseFloat(/^WebGL (\d)/.exec(e.getParameter(e.VERSION))[1]);const t=this.getExtension("EXT_texture_filter_anisotropic");this.anisotropyExt=t,this.maxAnisotropy=t!==null?e.getParameter(t.MAX_TEXTURE_MAX_ANISOTROPY_EXT):1;let n=null,i=!1;try{this.version>1?(n=this.getExtension("EXT_disjoint_timer_query_webgl2"),n&&(i=!!e.getQuery(n.TIMESTAMP_EXT,n.QUERY_COUNTER_BITS_EXT))):(n=this.getExtension("EXT_disjoint_timer_query"),n&&(i=!!n.getQueryEXT(n.TIMESTAMP_EXT,n.QUERY_COUNTER_BITS_EXT)))}catch(s){console.warn(s)}this.timerQuery=n,this.canUseTimestamp=i,this.parallelShaderCompileExt=this.getExtension("KHR_parallel_shader_compile"),this.maxPrecision=sc(e,"highp"),this.maxTextures=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),this.maxVertexTextures=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),this.maxTextureSize=e.getParameter(e.MAX_TEXTURE_SIZE),this.maxCubemapSize=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),this.maxVertexUniformVectors=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),this.maxSamples=this.version>1?e.getParameter(e.MAX_SAMPLES):1,this.lineWidthRange=e.getParameter(e.ALIASED_LINE_WIDTH_RANGE)}getExtension(e){const t=this._gl,n=this._extensions;if(n[e]!==void 0)return n[e];let i=null;for(const s of ic)if(i=t.getExtension(s+e),i)break;return n[e]=i,i}}const ic=["","WEBKIT_","MOZ_"];function sc(a,e){if(e==="highp"){if(a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.HIGH_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.HIGH_FLOAT).precision>0)return"highp";e="mediump"}return e==="mediump"&&a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.MEDIUM_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}class rc extends Ke{constructor(e,t,n,i){super(e),this._gl=t,this._buffers=n,this._vertexArrayBindings=i;const s=this;function r(o){const l=o.target,c=s.get(l);l.removeEventListener("dispose",r),l.index!==null&&n.removeBuffer(l.index.buffer);for(const u in l.attributes)n.removeBuffer(l.attributes[u].buffer);for(const u in l.morphAttributes){const h=l.morphAttributes[u];for(let f=0,d=h.length;f<d;f++)n.removeBuffer(h[f].buffer)}i.releaseByGeometry(l),c.created=!1,s.delete(l)}this._onGeometryDispose=r}setGeometry(e,t){const n=this._gl,i=this._buffers,s=this.get(e);if(s.pass!==t.count){s.pass=t.count,s.created||(e.addEventListener("dispose",this._onGeometryDispose),s.created=!0),e.index!==null&&i.setBuffer(e.index.buffer,n.ELEMENT_ARRAY_BUFFER,this._vertexArrayBindings);for(const r in e.attributes)i.setBuffer(e.attributes[r].buffer,n.ARRAY_BUFFER);for(const r in e.morphAttributes){const o=e.morphAttributes[r];for(let l=0,c=o.length;l<c;l++)i.setBuffer(o[l].buffer,n.ARRAY_BUFFER)}return s}}}const ac={u_Model:[1,null],u_Projection:[2,function(a){this.set(a.projectionMatrix.elements)}],u_View:[2,function(a){this.set(a.viewMatrix.elements)}],u_ProjectionView:[2,function(a){this.set(a.projectionViewMatrix.elements)}],u_CameraPosition:[2,function(a){this.setValue(a.position.x,a.position.y,a.position.z)}],logDepthBufFC:[2,function(a){this.set(a.logDepthBufFC)}],logDepthCameraNear:[2,function(a){this.set(a.logDepthCameraNear)}],u_EnvMapLight_Intensity:[3,function(a){this.set(a.environmentLightIntensity)}],u_FogColor:[3,function(a){const e=a.fog.color;this.setValue(e.r,e.g,e.b)}],u_FogDensity:[3,function(a){this.set(a.fog.density)}],u_FogNear:[3,function(a){this.set(a.fog.near)}],u_FogFar:[3,function(a){this.set(a.fog.far)}],u_Color:[4,function(a,e){const t=a.diffuse;this.setValue(t.r,t.g,t.b)}],u_Opacity:[4,function(a,e){this.set(a.opacity)}],diffuseMap:[4,function(a,e){this.set(a.diffuseMap,e)}],alphaMap:[4,function(a,e){this.set(a.alphaMap,e)}],alphaMapUVTransform:[4,function(a,e){this.set(a.alphaMapTransform.elements)}],normalMap:[4,function(a,e){this.set(a.normalMap,e)}],normalScale:[4,function(a,e){this.setValue(a.normalScale.x,a.normalScale.y)}],bumpMap:[4,function(a,e){this.set(a.bumpMap,e)}],bumpScale:[4,function(a,e){this.set(a.bumpScale)}],cubeMap:[4,function(a,e){this.set(a.cubeMap,e)}],u_EnvMap_Intensity:[4,function(a,e){this.set(a.envMapIntensity)}],u_Specular:[4,function(a,e){this.set(a.shininess)}],u_SpecularColor:[4,function(a,e){const t=a.specular;this.setValue(t.r,t.g,t.b)}],specularMap:[4,function(a,e){this.set(a.specularMap,e)}],aoMap:[4,function(a,e){this.set(a.aoMap,e)}],aoMapIntensity:[4,function(a,e){this.set(a.aoMapIntensity)}],aoMapUVTransform:[4,function(a,e){this.set(a.aoMapTransform.elements)}],u_Roughness:[4,function(a,e){this.set(a.roughness)}],roughnessMap:[4,function(a,e){this.set(a.roughnessMap,e)}],u_Metalness:[4,function(a,e){this.set(a.metalness)}],metalnessMap:[4,function(a,e){this.set(a.metalnessMap,e)}],u_Clearcoat:[4,function(a,e){this.set(a.clearcoat)}],u_ClearcoatRoughness:[4,function(a,e){this.set(a.clearcoatRoughness)}],clearcoatMap:[4,function(a,e){this.set(a.clearcoatMap,e)}],clearcoatRoughnessMap:[4,function(a,e){this.set(a.clearcoatRoughnessMap,e)}],clearcoatNormalMap:[4,function(a,e){this.set(a.clearcoatNormalMap,e)}],clearcoatNormalScale:[4,function(a,e){this.setValue(a.clearcoatNormalScale.x,a.clearcoatNormalScale.y)}],glossiness:[4,function(a,e){this.set(a.glossiness)}],glossinessMap:[4,function(a,e){this.set(a.glossinessMap,e)}],emissive:[4,function(a,e){const t=a.emissive;this.setValue(t.r,t.g,t.b)}],emissiveMap:[4,function(a,e){this.set(a.emissiveMap,e)}],emissiveMapUVTransform:[4,function(a,e){this.set(a.emissiveMapTransform.elements)}],uvTransform:[4,function(a,e){this.set(a.diffuseMapTransform.elements)}],u_PointSize:[4,function(a,e){this.set(a.size)}],u_PointScale:[5,null],maxMipLevel:[5,function(a,e){this.set(e.get(a).__maxMipLevel||8)}],envMap:[5,function(a,e){this.set(a,e)}],u_EnvMap_Flip:[5,function(a,e){this.set(a.images[0]&&a.images[0].rtt?1:-1)}]},ot=new oe;ot.image={data:new Uint8Array([1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1]),width:2,height:2};ot.magFilter=C.NEAREST;ot.minFilter=C.NEAREST;ot.generateMipmaps=!1;ot.version++;const Me=new oe;Me.image={data:null,width:2,height:2};Me.version++;Me.type=N.FLOAT_32_UNSIGNED_INT_24_8_REV;Me.format=M.DEPTH_STENCIL;Me.magFilter=C.NEAREST;Me.minFilter=C.NEAREST;Me.compare=Pt.LESS;Me.generateMipmaps=!1;Me.version++;const ws=new Bi,bs=new Sn;function ce(a,e){if(a.length!==e.length)return!1;for(let t=0,n=a.length;t<n;t++)if(a[t]!==e[t])return!1;return!0}function ue(a,e){for(let t=0,n=e.length;t<n;t++)a[t]=e[t]}const Rs=[];function Kn(a,e){let t=Rs[e];t===void 0&&(t=new Int32Array(e),Rs[e]=t);for(let n=0;n!==e;++n)t[n]=a.allocTexUnit();return t}function Or(a,e){const t=a.gl,n=a.type,i=a.location,s=a.cache;switch(n){case t.FLOAT:a.setValue=function(r){s[0]!==r&&(t.uniform1f(i,r),s[0]=r)},e?a.set=function(r){ce(s,r)||(t.uniform1fv(i,r),ue(s,r))}:a.set=a.setValue;break;case t.SAMPLER_2D:case t.SAMPLER_2D_SHADOW:case t.INT_SAMPLER_2D:case t.UNSIGNED_INT_SAMPLER_2D:a.setValue=function(r,o){const l=o.allocTexUnit();o.setTexture2D(r||(n===t.SAMPLER_2D_SHADOW?Me:ot),l),s[0]!==l&&(t.uniform1i(i,l),s[0]=l)},e?a.set=function(r,o){const l=r.length,c=Kn(o,l);for(let u=0;u!==l;++u)o.setTexture2D(r[u]||(n===t.SAMPLER_2D_SHADOW?Me:ot),c[u]);ce(s,c)||(t.uniform1iv(i,c),ue(s,c))}:a.set=a.setValue;break;case t.SAMPLER_CUBE:case t.SAMPLER_CUBE_SHADOW:a.setValue=function(r,o){const l=o.allocTexUnit();o.setTextureCube(r||bs,l),s[0]!==l&&(t.uniform1i(i,l),s[0]=l)},e?a.set=function(r,o){const l=r.length,c=Kn(o,l);for(let u=0;u!==l;++u)o.setTextureCube(r[u]||bs,c[u]);ce(s,c)||(t.uniform1iv(i,c),ue(s,c))}:a.set=a.setValue;break;case t.SAMPLER_3D:a.setValue=function(r,o){const l=o.allocTexUnit();o.setTexture3D(r||ws,l),s[0]!==l&&(t.uniform1i(i,l),s[0]=l)},e?a.set=function(r,o){const l=r.length,c=Kn(o,l);for(let u=0;u!==l;++u)o.setTexture3D(r[u]||ws,c[u]);ce(s,c)||(t.uniform1iv(i,c),ue(s,c))}:a.set=a.setValue;break;case t.BOOL:case t.INT:a.setValue=function(r){s[0]!==r&&(t.uniform1i(i,r),s[0]=r)},e?a.set=function(r){ce(s,r)||(t.uniform1iv(i,r),ue(s,r))}:a.set=a.setValue;break;case t.FLOAT_VEC2:a.setValue=function(r,o){(s[0]!==r||s[1]!==o)&&(t.uniform2f(i,r,o),s[0]=r,s[1]=o)},a.set=function(r){ce(s,r)||(t.uniform2fv(i,r),ue(s,r))};break;case t.BOOL_VEC2:case t.INT_VEC2:a.setValue=function(r,o){(s[0]!==r||s[1]!==o)&&(t.uniform2i(i,r,o),s[0]=r,s[1]=o)},a.set=function(r){ce(s,r)||(t.uniform2iv(i,r),ue(s,r))};break;case t.FLOAT_VEC3:a.setValue=function(r,o,l){(s[0]!==r||s[1]!==o||s[2]!==l)&&(t.uniform3f(i,r,o,l),s[0]=r,s[1]=o,s[2]=l)},a.set=function(r){ce(s,r)||(t.uniform3fv(i,r),ue(s,r))};break;case t.BOOL_VEC3:case t.INT_VEC3:a.setValue=function(r,o,l){(s[0]!==r||s[1]!==o||s[2]!==l)&&(t.uniform3i(i,r,o,l),s[0]=r,s[1]=o,s[2]=l)},a.set=function(r){ce(s,r)||(t.uniform3iv(i,r),ue(s,r))};break;case t.FLOAT_VEC4:a.setValue=function(r,o,l,c){(s[0]!==r||s[1]!==o||s[2]!==l||s[3]!==c)&&(t.uniform4f(i,r,o,l,c),s[0]=r,s[1]=o,s[2]=l,s[3]=c)},a.set=function(r){ce(s,r)||(t.uniform4fv(i,r),ue(s,r))};break;case t.BOOL_VEC4:case t.INT_VEC4:a.setValue=function(r,o,l,c){(s[0]!==r||s[1]!==o||s[2]!==l||s[3]!==c)&&(t.uniform4i(i,r,o,l,c),s[0]=r,s[1]=o,s[2]=l,s[3]=c)},a.set=function(r){ce(s,r)||(t.uniform4iv(i,r),ue(s,r))};break;case t.FLOAT_MAT2:e?a.setValue=a.set=function(r){ce(s,r)||(t.uniformMatrix2fv(i,!1,r),ue(s,r))}:a.setValue=a.set=function(r){(s[0]!==r[0]||s[1]!==r[1]||s[2]!==r[2]||s[3]!==r[3])&&(t.uniformMatrix2fv(i,!1,r),s[0]=r[0],s[1]=r[1],s[2]=r[2],s[3]=r[3])};break;case t.FLOAT_MAT3:e?a.setValue=a.set=function(r){ce(s,r)||(t.uniformMatrix3fv(i,!1,r),ue(s,r))}:a.setValue=a.set=function(r){(s[0]!==r[0]||s[1]!==r[1]||s[2]!==r[2]||s[3]!==r[3]||s[4]!==r[4]||s[5]!==r[5]||s[6]!==r[6]||s[7]!==r[7]||s[8]!==r[8])&&(t.uniformMatrix3fv(i,!1,r),s[0]=r[0],s[1]=r[1],s[2]=r[2],s[3]=r[3],s[4]=r[4],s[5]=r[5],s[6]=r[6],s[7]=r[7],s[8]=r[8])};break;case t.FLOAT_MAT4:e?a.setValue=a.set=function(r){ce(s,r)||(t.uniformMatrix4fv(i,!1,r),ue(s,r))}:a.setValue=a.set=function(r){(s[0]!==r[0]||s[1]!==r[1]||s[2]!==r[2]||s[3]!==r[3]||s[4]!==r[4]||s[5]!==r[5]||s[6]!==r[6]||s[7]!==r[7]||s[8]!==r[8]||s[9]!==r[9]||s[10]!==r[10]||s[11]!==r[11]||s[12]!==r[12]||s[13]!==r[13]||s[14]!==r[14]||s[15]!==r[15])&&(t.uniformMatrix4fv(i,!1,r),s[0]=r[0],s[1]=r[1],s[2]=r[2],s[3]=r[3],s[4]=r[4],s[5]=r[5],s[6]=r[6],s[7]=r[7],s[8]=r[8],s[9]=r[9],s[10]=r[10],s[11]=r[11],s[12]=r[12],s[13]=r[13],s[14]=r[14],s[15]=r[15])};break}}class oc{constructor(e,t,n,i){this.gl=e,this.id=t,this.type=n.type,this.location=i,this.setValue=void 0,this.set=void 0,this.cache=[],Or(this),this.internalGroup=0,this.internalFun=null;const s=ac[t];s&&(this.internalGroup=s[0],this.internalFun=s[1])}}class lc{constructor(e,t,n,i){this.gl=e,this.id=t,this.type=n.type,this.size=n.size,this.location=i,this.setValue=void 0,this.set=void 0,this.cache=[],Or(this,!0)}}class Br{constructor(){this.seq=[],this.map={}}}class cc extends Br{constructor(e){super(),this.id=e}set(e,t){const n=this.seq;for(let i=0,s=n.length;i!==s;++i){const r=n[i];r.set(e[r.id],t)}}}const $n=/(\w+)(\])?(\[|\.)?/g;function Ns(a,e){a.seq.push(e),a.map[e.id]=e}function uc(a,e,t,n){const i=e.name,s=i.length;for($n.lastIndex=0;;){const r=$n.exec(i),o=$n.lastIndex;let l=r[1];const c=r[2]==="]",u=r[3];if(c&&(l=l|0),u===void 0||u==="["&&o+2===s){Ns(n,u===void 0?new oc(a,l,e,t):new lc(a,l,e,t));break}else{let f=n.map[l];f===void 0&&(f=new cc(l),Ns(n,f)),n=f}}}class hc extends Br{constructor(e,t){super();const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),r=e.getUniformLocation(t,s.name);uc(e,s,r,this)}}set(e,t,n){const i=this.map[e];i!==void 0&&i.set(t,n)}has(e){return!!this.map[e]}}let fc=0;class dc{constructor(e,t,n){this.gl=e,this.vshaderSource=t,this.fshaderSource=n,this.id=fc++,this.usedTimes=1,this.code="",this.name="",this.lightId=-1,this.lightVersion=-1,this.cameraId=-1,this.cameraVersion=-1,this.sceneId=-1,this.sceneVersion=-1,this.program,this._checkErrors=!0,this._compileAsynchronously=!1,this._status=0;let i,s,r;this.compile=function(c){s=Fs(e,e.VERTEX_SHADER,t),r=Fs(e,e.FRAGMENT_SHADER,n),i=e.createProgram(),e.attachShader(i,s),e.attachShader(i,r),e.linkProgram(i),this.program=i,this._checkErrors=c.checkErrors,this._compileAsynchronously=c.compileAsynchronously,this._status=1,e.deleteShader(s),e.deleteShader(r)},this.isReady=function(c){return this._status===1&&(this._compileAsynchronously&&c?e.getProgramParameter(i,c.COMPLETION_STATUS_KHR)&&(this._status=2,this._tryCheckErrors()):(this._status=2,this._tryCheckErrors())),this._status===2},this._tryCheckErrors=function(){if(this._checkErrors&&e.getProgramParameter(i,e.LINK_STATUS)===!1){const c=e.getProgramInfoLog(i).trim(),u=Ds(e,s,"VERTEX"),h=Ds(e,r,"FRAGMENT");this.program=void 0,this._status=0,console.error("Shader Error "+e.getError()+" - VALIDATE_STATUS "+e.getProgramParameter(i,e.VALIDATE_STATUS)+`

Shader Name: `+this.name+`
Program Info Log: `+c+`
`+u+`
`+h)}};let o;this.getUniforms=function(){return o===void 0&&(o=new hc(e,i)),o};let l;this.getAttributes=function(){return l===void 0&&(l=pc(e,i)),l},this.dispose=function(){e.deleteProgram(i),this.program=void 0,this._status=0}}}function _c(a,e){const t=a.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let r=i;r<s;r++){const o=r+1;n.push(`${o===e?">":" "} ${o}: ${t[r]}`)}return n.join(`
`)}function Fs(a,e,t){const n=a.createShader(e);return a.shaderSource(n,t),a.compileShader(n),n}function Ds(a,e,t){const n=a.getShaderParameter(e,a.COMPILE_STATUS),i=a.getShaderInfoLog(e).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const r=parseInt(s[1]);return t+`

`+i+`

`+_c(a.getShaderSource(e),r)}else return i}function pc(a,e){const t={},n=a.getProgramParameter(e,a.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=a.getActiveAttrib(e,i);t[s.name]=new Jl(a,e,s)}return t}class mc{constructor(e,t,n){this._gl=e,this._state=t,this._capabilities=n,this._programs=[]}getProgram(e,t,n,i){const s=this._programs,r=Tc(this._state,this._capabilities,e,t,n),o=gc(r,e);let l;for(let c=0,u=s.length;c<u;c++){const h=s[c];if(h.code===o){l=h,++l.usedTimes;break}}if(l===void 0){const c=xc(e.defines),u=Xt[e.type+"_vert"]||e.vertexShader||Xt.basic_vert,h=Xt[e.type+"_frag"]||e.fragmentShader||Xt.basic_frag;l=vc(this._gl,c,r,u,h),l.name=r.shaderName,l.compile(i),l.code=o,s.push(l)}return l}releaseProgram(e){if(--e.usedTimes===0){const t=this._programs,n=t.indexOf(e);t[n]=t[t.length-1],t.pop(),e.dispose(this._gl)}}}function gc(a,e){let t="";for(const n in a)t+=a[n]+"_";for(const n in e.defines)t+=n+"_"+e.defines[n]+"_";return e.type===Pe.SHADER&&!e.shaderName&&(t+=e.vertexShader,t+=e.fragmentShader),t}function xc(a){const e=[];for(const t in a){const n=a[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Tc(a,e,t,n,i){const s=t.acceptLight?i.lights:null,r=t.fog?i.scene.fog:null,o=t.envMap!==void 0?t.envMap||i.scene.environment:null,l=i.scene.logarithmicDepthBuffer,c=i.scene.disableShadowSampler,u=t.clippingPlanes&&t.clippingPlanes.length>0?t.clippingPlanes.length:i.scene.numClippingPlanes,h={};h.shaderName=t.type===Pe.SHADER&&t.shaderName?t.shaderName:t.type,h.version=e.version,h.precision=t.precision||e.maxPrecision,h.useStandardDerivatives=e.version>=2||!!e.getExtension("OES_standard_derivatives")||!!e.getExtension("GL_OES_standard_derivatives"),h.useShaderTextureLOD=e.version>=2||!!e.getExtension("EXT_shader_texture_lod"),h.useDiffuseMap=t.diffuseMap?t.diffuseMapCoord+1:0,h.useAlphaMap=t.alphaMap?t.alphaMapCoord+1:0,h.useEmissiveMap=t.emissiveMap?t.emissiveMapCoord+1:0,h.useAOMap=t.aoMap?t.aoMapCoord+1:0,h.useNormalMap=!!t.normalMap,h.useBumpMap=!!t.bumpMap,h.useSpecularMap=!!t.specularMap,h.useRoughnessMap=!!t.roughnessMap,h.useMetalnessMap=!!t.metalnessMap,h.useGlossinessMap=!!t.glossinessMap,h.useEnvMap=!!o,h.envMapCombine=t.envMapCombine,h.useClearcoat=t.clearcoat>0,h.useClearcoatMap=h.useClearcoat&&!!t.clearcoatMap,h.useClearcoatRoughnessMap=h.useClearcoat&&!!t.clearcoatRoughnessMap,h.useClearcoatNormalMap=h.useClearcoat&&!!t.clearcoatNormalMap,h.useUv1=h.useDiffuseMap===1||h.useAlphaMap===1||h.useEmissiveMap===1||h.useAOMap===1||h.useNormalMap||h.useBumpMap||h.useSpecularMap||h.useRoughnessMap||h.useMetalnessMap||h.useGlossinessMap||h.useClearcoatMap||h.useClearcoatNormalMap||h.useClearcoatRoughnessMap,h.useUv2=h.useDiffuseMap===2||h.useAlphaMap===2||h.useEmissiveMap===2||h.useAOMap===2,h.useAmbientLight=!!s&&s.useAmbient,h.useSphericalHarmonicsLight=!!s&&s.useSphericalHarmonics,h.hemisphereLightNum=s?s.hemisNum:0,h.directLightNum=s?s.directsNum:0,h.pointLightNum=s?s.pointsNum:0,h.spotLightNum=s?s.spotsNum:0,h.rectAreaLightNum=s?s.rectAreaNum:0,h.directShadowNum=n.receiveShadow&&s?s.directShadowNum:0,h.pointShadowNum=n.receiveShadow&&s?s.pointShadowNum:0,h.spotShadowNum=n.receiveShadow&&s?s.spotShadowNum:0,h.useShadow=n.receiveShadow&&!!s&&s.shadowsNum>0,h.useShadowSampler=e.version>=2&&!c,h.shadowType=n.shadowType,!h.useShadowSampler&&h.shadowType!==pe.HARD&&(h.shadowType=pe.POISSON_SOFT),h.dithering=t.dithering;const f=a.currentRenderTarget;h.gammaFactor=i.gammaFactor,h.outputEncoding=f.texture?fn(f.texture):i.outputEncoding,h.diffuseMapEncoding=fn(t.diffuseMap||t.cubeMap),h.envMapEncoding=fn(o),h.emissiveMapEncoding=fn(t.emissiveMap),h.alphaTest=t.alphaTest,h.premultipliedAlpha=t.premultipliedAlpha,h.useVertexColors=t.vertexColors,h.useVertexTangents=!!t.normalMap&&t.vertexTangents,h.numClippingPlanes=u,h.flatShading=t.shading===yt.FLAT_SHADING,h.fog=!!r,h.fogExp2=!!r&&r.isFogExp2,h.sizeAttenuation=t.sizeAttenuation,h.doubleSided=t.side===se.DOUBLE,h.flipSided=t.side===se.BACK,h.packDepthToRGBA=t.packToRGBA,h.logarithmicDepthBuffer=!!l,h.rendererExtensionFragDepth=e.version>=2||!!e.getExtension("EXT_frag_depth"),h.morphTargets=!!n.morphTargetInfluences,h.morphNormals=!!n.morphTargetInfluences&&n.geometry.morphAttributes.normal;const d=n.isSkinnedMesh&&n.skeleton,_=e.maxVertexUniformVectors,p=e.maxVertexTextures>0&&(!!e.getExtension("OES_texture_float")||e.version>=2);let m=0;return p?m=1024:(m=n.skeleton?n.skeleton.bones.length:0,m*16>_&&(console.warn("Program: too many bones ("+m+"), current cpu only support "+Math.floor(_/16)+" bones!!"),m=Math.floor(_/16))),h.useSkinning=d,h.bonesNum=m,h.useVertexTexture=p,h}function fn(a){let e;return a?a.encoding&&(e=a.encoding):e=ve.LINEAR,e}function zr(a){switch(a){case ve.LINEAR:return["Linear","(value)"];case ve.SRGB:return["sRGB","(value)"];case ve.GAMMA:return["Gamma","(value, float(GAMMA_FACTOR))"];default:console.error("unsupported encoding: "+a)}}function Jn(a,e){const t=zr(e);return"vec4 "+a+"(vec4 value) { return "+t[0]+"ToLinear"+t[1]+"; }"}function Ac(a,e){const t=zr(e);return"vec4 "+a+"(vec4 value) { return LinearTo"+t[0]+t[1]+"; }"}function vc(a,e,t,n,i){let s=["precision "+t.precision+" float;","precision "+t.precision+" int;","precision "+t.precision+" sampler2D;",t.version>=2?"precision "+t.precision+" isampler2D;":"",t.version>=2?"precision "+t.precision+" usampler2D;":"","#define SHADER_NAME "+t.shaderName,e,t.version>=2?"#define WEBGL2":"",t.useRoughnessMap?"#define USE_ROUGHNESSMAP":"",t.useMetalnessMap?"#define USE_METALNESSMAP":"",t.useGlossinessMap?"#define USE_GLOSSINESSMAP":"",t.useAmbientLight?"#define USE_AMBIENT_LIGHT":"",t.useSphericalHarmonicsLight?"#define USE_SPHERICALHARMONICS_LIGHT":"",t.useNormalMap?"#define USE_NORMAL_MAP":"",t.useBumpMap?"#define USE_BUMPMAP":"",t.useSpecularMap?"#define USE_SPECULARMAP":"",t.useEmissiveMap?"#define USE_EMISSIVEMAP "+t.useEmissiveMap:"",t.useShadow?"#define USE_SHADOW":"",t.flatShading?"#define FLAT_SHADED":"",t.flipSided?"#define FLIP_SIDED":"",t.useDiffuseMap?"#define USE_DIFFUSE_MAP "+t.useDiffuseMap:"",t.useAlphaMap?"#define USE_ALPHA_MAP "+t.useAlphaMap:"",t.useEnvMap?"#define USE_ENV_MAP":"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.useAOMap?"#define USE_AOMAP "+t.useAOMap:"",t.useVertexColors==it.RGB?"#define USE_VCOLOR_RGB":"",t.useVertexColors==it.RGBA?"#define USE_VCOLOR_RGBA":"",t.useVertexTangents?"#define USE_TANGENT":"",t.useUv1?"#define USE_UV1":"",t.useUv2?"#define USE_UV2":"",t.fog?"#define USE_FOG":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.useSkinning?"#define USE_SKINNING":"",t.bonesNum>0?"#define MAX_BONES "+t.bonesNum:"",t.useVertexTexture?"#define BONE_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"",`
`].filter(Is).join(`
`),r=[t.useStandardDerivatives&&t.version<2?"#extension GL_OES_standard_derivatives : enable":"",t.useShaderTextureLOD&&t.version<2?"#extension GL_EXT_shader_texture_lod : enable":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth&&t.version<2?"#extension GL_EXT_frag_depth : enable":"","precision "+t.precision+" float;","precision "+t.precision+" int;","precision "+t.precision+" sampler2D;",t.version>=2?"precision "+t.precision+" isampler2D;":"",t.version>=2?"precision "+t.precision+" usampler2D;":"",t.version>=2?"precision "+t.precision+" sampler2DShadow;":"",t.version>=2?"precision "+t.precision+" samplerCubeShadow;":"","#define SHADER_NAME "+t.shaderName,"#define PI 3.14159265359","#define EPSILON 1e-6","float pow2(const in float x) { return x * x; }","#define LOG2 1.442695","#define RECIPROCAL_PI 0.31830988618","#define saturate(a) clamp(a, 0.0, 1.0)","#define whiteCompliment(a) (1.0 - saturate(a))","highp float rand(const in vec2 uv) {","	const highp float a = 12.9898, b = 78.233, c = 43758.5453;","	highp float dt = dot(uv.xy, vec2(a, b)), sn = mod(dt, PI);","	return fract(sin(sn) * c);","}",e,t.version>=2?"#define WEBGL2":"",t.useShadowSampler?"#define USE_SHADOW_SAMPLER":"#define sampler2DShadow sampler2D",t.useRoughnessMap?"#define USE_ROUGHNESSMAP":"",t.useMetalnessMap?"#define USE_METALNESSMAP":"",t.useGlossinessMap?"#define USE_GLOSSINESSMAP":"",t.useClearcoat?"#define USE_CLEARCOAT":"",t.useClearcoatMap?"#define USE_CLEARCOATMAP":"",t.useClearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.useClearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.useAmbientLight?"#define USE_AMBIENT_LIGHT":"",t.useSphericalHarmonicsLight?"#define USE_SPHERICALHARMONICS_LIGHT":"",t.useNormalMap?"#define USE_NORMAL_MAP":"",t.useBumpMap?"#define USE_BUMPMAP":"",t.useSpecularMap?"#define USE_SPECULARMAP":"",t.useEmissiveMap?"#define USE_EMISSIVEMAP "+t.useEmissiveMap:"",t.useShadow?"#define USE_SHADOW":"",t.shadowType===pe.HARD?"#define USE_HARD_SHADOW":"",t.shadowType===pe.POISSON_SOFT?"#define USE_POISSON_SOFT_SHADOW":"",t.shadowType===pe.PCF3_SOFT?"#define USE_PCF3_SOFT_SHADOW":"",t.shadowType===pe.PCF5_SOFT?"#define USE_PCF5_SOFT_SHADOW":"",t.shadowType===pe.PCSS16_SOFT?"#define USE_PCSS16_SOFT_SHADOW":"",t.shadowType===pe.PCSS32_SOFT?"#define USE_PCSS32_SOFT_SHADOW":"",t.shadowType===pe.PCSS64_SOFT?"#define USE_PCSS64_SOFT_SHADOW":"",t.shadowType===pe.PCSS16_SOFT||t.shadowType===pe.PCSS32_SOFT||t.shadowType===pe.PCSS64_SOFT?"#define USE_PCSS_SOFT_SHADOW":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.useShaderTextureLOD?"#define TEXTURE_LOD_EXT":"",t.useDiffuseMap?"#define USE_DIFFUSE_MAP "+t.useDiffuseMap:"",t.useAlphaMap?"#define USE_ALPHA_MAP "+t.useAlphaMap:"",t.useEnvMap?"#define USE_ENV_MAP":"",t.useAOMap?"#define USE_AOMAP "+t.useAOMap:"",t.useVertexColors==it.RGB?"#define USE_VCOLOR_RGB":"",t.useVertexColors==it.RGBA?"#define USE_VCOLOR_RGBA":"",t.useVertexTangents?"#define USE_TANGENT":"",t.premultipliedAlpha?"#define USE_PREMULTIPLIED_ALPHA":"",t.fog?"#define USE_FOG":"",t.fogExp2?"#define USE_EXP2_FOG":"",t.alphaTest?"#define ALPHATEST "+t.alphaTest:"",t.useEnvMap?"#define "+t.envMapCombine:"","#define GAMMA_FACTOR "+t.gammaFactor,t.useUv1?"#define USE_UV1":"",t.useUv2?"#define USE_UV2":"",t.dithering?"#define DITHERING":"",ki.encodings_pars_frag,Jn("mapTexelToLinear",t.diffuseMapEncoding),t.useEnvMap?Jn("envMapTexelToLinear",t.envMapEncoding):"",t.useEmissiveMap?Jn("emissiveMapTexelToLinear",t.emissiveMapEncoding):"",Ac("linearToOutputTexel",t.outputEncoding),t.packDepthToRGBA?"#define DEPTH_PACKING_RGBA":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"",`
`].filter(Is).join(`
`),o=n,l=i;if(o=Ni(o),l=Ni(l),o=Us(o,t),l=Us(l,t),o=Os(o,t),l=Os(l,t),o=Bs(o),l=Bs(l),t.version>1){const c=o.match(zs);c&&(o=o.replace(zs,"")),s=["#version 300 es",c?c.join(`
`):"","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+s,l=l.replace("#extension GL_EXT_draw_buffers : require","");let u=0;const h=[];for(;l.indexOf("gl_FragData["+u+"]")>-1;)l=l.replace("gl_FragData["+u+"]","pc_fragData"+u),h.push("layout(location = "+u+") out highp vec4 pc_fragData"+u+";"),u++;r=["#version 300 es","#define varying in",l.indexOf("layout")>-1||h.length>0?"":"out highp vec4 pc_fragColor;","#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad",h.join(`
`)].join(`
`)+`
`+r}return o=s+o,l=r+l,new dc(a,o,l)}const Ni=function(a){const e=/#include +<([\w\d.]+)>/g;function t(n,i){const s=ki[i];if(s===void 0)throw new Error("Can not resolve #include <"+i+">");return Ni(s)}return a.replace(e,t)};function Is(a){return a!==""}function Us(a,e){return a.replace(/NUM_HEMI_LIGHTS/g,e.hemisphereLightNum).replace(/NUM_DIR_LIGHTS/g,e.directLightNum).replace(/NUM_SPOT_LIGHTS/g,e.spotLightNum).replace(/NUM_POINT_LIGHTS/g,e.pointLightNum).replace(/NUM_RECT_AREA_LIGHTS/g,e.rectAreaLightNum).replace(/NUM_DIR_SHADOWS/g,e.directShadowNum).replace(/NUM_SPOT_SHADOWS/g,e.spotShadowNum).replace(/NUM_POINT_SHADOWS/g,e.pointShadowNum)}function Os(a,e){return a.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes)}const Ec=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Sc(a,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"["+s+"]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Bs(a){return a.replace(Ec,Sc)}const zs=/#extension .*/g;class yc extends Ke{constructor(e,t,n){super(e),this._gl=t,this._capabilities=n;const i=n.timerQuery,s=this,r=o=>{const l=o.target,c=s.get(l);l.removeEventListener("dispose",r),c._webglQuery&&(n.version>1?t.deleteQuery(c._webglQuery):i.deleteQueryEXT(c._webglQuery)),s.delete(l)};this._onQueryDispose=r,this._typeToGL={[Ln.ANY_SAMPLES_PASSED]:35887,[Ln.ANY_SAMPLES_PASSED_CONSERVATIVE]:36202,[Ln.TIME_ELAPSED]:35007}}_get(e){const t=this._capabilities,n=this.get(e);return n._webglQuery===void 0&&(e.addEventListener("dispose",this._onQueryDispose),n._webglQuery=t.version>1?this._gl.createQuery():t.timerQuery.createQueryEXT(),n._target=null,n._result=null),n}begin(e,t){const n=this._capabilities,i=this._typeToGL,s=this._get(e);n.version>1?this._gl.beginQuery(i[t],s._webglQuery):n.timerQuery.beginQueryEXT(i[t],s._webglQuery),s._target=t,s._result=null}end(e){const t=this._capabilities,n=this._typeToGL,i=this._get(e);t.version>1?this._gl.endQuery(n[i._target]):t.timerQuery.endQueryEXT(n[i._target])}counter(e){const t=this._capabilities.timerQuery,n=this._get(e);t.queryCounterEXT(n._webglQuery,t.TIMESTAMP_EXT),n._target=t.TIMESTAMP_EXT,n._result=null}isResultAvailable(e){const t=this._gl,n=this._capabilities,i=n.timerQuery,s=this._get(e);let r;return n.version>1?r=t.getQueryParameter(s._webglQuery,t.QUERY_RESULT_AVAILABLE):r=i.getQueryObjectEXT(s._webglQuery,i.QUERY_RESULT_AVAILABLE),r}isTimerDisjoint(){return this._gl.getParameter(this._capabilities.timerQuery.GPU_DISJOINT_EXT)}getResult(e){const t=this._gl,n=this._capabilities,i=n.timerQuery,s=this._get(e);return s._result===null&&(n.version>1?s._result=t.getQueryParameter(s._webglQuery,t.QUERY_RESULT):s._result=i.getQueryObjectEXT(s._webglQuery,i.QUERY_RESULT_EXT)),s._result}}class Mc{constructor(e,t){this._gl=e,this._capabilities=t}getGLType(e){const t=this._gl,n=this._capabilities,i=n.version>=2;if(e===N.UNSIGNED_BYTE)return t.UNSIGNED_BYTE;if(e===N.UNSIGNED_SHORT_5_6_5)return t.UNSIGNED_SHORT_5_6_5;if(e===N.UNSIGNED_SHORT_4_4_4_4)return t.UNSIGNED_SHORT_4_4_4_4;if(e===N.UNSIGNED_SHORT_5_5_5_1)return t.UNSIGNED_SHORT_5_5_5_1;let s;if(i){if(e===N.UNSIGNED_SHORT)return t.UNSIGNED_SHORT;if(e===N.UNSIGNED_INT)return t.UNSIGNED_INT;if(e===N.UNSIGNED_INT_24_8)return t.UNSIGNED_INT_24_8;if(e===N.FLOAT)return t.FLOAT;if(e===N.HALF_FLOAT)return t.HALF_FLOAT;if(e===N.FLOAT_32_UNSIGNED_INT_24_8_REV)return t.FLOAT_32_UNSIGNED_INT_24_8_REV;if(e===N.BYTE)return t.BYTE;if(e===N.SHORT)return t.SHORT;if(e===N.INT)return t.INT}else{if(e===N.UNSIGNED_SHORT||e===N.UNSIGNED_INT||e===N.UNSIGNED_INT_24_8)if(s=n.getExtension("WEBGL_depth_texture"),s){if(e===N.UNSIGNED_SHORT)return t.UNSIGNED_SHORT;if(e===N.UNSIGNED_INT)return t.UNSIGNED_INT;if(e===N.UNSIGNED_INT_24_8)return s.UNSIGNED_INT_24_8_WEBGL}else return console.warn("extension WEBGL_depth_texture is not support."),null;if(e===N.FLOAT)return s=n.getExtension("OES_texture_float"),s?t.FLOAT:(console.warn("extension OES_texture_float is not support."),null);if(e===N.HALF_FLOAT)return s=n.getExtension("OES_texture_half_float"),s?s.HALF_FLOAT_OES:(console.warn("extension OES_texture_half_float is not support."),null)}return t[e]!==void 0?t[e]:e}getGLFormat(e){const t=this._gl,n=this._capabilities;if(e===M.RGB)return t.RGB;if(e===M.RGBA)return t.RGBA;if(e===M.ALPHA)return t.ALPHA;if(e===M.LUMINANCE)return t.LUMINANCE;if(e===M.LUMINANCE_ALPHA)return t.LUMINANCE_ALPHA;if(e===M.DEPTH_COMPONENT)return t.DEPTH_COMPONENT;if(e===M.DEPTH_STENCIL)return t.DEPTH_STENCIL;if(e===M.RED)return t.RED;if(e===M.RED_INTEGER)return t.RED_INTEGER;if(e===M.RG)return t.RG;if(e===M.RG_INTEGER)return t.RG_INTEGER;if(e===M.RGB_INTEGER)return t.RGB_INTEGER;if(e===M.RGBA_INTEGER)return t.RGBA_INTEGER;let i;if(e===M.RGB_S3TC_DXT1||e===M.RGBA_S3TC_DXT1||e===M.RGBA_S3TC_DXT3||e===M.RGBA_S3TC_DXT5)if(i=n.getExtension("WEBGL_compressed_texture_s3tc"),i){if(e===M.RGB_S3TC_DXT1)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(e===M.RGBA_S3TC_DXT1)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(e===M.RGBA_S3TC_DXT3)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(e===M.RGBA_S3TC_DXT5)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return console.warn("extension WEBGL_compressed_texture_s3tc is not support."),null;if(e===M.RGB_PVRTC_4BPPV1||e===M.RGB_PVRTC_2BPPV1||e===M.RGBA_PVRTC_4BPPV1||e===M.RGBA_PVRTC_2BPPV1)if(i=n.getExtension("WEBGL_compressed_texture_pvrtc"),i){if(e===M.RGB_PVRTC_4BPPV1)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(e===M.RGB_PVRTC_2BPPV1)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(e===M.RGBA_PVRTC_4BPPV1)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(e===M.RGBA_PVRTC_2BPPV1)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return console.warn("extension WEBGL_compressed_texture_pvrtc is not support."),null;return e===M.RGB_ETC1?(i=n.getExtension("WEBGL_compressed_texture_etc1"),i?i.COMPRESSED_RGB_ETC1_WEBGL:(console.warn("extension WEBGL_compressed_texture_etc1 is not support."),null)):e===M.RGBA_ASTC_4x4?(i=n.getExtension("WEBGL_compressed_texture_astc"),i?i.COMPRESSED_RGBA_ASTC_4x4_KHR:(console.warn("extension WEBGL_compressed_texture_astc is not support."),null)):e===M.RGBA_BPTC?(i=n.getExtension("EXT_texture_compression_bptc"),i?i.COMPRESSED_RGBA_BPTC_UNORM_EXT:(console.warn("extension EXT_texture_compression_bptc is not support."),null)):t[e]!==void 0?t[e]:e}getGLInternalFormat(e){const t=this._gl,n=this._capabilities,i=n.version>=2;if(e===M.RGBA4)return t.RGBA4;if(e===M.RGB5_A1)return t.RGB5_A1;if(e===M.DEPTH_COMPONENT16)return t.DEPTH_COMPONENT16;if(e===M.STENCIL_INDEX8)return t.STENCIL_INDEX8;if(e===M.DEPTH_STENCIL)return t.DEPTH_STENCIL;let s;if(i){if(e===M.R8)return t.R8;if(e===M.RG8)return t.RG8;if(e===M.RGB8)return t.RGB8;if(e===M.RGBA8)return t.RGBA8;if(e===M.DEPTH_COMPONENT24)return t.DEPTH_COMPONENT24;if(e===M.DEPTH_COMPONENT32F)return t.DEPTH_COMPONENT32F;if(e===M.DEPTH24_STENCIL8)return t.DEPTH24_STENCIL8;if(e===M.DEPTH32F_STENCIL8)return t.DEPTH32F_STENCIL8;if(e===M.R16F||e===M.RG16F||e===M.RGB16F||e===M.RGBA16F||e===M.R32F||e===M.RG32F||e===M.RGB32F||e===M.RGBA32F)if(s=n.getExtension("EXT_color_buffer_float"),s){if(e===M.R16F)return t.R16F;if(e===M.RG16F)return t.RG16F;if(e===M.RGB16F)return t.RGB16F;if(e===M.RGBA16F)return t.RGBA16F;if(e===M.R32F)return t.R32F;if(e===M.RG32F)return t.RG32F;if(e===M.RGB32F)return t.RGB32F;if(e===M.RGBA32F)return t.RGBA32F}else return console.warn("extension EXT_color_buffer_float is not support."),null}else if(e===M.RGBA32F||e===M.RGB32F)if(s=n.getExtension("WEBGL_color_buffer_float"),s){if(e===M.RGBA32F)return s.RGBA32F_EXT;if(e===M.RGB32F)return s.RGB32F_EXT}else return console.warn("extension WEBGL_color_buffer_float is not support."),null;return t[e]!==void 0?t[e]:e}}function Gs(a,e,t,n){const i=new Uint8Array(4),s=a.createTexture();a.bindTexture(e,s),a.texParameteri(e,a.TEXTURE_MIN_FILTER,a.NEAREST),a.texParameteri(e,a.TEXTURE_MAG_FILTER,a.NEAREST);for(let r=0;r<n;r++)a.texImage2D(t+r,0,a.RGBA,1,1,0,a.RGBA,a.UNSIGNED_BYTE,i);return s}function Pc(a){let e=!1;const t=new xe;let n=null;const i=new xe(0,0,0,0);return{setMask:function(s){n!==s&&!e&&(a.colorMask(s,s,s,s),n=s)},setLocked:function(s){e=s},setClear:function(s,r,o,l,c){c===!0&&(s*=l,r*=l,o*=l),t.set(s,r,o,l),i.equals(t)===!1&&(a.clearColor(s,r,o,l),i.copy(t))},getClear:function(){return i},reset:function(){e=!1,n=null,i.set(-1,0,0,0)}}}function Cc(a,e){let t=!1,n=null,i=null,s=null;return{setTest:function(r){r?e.enable(a.DEPTH_TEST):e.disable(a.DEPTH_TEST)},setMask:function(r){n!==r&&!t&&(a.depthMask(r),n=r)},setFunc:function(r){i!==r&&(a.depthFunc(r),i=r)},setLocked:function(r){t=r},setClear:function(r){s!==r&&(a.clearDepth(r),s=r)},reset:function(){t=!1,n=null,i=null,s=null}}}function Lc(a,e){let t=!1,n=null,i=null,s=null,r=null,o=null,l=null,c=null,u=null,h=null,f=null,d=null,_=null,p=null,m=null;return{setTest:function(g){g?e.enable(a.STENCIL_TEST):e.disable(a.STENCIL_TEST)},setMask:function(g){n!==g&&!t&&(a.stencilMask(g),n=g)},setFunc:function(g,E,x,v,A,P){(i!==g||s!==E||r!==x||u!==v||h!==A||f!==P)&&(v===null||A===null||P===null?a.stencilFunc(g,E,x):(a.stencilFuncSeparate(a.FRONT,g,E,x),a.stencilFuncSeparate(a.BACK,v,A,P)),i=g,s=E,r=x,u=v,h=A,f=P)},setOp:function(g,E,x,v,A,P){(o!==g||l!==E||c!==x||d!==v||_!==A||p!==P)&&(v===null||A===null||P===null?a.stencilOp(g,E,x):(a.stencilOpSeparate(a.FRONT,g,E,x),a.stencilOpSeparate(a.BACK,v,A,P)),o=g,l=E,c=x,d=v,_=A,p=P)},setLocked:function(g){t=g},setClear:function(g){m!==g&&(a.clearStencil(g),m=g)},reset:function(){t=!1,n=null,i=null,s=null,r=null,o=null,l=null,c=null,u=null,h=null,f=null,d=null,_=null,p=null,m=null}}}class wc{constructor(e,t){this.gl=e,this.capabilities=t,this.colorBuffer=new Pc(e),this.depthBuffer=new Cc(e,this),this.stencilBuffer=new Lc(e,this),this.states={},this.currentBlending=null,this.currentBlendEquation=null,this.currentBlendSrc=null,this.currentBlendDst=null,this.currentBlendEquationAlpha=null,this.currentBlendSrcAlpha=null,this.currentBlendDstAlpha=null,this.currentPremultipliedAlpha=null,this.currentFlipSided=!1,this.currentCullFace=null;const n=e.getParameter(e.VIEWPORT);this.currentViewport=new xe().fromArray(n),this.currentLineWidth=null,this.currentPolygonOffsetFactor=null,this.currentPolygonOffsetUnits=null,this.currentProgram=null,this.currentBoundBuffers={},this.currentRenderTarget=null,this.currentTextureSlot=null,this.currentBoundTextures={},this.emptyTextures={},this.emptyTextures[e.TEXTURE_2D]=Gs(e,e.TEXTURE_2D,e.TEXTURE_2D,1),this.emptyTextures[e.TEXTURE_CUBE_MAP]=Gs(e,e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),this.blendEquationToGL={[we.ADD]:e.FUNC_ADD,[we.SUBTRACT]:e.FUNC_SUBTRACT,[we.REVERSE_SUBTRACT]:e.FUNC_REVERSE_SUBTRACT,[we.MIN]:e.MIN,[we.MAX]:e.MAX},this.blendFactorToGL={[_e.ZERO]:e.ZERO,[_e.ONE]:e.ONE,[_e.SRC_COLOR]:e.SRC_COLOR,[_e.SRC_ALPHA]:e.SRC_ALPHA,[_e.SRC_ALPHA_SATURATE]:e.SRC_ALPHA_SATURATE,[_e.DST_COLOR]:e.DST_COLOR,[_e.DST_ALPHA]:e.DST_ALPHA,[_e.ONE_MINUS_SRC_COLOR]:e.ONE_MINUS_SRC_COLOR,[_e.ONE_MINUS_SRC_ALPHA]:e.ONE_MINUS_SRC_ALPHA,[_e.ONE_MINUS_DST_COLOR]:e.ONE_MINUS_DST_COLOR,[_e.ONE_MINUS_DST_ALPHA]:e.ONE_MINUS_DST_ALPHA},this.colorBuffer.setClear(0,0,0,1),this.depthBuffer.setClear(1),this.stencilBuffer.setClear(0),this.depthBuffer.setTest(!0),this.depthBuffer.setFunc(Pt.LEQUAL),this.setFlipSided(!1),this.setCullFace(ft.BACK)}enable(e){this.states[e]!==!0&&(this.gl.enable(e),this.states[e]=!0)}disable(e){this.states[e]!==!1&&(this.gl.disable(e),this.states[e]=!1)}setBlending(e,t,n,i,s,r,o,l){const c=this.gl;if(e===Re.NONE){this.disable(c.BLEND);return}if(this.enable(c.BLEND),e!==Re.CUSTOM)(e!==this.currentBlending||l!==this.currentPremultipliedAlpha)&&((this.currentBlendEquation!==we.ADD||this.currentBlendEquationAlpha!==we.ADD)&&(c.blendEquation(c.FUNC_ADD),this.currentBlendEquation=we.ADD,this.currentBlendEquationAlpha=we.ADD),e===Re.NORMAL?l?c.blendFuncSeparate(c.ONE,c.ONE_MINUS_SRC_ALPHA,c.ONE,c.ONE_MINUS_SRC_ALPHA):c.blendFuncSeparate(c.SRC_ALPHA,c.ONE_MINUS_SRC_ALPHA,c.ONE,c.ONE_MINUS_SRC_ALPHA):e===Re.ADD?l?c.blendFunc(c.ONE,c.ONE):c.blendFunc(c.SRC_ALPHA,c.ONE):e===Re.SUB?c.blendFuncSeparate(c.ZERO,c.ONE_MINUS_SRC_COLOR,c.ZERO,c.ONE):e===Re.MUL?l?c.blendFuncSeparate(c.ZERO,c.SRC_COLOR,c.ZERO,c.SRC_ALPHA):c.blendFunc(c.ZERO,c.SRC_COLOR):console.error("WebGLState: Invalid blending: ",e)),this.currentBlendSrc=null,this.currentBlendDst=null,this.currentBlendSrcAlpha=null,this.currentBlendDstAlpha=null;else{s=s||t,r=r||n,o=o||i;const u=this.blendEquationToGL,h=this.blendFactorToGL;(t!==this.currentBlendEquation||s!==this.currentBlendEquationAlpha)&&(c.blendEquationSeparate(u[t],u[s]),this.currentBlendEquation=t,this.currentBlendEquationAlpha=s),(n!==this.currentBlendSrc||i!==this.currentBlendDst||r!==this.currentBlendSrcAlpha||o!==this.currentBlendDstAlpha)&&(c.blendFuncSeparate(h[n],h[i],h[r],h[o]),this.currentBlendSrc=n,this.currentBlendDst=i,this.currentBlendSrcAlpha=r,this.currentBlendDstAlpha=o)}this.currentBlending=e,this.currentPremultipliedAlpha=l}setFlipSided(e){const t=this.gl;this.currentFlipSided!==e&&(e?t.frontFace(t.CW):t.frontFace(t.CCW),this.currentFlipSided=e)}setCullFace(e){const t=this.gl;e!==ft.NONE?(this.enable(t.CULL_FACE),e!==this.currentCullFace&&(e===ft.BACK?t.cullFace(t.BACK):e===ft.FRONT?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):this.disable(t.CULL_FACE),this.currentCullFace=e}viewport(e,t,n,i){const s=this.currentViewport;(s.x!==e||s.y!==t||s.z!==n||s.w!==i)&&(this.gl.viewport(e,t,n,i),s.set(e,t,n,i))}setLineWidth(e){if(e!==this.currentLineWidth){const t=this.capabilities.lineWidthRange;t[0]<=e&&e<=t[1]?this.gl.lineWidth(e):console.warn("GL_ALIASED_LINE_WIDTH_RANGE is ["+t[0]+","+t[1]+"], but set to "+e+"."),this.currentLineWidth=e}}setPolygonOffset(e,t,n){const i=this.gl;e?(this.enable(i.POLYGON_OFFSET_FILL),(this.currentPolygonOffsetFactor!==t||this.currentPolygonOffsetUnits!==n)&&(i.polygonOffset(t,n),this.currentPolygonOffsetFactor=t,this.currentPolygonOffsetUnits=n)):this.disable(i.POLYGON_OFFSET_FILL)}setProgram(e){this.currentProgram!==e&&(this.gl.useProgram(e.program),this.currentProgram=e)}bindBuffer(e,t){const n=this.gl;this.currentBoundBuffers[e]!==t&&(n.bindBuffer(e,t),this.currentBoundBuffers[e]=t)}activeTexture(e){const t=this.gl;e===void 0&&(e=t.TEXTURE0+this.capabilities.maxTextures-1),this.currentTextureSlot!==e&&(t.activeTexture(e),this.currentTextureSlot=e)}bindTexture(e,t){const n=this.gl;this.currentTextureSlot===null&&this.activeTexture();let i=this.currentBoundTextures[this.currentTextureSlot];i===void 0&&(i={type:void 0,texture:void 0},this.currentBoundTextures[this.currentTextureSlot]=i),(i.type!==e||i.texture!==t)&&(n.bindTexture(e,t||this.emptyTextures[e]),i.type=e,i.texture=t)}reset(){const e=this.gl;e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.cullFace(e.BACK),e.frontFace(e.CCW),e.viewport(0,0,e.canvas.width,e.canvas.height),e.lineWidth(1),e.polygonOffset(0,0),e.useProgram(null),e.bindFramebuffer(e.FRAMEBUFFER,null),e.activeTexture(e.TEXTURE0),this.colorBuffer.reset(),this.depthBuffer.reset(),this.stencilBuffer.reset(),this.states={},this.currentBlending=null,this.currentBlendEquation=null,this.currentBlendSrc=null,this.currentBlendDst=null,this.currentBlendEquationAlpha=null,this.currentBlendSrcAlpha=null,this.currentBlendDstAlpha=null,this.currentPremultipliedAlpha=null,this.currentFlipSided=!1,this.currentCullFace=null,this.currentViewport.set(0,0,e.canvas.width,e.canvas.height),this.currentLineWidth=null,this.currentPolygonOffsetFactor=null,this.currentPolygonOffsetUnits=null,this.currentProgram=null,this.currentBoundBuffers={},this.currentRenderTarget=null,this.currentTextureSlot=null,this.currentBoundTextures={}}setMaterial(e,t){this.setCullFace(e.side===se.DOUBLE?ft.NONE:ft.BACK);let n=e.side===se.BACK;t&&(n=!n),this.setFlipSided(n),e.blending===Re.NORMAL&&e.transparent===!1?this.setBlending(Re.NONE):this.setBlending(e.blending,e.blendEquation,e.blendSrc,e.blendDst,e.blendEquationAlpha,e.blendSrcAlpha,e.blendDstAlpha,e.premultipliedAlpha),this.depthBuffer.setFunc(e.depthFunc),this.depthBuffer.setTest(e.depthTest),this.depthBuffer.setMask(e.depthWrite),this.colorBuffer.setMask(e.colorWrite);const i=e.stencilTest;this.stencilBuffer.setTest(i),i&&(this.stencilBuffer.setMask(e.stencilWriteMask),this.stencilBuffer.setFunc(e.stencilFunc,e.stencilRef,e.stencilFuncMask,e.stencilFuncBack,e.stencilRefBack,e.stencilFuncMaskBack),this.stencilBuffer.setOp(e.stencilFail,e.stencilZFail,e.stencilZPass,e.stencilFailBack,e.stencilZFailBack,e.stencilZPassBack)),this.setPolygonOffset(e.polygonOffset,e.polygonOffsetFactor,e.polygonOffsetUnits),e.lineWidth!==void 0&&this.setLineWidth(e.lineWidth),e.alphaToCoverage===!0?this.enable(this.gl.SAMPLE_ALPHA_TO_COVERAGE):this.disable(this.gl.SAMPLE_ALPHA_TO_COVERAGE)}}class bc extends Ke{constructor(e,t,n,i,s){super(e),this._gl=t,this._state=n,this._capabilities=i,this._constants=s,this._usedTextureUnits=0;const r=this;function o(l){const c=l.target,u=r.get(c);c.removeEventListener("dispose",o),u.__webglTexture&&!u.__external&&t.deleteTexture(u.__webglTexture),r.delete(c)}this._onTextureDispose=o,this._wrappingToGL={[q.REPEAT]:t.REPEAT,[q.CLAMP_TO_EDGE]:t.CLAMP_TO_EDGE,[q.MIRRORED_REPEAT]:t.MIRRORED_REPEAT},this._filterToGL={[C.NEAREST]:t.NEAREST,[C.LINEAR]:t.LINEAR,[C.NEAREST_MIPMAP_NEAREST]:t.NEAREST_MIPMAP_NEAREST,[C.LINEAR_MIPMAP_NEAREST]:t.LINEAR_MIPMAP_NEAREST,[C.NEAREST_MIPMAP_LINEAR]:t.NEAREST_MIPMAP_LINEAR,[C.LINEAR_MIPMAP_LINEAR]:t.LINEAR_MIPMAP_LINEAR}}allocTexUnit(){const e=this._usedTextureUnits++;return e>=this._capabilities.maxTextures&&console.warn("trying to use "+e+" texture units while this GPU supports only "+this._capabilities.maxTextures),e}resetTextureUnits(){this._usedTextureUnits=0}setTexture2D(e,t){const n=this._gl,i=this._state,s=this._capabilities,r=this._constants;t!==void 0&&(t=n.TEXTURE0+t);const o=this.get(e);if(e.image&&o.__version!==e.version&&(!e.image.rtt||t===void 0)&&!o.__external){o.__webglTexture===void 0&&(e.addEventListener("dispose",this._onTextureDispose),o.__webglTexture=n.createTexture()),i.activeTexture(t),i.bindTexture(n.TEXTURE_2D,o.__webglTexture);let l=e.image;const c=Ws(l);c&&(l=Vs(l,s.maxTextureSize),ks(e)&&dn(l)===!1&&s.version<2&&(l=Xs(l)));const u=!dn(l)&&s.version<2;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,e.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,e.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,e.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.NONE),this._setTextureParameters(e,u);const h=r.getGLFormat(e.format),f=r.getGLType(e.type),d=e.internalformat!==null?r.getGLInternalFormat(e.internalformat):ei(n,s,h,f),_=e.mipmaps;let p;if(c)if(_.length>0&&!u){for(let m=0,g=_.length;m<g;m++)p=_[m],n.texImage2D(n.TEXTURE_2D,m,d,h,f,p);e.generateMipmaps=!1,o.__maxMipLevel=_.length-1}else n.texImage2D(n.TEXTURE_2D,0,d,h,f,l),o.__maxMipLevel=0;else if(_.length>0&&!u){const m=l.isCompressed;for(let g=0,E=_.length;g<E;g++)p=_[g],m?n.compressedTexImage2D(n.TEXTURE_2D,g,d,p.width,p.height,0,p.data):n.texImage2D(n.TEXTURE_2D,g,d,p.width,p.height,e.border,h,f,p.data);e.generateMipmaps=!1,o.__maxMipLevel=_.length-1}else n.texImage2D(n.TEXTURE_2D,0,d,l.width,l.height,e.border,h,f,l.data),o.__maxMipLevel=0;return e.generateMipmaps&&!u&&this._generateMipmap(n.TEXTURE_2D,e,l.width,l.height),o.__version=e.version,o}return i.activeTexture(t),i.bindTexture(n.TEXTURE_2D,o.__webglTexture),o}setTextureCube(e,t){const n=this._gl,i=this._state,s=this._capabilities,r=this._constants;t!==void 0&&(t=n.TEXTURE0+t);const o=this.get(e);if(e.images.length===6&&o.__version!==e.version&&(!e.images[0].rtt||t===void 0)&&!o.__external){o.__webglTexture===void 0&&(e.addEventListener("dispose",this._onTextureDispose),o.__webglTexture=n.createTexture()),i.activeTexture(t),i.bindTexture(n.TEXTURE_CUBE_MAP,o.__webglTexture);const l=[];let c=!1;for(let p=0;p<6;p++){let m=e.images[p];const g=Ws(m);g&&(m=Vs(m,s.maxTextureSize),ks(e)&&dn(m)===!1&&s.version<2&&(m=Xs(m))),!dn(m)&&s.version<2&&(c=!0),l[p]=m,m.__isDom=g}n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,e.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,e.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,e.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.NONE),this._setTextureParameters(e,c);const u=r.getGLFormat(e.format),h=r.getGLType(e.type),f=e.internalformat!==null?r.getGLInternalFormat(e.internalformat):ei(n,s,u,h),d=e.mipmaps;let _;for(let p=0;p<6;p++){const m=l[p];if(m.__isDom)if(d.length>0&&!c){for(let E=0,x=d.length;E<x;E++)_=d[E][p],n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+p,0,f,u,h,_);o.__maxMipLevel=d.length-1,e.generateMipmaps=!1}else n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+p,0,f,u,h,m),o.__maxMipLevel=0;else if(d.length>0&&!c){const E=m.isCompressed;for(let x=0,v=d.length;x<v;x++)_=d[x][p],E?n.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+p,x,f,_.width,_.height,0,_.data):n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+p,x,f,_.width,_.height,e.border,u,h,_.data);o.__maxMipLevel=d.length-1,e.generateMipmaps=!1}else n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+p,0,f,m.width,m.height,e.border,u,h,m.data),o.__maxMipLevel=0}return e.generateMipmaps&&!c&&this._generateMipmap(n.TEXTURE_CUBE_MAP,e,l[0].width,l[0].height),o.__version=e.version,o}return i.activeTexture(t),i.bindTexture(n.TEXTURE_CUBE_MAP,o.__webglTexture),o}setTexture3D(e,t){const n=this._gl,i=this._state,s=this._capabilities,r=this._constants;if(s.version<2){console.warn("Try to use Texture3D but browser not support WebGL2.0");return}t!==void 0&&(t=n.TEXTURE0+t);const o=this.get(e);if(e.image&&o.__version!==e.version&&!o.__external){o.__webglTexture===void 0&&(e.addEventListener("dispose",this._onTextureDispose),o.__webglTexture=n.createTexture()),i.activeTexture(t),i.bindTexture(n.TEXTURE_3D,o.__webglTexture);const l=e.image;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,e.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,e.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,e.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.NONE),this._setTextureParameters(e,!1);const c=r.getGLFormat(e.format),u=r.getGLType(e.type),h=e.internalformat!==null?r.getGLInternalFormat(e.internalformat):ei(n,s,c,u);return n.texImage3D(n.TEXTURE_3D,0,h,l.width,l.height,l.depth,e.border,c,u,l.data),e.generateMipmaps&&this._generateMipmap(n.TEXTURE_3D,e,l.width,l.height),o.__version=e.version,o}return i.activeTexture(t),i.bindTexture(n.TEXTURE_3D,o.__webglTexture),o}setTextureExternal(e,t){const n=this._gl,i=this.get(e);i.__external||(i.__webglTexture?n.deleteTexture(i.__webglTexture):e.addEventListener("dispose",this._onTextureDispose)),i.__webglTexture=t,i.__external=!0}_setTextureParameters(e,t){const n=this._gl,i=this._capabilities,s=this._wrappingToGL,r=this._filterToGL;let o=n.TEXTURE_2D;e.isTextureCube&&(o=n.TEXTURE_CUBE_MAP),e.isTexture3D&&(o=n.TEXTURE_3D);const l=Rc(e,t);n.texParameteri(o,n.TEXTURE_WRAP_S,s[l[0]]),n.texParameteri(o,n.TEXTURE_WRAP_T,s[l[1]]),e.isTexture3D&&n.texParameteri(o,n.TEXTURE_WRAP_R,s[l[2]]),n.texParameteri(o,n.TEXTURE_MAG_FILTER,r[l[3]]),n.texParameteri(o,n.TEXTURE_MIN_FILTER,r[l[4]]);const c=i.anisotropyExt;c&&n.texParameterf(o,c.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(l[5],i.maxAnisotropy)),i.version>=2&&(l[6]!==void 0?(n.texParameteri(o,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(o,n.TEXTURE_COMPARE_FUNC,l[6])):n.texParameteri(o,n.TEXTURE_COMPARE_MODE,n.NONE))}_generateMipmap(e,t,n,i){this._gl.generateMipmap(e);const r=this.get(t);r.__maxMipLevel=Math.log(Math.max(n,i))*Math.LOG2E}}function ks(a){return a.wrapS!==q.CLAMP_TO_EDGE||a.wrapT!==q.CLAMP_TO_EDGE||a.minFilter!==C.NEAREST&&a.minFilter!==C.LINEAR}function Hs(a){return a===C.NEAREST||a===C.NEAREST_MIPMAP_LINEAR||a===C.NEAREST_MIPMAP_NEAREST?C.NEAREST:C.LINEAR}function dn(a){return xn(a.width)&&xn(a.height)}function Xs(a){if(a instanceof HTMLImageElement||a instanceof HTMLCanvasElement){const e=document.createElementNS("http://www.w3.org/1999/xhtml","canvas");return e.width=rs(a.width),e.height=rs(a.height),e.getContext("2d").drawImage(a,0,0,e.width,e.height),console.warn("image is not power of two ("+a.width+"x"+a.height+"). Resized to "+e.width+"x"+e.height,a),e}return a}function Vs(a,e){if(a.width>e||a.height>e){const t=e/Math.max(a.width,a.height),n=document.createElementNS("http://www.w3.org/1999/xhtml","canvas");return n.width=Math.floor(a.width*t),n.height=Math.floor(a.height*t),n.getContext("2d").drawImage(a,0,0,a.width,a.height,0,0,n.width,n.height),console.warn("image is too big ("+a.width+"x"+a.height+"). Resized to "+n.width+"x"+n.height,a),n}return a}function Rc(a,e){let t=a.wrapS,n=a.wrapT,i=a.wrapR,s=a.magFilter,r=a.minFilter;const o=a.anisotropy,l=a.compare;return e&&(t=q.CLAMP_TO_EDGE,n=q.CLAMP_TO_EDGE,a.isTexture3D&&(i=q.CLAMP_TO_EDGE),(a.wrapS!==q.CLAMP_TO_EDGE||a.wrapT!==q.CLAMP_TO_EDGE)&&console.warn("Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to t3d.TEXTURE_WRAP.CLAMP_TO_EDGE.",a),s=Hs(a.magFilter),r=Hs(a.minFilter),(a.minFilter!==C.NEAREST&&a.minFilter!==C.LINEAR||a.magFilter!==C.NEAREST&&a.magFilter!==C.LINEAR)&&console.warn("Texture is not power of two. Texture.minFilter and Texture.magFilter should be set to t3d.TEXTURE_FILTER.NEAREST or t3d.TEXTURE_FILTER.LINEAR.",a)),[t,n,i,s,r,o,l]}function ei(a,e,t,n){if(e.version>=2===!1)return t;let s=t;return t===a.RED&&(n===a.FLOAT&&(s=a.R32F),n===a.HALF_FLOAT&&(s=a.R16F),n===a.UNSIGNED_BYTE&&(s=a.R8)),t===a.RG&&(n===a.FLOAT&&(s=a.RG32F),n===a.HALF_FLOAT&&(s=a.RG16F),n===a.UNSIGNED_BYTE&&(s=a.RG8)),t===a.RGB&&(n===a.FLOAT&&(s=a.RGB32F),n===a.HALF_FLOAT&&(s=a.RGB16F),n===a.UNSIGNED_BYTE&&(s=a.RGB8)),t===a.RGBA&&(n===a.FLOAT&&(s=a.RGBA32F),n===a.HALF_FLOAT&&(s=a.RGBA16F),n===a.UNSIGNED_BYTE&&(s=a.RGBA8),n===a.UNSIGNED_SHORT_4_4_4_4&&(s=a.RGBA4),n===a.UNSIGNED_SHORT_5_5_5_1&&(s=a.RGB5_A1)),(t===a.DEPTH_COMPONENT||t===a.DEPTH_STENCIL)&&(s=a.DEPTH_COMPONENT16,n===a.FLOAT&&(s=a.DEPTH_COMPONENT32F),n===a.UNSIGNED_INT&&(s=a.DEPTH_COMPONENT24),n===a.UNSIGNED_INT_24_8&&(s=a.DEPTH24_STENCIL8),n===a.FLOAT_32_UNSIGNED_INT_24_8_REV&&(s=a.DEPTH32F_STENCIL8)),(s===a.R16F||s===a.R32F||s===a.RG16F||s===a.RG32F||s===a.RGB16F||s===a.RGB32F||s===a.RGBA16F||s===a.RGBA32F)&&e.getExtension("EXT_color_buffer_float"),s}function Ws(a){return typeof HTMLImageElement<"u"&&a instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&a instanceof HTMLCanvasElement||typeof HTMLVideoElement<"u"&&a instanceof HTMLVideoElement||typeof ImageBitmap<"u"&&a instanceof ImageBitmap}class Nc extends Ke{constructor(e,t,n,i){super(e),this._gl=t,this._capabilities=n,this._constants=i;const s=this;function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=s.get(l);c.__webglRenderbuffer&&!c.__external&&t.deleteRenderbuffer(c.__webglRenderbuffer),s.delete(l)}this._onRenderBufferDispose=r}setRenderBuffer(e){const t=this._gl,n=this._capabilities,i=this._constants,s=this.get(e);if(s.__webglRenderbuffer===void 0){e.addEventListener("dispose",this._onRenderBufferDispose),s.__webglRenderbuffer=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,s.__webglRenderbuffer);const r=i.getGLInternalFormat(e.format);e.multipleSampling>0?(n.version<2&&console.error("render buffer multipleSampling is not support in webgl 1.0."),t.renderbufferStorageMultisample(t.RENDERBUFFER,Math.min(e.multipleSampling,n.maxSamples),r,e.width,e.height)):t.renderbufferStorage(t.RENDERBUFFER,r,e.width,e.height)}else t.bindRenderbuffer(t.RENDERBUFFER,s.__webglRenderbuffer);return s}setRenderBufferExternal(e,t){const n=this._gl,i=this.get(e);i.__external||(i.__webglRenderbuffer?n.deleteRenderbuffer(i.__webglRenderbuffer):e.addEventListener("dispose",this._onRenderBufferDispose)),i.__webglRenderbuffer=t,i.__external=!0}}class Fc extends Ke{constructor(e,t,n,i,s,r,o){super(e),this._gl=t,this._state=n,this._capabilities=i,this._textures=s,this._renderBuffers=r,this._constants=o;const l=this;function c(u){const h=u.target;h.removeEventListener("dispose",c);const f=l.get(h);f.__webglFramebuffer&&t.deleteFramebuffer(f.__webglFramebuffer),l.delete(h),n.currentRenderTarget===h&&(n.currentRenderTarget=null)}this._onRenderTargetDispose=c}_setupRenderTarget(e){const t=this._gl,n=this._state,i=this._textures,s=this._renderBuffers,r=this._capabilities,o=this.get(e);e.addEventListener("dispose",this._onRenderTargetDispose);const l=t.createFramebuffer(),c=[];o.__webglFramebuffer=l,o.__drawBuffers=c,e.isRenderTargetCube&&(o.__currentActiveCubeFace=e.activeCubeFace,o.__currentActiveMipmapLevel=e.activeMipmapLevel),e.isRenderTarget3D&&(o.__currentActiveLayer=e.activeLayer,o.__currentActiveMipmapLevel=e.activeMipmapLevel),t.bindFramebuffer(t.FRAMEBUFFER,l);for(const u in e._attachments){const h=ti[u];h===t.DEPTH_ATTACHMENT||h===t.DEPTH_STENCIL_ATTACHMENT?r.version<2&&!r.getExtension("WEBGL_depth_texture")&&console.warn("WebGLRenderTargets: extension WEBGL_depth_texture is not support."):h!==t.STENCIL_ATTACHMENT&&c.push(h);const f=e._attachments[u];if(f.isTexture2D){const d=i.setTexture2D(f);t.framebufferTexture2D(t.FRAMEBUFFER,h,t.TEXTURE_2D,d.__webglTexture,0),n.bindTexture(t.TEXTURE_2D,null)}else if(f.isTextureCube){const d=i.setTextureCube(f);t.framebufferTexture2D(t.FRAMEBUFFER,h,t.TEXTURE_CUBE_MAP_POSITIVE_X+e.activeCubeFace,d.__webglTexture,e.activeMipmapLevel),n.bindTexture(t.TEXTURE_CUBE_MAP,null)}else if(f.isTexture3D){const d=i.setTexture3D(f);t.framebufferTextureLayer(t.FRAMEBUFFER,h,d.__webglTexture,e.activeMipmapLevel,e.activeLayer),n.bindTexture(t.TEXTURE_3D,null)}else{const d=s.setRenderBuffer(f);t.framebufferRenderbuffer(t.FRAMEBUFFER,h,t.RENDERBUFFER,d.__webglRenderbuffer)}}c.sort(Dc),r.version>=2?t.drawBuffers(c):r.getExtension("WEBGL_draw_buffers")&&r.getExtension("WEBGL_draw_buffers").drawBuffersWEBGL(c)}setRenderTarget(e){const t=this._gl,n=this._state,i=this._textures;let s;if(n.currentRenderTarget!==e&&(e.isRenderTargetBack?t.bindFramebuffer(t.FRAMEBUFFER,null):(s=this.get(e),s.__webglFramebuffer===void 0?this._setupRenderTarget(e):t.bindFramebuffer(t.FRAMEBUFFER,s.__webglFramebuffer)),n.currentRenderTarget=e),e.isRenderTargetCube){s=this.get(e);const r=e.activeCubeFace,o=e.activeMipmapLevel;if(s.__currentActiveCubeFace!==r||s.__currentActiveMipmapLevel!==o){for(const l in e._attachments){const c=e._attachments[l];if(c.isTextureCube){const u=i.get(c);t.framebufferTexture2D(t.FRAMEBUFFER,ti[l],t.TEXTURE_CUBE_MAP_POSITIVE_X+r,u.__webglTexture,o)}}s.__currentActiveCubeFace=r,s.__currentActiveMipmapLevel=o}}if(e.isRenderTarget3D){s=this.get(e);const r=e.activeLayer,o=e.activeMipmapLevel;if(s.__currentActiveLayer!==r||s.__currentActiveMipmapLevel!==o){for(const l in e._attachments){const c=e._attachments[l];if(c.isTexture3D){const u=i.get(c);t.framebufferTextureLayer(t.FRAMEBUFFER,ti[l],u.__webglTexture,o,r)}}s.__currentActiveLayer=r,s.__currentActiveMipmapLevel=o}}}blitRenderTarget(e,t,n=!0,i=!0,s=!0){const r=this._gl,o=this._capabilities;if(o.version<2){console.warn("WebGLRenderTargets: blitFramebuffer not support by WebGL"+o.version);return}const l=this.get(e).__webglFramebuffer,c=this.get(t).__webglFramebuffer;r.bindFramebuffer(r.READ_FRAMEBUFFER,l),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,c);let u=0;n&&(u|=r.COLOR_BUFFER_BIT),i&&(u|=r.DEPTH_BUFFER_BIT),s&&(u|=r.STENCIL_BUFFER_BIT),r.blitFramebuffer(0,0,e.width,e.height,0,0,t.width,t.height,u,r.NEAREST)}readRenderTargetPixels(e,t,n,i,s){const r=this._gl,o=this._state,l=this._constants,c=o.currentRenderTarget;if(c&&c.texture){if(e>=0&&e<=c.width-n&&t>=0&&t<=c.height-i){const u=l.getGLType(c.texture.type),h=l.getGLFormat(c.texture.format);r.readPixels(e,t,n,i,h,u,s)}}else console.warn("WebGLRenderTargets.readRenderTargetPixels: readPixels from renderTarget failed. Framebuffer not bound or texture not attached.")}updateRenderTargetMipmap(e){const t=this._gl,n=this._state,i=this._capabilities,s=e.texture;if(s.generateMipmaps&&s.minFilter!==C.NEAREST&&s.minFilter!==C.LINEAR&&(Ic(e)||i.version>=2)){let r=t.TEXTURE_2D;s.isTextureCube&&(r=t.TEXTURE_CUBE_MAP),s.isTexture3D&&(r=t.TEXTURE_3D);const o=this._textures.get(s).__webglTexture;n.bindTexture(r,o),t.generateMipmap(r),n.bindTexture(r,null)}}}const ti={[y.COLOR_ATTACHMENT0]:36064,[y.COLOR_ATTACHMENT1]:36065,[y.COLOR_ATTACHMENT2]:36066,[y.COLOR_ATTACHMENT3]:36067,[y.COLOR_ATTACHMENT4]:36068,[y.COLOR_ATTACHMENT5]:36069,[y.COLOR_ATTACHMENT6]:36070,[y.COLOR_ATTACHMENT7]:36071,[y.COLOR_ATTACHMENT8]:36072,[y.COLOR_ATTACHMENT9]:36073,[y.COLOR_ATTACHMENT10]:36074,[y.COLOR_ATTACHMENT11]:36075,[y.COLOR_ATTACHMENT12]:36076,[y.COLOR_ATTACHMENT13]:36077,[y.COLOR_ATTACHMENT14]:36078,[y.COLOR_ATTACHMENT15]:36079,[y.DEPTH_ATTACHMENT]:36096,[y.STENCIL_ATTACHMENT]:36128,[y.DEPTH_STENCIL_ATTACHMENT]:33306};function Dc(a,e){return a-e}function Ic(a){return xn(a.width)&&xn(a.height)}class Uc extends Ke{constructor(e,t,n){super(e),this._gl=t,this._capabilities=n}setBuffer(e,t,n){const i=this.get(e),s=i.glBuffer===void 0;!s&&i.version===e.version||(n&&n.reset(),s||i.__external?this._createGLBuffer(i,e,t):(this._updateGLBuffer(i.glBuffer,e,t),i.version=e.version))}removeBuffer(e){const t=this._gl,n=this.get(e);n.glBuffer&&!n.__external&&t.deleteBuffer(n.glBuffer),this.delete(e)}setBufferExternal(e,t){const n=this._gl,i=this.get(e);i.__external||i.glBuffer&&n.deleteBuffer(i.glBuffer);const s=Qs(n,e.array);i.glBuffer=t,i.type=s,i.bytesPerElement=e.array.BYTES_PER_ELEMENT,i.version=e.version,i.__external=!0}_createGLBuffer(e,t,n){const i=this._gl,s=t.array,r=t.usage,o=i.createBuffer();i.bindBuffer(n,o),i.bufferData(n,s,r),t.onUploadCallback();const l=Qs(i,s);e.glBuffer=o,e.type=l,e.bytesPerElement=s.BYTES_PER_ELEMENT,e.version=t.version,e.__external=!1}_updateGLBuffer(e,t,n){const i=this._gl,s=this._capabilities,r=t.array,o=t.updateRange;i.bindBuffer(n,e),o.count===-1?i.bufferSubData(n,0,r):(s.version>=2?i.bufferSubData(n,o.offset*r.BYTES_PER_ELEMENT,r,o.offset,o.count):i.bufferSubData(n,o.offset*r.BYTES_PER_ELEMENT,r.subarray(o.offset,o.offset+o.count)),o.count=-1)}}function Qs(a,e){let t;return e instanceof Float32Array?t=a.FLOAT:e instanceof Float64Array?console.warn("Unsupported data buffer format: Float64Array."):e instanceof Uint16Array?t=a.UNSIGNED_SHORT:e instanceof Int16Array?t=a.SHORT:e instanceof Uint32Array?t=a.UNSIGNED_INT:e instanceof Int32Array?t=a.INT:e instanceof Int8Array?t=a.BYTE:e instanceof Uint8Array?t=a.UNSIGNED_BYTE:t=a.FLOAT,t}class Oc extends Ke{constructor(e,t,n){super(e);const i=this;function s(r){const o=r.target,l=i.get(o);o.removeEventListener("dispose",s);const c=l.program;c!==void 0&&(n.releaseByProgram(c),t.releaseProgram(c)),i.delete(o)}this._onMaterialDispose=s}setMaterial(e){const t=this.get(e);return t.program===void 0&&e.addEventListener("dispose",this._onMaterialDispose),t}}const ni="";class Bc extends Ke{constructor(e,t,n,i){super(e),this._gl=t,this._capabilities=n,this._buffers=i,this._isWebGL2=n.version>=2,this._vaoExt=n.getExtension("OES_vertex_array_object"),this._vaoCache={},this._currentGeometryProgram="",this._currentVAO=null}setup(e,t,n){if(e.morphTargetInfluences)this.reset(),this._setupVertexAttributes(n,t),this._currentGeometryProgram=ni;else if(this._isWebGL2||this._vaoExt){const i=this.get(t);i._vaos===void 0&&(i._vaos={},this._vaoCache[t.id]=i._vaos);let s=i._vaos[n.id];s||(s=i._vaos[n.id]={version:-1,object:this._createVAO()}),this._bindVAO(s.object),s.version!==t.version&&(this._setupVertexAttributes(n,t),s.version=t.version)}else{const i=n.id+"_"+t.id+"_"+t.version;i!==this._currentGeometryProgram&&(this._setupVertexAttributes(n,t),this._currentGeometryProgram=i)}}releaseByGeometry(e){const t=this.get(e),n=t._vaos;if(n){for(const i in n){const s=n[i];s&&this._disposeVAO(s.object)}delete t._vaos,delete this._vaoCache[e.id]}}releaseByProgram(e){for(const t in this._vaoCache){const n=this._vaoCache[t];if(n){const i=n[e.id];if(!i)continue;this._disposeVAO(i.object),delete n[e.id]}}}reset(e){(this._currentVAO!==null||e)&&(this._isWebGL2?this._gl.bindVertexArray(null):this._vaoExt&&this._vaoExt.bindVertexArrayOES(null),this._currentVAO=null),this._currentGeometryProgram!==ni&&(this._currentGeometryProgram=ni)}_createVAO(){return this._isWebGL2?this._gl.createVertexArray():this._vaoExt?this._vaoExt.createVertexArrayOES():null}_bindVAO(e){this._currentVAO!==e&&(this._isWebGL2?this._gl.bindVertexArray(e):this._vaoExt&&this._vaoExt.bindVertexArrayOES(e),this._currentVAO=e)}_disposeVAO(e){this._isWebGL2?this._gl.deleteVertexArray(e):this._vaoExt&&this._vaoExt.deleteVertexArrayOES(e)}_setupVertexAttributes(e,t){const n=this._gl,i=this._isWebGL2,s=e.getAttributes(),r=this._capabilities,o=this._buffers;for(const l in s){const c=s[l],u=t.getAttribute(l);if(u){const h=u.size;c.count!==h&&console.warn("WebGLVertexArrayBindings: attribute "+l+" size not match! "+c.count+" : "+h);const f=u.buffer,d=o.get(f),_=d.type,p=i&&(c.format===n.INT||c.format===n.UNSIGNED_INT);for(let A=0,P=c.locationSize;A<P;A++)n.enableVertexAttribArray(c.location+A);if(u.divisor>0)for(let A=0,P=c.locationSize;A<P;A++)i?n.vertexAttribDivisor(c.location+A,u.divisor):r.getExtension("ANGLE_instanced_arrays")?r.getExtension("ANGLE_instanced_arrays").vertexAttribDivisorANGLE(c.location+A,u.divisor):console.warn("vertexAttribDivisor not supported");const m=d.bytesPerElement,g=d.glBuffer,E=f.stride,x=u.offset,v=u.normalized;if(n.bindBuffer(n.ARRAY_BUFFER,g),c.count===E&&c.locationSize===1)this._vertexAttribPointer(c.location,c.count,_,v,0,0,p);else for(let A=0;A<c.locationSize;A++)this._vertexAttribPointer(c.location+A,c.count/c.locationSize,_,v,m*E,m*(x+c.count/c.locationSize*A),p)}}if(t.index){const l=o.get(t.index.buffer);n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,l.glBuffer)}}_vertexAttribPointer(e,t,n,i,s,r,o){const l=this._gl;o?l.vertexAttribIPointer(e,t,n,s,r):l.vertexAttribPointer(e,t,n,i,s,r)}}const zc=new xe,_n=new U,ii=new WeakMap,si=new Float32Array(8);let ri=new Float32Array([]);function Gc(a){return a.geometry}function kc(a){return a.material}function Hc(a){return!0}function Ys(){}class Gr extends no{constructor(e){super(e),this.capabilities={},this._textures=null,this._renderBuffers=null,this._renderTargets=null,this._buffers=null,this._geometries=null,this._programs=null,this._materials=null,this._state=null,this._vertexArrayBindings=null,this._queries=null,this.init(),this._currentMaterial=null}init(){const e=this.context,t=`_gl${this.increaseId()}`,n=new nc(e),i=new Mc(e,n),s=new wc(e,n),r=new bc(t,e,s,n,i),o=new Nc(t,e,n,i),l=new Fc(t,e,s,n,r,o,i),c=new Uc(t,e,n),u=new Bc(t,e,n,c),h=new rc(t,e,c,u),f=new mc(e,s,n),d=new Oc(t,f,u),_=new yc(t,e,n);this.capabilities=n,this._textures=r,this._renderBuffers=o,this._renderTargets=l,this._buffers=c,this._geometries=h,this._programs=f,this._materials=d,this._state=s,this._vertexArrayBindings=u,this._queries=_}endRender(){super.endRender(),this._currentMaterial=null;const e=this._state;e.depthBuffer.setTest(!0),e.depthBuffer.setMask(!0),e.colorBuffer.setMask(!0)}clear(e,t,n){const i=this.context;let s=0;(e===void 0||e)&&(s|=i.COLOR_BUFFER_BIT),(t===void 0||t)&&(s|=i.DEPTH_BUFFER_BIT),(n===void 0||n)&&(s|=i.STENCIL_BUFFER_BIT),s>0&&i.clear(s)}setClearColor(e,t,n,i,s){this._state.colorBuffer.setClear(e,t,n,i,s)}getClearColor(){return this._state.colorBuffer.getClear()}setRenderTarget(e){this._renderTargets.setRenderTarget(e)}getRenderTarget(){return this._state.currentRenderTarget}blitRenderTarget(e,t,n=!0,i=!0,s=!0){this._renderTargets.blitRenderTarget(e,t,n,i,s)}readRenderTargetPixels(e,t,n,i,s){return this._renderTargets.readRenderTargetPixels(e,t,n,i,s),Promise.resolve(s)}updateRenderTargetMipmap(e){this._renderTargets.updateRenderTargetMipmap(e)}setTextureExternal(e,t){this._textures.setTextureExternal(e,t)}setRenderBufferExternal(e,t){this._renderBuffers.setRenderBufferExternal(e,t)}setBufferExternal(e,t){this._buffers.setBufferExternal(e,t)}resetVertexArrayBindings(e){this._vertexArrayBindings.reset(e)}resetState(){this._state.reset()}beginQuery(e,t){this._queries.begin(e,t)}endQuery(e){this._queries.end(e)}queryCounter(e){this._queries.counter(e)}isTimerQueryDisjoint(e){return this._queries.isTimerDisjoint(e)}isQueryResultAvailable(e){return this._queries.isResultAvailable(e)}getQueryResult(e){return this._queries.getResult(e)}renderRenderableItem(e,t,n){const i=this._state,s=this.capabilities,r=this._vertexArrayBindings,o=this._textures,l=this._programs,c=this._passInfo,u=n.getGeometry||Gc,h=n.getMaterial||kc,f=n.beforeRender||Ys,d=n.afterRender||Ys,_=n.ifRender||Hc,p=n.renderInfo,m=t.scene,g=t.lights,E=t.camera,x=i.currentRenderTarget;if(!_(e))return;if(!c.enabled){console.warn("WebGLRenderer: beginRender must be called before renderRenderableItem.");return}const v=e.object,A=h.call(this,e),P=u.call(this,e),w=e.group,L=A.fog?m.fog:null,b=A.envMap!==void 0?A.envMap||m.environment:null;let O=m.clippingPlanesData,I=m.numClippingPlanes;A.clippingPlanes&&A.clippingPlanes.length>0&&(ri.length<A.clippingPlanes.length*4&&(ri=new Float32Array(A.clippingPlanes.length*4)),O=m.setClippingPlanesData(A.clippingPlanes,ri),I=A.clippingPlanes.length),v.onBeforeRender(e,A),f.call(this,e,A);const R=this._materials.setMaterial(A);if(A.needsUpdate===!1)if(R.program===void 0)A.needsUpdate=!0;else if(R.fog!==L)A.needsUpdate=!0;else if(R.envMap!==b)A.needsUpdate=!0;else if(R.numClippingPlanes!==I)A.needsUpdate=!0;else if(R.logarithmicDepthBuffer!==m.logarithmicDepthBuffer)A.needsUpdate=!0;else if(t.outputEncoding!==R.outputEncoding||t.gammaFactor!==R.gammaFactor)A.needsUpdate=!0;else if(s.version>1&&m.disableShadowSampler!==R.disableShadowSampler)A.needsUpdate=!0;else{const V=A.acceptLight&&g.totalNum>0;(V!==R.acceptLight||V&&(!g.hash.compare(R.lightsHash)||v.receiveShadow!==R.receiveShadow||v.shadowType!==R.shadowType))&&(A.needsUpdate=!0)}if(A.needsUpdate){const V=R.program;R.program=l.getProgram(A,v,t,this.shaderCompileOptions),V&&(r.releaseByProgram(V),l.releaseProgram(V)),R.fog=L,R.envMap=b,R.logarithmicDepthBuffer=m.logarithmicDepthBuffer,R.acceptLight=A.acceptLight,R.lightsHash=g.hash.copyTo(R.lightsHash),R.receiveShadow=v.receiveShadow,R.shadowType=v.shadowType,R.numClippingPlanes=I,R.outputEncoding=t.outputEncoding,R.gammaFactor=t.gammaFactor,R.disableShadowSampler=m.disableShadowSampler,A.needsUpdate=!1}const D=R.program;if(n.onlyCompile||!D.isReady(s.parallelShaderCompileExt))return;i.setProgram(D),this._geometries.setGeometry(P,c),v.morphTargetInfluences&&this._updateMorphtargets(v,P,D),r.setup(v,P,D);let Q=!1;(D.lightId!==g.id||D.lightVersion!==g.version)&&(Q=!0,D.lightId=g.id,D.lightVersion=g.version);let H=!1;(D.cameraId!==E.id||D.cameraVersion!==E.version)&&(H=!0,D.cameraId=E.id,D.cameraVersion=E.version);let K=!1;(D.sceneId!==m.id||D.sceneVersion!==m.version)&&(K=!0,D.sceneId=m.id,D.sceneVersion=m.version);let ee=!0;A.forceUpdateUniforms||(R.pass!==c.count?R.pass=c.count:ee=this._currentMaterial!==A),this._currentMaterial=A;const $=D.getUniforms();A.acceptLight&&this._uploadLights($,g,m.disableShadowSampler,Q),v.isSkinnedMesh&&this._uploadSkeleton($,v,m);for(let V=0,re=$.seq.length;V<re;V++){const Y=$.seq[V],Ce=Y.id,Le=Y.internalGroup;if(A.uniforms&&A.uniforms[Ce]!==void 0){Y.set(A.uniforms[Ce],o);continue}if(Le===1){let $e=v.worldMatrix;m.useAnchorMatrix&&($e=_n.copy($e).premultiply(m.anchorMatrixInverse)),Y.set($e.elements);continue}if(Le===2&&H){Y.internalFun(E);continue}if(Le===3&&K){Y.internalFun(m);continue}if(Le===4&&ee){Y.internalFun(A,o);continue}if(Le===5){if(Ce==="u_PointScale"){const $e=x.height*.5;Y.set($e)}else Y.internalFun(b,o);continue}Ce==="clippingPlanes"&&Y.set(O)}const W=v.worldMatrix.determinant()<0;i.setMaterial(A,W);const z=zc.set(x.width,x.height,x.width,x.height).multiply(E.rect);z.z-=z.x,z.w-=z.y,z.x=Math.floor(z.x),z.y=Math.floor(z.y),z.z=Math.floor(z.z),z.w=Math.floor(z.w),i.viewport(z.x,z.y,z.z,z.w),this._draw(P,A,w,p),o.resetTextureUnits(),d(e),v.onAfterRender(e)}_uploadLights(e,t,n,i){const s=this._textures;t.useAmbient&&i&&e.set("u_AmbientLightColor",t.ambient),t.useSphericalHarmonics&&i&&e.set("u_SphericalHarmonicsLightData",t.sh),t.hemisNum>0&&i&&e.set("u_Hemi",t.hemisphere),t.directsNum>0&&(i&&e.set("u_Directional",t.directional),t.directShadowNum>0&&(i&&e.set("u_DirectionalShadow",t.directionalShadow),e.has("directionalShadowMap")&&(this.capabilities.version>=2&&!n?e.set("directionalShadowMap",t.directionalShadowDepthMap,s):e.set("directionalShadowMap",t.directionalShadowMap,s),e.set("directionalShadowMatrix",t.directionalShadowMatrix)),e.has("directionalDepthMap")&&e.set("directionalDepthMap",t.directionalShadowMap,s))),t.pointsNum>0&&(i&&e.set("u_Point",t.point),t.pointShadowNum>0&&(i&&e.set("u_PointShadow",t.pointShadow),e.has("pointShadowMap")&&(e.set("pointShadowMap",t.pointShadowMap,s),e.set("pointShadowMatrix",t.pointShadowMatrix)))),t.spotsNum>0&&(i&&e.set("u_Spot",t.spot),t.spotShadowNum>0&&(i&&e.set("u_SpotShadow",t.spotShadow),e.has("spotShadowMap")&&(this.capabilities.version>=2&&!n?e.set("spotShadowMap",t.spotShadowDepthMap,s):e.set("spotShadowMap",t.spotShadowMap,s),e.set("spotShadowMatrix",t.spotShadowMatrix)),e.has("spotDepthMap")&&e.set("spotDepthMap",t.spotShadowMap,s))),t.rectAreaNum>0&&(i&&e.set("u_RectArea",t.rectArea),t.LTC1&&t.LTC2?(e.set("ltc_1",t.LTC1,s),e.set("ltc_2",t.LTC2,s)):console.warn("WebGLRenderer: RectAreaLight.LTC1 and LTC2 need to be set before use."))}_uploadSkeleton(e,t,n){if(t.skeleton&&t.skeleton.bones.length>0){const i=t.skeleton,s=this.capabilities;s.maxVertexTextures>0&&(s.getExtension("OES_texture_float")||s.version>=2)?(i.boneTexture===void 0&&i.generateBoneTexture(s.version>=2),e.set("boneTexture",i.boneTexture,this._textures),e.set("boneTextureSize",i.boneTexture.image.width)):e.set("boneMatrices",i.boneMatrices),e.set("bindMatrix",t.bindMatrix.elements),_n.copy(t.bindMatrixInverse),n.useAnchorMatrix&&_n.multiply(n.anchorMatrix),e.set("bindMatrixInverse",_n.elements)}}_updateMorphtargets(e,t,n){const i=e.morphTargetInfluences;ii.has(t)||ii.set(t,i.slice(0));const s=t.morphAttributes.position,r=t.morphAttributes.normal,o=ii.get(t);for(let c=0;c<o.length;c++)o[c]!==0&&(s&&t.removeAttribute("morphTarget"+c),r&&t.removeAttribute("morphNormal"+c));for(let c=0;c<i.length;c++)o[c]=i[c];o.length=i.length;let l=0;for(let c=0;c<o.length;c++){const u=o[c];u>0&&(s&&t.addAttribute("morphTarget"+l,s[c]),r&&t.addAttribute("morphNormal"+l,r[c]),si[l]=u,l++)}for(;l<8;l++)si[l]=0;n.getUniforms().set("morphTargetInfluences",si)}_draw(e,t,n,i){const s=this.context,r=this.capabilities,o=this._buffers,l=e.instanceCount,c=l>=0,u=!!n,h=u&&n.multiDrawCount!==void 0,f=e.index!==null;let d=0,_=1/0;if(!h){const p=e.getAttribute("a_Position");if(f?_=e.index.buffer.count:p&&(_=p.buffer.count),u&&(d=Math.max(d,n.start),_=Math.min(_,n.count)),_<0||_===1/0)return}if(f){const p=o.get(e.index.buffer),m=p.bytesPerElement,g=p.type;if(g===s.UNSIGNED_INT&&r.version<2&&!r.getExtension("OES_element_index_uint")&&console.warn("WebGLRenderer: draw elements type not support UNSIGNED_INT!"),c){if(l<=0)return;if(r.version>=2)s.drawElementsInstanced(t.drawMode,_,g,d*m,l);else if(r.getExtension("ANGLE_instanced_arrays"))r.getExtension("ANGLE_instanced_arrays").drawElementsInstancedANGLE(t.drawMode,_,g,d*m,l);else{console.warn("WebGLRenderer: using instanced draw but hardware does not support.");return}}else if(h){if(n.multiDrawCount<=0)return;const E=r.getExtension("WEBGL_multi_draw");if(!E){console.warn("WebGLRenderer: using multi draw but hardware does not support extension WEBGL_multi_draw.");return}E.multiDrawElementsWEBGL(t.drawMode,n.multiDrawCounts,0,g,n.multiDrawStarts,0,n.multiDrawCount)}else s.drawElements(t.drawMode,_,g,d*m)}else if(c){if(l<=0)return;if(r.version>=2)s.drawArraysInstanced(t.drawMode,d,_,l);else if(r.getExtension("ANGLE_instanced_arrays"))r.getExtension("ANGLE_instanced_arrays").drawArraysInstancedANGLE(t.drawMode,d,_,l);else{console.warn("WebGLRenderer: using instanced draw but hardware does not support.");return}}else if(h){if(n.multiDrawCount<=0)return;const p=r.getExtension("WEBGL_multi_draw");if(!p){console.warn("WebGLRenderer: using multi draw but hardware does not support extension WEBGL_multi_draw.");return}p.multiDrawArraysWEBGL(t.drawMode,n.multiDrawStarts,0,n.multiDrawCounts,0,n.multiDrawCount)}else s.drawArrays(t.drawMode,d,_);if(i){if(h){_=0;for(let p=0;p<n.multiDrawCount;p++)_+=n.multiDrawCounts[p]}i.update(_,t.drawMode,l<0?1:l)}}}class Xc extends Ee{constructor(){super()}}Xc.prototype.isGroup=!0;Object.defineProperties(Gr.prototype,{gl:{configurable:!0,get:function(){return this.context}},renderTarget:{configurable:!0,get:function(){return console.warn("WebGLRenderer: .renderTarget has been deprecated. All methods are moved to WebGLRenderer."),this._renderTargets}},state:{configurable:!0,get:function(){return console.warn("WebGLRenderer: .state has been deprecated. All methods are moved to WebGLRenderer."),this._state}},vertexArrayBindings:{configurable:!0,get:function(){return console.warn("WebGLRenderer: .vertexArrayBindings has been deprecated. All methods are moved to WebGLRenderer."),this._vertexArrayBindings}}});Gr.prototype.render=function(a,e,t){this.renderRenderableItem(a,e,t)};Pe.MATCAP="matcap";class Pf{constructor(e,t){this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new T,this.up=new T(0,1,0),this.minDistance=0,this.maxDistance=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!0,this.dampingFactor=.1,this.enableDollying=!0,this.dollyingSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:37,UP:38,RIGHT:39,BOTTOM:40},this.mouseButtons={ORBIT:0,DOLLY:1,PAN:2},this.touches={ORBIT:1,DOLLY_PAN:2},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this._domElementKeyEvents=null,this.getPolarAngle=function(){return o.phi},this.getAzimuthalAngle=function(){return o.theta},this.listenToKeyEvents=function(S){S.addEventListener("keydown",$i),n._domElementKeyEvents=S},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position)},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),s=i.NONE},this.update=function(){const S=new T,B=new T(0,1,0),J=new je,ae=J.clone(),Ge=new T,Dt=new je,ut=2*Math.PI;return function(){J.setFromUnitVectors(n.up,B),ae.copy(J).conjugate();const en=n.object.position;S.copy(en).sub(n.target),S.applyQuaternion(J),o.setFromVector3(S),n.autoRotate&&s===i.NONE&&L(P()),n.enableDamping?(o.theta+=l.theta*n.dampingFactor,o.phi+=l.phi*n.dampingFactor):(o.theta+=l.theta,o.phi+=l.phi);let Te=n.minAzimuthAngle,Fe=n.maxAzimuthAngle;return isFinite(Te)&&isFinite(Fe)&&(Te<-Math.PI?Te+=ut:Te>Math.PI&&(Te-=ut),Fe<-Math.PI?Fe+=ut:Fe>Math.PI&&(Fe-=ut),Te<=Fe?o.theta=Math.max(Te,Math.min(Fe,o.theta)):o.theta=o.theta>(Te+Fe)/2?Math.max(Te,o.theta):Math.min(Fe,o.theta)),o.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,o.phi)),o.makeSafe(),o.radius*=c,o.radius=Math.max(n.minDistance,Math.min(n.maxDistance,o.radius)),n.enableDamping===!0?n.target.addScaledVector(u,n.dampingFactor):n.target.add(u),S.setFromSpherical(o),S.applyQuaternion(ae),en.copy(n.target).add(S),n.object.lookAt(n.target,n.up),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,u.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),u.set(0,0,0)),c=1,Ge.distanceToSquared(n.object.position)>r||8*(1-Dt.dot(n.object.quaternion))>r?(Ge.copy(n.object.position),Dt.copy(n.object.quaternion),!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",Ji),n.domElement.removeEventListener("pointerdown",qi),n.domElement.removeEventListener("pointercancel",Zi),n.domElement.removeEventListener("wheel",Ki),n.domElement.removeEventListener("pointermove",yn),n.domElement.removeEventListener("pointerup",Mn),n._domElementKeyEvents!==null&&n._domElementKeyEvents.removeEventListener("keydown",$i)};const n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_DOLLY_PAN:4};let s=i.NONE;const r=1e-6,o=new gn,l=new gn;let c=1;const u=new T,h=new G,f=new G,d=new G,_=new G,p=new G,m=new G,g=new G,E=new G,x=new G,v=[],A={};function P(){return 2*Math.PI/60/60*n.autoRotateSpeed}function w(){return Math.pow(.95,n.dollyingSpeed)}function L(S){l.theta-=S}function b(S){l.phi-=S}const O=function(){const S=new T;return function(J,ae){S.setFromMatrixColumn(ae,0),S.multiplyScalar(-J),u.add(S)}}(),I=function(){const S=new T;return function(J,ae){n.screenSpacePanning===!0?S.setFromMatrixColumn(ae,1):(S.setFromMatrixColumn(ae,0),S.crossVectors(n.up,S)),S.multiplyScalar(J),u.add(S)}}(),R=function(){const S=new T,B=new T;return function(ae,Ge){const Dt=n.domElement,ut=n.object.position;S.copy(ut).sub(n.target);const ns=S.getLength(),en=B.set(0,0,ns).applyMatrix4(n.object.projectionMatrix).z,Te=B.set(0,-1,en).applyMatrix4(n.object.projectionMatrixInverse).y;O(2*ae*Te/Dt.clientHeight,n.object.matrix),I(2*Ge*Te/Dt.clientHeight,n.object.matrix)}}();function D(S){c/=S}function Q(S){c*=S}function H(S){h.set(S.clientX,S.clientY)}function K(S){g.set(S.clientX,S.clientY)}function ee(S){_.set(S.clientX,S.clientY)}function $(S){f.set(S.clientX,S.clientY),d.subVectors(f,h).multiplyScalar(n.rotateSpeed);const B=n.domElement;L(2*Math.PI*d.x/B.clientHeight),b(2*Math.PI*d.y/B.clientHeight),h.copy(f)}function W(S){E.set(S.clientX,S.clientY),x.subVectors(E,g),x.y>0?D(w()):x.y<0&&Q(w()),g.copy(E)}function z(S){p.set(S.clientX,S.clientY),m.subVectors(p,_).multiplyScalar(n.panSpeed),R(m.x,m.y),_.copy(p)}function V(S){S.deltaY<0?Q(w()):S.deltaY>0&&D(w())}function re(S){let B=!1;switch(S.keyCode){case n.keys.UP:R(0,n.keyPanSpeed),B=!0;break;case n.keys.BOTTOM:R(0,-n.keyPanSpeed),B=!0;break;case n.keys.LEFT:R(n.keyPanSpeed,0),B=!0;break;case n.keys.RIGHT:R(-n.keyPanSpeed,0),B=!0;break}B&&S.preventDefault()}function Y(){if(v.length===1)h.set(v[0].pageX,v[0].pageY);else{const S=.5*(v[0].pageX+v[1].pageX),B=.5*(v[0].pageY+v[1].pageY);h.set(S,B)}}function Ce(){if(v.length===1)_.set(v[0].pageX,v[0].pageY);else{const S=.5*(v[0].pageX+v[1].pageX),B=.5*(v[0].pageY+v[1].pageY);_.set(S,B)}}function Le(){const S=v[0].pageX-v[1].pageX,B=v[0].pageY-v[1].pageY,J=Math.sqrt(S*S+B*B);g.set(0,J)}function $e(){n.enableDollying&&Le(),n.enablePan&&Ce()}function ia(S){if(v.length==1)f.set(S.pageX,S.pageY);else{const J=Pn(S),ae=.5*(S.pageX+J.x),Ge=.5*(S.pageY+J.y);f.set(ae,Ge)}d.subVectors(f,h).multiplyScalar(n.rotateSpeed);const B=n.domElement;L(2*Math.PI*d.x/B.clientHeight),b(2*Math.PI*d.y/B.clientHeight),h.copy(f)}function sa(S){if(v.length===1)p.set(S.pageX,S.pageY);else{const B=Pn(S),J=.5*(S.pageX+B.x),ae=.5*(S.pageY+B.y);p.set(J,ae)}m.subVectors(p,_).multiplyScalar(n.panSpeed),R(m.x,m.y),_.copy(p)}function ra(S){const B=Pn(S),J=S.pageX-B.x,ae=S.pageY-B.y,Ge=Math.sqrt(J*J+ae*ae);E.set(0,Ge),x.set(0,Math.pow(E.y/g.y,n.dollyingSpeed)),D(x.y),g.copy(E)}function aa(S){n.enableDollying&&ra(S),n.enablePan&&sa(S)}function qi(S){n.enabled!==!1&&(v.length===0&&(n.domElement.setPointerCapture(S.pointerId),n.domElement.addEventListener("pointermove",yn),n.domElement.addEventListener("pointerup",Mn)),ha(S),S.pointerType==="touch"?ca(S):oa(S))}function yn(S){n.enabled!==!1&&(S.pointerType==="touch"?ua(S):la(S))}function Mn(S){es(S),v.length===0&&(n.domElement.releasePointerCapture(S.pointerId),n.domElement.removeEventListener("pointermove",yn),n.domElement.removeEventListener("pointerup",Mn)),s=i.NONE}function Zi(S){es(S)}function oa(S){switch(S.button){case n.mouseButtons.ORBIT:if(n.enableRotate===!1)return;H(S),s=i.ROTATE;break;case n.mouseButtons.DOLLY:if(n.enableDollying===!1)return;K(S),s=i.DOLLY;break;case n.mouseButtons.PAN:if(n.enablePan===!1)return;ee(S),s=i.PAN;break}}function la(S){switch(s){case i.ROTATE:if(n.enableRotate===!1)return;$(S);break;case i.DOLLY:if(n.enableDollying===!1)return;W(S);break;case i.PAN:if(n.enablePan===!1)return;z(S);break}}function Ki(S){n.enabled===!1||n.enableDollying===!1||s!==i.NONE||(S.preventDefault(),V(S))}function $i(S){n.enabled===!1||n.enablePan===!1||re(S)}function ca(S){switch(ts(S),v.length){case n.touches.ORBIT:if(n.enableRotate===!1)return;Y(),s=i.TOUCH_ROTATE;break;case n.touches.DOLLY_PAN:if(n.enableDollying===!1&&n.enablePan===!1)return;$e(),s=i.TOUCH_DOLLY_PAN;break;default:s=i.NONE}}function ua(S){switch(ts(S),s){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;ia(S);break;case i.TOUCH_DOLLY_PAN:if(n.enableDollying===!1&&n.enablePan===!1)return;aa(S);break;default:s=i.NONE}}function Ji(S){n.enabled!==!1&&S.preventDefault()}function ha(S){v.push(S)}function es(S){delete A[S.pointerId];for(let B=0;B<v.length;B++)if(v[B].pointerId==S.pointerId){v.splice(B,1);return}}function ts(S){let B=A[S.pointerId];B===void 0&&(B=new G,A[S.pointerId]=B),B.set(S.pageX,S.pageY)}function Pn(S){const B=S.pointerId===v[0].pointerId?v[1]:v[0];return A[B.pointerId]}n.domElement.addEventListener("contextmenu",Ji),n.domElement.addEventListener("pointerdown",qi),n.domElement.addEventListener("pointercancel",Zi),n.domElement.addEventListener("wheel",Ki,{passive:!1}),this.update()}}class Kt{constructor(e,t,n){this.autoUpdate=!0,this.needsUpdate=!0,this.enableCameraJitter=!1}needRender(){return this.autoUpdate?!0:this.needsUpdate?(this.needsUpdate=!1,!0):!1}setGeometryReplaceFunction(e){}setIfRenderReplaceFunction(e){}render(e,t,n,i){}output(e){}resize(e,t){this.needsUpdate=!0}dispose(){this.needsUpdate=!0}}class Z{constructor(){this.name="",this.bufferDependencies=[],this.active=!0,this.needCameraJitter=!1}render(e,t,n,i,s){console.error("Effect: .render() must be implemented in subclass.")}resize(e,t){}dispose(){}}const X=`
    attribute vec3 a_Position;
    attribute vec2 a_Uv;

    uniform mat4 u_ProjectionView;
    uniform mat4 u_Model;

    varying vec2 v_Uv;

    void main() {
        v_Uv = a_Uv;
        gl_Position = u_ProjectionView * u_Model * vec4(a_Position, 1.0);
    }
`,Vc=`
vec2 unitVectorToOctahedron(vec3 v) {
    vec2 up = v.xz / dot(vec3(1.0), abs(v));
    vec2 down = (1.0 - abs(up.yx)) * sign(up.xy);
    return mix(up, down, step(0.0, -v.y));
}`,$t=`
vec3 octahedronToUnitVector(vec2 p) {
    vec3 v = vec3(p.x, 1.0 - dot(abs(p), vec2(1.0)), p.y);
    v.xz = mix(v.xz, (1.0 - abs(v.zx)) * sign(v.xz), step(0.0, -v.y));
    return normalize(v);
}`,Hi={name:"ec_blur",defines:{NORMALTEX_ENABLED:0,DEPTHTEX_ENABLED:0,DEPTH_PACKING:0,KERNEL_SIZE_INT:"5",KERNEL_SIZE_FLOAT:"5.0"},uniforms:{tDiffuse:null,textureSize:[512,512],direction:0,blurSize:1,kernel:[.122581,.233062,.288713,.233062,.122581],normalTex:null,depthTex:null,projection:new Float32Array(16),viewInverseTranspose:new Float32Array(16),depthRange:1},vertexShader:X,fragmentShader:`
        uniform vec2 textureSize;
        uniform int direction;
        uniform float blurSize;
        uniform float kernel[KERNEL_SIZE_INT];

        #if NORMALTEX_ENABLED == 1
            uniform sampler2D normalTex;
            uniform mat4 viewInverseTranspose;

            ${$t}

            vec3 getViewNormal(const in vec2 screenPosition) {
                vec3 normal = octahedronToUnitVector(texture2D(normalTex, screenPosition).rg);
                // Convert to view space
                return (viewInverseTranspose * vec4(normal, 0.0)).xyz;
            }
        #endif

        #if DEPTHTEX_ENABLED == 1
			#if DEPTH_PACKING == 1
				#include <packing>
			#endif
			uniform sampler2D depthTex;
			uniform mat4 projection;
			uniform float depthRange;
			float getDepth( const in vec2 screenPosition ) {
				#if DEPTH_PACKING == 1
					return unpackRGBAToDepth( texture2D( depthTex, screenPosition ) );
				#else
					return texture2D( depthTex, screenPosition ).r;
				#endif
			}
			float getLinearDepth(vec2 coord) {
				float depth = getDepth(coord) * 2.0 - 1.0;
				return projection[3][2] / (depth * projection[2][3] - projection[2][2]);
			}
		#endif

        uniform sampler2D tDiffuse;
        varying vec2 v_Uv;

        void main() {
            vec2 off = vec2(0.0);
            if (direction == 0) {
                off[0] = blurSize / textureSize.x;
            } else {
                off[1] = blurSize / textureSize.y;
            }

            vec4 sum = vec4(0.0);
            float weightAll = 0.0;

            #if NORMALTEX_ENABLED == 1
                vec3 centerNormal = getViewNormal(v_Uv);
            #endif
            #if DEPTHTEX_ENABLED == 1
                float centerDepth = getLinearDepth(v_Uv);
            #endif

            for (int i = 0; i < KERNEL_SIZE_INT; i++) {
				vec2 coord = clamp(v_Uv + vec2(float(i) - (KERNEL_SIZE_FLOAT - 1.) / 2.) * off, vec2(0.0), vec2(1.0));
				float w = kernel[i];

				#if NORMALTEX_ENABLED == 1
					vec3 normal = getViewNormal(coord);
					w *= clamp(dot(normal, centerNormal), 0.0, 1.0);
				#endif
				#if DEPTHTEX_ENABLED == 1
					float d = getLinearDepth(coord);
		            // PENDING Better equation?
		            // w *= (1.0 - smoothstep(abs(centerDepth - d) / depthRange, 0.0, 1.0));
					w *= (1.0 - smoothstep(0.0, 1.0, abs(centerDepth - d) / depthRange));
				#endif

				weightAll += w;
				sum += w * texture2D(tDiffuse, coord);
			}

			gl_FragColor = sum / weightAll;
        }
    `},Rt={name:"ec_additive",defines:{},uniforms:{texture1:null,colorWeight1:1,alphaWeight1:1,texture2:null,colorWeight2:1,alphaWeight2:1},vertexShader:X,fragmentShader:`
        uniform sampler2D texture1;
        uniform float colorWeight1;
        uniform float alphaWeight1;

        uniform sampler2D texture2;
        uniform float colorWeight2;
        uniform float alphaWeight2;

        varying vec2 v_Uv;

        void main() {
            vec4 texel1 = texture2D(texture1, v_Uv);
            vec4 texel2 = texture2D(texture2, v_Uv);
            vec3 color = texel1.rgb * colorWeight1 + texel2.rgb * colorWeight2;
            float alpha = texel1.a * alphaWeight1 + texel2.a * alphaWeight2;
            gl_FragColor = vec4(color, alpha);
        }
    `},kr={name:"ec_multiply",defines:{},uniforms:{texture1:null,texture2:null},vertexShader:X,fragmentShader:`
        uniform sampler2D texture1;
        uniform sampler2D texture2;

        varying vec2 v_Uv;

        void main() {
            vec4 texel1 = texture2D(texture1, v_Uv);
            vec4 texel2 = texture2D(texture2, v_Uv);
            gl_FragColor = texel1 * texel2;
        }
    `},Xi={name:"ec_copy",defines:{},uniforms:{tDiffuse:null},vertexShader:X,fragmentShader:`
        uniform sampler2D tDiffuse;

        varying vec2 v_Uv;

        void main() {
            gl_FragColor = texture2D(tDiffuse, v_Uv);
        }
    `},Vi={name:"ec_channel",defines:{},uniforms:{tDiffuse:null,channelMask:[1,0,0,0]},vertexShader:X,fragmentShader:`
        uniform sampler2D tDiffuse;
		uniform vec4 channelMask;

        varying vec2 v_Uv;

        void main() {
			float value = dot(texture2D(tDiffuse, v_Uv), channelMask);
            gl_FragColor = vec4(vec3(value), 1.0);
        }
    `},Jt={name:"ec_mask",defines:{},uniforms:{colorTexture:null,maskTexture:null,channel:[1,0,0,0],additiveTexture:null,additiveStrength:1},vertexShader:X,fragmentShader:`
        uniform sampler2D colorTexture;

		uniform sampler2D maskTexture;
        uniform vec4 channel;

		uniform sampler2D additiveTexture;
        uniform float additiveStrength;
		
        varying vec2 v_Uv;

        void main() {
			vec4 colorTex = texture2D(colorTexture, v_Uv);
			vec4 maskTex = texture2D(maskTexture, v_Uv);
			vec4 addTex = texture2D(additiveTexture, v_Uv);
            gl_FragColor = colorTex * dot(maskTex, channel) + addTex * additiveStrength;
        }
    `},Hr={name:"ec_highlight",defines:{},uniforms:{tDiffuse:null,diffuseStrength:1,threshold:1,smoothWidth:.01},vertexShader:X,fragmentShader:`
        uniform float threshold;
		uniform float smoothWidth;

        uniform sampler2D tDiffuse;
        uniform float diffuseStrength;

        varying vec2 v_Uv;

        void main() {
            vec4 texel = texture2D(tDiffuse, v_Uv) * diffuseStrength;
            vec3 luma = vec3(0.299, 0.587, 0.114);
            float v = dot(texel.xyz, luma);
            gl_FragColor = smoothstep(threshold, threshold + smoothWidth, v) * texel;
        }
    `},Wc={name:"ec_seperable_blur",defines:{MAX_RADIUS:4},uniforms:{tDiffuse:null,texSize:[.5,.5],direction:[.5,.5],kernelRadius:1},vertexShader:X,fragmentShader:`
        uniform vec2 texSize;
        uniform vec2 direction;
        uniform float kernelRadius;

        uniform sampler2D tDiffuse;
        varying vec2 v_Uv;

        float gaussianPdf(in float x, in float sigma) {
			return 0.39894 * exp(-0.5 * x * x / (sigma * sigma)) / sigma;
		}

        void main() {
            vec2 invSize = 1.0 / texSize;
			float weightSum = gaussianPdf(0.0, kernelRadius);
			vec4 diffuseColor = texture2D(tDiffuse, v_Uv);
			vec4 diffuseSum = diffuseColor * weightSum;
			vec2 delta = direction * invSize * kernelRadius / float(MAX_RADIUS);
			vec2 uvOffset = delta;
			for( int i = 1; i <= MAX_RADIUS; i ++ ) {
				float w = gaussianPdf(uvOffset.x, kernelRadius);
				vec4 sample1 = texture2D(tDiffuse, v_Uv + uvOffset);
				vec4 sample2 = texture2D(tDiffuse, v_Uv - uvOffset);
				diffuseSum += ((sample1 + sample2) * w);
				weightSum += (2.0 * w);
				uvOffset += delta;
			}
			vec4 color = diffuseSum / weightSum;
			gl_FragColor = color;
        }
    `},Xr={name:"ec_h_blur",uniforms:{tDiffuse:null,h:1/512},vertexShader:X,fragmentShader:`
		uniform float h;

        uniform sampler2D tDiffuse;
        varying vec2 v_Uv;

        void main() {
            vec4 sum = vec4(0.0);
           
			sum += texture2D(tDiffuse, vec2(v_Uv.x - 4.0 * h, v_Uv.y)) * 0.051;
			sum += texture2D(tDiffuse, vec2(v_Uv.x - 3.0 * h, v_Uv.y)) * 0.0918;
			sum += texture2D(tDiffuse, vec2(v_Uv.x - 2.0 * h, v_Uv.y)) * 0.12245;
			sum += texture2D(tDiffuse, vec2(v_Uv.x - 1.0 * h, v_Uv.y)) * 0.1531;
			sum += texture2D(tDiffuse, vec2(v_Uv.x, v_Uv.y)) * 0.1633;
			sum += texture2D(tDiffuse, vec2(v_Uv.x + 1.0 * h, v_Uv.y)) * 0.1531;
			sum += texture2D(tDiffuse, vec2(v_Uv.x + 2.0 * h, v_Uv.y)) * 0.12245;
			sum += texture2D(tDiffuse, vec2(v_Uv.x + 3.0 * h, v_Uv.y)) * 0.0918;
			sum += texture2D(tDiffuse, vec2(v_Uv.x + 4.0 * h, v_Uv.y)) * 0.051;

			gl_FragColor = sum;
        }
    `},Vr={name:"ec_v_blur",uniforms:{tDiffuse:null,v:1/512},vertexShader:X,fragmentShader:`
		uniform float v;

        uniform sampler2D tDiffuse;
        varying vec2 v_Uv;

        void main() {
            vec4 sum = vec4(0.0);
           
			sum += texture2D(tDiffuse, vec2(v_Uv.x, v_Uv.y - 4.0 * v)) * 0.051;
            sum += texture2D(tDiffuse, vec2(v_Uv.x, v_Uv.y - 3.0 * v)) * 0.0918;
			sum += texture2D(tDiffuse, vec2(v_Uv.x, v_Uv.y - 2.0 * v)) * 0.12245;
			sum += texture2D(tDiffuse, vec2(v_Uv.x, v_Uv.y - 1.0 * v)) * 0.1531;
			sum += texture2D(tDiffuse, vec2(v_Uv.x, v_Uv.y)) * 0.1633;
			sum += texture2D(tDiffuse, vec2(v_Uv.x, v_Uv.y + 1.0 * v)) * 0.1531;
			sum += texture2D(tDiffuse, vec2(v_Uv.x, v_Uv.y + 2.0 * v)) * 0.12245;
			sum += texture2D(tDiffuse, vec2(v_Uv.x, v_Uv.y + 3.0 * v)) * 0.0918;
			sum += texture2D(tDiffuse, vec2(v_Uv.x, v_Uv.y + 4.0 * v)) * 0.051;

			gl_FragColor = sum;
        }
    `},Qc={name:"ec_fxaa",defines:{},uniforms:{tDiffuse:null,resolution:[1/1024,1/512]},vertexShader:X,fragmentShader:`
        uniform sampler2D tDiffuse;
        varying vec2 v_Uv;
        
        uniform vec2 resolution;  
        
        // FXAA 3.11 implementation by NVIDIA, ported to WebGL by Agost Biro (biro@archilogic.com)
        
        //----------------------------------------------------------------------------------
        // File:        es3-kepler/FXAA/assets/shaders/FXAA_DefaultES.frag
        // SDK Version: v3.00
        // Email:       gameworks@nvidia.com
        // Site:        http://developer.nvidia.com/
        //
        // Copyright (c) 2014-2015, NVIDIA CORPORATION. All rights reserved.
        //
        // Redistribution and use in source and binary forms, with or without
        // modification, are permitted provided that the following conditions
        // are met:
        //  * Redistributions of source code must retain the above copyright
        //    notice, this list of conditions and the following disclaimer.
        //  * Redistributions in binary form must reproduce the above copyright
        //    notice, this list of conditions and the following disclaimer in the
        //    documentation and/or other materials provided with the distribution.
        //  * Neither the name of NVIDIA CORPORATION nor the names of its
        //    contributors may be used to endorse or promote products derived
        //    from this software without specific prior written permission.
        //
        // THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS "AS IS" AND ANY
        // EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
        // IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR
        // PURPOSE ARE DISCLAIMED.  IN NO EVENT SHALL THE COPYRIGHT OWNER OR
        // CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
        // EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,
        // PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
        // PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY
        // OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
        // (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
        // OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
        //
        //----------------------------------------------------------------------------------
        
        #define FXAA_PC 1
        #define FXAA_GLSL_100 1
        #define FXAA_QUALITY_PRESET 39
        
        #define FXAA_GREEN_AS_LUMA 1
        
        /*--------------------------------------------------------------------------*/
        #ifndef FXAA_PC_CONSOLE
            //
            // The console algorithm for PC is included
            // for developers targeting really low spec machines.
            // Likely better to just run FXAA_PC, and use a really low preset.
            //
            #define FXAA_PC_CONSOLE 0
        #endif
        /*--------------------------------------------------------------------------*/
        #ifndef FXAA_GLSL_120
            #define FXAA_GLSL_120 0
        #endif
        /*--------------------------------------------------------------------------*/
        #ifndef FXAA_GLSL_130
            #define FXAA_GLSL_130 0
        #endif
        /*--------------------------------------------------------------------------*/
        #ifndef FXAA_HLSL_3
            #define FXAA_HLSL_3 0
        #endif
        /*--------------------------------------------------------------------------*/
        #ifndef FXAA_HLSL_4
            #define FXAA_HLSL_4 0
        #endif
        /*--------------------------------------------------------------------------*/
        #ifndef FXAA_HLSL_5
            #define FXAA_HLSL_5 0
        #endif
        /*==========================================================================*/
        #ifndef FXAA_GREEN_AS_LUMA
            //
            // For those using non-linear color,
            // and either not able to get luma in alpha, or not wanting to,
            // this enables FXAA to run using green as a proxy for luma.
            // So with this enabled, no need to pack luma in alpha.
            //
            // This will turn off AA on anything which lacks some amount of green.
            // Pure red and blue or combination of only R and B, will get no AA.
            //
            // Might want to lower the settings for both,
            //    fxaaConsoleEdgeThresholdMin
            //    fxaaQualityEdgeThresholdMin
            // In order to insure AA does not get turned off on colors
            // which contain a minor amount of green.
            //
            // 1 = On.
            // 0 = Off.
            //
            #define FXAA_GREEN_AS_LUMA 0
        #endif
        /*--------------------------------------------------------------------------*/
        #ifndef FXAA_EARLY_EXIT
            //
            // Controls algorithm's early exit path.
            // On PS3 turning this ON adds 2 cycles to the shader.
            // On 360 turning this OFF adds 10ths of a millisecond to the shader.
            // Turning this off on console will result in a more blurry image.
            // So this defaults to on.
            //
            // 1 = On.
            // 0 = Off.
            //
            #define FXAA_EARLY_EXIT 1
        #endif
        /*--------------------------------------------------------------------------*/
        #ifndef FXAA_DISCARD
            //
            // Only valid for PC OpenGL currently.
            // Probably will not work when FXAA_GREEN_AS_LUMA = 1.
            //
            // 1 = Use discard on pixels which don't need AA.
            //     For APIs which enable concurrent TEX+ROP from same surface.
            // 0 = Return unchanged color on pixels which don't need AA.
            //
            #define FXAA_DISCARD 0
        #endif
        /*--------------------------------------------------------------------------*/
        #ifndef FXAA_FAST_PIXEL_OFFSET
            //
            // Used for GLSL 120 only.
            //
            // 1 = GL API supports fast pixel offsets
            // 0 = do not use fast pixel offsets
            //
            #ifdef GL_EXT_gpu_shader4
                #define FXAA_FAST_PIXEL_OFFSET 1
            #endif
            #ifdef GL_NV_gpu_shader5
                #define FXAA_FAST_PIXEL_OFFSET 1
            #endif
            #ifdef GL_ARB_gpu_shader5
                #define FXAA_FAST_PIXEL_OFFSET 1
            #endif
            #ifndef FXAA_FAST_PIXEL_OFFSET
                #define FXAA_FAST_PIXEL_OFFSET 0
            #endif
        #endif
        /*--------------------------------------------------------------------------*/
        #ifndef FXAA_GATHER4_ALPHA
            //
            // 1 = API supports gather4 on alpha channel.
            // 0 = API does not support gather4 on alpha channel.
            //
            #if (FXAA_HLSL_5 == 1)
                #define FXAA_GATHER4_ALPHA 1
            #endif
            #ifdef GL_ARB_gpu_shader5
                #define FXAA_GATHER4_ALPHA 1
            #endif
            #ifdef GL_NV_gpu_shader5
                #define FXAA_GATHER4_ALPHA 1
            #endif
            #ifndef FXAA_GATHER4_ALPHA
                #define FXAA_GATHER4_ALPHA 0
            #endif
        #endif
        
        
        /*============================================================================
                                FXAA QUALITY - TUNING KNOBS
        ------------------------------------------------------------------------------
        NOTE the other tuning knobs are now in the shader function inputs!
        ============================================================================*/
        #ifndef FXAA_QUALITY_PRESET
            //
            // Choose the quality preset.
            // This needs to be compiled into the shader as it effects code.
            // Best option to include multiple presets is to
            // in each shader define the preset, then include this file.
            //
            // OPTIONS
            // -----------------------------------------------------------------------
            // 10 to 15 - default medium dither (10=fastest, 15=highest quality)
            // 20 to 29 - less dither, more expensive (20=fastest, 29=highest quality)
            // 39       - no dither, very expensive
            //
            // NOTES
            // -----------------------------------------------------------------------
            // 12 = slightly faster then FXAA 3.9 and higher edge quality (default)
            // 13 = about same speed as FXAA 3.9 and better than 12
            // 23 = closest to FXAA 3.9 visually and performance wise
            //  _ = the lowest digit is directly related to performance
            // _  = the highest digit is directly related to style
            //
            #define FXAA_QUALITY_PRESET 12
        #endif
        
        
        /*============================================================================
        
                                FXAA QUALITY - PRESETS
        
        ============================================================================*/
        
        /*============================================================================
                            FXAA QUALITY - MEDIUM DITHER PRESETS
        ============================================================================*/
        #if (FXAA_QUALITY_PRESET == 10)
            #define FXAA_QUALITY_PS 3
            #define FXAA_QUALITY_P0 1.5
            #define FXAA_QUALITY_P1 3.0
            #define FXAA_QUALITY_P2 12.0
        #endif
        /*--------------------------------------------------------------------------*/
        #if (FXAA_QUALITY_PRESET == 11)
            #define FXAA_QUALITY_PS 4
            #define FXAA_QUALITY_P0 1.0
            #define FXAA_QUALITY_P1 1.5
            #define FXAA_QUALITY_P2 3.0
            #define FXAA_QUALITY_P3 12.0
        #endif
        /*--------------------------------------------------------------------------*/
        #if (FXAA_QUALITY_PRESET == 12)
            #define FXAA_QUALITY_PS 5
            #define FXAA_QUALITY_P0 1.0
            #define FXAA_QUALITY_P1 1.5
            #define FXAA_QUALITY_P2 2.0
            #define FXAA_QUALITY_P3 4.0
            #define FXAA_QUALITY_P4 12.0
        #endif
        /*--------------------------------------------------------------------------*/
        #if (FXAA_QUALITY_PRESET == 13)
            #define FXAA_QUALITY_PS 6
            #define FXAA_QUALITY_P0 1.0
            #define FXAA_QUALITY_P1 1.5
            #define FXAA_QUALITY_P2 2.0
            #define FXAA_QUALITY_P3 2.0
            #define FXAA_QUALITY_P4 4.0
            #define FXAA_QUALITY_P5 12.0
        #endif
        /*--------------------------------------------------------------------------*/
        #if (FXAA_QUALITY_PRESET == 14)
            #define FXAA_QUALITY_PS 7
            #define FXAA_QUALITY_P0 1.0
            #define FXAA_QUALITY_P1 1.5
            #define FXAA_QUALITY_P2 2.0
            #define FXAA_QUALITY_P3 2.0
            #define FXAA_QUALITY_P4 2.0
            #define FXAA_QUALITY_P5 4.0
            #define FXAA_QUALITY_P6 12.0
        #endif
        /*--------------------------------------------------------------------------*/
        #if (FXAA_QUALITY_PRESET == 15)
            #define FXAA_QUALITY_PS 8
            #define FXAA_QUALITY_P0 1.0
            #define FXAA_QUALITY_P1 1.5
            #define FXAA_QUALITY_P2 2.0
            #define FXAA_QUALITY_P3 2.0
            #define FXAA_QUALITY_P4 2.0
            #define FXAA_QUALITY_P5 2.0
            #define FXAA_QUALITY_P6 4.0
            #define FXAA_QUALITY_P7 12.0
        #endif
        
        /*============================================================================
                            FXAA QUALITY - LOW DITHER PRESETS
        ============================================================================*/
        #if (FXAA_QUALITY_PRESET == 20)
            #define FXAA_QUALITY_PS 3
            #define FXAA_QUALITY_P0 1.5
            #define FXAA_QUALITY_P1 2.0
            #define FXAA_QUALITY_P2 8.0
        #endif
        /*--------------------------------------------------------------------------*/
        #if (FXAA_QUALITY_PRESET == 21)
            #define FXAA_QUALITY_PS 4
            #define FXAA_QUALITY_P0 1.0
            #define FXAA_QUALITY_P1 1.5
            #define FXAA_QUALITY_P2 2.0
            #define FXAA_QUALITY_P3 8.0
        #endif
        /*--------------------------------------------------------------------------*/
        #if (FXAA_QUALITY_PRESET == 22)
            #define FXAA_QUALITY_PS 5
            #define FXAA_QUALITY_P0 1.0
            #define FXAA_QUALITY_P1 1.5
            #define FXAA_QUALITY_P2 2.0
            #define FXAA_QUALITY_P3 2.0
            #define FXAA_QUALITY_P4 8.0
        #endif
        /*--------------------------------------------------------------------------*/
        #if (FXAA_QUALITY_PRESET == 23)
            #define FXAA_QUALITY_PS 6
            #define FXAA_QUALITY_P0 1.0
            #define FXAA_QUALITY_P1 1.5
            #define FXAA_QUALITY_P2 2.0
            #define FXAA_QUALITY_P3 2.0
            #define FXAA_QUALITY_P4 2.0
            #define FXAA_QUALITY_P5 8.0
        #endif
        /*--------------------------------------------------------------------------*/
        #if (FXAA_QUALITY_PRESET == 24)
            #define FXAA_QUALITY_PS 7
            #define FXAA_QUALITY_P0 1.0
            #define FXAA_QUALITY_P1 1.5
            #define FXAA_QUALITY_P2 2.0
            #define FXAA_QUALITY_P3 2.0
            #define FXAA_QUALITY_P4 2.0
            #define FXAA_QUALITY_P5 3.0
            #define FXAA_QUALITY_P6 8.0
        #endif
        /*--------------------------------------------------------------------------*/
        #if (FXAA_QUALITY_PRESET == 25)
            #define FXAA_QUALITY_PS 8
            #define FXAA_QUALITY_P0 1.0
            #define FXAA_QUALITY_P1 1.5
            #define FXAA_QUALITY_P2 2.0
            #define FXAA_QUALITY_P3 2.0
            #define FXAA_QUALITY_P4 2.0
            #define FXAA_QUALITY_P5 2.0
            #define FXAA_QUALITY_P6 4.0
            #define FXAA_QUALITY_P7 8.0
        #endif
        /*--------------------------------------------------------------------------*/
        #if (FXAA_QUALITY_PRESET == 26)
            #define FXAA_QUALITY_PS 9
            #define FXAA_QUALITY_P0 1.0
            #define FXAA_QUALITY_P1 1.5
            #define FXAA_QUALITY_P2 2.0
            #define FXAA_QUALITY_P3 2.0
            #define FXAA_QUALITY_P4 2.0
            #define FXAA_QUALITY_P5 2.0
            #define FXAA_QUALITY_P6 2.0
            #define FXAA_QUALITY_P7 4.0
            #define FXAA_QUALITY_P8 8.0
        #endif
        /*--------------------------------------------------------------------------*/
        #if (FXAA_QUALITY_PRESET == 27)
            #define FXAA_QUALITY_PS 10
            #define FXAA_QUALITY_P0 1.0
            #define FXAA_QUALITY_P1 1.5
            #define FXAA_QUALITY_P2 2.0
            #define FXAA_QUALITY_P3 2.0
            #define FXAA_QUALITY_P4 2.0
            #define FXAA_QUALITY_P5 2.0
            #define FXAA_QUALITY_P6 2.0
            #define FXAA_QUALITY_P7 2.0
            #define FXAA_QUALITY_P8 4.0
            #define FXAA_QUALITY_P9 8.0
        #endif
        /*--------------------------------------------------------------------------*/
        #if (FXAA_QUALITY_PRESET == 28)
            #define FXAA_QUALITY_PS 11
            #define FXAA_QUALITY_P0 1.0
            #define FXAA_QUALITY_P1 1.5
            #define FXAA_QUALITY_P2 2.0
            #define FXAA_QUALITY_P3 2.0
            #define FXAA_QUALITY_P4 2.0
            #define FXAA_QUALITY_P5 2.0
            #define FXAA_QUALITY_P6 2.0
            #define FXAA_QUALITY_P7 2.0
            #define FXAA_QUALITY_P8 2.0
            #define FXAA_QUALITY_P9 4.0
            #define FXAA_QUALITY_P10 8.0
        #endif
        /*--------------------------------------------------------------------------*/
        #if (FXAA_QUALITY_PRESET == 29)
            #define FXAA_QUALITY_PS 12
            #define FXAA_QUALITY_P0 1.0
            #define FXAA_QUALITY_P1 1.5
            #define FXAA_QUALITY_P2 2.0
            #define FXAA_QUALITY_P3 2.0
            #define FXAA_QUALITY_P4 2.0
            #define FXAA_QUALITY_P5 2.0
            #define FXAA_QUALITY_P6 2.0
            #define FXAA_QUALITY_P7 2.0
            #define FXAA_QUALITY_P8 2.0
            #define FXAA_QUALITY_P9 2.0
            #define FXAA_QUALITY_P10 4.0
            #define FXAA_QUALITY_P11 8.0
        #endif
        
        /*============================================================================
                            FXAA QUALITY - EXTREME QUALITY
        ============================================================================*/
        #if (FXAA_QUALITY_PRESET == 39)
            #define FXAA_QUALITY_PS 12
            #define FXAA_QUALITY_P0 1.0
            #define FXAA_QUALITY_P1 1.0
            #define FXAA_QUALITY_P2 1.0
            #define FXAA_QUALITY_P3 1.0
            #define FXAA_QUALITY_P4 1.0
            #define FXAA_QUALITY_P5 1.5
            #define FXAA_QUALITY_P6 2.0
            #define FXAA_QUALITY_P7 2.0
            #define FXAA_QUALITY_P8 2.0
            #define FXAA_QUALITY_P9 2.0
            #define FXAA_QUALITY_P10 4.0
            #define FXAA_QUALITY_P11 8.0
        #endif
        
        
        
        /*============================================================================
        
                                        API PORTING
        
        ============================================================================*/
        #if (FXAA_GLSL_100 == 1) || (FXAA_GLSL_120 == 1) || (FXAA_GLSL_130 == 1)
            #define FxaaBool bool
            #define FxaaDiscard discard
            #define FxaaFloat float
            #define FxaaFloat2 vec2
            #define FxaaFloat3 vec3
            #define FxaaFloat4 vec4
            #define FxaaHalf float
            #define FxaaHalf2 vec2
            #define FxaaHalf3 vec3
            #define FxaaHalf4 vec4
            #define FxaaInt2 ivec2
            #define FxaaSat(x) clamp(x, 0.0, 1.0)
            #define FxaaTex sampler2D
        #else
            #define FxaaBool bool
            #define FxaaDiscard clip(-1)
            #define FxaaFloat float
            #define FxaaFloat2 float2
            #define FxaaFloat3 float3
            #define FxaaFloat4 float4
            #define FxaaHalf half
            #define FxaaHalf2 half2
            #define FxaaHalf3 half3
            #define FxaaHalf4 half4
            #define FxaaSat(x) saturate(x)
        #endif
        /*--------------------------------------------------------------------------*/
        #if (FXAA_GLSL_100 == 1)
        #define FxaaTexTop(t, p) texture2D(t, p, 0.0)
        #define FxaaTexOff(t, p, o, r) texture2D(t, p + (o * r), 0.0)
        #endif
        /*--------------------------------------------------------------------------*/
        #if (FXAA_GLSL_120 == 1)
            // Requires,
            //  #version 120
            // And at least,
            //  #extension GL_EXT_gpu_shader4 : enable
            //  (or set FXAA_FAST_PIXEL_OFFSET 1 to work like DX9)
            #define FxaaTexTop(t, p) texture2DLod(t, p, 0.0)
            #if (FXAA_FAST_PIXEL_OFFSET == 1)
                #define FxaaTexOff(t, p, o, r) texture2DLodOffset(t, p, 0.0, o)
            #else
                #define FxaaTexOff(t, p, o, r) texture2DLod(t, p + (o * r), 0.0)
            #endif
            #if (FXAA_GATHER4_ALPHA == 1)
                // use #extension GL_ARB_gpu_shader5 : enable
                #define FxaaTexAlpha4(t, p) textureGather(t, p, 3)
                #define FxaaTexOffAlpha4(t, p, o) textureGatherOffset(t, p, o, 3)
                #define FxaaTexGreen4(t, p) textureGather(t, p, 1)
                #define FxaaTexOffGreen4(t, p, o) textureGatherOffset(t, p, o, 1)
            #endif
        #endif
        /*--------------------------------------------------------------------------*/
        #if (FXAA_GLSL_130 == 1)
            // Requires '#version 130' or better
            #define FxaaTexTop(t, p) textureLod(t, p, 0.0)
            #define FxaaTexOff(t, p, o, r) textureLodOffset(t, p, 0.0, o)
            #if (FXAA_GATHER4_ALPHA == 1)
                // use #extension GL_ARB_gpu_shader5 : enable
                #define FxaaTexAlpha4(t, p) textureGather(t, p, 3)
                #define FxaaTexOffAlpha4(t, p, o) textureGatherOffset(t, p, o, 3)
                #define FxaaTexGreen4(t, p) textureGather(t, p, 1)
                #define FxaaTexOffGreen4(t, p, o) textureGatherOffset(t, p, o, 1)
            #endif
        #endif
        /*--------------------------------------------------------------------------*/
        #if (FXAA_HLSL_3 == 1)
            #define FxaaInt2 float2
            #define FxaaTex sampler2D
            #define FxaaTexTop(t, p) tex2Dlod(t, float4(p, 0.0, 0.0))
            #define FxaaTexOff(t, p, o, r) tex2Dlod(t, float4(p + (o * r), 0, 0))
        #endif
        /*--------------------------------------------------------------------------*/
        #if (FXAA_HLSL_4 == 1)
            #define FxaaInt2 int2
            struct FxaaTex { SamplerState smpl; Texture2D tex; };
            #define FxaaTexTop(t, p) t.tex.SampleLevel(t.smpl, p, 0.0)
            #define FxaaTexOff(t, p, o, r) t.tex.SampleLevel(t.smpl, p, 0.0, o)
        #endif
        /*--------------------------------------------------------------------------*/
        #if (FXAA_HLSL_5 == 1)
            #define FxaaInt2 int2
            struct FxaaTex { SamplerState smpl; Texture2D tex; };
            #define FxaaTexTop(t, p) t.tex.SampleLevel(t.smpl, p, 0.0)
            #define FxaaTexOff(t, p, o, r) t.tex.SampleLevel(t.smpl, p, 0.0, o)
            #define FxaaTexAlpha4(t, p) t.tex.GatherAlpha(t.smpl, p)
            #define FxaaTexOffAlpha4(t, p, o) t.tex.GatherAlpha(t.smpl, p, o)
            #define FxaaTexGreen4(t, p) t.tex.GatherGreen(t.smpl, p)
            #define FxaaTexOffGreen4(t, p, o) t.tex.GatherGreen(t.smpl, p, o)
        #endif
        
        
        /*============================================================================
                        GREEN AS LUMA OPTION SUPPORT FUNCTION
        ============================================================================*/
        #if (FXAA_GREEN_AS_LUMA == 0)
            FxaaFloat FxaaLuma(FxaaFloat4 rgba) { return rgba.w; }
        #else
            FxaaFloat FxaaLuma(FxaaFloat4 rgba) { return rgba.y; }
        #endif
        
        
        
        
        /*============================================================================
        
                                    FXAA3 QUALITY - PC
        
        ============================================================================*/
        #if (FXAA_PC == 1)
        /*--------------------------------------------------------------------------*/
        FxaaFloat4 FxaaPixelShader(
            //
            // Use noperspective interpolation here (turn off perspective interpolation).
            // {xy} = center of pixel
            FxaaFloat2 pos,
            //
            // Used only for FXAA Console, and not used on the 360 version.
            // Use noperspective interpolation here (turn off perspective interpolation).
            // {xy_} = upper left of pixel
            // {_zw} = lower right of pixel
            FxaaFloat4 fxaaConsolePosPos,
            //
            // Input color texture.
            // {rgb_} = color in linear or perceptual color space
            // if (FXAA_GREEN_AS_LUMA == 0)
            //     {__a} = luma in perceptual color space (not linear)
            FxaaTex tex,
            //
            // Only used on the optimized 360 version of FXAA Console.
            // For everything but 360, just use the same input here as for 'tex'.
            // For 360, same diffuseMap, just alias with a 2nd sampler.
            // This sampler needs to have an exponent bias of -1.
            FxaaTex fxaaConsole360TexExpBiasNegOne,
            //
            // Only used on the optimized 360 version of FXAA Console.
            // For everything but 360, just use the same input here as for 'tex'.
            // For 360, same diffuseMap, just alias with a 3nd sampler.
            // This sampler needs to have an exponent bias of -2.
            FxaaTex fxaaConsole360TexExpBiasNegTwo,
            //
            // Only used on FXAA Quality.
            // This must be from a constant/uniform.
            // {x_} = 1.0/screenWidthInPixels
            // {_y} = 1.0/screenHeightInPixels
            FxaaFloat2 fxaaQualityRcpFrame,
            //
            // Only used on FXAA Console.
            // This must be from a constant/uniform.
            // This effects sub-pixel AA quality and inversely sharpness.
            //   Where N ranges between,
            //     N = 0.50 (default)
            //     N = 0.33 (sharper)
            // {x__} = -N/screenWidthInPixels
            // {_y_} = -N/screenHeightInPixels
            // {_z_} =  N/screenWidthInPixels
            // {__w} =  N/screenHeightInPixels
            FxaaFloat4 fxaaConsoleRcpFrameOpt,
            //
            // Only used on FXAA Console.
            // Not used on 360, but used on PS3 and PC.
            // This must be from a constant/uniform.
            // {x__} = -2.0/screenWidthInPixels
            // {_y_} = -2.0/screenHeightInPixels
            // {_z_} =  2.0/screenWidthInPixels
            // {__w} =  2.0/screenHeightInPixels
            FxaaFloat4 fxaaConsoleRcpFrameOpt2,
            //
            // Only used on FXAA Console.
            // Only used on 360 in place of fxaaConsoleRcpFrameOpt2.
            // This must be from a constant/uniform.
            // {x__} =  8.0/screenWidthInPixels
            // {_y_} =  8.0/screenHeightInPixels
            // {_z_} = -4.0/screenWidthInPixels
            // {__w} = -4.0/screenHeightInPixels
            FxaaFloat4 fxaaConsole360RcpFrameOpt2,
            //
            // Only used on FXAA Quality.
            // This used to be the FXAA_QUALITY_SUBPIX define.
            // It is here now to allow easier tuning.
            // Choose the amount of sub-pixel aliasing removal.
            // This can effect sharpness.
            //   1.00 - upper limit (softer)
            //   0.75 - default amount of filtering
            //   0.50 - lower limit (sharper, less sub-pixel aliasing removal)
            //   0.25 - almost off
            //   0.00 - completely off
            FxaaFloat fxaaQualitySubpix,
            //
            // Only used on FXAA Quality.
            // This used to be the FXAA_QUALITY_EDGE_THRESHOLD define.
            // It is here now to allow easier tuning.
            // The minimum amount of local contrast required to apply algorithm.
            //   0.333 - too little (faster)
            //   0.250 - low quality
            //   0.166 - default
            //   0.125 - high quality
            //   0.063 - overkill (slower)
            FxaaFloat fxaaQualityEdgeThreshold,
            //
            // Only used on FXAA Quality.
            // This used to be the FXAA_QUALITY_EDGE_THRESHOLD_MIN define.
            // It is here now to allow easier tuning.
            // Trims the algorithm from processing darks.
            //   0.0833 - upper limit (default, the start of visible unfiltered edges)
            //   0.0625 - high quality (faster)
            //   0.0312 - visible limit (slower)
            // Special notes when using FXAA_GREEN_AS_LUMA,
            //   Likely want to set this to zero.
            //   As colors that are mostly not-green
            //   will appear very dark in the green channel!
            //   Tune by looking at mostly non-green content,
            //   then start at zero and increase until aliasing is a problem.
            FxaaFloat fxaaQualityEdgeThresholdMin,
            //
            // Only used on FXAA Console.
            // This used to be the FXAA_CONSOLE_EDGE_SHARPNESS define.
            // It is here now to allow easier tuning.
            // This does not effect PS3, as this needs to be compiled in.
            //   Use FXAA_CONSOLE_PS3_EDGE_SHARPNESS for PS3.
            //   Due to the PS3 being ALU bound,
            //   there are only three safe values here: 2 and 4 and 8.
            //   These options use the shaders ability to a free *|/ by 2|4|8.
            // For all other platforms can be a non-power of two.
            //   8.0 is sharper (default!!!)
            //   4.0 is softer
            //   2.0 is really soft (good only for vector graphics inputs)
            FxaaFloat fxaaConsoleEdgeSharpness,
            //
            // Only used on FXAA Console.
            // This used to be the FXAA_CONSOLE_EDGE_THRESHOLD define.
            // It is here now to allow easier tuning.
            // This does not effect PS3, as this needs to be compiled in.
            //   Use FXAA_CONSOLE_PS3_EDGE_THRESHOLD for PS3.
            //   Due to the PS3 being ALU bound,
            //   there are only two safe values here: 1/4 and 1/8.
            //   These options use the shaders ability to a free *|/ by 2|4|8.
            // The console setting has a different mapping than the quality setting.
            // Other platforms can use other values.
            //   0.125 leaves less aliasing, but is softer (default!!!)
            //   0.25 leaves more aliasing, and is sharper
            FxaaFloat fxaaConsoleEdgeThreshold,
            //
            // Only used on FXAA Console.
            // This used to be the FXAA_CONSOLE_EDGE_THRESHOLD_MIN define.
            // It is here now to allow easier tuning.
            // Trims the algorithm from processing darks.
            // The console setting has a different mapping than the quality setting.
            // This only applies when FXAA_EARLY_EXIT is 1.
            // This does not apply to PS3,
            // PS3 was simplified to avoid more shader instructions.
            //   0.06 - faster but more aliasing in darks
            //   0.05 - default
            //   0.04 - slower and less aliasing in darks
            // Special notes when using FXAA_GREEN_AS_LUMA,
            //   Likely want to set this to zero.
            //   As colors that are mostly not-green
            //   will appear very dark in the green channel!
            //   Tune by looking at mostly non-green content,
            //   then start at zero and increase until aliasing is a problem.
            FxaaFloat fxaaConsoleEdgeThresholdMin,
            //
            // Extra constants for 360 FXAA Console only.
            // Use zeros or anything else for other platforms.
            // These must be in physical constant registers and NOT immedates.
            // Immedates will result in compiler un-optimizing.
            // {xyzw} = float4(1.0, -1.0, 0.25, -0.25)
            FxaaFloat4 fxaaConsole360ConstDir
        ) {
        /*--------------------------------------------------------------------------*/
            FxaaFloat2 posM;
            posM.x = pos.x;
            posM.y = pos.y;
            #if (FXAA_GATHER4_ALPHA == 1)
                #if (FXAA_DISCARD == 0)
                    FxaaFloat4 rgbyM = FxaaTexTop(tex, posM);
                    #if (FXAA_GREEN_AS_LUMA == 0)
                        #define lumaM rgbyM.w
                    #else
                        #define lumaM rgbyM.y
                    #endif
                #endif
                #if (FXAA_GREEN_AS_LUMA == 0)
                    FxaaFloat4 luma4A = FxaaTexAlpha4(tex, posM);
                    FxaaFloat4 luma4B = FxaaTexOffAlpha4(tex, posM, FxaaInt2(-1, -1));
                #else
                    FxaaFloat4 luma4A = FxaaTexGreen4(tex, posM);
                    FxaaFloat4 luma4B = FxaaTexOffGreen4(tex, posM, FxaaInt2(-1, -1));
                #endif
                #if (FXAA_DISCARD == 1)
                    #define lumaM luma4A.w
                #endif
                #define lumaE luma4A.z
                #define lumaS luma4A.x
                #define lumaSE luma4A.y
                #define lumaNW luma4B.w
                #define lumaN luma4B.z
                #define lumaW luma4B.x
            #else
                FxaaFloat4 rgbyM = FxaaTexTop(tex, posM);
                #if (FXAA_GREEN_AS_LUMA == 0)
                    #define lumaM rgbyM.w
                #else
                    #define lumaM rgbyM.y
                #endif
                #if (FXAA_GLSL_100 == 1)
                FxaaFloat lumaS = FxaaLuma(FxaaTexOff(tex, posM, FxaaFloat2( 0.0, 1.0), fxaaQualityRcpFrame.xy));
                FxaaFloat lumaE = FxaaLuma(FxaaTexOff(tex, posM, FxaaFloat2( 1.0, 0.0), fxaaQualityRcpFrame.xy));
                FxaaFloat lumaN = FxaaLuma(FxaaTexOff(tex, posM, FxaaFloat2( 0.0,-1.0), fxaaQualityRcpFrame.xy));
                FxaaFloat lumaW = FxaaLuma(FxaaTexOff(tex, posM, FxaaFloat2(-1.0, 0.0), fxaaQualityRcpFrame.xy));
                #else
                FxaaFloat lumaS = FxaaLuma(FxaaTexOff(tex, posM, FxaaInt2( 0, 1), fxaaQualityRcpFrame.xy));
                FxaaFloat lumaE = FxaaLuma(FxaaTexOff(tex, posM, FxaaInt2( 1, 0), fxaaQualityRcpFrame.xy));
                FxaaFloat lumaN = FxaaLuma(FxaaTexOff(tex, posM, FxaaInt2( 0,-1), fxaaQualityRcpFrame.xy));
                FxaaFloat lumaW = FxaaLuma(FxaaTexOff(tex, posM, FxaaInt2(-1, 0), fxaaQualityRcpFrame.xy));
                #endif
            #endif
        /*--------------------------------------------------------------------------*/
            FxaaFloat maxSM = max(lumaS, lumaM);
            FxaaFloat minSM = min(lumaS, lumaM);
            FxaaFloat maxESM = max(lumaE, maxSM);
            FxaaFloat minESM = min(lumaE, minSM);
            FxaaFloat maxWN = max(lumaN, lumaW);
            FxaaFloat minWN = min(lumaN, lumaW);
            FxaaFloat rangeMax = max(maxWN, maxESM);
            FxaaFloat rangeMin = min(minWN, minESM);
            FxaaFloat rangeMaxScaled = rangeMax * fxaaQualityEdgeThreshold;
            FxaaFloat range = rangeMax - rangeMin;
            FxaaFloat rangeMaxClamped = max(fxaaQualityEdgeThresholdMin, rangeMaxScaled);
            FxaaBool earlyExit = range < rangeMaxClamped;
        /*--------------------------------------------------------------------------*/
            if(earlyExit)
                #if (FXAA_DISCARD == 1)
                    FxaaDiscard;
                #else
                    return rgbyM;
                #endif
        /*--------------------------------------------------------------------------*/
            #if (FXAA_GATHER4_ALPHA == 0)
                #if (FXAA_GLSL_100 == 1)
                FxaaFloat lumaNW = FxaaLuma(FxaaTexOff(tex, posM, FxaaFloat2(-1.0,-1.0), fxaaQualityRcpFrame.xy));
                FxaaFloat lumaSE = FxaaLuma(FxaaTexOff(tex, posM, FxaaFloat2( 1.0, 1.0), fxaaQualityRcpFrame.xy));
                FxaaFloat lumaNE = FxaaLuma(FxaaTexOff(tex, posM, FxaaFloat2( 1.0,-1.0), fxaaQualityRcpFrame.xy));
                FxaaFloat lumaSW = FxaaLuma(FxaaTexOff(tex, posM, FxaaFloat2(-1.0, 1.0), fxaaQualityRcpFrame.xy));
                #else
                FxaaFloat lumaNW = FxaaLuma(FxaaTexOff(tex, posM, FxaaInt2(-1,-1), fxaaQualityRcpFrame.xy));
                FxaaFloat lumaSE = FxaaLuma(FxaaTexOff(tex, posM, FxaaInt2( 1, 1), fxaaQualityRcpFrame.xy));
                FxaaFloat lumaNE = FxaaLuma(FxaaTexOff(tex, posM, FxaaInt2( 1,-1), fxaaQualityRcpFrame.xy));
                FxaaFloat lumaSW = FxaaLuma(FxaaTexOff(tex, posM, FxaaInt2(-1, 1), fxaaQualityRcpFrame.xy));
                #endif
            #else
                FxaaFloat lumaNE = FxaaLuma(FxaaTexOff(tex, posM, FxaaInt2(1, -1), fxaaQualityRcpFrame.xy));
                FxaaFloat lumaSW = FxaaLuma(FxaaTexOff(tex, posM, FxaaInt2(-1, 1), fxaaQualityRcpFrame.xy));
            #endif
        /*--------------------------------------------------------------------------*/
            FxaaFloat lumaNS = lumaN + lumaS;
            FxaaFloat lumaWE = lumaW + lumaE;
            FxaaFloat subpixRcpRange = 1.0/range;
            FxaaFloat subpixNSWE = lumaNS + lumaWE;
            FxaaFloat edgeHorz1 = (-2.0 * lumaM) + lumaNS;
            FxaaFloat edgeVert1 = (-2.0 * lumaM) + lumaWE;
        /*--------------------------------------------------------------------------*/
            FxaaFloat lumaNESE = lumaNE + lumaSE;
            FxaaFloat lumaNWNE = lumaNW + lumaNE;
            FxaaFloat edgeHorz2 = (-2.0 * lumaE) + lumaNESE;
            FxaaFloat edgeVert2 = (-2.0 * lumaN) + lumaNWNE;
        /*--------------------------------------------------------------------------*/
            FxaaFloat lumaNWSW = lumaNW + lumaSW;
            FxaaFloat lumaSWSE = lumaSW + lumaSE;
            FxaaFloat edgeHorz4 = (abs(edgeHorz1) * 2.0) + abs(edgeHorz2);
            FxaaFloat edgeVert4 = (abs(edgeVert1) * 2.0) + abs(edgeVert2);
            FxaaFloat edgeHorz3 = (-2.0 * lumaW) + lumaNWSW;
            FxaaFloat edgeVert3 = (-2.0 * lumaS) + lumaSWSE;
            FxaaFloat edgeHorz = abs(edgeHorz3) + edgeHorz4;
            FxaaFloat edgeVert = abs(edgeVert3) + edgeVert4;
        /*--------------------------------------------------------------------------*/
            FxaaFloat subpixNWSWNESE = lumaNWSW + lumaNESE;
            FxaaFloat lengthSign = fxaaQualityRcpFrame.x;
            FxaaBool horzSpan = edgeHorz >= edgeVert;
            FxaaFloat subpixA = subpixNSWE * 2.0 + subpixNWSWNESE;
        /*--------------------------------------------------------------------------*/
            if(!horzSpan) lumaN = lumaW;
            if(!horzSpan) lumaS = lumaE;
            if(horzSpan) lengthSign = fxaaQualityRcpFrame.y;
            FxaaFloat subpixB = (subpixA * (1.0/12.0)) - lumaM;
        /*--------------------------------------------------------------------------*/
            FxaaFloat gradientN = lumaN - lumaM;
            FxaaFloat gradientS = lumaS - lumaM;
            FxaaFloat lumaNN = lumaN + lumaM;
            FxaaFloat lumaSS = lumaS + lumaM;
            FxaaBool pairN = abs(gradientN) >= abs(gradientS);
            FxaaFloat gradient = max(abs(gradientN), abs(gradientS));
            if(pairN) lengthSign = -lengthSign;
            FxaaFloat subpixC = FxaaSat(abs(subpixB) * subpixRcpRange);
        /*--------------------------------------------------------------------------*/
            FxaaFloat2 posB;
            posB.x = posM.x;
            posB.y = posM.y;
            FxaaFloat2 offNP;
            offNP.x = (!horzSpan) ? 0.0 : fxaaQualityRcpFrame.x;
            offNP.y = ( horzSpan) ? 0.0 : fxaaQualityRcpFrame.y;
            if(!horzSpan) posB.x += lengthSign * 0.5;
            if( horzSpan) posB.y += lengthSign * 0.5;
        /*--------------------------------------------------------------------------*/
            FxaaFloat2 posN;
            posN.x = posB.x - offNP.x * FXAA_QUALITY_P0;
            posN.y = posB.y - offNP.y * FXAA_QUALITY_P0;
            FxaaFloat2 posP;
            posP.x = posB.x + offNP.x * FXAA_QUALITY_P0;
            posP.y = posB.y + offNP.y * FXAA_QUALITY_P0;
            FxaaFloat subpixD = ((-2.0)*subpixC) + 3.0;
            FxaaFloat lumaEndN = FxaaLuma(FxaaTexTop(tex, posN));
            FxaaFloat subpixE = subpixC * subpixC;
            FxaaFloat lumaEndP = FxaaLuma(FxaaTexTop(tex, posP));
        /*--------------------------------------------------------------------------*/
            if(!pairN) lumaNN = lumaSS;
            FxaaFloat gradientScaled = gradient * 1.0/4.0;
            FxaaFloat lumaMM = lumaM - lumaNN * 0.5;
            FxaaFloat subpixF = subpixD * subpixE;
            FxaaBool lumaMLTZero = lumaMM < 0.0;
        /*--------------------------------------------------------------------------*/
            lumaEndN -= lumaNN * 0.5;
            lumaEndP -= lumaNN * 0.5;
            FxaaBool doneN = abs(lumaEndN) >= gradientScaled;
            FxaaBool doneP = abs(lumaEndP) >= gradientScaled;
            if(!doneN) posN.x -= offNP.x * FXAA_QUALITY_P1;
            if(!doneN) posN.y -= offNP.y * FXAA_QUALITY_P1;
            FxaaBool doneNP = (!doneN) || (!doneP);
            if(!doneP) posP.x += offNP.x * FXAA_QUALITY_P1;
            if(!doneP) posP.y += offNP.y * FXAA_QUALITY_P1;
        /*--------------------------------------------------------------------------*/
            if(doneNP) {
                if(!doneN) lumaEndN = FxaaLuma(FxaaTexTop(tex, posN.xy));
                if(!doneP) lumaEndP = FxaaLuma(FxaaTexTop(tex, posP.xy));
                if(!doneN) lumaEndN = lumaEndN - lumaNN * 0.5;
                if(!doneP) lumaEndP = lumaEndP - lumaNN * 0.5;
                doneN = abs(lumaEndN) >= gradientScaled;
                doneP = abs(lumaEndP) >= gradientScaled;
                if(!doneN) posN.x -= offNP.x * FXAA_QUALITY_P2;
                if(!doneN) posN.y -= offNP.y * FXAA_QUALITY_P2;
                doneNP = (!doneN) || (!doneP);
                if(!doneP) posP.x += offNP.x * FXAA_QUALITY_P2;
                if(!doneP) posP.y += offNP.y * FXAA_QUALITY_P2;
        /*--------------------------------------------------------------------------*/
                #if (FXAA_QUALITY_PS > 3)
                if(doneNP) {
                    if(!doneN) lumaEndN = FxaaLuma(FxaaTexTop(tex, posN.xy));
                    if(!doneP) lumaEndP = FxaaLuma(FxaaTexTop(tex, posP.xy));
                    if(!doneN) lumaEndN = lumaEndN - lumaNN * 0.5;
                    if(!doneP) lumaEndP = lumaEndP - lumaNN * 0.5;
                    doneN = abs(lumaEndN) >= gradientScaled;
                    doneP = abs(lumaEndP) >= gradientScaled;
                    if(!doneN) posN.x -= offNP.x * FXAA_QUALITY_P3;
                    if(!doneN) posN.y -= offNP.y * FXAA_QUALITY_P3;
                    doneNP = (!doneN) || (!doneP);
                    if(!doneP) posP.x += offNP.x * FXAA_QUALITY_P3;
                    if(!doneP) posP.y += offNP.y * FXAA_QUALITY_P3;
        /*--------------------------------------------------------------------------*/
                    #if (FXAA_QUALITY_PS > 4)
                    if(doneNP) {
                        if(!doneN) lumaEndN = FxaaLuma(FxaaTexTop(tex, posN.xy));
                        if(!doneP) lumaEndP = FxaaLuma(FxaaTexTop(tex, posP.xy));
                        if(!doneN) lumaEndN = lumaEndN - lumaNN * 0.5;
                        if(!doneP) lumaEndP = lumaEndP - lumaNN * 0.5;
                        doneN = abs(lumaEndN) >= gradientScaled;
                        doneP = abs(lumaEndP) >= gradientScaled;
                        if(!doneN) posN.x -= offNP.x * FXAA_QUALITY_P4;
                        if(!doneN) posN.y -= offNP.y * FXAA_QUALITY_P4;
                        doneNP = (!doneN) || (!doneP);
                        if(!doneP) posP.x += offNP.x * FXAA_QUALITY_P4;
                        if(!doneP) posP.y += offNP.y * FXAA_QUALITY_P4;
        /*--------------------------------------------------------------------------*/
                        #if (FXAA_QUALITY_PS > 5)
                        if(doneNP) {
                            if(!doneN) lumaEndN = FxaaLuma(FxaaTexTop(tex, posN.xy));
                            if(!doneP) lumaEndP = FxaaLuma(FxaaTexTop(tex, posP.xy));
                            if(!doneN) lumaEndN = lumaEndN - lumaNN * 0.5;
                            if(!doneP) lumaEndP = lumaEndP - lumaNN * 0.5;
                            doneN = abs(lumaEndN) >= gradientScaled;
                            doneP = abs(lumaEndP) >= gradientScaled;
                            if(!doneN) posN.x -= offNP.x * FXAA_QUALITY_P5;
                            if(!doneN) posN.y -= offNP.y * FXAA_QUALITY_P5;
                            doneNP = (!doneN) || (!doneP);
                            if(!doneP) posP.x += offNP.x * FXAA_QUALITY_P5;
                            if(!doneP) posP.y += offNP.y * FXAA_QUALITY_P5;
        /*--------------------------------------------------------------------------*/
                            #if (FXAA_QUALITY_PS > 6)
                            if(doneNP) {
                                if(!doneN) lumaEndN = FxaaLuma(FxaaTexTop(tex, posN.xy));
                                if(!doneP) lumaEndP = FxaaLuma(FxaaTexTop(tex, posP.xy));
                                if(!doneN) lumaEndN = lumaEndN - lumaNN * 0.5;
                                if(!doneP) lumaEndP = lumaEndP - lumaNN * 0.5;
                                doneN = abs(lumaEndN) >= gradientScaled;
                                doneP = abs(lumaEndP) >= gradientScaled;
                                if(!doneN) posN.x -= offNP.x * FXAA_QUALITY_P6;
                                if(!doneN) posN.y -= offNP.y * FXAA_QUALITY_P6;
                                doneNP = (!doneN) || (!doneP);
                                if(!doneP) posP.x += offNP.x * FXAA_QUALITY_P6;
                                if(!doneP) posP.y += offNP.y * FXAA_QUALITY_P6;
        /*--------------------------------------------------------------------------*/
                                #if (FXAA_QUALITY_PS > 7)
                                if(doneNP) {
                                    if(!doneN) lumaEndN = FxaaLuma(FxaaTexTop(tex, posN.xy));
                                    if(!doneP) lumaEndP = FxaaLuma(FxaaTexTop(tex, posP.xy));
                                    if(!doneN) lumaEndN = lumaEndN - lumaNN * 0.5;
                                    if(!doneP) lumaEndP = lumaEndP - lumaNN * 0.5;
                                    doneN = abs(lumaEndN) >= gradientScaled;
                                    doneP = abs(lumaEndP) >= gradientScaled;
                                    if(!doneN) posN.x -= offNP.x * FXAA_QUALITY_P7;
                                    if(!doneN) posN.y -= offNP.y * FXAA_QUALITY_P7;
                                    doneNP = (!doneN) || (!doneP);
                                    if(!doneP) posP.x += offNP.x * FXAA_QUALITY_P7;
                                    if(!doneP) posP.y += offNP.y * FXAA_QUALITY_P7;
        /*--------------------------------------------------------------------------*/
            #if (FXAA_QUALITY_PS > 8)
            if(doneNP) {
                if(!doneN) lumaEndN = FxaaLuma(FxaaTexTop(tex, posN.xy));
                if(!doneP) lumaEndP = FxaaLuma(FxaaTexTop(tex, posP.xy));
                if(!doneN) lumaEndN = lumaEndN - lumaNN * 0.5;
                if(!doneP) lumaEndP = lumaEndP - lumaNN * 0.5;
                doneN = abs(lumaEndN) >= gradientScaled;
                doneP = abs(lumaEndP) >= gradientScaled;
                if(!doneN) posN.x -= offNP.x * FXAA_QUALITY_P8;
                if(!doneN) posN.y -= offNP.y * FXAA_QUALITY_P8;
                doneNP = (!doneN) || (!doneP);
                if(!doneP) posP.x += offNP.x * FXAA_QUALITY_P8;
                if(!doneP) posP.y += offNP.y * FXAA_QUALITY_P8;
        /*--------------------------------------------------------------------------*/
                #if (FXAA_QUALITY_PS > 9)
                if(doneNP) {
                    if(!doneN) lumaEndN = FxaaLuma(FxaaTexTop(tex, posN.xy));
                    if(!doneP) lumaEndP = FxaaLuma(FxaaTexTop(tex, posP.xy));
                    if(!doneN) lumaEndN = lumaEndN - lumaNN * 0.5;
                    if(!doneP) lumaEndP = lumaEndP - lumaNN * 0.5;
                    doneN = abs(lumaEndN) >= gradientScaled;
                    doneP = abs(lumaEndP) >= gradientScaled;
                    if(!doneN) posN.x -= offNP.x * FXAA_QUALITY_P9;
                    if(!doneN) posN.y -= offNP.y * FXAA_QUALITY_P9;
                    doneNP = (!doneN) || (!doneP);
                    if(!doneP) posP.x += offNP.x * FXAA_QUALITY_P9;
                    if(!doneP) posP.y += offNP.y * FXAA_QUALITY_P9;
        /*--------------------------------------------------------------------------*/
                    #if (FXAA_QUALITY_PS > 10)
                    if(doneNP) {
                        if(!doneN) lumaEndN = FxaaLuma(FxaaTexTop(tex, posN.xy));
                        if(!doneP) lumaEndP = FxaaLuma(FxaaTexTop(tex, posP.xy));
                        if(!doneN) lumaEndN = lumaEndN - lumaNN * 0.5;
                        if(!doneP) lumaEndP = lumaEndP - lumaNN * 0.5;
                        doneN = abs(lumaEndN) >= gradientScaled;
                        doneP = abs(lumaEndP) >= gradientScaled;
                        if(!doneN) posN.x -= offNP.x * FXAA_QUALITY_P10;
                        if(!doneN) posN.y -= offNP.y * FXAA_QUALITY_P10;
                        doneNP = (!doneN) || (!doneP);
                        if(!doneP) posP.x += offNP.x * FXAA_QUALITY_P10;
                        if(!doneP) posP.y += offNP.y * FXAA_QUALITY_P10;
        /*--------------------------------------------------------------------------*/
                        #if (FXAA_QUALITY_PS > 11)
                        if(doneNP) {
                            if(!doneN) lumaEndN = FxaaLuma(FxaaTexTop(tex, posN.xy));
                            if(!doneP) lumaEndP = FxaaLuma(FxaaTexTop(tex, posP.xy));
                            if(!doneN) lumaEndN = lumaEndN - lumaNN * 0.5;
                            if(!doneP) lumaEndP = lumaEndP - lumaNN * 0.5;
                            doneN = abs(lumaEndN) >= gradientScaled;
                            doneP = abs(lumaEndP) >= gradientScaled;
                            if(!doneN) posN.x -= offNP.x * FXAA_QUALITY_P11;
                            if(!doneN) posN.y -= offNP.y * FXAA_QUALITY_P11;
                            doneNP = (!doneN) || (!doneP);
                            if(!doneP) posP.x += offNP.x * FXAA_QUALITY_P11;
                            if(!doneP) posP.y += offNP.y * FXAA_QUALITY_P11;
        /*--------------------------------------------------------------------------*/
                            #if (FXAA_QUALITY_PS > 12)
                            if(doneNP) {
                                if(!doneN) lumaEndN = FxaaLuma(FxaaTexTop(tex, posN.xy));
                                if(!doneP) lumaEndP = FxaaLuma(FxaaTexTop(tex, posP.xy));
                                if(!doneN) lumaEndN = lumaEndN - lumaNN * 0.5;
                                if(!doneP) lumaEndP = lumaEndP - lumaNN * 0.5;
                                doneN = abs(lumaEndN) >= gradientScaled;
                                doneP = abs(lumaEndP) >= gradientScaled;
                                if(!doneN) posN.x -= offNP.x * FXAA_QUALITY_P12;
                                if(!doneN) posN.y -= offNP.y * FXAA_QUALITY_P12;
                                doneNP = (!doneN) || (!doneP);
                                if(!doneP) posP.x += offNP.x * FXAA_QUALITY_P12;
                                if(!doneP) posP.y += offNP.y * FXAA_QUALITY_P12;
        /*--------------------------------------------------------------------------*/
                            }
                            #endif
        /*--------------------------------------------------------------------------*/
                        }
                        #endif
        /*--------------------------------------------------------------------------*/
                    }
                    #endif
        /*--------------------------------------------------------------------------*/
                }
                #endif
        /*--------------------------------------------------------------------------*/
            }
            #endif
        /*--------------------------------------------------------------------------*/
                                }
                                #endif
        /*--------------------------------------------------------------------------*/
                            }
                            #endif
        /*--------------------------------------------------------------------------*/
                        }
                        #endif
        /*--------------------------------------------------------------------------*/
                    }
                    #endif
        /*--------------------------------------------------------------------------*/
                }
                #endif
        /*--------------------------------------------------------------------------*/
            }
        /*--------------------------------------------------------------------------*/
            FxaaFloat dstN = posM.x - posN.x;
            FxaaFloat dstP = posP.x - posM.x;
            if(!horzSpan) dstN = posM.y - posN.y;
            if(!horzSpan) dstP = posP.y - posM.y;
        /*--------------------------------------------------------------------------*/
            FxaaBool goodSpanN = (lumaEndN < 0.0) != lumaMLTZero;
            FxaaFloat spanLength = (dstP + dstN);
            FxaaBool goodSpanP = (lumaEndP < 0.0) != lumaMLTZero;
            FxaaFloat spanLengthRcp = 1.0/spanLength;
        /*--------------------------------------------------------------------------*/
            FxaaBool directionN = dstN < dstP;
            FxaaFloat dst = min(dstN, dstP);
            FxaaBool goodSpan = directionN ? goodSpanN : goodSpanP;
            FxaaFloat subpixG = subpixF * subpixF;
            FxaaFloat pixelOffset = (dst * (-spanLengthRcp)) + 0.5;
            FxaaFloat subpixH = subpixG * fxaaQualitySubpix;
        /*--------------------------------------------------------------------------*/
            FxaaFloat pixelOffsetGood = goodSpan ? pixelOffset : 0.0;
            FxaaFloat pixelOffsetSubpix = max(pixelOffsetGood, subpixH);
            if(!horzSpan) posM.x += pixelOffsetSubpix * lengthSign;
            if( horzSpan) posM.y += pixelOffsetSubpix * lengthSign;
            #if (FXAA_DISCARD == 1)
                return FxaaTexTop(tex, posM);
            #else
                return FxaaFloat4(FxaaTexTop(tex, posM).xyz, lumaM);
            #endif
        }
        /*==========================================================================*/
        #endif
        
        void main() {
        gl_FragColor = FxaaPixelShader(
            v_Uv,
            vec4(0.0),
            tDiffuse,
            tDiffuse,
            tDiffuse,
            resolution,
            vec4(0.0),
            vec4(0.0),
            vec4(0.0),
            0.75,
            0.166,
            0.0833,
            0.0,
            0.0,
            0.0,
            vec4(0.0)
        );
        
        // TODO avoid querying texture twice for same texel
        gl_FragColor.a = texture2D(tDiffuse, v_Uv).a;
        }
    `},nt={None:0,Linear:1,Reinhard:2,Cineon:3,ACESFilmic:4,Neutral:5,AgX:6};function lt(a){return a.format===M.DEPTH_STENCIL||a.format===M.DEPTH24_STENCIL8}const k={OPAQUE:1,TRANSPARENT:2,ALL:15};class Yc extends Z{constructor(){super(),this.threshold=.7,this.smoothWidth=.01,this.blurSize=2,this.strength=1,this._highlightPass=new F(Hr),this._blurPass=new F(Hi),this._blendPass=new F(Rt),this._blendPass.material.premultipliedAlpha=!0}resize(e,t){this._blurPass.uniforms.textureSize[0]=e,this._blurPass.uniforms.textureSize[1]=t}render(e,t,n,i,s){const r=t._renderTargetCache.allocate(0),o=t._renderTargetCache.allocate(1),l=t._renderTargetCache.allocate(1);e.setRenderTarget(r),e.setClearColor(0,0,0,0),e.clear(!0,!0,!1),this._highlightPass.uniforms.tDiffuse=n.texture,this._highlightPass.uniforms.threshold=this.threshold,this._highlightPass.uniforms.smoothWidth=this.smoothWidth,this._highlightPass.render(e),e.setRenderTarget(o),e.setClearColor(0,0,0,0),e.clear(!0,!0,!1),this._blurPass.uniforms.tDiffuse=r.texture,this._blurPass.uniforms.direction=0,this._blurPass.uniforms.blurSize=this.blurSize,this._blurPass.render(e),e.setRenderTarget(l),e.setClearColor(0,0,0,0),e.clear(!0,!0,!1),this._blurPass.uniforms.tDiffuse=o.texture,this._blurPass.uniforms.direction=1,this._blurPass.uniforms.blurSize=this.blurSize,this._blurPass.render(e),e.setRenderTarget(i),e.setClearColor(0,0,0,0),s?e.clear(t.clearColor,t.clearDepth,t.clearStencil):e.clear(!0,!0,!1),this._blendPass.uniforms.texture1=n.texture,this._blendPass.uniforms.texture2=l.texture,this._blendPass.uniforms.colorWeight1=1,this._blendPass.uniforms.alphaWeight1=1,this._blendPass.uniforms.colorWeight2=this.strength,this._blendPass.uniforms.alphaWeight2=this.strength,s&&(this._blendPass.material.transparent=t._tempClearColor[3]<1||!t.clearColor,this._blendPass.renderStates.camera.rect.fromArray(t._tempViewport)),this._blendPass.render(e),s&&(this._blendPass.material.transparent=!1,this._blendPass.renderStates.camera.rect.set(0,0,1,1)),t._renderTargetCache.release(r,0),t._renderTargetCache.release(o,1),t._renderTargetCache.release(l,1)}dispose(){this._highlightPass.dispose(),this._blurPass.dispose(),this._blendPass.dispose()}}class jc extends Z{constructor(){super(),this.chromaFactor=.025,this._mainPass=new F(qc),this._mainPass.material.premultipliedAlpha=!0}resize(e,t){this._mainPass.uniforms.resolution[0]=1/e,this._mainPass.uniforms.resolution[1]=1/t}render(e,t,n,i,s){e.setRenderTarget(i),e.setClearColor(0,0,0,0),s?e.clear(t.clearColor,t.clearDepth,t.clearStencil):e.clear(!0,!0,!1);const r=this._mainPass;r.uniforms.tDiffuse=n.texture,r.uniforms.uChromaFactor=this.chromaFactor,s&&(r.material.transparent=t._tempClearColor[3]<1||!t.clearColor,r.renderStates.camera.rect.fromArray(t._tempViewport)),r.render(e),s&&(r.material.transparent=!1,r.renderStates.camera.rect.set(0,0,1,1))}dispose(){this._mainPass.dispose()}}const qc={name:"ec_chromatic_aberration",defines:{},uniforms:{tDiffuse:null,uChromaFactor:.025,uResolutionRatio:[1,1],resolution:[1/1024,1/512]},vertexShader:X,fragmentShader:`
        uniform float uChromaFactor;
        uniform vec2 uResolutionRatio;
        uniform vec2 resolution;

        uniform sampler2D tDiffuse;
        varying vec2 v_Uv;

        void main() {
            vec2 uv = v_Uv;
            vec2 dist = uv - 0.5;
            vec2 offset = uChromaFactor * dist * length(dist);
            vec4 col = texture2D(tDiffuse, min(uv, 1.0 - resolution) * uResolutionRatio);
            col.r = texture2D(tDiffuse, min(uv - offset, 1.0 - resolution) * uResolutionRatio).r;
            col.b = texture2D(tDiffuse, min(uv + offset, 1.0 - resolution) * uResolutionRatio).b;
            gl_FragColor = col;
        }
    `};class Zc extends Z{constructor(){super(),this.brightness=0,this.contrast=1.02,this.exposure=0,this.gamma=1,this.saturation=1.02,this._mainPass=new F(Kc),this._mainPass.material.premultipliedAlpha=!0,this._mainPass.uniforms.contrast=1.02,this._mainPass.uniforms.saturation=1.02}render(e,t,n,i,s){e.setRenderTarget(i),e.setClearColor(0,0,0,0),s?e.clear(t.clearColor,t.clearDepth,t.clearStencil):e.clear(!0,!0,!1);const r=this._mainPass;r.uniforms.tDiffuse=n.texture,r.uniforms.brightness=this.brightness,r.uniforms.contrast=this.contrast,r.uniforms.exposure=this.exposure,r.uniforms.gamma=this.gamma,r.uniforms.saturation=this.saturation,s&&(r.material.transparent=t._tempClearColor[3]<1||!t.clearColor,r.renderStates.camera.rect.fromArray(t._tempViewport)),r.render(e),s&&(r.material.transparent=!1,r.renderStates.camera.rect.set(0,0,1,1))}dispose(){this._mainPass.dispose()}}const Kc={name:"ec_color_correction",defines:{},uniforms:{tDiffuse:null,brightness:0,contrast:1,exposure:0,gamma:1,saturation:1},vertexShader:X,fragmentShader:`
        uniform float brightness;
        uniform float contrast;
        uniform float exposure;
        uniform float gamma;
        uniform float saturation;

        uniform sampler2D tDiffuse;
        varying vec2 v_Uv;

        // Values from "Graphics Shaders: Theory and Practice" by Bailey and Cunningham
        const vec3 w = vec3(0.2125, 0.7154, 0.0721);

        void main() {
            vec4 tex = texture2D(tDiffuse, v_Uv);
            // brightness
            vec3 color = clamp(tex.rgb + vec3(brightness), 0.0, 1.0);
            // contrast
            color = clamp((color - vec3(0.5)) * contrast + vec3(0.5), 0.0, 1.0);
            // exposure
            color = clamp(color * pow(2.0, exposure), 0.0, 1.0);
            // gamma
            color = clamp(pow(color, vec3(gamma)), 0.0, 1.0);
            float luminance = dot(color, w);
            color = mix(vec3(luminance), color, saturation);
            gl_FragColor = vec4(color, tex.a);
        }
    `};class $c extends Z{constructor(){super(),this.bufferDependencies=[{key:"GBuffer"}],this.focalDepth=1,this.focalLength=24,this.fstop=.9,this.maxblur=1,this.threshold=.9,this.gain=1,this.bias=.5,this.dithering=1e-4,this._mainPass=new F(Jc),this._mainPass.material.premultipliedAlpha=!0}resize(e,t){this._mainPass.uniforms.resolution[0]=1/e,this._mainPass.uniforms.resolution[1]=1/t}render(e,t,n,i,s){e.setRenderTarget(i),e.setClearColor(0,0,0,0),s?e.clear(t.clearColor,t.clearDepth,t.clearStencil):e.clear(!0,!0,!1);const r=t.getBuffer("GBuffer"),o=r.getCurrentRenderStates();this._mainPass.uniforms.tColor=n.texture,this._mainPass.uniforms.tDepth=r.output()._attachments[y.DEPTH_STENCIL_ATTACHMENT],this._mainPass.uniforms.znear=o.camera.near,this._mainPass.uniforms.zfar=o.camera.far,this._mainPass.uniforms.focalDepth=this.focalDepth,this._mainPass.uniforms.focalLength=this.focalLength,this._mainPass.uniforms.fstop=this.fstop,this._mainPass.uniforms.maxblur=this.maxblur,this._mainPass.uniforms.threshold=this.threshold,this._mainPass.uniforms.gain=this.gain,this._mainPass.uniforms.bias=this.bias,this._mainPass.uniforms.dithering=this.dithering,s&&(this._mainPass.material.transparent=t._tempClearColor[3]<1||!t.clearColor,this._mainPass.renderStates.camera.rect.fromArray(t._tempViewport)),this._mainPass.render(e),s&&(this._mainPass.material.transparent=!1,this._mainPass.renderStates.camera.rect.set(0,0,1,1))}dispose(){this._mainPass.dispose()}}const Jc={name:"ec_bokeh",defines:{RINGS:3,SAMPLES:4},uniforms:{tColor:null,tDepth:null,resolution:[1/1024,1/512],znear:.1,zfar:100,focalDepth:1,focalLength:24,fstop:.9,maxblur:1,threshold:.5,gain:2,bias:.5,dithering:1e-4},vertexShader:X,fragmentShader:`
        varying vec2 v_Uv;

        uniform sampler2D tColor;
        uniform sampler2D tDepth;
        
        uniform vec2 resolution;  
        
        uniform float znear;
        uniform float zfar;

        uniform float focalDepth;
        uniform float focalLength;
        uniform float fstop;

        uniform float maxblur; // clamp value of max blur (0.0 = no blur, 1.0 default)
        uniform float threshold; // highlight threshold
        uniform float gain; // highlight gain
        uniform float bias; // bokeh edge bias
        uniform float dithering;

        const int samples = SAMPLES;
        const int rings = RINGS;
        const int maxringsamples = rings * samples;

        float CoC = 0.03; // circle of confusion size in mm (35mm film = 0.03mm)

        vec4 color(vec2 coords, float blur) {
            vec4 col = texture2D(tColor, coords);
            vec3 lumcoeff = vec3(0.299, 0.587, 0.114);
            float lum = dot(col.rgb, lumcoeff);
            float thresh = max((lum - threshold) * gain, 0.0);
            return vec4(col.rgb + mix(vec3(0.0), col.rgb, thresh * blur), col.a);
        }

        float linearize(float depth) {
            return -zfar * znear / (depth * (zfar - znear) - zfar);
        }

        float gather(float i, float j, int ringsamples, inout vec3 colorSum, float w, float h, float blur) {
            float rings2 = float(rings);
            float step = PI * 2.0 / float(ringsamples);
            float pw = cos(j * step) * i;
            float ph = sin(j * step) * i;
			vec4 sampleColor = color(v_Uv + vec2(pw * w, ph * h), blur);
			float weight = mix(1.0, i / rings2, bias) * sampleColor.a;
            colorSum += sampleColor.rgb  * weight;
            return weight;
        }

        void main() {
            float depth = linearize(texture2D(tDepth,  v_Uv).x);
            float fDepth = focalDepth;

            // dof blur factor calculation

            float f = focalLength; // focal length in mm
            float d = fDepth * 1000.; // focal plane in mm
            float o = depth * 1000.; // depth in mm

            float a = (o * f) / (o - f);
            float b = (d * f) / (d - f);
            float c = (d - f) / (d * fstop * CoC);

            float blur = abs(a - b) * c;
            blur = clamp(blur, 0.0, 1.0);

            // calculation of pattern for dithering

            vec2 noise = vec2(rand( v_Uv), rand( v_Uv + vec2(0.4, 0.6))) * dithering * blur;

            // getting blur x and y step factor

            float w = resolution.x * blur * maxblur + noise.x;
            float h = resolution.y * blur * maxblur + noise.y;

            // calculation of final color

            vec3 col = vec3(0.0);
			vec4 centerColor = texture2D(tColor,  v_Uv);

            if (blur < 0.05) {
                col = centerColor.rgb;
            } else {
                col = centerColor.rgb;

                float s = 1.0;
                int ringsamples;

                for(int i = 1; i <= rings; i++) {
                    ringsamples = i * samples;

                    for (int j = 0; j < maxringsamples; j++) {
                        if (j >= ringsamples) break;
                        s += gather(float(i), float(j), ringsamples, col, w, h, blur);
                    }
                }

                col /= s; // divide by sample count
            }

            gl_FragColor = vec4(col, centerColor.a);
        }
    `};class eu extends Z{constructor(){super(),this.noiseIntensity=.35,this.scanlinesIntensity=.5,this.scanlinesCount=2048,this.grayscale=!0,this._time=0,this._mainPass=new F(tu),this._mainPass.material.premultipliedAlpha=!0}render(e,t,n,i,s){e.setRenderTarget(i),e.setClearColor(0,0,0,0),s?e.clear(t.clearColor,t.clearDepth,t.clearStencil):e.clear(!0,!0,!1);const r=this._mainPass;r.uniforms.tDiffuse=n.texture,r.uniforms.nIntensity=this.noiseIntensity,r.uniforms.sIntensity=this.scanlinesIntensity,r.uniforms.sCount=this.scanlinesCount,r.uniforms.grayscale=this.grayscale,this._time+=.01667,r.uniforms.time=this._time,s&&(r.material.transparent=t._tempClearColor[3]<1||!t.clearColor,r.renderStates.camera.rect.fromArray(t._tempViewport)),r.render(e),s&&(r.material.transparent=!1,r.renderStates.camera.rect.set(0,0,1,1))}dispose(){this._mainPass.dispose()}}const tu={name:"ec_film",defines:{},uniforms:{tDiffuse:null,time:0,nIntensity:.5,sIntensity:.05,sCount:4096,grayscale:!0},vertexShader:X,fragmentShader:`
        uniform float time;
        uniform float nIntensity;
        uniform float sIntensity;
        uniform float sCount;
        uniform bool grayscale;

        uniform sampler2D tDiffuse;
        varying vec2 v_Uv;

        void main() {
            // sample the source
            vec4 cTextureScreen = texture2D(tDiffuse, v_Uv);
            // make some noise
            float dx = rand(v_Uv + time);
            // add noise
            vec3 cResult = cTextureScreen.rgb + cTextureScreen.rgb * clamp(0.1 + dx, 0.0, 1.0);
            // get us a sine and cosine
            vec2 sc = vec2(sin(v_Uv.y * sCount), cos(v_Uv.y * sCount));
            // add scanlines
            cResult += cTextureScreen.rgb * vec3(sc.x, sc.y, sc.x) * sIntensity;
            // interpolate between source and result by intensity
            cResult = cTextureScreen.rgb + clamp(nIntensity, 0.0, 1.0) * (cResult - cTextureScreen.rgb);
            // convert to grayscale if desired
            if(grayscale) {
                cResult = vec3(cResult.r * 0.3 + cResult.g * 0.59 + cResult.b * 0.11);
            }
            gl_FragColor = vec4(cResult, cTextureScreen.a);
        }
    `};class nu extends Z{constructor(){super(),this._mainPass=new F(Qc),this._mainPass.material.premultipliedAlpha=!0}resize(e,t){this._mainPass.uniforms.resolution[0]=1/e,this._mainPass.uniforms.resolution[1]=1/t}render(e,t,n,i,s){e.setRenderTarget(i),e.setClearColor(0,0,0,0),s?e.clear(t.clearColor,t.clearDepth,t.clearStencil):e.clear(!0,!0,!1),this._mainPass.uniforms.tDiffuse=n.texture,s&&(this._mainPass.material.transparent=t._tempClearColor[3]<1||!t.clearColor,this._mainPass.renderStates.camera.rect.fromArray(t._tempViewport)),this._mainPass.render(e),s&&(this._mainPass.material.transparent=!1,this._mainPass.renderStates.camera.rect.set(0,0,1,1))}dispose(){this._mainPass.dispose()}}class Wr extends Z{constructor(){super(),this.bufferDependencies=[{key:"GBuffer"}],this._ssaoPass=new F(au),this.radius=.5,this.power=1,this.bias=.1,this.intensity=1,this.autoSampleWeight=!1,this.quality="Medium",this._kernelCode="",this._kernelSize=-1,this._setNoiseSize(64),this._setKernelSize(16),this._blurPass=new F(Hi),this._blurPass.material.defines.NORMALTEX_ENABLED=1,this._blurPass.material.defines.DEPTHTEX_ENABLED=1,this.blurSize=1,this.depthRange=1,this.jitter=!0,this._blendPass=new F(kr),this._blendPass.material.premultipliedAlpha=!0}render(e,t,n,i,s){const r=t._renderTargetCache.allocate(0),o=t._renderTargetCache.allocate(0),l=t.getBuffer("GBuffer"),c=l.getCurrentRenderStates();ai.copy(c.camera.projectionMatrix),js.copy(c.camera.projectionMatrix).inverse(),oi.copy(c.camera.viewMatrix).inverse().transpose(),e.setRenderTarget(r),e.setClearColor(1,1,1,1),e.clear(!0,!0,!1),this._ssaoPass.uniforms.normalTex=l.output()._attachments[y.COLOR_ATTACHMENT0],this._ssaoPass.uniforms.depthTex=l.output()._attachments[y.DEPTH_STENCIL_ATTACHMENT],this._ssaoPass.uniforms.texSize[0]=l.output().width,this._ssaoPass.uniforms.texSize[1]=l.output().height,ai.toArray(this._ssaoPass.uniforms.projection),js.toArray(this._ssaoPass.uniforms.projectionInv),oi.toArray(this._ssaoPass.uniforms.viewInverseTranspose);const u=t.$cameraJitter;this._setKernelSize(iu[this.quality],this.jitter&&u.accumulating()?u.frame():0),this._ssaoPass.uniforms.radius=this.radius,this._ssaoPass.uniforms.power=this.power,this._ssaoPass.uniforms.bias=this.bias,this._ssaoPass.uniforms.intensity=this.intensity,this._ssaoPass.material.defines.AUTO_SAMPLE_WEIGHT!=this.autoSampleWeight&&(this._ssaoPass.material.needsUpdate=!0,this._ssaoPass.material.defines.AUTO_SAMPLE_WEIGHT=this.autoSampleWeight),this._ssaoPass.render(e),e.setRenderTarget(o),e.setClearColor(0,0,0,0),e.clear(!0,!0,!1),this._blurPass.uniforms.normalTex=l.output()._attachments[y.COLOR_ATTACHMENT0],this._blurPass.uniforms.depthTex=l.output()._attachments[y.DEPTH_STENCIL_ATTACHMENT],this._blurPass.uniforms.textureSize[0]=l.output().width,this._blurPass.uniforms.textureSize[1]=l.output().height,ai.toArray(this._blurPass.uniforms.projection),oi.toArray(this._blurPass.uniforms.viewInverseTranspose),this._blurPass.uniforms.blurSize=this.blurSize,this._blurPass.uniforms.depthRange=this.depthRange,this._blurPass.uniforms.direction=0,this._blurPass.uniforms.tDiffuse=r.texture,this._blurPass.render(e),e.setRenderTarget(n?r:i),e.clear(!0,!0,!1),this._blurPass.uniforms.direction=1,this._blurPass.uniforms.tDiffuse=o.texture,this._blurPass.render(e),n&&(e.setRenderTarget(i),e.setClearColor(0,0,0,0),s?e.clear(t.clearColor,t.clearDepth,t.clearStencil):e.clear(!0,!0,!1),this._blendPass.uniforms.texture1=n.texture,this._blendPass.uniforms.texture2=r.texture,s&&(this._blendPass.material.transparent=t._tempClearColor[3]<1||!t.clearColor,this._blendPass.renderStates.camera.rect.fromArray(t._tempViewport)),this._blendPass.render(e),s&&(this._blendPass.material.transparent=!1,this._blendPass.renderStates.camera.rect.set(0,0,1,1))),t._renderTargetCache.release(r,0),t._renderTargetCache.release(o,0)}dispose(){this._ssaoPass.dispose(),this._blurPass.dispose(),this._blendPass.dispose()}_setKernelSize(e,t=0){const n=e+"_"+t;this._kernelCode!==n&&(this._kernelCode=n,li[n]||(li[n]=su(e,t*e)),this._ssaoPass.uniforms.kernel=li[n],this._ssaoPass.material.defines.KERNEL_SIZE!==e&&(this._ssaoPass.material.defines.KERNEL_SIZE=e,this._ssaoPass.material.needsUpdate=!0))}_setNoiseSize(e){if(this._noiseSize===e)return;this._noiseSize=e;const t=this._ssaoPass.uniforms;t.noiseTex?(t.noiseTex.image.data=Qr(e),t.noiseTex.image.width=e,t.noiseTex.image.height=e,t.noiseTex.version++):t.noiseTex=ru(e),t.noiseTexSize[0]=e,t.noiseTexSize[1]=e}}const ai=new U,js=new U,oi=new U,iu={Low:6,Medium:12,High:32,Ultra:64};function qs(a,e){let t=0,n=1/e,i=a;for(;i>0;)t=t+n*(i%e),i=Math.floor(i/e),n=n/e;return t}const li={};function su(a,e=0){const t=new Float32Array(a*3);for(let n=0;n<a;n++){const i=qs(n+e,2)*Math.PI*2,s=1-(qs(n+e,3)*.85+.15),r=Math.sqrt(1-s*s),o=Math.random(),l=Math.cos(i)*r*o,c=Math.sin(i)*r*o,u=s*o;t[n*3]=l,t[n*3+1]=c,t[n*3+2]=u}return t}function ru(a){const e=new oe;return e.image={data:Qr(a),width:a,height:a},e.type=N.UNSIGNED_BYTE,e.magFilter=C.NEAREST,e.minFilter=C.NEAREST,e.wrapS=q.REPEAT,e.wrapT=q.REPEAT,e.generateMipmaps=!1,e.flipY=!1,e.version++,e}function Qr(a){const e=new Uint8Array(a*a*4);let t=0;const n=new T;for(let i=0;i<a;i++)for(let s=0;s<a;s++)n.set(Math.random()*2-1,Math.random()*2-1,0).normalize(),e[t++]=(n.x*.5+.5)*255,e[t++]=(n.y*.5+.5)*255,e[t++]=0,e[t++]=255;return e}const au={name:"ec_ssao",defines:{ALCHEMY:!1,DEPTH_PACKING:0,KERNEL_SIZE:64,AUTO_SAMPLE_WEIGHT:!1},uniforms:{normalTex:null,depthTex:null,texSize:[512,512],noiseTex:null,noiseTexSize:[4,4],projection:new Float32Array(16),projectionInv:new Float32Array(16),viewInverseTranspose:new Float32Array(16),kernel:null,radius:.2,power:1,bias:1e-4,intensity:1},vertexShader:X,fragmentShader:`
        #include <packing>

        varying vec2 v_Uv;

        uniform sampler2D normalTex;
        uniform sampler2D depthTex;
        uniform vec2 texSize;

        uniform sampler2D noiseTex;
        uniform vec2 noiseTexSize;

        uniform mat4 projection;
        uniform mat4 projectionInv;
        uniform mat4 viewInverseTranspose;

        uniform vec3 kernel[KERNEL_SIZE];

        uniform float radius;
        uniform float power;
        uniform float bias;
        uniform float intensity;

		${$t}

        float getDepth(const in vec2 screenPosition) {
            #if DEPTH_PACKING == 1
                return unpackRGBAToDepth(texture2D(depthTex, screenPosition));
            #else
                return texture2D(depthTex, screenPosition).r;
            #endif
        }

        vec3 getViewNormal(const in vec2 screenPosition) {
            vec3 normal = octahedronToUnitVector(texture2D(normalTex, screenPosition).rg);
            // Convert to view space
            return (viewInverseTranspose * vec4(normal, 0.0)).xyz;
        }

        float ssaoEstimator(in mat3 kernelBasis, in vec3 originPos, in vec3 N) {
            float occlusion = 0.0;

			float allWeight = 0.0;

            for (int i = 0; i < KERNEL_SIZE; i++) {
                vec3 samplePos = kernel[i];
                samplePos = kernelBasis * samplePos;
                samplePos = samplePos * radius + originPos;

                vec4 texCoord = projection * vec4(samplePos, 1.0);
                texCoord.xy /= texCoord.w;
                texCoord.xy = texCoord.xy * 0.5 + 0.5;

                float sampleDepth = getDepth(texCoord.xy);
                float z = sampleDepth * 2.0 - 1.0;

				vec4 projectedPos = vec4(texCoord.xy * 2.0 - 1.0, z, 1.0);
				vec4 p4 = projectionInv * projectedPos;
				p4.xyz /= p4.w;

                #ifdef ALCHEMY
                    vec3 cDir = p4.xyz - originPos;

                    float vv = dot(cDir, cDir);
                    float vn = dot(cDir, N);

                    float radius2 = radius * radius;
                    vn = max(vn + p4.z * bias, 0.0);
                    float f = max(radius2 - vv, 0.0) / radius2;
                    occlusion += f * f * f * max(vn / (0.01 + vv), 0.0);

					allWeight += 1.0;
                #else
					float factor = step(samplePos.z, p4.z - bias);
					float rangeCheck = smoothstep(0.0, 1.0, radius / abs(originPos.z - p4.z));

					#ifdef AUTO_SAMPLE_WEIGHT
						float weight = smoothstep(0., radius, radius - length(originPos.xy - samplePos.xy));
					#else
						float weight = 1.0;
					#endif
					
					occlusion += rangeCheck * factor * weight;
					allWeight += weight;
                #endif
            }

            occlusion = 1.0 - occlusion / allWeight;

            return pow(occlusion, power);
        }

        void main() {
            float centerDepth = getDepth(v_Uv);
            if(centerDepth >= (1.0 - EPSILON)) {
                discard;
            }

            vec3 N = getViewNormal(v_Uv);

            vec2 noiseTexCoord = texSize / vec2(noiseTexSize) * v_Uv;
            vec3 rvec = texture2D(noiseTex, noiseTexCoord).rgb * 2.0 - 1.0;

            // Tangent
            vec3 T = normalize(rvec - N * dot(rvec, N));
            // Bitangent
            vec3 BT = normalize(cross(N, T));

            mat3 kernelBasis = mat3(T, BT, N);

            // view position
            float z = centerDepth * 2.0 - 1.0;
            vec4 projectedPos = vec4(v_Uv * 2.0 - 1.0, z, 1.0);
            vec4 p4 = projectionInv * projectedPos;
            vec3 position = p4.xyz / p4.w;

            float ao = ssaoEstimator(kernelBasis, position, N);
            ao = clamp(1.0 - (1.0 - ao) * intensity, 0.0, 1.0);

            gl_FragColor = vec4(vec3(ao), 1.0);
        }
    `};class Wi extends Z{constructor(){super(),this.bufferDependencies=[{key:"SceneBuffer"},{key:"GBuffer"}],this.pixelStride=8,this.maxIteration=5,this.maxSteps=50,this.maxRayDistance=200,this.enablePixelStrideZCutoff=!0,this.pixelStrideZCutoff=50,this.screenEdgeFadeStart=.9,this.eyeFadeStart=.99,this.eyeFadeEnd=1,this.minGlossiness=.2,this.strength=.2,this.falloff=0,this.blurSize=2,this.depthRange=1,this.jitter=!0,this._copyRGBPass=new F(lu),this._ssrPass=new F(ou),this._blurPass=new F(Hi),this._blurPass.material.defines.NORMALTEX_ENABLED=1,this._blurPass.material.defines.DEPTHTEX_ENABLED=1,this._blendPass=new F(cu),this._blendPass.material.premultipliedAlpha=!0}render(e,t,n,i,s){const r=t._renderTargetCache.allocate(0),o=t._renderTargetCache.allocate(0),l=t.getBuffer("SceneBuffer"),c=t.getBuffer("GBuffer"),u=c.getCurrentRenderStates();ci.copy(u.camera.projectionMatrix),Zs.copy(u.camera.projectionMatrix).inverse(),ui.copy(u.camera.viewMatrix).inverse().transpose(),e.setRenderTarget(r),n?(this._copyRGBPass.uniforms.tDiffuse=l.output()._attachments[y.COLOR_ATTACHMENT0],this._copyRGBPass.render(e)):(e.setClearColor(0,0,0,0),e.clear(!0,!0,!1)),this._ssrPass.uniforms.colorTex=l.output()._attachments[y.COLOR_ATTACHMENT0],this._ssrPass.uniforms.gBufferTexture1=c.output()._attachments[y.COLOR_ATTACHMENT0],this._ssrPass.uniforms.gBufferTexture2=c.output()._attachments[y.DEPTH_STENCIL_ATTACHMENT],this._ssrPass.uniforms.viewportSize[0]=c.output().width,this._ssrPass.uniforms.viewportSize[1]=c.output().height,ci.toArray(this._ssrPass.uniforms.projection),Zs.toArray(this._ssrPass.uniforms.projectionInv),ui.toArray(this._ssrPass.uniforms.viewInverseTranspose),this._ssrPass.uniforms.pixelStride=this.pixelStride,this._ssrPass.uniforms.maxRayDistance=this.maxRayDistance,this._ssrPass.uniforms.enablePixelStrideZCutoff=this.enablePixelStrideZCutoff?1:0,this._ssrPass.uniforms.pixelStrideZCutoff=this.pixelStrideZCutoff,this._ssrPass.uniforms.screenEdgeFadeStart=this.screenEdgeFadeStart,this._ssrPass.uniforms.eyeFadeStart=this.eyeFadeStart,this._ssrPass.uniforms.eyeFadeEnd=this.eyeFadeEnd,this._ssrPass.uniforms.minGlossiness=this.minGlossiness,this._ssrPass.uniforms.nearZ=u.camera.near;const h=t.$cameraJitter;this._ssrPass.uniforms.jitterOffset=this.jitter&&h.accumulating()?h.frame()*.5/h.totalFrame():0,(this._ssrPass.material.defines.MAX_ITERATION!=this.maxSteps||this._ssrPass.material.defines.MAX_BINARY_SEARCH_ITERATION!=this.maxIteration)&&(this._ssrPass.material.needsUpdate=!0,this._ssrPass.material.defines.MAX_ITERATION=this.maxSteps,this._ssrPass.material.defines.MAX_BINARY_SEARCH_ITERATION=this.maxIteration),this._ssrPass.render(e),e.setRenderTarget(o),e.setClearColor(0,0,0,0),e.clear(!0,!0,!1),this._blurPass.uniforms.normalTex=c.output()._attachments[y.COLOR_ATTACHMENT0],this._blurPass.uniforms.depthTex=c.output()._attachments[y.DEPTH_STENCIL_ATTACHMENT],this._blurPass.uniforms.textureSize[0]=c.output().width,this._blurPass.uniforms.textureSize[1]=c.output().height,ci.toArray(this._blurPass.uniforms.projection),ui.toArray(this._blurPass.uniforms.viewInverseTranspose),this._blurPass.uniforms.blurSize=this.blurSize,this._blurPass.uniforms.depthRange=this.depthRange,this._blurPass.uniforms.direction=0,this._blurPass.uniforms.tDiffuse=r.texture,this._blurPass.render(e),e.setRenderTarget(n?r:i),e.clear(!0,!0,!1),this._blurPass.uniforms.direction=1,this._blurPass.uniforms.tDiffuse=o.texture,this._blurPass.render(e),n&&(e.setRenderTarget(i),e.setClearColor(0,0,0,0),s?e.clear(t.clearColor,t.clearDepth,t.clearStencil):e.clear(!0,!0,!1),this._blendPass.uniforms.texture1=n.texture,this._blendPass.uniforms.texture2=r.texture,this._blendPass.uniforms.strength=this.strength,this._blendPass.uniforms.falloff=this.falloff,s&&(this._blendPass.material.transparent=t._tempClearColor[3]<1||!t.clearColor,this._blendPass.renderStates.camera.rect.fromArray(t._tempViewport)),this._blendPass.render(e),s&&(this._blendPass.material.transparent=!1,this._blendPass.renderStates.camera.rect.set(0,0,1,1))),t._renderTargetCache.release(r,0),t._renderTargetCache.release(o,0)}dispose(){this._ssrPass.dispose(),this._blurPass.dispose(),this._blendPass.dispose()}}const ci=new U,Zs=new U,ui=new U,ou={name:"ec_ssr",defines:{MAX_ITERATION:50,MAX_BINARY_SEARCH_ITERATION:5},uniforms:{colorTex:null,gBufferTexture1:null,gBufferTexture2:null,projection:new Float32Array(16),projectionInv:new Float32Array(16),viewInverseTranspose:new Float32Array(16),pixelStride:8,maxRayDistance:200,enablePixelStrideZCutoff:1,pixelStrideZCutoff:50,screenEdgeFadeStart:.9,eyeFadeStart:.99,eyeFadeEnd:1,minGlossiness:.2,nearZ:.1,zThicknessThreshold:.1,jitterOffset:0,viewportSize:[512,512]},vertexShader:X,fragmentShader:`
		varying vec2 v_Uv;

		uniform sampler2D colorTex;
		uniform sampler2D gBufferTexture1;
		uniform sampler2D gBufferTexture2;

		uniform mat4 projection;
		uniform mat4 projectionInv;
		uniform mat4 viewInverseTranspose;

		uniform float pixelStride;

		uniform float maxRayDistance;

		uniform float screenEdgeFadeStart;
	
		uniform float enablePixelStrideZCutoff;
		uniform float pixelStrideZCutoff;

		uniform float eyeFadeStart;
		uniform float eyeFadeEnd;
		
		uniform float minGlossiness;
		uniform float zThicknessThreshold;
		uniform float jitterOffset;

		uniform float nearZ;
		uniform vec2 viewportSize;

		${$t}

		float fetchDepth(sampler2D depthTexture, vec2 uv) {
			vec4 depthTexel = texture2D(depthTexture, uv);
			return depthTexel.r * 2.0 - 1.0;
		}

		float linearDepth(float depth) {
			return projection[3][2] / (depth * projection[2][3] - projection[2][2]);
		}

		bool rayIntersectDepth(float rayZNear, float rayZFar, vec2 hitPixel) {
			// Swap if bigger
			if (rayZFar > rayZNear) {
				float t = rayZFar; rayZFar = rayZNear; rayZNear = t;
			}
			float cameraZ = linearDepth(fetchDepth(gBufferTexture2, hitPixel));
			// float cameraBackZ = linearDepth(fetchDepth(backDepthTex, hitPixel));
			// Cross z
			return rayZFar <= cameraZ && rayZNear >= cameraZ - zThicknessThreshold;
		}

		// Trace a ray in screenspace from rayOrigin (in camera space) pointing in rayDir (in camera space)
		//
		// With perspective correct interpolation
		//
		// Returns true if the ray hits a pixel in the depth buffer
		// and outputs the hitPixel (in UV space), the hitPoint (in camera space) and the number
		// of iterations it took to get there.
		//
		// Based on Morgan McGuire & Mike Mara's GLSL implementation:
		// http://casual-effects.blogspot.com/2014/08/screen-space-ray-tracing.html
		bool traceScreenSpaceRay(vec3 rayOrigin, vec3 rayDir, float jitter, out vec2 hitPixel, out vec3 hitPoint, out float iterationCount) {
			// Clip to the near plane
			float rayLength = ((rayOrigin.z + rayDir.z * maxRayDistance) > -nearZ) ? (-nearZ - rayOrigin.z) / rayDir.z : maxRayDistance;

			vec3 rayEnd = rayOrigin + rayDir * rayLength;

			// Project into homogeneous clip space
			vec4 H0 = projection * vec4(rayOrigin, 1.0);
			vec4 H1 = projection * vec4(rayEnd, 1.0);

			float k0 = 1.0 / H0.w, k1 = 1.0 / H1.w;

			// The interpolated homogeneous version of the camera space points
			vec3 Q0 = rayOrigin * k0, Q1 = rayEnd * k1;

			// Screen space endpoints
			// PENDING viewportSize ?
			vec2 P0 = (H0.xy * k0 * 0.5 + 0.5) * viewportSize;
			vec2 P1 = (H1.xy * k1 * 0.5 + 0.5) * viewportSize;

			// If the line is degenerate, make it cover at least one pixel to avoid handling
			// zero-pixel extent as a special case later
			P1 += dot(P1 - P0, P1 - P0) < 0.0001 ? 0.01 : 0.0;
			vec2 delta = P1 - P0;

			// Permute so that the primary iteration is in x to collapse
			// all quadrant-specific DDA case later
			bool permute = false;
			if (abs(delta.x) < abs(delta.y)) {
				// More vertical line
				permute = true;
				delta = delta.yx;
				P0 = P0.yx;
				P1 = P1.yx;
			}
			float stepDir = sign(delta.x);
			float invdx = stepDir / delta.x;

			// Track the derivatives of Q and K
			vec3 dQ = (Q1 - Q0) * invdx;
			float dk = (k1 - k0) * invdx;

			vec2 dP = vec2(stepDir, delta.y * invdx);

			// Calculate pixel stride based on distance of ray origin from camera.
			// Since perspective means distant objects will be smaller in screen space
			// we can use this to have higher quality reflections for far away objects
			// while still using a large pixel stride for near objects (and increase performance)
			// this also helps mitigate artifacts on distant reflections when we use a large
			// pixel stride.
			float strideScaler = 1.0 - min(1.0, -rayOrigin.z / pixelStrideZCutoff);
			float pixStride = mix(pixelStride, 1.0 + strideScaler * pixelStride, enablePixelStrideZCutoff);

			// Scale derivatives by the desired pixel stride and the offset the starting values by the jitter fraction
			dP *= pixStride; dQ *= pixStride; dk *= pixStride;

			// Track ray step and derivatives in a vec4 to parallelize
			vec4 pqk = vec4(P0, Q0.z, k0);
			vec4 dPQK = vec4(dP, dQ.z, dk);

			pqk += dPQK * jitter;
			float rayZFar = (dPQK.z * 0.5 + pqk.z) / (dPQK.w * 0.5 + pqk.w);
			float rayZNear;

			bool intersect = false;

			vec2 texelSize = 1.0 / viewportSize;

			iterationCount = 0.0;
			float end = P1.x * stepDir;
			for (int i = 0; i < MAX_ITERATION; i++) {
				pqk += dPQK;
				if ((pqk.x * stepDir) >= end) {
					break;
				}

				rayZNear = rayZFar;
				rayZFar = (dPQK.z * 0.5 + pqk.z) / (dPQK.w * 0.5 + pqk.w);

				hitPixel = permute ? pqk.yx : pqk.xy;
				hitPixel *= texelSize;

				intersect = rayIntersectDepth(rayZNear, rayZFar, hitPixel);

				iterationCount += 1.0;

				// PENDING Right on all platforms?
				if (intersect) {
					break;
				}
			}

			// Binary search refinement
			// FIXME If intersect in first iteration binary search may easily lead to the pixel of reflect object it self
			if (pixStride > 1.0 && intersect && iterationCount > 1.0) {
				// Roll back
				pqk -= dPQK;
				dPQK /= pixStride;

				float originalStride = pixStride * 0.5;
				float stride = originalStride;

				rayZNear = pqk.z / pqk.w;
				rayZFar = rayZNear;

				for (int j = 0; j < MAX_BINARY_SEARCH_ITERATION; j++) {
					pqk += dPQK * stride;
					rayZNear = rayZFar;
					rayZFar = (dPQK.z * -0.5 + pqk.z) / (dPQK.w * -0.5 + pqk.w);
					hitPixel = permute ? pqk.yx : pqk.xy;
					hitPixel *= texelSize;

					originalStride *= 0.5;
					stride = rayIntersectDepth(rayZNear, rayZFar, hitPixel) ? -originalStride : originalStride;
				}
			}

			Q0.xy += dQ.xy * iterationCount;
			Q0.z = pqk.z;
			hitPoint = Q0 / pqk.w;

			return intersect;
		}

		float calculateAlpha(float iterationCount, float reflectivity, vec2 hitPixel, vec3 hitPoint, float dist, vec3 rayDir) {
			float alpha = clamp(reflectivity, 0.0, 1.0);

			// Fade ray hits that approach the maximum iterations
			alpha *= 1.0 - (iterationCount / float(MAX_ITERATION));

			// Fade ray hits that approach the screen edge
			vec2 hitPixelNDC = hitPixel * 2.0 - 1.0;
			float maxDimension = min(1.0, max(abs(hitPixelNDC.x), abs(hitPixelNDC.y)));
			alpha *= 1.0 - max(0.0, maxDimension - screenEdgeFadeStart) / (1.0 - screenEdgeFadeStart);

			// Fade ray hits base on how much they face the camera
			float _eyeFadeStart = eyeFadeStart;
			float _eyeFadeEnd = eyeFadeEnd;
			if (_eyeFadeStart > _eyeFadeEnd) {
				float tmp = _eyeFadeEnd;
				_eyeFadeEnd = _eyeFadeStart;
				_eyeFadeStart = tmp;
			}
			float eyeDir = clamp(rayDir.z, _eyeFadeStart, _eyeFadeEnd);
			alpha *= 1.0 - (eyeDir - _eyeFadeStart) / (_eyeFadeEnd - _eyeFadeStart);

			// Fade ray hits based on distance from ray origin
			alpha *= 1.0 - clamp(dist / maxRayDistance, 0.0, 1.0);

			return alpha;
		}
		void main() {
			vec4 gBufferTexel = texture2D(gBufferTexture1, v_Uv);

			if (gBufferTexel.r < -2.0) {
				discard;
			}

			float g = 1. - gBufferTexel.a;
			if (g <= minGlossiness) {
				discard;
			}

			float reflectivity = g;

			vec3 N = octahedronToUnitVector(gBufferTexel.rg);
			N = normalize((viewInverseTranspose * vec4(N, 0.0)).xyz);

			// Position in view
			vec4 projectedPos = vec4(v_Uv * 2.0 - 1.0, fetchDepth(gBufferTexture2, v_Uv), 1.0);
			vec4 pos = projectionInv * projectedPos;
			vec3 rayOrigin = pos.xyz / pos.w;

			vec3 rayDir = normalize(reflect(normalize(rayOrigin), N));
			vec2 hitPixel;
			vec3 hitPoint;
			float iterationCount;

			// Get jitter
			vec2 uv2 = v_Uv * viewportSize;
			float jitter = fract((uv2.x + uv2.y) * 0.25) + jitterOffset;

			bool intersect = traceScreenSpaceRay(rayOrigin, rayDir, jitter, hitPixel, hitPoint, iterationCount);
			// Is empty
			if (!intersect) {
				discard;
			}
			float dist = distance(rayOrigin, hitPoint);

			float alpha = calculateAlpha(iterationCount, reflectivity, hitPixel, hitPoint, dist, rayDir) * float(intersect);

			vec3 hitNormal = octahedronToUnitVector(texture2D(gBufferTexture1, hitPixel).rg);
			hitNormal = normalize((viewInverseTranspose * vec4(hitNormal, 0.0)).xyz);

			// Ignore the pixel not face the ray
			// TODO fadeout ?
			// PENDING Can be configured?
			if (dot(hitNormal, rayDir) >= 0.0) {
				discard;
			}

			vec4 color = texture2D(colorTex, hitPixel);
			gl_FragColor = vec4(color.rgb, color.a * alpha);
		}
    `},lu={name:"ec_copy_rgb",defines:{},uniforms:{tDiffuse:null},vertexShader:X,fragmentShader:`
        uniform sampler2D tDiffuse;

        varying vec2 v_Uv;

        void main() {
			vec3 color = texture2D(tDiffuse, v_Uv).rgb;
            gl_FragColor = vec4(color, 0.0);
        }
    `},cu={name:"ec_ssr_mix",defines:{},uniforms:{texture1:null,texture2:null,strength:.15,falloff:1},vertexShader:X,fragmentShader:`
        uniform sampler2D texture1;
        uniform sampler2D texture2;
		uniform float strength;
		uniform float falloff;
        varying vec2 v_Uv;
        void main() {
			vec4 baseColor = texture2D(texture1, v_Uv);
			vec4 ssrColor = texture2D(texture2, v_Uv);

			float reflectivity = ssrColor.a * strength;
			vec3 finalColor = baseColor.rgb * (1.0 - reflectivity * falloff) + ssrColor.rgb * reflectivity;

			gl_FragColor = vec4(finalColor, baseColor.a);
        }
    `};class Cf extends Z{constructor(){super(),this.toneMapping=nt.Reinhard,this.toneMappingExposure=1,this.outputColorSpace=ve.SRGB,this._mainPass=new F(uu),this._toneMapping=null,this._outputColorSpace=null}render(e,t,n,i,s){e.setRenderTarget(i),e.setClearColor(0,0,0,0),s?e.clear(t.clearColor,t.clearDepth,t.clearStencil):e.clear(!0,!0,!1);const r=this._mainPass;r.uniforms.tDiffuse=n.texture,r.uniforms.toneMappingExposure=this.toneMappingExposure,(this._toneMapping!==this.toneMapping||this._outputColorSpace!==this.outputColorSpace)&&(this._toneMapping=this.toneMapping,this._outputColorSpace=this.outputColorSpace,r.material.defines={},this._toneMapping===nt.Linear?r.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===nt.Reinhard?r.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===nt.Cineon?r.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===nt.ACESFilmic?r.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===nt.Neutral?r.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===nt.AgX&&(r.material.defines.AGX_TONE_MAPPING=""),this._outputColorSpace===ve.SRGB&&(r.material.defines.SRGB_COLOR_SPACE=""),r.material.needsUpdate=!0),s&&(r.material.transparent=t._tempClearColor[3]<1||!t.clearColor,r.renderStates.camera.rect.fromArray(t._tempViewport)),r.render(e),s&&(r.material.transparent=!1,r.renderStates.camera.rect.set(0,0,1,1))}dispose(){this._mainPass.dispose()}}const uu={name:"ec_tone_mapping",defines:{},uniforms:{tDiffuse:null,toneMappingExposure:1},vertexShader:X,fragmentShader:`
		uniform float toneMappingExposure;

		uniform sampler2D tDiffuse;
		varying vec2 v_Uv;

		#ifdef LINEAR_TONE_MAPPING
			// exposure only
			vec3 LinearToneMapping(vec3 color) {
				return saturate(toneMappingExposure * color);
			}
		#elif defined(REINHARD_TONE_MAPPING)
			// source: https://www.cs.utah.edu/docs/techreports/2002/pdf/UUCS-02-001.pdf
			vec3 ReinhardToneMapping(vec3 color) {
				color *= toneMappingExposure;
				return saturate(color / (vec3(1.0) + color));
			}
		#elif defined(CINEON_TONE_MAPPING)
			// source: http://filmicworlds.com/blog/filmic-tonemapping-operators/
			vec3 OptimizedCineonToneMapping(vec3 color) {
				// optimized filmic operator by Jim Hejl and Richard Burgess-Dawson
				color *= toneMappingExposure;
				color = max(vec3(0.0), color - 0.004);
				return pow((color * (6.2 * color + 0.5)) / (color * (6.2 * color + 1.7) + 0.06), vec3(2.2));
			}
		#elif defined(ACES_FILMIC_TONE_MAPPING)
			// source: https://github.com/selfshadow/ltc_code/blob/master/webgl/shaders/ltc/ltc_blit.fs
			vec3 RRTAndODTFit(vec3 v) {
				vec3 a = v * (v + 0.0245786) - 0.000090537;
				vec3 b = v * (0.983729 * v + 0.4329510) + 0.238081;
				return a / b;
			}

			// this implementation of ACES is modified to accommodate a brighter viewing environment.
			// the scale factor of 1/0.6 is subjective. see discussion in https://github.com/mrdoob/three.js/pull/19621.
			vec3 ACESFilmicToneMapping(vec3 color) {
				// sRGB => XYZ => D65_2_D60 => AP1 => RRT_SAT
				const mat3 ACESInputMat = mat3(
					vec3(0.59719, 0.07600, 0.02840), // transposed from source
					vec3(0.35458, 0.90834, 0.13383),
					vec3(0.04823, 0.01566, 0.83777)
				);
				// ODT_SAT => XYZ => D60_2_D65 => sRGB
				const mat3 ACESOutputMat = mat3(
					vec3( 1.60475, -0.10208, -0.00327), // transposed from source
					vec3(-0.53108,  1.10813, -0.07276),
					vec3(-0.07367, -0.00605,  1.07602)
				);
				color *= toneMappingExposure / 0.6;
				color = ACESInputMat * color;
				// Apply RRT and ODT
				color = RRTAndODTFit(color);
				color = ACESOutputMat * color;
				// Clamp to [0, 1]
				return saturate(color);
			}
		#elif defined(NEUTRAL_TONE_MAPPING)
			vec3 NeutralToneMapping(vec3 color) {
				const float StartCompression = 0.8 - 0.04;
				const float Desaturation = 0.15;
				color *= toneMappingExposure;
				float x = min(color.r, min(color.g, color.b));
				float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
				color -= offset;
				float peak = max(color.r, max(color.g, color.b));
				if (peak < StartCompression) return color;
				float d = 1. - StartCompression;
				float newPeak = 1. - d * d / (peak + d - StartCompression);
				color *= newPeak / peak;
				float g = 1. - 1. / (Desaturation * (peak - newPeak) + 1.);
				return mix(color, vec3(newPeak), g);
			}
		#elif defined(AGX_TONE_MAPPING)
			// Matrices for rec 2020 <> rec 709 color space conversion
			// matrix provided in row-major order so it has been transposed
			// https://www.itu.int/pub/R-REP-BT.2407-2017
			const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
				vec3(1.6605, -0.1246, -0.0182),
				vec3(-0.5876, 1.1329, -0.1006),
				vec3(-0.0728, -0.0083, 1.1187)
			);

			const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
				vec3(0.6274, 0.0691, 0.0164),
				vec3(0.3293, 0.9195, 0.0880),
				vec3(0.0433, 0.0113, 0.8956)
			);

			// https://iolite-engine.com/blog_posts/minimal_agx_implementation
			// Mean error^2: 3.6705141e-06
			vec3 agxDefaultContrastApprox(vec3 x) {
				vec3 x2 = x * x;
				vec3 x4 = x2 * x2;

				return + 15.5 * x4 * x2
					- 40.14 * x4 * x
					+ 31.96 * x4
					- 6.868 * x2 * x
					+ 0.4298 * x2
					+ 0.1191 * x
					- 0.00232;
			}

			// AgX Tone Mapping implementation based on Filament, which in turn is based
			// on Blender's implementation using rec 2020 primaries
			// https://github.com/google/filament/pull/7236
			// Inputs and outputs are encoded as Linear-sRGB.
			vec3 AgXToneMapping(vec3 color) {
				// AgX constants
				const mat3 AgXInsetMatrix = mat3(
					vec3(0.856627153315983, 0.137318972929847, 0.11189821299995),
					vec3(0.0951212405381588, 0.761241990602591, 0.0767994186031903),
					vec3(0.0482516061458583, 0.101439036467562, 0.811302368396859)
				);

				// explicit AgXOutsetMatrix generated from Filaments AgXOutsetMatrixInv
				const mat3 AgXOutsetMatrix = mat3(
					vec3(1.1271005818144368, -0.1413297634984383, -0.14132976349843826),
					vec3(-0.11060664309660323, 1.157823702216272, -0.11060664309660294),
					vec3(-0.016493938717834573, -0.016493938717834257, 1.2519364065950405)
				);

				// LOG2_MIN      = -10.0
				// LOG2_MAX      =  +6.5
				// MIDDLE_GRAY   =  0.18
				const float AgxMinEv = -12.47393;  // log2(pow(2, LOG2_MIN) * MIDDLE_GRAY)
				const float AgxMaxEv = 4.026069;   // log2(pow(2, LOG2_MAX) * MIDDLE_GRAY)

				color *= toneMappingExposure;

				color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;

				color = AgXInsetMatrix * color;

				// Log2 encoding
				color = max(color, 1e-10); // avoid 0 or negative numbers for log2
				color = log2(color);
				color = (color - AgxMinEv) / (AgxMaxEv - AgxMinEv);

				color = clamp(color, 0.0, 1.0);

				// Apply sigmoid
				color = agxDefaultContrastApprox(color);

				// Apply AgX look
				// v = agxLook(v, look);

				color = AgXOutsetMatrix * color;

				// Linearize
				color = pow(max(vec3(0.0), color), vec3(2.2));

				color = LINEAR_REC2020_TO_LINEAR_SRGB * color;

				// Gamut mapping. Simple clamp for now.
				color = clamp(color, 0.0, 1.0);

				return color;
			}
		#endif

		void main() {
			gl_FragColor = texture2D(tDiffuse, v_Uv);

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING
				gl_FragColor.rgb = LinearToneMapping(gl_FragColor.rgb);
			#elif defined(REINHARD_TONE_MAPPING)
				gl_FragColor.rgb = ReinhardToneMapping(gl_FragColor.rgb);
			#elif defined(CINEON_TONE_MAPPING)
				gl_FragColor.rgb = OptimizedCineonToneMapping(gl_FragColor.rgb);
			#elif defined(ACES_FILMIC_TONE_MAPPING)
				gl_FragColor.rgb = ACESFilmicToneMapping(gl_FragColor.rgb);
			#elif defined(NEUTRAL_TONE_MAPPING)
				gl_FragColor.rgb = NeutralToneMapping(gl_FragColor.rgb);
			#elif defined(AGX_TONE_MAPPING)
				gl_FragColor.rgb = AgXToneMapping(gl_FragColor.rgb);
			#endif

			// color space

			#ifdef SRGB_COLOR_SPACE
				gl_FragColor = LinearTosRGB(gl_FragColor);
			#endif
		}
    `};class hu extends Z{constructor(){super(),this.color=new ge(0,0,0),this.offset=1,this._vignettingPass=new F(fu),this._vignettingPass.material.premultipliedAlpha=!0}render(e,t,n,i,s){const r=this._vignettingPass;r.uniforms.tDiffuse=n.texture,this.color.toArray(r.uniforms.vignettingColor),r.uniforms.vignettingOffset=this.offset,e.setRenderTarget(i),e.setClearColor(0,0,0,0),s?e.clear(t.clearColor,t.clearDepth,t.clearStencil):e.clear(!0,!0,!1),s&&(r.material.transparent=t._tempClearColor[3]<1||!t.clearColor,r.renderStates.camera.rect.fromArray(t._tempViewport)),r.render(e),s&&(r.material.transparent=!1,r.renderStates.camera.rect.set(0,0,1,1))}dispose(){this._vignettingPass.dispose()}}const fu={name:"ec_vignetting_blend",defines:{},uniforms:{tDiffuse:null,vignettingColor:[0,0,0],vignettingOffset:1},vertexShader:X,fragmentShader:`
		uniform vec3 vignettingColor;
		uniform float vignettingOffset;

        uniform sampler2D tDiffuse;
        varying vec2 v_Uv;

        void main() {
            vec4 color = texture2D(tDiffuse, v_Uv);
            vec2 uv = (v_Uv - vec2(0.5)) * vec2(vignettingOffset);
			color.rgb = mix(color.rgb, vignettingColor, clamp(dot(uv, uv), 0.0, 1.0));
			gl_FragColor = color;
        }
    `};class du extends Z{constructor(){super(),this.offset=1,this._hBlurPass=new F(Xr),this._vBlurPass=new F(Vr),this._blendPass=new F(_u),this._blendPass.material.premultipliedAlpha=!0}resize(e,t){this._hBlurPass.uniforms.h=4/e,this._vBlurPass.uniforms.v=4/t}render(e,t,n,i,s){const r=t._renderTargetCache.allocate(1),o=t._renderTargetCache.allocate(1),l=this._blendPass;e.setRenderTarget(r),e.setClearColor(0,0,0,0),e.clear(!0,!0,!1),this._hBlurPass.uniforms.tDiffuse=n.texture,this._hBlurPass.render(e),e.setRenderTarget(o),e.setClearColor(0,0,0,0),e.clear(!0,!0,!1),this._vBlurPass.uniforms.tDiffuse=r.texture,this._vBlurPass.render(e),l.uniforms.tDiffuse=n.texture,l.uniforms.blurOffset=this.offset,l.uniforms.blurTexture=o.texture,e.setRenderTarget(i),e.setClearColor(0,0,0,0),s?e.clear(t.clearColor,t.clearDepth,t.clearStencil):e.clear(!0,!0,!1),s&&(l.material.transparent=t._tempClearColor[3]<1||!t.clearColor,l.renderStates.camera.rect.fromArray(t._tempViewport)),l.render(e),s&&(l.material.transparent=!1,l.renderStates.camera.rect.set(0,0,1,1)),t._renderTargetCache.release(r,1),t._renderTargetCache.release(o,1)}dispose(){this._hBlurPass.dispose(),this._vBlurPass.dispose(),this._blendPass.dispose()}}const _u={name:"ec_blur_blend",defines:{},uniforms:{tDiffuse:null,blurOffset:1,blurTexture:null},vertexShader:X,fragmentShader:`
		uniform float blurOffset;

        uniform sampler2D blurTexture;

        uniform sampler2D tDiffuse;
        varying vec2 v_Uv;

        void main() {
            vec4 color = texture2D(tDiffuse, v_Uv);
            vec2 uv = (v_Uv - vec2(0.5)) * vec2(blurOffset);

            vec3 color2 = texture2D(blurTexture, v_Uv).rgb;

			color.rgb = mix(color.rgb, color2, clamp(dot(uv, uv), 0.0, 1.0));
			gl_FragColor = color;
        }
    `};class pu extends Z{constructor(){super(),this.bufferDependencies=[{key:"MarkBuffer"}],this.color=new ge(1,1,1),this.strength=1.5,this.stride=5,this._channelPass=new F(Vi),this._blurXPass=new F(mu),this._blurYPass=new F(gu),this._blendPass=new F(xu),this._blendPass.material.premultipliedAlpha=!0}resize(e,t){this._blurXPass.uniforms.texSize[0]=e,this._blurXPass.uniforms.texSize[1]=t,this._blurYPass.uniforms.texSize[0]=e,this._blurYPass.uniforms.texSize[1]=t}render(e,t,n,i,s){const r=t._renderTargetCache.allocate(0),o=t._renderTargetCache.allocate(0),l=t._renderTargetCache.allocate(0),c=t.getBuffer("MarkBuffer"),u=c.attachManager.getAttachIndex(this.name),h=c.attachManager.getChannelIndex(this.name);e.setRenderTarget(r),e.setClearColor(0,0,0,0),e.clear(!0,!0,!1),this._channelPass.uniforms.tDiffuse=c.output(u)._attachments[y.COLOR_ATTACHMENT0];for(let f=0;f<4;f++)this._channelPass.uniforms.channelMask[f]=f===h?1:0;this._channelPass.render(e),e.setRenderTarget(o),e.setClearColor(0,0,0,0),e.clear(!0,!0,!1),this._blurXPass.uniforms.tDiffuse=r.texture,this._blurXPass.uniforms.stride=this.stride,this._blurXPass.render(e),e.setRenderTarget(l),e.setClearColor(0,0,0,0),e.clear(!0,!0,!1),this._blurYPass.uniforms.tDiffuse=r.texture,this._blurYPass.uniforms.blurX=o.texture,this._blurYPass.uniforms.stride=this.stride,this._blurYPass.uniforms.glowness=this.strength,this.color.toArray(this._blurYPass.uniforms.glowColor),this._blurYPass.render(e),e.setRenderTarget(i),e.setClearColor(0,0,0,0),s?e.clear(t.clearColor,t.clearDepth,t.clearStencil):e.clear(!0,!0,!1),this._blendPass.uniforms.texture1=n.texture,this._blendPass.uniforms.texture2=l.texture,s&&(this._blendPass.material.transparent=t._tempClearColor[3]<1||!t.clearColor,this._blendPass.renderStates.camera.rect.fromArray(t._tempViewport)),this._blendPass.render(e),s&&(this._blendPass.material.transparent=!1,this._blendPass.renderStates.camera.rect.set(0,0,1,1)),t._renderTargetCache.release(r,0),t._renderTargetCache.release(o,0),t._renderTargetCache.release(l,0)}dispose(){this._channelPass.dispose(),this._blurXPass.dispose(),this._blurYPass.dispose(),this._blendPass.dispose()}}const mu={name:"ec_innerglow_x",defines:{},uniforms:{tDiffuse:null,texSize:[1,1],stride:10},vertexShader:X,fragmentShader:`
		#define WT9_0 1.0
		#define WT9_1 0.8
		#define WT9_2 0.6
		#define WT9_3 0.4
		#define WT9_4 0.2
		#define WT9_NORMALIZE 5.2

		varying vec2 v_Uv;
		uniform sampler2D tDiffuse;
		uniform vec2 texSize;
		uniform float stride;

		void main() {
			float texelIncrement = 0.25 * stride / texSize.x;

			float colour = texture2D(tDiffuse,vec2(v_Uv.x + texelIncrement, v_Uv.y)).x * (0.8 / WT9_NORMALIZE);
			colour += texture2D(tDiffuse, vec2(v_Uv.x + 2.0 * texelIncrement, v_Uv.y)).x * (WT9_2 / WT9_NORMALIZE);
			colour += texture2D(tDiffuse, vec2(v_Uv.x + 3.0 * texelIncrement, v_Uv.y)).x * (WT9_3 / WT9_NORMALIZE);
			colour += texture2D(tDiffuse, vec2(v_Uv.x + 4.0 * texelIncrement, v_Uv.y)).x * (WT9_4 / WT9_NORMALIZE);
			colour += texture2D(tDiffuse, vec2(v_Uv.x, v_Uv.y)).x * (WT9_0 / WT9_NORMALIZE);
			colour += texture2D(tDiffuse, vec2(v_Uv.x - 1.0 * texelIncrement, v_Uv.y)).x * (WT9_1 / WT9_NORMALIZE);
			colour += texture2D(tDiffuse, vec2(v_Uv.x - 2.0 * texelIncrement, v_Uv.y)).x * (WT9_2 / WT9_NORMALIZE);
			colour += texture2D(tDiffuse, vec2(v_Uv.x - 3.0 * texelIncrement, v_Uv.y)).x * (WT9_3 / WT9_NORMALIZE);
			colour += texture2D(tDiffuse, vec2(v_Uv.x - 4.0 * texelIncrement, v_Uv.y)).x * (WT9_3 / WT9_NORMALIZE);

			texelIncrement = 0.5 * stride / texSize.x;
			colour += texture2D(tDiffuse,vec2(v_Uv.x + texelIncrement, v_Uv.y)).x * (0.8 / WT9_NORMALIZE);
			colour += texture2D(tDiffuse, vec2(v_Uv.x + 2.0 * texelIncrement, v_Uv.y)).x * (WT9_2 / WT9_NORMALIZE);
			colour += texture2D(tDiffuse, vec2(v_Uv.x + 3.0 * texelIncrement, v_Uv.y)).x * (WT9_3 / WT9_NORMALIZE);
			colour += texture2D(tDiffuse, vec2(v_Uv.x + 4.0 * texelIncrement, v_Uv.y)).x * (WT9_4 / WT9_NORMALIZE);
			colour += texture2D(tDiffuse, vec2(v_Uv.x, v_Uv.y)).x * (WT9_0 / WT9_NORMALIZE);
			colour += texture2D(tDiffuse, vec2(v_Uv.x - 1.0 * texelIncrement, v_Uv.y)).x * (WT9_1 / WT9_NORMALIZE);
			colour += texture2D(tDiffuse, vec2(v_Uv.x - 2.0 * texelIncrement, v_Uv.y)).x * (WT9_2 / WT9_NORMALIZE);
			colour += texture2D(tDiffuse, vec2(v_Uv.x - 3.0 * texelIncrement, v_Uv.y)).x * (WT9_3 / WT9_NORMALIZE);
			colour += texture2D(tDiffuse, vec2(v_Uv.x - 4.0 * texelIncrement, v_Uv.y)).x * (WT9_3 / WT9_NORMALIZE);

			texelIncrement = 0.75 * stride / texSize.x;
			colour += texture2D(tDiffuse,vec2(v_Uv.x + texelIncrement, v_Uv.y)).x * (0.8 / WT9_NORMALIZE);
			colour += texture2D(tDiffuse, vec2(v_Uv.x + 2.0 * texelIncrement, v_Uv.y)).x * (WT9_2 / WT9_NORMALIZE);
			colour += texture2D(tDiffuse, vec2(v_Uv.x + 3.0 * texelIncrement, v_Uv.y)).x * (WT9_3 / WT9_NORMALIZE);
			colour += texture2D(tDiffuse, vec2(v_Uv.x + 4.0 * texelIncrement, v_Uv.y)).x * (WT9_4 / WT9_NORMALIZE);
			colour += texture2D(tDiffuse, vec2(v_Uv.x, v_Uv.y)).x * (WT9_0 / WT9_NORMALIZE);
			colour += texture2D(tDiffuse, vec2(v_Uv.x - 1.0 * texelIncrement, v_Uv.y)).x * (WT9_1 / WT9_NORMALIZE);
			colour += texture2D(tDiffuse, vec2(v_Uv.x - 2.0 * texelIncrement, v_Uv.y)).x * (WT9_2 / WT9_NORMALIZE);
			colour += texture2D(tDiffuse, vec2(v_Uv.x - 3.0 * texelIncrement, v_Uv.y)).x * (WT9_3 / WT9_NORMALIZE);
			colour += texture2D(tDiffuse, vec2(v_Uv.x - 4.0 * texelIncrement, v_Uv.y)).x * (WT9_3 / WT9_NORMALIZE);

			texelIncrement = stride / texSize.x;
			colour += texture2D(tDiffuse,vec2(v_Uv.x + texelIncrement, v_Uv.y)).x * (0.8 / WT9_NORMALIZE);
			colour += texture2D(tDiffuse, vec2(v_Uv.x + 2.0 * texelIncrement, v_Uv.y)).x * (WT9_2 / WT9_NORMALIZE);
			colour += texture2D(tDiffuse, vec2(v_Uv.x + 3.0 * texelIncrement, v_Uv.y)).x * (WT9_3 / WT9_NORMALIZE);
			colour += texture2D(tDiffuse, vec2(v_Uv.x + 4.0 * texelIncrement, v_Uv.y)).x * (WT9_4 / WT9_NORMALIZE);
			colour += texture2D(tDiffuse, vec2(v_Uv.x, v_Uv.y)).x * (WT9_0 / WT9_NORMALIZE);
			colour += texture2D(tDiffuse, vec2(v_Uv.x - 1.0 * texelIncrement, v_Uv.y)).x * (WT9_1 / WT9_NORMALIZE);
			colour += texture2D(tDiffuse, vec2(v_Uv.x - 2.0 * texelIncrement, v_Uv.y)).x * (WT9_2 / WT9_NORMALIZE);
			colour += texture2D(tDiffuse, vec2(v_Uv.x - 3.0 * texelIncrement, v_Uv.y)).x * (WT9_3 / WT9_NORMALIZE);
			colour += texture2D(tDiffuse, vec2(v_Uv.x - 4.0 * texelIncrement, v_Uv.y)).x * (WT9_3 / WT9_NORMALIZE);

			float col = 1.0 - colour * 0.25;

			gl_FragColor = vec4(col,col,col,col);
		}
    `},gu={name:"ec_innerglow_y",defines:{},uniforms:{tDiffuse:null,blurX:null,texSize:[1,1],stride:10,glowness:2,glowColor:[1,0,0]},vertexShader:X,fragmentShader:`
		#define WT9_0 1.0
		#define WT9_1 0.8
		#define WT9_2 0.6
		#define WT9_3 0.4
		#define WT9_4 0.2
		#define WT9_NORMALIZE 5.2

		varying vec2 v_Uv;
		uniform vec2 texSize;
		uniform float stride;
		uniform float glowness;
		uniform vec3 glowColor;
		uniform sampler2D blurX;
		uniform sampler2D tDiffuse;

		void main() {
			float texelIncrement = 0.25 * stride / texSize.y;

			float colour = texture2D(blurX, vec2(v_Uv.x , v_Uv.y + texelIncrement)).x * (0.8 / WT9_NORMALIZE);
			colour += texture2D(blurX, vec2(v_Uv.x, v_Uv.y + 2.0 * texelIncrement)).x* (WT9_2 / WT9_NORMALIZE);
			colour += texture2D(blurX, vec2(v_Uv.x , v_Uv.y + 3.0 * texelIncrement)).x * (WT9_3 / WT9_NORMALIZE);
			colour += texture2D(blurX, vec2(v_Uv.x , v_Uv.y + 4.0 * texelIncrement)).x * (WT9_4 / WT9_NORMALIZE);
			colour += texture2D(blurX, vec2(v_Uv.x, v_Uv.y)).x * (WT9_0 / WT9_NORMALIZE);
			colour += texture2D(blurX, vec2(v_Uv.x , v_Uv.y - 1.0 * texelIncrement)).x * (WT9_1 / WT9_NORMALIZE);
			colour += texture2D(blurX, vec2(v_Uv.x, v_Uv.y - 2.0 * texelIncrement)).x * (WT9_2 / WT9_NORMALIZE);
			colour += texture2D(blurX, vec2(v_Uv.x, v_Uv.y - 3.0 * texelIncrement)).x* (WT9_3 / WT9_NORMALIZE);
			colour += texture2D(blurX, vec2(v_Uv.x , v_Uv.y- 4.0 * texelIncrement)).x * (WT9_3 / WT9_NORMALIZE);

			texelIncrement = 0.5 * stride / texSize.y;
			colour += texture2D(blurX, vec2(v_Uv.x , v_Uv.y + texelIncrement)).x * (0.8 / WT9_NORMALIZE);
			colour += texture2D(blurX, vec2(v_Uv.x, v_Uv.y + 2.0 * texelIncrement)).x* (WT9_2 / WT9_NORMALIZE);
			colour += texture2D(blurX, vec2(v_Uv.x , v_Uv.y + 3.0 * texelIncrement)).x * (WT9_3 / WT9_NORMALIZE);
			colour += texture2D(blurX, vec2(v_Uv.x , v_Uv.y + 4.0 * texelIncrement)).x * (WT9_4 / WT9_NORMALIZE);
			colour += texture2D(blurX, vec2(v_Uv.x, v_Uv.y)).x * (WT9_0 / WT9_NORMALIZE);
			colour += texture2D(blurX, vec2(v_Uv.x , v_Uv.y - 1.0 * texelIncrement)).x * (WT9_1 / WT9_NORMALIZE);
			colour += texture2D(blurX, vec2(v_Uv.x, v_Uv.y - 2.0 * texelIncrement)).x * (WT9_2 / WT9_NORMALIZE);
			colour += texture2D(blurX, vec2(v_Uv.x, v_Uv.y - 3.0 * texelIncrement)).x* (WT9_3 / WT9_NORMALIZE);
			colour += texture2D(blurX, vec2(v_Uv.x , v_Uv.y- 4.0 * texelIncrement)).x * (WT9_3 / WT9_NORMALIZE);

			texelIncrement = 0.75 * stride / texSize.y;
			colour += texture2D(blurX, vec2(v_Uv.x , v_Uv.y + texelIncrement)).x * (0.8 / WT9_NORMALIZE);
			colour += texture2D(blurX, vec2(v_Uv.x, v_Uv.y + 2.0 * texelIncrement)).x* (WT9_2 / WT9_NORMALIZE);
			colour += texture2D(blurX, vec2(v_Uv.x , v_Uv.y + 3.0 * texelIncrement)).x * (WT9_3 / WT9_NORMALIZE);
			colour += texture2D(blurX, vec2(v_Uv.x , v_Uv.y + 4.0 * texelIncrement)).x * (WT9_4 / WT9_NORMALIZE);
			colour += texture2D(blurX, vec2(v_Uv.x, v_Uv.y)).x * (WT9_0 / WT9_NORMALIZE);
			colour += texture2D(blurX, vec2(v_Uv.x , v_Uv.y - 1.0 * texelIncrement)).x * (WT9_1 / WT9_NORMALIZE);
			colour += texture2D(blurX, vec2(v_Uv.x, v_Uv.y - 2.0 * texelIncrement)).x * (WT9_2 / WT9_NORMALIZE);
			colour += texture2D(blurX, vec2(v_Uv.x, v_Uv.y - 3.0 * texelIncrement)).x* (WT9_3 / WT9_NORMALIZE);
			colour += texture2D(blurX, vec2(v_Uv.x , v_Uv.y- 4.0 * texelIncrement)).x * (WT9_3 / WT9_NORMALIZE);

			texelIncrement = stride / texSize.y;
			colour += texture2D(blurX, vec2(v_Uv.x , v_Uv.y + texelIncrement)).x * (0.8 / WT9_NORMALIZE);
			colour += texture2D(blurX, vec2(v_Uv.x, v_Uv.y + 2.0 * texelIncrement)).x* (WT9_2 / WT9_NORMALIZE);
			colour += texture2D(blurX, vec2(v_Uv.x , v_Uv.y + 3.0 * texelIncrement)).x * (WT9_3 / WT9_NORMALIZE);
			colour += texture2D(blurX, vec2(v_Uv.x , v_Uv.y + 4.0 * texelIncrement)).x * (WT9_4 / WT9_NORMALIZE);
			colour += texture2D(blurX, vec2(v_Uv.x, v_Uv.y)).x * (WT9_0 / WT9_NORMALIZE);
			colour += texture2D(blurX, vec2(v_Uv.x , v_Uv.y - 1.0 * texelIncrement)).x * (WT9_1 / WT9_NORMALIZE);
			colour += texture2D(blurX, vec2(v_Uv.x, v_Uv.y - 2.0 * texelIncrement)).x * (WT9_2 / WT9_NORMALIZE);
			colour += texture2D(blurX, vec2(v_Uv.x, v_Uv.y - 3.0 * texelIncrement)).x* (WT9_3 / WT9_NORMALIZE);
			colour += texture2D(blurX, vec2(v_Uv.x , v_Uv.y- 4.0 * texelIncrement)).x * (WT9_3 / WT9_NORMALIZE);

			vec3 glo = (0.25 * glowness * colour) * glowColor;
			vec4 maskTexel = texture2D(tDiffuse, v_Uv);
			
			gl_FragColor = vec4(maskTexel.x * glo, 1.);
		}
    `},xu={name:"ec_tint",defines:{},uniforms:{texture1:null,texture2:null},vertexShader:X,fragmentShader:`
        uniform sampler2D texture1;
        uniform sampler2D texture2;
        varying vec2 v_Uv;
        void main() {
            vec4 texel1 = texture2D(texture1, v_Uv);
            vec4 texel2 = texture2D(texture2, v_Uv);

            float v = max(max(texel2.x, texel2.y), texel2.z);

            vec4 color = mix(texel1, vec4(texel2.rgb, texel1.a), v);
            gl_FragColor = color;
        }
    `};class Tu extends Z{constructor(){super(),this.bufferDependencies=[{key:"SceneBuffer"},{key:"MarkBuffer",mask:k.OPAQUE},{key:"ColorMarkBuffer",mask:k.TRANSPARENT}],this.strength=1,this.radius=.4,this.threshold=.01,this.smoothWidth=.1,this.maskStrength=1,this._maskPass=new F(Jt),this._highlightPass=new F(Hr),this._blurPass=new F(Wc),this._compositePass=new F(Au),this._blendPass=new F(Rt),this._blendPass.material.premultipliedAlpha=!0,this._compositePass.uniforms.bloomFactors=new Float32Array([1,.8,.6,.4,.2]),this._compositePass.uniforms.bloomTintColors=new Float32Array([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]),this._tempRTList=[]}render(e,t,n,i,s){const r=t._renderTargetCache.allocate(0),o=t._renderTargetCache.allocate(1),l=t.getBuffer("SceneBuffer"),c=t.getBuffer("MarkBuffer"),u=t.getBuffer("ColorMarkBuffer"),h=c.attachManager.has(this.name),f=u.attachManager.getAttachIndex(this.name),d=u.output(f)._attachments[y.COLOR_ATTACHMENT0];if(h){const p=c.attachManager.getAttachIndex(this.name),m=c.attachManager.getChannelIndex(this.name);e.setRenderTarget(o),e.setClearColor(0,0,0,0),e.clear(!0,!0,!1),this._maskPass.uniforms.colorTexture=l.output()._attachments[y.COLOR_ATTACHMENT0],this._maskPass.uniforms.maskTexture=c.output(p)._attachments[y.COLOR_ATTACHMENT0],this._maskPass.uniforms.additiveTexture=d,this._maskPass.uniforms.additiveStrength=this.maskStrength;for(let g=0;g<4;g++)this._maskPass.uniforms.channel[g]=g===m?this.maskStrength:0;this._maskPass.render(e)}e.setRenderTarget(r),e.setClearColor(0,0,0,0),e.clear(!0,!0,!1),this._highlightPass.uniforms.tDiffuse=h?o.texture:d,this._highlightPass.uniforms.diffuseStrength=h?1:this.maskStrength,this._highlightPass.uniforms.threshold=this.threshold,this._highlightPass.uniforms.smoothWidth=this.smoothWidth,this._highlightPass.render(e);let _=r;for(let p=0;p<Ks.length;p++){const m=t._renderTargetCache.allocate(p+1);e.setRenderTarget(m),e.setClearColor(0,0,0,0),e.clear(!0,!0,!1),this._blurPass.uniforms.tDiffuse=_.texture,this._blurPass.uniforms.texSize[0]=_.width,this._blurPass.uniforms.texSize[1]=_.height,this._blurPass.uniforms.direction[0]=1,this._blurPass.uniforms.direction[1]=0,this._blurPass.uniforms.kernelRadius=Ks[p],this._blurPass.render(e);const g=t._renderTargetCache.allocate(p+1);e.setRenderTarget(g),e.setClearColor(0,0,0,0),e.clear(!0,!0,!1),this._blurPass.uniforms.tDiffuse=m.texture,this._blurPass.uniforms.direction[0]=0,this._blurPass.uniforms.direction[1]=1,this._blurPass.render(e),t._renderTargetCache.release(m,p+1),_=g,this._tempRTList[p]=g}e.setRenderTarget(o),e.setClearColor(0,0,0,0),e.clear(!0,!0,!1),this._compositePass.uniforms.blurTexture1=this._tempRTList[0].texture,this._compositePass.uniforms.blurTexture2=this._tempRTList[1].texture,this._compositePass.uniforms.blurTexture3=this._tempRTList[2].texture,this._compositePass.uniforms.blurTexture4=this._tempRTList[3].texture,this._compositePass.uniforms.blurTexture5=this._tempRTList[4].texture,this._compositePass.uniforms.bloomRadius=this.radius,this._compositePass.uniforms.bloomStrength=this.strength,this._compositePass.render(e),e.setRenderTarget(i),e.setClearColor(0,0,0,0),s?e.clear(t.clearColor,t.clearDepth,t.clearStencil):e.clear(!0,!0,!1),this._blendPass.uniforms.texture1=n.texture,this._blendPass.uniforms.texture2=o.texture,this._blendPass.uniforms.colorWeight1=1,this._blendPass.uniforms.alphaWeight1=1,this._blendPass.uniforms.colorWeight2=1,this._blendPass.uniforms.alphaWeight2=0,s&&(this._blendPass.material.transparent=t._tempClearColor[3]<1||!t.clearColor,this._blendPass.renderStates.camera.rect.fromArray(t._tempViewport)),this._blendPass.render(e),s&&(this._blendPass.material.transparent=!1,this._blendPass.renderStates.camera.rect.set(0,0,1,1)),t._renderTargetCache.release(r,0),t._renderTargetCache.release(o,1),this._tempRTList.forEach((p,m)=>t._renderTargetCache.release(p,m+1))}dispose(){this._maskPass.dispose(),this._highlightPass.dispose(),this._blurPass.dispose(),this._compositePass.dispose(),this._blendPass.dispose()}}const Ks=[3,5,7,9,11],Au={name:"ec_bloom_composite",defines:{NUM_MIPS:5},uniforms:{blurTexture1:null,blurTexture2:null,blurTexture3:null,blurTexture4:null,blurTexture5:null,bloomStrength:1,bloomRadius:0,bloomFactors:null,bloomTintColors:null},vertexShader:X,fragmentShader:`
		uniform sampler2D blurTexture1;
		uniform sampler2D blurTexture2;
		uniform sampler2D blurTexture3;
		uniform sampler2D blurTexture4;
		uniform sampler2D blurTexture5;
		uniform float bloomStrength;
		uniform float bloomRadius;
		uniform float bloomFactors[NUM_MIPS];
		uniform vec3 bloomTintColors[NUM_MIPS];

        varying vec2 v_Uv;

        float lerpBloomFactor(const in float factor) {
            float mirrorFactor = 1.2 - factor;
            return mix(factor, mirrorFactor, bloomRadius);
        }

        void main() {
            gl_FragColor = bloomStrength * (
				lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, v_Uv) +
				lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, v_Uv) +
				lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, v_Uv) +
				lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, v_Uv) +
				lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, v_Uv)
			);
        }
    `};class vu extends Z{constructor(){super(),this.bufferDependencies=[{key:"SceneBuffer"},{key:"MarkBuffer",mask:k.OPAQUE},{key:"ColorMarkBuffer",mask:k.TRANSPARENT}],this.strength=.5,this.blendRate=.4,this.blurSize=1,this.maskStrength=1,this._maskPass=new F(Jt),this._downSamplerPass=new F(Eu),this._hBlurPass=new F(Xr),this._vBlurPass=new F(Vr),this._blendPass=new F(Rt),this._blendPass.material.premultipliedAlpha=!0,this._tempRTList=[],this._tempRTList2=[]}render(e,t,n,i,s){for(let f=0;f<6;f++)this._tempRTList[f]=t._renderTargetCache.allocate(f),this._tempRTList2[f]=t._renderTargetCache.allocate(f);const r=t.getBuffer("SceneBuffer"),o=t.getBuffer("MarkBuffer"),l=t.getBuffer("ColorMarkBuffer"),c=o.attachManager.has(this.name),u=l.attachManager.getAttachIndex(this.name),h=l.output(u)._attachments[y.COLOR_ATTACHMENT0];if(c){const f=o.attachManager.getAttachIndex(this.name),d=o.attachManager.getChannelIndex(this.name);e.setRenderTarget(this._tempRTList[0]),e.setClearColor(0,0,0,0),e.clear(!0,!0,!1),this._maskPass.uniforms.colorTexture=r.output()._attachments[y.COLOR_ATTACHMENT0],this._maskPass.uniforms.maskTexture=o.output(f)._attachments[y.COLOR_ATTACHMENT0],this._maskPass.uniforms.additiveTexture=h,this._maskPass.uniforms.additiveStrength=this.maskStrength;for(let _=0;_<4;_++)this._maskPass.uniforms.channel[_]=_===d?this.maskStrength:0;this._maskPass.render(e)}e.setRenderTarget(this._tempRTList[1]),e.setClearColor(0,0,0,0),e.clear(!0,!0,!1),this._downSamplerPass.uniforms.tDiffuse=c?this._tempRTList[0].texture:h,this._downSamplerPass.uniforms.bright=(c?1:this.maskStrength)*4,this._downSamplerPass.uniforms.texSize[0]=this._tempRTList[0].width,this._downSamplerPass.uniforms.texSize[1]=this._tempRTList[0].height,this._downSamplerPass.render(e);for(let f=2;f<6;f++)e.setRenderTarget(this._tempRTList[f]),e.setClearColor(0,0,0,0),e.clear(!0,!0,!1),this._downSamplerPass.uniforms.tDiffuse=this._tempRTList[f-1].texture,this._downSamplerPass.uniforms.texSize[0]=this._tempRTList[f-1].width,this._downSamplerPass.uniforms.texSize[1]=this._tempRTList[f-1].height,this._downSamplerPass.uniforms.bright=1,this._downSamplerPass.render(e);for(let f=0;f<5;f++)e.setRenderTarget(this._tempRTList[f]),e.setClearColor(0,0,0,0),e.clear(!0,!0,!1),this._hBlurPass.uniforms.tDiffuse=this._tempRTList[f+1].texture,this._hBlurPass.uniforms.h=2*this.blurSize/this._tempRTList[f].width,this._hBlurPass.render(e);for(let f=0;f<5;f++)e.setRenderTarget(this._tempRTList2[f]),e.setClearColor(0,0,0,0),e.clear(!0,!0,!1),this._vBlurPass.uniforms.tDiffuse=this._tempRTList[f].texture,this._vBlurPass.uniforms.v=2*this.blurSize/this._tempRTList[f].height,this._vBlurPass.render(e);for(let f=3;f>=0;f--)e.setRenderTarget(this._tempRTList[f]),e.setClearColor(0,0,0,0),e.clear(!0,!0,!1),this._blendPass.uniforms.texture1=this._tempRTList2[f].texture,this._blendPass.uniforms.texture2=f<3?this._tempRTList[f+1].texture:this._tempRTList2[f+1].texture,this._blendPass.uniforms.colorWeight1=(1-this.blendRate)*this.strength,this._blendPass.uniforms.alphaWeight1=(1-this.blendRate)*this.strength,this._blendPass.uniforms.colorWeight2=this.blendRate*this.strength,this._blendPass.uniforms.alphaWeight2=this.blendRate*this.strength,this._blendPass.render(e);e.setRenderTarget(i),e.setClearColor(0,0,0,0),s?e.clear(t.clearColor,t.clearDepth,t.clearStencil):e.clear(!0,!0,!1),this._blendPass.uniforms.texture1=n.texture,this._blendPass.uniforms.texture2=this._tempRTList[0].texture,this._blendPass.uniforms.colorWeight1=1,this._blendPass.uniforms.alphaWeight1=1,this._blendPass.uniforms.colorWeight2=1,this._blendPass.uniforms.alphaWeight2=0,s&&(this._blendPass.material.transparent=t._tempClearColor[3]<1||!t.clearColor,this._blendPass.renderStates.camera.rect.fromArray(t._tempViewport)),this._blendPass.render(e),s&&(this._blendPass.material.transparent=!1,this._blendPass.renderStates.camera.rect.set(0,0,1,1)),this._tempRTList.forEach((f,d)=>t._renderTargetCache.release(f,d)),this._tempRTList2.forEach((f,d)=>t._renderTargetCache.release(f,d))}dispose(){this._maskPass.dispose(),this._downSamplerPass.dispose(),this._hBlurPass.dispose(),this._vBlurPass.dispose(),this._blendPass.dispose()}}const Eu={name:"ec_sg_downsample",defines:{},uniforms:{tDiffuse:null,texSize:[512,512],bright:1},vertexShader:X,fragmentShader:`
		varying vec2 v_Uv;

		uniform sampler2D tDiffuse;
		uniform vec2 texSize;
	
		uniform float bright;
		
		void main() {
    		vec4 d = vec4(-1.0, -1.0, 1.0, 1.0) / texSize.xyxy;
			gl_FragColor = (texture2D(tDiffuse, v_Uv + d.xy) +
				texture2D(tDiffuse, v_Uv + d.zy) +
				texture2D(tDiffuse, v_Uv + d.xw) +
				texture2D(tDiffuse, v_Uv + d.zw)) * bright * 0.25;
		}
	`};class Su extends Z{constructor(){super(),this.bufferDependencies=[{key:"SceneBuffer"},{key:"MarkBuffer",mask:k.OPAQUE},{key:"ColorMarkBuffer",mask:k.TRANSPARENT}],this.center=new G(.5,.5),this.direction=new G(0,1),this.strength=1,this._maskPass=new F(Jt),this._tailingPass=new F(yu),this._blendPass=new F(Rt),this._blendPass.material.premultipliedAlpha=!0}render(e,t,n,i,s){const r=t._renderTargetCache.allocate(0),o=t._renderTargetCache.allocate(0),l=t.getBuffer("SceneBuffer"),c=t.getBuffer("MarkBuffer"),u=t.getBuffer("ColorMarkBuffer"),h=c.attachManager.has(this.name),f=u.attachManager.getAttachIndex(this.name),d=u.output(f)._attachments[y.COLOR_ATTACHMENT0];if(h){const _=c.attachManager.getAttachIndex(this.name),p=c.attachManager.getChannelIndex(this.name);e.setRenderTarget(r),e.setClearColor(0,0,0,0),e.clear(!0,!0,!1),this._maskPass.uniforms.colorTexture=l.output()._attachments[y.COLOR_ATTACHMENT0],this._maskPass.uniforms.maskTexture=c.output(_)._attachments[y.COLOR_ATTACHMENT0],this._maskPass.uniforms.additiveTexture=d;for(let m=0;m<4;m++)this._maskPass.uniforms.channel[m]=m===p?1:0;this._maskPass.render(e)}e.setRenderTarget(o),e.setClearColor(0,0,0,0),e.clear(!0,!0,!1),this._tailingPass.uniforms.blurMap=h?r.texture:d,this._tailingPass.uniforms.center[0]=this.center.x,this._tailingPass.uniforms.center[1]=this.center.y,this._tailingPass.uniforms.direction[0]=this.direction.x,this._tailingPass.uniforms.direction[1]=this.direction.y,this._tailingPass.uniforms.intensity=10*this.strength,this._tailingPass.render(e),e.setRenderTarget(i),e.setClearColor(0,0,0,0),s?e.clear(t.clearColor,t.clearDepth,t.clearStencil):e.clear(!0,!0,!1),this._blendPass.uniforms.texture1=n.texture,this._blendPass.uniforms.texture2=o.texture,this._blendPass.uniforms.colorWeight1=1,this._blendPass.uniforms.alphaWeight1=1,this._blendPass.uniforms.colorWeight2=1,this._blendPass.uniforms.alphaWeight2=0,s&&(this._blendPass.material.transparent=t._tempClearColor[3]<1||!t.clearColor,this._blendPass.renderStates.camera.rect.fromArray(t._tempViewport)),this._blendPass.render(e),s&&(this._blendPass.material.transparent=!1,this._blendPass.renderStates.camera.rect.set(0,0,1,1)),t._renderTargetCache.release(r,0),t._renderTargetCache.release(o,0)}dispose(){this._maskPass.dispose(),this._tailingPass.dispose(),this._blendPass.dispose()}}const yu={name:"ec_tailing",defines:{},uniforms:{blurMap:null,blurStart:1,blurWidth:-.1,direction:[0,1],intensity:10,glowGamma:.8,center:[.5,.5]},vertexShader:X,fragmentShader:`
		varying vec2 v_Uv;
		uniform sampler2D blurMap;
		uniform float blurStart;
		uniform float blurWidth;
		uniform vec2 direction;
		uniform float intensity;
		uniform float glowGamma;
		uniform vec2 center;

		void main() {
			vec2 texCoord = v_Uv;
			vec4 blurred = texture2D(blurMap, texCoord);
			vec2 resCoord = vec2(0.0);

			for(float i = 0.0; i < 31.0; i++) {
				float scale = blurStart + blurWidth * ((31.0 - i) / (31.0 - 1.0));
				vec2 tmp = texCoord * scale;
				resCoord = mix(texCoord, tmp, direction);
				vec4 tmpc = texture2D(blurMap, resCoord) * (i / 31.0) * (i / 31.0);
				blurred += tmpc / 31.0;
			}

			blurred.r = pow(blurred.r, glowGamma);
			blurred.g = pow(blurred.g, glowGamma);
			blurred.b = pow(blurred.b, glowGamma);
			blurred.rgb *= intensity;
			blurred.rgb = clamp(blurred.rgb, 0.0, 1.0);

			vec4 origTex = texture2D(blurMap, texCoord);
			vec4 blurResult = origTex + blurred;
			// blurResult *= 2;

			vec2 dir = texCoord - center;
			float dist = sqrt(dir.x * dir.x + dir.y * dir.y);
			float t = dist * 1.0;
			t = clamp(t, 0.0, 1.0); // We need 0 <= t <= 1

			gl_FragColor = blurResult * t;
		}
    `};class Mu extends Z{constructor(){super(),this.bufferDependencies=[{key:"SceneBuffer"},{key:"MarkBuffer",mask:k.OPAQUE},{key:"ColorMarkBuffer",mask:k.TRANSPARENT}],this.center=new G(.5,.5),this.strength=1,this._maskPass=new F(Jt),this._radialTailingPass=new F(Pu),this._blendPass=new F(Rt),this._blendPass.material.premultipliedAlpha=!0}render(e,t,n,i,s){const r=t._renderTargetCache.allocate(0),o=t._renderTargetCache.allocate(0),l=t.getBuffer("SceneBuffer"),c=t.getBuffer("MarkBuffer"),u=t.getBuffer("ColorMarkBuffer"),h=c.attachManager.has(this.name),f=u.attachManager.getAttachIndex(this.name),d=u.output(f)._attachments[y.COLOR_ATTACHMENT0];if(h){const _=c.attachManager.getAttachIndex(this.name),p=c.attachManager.getChannelIndex(this.name);e.setRenderTarget(r),e.setClearColor(0,0,0,0),e.clear(!0,!0,!1),this._maskPass.uniforms.colorTexture=l.output()._attachments[y.COLOR_ATTACHMENT0],this._maskPass.uniforms.maskTexture=c.output(_)._attachments[y.COLOR_ATTACHMENT0],this._maskPass.uniforms.additiveTexture=d;for(let m=0;m<4;m++)this._maskPass.uniforms.channel[m]=m===p?1:0;this._maskPass.render(e)}e.setRenderTarget(o),e.setClearColor(0,0,0,0),e.clear(!0,!0,!1),this._radialTailingPass.uniforms.blurMap=h?r.texture:d,this._radialTailingPass.uniforms.center[0]=this.center.x,this._radialTailingPass.uniforms.center[1]=this.center.y,this._radialTailingPass.uniforms.intensity=10*this.strength,this._radialTailingPass.render(e),e.setRenderTarget(i),e.setClearColor(0,0,0,0),s?e.clear(t.clearColor,t.clearDepth,t.clearStencil):e.clear(!0,!0,!1),this._blendPass.uniforms.texture1=n.texture,this._blendPass.uniforms.texture2=o.texture,this._blendPass.uniforms.colorWeight1=1,this._blendPass.uniforms.alphaWeight1=1,this._blendPass.uniforms.colorWeight2=1,this._blendPass.uniforms.alphaWeight2=0,s&&(this._blendPass.material.transparent=t._tempClearColor[3]<1||!t.clearColor,this._blendPass.renderStates.camera.rect.fromArray(t._tempViewport)),this._blendPass.render(e),s&&(this._blendPass.material.transparent=!1,this._blendPass.renderStates.camera.rect.set(0,0,1,1)),t._renderTargetCache.release(r,0),t._renderTargetCache.release(o,0)}dispose(){this._maskPass.dispose(),this._radialTailingPass.dispose(),this._blendPass.dispose()}}const Pu={name:"ec_radial_tailing",defines:{},uniforms:{blurMap:null,blurStart:1,blurWidth:-.1,intensity:10,glowGamma:.8,center:[.5,.5]},vertexShader:X,fragmentShader:`
		varying vec2 v_Uv;
		uniform sampler2D blurMap;
		uniform float blurStart;
		uniform float blurWidth;
		uniform float intensity;
		uniform float glowGamma;
		uniform vec2 center;
		
		void main() {
			vec2 texCoord = v_Uv;
			vec2 ctrPt = center;
			vec4 blurred = texture2D(blurMap, texCoord);
		
			for(float i = 0.0; i < 31.0; i++) {
				float scale = blurStart + blurWidth * ((31.0 - i) / (31.0 - 1.0));
				vec2 tmp = (texCoord - ctrPt) * scale + ctrPt;
				vec4 tmpc = texture2D(blurMap, tmp) * (i / 31.0) * (i / 31.0);
		
				blurred += tmpc / 31.0;
			}
		
			blurred.r = pow(blurred.r, glowGamma);
			blurred.g = pow(blurred.g, glowGamma);
			blurred.b = pow(blurred.b, glowGamma);
			blurred.rgb *= intensity;
			blurred.rgb = clamp(blurred.rgb, 0.0, 1.0);
		
			vec4 origTex = texture2D(blurMap, texCoord);
			vec4 blurResult = origTex + blurred;
			// blurResult *= 2;
		
			vec2 dir = texCoord - ctrPt;
			float dist = sqrt(dir.x * dir.x + dir.y * dir.y);
			float t = dist * 1.0;
			t = clamp(t, 0.0, 1.0); // We need 0 <= t <= 1
		
			gl_FragColor = blurResult * t;
		}
    `};class Cu extends Z{constructor(){super(),this.bufferDependencies=[{key:"SceneBuffer"},{key:"MarkBuffer",mask:k.OPAQUE},{key:"ColorMarkBuffer",mask:k.TRANSPARENT}],this.center=new G(.5,.5),this.strength=1,this._maskPass=new F(Jt),this._ghostingPass=new F(Lu),this._blendPass=new F(Rt),this._blendPass.material.premultipliedAlpha=!0}render(e,t,n,i,s){const r=t._renderTargetCache.allocate(0),o=t._renderTargetCache.allocate(0),l=t.getBuffer("SceneBuffer"),c=t.getBuffer("MarkBuffer"),u=t.getBuffer("ColorMarkBuffer"),h=c.attachManager.has(this.name),f=u.attachManager.getAttachIndex(this.name),d=u.output(f)._attachments[y.COLOR_ATTACHMENT0];if(h){const _=c.attachManager.getAttachIndex(this.name),p=c.attachManager.getChannelIndex(this.name);e.setRenderTarget(r),e.setClearColor(0,0,0,0),e.clear(!0,!0,!1),this._maskPass.uniforms.colorTexture=l.output()._attachments[y.COLOR_ATTACHMENT0],this._maskPass.uniforms.maskTexture=c.output(_)._attachments[y.COLOR_ATTACHMENT0],this._maskPass.uniforms.additiveTexture=d;for(let m=0;m<4;m++)this._maskPass.uniforms.channel[m]=m===p?1:0;this._maskPass.render(e)}e.setRenderTarget(o),e.setClearColor(0,0,0,0),e.clear(!0,!0,!1),this._ghostingPass.uniforms.blurMap=h?r.texture:d,this._ghostingPass.uniforms.center[0]=this.center.x,this._ghostingPass.uniforms.center[1]=this.center.y,this._ghostingPass.uniforms.intensity=3*this.strength,this._ghostingPass.render(e),e.setRenderTarget(i),e.setClearColor(0,0,0,0),s?e.clear(t.clearColor,t.clearDepth,t.clearStencil):e.clear(!0,!0,!1),this._blendPass.uniforms.texture1=n.texture,this._blendPass.uniforms.texture2=o.texture,this._blendPass.uniforms.colorWeight1=1,this._blendPass.uniforms.alphaWeight1=1,this._blendPass.uniforms.colorWeight2=1,this._blendPass.uniforms.alphaWeight2=0,s&&(this._blendPass.material.transparent=t._tempClearColor[3]<1||!t.clearColor,this._blendPass.renderStates.camera.rect.fromArray(t._tempViewport)),this._blendPass.render(e),s&&(this._blendPass.material.transparent=!1,this._blendPass.renderStates.camera.rect.set(0,0,1,1)),t._renderTargetCache.release(r,0),t._renderTargetCache.release(o,0)}dispose(){this._maskPass.dispose(),this._ghostingPass.dispose(),this._blendPass.dispose()}}const Lu={name:"ec_ghosting",defines:{},uniforms:{blurMap:null,blurStart:1,blurWidth:-.1,intensity:3,glowGamma:.8,center:[.5,.5]},vertexShader:X,fragmentShader:`
		varying vec2 v_Uv;
		uniform sampler2D blurMap;
		uniform float blurStart;
		uniform float blurWidth;
		uniform float intensity;
		uniform float glowGamma;
		uniform vec2 center;
		
		void main() {
			vec2 uv = v_Uv;
			vec2 ctrPt = center;
		
			float scale = blurStart + blurWidth * 1.0;
			vec2 tmp = (uv - ctrPt) * scale + ctrPt;

			vec4 blurred = texture2D(blurMap, tmp);
			blurred.rgb = pow(blurred.rgb, vec3(glowGamma));
			blurred.rgb *= intensity;
			blurred.rgb = clamp(blurred.rgb, 0.0, 1.0);
			
			vec2 dir = uv - ctrPt;
			float dist = sqrt(dir.x * dir.x + dir.y * dir.y);
		
			gl_FragColor = blurred * clamp(dist, 0.0, 1.0);
		}
    `};class wu extends Kt{constructor(e,t,n){super(e,t,n),this.enableCameraJitter=!0,this._rt=new fe(e,t),this._rt.texture.minFilter=C.NEAREST,this._rt.texture.magFilter=C.NEAREST,this._rt.texture.generateMipmaps=!1,n.floatColorBuffer?this._rt.texture.type=N.FLOAT:this._rt.texture.type=N.HALF_FLOAT;const i=new oe;i.image={data:null,width:e,height:t},i.type=N.UNSIGNED_INT_24_8,i.format=M.DEPTH_STENCIL,i.magFilter=C.NEAREST,i.minFilter=C.NEAREST,i.generateMipmaps=!1,i.flipY=!1,this._rt.attach(i,y.DEPTH_STENCIL_ATTACHMENT),this._renderOptions={getMaterial:hi()},this._fixedRenderStates={scene:null,lights:null,camera:{id:0,version:0,near:0,far:0,position:new T,logDepthCameraNear:0,logDepthBufFC:0,viewMatrix:new U,projectionMatrix:new U,projectionViewMatrix:new U,rect:new xe(0,0,1,1)},gammaFactor:2,outputEncoding:null},this.layers=[0],this.cameraNear=-1,this.cameraFar=-1}setIfRenderReplaceFunction(e){e?this._renderOptions.ifRender=e:delete this._renderOptions.ifRender}setGeometryReplaceFunction(e){e?this._renderOptions.getGeometry=e:delete this._renderOptions.getGeometry}setMaterialReplaceFunction(e){e?this._renderOptions.getMaterial=hi(e):this._renderOptions.getMaterial=hi()}render(e,t,n,i){if(!this.needRender())return;const s=t.$cameraJitter,r=this.enableCameraJitter&&s.accumulating();e.setRenderTarget(this._rt),e.setClearColor(-2.1,-2.1,.5,.5),e.clear(!0,!0,!1);const o=this._renderOptions,l=n.getRenderStates(i),c=n.getRenderQueue(i),u=this._getFixedRenderStates(l);r&&s.jitterProjectionMatrix(u.camera,this._rt.width,this._rt.height),e.beginRender();const h=this.layers;for(let f=0,d=h.length;f<d;f++){const _=c.getLayer(h[f]);e.renderRenderableList(_.opaque,u,o),e.renderRenderableList(_.transparent,u,o)}e.endRender()}output(){return this._rt}getCurrentRenderStates(){return this._fixedRenderStates}resize(e,t){super.resize(e,t),this._rt.resize(e,t)}dispose(){super.dispose(),this._rt.dispose()}_getFixedRenderStates(e){const t=this._fixedRenderStates;t.scene=e.scene,t.lights=e.lights,t.gammaFactor=e.gammaFactor,t.outputEncoding=e.outputEncoding;const n=t.camera,i=e.camera;n.id=i.id,n.version=i.version,n.position=i.position,n.logDepthCameraNear=i.logDepthCameraNear,n.logDepthBufFC=i.logDepthBufFC,n.viewMatrix=i.viewMatrix,n.rect=i.rect;const s=this.cameraNear>0?this.cameraNear:i.near,r=this.cameraFar>0?this.cameraFar:i.far;return n.near=s,n.far=r,n.projectionMatrix.copy(i.projectionMatrix),this.cameraNear>0||this.cameraFar>0?(n.projectionMatrix.elements[10]=-(r+s)/(r-s),n.projectionMatrix.elements[14]=-2*r*s/(r-s),n.projectionViewMatrix.multiplyMatrices(n.projectionMatrix,n.viewMatrix)):n.projectionViewMatrix.copy(i.projectionViewMatrix),t}}function hi(a=bu){return function(e){const t=a(e);return t.diffuseMap=e.material.diffuseMap,t.uniforms.metalness=e.material.metalness!==void 0?e.material.metalness:.5,t.uniforms.roughness=e.material.roughness!==void 0?e.material.roughness:.5,t.metalnessMap=e.material.metalnessMap,t.roughnessMap=e.material.roughnessMap,t.side=e.material.side,t}}const fi=new Map,di=new WeakMap;function bu(a){let e=di.get(a.material);if(!e){let f=function(){a.material.removeEventListener("dispose",f),di.delete(a.material),e.refCount--,e.refCount<=0&&fi.delete(h)};const t=!a.geometry.attributes.a_Normal||a.material.shading===yt.FLAT_SHADING,n=!!a.material.diffuseMap,i=!!a.material.metalnessMap,s=!!a.material.roughnessMap,r=a.object.isSkinnedMesh&&a.object.skeleton,o=!!a.object.morphTargetInfluences,l=!!a.object.morphTargetInfluences&&a.object.geometry.morphAttributes.normal,c=a.material.side;let u=0;r&&(a.object.skeleton.boneTexture?u=1024:u=a.object.skeleton.bones.length);const h=t+"_"+n+"_"+i+"_"+s+"_"+r+"_"+u+"_"+o+"_"+l+"_"+c;if(e=fi.get(h),!e){const d=new at(Ru);d.shading=t?yt.FLAT_SHADING:yt.SMOOTH_SHADING,d.alphaTest=n?.999:0,d.side=c,e={refCount:0,material:d},fi.set(h,e)}di.set(a.material,e),e.refCount++,a.material.addEventListener("dispose",f)}return e.material}const Ru={name:"ec_gbuffer",defines:{},uniforms:{metalness:.5,roughness:.5},vertexShader:`
        #include <common_vert>
        #include <morphtarget_pars_vert>
        #include <skinning_pars_vert>
        #include <normal_pars_vert>
        #include <uv_pars_vert>
		#include <modelPos_pars_frag>
        void main() {
        	#include <uv_vert>
        	#include <begin_vert>
        	#include <morphtarget_vert>
        	#include <morphnormal_vert>
        	#include <skinning_vert>
        	#include <skinnormal_vert>
        	#include <normal_vert>
        	#include <pvm_vert>
			#include <modelPos_vert>
        }
    `,fragmentShader:`
        #include <common_frag>
        #include <diffuseMap_pars_frag>

        #include <uv_pars_frag>

        #include <packing>
        #include <normal_pars_frag>

		${Vc}

        uniform float metalness;
		
		#ifdef USE_METALNESSMAP
            uniform sampler2D metalnessMap;
        #endif

		uniform float roughness;

        #ifdef USE_ROUGHNESSMAP
            uniform sampler2D roughnessMap;
        #endif

		#include <modelPos_pars_frag>

        void main() {
            #if defined(USE_DIFFUSE_MAP) && defined(ALPHATEST)
                vec4 texelColor = texture2D(diffuseMap, v_Uv);
                float alpha = texelColor.a * u_Opacity;
                if(alpha < ALPHATEST) discard;
            #endif

			#ifdef FLAT_SHADED
				vec3 fdx = dFdx(v_modelPos);
				vec3 fdy = dFdy(v_modelPos);
				vec3 normal = normalize(cross(fdx, fdy));
			#else
            	vec3 normal = normalize(v_Normal);
				#ifdef DOUBLE_SIDED
					normal = normal * (float(gl_FrontFacing) * 2.0 - 1.0);
				#endif 
			#endif

			float metalnessFactor = metalness;
            #ifdef USE_METALNESSMAP
				metalnessFactor *= texture2D(metalnessMap, v_Uv).b;
            #endif

            float roughnessFactor = roughness;
            #ifdef USE_ROUGHNESSMAP
                roughnessFactor *= texture2D(roughnessMap, v_Uv).g;
            #endif

            vec4 outputColor;
            outputColor.xy = unitVectorToOctahedron(normal);
			outputColor.z = saturate(metalnessFactor);
            outputColor.w = saturate(roughnessFactor);
            
            gl_FragColor = outputColor;
        }
    `};class Yr{constructor(e){this.keys=new Array,this.masks=new Array,this.attachChannelSize=e}allocate(e,t=k.ALL){return this.keys.push(e),this.masks.push(t),this.keys.length-1}getAttachIndex(e){const t=this.keys.indexOf(e);return Math.max(0,Math.floor(t/this.attachChannelSize))}getChannelIndex(e){const t=this.keys.indexOf(e);return Math.max(0,t%this.attachChannelSize)}has(e){return this.keys.indexOf(e)>-1}count(){return this.keys.length}attachCount(){return Math.ceil(this.keys.length/this.attachChannelSize)}getKey(e,t){return this.keys[e*this.attachChannelSize+t]}getMask(e,t){return this.masks[e*this.attachChannelSize+t]}getAttachInfo(e,t={count:0,keys:[],masks:[]}){t.count=0;for(let n=0;n<this.attachChannelSize;n++){const i=this.getKey(e,n),s=this.getMask(e,n);i!==void 0&&s!==void 0&&(t.keys[t.count]=i,t.masks[t.count]=s,t.count++)}return t}reset(){this.keys.length=0,this.masks.length=0}}class jr extends Kt{constructor(e,t,n){super(e,t,n);const i=n.bufferMipmaps;this._rts=[];for(let r=0;r<n.maxMarkAttachment;r++){const o=new fe(e,t);o.detach(y.DEPTH_STENCIL_ATTACHMENT),o.texture.type=n.halfFloatMarkBuffer?N.HALF_FLOAT:N.UNSIGNED_BYTE,i||(o.texture.generateMipmaps=!1,o.texture.minFilter=C.LINEAR),this._rts.push(o)}this._mrts=[];for(let r=0;r<n.maxMarkAttachment;r++){const o=new fe(e,t);o.attach(new Ae(e,t,n.halfFloatMarkBuffer?M.RGBA16F:M.RGBA8,n.samplerNumber),y.COLOR_ATTACHMENT0),o.detach(y.DEPTH_STENCIL_ATTACHMENT),this._mrts.push(o)}this._state={attachIndex:0,attachInfo:{count:0,keys:[],masks:[]}};const s=new Yr(4);this._opacityRenderOptions={getMaterial:St(void 0,this._state,s,k.OPAQUE),ifRender:Et(void 0,this._state,k.OPAQUE)},this._transparentRenderOptions={getMaterial:St(void 0,this._state,s,k.TRANSPARENT),ifRender:Et(void 0,this._state,k.TRANSPARENT)},this.attachManager=s,this.layers=[0]}setIfRenderReplaceFunction(e){e?(this._opacityRenderOptions.ifRender=Et(e,this._state,k.OPAQUE),this._transparentRenderOptions.ifRender=Et(e,this._state,k.TRANSPARENT)):(this._opacityRenderOptions.ifRender=Et(void 0,this._state,k.OPAQUE),this._transparentRenderOptions.ifRender=Et(void 0,this._state,k.TRANSPARENT))}setGeometryReplaceFunction(e){e?(this._opacityRenderOptions.getGeometry=e,this._transparentRenderOptions.getGeometry=e):(delete this._opacityRenderOptions.getGeometry,delete this._transparentRenderOptions.getGeometry)}setMaterialReplaceFunction(e){e?(this._opacityRenderOptions.getMaterial=St(e,this._state,this.attachManager,k.OPAQUE),this._transparentRenderOptions.getMaterial=St(e,this._state,this.attachManager,k.TRANSPARENT)):(this._opacityRenderOptions.getMaterial=St(void 0,this._state,this.attachManager,k.OPAQUE),this._transparentRenderOptions.getMaterial=St(void 0,this._state,this.attachManager,k.TRANSPARENT))}render(e,t,n,i){if(!this.needRender())return;const s=this.attachManager.attachCount();s>this._rts.length&&console.error("XXMarkBuffer: attachCount<"+s+"> bigger then options.maxMarkAttachment<"+this._rts.length+">.");for(let r=0;r<s;r++){const o=this._rts[r],l=this._mrts[r];t.$useMSAA?(e.setRenderTarget(l),e.setClearColor(0,0,0,0),e.clear(!0,!1,!1)):(e.setRenderTarget(o),e.setClearColor(0,0,0,0),e.clear(!0,!1,!1));const c=n.getRenderStates(i),u=n.getRenderQueue(i);this._state.attachIndex=r,this.attachManager.getAttachInfo(r,this._state.attachInfo);let h=0;const f=this._state.attachInfo.masks,d=this._state.attachInfo.count;for(let p=0;p<d;p++)h|=f[p];e.beginRender();const _=this.layers;for(let p=0,m=_.length;p<m;p++){const g=u.getLayer(_[p]);h&k.OPAQUE&&e.renderRenderableList(g.opaque,c,this._opacityRenderOptions),h&k.TRANSPARENT&&e.renderRenderableList(g.transparent,c,this._transparentRenderOptions)}e.endRender(),t.$useMSAA&&(e.setRenderTarget(o),e.blitRenderTarget(l,o,!0,!1,!1)),e.updateRenderTargetMipmap(o)}}output(e=0){return this._rts[e]}resize(e,t){super.resize(e,t),this._rts.forEach(n=>n.resize(e,t)),this._mrts.forEach(n=>n.resize(e,t))}dispose(){super.dispose(),this._rts.forEach(e=>e.dispose()),this._mrts.forEach(e=>e.dispose())}}function Et(a=Nu,e,t){return function(n){if(!a(n)||!n.object.effects)return!1;let i=0;for(let s=0;s<e.attachInfo.count;s++){const r=e.attachInfo.keys[s];n.object.effects[r]&&(i|=e.attachInfo.masks[s])}return i&t}}function Nu(a){return!0}function St(a=Fu,e,t,n){return function(i){const s=a(i);s.side=se.DOUBLE;for(let r=0;r<4;r++){const o=t.getKey(e.attachIndex,r);t.getMask(e.attachIndex,r)&n?s.uniforms.mColor[r]=i.object.effects[o]||0:s.uniforms.mColor[r]=0}return s}}const _i=new Map;function Fu(a){const e=a.object.isSkinnedMesh&&a.object.skeleton,t=!!a.object.morphTargetInfluences,n=a.material.drawMode,i=e+"_"+t+"_"+n;let s;return _i.has(i)?s=_i.get(i):(s=new at(Du),s.premultipliedAlpha=!0,s.transparent=!0,s.blending=Re.ADD,s.drawMode=n,_i.set(i,s)),s}const Du={name:"ec_mark",defines:{},uniforms:{mColor:[1,1,1,1]},vertexShader:`
        #include <common_vert>
        #include <morphtarget_pars_vert>
        #include <skinning_pars_vert>
        #include <uv_pars_vert>
		#include <logdepthbuf_pars_vert>
        void main() {
        	#include <uv_vert>
        	#include <begin_vert>
        	#include <morphtarget_vert>
        	#include <skinning_vert>
        	#include <pvm_vert>
			#include <logdepthbuf_vert>
        }
    `,fragmentShader:`
        #include <common_frag>
        #include <diffuseMap_pars_frag>

        #include <uv_pars_frag>

		#include <logdepthbuf_pars_frag>

		uniform vec4 mColor;

        void main() {
			#include <logdepthbuf_frag>
			
            #if defined(USE_DIFFUSE_MAP) && defined(ALPHATEST)
                vec4 texelColor = texture2D(diffuseMap, v_Uv);
                float alpha = texelColor.a * u_Opacity;
                if(alpha < ALPHATEST) discard;
            #endif

            gl_FragColor = mColor;
        }
    `};class Iu extends jr{constructor(e,t,n){super(e,t,n)}syncDepthAttachments(e,t){this._rts.forEach(n=>n.dispose()),this._mrts.forEach(n=>n.dispose()),lt(e)?this._rts.forEach(n=>{n.attach(e,y.DEPTH_STENCIL_ATTACHMENT),n.detach(y.DEPTH_ATTACHMENT)}):this._rts.forEach(n=>{n.attach(e,y.DEPTH_ATTACHMENT),n.detach(y.DEPTH_STENCIL_ATTACHMENT)}),lt(t)?this._mrts.forEach(n=>{n.attach(t,y.DEPTH_STENCIL_ATTACHMENT),n.detach(y.DEPTH_ATTACHMENT)}):this._mrts.forEach(n=>{n.attach(t,y.DEPTH_ATTACHMENT),n.detach(y.DEPTH_STENCIL_ATTACHMENT)}),this.needsUpdate=!0}}class Uu extends Kt{constructor(e,t,n){super(e,t,n);const i=n.bufferMipmaps;this._rts=[];for(let o=0;o<n.maxColorAttachment;o++){const l=new fe(e,t);l.detach(y.DEPTH_STENCIL_ATTACHMENT),l.texture.type=n.halfFloatMarkBuffer?N.HALF_FLOAT:N.UNSIGNED_BYTE,i||(l.texture.generateMipmaps=!1,l.texture.minFilter=C.LINEAR),this._rts.push(l)}this._mrts=[];for(let o=0;o<n.maxColorAttachment;o++){const l=new fe(e,t);l.attach(new Ae(e,t,n.halfFloatMarkBuffer?M.RGBA16F:M.RGBA8,n.samplerNumber),y.COLOR_ATTACHMENT0),l.detach(y.DEPTH_STENCIL_ATTACHMENT),this._mrts.push(l)}const s={key:null};this._state=s;const r=new Yr(1);this._renderOptions={getMaterial:mi(void 0,s),ifRender:pi(void 0,s)},this.attachManager=r,this.layers=[0]}setIfRenderReplaceFunction(e){e?this._renderOptions.ifRender=pi(e,this._state):this._renderOptions.ifRender=pi(void 0,this._state)}setGeometryReplaceFunction(e){e?this._renderOptions.getGeometry=e:delete this._renderOptions.getGeometry}setMaterialReplaceFunction(e){e?this._renderOptions.getMaterial=mi(e,this._state):this._renderOptions.getMaterial=mi(void 0,this._state)}syncDepthAttachments(e,t){this._rts.forEach(n=>n.dispose()),this._mrts.forEach(n=>n.dispose()),lt(e)?this._rts.forEach(n=>{n.attach(e,y.DEPTH_STENCIL_ATTACHMENT),n.detach(y.DEPTH_ATTACHMENT)}):this._rts.forEach(n=>{n.attach(e,y.DEPTH_ATTACHMENT),n.detach(y.DEPTH_STENCIL_ATTACHMENT)}),lt(t)?this._mrts.forEach(n=>{n.attach(t,y.DEPTH_STENCIL_ATTACHMENT),n.detach(y.DEPTH_ATTACHMENT)}):this._mrts.forEach(n=>{n.attach(t,y.DEPTH_ATTACHMENT),n.detach(y.DEPTH_STENCIL_ATTACHMENT)}),this.needsUpdate=!0}render(e,t,n,i){if(!this.needRender())return;const s=this.attachManager.attachCount();s>this._rts.length&&console.error("ColorMarkBuffer: attachCount<"+s+"> bigger then options.maxColorAttachment<"+this._rts.length+">.");for(let r=0;r<s;r++){const o=this._rts[r],l=this._mrts[r];t.$useMSAA?(e.setRenderTarget(l),e.setClearColor(0,0,0,0),e.clear(!0,!1,!1)):(e.setRenderTarget(o),e.setClearColor(0,0,0,0),e.clear(!0,!1,!1));const c=this._renderOptions,u=this.attachManager,h=n.getRenderStates(i),f=n.getRenderQueue(i);this._state.key=u.getKey(r,0);const d=u.getMask(r,0);e.beginRender();const _=this.layers;for(let p=0,m=_.length;p<m;p++){const g=f.getLayer(_[p]);d&k.OPAQUE&&e.renderRenderableList(g.opaque,h,c),d&k.TRANSPARENT&&e.renderRenderableList(g.transparent,h,c)}e.endRender(),t.$useMSAA&&(e.setRenderTarget(o),e.blitRenderTarget(l,o,!0,!1,!1)),e.updateRenderTargetMipmap(o)}}output(e=0){return this._rts[e]}resize(e,t){super.resize(e,t),this._rts.forEach(n=>n.resize(e,t)),this._mrts.forEach(n=>n.resize(e,t))}dispose(){super.dispose(),this._rts.forEach(e=>e.dispose()),this._mrts.forEach(e=>e.dispose())}}function pi(a=Ou,e){return function(t){return!a(t)||!t.object.effects?!1:!!t.object.effects[e.key]}}function Ou(a){return!0}function mi(a=Bu,e){return function(t){const n=a(t);return n.side=se.DOUBLE,n.uniforms.strength=t.object.effects[e.key]||0,n}}const gi=new Map;function Bu(a){const e=a.object.isSkinnedMesh&&a.object.skeleton,t=!!a.object.morphTargetInfluences,n=a.material.drawMode,i=!!a.material.diffuseMap,s=e+"_"+t+"_"+n+i;let r;return gi.has(s)?r=gi.get(s):(r=new at(zu),r.premultipliedAlpha=!1,r.drawMode=n,gi.set(s,r)),r.transparent=a.material.transparent,r.blending=a.material.blending,r.opacity=a.material.opacity,r.diffuse.copy(a.material.diffuse),r.diffuseMap=a.material.diffuseMap,r}const zu={name:"ec_color",defines:{},uniforms:{strength:1},vertexShader:`
        #include <common_vert>
        #include <morphtarget_pars_vert>
        #include <skinning_pars_vert>
        #include <uv_pars_vert>
		#include <logdepthbuf_pars_vert>
        void main() {
        	#include <uv_vert>
        	#include <begin_vert>
        	#include <morphtarget_vert>
        	#include <skinning_vert>
        	#include <pvm_vert>
			#include <logdepthbuf_vert>
        }
    `,fragmentShader:`
        #include <common_frag>
        #include <diffuseMap_pars_frag>

        #include <uv_pars_frag>

		#include <logdepthbuf_pars_frag>

		uniform float strength;

        void main() {
			#include <logdepthbuf_frag>

			vec4 outColor = vec4(u_Color, u_Opacity);

			#ifdef USE_DIFFUSE_MAP
				outColor *= texture2D(diffuseMap, v_Uv);
			#endif

			#ifdef ALPHATEST
				if(outColor.a < ALPHATEST) discard;
			#endif

			outColor.a *= strength;

            gl_FragColor = outColor;
        }
    `};class Gu extends Kt{constructor(e,t,n){super(e,t,n),this.enableCameraJitter=!0,this._rt=new fe(e,t),this._rt.detach(y.DEPTH_STENCIL_ATTACHMENT),this._mrt=new fe(e,t),this._mrt.detach(y.DEPTH_STENCIL_ATTACHMENT),this.clearColor=!0,this.clearDepth=!0,this.clearStencil=!0,this.renderLayers=[{id:0,mask:k.ALL}],this._sceneRenderOptions={}}syncAttachments(e,t,n,i){this._rt.dispose(),this._mrt.dispose(),this._rt.attach(e,y.COLOR_ATTACHMENT0),lt(t)?(this._rt.attach(t,y.DEPTH_STENCIL_ATTACHMENT),this._rt.detach(y.DEPTH_ATTACHMENT)):(this._rt.attach(t,y.DEPTH_ATTACHMENT),this._rt.detach(y.DEPTH_STENCIL_ATTACHMENT)),this._mrt.attach(n,y.COLOR_ATTACHMENT0),lt(i)?(this._mrt.attach(i,y.DEPTH_STENCIL_ATTACHMENT),this._mrt.detach(y.DEPTH_ATTACHMENT)):(this._mrt.attach(i,y.DEPTH_ATTACHMENT),this._mrt.detach(y.DEPTH_STENCIL_ATTACHMENT)),this.needsUpdate=!0}setIfRenderReplaceFunction(e){e?this._sceneRenderOptions.ifRender=e:delete this._sceneRenderOptions.ifRender}setGeometryReplaceFunction(e){e?this._sceneRenderOptions.getGeometry=e:delete this._sceneRenderOptions.getGeometry}setOutputEncoding(e){this._rt.texture.encoding=e}getOutputEncoding(){return this._rt.texture.encoding}render(e,t,n,i){if(!this.needRender())return;const s=t.$useMSAA,r=s?this._mrt:this._rt,o=!!r._attachments[y.DEPTH_STENCIL_ATTACHMENT],l=t.$cameraJitter,c=this.enableCameraJitter&&l.accumulating();e.setRenderTarget(r),t.clearColor?e.setClearColor(...t._tempClearColor):e.setClearColor(0,0,0,0),e.clear(this.clearColor,this.clearDepth,this.clearStencil&&o);const u=n.getRenderStates(i),h=n.getRenderQueue(i);c&&l.jitterProjectionMatrix(u.camera,this._rt.width,this._rt.height),this.$renderScene(e,h,u),c&&l.restoreProjectionMatrix(u.camera),s&&(e.setRenderTarget(this._rt),e.blitRenderTarget(this._mrt,this._rt,!0,!0,o)),e.updateRenderTargetMipmap(this._rt)}output(){return this._rt}resize(e,t){super.resize(e,t),this._rt.resize(e,t),this._mrt.resize(e,t)}dispose(){super.dispose(),this._rt.dispose(),this._mrt.dispose()}$renderScene(e,t,n){const i=this._sceneRenderOptions;e.beginRender();const s=this.renderLayers;for(let o=0,l=s.length;o<l;o++){const{id:c,mask:u,options:h=i}=s[o],f=t.getLayer(c);f&&(f.opaqueCount>0&&u&k.OPAQUE&&e.renderRenderableList(f.opaque,n,h),f.transparentCount>0&&u&k.TRANSPARENT&&e.renderRenderableList(f.transparent,n,h))}e.endRender();const r=t.getLayer(1);r&&r.opaqueCount+r.transparentCount>0&&(e.clear(!1,!0,!1),e.beginRender(),e.renderRenderableList(r.opaque,n,i),e.renderRenderableList(r.transparent,n,i),e.endRender())}}class ku{constructor(e,t,n=!1){this._width=e,this._height=t,this._highDynamicRange=n,this._map=new Map}allocate(e=0){let t=this._map.get(e);if(t||(t=[],this._map.set(e,t)),t.length>0)return t.shift();{const n=Math.pow(2,e),i=Math.ceil(this._width/n),s=Math.ceil(this._height/n),r=new fe(i,s),o=r._attachments[y.COLOR_ATTACHMENT0];return o.minFilter=C.LINEAR,o.magFilter=C.LINEAR,o.type=this._highDynamicRange?N.HALF_FLOAT:N.UNSIGNED_BYTE,o.format=M.RGBA,o.generateMipmaps=!1,r.detach(y.DEPTH_STENCIL_ATTACHMENT),r}}release(e,t=0){this._map.get(t).push(e)}resize(e,t){this._width=e,this._height=t,this._map.forEach((n,i)=>{const s=Math.pow(2,i),r=Math.ceil(this._width/s),o=Math.ceil(this._height/s);n.forEach(l=>{l.resize(r,o)})})}updateStats(e){let t=0;this._map.forEach((n,i)=>{const s=Math.pow(2,i);t+=n.length/(s*s)}),e.fboCache=t}dispose(){this._map.forEach(e=>{e.forEach(t=>{t.dispose()})}),this._map.clear()}}class Hu{constructor(e=30){this._enabled=!1,this._state=te.DISABLED,this._totalFrame=0,this._haltonSequenece=[],this._frame=0,this._jitterMatrix=new U,this._originMatrix=new U,this.setTotalFrame(e)}setTotalFrame(e){this._totalFrame=e;const t=[];for(let n=0;n<e;n++)t.push([$s(n,2),$s(n,3)]);this._haltonSequence=t}set enable(e){this._state===te.DISABLED?e&&(this._frame=0,this._state=te.ACCUMULATING):this._state===te.ACCUMULATING?e||(this._frame=0,this._state=te.DISABLED):this._state===te.FINISHED&&(e||(this._frame=0,this._state=te.DISABLED))}get enable(){return this._state!==te.DISABLED}reset(){this._state!==te.DISABLED&&(this._state===te.ACCUMULATING?this._frame=0:this._state===te.FINISHED&&(this._state=te.ACCUMULATING))}update(){this._state===te.ACCUMULATING&&(this._frame++,this._frame>=this._totalFrame&&(this._state=te.FINISHED,this._frame=0))}finished(){return this._state===te.FINISHED}accumulating(){return this._state===te.ACCUMULATING}frame(){return this._frame}totalFrame(){return this._totalFrame}jitterProjectionMatrix(e,t,n){if(this._state!==te.ACCUMULATING)return;const i=this._haltonSequence[this._frame],s=this._jitterMatrix;s.elements[12]=(i[0]*2-1)/t,s.elements[13]=(i[1]*2-1)/n,this._originMatrix.copy(e.projectionMatrix),e.projectionMatrix.premultiply(s),e.projectionViewMatrix.multiplyMatrices(e.projectionMatrix,e.viewMatrix)}restoreProjectionMatrix(e){this._state===te.ACCUMULATING&&(e.projectionMatrix.copy(this._originMatrix),e.projectionViewMatrix.multiplyMatrices(e.projectionMatrix,e.viewMatrix))}}const te={DISABLED:1,ACCUMULATING:2,FINISHED:3};function $s(a,e){let t=0,n=1/e,i=a;for(;i>0;)t=t+n*(i%e),i=Math.floor(i/e),n=n/e;return t}class Qi{constructor(e,t,n={}){this._size=new G(e,t),n.webgl2=n.webgl2||!1,n.bufferMipmaps=n.bufferMipmaps||!1,n.floatColorBuffer=n.floatColorBuffer||!1,n.highDynamicRange=n.highDynamicRange||!1,n.samplerNumber=n.samplerNumber||8,n.maxMarkAttachment=n.maxMarkAttachment||5,n.maxColorAttachment=n.maxColorAttachment||5,n.halfFloatMarkBuffer=n.halfFloatMarkBuffer||n.highDynamicRange;const i=new Gu(e,t,n),s=new wu(e,t,n),r=new jr(e,t,n),o=new Iu(e,t,n),l=new Uu(e,t,n);this._bufferMap=new Map([["SceneBuffer",i],["GBuffer",s],["NonDepthMarkBuffer",r],["MarkBuffer",o],["ColorMarkBuffer",l]]),this._defaultColorTexture=new oe,this._defaultColorTexture.type=n.highDynamicRange?N.HALF_FLOAT:N.UNSIGNED_BYTE,this._defaultMSColorRenderBuffer=new Ae(e,t,n.highDynamicRange?M.RGBA16F:M.RGBA8,n.samplerNumber),n.bufferMipmaps||(this._defaultColorTexture.generateMipmaps=!1,this._defaultColorTexture.minFilter=C.LINEAR),this._defaultDepthRenderBuffer=new Ae(e,t,M.DEPTH_COMPONENT16),this._defaultMSDepthRenderBuffer=new Ae(e,t,M.DEPTH_COMPONENT16,n.samplerNumber),this._defaultDepthStencilRenderBuffer=new Ae(e,t,M.DEPTH_STENCIL),this._defaultMSDepthStencilRenderBuffer=new Ae(e,t,M.DEPTH24_STENCIL8,n.samplerNumber),this._externalColorAttachment=null,this._externalDepthAttachment=null,this._samplerNumber=n.samplerNumber,this._externalMSAA=null,this._stencilBuffer=!1,this._syncAttachments(),this._copyPass=new F(Xi),this._copyPass.material.premultipliedAlpha=!0,this._renderTargetCache=new ku(e,t,n.highDynamicRange),this._cameraJitter=new Hu,this._effectList=[],this._tempClearColor=[0,0,0,1],this._tempViewport=[0,0,1,1],this._tempBufferNames=new Set,this._stats={fboCache:0,markBuffers:0,colorMarkBuffers:0,currentBufferUsage:{}},this.sceneMSAA=!1,this.clearColor=!0,this.clearDepth=!0,this.clearStencil=!1,this.debugger=null}getSize(){return this._size}_syncAttachments(){const e=this._externalColorAttachment,t=this._externalDepthAttachment,n=!!e&&!!t,i=this._externalMSAA;let s=this._stencilBuffer;n&&(s=lt(t));const r=s?this._defaultDepthStencilRenderBuffer:this._defaultDepthRenderBuffer,o=s?this._defaultMSDepthStencilRenderBuffer:this._defaultMSDepthRenderBuffer;let l,c,u,h,f,d;n?i?(l=this._defaultColorTexture,c=r,u=e,h=t,f=r,d=t):(l=e,c=t,u=this._defaultMSColorRenderBuffer,h=o,f=t,d=o):(l=this._defaultColorTexture,c=r,u=this._defaultMSColorRenderBuffer,h=o,f=r,d=o),this._bufferMap.forEach(_=>{_.syncAttachments?_.syncAttachments(l,c,u,h):_.syncDepthAttachments&&_.syncDepthAttachments(f,d)})}set stencilBuffer(e){this._stencilBuffer=e,this._syncAttachments()}get stencilBuffer(){return this._stencilBuffer}setExternalAttachment(e,t){const n=Js(e),i=Js(t);if(n!==i){console.warn("EffectComposer.setExternalAttachment: color and depth attachment MultipleSampling not match.");return}this._externalColorAttachment=e,this._externalDepthAttachment=t,this._externalMSAA=n>0,this._syncAttachments()}clearExternalAttachment(){this._externalColorAttachment=null,this._externalDepthAttachment=null,this._externalMSAA=null,this._syncAttachments()}addBuffer(e,t){this._bufferMap.set(e,t)}removeBuffer(e){this._bufferMap.delete(e)}getBuffer(e){return this._bufferMap.get(e)}addEffect(e,t,n=0){if(this.getEffect(e)){console.warn("");return}t.name=e,this._effectList.push({name:e,effect:t,order:n}),t.resize(this._size.x,this._size.y)}removeEffect(e){const t=this._effectList.findIndex(n=>n.name===e);t>-1&&this._effectList.splice(t,1)}getEffect(e){const t=this._effectList.find(n=>n.name===e);return t?t.effect:null}render(e,t,n,i){const s=t.getRenderStates(n);if(e.getClearColor().toArray(this._tempClearColor),n.rect.toArray(this._tempViewport),n.rect.set(0,0,1,1),s.camera.rect.set(0,0,1,1),this._bufferMap.forEach(l=>{l.attachManager&&l.attachManager.reset()}),this.debugger){this.debugger.bufferDependencies.forEach(l=>{const c=this._bufferMap.get(l);this.debugger.channel&&c.attachManager&&c.attachManager.allocate(this.debugger.channel,this.debugger.mask),c.render(e,this,t,n)}),this.debugger.render(e,this,i),e.setClearColor(...this._tempClearColor);return}this._effectList.sort(Vu);let r=this._effectList.findIndex(l=>l.effect.active);const o=r>-1;if(this._tempBufferNames.clear(),o){this._tempBufferNames.add("SceneBuffer");let l=!1;this._effectList.forEach(_=>{_.effect.active&&(_.effect.bufferDependencies.forEach(({key:p,mask:m})=>{this._tempBufferNames.add(p),this._bufferMap.get(p).attachManager&&this._bufferMap.get(p).attachManager.allocate(_.name,m)}),l=l||_.effect.needCameraJitter)}),this._cameraJitter.enable=l,this._tempBufferNames.forEach(_=>{this._bufferMap.get(_).render(e,this,t,n)});let c=this._renderTargetCache.allocate(),u=this._renderTargetCache.allocate(),h;this._effectList.sort(Xu);const f=this._effectList.length,d=this._effectList.findIndex(_=>_.effect.active);r=f-1-r,this._effectList.forEach((_,p)=>{if(!_.effect.active)return;const m=p<r;_.effect.render(e,this,p===d?this._bufferMap.get("SceneBuffer").output():c,m?u:i,!m),h=c,c=u,u=h}),this._renderTargetCache.release(c),this._renderTargetCache.release(u),this._cameraJitter.update()}else if(this._externalColorAttachment&&this._externalDepthAttachment){const l=this._bufferMap.get("SceneBuffer");l.render(e,this,t,n),e.setRenderTarget(i),e.setClearColor(0,0,0,0),e.clear(this.clearColor,this.clearDepth,this.clearStencil);const c=this._copyPass;c.uniforms.tDiffuse=l.output().texture,c.material.transparent=this._tempClearColor[3]<1||!this.clearColor,c.renderStates.camera.rect.fromArray(this._tempViewport),c.render(e)}else{e.setRenderTarget(i),e.setClearColor(...this._tempClearColor),e.clear(this.clearColor,this.clearDepth,this.clearStencil),s.camera.rect.fromArray(this._tempViewport);const l=t.getRenderQueue(n);this._bufferMap.get("SceneBuffer").$renderScene(e,l,s)}e.setClearColor(...this._tempClearColor),n.rect.fromArray(this._tempViewport),s.camera.rect.fromArray(this._tempViewport)}getStats(){this._renderTargetCache.updateStats(this._stats);const e=this.getBuffer("MarkBuffer").attachManager.attachCount(),t=this.getBuffer("NonDepthMarkBuffer").attachManager.attachCount(),n=this.getBuffer("ColorMarkBuffer").attachManager.attachCount();this._stats.markBuffers=e+t,this._stats.colorMarkBuffers=n;for(const[i,s]of this._bufferMap)s.attachManager||(this._stats.currentBufferUsage[i]=this._tempBufferNames.has(i)?1:0);return this._stats}resize(e,t){this._size.set(e,t),this._bufferMap.forEach(n=>n.resize(e,t)),this._renderTargetCache.resize(e,t),this._effectList.forEach(n=>n.effect.resize(e,t))}dispose(){this._bufferMap.forEach(e=>e.dispose()),this._renderTargetCache.dispose(),this._effectList.forEach(e=>e.effect.dispose()),this._copyPass.dispose()}get $useMSAA(){return(this._externalMSAA!==null?this._externalMSAA:this.sceneMSAA)&&this._samplerNumber>1}get $cameraJitter(){return this._cameraJitter}}function Xu(a,e){return a.order-e.order}function Vu(a,e){return e.order-a.order}function Js(a){return a.isTexture?0:a.multipleSampling}class Lf extends Qi{constructor(e,t,n){super(e,t,n),this.addEffect("SSAO",new Wr,0),this.addEffect("SSR",new Wi,1),this.addEffect("ColorCorrection",new Zc,2),this.addEffect("DOF",new $c,3),this.addEffect("Bloom",new Yc,4),this.addEffect("InnerGlow",new pu,10),this.addEffect("Glow",new Tu,11),this.addEffect("SoftGlow",new vu,12),this.addEffect("Tailing",new Su,13),this.addEffect("RadialTailing",new Mu,14),this.addEffect("Ghosting",new Cu,15),this.addEffect("FXAA",new nu,101),this.addEffect("ChromaticAberration",new jc,102),this.addEffect("Vignetting",new hu,103),this.addEffect("BlurEdge",new du,104),this.addEffect("Film",new eu,105),this._effectList.forEach(i=>i.effect.active=!1)}}class Nt{constructor(){this.bufferDependencies=[]}render(e,t,n){console.error("Debugger: .render() must be implemented in subclass.")}resize(e,t){}dispose(){}}class Wu extends Nt{constructor(){super(),this.bufferDependencies=["SceneBuffer","ColorMarkBuffer"],this._mainPass=new F(Xi),this.channel="",this.mask=k.ALL}render(e,t,n){e.setRenderTarget(n),e.setClearColor(0,0,0,1),e.clear(!0,!0,!1);const i=t.getBuffer("ColorMarkBuffer"),s=i.attachManager.getAttachIndex(this.channel);this._mainPass.uniforms.tDiffuse=i.output(s)._attachments[y.COLOR_ATTACHMENT0],this._mainPass.render(e)}}class Qt extends Nt{constructor(){super(),this.bufferDependencies=["GBuffer"],this._mainPass=new F(Qu),this.debugType=qr.Normal}render(e,t,n){e.setRenderTarget(n),e.setClearColor(0,0,0,1),e.clear(!0,!0,!1);const i=t.getBuffer("GBuffer"),s=i.getCurrentRenderStates();this._mainPass.uniforms.colorTexture0=i.output()._attachments[y.COLOR_ATTACHMENT0],this._mainPass.uniforms.depthTexture=i.output()._attachments[y.DEPTH_STENCIL_ATTACHMENT],this._mainPass.uniforms.debug=this.debugType||0,s.camera.projectionViewMatrix.toArray(this._mainPass.uniforms.projectionView),this._mainPass.render(e)}}const qr={Normal:0,Depth:1,Position:2,Metalness:3,Roughness:4};Qt.DebugTypes=qr;const Qu={name:"ec_debug_gbuffer",defines:{},uniforms:{colorTexture0:null,depthTexture:null,projectionView:new Float32Array(16),debug:0},vertexShader:X,fragmentShader:`
		uniform sampler2D colorTexture0;
		uniform sampler2D depthTexture;
		uniform int debug;

		uniform mat4 projectionView;

		varying vec2 v_Uv;

		${$t}

		void main() {
			vec2 texCoord = v_Uv;
			vec4 texel = texture2D(colorTexture0, texCoord);

			if (texel.r < -2.0) {
				discard;
			}

			vec3 normal = octahedronToUnitVector(texel.rg);
			float depth = texture2D(depthTexture, texCoord).r;

			vec2 xy = texCoord * 2.0 - 1.0;
			float z = depth * 2.0 - 1.0;

			vec4 projectedPos = vec4(xy, z, 1.0);
			vec4 p4 = inverse(projectionView) * projectedPos;

			vec3 position = p4.xyz / p4.w;

			if (debug == 0) {
				gl_FragColor = vec4(normal * 0.5 + 0.5, 1.0);
			} else if (debug == 1) {
				gl_FragColor = vec4(vec3(depth), 1.0);
			} else if (debug == 2) {
				gl_FragColor = vec4(position, 1.0);
			} else if (debug == 3) {
				gl_FragColor = vec4(vec3(texel.b), 1.0);
			} else {
				gl_FragColor = vec4(vec3(texel.a), 1.0);
			}
		}
	`};class Yu extends Nt{constructor(){super(),this.bufferDependencies=["SceneBuffer","MarkBuffer"],this._mainPass=new F(Vi),this.channel="",this.mask=k.ALL}render(e,t,n){e.setRenderTarget(n),e.setClearColor(0,0,0,1),e.clear(!0,!0,!1);const i=t.getBuffer("MarkBuffer"),s=i.attachManager.getAttachIndex(this.channel),r=i.attachManager.getChannelIndex(this.channel);this._mainPass.uniforms.tDiffuse=i.output(s)._attachments[y.COLOR_ATTACHMENT0];for(let o=0;o<4;o++)this._mainPass.uniforms.channelMask[o]=o===r?1:0;this._mainPass.render(e)}}class ju extends Nt{constructor(){super(),this.bufferDependencies=["NonDepthMarkBuffer"],this._mainPass=new F(Vi),this.channel="",this.mask=k.ALL}render(e,t,n){e.setRenderTarget(n),e.setClearColor(0,0,0,1),e.clear(!0,!0,!1);const i=t.getBuffer("NonDepthMarkBuffer"),s=i.attachManager.getAttachIndex(this.channel),r=i.attachManager.getChannelIndex(this.channel);this._mainPass.uniforms.tDiffuse=i.output(s)._attachments[y.COLOR_ATTACHMENT0];for(let o=0;o<4;o++)this._mainPass.uniforms.channelMask[o]=o===r?1:0;this._mainPass.render(e)}}class qu extends Nt{constructor(){super(),this.bufferDependencies=["GBuffer"],this.defaultEffect=new Wr}render(e,t,n){(t.getEffect("SSAO")||this.defaultEffect).render(e,t,null,n)}resize(e,t){this.defaultEffect.resize(e,t)}dispose(){this.defaultEffect.dispose()}}class Zu extends Nt{constructor(){super(),this.bufferDependencies=["SceneBuffer","GBuffer"],this.defaultEffect=new Wi}render(e,t,n){(t.getEffect("SSR")||this.defaultEffect).render(e,t,null,n)}resize(e,t){this.defaultEffect.resize(e,t)}dispose(){this.defaultEffect.dispose()}}Qi.prototype.setGeometryReplaceFunction=function(a){console.warn("EffectComposer.setGeometryReplaceFunction has been removed, use SceneBuffer.setGeometryReplaceFunction instead."),this._bufferMap.get("SceneBuffer").setGeometryReplaceFunction(a)};Object.defineProperties(Qi.prototype,{customRenderLayers:{set:function(a){console.error("EffectComposer.customRenderLayers has been removed, use SceneBuffer.renderLayers instead.")},get:function(){return console.error("EffectComposer.customRenderLayers has been removed, use SceneBuffer.renderLayers instead."),[]}}});F.prototype.dispose||(F.prototype.dispose=function(){const a=this.renderQueueLayer.opaque[0];a&&(a.geometry.dispose(),a.material.dispose())});Object.defineProperties(Wi.prototype,{mixType:{set:function(a){this.falloff=a},get:function(){return this.falloff}}});Qt.DebugTypes.Glossiness=Qt.DebugTypes.Roughness;class wf extends Kt{constructor(e,t,n){super(e,t,n),this._frontDepthRenderTarget=new fe(e,t),this._frontDepthRenderTarget.texture.minFilter=C.NEAREST,this._frontDepthRenderTarget.texture.magFilter=C.NEAREST,this._frontDepthRenderTarget.texture.generateMipmaps=!1,n.floatColorBuffer?this._frontDepthRenderTarget.texture.type=N.FLOAT:this._frontDepthRenderTarget.texture.type=N.HALF_FLOAT,this._backDepthRenderTarget=new fe(e,t),this._backDepthRenderTarget.texture.minFilter=C.NEAREST,this._backDepthRenderTarget.texture.magFilter=C.NEAREST,this._backDepthRenderTarget.texture.generateMipmaps=!1,n.floatColorBuffer?this._backDepthRenderTarget.texture.type=N.FLOAT:this._backDepthRenderTarget.texture.type=N.HALF_FLOAT,this._output=[this._frontDepthRenderTarget,this._backDepthRenderTarget],this._frontMaterial=new at(tr),this._frontMaterial.side=se.FRONT,this._backMaterial=new at(tr),this._backMaterial.side=se.BACK;const i=this;this._frontRenderOptions={ifRender:er,getMaterial:function(s){return i._frontMaterial.uniforms.volumeid=s.object.effects.volume,i._frontMaterial}},this._backRenderOptions={ifRender:er,getMaterial:function(s){return i._backMaterial.uniforms.volumeid=s.object.effects.volume,i._backMaterial}},this.layers=[0]}setGeometryReplaceFunction(e){e?(this._frontRenderOptions.getGeometry=e,this._backRenderOptions.getGeometry=e):(delete this._frontRenderOptions.getGeometry,delete this._backRenderOptions.getGeometry)}render(e,t,n,i){if(!this.needRender())return;const s=n.getRenderStates(i),r=n.getRenderQueue(i);e.setRenderTarget(this._frontDepthRenderTarget),e.setClearColor(0,0,0,0),e.clear(!0,!0,!1);const o=this.layers;e.beginRender();for(let l=0,c=o.length;l<c;l++){const u=r.getLayer(o[l]);e.renderRenderableList(u.opaque,s,this._frontRenderOptions),e.renderRenderableList(u.transparent,s,this._frontRenderOptions)}e.endRender(),e.setRenderTarget(this._backDepthRenderTarget),e.setClearColor(0,0,0,0),e.clear(!0,!0,!1),e.beginRender();for(let l=0,c=o.length;l<c;l++){const u=r.getLayer(o[l]);e.renderRenderableList(u.opaque,s,this._backRenderOptions),e.renderRenderableList(u.transparent,s,this._backRenderOptions)}e.endRender()}output(){return this._output}resize(e,t){super.resize(e,t),this._frontDepthRenderTarget.resize(e,t),this._backDepthRenderTarget.resize(e,t)}dispose(){super.dispose(),this._frontDepthRenderTarget.dispose(),this._backDepthRenderTarget.dispose()}}function er(a){return a.object.effects?!!a.object.effects.volume:!1}const tr={name:"ec_thickness",uniforms:{volumeid:0},vertexShader:`
        #include <common_vert>
        #include <morphtarget_pars_vert>
        #include <skinning_pars_vert>
        #include <normal_pars_vert>
        #include <uv_pars_vert>
		#include <logdepthbuf_pars_vert>
        void main() {
        	#include <uv_vert>
        	#include <begin_vert>
        	#include <morphtarget_vert>
        	#include <morphnormal_vert>
        	#include <pvm_vert>
			#include <logdepthbuf_vert>
        }
    `,fragmentShader:`
        #include <common_frag>
        #include <uv_pars_frag>

        #include <packing>
        #include <normal_pars_frag>

        uniform float volumeid;

		#include <logdepthbuf_pars_frag>

        void main() {
			#include <logdepthbuf_frag>
			float depth = gl_FragCoord.z;
            gl_FragColor = vec4(depth, volumeid, 0., 1.);
        }
    `};class bf extends Z{constructor(){super(),this.bufferDependencies=[{key:"GBuffer"},{key:"ThicknessBuffer"}],this.volumeId=1,this.volumeTexture=null,this.colorRampTexture=null,this.unitDistanceOpacity=1,this.valueAffectsOpacity=!0,this.alphaThreshold=0,this.opacity=1,this.mixType=0,this.boxMatrix=new U,this._mainPass=new F(Ku)}render(e,t,n,i,s){const r=t.getBuffer("GBuffer"),o=t.getBuffer("ThicknessBuffer"),l=r.getCurrentRenderStates(),c=this._mainPass;e.setRenderTarget(i),e.setClearColor(0,0,0,0),s?e.clear(t.clearColor,t.clearDepth,t.clearStencil):e.clear(!0,!0,!1),nr.copy(l.camera.projectionMatrix),ir.multiplyMatrices(l.camera.projectionMatrix,l.camera.viewMatrix).inverse(),sr.copy(l.camera.viewMatrix),nr.toArray(c.material.uniforms.projection),ir.toArray(c.material.uniforms.ProjViewInverse),sr.toArray(c.material.uniforms.view),l.camera.position.toArray(c.material.uniforms.cameraPos),c.material.uniforms.id=this.volumeId,c.material.uniforms.frontDepthTex=o.output()[0]._attachments[y.COLOR_ATTACHMENT0],c.material.uniforms.backDepthTex=o.output()[1]._attachments[y.COLOR_ATTACHMENT0],c.material.uniforms.diffuseTex=n.texture,c.material.uniforms.depthTex=r.output()._attachments[y.DEPTH_STENCIL_ATTACHMENT],c.material.uniforms.volumeTexture=this.volumeTexture,c.material.uniforms.colorRampTexture=this.colorRampTexture,c.material.uniforms.near=l.camera.near,c.material.uniforms.far=l.camera.far,c.material.uniforms.unitDistanceOpacity=this.unitDistanceOpacity,c.material.uniforms.opacity=this.opacity,c.material.uniforms.alphaThreshold=this.alphaThreshold,c.material.uniforms.mixType=this.mixType,rr.copy(this.boxMatrix).inverse(),rr.toArray(c.material.uniforms.boxMatrixInverse);const u=!!(this.volumeTexture&&this.volumeTexture.isTexture3D);u!==c.material.defines.TEXTURETYPE_3D&&(c.material.defines.TEXTURETYPE_3D=u,c.material.needsUpdate=!0),this.valueAffectsOpacity!==c.material.defines.VALUE_OPACITY&&(c.material.defines.VALUE_OPACITY=this.valueAffectsOpacity,c.material.needsUpdate=!0),s&&(c.material.transparent=t._tempClearColor[3]<1||!t.clearColor,c.renderStates.camera.rect.fromArray(t._tempViewport)),c.render(e),s&&(c.material.transparent=!1,c.renderStates.camera.rect.set(0,0,1,1))}dispose(){this._mainPass.dispose()}}const nr=new U,ir=new U,sr=new U,rr=new U,Ku={defines:{MAX_ITERATION:100,ZSLICENUM:256,ZSLICEX:16,ZSLICEY:16,TEXTURETYPE_3D:!1,VALUE_OPACITY:!0},uniforms:{id:1,depthTex:null,backDepthTex:null,frontDepthTex:null,volumeTexture:null,diffuseTex:null,colorRampTexture:null,projection:new Float32Array(16),ProjViewInverse:new Float32Array(16),view:new Float32Array(16),cameraPos:[0,0,0],near:.1,far:1e3,unitDistanceOpacity:1,opacity:1,alphaThreshold:0,mixType:0,boxMatrixInverse:new Float32Array(16)},vertexShader:X,fragmentShader:`
    precision highp sampler3D;

	uniform float id;

    uniform sampler2D depthTex;
    uniform sampler2D backDepthTex;
    uniform sampler2D frontDepthTex;

    uniform sampler2D diffuseTex;
    uniform sampler2D colorRampTexture;

    uniform mat4 projection;
    uniform mat4 ProjViewInverse;
    uniform mat4 view;
	
	uniform vec3 cameraPos;
    uniform float near;
    uniform float far;
    
	uniform float unitDistanceOpacity;
	uniform float opacity;
    uniform float alphaThreshold;
    uniform float mixType;
	uniform mat4 boxMatrixInverse;

    varying vec2 v_Uv;

    float linearizeDepth(float depth) {
        return (2.0 * near) / (far + near - depth * (far - near));
    }

    vec4 getColor(float intensity) {
		vec4 color = texture2D(colorRampTexture, vec2(intensity, 0.5));
    	return vec4(color.rgb, intensity);
    }

    #ifdef TEXTURETYPE_3D
        uniform sampler3D volumeTexture;

        vec4 sampleAs3DTexture(vec3 texCoord) {
            texCoord += vec3(0.5);
           
            return getColor(texture(volumeTexture, texCoord).r);
        }
    #else 
        uniform sampler2D volumeTexture;

        // Acts like a texture3D using Z slices and trilinear filtering.
        vec4 sampleAs3DTexture(vec3 texCoord) {
			texCoord += vec3(0.5);

            vec2 uvL = texCoord.xy / vec2(ZSLICEX , ZSLICEY);
            texCoord.z = texCoord.z * float(ZSLICENUM) / float(ZSLICEX * ZSLICEY);
            float number = floor(texCoord.z * float(ZSLICEX * ZSLICEY));
            vec2 uuv;
            uuv = uvL + vec2( mod(number, float(ZSLICEX)) / float(ZSLICEX) , floor((float(ZSLICEX * ZSLICEY - 1) - number ) / float(ZSLICEY)) / float(ZSLICEY));

			return getColor(texture2D(volumeTexture, uuv).a);
        }
    #endif

    void main() {
        vec4 diffuseColor = texture2D(diffuseTex, v_Uv);

        float depth = texture2D(depthTex, v_Uv).r;
        float texId = texture2D(backDepthTex, v_Uv).g;
        float backDepth = texture2D(backDepthTex, v_Uv).r;
        float frontDepth = texture2D(frontDepthTex, v_Uv).r;
        
        if(backDepth > 0.99999) {
            gl_FragColor = diffuseColor; 
            return;
        }
        
        if(int(id) != int(texId)) {
            gl_FragColor = diffuseColor; 
            return;
        }
   
        float sampleDepth = linearizeDepth(depth);

        // Position in view
		vec4 projectedPos = vec4(v_Uv * 2.0 - 1.0, depth * 2.0 - 1.0, 1.0);
		vec4 pos = ProjViewInverse * projectedPos;
		vec3 worldPos = pos.xyz / pos.w;

        vec4 colorSum = vec4(0.0); 
        float alphaSample;
        float accumulatedAlpha = 0.0;
        vec4 accumulatedColor = vec4(0.0);

        vec4 boxFrontPos = ProjViewInverse * vec4(v_Uv * 2.0 - 1.0, frontDepth * 2.0 - 1.0, 1.0);
        vec4 boxBackPos = ProjViewInverse * vec4(v_Uv * 2.0 - 1.0, backDepth * 2.0 - 1.0, 1.0);
        vec3 direction = normalize(worldPos - cameraPos); 
    
        float dist = length(boxFrontPos.xyz / boxFrontPos.w - boxBackPos.xyz / boxBackPos.w);

        vec3 step = direction * dist / float(MAX_ITERATION);  

        vec3 point = boxFrontPos.xyz / boxFrontPos.w;

        if(backDepth < frontDepth ||  frontDepth > backDepth) {
            point = cameraPos;
            dist = length(cameraPos.xyz - boxBackPos.xyz / boxBackPos.w);
            step = direction * dist / float(MAX_ITERATION);  
        }

		float unitOpacity = unitDistanceOpacity * length(step);

        // ray marching
        for(int i = 0; i < MAX_ITERATION; i++) {
            point += step;
            vec4 screenPos = projection * view * vec4(point, 1.0);
            screenPos /= screenPos.w;
            screenPos.xyz = screenPos.xyz * 0.5 + 0.5;
            float testDepth = screenPos.z;
            testDepth = linearizeDepth(testDepth);

            if(sampleDepth < testDepth) {
                break;
            }
  
			vec3 rayPosObject = (boxMatrixInverse * vec4(point ,1.0)).xyz;

            colorSum = sampleAs3DTexture(rayPosObject); 

			alphaSample = unitOpacity;
			#ifdef VALUE_OPACITY
				alphaSample *= colorSum.a;
			#endif

			// blend to accumulated color
            alphaSample *= (1.0 - accumulatedAlpha);
            accumulatedColor += colorSum * alphaSample;
            accumulatedAlpha += alphaSample;
        }

        if(alphaThreshold > accumulatedAlpha){
            gl_FragColor = diffuseColor;
            return;
        }

        vec3 mixColor; 
        if(mixType == 0.) {
            mixColor = mix(diffuseColor.rgb, accumulatedColor.rgb, accumulatedAlpha * opacity);
        } else {
            mixColor = diffuseColor.rgb + accumulatedColor.rgb * accumulatedAlpha * opacity;
        }

        gl_FragColor = vec4(mixColor, diffuseColor.a); 
    }
	`};class Rf extends Z{constructor(){super(),this.bufferDependencies=[{key:"SceneBuffer"},{key:"GBuffer"}],this.multiBounce=!1,this.maxDistance=10,this.maxPixel=40,this.rayMarchSegment=10,this.darkFactor=1,this._gtaoPass=new F(Ju),this._blendPass=new F(kr),this._blendPass.material.premultipliedAlpha=!0}render(e,t,n,i,s){const r=t._renderTargetCache.allocate(0),o=t.getBuffer("SceneBuffer"),l=t.getBuffer("GBuffer"),c=l.getCurrentRenderStates();ar.copy(c.camera.projectionMatrix).inverse(),or.copy(c.camera.viewMatrix).inverse(),e.setRenderTarget(n?r:i),e.setClearColor(1,1,1,1),e.clear(!0,!0,!1),this._gtaoPass.uniforms.maxDistance=this.maxDistance,this._gtaoPass.uniforms.maxPixel=this.maxPixel,this._gtaoPass.uniforms.rayMarchSegment=this.rayMarchSegment,this._gtaoPass.uniforms.darkFactor=this.darkFactor,this._setDirections(),this._gtaoPass.uniforms.normalTex=l.output()._attachments[y.COLOR_ATTACHMENT0],this._gtaoPass.uniforms.depthTex=l.output()._attachments[y.DEPTH_STENCIL_ATTACHMENT],this._gtaoPass.uniforms.colorTex=o.output()._attachments[y.COLOR_ATTACHMENT0],this._gtaoPass.uniforms.cameraNear=c.camera.near,this._gtaoPass.uniforms.cameraFar=c.camera.far,ar.toArray(this._gtaoPass.uniforms.projectionInv),or.toArray(this._gtaoPass.uniforms.viewInv),this._gtaoPass.uniforms.texSize[0]=l.output().width,this._gtaoPass.uniforms.texSize[1]=l.output().height,this._gtaoPass.material.defines.MULTI_BOUNCE!=this.multiBounce&&(this._gtaoPass.material.needsUpdate=!0,this._gtaoPass.material.defines.MULTI_BOUNCE=this.multiBounce),this._gtaoPass.render(e),n&&(e.setRenderTarget(i),e.setClearColor(0,0,0,0),s?e.clear(t.clearColor,t.clearDepth,t.clearStencil):e.clear(!0,!0,!1),this._blendPass.uniforms.texture1=n.texture,this._blendPass.uniforms.texture2=r.texture,s&&(this._blendPass.material.transparent=t._tempClearColor[3]<1||!t.clearColor,this._blendPass.renderStates.camera.rect.fromArray(t._tempViewport)),this._blendPass.render(e),s&&(this._blendPass.material.transparent=!1,this._blendPass.renderStates.camera.rect.set(0,0,1,1))),t._renderTargetCache.release(r,0)}dispose(){this._gtaoPass.dispose(),this._blendPass.dispose()}_setDirections(e=0){e=e%2+1,xi[e]||(xi[e]=$u(e)),this._gtaoPass.uniforms.directions=xi[e]}}const ar=new U,or=new U,xi={};function $u(a){const e=new Float32Array(16),t=Math.PI*2*a/16,n=Math.PI*2/8;for(let i=0;i<8;i++){const s=t+i*n;e[i*2]=Math.sin(s),e[i*2+1]=Math.cos(s)}return e}const Ju={name:"ec_gtao",defines:{MULTI_BOUNCE:!1},uniforms:{maxDistance:10,maxPixel:40,darkFactor:1,rayMarchSegment:10,directions:new Float32Array(16),normalTex:null,depthTex:null,colorTex:null,cameraNear:1,cameraFar:500,projectionInv:new Float32Array(16),viewInv:new Float32Array(16),texSize:[1024,1024]},vertexShader:X,fragmentShader:`
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

		${$t}

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
			vec3 originNormal = octahedronToUnitVector(texture2D(normalTex, v_Uv).rg);
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
    `};class Nf extends Z{constructor(){super(),this.type=0,this._transitionPass=new F(eh),this._copyPass=new F(Xi),this._frameShotRenderTarget=null,this.progress=1,this.zoomFactor=.3}resize(e,t){this._frameShotRenderTarget&&this._frameShotRenderTarget.resize(e,t)}render(e,t,n,i,s){if(this.progress<=0)this._frameShotRenderTarget||(this._frameShotRenderTarget=t._renderTargetCache.allocate(0)),e.setRenderTarget(this._frameShotRenderTarget),e.setClearColor(0,0,0,0),this._copyPass.material.uniforms.tDiffuse=n.texture,this._copyPass.render(e);else if(this.progress<1&&this._frameShotRenderTarget){e.setRenderTarget(i),e.setClearColor(0,0,0,0),s?e.clear(t.clearColor,t.clearDepth,t.clearStencil):e.clear(!0,!0,!1),this._transitionPass.material.uniforms.texture1=this._frameShotRenderTarget.texture,this._transitionPass.material.uniforms.texture2=n.texture,this._transitionPass.material.uniforms.type=this.type,this._transitionPass.material.uniforms.progress=this.progress,this._transitionPass.material.uniforms.strength=this.zoomFactor,s&&(this._transitionPass.material.transparent=t._tempClearColor[3]<1||!t.clearColor,this._transitionPass.renderStates.camera.rect.fromArray(t._tempViewport)),this._transitionPass.render(e),s&&(this._transitionPass.material.transparent=!1,this._transitionPass.renderStates.camera.rect.set(0,0,1,1));return}else this._frameShotRenderTarget&&(t._renderTargetCache.release(this._frameShotRenderTarget,0),this._frameShotRenderTarget=null);e.setRenderTarget(i),e.setClearColor(0,0,0,0),s?e.clear(t.clearColor,t.clearDepth,t.clearStencil):e.clear(!0,!0,!1),this._copyPass.material.uniforms.tDiffuse=n.texture,s&&(this._copyPass.material.transparent=t._tempClearColor[3]<1||!t.clearColor,this._copyPass.renderStates.camera.rect.fromArray(t._tempViewport)),this._copyPass.render(e),s&&(this._copyPass.material.transparent=!1,this._copyPass.renderStates.camera.rect.set(0,0,1,1))}dispose(){this._transitionPass.dispose(),this._copyPass.dispose(),this._frameShotRenderTarget&&this._frameShotRenderTarget.dispose()}}const eh={name:"ec_transition",defines:{},uniforms:{texture1:null,texture2:null,type:0,progress:0,zoomFactor:.3},vertexShader:X,fragmentShader:`
    uniform sampler2D texture1;
    uniform sampler2D texture2;
    uniform int type;
    uniform float progress;
    uniform float zoomFactor;

    varying vec2 v_Uv;

    float Linear_ease(in float begin, in float change, in float duration, in float time) {
        return change * time / duration + begin;
    }

    float Exponential_easeInOut(in float begin, in float change, in float duration, in float time) {
        if (time == 0.0) {
			return begin;
		} else if (time == duration) {
			return begin + change;
		}  
        time = time / (duration / 2.0);
        if (time < 1.0) {
			return change / 2.0 * pow(2.0, 10.0 * (time - 1.0)) + begin;
		} else {
			return change / 2.0 * (-pow(2.0, -10.0 * (time - 1.0)) + 2.0) + begin;
		}
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
        if (type == 0) {
            gl_FragColor = mix(color1, color2, progress);
        } else {
            vec2 center = vec2(Linear_ease(0.5, 0.0, 1.0, progress),0.5);
            float dissolve = Exponential_easeInOut(0.0, 1.0, 1.0, progress);
            float strength = Sinusoidal_easeInOut(0.0, zoomFactor, 0.5, progress);
            vec3 color = vec3(0.0);
            float total = 0.0;
            vec2 toCenter = center - v_Uv;
            float offset = random(vec3(12.9898, 78.233, 151.7182), 0.0) * 0.5;
            
            for (float t = 0.0; t <= 20.0; t++) {
                float percent = (t + offset) / 20.0;
                float weight = 1.0 * (percent - percent * percent);
                color += crossFade(v_Uv + toCenter * percent * strength, dissolve) * weight;
                total += weight;
            }

            gl_FragColor = vec4(color / total, 1.0);
        }
    }
	`};class Ff{constructor({maxLights:e=256,floatLights:t=!1,cells:n=[16,8,32],maxLightsPerCell:i=256,clipNear:s=-1,clipFar:r=-1}){this.lightsTexture=new nh(e,t?N.FLOAT:N.HALF_FLOAT),this.cellsTexture=new th,this.cellsTexture.initCells(n,i),this.clipNear=s,this.clipFar=r,this._cellsTextureEmpty=!1,this._cellsTransform={clips:[0,0],factors:[0,0,0,0]}}get cells(){return this.cellsTexture.cellsInfo.table}get maxLightsPerCell(){return this.cellsTexture.cellsInfo.maxLightsPerCell}get cellsDotData(){return this.cellsTexture.cellsInfo.dotData}get cellsTextureSize(){return this.cellsTexture.cellsInfo.textureSize}get cellsTransformFactors(){return this._cellsTransform.factors}dispose(){this._cellsTextureEmpty=!1,this.cellsTexture.dispose(),this.lightsTexture.dispose()}update(e,t,n=!0){this._updateCellsTransform(e),this.cellsTexture.resetLightIndices();const i=this.cellsTexture.cellsInfo.table,s=this._cellsTransform;let r=!1;for(let o=0;o<t.pointsNum;o++){const l=t.point[o];kt.center.fromArray(l.position),kt.center.applyMatrix4(e.viewMatrix),kt.center.z*=-1,kt.radius=l.distance,sh(kt,i,s,lr)&&(r=this.cellsTexture.setLightIndex(lr,o)||r,n&&this.lightsTexture.setPointLight(o,l))}r&&n&&this.lightsTexture.version++,(r||!this._cellsTextureEmpty)&&this.cellsTexture.version++,this._cellsTextureEmpty=!r}_updateCellsTransform(e){const{clips:t,factors:n}=this._cellsTransform,i=this.clipNear>0?this.clipNear:e.near,s=this.clipFar>0?this.clipFar:e.far;t[0]=i,t[1]=s;const r=this.cellsTexture.cellsInfo.table[2],o=Math.log(s/i);n[0]=r/o,n[1]=-r*Math.log(i)/o;const l=e.projectionMatrix.elements,c=1/l[0],u=1/l[5];n[2]=u,n[3]=c/u}}class th extends oe{constructor(){super(),this.format=M.RED,this.type=N.HALF_FLOAT,this.magFilter=C.NEAREST,this.minFilter=C.NEAREST,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.cellsInfo={table:[],maxLightsPerCell:0,textureSize:[],dotData:[]},this._counts=null}initCells(e,t){const n=e[0]*e[1]*e[2],i=n*t;let s=Math.ceil(Math.sqrt(i));s=Math.ceil(s/t)*t;const r=Math.ceil(i/s),o=new Uint16Array(s*r);this.image={data:o,width:s,height:r},this.cellsInfo.table[0]=e[0],this.cellsInfo.table[1]=e[1],this.cellsInfo.table[2]=e[2],this.cellsInfo.maxLightsPerCell=t,this.cellsInfo.textureSize[0]=s,this.cellsInfo.textureSize[1]=1/s,this.cellsInfo.textureSize[2]=1/r,this.cellsInfo.dotData[0]=t,this.cellsInfo.dotData[1]=e[0]*e[2]*t,this.cellsInfo.dotData[2]=e[0]*t,this._counts=new Int32Array(n)}updateCells(e,t){this.dispose(),this.initCells(e,t),this.version++}resetLightIndices(){this.image.data.fill(0),this._counts.fill(0)}setLightIndex(e,t){const n=this.image.data,i=this._counts,{table:s,maxLightsPerCell:r}=this.cellsInfo,{min:o,max:l}=e;let c=!1;for(let u=o.x;u<=l.x;u++)for(let h=o.z;h<=l.z;h++)for(let f=o.y;f<=l.y;f++){const d=u+s[0]*(h+f*s[2]),_=i[d];if(_<r){const p=d*r+_;n[p]=be(t+1),i[d]++,c=!0}}return c}}class nh extends oe{constructor(e=256,t=N.HALF_FLOAT){super();const n=Math.max(ih(e*Ti),Ti),i=t===N.FLOAT?Float32Array:Uint16Array,s=new i(n*n*4);this.image={data:s,width:n,height:n},this.format=M.RGBA,this.type=t,this.magFilter=C.NEAREST,this.minFilter=C.NEAREST,this.generateMipmaps=!1,this.flipY=!1}setPointLight(e,t){const n=this.image.data,i=this.type===N.HALF_FLOAT,s=e*Ti*4,{color:r,decay:o,position:l,distance:c}=t;n[s+0*4+0]=i?be(1):1,n[s+1*4+0]=i?be(r[0]):r[0],n[s+1*4+1]=i?be(r[1]):r[1],n[s+1*4+2]=i?be(r[2]):r[2],n[s+1*4+3]=i?be(o):o,n[s+2*4+0]=i?be(l[0]):l[0],n[s+2*4+1]=i?be(l[1]):l[1],n[s+2*4+2]=i?be(l[2]):l[2],n[s+2*4+3]=i?be(c):c}}const Ti=4,kt=new bt,lr=new ct;function ih(a){return Mr(Math.ceil(Math.sqrt(a)))}function sh(a,e,t,n){const{center:i,radius:s}=a,{clips:r,factors:o}=t;let l=i.z-s;const c=i.z+s;if(l>r[1]||c<r[0])return!1;l=Math.max(l,r[0]);const u=Math.floor(Math.log(l)*o[0]+o[1]),h=Math.min(Math.floor(Math.log(c)*o[0]+o[1]),e[2]-1),f=Math.abs(i.z)*o[2],d=1/(2*f),_=(i.y-s+f)*d,p=(i.y+s+f)*d;if(_>1||p<0)return!1;const m=Math.max(Math.floor(_*e[1]),0),g=Math.min(Math.floor(p*e[1]),e[1]-1),E=f*o[3],x=1/(2*E),v=(i.x-s+E)*x,A=(i.x+s+E)*x;if(v>1||A<0)return!1;const P=Math.max(Math.floor(v*e[0]),0),w=Math.min(Math.floor(A*e[0]),e[0]-1);return n.min.set(P,m,u),n.max.set(w,g,h),!0}const Zr=new Float32Array(1),rh=new Int32Array(Zr.buffer);function be(a){Zr[0]=a;const e=rh[0];let t=e>>16&32768,n=e>>12&2047;const i=e>>23&255;return i<103?t:i>142?(t|=31744,t|=(i===255?0:1)&&e&8388607,t):i<113?(n|=2048,t|=(n>>114-i)+(n>>113-i&1),t):(t|=i-112<<10|n>>1,t+=n&1,t)}class Df extends wt{constructor(e){super(e),this.type=N.HALF_FLOAT}load(e,t,n,i){const s=this,r=new mn(this.manager);r.setResponseType("arraybuffer"),r.setRequestHeader(this.requestHeader),r.setPath(this.path),r.setWithCredentials(this.withCredentials),r.load(e,function(o){t!==void 0&&t(s.parse(o))},n,i)}parse(e){const t=new Uint8Array(e);t.pos=0;const n=ch(t);if(Fi!==n){const i=n.width,s=n.height,r=uh(t.subarray(t.pos),i,s);if(Fi!==r){let o,l,c;if(this.type===N.FLOAT){c=r.length/4;const h=new Float32Array(c*4);for(let f=0;f<c;f++)hh(r,f*4,h,f*4);o=h,l=N.FLOAT}else if(this.type===N.HALF_FLOAT){c=r.length/4;const h=new Uint16Array(c*4);for(let f=0;f<c;f++)fh(r,f*4,h,f*4);o=h,l=N.HALF_FLOAT}else this.type===N.UNSIGNED_BYTE?(o=r,l=N.UNSIGNED_BYTE):console.error("RGBELoader: unsupported type: ",this.type);const u=l===N.FLOAT||l===N.HALF_FLOAT;return{width:i,height:s,data:o,header:n.string,gamma:n.gamma,exposure:n.exposure,format:M.RGBA,internalformat:null,type:l,generateMipmaps:u?!1:void 0,flipY:u?!0:void 0,minFilter:u?C.LINEAR:void 0,magFilter:u?C.LINEAR:void 0}}}}}const Fi=-1,Yi=1,ah=2,rt=3,Kr=4,Oe=function(a,e){switch(a){case Yi:console.error("RGBELoader Read Error: "+(e||""));break;case ah:console.error("RGBELoader Write Error: "+(e||""));break;case rt:console.error("RGBELoader Bad File Format: "+(e||""));break;case Kr:default:console.error("RGBELoader: Error: "+(e||""))}return Fi},oh=1,Ai=2,vi=4,lh=`
`,cr=function(a,e,t){e=e||1024;let i=a.pos,s=-1,r=0,o="",l=String.fromCharCode.apply(null,new Uint16Array(a.subarray(i,i+128)));for(;0>(s=l.indexOf(lh))&&r<e&&i<a.byteLength;)o+=l,r+=l.length,i+=128,l+=String.fromCharCode.apply(null,new Uint16Array(a.subarray(i,i+128)));return-1<s?(a.pos+=r+s+1,o+l.slice(0,s)):!1},ch=function(a){const e=/^#\?(\S+)$/,t=/^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,n=/^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,i=/^\s*FORMAT=(\S+)\s*$/,s=/^\s*-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,r={valid:0,string:"",comments:"",programtype:"RGBE",format:"",gamma:1,exposure:1,width:0,height:0};let o,l;if(a.pos>=a.byteLength||!(o=cr(a)))return Oe(Yi,"no header found");if(!(l=o.match(e)))return Oe(rt,"bad initial token");for(r.valid|=oh,r.programtype=l[1],r.string+=o+`
`;o=cr(a),o!==!1;){if(r.string+=o+`
`,o.charAt(0)==="#"){r.comments+=o+`
`;continue}if(l=o.match(t),l&&(r.gamma=parseFloat(l[1])),l=o.match(n),l&&(r.exposure=parseFloat(l[1])),l=o.match(i),l&&(r.valid|=Ai,r.format=l[1]),l=o.match(s),l&&(r.valid|=vi,r.height=parseInt(l[1],10),r.width=parseInt(l[2],10)),r.valid&Ai&&r.valid&vi)break}return r.valid&Ai?r.valid&vi?r:Oe(rt,"missing image size specifier"):Oe(rt,"missing format specifier")},uh=function(a,e,t){const n=e;if(n<8||n>32767||a[0]!==2||a[1]!==2||a[2]&128)return new Uint8Array(a);if(n!==(a[2]<<8|a[3]))return Oe(rt,"wrong scanline width");const i=new Uint8Array(4*e*t);if(!i.length)return Oe(Kr,"unable to allocate buffer space");let s=0,r=0;const o=4*n,l=new Uint8Array(4),c=new Uint8Array(o);let u=t;for(;u>0&&r<a.byteLength;){if(r+4>a.byteLength)return Oe(Yi);if(l[0]=a[r++],l[1]=a[r++],l[2]=a[r++],l[3]=a[r++],l[0]!=2||l[1]!=2||(l[2]<<8|l[3])!=n)return Oe(rt,"bad rgbe scanline format");let h=0,f;for(;h<o&&r<a.byteLength;){f=a[r++];const _=f>128;if(_&&(f-=128),f===0||h+f>o)return Oe(rt,"bad scanline data");if(_){const p=a[r++];for(let m=0;m<f;m++)c[h++]=p}else c.set(a.subarray(r,r+f),h),h+=f,r+=f}const d=n;for(let _=0;_<d;_++){let p=0;i[s]=c[_+p],p+=n,i[s+1]=c[_+p],p+=n,i[s+2]=c[_+p],p+=n,i[s+3]=c[_+p],s+=4}u--}return i},hh=function(a,e,t,n){const i=a[e+3],s=Math.pow(2,i-128)/255;t[n+0]=a[e+0]*s,t[n+1]=a[e+1]*s,t[n+2]=a[e+2]*s,t[n+3]=1},fh=function(a,e,t,n){const i=a[e+3],s=Math.pow(2,i-128)/255;t[n+0]=pn(Math.min(a[e+0]*s,65504)),t[n+1]=pn(Math.min(a[e+1]*s,65504)),t[n+2]=pn(Math.min(a[e+2]*s,65504)),t[n+3]=pn(1)},$r=new Float32Array(1),dh=new Int32Array($r.buffer);function pn(a){a>65504&&(console.warn("toHalfFloat(): value exceeds 65504."),a=65504),$r[0]=a;const e=dh[0];let t=e>>16&32768,n=e>>12&2047;const i=e>>23&255;return i<103?t:i>142?(t|=31744,t|=(i==255?0:1)&&e&8388607,t):i<113?(n|=2048,t|=(n>>114-i)+(n>>113-i&1),t):(t|=i-112<<10|n>>1,t+=n&1,t)}class _h{constructor(e){this.camera=new jt,this.targets=[new T(1,0,0),new T(-1,0,0),new T(0,1,0),new T(0,-1,0),new T(0,0,1),new T(0,0,-1)],this.ups=[new T(0,-1,0),new T(0,-1,0),new T(0,0,1),new T(0,0,-1),new T(0,-1,0),new T(0,-1,0)],this.camera.setPerspective(90/180*Math.PI,1,1,1e3),this.position=new T,this.lookTarget=new T,this.renderTarget=e||new Zt(512,512),this.renderTexture=this.renderTarget.texture,this.renderTexture.minFilter=C.LINEAR_MIPMAP_LINEAR,this.renderOption={ifRender:function(t){return!t.object.skipReflectionProbe}}}render(e,t){this.camera.position.copy(this.position);for(let n=0;n<6;n++){this.lookTarget.set(this.targets[n].x+this.camera.position.x,this.targets[n].y+this.camera.position.y,this.targets[n].z+this.camera.position.z),this.camera.lookAt(this.lookTarget,this.ups[n]),this.camera.updateMatrix(),this.renderTarget.activeCubeFace=n,e.setRenderTarget(this.renderTarget),e.clear(!0,!0,!0);const i=t.updateRenderStates(this.camera,!1),s=t.updateRenderQueue(this.camera,!1,!1);e.beginRender();let r;for(let o=0,l=s.layerList.length;o<l;o++)r=s.layerList[o],e.renderRenderableList(r.opaque,i,this.renderOption),e.renderRenderableList(r.transparent,i,this.renderOption);e.endRender(),e.updateRenderTargetMipmap(this.renderTarget)}}}class If{static prefilterEnvironmentMap(e,t,n={}){const i=e.capabilities,s=i.version>1;s?i.getExtension("EXT_color_buffer_float"):(i.getExtension("OES_texture_half_float"),i.getExtension("OES_texture_half_float_linear")),i.getExtension("OES_texture_float_linear"),i.getExtension("EXT_color_buffer_half_float");const r=n.legacy!==void 0?n.legacy:!s;let o;t.isTextureCube?o=t.images.length===0?16:t.images[0].width:o=t.image.width/4;const l=Math.floor(Math.log2(o));o=Math.pow(2,l);let c;n.outputTexture?c=n.outputTexture:c=new Sn,c.type=N.HALF_FLOAT,c.format=M.RGBA,c.generateMipmaps=!1;let u=o;for(let x=0;x<l+1;x++){c.mipmaps[x]=[];for(let v=0;v<6;v++)c.mipmaps[x].push({width:u,height:u,data:null});u=u/2}const h=new Zt(o,o);h.detach(y.DEPTH_STENCIL_ATTACHMENT),r?(h.texture.type=N.HALF_FLOAT,h.texture.format=M.RGBA,h.texture.generateMipmaps=!1):h.attach(c,y.COLOR_ATTACHMENT0);const f=mh(256,n.sampleSize||1024),d=new _h(h),_=new Ui;n.rotation&&(ur.setFromEuler(n.rotation),ur.toMatrix4(_.anchorMatrix));let p=1;t.isTextureCube&&t.images[0]&&t.images[0].rtt&&(p=-1),r||(p*=-1);const m=new io(1,1,1),g=new at(ph);g.side=se.BACK,g.cubeMap=t,g.uniforms.environmentMap=t,g.uniforms.envMapFlip=p,g.uniforms.normalDistribution=f,g.defines.PANORAMA=!t.isTextureCube;const E=new qe(m,g);E.frustumCulled=!1,_.add(E),_.add(d.camera),n.rotation&&_.updateRenderStates(d.camera);for(let x=0;x<l+1;x++)if(g.uniforms.roughness=Math.max(x-1,0)/l,r){d.render(e,_);for(let v=0;v<6;v++){const A=c.mipmaps[x][v];A.data=new Uint16Array(A.width*A.height*4),h.activeCubeFace=v,e.setRenderTarget(h),e.readRenderTargetPixels(0,0,A.width,A.height,A.data),x===0&&(c.images[v]=A)}h.resize(h.width/2,h.height/2)}else h.activeMipmapLevel=x,d.render(e,_),d.camera.rect.z/=2,d.camera.rect.w/=2;return r&&c.version++,!r&&h.detach(y.COLOR_ATTACHMENT0),h.dispose(),m.dispose(),g.dispose(),f.dispose(),c}}const ur=new je,ph={name:"pmrem",defines:{PANORAMA:!1,SAMPLE_NUMBER:1024},uniforms:{environmentMap:null,normalDistribution:null,roughness:.5,envMapFlip:1},vertexShader:`
		#include <common_vert>
		varying vec3 vDir;
		void main() {
			vDir = (u_Model * vec4(a_Position, 0.0)).xyz;
			gl_Position = u_ProjectionView * u_Model * vec4(a_Position, 1.0);
			gl_Position.z = gl_Position.w; // set z to camera.far
		}
	`,fragmentShader:`
		#include <common_frag>
		#ifdef PANORAMA
			uniform sampler2D environmentMap;
		#else
			uniform samplerCube environmentMap;
		#endif
		uniform sampler2D normalDistribution;
		uniform float roughness;
		uniform float envMapFlip;
		varying vec3 vDir;

		vec3 importanceSampleNormal(float i, float roughness, vec3 N) {
			vec3 H = texture2D(normalDistribution, vec2(roughness, i)).rgb;
		
			vec3 upVector = abs(N.y) > 0.999 ? vec3(1.0, 0.0, 0.0) : vec3(0.0, 1.0, 0.0);
			vec3 tangentX = normalize(cross(N, upVector));
			vec3 tangentZ = cross(N, tangentX);
			// Tangent to world space
			return normalize(tangentX * H.x + N * H.y + tangentZ * H.z);
		}

		void main() {
			vec3 V = normalize(vDir);

			vec3 N = V;

			vec3 prefilteredColor = vec3(0.0);
			float totalWeight = 0.0;
			float fMaxSampleNumber = float(SAMPLE_NUMBER);

			for (int i = 0; i < SAMPLE_NUMBER; i++) {
				vec3 H = importanceSampleNormal(float(i) / fMaxSampleNumber, roughness, N);
				vec3 L = reflect(-V, H);
		
				float NoL = clamp(dot(N, L), 0.0, 1.0);
				if (NoL > 0.0) {
					#ifdef PANORAMA
						float phi = acos(L.y);
						float theta = envMapFlip * atan(L.x, L.z) + PI * 0.5;
						vec2 uv = vec2(theta / 2.0 / PI, -phi / PI);
						prefilteredColor += mapTexelToLinear(texture2D(environmentMap, fract(uv))).rgb * NoL;
					#else
						prefilteredColor += mapTexelToLinear(textureCube(environmentMap, vec3(envMapFlip * L.x, L.yz))).rgb * NoL;
					#endif
					totalWeight += NoL;
				}
			}

			gl_FragColor = vec4(prefilteredColor / totalWeight, 1.0);
			#include <encodings_frag>
		}
	`};function mh(a=256,e=1024){const t=new oe,n=new Float32Array(e*a*4);t.image={width:a,height:e,data:n},t.type=N.FLOAT,t.minFilter=C.NEAREST,t.magFilter=C.NEAREST,t.generateMipmaps=!1,t.version++;const i=[];for(let s=0;s<a;s++){const r=s/a,o=r*r;for(let l=0;l<e;l++){let c=(l<<16|l>>>16)>>>0;c=((c&1431655765)<<1|(c&2863311530)>>>1)>>>0,c=((c&858993459)<<2|(c&3435973836)>>>2)>>>0,c=((c&252645135)<<4|(c&4042322160)>>>4)>>>0,c=(((c&16711935)<<8|(c&4278255360)>>>8)>>>0)/4294967296;const u=Math.sqrt((1-c)/(1+(o*o-1)*c));i[l]=u}for(let l=0;l<e;l++){const c=(l*a+s)*4,u=i[l],h=Math.sqrt(1-u*u),f=l/e,d=2*Math.PI*f;n[c]=h*Math.cos(d),n[c+1]=u,n[c+2]=h*Math.sin(d),n[c+3]=1}}return t}class Ft{constructor(){this.arcLengthDivisions=200,this.cacheArcLengths=null,this.needsUpdate=!0}getPoint(){return console.warn("t3d.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),s=0;t.push(0);for(let r=1;r<=e;r++)n=this.getPoint(r/e),s+=n.distanceTo(i),t.push(s),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let i=0;const s=n.length;let r;t?r=t:r=e*n[s-1];let o=0,l=s-1,c;for(;o<=l;)if(i=Math.floor(o+(l-o)/2),c=n[i]-r,c<0)o=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===r)return i/(s-1);const u=n[i],f=n[i+1]-u,d=(r-u)/f;return(i+d)/(s-1)}}class gh extends Ft{constructor(e=new G,t=new G){super(),this.v1=e,this.v2=t}getPoint(e,t=new G){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}}gh.prototype.isLineCurve2=!0;class Di extends Ft{constructor(e=new T,t=new T){super(),this.v1=e,this.v2=t}getPoint(e,t=new T){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}}Di.prototype.isLineCurve3=!0;class Ne{static hilbert2D(e=new T(0,0,0),t=10,n=1,i=0,s=1,r=2,o=3){const l=t/2,c=[new T(e.x-l,e.y,e.z-l),new T(e.x-l,e.y,e.z+l),new T(e.x+l,e.y,e.z+l),new T(e.x+l,e.y,e.z-l)],u=[c[i],c[s],c[r],c[o]];if(0<=--n){const h=[];return Array.prototype.push.apply(h,this.hilbert2D(u[0],l,n,i,o,r,s)),Array.prototype.push.apply(h,this.hilbert2D(u[1],l,n,i,s,r,o)),Array.prototype.push.apply(h,this.hilbert2D(u[2],l,n,i,s,r,o)),Array.prototype.push.apply(h,this.hilbert2D(u[3],l,n,r,s,i,o)),h}return u}static hilbert3D(e=new T(0,0,0),t=10,n=1,i=0,s=1,r=2,o=3,l=4,c=5,u=6,h=7){const f=t/2,d=[new T(e.x-f,e.y+f,e.z-f),new T(e.x-f,e.y+f,e.z+f),new T(e.x-f,e.y-f,e.z+f),new T(e.x-f,e.y-f,e.z-f),new T(e.x+f,e.y-f,e.z-f),new T(e.x+f,e.y-f,e.z+f),new T(e.x+f,e.y+f,e.z+f),new T(e.x+f,e.y+f,e.z-f)],_=[d[i],d[s],d[r],d[o],d[l],d[c],d[u],d[h]];if(--n>=0){const p=[];return Array.prototype.push.apply(p,this.hilbert3D(_[0],f,n,i,o,l,h,u,c,r,s)),Array.prototype.push.apply(p,this.hilbert3D(_[1],f,n,i,h,u,s,r,c,l,o)),Array.prototype.push.apply(p,this.hilbert3D(_[2],f,n,i,h,u,s,r,c,l,o)),Array.prototype.push.apply(p,this.hilbert3D(_[3],f,n,r,o,i,s,u,h,l,c)),Array.prototype.push.apply(p,this.hilbert3D(_[4],f,n,r,o,i,s,u,h,l,c)),Array.prototype.push.apply(p,this.hilbert3D(_[5],f,n,l,o,r,c,u,s,i,h)),Array.prototype.push.apply(p,this.hilbert3D(_[6],f,n,l,o,r,c,u,s,i,h)),Array.prototype.push.apply(p,this.hilbert3D(_[7],f,n,u,c,r,s,i,o,l,h)),p}return _}static quadraticBezier(e,t,n,i){return xh(e,t)+Th(e,n)+Ah(e,i)}static cubicBezier(e,t,n,i,s){return vh(e,t)+Eh(e,n)+Sh(e,i)+yh(e,s)}}function xh(a,e){const t=1-a;return t*t*e}function Th(a,e){return 2*(1-a)*a*e}function Ah(a,e){return a*a*e}function vh(a,e){const t=1-a;return t*t*t*e}function Eh(a,e){const t=1-a;return 3*t*t*a*e}function Sh(a,e){return 3*(1-a)*a*a*e}function yh(a,e){return a*a*a*e}class Mh extends Ft{constructor(e=new G,t=new G,n=new G){super(),this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new G){const n=t,i=this.v0,s=this.v1,r=this.v2;return n.set(Ne.quadraticBezier(e,i.x,s.x,r.x),Ne.quadraticBezier(e,i.y,s.y,r.y)),n}}Mh.prototype.isQuadraticBezierCurve2=!0;class Jr extends Ft{constructor(e=new T,t=new T,n=new T){super(),this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new T){const n=t,i=this.v0,s=this.v1,r=this.v2;return n.set(Ne.quadraticBezier(e,i.x,s.x,r.x),Ne.quadraticBezier(e,i.y,s.y,r.y),Ne.quadraticBezier(e,i.z,s.z,r.z)),n}}Jr.prototype.isQuadraticBezierCurve3=!0;class Ph extends Ft{constructor(e=new G,t=new G,n=new G,i=new G){super(),this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new G){const n=t,i=this.v0,s=this.v1,r=this.v2,o=this.v3;return n.set(Ne.cubicBezier(e,i.x,s.x,r.x,o.x),Ne.cubicBezier(e,i.y,s.y,r.y,o.y)),n}}Ph.prototype.isCubicBezierCurve2=!0;class Ch extends Ft{constructor(e=new T,t=new T,n=new T,i=new T){super(),this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new T){const n=t,i=this.v0,s=this.v1,r=this.v2,o=this.v3;return n.set(Ne.cubicBezier(e,i.x,s.x,r.x,o.x),Ne.cubicBezier(e,i.y,s.y,r.y,o.y),Ne.cubicBezier(e,i.z,s.z,r.z,o.z)),n}}Ch.prototype.isCubicBezierCurve3=!0;const Lh=new T,wh=new T,hr=new U;class Uf{constructor(){this.curves=[]}setFromPoints(e,t={}){const n=t.bevelRadius||0,i=t.close||!1;let s=e.length;if(s<2){console.warn("CurvePath3.setFromPoints: points length less than 2.");return}i&&!e[0].equals(e[s-1])&&(e.push(new T().copy(e[0])),s++);const r=new T().copy(e[0]);for(let o=1;o<s;o++){const l=e[o],c=o===s-1,u=c&&!i;if(n>0&&!u){const h=c?e[1]:e[o+1],f=Lh.subVectors(l,r),d=wh.subVectors(h,l),_=f.getLength(),p=d.getLength(),m=Math.min((o===1?_/2:_)*.999999,n),g=Math.min(p/2*.999999,n);f.normalize(),d.normalize();const E=new Di;E.v1.copy(r),E.v2.copy(l).sub(f.multiplyScalar(m)),this.curves.push(E);const x=new Jr;x.v0.copy(E.v2),x.v1.copy(l),x.v2.copy(l).add(d.multiplyScalar(g)),this.curves.push(x),r.copy(x.v2)}else{const h=new Di;h.v1.copy(r),h.v2.copy(l),this.curves.push(h),r.copy(l)}}i&&this.curves[0].v1.copy(r)}getPoints(e=12){const t=[];for(let n=0,i=this.curves;n<i.length;n++){const s=i[n],r=s.isLineCurve2||s.isLineCurve3?1:e,o=s.getPoints(r),l=n===i.length-1;for(let c=0,u=l?o.length:o.length-1;c<u;c++){const h=o[c];t.push(h)}}return t}computeFrames(e={}){const t=e.up,n=e.divisions!==void 0?e.divisions:12,i=e.frenet!==void 0?e.frenet:!0,s=e.fixLine!==void 0?e.fixLine:!0,r=e.close!==void 0?e.close:!1,o=[],l=[],c=[],u=[],h=[],f=[],d=[],_=[];let p=0;for(let L=0,b=this.curves;L<b.length;L++){const O=b[L],I=O.isLineCurve2||O.isLineCurve3,R=I?1:n,D=O.getPoints(R),Q=L===b.length-1;if(s&&I&&!Q){const H=b[L+1];H.isLineCurve2||H.isLineCurve3||(p=1)}for(let H=0,K=Q?D.length:D.length-1;H<K;H++){const ee=D[H];o.push(ee),_.push(p),p===1?p++:p===2&&(p=0)}}if(l[0]=new T,c[0]=new T,u[0]=new T,l[0].subVectors(o[1],o[0]).normalize(),t)c[0].copy(t);else{let L=Number.MAX_VALUE;const b=Math.abs(l[0].x),O=Math.abs(l[0].y),I=Math.abs(l[0].z);b<L&&(L=b,c[0].set(1,0,0)),O<L&&(L=O,c[0].set(0,1,0)),I<L&&c[0].set(0,0,1)}u[0].crossVectors(l[0],c[0]).normalize(),c[0].crossVectors(u[0],l[0]).normalize(),h[0]=0,f[0]=1,d[0]=!1;const m=new T,g=new T;for(let L=1;L<o.length-1;L++){const b=new T,O=new T,I=new T;m.subVectors(o[L],o[L-1]),g.subVectors(o[L+1],o[L]);const R=m.getLength();m.normalize(),g.normalize();const D=_[L];if(D===1?b.copy(g):D===2?b.copy(m):b.addVectors(m,g).normalize(),i){O.copy(c[L-1]);const H=I.crossVectors(l[L-1],b);if(H.getLength()>Number.EPSILON){H.normalize();const K=Math.acos(Math.min(Math.max(l[L-1].dot(b),-1),1));O.applyMatrix4(hr.makeRotationAxis(H,K))}I.crossVectors(b,O).normalize()}else O.copy(c[L-1]),b.dot(O)===1?I.crossVectors(g,O).normalize():I.crossVectors(b,O).normalize(),O.crossVectors(I,b).normalize();l[L]=b,c[L]=O,u[L]=I;const Q=m.dot(g);h[L]=h[L-1]+R,f[L]=Math.min(1/Math.sqrt((1+Q)/2),1.415)||1,d[L]=Math.abs(Q-1)>.05}const E=o.length-1,x=new T,v=new T,A=new T;x.subVectors(o[E],o[E-1]);const P=x.getLength();r?x.copy(l[0]):x.normalize(),v.copy(c[E-1]);const w=A.crossVectors(l[E-1],x);if(w.getLength()>Number.EPSILON){w.normalize();const L=Math.acos(Math.min(Math.max(l[E-1].dot(x),-1),1));v.applyMatrix4(hr.makeRotationAxis(w,L))}return A.crossVectors(x,v).normalize(),l[E]=x,c[E]=v,u[E]=A,h[E]=h[E-1]+P,f[E]=1,d[E]=!1,r&&(l[0].copy(x),c[0].copy(v),u[0].copy(A)),{points:o,tangents:l,normals:c,binormals:u,lengths:h,widthScales:f,sharps:d,tangentTypes:_}}}const Ei=new WeakMap,ea="srgb",bh="srgb-linear";class me extends wt{constructor(e){super(e),this.decoderPath="",this.decoderConfig={},this.decoderBinary=null,this.decoderPending=null,this.workerLimit=4,this.workerPool=[],this.workerNextTaskID=1,this.workerSourceURL="",this.defaultAttributeIDs={a_Position:"POSITION",a_Normal:"NORMAL",a_Color:"COLOR",a_Uv:"TEX_COORD"},this.defaultAttributeTypes={a_Position:"Float32Array",a_Normal:"Float32Array",a_Color:"Float32Array",a_Uv:"Float32Array"}}setDecoderPath(e){return this.decoderPath=e,this}setDecoderConfig(e){return this.decoderConfig=e,this}setWorkerLimit(e){return this.workerLimit=e,this}load(e,t,n,i){const s=new mn(this.manager);s.setPath(this.path),s.setResponseType("arraybuffer"),s.setRequestHeader(this.requestHeader),s.setWithCredentials(this.withCredentials),s.load(e,r=>{this.parse(r,t,i)},n,i)}parse(e,t,n){this.decodeDracoFile(e,t,null,null,ea).catch(n)}decodeDracoFile(e,t,n,i,s=bh){const r={attributeIDs:n||this.defaultAttributeIDs,attributeTypes:i||this.defaultAttributeTypes,useUniqueIDs:!!n,vertexColorSpace:s};return this.decodeGeometry(e,r).then(t)}decodeGeometry(e,t){const n=JSON.stringify(t);if(Ei.has(e)){const l=Ei.get(e);if(l.key===n)return l.promise;if(e.byteLength===0)throw new Error("DRACOLoader: Unable to re-decode a buffer with different settings. Buffer has already been transferred.")}let i;const s=this.workerNextTaskID++,r=e.byteLength,o=this._getWorker(s,r).then(l=>(i=l,new Promise((c,u)=>{i._callbacks[s]={resolve:c,reject:u},i.postMessage({type:"decode",id:s,taskConfig:t,buffer:e},[e])}))).then(l=>this._createGeometry(l.geometry));return o.catch(()=>!0).then(()=>{i&&s&&this._releaseTask(i,s)}),Ei.set(e,{key:n,promise:o}),o}_createGeometry(e){const t=new Be;e.index&&t.setIndex(new j(new ie(e.index.array,1)));for(let n=0;n<e.attributes.length;n++){const i=e.attributes[n],s=i.name,r=i.array,o=i.itemSize,l=new j(new ie(r,o));s==="a_color"&&Uh(l,i.vertexColorSpace),t.addAttribute(s,l)}return t}_loadLibrary(e,t){const n=new mn(this.manager);return n.setPath(this.decoderPath||me.decoderPath),n.setResponseType(t),n.setWithCredentials(this.withCredentials),new Promise((i,s)=>{n.load(e,i,void 0,s)})}preload(){return this._initDecoder(),this}_initDecoder(){if(this.decoderPending)return this.decoderPending;const e=this.decoderConfig||me.decoderConfig,t=typeof WebAssembly!="object"||e.type==="js",n=[];return t?n.push(this._loadLibrary("draco_decoder.js","text")):(n.push(this._loadLibrary("draco_wasm_wrapper.js","text")),n.push(this._loadLibrary("draco_decoder.wasm","arraybuffer"))),this.decoderPending=Promise.all(n).then(i=>{const s=i[0];t||(e.wasmBinary=i[1]);const r=Oh.toString(),o=["/* draco decoder */",s,"","/* worker */",r.substring(r.indexOf("{")+1,r.lastIndexOf("}"))].join(`
`);this.workerSourceURL=URL.createObjectURL(new Blob([o]))}),this.decoderPending}_getWorker(e,t){return this._initDecoder().then(()=>{if(this.workerPool.length<this.workerLimit){const i=new Worker(this.workerSourceURL);i._callbacks={},i._taskCosts={},i._taskLoad=0,i.postMessage({type:"init",decoderConfig:this.decoderConfig||me.decoderConfig}),i.onmessage=function(s){const r=s.data;switch(r.type){case"decode":i._callbacks[r.id].resolve(r);break;case"error":i._callbacks[r.id].reject(r);break;default:console.error('DRACOLoader: Unexpected message, "'+r.type+'"')}},this.workerPool.push(i)}else this.workerPool.sort(function(i,s){return i._taskLoad>s._taskLoad?-1:1});const n=this.workerPool[this.workerPool.length-1];return n._taskCosts[e]=t,n._taskLoad+=t,n})}_releaseTask(e,t){e._taskLoad-=e._taskCosts[t],delete e._callbacks[t],delete e._taskCosts[t]}debug(){console.log("Task load: ",this.workerPool.map(e=>e._taskLoad))}dispose(){for(let e=0;e<this.workerPool.length;++e)this.workerPool[e].terminate();return this.workerPool.length=0,this.workerSourceURL!==""&&URL.revokeObjectURL(this.workerSourceURL),this}}me.decoderPath="./";me.decoderConfig={};me.setDecoderPath=function(a){console.warn("DRACOLoader.setDecoderPath has been deprecated, use new DRACOLoader().setDecoderPath instead."),me.decoderPath=a};me.setDecoderConfig=function(a){console.warn("DRACOLoader.setDecoderConfig has been deprecated, use new DRACOLoader().setDecoderConfig instead.");const e=me.decoderConfig.wasmBinary;me.decoderConfig=a||{},e&&(me.decoderConfig.wasmBinary=e)};me.releaseDecoderModule=function(){console.warn("DRACOLoader.releaseDecoderModule has been removed.")};function ji(a,e){switch(e.constructor){case Float32Array:return a;case Uint16Array:return a/65535;case Uint8Array:return a/255;case Int16Array:return Math.max(a/32767,-1);case Int8Array:return Math.max(a/127,-1);default:throw new Error("Invalid component type.")}}function Si(a,e){switch(e.constructor){case Float32Array:return a;case Uint16Array:return Math.round(a*65535);case Uint8Array:return Math.round(a*255);case Int16Array:return Math.round(a*32767);case Int8Array:return Math.round(a*127);default:throw new Error("Invalid component type.")}}function Rh(a,e){let t=a.buffer.array[e*a.size];return a.normalized&&(t=ji(t,a.buffer.array)),t}function Nh(a,e){let t=a.buffer.array[e*a.size+1];return a.normalized&&(t=ji(t,a.buffer.array)),t}function Fh(a,e){let t=a.buffer.array[e*a.size+2];return a.normalized&&(t=ji(t,a.buffer.array)),t}function Dh(a,e,t,n,i){return e*=a.size,a.normalized&&(t=Si(t,a.buffer.array),n=Si(n,a.buffer.array),i=Si(i,a.buffer.array)),a.buffer.array[e+0]=t,a.buffer.array[e+1]=n,a.buffer.array[e+2]=i,a}function Ih(a,e,t){const n=Rh(e,t),i=Nh(e,t),s=Fh(e,t);return a.setRGB(n,i,s),a}function Uh(a,e){if(e!==ea)return;const t=new ge;for(let n=0,i=a.buffer.count;n<i;n++)Ih(t,a,n),t.convertSRGBToLinear(),Dh(a,n,t.r,t.g,t.b)}function Oh(){let a,e;onmessage=function(r){const o=r.data;switch(o.type){case"init":{a=o.decoderConfig,e=new Promise(function(l){a.onModuleLoaded=function(c){l({draco:c})},DracoDecoderModule(a)});break}case"decode":{const l=o.buffer,c=o.taskConfig;e.then(u=>{const h=u.draco,f=new h.Decoder;try{const d=t(h,f,new Int8Array(l),c),_=d.attributes.map(p=>p.array.buffer);d.index&&_.push(d.index.array.buffer),self.postMessage({type:"decode",id:o.id,geometry:d},_)}catch(d){console.error(d),self.postMessage({type:"error",id:o.id,error:d.message})}finally{h.destroy(f)}});break}}};function t(r,o,l,c){const u=c.attributeIDs,h=c.attributeTypes;let f,d;const _=o.GetEncodedGeometryType(l);if(_===r.TRIANGULAR_MESH)f=new r.Mesh,d=o.DecodeArrayToMesh(l,l.byteLength,f);else if(_===r.POINT_CLOUD)f=new r.PointCloud,d=o.DecodeArrayToPointCloud(l,l.byteLength,f);else throw new Error("DRACOLoader: Unexpected geometry type.");if(!d.ok()||f.ptr===0)throw new Error("DRACOLoader: Decoding failed: "+d.error_msg());const p={index:null,attributes:[]};for(const m in u){const g=self[h[m]]||Float32Array;let E,x;if(c.useUniqueIDs)x=u[m],E=o.GetAttributeByUniqueId(f,x);else{if(x=o.GetAttributeId(f,r[u[m]]),x===-1)continue;E=o.GetAttribute(f,x)}const v=i(r,o,f,m,g,E);m==="a_color"&&(v.vertexColorSpace=c.vertexColorSpace),p.attributes.push(v)}return _===r.TRIANGULAR_MESH&&(p.index=n(r,o,f)),r.destroy(f),p}function n(r,o,l){const u=l.num_faces()*3,h=u*4,f=r._malloc(h);o.GetTrianglesUInt32Array(l,h,f);const d=new Uint32Array(r.HEAPF32.buffer,f,u).slice();return r._free(f),{array:d,itemSize:1}}function i(r,o,l,c,u,h){const f=h.num_components(),_=l.num_points()*f,p=_*u.BYTES_PER_ELEMENT,m=s(r,u),g=r._malloc(p);o.GetAttributeDataArrayForAllPoints(l,h,m,p,g);const E=new u(r.HEAPF32.buffer,g,_).slice();return r._free(g),{name:c,array:E,itemSize:f}}function s(r,o){switch(o){case Float32Array:return r.DT_FLOAT32;case Int8Array:return r.DT_INT8;case Int16Array:return r.DT_INT16;case Int32Array:return r.DT_INT32;case Uint8Array:return r.DT_UINT8;case Uint16Array:return r.DT_UINT16;case Uint32Array:return r.DT_UINT32}}}class Bh extends wt{constructor(e){super(e),typeof createImageBitmap>"u"&&console.warn("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,r={};r.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",r.headers=this.requestHeader,fetch(e,r).then(function(o){return o.blob()}).then(function(o){return createImageBitmap(o,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(o){t&&t(o),s.manager.itemEnd(e)}).catch(function(o){i&&i(o),s.manager.itemError(e),s.manager.itemEnd(e)}),s.manager.itemStart(e)}}const zh="\\[\\]\\.:\\/",Gh=new RegExp("["+zh+"]","g");class he{constructor(){}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Gh,"")}static extractUrlBase(e){const t=e.split("/");return t.pop(),(t.length<1?".":t.join("/"))+"/"}static resolveURL(e,t){return typeof e!="string"||e===""?"":/^(https?:)?\/\//i.test(e)||/^data:/i.test(e)||/^blob:/i.test(e)?e:t+e}static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static parseGLB(e){const s={JSON:1313821514,BIN:5130562},r=new DataView(e),o={magic:r.getUint32(0,!0),version:r.getUint32(4,!0),length:r.getUint32(2*4,!0)};if(o.magic!==1179937895)return console.error("Invalid glb magic number. Expected 0x46546C67, found 0x"+o.magic.toString(16)),null;o.version<2&&console.error("GLTFLoader: Legacy binary file detected.");let l=r.getUint32(12,!0),c=r.getUint32(16,!0);if(c!==s.JSON)return console.error("Invalid glb chunk type. Expected 0x4E4F534A, found 0x"+c.toString(16)),null;const u=new Uint8Array(e,12+2*4,l),h=JSON.parse(he.decodeText(u)),f=[];let d=12+2*4+l;for(;d<o.length;){if(l=r.getUint32(d,!0),c=r.getUint32(d+4,!0),c!==s.BIN)return console.error("Invalid glb chunk type. Expected 0x004E4942, found 0x"+c.toString(16)),null;const _=d+2*4,p=e.slice(_,_+l);f.push(p),d+=l+2*4}return{gltf:h,buffers:f}}static getNormalizedComponentScale(e){if(e===Int8Array)return 1/127;if(e===Uint8Array)return 1/255;if(e===Int16Array)return 1/32767;if(e===Uint16Array)return 1/65535;throw new Error("Unsupported normalized accessor component type.")}}class kh{static parse(e,t){const{url:n}=e;return t.loadFile(n,"arraybuffer").then(i=>{if(he.decodeText(new Uint8Array(i,0,4))==="glTF"){const r=he.parseGLB(i);e.gltf=r.gltf,e.buffers=r.buffers}else{const r=he.decodeText(new Uint8Array(i));e.gltf=JSON.parse(r)}})}}class Hh{static parse(e,t){const{gltf:n,path:i}=e,{nodes:s=[],skins:r=[],meshes:o=[],buffers:l,images:c}=n;if(r.forEach(u=>{const{joints:h=[]}=u;h.forEach(f=>{s[f].isBone=!0})}),s.forEach(u=>{u.mesh!==void 0&&u.skin!==void 0&&(o[u.mesh].isSkinned=!0)}),t.detailLoadProgress){const u=new Set;l&&l.forEach(h=>{if(!h.uri)return;const f=he.resolveURL(h.uri,i);u.add(f)}),c&&c.forEach((h,f)=>{const{uri:d,bufferView:_}=h;let p=d;_!==void 0&&(p="blob<"+f+">"),p=he.resolveURL(p,i),u.add(p)}),u.forEach(h=>t.manager.itemStart(h)),e.loadItems=u}}}class Xh{static parse(e){const{gltf:{asset:{version:t}}}=e,n=Number(t);if(!(n>=2&&n<3))throw"Only support gltf 2.x."}}class Vh{static parse(e,t){const{gltf:n,loadItems:i}=e;return e.buffers!==null?null:Promise.all(n.buffers.map(s=>{const r=he.resolveURL(s.uri,e.path);t.detailLoadProgress&&i.delete(r);const o=t.loadFile(r,"arraybuffer").then(l=>(t.detailLoadProgress&&t.manager.itemEnd(r),l));return t.detailLoadProgress&&o.catch(()=>t.manager.itemEnd(r)),o})).then(s=>{e.buffers=s})}}class Wh{static loadBufferView(e,t,n){const i=t[e.buffer];if(!n||!n.supported)throw new Error("GLTFLoader: setMeshoptDecoder must be called before loading compressed files.");const s=e.byteOffset||0,r=e.byteLength||0,o=e.count,l=e.byteStride,c=new Uint8Array(i,s,r);return n.decodeGltfBufferAsync?n.decodeGltfBufferAsync(o,l,c,e.mode,e.filter).then(u=>u.buffer):n.ready.then(()=>{const u=new ArrayBuffer(o*l);return n.decodeGltfBuffer(new Uint8Array(u),o,l,c,e.mode,e.filter),u})}}class Qh{static parse(e,t){const{buffers:n,gltf:i}=e;if(i.bufferViews)return Promise.all(i.bufferViews.map(s=>{const{buffer:r,byteOffset:o=0,byteLength:l=0}=s;if(s.extensions){const{EXT_meshopt_compression:u}=s.extensions;if(u)return Wh.loadBufferView(u,n,t.getMeshoptDecoder())}return n[r].slice(o,o+l)})).then(s=>{e.bufferViews=s})}}class Yh{static loadTextureData(e,t){return new Promise((n,i)=>{t.load(e,n,void 0,i)})}}class jh{static parse(e,t){const{gltf:n,bufferViews:i,path:s,loadItems:r}=e;if(n.images)return Promise.all(n.images.map((o,l)=>{const{uri:c,bufferView:u,mimeType:h,name:f}=o;let d=!1,_=c||"";if(u!==void 0){const g=i[u],E=new Blob([g],{type:h});_=URL.createObjectURL(E),d=!0}const p=he.resolveURL(_,s);t.detailLoadProgress&&r.delete(p);let m;if(h&&h.includes("ktx2"))m=Yh.loadTextureData(p,t.getKTX2Loader()).then(g=>(t.detailLoadProgress&&(d?t.manager.itemEnd(he.resolveURL("blob<"+l+">",s)):t.manager.itemEnd(p)),g));else{const g={loader:t,imageUrl:p,imageName:f,isObjectURL:d,sourceUrl:_,index:l,path:s};if(h&&(h.includes("avif")||h.includes("webp")))m=qh(h).then(E=>{if(E)return fr(g);throw new Error("GLTFLoader: WebP or AVIF required by asset but unsupported.")});else return fr(g)}return t.detailLoadProgress&&m.catch(()=>t.manager.itemEnd(p)),m})).then(o=>{e.images=o})}}function qh(a){return new Promise(t=>{const n=new Image;a.includes("avif")?n.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=":n.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",n.onload=()=>{t(n.height===1)}})}function fr(a){const{loader:e,imageUrl:t,imageName:n,isObjectURL:i,sourceUrl:s,index:r,path:o}=a;return e.loadImage(t).then(c=>(c.__name=n,i===!0&&URL.revokeObjectURL(s),e.detailLoadProgress&&(i?e.manager.itemEnd(he.resolveURL("blob<"+r+">",o)):e.manager.itemEnd(t)),c))}const le={POSITION:"a_Position",NORMAL:"a_Normal",TANGENT:"a_Tangent",TEXCOORD_0:"a_Uv",TEXCOORD_1:"a_Uv2",TEXCOORD_2:"a_Uv3",TEXCOORD_3:"a_Uv4",TEXCOORD_4:"a_Uv5",TEXCOORD_5:"a_Uv6",TEXCOORD_6:"a_Uv7",TEXCOORD_7:"a_Uv8",COLOR_0:"a_Color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex",TEXCOORD0:"a_Uv",TEXCOORD:"a_Uv",COLOR0:"a_Color",COLOR:"a_Color",WEIGHT:"skinWeight",JOINT:"skinIndex"},dr={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"},Qe={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},_r={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Tn={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},pr={9728:C.NEAREST,9729:C.LINEAR,9984:C.NEAREST_MIPMAP_NEAREST,9985:C.LINEAR_MIPMAP_NEAREST,9986:C.NEAREST_MIPMAP_LINEAR,9987:C.LINEAR_MIPMAP_LINEAR},mr={33071:q.CLAMP_TO_EDGE,33648:q.MIRRORED_REPEAT,10497:q.REPEAT},Ye={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6};class Zh{static parse(e){const{gltf:t,images:n}=e;if(t.textures)return Promise.all(t.textures.map((i,s)=>{const{sampler:r,source:o=0,name:l}=i,c=new oe;if(i.extensions){const{KHR_texture_basisu:h}=i.extensions;if(h){const f=n[h.source],{image:d,mipmaps:_,type:p,format:m,minFilter:g,magFilter:E,generateMipmaps:x,encoding:v,premultiplyAlpha:A}=f;c.image=d,c.mipmaps=_,c.type=p,c.format=m,c.minFilter=g,c.magFilter=E,c.generateMipmaps=x,c.encoding=v,c.premultiplyAlpha=A}else if(Object.values(i.extensions).length&&Object.values(i.extensions)[0].hasOwnProperty("source"))c.image=n[Object.values(i.extensions)[0].source];else return console.error("GLTFLoader: Couldn't load texture"),null}else c.image=n[o];c.version++,c.name=l||c.image.__name||`texture_${s}`,c.flipY=!1;const u=t.samplers||{};return Kh(c,u[r]),c})).then(i=>{e.textures=i})}}function Kh(a,e={}){const{magFilter:t,minFilter:n,wrapS:i,wrapT:s}=e;a.magFilter=pr[t]||C.LINEAR,a.minFilter=pr[n]||C.LINEAR_MIPMAP_LINEAR,a.wrapS=mr[i]||q.REPEAT,a.wrapT=mr[s]||q.REPEAT}class $h{static getMaterial(){return new br}}class ta{static transform(e,t){let n=0,i=0,s=1,r=1,o=0;t.offset!==void 0&&(n=t.offset[0],i=t.offset[1]),t.rotation!==void 0&&(o=t.rotation),t.scale!==void 0&&(s=t.scale[0],r=t.scale[1]),e.setUvTransform(n,i,s,r,o,0,0),t.texCoord!==void 0&&console.warn("Custom UV sets in KHR_texture_transform extension not yet supported.")}}class gr{static getMaterial(){return new ro}static parseParams(e,t,n){const{diffuseFactor:i,diffuseTexture:s,specularFactor:r,glossinessFactor:o,specularGlossinessTexture:l}=t;Array.isArray(i)&&(e.diffuse.fromArray(i),e.opacity=i[3]||1),s&&(e.diffuseMap=n[s.index],e.diffuseMapCoord=s.texCoord||0,e.diffuseMap&&(e.diffuseMap.encoding=ve.SRGB),Jh(e,"diffuseMap",s.extensions)),e.glossiness=o!==void 0?o:1,Array.isArray(r)&&e.specular.fromArray(r),l&&(e.glossinessMap=n[l.index],e.specularMap=n[l.index])}}function Jh(a,e,t={}){const n=t.KHR_texture_transform;n&&(a[e]=ta.transform(a[e+"Transform"],n))}class xr{static getMaterial(){return new Oi}static parseParams(e,t,n){const{clearcoatFactor:i,clearcoatTexture:s,clearcoatRoughnessFactor:r,clearcoatRoughnessTexture:o,clearcoatNormalTexture:l}=t;if(i&&(e.clearcoat=i),s&&(e.clearcoatMap=n[s.index]),r&&(e.clearcoatRoughness=r),o&&(e.clearcoatRoughnessMap=n[o.index]),l&&(e.clearcoatNormalMap=n[l.index],l.scale)){const c=l.scale;e.clearcoatNormalScale=new G(c,c)}}}class ef{static parse(e){const{gltf:t,textures:n}=e;if(!t.materials)return;const i=[];for(let s=0;s<t.materials.length;s++){const{extensions:r={},pbrMetallicRoughness:o,normalTexture:l,occlusionTexture:c,emissiveTexture:u,emissiveFactor:h,alphaMode:f,alphaCutoff:d,doubleSided:_,name:p=""}=t.materials[s],{KHR_materials_unlit:m,KHR_materials_pbrSpecularGlossiness:g,KHR_materials_clearcoat:E}=r;let x=null;if(m?x=$h.getMaterial():g?(x=gr.getMaterial(),gr.parseParams(x,g,n)):E?(x=xr.getMaterial(),xr.parseParams(x,E,n)):x=new Oi,x.name=p,o){const{baseColorFactor:v,baseColorTexture:A,metallicFactor:P,roughnessFactor:w,metallicRoughnessTexture:L}=o;Array.isArray(v)&&(x.diffuse.fromArray(v),x.opacity=v[3]!==void 0?v[3]:1),A&&(x.diffuseMap=n[A.index],x.diffuseMapCoord=A.texCoord||0,x.diffuseMap&&(x.diffuseMap.encoding=ve.SRGB,yi(x,"diffuseMap",A.extensions))),!m&&!g&&(x.metalness=P!==void 0?P:1,x.roughness=w!==void 0?w:1,L&&(x.metalnessMap=n[L.index],x.roughnessMap=n[L.index]))}h&&x.emissive.fromArray(h),u&&(x.emissiveMap=n[u.index],x.emissiveMapCoord=u.texCoord||0,x.emissiveMap&&(x.emissiveMap.encoding=ve.SRGB,yi(x,"emissiveMap",u.extensions))),c&&(x.aoMap=n[c.index],x.aoMapCoord=c.texCoord||0,c.strength!==void 0&&(x.aoMapIntensity=c.strength),x.aoMap&&yi(x,"aoMap",c.extensions)),m||l&&(x.normalMap=n[l.index],x.normalScale.set(1,-1),l.scale!==void 0&&x.normalScale.set(l.scale,-l.scale),x.normalMap),x.side=_===!0?se.DOUBLE:se.FRONT,f===dr.BLEND?x.transparent=!0:(x.transparent=!1,f===dr.MASK&&(x.alphaTest=d!==void 0?d:.5)),i[s]=x}e.materials=i}}function yi(a,e,t={}){const n=t.KHR_texture_transform;n&&ta.transform(a[e+"Transform"],n)}class tf{static parse(e){const{bufferViews:t,gltf:n}=e;if(!n.accessors)return;const i=new Map,s=n.accessors.map(r=>{const{bufferView:o,type:l,componentType:c,count:u,byteOffset:h=0,normalized:f=!1,sparse:d}=r;if(o===void 0&&d===void 0)return null;const _=o!==void 0?t[o]:null,p=o!==void 0?n.bufferViews[o].byteStride:void 0,m=_r[l],g=Tn[c],E=g.BYTES_PER_ELEMENT,x=E*m;let v,A;if(p&&p!==x){const P="Buffer:"+o+":"+c;let w=i.get(P);w||(v=new g(_),w=new ie(v,p/E),i.set(P,w)),A=new j(w,m,h/E,f)}else _===null?v=new g(u*m):v=new g(_,h,u*m),A=new j(new ie(v,m),m,0,f);if(d){const P=_r.SCALAR,w=Tn[d.indices.componentType],L=d.indices.byteOffset||0,b=d.values.byteOffset||0,O=new w(t[d.indices.bufferView],L,d.count*P),I=new g(t[d.values.bufferView],b,d.count*m);_!==null&&(A=new j(A.buffer.clone(),A.size,A.offset,A.normalized));const R=A.buffer;for(let D=0,Q=O.length;D<Q;D++){const H=O[D];if(R.array[H*A.size]=I[D*m],m>=2&&(R.array[H*A.size+1]=I[D*m+1]),m>=3&&(R.array[H*A.size+2]=I[D*m+2]),m>=4&&(R.array[H*A.size+3]=I[D*m+3]),m>=5)throw new Error("Unsupported itemSize in sparse Attribute.")}}return A});i.clear(),e.accessors=s}}class nf{static getGeometry(e,t,n,i,s){const{bufferView:r,attributes:o}=e;if(!s)throw new Error("GLTFLoader: No DRACOLoader instance provided.");const l={};for(const f in o){const d=le[f]===void 0?f:le[f];l[d]=o[f]}const c={},u={};for(const f in n){const d=le[f]||f.toLowerCase();if(o[f]!==void 0){const _=i[n[f]],p=Tn[_.componentType];u[d]=p.name,c[d]=_.normalized===!0}}const h=t[r];return new Promise(function(f){s.decodeDracoFile(h,function(d){for(const _ in d.attributes){const p=d.attributes[_],m=c[_];m!==void 0&&(p.normalized=m)}f(d)},l,u)})}}class sf{static parse(e,t){const{gltf:n,accessors:i,materials:s,bufferViews:r}=e;if(!n.meshes)return;const o=new Map,l=new Map,c=[];for(let u=0;u<n.meshes.length;u++){const h=n.meshes[u],f=[];for(let d=0;d<h.primitives.length;d++){const _=h.primitives[d],{extensions:p={},mode:m,material:g}=_,{KHR_draco_mesh_compression:E}=p;let x;const v=of(_);l.has(v)?x=l.get(v):(E?x=nf.getGeometry(E,r,_.attributes,n.accessors,t.getDRACOLoader()):x=Promise.resolve(new Be),x=x.then(P=>(rf(P,_,n,i),P)),l.set(v,x));const A=x.then(P=>{const w={mode:m,geometry:P,material:g===void 0?new Oi:s[g],weights:Object.keys(P.morphAttributes).length>0&&h.weights?h.weights.slice(0):void 0,skinned:h.isSkinned};return af(w,o),w});f.push(A)}c.push(Promise.all(f))}return o.clear(),l.clear(),Promise.all(c).then(u=>{e.primitives=u})}}function rf(a,e,t,n){const{attributes:i,indices:s,targets:r}=e;for(const c in i){const u=i[c],h=le[c]===void 0?c:le[c];h in a.attributes||a.addAttribute(h,n[u])}s!==void 0&&!a.index&&a.setIndex(n[s]);const{boundingBox:o,boundingSphere:l}=a;if(i.POSITION!==void 0){const c=i.POSITION,u=t.accessors[c];if(u.min&&u.max){if(o.min.fromArray(u.min),o.max.fromArray(u.max),u.normalized){const h=he.getNormalizedComponentScale(Tn[u.componentType]);o.min.multiplyScalar(h),o.max.multiplyScalar(h)}}else a.computeBoundingBox()}else a.computeBoundingBox();if(o.getCenter(l.center),l.radius=o.min.distanceTo(o.max)/2,r){let c=!1,u=!1;for(let h=0,f=r.length;h<f;h++){const d=r[h];if(d.POSITION!==void 0&&(c=!0),d.NORMAL!==void 0&&(u=!0),c&&u)break}if(c||u){const h=[],f=[];for(let d=0,_=r.length;d<_;d++){const p=r[d];c&&h.push(p.POSITION!==void 0?n[p.POSITION]:a.attributes[le.POSITION]),u&&f.push(p.NORMAL!==void 0?n[p.NORMAL]:a.attributes[le.NORMAL])}c&&(a.morphAttributes.position=h),u&&(a.morphAttributes.normal=f)}}return a}function af(a,e){let{geometry:t,material:n,skinned:i,mode:s}=a;const r=t.attributes[le.TANGENT]!==void 0,o=t.attributes[le.COLOR_0]!==void 0,l=t.attributes[le.NORMAL]===void 0,c=i;if(s===Ye.POINTS){const u="PointsMaterial:"+n.id;let h=e.get(u);h||(h=new ao,ze.prototype.copy.call(h,n),h.diffuse.copy(n.diffuse),h.diffuseMap=n.map,h.acceptLight=!1,e.set(u,h)),n=h}else if(s===Ye.LINES||s===Ye.LINE_STRIP||s===Ye.LINE_LOOP){const u="BasicMaterial:"+n.id;let h=e.get(u);h||(h=new br,h.envMap=void 0,h.diffuse.copy(n.diffuse),h.diffuseMap=n.diffuseMap,h.drawMode=s,e.set(u,h)),n=h}else s===Ye.TRIANGLE_STRIP?(console.warn("TRIANGLE_STRIP will be removed later."),n.drawMode=Ye.TRIANGLE_STRIP):s===Ye.TRIANGLE_FAN&&(console.warn("TRIANGLE_FAN will be removed later."),n.drawMode=Ye.TRIANGLE_FAN);if(r||o||l||c){let u="ClonedMaterial:"+n.id+":";r&&(u+="vertex-tangents:"),o&&(t.attributes[le.COLOR_0].size===3?u+="vertex-colors-rgb:":t.attributes[le.COLOR_0].size===4&&(u+="vertex-colors-rgba:")),l&&(u+="flat-shading:");let h=e.get(u);h||(h=n.clone(),r&&(h.vertexTangents=!0,h.normalMap&&(h.normalScale.y*=-1)),o&&(t.attributes[le.COLOR_0].size===3?h.vertexColors=it.RGB:t.attributes[le.COLOR_0].size===4?h.vertexColors=it.RGBA:console.warn("Illegal vertex color size: "+t.attributes[le.COLOR_0].size)),l&&(h.shading=yt.FLAT_SHADING)),n=h}a.material=n}function of(a){const e=a.extensions&&a.extensions.KHR_draco_mesh_compression;let t;if(e?t="draco:"+e.bufferView+":"+e.indices+":"+Mi(e.attributes):t=a.indices+":"+Mi(a.attributes)+":"+a.mode,a.targets)for(let n=0,i=a.targets.length;n<i;n++)t+=":"+Mi(a.targets[n]);return t}function Mi(a){let e="";const t=Object.keys(a).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+a[t[n]]+";";return e}class lf{static getLight(e){const{color:t,intensity:n=1,type:i,range:s,spot:r}=e;let o;if(i==="directional")o=new Nr;else if(i==="point")o=new Fr,s!==void 0&&(o.distance=s);else if(i==="spot"){if(o=new Dr,s!==void 0&&(o.distance=s),r){const{innerConeAngle:l=0,outerConeAngle:c=Math.PI/4}=r;o.angle=c,o.penumbra=1-l/c}}else throw new Error("Unexpected light type: "+i);return t&&o.color.fromArray(t),o.intensity=n,o}}class cf{static parse(e){const{gltf:{nodes:t,cameras:n,extensions:i}}=e;if(!t)return;const s=[],r=[],o=t.map(l=>{const{matrix:c,translation:u,rotation:h,scale:f,camera:d,mesh:_,extensions:p={}}=l,{KHR_lights_punctual:m}=p;let g=null;if(l.isBone)g=new Ir;else if(_!==void 0)g=hf(e,l);else if(d!==void 0)g=uf(n[d]),s.push(g);else if(m){const E=m.light,x=i.KHR_lights_punctual.lights;g=lf.getLight(x[E]),r.push(g)}else g=new Ee;if(g.name=l.name||"",g.name&&g.children.length>0)for(let E=0;E<g.children.length;E++)g.children[E].name=g.name+"_"+E;return c!==void 0?(g.matrix.fromArray(c),g.matrix.decompose(g.position,g.quaternion,g.scale)):(u!==void 0&&g.position.fromArray(u),h!==void 0&&g.quaternion.fromArray(h),f!==void 0&&g.scale.fromArray(f)),g});e.nodes=o,e.cameras=s,e.lights=r}}function uf(a){const{orthographic:e,perspective:t,type:n}=a,i=new jt;if(n=="perspective"){const{aspectRatio:s,yfov:r,zfar:o,znear:l}=t;i.setPerspective(r,s||1,l||1,o||2e6)}else if(n=="orthographic"){const{xmag:s,ymag:r,zfar:o,znear:l}=e;i.setOrtho(-s,s,-r,r,l||1,o||2e6)}return i}function hf(a,e){const{primitives:t}=a,{mesh:n,skin:i}=e,s=t[n].map(r=>{const{geometry:o,material:l,weights:c}=r;let u;return i!==void 0?(u=new Ur(o,l),o.attributes.skinWeight&&!o.attributes.skinWeight.normalized&&ff(o.attributes.skinWeight)):(u=new qe(o,l),c&&(u.morphTargetInfluences=c.slice())),u});if(s.length>1){const r=new Ee;return s.forEach(o=>r.add(o)),r}else return s[0]}const Ht=new xe;function ff(a){const e=a.offset,t=a.buffer,n=t.stride;for(let i=0,s=t.count;i<s;i++){Ht.fromArray(t.array,i*n+e);const r=1/Ht.getManhattanLength();r!==1/0?Ht.multiplyScalar(r):Ht.set(1,0,0,0),Ht.toArray(t.array,i*n+e)}}class df{static parse(e){const{gltf:t,accessors:n,nodes:i}=e,s=t.skins;if(!s)return;const r=s.map(o=>{const{inverseBindMatrices:l,joints:c}=o,u=n[l],h=[],f=[];return c.forEach((d,_)=>{const p=i[d];if(p){h.push(p);const m=new U;u&&m.fromArray(u.buffer.array,_*16),f.push(m)}else console.warn("Joint "+d+" could not be found.")}),new zi(h,f)});e.skins=r,i.forEach((o,l)=>{const{skin:c}=t.nodes[l];c!==void 0&&o.traverse(function(u){u.isSkinnedMesh&&u.bind(r[c],u.worldMatrix)})})}}class _f{static parse(e){const{gltf:t,nodes:n}=e,i=t.scenes.map(s=>{const{name:r="",nodes:o=[]}=s,l=new Ee;l.name=r;for(let c=0;c<o.length;c++)na(o[c],l,t.nodes,n);return l});e.roots=i,e.root=i[t.scene||0]}}function na(a,e,t,n){const i=n[a],s=t[a];if(e.add(i),s.children){const r=s.children;for(let o=0,l=r.length;o<l;o++){const c=r[o];na(c,i,t,n)}}}class pf{static parse(e){const{gltf:t,nodes:n,accessors:i}=e,{animations:s}=t;if(!s)return;const r=s.map((o,l)=>{const{channels:c,samplers:u,name:h=`animation_${l}`}=o,f=[];let d=0;for(let _=0;_<c.length;_++){const p=c[_],m=u[p.sampler];if(m){const g=p.target,E=g.node!==void 0?g.node:g.id,x=i[m.input],v=i[m.output],A=n[E];if(!A)continue;A.updateMatrix(),A.matrixAutoUpdate=!0;let P;switch(Qe[g.path]){case Qe.rotation:P=Li;break;case Qe.weights:P=Ar;break;case Qe.position:case Qe.scale:default:P=vr;break}if(!P)continue;const w=new x.buffer.array.constructor(x.buffer.array),L=new Float32Array(v.buffer.array);if(v.normalized){const I=he.getNormalizedComponentScale(v.buffer.array.constructor);for(let R=0,D=L.length;R<D;R++)L[R]*=I}const b=[];Qe[g.path]===Qe.weights?A.traverse(function(I){I.isMesh&&I.morphTargetInfluences&&b.push(I)}):b.push(A);for(let I=0,R=b.length;I<R;I++){const D=mf(m.interpolation,P===Li),Q=new P(b[I],Qe[g.path],w,L,D);f.push(Q)}const O=w[w.length-1];d<O&&(d=O)}}return new Aa(h,f,d)});e.animations=r}}function mf(a,e){switch(a){case"STEP":return Mt;case"CUBICSPLINE":return e?da:Tr;case"LINEAR":default:return e?Ci:Pi}}let gf=0;class xf{constructor(){this.id=++gf,this.url="",this.path="",this.options=null,this.gltf=null,this.loadItems=null,this.buffers=null,this.bufferViews=null,this.images=null,this.textures=null,this.materials=null,this.accessors=null,this.primitives=null,this.nodes=null,this.cameras=null,this.lights=null,this.skins=null,this.root=null,this.roots=null,this.animations=null}}const Tf=[kh,Hh,Xh,Vh,Qh,jh,Zh,ef,tf,sf,cf,df,_f,pf];class Of{constructor(e=Er,t=Tf){this.manager=e,this.detailLoadProgress=!0,this.autoLogError=!0,this._parsers=t.slice(0),this._dracoLoader=null,this._meshoptDecoder=null,this._ktx2Loader=null,this._fileLoader=new mn;const n=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,i=navigator.userAgent.indexOf("Firefox")>-1,s=i?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1;typeof createImageBitmap>"u"||n||i&&s<98?this._imageLoader=new Sr:this._imageLoader=new Bh}load(e,t={}){return this.manager.itemStart(e),new Promise((n,i)=>{const s=new xf;s.url=e,s.path=he.extractUrlBase(e),s.options=t,this._parse(s).then(n).then(()=>this.manager.itemEnd(e)).catch(r=>{this.autoLogError&&console.error(r),this.detailLoadProgress&&s.loadItems&&s.loadItems.forEach(o=>{this.manager.itemEnd(o)}),this.manager.itemError(e),this.manager.itemEnd(e),i(`Error loading glTF model from ${e} .`)})})}_parse(e){let t;return new Promise((n,i)=>{this._parsers.forEach(s=>{t?t=t.then(()=>s.parse(e,this)):t=s.parse(e,this)}),t?t.then(()=>n(e)).catch(i):n(e)})}setDRACOLoader(e){return this._dracoLoader=e,this}getDRACOLoader(){return this._dracoLoader}setMeshoptDecoder(e){return this._meshoptDecoder=e,this}getMeshoptDecoder(){return this._meshoptDecoder}setKTX2Loader(e){return this._ktx2Loader=e,this}getKTX2Loader(){return this._ktx2Loader}loadFile(e,t="json"){return this._fileLoader.setResponseType(t),new Promise((n,i)=>{e=this.manager.resolveURL(e),this._fileLoader.load(e,n,void 0,i)})}loadImage(e){return new Promise((t,n)=>{e=this.manager.resolveURL(e),this._imageLoader.load(e,t,void 0,n)})}insertParser(e,t){this._parsers.splice(t,0,e)}replaceParser(e,t){this._parsers.splice(t,1,e)}}class Bf{constructor(e){this.autoStart=e!==void 0?e:!0,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=(typeof performance>"u"?Date:performance).now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=(typeof performance>"u"?Date:performance).now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}class zf extends wt{constructor(e){super(e)}load(e,t,n,i){const s=new oe,r=new Sr(this.manager);return r.setCrossOrigin(this.crossOrigin),r.setPath(this.path),r.load(e,function(o){s.image=o,s.version++,t&&t(s)},n,i),s}}class Gf{constructor(){this._colorStops=[],this._sortDirty=!1}addColorStop(e,t){return this._colorStops.push({position:e,color:t}),this._sortDirty=!0,this}removeColorStop(e){for(let t=0;t<this._colorStops.length;t++)if(this._colorStops[t].position===e){this._colorStops.splice(t,1),this._sortDirty=!0;break}return this}clear(){return this._colorStops=[],this}getColor(e,t=new ge){this._sort();const n=this._colorStops;if(t.copy(n[0].color),e>0){let i=0;for(let s=0;s<n.length;s++){const r=n[s];if(r.position<e)t.copy(r.color),i=r.position;else{const o=(e-i)/(r.position-i);t.lerp(r.color,o);break}}}return t}getUint8Array(e,t=new Uint8Array(e*4)){this._sort();const n=this._colorStops,i=Af,s=vf;i.copy(n[0].color);let r=0,o=0;for(let l=0;l<e;l++){const c=l/(e-1);if(c>0)for(;o<n.length;){const h=n[o];if(h.position<c)i.copy(h.color),s.copy(i),r=h.position;else{const f=(c-r)/(h.position-r);s.lerpColors(i,h.color,f);break}o++}else s.copy(i);const u=l*4;t[u]=s.r*255,t[u+1]=s.g*255,t[u+2]=s.b*255,t[u+3]=255}return t}_sort(){this._sortDirty&&(this._colorStops.sort((e,t)=>e.position-t.position),this._sortDirty=!1)}}const Af=new ge,vf=new ge;class kf{constructor(e=256){const t=new oe;t.image={data:null,width:e,height:1},t.magFilter=t.minFilter=C.LINEAR,t.generateMipmaps=!1,this._texture=t}gradient(e){const t=this._texture;return t.image.data=e.getUint8Array(t.image.width),t.version++,this}getTexture(){return this._texture}}class Hf extends Ee{constructor(e,t=1,n){super(),this.light=e,this.color=n;const i=new Be;i.addAttribute("a_Position",new j(new ie(new Float32Array([-t,t,0,t,t,0,t,-t,0,-t,-t,0,-t,t,0]),3))),i.computeBoundingBox(),i.computeBoundingSphere();const s=new Ri;s.drawMode=Vt.LINE_LOOP,this.lightPlane=new qe(i,s),this.add(this.lightPlane);const r=new Be;r.addAttribute("a_Position",new j(new ie(new Float32Array([0,0,0,0,0,-1]),3))),r.computeBoundingBox(),r.computeBoundingSphere();const o=new Ri;o.drawMode=Vt.LINE_LOOP,this.targetLine=new qe(r,o),this.targetLine.scale.z=t*5,this.add(this.targetLine),this.update()}update(){this.color!==void 0?(this.lightPlane.material.diffuse.setHex(this.color),this.targetLine.material.diffuse.setHex(this.color)):(this.lightPlane.material.diffuse.copy(this.light.color),this.targetLine.material.diffuse.copy(this.light.color))}}class Xf extends qe{constructor(e,t,n){const i=new so(t,4,2),s=new Ri;super(i,s),this.light=e,this.color=n,this.update()}update(){this.color!==void 0?this.material.diffuse.setHex(this.color):this.material.diffuse.copy(this.light.color)}}const Ef=`
#ifdef CLUSTER_LIGHT
	uniform vec3 cells;
	uniform int maxLightsPerCell;
	uniform vec3 cellsDotData;
	uniform vec3 cellsTextureSize;
	uniform vec4 cellsTransformFactors;

	uniform sampler2D cellsTexture;
	uniform sampler2D lightsTexture;

	struct ClusteredPointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};

	void getPointLightFromTexture(int index, int size, inout ClusteredPointLight pointLight) {
		int j = index * 4;
		int x = j % size;
		int y = j / size;
		vec4 lightData1 = texelFetch(lightsTexture, ivec2(x + 1, y), 0);
		vec4 lightData2 = texelFetch(lightsTexture, ivec2(x + 2, y), 0);
		// vec4 lightData3 = texelFetch(lightsTexture, ivec2(x + 3, y), 0);
		pointLight.color = lightData1.xyz;
		pointLight.decay = lightData1.w;
		pointLight.position = lightData2.xyz;
		pointLight.distance = lightData2.w;
	}
#endif
`,Sf=`
#ifdef CLUSTER_LIGHT
	vec4 positionView = u_View * vec4(v_modelPos, 1.0);

	float halfFrustumHeight = -positionView.z * cellsTransformFactors.z;
	float halfFrustumWidth = halfFrustumHeight * cellsTransformFactors.w;

	vec3 cellCoords;
	cellCoords.z = floor(log(-positionView.z) * cellsTransformFactors.x + cellsTransformFactors.y);
	cellCoords.y = floor((positionView.y + halfFrustumHeight) / (2.0 * halfFrustumHeight) * cells.y);
	cellCoords.x = floor((positionView.x + halfFrustumWidth) / (2.0 * halfFrustumWidth) * cells.x);

	if(!(any(lessThan(cellCoords, vec3(0.0))) || any(greaterThanEqual(cellCoords, cells)))) {
		float cellIndex = dot(cellsDotData, cellCoords);
		float clusterV = floor(cellIndex * cellsTextureSize.y);
		float clusterU = cellIndex - (clusterV * cellsTextureSize.x);

		int size = textureSize(lightsTexture, 0).x;

		ClusteredPointLight clusteredPointLight;
		vec3 pointV;

		for (int lightCellIndex = 0; lightCellIndex < maxLightsPerCell; lightCellIndex++) {
			float lightIndex = texelFetch(cellsTexture, ivec2(int(clusterU) + lightCellIndex, clusterV), 0).x;

			if (lightIndex <= 0.0) break;

			#ifdef CLUSTER_DEBUG
				reflectedLight.directDiffuse = mix(vec3(0., 0., 1.), vec3(1., 0., 0.), float(lightCellIndex + 1) / float(maxLightsPerCell));
				continue;
			#endif

			getPointLightFromTexture(int(lightIndex - 1.), size, clusteredPointLight);

			pointV = v_modelPos - clusteredPointLight.position;

			L = -pointV;
			falloff = pow(clamp(1. - length(L) / clusteredPointLight.distance, 0.0, 1.0), clusteredPointLight.decay);
			L = normalize(L);

			dotNL = saturate(dot(N, L));
			irradiance = clusteredPointLight.color * falloff * dotNL * PI;

			#ifdef USE_CLEARCOAT
				ccDotNL = saturate(dot(clearcoatNormal, L));
				ccIrradiance = ccDotNL * clusteredPointLight.color * falloff  * PI;
				clearcoatDHR = clearcoat * clearcoatDHRApprox(clearcoatRoughness, ccDotNL);
				reflectedLight.directSpecular += ccIrradiance * clearcoat * BRDF_Specular_GGX(specularColor, clearcoatNormal, L, V, clearcoatRoughness);
			#else
				clearcoatDHR = 0.0;
			#endif

			reflectedLight.directDiffuse += (1.0 - clearcoatDHR) * irradiance * BRDF_Diffuse_Lambert(diffuseColor);

			#ifdef USE_PHONG
				reflectedLight.directSpecular += irradiance * BRDF_Specular_BlinnPhong(specularColor, N, L, V, shininess) * specularStrength;
			#endif

			#ifdef USE_PBR
				reflectedLight.directSpecular += (1.0 - clearcoatDHR) * irradiance * BRDF_Specular_GGX(specularColor, N, L, V, roughness);
			#endif
		}

		#ifdef CLUSTER_DEBUG
			gl_FragColor = vec4(reflectedLight.directDiffuse, 1.0);
			return;
		#endif
	}
#endif
`;let An=Xt.pbr_frag;An=An.replace("#include <clippingPlanes_pars_frag>",`#include <clippingPlanes_pars_frag>
	${Ef}`);const yf=ki.light_frag.replace("vec3 indirectIrradiance = vec3(0., 0., 0.);",`${Sf}
    vec3 indirectIrradiance = vec3(0., 0., 0.);`);An=An.replace("#include <light_frag>",`${yf}`);class Vf{constructor(e,t,n={}){n.postEffect=n.postEffect!==void 0?n.postEffect:!0;const i=new t({title:"Effect Composer Inspector"});if(n.postEffect){const x=i.addFolder("Post Effects");x.add(e,"sceneMSAA");const v=e.getEffect("SSAO"),A=x.addFolder("SSAO");A.close(),A.add(v,"active"),A.add(v,"radius").min(0).max(5).step(.01),A.add(v,"power").min(0).max(5).step(1),A.add(v,"bias").min(0).max(1).step(1e-4),A.add(v,"intensity").min(0).max(2).step(.1),A.add(v,"quality",["Low","Medium","High","Ultra"]),A.add(v,"blurSize").min(0).max(3).step(.01),A.add(v,"depthRange").min(0).max(3).step(.01),A.add(v,"autoSampleWeight");const P=e.getEffect("SSR"),w=x.addFolder("SSR");w.close(),w.add(P,"active"),w.add(P,"pixelStride",1,100,1),w.add(P,"maxIteration",1,10,1),w.add(P,"maxSteps",20,200,1),w.add(P,"maxRayDistance",1,1e3,.01),w.add(P,"enablePixelStrideZCutoff"),w.add(P,"pixelStrideZCutoff",1,300,1),w.add(P,"screenEdgeFadeStart",0,1,.01),w.add(P,"eyeFadeStart",0,1,.01),w.add(P,"eyeFadeEnd",0,1,.01),w.add(P,"minGlossiness",0,1,.01),w.add(P,"strength",0,1,.01),w.add(P,"falloff",0,1,.01);const L=e.getEffect("ColorCorrection"),b=x.addFolder("ColorCorrection");b.close(),b.add(L,"active"),b.add(L,"brightness").min(0).max(.5).step(.01),b.add(L,"contrast").min(1).max(1.5).step(.01),b.add(L,"exposure").min(0).max(1).step(.1),b.add(L,"gamma").min(0).max(1).step(.1),b.add(L,"saturation").min(-1).max(5);const O=e.getEffect("DOF"),I=x.addFolder("DOF");I.close(),I.add(O,"active"),I.add(O,"focalDepth",0,100),I.add(O,"focalLength",0,100),I.add(O,"fstop",0,1,.1),I.add(O,"maxblur",0,1,.1),I.add(O,"threshold",0,1,.1),I.add(O,"gain",0,2,.1),I.add(O,"bias",0,1,.001),I.add(O,"dithering",0,.001,1e-5);const R=e.getEffect("Bloom"),D=x.addFolder("Bloom");D.close(),D.add(R,"active"),D.add(R,"threshold").min(0).max(1).step(.01),D.add(R,"smoothWidth").min(0).max(1).step(.01),D.add(R,"blurSize").min(0).max(5).step(.01),D.add(R,"strength").min(0).max(2).step(.01);const Q=e.getEffect("FXAA"),H=x.addFolder("FXAA");H.close(),H.add(Q,"active");const K=e.getEffect("ChromaticAberration"),ee=x.addFolder("chromatic aberration");ee.close(),ee.add(K,"active"),ee.add(K,"chromaFactor").min(0).max(1).step(1e-4);const $=e.getEffect("Vignetting"),W=x.addFolder("Vignetting");W.close(),W.add($,"active"),W.addColor({color:[0,0,0]},"color").onChange(Ce=>{$.color.fromArray(Ce)}),W.add($,"offset").min(0).max(5).step(.1);const z=e.getEffect("BlurEdge"),V=x.addFolder("BlurEdge");V.close(),V.add(z,"active"),V.add(z,"offset").min(0).max(5).step(.1);const re=e.getEffect("Film"),Y=x.addFolder("Film");Y.close(),Y.add(re,"active"),Y.add(re,"noiseIntensity").min(0).max(1).step(.01),Y.add(re,"scanlinesIntensity").min(0).max(1).step(.01),Y.add(re,"scanlinesCount").min(0).max(3e3).step(100),Y.add(re,"grayscale")}const s=new Qt,r=new qu,o=new Zu,l=i.addFolder("Debugger");l.close();const c=["Normal","Depth","Position","Metalness","Roughness"],u=["Null","GBuffer","SSAO","SSR"];let h=null,f=null,d=null,_=null,p=null;n.nonDepthMarkChannels&&(u.push("NonDepthMarkBuffer"),d=new ju,d.channel=n.nonDepthMarkChannels[0]),n.markChannels&&(u.push("MarkBuffer"),_=new Yu,_.channel=n.markChannels[0]),n.colorMarkChannels&&(u.push("ColorMarkBuffer"),p=new Wu,p.channel=n.colorMarkChannels[0]),l.add({type:"Null"},"type",u).onChange(x=>{h&&(h.destroy(),h=null),f&&(f.destroy(),f=null),x==="GBuffer"?(e.debugger=s,h=l.add({bufferInfo:c[s.debugType]},"bufferInfo",c).onChange(v=>{s.debugType=Qt.DebugTypes[v]})):x==="NonDepthMarkBuffer"?(e.debugger=d,h=l.add(d,"channel",n.nonDepthMarkChannels),f=l.add(d,"mask",k)):x==="MarkBuffer"?(e.debugger=_,h=l.add(_,"channel",n.markChannels),f=l.add(_,"mask",k)):x==="ColorMarkBuffer"?(e.debugger=p,h=l.add(p,"channel",n.colorMarkChannels),f=l.add(p,"mask",k)):x==="SSAO"?e.debugger=r:x==="SSR"?e.debugger=o:e.debugger=null});const m=i.addFolder("Stats");m.close();const g=e.getStats();m.add(g,"fboCache").disable().listen(),m.add(g,"markBuffers").disable().listen(),m.add(g,"colorMarkBuffers").disable().listen();const E=g.currentBufferUsage;for(const x in E)m.add(E,x).disable().listen();m.add({dispose:()=>{e.dispose()}},"dispose"),this.statsTimer=setInterval(()=>{e.getStats()},300),this.gui=i}destroy(){clearInterval(this.statsTimer),this.gui.destroy()}}export{Pe as A,io as B,ge as C,me as D,Ct as E,G as F,Of as G,ho as H,Xf as I,Gf as J,kf as K,gn as L,U as M,Hf as N,Pf as O,Fr as P,je as Q,Df as R,Ui as S,wf as T,Vf as U,T as V,Gr as W,Uf as a,Lf as b,bf as c,Bi as d,C as e,zf as f,Rf as g,Cf as h,nt as i,ve as j,Nf as k,lo as l,Ff as m,jt as n,Nr as o,br as p,qe as q,oe as r,If as s,Mf as t,Bf as u,Ef as v,ki as w,Sf as x,Xt as y,Oi as z};
