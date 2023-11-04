// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"index.js":[function(require,module,exports) {
function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get.bind(); } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }
function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
!function () {
  function t(t, e, n) {
    Object.defineProperty(t, e, {
      get: n,
      enumerable: !0
    });
  }
  function e(t, e) {
    return Object.keys(e).forEach(function (n) {
      "default" !== n && "__esModule" !== n && Object.defineProperty(t, n, {
        enumerable: !0,
        get: function get() {
          return e[n];
        }
      });
    }), t;
  }
  var n = {},
    i = {},
    s = "top";
  t(i, "top", function () {
    return s;
  });
  var o = "bottom";
  t(i, "bottom", function () {
    return o;
  });
  var r = "right";
  t(i, "right", function () {
    return r;
  });
  var a = "left";
  t(i, "left", function () {
    return a;
  });
  var l = "auto";
  t(i, "auto", function () {
    return l;
  });
  var c = [s, o, r, a];
  t(i, "basePlacements", function () {
    return c;
  });
  var h = "start";
  t(i, "start", function () {
    return h;
  });
  var d = "end";
  t(i, "end", function () {
    return d;
  });
  var u = "clippingParents";
  t(i, "clippingParents", function () {
    return u;
  });
  var f = "viewport";
  t(i, "viewport", function () {
    return f;
  });
  var p = "popper";
  t(i, "popper", function () {
    return p;
  });
  var m = "reference";
  t(i, "reference", function () {
    return m;
  });
  var g = c.reduce(function (t, e) {
    return t.concat([e + "-" + h, e + "-" + d]);
  }, []);
  t(i, "variationPlacements", function () {
    return g;
  });
  var _ = [].concat(c, [l]).reduce(function (t, e) {
    return t.concat([e, e + "-" + h, e + "-" + d]);
  }, []);
  t(i, "placements", function () {
    return _;
  });
  var b = "beforeRead";
  t(i, "beforeRead", function () {
    return b;
  });
  var v = "read";
  t(i, "read", function () {
    return v;
  });
  var y = "afterRead";
  t(i, "afterRead", function () {
    return y;
  });
  var w = "beforeMain";
  t(i, "beforeMain", function () {
    return w;
  });
  var E = "main";
  t(i, "main", function () {
    return E;
  });
  var T = "afterMain";
  t(i, "afterMain", function () {
    return T;
  });
  var A = "beforeWrite";
  t(i, "beforeWrite", function () {
    return A;
  });
  var L = "write";
  t(i, "write", function () {
    return L;
  });
  var k = "afterWrite";
  t(i, "afterWrite", function () {
    return k;
  });
  var C = [b, v, y, w, E, T, A, L, k];
  t(i, "modifierPhases", function () {
    return C;
  }), e(n, i);
  var O = {};
  function D(t) {
    return t ? (t.nodeName || "").toLowerCase() : null;
  }
  function x(t) {
    if (null == t) return window;
    if ("[object Window]" !== t.toString()) {
      var e = t.ownerDocument;
      return e && e.defaultView || window;
    }
    return t;
  }
  function N(t) {
    return t instanceof x(t).Element || t instanceof Element;
  }
  function S(t) {
    return t instanceof x(t).HTMLElement || t instanceof HTMLElement;
  }
  function I(t) {
    return "undefined" != typeof ShadowRoot && (t instanceof x(t).ShadowRoot || t instanceof ShadowRoot);
  }
  var j = {
    name: "applyStyles",
    enabled: !0,
    phase: "write",
    fn: function fn(t) {
      var e = t.state;
      Object.keys(e.elements).forEach(function (t) {
        var n = e.styles[t] || {},
          i = e.attributes[t] || {},
          s = e.elements[t];
        S(s) && D(s) && (Object.assign(s.style, n), Object.keys(i).forEach(function (t) {
          var e = i[t];
          !1 === e ? s.removeAttribute(t) : s.setAttribute(t, !0 === e ? "" : e);
        }));
      });
    },
    effect: function effect(t) {
      var e = t.state,
        n = {
          popper: {
            position: e.options.strategy,
            left: "0",
            top: "0",
            margin: "0"
          },
          arrow: {
            position: "absolute"
          },
          reference: {}
        };
      return Object.assign(e.elements.popper.style, n.popper), e.styles = n, e.elements.arrow && Object.assign(e.elements.arrow.style, n.arrow), function () {
        Object.keys(e.elements).forEach(function (t) {
          var i = e.elements[t],
            s = e.attributes[t] || {},
            o = Object.keys(e.styles.hasOwnProperty(t) ? e.styles[t] : n[t]).reduce(function (t, e) {
              return t[e] = "", t;
            }, {});
          S(i) && D(i) && (Object.assign(i.style, o), Object.keys(s).forEach(function (t) {
            i.removeAttribute(t);
          }));
        });
      };
    },
    requires: ["computeStyles"]
  };
  function P(t) {
    return t.split("-")[0];
  }
  function M(t) {
    var e = t.getBoundingClientRect();
    return {
      width: e.width,
      height: e.height,
      top: e.top,
      right: e.right,
      bottom: e.bottom,
      left: e.left,
      x: e.left,
      y: e.top
    };
  }
  function H(t) {
    var e = M(t),
      n = t.offsetWidth,
      i = t.offsetHeight;
    return Math.abs(e.width - n) <= 1 && (n = e.width), Math.abs(e.height - i) <= 1 && (i = e.height), {
      x: t.offsetLeft,
      y: t.offsetTop,
      width: n,
      height: i
    };
  }
  function R(t, e) {
    var n = e.getRootNode && e.getRootNode();
    if (t.contains(e)) return !0;
    if (n && I(n)) {
      var i = e;
      do {
        if (i && t.isSameNode(i)) return !0;
        i = i.parentNode || i.host;
      } while (i);
    }
    return !1;
  }
  function B(t) {
    return x(t).getComputedStyle(t);
  }
  function $(t) {
    return ["table", "td", "th"].indexOf(D(t)) >= 0;
  }
  function W(t) {
    return ((N(t) ? t.ownerDocument : t.document) || window.document).documentElement;
  }
  function q(t) {
    return "html" === D(t) ? t : t.assignedSlot || t.parentNode || (I(t) ? t.host : null) || W(t);
  }
  function z(t) {
    return S(t) && "fixed" !== B(t).position ? t.offsetParent : null;
  }
  function U(t) {
    for (var e = x(t), n = z(t); n && $(n) && "static" === B(n).position;) n = z(n);
    return n && ("html" === D(n) || "body" === D(n) && "static" === B(n).position) ? e : n || function (t) {
      var e = -1 !== navigator.userAgent.toLowerCase().indexOf("firefox");
      if (-1 !== navigator.userAgent.indexOf("Trident") && S(t) && "fixed" === B(t).position) return null;
      for (var n = q(t); S(n) && ["html", "body"].indexOf(D(n)) < 0;) {
        var i = B(n);
        if ("none" !== i.transform || "none" !== i.perspective || "paint" === i.contain || -1 !== ["transform", "perspective"].indexOf(i.willChange) || e && "filter" === i.willChange || e && i.filter && "none" !== i.filter) return n;
        n = n.parentNode;
      }
      return null;
    }(t) || e;
  }
  function F(t) {
    return ["top", "bottom"].indexOf(t) >= 0 ? "x" : "y";
  }
  var V = Math.max,
    K = Math.min,
    X = Math.round;
  function Y(t, e, n) {
    return V(t, K(e, n));
  }
  function Q(t) {
    return Object.assign({}, {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    }, t);
  }
  function G(t, e) {
    return e.reduce(function (e, n) {
      return e[n] = t, e;
    }, {});
  }
  var Z = {
      name: "arrow",
      enabled: !0,
      phase: "main",
      fn: function fn(t) {
        var e,
          n = t.state,
          i = t.name,
          l = t.options,
          h = n.elements.arrow,
          d = n.modifiersData.popperOffsets,
          u = P(n.placement),
          f = F(u),
          p = [a, r].indexOf(u) >= 0 ? "height" : "width";
        if (h && d) {
          var m = function (t, e) {
              return Q("number" != typeof (t = "function" == typeof t ? t(Object.assign({}, e.rects, {
                placement: e.placement
              })) : t) ? t : G(t, c));
            }(l.padding, n),
            g = H(h),
            _ = "y" === f ? s : a,
            b = "y" === f ? o : r,
            v = n.rects.reference[p] + n.rects.reference[f] - d[f] - n.rects.popper[p],
            y = d[f] - n.rects.reference[f],
            w = U(h),
            E = w ? "y" === f ? w.clientHeight || 0 : w.clientWidth || 0 : 0,
            T = v / 2 - y / 2,
            A = m[_],
            L = E - g[p] - m[b],
            k = E / 2 - g[p] / 2 + T,
            C = Y(A, k, L),
            O = f;
          n.modifiersData[i] = ((e = {})[O] = C, e.centerOffset = C - k, e);
        }
      },
      effect: function effect(t) {
        var e = t.state,
          n = t.options.element,
          i = void 0 === n ? "[data-popper-arrow]" : n;
        null != i && ("string" != typeof i || (i = e.elements.popper.querySelector(i))) && R(e.elements.popper, i) && (e.elements.arrow = i);
      },
      requires: ["popperOffsets"],
      requiresIfExists: ["preventOverflow"]
    },
    J = {
      top: "auto",
      right: "auto",
      bottom: "auto",
      left: "auto"
    };
  function tt(t) {
    var e,
      n = t.popper,
      i = t.popperRect,
      l = t.placement,
      c = t.offsets,
      h = t.position,
      d = t.gpuAcceleration,
      u = t.adaptive,
      f = t.roundOffsets,
      p = !0 === f ? function (t) {
        var e = t.x,
          n = t.y,
          i = window.devicePixelRatio || 1;
        return {
          x: X(X(e * i) / i) || 0,
          y: X(X(n * i) / i) || 0
        };
      }(c) : "function" == typeof f ? f(c) : c,
      m = p.x,
      g = void 0 === m ? 0 : m,
      _ = p.y,
      b = void 0 === _ ? 0 : _,
      v = c.hasOwnProperty("x"),
      y = c.hasOwnProperty("y"),
      w = a,
      E = s,
      T = window;
    if (u) {
      var A = U(n),
        L = "clientHeight",
        k = "clientWidth";
      A === x(n) && "static" !== B(A = W(n)).position && (L = "scrollHeight", k = "scrollWidth"), A = A, l === s && (E = o, b -= A[L] - i.height, b *= d ? 1 : -1), l === a && (w = r, g -= A[k] - i.width, g *= d ? 1 : -1);
    }
    var C,
      O = Object.assign({
        position: h
      }, u && J);
    return d ? Object.assign({}, O, ((C = {})[E] = y ? "0" : "", C[w] = v ? "0" : "", C.transform = (T.devicePixelRatio || 1) < 2 ? "translate(" + g + "px, " + b + "px)" : "translate3d(" + g + "px, " + b + "px, 0)", C)) : Object.assign({}, O, ((e = {})[E] = y ? b + "px" : "", e[w] = v ? g + "px" : "", e.transform = "", e));
  }
  var et = {
      name: "computeStyles",
      enabled: !0,
      phase: "beforeWrite",
      fn: function fn(t) {
        var e = t.state,
          n = t.options,
          i = n.gpuAcceleration,
          s = void 0 === i || i,
          o = n.adaptive,
          r = void 0 === o || o,
          a = n.roundOffsets,
          l = void 0 === a || a,
          c = {
            placement: P(e.placement),
            popper: e.elements.popper,
            popperRect: e.rects.popper,
            gpuAcceleration: s
          };
        null != e.modifiersData.popperOffsets && (e.styles.popper = Object.assign({}, e.styles.popper, tt(Object.assign({}, c, {
          offsets: e.modifiersData.popperOffsets,
          position: e.options.strategy,
          adaptive: r,
          roundOffsets: l
        })))), null != e.modifiersData.arrow && (e.styles.arrow = Object.assign({}, e.styles.arrow, tt(Object.assign({}, c, {
          offsets: e.modifiersData.arrow,
          position: "absolute",
          adaptive: !1,
          roundOffsets: l
        })))), e.attributes.popper = Object.assign({}, e.attributes.popper, {
          "data-popper-placement": e.placement
        });
      },
      data: {}
    },
    nt = {
      passive: !0
    };
  var it = {
      name: "eventListeners",
      enabled: !0,
      phase: "write",
      fn: function fn() {},
      effect: function effect(t) {
        var e = t.state,
          n = t.instance,
          i = t.options,
          s = i.scroll,
          o = void 0 === s || s,
          r = i.resize,
          a = void 0 === r || r,
          l = x(e.elements.popper),
          c = [].concat(e.scrollParents.reference, e.scrollParents.popper);
        return o && c.forEach(function (t) {
          t.addEventListener("scroll", n.update, nt);
        }), a && l.addEventListener("resize", n.update, nt), function () {
          o && c.forEach(function (t) {
            t.removeEventListener("scroll", n.update, nt);
          }), a && l.removeEventListener("resize", n.update, nt);
        };
      },
      data: {}
    },
    st = {
      left: "right",
      right: "left",
      bottom: "top",
      top: "bottom"
    };
  function ot(t) {
    return t.replace(/left|right|bottom|top/g, function (t) {
      return st[t];
    });
  }
  var rt = {
    start: "end",
    end: "start"
  };
  function at(t) {
    return t.replace(/start|end/g, function (t) {
      return rt[t];
    });
  }
  function lt(t) {
    var e = x(t);
    return {
      scrollLeft: e.pageXOffset,
      scrollTop: e.pageYOffset
    };
  }
  function ct(t) {
    return M(W(t)).left + lt(t).scrollLeft;
  }
  function ht(t) {
    var e = B(t),
      n = e.overflow,
      i = e.overflowX,
      s = e.overflowY;
    return /auto|scroll|overlay|hidden/.test(n + s + i);
  }
  function dt(t) {
    return ["html", "body", "#document"].indexOf(D(t)) >= 0 ? t.ownerDocument.body : S(t) && ht(t) ? t : dt(q(t));
  }
  function ut(t, e) {
    var n;
    void 0 === e && (e = []);
    var i = dt(t),
      s = i === (null == (n = t.ownerDocument) ? void 0 : n.body),
      o = x(i),
      r = s ? [o].concat(o.visualViewport || [], ht(i) ? i : []) : i,
      a = e.concat(r);
    return s ? a : a.concat(ut(q(r)));
  }
  function ft(t) {
    return Object.assign({}, t, {
      left: t.x,
      top: t.y,
      right: t.x + t.width,
      bottom: t.y + t.height
    });
  }
  function pt(t, e) {
    return e === f ? ft(function (t) {
      var e = x(t),
        n = W(t),
        i = e.visualViewport,
        s = n.clientWidth,
        o = n.clientHeight,
        r = 0,
        a = 0;
      return i && (s = i.width, o = i.height, /^((?!chrome|android).)*safari/i.test(navigator.userAgent) || (r = i.offsetLeft, a = i.offsetTop)), {
        width: s,
        height: o,
        x: r + ct(t),
        y: a
      };
    }(t)) : S(e) ? function (t) {
      var e = M(t);
      return e.top = e.top + t.clientTop, e.left = e.left + t.clientLeft, e.bottom = e.top + t.clientHeight, e.right = e.left + t.clientWidth, e.width = t.clientWidth, e.height = t.clientHeight, e.x = e.left, e.y = e.top, e;
    }(e) : ft(function (t) {
      var e,
        n = W(t),
        i = lt(t),
        s = null == (e = t.ownerDocument) ? void 0 : e.body,
        o = V(n.scrollWidth, n.clientWidth, s ? s.scrollWidth : 0, s ? s.clientWidth : 0),
        r = V(n.scrollHeight, n.clientHeight, s ? s.scrollHeight : 0, s ? s.clientHeight : 0),
        a = -i.scrollLeft + ct(t),
        l = -i.scrollTop;
      return "rtl" === B(s || n).direction && (a += V(n.clientWidth, s ? s.clientWidth : 0) - o), {
        width: o,
        height: r,
        x: a,
        y: l
      };
    }(W(t)));
  }
  function mt(t, e, n) {
    var i = "clippingParents" === e ? function (t) {
        var e = ut(q(t)),
          n = ["absolute", "fixed"].indexOf(B(t).position) >= 0 && S(t) ? U(t) : t;
        return N(n) ? e.filter(function (t) {
          return N(t) && R(t, n) && "body" !== D(t);
        }) : [];
      }(t) : [].concat(e),
      s = [].concat(i, [n]),
      o = s[0],
      r = s.reduce(function (e, n) {
        var i = pt(t, n);
        return e.top = V(i.top, e.top), e.right = K(i.right, e.right), e.bottom = K(i.bottom, e.bottom), e.left = V(i.left, e.left), e;
      }, pt(t, o));
    return r.width = r.right - r.left, r.height = r.bottom - r.top, r.x = r.left, r.y = r.top, r;
  }
  function gt(t) {
    return t.split("-")[1];
  }
  function _t(t) {
    var e,
      n = t.reference,
      i = t.element,
      l = t.placement,
      c = l ? P(l) : null,
      u = l ? gt(l) : null,
      f = n.x + n.width / 2 - i.width / 2,
      p = n.y + n.height / 2 - i.height / 2;
    switch (c) {
      case s:
        e = {
          x: f,
          y: n.y - i.height
        };
        break;
      case o:
        e = {
          x: f,
          y: n.y + n.height
        };
        break;
      case r:
        e = {
          x: n.x + n.width,
          y: p
        };
        break;
      case a:
        e = {
          x: n.x - i.width,
          y: p
        };
        break;
      default:
        e = {
          x: n.x,
          y: n.y
        };
    }
    var m = c ? F(c) : null;
    if (null != m) {
      var g = "y" === m ? "height" : "width";
      switch (u) {
        case h:
          e[m] = e[m] - (n[g] / 2 - i[g] / 2);
          break;
        case d:
          e[m] = e[m] + (n[g] / 2 - i[g] / 2);
      }
    }
    return e;
  }
  function bt(t, e) {
    void 0 === e && (e = {});
    var n = e,
      i = n.placement,
      a = void 0 === i ? t.placement : i,
      l = n.boundary,
      h = void 0 === l ? u : l,
      d = n.rootBoundary,
      g = void 0 === d ? f : d,
      _ = n.elementContext,
      b = void 0 === _ ? p : _,
      v = n.altBoundary,
      y = void 0 !== v && v,
      w = n.padding,
      E = void 0 === w ? 0 : w,
      T = Q("number" != typeof E ? E : G(E, c)),
      A = b === p ? m : p,
      L = t.elements.reference,
      k = t.rects.popper,
      C = t.elements[y ? A : b],
      O = mt(N(C) ? C : C.contextElement || W(t.elements.popper), h, g),
      D = M(L),
      x = _t({
        reference: D,
        element: k,
        strategy: "absolute",
        placement: a
      }),
      S = ft(Object.assign({}, k, x)),
      I = b === p ? S : D,
      j = {
        top: O.top - I.top + T.top,
        bottom: I.bottom - O.bottom + T.bottom,
        left: O.left - I.left + T.left,
        right: I.right - O.right + T.right
      },
      P = t.modifiersData.offset;
    if (b === p && P) {
      var H = P[a];
      Object.keys(j).forEach(function (t) {
        var e = [r, o].indexOf(t) >= 0 ? 1 : -1,
          n = [s, o].indexOf(t) >= 0 ? "y" : "x";
        j[t] += H[n] * e;
      });
    }
    return j;
  }
  var vt = {
    name: "flip",
    enabled: !0,
    phase: "main",
    fn: function fn(t) {
      var e = t.state,
        n = t.options,
        i = t.name;
      if (!e.modifiersData[i]._skip) {
        for (var d = n.mainAxis, u = void 0 === d || d, f = n.altAxis, p = void 0 === f || f, m = n.fallbackPlacements, b = n.padding, v = n.boundary, y = n.rootBoundary, w = n.altBoundary, E = n.flipVariations, T = void 0 === E || E, A = n.allowedAutoPlacements, L = e.options.placement, k = P(L), C = m || (k === L || !T ? [ot(L)] : function (t) {
            if (P(t) === l) return [];
            var e = ot(t);
            return [at(t), e, at(e)];
          }(L)), O = [L].concat(C).reduce(function (t, n) {
            return t.concat(P(n) === l ? function (t, e) {
              void 0 === e && (e = {});
              var n = e,
                i = n.placement,
                s = n.boundary,
                o = n.rootBoundary,
                r = n.padding,
                a = n.flipVariations,
                l = n.allowedAutoPlacements,
                h = void 0 === l ? _ : l,
                d = gt(i),
                u = d ? a ? g : g.filter(function (t) {
                  return gt(t) === d;
                }) : c,
                f = u.filter(function (t) {
                  return h.indexOf(t) >= 0;
                });
              0 === f.length && (f = u);
              var p = f.reduce(function (e, n) {
                return e[n] = bt(t, {
                  placement: n,
                  boundary: s,
                  rootBoundary: o,
                  padding: r
                })[P(n)], e;
              }, {});
              return Object.keys(p).sort(function (t, e) {
                return p[t] - p[e];
              });
            }(e, {
              placement: n,
              boundary: v,
              rootBoundary: y,
              padding: b,
              flipVariations: T,
              allowedAutoPlacements: A
            }) : n);
          }, []), D = e.rects.reference, x = e.rects.popper, N = new Map(), S = !0, I = O[0], j = 0; j < O.length; j++) {
          var M = O[j],
            H = P(M),
            R = gt(M) === h,
            B = [s, o].indexOf(H) >= 0,
            $ = B ? "width" : "height",
            W = bt(e, {
              placement: M,
              boundary: v,
              rootBoundary: y,
              altBoundary: w,
              padding: b
            }),
            q = B ? R ? r : a : R ? o : s;
          D[$] > x[$] && (q = ot(q));
          var z = ot(q),
            U = [];
          if (u && U.push(W[H] <= 0), p && U.push(W[q] <= 0, W[z] <= 0), U.every(function (t) {
            return t;
          })) {
            I = M, S = !1;
            break;
          }
          N.set(M, U);
        }
        if (S) for (var F = function F(t) {
            var e = O.find(function (e) {
              var n = N.get(e);
              if (n) return n.slice(0, t).every(function (t) {
                return t;
              });
            });
            if (e) return I = e, "break";
          }, V = T ? 3 : 1; V > 0; V--) {
          if ("break" === F(V)) break;
        }
        e.placement !== I && (e.modifiersData[i]._skip = !0, e.placement = I, e.reset = !0);
      }
    },
    requiresIfExists: ["offset"],
    data: {
      _skip: !1
    }
  };
  function yt(t, e, n) {
    return void 0 === n && (n = {
      x: 0,
      y: 0
    }), {
      top: t.top - e.height - n.y,
      right: t.right - e.width + n.x,
      bottom: t.bottom - e.height + n.y,
      left: t.left - e.width - n.x
    };
  }
  function wt(t) {
    return [s, r, o, a].some(function (e) {
      return t[e] >= 0;
    });
  }
  var Et = {
    name: "hide",
    enabled: !0,
    phase: "main",
    requiresIfExists: ["preventOverflow"],
    fn: function fn(t) {
      var e = t.state,
        n = t.name,
        i = e.rects.reference,
        s = e.rects.popper,
        o = e.modifiersData.preventOverflow,
        r = bt(e, {
          elementContext: "reference"
        }),
        a = bt(e, {
          altBoundary: !0
        }),
        l = yt(r, i),
        c = yt(a, s, o),
        h = wt(l),
        d = wt(c);
      e.modifiersData[n] = {
        referenceClippingOffsets: l,
        popperEscapeOffsets: c,
        isReferenceHidden: h,
        hasPopperEscaped: d
      }, e.attributes.popper = Object.assign({}, e.attributes.popper, {
        "data-popper-reference-hidden": h,
        "data-popper-escaped": d
      });
    }
  };
  var Tt = {
    name: "offset",
    enabled: !0,
    phase: "main",
    requires: ["popperOffsets"],
    fn: function fn(t) {
      var e = t.state,
        n = t.options,
        i = t.name,
        o = n.offset,
        l = void 0 === o ? [0, 0] : o,
        c = _.reduce(function (t, n) {
          return t[n] = function (t, e, n) {
            var i = P(t),
              o = [a, s].indexOf(i) >= 0 ? -1 : 1,
              l = "function" == typeof n ? n(Object.assign({}, e, {
                placement: t
              })) : n,
              c = l[0],
              h = l[1];
            return c = c || 0, h = (h || 0) * o, [a, r].indexOf(i) >= 0 ? {
              x: h,
              y: c
            } : {
              x: c,
              y: h
            };
          }(n, e.rects, l), t;
        }, {}),
        h = c[e.placement],
        d = h.x,
        u = h.y;
      null != e.modifiersData.popperOffsets && (e.modifiersData.popperOffsets.x += d, e.modifiersData.popperOffsets.y += u), e.modifiersData[i] = c;
    }
  };
  var At = {
    name: "popperOffsets",
    enabled: !0,
    phase: "read",
    fn: function fn(t) {
      var e = t.state,
        n = t.name;
      e.modifiersData[n] = _t({
        reference: e.rects.reference,
        element: e.rects.popper,
        strategy: "absolute",
        placement: e.placement
      });
    },
    data: {}
  };
  var Lt = {
    name: "preventOverflow",
    enabled: !0,
    phase: "main",
    fn: function fn(t) {
      var e = t.state,
        n = t.options,
        i = t.name,
        l = n.mainAxis,
        c = void 0 === l || l,
        d = n.altAxis,
        u = void 0 !== d && d,
        f = n.boundary,
        p = n.rootBoundary,
        m = n.altBoundary,
        g = n.padding,
        _ = n.tether,
        b = void 0 === _ || _,
        v = n.tetherOffset,
        y = void 0 === v ? 0 : v,
        w = bt(e, {
          boundary: f,
          rootBoundary: p,
          padding: g,
          altBoundary: m
        }),
        E = P(e.placement),
        T = gt(e.placement),
        A = !T,
        L = F(E),
        k = "x" === L ? "y" : "x",
        C = e.modifiersData.popperOffsets,
        O = e.rects.reference,
        D = e.rects.popper,
        x = "function" == typeof y ? y(Object.assign({}, e.rects, {
          placement: e.placement
        })) : y,
        N = {
          x: 0,
          y: 0
        };
      if (C) {
        if (c || u) {
          var S = "y" === L ? s : a,
            I = "y" === L ? o : r,
            j = "y" === L ? "height" : "width",
            M = C[L],
            R = C[L] + w[S],
            B = C[L] - w[I],
            $ = b ? -D[j] / 2 : 0,
            W = T === h ? O[j] : D[j],
            q = T === h ? -D[j] : -O[j],
            z = e.elements.arrow,
            X = b && z ? H(z) : {
              width: 0,
              height: 0
            },
            Q = e.modifiersData["arrow#persistent"] ? e.modifiersData["arrow#persistent"].padding : {
              top: 0,
              right: 0,
              bottom: 0,
              left: 0
            },
            G = Q[S],
            Z = Q[I],
            J = Y(0, O[j], X[j]),
            tt = A ? O[j] / 2 - $ - J - G - x : W - J - G - x,
            et = A ? -O[j] / 2 + $ + J + Z + x : q + J + Z + x,
            nt = e.elements.arrow && U(e.elements.arrow),
            it = nt ? "y" === L ? nt.clientTop || 0 : nt.clientLeft || 0 : 0,
            st = e.modifiersData.offset ? e.modifiersData.offset[e.placement][L] : 0,
            ot = C[L] + tt - st - it,
            rt = C[L] + et - st;
          if (c) {
            var at = Y(b ? K(R, ot) : R, M, b ? V(B, rt) : B);
            C[L] = at, N[L] = at - M;
          }
          if (u) {
            var lt = "x" === L ? s : a,
              ct = "x" === L ? o : r,
              ht = C[k],
              dt = ht + w[lt],
              ut = ht - w[ct],
              ft = Y(b ? K(dt, ot) : dt, ht, b ? V(ut, rt) : ut);
            C[k] = ft, N[k] = ft - ht;
          }
        }
        e.modifiersData[i] = N;
      }
    },
    requiresIfExists: ["offset"]
  };
  function kt(t, e, n) {
    void 0 === n && (n = !1);
    var i,
      s,
      o = W(e),
      r = M(t),
      a = S(e),
      l = {
        scrollLeft: 0,
        scrollTop: 0
      },
      c = {
        x: 0,
        y: 0
      };
    return (a || !a && !n) && (("body" !== D(e) || ht(o)) && (l = (i = e) !== x(i) && S(i) ? {
      scrollLeft: (s = i).scrollLeft,
      scrollTop: s.scrollTop
    } : lt(i)), S(e) ? ((c = M(e)).x += e.clientLeft, c.y += e.clientTop) : o && (c.x = ct(o))), {
      x: r.left + l.scrollLeft - c.x,
      y: r.top + l.scrollTop - c.y,
      width: r.width,
      height: r.height
    };
  }
  function Ct(t) {
    var e = new Map(),
      n = new Set(),
      i = [];
    function s(t) {
      n.add(t.name), [].concat(t.requires || [], t.requiresIfExists || []).forEach(function (t) {
        if (!n.has(t)) {
          var i = e.get(t);
          i && s(i);
        }
      }), i.push(t);
    }
    return t.forEach(function (t) {
      e.set(t.name, t);
    }), t.forEach(function (t) {
      n.has(t.name) || s(t);
    }), i;
  }
  t(O, "applyStyles", function () {
    return j;
  }), t(O, "arrow", function () {
    return Z;
  }), t(O, "computeStyles", function () {
    return et;
  }), t(O, "eventListeners", function () {
    return it;
  }), t(O, "flip", function () {
    return vt;
  }), t(O, "hide", function () {
    return Et;
  }), t(O, "offset", function () {
    return Tt;
  }), t(O, "popperOffsets", function () {
    return At;
  }), t(O, "preventOverflow", function () {
    return Lt;
  }), e(n, O);
  var Ot = {
    placement: "bottom",
    modifiers: [],
    strategy: "absolute"
  };
  function Dt() {
    for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
    return !e.some(function (t) {
      return !(t && "function" == typeof t.getBoundingClientRect);
    });
  }
  function xt(t) {
    void 0 === t && (t = {});
    var e = t,
      n = e.defaultModifiers,
      i = void 0 === n ? [] : n,
      s = e.defaultOptions,
      o = void 0 === s ? Ot : s;
    return function (t, e, n) {
      void 0 === n && (n = o);
      var s,
        r,
        a = {
          placement: "bottom",
          orderedModifiers: [],
          options: Object.assign({}, Ot, o),
          modifiersData: {},
          elements: {
            reference: t,
            popper: e
          },
          attributes: {},
          styles: {}
        },
        l = [],
        c = !1,
        h = {
          state: a,
          setOptions: function setOptions(n) {
            d(), a.options = Object.assign({}, o, a.options, n), a.scrollParents = {
              reference: N(t) ? ut(t) : t.contextElement ? ut(t.contextElement) : [],
              popper: ut(e)
            };
            var s = function (t) {
              var e = Ct(t);
              return C.reduce(function (t, n) {
                return t.concat(e.filter(function (t) {
                  return t.phase === n;
                }));
              }, []);
            }(function (t) {
              var e = t.reduce(function (t, e) {
                var n = t[e.name];
                return t[e.name] = n ? Object.assign({}, n, e, {
                  options: Object.assign({}, n.options, e.options),
                  data: Object.assign({}, n.data, e.data)
                }) : e, t;
              }, {});
              return Object.keys(e).map(function (t) {
                return e[t];
              });
            }([].concat(i, a.options.modifiers)));
            return a.orderedModifiers = s.filter(function (t) {
              return t.enabled;
            }), a.orderedModifiers.forEach(function (t) {
              var e = t.name,
                n = t.options,
                i = void 0 === n ? {} : n,
                s = t.effect;
              if ("function" == typeof s) {
                var o = s({
                    state: a,
                    name: e,
                    instance: h,
                    options: i
                  }),
                  r = function r() {};
                l.push(o || r);
              }
            }), h.update();
          },
          forceUpdate: function forceUpdate() {
            if (!c) {
              var t = a.elements,
                e = t.reference,
                n = t.popper;
              if (Dt(e, n)) {
                a.rects = {
                  reference: kt(e, U(n), "fixed" === a.options.strategy),
                  popper: H(n)
                }, a.reset = !1, a.placement = a.options.placement, a.orderedModifiers.forEach(function (t) {
                  return a.modifiersData[t.name] = Object.assign({}, t.data);
                });
                for (var i = 0; i < a.orderedModifiers.length; i++) if (!0 !== a.reset) {
                  var s = a.orderedModifiers[i],
                    o = s.fn,
                    r = s.options,
                    l = void 0 === r ? {} : r,
                    d = s.name;
                  "function" == typeof o && (a = o({
                    state: a,
                    options: l,
                    name: d,
                    instance: h
                  }) || a);
                } else a.reset = !1, i = -1;
              }
            }
          },
          update: (s = function s() {
            return new Promise(function (t) {
              h.forceUpdate(), t(a);
            });
          }, function () {
            return r || (r = new Promise(function (t) {
              Promise.resolve().then(function () {
                r = void 0, t(s());
              });
            })), r;
          }),
          destroy: function destroy() {
            d(), c = !0;
          }
        };
      if (!Dt(t, e)) return h;
      function d() {
        l.forEach(function (t) {
          return t();
        }), l = [];
      }
      return h.setOptions(n).then(function (t) {
        !c && n.onFirstUpdate && n.onFirstUpdate(t);
      }), h;
    };
  }
  var Nt = xt(),
    St = xt({
      defaultModifiers: [it, At, et, j, Tt, vt, Lt, Z, Et]
    }),
    It = xt({
      defaultModifiers: [it, At, et, j]
    });
  t(n, "createPopperBase", function () {
    return Nt;
  }), t(n, "detectOverflow", function () {
    return bt;
  }), t(n, "popperGenerator", function () {
    return xt;
  }), t(n, "createPopper", function () {
    return St;
  }), t(n, "createPopperLite", function () {
    return It;
  });
  var jt = function jt(t) {
      var _ref;
      var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document.documentElement;
      return (_ref = []).concat.apply(_ref, _toConsumableArray(Element.prototype.querySelectorAll.call(e, t)));
    },
    Pt = function Pt(t) {
      var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document.documentElement;
      return Element.prototype.querySelector.call(e, t);
    },
    Mt = function Mt(t, e) {
      var _ref2;
      return (_ref2 = []).concat.apply(_ref2, _toConsumableArray(t.children)).filter(function (t) {
        return t.matches(e);
      });
    },
    Ht = function Ht(t, e) {
      var n = [];
      var i = t.parentNode;
      for (; i && i.nodeType === Node.ELEMENT_NODE && 3 !== i.nodeType;) i.matches(e) && n.push(i), i = i.parentNode;
      return n;
    },
    Rt = function Rt(t, e) {
      var n = t.previousElementSibling;
      for (; n;) {
        if (n.matches(e)) return [n];
        n = n.previousElementSibling;
      }
      return [];
    },
    Bt = function Bt(t, e) {
      var n = t.nextElementSibling;
      for (; n;) {
        if (n.matches(e)) return [n];
        n = n.nextElementSibling;
      }
      return [];
    },
    $t = "transitionend",
    Wt = function Wt(t) {
      do {
        t += Math.floor(1e6 * Math.random());
      } while (document.getElementById(t));
      return t;
    },
    qt = function qt(t) {
      var e = t.getAttribute("data-bs-target");
      if (!e || "#" === e) {
        var _n2 = t.getAttribute("href");
        if (!_n2 || !_n2.includes("#") && !_n2.startsWith(".")) return null;
        _n2.includes("#") && !_n2.startsWith("#") && (_n2 = "#".concat(_n2.split("#")[1])), e = _n2 && "#" !== _n2 ? _n2.trim() : null;
      }
      return e;
    },
    zt = function zt(t) {
      var e = qt(t);
      return e && document.querySelector(e) ? e : null;
    },
    Ut = function Ut(t) {
      var e = qt(t);
      return e ? document.querySelector(e) : null;
    },
    Ft = function Ft(t) {
      if (!t) return 0;
      var _window$getComputedSt = window.getComputedStyle(t),
        e = _window$getComputedSt.transitionDuration,
        n = _window$getComputedSt.transitionDelay;
      var i = Number.parseFloat(e),
        s = Number.parseFloat(n);
      return i || s ? (e = e.split(",")[0], n = n.split(",")[0], 1e3 * (Number.parseFloat(e) + Number.parseFloat(n))) : 0;
    },
    Vt = function Vt(t) {
      t.dispatchEvent(new Event($t));
    },
    Kt = function Kt(t) {
      return !(!t || "object" != _typeof(t)) && (void 0 !== t.jquery && (t = t[0]), void 0 !== t.nodeType);
    },
    Xt = function Xt(t) {
      return Kt(t) ? t.jquery ? t[0] : t : "string" == typeof t && t.length > 0 ? Pt(t) : null;
    },
    Yt = function Yt(t, e) {
      var n = !1;
      var i = e + 5;
      t.addEventListener($t, function e() {
        n = !0, t.removeEventListener($t, e);
      }), setTimeout(function () {
        n || Vt(t);
      }, i);
    },
    Qt = function Qt(t, e, n) {
      Object.keys(n).forEach(function (i) {
        var s = n[i],
          o = e[i],
          r = o && Kt(o) ? "element" : null == (a = o) ? "".concat(a) : {}.toString.call(a).match(/\s([a-z]+)/i)[1].toLowerCase();
        var a;
        if (!new RegExp(s).test(r)) throw new TypeError("".concat(t.toUpperCase(), ": Option \"").concat(i, "\" provided type \"").concat(r, "\" but expected type \"").concat(s, "\"."));
      });
    },
    Gt = function Gt(t) {
      if (!t) return !1;
      if (t.style && t.parentNode && t.parentNode.style) {
        var _e2 = getComputedStyle(t),
          _n3 = getComputedStyle(t.parentNode);
        return "none" !== _e2.display && "none" !== _n3.display && "hidden" !== _e2.visibility;
      }
      return !1;
    },
    Zt = function Zt(t) {
      return !t || t.nodeType !== Node.ELEMENT_NODE || !!t.classList.contains("disabled") || (void 0 !== t.disabled ? t.disabled : t.hasAttribute("disabled") && "false" !== t.getAttribute("disabled"));
    },
    Jt = function Jt(t) {
      if (!document.documentElement.attachShadow) return null;
      if ("function" == typeof t.getRootNode) {
        var _e3 = t.getRootNode();
        return _e3 instanceof ShadowRoot ? _e3 : null;
      }
      return t instanceof ShadowRoot ? t : t.parentNode ? Jt(t.parentNode) : null;
    },
    te = function te() {},
    ee = function ee(t) {
      return t.offsetHeight;
    },
    ne = function ne() {
      var _window = window,
        t = _window.jQuery;
      return t && !document.body.hasAttribute("data-bs-no-jquery") ? t : null;
    },
    ie = function ie() {
      return "rtl" === document.documentElement.dir;
    },
    se = function se(t) {
      var e;
      e = function e() {
        var e = ne();
        if (e) {
          var _n4 = t.NAME,
            _i2 = e.fn[_n4];
          e.fn[_n4] = t.jQueryInterface, e.fn[_n4].Constructor = t, e.fn[_n4].noConflict = function () {
            return e.fn[_n4] = _i2, t.jQueryInterface;
          };
        }
      }, "loading" === document.readyState ? document.addEventListener("DOMContentLoaded", e) : e();
    },
    oe = function oe(t) {
      "function" == typeof t && t();
    },
    re = new Map();
  var ae = function ae(t, e, n) {
      re.has(t) || re.set(t, new Map());
      var i = re.get(t);
      i.has(e) || 0 === i.size ? i.set(e, n) : console.error("Bootstrap doesn't allow more than one instance per element. Bound instance: ".concat(Array.from(i.keys())[0], "."));
    },
    le = function le(t, e) {
      return re.has(t) && re.get(t).get(e) || null;
    },
    ce = function ce(t, e) {
      if (!re.has(t)) return;
      var n = re.get(t);
      n.delete(e), 0 === n.size && re.delete(t);
    };
  var he = /[^.]*(?=\..*)\.|.*/,
    de = /\..*/,
    ue = /::\d+$/,
    fe = {};
  var pe = 1;
  var me = {
      mouseenter: "mouseover",
      mouseleave: "mouseout"
    },
    ge = /^(mouseenter|mouseleave)/i,
    _e = new Set(["click", "dblclick", "mouseup", "mousedown", "contextmenu", "mousewheel", "DOMMouseScroll", "mouseover", "mouseout", "mousemove", "selectstart", "selectend", "keydown", "keypress", "keyup", "orientationchange", "touchstart", "touchmove", "touchend", "touchcancel", "pointerdown", "pointermove", "pointerup", "pointerleave", "pointercancel", "gesturestart", "gesturechange", "gestureend", "focus", "blur", "change", "reset", "select", "submit", "focusin", "focusout", "load", "unload", "beforeunload", "resize", "move", "DOMContentLoaded", "readystatechange", "error", "abort", "scroll"]);
  function be(t, e) {
    return e && "".concat(e, "::").concat(pe++) || t.uidEvent || pe++;
  }
  function ve(t) {
    var e = be(t);
    return t.uidEvent = e, fe[e] = fe[e] || {}, fe[e];
  }
  function ye(t, e) {
    var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
    var i = Object.keys(t);
    for (var _s = 0, _o = i.length; _s < _o; _s++) {
      var _o2 = t[i[_s]];
      if (_o2.originalHandler === e && _o2.delegationSelector === n) return _o2;
    }
    return null;
  }
  function we(t, e, n) {
    var i = "string" == typeof e,
      s = i ? n : e;
    var o = Ae(t);
    return _e.has(o) || (o = t), [i, s, o];
  }
  function Ee(t, e, n, i, s) {
    if ("string" != typeof e || !t) return;
    if (n || (n = i, i = null), ge.test(e)) {
      var _t2 = function _t2(t) {
        return function (e) {
          if (!e.relatedTarget || e.relatedTarget !== e.delegateTarget && !e.delegateTarget.contains(e.relatedTarget)) return t.call(this, e);
        };
      };
      i ? i = _t2(i) : n = _t2(n);
    }
    var _we = we(e, n, i),
      _we2 = _slicedToArray(_we, 3),
      o = _we2[0],
      r = _we2[1],
      a = _we2[2],
      l = ve(t),
      c = l[a] || (l[a] = {}),
      h = ye(c, r, o ? n : null);
    if (h) return void (h.oneOff = h.oneOff && s);
    var d = be(r, e.replace(he, "")),
      u = o ? function (t, e, n) {
        return function i(s) {
          var o = t.querySelectorAll(e);
          for (var _r = s.target; _r && _r !== this; _r = _r.parentNode) for (var _a = o.length; _a--;) if (o[_a] === _r) return s.delegateTarget = _r, i.oneOff && Le.off(t, s.type, e, n), n.apply(_r, [s]);
          return null;
        };
      }(t, n, i) : function (t, e) {
        return function n(i) {
          return i.delegateTarget = t, n.oneOff && Le.off(t, i.type, e), e.apply(t, [i]);
        };
      }(t, n);
    u.delegationSelector = o ? n : null, u.originalHandler = r, u.oneOff = s, u.uidEvent = d, c[d] = u, t.addEventListener(a, u, o);
  }
  function Te(t, e, n, i, s) {
    var o = ye(e[n], i, s);
    o && (t.removeEventListener(n, o, Boolean(s)), delete e[n][o.uidEvent]);
  }
  function Ae(t) {
    return t = t.replace(de, ""), me[t] || t;
  }
  var Le = {
    on: function on(t, e, n, i) {
      Ee(t, e, n, i, !1);
    },
    one: function one(t, e, n, i) {
      Ee(t, e, n, i, !0);
    },
    off: function off(t, e, n, i) {
      if ("string" != typeof e || !t) return;
      var _we3 = we(e, n, i),
        _we4 = _slicedToArray(_we3, 3),
        s = _we4[0],
        o = _we4[1],
        r = _we4[2],
        a = r !== e,
        l = ve(t),
        c = e.startsWith(".");
      if (void 0 !== o) {
        if (!l || !l[r]) return;
        return void Te(t, l, r, o, s ? n : null);
      }
      c && Object.keys(l).forEach(function (n) {
        !function (t, e, n, i) {
          var s = e[n] || {};
          Object.keys(s).forEach(function (o) {
            if (o.includes(i)) {
              var _i3 = s[o];
              Te(t, e, n, _i3.originalHandler, _i3.delegationSelector);
            }
          });
        }(t, l, n, e.slice(1));
      });
      var h = l[r] || {};
      Object.keys(h).forEach(function (n) {
        var i = n.replace(ue, "");
        if (!a || e.includes(i)) {
          var _e4 = h[n];
          Te(t, l, r, _e4.originalHandler, _e4.delegationSelector);
        }
      });
    },
    trigger: function trigger(t, e, n) {
      if ("string" != typeof e || !t) return null;
      var i = ne(),
        s = Ae(e),
        o = e !== s,
        r = _e.has(s);
      var a,
        l = !0,
        c = !0,
        h = !1,
        d = null;
      return o && i && (a = i.Event(e, n), i(t).trigger(a), l = !a.isPropagationStopped(), c = !a.isImmediatePropagationStopped(), h = a.isDefaultPrevented()), r ? (d = document.createEvent("HTMLEvents"), d.initEvent(s, l, !0)) : d = new CustomEvent(e, {
        bubbles: l,
        cancelable: !0
      }), void 0 !== n && Object.keys(n).forEach(function (t) {
        Object.defineProperty(d, t, {
          get: function get() {
            return n[t];
          }
        });
      }), h && d.preventDefault(), c && t.dispatchEvent(d), d.defaultPrevented && void 0 !== a && a.preventDefault(), d;
    }
  };
  var ke = /*#__PURE__*/function () {
    function ke(t) {
      _classCallCheck(this, ke);
      (t = Xt(t)) && (this._element = t, ae(this._element, this.constructor.DATA_KEY, this));
    }
    _createClass(ke, [{
      key: "dispose",
      value: function dispose() {
        var _this = this;
        ce(this._element, this.constructor.DATA_KEY), Le.off(this._element, this.constructor.EVENT_KEY), Object.getOwnPropertyNames(this).forEach(function (t) {
          _this[t] = null;
        });
      }
    }, {
      key: "_queueCallback",
      value: function _queueCallback(t, e) {
        var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !0;
        if (!n) return void oe(t);
        var i = Ft(e);
        Le.one(e, "transitionend", function () {
          return oe(t);
        }), Yt(e, i);
      }
    }], [{
      key: "getInstance",
      value: function getInstance(t) {
        return le(t, this.DATA_KEY);
      }
    }, {
      key: "VERSION",
      get: function get() {
        return "5.0.1";
      }
    }, {
      key: "NAME",
      get: function get() {
        throw new Error('You have to implement the static method "NAME", for each component!');
      }
    }, {
      key: "DATA_KEY",
      get: function get() {
        return "bs.".concat(this.NAME);
      }
    }, {
      key: "EVENT_KEY",
      get: function get() {
        return ".".concat(this.DATA_KEY);
      }
    }]);
    return ke;
  }();
  var Ce = "bs.alert";
  var Oe = /*#__PURE__*/function (_ke) {
    _inherits(Oe, _ke);
    var _super = _createSuper(Oe);
    function Oe() {
      _classCallCheck(this, Oe);
      return _super.apply(this, arguments);
    }
    _createClass(Oe, [{
      key: "close",
      value: function close(t) {
        var e = t ? this._getRootElement(t) : this._element,
          n = this._triggerCloseEvent(e);
        null === n || n.defaultPrevented || this._removeElement(e);
      }
    }, {
      key: "_getRootElement",
      value: function _getRootElement(t) {
        return Ut(t) || t.closest(".alert");
      }
    }, {
      key: "_triggerCloseEvent",
      value: function _triggerCloseEvent(t) {
        return Le.trigger(t, "close.bs.alert");
      }
    }, {
      key: "_removeElement",
      value: function _removeElement(t) {
        var _this2 = this;
        t.classList.remove("show");
        var e = t.classList.contains("fade");
        this._queueCallback(function () {
          return _this2._destroyElement(t);
        }, t, e);
      }
    }, {
      key: "_destroyElement",
      value: function _destroyElement(t) {
        t.parentNode && t.parentNode.removeChild(t), Le.trigger(t, "closed.bs.alert");
      }
    }], [{
      key: "NAME",
      get: function get() {
        return "alert";
      }
    }, {
      key: "jQueryInterface",
      value: function jQueryInterface(t) {
        return this.each(function () {
          var e = le(this, Ce);
          e || (e = new Oe(this)), "close" === t && e[t](this);
        });
      }
    }, {
      key: "handleDismiss",
      value: function handleDismiss(t) {
        return function (e) {
          e && e.preventDefault(), t.close(this);
        };
      }
    }]);
    return Oe;
  }(ke);
  Le.on(document, "click.bs.alert.data-api", '[data-bs-dismiss="alert"]', Oe.handleDismiss(new Oe())), se(Oe);
  var De = "bs.button",
    xe = '[data-bs-toggle="button"]';
  var Ne = /*#__PURE__*/function (_ke2) {
    _inherits(Ne, _ke2);
    var _super2 = _createSuper(Ne);
    function Ne() {
      _classCallCheck(this, Ne);
      return _super2.apply(this, arguments);
    }
    _createClass(Ne, [{
      key: "toggle",
      value: function toggle() {
        this._element.setAttribute("aria-pressed", this._element.classList.toggle("active"));
      }
    }], [{
      key: "NAME",
      get: function get() {
        return "button";
      }
    }, {
      key: "jQueryInterface",
      value: function jQueryInterface(t) {
        return this.each(function () {
          var e = le(this, De);
          e || (e = new Ne(this)), "toggle" === t && e[t]();
        });
      }
    }]);
    return Ne;
  }(ke);
  function Se(t) {
    return "true" === t || "false" !== t && (t === Number(t).toString() ? Number(t) : "" === t || "null" === t ? null : t);
  }
  function Ie(t) {
    return t.replace(/[A-Z]/g, function (t) {
      return "-".concat(t.toLowerCase());
    });
  }
  Le.on(document, "click.bs.button.data-api", xe, function (t) {
    t.preventDefault();
    var e = t.target.closest(xe);
    var n = le(e, De);
    n || (n = new Ne(e)), n.toggle();
  }), se(Ne);
  var je = {
      setDataAttribute: function setDataAttribute(t, e, n) {
        t.setAttribute("data-bs-".concat(Ie(e)), n);
      },
      removeDataAttribute: function removeDataAttribute(t, e) {
        t.removeAttribute("data-bs-".concat(Ie(e)));
      },
      getDataAttributes: function getDataAttributes(t) {
        if (!t) return {};
        var e = {};
        return Object.keys(t.dataset).filter(function (t) {
          return t.startsWith("bs");
        }).forEach(function (n) {
          var i = n.replace(/^bs/, "");
          i = i.charAt(0).toLowerCase() + i.slice(1, i.length), e[i] = Se(t.dataset[n]);
        }), e;
      },
      getDataAttribute: function getDataAttribute(t, e) {
        return Se(t.getAttribute("data-bs-".concat(Ie(e))));
      },
      offset: function offset(t) {
        var e = t.getBoundingClientRect();
        return {
          top: e.top + document.body.scrollTop,
          left: e.left + document.body.scrollLeft
        };
      },
      position: function position(t) {
        return {
          top: t.offsetTop,
          left: t.offsetLeft
        };
      }
    },
    Pe = "carousel",
    Me = "bs.carousel",
    He = {
      interval: 5e3,
      keyboard: !0,
      slide: !1,
      pause: "hover",
      wrap: !0,
      touch: !0
    },
    Re = {
      interval: "(number|boolean)",
      keyboard: "boolean",
      slide: "(boolean|string)",
      pause: "(string|boolean)",
      wrap: "boolean",
      touch: "boolean"
    },
    Be = "next",
    $e = "prev",
    We = "left",
    qe = "right",
    ze = "slid.bs.carousel",
    Ue = "active",
    Fe = ".active.carousel-item",
    Ve = "touch";
  var Ke = /*#__PURE__*/function (_ke3) {
    _inherits(Ke, _ke3);
    var _super3 = _createSuper(Ke);
    function Ke(t, e) {
      var _this3;
      _classCallCheck(this, Ke);
      _this3 = _super3.call(this, t), _this3._items = null, _this3._interval = null, _this3._activeElement = null, _this3._isPaused = !1, _this3._isSliding = !1, _this3.touchTimeout = null, _this3.touchStartX = 0, _this3.touchDeltaX = 0, _this3._config = _this3._getConfig(e), _this3._indicatorsElement = Pt(".carousel-indicators", _this3._element), _this3._touchSupported = "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0, _this3._pointerEvent = Boolean(window.PointerEvent), _this3._addEventListeners();
      return _this3;
    }
    _createClass(Ke, [{
      key: "next",
      value: function next() {
        this._isSliding || this._slide(Be);
      }
    }, {
      key: "nextWhenVisible",
      value: function nextWhenVisible() {
        !document.hidden && Gt(this._element) && this.next();
      }
    }, {
      key: "prev",
      value: function prev() {
        this._isSliding || this._slide($e);
      }
    }, {
      key: "pause",
      value: function pause(t) {
        t || (this._isPaused = !0), Pt(".carousel-item-next, .carousel-item-prev", this._element) && (Vt(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null;
      }
    }, {
      key: "cycle",
      value: function cycle(t) {
        t || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config && this._config.interval && !this._isPaused && (this._updateInterval(), this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval));
      }
    }, {
      key: "to",
      value: function to(t) {
        var _this4 = this;
        this._activeElement = Pt(Fe, this._element);
        var e = this._getItemIndex(this._activeElement);
        if (t > this._items.length - 1 || t < 0) return;
        if (this._isSliding) return void Le.one(this._element, ze, function () {
          return _this4.to(t);
        });
        if (e === t) return this.pause(), void this.cycle();
        var n = t > e ? Be : $e;
        this._slide(n, this._items[t]);
      }
    }, {
      key: "_getConfig",
      value: function _getConfig(t) {
        return t = _objectSpread(_objectSpread({}, He), t), Qt(Pe, t, Re), t;
      }
    }, {
      key: "_handleSwipe",
      value: function _handleSwipe() {
        var t = Math.abs(this.touchDeltaX);
        if (t <= 40) return;
        var e = t / this.touchDeltaX;
        this.touchDeltaX = 0, e && this._slide(e > 0 ? qe : We);
      }
    }, {
      key: "_addEventListeners",
      value: function _addEventListeners() {
        var _this5 = this;
        this._config.keyboard && Le.on(this._element, "keydown.bs.carousel", function (t) {
          return _this5._keydown(t);
        }), "hover" === this._config.pause && (Le.on(this._element, "mouseenter.bs.carousel", function (t) {
          return _this5.pause(t);
        }), Le.on(this._element, "mouseleave.bs.carousel", function (t) {
          return _this5.cycle(t);
        })), this._config.touch && this._touchSupported && this._addTouchEventListeners();
      }
    }, {
      key: "_addTouchEventListeners",
      value: function _addTouchEventListeners() {
        var _this6 = this;
        var t = function t(_t3) {
            !_this6._pointerEvent || "pen" !== _t3.pointerType && _t3.pointerType !== Ve ? _this6._pointerEvent || (_this6.touchStartX = _t3.touches[0].clientX) : _this6.touchStartX = _t3.clientX;
          },
          e = function e(t) {
            _this6.touchDeltaX = t.touches && t.touches.length > 1 ? 0 : t.touches[0].clientX - _this6.touchStartX;
          },
          n = function n(t) {
            !_this6._pointerEvent || "pen" !== t.pointerType && t.pointerType !== Ve || (_this6.touchDeltaX = t.clientX - _this6.touchStartX), _this6._handleSwipe(), "hover" === _this6._config.pause && (_this6.pause(), _this6.touchTimeout && clearTimeout(_this6.touchTimeout), _this6.touchTimeout = setTimeout(function (t) {
              return _this6.cycle(t);
            }, 500 + _this6._config.interval));
          };
        jt(".carousel-item img", this._element).forEach(function (t) {
          Le.on(t, "dragstart.bs.carousel", function (t) {
            return t.preventDefault();
          });
        }), this._pointerEvent ? (Le.on(this._element, "pointerdown.bs.carousel", function (e) {
          return t(e);
        }), Le.on(this._element, "pointerup.bs.carousel", function (t) {
          return n(t);
        }), this._element.classList.add("pointer-event")) : (Le.on(this._element, "touchstart.bs.carousel", function (e) {
          return t(e);
        }), Le.on(this._element, "touchmove.bs.carousel", function (t) {
          return e(t);
        }), Le.on(this._element, "touchend.bs.carousel", function (t) {
          return n(t);
        }));
      }
    }, {
      key: "_keydown",
      value: function _keydown(t) {
        /input|textarea/i.test(t.target.tagName) || ("ArrowLeft" === t.key ? (t.preventDefault(), this._slide(qe)) : "ArrowRight" === t.key && (t.preventDefault(), this._slide(We)));
      }
    }, {
      key: "_getItemIndex",
      value: function _getItemIndex(t) {
        return this._items = t && t.parentNode ? jt(".carousel-item", t.parentNode) : [], this._items.indexOf(t);
      }
    }, {
      key: "_getItemByOrder",
      value: function _getItemByOrder(t, e) {
        var n = t === Be,
          i = t === $e,
          s = this._getItemIndex(e),
          o = this._items.length - 1;
        if ((i && 0 === s || n && s === o) && !this._config.wrap) return e;
        var r = (s + (i ? -1 : 1)) % this._items.length;
        return -1 === r ? this._items[this._items.length - 1] : this._items[r];
      }
    }, {
      key: "_triggerSlideEvent",
      value: function _triggerSlideEvent(t, e) {
        var n = this._getItemIndex(t),
          i = this._getItemIndex(Pt(Fe, this._element));
        return Le.trigger(this._element, "slide.bs.carousel", {
          relatedTarget: t,
          direction: e,
          from: i,
          to: n
        });
      }
    }, {
      key: "_setActiveIndicatorElement",
      value: function _setActiveIndicatorElement(t) {
        if (this._indicatorsElement) {
          var _e5 = Pt(".active", this._indicatorsElement);
          _e5.classList.remove(Ue), _e5.removeAttribute("aria-current");
          var _n5 = jt("[data-bs-target]", this._indicatorsElement);
          for (var _e6 = 0; _e6 < _n5.length; _e6++) if (Number.parseInt(_n5[_e6].getAttribute("data-bs-slide-to"), 10) === this._getItemIndex(t)) {
            _n5[_e6].classList.add(Ue), _n5[_e6].setAttribute("aria-current", "true");
            break;
          }
        }
      }
    }, {
      key: "_updateInterval",
      value: function _updateInterval() {
        var t = this._activeElement || Pt(Fe, this._element);
        if (!t) return;
        var e = Number.parseInt(t.getAttribute("data-bs-interval"), 10);
        e ? (this._config.defaultInterval = this._config.defaultInterval || this._config.interval, this._config.interval = e) : this._config.interval = this._config.defaultInterval || this._config.interval;
      }
    }, {
      key: "_slide",
      value: function _slide(t, e) {
        var _this7 = this;
        var n = this._directionToOrder(t),
          i = Pt(Fe, this._element),
          s = this._getItemIndex(i),
          o = e || this._getItemByOrder(n, i),
          r = this._getItemIndex(o),
          a = Boolean(this._interval),
          l = n === Be,
          c = l ? "carousel-item-start" : "carousel-item-end",
          h = l ? "carousel-item-next" : "carousel-item-prev",
          d = this._orderToDirection(n);
        if (o && o.classList.contains(Ue)) return void (this._isSliding = !1);
        if (this._triggerSlideEvent(o, d).defaultPrevented) return;
        if (!i || !o) return;
        this._isSliding = !0, a && this.pause(), this._setActiveIndicatorElement(o), this._activeElement = o;
        var u = function u() {
          Le.trigger(_this7._element, ze, {
            relatedTarget: o,
            direction: d,
            from: s,
            to: r
          });
        };
        if (this._element.classList.contains("slide")) {
          o.classList.add(h), ee(o), i.classList.add(c), o.classList.add(c);
          var _t4 = function _t4() {
            o.classList.remove(c, h), o.classList.add(Ue), i.classList.remove(Ue, h, c), _this7._isSliding = !1, setTimeout(u, 0);
          };
          this._queueCallback(_t4, i, !0);
        } else i.classList.remove(Ue), o.classList.add(Ue), this._isSliding = !1, u();
        a && this.cycle();
      }
    }, {
      key: "_directionToOrder",
      value: function _directionToOrder(t) {
        return [qe, We].includes(t) ? ie() ? t === We ? $e : Be : t === We ? Be : $e : t;
      }
    }, {
      key: "_orderToDirection",
      value: function _orderToDirection(t) {
        return [Be, $e].includes(t) ? ie() ? t === $e ? We : qe : t === $e ? qe : We : t;
      }
    }], [{
      key: "Default",
      get: function get() {
        return He;
      }
    }, {
      key: "NAME",
      get: function get() {
        return Pe;
      }
    }, {
      key: "carouselInterface",
      value: function carouselInterface(t, e) {
        var n = le(t, Me),
          i = _objectSpread(_objectSpread({}, He), je.getDataAttributes(t));
        "object" == _typeof(e) && (i = _objectSpread(_objectSpread({}, i), e));
        var s = "string" == typeof e ? e : i.slide;
        if (n || (n = new Ke(t, i)), "number" == typeof e) n.to(e);else if ("string" == typeof s) {
          if (void 0 === n[s]) throw new TypeError("No method named \"".concat(s, "\""));
          n[s]();
        } else i.interval && i.ride && (n.pause(), n.cycle());
      }
    }, {
      key: "jQueryInterface",
      value: function jQueryInterface(t) {
        return this.each(function () {
          Ke.carouselInterface(this, t);
        });
      }
    }, {
      key: "dataApiClickHandler",
      value: function dataApiClickHandler(t) {
        var e = Ut(this);
        if (!e || !e.classList.contains("carousel")) return;
        var n = _objectSpread(_objectSpread({}, je.getDataAttributes(e)), je.getDataAttributes(this)),
          i = this.getAttribute("data-bs-slide-to");
        i && (n.interval = !1), Ke.carouselInterface(e, n), i && le(e, Me).to(i), t.preventDefault();
      }
    }]);
    return Ke;
  }(ke);
  Le.on(document, "click.bs.carousel.data-api", "[data-bs-slide], [data-bs-slide-to]", Ke.dataApiClickHandler), Le.on(window, "load.bs.carousel.data-api", function () {
    var t = jt('[data-bs-ride="carousel"]');
    for (var _e7 = 0, _n6 = t.length; _e7 < _n6; _e7++) Ke.carouselInterface(t[_e7], le(t[_e7], Me));
  }), se(Ke);
  var Xe = "collapse",
    Ye = "bs.collapse",
    Qe = {
      toggle: !0,
      parent: ""
    },
    Ge = {
      toggle: "boolean",
      parent: "(string|element)"
    },
    Ze = "show",
    Je = "collapse",
    tn = "collapsing",
    en = "collapsed",
    nn = "width",
    sn = '[data-bs-toggle="collapse"]';
  var on = /*#__PURE__*/function (_ke4) {
    _inherits(on, _ke4);
    var _super4 = _createSuper(on);
    function on(t, e) {
      var _this8;
      _classCallCheck(this, on);
      _this8 = _super4.call(this, t), _this8._isTransitioning = !1, _this8._config = _this8._getConfig(e), _this8._triggerArray = jt("[data-bs-toggle=\"collapse\"][href=\"#".concat(_this8._element.id, "\"],[data-bs-toggle=\"collapse\"][data-bs-target=\"#").concat(_this8._element.id, "\"]"));
      var n = jt(sn);
      for (var _t5 = 0, _e8 = n.length; _t5 < _e8; _t5++) {
        var _e9 = n[_t5],
          _i4 = zt(_e9),
          _s2 = jt(_i4).filter(function (t) {
            return t === _this8._element;
          });
        null !== _i4 && _s2.length && (_this8._selector = _i4, _this8._triggerArray.push(_e9));
      }
      _this8._parent = _this8._config.parent ? _this8._getParent() : null, _this8._config.parent || _this8._addAriaAndCollapsedClass(_this8._element, _this8._triggerArray), _this8._config.toggle && _this8.toggle();
      return _this8;
    }
    _createClass(on, [{
      key: "toggle",
      value: function toggle() {
        this._element.classList.contains(Ze) ? this.hide() : this.show();
      }
    }, {
      key: "show",
      value: function show() {
        var _this9 = this;
        if (this._isTransitioning || this._element.classList.contains(Ze)) return;
        var t, e;
        this._parent && (t = jt(".show, .collapsing", this._parent).filter(function (t) {
          return "string" == typeof _this9._config.parent ? t.getAttribute("data-bs-parent") === _this9._config.parent : t.classList.contains(Je);
        }), 0 === t.length && (t = null));
        var n = Pt(this._selector);
        if (t) {
          var _i5 = t.find(function (t) {
            return n !== t;
          });
          if (e = _i5 ? le(_i5, Ye) : null, e && e._isTransitioning) return;
        }
        if (Le.trigger(this._element, "show.bs.collapse").defaultPrevented) return;
        t && t.forEach(function (t) {
          n !== t && on.collapseInterface(t, "hide"), e || ae(t, Ye, null);
        });
        var i = this._getDimension();
        this._element.classList.remove(Je), this._element.classList.add(tn), this._element.style[i] = 0, this._triggerArray.length && this._triggerArray.forEach(function (t) {
          t.classList.remove(en), t.setAttribute("aria-expanded", !0);
        }), this.setTransitioning(!0);
        var s = "scroll ".concat(i[0].toUpperCase() + i.slice(1));
        this._queueCallback(function () {
          _this9._element.classList.remove(tn), _this9._element.classList.add(Je, Ze), _this9._element.style[i] = "", _this9.setTransitioning(!1), Le.trigger(_this9._element, "shown.bs.collapse");
        }, this._element, !0), this._element.style[i] = "".concat(this._element[s], "px");
      }
    }, {
      key: "hide",
      value: function hide() {
        var _this10 = this;
        if (this._isTransitioning || !this._element.classList.contains(Ze)) return;
        if (Le.trigger(this._element, "hide.bs.collapse").defaultPrevented) return;
        var t = this._getDimension();
        this._element.style[t] = "".concat(this._element.getBoundingClientRect()[t], "px"), ee(this._element), this._element.classList.add(tn), this._element.classList.remove(Je, Ze);
        var e = this._triggerArray.length;
        if (e > 0) for (var _t6 = 0; _t6 < e; _t6++) {
          var _e10 = this._triggerArray[_t6],
            _n7 = Ut(_e10);
          _n7 && !_n7.classList.contains(Ze) && (_e10.classList.add(en), _e10.setAttribute("aria-expanded", !1));
        }
        this.setTransitioning(!0);
        this._element.style[t] = "", this._queueCallback(function () {
          _this10.setTransitioning(!1), _this10._element.classList.remove(tn), _this10._element.classList.add(Je), Le.trigger(_this10._element, "hidden.bs.collapse");
        }, this._element, !0);
      }
    }, {
      key: "setTransitioning",
      value: function setTransitioning(t) {
        this._isTransitioning = t;
      }
    }, {
      key: "_getConfig",
      value: function _getConfig(t) {
        return (t = _objectSpread(_objectSpread({}, Qe), t)).toggle = Boolean(t.toggle), Qt(Xe, t, Ge), t;
      }
    }, {
      key: "_getDimension",
      value: function _getDimension() {
        return this._element.classList.contains(nn) ? nn : "height";
      }
    }, {
      key: "_getParent",
      value: function _getParent() {
        var _this11 = this;
        var t = this._config.parent;
        t = Xt(t);
        return jt("[data-bs-toggle=\"collapse\"][data-bs-parent=\"".concat(t, "\"]"), t).forEach(function (t) {
          var e = Ut(t);
          _this11._addAriaAndCollapsedClass(e, [t]);
        }), t;
      }
    }, {
      key: "_addAriaAndCollapsedClass",
      value: function _addAriaAndCollapsedClass(t, e) {
        if (!t || !e.length) return;
        var n = t.classList.contains(Ze);
        e.forEach(function (t) {
          n ? t.classList.remove(en) : t.classList.add(en), t.setAttribute("aria-expanded", n);
        });
      }
    }], [{
      key: "Default",
      get: function get() {
        return Qe;
      }
    }, {
      key: "NAME",
      get: function get() {
        return Xe;
      }
    }, {
      key: "collapseInterface",
      value: function collapseInterface(t, e) {
        var n = le(t, Ye);
        var i = _objectSpread(_objectSpread(_objectSpread({}, Qe), je.getDataAttributes(t)), "object" == _typeof(e) && e ? e : {});
        if (!n && i.toggle && "string" == typeof e && /show|hide/.test(e) && (i.toggle = !1), n || (n = new on(t, i)), "string" == typeof e) {
          if (void 0 === n[e]) throw new TypeError("No method named \"".concat(e, "\""));
          n[e]();
        }
      }
    }, {
      key: "jQueryInterface",
      value: function jQueryInterface(t) {
        return this.each(function () {
          on.collapseInterface(this, t);
        });
      }
    }]);
    return on;
  }(ke);
  Le.on(document, "click.bs.collapse.data-api", sn, function (t) {
    ("A" === t.target.tagName || t.delegateTarget && "A" === t.delegateTarget.tagName) && t.preventDefault();
    var e = je.getDataAttributes(this),
      n = zt(this);
    jt(n).forEach(function (t) {
      var n = le(t, Ye);
      var i;
      n ? (null === n._parent && "string" == typeof e.parent && (n._config.parent = e.parent, n._parent = n._getParent()), i = "toggle") : i = e, on.collapseInterface(t, i);
    });
  }), se(on);
  var rn = "dropdown",
    an = "bs.dropdown",
    ln = "Escape",
    cn = "Space",
    hn = "ArrowUp",
    dn = "ArrowDown",
    un = new RegExp("ArrowUp|ArrowDown|Escape"),
    fn = "click.bs.dropdown.data-api",
    pn = "keydown.bs.dropdown.data-api",
    mn = "show",
    gn = '[data-bs-toggle="dropdown"]',
    _n = ".dropdown-menu",
    bn = ie() ? "top-end" : "top-start",
    vn = ie() ? "top-start" : "top-end",
    yn = ie() ? "bottom-end" : "bottom-start",
    wn = ie() ? "bottom-start" : "bottom-end",
    En = ie() ? "left-start" : "right-start",
    Tn = ie() ? "right-start" : "left-start",
    An = {
      offset: [0, 2],
      boundary: "clippingParents",
      reference: "toggle",
      display: "dynamic",
      popperConfig: null,
      autoClose: !0
    },
    Ln = {
      offset: "(array|string|function)",
      boundary: "(string|element)",
      reference: "(string|element|object)",
      display: "string",
      popperConfig: "(null|object|function)",
      autoClose: "(boolean|string)"
    };
  var kn = /*#__PURE__*/function (_ke5) {
    _inherits(kn, _ke5);
    var _super5 = _createSuper(kn);
    function kn(t, e) {
      var _this12;
      _classCallCheck(this, kn);
      _this12 = _super5.call(this, t), _this12._popper = null, _this12._config = _this12._getConfig(e), _this12._menu = _this12._getMenuElement(), _this12._inNavbar = _this12._detectNavbar(), _this12._addEventListeners();
      return _this12;
    }
    _createClass(kn, [{
      key: "toggle",
      value: function toggle() {
        if (Zt(this._element)) return;
        this._element.classList.contains(mn) ? this.hide() : this.show();
      }
    }, {
      key: "show",
      value: function show() {
        if (Zt(this._element) || this._menu.classList.contains(mn)) return;
        var t = kn.getParentFromElement(this._element),
          e = {
            relatedTarget: this._element
          };
        if (!Le.trigger(this._element, "show.bs.dropdown", e).defaultPrevented) {
          var _ref3;
          if (this._inNavbar) je.setDataAttribute(this._menu, "popper", "none");else {
            if (void 0 === n) throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");
            var _e11 = this._element;
            "parent" === this._config.reference ? _e11 = t : Kt(this._config.reference) ? _e11 = Xt(this._config.reference) : "object" == _typeof(this._config.reference) && (_e11 = this._config.reference);
            var _i6 = this._getPopperConfig(),
              _s3 = _i6.modifiers.find(function (t) {
                return "applyStyles" === t.name && !1 === t.enabled;
              });
            this._popper = St(_e11, this._menu, _i6), _s3 && je.setDataAttribute(this._menu, "popper", "static");
          }
          "ontouchstart" in document.documentElement && !t.closest(".navbar-nav") && (_ref3 = []).concat.apply(_ref3, _toConsumableArray(document.body.children)).forEach(function (t) {
            return Le.on(t, "mouseover", te);
          }), this._element.focus(), this._element.setAttribute("aria-expanded", !0), this._menu.classList.toggle(mn), this._element.classList.toggle(mn), Le.trigger(this._element, "shown.bs.dropdown", e);
        }
      }
    }, {
      key: "hide",
      value: function hide() {
        if (Zt(this._element) || !this._menu.classList.contains(mn)) return;
        var t = {
          relatedTarget: this._element
        };
        this._completeHide(t);
      }
    }, {
      key: "dispose",
      value: function dispose() {
        this._popper && this._popper.destroy(), _get(_getPrototypeOf(kn.prototype), "dispose", this).call(this);
      }
    }, {
      key: "update",
      value: function update() {
        this._inNavbar = this._detectNavbar(), this._popper && this._popper.update();
      }
    }, {
      key: "_addEventListeners",
      value: function _addEventListeners() {
        var _this13 = this;
        Le.on(this._element, "click.bs.dropdown", function (t) {
          t.preventDefault(), _this13.toggle();
        });
      }
    }, {
      key: "_completeHide",
      value: function _completeHide(t) {
        var _ref4;
        Le.trigger(this._element, "hide.bs.dropdown", t).defaultPrevented || ("ontouchstart" in document.documentElement && (_ref4 = []).concat.apply(_ref4, _toConsumableArray(document.body.children)).forEach(function (t) {
          return Le.off(t, "mouseover", te);
        }), this._popper && this._popper.destroy(), this._menu.classList.remove(mn), this._element.classList.remove(mn), this._element.setAttribute("aria-expanded", "false"), je.removeDataAttribute(this._menu, "popper"), Le.trigger(this._element, "hidden.bs.dropdown", t));
      }
    }, {
      key: "_getConfig",
      value: function _getConfig(t) {
        if (t = _objectSpread(_objectSpread(_objectSpread({}, this.constructor.Default), je.getDataAttributes(this._element)), t), Qt(rn, t, this.constructor.DefaultType), "object" == _typeof(t.reference) && !Kt(t.reference) && "function" != typeof t.reference.getBoundingClientRect) throw new TypeError("".concat(rn.toUpperCase(), ": Option \"reference\" provided type \"object\" without a required \"getBoundingClientRect\" method."));
        return t;
      }
    }, {
      key: "_getMenuElement",
      value: function _getMenuElement() {
        return Bt(this._element, _n)[0];
      }
    }, {
      key: "_getPlacement",
      value: function _getPlacement() {
        var t = this._element.parentNode;
        if (t.classList.contains("dropend")) return En;
        if (t.classList.contains("dropstart")) return Tn;
        var e = "end" === getComputedStyle(this._menu).getPropertyValue("--bs-position").trim();
        return t.classList.contains("dropup") ? e ? vn : bn : e ? wn : yn;
      }
    }, {
      key: "_detectNavbar",
      value: function _detectNavbar() {
        return null !== this._element.closest(".navbar");
      }
    }, {
      key: "_getOffset",
      value: function _getOffset() {
        var _this14 = this;
        var t = this._config.offset;
        return "string" == typeof t ? t.split(",").map(function (t) {
          return Number.parseInt(t, 10);
        }) : "function" == typeof t ? function (e) {
          return t(e, _this14._element);
        } : t;
      }
    }, {
      key: "_getPopperConfig",
      value: function _getPopperConfig() {
        var t = {
          placement: this._getPlacement(),
          modifiers: [{
            name: "preventOverflow",
            options: {
              boundary: this._config.boundary
            }
          }, {
            name: "offset",
            options: {
              offset: this._getOffset()
            }
          }]
        };
        return "static" === this._config.display && (t.modifiers = [{
          name: "applyStyles",
          enabled: !1
        }]), _objectSpread(_objectSpread({}, t), "function" == typeof this._config.popperConfig ? this._config.popperConfig(t) : this._config.popperConfig);
      }
    }, {
      key: "_selectMenuItem",
      value: function _selectMenuItem(t) {
        var e = jt(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)", this._menu).filter(Gt);
        if (!e.length) return;
        var n = e.indexOf(t.target);
        t.key === hn && n > 0 && n--, t.key === dn && n < e.length - 1 && n++, n = -1 === n ? 0 : n, e[n].focus();
      }
    }], [{
      key: "Default",
      get: function get() {
        return An;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return Ln;
      }
    }, {
      key: "NAME",
      get: function get() {
        return rn;
      }
    }, {
      key: "dropdownInterface",
      value: function dropdownInterface(t, e) {
        var n = le(t, an);
        if (n || (n = new kn(t, "object" == _typeof(e) ? e : null)), "string" == typeof e) {
          if (void 0 === n[e]) throw new TypeError("No method named \"".concat(e, "\""));
          n[e]();
        }
      }
    }, {
      key: "jQueryInterface",
      value: function jQueryInterface(t) {
        return this.each(function () {
          kn.dropdownInterface(this, t);
        });
      }
    }, {
      key: "clearMenus",
      value: function clearMenus(t) {
        if (t && (2 === t.button || "keyup" === t.type && "Tab" !== t.key)) return;
        var e = jt(gn);
        for (var _n8 = 0, _i7 = e.length; _n8 < _i7; _n8++) {
          var _i8 = le(e[_n8], an);
          if (!_i8 || !1 === _i8._config.autoClose) continue;
          if (!_i8._element.classList.contains(mn)) continue;
          var _s4 = {
            relatedTarget: _i8._element
          };
          if (t) {
            var _e12 = t.composedPath(),
              _n9 = _e12.includes(_i8._menu);
            if (_e12.includes(_i8._element) || "inside" === _i8._config.autoClose && !_n9 || "outside" === _i8._config.autoClose && _n9) continue;
            if (_i8._menu.contains(t.target) && ("keyup" === t.type && "Tab" === t.key || /input|select|option|textarea|form/i.test(t.target.tagName))) continue;
            "click" === t.type && (_s4.clickEvent = t);
          }
          _i8._completeHide(_s4);
        }
      }
    }, {
      key: "getParentFromElement",
      value: function getParentFromElement(t) {
        return Ut(t) || t.parentNode;
      }
    }, {
      key: "dataApiKeydownHandler",
      value: function dataApiKeydownHandler(t) {
        var _this15 = this;
        if (/input|textarea/i.test(t.target.tagName) ? t.key === cn || t.key !== ln && (t.key !== dn && t.key !== hn || t.target.closest(_n)) : !un.test(t.key)) return;
        var e = this.classList.contains(mn);
        if (!e && t.key === ln) return;
        if (t.preventDefault(), t.stopPropagation(), Zt(this)) return;
        var n = function n() {
          return _this15.matches(gn) ? _this15 : Rt(_this15, gn)[0];
        };
        if (t.key === ln) return n().focus(), void kn.clearMenus();
        e || t.key !== hn && t.key !== dn ? e && t.key !== cn ? kn.getInstance(n())._selectMenuItem(t) : kn.clearMenus() : n().click();
      }
    }]);
    return kn;
  }(ke);
  Le.on(document, pn, gn, kn.dataApiKeydownHandler), Le.on(document, pn, _n, kn.dataApiKeydownHandler), Le.on(document, fn, kn.clearMenus), Le.on(document, "keyup.bs.dropdown.data-api", kn.clearMenus), Le.on(document, fn, gn, function (t) {
    t.preventDefault(), kn.dropdownInterface(this);
  }), se(kn);
  var Cn = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
    On = ".sticky-top",
    Dn = function Dn() {
      var t = document.documentElement.clientWidth;
      return Math.abs(window.innerWidth - t);
    },
    xn = function xn() {
      var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Dn();
      Nn(), Sn("body", "paddingRight", function (e) {
        return e + t;
      }), Sn(Cn, "paddingRight", function (e) {
        return e + t;
      }), Sn(On, "marginRight", function (e) {
        return e - t;
      });
    },
    Nn = function Nn() {
      var t = document.body.style.overflow;
      t && je.setDataAttribute(document.body, "overflow", t), document.body.style.overflow = "hidden";
    },
    Sn = function Sn(t, e, n) {
      var i = Dn();
      jt(t).forEach(function (t) {
        if (t !== document.body && window.innerWidth > t.clientWidth + i) return;
        var s = t.style[e],
          o = window.getComputedStyle(t)[e];
        je.setDataAttribute(t, e, s), t.style[e] = "".concat(n(Number.parseFloat(o)), "px");
      });
    },
    In = function In() {
      jn("body", "overflow"), jn("body", "paddingRight"), jn(Cn, "paddingRight"), jn(On, "marginRight");
    },
    jn = function jn(t, e) {
      jt(t).forEach(function (t) {
        var n = je.getDataAttribute(t, e);
        void 0 === n ? t.style.removeProperty(e) : (je.removeDataAttribute(t, e), t.style[e] = n);
      });
    },
    Pn = {
      isVisible: !0,
      isAnimated: !1,
      rootElement: document.body,
      clickCallback: null
    },
    Mn = {
      isVisible: "boolean",
      isAnimated: "boolean",
      rootElement: "element",
      clickCallback: "(function|null)"
    },
    Hn = "backdrop",
    Rn = "show",
    Bn = "mousedown.bs.backdrop";
  var $n = /*#__PURE__*/function () {
    function $n(t) {
      _classCallCheck(this, $n);
      this._config = this._getConfig(t), this._isAppended = !1, this._element = null;
    }
    _createClass($n, [{
      key: "show",
      value: function show(t) {
        this._config.isVisible ? (this._append(), this._config.isAnimated && ee(this._getElement()), this._getElement().classList.add(Rn), this._emulateAnimation(function () {
          oe(t);
        })) : oe(t);
      }
    }, {
      key: "hide",
      value: function hide(t) {
        var _this16 = this;
        this._config.isVisible ? (this._getElement().classList.remove(Rn), this._emulateAnimation(function () {
          _this16.dispose(), oe(t);
        })) : oe(t);
      }
    }, {
      key: "_getElement",
      value: function _getElement() {
        if (!this._element) {
          var _t7 = document.createElement("div");
          _t7.className = "modal-backdrop", this._config.isAnimated && _t7.classList.add("fade"), this._element = _t7;
        }
        return this._element;
      }
    }, {
      key: "_getConfig",
      value: function _getConfig(t) {
        return (t = _objectSpread(_objectSpread({}, Pn), "object" == _typeof(t) ? t : {})).rootElement = t.rootElement || document.body, Qt(Hn, t, Mn), t;
      }
    }, {
      key: "_append",
      value: function _append() {
        var _this17 = this;
        this._isAppended || (this._config.rootElement.appendChild(this._getElement()), Le.on(this._getElement(), Bn, function () {
          oe(_this17._config.clickCallback);
        }), this._isAppended = !0);
      }
    }, {
      key: "dispose",
      value: function dispose() {
        this._isAppended && (Le.off(this._element, Bn), this._getElement().parentNode.removeChild(this._element), this._isAppended = !1);
      }
    }, {
      key: "_emulateAnimation",
      value: function _emulateAnimation(t) {
        if (!this._config.isAnimated) return void oe(t);
        var e = Ft(this._getElement());
        Le.one(this._getElement(), "transitionend", function () {
          return oe(t);
        }), Yt(this._getElement(), e);
      }
    }]);
    return $n;
  }();
  var Wn = "modal",
    qn = ".bs.modal",
    zn = "Escape",
    Un = {
      backdrop: !0,
      keyboard: !0,
      focus: !0
    },
    Fn = {
      backdrop: "(boolean|string)",
      keyboard: "boolean",
      focus: "boolean"
    },
    Vn = "hidden.bs.modal",
    Kn = "show.bs.modal",
    Xn = "focusin.bs.modal",
    Yn = "resize.bs.modal",
    Qn = "click.dismiss.bs.modal",
    Gn = "keydown.dismiss.bs.modal",
    Zn = "mousedown.dismiss.bs.modal",
    Jn = "modal-open",
    ti = "show",
    ei = "modal-static";
  var ni = /*#__PURE__*/function (_ke6) {
    _inherits(ni, _ke6);
    var _super6 = _createSuper(ni);
    function ni(t, e) {
      var _this18;
      _classCallCheck(this, ni);
      _this18 = _super6.call(this, t), _this18._config = _this18._getConfig(e), _this18._dialog = Pt(".modal-dialog", _this18._element), _this18._backdrop = _this18._initializeBackDrop(), _this18._isShown = !1, _this18._ignoreBackdropClick = !1, _this18._isTransitioning = !1;
      return _this18;
    }
    _createClass(ni, [{
      key: "toggle",
      value: function toggle(t) {
        return this._isShown ? this.hide() : this.show(t);
      }
    }, {
      key: "show",
      value: function show(t) {
        var _this19 = this;
        if (this._isShown || this._isTransitioning) return;
        this._isAnimated() && (this._isTransitioning = !0);
        var e = Le.trigger(this._element, Kn, {
          relatedTarget: t
        });
        this._isShown || e.defaultPrevented || (this._isShown = !0, xn(), document.body.classList.add(Jn), this._adjustDialog(), this._setEscapeEvent(), this._setResizeEvent(), Le.on(this._element, Qn, '[data-bs-dismiss="modal"]', function (t) {
          return _this19.hide(t);
        }), Le.on(this._dialog, Zn, function () {
          Le.one(_this19._element, "mouseup.dismiss.bs.modal", function (t) {
            t.target === _this19._element && (_this19._ignoreBackdropClick = !0);
          });
        }), this._showBackdrop(function () {
          return _this19._showElement(t);
        }));
      }
    }, {
      key: "hide",
      value: function hide(t) {
        var _this20 = this;
        if (t && t.preventDefault(), !this._isShown || this._isTransitioning) return;
        if (Le.trigger(this._element, "hide.bs.modal").defaultPrevented) return;
        this._isShown = !1;
        var e = this._isAnimated();
        e && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), Le.off(document, Xn), this._element.classList.remove(ti), Le.off(this._element, Qn), Le.off(this._dialog, Zn), this._queueCallback(function () {
          return _this20._hideModal();
        }, this._element, e);
      }
    }, {
      key: "dispose",
      value: function dispose() {
        [window, this._dialog].forEach(function (t) {
          return Le.off(t, qn);
        }), this._backdrop.dispose(), _get(_getPrototypeOf(ni.prototype), "dispose", this).call(this), Le.off(document, Xn);
      }
    }, {
      key: "handleUpdate",
      value: function handleUpdate() {
        this._adjustDialog();
      }
    }, {
      key: "_initializeBackDrop",
      value: function _initializeBackDrop() {
        return new $n({
          isVisible: Boolean(this._config.backdrop),
          isAnimated: this._isAnimated()
        });
      }
    }, {
      key: "_getConfig",
      value: function _getConfig(t) {
        return t = _objectSpread(_objectSpread(_objectSpread({}, Un), je.getDataAttributes(this._element)), t), Qt(Wn, t, Fn), t;
      }
    }, {
      key: "_showElement",
      value: function _showElement(t) {
        var _this21 = this;
        var e = this._isAnimated(),
          n = Pt(".modal-body", this._dialog);
        this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.scrollTop = 0, n && (n.scrollTop = 0), e && ee(this._element), this._element.classList.add(ti), this._config.focus && this._enforceFocus();
        this._queueCallback(function () {
          _this21._config.focus && _this21._element.focus(), _this21._isTransitioning = !1, Le.trigger(_this21._element, "shown.bs.modal", {
            relatedTarget: t
          });
        }, this._dialog, e);
      }
    }, {
      key: "_enforceFocus",
      value: function _enforceFocus() {
        var _this22 = this;
        Le.off(document, Xn), Le.on(document, Xn, function (t) {
          document === t.target || _this22._element === t.target || _this22._element.contains(t.target) || _this22._element.focus();
        });
      }
    }, {
      key: "_setEscapeEvent",
      value: function _setEscapeEvent() {
        var _this23 = this;
        this._isShown ? Le.on(this._element, Gn, function (t) {
          _this23._config.keyboard && t.key === zn ? (t.preventDefault(), _this23.hide()) : _this23._config.keyboard || t.key !== zn || _this23._triggerBackdropTransition();
        }) : Le.off(this._element, Gn);
      }
    }, {
      key: "_setResizeEvent",
      value: function _setResizeEvent() {
        var _this24 = this;
        this._isShown ? Le.on(window, Yn, function () {
          return _this24._adjustDialog();
        }) : Le.off(window, Yn);
      }
    }, {
      key: "_hideModal",
      value: function _hideModal() {
        var _this25 = this;
        this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._isTransitioning = !1, this._backdrop.hide(function () {
          document.body.classList.remove(Jn), _this25._resetAdjustments(), In(), Le.trigger(_this25._element, Vn);
        });
      }
    }, {
      key: "_showBackdrop",
      value: function _showBackdrop(t) {
        var _this26 = this;
        Le.on(this._element, Qn, function (t) {
          _this26._ignoreBackdropClick ? _this26._ignoreBackdropClick = !1 : t.target === t.currentTarget && (!0 === _this26._config.backdrop ? _this26.hide() : "static" === _this26._config.backdrop && _this26._triggerBackdropTransition());
        }), this._backdrop.show(t);
      }
    }, {
      key: "_isAnimated",
      value: function _isAnimated() {
        return this._element.classList.contains("fade");
      }
    }, {
      key: "_triggerBackdropTransition",
      value: function _triggerBackdropTransition() {
        var _this27 = this;
        if (Le.trigger(this._element, "hidePrevented.bs.modal").defaultPrevented) return;
        var t = this._element.scrollHeight > document.documentElement.clientHeight;
        t || (this._element.style.overflowY = "hidden"), this._element.classList.add(ei);
        var e = Ft(this._dialog);
        Le.off(this._element, "transitionend"), Le.one(this._element, "transitionend", function () {
          _this27._element.classList.remove(ei), t || (Le.one(_this27._element, "transitionend", function () {
            _this27._element.style.overflowY = "";
          }), Yt(_this27._element, e));
        }), Yt(this._element, e), this._element.focus();
      }
    }, {
      key: "_adjustDialog",
      value: function _adjustDialog() {
        var t = this._element.scrollHeight > document.documentElement.clientHeight,
          e = Dn(),
          n = e > 0;
        (!n && t && !ie() || n && !t && ie()) && (this._element.style.paddingLeft = "".concat(e, "px")), (n && !t && !ie() || !n && t && ie()) && (this._element.style.paddingRight = "".concat(e, "px"));
      }
    }, {
      key: "_resetAdjustments",
      value: function _resetAdjustments() {
        this._element.style.paddingLeft = "", this._element.style.paddingRight = "";
      }
    }], [{
      key: "Default",
      get: function get() {
        return Un;
      }
    }, {
      key: "NAME",
      get: function get() {
        return Wn;
      }
    }, {
      key: "jQueryInterface",
      value: function jQueryInterface(t, e) {
        return this.each(function () {
          var n = ni.getInstance(this) || new ni(this, "object" == _typeof(t) ? t : {});
          if ("string" == typeof t) {
            if (void 0 === n[t]) throw new TypeError("No method named \"".concat(t, "\""));
            n[t](e);
          }
        });
      }
    }]);
    return ni;
  }(ke);
  Le.on(document, "click.bs.modal.data-api", '[data-bs-toggle="modal"]', function (t) {
    var _this28 = this;
    var e = Ut(this);
    ["A", "AREA"].includes(this.tagName) && t.preventDefault(), Le.one(e, Kn, function (t) {
      t.defaultPrevented || Le.one(e, Vn, function () {
        Gt(_this28) && _this28.focus();
      });
    });
    (ni.getInstance(e) || new ni(e)).toggle(this);
  }), se(ni);
  var ii = "offcanvas",
    si = "bs.offcanvas",
    oi = {
      backdrop: !0,
      keyboard: !0,
      scroll: !1
    },
    ri = {
      backdrop: "boolean",
      keyboard: "boolean",
      scroll: "boolean"
    },
    ai = "show",
    li = ".offcanvas.show",
    ci = "hidden.bs.offcanvas",
    hi = "focusin.bs.offcanvas";
  var di = /*#__PURE__*/function (_ke7) {
    _inherits(di, _ke7);
    var _super7 = _createSuper(di);
    function di(t, e) {
      var _this29;
      _classCallCheck(this, di);
      _this29 = _super7.call(this, t), _this29._config = _this29._getConfig(e), _this29._isShown = !1, _this29._backdrop = _this29._initializeBackDrop(), _this29._addEventListeners();
      return _this29;
    }
    _createClass(di, [{
      key: "toggle",
      value: function toggle(t) {
        return this._isShown ? this.hide() : this.show(t);
      }
    }, {
      key: "show",
      value: function show(t) {
        var _this30 = this;
        if (this._isShown) return;
        if (Le.trigger(this._element, "show.bs.offcanvas", {
          relatedTarget: t
        }).defaultPrevented) return;
        this._isShown = !0, this._element.style.visibility = "visible", this._backdrop.show(), this._config.scroll || (xn(), this._enforceFocusOnElement(this._element)), this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.classList.add(ai);
        this._queueCallback(function () {
          Le.trigger(_this30._element, "shown.bs.offcanvas", {
            relatedTarget: t
          });
        }, this._element, !0);
      }
    }, {
      key: "hide",
      value: function hide() {
        var _this31 = this;
        if (!this._isShown) return;
        if (Le.trigger(this._element, "hide.bs.offcanvas").defaultPrevented) return;
        Le.off(document, hi), this._element.blur(), this._isShown = !1, this._element.classList.remove(ai), this._backdrop.hide();
        this._queueCallback(function () {
          _this31._element.setAttribute("aria-hidden", !0), _this31._element.removeAttribute("aria-modal"), _this31._element.removeAttribute("role"), _this31._element.style.visibility = "hidden", _this31._config.scroll || In(), Le.trigger(_this31._element, ci);
        }, this._element, !0);
      }
    }, {
      key: "dispose",
      value: function dispose() {
        this._backdrop.dispose(), _get(_getPrototypeOf(di.prototype), "dispose", this).call(this), Le.off(document, hi);
      }
    }, {
      key: "_getConfig",
      value: function _getConfig(t) {
        return t = _objectSpread(_objectSpread(_objectSpread({}, oi), je.getDataAttributes(this._element)), "object" == _typeof(t) ? t : {}), Qt(ii, t, ri), t;
      }
    }, {
      key: "_initializeBackDrop",
      value: function _initializeBackDrop() {
        var _this32 = this;
        return new $n({
          isVisible: this._config.backdrop,
          isAnimated: !0,
          rootElement: this._element.parentNode,
          clickCallback: function clickCallback() {
            return _this32.hide();
          }
        });
      }
    }, {
      key: "_enforceFocusOnElement",
      value: function _enforceFocusOnElement(t) {
        Le.off(document, hi), Le.on(document, hi, function (e) {
          document === e.target || t === e.target || t.contains(e.target) || t.focus();
        }), t.focus();
      }
    }, {
      key: "_addEventListeners",
      value: function _addEventListeners() {
        var _this33 = this;
        Le.on(this._element, "click.dismiss.bs.offcanvas", '[data-bs-dismiss="offcanvas"]', function () {
          return _this33.hide();
        }), Le.on(this._element, "keydown.dismiss.bs.offcanvas", function (t) {
          _this33._config.keyboard && "Escape" === t.key && _this33.hide();
        });
      }
    }], [{
      key: "NAME",
      get: function get() {
        return ii;
      }
    }, {
      key: "Default",
      get: function get() {
        return oi;
      }
    }, {
      key: "jQueryInterface",
      value: function jQueryInterface(t) {
        return this.each(function () {
          var e = le(this, si) || new di(this, "object" == _typeof(t) ? t : {});
          if ("string" == typeof t) {
            if (void 0 === e[t] || t.startsWith("_") || "constructor" === t) throw new TypeError("No method named \"".concat(t, "\""));
            e[t](this);
          }
        });
      }
    }]);
    return di;
  }(ke);
  Le.on(document, "click.bs.offcanvas.data-api", '[data-bs-toggle="offcanvas"]', function (t) {
    var _this34 = this;
    var e = Ut(this);
    if (["A", "AREA"].includes(this.tagName) && t.preventDefault(), Zt(this)) return;
    Le.one(e, ci, function () {
      Gt(_this34) && _this34.focus();
    });
    var n = Pt(li);
    n && n !== e && di.getInstance(n).hide();
    (le(e, si) || new di(e)).toggle(this);
  }), Le.on(window, "load.bs.offcanvas.data-api", function () {
    jt(li).forEach(function (t) {
      return (le(t, si) || new di(t)).show();
    });
  }), se(di);
  var ui = new Set(["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"]),
    fi = /^(?:(?:https?|mailto|ftp|tel|file):|[^#&/:?]*(?:[#/?]|$))/i,
    pi = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i,
    mi = function mi(t, e) {
      var n = t.nodeName.toLowerCase();
      if (e.includes(n)) return !ui.has(n) || Boolean(fi.test(t.nodeValue) || pi.test(t.nodeValue));
      var i = e.filter(function (t) {
        return t instanceof RegExp;
      });
      for (var _t8 = 0, _e13 = i.length; _t8 < _e13; _t8++) if (i[_t8].test(n)) return !0;
      return !1;
    },
    gi = {
      "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
      a: ["target", "href", "title", "rel"],
      area: [],
      b: [],
      br: [],
      col: [],
      code: [],
      div: [],
      em: [],
      hr: [],
      h1: [],
      h2: [],
      h3: [],
      h4: [],
      h5: [],
      h6: [],
      i: [],
      img: ["src", "srcset", "alt", "title", "width", "height"],
      li: [],
      ol: [],
      p: [],
      pre: [],
      s: [],
      small: [],
      span: [],
      sub: [],
      sup: [],
      strong: [],
      u: [],
      ul: []
    };
  function _i(t, e, n) {
    var _ref5;
    if (!t.length) return t;
    if (n && "function" == typeof n) return n(t);
    var i = new window.DOMParser().parseFromString(t, "text/html"),
      s = Object.keys(e),
      o = (_ref5 = []).concat.apply(_ref5, _toConsumableArray(i.body.querySelectorAll("*")));
    var _loop = function _loop() {
      var _ref6;
      var n = o[_t9],
        i = n.nodeName.toLowerCase();
      if (!s.includes(i)) {
        n.parentNode.removeChild(n);
        return 1; // continue
      }
      var r = (_ref6 = []).concat.apply(_ref6, _toConsumableArray(n.attributes)),
        a = [].concat(e["*"] || [], e[i] || []);
      r.forEach(function (t) {
        mi(t, a) || n.removeAttribute(t.nodeName);
      });
    };
    for (var _t9 = 0, _n10 = o.length; _t9 < _n10; _t9++) {
      if (_loop()) continue;
    }
    return i.body.innerHTML;
  }
  var bi = "tooltip",
    vi = "bs.tooltip",
    yi = new RegExp("(^|\\s)bs-tooltip\\S+", "g"),
    wi = new Set(["sanitize", "allowList", "sanitizeFn"]),
    Ei = {
      animation: "boolean",
      template: "string",
      title: "(string|element|function)",
      trigger: "string",
      delay: "(number|object)",
      html: "boolean",
      selector: "(string|boolean)",
      placement: "(string|function)",
      offset: "(array|string|function)",
      container: "(string|element|boolean)",
      fallbackPlacements: "array",
      boundary: "(string|element)",
      customClass: "(string|function)",
      sanitize: "boolean",
      sanitizeFn: "(null|function)",
      allowList: "object",
      popperConfig: "(null|object|function)"
    },
    Ti = {
      AUTO: "auto",
      TOP: "top",
      RIGHT: ie() ? "left" : "right",
      BOTTOM: "bottom",
      LEFT: ie() ? "right" : "left"
    },
    Ai = {
      animation: !0,
      template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
      trigger: "hover focus",
      title: "",
      delay: 0,
      html: !1,
      selector: !1,
      placement: "top",
      offset: [0, 0],
      container: !1,
      fallbackPlacements: ["top", "right", "bottom", "left"],
      boundary: "clippingParents",
      customClass: "",
      sanitize: !0,
      sanitizeFn: null,
      allowList: gi,
      popperConfig: null
    },
    Li = {
      HIDE: "hide.bs.tooltip",
      HIDDEN: "hidden.bs.tooltip",
      SHOW: "show.bs.tooltip",
      SHOWN: "shown.bs.tooltip",
      INSERTED: "inserted.bs.tooltip",
      CLICK: "click.bs.tooltip",
      FOCUSIN: "focusin.bs.tooltip",
      FOCUSOUT: "focusout.bs.tooltip",
      MOUSEENTER: "mouseenter.bs.tooltip",
      MOUSELEAVE: "mouseleave.bs.tooltip"
    },
    ki = "fade",
    Ci = "show",
    Oi = "show",
    Di = "out",
    xi = "hover",
    Ni = "focus";
  var Si = /*#__PURE__*/function (_ke8) {
    _inherits(Si, _ke8);
    var _super8 = _createSuper(Si);
    function Si(t, e) {
      var _this35;
      _classCallCheck(this, Si);
      if (void 0 === n) throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");
      _this35 = _super8.call(this, t), _this35._isEnabled = !0, _this35._timeout = 0, _this35._hoverState = "", _this35._activeTrigger = {}, _this35._popper = null, _this35._config = _this35._getConfig(e), _this35.tip = null, _this35._setListeners();
      return _this35;
    }
    _createClass(Si, [{
      key: "enable",
      value: function enable() {
        this._isEnabled = !0;
      }
    }, {
      key: "disable",
      value: function disable() {
        this._isEnabled = !1;
      }
    }, {
      key: "toggleEnabled",
      value: function toggleEnabled() {
        this._isEnabled = !this._isEnabled;
      }
    }, {
      key: "toggle",
      value: function toggle(t) {
        if (this._isEnabled) if (t) {
          var _e14 = this._initializeOnDelegatedTarget(t);
          _e14._activeTrigger.click = !_e14._activeTrigger.click, _e14._isWithActiveTrigger() ? _e14._enter(null, _e14) : _e14._leave(null, _e14);
        } else {
          if (this.getTipElement().classList.contains(Ci)) return void this._leave(null, this);
          this._enter(null, this);
        }
      }
    }, {
      key: "dispose",
      value: function dispose() {
        clearTimeout(this._timeout), Le.off(this._element.closest(".modal"), "hide.bs.modal", this._hideModalHandler), this.tip && this.tip.parentNode && this.tip.parentNode.removeChild(this.tip), this._popper && this._popper.destroy(), _get(_getPrototypeOf(Si.prototype), "dispose", this).call(this);
      }
    }, {
      key: "show",
      value: function show() {
        var _i$classList,
          _ref7,
          _this36 = this;
        if ("none" === this._element.style.display) throw new Error("Please use show on visible elements");
        if (!this.isWithContent() || !this._isEnabled) return;
        var t = Le.trigger(this._element, this.constructor.Event.SHOW),
          e = Jt(this._element),
          n = null === e ? this._element.ownerDocument.documentElement.contains(this._element) : e.contains(this._element);
        if (t.defaultPrevented || !n) return;
        var i = this.getTipElement(),
          s = Wt(this.constructor.NAME);
        i.setAttribute("id", s), this._element.setAttribute("aria-describedby", s), this.setContent(), this._config.animation && i.classList.add(ki);
        var o = "function" == typeof this._config.placement ? this._config.placement.call(this, i, this._element) : this._config.placement,
          r = this._getAttachment(o);
        this._addAttachmentClass(r);
        var a = this._config.container;
        ae(i, this.constructor.DATA_KEY, this), this._element.ownerDocument.documentElement.contains(this.tip) || (a.appendChild(i), Le.trigger(this._element, this.constructor.Event.INSERTED)), this._popper ? this._popper.update() : this._popper = St(this._element, i, this._getPopperConfig(r)), i.classList.add(Ci);
        var l = "function" == typeof this._config.customClass ? this._config.customClass() : this._config.customClass;
        l && (_i$classList = i.classList).add.apply(_i$classList, _toConsumableArray(l.split(" "))), "ontouchstart" in document.documentElement && (_ref7 = []).concat.apply(_ref7, _toConsumableArray(document.body.children)).forEach(function (t) {
          Le.on(t, "mouseover", te);
        });
        var c = this.tip.classList.contains(ki);
        this._queueCallback(function () {
          var t = _this36._hoverState;
          _this36._hoverState = null, Le.trigger(_this36._element, _this36.constructor.Event.SHOWN), t === Di && _this36._leave(null, _this36);
        }, this.tip, c);
      }
    }, {
      key: "hide",
      value: function hide() {
        var _ref8,
          _this37 = this;
        if (!this._popper) return;
        var t = this.getTipElement();
        if (Le.trigger(this._element, this.constructor.Event.HIDE).defaultPrevented) return;
        t.classList.remove(Ci), "ontouchstart" in document.documentElement && (_ref8 = []).concat.apply(_ref8, _toConsumableArray(document.body.children)).forEach(function (t) {
          return Le.off(t, "mouseover", te);
        }), this._activeTrigger.click = !1, this._activeTrigger.focus = !1, this._activeTrigger.hover = !1;
        var e = this.tip.classList.contains(ki);
        this._queueCallback(function () {
          _this37._isWithActiveTrigger() || (_this37._hoverState !== Oi && t.parentNode && t.parentNode.removeChild(t), _this37._cleanTipClass(), _this37._element.removeAttribute("aria-describedby"), Le.trigger(_this37._element, _this37.constructor.Event.HIDDEN), _this37._popper && (_this37._popper.destroy(), _this37._popper = null));
        }, this.tip, e), this._hoverState = "";
      }
    }, {
      key: "update",
      value: function update() {
        null !== this._popper && this._popper.update();
      }
    }, {
      key: "isWithContent",
      value: function isWithContent() {
        return Boolean(this.getTitle());
      }
    }, {
      key: "getTipElement",
      value: function getTipElement() {
        if (this.tip) return this.tip;
        var t = document.createElement("div");
        return t.innerHTML = this._config.template, this.tip = t.children[0], this.tip;
      }
    }, {
      key: "setContent",
      value: function setContent() {
        var t = this.getTipElement();
        this.setElementContent(Pt(".tooltip-inner", t), this.getTitle()), t.classList.remove(ki, Ci);
      }
    }, {
      key: "setElementContent",
      value: function setElementContent(t, e) {
        if (null !== t) return Kt(e) ? (e = Xt(e), void (this._config.html ? e.parentNode !== t && (t.innerHTML = "", t.appendChild(e)) : t.textContent = e.textContent)) : void (this._config.html ? (this._config.sanitize && (e = _i(e, this._config.allowList, this._config.sanitizeFn)), t.innerHTML = e) : t.textContent = e);
      }
    }, {
      key: "getTitle",
      value: function getTitle() {
        var t = this._element.getAttribute("data-bs-original-title");
        return t || (t = "function" == typeof this._config.title ? this._config.title.call(this._element) : this._config.title), t;
      }
    }, {
      key: "updateAttachment",
      value: function updateAttachment(t) {
        return "right" === t ? "end" : "left" === t ? "start" : t;
      }
    }, {
      key: "_initializeOnDelegatedTarget",
      value: function _initializeOnDelegatedTarget(t, e) {
        var n = this.constructor.DATA_KEY;
        return (e = e || le(t.delegateTarget, n)) || (e = new this.constructor(t.delegateTarget, this._getDelegateConfig()), ae(t.delegateTarget, n, e)), e;
      }
    }, {
      key: "_getOffset",
      value: function _getOffset() {
        var _this38 = this;
        var t = this._config.offset;
        return "string" == typeof t ? t.split(",").map(function (t) {
          return Number.parseInt(t, 10);
        }) : "function" == typeof t ? function (e) {
          return t(e, _this38._element);
        } : t;
      }
    }, {
      key: "_getPopperConfig",
      value: function _getPopperConfig(t) {
        var _this39 = this;
        var e = {
          placement: t,
          modifiers: [{
            name: "flip",
            options: {
              fallbackPlacements: this._config.fallbackPlacements
            }
          }, {
            name: "offset",
            options: {
              offset: this._getOffset()
            }
          }, {
            name: "preventOverflow",
            options: {
              boundary: this._config.boundary
            }
          }, {
            name: "arrow",
            options: {
              element: ".".concat(this.constructor.NAME, "-arrow")
            }
          }, {
            name: "onChange",
            enabled: !0,
            phase: "afterWrite",
            fn: function fn(t) {
              return _this39._handlePopperPlacementChange(t);
            }
          }],
          onFirstUpdate: function onFirstUpdate(t) {
            t.options.placement !== t.placement && _this39._handlePopperPlacementChange(t);
          }
        };
        return _objectSpread(_objectSpread({}, e), "function" == typeof this._config.popperConfig ? this._config.popperConfig(e) : this._config.popperConfig);
      }
    }, {
      key: "_addAttachmentClass",
      value: function _addAttachmentClass(t) {
        this.getTipElement().classList.add("bs-tooltip-".concat(this.updateAttachment(t)));
      }
    }, {
      key: "_getAttachment",
      value: function _getAttachment(t) {
        return Ti[t.toUpperCase()];
      }
    }, {
      key: "_setListeners",
      value: function _setListeners() {
        var _this40 = this;
        this._config.trigger.split(" ").forEach(function (t) {
          if ("click" === t) Le.on(_this40._element, _this40.constructor.Event.CLICK, _this40._config.selector, function (t) {
            return _this40.toggle(t);
          });else if ("manual" !== t) {
            var _e15 = t === xi ? _this40.constructor.Event.MOUSEENTER : _this40.constructor.Event.FOCUSIN,
              _n11 = t === xi ? _this40.constructor.Event.MOUSELEAVE : _this40.constructor.Event.FOCUSOUT;
            Le.on(_this40._element, _e15, _this40._config.selector, function (t) {
              return _this40._enter(t);
            }), Le.on(_this40._element, _n11, _this40._config.selector, function (t) {
              return _this40._leave(t);
            });
          }
        }), this._hideModalHandler = function () {
          _this40._element && _this40.hide();
        }, Le.on(this._element.closest(".modal"), "hide.bs.modal", this._hideModalHandler), this._config.selector ? this._config = _objectSpread(_objectSpread({}, this._config), {}, {
          trigger: "manual",
          selector: ""
        }) : this._fixTitle();
      }
    }, {
      key: "_fixTitle",
      value: function _fixTitle() {
        var t = this._element.getAttribute("title"),
          e = _typeof(this._element.getAttribute("data-bs-original-title"));
        (t || "string" !== e) && (this._element.setAttribute("data-bs-original-title", t || ""), !t || this._element.getAttribute("aria-label") || this._element.textContent || this._element.setAttribute("aria-label", t), this._element.setAttribute("title", ""));
      }
    }, {
      key: "_enter",
      value: function _enter(t, e) {
        e = this._initializeOnDelegatedTarget(t, e), t && (e._activeTrigger["focusin" === t.type ? Ni : xi] = !0), e.getTipElement().classList.contains(Ci) || e._hoverState === Oi ? e._hoverState = Oi : (clearTimeout(e._timeout), e._hoverState = Oi, e._config.delay && e._config.delay.show ? e._timeout = setTimeout(function () {
          e._hoverState === Oi && e.show();
        }, e._config.delay.show) : e.show());
      }
    }, {
      key: "_leave",
      value: function _leave(t, e) {
        e = this._initializeOnDelegatedTarget(t, e), t && (e._activeTrigger["focusout" === t.type ? Ni : xi] = e._element.contains(t.relatedTarget)), e._isWithActiveTrigger() || (clearTimeout(e._timeout), e._hoverState = Di, e._config.delay && e._config.delay.hide ? e._timeout = setTimeout(function () {
          e._hoverState === Di && e.hide();
        }, e._config.delay.hide) : e.hide());
      }
    }, {
      key: "_isWithActiveTrigger",
      value: function _isWithActiveTrigger() {
        for (var _t10 in this._activeTrigger) if (this._activeTrigger[_t10]) return !0;
        return !1;
      }
    }, {
      key: "_getConfig",
      value: function _getConfig(t) {
        var e = je.getDataAttributes(this._element);
        return Object.keys(e).forEach(function (t) {
          wi.has(t) && delete e[t];
        }), (t = _objectSpread(_objectSpread(_objectSpread({}, this.constructor.Default), e), "object" == _typeof(t) && t ? t : {})).container = !1 === t.container ? document.body : Xt(t.container), "number" == typeof t.delay && (t.delay = {
          show: t.delay,
          hide: t.delay
        }), "number" == typeof t.title && (t.title = t.title.toString()), "number" == typeof t.content && (t.content = t.content.toString()), Qt(bi, t, this.constructor.DefaultType), t.sanitize && (t.template = _i(t.template, t.allowList, t.sanitizeFn)), t;
      }
    }, {
      key: "_getDelegateConfig",
      value: function _getDelegateConfig() {
        var t = {};
        if (this._config) for (var _e16 in this._config) this.constructor.Default[_e16] !== this._config[_e16] && (t[_e16] = this._config[_e16]);
        return t;
      }
    }, {
      key: "_cleanTipClass",
      value: function _cleanTipClass() {
        var t = this.getTipElement(),
          e = t.getAttribute("class").match(yi);
        null !== e && e.length > 0 && e.map(function (t) {
          return t.trim();
        }).forEach(function (e) {
          return t.classList.remove(e);
        });
      }
    }, {
      key: "_handlePopperPlacementChange",
      value: function _handlePopperPlacementChange(t) {
        var e = t.state;
        e && (this.tip = e.elements.popper, this._cleanTipClass(), this._addAttachmentClass(this._getAttachment(e.placement)));
      }
    }], [{
      key: "Default",
      get: function get() {
        return Ai;
      }
    }, {
      key: "NAME",
      get: function get() {
        return bi;
      }
    }, {
      key: "Event",
      get: function get() {
        return Li;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return Ei;
      }
    }, {
      key: "jQueryInterface",
      value: function jQueryInterface(t) {
        return this.each(function () {
          var e = le(this, vi);
          var n = "object" == _typeof(t) && t;
          if ((e || !/dispose|hide/.test(t)) && (e || (e = new Si(this, n)), "string" == typeof t)) {
            if (void 0 === e[t]) throw new TypeError("No method named \"".concat(t, "\""));
            e[t]();
          }
        });
      }
    }]);
    return Si;
  }(ke);
  se(Si);
  var Ii = "bs.popover",
    ji = new RegExp("(^|\\s)bs-popover\\S+", "g"),
    Pi = _objectSpread(_objectSpread({}, Si.Default), {}, {
      placement: "right",
      offset: [0, 8],
      trigger: "click",
      content: "",
      template: '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
    }),
    Mi = _objectSpread(_objectSpread({}, Si.DefaultType), {}, {
      content: "(string|element|function)"
    }),
    Hi = {
      HIDE: "hide.bs.popover",
      HIDDEN: "hidden.bs.popover",
      SHOW: "show.bs.popover",
      SHOWN: "shown.bs.popover",
      INSERTED: "inserted.bs.popover",
      CLICK: "click.bs.popover",
      FOCUSIN: "focusin.bs.popover",
      FOCUSOUT: "focusout.bs.popover",
      MOUSEENTER: "mouseenter.bs.popover",
      MOUSELEAVE: "mouseleave.bs.popover"
    };
  var Ri = /*#__PURE__*/function (_Si) {
    _inherits(Ri, _Si);
    var _super9 = _createSuper(Ri);
    function Ri() {
      _classCallCheck(this, Ri);
      return _super9.apply(this, arguments);
    }
    _createClass(Ri, [{
      key: "isWithContent",
      value: function isWithContent() {
        return this.getTitle() || this._getContent();
      }
    }, {
      key: "setContent",
      value: function setContent() {
        var t = this.getTipElement();
        this.setElementContent(Pt(".popover-header", t), this.getTitle());
        var e = this._getContent();
        "function" == typeof e && (e = e.call(this._element)), this.setElementContent(Pt(".popover-body", t), e), t.classList.remove("fade", "show");
      }
    }, {
      key: "_addAttachmentClass",
      value: function _addAttachmentClass(t) {
        this.getTipElement().classList.add("bs-popover-".concat(this.updateAttachment(t)));
      }
    }, {
      key: "_getContent",
      value: function _getContent() {
        return this._element.getAttribute("data-bs-content") || this._config.content;
      }
    }, {
      key: "_cleanTipClass",
      value: function _cleanTipClass() {
        var t = this.getTipElement(),
          e = t.getAttribute("class").match(ji);
        null !== e && e.length > 0 && e.map(function (t) {
          return t.trim();
        }).forEach(function (e) {
          return t.classList.remove(e);
        });
      }
    }], [{
      key: "Default",
      get: function get() {
        return Pi;
      }
    }, {
      key: "NAME",
      get: function get() {
        return "popover";
      }
    }, {
      key: "Event",
      get: function get() {
        return Hi;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return Mi;
      }
    }, {
      key: "jQueryInterface",
      value: function jQueryInterface(t) {
        return this.each(function () {
          var e = le(this, Ii);
          var n = "object" == _typeof(t) ? t : null;
          if ((e || !/dispose|hide/.test(t)) && (e || (e = new Ri(this, n), ae(this, Ii, e)), "string" == typeof t)) {
            if (void 0 === e[t]) throw new TypeError("No method named \"".concat(t, "\""));
            e[t]();
          }
        });
      }
    }]);
    return Ri;
  }(Si);
  se(Ri);
  var Bi = "scrollspy",
    $i = ".bs.scrollspy",
    Wi = {
      offset: 10,
      method: "auto",
      target: ""
    },
    qi = {
      offset: "number",
      method: "string",
      target: "(string|element)"
    },
    zi = "dropdown-item",
    Ui = "active",
    Fi = ".nav-link",
    Vi = "position";
  var Ki = /*#__PURE__*/function (_ke9) {
    _inherits(Ki, _ke9);
    var _super10 = _createSuper(Ki);
    function Ki(t, e) {
      var _this41;
      _classCallCheck(this, Ki);
      _this41 = _super10.call(this, t), _this41._scrollElement = "BODY" === _this41._element.tagName ? window : _this41._element, _this41._config = _this41._getConfig(e), _this41._selector = "".concat(_this41._config.target, " .nav-link, ").concat(_this41._config.target, " .list-group-item, ").concat(_this41._config.target, " .dropdown-item"), _this41._offsets = [], _this41._targets = [], _this41._activeTarget = null, _this41._scrollHeight = 0, Le.on(_this41._scrollElement, "scroll.bs.scrollspy", function () {
        return _this41._process();
      }), _this41.refresh(), _this41._process();
      return _this41;
    }
    _createClass(Ki, [{
      key: "refresh",
      value: function refresh() {
        var _this42 = this;
        var t = this._scrollElement === this._scrollElement.window ? "offset" : Vi,
          e = "auto" === this._config.method ? t : this._config.method,
          n = e === Vi ? this._getScrollTop() : 0;
        this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight();
        jt(this._selector).map(function (t) {
          var i = zt(t),
            s = i ? Pt(i) : null;
          if (s) {
            var _t11 = s.getBoundingClientRect();
            if (_t11.width || _t11.height) return [je[e](s).top + n, i];
          }
          return null;
        }).filter(function (t) {
          return t;
        }).sort(function (t, e) {
          return t[0] - e[0];
        }).forEach(function (t) {
          _this42._offsets.push(t[0]), _this42._targets.push(t[1]);
        });
      }
    }, {
      key: "dispose",
      value: function dispose() {
        Le.off(this._scrollElement, $i), _get(_getPrototypeOf(Ki.prototype), "dispose", this).call(this);
      }
    }, {
      key: "_getConfig",
      value: function _getConfig(t) {
        if ("string" != typeof (t = _objectSpread(_objectSpread(_objectSpread({}, Wi), je.getDataAttributes(this._element)), "object" == _typeof(t) && t ? t : {})).target && Kt(t.target)) {
          var _e17 = t.target.id;
          _e17 || (_e17 = Wt(Bi), t.target.id = _e17), t.target = "#".concat(_e17);
        }
        return Qt(Bi, t, qi), t;
      }
    }, {
      key: "_getScrollTop",
      value: function _getScrollTop() {
        return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop;
      }
    }, {
      key: "_getScrollHeight",
      value: function _getScrollHeight() {
        return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
      }
    }, {
      key: "_getOffsetHeight",
      value: function _getOffsetHeight() {
        return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height;
      }
    }, {
      key: "_process",
      value: function _process() {
        var t = this._getScrollTop() + this._config.offset,
          e = this._getScrollHeight(),
          n = this._config.offset + e - this._getOffsetHeight();
        if (this._scrollHeight !== e && this.refresh(), t >= n) {
          var _t12 = this._targets[this._targets.length - 1];
          this._activeTarget !== _t12 && this._activate(_t12);
        } else {
          if (this._activeTarget && t < this._offsets[0] && this._offsets[0] > 0) return this._activeTarget = null, void this._clear();
          for (var _e18 = this._offsets.length; _e18--;) {
            this._activeTarget !== this._targets[_e18] && t >= this._offsets[_e18] && (void 0 === this._offsets[_e18 + 1] || t < this._offsets[_e18 + 1]) && this._activate(this._targets[_e18]);
          }
        }
      }
    }, {
      key: "_activate",
      value: function _activate(t) {
        this._activeTarget = t, this._clear();
        var e = this._selector.split(",").map(function (e) {
            return "".concat(e, "[data-bs-target=\"").concat(t, "\"],").concat(e, "[href=\"").concat(t, "\"]");
          }),
          n = Pt(e.join(","));
        n.classList.contains(zi) ? (Pt(".dropdown-toggle", n.closest(".dropdown")).classList.add(Ui), n.classList.add(Ui)) : (n.classList.add(Ui), Ht(n, ".nav, .list-group").forEach(function (t) {
          Rt(t, ".nav-link, .list-group-item").forEach(function (t) {
            return t.classList.add(Ui);
          }), Rt(t, ".nav-item").forEach(function (t) {
            Mt(t, Fi).forEach(function (t) {
              return t.classList.add(Ui);
            });
          });
        })), Le.trigger(this._scrollElement, "activate.bs.scrollspy", {
          relatedTarget: t
        });
      }
    }, {
      key: "_clear",
      value: function _clear() {
        jt(this._selector).filter(function (t) {
          return t.classList.contains(Ui);
        }).forEach(function (t) {
          return t.classList.remove(Ui);
        });
      }
    }], [{
      key: "Default",
      get: function get() {
        return Wi;
      }
    }, {
      key: "NAME",
      get: function get() {
        return Bi;
      }
    }, {
      key: "jQueryInterface",
      value: function jQueryInterface(t) {
        return this.each(function () {
          var e = Ki.getInstance(this) || new Ki(this, "object" == _typeof(t) ? t : {});
          if ("string" == typeof t) {
            if (void 0 === e[t]) throw new TypeError("No method named \"".concat(t, "\""));
            e[t]();
          }
        });
      }
    }]);
    return Ki;
  }(ke);
  Le.on(window, "load.bs.scrollspy.data-api", function () {
    jt('[data-bs-spy="scroll"]').forEach(function (t) {
      return new Ki(t);
    });
  }), se(Ki);
  var Xi = "bs.tab",
    Yi = "active",
    Qi = "fade",
    Gi = "show",
    Zi = ".active",
    Ji = ":scope > li > .active";
  var ts = /*#__PURE__*/function (_ke10) {
    _inherits(ts, _ke10);
    var _super11 = _createSuper(ts);
    function ts() {
      _classCallCheck(this, ts);
      return _super11.apply(this, arguments);
    }
    _createClass(ts, [{
      key: "show",
      value: function show() {
        var _this43 = this;
        if (this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && this._element.classList.contains(Yi)) return;
        var t;
        var e = Ut(this._element),
          n = this._element.closest(".nav, .list-group");
        if (n) {
          var _e19 = "UL" === n.nodeName || "OL" === n.nodeName ? Ji : Zi;
          t = jt(_e19, n), t = t[t.length - 1];
        }
        var i = t ? Le.trigger(t, "hide.bs.tab", {
          relatedTarget: this._element
        }) : null;
        if (Le.trigger(this._element, "show.bs.tab", {
          relatedTarget: t
        }).defaultPrevented || null !== i && i.defaultPrevented) return;
        this._activate(this._element, n);
        var s = function s() {
          Le.trigger(t, "hidden.bs.tab", {
            relatedTarget: _this43._element
          }), Le.trigger(_this43._element, "shown.bs.tab", {
            relatedTarget: t
          });
        };
        e ? this._activate(e, e.parentNode, s) : s();
      }
    }, {
      key: "_activate",
      value: function _activate(t, e, n) {
        var _this44 = this;
        var i = (!e || "UL" !== e.nodeName && "OL" !== e.nodeName ? Mt(e, Zi) : jt(Ji, e))[0],
          s = n && i && i.classList.contains(Qi),
          o = function o() {
            return _this44._transitionComplete(t, i, n);
          };
        i && s ? (i.classList.remove(Gi), this._queueCallback(o, t, !0)) : o();
      }
    }, {
      key: "_transitionComplete",
      value: function _transitionComplete(t, e, n) {
        if (e) {
          e.classList.remove(Yi);
          var _t13 = Pt(":scope > .dropdown-menu .active", e.parentNode);
          _t13 && _t13.classList.remove(Yi), "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !1);
        }
        t.classList.add(Yi), "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !0), ee(t), t.classList.contains(Qi) && t.classList.add(Gi);
        var i = t.parentNode;
        if (i && "LI" === i.nodeName && (i = i.parentNode), i && i.classList.contains("dropdown-menu")) {
          var _e20 = t.closest(".dropdown");
          _e20 && jt(".dropdown-toggle", _e20).forEach(function (t) {
            return t.classList.add(Yi);
          }), t.setAttribute("aria-expanded", !0);
        }
        n && n();
      }
    }], [{
      key: "NAME",
      get: function get() {
        return "tab";
      }
    }, {
      key: "jQueryInterface",
      value: function jQueryInterface(t) {
        return this.each(function () {
          var e = le(this, Xi) || new ts(this);
          if ("string" == typeof t) {
            if (void 0 === e[t]) throw new TypeError("No method named \"".concat(t, "\""));
            e[t]();
          }
        });
      }
    }]);
    return ts;
  }(ke);
  Le.on(document, "click.bs.tab.data-api", '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]', function (t) {
    if (["A", "AREA"].includes(this.tagName) && t.preventDefault(), Zt(this)) return;
    (le(this, Xi) || new ts(this)).show();
  }), se(ts);
  var es = "toast",
    ns = "bs.toast",
    is = "hide",
    ss = "show",
    os = "showing",
    rs = {
      animation: "boolean",
      autohide: "boolean",
      delay: "number"
    },
    as = {
      animation: !0,
      autohide: !0,
      delay: 5e3
    };
  var ls = /*#__PURE__*/function (_ke11) {
    _inherits(ls, _ke11);
    var _super12 = _createSuper(ls);
    function ls(t, e) {
      var _this45;
      _classCallCheck(this, ls);
      _this45 = _super12.call(this, t), _this45._config = _this45._getConfig(e), _this45._timeout = null, _this45._hasMouseInteraction = !1, _this45._hasKeyboardInteraction = !1, _this45._setListeners();
      return _this45;
    }
    _createClass(ls, [{
      key: "show",
      value: function show() {
        var _this46 = this;
        if (Le.trigger(this._element, "show.bs.toast").defaultPrevented) return;
        this._clearTimeout(), this._config.animation && this._element.classList.add("fade");
        this._element.classList.remove(is), ee(this._element), this._element.classList.add(os), this._queueCallback(function () {
          _this46._element.classList.remove(os), _this46._element.classList.add(ss), Le.trigger(_this46._element, "shown.bs.toast"), _this46._maybeScheduleHide();
        }, this._element, this._config.animation);
      }
    }, {
      key: "hide",
      value: function hide() {
        var _this47 = this;
        if (!this._element.classList.contains(ss)) return;
        if (Le.trigger(this._element, "hide.bs.toast").defaultPrevented) return;
        this._element.classList.remove(ss), this._queueCallback(function () {
          _this47._element.classList.add(is), Le.trigger(_this47._element, "hidden.bs.toast");
        }, this._element, this._config.animation);
      }
    }, {
      key: "dispose",
      value: function dispose() {
        this._clearTimeout(), this._element.classList.contains(ss) && this._element.classList.remove(ss), _get(_getPrototypeOf(ls.prototype), "dispose", this).call(this);
      }
    }, {
      key: "_getConfig",
      value: function _getConfig(t) {
        return t = _objectSpread(_objectSpread(_objectSpread({}, as), je.getDataAttributes(this._element)), "object" == _typeof(t) && t ? t : {}), Qt(es, t, this.constructor.DefaultType), t;
      }
    }, {
      key: "_maybeScheduleHide",
      value: function _maybeScheduleHide() {
        var _this48 = this;
        this._config.autohide && (this._hasMouseInteraction || this._hasKeyboardInteraction || (this._timeout = setTimeout(function () {
          _this48.hide();
        }, this._config.delay)));
      }
    }, {
      key: "_onInteraction",
      value: function _onInteraction(t, e) {
        switch (t.type) {
          case "mouseover":
          case "mouseout":
            this._hasMouseInteraction = e;
            break;
          case "focusin":
          case "focusout":
            this._hasKeyboardInteraction = e;
        }
        if (e) return void this._clearTimeout();
        var n = t.relatedTarget;
        this._element === n || this._element.contains(n) || this._maybeScheduleHide();
      }
    }, {
      key: "_setListeners",
      value: function _setListeners() {
        var _this49 = this;
        Le.on(this._element, "click.dismiss.bs.toast", '[data-bs-dismiss="toast"]', function () {
          return _this49.hide();
        }), Le.on(this._element, "mouseover.bs.toast", function (t) {
          return _this49._onInteraction(t, !0);
        }), Le.on(this._element, "mouseout.bs.toast", function (t) {
          return _this49._onInteraction(t, !1);
        }), Le.on(this._element, "focusin.bs.toast", function (t) {
          return _this49._onInteraction(t, !0);
        }), Le.on(this._element, "focusout.bs.toast", function (t) {
          return _this49._onInteraction(t, !1);
        });
      }
    }, {
      key: "_clearTimeout",
      value: function _clearTimeout() {
        clearTimeout(this._timeout), this._timeout = null;
      }
    }], [{
      key: "DefaultType",
      get: function get() {
        return rs;
      }
    }, {
      key: "Default",
      get: function get() {
        return as;
      }
    }, {
      key: "NAME",
      get: function get() {
        return es;
      }
    }, {
      key: "jQueryInterface",
      value: function jQueryInterface(t) {
        return this.each(function () {
          var e = le(this, ns);
          if (e || (e = new ls(this, "object" == _typeof(t) && t)), "string" == typeof t) {
            if (void 0 === e[t]) throw new TypeError("No method named \"".concat(t, "\""));
            e[t](this);
          }
        });
      }
    }]);
    return ls;
  }(ke);
  se(ls);
}();
},{}],"../../../.nvm/versions/node/v18.18.0/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}
module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "50484" + '/');
  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);
    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);
          if (didAccept) {
            handled = true;
          }
        }
      });

      // Enable HMR for CSS by default.
      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });
      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }
    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }
    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }
    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}
function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}
function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}
function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }
  var parents = [];
  var k, d, dep;
  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }
  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }
  return parents;
}
function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}
function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }
  if (checkedAssets[id]) {
    return;
  }
  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }
  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}
function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }
  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }
  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }
}
},{}]},{},["../../../.nvm/versions/node/v18.18.0/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","index.js"], null)
//# sourceMappingURL=/src.e31bb0bc.js.map