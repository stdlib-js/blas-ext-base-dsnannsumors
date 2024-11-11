"use strict";var o=function(a,e){return function(){return e||a((e={exports:{}}).exports,e),e.exports}};var p=o(function(G,d){
var l=require('@stdlib/math-base-assert-is-nan/dist');function b(a,e,v,u,r,i,f){var q,s,n,m,c;if(q=0,n=f,a<=0)return r[n]=q,r[n+i]=0,r;if(s=u,v===0)return l(e[s])?(r[n]=q,r[n+i]=0,r):(r[n]=e[s]*a,r[n+i]=a,r);for(m=0,c=0;c<a;c++)l(e[s])===!1&&(q+=e[s],m+=1),s+=v;return r[n]=q,r[n+i]=m,r}d.exports=b
});var x=o(function(H,j){
var g=require('@stdlib/strided-base-stride2offset/dist'),h=p();function k(a,e,v,u,r){var i,f;return i=g(a,v),r<0?f=-r:f=0,h(a,e,v,i,u,r,f)}j.exports=k
});var _=o(function(I,R){
var w=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),t=x(),z=p();w(t,"ndarray",z);R.exports=t
});var A=require("path").join,B=require('@stdlib/utils-try-require/dist'),C=require('@stdlib/assert-is-error/dist'),D=_(),y,E=B(A(__dirname,"./native.js"));C(E)?y=D:y=E;module.exports=y;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
