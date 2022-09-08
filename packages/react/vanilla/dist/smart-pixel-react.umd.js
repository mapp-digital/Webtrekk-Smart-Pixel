(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('prop-types'), require('react'), require('react-router-dom'), require('@webtrekk-smart-pixel/core')) :
  typeof define === 'function' && define.amd ? define(['exports', 'prop-types', 'react', 'react-router-dom', '@webtrekk-smart-pixel/core'], factory) :
  (global = global || self, factory(global['@webtrekk-smart-pixel/react'] = {}, global.PropTypes, global.React, global.reactRouterDom, global.wtSmart));
}(this, (function (exports, PropTypes, React, reactRouterDom, wtSmart) { 'use strict';

  PropTypes = PropTypes && Object.prototype.hasOwnProperty.call(PropTypes, 'default') ? PropTypes['default'] : PropTypes;
  var React__default = 'default' in React ? React['default'] : React;
  wtSmart = wtSmart && Object.prototype.hasOwnProperty.call(wtSmart, 'default') ? wtSmart['default'] : wtSmart;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    Object.defineProperty(Constructor, "prototype", {
      writable: false
    });
    return Constructor;
  }

  function _extends() {
    _extends = Object.assign ? Object.assign.bind() : function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];

        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }

      return target;
    };
    return _extends.apply(this, arguments);
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    Object.defineProperty(subClass, "prototype", {
      writable: false
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };
    return _setPrototypeOf(o, p);
  }

  function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;

    try {
      Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    } else if (call !== void 0) {
      throw new TypeError("Derived constructors may only return object or undefined");
    }

    return _assertThisInitialized(self);
  }

  function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();

    return function _createSuperInternal() {
      var Super = _getPrototypeOf(Derived),
          result;

      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf(this).constructor;

        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }

      return _possibleConstructorReturn(this, result);
    };
  }

  var polyfillWithRouter = reactRouterDom.withRouter || function (Component) {
    var ComponentWithRouterProp = function ComponentWithRouterProp(props) {
      var location = reactRouterDom.useLocation();
      var navigate = reactRouterDom.useNavigate();
      var params = reactRouterDom.useParams();
      var history = reactRouterDom.useNavigationType();
      return /*#__PURE__*/React__default.createElement(Component, _extends({
        history: {
          action: history
        },
        router: {
          location: location,
          navigate: navigate,
          params: params
        }
      }, props));
    };

    ComponentWithRouterProp.WrappedComponent = Component;
    return ComponentWithRouterProp;
  };

  var withRouter = polyfillWithRouter;

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
    }
  };
  /**
   * @constructor
   */


  var WebtrekkSmartPixelReact = /*#__PURE__*/function () {
    function WebtrekkSmartPixelReact() {
      _classCallCheck(this, WebtrekkSmartPixelReact);
    }

    _createClass(WebtrekkSmartPixelReact, [{
      key: "call",
      value:
      /**
       * @param {function(wtSmart: SmartPixel)} call
       */
      function call(_call) {
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
          var method = action === 'view' || action === 'basket' ? 'set' : 'add';
          pix.product[action].data[method]([data]);
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
          var method = action === 'view' || action === 'basket' ? 'set' : 'add';
          pix.product[action].data[method](data);
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
    }]);

    return WebtrekkSmartPixelReact;
  }();

  var SmartPixelReact = new WebtrekkSmartPixelReact();

  var WebtrekkReactComponent = /*#__PURE__*/function (_React$Component) {
    _inherits(WebtrekkReactComponent, _React$Component);

    var _super = _createSuper(WebtrekkReactComponent);

    /**
     * @param {string} type
     */
    function WebtrekkReactComponent(type) {
      var _this;

      _classCallCheck(this, WebtrekkReactComponent);

      _this = _super.call(this);
      _this.type = type;
      return _this;
    }
    /**
     * @param {string} type
     * @param {object} props
     */


    _createClass(WebtrekkReactComponent, [{
      key: "addConfigurationData",
      value: function addConfigurationData() {
        var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.type;
        var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.props;
        SmartPixelReact[type](props);
      }
      /**
       * @param {string} type
       * @param {object} props
       */

    }, {
      key: "addTrackingData",
      value: function addTrackingData() {
        var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.type;
        var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.props;
        SmartPixelReact[type](props);
      }
      /**
       * @param {object} props
       */

    }, {
      key: "addPageTrackingData",
      value: function addPageTrackingData() {
        var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props;
        SmartPixelReact.page(props.name, props);
      }
      /**
       * @param {object} props
       */

    }, {
      key: "addCustomerTrackingData",
      value: function addCustomerTrackingData() {
        var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props;
        SmartPixelReact.customer(props.id, props, props.validation);
      }
      /**
       * @param {object} props
       */

    }, {
      key: "addProductTrackingData",
      value: function addProductTrackingData() {
        var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props;
        SmartPixelReact.product(props.action, props);
      }
      /**
       * @param {string} extension
       * @param {string} action
       * @param {object} config
       */

    }, {
      key: "addExtension",
      value: function addExtension(extension) {
        var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'activate';
        var config = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
        SmartPixelReact.extension(extension, action, config);
      }
      /**
       * @param {object} ref
       * @param {object} props
       */

    }, {
      key: "addContentEngagementElement",
      value: function addContentEngagementElement() {
        var ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.elementRef;
        var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.props;
        SmartPixelReact.call(function (pix) {
          pix.extension.content_engagement.add({
            selector: props.selector ? props.selector : ref.current,
            name: props.name,
            config: props
          });
        });
      }
      /**
       * @param {object} ref
       * @param {object} props
       */

    }, {
      key: "addProductListElement",
      value: function addProductListElement() {
        var ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.elementRef;
        var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.props;
        SmartPixelReact.call(function (pix) {
          pix.extension.product_list_tracking.add({
            selector: props.selector ? props.selector : ref.current,
            data: props
          });
        });
      }
      /**
       * @param {object} ref
       * @param {object} props
       */

    }, {
      key: "addTeaserElement",
      value: function addTeaserElement() {
        var ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.elementRef;
        var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.props;
        SmartPixelReact.call(function (pix) {
          pix.extension.teaser_tracking.add({
            selector: props.selector ? props.selector : ref.current,
            data: props,
            conversion: props
          });
        });
      }
      /**
       *
       */

    }, {
      key: "trackPageView",
      value: function trackPageView() {
        SmartPixelReact.trackPage();
      }
      /**
       *
       */

      /*
      trackAction() {
          webtrekkSmartPixelReact.trackAction();
      }
      */

      /**
       * @override
       */

    }, {
      key: "componentDidMount",
      value: function componentDidMount() {
        if (this.type === 'init' || this.type === 'advanced') {
          this.addConfigurationData();
        } else if (this.type === 'page') {
          this.addPageTrackingData();
        } else if (this.type === 'customer') {
          this.addCustomerTrackingData();
        } else if (this.type === 'product') {
          this.addProductTrackingData();
        } else {
          this.addTrackingData();
        }

        if (this.props && this.props.sendInstantly) {
          SmartPixelReact.track();
        }
      }
      /**
       * @override
       */

    }, {
      key: "componentDidUpdate",
      value: function componentDidUpdate() {
        this.componentDidMount();
      }
      /**
       * @override
       *
       * @returns {null}
       */

    }, {
      key: "render",
      value: function render() {
        return null;
      }
    }]);

    return WebtrekkReactComponent;
  }(React__default.Component);

  var WebtrekkAutoTracking = /*#__PURE__*/function (_WebtrekkReactCompone) {
    _inherits(WebtrekkAutoTracking, _WebtrekkReactCompone);

    var _super = _createSuper(WebtrekkAutoTracking);

    function WebtrekkAutoTracking() {
      _classCallCheck(this, WebtrekkAutoTracking);

      return _super.call(this, 'auto');
    }

    _createClass(WebtrekkAutoTracking, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        this.addConfigurationData('init');

        if (this.props.activateActions) {
          this.addExtension('action');
        }

        if (this.props.activateTeaser) {
          this.addExtension('teaser_tracking');
        }

        if (this.props.activateProductList) {
          this.addExtension('product_list_tracking');
        }

        if (this.props.activateContentEngagement) {
          this.addExtension('content_engagement');
        }

        if (this.props.activateAutoTracking) {
          this.trackPageView();
        }
      }
    }, {
      key: "componentDidUpdate",
      value: function componentDidUpdate(_ref) {
        var _this = this;

        var history = _ref.history;

        if (this.props.activateAutoTracking || this.props.activateActions) {
          if (history.action === 'PUSH' || history.action === 'POP') {
            window.setTimeout(function () {
              if (_this.props.activateAutoTracking) {
                _this.trackPageView();
              }

              if (_this.props.activateActions) {
                _this.addExtension('action', 'reload');
              }
            }, 500);
          }
        }
      }
    }]);

    return WebtrekkAutoTracking;
  }(WebtrekkReactComponent);

  WebtrekkAutoTracking.propTypes = {
    trackId: PropTypes.string.isRequired,
    trackDomain: PropTypes.string.isRequired,
    activateAutoTracking: PropTypes.bool,
    activateActions: PropTypes.bool,
    activateTeaser: PropTypes.bool,
    activateProductList: PropTypes.bool,
    activateContentEngagement: PropTypes.bool
  };
  WebtrekkAutoTracking.defaultProps = {
    trackId: null,
    trackDomain: null,
    activateAutoTracking: true,
    activateActions: false,
    activateTeaser: false,
    activateProductList: false,
    activateContentEngagement: false
  };
  var AutoTracking = withRouter(WebtrekkAutoTracking);

  var WebtrekkInitData = /*#__PURE__*/function (_WebtrekkReactCompone) {
    _inherits(WebtrekkInitData, _WebtrekkReactCompone);

    var _super = _createSuper(WebtrekkInitData);

    function WebtrekkInitData() {
      _classCallCheck(this, WebtrekkInitData);

      return _super.call(this, 'init');
    }

    return _createClass(WebtrekkInitData);
  }(WebtrekkReactComponent);

  WebtrekkInitData.propTypes = {
    trackId: PropTypes.string,
    trackDomain: PropTypes.string,
    domain: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string), PropTypes.instanceOf(RegExp), PropTypes.arrayOf(PropTypes.instanceOf(RegExp))]),
    cookie: PropTypes.oneOf(['1', '3'])
  };
  WebtrekkInitData.defaultProps = {
    trackId: null,
    trackDomain: null,
    domain: null,
    cookie: null
  };

  var WebtrekkAdvancedData = /*#__PURE__*/function (_WebtrekkReactCompone) {
    _inherits(WebtrekkAdvancedData, _WebtrekkReactCompone);

    var _super = _createSuper(WebtrekkAdvancedData);

    function WebtrekkAdvancedData() {
      _classCallCheck(this, WebtrekkAdvancedData);

      return _super.call(this, 'advanced');
    }

    return _createClass(WebtrekkAdvancedData);
  }(WebtrekkReactComponent);

  var PropTypesOfTypesNumberOrString = PropTypes.oneOfType([PropTypes.number, PropTypes.string]);
  WebtrekkAdvancedData.propTypes = {
    secureCookie: PropTypes.bool,
    optOutName: PropTypes.string,
    requestObfuscation: PropTypes.bool,
    execCDB: PropTypes.bool,
    useCDBCache: PropTypes.bool,
    sendViaSDK: PropTypes.bool,
    sendViaServer: PropTypes.shape({
      activated: PropTypes.bool,
      serverDomain: PropTypes.string,
      serverPath: PropTypes.string,
      droppedRequests: PropTypesOfTypesNumberOrString,
      blacklist: PropTypes.array
    }),
    useHashForDefaultPageName: PropTypes.bool,
    useParamsForDefaultPageName: PropTypes.arrayOf(PropTypes.string),
    requestQueue: PropTypes.shape({
      activated: PropTypes.bool,
      ttl: PropTypesOfTypesNumberOrString,
      resendInterval: PropTypesOfTypesNumberOrString,
      size: PropTypesOfTypesNumberOrString,
      retries: PropTypesOfTypesNumberOrString,
      retriesOption: PropTypesOfTypesNumberOrString
    }),
    requestLimit: PropTypes.shape({
      activated: PropTypes.bool,
      amount: PropTypesOfTypesNumberOrString,
      duration: PropTypesOfTypesNumberOrString
    }),
    userIdentification: PropTypes.shape({
      enableOptOut: PropTypes.bool,
      enableAnonymousFunction: PropTypes.bool,
      anonymousOptIn: PropTypes.bool,
      optOutCookieName: PropTypes.string,
      anonymousCookieName: PropTypes.string,
      suppressParameter: PropTypes.arrayOf(PropTypes.string)
    })
  };
  WebtrekkAdvancedData.defaultProps = {
    secureCookie: null,
    optOutName: null,
    requestObfuscation: null,
    execCDB: null,
    useCDBCache: null,
    sendViaSDK: null,
    sendViaServer: {
      activated: null,
      serverDomain: null,
      serverPath: null,
      droppedRequests: null,
      blacklist: null
    },
    useHashForDefaultPageName: null,
    useParamsForDefaultPageName: null,
    requestQueue: {
      activated: null,
      ttl: null,
      resendInterval: null,
      size: null
    },
    requestLimit: {
      activated: null,
      amount: null,
      duration: null
    },
    userIdentification: {
      enableOptOut: null,
      enableAnonymousFunction: null,
      anonymousOptIn: null,
      optOutCookieName: null,
      anonymousCookieName: null,
      suppressParameter: null
    }
  };

  var WebtrekkCampaignData = /*#__PURE__*/function (_WebtrekkReactCompone) {
    _inherits(WebtrekkCampaignData, _WebtrekkReactCompone);

    var _super = _createSuper(WebtrekkCampaignData);

    function WebtrekkCampaignData() {
      _classCallCheck(this, WebtrekkCampaignData);

      return _super.call(this, 'campaign');
    }

    return _createClass(WebtrekkCampaignData);
  }(WebtrekkReactComponent);

  WebtrekkCampaignData.propTypes = {
    id: PropTypes.string,
    mediaCode: PropTypes.arrayOf(PropTypes.string),
    oncePerSession: PropTypes.bool,
    parameter: PropTypes.objectOf(PropTypes.string),
    sendInstantly: PropTypes.bool
  };
  WebtrekkCampaignData.defaultProps = {
    id: null,
    mediaCode: null,
    oncePerSession: null,
    parameter: null,
    sendInstantly: false
  };

  var WebtrekkCustomerData = /*#__PURE__*/function (_WebtrekkReactCompone) {
    _inherits(WebtrekkCustomerData, _WebtrekkReactCompone);

    var _super = _createSuper(WebtrekkCustomerData);

    function WebtrekkCustomerData() {
      _classCallCheck(this, WebtrekkCustomerData);

      return _super.call(this, 'customer');
    }

    return _createClass(WebtrekkCustomerData);
  }(WebtrekkReactComponent);

  WebtrekkCustomerData.propTypes = {
    id: PropTypes.string,
    email: PropTypes.string,
    emailRID: PropTypes.string,
    emailOptin: PropTypes.bool,
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    telephone: PropTypes.string,
    gender: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    birthday: PropTypes.string,
    country: PropTypes.string,
    city: PropTypes.string,
    postalCode: PropTypes.string,
    street: PropTypes.string,
    streetNumber: PropTypes.string,
    validation: PropTypes.bool,
    category: PropTypes.objectOf(PropTypes.string),
    sendInstantly: PropTypes.bool
  };
  WebtrekkCustomerData.defaultProps = {
    id: null,
    email: null,
    emailRID: null,
    emailOptin: null,
    firstName: null,
    lastName: null,
    telephone: null,
    gender: null,
    birthday: null,
    country: null,
    city: null,
    postalCode: null,
    street: null,
    streetNumber: null,
    validation: null,
    category: null,
    sendInstantly: false
  };

  var WebtrekkOrderData = /*#__PURE__*/function (_WebtrekkReactCompone) {
    _inherits(WebtrekkOrderData, _WebtrekkReactCompone);

    var _super = _createSuper(WebtrekkOrderData);

    function WebtrekkOrderData() {
      _classCallCheck(this, WebtrekkOrderData);

      return _super.call(this, 'order');
    }

    return _createClass(WebtrekkOrderData);
  }(WebtrekkReactComponent);

  var PropTypesOfTypesNumberOrString$1 = PropTypes.oneOfType([PropTypes.number, PropTypes.string]);
  WebtrekkOrderData.propTypes = {
    value: PropTypesOfTypesNumberOrString$1,
    id: PropTypes.string,
    currency: PropTypes.string,
    couponValue: PropTypesOfTypesNumberOrString$1,
    paymentMethod: PropTypes.string,
    shippingService: PropTypes.string,
    shippingSpeed: PropTypes.string,
    shippingCosts: PropTypesOfTypesNumberOrString$1,
    grossMargin: PropTypesOfTypesNumberOrString$1,
    orderStatus: PropTypes.string,
    parameter: PropTypes.objectOf(PropTypes.string),
    sendInstantly: PropTypes.bool
  };
  WebtrekkOrderData.defaultProps = {
    value: null,
    id: null,
    currency: null,
    couponValue: null,
    paymentMethod: null,
    shippingService: null,
    shippingSpeed: null,
    shippingCosts: null,
    grossMargin: null,
    orderStatus: null,
    parameter: null,
    sendInstantly: false
  };

  var WebtrekkPageData = /*#__PURE__*/function (_WebtrekkReactCompone) {
    _inherits(WebtrekkPageData, _WebtrekkReactCompone);

    var _super = _createSuper(WebtrekkPageData);

    function WebtrekkPageData() {
      _classCallCheck(this, WebtrekkPageData);

      return _super.call(this, 'page');
    }

    return _createClass(WebtrekkPageData);
  }(WebtrekkReactComponent);

  var PropTypesOfTypesNumberOrString$2 = PropTypes.oneOfType([PropTypes.number, PropTypes.string]);
  WebtrekkPageData.propTypes = {
    name: PropTypes.string,
    search: PropTypes.string,
    numberSearchResults: PropTypesOfTypesNumberOrString$2,
    errorMessages: PropTypes.string,
    paywall: PropTypes.bool,
    articleTitle: PropTypes.string,
    contentTags: PropTypes.string,
    title: PropTypes.string,
    type: PropTypes.string,
    length: PropTypes.string,
    daysSincePublication: PropTypesOfTypesNumberOrString$2,
    testVariant: PropTypes.string,
    testExperiment: PropTypes.string,
    parameter: PropTypes.objectOf(PropTypes.string),
    category: PropTypes.objectOf(PropTypes.string),
    goal: PropTypes.objectOf(PropTypes.string),
    sendInstantly: PropTypes.bool
  };
  WebtrekkPageData.defaultProps = {
    name: null,
    search: null,
    numberSearchResults: null,
    errorMessages: null,
    paywall: null,
    articleTitle: null,
    contentTags: null,
    title: null,
    type: null,
    length: null,
    daysSincePublication: null,
    testVariant: null,
    testExperiment: null,
    parameter: null,
    category: null,
    goal: null,
    sendInstantly: false
  };

  var WebtrekkProductData = /*#__PURE__*/function (_WebtrekkReactCompone) {
    _inherits(WebtrekkProductData, _WebtrekkReactCompone);

    var _super = _createSuper(WebtrekkProductData);

    function WebtrekkProductData() {
      _classCallCheck(this, WebtrekkProductData);

      return _super.call(this, 'product');
    }

    return _createClass(WebtrekkProductData);
  }(WebtrekkReactComponent);

  var PropTypesOfTypesNumberOrString$3 = PropTypes.oneOfType([PropTypes.number, PropTypes.string]);
  WebtrekkProductData.propTypes = {
    id: PropTypes.string.isRequired,
    action: PropTypes.oneOf(['list', 'view', 'basket', 'confirmation']).isRequired,
    cost: PropTypesOfTypesNumberOrString$3,
    quantity: PropTypesOfTypesNumberOrString$3,
    variant: PropTypes.string,
    soldOut: PropTypes.bool,
    parameter: PropTypes.objectOf(PropTypes.string),
    category: PropTypes.objectOf(PropTypes.string),
    sendInstantly: PropTypes.bool
  };
  WebtrekkProductData.defaultProps = {
    id: null,
    action: null,
    cost: null,
    quantity: null,
    variant: null,
    soldOut: null,
    parameter: null,
    category: null,
    sendInstantly: false
  };

  var WebtrekkSessionData = /*#__PURE__*/function (_WebtrekkReactCompone) {
    _inherits(WebtrekkSessionData, _WebtrekkReactCompone);

    var _super = _createSuper(WebtrekkSessionData);

    function WebtrekkSessionData() {
      _classCallCheck(this, WebtrekkSessionData);

      return _super.call(this, 'session');
    }

    return _createClass(WebtrekkSessionData);
  }(WebtrekkReactComponent);

  WebtrekkSessionData.propTypes = {
    loginStatus: PropTypes.string,
    parameter: PropTypes.objectOf(PropTypes.string),
    sendInstantly: PropTypes.bool
  };
  WebtrekkSessionData.defaultProps = {
    loginStatus: null,
    parameter: null,
    sendInstantly: false
  };

  var createRef = React__default.createRef || function () {
    function getRef(refObject) {
      if (!refObject) {
        return null;
      }

      var reference = refObject;

      if (Object.keys(reference).length === 1) {
        if (reference.hasOwnProperty('current')) {
          reference = reference.current;
        } else if (reference.hasOwnProperty('value')) {
          reference = reference.value;
        }
      }

      return reference;
    }

    function ref(instanceOrNode) {
      ref.current = getRef(instanceOrNode) || null;
    }

    ref.current = null;
    return ref;
  };

  var WebtrekkTeaser = /*#__PURE__*/function (_WebtrekkReactCompone) {
    _inherits(WebtrekkTeaser, _WebtrekkReactCompone);

    var _super = _createSuper(WebtrekkTeaser);

    function WebtrekkTeaser() {
      var _this;

      _classCallCheck(this, WebtrekkTeaser);

      _this = _super.call(this, 'teaser_tracking');
      _this.elementRef = createRef();
      return _this;
    }

    _createClass(WebtrekkTeaser, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        this.addTeaserElement();
      }
    }, {
      key: "componentDidUpdate",
      value: function componentDidUpdate() {
        this.componentDidMount();
      }
    }, {
      key: "render",
      value: function render() {
        var _this2 = this;

        var children = React__default.Children.map(this.props.children, function (element) {
          return /*#__PURE__*/React__default.cloneElement(element, {
            ref: _this2.elementRef
          });
        });
        return children[0];
      }
    }]);

    return WebtrekkTeaser;
  }(WebtrekkReactComponent);

  WebtrekkTeaser.propTypes = {
    selector: PropTypes.string,
    name: PropTypes.string.isRequired,
    rank: PropTypes.string,
    content: PropTypes.string,
    variant: PropTypes.string,
    seen: PropTypes.bool,
    type: PropTypes.oneOf(['view', 'click', 'product']),
    goal: PropTypes.oneOf(['order', 'goal', 'both']),
    value: PropTypes.string
  };
  WebtrekkTeaser.defaultProps = {
    selector: null,
    name: null,
    rank: null,
    content: null,
    variant: null,
    seen: null,
    type: null,
    goal: null,
    value: null
  };

  var WebtrekkProductList = /*#__PURE__*/function (_WebtrekkReactCompone) {
    _inherits(WebtrekkProductList, _WebtrekkReactCompone);

    var _super = _createSuper(WebtrekkProductList);

    function WebtrekkProductList() {
      var _this;

      _classCallCheck(this, WebtrekkProductList);

      _this = _super.call(this, 'product_list_tracking');
      _this.elementRef = createRef();
      return _this;
    }

    _createClass(WebtrekkProductList, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        this.addProductListElement();
      }
    }, {
      key: "componentDidUpdate",
      value: function componentDidUpdate() {
        this.componentDidMount();
      }
    }, {
      key: "render",
      value: function render() {
        var _this2 = this;

        var children = React__default.Children.map(this.props.children, function (element) {
          return /*#__PURE__*/React__default.cloneElement(element, {
            ref: _this2.elementRef
          });
        });
        return children[0];
      }
    }]);

    return WebtrekkProductList;
  }(WebtrekkReactComponent);

  var PropTypesOfTypesNumberOrString$4 = PropTypes.oneOfType([PropTypes.number, PropTypes.string]);
  WebtrekkProductList.propTypes = {
    selector: PropTypes.string,
    id: PropTypes.string.isRequired,
    position: PropTypesOfTypesNumberOrString$4.isRequired,
    cost: PropTypesOfTypesNumberOrString$4,
    quantity: PropTypesOfTypesNumberOrString$4,
    variant: PropTypes.string,
    soldOut: PropTypes.bool,
    category: PropTypes.objectOf(PropTypes.string),
    parameter: PropTypes.objectOf(PropTypes.string)
  };
  WebtrekkProductList.defaultProps = {
    selector: null,
    id: null,
    position: null,
    cost: null,
    quantity: null,
    variant: null,
    soldOut: null,
    category: null,
    parameter: null
  };

  var WebtrekkContentEngagement = /*#__PURE__*/function (_WebtrekkReactCompone) {
    _inherits(WebtrekkContentEngagement, _WebtrekkReactCompone);

    var _super = _createSuper(WebtrekkContentEngagement);

    function WebtrekkContentEngagement() {
      var _this;

      _classCallCheck(this, WebtrekkContentEngagement);

      _this = _super.call(this, 'content_engagement');
      _this.elementRef = createRef();
      return _this;
    }

    _createClass(WebtrekkContentEngagement, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        this.addContentEngagementElement();
      }
    }, {
      key: "componentDidUpdate",
      value: function componentDidUpdate() {
        this.componentDidMount();
      }
    }, {
      key: "render",
      value: function render() {
        var _this2 = this;

        var children = React__default.Children.map(this.props.children, function (element) {
          return /*#__PURE__*/React__default.cloneElement(element, {
            ref: _this2.elementRef
          });
        });
        return children[0];
      }
    }]);

    return WebtrekkContentEngagement;
  }(WebtrekkReactComponent);

  var PropTypesOfTypesNumberOrString$5 = PropTypes.oneOfType([PropTypes.number, PropTypes.string]);
  WebtrekkContentEngagement.propTypes = {
    selector: PropTypes.string,
    name: PropTypes.string.isRequired,
    percentageStepsInAnalytics: PropTypesOfTypesNumberOrString$5,
    sendContentEngagement: PropTypes.oneOf([0, 1, 2, '0', '1', '2']),
    percentageReached: PropTypesOfTypesNumberOrString$5,
    secondsReached: PropTypesOfTypesNumberOrString$5,
    largeBrowserResolution: PropTypesOfTypesNumberOrString$5,
    largeBrowserSeconds: PropTypesOfTypesNumberOrString$5,
    mediumBrowserResolution: PropTypesOfTypesNumberOrString$5,
    mediumBrowserSeconds: PropTypesOfTypesNumberOrString$5,
    smallBrowserResolution: PropTypesOfTypesNumberOrString$5,
    smallBrowserSeconds: PropTypesOfTypesNumberOrString$5
  };
  WebtrekkContentEngagement.defaultProps = {
    selector: null,
    name: null,
    percentageStepsInAnalytics: null,
    sendContentEngagement: null,
    percentageReached: null,
    secondsReached: null,
    largeBrowserResolution: null,
    largeBrowserSeconds: null,
    mediumBrowserResolution: null,
    mediumBrowserSeconds: null,
    smallBrowserResolution: null,
    smallBrowserSeconds: null
  };

  var WebtrekkExtension = /*#__PURE__*/function (_WebtrekkReactCompone) {
    _inherits(WebtrekkExtension, _WebtrekkReactCompone);

    var _super = _createSuper(WebtrekkExtension);

    function WebtrekkExtension() {
      _classCallCheck(this, WebtrekkExtension);

      return _super.call(this, 'extension');
    }

    _createClass(WebtrekkExtension, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        this.addExtension(this.props.name, this.props.action, this.props.config);
      }
    }]);

    return WebtrekkExtension;
  }(WebtrekkReactComponent);

  WebtrekkExtension.propTypes = {
    name: PropTypes.string.isRequired,
    action: PropTypes.string,
    config: PropTypes.object
  };
  WebtrekkExtension.defaultProps = {
    name: null,
    action: null,
    config: null
  };

  var webtrekkMiddleware = function webtrekkMiddleware() {
    var actions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return function (_ref) {
      var getState = _ref.getState;
      return function (next) {
        return function (action) {
          var nextValue = next(action);

          if (typeof actions[action.type] === 'function') {
            actions[action.type](getState(), action);
            return nextValue;
          }

          if (!action.webtrekk && action.payload && !action.payload.webtrekk) {
            return nextValue;
          }

          var isWebtrekkAction = true;
          var webtrekk;

          if (action.webtrekk) {
            webtrekk = action.webtrekk;
          } else if (action.payload && action.payload.webtrekk) {
            webtrekk = action.payload.webtrekk;
          } else {
            webtrekk = {};
          }

          var type = webtrekk.type || '';
          var data = webtrekk.data || {};
          var sendInstantly = webtrekk.sendInstantly || false;

          switch (type) {
            case 'webtrekk/init':
              SmartPixelReact.init(data);
              break;

            case 'webtrekk/advanced':
              SmartPixelReact.advanced(data);
              break;

            case 'webtrekk/page':
              SmartPixelReact.page(data.name, data);
              break;

            case 'webtrekk/action':
              SmartPixelReact.action(data);
              break;

            case 'webtrekk/session':
              SmartPixelReact.session(data);
              break;

            case 'webtrekk/campaign':
              SmartPixelReact.campaign(data);
              break;

            case 'webtrekk/customer':
              SmartPixelReact.customer(data.id, data, data.validation);
              break;

            case 'webtrekk/product':
              SmartPixelReact.product(webtrekk.action, data);
              break;

            case 'webtrekk/products':
              SmartPixelReact.products(webtrekk.action, data);
              break;

            case 'webtrekk/order':
              SmartPixelReact.order(data);
              break;

            case 'webtrekk/extension':
              SmartPixelReact.extension(data.extension, data.action, data);
              break;

            case 'webtrekk/track':
              SmartPixelReact.track(data);
              break;

            case 'webtrekk/trackPage':
              SmartPixelReact.trackPage(data);
              break;

            case 'webtrekk/trackAction':
              SmartPixelReact.trackAction(data);
              break;

            default:
              isWebtrekkAction = false;
              break;
          }

          if (isWebtrekkAction && sendInstantly) {
            SmartPixelReact.track();
          }

          return nextValue;
        };
      };
    };
  };

  var webtrekkReducer = function webtrekkReducer() {
    var actions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return function () {
      var customReducer = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function () {// do nothing
      };
      return React.useCallback(function (state, action) {
        var customReducerValue = customReducer(state, action);

        if (typeof actions[action.type] === 'function') {
          actions[action.type](state, action, customReducerValue);
          return customReducerValue;
        }

        if (!action.webtrekk && action.payload && !action.payload.webtrekk) {
          return customReducerValue;
        }

        var isWebtrekkAction = true;
        var webtrekk;

        if (action.webtrekk) {
          webtrekk = action.webtrekk;
        } else if (action.payload && action.payload.webtrekk) {
          webtrekk = action.payload.webtrekk;
        } else {
          webtrekk = {};
        }

        var type = webtrekk.type || '';
        var data = webtrekk.data || {};
        var sendInstantly = webtrekk.sendInstantly || false;

        switch (type) {
          case 'webtrekk/init':
            SmartPixelReact.init(data);
            break;

          case 'webtrekk/advanced':
            SmartPixelReact.advanced(data);
            break;

          case 'webtrekk/page':
            SmartPixelReact.page(data.name, data);
            break;

          case 'webtrekk/action':
            SmartPixelReact.action(data);
            break;

          case 'webtrekk/session':
            SmartPixelReact.session(data);
            break;

          case 'webtrekk/campaign':
            SmartPixelReact.campaign(data);
            break;

          case 'webtrekk/customer':
            SmartPixelReact.customer(data.id, data, data.validation);
            break;

          case 'webtrekk/product':
            SmartPixelReact.product(webtrekk.action, data);
            break;

          case 'webtrekk/products':
            SmartPixelReact.products(webtrekk.action, data);
            break;

          case 'webtrekk/order':
            SmartPixelReact.order(data);
            break;

          case 'webtrekk/extension':
            SmartPixelReact.extension(data.extension, data.action, data);
            break;

          case 'webtrekk/track':
            SmartPixelReact.track(data);
            break;

          case 'webtrekk/trackPage':
            SmartPixelReact.trackPage(data);
            break;

          case 'webtrekk/trackAction':
            SmartPixelReact.trackAction(data);
            break;

          default:
            isWebtrekkAction = false;
            break;
        }

        if (isWebtrekkAction && sendInstantly) {
          SmartPixelReact.track();
        }

        return customReducerValue;
      }, [customReducer, actions]);
    };
  };

  var WebtrekkAutoTracking$1 = AutoTracking;
  var WebtrekkInitData$1 = WebtrekkInitData;
  var WebtrekkAdvancedData$1 = WebtrekkAdvancedData;
  var WebtrekkCampaignData$1 = WebtrekkCampaignData;
  var WebtrekkCustomerData$1 = WebtrekkCustomerData;
  var WebtrekkOrderData$1 = WebtrekkOrderData;
  var WebtrekkPageData$1 = WebtrekkPageData;
  var WebtrekkProductData$1 = WebtrekkProductData;
  var WebtrekkSessionData$1 = WebtrekkSessionData;
  var WebtrekkTeaser$1 = WebtrekkTeaser;
  var WebtrekkProductList$1 = WebtrekkProductList;
  var WebtrekkContentEngagement$1 = WebtrekkContentEngagement;
  var WebtrekkExtension$1 = WebtrekkExtension;
  var WebtrekkSmartPixelReact$1 = SmartPixelReact;
  var webtrekkMiddleware$1 = webtrekkMiddleware;
  var webtrekkReducer$1 = webtrekkReducer; // compatibility for v0

  var webtrekkSmartPixelReact = SmartPixelReact;
  webtrekkSmartPixelReact.call(function (wtSmart) {
    wtSmart._ps(2, '1.2.4');
  });
  var index = {
    WebtrekkAutoTracking: WebtrekkAutoTracking$1,
    WebtrekkInitData: WebtrekkInitData$1,
    WebtrekkAdvancedData: WebtrekkAdvancedData$1,
    WebtrekkCampaignData: WebtrekkCampaignData$1,
    WebtrekkCustomerData: WebtrekkCustomerData$1,
    WebtrekkOrderData: WebtrekkOrderData$1,
    WebtrekkPageData: WebtrekkPageData$1,
    WebtrekkProductData: WebtrekkProductData$1,
    WebtrekkSessionData: WebtrekkSessionData$1,
    WebtrekkTeaser: WebtrekkTeaser$1,
    WebtrekkProductList: WebtrekkProductList$1,
    WebtrekkContentEngagement: WebtrekkContentEngagement$1,
    WebtrekkExtension: WebtrekkExtension$1,
    WebtrekkSmartPixelReact: WebtrekkSmartPixelReact$1,
    webtrekkMiddleware: webtrekkMiddleware$1,
    webtrekkReducer: webtrekkReducer$1,
    // compatibility for v0
    webtrekkSmartPixelReact: webtrekkSmartPixelReact
  };

  exports.WebtrekkAdvancedData = WebtrekkAdvancedData$1;
  exports.WebtrekkAutoTracking = WebtrekkAutoTracking$1;
  exports.WebtrekkCampaignData = WebtrekkCampaignData$1;
  exports.WebtrekkContentEngagement = WebtrekkContentEngagement$1;
  exports.WebtrekkCustomerData = WebtrekkCustomerData$1;
  exports.WebtrekkExtension = WebtrekkExtension$1;
  exports.WebtrekkInitData = WebtrekkInitData$1;
  exports.WebtrekkOrderData = WebtrekkOrderData$1;
  exports.WebtrekkPageData = WebtrekkPageData$1;
  exports.WebtrekkProductData = WebtrekkProductData$1;
  exports.WebtrekkProductList = WebtrekkProductList$1;
  exports.WebtrekkSessionData = WebtrekkSessionData$1;
  exports.WebtrekkSmartPixelReact = WebtrekkSmartPixelReact$1;
  exports.WebtrekkTeaser = WebtrekkTeaser$1;
  exports.default = index;
  exports.webtrekkMiddleware = webtrekkMiddleware$1;
  exports.webtrekkReducer = webtrekkReducer$1;
  exports.webtrekkSmartPixelReact = webtrekkSmartPixelReact;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
