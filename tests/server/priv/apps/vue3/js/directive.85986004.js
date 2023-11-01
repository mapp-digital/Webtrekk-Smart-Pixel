"use strict";(self["webpackChunkvue3"]=self["webpackChunkvue3"]||[]).push([[77],{7758:function(e,t,i){i.r(t),i.d(t,{default:function(){return _}});var r=i(3396),c=i(7139);const o=(0,r._)("h1",null,"Directive tests",-1),a=["id","onClick"],n={key:0},s={key:1},d={key:2},v={key:3},u={key:4},D={key:5},k={key:6},w={key:7},l={key:8},p={key:9},g={href:"#"},m={key:10},y={key:0,id:"teaserElement",href:"#"},q={key:11},h={key:12};function f(e,t,i,f,U,S){const C=(0,r.Q2)("webtrekk");return(0,r.wg)(),(0,r.iD)("div",null,[o,(0,r.wy)(((0,r.wg)(),(0,r.iD)("p",null,[(0,r.Uk)("Deactivate auto tracking")])),[[C,!0,void 0,{deactivateAutoTracking:!0}]]),(0,r._)("p",null,"Current directive: "+(0,c.zw)(e.activeDirective),1),((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(e.directiveList,(t=>((0,r.wg)(),(0,r.iD)("button",{key:t,class:"button",id:t,onClick:i=>e.clickHandler(t)},(0,c.zw)(t),9,a)))),128)),"pageDir"===e.activeDirective?((0,r.wg)(),(0,r.iD)("div",n,[(0,r.wy)(((0,r.wg)(),(0,r.iD)("p",null,[(0,r.Uk)("Page")])),[[C,{parameter:{1:"Directive page test"}},void 0,{page:!0}]]),(0,r.wy)(((0,r.wg)(),(0,r.iD)("p",null,[(0,r.Uk)("Customer")])),[[C,"Directive customer test",void 0,{customer:!0}]]),(0,r.wy)(((0,r.wg)(),(0,r.iD)("p",null,[(0,r.Uk)(" Session ")])),[[C,{parameter:{1:"Directive session test"}},void 0,{session:!0}]]),(0,r.wy)(((0,r.wg)(),(0,r.iD)("p",null,[(0,r.Uk)(" campaign ")])),[[C,{parameter:{1:"Directive campaign test"}},void 0,{campaign:!0,trackPage:!0}]])])):(0,r.kq)("",!0),"noModifiers"===e.activeDirective?(0,r.wy)(((0,r.wg)(),(0,r.iD)("div",s,[(0,r.Uk)(" Product view ")])),[[C,{page:{parameter:{1:"no modifiers"}},customer:{id:"no mod customer",city:"testcity"},track:!0}]]):(0,r.kq)("",!0),"productViewDir"===e.activeDirective?(0,r.wy)(((0,r.wg)(),(0,r.iD)("div",d,[(0,r.Uk)(" Product view ")])),[[C,{id:"Directive product view test",cost:99.9,quantity:1},void 0,{product:!0,view:!0,track:!0}]]):(0,r.kq)("",!0),"productBasketDir"===e.activeDirective?(0,r.wy)(((0,r.wg)(),(0,r.iD)("div",v,[(0,r.Uk)(" Product basket ")])),[[C,{id:"Directive product basket test",cost:99.9,quantity:1},void 0,{product:!0,basket:!0,track:!0}]]):(0,r.kq)("",!0),"productConfirmationDir"===e.activeDirective?(0,r.wy)(((0,r.wg)(),(0,r.iD)("div",u,[(0,r.Uk)(" Product confirmation ")])),[[C,{id:"Directive product confirmation test",cost:99.9,status:"confirmation",quantity:1},void 0,{product:!0,track:!0}]]):(0,r.kq)("",!0),"productListDir"===e.activeDirective?(0,r.wy)(((0,r.wg)(),(0,r.iD)("div",D,[(0,r.Uk)(" Product view ")])),[[C,{id:"Directive product list test",cost:99.9,status:"list",quantity:1},void 0,{product:!0,track:!0}]]):(0,r.kq)("",!0),"productsDir"===e.activeDirective?(0,r.wy)(((0,r.wg)(),(0,r.iD)("div",k,[(0,r.Uk)(" Several Products ")])),[[C,[{id:"product_1",cost:99.9,quantity:9},{id:"product_2",cost:49.9,quantity:3}],void 0,{products:!0,basket:!0,track:!0}]]):(0,r.kq)("",!0),"productsDirNoStatus"===e.activeDirective?(0,r.wy)(((0,r.wg)(),(0,r.iD)("div",w,[(0,r.Uk)(" Several Products without status ")])),[[C,[{id:"product_1",cost:99.9,quantity:9},{id:"product_2",cost:49.9,quantity:3}],void 0,{products:!0,track:!0}]]):(0,r.kq)("",!0),"actionDir"===e.activeDirective?((0,r.wg)(),(0,r.iD)("div",l,[(0,r.wy)(((0,r.wg)(),(0,r.iD)("p",null,[(0,r.Uk)("Action")])),[[C,"Directive action test",void 0,{action:!0}]]),(0,r.wy)(((0,r.wg)(),(0,r.iD)("p",null,[(0,r.Uk)(" Action parameter ")])),[[C,{parameter:{1:"Action parameter"}},void 0,{action:!0,trackAction:!0}]])])):(0,r.kq)("",!0),"teaserDir"===e.activeDirective?((0,r.wg)(),(0,r.iD)("div",p,[(0,r.wy)(((0,r.wg)(),(0,r.iD)("a",g,[(0,r.Uk)("Teaser")])),[[C,{data:{name:"Directive teaser test",rank:"Main Page Banner",content:"Women Collection",variant:"campaign"},conversion:{type:"view",goal:"order",value:"10%"}},void 0,{teaser_tracking:!0}]])])):(0,r.kq)("",!0),"teaserWithSelectorDir"===e.activeDirective?((0,r.wg)(),(0,r.iD)("div",m,[(0,r.wy)(((0,r.wg)(),(0,r.iD)("p",null,[(0,r.Uk)(" Element with teaser directive ")])),[[C,{selector:"#teaserElement",data:{name:"Directive teaser with selector test",rank:"Main Page Banner",content:"Women Collection",variant:"campaign"},conversion:{type:"view",goal:"order",value:"10%"}},void 0,{teaser_tracking:!0}]]),e.showTeaser?((0,r.wg)(),(0,r.iD)("a",y,"Teaser element")):(0,r.kq)("",!0)])):(0,r.kq)("",!0),"productListExtensionDir"===e.activeDirective?(0,r.wy)(((0,r.wg)(),(0,r.iD)("div",q,[(0,r.Uk)(" product list extension ")])),[[C,{data:{id:"Directive productlist extension test",position:1,cost:49.99,quantity:1}},void 0,{product_list_tracking:!0}]]):(0,r.kq)("",!0),"contentEngagementDir"===e.activeDirective?(0,r.wy)(((0,r.wg)(),(0,r.iD)("div",h,[(0,r.Uk)(" content engagement ")])),[[C,{name:"Directive content engagement test",config:{percentageStepsInAnalytics:5,sendContentEngagement:1,percentageReached:100,secondsReached:30,largeBrowserResolution:1080,largeBrowserSeconds:1,mediumBrowserResolution:700,mediumBrowserSeconds:1,smallBrowserResolution:400,smallBrowserSeconds:1}},void 0,{content_engagement:!0}]]):(0,r.kq)("",!0)])}var U=i(5865),S=(0,r.aZ)({name:"Directive",setup(){U.Z.$webtrekk.extension("")},data(){return{activeDirective:"none",showTeaser:!1,directiveList:["pageDir","noModifiers","productViewDir","productBasketDir","productConfirmationDir","productListDir","productsDir","productsDirNoStatus","actionDir","teaserDir","teaserWithSelectorDir","productListExtensionDir","contentEngagementDir"]}},methods:{clickHandler:function(e){this.activeDirective=e,"teaserWithSelectorDir"===e&&window.setTimeout((()=>{this.showTeaser=!0}),1e3)}}}),C=i(89);const P=(0,C.Z)(S,[["render",f]]);var _=P}}]);
//# sourceMappingURL=directive.85986004.js.map