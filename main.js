(()=>{"use strict";var n={426:(n,e,t)=>{t.d(e,{Z:()=>m});var a=t(537),i=t.n(a),o=t(645),r=t.n(o),A=t(667),c=t.n(A),d=new URL(t(201),t.b),s=r()(i()),l=c()(d);s.push([n.id,`* {\n    box-sizing: border-box;\n    padding: 0;\n    margin: 0;\n}\n\n::selection {\n    background-color: #21524e;\n}\n\nbody {\n    background-image: url(${l});\n    background-repeat: no-repeat;\n    background-size: cover;\n    background-attachment: fixed;\n    color: whitesmoke;\n    height: 100vh;\n}\n\na {\n    color: whitesmoke;\n    text-decoration: none;\n    cursor: pointer;\n}\n\nli {\n    list-style-type: none;\n}\n\nh1 {\n    font-size: 1.9rem;\n}\n\nheader {\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n    min-height: 130px;\n}\n\nheader .logo-container {\n    display: flex;\n    align-items: center;\n    gap: .8rem;\n}\n\n.logo-container i {\n    font-size: 1.5rem;\n}\n\nheader .navbar ul {\n    display: flex;\n}\n\nheader .navbar li {\n    font-size: 1.5rem;\n}\n\nheader .navbar a {\n    display: inline-block;\n    padding: 1.5rem;\n}\n\n.navbar a::after {\n    content: '';\n    display: block;\n    width: 0;\n    height: 3px;\n    background: #317b76;\n    transition: width .3s;\n}\n\n.navbar a:hover::after {\n    width: 100%;\n}\n\n.main-content {\n    padding: 2rem;\n}\n\n.hero {\n    display: flex;\n    justify-content: space-evenly;\n    align-items: center;\n    animation: fadeIn 500ms ease-in;\n}\n\n.hero .left-container {\n    display: flex; \n    flex-direction: column;\n    width: 500px;\n    gap: .5rem;\n    align-items: center;\n    padding: 1.3rem;\n}\n\n.left-container {\n    font-size: 1.2rem;\n}\n\n.left-container h1 {\n    padding: 0.5rem;\n    font-size: 2.5rem;\n}\n\n.left-container span {\n    margin-left: 1rem;\n}\n\n.left-container button {\n    padding: .7rem;\n    border: none;\n    font-size: 1.1rem;\n    font-weight: bold;\n    margin-top: 1rem;\n    background-color: #317b76;\n    color: inherit;\n    border-radius: 5px;\n}\n\n.left-container button:hover {\n    background-color: #21524e;\n    cursor: pointer;\n}\n\n.right-container {\n    padding: 1.3rem;\n    position: relative;\n}\n\n.right-container div {\n    width: 300px;\n    height: 460px;\n    border: 3px solid #317b76;\n    position: absolute;\n    transform: rotate(350deg);\n}\n\n.right-container img {\n    width: 300px;\n    transform: rotate(8deg);\n    object-fit: cover;\n}\n\n.bottom-container {\n    width: 1000px;\n    margin: 0 auto;\n    display: flex;\n    justify-content: space-evenly;\n    padding: 1rem;\n    align-items: center;\n    margin-top: 2.5rem;\n    animation: fadeIn 500ms ease-in;\n}\n\n.bottom-container .img-container {\n    width: 100px;\n    height: 100px;\n    text-align: center;\n}\n\n.bottom-container .img-container img {\n    width: 100%;\n    height: 100%;\n    border-radius: 50px;\n    border: 2px solid #21524e;\n    object-fit: cover;\n    cursor: pointer;\n    transition: transform 200ms ease-in;\n}\n\n.bottom-container .img-container img:hover {\n    transform: scale(1.1);\n}\n\n.img-container a {\n    font-size: 1.2rem;\n    color: whitesmoke;\n    font-weight: bold;\n}\n\n/* Menu styling */\n\n.menu-container {\n    display: grid;\n    text-align: center;\n    grid-template-columns: repeat(2, 500px);\n    place-content: center center;\n    place-items: center center;\n    gap: 1.5rem;\n    animation: fadeIn 500ms ease-in;\n}\n\n.menu-container .menu-header {\n    grid-column: 1/3;\n    display: flex;\n    align-items: center;\n    padding: 1rem;\n}\n.menu-header h1 {\n    font-size: 3rem;\n    border-bottom: 3px solid #21524e;\n}\n\n.menu-container a {\n    background-color: rgba(245,245,245, 0.7);\n    border: 2px solid #21524e;\n    color: #317b76;\n    width: 400px;\n    padding: 1rem;\n    transition: transform 200ms ease-in;\n    transition: background-color 500ms linear;\n}\n\n.menu-container img {\n    width: 300px;\n    height: 300px;\n    object-fit: cover;\n    border: 1px solid #317b76;\n} \n\n.menu-container a:hover {\n    transform: scale(1.05);\n    background-color: rgba(33, 82, 78, 0.9);\n    color: whitesmoke;\n}\n\n.menu-container .text-container {\n    margin-top: 1rem;\n}\n\n.menu-container p {\n    font-size: 1.3rem;\n    font-weight: bold;\n}\n\n/* About section styling */\n\n.about-container {\n    display: flex;\n    width: 1000px;\n    margin: 0 auto;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    background-color: rgba(33, 82, 78, 0.7);\n    padding: 2rem;\n    animation: fadeIn 500ms ease-in;\n}\n\n.about-header {\n    text-align: center;\n    width: 700px;\n    padding: 1rem;\n}\n\n.about-header h1 {\n    font-size: 2.1rem;\n}\n\n.about-header p {\n    text-align: left;\n    padding: 1rem;\n}\n\n.about-body {\n    display: flex;\n    flex-direction: column;\n    text-align: center;\n}\n\n.about-body h1 {\n    font-size: 2.1rem;\n    padding: 1.5rem;\n}\n\n\n.about-body .contact {\n    display: grid;\n    gap: 1rem;\n    grid-template-columns: 300px 600px;\n}\n\n.contact .contact-info {\n    display: flex;\n    flex-direction: column;\n    gap: 1rem;\n    color: inherit;\n    text-align: left;\n    padding: 1rem;\n}\n\n.form-container p {\n    text-align: left;\n    padding: 1rem;\n}\n\n.contact #form {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 0.7rem;\n}\n\n#form input {\n    width: 100%;\n    height: 2rem;\n    border: none;\n    background-color: transparent;\n    border-bottom: 2px solid whitesmoke;\n    font-size: 1.1rem;\n    padding: 1rem;\n    color: whitesmoke;\n}\n\n#form textarea {\n    width: 100%;\n    height: 6rem;\n    padding: .5rem;\n}\n\n#form button {\n    width: 100%;\n    padding: .6rem;\n    font-size: 1.2rem;\n    font-weight: bold;\n    border: none;\n    cursor: pointer;\n    background-color: whitesmoke;\n    color: #21524e;\n}\n\n#form input:focus,\n#form textarea:focus,\n#form button:focus {\n    outline: 1px solid #21524e;\n}\n\n#form button:hover {\n    background-color: #21524e;\n    color: whitesmoke;\n}\n\n.contact .map {\n    grid-column: 2/3;\n    grid-row: 1/3;\n}\n\n@keyframes fadeIn {\n    0% {\n        opacity: 0;\n    }\n    100% {\n        opacity: 1;\n    }\n}`,"",{version:3,sources:["webpack://./src/style.css"],names:[],mappings:"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",sourcesContent:["* {\n    box-sizing: border-box;\n    padding: 0;\n    margin: 0;\n}\n\n::selection {\n    background-color: #21524e;\n}\n\nbody {\n    background-image: url(./assets/bg-brown.jpg);\n    background-repeat: no-repeat;\n    background-size: cover;\n    background-attachment: fixed;\n    color: whitesmoke;\n    height: 100vh;\n}\n\na {\n    color: whitesmoke;\n    text-decoration: none;\n    cursor: pointer;\n}\n\nli {\n    list-style-type: none;\n}\n\nh1 {\n    font-size: 1.9rem;\n}\n\nheader {\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n    min-height: 130px;\n}\n\nheader .logo-container {\n    display: flex;\n    align-items: center;\n    gap: .8rem;\n}\n\n.logo-container i {\n    font-size: 1.5rem;\n}\n\nheader .navbar ul {\n    display: flex;\n}\n\nheader .navbar li {\n    font-size: 1.5rem;\n}\n\nheader .navbar a {\n    display: inline-block;\n    padding: 1.5rem;\n}\n\n.navbar a::after {\n    content: '';\n    display: block;\n    width: 0;\n    height: 3px;\n    background: #317b76;\n    transition: width .3s;\n}\n\n.navbar a:hover::after {\n    width: 100%;\n}\n\n.main-content {\n    padding: 2rem;\n}\n\n.hero {\n    display: flex;\n    justify-content: space-evenly;\n    align-items: center;\n    animation: fadeIn 500ms ease-in;\n}\n\n.hero .left-container {\n    display: flex; \n    flex-direction: column;\n    width: 500px;\n    gap: .5rem;\n    align-items: center;\n    padding: 1.3rem;\n}\n\n.left-container {\n    font-size: 1.2rem;\n}\n\n.left-container h1 {\n    padding: 0.5rem;\n    font-size: 2.5rem;\n}\n\n.left-container span {\n    margin-left: 1rem;\n}\n\n.left-container button {\n    padding: .7rem;\n    border: none;\n    font-size: 1.1rem;\n    font-weight: bold;\n    margin-top: 1rem;\n    background-color: #317b76;\n    color: inherit;\n    border-radius: 5px;\n}\n\n.left-container button:hover {\n    background-color: #21524e;\n    cursor: pointer;\n}\n\n.right-container {\n    padding: 1.3rem;\n    position: relative;\n}\n\n.right-container div {\n    width: 300px;\n    height: 460px;\n    border: 3px solid #317b76;\n    position: absolute;\n    transform: rotate(350deg);\n}\n\n.right-container img {\n    width: 300px;\n    transform: rotate(8deg);\n    object-fit: cover;\n}\n\n.bottom-container {\n    width: 1000px;\n    margin: 0 auto;\n    display: flex;\n    justify-content: space-evenly;\n    padding: 1rem;\n    align-items: center;\n    margin-top: 2.5rem;\n    animation: fadeIn 500ms ease-in;\n}\n\n.bottom-container .img-container {\n    width: 100px;\n    height: 100px;\n    text-align: center;\n}\n\n.bottom-container .img-container img {\n    width: 100%;\n    height: 100%;\n    border-radius: 50px;\n    border: 2px solid #21524e;\n    object-fit: cover;\n    cursor: pointer;\n    transition: transform 200ms ease-in;\n}\n\n.bottom-container .img-container img:hover {\n    transform: scale(1.1);\n}\n\n.img-container a {\n    font-size: 1.2rem;\n    color: whitesmoke;\n    font-weight: bold;\n}\n\n/* Menu styling */\n\n.menu-container {\n    display: grid;\n    text-align: center;\n    grid-template-columns: repeat(2, 500px);\n    place-content: center center;\n    place-items: center center;\n    gap: 1.5rem;\n    animation: fadeIn 500ms ease-in;\n}\n\n.menu-container .menu-header {\n    grid-column: 1/3;\n    display: flex;\n    align-items: center;\n    padding: 1rem;\n}\n.menu-header h1 {\n    font-size: 3rem;\n    border-bottom: 3px solid #21524e;\n}\n\n.menu-container a {\n    background-color: rgba(245,245,245, 0.7);\n    border: 2px solid #21524e;\n    color: #317b76;\n    width: 400px;\n    padding: 1rem;\n    transition: transform 200ms ease-in;\n    transition: background-color 500ms linear;\n}\n\n.menu-container img {\n    width: 300px;\n    height: 300px;\n    object-fit: cover;\n    border: 1px solid #317b76;\n} \n\n.menu-container a:hover {\n    transform: scale(1.05);\n    background-color: rgba(33, 82, 78, 0.9);\n    color: whitesmoke;\n}\n\n.menu-container .text-container {\n    margin-top: 1rem;\n}\n\n.menu-container p {\n    font-size: 1.3rem;\n    font-weight: bold;\n}\n\n/* About section styling */\n\n.about-container {\n    display: flex;\n    width: 1000px;\n    margin: 0 auto;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    background-color: rgba(33, 82, 78, 0.7);\n    padding: 2rem;\n    animation: fadeIn 500ms ease-in;\n}\n\n.about-header {\n    text-align: center;\n    width: 700px;\n    padding: 1rem;\n}\n\n.about-header h1 {\n    font-size: 2.1rem;\n}\n\n.about-header p {\n    text-align: left;\n    padding: 1rem;\n}\n\n.about-body {\n    display: flex;\n    flex-direction: column;\n    text-align: center;\n}\n\n.about-body h1 {\n    font-size: 2.1rem;\n    padding: 1.5rem;\n}\n\n\n.about-body .contact {\n    display: grid;\n    gap: 1rem;\n    grid-template-columns: 300px 600px;\n}\n\n.contact .contact-info {\n    display: flex;\n    flex-direction: column;\n    gap: 1rem;\n    color: inherit;\n    text-align: left;\n    padding: 1rem;\n}\n\n.form-container p {\n    text-align: left;\n    padding: 1rem;\n}\n\n.contact #form {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 0.7rem;\n}\n\n#form input {\n    width: 100%;\n    height: 2rem;\n    border: none;\n    background-color: transparent;\n    border-bottom: 2px solid whitesmoke;\n    font-size: 1.1rem;\n    padding: 1rem;\n    color: whitesmoke;\n}\n\n#form textarea {\n    width: 100%;\n    height: 6rem;\n    padding: .5rem;\n}\n\n#form button {\n    width: 100%;\n    padding: .6rem;\n    font-size: 1.2rem;\n    font-weight: bold;\n    border: none;\n    cursor: pointer;\n    background-color: whitesmoke;\n    color: #21524e;\n}\n\n#form input:focus,\n#form textarea:focus,\n#form button:focus {\n    outline: 1px solid #21524e;\n}\n\n#form button:hover {\n    background-color: #21524e;\n    color: whitesmoke;\n}\n\n.contact .map {\n    grid-column: 2/3;\n    grid-row: 1/3;\n}\n\n@keyframes fadeIn {\n    0% {\n        opacity: 0;\n    }\n    100% {\n        opacity: 1;\n    }\n}"],sourceRoot:""}]);const m=s},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",a=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),a&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),a&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,a,i,o){"string"==typeof n&&(n=[[null,n,void 0]]);var r={};if(a)for(var A=0;A<this.length;A++){var c=this[A][0];null!=c&&(r[c]=!0)}for(var d=0;d<n.length;d++){var s=[].concat(n[d]);a&&r[s[0]]||(void 0!==o&&(void 0===s[5]||(s[1]="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {").concat(s[1],"}")),s[5]=o),t&&(s[2]?(s[1]="@media ".concat(s[2]," {").concat(s[1],"}"),s[2]=t):s[2]=t),i&&(s[4]?(s[1]="@supports (".concat(s[4],") {").concat(s[1],"}"),s[4]=i):s[4]="".concat(i)),e.push(s))}},e}},667:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},537:n=>{n.exports=function(n){var e=n[1],t=n[3];if(!t)return e;if("function"==typeof btoa){var a=btoa(unescape(encodeURIComponent(JSON.stringify(t)))),i="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(a),o="/*# ".concat(i," */");return[e].concat([o]).join("\n")}return[e].join("\n")}},379:n=>{var e=[];function t(n){for(var t=-1,a=0;a<e.length;a++)if(e[a].identifier===n){t=a;break}return t}function a(n,a){for(var o={},r=[],A=0;A<n.length;A++){var c=n[A],d=a.base?c[0]+a.base:c[0],s=o[d]||0,l="".concat(d," ").concat(s);o[d]=s+1;var m=t(l),p={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==m)e[m].references++,e[m].updater(p);else{var u=i(p,a);a.byIndex=A,e.splice(A,0,{identifier:l,updater:u,references:1})}r.push(l)}return r}function i(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,i){var o=a(n=n||[],i=i||{});return function(n){n=n||[];for(var r=0;r<o.length;r++){var A=t(o[r]);e[A].references--}for(var c=a(n,i),d=0;d<o.length;d++){var s=t(o[d]);0===e[s].references&&(e[s].updater(),e.splice(s,1))}o=c}}},569:n=>{var e={};n.exports=function(n,t){var a=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var a="";t.supports&&(a+="@supports (".concat(t.supports,") {")),t.media&&(a+="@media ".concat(t.media," {"));var i=void 0!==t.layer;i&&(a+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),a+=t.css,i&&(a+="}"),t.media&&(a+="}"),t.supports&&(a+="}");var o=t.sourceMap;o&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleTagTransform(a,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},201:(n,e,t)=>{n.exports=t.p+"6a1d74f594bfdad88ee2.jpg"}},e={};function t(a){var i=e[a];if(void 0!==i)return i.exports;var o=e[a]={id:a,exports:{}};return n[a](o,o.exports,t),o.exports}t.m=n,t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var a in e)t.o(e,a)&&!t.o(n,a)&&Object.defineProperty(n,a,{enumerable:!0,get:e[a]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var a=e.getElementsByTagName("script");if(a.length)for(var i=a.length-1;i>-1&&!n;)n=a[i--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{var n=t(379),e=t.n(n),a=t(795),i=t.n(a),o=t(569),r=t.n(o),A=t(565),c=t.n(A),d=t(216),s=t.n(d),l=t(589),m=t.n(l),p=t(426),u={};u.styleTagTransform=m(),u.setAttributes=c(),u.insert=r().bind(null,"head"),u.domAPI=i(),u.insertStyleElement=s(),e()(p.Z,u),p.Z&&p.Z.locals&&p.Z.locals;const C=t.p+"856362ec68e2b5fdae13.jpg",g=t.p+"2b3ab6d5571abb4fc929.jpg",B=t.p+"f9d31d635af6f54200aa.jpg",f=t.p+"e875ecd57e25063e822b.jpg",h=()=>{const n=document.getElementById("main-content"),e=document.createElement("div");e.setAttribute="data-content",e.id="home";const t=document.createElement("div");t.classList.add("hero"),t.id="hero";const a=document.createElement("div");a.classList.add("left-container");const i=document.createElement("h1");i.textContent="Try Something Good ";const o=document.createElement("small");o.textContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor";const r=document.createElement("span"),A=document.createElement("i");A.classList.add("fa-solid"),A.classList.add("fa-burger"),i.appendChild(r),r.appendChild(A);const c=document.createElement("button");c.textContent="View our Menu",a.appendChild(i),a.appendChild(o),a.appendChild(c);const d=document.createElement("div"),s=document.createElement("div"),l=new Image;l.src=C,d.classList.add("right-container"),d.appendChild(s),d.appendChild(l),t.appendChild(a),t.appendChild(d);const m=document.createElement("div");m.classList.add("bottom-container"),m.id="bottom-container";const p=document.createElement("div"),u=document.createElement("a");u.textContent="Our Best Seller Burger $69",p.classList.add("img-container"),p.classList.add("img-container-one");const h=document.createElement("div"),I=document.createElement("a");I.textContent="Our Best Seller Salad $69",h.classList.add("img-container"),h.classList.add("img-container-two");const b=document.createElement("div"),v=document.createElement("a");v.textContent="Our Best Seller Porkchop $69",b.classList.add("img-container"),b.classList.add("img-container-three");const x=new Image;x.src=g;const y=new Image;y.src=B;const E=new Image;E.src=f,p.appendChild(x),p.appendChild(u),h.appendChild(y),h.appendChild(I),b.appendChild(E),b.appendChild(v),m.appendChild(p),m.appendChild(h),m.appendChild(b),e.appendChild(t),e.appendChild(m),n.appendChild(e)},I=t.p+"998920a81f146f4b9a95.jpg",b=t.p+"12398c5f55259f7e2a58.jpg",v=t.p+"174d9f837265bc6e4542.jpg";(()=>{const n=document.getElementById("content"),e=document.createElement("header"),t=document.createElement("div");t.id="main-content",t.classList.add("main-content");const a=document.createElement("div"),i=document.createElement("i");i.classList.add("fa-solid"),i.classList.add("fa-utensils");const o=document.createElement("h1");o.textContent="Insane",e.appendChild(a),a.classList.add("logo-container"),a.appendChild(i),a.appendChild(o);const r=document.createElement("div"),A=document.createElement("ul"),c=document.createElement("a");c.textContent="Home",c.setAttribute("data-btn","home"),c.classList.add("active"),c.setAttribute("href","#");const d=document.createElement("a");d.setAttribute("data-btn","menu"),d.setAttribute("href","#"),d.textContent="Menu";const s=document.createElement("a");s.textContent="About",s.setAttribute("data-btn","about"),s.setAttribute("href","#");const l=document.createElement("li"),m=document.createElement("li"),p=document.createElement("li");e.appendChild(r),e.classList.add("header"),r.classList.add("navbar"),r.appendChild(A),A.appendChild(l),A.appendChild(m),A.appendChild(p),l.appendChild(c),m.appendChild(d),p.appendChild(s),c.addEventListener("click",(()=>{t.innerHTML="",h()})),d.addEventListener("click",(()=>{t.innerHTML="",(()=>{const n=document.getElementById("main-content"),e=document.createElement("div");e.classList.add("menu-container"),e.setAttribute="data-content",e.id="menu";const t=document.createElement("div");t.classList.add("menu-header"),e.appendChild(t);const a=document.createElement("h1");a.textContent="Our Menu",t.appendChild(a);const i=document.createElement("a");i.setAttribute="#";const o=document.createElement("a");o.setAttribute="#";const r=document.createElement("a");r.setAttribute="#";const A=document.createElement("a");A.setAttribute="#";const c=document.createElement("a");c.setAttribute="#";const d=document.createElement("a");d.setAttribute="#";const s=new Image;s.src=g;const l=new Image;l.src=I;const m=new Image;m.src=b;const p=new Image;p.src=f;const u=new Image;u.src=B;const C=new Image;C.src=v,i.appendChild(s),i.innerHTML+="<div class='text-container'></div><p>Burger</p><p>$69</p></div>",o.appendChild(l),o.innerHTML+="<div class='text-container'></div><p>Beach Meatballs</p><p>$69</p></div>",r.appendChild(m),r.innerHTML+="<div class='text-container'></div><p>Pancake</p><p>$69</p></div>",A.appendChild(p),A.innerHTML+="<div class='text-container'></div><p>Best Porkchop</p><p>$69</p></div>",c.appendChild(u),c.innerHTML+="<div class='text-container'></div><p>Some Salad</p><p>$69</p></div>",d.appendChild(C),d.innerHTML+="<div class='text-container'></div><p>Vegan Supreme</p><p>$69</p></div>",e.appendChild(i),e.appendChild(o),e.appendChild(r),e.appendChild(A),e.appendChild(c),e.appendChild(d),n.appendChild(e)})()})),s.addEventListener("click",(()=>{t.innerHTML="",(()=>{const n=document.getElementById("main-content"),e=document.createElement("div");e.classList.add("about-container"),e.setAttribute="data-content",e.id="about",e.innerHTML="<div class='about-header'>\n        <h1>About Us</h1>\n        <p>\"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\"</p>\n    </div>\n    <div class='about-body'>\n        <h1>Contact Us</h1>\n        <div class='contact'>\n            <div class='contact-info'>\n                <p><i class=\"fa-solid fa-location-pin\"></i> BLS 1711, Blk 1 Spratly Islands, Parañaque, 1700 Metro Manila</p>\n                <p><i class='fa-solid fa-clock'></i> Mon-Thurs: 8:am - 8pm</p>\n                <p><i class='fa-solid fa-clock'></i> Fri-Sun: 8:am - 11pm</p>\n                <p><i class='fa-solid fa-phone'></i> (123)-456-7890</p>\n            </div>\n            <div class='form-container'>\n                <p><i class='fa-solid fa-envelope'></i> Message Us</p>\n                <form action=\"#\" id=\"form\">\n                    <input type='text' id='name' name='full-name' placeholder='FullName' required>\n                    <input type='email' id='email' name='email' placeholder='Email' pattern=\"[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$\" required>\n                    <textarea id='message' name='message' placeholder='Type your message here...'></textarea>\n                    <button type='submit' id='submit-btn' class='submit-btn'>Submit</button>\n                </form>\n            </div>\n            <div class='map'>\n                <iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241.43665800164945!2d121.01829290276456!3d14.485462850055601!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397cfcd9b02c175%3A0xeec6233ea0b9c076!2sSpratly%20Street!5e0!3m2!1sen!2sph!4v1690631967814!5m2!1sen!2sph\" width=\"550\" height=\"500\" style=\"border:0;\" allowfullscreen=\"\" loading=\"lazy\" referrerpolicy=\"no-referrer-when-downgrade\">\n                </iframe>\n            </div>\n        </div>\n    </div>",n.appendChild(e)})()})),n.appendChild(e),n.appendChild(t),t.appendChild(h())})()})()})();
//# sourceMappingURL=main.js.map