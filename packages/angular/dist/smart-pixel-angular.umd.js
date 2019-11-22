(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@webtrekk-smart-pixel/core'), require('@angular/router'), require('rxjs/operators')) :
    typeof define === 'function' && define.amd ? define(['exports', '@angular/core', '@webtrekk-smart-pixel/core', '@angular/router', 'rxjs/operators'], factory) :
    (global = global || self, factory(global['@webtrekk-smart-pixel/angular'] = {}, global.ng.core, global.wtSmart, global.ng.router, global.Rx.operators));
}(this, function (exports, core, wtSmart, router, operators) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    }

    var directiveSelector = '[wt-advanced-data],'
        + '[wt-campaign-data],'
        + '[wt-customer-data],'
        + '[wt-init-data],'
        + '[wt-order-data],'
        + '[wt-page-data],'
        + '[wt-product-data],'
        + '[wt-session-data]';
    var DataDirective = /** @class */ (function () {
        function DataDirective(pixel) {
            this.pixel = pixel;
        }
        DataDirective.prototype.ngAfterContentInit = function () {
            var _this = this;
            if (this.wtAdvancedData) {
                this.pixel.advanced(this.wtAdvancedData);
            }
            if (this.wtCampaignData) {
                this.pixel.campaign(this.wtCampaignData);
            }
            if (this.wtCustomerData) {
                this.pixel.customer(this.wtCustomerData.id, this.wtCustomerData, this.wtCustomerData.validation);
            }
            if (this.wtInitData) {
                this.pixel.init(this.wtInitData);
            }
            if (this.wtOrderData) {
                this.pixel.order(this.wtOrderData);
            }
            if (this.wtPageData) {
                this.pixel.page(this.wtPageData.name, this.wtPageData);
            }
            if (this.wtProductData) {
                this.pixel.product(this.wtProductData.action, this.wtProductData);
            }
            if (this.wtSessionData) {
                this.pixel.session(this.wtSessionData);
            }
            if (typeof this.wtTrack !== 'undefined') {
                setTimeout(function () {
                    _this.pixel.track();
                }, 0);
            }
        };
        __decorate([
            core.Input('wt-advanced-data')
        ], DataDirective.prototype, "wtAdvancedData", void 0);
        __decorate([
            core.Input('wt-campaign-data')
        ], DataDirective.prototype, "wtCampaignData", void 0);
        __decorate([
            core.Input('wt-customer-data')
        ], DataDirective.prototype, "wtCustomerData", void 0);
        __decorate([
            core.Input('wt-init-data')
        ], DataDirective.prototype, "wtInitData", void 0);
        __decorate([
            core.Input('wt-order-data')
        ], DataDirective.prototype, "wtOrderData", void 0);
        __decorate([
            core.Input('wt-page-data')
        ], DataDirective.prototype, "wtPageData", void 0);
        __decorate([
            core.Input('wt-product-data')
        ], DataDirective.prototype, "wtProductData", void 0);
        __decorate([
            core.Input('wt-session-data')
        ], DataDirective.prototype, "wtSessionData", void 0);
        __decorate([
            core.Input('wt-track')
        ], DataDirective.prototype, "wtTrack", void 0);
        DataDirective = __decorate([
            core.Directive({
                selector: directiveSelector
            })
        ], DataDirective);
        return DataDirective;
    }());

    var TeaserDirective = /** @class */ (function () {
        function TeaserDirective(elementRef, pixel) {
            this.elementRef = elementRef;
            this.pixel = pixel;
        }
        TeaserDirective.prototype.ngAfterContentInit = function () {
            var _this = this;
            this.pixel.call(function (pix) {
                pix.extension.teaser_tracking.add({
                    selector: ((_this.wtTeaserElement.selector) ? _this.wtTeaserElement.selector : _this.elementRef.nativeElement),
                    data: _this.wtTeaserElement,
                    conversion: _this.wtTeaserElement
                });
            });
        };
        __decorate([
            core.Input('wt-teaser')
        ], TeaserDirective.prototype, "wtTeaserElement", void 0);
        TeaserDirective = __decorate([
            core.Directive({
                selector: '[wt-teaser]',
                exportAs: 'wt-teaser'
            })
        ], TeaserDirective);
        return TeaserDirective;
    }());

    var ProductListDirective = /** @class */ (function () {
        function ProductListDirective(elementRef, pixel) {
            this.elementRef = elementRef;
            this.pixel = pixel;
        }
        ProductListDirective.prototype.ngAfterContentInit = function () {
            var _this = this;
            this.pixel.call(function (pix) {
                pix.extension.product_list_tracking.add({
                    selector: ((_this.wtProductListElement.selector) ? _this.wtProductListElement.selector : _this.elementRef.nativeElement),
                    data: _this.wtProductListElement
                });
            });
        };
        __decorate([
            core.Input('wt-product-list')
        ], ProductListDirective.prototype, "wtProductListElement", void 0);
        ProductListDirective = __decorate([
            core.Directive({
                selector: '[wt-product-list]',
                exportAs: 'wt-product-list'
            })
        ], ProductListDirective);
        return ProductListDirective;
    }());

    var ContentEngagementDirective = /** @class */ (function () {
        function ContentEngagementDirective(elementRef, pixel) {
            this.elementRef = elementRef;
            this.pixel = pixel;
        }
        ContentEngagementDirective.prototype.ngAfterContentInit = function () {
            var _this = this;
            this.pixel.call(function (pix) {
                pix.extension.content_engagement.add({
                    selector: ((_this.wtContentEngagementElement.selector) ? _this.wtContentEngagementElement.selector : _this.elementRef.nativeElement),
                    name: _this.wtContentEngagementElement.name,
                    config: _this.wtContentEngagementElement
                });
            });
        };
        __decorate([
            core.Input('wt-content-engagement')
        ], ContentEngagementDirective.prototype, "wtContentEngagementElement", void 0);
        ContentEngagementDirective = __decorate([
            core.Directive({
                selector: '[wt-content-engagement]',
                exportAs: 'wt-content-engagement'
            })
        ], ContentEngagementDirective);
        return ContentEngagementDirective;
    }());

    var ExtensionDirective = /** @class */ (function () {
        function ExtensionDirective(pixel) {
            this.pixel = pixel;
        }
        ExtensionDirective.prototype.ngAfterContentInit = function () {
            this.pixel.extension(this.wtExtensionData.name, this.wtExtensionData.action, this.wtExtensionData.config);
        };
        __decorate([
            core.Input('wt-extension')
        ], ExtensionDirective.prototype, "wtExtensionData", void 0);
        ExtensionDirective = __decorate([
            core.Directive({
                selector: '[wt-extension]',
                exportAs: 'wt-extension'
            })
        ], ExtensionDirective);
        return ExtensionDirective;
    }());

    var pixel_ = null;
    var getWindow_ = function () {
        return ((typeof window !== 'undefined') ? window : null);
    };
    var getDocument_ = function () {
        return ((typeof window !== 'undefined' && typeof window.document !== 'undefined') ? window.document : null);
    };
    var emptyObject = {};
    var init_ = function () {
        var window_ = getWindow_();
        var document_ = getDocument_();
        if (window_ !== null && document_ !== null) {
            pixel_ = wtSmart.use(window_, document_);
            window_['wtSmart'] = pixel_;
        }
    };
    var WebtrekkSmartPixelAngular = /** @class */ (function () {
        function WebtrekkSmartPixelAngular() {
        }
        WebtrekkSmartPixelAngular.prototype.call = function (call) {
            if (pixel_ === null) {
                init_();
            }
            if (pixel_ !== null) {
                pixel_.push(call);
            }
        };
        WebtrekkSmartPixelAngular.prototype.init = function (data) {
            if (data === void 0) { data = { trackId: '', trackDomain: '' }; }
            this.call(function (pix) {
                pix.init.add(data);
            });
        };
        WebtrekkSmartPixelAngular.prototype.advanced = function (data) {
            if (data === void 0) { data = emptyObject; }
            this.call(function (pix) {
                pix.advanced.add(data);
            });
        };
        WebtrekkSmartPixelAngular.prototype.page = function (name, data) {
            if (name === void 0) { name = ''; }
            if (data === void 0) { data = emptyObject; }
            this.call(function (pix) {
                pix.page.data.add(name, data);
            });
        };
        WebtrekkSmartPixelAngular.prototype.action = function (data) {
            if (data === void 0) { data = emptyObject; }
            this.call(function (pix) {
                pix.action.data.add(data);
            });
        };
        WebtrekkSmartPixelAngular.prototype.session = function (data) {
            if (data === void 0) { data = emptyObject; }
            this.call(function (pix) {
                pix.session.data.add(data);
            });
        };
        WebtrekkSmartPixelAngular.prototype.campaign = function (data) {
            if (data === void 0) { data = { id: '' }; }
            this.call(function (pix) {
                pix.campaign.data.add(data);
            });
        };
        WebtrekkSmartPixelAngular.prototype.customer = function (id, data, validation) {
            if (id === void 0) { id = ''; }
            if (data === void 0) { data = emptyObject; }
            if (validation === void 0) { validation = false; }
            this.call(function (pix) {
                pix.customer.data.add(id, data, validation);
            });
        };
        WebtrekkSmartPixelAngular.prototype.product = function (action, data) {
            if (action === void 0) { action = 'view'; }
            if (data === void 0) { data = { id: '' }; }
            this.call(function (pix) {
                var method = (action === 'view' || action === 'basket') ? 'set' : 'add';
                pix.product[action].data[method]([data]);
            });
        };
        WebtrekkSmartPixelAngular.prototype.products = function (action, data) {
            if (action === void 0) { action = 'view'; }
            if (data === void 0) { data = []; }
            this.call(function (pix) {
                var method = (action === 'view' || action === 'basket') ? 'set' : 'add';
                pix.product[action].data[method](data);
            });
        };
        WebtrekkSmartPixelAngular.prototype.order = function (data) {
            if (data === void 0) { data = { value: '' }; }
            this.call(function (pix) {
                pix.order.data.add(data);
            });
        };
        WebtrekkSmartPixelAngular.prototype.extension = function (extension, action, config) {
            if (extension === void 0) { extension = ''; }
            if (action === void 0) { action = 'activate'; }
            if (config === void 0) { config = emptyObject; }
            if (!extension) {
                return;
            }
            this.call(function (pix) {
                pix.extension[extension][action](config);
            });
        };
        WebtrekkSmartPixelAngular.prototype.track = function (keepData) {
            if (keepData === void 0) { keepData = false; }
            this.call(function (pix) {
                pix.track(keepData);
            });
        };
        WebtrekkSmartPixelAngular.prototype.trackPage = function (keepData) {
            if (keepData === void 0) { keepData = false; }
            this.call(function (pix) {
                pix.trackPage(keepData);
            });
        };
        WebtrekkSmartPixelAngular.prototype.trackAction = function (keepData) {
            if (keepData === void 0) { keepData = false; }
            this.call(function (pix) {
                pix.trackAction(keepData);
            });
        };
        WebtrekkSmartPixelAngular = __decorate([
            core.Injectable()
        ], WebtrekkSmartPixelAngular);
        return WebtrekkSmartPixelAngular;
    }());

    var WEBTREKK_SMART_PIXEL_TOKEN = new core.InjectionToken('WEBTREKK-SMART-PIXEL-ANGULAR');

    var WebtrekkSmartPixelAutoTracking = /** @class */ (function () {
        function WebtrekkSmartPixelAutoTracking(router$1, pixel, config) {
            var _this = this;
            this.router = router$1;
            this.pixel = pixel;
            this.config = config;
            this.pixel.init(this.config);
            if (this.config.activateActions) {
                this.pixel.extension('action', 'activate');
            }
            if (this.config.activateTeaser) {
                this.pixel.extension('teaser_tracking', 'activate');
            }
            if (this.config.activateProductList) {
                this.pixel.extension('product_list_tracking', 'activate');
            }
            if (this.config.activateContentEngagement) {
                this.pixel.extension('content_engagement', 'activate');
            }
            if (this.config.activateAutoTracking || this.config.activateActions) {
                this.router.events.pipe(operators.filter(function (e) { return e instanceof router.NavigationEnd; }), operators.delay(0)).subscribe(function () {
                    if (_this.config.activateAutoTracking) {
                        _this.pixel.trackPage();
                    }
                    if (_this.config.activateActions) {
                        _this.pixel.extension('action', 'reload');
                    }
                });
            }
        }
        WebtrekkSmartPixelAutoTracking = __decorate([
            core.NgModule(),
            __param(2, core.Inject(WEBTREKK_SMART_PIXEL_TOKEN))
        ], WebtrekkSmartPixelAutoTracking);
        return WebtrekkSmartPixelAutoTracking;
    }());

    var DefaultConfig = /** @class */ (function () {
        function DefaultConfig() {
            this.trackId = '';
            this.trackDomain = '';
            this.activateAutoTracking = true;
            this.activateActions = false;
            this.activateTeaser = false;
            this.activateProductList = false;
            this.activateContentEngagement = false;
        }
        return DefaultConfig;
    }());

    // compatibility for v0
    var webtrekkSmartPixelAngular = new WebtrekkSmartPixelAngular();

    var defaultConfig = new DefaultConfig();
    var WebtrekkSmartPixelModule = /** @class */ (function () {
        function WebtrekkSmartPixelModule() {
        }
        WebtrekkSmartPixelModule_1 = WebtrekkSmartPixelModule;
        WebtrekkSmartPixelModule.forRoot = function (conf) {
            if (conf === void 0) { conf = {}; }
            return {
                ngModule: WebtrekkSmartPixelModule_1,
                providers: [
                    {
                        provide: WEBTREKK_SMART_PIXEL_TOKEN,
                        useValue: __assign({}, defaultConfig, conf)
                    },
                    {
                        provide: WebtrekkSmartPixelAngular,
                        useValue: webtrekkSmartPixelAngular
                    }
                ]
            };
        };
        var WebtrekkSmartPixelModule_1;
        WebtrekkSmartPixelModule = WebtrekkSmartPixelModule_1 = __decorate([
            core.NgModule({
                declarations: [
                    DataDirective,
                    ExtensionDirective,
                    TeaserDirective,
                    ProductListDirective,
                    ContentEngagementDirective
                ],
                exports: [
                    DataDirective,
                    ExtensionDirective,
                    TeaserDirective,
                    ProductListDirective,
                    ContentEngagementDirective,
                    WebtrekkSmartPixelAutoTracking
                ],
                imports: [
                    WebtrekkSmartPixelAutoTracking
                ],
                providers: [],
                bootstrap: []
            })
        ], WebtrekkSmartPixelModule);
        return WebtrekkSmartPixelModule;
    }());

    // compatibility for v0
    var webtrekkSmartPixelAngular$1 = new WebtrekkSmartPixelAngular();
    var index = {
        WebtrekkSmartPixelModule: WebtrekkSmartPixelModule,
        WebtrekkSmartPixelAngular: WebtrekkSmartPixelAngular,
        // compatibility for v0
        webtrekkSmartPixelAngular: webtrekkSmartPixelAngular$1
    };

    exports.WebtrekkSmartPixelAngular = WebtrekkSmartPixelAngular;
    exports.WebtrekkSmartPixelModule = WebtrekkSmartPixelModule;
    exports.default = index;
    exports.webtrekkSmartPixelAngular = webtrekkSmartPixelAngular$1;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
