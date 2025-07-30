(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@webtrekk-smart-pixel/core'), require('vue')) :
  typeof define === 'function' && define.amd ? define(['exports', '@webtrekk-smart-pixel/core', 'vue'], factory) :
  (global = global || self, factory(global['@webtrekk-smart-pixel/vue'] = {}, global.wtSmart, global.Vue));
}(this, (function (exports, wtSmart, vue) { 'use strict';

  wtSmart = wtSmart && Object.prototype.hasOwnProperty.call(wtSmart, 'default') ? wtSmart['default'] : wtSmart;

  function asyncGeneratorStep(n, t, e, r, o, a, c) {
    try {
      var i = n[a](c),
        u = i.value;
    } catch (n) {
      return void e(n);
    }
    i.done ? t(u) : Promise.resolve(u).then(r, o);
  }
  function _asyncToGenerator(n) {
    return function () {
      var t = this,
        e = arguments;
      return new Promise(function (r, o) {
        var a = n.apply(t, e);
        function _next(n) {
          asyncGeneratorStep(a, r, o, _next, _throw, "next", n);
        }
        function _throw(n) {
          asyncGeneratorStep(a, r, o, _next, _throw, "throw", n);
        }
        _next(void 0);
      });
    };
  }
  function _classCallCheck(a, n) {
    if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
  }
  function _defineProperties(e, r) {
    for (var t = 0; t < r.length; t++) {
      var o = r[t];
      o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o);
    }
  }
  function _createClass(e, r, t) {
    return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", {
      writable: !1
    }), e;
  }
  function _defineProperty(e, r, t) {
    return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
      value: t,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : e[r] = t, e;
  }
  function ownKeys(e, r) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var o = Object.getOwnPropertySymbols(e);
      r && (o = o.filter(function (r) {
        return Object.getOwnPropertyDescriptor(e, r).enumerable;
      })), t.push.apply(t, o);
    }
    return t;
  }
  function _objectSpread2(e) {
    for (var r = 1; r < arguments.length; r++) {
      var t = null != arguments[r] ? arguments[r] : {};
      r % 2 ? ownKeys(Object(t), !0).forEach(function (r) {
        _defineProperty(e, r, t[r]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) {
        Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
      });
    }
    return e;
  }
  function _regenerator() {
    /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */
    var e,
      t,
      r = "function" == typeof Symbol ? Symbol : {},
      n = r.iterator || "@@iterator",
      o = r.toStringTag || "@@toStringTag";
    function i(r, n, o, i) {
      var c = n && n.prototype instanceof Generator ? n : Generator,
        u = Object.create(c.prototype);
      return _regeneratorDefine(u, "_invoke", function (r, n, o) {
        var i,
          c,
          u,
          f = 0,
          p = o || [],
          y = !1,
          G = {
            p: 0,
            n: 0,
            v: e,
            a: d,
            f: d.bind(e, 4),
            d: function (t, r) {
              return i = t, c = 0, u = e, G.n = r, a;
            }
          };
        function d(r, n) {
          for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) {
            var o,
              i = p[t],
              d = G.p,
              l = i[2];
            r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0));
          }
          if (o || r > 1) return a;
          throw y = !0, n;
        }
        return function (o, p, l) {
          if (f > 1) throw TypeError("Generator is already running");
          for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) {
            i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u);
            try {
              if (f = 2, i) {
                if (c || (o = "next"), t = i[o]) {
                  if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object");
                  if (!t.done) return t;
                  u = t.value, c < 2 && (c = 0);
                } else 1 === c && (t = i.return) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1);
                i = e;
              } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break;
            } catch (t) {
              i = e, c = 1, u = t;
            } finally {
              f = 1;
            }
          }
          return {
            value: t,
            done: y
          };
        };
      }(r, o, i), !0), u;
    }
    var a = {};
    function Generator() {}
    function GeneratorFunction() {}
    function GeneratorFunctionPrototype() {}
    t = Object.getPrototypeOf;
    var c = [][n] ? t(t([][n]())) : (_regeneratorDefine(t = {}, n, function () {
        return this;
      }), t),
      u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c);
    function f(e) {
      return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e;
    }
    return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine(u), _regeneratorDefine(u, o, "Generator"), _regeneratorDefine(u, n, function () {
      return this;
    }), _regeneratorDefine(u, "toString", function () {
      return "[object Generator]";
    }), (_regenerator = function () {
      return {
        w: i,
        m: f
      };
    })();
  }
  function _regeneratorDefine(e, r, n, t) {
    var i = Object.defineProperty;
    try {
      i({}, "", {});
    } catch (e) {
      i = 0;
    }
    _regeneratorDefine = function (e, r, n, t) {
      if (r) i ? i(e, r, {
        value: n,
        enumerable: !t,
        configurable: !t,
        writable: !t
      }) : e[r] = n;else {
        function o(r, n) {
          _regeneratorDefine(e, r, function (e) {
            return this._invoke(r, n, e);
          });
        }
        o("next", 0), o("throw", 1), o("return", 2);
      }
    }, _regeneratorDefine(e, r, n, t);
  }
  function _toPrimitive(t, r) {
    if ("object" != typeof t || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
      var i = e.call(t, r || "default");
      if ("object" != typeof i) return i;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
  }
  function _toPropertyKey(t) {
    var i = _toPrimitive(t, "string");
    return "symbol" == typeof i ? i : i + "";
  }
  function _typeof(o) {
    "@babel/helpers - typeof";

    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
      return typeof o;
    } : function (o) {
      return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, _typeof(o);
  }

  /**
   * @type {SmartPixel|null}
   */
  var pixel_ = null;

  /**
   * @returns {Window}
   */
  var getWindow_ = function getWindow_() {
    return typeof window !== 'undefined' ? window : null;
  };

  /**
   * @returns {HTMLDocument}
   */
  var getDocument_ = function getDocument_() {
    return typeof window !== 'undefined' && typeof window.document !== 'undefined' ? window.document : null;
  };
  var emptyObject = {};

  /**
   *
   */
  var init_ = function init_() {
    var window_ = getWindow_();
    var document_ = getDocument_();
    if (window_ !== null && document_ !== null) {
      pixel_ = wtSmart.use(window_, document_);
      window_['wtSmart'] = pixel_;
      window_['wtSmart']['_ps'](8, '2.1.0');
    }
  };

  /**
   * @constructor
   */
  var WebtrekkSmartPixelVue = /*#__PURE__*/function () {
    function WebtrekkSmartPixelVue() {
      _classCallCheck(this, WebtrekkSmartPixelVue);
      /**
      * @type {boolean}
      */
      this.deactivateAutoTracking = false;
    }

    /**
     * @param {function(wtSmart: SmartPixel)} call
     */
    // eslint-disable-next-line
    return _createClass(WebtrekkSmartPixelVue, [{
      key: "call",
      value: function call(_call) {
        if (pixel_ === null) {
          init_();
        }
        if (pixel_ !== null) {
          pixel_.push(_call);
        }
      }

      /**
       * @param {object} data
       */
    }, {
      key: "init",
      value: function init() {
        var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : emptyObject;
        this.call(function (pix) {
          pix.init.add(data);
        });
      }

      /**
       * @param {object} data
       */
    }, {
      key: "advanced",
      value: function advanced() {
        var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : emptyObject;
        this.call(function (pix) {
          pix.advanced.add(data);
        });
      }

      /**
       * @param {string} name
       * @param {object} data
       */
    }, {
      key: "page",
      value: function page() {
        var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
        var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : emptyObject;
        this.call(function (pix) {
          pix.page.data.add(name, data);
        });
      }

      /**
       * @param {string} name
       * @param {object} data
       */
    }, {
      key: "action",
      value: function action() {
        var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
        var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : emptyObject;
        this.call(function (pix) {
          pix.action.data.add(name, data);
        });
      }

      /**
       * @param {object} data
       */
    }, {
      key: "session",
      value: function session() {
        var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : emptyObject;
        this.call(function (pix) {
          pix.session.data.add(data);
        });
      }

      /**
       * @param {object} data
       */
    }, {
      key: "campaign",
      value: function campaign() {
        var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : emptyObject;
        this.call(function (pix) {
          pix.campaign.data.add(data);
        });
      }

      /**
       * @param {object} data
       */
    }, {
      key: "engage",
      value: function engage() {
        var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : emptyObject;
        this.call(function (pix) {
          pix.engage.data.add(data);
        });
      }

      /**
       * @param {string} id
       * @param {object} data
       * @param {boolean} validation
       */
    }, {
      key: "customer",
      value: function customer() {
        var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
        var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : emptyObject;
        var validation = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
        this.call(function (pix) {
          pix.customer.data.add(id, data, validation);
        });
      }

      /**
       * @param {string} action
       * @param {object} data
       */
    }, {
      key: "product",
      value: function product() {
        var action = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'view';
        var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : emptyObject;
        this.call(function (pix) {
          // const method = action === 'view' || action === 'basket' ? 'set' : 'add';
          pix.product[action].data.add([data]);
        });
      }

      /**
       * @param {string} action
       * @param {Array} data
       */
    }, {
      key: "products",
      value: function products() {
        var action = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'view';
        var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
        this.call(function (pix) {
          // const method = action === 'view' || action === 'basket' ? 'set' : 'add';
          pix.product[action].data.add(data);
        });
      }

      /**
       * @param {object} data
       */
    }, {
      key: "order",
      value: function order() {
        var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : emptyObject;
        this.call(function (pix) {
          pix.order.data.add(data);
        });
      }

      /**
       * @param {string} extension
       * @param {string} action
       * @param {object} config
       */
    }, {
      key: "extension",
      value: function extension() {
        var _extension = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
        var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'activate';
        var config = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : emptyObject;
        if (!_extension) {
          return;
        }
        this.call(function (pix) {
          pix.extension[_extension][action](config);
        });
      }

      /**
       * @param {boolean} keepData
       */
    }, {
      key: "track",
      value: function track() {
        var keepData = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
        this.call(function (pix) {
          pix.track(keepData);
        });
      }

      /**
       * @param {boolean} keepData
       */
    }, {
      key: "trackPage",
      value: function trackPage() {
        var keepData = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
        this.call(function (pix) {
          pix.trackPage(keepData);
        });
      }

      /**
       * @param {boolean} keepData
       */
    }, {
      key: "trackAction",
      value: function trackAction() {
        var keepData = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
        this.call(function (pix) {
          pix.trackAction(keepData);
        });
      }

      /**
       *
       */
    }, {
      key: "clear",
      value: function clear() {
        this.call(function (pix) {
          pix.page.data.remove();
          pix.product.list.data.remove();
          pix.product.view.data.remove();
          pix.product.basket.data.remove();
          pix.product.addToCart.data.remove();
          pix.product.deleteFromCart.data.remove();
          pix.product.checkout.data.remove();
          pix.product.confirmation.data.remove();
          pix.product.addToWishlist.data.remove();
          pix.product.deleteFromWishlist.data.remove();
          pix.order.data.remove();
        });
      }
    }]);
  }();
  var SmartPixelVue = new WebtrekkSmartPixelVue();

  var PRODUCT_STATUS_FILTER = /^(?:list|view|basket|addToCart|deleteFromCart|checkout|confirmation|addToWishlist|deleteFromWishlist)$/;

  /**
   * @param {Object} data
   */
  var actionHandler = function actionHandler(data) {
    if (typeof data.action === 'string') {
      SmartPixelVue.action({
        name: data.action
      });
    } else {
      SmartPixelVue.action(data.action);
    }
  };

  /**
   * @param {Object} data
   */
  var customerHandler = function customerHandler(data) {
    if (typeof data.customer === 'string') {
      SmartPixelVue.customer(data.customer);
    } else {
      SmartPixelVue.customer(data.customer.id, data.customer, data.customer.validation);
    }
  };

  /**
   * @param {Object} data
   */
  var productHandler = function productHandler(data) {
    var productStatusFilter = PRODUCT_STATUS_FILTER;
    var productStatusList = Object.keys(data).filter(function (key) {
      return productStatusFilter.test(key);
    });
    if (productStatusList.length === 0) {
      var status = data.product.status || 'view';
      SmartPixelVue.product(status, data.product);
    } else {
      productStatusList.forEach(function (status) {
        SmartPixelVue.product(status, data.product);
      });
    }
  };

  /**
   * @param {Object} data
   */
  var productsHandler = function productsHandler(data) {
    var productStatusFilter = PRODUCT_STATUS_FILTER;
    var productStatusList = Object.keys(data).filter(function (key) {
      return productStatusFilter.test(key);
    });
    if (productStatusList.length === 0) {
      var addProducts = function addProducts(productArray) {
        productArray.forEach(function (product) {
          var status = product.status || 'view';
          SmartPixelVue.product(status, product);
        });
      };
      addProducts(data.products);
    } else {
      productStatusList.forEach(function (status) {
        SmartPixelVue.products(status, data.products);
      });
    }
  };

  /**
   * @param {Object} data
   * @param {HTMLElement} element
   */
  var teaserTrackingHandler = function teaserTrackingHandler(data, element) {
    var selector = data.teaser_tracking.selector ? data.teaser_tracking.selector : element;
    SmartPixelVue.call(function (wtSmart) {
      wtSmart.extension.teaser_tracking.add(_objectSpread2(_objectSpread2({}, data.teaser_tracking), {}, {
        selector: selector
      }));
    });
  };

  /**
   * @param {Object} data
   * @param {HTMLElement} element
   */
  var productListTrackingHandler = function productListTrackingHandler(data, element) {
    var selector = data.product_list_tracking.selector ? data.product_list_tracking.selector : element;
    SmartPixelVue.call(function (wtSmart) {
      wtSmart.extension.product_list_tracking.add(_objectSpread2(_objectSpread2({}, data.product_list_tracking), {}, {
        selector: selector
      }));
    });
  };

  /**
   * @param {Object} data
   * @param {HTMLElement} element
   */
  var contentEngagementHandler = function contentEngagementHandler(data, element) {
    var selector = data.content_engagement.selector ? data.content_engagement.selector : element;
    SmartPixelVue.call(function (wtSmart) {
      wtSmart.extension.content_engagement.add(_objectSpread2(_objectSpread2({}, data.content_engagement), {}, {
        selector: selector
      }));
    });
  };

  /**
   * @param {Object} data
   * @param {Array} keys
   * @param {HTMLElement|null} [element]
   */
  var generalHandler = function generalHandler(data, keys) {
    var element = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
    // setTimeout(() => {
    var productStatusFilter = PRODUCT_STATUS_FILTER;
    var trackFilter = /^(?:track|trackAction|trackPage)$/;
    keys
    // make sure track is used last by filtering it out here
    .filter(function (key) {
      return !productStatusFilter.test(key);
    }).filter(function (key) {
      return !trackFilter.test(key);
    }).forEach(function (key) {
      switch (key) {
        case 'action':
          actionHandler(data);
          break;
        case 'customer':
          customerHandler(data);
          break;
        case 'product':
          productHandler(data);
          break;
        case 'products':
          productsHandler(data);
          break;
        case 'teaser_tracking':
          teaserTrackingHandler(data, element);
          break;
        case 'product_list_tracking':
          productListTrackingHandler(data, element);
          break;
        case 'content_engagement':
          contentEngagementHandler(data, element);
          break;
        case 'deactivateAutoTracking':
          SmartPixelVue.deactivateAutoTracking = data;
          break;
        default:
          if (SmartPixelVue[key]) {
            SmartPixelVue[key](data[key]);
          }
          break;
      }
    });

    // make sure track is used last
    var shallDataBeKept = function shallDataBeKept(key) {
      return data[key] === true || data[key][key] === true;
    };
    keys.filter(function (key) {
      return trackFilter.test(key);
    }).forEach(function (key) {
      switch (key) {
        case 'track':
          SmartPixelVue.track(shallDataBeKept(key));
          break;
        case 'trackAction':
          SmartPixelVue.trackAction(shallDataBeKept(key));
          break;
        case 'trackPage':
          SmartPixelVue.trackPage(shallDataBeKept(key));
          break;
      }
    });
    // }, 0);
  };

  var webtrekkDirective = {
    name: 'webtrekk',
    mounted: function mounted(element, binding) {
      var dataValue = binding.value;
      var mode = binding.modifiers;
      var keyValues = _typeof(dataValue) === 'object' ? Object.keys(dataValue) : [];

      /**
       * @param {Object} data
       * @param {Object} modeObj
       */
      var modHandler = function modHandler(data, modeObj) {
        // generates a keylist and data object for general handler to use
        // based on active mods and the data given
        var modes = Object.keys(modeObj);
        var generalData = {};
        modes.forEach(function (m) {
          generalData[m] = data;
        });
        generalHandler(generalData, modes, element);
      };
      if (Object.entries(mode).length === 0) {
        generalHandler(dataValue, keyValues, element);
      } else {
        modHandler(dataValue, mode);
      }
    }
  };
  webtrekkDirective.inserted = webtrekkDirective.mounted;

  var autoTrack = function autoTrack(config) {
    vue.nextTick(function () {
      if (config.activateLinkTracking) {
        SmartPixelVue.extension('action', 'reload');
      }
      if (SmartPixelVue.deactivateAutoTracking) {
        SmartPixelVue.deactivateAutoTracking = false;
      } else {
        // all the setTimeout hacks have to be done because of this issue: https://github.com/vuejs/vue-router/pull/2292, otherwise linkTracking is triggered after autoTracking
        // Otherwise automatic linkTracking requests come after PI
        setTimeout(function () {
          SmartPixelVue.call(function (pix) {
            pix.track();
          });
        }, 0);
      }
    });
  };
  var mappBeforeResolve = function mappBeforeResolve(to) {
    SmartPixelVue.clear();
    var routerComponent = to.matched[0].components["default"];
    var componentMappData = [];
    var _getComponentMappDataRecursively = function getComponentMappDataRecursively(component) {
      if (component.data && component.data().webtrekk) {
        componentMappData.push(component.data().webtrekk);
      }
      if (component.hasOwnProperty('components')) {
        Object.keys(component.components).forEach(function (componentName) {
          _getComponentMappDataRecursively(component.components[componentName]);
        });
      }
    };
    _getComponentMappDataRecursively(routerComponent);
    componentMappData.forEach(function (data) {
      generalHandler(data, Object.keys(data));
    });
  };

  var webtrekk = {
    install: function install(Vue, webtrekkConfig) {
      Vue.config.globalProperties.$webtrekk = SmartPixelVue;
      Vue.config.globalProperties.$mapp = SmartPixelVue;
      if (webtrekkConfig.activateAutoTracking && webtrekkConfig.activateAutoTracking.beforeResolve) {
        webtrekkConfig.activateAutoTracking.beforeResolve(function (to) {
          mappBeforeResolve(to);
        });
        webtrekkConfig.activateAutoTracking.afterEach(/*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
          return _regenerator().w(function (_context) {
            while (1) switch (_context.n) {
              case 0:
                autoTrack(webtrekkConfig);
              case 1:
                return _context.a(2);
            }
          }, _callee);
        })));
      }

      // initialization of global Webtrekk configuration
      SmartPixelVue.init(webtrekkConfig);
      SmartPixelVue.advanced(webtrekkConfig);
      // optional activation of auto linktracking
      if (webtrekkConfig.activateLinkTracking) {
        SmartPixelVue.extension('action');
      }

      // optional activation of teaser_tracking
      var teaser = webtrekkConfig.activateTeaserTracking;
      if (teaser) {
        SmartPixelVue.extension('teaser_tracking');
        SmartPixelVue.call(function (wtSmart) {
          wtSmart.extension.teaser_tracking.config(teaser);
        });
      }

      // optional activation of product_list_tracking
      var product = webtrekkConfig.activateProductListTracking;
      if (product) {
        SmartPixelVue.extension('product_list_tracking');
        SmartPixelVue.call(function (wtSmart) {
          wtSmart.extension.product_list_tracking.config(product);
        });
      }

      // optional activation of content_engagement
      var contentEngagement = webtrekkConfig.activateContentEngagement;
      if (contentEngagement) {
        SmartPixelVue.extension('content_engagement');
        SmartPixelVue.call(function (wtSmart) {
          wtSmart.extension.content_engagement.config(contentEngagement);
        });
      }

      // init v-webtrekk directive
      Vue.directive(webtrekkDirective.name, webtrekkDirective);
    }
  };

  exports.default = webtrekk;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
