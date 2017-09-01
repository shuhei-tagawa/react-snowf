/*!
 * react-snowf v0.0.2
 * 2017 (c) - Fuxy526
 * Released under the MIT License.
 */
module.exports=function(e){function t(i){if(n[i])return n[i].exports;var r=n[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};return t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,i){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:i})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=1)}([function(e,t){e.exports=require("react")},function(e,t,n){"use strict";function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function o(e,t){var n=t-e;return t===e?e:Math.random()*n+e}function a(e){return 0===e.indexOf("#")?4===e.length?e.substr(1).split("").map(function(e){return parseInt(e.concat(e),16)}).join(","):7===e.length?[e.substr(1,2),e.substr(3,2),e.substr(5,2)].map(function(e){return parseInt(e,16)}).join(","):"255,255,255":0===e.indexOf("rgb(")?e.substring(4,e.length-1):"255,255,255"}Object.defineProperty(t,"__esModule",{value:!0});var c=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),u=n(0),f=function(e){return e&&e.__esModule?e:{default:e}}(u),p=f.default.PropTypes,l=p.string,h=p.number,d=p.bool,v=function(e){function t(){var e,n,s,c;i(this,t);for(var u=arguments.length,f=Array(u),p=0;p<u;p++)f[p]=arguments[p];return n=s=r(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(f))),s.mounted=!1,s.inited=!1,s.context=null,s.flakes=[],s.canvasWidth=0,s.canvasHeight=0,s.img=null,s.init=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s.props;s.flakes=[];for(var t=0;t<e.amount;t++)s.flakes.push({x:o(0,s.canvasWidth),y:o(0,s.canvasHeight),r:o(e.size,2*e.size)/2,velX:0,velY:o(e.speed,2*e.speed),swing:o(0,2*Math.PI),opacity:o(0,e.opacity)});s.inited||(s.inited=!0,s.snow())},s.snow=function(){if(s.mounted){s.context&&s.context.clearRect||(s.context=s.refs.canvas.getContext("2d")),s.context.clearRect(0,0,s.canvasWidth,s.canvasHeight);for(var e=0;e<s.flakes.length;e++){var t=s.flakes[e];s.props.image?s.context.drawImage(s.img,t.x-t.r,t.y-t.r,2*t.r,2*t.r):(s.context.beginPath(),s.context.fillStyle="rgba("+a(s.props.color)+","+t.opacity+")",s.context.arc(t.x,t.y,t.r,2*Math.PI,!1),s.context.fill(),s.context.closePath()),t.velX=Math.abs(t.velX)<Math.abs(s.props.wind)?t.velX+s.props.wind/20:s.props.wind,t.y=t.y+.5*t.velY,t.x=t.x+(s.props.swing?.4*Math.cos(t.swing+=.03)*t.opacity*s.props.swing:0)+.5*t.velX,(t.x>s.canvasWidth+t.r||t.x<-t.r||t.y>s.canvasHeight+t.r||t.y<-t.r)&&s.reset(t)}s.mounted&&requestAnimationFrame(s.snow)}},s.reset=function(e){var t=e.r;e.r=o(s.props.size,2*s.props.size)/2,e.x>s.canvasWidth+t?(e.x=-e.r,e.y=o(0,s.canvasHeight)):e.x<-t?(e.x=s.canvasWidth+e.r,e.y=o(0,s.canvasHeight)):(e.x=o(0,s.canvasWidth),e.y=-e.r),e.velX=0,e.velY=o(s.props.speed,2*s.props.speed),e.swing=o(0,2*Math.PI),e.opacity=o(0,s.props.opacity)},s.handleResize=function(){if(s.inited){var e=s.refs.canvas.height,t=s.refs.canvas.width,n=s.refs.canvas.offsetHeight,i=s.refs.canvas.offsetWidth;s.refs.canvas.height=s.canvasHeight=n,s.refs.canvas.width=s.canvasWidth=i;for(var r=0;r<s.flakes.length;r++){var o=s.flakes[r];o.x=o.x/t*i,o.y=o.y/e*n}}},c=n,r(s,c)}return s(t,e),c(t,[{key:"componentDidMount",value:function(){this.mounted=!0,this.context=this.refs.canvas.getContext("2d"),this.canvasHeight=this.refs.canvas.offsetHeight,this.canvasWidth=this.refs.canvas.offsetWidth,this.refs.canvas.height=this.canvasHeight,this.refs.canvas.width=this.canvasWidth,this.update()}},{key:"componentWillReceiveProps",value:function(e){JSON.stringify(this.props)!==JSON.stringify(e)&&this.update(e)}},{key:"update",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.props;t.image?(this.img=new Image,this.img.onload=function(){return e.init(t)},this.img.src=t.image):this.init(t),window.removeEventListener("resize",this.handleResize),this.props.resize&&(window.addEventListener("resize",this.handleResize),window.setTimeout(this.handleResize,250))}},{key:"componentWillUnmount",value:function(){this.mounted=!1,this.props.resize&&window.removeEventListener("resize",this.handleResize)}},{key:"render",value:function(){var e={position:"absolute",top:0,left:0,width:"100%",height:"100%",pointerEvents:"none",zIndex:this.props.zIndex||"auto"};return f.default.createElement("canvas",{className:"snowf-canvas",ref:"canvas",style:e})}}]),t}(f.default.Component);v.propTypes={amount:h,size:h,speed:h,wind:h,color:l,opacity:h,swing:h,image:l,zIndex:h,resize:d},v.defaultProps={amount:50,size:5,speed:1.5,wind:0,color:"#fff",opacity:.8,swing:1,image:null,zIndex:null,resize:!0},t.default=v}]);