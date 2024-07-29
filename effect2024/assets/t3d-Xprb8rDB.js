/**
 * @license
 * Copyright 2021-present uino
 * SPDX-License-Identifier: BSD-3-Clause
 */class A{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}lerpVectors(e,t,n){return this.subVectors(t,e).multiplyScalar(n).add(e)}set(e=0,t=0,n=0){return this.x=e,this.y=t,this.z=n,this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}getLength(){return Math.sqrt(this.getLengthSquared())}getLengthSquared(){return this.x*this.x+this.y*this.y+this.z*this.z}normalize(e=1){const t=this.getLength()||1,n=e/t;return this.x*=n,this.y*=n,this.z*=n,this}subtract(e,t=new A){return t.set(this.x-e.x,this.y-e.y,this.z-e.z)}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,r=t.x,o=t.y,l=t.z;return this.x=i*l-s*o,this.y=s*r-n*l,this.z=n*o-i*r,this}cross(e){return this.crossVectors(this,e)}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e._x,r=e._y,o=e._z,l=e._w,c=l*t+r*i-o*n,h=l*n+o*t-s*i,u=l*i+s*n-r*t,f=-s*t-r*n-o*i;return this.x=c*l+f*-s+h*-o-u*-r,this.y=h*l+f*-r+u*-s-c*-o,this.z=u*l+f*-o+c*-r-h*-s,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,r=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*r,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*r,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*r,this}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}setFromMatrixPosition(e){return this.setFromMatrixColumn(e,3)}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}setFromSpherical(e){const t=Math.sin(e.phi)*e.radius;return this.x=t*Math.sin(e.theta),this.y=Math.cos(e.phi)*e.radius,this.z=t*Math.cos(e.theta),this}project(e){return this.applyMatrix4(e.projectionViewMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.worldMatrix)}reflect(e){return this.sub(Xr.copy(e).multiplyScalar(2*this.dot(e)))}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}clone(){return new A(this.x,this.y,this.z)}}const Xr=new A;class B{constructor(){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)}isIdentity(){const e=this.elements;return e[0]===1&&e[4]===0&&e[8]===0&&e[12]===0&&e[1]===0&&e[5]===1&&e[9]===0&&e[13]===0&&e[2]===0&&e[6]===0&&e[10]===1&&e[14]===0&&e[3]===0&&e[7]===0&&e[11]===0&&e[15]===1}set(e,t,n,i,s,r,o,l,c,h,u,f,d,_,p,m){const g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=i,g[1]=s,g[5]=r,g[9]=o,g[13]=l,g[2]=c,g[6]=h,g[10]=u,g[14]=f,g[3]=d,g[7]=_,g[11]=p,g[15]=m,this}clone(){return new B().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1)}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,r=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],d=n[13],_=n[2],p=n[6],m=n[10],g=n[14],v=n[3],x=n[7],T=n[11],E=n[15],P=i[0],C=i[4],b=i[8],w=i[12],U=i[1],D=i[5],L=i[9],R=i[13],Q=i[2],k=i[6],j=i[10],J=i[14],Z=i[3],W=i[7],G=i[11],X=i[15];return s[0]=r*P+o*U+l*Q+c*Z,s[4]=r*C+o*D+l*k+c*W,s[8]=r*b+o*L+l*j+c*G,s[12]=r*w+o*R+l*J+c*X,s[1]=h*P+u*U+f*Q+d*Z,s[5]=h*C+u*D+f*k+d*W,s[9]=h*b+u*L+f*j+d*G,s[13]=h*w+u*R+f*J+d*X,s[2]=_*P+p*U+m*Q+g*Z,s[6]=_*C+p*D+m*k+g*W,s[10]=_*b+p*L+m*j+g*G,s[14]=_*w+p*R+m*J+g*X,s[3]=v*P+x*U+T*Q+E*Z,s[7]=v*C+x*D+T*k+E*W,s[11]=v*b+x*L+T*j+E*G,s[15]=v*w+x*R+T*J+E*X,this}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}inverse(){return this.getInverse(this)}getInverse(e){const t=this.elements,n=e.elements,i=n[0],s=n[1],r=n[2],o=n[3],l=n[4],c=n[5],h=n[6],u=n[7],f=n[8],d=n[9],_=n[10],p=n[11],m=n[12],g=n[13],v=n[14],x=n[15],T=d*v*u-g*_*u+g*h*p-c*v*p-d*h*x+c*_*x,E=m*_*u-f*v*u-m*h*p+l*v*p+f*h*x-l*_*x,P=f*g*u-m*d*u+m*c*p-l*g*p-f*c*x+l*d*x,C=m*d*h-f*g*h-m*c*_+l*g*_+f*c*v-l*d*v,b=i*T+s*E+r*P+o*C;if(b===0)return console.warn("Matrix4: can not invert matrix, determinant is 0"),this.identity();const w=1/b;return t[0]=T*w,t[1]=(g*_*o-d*v*o-g*r*p+s*v*p+d*r*x-s*_*x)*w,t[2]=(c*v*o-g*h*o+g*r*u-s*v*u-c*r*x+s*h*x)*w,t[3]=(d*h*o-c*_*o-d*r*u+s*_*u+c*r*p-s*h*p)*w,t[4]=E*w,t[5]=(f*v*o-m*_*o+m*r*p-i*v*p-f*r*x+i*_*x)*w,t[6]=(m*h*o-l*v*o-m*r*u+i*v*u+l*r*x-i*h*x)*w,t[7]=(l*_*o-f*h*o+f*r*u-i*_*u-l*r*p+i*h*p)*w,t[8]=P*w,t[9]=(m*d*o-f*g*o-m*s*p+i*g*p+f*s*x-i*d*x)*w,t[10]=(l*g*o-m*c*o+m*s*u-i*g*u-l*s*x+i*c*x)*w,t[11]=(f*c*o-l*d*o-f*s*u+i*d*u+l*s*p-i*c*p)*w,t[12]=C*w,t[13]=(f*g*r-m*d*r+m*s*_-i*g*_-f*s*v+i*d*v)*w,t[14]=(m*c*r-l*g*r-m*s*h+i*g*h+l*s*v-i*c*v)*w,t[15]=(l*d*r-f*c*r+f*s*h-i*d*h-l*s*_+i*c*_)*w,this}transform(e,t,n){const i=this.elements,s=n._x,r=n._y,o=n._z,l=n._w,c=s+s,h=r+r,u=o+o,f=s*c,d=s*h,_=s*u,p=r*h,m=r*u,g=o*u,v=l*c,x=l*h,T=l*u,E=t.x,P=t.y,C=t.z;return i[0]=(1-(p+g))*E,i[1]=(d+T)*E,i[2]=(_-x)*E,i[3]=0,i[4]=(d-T)*P,i[5]=(1-(f+g))*P,i[6]=(m+v)*P,i[7]=0,i[8]=(_+x)*C,i[9]=(m-v)*C,i[10]=(1-(f+p))*C,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}makeRotationFromQuaternion(e){const t=this.elements,n=e.x,i=e.y,s=e.z,r=e.w,o=n+n,l=i+i,c=s+s,h=n*o,u=n*l,f=n*c,d=i*l,_=i*c,p=s*c,m=r*o,g=r*l,v=r*c;return t[0]=1-(d+p),t[4]=u-v,t[8]=f+g,t[1]=u+v,t[5]=1-(h+p),t[9]=_-m,t[2]=f-g,t[6]=_+m,t[10]=1-(h+d),t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}extractRotation(e){const t=this.elements,n=e.elements,i=1/at.setFromMatrixColumn(e,0).getLength(),s=1/at.setFromMatrixColumn(e,1).getLength(),r=1/at.setFromMatrixColumn(e,2).getLength();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*r,t[9]=n[9]*r,t[10]=n[10]*r,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}lookAtRH(e,t,n){const i=this.elements;return he.subVectors(e,t),he.getLengthSquared()===0&&(he.z=1),he.normalize(),Ge.crossVectors(n,he),Ge.getLengthSquared()===0&&(Math.abs(n.z)===1?he.x+=1e-4:he.z+=1e-4,he.normalize(),Ge.crossVectors(n,he)),Ge.normalize(),Wt.crossVectors(he,Ge),i[0]=Ge.x,i[4]=Wt.x,i[8]=he.x,i[1]=Ge.y,i[5]=Wt.y,i[9]=he.y,i[2]=Ge.z,i[6]=Wt.z,i[10]=he.z,this}decompose(e,t,n){const i=this.elements;let s=at.set(i[0],i[1],i[2]).getLength();const r=at.set(i[4],i[5],i[6]).getLength(),o=at.set(i[8],i[9],i[10]).getLength();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],Se.copy(this);const c=1/s,h=1/r,u=1/o;return Se.elements[0]*=c,Se.elements[1]*=c,Se.elements[2]*=c,Se.elements[4]*=h,Se.elements[5]*=h,Se.elements[6]*=h,Se.elements[8]*=u,Se.elements[9]*=u,Se.elements[10]*=u,t.setFromRotationMatrix(Se),n.x=s,n.y=r,n.z=o,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],r=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],f=e[10],d=e[14],_=e[3],p=e[7],m=e[11],g=e[15];return _*(+s*l*u-i*c*u-s*o*f+n*c*f+i*o*d-n*l*d)+p*(+t*l*d-t*c*f+s*r*f-i*r*d+i*c*h-s*l*h)+m*(+t*c*u-t*o*d-s*r*u+n*r*d+s*o*h-n*c*h)+g*(-i*o*h-t*l*u+t*o*f+i*r*u-n*r*f+n*l*h)}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,r=e.x,o=e.y,l=e.z,c=s*r,h=s*o;return this.set(c*r+n,c*o-i*l,c*l+i*o,0,c*o+i*l,h*o+n,h*l-i*r,0,c*l-i*o,h*l+i*r,s*l*l+n,0,0,0,0,1)}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const at=new A,Se=new B,Ge=new A,Wt=new A,he=new A;class We{constructor(e=0,t=0,n=0,i=1){this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,r,o){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3];const f=s[r+0],d=s[r+1],_=s[r+2],p=s[r+3];if(o===0){e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(o===1){e[t]=f,e[t+1]=d,e[t+2]=_,e[t+3]=p;return}if(u!==p||l!==f||c!==d||h!==_){let m=1-o;const g=l*f+c*d+h*_+u*p,v=g>=0?1:-1,x=1-g*g;if(x>Number.EPSILON){const E=Math.sqrt(x),P=Math.atan2(E,g*v);m=Math.sin(m*P)/E,o=Math.sin(o*P)/E}const T=o*v;if(l=l*m+f*T,c=c*m+d*T,h=h*m+_*T,u=u*m+p*T,m===1-o){const E=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=E,c*=E,h*=E,u*=E}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,s,r){const o=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=s[r],f=s[r+1],d=s[r+2],_=s[r+3];return e[t]=o*_+h*u+l*d-c*f,e[t+1]=l*_+h*f+c*u-o*d,e[t+2]=c*_+h*d+o*f-l*u,e[t+3]=h*_-o*u-l*f-c*d,e}get x(){return this._x}set x(e){this._x=e,this.onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this.onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this.onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this.onChangeCallback()}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this.onChangeCallback(),this}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}lerpQuaternions(e,t,n){if(n===0)return this.copy(e);if(n===1)return this.copy(t);const i=e._w,s=e._x,r=e._y,o=e._z;let l=t._w,c=t._x,h=t._y,u=t._z;i*l+s*c+r*h+o*u<0&&(l=-l,c=-c,h=-h,u=-u),this._w=i+n*(l-i),this._x=s+n*(c-s),this._y=r+n*(h-r),this._z=o+n*(u-o);const d=1/Math.sqrt(this._w*this._w+this._x*this._x+this._y*this._y+this._z*this._z);return this._w*=d,this._x*=d,this._y*=d,this._z*=d,this.onChangeCallback(),this}slerpQuaternions(e,t,n){if(n===0)return this.copy(e);if(n===1)return this.copy(t);const i=e._w,s=e._x,r=e._y,o=e._z;let l=t._w,c=t._x,h=t._y,u=t._z,f=i*l+s*c+r*h+o*u;if(f<0&&(f=-f,l=-l,c=-c,h=-h,u=-u),f<.95){const d=Math.acos(f),_=1/Math.sin(d),p=Math.sin(d*(1-n))*_,m=Math.sin(d*n)*_;this._w=i*p+l*m,this._x=s*p+c*m,this._y=r*p+h*m,this._z=o*p+u*m}else{this._w=i+n*(l-i),this._x=s+n*(c-s),this._y=r+n*(h-r),this._z=o+n*(u-o);const d=1/Math.sqrt(this._w*this._w+this._x*this._x+this._y*this._y+this._z*this._z);this._w*=d,this._x*=d,this._y*=d,this._z*=d}return this.onChangeCallback(),this}set(e=0,t=0,n=0,i=1){return this._x=e,this._y=t,this._z=n,this._w=i,this.onChangeCallback(),this}clone(){return new We(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w!==void 0?e.w:1,this.onChangeCallback(),this}setFromEuler(e,t=!0){const n=Math.cos(e._x/2),i=Math.cos(e._y/2),s=Math.cos(e._z/2),r=Math.sin(e._x/2),o=Math.sin(e._y/2),l=Math.sin(e._z/2),c=e._order;return c==="XYZ"?(this._x=r*i*s+n*o*l,this._y=n*o*s-r*i*l,this._z=n*i*l+r*o*s,this._w=n*i*s-r*o*l):c==="YXZ"?(this._x=r*i*s+n*o*l,this._y=n*o*s-r*i*l,this._z=n*i*l-r*o*s,this._w=n*i*s+r*o*l):c==="ZXY"?(this._x=r*i*s-n*o*l,this._y=n*o*s+r*i*l,this._z=n*i*l+r*o*s,this._w=n*i*s-r*o*l):c==="ZYX"?(this._x=r*i*s-n*o*l,this._y=n*o*s+r*i*l,this._z=n*i*l-r*o*s,this._w=n*i*s+r*o*l):c==="YZX"?(this._x=r*i*s+n*o*l,this._y=n*o*s+r*i*l,this._z=n*i*l-r*o*s,this._w=n*i*s-r*o*l):c==="XZY"&&(this._x=r*i*s-n*o*l,this._y=n*o*s-r*i*l,this._z=n*i*l+r*o*s,this._w=n*i*s+r*o*l),t===!0&&this.onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],r=t[1],o=t[5],l=t[9],c=t[2],h=t[6],u=t[10],f=n+o+u;let d;return f>0?(d=.5/Math.sqrt(f+1),this._w=.25/d,this._x=(h-l)*d,this._y=(s-c)*d,this._z=(r-i)*d):n>o&&n>u?(d=2*Math.sqrt(1+n-o-u),this._w=(h-l)/d,this._x=.25*d,this._y=(i+r)/d,this._z=(s+c)/d):o>u?(d=2*Math.sqrt(1+o-n-u),this._w=(s-c)/d,this._x=(i+r)/d,this._y=.25*d,this._z=(l+h)/d):(d=2*Math.sqrt(1+u-n-o),this._w=(r-i)/d,this._x=(s+c)/d,this._y=(l+h)/d,this._z=.25*d),this.onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,r=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+r*o+i*c-s*l,this._y=i*h+r*l+s*o-n*c,this._z=s*h+r*c+n*l-i*o,this._w=r*h-n*o-i*l-s*c,this.onChangeCallback(),this}toMatrix4(e=new B){const t=e.elements,n=2*this._x*this._y,i=2*this._x*this._z,s=2*this._x*this._w,r=2*this._y*this._z,o=2*this._y*this._w,l=2*this._z*this._w,c=this._x*this._x,h=this._y*this._y,u=this._z*this._z,f=this._w*this._w;return t[0]=c-h-u+f,t[4]=n-l,t[8]=i+o,t[12]=0,t[1]=n+l,t[5]=-c+h-u+f,t[9]=r-s,t[13]=0,t[2]=i-o,t[6]=r+s,t[10]=-c-h+u+f,t[14]=0,t[3]=0,t[7]=0,t[11]=0,t[15]=1,e}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this.onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this.onChangeCallback(),this}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this.onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}onChange(e){return this.onChangeCallback=e,this}onChangeCallback(){}}class fn{static getValueSize(){return this.values.length/this.times.length}static interpolate(e,t,n,i){throw new Error("Interpolant: call to abstract method")}static copyValue(e,t){const n=this.values,i=this.valueSize,s=i*e;for(let r=0;r<i;r++)t[r]=n[s+r];return t}}class At extends fn{static interpolate(e,t,n,i){const s=this.values,r=this.valueSize,o=r*e;for(let l=0;l<r;l++)i[l]=s[o+l];return i}}class mi extends fn{static interpolate(e,t,n,i){const s=this.values,r=this.valueSize,o=e*r,l=(e+1)*r;let c,h;for(let u=0;u<r;u++)c=s[o+u],h=s[l+u],c!==void 0&&h!==void 0?i[u]=c*(1-t)+h*t:i[u]=c;return i}}class gi extends fn{static interpolate(e,t,n,i){const s=this.values,r=this.valueSize;return We.slerpFlat(i,0,s,e*r,s,(e+1)*r,t),i}}class Ks extends fn{static getValueSize(){return this.values.length/this.times.length/3}static interpolate(e,t,n,i){const s=this.values,r=this.valueSize,o=r*2,l=r*3,c=t*t,h=c*t,u=e*l,f=u+l,d=-2*h+3*c,_=h-c,p=1-d,m=_-c+t;for(let g=0;g<r;g++){const v=s[u+g+r],x=s[u+g+o]*n,T=s[f+g+r],E=s[f+g]*n;i[g]=p*v+m*x+d*T+_*E}return i}static copyValue(e,t){const n=this.values,i=this.valueSize,s=i*e*3+i;for(let r=0;r<i;r++)t[r]=n[s+r];return t}}class Vr extends Ks{static interpolate(e,t,n,i){const s=super.interpolate(e,t,n,i);return Wr.fromArray(s).normalize().toArray(s),s}}const Wr=new We;class Et{constructor(e,t,n,i,s=mi){this.target=e,this.propertyPath=t,this.name=this.target.uuid+"."+t,this.times=n,this.values=i,this.valueSize=0,this.interpolant=null,s===!0?s=mi:s===!1&&(s=At),this.setInterpolant(s)}setInterpolant(e){return this.valueSize=e.getValueSize.call(this),this.interpolant=e,this}getValue(e,t){const n=this.interpolant,i=this.times,s=i.length;if(e<=i[0])return n.copyValue.call(this,0,t);if(e>=i[s-1])return n.copyValue.call(this,s-1,t);let r=s-1;for(;e<i[r]&&r>0;)r--;const o=i[r+1]-i[r],l=(e-i[r])/o;return n.interpolate.call(this,r,l,o,t)}}class Qr extends Et{constructor(e,t,n,i,s=At){s===!0&&(s=At),super(e,t,n,i,s)}}Qr.prototype.valueTypeName="bool";class Yr extends Et{constructor(e,t,n,i,s){super(e,t,n,i,s)}}Yr.prototype.valueTypeName="color";class $s extends Et{constructor(e,t,n,i,s){super(e,t,n,i,s)}}$s.prototype.valueTypeName="number";class xi extends Et{constructor(e,t,n,i,s=gi){s===!0&&(s=gi),super(e,t,n,i,s)}}xi.prototype.valueTypeName="quaternion";class qr extends Et{constructor(e,t,n,i,s=At){s===!0&&(s=At),super(e,t,n,i,s)}}qr.prototype.valueTypeName="string";class Js extends Et{constructor(e,t,n,i,s){super(e,t,n,i,s)}}Js.prototype.valueTypeName="vector";const Pe={BASIC:"basic",LAMBERT:"lambert",PHONG:"phong",PBR:"pbr",PBR2:"pbr2",POINT:"point",LINE:"line",SHADER:"shader",DEPTH:"depth",DISTANCE:"distance"},Ne={NONE:"none",NORMAL:"normal",ADD:"add",SUB:"sub",MUL:"mul",CUSTOM:"custom"},Le={ADD:100,SUBTRACT:101,REVERSE_SUBTRACT:102,MIN:103,MAX:104},fe={ZERO:200,ONE:201,SRC_COLOR:202,SRC_ALPHA:203,SRC_ALPHA_SATURATE:204,DST_COLOR:205,DST_ALPHA:206,ONE_MINUS_SRC_COLOR:207,ONE_MINUS_SRC_ALPHA:208,ONE_MINUS_DST_COLOR:209,ONE_MINUS_DST_ALPHA:210},ot={NONE:"none",FRONT:"front",BACK:"back",FRONT_AND_BACK:"front_and_back"},oe={FRONT:"front",BACK:"back",DOUBLE:"double"},xt={SMOOTH_SHADING:"smooth_shading",FLAT_SHADING:"flat_shading"},y={DEPTH_COMPONENT:1e3,DEPTH_STENCIL:1001,STENCIL_INDEX8:1002,ALPHA:1003,RED:1004,RGB:1005,RGBA:1006,LUMINANCE:1007,LUMINANCE_ALPHA:1008,RED_INTEGER:1010,RG:1011,RG_INTEGER:1012,RGB_INTEGER:1013,RGBA_INTEGER:1014,R32F:1100,R16F:1101,R8:1102,RG32F:1103,RG16F:1104,RG8:1105,RGB32F:1106,RGB16F:1107,RGB8:1108,RGBA32F:1109,RGBA16F:1110,RGBA8:1111,RGBA4:1112,RGB5_A1:1113,DEPTH_COMPONENT32F:1114,DEPTH_COMPONENT24:1115,DEPTH_COMPONENT16:1116,DEPTH24_STENCIL8:1117,DEPTH32F_STENCIL8:1118,RGB_S3TC_DXT1:1200,RGBA_S3TC_DXT1:1201,RGBA_S3TC_DXT3:1202,RGBA_S3TC_DXT5:1203,RGB_PVRTC_4BPPV1:1204,RGB_PVRTC_2BPPV1:1205,RGBA_PVRTC_4BPPV1:1206,RGBA_PVRTC_2BPPV1:1207,RGB_ETC1:1208,RGBA_ASTC_4x4:1209,RGBA_BPTC:1210},F={UNSIGNED_BYTE:1500,UNSIGNED_SHORT_5_6_5:1501,UNSIGNED_SHORT_4_4_4_4:1502,UNSIGNED_SHORT_5_5_5_1:1503,UNSIGNED_SHORT:1504,UNSIGNED_INT:1505,UNSIGNED_INT_24_8:1506,FLOAT:1507,HALF_FLOAT:1508,FLOAT_32_UNSIGNED_INT_24_8_REV:1509,BYTE:1510,SHORT:1511,INT:1512},N={NEAREST:1600,LINEAR:1601,NEAREST_MIPMAP_NEAREST:1602,LINEAR_MIPMAP_NEAREST:1603,NEAREST_MIPMAP_LINEAR:1604,LINEAR_MIPMAP_LINEAR:1605},q={REPEAT:1700,CLAMP_TO_EDGE:1701,MIRRORED_REPEAT:1702},Tt={LEQUAL:515,GEQUAL:518,LESS:513,GREATER:516,EQUAL:514,NOTEQUAL:517,ALWAYS:519,NEVER:512},Tn={KEEP:7680,REPLACE:7681,INCR:7682,DECR:7683,INVERT:5386,INCR_WRAP:34055,DECR_WRAP:34056},de={HARD:"hard",POISSON_SOFT:"poisson_soft",PCF3_SOFT:"pcf3_soft",PCF5_SOFT:"pcf5_soft",PCSS16_SOFT:"pcss16_soft",PCSS32_SOFT:"pcss32_soft",PCSS64_SOFT:"pcss64_soft"},Te={LINEAR:"linear",SRGB:"sRGB",GAMMA:"Gamma"},jr={MULTIPLY:"ENVMAP_BLENDING_MULTIPLY",MIX:"ENVMAP_BLENDING_MIX",ADD:"ENVMAP_BLENDING_ADD"},Ut={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},$e={NONE:0,RGB:1,RGBA:2},M={COLOR_ATTACHMENT0:2e3,COLOR_ATTACHMENT1:2001,COLOR_ATTACHMENT2:2002,COLOR_ATTACHMENT3:2003,COLOR_ATTACHMENT4:2004,COLOR_ATTACHMENT5:2005,COLOR_ATTACHMENT6:2006,COLOR_ATTACHMENT7:2007,COLOR_ATTACHMENT8:2008,COLOR_ATTACHMENT9:2009,COLOR_ATTACHMENT10:2010,COLOR_ATTACHMENT11:2011,COLOR_ATTACHMENT12:2012,COLOR_ATTACHMENT13:2013,COLOR_ATTACHMENT14:2014,COLOR_ATTACHMENT15:2015,DEPTH_ATTACHMENT:2020,STENCIL_ATTACHMENT:2021,DEPTH_STENCIL_ATTACHMENT:2030},Zr={STREAM_DRAW:35040,STREAM_READ:35041,STREAM_COPY:35042,STATIC_DRAW:35044,STATIC_READ:35045,STATIC_COPY:35046,DYNAMIC_DRAW:35048,DYNAMIC_READ:35049,DYNAMIC_COPY:35050},vn={ANY_SAMPLES_PASSED:7e3,ANY_SAMPLES_PASSED_CONSERVATIVE:7001,TIME_ELAPSED:7002};class Ot{addEventListener(e,t,n){this._eventMap===void 0&&(this._eventMap={});const i=this._eventMap;i[e]===void 0&&(i[e]=[]),i[e].push({listener:t,thisObject:n||this})}removeEventListener(e,t,n){if(this._eventMap===void 0)return;const s=this._eventMap[e];if(s!==void 0)for(let r=0,o=s.length;r<o;r++){const l=s[r];if(l.listener===t&&l.thisObject===(n||this)){s.splice(r,1);break}}}dispatchEvent(e){if(this._eventMap===void 0)return;const n=this._eventMap[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,r=i.length;s<r;s++){const o=i[s];o.listener.call(o.thisObject,e)}e.target=null}}}class Kr{constructor(e,t,n=-1){this.name=e,this.tracks=t,this.duration=n,this.duration<0&&this.resetDuration()}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n<i;n++){const s=e[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}}class $r{constructor(e,t,n){this.isLoading=!1,this.itemsLoaded=0,this.itemsTotal=0,this.urlModifier=void 0,this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n}itemStart(e){this.itemsTotal++,this.isLoading===!1&&this.onStart!==void 0&&this.onStart(e,this.itemsLoaded,this.itemsTotal),this.isLoading=!0}itemEnd(e){this.itemsLoaded++,this.onProgress!==void 0&&this.onProgress(e,this.itemsLoaded,this.itemsTotal),this.itemsLoaded===this.itemsTotal&&(this.isLoading=!1,this.onLoad!==void 0&&this.onLoad())}itemError(e){this.onError!==void 0&&this.onError(e)}resolveURL(e){return this.urlModifier?this.urlModifier(e):e}setURLModifier(e){return this.urlModifier=e,this}}const er=new $r;class Bt{constructor(e){this.manager=e!==void 0?e:er,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setRequestHeader(e){return this.requestHeader=e,this}}class ln extends Bt{constructor(e){super(e),this.responseType=void 0,this.mimeType=void 0}load(e,t,n,i){e===void 0&&(e=""),this.path!=null&&(e=this.path+e),e=this.manager.resolveURL(e);const s=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),r=this.mimeType,o=this.responseType;fetch(s).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("t3d.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const c=l.body.getReader(),h=l.headers.get("Content-Length"),u=h?parseInt(h):0,f=u!==0;let d=0;const _=new ReadableStream({start(p){m();function m(){c.read().then(({done:g,value:v})=>{g?p.close():(d+=v.byteLength,n!==void 0&&n(new ProgressEvent("progress",{lengthComputable:f,loaded:d,total:u})),p.enqueue(v),m())})}}});return new Response(_)}else throw new Jr(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(o){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(c=>new DOMParser().parseFromString(c,r));case"json":return l.json();default:if(r===void 0)return l.text();{const h=/charset="?([^;"\s]*)"?/i.exec(r),u=h&&h[1]?h[1].toLowerCase():void 0,f=new TextDecoder(u);return l.arrayBuffer().then(d=>f.decode(d))}}}).then(l=>{t&&t(l)}).catch(l=>{i&&i(l),this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class Jr extends Error{constructor(e,t){super(e),this.response=t}}class ea extends Bt{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,r=document.createElementNS("http://www.w3.org/1999/xhtml","img");function o(){c(),t&&t(this),s.manager.itemEnd(e)}function l(h){c(),i&&i(h),s.manager.itemError(e),s.manager.itemEnd(e)}function c(){r.removeEventListener("load",o,!1),r.removeEventListener("error",l,!1)}return r.addEventListener("load",o,!1),r.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(r.crossOrigin=this.crossOrigin),s.manager.itemStart(e),r.src=e,r}}class z{constructor(e=0,t=0){this.x=e,this.y=t}set(e=0,t=0){return this.x=e,this.y=t,this}lerpVectors(e,t,n){return this.subVectors(t,e).multiplyScalar(n).add(e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}getLength(){return Math.sqrt(this.getLengthSquared())}getLengthSquared(){return this.x*this.x+this.y*this.y}normalize(e=1){const t=this.getLength()||1,n=e/t;return this.x*=n,this.y*=n,this}subtract(e,t=new z){return t.set(this.x-e.x,this.y-e.y)}sub(e){return this.x-=e.x,this.y-=e.y,this}copy(e){return this.x=e.x,this.y=e.y,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}add(e){return this.x+=e.x,this.y+=e.y,this}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}clone(){return new z(this.x,this.y)}}const Fe=[new A,new A,new A,new A,new A,new A,new A,new A];class St{constructor(e,t){this.min=e!==void 0?e:new A(1/0,1/0,1/0),this.max=t!==void 0?t:new A(-1/0,-1/0,-1/0)}set(e,t){this.min.copy(e),this.max.copy(t)}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByBox3(e){return this.min.min(e.min),this.max.max(e.max),this}setFromArray(e,t=3,n=0){let i=1/0,s=1/0,r=1/0,o=-1/0,l=-1/0,c=-1/0;for(let h=0,u=e.length;h<u;h+=t){const f=e[h+n],d=e[h+n+1],_=e[h+n+2];f<i&&(i=f),d<s&&(s=d),_<r&&(r=_),f>o&&(o=f),d>l&&(l=d),_>c&&(c=_)}return this.min.set(i,s,r),this.max.set(o,l,c),this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}getCenter(e=new A){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e=new A){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Fe[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Fe[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Fe[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Fe[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Fe[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Fe[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Fe[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Fe[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Fe),this)}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(wt),Qt.subVectors(this.max,wt),lt.subVectors(e.a,wt),ct.subVectors(e.b,wt),ut.subVectors(e.c,wt),ze.subVectors(ct,lt),He.subVectors(ut,ct),je.subVectors(lt,ut);let t=[0,-ze.z,ze.y,0,-He.z,He.y,0,-je.z,je.y,ze.z,0,-ze.x,He.z,0,-He.x,je.z,0,-je.x,-ze.y,ze.x,0,-He.y,He.x,0,-je.y,je.x,0];return!En(t,lt,ct,ut,Qt)||(t=[1,0,0,0,1,0,0,0,1],!En(t,lt,ct,ut,Qt))?!1:(Yt.crossVectors(ze,He),t=[Yt.x,Yt.y,Yt.z],En(t,lt,ct,ut,Qt))}clone(){return new St().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}}const lt=new A,ct=new A,ut=new A,ze=new A,He=new A,je=new A,wt=new A,Qt=new A,Yt=new A,Ze=new A;function En(a,e,t,n,i){for(let s=0,r=a.length-3;s<=r;s+=3){Ze.fromArray(a,s);const o=i.x*Math.abs(Ze.x)+i.y*Math.abs(Ze.y)+i.z*Math.abs(Ze.z),l=e.dot(Ze),c=t.dot(Ze),h=n.dot(Ze);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}class pe{constructor(e,t,n){if(this.r=0,this.g=0,this.b=0,t===void 0&&n===void 0)return this.setHex(e);this.setRGB(e,t,n)}lerpColors(e,t,n){this.r=n*(t.r-e.r)+e.r,this.g=n*(t.g-e.g)+e.g,this.b=n*(t.b-e.b)+e.b}lerp(e,t){this.lerpColors(this,e,t)}clone(){return new pe(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}setHex(e){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,this}getHex(){return Mn(this.r*255,0,255)<<16^Mn(this.g*255,0,255)<<8^Mn(this.b*255,0,255)<<0}setRGB(e,t,n){return this.r=e,this.g=t,this.b=n,this}setHSL(e,t,n){if(e=ta(e,1),t=Math.max(0,Math.min(1,t)),n=Math.max(0,Math.min(1,n)),t===0)this.r=this.g=this.b=n;else{const i=n<=.5?n*(1+t):n+t-n*t,s=2*n-i;this.r=Sn(s,i,e+1/3),this.g=Sn(s,i,e),this.b=Sn(s,i,e-1/3)}return this}convertSRGBToLinear(){return this.r=yn(this.r),this.g=yn(this.g),this.b=yn(this.b),this}convertLinearToSRGB(){return this.r=Pn(this.r),this.g=Pn(this.g),this.b=Pn(this.b),this}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}}function ta(a,e){return(a%e+e)%e}function Sn(a,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?a+(e-a)*6*t:t<1/2?e:t<2/3?a+(e-a)*6*(2/3-t):a}function Mn(a,e,t){return Math.max(e,Math.min(t,a))}function yn(a){return a<.04045?a*.0773993808:Math.pow(a*.9478672986+.0521327014,2.4)}function Pn(a){return a<.0031308?a*12.92:1.055*Math.pow(a,.41666)-.055}const Xi=new B;class vt{constructor(e=0,t=0,n=0,i=vt.DefaultOrder){this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this.onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this.onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this.onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this.onChangeCallback()}clone(){return new vt(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this.onChangeCallback(),this}set(e=0,t=0,n=0,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this.onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],r=i[4],o=i[8],l=i[1],c=i[5],h=i[9],u=i[2],f=i[6],d=i[10];return t==="XYZ"?(this._y=Math.asin(ht(o,-1,1)),Math.abs(o)<.99999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-r,s)):(this._x=Math.atan2(f,c),this._z=0)):t==="YXZ"?(this._x=Math.asin(-ht(h,-1,1)),Math.abs(h)<.99999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0)):t==="ZXY"?(this._x=Math.asin(ht(f,-1,1)),Math.abs(f)<.99999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-r,c)):(this._y=0,this._z=Math.atan2(l,s))):t==="ZYX"?(this._y=Math.asin(-ht(u,-1,1)),Math.abs(u)<.99999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-r,c))):t==="YZX"?(this._z=Math.asin(ht(l,-1,1)),Math.abs(l)<.99999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(o,d))):t==="XZY"?(this._z=Math.asin(-ht(r,-1,1)),Math.abs(r)<.99999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,d),this._y=0)):console.warn("given unsupported order: "+t),this._order=t,n===!0&&this.onChangeCallback(),this}setFromQuaternion(e,t,n){return e.toMatrix4(Xi),this.setFromRotationMatrix(Xi,t,n)}onChange(e){return this.onChangeCallback=e,this}onChangeCallback(){}}vt.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];vt.DefaultOrder="XYZ";function ht(a,e,t){return Math.max(e,Math.min(t,a))}class Je{constructor(){this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,n,i,s,r,o,l,c){const h=this.elements;return h[0]=e,h[3]=t,h[6]=n,h[1]=i,h[4]=s,h[7]=r,h[2]=o,h[5]=l,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1)}inverse(){return this.getInverse(this)}getInverse(e){const t=e.elements,n=this.elements,i=t[0],s=t[1],r=t[2],o=t[3],l=t[4],c=t[5],h=t[6],u=t[7],f=t[8],d=f*l-c*u,_=c*h-f*o,p=u*o-l*h,m=i*d+s*_+r*p;if(m===0)return console.warn("Matrix3: .getInverse() can not invert matrix, determinant is 0"),this.identity();const g=1/m;return n[0]=d*g,n[1]=(r*u-f*s)*g,n[2]=(c*s-r*l)*g,n[3]=_*g,n[4]=(f*i-r*h)*g,n[5]=(r*o-c*i)*g,n[6]=p*g,n[7]=(s*h-u*i)*g,n[8]=(l*i-s*o)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new Je().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,r=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],d=n[5],_=n[8],p=i[0],m=i[3],g=i[6],v=i[1],x=i[4],T=i[7],E=i[2],P=i[5],C=i[8];return s[0]=r*p+o*v+l*E,s[3]=r*m+o*x+l*P,s[6]=r*g+o*T+l*C,s[1]=c*p+h*v+u*E,s[4]=c*m+h*x+u*P,s[7]=c*g+h*T+u*C,s[2]=f*p+d*v+_*E,s[5]=f*m+d*x+_*P,s[8]=f*g+d*T+_*C,this}transform(e,t,n,i,s,r,o){const l=this.elements,c=Math.cos(s),h=Math.sin(s);return l[0]=c*n,l[3]=-h*i,l[6]=e,l[1]=h*n,l[4]=c*i,l[7]=t,l[2]=0,l[5]=0,l[8]=1,(r||o)&&(l[6]-=r*l[0]+o*l[3],l[7]-=r*l[1]+o*l[4]),this}setUvTransform(e,t,n,i,s,r,o){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*r+c*o)+r+e,-i*c,i*l,-i*(-c*r+l*o)+o+t,0,0,1)}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10])}}const Vi=new A,na=new A,ia=new Je;class Ie{constructor(e=new A(1,0,0),t=0){this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Vi.subVectors(n,t).cross(na.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}normalize(){const e=1/this.normal.getLength();return this.normal.multiplyScalar(e),this.constant*=e,this}distanceToPoint(e){return this.normal.dot(e)+this.constant}coplanarPoint(e=new A){return e.copy(this.normal).multiplyScalar(-this.constant)}clone(){return new Ie().copy(this)}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}applyMatrix4(e,t){const n=t||ia.setFromMatrix4(e).inverse().transpose(),i=this.coplanarPoint(Vi).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}}const qt=new A;class sa{constructor(e=new Ie,t=new Ie,n=new Ie,i=new Ie,s=new Ie,r=new Ie){this.planes=[e,t,n,i,s,r]}set(e,t,n,i,s,r){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(r),this}setFromMatrix(e){const t=this.planes,n=e.elements,i=n[0],s=n[1],r=n[2],o=n[3],l=n[4],c=n[5],h=n[6],u=n[7],f=n[8],d=n[9],_=n[10],p=n[11],m=n[12],g=n[13],v=n[14],x=n[15];return t[0].setComponents(o-i,u-l,p-f,x-m).normalize(),t[1].setComponents(o+i,u+l,p+f,x+m).normalize(),t[2].setComponents(o+s,u+c,p+d,x+g).normalize(),t[3].setComponents(o-s,u-c,p-d,x-g).normalize(),t[4].setComponents(o-r,u-h,p-_,x-v).normalize(),t[5].setComponents(o+r,u+h,p+_,x+v).normalize(),this}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(qt.x=i.normal.x>0?e.max.x:e.min.x,qt.y=i.normal.y>0?e.max.y:e.min.y,qt.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(qt)<0)return!1}return!0}clone(){return new this.constructor().copy(this)}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}}const ke=new A,jt=new A,bn=new A,Zt=new A,wn=new A;class ra{constructor(e=new A,t=new A(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}at(e,t=new A){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}distanceSqToPoint(e){const t=ke.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ke.copy(this.direction).multiplyScalar(t).add(this.origin),ke.distanceToSquared(e))}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t=new A){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectsBox(e){return this.intersectBox(e,ke)!==null}intersectBox(e,t){let n,i,s,r,o,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,i=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,i=(e.min.x-f.x)*c),h>=0?(s=(e.min.y-f.y)*h,r=(e.max.y-f.y)*h):(s=(e.max.y-f.y)*h,r=(e.min.y-f.y)*h),n>r||s>i||((s>n||n!==n)&&(n=s),(r<i||i!==i)&&(i=r),u>=0?(o=(e.min.z-f.z)*u,l=(e.max.z-f.z)*u):(o=(e.max.z-f.z)*u,l=(e.min.z-f.z)*u),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}intersectSphere(e,t){ke.subVectors(e.center,this.origin);const n=ke.dot(this.direction),i=ke.dot(ke)-n*n,s=e.radius*e.radius;if(i>s)return null;const r=Math.sqrt(s-i),o=n-r,l=n+r;return o<0&&l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectTriangle(e,t,n,i,s){bn.subVectors(t,e),Zt.subVectors(n,e),wn.crossVectors(bn,Zt);let r=this.direction.dot(wn),o;if(r>0){if(i)return null;o=1}else if(r<0)o=-1,r=-r;else return null;jt.subVectors(this.origin,e);const l=o*this.direction.dot(Zt.crossVectors(jt,Zt));if(l<0)return null;const c=o*this.direction.dot(bn.cross(jt));if(c<0||l+c>r)return null;const h=-o*jt.dot(wn);return h<0?null:this.at(h/r,s)}}const aa=new St,Lt=new A;class Gt{constructor(e=new A,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromArray(e,t=3,n=0){const i=this.center;aa.setFromArray(e,t).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r+=t)Lt.fromArray(e,r+n),s=Math.max(s,i.distanceToSquared(Lt));return this.radius=Math.sqrt(s),this}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Lt.subVectors(e,this.center);const t=Lt.getLengthSquared();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Lt,i/n),this.radius+=i}return this}clone(){return new Gt().copy(this)}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}}class cn{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}clone(){return new cn().copy(this)}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.radius=e.getLength(),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e.x,e.z),this.phi=Math.acos(Math.min(1,Math.max(-1,e.y/this.radius)))),this}}class oa{constructor(){this.coefficients=[];for(let e=0;e<9;e++)this.coefficients.push(new A)}set(e){for(let t=0;t<9;t++)this.coefficients[t].copy(e[t]);return this}zero(){for(let e=0;e<9;e++)this.coefficients[e].set(0,0,0);return this}getAt(e,t){const n=e.x,i=e.y,s=e.z,r=this.coefficients;return t.copy(r[0]).multiplyScalar(.282095),t.addScaledVector(r[1],.488603*i),t.addScaledVector(r[2],.488603*s),t.addScaledVector(r[3],.488603*n),t.addScaledVector(r[4],1.092548*(n*i)),t.addScaledVector(r[5],1.092548*(i*s)),t.addScaledVector(r[6],.315392*(3*s*s-1)),t.addScaledVector(r[7],1.092548*(n*s)),t.addScaledVector(r[8],.546274*(n*n-i*i)),t}getIrradianceAt(e,t){const n=e.x,i=e.y,s=e.z,r=this.coefficients;return t.copy(r[0]).multiplyScalar(.886227),t.addScaledVector(r[1],2*.511664*i),t.addScaledVector(r[2],2*.511664*s),t.addScaledVector(r[3],2*.511664*n),t.addScaledVector(r[4],2*.429043*n*i),t.addScaledVector(r[5],2*.429043*i*s),t.addScaledVector(r[6],.743125*s*s-.247708),t.addScaledVector(r[7],2*.429043*n*s),t.addScaledVector(r[8],.429043*(n*n-i*i)),t}add(e){for(let t=0;t<9;t++)this.coefficients[t].add(e.coefficients[t]);return this}addScaledSH(e,t){for(let n=0;n<9;n++)this.coefficients[n].addScaledVector(e.coefficients[n],t);return this}scale(e){for(let t=0;t<9;t++)this.coefficients[t].multiplyScalar(e);return this}lerp(e,t){for(let n=0;n<9;n++)this.coefficients[n].lerpVectors(this.coefficients[n],e.coefficients[n],t);return this}equals(e){for(let t=0;t<9;t++)if(!this.coefficients[t].equals(e.coefficients[t]))return!1;return!0}copy(e){return this.set(e.coefficients)}clone(){return new this.constructor().copy(this)}fromArray(e,t=0){const n=this.coefficients;for(let i=0;i<9;i++)n[i].fromArray(e,t+i*3);return this}toArray(e=[],t=0){const n=this.coefficients;for(let i=0;i<9;i++)n[i].toArray(e,t+i*3);return e}static getBasisAt(e,t){const n=e.x,i=e.y,s=e.z;t[0]=.282095,t[1]=.488603*i,t[2]=.488603*s,t[3]=.488603*n,t[4]=1.092548*n*i,t[5]=1.092548*i*s,t[6]=.315392*(3*s*s-1),t[7]=1.092548*n*s,t[8]=.546274*(n*n-i*i)}}const Ke=new A,Nt=new A,Ln=new A,Ct=new A;class tr{constructor(e=new A,t=new A,n=new A){this.a=e,this.b=t,this.c=n}static normal(e,t,n,i){const s=i||new A;s.subVectors(n,t),Ke.subVectors(e,t),s.cross(Ke);const r=s.getLengthSquared();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static barycoordFromPoint(e,t,n,i,s){Ke.subVectors(i,t),Nt.subVectors(n,t),Ln.subVectors(e,t);const r=Ke.dot(Ke),o=Ke.dot(Nt),l=Ke.dot(Ln),c=Nt.dot(Nt),h=Nt.dot(Ln),u=r*c-o*o,f=s||new A;if(u===0)return f.set(-2,-1,-1);const d=1/u,_=(c*l-o*h)*d,p=(r*h-o*l)*d;return f.set(1-_-p,p,_)}static containsPoint(e,t,n,i){return this.barycoordFromPoint(e,t,n,i,Ct),Ct.x>=0&&Ct.y>=0&&Ct.x+Ct.y<=1}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}}class me{constructor(e=0,t=0,n=0,i=1){this.x=e,this.y=t,this.z=n,this.w=i}lerpVectors(e,t,n){return this.subVectors(t,e).multiplyScalar(n).add(e)}set(e=0,t=0,n=0,i=1){return this.x=e,this.y=t,this.z=n,this.w=i,this}normalize(){return this.multiplyScalar(1/(this.getLength()||1))}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}getLengthSquared(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}getLength(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}getManhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i+r[12]*s,this.y=r[1]*t+r[5]*n+r[9]*i+r[13]*s,this.z=r[2]*t+r[6]*n+r[10]*i+r[14]*s,this.w=r[3]*t+r[7]*n+r[11]*i+r[15]*s,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}clone(){return new me(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}}const te=[];for(let a=0;a<256;a++)te[a]=(a<16?"0":"")+a.toString(16);function yi(){const a=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(te[a&255]+te[a>>8&255]+te[a>>16&255]+te[a>>24&255]+"-"+te[e&255]+te[e>>8&255]+"-"+te[e>>16&15|64]+te[e>>24&255]+"-"+te[t&63|128]+te[t>>8&255]+"-"+te[t>>16&255]+te[t>>24&255]+te[n&255]+te[n>>8&255]+te[n>>16&255]+te[n>>24&255]).toUpperCase()}function un(a){return(a&a-1)===0&&a!==0}function Wi(a){return Math.pow(2,Math.round(Math.log(a)/Math.LN2))}function la(a){return a--,a|=a>>1,a|=a>>2,a|=a>>4,a|=a>>8,a|=a>>16,a++,a}function nr(a){const e={};for(const t in a){const n=a[t];Array.isArray(n)||ArrayBuffer.isView(n)?e[t]=n.slice():e[t]=n}return e}function ir(a){const e=Array.isArray(a)?[]:{};if(a&&typeof a=="object")for(const t in a)a.hasOwnProperty(t)&&(e[t]=a[t]&&typeof a[t]=="object"?ir(a[t]):a[t]);return e}let ca=0;const Qi=new B;class ve{constructor(){this.id=ca++,this.uuid=yi(),this.name="",this.position=new A,this.scale=new A(1,1,1),this.euler=new vt,this.quaternion=new We;const e=this.euler,t=this.quaternion;e.onChange(function(){t.setFromEuler(e,!1)}),t.onChange(function(){e.setFromQuaternion(t,void 0,!1)}),this.matrix=new B,this.worldMatrix=new B,this.children=new Array,this.parent=null,this.castShadow=!1,this.receiveShadow=!1,this.shadowType=de.PCF3_SOFT,this.frustumCulled=!0,this.visible=!0,this.renderOrder=0,this.renderLayer=0,this.renderable=!0,this.userData={},this.matrixAutoUpdate=!0,this.matrixNeedsUpdate=!0,this.worldMatrixNeedsUpdate=!0}onBeforeRender(){}onAfterRender(){}add(e){if(e===this){console.error("Object3D.add: object can't be added as a child of itself.",e);return}e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.worldMatrixNeedsUpdate=!0}remove(e){const t=this.children.indexOf(e);t!==-1&&(e.parent=null,this.children.splice(t,1),e.worldMatrixNeedsUpdate=!0)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}updateMatrix(e){if((this.matrixAutoUpdate||this.matrixNeedsUpdate)&&(this.matrix.transform(this.position,this.scale,this.quaternion),this.matrixNeedsUpdate=!1,this.worldMatrixNeedsUpdate=!0),this.worldMatrixNeedsUpdate||e){if(this.worldMatrix.copy(this.matrix),this.parent){const n=this.parent.worldMatrix;this.worldMatrix.premultiply(n)}this.worldMatrixNeedsUpdate=!1,e=!0}const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrix(e)}getWorldDirection(e=new A){const t=this.worldMatrix.elements;return e.set(t[8],t[9],t[10]).normalize()}lookAt(e,t){Qi.lookAtRH(e,this.position,t),this.quaternion.setFromRotationMatrix(Qi)}raycast(e,t){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.position.copy(e.position),this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.worldMatrix.copy(e.worldMatrix),this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.shadowType=e.shadowType,this.frustumCulled=e.frustumCulled,this.visible=e.visible,this.renderOrder=e.renderOrder,this.renderLayer=e.renderLayer,this.renderable=e.renderable,this.userData=ir(e.userData),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}const Rt=new A,Nn=[],Cn=[],Rn=[];let ua=0;class ha{constructor(){this.id=ua++,this.version=0,this.lights=[],this.ambient=new Float32Array([0,0,0]),this.sh=new Float32Array(27),this.hemisphere=[],this.directional=[],this.directionalShadow=[],this.directionalShadowMap=[],this.directionalShadowDepthMap=[],this.directionalShadowMatrix=new Float32Array(0),this.point=[],this.pointShadow=[],this.pointShadowMap=[],this.pointShadowMatrix=new Float32Array(0),this.spot=[],this.spotShadow=[],this.spotShadowMap=[],this.spotShadowDepthMap=[],this.spotShadowMatrix=new Float32Array(0),this.useAmbient=!1,this.useSphericalHarmonics=!1,this.hemisNum=0,this.directsNum=0,this.pointsNum=0,this.spotsNum=0,this.directShadowNum=0,this.pointShadowNum=0,this.spotShadowNum=0,this.totalNum=0,this.shadowsNum=0,this.hash=new fa}begin(){this.totalNum=0,this.shadowsNum=0}push(e){this.lights[this.totalNum++]=e,Ai(e)&&this.shadowsNum++}end(e){this.lights.length=this.totalNum,this.lights.sort(da),this._setupCache(e),this.hash.update(this),this.version++}_setupCache(e){for(let s=0;s<3;s++)this.ambient[s]=0;for(let s=0;s<this.sh.length;s++)this.sh[s]=0;this.useAmbient=!1,this.useSphericalHarmonics=!1,this.hemisNum=0,this.directsNum=0,this.pointsNum=0,this.spotsNum=0,this.directShadowNum=0,this.pointShadowNum=0,this.spotShadowNum=0;for(let s=0,r=this.lights.length;s<r;s++){const o=this.lights[s];o.isAmbientLight?this._doAddAmbientLight(o):o.isHemisphereLight?this._doAddHemisphereLight(o,e):o.isDirectionalLight?this._doAddDirectLight(o,e):o.isPointLight?this._doAddPointLight(o,e):o.isSpotLight?this._doAddSpotLight(o,e):o.isSphericalHarmonicsLight&&this._doAddSphericalHarmonicsLight(o)}const t=this.directShadowNum;if(t>0){this.directionalShadowMap.length=t,this.directionalShadowDepthMap.length=t,Nn.length=t,this.directionalShadowMatrix.length!==t*16&&(this.directionalShadowMatrix=new Float32Array(t*16));for(let s=0;s<t;s++)Nn[s].toArray(this.directionalShadowMatrix,s*16)}const n=this.pointShadowNum;if(n>0){this.pointShadowMap.length=n,Cn.length=n,this.pointShadowMatrix.length!==n*16&&(this.pointShadowMatrix=new Float32Array(n*16));for(let s=0;s<n;s++)Cn[s].toArray(this.pointShadowMatrix,s*16)}const i=this.spotShadowNum;if(i>0){this.spotShadowMap.length=i,this.spotShadowDepthMap.length=i,Rn.length=i,this.spotShadowMatrix.length!==i*16&&(this.spotShadowMatrix=new Float32Array(i*16));for(let s=0;s<i;s++)Rn[s].toArray(this.spotShadowMatrix,s*16)}}_doAddAmbientLight(e){const t=e.intensity,n=e.color;this.ambient[0]+=n.r*t,this.ambient[1]+=n.g*t,this.ambient[2]+=n.b*t,this.useAmbient=!0}_doAddSphericalHarmonicsLight(e){const t=e.intensity,n=e.sh.coefficients;for(let i=0;i<n.length;i+=1)this.sh[i*3]+=n[i].x*t,this.sh[i*3+1]+=n[i].y*t,this.sh[i*3+2]+=n[i].z*t;this.useSphericalHarmonics=!0}_doAddHemisphereLight(e,t){const n=e.intensity,i=e.color,s=e.groundColor,r=t.useAnchorMatrix,o=Kt(e);o.skyColor[0]=i.r*n,o.skyColor[1]=i.g*n,o.skyColor[2]=i.b*n,o.groundColor[0]=s.r*n,o.groundColor[1]=s.g*n,o.groundColor[2]=s.b*n;const l=e.worldMatrix.elements,c=Rt.set(l[4],l[5],l[6]).normalize();r&&c.transformDirection(t.anchorMatrixInverse),c.toArray(o.direction),this.hemisphere[this.hemisNum++]=o}_doAddDirectLight(e,t){const n=e.intensity,i=e.color,s=t.useAnchorMatrix,r=Kt(e);r.color[0]=i.r*n,r.color[1]=i.g*n,r.color[2]=i.b*n;const o=e.getWorldDirection(Rt);if(s&&o.transformDirection(t.anchorMatrixInverse),o.multiplyScalar(-1).toArray(r.direction),e.castShadow){const l=e.shadow,c=In(e);c.shadowBias[0]=l.bias,c.shadowBias[1]=l.normalBias,c.shadowMapSize[0]=l.mapSize.x,c.shadowMapSize[1]=l.mapSize.y,c.shadowParams[0]=l.radius,c.shadowParams[1]=l.frustumEdgeFalloff,this.directionalShadow[this.directShadowNum++]=c,l.update(e),l.updateMatrix(),s&&l.matrix.multiply(t.anchorMatrix),this.directionalShadowMap[this.directsNum]=l.map,this.directionalShadowDepthMap[this.directsNum]=l.depthMap,Nn[this.directsNum]=l.matrix}this.directional[this.directsNum++]=r}_doAddPointLight(e,t){const n=e.intensity,i=e.color,s=e.distance,r=e.decay,o=t.useAnchorMatrix,l=Kt(e);l.color[0]=i.r*n,l.color[1]=i.g*n,l.color[2]=i.b*n,l.distance=s,l.decay=r;const c=Rt.setFromMatrixPosition(e.worldMatrix);if(o&&c.applyMatrix4(t.anchorMatrixInverse),l.position[0]=c.x,l.position[1]=c.y,l.position[2]=c.z,e.castShadow){const h=e.shadow,u=In(e);u.shadowBias[0]=h.bias,u.shadowBias[1]=h.normalBias,u.shadowMapSize[0]=h.mapSize.x,u.shadowMapSize[1]=h.mapSize.y,u.shadowParams[0]=h.radius,u.shadowParams[1]=0,u.shadowCameraRange[0]=h.cameraNear,u.shadowCameraRange[1]=h.cameraFar,this.pointShadow[this.pointShadowNum++]=u,h.update(e,0),h.matrix.makeTranslation(-c.x,-c.y,-c.z),this.pointShadowMap[this.pointsNum]=h.map,Cn[this.pointsNum]=h.matrix}this.point[this.pointsNum++]=l}_doAddSpotLight(e,t){const n=e.intensity,i=e.color,s=e.distance,r=e.decay,o=t.useAnchorMatrix,l=Kt(e);l.color[0]=i.r*n,l.color[1]=i.g*n,l.color[2]=i.b*n,l.distance=s,l.decay=r;const c=Rt.setFromMatrixPosition(e.worldMatrix);o&&c.applyMatrix4(t.anchorMatrixInverse),l.position[0]=c.x,l.position[1]=c.y,l.position[2]=c.z;const h=e.getWorldDirection(Rt);o&&h.transformDirection(t.anchorMatrixInverse),h.multiplyScalar(-1).toArray(l.direction);const u=Math.cos(e.angle),f=Math.cos(e.angle*(1-e.penumbra));if(l.coneCos=u,l.penumbraCos=f,e.castShadow){const d=e.shadow,_=In(e);_.shadowBias[0]=d.bias,_.shadowBias[1]=d.normalBias,_.shadowMapSize[0]=d.mapSize.x,_.shadowMapSize[1]=d.mapSize.y,_.shadowParams[0]=d.radius,_.shadowParams[1]=d.frustumEdgeFalloff,this.spotShadow[this.spotShadowNum++]=_,d.update(e),d.updateMatrix(),o&&d.matrix.multiply(t.anchorMatrix),this.spotShadowMap[this.spotsNum]=d.map,this.spotShadowDepthMap[this.spotsNum]=d.depthMap,Rn[this.spotsNum]=d.matrix}this.spot[this.spotsNum++]=l}}const Fn=new WeakMap;function Kt(a){if(Fn.has(a))return Fn.get(a);let e;return a.isHemisphereLight?e={direction:new Float32Array(3),skyColor:new Float32Array([0,0,0]),groundColor:new Float32Array([0,0,0])}:a.isDirectionalLight?e={direction:new Float32Array(3),color:new Float32Array([0,0,0])}:a.isPointLight?e={position:new Float32Array(3),color:new Float32Array([0,0,0]),distance:0,decay:0}:a.isSpotLight&&(e={position:new Float32Array(3),direction:new Float32Array(3),color:new Float32Array([0,0,0]),distance:0,coneCos:0,penumbraCos:0,decay:0}),Fn.set(a,e),e}const Dn=new WeakMap;function In(a){if(Dn.has(a))return Dn.get(a);let e;return a.isDirectionalLight?e={shadowBias:new Float32Array(2),shadowMapSize:new Float32Array(2),shadowParams:new Float32Array(2)}:a.isPointLight?e={shadowBias:new Float32Array(2),shadowMapSize:new Float32Array(2),shadowParams:new Float32Array(2),shadowCameraRange:new Float32Array(2)}:a.isSpotLight&&(e={shadowBias:new Float32Array(2),shadowMapSize:new Float32Array(2),shadowParams:new Float32Array(2)}),Dn.set(a,e),e}class fa{constructor(){this._factor=new Uint16Array(9)}update(e){this._factor[0]=e.useAmbient?1:0,this._factor[1]=e.useSphericalHarmonics?1:0,this._factor[2]=e.hemisNum,this._factor[3]=e.directsNum,this._factor[4]=e.pointsNum,this._factor[5]=e.spotsNum,this._factor[6]=e.directShadowNum,this._factor[7]=e.pointShadowNum,this._factor[8]=e.spotShadowNum}compare(e){if(!e)return!1;for(let t=0,n=e.length;t<n;t++)if(this._factor[t]!==e[t])return!1;return!0}copyTo(e){return e||(e=new this._factor.constructor(this._factor.length)),e.set(this._factor),e}}function da(a,e){const t=Ai(a)?1:0;return(Ai(e)?1:0)-t}function Ai(a){return a.shadow&&a.castShadow}class _a{constructor(e){this.id=e,this.opaque=[],this.opaqueCount=0,this.transparent=[],this.transparentCount=0,this._cache=[],this._cacheIndex=0,this._lastCacheIndex=0,this.opaqueSortCompareFn=pa,this.transparentSortCompareFn=ma}begin(){this._cacheIndex=0,this.opaqueCount=0,this.transparentCount=0}end(){this.opaque.length=this.opaqueCount,this.transparent.length=this.transparentCount;const e=this._cacheIndex,t=this._lastCacheIndex;if(t>e){const n=this._cache;for(let i=e;i<t;i++){const s=n[i];s.object=null,s.geometry=null,s.material=null,s.group=null}}this._lastCacheIndex=e}addRenderable(e,t,n,i,s){const r=this._cache;let o=r[this._cacheIndex];o===void 0?(o={object:e,geometry:t,material:n,z:i,renderOrder:e.renderOrder,group:s},r[this._cacheIndex]=o):(o.object=e,o.geometry=t,o.material=n,o.z=i,o.renderOrder=e.renderOrder,o.group=s),n.transparent?(this.transparent[this.transparentCount]=o,this.transparentCount++):(this.opaque[this.opaqueCount]=o,this.opaqueCount++),this._cacheIndex++}sort(){this.opaque.sort(this.opaqueSortCompareFn),Ti(this.transparent,0,this.transparent.length,this.transparentSortCompareFn)}}function pa(a,e){return a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.material.id!==e.material.id?a.material.id-e.material.id:a.id-e.id}function ma(a,e){return a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.z!==e.z?e.z-a.z:a.material.id!==e.material.id?a.material.id-e.material.id:a.id-e.id}function Ti(a,e,t,n){for(;;){if(t-e<=10){ga(a,e,t,n);return}const i=e+t>>1;let s=a[e],r=a[t-1],o=a[i];if(n(s,r)>0){const d=s;s=r,r=d}if(n(s,o)>=0){const d=s;s=o,o=r,r=d}else if(n(r,o)>0){const _=r;r=o,o=_}a[e]=s,a[t-1]=o;const h=r;let u=e+1,f=t-1;a[i]=a[u],a[u]=h;e:for(let d=u+1;d<f;d++){let _=a[d],p=n(_,h);if(p<0)a[d]=a[u],a[u]=_,u++;else if(p>0){do{if(f--,f==d)break e;const m=a[f];p=n(m,h)}while(p>0);a[d]=a[f],a[f]=_,p<0&&(_=a[d],a[d]=a[u],a[u]=_,u++)}}t-f<u-e?(Ti(a,f,t,n),t=u):(Ti(a,e,u,n),e=f)}}function ga(a,e,t,n){for(let i=e+1;i<t;i++){let s;const r=a[i];for(s=i-1;s>=e;s--){const o=a[s];if(n(o,r)>0)a[s+1]=o;else break}a[s+1]=r}}class xa{constructor(){this.layerMap=new Map,this.layerList=[],this.lightsArray=[],this.skeletons=new Set,this._lastLayer=this.createLayer(0)}begin(){for(let e=0,t=this.layerList.length;e<t;e++)this.layerList[e].begin();this.lightsArray.length=0,this.skeletons.clear()}end(){for(let e=0,t=this.layerList.length;e<t;e++)this.layerList[e].end(),this.layerList[e].sort()}push(e,t){e.skeleton&&this.skeletons.add(e.skeleton),Un.setFromMatrixPosition(e.worldMatrix),Un.applyMatrix4(t.projectionViewMatrix);const n=Un.z,i=e.renderLayer||0;let s=this._lastLayer;if(s.id!==i&&(s=this.layerMap.get(i),s||(s=this.createLayer(i)),this._lastLayer=s),Array.isArray(e.material)){const r=e.geometry.groups;for(let o=0;o<r.length;o++){const l=r[o],c=e.material[l.materialIndex];c&&s.addRenderable(e,e.geometry,c,n,l)}}else s.addRenderable(e,e.geometry,e.material,n)}pushLight(e){this.lightsArray.push(e)}setLayer(e,t){this.layerMap.set(e,t),this.layerList.push(t),this.layerList.sort(Aa)}createLayer(e){const t=new _a(e);return this.setLayer(e,t),t}getLayer(e){return this.layerMap.get(e)}removeLayer(e){const t=this.layerMap.get(e);if(t){this.layerMap.delete(e);const n=this.layerList.indexOf(t);n!==-1&&this.layerList.splice(n,1),this._lastLayer===e&&(this._lastLayer=null)}}}const Un=new A;function Aa(a,e){return a.id-e.id}const ft=new Ie;let Ta=0;class va{constructor(){this.id=Ta++,this.version=0,this.useAnchorMatrix=!1,this.anchorMatrix=new B,this.anchorMatrixInverse=new B,this.disableShadowSampler=!1,this.logarithmicDepthBuffer=!1,this.fog=null,this.environment=null,this.environmentLightIntensity=1,this.clippingPlanesData=new Float32Array([]),this.numClippingPlanes=0}update(e){this.useAnchorMatrix=!e.anchorMatrix.isIdentity(),this.anchorMatrix.copy(e.anchorMatrix),this.anchorMatrixInverse.getInverse(e.anchorMatrix),this.disableShadowSampler=e.disableShadowSampler,this.logarithmicDepthBuffer=e.logarithmicDepthBuffer,this.fog=e.fog,this.environment=e.environment,this.environmentLightIntensity=e.environmentLightIntensity,this.clippingPlanesData.length<e.clippingPlanes.length*4&&(this.clippingPlanesData=new Float32Array(e.clippingPlanes.length*4)),this.setClippingPlanesData(e.clippingPlanes,this.clippingPlanesData),this.numClippingPlanes=e.clippingPlanes.length,this.version++}setClippingPlanesData(e,t){for(let n=0;n<e.length;n++)ft.copy(e[n]),this.useAnchorMatrix&&ft.applyMatrix4(this.anchorMatrixInverse),t[n*4+0]=ft.normal.x,t[n*4+1]=ft.normal.y,t[n*4+2]=ft.normal.z,t[n*4+3]=ft.constant;return t}}function Ea(a){return a.elements[11]===-1}let Sa=0;class Ma{constructor(e,t){this.scene=e,this.lights=t,this.camera={id:Sa++,version:0,near:0,far:0,position:new A,logDepthCameraNear:0,logDepthBufFC:0,viewMatrix:new B,projectionMatrix:new B,projectionViewMatrix:new B,rect:new me(0,0,1,1)},this.gammaFactor=2,this.outputEncoding=Te.LINEAR}updateCamera(e){const t=this.scene,n=this.camera,i=e.projectionMatrix;let s=0,r=0;Ea(i)?(s=i.elements[14]/(i.elements[10]-1),r=i.elements[14]/(i.elements[10]+1)):(s=(i.elements[14]+1)/i.elements[10],r=(i.elements[14]-1)/i.elements[10]),n.near=s,n.far=r,t.logarithmicDepthBuffer?(n.logDepthCameraNear=s,n.logDepthBufFC=2/(Math.log(r-s+1)*Math.LOG2E)):(n.logDepthCameraNear=0,n.logDepthBufFC=0),n.position.setFromMatrixPosition(e.worldMatrix),t.useAnchorMatrix&&n.position.applyMatrix4(t.anchorMatrixInverse),n.viewMatrix.copy(e.viewMatrix),t.useAnchorMatrix&&n.viewMatrix.multiply(t.anchorMatrix),n.projectionMatrix.copy(i),n.projectionViewMatrix.copy(i).multiply(n.viewMatrix),n.rect.copy(e.rect),n.version++,this.gammaFactor=e.gammaFactor,this.outputEncoding=e.outputEncoding}}class Pi extends ve{constructor(){super(),this.fog=null,this.environment=null,this.environmentLightIntensity=1,this.clippingPlanes=[],this.disableShadowSampler=!1,this.logarithmicDepthBuffer=!1,this.anchorMatrix=new B,this._sceneData=new va,this._lightData=new ha,this._renderQueueMap=new WeakMap,this._renderStatesMap=new WeakMap}updateRenderStates(e,t=!0){this._renderStatesMap.has(e)||this._renderStatesMap.set(e,new Ma(this._sceneData,this._lightData));const n=this._renderStatesMap.get(e);return t&&this._sceneData.update(this),n.updateCamera(e),n}getRenderStates(e){return this._renderStatesMap.get(e)}updateRenderQueue(e,t=!0,n=!0){this._renderQueueMap.has(e)||this._renderQueueMap.set(e,new xa);const i=this._renderQueueMap.get(e);if(i.begin(),this._pushToRenderQueue(this,e,i),i.end(),t){this._lightData.begin();for(const s of i.lightsArray)this._lightData.push(s);this._lightData.end(this._sceneData)}if(n)for(const s of i.skeletons)s.updateBones(this._sceneData);return i}getRenderQueue(e){return this._renderQueueMap.get(e)}_pushToRenderQueue(e,t,n){if(!e.visible)return;e.geometry&&e.material&&e.renderable?e.frustumCulled&&t.frustumCulled?(Yi.copy(e.geometry.boundingSphere).applyMatrix4(e.worldMatrix),t.frustum.intersectsSphere(Yi)&&n.push(e,t)):n.push(e,t):e.isLight&&n.pushLight(e);const i=e.children;for(let s=0,r=i.length;s<r;s++)this._pushToRenderQueue(i[s],t,n)}}Pi.prototype.isScene=!0;const Yi=new Gt;class zt extends ve{constructor(){super(),this.viewMatrix=new B,this.projectionMatrix=new B,this.projectionMatrixInverse=new B,this.projectionViewMatrix=new B,this.frustum=new sa,this.gammaFactor=2,this.outputEncoding=Te.LINEAR,this.rect=new me(0,0,1,1),this.frustumCulled=!0}lookAt(e,t){qi.lookAtRH(this.position,e,t),this.quaternion.setFromRotationMatrix(qi)}setOrtho(e,t,n,i,s,r){this.projectionMatrix.set(2/(t-e),0,0,-(t+e)/(t-e),0,2/(i-n),0,-(i+n)/(i-n),0,0,-2/(r-s),-(r+s)/(r-s),0,0,0,1),this.projectionMatrixInverse.getInverse(this.projectionMatrix)}setPerspective(e,t,n,i){this.projectionMatrix.set(1/(t*Math.tan(e/2)),0,0,0,0,1/Math.tan(e/2),0,0,0,0,-(i+n)/(i-n),-2*i*n/(i-n),0,0,-1,0),this.projectionMatrixInverse.getInverse(this.projectionMatrix)}getWorldDirection(e=new A){return super.getWorldDirection(e).negate()}updateMatrix(e){ve.prototype.updateMatrix.call(this,e),this.viewMatrix.getInverse(this.worldMatrix),this.projectionViewMatrix.multiplyMatrices(this.projectionMatrix,this.viewMatrix),this.frustum.setFromMatrix(this.projectionViewMatrix)}copy(e,t){return ve.prototype.copy.call(this,e,t),this.viewMatrix.copy(e.viewMatrix),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.frustum.copy(e.frustum),this.gammaFactor=e.gammaFactor,this.outputEncoding=e.outputEncoding,this.rect.copy(e.rect),this.frustumCulled=e.frustumCulled,this}}zt.prototype.isCamera=!0;const qi=new B,On=new Gt,ji=new B,$t=new ra,Jt=new A,dt=new A,_t=new A,pt=new A,Zi=new A,Ki=new A,$i=new A,Bn=new A,Gn=new A,zn=new A,Ji=new A,es=new me,ts=new me,ya=new A,ns=new B,is=new z,ss=new z,rs=new z,as=new A,en=new A;class tt extends ve{constructor(e,t){super(),this.geometry=e,this.material=t,this.morphTargetInfluences=null}raycast(e,t){const n=this.geometry,i=this.worldMatrix;if(On.copy(n.boundingSphere),On.applyMatrix4(i),!e.intersectsSphere(On)||(ji.getInverse(i),$t.copy(e).applyMatrix4(ji),!$t.intersectsBox(n.boundingBox)))return;const s=n.getAttribute("a_Position");if(!s)return;const r=n.getAttribute("a_Uv"),o=n.morphAttributes.position;let l;if(n.index){const c=n.index.buffer.array;for(let h=0;h<c.length;h+=3){const u=c[h],f=c[h+1],d=c[h+2];l=os(this,e,$t,s,o,r,u,f,d),l&&(l.faceIndex=Math.floor(h/3),t.push(l))}}else for(let c=0;c<s.buffer.count;c+=3){const h=c,u=c+1,f=c+2;l=os(this,e,$t,s,o,r,h,u,f),l&&(l.faceIndex=Math.floor(c/3),t.push(l))}}copy(e){return super.copy(e),e.morphTargetInfluences&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),this}clone(){return new this.constructor(this.geometry,this.material).copy(this)}}tt.prototype.isMesh=!0;function os(a,e,t,n,i,s,r,o,l){let c,h,u;c=n.buffer.array,h=n.buffer.stride,u=n.offset,dt.fromArray(c,r*h+u),_t.fromArray(c,o*h+u),pt.fromArray(c,l*h+u);const f=a.morphTargetInfluences;if(i&&f){Bn.set(0,0,0),Gn.set(0,0,0),zn.set(0,0,0);for(let _=0;_<i.length;_++){const p=f[_],m=i[_];p!==0&&(c=m.buffer.array,h=m.buffer.stride,u=m.offset,Zi.fromArray(c,r*h+u),Ki.fromArray(c,o*h+u),$i.fromArray(c,l*h+u),Bn.addScaledVector(Zi,p),Gn.addScaledVector(Ki,p),zn.addScaledVector($i,p))}dt.add(Bn),_t.add(Gn),pt.add(zn)}a.isSkinnedMesh&&(Hn(a,r,dt),Hn(a,o,_t),Hn(a,l,pt));const d=ba(a,e,t,dt,_t,pt,as);if(d){s&&(c=s.buffer.array,h=s.buffer.stride,u=s.offset,is.fromArray(c,r*h+u),ss.fromArray(c,o*h+u),rs.fromArray(c,l*h+u),d.uv=Pa(as,dt,_t,pt,is,ss,rs));const _={a:r,b:o,c:l,normal:new A};tr.normal(dt,_t,pt,_.normal),d.face=_}return d}function Pa(a,e,t,n,i,s,r){return tr.barycoordFromPoint(a,e,t,n,Jt),i.multiplyScalar(Jt.x),s.multiplyScalar(Jt.y),r.multiplyScalar(Jt.z),i.add(s).add(r),i.clone()}function ba(a,e,t,n,i,s,r){let o;const l=a.material;return l.side===oe.BACK?o=t.intersectTriangle(s,i,n,!0,r):o=t.intersectTriangle(n,i,s,l.side!==oe.DOUBLE,r),o===null?null:(en.copy(r),en.applyMatrix4(a.worldMatrix),{distance:e.origin.distanceTo(en),point:en.clone(),object:a})}function Hn(a,e,t){const n=a.skeleton,i=a.geometry.attributes.skinIndex,s=a.geometry.attributes.skinWeight;es.fromArray(i.buffer.array,e*i.size),ts.fromArray(s.buffer.array,e*s.size),Ji.copy(t).applyMatrix4(a.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const o=ls(ts,r);if(o<Number.EPSILON)continue;const l=ls(es,r);n.bones[l]&&(ns.multiplyMatrices(n.bones[l].worldMatrix,n.boneInverses[l]),t.addScaledVector(ya.copy(Ji).applyMatrix4(ns),o))}return t.applyMatrix4(a.bindMatrixInverse)}function ls(a,e){switch(e){case 0:return a.x;case 1:return a.y;case 2:return a.z;case 3:return a.w;default:throw new Error("index is out of range: "+e)}}class ${constructor(e,t=e.stride,n=0,i=!1){this.buffer=e,this.size=t,this.offset=n,this.normalized=i,this.divisor=0}copy(e){return this.buffer=e.buffer,this.size=e.size,this.offset=e.offset,this.normalized=e.normalized,this.divisor=e.divisor,this}clone(e){let t;return e?(e.has(this.buffer)||e.set(this.buffer,this.buffer.clone()),t=new $(e.get(this.buffer),this.size,this.offset,this.normalized),t.divisor=this.divisor,t):(console.warn("t3d.Attribute.clone(): now requires a WeakMap as an argument to save shared buffers."),t=new $(this.buffer.clone(),this.size,this.offset,this.normalized),t.divisor=this.divisor,t)}}let ae=class sr{constructor(e,t){this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Zr.STATIC_DRAW,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}copy(e){return this.array=new e.array.constructor(e.array),this.stride=e.stride,this.count=e.array.length/this.stride,this.usage=e.usage,this}clone(){const e=new this.array.constructor(this.array),t=new sr(e,this.stride);return t.usage=this.usage,t}},wa=0;const Me=new A,tn=new A,cs=new A,De=new St,kn=new St;class Qe extends Ot{constructor(){super(),this.id=wa++,this.uuid=yi(),this.attributes={},this.morphAttributes={},this.index=null,this.boundingBox=new St,this.boundingSphere=new Gt,this.groups=[],this.instanceCount=-1,this.version=0}addAttribute(e,t){this.attributes[e]=t}getAttribute(e){return this.attributes[e]}removeAttribute(e){delete this.attributes[e]}setIndex(e){if(Array.isArray(e)){const t=new(La(e)>65535?Uint32Array:Uint16Array)(e);this.index=new $(new ae(t,1))}else this.index=e}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}computeBoundingBox(){const e=this.attributes.a_Position||this.attributes.position;e&&this.boundingBox.setFromArray(e.buffer.array,e.buffer.stride,e.offset);const t=this.morphAttributes.position;if(t)for(let n=0;n<t.length;n++){const i=t[n];De.setFromArray(i.buffer.array,i.buffer.stride,i.offset),Me.addVectors(this.boundingBox.min,De.min),this.boundingBox.expandByPoint(Me),Me.addVectors(this.boundingBox.max,De.max),this.boundingBox.expandByPoint(Me)}}computeBoundingSphere(){const e=this.attributes.a_Position||this.attributes.position,t=this.morphAttributes.position;if(!e)return;const n=e.buffer.stride,i=e.offset;if(t){De.setFromArray(e.buffer.array,n,i);for(let o=0;o<t.length;o++){const l=t[o];kn.setFromArray(l.buffer.array,l.buffer.stride,l.offset),Me.addVectors(De.min,kn.min),De.expandByPoint(Me),Me.addVectors(De.max,kn.max),De.expandByPoint(Me)}const s=this.boundingSphere.center;De.getCenter(s);let r=0;for(let o=0;o<e.buffer.count;o++){tn.fromArray(e.buffer.array,o*n+i),r=s.distanceToSquared(tn);for(let l=0;l<t.length;l++){const c=t[l];Me.fromArray(c.buffer.array,o*c.buffer.stride+c.offset),cs.addVectors(tn,Me);const h=s.distanceToSquared(cs);h>r&&(r=h,tn.add(Me))}}this.boundingSphere.radius=Math.sqrt(r)}else this.boundingSphere.setFromArray(e.buffer.array,n,i)}dispose(){this.dispatchEvent({type:"dispose"})}copy(e){let t,n,i;this.index=null,this.attributes={},this.morphAttributes={},this.groups=[];const s=new WeakMap,r=e.index;r!==null&&this.setIndex(r.clone(s));const o=e.attributes;for(t in o){const h=o[t];this.addAttribute(t,h.clone(s))}const l=e.morphAttributes;for(t in l){const h=[],u=l[t];for(n=0,i=u.length;n<i;n++)h.push(u[n].clone(s));this.morphAttributes[t]=h}const c=e.groups;for(n=0,i=c.length;n<i;n++){const h=c[n];this.addGroup(h.start,h.count,h.materialIndex)}return this.boundingBox.copy(e.boundingBox),this.boundingSphere.copy(e.boundingSphere),this.instanceCount=e.instanceCount,this}clone(){return new Qe().copy(this)}}function La(a){if(a.length===0)return-1/0;let e=a[0];for(let t=1,n=a.length;t<n;++t)a[t]>e&&(e=a[t]);return e}class Na extends Qe{constructor(e=1,t=1,n=1,i=1){super();const s=e/2,r=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,h=l+1,u=e/o,f=t/l;let d,_;const p=[],m=[],g=[],v=[];for(_=0;_<h;_++){const x=_*f-r;for(d=0;d<c;d++){const T=d*u-s;m.push(T,0,x),g.push(0,1,0),v.push(d/o),v.push(1-_/l)}}for(_=0;_<l;_++)for(d=0;d<o;d++){const x=d+c*_,T=d+c*(_+1),E=d+1+c*(_+1),P=d+1+c*_;p.push(x,T,P),p.push(T,E,P)}this.setIndex(new $(new ae(m.length/3>65536?new Uint32Array(p):new Uint16Array(p),1))),this.addAttribute("a_Position",new $(new ae(new Float32Array(m),3))),this.addAttribute("a_Normal",new $(new ae(new Float32Array(g),3))),this.addAttribute("a_Uv",new $(new ae(new Float32Array(v),2))),this.computeBoundingBox(),this.computeBoundingSphere()}}let Ca=0;class Oe extends Ot{constructor(){super(),this.id=Ca++,this.uuid=yi(),this.type=Pe.SHADER,this.shaderName="",this.defines={},this.uniforms={},this.vertexShader="",this.fragmentShader="",this.precision=null,this.transparent=!1,this.blending=Ne.NORMAL,this.blendSrc=fe.SRC_ALPHA,this.blendDst=fe.ONE_MINUS_SRC_ALPHA,this.blendEquation=Le.ADD,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.premultipliedAlpha=!1,this.vertexColors=$e.NONE,this.vertexTangents=!1,this.opacity=1,this.diffuse=new pe(16777215),this.diffuseMap=null,this.diffuseMapCoord=0,this.diffuseMapTransform=new Je,this.alphaMap=null,this.alphaMapCoord=0,this.alphaMapTransform=new Je,this.emissive=new pe(0),this.emissiveMap=null,this.emissiveMapCoord=0,this.emissiveMapTransform=new Je,this.aoMap=null,this.aoMapIntensity=1,this.aoMapCoord=0,this.aoMapTransform=new Je,this.normalMap=null,this.normalScale=new z(1,1),this.bumpMap=null,this.bumpScale=1,this.envMap=null,this.envMapIntensity=1,this.envMapCombine=jr.MULTIPLY,this.depthFunc=Tt.LEQUAL,this.depthTest=!0,this.depthWrite=!0,this.colorWrite=!0,this.stencilTest=!1,this.stencilWriteMask=255,this.stencilFunc=Tt.ALWAYS,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Tn.KEEP,this.stencilZFail=Tn.KEEP,this.stencilZPass=Tn.KEEP,this.stencilFuncBack=null,this.stencilRefBack=null,this.stencilFuncMaskBack=null,this.stencilFailBack=null,this.stencilZFailBack=null,this.stencilZPassBack=null,this.clippingPlanes=null,this.alphaTest=0,this.alphaToCoverage=!1,this.side=oe.FRONT,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.shading=xt.SMOOTH_SHADING,this.dithering=!1,this.acceptLight=!1,this.fog=!0,this.drawMode=Ut.TRIANGLES,this.forceUpdateUniforms=!0,this.needsUpdate=!0}copy(e){return this.shaderName=e.shaderName,this.defines=Object.assign({},e.defines),this.uniforms=nr(e.uniforms),this.vertexShader=e.vertexShader,this.fragmentShader=e.fragmentShader,this.precision=e.precision,this.transparent=e.transparent,this.blending=e.blending,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.premultipliedAlpha=e.premultipliedAlpha,this.vertexColors=e.vertexColors,this.vertexTangents=e.vertexTangents,this.opacity=e.opacity,this.diffuse.copy(e.diffuse),this.diffuseMap=e.diffuseMap,this.diffuseMapCoord=e.diffuseMapCoord,this.diffuseMapTransform.copy(e.diffuseMapTransform),this.alphaMap=e.alphaMap,this.alphaMapCoord=e.alphaMapCoord,this.alphaMapTransform.copy(e.alphaMapTransform),this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveMapCoord=e.emissiveMapCoord,this.emissiveMapTransform.copy(e.emissiveMapTransform),this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.aoMapCoord=e.aoMapCoord,this.aoMapTransform.copy(e.aoMapTransform),this.normalMap=e.normalMap,this.normalScale.copy(e.normalScale),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.envMapCombine=e.envMapCombine,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.colorWrite=e.colorWrite,this.stencilTest=e.stencilTest,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilFuncBack=e.stencilFuncBack,this.stencilRefBack=e.stencilRefBack,this.stencilFuncMaskBack=e.stencilFuncMaskBack,this.stencilFailBack=e.stencilFailBack,this.stencilZFailBack=e.stencilZFailBack,this.stencilZPassBack=e.stencilZPassBack,this.clippingPlanes=e.clippingPlanes,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.side=e.side,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.shading=e.shading,this.dithering=e.dithering,this.acceptLight=e.acceptLight,this.fog=e.fog,this.drawMode=e.drawMode,this}clone(){return new this.constructor().copy(this)}dispose(){this.dispatchEvent({type:"dispose"})}}class Ht extends Oe{constructor(e){super(),e&&(this.shaderName=e.name,Object.assign(this.defines,e.defines),this.uniforms=nr(e.uniforms),this.vertexShader=e.vertexShader,this.fragmentShader=e.fragmentShader)}}class I{constructor(e){const t=new Pi,n=this.camera=new zt;n.frustumCulled=!1,n.position.set(0,1,0),n.lookAt(new A(0,0,0),new A(0,0,-1)),n.setOrtho(-1,1,-1,1,.1,2),t.add(n);const i=this.geometry=new Na(2,2,1,1),s=this.material=new Ht(e);this.uniforms=s.uniforms;const r=new tt(i,s);r.frustumCulled=!1,t.add(r),t.updateMatrix(),this.renderStates=t.updateRenderStates(n);const o=t.updateRenderQueue(n,!1,!1);this.renderQueueLayer=o.layerList[0],this.renderConfig={}}render(e){e.beginRender(),e.renderRenderableList(this.renderQueueLayer.opaque,this.renderStates,this.renderConfig),e.endRender()}dispose(){this.geometry.dispose(),this.material.dispose()}}class Ra extends Oe{constructor(){super(),this.type=Pe.DEPTH,this.packToRGBA=!1}}class Fa extends Oe{constructor(){super(),this.type=Pe.DISTANCE}}class Wh{constructor(){this.getDepthMaterial=Da,this.getDistanceMaterial=Ia,this.shadowLayers=null,this.transparentShadow=!1;const e={isPointLight:!1,light:null};this._state=e;const t=this;this._renderOptions={getGeometry:null,getMaterial:function(n){return e.isPointLight?t.getDistanceMaterial(n,e.light):t.getDepthMaterial(n,e.light)},ifRender:function(n){return n.object.castShadow}}}set getGeometry(e){e?this._renderOptions.getGeometry=e:delete this._renderOptions.getGeometry}get getGeometry(){return this._renderOptions.getGeometry}set ifRender(e){e?this._renderOptions.ifRender=e:delete this._renderOptions.ifRender}get ifRender(){return this._renderOptions.ifRender}render(e,t){Ft.copy(e.getClearColor()),e.setClearColor(1,1,1,1);const n=t._lightData.lights,i=t._lightData.shadowsNum;for(let s=0;s<i;s++){const r=n[s],o=r.shadow;if(o.autoUpdate===!1&&o.needsUpdate===!1)continue;const l=o.camera,c=o.renderTarget,h=r.isPointLight,u=h?6:1;this._state.isPointLight=h,this._state.light=r;const f=this._renderOptions;o.prepareDepthMap(!t.disableShadowSampler,e.capabilities);for(let d=0;d<u;d++){h&&(o.update(r,d),c.activeCubeFace=d),e.setRenderTarget(c),e.clear(!0,!0);const _=t.updateRenderStates(l,d===0),p=t.updateRenderQueue(l,!1,!1);e.beginRender();for(let m=0;m<p.layerList.length;m++){const g=p.layerList[m];this.shadowLayers!==null&&this.shadowLayers.indexOf(g.id)===-1||(e.renderRenderableList(g.opaque,_,f),this.transparentShadow&&e.renderRenderableList(g.transparent,_,f))}e.endRender()}o.needsUpdate=!1}e.setClearColor(Ft.x,Ft.y,Ft.z,Ft.w)}}const Ft=new me,rr={front:oe.BACK,back:oe.FRONT,double:oe.DOUBLE},us={},hs={};function Da(a,e){const t=!!a.object.skeleton,n=a.geometry.morphAttributes.position&&a.geometry.morphAttributes.position.length>0,i=a.material.clippingPlanes,s=i&&i.length>0?i.length:0,r=n<<0|t<<1;let o=us[r];o===void 0&&(o={},us[r]=o);let l=o[s];return l===void 0&&(l=new Ra,l.packToRGBA=!0,o[s]=l),l.side=rr[a.material.side],l.clippingPlanes=a.material.clippingPlanes,l.drawMode=a.material.drawMode,l}function Ia(a,e){const t=!!a.object.skeleton,n=a.geometry.morphAttributes.position&&a.geometry.morphAttributes.position.length>0,i=a.material.clippingPlanes,s=i&&i.length>0?i.length:0,r=n<<0|t<<1;let o=hs[r];o===void 0&&(o={},hs[r]=o);let l=o[s];return l===void 0&&(l=new Fa,o[s]=l),l.side=rr[a.material.side],l.uniforms.nearDistance=e.shadow.cameraNear,l.uniforms.farDistance=e.shadow.cameraFar,l.clippingPlanes=a.material.clippingPlanes,l.drawMode=a.material.drawMode,l}class Ye{constructor(e){this._key=e+"$",this._count=0}get(e){const t=this._key;let n=e[t];return n===void 0&&(n={},e[t]=n,this._count++),n}delete(e){const t=this._key;e[t]&&(this._count--,delete e[t])}size(){return this._count}}let fs=0;class Ua{constructor(e){this.id=fs++,this.context=e,this.capabilities={},this.shaderCompileOptions={checkErrors:!0,compileAsynchronously:!1},this._passInfo={enabled:!1,count:0}}beginRender(){this._passInfo.enabled=!0}endRender(){this._passInfo.enabled=!1,this._passInfo.count++}renderRenderableItem(e,t,n){}renderRenderableList(e,t,n={}){for(let i=0,s=e.length;i<s;i++)this.renderRenderableItem(e[i],t,n)}renderScene(e,t,n={}){const i=e.getRenderStates(t),s=e.getRenderQueue(t);this.beginRender();let r;for(let o=0,l=s.layerList.length;o<l;o++)r=s.layerList[o],this.renderRenderableList(r.opaque,i,n),this.renderRenderableList(r.transparent,i,n);this.endRender()}clear(e,t,n){}setClearColor(e,t,n,i,s){}getClearColor(){}setRenderTarget(e){}getRenderTarget(){}blitRenderTarget(e,t,n=!0,i=!0,s=!0){}readRenderTargetPixels(e,t,n,i,s){}updateRenderTargetMipmap(e){}setTextureExternal(e,t){}setRenderBufferExternal(e,t){}setBufferExternal(e,t){}resetVertexArrayBindings(e){}resetState(){}beginQuery(e,t){}endQuery(e){}queryCounter(e){}isTimerQueryDisjoint(e){}isQueryResultAvailable(e){}getQueryResult(e){}increaseId(){return this.id=fs++,this.id}}class Oa extends Qe{constructor(e=1,t=1,n=1,i=1,s=1,r=1){super();const o=this;i=Math.floor(i),s=Math.floor(s),r=Math.floor(r);const l=[],c=[],h=[],u=[];let f=0,d=0;_("z","y","x",-1,-1,n,t,e,r,s,0),_("z","y","x",1,-1,n,t,-e,r,s,1),_("x","z","y",1,1,e,n,t,i,r,2),_("x","z","y",1,-1,e,n,-t,i,r,3),_("x","y","z",1,-1,e,t,n,i,s,4),_("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(new $(new ae(c.length/3>65536?new Uint32Array(l):new Uint16Array(l),1))),this.addAttribute("a_Position",new $(new ae(new Float32Array(c),3))),this.addAttribute("a_Normal",new $(new ae(new Float32Array(h),3))),this.addAttribute("a_Uv",new $(new ae(new Float32Array(u),2)));function _(p,m,g,v,x,T,E,P,C,b,w){const U=T/C,D=E/b,L=T/2,R=E/2,Q=P/2,k=C+1,j=b+1;let J=0,Z=0;const W=new A;for(let G=0;G<j;G++){const X=G*D-R;for(let ie=0;ie<k;ie++){const Y=ie*U-L;W[p]=Y*v,W[m]=X*x,W[g]=Q,c.push(W.x,W.y,W.z),W[p]=0,W[m]=0,W[g]=P>0?1:-1,h.push(W.x,W.y,W.z),u.push(ie/C),u.push(1-G/b),J+=1}}for(let G=0;G<b;G++)for(let X=0;X<C;X++){const ie=f+X+k*G,Y=f+X+k*(G+1),be=f+(X+1)+k*(G+1),we=f+(X+1)+k*G;l.push(ie,Y,we),l.push(Y,be,we),Z+=6}o.addGroup(d,Z,w),d+=Z,f+=J}this.computeBoundingBox(),this.computeBoundingSphere()}}class ar extends Oe{constructor(){super(),this.type=Pe.BASIC}}class ds extends Oe{constructor(){super(),this.type=Pe.LINE,this.lineWidth=1,this.drawMode=Ut.LINES}copy(e){return super.copy(e),this.lineWidth=e.lineWidth,this}}class Ba extends Oe{constructor(){super(),this.type=Pe.PBR2,this.specular=new pe(1118481),this.glossiness=.5,this.specularMap=null,this.glossinessMap=null,this.acceptLight=!0}copy(e){return super.copy(e),this.specular=e.specular,this.glossiness=e.glossiness,this.specularMap=e.specularMap,this.glossinessMap=e.glossinessMap,this}}class bi extends Oe{constructor(){super(),this.type=Pe.PBR,this.roughness=.5,this.metalness=.5,this.roughnessMap=null,this.metalnessMap=null,this.clearcoat=0,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new z(1,1),this.clearcoatNormalMap=null,this.acceptLight=!0}copy(e){return super.copy(e),this.roughness=e.roughness,this.metalness=e.metalness,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this}}class Ga extends Oe{constructor(){super(),this.type=Pe.POINT,this.size=1,this.sizeAttenuation=!0,this.drawMode=Ut.POINTS}copy(e){return super.copy(e),this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this}}class dn extends Ot{constructor(e,t){super(),this.width=e,this.height=t}resize(e,t){return this.width!==e||this.height!==t?(this.width=e,this.height=t,!0):!1}dispose(){this.dispatchEvent({type:"dispose"})}}dn.prototype.isRenderTarget=!0;class Ae extends Ot{constructor(e,t,n=y.RGBA8,i=0){super(),this.width=e,this.height=t,this.format=n,this.multipleSampling=i}resize(e,t){return this.width!==e||this.height!==t?(this.dispose(),this.width=e,this.height=t,!0):!1}clone(){return new this.constructor().copy(this)}copy(e){return this.format=e.format,this.multipleSampling=e.multipleSampling,this}dispose(){this.dispatchEvent({type:"dispose"})}}Ae.prototype.isRenderBuffer=!0;let za=0;class _n extends Ot{constructor(){super(),this.id=za++,this.mipmaps=[],this.border=0,this.format=y.RGBA,this.internalformat=null,this.type=F.UNSIGNED_BYTE,this.magFilter=N.LINEAR,this.minFilter=N.LINEAR_MIPMAP_LINEAR,this.wrapS=q.CLAMP_TO_EDGE,this.wrapT=q.CLAMP_TO_EDGE,this.anisotropy=1,this.compare=void 0,this.generateMipmaps=!0,this.encoding=Te.LINEAR,this.flipY=!0,this.premultiplyAlpha=!1,this.unpackAlignment=4,this.version=0}clone(){return new this.constructor().copy(this)}copy(e){return this.mipmaps=e.mipmaps.slice(0),this.border=e.border,this.format=e.format,this.internalformat=e.internalformat,this.type=e.type,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.anisotropy=e.anisotropy,this.compare=e.compare,this.generateMipmaps=e.generateMipmaps,this.encoding=e.encoding,this.flipY=e.flipY,this.premultiplyAlpha=e.premultiplyAlpha,this.unpackAlignment=e.unpackAlignment,this.version=e.version,this}dispose(){this.dispatchEvent({type:"dispose"}),this.version=0}}_n.prototype.isTexture=!0;class ge extends _n{constructor(){super(),this.image=null}copy(e){return super.copy(e),this.image=e.image,this}}ge.prototype.isTexture2D=!0;class Ee extends dn{constructor(e,t){super(e,t),this._attachments={},this.attach(new ge,M.COLOR_ATTACHMENT0),this.attach(new Ae(e,t,y.DEPTH_STENCIL),M.DEPTH_STENCIL_ATTACHMENT)}attach(e,t=M.COLOR_ATTACHMENT0){e.isTexture?e.image&&e.image.rtt?(e.image.width!==this.width||e.image.height!==this.height)&&(e.version++,e.image.width=this.width,e.image.height=this.height):(e.version++,e.image={rtt:!0,data:null,width:this.width,height:this.height}):e.resize(this.width,this.height),this._attachments[t]=e}detach(e=M.COLOR_ATTACHMENT0){delete this._attachments[e]}resize(e,t){const n=super.resize(e,t);if(n){this.dispose(!1);for(const i in this._attachments){const s=this._attachments[i];s.isTexture?(s.image={rtt:!0,data:null,width:this.width,height:this.height},s.version++):s.resize(e,t)}}return n}dispose(e=!0){if(super.dispose(),e)for(const t in this._attachments)this._attachments[t].dispose()}}Ee.prototype.isRenderTarget2D=!0;Object.defineProperties(Ee.prototype,{texture:{set:function(a){a?a.isTexture&&this.attach(a,M.COLOR_ATTACHMENT0):this.detach(M.COLOR_ATTACHMENT0)},get:function(){const a=this._attachments[M.COLOR_ATTACHMENT0];return a.isTexture?a:null}}});class Ha extends dn{constructor(e){super(e.width,e.height),this.view=e}resize(e,t){this.view.width=e,this.view.height=t,this.width=e,this.height=t}dispose(){}}Ha.prototype.isRenderTargetBack=!0;class pn extends _n{constructor(){super(),this.images=[],this.flipY=!1}copy(e){return super.copy(e),this.images=e.images.slice(0),this}}pn.prototype.isTextureCube=!0;class kt extends dn{constructor(e,t){super(e,t),this._attachments={},this.attach(new pn,M.COLOR_ATTACHMENT0),this.attach(new Ae(e,t,y.DEPTH_STENCIL),M.DEPTH_STENCIL_ATTACHMENT),this.activeCubeFace=0,this.activeMipmapLevel=0}attach(e,t=M.COLOR_ATTACHMENT0){if(e.isTexture){let n=!1;for(let i=0;i<6;i++)e.images[i]&&e.images[i].rtt?(e.images[i].width!==this.width||e.images[i].height!==this.height)&&(e.images[i].width=this.width,e.images[i].height=this.height,n=!0):(e.images[i]={rtt:!0,data:null,width:this.width,height:this.height},n=!0);n&&e.version++}else e.resize(this.width,this.height);this._attachments[t]=e}detach(e=M.COLOR_ATTACHMENT0){delete this._attachments[e]}resize(e,t){if(super.resize(e,t)){this.dispose(!1);for(const i in this._attachments){const s=this._attachments[i];if(s.isTexture){for(let r=0;r<6;r++)s.images[r]={rtt:!0,data:null,width:this.width,height:this.height};s.version++}else s.resize(e,t)}}}dispose(e=!0){if(super.dispose(),e)for(const t in this._attachments)this._attachments[t].dispose()}}kt.prototype.isRenderTargetCube=!0;Object.defineProperties(kt.prototype,{texture:{set:function(a){a?a.isTexture&&this.attach(a,M.COLOR_ATTACHMENT0):this.detach(M.COLOR_ATTACHMENT0)},get:function(){const a=this._attachments[M.COLOR_ATTACHMENT0];return a.isTexture?a:null}}});class or extends _n{constructor(){super(),this.image={data:new Uint8Array([255,255,255,255,255,255,255,255]),width:2,height:2,depth:2},this.wrapR=q.CLAMP_TO_EDGE,this.format=y.RED,this.type=F.UNSIGNED_BYTE,this.magFilter=N.NEAREST,this.minFilter=N.NEAREST,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.image=e.image,this}}or.prototype.isTexture3D=!0;const Xn=new B;class wi{constructor(e,t){this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=new Float32Array(16*this.bones.length),this.boneTexture=void 0}pose(){const e=this.boneInverses;for(let t=0;t<this.bones.length;t++)this.bones[t].worldMatrix.getInverse(e[t]);for(let t=0;t<this.bones.length;t++){const n=this.bones[t];n.parent&&n.parent.isBone?(n.matrix.getInverse(n.parent.worldMatrix),n.matrix.multiply(n.worldMatrix)):n.matrix.copy(n.worldMatrix),n.matrix.decompose(n.position,n.quaternion,n.scale)}}clone(){return new wi(this.bones,this.boneInverses)}updateBones(e){const t=e.useAnchorMatrix,n=e.anchorMatrixInverse,i=this.boneInverses;for(let s=0;s<this.bones.length;s++){const r=this.bones[s];Xn.multiplyMatrices(r.worldMatrix,i[s]),t&&Xn.premultiply(n),Xn.toArray(this.boneMatrices,s*16)}this.boneTexture!==void 0&&this.boneTexture.version++}generateBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=la(Math.ceil(e)),e=Math.max(4,e);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new ge;n.image={data:t,width:e,height:e},n.format=y.RGBA,n.type=F.FLOAT,n.magFilter=N.NEAREST,n.minFilter=N.NEAREST,n.generateMipmaps=!1,n.flipY=!1,this.boneMatrices=t,this.boneTexture=n}}class st extends ve{constructor(e=16777215,t=1){super(),this.color=new pe(e),this.intensity=t}lookAt(e,t){_s.lookAtRH(this.position,e,t),this.quaternion.setFromRotationMatrix(_s)}copy(e){return super.copy(e),this.color.copy(e.color),this.intensity=e.intensity,this}}st.prototype.isLight=!0;const _s=new B;class ka extends st{constructor(e,t){super(e,t)}}ka.prototype.isAmbientLight=!0;class Li{constructor(){this.camera=new zt,this.matrix=new B,this.bias=0,this.normalBias=0,this.radius=1,this.cameraNear=1,this.cameraFar=500,this.mapSize=new z(512,512),this.autoUpdate=!0,this.needsUpdate=!1,this.renderTarget=null,this.map=null,this.depthMap=null}update(e,t){}updateMatrix(){const e=this.matrix,t=this.camera;e.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),e.multiply(t.projectionMatrix),e.multiply(t.viewMatrix)}copy(e){return this.camera.copy(e.camera),this.matrix.copy(e.matrix),this.bias=e.bias,this.normalBias=e.normalBias,this.radius=e.radius,this.cameraNear=e.cameraNear,this.cameraFar=e.cameraFar,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}prepareDepthMap(e,t){}}class Xa extends Li{constructor(){super(),this.windowSize=500,this.frustumEdgeFalloff=0,this.camera.frustumCulled=!1,this.renderTarget=new Ee(this.mapSize.x,this.mapSize.y);const e=this.renderTarget.texture;e.generateMipmaps=!1,e.minFilter=N.NEAREST,e.magFilter=N.NEAREST;const t=new ge;t.type=F.UNSIGNED_INT,t.format=y.DEPTH_COMPONENT,t.magFilter=N.LINEAR,t.minFilter=N.LINEAR,t.compare=Tt.LESS,t.generateMipmaps=!1;const n=new Ae(this.mapSize.x,this.mapSize.y,y.DEPTH_COMPONENT16);this.renderTarget.detach(M.DEPTH_STENCIL_ATTACHMENT),this.renderTarget.attach(n,M.DEPTH_ATTACHMENT),this.map=e,this.depthMap=t,this._depthBuffer=n,this._lookTarget=new A,this._up=new A(0,1,0)}update(e){this._updateCamera(e),(this.mapSize.x!==this.renderTarget.width||this.mapSize.y!==this.renderTarget.height)&&this.renderTarget.resize(this.mapSize.x,this.mapSize.y)}_updateCamera(e){const t=this.camera,n=this._lookTarget;e.getWorldDirection(n),t.position.setFromMatrixPosition(e.worldMatrix),n.multiplyScalar(-1).add(t.position),t.lookAt(n,this._up),t.updateMatrix();const i=this.windowSize/2;t.setOrtho(-i,i,-i,i,this.cameraNear,this.cameraFar)}copy(e){return super.copy(e),this.windowSize=e.windowSize,this.frustumEdgeFalloff=e.frustumEdgeFalloff,this}prepareDepthMap(e,t){const n=e&&t.version>=2,i=this.renderTarget,r=i._attachments[M.DEPTH_ATTACHMENT]===this.depthMap;n!==r&&(n?(t.getExtension("OES_texture_float_linear")&&(this.depthMap.type=F.FLOAT),i.dispose(),i.attach(this.depthMap,M.DEPTH_ATTACHMENT)):(i.dispose(),i.attach(this._depthBuffer,M.DEPTH_ATTACHMENT)))}}class lr extends st{constructor(e,t){super(e,t),this.shadow=new Xa}copy(e){return super.copy(e),this.shadow.copy(e.shadow),this}}lr.prototype.isDirectionalLight=!0;class Va extends st{constructor(e,t,n){super(e,n),this.groundColor=new pe(t!==void 0?t:16777215)}copy(e){super.copy(e),this.groundColor.copy(e.groundColor)}}Va.prototype.isHemisphereLight=!0;class Wa extends Li{constructor(){super(),this.renderTarget=new kt(this.mapSize.x,this.mapSize.y);const e=this.renderTarget.texture;e.generateMipmaps=!1,e.minFilter=N.NEAREST,e.magFilter=N.NEAREST,this.map=e,this._targets=[new A(1,0,0),new A(-1,0,0),new A(0,1,0),new A(0,-1,0),new A(0,0,1),new A(0,0,-1)],this._ups=[new A(0,-1,0),new A(0,-1,0),new A(0,0,1),new A(0,0,-1),new A(0,-1,0),new A(0,-1,0)],this._lookTarget=new A}update(e,t){this._updateCamera(e,t),(this.mapSize.x!==this.renderTarget.width||this.mapSize.y!==this.renderTarget.height)&&this.renderTarget.resize(this.mapSize.x,this.mapSize.y)}_updateCamera(e,t){const n=this.camera,i=this._lookTarget,s=this._targets,r=this._ups;n.position.setFromMatrixPosition(e.worldMatrix),i.set(s[t].x+n.position.x,s[t].y+n.position.y,s[t].z+n.position.z),n.lookAt(i,r[t]),n.updateMatrix(),n.setPerspective(90/180*Math.PI,1,this.cameraNear,this.cameraFar)}}class cr extends st{constructor(e,t,n,i){super(e,t),this.decay=i!==void 0?i:1,this.distance=n!==void 0?n:200,this.shadow=new Wa}copy(e){return super.copy(e),this.shadow.copy(e.shadow),this}}cr.prototype.isPointLight=!0;class Qa extends st{constructor(e=new oa,t=1){super(void 0,t),this.sh=e}copy(e){return super.copy(e),this.sh.copy(e.sh),this}}Qa.prototype.isSphericalHarmonicsLight=!0;class Ya extends Li{constructor(){super(),this.frustumEdgeFalloff=0,this.renderTarget=new Ee(this.mapSize.x,this.mapSize.y);const e=this.renderTarget.texture;e.generateMipmaps=!1,e.minFilter=N.NEAREST,e.magFilter=N.NEAREST;const t=new ge;t.type=F.UNSIGNED_INT,t.format=y.DEPTH_COMPONENT,t.magFilter=N.LINEAR,t.minFilter=N.LINEAR,t.compare=Tt.LESS,t.generateMipmaps=!1;const n=new Ae(this.mapSize.x,this.mapSize.y,y.DEPTH_COMPONENT16);this.renderTarget.detach(M.DEPTH_STENCIL_ATTACHMENT),this.renderTarget.attach(n,M.DEPTH_ATTACHMENT),this.map=e,this.depthMap=t,this._depthBuffer=n,this._lookTarget=new A,this._up=new A(0,1,0)}update(e){this._updateCamera(e),(this.mapSize.x!==this.renderTarget.width||this.mapSize.y!==this.renderTarget.height)&&this.renderTarget.resize(this.mapSize.x,this.mapSize.y)}_updateCamera(e){const t=this.camera,n=this._lookTarget;e.getWorldDirection(n),t.position.setFromMatrixPosition(e.worldMatrix),n.multiplyScalar(-1).add(t.position),t.lookAt(n,this._up),t.updateMatrix(),t.setPerspective(e.angle*2,1,this.cameraNear,this.cameraFar)}copy(e){return super.copy(e),this.frustumEdgeFalloff=e.frustumEdgeFalloff,this}prepareDepthMap(e,t){const n=e&&t.version>=2,i=this.renderTarget,r=i._attachments[M.DEPTH_ATTACHMENT]===this.depthMap;n!==r&&(n?(t.getExtension("OES_texture_float_linear")&&(this.depthMap.type=F.FLOAT),i.dispose(),i.attach(this.depthMap,M.DEPTH_ATTACHMENT)):(i.dispose(),i.attach(this._depthBuffer,M.DEPTH_ATTACHMENT)))}}class ur extends st{constructor(e,t,n,i,s,r){super(e,t),this.decay=r!==void 0?r:1,this.distance=n!==void 0?n:200,this.penumbra=s!==void 0?s:0,this.angle=i!==void 0?i:Math.PI/6,this.shadow=new Ya}copy(e){return super.copy(e),this.shadow.copy(e.shadow),this}}ur.prototype.isSpotLight=!0;class hr extends ve{constructor(){super()}}hr.prototype.isBone=!0;class fr extends tt{constructor(e,t){super(e,t),this.skeleton=void 0,this.bindMode="attached",this.bindMatrix=new B,this.bindMatrixInverse=new B}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrix(),t=this.worldMatrix),this.bindMatrix.copy(t),this.bindMatrixInverse.getInverse(t)}updateMatrix(e){super.updateMatrix(e),this.bindMode==="attached"?this.bindMatrixInverse.getInverse(this.worldMatrix):this.bindMode==="detached"?this.bindMatrixInverse.getInverse(this.bindMatrix):console.warn("t3d.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}copy(e){return super.copy(e),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this}}fr.prototype.isSkinnedMesh=!0;var qa=`#ifdef ALPHATEST
	if ( outColor.a < ALPHATEST ) {
		discard;
	} else {
		outColor.a = u_Opacity;
	}
#endif`,ja=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
	varying vec2 vAOMapUV;
#endif`,Za=`#ifdef USE_AOMAP
	uniform mat3 aoMapUVTransform;
	varying vec2 vAOMapUV;
#endif`,Ka=`#ifdef USE_AOMAP
	#if (USE_AOMAP == 2)
        vAOMapUV = (aoMapUVTransform * vec3(a_Uv2, 1.)).xy;
    #else
        vAOMapUV = (aoMapUVTransform * vec3(a_Uv, 1.)).xy;
    #endif
#endif`,$a=`
#ifdef USE_AOMAP
    float ambientOcclusion = (texture2D(aoMap, vAOMapUV).r - 1.0) * aoMapIntensity + 1.0;
    
    reflectedLight.indirectDiffuse *= ambientOcclusion;
    #if defined(USE_ENV_MAP) && defined(USE_PBR)
        float dotNV = saturate(dot(N, V));
        reflectedLight.indirectSpecular *= computeSpecularOcclusion(dotNV, ambientOcclusion, roughness);
    #endif
#endif`,Ja="vec4 outColor = vec4(u_Color, u_Opacity);",eo=`vec3 transformed = vec3(a_Position);
vec3 objectNormal = vec3(a_Normal);
#ifdef USE_TANGENT
    vec3 objectTangent = vec3(a_Tangent.xyz);
#endif`,to=`
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
}`,no=`#ifdef USE_BUMPMAP
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
#endif`,io=`
#if NUM_CLIPPING_PLANES > 0
    vec4 plane;
    #pragma unroll_loop_start
    for (int i = 0; i < NUM_CLIPPING_PLANES; i++) {
        plane = clippingPlanes[i];
        if ( dot( -v_modelPos, plane.xyz ) > plane.w ) discard;
    }
    #pragma unroll_loop_end
#endif`,so=`#if NUM_CLIPPING_PLANES > 0
    uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ro=`#ifdef USE_VCOLOR_RGB
    outColor.rgb *= v_Color;
#endif
#ifdef USE_VCOLOR_RGBA
    outColor *= v_Color;
#endif`,ao=`#ifdef USE_VCOLOR_RGB
    varying vec3 v_Color;
#endif
#ifdef USE_VCOLOR_RGBA
    varying vec4 v_Color;
#endif`,oo=`#ifdef USE_VCOLOR_RGB
    attribute vec3 a_Color;
    varying vec3 v_Color;
#endif
#ifdef USE_VCOLOR_RGBA
    attribute vec4 a_Color;
    varying vec4 v_Color;
#endif`,lo=`#if defined(USE_VCOLOR_RGB) || defined(USE_VCOLOR_RGBA)
    v_Color = a_Color;
#endif`,co=`uniform mat4 u_View;
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
};`,uo=`attribute vec3 a_Position;
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
}`,ho=`#ifdef USE_DIFFUSE_MAP
    #if (USE_DIFFUSE_MAP == 2)
        vec4 texelColor = texture2D(diffuseMap, v_Uv2);
    #else 
        vec4 texelColor = texture2D(diffuseMap, v_Uv);
    #endif
    
    texelColor = mapTexelToLinear(texelColor);
    outColor *= texelColor;
#endif`,fo=`#ifdef USE_DIFFUSE_MAP
    uniform sampler2D diffuseMap;
#endif`,_o=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = emissiveMapTexelToLinear(texture2D(emissiveMap, vEmissiveMapUV));
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,po=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
	varying vec2 vEmissiveMapUV;
#endif`,mo=`#ifdef USE_EMISSIVEMAP
	#if (USE_EMISSIVEMAP == 2)
        vEmissiveMapUV = (emissiveMapUVTransform * vec3(a_Uv2, 1.)).xy;
    #else
        vEmissiveMapUV = (emissiveMapUVTransform * vec3(a_Uv, 1.)).xy;
    #endif
#endif`,go=`#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapUVTransform;
	varying vec2 vEmissiveMapUV;
#endif`,xo="gl_FragColor = linearToOutputTexel(gl_FragColor);",Ao=`vec4 LinearToLinear(in vec4 value) {
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
}`,To="gl_FragColor = outColor;",vo=`#ifdef USE_ENV_MAP
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
#endif`,Eo=`#ifdef USE_ENV_MAP
    #ifdef USE_VERTEX_ENVDIR
        varying vec3 v_EnvDir;
    #endif
    uniform samplerCube envMap;
    uniform float u_EnvMap_Flip;
    uniform float u_EnvMap_Intensity;
    uniform float u_EnvMapLight_Intensity;
    uniform int maxMipLevel;
#endif`,So=`#ifdef USE_ENV_MAP
    #ifdef USE_VERTEX_ENVDIR
        varying vec3 v_EnvDir;
    #endif
#endif`,Mo=`
#ifdef USE_ENV_MAP
    #ifdef USE_VERTEX_ENVDIR
        vec3 transformedNormal = (transposeMat4(inverseMat4(u_Model)) * vec4(objectNormal, 0.0)).xyz;
        transformedNormal = normalize(transformedNormal);
        v_EnvDir = reflect(normalize(worldPosition.xyz - u_CameraPosition), transformedNormal);
    #endif
#endif`,yo=`#ifdef USE_FOG
    float depth = gl_FragCoord.z / gl_FragCoord.w;
    #ifdef USE_EXP2_FOG
        float fogFactor = 1.0 - exp(-u_FogDensity * u_FogDensity * depth * depth);
    #else
        float fogFactor = smoothstep(u_FogNear, u_FogFar, depth);
    #endif
    gl_FragColor.rgb = mix(gl_FragColor.rgb, u_FogColor, fogFactor);
#endif`,Po=`#ifdef USE_FOG
    uniform vec3 u_FogColor;
    #ifdef USE_EXP2_FOG
        uniform float u_FogDensity;
    #else
        uniform float u_FogNear;
        uniform float u_FogFar;
    #endif
#endif`,bo=`mat4 inverseMat4(mat4 m) {
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
}`,wo=`
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
#endif`,Lo=`#ifdef USE_AMBIENT_LIGHT
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
#endif`,No=`#ifdef USE_ALPHA_MAP
	uniform sampler2D alphaMap;
	varying vec2 vAlphaMapUV;
#endif`,Co=`#ifdef USE_ALPHA_MAP
	outColor.a *= texture2D(alphaMap, vAlphaMapUV).g;
#endif`,Ro=`#ifdef USE_ALPHA_MAP
    uniform mat3 alphaMapUVTransform;
	varying vec2 vAlphaMapUV;
#endif`,Fo=`#ifdef USE_ALPHA_MAP
	#if (USE_ALPHA_MAP == 2)
        vAlphaMapUV = (alphaMapUVTransform * vec3(a_Uv2, 1.)).xy;
    #else
        vAlphaMapUV = (alphaMapUVTransform * vec3(a_Uv, 1.)).xy;
    #endif
#endif`,Do=`#ifdef USE_NORMAL_MAP
    uniform sampler2D normalMap;
    uniform vec2 normalScale;
#endif
#if defined(USE_NORMAL_MAP) || defined(USE_CLEARCOAT_NORMALMAP)
    #if defined(USE_TANGENT) && !defined(FLAT_SHADED)
        #define USE_TBN
    #else
        #include <tsn>
    #endif
#endif`,Io=`
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
#endif`,Uo=`#ifndef FLAT_SHADED
    varying vec3 v_Normal;
    #ifdef USE_TANGENT
        varying vec3 v_Tangent;
		varying vec3 v_Bitangent;
    #endif
#endif`,Oo=`#ifndef FLAT_SHADED
    varying vec3 v_Normal;
    #ifdef USE_TANGENT
        varying vec3 v_Tangent;
		varying vec3 v_Bitangent;
    #endif
#endif`,Bo=`#ifndef FLAT_SHADED
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
#endif`,Go=`const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256.,  256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
    vec4 r = vec4( fract( v * PackFactors ), v );
    r.yzw -= r.xyz * ShiftRight8;    return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
    return dot( v, UnpackFactors );
}`,zo=`#ifdef USE_PREMULTIPLIED_ALPHA
    gl_FragColor.rgb = gl_FragColor.rgb * gl_FragColor.a;
#endif`,Ho=`vec4 worldPosition = u_Model * vec4(transformed, 1.0);
gl_Position = u_ProjectionView * worldPosition;`,ko=`#if defined( DITHERING )
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Xo=`#if defined( DITHERING )
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Vo=`#ifdef USE_SHADOW_SAMPLER
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
#endif`,Wo=`#ifdef USE_SHADOW
#endif`,Qo=`#ifdef USE_SHADOW
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
#endif`,Yo=`#ifdef USE_SHADOW
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
#endif`,qo=`
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
#endif`,jo=`#ifdef USE_MORPHNORMALS
	objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
	objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
	objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
	objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
#endif`,Zo=`#ifdef USE_MORPHTARGETS
	#ifndef USE_MORPHNORMALS
	uniform float morphTargetInfluences[ 8 ];
	#else
	uniform float morphTargetInfluences[ 4 ];
	#endif
#endif`,Ko=`#ifdef USE_MORPHTARGETS
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
#endif`,$o=`#ifdef USE_SKINNING
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
#endif`,Jo=`#ifdef USE_SKINNING
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
#endif`,el=`#ifdef USE_SKINNING
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
#endif`,tl=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, v_Uv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,nl=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,il=`mat4 transposeMat4(mat4 inMatrix) {
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
}`,sl=`mat3 tsn(vec3 N, vec3 V, vec2 uv) {
    vec3 q0 = dFdx(V.xyz);
    vec3 q1 = dFdy(V.xyz);
    vec2 st0 = dFdx(uv.xy);
    vec2 st1 = dFdy(uv.xy);
    float scale = sign(st1.y * st0.x - st0.y * st1.x);
    vec3 S = normalize((q0 * st1.y - q1 * st0.y) * scale);
    vec3 T = normalize((-q0 * st1.x + q1 * st0.x) * scale);
    return mat3(S, T, N);
}`,rl=`#ifdef USE_UV1
    varying vec2 v_Uv;
#endif
#ifdef USE_UV2
    varying vec2 v_Uv2;
#endif`,al=`#if defined(USE_UV1) || defined(USE_UV2)
    uniform mat3 uvTransform;
#endif
#ifdef USE_UV1
    attribute vec2 a_Uv;
    varying vec2 v_Uv;
#endif
#ifdef USE_UV2
    attribute vec2 a_Uv2;
    varying vec2 v_Uv2;
#endif`,ol=`#ifdef USE_UV1
    v_Uv = (uvTransform * vec3(a_Uv, 1.)).xy;
#endif
#ifdef USE_UV2
    v_Uv2 = (uvTransform * vec3(a_Uv2, 1.)).xy;
#endif`,ll="varying vec3 v_modelPos;",cl="varying vec3 v_modelPos;",ul=`
v_modelPos = worldPosition.xyz;`,hl=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,fl=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,dl=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		uniform float logDepthCameraNear;
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
		uniform float logDepthCameraNear;
	#endif
#endif`,_l=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w - logDepthCameraNear;
		vIsPerspective = float( isPerspectiveMatrix( u_Projection ) );
	#else
		if ( isPerspectiveMatrix( u_Projection ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w - logDepthCameraNear + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,pl=`#ifdef USE_CLEARCOAT
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
#endif`;const dr={alphaTest_frag:qa,aoMap_pars_frag:ja,aoMap_pars_vert:Za,aoMap_vert:Ka,aoMap_frag:$a,begin_frag:Ja,begin_vert:eo,bsdfs:to,bumpMap_pars_frag:no,clippingPlanes_frag:io,clippingPlanes_pars_frag:so,color_frag:ro,color_pars_frag:ao,color_pars_vert:oo,color_vert:lo,common_frag:co,common_vert:uo,diffuseMap_frag:ho,diffuseMap_pars_frag:fo,emissiveMap_frag:_o,emissiveMap_pars_frag:po,emissiveMap_vert:mo,emissiveMap_pars_vert:go,encodings_frag:xo,encodings_pars_frag:Ao,end_frag:To,envMap_frag:vo,envMap_pars_frag:Eo,envMap_pars_vert:So,envMap_vert:Mo,fog_frag:yo,fog_pars_frag:Po,inverse:bo,light_frag:wo,light_pars_frag:Lo,alphamap_pars_frag:No,alphamap_frag:Co,alphamap_pars_vert:Ro,alphamap_vert:Fo,normalMap_pars_frag:Do,normal_frag:Io,normal_pars_frag:Uo,normal_pars_vert:Oo,normal_vert:Bo,packing:Go,premultipliedAlpha_frag:zo,pvm_vert:Ho,dithering_frag:ko,dithering_pars_frag:Xo,shadow:Vo,shadowMap_frag:Wo,shadowMap_pars_frag:Qo,shadowMap_pars_vert:Yo,shadowMap_vert:qo,morphnormal_vert:jo,morphtarget_pars_vert:Zo,morphtarget_vert:Ko,skinning_pars_vert:$o,skinning_vert:Jo,skinnormal_vert:el,specularMap_frag:tl,specularMap_pars_frag:nl,transpose:il,tsn:sl,uv_pars_frag:rl,uv_pars_vert:al,uv_vert:ol,modelPos_pars_frag:ll,modelPos_pars_vert:cl,modelPos_vert:ul,logdepthbuf_frag:hl,logdepthbuf_pars_frag:fl,logdepthbuf_pars_vert:dl,logdepthbuf_vert:_l,clearcoat_pars_frag:pl};var ml=`#include <common_frag>
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
}`,gl=`#include <common_vert>
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
}`,xl=`#include <common_frag>
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
}`,Al=`#include <common_vert>
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
}`,Tl=`#include <common_frag>
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
}`,vl=`#include <common_vert>
#include <modelPos_pars_vert>
#include <morphtarget_pars_vert>
#include <skinning_pars_vert>
void main() {
    #include <begin_vert>
    #include <morphtarget_vert>
    #include <skinning_vert>
    #include <pvm_vert>
    #include <modelPos_vert>
}`,El=`#define USE_LAMBERT
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
}`,Sl=`#define USE_LAMBERT
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
}`,Ml=`#include <common_frag>
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
}`,yl=`#include <common_vert>
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
}`,Pl=`#define USE_PBR
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
}`,bl=`#define USE_PBR
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
}`,ps=`#define USE_PBR
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
}`,wl=`#define USE_PHONG
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
}`,Ll=`#define USE_PHONG
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
}`,Nl=`#include <common_frag>
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
}`,Cl=`#include <common_vert>
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
}`;const nn={basic_frag:ml,basic_vert:gl,depth_frag:xl,depth_vert:Al,distance_frag:Tl,distance_vert:vl,lambert_frag:El,lambert_vert:Sl,normaldepth_frag:Ml,normaldepth_vert:yl,pbr_frag:Pl,pbr_vert:ps,pbr2_frag:bl,pbr2_vert:ps,phong_frag:wl,phong_vert:Ll,point_frag:Nl,point_vert:Cl};class Rl{constructor(e,t,n){this.gl=e,this.name=n.name,this.type=n.type,this.size=n.size,this.location=e.getAttribLocation(t,this.name),this.count=Fl(e,this.type),this.format=Dl(e,this.type),this.locationSize=1,this.type===e.FLOAT_MAT2&&(this.locationSize=2),this.type===e.FLOAT_MAT3&&(this.locationSize=3),this.type===e.FLOAT_MAT4&&(this.locationSize=4)}}function Fl(a,e){switch(e){case a.FLOAT:case a.BYTE:case a.UNSIGNED_BYTE:case a.UNSIGNED_SHORT:return 1;case a.FLOAT_VEC2:return 2;case a.FLOAT_VEC3:return 3;case a.FLOAT_VEC4:return 4;case a.FLOAT_MAT2:return 4;case a.FLOAT_MAT3:return 9;case a.FLOAT_MAT4:return 16;default:return 0}}function Dl(a,e){switch(e){case a.FLOAT:case a.FLOAT_VEC2:case a.FLOAT_VEC3:case a.FLOAT_VEC4:case a.FLOAT_MAT2:case a.FLOAT_MAT3:case a.FLOAT_MAT4:return a.FLOAT;case a.UNSIGNED_BYTE:return a.UNSIGNED_BYTE;case a.UNSIGNED_SHORT:return a.UNSIGNED_SHORT;case a.BYTE:return a.BYTE;default:return a.FLOAT}}class Il{constructor(e){this._gl=e,this._extensions={},this.version=parseFloat(/^WebGL (\d)/.exec(e.getParameter(e.VERSION))[1]);const t=this.getExtension("EXT_texture_filter_anisotropic");this.anisotropyExt=t,this.maxAnisotropy=t!==null?e.getParameter(t.MAX_TEXTURE_MAX_ANISOTROPY_EXT):1;let n=null,i=!1;try{this.version>1?(n=this.getExtension("EXT_disjoint_timer_query_webgl2"),n&&(i=!!e.getQuery(n.TIMESTAMP_EXT,n.QUERY_COUNTER_BITS_EXT))):(n=this.getExtension("EXT_disjoint_timer_query"),n&&(i=!!n.getQueryEXT(n.TIMESTAMP_EXT,n.QUERY_COUNTER_BITS_EXT)))}catch(s){console.warn(s)}this.timerQuery=n,this.canUseTimestamp=i,this.parallelShaderCompileExt=this.getExtension("KHR_parallel_shader_compile"),this.maxPrecision=Ol(e,"highp"),this.maxTextures=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),this.maxVertexTextures=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),this.maxTextureSize=e.getParameter(e.MAX_TEXTURE_SIZE),this.maxCubemapSize=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),this.maxVertexUniformVectors=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),this.maxSamples=this.version>1?e.getParameter(e.MAX_SAMPLES):1,this.lineWidthRange=e.getParameter(e.ALIASED_LINE_WIDTH_RANGE)}getExtension(e){const t=this._gl,n=this._extensions;if(n[e]!==void 0)return n[e];let i=null;for(const s of Ul)if(i=t.getExtension(s+e),i)break;return n[e]=i,i}}const Ul=["","WEBKIT_","MOZ_"];function Ol(a,e){if(e==="highp"){if(a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.HIGH_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.HIGH_FLOAT).precision>0)return"highp";e="mediump"}return e==="mediump"&&a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.MEDIUM_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}class Bl extends Ye{constructor(e,t,n,i){super(e),this._gl=t,this._buffers=n,this._vertexArrayBindings=i;const s=this;function r(o){const l=o.target,c=s.get(l);l.removeEventListener("dispose",r),l.index!==null&&n.removeBuffer(l.index.buffer);for(const h in l.attributes)n.removeBuffer(l.attributes[h].buffer);for(const h in l.morphAttributes){const u=l.morphAttributes[h];for(let f=0,d=u.length;f<d;f++)n.removeBuffer(u[f].buffer)}i.releaseByGeometry(l),c.created=!1,s.delete(l)}this._onGeometryDispose=r}setGeometry(e,t){const n=this._gl,i=this._buffers,s=this.get(e);if(s.pass!==t.count){s.pass=t.count,s.created||(e.addEventListener("dispose",this._onGeometryDispose),s.created=!0),e.index!==null&&i.setBuffer(e.index.buffer,n.ELEMENT_ARRAY_BUFFER,this._vertexArrayBindings);for(const r in e.attributes)i.setBuffer(e.attributes[r].buffer,n.ARRAY_BUFFER);for(const r in e.morphAttributes){const o=e.morphAttributes[r];for(let l=0,c=o.length;l<c;l++)i.setBuffer(o[l].buffer,n.ARRAY_BUFFER)}return s}}}const Gl={u_Model:[1,null],u_Projection:[2,function(a){this.set(a.projectionMatrix.elements)}],u_View:[2,function(a){this.set(a.viewMatrix.elements)}],u_ProjectionView:[2,function(a){this.set(a.projectionViewMatrix.elements)}],u_CameraPosition:[2,function(a){this.setValue(a.position.x,a.position.y,a.position.z)}],logDepthBufFC:[2,function(a){this.set(a.logDepthBufFC)}],logDepthCameraNear:[2,function(a){this.set(a.logDepthCameraNear)}],u_EnvMapLight_Intensity:[3,function(a){this.set(a.environmentLightIntensity)}],u_FogColor:[3,function(a){const e=a.fog.color;this.setValue(e.r,e.g,e.b)}],u_FogDensity:[3,function(a){this.set(a.fog.density)}],u_FogNear:[3,function(a){this.set(a.fog.near)}],u_FogFar:[3,function(a){this.set(a.fog.far)}],u_Color:[4,function(a,e){const t=a.diffuse;this.setValue(t.r,t.g,t.b)}],u_Opacity:[4,function(a,e){this.set(a.opacity)}],diffuseMap:[4,function(a,e){this.set(a.diffuseMap,e)}],alphaMap:[4,function(a,e){this.set(a.alphaMap,e)}],alphaMapUVTransform:[4,function(a,e){this.set(a.alphaMapTransform.elements)}],normalMap:[4,function(a,e){this.set(a.normalMap,e)}],normalScale:[4,function(a,e){this.setValue(a.normalScale.x,a.normalScale.y)}],bumpMap:[4,function(a,e){this.set(a.bumpMap,e)}],bumpScale:[4,function(a,e){this.set(a.bumpScale)}],cubeMap:[4,function(a,e){this.set(a.cubeMap,e)}],u_EnvMap_Intensity:[4,function(a,e){this.set(a.envMapIntensity)}],u_Specular:[4,function(a,e){this.set(a.shininess)}],u_SpecularColor:[4,function(a,e){const t=a.specular;this.setValue(t.r,t.g,t.b)}],specularMap:[4,function(a,e){this.set(a.specularMap,e)}],aoMap:[4,function(a,e){this.set(a.aoMap,e)}],aoMapIntensity:[4,function(a,e){this.set(a.aoMapIntensity)}],aoMapUVTransform:[4,function(a,e){this.set(a.aoMapTransform.elements)}],u_Roughness:[4,function(a,e){this.set(a.roughness)}],roughnessMap:[4,function(a,e){this.set(a.roughnessMap,e)}],u_Metalness:[4,function(a,e){this.set(a.metalness)}],metalnessMap:[4,function(a,e){this.set(a.metalnessMap,e)}],u_Clearcoat:[4,function(a,e){this.set(a.clearcoat)}],u_ClearcoatRoughness:[4,function(a,e){this.set(a.clearcoatRoughness)}],clearcoatMap:[4,function(a,e){this.set(a.clearcoatMap,e)}],clearcoatRoughnessMap:[4,function(a,e){this.set(a.clearcoatRoughnessMap,e)}],clearcoatNormalMap:[4,function(a,e){this.set(a.clearcoatNormalMap,e)}],clearcoatNormalScale:[4,function(a,e){this.setValue(a.clearcoatNormalScale.x,a.clearcoatNormalScale.y)}],glossiness:[4,function(a,e){this.set(a.glossiness)}],glossinessMap:[4,function(a,e){this.set(a.glossinessMap,e)}],emissive:[4,function(a,e){const t=a.emissive;this.setValue(t.r,t.g,t.b)}],emissiveMap:[4,function(a,e){this.set(a.emissiveMap,e)}],emissiveMapUVTransform:[4,function(a,e){this.set(a.emissiveMapTransform.elements)}],uvTransform:[4,function(a,e){this.set(a.diffuseMapTransform.elements)}],u_PointSize:[4,function(a,e){this.set(a.size)}],u_PointScale:[5,null],maxMipLevel:[5,function(a,e){this.set(e.get(a).__maxMipLevel||8)}],envMap:[5,function(a,e){this.set(a,e)}],u_EnvMap_Flip:[5,function(a,e){this.set(a.images[0]&&a.images[0].rtt?1:-1)}]},nt=new ge;nt.image={data:new Uint8Array([1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1]),width:2,height:2};nt.magFilter=N.NEAREST;nt.minFilter=N.NEAREST;nt.generateMipmaps=!1;nt.version++;const ye=new ge;ye.image={data:null,width:2,height:2};ye.version++;ye.type=F.FLOAT_32_UNSIGNED_INT_24_8_REV;ye.format=y.DEPTH_STENCIL;ye.magFilter=N.NEAREST;ye.minFilter=N.NEAREST;ye.compare=Tt.LESS;ye.generateMipmaps=!1;ye.version++;const ms=new or,gs=new pn;function le(a,e){if(a.length!==e.length)return!1;for(let t=0,n=a.length;t<n;t++)if(a[t]!==e[t])return!1;return!0}function ce(a,e){for(let t=0,n=e.length;t<n;t++)a[t]=e[t]}const xs=[];function Vn(a,e){let t=xs[e];t===void 0&&(t=new Int32Array(e),xs[e]=t);for(let n=0;n!==e;++n)t[n]=a.allocTexUnit();return t}function _r(a,e){const t=a.gl,n=a.type,i=a.location,s=a.cache;switch(n){case t.FLOAT:a.setValue=function(r){s[0]!==r&&(t.uniform1f(i,r),s[0]=r)},e?a.set=function(r){le(s,r)||(t.uniform1fv(i,r),ce(s,r))}:a.set=a.setValue;break;case t.SAMPLER_2D:case t.SAMPLER_2D_SHADOW:a.setValue=function(r,o){const l=o.allocTexUnit();o.setTexture2D(r||(n===t.SAMPLER_2D_SHADOW?ye:nt),l),s[0]!==l&&(t.uniform1i(i,l),s[0]=l)},e?a.set=function(r,o){const l=r.length,c=Vn(o,l);for(let h=0;h!==l;++h)o.setTexture2D(r[h]||(n===t.SAMPLER_2D_SHADOW?ye:nt),c[h]);le(s,c)||(t.uniform1iv(i,c),ce(s,c))}:a.set=a.setValue;break;case t.SAMPLER_CUBE:case t.SAMPLER_CUBE_SHADOW:a.setValue=function(r,o){const l=o.allocTexUnit();o.setTextureCube(r||gs,l),s[0]!==l&&(t.uniform1i(i,l),s[0]=l)},e?a.set=function(r,o){const l=r.length,c=Vn(o,l);for(let h=0;h!==l;++h)o.setTextureCube(r[h]||gs,c[h]);le(s,c)||(t.uniform1iv(i,c),ce(s,c))}:a.set=a.setValue;break;case t.SAMPLER_3D:a.setValue=function(r,o){const l=o.allocTexUnit();o.setTexture3D(r||ms,l),s[0]!==l&&(t.uniform1i(i,l),s[0]=l)},e?a.set=function(r,o){const l=r.length,c=Vn(o,l);for(let h=0;h!==l;++h)o.setTexture3D(r[h]||ms,c[h]);le(s,c)||(t.uniform1iv(i,c),ce(s,c))}:a.set=a.setValue;break;case t.BOOL:case t.INT:a.setValue=function(r){s[0]!==r&&(t.uniform1i(i,r),s[0]=r)},e?a.set=function(r){le(s,r)||(t.uniform1iv(i,r),ce(s,r))}:a.set=a.setValue;break;case t.FLOAT_VEC2:a.setValue=function(r,o){(s[0]!==r||s[1]!==o)&&(t.uniform2f(i,r,o),s[0]=r,s[1]=o)},a.set=function(r){le(s,r)||(t.uniform2fv(i,r),ce(s,r))};break;case t.BOOL_VEC2:case t.INT_VEC2:a.setValue=function(r,o){(s[0]!==r||s[1]!==o)&&(t.uniform2i(i,r,o),s[0]=r,s[1]=o)},a.set=function(r){le(s,r)||(t.uniform2iv(i,r),ce(s,r))};break;case t.FLOAT_VEC3:a.setValue=function(r,o,l){(s[0]!==r||s[1]!==o||s[2]!==l)&&(t.uniform3f(i,r,o,l),s[0]=r,s[1]=o,s[2]=l)},a.set=function(r){le(s,r)||(t.uniform3fv(i,r),ce(s,r))};break;case t.BOOL_VEC3:case t.INT_VEC3:a.setValue=function(r,o,l){(s[0]!==r||s[1]!==o||s[2]!==l)&&(t.uniform3i(i,r,o,l),s[0]=r,s[1]=o,s[2]=l)},a.set=function(r){le(s,r)||(t.uniform3iv(i,r),ce(s,r))};break;case t.FLOAT_VEC4:a.setValue=function(r,o,l,c){(s[0]!==r||s[1]!==o||s[2]!==l||s[3]!==c)&&(t.uniform4f(i,r,o,l,c),s[0]=r,s[1]=o,s[2]=l,s[3]=c)},a.set=function(r){le(s,r)||(t.uniform4fv(i,r),ce(s,r))};break;case t.BOOL_VEC4:case t.INT_VEC4:a.setValue=function(r,o,l,c){(s[0]!==r||s[1]!==o||s[2]!==l||s[3]!==c)&&(t.uniform4i(i,r,o,l,c),s[0]=r,s[1]=o,s[2]=l,s[3]=c)},a.set=function(r){le(s,r)||(t.uniform4iv(i,r),ce(s,r))};break;case t.FLOAT_MAT2:e?a.setValue=a.set=function(r){le(s,r)||(t.uniformMatrix2fv(i,!1,r),ce(s,r))}:a.setValue=a.set=function(r){(s[0]!==r[0]||s[1]!==r[1]||s[2]!==r[2]||s[3]!==r[3])&&(t.uniformMatrix2fv(i,!1,r),s[0]=r[0],s[1]=r[1],s[2]=r[2],s[3]=r[3])};break;case t.FLOAT_MAT3:e?a.setValue=a.set=function(r){le(s,r)||(t.uniformMatrix3fv(i,!1,r),ce(s,r))}:a.setValue=a.set=function(r){(s[0]!==r[0]||s[1]!==r[1]||s[2]!==r[2]||s[3]!==r[3]||s[4]!==r[4]||s[5]!==r[5]||s[6]!==r[6]||s[7]!==r[7]||s[8]!==r[8])&&(t.uniformMatrix3fv(i,!1,r),s[0]=r[0],s[1]=r[1],s[2]=r[2],s[3]=r[3],s[4]=r[4],s[5]=r[5],s[6]=r[6],s[7]=r[7],s[8]=r[8])};break;case t.FLOAT_MAT4:e?a.setValue=a.set=function(r){le(s,r)||(t.uniformMatrix4fv(i,!1,r),ce(s,r))}:a.setValue=a.set=function(r){(s[0]!==r[0]||s[1]!==r[1]||s[2]!==r[2]||s[3]!==r[3]||s[4]!==r[4]||s[5]!==r[5]||s[6]!==r[6]||s[7]!==r[7]||s[8]!==r[8]||s[9]!==r[9]||s[10]!==r[10]||s[11]!==r[11]||s[12]!==r[12]||s[13]!==r[13]||s[14]!==r[14]||s[15]!==r[15])&&(t.uniformMatrix4fv(i,!1,r),s[0]=r[0],s[1]=r[1],s[2]=r[2],s[3]=r[3],s[4]=r[4],s[5]=r[5],s[6]=r[6],s[7]=r[7],s[8]=r[8],s[9]=r[9],s[10]=r[10],s[11]=r[11],s[12]=r[12],s[13]=r[13],s[14]=r[14],s[15]=r[15])};break}}class zl{constructor(e,t,n,i){this.gl=e,this.id=t,this.type=n.type,this.location=i,this.setValue=void 0,this.set=void 0,this.cache=[],_r(this),this.internalGroup=0,this.internalFun=null;const s=Gl[t];s&&(this.internalGroup=s[0],this.internalFun=s[1])}}class Hl{constructor(e,t,n,i){this.gl=e,this.id=t,this.type=n.type,this.size=n.size,this.location=i,this.setValue=void 0,this.set=void 0,this.cache=[],_r(this,!0)}}class pr{constructor(){this.seq=[],this.map={}}}class kl extends pr{constructor(e){super(),this.id=e}set(e,t){const n=this.seq;for(let i=0,s=n.length;i!==s;++i){const r=n[i];r.set(e[r.id],t)}}}const Wn=/(\w+)(\])?(\[|\.)?/g;function As(a,e){a.seq.push(e),a.map[e.id]=e}function Xl(a,e,t,n){const i=e.name,s=i.length;for(Wn.lastIndex=0;;){const r=Wn.exec(i),o=Wn.lastIndex;let l=r[1];const c=r[2]==="]",h=r[3];if(c&&(l=l|0),h===void 0||h==="["&&o+2===s){As(n,h===void 0?new zl(a,l,e,t):new Hl(a,l,e,t));break}else{let f=n.map[l];f===void 0&&(f=new kl(l),As(n,f)),n=f}}}class Vl extends pr{constructor(e,t){super();const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),r=e.getUniformLocation(t,s.name);Xl(e,s,r,this)}}set(e,t,n){const i=this.map[e];i!==void 0&&i.set(t,n)}has(e){return!!this.map[e]}}let Wl=0;class Ql{constructor(e,t,n){this.gl=e,this.vshaderSource=t,this.fshaderSource=n,this.id=Wl++,this.usedTimes=1,this.code="",this.lightId=-1,this.lightVersion=-1,this.cameraId=-1,this.cameraVersion=-1,this.sceneId=-1,this.sceneVersion=-1,this.program,this._checkErrors=!0,this._compileAsynchronously=!1,this._status=0;let i,s,r;this.compile=function(c){s=Ts(e,e.VERTEX_SHADER,t),r=Ts(e,e.FRAGMENT_SHADER,n),i=e.createProgram(),e.attachShader(i,s),e.attachShader(i,r),e.linkProgram(i),this.program=i,this._checkErrors=c.checkErrors,this._compileAsynchronously=c.compileAsynchronously,this._status=1,e.deleteShader(s),e.deleteShader(r)},this.isReady=function(c){return this._status===1&&(this._compileAsynchronously&&c?e.getProgramParameter(i,c.COMPLETION_STATUS_KHR)&&(this._status=2,this._tryCheckErrors()):(this._status=2,this._tryCheckErrors())),this._status===2},this._tryCheckErrors=function(){if(this._checkErrors&&e.getProgramParameter(i,e.LINK_STATUS)===!1){const c=e.getProgramInfoLog(i).trim(),h=vs(e,s,"VERTEX"),u=vs(e,r,"FRAGMENT");this.program=void 0,this._status=0,console.error("Shader Error "+e.getError()+" - VALIDATE_STATUS "+e.getProgramParameter(i,e.VALIDATE_STATUS)+`

Program Info Log: `+c+`
`+h+`
`+u)}};let o;this.getUniforms=function(){return o===void 0&&(o=new Vl(e,i)),o};let l;this.getAttributes=function(){return l===void 0&&(l=ql(e,i)),l},this.dispose=function(){e.deleteProgram(i),this.program=void 0,this._status=0}}}function Yl(a,e){const t=a.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let r=i;r<s;r++){const o=r+1;n.push(`${o===e?">":" "} ${o}: ${t[r]}`)}return n.join(`
`)}function Ts(a,e,t){const n=a.createShader(e);return a.shaderSource(n,t),a.compileShader(n),n}function vs(a,e,t){const n=a.getShaderParameter(e,a.COMPILE_STATUS),i=a.getShaderInfoLog(e).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const r=parseInt(s[1]);return t+`

`+i+`

`+Yl(a.getShaderSource(e),r)}else return i}function ql(a,e){const t={},n=a.getProgramParameter(e,a.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=a.getActiveAttrib(e,i);t[s.name]=new Rl(a,e,s)}return t}class jl{constructor(e,t,n){this._gl=e,this._state=t,this._capabilities=n,this._programs=[]}getProgram(e,t,n,i){const s=this._programs,r=$l(this._state,this._capabilities,e,t,n),o=Zl(r,e);let l;for(let c=0,h=s.length;c<h;c++){const u=s[c];if(u.code===o){l=u,++l.usedTimes;break}}if(l===void 0){const c=Kl(e.defines),h=nn[e.type+"_vert"]||e.vertexShader||nn.basic_vert,u=nn[e.type+"_frag"]||e.fragmentShader||nn.basic_frag;l=ec(this._gl,c,r,h,u),l.compile(i),l.code=o,s.push(l)}return l}releaseProgram(e){if(--e.usedTimes===0){const t=this._programs,n=t.indexOf(e);t[n]=t[t.length-1],t.pop(),e.dispose(this._gl)}}}function Zl(a,e){let t="";for(const n in a)t+=a[n]+"_";for(const n in e.defines)t+=n+"_"+e.defines[n]+"_";return e.type===Pe.SHADER&&!e.shaderName&&(t+=e.vertexShader,t+=e.fragmentShader),t}function Kl(a){const e=[];for(const t in a){const n=a[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function $l(a,e,t,n,i){const s=t.acceptLight?i.lights:null,r=t.fog?i.scene.fog:null,o=t.envMap!==void 0?t.envMap||i.scene.environment:null,l=i.scene.logarithmicDepthBuffer,c=i.scene.disableShadowSampler,h=t.clippingPlanes&&t.clippingPlanes.length>0?t.clippingPlanes.length:i.scene.numClippingPlanes,u={};u.shaderName=t.type===Pe.SHADER&&t.shaderName?t.shaderName:t.type,u.version=e.version,u.precision=t.precision||e.maxPrecision,u.useStandardDerivatives=e.version>=2||!!e.getExtension("OES_standard_derivatives")||!!e.getExtension("GL_OES_standard_derivatives"),u.useShaderTextureLOD=e.version>=2||!!e.getExtension("EXT_shader_texture_lod"),u.useDiffuseMap=t.diffuseMap?t.diffuseMapCoord+1:0,u.useAlphaMap=t.alphaMap?t.alphaMapCoord+1:0,u.useEmissiveMap=t.emissiveMap?t.emissiveMapCoord+1:0,u.useAOMap=t.aoMap?t.aoMapCoord+1:0,u.useNormalMap=!!t.normalMap,u.useBumpMap=!!t.bumpMap,u.useSpecularMap=!!t.specularMap,u.useRoughnessMap=!!t.roughnessMap,u.useMetalnessMap=!!t.metalnessMap,u.useGlossinessMap=!!t.glossinessMap,u.useEnvMap=!!o,u.envMapCombine=t.envMapCombine,u.useClearcoat=t.clearcoat>0,u.useClearcoatMap=u.useClearcoat&&!!t.clearcoatMap,u.useClearcoatRoughnessMap=u.useClearcoat&&!!t.clearcoatRoughnessMap,u.useClearcoatNormalMap=u.useClearcoat&&!!t.clearcoatNormalMap,u.useUv1=u.useDiffuseMap===1||u.useAlphaMap===1||u.useEmissiveMap===1||u.useAOMap===1||u.useNormalMap||u.useBumpMap||u.useSpecularMap||u.useRoughnessMap||u.useMetalnessMap||u.useGlossinessMap||u.useClearcoatMap||u.useClearcoatNormalMap||u.useClearcoatRoughnessMap,u.useUv2=u.useDiffuseMap===2||u.useAlphaMap===2||u.useEmissiveMap===2||u.useAOMap===2,u.useAmbientLight=!!s&&s.useAmbient,u.useSphericalHarmonicsLight=!!s&&s.useSphericalHarmonics,u.hemisphereLightNum=s?s.hemisNum:0,u.directLightNum=s?s.directsNum:0,u.pointLightNum=s?s.pointsNum:0,u.spotLightNum=s?s.spotsNum:0,u.directShadowNum=n.receiveShadow&&s?s.directShadowNum:0,u.pointShadowNum=n.receiveShadow&&s?s.pointShadowNum:0,u.spotShadowNum=n.receiveShadow&&s?s.spotShadowNum:0,u.useShadow=n.receiveShadow&&!!s&&s.shadowsNum>0,u.useShadowSampler=e.version>=2&&!c,u.shadowType=n.shadowType,!u.useShadowSampler&&u.shadowType!==de.HARD&&(u.shadowType=de.POISSON_SOFT),u.dithering=t.dithering;const f=a.currentRenderTarget;u.gammaFactor=i.gammaFactor,u.outputEncoding=f.texture?sn(f.texture):i.outputEncoding,u.diffuseMapEncoding=sn(t.diffuseMap||t.cubeMap),u.envMapEncoding=sn(o),u.emissiveMapEncoding=sn(t.emissiveMap),u.alphaTest=t.alphaTest,u.premultipliedAlpha=t.premultipliedAlpha,u.useVertexColors=t.vertexColors,u.useVertexTangents=!!t.normalMap&&t.vertexTangents,u.numClippingPlanes=h,u.flatShading=t.shading===xt.FLAT_SHADING,u.fog=!!r,u.fogExp2=!!r&&r.isFogExp2,u.sizeAttenuation=t.sizeAttenuation,u.doubleSided=t.side===oe.DOUBLE,u.flipSided=t.side===oe.BACK,u.packDepthToRGBA=t.packToRGBA,u.logarithmicDepthBuffer=!!l,u.rendererExtensionFragDepth=e.version>=2||!!e.getExtension("EXT_frag_depth"),u.morphTargets=!!n.morphTargetInfluences,u.morphNormals=!!n.morphTargetInfluences&&n.geometry.morphAttributes.normal;const d=n.isSkinnedMesh&&n.skeleton,_=e.maxVertexUniformVectors,p=e.maxVertexTextures>0&&(!!e.getExtension("OES_texture_float")||e.version>=2);let m=0;return p?m=1024:(m=n.skeleton?n.skeleton.bones.length:0,m*16>_&&(console.warn("Program: too many bones ("+m+"), current cpu only support "+Math.floor(_/16)+" bones!!"),m=Math.floor(_/16))),u.useSkinning=d,u.bonesNum=m,u.useVertexTexture=p,u}function sn(a){let e;return a?a.encoding&&(e=a.encoding):e=Te.LINEAR,e}function mr(a){switch(a){case Te.LINEAR:return["Linear","(value)"];case Te.SRGB:return["sRGB","(value)"];case Te.GAMMA:return["Gamma","(value, float(GAMMA_FACTOR))"];default:console.error("unsupported encoding: "+a)}}function Qn(a,e){const t=mr(e);return"vec4 "+a+"(vec4 value) { return "+t[0]+"ToLinear"+t[1]+"; }"}function Jl(a,e){const t=mr(e);return"vec4 "+a+"(vec4 value) { return LinearTo"+t[0]+t[1]+"; }"}function ec(a,e,t,n,i){let s=["precision "+t.precision+" float;","precision "+t.precision+" int;","precision "+t.precision+" sampler2D;","#define SHADER_NAME "+t.shaderName,e,t.version>=2?"#define WEBGL2":"",t.useRoughnessMap?"#define USE_ROUGHNESSMAP":"",t.useMetalnessMap?"#define USE_METALNESSMAP":"",t.useGlossinessMap?"#define USE_GLOSSINESSMAP":"",t.useAmbientLight?"#define USE_AMBIENT_LIGHT":"",t.useSphericalHarmonicsLight?"#define USE_SPHERICALHARMONICS_LIGHT":"",t.useNormalMap?"#define USE_NORMAL_MAP":"",t.useBumpMap?"#define USE_BUMPMAP":"",t.useSpecularMap?"#define USE_SPECULARMAP":"",t.useEmissiveMap?"#define USE_EMISSIVEMAP "+t.useEmissiveMap:"",t.useShadow?"#define USE_SHADOW":"",t.flatShading?"#define FLAT_SHADED":"",t.flipSided?"#define FLIP_SIDED":"",t.useDiffuseMap?"#define USE_DIFFUSE_MAP "+t.useDiffuseMap:"",t.useAlphaMap?"#define USE_ALPHA_MAP "+t.useAlphaMap:"",t.useEnvMap?"#define USE_ENV_MAP":"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.useAOMap?"#define USE_AOMAP "+t.useAOMap:"",t.useVertexColors==$e.RGB?"#define USE_VCOLOR_RGB":"",t.useVertexColors==$e.RGBA?"#define USE_VCOLOR_RGBA":"",t.useVertexTangents?"#define USE_TANGENT":"",t.useUv1?"#define USE_UV1":"",t.useUv2?"#define USE_UV2":"",t.fog?"#define USE_FOG":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.useSkinning?"#define USE_SKINNING":"",t.bonesNum>0?"#define MAX_BONES "+t.bonesNum:"",t.useVertexTexture?"#define BONE_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"",`
`].filter(Es).join(`
`),r=[t.useStandardDerivatives&&t.version<2?"#extension GL_OES_standard_derivatives : enable":"",t.useShaderTextureLOD&&t.version<2?"#extension GL_EXT_shader_texture_lod : enable":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth&&t.version<2?"#extension GL_EXT_frag_depth : enable":"","precision "+t.precision+" float;","precision "+t.precision+" int;","precision "+t.precision+" sampler2D;",t.version>=2?"precision "+t.precision+" sampler2DShadow;":"",t.version>=2?"precision "+t.precision+" samplerCubeShadow;":"","#define SHADER_NAME "+t.shaderName,"#define PI 3.14159265359","#define EPSILON 1e-6","float pow2(const in float x) { return x * x; }","#define LOG2 1.442695","#define RECIPROCAL_PI 0.31830988618","#define saturate(a) clamp(a, 0.0, 1.0)","#define whiteCompliment(a) (1.0 - saturate(a))","highp float rand(const in vec2 uv) {","	const highp float a = 12.9898, b = 78.233, c = 43758.5453;","	highp float dt = dot(uv.xy, vec2(a, b)), sn = mod(dt, PI);","	return fract(sin(sn) * c);","}",e,t.version>=2?"#define WEBGL2":"",t.useShadowSampler?"#define USE_SHADOW_SAMPLER":"#define sampler2DShadow sampler2D",t.useRoughnessMap?"#define USE_ROUGHNESSMAP":"",t.useMetalnessMap?"#define USE_METALNESSMAP":"",t.useGlossinessMap?"#define USE_GLOSSINESSMAP":"",t.useClearcoat?"#define USE_CLEARCOAT":"",t.useClearcoatMap?"#define USE_CLEARCOATMAP":"",t.useClearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.useClearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.useAmbientLight?"#define USE_AMBIENT_LIGHT":"",t.useSphericalHarmonicsLight?"#define USE_SPHERICALHARMONICS_LIGHT":"",t.useNormalMap?"#define USE_NORMAL_MAP":"",t.useBumpMap?"#define USE_BUMPMAP":"",t.useSpecularMap?"#define USE_SPECULARMAP":"",t.useEmissiveMap?"#define USE_EMISSIVEMAP "+t.useEmissiveMap:"",t.useShadow?"#define USE_SHADOW":"",t.shadowType===de.HARD?"#define USE_HARD_SHADOW":"",t.shadowType===de.POISSON_SOFT?"#define USE_POISSON_SOFT_SHADOW":"",t.shadowType===de.PCF3_SOFT?"#define USE_PCF3_SOFT_SHADOW":"",t.shadowType===de.PCF5_SOFT?"#define USE_PCF5_SOFT_SHADOW":"",t.shadowType===de.PCSS16_SOFT?"#define USE_PCSS16_SOFT_SHADOW":"",t.shadowType===de.PCSS32_SOFT?"#define USE_PCSS32_SOFT_SHADOW":"",t.shadowType===de.PCSS64_SOFT?"#define USE_PCSS64_SOFT_SHADOW":"",t.shadowType===de.PCSS16_SOFT||t.shadowType===de.PCSS32_SOFT||t.shadowType===de.PCSS64_SOFT?"#define USE_PCSS_SOFT_SHADOW":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.useShaderTextureLOD?"#define TEXTURE_LOD_EXT":"",t.useDiffuseMap?"#define USE_DIFFUSE_MAP "+t.useDiffuseMap:"",t.useAlphaMap?"#define USE_ALPHA_MAP "+t.useAlphaMap:"",t.useEnvMap?"#define USE_ENV_MAP":"",t.useAOMap?"#define USE_AOMAP "+t.useAOMap:"",t.useVertexColors==$e.RGB?"#define USE_VCOLOR_RGB":"",t.useVertexColors==$e.RGBA?"#define USE_VCOLOR_RGBA":"",t.useVertexTangents?"#define USE_TANGENT":"",t.premultipliedAlpha?"#define USE_PREMULTIPLIED_ALPHA":"",t.fog?"#define USE_FOG":"",t.fogExp2?"#define USE_EXP2_FOG":"",t.alphaTest?"#define ALPHATEST "+t.alphaTest:"",t.useEnvMap?"#define "+t.envMapCombine:"","#define GAMMA_FACTOR "+t.gammaFactor,t.useUv1?"#define USE_UV1":"",t.useUv2?"#define USE_UV2":"",t.dithering?"#define DITHERING":"",dr.encodings_pars_frag,Qn("mapTexelToLinear",t.diffuseMapEncoding),t.useEnvMap?Qn("envMapTexelToLinear",t.envMapEncoding):"",t.useEmissiveMap?Qn("emissiveMapTexelToLinear",t.emissiveMapEncoding):"",Jl("linearToOutputTexel",t.outputEncoding),t.packDepthToRGBA?"#define DEPTH_PACKING_RGBA":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"",`
`].filter(Es).join(`
`),o=n,l=i;if(o=vi(o),l=vi(l),o=Ss(o,t),l=Ss(l,t),o=Ms(o,t),l=Ms(l,t),o=ys(o),l=ys(l),t.version>1){s=[`#version 300 es
`,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+s,l=l.replace("#extension GL_EXT_draw_buffers : require","");let c=0;const h=[];for(;l.indexOf("gl_FragData["+c+"]")>-1;)l=l.replace("gl_FragData["+c+"]","pc_fragData"+c),h.push("layout(location = "+c+") out highp vec4 pc_fragData"+c+";"),c++;r=[`#version 300 es
`,"#define varying in",l.indexOf("layout")>-1||h.length>0?"":"out highp vec4 pc_fragColor;","#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad",h.join(`
`)].join(`
`)+`
`+r}return o=s+o,l=r+l,new Ql(a,o,l)}const vi=function(a){const e=/#include +<([\w\d.]+)>/g;function t(n,i){const s=dr[i];if(s===void 0)throw new Error("Can not resolve #include <"+i+">");return vi(s)}return a.replace(e,t)};function Es(a){return a!==""}function Ss(a,e){return a.replace(/NUM_HEMI_LIGHTS/g,e.hemisphereLightNum).replace(/NUM_DIR_LIGHTS/g,e.directLightNum).replace(/NUM_SPOT_LIGHTS/g,e.spotLightNum).replace(/NUM_POINT_LIGHTS/g,e.pointLightNum).replace(/NUM_DIR_SHADOWS/g,e.directShadowNum).replace(/NUM_SPOT_SHADOWS/g,e.spotShadowNum).replace(/NUM_POINT_SHADOWS/g,e.pointShadowNum)}function Ms(a,e){return a.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes)}const tc=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function nc(a,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"["+s+"]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function ys(a){return a.replace(tc,nc)}class ic extends Ye{constructor(e,t,n){super(e),this._gl=t,this._capabilities=n;const i=n.timerQuery,s=this,r=o=>{const l=o.target,c=s.get(l);l.removeEventListener("dispose",r),c._webglQuery&&(n.version>1?t.deleteQuery(c._webglQuery):i.deleteQueryEXT(c._webglQuery)),s.delete(l)};this._onQueryDispose=r,this._typeToGL={[vn.ANY_SAMPLES_PASSED]:35887,[vn.ANY_SAMPLES_PASSED_CONSERVATIVE]:36202,[vn.TIME_ELAPSED]:35007}}_get(e){const t=this._capabilities,n=this.get(e);return n._webglQuery===void 0&&(e.addEventListener("dispose",this._onQueryDispose),n._webglQuery=t.version>1?this._gl.createQuery():t.timerQuery.createQueryEXT(),n._target=null,n._result=null),n}begin(e,t){const n=this._capabilities,i=this._typeToGL,s=this._get(e);n.version>1?this._gl.beginQuery(i[t],s._webglQuery):n.timerQuery.beginQueryEXT(i[t],s._webglQuery),s._target=t,s._result=null}end(e){const t=this._capabilities,n=this._typeToGL,i=this._get(e);t.version>1?this._gl.endQuery(n[i._target]):t.timerQuery.endQueryEXT(n[i._target])}counter(e){const t=this._capabilities.timerQuery,n=this._get(e);t.queryCounterEXT(n._webglQuery,t.TIMESTAMP_EXT),n._target=t.TIMESTAMP_EXT,n._result=null}isResultAvailable(e){const t=this._gl,n=this._capabilities,i=n.timerQuery,s=this._get(e);let r;return n.version>1?r=t.getQueryParameter(s._webglQuery,t.QUERY_RESULT_AVAILABLE):r=i.getQueryObjectEXT(s._webglQuery,i.QUERY_RESULT_AVAILABLE),r}isTimerDisjoint(){return this._gl.getParameter(this._capabilities.timerQuery.GPU_DISJOINT_EXT)}getResult(e){const t=this._gl,n=this._capabilities,i=n.timerQuery,s=this._get(e);return s._result===null&&(n.version>1?s._result=t.getQueryParameter(s._webglQuery,t.QUERY_RESULT):s._result=i.getQueryObjectEXT(s._webglQuery,i.QUERY_RESULT_EXT)),s._result}}class sc{constructor(e,t){this._gl=e,this._capabilities=t}getGLType(e){const t=this._gl,n=this._capabilities,i=n.version>=2;if(e===F.UNSIGNED_BYTE)return t.UNSIGNED_BYTE;if(e===F.UNSIGNED_SHORT_5_6_5)return t.UNSIGNED_SHORT_5_6_5;if(e===F.UNSIGNED_SHORT_4_4_4_4)return t.UNSIGNED_SHORT_4_4_4_4;if(e===F.UNSIGNED_SHORT_5_5_5_1)return t.UNSIGNED_SHORT_5_5_5_1;let s;if(i){if(e===F.UNSIGNED_SHORT)return t.UNSIGNED_SHORT;if(e===F.UNSIGNED_INT)return t.UNSIGNED_INT;if(e===F.UNSIGNED_INT_24_8)return t.UNSIGNED_INT_24_8;if(e===F.FLOAT)return t.FLOAT;if(e===F.HALF_FLOAT)return t.HALF_FLOAT;if(e===F.FLOAT_32_UNSIGNED_INT_24_8_REV)return t.FLOAT_32_UNSIGNED_INT_24_8_REV;if(e===F.BYTE)return t.BYTE;if(e===F.SHORT)return t.SHORT;if(e===F.INT)return t.INT}else{if(e===F.UNSIGNED_SHORT||e===F.UNSIGNED_INT||e===F.UNSIGNED_INT_24_8)if(s=n.getExtension("WEBGL_depth_texture"),s){if(e===F.UNSIGNED_SHORT)return t.UNSIGNED_SHORT;if(e===F.UNSIGNED_INT)return t.UNSIGNED_INT;if(e===F.UNSIGNED_INT_24_8)return s.UNSIGNED_INT_24_8_WEBGL}else return console.warn("extension WEBGL_depth_texture is not support."),null;if(e===F.FLOAT)return s=n.getExtension("OES_texture_float"),s?t.FLOAT:(console.warn("extension OES_texture_float is not support."),null);if(e===F.HALF_FLOAT)return s=n.getExtension("OES_texture_half_float"),s?s.HALF_FLOAT_OES:(console.warn("extension OES_texture_half_float is not support."),null)}return t[e]!==void 0?t[e]:e}getGLFormat(e){const t=this._gl,n=this._capabilities;if(e===y.RGB)return t.RGB;if(e===y.RGBA)return t.RGBA;if(e===y.ALPHA)return t.ALPHA;if(e===y.LUMINANCE)return t.LUMINANCE;if(e===y.LUMINANCE_ALPHA)return t.LUMINANCE_ALPHA;if(e===y.DEPTH_COMPONENT)return t.DEPTH_COMPONENT;if(e===y.DEPTH_STENCIL)return t.DEPTH_STENCIL;if(e===y.RED)return t.RED;if(e===y.RED_INTEGER)return t.RED_INTEGER;if(e===y.RG)return t.RG;if(e===y.RG_INTEGER)return t.RG_INTEGER;if(e===y.RGB_INTEGER)return t.RGB_INTEGER;if(e===y.RGBA_INTEGER)return t.RGBA_INTEGER;let i;if(e===y.RGB_S3TC_DXT1||e===y.RGBA_S3TC_DXT1||e===y.RGBA_S3TC_DXT3||e===y.RGBA_S3TC_DXT5)if(i=n.getExtension("WEBGL_compressed_texture_s3tc"),i){if(e===y.RGB_S3TC_DXT1)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(e===y.RGBA_S3TC_DXT1)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(e===y.RGBA_S3TC_DXT3)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(e===y.RGBA_S3TC_DXT5)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return console.warn("extension WEBGL_compressed_texture_s3tc is not support."),null;if(e===y.RGB_PVRTC_4BPPV1||e===y.RGB_PVRTC_2BPPV1||e===y.RGBA_PVRTC_4BPPV1||e===y.RGBA_PVRTC_2BPPV1)if(i=n.getExtension("WEBGL_compressed_texture_pvrtc"),i){if(e===y.RGB_PVRTC_4BPPV1)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(e===y.RGB_PVRTC_2BPPV1)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(e===y.RGBA_PVRTC_4BPPV1)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(e===y.RGBA_PVRTC_2BPPV1)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return console.warn("extension WEBGL_compressed_texture_pvrtc is not support."),null;return e===y.RGB_ETC1?(i=n.getExtension("WEBGL_compressed_texture_etc1"),i?i.COMPRESSED_RGB_ETC1_WEBGL:(console.warn("extension WEBGL_compressed_texture_etc1 is not support."),null)):e===y.RGBA_ASTC_4x4?(i=n.getExtension("WEBGL_compressed_texture_astc"),i?i.COMPRESSED_RGBA_ASTC_4x4_KHR:(console.warn("extension WEBGL_compressed_texture_astc is not support."),null)):e===y.RGBA_BPTC?(i=n.getExtension("EXT_texture_compression_bptc"),i?i.COMPRESSED_RGBA_BPTC_UNORM_EXT:(console.warn("extension EXT_texture_compression_bptc is not support."),null)):t[e]!==void 0?t[e]:e}getGLInternalFormat(e){const t=this._gl,n=this._capabilities,i=n.version>=2;if(e===y.RGBA4)return t.RGBA4;if(e===y.RGB5_A1)return t.RGB5_A1;if(e===y.DEPTH_COMPONENT16)return t.DEPTH_COMPONENT16;if(e===y.STENCIL_INDEX8)return t.STENCIL_INDEX8;if(e===y.DEPTH_STENCIL)return t.DEPTH_STENCIL;let s;if(i){if(e===y.R8)return t.R8;if(e===y.RG8)return t.RG8;if(e===y.RGB8)return t.RGB8;if(e===y.RGBA8)return t.RGBA8;if(e===y.DEPTH_COMPONENT24)return t.DEPTH_COMPONENT24;if(e===y.DEPTH_COMPONENT32F)return t.DEPTH_COMPONENT32F;if(e===y.DEPTH24_STENCIL8)return t.DEPTH24_STENCIL8;if(e===y.DEPTH32F_STENCIL8)return t.DEPTH32F_STENCIL8;if(e===y.R16F||e===y.RG16F||e===y.RGB16F||e===y.RGBA16F||e===y.R32F||e===y.RG32F||e===y.RGB32F||e===y.RGBA32F)if(s=n.getExtension("EXT_color_buffer_float"),s){if(e===y.R16F)return t.R16F;if(e===y.RG16F)return t.RG16F;if(e===y.RGB16F)return t.RGB16F;if(e===y.RGBA16F)return t.RGBA16F;if(e===y.R32F)return t.R32F;if(e===y.RG32F)return t.RG32F;if(e===y.RGB32F)return t.RGB32F;if(e===y.RGBA32F)return t.RGBA32F}else return console.warn("extension EXT_color_buffer_float is not support."),null}else if(e===y.RGBA32F||e===y.RGB32F)if(s=n.getExtension("WEBGL_color_buffer_float"),s){if(e===y.RGBA32F)return s.RGBA32F_EXT;if(e===y.RGB32F)return s.RGB32F_EXT}else return console.warn("extension WEBGL_color_buffer_float is not support."),null;return t[e]!==void 0?t[e]:e}}function Ps(a,e,t,n){const i=new Uint8Array(4),s=a.createTexture();a.bindTexture(e,s),a.texParameteri(e,a.TEXTURE_MIN_FILTER,a.NEAREST),a.texParameteri(e,a.TEXTURE_MAG_FILTER,a.NEAREST);for(let r=0;r<n;r++)a.texImage2D(t+r,0,a.RGBA,1,1,0,a.RGBA,a.UNSIGNED_BYTE,i);return s}function rc(a){let e=!1;const t=new me;let n=null;const i=new me(0,0,0,0);return{setMask:function(s){n!==s&&!e&&(a.colorMask(s,s,s,s),n=s)},setLocked:function(s){e=s},setClear:function(s,r,o,l,c){c===!0&&(s*=l,r*=l,o*=l),t.set(s,r,o,l),i.equals(t)===!1&&(a.clearColor(s,r,o,l),i.copy(t))},getClear:function(){return i},reset:function(){e=!1,n=null,i.set(-1,0,0,0)}}}function ac(a,e){let t=!1,n=null,i=null,s=null;return{setTest:function(r){r?e.enable(a.DEPTH_TEST):e.disable(a.DEPTH_TEST)},setMask:function(r){n!==r&&!t&&(a.depthMask(r),n=r)},setFunc:function(r){i!==r&&(a.depthFunc(r),i=r)},setLocked:function(r){t=r},setClear:function(r){s!==r&&(a.clearDepth(r),s=r)},reset:function(){t=!1,n=null,i=null,s=null}}}function oc(a,e){let t=!1,n=null,i=null,s=null,r=null,o=null,l=null,c=null,h=null,u=null,f=null,d=null,_=null,p=null,m=null;return{setTest:function(g){g?e.enable(a.STENCIL_TEST):e.disable(a.STENCIL_TEST)},setMask:function(g){n!==g&&!t&&(a.stencilMask(g),n=g)},setFunc:function(g,v,x,T,E,P){(i!==g||s!==v||r!==x||h!==T||u!==E||f!==P)&&(T===null||E===null||P===null?a.stencilFunc(g,v,x):(a.stencilFuncSeparate(a.FRONT,g,v,x),a.stencilFuncSeparate(a.BACK,T,E,P)),i=g,s=v,r=x,h=T,u=E,f=P)},setOp:function(g,v,x,T,E,P){(o!==g||l!==v||c!==x||d!==T||_!==E||p!==P)&&(T===null||E===null||P===null?a.stencilOp(g,v,x):(a.stencilOpSeparate(a.FRONT,g,v,x),a.stencilOpSeparate(a.BACK,T,E,P)),o=g,l=v,c=x,d=T,_=E,p=P)},setLocked:function(g){t=g},setClear:function(g){m!==g&&(a.clearStencil(g),m=g)},reset:function(){t=!1,n=null,i=null,s=null,r=null,o=null,l=null,c=null,h=null,u=null,f=null,d=null,_=null,p=null,m=null}}}class lc{constructor(e,t){this.gl=e,this.capabilities=t,this.colorBuffer=new rc(e),this.depthBuffer=new ac(e,this),this.stencilBuffer=new oc(e,this),this.states={},this.currentBlending=null,this.currentBlendEquation=null,this.currentBlendSrc=null,this.currentBlendDst=null,this.currentBlendEquationAlpha=null,this.currentBlendSrcAlpha=null,this.currentBlendDstAlpha=null,this.currentPremultipliedAlpha=null,this.currentFlipSided=!1,this.currentCullFace=null;const n=e.getParameter(e.VIEWPORT);this.currentViewport=new me().fromArray(n),this.currentLineWidth=null,this.currentPolygonOffsetFactor=null,this.currentPolygonOffsetUnits=null,this.currentProgram=null,this.currentBoundBuffers={},this.currentRenderTarget=null,this.currentTextureSlot=null,this.currentBoundTextures={},this.emptyTextures={},this.emptyTextures[e.TEXTURE_2D]=Ps(e,e.TEXTURE_2D,e.TEXTURE_2D,1),this.emptyTextures[e.TEXTURE_CUBE_MAP]=Ps(e,e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),this.blendEquationToGL={[Le.ADD]:e.FUNC_ADD,[Le.SUBTRACT]:e.FUNC_SUBTRACT,[Le.REVERSE_SUBTRACT]:e.FUNC_REVERSE_SUBTRACT,[Le.MIN]:e.MIN,[Le.MAX]:e.MAX},this.blendFactorToGL={[fe.ZERO]:e.ZERO,[fe.ONE]:e.ONE,[fe.SRC_COLOR]:e.SRC_COLOR,[fe.SRC_ALPHA]:e.SRC_ALPHA,[fe.SRC_ALPHA_SATURATE]:e.SRC_ALPHA_SATURATE,[fe.DST_COLOR]:e.DST_COLOR,[fe.DST_ALPHA]:e.DST_ALPHA,[fe.ONE_MINUS_SRC_COLOR]:e.ONE_MINUS_SRC_COLOR,[fe.ONE_MINUS_SRC_ALPHA]:e.ONE_MINUS_SRC_ALPHA,[fe.ONE_MINUS_DST_COLOR]:e.ONE_MINUS_DST_COLOR,[fe.ONE_MINUS_DST_ALPHA]:e.ONE_MINUS_DST_ALPHA},this.colorBuffer.setClear(0,0,0,1),this.depthBuffer.setClear(1),this.stencilBuffer.setClear(0),this.depthBuffer.setTest(!0),this.depthBuffer.setFunc(Tt.LEQUAL),this.setFlipSided(!1),this.setCullFace(ot.BACK)}enable(e){this.states[e]!==!0&&(this.gl.enable(e),this.states[e]=!0)}disable(e){this.states[e]!==!1&&(this.gl.disable(e),this.states[e]=!1)}setBlending(e,t,n,i,s,r,o,l){const c=this.gl;if(e===Ne.NONE){this.disable(c.BLEND);return}if(this.enable(c.BLEND),e!==Ne.CUSTOM)(e!==this.currentBlending||l!==this.currentPremultipliedAlpha)&&((this.currentBlendEquation!==Le.ADD||this.currentBlendEquationAlpha!==Le.ADD)&&(c.blendEquation(c.FUNC_ADD),this.currentBlendEquation=Le.ADD,this.currentBlendEquationAlpha=Le.ADD),e===Ne.NORMAL?l?c.blendFuncSeparate(c.ONE,c.ONE_MINUS_SRC_ALPHA,c.ONE,c.ONE_MINUS_SRC_ALPHA):c.blendFuncSeparate(c.SRC_ALPHA,c.ONE_MINUS_SRC_ALPHA,c.ONE,c.ONE_MINUS_SRC_ALPHA):e===Ne.ADD?l?c.blendFunc(c.ONE,c.ONE):c.blendFunc(c.SRC_ALPHA,c.ONE):e===Ne.SUB?c.blendFuncSeparate(c.ZERO,c.ONE_MINUS_SRC_COLOR,c.ZERO,c.ONE):e===Ne.MUL?l?c.blendFuncSeparate(c.ZERO,c.SRC_COLOR,c.ZERO,c.SRC_ALPHA):c.blendFunc(c.ZERO,c.SRC_COLOR):console.error("WebGLState: Invalid blending: ",e)),this.currentBlendSrc=null,this.currentBlendDst=null,this.currentBlendSrcAlpha=null,this.currentBlendDstAlpha=null;else{s=s||t,r=r||n,o=o||i;const h=this.blendEquationToGL,u=this.blendFactorToGL;(t!==this.currentBlendEquation||s!==this.currentBlendEquationAlpha)&&(c.blendEquationSeparate(h[t],h[s]),this.currentBlendEquation=t,this.currentBlendEquationAlpha=s),(n!==this.currentBlendSrc||i!==this.currentBlendDst||r!==this.currentBlendSrcAlpha||o!==this.currentBlendDstAlpha)&&(c.blendFuncSeparate(u[n],u[i],u[r],u[o]),this.currentBlendSrc=n,this.currentBlendDst=i,this.currentBlendSrcAlpha=r,this.currentBlendDstAlpha=o)}this.currentBlending=e,this.currentPremultipliedAlpha=l}setFlipSided(e){const t=this.gl;this.currentFlipSided!==e&&(e?t.frontFace(t.CW):t.frontFace(t.CCW),this.currentFlipSided=e)}setCullFace(e){const t=this.gl;e!==ot.NONE?(this.enable(t.CULL_FACE),e!==this.currentCullFace&&(e===ot.BACK?t.cullFace(t.BACK):e===ot.FRONT?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):this.disable(t.CULL_FACE),this.currentCullFace=e}viewport(e,t,n,i){const s=this.currentViewport;(s.x!==e||s.y!==t||s.z!==n||s.w!==i)&&(this.gl.viewport(e,t,n,i),s.set(e,t,n,i))}setLineWidth(e){if(e!==this.currentLineWidth){const t=this.capabilities.lineWidthRange;t[0]<=e&&e<=t[1]?this.gl.lineWidth(e):console.warn("GL_ALIASED_LINE_WIDTH_RANGE is ["+t[0]+","+t[1]+"], but set to "+e+"."),this.currentLineWidth=e}}setPolygonOffset(e,t,n){const i=this.gl;e?(this.enable(i.POLYGON_OFFSET_FILL),(this.currentPolygonOffsetFactor!==t||this.currentPolygonOffsetUnits!==n)&&(i.polygonOffset(t,n),this.currentPolygonOffsetFactor=t,this.currentPolygonOffsetUnits=n)):this.disable(i.POLYGON_OFFSET_FILL)}setProgram(e){this.currentProgram!==e&&(this.gl.useProgram(e.program),this.currentProgram=e)}bindBuffer(e,t){const n=this.gl;this.currentBoundBuffers[e]!==t&&(n.bindBuffer(e,t),this.currentBoundBuffers[e]=t)}activeTexture(e){const t=this.gl;e===void 0&&(e=t.TEXTURE0+this.capabilities.maxTextures-1),this.currentTextureSlot!==e&&(t.activeTexture(e),this.currentTextureSlot=e)}bindTexture(e,t){const n=this.gl;this.currentTextureSlot===null&&this.activeTexture();let i=this.currentBoundTextures[this.currentTextureSlot];i===void 0&&(i={type:void 0,texture:void 0},this.currentBoundTextures[this.currentTextureSlot]=i),(i.type!==e||i.texture!==t)&&(n.bindTexture(e,t||this.emptyTextures[e]),i.type=e,i.texture=t)}reset(){const e=this.gl;e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.cullFace(e.BACK),e.frontFace(e.CCW),e.viewport(0,0,e.canvas.width,e.canvas.height),e.lineWidth(1),e.polygonOffset(0,0),e.useProgram(null),e.bindFramebuffer(e.FRAMEBUFFER,null),e.activeTexture(e.TEXTURE0),this.colorBuffer.reset(),this.depthBuffer.reset(),this.stencilBuffer.reset(),this.states={},this.currentBlending=null,this.currentBlendEquation=null,this.currentBlendSrc=null,this.currentBlendDst=null,this.currentBlendEquationAlpha=null,this.currentBlendSrcAlpha=null,this.currentBlendDstAlpha=null,this.currentPremultipliedAlpha=null,this.currentFlipSided=!1,this.currentCullFace=null,this.currentViewport.set(0,0,e.canvas.width,e.canvas.height),this.currentLineWidth=null,this.currentPolygonOffsetFactor=null,this.currentPolygonOffsetUnits=null,this.currentProgram=null,this.currentBoundBuffers={},this.currentRenderTarget=null,this.currentTextureSlot=null,this.currentBoundTextures={}}setMaterial(e,t){this.setCullFace(e.side===oe.DOUBLE?ot.NONE:ot.BACK);let n=e.side===oe.BACK;t&&(n=!n),this.setFlipSided(n),e.blending===Ne.NORMAL&&e.transparent===!1?this.setBlending(Ne.NONE):this.setBlending(e.blending,e.blendEquation,e.blendSrc,e.blendDst,e.blendEquationAlpha,e.blendSrcAlpha,e.blendDstAlpha,e.premultipliedAlpha),this.depthBuffer.setFunc(e.depthFunc),this.depthBuffer.setTest(e.depthTest),this.depthBuffer.setMask(e.depthWrite),this.colorBuffer.setMask(e.colorWrite);const i=e.stencilTest;this.stencilBuffer.setTest(i),i&&(this.stencilBuffer.setMask(e.stencilWriteMask),this.stencilBuffer.setFunc(e.stencilFunc,e.stencilRef,e.stencilFuncMask,e.stencilFuncBack,e.stencilRefBack,e.stencilFuncMaskBack),this.stencilBuffer.setOp(e.stencilFail,e.stencilZFail,e.stencilZPass,e.stencilFailBack,e.stencilZFailBack,e.stencilZPassBack)),this.setPolygonOffset(e.polygonOffset,e.polygonOffsetFactor,e.polygonOffsetUnits),e.lineWidth!==void 0&&this.setLineWidth(e.lineWidth),e.alphaToCoverage===!0?this.enable(this.gl.SAMPLE_ALPHA_TO_COVERAGE):this.disable(this.gl.SAMPLE_ALPHA_TO_COVERAGE)}}class cc extends Ye{constructor(e,t,n,i,s){super(e),this._gl=t,this._state=n,this._capabilities=i,this._constants=s,this._usedTextureUnits=0;const r=this;function o(l){const c=l.target,h=r.get(c);c.removeEventListener("dispose",o),h.__webglTexture&&!h.__external&&t.deleteTexture(h.__webglTexture),r.delete(c)}this._onTextureDispose=o,this._wrappingToGL={[q.REPEAT]:t.REPEAT,[q.CLAMP_TO_EDGE]:t.CLAMP_TO_EDGE,[q.MIRRORED_REPEAT]:t.MIRRORED_REPEAT},this._filterToGL={[N.NEAREST]:t.NEAREST,[N.LINEAR]:t.LINEAR,[N.NEAREST_MIPMAP_NEAREST]:t.NEAREST_MIPMAP_NEAREST,[N.LINEAR_MIPMAP_NEAREST]:t.LINEAR_MIPMAP_NEAREST,[N.NEAREST_MIPMAP_LINEAR]:t.NEAREST_MIPMAP_LINEAR,[N.LINEAR_MIPMAP_LINEAR]:t.LINEAR_MIPMAP_LINEAR}}allocTexUnit(){const e=this._usedTextureUnits++;return e>=this._capabilities.maxTextures&&console.warn("trying to use "+e+" texture units while this GPU supports only "+this._capabilities.maxTextures),e}resetTextureUnits(){this._usedTextureUnits=0}setTexture2D(e,t){const n=this._gl,i=this._state,s=this._capabilities,r=this._constants;t!==void 0&&(t=n.TEXTURE0+t);const o=this.get(e);if(e.image&&o.__version!==e.version&&(!e.image.rtt||t===void 0)&&!o.__external){o.__webglTexture===void 0&&(e.addEventListener("dispose",this._onTextureDispose),o.__webglTexture=n.createTexture()),i.activeTexture(t),i.bindTexture(n.TEXTURE_2D,o.__webglTexture);let l=e.image;const c=Cs(l);c&&(l=Ns(l,s.maxTextureSize),bs(e)&&rn(l)===!1&&s.version<2&&(l=Ls(l)));const h=!rn(l)&&s.version<2;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,e.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,e.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,e.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.NONE),this._setTextureParameters(e,h);const u=r.getGLFormat(e.format),f=r.getGLType(e.type),d=e.internalformat!==null?r.getGLInternalFormat(e.internalformat):Yn(n,s,u,f),_=e.mipmaps;let p;if(c)if(_.length>0&&!h){for(let m=0,g=_.length;m<g;m++)p=_[m],n.texImage2D(n.TEXTURE_2D,m,d,u,f,p);e.generateMipmaps=!1,o.__maxMipLevel=_.length-1}else n.texImage2D(n.TEXTURE_2D,0,d,u,f,l),o.__maxMipLevel=0;else if(_.length>0&&!h){const m=l.isCompressed;for(let g=0,v=_.length;g<v;g++)p=_[g],m?n.compressedTexImage2D(n.TEXTURE_2D,g,d,p.width,p.height,0,p.data):n.texImage2D(n.TEXTURE_2D,g,d,p.width,p.height,e.border,u,f,p.data);e.generateMipmaps=!1,o.__maxMipLevel=_.length-1}else n.texImage2D(n.TEXTURE_2D,0,d,l.width,l.height,e.border,u,f,l.data),o.__maxMipLevel=0;return e.generateMipmaps&&!h&&this._generateMipmap(n.TEXTURE_2D,e,l.width,l.height),o.__version=e.version,o}return i.activeTexture(t),i.bindTexture(n.TEXTURE_2D,o.__webglTexture),o}setTextureCube(e,t){const n=this._gl,i=this._state,s=this._capabilities,r=this._constants;t!==void 0&&(t=n.TEXTURE0+t);const o=this.get(e);if(e.images.length===6&&o.__version!==e.version&&(!e.images[0].rtt||t===void 0)&&!o.__external){o.__webglTexture===void 0&&(e.addEventListener("dispose",this._onTextureDispose),o.__webglTexture=n.createTexture()),i.activeTexture(t),i.bindTexture(n.TEXTURE_CUBE_MAP,o.__webglTexture);const l=[];let c=!1;for(let p=0;p<6;p++){let m=e.images[p];const g=Cs(m);g&&(m=Ns(m,s.maxTextureSize),bs(e)&&rn(m)===!1&&s.version<2&&(m=Ls(m))),!rn(m)&&s.version<2&&(c=!0),l[p]=m,m.__isDom=g}n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,e.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,e.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,e.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.NONE),this._setTextureParameters(e,c);const h=r.getGLFormat(e.format),u=r.getGLType(e.type),f=e.internalformat!==null?r.getGLInternalFormat(e.internalformat):Yn(n,s,h,u),d=e.mipmaps;let _;for(let p=0;p<6;p++){const m=l[p];if(m.__isDom)if(d.length>0&&!c){for(let v=0,x=d.length;v<x;v++)_=d[v][p],n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+p,0,f,h,u,_);o.__maxMipLevel=d.length-1,e.generateMipmaps=!1}else n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+p,0,f,h,u,m),o.__maxMipLevel=0;else if(d.length>0&&!c){const v=m.isCompressed;for(let x=0,T=d.length;x<T;x++)_=d[x][p],v?n.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+p,x,f,_.width,_.height,0,_.data):n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+p,x,f,_.width,_.height,e.border,h,u,_.data);o.__maxMipLevel=d.length-1,e.generateMipmaps=!1}else n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+p,0,f,m.width,m.height,e.border,h,u,m.data),o.__maxMipLevel=0}return e.generateMipmaps&&!c&&this._generateMipmap(n.TEXTURE_CUBE_MAP,e,l[0].width,l[0].height),o.__version=e.version,o}return i.activeTexture(t),i.bindTexture(n.TEXTURE_CUBE_MAP,o.__webglTexture),o}setTexture3D(e,t){const n=this._gl,i=this._state,s=this._capabilities,r=this._constants;if(s.version<2){console.warn("Try to use Texture3D but browser not support WebGL2.0");return}t!==void 0&&(t=n.TEXTURE0+t);const o=this.get(e);if(e.image&&o.__version!==e.version&&!o.__external){o.__webglTexture===void 0&&(e.addEventListener("dispose",this._onTextureDispose),o.__webglTexture=n.createTexture()),i.activeTexture(t),i.bindTexture(n.TEXTURE_3D,o.__webglTexture);const l=e.image;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,e.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,e.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,e.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.NONE),this._setTextureParameters(e,!1);const c=r.getGLFormat(e.format),h=r.getGLType(e.type),u=e.internalformat!==null?r.getGLInternalFormat(e.internalformat):Yn(n,s,c,h);return n.texImage3D(n.TEXTURE_3D,0,u,l.width,l.height,l.depth,e.border,c,h,l.data),e.generateMipmaps&&this._generateMipmap(n.TEXTURE_3D,e,l.width,l.height),o.__version=e.version,o}return i.activeTexture(t),i.bindTexture(n.TEXTURE_3D,o.__webglTexture),o}setTextureExternal(e,t){const n=this._gl,i=this.get(e);i.__external||(i.__webglTexture?n.deleteTexture(i.__webglTexture):e.addEventListener("dispose",this._onTextureDispose)),i.__webglTexture=t,i.__external=!0}_setTextureParameters(e,t){const n=this._gl,i=this._capabilities,s=this._wrappingToGL,r=this._filterToGL;let o=n.TEXTURE_2D;e.isTextureCube&&(o=n.TEXTURE_CUBE_MAP),e.isTexture3D&&(o=n.TEXTURE_3D);const l=uc(e,t);n.texParameteri(o,n.TEXTURE_WRAP_S,s[l[0]]),n.texParameteri(o,n.TEXTURE_WRAP_T,s[l[1]]),e.isTexture3D&&n.texParameteri(o,n.TEXTURE_WRAP_R,s[l[2]]),n.texParameteri(o,n.TEXTURE_MAG_FILTER,r[l[3]]),n.texParameteri(o,n.TEXTURE_MIN_FILTER,r[l[4]]);const c=i.anisotropyExt;c&&n.texParameterf(o,c.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(l[5],i.maxAnisotropy)),i.version>=2&&(l[6]!==void 0?(n.texParameteri(o,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(o,n.TEXTURE_COMPARE_FUNC,l[6])):n.texParameteri(o,n.TEXTURE_COMPARE_MODE,n.NONE))}_generateMipmap(e,t,n,i){this._gl.generateMipmap(e);const r=this.get(t);r.__maxMipLevel=Math.log(Math.max(n,i))*Math.LOG2E}}function bs(a){return a.wrapS!==q.CLAMP_TO_EDGE||a.wrapT!==q.CLAMP_TO_EDGE||a.minFilter!==N.NEAREST&&a.minFilter!==N.LINEAR}function ws(a){return a===N.NEAREST||a===N.NEAREST_MIPMAP_LINEAR||a===N.NEAREST_MIPMAP_NEAREST?N.NEAREST:N.LINEAR}function rn(a){return un(a.width)&&un(a.height)}function Ls(a){if(a instanceof HTMLImageElement||a instanceof HTMLCanvasElement){const e=document.createElementNS("http://www.w3.org/1999/xhtml","canvas");return e.width=Wi(a.width),e.height=Wi(a.height),e.getContext("2d").drawImage(a,0,0,e.width,e.height),console.warn("image is not power of two ("+a.width+"x"+a.height+"). Resized to "+e.width+"x"+e.height,a),e}return a}function Ns(a,e){if(a.width>e||a.height>e){const t=e/Math.max(a.width,a.height),n=document.createElementNS("http://www.w3.org/1999/xhtml","canvas");return n.width=Math.floor(a.width*t),n.height=Math.floor(a.height*t),n.getContext("2d").drawImage(a,0,0,a.width,a.height,0,0,n.width,n.height),console.warn("image is too big ("+a.width+"x"+a.height+"). Resized to "+n.width+"x"+n.height,a),n}return a}function uc(a,e){let t=a.wrapS,n=a.wrapT,i=a.wrapR,s=a.magFilter,r=a.minFilter;const o=a.anisotropy,l=a.compare;return e&&(t=q.CLAMP_TO_EDGE,n=q.CLAMP_TO_EDGE,a.isTexture3D&&(i=q.CLAMP_TO_EDGE),(a.wrapS!==q.CLAMP_TO_EDGE||a.wrapT!==q.CLAMP_TO_EDGE)&&console.warn("Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to t3d.TEXTURE_WRAP.CLAMP_TO_EDGE.",a),s=ws(a.magFilter),r=ws(a.minFilter),(a.minFilter!==N.NEAREST&&a.minFilter!==N.LINEAR||a.magFilter!==N.NEAREST&&a.magFilter!==N.LINEAR)&&console.warn("Texture is not power of two. Texture.minFilter and Texture.magFilter should be set to t3d.TEXTURE_FILTER.NEAREST or t3d.TEXTURE_FILTER.LINEAR.",a)),[t,n,i,s,r,o,l]}function Yn(a,e,t,n){if(e.version>=2===!1)return t;let s=t;return t===a.RED&&(n===a.FLOAT&&(s=a.R32F),n===a.HALF_FLOAT&&(s=a.R16F),n===a.UNSIGNED_BYTE&&(s=a.R8)),t===a.RG&&(n===a.FLOAT&&(s=a.RG32F),n===a.HALF_FLOAT&&(s=a.RG16F),n===a.UNSIGNED_BYTE&&(s=a.RG8)),t===a.RGB&&(n===a.FLOAT&&(s=a.RGB32F),n===a.HALF_FLOAT&&(s=a.RGB16F),n===a.UNSIGNED_BYTE&&(s=a.RGB8)),t===a.RGBA&&(n===a.FLOAT&&(s=a.RGBA32F),n===a.HALF_FLOAT&&(s=a.RGBA16F),n===a.UNSIGNED_BYTE&&(s=a.RGBA8),n===a.UNSIGNED_SHORT_4_4_4_4&&(s=a.RGBA4),n===a.UNSIGNED_SHORT_5_5_5_1&&(s=a.RGB5_A1)),(t===a.DEPTH_COMPONENT||t===a.DEPTH_STENCIL)&&(s=a.DEPTH_COMPONENT16,n===a.FLOAT&&(s=a.DEPTH_COMPONENT32F),n===a.UNSIGNED_INT&&(s=a.DEPTH_COMPONENT24),n===a.UNSIGNED_INT_24_8&&(s=a.DEPTH24_STENCIL8),n===a.FLOAT_32_UNSIGNED_INT_24_8_REV&&(s=a.DEPTH32F_STENCIL8)),(s===a.R16F||s===a.R32F||s===a.RG16F||s===a.RG32F||s===a.RGB16F||s===a.RGB32F||s===a.RGBA16F||s===a.RGBA32F)&&e.getExtension("EXT_color_buffer_float"),s}function Cs(a){return typeof HTMLImageElement<"u"&&a instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&a instanceof HTMLCanvasElement||typeof HTMLVideoElement<"u"&&a instanceof HTMLVideoElement||typeof ImageBitmap<"u"&&a instanceof ImageBitmap}class hc extends Ye{constructor(e,t,n,i){super(e),this._gl=t,this._capabilities=n,this._constants=i;const s=this;function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=s.get(l);c.__webglRenderbuffer&&!c.__external&&t.deleteRenderbuffer(c.__webglRenderbuffer),s.delete(l)}this._onRenderBufferDispose=r}setRenderBuffer(e){const t=this._gl,n=this._capabilities,i=this._constants,s=this.get(e);if(s.__webglRenderbuffer===void 0){e.addEventListener("dispose",this._onRenderBufferDispose),s.__webglRenderbuffer=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,s.__webglRenderbuffer);const r=i.getGLInternalFormat(e.format);e.multipleSampling>0?(n.version<2&&console.error("render buffer multipleSampling is not support in webgl 1.0."),t.renderbufferStorageMultisample(t.RENDERBUFFER,Math.min(e.multipleSampling,n.maxSamples),r,e.width,e.height)):t.renderbufferStorage(t.RENDERBUFFER,r,e.width,e.height)}else t.bindRenderbuffer(t.RENDERBUFFER,s.__webglRenderbuffer);return s}setRenderBufferExternal(e,t){const n=this._gl,i=this.get(e);i.__external||(i.__webglRenderbuffer?n.deleteRenderbuffer(i.__webglRenderbuffer):e.addEventListener("dispose",this._onRenderBufferDispose)),i.__webglRenderbuffer=t,i.__external=!0}}class fc extends Ye{constructor(e,t,n,i,s,r,o){super(e),this._gl=t,this._state=n,this._capabilities=i,this._textures=s,this._renderBuffers=r,this._constants=o;const l=this;function c(h){const u=h.target;u.removeEventListener("dispose",c);const f=l.get(u);f.__webglFramebuffer&&t.deleteFramebuffer(f.__webglFramebuffer),l.delete(u),n.currentRenderTarget===u&&(n.currentRenderTarget=null)}this._onRenderTargetDispose=c}_setupRenderTarget(e){const t=this._gl,n=this._state,i=this._textures,s=this._renderBuffers,r=this._capabilities,o=this.get(e);e.addEventListener("dispose",this._onRenderTargetDispose);const l=t.createFramebuffer(),c=[];o.__webglFramebuffer=l,o.__drawBuffers=c,e.isRenderTargetCube&&(o.__currentActiveCubeFace=e.activeCubeFace,o.__currentActiveMipmapLevel=e.activeMipmapLevel),t.bindFramebuffer(t.FRAMEBUFFER,l);for(const h in e._attachments){const u=Rs[h];u===t.DEPTH_ATTACHMENT||u===t.DEPTH_STENCIL_ATTACHMENT?r.version<2&&!r.getExtension("WEBGL_depth_texture")&&console.warn("WebGLRenderTargets: extension WEBGL_depth_texture is not support."):u!==t.STENCIL_ATTACHMENT&&c.push(u);const f=e._attachments[h];if(f.isTexture2D){const d=i.setTexture2D(f);t.framebufferTexture2D(t.FRAMEBUFFER,u,t.TEXTURE_2D,d.__webglTexture,0),n.bindTexture(t.TEXTURE_2D,null)}else if(f.isTextureCube){const d=i.setTextureCube(f);t.framebufferTexture2D(t.FRAMEBUFFER,u,t.TEXTURE_CUBE_MAP_POSITIVE_X+e.activeCubeFace,d.__webglTexture,e.activeMipmapLevel),n.bindTexture(t.TEXTURE_CUBE_MAP,null)}else{const d=s.setRenderBuffer(f);t.framebufferRenderbuffer(t.FRAMEBUFFER,u,t.RENDERBUFFER,d.__webglRenderbuffer)}}c.sort(dc),r.version>=2?t.drawBuffers(c):r.getExtension("WEBGL_draw_buffers")&&r.getExtension("WEBGL_draw_buffers").drawBuffersWEBGL(c)}setRenderTarget(e){const t=this._gl,n=this._state,i=this._textures;let s;if(n.currentRenderTarget!==e&&(e.isRenderTargetBack?t.bindFramebuffer(t.FRAMEBUFFER,null):(s=this.get(e),s.__webglFramebuffer===void 0?this._setupRenderTarget(e):t.bindFramebuffer(t.FRAMEBUFFER,s.__webglFramebuffer)),n.currentRenderTarget=e),e.isRenderTargetCube){s=this.get(e);const r=e.activeCubeFace,o=e.activeMipmapLevel;if(s.__currentActiveCubeFace!==r||s.__currentActiveMipmapLevel!==o){for(const l in e._attachments){const c=e._attachments[l];if(c.isTextureCube){const h=i.get(c);t.framebufferTexture2D(t.FRAMEBUFFER,Rs[l],t.TEXTURE_CUBE_MAP_POSITIVE_X+r,h.__webglTexture,o)}}s.__currentActiveCubeFace=r,s.__currentActiveMipmapLevel=o}}}blitRenderTarget(e,t,n=!0,i=!0,s=!0){const r=this._gl,o=this._capabilities;if(o.version<2){console.warn("WebGLRenderTargets: blitFramebuffer not support by WebGL"+o.version);return}const l=this.get(e).__webglFramebuffer,c=this.get(t).__webglFramebuffer;r.bindFramebuffer(r.READ_FRAMEBUFFER,l),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,c);let h=0;n&&(h|=r.COLOR_BUFFER_BIT),i&&(h|=r.DEPTH_BUFFER_BIT),s&&(h|=r.STENCIL_BUFFER_BIT),r.blitFramebuffer(0,0,e.width,e.height,0,0,t.width,t.height,h,r.NEAREST)}readRenderTargetPixels(e,t,n,i,s){const r=this._gl,o=this._state,l=this._constants,c=o.currentRenderTarget;if(c&&c.texture){if(e>=0&&e<=c.width-n&&t>=0&&t<=c.height-i){const h=l.getGLType(c.texture.type),u=l.getGLFormat(c.texture.format);r.readPixels(e,t,n,i,u,h,s)}}else console.warn("WebGLRenderTargets.readRenderTargetPixels: readPixels from renderTarget failed. Framebuffer not bound or texture not attached.")}updateRenderTargetMipmap(e){const t=this._gl,n=this._state,i=this._capabilities,s=e.texture;if(s.generateMipmaps&&s.minFilter!==N.NEAREST&&s.minFilter!==N.LINEAR&&(_c(e)||i.version>=2)){let r=t.TEXTURE_2D;s.isTextureCube&&(r=t.TEXTURE_CUBE_MAP),s.isTexture3D&&(r=t.TEXTURE_3D);const o=this._textures.get(s).__webglTexture;n.bindTexture(r,o),t.generateMipmap(r),n.bindTexture(r,null)}}}const Rs={[M.COLOR_ATTACHMENT0]:36064,[M.COLOR_ATTACHMENT1]:36065,[M.COLOR_ATTACHMENT2]:36066,[M.COLOR_ATTACHMENT3]:36067,[M.COLOR_ATTACHMENT4]:36068,[M.COLOR_ATTACHMENT5]:36069,[M.COLOR_ATTACHMENT6]:36070,[M.COLOR_ATTACHMENT7]:36071,[M.COLOR_ATTACHMENT8]:36072,[M.COLOR_ATTACHMENT9]:36073,[M.COLOR_ATTACHMENT10]:36074,[M.COLOR_ATTACHMENT11]:36075,[M.COLOR_ATTACHMENT12]:36076,[M.COLOR_ATTACHMENT13]:36077,[M.COLOR_ATTACHMENT14]:36078,[M.COLOR_ATTACHMENT15]:36079,[M.DEPTH_ATTACHMENT]:36096,[M.STENCIL_ATTACHMENT]:36128,[M.DEPTH_STENCIL_ATTACHMENT]:33306};function dc(a,e){return a-e}function _c(a){return un(a.width)&&un(a.height)}class pc extends Ye{constructor(e,t,n){super(e),this._gl=t,this._capabilities=n}setBuffer(e,t,n){const i=this.get(e),s=i.glBuffer===void 0;!s&&i.version===e.version||(n&&n.reset(),s||i.__external?this._createGLBuffer(i,e,t):(this._updateGLBuffer(i.glBuffer,e,t),i.version=e.version))}removeBuffer(e){const t=this._gl,n=this.get(e);n.glBuffer&&!n.__external&&t.deleteBuffer(n.glBuffer),this.delete(e)}setBufferExternal(e,t){const n=this._gl,i=this.get(e);i.__external||i.glBuffer&&n.deleteBuffer(i.glBuffer);const s=Fs(n,e.array);i.glBuffer=t,i.type=s,i.bytesPerElement=e.array.BYTES_PER_ELEMENT,i.version=e.version,i.__external=!0}_createGLBuffer(e,t,n){const i=this._gl,s=t.array,r=t.usage,o=i.createBuffer();i.bindBuffer(n,o),i.bufferData(n,s,r),t.onUploadCallback();const l=Fs(i,s);e.glBuffer=o,e.type=l,e.bytesPerElement=s.BYTES_PER_ELEMENT,e.version=t.version,e.__external=!1}_updateGLBuffer(e,t,n){const i=this._gl,s=this._capabilities,r=t.array,o=t.updateRange;i.bindBuffer(n,e),o.count===-1?i.bufferSubData(n,0,r):(s.version>=2?i.bufferSubData(n,o.offset*r.BYTES_PER_ELEMENT,r,o.offset,o.count):i.bufferSubData(n,o.offset*r.BYTES_PER_ELEMENT,r.subarray(o.offset,o.offset+o.count)),o.count=-1)}}function Fs(a,e){let t;return e instanceof Float32Array?t=a.FLOAT:e instanceof Float64Array?console.warn("Unsupported data buffer format: Float64Array."):e instanceof Uint16Array?t=a.UNSIGNED_SHORT:e instanceof Int16Array?t=a.SHORT:e instanceof Uint32Array?t=a.UNSIGNED_INT:e instanceof Int32Array?t=a.INT:e instanceof Int8Array?t=a.BYTE:e instanceof Uint8Array?t=a.UNSIGNED_BYTE:t=a.FLOAT,t}class mc extends Ye{constructor(e,t,n){super(e);const i=this;function s(r){const o=r.target,l=i.get(o);o.removeEventListener("dispose",s);const c=l.program;c!==void 0&&(n.releaseByProgram(c),t.releaseProgram(c)),i.delete(o)}this._onMaterialDispose=s}setMaterial(e){const t=this.get(e);return t.program===void 0&&e.addEventListener("dispose",this._onMaterialDispose),t}}const qn="";class gc extends Ye{constructor(e,t,n,i){super(e),this._gl=t,this._capabilities=n,this._buffers=i,this._isWebGL2=n.version>=2,this._vaoExt=n.getExtension("OES_vertex_array_object"),this._vaoCache={},this._currentGeometryProgram="",this._currentVAO=null}setup(e,t,n){if(e.morphTargetInfluences)this.reset(),this._setupVertexAttributes(n,t),this._currentGeometryProgram=qn;else if(this._isWebGL2||this._vaoExt){const i=this.get(t);i._vaos===void 0&&(i._vaos={},this._vaoCache[t.id]=i._vaos);let s=i._vaos[n.id];s||(s=i._vaos[n.id]={version:-1,object:this._createVAO()}),this._bindVAO(s.object),s.version!==t.version&&(this._setupVertexAttributes(n,t),s.version=t.version)}else{const i=n.id+"_"+t.id+"_"+t.version;i!==this._currentGeometryProgram&&(this._setupVertexAttributes(n,t),this._currentGeometryProgram=i)}}releaseByGeometry(e){const t=this.get(e),n=t._vaos;if(n){for(const i in n){const s=n[i];s&&this._disposeVAO(s.object)}delete t._vaos,delete this._vaoCache[e.id]}}releaseByProgram(e){for(const t in this._vaoCache){const n=this._vaoCache[t];if(n){const i=n[e.id];if(!i)continue;this._disposeVAO(i.object),delete n[e.id]}}}reset(e){(this._currentVAO!==null||e)&&(this._isWebGL2?this._gl.bindVertexArray(null):this._vaoExt&&this._vaoExt.bindVertexArrayOES(null),this._currentVAO=null),this._currentGeometryProgram!==qn&&(this._currentGeometryProgram=qn)}_createVAO(){return this._isWebGL2?this._gl.createVertexArray():this._vaoExt?this._vaoExt.createVertexArrayOES():null}_bindVAO(e){this._currentVAO!==e&&(this._isWebGL2?this._gl.bindVertexArray(e):this._vaoExt&&this._vaoExt.bindVertexArrayOES(e),this._currentVAO=e)}_disposeVAO(e){this._isWebGL2?this._gl.deleteVertexArray(e):this._vaoExt&&this._vaoExt.deleteVertexArrayOES(e)}_setupVertexAttributes(e,t){const n=this._gl,i=this._isWebGL2,s=e.getAttributes(),r=this._capabilities,o=this._buffers;for(const l in s){const c=s[l],h=t.getAttribute(l);if(h){const u=h.size;c.count!==u&&console.warn("WebGLVertexArrayBindings: attribute "+l+" size not match! "+c.count+" : "+u);const f=h.buffer,d=o.get(f),_=d.type;c.format;for(let T=0,E=c.locationSize;T<E;T++)n.enableVertexAttribArray(c.location+T);if(h.divisor>0)for(let T=0,E=c.locationSize;T<E;T++)i?n.vertexAttribDivisor(c.location+T,h.divisor):r.getExtension("ANGLE_instanced_arrays")?r.getExtension("ANGLE_instanced_arrays").vertexAttribDivisorANGLE(c.location+T,h.divisor):console.warn("vertexAttribDivisor not supported");const p=d.bytesPerElement,m=d.glBuffer,g=f.stride,v=h.offset,x=h.normalized;if(n.bindBuffer(n.ARRAY_BUFFER,m),c.count===g&&c.locationSize===1)n.vertexAttribPointer(c.location,c.count,_,x,0,0);else for(let T=0;T<c.locationSize;T++)n.vertexAttribPointer(c.location+T,c.count/c.locationSize,_,x,p*g,p*(v+c.count/c.locationSize*T))}}if(t.index){const l=o.get(t.index.buffer);n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,l.glBuffer)}}}const xc=new me,an=new B,jn=new WeakMap,Zn=new Float32Array(8);let Kn=new Float32Array([]);function Ac(a){return a.geometry}function Tc(a){return a.material}function vc(a){return!0}function Ds(){}class gr extends Ua{constructor(e){super(e),this.capabilities={},this._textures=null,this._renderBuffers=null,this._renderTargets=null,this._buffers=null,this._geometries=null,this._programs=null,this._materials=null,this._state=null,this._vertexArrayBindings=null,this._queries=null,this.init(),this._currentMaterial=null}init(){const e=this.context,t=`_gl${this.increaseId()}`,n=new Il(e),i=new sc(e,n),s=new lc(e,n),r=new cc(t,e,s,n,i),o=new hc(t,e,n,i),l=new fc(t,e,s,n,r,o,i),c=new pc(t,e,n),h=new gc(t,e,n,c),u=new Bl(t,e,c,h),f=new jl(e,s,n),d=new mc(t,f,h),_=new ic(t,e,n);this.capabilities=n,this._textures=r,this._renderBuffers=o,this._renderTargets=l,this._buffers=c,this._geometries=u,this._programs=f,this._materials=d,this._state=s,this._vertexArrayBindings=h,this._queries=_}endRender(){super.endRender(),this._currentMaterial=null;const e=this._state;e.depthBuffer.setTest(!0),e.depthBuffer.setMask(!0),e.colorBuffer.setMask(!0)}clear(e,t,n){const i=this.context;let s=0;(e===void 0||e)&&(s|=i.COLOR_BUFFER_BIT),(t===void 0||t)&&(s|=i.DEPTH_BUFFER_BIT),(n===void 0||n)&&(s|=i.STENCIL_BUFFER_BIT),s>0&&i.clear(s)}setClearColor(e,t,n,i,s){this._state.colorBuffer.setClear(e,t,n,i,s)}getClearColor(){return this._state.colorBuffer.getClear()}setRenderTarget(e){this._renderTargets.setRenderTarget(e)}getRenderTarget(){return this._state.currentRenderTarget}blitRenderTarget(e,t,n=!0,i=!0,s=!0){this._renderTargets.blitRenderTarget(e,t,n,i,s)}readRenderTargetPixels(e,t,n,i,s){this._renderTargets.readRenderTargetPixels(e,t,n,i,s)}updateRenderTargetMipmap(e){this._renderTargets.updateRenderTargetMipmap(e)}setTextureExternal(e,t){this._textures.setTextureExternal(e,t)}setRenderBufferExternal(e,t){this._renderBuffers.setRenderBufferExternal(e,t)}setBufferExternal(e,t){this._buffers.setBufferExternal(e,t)}resetVertexArrayBindings(e){this._vertexArrayBindings.reset(e)}resetState(){this._state.reset()}beginQuery(e,t){this._queries.begin(e,t)}endQuery(e){this._queries.end(e)}queryCounter(e){this._queries.counter(e)}isTimerQueryDisjoint(e){return this._queries.isTimerDisjoint(e)}isQueryResultAvailable(e){return this._queries.isResultAvailable(e)}getQueryResult(e){return this._queries.getResult(e)}renderRenderableItem(e,t,n){const i=this._state,s=this.capabilities,r=this._vertexArrayBindings,o=this._textures,l=this._programs,c=this._passInfo,h=n.getGeometry||Ac,u=n.getMaterial||Tc,f=n.beforeRender||Ds,d=n.afterRender||Ds,_=n.ifRender||vc,p=n.renderInfo,m=t.scene,g=t.lights,v=t.camera,x=i.currentRenderTarget;if(!_(e))return;if(!c.enabled){console.warn("WebGLRenderer: beginRender must be called before renderRenderableItem.");return}const T=e.object,E=u.call(this,e),P=h.call(this,e),C=e.group,b=E.fog?m.fog:null,w=E.envMap!==void 0?E.envMap||m.environment:null;let U=m.clippingPlanesData,D=m.numClippingPlanes;E.clippingPlanes&&E.clippingPlanes.length>0&&(Kn.length<E.clippingPlanes.length*4&&(Kn=new Float32Array(E.clippingPlanes.length*4)),U=m.setClippingPlanesData(E.clippingPlanes,Kn),D=E.clippingPlanes.length),T.onBeforeRender(e,E),f.call(this,e,E);const L=this._materials.setMaterial(E);if(E.needsUpdate===!1)if(L.program===void 0)E.needsUpdate=!0;else if(L.fog!==b)E.needsUpdate=!0;else if(L.envMap!==w)E.needsUpdate=!0;else if(L.numClippingPlanes!==D)E.needsUpdate=!0;else if(L.logarithmicDepthBuffer!==m.logarithmicDepthBuffer)E.needsUpdate=!0;else if(t.outputEncoding!==L.outputEncoding||t.gammaFactor!==L.gammaFactor)E.needsUpdate=!0;else if(s.version>1&&m.disableShadowSampler!==L.disableShadowSampler)E.needsUpdate=!0;else{const X=E.acceptLight&&g.totalNum>0;(X!==L.acceptLight||X&&(!g.hash.compare(L.lightsHash)||T.receiveShadow!==L.receiveShadow||T.shadowType!==L.shadowType))&&(E.needsUpdate=!0)}if(E.needsUpdate){const X=L.program;L.program=l.getProgram(E,T,t,this.shaderCompileOptions),X&&(r.releaseByProgram(X),l.releaseProgram(X)),L.fog=b,L.envMap=w,L.logarithmicDepthBuffer=m.logarithmicDepthBuffer,L.acceptLight=E.acceptLight,L.lightsHash=g.hash.copyTo(L.lightsHash),L.receiveShadow=T.receiveShadow,L.shadowType=T.shadowType,L.numClippingPlanes=D,L.outputEncoding=t.outputEncoding,L.gammaFactor=t.gammaFactor,L.disableShadowSampler=m.disableShadowSampler,E.needsUpdate=!1}const R=L.program;if(n.onlyCompile||!R.isReady(s.parallelShaderCompileExt))return;i.setProgram(R),this._geometries.setGeometry(P,c),T.morphTargetInfluences&&this._updateMorphtargets(T,P,R),r.setup(T,P,R);let Q=!1;(R.lightId!==g.id||R.lightVersion!==g.version)&&(Q=!0,R.lightId=g.id,R.lightVersion=g.version);let k=!1;(R.cameraId!==v.id||R.cameraVersion!==v.version)&&(k=!0,R.cameraId=v.id,R.cameraVersion=v.version);let j=!1;(R.sceneId!==m.id||R.sceneVersion!==m.version)&&(j=!0,R.sceneId=m.id,R.sceneVersion=m.version);let J=!0;E.forceUpdateUniforms||(L.pass!==c.count?L.pass=c.count:J=this._currentMaterial!==E),this._currentMaterial=E;const Z=R.getUniforms();E.acceptLight&&this._uploadLights(Z,g,m.disableShadowSampler,Q),T.isSkinnedMesh&&this._uploadSkeleton(Z,T,m);for(let X=0,ie=Z.seq.length;X<ie;X++){const Y=Z.seq[X],be=Y.id,we=Y.internalGroup;if(E.uniforms&&E.uniforms[be]!==void 0){Y.set(E.uniforms[be],o);continue}if(we===1){let qe=T.worldMatrix;m.useAnchorMatrix&&(qe=an.copy(qe).premultiply(m.anchorMatrixInverse)),Y.set(qe.elements);continue}if(we===2&&k){Y.internalFun(v);continue}if(we===3&&j){Y.internalFun(m);continue}if(we===4&&J){Y.internalFun(E,o);continue}if(we===5){if(be==="u_PointScale"){const qe=x.height*.5;Y.set(qe)}else Y.internalFun(w,o);continue}be==="clippingPlanes"&&Y.set(U)}const W=T.worldMatrix.determinant()<0;i.setMaterial(E,W);const G=xc.set(x.width,x.height,x.width,x.height).multiply(v.rect);G.z-=G.x,G.w-=G.y,G.x=Math.floor(G.x),G.y=Math.floor(G.y),G.z=Math.floor(G.z),G.w=Math.floor(G.w),i.viewport(G.x,G.y,G.z,G.w),this._draw(P,E,C,p),o.resetTextureUnits(),d(e),T.onAfterRender(e)}_uploadLights(e,t,n,i){const s=this._textures;t.useAmbient&&i&&e.set("u_AmbientLightColor",t.ambient),t.useSphericalHarmonics&&i&&e.set("u_SphericalHarmonicsLightData",t.sh),t.hemisNum>0&&i&&e.set("u_Hemi",t.hemisphere),t.directsNum>0&&(i&&e.set("u_Directional",t.directional),t.directShadowNum>0&&(i&&e.set("u_DirectionalShadow",t.directionalShadow),e.has("directionalShadowMap")&&(this.capabilities.version>=2&&!n?e.set("directionalShadowMap",t.directionalShadowDepthMap,s):e.set("directionalShadowMap",t.directionalShadowMap,s),e.set("directionalShadowMatrix",t.directionalShadowMatrix)),e.has("directionalDepthMap")&&e.set("directionalDepthMap",t.directionalShadowMap,s))),t.pointsNum>0&&(i&&e.set("u_Point",t.point),t.pointShadowNum>0&&(i&&e.set("u_PointShadow",t.pointShadow),e.has("pointShadowMap")&&(e.set("pointShadowMap",t.pointShadowMap,s),e.set("pointShadowMatrix",t.pointShadowMatrix)))),t.spotsNum>0&&(i&&e.set("u_Spot",t.spot),t.spotShadowNum>0&&(i&&e.set("u_SpotShadow",t.spotShadow),e.has("spotShadowMap")&&(this.capabilities.version>=2&&!n?e.set("spotShadowMap",t.spotShadowDepthMap,s):e.set("spotShadowMap",t.spotShadowMap,s),e.set("spotShadowMatrix",t.spotShadowMatrix)),e.has("spotDepthMap")&&e.set("spotDepthMap",t.spotShadowMap,s)))}_uploadSkeleton(e,t,n){if(t.skeleton&&t.skeleton.bones.length>0){const i=t.skeleton,s=this.capabilities;s.maxVertexTextures>0&&(s.getExtension("OES_texture_float")||s.version>=2)?(i.boneTexture===void 0&&i.generateBoneTexture(s.version>=2),e.set("boneTexture",i.boneTexture,this._textures),e.set("boneTextureSize",i.boneTexture.image.width)):e.set("boneMatrices",i.boneMatrices),e.set("bindMatrix",t.bindMatrix.elements),an.copy(t.bindMatrixInverse),n.useAnchorMatrix&&an.multiply(n.anchorMatrix),e.set("bindMatrixInverse",an.elements)}}_updateMorphtargets(e,t,n){const i=e.morphTargetInfluences;jn.has(t)||jn.set(t,i.slice(0));const s=t.morphAttributes.position,r=t.morphAttributes.normal,o=jn.get(t);for(let c=0;c<o.length;c++)o[c]!==0&&(s&&t.removeAttribute("morphTarget"+c),r&&t.removeAttribute("morphNormal"+c));for(let c=0;c<i.length;c++)o[c]=i[c];o.length=i.length;let l=0;for(let c=0;c<o.length;c++){const h=o[c];h>0&&(s&&t.addAttribute("morphTarget"+l,s[c]),r&&t.addAttribute("morphNormal"+l,r[c]),Zn[l]=h,l++)}for(;l<8;l++)Zn[l]=0;n.getUniforms().set("morphTargetInfluences",Zn)}_draw(e,t,n,i){const s=this.context,r=this.capabilities,o=this._buffers,l=e.instanceCount,c=l>=0,h=!!n,u=h&&n.multiDrawCount!==void 0,f=e.index!==null;let d=0,_=1/0;if(!u){const p=e.getAttribute("a_Position");if(f?_=e.index.buffer.count:p&&(_=p.buffer.count),h&&(d=Math.max(d,n.start),_=Math.min(_,n.count)),_<0||_===1/0)return}if(f){const p=o.get(e.index.buffer),m=p.bytesPerElement,g=p.type;if(g===s.UNSIGNED_INT&&r.version<2&&!r.getExtension("OES_element_index_uint")&&console.warn("WebGLRenderer: draw elements type not support UNSIGNED_INT!"),c){if(l<=0)return;if(r.version>=2)s.drawElementsInstanced(t.drawMode,_,g,d*m,l);else if(r.getExtension("ANGLE_instanced_arrays"))r.getExtension("ANGLE_instanced_arrays").drawElementsInstancedANGLE(t.drawMode,_,g,d*m,l);else{console.warn("WebGLRenderer: using instanced draw but hardware does not support.");return}}else if(u){if(n.multiDrawCount<=0)return;const v=r.getExtension("WEBGL_multi_draw");if(!v){console.warn("WebGLRenderer: using multi draw but hardware does not support extension WEBGL_multi_draw.");return}v.multiDrawElementsWEBGL(t.drawMode,n.multiDrawCounts,0,g,n.multiDrawStarts,0,n.multiDrawCount)}else s.drawElements(t.drawMode,_,g,d*m)}else if(c){if(l<=0)return;if(r.version>=2)s.drawArraysInstanced(t.drawMode,d,_,l);else if(r.getExtension("ANGLE_instanced_arrays"))r.getExtension("ANGLE_instanced_arrays").drawArraysInstancedANGLE(t.drawMode,d,_,l);else{console.warn("WebGLRenderer: using instanced draw but hardware does not support.");return}}else if(u){if(n.multiDrawCount<=0)return;const p=r.getExtension("WEBGL_multi_draw");if(!p){console.warn("WebGLRenderer: using multi draw but hardware does not support extension WEBGL_multi_draw.");return}p.multiDrawArraysWEBGL(t.drawMode,n.multiDrawStarts,0,n.multiDrawCounts,0,n.multiDrawCount)}else s.drawArrays(t.drawMode,d,_);if(i){if(u){_=0;for(let p=0;p<n.multiDrawCount;p++)_+=n.multiDrawCounts[p]}i.update(_,t.drawMode,l<0?1:l)}}}class Ec extends ve{constructor(){super()}}Ec.prototype.isGroup=!0;Object.defineProperties(gr.prototype,{gl:{configurable:!0,get:function(){return this.context}},renderTarget:{configurable:!0,get:function(){return console.warn("WebGLRenderer: .renderTarget has been deprecated. All methods are moved to WebGLRenderer."),this._renderTargets}},state:{configurable:!0,get:function(){return console.warn("WebGLRenderer: .state has been deprecated. All methods are moved to WebGLRenderer."),this._state}},vertexArrayBindings:{configurable:!0,get:function(){return console.warn("WebGLRenderer: .vertexArrayBindings has been deprecated. All methods are moved to WebGLRenderer."),this._vertexArrayBindings}}});gr.prototype.render=function(a,e,t){this.renderRenderableItem(a,e,t)};Pe.MATCAP="matcap";class Qh{constructor(e,t){this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new A,this.up=new A(0,1,0),this.minDistance=0,this.maxDistance=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!0,this.dampingFactor=.1,this.enableDollying=!0,this.dollyingSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:37,UP:38,RIGHT:39,BOTTOM:40},this.mouseButtons={ORBIT:0,DOLLY:1,PAN:2},this.touches={ORBIT:1,DOLLY_PAN:2},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this._domElementKeyEvents=null,this.getPolarAngle=function(){return o.phi},this.getAzimuthalAngle=function(){return o.theta},this.listenToKeyEvents=function(S){S.addEventListener("keydown",Bi),n._domElementKeyEvents=S},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position)},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),s=i.NONE},this.update=function(){const S=new A,O=new A(0,1,0),K=new We,se=K.clone(),Be=new A,bt=new We,rt=2*Math.PI;return function(){K.setFromUnitVectors(n.up,O),se.copy(K).conjugate();const Vt=n.object.position;S.copy(Vt).sub(n.target),S.applyQuaternion(K),o.setFromVector3(S),n.autoRotate&&s===i.NONE&&b(P()),n.enableDamping?(o.theta+=l.theta*n.dampingFactor,o.phi+=l.phi*n.dampingFactor):(o.theta+=l.theta,o.phi+=l.phi);let xe=n.minAzimuthAngle,Re=n.maxAzimuthAngle;return isFinite(xe)&&isFinite(Re)&&(xe<-Math.PI?xe+=rt:xe>Math.PI&&(xe-=rt),Re<-Math.PI?Re+=rt:Re>Math.PI&&(Re-=rt),xe<=Re?o.theta=Math.max(xe,Math.min(Re,o.theta)):o.theta=o.theta>(xe+Re)/2?Math.max(xe,o.theta):Math.min(Re,o.theta)),o.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,o.phi)),o.makeSafe(),o.radius*=c,o.radius=Math.max(n.minDistance,Math.min(n.maxDistance,o.radius)),n.enableDamping===!0?n.target.addScaledVector(h,n.dampingFactor):n.target.add(h),S.setFromSpherical(o),S.applyQuaternion(se),Vt.copy(n.target).add(S),n.object.lookAt(n.target,n.up),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,h.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),h.set(0,0,0)),c=1,Be.distanceToSquared(n.object.position)>r||8*(1-bt.dot(n.object.quaternion))>r?(Be.copy(n.object.position),bt.copy(n.object.quaternion),!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",Gi),n.domElement.removeEventListener("pointerdown",Ii),n.domElement.removeEventListener("pointercancel",Ui),n.domElement.removeEventListener("wheel",Oi),n.domElement.removeEventListener("pointermove",gn),n.domElement.removeEventListener("pointerup",xn),n._domElementKeyEvents!==null&&n._domElementKeyEvents.removeEventListener("keydown",Bi)};const n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_DOLLY_PAN:4};let s=i.NONE;const r=1e-6,o=new cn,l=new cn;let c=1;const h=new A,u=new z,f=new z,d=new z,_=new z,p=new z,m=new z,g=new z,v=new z,x=new z,T=[],E={};function P(){return 2*Math.PI/60/60*n.autoRotateSpeed}function C(){return Math.pow(.95,n.dollyingSpeed)}function b(S){l.theta-=S}function w(S){l.phi-=S}const U=function(){const S=new A;return function(K,se){S.setFromMatrixColumn(se,0),S.multiplyScalar(-K),h.add(S)}}(),D=function(){const S=new A;return function(K,se){n.screenSpacePanning===!0?S.setFromMatrixColumn(se,1):(S.setFromMatrixColumn(se,0),S.crossVectors(n.up,S)),S.multiplyScalar(K),h.add(S)}}(),L=function(){const S=new A,O=new A;return function(se,Be){const bt=n.domElement,rt=n.object.position;S.copy(rt).sub(n.target);const ki=S.getLength(),Vt=O.set(0,0,ki).applyMatrix4(n.object.projectionMatrix).z,xe=O.set(0,-1,Vt).applyMatrix4(n.object.projectionMatrixInverse).y;U(2*se*xe/bt.clientHeight,n.object.matrix),D(2*Be*xe/bt.clientHeight,n.object.matrix)}}();function R(S){c/=S}function Q(S){c*=S}function k(S){u.set(S.clientX,S.clientY)}function j(S){g.set(S.clientX,S.clientY)}function J(S){_.set(S.clientX,S.clientY)}function Z(S){f.set(S.clientX,S.clientY),d.subVectors(f,u).multiplyScalar(n.rotateSpeed);const O=n.domElement;b(2*Math.PI*d.x/O.clientHeight),w(2*Math.PI*d.y/O.clientHeight),u.copy(f)}function W(S){v.set(S.clientX,S.clientY),x.subVectors(v,g),x.y>0?R(C()):x.y<0&&Q(C()),g.copy(v)}function G(S){p.set(S.clientX,S.clientY),m.subVectors(p,_).multiplyScalar(n.panSpeed),L(m.x,m.y),_.copy(p)}function X(S){S.deltaY<0?Q(C()):S.deltaY>0&&R(C())}function ie(S){let O=!1;switch(S.keyCode){case n.keys.UP:L(0,n.keyPanSpeed),O=!0;break;case n.keys.BOTTOM:L(0,-n.keyPanSpeed),O=!0;break;case n.keys.LEFT:L(n.keyPanSpeed,0),O=!0;break;case n.keys.RIGHT:L(-n.keyPanSpeed,0),O=!0;break}O&&S.preventDefault()}function Y(){if(T.length===1)u.set(T[0].pageX,T[0].pageY);else{const S=.5*(T[0].pageX+T[1].pageX),O=.5*(T[0].pageY+T[1].pageY);u.set(S,O)}}function be(){if(T.length===1)_.set(T[0].pageX,T[0].pageY);else{const S=.5*(T[0].pageX+T[1].pageX),O=.5*(T[0].pageY+T[1].pageY);_.set(S,O)}}function we(){const S=T[0].pageX-T[1].pageX,O=T[0].pageY-T[1].pageY,K=Math.sqrt(S*S+O*O);g.set(0,K)}function qe(){n.enableDollying&&we(),n.enablePan&&be()}function Dr(S){if(T.length==1)f.set(S.pageX,S.pageY);else{const K=An(S),se=.5*(S.pageX+K.x),Be=.5*(S.pageY+K.y);f.set(se,Be)}d.subVectors(f,u).multiplyScalar(n.rotateSpeed);const O=n.domElement;b(2*Math.PI*d.x/O.clientHeight),w(2*Math.PI*d.y/O.clientHeight),u.copy(f)}function Ir(S){if(T.length===1)p.set(S.pageX,S.pageY);else{const O=An(S),K=.5*(S.pageX+O.x),se=.5*(S.pageY+O.y);p.set(K,se)}m.subVectors(p,_).multiplyScalar(n.panSpeed),L(m.x,m.y),_.copy(p)}function Ur(S){const O=An(S),K=S.pageX-O.x,se=S.pageY-O.y,Be=Math.sqrt(K*K+se*se);v.set(0,Be),x.set(0,Math.pow(v.y/g.y,n.dollyingSpeed)),R(x.y),g.copy(v)}function Or(S){n.enableDollying&&Ur(S),n.enablePan&&Ir(S)}function Ii(S){n.enabled!==!1&&(T.length===0&&(n.domElement.setPointerCapture(S.pointerId),n.domElement.addEventListener("pointermove",gn),n.domElement.addEventListener("pointerup",xn)),kr(S),S.pointerType==="touch"?zr(S):Br(S))}function gn(S){n.enabled!==!1&&(S.pointerType==="touch"?Hr(S):Gr(S))}function xn(S){zi(S),T.length===0&&(n.domElement.releasePointerCapture(S.pointerId),n.domElement.removeEventListener("pointermove",gn),n.domElement.removeEventListener("pointerup",xn)),s=i.NONE}function Ui(S){zi(S)}function Br(S){switch(S.button){case n.mouseButtons.ORBIT:if(n.enableRotate===!1)return;k(S),s=i.ROTATE;break;case n.mouseButtons.DOLLY:if(n.enableDollying===!1)return;j(S),s=i.DOLLY;break;case n.mouseButtons.PAN:if(n.enablePan===!1)return;J(S),s=i.PAN;break}}function Gr(S){switch(s){case i.ROTATE:if(n.enableRotate===!1)return;Z(S);break;case i.DOLLY:if(n.enableDollying===!1)return;W(S);break;case i.PAN:if(n.enablePan===!1)return;G(S);break}}function Oi(S){n.enabled===!1||n.enableDollying===!1||s!==i.NONE||(S.preventDefault(),X(S))}function Bi(S){n.enabled===!1||n.enablePan===!1||ie(S)}function zr(S){switch(Hi(S),T.length){case n.touches.ORBIT:if(n.enableRotate===!1)return;Y(),s=i.TOUCH_ROTATE;break;case n.touches.DOLLY_PAN:if(n.enableDollying===!1&&n.enablePan===!1)return;qe(),s=i.TOUCH_DOLLY_PAN;break;default:s=i.NONE}}function Hr(S){switch(Hi(S),s){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;Dr(S);break;case i.TOUCH_DOLLY_PAN:if(n.enableDollying===!1&&n.enablePan===!1)return;Or(S);break;default:s=i.NONE}}function Gi(S){n.enabled!==!1&&S.preventDefault()}function kr(S){T.push(S)}function zi(S){delete E[S.pointerId];for(let O=0;O<T.length;O++)if(T[O].pointerId==S.pointerId){T.splice(O,1);return}}function Hi(S){let O=E[S.pointerId];O===void 0&&(O=new z,E[S.pointerId]=O),O.set(S.pageX,S.pageY)}function An(S){const O=S.pointerId===T[0].pointerId?T[1]:T[0];return E[O.pointerId]}n.domElement.addEventListener("contextmenu",Gi),n.domElement.addEventListener("pointerdown",Ii),n.domElement.addEventListener("pointercancel",Ui),n.domElement.addEventListener("wheel",Oi,{passive:!1}),this.update()}}class mn{constructor(e,t,n){this.autoUpdate=!0,this.needsUpdate=!0,this.enableCameraJitter=!1}needRender(){return this.autoUpdate?!0:this.needsUpdate?(this.needsUpdate=!1,!0):!1}setGeometryReplaceFunction(e){}setIfRenderReplaceFunction(e){}render(e,t,n,i){}output(e){}resize(e,t){this.needsUpdate=!0}dispose(){this.needsUpdate=!0}}class ne{constructor(){this.name="",this.bufferDependencies=[],this.active=!0,this.needCameraJitter=!1}render(e,t,n,i,s){console.error("Effect: .render() must be implemented in subclass.")}resize(e,t){}dispose(){}}const V=`
    attribute vec3 a_Position;
    attribute vec2 a_Uv;

    uniform mat4 u_ProjectionView;
    uniform mat4 u_Model;

    varying vec2 v_Uv;

    void main() {
        v_Uv = a_Uv;
        gl_Position = u_ProjectionView * u_Model * vec4(a_Position, 1.0);
    }
`,Ni={name:"ec_blur",defines:{NORMALTEX_ENABLED:0,DEPTHTEX_ENABLED:0,DEPTH_PACKING:0,KERNEL_SIZE_INT:"5",KERNEL_SIZE_FLOAT:"5.0"},uniforms:{tDiffuse:null,textureSize:[512,512],direction:0,blurSize:1,kernel:[.122581,.233062,.288713,.233062,.122581],normalTex:null,depthTex:null,projection:new Float32Array(16),viewInverseTranspose:new Float32Array(16),depthRange:1},vertexShader:V,fragmentShader:`
        uniform vec2 textureSize;
        uniform int direction;
        uniform float blurSize;
        uniform float kernel[KERNEL_SIZE_INT];

        #if NORMALTEX_ENABLED == 1
            uniform sampler2D normalTex;
            uniform mat4 viewInverseTranspose;
            vec3 getViewNormal(const in vec2 screenPosition) {
                vec3 normal = texture2D(normalTex, screenPosition).xyz * 2.0 - 1.0;
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
    `},Mt={name:"ec_additive",defines:{},uniforms:{texture1:null,colorWeight1:1,alphaWeight1:1,texture2:null,colorWeight2:1,alphaWeight2:1},vertexShader:V,fragmentShader:`
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
    `},Sc={name:"ec_multiply",defines:{},uniforms:{texture1:null,texture2:null},vertexShader:V,fragmentShader:`
        uniform sampler2D texture1;
        uniform sampler2D texture2;

        varying vec2 v_Uv;

        void main() {
            vec4 texel1 = texture2D(texture1, v_Uv);
            vec4 texel2 = texture2D(texture2, v_Uv);
            gl_FragColor = texel1 * texel2;
        }
    `},xr={name:"ec_copy",defines:{},uniforms:{tDiffuse:null},vertexShader:V,fragmentShader:`
        uniform sampler2D tDiffuse;

        varying vec2 v_Uv;

        void main() {
            gl_FragColor = texture2D(tDiffuse, v_Uv);
        }
    `},Ci={name:"ec_channel",defines:{},uniforms:{tDiffuse:null,channelMask:[1,0,0,0]},vertexShader:V,fragmentShader:`
        uniform sampler2D tDiffuse;
		uniform vec4 channelMask;

        varying vec2 v_Uv;

        void main() {
			float value = dot(texture2D(tDiffuse, v_Uv), channelMask);
            gl_FragColor = vec4(vec3(value), 1.0);
        }
    `},Xt={name:"ec_mask",defines:{},uniforms:{colorTexture:null,maskTexture:null,additiveTexture:null,channel:[1,0,0,0]},vertexShader:V,fragmentShader:`
        uniform sampler2D colorTexture;
		uniform sampler2D maskTexture;

		uniform sampler2D additiveTexture;

		uniform vec4 channel;

        varying vec2 v_Uv;

        void main() {
			vec4 colorTex = texture2D(colorTexture, v_Uv);
			vec4 maskTex = texture2D(maskTexture, v_Uv);
			vec4 addTex = texture2D(additiveTexture, v_Uv);
            gl_FragColor = colorTex * dot(maskTex, channel) + addTex;
        }
    `},Ar={name:"ec_highlight",defines:{},uniforms:{tDiffuse:null,threshold:1,smoothWidth:.01},vertexShader:V,fragmentShader:`
        uniform float threshold;
		uniform float smoothWidth;

        uniform sampler2D tDiffuse;
        varying vec2 v_Uv;

        void main() {
            vec4 texel = texture2D(tDiffuse, v_Uv);
            vec3 luma = vec3(0.299, 0.587, 0.114);
            float v = dot(texel.xyz, luma);
            gl_FragColor = smoothstep(threshold, threshold + smoothWidth, v) * texel;
        }
    `},Mc={name:"ec_seperable_blur",defines:{MAX_RADIUS:4},uniforms:{tDiffuse:null,texSize:[.5,.5],direction:[.5,.5],kernelRadius:1},vertexShader:V,fragmentShader:`
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
    `},Tr={name:"ec_h_blur",uniforms:{tDiffuse:null,h:1/512},vertexShader:V,fragmentShader:`
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
    `},vr={name:"ec_v_blur",uniforms:{tDiffuse:null,v:1/512},vertexShader:V,fragmentShader:`
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
    `},yc={name:"ec_fxaa",defines:{},uniforms:{tDiffuse:null,resolution:[1/1024,1/512]},vertexShader:V,fragmentShader:`
        uniform sampler2D tDiffuse;
        varying vec2 v_Uv;
        
        uniform vec2 resolution;  
        
        // FXAA 3.11 implementation by NVIDIA, ported to WebGL by Agost Biro (biro@archilogic.com)
        
        //----------------------------------------------------------------------------------
        // File:        es3-keplerFXAAassetsshaders/FXAA_DefaultES.frag
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
    `},Dt={None:0,Linear:1,Reinhard:2,Cineon:3,ACESFilmic:4};function it(a){return a.format===y.DEPTH_STENCIL||a.format===y.DEPTH24_STENCIL8}const H={OPAQUE:1,TRANSPARENT:2,ALL:15};class Pc extends ne{constructor(){super(),this.threshold=.7,this.smoothWidth=.01,this.blurSize=2,this.strength=1,this._highlightPass=new I(Ar),this._blurPass=new I(Ni),this._blendPass=new I(Mt),this._blendPass.material.premultipliedAlpha=!0}resize(e,t){this._blurPass.uniforms.textureSize[0]=e,this._blurPass.uniforms.textureSize[1]=t}render(e,t,n,i,s){const r=t._renderTargetCache.allocate(0),o=t._renderTargetCache.allocate(1),l=t._renderTargetCache.allocate(1);e.setRenderTarget(r),e.setClearColor(0,0,0,0),e.clear(!0,!0,!1),this._highlightPass.uniforms.tDiffuse=n.texture,this._highlightPass.uniforms.threshold=this.threshold,this._highlightPass.uniforms.smoothWidth=this.smoothWidth,this._highlightPass.render(e),e.setRenderTarget(o),e.setClearColor(0,0,0,0),e.clear(!0,!0,!1),this._blurPass.uniforms.tDiffuse=r.texture,this._blurPass.uniforms.direction=0,this._blurPass.uniforms.blurSize=this.blurSize,this._blurPass.render(e),e.setRenderTarget(l),e.setClearColor(0,0,0,0),e.clear(!0,!0,!1),this._blurPass.uniforms.tDiffuse=o.texture,this._blurPass.uniforms.direction=1,this._blurPass.uniforms.blurSize=this.blurSize,this._blurPass.render(e),e.setRenderTarget(i),e.setClearColor(0,0,0,0),s?e.clear(t.clearColor,t.clearDepth,t.clearStencil):e.clear(!0,!0,!1),this._blendPass.uniforms.texture1=n.texture,this._blendPass.uniforms.texture2=l.texture,this._blendPass.uniforms.colorWeight1=1,this._blendPass.uniforms.alphaWeight1=1,this._blendPass.uniforms.colorWeight2=this.strength,this._blendPass.uniforms.alphaWeight2=this.strength,s&&(this._blendPass.material.transparent=t._tempClearColor[3]<1||!t.clearColor,this._blendPass.renderStates.camera.rect.fromArray(t._tempViewport)),this._blendPass.render(e),s&&(this._blendPass.material.transparent=!1,this._blendPass.renderStates.camera.rect.set(0,0,1,1)),t._renderTargetCache.release(r,0),t._renderTargetCache.release(o,1),t._renderTargetCache.release(l,1)}dispose(){this._highlightPass.dispose(),this._blurPass.dispose(),this._blendPass.dispose()}}class bc extends ne{constructor(){super(),this.chromaFactor=.025,this._mainPass=new I(wc),this._mainPass.material.premultipliedAlpha=!0}resize(e,t){this._mainPass.uniforms.resolution[0]=1/e,this._mainPass.uniforms.resolution[1]=1/t}render(e,t,n,i,s){e.setRenderTarget(i),e.setClearColor(0,0,0,0),s?e.clear(t.clearColor,t.clearDepth,t.clearStencil):e.clear(!0,!0,!1);const r=this._mainPass;r.uniforms.tDiffuse=n.texture,r.uniforms.uChromaFactor=this.chromaFactor,s&&(r.material.transparent=t._tempClearColor[3]<1||!t.clearColor,r.renderStates.camera.rect.fromArray(t._tempViewport)),r.render(e),s&&(r.material.transparent=!1,r.renderStates.camera.rect.set(0,0,1,1))}dispose(){this._mainPass.dispose()}}const wc={name:"ec_chromatic_aberration",defines:{},uniforms:{tDiffuse:null,uChromaFactor:.025,uResolutionRatio:[1,1],resolution:[1/1024,1/512]},vertexShader:V,fragmentShader:`
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
    `};class Lc extends ne{constructor(){super(),this.brightness=0,this.contrast=1.02,this.exposure=0,this.gamma=1,this.saturation=1.02,this._mainPass=new I(Nc),this._mainPass.material.premultipliedAlpha=!0,this._mainPass.uniforms.contrast=1.02,this._mainPass.uniforms.saturation=1.02}render(e,t,n,i,s){e.setRenderTarget(i),e.setClearColor(0,0,0,0),s?e.clear(t.clearColor,t.clearDepth,t.clearStencil):e.clear(!0,!0,!1);const r=this._mainPass;r.uniforms.tDiffuse=n.texture,r.uniforms.brightness=this.brightness,r.uniforms.contrast=this.contrast,r.uniforms.exposure=this.exposure,r.uniforms.gamma=this.gamma,r.uniforms.saturation=this.saturation,s&&(r.material.transparent=t._tempClearColor[3]<1||!t.clearColor,r.renderStates.camera.rect.fromArray(t._tempViewport)),r.render(e),s&&(r.material.transparent=!1,r.renderStates.camera.rect.set(0,0,1,1))}dispose(){this._mainPass.dispose()}}const Nc={name:"ec_color_correction",defines:{},uniforms:{tDiffuse:null,brightness:0,contrast:1,exposure:0,gamma:1,saturation:1},vertexShader:V,fragmentShader:`
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
    `};class Cc extends ne{constructor(){super(),this.bufferDependencies=[{key:"GBuffer"}],this.focalDepth=1,this.focalLength=24,this.fstop=.9,this.maxblur=1,this.threshold=.9,this.gain=1,this.bias=.5,this.dithering=1e-4,this._mainPass=new I(Fc),this._mainPass.material.premultipliedAlpha=!0}resize(e,t){this._mainPass.uniforms.resolution[0]=1/e,this._mainPass.uniforms.resolution[1]=1/t}render(e,t,n,i,s){e.setRenderTarget(i),e.setClearColor(0,0,0,0),s?e.clear(t.clearColor,t.clearDepth,t.clearStencil):e.clear(!0,!0,!1);const r=t.getBuffer("GBuffer"),o=r.getCurrentRenderStates();this._mainPass.uniforms.tColor=n.texture,this._mainPass.uniforms.tDepth=r.output()._attachments[M.DEPTH_STENCIL_ATTACHMENT];let l=0,c=0;const h=o.camera.projectionMatrix;Rc(h)?(l=h.elements[14]/(h.elements[10]-1),c=h.elements[14]/(h.elements[10]+1)):(l=(h.elements[14]+1)/h.elements[10],c=(h.elements[14]-1)/h.elements[10]),this._mainPass.uniforms.znear=l,this._mainPass.uniforms.zfar=c,this._mainPass.uniforms.focalDepth=this.focalDepth,this._mainPass.uniforms.focalLength=this.focalLength,this._mainPass.uniforms.fstop=this.fstop,this._mainPass.uniforms.maxblur=this.maxblur,this._mainPass.uniforms.threshold=this.threshold,this._mainPass.uniforms.gain=this.gain,this._mainPass.uniforms.bias=this.bias,this._mainPass.uniforms.dithering=this.dithering,s&&(this._mainPass.material.transparent=t._tempClearColor[3]<1||!t.clearColor,this._mainPass.renderStates.camera.rect.fromArray(t._tempViewport)),this._mainPass.render(e),s&&(this._mainPass.material.transparent=!1,this._mainPass.renderStates.camera.rect.set(0,0,1,1))}dispose(){this._mainPass.dispose()}}function Rc(a){return a.elements[11]===-1}const Fc={name:"ec_bokeh",defines:{RINGS:3,SAMPLES:4},uniforms:{tColor:null,tDepth:null,resolution:[1/1024,1/512],znear:.1,zfar:100,focalDepth:1,focalLength:24,fstop:.9,maxblur:1,threshold:.5,gain:2,bias:.5,dithering:1e-4},vertexShader:V,fragmentShader:`
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
    `};class Dc extends ne{constructor(){super(),this.noiseIntensity=.35,this.scanlinesIntensity=.5,this.scanlinesCount=2048,this.grayscale=!0,this._time=0,this._mainPass=new I(Ic),this._mainPass.material.premultipliedAlpha=!0}render(e,t,n,i,s){e.setRenderTarget(i),e.setClearColor(0,0,0,0),s?e.clear(t.clearColor,t.clearDepth,t.clearStencil):e.clear(!0,!0,!1);const r=this._mainPass;r.uniforms.tDiffuse=n.texture,r.uniforms.nIntensity=this.noiseIntensity,r.uniforms.sIntensity=this.scanlinesIntensity,r.uniforms.sCount=this.scanlinesCount,r.uniforms.grayscale=this.grayscale,this._time+=.01667,r.uniforms.time=this._time,s&&(r.material.transparent=t._tempClearColor[3]<1||!t.clearColor,r.renderStates.camera.rect.fromArray(t._tempViewport)),r.render(e),s&&(r.material.transparent=!1,r.renderStates.camera.rect.set(0,0,1,1))}dispose(){this._mainPass.dispose()}}const Ic={name:"ec_film",defines:{},uniforms:{tDiffuse:null,time:0,nIntensity:.5,sIntensity:.05,sCount:4096,grayscale:!0},vertexShader:V,fragmentShader:`
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
    `};class Uc extends ne{constructor(){super(),this._mainPass=new I(yc),this._mainPass.material.premultipliedAlpha=!0}resize(e,t){this._mainPass.uniforms.resolution[0]=1/e,this._mainPass.uniforms.resolution[1]=1/t}render(e,t,n,i,s){e.setRenderTarget(i),e.setClearColor(0,0,0,0),s?e.clear(t.clearColor,t.clearDepth,t.clearStencil):e.clear(!0,!0,!1),this._mainPass.uniforms.tDiffuse=n.texture,s&&(this._mainPass.material.transparent=t._tempClearColor[3]<1||!t.clearColor,this._mainPass.renderStates.camera.rect.fromArray(t._tempViewport)),this._mainPass.render(e),s&&(this._mainPass.material.transparent=!1,this._mainPass.renderStates.camera.rect.set(0,0,1,1))}dispose(){this._mainPass.dispose()}}class Er extends ne{constructor(){super(),this.bufferDependencies=[{key:"GBuffer"}],this._ssaoPass=new I(zc),this.radius=.5,this.power=1,this.bias=.1,this.intensity=1,this.autoSampleWeight=!1,this.quality="Medium",this._kernelCode="",this._kernelSize=-1,this._setNoiseSize(64),this._setKernelSize(16),this._blurPass=new I(Ni),this._blurPass.material.defines.NORMALTEX_ENABLED=1,this._blurPass.material.defines.DEPTHTEX_ENABLED=1,this.blurSize=1,this.depthRange=1,this.jitter=!0,this._blendPass=new I(Sc),this._blendPass.material.premultipliedAlpha=!0}render(e,t,n,i,s){const r=t._renderTargetCache.allocate(0),o=t._renderTargetCache.allocate(0),l=t.getBuffer("GBuffer"),c=l.getCurrentRenderStates();$n.copy(c.camera.projectionMatrix),Is.copy(c.camera.projectionMatrix).inverse(),Jn.copy(c.camera.viewMatrix).inverse().transpose(),e.setRenderTarget(r),e.setClearColor(1,1,1,1),e.clear(!0,!0,!1),this._ssaoPass.uniforms.normalTex=l.output()._attachments[M.COLOR_ATTACHMENT0],this._ssaoPass.uniforms.depthTex=l.output()._attachments[M.DEPTH_STENCIL_ATTACHMENT],this._ssaoPass.uniforms.texSize[0]=l.output().width,this._ssaoPass.uniforms.texSize[1]=l.output().height,$n.toArray(this._ssaoPass.uniforms.projection),Is.toArray(this._ssaoPass.uniforms.projectionInv),Jn.toArray(this._ssaoPass.uniforms.viewInverseTranspose);const h=t.$cameraJitter;this._setKernelSize(Oc[this.quality],this.jitter&&h.accumulating()?h.frame():0),this._ssaoPass.uniforms.radius=this.radius,this._ssaoPass.uniforms.power=this.power,this._ssaoPass.uniforms.bias=this.bias,this._ssaoPass.uniforms.intensity=this.intensity,this._ssaoPass.material.defines.AUTO_SAMPLE_WEIGHT!=this.autoSampleWeight&&(this._ssaoPass.material.needsUpdate=!0,this._ssaoPass.material.defines.AUTO_SAMPLE_WEIGHT=this.autoSampleWeight),this._ssaoPass.render(e),e.setRenderTarget(o),e.setClearColor(0,0,0,0),e.clear(!0,!0,!1),this._blurPass.uniforms.normalTex=l.output()._attachments[M.COLOR_ATTACHMENT0],this._blurPass.uniforms.depthTex=l.output()._attachments[M.DEPTH_STENCIL_ATTACHMENT],this._blurPass.uniforms.textureSize[0]=l.output().width,this._blurPass.uniforms.textureSize[1]=l.output().height,$n.toArray(this._blurPass.uniforms.projection),Jn.toArray(this._blurPass.uniforms.viewInverseTranspose),this._blurPass.uniforms.blurSize=this.blurSize,this._blurPass.uniforms.depthRange=this.depthRange,this._blurPass.uniforms.direction=0,this._blurPass.uniforms.tDiffuse=r.texture,this._blurPass.render(e),e.setRenderTarget(n?r:i),e.clear(!0,!0,!1),this._blurPass.uniforms.direction=1,this._blurPass.uniforms.tDiffuse=o.texture,this._blurPass.render(e),n&&(e.setRenderTarget(i),e.setClearColor(0,0,0,0),s?e.clear(t.clearColor,t.clearDepth,t.clearStencil):e.clear(!0,!0,!1),this._blendPass.uniforms.texture1=n.texture,this._blendPass.uniforms.texture2=r.texture,s&&(this._blendPass.material.transparent=t._tempClearColor[3]<1||!t.clearColor,this._blendPass.renderStates.camera.rect.fromArray(t._tempViewport)),this._blendPass.render(e),s&&(this._blendPass.material.transparent=!1,this._blendPass.renderStates.camera.rect.set(0,0,1,1))),t._renderTargetCache.release(r,0),t._renderTargetCache.release(o,0)}dispose(){this._ssaoPass.dispose(),this._blurPass.dispose(),this._blendPass.dispose()}_setKernelSize(e,t=0){const n=e+"_"+t;this._kernelCode!==n&&(this._kernelCode=n,ei[n]||(ei[n]=Bc(e,t*e)),this._ssaoPass.uniforms.kernel=ei[n],this._ssaoPass.material.defines.KERNEL_SIZE!==e&&(this._ssaoPass.material.defines.KERNEL_SIZE=e,this._ssaoPass.material.needsUpdate=!0))}_setNoiseSize(e){if(this._noiseSize===e)return;this._noiseSize=e;const t=this._ssaoPass.uniforms;t.noiseTex?(t.noiseTex.image.data=Sr(e),t.noiseTex.image.width=e,t.noiseTex.image.height=e,t.noiseTex.version++):t.noiseTex=Gc(e),t.noiseTexSize[0]=e,t.noiseTexSize[1]=e}}const $n=new B,Is=new B,Jn=new B,Oc={Low:6,Medium:12,High:32,Ultra:64};function Us(a,e){let t=0,n=1/e,i=a;for(;i>0;)t=t+n*(i%e),i=Math.floor(i/e),n=n/e;return t}const ei={};function Bc(a,e=0){const t=new Float32Array(a*3);for(let n=0;n<a;n++){const i=Us(n+e,2)*Math.PI*2,s=1-(Us(n+e,3)*.85+.15),r=Math.sqrt(1-s*s),o=Math.random(),l=Math.cos(i)*r*o,c=Math.sin(i)*r*o,h=s*o;t[n*3]=l,t[n*3+1]=c,t[n*3+2]=h}return t}function Gc(a){const e=new ge;return e.image={data:Sr(a),width:a,height:a},e.type=F.UNSIGNED_BYTE,e.magFilter=N.NEAREST,e.minFilter=N.NEAREST,e.wrapS=q.REPEAT,e.wrapT=q.REPEAT,e.generateMipmaps=!1,e.flipY=!1,e.version++,e}function Sr(a){const e=new Uint8Array(a*a*4);let t=0;const n=new A;for(let i=0;i<a;i++)for(let s=0;s<a;s++)n.set(Math.random()*2-1,Math.random()*2-1,0).normalize(),e[t++]=(n.x*.5+.5)*255,e[t++]=(n.y*.5+.5)*255,e[t++]=0,e[t++]=255;return e}const zc={name:"ec_ssao",defines:{ALCHEMY:!1,DEPTH_PACKING:0,KERNEL_SIZE:64,AUTO_SAMPLE_WEIGHT:!1},uniforms:{normalTex:null,depthTex:null,texSize:[512,512],noiseTex:null,noiseTexSize:[4,4],projection:new Float32Array(16),projectionInv:new Float32Array(16),viewInverseTranspose:new Float32Array(16),kernel:null,radius:.2,power:1,bias:1e-4,intensity:1},vertexShader:V,fragmentShader:`
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

        float getDepth(const in vec2 screenPosition) {
            #if DEPTH_PACKING == 1
                return unpackRGBAToDepth(texture2D(depthTex, screenPosition));
            #else
                return texture2D(depthTex, screenPosition).r;
            #endif
        }

        vec3 getViewNormal(const in vec2 screenPosition) {
            vec3 normal = texture2D(normalTex, screenPosition).xyz * 2.0 - 1.0;
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
    `};class Mr extends ne{constructor(){super(),this.bufferDependencies=[{key:"SceneBuffer"},{key:"GBuffer"}],this.pixelStride=8,this.maxIteration=5,this.maxSteps=50,this.maxRayDistance=200,this.enablePixelStrideZCutoff=!0,this.pixelStrideZCutoff=50,this.screenEdgeFadeStart=.9,this.eyeFadeStart=.99,this.eyeFadeEnd=1,this.minGlossiness=.2,this.strength=.2,this.mixType=0,this.blurSize=2,this.depthRange=1,this.jitter=!0,this._ssrPass=new I(Hc),this._blurPass=new I(Ni),this._blurPass.material.defines.NORMALTEX_ENABLED=1,this._blurPass.material.defines.DEPTHTEX_ENABLED=1,this._blendPass=new I(kc),this._blendPass.material.premultipliedAlpha=!0}render(e,t,n,i,s){const r=t._renderTargetCache.allocate(0),o=t._renderTargetCache.allocate(0),l=t.getBuffer("SceneBuffer"),c=t.getBuffer("GBuffer"),h=c.getCurrentRenderStates();ti.copy(h.camera.projectionMatrix),Os.copy(h.camera.projectionMatrix).inverse(),ni.copy(h.camera.viewMatrix).inverse().transpose(),e.setRenderTarget(r),e.setClearColor(0,0,0,1),e.clear(!0,!0,!1),this._ssrPass.uniforms.colorTex=l.output()._attachments[M.COLOR_ATTACHMENT0],this._ssrPass.uniforms.gBufferTexture1=c.output()._attachments[M.COLOR_ATTACHMENT0],this._ssrPass.uniforms.gBufferTexture2=c.output()._attachments[M.DEPTH_STENCIL_ATTACHMENT],this._ssrPass.uniforms.viewportSize[0]=c.output().width,this._ssrPass.uniforms.viewportSize[1]=c.output().height,ti.toArray(this._ssrPass.uniforms.projection),Os.toArray(this._ssrPass.uniforms.projectionInv),ni.toArray(this._ssrPass.uniforms.viewInverseTranspose),this._ssrPass.uniforms.pixelStride=this.pixelStride,this._ssrPass.uniforms.maxRayDistance=this.maxRayDistance,this._ssrPass.uniforms.enablePixelStrideZCutoff=this.enablePixelStrideZCutoff?1:0,this._ssrPass.uniforms.pixelStrideZCutoff=this.pixelStrideZCutoff,this._ssrPass.uniforms.screenEdgeFadeStart=this.screenEdgeFadeStart,this._ssrPass.uniforms.eyeFadeStart=this.eyeFadeStart,this._ssrPass.uniforms.eyeFadeEnd=this.eyeFadeEnd,this._ssrPass.uniforms.minGlossiness=this.minGlossiness,this._ssrPass.uniforms.nearZ=h.camera.near;const u=t.$cameraJitter;this._ssrPass.uniforms.jitterOffset=this.jitter&&u.accumulating()?u.frame()*.5/u.totalFrame():0,(this._ssrPass.material.defines.MAX_ITERATION!=this.maxSteps||this._ssrPass.material.defines.MAX_BINARY_SEARCH_ITERATION!=this.maxIteration)&&(this._ssrPass.material.needsUpdate=!0,this._ssrPass.material.defines.MAX_ITERATION=this.maxSteps,this._ssrPass.material.defines.MAX_BINARY_SEARCH_ITERATION=this.maxIteration),this._ssrPass.render(e),e.setRenderTarget(o),e.setClearColor(0,0,0,0),e.clear(!0,!0,!1),this._blurPass.uniforms.normalTex=c.output()._attachments[M.COLOR_ATTACHMENT0],this._blurPass.uniforms.depthTex=c.output()._attachments[M.DEPTH_STENCIL_ATTACHMENT],this._blurPass.uniforms.textureSize[0]=c.output().width,this._blurPass.uniforms.textureSize[1]=c.output().height,ti.toArray(this._blurPass.uniforms.projection),ni.toArray(this._blurPass.uniforms.viewInverseTranspose),this._blurPass.uniforms.blurSize=this.blurSize,this._blurPass.uniforms.depthRange=this.depthRange,this._blurPass.uniforms.direction=0,this._blurPass.uniforms.tDiffuse=r.texture,this._blurPass.render(e),e.setRenderTarget(n?r:i),e.clear(!0,!0,!1),this._blurPass.uniforms.direction=1,this._blurPass.uniforms.tDiffuse=o.texture,this._blurPass.render(e),n&&(e.setRenderTarget(i),e.setClearColor(0,0,0,0),s?e.clear(t.clearColor,t.clearDepth,t.clearStencil):e.clear(!0,!0,!1),this._blendPass.uniforms.texture1=n.texture,this._blendPass.uniforms.texture2=r.texture,this._blendPass.uniforms.reflectivitySampler=c.output()._attachments[M.COLOR_ATTACHMENT0],this._blendPass.uniforms.reflectivityThreshold=this.minGlossiness,this._blendPass.uniforms.strength=this.strength,this._blendPass.material.defines.MIX_TYPE!==this.mixType&&(this._blendPass.material.needsUpdate=!0,this._blendPass.material.defines.MIX_TYPE=this.mixType),s&&(this._blendPass.material.transparent=t._tempClearColor[3]<1||!t.clearColor,this._blendPass.renderStates.camera.rect.fromArray(t._tempViewport)),this._blendPass.render(e),s&&(this._blendPass.material.transparent=!1,this._blendPass.renderStates.camera.rect.set(0,0,1,1))),t._renderTargetCache.release(r,0),t._renderTargetCache.release(o,0)}dispose(){this._ssrPass.dispose(),this._blurPass.dispose(),this._blendPass.dispose()}}const ti=new B,Os=new B,ni=new B,Hc={name:"ec_ssr",defines:{MAX_ITERATION:50,MAX_BINARY_SEARCH_ITERATION:5},uniforms:{colorTex:null,gBufferTexture1:null,gBufferTexture2:null,projection:new Float32Array(16),projectionInv:new Float32Array(16),viewInverseTranspose:new Float32Array(16),pixelStride:8,maxRayDistance:200,enablePixelStrideZCutoff:1,pixelStrideZCutoff:50,screenEdgeFadeStart:.9,eyeFadeStart:.99,eyeFadeEnd:1,minGlossiness:.2,nearZ:.1,zThicknessThreshold:.1,jitterOffset:0,viewportSize:[512,512]},vertexShader:V,fragmentShader:`
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
			vec4 normalAndGloss = texture2D(gBufferTexture1, v_Uv);

			if (dot(normalAndGloss.rgb, vec3(1.0)) == 0.0) {
				discard;
			}

			float g = normalAndGloss.a;
			if (g <= minGlossiness) {
				discard;
			}

			float reflectivity = g;

			vec3 N = normalAndGloss.rgb * 2.0 - 1.0;
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

			vec3 hitNormal = texture2D(gBufferTexture1, hitPixel).rgb * 2.0 - 1.0;
			hitNormal = normalize((viewInverseTranspose * vec4(hitNormal, 0.0)).xyz);

			// Ignore the pixel not face the ray
			// TODO fadeout ?
			// PENDING Can be configured?
			if (dot(hitNormal, rayDir) >= 0.0) {
				discard;
			}

			vec4 color = texture2D(colorTex, hitPixel);
			gl_FragColor = vec4(color.rgb * alpha, color.a);
		}
    `},kc={name:"ec_ssr_mix",defines:{MIX_TYPE:0},uniforms:{texture1:null,texture2:null,reflectivitySampler:null,strength:.15,reflectivityThreshold:.6,type:1},vertexShader:V,fragmentShader:`
        uniform sampler2D texture1;
        uniform sampler2D texture2;
		uniform sampler2D reflectivitySampler;
		uniform float reflectivityThreshold;
		uniform float strength;
        varying vec2 v_Uv;
        void main() {
			#if MIX_TYPE == 0
				vec4 texel1 = texture2D(texture1, v_Uv);
				vec4 texel2 = texture2D(texture2, v_Uv);
				vec3 color = texel1.rgb * 1.0 + texel2.rgb * 1.0 * strength;
				gl_FragColor = vec4(color, texel1.a);
			#else
				vec4 color = texture2D(texture1, v_Uv);
				vec4 SSR = texture2D(texture2, v_Uv);
				float reflectivity = texture(reflectivitySampler, v_Uv).a;
				if (reflectivity <= reflectivityThreshold) {
					gl_FragColor = color;
					return;
				}
				vec3 reflectionMultiplier = vec3(reflectivity * strength);
				vec3 colorMultiplier = 1.0-reflectionMultiplier;
				vec3 finalColor = (color.rgb*colorMultiplier)+(SSR.rgb*reflectionMultiplier);
				gl_FragColor =vec4(finalColor,color.a);
			#endif
        }
    `};class Yh extends ne{constructor(){super(),this.toneMapping=Dt.Reinhard,this.toneMappingExposure=1,this.outputColorSpace=Te.SRGB,this._mainPass=new I(Xc),this._toneMapping=null,this._outputColorSpace=null}render(e,t,n,i,s){e.setRenderTarget(i),e.setClearColor(0,0,0,0),s?e.clear(t.clearColor,t.clearDepth,t.clearStencil):e.clear(!0,!0,!1);const r=this._mainPass;r.uniforms.tDiffuse=n.texture,r.uniforms.toneMappingExposure=this.toneMappingExposure,(this._toneMapping!==this.toneMapping||this._outputColorSpace!==this.outputColorSpace)&&(this._toneMapping=this.toneMapping,this._outputColorSpace=this.outputColorSpace,r.material.defines={},this._toneMapping===Dt.Linear&&(r.material.defines.LINEAR_TONE_MAPPING=""),this._toneMapping===Dt.Reinhard&&(r.material.defines.REINHARD_TONE_MAPPING=""),this._toneMapping===Dt.Cineon&&(r.material.defines.CINEON_TONE_MAPPING=""),this._toneMapping===Dt.ACESFilmic&&(r.material.defines.ACES_FILMIC_TONE_MAPPING=""),this._outputColorSpace===Te.SRGB&&(r.material.defines.SRGB_COLOR_SPACE=""),r.material.needsUpdate=!0),s&&(r.material.transparent=t._tempClearColor[3]<1||!t.clearColor,r.renderStates.camera.rect.fromArray(t._tempViewport)),r.render(e),s&&(r.material.transparent=!1,r.renderStates.camera.rect.set(0,0,1,1))}dispose(){this._mainPass.dispose()}}const Xc={name:"ec_tone_mapping",defines:{},uniforms:{tDiffuse:null,toneMappingExposure:1},vertexShader:V,fragmentShader:`
        uniform float toneMappingExposure;

        uniform sampler2D tDiffuse;
        varying vec2 v_Uv;

        // exposure only
        vec3 LinearToneMapping(vec3 color) {
            return saturate(toneMappingExposure * color);
        }

        // source: https://www.cs.utah.edu/docs/techreports/2002/pdf/UUCS-02-001.pdf
        vec3 ReinhardToneMapping(vec3 color) {
            color *= toneMappingExposure;
            return saturate(color / (vec3(1.0) + color));
        }

        // source: http://filmicworlds.com/blog/filmic-tonemapping-operators/
        vec3 OptimizedCineonToneMapping(vec3 color) {
            // optimized filmic operator by Jim Hejl and Richard Burgess-Dawson
            color *= toneMappingExposure;
            color = max(vec3(0.0), color - 0.004);
            return pow((color * (6.2 * color + 0.5)) / (color * (6.2 * color + 1.7) + 0.06), vec3(2.2));
        }

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
			#endif

            // color space

            #ifdef SRGB_COLOR_SPACE
				gl_FragColor = LinearTosRGB(gl_FragColor);
			#endif
        }
    `};class Vc extends ne{constructor(){super(),this.color=new pe(0,0,0),this.offset=1,this._vignettingPass=new I(Wc),this._vignettingPass.material.premultipliedAlpha=!0}render(e,t,n,i,s){const r=this._vignettingPass;r.uniforms.tDiffuse=n.texture,this.color.toArray(r.uniforms.vignettingColor),r.uniforms.vignettingOffset=this.offset,e.setRenderTarget(i),e.setClearColor(0,0,0,0),s?e.clear(t.clearColor,t.clearDepth,t.clearStencil):e.clear(!0,!0,!1),s&&(r.material.transparent=t._tempClearColor[3]<1||!t.clearColor,r.renderStates.camera.rect.fromArray(t._tempViewport)),r.render(e),s&&(r.material.transparent=!1,r.renderStates.camera.rect.set(0,0,1,1))}dispose(){this._vignettingPass.dispose()}}const Wc={name:"ec_vignetting_blend",defines:{},uniforms:{tDiffuse:null,vignettingColor:[0,0,0],vignettingOffset:1},vertexShader:V,fragmentShader:`
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
    `};class Qc extends ne{constructor(){super(),this.offset=1,this._hBlurPass=new I(Tr),this._vBlurPass=new I(vr),this._blendPass=new I(Yc),this._blendPass.material.premultipliedAlpha=!0}resize(e,t){this._hBlurPass.uniforms.h=4/e,this._vBlurPass.uniforms.v=4/t}render(e,t,n,i,s){const r=t._renderTargetCache.allocate(1),o=t._renderTargetCache.allocate(1),l=this._blendPass;e.setRenderTarget(r),e.setClearColor(0,0,0,0),e.clear(!0,!0,!1),this._hBlurPass.uniforms.tDiffuse=n.texture,this._hBlurPass.render(e),e.setRenderTarget(o),e.setClearColor(0,0,0,0),e.clear(!0,!0,!1),this._vBlurPass.uniforms.tDiffuse=r.texture,this._vBlurPass.render(e),l.uniforms.tDiffuse=n.texture,l.uniforms.blurOffset=this.offset,l.uniforms.blurTexture=o.texture,e.setRenderTarget(i),e.setClearColor(0,0,0,0),s?e.clear(t.clearColor,t.clearDepth,t.clearStencil):e.clear(!0,!0,!1),s&&(l.material.transparent=t._tempClearColor[3]<1||!t.clearColor,l.renderStates.camera.rect.fromArray(t._tempViewport)),l.render(e),s&&(l.material.transparent=!1,l.renderStates.camera.rect.set(0,0,1,1)),t._renderTargetCache.release(r,1),t._renderTargetCache.release(o,1)}dispose(){this._hBlurPass.dispose(),this._vBlurPass.dispose(),this._blendPass.dispose()}}const Yc={name:"ec_blur_blend",defines:{},uniforms:{tDiffuse:null,blurOffset:1,blurTexture:null},vertexShader:V,fragmentShader:`
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
    `};class qc extends ne{constructor(){super(),this.bufferDependencies=[{key:"MarkBuffer"}],this.color=new pe(1,1,1),this.strength=1.5,this.stride=5,this._channelPass=new I(Ci),this._blurXPass=new I(jc),this._blurYPass=new I(Zc),this._blendPass=new I(Kc),this._blendPass.material.premultipliedAlpha=!0}resize(e,t){this._blurXPass.uniforms.texSize[0]=e,this._blurXPass.uniforms.texSize[1]=t,this._blurYPass.uniforms.texSize[0]=e,this._blurYPass.uniforms.texSize[1]=t}render(e,t,n,i,s){const r=t._renderTargetCache.allocate(0),o=t._renderTargetCache.allocate(0),l=t._renderTargetCache.allocate(0),c=t.getBuffer("MarkBuffer"),h=c.attachManager.getAttachIndex(this.name),u=c.attachManager.getChannelIndex(this.name);e.setRenderTarget(r),e.setClearColor(0,0,0,0),e.clear(!0,!0,!1),this._channelPass.uniforms.tDiffuse=c.output(h)._attachments[M.COLOR_ATTACHMENT0];for(let f=0;f<4;f++)this._channelPass.uniforms.channelMask[f]=f===u?1:0;this._channelPass.render(e),e.setRenderTarget(o),e.setClearColor(0,0,0,0),e.clear(!0,!0,!1),this._blurXPass.uniforms.tDiffuse=r.texture,this._blurXPass.uniforms.stride=this.stride,this._blurXPass.render(e),e.setRenderTarget(l),e.setClearColor(0,0,0,0),e.clear(!0,!0,!1),this._blurYPass.uniforms.tDiffuse=r.texture,this._blurYPass.uniforms.blurX=o.texture,this._blurYPass.uniforms.stride=this.stride,this._blurYPass.uniforms.glowness=this.strength,this.color.toArray(this._blurYPass.uniforms.glowColor),this._blurYPass.render(e),e.setRenderTarget(i),e.setClearColor(0,0,0,0),s?e.clear(t.clearColor,t.clearDepth,t.clearStencil):e.clear(!0,!0,!1),this._blendPass.uniforms.texture1=n.texture,this._blendPass.uniforms.texture2=l.texture,s&&(this._blendPass.material.transparent=t._tempClearColor[3]<1||!t.clearColor,this._blendPass.renderStates.camera.rect.fromArray(t._tempViewport)),this._blendPass.render(e),s&&(this._blendPass.material.transparent=!1,this._blendPass.renderStates.camera.rect.set(0,0,1,1)),t._renderTargetCache.release(r,0),t._renderTargetCache.release(o,0),t._renderTargetCache.release(l,0)}dispose(){this._channelPass.dispose(),this._blurXPass.dispose(),this._blurYPass.dispose(),this._blendPass.dispose()}}const jc={name:"ec_innerglow_x",defines:{},uniforms:{tDiffuse:null,texSize:[1,1],stride:10},vertexShader:V,fragmentShader:`
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
    `},Zc={name:"ec_innerglow_y",defines:{},uniforms:{tDiffuse:null,blurX:null,texSize:[1,1],stride:10,glowness:2,glowColor:[1,0,0]},vertexShader:V,fragmentShader:`
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
    `},Kc={name:"ec_tint",defines:{},uniforms:{texture1:null,texture2:null},vertexShader:V,fragmentShader:`
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
    `};class $c extends ne{constructor(){super(),this.bufferDependencies=[{key:"SceneBuffer"},{key:"MarkBuffer",mask:H.OPAQUE},{key:"ColorMarkBuffer",mask:H.TRANSPARENT}],this.strength=1,this.radius=.4,this.threshold=.01,this.smoothWidth=.1,this._maskPass=new I(Xt),this._highlightPass=new I(Ar),this._blurPass=new I(Mc),this._compositePass=new I(Jc),this._blendPass=new I(Mt),this._blendPass.material.premultipliedAlpha=!0,this._compositePass.uniforms.bloomFactors=new Float32Array([1,.8,.6,.4,.2]),this._compositePass.uniforms.bloomTintColors=new Float32Array([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]),this._tempRTList=[]}render(e,t,n,i,s){const r=t._renderTargetCache.allocate(0),o=t._renderTargetCache.allocate(1),l=t.getBuffer("SceneBuffer"),c=t.getBuffer("MarkBuffer"),h=t.getBuffer("ColorMarkBuffer"),u=c.attachManager.has(this.name),f=h.attachManager.getAttachIndex(this.name),d=h.output(f)._attachments[M.COLOR_ATTACHMENT0];if(u){const p=c.attachManager.getAttachIndex(this.name),m=c.attachManager.getChannelIndex(this.name);e.setRenderTarget(o),e.setClearColor(0,0,0,0),e.clear(!0,!0,!1),this._maskPass.uniforms.colorTexture=l.output()._attachments[M.COLOR_ATTACHMENT0],this._maskPass.uniforms.maskTexture=c.output(p)._attachments[M.COLOR_ATTACHMENT0],this._maskPass.uniforms.additiveTexture=d;for(let g=0;g<4;g++)this._maskPass.uniforms.channel[g]=g===m?1:0;this._maskPass.render(e)}e.setRenderTarget(r),e.setClearColor(0,0,0,0),e.clear(!0,!0,!1),this._highlightPass.uniforms.tDiffuse=u?o.texture:d,this._highlightPass.uniforms.threshold=this.threshold,this._highlightPass.uniforms.smoothWidth=this.smoothWidth,this._highlightPass.render(e);let _=r;for(let p=0;p<Bs.length;p++){const m=t._renderTargetCache.allocate(p+1);e.setRenderTarget(m),e.setClearColor(0,0,0,0),e.clear(!0,!0,!1),this._blurPass.uniforms.tDiffuse=_.texture,this._blurPass.uniforms.texSize[0]=_.width,this._blurPass.uniforms.texSize[1]=_.height,this._blurPass.uniforms.direction[0]=1,this._blurPass.uniforms.direction[1]=0,this._blurPass.uniforms.kernelRadius=Bs[p],this._blurPass.render(e);const g=t._renderTargetCache.allocate(p+1);e.setRenderTarget(g),e.setClearColor(0,0,0,0),e.clear(!0,!0,!1),this._blurPass.uniforms.tDiffuse=m.texture,this._blurPass.uniforms.direction[0]=0,this._blurPass.uniforms.direction[1]=1,this._blurPass.render(e),t._renderTargetCache.release(m,p+1),_=g,this._tempRTList[p]=g}e.setRenderTarget(o),e.setClearColor(0,0,0,0),e.clear(!0,!0,!1),this._compositePass.uniforms.blurTexture1=this._tempRTList[0].texture,this._compositePass.uniforms.blurTexture2=this._tempRTList[1].texture,this._compositePass.uniforms.blurTexture3=this._tempRTList[2].texture,this._compositePass.uniforms.blurTexture4=this._tempRTList[3].texture,this._compositePass.uniforms.blurTexture5=this._tempRTList[4].texture,this._compositePass.uniforms.bloomRadius=this.radius,this._compositePass.uniforms.bloomStrength=this.strength,this._compositePass.render(e),e.setRenderTarget(i),e.setClearColor(0,0,0,0),s?e.clear(t.clearColor,t.clearDepth,t.clearStencil):e.clear(!0,!0,!1),this._blendPass.uniforms.texture1=n.texture,this._blendPass.uniforms.texture2=o.texture,this._blendPass.uniforms.colorWeight1=1,this._blendPass.uniforms.alphaWeight1=1,this._blendPass.uniforms.colorWeight2=1,this._blendPass.uniforms.alphaWeight2=0,s&&(this._blendPass.material.transparent=t._tempClearColor[3]<1||!t.clearColor,this._blendPass.renderStates.camera.rect.fromArray(t._tempViewport)),this._blendPass.render(e),s&&(this._blendPass.material.transparent=!1,this._blendPass.renderStates.camera.rect.set(0,0,1,1)),t._renderTargetCache.release(r,0),t._renderTargetCache.release(o,1),this._tempRTList.forEach((p,m)=>t._renderTargetCache.release(p,m+1))}dispose(){this._maskPass.dispose(),this._highlightPass.dispose(),this._blurPass.dispose(),this._compositePass.dispose(),this._blendPass.dispose()}}const Bs=[3,5,7,9,11],Jc={name:"ec_bloom_composite",defines:{NUM_MIPS:5},uniforms:{blurTexture1:null,blurTexture2:null,blurTexture3:null,blurTexture4:null,blurTexture5:null,bloomStrength:1,bloomRadius:0,bloomFactors:null,bloomTintColors:null},vertexShader:V,fragmentShader:`
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
    `};class eu extends ne{constructor(){super(),this.bufferDependencies=[{key:"SceneBuffer"},{key:"MarkBuffer",mask:H.OPAQUE},{key:"ColorMarkBuffer",mask:H.TRANSPARENT}],this.strength=.5,this.blendRate=.4,this.blurSize=1,this._maskPass=new I(Xt),this._downSamplerPass=new I(tu),this._hBlurPass=new I(Tr),this._vBlurPass=new I(vr),this._blendPass=new I(Mt),this._blendPass.material.premultipliedAlpha=!0,this._tempRTList=[],this._tempRTList2=[]}render(e,t,n,i,s){for(let f=0;f<6;f++)this._tempRTList[f]=t._renderTargetCache.allocate(f),this._tempRTList2[f]=t._renderTargetCache.allocate(f);const r=t.getBuffer("SceneBuffer"),o=t.getBuffer("MarkBuffer"),l=t.getBuffer("ColorMarkBuffer"),c=o.attachManager.has(this.name),h=l.attachManager.getAttachIndex(this.name),u=l.output(h)._attachments[M.COLOR_ATTACHMENT0];if(c){const f=o.attachManager.getAttachIndex(this.name),d=o.attachManager.getChannelIndex(this.name);e.setRenderTarget(this._tempRTList[0]),e.setClearColor(0,0,0,0),e.clear(!0,!0,!1),this._maskPass.uniforms.colorTexture=r.output()._attachments[M.COLOR_ATTACHMENT0],this._maskPass.uniforms.maskTexture=o.output(f)._attachments[M.COLOR_ATTACHMENT0],this._maskPass.uniforms.additiveTexture=u;for(let _=0;_<4;_++)this._maskPass.uniforms.channel[_]=_===d?1:0;this._maskPass.render(e)}e.setRenderTarget(this._tempRTList[1]),e.setClearColor(0,0,0,0),e.clear(!0,!0,!1),this._downSamplerPass.uniforms.tDiffuse=c?this._tempRTList[0].texture:u,this._downSamplerPass.uniforms.texSize[0]=this._tempRTList[0].width,this._downSamplerPass.uniforms.texSize[1]=this._tempRTList[0].height,this._downSamplerPass.uniforms.bright=4,this._downSamplerPass.render(e);for(let f=2;f<6;f++)e.setRenderTarget(this._tempRTList[f]),e.setClearColor(0,0,0,0),e.clear(!0,!0,!1),this._downSamplerPass.uniforms.tDiffuse=this._tempRTList[f-1].texture,this._downSamplerPass.uniforms.texSize[0]=this._tempRTList[f-1].width,this._downSamplerPass.uniforms.texSize[1]=this._tempRTList[f-1].height,this._downSamplerPass.uniforms.bright=1,this._downSamplerPass.render(e);for(let f=0;f<5;f++)e.setRenderTarget(this._tempRTList[f]),e.setClearColor(0,0,0,0),e.clear(!0,!0,!1),this._hBlurPass.uniforms.tDiffuse=this._tempRTList[f+1].texture,this._hBlurPass.uniforms.h=2*this.blurSize/this._tempRTList[f].width,this._hBlurPass.render(e);for(let f=0;f<5;f++)e.setRenderTarget(this._tempRTList2[f]),e.setClearColor(0,0,0,0),e.clear(!0,!0,!1),this._vBlurPass.uniforms.tDiffuse=this._tempRTList[f].texture,this._vBlurPass.uniforms.v=2*this.blurSize/this._tempRTList[f].height,this._vBlurPass.render(e);for(let f=3;f>=0;f--)e.setRenderTarget(this._tempRTList[f]),e.setClearColor(0,0,0,0),e.clear(!0,!0,!1),this._blendPass.uniforms.texture1=this._tempRTList2[f].texture,this._blendPass.uniforms.texture2=f<3?this._tempRTList[f+1].texture:this._tempRTList2[f+1].texture,this._blendPass.uniforms.colorWeight1=(1-this.blendRate)*this.strength,this._blendPass.uniforms.alphaWeight1=(1-this.blendRate)*this.strength,this._blendPass.uniforms.colorWeight2=this.blendRate*this.strength,this._blendPass.uniforms.alphaWeight2=this.blendRate*this.strength,this._blendPass.render(e);e.setRenderTarget(i),e.setClearColor(0,0,0,0),s?e.clear(t.clearColor,t.clearDepth,t.clearStencil):e.clear(!0,!0,!1),this._blendPass.uniforms.texture1=n.texture,this._blendPass.uniforms.texture2=this._tempRTList[0].texture,this._blendPass.uniforms.colorWeight1=1,this._blendPass.uniforms.alphaWeight1=1,this._blendPass.uniforms.colorWeight2=1,this._blendPass.uniforms.alphaWeight2=0,s&&(this._blendPass.material.transparent=t._tempClearColor[3]<1||!t.clearColor,this._blendPass.renderStates.camera.rect.fromArray(t._tempViewport)),this._blendPass.render(e),s&&(this._blendPass.material.transparent=!1,this._blendPass.renderStates.camera.rect.set(0,0,1,1)),this._tempRTList.forEach((f,d)=>t._renderTargetCache.release(f,d)),this._tempRTList2.forEach((f,d)=>t._renderTargetCache.release(f,d))}dispose(){this._maskPass.dispose(),this._downSamplerPass.dispose(),this._hBlurPass.dispose(),this._vBlurPass.dispose(),this._blendPass.dispose()}}const tu={name:"ec_sg_downsample",defines:{},uniforms:{tDiffuse:null,texSize:[512,512],bright:1},vertexShader:V,fragmentShader:`
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
	`};class nu extends ne{constructor(){super(),this.bufferDependencies=[{key:"SceneBuffer"},{key:"MarkBuffer",mask:H.OPAQUE},{key:"ColorMarkBuffer",mask:H.TRANSPARENT}],this.center=new z(.5,.5),this.direction=new z(0,1),this.strength=1,this._maskPass=new I(Xt),this._tailingPass=new I(iu),this._blendPass=new I(Mt),this._blendPass.material.premultipliedAlpha=!0}render(e,t,n,i,s){const r=t._renderTargetCache.allocate(0),o=t._renderTargetCache.allocate(0),l=t.getBuffer("SceneBuffer"),c=t.getBuffer("MarkBuffer"),h=t.getBuffer("ColorMarkBuffer"),u=c.attachManager.has(this.name),f=h.attachManager.getAttachIndex(this.name),d=h.output(f)._attachments[M.COLOR_ATTACHMENT0];if(u){const _=c.attachManager.getAttachIndex(this.name),p=c.attachManager.getChannelIndex(this.name);e.setRenderTarget(r),e.setClearColor(0,0,0,0),e.clear(!0,!0,!1),this._maskPass.uniforms.colorTexture=l.output()._attachments[M.COLOR_ATTACHMENT0],this._maskPass.uniforms.maskTexture=c.output(_)._attachments[M.COLOR_ATTACHMENT0],this._maskPass.uniforms.additiveTexture=d;for(let m=0;m<4;m++)this._maskPass.uniforms.channel[m]=m===p?1:0;this._maskPass.render(e)}e.setRenderTarget(o),e.setClearColor(0,0,0,0),e.clear(!0,!0,!1),this._tailingPass.uniforms.blurMap=u?r.texture:d,this._tailingPass.uniforms.center[0]=this.center.x,this._tailingPass.uniforms.center[1]=this.center.y,this._tailingPass.uniforms.direction[0]=this.direction.x,this._tailingPass.uniforms.direction[1]=this.direction.y,this._tailingPass.uniforms.intensity=10*this.strength,this._tailingPass.render(e),e.setRenderTarget(i),e.setClearColor(0,0,0,0),s?e.clear(t.clearColor,t.clearDepth,t.clearStencil):e.clear(!0,!0,!1),this._blendPass.uniforms.texture1=n.texture,this._blendPass.uniforms.texture2=o.texture,this._blendPass.uniforms.colorWeight1=1,this._blendPass.uniforms.alphaWeight1=1,this._blendPass.uniforms.colorWeight2=1,this._blendPass.uniforms.alphaWeight2=0,s&&(this._blendPass.material.transparent=t._tempClearColor[3]<1||!t.clearColor,this._blendPass.renderStates.camera.rect.fromArray(t._tempViewport)),this._blendPass.render(e),s&&(this._blendPass.material.transparent=!1,this._blendPass.renderStates.camera.rect.set(0,0,1,1)),t._renderTargetCache.release(r,0),t._renderTargetCache.release(o,0)}dispose(){this._maskPass.dispose(),this._tailingPass.dispose(),this._blendPass.dispose()}}const iu={name:"ec_tailing",defines:{},uniforms:{blurMap:null,blurStart:1,blurWidth:-.1,direction:[0,1],intensity:10,glowGamma:.8,center:[.5,.5]},vertexShader:V,fragmentShader:`
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
    `};class su extends ne{constructor(){super(),this.bufferDependencies=[{key:"SceneBuffer"},{key:"MarkBuffer",mask:H.OPAQUE},{key:"ColorMarkBuffer",mask:H.TRANSPARENT}],this.center=new z(.5,.5),this.strength=1,this._maskPass=new I(Xt),this._radialTailingPass=new I(ru),this._blendPass=new I(Mt),this._blendPass.material.premultipliedAlpha=!0}render(e,t,n,i,s){const r=t._renderTargetCache.allocate(0),o=t._renderTargetCache.allocate(0),l=t.getBuffer("SceneBuffer"),c=t.getBuffer("MarkBuffer"),h=t.getBuffer("ColorMarkBuffer"),u=c.attachManager.has(this.name),f=h.attachManager.getAttachIndex(this.name),d=h.output(f)._attachments[M.COLOR_ATTACHMENT0];if(u){const _=c.attachManager.getAttachIndex(this.name),p=c.attachManager.getChannelIndex(this.name);e.setRenderTarget(r),e.setClearColor(0,0,0,0),e.clear(!0,!0,!1),this._maskPass.uniforms.colorTexture=l.output()._attachments[M.COLOR_ATTACHMENT0],this._maskPass.uniforms.maskTexture=c.output(_)._attachments[M.COLOR_ATTACHMENT0],this._maskPass.uniforms.additiveTexture=d;for(let m=0;m<4;m++)this._maskPass.uniforms.channel[m]=m===p?1:0;this._maskPass.render(e)}e.setRenderTarget(o),e.setClearColor(0,0,0,0),e.clear(!0,!0,!1),this._radialTailingPass.uniforms.blurMap=u?r.texture:d,this._radialTailingPass.uniforms.center[0]=this.center.x,this._radialTailingPass.uniforms.center[1]=this.center.y,this._radialTailingPass.uniforms.intensity=10*this.strength,this._radialTailingPass.render(e),e.setRenderTarget(i),e.setClearColor(0,0,0,0),s?e.clear(t.clearColor,t.clearDepth,t.clearStencil):e.clear(!0,!0,!1),this._blendPass.uniforms.texture1=n.texture,this._blendPass.uniforms.texture2=o.texture,this._blendPass.uniforms.colorWeight1=1,this._blendPass.uniforms.alphaWeight1=1,this._blendPass.uniforms.colorWeight2=1,this._blendPass.uniforms.alphaWeight2=0,s&&(this._blendPass.material.transparent=t._tempClearColor[3]<1||!t.clearColor,this._blendPass.renderStates.camera.rect.fromArray(t._tempViewport)),this._blendPass.render(e),s&&(this._blendPass.material.transparent=!1,this._blendPass.renderStates.camera.rect.set(0,0,1,1)),t._renderTargetCache.release(r,0),t._renderTargetCache.release(o,0)}dispose(){this._maskPass.dispose(),this._radialTailingPass.dispose(),this._blendPass.dispose()}}const ru={name:"ec_radial_tailing",defines:{},uniforms:{blurMap:null,blurStart:1,blurWidth:-.1,intensity:10,glowGamma:.8,center:[.5,.5]},vertexShader:V,fragmentShader:`
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
    `};class au extends ne{constructor(){super(),this.bufferDependencies=[{key:"SceneBuffer"},{key:"MarkBuffer",mask:H.OPAQUE},{key:"ColorMarkBuffer",mask:H.TRANSPARENT}],this.center=new z(.5,.5),this.strength=1,this._maskPass=new I(Xt),this._ghostingPass=new I(ou),this._blendPass=new I(Mt),this._blendPass.material.premultipliedAlpha=!0}render(e,t,n,i,s){const r=t._renderTargetCache.allocate(0),o=t._renderTargetCache.allocate(0),l=t.getBuffer("SceneBuffer"),c=t.getBuffer("MarkBuffer"),h=t.getBuffer("ColorMarkBuffer"),u=c.attachManager.has(this.name),f=h.attachManager.getAttachIndex(this.name),d=h.output(f)._attachments[M.COLOR_ATTACHMENT0];if(u){const _=c.attachManager.getAttachIndex(this.name),p=c.attachManager.getChannelIndex(this.name);e.setRenderTarget(r),e.setClearColor(0,0,0,0),e.clear(!0,!0,!1),this._maskPass.uniforms.colorTexture=l.output()._attachments[M.COLOR_ATTACHMENT0],this._maskPass.uniforms.maskTexture=c.output(_)._attachments[M.COLOR_ATTACHMENT0],this._maskPass.uniforms.additiveTexture=d;for(let m=0;m<4;m++)this._maskPass.uniforms.channel[m]=m===p?1:0;this._maskPass.render(e)}e.setRenderTarget(o),e.setClearColor(0,0,0,0),e.clear(!0,!0,!1),this._ghostingPass.uniforms.blurMap=u?r.texture:d,this._ghostingPass.uniforms.center[0]=this.center.x,this._ghostingPass.uniforms.center[1]=this.center.y,this._ghostingPass.uniforms.intensity=3*this.strength,this._ghostingPass.render(e),e.setRenderTarget(i),e.setClearColor(0,0,0,0),s?e.clear(t.clearColor,t.clearDepth,t.clearStencil):e.clear(!0,!0,!1),this._blendPass.uniforms.texture1=n.texture,this._blendPass.uniforms.texture2=o.texture,this._blendPass.uniforms.colorWeight1=1,this._blendPass.uniforms.alphaWeight1=1,this._blendPass.uniforms.colorWeight2=1,this._blendPass.uniforms.alphaWeight2=0,s&&(this._blendPass.material.transparent=t._tempClearColor[3]<1||!t.clearColor,this._blendPass.renderStates.camera.rect.fromArray(t._tempViewport)),this._blendPass.render(e),s&&(this._blendPass.material.transparent=!1,this._blendPass.renderStates.camera.rect.set(0,0,1,1)),t._renderTargetCache.release(r,0),t._renderTargetCache.release(o,0)}dispose(){this._maskPass.dispose(),this._ghostingPass.dispose(),this._blendPass.dispose()}}const ou={name:"ec_ghosting",defines:{},uniforms:{blurMap:null,blurStart:1,blurWidth:-.1,intensity:3,glowGamma:.8,center:[.5,.5]},vertexShader:V,fragmentShader:`
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
    `};class lu extends mn{constructor(e,t,n){super(e,t,n),this.enableCameraJitter=!0,this._rt=new Ee(e,t),this._rt.texture.minFilter=N.NEAREST,this._rt.texture.magFilter=N.NEAREST,this._rt.texture.generateMipmaps=!1,n.floatColorBuffer?this._rt.texture.type=F.FLOAT:this._rt.texture.type=F.HALF_FLOAT;const i=new ge;i.image={data:null,width:e,height:t},i.type=F.UNSIGNED_INT_24_8,i.format=y.DEPTH_STENCIL,i.magFilter=N.NEAREST,i.minFilter=N.NEAREST,i.generateMipmaps=!1,i.flipY=!1,this._rt.attach(i,M.DEPTH_STENCIL_ATTACHMENT),this._renderOptions={getMaterial:ii()},this._fixedRenderStates={scene:null,lights:null,camera:{id:0,version:0,near:0,far:0,position:new A,logDepthCameraNear:0,logDepthBufFC:0,viewMatrix:new B,projectionMatrix:new B,projectionViewMatrix:new B,rect:new me(0,0,1,1)},gammaFactor:2,outputEncoding:null},this.layers=[0],this.cameraNear=-1,this.cameraFar=-1}setIfRenderReplaceFunction(e){e?this._renderOptions.ifRender=e:delete this._renderOptions.ifRender}setGeometryReplaceFunction(e){e?this._renderOptions.getGeometry=e:delete this._renderOptions.getGeometry}setMaterialReplaceFunction(e){e?this._renderOptions.getMaterial=ii(e):this._renderOptions.getMaterial=ii()}render(e,t,n,i){if(!this.needRender())return;const s=t.$cameraJitter,r=this.enableCameraJitter&&s.accumulating();e.setRenderTarget(this._rt),e.setClearColor(0,0,0,0),e.clear(!0,!0,!1);const o=this._renderOptions,l=n.getRenderStates(i),c=n.getRenderQueue(i),h=this._getFixedRenderStates(l);r&&s.jitterProjectionMatrix(h.camera,this._rt.width,this._rt.height),e.beginRender();const u=this.layers;for(let f=0,d=u.length;f<d;f++){const _=c.getLayer(u[f]);e.renderRenderableList(_.opaque,h,o),e.renderRenderableList(_.transparent,h,o)}e.endRender()}output(){return this._rt}getCurrentRenderStates(){return this._fixedRenderStates}resize(e,t){super.resize(e,t),this._rt.resize(e,t)}dispose(){super.dispose(),this._rt.dispose()}_getFixedRenderStates(e){const t=this._fixedRenderStates;t.scene=e.scene,t.lights=e.lights,t.gammaFactor=e.gammaFactor,t.outputEncoding=e.outputEncoding;const n=t.camera,i=e.camera;n.id=i.id,n.version=i.version,n.position=i.position,n.logDepthCameraNear=i.logDepthCameraNear,n.logDepthBufFC=i.logDepthBufFC,n.viewMatrix=i.viewMatrix,n.rect=i.rect;const s=this.cameraNear>0?this.cameraNear:i.near,r=this.cameraFar>0?this.cameraFar:i.far;return n.near=s,n.far=r,n.projectionMatrix.copy(i.projectionMatrix),this.cameraNear>0||this.cameraFar>0?(n.projectionMatrix.elements[10]=-(r+s)/(r-s),n.projectionMatrix.elements[14]=-2*r*s/(r-s),n.projectionViewMatrix.multiplyMatrices(n.projectionMatrix,n.viewMatrix)):n.projectionViewMatrix.copy(i.projectionViewMatrix),t}}function ii(a=cu){return function(e){const t=a(e);return t.diffuseMap=e.material.diffuseMap,t.uniforms.roughness=e.material.roughness!==void 0?e.material.roughness:.5,t.roughnessMap=e.material.roughnessMap,t.side=e.material.side,t}}const si=new Map,ri=new WeakMap;function cu(a){let e=ri.get(a.material);if(!e){let u=function(){a.material.removeEventListener("dispose",u),ri.delete(a.material),e.refCount--,e.refCount<=0&&si.delete(h)};const t=!a.geometry.attributes.a_Normal||a.material.shading===xt.FLAT_SHADING,n=!!a.material.diffuseMap,i=!!a.material.roughnessMap,s=a.object.isSkinnedMesh&&a.object.skeleton,r=!!a.object.morphTargetInfluences,o=!!a.object.morphTargetInfluences&&a.object.geometry.morphAttributes.normal,l=a.material.side;let c=0;s&&(a.object.skeleton.boneTexture?c=1024:c=a.object.skeleton.bones.length);const h=t+"_"+n+"_"+i+"_"+s+"_"+c+"_"+r+"_"+o+"_"+l;if(e=si.get(h),!e){const f=new Ht(uu);f.shading=t?xt.FLAT_SHADING:xt.SMOOTH_SHADING,f.alphaTest=n?.999:0,f.side=l,e={refCount:0,material:f},si.set(h,e)}ri.set(a.material,e),e.refCount++,a.material.addEventListener("dispose",u)}return e.material}const uu={name:"ec_gbuffer_ng",defines:{G_USE_ROUGHNESSMAP:!1},uniforms:{roughness:.5,roughnessMap:null},vertexShader:`
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

            float roughnessFactor = roughness;
            #ifdef USE_ROUGHNESSMAP
                roughnessFactor *= texture2D(roughnessMap, v_Uv).g;
            #endif

            vec4 packedNormalGlossiness;
            packedNormalGlossiness.xyz = normal * 0.5 + 0.5;
            packedNormalGlossiness.w = clamp(1. - roughnessFactor, 0., 1.);
            
            gl_FragColor = packedNormalGlossiness;
        }
    `};class yr{constructor(e){this.keys=new Array,this.masks=new Array,this.attachChannelSize=e}allocate(e,t=H.ALL){return this.keys.push(e),this.masks.push(t),this.keys.length-1}getAttachIndex(e){const t=this.keys.indexOf(e);return Math.max(0,Math.floor(t/this.attachChannelSize))}getChannelIndex(e){const t=this.keys.indexOf(e);return Math.max(0,t%this.attachChannelSize)}has(e){return this.keys.indexOf(e)>-1}count(){return this.keys.length}attachCount(){return Math.ceil(this.keys.length/this.attachChannelSize)}getKey(e,t){return this.keys[e*this.attachChannelSize+t]}getMask(e,t){return this.masks[e*this.attachChannelSize+t]}getAttachInfo(e,t={count:0,keys:[],masks:[]}){t.count=0;for(let n=0;n<this.attachChannelSize;n++){const i=this.getKey(e,n),s=this.getMask(e,n);i!==void 0&&s!==void 0&&(t.keys[t.count]=i,t.masks[t.count]=s,t.count++)}return t}reset(){this.keys.length=0,this.masks.length=0}}class Pr extends mn{constructor(e,t,n){super(e,t,n);const i=n.bufferMipmaps;this._rts=[];for(let r=0;r<n.maxMarkAttachment;r++){const o=new Ee(e,t);o.detach(M.DEPTH_STENCIL_ATTACHMENT),i||(o.texture.generateMipmaps=!1,o.texture.minFilter=N.LINEAR),this._rts.push(o)}this._mrts=[];for(let r=0;r<n.maxMarkAttachment;r++){const o=new Ee(e,t);o.attach(new Ae(e,t,y.RGBA8,n.samplerNumber),M.COLOR_ATTACHMENT0),o.detach(M.DEPTH_STENCIL_ATTACHMENT),this._mrts.push(o)}this._state={attachIndex:0,attachInfo:{count:0,keys:[],masks:[]}};const s=new yr(4);this._opacityRenderOptions={getMaterial:gt(void 0,this._state,s,H.OPAQUE),ifRender:mt(void 0,this._state,H.OPAQUE)},this._transparentRenderOptions={getMaterial:gt(void 0,this._state,s,H.TRANSPARENT),ifRender:mt(void 0,this._state,H.TRANSPARENT)},this.attachManager=s,this.layers=[0]}setIfRenderReplaceFunction(e){e?(this._opacityRenderOptions.ifRender=mt(e,this._state,H.OPAQUE),this._transparentRenderOptions.ifRender=mt(e,this._state,H.TRANSPARENT)):(this._opacityRenderOptions.ifRender=mt(void 0,this._state,H.OPAQUE),this._transparentRenderOptions.ifRender=mt(void 0,this._state,H.TRANSPARENT))}setGeometryReplaceFunction(e){e?(this._opacityRenderOptions.getGeometry=e,this._transparentRenderOptions.getGeometry=e):(delete this._opacityRenderOptions.getGeometry,delete this._transparentRenderOptions.getGeometry)}setMaterialReplaceFunction(e){e?(this._opacityRenderOptions.getMaterial=gt(e,this._state,this.attachManager,H.OPAQUE),this._transparentRenderOptions.getMaterial=gt(e,this._state,this.attachManager,H.TRANSPARENT)):(this._opacityRenderOptions.getMaterial=gt(void 0,this._state,this.attachManager,H.OPAQUE),this._transparentRenderOptions.getMaterial=gt(void 0,this._state,this.attachManager,H.TRANSPARENT))}render(e,t,n,i){if(!this.needRender())return;const s=this.attachManager.attachCount();s>this._rts.length&&console.error("XXMarkBuffer: attachCount<"+s+"> bigger then options.maxMarkAttachment<"+this._rts.length+">.");for(let r=0;r<s;r++){const o=this._rts[r],l=this._mrts[r];t.$useMSAA?(e.setRenderTarget(l),e.setClearColor(0,0,0,0),e.clear(!0,!1,!1)):(e.setRenderTarget(o),e.setClearColor(0,0,0,0),e.clear(!0,!1,!1));const c=n.getRenderStates(i),h=n.getRenderQueue(i);this._state.attachIndex=r,this.attachManager.getAttachInfo(r,this._state.attachInfo);let u=0,f=this._state.attachInfo.masks,d=this._state.attachInfo.count;for(let p=0;p<d;p++)u|=f[p];e.beginRender();const _=this.layers;for(let p=0,m=_.length;p<m;p++){const g=h.getLayer(_[p]);u&H.OPAQUE&&e.renderRenderableList(g.opaque,c,this._opacityRenderOptions),u&H.TRANSPARENT&&e.renderRenderableList(g.transparent,c,this._transparentRenderOptions)}e.endRender(),t.$useMSAA&&(e.setRenderTarget(o),e.blitRenderTarget(l,o,!0,!1,!1)),e.updateRenderTargetMipmap(o)}}output(e=0){return this._rts[e]}resize(e,t){super.resize(e,t),this._rts.forEach(n=>n.resize(e,t)),this._mrts.forEach(n=>n.resize(e,t))}dispose(){super.dispose(),this._rts.forEach(e=>e.dispose()),this._mrts.forEach(e=>e.dispose())}}function mt(a=hu,e,t){return function(n){if(!a(n)||!n.object.effects)return!1;let i=0;for(let s=0;s<e.attachInfo.count;s++){const r=e.attachInfo.keys[s];n.object.effects[r]&&(i|=e.attachInfo.masks[s])}return i&t}}function hu(a){return!0}function gt(a=fu,e,t,n){return function(i){const s=a(i);s.side=oe.DOUBLE;for(let r=0;r<4;r++){const o=t.getKey(e.attachIndex,r);t.getMask(e.attachIndex,r)&n?s.uniforms.mColor[r]=i.object.effects[o]||0:s.uniforms.mColor[r]=0}return s}}const ai=new Map;function fu(a){const e=a.object.isSkinnedMesh&&a.object.skeleton,t=!!a.object.morphTargetInfluences,n=a.material.drawMode,i=e+"_"+t+"_"+n;let s;return ai.has(i)?s=ai.get(i):(s=new Ht(du),s.premultipliedAlpha=!0,s.transparent=!0,s.blending=Ne.ADD,s.drawMode=n,ai.set(i,s)),s}const du={name:"ec_mark",defines:{},uniforms:{mColor:[1,1,1,1]},vertexShader:`
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
    `};class _u extends Pr{constructor(e,t,n){super(e,t,n)}syncDepthAttachments(e,t){this._rts.forEach(n=>n.dispose()),this._mrts.forEach(n=>n.dispose()),it(e)?this._rts.forEach(n=>{n.attach(e,M.DEPTH_STENCIL_ATTACHMENT),n.detach(M.DEPTH_ATTACHMENT)}):this._rts.forEach(n=>{n.attach(e,M.DEPTH_ATTACHMENT),n.detach(M.DEPTH_STENCIL_ATTACHMENT)}),it(t)?this._mrts.forEach(n=>{n.attach(t,M.DEPTH_STENCIL_ATTACHMENT),n.detach(M.DEPTH_ATTACHMENT)}):this._mrts.forEach(n=>{n.attach(t,M.DEPTH_ATTACHMENT),n.detach(M.DEPTH_STENCIL_ATTACHMENT)}),this.needsUpdate=!0}}class pu extends mn{constructor(e,t,n){super(e,t,n);const i=n.bufferMipmaps;this._rts=[];for(let o=0;o<n.maxColorAttachment;o++){const l=new Ee(e,t);l.detach(M.DEPTH_STENCIL_ATTACHMENT),l.texture.type=n.highDynamicRange?F.HALF_FLOAT:F.UNSIGNED_BYTE,i||(l.texture.generateMipmaps=!1,l.texture.minFilter=N.LINEAR),this._rts.push(l)}this._mrts=[];for(let o=0;o<n.maxColorAttachment;o++){const l=new Ee(e,t);l.attach(new Ae(e,t,n.highDynamicRange?y.RGBA16F:y.RGBA8,n.samplerNumber),M.COLOR_ATTACHMENT0),l.detach(M.DEPTH_STENCIL_ATTACHMENT),this._mrts.push(l)}const s={key:null};this._state=s;const r=new yr(1);this._renderOptions={getMaterial:li(void 0,s),ifRender:oi(void 0,s)},this.attachManager=r,this.layers=[0]}setIfRenderReplaceFunction(e){e?this._renderOptions.ifRender=oi(e,this._state):this._renderOptions.ifRender=oi(void 0,this._state)}setGeometryReplaceFunction(e){e?this._renderOptions.getGeometry=e:delete this._renderOptions.getGeometry}setMaterialReplaceFunction(e){e?this._renderOptions.getMaterial=li(e,this._state):this._renderOptions.getMaterial=li(void 0,this._state)}syncDepthAttachments(e,t){this._rts.forEach(n=>n.dispose()),this._mrts.forEach(n=>n.dispose()),it(e)?this._rts.forEach(n=>{n.attach(e,M.DEPTH_STENCIL_ATTACHMENT),n.detach(M.DEPTH_ATTACHMENT)}):this._rts.forEach(n=>{n.attach(e,M.DEPTH_ATTACHMENT),n.detach(M.DEPTH_STENCIL_ATTACHMENT)}),it(t)?this._mrts.forEach(n=>{n.attach(t,M.DEPTH_STENCIL_ATTACHMENT),n.detach(M.DEPTH_ATTACHMENT)}):this._mrts.forEach(n=>{n.attach(t,M.DEPTH_ATTACHMENT),n.detach(M.DEPTH_STENCIL_ATTACHMENT)}),this.needsUpdate=!0}render(e,t,n,i){if(!this.needRender())return;const s=this.attachManager.attachCount();s>this._rts.length&&console.error("ColorMarkBuffer: attachCount<"+s+"> bigger then options.maxColorAttachment<"+this._rts.length+">.");for(let r=0;r<s;r++){const o=this._rts[r],l=this._mrts[r];t.$useMSAA?(e.setRenderTarget(l),e.setClearColor(0,0,0,0),e.clear(!0,!1,!1)):(e.setRenderTarget(o),e.setClearColor(0,0,0,0),e.clear(!0,!1,!1));const c=this._renderOptions,h=this.attachManager,u=n.getRenderStates(i),f=n.getRenderQueue(i);this._state.key=h.getKey(r,0);const d=h.getMask(r,0);e.beginRender();const _=this.layers;for(let p=0,m=_.length;p<m;p++){const g=f.getLayer(_[p]);d&H.OPAQUE&&e.renderRenderableList(g.opaque,u,c),d&H.TRANSPARENT&&e.renderRenderableList(g.transparent,u,c)}e.endRender(),t.$useMSAA&&(e.setRenderTarget(o),e.blitRenderTarget(l,o,!0,!1,!1)),e.updateRenderTargetMipmap(o)}}output(e=0){return this._rts[e]}resize(e,t){super.resize(e,t),this._rts.forEach(n=>n.resize(e,t)),this._mrts.forEach(n=>n.resize(e,t))}dispose(){super.dispose(),this._rts.forEach(e=>e.dispose()),this._mrts.forEach(e=>e.dispose())}}function oi(a=mu,e){return function(t){return!a(t)||!t.object.effects?!1:!!t.object.effects[e.key]}}function mu(a){return!0}function li(a=gu,e){return function(t){const n=a(t);return n.side=oe.DOUBLE,n.uniforms.strength=t.object.effects[e.key]||0,n}}const ci=new Map;function gu(a){const e=a.object.isSkinnedMesh&&a.object.skeleton,t=!!a.object.morphTargetInfluences,n=a.material.drawMode,i=!!a.material.diffuseMap,s=e+"_"+t+"_"+n+i;let r;return ci.has(s)?r=ci.get(s):(r=new Ht(xu),r.premultipliedAlpha=!1,r.drawMode=n,ci.set(s,r)),r.transparent=a.material.transparent,r.blending=a.material.blending,r.opacity=a.material.opacity,r.diffuse.copy(a.material.diffuse),r.diffuseMap=a.material.diffuseMap,r}const xu={name:"ec_color",defines:{},uniforms:{strength:1},vertexShader:`
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
    `};class Au extends mn{constructor(e,t,n){super(e,t,n),this.enableCameraJitter=!0,this._rt=new Ee(e,t),this._rt.detach(M.DEPTH_STENCIL_ATTACHMENT),this._mrt=new Ee(e,t),this._mrt.detach(M.DEPTH_STENCIL_ATTACHMENT),this.clearColor=!0,this.clearDepth=!0,this.clearStencil=!0,this.renderLayers=[{id:0,mask:H.ALL}],this._sceneRenderOptions={}}syncAttachments(e,t,n,i){this._rt.dispose(),this._mrt.dispose(),this._rt.attach(e,M.COLOR_ATTACHMENT0),it(t)?(this._rt.attach(t,M.DEPTH_STENCIL_ATTACHMENT),this._rt.detach(M.DEPTH_ATTACHMENT)):(this._rt.attach(t,M.DEPTH_ATTACHMENT),this._rt.detach(M.DEPTH_STENCIL_ATTACHMENT)),this._mrt.attach(n,M.COLOR_ATTACHMENT0),it(i)?(this._mrt.attach(i,M.DEPTH_STENCIL_ATTACHMENT),this._mrt.detach(M.DEPTH_ATTACHMENT)):(this._mrt.attach(i,M.DEPTH_ATTACHMENT),this._mrt.detach(M.DEPTH_STENCIL_ATTACHMENT)),this.needsUpdate=!0}setIfRenderReplaceFunction(e){e?this._sceneRenderOptions.ifRender=e:delete this._sceneRenderOptions.ifRender}setGeometryReplaceFunction(e){e?this._sceneRenderOptions.getGeometry=e:delete this._sceneRenderOptions.getGeometry}setOutputEncoding(e){this._rt.texture.encoding=e}getOutputEncoding(){return this._rt.texture.encoding}render(e,t,n,i){if(!this.needRender())return;const s=t.$useMSAA,r=s?this._mrt:this._rt,o=!!r._attachments[M.DEPTH_STENCIL_ATTACHMENT],l=t.$cameraJitter,c=this.enableCameraJitter&&l.accumulating();e.setRenderTarget(r),t.clearColor?e.setClearColor(...t._tempClearColor):e.setClearColor(0,0,0,0),e.clear(this.clearColor,this.clearDepth,this.clearStencil&&o);const h=n.getRenderStates(i),u=n.getRenderQueue(i);c&&l.jitterProjectionMatrix(h.camera,this._rt.width,this._rt.height),this.$renderScene(e,u,h),c&&l.restoreProjectionMatrix(h.camera),s&&(e.setRenderTarget(this._rt),e.blitRenderTarget(this._mrt,this._rt,!0,!0,o)),e.updateRenderTargetMipmap(this._rt)}output(){return this._rt}resize(e,t){super.resize(e,t),this._rt.resize(e,t),this._mrt.resize(e,t)}dispose(){super.dispose(),this._rt.dispose(),this._mrt.dispose()}$renderScene(e,t,n){const i=this._sceneRenderOptions;e.beginRender();const s=this.renderLayers;for(let o=0,l=s.length;o<l;o++){const{id:c,mask:h,options:u=i}=s[o],f=t.getLayer(c);f&&(f.opaqueCount>0&&h&H.OPAQUE&&e.renderRenderableList(f.opaque,n,u),f.transparentCount>0&&h&H.TRANSPARENT&&e.renderRenderableList(f.transparent,n,u))}e.endRender();const r=t.getLayer(1);r&&r.opaqueCount+r.transparentCount>0&&(e.clear(!1,!0,!1),e.beginRender(),e.renderRenderableList(r.opaque,n,i),e.renderRenderableList(r.transparent,n,i),e.endRender())}}class Tu{constructor(e,t,n=!1){this._width=e,this._height=t,this._highDynamicRange=n,this._map=new Map}allocate(e=0){let t=this._map.get(e);if(t||(t=[],this._map.set(e,t)),t.length>0)return t.shift();{const n=Math.pow(2,e),i=Math.ceil(this._width/n),s=Math.ceil(this._height/n),r=new Ee(i,s),o=r._attachments[M.COLOR_ATTACHMENT0];return o.minFilter=N.LINEAR,o.magFilter=N.LINEAR,o.type=this._highDynamicRange?F.HALF_FLOAT:F.UNSIGNED_BYTE,o.format=y.RGBA,o.generateMipmaps=!1,r.detach(M.DEPTH_STENCIL_ATTACHMENT),r}}release(e,t=0){this._map.get(t).push(e)}resize(e,t){this._width=e,this._height=t,this._map.forEach((n,i)=>{const s=Math.pow(2,i),r=Math.ceil(this._width/s),o=Math.ceil(this._height/s);n.forEach(l=>{l.resize(r,o)})})}updateStats(e){let t=0;this._map.forEach((n,i)=>{const s=Math.pow(2,i);t+=n.length/(s*s)}),e.fboCache=t}dispose(){this._map.forEach(e=>{e.forEach(t=>{t.dispose()})}),this._map.clear()}}class vu{constructor(e=30){this._enabled=!1,this._state=ee.DISABLED,this._totalFrame=0,this._haltonSequenece=[],this._frame=0,this._jitterMatrix=new B,this._originMatrix=new B,this.setTotalFrame(e)}setTotalFrame(e){this._totalFrame=e;const t=[];for(let n=0;n<e;n++)t.push([Gs(n,2),Gs(n,3)]);this._haltonSequence=t}set enable(e){this._state===ee.DISABLED?e&&(this._frame=0,this._state=ee.ACCUMULATING):this._state===ee.ACCUMULATING?e||(this._frame=0,this._state=ee.DISABLED):this._state===ee.FINISHED&&(e||(this._frame=0,this._state=ee.DISABLED))}get enable(){return this._state!==ee.DISABLED}reset(){this._state!==ee.DISABLED&&(this._state===ee.ACCUMULATING?this._frame=0:this._state===ee.FINISHED&&(this._state=ee.ACCUMULATING))}update(){this._state===ee.ACCUMULATING&&(this._frame++,this._frame>=this._totalFrame&&(this._state=ee.FINISHED,this._frame=0))}finished(){return this._state===ee.FINISHED}accumulating(){return this._state===ee.ACCUMULATING}frame(){return this._frame}totalFrame(){return this._totalFrame}jitterProjectionMatrix(e,t,n){if(this._state!==ee.ACCUMULATING)return;const i=this._haltonSequence[this._frame],s=this._jitterMatrix;s.elements[12]=(i[0]*2-1)/t,s.elements[13]=(i[1]*2-1)/n,this._originMatrix.copy(e.projectionMatrix),e.projectionMatrix.premultiply(s),e.projectionViewMatrix.multiplyMatrices(e.projectionMatrix,e.viewMatrix)}restoreProjectionMatrix(e){this._state===ee.ACCUMULATING&&(e.projectionMatrix.copy(this._originMatrix),e.projectionViewMatrix.multiplyMatrices(e.projectionMatrix,e.viewMatrix))}}const ee={DISABLED:1,ACCUMULATING:2,FINISHED:3};function Gs(a,e){let t=0,n=1/e,i=a;for(;i>0;)t=t+n*(i%e),i=Math.floor(i/e),n=n/e;return t}class Ri{constructor(e,t,n={}){this._size=new z(e,t),n.webgl2=n.webgl2||!1,n.bufferMipmaps=n.bufferMipmaps||!1,n.floatColorBuffer=n.floatColorBuffer||!1,n.highDynamicRange=n.highDynamicRange||!1,n.samplerNumber=n.samplerNumber||8,n.maxMarkAttachment=n.maxMarkAttachment||5,n.maxColorAttachment=n.maxColorAttachment||5;const i=new Au(e,t,n),s=new lu(e,t,n),r=new Pr(e,t,n),o=new _u(e,t,n),l=new pu(e,t,n);this._bufferMap=new Map([["SceneBuffer",i],["GBuffer",s],["NonDepthMarkBuffer",r],["MarkBuffer",o],["ColorMarkBuffer",l]]),this._defaultColorTexture=new ge,this._defaultColorTexture.type=n.highDynamicRange?F.HALF_FLOAT:F.UNSIGNED_BYTE,this._defaultMSColorRenderBuffer=new Ae(e,t,n.highDynamicRange?y.RGBA16F:y.RGBA8,n.samplerNumber),n.bufferMipmaps||(this._defaultColorTexture.generateMipmaps=!1,this._defaultColorTexture.minFilter=N.LINEAR),this._defaultDepthRenderBuffer=new Ae(e,t,y.DEPTH_COMPONENT16),this._defaultMSDepthRenderBuffer=new Ae(e,t,y.DEPTH_COMPONENT16,n.samplerNumber),this._defaultDepthStencilRenderBuffer=new Ae(e,t,y.DEPTH_STENCIL),this._defaultMSDepthStencilRenderBuffer=new Ae(e,t,y.DEPTH24_STENCIL8,n.samplerNumber),this._externalColorAttachment=null,this._externalDepthAttachment=null,this._samplerNumber=n.samplerNumber,this._externalMSAA=null,this._stencilBuffer=!1,this._syncAttachments(),this._copyPass=new I(xr),this._copyPass.material.premultipliedAlpha=!0,this._renderTargetCache=new Tu(e,t,n.highDynamicRange),this._cameraJitter=new vu,this._effectList=[],this._tempClearColor=[0,0,0,1],this._tempViewport=[0,0,1,1],this._tempBufferNames=new Set,this._stats={fboCache:0,markBuffers:0,colorMarkBuffers:0,currentBufferUsage:{}},this.sceneMSAA=!1,this.clearColor=!0,this.clearDepth=!0,this.clearStencil=!1,this.debugger=null}getSize(){return this._size}_syncAttachments(){const e=this._externalColorAttachment,t=this._externalDepthAttachment,n=!!e&&!!t,i=this._externalMSAA;let s=this._stencilBuffer;n&&(s=it(t));const r=s?this._defaultDepthStencilRenderBuffer:this._defaultDepthRenderBuffer,o=s?this._defaultMSDepthStencilRenderBuffer:this._defaultMSDepthRenderBuffer;let l,c,h,u,f,d;n?i?(l=this._defaultColorTexture,c=r,h=e,u=t,f=r,d=t):(l=e,c=t,h=this._defaultMSColorRenderBuffer,u=o,f=t,d=o):(l=this._defaultColorTexture,c=r,h=this._defaultMSColorRenderBuffer,u=o,f=r,d=o),this._bufferMap.forEach(_=>{_.syncAttachments?_.syncAttachments(l,c,h,u):_.syncDepthAttachments&&_.syncDepthAttachments(f,d)})}set stencilBuffer(e){this._stencilBuffer=e,this._syncAttachments()}get stencilBuffer(){return this._stencilBuffer}setExternalAttachment(e,t){const n=zs(e),i=zs(t);if(n!==i){console.warn("EffectComposer.setExternalAttachment: color and depth attachment MultipleSampling not match.");return}this._externalColorAttachment=e,this._externalDepthAttachment=t,this._externalMSAA=n>0,this._syncAttachments()}clearExternalAttachment(){this._externalColorAttachment=null,this._externalDepthAttachment=null,this._externalMSAA=null,this._syncAttachments()}addBuffer(e,t){this._bufferMap.set(e,t)}removeBuffer(e){this._bufferMap.delete(e)}getBuffer(e){return this._bufferMap.get(e)}addEffect(e,t,n=0){if(this.getEffect(e)){console.warn("");return}t.name=e,this._effectList.push({name:e,effect:t,order:n}),t.resize(this._size.x,this._size.y)}removeEffect(e){const t=this._effectList.findIndex(n=>n.name===e);t>-1&&this._effectList.splice(t,1)}getEffect(e){const t=this._effectList.find(n=>n.name===e);return t?t.effect:null}render(e,t,n,i){const s=t.getRenderStates(n);if(e.getClearColor().toArray(this._tempClearColor),n.rect.toArray(this._tempViewport),n.rect.set(0,0,1,1),s.camera.rect.set(0,0,1,1),this._bufferMap.forEach(l=>{l.attachManager&&l.attachManager.reset()}),this.debugger){this.debugger.bufferDependencies.forEach(l=>{const c=this._bufferMap.get(l);this.debugger.channel&&c.attachManager&&c.attachManager.allocate(this.debugger.channel,this.debugger.mask),c.render(e,this,t,n)}),this.debugger.render(e,this,i),e.setClearColor(...this._tempClearColor);return}this._effectList.sort(Su);let r=this._effectList.findIndex(l=>l.effect.active);const o=r>-1;if(this._tempBufferNames.clear(),o){this._tempBufferNames.add("SceneBuffer");let l=!1;this._effectList.forEach(_=>{_.effect.active&&(_.effect.bufferDependencies.forEach(({key:p,mask:m})=>{this._tempBufferNames.add(p),this._bufferMap.get(p).attachManager&&this._bufferMap.get(p).attachManager.allocate(_.name,m)}),l=l||_.effect.needCameraJitter)}),this._cameraJitter.enable=l,this._tempBufferNames.forEach(_=>{this._bufferMap.get(_).render(e,this,t,n)});let c=this._renderTargetCache.allocate(),h=this._renderTargetCache.allocate(),u;this._effectList.sort(Eu);const f=this._effectList.length,d=this._effectList.findIndex(_=>_.effect.active);r=f-1-r,this._effectList.forEach((_,p)=>{if(!_.effect.active)return;const m=p<r;_.effect.render(e,this,p===d?this._bufferMap.get("SceneBuffer").output():c,m?h:i,!m),u=c,c=h,h=u}),this._renderTargetCache.release(c),this._renderTargetCache.release(h),this._cameraJitter.update()}else if(this._externalColorAttachment&&this._externalDepthAttachment){const l=this._bufferMap.get("SceneBuffer");l.render(e,this,t,n),e.setRenderTarget(i),e.setClearColor(0,0,0,0),e.clear(this.clearColor,this.clearDepth,this.clearStencil);const c=this._copyPass;c.uniforms.tDiffuse=l.output().texture,c.material.transparent=this._tempClearColor[3]<1||!this.clearColor,c.renderStates.camera.rect.fromArray(this._tempViewport),c.render(e)}else{e.setRenderTarget(i),e.setClearColor(...this._tempClearColor),e.clear(this.clearColor,this.clearDepth,this.clearStencil),s.camera.rect.fromArray(this._tempViewport);const l=t.getRenderQueue(n);this._bufferMap.get("SceneBuffer").$renderScene(e,l,s)}e.setClearColor(...this._tempClearColor),n.rect.fromArray(this._tempViewport),s.camera.rect.fromArray(this._tempViewport)}getStats(){this._renderTargetCache.updateStats(this._stats);const e=this.getBuffer("MarkBuffer").attachManager.attachCount(),t=this.getBuffer("NonDepthMarkBuffer").attachManager.attachCount(),n=this.getBuffer("ColorMarkBuffer").attachManager.attachCount();this._stats.markBuffers=e+t,this._stats.colorMarkBuffers=n;for(const[i,s]of this._bufferMap)s.attachManager||(this._stats.currentBufferUsage[i]=this._tempBufferNames.has(i)?1:0);return this._stats}resize(e,t){this._size.set(e,t),this._bufferMap.forEach(n=>n.resize(e,t)),this._renderTargetCache.resize(e,t),this._effectList.forEach(n=>n.effect.resize(e,t))}dispose(){this._bufferMap.forEach(e=>e.dispose()),this._renderTargetCache.dispose(),this._effectList.forEach(e=>e.effect.dispose()),this._copyPass.dispose()}get $useMSAA(){return(this._externalMSAA!==null?this._externalMSAA:this.sceneMSAA)&&this._samplerNumber>1}get $cameraJitter(){return this._cameraJitter}}function Eu(a,e){return a.order-e.order}function Su(a,e){return e.order-a.order}function zs(a){return a.isTexture?0:a.multipleSampling}class qh extends Ri{constructor(e,t,n){super(e,t,n),this.addEffect("SSAO",new Er,0),this.addEffect("SSR",new Mr,1),this.addEffect("ColorCorrection",new Lc,2),this.addEffect("DOF",new Cc,3),this.addEffect("Bloom",new Pc,4),this.addEffect("InnerGlow",new qc,10),this.addEffect("Glow",new $c,11),this.addEffect("SoftGlow",new eu,12),this.addEffect("Tailing",new nu,13),this.addEffect("RadialTailing",new su,14),this.addEffect("Ghosting",new au,15),this.addEffect("FXAA",new Uc,101),this.addEffect("ChromaticAberration",new bc,102),this.addEffect("Vignetting",new Vc,103),this.addEffect("BlurEdge",new Qc,104),this.addEffect("Film",new Dc,105),this._effectList.forEach(i=>i.effect.active=!1)}}class yt{constructor(){this.bufferDependencies=[]}render(e,t,n){console.error("Debugger: .render() must be implemented in subclass.")}resize(e,t){}dispose(){}}class Mu extends yt{constructor(){super(),this.bufferDependencies=["SceneBuffer","ColorMarkBuffer"],this._mainPass=new I(xr),this.channel="",this.mask=H.ALL}render(e,t,n){e.setRenderTarget(n),e.setClearColor(0,0,0,1),e.clear(!0,!0,!1);const i=t.getBuffer("ColorMarkBuffer"),s=i.attachManager.getAttachIndex(this.channel);this._mainPass.uniforms.tDiffuse=i.output(s)._attachments[M.COLOR_ATTACHMENT0],this._mainPass.render(e)}}class Ei extends yt{constructor(){super(),this.bufferDependencies=["GBuffer"],this._mainPass=new I(yu),this.debugType=br.Normal}render(e,t,n){e.setRenderTarget(n),e.setClearColor(0,0,0,1),e.clear(!0,!0,!1);const i=t.getBuffer("GBuffer"),s=i.getCurrentRenderStates();this._mainPass.uniforms.normalGlossinessTexture=i.output()._attachments[M.COLOR_ATTACHMENT0],this._mainPass.uniforms.depthTexture=i.output()._attachments[M.DEPTH_STENCIL_ATTACHMENT],this._mainPass.uniforms.debug=this.debugType||0,s.camera.projectionViewMatrix.toArray(this._mainPass.uniforms.projectionView),this._mainPass.render(e)}}const br={Normal:0,Depth:1,Position:2,Glossiness:3};Ei.DebugTypes=br;const yu={name:"ec_debug_gbuffer",defines:{},uniforms:{normalGlossinessTexture:null,depthTexture:null,projectionView:new Float32Array(16),debug:0},vertexShader:V,fragmentShader:`
		uniform sampler2D normalGlossinessTexture;
		uniform sampler2D depthTexture;
		uniform int debug;

		uniform mat4 projectionView;

		varying vec2 v_Uv;

		void main() {
			vec2 texCoord = v_Uv;
			vec4 texel = texture2D(normalGlossinessTexture, texCoord);

			if (dot(texel.rgb, vec3(1.0)) == 0.0) {
				discard;
			}

			float depth = texture2D(depthTexture, texCoord).r;

			vec2 xy = texCoord * 2.0 - 1.0;
			float z = depth * 2.0 - 1.0;

			vec4 projectedPos = vec4(xy, z, 1.0);
			vec4 p4 = inverse(projectionView) * projectedPos;

			vec3 position = p4.xyz / p4.w;

			if (debug == 0) {
				gl_FragColor = vec4(texel.rgb, 1.0);
			} else if (debug == 1) {
				gl_FragColor = vec4(vec3(depth), 1.0);
			} else if (debug == 2) {
				gl_FragColor = vec4(position, 1.0);
			} else {
				gl_FragColor = vec4(vec3(texel.a), 1.0);
			}
		}
	`};class Pu extends yt{constructor(){super(),this.bufferDependencies=["SceneBuffer","MarkBuffer"],this._mainPass=new I(Ci),this.channel="",this.mask=H.ALL}render(e,t,n){e.setRenderTarget(n),e.setClearColor(0,0,0,1),e.clear(!0,!0,!1);const i=t.getBuffer("MarkBuffer"),s=i.attachManager.getAttachIndex(this.channel),r=i.attachManager.getChannelIndex(this.channel);this._mainPass.uniforms.tDiffuse=i.output(s)._attachments[M.COLOR_ATTACHMENT0];for(let o=0;o<4;o++)this._mainPass.uniforms.channelMask[o]=o===r?1:0;this._mainPass.render(e)}}class bu extends yt{constructor(){super(),this.bufferDependencies=["NonDepthMarkBuffer"],this._mainPass=new I(Ci),this.channel="",this.mask=H.ALL}render(e,t,n){e.setRenderTarget(n),e.setClearColor(0,0,0,1),e.clear(!0,!0,!1);const i=t.getBuffer("NonDepthMarkBuffer"),s=i.attachManager.getAttachIndex(this.channel),r=i.attachManager.getChannelIndex(this.channel);this._mainPass.uniforms.tDiffuse=i.output(s)._attachments[M.COLOR_ATTACHMENT0];for(let o=0;o<4;o++)this._mainPass.uniforms.channelMask[o]=o===r?1:0;this._mainPass.render(e)}}class wu extends yt{constructor(){super(),this.bufferDependencies=["GBuffer"],this.defaultEffect=new Er}render(e,t,n){(t.getEffect("SSAO")||this.defaultEffect).render(e,t,null,n)}resize(e,t){this.defaultEffect.resize(e,t)}dispose(){this.defaultEffect.dispose()}}class Lu extends yt{constructor(){super(),this.bufferDependencies=["SceneBuffer","GBuffer"],this.defaultEffect=new Mr}render(e,t,n){(t.getEffect("SSR")||this.defaultEffect).render(e,t,null,n)}resize(e,t){this.defaultEffect.resize(e,t)}dispose(){this.defaultEffect.dispose()}}Ri.prototype.setGeometryReplaceFunction=function(a){console.warn("EffectComposer.setGeometryReplaceFunction has been removed, use SceneBuffer.setGeometryReplaceFunction instead."),this._bufferMap.get("SceneBuffer").setGeometryReplaceFunction(a)};Object.defineProperties(Ri.prototype,{customRenderLayers:{set:function(a){console.error("EffectComposer.customRenderLayers has been removed, use SceneBuffer.renderLayers instead.")},get:function(){console.error("EffectComposer.customRenderLayers has been removed, use SceneBuffer.renderLayers instead.")}}});I.prototype.dispose||(I.prototype.dispose=function(){const a=this.renderQueueLayer.opaque[0];a&&(a.geometry.dispose(),a.material.dispose())});class jh extends Bt{constructor(e){super(e),this.type=F.HALF_FLOAT}load(e,t,n,i){const s=this,r=new ln(this.manager);r.setResponseType("arraybuffer"),r.setRequestHeader(this.requestHeader),r.setPath(this.path),r.setWithCredentials(this.withCredentials),r.load(e,function(o){t!==void 0&&t(s.parse(o))},n,i)}parse(e){const t=new Uint8Array(e);t.pos=0;const n=Fu(t);if(Si!==n){const i=n.width,s=n.height,r=Du(t.subarray(t.pos),i,s);if(Si!==r){let o,l,c;if(this.type===F.FLOAT){c=r.length/4;const u=new Float32Array(c*4);for(let f=0;f<c;f++)Iu(r,f*4,u,f*4);o=u,l=F.FLOAT}else if(this.type===F.HALF_FLOAT){c=r.length/4;const u=new Uint16Array(c*4);for(let f=0;f<c;f++)Uu(r,f*4,u,f*4);o=u,l=F.HALF_FLOAT}else this.type===F.UNSIGNED_BYTE?(o=r,l=F.UNSIGNED_BYTE):console.error("RGBELoader: unsupported type: ",this.type);const h=l===F.FLOAT||l===F.HALF_FLOAT;return{width:i,height:s,data:o,header:n.string,gamma:n.gamma,exposure:n.exposure,format:y.RGBA,internalformat:null,type:l,generateMipmaps:h?!1:void 0,flipY:h?!0:void 0,minFilter:h?N.LINEAR:void 0,magFilter:h?N.LINEAR:void 0}}}}}const Si=-1,Fi=1,Nu=2,et=3,wr=4,Ue=function(a,e){switch(a){case Fi:console.error("RGBELoader Read Error: "+(e||""));break;case Nu:console.error("RGBELoader Write Error: "+(e||""));break;case et:console.error("RGBELoader Bad File Format: "+(e||""));break;case wr:default:console.error("RGBELoader: Error: "+(e||""))}return Si},Cu=1,ui=2,hi=4,Ru=`
`,Hs=function(a,e,t){e=e||1024;let i=a.pos,s=-1,r=0,o="",l=String.fromCharCode.apply(null,new Uint16Array(a.subarray(i,i+128)));for(;0>(s=l.indexOf(Ru))&&r<e&&i<a.byteLength;)o+=l,r+=l.length,i+=128,l+=String.fromCharCode.apply(null,new Uint16Array(a.subarray(i,i+128)));return-1<s?(t!==!1&&(a.pos+=r+s+1),o+l.slice(0,s)):!1},Fu=function(a){const e=/^#\?(\S+)$/,t=/^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,n=/^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,i=/^\s*FORMAT=(\S+)\s*$/,s=/^\s*-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,r={valid:0,string:"",comments:"",programtype:"RGBE",format:"",gamma:1,exposure:1,width:0,height:0};let o,l;if(a.pos>=a.byteLength||!(o=Hs(a)))return Ue(Fi,"no header found");if(!(l=o.match(e)))return Ue(et,"bad initial token");for(r.valid|=Cu,r.programtype=l[1],r.string+=o+`
`;o=Hs(a),o!==!1;){if(r.string+=o+`
`,o.charAt(0)==="#"){r.comments+=o+`
`;continue}if(l=o.match(t),l&&(r.gamma=parseFloat(l[1])),l=o.match(n),l&&(r.exposure=parseFloat(l[1])),l=o.match(i),l&&(r.valid|=ui,r.format=l[1]),l=o.match(s),l&&(r.valid|=hi,r.height=parseInt(l[1],10),r.width=parseInt(l[2],10)),r.valid&ui&&r.valid&hi)break}return r.valid&ui?r.valid&hi?r:Ue(et,"missing image size specifier"):Ue(et,"missing format specifier")},Du=function(a,e,t){const n=e;if(n<8||n>32767||a[0]!==2||a[1]!==2||a[2]&128)return new Uint8Array(a);if(n!==(a[2]<<8|a[3]))return Ue(et,"wrong scanline width");const i=new Uint8Array(4*e*t);if(!i.length)return Ue(wr,"unable to allocate buffer space");let s=0,r=0;const o=4*n,l=new Uint8Array(4),c=new Uint8Array(o);let h=t;for(;h>0&&r<a.byteLength;){if(r+4>a.byteLength)return Ue(Fi);if(l[0]=a[r++],l[1]=a[r++],l[2]=a[r++],l[3]=a[r++],l[0]!=2||l[1]!=2||(l[2]<<8|l[3])!=n)return Ue(et,"bad rgbe scanline format");let u=0,f;for(;u<o&&r<a.byteLength;){f=a[r++];const _=f>128;if(_&&(f-=128),f===0||u+f>o)return Ue(et,"bad scanline data");if(_){const p=a[r++];for(let m=0;m<f;m++)c[u++]=p}else c.set(a.subarray(r,r+f),u),u+=f,r+=f}const d=n;for(let _=0;_<d;_++){let p=0;i[s]=c[_+p],p+=n,i[s+1]=c[_+p],p+=n,i[s+2]=c[_+p],p+=n,i[s+3]=c[_+p],s+=4}h--}return i},Iu=function(a,e,t,n){const i=a[e+3],s=Math.pow(2,i-128)/255;t[n+0]=a[e+0]*s,t[n+1]=a[e+1]*s,t[n+2]=a[e+2]*s,t[n+3]=1},Uu=function(a,e,t,n){const i=a[e+3],s=Math.pow(2,i-128)/255;t[n+0]=on(Math.min(a[e+0]*s,65504)),t[n+1]=on(Math.min(a[e+1]*s,65504)),t[n+2]=on(Math.min(a[e+2]*s,65504)),t[n+3]=on(1)},Lr=new Float32Array(1),Ou=new Int32Array(Lr.buffer);function on(a){a>65504&&(console.warn("toHalfFloat(): value exceeds 65504."),a=65504),Lr[0]=a;const e=Ou[0];let t=e>>16&32768,n=e>>12&2047;const i=e>>23&255;return i<103?t:i>142?(t|=31744,t|=(i==255?0:1)&&e&8388607,t):i<113?(n|=2048,t|=(n>>114-i)+(n>>113-i&1),t):(t|=i-112<<10|n>>1,t+=n&1,t)}class Bu{constructor(e){this.camera=new zt,this.targets=[new A(1,0,0),new A(-1,0,0),new A(0,1,0),new A(0,-1,0),new A(0,0,1),new A(0,0,-1)],this.ups=[new A(0,-1,0),new A(0,-1,0),new A(0,0,1),new A(0,0,-1),new A(0,-1,0),new A(0,-1,0)],this.camera.setPerspective(90/180*Math.PI,1,1,1e3),this.position=new A,this.lookTarget=new A,this.renderTarget=e||new kt(512,512),this.renderTexture=this.renderTarget.texture,this.renderTexture.minFilter=N.LINEAR_MIPMAP_LINEAR,this.renderOption={ifRender:function(t){return!t.object.skipReflectionProbe}}}render(e,t){this.camera.position.copy(this.position);for(let n=0;n<6;n++){this.lookTarget.set(this.targets[n].x+this.camera.position.x,this.targets[n].y+this.camera.position.y,this.targets[n].z+this.camera.position.z),this.camera.lookAt(this.lookTarget,this.ups[n]),this.camera.updateMatrix(),this.renderTarget.activeCubeFace=n,e.setRenderTarget(this.renderTarget),e.clear(!0,!0,!0);const i=t.updateRenderStates(this.camera,!1),s=t.updateRenderQueue(this.camera,!1,!1);e.beginRender();let r;for(let o=0,l=s.layerList.length;o<l;o++)r=s.layerList[o],e.renderRenderableList(r.opaque,i,this.renderOption),e.renderRenderableList(r.transparent,i,this.renderOption);e.endRender(),e.updateRenderTargetMipmap(this.renderTarget)}}}class Zh{static prefilterEnvironmentMap(e,t,n={}){const i=e.capabilities,s=i.version>1;s?i.getExtension("EXT_color_buffer_float"):(i.getExtension("OES_texture_half_float"),i.getExtension("OES_texture_half_float_linear")),i.getExtension("OES_texture_float_linear"),i.getExtension("EXT_color_buffer_half_float");const r=n.legacy!==void 0?n.legacy:!s;let o;t.isTextureCube?o=t.images.length===0?16:t.images[0].width:o=t.image.width/4;const l=Math.floor(Math.log2(o));o=Math.pow(2,l);let c;n.outputTexture?c=n.outputTexture:c=new pn,c.type=F.HALF_FLOAT,c.format=y.RGBA,c.generateMipmaps=!1;let h=o;for(let x=0;x<l+1;x++){c.mipmaps[x]=[];for(let T=0;T<6;T++)c.mipmaps[x].push({width:h,height:h,data:null});h=h/2}const u=new kt(o,o);u.detach(M.DEPTH_STENCIL_ATTACHMENT),r?(u.texture.type=F.HALF_FLOAT,u.texture.format=y.RGBA,u.texture.generateMipmaps=!1):u.attach(c,M.COLOR_ATTACHMENT0);const f=zu(256,n.sampleSize||1024),d=new Bu(u),_=new Pi;n.rotation&&(ks.setFromEuler(n.rotation),ks.toMatrix4(_.anchorMatrix));let p=1;t.isTextureCube&&t.images[0]&&t.images[0].rtt&&(p=-1),r||(p*=-1);const m=new Oa(1,1,1),g=new Ht(Gu);g.side=oe.BACK,g.cubeMap=t,g.uniforms.environmentMap=t,g.uniforms.envMapFlip=p,g.uniforms.normalDistribution=f,g.defines.PANORAMA=!t.isTextureCube;const v=new tt(m,g);v.frustumCulled=!1,_.add(v),_.add(d.camera),n.rotation&&_.updateRenderStates(d.camera);for(let x=0;x<l+1;x++)if(g.uniforms.roughness=Math.max(x-1,0)/l,r){d.render(e,_);for(let T=0;T<6;T++){const E=c.mipmaps[x][T];E.data=new Uint16Array(E.width*E.height*4),u.activeCubeFace=T,e.setRenderTarget(u),e.readRenderTargetPixels(0,0,E.width,E.height,E.data),x===0&&(c.images[T]=E)}u.resize(u.width/2,u.height/2)}else u.activeMipmapLevel=x,d.render(e,_),d.camera.rect.z/=2,d.camera.rect.w/=2;return r&&c.version++,!r&&u.detach(M.COLOR_ATTACHMENT0),u.dispose(),m.dispose(),g.dispose(),f.dispose(),c}}const ks=new We,Gu={name:"pmrem",defines:{PANORAMA:!1,SAMPLE_NUMBER:1024},uniforms:{environmentMap:null,normalDistribution:null,roughness:.5,envMapFlip:1},vertexShader:`
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
	`};function zu(a=256,e=1024){const t=new ge,n=new Float32Array(e*a*4);t.image={width:a,height:e,data:n},t.type=F.FLOAT,t.minFilter=N.NEAREST,t.magFilter=N.NEAREST,t.generateMipmaps=!1,t.version++;const i=[];for(let s=0;s<a;s++){const r=s/a,o=r*r;for(let l=0;l<e;l++){let c=(l<<16|l>>>16)>>>0;c=((c&1431655765)<<1|(c&2863311530)>>>1)>>>0,c=((c&858993459)<<2|(c&3435973836)>>>2)>>>0,c=((c&252645135)<<4|(c&4042322160)>>>4)>>>0,c=(((c&16711935)<<8|(c&4278255360)>>>8)>>>0)/4294967296;const h=Math.sqrt((1-c)/(1+(o*o-1)*c));i[l]=h}for(let l=0;l<e;l++){const c=(l*a+s)*4,h=i[l],u=Math.sqrt(1-h*h),f=l/e,d=2*Math.PI*f;n[c]=u*Math.cos(d),n[c+1]=h,n[c+2]=u*Math.sin(d),n[c+3]=1}}return t}class Pt{constructor(){this.arcLengthDivisions=200,this.cacheArcLengths=null,this.needsUpdate=!0}getPoint(){return console.warn("t3d.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),s=0;t.push(0);for(let r=1;r<=e;r++)n=this.getPoint(r/e),s+=n.distanceTo(i),t.push(s),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let i=0;const s=n.length;let r;t?r=t:r=e*n[s-1];let o=0,l=s-1,c;for(;o<=l;)if(i=Math.floor(o+(l-o)/2),c=n[i]-r,c<0)o=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===r)return i/(s-1);const h=n[i],f=n[i+1]-h,d=(r-h)/f;return(i+d)/(s-1)}}class Hu extends Pt{constructor(e=new z,t=new z){super(),this.v1=e,this.v2=t}getPoint(e,t=new z){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}}Hu.prototype.isLineCurve2=!0;class Mi extends Pt{constructor(e=new A,t=new A){super(),this.v1=e,this.v2=t}getPoint(e,t=new A){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}}Mi.prototype.isLineCurve3=!0;class Ce{static hilbert2D(e=new A(0,0,0),t=10,n=1,i=0,s=1,r=2,o=3){const l=t/2,c=[new A(e.x-l,e.y,e.z-l),new A(e.x-l,e.y,e.z+l),new A(e.x+l,e.y,e.z+l),new A(e.x+l,e.y,e.z-l)],h=[c[i],c[s],c[r],c[o]];if(0<=--n){const u=[];return Array.prototype.push.apply(u,this.hilbert2D(h[0],l,n,i,o,r,s)),Array.prototype.push.apply(u,this.hilbert2D(h[1],l,n,i,s,r,o)),Array.prototype.push.apply(u,this.hilbert2D(h[2],l,n,i,s,r,o)),Array.prototype.push.apply(u,this.hilbert2D(h[3],l,n,r,s,i,o)),u}return h}static hilbert3D(e=new A(0,0,0),t=10,n=1,i=0,s=1,r=2,o=3,l=4,c=5,h=6,u=7){const f=t/2,d=[new A(e.x-f,e.y+f,e.z-f),new A(e.x-f,e.y+f,e.z+f),new A(e.x-f,e.y-f,e.z+f),new A(e.x-f,e.y-f,e.z-f),new A(e.x+f,e.y-f,e.z-f),new A(e.x+f,e.y-f,e.z+f),new A(e.x+f,e.y+f,e.z+f),new A(e.x+f,e.y+f,e.z-f)],_=[d[i],d[s],d[r],d[o],d[l],d[c],d[h],d[u]];if(--n>=0){const p=[];return Array.prototype.push.apply(p,this.hilbert3D(_[0],f,n,i,o,l,u,h,c,r,s)),Array.prototype.push.apply(p,this.hilbert3D(_[1],f,n,i,u,h,s,r,c,l,o)),Array.prototype.push.apply(p,this.hilbert3D(_[2],f,n,i,u,h,s,r,c,l,o)),Array.prototype.push.apply(p,this.hilbert3D(_[3],f,n,r,o,i,s,h,u,l,c)),Array.prototype.push.apply(p,this.hilbert3D(_[4],f,n,r,o,i,s,h,u,l,c)),Array.prototype.push.apply(p,this.hilbert3D(_[5],f,n,l,o,r,c,h,s,i,u)),Array.prototype.push.apply(p,this.hilbert3D(_[6],f,n,l,o,r,c,h,s,i,u)),Array.prototype.push.apply(p,this.hilbert3D(_[7],f,n,h,c,r,s,i,o,l,u)),p}return _}static quadraticBezier(e,t,n,i){return ku(e,t)+Xu(e,n)+Vu(e,i)}static cubicBezier(e,t,n,i,s){return Wu(e,t)+Qu(e,n)+Yu(e,i)+qu(e,s)}}function ku(a,e){const t=1-a;return t*t*e}function Xu(a,e){return 2*(1-a)*a*e}function Vu(a,e){return a*a*e}function Wu(a,e){const t=1-a;return t*t*t*e}function Qu(a,e){const t=1-a;return 3*t*t*a*e}function Yu(a,e){return 3*(1-a)*a*a*e}function qu(a,e){return a*a*a*e}class ju extends Pt{constructor(e=new z,t=new z,n=new z){super(),this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new z){const n=t,i=this.v0,s=this.v1,r=this.v2;return n.set(Ce.quadraticBezier(e,i.x,s.x,r.x),Ce.quadraticBezier(e,i.y,s.y,r.y)),n}}ju.prototype.isQuadraticBezierCurve2=!0;class Nr extends Pt{constructor(e=new A,t=new A,n=new A){super(),this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new A){const n=t,i=this.v0,s=this.v1,r=this.v2;return n.set(Ce.quadraticBezier(e,i.x,s.x,r.x),Ce.quadraticBezier(e,i.y,s.y,r.y),Ce.quadraticBezier(e,i.z,s.z,r.z)),n}}Nr.prototype.isQuadraticBezierCurve3=!0;class Zu extends Pt{constructor(e=new z,t=new z,n=new z,i=new z){super(),this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new z){const n=t,i=this.v0,s=this.v1,r=this.v2,o=this.v3;return n.set(Ce.cubicBezier(e,i.x,s.x,r.x,o.x),Ce.cubicBezier(e,i.y,s.y,r.y,o.y)),n}}Zu.prototype.isCubicBezierCurve2=!0;class Ku extends Pt{constructor(e=new A,t=new A,n=new A,i=new A){super(),this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new A){const n=t,i=this.v0,s=this.v1,r=this.v2,o=this.v3;return n.set(Ce.cubicBezier(e,i.x,s.x,r.x,o.x),Ce.cubicBezier(e,i.y,s.y,r.y,o.y),Ce.cubicBezier(e,i.z,s.z,r.z,o.z)),n}}Ku.prototype.isCubicBezierCurve3=!0;const $u=new A,Ju=new A,Xs=new B;class Kh{constructor(){this.curves=[]}setFromPoints(e,t={}){const n=t.bevelRadius||0,i=t.close||!1;let s=e.length;if(s<2){console.warn("CurvePath3.setFromPoints: points length less than 2.");return}i&&!e[0].equals(e[s-1])&&(e.push(new A().copy(e[0])),s++);const r=new A().copy(e[0]);for(let o=1;o<s;o++){const l=e[o],c=o===s-1,h=c&&!i;if(n>0&&!h){const u=c?e[1]:e[o+1],f=$u.subVectors(l,r),d=Ju.subVectors(u,l),_=f.getLength(),p=d.getLength(),m=Math.min((o===1?_/2:_)*.999999,n),g=Math.min(p/2*.999999,n);f.normalize(),d.normalize();const v=new Mi;v.v1.copy(r),v.v2.copy(l).sub(f.multiplyScalar(m)),this.curves.push(v);const x=new Nr;x.v0.copy(v.v2),x.v1.copy(l),x.v2.copy(l).add(d.multiplyScalar(g)),this.curves.push(x),r.copy(x.v2)}else{const u=new Mi;u.v1.copy(r),u.v2.copy(l),this.curves.push(u),r.copy(l)}}i&&this.curves[0].v1.copy(r)}getPoints(e=12){const t=[];for(let n=0,i=this.curves;n<i.length;n++){const s=i[n],r=s.isLineCurve2||s.isLineCurve3?1:e,o=s.getPoints(r),l=n===i.length-1;for(let c=0,h=l?o.length:o.length-1;c<h;c++){const u=o[c];t.push(u)}}return t}computeFrames(e={}){const t=e.up,n=e.divisions!==void 0?e.divisions:12,i=e.frenet!==void 0?e.frenet:!0,s=e.fixLine!==void 0?e.fixLine:!0,r=e.close!==void 0?e.close:!1,o=[],l=[],c=[],h=[],u=[],f=[],d=[],_=[];let p=0;for(let b=0,w=this.curves;b<w.length;b++){const U=w[b],D=U.isLineCurve2||U.isLineCurve3,L=D?1:n,R=U.getPoints(L),Q=b===w.length-1;if(s&&D&&!Q){const k=w[b+1];k.isLineCurve2||k.isLineCurve3||(p=1)}for(let k=0,j=Q?R.length:R.length-1;k<j;k++){const J=R[k];o.push(J),_.push(p),p===1?p++:p===2&&(p=0)}}if(l[0]=new A,c[0]=new A,h[0]=new A,l[0].subVectors(o[1],o[0]).normalize(),t)c[0].copy(t);else{let b=Number.MAX_VALUE;const w=Math.abs(l[0].x),U=Math.abs(l[0].y),D=Math.abs(l[0].z);w<b&&(b=w,c[0].set(1,0,0)),U<b&&(b=U,c[0].set(0,1,0)),D<b&&c[0].set(0,0,1)}h[0].crossVectors(l[0],c[0]).normalize(),c[0].crossVectors(h[0],l[0]).normalize(),u[0]=0,f[0]=1,d[0]=!1;const m=new A,g=new A;for(let b=1;b<o.length-1;b++){const w=new A,U=new A,D=new A;m.subVectors(o[b],o[b-1]),g.subVectors(o[b+1],o[b]);const L=m.getLength();m.normalize(),g.normalize();const R=_[b];if(R===1?w.copy(g):R===2?w.copy(m):w.addVectors(m,g).normalize(),i){U.copy(c[b-1]);const k=D.crossVectors(l[b-1],w);if(k.getLength()>Number.EPSILON){k.normalize();const j=Math.acos(Math.min(Math.max(l[b-1].dot(w),-1),1));U.applyMatrix4(Xs.makeRotationAxis(k,j))}D.crossVectors(w,U).normalize()}else U.copy(c[b-1]),w.dot(U)===1?D.crossVectors(g,U).normalize():D.crossVectors(w,U).normalize(),U.crossVectors(D,w).normalize();l[b]=w,c[b]=U,h[b]=D;const Q=m.dot(g);u[b]=u[b-1]+L,f[b]=Math.min(1/Math.sqrt((1+Q)/2),1.415)||1,d[b]=Math.abs(Q-1)>.05}const v=o.length-1,x=new A,T=new A,E=new A;x.subVectors(o[v],o[v-1]);const P=x.getLength();r?x.copy(l[0]):x.normalize(),T.copy(c[v-1]);const C=E.crossVectors(l[v-1],x);if(C.getLength()>Number.EPSILON){C.normalize();const b=Math.acos(Math.min(Math.max(l[v-1].dot(x),-1),1));T.applyMatrix4(Xs.makeRotationAxis(C,b))}return E.crossVectors(x,T).normalize(),l[v]=x,c[v]=T,h[v]=E,u[v]=u[v-1]+P,f[v]=1,d[v]=!1,r&&(l[0].copy(x),c[0].copy(T),h[0].copy(E)),{points:o,tangents:l,normals:c,binormals:h,lengths:u,widthScales:f,sharps:d,tangentTypes:_}}}const fi=new WeakMap,Cr="srgb",eh="srgb-linear";class _e extends Bt{constructor(e){super(e),this.decoderPath="",this.decoderConfig={},this.decoderBinary=null,this.decoderPending=null,this.workerLimit=4,this.workerPool=[],this.workerNextTaskID=1,this.workerSourceURL="",this.defaultAttributeIDs={a_Position:"POSITION",a_Normal:"NORMAL",a_Color:"COLOR",a_Uv:"TEX_COORD"},this.defaultAttributeTypes={a_Position:"Float32Array",a_Normal:"Float32Array",a_Color:"Float32Array",a_Uv:"Float32Array"}}setDecoderPath(e){return this.decoderPath=e,this}setDecoderConfig(e){return this.decoderConfig=e,this}setWorkerLimit(e){return this.workerLimit=e,this}load(e,t,n,i){const s=new ln(this.manager);s.setPath(this.path),s.setResponseType("arraybuffer"),s.setRequestHeader(this.requestHeader),s.setWithCredentials(this.withCredentials),s.load(e,r=>{this.parse(r,t,i)},n,i)}parse(e,t,n){this.decodeDracoFile(e,t,null,null,Cr).catch(n)}decodeDracoFile(e,t,n,i,s=eh){const r={attributeIDs:n||this.defaultAttributeIDs,attributeTypes:i||this.defaultAttributeTypes,useUniqueIDs:!!n,vertexColorSpace:s};return this.decodeGeometry(e,r).then(t)}decodeGeometry(e,t){const n=JSON.stringify(t);if(fi.has(e)){const l=fi.get(e);if(l.key===n)return l.promise;if(e.byteLength===0)throw new Error("DRACOLoader: Unable to re-decode a buffer with different settings. Buffer has already been transferred.")}let i;const s=this.workerNextTaskID++,r=e.byteLength,o=this._getWorker(s,r).then(l=>(i=l,new Promise((c,h)=>{i._callbacks[s]={resolve:c,reject:h},i.postMessage({type:"decode",id:s,taskConfig:t,buffer:e},[e])}))).then(l=>this._createGeometry(l.geometry));return o.catch(()=>!0).then(()=>{i&&s&&this._releaseTask(i,s)}),fi.set(e,{key:n,promise:o}),o}_createGeometry(e){const t=new Qe;e.index&&t.setIndex(new $(new ae(e.index.array,1)));for(let n=0;n<e.attributes.length;n++){const i=e.attributes[n],s=i.name,r=i.array,o=i.itemSize,l=new $(new ae(r,o));s==="a_color"&&ah(l,i.vertexColorSpace),t.addAttribute(s,l)}return t}_loadLibrary(e,t){const n=new ln(this.manager);return n.setPath(this.decoderPath||_e.decoderPath),n.setResponseType(t),n.setWithCredentials(this.withCredentials),new Promise((i,s)=>{n.load(e,i,void 0,s)})}preload(){return this._initDecoder(),this}_initDecoder(){if(this.decoderPending)return this.decoderPending;const e=this.decoderConfig||_e.decoderConfig,t=typeof WebAssembly!="object"||e.type==="js",n=[];return t?n.push(this._loadLibrary("draco_decoder.js","text")):(n.push(this._loadLibrary("draco_wasm_wrapper.js","text")),n.push(this._loadLibrary("draco_decoder.wasm","arraybuffer"))),this.decoderPending=Promise.all(n).then(i=>{const s=i[0];t||(e.wasmBinary=i[1]);const r=oh.toString(),o=["/* draco decoder */",s,"","/* worker */",r.substring(r.indexOf("{")+1,r.lastIndexOf("}"))].join(`
`);this.workerSourceURL=URL.createObjectURL(new Blob([o]))}),this.decoderPending}_getWorker(e,t){return this._initDecoder().then(()=>{if(this.workerPool.length<this.workerLimit){const i=new Worker(this.workerSourceURL);i._callbacks={},i._taskCosts={},i._taskLoad=0,i.postMessage({type:"init",decoderConfig:this.decoderConfig||_e.decoderConfig}),i.onmessage=function(s){const r=s.data;switch(r.type){case"decode":i._callbacks[r.id].resolve(r);break;case"error":i._callbacks[r.id].reject(r);break;default:console.error('DRACOLoader: Unexpected message, "'+r.type+'"')}},this.workerPool.push(i)}else this.workerPool.sort(function(i,s){return i._taskLoad>s._taskLoad?-1:1});const n=this.workerPool[this.workerPool.length-1];return n._taskCosts[e]=t,n._taskLoad+=t,n})}_releaseTask(e,t){e._taskLoad-=e._taskCosts[t],delete e._callbacks[t],delete e._taskCosts[t]}debug(){console.log("Task load: ",this.workerPool.map(e=>e._taskLoad))}dispose(){for(let e=0;e<this.workerPool.length;++e)this.workerPool[e].terminate();return this.workerPool.length=0,this.workerSourceURL!==""&&URL.revokeObjectURL(this.workerSourceURL),this}}_e.decoderPath="./";_e.decoderConfig={};_e.setDecoderPath=function(a){console.warn("DRACOLoader.setDecoderPath has been deprecated, use new DRACOLoader().setDecoderPath instead."),_e.decoderPath=a};_e.setDecoderConfig=function(a){console.warn("DRACOLoader.setDecoderConfig has been deprecated, use new DRACOLoader().setDecoderConfig instead.");const e=_e.decoderConfig.wasmBinary;_e.decoderConfig=a||{},e&&(_e.decoderConfig.wasmBinary=e)};_e.releaseDecoderModule=function(){console.warn("DRACOLoader.releaseDecoderModule has been removed.")};function Di(a,e){switch(e.constructor){case Float32Array:return a;case Uint16Array:return a/65535;case Uint8Array:return a/255;case Int16Array:return Math.max(a/32767,-1);case Int8Array:return Math.max(a/127,-1);default:throw new Error("Invalid component type.")}}function di(a,e){switch(e.constructor){case Float32Array:return a;case Uint16Array:return Math.round(a*65535);case Uint8Array:return Math.round(a*255);case Int16Array:return Math.round(a*32767);case Int8Array:return Math.round(a*127);default:throw new Error("Invalid component type.")}}function th(a,e){let t=a.buffer.array[e*a.size];return a.normalized&&(t=Di(t,a.buffer.array)),t}function nh(a,e){let t=a.buffer.array[e*a.size+1];return a.normalized&&(t=Di(t,a.buffer.array)),t}function ih(a,e){let t=a.buffer.array[e*a.size+2];return a.normalized&&(t=Di(t,a.buffer.array)),t}function sh(a,e,t,n,i){return e*=a.size,a.normalized&&(t=di(t,a.buffer.array),n=di(n,a.buffer.array),i=di(i,a.buffer.array)),a.buffer.array[e+0]=t,a.buffer.array[e+1]=n,a.buffer.array[e+2]=i,a}function rh(a,e,t){const n=th(e,t),i=nh(e,t),s=ih(e,t);return a.setRGB(n,i,s),a}function ah(a,e){if(e!==Cr)return;const t=new pe;for(let n=0,i=a.buffer.count;n<i;n++)rh(t,a,n),t.convertSRGBToLinear(),sh(a,n,t.r,t.g,t.b)}function oh(){let a,e;onmessage=function(r){const o=r.data;switch(o.type){case"init":{a=o.decoderConfig,e=new Promise(function(l){a.onModuleLoaded=function(c){l({draco:c})},DracoDecoderModule(a)});break}case"decode":{const l=o.buffer,c=o.taskConfig;e.then(h=>{const u=h.draco,f=new u.Decoder;try{const d=t(u,f,new Int8Array(l),c),_=d.attributes.map(p=>p.array.buffer);d.index&&_.push(d.index.array.buffer),self.postMessage({type:"decode",id:o.id,geometry:d},_)}catch(d){console.error(d),self.postMessage({type:"error",id:o.id,error:d.message})}finally{u.destroy(f)}});break}}};function t(r,o,l,c){const h=c.attributeIDs,u=c.attributeTypes;let f,d;const _=o.GetEncodedGeometryType(l);if(_===r.TRIANGULAR_MESH)f=new r.Mesh,d=o.DecodeArrayToMesh(l,l.byteLength,f);else if(_===r.POINT_CLOUD)f=new r.PointCloud,d=o.DecodeArrayToPointCloud(l,l.byteLength,f);else throw new Error("DRACOLoader: Unexpected geometry type.");if(!d.ok()||f.ptr===0)throw new Error("DRACOLoader: Decoding failed: "+d.error_msg());const p={index:null,attributes:[]};for(const m in h){const g=self[u[m]]||Float32Array;let v,x;if(c.useUniqueIDs)x=h[m],v=o.GetAttributeByUniqueId(f,x);else{if(x=o.GetAttributeId(f,r[h[m]]),x===-1)continue;v=o.GetAttribute(f,x)}const T=i(r,o,f,m,g,v);m==="a_color"&&(T.vertexColorSpace=c.vertexColorSpace),p.attributes.push(T)}return _===r.TRIANGULAR_MESH&&(p.index=n(r,o,f)),r.destroy(f),p}function n(r,o,l){const h=l.num_faces()*3,u=h*4,f=r._malloc(u);o.GetTrianglesUInt32Array(l,u,f);const d=new Uint32Array(r.HEAPF32.buffer,f,h).slice();return r._free(f),{array:d,itemSize:1}}function i(r,o,l,c,h,u){const f=u.num_components(),_=l.num_points()*f,p=_*h.BYTES_PER_ELEMENT,m=s(r,h),g=r._malloc(p);o.GetAttributeDataArrayForAllPoints(l,u,m,p,g);const v=new h(r.HEAPF32.buffer,g,_).slice();return r._free(g),{name:c,array:v,itemSize:f}}function s(r,o){switch(o){case Float32Array:return r.DT_FLOAT32;case Int8Array:return r.DT_INT8;case Int16Array:return r.DT_INT16;case Int32Array:return r.DT_INT32;case Uint8Array:return r.DT_UINT8;case Uint16Array:return r.DT_UINT16;case Uint32Array:return r.DT_UINT32}}}class lh extends Bt{constructor(e){super(e),typeof createImageBitmap>"u"&&console.warn("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,r={};r.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",r.headers=this.requestHeader,fetch(e,r).then(function(o){return o.blob()}).then(function(o){return createImageBitmap(o,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(o){t&&t(o),s.manager.itemEnd(e)}).catch(function(o){i&&i(o),s.manager.itemError(e),s.manager.itemEnd(e)}),s.manager.itemStart(e)}}const ch="\\[\\]\\.:\\/",uh=new RegExp("["+ch+"]","g");class ue{constructor(){}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(uh,"")}static extractUrlBase(e){const t=e.split("/");return t.pop(),(t.length<1?".":t.join("/"))+"/"}static resolveURL(e,t){return typeof e!="string"||e===""?"":/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e}static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static parseGLB(e){const s={JSON:1313821514,BIN:5130562},r=new DataView(e),o={magic:r.getUint32(0,!0),version:r.getUint32(4,!0),length:r.getUint32(2*4,!0)};if(o.magic!==1179937895)return console.error("Invalid glb magic number. Expected 0x46546C67, found 0x"+o.magic.toString(16)),null;o.version<2&&console.error("GLTFLoader: Legacy binary file detected.");let l=r.getUint32(12,!0),c=r.getUint32(16,!0);if(c!==s.JSON)return console.error("Invalid glb chunk type. Expected 0x4E4F534A, found 0x"+c.toString(16)),null;const h=new Uint8Array(e,12+2*4,l),u=JSON.parse(ue.decodeText(h)),f=[];let d=12+2*4+l;for(;d<o.length;){if(l=r.getUint32(d,!0),c=r.getUint32(d+4,!0),c!==s.BIN)return console.error("Invalid glb chunk type. Expected 0x004E4942, found 0x"+c.toString(16)),null;const _=d+2*4,p=e.slice(_,_+l);f.push(p),d+=l+2*4}return{gltf:u,buffers:f}}static getNormalizedComponentScale(e){if(e===Int8Array)return 1/127;if(e===Uint8Array)return 1/255;if(e===Int16Array)return 1/32767;if(e===Uint16Array)return 1/65535;throw new Error("Unsupported normalized accessor component type.")}}class hh{static parse(e,t){const{url:n}=e;return t.loadFile(n,"arraybuffer").then(i=>{if(ue.decodeText(new Uint8Array(i,0,4))==="glTF"){const r=ue.parseGLB(i);e.gltf=r.gltf,e.buffers=r.buffers}else{const r=ue.decodeText(new Uint8Array(i));e.gltf=JSON.parse(r)}})}}class fh{static parse(e,t){const{gltf:n,path:i}=e,{nodes:s=[],skins:r=[],meshes:o=[],buffers:l,images:c}=n;if(r.forEach(h=>{const{joints:u=[]}=h;u.forEach(f=>{s[f].isBone=!0})}),s.forEach(h=>{h.mesh!==void 0&&h.skin!==void 0&&(o[h.mesh].isSkinned=!0)}),t.detailLoadProgress){const h=new Set;l&&l.forEach(u=>{if(!u.uri)return;const f=ue.resolveURL(u.uri,i);h.add(f)}),c&&c.forEach((u,f)=>{const{uri:d,bufferView:_}=u;let p=d;_!==void 0&&(p="blob<"+f+">"),p=ue.resolveURL(p,i),h.add(p)}),h.forEach(u=>t.manager.itemStart(u)),e.loadItems=h}}}class dh{static parse(e){const{gltf:{asset:{version:t}}}=e,n=Number(t);if(!(n>=2&&n<3))throw"Only support gltf 2.x."}}class _h{static parse(e,t){const{gltf:n,loadItems:i}=e;return e.buffers!==null?null:Promise.all(n.buffers.map(s=>{const r=ue.resolveURL(s.uri,e.path);t.detailLoadProgress&&i.delete(r);const o=t.loadFile(r,"arraybuffer").then(l=>(t.detailLoadProgress&&t.manager.itemEnd(r),l));return t.detailLoadProgress&&o.catch(()=>t.manager.itemEnd(r)),o})).then(s=>{e.buffers=s})}}class ph{static loadBufferView(e,t,n){const i=t[e.buffer];if(!n||!n.supported)throw new Error("GLTFLoader: setMeshoptDecoder must be called before loading compressed files.");const s=e.byteOffset||0,r=e.byteLength||0,o=e.count,l=e.byteStride,c=new Uint8Array(i,s,r);return n.decodeGltfBufferAsync?n.decodeGltfBufferAsync(o,l,c,e.mode,e.filter).then(h=>h.buffer):n.ready.then(()=>{const h=new ArrayBuffer(o*l);return n.decodeGltfBuffer(new Uint8Array(h),o,l,c,e.mode,e.filter),h})}}class mh{static parse(e,t){const{buffers:n,gltf:i}=e;if(i.bufferViews)return Promise.all(i.bufferViews.map(s=>{const{buffer:r,byteOffset:o=0,byteLength:l=0}=s;if(s.extensions){const{EXT_meshopt_compression:h}=s.extensions;if(h)return ph.loadBufferView(h,n,t.getMeshoptDecoder())}return n[r].slice(o,o+l)})).then(s=>{e.bufferViews=s})}}class gh{static loadTextureData(e,t){return new Promise((n,i)=>{t.load(e,n,void 0,i)})}}class xh{static parse(e,t){const{gltf:n,bufferViews:i,path:s,loadItems:r}=e;if(n.images)return Promise.all(n.images.map((o,l)=>{const{uri:c,bufferView:h,mimeType:u,name:f}=o;let d=!1,_=c||"";if(h!==void 0){const g=i[h],v=new Blob([g],{type:u});_=URL.createObjectURL(v),d=!0}const p=ue.resolveURL(_,s);t.detailLoadProgress&&r.delete(p);let m;if(u&&u.includes("ktx2"))m=gh.loadTextureData(p,t.getKTX2Loader()).then(g=>(t.detailLoadProgress&&(d?t.manager.itemEnd(ue.resolveURL("blob<"+l+">",s)):t.manager.itemEnd(p)),g));else{const g={loader:t,imageUrl:p,imageName:f,isObjectURL:d,sourceUrl:_,index:l,path:s};if(u&&(u.includes("avif")||u.includes("webp")))m=Ah(u).then(v=>{if(v)return Vs(g);throw new Error("GLTFLoader: WebP or AVIF required by asset but unsupported.")});else return Vs(g)}return t.detailLoadProgress&&m.catch(()=>t.manager.itemEnd(p)),m})).then(o=>{e.images=o})}}function Ah(a){return new Promise(t=>{const n=new Image;a.includes("avif")?n.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=":n.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",n.onload=()=>{t(n.height===1)}})}function Vs(a){const{loader:e,imageUrl:t,imageName:n,isObjectURL:i,sourceUrl:s,index:r,path:o}=a;return e.loadImage(t).then(c=>(c.__name=n,i===!0&&URL.revokeObjectURL(s),e.detailLoadProgress&&(i?e.manager.itemEnd(ue.resolveURL("blob<"+r+">",o)):e.manager.itemEnd(t)),c))}const re={POSITION:"a_Position",NORMAL:"a_Normal",TANGENT:"a_Tangent",TEXCOORD_0:"a_Uv",TEXCOORD_1:"a_Uv2",TEXCOORD_2:"a_Uv3",TEXCOORD_3:"a_Uv4",TEXCOORD_4:"a_Uv5",TEXCOORD_5:"a_Uv6",TEXCOORD_6:"a_Uv7",TEXCOORD_7:"a_Uv8",COLOR_0:"a_Color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex",TEXCOORD0:"a_Uv",TEXCOORD:"a_Uv",COLOR0:"a_Color",COLOR:"a_Color",WEIGHT:"skinWeight",JOINT:"skinIndex"},Ws={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"},Xe={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Qs={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},hn={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Ys={9728:N.NEAREST,9729:N.LINEAR,9984:N.NEAREST_MIPMAP_NEAREST,9985:N.LINEAR_MIPMAP_NEAREST,9986:N.NEAREST_MIPMAP_LINEAR,9987:N.LINEAR_MIPMAP_LINEAR},qs={33071:q.CLAMP_TO_EDGE,33648:q.MIRRORED_REPEAT,10497:q.REPEAT},Ve={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6};class Th{static parse(e){const{gltf:t,images:n}=e;if(t.textures)return Promise.all(t.textures.map((i,s)=>{const{sampler:r,source:o=0,name:l}=i,c=new ge;if(i.extensions){const{KHR_texture_basisu:u}=i.extensions;if(u){const f=n[u.source],{image:d,mipmaps:_,type:p,format:m,minFilter:g,magFilter:v,generateMipmaps:x,encoding:T,premultiplyAlpha:E}=f;c.image=d,c.mipmaps=_,c.type=p,c.format=m,c.minFilter=g,c.magFilter=v,c.generateMipmaps=x,c.encoding=T,c.premultiplyAlpha=E}else if(Object.values(i.extensions).length&&Object.values(i.extensions)[0].hasOwnProperty("source"))c.image=n[Object.values(i.extensions)[0].source];else return console.error("GLTFLoader: Couldn't load texture"),null}else c.image=n[o];c.version++,c.name=l||c.image.__name||`texture_${s}`,c.flipY=!1;const h=t.samplers||{};return vh(c,h[r]),c})).then(i=>{e.textures=i})}}function vh(a,e={}){const{magFilter:t,minFilter:n,wrapS:i,wrapT:s}=e;a.magFilter=Ys[t]||N.LINEAR,a.minFilter=Ys[n]||N.LINEAR_MIPMAP_LINEAR,a.wrapS=qs[i]||q.REPEAT,a.wrapT=qs[s]||q.REPEAT}class Eh{static getMaterial(){return new ar}}class Rr{static transform(e,t){let n=0,i=0,s=1,r=1,o=0;t.offset!==void 0&&(n=t.offset[0],i=t.offset[1]),t.rotation!==void 0&&(o=t.rotation),t.scale!==void 0&&(s=t.scale[0],r=t.scale[1]),e.setUvTransform(n,i,s,r,o,0,0),t.texCoord!==void 0&&console.warn("Custom UV sets in KHR_texture_transform extension not yet supported.")}}class js{static getMaterial(){return new Ba}static parseParams(e,t,n){const{diffuseFactor:i,diffuseTexture:s,specularFactor:r,glossinessFactor:o,specularGlossinessTexture:l}=t;Array.isArray(i)&&(e.diffuse.fromArray(i),e.opacity=i[3]||1),s&&(e.diffuseMap=n[s.index],e.diffuseMapCoord=s.texCoord||0,e.diffuseMap&&(e.diffuseMap.encoding=Te.SRGB),Sh(e,"diffuseMap",s.extensions)),e.glossiness=o!==void 0?o:1,Array.isArray(r)&&e.specular.fromArray(r),l&&(e.glossinessMap=n[l.index],e.specularMap=n[l.index])}}function Sh(a,e,t={}){const n=t.KHR_texture_transform;n&&(a[e]=Rr.transform(a[e+"Transform"],n))}class Zs{static getMaterial(){return new bi}static parseParams(e,t,n){const{clearcoatFactor:i,clearcoatTexture:s,clearcoatRoughnessFactor:r,clearcoatRoughnessTexture:o,clearcoatNormalTexture:l}=t;if(i&&(e.clearcoat=i),s&&(e.clearcoatMap=n[s.index]),r&&(e.clearcoatRoughness=r),o&&(e.clearcoatRoughnessMap=n[o.index]),l&&(e.clearcoatNormalMap=n[l.index],l.scale)){const c=l.scale;e.clearcoatNormalScale=new z(c,c)}}}class Mh{static parse(e){const{gltf:t,textures:n}=e;if(!t.materials)return;const i=[];for(let s=0;s<t.materials.length;s++){const{extensions:r={},pbrMetallicRoughness:o,normalTexture:l,occlusionTexture:c,emissiveTexture:h,emissiveFactor:u,alphaMode:f,alphaCutoff:d,doubleSided:_,name:p=""}=t.materials[s],{KHR_materials_unlit:m,KHR_materials_pbrSpecularGlossiness:g,KHR_materials_clearcoat:v}=r;let x=null;if(m?x=Eh.getMaterial():g?(x=js.getMaterial(),js.parseParams(x,g,n)):v?(x=Zs.getMaterial(),Zs.parseParams(x,v,n)):x=new bi,x.name=p,o){const{baseColorFactor:T,baseColorTexture:E,metallicFactor:P,roughnessFactor:C,metallicRoughnessTexture:b}=o;Array.isArray(T)&&(x.diffuse.fromArray(T),x.opacity=T[3]!==void 0?T[3]:1),E&&(x.diffuseMap=n[E.index],x.diffuseMapCoord=E.texCoord||0,x.diffuseMap&&(x.diffuseMap.encoding=Te.SRGB,_i(x,"diffuseMap",E.extensions))),!m&&!g&&(x.metalness=P!==void 0?P:1,x.roughness=C!==void 0?C:1,b&&(x.metalnessMap=n[b.index],x.roughnessMap=n[b.index]))}u&&x.emissive.fromArray(u),h&&(x.emissiveMap=n[h.index],x.emissiveMapCoord=h.texCoord||0,x.emissiveMap&&(x.emissiveMap.encoding=Te.SRGB,_i(x,"emissiveMap",h.extensions))),c&&(x.aoMap=n[c.index],x.aoMapCoord=c.texCoord||0,c.strength!==void 0&&(x.aoMapIntensity=c.strength),x.aoMap&&_i(x,"aoMap",c.extensions)),m||l&&(x.normalMap=n[l.index],x.normalScale.set(1,-1),l.scale!==void 0&&x.normalScale.set(l.scale,-l.scale),x.normalMap),x.side=_===!0?oe.DOUBLE:oe.FRONT,f===Ws.BLEND?x.transparent=!0:(x.transparent=!1,f===Ws.MASK&&(x.alphaTest=d!==void 0?d:.5)),i[s]=x}e.materials=i}}function _i(a,e,t={}){const n=t.KHR_texture_transform;n&&Rr.transform(a[e+"Transform"],n)}class yh{static parse(e){const{bufferViews:t,gltf:n}=e;if(!n.accessors)return;const i=new Map,s=n.accessors.map(r=>{const{bufferView:o,type:l,componentType:c,count:h,byteOffset:u=0,normalized:f=!1,sparse:d}=r;if(o===void 0&&d===void 0)return null;const _=o!==void 0?t[o]:null,p=o!==void 0?n.bufferViews[o].byteStride:void 0,m=Qs[l],g=hn[c],v=g.BYTES_PER_ELEMENT,x=v*m;let T,E;if(p&&p!==x){const P="Buffer:"+o+":"+c;let C=i.get(P);C||(T=new g(_),C=new ae(T,p/v),i.set(P,C)),E=new $(C,m,u/v,f)}else _===null?T=new g(h*m):T=new g(_,u,h*m),E=new $(new ae(T,m),m,0,f);if(d){const P=Qs.SCALAR,C=hn[d.indices.componentType],b=d.indices.byteOffset||0,w=d.values.byteOffset||0,U=new C(t[d.indices.bufferView],b,d.count*P),D=new g(t[d.values.bufferView],w,d.count*m);_!==null&&(E=new $(E.buffer.clone(),E.size,E.offset,E.normalized));const L=E.buffer;for(let R=0,Q=U.length;R<Q;R++){const k=U[R];if(L.array[k*E.size]=D[R*m],m>=2&&(L.array[k*E.size+1]=D[R*m+1]),m>=3&&(L.array[k*E.size+2]=D[R*m+2]),m>=4&&(L.array[k*E.size+3]=D[R*m+3]),m>=5)throw new Error("Unsupported itemSize in sparse Attribute.")}}return E});i.clear(),e.accessors=s}}class Ph{static getGeometry(e,t,n,i,s){const{bufferView:r,attributes:o}=e;if(!s)throw new Error("GLTFLoader: No DRACOLoader instance provided.");const l={};for(const f in o){const d=re[f]===void 0?f:re[f];l[d]=o[f]}const c={},h={};for(const f in n){const d=re[f]||f.toLowerCase();if(o[f]!==void 0){const _=i[n[f]],p=hn[_.componentType];h[d]=p.name,c[d]=_.normalized===!0}}const u=t[r];return new Promise(function(f){s.decodeDracoFile(u,function(d){for(const _ in d.attributes){const p=d.attributes[_],m=c[_];m!==void 0&&(p.normalized=m)}f(d)},l,h)})}}class bh{static parse(e,t){const{gltf:n,accessors:i,materials:s,bufferViews:r}=e;if(!n.meshes)return;const o=new Map,l=new Map,c=[];for(let h=0;h<n.meshes.length;h++){const u=n.meshes[h],f=[];for(let d=0;d<u.primitives.length;d++){const _=u.primitives[d],{extensions:p={},mode:m,material:g}=_,{KHR_draco_mesh_compression:v}=p;let x;const T=Nh(_);l.has(T)?x=l.get(T):(v?x=Ph.getGeometry(v,r,_.attributes,n.accessors,t.getDRACOLoader()):x=Promise.resolve(new Qe),x=x.then(P=>(wh(P,_,n,i),P)),l.set(T,x));const E=x.then(P=>{const C={mode:m,geometry:P,material:g===void 0?new bi:s[g],weights:Object.keys(P.morphAttributes).length>0&&u.weights?u.weights.slice(0):void 0,skinned:u.isSkinned};return Lh(C,o),C});f.push(E)}c.push(Promise.all(f))}return o.clear(),l.clear(),Promise.all(c).then(h=>{e.primitives=h})}}function wh(a,e,t,n){const{attributes:i,indices:s,targets:r}=e;for(const c in i){const h=i[c],u=re[c]===void 0?c:re[c];u in a.attributes||a.addAttribute(u,n[h])}s!==void 0&&!a.index&&a.setIndex(n[s]);const{boundingBox:o,boundingSphere:l}=a;if(i.POSITION!==void 0){const c=i.POSITION,h=t.accessors[c];if(h.min&&h.max){if(o.min.fromArray(h.min),o.max.fromArray(h.max),h.normalized){const u=ue.getNormalizedComponentScale(hn[h.componentType]);o.min.multiplyScalar(u),o.max.multiplyScalar(u)}}else a.computeBoundingBox()}else a.computeBoundingBox();if(o.getCenter(l.center),l.radius=o.min.distanceTo(o.max)/2,r){let c=!1,h=!1;for(let u=0,f=r.length;u<f;u++){const d=r[u];if(d.POSITION!==void 0&&(c=!0),d.NORMAL!==void 0&&(h=!0),c&&h)break}if(c||h){const u=[],f=[];for(let d=0,_=r.length;d<_;d++){const p=r[d];c&&u.push(p.POSITION!==void 0?n[p.POSITION]:a.attributes[re.POSITION]),h&&f.push(p.NORMAL!==void 0?n[p.NORMAL]:a.attributes[re.NORMAL])}c&&(a.morphAttributes.position=u),h&&(a.morphAttributes.normal=f)}}return a}function Lh(a,e){let{geometry:t,material:n,skinned:i,mode:s}=a;const r=t.attributes[re.TANGENT]!==void 0,o=t.attributes[re.COLOR_0]!==void 0,l=t.attributes[re.NORMAL]===void 0,c=i;if(s===Ve.POINTS){const h="PointsMaterial:"+n.id;let u=e.get(h);u||(u=new Ga,Oe.prototype.copy.call(u,n),u.diffuse.copy(n.diffuse),u.diffuseMap=n.map,u.acceptLight=!1,e.set(h,u)),n=u}else if(s===Ve.LINES||s===Ve.LINE_STRIP||s===Ve.LINE_LOOP){const h="BasicMaterial:"+n.id;let u=e.get(h);u||(u=new ar,u.envMap=void 0,u.diffuse.copy(n.diffuse),u.diffuseMap=n.diffuseMap,u.drawMode=s,e.set(h,u)),n=u}else s===Ve.TRIANGLE_STRIP?(console.warn("TRIANGLE_STRIP will be removed later."),n.drawMode=Ve.TRIANGLE_STRIP):s===Ve.TRIANGLE_FAN&&(console.warn("TRIANGLE_FAN will be removed later."),n.drawMode=Ve.TRIANGLE_FAN);if(r||o||l||c){let h="ClonedMaterial:"+n.id+":";r&&(h+="vertex-tangents:"),o&&(t.attributes[re.COLOR_0].size===3?h+="vertex-colors-rgb:":t.attributes[re.COLOR_0].size===4&&(h+="vertex-colors-rgba:")),l&&(h+="flat-shading:");let u=e.get(h);u||(u=n.clone(),r&&(u.vertexTangents=!0,u.normalMap&&(u.normalScale.y*=-1)),o&&(t.attributes[re.COLOR_0].size===3?u.vertexColors=$e.RGB:t.attributes[re.COLOR_0].size===4?u.vertexColors=$e.RGBA:console.warn("Illegal vertex color size: "+t.attributes[re.COLOR_0].size)),l&&(u.shading=xt.FLAT_SHADING)),n=u}a.material=n}function Nh(a){const e=a.extensions&&a.extensions.KHR_draco_mesh_compression;let t;if(e?t="draco:"+e.bufferView+":"+e.indices+":"+pi(e.attributes):t=a.indices+":"+pi(a.attributes)+":"+a.mode,a.targets)for(let n=0,i=a.targets.length;n<i;n++)t+=":"+pi(a.targets[n]);return t}function pi(a){let e="";const t=Object.keys(a).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+a[t[n]]+";";return e}class Ch{static getLight(e){const{color:t,intensity:n=1,type:i,range:s,spot:r}=e;let o;if(i==="directional")o=new lr;else if(i==="point")o=new cr,s!==void 0&&(o.distance=s);else if(i==="spot"){if(o=new ur,s!==void 0&&(o.distance=s),r){const{innerConeAngle:l=0,outerConeAngle:c=Math.PI/4}=r;o.angle=c,o.penumbra=1-l/c}}else throw new Error("Unexpected light type: "+i);return t&&o.color.fromArray(t),o.intensity=n,o}}class Rh{static parse(e){const{gltf:{nodes:t,cameras:n,extensions:i}}=e;if(!t)return;const s=[],r=[],o=t.map(l=>{const{matrix:c,translation:h,rotation:u,scale:f,camera:d,mesh:_,extensions:p={}}=l,{KHR_lights_punctual:m}=p;let g=null;if(l.isBone)g=new hr;else if(_!==void 0)g=Dh(e,l);else if(d!==void 0)g=Fh(n[d]),s.push(g);else if(m){const v=m.light,x=i.KHR_lights_punctual.lights;g=Ch.getLight(x[v]),r.push(g)}else g=new ve;if(g.name=l.name||"",g.name&&g.children.length>0)for(let v=0;v<g.children.length;v++)g.children[v].name=g.name+"_"+v;return c!==void 0?(g.matrix.fromArray(c),g.matrix.decompose(g.position,g.quaternion,g.scale)):(h!==void 0&&g.position.fromArray(h),u!==void 0&&g.quaternion.fromArray(u),f!==void 0&&g.scale.fromArray(f)),g});e.nodes=o,e.cameras=s,e.lights=r}}function Fh(a){const{orthographic:e,perspective:t,type:n}=a,i=new zt;if(n=="perspective"){const{aspectRatio:s,yfov:r,zfar:o,znear:l}=t;i.setPerspective(r,s||1,l||1,o||2e6)}else if(n=="orthographic"){const{xmag:s,ymag:r,zfar:o,znear:l}=e;i.setOrtho(-s,s,-r,r,l||1,o||2e6)}return i}function Dh(a,e){const{primitives:t}=a,{mesh:n,skin:i}=e,s=t[n].map(r=>{const{geometry:o,material:l,weights:c}=r;let h;return i!==void 0?(h=new fr(o,l),o.attributes.skinWeight&&!o.attributes.skinWeight.normalized&&Ih(o.attributes.skinWeight)):(h=new tt(o,l),c&&(h.morphTargetInfluences=c.slice())),h});if(s.length>1){const r=new ve;return s.forEach(o=>r.add(o)),r}else return s[0]}const It=new me;function Ih(a){const e=a.offset,t=a.buffer,n=t.stride;for(let i=0,s=t.count;i<s;i++){It.fromArray(t.array,i*n+e);const r=1/It.getManhattanLength();r!==1/0?It.multiplyScalar(r):It.set(1,0,0,0),It.toArray(t.array,i*n+e)}}class Uh{static parse(e){const{gltf:t,accessors:n,nodes:i}=e,s=t.skins;if(!s)return;const r=s.map(o=>{const{inverseBindMatrices:l,joints:c}=o,h=n[l],u=[],f=[];return c.forEach((d,_)=>{const p=i[d];if(p){u.push(p);const m=new B;h&&m.fromArray(h.buffer.array,_*16),f.push(m)}else console.warn("Joint "+d+" could not be found.")}),new wi(u,f)});e.skins=r,i.forEach((o,l)=>{const{skin:c}=t.nodes[l];c!==void 0&&o.traverse(function(h){h.isSkinnedMesh&&h.bind(r[c],h.worldMatrix)})})}}class Oh{static parse(e){const{gltf:t,nodes:n}=e,i=t.scenes.map(s=>{const{name:r="",nodes:o=[]}=s,l=new ve;l.name=r;for(let c=0;c<o.length;c++)Fr(o[c],l,t.nodes,n);return l});e.roots=i,e.root=i[t.scene||0]}}function Fr(a,e,t,n){const i=n[a],s=t[a];if(e.add(i),s.children){const r=s.children;for(let o=0,l=r.length;o<l;o++){const c=r[o];Fr(c,i,t,n)}}}class Bh{static parse(e){const{gltf:t,nodes:n,accessors:i}=e,{animations:s}=t;if(!s)return;const r=s.map((o,l)=>{const{channels:c,samplers:h,name:u=`animation_${l}`}=o,f=[];let d=0;for(let _=0;_<c.length;_++){const p=c[_],m=h[p.sampler];if(m){const g=p.target,v=g.node!==void 0?g.node:g.id,x=i[m.input],T=i[m.output],E=n[v];if(!E)continue;E.updateMatrix(),E.matrixAutoUpdate=!0;let P;switch(Xe[g.path]){case Xe.rotation:P=xi;break;case Xe.weights:P=$s;break;case Xe.position:case Xe.scale:default:P=Js;break}if(!P)continue;const C=new x.buffer.array.constructor(x.buffer.array),b=new Float32Array(T.buffer.array);if(T.normalized){const D=ue.getNormalizedComponentScale(T.buffer.array.constructor);for(let L=0,R=b.length;L<R;L++)b[L]*=D}const w=[];Xe[g.path]===Xe.weights?E.traverse(function(D){D.isMesh&&D.morphTargetInfluences&&w.push(D)}):w.push(E);for(let D=0,L=w.length;D<L;D++){const R=Gh(m.interpolation,P===xi),Q=new P(w[D],Xe[g.path],C,b,R);f.push(Q)}const U=C[C.length-1];d<U&&(d=U)}}return new Kr(u,f,d)});e.animations=r}}function Gh(a,e){switch(a){case"STEP":return At;case"CUBICSPLINE":return e?Vr:Ks;case"LINEAR":default:return e?gi:mi}}let zh=0;class Hh{constructor(){this.id=++zh,this.url="",this.path="",this.options=null,this.gltf=null,this.loadItems=null,this.buffers=null,this.bufferViews=null,this.images=null,this.textures=null,this.materials=null,this.accessors=null,this.primitives=null,this.nodes=null,this.cameras=null,this.lights=null,this.skins=null,this.root=null,this.roots=null,this.animations=null}}const kh=[hh,fh,dh,_h,mh,xh,Th,Mh,yh,bh,Rh,Uh,Oh,Bh];class $h{constructor(e=er,t=kh){this.manager=e,this.detailLoadProgress=!0,this.autoLogError=!0,this._parsers=t.slice(0),this._dracoLoader=null,this._meshoptDecoder=null,this._ktx2Loader=null,this._fileLoader=new ln;const n=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,i=navigator.userAgent.indexOf("Firefox")>-1,s=i?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1;typeof createImageBitmap>"u"||n||i&&s<98?this._imageLoader=new ea:this._imageLoader=new lh}load(e,t={}){return this.manager.itemStart(e),new Promise((n,i)=>{const s=new Hh;s.url=e,s.path=ue.extractUrlBase(e),s.options=t,this._parse(s).then(n).then(()=>this.manager.itemEnd(e)).catch(r=>{this.autoLogError&&console.error(r),this.detailLoadProgress&&s.loadItems&&s.loadItems.forEach(o=>{this.manager.itemEnd(o)}),this.manager.itemError(e),this.manager.itemEnd(e),i(`Error loading glTF model from ${e} .`)})})}_parse(e){let t;return new Promise((n,i)=>{this._parsers.forEach(s=>{t?t=t.then(()=>s.parse(e,this)):t=s.parse(e,this)}),t?t.then(()=>n(e)).catch(i):n(e)})}setDRACOLoader(e){return this._dracoLoader=e,this}getDRACOLoader(){return this._dracoLoader}setMeshoptDecoder(e){return this._meshoptDecoder=e,this}getMeshoptDecoder(){return this._meshoptDecoder}setKTX2Loader(e){return this._ktx2Loader=e,this}getKTX2Loader(){return this._ktx2Loader}loadFile(e,t="json"){return this._fileLoader.setResponseType(t),new Promise((n,i)=>{e=this.manager.resolveURL(e),this._fileLoader.load(e,n,void 0,i)})}loadImage(e){return new Promise((t,n)=>{e=this.manager.resolveURL(e),this._imageLoader.load(e,t,void 0,n)})}insertParser(e,t){this._parsers.splice(t,0,e)}replaceParser(e,t){this._parsers.splice(t,1,e)}}class Jh{constructor(e){this.autoStart=e!==void 0?e:!0,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=(typeof performance>"u"?Date:performance).now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=(typeof performance>"u"?Date:performance).now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}class ef{constructor(){this._colorStops=[],this._sortDirty=!1}addColorStop(e,t){return this._colorStops.push({position:e,color:t}),this._sortDirty=!0,this}removeColorStop(e){for(let t=0;t<this._colorStops.length;t++)if(this._colorStops[t].position===e){this._colorStops.splice(t,1),this._sortDirty=!0;break}return this}clear(){return this._colorStops=[],this}getColor(e,t=new pe){this._sort();const n=this._colorStops;if(t.copy(n[0].color),e>0){let i=0;for(let s=0;s<n.length;s++){const r=n[s];if(r.position<e)t.copy(r.color),i=r.position;else{const o=(e-i)/(r.position-i);t.lerp(r.color,o);break}}}return t}getUint8Array(e,t=new Uint8Array(e*4)){this._sort();const n=this._colorStops,i=Xh,s=Vh;i.copy(n[0].color);let r=0,o=0;for(let l=0;l<e;l++){const c=l/(e-1);if(c>0)for(;o<n.length;){const u=n[o];if(u.position<c)i.copy(u.color),s.copy(i),r=u.position;else{const f=(c-r)/(u.position-r);s.lerpColors(i,u.color,f);break}o++}else s.copy(i);const h=l*4;t[h]=s.r*255,t[h+1]=s.g*255,t[h+2]=s.b*255,t[h+3]=255}return t}_sort(){this._sortDirty&&(this._colorStops.sort((e,t)=>e.position-t.position),this._sortDirty=!1)}}const Xh=new pe,Vh=new pe;class tf{constructor(e=256){const t=new ge;t.image={data:null,width:e,height:1},t.magFilter=t.minFilter=N.LINEAR,t.generateMipmaps=!1,this._texture=t}gradient(e){const t=this._texture;return t.image.data=e.getUint8Array(t.image.width),t.version++,this}getTexture(){return this._texture}}class nf extends ve{constructor(e,t=1,n){super(),this.light=e,this.color=n;const i=new Qe;i.addAttribute("a_Position",new $(new ae(new Float32Array([-t,t,0,t,t,0,t,-t,0,-t,-t,0,-t,t,0]),3))),i.computeBoundingBox(),i.computeBoundingSphere();const s=new ds;s.drawMode=Ut.LINE_LOOP,this.lightPlane=new tt(i,s),this.add(this.lightPlane);const r=new Qe;r.addAttribute("a_Position",new $(new ae(new Float32Array([0,0,0,0,0,-1]),3))),r.computeBoundingBox(),r.computeBoundingSphere();const o=new ds;o.drawMode=Ut.LINE_LOOP,this.targetLine=new tt(r,o),this.targetLine.scale.z=t*5,this.add(this.targetLine),this.update()}update(){this.color!==void 0?(this.lightPlane.material.diffuse.setHex(this.color),this.targetLine.material.diffuse.setHex(this.color)):(this.lightPlane.material.diffuse.copy(this.light.color),this.targetLine.material.diffuse.copy(this.light.color))}}class sf{constructor(e,t,n={}){n.postEffect=n.postEffect!==void 0?n.postEffect:!0;const i=new t({title:"Effect Composer Inspector"});if(n.postEffect){const x=i.addFolder("Post Effects");x.add(e,"sceneMSAA");const T=e.getEffect("SSAO"),E=x.addFolder("SSAO");E.close(),E.add(T,"active"),E.add(T,"radius").min(0).max(5).step(.01),E.add(T,"power").min(0).max(5).step(1),E.add(T,"bias").min(0).max(1).step(1e-4),E.add(T,"intensity").min(0).max(2).step(.1),E.add(T,"quality",["Low","Medium","High","Ultra"]),E.add(T,"blurSize").min(0).max(3).step(.01),E.add(T,"depthRange").min(0).max(3).step(.01),E.add(T,"autoSampleWeight");const P=e.getEffect("SSR"),C=x.addFolder("SSR");C.close(),C.add(P,"active"),C.add(P,"pixelStride",1,100,1),C.add(P,"maxIteration",1,10,1),C.add(P,"maxSteps",20,200,1),C.add(P,"maxRayDistance",1,1e3,.01),C.add(P,"enablePixelStrideZCutoff"),C.add(P,"pixelStrideZCutoff",1,300,1),C.add(P,"screenEdgeFadeStart",0,1,.01),C.add(P,"eyeFadeStart",0,1,.01),C.add(P,"eyeFadeEnd",0,1,.01),C.add(P,"minGlossiness",0,1,.01),C.add(P,"strength",0,1,.01),C.add(P,"mixType",[0,1]);const b=e.getEffect("ColorCorrection"),w=x.addFolder("ColorCorrection");w.close(),w.add(b,"active"),w.add(b,"brightness").min(0).max(.5).step(.01),w.add(b,"contrast").min(1).max(1.5).step(.01),w.add(b,"exposure").min(0).max(1).step(.1),w.add(b,"gamma").min(0).max(1).step(.1),w.add(b,"saturation").min(-1).max(5);const U=e.getEffect("DOF"),D=x.addFolder("DOF");D.close(),D.add(U,"active"),D.add(U,"focalDepth",0,100),D.add(U,"focalLength",0,100),D.add(U,"fstop",0,1,.1),D.add(U,"maxblur",0,1,.1),D.add(U,"threshold",0,1,.1),D.add(U,"gain",0,2,.1),D.add(U,"bias",0,1,.001),D.add(U,"dithering",0,.001,1e-5);const L=e.getEffect("Bloom"),R=x.addFolder("Bloom");R.close(),R.add(L,"active"),R.add(L,"threshold").min(0).max(1).step(.01),R.add(L,"smoothWidth").min(0).max(1).step(.01),R.add(L,"blurSize").min(0).max(5).step(.01),R.add(L,"strength").min(0).max(2).step(.01);const Q=e.getEffect("FXAA"),k=x.addFolder("FXAA");k.close(),k.add(Q,"active");const j=e.getEffect("ChromaticAberration"),J=x.addFolder("chromatic aberration");J.close(),J.add(j,"active"),J.add(j,"chromaFactor").min(0).max(1).step(1e-4);const Z=e.getEffect("Vignetting"),W=x.addFolder("Vignetting");W.close(),W.add(Z,"active"),W.addColor({color:[0,0,0]},"color").onChange(be=>{Z.color.fromArray(be)}),W.add(Z,"offset").min(0).max(5).step(.1);const G=e.getEffect("BlurEdge"),X=x.addFolder("BlurEdge");X.close(),X.add(G,"active"),X.add(G,"offset").min(0).max(5).step(.1);const ie=e.getEffect("Film"),Y=x.addFolder("Film");Y.close(),Y.add(ie,"active"),Y.add(ie,"noiseIntensity").min(0).max(1).step(.01),Y.add(ie,"scanlinesIntensity").min(0).max(1).step(.01),Y.add(ie,"scanlinesCount").min(0).max(3e3).step(100),Y.add(ie,"grayscale")}const s=new Ei,r=new wu,o=new Lu,l=i.addFolder("Debugger");l.close();let c=null,h=["Normal","Depth","Position","Glossiness"],u=["Null","GBuffer","SSAO","SSR"],f=null,d=null,_=null,p=null;n.nonDepthMarkChannels&&(u.push("NonDepthMarkBuffer"),d=new bu,d.channel=n.nonDepthMarkChannels[0]),n.markChannels&&(u.push("MarkBuffer"),_=new Pu,_.channel=n.markChannels[0]),n.colorMarkChannels&&(u.push("ColorMarkBuffer"),p=new Mu,p.channel=n.colorMarkChannels[0]),l.add({type:"Null"},"type",u).onChange(x=>{c&&(c.destroy(),c=null),f&&(f.destroy(),f=null),x==="GBuffer"?(e.debugger=s,c=l.add({bufferInfo:h[s.debugType]},"bufferInfo",h).onChange(T=>{s.debugType=Ei.DebugTypes[T]})):x==="NonDepthMarkBuffer"?(e.debugger=d,c=l.add(d,"channel",n.nonDepthMarkChannels),f=l.add(d,"mask",H)):x==="MarkBuffer"?(e.debugger=_,c=l.add(_,"channel",n.markChannels),f=l.add(_,"mask",H)):x==="ColorMarkBuffer"?(e.debugger=p,c=l.add(p,"channel",n.colorMarkChannels),f=l.add(p,"mask",H)):x==="SSAO"?e.debugger=r:x==="SSR"?e.debugger=o:e.debugger=null});const m=i.addFolder("Stats");m.close();let g=e.getStats();m.add(g,"fboCache").disable().listen(),m.add(g,"markBuffers").disable().listen(),m.add(g,"colorMarkBuffers").disable().listen();const v=g.currentBufferUsage;for(let x in v)m.add(v,x).disable().listen();m.add({dispose:()=>{e.dispose()}},"dispose"),this.statsTimer=setInterval(()=>{e.getStats()},300),this.gui=i}destroy(){clearInterval(this.statsTimer),this.gui.destroy()}}export{M as A,pe as C,_e as D,ne as E,$h as G,Va as H,sf as I,B as M,Qh as O,Zh as P,We as Q,Ee as R,I as S,N as T,A as V,gr as W,vt as a,Kh as b,xr as c,V as d,jh as e,qh as f,Yh as g,Dt as h,Te as i,Ha as j,Pi as k,zt as l,Sc as m,lr as n,ge as o,Wh as p,Jh as q,nn as r,bi as s,Pe as t,z as u,ef as v,tf as w,cn as x,nf as y};
