(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@webtrekk-smart-pixel/react'), require('react'), require('prop-types')) :
  typeof define === 'function' && define.amd ? define(['exports', '@webtrekk-smart-pixel/react', 'react', 'prop-types'], factory) :
  (global = global || self, factory(global['@webtrekk-smart-pixel/next'] = {}, global.SmartPixelReact, global.React, global.PropTypes));
}(this, function (exports, SmartPixelReact, React, PropTypes) { 'use strict';

  React = React && React.hasOwnProperty('default') ? React['default'] : React;
  PropTypes = PropTypes && PropTypes.hasOwnProperty('default') ? PropTypes['default'] : PropTypes;

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
    return Constructor;
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
    if (superClass) _setPrototypeOf(subClass, superClass);
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
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
    }

    return _assertThisInitialized(self);
  }

  var WebtrekkAutoTracking =
  /*#__PURE__*/
  function (_React$Component) {
    _inherits(WebtrekkAutoTracking, _React$Component);

    function WebtrekkAutoTracking() {
      _classCallCheck(this, WebtrekkAutoTracking);

      return _possibleConstructorReturn(this, _getPrototypeOf(WebtrekkAutoTracking).apply(this, arguments));
    }

    _createClass(WebtrekkAutoTracking, [{
      key: "addExtension",

      /**
       * @param {string} extension
       * @param {string} action
       */
      value: function addExtension(extension) {
        var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'activate';
        SmartPixelReact.WebtrekkSmartPixelReact.extension(extension, action);
      }
      /**
       * @param {number} timeout
       */

    }, {
      key: "actionsAfterRouting",
      value: function actionsAfterRouting(timeout) {
        var _this = this;

        window.setTimeout(function () {
          if (_this.props.activateAutoTracking) {
            SmartPixelReact.WebtrekkSmartPixelReact.trackPage();
          }

          if (_this.props.activateActions) {
            _this.addExtension('action', 'reload');
          }
        }, timeout);
      }
      /**
       * @override
       */

    }, {
      key: "componentDidMount",
      value: function componentDidMount() {
        var _this2 = this;

        SmartPixelReact.WebtrekkSmartPixelReact.init(this.props);

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

        if (this.props.activateAutoTracking || this.props.activateActions) {
          this.actionsAfterRouting(5);

          if (this.props.router !== null) {
            this.props.router.events.on('routeChangeComplete', function () {
              _this2.actionsAfterRouting(500);
            });
          }
        }
      }
      /**
       * @override
       */

    }, {
      key: "componentDidUpdate",
      value: function componentDidUpdate() {} // do nothing

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

    return WebtrekkAutoTracking;
  }(React.Component);

  WebtrekkAutoTracking.propTypes = {
    trackId: PropTypes.string.isRequired,
    trackDomain: PropTypes.string.isRequired,
    router: PropTypes.any,
    activateAutoTracking: PropTypes.bool,
    activateActions: PropTypes.bool,
    activateTeaser: PropTypes.bool,
    activateProductList: PropTypes.bool,
    activateContentEngagement: PropTypes.bool
  };
  WebtrekkAutoTracking.defaultProps = {
    trackId: null,
    trackDomain: null,
    router: null,
    activateAutoTracking: true,
    activateActions: false,
    activateTeaser: false,
    activateProductList: false,
    activateContentEngagement: false
  };

  var WebtrekkAutoTracking$1 = WebtrekkAutoTracking;
  var WebtrekkInitData = SmartPixelReact.WebtrekkInitData;
  var WebtrekkAdvancedData = SmartPixelReact.WebtrekkAdvancedData;
  var WebtrekkCampaignData = SmartPixelReact.WebtrekkCampaignData;
  var WebtrekkCustomerData = SmartPixelReact.WebtrekkCustomerData;
  var WebtrekkOrderData = SmartPixelReact.WebtrekkOrderData;
  var WebtrekkPageData = SmartPixelReact.WebtrekkPageData;
  var WebtrekkProductData = SmartPixelReact.WebtrekkProductData;
  var WebtrekkSessionData = SmartPixelReact.WebtrekkSessionData;
  var WebtrekkTeaser = SmartPixelReact.WebtrekkTeaser;
  var WebtrekkProductList = SmartPixelReact.WebtrekkProductList;
  var WebtrekkContentEngagement = SmartPixelReact.WebtrekkContentEngagement;
  var WebtrekkExtension = SmartPixelReact.WebtrekkExtension;
  var WebtrekkSmartPixelReact = SmartPixelReact.WebtrekkSmartPixelReact;
  var webtrekkMiddleware = SmartPixelReact.webtrekkMiddleware;
  var webtrekkReducer = SmartPixelReact.webtrekkReducer; // compatibility for v0

  var webtrekkSmartPixelReact = WebtrekkSmartPixelReact;
  var index = {
    WebtrekkAutoTracking: WebtrekkAutoTracking$1,
    WebtrekkInitData: WebtrekkInitData,
    WebtrekkAdvancedData: WebtrekkAdvancedData,
    WebtrekkCampaignData: WebtrekkCampaignData,
    WebtrekkCustomerData: WebtrekkCustomerData,
    WebtrekkOrderData: WebtrekkOrderData,
    WebtrekkPageData: WebtrekkPageData,
    WebtrekkProductData: WebtrekkProductData,
    WebtrekkSessionData: WebtrekkSessionData,
    WebtrekkTeaser: WebtrekkTeaser,
    WebtrekkProductList: WebtrekkProductList,
    WebtrekkContentEngagement: WebtrekkContentEngagement,
    WebtrekkExtension: WebtrekkExtension,
    WebtrekkSmartPixelReact: WebtrekkSmartPixelReact,
    webtrekkMiddleware: webtrekkMiddleware,
    webtrekkReducer: webtrekkReducer,
    // compatibility for v0
    webtrekkSmartPixelReact: webtrekkSmartPixelReact
  };

  exports.WebtrekkAdvancedData = WebtrekkAdvancedData;
  exports.WebtrekkAutoTracking = WebtrekkAutoTracking$1;
  exports.WebtrekkCampaignData = WebtrekkCampaignData;
  exports.WebtrekkContentEngagement = WebtrekkContentEngagement;
  exports.WebtrekkCustomerData = WebtrekkCustomerData;
  exports.WebtrekkExtension = WebtrekkExtension;
  exports.WebtrekkInitData = WebtrekkInitData;
  exports.WebtrekkOrderData = WebtrekkOrderData;
  exports.WebtrekkPageData = WebtrekkPageData;
  exports.WebtrekkProductData = WebtrekkProductData;
  exports.WebtrekkProductList = WebtrekkProductList;
  exports.WebtrekkSessionData = WebtrekkSessionData;
  exports.WebtrekkSmartPixelReact = WebtrekkSmartPixelReact;
  exports.WebtrekkTeaser = WebtrekkTeaser;
  exports.default = index;
  exports.webtrekkMiddleware = webtrekkMiddleware;
  exports.webtrekkReducer = webtrekkReducer;
  exports.webtrekkSmartPixelReact = webtrekkSmartPixelReact;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
