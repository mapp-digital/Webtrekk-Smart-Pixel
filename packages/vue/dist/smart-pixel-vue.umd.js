(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@webtrekk-smart-pixel/core'), require('vue')) :
  typeof define === 'function' && define.amd ? define(['exports', '@webtrekk-smart-pixel/core', 'vue'], factory) :
  (global = global || self, factory(global['@webtrekk-smart-pixel/vue'] = {}, global.wtSmart, global.Vue));
}(this, (function (exports, wtSmart, vue) { 'use strict';

  wtSmart = wtSmart && Object.prototype.hasOwnProperty.call(wtSmart, 'default') ? wtSmart['default'] : wtSmart;

  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      enumerableOnly && (symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      })), keys.push.apply(keys, symbols);
    }
    return keys;
  }
  function _objectSpread2(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = null != arguments[i] ? arguments[i] : {};
      i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
    return target;
  }
  function _regeneratorRuntime() {
    _regeneratorRuntime = function () {
      return exports;
    };
    var exports = {},
      Op = Object.prototype,
      hasOwn = Op.hasOwnProperty,
      defineProperty = Object.defineProperty || function (obj, key, desc) {
        obj[key] = desc.value;
      },
      $Symbol = "function" == typeof Symbol ? Symbol : {},
      iteratorSymbol = $Symbol.iterator || "@@iterator",
      asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator",
      toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
    function define(obj, key, value) {
      return Object.defineProperty(obj, key, {
        value: value,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }), obj[key];
    }
    try {
      define({}, "");
    } catch (err) {
      define = function (obj, key, value) {
        return obj[key] = value;
      };
    }
    function wrap(innerFn, outerFn, self, tryLocsList) {
      var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator,
        generator = Object.create(protoGenerator.prototype),
        context = new Context(tryLocsList || []);
      return defineProperty(generator, "_invoke", {
        value: makeInvokeMethod(innerFn, self, context)
      }), generator;
    }
    function tryCatch(fn, obj, arg) {
      try {
        return {
          type: "normal",
          arg: fn.call(obj, arg)
        };
      } catch (err) {
        return {
          type: "throw",
          arg: err
        };
      }
    }
    exports.wrap = wrap;
    var ContinueSentinel = {};
    function Generator() {}
    function GeneratorFunction() {}
    function GeneratorFunctionPrototype() {}
    var IteratorPrototype = {};
    define(IteratorPrototype, iteratorSymbol, function () {
      return this;
    });
    var getProto = Object.getPrototypeOf,
      NativeIteratorPrototype = getProto && getProto(getProto(values([])));
    NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype);
    var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
    function defineIteratorMethods(prototype) {
      ["next", "throw", "return"].forEach(function (method) {
        define(prototype, method, function (arg) {
          return this._invoke(method, arg);
        });
      });
    }
    function AsyncIterator(generator, PromiseImpl) {
      function invoke(method, arg, resolve, reject) {
        var record = tryCatch(generator[method], generator, arg);
        if ("throw" !== record.type) {
          var result = record.arg,
            value = result.value;
          return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) {
            invoke("next", value, resolve, reject);
          }, function (err) {
            invoke("throw", err, resolve, reject);
          }) : PromiseImpl.resolve(value).then(function (unwrapped) {
            result.value = unwrapped, resolve(result);
          }, function (error) {
            return invoke("throw", error, resolve, reject);
          });
        }
        reject(record.arg);
      }
      var previousPromise;
      defineProperty(this, "_invoke", {
        value: function (method, arg) {
          function callInvokeWithMethodAndArg() {
            return new PromiseImpl(function (resolve, reject) {
              invoke(method, arg, resolve, reject);
            });
          }
          return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
        }
      });
    }
    function makeInvokeMethod(innerFn, self, context) {
      var state = "suspendedStart";
      return function (method, arg) {
        if ("executing" === state) throw new Error("Generator is already running");
        if ("completed" === state) {
          if ("throw" === method) throw arg;
          return {
            value: void 0,
            done: !0
          };
        }
        for (context.method = method, context.arg = arg;;) {
          var delegate = context.delegate;
          if (delegate) {
            var delegateResult = maybeInvokeDelegate(delegate, context);
            if (delegateResult) {
              if (delegateResult === ContinueSentinel) continue;
              return delegateResult;
            }
          }
          if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) {
            if ("suspendedStart" === state) throw state = "completed", context.arg;
            context.dispatchException(context.arg);
          } else "return" === context.method && context.abrupt("return", context.arg);
          state = "executing";
          var record = tryCatch(innerFn, self, context);
          if ("normal" === record.type) {
            if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue;
            return {
              value: record.arg,
              done: context.done
            };
          }
          "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg);
        }
      };
    }
    function maybeInvokeDelegate(delegate, context) {
      var methodName = context.method,
        method = delegate.iterator[methodName];
      if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel;
      var record = tryCatch(method, delegate.iterator, context.arg);
      if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel;
      var info = record.arg;
      return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel);
    }
    function pushTryEntry(locs) {
      var entry = {
        tryLoc: locs[0]
      };
      1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry);
    }
    function resetTryEntry(entry) {
      var record = entry.completion || {};
      record.type = "normal", delete record.arg, entry.completion = record;
    }
    function Context(tryLocsList) {
      this.tryEntries = [{
        tryLoc: "root"
      }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0);
    }
    function values(iterable) {
      if (iterable || "" === iterable) {
        var iteratorMethod = iterable[iteratorSymbol];
        if (iteratorMethod) return iteratorMethod.call(iterable);
        if ("function" == typeof iterable.next) return iterable;
        if (!isNaN(iterable.length)) {
          var i = -1,
            next = function next() {
              for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next;
              return next.value = undefined, next.done = !0, next;
            };
          return next.next = next;
        }
      }
      throw new TypeError(typeof iterable + " is not iterable");
    }
    return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", {
      value: GeneratorFunctionPrototype,
      configurable: !0
    }), defineProperty(GeneratorFunctionPrototype, "constructor", {
      value: GeneratorFunction,
      configurable: !0
    }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) {
      var ctor = "function" == typeof genFun && genFun.constructor;
      return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name));
    }, exports.mark = function (genFun) {
      return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun;
    }, exports.awrap = function (arg) {
      return {
        __await: arg
      };
    }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
      return this;
    }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {
      void 0 === PromiseImpl && (PromiseImpl = Promise);
      var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
      return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) {
        return result.done ? result.value : iter.next();
      });
    }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () {
      return this;
    }), define(Gp, "toString", function () {
      return "[object Generator]";
    }), exports.keys = function (val) {
      var object = Object(val),
        keys = [];
      for (var key in object) keys.push(key);
      return keys.reverse(), function next() {
        for (; keys.length;) {
          var key = keys.pop();
          if (key in object) return next.value = key, next.done = !1, next;
        }
        return next.done = !0, next;
      };
    }, exports.values = values, Context.prototype = {
      constructor: Context,
      reset: function (skipTempReset) {
        if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined);
      },
      stop: function () {
        this.done = !0;
        var rootRecord = this.tryEntries[0].completion;
        if ("throw" === rootRecord.type) throw rootRecord.arg;
        return this.rval;
      },
      dispatchException: function (exception) {
        if (this.done) throw exception;
        var context = this;
        function handle(loc, caught) {
          return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught;
        }
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i],
            record = entry.completion;
          if ("root" === entry.tryLoc) return handle("end");
          if (entry.tryLoc <= this.prev) {
            var hasCatch = hasOwn.call(entry, "catchLoc"),
              hasFinally = hasOwn.call(entry, "finallyLoc");
            if (hasCatch && hasFinally) {
              if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
              if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
            } else if (hasCatch) {
              if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
            } else {
              if (!hasFinally) throw new Error("try statement without catch or finally");
              if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
            }
          }
        }
      },
      abrupt: function (type, arg) {
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];
          if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
            var finallyEntry = entry;
            break;
          }
        }
        finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null);
        var record = finallyEntry ? finallyEntry.completion : {};
        return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record);
      },
      complete: function (record, afterLoc) {
        if ("throw" === record.type) throw record.arg;
        return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel;
      },
      finish: function (finallyLoc) {
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];
          if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel;
        }
      },
      catch: function (tryLoc) {
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];
          if (entry.tryLoc === tryLoc) {
            var record = entry.completion;
            if ("throw" === record.type) {
              var thrown = record.arg;
              resetTryEntry(entry);
            }
            return thrown;
          }
        }
        throw new Error("illegal catch attempt");
      },
      delegateYield: function (iterable, resultName, nextLoc) {
        return this.delegate = {
          iterator: values(iterable),
          resultName: resultName,
          nextLoc: nextLoc
        }, "next" === this.method && (this.arg = undefined), ContinueSentinel;
      }
    }, exports;
  }
  function _typeof(obj) {
    "@babel/helpers - typeof";

    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
      return typeof obj;
    } : function (obj) {
      return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    }, _typeof(obj);
  }
  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
      var info = gen[key](arg);
      var value = info.value;
    } catch (error) {
      reject(error);
      return;
    }
    if (info.done) {
      resolve(value);
    } else {
      Promise.resolve(value).then(_next, _throw);
    }
  }
  function _asyncToGenerator(fn) {
    return function () {
      var self = this,
        args = arguments;
      return new Promise(function (resolve, reject) {
        var gen = fn.apply(self, args);
        function _next(value) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
        }
        function _throw(err) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
        }
        _next(undefined);
      });
    };
  }
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
      Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
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
  function _defineProperty(obj, key, value) {
    key = _toPropertyKey(key);
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }
    return obj;
  }
  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
  }
  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
  }
  function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
  }
  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }
  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
    return arr2;
  }
  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function _toPrimitive(input, hint) {
    if (typeof input !== "object" || input === null) return input;
    var prim = input[Symbol.toPrimitive];
    if (prim !== undefined) {
      var res = prim.call(input, hint || "default");
      if (typeof res !== "object") return res;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (hint === "string" ? String : Number)(input);
  }
  function _toPropertyKey(arg) {
    var key = _toPrimitive(arg, "string");
    return typeof key === "symbol" ? key : String(key);
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
      window_['wtSmart']['_ps'](8, '1.3.0');
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
    _createClass(WebtrekkSmartPixelVue, [{
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
    return WebtrekkSmartPixelVue;
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

  /**
   * @param {Array} root
   * @returns {Array} Child component instances with webtrekk property
   */
  var childObductor = function childObductor(root) {
    var flatten = function flatten(arr) {
      return arr.reduce(function (flat, next) {
        return flat.concat(Array.isArray(next) ? flatten(next) : next);
      }, []);
    };
    var allChildren = [];
    var getChild = function getChild(el) {
      if (el.$children.length > 0) {
        allChildren.push(_toConsumableArray(el.$children));
        el.$children.forEach(function (newEl) {
          getChild(newEl);
        });
      }
    };
    getChild(root);
    return flatten(allChildren).filter(function (child) {
      return child.webtrekk;
    });
  };
  var wtBeforeRouteEnter = function wtBeforeRouteEnter(webtrekkConfig, next) {
    next(function (vm) {
      if (vm.webtrekk) {
        generalHandler(vm.webtrekk, Object.keys(vm.webtrekk), vm.$el);
      }
      // delegate tracking data of component property 'webtrekk' to pixel, incl. all children
      childObductor(vm).forEach(function (child) {
        generalHandler(child.webtrekk, Object.keys(child.webtrekk), child.$el);
      });
      vm.$nextTick(function () {
        if (webtrekkConfig.activateLinkTracking) {
          // reload links for auto linktracking
          SmartPixelVue.extension('action', 'reload');
        }
        if (SmartPixelVue.deactivateAutoTracking) {
          SmartPixelVue.deactivateAutoTracking = false;
        } else {
          // Send pagerequest
          // all the setTimeout hacks have to be done because of this issue: https://github.com/vuejs/vue-router/pull/2292, otherwise linkTracking is triggered after autoTracking
          // Otherwise automatic linkTracking requests come after PI
          setTimeout(function () {
            SmartPixelVue.call(function (pix) {
              pix.track();
            });
          }, 0);
        }
      });
    });
  };
  var wtBeforeRouteLeave = function wtBeforeRouteLeave(next) {
    // cleanup if autotrack was deactivated but no track happened before the route changes
    if (SmartPixelVue.deactivateAutoTracking) {
      SmartPixelVue.deactivateAutoTracking = false;
      SmartPixelVue.clear();
    }
    next();
  };

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
    var getComponentMappDataRecursively = function getComponentMappDataRecursively(component) {
      if (component.data && component.data().webtrekk) {
        componentMappData.push(component.data().webtrekk);
      }
      if (component.hasOwnProperty('components')) {
        Object.keys(component.components).forEach(function (componentName) {
          getComponentMappDataRecursively(component.components[componentName]);
        });
      }
    };
    getComponentMappDataRecursively(routerComponent);
    componentMappData.forEach(function (data) {
      generalHandler(data, Object.keys(data));
    });
  };

  var webtrekk = {
    install: function install(Vue, webtrekkConfig) {
      var _Vue$config;
      var isVue3 = (Vue === null || Vue === void 0 ? void 0 : Vue.hasOwnProperty('config')) && ((_Vue$config = Vue.config) === null || _Vue$config === void 0 ? void 0 : _Vue$config.hasOwnProperty('globalProperties'));
      if (isVue3) {
        Vue.config.globalProperties.$webtrekk = SmartPixelVue;
        if (webtrekkConfig.activateAutoTracking && webtrekkConfig.activateAutoTracking.beforeResolve) {
          webtrekkConfig.activateAutoTracking.beforeResolve(function (to) {
            mappBeforeResolve(to);
          });
          webtrekkConfig.activateAutoTracking.afterEach( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  autoTrack(webtrekkConfig);
                case 1:
                case "end":
                  return _context.stop();
              }
            }, _callee);
          })));
        }
      } else {
        Vue.prototype.$webtrekk = SmartPixelVue;
        if (webtrekkConfig.activateAutoTracking) {
          Vue.mixin({
            beforeRouteEnter: function beforeRouteEnter(to, from, next) {
              wtBeforeRouteEnter(webtrekkConfig, next);
            },
            /* istanbul ignore next */beforeRouteLeave: function beforeRouteLeave(to, from, next) {
              wtBeforeRouteLeave(next);
            }
          });
        }
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
