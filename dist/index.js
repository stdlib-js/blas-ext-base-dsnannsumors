"use strict";var p=function(s,a){return function(){return a||s((a={exports:{}}).exports,a),a.exports}};var _=p(function(I,R){
var j=require('@stdlib/math-base-assert-is-nan/dist');function x(s,a,m,e,r){var v,q,n,f,i;if(m<0?q=(1-s)*m:q=0,r<0?n=-r:n=0,v=0,s<=0)return e[n]=v,e[n+r]=0,e;if(s===1||m===0)return j(a[q])?(e[n]=v,e[n+r]=0,e):(e[n]=a[q],e[n+r]=1,e);for(f=0,i=0;i<s;i++)j(a[q])===!1&&(v+=a[q],f+=1),q+=m;return e[n]=v,e[n+r]=f,e}R.exports=x
});var g=p(function(J,b){
var E=require('@stdlib/math-base-assert-is-nan/dist');function z(s,a,m,e,r,v,q){var n,f,i,c,l;if(f=e,i=q,n=0,s<=0)return r[i]=n,r[i+v]=0,r;if(s===1||m===0)return E(a[f])?(r[i]=n,r[i+v]=0,r):(r[i]=a[f],r[i+v]=1,r);for(c=0,l=0;l<s;l++)E(a[f])===!1&&(n+=a[f],c+=1),f+=m;return r[i]=n,r[i+v]=c,r}b.exports=z
});var u=p(function(K,k){
var A=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),h=_(),B=g();A(h,"ndarray",B);k.exports=h
});var C=require("path").join,D=require('@stdlib/utils-try-require/dist'),F=require('@stdlib/assert-is-error/dist'),G=u(),y,w=D(C(__dirname,"./native.js"));F(w)?y=G:y=w;module.exports=y;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
