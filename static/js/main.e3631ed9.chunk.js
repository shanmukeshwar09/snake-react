(this["webpackJsonpsnake-react"]=this["webpackJsonpsnake-react"]||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(6),u=n.n(r),i=n(7),o=n(1),s=[[0,0],[0,1]],f=[10,10],l={38:[0,-1],40:[0,1],37:[-1,0],39:[1,0]},b=n(4),m=n.n(b),O=function(){var e=Object(a.useRef)(),t=Object(a.useState)(s),n=Object(o.a)(t,2),r=n[0],u=n[1],b=Object(a.useState)(f),O=Object(o.a)(b,2),j=O[0],d=O[1],h=Object(a.useState)([0,1]),p=Object(o.a)(h,2),v=p[0],E=p[1],k=Object(a.useState)(0),w=Object(o.a)(k,2),S=w[0],g=w[1],y=Object(a.useState)(!0),G=Object(o.a)(y,2),R=G[0],x=G[1],I=Object(a.useState)("Play Game"),M=Object(o.a)(I,2),P=M[0],C=M[1];Object(a.useEffect)((function(){var t=e.current.getContext("2d");t.setTransform(40,0,0,40,0,0),t.clearRect(0,0,window.innerHeight,window.innerWidth),t.fillStyle="lightblue",r.forEach((function(e){return t.fillRect(e[0],e[1],1,1)})),t.fillStyle="red",t.fillRect(j[0],j[1],1,1)}),[r]);!function(e,t){var n=Object(a.useRef)();Object(a.useEffect)((function(){n.current=e}),[e]),Object(a.useEffect)((function(){if(t){var e=setInterval((function(){return n.current()}),t);return function(){return clearInterval(e)}}}),[t])}((function(){var e,t=Object(i.a)(r),n=[t[0][0]+v[0],t[0][1]+v[1]];t.unshift(n),(e=t[0])[0]<0||e[1]<0||e[0]>19||e[1]>19?(g(0),x(!1)):(function(e){return e[0]===j[0]&&e[1]===j[1]&&(d(j.map((function(e){return Math.floor(800*Math.random()/40)}))),!0)}(t[0])||t.pop(),u(t))}),S);return c.a.createElement(c.a.Fragment,null,R?c.a.createElement("div",{className:m.a.container},c.a.createElement("canvas",{tabIndex:0,onKeyDown:function(e){var t=e.keyCode;switch(t){case 37:1!==v[0]&&E(l[t]);break;case 38:1!==v[1]&&E(l[t]);break;case 39:-1!==v[0]&&E(l[t]);break;case 40:-1!==v[1]&&E(l[t]);break;case 32:g((function(e){return e?0:180}))}},ref:e,width:"".concat(800,"px"),height:"".concat(800,"px")}),c.a.createElement("button",{onClick:function(e){var t=e.target.innerHTML;"Play Game"===t||"Resume Game"===t?(g(180),C("Pause Game")):"Pause Game"===t&&(g(0),C("Resume Game"))}},P)):c.a.createElement("div",null,"Game Over"))};n(13);u.a.render(c.a.createElement(O,null),document.getElementById("root"))},4:function(e,t,n){e.exports={container:"App_container__1MQN3"}},8:function(e,t,n){e.exports=n(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.e3631ed9.chunk.js.map