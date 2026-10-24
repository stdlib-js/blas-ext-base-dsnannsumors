"use strict";var u=function(e,a){return function(){try{return a||e((a={exports:{}}).exports,a),a.exports}catch(i){throw (a=0, i)}};};var y=u(function(I,l){
var j=require('@stdlib/math-base-assert-is-nan/dist');function k(e,a,i,m,r,s,n){var q,v,c,p;if(q=0,e<=0)return r[n]=q,r[n+s]=0,r;if(v=m,i===0)return j(a[v])?(r[n]=q,r[n+s]=0,r):(r[n]=a[v]*e,r[n+s]=e,r);for(c=0,p=0;p<e;p++)j(a[v])===!1&&(q+=a[v],c+=1),v+=i;return r[n]=q,r[n+s]=c,r}l.exports=k
});var _=u(function(J,R){
var x=require('@stdlib/strided-base-stride2offset/dist'),w=y();function z(e,a,i,m,r){var s,n;return s=x(e,i),n=x(2,r),w(e,a,i,s,m,r,n)}R.exports=z
});var g=u(function(K,b){
var A=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),E=_(),B=y();A(E,"ndarray",B);b.exports=E
});var C=require("path").join,D=require('@stdlib/utils-try-require/dist'),F=require('@stdlib/assert-is-error/dist'),G=g(),d,h=D(C(__dirname,"./native.js"));F(h)?d=G:d=h;module.exports=d;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
