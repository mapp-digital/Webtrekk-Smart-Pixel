"use strict";(self["webpackChunkvue3"]=self["webpackChunkvue3"]||[]).push([[809],{8553:function(t,u,l){l.r(u),l.d(u,{default:function(){return k}});var r=l(3396),n=l(7139);const e=(0,r._)("h1",null,"Account",-1),a=(0,r._)("h2",null,"Your orders",-1),s=(0,r._)("hr",null,null,-1),d=(0,r._)("hr",null,null,-1);function o(t,u,l,o,c,i){const _=(0,r.up)("OrderProductList");return(0,r.wg)(),(0,r.iD)("div",null,[e,(0,r._)("p",null,"Hello "+(0,n.zw)(t.userData.firstName)+" "+(0,n.zw)(t.userData.lastName)+"!",1),(0,r._)("p",null,"Your username is: "+(0,n.zw)(t.userData.name),1),a,s,((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(t.userData.orders,(t=>((0,r.wg)(),(0,r.iD)("div",{key:t.id},[(0,r._)("h3",null,"Order ID: "+(0,n.zw)(t.orderId),1),(0,r.Wm)(_,{products:t.products},null,8,["products"]),(0,r._)("strong",null,"Order Value: $ "+(0,n.zw)(t.orderValue),1),d])))),128))])}const c=(0,r._)("tr",null,[(0,r._)("th",null,"ID"),(0,r._)("th"),(0,r._)("th",null,"Name"),(0,r._)("th",null,"SKU"),(0,r._)("th",null,"Quantity"),(0,r._)("th",null,"Price"),(0,r._)("th",null,"Sum")],-1),i=["src","alt"];function _(t,u,l,e,a,s){return(0,r.wg)(),(0,r.iD)("table",null,[c,((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(t.products,(t=>((0,r.wg)(),(0,r.iD)("tr",{key:t.id},[(0,r._)("td",null,(0,n.zw)(t.id),1),(0,r._)("td",null,[(0,r._)("img",{height:"100",src:t.imageUrl,alt:t.name},null,8,i)]),(0,r._)("td",null,(0,n.zw)(t.name),1),(0,r._)("td",null,(0,n.zw)(t.sku),1),(0,r._)("td",null,(0,n.zw)(t.quantity),1),(0,r._)("td",null,(0,n.zw)(t.price),1),(0,r._)("td",null,(0,n.zw)(t.sum),1)])))),128))])}var p=(0,r.aZ)({name:"OrderProductList",props:{products:{type:Array,required:!1}}}),w=l(89);const h=(0,w.Z)(p,[["render",_]]);var m=h,g=l(65),D=(0,r.aZ)({name:"Account",components:{OrderProductList:m},data(){return{content:{},webtrekk:{page:{parameter:{1:"Account"}}}}},computed:{...(0,g.Se)(["isLoggedOut","userData"])},setup(){const t=(0,g.oR)();t.dispatch("getUserData")}});const z=(0,w.Z)(D,[["render",o]]);var k=z}}]);
//# sourceMappingURL=account.8a48c912.js.map