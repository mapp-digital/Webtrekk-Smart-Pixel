(function(){"use strict";var t={351:function(t,e,n){n.d(e,{s:function(){return r}});const r=async(t="")=>{const e="http:"===location.protocol?"4000":"4001";return fetch(`${location.protocol}//phoenix:${e}/api/fixture/${t}`).then((t=>t.json()))}},635:function(t,e,n){var r=n(144),o=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"app"}},[e("div",{staticClass:"sticky"},[e("Header")],1),e("div",{staticClass:"content"},[e("router-view")],1),e("Snackbar")],1)},a=[],i=function(){var t=this,e=t._self._c;return e("header",[e("nav",[e("ul",[e("li",[e("router-link",{attrs:{to:"/"}},[t._v("Home")])],1),e("li",[e("router-link",{attrs:{to:"/shop"}},[t._v("Shop")])],1),e("li",[e("router-link",{attrs:{to:"/teaser"}},[t._v("Teaser")])],1),e("li",[e("router-link",{attrs:{to:"/content-engagement"}},[t._v("Content Engagement")])],1),e("li",[e("router-link",{attrs:{to:"/directive"}},[t._v("Directive")])],1),e("li",{staticClass:"header right"},[e("Cart")],1),e("AccountMenu"),e("li",{staticClass:"header right"},[e("router-link",{attrs:{to:"/about"}},[t._v("About")])],1)],1)])])},c=[],s=function(){var t=this,e=t._self._c;return e("div",[t.isLoggedOut?t._e():e("li",{staticClass:"header right logout",on:{click:t.logout}},[t._v(" Logout ")]),t.isLoggedOut?e("li",{staticClass:"header right"},[e("router-link",{staticClass:"headerLink",attrs:{to:"/login"}},[t._v("Register / Login")])],1):e("li",{staticClass:"header right"},[e("router-link",{staticClass:"headerLink",attrs:{to:"/account"}},[t._v("Account")])],1)])},u=[],l=n(629),d={name:"AccountMenu",data(){return{}},computed:{...(0,l.Se)(["isLoggedOut"])},methods:{...(0,l.nv)(["logout"])}},p=d,h=n(1),m=(0,h.Z)(p,s,u,!1,null,null,null),v=m.exports,g=function(){var t=this,e=t._self._c;return e("div",{staticClass:"header cart wrapper"},[e("svg",{staticClass:"header cart icon",attrs:{id:"openCart",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},on:{click:t.openCart}},[e("path",{staticStyle:{fill:"white"},attrs:{d:"M10 19.5c0 .829-.672 1.5-1.5 1.5s-1.5-.671-1.5-1.5c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5zm3.5-1.5c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5 1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5zm1.336-5l1.977-7h-16.813l2.938 7h11.898zm4.969-10l-3.432 12h-12.597l.839 2h13.239l3.474-12h1.929l.743-2h-4.195z"}})]),e("div",{staticClass:"header cart text",on:{click:t.openCart}},[t._v(" ( "+t._s(t.cartAmount)+" ) ")]),e("CartMenu")],1)},f=[],k=function(){var t=this,e=t._self._c;return t.cartIsOpen?e("div",{staticClass:"modal",attrs:{id:"myModal"}},[e("div",{staticClass:"modal-content"},[e("div",{staticClass:"modal-header"},[e("span",{staticClass:"close",on:{click:t.closeCart}},[t._v("×")]),e("h2",[t._v("You have "+t._s(t.cartAmount)+" items in your cart")])]),t.cartAmount>0?e("div",[e("table",{staticClass:"cartTable"},[t._m(0),t._l(t.cart,(function(t){return e("CartItem",{key:t.id,attrs:{product:t}})}))],2)]):e("div",[e("p",[t._v("Your cart is empty")])]),t.cartAmount>0?e("div",{staticClass:"modal-footer"},[e("p",[t._v("$"+t._s(t.cartSum))]),t.isLoggedOut?e("button",{attrs:{type:"submit"},on:{click:function(e){return e.preventDefault(),t.isLoggedOutHandler.apply(null,arguments)}}},[t._v(" Login or register to checkout ")]):e("button",{attrs:{id:"addOrder",type:"submit"},on:{click:function(e){return e.preventDefault(),t.addOrder.apply(null,arguments)}}},[t._v(" Order Items ")])]):t._e()])]):t._e()},b=[function(){var t=this,e=t._self._c;return e("tr",[e("th"),e("th",[t._v("Product")]),e("th",[t._v("Price")]),e("th"),e("th",[t._v("Quantity")]),e("th"),e("th",[t._v("Sum")])])}],y=function(){var t=this,e=t._self._c;return e("tr",[e("td",[e("img",{staticStyle:{width:"50px"},attrs:{src:t.product.imageUrl,alt:t.product.name+"title"}})]),e("td",[e("p",[t._v(t._s(t.product.name))])]),e("td",[e("p",[t._v("$"+t._s(t.product.price))])]),e("td",[e("button",{staticClass:"cart-quantity-button",attrs:{type:"button",name:"button"},on:{click:()=>{this.removeFromCart({...t.product,quantity:1})}}},[e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"12",viewBox:"0 0 24 24"}},[e("path",{attrs:{d:"M0 10h24v4h-24z"}})])])]),e("td",[e("p",[t._v(t._s(t.product.quantity))])]),e("td",[e("button",{staticClass:"cart-quantity-button",attrs:{type:"button",name:"button"},on:{click:()=>{this.addToCart({...t.product,quantity:1})}}},[e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"12",viewBox:"0 0 24 24"}},[e("path",{attrs:{d:"M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z"}})])])]),e("td",[e("p",[t._v("$"+t._s(t.product.sum))])])])},_=[],C={name:"Cart",data(){return{}},props:{product:{type:Object,required:!1}},methods:{...(0,l.nv)(["addToCart","removeFromCart"])}},w=C,T=(0,h.Z)(w,y,_,!1,null,null,null),P=T.exports,Z={name:"CartMenu",components:{CartItem:P},data(){return{}},computed:{...(0,l.Se)(["cartAmount","cartIsOpen","cart","cartSum","isLoggedOut"])},methods:{...(0,l.nv)(["closeCart","getCart","addToCart","addOrder"]),isLoggedOutHandler(){this.closeCart(),this.$router.push("/login")}}},A=Z,S=(0,h.Z)(A,k,b,!1,null,null,null),O=S.exports,$={name:"Cart",data(){return{}},computed:{...(0,l.Se)(["cartAmount","cartIsOpen"])},components:{CartMenu:O},methods:{...(0,l.nv)(["openCart","closeCart","getCart"])},mounted(){this.getCart()}},E=$,x=(0,h.Z)(E,g,f,!1,null,null,null),M=x.exports,L={name:"Header",components:{AccountMenu:v,Cart:M}},j=L,D=(0,h.Z)(j,i,c,!1,null,null,null),R=D.exports,q=function(){var t=this,e=t._self._c;return t.snackbar?e("div",{staticClass:"snackbar"},[t._v(t._s(t.snackbar))]):t._e()},I=[],U={name:"Snackbar",data(){return{}},computed:{...(0,l.Se)(["snackbar"])}},N=U,H=(0,h.Z)(N,q,I,!1,null,null,null),F=H.exports,B={name:"App",components:{Header:R,Snackbar:F},methods:{...(0,l.nv)(["getUserData"])},created(){this.getUserData()}},z=B,Y=(0,h.Z)(z,o,a,!1,null,null,null),K=Y.exports,W=n(345),G=function(){var t=this,e=t._self._c;return e("div",[e("h2",[t._v(t._s(t.content.title))]),e("p",{domProps:{innerHTML:t._s(t.content.content)}}),e("Child")],1)},J=[],Q=n(351),V=function(){var t=this,e=t._self._c;return e("div")},X=[],tt={name:"Child",data(){return{webtrekk:{page:{parameter:{2:"Child"}}}}}},et=tt,nt=(0,h.Z)(et,V,X,!1,null,null,null),rt=nt.exports,ot={name:"Home",components:{Child:rt},data(){return{content:{},webtrekk:{page:{parameter:{1:"Homepage"}}}}},beforeCreate(){(0,Q.s)("pages/slug/home").then((t=>{this.content=t[0]}))}},at=ot,it=(0,h.Z)(at,G,J,!1,null,null,null),ct=it.exports;r.ZP.use(W.Z);const st=[{path:"/",name:"Home",component:ct},{path:"/about",name:"About",component:()=>n.e(443).then(n.bind(n,583))},{path:"/shop",name:"Shop",component:()=>n.e(523).then(n.bind(n,44))},{path:"/account",name:"Account",component:()=>n.e(809).then(n.bind(n,373))},{path:"/login",name:"Login",component:()=>n.e(535).then(n.bind(n,90))},{path:"/thankyou",name:"ThankYou",component:()=>n.e(756).then(n.bind(n,335))},{path:"/teaser",name:"Teaser",component:()=>n.e(164).then(n.bind(n,182))},{path:"/content-engagement",name:"ContentEngagement",component:()=>n.e(396).then(n.bind(n,367))},{path:"/directive",name:"Directive",component:()=>n.e(77).then(n.bind(n,115))},{path:"/shop/:id",name:"SingleProduct",component:()=>n.e(58).then(n.bind(n,177))}],ut=new W.Z({mode:"history",base:"/apps/vue2/",routes:st});var lt=ut;const dt=(t,e)=>fetch("https://"+location.hostname+":4001/"+t,{method:"POST",credentials:"include",mode:"cors",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then((t=>t.json())),pt=t=>fetch("https://"+location.hostname+":4001/"+t,{method:"GET",credentials:"include",mode:"cors",headers:{"Content-Type":"application/json"}}).then((t=>t.json()));r.ZP.use(l.ZP);var ht=new l.ZP.Store({state:{cart:[],cartIsOpen:!1,userData:!1,snackbar:!1},mutations:{SET_CART_MENU(t,e){t.cartIsOpen=e},SET_CART(t,e){t.cart=e},SET_SNACKBAR(t,e){t.snackbar=e},SET_USER(t,e){t.userData=e}},actions:{openCart({commit:t}){r.ZP.prototype.$webtrekk.action({name:"Open cart"}),r.ZP.prototype.$webtrekk.trackAction(),t("SET_CART_MENU",!0)},closeCart({commit:t}){r.ZP.prototype.$webtrekk.action({name:"Close cart"}),r.ZP.prototype.$webtrekk.trackAction(),t("SET_CART_MENU",!1)},getCart({commit:t}){pt("cart").then((e=>{t("SET_CART",e)}))},addToCart({commit:t,dispatch:e},n){const o=n.quantity?n.quantity:1;r.ZP.prototype.$webtrekk.product("basket",{id:n.id+"",cost:parseFloat((n.price*o).toFixed(2)),quantity:o}),r.ZP.prototype.$webtrekk.trackAction(),dt("cart/add",n).then((n=>{t("SET_CART",n),e("displayMessage","Product added to cart")}))},removeFromCart({commit:t},e){dt("cart/delete",e).then((e=>{t("SET_CART",e)}))},displayMessage({commit:t},e){t("SET_SNACKBAR",e),setTimeout((()=>{t("SET_SNACKBAR",!1)}),3e3)},getUserData({commit:t}){pt("user").then((e=>{t("SET_USER",!!e?.name&&e)}))},login({dispatch:t},{name:e,password:n}){pt("user/login/?name="+e+"&password="+n).then((n=>{n?.token?(r.ZP.prototype.$webtrekk.customer(e),r.ZP.prototype.$webtrekk.action({name:"Login"}),r.ZP.prototype.$webtrekk.trackAction(),t("getUserData"),lt.push("account")):(r.ZP.prototype.$webtrekk.action({name:"Wrong login"}),r.ZP.prototype.$webtrekk.trackAction(),t("displayMessage","Wrong credentials"))}))},logout({dispatch:t}){pt("user/logout").then((()=>{r.ZP.prototype.$webtrekk.action({name:"Logout"}),r.ZP.prototype.$webtrekk.trackAction(),t("displayMessage","You successfully logged out!"),t("getUserData"),lt.push("login")}))},register({dispatch:t},e){dt("user/register",e).then((n=>{n?.token&&(r.ZP.prototype.$webtrekk.customer(e.name),r.ZP.prototype.$webtrekk.action({name:"Register"}),r.ZP.prototype.$webtrekk.trackAction(),t("getUserData"),t("displayMessage","Welcome "+e.firstName),lt.push("account"))}))},addOrder({dispatch:t,getters:e}){pt("cart/order").then((n=>{r.ZP.prototype.$webtrekk.page("Thank you"),r.ZP.prototype.$webtrekk.customer(e.userData.name),r.ZP.prototype.$webtrekk.order({value:n.data.orderValue,id:n.orderId+""}),n.data.products.forEach((t=>{r.ZP.prototype.$webtrekk.product("confirmation",{id:t.id+"",quantity:t.quantity,cost:t.sum})})),r.ZP.prototype.$webtrekk.trackPage(),r.ZP.prototype.$webtrekk.page(""),r.ZP.prototype.$webtrekk.deactivateAutoTracking=!0,t("closeCart"),t("getCart"),lt.push("/thankyou")}))}},getters:{cartAmount:t=>t.cart.map((t=>t.quantity)).reduce(((t,e)=>t+e),0).toFixed(0),cartIsOpen:t=>t.cartIsOpen,cart:t=>t.cart,cartSum:t=>t.cart.map((t=>t.sum)).reduce(((t,e)=>t+e),0).toFixed(2),isLoggedOut:t=>!t.userData,userData:t=>t.userData,snackbar:t=>t.snackbar},modules:{}}),mt=n(170);r.ZP.config.productionTip=!1;const vt={trackId:"123123123123123",trackDomain:"phoenix:4001",activateLinkTracking:!0,activateAutoTracking:lt,activateTeaserTracking:!0,activateProductListTracking:!0,activateContentEngagement:!0,secureCookie:!1};r.ZP.use(mt.Z,vt),new r.ZP({router:lt,store:ht,render:t=>t(K)}).$mount("#app")}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var a=e[r]={exports:{}};return t[r](a,a.exports,n),a.exports}n.m=t,function(){var t=[];n.O=function(e,r,o,a){if(!r){var i=1/0;for(l=0;l<t.length;l++){r=t[l][0],o=t[l][1],a=t[l][2];for(var c=!0,s=0;s<r.length;s++)(!1&a||i>=a)&&Object.keys(n.O).every((function(t){return n.O[t](r[s])}))?r.splice(s--,1):(c=!1,a<i&&(i=a));if(c){t.splice(l--,1);var u=o();void 0!==u&&(e=u)}}return e}a=a||0;for(var l=t.length;l>0&&t[l-1][2]>a;l--)t[l]=t[l-1];t[l]=[r,o,a]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})}}(),function(){n.f={},n.e=function(t){return Promise.all(Object.keys(n.f).reduce((function(e,r){return n.f[r](t,e),e}),[]))}}(),function(){n.u=function(t){return"js/"+{58:"singleProduct",77:"directive",164:"teaser",396:"content_eng",443:"about",523:"shop",535:"login",756:"thanks",809:"account"}[t]+"."+{58:"71786784",77:"91e36444",164:"8b0890a9",396:"74ba79d0",443:"446d1265",523:"1501bac5",535:"459e16dd",756:"8df64fe6",809:"13461670"}[t]+".js"}}(),function(){n.miniCssF=function(t){}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="vue2:";n.l=function(r,o,a,i){if(t[r])t[r].push(o);else{var c,s;if(void 0!==a)for(var u=document.getElementsByTagName("script"),l=0;l<u.length;l++){var d=u[l];if(d.getAttribute("src")==r||d.getAttribute("data-webpack")==e+a){c=d;break}}c||(s=!0,c=document.createElement("script"),c.charset="utf-8",c.timeout=120,n.nc&&c.setAttribute("nonce",n.nc),c.setAttribute("data-webpack",e+a),c.src=r),t[r]=[o];var p=function(e,n){c.onerror=c.onload=null,clearTimeout(h);var o=t[r];if(delete t[r],c.parentNode&&c.parentNode.removeChild(c),o&&o.forEach((function(t){return t(n)})),e)return e(n)},h=setTimeout(p.bind(null,void 0,{type:"timeout",target:c}),12e4);c.onerror=p.bind(null,c.onerror),c.onload=p.bind(null,c.onload),s&&document.head.appendChild(c)}}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){n.p="/apps/vue2/"}(),function(){var t={143:0};n.f.j=function(e,r){var o=n.o(t,e)?t[e]:void 0;if(0!==o)if(o)r.push(o[2]);else{var a=new Promise((function(n,r){o=t[e]=[n,r]}));r.push(o[2]=a);var i=n.p+n.u(e),c=new Error,s=function(r){if(n.o(t,e)&&(o=t[e],0!==o&&(t[e]=void 0),o)){var a=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.src;c.message="Loading chunk "+e+" failed.\n("+a+": "+i+")",c.name="ChunkLoadError",c.type=a,c.request=i,o[1](c)}};n.l(i,s,"chunk-"+e,e)}},n.O.j=function(e){return 0===t[e]};var e=function(e,r){var o,a,i=r[0],c=r[1],s=r[2],u=0;if(i.some((function(e){return 0!==t[e]}))){for(o in c)n.o(c,o)&&(n.m[o]=c[o]);if(s)var l=s(n)}for(e&&e(r);u<i.length;u++)a=i[u],n.o(t,a)&&t[a]&&t[a][0](),t[a]=0;return n.O(l)},r=self["webpackChunkvue2"]=self["webpackChunkvue2"]||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(635)}));r=n.O(r)})();
//# sourceMappingURL=app.860e3f5c.js.map