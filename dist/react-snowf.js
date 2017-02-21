/*!
 * react-snowf v0.0.2
 * 2017 (c) - Fuxy526
 * Released under the MIT License.
 */
module.exports=function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};return t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=1)}([function(e,t){e.exports=require("react")},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function s(e,t){var n=t-e;return t===e?e:Math.random()*n+e}function u(e){var t="";return t=0===e.indexOf("#")?4===e.length?e.substr(1).split("").map(function(e){return parseInt(e.concat(e),16)}).join(","):7===e.length?[e.substr(1,2),e.substr(3,2),e.substr(5,2)].map(function(e){return parseInt(e,16)}).join(","):"255,255,255":0===e.indexOf("rgb(")?e.substring(4,e.length-1):"255,255,255"}Object.defineProperty(t,"__esModule",{value:!0});var c=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),f=n(0),l=r(f),p=l.default.PropTypes,d=p.string,y=p.number,h=p.bool,v=function(e){function t(){return o(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),c(t,[{key:"componentDidMount",value:function(){function e(){for(var e=0;e<r.amount;e++)f.push({x:s(0,c),y:s(0,a),r:s(r.size,2*r.size)/2,velX:0,velY:s(r.speed,2*r.speed),swing:s(0,2*Math.PI),opacity:s(0,r.opacity)});t()}function t(){var e;i.clearRect(0,0,c,a);for(var o=0;o<r.amount;o++){var s=f[o];r.image?(e||(e=new Image,e.src=r.image),i.drawImage(e,s.x-s.r,s.y-s.r,2*s.r,2*s.r)):(i.beginPath(),i.fillStyle="rgba("+u(r.color)+","+s.opacity+")",i.arc(s.x,s.y,s.r,2*Math.PI,!1),i.fill(),i.closePath()),s.velX=Math.abs(s.velX)<Math.abs(r.wind)?s.velX+r.wind/20:r.wind,s.y=s.y+.5*s.velY,s.x=s.x+(r.swing?.4*Math.cos(s.swing+=.03)*s.opacity*r.swing:0)+.5*s.velX,(s.x>c+s.r||s.x<-s.r||s.y>a+s.r||s.y<-s.r)&&n(s)}requestAnimationFrame(t)}function n(e){var t=e.r;e.r=s(r.size,2*r.size)/2,e.x>c+t?(e.x=-e.r,e.y=s(0,a)):e.x<-t?(e.x=c+e.r,e.y=s(0,a)):(e.x=s(0,c),e.y=-e.r),e.velX=0,e.velY=s(r.speed,2*r.speed),e.swing=s(0,2*Math.PI),e.opacity=s(0,r.opacity)}var r=this.props,o=this.refs.canvas,i=o.getContext("2d"),a=o.offsetHeight,c=o.offsetWidth,f=[];o.height=a,o.width=c,e(),r.resize&&window.addEventListener("resize",function(){var e=o.height,t=o.width,n=o.offsetHeight,i=o.offsetWidth;o.height=a=n,o.width=c=i;for(var s=0;s<r.amount;s++){var u=f[s];u.x=u.x/t*i,u.y=u.y/e*n}})}},{key:"render",value:function(){var e={position:"absolute",top:0,left:0,width:"100%",height:"100%",pointerEvents:"none",zIndex:this.props.zIndex||"auto"};return l.default.createElement("canvas",{className:"snowf-canvas",ref:"canvas",style:e})}}]),t}(l.default.Component);v.propTypes={amount:y,size:y,speed:y,wind:y,color:d,opacity:y,swing:y,image:d,zIndex:y,resize:h},v.defaultProps={amount:50,size:5,speed:1.5,wind:0,color:"#fff",opacity:.8,swing:1,image:null,zIndex:null,resize:!0},t.default=v}]);