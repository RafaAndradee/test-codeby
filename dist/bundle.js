!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t){const n=document.querySelector("#productList");function r(e){return(e/100..toFixed(2)).toLocaleString("pt-BR",{style:"currency",currency:"BRL"})}fetch("data/acima-10-reais.json").then(e=>e.json()).then(e=>{const t=e.items;t.map(e=>{console.log(e.name);let t=document.createElement("li");new Intl.NumberFormat("pt-BR",{style:"currency",currency:"BRL"});t.className="productBox",t.innerHTML=`\n      <div id="cartImageBox">\n      <img src="https://dummyimage.com/120x120/fff/878787.png&text=Produto" alt="">\n      </div>\n      <div id="cartDetails">\n      <h4>${e.name}</h4>\n      <p id="listPrice">${r(e.listPrice)}</p>\n      <p id="sellingPrice">${r(e.sellingPrice)}</p>\n      </div>\n      `,n.appendChild(t)});const o=t.map(e=>e.sellingPrice).reduce((e,t)=>e+t);document.getElementById("totalPrice").innerHTML=r(o),console.log(r(o))})}]);