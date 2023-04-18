"use strict";(self["webpackChunkvue2"]=self["webpackChunkvue2"]||[]).push([[77],{3750:function(e,t,i){i.r(t),i.d(t,{default:function(){return v}});var r=function(){var e=this,t=e._self._c;return t("div",[t("h1",[e._v("Directive tests")]),t("p",{directives:[{name:"webtrekk",rawName:"v-webtrekk.deactivateAutoTracking",value:!0,expression:"true",modifiers:{deactivateAutoTracking:!0}}]},[e._v("Deactivate auto tracking")]),t("p",[e._v("Current directive: "+e._s(e.activeDirective))]),e._l(e.directiveList,(function(i){return t("button",{key:i,staticClass:"button",attrs:{id:i},on:{click:function(t){return e.clickHandler(i)}}},[e._v(" "+e._s(i)+" ")])})),"pageDir"===e.activeDirective?t("div",[t("p",{directives:[{name:"webtrekk",rawName:"v-webtrekk.page",value:{parameter:{1:"Directive page test"}},expression:"{ parameter: { 1: 'Directive page test' } }",modifiers:{page:!0}}]},[e._v(" Page ")]),t("p",{directives:[{name:"webtrekk",rawName:"v-webtrekk.customer",value:"Directive customer test",expression:"'Directive customer test'",modifiers:{customer:!0}}]},[e._v("Customer")]),t("p",{directives:[{name:"webtrekk",rawName:"v-webtrekk.session",value:{parameter:{1:"Directive session test"}},expression:"{\n                parameter: { 1: 'Directive session test' },\n            }",modifiers:{session:!0}}]},[e._v(" Session ")]),t("p",{directives:[{name:"webtrekk",rawName:"v-webtrekk.campaign.trackPage",value:{parameter:{1:"Directive campaign test"}},expression:"{\n                parameter: { 1: 'Directive campaign test' },\n            }",modifiers:{campaign:!0,trackPage:!0}}]},[e._v(" campaign ")])]):e._e(),"noModifiers"===e.activeDirective?t("div",{directives:[{name:"webtrekk",rawName:"v-webtrekk",value:{page:{parameter:{1:"no modifiers"}},customer:{id:"no mod customer",city:"testcity"},track:!0},expression:"{\n            page: {\n                parameter: {\n                    1: 'no modifiers',\n                },\n            },\n            customer: {\n                id: 'no mod customer',\n                city: 'testcity',\n            },\n            track: true,\n        }"}]},[e._v(" Product view ")]):e._e(),"productViewDir"===e.activeDirective?t("div",{directives:[{name:"webtrekk",rawName:"v-webtrekk.product.view.track",value:{id:"Directive product view test",cost:99.9,quantity:1},expression:"{\n            id: 'Directive product view test',\n            cost: 99.9,\n            quantity: 1,\n        }",modifiers:{product:!0,view:!0,track:!0}}]},[e._v(" Product view ")]):e._e(),"productBasketDir"===e.activeDirective?t("div",{directives:[{name:"webtrekk",rawName:"v-webtrekk.product.basket.track",value:{id:"Directive product basket test",cost:99.9,quantity:1},expression:"{\n            id: 'Directive product basket test',\n            cost: 99.9,\n            quantity: 1,\n        }",modifiers:{product:!0,basket:!0,track:!0}}]},[e._v(" Product basket ")]):e._e(),"productConfirmationDir"===e.activeDirective?t("div",{directives:[{name:"webtrekk",rawName:"v-webtrekk.product.track",value:{id:"Directive product confirmation test",cost:99.9,status:"confirmation",quantity:1},expression:"{\n            id: 'Directive product confirmation test',\n            cost: 99.9,\n            status: 'confirmation',\n            quantity: 1,\n        }",modifiers:{product:!0,track:!0}}]},[e._v(" Product confirmation ")]):e._e(),"productListDir"===e.activeDirective?t("div",{directives:[{name:"webtrekk",rawName:"v-webtrekk.product.trackAction",value:{id:"Directive product list test",cost:99.9,status:"list",quantity:1},expression:"{\n            id: 'Directive product list test',\n            cost: 99.9,\n            status: 'list',\n            quantity: 1,\n        }",modifiers:{product:!0,trackAction:!0}}]},[e._v(" Product list directive ")]):e._e(),"productsDir"===e.activeDirective?t("div",{directives:[{name:"webtrekk",rawName:"v-webtrekk.products.basket.track",value:[{id:"product_1",cost:99.9,quantity:9},{id:"product_2",cost:49.9,quantity:3}],expression:"[\n            {\n                id: 'product_1',\n                cost: 99.9,\n                quantity: 9,\n            },\n            {\n                id: 'product_2',\n                cost: 49.9,\n                quantity: 3,\n            },\n        ]",modifiers:{products:!0,basket:!0,track:!0}}]},[e._v(" Several Products ")]):e._e(),"productsDirNoStatus"===e.activeDirective?t("div",{directives:[{name:"webtrekk",rawName:"v-webtrekk.products.track",value:[{id:"product_1",cost:99.9,quantity:9},{id:"product_2",cost:49.9,quantity:3}],expression:"[\n            {\n                id: 'product_1',\n                cost: 99.9,\n                quantity: 9,\n            },\n            {\n                id: 'product_2',\n                cost: 49.9,\n                quantity: 3,\n            },\n        ]",modifiers:{products:!0,track:!0}}]},[e._v(" Several Products without status ")]):e._e(),"actionDir"===e.activeDirective?t("div",[t("p",{directives:[{name:"webtrekk",rawName:"v-webtrekk.action",value:"Directive action test",expression:"'Directive action test'",modifiers:{action:!0}}]},[e._v("Action")]),t("p",{directives:[{name:"webtrekk",rawName:"v-webtrekk.action.trackAction",value:{parameter:{1:"Action parameter"}},expression:"{\n                parameter: { 1: 'Action parameter' },\n            }",modifiers:{action:!0,trackAction:!0}}]},[e._v(" Action parameter ")])]):e._e(),"teaserDir"===e.activeDirective?t("div",[t("a",{directives:[{name:"webtrekk",rawName:"v-webtrekk.teaser_tracking",value:{data:{name:"Directive teaser test",rank:"Main Page Banner",content:"Women Collection",variant:"campaign"},conversion:{type:"view",goal:"order",value:"10%"}},expression:"{\n                data: {\n                    name: 'Directive teaser test',\n                    rank: 'Main Page Banner',\n                    content: 'Women Collection',\n                    variant: 'campaign',\n                },\n                conversion: {\n                    type: 'view',\n                    goal: 'order',\n                    value: '10%',\n                },\n            }",modifiers:{teaser_tracking:!0}}],attrs:{href:"#"}},[e._v("Teaser")])]):e._e(),"teaserWithSelectorDir"===e.activeDirective?t("div",[t("p",{directives:[{name:"webtrekk",rawName:"v-webtrekk.teaser_tracking",value:{selector:"#teaserElement",data:{name:"Directive teaser with selector test",rank:"Main Page Banner",content:"Women Collection",variant:"campaign"},conversion:{type:"view",goal:"order",value:"10%"}},expression:"{\n                selector: '#teaserElement',\n                data: {\n                    name: 'Directive teaser with selector test',\n                    rank: 'Main Page Banner',\n                    content: 'Women Collection',\n                    variant: 'campaign',\n                },\n                conversion: {\n                    type: 'view',\n                    goal: 'order',\n                    value: '10%',\n                },\n            }",modifiers:{teaser_tracking:!0}}]},[e._v(" Element with teaser directive ")]),e.showTeaser?t("a",{attrs:{id:"teaserElement",href:"#"}},[e._v("Teaser element")]):e._e()]):e._e(),"productListExtensionDir"===e.activeDirective?t("div",{directives:[{name:"webtrekk",rawName:"v-webtrekk.product_list_tracking",value:{data:{id:"Directive productlist extension test",position:1,cost:49.99,quantity:1}},expression:"{\n            data: {\n                id: 'Directive productlist extension test',\n                position: 1,\n                cost: 49.99,\n                quantity: 1,\n            },\n        }",modifiers:{product_list_tracking:!0}}]},[e._v(" product list extension ")]):e._e(),"contentEngagementDir"===e.activeDirective?t("div",{directives:[{name:"webtrekk",rawName:"v-webtrekk.content_engagement",value:{name:"Directive content engagement test",config:{percentageStepsInAnalytics:5,sendContentEngagement:1,percentageReached:100,secondsReached:30,largeBrowserResolution:1080,largeBrowserSeconds:1,mediumBrowserResolution:700,mediumBrowserSeconds:1,smallBrowserResolution:400,smallBrowserSeconds:1}},expression:"{\n            name: 'Directive content engagement test',\n            config: {\n                percentageStepsInAnalytics: 5,\n                sendContentEngagement: 1,\n                percentageReached: 100,\n                secondsReached: 30,\n                largeBrowserResolution: 1080,\n                largeBrowserSeconds: 1,\n                mediumBrowserResolution: 700,\n                mediumBrowserSeconds: 1,\n                smallBrowserResolution: 400,\n                smallBrowserSeconds: 1,\n            },\n        }",modifiers:{content_engagement:!0}}]},[e._v(" content engagement ")]):e._e()],2)},n=[],a={name:"Directive",created(){this.$webtrekk.extension("")},data(){return{activeDirective:"none",showTeaser:!1,directiveList:["pageDir","noModifiers","productViewDir","productBasketDir","productConfirmationDir","productListDir","productsDir","productsDirNoStatus","actionDir","teaserDir","teaserWithSelectorDir","productListExtensionDir","contentEngagementDir"]}},methods:{clickHandler:function(e){this.activeDirective=e,"teaserWithSelectorDir"===e&&window.setTimeout((()=>{this.showTeaser=!0}),1e3)}}},s=a,c=i(1001),o=(0,c.Z)(s,r,n,!1,null,null,null),v=o.exports}}]);
//# sourceMappingURL=directive.08f193e6.js.map