!function(n){function t(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return n[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var e={};return t.m=n,t.c=e,t.i=function(n){return n},t.d=function(n,e,o){t.o(n,e)||Object.defineProperty(n,e,{configurable:!1,enumerable:!0,get:o})},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},t.p="",t(t.s=2)}([function(n,t,e){"use strict";e.d(t,"a",function(){return o});var o="1997df71664984f20c0b1b8fcd42d1279fb98c424e07e0e1385299eed6935142"},function(n,t,e){"use strict";e.d(t,"a",function(){return o}),e.d(t,"b",function(){return i}),e.d(t,"c",function(){return c});var o=document.querySelector.bind(document),r=(document.querySelectorAll.bind(document),window.fetch),i=function(n){return r(n).then(function(n){return n.json()}).then(function(n){return n}).catch(function(n){return console.error(n)})},c=function(n){return r(n).then(function(n){return n.blob()}).then(function(n){return new Promise(function(t,e){var o=new window.FileReader;o.onloadend=function(){return t(o.result)},o.onerror=e,o.readAsDataURL(n)})}).catch(function(n){return console.error(n)})}},function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=e(1),r=e(0),i=window.localStorage,c={html:e.i(o.a)("html"),main:e.i(o.a)("main"),btnMore:e.i(o.a)(".btn-more"),linkDownload:e.i(o.a)(".link-download"),linkView:e.i(o.a)(".link-view")},u=function(){a(),i.getItem("nextPhoto")?(s(JSON.parse(i.getItem("nextPhoto"))),f()):f(!0)},a=function(){c.btnMore.addEventListener("click",l),c.main.addEventListener("click",d)},l=function(){return e.i(o.a)(".popover").classList.toggle("is-visible")},d=function(){return e.i(o.a)(".popover").classList.remove("is-visible")},f=function(){var n=arguments.length>0&&void 0!==arguments[0]&&arguments[0];e.i(o.b)("https://api.unsplash.com/photos/random?featured=true&orientation=landscape&w="+window.innerWidth+"&client_id="+r.a).then(function(t){e.i(o.c)(t.urls.custom).then(function(e){var o={photoId:t.id,color:t.color,htmlPath:t.links.html,downloadPath:t.links.download,imageData:e};i.setItem("nextPhoto",JSON.stringify(o)),n&&s(o)}).catch(function(n){return console.error(n)})}).catch(function(n){return console.error(n)})},s=function(n){c.html.style.backgroundColor=""+n.color,c.main.style.backgroundImage="url("+n.imageData+")",c.linkDownload.href=""+n.downloadPath,c.linkView.href=""+n.htmlPath};u()}]);
//# sourceMappingURL=app.js.map