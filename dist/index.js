"use strict";var u=function(e,a){return function(){return a||e((a={exports:{}}).exports,a),a.exports}};var y=u(function(I,l){
var j=require('@stdlib/math-base-assert-is-nan/dist');function k(e,a,v,m,r,i,n){var q,s,c,p;if(q=0,e<=0)return r[n]=q,r[n+i]=0,r;if(s=m,v===0)return j(a[s])?(r[n]=q,r[n+i]=0,r):(r[n]=a[s]*e,r[n+i]=e,r);for(c=0,p=0;p<e;p++)j(a[s])===!1&&(q+=a[s],c+=1),s+=v;return r[n]=q,r[n+i]=c,r}l.exports=k
});var _=u(function(J,R){
var x=require('@stdlib/strided-base-stride2offset/dist'),w=y();function z(e,a,v,m,r){var i,n;return i=x(e,v),n=x(2,r),w(e,a,v,i,m,r,n)}R.exports=z
});var g=u(function(K,b){
var A=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),E=_(),B=y();A(E,"ndarray",B);b.exports=E
});var C=require("path").join,D=require('@stdlib/utils-try-require/dist'),F=require('@stdlib/assert-is-error/dist'),G=g(),d,h=D(C(__dirname,"./native.js"));F(h)?d=G:d=h;module.exports=d;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
