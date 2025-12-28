var X1 = Object.defineProperty;
var V1 = (c, o, f) => o in c ? X1(c, o, { enumerable: !0, configurable: !0, writable: !0, value: f }) : c[o] = f;
var wl = (c, o, f) => V1(c, typeof o != "symbol" ? o + "" : o, f);
var by = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function K0(c) {
  return c && c.__esModule && Object.prototype.hasOwnProperty.call(c, "default") ? c.default : c;
}
var Gr = { exports: {} }, te = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var j0;
function Z1() {
  if (j0) return te;
  j0 = 1;
  var c = Symbol.for("react.transitional.element"), o = Symbol.for("react.portal"), f = Symbol.for("react.fragment"), s = Symbol.for("react.strict_mode"), m = Symbol.for("react.profiler"), p = Symbol.for("react.consumer"), T = Symbol.for("react.context"), _ = Symbol.for("react.forward_ref"), v = Symbol.for("react.suspense"), b = Symbol.for("react.memo"), D = Symbol.for("react.lazy"), A = Symbol.for("react.activity"), R = Symbol.iterator;
  function X(y) {
    return y === null || typeof y != "object" ? null : (y = R && y[R] || y["@@iterator"], typeof y == "function" ? y : null);
  }
  var ee = {
    isMounted: function() {
      return !1;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, L = Object.assign, P = {};
  function V(y, w, q) {
    this.props = y, this.context = w, this.refs = P, this.updater = q || ee;
  }
  V.prototype.isReactComponent = {}, V.prototype.setState = function(y, w) {
    if (typeof y != "object" && typeof y != "function" && y != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, y, w, "setState");
  }, V.prototype.forceUpdate = function(y) {
    this.updater.enqueueForceUpdate(this, y, "forceUpdate");
  };
  function ue() {
  }
  ue.prototype = V.prototype;
  function k(y, w, q) {
    this.props = y, this.context = w, this.refs = P, this.updater = q || ee;
  }
  var ge = k.prototype = new ue();
  ge.constructor = k, L(ge, V.prototype), ge.isPureReactComponent = !0;
  var Qe = Array.isArray;
  function F() {
  }
  var Z = { H: null, A: null, T: null, S: null }, _e = Object.prototype.hasOwnProperty;
  function Ie(y, w, q) {
    var G = q.ref;
    return {
      $$typeof: c,
      type: y,
      key: w,
      ref: G !== void 0 ? G : null,
      props: q
    };
  }
  function xt(y, w) {
    return Ie(y.type, w, y.props);
  }
  function bt(y) {
    return typeof y == "object" && y !== null && y.$$typeof === c;
  }
  function U(y) {
    var w = { "=": "=0", ":": "=2" };
    return "$" + y.replace(/[=:]/g, function(q) {
      return w[q];
    });
  }
  var W = /\/+/g;
  function de(y, w) {
    return typeof y == "object" && y !== null && y.key != null ? U("" + y.key) : w.toString(36);
  }
  function tt(y) {
    switch (y.status) {
      case "fulfilled":
        return y.value;
      case "rejected":
        throw y.reason;
      default:
        switch (typeof y.status == "string" ? y.then(F, F) : (y.status = "pending", y.then(
          function(w) {
            y.status === "pending" && (y.status = "fulfilled", y.value = w);
          },
          function(w) {
            y.status === "pending" && (y.status = "rejected", y.reason = w);
          }
        )), y.status) {
          case "fulfilled":
            return y.value;
          case "rejected":
            throw y.reason;
        }
    }
    throw y;
  }
  function C(y, w, q, G, le) {
    var ie = typeof y;
    (ie === "undefined" || ie === "boolean") && (y = null);
    var ye = !1;
    if (y === null) ye = !0;
    else
      switch (ie) {
        case "bigint":
        case "string":
        case "number":
          ye = !0;
          break;
        case "object":
          switch (y.$$typeof) {
            case c:
            case o:
              ye = !0;
              break;
            case D:
              return ye = y._init, C(
                ye(y._payload),
                w,
                q,
                G,
                le
              );
          }
      }
    if (ye)
      return le = le(y), ye = G === "" ? "." + de(y, 0) : G, Qe(le) ? (q = "", ye != null && (q = ye.replace(W, "$&/") + "/"), C(le, w, q, "", function(Qa) {
        return Qa;
      })) : le != null && (bt(le) && (le = xt(
        le,
        q + (le.key == null || y && y.key === le.key ? "" : ("" + le.key).replace(
          W,
          "$&/"
        ) + "/") + ye
      )), w.push(le)), 1;
    ye = 0;
    var Pe = G === "" ? "." : G + ":";
    if (Qe(y))
      for (var De = 0; De < y.length; De++)
        G = y[De], ie = Pe + de(G, De), ye += C(
          G,
          w,
          q,
          ie,
          le
        );
    else if (De = X(y), typeof De == "function")
      for (y = De.call(y), De = 0; !(G = y.next()).done; )
        G = G.value, ie = Pe + de(G, De++), ye += C(
          G,
          w,
          q,
          ie,
          le
        );
    else if (ie === "object") {
      if (typeof y.then == "function")
        return C(
          tt(y),
          w,
          q,
          G,
          le
        );
      throw w = String(y), Error(
        "Objects are not valid as a React child (found: " + (w === "[object Object]" ? "object with keys {" + Object.keys(y).join(", ") + "}" : w) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return ye;
  }
  function H(y, w, q) {
    if (y == null) return y;
    var G = [], le = 0;
    return C(y, G, "", "", function(ie) {
      return w.call(q, ie, le++);
    }), G;
  }
  function I(y) {
    if (y._status === -1) {
      var w = y._result;
      w = w(), w.then(
        function(q) {
          (y._status === 0 || y._status === -1) && (y._status = 1, y._result = q);
        },
        function(q) {
          (y._status === 0 || y._status === -1) && (y._status = 2, y._result = q);
        }
      ), y._status === -1 && (y._status = 0, y._result = w);
    }
    if (y._status === 1) return y._result.default;
    throw y._result;
  }
  var be = typeof reportError == "function" ? reportError : function(y) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var w = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof y == "object" && y !== null && typeof y.message == "string" ? String(y.message) : String(y),
        error: y
      });
      if (!window.dispatchEvent(w)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", y);
      return;
    }
    console.error(y);
  }, Te = {
    map: H,
    forEach: function(y, w, q) {
      H(
        y,
        function() {
          w.apply(this, arguments);
        },
        q
      );
    },
    count: function(y) {
      var w = 0;
      return H(y, function() {
        w++;
      }), w;
    },
    toArray: function(y) {
      return H(y, function(w) {
        return w;
      }) || [];
    },
    only: function(y) {
      if (!bt(y))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return y;
    }
  };
  return te.Activity = A, te.Children = Te, te.Component = V, te.Fragment = f, te.Profiler = m, te.PureComponent = k, te.StrictMode = s, te.Suspense = v, te.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = Z, te.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(y) {
      return Z.H.useMemoCache(y);
    }
  }, te.cache = function(y) {
    return function() {
      return y.apply(null, arguments);
    };
  }, te.cacheSignal = function() {
    return null;
  }, te.cloneElement = function(y, w, q) {
    if (y == null)
      throw Error(
        "The argument must be a React element, but you passed " + y + "."
      );
    var G = L({}, y.props), le = y.key;
    if (w != null)
      for (ie in w.key !== void 0 && (le = "" + w.key), w)
        !_e.call(w, ie) || ie === "key" || ie === "__self" || ie === "__source" || ie === "ref" && w.ref === void 0 || (G[ie] = w[ie]);
    var ie = arguments.length - 2;
    if (ie === 1) G.children = q;
    else if (1 < ie) {
      for (var ye = Array(ie), Pe = 0; Pe < ie; Pe++)
        ye[Pe] = arguments[Pe + 2];
      G.children = ye;
    }
    return Ie(y.type, le, G);
  }, te.createContext = function(y) {
    return y = {
      $$typeof: T,
      _currentValue: y,
      _currentValue2: y,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, y.Provider = y, y.Consumer = {
      $$typeof: p,
      _context: y
    }, y;
  }, te.createElement = function(y, w, q) {
    var G, le = {}, ie = null;
    if (w != null)
      for (G in w.key !== void 0 && (ie = "" + w.key), w)
        _e.call(w, G) && G !== "key" && G !== "__self" && G !== "__source" && (le[G] = w[G]);
    var ye = arguments.length - 2;
    if (ye === 1) le.children = q;
    else if (1 < ye) {
      for (var Pe = Array(ye), De = 0; De < ye; De++)
        Pe[De] = arguments[De + 2];
      le.children = Pe;
    }
    if (y && y.defaultProps)
      for (G in ye = y.defaultProps, ye)
        le[G] === void 0 && (le[G] = ye[G]);
    return Ie(y, ie, le);
  }, te.createRef = function() {
    return { current: null };
  }, te.forwardRef = function(y) {
    return { $$typeof: _, render: y };
  }, te.isValidElement = bt, te.lazy = function(y) {
    return {
      $$typeof: D,
      _payload: { _status: -1, _result: y },
      _init: I
    };
  }, te.memo = function(y, w) {
    return {
      $$typeof: b,
      type: y,
      compare: w === void 0 ? null : w
    };
  }, te.startTransition = function(y) {
    var w = Z.T, q = {};
    Z.T = q;
    try {
      var G = y(), le = Z.S;
      le !== null && le(q, G), typeof G == "object" && G !== null && typeof G.then == "function" && G.then(F, be);
    } catch (ie) {
      be(ie);
    } finally {
      w !== null && q.types !== null && (w.types = q.types), Z.T = w;
    }
  }, te.unstable_useCacheRefresh = function() {
    return Z.H.useCacheRefresh();
  }, te.use = function(y) {
    return Z.H.use(y);
  }, te.useActionState = function(y, w, q) {
    return Z.H.useActionState(y, w, q);
  }, te.useCallback = function(y, w) {
    return Z.H.useCallback(y, w);
  }, te.useContext = function(y) {
    return Z.H.useContext(y);
  }, te.useDebugValue = function() {
  }, te.useDeferredValue = function(y, w) {
    return Z.H.useDeferredValue(y, w);
  }, te.useEffect = function(y, w) {
    return Z.H.useEffect(y, w);
  }, te.useEffectEvent = function(y) {
    return Z.H.useEffectEvent(y);
  }, te.useId = function() {
    return Z.H.useId();
  }, te.useImperativeHandle = function(y, w, q) {
    return Z.H.useImperativeHandle(y, w, q);
  }, te.useInsertionEffect = function(y, w) {
    return Z.H.useInsertionEffect(y, w);
  }, te.useLayoutEffect = function(y, w) {
    return Z.H.useLayoutEffect(y, w);
  }, te.useMemo = function(y, w) {
    return Z.H.useMemo(y, w);
  }, te.useOptimistic = function(y, w) {
    return Z.H.useOptimistic(y, w);
  }, te.useReducer = function(y, w, q) {
    return Z.H.useReducer(y, w, q);
  }, te.useRef = function(y) {
    return Z.H.useRef(y);
  }, te.useState = function(y) {
    return Z.H.useState(y);
  }, te.useSyncExternalStore = function(y, w, q) {
    return Z.H.useSyncExternalStore(
      y,
      w,
      q
    );
  }, te.useTransition = function() {
    return Z.H.useTransition();
  }, te.version = "19.2.3", te;
}
var N0;
function os() {
  return N0 || (N0 = 1, Gr.exports = Z1()), Gr.exports;
}
var B = os();
const qn = /* @__PURE__ */ K0(B);
var Qr = { exports: {} }, Bn = {}, Xr = { exports: {} }, Vr = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var T0;
function K1() {
  return T0 || (T0 = 1, (function(c) {
    function o(C, H) {
      var I = C.length;
      C.push(H);
      e: for (; 0 < I; ) {
        var be = I - 1 >>> 1, Te = C[be];
        if (0 < m(Te, H))
          C[be] = H, C[I] = Te, I = be;
        else break e;
      }
    }
    function f(C) {
      return C.length === 0 ? null : C[0];
    }
    function s(C) {
      if (C.length === 0) return null;
      var H = C[0], I = C.pop();
      if (I !== H) {
        C[0] = I;
        e: for (var be = 0, Te = C.length, y = Te >>> 1; be < y; ) {
          var w = 2 * (be + 1) - 1, q = C[w], G = w + 1, le = C[G];
          if (0 > m(q, I))
            G < Te && 0 > m(le, q) ? (C[be] = le, C[G] = I, be = G) : (C[be] = q, C[w] = I, be = w);
          else if (G < Te && 0 > m(le, I))
            C[be] = le, C[G] = I, be = G;
          else break e;
        }
      }
      return H;
    }
    function m(C, H) {
      var I = C.sortIndex - H.sortIndex;
      return I !== 0 ? I : C.id - H.id;
    }
    if (c.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var p = performance;
      c.unstable_now = function() {
        return p.now();
      };
    } else {
      var T = Date, _ = T.now();
      c.unstable_now = function() {
        return T.now() - _;
      };
    }
    var v = [], b = [], D = 1, A = null, R = 3, X = !1, ee = !1, L = !1, P = !1, V = typeof setTimeout == "function" ? setTimeout : null, ue = typeof clearTimeout == "function" ? clearTimeout : null, k = typeof setImmediate < "u" ? setImmediate : null;
    function ge(C) {
      for (var H = f(b); H !== null; ) {
        if (H.callback === null) s(b);
        else if (H.startTime <= C)
          s(b), H.sortIndex = H.expirationTime, o(v, H);
        else break;
        H = f(b);
      }
    }
    function Qe(C) {
      if (L = !1, ge(C), !ee)
        if (f(v) !== null)
          ee = !0, F || (F = !0, U());
        else {
          var H = f(b);
          H !== null && tt(Qe, H.startTime - C);
        }
    }
    var F = !1, Z = -1, _e = 5, Ie = -1;
    function xt() {
      return P ? !0 : !(c.unstable_now() - Ie < _e);
    }
    function bt() {
      if (P = !1, F) {
        var C = c.unstable_now();
        Ie = C;
        var H = !0;
        try {
          e: {
            ee = !1, L && (L = !1, ue(Z), Z = -1), X = !0;
            var I = R;
            try {
              t: {
                for (ge(C), A = f(v); A !== null && !(A.expirationTime > C && xt()); ) {
                  var be = A.callback;
                  if (typeof be == "function") {
                    A.callback = null, R = A.priorityLevel;
                    var Te = be(
                      A.expirationTime <= C
                    );
                    if (C = c.unstable_now(), typeof Te == "function") {
                      A.callback = Te, ge(C), H = !0;
                      break t;
                    }
                    A === f(v) && s(v), ge(C);
                  } else s(v);
                  A = f(v);
                }
                if (A !== null) H = !0;
                else {
                  var y = f(b);
                  y !== null && tt(
                    Qe,
                    y.startTime - C
                  ), H = !1;
                }
              }
              break e;
            } finally {
              A = null, R = I, X = !1;
            }
            H = void 0;
          }
        } finally {
          H ? U() : F = !1;
        }
      }
    }
    var U;
    if (typeof k == "function")
      U = function() {
        k(bt);
      };
    else if (typeof MessageChannel < "u") {
      var W = new MessageChannel(), de = W.port2;
      W.port1.onmessage = bt, U = function() {
        de.postMessage(null);
      };
    } else
      U = function() {
        V(bt, 0);
      };
    function tt(C, H) {
      Z = V(function() {
        C(c.unstable_now());
      }, H);
    }
    c.unstable_IdlePriority = 5, c.unstable_ImmediatePriority = 1, c.unstable_LowPriority = 4, c.unstable_NormalPriority = 3, c.unstable_Profiling = null, c.unstable_UserBlockingPriority = 2, c.unstable_cancelCallback = function(C) {
      C.callback = null;
    }, c.unstable_forceFrameRate = function(C) {
      0 > C || 125 < C ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : _e = 0 < C ? Math.floor(1e3 / C) : 5;
    }, c.unstable_getCurrentPriorityLevel = function() {
      return R;
    }, c.unstable_next = function(C) {
      switch (R) {
        case 1:
        case 2:
        case 3:
          var H = 3;
          break;
        default:
          H = R;
      }
      var I = R;
      R = H;
      try {
        return C();
      } finally {
        R = I;
      }
    }, c.unstable_requestPaint = function() {
      P = !0;
    }, c.unstable_runWithPriority = function(C, H) {
      switch (C) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          C = 3;
      }
      var I = R;
      R = C;
      try {
        return H();
      } finally {
        R = I;
      }
    }, c.unstable_scheduleCallback = function(C, H, I) {
      var be = c.unstable_now();
      switch (typeof I == "object" && I !== null ? (I = I.delay, I = typeof I == "number" && 0 < I ? be + I : be) : I = be, C) {
        case 1:
          var Te = -1;
          break;
        case 2:
          Te = 250;
          break;
        case 5:
          Te = 1073741823;
          break;
        case 4:
          Te = 1e4;
          break;
        default:
          Te = 5e3;
      }
      return Te = I + Te, C = {
        id: D++,
        callback: H,
        priorityLevel: C,
        startTime: I,
        expirationTime: Te,
        sortIndex: -1
      }, I > be ? (C.sortIndex = I, o(b, C), f(v) === null && C === f(b) && (L ? (ue(Z), Z = -1) : L = !0, tt(Qe, I - be))) : (C.sortIndex = Te, o(v, C), ee || X || (ee = !0, F || (F = !0, U()))), C;
    }, c.unstable_shouldYield = xt, c.unstable_wrapCallback = function(C) {
      var H = R;
      return function() {
        var I = R;
        R = H;
        try {
          return C.apply(this, arguments);
        } finally {
          R = I;
        }
      };
    };
  })(Vr)), Vr;
}
var E0;
function J1() {
  return E0 || (E0 = 1, Xr.exports = K1()), Xr.exports;
}
var Zr = { exports: {} }, Fe = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var _0;
function $1() {
  if (_0) return Fe;
  _0 = 1;
  var c = os();
  function o(v) {
    var b = "https://react.dev/errors/" + v;
    if (1 < arguments.length) {
      b += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var D = 2; D < arguments.length; D++)
        b += "&args[]=" + encodeURIComponent(arguments[D]);
    }
    return "Minified React error #" + v + "; visit " + b + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function f() {
  }
  var s = {
    d: {
      f,
      r: function() {
        throw Error(o(522));
      },
      D: f,
      C: f,
      L: f,
      m: f,
      X: f,
      S: f,
      M: f
    },
    p: 0,
    findDOMNode: null
  }, m = Symbol.for("react.portal");
  function p(v, b, D) {
    var A = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: m,
      key: A == null ? null : "" + A,
      children: v,
      containerInfo: b,
      implementation: D
    };
  }
  var T = c.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function _(v, b) {
    if (v === "font") return "";
    if (typeof b == "string")
      return b === "use-credentials" ? b : "";
  }
  return Fe.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = s, Fe.createPortal = function(v, b) {
    var D = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!b || b.nodeType !== 1 && b.nodeType !== 9 && b.nodeType !== 11)
      throw Error(o(299));
    return p(v, b, null, D);
  }, Fe.flushSync = function(v) {
    var b = T.T, D = s.p;
    try {
      if (T.T = null, s.p = 2, v) return v();
    } finally {
      T.T = b, s.p = D, s.d.f();
    }
  }, Fe.preconnect = function(v, b) {
    typeof v == "string" && (b ? (b = b.crossOrigin, b = typeof b == "string" ? b === "use-credentials" ? b : "" : void 0) : b = null, s.d.C(v, b));
  }, Fe.prefetchDNS = function(v) {
    typeof v == "string" && s.d.D(v);
  }, Fe.preinit = function(v, b) {
    if (typeof v == "string" && b && typeof b.as == "string") {
      var D = b.as, A = _(D, b.crossOrigin), R = typeof b.integrity == "string" ? b.integrity : void 0, X = typeof b.fetchPriority == "string" ? b.fetchPriority : void 0;
      D === "style" ? s.d.S(
        v,
        typeof b.precedence == "string" ? b.precedence : void 0,
        {
          crossOrigin: A,
          integrity: R,
          fetchPriority: X
        }
      ) : D === "script" && s.d.X(v, {
        crossOrigin: A,
        integrity: R,
        fetchPriority: X,
        nonce: typeof b.nonce == "string" ? b.nonce : void 0
      });
    }
  }, Fe.preinitModule = function(v, b) {
    if (typeof v == "string")
      if (typeof b == "object" && b !== null) {
        if (b.as == null || b.as === "script") {
          var D = _(
            b.as,
            b.crossOrigin
          );
          s.d.M(v, {
            crossOrigin: D,
            integrity: typeof b.integrity == "string" ? b.integrity : void 0,
            nonce: typeof b.nonce == "string" ? b.nonce : void 0
          });
        }
      } else b == null && s.d.M(v);
  }, Fe.preload = function(v, b) {
    if (typeof v == "string" && typeof b == "object" && b !== null && typeof b.as == "string") {
      var D = b.as, A = _(D, b.crossOrigin);
      s.d.L(v, D, {
        crossOrigin: A,
        integrity: typeof b.integrity == "string" ? b.integrity : void 0,
        nonce: typeof b.nonce == "string" ? b.nonce : void 0,
        type: typeof b.type == "string" ? b.type : void 0,
        fetchPriority: typeof b.fetchPriority == "string" ? b.fetchPriority : void 0,
        referrerPolicy: typeof b.referrerPolicy == "string" ? b.referrerPolicy : void 0,
        imageSrcSet: typeof b.imageSrcSet == "string" ? b.imageSrcSet : void 0,
        imageSizes: typeof b.imageSizes == "string" ? b.imageSizes : void 0,
        media: typeof b.media == "string" ? b.media : void 0
      });
    }
  }, Fe.preloadModule = function(v, b) {
    if (typeof v == "string")
      if (b) {
        var D = _(b.as, b.crossOrigin);
        s.d.m(v, {
          as: typeof b.as == "string" && b.as !== "script" ? b.as : void 0,
          crossOrigin: D,
          integrity: typeof b.integrity == "string" ? b.integrity : void 0
        });
      } else s.d.m(v);
  }, Fe.requestFormReset = function(v) {
    s.d.r(v);
  }, Fe.unstable_batchedUpdates = function(v, b) {
    return v(b);
  }, Fe.useFormState = function(v, b, D) {
    return T.H.useFormState(v, b, D);
  }, Fe.useFormStatus = function() {
    return T.H.useHostTransitionStatus();
  }, Fe.version = "19.2.3", Fe;
}
var z0;
function F1() {
  if (z0) return Zr.exports;
  z0 = 1;
  function c() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(c);
      } catch (o) {
        console.error(o);
      }
  }
  return c(), Zr.exports = $1(), Zr.exports;
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var C0;
function W1() {
  if (C0) return Bn;
  C0 = 1;
  var c = J1(), o = os(), f = F1();
  function s(e) {
    var t = "https://react.dev/errors/" + e;
    if (1 < arguments.length) {
      t += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var l = 2; l < arguments.length; l++)
        t += "&args[]=" + encodeURIComponent(arguments[l]);
    }
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function m(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
  }
  function p(e) {
    var t = e, l = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
      e = t;
      do
        t = e, (t.flags & 4098) !== 0 && (l = t.return), e = t.return;
      while (e);
    }
    return t.tag === 3 ? l : null;
  }
  function T(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function _(e) {
    if (e.tag === 31) {
      var t = e.memoizedState;
      if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function v(e) {
    if (p(e) !== e)
      throw Error(s(188));
  }
  function b(e) {
    var t = e.alternate;
    if (!t) {
      if (t = p(e), t === null) throw Error(s(188));
      return t !== e ? null : e;
    }
    for (var l = e, a = t; ; ) {
      var n = l.return;
      if (n === null) break;
      var u = n.alternate;
      if (u === null) {
        if (a = n.return, a !== null) {
          l = a;
          continue;
        }
        break;
      }
      if (n.child === u.child) {
        for (u = n.child; u; ) {
          if (u === l) return v(n), e;
          if (u === a) return v(n), t;
          u = u.sibling;
        }
        throw Error(s(188));
      }
      if (l.return !== a.return) l = n, a = u;
      else {
        for (var r = !1, d = n.child; d; ) {
          if (d === l) {
            r = !0, l = n, a = u;
            break;
          }
          if (d === a) {
            r = !0, a = n, l = u;
            break;
          }
          d = d.sibling;
        }
        if (!r) {
          for (d = u.child; d; ) {
            if (d === l) {
              r = !0, l = u, a = n;
              break;
            }
            if (d === a) {
              r = !0, a = u, l = n;
              break;
            }
            d = d.sibling;
          }
          if (!r) throw Error(s(189));
        }
      }
      if (l.alternate !== a) throw Error(s(190));
    }
    if (l.tag !== 3) throw Error(s(188));
    return l.stateNode.current === l ? e : t;
  }
  function D(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e;
    for (e = e.child; e !== null; ) {
      if (t = D(e), t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var A = Object.assign, R = Symbol.for("react.element"), X = Symbol.for("react.transitional.element"), ee = Symbol.for("react.portal"), L = Symbol.for("react.fragment"), P = Symbol.for("react.strict_mode"), V = Symbol.for("react.profiler"), ue = Symbol.for("react.consumer"), k = Symbol.for("react.context"), ge = Symbol.for("react.forward_ref"), Qe = Symbol.for("react.suspense"), F = Symbol.for("react.suspense_list"), Z = Symbol.for("react.memo"), _e = Symbol.for("react.lazy"), Ie = Symbol.for("react.activity"), xt = Symbol.for("react.memo_cache_sentinel"), bt = Symbol.iterator;
  function U(e) {
    return e === null || typeof e != "object" ? null : (e = bt && e[bt] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var W = Symbol.for("react.client.reference");
  function de(e) {
    if (e == null) return null;
    if (typeof e == "function")
      return e.$$typeof === W ? null : e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case L:
        return "Fragment";
      case V:
        return "Profiler";
      case P:
        return "StrictMode";
      case Qe:
        return "Suspense";
      case F:
        return "SuspenseList";
      case Ie:
        return "Activity";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case ee:
          return "Portal";
        case k:
          return e.displayName || "Context";
        case ue:
          return (e._context.displayName || "Context") + ".Consumer";
        case ge:
          var t = e.render;
          return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
        case Z:
          return t = e.displayName || null, t !== null ? t : de(e.type) || "Memo";
        case _e:
          t = e._payload, e = e._init;
          try {
            return de(e(t));
          } catch {
          }
      }
    return null;
  }
  var tt = Array.isArray, C = o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, H = f.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, I = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, be = [], Te = -1;
  function y(e) {
    return { current: e };
  }
  function w(e) {
    0 > Te || (e.current = be[Te], be[Te] = null, Te--);
  }
  function q(e, t) {
    Te++, be[Te] = e.current, e.current = t;
  }
  var G = y(null), le = y(null), ie = y(null), ye = y(null);
  function Pe(e, t) {
    switch (q(ie, t), q(le, e), q(G, null), t.nodeType) {
      case 9:
      case 11:
        e = (e = t.documentElement) && (e = e.namespaceURI) ? Vd(e) : 0;
        break;
      default:
        if (e = t.tagName, t = t.namespaceURI)
          t = Vd(t), e = Zd(t, e);
        else
          switch (e) {
            case "svg":
              e = 1;
              break;
            case "math":
              e = 2;
              break;
            default:
              e = 0;
          }
    }
    w(G), q(G, e);
  }
  function De() {
    w(G), w(le), w(ie);
  }
  function Qa(e) {
    e.memoizedState !== null && q(ye, e);
    var t = G.current, l = Zd(t, e.type);
    t !== l && (q(le, e), q(G, l));
  }
  function Vn(e) {
    le.current === e && (w(G), w(le)), ye.current === e && (w(ye), Dn._currentValue = I);
  }
  var Ti, xs;
  function Rl(e) {
    if (Ti === void 0)
      try {
        throw Error();
      } catch (l) {
        var t = l.stack.trim().match(/\n( *(at )?)/);
        Ti = t && t[1] || "", xs = -1 < l.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < l.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + Ti + e + xs;
  }
  var Ei = !1;
  function _i(e, t) {
    if (!e || Ei) return "";
    Ei = !0;
    var l = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var a = {
        DetermineComponentFrameRoot: function() {
          try {
            if (t) {
              var O = function() {
                throw Error();
              };
              if (Object.defineProperty(O.prototype, "props", {
                set: function() {
                  throw Error();
                }
              }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct(O, []);
                } catch (E) {
                  var N = E;
                }
                Reflect.construct(e, [], O);
              } else {
                try {
                  O.call();
                } catch (E) {
                  N = E;
                }
                e.call(O.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (E) {
                N = E;
              }
              (O = e()) && typeof O.catch == "function" && O.catch(function() {
              });
            }
          } catch (E) {
            if (E && N && typeof E.stack == "string")
              return [E.stack, N.stack];
          }
          return [null, null];
        }
      };
      a.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var n = Object.getOwnPropertyDescriptor(
        a.DetermineComponentFrameRoot,
        "name"
      );
      n && n.configurable && Object.defineProperty(
        a.DetermineComponentFrameRoot,
        "name",
        { value: "DetermineComponentFrameRoot" }
      );
      var u = a.DetermineComponentFrameRoot(), r = u[0], d = u[1];
      if (r && d) {
        var h = r.split(`
`), j = d.split(`
`);
        for (n = a = 0; a < h.length && !h[a].includes("DetermineComponentFrameRoot"); )
          a++;
        for (; n < j.length && !j[n].includes(
          "DetermineComponentFrameRoot"
        ); )
          n++;
        if (a === h.length || n === j.length)
          for (a = h.length - 1, n = j.length - 1; 1 <= a && 0 <= n && h[a] !== j[n]; )
            n--;
        for (; 1 <= a && 0 <= n; a--, n--)
          if (h[a] !== j[n]) {
            if (a !== 1 || n !== 1)
              do
                if (a--, n--, 0 > n || h[a] !== j[n]) {
                  var z = `
` + h[a].replace(" at new ", " at ");
                  return e.displayName && z.includes("<anonymous>") && (z = z.replace("<anonymous>", e.displayName)), z;
                }
              while (1 <= a && 0 <= n);
            break;
          }
      }
    } finally {
      Ei = !1, Error.prepareStackTrace = l;
    }
    return (l = e ? e.displayName || e.name : "") ? Rl(l) : "";
  }
  function Sm(e, t) {
    switch (e.tag) {
      case 26:
      case 27:
      case 5:
        return Rl(e.type);
      case 16:
        return Rl("Lazy");
      case 13:
        return e.child !== t && t !== null ? Rl("Suspense Fallback") : Rl("Suspense");
      case 19:
        return Rl("SuspenseList");
      case 0:
      case 15:
        return _i(e.type, !1);
      case 11:
        return _i(e.type.render, !1);
      case 1:
        return _i(e.type, !0);
      case 31:
        return Rl("Activity");
      default:
        return "";
    }
  }
  function bs(e) {
    try {
      var t = "", l = null;
      do
        t += Sm(e, l), l = e, e = e.return;
      while (e);
      return t;
    } catch (a) {
      return `
Error generating stack: ` + a.message + `
` + a.stack;
    }
  }
  var zi = Object.prototype.hasOwnProperty, Ci = c.unstable_scheduleCallback, Ai = c.unstable_cancelCallback, jm = c.unstable_shouldYield, Nm = c.unstable_requestPaint, st = c.unstable_now, Tm = c.unstable_getCurrentPriorityLevel, Ss = c.unstable_ImmediatePriority, js = c.unstable_UserBlockingPriority, Zn = c.unstable_NormalPriority, Em = c.unstable_LowPriority, Ns = c.unstable_IdlePriority, _m = c.log, zm = c.unstable_setDisableYieldValue, Xa = null, ot = null;
  function cl(e) {
    if (typeof _m == "function" && zm(e), ot && typeof ot.setStrictMode == "function")
      try {
        ot.setStrictMode(Xa, e);
      } catch {
      }
  }
  var ft = Math.clz32 ? Math.clz32 : Mm, Cm = Math.log, Am = Math.LN2;
  function Mm(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (Cm(e) / Am | 0) | 0;
  }
  var Kn = 256, Jn = 262144, $n = 4194304;
  function kl(e) {
    var t = e & 42;
    if (t !== 0) return t;
    switch (e & -e) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
        return 128;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
        return e & 261888;
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e & 3932160;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return e & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return e;
    }
  }
  function Fn(e, t, l) {
    var a = e.pendingLanes;
    if (a === 0) return 0;
    var n = 0, u = e.suspendedLanes, r = e.pingedLanes;
    e = e.warmLanes;
    var d = a & 134217727;
    return d !== 0 ? (a = d & ~u, a !== 0 ? n = kl(a) : (r &= d, r !== 0 ? n = kl(r) : l || (l = d & ~e, l !== 0 && (n = kl(l))))) : (d = a & ~u, d !== 0 ? n = kl(d) : r !== 0 ? n = kl(r) : l || (l = a & ~e, l !== 0 && (n = kl(l)))), n === 0 ? 0 : t !== 0 && t !== n && (t & u) === 0 && (u = n & -n, l = t & -t, u >= l || u === 32 && (l & 4194048) !== 0) ? t : n;
  }
  function Va(e, t) {
    return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
  }
  function Om(e, t) {
    switch (e) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return t + 250;
      case 16:
      case 32:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function Ts() {
    var e = $n;
    return $n <<= 1, ($n & 62914560) === 0 && ($n = 4194304), e;
  }
  function Mi(e) {
    for (var t = [], l = 0; 31 > l; l++) t.push(e);
    return t;
  }
  function Za(e, t) {
    e.pendingLanes |= t, t !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0);
  }
  function wm(e, t, l, a, n, u) {
    var r = e.pendingLanes;
    e.pendingLanes = l, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= l, e.entangledLanes &= l, e.errorRecoveryDisabledLanes &= l, e.shellSuspendCounter = 0;
    var d = e.entanglements, h = e.expirationTimes, j = e.hiddenUpdates;
    for (l = r & ~l; 0 < l; ) {
      var z = 31 - ft(l), O = 1 << z;
      d[z] = 0, h[z] = -1;
      var N = j[z];
      if (N !== null)
        for (j[z] = null, z = 0; z < N.length; z++) {
          var E = N[z];
          E !== null && (E.lane &= -536870913);
        }
      l &= ~O;
    }
    a !== 0 && Es(e, a, 0), u !== 0 && n === 0 && e.tag !== 0 && (e.suspendedLanes |= u & ~(r & ~t));
  }
  function Es(e, t, l) {
    e.pendingLanes |= t, e.suspendedLanes &= ~t;
    var a = 31 - ft(t);
    e.entangledLanes |= t, e.entanglements[a] = e.entanglements[a] | 1073741824 | l & 261930;
  }
  function _s(e, t) {
    var l = e.entangledLanes |= t;
    for (e = e.entanglements; l; ) {
      var a = 31 - ft(l), n = 1 << a;
      n & t | e[a] & t && (e[a] |= t), l &= ~n;
    }
  }
  function zs(e, t) {
    var l = t & -t;
    return l = (l & 42) !== 0 ? 1 : Oi(l), (l & (e.suspendedLanes | t)) !== 0 ? 0 : l;
  }
  function Oi(e) {
    switch (e) {
      case 2:
        e = 1;
        break;
      case 8:
        e = 4;
        break;
      case 32:
        e = 16;
        break;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        e = 128;
        break;
      case 268435456:
        e = 134217728;
        break;
      default:
        e = 0;
    }
    return e;
  }
  function wi(e) {
    return e &= -e, 2 < e ? 8 < e ? (e & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function Cs() {
    var e = H.p;
    return e !== 0 ? e : (e = window.event, e === void 0 ? 32 : p0(e.type));
  }
  function As(e, t) {
    var l = H.p;
    try {
      return H.p = e, t();
    } finally {
      H.p = l;
    }
  }
  var rl = Math.random().toString(36).slice(2), Xe = "__reactFiber$" + rl, lt = "__reactProps$" + rl, la = "__reactContainer$" + rl, Di = "__reactEvents$" + rl, Dm = "__reactListeners$" + rl, Um = "__reactHandles$" + rl, Ms = "__reactResources$" + rl, Ka = "__reactMarker$" + rl;
  function Ui(e) {
    delete e[Xe], delete e[lt], delete e[Di], delete e[Dm], delete e[Um];
  }
  function aa(e) {
    var t = e[Xe];
    if (t) return t;
    for (var l = e.parentNode; l; ) {
      if (t = l[la] || l[Xe]) {
        if (l = t.alternate, t.child !== null || l !== null && l.child !== null)
          for (e = Pd(e); e !== null; ) {
            if (l = e[Xe]) return l;
            e = Pd(e);
          }
        return t;
      }
      e = l, l = e.parentNode;
    }
    return null;
  }
  function na(e) {
    if (e = e[Xe] || e[la]) {
      var t = e.tag;
      if (t === 5 || t === 6 || t === 13 || t === 31 || t === 26 || t === 27 || t === 3)
        return e;
    }
    return null;
  }
  function Ja(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
    throw Error(s(33));
  }
  function ua(e) {
    var t = e[Ms];
    return t || (t = e[Ms] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), t;
  }
  function Ye(e) {
    e[Ka] = !0;
  }
  var Os = /* @__PURE__ */ new Set(), ws = {};
  function Bl(e, t) {
    ia(e, t), ia(e + "Capture", t);
  }
  function ia(e, t) {
    for (ws[e] = t, e = 0; e < t.length; e++)
      Os.add(t[e]);
  }
  var Rm = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), Ds = {}, Us = {};
  function km(e) {
    return zi.call(Us, e) ? !0 : zi.call(Ds, e) ? !1 : Rm.test(e) ? Us[e] = !0 : (Ds[e] = !0, !1);
  }
  function Wn(e, t, l) {
    if (km(t))
      if (l === null) e.removeAttribute(t);
      else {
        switch (typeof l) {
          case "undefined":
          case "function":
          case "symbol":
            e.removeAttribute(t);
            return;
          case "boolean":
            var a = t.toLowerCase().slice(0, 5);
            if (a !== "data-" && a !== "aria-") {
              e.removeAttribute(t);
              return;
            }
        }
        e.setAttribute(t, "" + l);
      }
  }
  function In(e, t, l) {
    if (l === null) e.removeAttribute(t);
    else {
      switch (typeof l) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(t);
          return;
      }
      e.setAttribute(t, "" + l);
    }
  }
  function Gt(e, t, l, a) {
    if (a === null) e.removeAttribute(l);
    else {
      switch (typeof a) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(l);
          return;
      }
      e.setAttributeNS(t, l, "" + a);
    }
  }
  function St(e) {
    switch (typeof e) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return e;
      case "object":
        return e;
      default:
        return "";
    }
  }
  function Rs(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function Bm(e, t, l) {
    var a = Object.getOwnPropertyDescriptor(
      e.constructor.prototype,
      t
    );
    if (!e.hasOwnProperty(t) && typeof a < "u" && typeof a.get == "function" && typeof a.set == "function") {
      var n = a.get, u = a.set;
      return Object.defineProperty(e, t, {
        configurable: !0,
        get: function() {
          return n.call(this);
        },
        set: function(r) {
          l = "" + r, u.call(this, r);
        }
      }), Object.defineProperty(e, t, {
        enumerable: a.enumerable
      }), {
        getValue: function() {
          return l;
        },
        setValue: function(r) {
          l = "" + r;
        },
        stopTracking: function() {
          e._valueTracker = null, delete e[t];
        }
      };
    }
  }
  function Ri(e) {
    if (!e._valueTracker) {
      var t = Rs(e) ? "checked" : "value";
      e._valueTracker = Bm(
        e,
        t,
        "" + e[t]
      );
    }
  }
  function ks(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var l = t.getValue(), a = "";
    return e && (a = Rs(e) ? e.checked ? "true" : "false" : e.value), e = a, e !== l ? (t.setValue(e), !0) : !1;
  }
  function Pn(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  var Hm = /[\n"\\]/g;
  function jt(e) {
    return e.replace(
      Hm,
      function(t) {
        return "\\" + t.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function ki(e, t, l, a, n, u, r, d) {
    e.name = "", r != null && typeof r != "function" && typeof r != "symbol" && typeof r != "boolean" ? e.type = r : e.removeAttribute("type"), t != null ? r === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + St(t)) : e.value !== "" + St(t) && (e.value = "" + St(t)) : r !== "submit" && r !== "reset" || e.removeAttribute("value"), t != null ? Bi(e, r, St(t)) : l != null ? Bi(e, r, St(l)) : a != null && e.removeAttribute("value"), n == null && u != null && (e.defaultChecked = !!u), n != null && (e.checked = n && typeof n != "function" && typeof n != "symbol"), d != null && typeof d != "function" && typeof d != "symbol" && typeof d != "boolean" ? e.name = "" + St(d) : e.removeAttribute("name");
  }
  function Bs(e, t, l, a, n, u, r, d) {
    if (u != null && typeof u != "function" && typeof u != "symbol" && typeof u != "boolean" && (e.type = u), t != null || l != null) {
      if (!(u !== "submit" && u !== "reset" || t != null)) {
        Ri(e);
        return;
      }
      l = l != null ? "" + St(l) : "", t = t != null ? "" + St(t) : l, d || t === e.value || (e.value = t), e.defaultValue = t;
    }
    a = a ?? n, a = typeof a != "function" && typeof a != "symbol" && !!a, e.checked = d ? e.checked : !!a, e.defaultChecked = !!a, r != null && typeof r != "function" && typeof r != "symbol" && typeof r != "boolean" && (e.name = r), Ri(e);
  }
  function Bi(e, t, l) {
    t === "number" && Pn(e.ownerDocument) === e || e.defaultValue === "" + l || (e.defaultValue = "" + l);
  }
  function ca(e, t, l, a) {
    if (e = e.options, t) {
      t = {};
      for (var n = 0; n < l.length; n++)
        t["$" + l[n]] = !0;
      for (l = 0; l < e.length; l++)
        n = t.hasOwnProperty("$" + e[l].value), e[l].selected !== n && (e[l].selected = n), n && a && (e[l].defaultSelected = !0);
    } else {
      for (l = "" + St(l), t = null, n = 0; n < e.length; n++) {
        if (e[n].value === l) {
          e[n].selected = !0, a && (e[n].defaultSelected = !0);
          return;
        }
        t !== null || e[n].disabled || (t = e[n]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function Hs(e, t, l) {
    if (t != null && (t = "" + St(t), t !== e.value && (e.value = t), l == null)) {
      e.defaultValue !== t && (e.defaultValue = t);
      return;
    }
    e.defaultValue = l != null ? "" + St(l) : "";
  }
  function Ls(e, t, l, a) {
    if (t == null) {
      if (a != null) {
        if (l != null) throw Error(s(92));
        if (tt(a)) {
          if (1 < a.length) throw Error(s(93));
          a = a[0];
        }
        l = a;
      }
      l == null && (l = ""), t = l;
    }
    l = St(t), e.defaultValue = l, a = e.textContent, a === l && a !== "" && a !== null && (e.value = a), Ri(e);
  }
  function ra(e, t) {
    if (t) {
      var l = e.firstChild;
      if (l && l === e.lastChild && l.nodeType === 3) {
        l.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var Lm = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function qs(e, t, l) {
    var a = t.indexOf("--") === 0;
    l == null || typeof l == "boolean" || l === "" ? a ? e.setProperty(t, "") : t === "float" ? e.cssFloat = "" : e[t] = "" : a ? e.setProperty(t, l) : typeof l != "number" || l === 0 || Lm.has(t) ? t === "float" ? e.cssFloat = l : e[t] = ("" + l).trim() : e[t] = l + "px";
  }
  function Ys(e, t, l) {
    if (t != null && typeof t != "object")
      throw Error(s(62));
    if (e = e.style, l != null) {
      for (var a in l)
        !l.hasOwnProperty(a) || t != null && t.hasOwnProperty(a) || (a.indexOf("--") === 0 ? e.setProperty(a, "") : a === "float" ? e.cssFloat = "" : e[a] = "");
      for (var n in t)
        a = t[n], t.hasOwnProperty(n) && l[n] !== a && qs(e, n, a);
    } else
      for (var u in t)
        t.hasOwnProperty(u) && qs(e, u, t[u]);
  }
  function Hi(e) {
    if (e.indexOf("-") === -1) return !1;
    switch (e) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var qm = /* @__PURE__ */ new Map([
    ["acceptCharset", "accept-charset"],
    ["htmlFor", "for"],
    ["httpEquiv", "http-equiv"],
    ["crossOrigin", "crossorigin"],
    ["accentHeight", "accent-height"],
    ["alignmentBaseline", "alignment-baseline"],
    ["arabicForm", "arabic-form"],
    ["baselineShift", "baseline-shift"],
    ["capHeight", "cap-height"],
    ["clipPath", "clip-path"],
    ["clipRule", "clip-rule"],
    ["colorInterpolation", "color-interpolation"],
    ["colorInterpolationFilters", "color-interpolation-filters"],
    ["colorProfile", "color-profile"],
    ["colorRendering", "color-rendering"],
    ["dominantBaseline", "dominant-baseline"],
    ["enableBackground", "enable-background"],
    ["fillOpacity", "fill-opacity"],
    ["fillRule", "fill-rule"],
    ["floodColor", "flood-color"],
    ["floodOpacity", "flood-opacity"],
    ["fontFamily", "font-family"],
    ["fontSize", "font-size"],
    ["fontSizeAdjust", "font-size-adjust"],
    ["fontStretch", "font-stretch"],
    ["fontStyle", "font-style"],
    ["fontVariant", "font-variant"],
    ["fontWeight", "font-weight"],
    ["glyphName", "glyph-name"],
    ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
    ["glyphOrientationVertical", "glyph-orientation-vertical"],
    ["horizAdvX", "horiz-adv-x"],
    ["horizOriginX", "horiz-origin-x"],
    ["imageRendering", "image-rendering"],
    ["letterSpacing", "letter-spacing"],
    ["lightingColor", "lighting-color"],
    ["markerEnd", "marker-end"],
    ["markerMid", "marker-mid"],
    ["markerStart", "marker-start"],
    ["overlinePosition", "overline-position"],
    ["overlineThickness", "overline-thickness"],
    ["paintOrder", "paint-order"],
    ["panose-1", "panose-1"],
    ["pointerEvents", "pointer-events"],
    ["renderingIntent", "rendering-intent"],
    ["shapeRendering", "shape-rendering"],
    ["stopColor", "stop-color"],
    ["stopOpacity", "stop-opacity"],
    ["strikethroughPosition", "strikethrough-position"],
    ["strikethroughThickness", "strikethrough-thickness"],
    ["strokeDasharray", "stroke-dasharray"],
    ["strokeDashoffset", "stroke-dashoffset"],
    ["strokeLinecap", "stroke-linecap"],
    ["strokeLinejoin", "stroke-linejoin"],
    ["strokeMiterlimit", "stroke-miterlimit"],
    ["strokeOpacity", "stroke-opacity"],
    ["strokeWidth", "stroke-width"],
    ["textAnchor", "text-anchor"],
    ["textDecoration", "text-decoration"],
    ["textRendering", "text-rendering"],
    ["transformOrigin", "transform-origin"],
    ["underlinePosition", "underline-position"],
    ["underlineThickness", "underline-thickness"],
    ["unicodeBidi", "unicode-bidi"],
    ["unicodeRange", "unicode-range"],
    ["unitsPerEm", "units-per-em"],
    ["vAlphabetic", "v-alphabetic"],
    ["vHanging", "v-hanging"],
    ["vIdeographic", "v-ideographic"],
    ["vMathematical", "v-mathematical"],
    ["vectorEffect", "vector-effect"],
    ["vertAdvY", "vert-adv-y"],
    ["vertOriginX", "vert-origin-x"],
    ["vertOriginY", "vert-origin-y"],
    ["wordSpacing", "word-spacing"],
    ["writingMode", "writing-mode"],
    ["xmlnsXlink", "xmlns:xlink"],
    ["xHeight", "x-height"]
  ]), Ym = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function eu(e) {
    return Ym.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e;
  }
  function Qt() {
  }
  var Li = null;
  function qi(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var sa = null, oa = null;
  function Gs(e) {
    var t = na(e);
    if (t && (e = t.stateNode)) {
      var l = e[lt] || null;
      e: switch (e = t.stateNode, t.type) {
        case "input":
          if (ki(
            e,
            l.value,
            l.defaultValue,
            l.defaultValue,
            l.checked,
            l.defaultChecked,
            l.type,
            l.name
          ), t = l.name, l.type === "radio" && t != null) {
            for (l = e; l.parentNode; ) l = l.parentNode;
            for (l = l.querySelectorAll(
              'input[name="' + jt(
                "" + t
              ) + '"][type="radio"]'
            ), t = 0; t < l.length; t++) {
              var a = l[t];
              if (a !== e && a.form === e.form) {
                var n = a[lt] || null;
                if (!n) throw Error(s(90));
                ki(
                  a,
                  n.value,
                  n.defaultValue,
                  n.defaultValue,
                  n.checked,
                  n.defaultChecked,
                  n.type,
                  n.name
                );
              }
            }
            for (t = 0; t < l.length; t++)
              a = l[t], a.form === e.form && ks(a);
          }
          break e;
        case "textarea":
          Hs(e, l.value, l.defaultValue);
          break e;
        case "select":
          t = l.value, t != null && ca(e, !!l.multiple, t, !1);
      }
    }
  }
  var Yi = !1;
  function Qs(e, t, l) {
    if (Yi) return e(t, l);
    Yi = !0;
    try {
      var a = e(t);
      return a;
    } finally {
      if (Yi = !1, (sa !== null || oa !== null) && (Yu(), sa && (t = sa, e = oa, oa = sa = null, Gs(t), e)))
        for (t = 0; t < e.length; t++) Gs(e[t]);
    }
  }
  function $a(e, t) {
    var l = e.stateNode;
    if (l === null) return null;
    var a = l[lt] || null;
    if (a === null) return null;
    l = a[t];
    e: switch (t) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (a = !a.disabled) || (e = e.type, a = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !a;
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (l && typeof l != "function")
      throw Error(
        s(231, t, typeof l)
      );
    return l;
  }
  var Xt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Gi = !1;
  if (Xt)
    try {
      var Fa = {};
      Object.defineProperty(Fa, "passive", {
        get: function() {
          Gi = !0;
        }
      }), window.addEventListener("test", Fa, Fa), window.removeEventListener("test", Fa, Fa);
    } catch {
      Gi = !1;
    }
  var sl = null, Qi = null, tu = null;
  function Xs() {
    if (tu) return tu;
    var e, t = Qi, l = t.length, a, n = "value" in sl ? sl.value : sl.textContent, u = n.length;
    for (e = 0; e < l && t[e] === n[e]; e++) ;
    var r = l - e;
    for (a = 1; a <= r && t[l - a] === n[u - a]; a++) ;
    return tu = n.slice(e, 1 < a ? 1 - a : void 0);
  }
  function lu(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function au() {
    return !0;
  }
  function Vs() {
    return !1;
  }
  function at(e) {
    function t(l, a, n, u, r) {
      this._reactName = l, this._targetInst = n, this.type = a, this.nativeEvent = u, this.target = r, this.currentTarget = null;
      for (var d in e)
        e.hasOwnProperty(d) && (l = e[d], this[d] = l ? l(u) : u[d]);
      return this.isDefaultPrevented = (u.defaultPrevented != null ? u.defaultPrevented : u.returnValue === !1) ? au : Vs, this.isPropagationStopped = Vs, this;
    }
    return A(t.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var l = this.nativeEvent;
        l && (l.preventDefault ? l.preventDefault() : typeof l.returnValue != "unknown" && (l.returnValue = !1), this.isDefaultPrevented = au);
      },
      stopPropagation: function() {
        var l = this.nativeEvent;
        l && (l.stopPropagation ? l.stopPropagation() : typeof l.cancelBubble != "unknown" && (l.cancelBubble = !0), this.isPropagationStopped = au);
      },
      persist: function() {
      },
      isPersistent: au
    }), t;
  }
  var Hl = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, nu = at(Hl), Wa = A({}, Hl, { view: 0, detail: 0 }), Gm = at(Wa), Xi, Vi, Ia, uu = A({}, Wa, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Ki,
    button: 0,
    buttons: 0,
    relatedTarget: function(e) {
      return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
    },
    movementX: function(e) {
      return "movementX" in e ? e.movementX : (e !== Ia && (Ia && e.type === "mousemove" ? (Xi = e.screenX - Ia.screenX, Vi = e.screenY - Ia.screenY) : Vi = Xi = 0, Ia = e), Xi);
    },
    movementY: function(e) {
      return "movementY" in e ? e.movementY : Vi;
    }
  }), Zs = at(uu), Qm = A({}, uu, { dataTransfer: 0 }), Xm = at(Qm), Vm = A({}, Wa, { relatedTarget: 0 }), Zi = at(Vm), Zm = A({}, Hl, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), Km = at(Zm), Jm = A({}, Hl, {
    clipboardData: function(e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    }
  }), $m = at(Jm), Fm = A({}, Hl, { data: 0 }), Ks = at(Fm), Wm = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
  }, Im = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
  }, Pm = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function eh(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = Pm[e]) ? !!t[e] : !1;
  }
  function Ki() {
    return eh;
  }
  var th = A({}, Wa, {
    key: function(e) {
      if (e.key) {
        var t = Wm[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress" ? (e = lu(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Im[e.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Ki,
    charCode: function(e) {
      return e.type === "keypress" ? lu(e) : 0;
    },
    keyCode: function(e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function(e) {
      return e.type === "keypress" ? lu(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    }
  }), lh = at(th), ah = A({}, uu, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
  }), Js = at(ah), nh = A({}, Wa, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Ki
  }), uh = at(nh), ih = A({}, Hl, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), ch = at(ih), rh = A({}, uu, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), sh = at(rh), oh = A({}, Hl, {
    newState: 0,
    oldState: 0
  }), fh = at(oh), dh = [9, 13, 27, 32], Ji = Xt && "CompositionEvent" in window, Pa = null;
  Xt && "documentMode" in document && (Pa = document.documentMode);
  var mh = Xt && "TextEvent" in window && !Pa, $s = Xt && (!Ji || Pa && 8 < Pa && 11 >= Pa), Fs = " ", Ws = !1;
  function Is(e, t) {
    switch (e) {
      case "keyup":
        return dh.indexOf(t.keyCode) !== -1;
      case "keydown":
        return t.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function Ps(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var fa = !1;
  function hh(e, t) {
    switch (e) {
      case "compositionend":
        return Ps(t);
      case "keypress":
        return t.which !== 32 ? null : (Ws = !0, Fs);
      case "textInput":
        return e = t.data, e === Fs && Ws ? null : e;
      default:
        return null;
    }
  }
  function ph(e, t) {
    if (fa)
      return e === "compositionend" || !Ji && Is(e, t) ? (e = Xs(), tu = Qi = sl = null, fa = !1, e) : null;
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
          if (t.char && 1 < t.char.length)
            return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return $s && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var gh = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
  };
  function eo(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!gh[e.type] : t === "textarea";
  }
  function to(e, t, l, a) {
    sa ? oa ? oa.push(a) : oa = [a] : sa = a, t = Ju(t, "onChange"), 0 < t.length && (l = new nu(
      "onChange",
      "change",
      null,
      l,
      a
    ), e.push({ event: l, listeners: t }));
  }
  var en = null, tn = null;
  function yh(e) {
    Ld(e, 0);
  }
  function iu(e) {
    var t = Ja(e);
    if (ks(t)) return e;
  }
  function lo(e, t) {
    if (e === "change") return t;
  }
  var ao = !1;
  if (Xt) {
    var $i;
    if (Xt) {
      var Fi = "oninput" in document;
      if (!Fi) {
        var no = document.createElement("div");
        no.setAttribute("oninput", "return;"), Fi = typeof no.oninput == "function";
      }
      $i = Fi;
    } else $i = !1;
    ao = $i && (!document.documentMode || 9 < document.documentMode);
  }
  function uo() {
    en && (en.detachEvent("onpropertychange", io), tn = en = null);
  }
  function io(e) {
    if (e.propertyName === "value" && iu(tn)) {
      var t = [];
      to(
        t,
        tn,
        e,
        qi(e)
      ), Qs(yh, t);
    }
  }
  function vh(e, t, l) {
    e === "focusin" ? (uo(), en = t, tn = l, en.attachEvent("onpropertychange", io)) : e === "focusout" && uo();
  }
  function xh(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return iu(tn);
  }
  function bh(e, t) {
    if (e === "click") return iu(t);
  }
  function Sh(e, t) {
    if (e === "input" || e === "change")
      return iu(t);
  }
  function jh(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var dt = typeof Object.is == "function" ? Object.is : jh;
  function ln(e, t) {
    if (dt(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null)
      return !1;
    var l = Object.keys(e), a = Object.keys(t);
    if (l.length !== a.length) return !1;
    for (a = 0; a < l.length; a++) {
      var n = l[a];
      if (!zi.call(t, n) || !dt(e[n], t[n]))
        return !1;
    }
    return !0;
  }
  function co(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function ro(e, t) {
    var l = co(e);
    e = 0;
    for (var a; l; ) {
      if (l.nodeType === 3) {
        if (a = e + l.textContent.length, e <= t && a >= t)
          return { node: l, offset: t - e };
        e = a;
      }
      e: {
        for (; l; ) {
          if (l.nextSibling) {
            l = l.nextSibling;
            break e;
          }
          l = l.parentNode;
        }
        l = void 0;
      }
      l = co(l);
    }
  }
  function so(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? so(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
  }
  function oo(e) {
    e = e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null ? e.ownerDocument.defaultView : window;
    for (var t = Pn(e.document); t instanceof e.HTMLIFrameElement; ) {
      try {
        var l = typeof t.contentWindow.location.href == "string";
      } catch {
        l = !1;
      }
      if (l) e = t.contentWindow;
      else break;
      t = Pn(e.document);
    }
    return t;
  }
  function Wi(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
  }
  var Nh = Xt && "documentMode" in document && 11 >= document.documentMode, da = null, Ii = null, an = null, Pi = !1;
  function fo(e, t, l) {
    var a = l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
    Pi || da == null || da !== Pn(a) || (a = da, "selectionStart" in a && Wi(a) ? a = { start: a.selectionStart, end: a.selectionEnd } : (a = (a.ownerDocument && a.ownerDocument.defaultView || window).getSelection(), a = {
      anchorNode: a.anchorNode,
      anchorOffset: a.anchorOffset,
      focusNode: a.focusNode,
      focusOffset: a.focusOffset
    }), an && ln(an, a) || (an = a, a = Ju(Ii, "onSelect"), 0 < a.length && (t = new nu(
      "onSelect",
      "select",
      null,
      t,
      l
    ), e.push({ event: t, listeners: a }), t.target = da)));
  }
  function Ll(e, t) {
    var l = {};
    return l[e.toLowerCase()] = t.toLowerCase(), l["Webkit" + e] = "webkit" + t, l["Moz" + e] = "moz" + t, l;
  }
  var ma = {
    animationend: Ll("Animation", "AnimationEnd"),
    animationiteration: Ll("Animation", "AnimationIteration"),
    animationstart: Ll("Animation", "AnimationStart"),
    transitionrun: Ll("Transition", "TransitionRun"),
    transitionstart: Ll("Transition", "TransitionStart"),
    transitioncancel: Ll("Transition", "TransitionCancel"),
    transitionend: Ll("Transition", "TransitionEnd")
  }, ec = {}, mo = {};
  Xt && (mo = document.createElement("div").style, "AnimationEvent" in window || (delete ma.animationend.animation, delete ma.animationiteration.animation, delete ma.animationstart.animation), "TransitionEvent" in window || delete ma.transitionend.transition);
  function ql(e) {
    if (ec[e]) return ec[e];
    if (!ma[e]) return e;
    var t = ma[e], l;
    for (l in t)
      if (t.hasOwnProperty(l) && l in mo)
        return ec[e] = t[l];
    return e;
  }
  var ho = ql("animationend"), po = ql("animationiteration"), go = ql("animationstart"), Th = ql("transitionrun"), Eh = ql("transitionstart"), _h = ql("transitioncancel"), yo = ql("transitionend"), vo = /* @__PURE__ */ new Map(), tc = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  tc.push("scrollEnd");
  function Dt(e, t) {
    vo.set(e, t), Bl(t, [e]);
  }
  var cu = typeof reportError == "function" ? reportError : function(e) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var t = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof e == "object" && e !== null && typeof e.message == "string" ? String(e.message) : String(e),
        error: e
      });
      if (!window.dispatchEvent(t)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", e);
      return;
    }
    console.error(e);
  }, Nt = [], ha = 0, lc = 0;
  function ru() {
    for (var e = ha, t = lc = ha = 0; t < e; ) {
      var l = Nt[t];
      Nt[t++] = null;
      var a = Nt[t];
      Nt[t++] = null;
      var n = Nt[t];
      Nt[t++] = null;
      var u = Nt[t];
      if (Nt[t++] = null, a !== null && n !== null) {
        var r = a.pending;
        r === null ? n.next = n : (n.next = r.next, r.next = n), a.pending = n;
      }
      u !== 0 && xo(l, n, u);
    }
  }
  function su(e, t, l, a) {
    Nt[ha++] = e, Nt[ha++] = t, Nt[ha++] = l, Nt[ha++] = a, lc |= a, e.lanes |= a, e = e.alternate, e !== null && (e.lanes |= a);
  }
  function ac(e, t, l, a) {
    return su(e, t, l, a), ou(e);
  }
  function Yl(e, t) {
    return su(e, null, null, t), ou(e);
  }
  function xo(e, t, l) {
    e.lanes |= l;
    var a = e.alternate;
    a !== null && (a.lanes |= l);
    for (var n = !1, u = e.return; u !== null; )
      u.childLanes |= l, a = u.alternate, a !== null && (a.childLanes |= l), u.tag === 22 && (e = u.stateNode, e === null || e._visibility & 1 || (n = !0)), e = u, u = u.return;
    return e.tag === 3 ? (u = e.stateNode, n && t !== null && (n = 31 - ft(l), e = u.hiddenUpdates, a = e[n], a === null ? e[n] = [t] : a.push(t), t.lane = l | 536870912), u) : null;
  }
  function ou(e) {
    if (50 < _n)
      throw _n = 0, dr = null, Error(s(185));
    for (var t = e.return; t !== null; )
      e = t, t = e.return;
    return e.tag === 3 ? e.stateNode : null;
  }
  var pa = {};
  function zh(e, t, l, a) {
    this.tag = e, this.key = l, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = a, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function mt(e, t, l, a) {
    return new zh(e, t, l, a);
  }
  function nc(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function Vt(e, t) {
    var l = e.alternate;
    return l === null ? (l = mt(
      e.tag,
      t,
      e.key,
      e.mode
    ), l.elementType = e.elementType, l.type = e.type, l.stateNode = e.stateNode, l.alternate = e, e.alternate = l) : (l.pendingProps = t, l.type = e.type, l.flags = 0, l.subtreeFlags = 0, l.deletions = null), l.flags = e.flags & 65011712, l.childLanes = e.childLanes, l.lanes = e.lanes, l.child = e.child, l.memoizedProps = e.memoizedProps, l.memoizedState = e.memoizedState, l.updateQueue = e.updateQueue, t = e.dependencies, l.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, l.sibling = e.sibling, l.index = e.index, l.ref = e.ref, l.refCleanup = e.refCleanup, l;
  }
  function bo(e, t) {
    e.flags &= 65011714;
    var l = e.alternate;
    return l === null ? (e.childLanes = 0, e.lanes = t, e.child = null, e.subtreeFlags = 0, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null) : (e.childLanes = l.childLanes, e.lanes = l.lanes, e.child = l.child, e.subtreeFlags = 0, e.deletions = null, e.memoizedProps = l.memoizedProps, e.memoizedState = l.memoizedState, e.updateQueue = l.updateQueue, e.type = l.type, t = l.dependencies, e.dependencies = t === null ? null : {
      lanes: t.lanes,
      firstContext: t.firstContext
    }), e;
  }
  function fu(e, t, l, a, n, u) {
    var r = 0;
    if (a = e, typeof e == "function") nc(e) && (r = 1);
    else if (typeof e == "string")
      r = w1(
        e,
        l,
        G.current
      ) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
    else
      e: switch (e) {
        case Ie:
          return e = mt(31, l, t, n), e.elementType = Ie, e.lanes = u, e;
        case L:
          return Gl(l.children, n, u, t);
        case P:
          r = 8, n |= 24;
          break;
        case V:
          return e = mt(12, l, t, n | 2), e.elementType = V, e.lanes = u, e;
        case Qe:
          return e = mt(13, l, t, n), e.elementType = Qe, e.lanes = u, e;
        case F:
          return e = mt(19, l, t, n), e.elementType = F, e.lanes = u, e;
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case k:
                r = 10;
                break e;
              case ue:
                r = 9;
                break e;
              case ge:
                r = 11;
                break e;
              case Z:
                r = 14;
                break e;
              case _e:
                r = 16, a = null;
                break e;
            }
          r = 29, l = Error(
            s(130, e === null ? "null" : typeof e, "")
          ), a = null;
      }
    return t = mt(r, l, t, n), t.elementType = e, t.type = a, t.lanes = u, t;
  }
  function Gl(e, t, l, a) {
    return e = mt(7, e, a, t), e.lanes = l, e;
  }
  function uc(e, t, l) {
    return e = mt(6, e, null, t), e.lanes = l, e;
  }
  function So(e) {
    var t = mt(18, null, null, 0);
    return t.stateNode = e, t;
  }
  function ic(e, t, l) {
    return t = mt(
      4,
      e.children !== null ? e.children : [],
      e.key,
      t
    ), t.lanes = l, t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation
    }, t;
  }
  var jo = /* @__PURE__ */ new WeakMap();
  function Tt(e, t) {
    if (typeof e == "object" && e !== null) {
      var l = jo.get(e);
      return l !== void 0 ? l : (t = {
        value: e,
        source: t,
        stack: bs(t)
      }, jo.set(e, t), t);
    }
    return {
      value: e,
      source: t,
      stack: bs(t)
    };
  }
  var ga = [], ya = 0, du = null, nn = 0, Et = [], _t = 0, ol = null, kt = 1, Bt = "";
  function Zt(e, t) {
    ga[ya++] = nn, ga[ya++] = du, du = e, nn = t;
  }
  function No(e, t, l) {
    Et[_t++] = kt, Et[_t++] = Bt, Et[_t++] = ol, ol = e;
    var a = kt;
    e = Bt;
    var n = 32 - ft(a) - 1;
    a &= ~(1 << n), l += 1;
    var u = 32 - ft(t) + n;
    if (30 < u) {
      var r = n - n % 5;
      u = (a & (1 << r) - 1).toString(32), a >>= r, n -= r, kt = 1 << 32 - ft(t) + n | l << n | a, Bt = u + e;
    } else
      kt = 1 << u | l << n | a, Bt = e;
  }
  function cc(e) {
    e.return !== null && (Zt(e, 1), No(e, 1, 0));
  }
  function rc(e) {
    for (; e === du; )
      du = ga[--ya], ga[ya] = null, nn = ga[--ya], ga[ya] = null;
    for (; e === ol; )
      ol = Et[--_t], Et[_t] = null, Bt = Et[--_t], Et[_t] = null, kt = Et[--_t], Et[_t] = null;
  }
  function To(e, t) {
    Et[_t++] = kt, Et[_t++] = Bt, Et[_t++] = ol, kt = t.id, Bt = t.overflow, ol = e;
  }
  var Ve = null, Ce = null, fe = !1, fl = null, zt = !1, sc = Error(s(519));
  function dl(e) {
    var t = Error(
      s(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML",
        ""
      )
    );
    throw un(Tt(t, e)), sc;
  }
  function Eo(e) {
    var t = e.stateNode, l = e.type, a = e.memoizedProps;
    switch (t[Xe] = e, t[lt] = a, l) {
      case "dialog":
        re("cancel", t), re("close", t);
        break;
      case "iframe":
      case "object":
      case "embed":
        re("load", t);
        break;
      case "video":
      case "audio":
        for (l = 0; l < Cn.length; l++)
          re(Cn[l], t);
        break;
      case "source":
        re("error", t);
        break;
      case "img":
      case "image":
      case "link":
        re("error", t), re("load", t);
        break;
      case "details":
        re("toggle", t);
        break;
      case "input":
        re("invalid", t), Bs(
          t,
          a.value,
          a.defaultValue,
          a.checked,
          a.defaultChecked,
          a.type,
          a.name,
          !0
        );
        break;
      case "select":
        re("invalid", t);
        break;
      case "textarea":
        re("invalid", t), Ls(t, a.value, a.defaultValue, a.children);
    }
    l = a.children, typeof l != "string" && typeof l != "number" && typeof l != "bigint" || t.textContent === "" + l || a.suppressHydrationWarning === !0 || Qd(t.textContent, l) ? (a.popover != null && (re("beforetoggle", t), re("toggle", t)), a.onScroll != null && re("scroll", t), a.onScrollEnd != null && re("scrollend", t), a.onClick != null && (t.onclick = Qt), t = !0) : t = !1, t || dl(e, !0);
  }
  function _o(e) {
    for (Ve = e.return; Ve; )
      switch (Ve.tag) {
        case 5:
        case 31:
        case 13:
          zt = !1;
          return;
        case 27:
        case 3:
          zt = !0;
          return;
        default:
          Ve = Ve.return;
      }
  }
  function va(e) {
    if (e !== Ve) return !1;
    if (!fe) return _o(e), fe = !0, !1;
    var t = e.tag, l;
    if ((l = t !== 3 && t !== 27) && ((l = t === 5) && (l = e.type, l = !(l !== "form" && l !== "button") || zr(e.type, e.memoizedProps)), l = !l), l && Ce && dl(e), _o(e), t === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(s(317));
      Ce = Id(e);
    } else if (t === 31) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(s(317));
      Ce = Id(e);
    } else
      t === 27 ? (t = Ce, _l(e.type) ? (e = wr, wr = null, Ce = e) : Ce = t) : Ce = Ve ? At(e.stateNode.nextSibling) : null;
    return !0;
  }
  function Ql() {
    Ce = Ve = null, fe = !1;
  }
  function oc() {
    var e = fl;
    return e !== null && (ct === null ? ct = e : ct.push.apply(
      ct,
      e
    ), fl = null), e;
  }
  function un(e) {
    fl === null ? fl = [e] : fl.push(e);
  }
  var fc = y(null), Xl = null, Kt = null;
  function ml(e, t, l) {
    q(fc, t._currentValue), t._currentValue = l;
  }
  function Jt(e) {
    e._currentValue = fc.current, w(fc);
  }
  function dc(e, t, l) {
    for (; e !== null; ) {
      var a = e.alternate;
      if ((e.childLanes & t) !== t ? (e.childLanes |= t, a !== null && (a.childLanes |= t)) : a !== null && (a.childLanes & t) !== t && (a.childLanes |= t), e === l) break;
      e = e.return;
    }
  }
  function mc(e, t, l, a) {
    var n = e.child;
    for (n !== null && (n.return = e); n !== null; ) {
      var u = n.dependencies;
      if (u !== null) {
        var r = n.child;
        u = u.firstContext;
        e: for (; u !== null; ) {
          var d = u;
          u = n;
          for (var h = 0; h < t.length; h++)
            if (d.context === t[h]) {
              u.lanes |= l, d = u.alternate, d !== null && (d.lanes |= l), dc(
                u.return,
                l,
                e
              ), a || (r = null);
              break e;
            }
          u = d.next;
        }
      } else if (n.tag === 18) {
        if (r = n.return, r === null) throw Error(s(341));
        r.lanes |= l, u = r.alternate, u !== null && (u.lanes |= l), dc(r, l, e), r = null;
      } else r = n.child;
      if (r !== null) r.return = n;
      else
        for (r = n; r !== null; ) {
          if (r === e) {
            r = null;
            break;
          }
          if (n = r.sibling, n !== null) {
            n.return = r.return, r = n;
            break;
          }
          r = r.return;
        }
      n = r;
    }
  }
  function xa(e, t, l, a) {
    e = null;
    for (var n = t, u = !1; n !== null; ) {
      if (!u) {
        if ((n.flags & 524288) !== 0) u = !0;
        else if ((n.flags & 262144) !== 0) break;
      }
      if (n.tag === 10) {
        var r = n.alternate;
        if (r === null) throw Error(s(387));
        if (r = r.memoizedProps, r !== null) {
          var d = n.type;
          dt(n.pendingProps.value, r.value) || (e !== null ? e.push(d) : e = [d]);
        }
      } else if (n === ye.current) {
        if (r = n.alternate, r === null) throw Error(s(387));
        r.memoizedState.memoizedState !== n.memoizedState.memoizedState && (e !== null ? e.push(Dn) : e = [Dn]);
      }
      n = n.return;
    }
    e !== null && mc(
      t,
      e,
      l,
      a
    ), t.flags |= 262144;
  }
  function mu(e) {
    for (e = e.firstContext; e !== null; ) {
      if (!dt(
        e.context._currentValue,
        e.memoizedValue
      ))
        return !0;
      e = e.next;
    }
    return !1;
  }
  function Vl(e) {
    Xl = e, Kt = null, e = e.dependencies, e !== null && (e.firstContext = null);
  }
  function Ze(e) {
    return zo(Xl, e);
  }
  function hu(e, t) {
    return Xl === null && Vl(e), zo(e, t);
  }
  function zo(e, t) {
    var l = t._currentValue;
    if (t = { context: t, memoizedValue: l, next: null }, Kt === null) {
      if (e === null) throw Error(s(308));
      Kt = t, e.dependencies = { lanes: 0, firstContext: t }, e.flags |= 524288;
    } else Kt = Kt.next = t;
    return l;
  }
  var Ch = typeof AbortController < "u" ? AbortController : function() {
    var e = [], t = this.signal = {
      aborted: !1,
      addEventListener: function(l, a) {
        e.push(a);
      }
    };
    this.abort = function() {
      t.aborted = !0, e.forEach(function(l) {
        return l();
      });
    };
  }, Ah = c.unstable_scheduleCallback, Mh = c.unstable_NormalPriority, ke = {
    $$typeof: k,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function hc() {
    return {
      controller: new Ch(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function cn(e) {
    e.refCount--, e.refCount === 0 && Ah(Mh, function() {
      e.controller.abort();
    });
  }
  var rn = null, pc = 0, ba = 0, Sa = null;
  function Oh(e, t) {
    if (rn === null) {
      var l = rn = [];
      pc = 0, ba = vr(), Sa = {
        status: "pending",
        value: void 0,
        then: function(a) {
          l.push(a);
        }
      };
    }
    return pc++, t.then(Co, Co), t;
  }
  function Co() {
    if (--pc === 0 && rn !== null) {
      Sa !== null && (Sa.status = "fulfilled");
      var e = rn;
      rn = null, ba = 0, Sa = null;
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
  }
  function wh(e, t) {
    var l = [], a = {
      status: "pending",
      value: null,
      reason: null,
      then: function(n) {
        l.push(n);
      }
    };
    return e.then(
      function() {
        a.status = "fulfilled", a.value = t;
        for (var n = 0; n < l.length; n++) (0, l[n])(t);
      },
      function(n) {
        for (a.status = "rejected", a.reason = n, n = 0; n < l.length; n++)
          (0, l[n])(void 0);
      }
    ), a;
  }
  var Ao = C.S;
  C.S = function(e, t) {
    md = st(), typeof t == "object" && t !== null && typeof t.then == "function" && Oh(e, t), Ao !== null && Ao(e, t);
  };
  var Zl = y(null);
  function gc() {
    var e = Zl.current;
    return e !== null ? e : Ee.pooledCache;
  }
  function pu(e, t) {
    t === null ? q(Zl, Zl.current) : q(Zl, t.pool);
  }
  function Mo() {
    var e = gc();
    return e === null ? null : { parent: ke._currentValue, pool: e };
  }
  var ja = Error(s(460)), yc = Error(s(474)), gu = Error(s(542)), yu = { then: function() {
  } };
  function Oo(e) {
    return e = e.status, e === "fulfilled" || e === "rejected";
  }
  function wo(e, t, l) {
    switch (l = e[l], l === void 0 ? e.push(t) : l !== t && (t.then(Qt, Qt), t = l), t.status) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw e = t.reason, Uo(e), e;
      default:
        if (typeof t.status == "string") t.then(Qt, Qt);
        else {
          if (e = Ee, e !== null && 100 < e.shellSuspendCounter)
            throw Error(s(482));
          e = t, e.status = "pending", e.then(
            function(a) {
              if (t.status === "pending") {
                var n = t;
                n.status = "fulfilled", n.value = a;
              }
            },
            function(a) {
              if (t.status === "pending") {
                var n = t;
                n.status = "rejected", n.reason = a;
              }
            }
          );
        }
        switch (t.status) {
          case "fulfilled":
            return t.value;
          case "rejected":
            throw e = t.reason, Uo(e), e;
        }
        throw Jl = t, ja;
    }
  }
  function Kl(e) {
    try {
      var t = e._init;
      return t(e._payload);
    } catch (l) {
      throw l !== null && typeof l == "object" && typeof l.then == "function" ? (Jl = l, ja) : l;
    }
  }
  var Jl = null;
  function Do() {
    if (Jl === null) throw Error(s(459));
    var e = Jl;
    return Jl = null, e;
  }
  function Uo(e) {
    if (e === ja || e === gu)
      throw Error(s(483));
  }
  var Na = null, sn = 0;
  function vu(e) {
    var t = sn;
    return sn += 1, Na === null && (Na = []), wo(Na, e, t);
  }
  function on(e, t) {
    t = t.props.ref, e.ref = t !== void 0 ? t : null;
  }
  function xu(e, t) {
    throw t.$$typeof === R ? Error(s(525)) : (e = Object.prototype.toString.call(t), Error(
      s(
        31,
        e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e
      )
    ));
  }
  function Ro(e) {
    function t(x, g) {
      if (e) {
        var S = x.deletions;
        S === null ? (x.deletions = [g], x.flags |= 16) : S.push(g);
      }
    }
    function l(x, g) {
      if (!e) return null;
      for (; g !== null; )
        t(x, g), g = g.sibling;
      return null;
    }
    function a(x) {
      for (var g = /* @__PURE__ */ new Map(); x !== null; )
        x.key !== null ? g.set(x.key, x) : g.set(x.index, x), x = x.sibling;
      return g;
    }
    function n(x, g) {
      return x = Vt(x, g), x.index = 0, x.sibling = null, x;
    }
    function u(x, g, S) {
      return x.index = S, e ? (S = x.alternate, S !== null ? (S = S.index, S < g ? (x.flags |= 67108866, g) : S) : (x.flags |= 67108866, g)) : (x.flags |= 1048576, g);
    }
    function r(x) {
      return e && x.alternate === null && (x.flags |= 67108866), x;
    }
    function d(x, g, S, M) {
      return g === null || g.tag !== 6 ? (g = uc(S, x.mode, M), g.return = x, g) : (g = n(g, S), g.return = x, g);
    }
    function h(x, g, S, M) {
      var K = S.type;
      return K === L ? z(
        x,
        g,
        S.props.children,
        M,
        S.key
      ) : g !== null && (g.elementType === K || typeof K == "object" && K !== null && K.$$typeof === _e && Kl(K) === g.type) ? (g = n(g, S.props), on(g, S), g.return = x, g) : (g = fu(
        S.type,
        S.key,
        S.props,
        null,
        x.mode,
        M
      ), on(g, S), g.return = x, g);
    }
    function j(x, g, S, M) {
      return g === null || g.tag !== 4 || g.stateNode.containerInfo !== S.containerInfo || g.stateNode.implementation !== S.implementation ? (g = ic(S, x.mode, M), g.return = x, g) : (g = n(g, S.children || []), g.return = x, g);
    }
    function z(x, g, S, M, K) {
      return g === null || g.tag !== 7 ? (g = Gl(
        S,
        x.mode,
        M,
        K
      ), g.return = x, g) : (g = n(g, S), g.return = x, g);
    }
    function O(x, g, S) {
      if (typeof g == "string" && g !== "" || typeof g == "number" || typeof g == "bigint")
        return g = uc(
          "" + g,
          x.mode,
          S
        ), g.return = x, g;
      if (typeof g == "object" && g !== null) {
        switch (g.$$typeof) {
          case X:
            return S = fu(
              g.type,
              g.key,
              g.props,
              null,
              x.mode,
              S
            ), on(S, g), S.return = x, S;
          case ee:
            return g = ic(
              g,
              x.mode,
              S
            ), g.return = x, g;
          case _e:
            return g = Kl(g), O(x, g, S);
        }
        if (tt(g) || U(g))
          return g = Gl(
            g,
            x.mode,
            S,
            null
          ), g.return = x, g;
        if (typeof g.then == "function")
          return O(x, vu(g), S);
        if (g.$$typeof === k)
          return O(
            x,
            hu(x, g),
            S
          );
        xu(x, g);
      }
      return null;
    }
    function N(x, g, S, M) {
      var K = g !== null ? g.key : null;
      if (typeof S == "string" && S !== "" || typeof S == "number" || typeof S == "bigint")
        return K !== null ? null : d(x, g, "" + S, M);
      if (typeof S == "object" && S !== null) {
        switch (S.$$typeof) {
          case X:
            return S.key === K ? h(x, g, S, M) : null;
          case ee:
            return S.key === K ? j(x, g, S, M) : null;
          case _e:
            return S = Kl(S), N(x, g, S, M);
        }
        if (tt(S) || U(S))
          return K !== null ? null : z(x, g, S, M, null);
        if (typeof S.then == "function")
          return N(
            x,
            g,
            vu(S),
            M
          );
        if (S.$$typeof === k)
          return N(
            x,
            g,
            hu(x, S),
            M
          );
        xu(x, S);
      }
      return null;
    }
    function E(x, g, S, M, K) {
      if (typeof M == "string" && M !== "" || typeof M == "number" || typeof M == "bigint")
        return x = x.get(S) || null, d(g, x, "" + M, K);
      if (typeof M == "object" && M !== null) {
        switch (M.$$typeof) {
          case X:
            return x = x.get(
              M.key === null ? S : M.key
            ) || null, h(g, x, M, K);
          case ee:
            return x = x.get(
              M.key === null ? S : M.key
            ) || null, j(g, x, M, K);
          case _e:
            return M = Kl(M), E(
              x,
              g,
              S,
              M,
              K
            );
        }
        if (tt(M) || U(M))
          return x = x.get(S) || null, z(g, x, M, K, null);
        if (typeof M.then == "function")
          return E(
            x,
            g,
            S,
            vu(M),
            K
          );
        if (M.$$typeof === k)
          return E(
            x,
            g,
            S,
            hu(g, M),
            K
          );
        xu(g, M);
      }
      return null;
    }
    function Y(x, g, S, M) {
      for (var K = null, me = null, Q = g, ne = g = 0, oe = null; Q !== null && ne < S.length; ne++) {
        Q.index > ne ? (oe = Q, Q = null) : oe = Q.sibling;
        var he = N(
          x,
          Q,
          S[ne],
          M
        );
        if (he === null) {
          Q === null && (Q = oe);
          break;
        }
        e && Q && he.alternate === null && t(x, Q), g = u(he, g, ne), me === null ? K = he : me.sibling = he, me = he, Q = oe;
      }
      if (ne === S.length)
        return l(x, Q), fe && Zt(x, ne), K;
      if (Q === null) {
        for (; ne < S.length; ne++)
          Q = O(x, S[ne], M), Q !== null && (g = u(
            Q,
            g,
            ne
          ), me === null ? K = Q : me.sibling = Q, me = Q);
        return fe && Zt(x, ne), K;
      }
      for (Q = a(Q); ne < S.length; ne++)
        oe = E(
          Q,
          x,
          ne,
          S[ne],
          M
        ), oe !== null && (e && oe.alternate !== null && Q.delete(
          oe.key === null ? ne : oe.key
        ), g = u(
          oe,
          g,
          ne
        ), me === null ? K = oe : me.sibling = oe, me = oe);
      return e && Q.forEach(function(Ol) {
        return t(x, Ol);
      }), fe && Zt(x, ne), K;
    }
    function $(x, g, S, M) {
      if (S == null) throw Error(s(151));
      for (var K = null, me = null, Q = g, ne = g = 0, oe = null, he = S.next(); Q !== null && !he.done; ne++, he = S.next()) {
        Q.index > ne ? (oe = Q, Q = null) : oe = Q.sibling;
        var Ol = N(x, Q, he.value, M);
        if (Ol === null) {
          Q === null && (Q = oe);
          break;
        }
        e && Q && Ol.alternate === null && t(x, Q), g = u(Ol, g, ne), me === null ? K = Ol : me.sibling = Ol, me = Ol, Q = oe;
      }
      if (he.done)
        return l(x, Q), fe && Zt(x, ne), K;
      if (Q === null) {
        for (; !he.done; ne++, he = S.next())
          he = O(x, he.value, M), he !== null && (g = u(he, g, ne), me === null ? K = he : me.sibling = he, me = he);
        return fe && Zt(x, ne), K;
      }
      for (Q = a(Q); !he.done; ne++, he = S.next())
        he = E(Q, x, ne, he.value, M), he !== null && (e && he.alternate !== null && Q.delete(he.key === null ? ne : he.key), g = u(he, g, ne), me === null ? K = he : me.sibling = he, me = he);
      return e && Q.forEach(function(Q1) {
        return t(x, Q1);
      }), fe && Zt(x, ne), K;
    }
    function Ne(x, g, S, M) {
      if (typeof S == "object" && S !== null && S.type === L && S.key === null && (S = S.props.children), typeof S == "object" && S !== null) {
        switch (S.$$typeof) {
          case X:
            e: {
              for (var K = S.key; g !== null; ) {
                if (g.key === K) {
                  if (K = S.type, K === L) {
                    if (g.tag === 7) {
                      l(
                        x,
                        g.sibling
                      ), M = n(
                        g,
                        S.props.children
                      ), M.return = x, x = M;
                      break e;
                    }
                  } else if (g.elementType === K || typeof K == "object" && K !== null && K.$$typeof === _e && Kl(K) === g.type) {
                    l(
                      x,
                      g.sibling
                    ), M = n(g, S.props), on(M, S), M.return = x, x = M;
                    break e;
                  }
                  l(x, g);
                  break;
                } else t(x, g);
                g = g.sibling;
              }
              S.type === L ? (M = Gl(
                S.props.children,
                x.mode,
                M,
                S.key
              ), M.return = x, x = M) : (M = fu(
                S.type,
                S.key,
                S.props,
                null,
                x.mode,
                M
              ), on(M, S), M.return = x, x = M);
            }
            return r(x);
          case ee:
            e: {
              for (K = S.key; g !== null; ) {
                if (g.key === K)
                  if (g.tag === 4 && g.stateNode.containerInfo === S.containerInfo && g.stateNode.implementation === S.implementation) {
                    l(
                      x,
                      g.sibling
                    ), M = n(g, S.children || []), M.return = x, x = M;
                    break e;
                  } else {
                    l(x, g);
                    break;
                  }
                else t(x, g);
                g = g.sibling;
              }
              M = ic(S, x.mode, M), M.return = x, x = M;
            }
            return r(x);
          case _e:
            return S = Kl(S), Ne(
              x,
              g,
              S,
              M
            );
        }
        if (tt(S))
          return Y(
            x,
            g,
            S,
            M
          );
        if (U(S)) {
          if (K = U(S), typeof K != "function") throw Error(s(150));
          return S = K.call(S), $(
            x,
            g,
            S,
            M
          );
        }
        if (typeof S.then == "function")
          return Ne(
            x,
            g,
            vu(S),
            M
          );
        if (S.$$typeof === k)
          return Ne(
            x,
            g,
            hu(x, S),
            M
          );
        xu(x, S);
      }
      return typeof S == "string" && S !== "" || typeof S == "number" || typeof S == "bigint" ? (S = "" + S, g !== null && g.tag === 6 ? (l(x, g.sibling), M = n(g, S), M.return = x, x = M) : (l(x, g), M = uc(S, x.mode, M), M.return = x, x = M), r(x)) : l(x, g);
    }
    return function(x, g, S, M) {
      try {
        sn = 0;
        var K = Ne(
          x,
          g,
          S,
          M
        );
        return Na = null, K;
      } catch (Q) {
        if (Q === ja || Q === gu) throw Q;
        var me = mt(29, Q, null, x.mode);
        return me.lanes = M, me.return = x, me;
      } finally {
      }
    };
  }
  var $l = Ro(!0), ko = Ro(!1), hl = !1;
  function vc(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function xc(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
      baseState: e.baseState,
      firstBaseUpdate: e.firstBaseUpdate,
      lastBaseUpdate: e.lastBaseUpdate,
      shared: e.shared,
      callbacks: null
    });
  }
  function pl(e) {
    return { lane: e, tag: 0, payload: null, callback: null, next: null };
  }
  function gl(e, t, l) {
    var a = e.updateQueue;
    if (a === null) return null;
    if (a = a.shared, (pe & 2) !== 0) {
      var n = a.pending;
      return n === null ? t.next = t : (t.next = n.next, n.next = t), a.pending = t, t = ou(e), xo(e, null, l), t;
    }
    return su(e, a, t, l), ou(e);
  }
  function fn(e, t, l) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (l & 4194048) !== 0)) {
      var a = t.lanes;
      a &= e.pendingLanes, l |= a, t.lanes = l, _s(e, l);
    }
  }
  function bc(e, t) {
    var l = e.updateQueue, a = e.alternate;
    if (a !== null && (a = a.updateQueue, l === a)) {
      var n = null, u = null;
      if (l = l.firstBaseUpdate, l !== null) {
        do {
          var r = {
            lane: l.lane,
            tag: l.tag,
            payload: l.payload,
            callback: null,
            next: null
          };
          u === null ? n = u = r : u = u.next = r, l = l.next;
        } while (l !== null);
        u === null ? n = u = t : u = u.next = t;
      } else n = u = t;
      l = {
        baseState: a.baseState,
        firstBaseUpdate: n,
        lastBaseUpdate: u,
        shared: a.shared,
        callbacks: a.callbacks
      }, e.updateQueue = l;
      return;
    }
    e = l.lastBaseUpdate, e === null ? l.firstBaseUpdate = t : e.next = t, l.lastBaseUpdate = t;
  }
  var Sc = !1;
  function dn() {
    if (Sc) {
      var e = Sa;
      if (e !== null) throw e;
    }
  }
  function mn(e, t, l, a) {
    Sc = !1;
    var n = e.updateQueue;
    hl = !1;
    var u = n.firstBaseUpdate, r = n.lastBaseUpdate, d = n.shared.pending;
    if (d !== null) {
      n.shared.pending = null;
      var h = d, j = h.next;
      h.next = null, r === null ? u = j : r.next = j, r = h;
      var z = e.alternate;
      z !== null && (z = z.updateQueue, d = z.lastBaseUpdate, d !== r && (d === null ? z.firstBaseUpdate = j : d.next = j, z.lastBaseUpdate = h));
    }
    if (u !== null) {
      var O = n.baseState;
      r = 0, z = j = h = null, d = u;
      do {
        var N = d.lane & -536870913, E = N !== d.lane;
        if (E ? (se & N) === N : (a & N) === N) {
          N !== 0 && N === ba && (Sc = !0), z !== null && (z = z.next = {
            lane: 0,
            tag: d.tag,
            payload: d.payload,
            callback: null,
            next: null
          });
          e: {
            var Y = e, $ = d;
            N = t;
            var Ne = l;
            switch ($.tag) {
              case 1:
                if (Y = $.payload, typeof Y == "function") {
                  O = Y.call(Ne, O, N);
                  break e;
                }
                O = Y;
                break e;
              case 3:
                Y.flags = Y.flags & -65537 | 128;
              case 0:
                if (Y = $.payload, N = typeof Y == "function" ? Y.call(Ne, O, N) : Y, N == null) break e;
                O = A({}, O, N);
                break e;
              case 2:
                hl = !0;
            }
          }
          N = d.callback, N !== null && (e.flags |= 64, E && (e.flags |= 8192), E = n.callbacks, E === null ? n.callbacks = [N] : E.push(N));
        } else
          E = {
            lane: N,
            tag: d.tag,
            payload: d.payload,
            callback: d.callback,
            next: null
          }, z === null ? (j = z = E, h = O) : z = z.next = E, r |= N;
        if (d = d.next, d === null) {
          if (d = n.shared.pending, d === null)
            break;
          E = d, d = E.next, E.next = null, n.lastBaseUpdate = E, n.shared.pending = null;
        }
      } while (!0);
      z === null && (h = O), n.baseState = h, n.firstBaseUpdate = j, n.lastBaseUpdate = z, u === null && (n.shared.lanes = 0), Sl |= r, e.lanes = r, e.memoizedState = O;
    }
  }
  function Bo(e, t) {
    if (typeof e != "function")
      throw Error(s(191, e));
    e.call(t);
  }
  function Ho(e, t) {
    var l = e.callbacks;
    if (l !== null)
      for (e.callbacks = null, e = 0; e < l.length; e++)
        Bo(l[e], t);
  }
  var Ta = y(null), bu = y(0);
  function Lo(e, t) {
    e = al, q(bu, e), q(Ta, t), al = e | t.baseLanes;
  }
  function jc() {
    q(bu, al), q(Ta, Ta.current);
  }
  function Nc() {
    al = bu.current, w(Ta), w(bu);
  }
  var ht = y(null), Ct = null;
  function yl(e) {
    var t = e.alternate;
    q(Ue, Ue.current & 1), q(ht, e), Ct === null && (t === null || Ta.current !== null || t.memoizedState !== null) && (Ct = e);
  }
  function Tc(e) {
    q(Ue, Ue.current), q(ht, e), Ct === null && (Ct = e);
  }
  function qo(e) {
    e.tag === 22 ? (q(Ue, Ue.current), q(ht, e), Ct === null && (Ct = e)) : vl();
  }
  function vl() {
    q(Ue, Ue.current), q(ht, ht.current);
  }
  function pt(e) {
    w(ht), Ct === e && (Ct = null), w(Ue);
  }
  var Ue = y(0);
  function Su(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var l = t.memoizedState;
        if (l !== null && (l = l.dehydrated, l === null || Mr(l) || Or(l)))
          return t;
      } else if (t.tag === 19 && (t.memoizedProps.revealOrder === "forwards" || t.memoizedProps.revealOrder === "backwards" || t.memoizedProps.revealOrder === "unstable_legacy-backwards" || t.memoizedProps.revealOrder === "together")) {
        if ((t.flags & 128) !== 0) return t;
      } else if (t.child !== null) {
        t.child.return = t, t = t.child;
        continue;
      }
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return null;
        t = t.return;
      }
      t.sibling.return = t.return, t = t.sibling;
    }
    return null;
  }
  var $t = 0, ae = null, Se = null, Be = null, ju = !1, Ea = !1, Fl = !1, Nu = 0, hn = 0, _a = null, Dh = 0;
  function Oe() {
    throw Error(s(321));
  }
  function Ec(e, t) {
    if (t === null) return !1;
    for (var l = 0; l < t.length && l < e.length; l++)
      if (!dt(e[l], t[l])) return !1;
    return !0;
  }
  function _c(e, t, l, a, n, u) {
    return $t = u, ae = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, C.H = e === null || e.memoizedState === null ? Tf : Yc, Fl = !1, u = l(a, n), Fl = !1, Ea && (u = Go(
      t,
      l,
      a,
      n
    )), Yo(e), u;
  }
  function Yo(e) {
    C.H = yn;
    var t = Se !== null && Se.next !== null;
    if ($t = 0, Be = Se = ae = null, ju = !1, hn = 0, _a = null, t) throw Error(s(300));
    e === null || He || (e = e.dependencies, e !== null && mu(e) && (He = !0));
  }
  function Go(e, t, l, a) {
    ae = e;
    var n = 0;
    do {
      if (Ea && (_a = null), hn = 0, Ea = !1, 25 <= n) throw Error(s(301));
      if (n += 1, Be = Se = null, e.updateQueue != null) {
        var u = e.updateQueue;
        u.lastEffect = null, u.events = null, u.stores = null, u.memoCache != null && (u.memoCache.index = 0);
      }
      C.H = Ef, u = t(l, a);
    } while (Ea);
    return u;
  }
  function Uh() {
    var e = C.H, t = e.useState()[0];
    return t = typeof t.then == "function" ? pn(t) : t, e = e.useState()[0], (Se !== null ? Se.memoizedState : null) !== e && (ae.flags |= 1024), t;
  }
  function zc() {
    var e = Nu !== 0;
    return Nu = 0, e;
  }
  function Cc(e, t, l) {
    t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l;
  }
  function Ac(e) {
    if (ju) {
      for (e = e.memoizedState; e !== null; ) {
        var t = e.queue;
        t !== null && (t.pending = null), e = e.next;
      }
      ju = !1;
    }
    $t = 0, Be = Se = ae = null, Ea = !1, hn = Nu = 0, _a = null;
  }
  function et() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return Be === null ? ae.memoizedState = Be = e : Be = Be.next = e, Be;
  }
  function Re() {
    if (Se === null) {
      var e = ae.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Se.next;
    var t = Be === null ? ae.memoizedState : Be.next;
    if (t !== null)
      Be = t, Se = e;
    else {
      if (e === null)
        throw ae.alternate === null ? Error(s(467)) : Error(s(310));
      Se = e, e = {
        memoizedState: Se.memoizedState,
        baseState: Se.baseState,
        baseQueue: Se.baseQueue,
        queue: Se.queue,
        next: null
      }, Be === null ? ae.memoizedState = Be = e : Be = Be.next = e;
    }
    return Be;
  }
  function Tu() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function pn(e) {
    var t = hn;
    return hn += 1, _a === null && (_a = []), e = wo(_a, e, t), t = ae, (Be === null ? t.memoizedState : Be.next) === null && (t = t.alternate, C.H = t === null || t.memoizedState === null ? Tf : Yc), e;
  }
  function Eu(e) {
    if (e !== null && typeof e == "object") {
      if (typeof e.then == "function") return pn(e);
      if (e.$$typeof === k) return Ze(e);
    }
    throw Error(s(438, String(e)));
  }
  function Mc(e) {
    var t = null, l = ae.updateQueue;
    if (l !== null && (t = l.memoCache), t == null) {
      var a = ae.alternate;
      a !== null && (a = a.updateQueue, a !== null && (a = a.memoCache, a != null && (t = {
        data: a.data.map(function(n) {
          return n.slice();
        }),
        index: 0
      })));
    }
    if (t == null && (t = { data: [], index: 0 }), l === null && (l = Tu(), ae.updateQueue = l), l.memoCache = t, l = t.data[t.index], l === void 0)
      for (l = t.data[t.index] = Array(e), a = 0; a < e; a++)
        l[a] = xt;
    return t.index++, l;
  }
  function Ft(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function _u(e) {
    var t = Re();
    return Oc(t, Se, e);
  }
  function Oc(e, t, l) {
    var a = e.queue;
    if (a === null) throw Error(s(311));
    a.lastRenderedReducer = l;
    var n = e.baseQueue, u = a.pending;
    if (u !== null) {
      if (n !== null) {
        var r = n.next;
        n.next = u.next, u.next = r;
      }
      t.baseQueue = n = u, a.pending = null;
    }
    if (u = e.baseState, n === null) e.memoizedState = u;
    else {
      t = n.next;
      var d = r = null, h = null, j = t, z = !1;
      do {
        var O = j.lane & -536870913;
        if (O !== j.lane ? (se & O) === O : ($t & O) === O) {
          var N = j.revertLane;
          if (N === 0)
            h !== null && (h = h.next = {
              lane: 0,
              revertLane: 0,
              gesture: null,
              action: j.action,
              hasEagerState: j.hasEagerState,
              eagerState: j.eagerState,
              next: null
            }), O === ba && (z = !0);
          else if (($t & N) === N) {
            j = j.next, N === ba && (z = !0);
            continue;
          } else
            O = {
              lane: 0,
              revertLane: j.revertLane,
              gesture: null,
              action: j.action,
              hasEagerState: j.hasEagerState,
              eagerState: j.eagerState,
              next: null
            }, h === null ? (d = h = O, r = u) : h = h.next = O, ae.lanes |= N, Sl |= N;
          O = j.action, Fl && l(u, O), u = j.hasEagerState ? j.eagerState : l(u, O);
        } else
          N = {
            lane: O,
            revertLane: j.revertLane,
            gesture: j.gesture,
            action: j.action,
            hasEagerState: j.hasEagerState,
            eagerState: j.eagerState,
            next: null
          }, h === null ? (d = h = N, r = u) : h = h.next = N, ae.lanes |= O, Sl |= O;
        j = j.next;
      } while (j !== null && j !== t);
      if (h === null ? r = u : h.next = d, !dt(u, e.memoizedState) && (He = !0, z && (l = Sa, l !== null)))
        throw l;
      e.memoizedState = u, e.baseState = r, e.baseQueue = h, a.lastRenderedState = u;
    }
    return n === null && (a.lanes = 0), [e.memoizedState, a.dispatch];
  }
  function wc(e) {
    var t = Re(), l = t.queue;
    if (l === null) throw Error(s(311));
    l.lastRenderedReducer = e;
    var a = l.dispatch, n = l.pending, u = t.memoizedState;
    if (n !== null) {
      l.pending = null;
      var r = n = n.next;
      do
        u = e(u, r.action), r = r.next;
      while (r !== n);
      dt(u, t.memoizedState) || (He = !0), t.memoizedState = u, t.baseQueue === null && (t.baseState = u), l.lastRenderedState = u;
    }
    return [u, a];
  }
  function Qo(e, t, l) {
    var a = ae, n = Re(), u = fe;
    if (u) {
      if (l === void 0) throw Error(s(407));
      l = l();
    } else l = t();
    var r = !dt(
      (Se || n).memoizedState,
      l
    );
    if (r && (n.memoizedState = l, He = !0), n = n.queue, Rc(Zo.bind(null, a, n, e), [
      e
    ]), n.getSnapshot !== t || r || Be !== null && Be.memoizedState.tag & 1) {
      if (a.flags |= 2048, za(
        9,
        { destroy: void 0 },
        Vo.bind(
          null,
          a,
          n,
          l,
          t
        ),
        null
      ), Ee === null) throw Error(s(349));
      u || ($t & 127) !== 0 || Xo(a, t, l);
    }
    return l;
  }
  function Xo(e, t, l) {
    e.flags |= 16384, e = { getSnapshot: t, value: l }, t = ae.updateQueue, t === null ? (t = Tu(), ae.updateQueue = t, t.stores = [e]) : (l = t.stores, l === null ? t.stores = [e] : l.push(e));
  }
  function Vo(e, t, l, a) {
    t.value = l, t.getSnapshot = a, Ko(t) && Jo(e);
  }
  function Zo(e, t, l) {
    return l(function() {
      Ko(t) && Jo(e);
    });
  }
  function Ko(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var l = t();
      return !dt(e, l);
    } catch {
      return !0;
    }
  }
  function Jo(e) {
    var t = Yl(e, 2);
    t !== null && rt(t, e, 2);
  }
  function Dc(e) {
    var t = et();
    if (typeof e == "function") {
      var l = e;
      if (e = l(), Fl) {
        cl(!0);
        try {
          l();
        } finally {
          cl(!1);
        }
      }
    }
    return t.memoizedState = t.baseState = e, t.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Ft,
      lastRenderedState: e
    }, t;
  }
  function $o(e, t, l, a) {
    return e.baseState = l, Oc(
      e,
      Se,
      typeof a == "function" ? a : Ft
    );
  }
  function Rh(e, t, l, a, n) {
    if (Au(e)) throw Error(s(485));
    if (e = t.action, e !== null) {
      var u = {
        payload: n,
        action: e,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function(r) {
          u.listeners.push(r);
        }
      };
      C.T !== null ? l(!0) : u.isTransition = !1, a(u), l = t.pending, l === null ? (u.next = t.pending = u, Fo(t, u)) : (u.next = l.next, t.pending = l.next = u);
    }
  }
  function Fo(e, t) {
    var l = t.action, a = t.payload, n = e.state;
    if (t.isTransition) {
      var u = C.T, r = {};
      C.T = r;
      try {
        var d = l(n, a), h = C.S;
        h !== null && h(r, d), Wo(e, t, d);
      } catch (j) {
        Uc(e, t, j);
      } finally {
        u !== null && r.types !== null && (u.types = r.types), C.T = u;
      }
    } else
      try {
        u = l(n, a), Wo(e, t, u);
      } catch (j) {
        Uc(e, t, j);
      }
  }
  function Wo(e, t, l) {
    l !== null && typeof l == "object" && typeof l.then == "function" ? l.then(
      function(a) {
        Io(e, t, a);
      },
      function(a) {
        return Uc(e, t, a);
      }
    ) : Io(e, t, l);
  }
  function Io(e, t, l) {
    t.status = "fulfilled", t.value = l, Po(t), e.state = l, t = e.pending, t !== null && (l = t.next, l === t ? e.pending = null : (l = l.next, t.next = l, Fo(e, l)));
  }
  function Uc(e, t, l) {
    var a = e.pending;
    if (e.pending = null, a !== null) {
      a = a.next;
      do
        t.status = "rejected", t.reason = l, Po(t), t = t.next;
      while (t !== a);
    }
    e.action = null;
  }
  function Po(e) {
    e = e.listeners;
    for (var t = 0; t < e.length; t++) (0, e[t])();
  }
  function ef(e, t) {
    return t;
  }
  function tf(e, t) {
    if (fe) {
      var l = Ee.formState;
      if (l !== null) {
        e: {
          var a = ae;
          if (fe) {
            if (Ce) {
              t: {
                for (var n = Ce, u = zt; n.nodeType !== 8; ) {
                  if (!u) {
                    n = null;
                    break t;
                  }
                  if (n = At(
                    n.nextSibling
                  ), n === null) {
                    n = null;
                    break t;
                  }
                }
                u = n.data, n = u === "F!" || u === "F" ? n : null;
              }
              if (n) {
                Ce = At(
                  n.nextSibling
                ), a = n.data === "F!";
                break e;
              }
            }
            dl(a);
          }
          a = !1;
        }
        a && (t = l[0]);
      }
    }
    return l = et(), l.memoizedState = l.baseState = t, a = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: ef,
      lastRenderedState: t
    }, l.queue = a, l = Sf.bind(
      null,
      ae,
      a
    ), a.dispatch = l, a = Dc(!1), u = qc.bind(
      null,
      ae,
      !1,
      a.queue
    ), a = et(), n = {
      state: t,
      dispatch: null,
      action: e,
      pending: null
    }, a.queue = n, l = Rh.bind(
      null,
      ae,
      n,
      u,
      l
    ), n.dispatch = l, a.memoizedState = e, [t, l, !1];
  }
  function lf(e) {
    var t = Re();
    return af(t, Se, e);
  }
  function af(e, t, l) {
    if (t = Oc(
      e,
      t,
      ef
    )[0], e = _u(Ft)[0], typeof t == "object" && t !== null && typeof t.then == "function")
      try {
        var a = pn(t);
      } catch (r) {
        throw r === ja ? gu : r;
      }
    else a = t;
    t = Re();
    var n = t.queue, u = n.dispatch;
    return l !== t.memoizedState && (ae.flags |= 2048, za(
      9,
      { destroy: void 0 },
      kh.bind(null, n, l),
      null
    )), [a, u, e];
  }
  function kh(e, t) {
    e.action = t;
  }
  function nf(e) {
    var t = Re(), l = Se;
    if (l !== null)
      return af(t, l, e);
    Re(), t = t.memoizedState, l = Re();
    var a = l.queue.dispatch;
    return l.memoizedState = e, [t, a, !1];
  }
  function za(e, t, l, a) {
    return e = { tag: e, create: l, deps: a, inst: t, next: null }, t = ae.updateQueue, t === null && (t = Tu(), ae.updateQueue = t), l = t.lastEffect, l === null ? t.lastEffect = e.next = e : (a = l.next, l.next = e, e.next = a, t.lastEffect = e), e;
  }
  function uf() {
    return Re().memoizedState;
  }
  function zu(e, t, l, a) {
    var n = et();
    ae.flags |= e, n.memoizedState = za(
      1 | t,
      { destroy: void 0 },
      l,
      a === void 0 ? null : a
    );
  }
  function Cu(e, t, l, a) {
    var n = Re();
    a = a === void 0 ? null : a;
    var u = n.memoizedState.inst;
    Se !== null && a !== null && Ec(a, Se.memoizedState.deps) ? n.memoizedState = za(t, u, l, a) : (ae.flags |= e, n.memoizedState = za(
      1 | t,
      u,
      l,
      a
    ));
  }
  function cf(e, t) {
    zu(8390656, 8, e, t);
  }
  function Rc(e, t) {
    Cu(2048, 8, e, t);
  }
  function Bh(e) {
    ae.flags |= 4;
    var t = ae.updateQueue;
    if (t === null)
      t = Tu(), ae.updateQueue = t, t.events = [e];
    else {
      var l = t.events;
      l === null ? t.events = [e] : l.push(e);
    }
  }
  function rf(e) {
    var t = Re().memoizedState;
    return Bh({ ref: t, nextImpl: e }), function() {
      if ((pe & 2) !== 0) throw Error(s(440));
      return t.impl.apply(void 0, arguments);
    };
  }
  function sf(e, t) {
    return Cu(4, 2, e, t);
  }
  function of(e, t) {
    return Cu(4, 4, e, t);
  }
  function ff(e, t) {
    if (typeof t == "function") {
      e = e();
      var l = t(e);
      return function() {
        typeof l == "function" ? l() : t(null);
      };
    }
    if (t != null)
      return e = e(), t.current = e, function() {
        t.current = null;
      };
  }
  function df(e, t, l) {
    l = l != null ? l.concat([e]) : null, Cu(4, 4, ff.bind(null, t, e), l);
  }
  function kc() {
  }
  function mf(e, t) {
    var l = Re();
    t = t === void 0 ? null : t;
    var a = l.memoizedState;
    return t !== null && Ec(t, a[1]) ? a[0] : (l.memoizedState = [e, t], e);
  }
  function hf(e, t) {
    var l = Re();
    t = t === void 0 ? null : t;
    var a = l.memoizedState;
    if (t !== null && Ec(t, a[1]))
      return a[0];
    if (a = e(), Fl) {
      cl(!0);
      try {
        e();
      } finally {
        cl(!1);
      }
    }
    return l.memoizedState = [a, t], a;
  }
  function Bc(e, t, l) {
    return l === void 0 || ($t & 1073741824) !== 0 && (se & 261930) === 0 ? e.memoizedState = t : (e.memoizedState = l, e = pd(), ae.lanes |= e, Sl |= e, l);
  }
  function pf(e, t, l, a) {
    return dt(l, t) ? l : Ta.current !== null ? (e = Bc(e, l, a), dt(e, t) || (He = !0), e) : ($t & 42) === 0 || ($t & 1073741824) !== 0 && (se & 261930) === 0 ? (He = !0, e.memoizedState = l) : (e = pd(), ae.lanes |= e, Sl |= e, t);
  }
  function gf(e, t, l, a, n) {
    var u = H.p;
    H.p = u !== 0 && 8 > u ? u : 8;
    var r = C.T, d = {};
    C.T = d, qc(e, !1, t, l);
    try {
      var h = n(), j = C.S;
      if (j !== null && j(d, h), h !== null && typeof h == "object" && typeof h.then == "function") {
        var z = wh(
          h,
          a
        );
        gn(
          e,
          t,
          z,
          vt(e)
        );
      } else
        gn(
          e,
          t,
          a,
          vt(e)
        );
    } catch (O) {
      gn(
        e,
        t,
        { then: function() {
        }, status: "rejected", reason: O },
        vt()
      );
    } finally {
      H.p = u, r !== null && d.types !== null && (r.types = d.types), C.T = r;
    }
  }
  function Hh() {
  }
  function Hc(e, t, l, a) {
    if (e.tag !== 5) throw Error(s(476));
    var n = yf(e).queue;
    gf(
      e,
      n,
      t,
      I,
      l === null ? Hh : function() {
        return vf(e), l(a);
      }
    );
  }
  function yf(e) {
    var t = e.memoizedState;
    if (t !== null) return t;
    t = {
      memoizedState: I,
      baseState: I,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Ft,
        lastRenderedState: I
      },
      next: null
    };
    var l = {};
    return t.next = {
      memoizedState: l,
      baseState: l,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Ft,
        lastRenderedState: l
      },
      next: null
    }, e.memoizedState = t, e = e.alternate, e !== null && (e.memoizedState = t), t;
  }
  function vf(e) {
    var t = yf(e);
    t.next === null && (t = e.alternate.memoizedState), gn(
      e,
      t.next.queue,
      {},
      vt()
    );
  }
  function Lc() {
    return Ze(Dn);
  }
  function xf() {
    return Re().memoizedState;
  }
  function bf() {
    return Re().memoizedState;
  }
  function Lh(e) {
    for (var t = e.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var l = vt();
          e = pl(l);
          var a = gl(t, e, l);
          a !== null && (rt(a, t, l), fn(a, t, l)), t = { cache: hc() }, e.payload = t;
          return;
      }
      t = t.return;
    }
  }
  function qh(e, t, l) {
    var a = vt();
    l = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Au(e) ? jf(t, l) : (l = ac(e, t, l, a), l !== null && (rt(l, e, a), Nf(l, t, a)));
  }
  function Sf(e, t, l) {
    var a = vt();
    gn(e, t, l, a);
  }
  function gn(e, t, l, a) {
    var n = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (Au(e)) jf(t, n);
    else {
      var u = e.alternate;
      if (e.lanes === 0 && (u === null || u.lanes === 0) && (u = t.lastRenderedReducer, u !== null))
        try {
          var r = t.lastRenderedState, d = u(r, l);
          if (n.hasEagerState = !0, n.eagerState = d, dt(d, r))
            return su(e, t, n, 0), Ee === null && ru(), !1;
        } catch {
        } finally {
        }
      if (l = ac(e, t, n, a), l !== null)
        return rt(l, e, a), Nf(l, t, a), !0;
    }
    return !1;
  }
  function qc(e, t, l, a) {
    if (a = {
      lane: 2,
      revertLane: vr(),
      gesture: null,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Au(e)) {
      if (t) throw Error(s(479));
    } else
      t = ac(
        e,
        l,
        a,
        2
      ), t !== null && rt(t, e, 2);
  }
  function Au(e) {
    var t = e.alternate;
    return e === ae || t !== null && t === ae;
  }
  function jf(e, t) {
    Ea = ju = !0;
    var l = e.pending;
    l === null ? t.next = t : (t.next = l.next, l.next = t), e.pending = t;
  }
  function Nf(e, t, l) {
    if ((l & 4194048) !== 0) {
      var a = t.lanes;
      a &= e.pendingLanes, l |= a, t.lanes = l, _s(e, l);
    }
  }
  var yn = {
    readContext: Ze,
    use: Eu,
    useCallback: Oe,
    useContext: Oe,
    useEffect: Oe,
    useImperativeHandle: Oe,
    useLayoutEffect: Oe,
    useInsertionEffect: Oe,
    useMemo: Oe,
    useReducer: Oe,
    useRef: Oe,
    useState: Oe,
    useDebugValue: Oe,
    useDeferredValue: Oe,
    useTransition: Oe,
    useSyncExternalStore: Oe,
    useId: Oe,
    useHostTransitionStatus: Oe,
    useFormState: Oe,
    useActionState: Oe,
    useOptimistic: Oe,
    useMemoCache: Oe,
    useCacheRefresh: Oe
  };
  yn.useEffectEvent = Oe;
  var Tf = {
    readContext: Ze,
    use: Eu,
    useCallback: function(e, t) {
      return et().memoizedState = [
        e,
        t === void 0 ? null : t
      ], e;
    },
    useContext: Ze,
    useEffect: cf,
    useImperativeHandle: function(e, t, l) {
      l = l != null ? l.concat([e]) : null, zu(
        4194308,
        4,
        ff.bind(null, t, e),
        l
      );
    },
    useLayoutEffect: function(e, t) {
      return zu(4194308, 4, e, t);
    },
    useInsertionEffect: function(e, t) {
      zu(4, 2, e, t);
    },
    useMemo: function(e, t) {
      var l = et();
      t = t === void 0 ? null : t;
      var a = e();
      if (Fl) {
        cl(!0);
        try {
          e();
        } finally {
          cl(!1);
        }
      }
      return l.memoizedState = [a, t], a;
    },
    useReducer: function(e, t, l) {
      var a = et();
      if (l !== void 0) {
        var n = l(t);
        if (Fl) {
          cl(!0);
          try {
            l(t);
          } finally {
            cl(!1);
          }
        }
      } else n = t;
      return a.memoizedState = a.baseState = n, e = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: n
      }, a.queue = e, e = e.dispatch = qh.bind(
        null,
        ae,
        e
      ), [a.memoizedState, e];
    },
    useRef: function(e) {
      var t = et();
      return e = { current: e }, t.memoizedState = e;
    },
    useState: function(e) {
      e = Dc(e);
      var t = e.queue, l = Sf.bind(null, ae, t);
      return t.dispatch = l, [e.memoizedState, l];
    },
    useDebugValue: kc,
    useDeferredValue: function(e, t) {
      var l = et();
      return Bc(l, e, t);
    },
    useTransition: function() {
      var e = Dc(!1);
      return e = gf.bind(
        null,
        ae,
        e.queue,
        !0,
        !1
      ), et().memoizedState = e, [!1, e];
    },
    useSyncExternalStore: function(e, t, l) {
      var a = ae, n = et();
      if (fe) {
        if (l === void 0)
          throw Error(s(407));
        l = l();
      } else {
        if (l = t(), Ee === null)
          throw Error(s(349));
        (se & 127) !== 0 || Xo(a, t, l);
      }
      n.memoizedState = l;
      var u = { value: l, getSnapshot: t };
      return n.queue = u, cf(Zo.bind(null, a, u, e), [
        e
      ]), a.flags |= 2048, za(
        9,
        { destroy: void 0 },
        Vo.bind(
          null,
          a,
          u,
          l,
          t
        ),
        null
      ), l;
    },
    useId: function() {
      var e = et(), t = Ee.identifierPrefix;
      if (fe) {
        var l = Bt, a = kt;
        l = (a & ~(1 << 32 - ft(a) - 1)).toString(32) + l, t = "_" + t + "R_" + l, l = Nu++, 0 < l && (t += "H" + l.toString(32)), t += "_";
      } else
        l = Dh++, t = "_" + t + "r_" + l.toString(32) + "_";
      return e.memoizedState = t;
    },
    useHostTransitionStatus: Lc,
    useFormState: tf,
    useActionState: tf,
    useOptimistic: function(e) {
      var t = et();
      t.memoizedState = t.baseState = e;
      var l = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return t.queue = l, t = qc.bind(
        null,
        ae,
        !0,
        l
      ), l.dispatch = t, [e, t];
    },
    useMemoCache: Mc,
    useCacheRefresh: function() {
      return et().memoizedState = Lh.bind(
        null,
        ae
      );
    },
    useEffectEvent: function(e) {
      var t = et(), l = { impl: e };
      return t.memoizedState = l, function() {
        if ((pe & 2) !== 0)
          throw Error(s(440));
        return l.impl.apply(void 0, arguments);
      };
    }
  }, Yc = {
    readContext: Ze,
    use: Eu,
    useCallback: mf,
    useContext: Ze,
    useEffect: Rc,
    useImperativeHandle: df,
    useInsertionEffect: sf,
    useLayoutEffect: of,
    useMemo: hf,
    useReducer: _u,
    useRef: uf,
    useState: function() {
      return _u(Ft);
    },
    useDebugValue: kc,
    useDeferredValue: function(e, t) {
      var l = Re();
      return pf(
        l,
        Se.memoizedState,
        e,
        t
      );
    },
    useTransition: function() {
      var e = _u(Ft)[0], t = Re().memoizedState;
      return [
        typeof e == "boolean" ? e : pn(e),
        t
      ];
    },
    useSyncExternalStore: Qo,
    useId: xf,
    useHostTransitionStatus: Lc,
    useFormState: lf,
    useActionState: lf,
    useOptimistic: function(e, t) {
      var l = Re();
      return $o(l, Se, e, t);
    },
    useMemoCache: Mc,
    useCacheRefresh: bf
  };
  Yc.useEffectEvent = rf;
  var Ef = {
    readContext: Ze,
    use: Eu,
    useCallback: mf,
    useContext: Ze,
    useEffect: Rc,
    useImperativeHandle: df,
    useInsertionEffect: sf,
    useLayoutEffect: of,
    useMemo: hf,
    useReducer: wc,
    useRef: uf,
    useState: function() {
      return wc(Ft);
    },
    useDebugValue: kc,
    useDeferredValue: function(e, t) {
      var l = Re();
      return Se === null ? Bc(l, e, t) : pf(
        l,
        Se.memoizedState,
        e,
        t
      );
    },
    useTransition: function() {
      var e = wc(Ft)[0], t = Re().memoizedState;
      return [
        typeof e == "boolean" ? e : pn(e),
        t
      ];
    },
    useSyncExternalStore: Qo,
    useId: xf,
    useHostTransitionStatus: Lc,
    useFormState: nf,
    useActionState: nf,
    useOptimistic: function(e, t) {
      var l = Re();
      return Se !== null ? $o(l, Se, e, t) : (l.baseState = e, [e, l.queue.dispatch]);
    },
    useMemoCache: Mc,
    useCacheRefresh: bf
  };
  Ef.useEffectEvent = rf;
  function Gc(e, t, l, a) {
    t = e.memoizedState, l = l(a, t), l = l == null ? t : A({}, t, l), e.memoizedState = l, e.lanes === 0 && (e.updateQueue.baseState = l);
  }
  var Qc = {
    enqueueSetState: function(e, t, l) {
      e = e._reactInternals;
      var a = vt(), n = pl(a);
      n.payload = t, l != null && (n.callback = l), t = gl(e, n, a), t !== null && (rt(t, e, a), fn(t, e, a));
    },
    enqueueReplaceState: function(e, t, l) {
      e = e._reactInternals;
      var a = vt(), n = pl(a);
      n.tag = 1, n.payload = t, l != null && (n.callback = l), t = gl(e, n, a), t !== null && (rt(t, e, a), fn(t, e, a));
    },
    enqueueForceUpdate: function(e, t) {
      e = e._reactInternals;
      var l = vt(), a = pl(l);
      a.tag = 2, t != null && (a.callback = t), t = gl(e, a, l), t !== null && (rt(t, e, l), fn(t, e, l));
    }
  };
  function _f(e, t, l, a, n, u, r) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(a, u, r) : t.prototype && t.prototype.isPureReactComponent ? !ln(l, a) || !ln(n, u) : !0;
  }
  function zf(e, t, l, a) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(l, a), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(l, a), t.state !== e && Qc.enqueueReplaceState(t, t.state, null);
  }
  function Wl(e, t) {
    var l = t;
    if ("ref" in t) {
      l = {};
      for (var a in t)
        a !== "ref" && (l[a] = t[a]);
    }
    if (e = e.defaultProps) {
      l === t && (l = A({}, l));
      for (var n in e)
        l[n] === void 0 && (l[n] = e[n]);
    }
    return l;
  }
  function Cf(e) {
    cu(e);
  }
  function Af(e) {
    console.error(e);
  }
  function Mf(e) {
    cu(e);
  }
  function Mu(e, t) {
    try {
      var l = e.onUncaughtError;
      l(t.value, { componentStack: t.stack });
    } catch (a) {
      setTimeout(function() {
        throw a;
      });
    }
  }
  function Of(e, t, l) {
    try {
      var a = e.onCaughtError;
      a(l.value, {
        componentStack: l.stack,
        errorBoundary: t.tag === 1 ? t.stateNode : null
      });
    } catch (n) {
      setTimeout(function() {
        throw n;
      });
    }
  }
  function Xc(e, t, l) {
    return l = pl(l), l.tag = 3, l.payload = { element: null }, l.callback = function() {
      Mu(e, t);
    }, l;
  }
  function wf(e) {
    return e = pl(e), e.tag = 3, e;
  }
  function Df(e, t, l, a) {
    var n = l.type.getDerivedStateFromError;
    if (typeof n == "function") {
      var u = a.value;
      e.payload = function() {
        return n(u);
      }, e.callback = function() {
        Of(t, l, a);
      };
    }
    var r = l.stateNode;
    r !== null && typeof r.componentDidCatch == "function" && (e.callback = function() {
      Of(t, l, a), typeof n != "function" && (jl === null ? jl = /* @__PURE__ */ new Set([this]) : jl.add(this));
      var d = a.stack;
      this.componentDidCatch(a.value, {
        componentStack: d !== null ? d : ""
      });
    });
  }
  function Yh(e, t, l, a, n) {
    if (l.flags |= 32768, a !== null && typeof a == "object" && typeof a.then == "function") {
      if (t = l.alternate, t !== null && xa(
        t,
        l,
        n,
        !0
      ), l = ht.current, l !== null) {
        switch (l.tag) {
          case 31:
          case 13:
            return Ct === null ? Gu() : l.alternate === null && we === 0 && (we = 3), l.flags &= -257, l.flags |= 65536, l.lanes = n, a === yu ? l.flags |= 16384 : (t = l.updateQueue, t === null ? l.updateQueue = /* @__PURE__ */ new Set([a]) : t.add(a), pr(e, a, n)), !1;
          case 22:
            return l.flags |= 65536, a === yu ? l.flags |= 16384 : (t = l.updateQueue, t === null ? (t = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([a])
            }, l.updateQueue = t) : (l = t.retryQueue, l === null ? t.retryQueue = /* @__PURE__ */ new Set([a]) : l.add(a)), pr(e, a, n)), !1;
        }
        throw Error(s(435, l.tag));
      }
      return pr(e, a, n), Gu(), !1;
    }
    if (fe)
      return t = ht.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = n, a !== sc && (e = Error(s(422), { cause: a }), un(Tt(e, l)))) : (a !== sc && (t = Error(s(423), {
        cause: a
      }), un(
        Tt(t, l)
      )), e = e.current.alternate, e.flags |= 65536, n &= -n, e.lanes |= n, a = Tt(a, l), n = Xc(
        e.stateNode,
        a,
        n
      ), bc(e, n), we !== 4 && (we = 2)), !1;
    var u = Error(s(520), { cause: a });
    if (u = Tt(u, l), En === null ? En = [u] : En.push(u), we !== 4 && (we = 2), t === null) return !0;
    a = Tt(a, l), l = t;
    do {
      switch (l.tag) {
        case 3:
          return l.flags |= 65536, e = n & -n, l.lanes |= e, e = Xc(l.stateNode, a, e), bc(l, e), !1;
        case 1:
          if (t = l.type, u = l.stateNode, (l.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || u !== null && typeof u.componentDidCatch == "function" && (jl === null || !jl.has(u))))
            return l.flags |= 65536, n &= -n, l.lanes |= n, n = wf(n), Df(
              n,
              e,
              l,
              a
            ), bc(l, n), !1;
      }
      l = l.return;
    } while (l !== null);
    return !1;
  }
  var Vc = Error(s(461)), He = !1;
  function Ke(e, t, l, a) {
    t.child = e === null ? ko(t, null, l, a) : $l(
      t,
      e.child,
      l,
      a
    );
  }
  function Uf(e, t, l, a, n) {
    l = l.render;
    var u = t.ref;
    if ("ref" in a) {
      var r = {};
      for (var d in a)
        d !== "ref" && (r[d] = a[d]);
    } else r = a;
    return Vl(t), a = _c(
      e,
      t,
      l,
      r,
      u,
      n
    ), d = zc(), e !== null && !He ? (Cc(e, t, n), Wt(e, t, n)) : (fe && d && cc(t), t.flags |= 1, Ke(e, t, a, n), t.child);
  }
  function Rf(e, t, l, a, n) {
    if (e === null) {
      var u = l.type;
      return typeof u == "function" && !nc(u) && u.defaultProps === void 0 && l.compare === null ? (t.tag = 15, t.type = u, kf(
        e,
        t,
        u,
        a,
        n
      )) : (e = fu(
        l.type,
        null,
        a,
        t,
        t.mode,
        n
      ), e.ref = t.ref, e.return = t, t.child = e);
    }
    if (u = e.child, !Pc(e, n)) {
      var r = u.memoizedProps;
      if (l = l.compare, l = l !== null ? l : ln, l(r, a) && e.ref === t.ref)
        return Wt(e, t, n);
    }
    return t.flags |= 1, e = Vt(u, a), e.ref = t.ref, e.return = t, t.child = e;
  }
  function kf(e, t, l, a, n) {
    if (e !== null) {
      var u = e.memoizedProps;
      if (ln(u, a) && e.ref === t.ref)
        if (He = !1, t.pendingProps = a = u, Pc(e, n))
          (e.flags & 131072) !== 0 && (He = !0);
        else
          return t.lanes = e.lanes, Wt(e, t, n);
    }
    return Zc(
      e,
      t,
      l,
      a,
      n
    );
  }
  function Bf(e, t, l, a) {
    var n = a.children, u = e !== null ? e.memoizedState : null;
    if (e === null && t.stateNode === null && (t.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), a.mode === "hidden") {
      if ((t.flags & 128) !== 0) {
        if (u = u !== null ? u.baseLanes | l : l, e !== null) {
          for (a = t.child = e.child, n = 0; a !== null; )
            n = n | a.lanes | a.childLanes, a = a.sibling;
          a = n & ~u;
        } else a = 0, t.child = null;
        return Hf(
          e,
          t,
          u,
          l,
          a
        );
      }
      if ((l & 536870912) !== 0)
        t.memoizedState = { baseLanes: 0, cachePool: null }, e !== null && pu(
          t,
          u !== null ? u.cachePool : null
        ), u !== null ? Lo(t, u) : jc(), qo(t);
      else
        return a = t.lanes = 536870912, Hf(
          e,
          t,
          u !== null ? u.baseLanes | l : l,
          l,
          a
        );
    } else
      u !== null ? (pu(t, u.cachePool), Lo(t, u), vl(), t.memoizedState = null) : (e !== null && pu(t, null), jc(), vl());
    return Ke(e, t, n, l), t.child;
  }
  function vn(e, t) {
    return e !== null && e.tag === 22 || t.stateNode !== null || (t.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), t.sibling;
  }
  function Hf(e, t, l, a, n) {
    var u = gc();
    return u = u === null ? null : { parent: ke._currentValue, pool: u }, t.memoizedState = {
      baseLanes: l,
      cachePool: u
    }, e !== null && pu(t, null), jc(), qo(t), e !== null && xa(e, t, a, !0), t.childLanes = n, null;
  }
  function Ou(e, t) {
    return t = Du(
      { mode: t.mode, children: t.children },
      e.mode
    ), t.ref = e.ref, e.child = t, t.return = e, t;
  }
  function Lf(e, t, l) {
    return $l(t, e.child, null, l), e = Ou(t, t.pendingProps), e.flags |= 2, pt(t), t.memoizedState = null, e;
  }
  function Gh(e, t, l) {
    var a = t.pendingProps, n = (t.flags & 128) !== 0;
    if (t.flags &= -129, e === null) {
      if (fe) {
        if (a.mode === "hidden")
          return e = Ou(t, a), t.lanes = 536870912, vn(null, e);
        if (Tc(t), (e = Ce) ? (e = Wd(
          e,
          zt
        ), e = e !== null && e.data === "&" ? e : null, e !== null && (t.memoizedState = {
          dehydrated: e,
          treeContext: ol !== null ? { id: kt, overflow: Bt } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, l = So(e), l.return = t, t.child = l, Ve = t, Ce = null)) : e = null, e === null) throw dl(t);
        return t.lanes = 536870912, null;
      }
      return Ou(t, a);
    }
    var u = e.memoizedState;
    if (u !== null) {
      var r = u.dehydrated;
      if (Tc(t), n)
        if (t.flags & 256)
          t.flags &= -257, t = Lf(
            e,
            t,
            l
          );
        else if (t.memoizedState !== null)
          t.child = e.child, t.flags |= 128, t = null;
        else throw Error(s(558));
      else if (He || xa(e, t, l, !1), n = (l & e.childLanes) !== 0, He || n) {
        if (a = Ee, a !== null && (r = zs(a, l), r !== 0 && r !== u.retryLane))
          throw u.retryLane = r, Yl(e, r), rt(a, e, r), Vc;
        Gu(), t = Lf(
          e,
          t,
          l
        );
      } else
        e = u.treeContext, Ce = At(r.nextSibling), Ve = t, fe = !0, fl = null, zt = !1, e !== null && To(t, e), t = Ou(t, a), t.flags |= 4096;
      return t;
    }
    return e = Vt(e.child, {
      mode: a.mode,
      children: a.children
    }), e.ref = t.ref, t.child = e, e.return = t, e;
  }
  function wu(e, t) {
    var l = t.ref;
    if (l === null)
      e !== null && e.ref !== null && (t.flags |= 4194816);
    else {
      if (typeof l != "function" && typeof l != "object")
        throw Error(s(284));
      (e === null || e.ref !== l) && (t.flags |= 4194816);
    }
  }
  function Zc(e, t, l, a, n) {
    return Vl(t), l = _c(
      e,
      t,
      l,
      a,
      void 0,
      n
    ), a = zc(), e !== null && !He ? (Cc(e, t, n), Wt(e, t, n)) : (fe && a && cc(t), t.flags |= 1, Ke(e, t, l, n), t.child);
  }
  function qf(e, t, l, a, n, u) {
    return Vl(t), t.updateQueue = null, l = Go(
      t,
      a,
      l,
      n
    ), Yo(e), a = zc(), e !== null && !He ? (Cc(e, t, u), Wt(e, t, u)) : (fe && a && cc(t), t.flags |= 1, Ke(e, t, l, u), t.child);
  }
  function Yf(e, t, l, a, n) {
    if (Vl(t), t.stateNode === null) {
      var u = pa, r = l.contextType;
      typeof r == "object" && r !== null && (u = Ze(r)), u = new l(a, u), t.memoizedState = u.state !== null && u.state !== void 0 ? u.state : null, u.updater = Qc, t.stateNode = u, u._reactInternals = t, u = t.stateNode, u.props = a, u.state = t.memoizedState, u.refs = {}, vc(t), r = l.contextType, u.context = typeof r == "object" && r !== null ? Ze(r) : pa, u.state = t.memoizedState, r = l.getDerivedStateFromProps, typeof r == "function" && (Gc(
        t,
        l,
        r,
        a
      ), u.state = t.memoizedState), typeof l.getDerivedStateFromProps == "function" || typeof u.getSnapshotBeforeUpdate == "function" || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (r = u.state, typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount(), r !== u.state && Qc.enqueueReplaceState(u, u.state, null), mn(t, a, u, n), dn(), u.state = t.memoizedState), typeof u.componentDidMount == "function" && (t.flags |= 4194308), a = !0;
    } else if (e === null) {
      u = t.stateNode;
      var d = t.memoizedProps, h = Wl(l, d);
      u.props = h;
      var j = u.context, z = l.contextType;
      r = pa, typeof z == "object" && z !== null && (r = Ze(z));
      var O = l.getDerivedStateFromProps;
      z = typeof O == "function" || typeof u.getSnapshotBeforeUpdate == "function", d = t.pendingProps !== d, z || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (d || j !== r) && zf(
        t,
        u,
        a,
        r
      ), hl = !1;
      var N = t.memoizedState;
      u.state = N, mn(t, a, u, n), dn(), j = t.memoizedState, d || N !== j || hl ? (typeof O == "function" && (Gc(
        t,
        l,
        O,
        a
      ), j = t.memoizedState), (h = hl || _f(
        t,
        l,
        h,
        a,
        N,
        j,
        r
      )) ? (z || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount()), typeof u.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof u.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = a, t.memoizedState = j), u.props = a, u.state = j, u.context = r, a = h) : (typeof u.componentDidMount == "function" && (t.flags |= 4194308), a = !1);
    } else {
      u = t.stateNode, xc(e, t), r = t.memoizedProps, z = Wl(l, r), u.props = z, O = t.pendingProps, N = u.context, j = l.contextType, h = pa, typeof j == "object" && j !== null && (h = Ze(j)), d = l.getDerivedStateFromProps, (j = typeof d == "function" || typeof u.getSnapshotBeforeUpdate == "function") || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (r !== O || N !== h) && zf(
        t,
        u,
        a,
        h
      ), hl = !1, N = t.memoizedState, u.state = N, mn(t, a, u, n), dn();
      var E = t.memoizedState;
      r !== O || N !== E || hl || e !== null && e.dependencies !== null && mu(e.dependencies) ? (typeof d == "function" && (Gc(
        t,
        l,
        d,
        a
      ), E = t.memoizedState), (z = hl || _f(
        t,
        l,
        z,
        a,
        N,
        E,
        h
      ) || e !== null && e.dependencies !== null && mu(e.dependencies)) ? (j || typeof u.UNSAFE_componentWillUpdate != "function" && typeof u.componentWillUpdate != "function" || (typeof u.componentWillUpdate == "function" && u.componentWillUpdate(a, E, h), typeof u.UNSAFE_componentWillUpdate == "function" && u.UNSAFE_componentWillUpdate(
        a,
        E,
        h
      )), typeof u.componentDidUpdate == "function" && (t.flags |= 4), typeof u.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof u.componentDidUpdate != "function" || r === e.memoizedProps && N === e.memoizedState || (t.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || r === e.memoizedProps && N === e.memoizedState || (t.flags |= 1024), t.memoizedProps = a, t.memoizedState = E), u.props = a, u.state = E, u.context = h, a = z) : (typeof u.componentDidUpdate != "function" || r === e.memoizedProps && N === e.memoizedState || (t.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || r === e.memoizedProps && N === e.memoizedState || (t.flags |= 1024), a = !1);
    }
    return u = a, wu(e, t), a = (t.flags & 128) !== 0, u || a ? (u = t.stateNode, l = a && typeof l.getDerivedStateFromError != "function" ? null : u.render(), t.flags |= 1, e !== null && a ? (t.child = $l(
      t,
      e.child,
      null,
      n
    ), t.child = $l(
      t,
      null,
      l,
      n
    )) : Ke(e, t, l, n), t.memoizedState = u.state, e = t.child) : e = Wt(
      e,
      t,
      n
    ), e;
  }
  function Gf(e, t, l, a) {
    return Ql(), t.flags |= 256, Ke(e, t, l, a), t.child;
  }
  var Kc = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function Jc(e) {
    return { baseLanes: e, cachePool: Mo() };
  }
  function $c(e, t, l) {
    return e = e !== null ? e.childLanes & ~l : 0, t && (e |= yt), e;
  }
  function Qf(e, t, l) {
    var a = t.pendingProps, n = !1, u = (t.flags & 128) !== 0, r;
    if ((r = u) || (r = e !== null && e.memoizedState === null ? !1 : (Ue.current & 2) !== 0), r && (n = !0, t.flags &= -129), r = (t.flags & 32) !== 0, t.flags &= -33, e === null) {
      if (fe) {
        if (n ? yl(t) : vl(), (e = Ce) ? (e = Wd(
          e,
          zt
        ), e = e !== null && e.data !== "&" ? e : null, e !== null && (t.memoizedState = {
          dehydrated: e,
          treeContext: ol !== null ? { id: kt, overflow: Bt } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, l = So(e), l.return = t, t.child = l, Ve = t, Ce = null)) : e = null, e === null) throw dl(t);
        return Or(e) ? t.lanes = 32 : t.lanes = 536870912, null;
      }
      var d = a.children;
      return a = a.fallback, n ? (vl(), n = t.mode, d = Du(
        { mode: "hidden", children: d },
        n
      ), a = Gl(
        a,
        n,
        l,
        null
      ), d.return = t, a.return = t, d.sibling = a, t.child = d, a = t.child, a.memoizedState = Jc(l), a.childLanes = $c(
        e,
        r,
        l
      ), t.memoizedState = Kc, vn(null, a)) : (yl(t), Fc(t, d));
    }
    var h = e.memoizedState;
    if (h !== null && (d = h.dehydrated, d !== null)) {
      if (u)
        t.flags & 256 ? (yl(t), t.flags &= -257, t = Wc(
          e,
          t,
          l
        )) : t.memoizedState !== null ? (vl(), t.child = e.child, t.flags |= 128, t = null) : (vl(), d = a.fallback, n = t.mode, a = Du(
          { mode: "visible", children: a.children },
          n
        ), d = Gl(
          d,
          n,
          l,
          null
        ), d.flags |= 2, a.return = t, d.return = t, a.sibling = d, t.child = a, $l(
          t,
          e.child,
          null,
          l
        ), a = t.child, a.memoizedState = Jc(l), a.childLanes = $c(
          e,
          r,
          l
        ), t.memoizedState = Kc, t = vn(null, a));
      else if (yl(t), Or(d)) {
        if (r = d.nextSibling && d.nextSibling.dataset, r) var j = r.dgst;
        r = j, a = Error(s(419)), a.stack = "", a.digest = r, un({ value: a, source: null, stack: null }), t = Wc(
          e,
          t,
          l
        );
      } else if (He || xa(e, t, l, !1), r = (l & e.childLanes) !== 0, He || r) {
        if (r = Ee, r !== null && (a = zs(r, l), a !== 0 && a !== h.retryLane))
          throw h.retryLane = a, Yl(e, a), rt(r, e, a), Vc;
        Mr(d) || Gu(), t = Wc(
          e,
          t,
          l
        );
      } else
        Mr(d) ? (t.flags |= 192, t.child = e.child, t = null) : (e = h.treeContext, Ce = At(
          d.nextSibling
        ), Ve = t, fe = !0, fl = null, zt = !1, e !== null && To(t, e), t = Fc(
          t,
          a.children
        ), t.flags |= 4096);
      return t;
    }
    return n ? (vl(), d = a.fallback, n = t.mode, h = e.child, j = h.sibling, a = Vt(h, {
      mode: "hidden",
      children: a.children
    }), a.subtreeFlags = h.subtreeFlags & 65011712, j !== null ? d = Vt(
      j,
      d
    ) : (d = Gl(
      d,
      n,
      l,
      null
    ), d.flags |= 2), d.return = t, a.return = t, a.sibling = d, t.child = a, vn(null, a), a = t.child, d = e.child.memoizedState, d === null ? d = Jc(l) : (n = d.cachePool, n !== null ? (h = ke._currentValue, n = n.parent !== h ? { parent: h, pool: h } : n) : n = Mo(), d = {
      baseLanes: d.baseLanes | l,
      cachePool: n
    }), a.memoizedState = d, a.childLanes = $c(
      e,
      r,
      l
    ), t.memoizedState = Kc, vn(e.child, a)) : (yl(t), l = e.child, e = l.sibling, l = Vt(l, {
      mode: "visible",
      children: a.children
    }), l.return = t, l.sibling = null, e !== null && (r = t.deletions, r === null ? (t.deletions = [e], t.flags |= 16) : r.push(e)), t.child = l, t.memoizedState = null, l);
  }
  function Fc(e, t) {
    return t = Du(
      { mode: "visible", children: t },
      e.mode
    ), t.return = e, e.child = t;
  }
  function Du(e, t) {
    return e = mt(22, e, null, t), e.lanes = 0, e;
  }
  function Wc(e, t, l) {
    return $l(t, e.child, null, l), e = Fc(
      t,
      t.pendingProps.children
    ), e.flags |= 2, t.memoizedState = null, e;
  }
  function Xf(e, t, l) {
    e.lanes |= t;
    var a = e.alternate;
    a !== null && (a.lanes |= t), dc(e.return, t, l);
  }
  function Ic(e, t, l, a, n, u) {
    var r = e.memoizedState;
    r === null ? e.memoizedState = {
      isBackwards: t,
      rendering: null,
      renderingStartTime: 0,
      last: a,
      tail: l,
      tailMode: n,
      treeForkCount: u
    } : (r.isBackwards = t, r.rendering = null, r.renderingStartTime = 0, r.last = a, r.tail = l, r.tailMode = n, r.treeForkCount = u);
  }
  function Vf(e, t, l) {
    var a = t.pendingProps, n = a.revealOrder, u = a.tail;
    a = a.children;
    var r = Ue.current, d = (r & 2) !== 0;
    if (d ? (r = r & 1 | 2, t.flags |= 128) : r &= 1, q(Ue, r), Ke(e, t, a, l), a = fe ? nn : 0, !d && e !== null && (e.flags & 128) !== 0)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13)
          e.memoizedState !== null && Xf(e, l, t);
        else if (e.tag === 19)
          Xf(e, l, t);
        else if (e.child !== null) {
          e.child.return = e, e = e.child;
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t)
            break e;
          e = e.return;
        }
        e.sibling.return = e.return, e = e.sibling;
      }
    switch (n) {
      case "forwards":
        for (l = t.child, n = null; l !== null; )
          e = l.alternate, e !== null && Su(e) === null && (n = l), l = l.sibling;
        l = n, l === null ? (n = t.child, t.child = null) : (n = l.sibling, l.sibling = null), Ic(
          t,
          !1,
          n,
          l,
          u,
          a
        );
        break;
      case "backwards":
      case "unstable_legacy-backwards":
        for (l = null, n = t.child, t.child = null; n !== null; ) {
          if (e = n.alternate, e !== null && Su(e) === null) {
            t.child = n;
            break;
          }
          e = n.sibling, n.sibling = l, l = n, n = e;
        }
        Ic(
          t,
          !0,
          l,
          null,
          u,
          a
        );
        break;
      case "together":
        Ic(
          t,
          !1,
          null,
          null,
          void 0,
          a
        );
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function Wt(e, t, l) {
    if (e !== null && (t.dependencies = e.dependencies), Sl |= t.lanes, (l & t.childLanes) === 0)
      if (e !== null) {
        if (xa(
          e,
          t,
          l,
          !1
        ), (l & t.childLanes) === 0)
          return null;
      } else return null;
    if (e !== null && t.child !== e.child)
      throw Error(s(153));
    if (t.child !== null) {
      for (e = t.child, l = Vt(e, e.pendingProps), t.child = l, l.return = t; e.sibling !== null; )
        e = e.sibling, l = l.sibling = Vt(e, e.pendingProps), l.return = t;
      l.sibling = null;
    }
    return t.child;
  }
  function Pc(e, t) {
    return (e.lanes & t) !== 0 ? !0 : (e = e.dependencies, !!(e !== null && mu(e)));
  }
  function Qh(e, t, l) {
    switch (t.tag) {
      case 3:
        Pe(t, t.stateNode.containerInfo), ml(t, ke, e.memoizedState.cache), Ql();
        break;
      case 27:
      case 5:
        Qa(t);
        break;
      case 4:
        Pe(t, t.stateNode.containerInfo);
        break;
      case 10:
        ml(
          t,
          t.type,
          t.memoizedProps.value
        );
        break;
      case 31:
        if (t.memoizedState !== null)
          return t.flags |= 128, Tc(t), null;
        break;
      case 13:
        var a = t.memoizedState;
        if (a !== null)
          return a.dehydrated !== null ? (yl(t), t.flags |= 128, null) : (l & t.child.childLanes) !== 0 ? Qf(e, t, l) : (yl(t), e = Wt(
            e,
            t,
            l
          ), e !== null ? e.sibling : null);
        yl(t);
        break;
      case 19:
        var n = (e.flags & 128) !== 0;
        if (a = (l & t.childLanes) !== 0, a || (xa(
          e,
          t,
          l,
          !1
        ), a = (l & t.childLanes) !== 0), n) {
          if (a)
            return Vf(
              e,
              t,
              l
            );
          t.flags |= 128;
        }
        if (n = t.memoizedState, n !== null && (n.rendering = null, n.tail = null, n.lastEffect = null), q(Ue, Ue.current), a) break;
        return null;
      case 22:
        return t.lanes = 0, Bf(
          e,
          t,
          l,
          t.pendingProps
        );
      case 24:
        ml(t, ke, e.memoizedState.cache);
    }
    return Wt(e, t, l);
  }
  function Zf(e, t, l) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps)
        He = !0;
      else {
        if (!Pc(e, l) && (t.flags & 128) === 0)
          return He = !1, Qh(
            e,
            t,
            l
          );
        He = (e.flags & 131072) !== 0;
      }
    else
      He = !1, fe && (t.flags & 1048576) !== 0 && No(t, nn, t.index);
    switch (t.lanes = 0, t.tag) {
      case 16:
        e: {
          var a = t.pendingProps;
          if (e = Kl(t.elementType), t.type = e, typeof e == "function")
            nc(e) ? (a = Wl(e, a), t.tag = 1, t = Yf(
              null,
              t,
              e,
              a,
              l
            )) : (t.tag = 0, t = Zc(
              null,
              t,
              e,
              a,
              l
            ));
          else {
            if (e != null) {
              var n = e.$$typeof;
              if (n === ge) {
                t.tag = 11, t = Uf(
                  null,
                  t,
                  e,
                  a,
                  l
                );
                break e;
              } else if (n === Z) {
                t.tag = 14, t = Rf(
                  null,
                  t,
                  e,
                  a,
                  l
                );
                break e;
              }
            }
            throw t = de(e) || e, Error(s(306, t, ""));
          }
        }
        return t;
      case 0:
        return Zc(
          e,
          t,
          t.type,
          t.pendingProps,
          l
        );
      case 1:
        return a = t.type, n = Wl(
          a,
          t.pendingProps
        ), Yf(
          e,
          t,
          a,
          n,
          l
        );
      case 3:
        e: {
          if (Pe(
            t,
            t.stateNode.containerInfo
          ), e === null) throw Error(s(387));
          a = t.pendingProps;
          var u = t.memoizedState;
          n = u.element, xc(e, t), mn(t, a, null, l);
          var r = t.memoizedState;
          if (a = r.cache, ml(t, ke, a), a !== u.cache && mc(
            t,
            [ke],
            l,
            !0
          ), dn(), a = r.element, u.isDehydrated)
            if (u = {
              element: a,
              isDehydrated: !1,
              cache: r.cache
            }, t.updateQueue.baseState = u, t.memoizedState = u, t.flags & 256) {
              t = Gf(
                e,
                t,
                a,
                l
              );
              break e;
            } else if (a !== n) {
              n = Tt(
                Error(s(424)),
                t
              ), un(n), t = Gf(
                e,
                t,
                a,
                l
              );
              break e;
            } else {
              switch (e = t.stateNode.containerInfo, e.nodeType) {
                case 9:
                  e = e.body;
                  break;
                default:
                  e = e.nodeName === "HTML" ? e.ownerDocument.body : e;
              }
              for (Ce = At(e.firstChild), Ve = t, fe = !0, fl = null, zt = !0, l = ko(
                t,
                null,
                a,
                l
              ), t.child = l; l; )
                l.flags = l.flags & -3 | 4096, l = l.sibling;
            }
          else {
            if (Ql(), a === n) {
              t = Wt(
                e,
                t,
                l
              );
              break e;
            }
            Ke(e, t, a, l);
          }
          t = t.child;
        }
        return t;
      case 26:
        return wu(e, t), e === null ? (l = a0(
          t.type,
          null,
          t.pendingProps,
          null
        )) ? t.memoizedState = l : fe || (l = t.type, e = t.pendingProps, a = $u(
          ie.current
        ).createElement(l), a[Xe] = t, a[lt] = e, Je(a, l, e), Ye(a), t.stateNode = a) : t.memoizedState = a0(
          t.type,
          e.memoizedProps,
          t.pendingProps,
          e.memoizedState
        ), null;
      case 27:
        return Qa(t), e === null && fe && (a = t.stateNode = e0(
          t.type,
          t.pendingProps,
          ie.current
        ), Ve = t, zt = !0, n = Ce, _l(t.type) ? (wr = n, Ce = At(a.firstChild)) : Ce = n), Ke(
          e,
          t,
          t.pendingProps.children,
          l
        ), wu(e, t), e === null && (t.flags |= 4194304), t.child;
      case 5:
        return e === null && fe && ((n = a = Ce) && (a = x1(
          a,
          t.type,
          t.pendingProps,
          zt
        ), a !== null ? (t.stateNode = a, Ve = t, Ce = At(a.firstChild), zt = !1, n = !0) : n = !1), n || dl(t)), Qa(t), n = t.type, u = t.pendingProps, r = e !== null ? e.memoizedProps : null, a = u.children, zr(n, u) ? a = null : r !== null && zr(n, r) && (t.flags |= 32), t.memoizedState !== null && (n = _c(
          e,
          t,
          Uh,
          null,
          null,
          l
        ), Dn._currentValue = n), wu(e, t), Ke(e, t, a, l), t.child;
      case 6:
        return e === null && fe && ((e = l = Ce) && (l = b1(
          l,
          t.pendingProps,
          zt
        ), l !== null ? (t.stateNode = l, Ve = t, Ce = null, e = !0) : e = !1), e || dl(t)), null;
      case 13:
        return Qf(e, t, l);
      case 4:
        return Pe(
          t,
          t.stateNode.containerInfo
        ), a = t.pendingProps, e === null ? t.child = $l(
          t,
          null,
          a,
          l
        ) : Ke(e, t, a, l), t.child;
      case 11:
        return Uf(
          e,
          t,
          t.type,
          t.pendingProps,
          l
        );
      case 7:
        return Ke(
          e,
          t,
          t.pendingProps,
          l
        ), t.child;
      case 8:
        return Ke(
          e,
          t,
          t.pendingProps.children,
          l
        ), t.child;
      case 12:
        return Ke(
          e,
          t,
          t.pendingProps.children,
          l
        ), t.child;
      case 10:
        return a = t.pendingProps, ml(t, t.type, a.value), Ke(e, t, a.children, l), t.child;
      case 9:
        return n = t.type._context, a = t.pendingProps.children, Vl(t), n = Ze(n), a = a(n), t.flags |= 1, Ke(e, t, a, l), t.child;
      case 14:
        return Rf(
          e,
          t,
          t.type,
          t.pendingProps,
          l
        );
      case 15:
        return kf(
          e,
          t,
          t.type,
          t.pendingProps,
          l
        );
      case 19:
        return Vf(e, t, l);
      case 31:
        return Gh(e, t, l);
      case 22:
        return Bf(
          e,
          t,
          l,
          t.pendingProps
        );
      case 24:
        return Vl(t), a = Ze(ke), e === null ? (n = gc(), n === null && (n = Ee, u = hc(), n.pooledCache = u, u.refCount++, u !== null && (n.pooledCacheLanes |= l), n = u), t.memoizedState = { parent: a, cache: n }, vc(t), ml(t, ke, n)) : ((e.lanes & l) !== 0 && (xc(e, t), mn(t, null, null, l), dn()), n = e.memoizedState, u = t.memoizedState, n.parent !== a ? (n = { parent: a, cache: a }, t.memoizedState = n, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = n), ml(t, ke, a)) : (a = u.cache, ml(t, ke, a), a !== n.cache && mc(
          t,
          [ke],
          l,
          !0
        ))), Ke(
          e,
          t,
          t.pendingProps.children,
          l
        ), t.child;
      case 29:
        throw t.pendingProps;
    }
    throw Error(s(156, t.tag));
  }
  function It(e) {
    e.flags |= 4;
  }
  function er(e, t, l, a, n) {
    if ((t = (e.mode & 32) !== 0) && (t = !1), t) {
      if (e.flags |= 16777216, (n & 335544128) === n)
        if (e.stateNode.complete) e.flags |= 8192;
        else if (xd()) e.flags |= 8192;
        else
          throw Jl = yu, yc;
    } else e.flags &= -16777217;
  }
  function Kf(e, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
      e.flags &= -16777217;
    else if (e.flags |= 16777216, !r0(t))
      if (xd()) e.flags |= 8192;
      else
        throw Jl = yu, yc;
  }
  function Uu(e, t) {
    t !== null && (e.flags |= 4), e.flags & 16384 && (t = e.tag !== 22 ? Ts() : 536870912, e.lanes |= t, Oa |= t);
  }
  function xn(e, t) {
    if (!fe)
      switch (e.tailMode) {
        case "hidden":
          t = e.tail;
          for (var l = null; t !== null; )
            t.alternate !== null && (l = t), t = t.sibling;
          l === null ? e.tail = null : l.sibling = null;
          break;
        case "collapsed":
          l = e.tail;
          for (var a = null; l !== null; )
            l.alternate !== null && (a = l), l = l.sibling;
          a === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : a.sibling = null;
      }
  }
  function Ae(e) {
    var t = e.alternate !== null && e.alternate.child === e.child, l = 0, a = 0;
    if (t)
      for (var n = e.child; n !== null; )
        l |= n.lanes | n.childLanes, a |= n.subtreeFlags & 65011712, a |= n.flags & 65011712, n.return = e, n = n.sibling;
    else
      for (n = e.child; n !== null; )
        l |= n.lanes | n.childLanes, a |= n.subtreeFlags, a |= n.flags, n.return = e, n = n.sibling;
    return e.subtreeFlags |= a, e.childLanes = l, t;
  }
  function Xh(e, t, l) {
    var a = t.pendingProps;
    switch (rc(t), t.tag) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Ae(t), null;
      case 1:
        return Ae(t), null;
      case 3:
        return l = t.stateNode, a = null, e !== null && (a = e.memoizedState.cache), t.memoizedState.cache !== a && (t.flags |= 2048), Jt(ke), De(), l.pendingContext && (l.context = l.pendingContext, l.pendingContext = null), (e === null || e.child === null) && (va(t) ? It(t) : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, oc())), Ae(t), null;
      case 26:
        var n = t.type, u = t.memoizedState;
        return e === null ? (It(t), u !== null ? (Ae(t), Kf(t, u)) : (Ae(t), er(
          t,
          n,
          null,
          a,
          l
        ))) : u ? u !== e.memoizedState ? (It(t), Ae(t), Kf(t, u)) : (Ae(t), t.flags &= -16777217) : (e = e.memoizedProps, e !== a && It(t), Ae(t), er(
          t,
          n,
          e,
          a,
          l
        )), null;
      case 27:
        if (Vn(t), l = ie.current, n = t.type, e !== null && t.stateNode != null)
          e.memoizedProps !== a && It(t);
        else {
          if (!a) {
            if (t.stateNode === null)
              throw Error(s(166));
            return Ae(t), null;
          }
          e = G.current, va(t) ? Eo(t) : (e = e0(n, a, l), t.stateNode = e, It(t));
        }
        return Ae(t), null;
      case 5:
        if (Vn(t), n = t.type, e !== null && t.stateNode != null)
          e.memoizedProps !== a && It(t);
        else {
          if (!a) {
            if (t.stateNode === null)
              throw Error(s(166));
            return Ae(t), null;
          }
          if (u = G.current, va(t))
            Eo(t);
          else {
            var r = $u(
              ie.current
            );
            switch (u) {
              case 1:
                u = r.createElementNS(
                  "http://www.w3.org/2000/svg",
                  n
                );
                break;
              case 2:
                u = r.createElementNS(
                  "http://www.w3.org/1998/Math/MathML",
                  n
                );
                break;
              default:
                switch (n) {
                  case "svg":
                    u = r.createElementNS(
                      "http://www.w3.org/2000/svg",
                      n
                    );
                    break;
                  case "math":
                    u = r.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      n
                    );
                    break;
                  case "script":
                    u = r.createElement("div"), u.innerHTML = "<script><\/script>", u = u.removeChild(
                      u.firstChild
                    );
                    break;
                  case "select":
                    u = typeof a.is == "string" ? r.createElement("select", {
                      is: a.is
                    }) : r.createElement("select"), a.multiple ? u.multiple = !0 : a.size && (u.size = a.size);
                    break;
                  default:
                    u = typeof a.is == "string" ? r.createElement(n, { is: a.is }) : r.createElement(n);
                }
            }
            u[Xe] = t, u[lt] = a;
            e: for (r = t.child; r !== null; ) {
              if (r.tag === 5 || r.tag === 6)
                u.appendChild(r.stateNode);
              else if (r.tag !== 4 && r.tag !== 27 && r.child !== null) {
                r.child.return = r, r = r.child;
                continue;
              }
              if (r === t) break e;
              for (; r.sibling === null; ) {
                if (r.return === null || r.return === t)
                  break e;
                r = r.return;
              }
              r.sibling.return = r.return, r = r.sibling;
            }
            t.stateNode = u;
            e: switch (Je(u, n, a), n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                a = !!a.autoFocus;
                break e;
              case "img":
                a = !0;
                break e;
              default:
                a = !1;
            }
            a && It(t);
          }
        }
        return Ae(t), er(
          t,
          t.type,
          e === null ? null : e.memoizedProps,
          t.pendingProps,
          l
        ), null;
      case 6:
        if (e && t.stateNode != null)
          e.memoizedProps !== a && It(t);
        else {
          if (typeof a != "string" && t.stateNode === null)
            throw Error(s(166));
          if (e = ie.current, va(t)) {
            if (e = t.stateNode, l = t.memoizedProps, a = null, n = Ve, n !== null)
              switch (n.tag) {
                case 27:
                case 5:
                  a = n.memoizedProps;
              }
            e[Xe] = t, e = !!(e.nodeValue === l || a !== null && a.suppressHydrationWarning === !0 || Qd(e.nodeValue, l)), e || dl(t, !0);
          } else
            e = $u(e).createTextNode(
              a
            ), e[Xe] = t, t.stateNode = e;
        }
        return Ae(t), null;
      case 31:
        if (l = t.memoizedState, e === null || e.memoizedState !== null) {
          if (a = va(t), l !== null) {
            if (e === null) {
              if (!a) throw Error(s(318));
              if (e = t.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(s(557));
              e[Xe] = t;
            } else
              Ql(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            Ae(t), e = !1;
          } else
            l = oc(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = l), e = !0;
          if (!e)
            return t.flags & 256 ? (pt(t), t) : (pt(t), null);
          if ((t.flags & 128) !== 0)
            throw Error(s(558));
        }
        return Ae(t), null;
      case 13:
        if (a = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (n = va(t), a !== null && a.dehydrated !== null) {
            if (e === null) {
              if (!n) throw Error(s(318));
              if (n = t.memoizedState, n = n !== null ? n.dehydrated : null, !n) throw Error(s(317));
              n[Xe] = t;
            } else
              Ql(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            Ae(t), n = !1;
          } else
            n = oc(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = n), n = !0;
          if (!n)
            return t.flags & 256 ? (pt(t), t) : (pt(t), null);
        }
        return pt(t), (t.flags & 128) !== 0 ? (t.lanes = l, t) : (l = a !== null, e = e !== null && e.memoizedState !== null, l && (a = t.child, n = null, a.alternate !== null && a.alternate.memoizedState !== null && a.alternate.memoizedState.cachePool !== null && (n = a.alternate.memoizedState.cachePool.pool), u = null, a.memoizedState !== null && a.memoizedState.cachePool !== null && (u = a.memoizedState.cachePool.pool), u !== n && (a.flags |= 2048)), l !== e && l && (t.child.flags |= 8192), Uu(t, t.updateQueue), Ae(t), null);
      case 4:
        return De(), e === null && jr(t.stateNode.containerInfo), Ae(t), null;
      case 10:
        return Jt(t.type), Ae(t), null;
      case 19:
        if (w(Ue), a = t.memoizedState, a === null) return Ae(t), null;
        if (n = (t.flags & 128) !== 0, u = a.rendering, u === null)
          if (n) xn(a, !1);
          else {
            if (we !== 0 || e !== null && (e.flags & 128) !== 0)
              for (e = t.child; e !== null; ) {
                if (u = Su(e), u !== null) {
                  for (t.flags |= 128, xn(a, !1), e = u.updateQueue, t.updateQueue = e, Uu(t, e), t.subtreeFlags = 0, e = l, l = t.child; l !== null; )
                    bo(l, e), l = l.sibling;
                  return q(
                    Ue,
                    Ue.current & 1 | 2
                  ), fe && Zt(t, a.treeForkCount), t.child;
                }
                e = e.sibling;
              }
            a.tail !== null && st() > Lu && (t.flags |= 128, n = !0, xn(a, !1), t.lanes = 4194304);
          }
        else {
          if (!n)
            if (e = Su(u), e !== null) {
              if (t.flags |= 128, n = !0, e = e.updateQueue, t.updateQueue = e, Uu(t, e), xn(a, !0), a.tail === null && a.tailMode === "hidden" && !u.alternate && !fe)
                return Ae(t), null;
            } else
              2 * st() - a.renderingStartTime > Lu && l !== 536870912 && (t.flags |= 128, n = !0, xn(a, !1), t.lanes = 4194304);
          a.isBackwards ? (u.sibling = t.child, t.child = u) : (e = a.last, e !== null ? e.sibling = u : t.child = u, a.last = u);
        }
        return a.tail !== null ? (e = a.tail, a.rendering = e, a.tail = e.sibling, a.renderingStartTime = st(), e.sibling = null, l = Ue.current, q(
          Ue,
          n ? l & 1 | 2 : l & 1
        ), fe && Zt(t, a.treeForkCount), e) : (Ae(t), null);
      case 22:
      case 23:
        return pt(t), Nc(), a = t.memoizedState !== null, e !== null ? e.memoizedState !== null !== a && (t.flags |= 8192) : a && (t.flags |= 8192), a ? (l & 536870912) !== 0 && (t.flags & 128) === 0 && (Ae(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Ae(t), l = t.updateQueue, l !== null && Uu(t, l.retryQueue), l = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (l = e.memoizedState.cachePool.pool), a = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (a = t.memoizedState.cachePool.pool), a !== l && (t.flags |= 2048), e !== null && w(Zl), null;
      case 24:
        return l = null, e !== null && (l = e.memoizedState.cache), t.memoizedState.cache !== l && (t.flags |= 2048), Jt(ke), Ae(t), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(s(156, t.tag));
  }
  function Vh(e, t) {
    switch (rc(t), t.tag) {
      case 1:
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 3:
        return Jt(ke), De(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
      case 26:
      case 27:
      case 5:
        return Vn(t), null;
      case 31:
        if (t.memoizedState !== null) {
          if (pt(t), t.alternate === null)
            throw Error(s(340));
          Ql();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 13:
        if (pt(t), e = t.memoizedState, e !== null && e.dehydrated !== null) {
          if (t.alternate === null)
            throw Error(s(340));
          Ql();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 19:
        return w(Ue), null;
      case 4:
        return De(), null;
      case 10:
        return Jt(t.type), null;
      case 22:
      case 23:
        return pt(t), Nc(), e !== null && w(Zl), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 24:
        return Jt(ke), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Jf(e, t) {
    switch (rc(t), t.tag) {
      case 3:
        Jt(ke), De();
        break;
      case 26:
      case 27:
      case 5:
        Vn(t);
        break;
      case 4:
        De();
        break;
      case 31:
        t.memoizedState !== null && pt(t);
        break;
      case 13:
        pt(t);
        break;
      case 19:
        w(Ue);
        break;
      case 10:
        Jt(t.type);
        break;
      case 22:
      case 23:
        pt(t), Nc(), e !== null && w(Zl);
        break;
      case 24:
        Jt(ke);
    }
  }
  function bn(e, t) {
    try {
      var l = t.updateQueue, a = l !== null ? l.lastEffect : null;
      if (a !== null) {
        var n = a.next;
        l = n;
        do {
          if ((l.tag & e) === e) {
            a = void 0;
            var u = l.create, r = l.inst;
            a = u(), r.destroy = a;
          }
          l = l.next;
        } while (l !== n);
      }
    } catch (d) {
      xe(t, t.return, d);
    }
  }
  function xl(e, t, l) {
    try {
      var a = t.updateQueue, n = a !== null ? a.lastEffect : null;
      if (n !== null) {
        var u = n.next;
        a = u;
        do {
          if ((a.tag & e) === e) {
            var r = a.inst, d = r.destroy;
            if (d !== void 0) {
              r.destroy = void 0, n = t;
              var h = l, j = d;
              try {
                j();
              } catch (z) {
                xe(
                  n,
                  h,
                  z
                );
              }
            }
          }
          a = a.next;
        } while (a !== u);
      }
    } catch (z) {
      xe(t, t.return, z);
    }
  }
  function $f(e) {
    var t = e.updateQueue;
    if (t !== null) {
      var l = e.stateNode;
      try {
        Ho(t, l);
      } catch (a) {
        xe(e, e.return, a);
      }
    }
  }
  function Ff(e, t, l) {
    l.props = Wl(
      e.type,
      e.memoizedProps
    ), l.state = e.memoizedState;
    try {
      l.componentWillUnmount();
    } catch (a) {
      xe(e, t, a);
    }
  }
  function Sn(e, t) {
    try {
      var l = e.ref;
      if (l !== null) {
        switch (e.tag) {
          case 26:
          case 27:
          case 5:
            var a = e.stateNode;
            break;
          case 30:
            a = e.stateNode;
            break;
          default:
            a = e.stateNode;
        }
        typeof l == "function" ? e.refCleanup = l(a) : l.current = a;
      }
    } catch (n) {
      xe(e, t, n);
    }
  }
  function Ht(e, t) {
    var l = e.ref, a = e.refCleanup;
    if (l !== null)
      if (typeof a == "function")
        try {
          a();
        } catch (n) {
          xe(e, t, n);
        } finally {
          e.refCleanup = null, e = e.alternate, e != null && (e.refCleanup = null);
        }
      else if (typeof l == "function")
        try {
          l(null);
        } catch (n) {
          xe(e, t, n);
        }
      else l.current = null;
  }
  function Wf(e) {
    var t = e.type, l = e.memoizedProps, a = e.stateNode;
    try {
      e: switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          l.autoFocus && a.focus();
          break e;
        case "img":
          l.src ? a.src = l.src : l.srcSet && (a.srcset = l.srcSet);
      }
    } catch (n) {
      xe(e, e.return, n);
    }
  }
  function tr(e, t, l) {
    try {
      var a = e.stateNode;
      m1(a, e.type, l, t), a[lt] = t;
    } catch (n) {
      xe(e, e.return, n);
    }
  }
  function If(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && _l(e.type) || e.tag === 4;
  }
  function lr(e) {
    e: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || If(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.tag === 27 && _l(e.type) || e.flags & 2 || e.child === null || e.tag === 4) continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function ar(e, t, l) {
    var a = e.tag;
    if (a === 5 || a === 6)
      e = e.stateNode, t ? (l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l).insertBefore(e, t) : (t = l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l, t.appendChild(e), l = l._reactRootContainer, l != null || t.onclick !== null || (t.onclick = Qt));
    else if (a !== 4 && (a === 27 && _l(e.type) && (l = e.stateNode, t = null), e = e.child, e !== null))
      for (ar(e, t, l), e = e.sibling; e !== null; )
        ar(e, t, l), e = e.sibling;
  }
  function Ru(e, t, l) {
    var a = e.tag;
    if (a === 5 || a === 6)
      e = e.stateNode, t ? l.insertBefore(e, t) : l.appendChild(e);
    else if (a !== 4 && (a === 27 && _l(e.type) && (l = e.stateNode), e = e.child, e !== null))
      for (Ru(e, t, l), e = e.sibling; e !== null; )
        Ru(e, t, l), e = e.sibling;
  }
  function Pf(e) {
    var t = e.stateNode, l = e.memoizedProps;
    try {
      for (var a = e.type, n = t.attributes; n.length; )
        t.removeAttributeNode(n[0]);
      Je(t, a, l), t[Xe] = e, t[lt] = l;
    } catch (u) {
      xe(e, e.return, u);
    }
  }
  var Pt = !1, Le = !1, nr = !1, ed = typeof WeakSet == "function" ? WeakSet : Set, Ge = null;
  function Zh(e, t) {
    if (e = e.containerInfo, Er = li, e = oo(e), Wi(e)) {
      if ("selectionStart" in e)
        var l = {
          start: e.selectionStart,
          end: e.selectionEnd
        };
      else
        e: {
          l = (l = e.ownerDocument) && l.defaultView || window;
          var a = l.getSelection && l.getSelection();
          if (a && a.rangeCount !== 0) {
            l = a.anchorNode;
            var n = a.anchorOffset, u = a.focusNode;
            a = a.focusOffset;
            try {
              l.nodeType, u.nodeType;
            } catch {
              l = null;
              break e;
            }
            var r = 0, d = -1, h = -1, j = 0, z = 0, O = e, N = null;
            t: for (; ; ) {
              for (var E; O !== l || n !== 0 && O.nodeType !== 3 || (d = r + n), O !== u || a !== 0 && O.nodeType !== 3 || (h = r + a), O.nodeType === 3 && (r += O.nodeValue.length), (E = O.firstChild) !== null; )
                N = O, O = E;
              for (; ; ) {
                if (O === e) break t;
                if (N === l && ++j === n && (d = r), N === u && ++z === a && (h = r), (E = O.nextSibling) !== null) break;
                O = N, N = O.parentNode;
              }
              O = E;
            }
            l = d === -1 || h === -1 ? null : { start: d, end: h };
          } else l = null;
        }
      l = l || { start: 0, end: 0 };
    } else l = null;
    for (_r = { focusedElem: e, selectionRange: l }, li = !1, Ge = t; Ge !== null; )
      if (t = Ge, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null)
        e.return = t, Ge = e;
      else
        for (; Ge !== null; ) {
          switch (t = Ge, u = t.alternate, e = t.flags, t.tag) {
            case 0:
              if ((e & 4) !== 0 && (e = t.updateQueue, e = e !== null ? e.events : null, e !== null))
                for (l = 0; l < e.length; l++)
                  n = e[l], n.ref.impl = n.nextImpl;
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((e & 1024) !== 0 && u !== null) {
                e = void 0, l = t, n = u.memoizedProps, u = u.memoizedState, a = l.stateNode;
                try {
                  var Y = Wl(
                    l.type,
                    n
                  );
                  e = a.getSnapshotBeforeUpdate(
                    Y,
                    u
                  ), a.__reactInternalSnapshotBeforeUpdate = e;
                } catch ($) {
                  xe(
                    l,
                    l.return,
                    $
                  );
                }
              }
              break;
            case 3:
              if ((e & 1024) !== 0) {
                if (e = t.stateNode.containerInfo, l = e.nodeType, l === 9)
                  Ar(e);
                else if (l === 1)
                  switch (e.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      Ar(e);
                      break;
                    default:
                      e.textContent = "";
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((e & 1024) !== 0) throw Error(s(163));
          }
          if (e = t.sibling, e !== null) {
            e.return = t.return, Ge = e;
            break;
          }
          Ge = t.return;
        }
  }
  function td(e, t, l) {
    var a = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        tl(e, l), a & 4 && bn(5, l);
        break;
      case 1:
        if (tl(e, l), a & 4)
          if (e = l.stateNode, t === null)
            try {
              e.componentDidMount();
            } catch (r) {
              xe(l, l.return, r);
            }
          else {
            var n = Wl(
              l.type,
              t.memoizedProps
            );
            t = t.memoizedState;
            try {
              e.componentDidUpdate(
                n,
                t,
                e.__reactInternalSnapshotBeforeUpdate
              );
            } catch (r) {
              xe(
                l,
                l.return,
                r
              );
            }
          }
        a & 64 && $f(l), a & 512 && Sn(l, l.return);
        break;
      case 3:
        if (tl(e, l), a & 64 && (e = l.updateQueue, e !== null)) {
          if (t = null, l.child !== null)
            switch (l.child.tag) {
              case 27:
              case 5:
                t = l.child.stateNode;
                break;
              case 1:
                t = l.child.stateNode;
            }
          try {
            Ho(e, t);
          } catch (r) {
            xe(l, l.return, r);
          }
        }
        break;
      case 27:
        t === null && a & 4 && Pf(l);
      case 26:
      case 5:
        tl(e, l), t === null && a & 4 && Wf(l), a & 512 && Sn(l, l.return);
        break;
      case 12:
        tl(e, l);
        break;
      case 31:
        tl(e, l), a & 4 && nd(e, l);
        break;
      case 13:
        tl(e, l), a & 4 && ud(e, l), a & 64 && (e = l.memoizedState, e !== null && (e = e.dehydrated, e !== null && (l = t1.bind(
          null,
          l
        ), S1(e, l))));
        break;
      case 22:
        if (a = l.memoizedState !== null || Pt, !a) {
          t = t !== null && t.memoizedState !== null || Le, n = Pt;
          var u = Le;
          Pt = a, (Le = t) && !u ? ll(
            e,
            l,
            (l.subtreeFlags & 8772) !== 0
          ) : tl(e, l), Pt = n, Le = u;
        }
        break;
      case 30:
        break;
      default:
        tl(e, l);
    }
  }
  function ld(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, ld(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && Ui(t)), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  var Me = null, nt = !1;
  function el(e, t, l) {
    for (l = l.child; l !== null; )
      ad(e, t, l), l = l.sibling;
  }
  function ad(e, t, l) {
    if (ot && typeof ot.onCommitFiberUnmount == "function")
      try {
        ot.onCommitFiberUnmount(Xa, l);
      } catch {
      }
    switch (l.tag) {
      case 26:
        Le || Ht(l, t), el(
          e,
          t,
          l
        ), l.memoizedState ? l.memoizedState.count-- : l.stateNode && (l = l.stateNode, l.parentNode.removeChild(l));
        break;
      case 27:
        Le || Ht(l, t);
        var a = Me, n = nt;
        _l(l.type) && (Me = l.stateNode, nt = !1), el(
          e,
          t,
          l
        ), Mn(l.stateNode), Me = a, nt = n;
        break;
      case 5:
        Le || Ht(l, t);
      case 6:
        if (a = Me, n = nt, Me = null, el(
          e,
          t,
          l
        ), Me = a, nt = n, Me !== null)
          if (nt)
            try {
              (Me.nodeType === 9 ? Me.body : Me.nodeName === "HTML" ? Me.ownerDocument.body : Me).removeChild(l.stateNode);
            } catch (u) {
              xe(
                l,
                t,
                u
              );
            }
          else
            try {
              Me.removeChild(l.stateNode);
            } catch (u) {
              xe(
                l,
                t,
                u
              );
            }
        break;
      case 18:
        Me !== null && (nt ? (e = Me, $d(
          e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e,
          l.stateNode
        ), La(e)) : $d(Me, l.stateNode));
        break;
      case 4:
        a = Me, n = nt, Me = l.stateNode.containerInfo, nt = !0, el(
          e,
          t,
          l
        ), Me = a, nt = n;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        xl(2, l, t), Le || xl(4, l, t), el(
          e,
          t,
          l
        );
        break;
      case 1:
        Le || (Ht(l, t), a = l.stateNode, typeof a.componentWillUnmount == "function" && Ff(
          l,
          t,
          a
        )), el(
          e,
          t,
          l
        );
        break;
      case 21:
        el(
          e,
          t,
          l
        );
        break;
      case 22:
        Le = (a = Le) || l.memoizedState !== null, el(
          e,
          t,
          l
        ), Le = a;
        break;
      default:
        el(
          e,
          t,
          l
        );
    }
  }
  function nd(e, t) {
    if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null))) {
      e = e.dehydrated;
      try {
        La(e);
      } catch (l) {
        xe(t, t.return, l);
      }
    }
  }
  function ud(e, t) {
    if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null))))
      try {
        La(e);
      } catch (l) {
        xe(t, t.return, l);
      }
  }
  function Kh(e) {
    switch (e.tag) {
      case 31:
      case 13:
      case 19:
        var t = e.stateNode;
        return t === null && (t = e.stateNode = new ed()), t;
      case 22:
        return e = e.stateNode, t = e._retryCache, t === null && (t = e._retryCache = new ed()), t;
      default:
        throw Error(s(435, e.tag));
    }
  }
  function ku(e, t) {
    var l = Kh(e);
    t.forEach(function(a) {
      if (!l.has(a)) {
        l.add(a);
        var n = l1.bind(null, e, a);
        a.then(n, n);
      }
    });
  }
  function ut(e, t) {
    var l = t.deletions;
    if (l !== null)
      for (var a = 0; a < l.length; a++) {
        var n = l[a], u = e, r = t, d = r;
        e: for (; d !== null; ) {
          switch (d.tag) {
            case 27:
              if (_l(d.type)) {
                Me = d.stateNode, nt = !1;
                break e;
              }
              break;
            case 5:
              Me = d.stateNode, nt = !1;
              break e;
            case 3:
            case 4:
              Me = d.stateNode.containerInfo, nt = !0;
              break e;
          }
          d = d.return;
        }
        if (Me === null) throw Error(s(160));
        ad(u, r, n), Me = null, nt = !1, u = n.alternate, u !== null && (u.return = null), n.return = null;
      }
    if (t.subtreeFlags & 13886)
      for (t = t.child; t !== null; )
        id(t, e), t = t.sibling;
  }
  var Ut = null;
  function id(e, t) {
    var l = e.alternate, a = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        ut(t, e), it(e), a & 4 && (xl(3, e, e.return), bn(3, e), xl(5, e, e.return));
        break;
      case 1:
        ut(t, e), it(e), a & 512 && (Le || l === null || Ht(l, l.return)), a & 64 && Pt && (e = e.updateQueue, e !== null && (a = e.callbacks, a !== null && (l = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = l === null ? a : l.concat(a))));
        break;
      case 26:
        var n = Ut;
        if (ut(t, e), it(e), a & 512 && (Le || l === null || Ht(l, l.return)), a & 4) {
          var u = l !== null ? l.memoizedState : null;
          if (a = e.memoizedState, l === null)
            if (a === null)
              if (e.stateNode === null) {
                e: {
                  a = e.type, l = e.memoizedProps, n = n.ownerDocument || n;
                  t: switch (a) {
                    case "title":
                      u = n.getElementsByTagName("title")[0], (!u || u[Ka] || u[Xe] || u.namespaceURI === "http://www.w3.org/2000/svg" || u.hasAttribute("itemprop")) && (u = n.createElement(a), n.head.insertBefore(
                        u,
                        n.querySelector("head > title")
                      )), Je(u, a, l), u[Xe] = e, Ye(u), a = u;
                      break e;
                    case "link":
                      var r = i0(
                        "link",
                        "href",
                        n
                      ).get(a + (l.href || ""));
                      if (r) {
                        for (var d = 0; d < r.length; d++)
                          if (u = r[d], u.getAttribute("href") === (l.href == null || l.href === "" ? null : l.href) && u.getAttribute("rel") === (l.rel == null ? null : l.rel) && u.getAttribute("title") === (l.title == null ? null : l.title) && u.getAttribute("crossorigin") === (l.crossOrigin == null ? null : l.crossOrigin)) {
                            r.splice(d, 1);
                            break t;
                          }
                      }
                      u = n.createElement(a), Je(u, a, l), n.head.appendChild(u);
                      break;
                    case "meta":
                      if (r = i0(
                        "meta",
                        "content",
                        n
                      ).get(a + (l.content || ""))) {
                        for (d = 0; d < r.length; d++)
                          if (u = r[d], u.getAttribute("content") === (l.content == null ? null : "" + l.content) && u.getAttribute("name") === (l.name == null ? null : l.name) && u.getAttribute("property") === (l.property == null ? null : l.property) && u.getAttribute("http-equiv") === (l.httpEquiv == null ? null : l.httpEquiv) && u.getAttribute("charset") === (l.charSet == null ? null : l.charSet)) {
                            r.splice(d, 1);
                            break t;
                          }
                      }
                      u = n.createElement(a), Je(u, a, l), n.head.appendChild(u);
                      break;
                    default:
                      throw Error(s(468, a));
                  }
                  u[Xe] = e, Ye(u), a = u;
                }
                e.stateNode = a;
              } else
                c0(
                  n,
                  e.type,
                  e.stateNode
                );
            else
              e.stateNode = u0(
                n,
                a,
                e.memoizedProps
              );
          else
            u !== a ? (u === null ? l.stateNode !== null && (l = l.stateNode, l.parentNode.removeChild(l)) : u.count--, a === null ? c0(
              n,
              e.type,
              e.stateNode
            ) : u0(
              n,
              a,
              e.memoizedProps
            )) : a === null && e.stateNode !== null && tr(
              e,
              e.memoizedProps,
              l.memoizedProps
            );
        }
        break;
      case 27:
        ut(t, e), it(e), a & 512 && (Le || l === null || Ht(l, l.return)), l !== null && a & 4 && tr(
          e,
          e.memoizedProps,
          l.memoizedProps
        );
        break;
      case 5:
        if (ut(t, e), it(e), a & 512 && (Le || l === null || Ht(l, l.return)), e.flags & 32) {
          n = e.stateNode;
          try {
            ra(n, "");
          } catch (Y) {
            xe(e, e.return, Y);
          }
        }
        a & 4 && e.stateNode != null && (n = e.memoizedProps, tr(
          e,
          n,
          l !== null ? l.memoizedProps : n
        )), a & 1024 && (nr = !0);
        break;
      case 6:
        if (ut(t, e), it(e), a & 4) {
          if (e.stateNode === null)
            throw Error(s(162));
          a = e.memoizedProps, l = e.stateNode;
          try {
            l.nodeValue = a;
          } catch (Y) {
            xe(e, e.return, Y);
          }
        }
        break;
      case 3:
        if (Iu = null, n = Ut, Ut = Fu(t.containerInfo), ut(t, e), Ut = n, it(e), a & 4 && l !== null && l.memoizedState.isDehydrated)
          try {
            La(t.containerInfo);
          } catch (Y) {
            xe(e, e.return, Y);
          }
        nr && (nr = !1, cd(e));
        break;
      case 4:
        a = Ut, Ut = Fu(
          e.stateNode.containerInfo
        ), ut(t, e), it(e), Ut = a;
        break;
      case 12:
        ut(t, e), it(e);
        break;
      case 31:
        ut(t, e), it(e), a & 4 && (a = e.updateQueue, a !== null && (e.updateQueue = null, ku(e, a)));
        break;
      case 13:
        ut(t, e), it(e), e.child.flags & 8192 && e.memoizedState !== null != (l !== null && l.memoizedState !== null) && (Hu = st()), a & 4 && (a = e.updateQueue, a !== null && (e.updateQueue = null, ku(e, a)));
        break;
      case 22:
        n = e.memoizedState !== null;
        var h = l !== null && l.memoizedState !== null, j = Pt, z = Le;
        if (Pt = j || n, Le = z || h, ut(t, e), Le = z, Pt = j, it(e), a & 8192)
          e: for (t = e.stateNode, t._visibility = n ? t._visibility & -2 : t._visibility | 1, n && (l === null || h || Pt || Le || Il(e)), l = null, t = e; ; ) {
            if (t.tag === 5 || t.tag === 26) {
              if (l === null) {
                h = l = t;
                try {
                  if (u = h.stateNode, n)
                    r = u.style, typeof r.setProperty == "function" ? r.setProperty("display", "none", "important") : r.display = "none";
                  else {
                    d = h.stateNode;
                    var O = h.memoizedProps.style, N = O != null && O.hasOwnProperty("display") ? O.display : null;
                    d.style.display = N == null || typeof N == "boolean" ? "" : ("" + N).trim();
                  }
                } catch (Y) {
                  xe(h, h.return, Y);
                }
              }
            } else if (t.tag === 6) {
              if (l === null) {
                h = t;
                try {
                  h.stateNode.nodeValue = n ? "" : h.memoizedProps;
                } catch (Y) {
                  xe(h, h.return, Y);
                }
              }
            } else if (t.tag === 18) {
              if (l === null) {
                h = t;
                try {
                  var E = h.stateNode;
                  n ? Fd(E, !0) : Fd(h.stateNode, !1);
                } catch (Y) {
                  xe(h, h.return, Y);
                }
              }
            } else if ((t.tag !== 22 && t.tag !== 23 || t.memoizedState === null || t === e) && t.child !== null) {
              t.child.return = t, t = t.child;
              continue;
            }
            if (t === e) break e;
            for (; t.sibling === null; ) {
              if (t.return === null || t.return === e) break e;
              l === t && (l = null), t = t.return;
            }
            l === t && (l = null), t.sibling.return = t.return, t = t.sibling;
          }
        a & 4 && (a = e.updateQueue, a !== null && (l = a.retryQueue, l !== null && (a.retryQueue = null, ku(e, l))));
        break;
      case 19:
        ut(t, e), it(e), a & 4 && (a = e.updateQueue, a !== null && (e.updateQueue = null, ku(e, a)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        ut(t, e), it(e);
    }
  }
  function it(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        for (var l, a = e.return; a !== null; ) {
          if (If(a)) {
            l = a;
            break;
          }
          a = a.return;
        }
        if (l == null) throw Error(s(160));
        switch (l.tag) {
          case 27:
            var n = l.stateNode, u = lr(e);
            Ru(e, u, n);
            break;
          case 5:
            var r = l.stateNode;
            l.flags & 32 && (ra(r, ""), l.flags &= -33);
            var d = lr(e);
            Ru(e, d, r);
            break;
          case 3:
          case 4:
            var h = l.stateNode.containerInfo, j = lr(e);
            ar(
              e,
              j,
              h
            );
            break;
          default:
            throw Error(s(161));
        }
      } catch (z) {
        xe(e, e.return, z);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function cd(e) {
    if (e.subtreeFlags & 1024)
      for (e = e.child; e !== null; ) {
        var t = e;
        cd(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), e = e.sibling;
      }
  }
  function tl(e, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null; )
        td(e, t.alternate, t), t = t.sibling;
  }
  function Il(e) {
    for (e = e.child; e !== null; ) {
      var t = e;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          xl(4, t, t.return), Il(t);
          break;
        case 1:
          Ht(t, t.return);
          var l = t.stateNode;
          typeof l.componentWillUnmount == "function" && Ff(
            t,
            t.return,
            l
          ), Il(t);
          break;
        case 27:
          Mn(t.stateNode);
        case 26:
        case 5:
          Ht(t, t.return), Il(t);
          break;
        case 22:
          t.memoizedState === null && Il(t);
          break;
        case 30:
          Il(t);
          break;
        default:
          Il(t);
      }
      e = e.sibling;
    }
  }
  function ll(e, t, l) {
    for (l = l && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
      var a = t.alternate, n = e, u = t, r = u.flags;
      switch (u.tag) {
        case 0:
        case 11:
        case 15:
          ll(
            n,
            u,
            l
          ), bn(4, u);
          break;
        case 1:
          if (ll(
            n,
            u,
            l
          ), a = u, n = a.stateNode, typeof n.componentDidMount == "function")
            try {
              n.componentDidMount();
            } catch (j) {
              xe(a, a.return, j);
            }
          if (a = u, n = a.updateQueue, n !== null) {
            var d = a.stateNode;
            try {
              var h = n.shared.hiddenCallbacks;
              if (h !== null)
                for (n.shared.hiddenCallbacks = null, n = 0; n < h.length; n++)
                  Bo(h[n], d);
            } catch (j) {
              xe(a, a.return, j);
            }
          }
          l && r & 64 && $f(u), Sn(u, u.return);
          break;
        case 27:
          Pf(u);
        case 26:
        case 5:
          ll(
            n,
            u,
            l
          ), l && a === null && r & 4 && Wf(u), Sn(u, u.return);
          break;
        case 12:
          ll(
            n,
            u,
            l
          );
          break;
        case 31:
          ll(
            n,
            u,
            l
          ), l && r & 4 && nd(n, u);
          break;
        case 13:
          ll(
            n,
            u,
            l
          ), l && r & 4 && ud(n, u);
          break;
        case 22:
          u.memoizedState === null && ll(
            n,
            u,
            l
          ), Sn(u, u.return);
          break;
        case 30:
          break;
        default:
          ll(
            n,
            u,
            l
          );
      }
      t = t.sibling;
    }
  }
  function ur(e, t) {
    var l = null;
    e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (l = e.memoizedState.cachePool.pool), e = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), e !== l && (e != null && e.refCount++, l != null && cn(l));
  }
  function ir(e, t) {
    e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && cn(e));
  }
  function Rt(e, t, l, a) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; )
        rd(
          e,
          t,
          l,
          a
        ), t = t.sibling;
  }
  function rd(e, t, l, a) {
    var n = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        Rt(
          e,
          t,
          l,
          a
        ), n & 2048 && bn(9, t);
        break;
      case 1:
        Rt(
          e,
          t,
          l,
          a
        );
        break;
      case 3:
        Rt(
          e,
          t,
          l,
          a
        ), n & 2048 && (e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && cn(e)));
        break;
      case 12:
        if (n & 2048) {
          Rt(
            e,
            t,
            l,
            a
          ), e = t.stateNode;
          try {
            var u = t.memoizedProps, r = u.id, d = u.onPostCommit;
            typeof d == "function" && d(
              r,
              t.alternate === null ? "mount" : "update",
              e.passiveEffectDuration,
              -0
            );
          } catch (h) {
            xe(t, t.return, h);
          }
        } else
          Rt(
            e,
            t,
            l,
            a
          );
        break;
      case 31:
        Rt(
          e,
          t,
          l,
          a
        );
        break;
      case 13:
        Rt(
          e,
          t,
          l,
          a
        );
        break;
      case 23:
        break;
      case 22:
        u = t.stateNode, r = t.alternate, t.memoizedState !== null ? u._visibility & 2 ? Rt(
          e,
          t,
          l,
          a
        ) : jn(e, t) : u._visibility & 2 ? Rt(
          e,
          t,
          l,
          a
        ) : (u._visibility |= 2, Ca(
          e,
          t,
          l,
          a,
          (t.subtreeFlags & 10256) !== 0 || !1
        )), n & 2048 && ur(r, t);
        break;
      case 24:
        Rt(
          e,
          t,
          l,
          a
        ), n & 2048 && ir(t.alternate, t);
        break;
      default:
        Rt(
          e,
          t,
          l,
          a
        );
    }
  }
  function Ca(e, t, l, a, n) {
    for (n = n && ((t.subtreeFlags & 10256) !== 0 || !1), t = t.child; t !== null; ) {
      var u = e, r = t, d = l, h = a, j = r.flags;
      switch (r.tag) {
        case 0:
        case 11:
        case 15:
          Ca(
            u,
            r,
            d,
            h,
            n
          ), bn(8, r);
          break;
        case 23:
          break;
        case 22:
          var z = r.stateNode;
          r.memoizedState !== null ? z._visibility & 2 ? Ca(
            u,
            r,
            d,
            h,
            n
          ) : jn(
            u,
            r
          ) : (z._visibility |= 2, Ca(
            u,
            r,
            d,
            h,
            n
          )), n && j & 2048 && ur(
            r.alternate,
            r
          );
          break;
        case 24:
          Ca(
            u,
            r,
            d,
            h,
            n
          ), n && j & 2048 && ir(r.alternate, r);
          break;
        default:
          Ca(
            u,
            r,
            d,
            h,
            n
          );
      }
      t = t.sibling;
    }
  }
  function jn(e, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) {
        var l = e, a = t, n = a.flags;
        switch (a.tag) {
          case 22:
            jn(l, a), n & 2048 && ur(
              a.alternate,
              a
            );
            break;
          case 24:
            jn(l, a), n & 2048 && ir(a.alternate, a);
            break;
          default:
            jn(l, a);
        }
        t = t.sibling;
      }
  }
  var Nn = 8192;
  function Aa(e, t, l) {
    if (e.subtreeFlags & Nn)
      for (e = e.child; e !== null; )
        sd(
          e,
          t,
          l
        ), e = e.sibling;
  }
  function sd(e, t, l) {
    switch (e.tag) {
      case 26:
        Aa(
          e,
          t,
          l
        ), e.flags & Nn && e.memoizedState !== null && D1(
          l,
          Ut,
          e.memoizedState,
          e.memoizedProps
        );
        break;
      case 5:
        Aa(
          e,
          t,
          l
        );
        break;
      case 3:
      case 4:
        var a = Ut;
        Ut = Fu(e.stateNode.containerInfo), Aa(
          e,
          t,
          l
        ), Ut = a;
        break;
      case 22:
        e.memoizedState === null && (a = e.alternate, a !== null && a.memoizedState !== null ? (a = Nn, Nn = 16777216, Aa(
          e,
          t,
          l
        ), Nn = a) : Aa(
          e,
          t,
          l
        ));
        break;
      default:
        Aa(
          e,
          t,
          l
        );
    }
  }
  function od(e) {
    var t = e.alternate;
    if (t !== null && (e = t.child, e !== null)) {
      t.child = null;
      do
        t = e.sibling, e.sibling = null, e = t;
      while (e !== null);
    }
  }
  function Tn(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var l = 0; l < t.length; l++) {
          var a = t[l];
          Ge = a, dd(
            a,
            e
          );
        }
      od(e);
    }
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; )
        fd(e), e = e.sibling;
  }
  function fd(e) {
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        Tn(e), e.flags & 2048 && xl(9, e, e.return);
        break;
      case 3:
        Tn(e);
        break;
      case 12:
        Tn(e);
        break;
      case 22:
        var t = e.stateNode;
        e.memoizedState !== null && t._visibility & 2 && (e.return === null || e.return.tag !== 13) ? (t._visibility &= -3, Bu(e)) : Tn(e);
        break;
      default:
        Tn(e);
    }
  }
  function Bu(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var l = 0; l < t.length; l++) {
          var a = t[l];
          Ge = a, dd(
            a,
            e
          );
        }
      od(e);
    }
    for (e = e.child; e !== null; ) {
      switch (t = e, t.tag) {
        case 0:
        case 11:
        case 15:
          xl(8, t, t.return), Bu(t);
          break;
        case 22:
          l = t.stateNode, l._visibility & 2 && (l._visibility &= -3, Bu(t));
          break;
        default:
          Bu(t);
      }
      e = e.sibling;
    }
  }
  function dd(e, t) {
    for (; Ge !== null; ) {
      var l = Ge;
      switch (l.tag) {
        case 0:
        case 11:
        case 15:
          xl(8, l, t);
          break;
        case 23:
        case 22:
          if (l.memoizedState !== null && l.memoizedState.cachePool !== null) {
            var a = l.memoizedState.cachePool.pool;
            a != null && a.refCount++;
          }
          break;
        case 24:
          cn(l.memoizedState.cache);
      }
      if (a = l.child, a !== null) a.return = l, Ge = a;
      else
        e: for (l = e; Ge !== null; ) {
          a = Ge;
          var n = a.sibling, u = a.return;
          if (ld(a), a === l) {
            Ge = null;
            break e;
          }
          if (n !== null) {
            n.return = u, Ge = n;
            break e;
          }
          Ge = u;
        }
    }
  }
  var Jh = {
    getCacheForType: function(e) {
      var t = Ze(ke), l = t.data.get(e);
      return l === void 0 && (l = e(), t.data.set(e, l)), l;
    },
    cacheSignal: function() {
      return Ze(ke).controller.signal;
    }
  }, $h = typeof WeakMap == "function" ? WeakMap : Map, pe = 0, Ee = null, ce = null, se = 0, ve = 0, gt = null, bl = !1, Ma = !1, cr = !1, al = 0, we = 0, Sl = 0, Pl = 0, rr = 0, yt = 0, Oa = 0, En = null, ct = null, sr = !1, Hu = 0, md = 0, Lu = 1 / 0, qu = null, jl = null, qe = 0, Nl = null, wa = null, nl = 0, or = 0, fr = null, hd = null, _n = 0, dr = null;
  function vt() {
    return (pe & 2) !== 0 && se !== 0 ? se & -se : C.T !== null ? vr() : Cs();
  }
  function pd() {
    if (yt === 0)
      if ((se & 536870912) === 0 || fe) {
        var e = Jn;
        Jn <<= 1, (Jn & 3932160) === 0 && (Jn = 262144), yt = e;
      } else yt = 536870912;
    return e = ht.current, e !== null && (e.flags |= 32), yt;
  }
  function rt(e, t, l) {
    (e === Ee && (ve === 2 || ve === 9) || e.cancelPendingCommit !== null) && (Da(e, 0), Tl(
      e,
      se,
      yt,
      !1
    )), Za(e, l), ((pe & 2) === 0 || e !== Ee) && (e === Ee && ((pe & 2) === 0 && (Pl |= l), we === 4 && Tl(
      e,
      se,
      yt,
      !1
    )), Lt(e));
  }
  function gd(e, t, l) {
    if ((pe & 6) !== 0) throw Error(s(327));
    var a = !l && (t & 127) === 0 && (t & e.expiredLanes) === 0 || Va(e, t), n = a ? Ih(e, t) : hr(e, t, !0), u = a;
    do {
      if (n === 0) {
        Ma && !a && Tl(e, t, 0, !1);
        break;
      } else {
        if (l = e.current.alternate, u && !Fh(l)) {
          n = hr(e, t, !1), u = !1;
          continue;
        }
        if (n === 2) {
          if (u = t, e.errorRecoveryDisabledLanes & u)
            var r = 0;
          else
            r = e.pendingLanes & -536870913, r = r !== 0 ? r : r & 536870912 ? 536870912 : 0;
          if (r !== 0) {
            t = r;
            e: {
              var d = e;
              n = En;
              var h = d.current.memoizedState.isDehydrated;
              if (h && (Da(d, r).flags |= 256), r = hr(
                d,
                r,
                !1
              ), r !== 2) {
                if (cr && !h) {
                  d.errorRecoveryDisabledLanes |= u, Pl |= u, n = 4;
                  break e;
                }
                u = ct, ct = n, u !== null && (ct === null ? ct = u : ct.push.apply(
                  ct,
                  u
                ));
              }
              n = r;
            }
            if (u = !1, n !== 2) continue;
          }
        }
        if (n === 1) {
          Da(e, 0), Tl(e, t, 0, !0);
          break;
        }
        e: {
          switch (a = e, u = n, u) {
            case 0:
            case 1:
              throw Error(s(345));
            case 4:
              if ((t & 4194048) !== t) break;
            case 6:
              Tl(
                a,
                t,
                yt,
                !bl
              );
              break e;
            case 2:
              ct = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(s(329));
          }
          if ((t & 62914560) === t && (n = Hu + 300 - st(), 10 < n)) {
            if (Tl(
              a,
              t,
              yt,
              !bl
            ), Fn(a, 0, !0) !== 0) break e;
            nl = t, a.timeoutHandle = Kd(
              yd.bind(
                null,
                a,
                l,
                ct,
                qu,
                sr,
                t,
                yt,
                Pl,
                Oa,
                bl,
                u,
                "Throttled",
                -0,
                0
              ),
              n
            );
            break e;
          }
          yd(
            a,
            l,
            ct,
            qu,
            sr,
            t,
            yt,
            Pl,
            Oa,
            bl,
            u,
            null,
            -0,
            0
          );
        }
      }
      break;
    } while (!0);
    Lt(e);
  }
  function yd(e, t, l, a, n, u, r, d, h, j, z, O, N, E) {
    if (e.timeoutHandle = -1, O = t.subtreeFlags, O & 8192 || (O & 16785408) === 16785408) {
      O = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: Qt
      }, sd(
        t,
        u,
        O
      );
      var Y = (u & 62914560) === u ? Hu - st() : (u & 4194048) === u ? md - st() : 0;
      if (Y = U1(
        O,
        Y
      ), Y !== null) {
        nl = u, e.cancelPendingCommit = Y(
          Ed.bind(
            null,
            e,
            t,
            u,
            l,
            a,
            n,
            r,
            d,
            h,
            z,
            O,
            null,
            N,
            E
          )
        ), Tl(e, u, r, !j);
        return;
      }
    }
    Ed(
      e,
      t,
      u,
      l,
      a,
      n,
      r,
      d,
      h
    );
  }
  function Fh(e) {
    for (var t = e; ; ) {
      var l = t.tag;
      if ((l === 0 || l === 11 || l === 15) && t.flags & 16384 && (l = t.updateQueue, l !== null && (l = l.stores, l !== null)))
        for (var a = 0; a < l.length; a++) {
          var n = l[a], u = n.getSnapshot;
          n = n.value;
          try {
            if (!dt(u(), n)) return !1;
          } catch {
            return !1;
          }
        }
      if (l = t.child, t.subtreeFlags & 16384 && l !== null)
        l.return = t, t = l;
      else {
        if (t === e) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return !0;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
    }
    return !0;
  }
  function Tl(e, t, l, a) {
    t &= ~rr, t &= ~Pl, e.suspendedLanes |= t, e.pingedLanes &= ~t, a && (e.warmLanes |= t), a = e.expirationTimes;
    for (var n = t; 0 < n; ) {
      var u = 31 - ft(n), r = 1 << u;
      a[u] = -1, n &= ~r;
    }
    l !== 0 && Es(e, l, t);
  }
  function Yu() {
    return (pe & 6) === 0 ? (zn(0), !1) : !0;
  }
  function mr() {
    if (ce !== null) {
      if (ve === 0)
        var e = ce.return;
      else
        e = ce, Kt = Xl = null, Ac(e), Na = null, sn = 0, e = ce;
      for (; e !== null; )
        Jf(e.alternate, e), e = e.return;
      ce = null;
    }
  }
  function Da(e, t) {
    var l = e.timeoutHandle;
    l !== -1 && (e.timeoutHandle = -1, g1(l)), l = e.cancelPendingCommit, l !== null && (e.cancelPendingCommit = null, l()), nl = 0, mr(), Ee = e, ce = l = Vt(e.current, null), se = t, ve = 0, gt = null, bl = !1, Ma = Va(e, t), cr = !1, Oa = yt = rr = Pl = Sl = we = 0, ct = En = null, sr = !1, (t & 8) !== 0 && (t |= t & 32);
    var a = e.entangledLanes;
    if (a !== 0)
      for (e = e.entanglements, a &= t; 0 < a; ) {
        var n = 31 - ft(a), u = 1 << n;
        t |= e[n], a &= ~u;
      }
    return al = t, ru(), l;
  }
  function vd(e, t) {
    ae = null, C.H = yn, t === ja || t === gu ? (t = Do(), ve = 3) : t === yc ? (t = Do(), ve = 4) : ve = t === Vc ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1, gt = t, ce === null && (we = 1, Mu(
      e,
      Tt(t, e.current)
    ));
  }
  function xd() {
    var e = ht.current;
    return e === null ? !0 : (se & 4194048) === se ? Ct === null : (se & 62914560) === se || (se & 536870912) !== 0 ? e === Ct : !1;
  }
  function bd() {
    var e = C.H;
    return C.H = yn, e === null ? yn : e;
  }
  function Sd() {
    var e = C.A;
    return C.A = Jh, e;
  }
  function Gu() {
    we = 4, bl || (se & 4194048) !== se && ht.current !== null || (Ma = !0), (Sl & 134217727) === 0 && (Pl & 134217727) === 0 || Ee === null || Tl(
      Ee,
      se,
      yt,
      !1
    );
  }
  function hr(e, t, l) {
    var a = pe;
    pe |= 2;
    var n = bd(), u = Sd();
    (Ee !== e || se !== t) && (qu = null, Da(e, t)), t = !1;
    var r = we;
    e: do
      try {
        if (ve !== 0 && ce !== null) {
          var d = ce, h = gt;
          switch (ve) {
            case 8:
              mr(), r = 6;
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              ht.current === null && (t = !0);
              var j = ve;
              if (ve = 0, gt = null, Ua(e, d, h, j), l && Ma) {
                r = 0;
                break e;
              }
              break;
            default:
              j = ve, ve = 0, gt = null, Ua(e, d, h, j);
          }
        }
        Wh(), r = we;
        break;
      } catch (z) {
        vd(e, z);
      }
    while (!0);
    return t && e.shellSuspendCounter++, Kt = Xl = null, pe = a, C.H = n, C.A = u, ce === null && (Ee = null, se = 0, ru()), r;
  }
  function Wh() {
    for (; ce !== null; ) jd(ce);
  }
  function Ih(e, t) {
    var l = pe;
    pe |= 2;
    var a = bd(), n = Sd();
    Ee !== e || se !== t ? (qu = null, Lu = st() + 500, Da(e, t)) : Ma = Va(
      e,
      t
    );
    e: do
      try {
        if (ve !== 0 && ce !== null) {
          t = ce;
          var u = gt;
          t: switch (ve) {
            case 1:
              ve = 0, gt = null, Ua(e, t, u, 1);
              break;
            case 2:
            case 9:
              if (Oo(u)) {
                ve = 0, gt = null, Nd(t);
                break;
              }
              t = function() {
                ve !== 2 && ve !== 9 || Ee !== e || (ve = 7), Lt(e);
              }, u.then(t, t);
              break e;
            case 3:
              ve = 7;
              break e;
            case 4:
              ve = 5;
              break e;
            case 7:
              Oo(u) ? (ve = 0, gt = null, Nd(t)) : (ve = 0, gt = null, Ua(e, t, u, 7));
              break;
            case 5:
              var r = null;
              switch (ce.tag) {
                case 26:
                  r = ce.memoizedState;
                case 5:
                case 27:
                  var d = ce;
                  if (r ? r0(r) : d.stateNode.complete) {
                    ve = 0, gt = null;
                    var h = d.sibling;
                    if (h !== null) ce = h;
                    else {
                      var j = d.return;
                      j !== null ? (ce = j, Qu(j)) : ce = null;
                    }
                    break t;
                  }
              }
              ve = 0, gt = null, Ua(e, t, u, 5);
              break;
            case 6:
              ve = 0, gt = null, Ua(e, t, u, 6);
              break;
            case 8:
              mr(), we = 6;
              break e;
            default:
              throw Error(s(462));
          }
        }
        Ph();
        break;
      } catch (z) {
        vd(e, z);
      }
    while (!0);
    return Kt = Xl = null, C.H = a, C.A = n, pe = l, ce !== null ? 0 : (Ee = null, se = 0, ru(), we);
  }
  function Ph() {
    for (; ce !== null && !jm(); )
      jd(ce);
  }
  function jd(e) {
    var t = Zf(e.alternate, e, al);
    e.memoizedProps = e.pendingProps, t === null ? Qu(e) : ce = t;
  }
  function Nd(e) {
    var t = e, l = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = qf(
          l,
          t,
          t.pendingProps,
          t.type,
          void 0,
          se
        );
        break;
      case 11:
        t = qf(
          l,
          t,
          t.pendingProps,
          t.type.render,
          t.ref,
          se
        );
        break;
      case 5:
        Ac(t);
      default:
        Jf(l, t), t = ce = bo(t, al), t = Zf(l, t, al);
    }
    e.memoizedProps = e.pendingProps, t === null ? Qu(e) : ce = t;
  }
  function Ua(e, t, l, a) {
    Kt = Xl = null, Ac(t), Na = null, sn = 0;
    var n = t.return;
    try {
      if (Yh(
        e,
        n,
        t,
        l,
        se
      )) {
        we = 1, Mu(
          e,
          Tt(l, e.current)
        ), ce = null;
        return;
      }
    } catch (u) {
      if (n !== null) throw ce = n, u;
      we = 1, Mu(
        e,
        Tt(l, e.current)
      ), ce = null;
      return;
    }
    t.flags & 32768 ? (fe || a === 1 ? e = !0 : Ma || (se & 536870912) !== 0 ? e = !1 : (bl = e = !0, (a === 2 || a === 9 || a === 3 || a === 6) && (a = ht.current, a !== null && a.tag === 13 && (a.flags |= 16384))), Td(t, e)) : Qu(t);
  }
  function Qu(e) {
    var t = e;
    do {
      if ((t.flags & 32768) !== 0) {
        Td(
          t,
          bl
        );
        return;
      }
      e = t.return;
      var l = Xh(
        t.alternate,
        t,
        al
      );
      if (l !== null) {
        ce = l;
        return;
      }
      if (t = t.sibling, t !== null) {
        ce = t;
        return;
      }
      ce = t = e;
    } while (t !== null);
    we === 0 && (we = 5);
  }
  function Td(e, t) {
    do {
      var l = Vh(e.alternate, e);
      if (l !== null) {
        l.flags &= 32767, ce = l;
        return;
      }
      if (l = e.return, l !== null && (l.flags |= 32768, l.subtreeFlags = 0, l.deletions = null), !t && (e = e.sibling, e !== null)) {
        ce = e;
        return;
      }
      ce = e = l;
    } while (e !== null);
    we = 6, ce = null;
  }
  function Ed(e, t, l, a, n, u, r, d, h) {
    e.cancelPendingCommit = null;
    do
      Xu();
    while (qe !== 0);
    if ((pe & 6) !== 0) throw Error(s(327));
    if (t !== null) {
      if (t === e.current) throw Error(s(177));
      if (u = t.lanes | t.childLanes, u |= lc, wm(
        e,
        l,
        u,
        r,
        d,
        h
      ), e === Ee && (ce = Ee = null, se = 0), wa = t, Nl = e, nl = l, or = u, fr = n, hd = a, (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (e.callbackNode = null, e.callbackPriority = 0, a1(Zn, function() {
        return Md(), null;
      })) : (e.callbackNode = null, e.callbackPriority = 0), a = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || a) {
        a = C.T, C.T = null, n = H.p, H.p = 2, r = pe, pe |= 4;
        try {
          Zh(e, t, l);
        } finally {
          pe = r, H.p = n, C.T = a;
        }
      }
      qe = 1, _d(), zd(), Cd();
    }
  }
  function _d() {
    if (qe === 1) {
      qe = 0;
      var e = Nl, t = wa, l = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || l) {
        l = C.T, C.T = null;
        var a = H.p;
        H.p = 2;
        var n = pe;
        pe |= 4;
        try {
          id(t, e);
          var u = _r, r = oo(e.containerInfo), d = u.focusedElem, h = u.selectionRange;
          if (r !== d && d && d.ownerDocument && so(
            d.ownerDocument.documentElement,
            d
          )) {
            if (h !== null && Wi(d)) {
              var j = h.start, z = h.end;
              if (z === void 0 && (z = j), "selectionStart" in d)
                d.selectionStart = j, d.selectionEnd = Math.min(
                  z,
                  d.value.length
                );
              else {
                var O = d.ownerDocument || document, N = O && O.defaultView || window;
                if (N.getSelection) {
                  var E = N.getSelection(), Y = d.textContent.length, $ = Math.min(h.start, Y), Ne = h.end === void 0 ? $ : Math.min(h.end, Y);
                  !E.extend && $ > Ne && (r = Ne, Ne = $, $ = r);
                  var x = ro(
                    d,
                    $
                  ), g = ro(
                    d,
                    Ne
                  );
                  if (x && g && (E.rangeCount !== 1 || E.anchorNode !== x.node || E.anchorOffset !== x.offset || E.focusNode !== g.node || E.focusOffset !== g.offset)) {
                    var S = O.createRange();
                    S.setStart(x.node, x.offset), E.removeAllRanges(), $ > Ne ? (E.addRange(S), E.extend(g.node, g.offset)) : (S.setEnd(g.node, g.offset), E.addRange(S));
                  }
                }
              }
            }
            for (O = [], E = d; E = E.parentNode; )
              E.nodeType === 1 && O.push({
                element: E,
                left: E.scrollLeft,
                top: E.scrollTop
              });
            for (typeof d.focus == "function" && d.focus(), d = 0; d < O.length; d++) {
              var M = O[d];
              M.element.scrollLeft = M.left, M.element.scrollTop = M.top;
            }
          }
          li = !!Er, _r = Er = null;
        } finally {
          pe = n, H.p = a, C.T = l;
        }
      }
      e.current = t, qe = 2;
    }
  }
  function zd() {
    if (qe === 2) {
      qe = 0;
      var e = Nl, t = wa, l = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || l) {
        l = C.T, C.T = null;
        var a = H.p;
        H.p = 2;
        var n = pe;
        pe |= 4;
        try {
          td(e, t.alternate, t);
        } finally {
          pe = n, H.p = a, C.T = l;
        }
      }
      qe = 3;
    }
  }
  function Cd() {
    if (qe === 4 || qe === 3) {
      qe = 0, Nm();
      var e = Nl, t = wa, l = nl, a = hd;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? qe = 5 : (qe = 0, wa = Nl = null, Ad(e, e.pendingLanes));
      var n = e.pendingLanes;
      if (n === 0 && (jl = null), wi(l), t = t.stateNode, ot && typeof ot.onCommitFiberRoot == "function")
        try {
          ot.onCommitFiberRoot(
            Xa,
            t,
            void 0,
            (t.current.flags & 128) === 128
          );
        } catch {
        }
      if (a !== null) {
        t = C.T, n = H.p, H.p = 2, C.T = null;
        try {
          for (var u = e.onRecoverableError, r = 0; r < a.length; r++) {
            var d = a[r];
            u(d.value, {
              componentStack: d.stack
            });
          }
        } finally {
          C.T = t, H.p = n;
        }
      }
      (nl & 3) !== 0 && Xu(), Lt(e), n = e.pendingLanes, (l & 261930) !== 0 && (n & 42) !== 0 ? e === dr ? _n++ : (_n = 0, dr = e) : _n = 0, zn(0);
    }
  }
  function Ad(e, t) {
    (e.pooledCacheLanes &= t) === 0 && (t = e.pooledCache, t != null && (e.pooledCache = null, cn(t)));
  }
  function Xu() {
    return _d(), zd(), Cd(), Md();
  }
  function Md() {
    if (qe !== 5) return !1;
    var e = Nl, t = or;
    or = 0;
    var l = wi(nl), a = C.T, n = H.p;
    try {
      H.p = 32 > l ? 32 : l, C.T = null, l = fr, fr = null;
      var u = Nl, r = nl;
      if (qe = 0, wa = Nl = null, nl = 0, (pe & 6) !== 0) throw Error(s(331));
      var d = pe;
      if (pe |= 4, fd(u.current), rd(
        u,
        u.current,
        r,
        l
      ), pe = d, zn(0, !1), ot && typeof ot.onPostCommitFiberRoot == "function")
        try {
          ot.onPostCommitFiberRoot(Xa, u);
        } catch {
        }
      return !0;
    } finally {
      H.p = n, C.T = a, Ad(e, t);
    }
  }
  function Od(e, t, l) {
    t = Tt(l, t), t = Xc(e.stateNode, t, 2), e = gl(e, t, 2), e !== null && (Za(e, 2), Lt(e));
  }
  function xe(e, t, l) {
    if (e.tag === 3)
      Od(e, e, l);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          Od(
            t,
            e,
            l
          );
          break;
        } else if (t.tag === 1) {
          var a = t.stateNode;
          if (typeof t.type.getDerivedStateFromError == "function" || typeof a.componentDidCatch == "function" && (jl === null || !jl.has(a))) {
            e = Tt(l, e), l = wf(2), a = gl(t, l, 2), a !== null && (Df(
              l,
              a,
              t,
              e
            ), Za(a, 2), Lt(a));
            break;
          }
        }
        t = t.return;
      }
  }
  function pr(e, t, l) {
    var a = e.pingCache;
    if (a === null) {
      a = e.pingCache = new $h();
      var n = /* @__PURE__ */ new Set();
      a.set(t, n);
    } else
      n = a.get(t), n === void 0 && (n = /* @__PURE__ */ new Set(), a.set(t, n));
    n.has(l) || (cr = !0, n.add(l), e = e1.bind(null, e, t, l), t.then(e, e));
  }
  function e1(e, t, l) {
    var a = e.pingCache;
    a !== null && a.delete(t), e.pingedLanes |= e.suspendedLanes & l, e.warmLanes &= ~l, Ee === e && (se & l) === l && (we === 4 || we === 3 && (se & 62914560) === se && 300 > st() - Hu ? (pe & 2) === 0 && Da(e, 0) : rr |= l, Oa === se && (Oa = 0)), Lt(e);
  }
  function wd(e, t) {
    t === 0 && (t = Ts()), e = Yl(e, t), e !== null && (Za(e, t), Lt(e));
  }
  function t1(e) {
    var t = e.memoizedState, l = 0;
    t !== null && (l = t.retryLane), wd(e, l);
  }
  function l1(e, t) {
    var l = 0;
    switch (e.tag) {
      case 31:
      case 13:
        var a = e.stateNode, n = e.memoizedState;
        n !== null && (l = n.retryLane);
        break;
      case 19:
        a = e.stateNode;
        break;
      case 22:
        a = e.stateNode._retryCache;
        break;
      default:
        throw Error(s(314));
    }
    a !== null && a.delete(t), wd(e, l);
  }
  function a1(e, t) {
    return Ci(e, t);
  }
  var Vu = null, Ra = null, gr = !1, Zu = !1, yr = !1, El = 0;
  function Lt(e) {
    e !== Ra && e.next === null && (Ra === null ? Vu = Ra = e : Ra = Ra.next = e), Zu = !0, gr || (gr = !0, u1());
  }
  function zn(e, t) {
    if (!yr && Zu) {
      yr = !0;
      do
        for (var l = !1, a = Vu; a !== null; ) {
          if (e !== 0) {
            var n = a.pendingLanes;
            if (n === 0) var u = 0;
            else {
              var r = a.suspendedLanes, d = a.pingedLanes;
              u = (1 << 31 - ft(42 | e) + 1) - 1, u &= n & ~(r & ~d), u = u & 201326741 ? u & 201326741 | 1 : u ? u | 2 : 0;
            }
            u !== 0 && (l = !0, kd(a, u));
          } else
            u = se, u = Fn(
              a,
              a === Ee ? u : 0,
              a.cancelPendingCommit !== null || a.timeoutHandle !== -1
            ), (u & 3) === 0 || Va(a, u) || (l = !0, kd(a, u));
          a = a.next;
        }
      while (l);
      yr = !1;
    }
  }
  function n1() {
    Dd();
  }
  function Dd() {
    Zu = gr = !1;
    var e = 0;
    El !== 0 && p1() && (e = El);
    for (var t = st(), l = null, a = Vu; a !== null; ) {
      var n = a.next, u = Ud(a, t);
      u === 0 ? (a.next = null, l === null ? Vu = n : l.next = n, n === null && (Ra = l)) : (l = a, (e !== 0 || (u & 3) !== 0) && (Zu = !0)), a = n;
    }
    qe !== 0 && qe !== 5 || zn(e), El !== 0 && (El = 0);
  }
  function Ud(e, t) {
    for (var l = e.suspendedLanes, a = e.pingedLanes, n = e.expirationTimes, u = e.pendingLanes & -62914561; 0 < u; ) {
      var r = 31 - ft(u), d = 1 << r, h = n[r];
      h === -1 ? ((d & l) === 0 || (d & a) !== 0) && (n[r] = Om(d, t)) : h <= t && (e.expiredLanes |= d), u &= ~d;
    }
    if (t = Ee, l = se, l = Fn(
      e,
      e === t ? l : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), a = e.callbackNode, l === 0 || e === t && (ve === 2 || ve === 9) || e.cancelPendingCommit !== null)
      return a !== null && a !== null && Ai(a), e.callbackNode = null, e.callbackPriority = 0;
    if ((l & 3) === 0 || Va(e, l)) {
      if (t = l & -l, t === e.callbackPriority) return t;
      switch (a !== null && Ai(a), wi(l)) {
        case 2:
        case 8:
          l = js;
          break;
        case 32:
          l = Zn;
          break;
        case 268435456:
          l = Ns;
          break;
        default:
          l = Zn;
      }
      return a = Rd.bind(null, e), l = Ci(l, a), e.callbackPriority = t, e.callbackNode = l, t;
    }
    return a !== null && a !== null && Ai(a), e.callbackPriority = 2, e.callbackNode = null, 2;
  }
  function Rd(e, t) {
    if (qe !== 0 && qe !== 5)
      return e.callbackNode = null, e.callbackPriority = 0, null;
    var l = e.callbackNode;
    if (Xu() && e.callbackNode !== l)
      return null;
    var a = se;
    return a = Fn(
      e,
      e === Ee ? a : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), a === 0 ? null : (gd(e, a, t), Ud(e, st()), e.callbackNode != null && e.callbackNode === l ? Rd.bind(null, e) : null);
  }
  function kd(e, t) {
    if (Xu()) return null;
    gd(e, t, !0);
  }
  function u1() {
    y1(function() {
      (pe & 6) !== 0 ? Ci(
        Ss,
        n1
      ) : Dd();
    });
  }
  function vr() {
    if (El === 0) {
      var e = ba;
      e === 0 && (e = Kn, Kn <<= 1, (Kn & 261888) === 0 && (Kn = 256)), El = e;
    }
    return El;
  }
  function Bd(e) {
    return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : eu("" + e);
  }
  function Hd(e, t) {
    var l = t.ownerDocument.createElement("input");
    return l.name = t.name, l.value = t.value, e.id && l.setAttribute("form", e.id), t.parentNode.insertBefore(l, t), e = new FormData(e), l.parentNode.removeChild(l), e;
  }
  function i1(e, t, l, a, n) {
    if (t === "submit" && l && l.stateNode === n) {
      var u = Bd(
        (n[lt] || null).action
      ), r = a.submitter;
      r && (t = (t = r[lt] || null) ? Bd(t.formAction) : r.getAttribute("formAction"), t !== null && (u = t, r = null));
      var d = new nu(
        "action",
        "action",
        null,
        a,
        n
      );
      e.push({
        event: d,
        listeners: [
          {
            instance: null,
            listener: function() {
              if (a.defaultPrevented) {
                if (El !== 0) {
                  var h = r ? Hd(n, r) : new FormData(n);
                  Hc(
                    l,
                    {
                      pending: !0,
                      data: h,
                      method: n.method,
                      action: u
                    },
                    null,
                    h
                  );
                }
              } else
                typeof u == "function" && (d.preventDefault(), h = r ? Hd(n, r) : new FormData(n), Hc(
                  l,
                  {
                    pending: !0,
                    data: h,
                    method: n.method,
                    action: u
                  },
                  u,
                  h
                ));
            },
            currentTarget: n
          }
        ]
      });
    }
  }
  for (var xr = 0; xr < tc.length; xr++) {
    var br = tc[xr], c1 = br.toLowerCase(), r1 = br[0].toUpperCase() + br.slice(1);
    Dt(
      c1,
      "on" + r1
    );
  }
  Dt(ho, "onAnimationEnd"), Dt(po, "onAnimationIteration"), Dt(go, "onAnimationStart"), Dt("dblclick", "onDoubleClick"), Dt("focusin", "onFocus"), Dt("focusout", "onBlur"), Dt(Th, "onTransitionRun"), Dt(Eh, "onTransitionStart"), Dt(_h, "onTransitionCancel"), Dt(yo, "onTransitionEnd"), ia("onMouseEnter", ["mouseout", "mouseover"]), ia("onMouseLeave", ["mouseout", "mouseover"]), ia("onPointerEnter", ["pointerout", "pointerover"]), ia("onPointerLeave", ["pointerout", "pointerover"]), Bl(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(" ")
  ), Bl(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  ), Bl("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), Bl(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  ), Bl(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  ), Bl(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var Cn = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), s1 = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Cn)
  );
  function Ld(e, t) {
    t = (t & 4) !== 0;
    for (var l = 0; l < e.length; l++) {
      var a = e[l], n = a.event;
      a = a.listeners;
      e: {
        var u = void 0;
        if (t)
          for (var r = a.length - 1; 0 <= r; r--) {
            var d = a[r], h = d.instance, j = d.currentTarget;
            if (d = d.listener, h !== u && n.isPropagationStopped())
              break e;
            u = d, n.currentTarget = j;
            try {
              u(n);
            } catch (z) {
              cu(z);
            }
            n.currentTarget = null, u = h;
          }
        else
          for (r = 0; r < a.length; r++) {
            if (d = a[r], h = d.instance, j = d.currentTarget, d = d.listener, h !== u && n.isPropagationStopped())
              break e;
            u = d, n.currentTarget = j;
            try {
              u(n);
            } catch (z) {
              cu(z);
            }
            n.currentTarget = null, u = h;
          }
      }
    }
  }
  function re(e, t) {
    var l = t[Di];
    l === void 0 && (l = t[Di] = /* @__PURE__ */ new Set());
    var a = e + "__bubble";
    l.has(a) || (qd(t, e, 2, !1), l.add(a));
  }
  function Sr(e, t, l) {
    var a = 0;
    t && (a |= 4), qd(
      l,
      e,
      a,
      t
    );
  }
  var Ku = "_reactListening" + Math.random().toString(36).slice(2);
  function jr(e) {
    if (!e[Ku]) {
      e[Ku] = !0, Os.forEach(function(l) {
        l !== "selectionchange" && (s1.has(l) || Sr(l, !1, e), Sr(l, !0, e));
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[Ku] || (t[Ku] = !0, Sr("selectionchange", !1, t));
    }
  }
  function qd(e, t, l, a) {
    switch (p0(t)) {
      case 2:
        var n = B1;
        break;
      case 8:
        n = H1;
        break;
      default:
        n = Br;
    }
    l = n.bind(
      null,
      t,
      l,
      e
    ), n = void 0, !Gi || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (n = !0), a ? n !== void 0 ? e.addEventListener(t, l, {
      capture: !0,
      passive: n
    }) : e.addEventListener(t, l, !0) : n !== void 0 ? e.addEventListener(t, l, {
      passive: n
    }) : e.addEventListener(t, l, !1);
  }
  function Nr(e, t, l, a, n) {
    var u = a;
    if ((t & 1) === 0 && (t & 2) === 0 && a !== null)
      e: for (; ; ) {
        if (a === null) return;
        var r = a.tag;
        if (r === 3 || r === 4) {
          var d = a.stateNode.containerInfo;
          if (d === n) break;
          if (r === 4)
            for (r = a.return; r !== null; ) {
              var h = r.tag;
              if ((h === 3 || h === 4) && r.stateNode.containerInfo === n)
                return;
              r = r.return;
            }
          for (; d !== null; ) {
            if (r = aa(d), r === null) return;
            if (h = r.tag, h === 5 || h === 6 || h === 26 || h === 27) {
              a = u = r;
              continue e;
            }
            d = d.parentNode;
          }
        }
        a = a.return;
      }
    Qs(function() {
      var j = u, z = qi(l), O = [];
      e: {
        var N = vo.get(e);
        if (N !== void 0) {
          var E = nu, Y = e;
          switch (e) {
            case "keypress":
              if (lu(l) === 0) break e;
            case "keydown":
            case "keyup":
              E = lh;
              break;
            case "focusin":
              Y = "focus", E = Zi;
              break;
            case "focusout":
              Y = "blur", E = Zi;
              break;
            case "beforeblur":
            case "afterblur":
              E = Zi;
              break;
            case "click":
              if (l.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              E = Zs;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              E = Xm;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              E = uh;
              break;
            case ho:
            case po:
            case go:
              E = Km;
              break;
            case yo:
              E = ch;
              break;
            case "scroll":
            case "scrollend":
              E = Gm;
              break;
            case "wheel":
              E = sh;
              break;
            case "copy":
            case "cut":
            case "paste":
              E = $m;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              E = Js;
              break;
            case "toggle":
            case "beforetoggle":
              E = fh;
          }
          var $ = (t & 4) !== 0, Ne = !$ && (e === "scroll" || e === "scrollend"), x = $ ? N !== null ? N + "Capture" : null : N;
          $ = [];
          for (var g = j, S; g !== null; ) {
            var M = g;
            if (S = M.stateNode, M = M.tag, M !== 5 && M !== 26 && M !== 27 || S === null || x === null || (M = $a(g, x), M != null && $.push(
              An(g, M, S)
            )), Ne) break;
            g = g.return;
          }
          0 < $.length && (N = new E(
            N,
            Y,
            null,
            l,
            z
          ), O.push({ event: N, listeners: $ }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (N = e === "mouseover" || e === "pointerover", E = e === "mouseout" || e === "pointerout", N && l !== Li && (Y = l.relatedTarget || l.fromElement) && (aa(Y) || Y[la]))
            break e;
          if ((E || N) && (N = z.window === z ? z : (N = z.ownerDocument) ? N.defaultView || N.parentWindow : window, E ? (Y = l.relatedTarget || l.toElement, E = j, Y = Y ? aa(Y) : null, Y !== null && (Ne = p(Y), $ = Y.tag, Y !== Ne || $ !== 5 && $ !== 27 && $ !== 6) && (Y = null)) : (E = null, Y = j), E !== Y)) {
            if ($ = Zs, M = "onMouseLeave", x = "onMouseEnter", g = "mouse", (e === "pointerout" || e === "pointerover") && ($ = Js, M = "onPointerLeave", x = "onPointerEnter", g = "pointer"), Ne = E == null ? N : Ja(E), S = Y == null ? N : Ja(Y), N = new $(
              M,
              g + "leave",
              E,
              l,
              z
            ), N.target = Ne, N.relatedTarget = S, M = null, aa(z) === j && ($ = new $(
              x,
              g + "enter",
              Y,
              l,
              z
            ), $.target = S, $.relatedTarget = Ne, M = $), Ne = M, E && Y)
              t: {
                for ($ = o1, x = E, g = Y, S = 0, M = x; M; M = $(M))
                  S++;
                M = 0;
                for (var K = g; K; K = $(K))
                  M++;
                for (; 0 < S - M; )
                  x = $(x), S--;
                for (; 0 < M - S; )
                  g = $(g), M--;
                for (; S--; ) {
                  if (x === g || g !== null && x === g.alternate) {
                    $ = x;
                    break t;
                  }
                  x = $(x), g = $(g);
                }
                $ = null;
              }
            else $ = null;
            E !== null && Yd(
              O,
              N,
              E,
              $,
              !1
            ), Y !== null && Ne !== null && Yd(
              O,
              Ne,
              Y,
              $,
              !0
            );
          }
        }
        e: {
          if (N = j ? Ja(j) : window, E = N.nodeName && N.nodeName.toLowerCase(), E === "select" || E === "input" && N.type === "file")
            var me = lo;
          else if (eo(N))
            if (ao)
              me = Sh;
            else {
              me = xh;
              var Q = vh;
            }
          else
            E = N.nodeName, !E || E.toLowerCase() !== "input" || N.type !== "checkbox" && N.type !== "radio" ? j && Hi(j.elementType) && (me = lo) : me = bh;
          if (me && (me = me(e, j))) {
            to(
              O,
              me,
              l,
              z
            );
            break e;
          }
          Q && Q(e, N, j), e === "focusout" && j && N.type === "number" && j.memoizedProps.value != null && Bi(N, "number", N.value);
        }
        switch (Q = j ? Ja(j) : window, e) {
          case "focusin":
            (eo(Q) || Q.contentEditable === "true") && (da = Q, Ii = j, an = null);
            break;
          case "focusout":
            an = Ii = da = null;
            break;
          case "mousedown":
            Pi = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Pi = !1, fo(O, l, z);
            break;
          case "selectionchange":
            if (Nh) break;
          case "keydown":
          case "keyup":
            fo(O, l, z);
        }
        var ne;
        if (Ji)
          e: {
            switch (e) {
              case "compositionstart":
                var oe = "onCompositionStart";
                break e;
              case "compositionend":
                oe = "onCompositionEnd";
                break e;
              case "compositionupdate":
                oe = "onCompositionUpdate";
                break e;
            }
            oe = void 0;
          }
        else
          fa ? Is(e, l) && (oe = "onCompositionEnd") : e === "keydown" && l.keyCode === 229 && (oe = "onCompositionStart");
        oe && ($s && l.locale !== "ko" && (fa || oe !== "onCompositionStart" ? oe === "onCompositionEnd" && fa && (ne = Xs()) : (sl = z, Qi = "value" in sl ? sl.value : sl.textContent, fa = !0)), Q = Ju(j, oe), 0 < Q.length && (oe = new Ks(
          oe,
          e,
          null,
          l,
          z
        ), O.push({ event: oe, listeners: Q }), ne ? oe.data = ne : (ne = Ps(l), ne !== null && (oe.data = ne)))), (ne = mh ? hh(e, l) : ph(e, l)) && (oe = Ju(j, "onBeforeInput"), 0 < oe.length && (Q = new Ks(
          "onBeforeInput",
          "beforeinput",
          null,
          l,
          z
        ), O.push({
          event: Q,
          listeners: oe
        }), Q.data = ne)), i1(
          O,
          e,
          j,
          l,
          z
        );
      }
      Ld(O, t);
    });
  }
  function An(e, t, l) {
    return {
      instance: e,
      listener: t,
      currentTarget: l
    };
  }
  function Ju(e, t) {
    for (var l = t + "Capture", a = []; e !== null; ) {
      var n = e, u = n.stateNode;
      if (n = n.tag, n !== 5 && n !== 26 && n !== 27 || u === null || (n = $a(e, l), n != null && a.unshift(
        An(e, n, u)
      ), n = $a(e, t), n != null && a.push(
        An(e, n, u)
      )), e.tag === 3) return a;
      e = e.return;
    }
    return [];
  }
  function o1(e) {
    if (e === null) return null;
    do
      e = e.return;
    while (e && e.tag !== 5 && e.tag !== 27);
    return e || null;
  }
  function Yd(e, t, l, a, n) {
    for (var u = t._reactName, r = []; l !== null && l !== a; ) {
      var d = l, h = d.alternate, j = d.stateNode;
      if (d = d.tag, h !== null && h === a) break;
      d !== 5 && d !== 26 && d !== 27 || j === null || (h = j, n ? (j = $a(l, u), j != null && r.unshift(
        An(l, j, h)
      )) : n || (j = $a(l, u), j != null && r.push(
        An(l, j, h)
      ))), l = l.return;
    }
    r.length !== 0 && e.push({ event: t, listeners: r });
  }
  var f1 = /\r\n?/g, d1 = /\u0000|\uFFFD/g;
  function Gd(e) {
    return (typeof e == "string" ? e : "" + e).replace(f1, `
`).replace(d1, "");
  }
  function Qd(e, t) {
    return t = Gd(t), Gd(e) === t;
  }
  function je(e, t, l, a, n, u) {
    switch (l) {
      case "children":
        typeof a == "string" ? t === "body" || t === "textarea" && a === "" || ra(e, a) : (typeof a == "number" || typeof a == "bigint") && t !== "body" && ra(e, "" + a);
        break;
      case "className":
        In(e, "class", a);
        break;
      case "tabIndex":
        In(e, "tabindex", a);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        In(e, l, a);
        break;
      case "style":
        Ys(e, a, u);
        break;
      case "data":
        if (t !== "object") {
          In(e, "data", a);
          break;
        }
      case "src":
      case "href":
        if (a === "" && (t !== "a" || l !== "href")) {
          e.removeAttribute(l);
          break;
        }
        if (a == null || typeof a == "function" || typeof a == "symbol" || typeof a == "boolean") {
          e.removeAttribute(l);
          break;
        }
        a = eu("" + a), e.setAttribute(l, a);
        break;
      case "action":
      case "formAction":
        if (typeof a == "function") {
          e.setAttribute(
            l,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof u == "function" && (l === "formAction" ? (t !== "input" && je(e, t, "name", n.name, n, null), je(
            e,
            t,
            "formEncType",
            n.formEncType,
            n,
            null
          ), je(
            e,
            t,
            "formMethod",
            n.formMethod,
            n,
            null
          ), je(
            e,
            t,
            "formTarget",
            n.formTarget,
            n,
            null
          )) : (je(e, t, "encType", n.encType, n, null), je(e, t, "method", n.method, n, null), je(e, t, "target", n.target, n, null)));
        if (a == null || typeof a == "symbol" || typeof a == "boolean") {
          e.removeAttribute(l);
          break;
        }
        a = eu("" + a), e.setAttribute(l, a);
        break;
      case "onClick":
        a != null && (e.onclick = Qt);
        break;
      case "onScroll":
        a != null && re("scroll", e);
        break;
      case "onScrollEnd":
        a != null && re("scrollend", e);
        break;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a))
            throw Error(s(61));
          if (l = a.__html, l != null) {
            if (n.children != null) throw Error(s(60));
            e.innerHTML = l;
          }
        }
        break;
      case "multiple":
        e.multiple = a && typeof a != "function" && typeof a != "symbol";
        break;
      case "muted":
        e.muted = a && typeof a != "function" && typeof a != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (a == null || typeof a == "function" || typeof a == "boolean" || typeof a == "symbol") {
          e.removeAttribute("xlink:href");
          break;
        }
        l = eu("" + a), e.setAttributeNS(
          "http://www.w3.org/1999/xlink",
          "xlink:href",
          l
        );
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        a != null && typeof a != "function" && typeof a != "symbol" ? e.setAttribute(l, "" + a) : e.removeAttribute(l);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        a && typeof a != "function" && typeof a != "symbol" ? e.setAttribute(l, "") : e.removeAttribute(l);
        break;
      case "capture":
      case "download":
        a === !0 ? e.setAttribute(l, "") : a !== !1 && a != null && typeof a != "function" && typeof a != "symbol" ? e.setAttribute(l, a) : e.removeAttribute(l);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        a != null && typeof a != "function" && typeof a != "symbol" && !isNaN(a) && 1 <= a ? e.setAttribute(l, a) : e.removeAttribute(l);
        break;
      case "rowSpan":
      case "start":
        a == null || typeof a == "function" || typeof a == "symbol" || isNaN(a) ? e.removeAttribute(l) : e.setAttribute(l, a);
        break;
      case "popover":
        re("beforetoggle", e), re("toggle", e), Wn(e, "popover", a);
        break;
      case "xlinkActuate":
        Gt(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          a
        );
        break;
      case "xlinkArcrole":
        Gt(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          a
        );
        break;
      case "xlinkRole":
        Gt(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          a
        );
        break;
      case "xlinkShow":
        Gt(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          a
        );
        break;
      case "xlinkTitle":
        Gt(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          a
        );
        break;
      case "xlinkType":
        Gt(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          a
        );
        break;
      case "xmlBase":
        Gt(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          a
        );
        break;
      case "xmlLang":
        Gt(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          a
        );
        break;
      case "xmlSpace":
        Gt(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:space",
          a
        );
        break;
      case "is":
        Wn(e, "is", a);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < l.length) || l[0] !== "o" && l[0] !== "O" || l[1] !== "n" && l[1] !== "N") && (l = qm.get(l) || l, Wn(e, l, a));
    }
  }
  function Tr(e, t, l, a, n, u) {
    switch (l) {
      case "style":
        Ys(e, a, u);
        break;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a))
            throw Error(s(61));
          if (l = a.__html, l != null) {
            if (n.children != null) throw Error(s(60));
            e.innerHTML = l;
          }
        }
        break;
      case "children":
        typeof a == "string" ? ra(e, a) : (typeof a == "number" || typeof a == "bigint") && ra(e, "" + a);
        break;
      case "onScroll":
        a != null && re("scroll", e);
        break;
      case "onScrollEnd":
        a != null && re("scrollend", e);
        break;
      case "onClick":
        a != null && (e.onclick = Qt);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!ws.hasOwnProperty(l))
          e: {
            if (l[0] === "o" && l[1] === "n" && (n = l.endsWith("Capture"), t = l.slice(2, n ? l.length - 7 : void 0), u = e[lt] || null, u = u != null ? u[l] : null, typeof u == "function" && e.removeEventListener(t, u, n), typeof a == "function")) {
              typeof u != "function" && u !== null && (l in e ? e[l] = null : e.hasAttribute(l) && e.removeAttribute(l)), e.addEventListener(t, a, n);
              break e;
            }
            l in e ? e[l] = a : a === !0 ? e.setAttribute(l, "") : Wn(e, l, a);
          }
    }
  }
  function Je(e, t, l) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        re("error", e), re("load", e);
        var a = !1, n = !1, u;
        for (u in l)
          if (l.hasOwnProperty(u)) {
            var r = l[u];
            if (r != null)
              switch (u) {
                case "src":
                  a = !0;
                  break;
                case "srcSet":
                  n = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(s(137, t));
                default:
                  je(e, t, u, r, l, null);
              }
          }
        n && je(e, t, "srcSet", l.srcSet, l, null), a && je(e, t, "src", l.src, l, null);
        return;
      case "input":
        re("invalid", e);
        var d = u = r = n = null, h = null, j = null;
        for (a in l)
          if (l.hasOwnProperty(a)) {
            var z = l[a];
            if (z != null)
              switch (a) {
                case "name":
                  n = z;
                  break;
                case "type":
                  r = z;
                  break;
                case "checked":
                  h = z;
                  break;
                case "defaultChecked":
                  j = z;
                  break;
                case "value":
                  u = z;
                  break;
                case "defaultValue":
                  d = z;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (z != null)
                    throw Error(s(137, t));
                  break;
                default:
                  je(e, t, a, z, l, null);
              }
          }
        Bs(
          e,
          u,
          d,
          h,
          j,
          r,
          n,
          !1
        );
        return;
      case "select":
        re("invalid", e), a = r = u = null;
        for (n in l)
          if (l.hasOwnProperty(n) && (d = l[n], d != null))
            switch (n) {
              case "value":
                u = d;
                break;
              case "defaultValue":
                r = d;
                break;
              case "multiple":
                a = d;
              default:
                je(e, t, n, d, l, null);
            }
        t = u, l = r, e.multiple = !!a, t != null ? ca(e, !!a, t, !1) : l != null && ca(e, !!a, l, !0);
        return;
      case "textarea":
        re("invalid", e), u = n = a = null;
        for (r in l)
          if (l.hasOwnProperty(r) && (d = l[r], d != null))
            switch (r) {
              case "value":
                a = d;
                break;
              case "defaultValue":
                n = d;
                break;
              case "children":
                u = d;
                break;
              case "dangerouslySetInnerHTML":
                if (d != null) throw Error(s(91));
                break;
              default:
                je(e, t, r, d, l, null);
            }
        Ls(e, a, n, u);
        return;
      case "option":
        for (h in l)
          if (l.hasOwnProperty(h) && (a = l[h], a != null))
            switch (h) {
              case "selected":
                e.selected = a && typeof a != "function" && typeof a != "symbol";
                break;
              default:
                je(e, t, h, a, l, null);
            }
        return;
      case "dialog":
        re("beforetoggle", e), re("toggle", e), re("cancel", e), re("close", e);
        break;
      case "iframe":
      case "object":
        re("load", e);
        break;
      case "video":
      case "audio":
        for (a = 0; a < Cn.length; a++)
          re(Cn[a], e);
        break;
      case "image":
        re("error", e), re("load", e);
        break;
      case "details":
        re("toggle", e);
        break;
      case "embed":
      case "source":
      case "link":
        re("error", e), re("load", e);
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (j in l)
          if (l.hasOwnProperty(j) && (a = l[j], a != null))
            switch (j) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(s(137, t));
              default:
                je(e, t, j, a, l, null);
            }
        return;
      default:
        if (Hi(t)) {
          for (z in l)
            l.hasOwnProperty(z) && (a = l[z], a !== void 0 && Tr(
              e,
              t,
              z,
              a,
              l,
              void 0
            ));
          return;
        }
    }
    for (d in l)
      l.hasOwnProperty(d) && (a = l[d], a != null && je(e, t, d, a, l, null));
  }
  function m1(e, t, l, a) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var n = null, u = null, r = null, d = null, h = null, j = null, z = null;
        for (E in l) {
          var O = l[E];
          if (l.hasOwnProperty(E) && O != null)
            switch (E) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                h = O;
              default:
                a.hasOwnProperty(E) || je(e, t, E, null, a, O);
            }
        }
        for (var N in a) {
          var E = a[N];
          if (O = l[N], a.hasOwnProperty(N) && (E != null || O != null))
            switch (N) {
              case "type":
                u = E;
                break;
              case "name":
                n = E;
                break;
              case "checked":
                j = E;
                break;
              case "defaultChecked":
                z = E;
                break;
              case "value":
                r = E;
                break;
              case "defaultValue":
                d = E;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (E != null)
                  throw Error(s(137, t));
                break;
              default:
                E !== O && je(
                  e,
                  t,
                  N,
                  E,
                  a,
                  O
                );
            }
        }
        ki(
          e,
          r,
          d,
          h,
          j,
          z,
          u,
          n
        );
        return;
      case "select":
        E = r = d = N = null;
        for (u in l)
          if (h = l[u], l.hasOwnProperty(u) && h != null)
            switch (u) {
              case "value":
                break;
              case "multiple":
                E = h;
              default:
                a.hasOwnProperty(u) || je(
                  e,
                  t,
                  u,
                  null,
                  a,
                  h
                );
            }
        for (n in a)
          if (u = a[n], h = l[n], a.hasOwnProperty(n) && (u != null || h != null))
            switch (n) {
              case "value":
                N = u;
                break;
              case "defaultValue":
                d = u;
                break;
              case "multiple":
                r = u;
              default:
                u !== h && je(
                  e,
                  t,
                  n,
                  u,
                  a,
                  h
                );
            }
        t = d, l = r, a = E, N != null ? ca(e, !!l, N, !1) : !!a != !!l && (t != null ? ca(e, !!l, t, !0) : ca(e, !!l, l ? [] : "", !1));
        return;
      case "textarea":
        E = N = null;
        for (d in l)
          if (n = l[d], l.hasOwnProperty(d) && n != null && !a.hasOwnProperty(d))
            switch (d) {
              case "value":
                break;
              case "children":
                break;
              default:
                je(e, t, d, null, a, n);
            }
        for (r in a)
          if (n = a[r], u = l[r], a.hasOwnProperty(r) && (n != null || u != null))
            switch (r) {
              case "value":
                N = n;
                break;
              case "defaultValue":
                E = n;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (n != null) throw Error(s(91));
                break;
              default:
                n !== u && je(e, t, r, n, a, u);
            }
        Hs(e, N, E);
        return;
      case "option":
        for (var Y in l)
          if (N = l[Y], l.hasOwnProperty(Y) && N != null && !a.hasOwnProperty(Y))
            switch (Y) {
              case "selected":
                e.selected = !1;
                break;
              default:
                je(
                  e,
                  t,
                  Y,
                  null,
                  a,
                  N
                );
            }
        for (h in a)
          if (N = a[h], E = l[h], a.hasOwnProperty(h) && N !== E && (N != null || E != null))
            switch (h) {
              case "selected":
                e.selected = N && typeof N != "function" && typeof N != "symbol";
                break;
              default:
                je(
                  e,
                  t,
                  h,
                  N,
                  a,
                  E
                );
            }
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var $ in l)
          N = l[$], l.hasOwnProperty($) && N != null && !a.hasOwnProperty($) && je(e, t, $, null, a, N);
        for (j in a)
          if (N = a[j], E = l[j], a.hasOwnProperty(j) && N !== E && (N != null || E != null))
            switch (j) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (N != null)
                  throw Error(s(137, t));
                break;
              default:
                je(
                  e,
                  t,
                  j,
                  N,
                  a,
                  E
                );
            }
        return;
      default:
        if (Hi(t)) {
          for (var Ne in l)
            N = l[Ne], l.hasOwnProperty(Ne) && N !== void 0 && !a.hasOwnProperty(Ne) && Tr(
              e,
              t,
              Ne,
              void 0,
              a,
              N
            );
          for (z in a)
            N = a[z], E = l[z], !a.hasOwnProperty(z) || N === E || N === void 0 && E === void 0 || Tr(
              e,
              t,
              z,
              N,
              a,
              E
            );
          return;
        }
    }
    for (var x in l)
      N = l[x], l.hasOwnProperty(x) && N != null && !a.hasOwnProperty(x) && je(e, t, x, null, a, N);
    for (O in a)
      N = a[O], E = l[O], !a.hasOwnProperty(O) || N === E || N == null && E == null || je(e, t, O, N, a, E);
  }
  function Xd(e) {
    switch (e) {
      case "css":
      case "script":
      case "font":
      case "img":
      case "image":
      case "input":
      case "link":
        return !0;
      default:
        return !1;
    }
  }
  function h1() {
    if (typeof performance.getEntriesByType == "function") {
      for (var e = 0, t = 0, l = performance.getEntriesByType("resource"), a = 0; a < l.length; a++) {
        var n = l[a], u = n.transferSize, r = n.initiatorType, d = n.duration;
        if (u && d && Xd(r)) {
          for (r = 0, d = n.responseEnd, a += 1; a < l.length; a++) {
            var h = l[a], j = h.startTime;
            if (j > d) break;
            var z = h.transferSize, O = h.initiatorType;
            z && Xd(O) && (h = h.responseEnd, r += z * (h < d ? 1 : (d - j) / (h - j)));
          }
          if (--a, t += 8 * (u + r) / (n.duration / 1e3), e++, 10 < e) break;
        }
      }
      if (0 < e) return t / e / 1e6;
    }
    return navigator.connection && (e = navigator.connection.downlink, typeof e == "number") ? e : 5;
  }
  var Er = null, _r = null;
  function $u(e) {
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  function Vd(e) {
    switch (e) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function Zd(e, t) {
    if (e === 0)
      switch (t) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return e === 1 && t === "foreignObject" ? 0 : e;
  }
  function zr(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var Cr = null;
  function p1() {
    var e = window.event;
    return e && e.type === "popstate" ? e === Cr ? !1 : (Cr = e, !0) : (Cr = null, !1);
  }
  var Kd = typeof setTimeout == "function" ? setTimeout : void 0, g1 = typeof clearTimeout == "function" ? clearTimeout : void 0, Jd = typeof Promise == "function" ? Promise : void 0, y1 = typeof queueMicrotask == "function" ? queueMicrotask : typeof Jd < "u" ? function(e) {
    return Jd.resolve(null).then(e).catch(v1);
  } : Kd;
  function v1(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function _l(e) {
    return e === "head";
  }
  function $d(e, t) {
    var l = t, a = 0;
    do {
      var n = l.nextSibling;
      if (e.removeChild(l), n && n.nodeType === 8)
        if (l = n.data, l === "/$" || l === "/&") {
          if (a === 0) {
            e.removeChild(n), La(t);
            return;
          }
          a--;
        } else if (l === "$" || l === "$?" || l === "$~" || l === "$!" || l === "&")
          a++;
        else if (l === "html")
          Mn(e.ownerDocument.documentElement);
        else if (l === "head") {
          l = e.ownerDocument.head, Mn(l);
          for (var u = l.firstChild; u; ) {
            var r = u.nextSibling, d = u.nodeName;
            u[Ka] || d === "SCRIPT" || d === "STYLE" || d === "LINK" && u.rel.toLowerCase() === "stylesheet" || l.removeChild(u), u = r;
          }
        } else
          l === "body" && Mn(e.ownerDocument.body);
      l = n;
    } while (l);
    La(t);
  }
  function Fd(e, t) {
    var l = e;
    e = 0;
    do {
      var a = l.nextSibling;
      if (l.nodeType === 1 ? t ? (l._stashedDisplay = l.style.display, l.style.display = "none") : (l.style.display = l._stashedDisplay || "", l.getAttribute("style") === "" && l.removeAttribute("style")) : l.nodeType === 3 && (t ? (l._stashedText = l.nodeValue, l.nodeValue = "") : l.nodeValue = l._stashedText || ""), a && a.nodeType === 8)
        if (l = a.data, l === "/$") {
          if (e === 0) break;
          e--;
        } else
          l !== "$" && l !== "$?" && l !== "$~" && l !== "$!" || e++;
      l = a;
    } while (l);
  }
  function Ar(e) {
    var t = e.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var l = t;
      switch (t = t.nextSibling, l.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          Ar(l), Ui(l);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (l.rel.toLowerCase() === "stylesheet") continue;
      }
      e.removeChild(l);
    }
  }
  function x1(e, t, l, a) {
    for (; e.nodeType === 1; ) {
      var n = l;
      if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!a && (e.nodeName !== "INPUT" || e.type !== "hidden"))
          break;
      } else if (a) {
        if (!e[Ka])
          switch (t) {
            case "meta":
              if (!e.hasAttribute("itemprop")) break;
              return e;
            case "link":
              if (u = e.getAttribute("rel"), u === "stylesheet" && e.hasAttribute("data-precedence"))
                break;
              if (u !== n.rel || e.getAttribute("href") !== (n.href == null || n.href === "" ? null : n.href) || e.getAttribute("crossorigin") !== (n.crossOrigin == null ? null : n.crossOrigin) || e.getAttribute("title") !== (n.title == null ? null : n.title))
                break;
              return e;
            case "style":
              if (e.hasAttribute("data-precedence")) break;
              return e;
            case "script":
              if (u = e.getAttribute("src"), (u !== (n.src == null ? null : n.src) || e.getAttribute("type") !== (n.type == null ? null : n.type) || e.getAttribute("crossorigin") !== (n.crossOrigin == null ? null : n.crossOrigin)) && u && e.hasAttribute("async") && !e.hasAttribute("itemprop"))
                break;
              return e;
            default:
              return e;
          }
      } else if (t === "input" && e.type === "hidden") {
        var u = n.name == null ? null : "" + n.name;
        if (n.type === "hidden" && e.getAttribute("name") === u)
          return e;
      } else return e;
      if (e = At(e.nextSibling), e === null) break;
    }
    return null;
  }
  function b1(e, t, l) {
    if (t === "") return null;
    for (; e.nodeType !== 3; )
      if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !l || (e = At(e.nextSibling), e === null)) return null;
    return e;
  }
  function Wd(e, t) {
    for (; e.nodeType !== 8; )
      if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !t || (e = At(e.nextSibling), e === null)) return null;
    return e;
  }
  function Mr(e) {
    return e.data === "$?" || e.data === "$~";
  }
  function Or(e) {
    return e.data === "$!" || e.data === "$?" && e.ownerDocument.readyState !== "loading";
  }
  function S1(e, t) {
    var l = e.ownerDocument;
    if (e.data === "$~") e._reactRetry = t;
    else if (e.data !== "$?" || l.readyState !== "loading")
      t();
    else {
      var a = function() {
        t(), l.removeEventListener("DOMContentLoaded", a);
      };
      l.addEventListener("DOMContentLoaded", a), e._reactRetry = a;
    }
  }
  function At(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (t = e.data, t === "$" || t === "$!" || t === "$?" || t === "$~" || t === "&" || t === "F!" || t === "F")
          break;
        if (t === "/$" || t === "/&") return null;
      }
    }
    return e;
  }
  var wr = null;
  function Id(e) {
    e = e.nextSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var l = e.data;
        if (l === "/$" || l === "/&") {
          if (t === 0)
            return At(e.nextSibling);
          t--;
        } else
          l !== "$" && l !== "$!" && l !== "$?" && l !== "$~" && l !== "&" || t++;
      }
      e = e.nextSibling;
    }
    return null;
  }
  function Pd(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var l = e.data;
        if (l === "$" || l === "$!" || l === "$?" || l === "$~" || l === "&") {
          if (t === 0) return e;
          t--;
        } else l !== "/$" && l !== "/&" || t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  function e0(e, t, l) {
    switch (t = $u(l), e) {
      case "html":
        if (e = t.documentElement, !e) throw Error(s(452));
        return e;
      case "head":
        if (e = t.head, !e) throw Error(s(453));
        return e;
      case "body":
        if (e = t.body, !e) throw Error(s(454));
        return e;
      default:
        throw Error(s(451));
    }
  }
  function Mn(e) {
    for (var t = e.attributes; t.length; )
      e.removeAttributeNode(t[0]);
    Ui(e);
  }
  var Mt = /* @__PURE__ */ new Map(), t0 = /* @__PURE__ */ new Set();
  function Fu(e) {
    return typeof e.getRootNode == "function" ? e.getRootNode() : e.nodeType === 9 ? e : e.ownerDocument;
  }
  var ul = H.d;
  H.d = {
    f: j1,
    r: N1,
    D: T1,
    C: E1,
    L: _1,
    m: z1,
    X: A1,
    S: C1,
    M: M1
  };
  function j1() {
    var e = ul.f(), t = Yu();
    return e || t;
  }
  function N1(e) {
    var t = na(e);
    t !== null && t.tag === 5 && t.type === "form" ? vf(t) : ul.r(e);
  }
  var ka = typeof document > "u" ? null : document;
  function l0(e, t, l) {
    var a = ka;
    if (a && typeof t == "string" && t) {
      var n = jt(t);
      n = 'link[rel="' + e + '"][href="' + n + '"]', typeof l == "string" && (n += '[crossorigin="' + l + '"]'), t0.has(n) || (t0.add(n), e = { rel: e, crossOrigin: l, href: t }, a.querySelector(n) === null && (t = a.createElement("link"), Je(t, "link", e), Ye(t), a.head.appendChild(t)));
    }
  }
  function T1(e) {
    ul.D(e), l0("dns-prefetch", e, null);
  }
  function E1(e, t) {
    ul.C(e, t), l0("preconnect", e, t);
  }
  function _1(e, t, l) {
    ul.L(e, t, l);
    var a = ka;
    if (a && e && t) {
      var n = 'link[rel="preload"][as="' + jt(t) + '"]';
      t === "image" && l && l.imageSrcSet ? (n += '[imagesrcset="' + jt(
        l.imageSrcSet
      ) + '"]', typeof l.imageSizes == "string" && (n += '[imagesizes="' + jt(
        l.imageSizes
      ) + '"]')) : n += '[href="' + jt(e) + '"]';
      var u = n;
      switch (t) {
        case "style":
          u = Ba(e);
          break;
        case "script":
          u = Ha(e);
      }
      Mt.has(u) || (e = A(
        {
          rel: "preload",
          href: t === "image" && l && l.imageSrcSet ? void 0 : e,
          as: t
        },
        l
      ), Mt.set(u, e), a.querySelector(n) !== null || t === "style" && a.querySelector(On(u)) || t === "script" && a.querySelector(wn(u)) || (t = a.createElement("link"), Je(t, "link", e), Ye(t), a.head.appendChild(t)));
    }
  }
  function z1(e, t) {
    ul.m(e, t);
    var l = ka;
    if (l && e) {
      var a = t && typeof t.as == "string" ? t.as : "script", n = 'link[rel="modulepreload"][as="' + jt(a) + '"][href="' + jt(e) + '"]', u = n;
      switch (a) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          u = Ha(e);
      }
      if (!Mt.has(u) && (e = A({ rel: "modulepreload", href: e }, t), Mt.set(u, e), l.querySelector(n) === null)) {
        switch (a) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (l.querySelector(wn(u)))
              return;
        }
        a = l.createElement("link"), Je(a, "link", e), Ye(a), l.head.appendChild(a);
      }
    }
  }
  function C1(e, t, l) {
    ul.S(e, t, l);
    var a = ka;
    if (a && e) {
      var n = ua(a).hoistableStyles, u = Ba(e);
      t = t || "default";
      var r = n.get(u);
      if (!r) {
        var d = { loading: 0, preload: null };
        if (r = a.querySelector(
          On(u)
        ))
          d.loading = 5;
        else {
          e = A(
            { rel: "stylesheet", href: e, "data-precedence": t },
            l
          ), (l = Mt.get(u)) && Dr(e, l);
          var h = r = a.createElement("link");
          Ye(h), Je(h, "link", e), h._p = new Promise(function(j, z) {
            h.onload = j, h.onerror = z;
          }), h.addEventListener("load", function() {
            d.loading |= 1;
          }), h.addEventListener("error", function() {
            d.loading |= 2;
          }), d.loading |= 4, Wu(r, t, a);
        }
        r = {
          type: "stylesheet",
          instance: r,
          count: 1,
          state: d
        }, n.set(u, r);
      }
    }
  }
  function A1(e, t) {
    ul.X(e, t);
    var l = ka;
    if (l && e) {
      var a = ua(l).hoistableScripts, n = Ha(e), u = a.get(n);
      u || (u = l.querySelector(wn(n)), u || (e = A({ src: e, async: !0 }, t), (t = Mt.get(n)) && Ur(e, t), u = l.createElement("script"), Ye(u), Je(u, "link", e), l.head.appendChild(u)), u = {
        type: "script",
        instance: u,
        count: 1,
        state: null
      }, a.set(n, u));
    }
  }
  function M1(e, t) {
    ul.M(e, t);
    var l = ka;
    if (l && e) {
      var a = ua(l).hoistableScripts, n = Ha(e), u = a.get(n);
      u || (u = l.querySelector(wn(n)), u || (e = A({ src: e, async: !0, type: "module" }, t), (t = Mt.get(n)) && Ur(e, t), u = l.createElement("script"), Ye(u), Je(u, "link", e), l.head.appendChild(u)), u = {
        type: "script",
        instance: u,
        count: 1,
        state: null
      }, a.set(n, u));
    }
  }
  function a0(e, t, l, a) {
    var n = (n = ie.current) ? Fu(n) : null;
    if (!n) throw Error(s(446));
    switch (e) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof l.precedence == "string" && typeof l.href == "string" ? (t = Ba(l.href), l = ua(
          n
        ).hoistableStyles, a = l.get(t), a || (a = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, l.set(t, a)), a) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (l.rel === "stylesheet" && typeof l.href == "string" && typeof l.precedence == "string") {
          e = Ba(l.href);
          var u = ua(
            n
          ).hoistableStyles, r = u.get(e);
          if (r || (n = n.ownerDocument || n, r = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, u.set(e, r), (u = n.querySelector(
            On(e)
          )) && !u._p && (r.instance = u, r.state.loading = 5), Mt.has(e) || (l = {
            rel: "preload",
            as: "style",
            href: l.href,
            crossOrigin: l.crossOrigin,
            integrity: l.integrity,
            media: l.media,
            hrefLang: l.hrefLang,
            referrerPolicy: l.referrerPolicy
          }, Mt.set(e, l), u || O1(
            n,
            e,
            l,
            r.state
          ))), t && a === null)
            throw Error(s(528, ""));
          return r;
        }
        if (t && a !== null)
          throw Error(s(529, ""));
        return null;
      case "script":
        return t = l.async, l = l.src, typeof l == "string" && t && typeof t != "function" && typeof t != "symbol" ? (t = Ha(l), l = ua(
          n
        ).hoistableScripts, a = l.get(t), a || (a = {
          type: "script",
          instance: null,
          count: 0,
          state: null
        }, l.set(t, a)), a) : { type: "void", instance: null, count: 0, state: null };
      default:
        throw Error(s(444, e));
    }
  }
  function Ba(e) {
    return 'href="' + jt(e) + '"';
  }
  function On(e) {
    return 'link[rel="stylesheet"][' + e + "]";
  }
  function n0(e) {
    return A({}, e, {
      "data-precedence": e.precedence,
      precedence: null
    });
  }
  function O1(e, t, l, a) {
    e.querySelector('link[rel="preload"][as="style"][' + t + "]") ? a.loading = 1 : (t = e.createElement("link"), a.preload = t, t.addEventListener("load", function() {
      return a.loading |= 1;
    }), t.addEventListener("error", function() {
      return a.loading |= 2;
    }), Je(t, "link", l), Ye(t), e.head.appendChild(t));
  }
  function Ha(e) {
    return '[src="' + jt(e) + '"]';
  }
  function wn(e) {
    return "script[async]" + e;
  }
  function u0(e, t, l) {
    if (t.count++, t.instance === null)
      switch (t.type) {
        case "style":
          var a = e.querySelector(
            'style[data-href~="' + jt(l.href) + '"]'
          );
          if (a)
            return t.instance = a, Ye(a), a;
          var n = A({}, l, {
            "data-href": l.href,
            "data-precedence": l.precedence,
            href: null,
            precedence: null
          });
          return a = (e.ownerDocument || e).createElement(
            "style"
          ), Ye(a), Je(a, "style", n), Wu(a, l.precedence, e), t.instance = a;
        case "stylesheet":
          n = Ba(l.href);
          var u = e.querySelector(
            On(n)
          );
          if (u)
            return t.state.loading |= 4, t.instance = u, Ye(u), u;
          a = n0(l), (n = Mt.get(n)) && Dr(a, n), u = (e.ownerDocument || e).createElement("link"), Ye(u);
          var r = u;
          return r._p = new Promise(function(d, h) {
            r.onload = d, r.onerror = h;
          }), Je(u, "link", a), t.state.loading |= 4, Wu(u, l.precedence, e), t.instance = u;
        case "script":
          return u = Ha(l.src), (n = e.querySelector(
            wn(u)
          )) ? (t.instance = n, Ye(n), n) : (a = l, (n = Mt.get(u)) && (a = A({}, l), Ur(a, n)), e = e.ownerDocument || e, n = e.createElement("script"), Ye(n), Je(n, "link", a), e.head.appendChild(n), t.instance = n);
        case "void":
          return null;
        default:
          throw Error(s(443, t.type));
      }
    else
      t.type === "stylesheet" && (t.state.loading & 4) === 0 && (a = t.instance, t.state.loading |= 4, Wu(a, l.precedence, e));
    return t.instance;
  }
  function Wu(e, t, l) {
    for (var a = l.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), n = a.length ? a[a.length - 1] : null, u = n, r = 0; r < a.length; r++) {
      var d = a[r];
      if (d.dataset.precedence === t) u = d;
      else if (u !== n) break;
    }
    u ? u.parentNode.insertBefore(e, u.nextSibling) : (t = l.nodeType === 9 ? l.head : l, t.insertBefore(e, t.firstChild));
  }
  function Dr(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.title == null && (e.title = t.title);
  }
  function Ur(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.integrity == null && (e.integrity = t.integrity);
  }
  var Iu = null;
  function i0(e, t, l) {
    if (Iu === null) {
      var a = /* @__PURE__ */ new Map(), n = Iu = /* @__PURE__ */ new Map();
      n.set(l, a);
    } else
      n = Iu, a = n.get(l), a || (a = /* @__PURE__ */ new Map(), n.set(l, a));
    if (a.has(e)) return a;
    for (a.set(e, null), l = l.getElementsByTagName(e), n = 0; n < l.length; n++) {
      var u = l[n];
      if (!(u[Ka] || u[Xe] || e === "link" && u.getAttribute("rel") === "stylesheet") && u.namespaceURI !== "http://www.w3.org/2000/svg") {
        var r = u.getAttribute(t) || "";
        r = e + r;
        var d = a.get(r);
        d ? d.push(u) : a.set(r, [u]);
      }
    }
    return a;
  }
  function c0(e, t, l) {
    e = e.ownerDocument || e, e.head.insertBefore(
      l,
      t === "title" ? e.querySelector("head > title") : null
    );
  }
  function w1(e, t, l) {
    if (l === 1 || t.itemProp != null) return !1;
    switch (e) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (typeof t.precedence != "string" || typeof t.href != "string" || t.href === "")
          break;
        return !0;
      case "link":
        if (typeof t.rel != "string" || typeof t.href != "string" || t.href === "" || t.onLoad || t.onError)
          break;
        switch (t.rel) {
          case "stylesheet":
            return e = t.disabled, typeof t.precedence == "string" && e == null;
          default:
            return !0;
        }
      case "script":
        if (t.async && typeof t.async != "function" && typeof t.async != "symbol" && !t.onLoad && !t.onError && t.src && typeof t.src == "string")
          return !0;
    }
    return !1;
  }
  function r0(e) {
    return !(e.type === "stylesheet" && (e.state.loading & 3) === 0);
  }
  function D1(e, t, l, a) {
    if (l.type === "stylesheet" && (typeof a.media != "string" || matchMedia(a.media).matches !== !1) && (l.state.loading & 4) === 0) {
      if (l.instance === null) {
        var n = Ba(a.href), u = t.querySelector(
          On(n)
        );
        if (u) {
          t = u._p, t !== null && typeof t == "object" && typeof t.then == "function" && (e.count++, e = Pu.bind(e), t.then(e, e)), l.state.loading |= 4, l.instance = u, Ye(u);
          return;
        }
        u = t.ownerDocument || t, a = n0(a), (n = Mt.get(n)) && Dr(a, n), u = u.createElement("link"), Ye(u);
        var r = u;
        r._p = new Promise(function(d, h) {
          r.onload = d, r.onerror = h;
        }), Je(u, "link", a), l.instance = u;
      }
      e.stylesheets === null && (e.stylesheets = /* @__PURE__ */ new Map()), e.stylesheets.set(l, t), (t = l.state.preload) && (l.state.loading & 3) === 0 && (e.count++, l = Pu.bind(e), t.addEventListener("load", l), t.addEventListener("error", l));
    }
  }
  var Rr = 0;
  function U1(e, t) {
    return e.stylesheets && e.count === 0 && ti(e, e.stylesheets), 0 < e.count || 0 < e.imgCount ? function(l) {
      var a = setTimeout(function() {
        if (e.stylesheets && ti(e, e.stylesheets), e.unsuspend) {
          var u = e.unsuspend;
          e.unsuspend = null, u();
        }
      }, 6e4 + t);
      0 < e.imgBytes && Rr === 0 && (Rr = 62500 * h1());
      var n = setTimeout(
        function() {
          if (e.waitingForImages = !1, e.count === 0 && (e.stylesheets && ti(e, e.stylesheets), e.unsuspend)) {
            var u = e.unsuspend;
            e.unsuspend = null, u();
          }
        },
        (e.imgBytes > Rr ? 50 : 800) + t
      );
      return e.unsuspend = l, function() {
        e.unsuspend = null, clearTimeout(a), clearTimeout(n);
      };
    } : null;
  }
  function Pu() {
    if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
      if (this.stylesheets) ti(this, this.stylesheets);
      else if (this.unsuspend) {
        var e = this.unsuspend;
        this.unsuspend = null, e();
      }
    }
  }
  var ei = null;
  function ti(e, t) {
    e.stylesheets = null, e.unsuspend !== null && (e.count++, ei = /* @__PURE__ */ new Map(), t.forEach(R1, e), ei = null, Pu.call(e));
  }
  function R1(e, t) {
    if (!(t.state.loading & 4)) {
      var l = ei.get(e);
      if (l) var a = l.get(null);
      else {
        l = /* @__PURE__ */ new Map(), ei.set(e, l);
        for (var n = e.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), u = 0; u < n.length; u++) {
          var r = n[u];
          (r.nodeName === "LINK" || r.getAttribute("media") !== "not all") && (l.set(r.dataset.precedence, r), a = r);
        }
        a && l.set(null, a);
      }
      n = t.instance, r = n.getAttribute("data-precedence"), u = l.get(r) || a, u === a && l.set(null, n), l.set(r, n), this.count++, a = Pu.bind(this), n.addEventListener("load", a), n.addEventListener("error", a), u ? u.parentNode.insertBefore(n, u.nextSibling) : (e = e.nodeType === 9 ? e.head : e, e.insertBefore(n, e.firstChild)), t.state.loading |= 4;
    }
  }
  var Dn = {
    $$typeof: k,
    Provider: null,
    Consumer: null,
    _currentValue: I,
    _currentValue2: I,
    _threadCount: 0
  };
  function k1(e, t, l, a, n, u, r, d, h) {
    this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Mi(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Mi(0), this.hiddenUpdates = Mi(null), this.identifierPrefix = a, this.onUncaughtError = n, this.onCaughtError = u, this.onRecoverableError = r, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = h, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function s0(e, t, l, a, n, u, r, d, h, j, z, O) {
    return e = new k1(
      e,
      t,
      l,
      r,
      h,
      j,
      z,
      O,
      d
    ), t = 1, u === !0 && (t |= 24), u = mt(3, null, null, t), e.current = u, u.stateNode = e, t = hc(), t.refCount++, e.pooledCache = t, t.refCount++, u.memoizedState = {
      element: a,
      isDehydrated: l,
      cache: t
    }, vc(u), e;
  }
  function o0(e) {
    return e ? (e = pa, e) : pa;
  }
  function f0(e, t, l, a, n, u) {
    n = o0(n), a.context === null ? a.context = n : a.pendingContext = n, a = pl(t), a.payload = { element: l }, u = u === void 0 ? null : u, u !== null && (a.callback = u), l = gl(e, a, t), l !== null && (rt(l, e, t), fn(l, e, t));
  }
  function d0(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var l = e.retryLane;
      e.retryLane = l !== 0 && l < t ? l : t;
    }
  }
  function kr(e, t) {
    d0(e, t), (e = e.alternate) && d0(e, t);
  }
  function m0(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = Yl(e, 67108864);
      t !== null && rt(t, e, 67108864), kr(e, 67108864);
    }
  }
  function h0(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = vt();
      t = Oi(t);
      var l = Yl(e, t);
      l !== null && rt(l, e, t), kr(e, t);
    }
  }
  var li = !0;
  function B1(e, t, l, a) {
    var n = C.T;
    C.T = null;
    var u = H.p;
    try {
      H.p = 2, Br(e, t, l, a);
    } finally {
      H.p = u, C.T = n;
    }
  }
  function H1(e, t, l, a) {
    var n = C.T;
    C.T = null;
    var u = H.p;
    try {
      H.p = 8, Br(e, t, l, a);
    } finally {
      H.p = u, C.T = n;
    }
  }
  function Br(e, t, l, a) {
    if (li) {
      var n = Hr(a);
      if (n === null)
        Nr(
          e,
          t,
          a,
          ai,
          l
        ), g0(e, a);
      else if (q1(
        n,
        e,
        t,
        l,
        a
      ))
        a.stopPropagation();
      else if (g0(e, a), t & 4 && -1 < L1.indexOf(e)) {
        for (; n !== null; ) {
          var u = na(n);
          if (u !== null)
            switch (u.tag) {
              case 3:
                if (u = u.stateNode, u.current.memoizedState.isDehydrated) {
                  var r = kl(u.pendingLanes);
                  if (r !== 0) {
                    var d = u;
                    for (d.pendingLanes |= 2, d.entangledLanes |= 2; r; ) {
                      var h = 1 << 31 - ft(r);
                      d.entanglements[1] |= h, r &= ~h;
                    }
                    Lt(u), (pe & 6) === 0 && (Lu = st() + 500, zn(0));
                  }
                }
                break;
              case 31:
              case 13:
                d = Yl(u, 2), d !== null && rt(d, u, 2), Yu(), kr(u, 2);
            }
          if (u = Hr(a), u === null && Nr(
            e,
            t,
            a,
            ai,
            l
          ), u === n) break;
          n = u;
        }
        n !== null && a.stopPropagation();
      } else
        Nr(
          e,
          t,
          a,
          null,
          l
        );
    }
  }
  function Hr(e) {
    return e = qi(e), Lr(e);
  }
  var ai = null;
  function Lr(e) {
    if (ai = null, e = aa(e), e !== null) {
      var t = p(e);
      if (t === null) e = null;
      else {
        var l = t.tag;
        if (l === 13) {
          if (e = T(t), e !== null) return e;
          e = null;
        } else if (l === 31) {
          if (e = _(t), e !== null) return e;
          e = null;
        } else if (l === 3) {
          if (t.stateNode.current.memoizedState.isDehydrated)
            return t.tag === 3 ? t.stateNode.containerInfo : null;
          e = null;
        } else t !== e && (e = null);
      }
    }
    return ai = e, null;
  }
  function p0(e) {
    switch (e) {
      case "beforetoggle":
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "toggle":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 2;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (Tm()) {
          case Ss:
            return 2;
          case js:
            return 8;
          case Zn:
          case Em:
            return 32;
          case Ns:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var qr = !1, zl = null, Cl = null, Al = null, Un = /* @__PURE__ */ new Map(), Rn = /* @__PURE__ */ new Map(), Ml = [], L1 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function g0(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        zl = null;
        break;
      case "dragenter":
      case "dragleave":
        Cl = null;
        break;
      case "mouseover":
      case "mouseout":
        Al = null;
        break;
      case "pointerover":
      case "pointerout":
        Un.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Rn.delete(t.pointerId);
    }
  }
  function kn(e, t, l, a, n, u) {
    return e === null || e.nativeEvent !== u ? (e = {
      blockedOn: t,
      domEventName: l,
      eventSystemFlags: a,
      nativeEvent: u,
      targetContainers: [n]
    }, t !== null && (t = na(t), t !== null && m0(t)), e) : (e.eventSystemFlags |= a, t = e.targetContainers, n !== null && t.indexOf(n) === -1 && t.push(n), e);
  }
  function q1(e, t, l, a, n) {
    switch (t) {
      case "focusin":
        return zl = kn(
          zl,
          e,
          t,
          l,
          a,
          n
        ), !0;
      case "dragenter":
        return Cl = kn(
          Cl,
          e,
          t,
          l,
          a,
          n
        ), !0;
      case "mouseover":
        return Al = kn(
          Al,
          e,
          t,
          l,
          a,
          n
        ), !0;
      case "pointerover":
        var u = n.pointerId;
        return Un.set(
          u,
          kn(
            Un.get(u) || null,
            e,
            t,
            l,
            a,
            n
          )
        ), !0;
      case "gotpointercapture":
        return u = n.pointerId, Rn.set(
          u,
          kn(
            Rn.get(u) || null,
            e,
            t,
            l,
            a,
            n
          )
        ), !0;
    }
    return !1;
  }
  function y0(e) {
    var t = aa(e.target);
    if (t !== null) {
      var l = p(t);
      if (l !== null) {
        if (t = l.tag, t === 13) {
          if (t = T(l), t !== null) {
            e.blockedOn = t, As(e.priority, function() {
              h0(l);
            });
            return;
          }
        } else if (t === 31) {
          if (t = _(l), t !== null) {
            e.blockedOn = t, As(e.priority, function() {
              h0(l);
            });
            return;
          }
        } else if (t === 3 && l.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = l.tag === 3 ? l.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function ni(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var l = Hr(e.nativeEvent);
      if (l === null) {
        l = e.nativeEvent;
        var a = new l.constructor(
          l.type,
          l
        );
        Li = a, l.target.dispatchEvent(a), Li = null;
      } else
        return t = na(l), t !== null && m0(t), e.blockedOn = l, !1;
      t.shift();
    }
    return !0;
  }
  function v0(e, t, l) {
    ni(e) && l.delete(t);
  }
  function Y1() {
    qr = !1, zl !== null && ni(zl) && (zl = null), Cl !== null && ni(Cl) && (Cl = null), Al !== null && ni(Al) && (Al = null), Un.forEach(v0), Rn.forEach(v0);
  }
  function ui(e, t) {
    e.blockedOn === t && (e.blockedOn = null, qr || (qr = !0, c.unstable_scheduleCallback(
      c.unstable_NormalPriority,
      Y1
    )));
  }
  var ii = null;
  function x0(e) {
    ii !== e && (ii = e, c.unstable_scheduleCallback(
      c.unstable_NormalPriority,
      function() {
        ii === e && (ii = null);
        for (var t = 0; t < e.length; t += 3) {
          var l = e[t], a = e[t + 1], n = e[t + 2];
          if (typeof a != "function") {
            if (Lr(a || l) === null)
              continue;
            break;
          }
          var u = na(l);
          u !== null && (e.splice(t, 3), t -= 3, Hc(
            u,
            {
              pending: !0,
              data: n,
              method: l.method,
              action: a
            },
            a,
            n
          ));
        }
      }
    ));
  }
  function La(e) {
    function t(h) {
      return ui(h, e);
    }
    zl !== null && ui(zl, e), Cl !== null && ui(Cl, e), Al !== null && ui(Al, e), Un.forEach(t), Rn.forEach(t);
    for (var l = 0; l < Ml.length; l++) {
      var a = Ml[l];
      a.blockedOn === e && (a.blockedOn = null);
    }
    for (; 0 < Ml.length && (l = Ml[0], l.blockedOn === null); )
      y0(l), l.blockedOn === null && Ml.shift();
    if (l = (e.ownerDocument || e).$$reactFormReplay, l != null)
      for (a = 0; a < l.length; a += 3) {
        var n = l[a], u = l[a + 1], r = n[lt] || null;
        if (typeof u == "function")
          r || x0(l);
        else if (r) {
          var d = null;
          if (u && u.hasAttribute("formAction")) {
            if (n = u, r = u[lt] || null)
              d = r.formAction;
            else if (Lr(n) !== null) continue;
          } else d = r.action;
          typeof d == "function" ? l[a + 1] = d : (l.splice(a, 3), a -= 3), x0(l);
        }
      }
  }
  function b0() {
    function e(u) {
      u.canIntercept && u.info === "react-transition" && u.intercept({
        handler: function() {
          return new Promise(function(r) {
            return n = r;
          });
        },
        focusReset: "manual",
        scroll: "manual"
      });
    }
    function t() {
      n !== null && (n(), n = null), a || setTimeout(l, 20);
    }
    function l() {
      if (!a && !navigation.transition) {
        var u = navigation.currentEntry;
        u && u.url != null && navigation.navigate(u.url, {
          state: u.getState(),
          info: "react-transition",
          history: "replace"
        });
      }
    }
    if (typeof navigation == "object") {
      var a = !1, n = null;
      return navigation.addEventListener("navigate", e), navigation.addEventListener("navigatesuccess", t), navigation.addEventListener("navigateerror", t), setTimeout(l, 100), function() {
        a = !0, navigation.removeEventListener("navigate", e), navigation.removeEventListener("navigatesuccess", t), navigation.removeEventListener("navigateerror", t), n !== null && (n(), n = null);
      };
    }
  }
  function Yr(e) {
    this._internalRoot = e;
  }
  ci.prototype.render = Yr.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(s(409));
    var l = t.current, a = vt();
    f0(l, a, e, t, null, null);
  }, ci.prototype.unmount = Yr.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      f0(e.current, 2, null, e, null, null), Yu(), t[la] = null;
    }
  };
  function ci(e) {
    this._internalRoot = e;
  }
  ci.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var t = Cs();
      e = { blockedOn: null, target: e, priority: t };
      for (var l = 0; l < Ml.length && t !== 0 && t < Ml[l].priority; l++) ;
      Ml.splice(l, 0, e), l === 0 && y0(e);
    }
  };
  var S0 = o.version;
  if (S0 !== "19.2.3")
    throw Error(
      s(
        527,
        S0,
        "19.2.3"
      )
    );
  H.findDOMNode = function(e) {
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function" ? Error(s(188)) : (e = Object.keys(e).join(","), Error(s(268, e)));
    return e = b(t), e = e !== null ? D(e) : null, e = e === null ? null : e.stateNode, e;
  };
  var G1 = {
    bundleType: 0,
    version: "19.2.3",
    rendererPackageName: "react-dom",
    currentDispatcherRef: C,
    reconcilerVersion: "19.2.3"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var ri = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!ri.isDisabled && ri.supportsFiber)
      try {
        Xa = ri.inject(
          G1
        ), ot = ri;
      } catch {
      }
  }
  return Bn.createRoot = function(e, t) {
    if (!m(e)) throw Error(s(299));
    var l = !1, a = "", n = Cf, u = Af, r = Mf;
    return t != null && (t.unstable_strictMode === !0 && (l = !0), t.identifierPrefix !== void 0 && (a = t.identifierPrefix), t.onUncaughtError !== void 0 && (n = t.onUncaughtError), t.onCaughtError !== void 0 && (u = t.onCaughtError), t.onRecoverableError !== void 0 && (r = t.onRecoverableError)), t = s0(
      e,
      1,
      !1,
      null,
      null,
      l,
      a,
      null,
      n,
      u,
      r,
      b0
    ), e[la] = t.current, jr(e), new Yr(t);
  }, Bn.hydrateRoot = function(e, t, l) {
    if (!m(e)) throw Error(s(299));
    var a = !1, n = "", u = Cf, r = Af, d = Mf, h = null;
    return l != null && (l.unstable_strictMode === !0 && (a = !0), l.identifierPrefix !== void 0 && (n = l.identifierPrefix), l.onUncaughtError !== void 0 && (u = l.onUncaughtError), l.onCaughtError !== void 0 && (r = l.onCaughtError), l.onRecoverableError !== void 0 && (d = l.onRecoverableError), l.formState !== void 0 && (h = l.formState)), t = s0(
      e,
      1,
      !0,
      t,
      l ?? null,
      a,
      n,
      h,
      u,
      r,
      d,
      b0
    ), t.context = o0(null), l = t.current, a = vt(), a = Oi(a), n = pl(a), n.callback = null, gl(l, n, a), l = a, t.current.lanes = l, Za(t, l), Lt(t), e[la] = t.current, jr(e), new ci(t);
  }, Bn.version = "19.2.3", Bn;
}
var A0;
function I1() {
  if (A0) return Qr.exports;
  A0 = 1;
  function c() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(c);
      } catch (o) {
        console.error(o);
      }
  }
  return c(), Qr.exports = W1(), Qr.exports;
}
var P1 = I1();
const e2 = /* @__PURE__ */ K0(P1);
var Kr = { exports: {} }, Hn = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var M0;
function t2() {
  if (M0) return Hn;
  M0 = 1;
  var c = Symbol.for("react.transitional.element"), o = Symbol.for("react.fragment");
  function f(s, m, p) {
    var T = null;
    if (p !== void 0 && (T = "" + p), m.key !== void 0 && (T = "" + m.key), "key" in m) {
      p = {};
      for (var _ in m)
        _ !== "key" && (p[_] = m[_]);
    } else p = m;
    return m = p.ref, {
      $$typeof: c,
      type: s,
      key: T,
      ref: m !== void 0 ? m : null,
      props: p
    };
  }
  return Hn.Fragment = o, Hn.jsx = f, Hn.jsxs = f, Hn;
}
var O0;
function l2() {
  return O0 || (O0 = 1, Kr.exports = t2()), Kr.exports;
}
var i = l2();
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const a2 = (c) => c.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), n2 = (c) => c.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (o, f, s) => s ? s.toUpperCase() : f.toLowerCase()
), w0 = (c) => {
  const o = n2(c);
  return o.charAt(0).toUpperCase() + o.slice(1);
}, J0 = (...c) => c.filter((o, f, s) => !!o && o.trim() !== "" && s.indexOf(o) === f).join(" ").trim(), u2 = (c) => {
  for (const o in c)
    if (o.startsWith("aria-") || o === "role" || o === "title")
      return !0;
};
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var i2 = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const c2 = B.forwardRef(
  ({
    color: c = "currentColor",
    size: o = 24,
    strokeWidth: f = 2,
    absoluteStrokeWidth: s,
    className: m = "",
    children: p,
    iconNode: T,
    ..._
  }, v) => B.createElement(
    "svg",
    {
      ref: v,
      ...i2,
      width: o,
      height: o,
      stroke: c,
      strokeWidth: s ? Number(f) * 24 / Number(o) : f,
      className: J0("lucide", m),
      ...!p && !u2(_) && { "aria-hidden": "true" },
      ..._
    },
    [
      ...T.map(([b, D]) => B.createElement(b, D)),
      ...Array.isArray(p) ? p : [p]
    ]
  )
);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const J = (c, o) => {
  const f = B.forwardRef(
    ({ className: s, ...m }, p) => B.createElement(c2, {
      ref: p,
      iconNode: o,
      className: J0(
        `lucide-${a2(w0(c))}`,
        `lucide-${c}`,
        s
      ),
      ...m
    })
  );
  return f.displayName = w0(c), f;
};
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const r2 = [
  ["path", { d: "M12 17V3", key: "1cwfxf" }],
  ["path", { d: "m6 11 6 6 6-6", key: "12ii2o" }],
  ["path", { d: "M19 21H5", key: "150jfl" }]
], s2 = J("arrow-down-to-line", r2);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const o2 = [
  [
    "path",
    {
      d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",
      key: "k3hazp"
    }
  ]
], es = J("book", o2);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const f2 = [
  ["path", { d: "M12 8V4H8", key: "hb8ula" }],
  ["rect", { width: "16", height: "12", x: "4", y: "8", rx: "2", key: "enze0r" }],
  ["path", { d: "M2 14h2", key: "vft8re" }],
  ["path", { d: "M20 14h2", key: "4cs60a" }],
  ["path", { d: "M15 13v2", key: "1xurst" }],
  ["path", { d: "M9 13v2", key: "rq6x2g" }]
], $0 = J("bot", f2);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const d2 = [
  ["path", { d: "M12 18V5", key: "adv99a" }],
  ["path", { d: "M15 13a4.17 4.17 0 0 1-3-4 4.17 4.17 0 0 1-3 4", key: "1e3is1" }],
  ["path", { d: "M17.598 6.5A3 3 0 1 0 12 5a3 3 0 1 0-5.598 1.5", key: "1gqd8o" }],
  ["path", { d: "M17.997 5.125a4 4 0 0 1 2.526 5.77", key: "iwvgf7" }],
  ["path", { d: "M18 18a4 4 0 0 0 2-7.464", key: "efp6ie" }],
  ["path", { d: "M19.967 17.483A4 4 0 1 1 12 18a4 4 0 1 1-7.967-.517", key: "1gq6am" }],
  ["path", { d: "M6 18a4 4 0 0 1-2-7.464", key: "k1g0md" }],
  ["path", { d: "M6.003 5.125a4 4 0 0 0-2.526 5.77", key: "q97ue3" }]
], F0 = J("brain", d2);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const m2 = [
  ["rect", { width: "16", height: "20", x: "4", y: "2", rx: "2", key: "1nb95v" }],
  ["line", { x1: "8", x2: "16", y1: "6", y2: "6", key: "x4nwl0" }],
  ["line", { x1: "16", x2: "16", y1: "14", y2: "18", key: "wjye3r" }],
  ["path", { d: "M16 10h.01", key: "1m94wz" }],
  ["path", { d: "M12 10h.01", key: "1nrarc" }],
  ["path", { d: "M8 10h.01", key: "19clt8" }],
  ["path", { d: "M12 14h.01", key: "1etili" }],
  ["path", { d: "M8 14h.01", key: "6423bh" }],
  ["path", { d: "M12 18h.01", key: "mhygvu" }],
  ["path", { d: "M8 18h.01", key: "lrp35t" }]
], h2 = J("calculator", m2);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const p2 = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]], W0 = J("check", p2);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const g2 = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]], I0 = J("chevron-down", g2);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const y2 = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]], P0 = J("chevron-right", y2);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const v2 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["line", { x1: "12", x2: "12", y1: "8", y2: "12", key: "1pkeuh" }],
  ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16", key: "4dfq90" }]
], fs = J("circle-alert", v2);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const x2 = [
  ["path", { d: "M21.801 10A10 10 0 1 1 17 3.335", key: "yps3ct" }],
  ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }]
], ds = J("circle-check-big", x2);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const b2 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]
], S2 = J("circle-check", b2);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const j2 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m15 9-6 6", key: "1uzhvr" }],
  ["path", { d: "m9 9 6 6", key: "z0biqf" }]
], N2 = J("circle-x", j2);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const T2 = [
  ["path", { d: "M12 6v6l4 2", key: "mmk7yg" }],
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]
], em = J("clock", T2);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const E2 = [
  ["path", { d: "M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z", key: "p7xjir" }]
], _2 = J("cloud", E2);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const z2 = [
  [
    "path",
    { d: "M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3", key: "11bfej" }
  ]
], C2 = J("command", z2);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const A2 = [
  ["rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2", key: "17jyea" }],
  ["path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2", key: "zix9uf" }]
], tm = J("copy", A2);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const M2 = [
  ["path", { d: "M20 4v7a4 4 0 0 1-4 4H4", key: "6o5b7l" }],
  ["path", { d: "m9 10-5 5 5 5", key: "1kshq7" }]
], D0 = J("corner-down-left", M2);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const O2 = [
  ["path", { d: "M12 20v2", key: "1lh1kg" }],
  ["path", { d: "M12 2v2", key: "tus03m" }],
  ["path", { d: "M17 20v2", key: "1rnc9c" }],
  ["path", { d: "M17 2v2", key: "11trls" }],
  ["path", { d: "M2 12h2", key: "1t8f8n" }],
  ["path", { d: "M2 17h2", key: "7oei6x" }],
  ["path", { d: "M2 7h2", key: "asdhe0" }],
  ["path", { d: "M20 12h2", key: "1q8mjw" }],
  ["path", { d: "M20 17h2", key: "1fpfkl" }],
  ["path", { d: "M20 7h2", key: "1o8tra" }],
  ["path", { d: "M7 20v2", key: "4gnj0m" }],
  ["path", { d: "M7 2v2", key: "1i4yhu" }],
  ["rect", { x: "4", y: "4", width: "16", height: "16", rx: "2", key: "1vbyd7" }],
  ["rect", { x: "8", y: "8", width: "8", height: "8", rx: "1", key: "z9xiuo" }]
], ms = J("cpu", O2);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const w2 = [
  ["ellipse", { cx: "12", cy: "5", rx: "9", ry: "3", key: "msslwz" }],
  ["path", { d: "M3 5V19A9 3 0 0 0 21 19V5", key: "1wlel7" }],
  ["path", { d: "M3 12A9 3 0 0 0 21 12", key: "mv7ke4" }]
], D2 = J("database", w2);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const U2 = [
  ["path", { d: "M12 15V3", key: "m9g1x1" }],
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
  ["path", { d: "m7 10 5 5 5-5", key: "brsn70" }]
], lm = J("download", U2);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const R2 = [
  ["path", { d: "M15 3h6v6", key: "1q9fwt" }],
  ["path", { d: "M10 14 21 3", key: "gplh6r" }],
  ["path", { d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6", key: "a6xqqp" }]
], k2 = J("external-link", R2);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const B2 = [
  [
    "path",
    {
      d: "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",
      key: "1oefj6"
    }
  ],
  ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5", key: "wfsgrz" }],
  ["path", { d: "M10 9H8", key: "b1mrlr" }],
  ["path", { d: "M16 13H8", key: "t4e002" }],
  ["path", { d: "M16 17H8", key: "z1uh3a" }]
], Gn = J("file-text", B2);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const H2 = [
  [
    "path",
    {
      d: "M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z",
      key: "sc7q7i"
    }
  ]
], U0 = J("funnel", H2);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const L2 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20", key: "13o1zl" }],
  ["path", { d: "M2 12h20", key: "9i4pu4" }]
], q2 = J("globe", L2);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Y2 = [
  ["line", { x1: "4", x2: "20", y1: "9", y2: "9", key: "4lhtct" }],
  ["line", { x1: "4", x2: "20", y1: "15", y2: "15", key: "vyu0kd" }],
  ["line", { x1: "10", x2: "8", y1: "3", y2: "21", key: "1ggp8o" }],
  ["line", { x1: "16", x2: "14", y1: "3", y2: "21", key: "weycgp" }]
], G2 = J("hash", Y2);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Q2 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 16v-4", key: "1dtifu" }],
  ["path", { d: "M12 8h.01", key: "e9boi3" }]
], X2 = J("info", Q2);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const V2 = [
  ["path", { d: "m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4", key: "g0fldk" }],
  ["path", { d: "m21 2-9.6 9.6", key: "1j0ho8" }],
  ["circle", { cx: "7.5", cy: "15.5", r: "5.5", key: "yqb3hr" }]
], Yn = J("key", V2);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Z2 = [
  [
    "path",
    {
      d: "M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",
      key: "zw3jo"
    }
  ],
  [
    "path",
    {
      d: "M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",
      key: "1wduqc"
    }
  ],
  [
    "path",
    {
      d: "M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",
      key: "kqbvx6"
    }
  ]
], am = J("layers", Z2);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const K2 = [
  ["rect", { width: "7", height: "9", x: "3", y: "3", rx: "1", key: "10lvy0" }],
  ["rect", { width: "7", height: "5", x: "14", y: "3", rx: "1", key: "16une8" }],
  ["rect", { width: "7", height: "9", x: "14", y: "12", rx: "1", key: "1hutg5" }],
  ["rect", { width: "7", height: "5", x: "3", y: "16", rx: "1", key: "ldoo1y" }]
], J2 = J("layout-dashboard", K2);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $2 = [
  ["path", { d: "M3 5h.01", key: "18ugdj" }],
  ["path", { d: "M3 12h.01", key: "nlz23k" }],
  ["path", { d: "M3 19h.01", key: "noohij" }],
  ["path", { d: "M8 5h13", key: "1pao27" }],
  ["path", { d: "M8 12h13", key: "1za7za" }],
  ["path", { d: "M8 19h13", key: "m83p4d" }]
], nm = J("list", $2);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const F2 = [["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]], um = J("loader-circle", F2);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const W2 = [
  ["path", { d: "M4 5h16", key: "1tepv9" }],
  ["path", { d: "M4 12h16", key: "1lakjw" }],
  ["path", { d: "M4 19h16", key: "1djgab" }]
], I2 = J("menu", W2);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const P2 = [
  [
    "path",
    {
      d: "M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",
      key: "kfwtm"
    }
  ]
], ep = J("moon", P2);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const tp = [
  ["rect", { x: "16", y: "16", width: "6", height: "6", rx: "1", key: "4q2zg0" }],
  ["rect", { x: "2", y: "16", width: "6", height: "6", rx: "1", key: "8cvhb9" }],
  ["rect", { x: "9", y: "2", width: "6", height: "6", rx: "1", key: "1egb70" }],
  ["path", { d: "M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3", key: "1jsf9p" }],
  ["path", { d: "M12 12V8", key: "2874zd" }]
], hs = J("network", tp);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const lp = [
  [
    "path",
    {
      d: "M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z",
      key: "e79jfc"
    }
  ],
  ["circle", { cx: "13.5", cy: "6.5", r: ".5", fill: "currentColor", key: "1okk4w" }],
  ["circle", { cx: "17.5", cy: "10.5", r: ".5", fill: "currentColor", key: "f64h9f" }],
  ["circle", { cx: "6.5", cy: "12.5", r: ".5", fill: "currentColor", key: "qy21gx" }],
  ["circle", { cx: "8.5", cy: "7.5", r: ".5", fill: "currentColor", key: "fotxhn" }]
], ap = J("palette", lp);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const np = [
  ["rect", { x: "14", y: "3", width: "5", height: "18", rx: "1", key: "kaeet6" }],
  ["rect", { x: "5", y: "3", width: "5", height: "18", rx: "1", key: "1wsw3u" }]
], up = J("pause", np);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ip = [
  [
    "path",
    {
      d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
      key: "1a8usu"
    }
  ]
], cp = J("pen", ip);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const rp = [
  [
    "path",
    {
      d: "M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",
      key: "10ikf1"
    }
  ]
], im = J("play", rp);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const sp = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
], ps = J("plus", sp);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const op = [
  ["path", { d: "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8", key: "v9h5vc" }],
  ["path", { d: "M21 3v5h-5", key: "1q7to0" }],
  ["path", { d: "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16", key: "3uifl3" }],
  ["path", { d: "M8 16H3v5", key: "1cv678" }]
], gi = J("refresh-cw", op);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const fp = [
  ["path", { d: "M17 3v10", key: "15fgeh" }],
  ["path", { d: "m12.67 5.5 8.66 5", key: "1gpheq" }],
  ["path", { d: "m12.67 10.5 8.66-5", key: "1dkfa6" }],
  [
    "path",
    { d: "M9 17a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-2z", key: "swwfx4" }
  ]
], cm = J("regex", fp);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const dp = [
  [
    "path",
    {
      d: "M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",
      key: "1c8476"
    }
  ],
  ["path", { d: "M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7", key: "1ydtos" }],
  ["path", { d: "M7 3v4a1 1 0 0 0 1 1h7", key: "t51u73" }]
], mp = J("save", dp);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const hp = [
  ["circle", { cx: "6", cy: "6", r: "3", key: "1lh9wr" }],
  ["path", { d: "M8.12 8.12 12 12", key: "1alkpv" }],
  ["path", { d: "M20 4 8.12 15.88", key: "xgtan2" }],
  ["circle", { cx: "6", cy: "18", r: "3", key: "fqmcym" }],
  ["path", { d: "M14.8 14.8 20 20", key: "ptml3r" }]
], Jr = J("scissors", hp);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const pp = [
  ["path", { d: "m21 21-4.34-4.34", key: "14j7rj" }],
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }]
], ts = J("search", pp);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const gp = [
  [
    "path",
    {
      d: "M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",
      key: "1ffxy3"
    }
  ],
  ["path", { d: "m21.854 2.147-10.94 10.939", key: "12cjpa" }]
], yp = J("send", gp);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const vp = [
  ["rect", { width: "20", height: "8", x: "2", y: "2", rx: "2", ry: "2", key: "ngkwjq" }],
  ["rect", { width: "20", height: "8", x: "2", y: "14", rx: "2", ry: "2", key: "iecqi9" }],
  ["line", { x1: "6", x2: "6.01", y1: "6", y2: "6", key: "16zg32" }],
  ["line", { x1: "6", x2: "6.01", y1: "18", y2: "18", key: "nzw8ys" }]
], rm = J("server", vp);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const xp = [
  [
    "path",
    {
      d: "M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",
      key: "1i5ecw"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
], ji = J("settings", xp);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const bp = [
  ["circle", { cx: "12", cy: "12", r: "4", key: "4exip2" }],
  ["path", { d: "M12 2v2", key: "tus03m" }],
  ["path", { d: "M12 20v2", key: "1lh1kg" }],
  ["path", { d: "m4.93 4.93 1.41 1.41", key: "149t6j" }],
  ["path", { d: "m17.66 17.66 1.41 1.41", key: "ptbguv" }],
  ["path", { d: "M2 12h2", key: "1t8f8n" }],
  ["path", { d: "M20 12h2", key: "1q8mjw" }],
  ["path", { d: "m6.34 17.66-1.41 1.41", key: "1m8zz5" }],
  ["path", { d: "m19.07 4.93-1.41 1.41", key: "1shlcs" }]
], Sp = J("sun", bp);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const jp = [
  ["path", { d: "M12 19h8", key: "baeox8" }],
  ["path", { d: "m4 17 6-6-6-6", key: "1yngyt" }]
], Ga = J("terminal", jp);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Np = [
  ["path", { d: "M10 11v6", key: "nco0om" }],
  ["path", { d: "M14 11v6", key: "outv1u" }],
  ["path", { d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6", key: "miytrc" }],
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2", key: "e791ji" }]
], Qn = J("trash-2", Np);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Tp = [
  ["path", { d: "M12 3v12", key: "1x0j5s" }],
  ["path", { d: "m17 8-5-5-5 5", key: "7q97r8" }],
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }]
], Ep = J("upload", Tp);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const _p = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
], sm = J("x", _p);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const zp = [
  [
    "path",
    {
      d: "M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",
      key: "1xq2db"
    }
  ]
], gs = J("zap", zp), ls = [
  // 导航命令
  {
    id: "nav-memory",
    icon: nm,
    label: "前往记忆流",
    description: "查看所有记忆片段的时间线",
    action: (c) => c("/memory"),
    keywords: ["memory", "stream", "timeline", "记忆"],
    type: "navigation"
  },
  {
    id: "nav-graph",
    icon: hs,
    label: "前往世界图谱",
    description: "探索实体关系可视化网络",
    action: (c) => c("/graph"),
    keywords: ["graph", "world", "map", "图谱"],
    type: "navigation"
  },
  {
    id: "nav-brain",
    icon: F0,
    label: "前往大脑控制台",
    description: "记忆操作、总结与向量化",
    action: (c) => c("/processing"),
    keywords: ["brain", "console", "summarize", "大脑"],
    type: "navigation"
  },
  {
    id: "nav-api",
    icon: Yn,
    label: "API 预设配置",
    description: "管理 LLM 连接设置",
    action: (c) => c("/api"),
    keywords: ["api", "config", "llm", "设置"],
    type: "navigation"
  },
  {
    id: "nav-dev",
    icon: Ga,
    label: "开发日志",
    description: "查看系统运行日志和状态",
    action: (c) => c("/dev"),
    keywords: ["dev", "log", "debug", "日志"],
    type: "navigation"
  },
  {
    id: "nav-settings",
    icon: ji,
    label: "系统设置",
    description: "调整 Engram 全局选项",
    action: (c) => c("/settings"),
    keywords: ["settings", "config", "option", "选项"],
    type: "navigation"
  }
];
function Cp(c) {
  const o = c.toLowerCase().trim();
  return o ? ls.filter((f) => {
    var s;
    return f.label.toLowerCase().includes(o) || ((s = f.description) == null ? void 0 : s.toLowerCase().includes(o)) || f.keywords.some((m) => m.toLowerCase().includes(o));
  }) : ls;
}
const Ap = {
  name: "Default",
  colors: {
    background: "oklch(0.9399 0.0203 345.6985)",
    // or pure white for minimalist
    foreground: "oklch(0.4712 0 0)",
    card: "oklch(0.9498 0.0500 86.8891)",
    cardForeground: "oklch(0.4712 0 0)",
    popover: "oklch(1.0000 0 0)",
    popoverForeground: "oklch(0.4712 0 0)",
    primary: "oklch(0.6209 0.1801 348.1385)",
    primaryForeground: "oklch(1.0000 0 0)",
    secondary: "oklch(0.8095 0.0694 198.1863)",
    secondaryForeground: "oklch(0.3211 0 0)",
    muted: "oklch(0.8800 0.0504 212.0952)",
    mutedForeground: "oklch(0.5795 0 0)",
    accent: "oklch(0.9195 0.0801 87.6670)",
    accentForeground: "oklch(0.3211 0 0)",
    destructive: "oklch(0.7091 0.1697 21.9551)",
    destructiveForeground: "oklch(1.0000 0 0)",
    border: "oklch(0.6209 0.1801 348.1385)",
    input: "oklch(0.9189 0 0)",
    ring: "oklch(0.7002 0.1597 350.7532)",
    chart1: "oklch(0.7002 0.1597 350.7532)",
    chart2: "oklch(0.8189 0.0799 212.0892)",
    chart3: "oklch(0.9195 0.0801 87.6670)",
    chart4: "oklch(0.7998 0.1110 348.1791)",
    chart5: "oklch(0.6197 0.1899 353.9091)",
    sidebar: "oklch(0.9140 0.0424 343.0913)",
    sidebarForeground: "oklch(0.3211 0 0)",
    sidebarPrimary: "oklch(0.6559 0.2118 354.3084)",
    sidebarPrimaryForeground: "oklch(1.0000 0 0)",
    sidebarAccent: "oklch(0.8228 0.1095 346.0184)",
    sidebarAccentForeground: "oklch(0.3211 0 0)",
    sidebarBorder: "oklch(0.9464 0.0327 307.1745)",
    sidebarRing: "oklch(0.6559 0.2118 354.3084)"
  },
  variables: {
    radius: "0.4rem"
  }
}, Mp = {
  name: "Default Dark",
  colors: {
    background: "oklch(0.2497 0.0305 234.1628)",
    foreground: "oklch(0.9306 0.0197 349.0785)",
    card: "oklch(0.2902 0.0299 233.5352)",
    cardForeground: "oklch(0.9306 0.0197 349.0785)",
    popover: "oklch(0.2902 0.0299 233.5352)",
    popoverForeground: "oklch(0.9306 0.0197 349.0785)",
    primary: "oklch(0.9195 0.0801 87.6670)",
    primaryForeground: "oklch(0.2497 0.0305 234.1628)",
    secondary: "oklch(0.7794 0.0803 4.1330)",
    secondaryForeground: "oklch(0.2497 0.0305 234.1628)",
    muted: "oklch(0.2713 0.0086 255.5780)",
    mutedForeground: "oklch(0.7794 0.0803 4.1330)",
    accent: "oklch(0.6699 0.0988 356.9762)",
    accentForeground: "oklch(0.9306 0.0197 349.0785)",
    destructive: "oklch(0.6702 0.1806 350.3599)",
    destructiveForeground: "oklch(0.2497 0.0305 234.1628)",
    border: "oklch(0.3907 0.0399 242.2181)",
    input: "oklch(0.3093 0.0305 232.0027)",
    ring: "oklch(0.6998 0.0896 201.8672)",
    chart1: "oklch(0.6998 0.0896 201.8672)",
    chart2: "oklch(0.7794 0.0803 4.1330)",
    chart3: "oklch(0.6699 0.0988 356.9762)",
    chart4: "oklch(0.4408 0.0702 217.0848)",
    chart5: "oklch(0.2713 0.0086 255.5780)",
    sidebar: "oklch(0.18 0.02 235.00)",
    // Darker than main background
    sidebarForeground: "oklch(0.96 0.01 260.00)",
    sidebarPrimary: "oklch(0.6559 0.2118 354.3084)",
    sidebarPrimaryForeground: "oklch(1.0000 0 0)",
    sidebarAccent: "oklch(0.25 0.05 235.00)",
    // Visible contrast
    sidebarAccentForeground: "oklch(1.00 0.00 0.00)",
    sidebarBorder: "oklch(0.25 0.03 235.00)",
    sidebarRing: "oklch(0.6559 0.2118 354.3084)"
  },
  variables: {
    radius: "0.4rem"
  }
}, Op = {
  name: "SillyTavern",
  colors: {
    background: "var(--SmartThemeBlurTintColor)",
    foreground: "var(--SmartThemeBodyColor)",
    card: "var(--SmartThemeBlurTintColor)",
    // Glass effect
    cardForeground: "var(--SmartThemeBodyColor)",
    popover: "var(--SmartThemeBlurTintColor)",
    popoverForeground: "var(--SmartThemeBodyColor)",
    primary: "var(--SmartThemeQuoteColor)",
    primaryForeground: "var(--SmartThemeBodyColor)",
    // or contrast color
    secondary: "var(--SmartThemeBorderColor)",
    // Using border as secondary bg
    secondaryForeground: "var(--SmartThemeBodyColor)",
    muted: "rgba(0,0,0,0.2)",
    // approximate muted
    mutedForeground: "rgba(255,255,255,0.5)",
    // approximate muted text
    accent: "var(--SmartThemeQuoteColor)",
    accentForeground: "var(--SmartThemeBodyColor)",
    destructive: "var(--SmartThemeBorderColor)",
    // fallback
    destructiveForeground: "var(--SmartThemeBodyColor)",
    border: "var(--SmartThemeBorderColor)",
    input: "var(--SmartThemeBorderColor)",
    ring: "var(--SmartThemeQuoteColor)",
    // Charts (fallback to accents or generated colors if ST doesn't have equivalents)
    chart1: "var(--SmartThemeQuoteColor)",
    chart2: "var(--SmartThemeQuoteColor)",
    chart3: "var(--SmartThemeQuoteColor)",
    chart4: "var(--SmartThemeQuoteColor)",
    chart5: "var(--SmartThemeQuoteColor)",
    sidebar: "var(--SmartThemeBlurTintColor)",
    sidebarForeground: "var(--SmartThemeBodyColor)",
    sidebarPrimary: "var(--SmartThemeQuoteColor)",
    sidebarPrimaryForeground: "var(--SmartThemeBodyColor)",
    sidebarAccent: "var(--SmartThemeBorderColor)",
    sidebarAccentForeground: "var(--SmartThemeBodyColor)",
    sidebarBorder: "var(--SmartThemeBorderColor)",
    sidebarRing: "var(--SmartThemeQuoteColor)"
  },
  variables: {
    radius: "0.4rem"
  }
}, wp = {
  name: "Odysseia",
  colors: {
    background: "oklch(0.20 0.05 320.00)",
    // Dark purple-ish background
    foreground: "oklch(0.95 0.02 320.00)",
    card: "oklch(0.25 0.05 320.00)",
    cardForeground: "oklch(0.95 0.02 320.00)",
    popover: "oklch(0.25 0.05 320.00)",
    popoverForeground: "oklch(0.95 0.02 320.00)",
    primary: "oklch(0.65 0.25 340.00)",
    // Vibrant pink
    primaryForeground: "oklch(1.00 0.00 0.00)",
    secondary: "oklch(0.35 0.10 320.00)",
    secondaryForeground: "oklch(0.98 0.01 320.00)",
    // Brighter white
    muted: "oklch(0.30 0.05 320.00)",
    mutedForeground: "oklch(0.85 0.02 320.00)",
    // Much brighter grey
    accent: "oklch(0.40 0.15 340.00)",
    accentForeground: "oklch(0.98 0.01 320.00)",
    // Brighter white
    destructive: "oklch(0.60 0.20 20.00)",
    destructiveForeground: "oklch(1.00 0.00 0.00)",
    border: "oklch(0.40 0.10 320.00)",
    input: "oklch(0.30 0.05 320.00)",
    ring: "oklch(0.65 0.25 340.00)",
    chart1: "oklch(0.65 0.25 340.00)",
    chart2: "oklch(0.60 0.20 280.00)",
    chart3: "oklch(0.55 0.15 240.00)",
    chart4: "oklch(0.50 0.10 200.00)",
    chart5: "oklch(0.45 0.05 160.00)",
    sidebar: "oklch(0.15 0.05 320.00)",
    // Darker than main background
    sidebarForeground: "oklch(0.98 0.01 320.00)",
    // Brighter white for sidebar icons
    sidebarPrimary: "oklch(0.65 0.25 340.00)",
    sidebarPrimaryForeground: "oklch(1.00 0.00 0.00)",
    sidebarAccent: "oklch(0.25 0.10 320.00)",
    // Visible contrast
    sidebarAccentForeground: "oklch(0.98 0.02 320.00)",
    sidebarBorder: "oklch(0.25 0.05 320.00)",
    sidebarRing: "oklch(0.65 0.25 340.00)"
  },
  variables: {
    radius: "0.5rem"
  }
}, Dp = {
  name: "Deep Space",
  colors: {
    background: "oklch(0.15 0.04 260.00)",
    // Deep blue-black
    foreground: "oklch(0.90 0.02 260.00)",
    card: "oklch(0.20 0.05 260.00)",
    cardForeground: "oklch(0.90 0.02 260.00)",
    popover: "oklch(0.20 0.05 260.00)",
    popoverForeground: "oklch(0.90 0.02 260.00)",
    primary: "oklch(0.60 0.20 250.00)",
    // Cyan/Blue
    primaryForeground: "oklch(0.10 0.02 260.00)",
    secondary: "oklch(0.30 0.08 260.00)",
    secondaryForeground: "oklch(0.95 0.01 260.00)",
    muted: "oklch(0.25 0.04 260.00)",
    mutedForeground: "oklch(0.80 0.04 260.00)",
    // Brighter grey
    accent: "oklch(0.35 0.10 250.00)",
    accentForeground: "oklch(0.95 0.01 260.00)",
    destructive: "oklch(0.60 0.20 20.00)",
    destructiveForeground: "oklch(0.95 0.02 260.00)",
    border: "oklch(0.35 0.08 260.00)",
    input: "oklch(0.25 0.05 260.00)",
    ring: "oklch(0.60 0.20 250.00)",
    chart1: "oklch(0.60 0.20 250.00)",
    chart2: "oklch(0.55 0.18 220.00)",
    chart3: "oklch(0.50 0.15 190.00)",
    chart4: "oklch(0.45 0.12 300.00)",
    chart5: "oklch(0.40 0.10 340.00)",
    sidebar: "oklch(0.10 0.03 260.00)",
    // Nearly black
    sidebarForeground: "oklch(0.95 0.01 260.00)",
    // Brighter white
    sidebarPrimary: "oklch(0.60 0.20 250.00)",
    sidebarPrimaryForeground: "oklch(0.10 0.02 260.00)",
    sidebarAccent: "oklch(0.20 0.08 260.00)",
    sidebarAccentForeground: "oklch(0.95 0.02 260.00)",
    sidebarBorder: "oklch(0.20 0.05 260.00)",
    sidebarRing: "oklch(0.60 0.20 250.00)"
  },
  variables: {
    radius: "0.3rem"
  }
}, mi = {
  odysseia: wp,
  deepSpace: Dp,
  sillytavern: Op,
  dark: Mp,
  // Keeping original as backup
  default: Ap
  // Keeping as 'Light' but user prefers others
}, $e = [];
for (let c = 0; c < 256; ++c)
  $e.push((c + 256).toString(16).slice(1));
function Up(c, o = 0) {
  return ($e[c[o + 0]] + $e[c[o + 1]] + $e[c[o + 2]] + $e[c[o + 3]] + "-" + $e[c[o + 4]] + $e[c[o + 5]] + "-" + $e[c[o + 6]] + $e[c[o + 7]] + "-" + $e[c[o + 8]] + $e[c[o + 9]] + "-" + $e[c[o + 10]] + $e[c[o + 11]] + $e[c[o + 12]] + $e[c[o + 13]] + $e[c[o + 14]] + $e[c[o + 15]]).toLowerCase();
}
let $r;
const Rp = new Uint8Array(16);
function kp() {
  if (!$r) {
    if (typeof crypto > "u" || !crypto.getRandomValues)
      throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
    $r = crypto.getRandomValues.bind(crypto);
  }
  return $r(Rp);
}
const Bp = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto), R0 = { randomUUID: Bp };
function Hp(c, o, f) {
  var m;
  c = c || {};
  const s = c.random ?? ((m = c.rng) == null ? void 0 : m.call(c)) ?? kp();
  if (s.length < 16)
    throw new Error("Random bytes length must be >= 16");
  return s[6] = s[6] & 15 | 64, s[8] = s[8] & 63 | 128, Up(s);
}
function Lp(c, o, f) {
  return R0.randomUUID && !c ? R0.randomUUID() : Hp(c);
}
var as = function(c, o) {
  return as = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(f, s) {
    f.__proto__ = s;
  } || function(f, s) {
    for (var m in s) Object.prototype.hasOwnProperty.call(s, m) && (f[m] = s[m]);
  }, as(c, o);
};
function Xn(c, o) {
  if (typeof o != "function" && o !== null)
    throw new TypeError("Class extends value " + String(o) + " is not a constructor or null");
  as(c, o);
  function f() {
    this.constructor = c;
  }
  c.prototype = o === null ? Object.create(o) : (f.prototype = o.prototype, new f());
}
function ns(c) {
  var o = typeof Symbol == "function" && Symbol.iterator, f = o && c[o], s = 0;
  if (f) return f.call(c);
  if (c && typeof c.length == "number") return {
    next: function() {
      return c && s >= c.length && (c = void 0), { value: c && c[s++], done: !c };
    }
  };
  throw new TypeError(o ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function us(c, o) {
  var f = typeof Symbol == "function" && c[Symbol.iterator];
  if (!f) return c;
  var s = f.call(c), m, p = [], T;
  try {
    for (; (o === void 0 || o-- > 0) && !(m = s.next()).done; ) p.push(m.value);
  } catch (_) {
    T = { error: _ };
  } finally {
    try {
      m && !m.done && (f = s.return) && f.call(s);
    } finally {
      if (T) throw T.error;
    }
  }
  return p;
}
function is(c, o, f) {
  if (f || arguments.length === 2) for (var s = 0, m = o.length, p; s < m; s++)
    (p || !(s in o)) && (p || (p = Array.prototype.slice.call(o, 0, s)), p[s] = o[s]);
  return c.concat(p || Array.prototype.slice.call(o));
}
function Yt(c) {
  return typeof c == "function";
}
function om(c) {
  var o = function(s) {
    Error.call(s), s.stack = new Error().stack;
  }, f = c(o);
  return f.prototype = Object.create(Error.prototype), f.prototype.constructor = f, f;
}
var Fr = om(function(c) {
  return function(f) {
    c(this), this.message = f ? f.length + ` errors occurred during unsubscription:
` + f.map(function(s, m) {
      return m + 1 + ") " + s.toString();
    }).join(`
  `) : "", this.name = "UnsubscriptionError", this.errors = f;
  };
});
function cs(c, o) {
  if (c) {
    var f = c.indexOf(o);
    0 <= f && c.splice(f, 1);
  }
}
var Ni = (function() {
  function c(o) {
    this.initialTeardown = o, this.closed = !1, this._parentage = null, this._finalizers = null;
  }
  return c.prototype.unsubscribe = function() {
    var o, f, s, m, p;
    if (!this.closed) {
      this.closed = !0;
      var T = this._parentage;
      if (T)
        if (this._parentage = null, Array.isArray(T))
          try {
            for (var _ = ns(T), v = _.next(); !v.done; v = _.next()) {
              var b = v.value;
              b.remove(this);
            }
          } catch (L) {
            o = { error: L };
          } finally {
            try {
              v && !v.done && (f = _.return) && f.call(_);
            } finally {
              if (o) throw o.error;
            }
          }
        else
          T.remove(this);
      var D = this.initialTeardown;
      if (Yt(D))
        try {
          D();
        } catch (L) {
          p = L instanceof Fr ? L.errors : [L];
        }
      var A = this._finalizers;
      if (A) {
        this._finalizers = null;
        try {
          for (var R = ns(A), X = R.next(); !X.done; X = R.next()) {
            var ee = X.value;
            try {
              k0(ee);
            } catch (L) {
              p = p ?? [], L instanceof Fr ? p = is(is([], us(p)), us(L.errors)) : p.push(L);
            }
          }
        } catch (L) {
          s = { error: L };
        } finally {
          try {
            X && !X.done && (m = R.return) && m.call(R);
          } finally {
            if (s) throw s.error;
          }
        }
      }
      if (p)
        throw new Fr(p);
    }
  }, c.prototype.add = function(o) {
    var f;
    if (o && o !== this)
      if (this.closed)
        k0(o);
      else {
        if (o instanceof c) {
          if (o.closed || o._hasParent(this))
            return;
          o._addParent(this);
        }
        (this._finalizers = (f = this._finalizers) !== null && f !== void 0 ? f : []).push(o);
      }
  }, c.prototype._hasParent = function(o) {
    var f = this._parentage;
    return f === o || Array.isArray(f) && f.includes(o);
  }, c.prototype._addParent = function(o) {
    var f = this._parentage;
    this._parentage = Array.isArray(f) ? (f.push(o), f) : f ? [f, o] : o;
  }, c.prototype._removeParent = function(o) {
    var f = this._parentage;
    f === o ? this._parentage = null : Array.isArray(f) && cs(f, o);
  }, c.prototype.remove = function(o) {
    var f = this._finalizers;
    f && cs(f, o), o instanceof c && o._removeParent(this);
  }, c.EMPTY = (function() {
    var o = new c();
    return o.closed = !0, o;
  })(), c;
})(), fm = Ni.EMPTY;
function dm(c) {
  return c instanceof Ni || c && "closed" in c && Yt(c.remove) && Yt(c.add) && Yt(c.unsubscribe);
}
function k0(c) {
  Yt(c) ? c() : c.unsubscribe();
}
var qp = {
  Promise: void 0
}, Yp = {
  setTimeout: function(c, o) {
    for (var f = [], s = 2; s < arguments.length; s++)
      f[s - 2] = arguments[s];
    return setTimeout.apply(void 0, is([c, o], us(f)));
  },
  clearTimeout: function(c) {
    return clearTimeout(c);
  },
  delegate: void 0
};
function Gp(c) {
  Yp.setTimeout(function() {
    throw c;
  });
}
function B0() {
}
function hi(c) {
  c();
}
var ys = (function(c) {
  Xn(o, c);
  function o(f) {
    var s = c.call(this) || this;
    return s.isStopped = !1, f ? (s.destination = f, dm(f) && f.add(s)) : s.destination = Vp, s;
  }
  return o.create = function(f, s, m) {
    return new rs(f, s, m);
  }, o.prototype.next = function(f) {
    this.isStopped || this._next(f);
  }, o.prototype.error = function(f) {
    this.isStopped || (this.isStopped = !0, this._error(f));
  }, o.prototype.complete = function() {
    this.isStopped || (this.isStopped = !0, this._complete());
  }, o.prototype.unsubscribe = function() {
    this.closed || (this.isStopped = !0, c.prototype.unsubscribe.call(this), this.destination = null);
  }, o.prototype._next = function(f) {
    this.destination.next(f);
  }, o.prototype._error = function(f) {
    try {
      this.destination.error(f);
    } finally {
      this.unsubscribe();
    }
  }, o.prototype._complete = function() {
    try {
      this.destination.complete();
    } finally {
      this.unsubscribe();
    }
  }, o;
})(Ni), Qp = (function() {
  function c(o) {
    this.partialObserver = o;
  }
  return c.prototype.next = function(o) {
    var f = this.partialObserver;
    if (f.next)
      try {
        f.next(o);
      } catch (s) {
        si(s);
      }
  }, c.prototype.error = function(o) {
    var f = this.partialObserver;
    if (f.error)
      try {
        f.error(o);
      } catch (s) {
        si(s);
      }
    else
      si(o);
  }, c.prototype.complete = function() {
    var o = this.partialObserver;
    if (o.complete)
      try {
        o.complete();
      } catch (f) {
        si(f);
      }
  }, c;
})(), rs = (function(c) {
  Xn(o, c);
  function o(f, s, m) {
    var p = c.call(this) || this, T;
    return Yt(f) || !f ? T = {
      next: f ?? void 0,
      error: s ?? void 0,
      complete: m ?? void 0
    } : T = f, p.destination = new Qp(T), p;
  }
  return o;
})(ys);
function si(c) {
  Gp(c);
}
function Xp(c) {
  throw c;
}
var Vp = {
  closed: !0,
  next: B0,
  error: Xp,
  complete: B0
}, Zp = (function() {
  return typeof Symbol == "function" && Symbol.observable || "@@observable";
})();
function Kp(c) {
  return c;
}
function Jp(c) {
  return c.length === 0 ? Kp : c.length === 1 ? c[0] : function(f) {
    return c.reduce(function(s, m) {
      return m(s);
    }, f);
  };
}
var H0 = (function() {
  function c(o) {
    o && (this._subscribe = o);
  }
  return c.prototype.lift = function(o) {
    var f = new c();
    return f.source = this, f.operator = o, f;
  }, c.prototype.subscribe = function(o, f, s) {
    var m = this, p = Fp(o) ? o : new rs(o, f, s);
    return hi(function() {
      var T = m, _ = T.operator, v = T.source;
      p.add(_ ? _.call(p, v) : v ? m._subscribe(p) : m._trySubscribe(p));
    }), p;
  }, c.prototype._trySubscribe = function(o) {
    try {
      return this._subscribe(o);
    } catch (f) {
      o.error(f);
    }
  }, c.prototype.forEach = function(o, f) {
    var s = this;
    return f = L0(f), new f(function(m, p) {
      var T = new rs({
        next: function(_) {
          try {
            o(_);
          } catch (v) {
            p(v), T.unsubscribe();
          }
        },
        error: p,
        complete: m
      });
      s.subscribe(T);
    });
  }, c.prototype._subscribe = function(o) {
    var f;
    return (f = this.source) === null || f === void 0 ? void 0 : f.subscribe(o);
  }, c.prototype[Zp] = function() {
    return this;
  }, c.prototype.pipe = function() {
    for (var o = [], f = 0; f < arguments.length; f++)
      o[f] = arguments[f];
    return Jp(o)(this);
  }, c.prototype.toPromise = function(o) {
    var f = this;
    return o = L0(o), new o(function(s, m) {
      var p;
      f.subscribe(function(T) {
        return p = T;
      }, function(T) {
        return m(T);
      }, function() {
        return s(p);
      });
    });
  }, c.create = function(o) {
    return new c(o);
  }, c;
})();
function L0(c) {
  var o;
  return (o = c ?? qp.Promise) !== null && o !== void 0 ? o : Promise;
}
function $p(c) {
  return c && Yt(c.next) && Yt(c.error) && Yt(c.complete);
}
function Fp(c) {
  return c && c instanceof ys || $p(c) && dm(c);
}
function Wp(c) {
  return Yt(c == null ? void 0 : c.lift);
}
function Ip(c) {
  return function(o) {
    if (Wp(o))
      return o.lift(function(f) {
        try {
          return c(f, this);
        } catch (s) {
          this.error(s);
        }
      });
    throw new TypeError("Unable to lift unknown Observable type");
  };
}
function Pp(c, o, f, s, m) {
  return new eg(c, o, f, s, m);
}
var eg = (function(c) {
  Xn(o, c);
  function o(f, s, m, p, T, _) {
    var v = c.call(this, f) || this;
    return v.onFinalize = T, v.shouldUnsubscribe = _, v._next = s ? function(b) {
      try {
        s(b);
      } catch (D) {
        f.error(D);
      }
    } : c.prototype._next, v._error = p ? function(b) {
      try {
        p(b);
      } catch (D) {
        f.error(D);
      } finally {
        this.unsubscribe();
      }
    } : c.prototype._error, v._complete = m ? function() {
      try {
        m();
      } catch (b) {
        f.error(b);
      } finally {
        this.unsubscribe();
      }
    } : c.prototype._complete, v;
  }
  return o.prototype.unsubscribe = function() {
    var f;
    if (!this.shouldUnsubscribe || this.shouldUnsubscribe()) {
      var s = this.closed;
      c.prototype.unsubscribe.call(this), !s && ((f = this.onFinalize) === null || f === void 0 || f.call(this));
    }
  }, o;
})(ys), tg = om(function(c) {
  return function() {
    c(this), this.name = "ObjectUnsubscribedError", this.message = "object unsubscribed";
  };
}), vs = (function(c) {
  Xn(o, c);
  function o() {
    var f = c.call(this) || this;
    return f.closed = !1, f.currentObservers = null, f.observers = [], f.isStopped = !1, f.hasError = !1, f.thrownError = null, f;
  }
  return o.prototype.lift = function(f) {
    var s = new q0(this, this);
    return s.operator = f, s;
  }, o.prototype._throwIfClosed = function() {
    if (this.closed)
      throw new tg();
  }, o.prototype.next = function(f) {
    var s = this;
    hi(function() {
      var m, p;
      if (s._throwIfClosed(), !s.isStopped) {
        s.currentObservers || (s.currentObservers = Array.from(s.observers));
        try {
          for (var T = ns(s.currentObservers), _ = T.next(); !_.done; _ = T.next()) {
            var v = _.value;
            v.next(f);
          }
        } catch (b) {
          m = { error: b };
        } finally {
          try {
            _ && !_.done && (p = T.return) && p.call(T);
          } finally {
            if (m) throw m.error;
          }
        }
      }
    });
  }, o.prototype.error = function(f) {
    var s = this;
    hi(function() {
      if (s._throwIfClosed(), !s.isStopped) {
        s.hasError = s.isStopped = !0, s.thrownError = f;
        for (var m = s.observers; m.length; )
          m.shift().error(f);
      }
    });
  }, o.prototype.complete = function() {
    var f = this;
    hi(function() {
      if (f._throwIfClosed(), !f.isStopped) {
        f.isStopped = !0;
        for (var s = f.observers; s.length; )
          s.shift().complete();
      }
    });
  }, o.prototype.unsubscribe = function() {
    this.isStopped = this.closed = !0, this.observers = this.currentObservers = null;
  }, Object.defineProperty(o.prototype, "observed", {
    get: function() {
      var f;
      return ((f = this.observers) === null || f === void 0 ? void 0 : f.length) > 0;
    },
    enumerable: !1,
    configurable: !0
  }), o.prototype._trySubscribe = function(f) {
    return this._throwIfClosed(), c.prototype._trySubscribe.call(this, f);
  }, o.prototype._subscribe = function(f) {
    return this._throwIfClosed(), this._checkFinalizedStatuses(f), this._innerSubscribe(f);
  }, o.prototype._innerSubscribe = function(f) {
    var s = this, m = this, p = m.hasError, T = m.isStopped, _ = m.observers;
    return p || T ? fm : (this.currentObservers = null, _.push(f), new Ni(function() {
      s.currentObservers = null, cs(_, f);
    }));
  }, o.prototype._checkFinalizedStatuses = function(f) {
    var s = this, m = s.hasError, p = s.thrownError, T = s.isStopped;
    m ? f.error(p) : T && f.complete();
  }, o.prototype.asObservable = function() {
    var f = new H0();
    return f.source = this, f;
  }, o.create = function(f, s) {
    return new q0(f, s);
  }, o;
})(H0), q0 = (function(c) {
  Xn(o, c);
  function o(f, s) {
    var m = c.call(this) || this;
    return m.destination = f, m.source = s, m;
  }
  return o.prototype.next = function(f) {
    var s, m;
    (m = (s = this.destination) === null || s === void 0 ? void 0 : s.next) === null || m === void 0 || m.call(s, f);
  }, o.prototype.error = function(f) {
    var s, m;
    (m = (s = this.destination) === null || s === void 0 ? void 0 : s.error) === null || m === void 0 || m.call(s, f);
  }, o.prototype.complete = function() {
    var f, s;
    (s = (f = this.destination) === null || f === void 0 ? void 0 : f.complete) === null || s === void 0 || s.call(f);
  }, o.prototype._subscribe = function(f) {
    var s, m;
    return (m = (s = this.source) === null || s === void 0 ? void 0 : s.subscribe(f)) !== null && m !== void 0 ? m : fm;
  }, o;
})(vs);
function lg(c, o) {
  return Ip(function(f, s) {
    var m = 0;
    f.subscribe(Pp(s, function(p) {
      return c.call(o, p, m++) && s.next(p);
    }));
  });
}
const oi = new vs(), ag = {
  /**
   * 发布事件
   */
  emit(c) {
    oi.next({
      ...c,
      timestamp: Date.now()
    });
  },
  /**
   * 订阅所有事件
   */
  subscribe(c) {
    const o = oi.subscribe(c);
    return {
      unsubscribe: () => o.unsubscribe()
    };
  },
  /**
   * 订阅特定类型的事件
   */
  on(c, o) {
    const f = oi.pipe(lg((s) => s.type === c)).subscribe((s) => o(s.payload));
    return {
      unsubscribe: () => f.unsubscribe()
    };
  },
  /**
   * 获取事件流（用于 RxJS 操作符）
   */
  asObservable() {
    return oi.asObservable();
  }
};
var ze = /* @__PURE__ */ ((c) => (c[c.DEBUG = 0] = "DEBUG", c[c.INFO = 1] = "INFO", c[c.SUCCESS = 2] = "SUCCESS", c[c.WARN = 3] = "WARN", c[c.ERROR = 4] = "ERROR", c))(ze || {});
const yi = {
  0: { label: "DEBUG", icon: "🔍", color: "#6c757d" },
  1: { label: "INFO", icon: "ℹ️", color: "#17a2b8" },
  2: { label: "SUCCESS", icon: "✅", color: "#28a745" },
  3: { label: "WARN", icon: "⚠️", color: "#ffc107" },
  4: { label: "ERROR", icon: "❌", color: "#dc3545" }
}, mm = {
  maxEntries: 5e3,
  minLevel: 0
  /* DEBUG */
}, hm = new vs();
let qt = [], Dl = { ...mm }, Wr = null;
async function vi() {
  if (!Wr) {
    const { db: c } = await import("./DexieDB-CK9niqrQ.js");
    Wr = c;
  }
  return Wr;
}
function ng(c) {
  return new Date(c).toTimeString().slice(0, 8);
}
async function qa(c, o, f, s) {
  if (c < Dl.minLevel) return;
  const m = {
    id: Lp(),
    timestamp: Date.now(),
    level: c,
    module: o,
    message: f,
    data: s
  };
  qt.push(m), hm.next(m);
  try {
    const p = await vi();
    await p.logs.add(m);
    const T = await p.logs.count();
    T > Dl.maxEntries && await ug(T - Dl.maxEntries);
  } catch (p) {
    console.error("[Engram/Logger] 日志持久化失败:", p);
  }
}
async function ug(c) {
  try {
    const o = await vi(), s = (await o.logs.orderBy("timestamp").limit(c).toArray()).map((m) => m.id);
    await o.logs.bulkDelete(s), qt = qt.slice(-Dl.maxEntries);
  } catch (o) {
    console.error("[Engram/Logger] 清理旧日志失败:", o);
  }
}
function ig() {
  ag.subscribe((c) => {
    const f = {
      INGESTION_START: ze.INFO,
      INGESTION_COMPLETE: ze.SUCCESS,
      ENTITY_CREATED: ze.INFO,
      MEMORY_STORED: ze.SUCCESS,
      RETRIEVAL_START: ze.DEBUG,
      RETRIEVAL_COMPLETE: ze.SUCCESS,
      CHAT_CHANGED: ze.INFO,
      MESSAGE_RECEIVED: ze.DEBUG
    }[c.type] ?? ze.DEBUG;
    qa(f, "EventBus", `${c.type}`, c.payload);
  });
}
const We = {
  /**
   * 初始化 Logger
   */
  async init(c) {
    c && (Dl = { ...Dl, ...c });
    try {
      qt = await (await vi()).logs.orderBy("timestamp").reverse().limit(Dl.maxEntries).toArray(), qt.reverse();
    } catch (o) {
      console.error("[Engram/Logger] 加载历史日志失败:", o), qt = [];
    }
    ig(), We.info("Logger", "Logger 初始化完成", { maxEntries: Dl.maxEntries });
  },
  /**
   * DEBUG 级别日志
   */
  debug(c, o, f) {
    qa(ze.DEBUG, c, o, f);
  },
  /**
   * INFO 级别日志
   */
  info(c, o, f) {
    qa(ze.INFO, c, o, f);
  },
  /**
   * SUCCESS 级别日志
   */
  success(c, o, f) {
    qa(ze.SUCCESS, c, o, f);
  },
  /**
   * WARN 级别日志
   */
  warn(c, o, f) {
    qa(ze.WARN, c, o, f);
  },
  /**
   * ERROR 级别日志
   */
  error(c, o, f) {
    qa(ze.ERROR, c, o, f);
  },
  /**
   * 获取所有缓存日志
   */
  getLogs() {
    return [...qt];
  },
  /**
   * 订阅新日志
   */
  subscribe(c) {
    const o = hm.subscribe(c);
    return () => o.unsubscribe();
  },
  /**
   * 清空所有日志
   */
  async clear() {
    try {
      await (await vi()).logs.clear(), qt = [], We.info("Logger", "日志已清空");
    } catch (c) {
      console.error("[Engram/Logger] 清空日志失败:", c);
    }
  },
  /**
   * 导出日志为 Markdown 格式
   */
  exportToMarkdown() {
    const c = /* @__PURE__ */ new Date();
    c.toISOString().slice(0, 10), c.toTimeString().slice(0, 8).replace(/:/g, "");
    const o = {
      [ze.DEBUG]: "DEBUG",
      [ze.INFO]: "INFO",
      [ze.SUCCESS]: "SUCCESS",
      [ze.WARN]: "WARN",
      [ze.ERROR]: "ERROR"
    };
    let f = `# Engram Debug Log

`;
    f += `- **导出时间**: ${c.toLocaleString("zh-CN")}
`, f += `- **版本**: 0.1.0
`, f += `- **日志条数**: ${qt.length}

`, f += `---

`, f += `## 日志记录

`, f += "```\n";
    for (const s of qt) {
      const m = ng(s.timestamp), p = o[s.level].padEnd(7), T = s.module.padEnd(16);
      if (f += `[${m}] [${T}] ${p} ${s.message}
`, s.data !== void 0) {
        const _ = JSON.stringify(s.data, null, 2).split(`
`).map((v) => `    ${v}`).join(`
`);
        f += `${_}
`;
      }
    }
    return f += "```\n", f;
  },
  /**
   * 获取导出文件名
   */
  getExportFilename() {
    const c = /* @__PURE__ */ new Date(), o = c.toISOString().slice(0, 10), f = c.toTimeString().slice(0, 8).replace(/:/g, "");
    return `engram_log_${o}_${f}.md`;
  }
}, cg = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  DEFAULT_LOGGER_CONFIG: mm,
  LogLevel: ze,
  LogLevelConfig: yi,
  Logger: We
}, Symbol.toStringTag, { value: "Module" }));
class Ya {
  /**
   * Load settings from SillyTavern global state
   */
  static loadSettings() {
    var o, f;
    try {
      const s = ((f = (o = window.SillyTavern) == null ? void 0 : o.extension_settings) == null ? void 0 : f[this.EXTENSION_NAME]) || {};
      return {
        theme: s.theme || "odysseia",
        // Default to new theme
        presets: s.presets || {},
        templates: s.templates || {},
        promptTemplates: s.promptTemplates || []
      };
    } catch (s) {
      return We.warn("SettingsManager", "Failed to load settings", s), { theme: "odysseia", presets: {}, templates: {}, promptTemplates: [] };
    }
  }
  /**
   * Get a specific setting value
   */
  static get(o) {
    return this.loadSettings()[o];
  }
  /**
   * Save a specific setting value
   */
  static set(o, f) {
    const s = this.loadSettings();
    s[o] = f, this.saveToST(s);
  }
  /**
   * 获取指定分类下已启用的提示词模板
   * @param category 模板分类
   * @returns 启用的模板，如果没有则返回 null
   */
  static getEnabledPromptTemplate(o) {
    return (this.get("promptTemplates") || []).find((s) => s.category === o && s.enabled) || null;
  }
  /**
   * Persist to SillyTavern extension_settings
   * This updates the global object immediately for local usage,
   * and debounces the server save call.
   */
  static saveToST(o) {
    window.SillyTavern && (window.SillyTavern.extension_settings || (window.SillyTavern.extension_settings = {}), window.SillyTavern.extension_settings[this.EXTENSION_NAME] = o, this.saveTimeout && clearTimeout(this.saveTimeout), this.saveTimeout = setTimeout(() => {
      this.pushToServer();
    }, 1e3));
  }
  /**
   * Push settings to server via ST API
   * Note: We use the generic extension settings save mechanism if available,
   * or rely on ST's auto-save if it observes the object. 
   * Usually ST requires manual trigger for extensions.js based extensions,
   * assuming they call `saveSettingsDebounced()` globally.
   */
  static pushToServer() {
    We.info("SettingsManager", "Persisting settings to server...");
    try {
      window.saveSettingsDebounced && window.saveSettingsDebounced();
    } catch (o) {
      We.error("SettingsManager", "Failed to save settings", o);
    }
  }
}
wl(Ya, "EXTENSION_NAME", "engram"), wl(Ya, "saveTimeout", null);
class Ul {
  /**
   * 初始化主题系统
   */
  static init() {
    this.injectStyles();
    let f = Ya.loadSettings().theme;
    f || (f = localStorage.getItem(this.STORAGE_KEY), f && Ya.set("theme", f));
    const s = mi[f] ? f : "odysseia";
    this.setTheme(s), We.info("ThemeManager", `主题系统初始化完成: ${s}`);
  }
  /**
   * 切换主题
   */
  static setTheme(o) {
    mi[o] || (We.warn("ThemeManager", `未知主题: ${o}, 回退到 default`), o = "default"), this.currentTheme = o, Ya.set("theme", o), localStorage.setItem(this.STORAGE_KEY, o), this.applyThemeVariables(o);
  }
  /**
   * 获取当前主题
   */
  static getTheme() {
    return this.currentTheme;
  }
  /**
   * 注入样式表 (dist/style.css)
   */
  static injectStyles() {
    const o = "engram-styles";
    if (document.getElementById(o)) return;
    const f = document.createElement("link");
    f.id = o, f.rel = "stylesheet", f.type = "text/css", f.href = `scripts/extensions/Engram_project/dist/style.css?v=${Date.now()}`, document.head.appendChild(f);
  }
  /**
   * 应用 CSS 变量到根元素
   */
  static applyThemeVariables(o) {
    const f = mi[o];
    if (!f) return;
    const s = document.documentElement, m = (T, _) => {
      s.style.setProperty(T, _);
    };
    Object.entries(f.colors).forEach(([T, _]) => {
      let v = `--${T.replace(/([A-Z])/g, "-$1").toLowerCase()}`;
      v = v.replace(/(\d+)/, "-$1"), m(v, _);
    }), Object.entries(f.variables).forEach(([T, _]) => {
      m(`--${T}`, _);
    }), o === "dark" || o === "sillytavern" && document.body.classList.contains("dark") ? s.classList.add("dark") : s.classList.remove("dark");
  }
}
wl(Ul, "STORAGE_KEY", "engram-theme"), wl(Ul, "currentTheme", "default");
const rg = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ThemeManager: Ul
}, Symbol.toStringTag, { value: "Module" })), pm = B.createContext(void 0);
function sg({ children: c }) {
  const [o, f] = B.useState(Ul.getTheme()), s = o === "dark", m = (p) => {
    Ul.setTheme(p), f(p);
  };
  return B.useEffect(() => {
    const p = Ul.getTheme();
    p !== o && f(p);
  }, []), /* @__PURE__ */ i.jsx(pm.Provider, { value: { theme: o, setTheme: m, isDarkMode: s }, children: c });
}
function og() {
  const c = B.useContext(pm);
  if (c === void 0)
    throw new Error("useTheme must be used within a ThemeProvider");
  return c;
}
const fg = ({ onNavigate: c }) => {
  const { setTheme: o } = og(), [f, s] = B.useState(""), [m, p] = B.useState(!1), [T, _] = B.useState(0), [v, b] = B.useState(ls), D = B.useRef(null), A = B.useRef(null), R = [
    {
      id: "theme-default",
      icon: Sp,
      label: "主题: 默认 (Engram)",
      description: "使用 Engram 默认的简约黑白/Paper 风格",
      action: () => o("default"),
      keywords: ["theme", "light", "default", "white", "主题"],
      type: "action"
    },
    {
      id: "theme-dark",
      icon: ep,
      label: "主题: 默认黑暗 (Dark)",
      description: "使用 Engram 默认的深色风格",
      action: () => o("dark"),
      keywords: ["theme", "dark", "black", "night", "主题"],
      type: "action"
    },
    {
      id: "theme-st",
      icon: ap,
      label: "主题: 跟随酒馆 (Inherit)",
      description: "继承 SillyTavern 当前的全局主题设置",
      action: () => o("sillytavern"),
      keywords: ["theme", "sillytavern", "match", "sync", "主题"],
      type: "action"
    }
  ];
  B.useEffect(() => {
    const L = Cp(f), P = f.toLowerCase().trim(), V = R.filter(
      (ue) => {
        var k;
        return !P || ue.label.toLowerCase().includes(P) || ((k = ue.description) == null ? void 0 : k.toLowerCase().includes(P)) || ue.keywords.some((ge) => ge.toLowerCase().includes(P));
      }
    );
    b([...L, ...V]), _(0);
  }, [f]), B.useEffect(() => {
    const L = (P) => {
      D.current && !D.current.contains(P.target) && p(!1);
    };
    return document.addEventListener("mousedown", L), () => document.removeEventListener("mousedown", L);
  }, []), B.useEffect(() => {
    const L = (P) => {
      var V;
      (P.metaKey || P.ctrlKey) && P.key === "k" && (P.preventDefault(), (V = A.current) == null || V.focus(), p(!0));
    };
    return window.addEventListener("keydown", L), () => window.removeEventListener("keydown", L);
  }, []);
  const X = (L) => {
    var V;
    if (!m) {
      (L.key === "ArrowDown" || L.key === "Enter") && p(!0);
      return;
    }
    const P = v.length + (f ? 1 : 0);
    switch (L.key) {
      case "ArrowDown":
        L.preventDefault(), _((ue) => (ue + 1) % P);
        break;
      case "ArrowUp":
        L.preventDefault(), _((ue) => (ue - 1 + P) % P);
        break;
      case "Enter":
        L.preventDefault(), ee();
        break;
      case "Escape":
        p(!1), (V = A.current) == null || V.blur();
        break;
    }
  }, ee = () => {
    v.length > 0 && T < v.length ? v[T].action(c) : f && (console.log("Searching memory for:", f), c("/memory")), p(!1), s("");
  };
  return /* @__PURE__ */ i.jsxs("div", { className: "relative w-full max-w-xl", ref: D, children: [
    /* @__PURE__ */ i.jsxs("div", { className: `flex items-center gap-2 px-3 py-2 bg-muted-50 border border-input rounded-md transition-all duration-200 ${m ? "ring-2 ring-ring border-transparent bg-background" : "hover:bg-muted-80"}`, children: [
      /* @__PURE__ */ i.jsx(ts, { size: 16, className: "text-muted-foreground shrink-0" }),
      /* @__PURE__ */ i.jsx(
        "input",
        {
          ref: A,
          type: "text",
          className: "flex-1 bg-transparent border-none outline-none text-foreground placeholder:text-muted-foreground text-sm",
          placeholder: "搜索命令、页面或记忆... (Cmd+K)",
          value: f,
          onChange: (L) => {
            s(L.target.value), p(!0);
          },
          onFocus: () => p(!0),
          onKeyDown: X
        }
      ),
      !f && /* @__PURE__ */ i.jsxs("div", { className: "flex items-center gap-1 px-1.5 py-0.5 rounded bg-muted text-muted-foreground text-[10px] font-mono border border-border", children: [
        /* @__PURE__ */ i.jsx(C2, { size: 10 }),
        "K"
      ] })
    ] }),
    m && /* @__PURE__ */ i.jsxs("div", { className: "absolute top-full left-0 right-0 mt-2 p-1 bg-popover-95 backdrop-blur-md border border-border rounded-lg shadow-lg z-50 animate-in fade-in zoom-in-95 duration-100", children: [
      v.length > 0 && /* @__PURE__ */ i.jsxs("div", { className: "py-1", children: [
        /* @__PURE__ */ i.jsx("div", { className: "px-2 py-1 text-[10px] font-bold text-muted-foreground uppercase tracking-wider", children: "功能与导航" }),
        v.map((L, P) => /* @__PURE__ */ i.jsxs(
          "div",
          {
            className: `flex items-center gap-3 px-2 py-2 rounded-md cursor-pointer transition-colors ${P === T ? "bg-accent text-accent-foreground" : "text-foreground hover:bg-muted-50"}`,
            onClick: () => {
              L.action(c), p(!1), s("");
            },
            children: [
              /* @__PURE__ */ i.jsx(L.icon, { size: 16, className: `shrink-0 ${P === T ? "text-primary" : "text-muted-foreground"}` }),
              /* @__PURE__ */ i.jsxs("div", { className: "flex-1 min-w-0", children: [
                /* @__PURE__ */ i.jsx("div", { className: "text-sm font-medium", children: L.label }),
                L.description && /* @__PURE__ */ i.jsx("div", { className: "text-xs text-muted-foreground truncate", children: L.description })
              ] }),
              P === T && /* @__PURE__ */ i.jsx(D0, { size: 14, className: "text-muted-foreground" })
            ]
          },
          L.id
        ))
      ] }),
      f && /* @__PURE__ */ i.jsxs("div", { className: "py-1 border-t border-border mt-1 pt-1", children: [
        /* @__PURE__ */ i.jsx("div", { className: "px-2 py-1 text-[10px] font-bold text-muted-foreground uppercase tracking-wider", children: "搜索" }),
        /* @__PURE__ */ i.jsxs(
          "div",
          {
            className: `flex items-center gap-3 px-2 py-2 rounded-md cursor-pointer transition-colors ${T === v.length ? "bg-accent text-accent-foreground" : "text-foreground hover:bg-muted-50"}`,
            onClick: () => {
              ee();
            },
            children: [
              /* @__PURE__ */ i.jsx(ts, { size: 16, className: `shrink-0 ${T === v.length ? "text-accent-foreground" : "text-muted-foreground"}` }),
              /* @__PURE__ */ i.jsxs("div", { className: "flex-1 min-w-0", children: [
                /* @__PURE__ */ i.jsxs("div", { className: "text-sm font-medium", children: [
                  '搜索记忆: "',
                  f,
                  '"'
                ] }),
                /* @__PURE__ */ i.jsx("div", { className: "text-xs text-muted-foreground", children: "在记忆流和图谱中搜索此关键词" })
              ] }),
              T === v.length && /* @__PURE__ */ i.jsx(D0, { size: 14, className: "text-muted-foreground" })
            ]
          }
        )
      ] }),
      v.length === 0 && !f && /* @__PURE__ */ i.jsx("div", { className: "px-4 py-8 text-center text-muted-foreground text-sm", children: "无需搜索，直接输入..." })
    ] })
  ] });
}, dg = ({
  onToggleSidebar: c,
  isMobile: o,
  onClose: f,
  onNavigate: s
}) => /* @__PURE__ */ i.jsxs("header", { className: "h-14 flex items-center justify-between px-4 border-b border-border bg-sidebar text-sidebar-foreground z-50 transition-colors duration-300", children: [
  /* @__PURE__ */ i.jsxs("div", { className: "flex items-center gap-3", children: [
    o && /* @__PURE__ */ i.jsx(
      "button",
      {
        className: "p-2 rounded-md hover:bg-accent hover:text-accent-foreground transition-colors",
        onClick: c,
        title: "菜单",
        children: /* @__PURE__ */ i.jsx(I2, { size: 20 })
      }
    ),
    /* @__PURE__ */ i.jsx("span", { className: "font-bold text-lg tracking-tight bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent", children: "Engram" })
  ] }),
  /* @__PURE__ */ i.jsx("div", { className: "flex-1 max-w-xl mx-4 flex justify-center", children: /* @__PURE__ */ i.jsx(fg, { onNavigate: s }) }),
  /* @__PURE__ */ i.jsx("div", { className: "flex items-center gap-2", children: /* @__PURE__ */ i.jsx(
    "button",
    {
      className: "p-2 rounded-md hover:bg-destructive hover:text-destructive-foreground transition-colors",
      onClick: f,
      title: "关闭",
      children: /* @__PURE__ */ i.jsx(sm, { size: 18 })
    }
  ) })
] }), mg = [
  { id: "dashboard", icon: J2, label: "仪表盘", path: "/dashboard" },
  { id: "memory", icon: nm, label: "记忆流", path: "/memory" },
  { id: "graph", icon: hs, label: "世界图谱", path: "/graph" },
  { id: "processing", icon: F0, label: "处理", path: "/processing" },
  { id: "api", icon: Yn, label: "API 预设", path: "/api" },
  { id: "dev", icon: Ga, label: "开发日志", path: "/dev" },
  { id: "settings", icon: ji, label: "设置", path: "/settings" }
], hg = ({
  currentPath: c,
  onNavigate: o,
  isOpen: f,
  onClose: s,
  isMobile: m
}) => {
  const p = (_) => {
    o(_.path), m && s();
  }, T = (_) => c.startsWith(_);
  return m && !f ? null : /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
    m && f && /* @__PURE__ */ i.jsx(
      "div",
      {
        className: "fixed inset-0 bg-background-80 backdrop-blur-sm z-40 md:hidden",
        onClick: s
      }
    ),
    /* @__PURE__ */ i.jsxs("nav", { className: `
                flex flex-col
                ${m ? "fixed inset-y-0 left-0 z-50 w-3/4 max-w-xs border-r shadow-lg transform transition-transform duration-300 ease-in-out" : "w-16 border-r"}
                ${m && !f ? "-translate-x-full" : ""}
                bg-sidebar text-sidebar-foreground border-sidebar-border
            `, children: [
      m && /* @__PURE__ */ i.jsxs("div", { className: "flex items-center justify-between p-4 border-b border-sidebar-border", children: [
        /* @__PURE__ */ i.jsx("span", { className: "font-semibold text-lg", children: "导航" }),
        /* @__PURE__ */ i.jsx(
          "button",
          {
            className: "p-2 rounded-md hover:bg-sidebar-accent hover:text-sidebar-accent-foreground transition-colors",
            onClick: s,
            children: /* @__PURE__ */ i.jsx(sm, { size: 18 })
          }
        )
      ] }),
      /* @__PURE__ */ i.jsx("ul", { className: "flex flex-col gap-4 p-2 mt-4 items-center w-full", children: mg.map((_) => /* @__PURE__ */ i.jsx("li", { className: "w-full flex justify-center", children: /* @__PURE__ */ i.jsxs(
        "button",
        {
          className: `
                                    flex items-center justify-center p-3 rounded-xl transition-all duration-300 group relative
                                    ${T(_.path) ? "bg-primary-20 text-primary shadow-[0_0_15px_rgba(0,0,0,0.2)]" : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"}
                                    ${m ? "w-full gap-3 px-4" : "w-10 h-10"}
                                `,
          onClick: () => p(_),
          title: _.label,
          children: [
            /* @__PURE__ */ i.jsx(_.icon, { size: 20, className: "transition-transform duration-300 group-hover:scale-110" }),
            m && /* @__PURE__ */ i.jsx("span", { className: "font-medium text-sm", children: _.label }),
            T(_.path) && !m && /* @__PURE__ */ i.jsx("span", { className: "absolute -right-2 top-1/2 -translate-y-1/2 w-1 h-4 bg-primary rounded-l-full shadow-[0_0_8px_var(--primary)]" })
          ]
        }
      ) }, _.id)) })
    ] })
  ] });
}, pg = ({
  children: c,
  currentPath: o,
  onNavigate: f,
  isSidebarOpen: s,
  onToggleSidebar: m,
  onCloseSidebar: p,
  isMobile: T,
  onClose: _
}) => /* @__PURE__ */ i.jsxs("div", { className: "fixed inset-0 z-[10000] flex flex-col h-full w-full bg-background text-foreground overflow-hidden font-sans", children: [
  /* @__PURE__ */ i.jsx(
    dg,
    {
      onToggleSidebar: m,
      isMobile: T,
      onClose: _,
      onNavigate: f
    }
  ),
  /* @__PURE__ */ i.jsxs("div", { className: "flex flex-1 min-h-0 overflow-hidden relative", children: [
    /* @__PURE__ */ i.jsx(
      hg,
      {
        currentPath: o,
        onNavigate: f,
        isOpen: s,
        onClose: p,
        isMobile: T
      }
    ),
    /* @__PURE__ */ i.jsx("main", { className: "flex-1 overflow-y-auto overflow-x-hidden p-4 min-w-0 min-h-0", children: c })
  ] })
] }), Ir = ({
  title: c,
  value: o,
  icon: f,
  subtext: s,
  highlight: m = !1
}) => /* @__PURE__ */ i.jsxs("div", { className: `flex-1 flex flex-col p-4 bg-card border border-border rounded-lg overflow-hidden relative transition-all duration-200 hover:shadow-md ${m ? "bg-primary-10 border-primary-30" : ""}`, children: [
  /* @__PURE__ */ i.jsxs("div", { className: "flex justify-between items-start mb-3", children: [
    /* @__PURE__ */ i.jsx("div", { className: `p-2 rounded-lg ${m ? "bg-primary-20 text-primary" : "bg-secondary text-secondary-foreground"}`, children: /* @__PURE__ */ i.jsx(f, { size: 20 }) }),
    m && /* @__PURE__ */ i.jsx("div", { className: "w-2 h-2 bg-green-500 rounded-full shadow-[0_0_8px_rgba(236,72,153,0.5)]" })
  ] }),
  /* @__PURE__ */ i.jsxs("div", { children: [
    /* @__PURE__ */ i.jsx("div", { className: "text-2xl font-bold text-foreground font-mono", children: o }),
    /* @__PURE__ */ i.jsx("div", { className: "text-[11px] text-muted-foreground font-semibold mt-1 tracking-[0.5px]", children: c }),
    s && /* @__PURE__ */ i.jsx("div", { className: "text-[10px] text-muted-foreground/70 mt-0.5", children: s })
  ] })
] });
function gg() {
  var c, o;
  try {
    return ((o = (c = window.SillyTavern) == null ? void 0 : c.getContext) == null ? void 0 : o.call(c)) || null;
  } catch (f) {
    return console.warn("[Engram] Failed to get ST context:", f), null;
  }
}
async function Y0() {
  const { Logger: c } = await Promise.resolve().then(() => cg);
  await c.init(), c.info("STBridge", "Engram 插件正在初始化...");
  try {
    const { checkTavernIntegration: f } = await import("./index-B5YIjqxu.js"), s = await f();
    c.info("TavernAPI", "酒馆接口对接状态", s);
  } catch (f) {
    c.warn("TavernAPI", "酒馆接口检查失败", { error: String(f) });
  }
  try {
    const { summarizerService: f } = await import("./index-DksWwR47.js");
    f.start();
    const s = f.getStatus();
    c.info("Summarizer", "服务已启动", s);
  } catch (f) {
    c.warn("Summarizer", "服务启动失败", { error: String(f) });
  }
  yg();
  const { ThemeManager: o } = await Promise.resolve().then(() => rg);
  o.init(), import("./diagnose-DpfKDk7M.js").then(({ runDiagnostics: f }) => f()), c.success("STBridge", "Engram 初始化完成 - Where memories leave their trace.");
}
const gm = '<svg viewBox="0 0 400 592" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M103.875908,522.166260 C75.225380,521.276611 55.289425,503.229828 52.249313,475.852142 C49.879883,454.514191 63.027035,433.000366 83.930901,424.858398 C88.449257,423.098541 89.857674,420.860199 89.801926,416.150269 C89.555420,395.322357 89.621246,374.489380 89.762306,353.659515 C89.787170,349.987000 88.728760,348.057556 85.120293,346.642609 C64.672897,338.625031 52.338894,320.951630 52.085896,299.869415 C51.832878,278.785156 63.730618,260.903198 84.118019,252.449951 C88.288918,250.720566 89.867378,248.680847 89.807304,244.052597 C89.539139,223.391968 89.589142,202.724701 89.796356,182.062561 C89.836380,178.071609 88.518524,176.326385 84.841705,174.787247 C57.730556,163.438416 45.530682,135.966721 55.436111,109.194000 C62.627293,89.757439 81.922821,76.710289 103.282494,76.841476 C124.355003,76.970901 143.082275,89.740875 149.993118,109.121849 C151.315979,112.831749 153.184799,113.869263 156.863403,113.853104 C186.192612,113.724319 215.522736,113.698357 244.851929,113.811600 C248.773117,113.826736 250.677307,112.652130 252.052902,108.765602 C259.013885,89.098465 278.589447,76.365829 300.503601,76.811897 C322.171844,77.252960 341.040283,91.132324 347.255371,111.201912 C356.569763,141.279358 340.344788,170.373184 309.893127,176.623123 C283.359375,182.068970 260.376740,167.450562 251.980011,145.670181 C250.492157,141.810806 248.818085,140.240295 244.552948,140.266785 C215.390915,140.447968 186.227219,140.357330 157.064072,140.375076 C154.628784,140.376556 151.855545,139.805771 151.141357,143.359161 C150.400787,147.043839 146.628937,150.064713 151.136917,154.478546 C184.592346,187.235229 217.778336,220.267349 250.982285,253.280014 C253.021469,255.307434 254.527191,255.254166 257.033264,254.047714 C276.199188,244.820953 294.752930,247.045853 310.978485,259.993408 C328.011017,273.584869 333.936798,292.106659 327.764038,313.282837 C321.779785,333.812378 307.254517,345.637268 286.367889,349.037231 C276.405396,350.658997 266.352570,349.443024 257.275055,344.363342 C254.265045,342.678986 252.301132,343.049744 249.903275,345.441406 C230.205368,365.088531 210.395386,384.623230 190.631638,404.204376 C177.732651,416.984222 164.859726,429.790344 151.962982,442.572388 C148.257980,446.244415 148.113403,452.901764 151.629196,456.671387 C152.707138,457.827148 154.029282,457.681976 155.328629,457.681946 C185.658203,457.681458 215.987854,457.631042 246.317261,457.695557 C249.355972,457.702026 250.687012,456.399414 251.717636,453.698944 C259.314423,433.793579 278.324493,420.868317 299.341309,421.146240 C320.526215,421.426361 339.575745,434.206421 346.686249,452.909271 C354.337341,473.034058 348.794159,495.642761 332.699371,509.956390 C307.061371,532.757202 263.380280,521.715210 251.978027,489.436371 C250.838303,486.209961 249.371201,484.953583 245.964813,484.962799 C216.302094,485.043304 186.639008,484.985840 156.976028,484.969330 C154.436981,484.967896 152.081528,484.923981 150.916916,488.054077 C142.892441,509.621246 126.842339,520.325989 103.875908,522.166260 M141.430466,266.110352 C145.394760,270.906738 148.503693,276.196198 150.388428,282.139069 C151.211502,284.734314 152.692291,285.770782 155.494156,285.760895 C179.139755,285.677429 202.787949,285.547394 226.430206,285.843811 C232.373352,285.918304 231.388184,281.058533 233.335602,278.254700 C235.007233,275.847992 233.916855,274.189880 232.000244,272.304352 C199.956863,240.780380 167.866821,209.301468 136.133682,177.467056 C131.183243,172.500824 127.483856,170.729507 121.013550,174.621368 C117.660522,176.638214 116.183739,178.155136 116.217278,182.042480 C116.398239,203.022598 116.444160,224.006012 116.243645,244.985474 C116.204666,249.064667 117.676285,250.918961 121.328865,252.228989 C128.972488,254.970444 135.505173,259.524170 141.430466,266.110352 M116.349434,377.499908 C116.351860,390.663696 116.870338,403.855377 116.161102,416.980713 C115.742699,424.723846 121.926743,423.801880 125.649162,426.262665 C129.080231,428.530792 130.798965,425.706268 132.741440,423.784821 C165.551407,391.329803 198.234940,358.745361 231.274231,326.525696 C235.764252,322.147095 232.377243,319.155212 231.599960,315.493317 C230.884583,312.123138 228.193359,312.382568 225.670288,312.382812 C202.675171,312.384949 179.679749,312.445435 156.685303,312.323212 C153.331955,312.305389 151.624329,313.386505 150.456299,316.584381 C145.119888,331.194611 135.004120,341.287384 120.496223,346.769958 C117.238434,348.001068 116.190170,349.706024 116.267418,353.006317 C116.450615,360.833862 116.340004,368.668243 116.349434,377.499908z"/></svg>';
function yg() {
  const c = document.querySelector("#top-settings-holder"), o = document.querySelector("#WI-SP-button");
  if (!c) {
    console.warn("[Engram] #top-settings-holder not found, fallback to floating orb"), vg();
    return;
  }
  const f = document.createElement("div");
  f.id = "engram-drawer", f.className = "drawer";
  const s = document.createElement("div");
  s.className = "drawer-toggle drawer-header";
  const m = document.createElement("div");
  m.id = "engram-drawer-icon", m.className = "drawer-icon fa-fw closedIcon", m.title = "Engram - 记忆操作系统", m.setAttribute("data-i18n", "[title]Engram - Memory OS"), m.innerHTML = gm, m.addEventListener("click", xi), s.appendChild(m), f.appendChild(s), o ? (c.insertBefore(f, o), console.log("[Engram] Top bar button injected before WI-SP-button")) : (c.appendChild(f), console.log("[Engram] Top bar button injected at end (WI-SP-button not found)"));
}
function vg() {
  const c = document.createElement("div");
  c.className = "fixed bottom-5 right-5 w-12 h-12 rounded-full cursor-pointer z-[9999] flex items-center justify-center transition-transform duration-200 bg-gradient-to-br from-orange-500 to-pink-500 shadow-[0_0_20px_rgba(249,115,22,0.5)] hover:scale-110 hover:shadow-[0_0_30px_rgba(249,115,22,0.7)] text-white", c.title = "Engram - 记忆操作系统", c.innerHTML = gm, c.addEventListener("click", xi), document.body.appendChild(c);
}
let ss = null;
function xg(c) {
  ss = c;
}
let Pr = !1, Ln = null, pi = null;
function xi() {
  Pr && Ln ? (pi && (pi.unmount(), pi = null), Ln.remove(), Ln = null, Pr = !1) : (Ln = bg(), document.body.appendChild(Ln), Pr = !0);
}
function bg() {
  var o;
  const c = document.createElement("div");
  return c.className = "fixed inset-0 w-full h-full z-[10000] flex flex-col bg-background text-foreground overflow-hidden", c.style.backgroundColor = "var(--background)", c.style.color = "var(--foreground)", c.id = "engram-panel-root", ss ? pi = ss(c, xi) : (c.innerHTML = `
            <div class="flex items-center justify-between p-4 border-b border-slate-400/20">
                <h2 class="m-0 text-lg text-slate-200 flex items-center gap-2">🧠 Engram</h2>
                <button class="bg-transparent border-none text-slate-400 text-2xl cursor-pointer p-1 hover:text-slate-200">&times;</button>
            </div>
            <div class="flex-1 overflow-auto p-5">
                <p style="color: #94a3b8;">React 渲染器未加载，请检查配置。</p>
            </div>
        `, (o = c.querySelector("button")) == null || o.addEventListener("click", xi)), c;
}
const Sg = (c) => {
  switch (c) {
    case 0:
      return "text-muted";
    case 1:
      return "text-primary";
    case 2:
      return "text-success";
    case 3:
      return "text-warning";
    case 4:
      return "text-error";
    default:
      return "text-primary";
  }
}, ym = ({ onNavigate: c }) => {
  const [o, f] = B.useState([]), [s, m] = B.useState(gg()), [p, T] = B.useState(0);
  B.useEffect(() => (f(We.getLogs().slice(0, 3)), We.subscribe((D) => {
    f((A) => [D, ...A].slice(0, 3));
  })), []), B.useEffect(() => {
    const b = setInterval(() => {
      T((D) => D + 1);
    }, 1e3);
    return () => clearInterval(b);
  }, []);
  const _ = (b) => {
    const D = Math.floor(b / 3600), A = Math.floor(b % 3600 / 60), R = b % 60;
    return `${D.toString().padStart(2, "0")}:${A.toString().padStart(2, "0")}:${R.toString().padStart(2, "0")}`;
  }, v = (s == null ? void 0 : s.name2) || "Unknown";
  return s != null && s.name1, /* @__PURE__ */ i.jsx("div", { className: "h-full overflow-y-auto p-6 [&::-webkit-scrollbar]:hidden", children: /* @__PURE__ */ i.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4 max-w-[1000px] mx-auto", children: [
    /* @__PURE__ */ i.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4 col-span-full", children: [
      /* @__PURE__ */ i.jsx(
        Ir,
        {
          title: "ACTIVE MODEL",
          value: s ? "Connected" : "Offline",
          subtext: s ? `Chatting with ${v}` : "Waiting for connection...",
          icon: rm,
          highlight: !!s
        }
      ),
      /* @__PURE__ */ i.jsx(
        Ir,
        {
          title: "MEMORY NODES",
          value: "0",
          subtext: "Graph Database",
          icon: D2
        }
      ),
      /* @__PURE__ */ i.jsx(
        Ir,
        {
          title: "SYSTEM UPTIME",
          value: _(p),
          subtext: "Session Duration",
          icon: ms
        }
      )
    ] }),
    /* @__PURE__ */ i.jsxs("div", { className: "flex flex-col bg-card border border-border rounded-lg overflow-hidden relative transition-all duration-200 hover:shadow-md", children: [
      /* @__PURE__ */ i.jsxs("div", { className: "flex items-center gap-2 p-4 text-xs font-bold tracking-widest text-muted-foreground border-b border-border", children: [
        /* @__PURE__ */ i.jsx(gs, { size: 16 }),
        /* @__PURE__ */ i.jsx("span", { children: "QUICK ACTIONS" })
      ] }),
      /* @__PURE__ */ i.jsxs("div", { className: "flex-1 grid grid-cols-4 gap-3 p-4", children: [
        /* @__PURE__ */ i.jsxs("button", { className: "flex flex-col items-center justify-center gap-2 bg-background border border-border rounded-xl cursor-pointer transition-all duration-200 text-secondary-foreground hover:bg-accent hover:-translate-y-0.5 hover:text-accent-foreground", onClick: () => c("/memory"), children: [
          /* @__PURE__ */ i.jsx("span", { className: "text-2xl", children: "📜" }),
          /* @__PURE__ */ i.jsx("span", { className: "text-xs font-medium", children: "Memory Stream" })
        ] }),
        /* @__PURE__ */ i.jsxs("button", { className: "flex flex-col items-center justify-center gap-2 bg-background border border-border rounded-xl cursor-pointer transition-all duration-200 text-secondary-foreground hover:bg-accent hover:-translate-y-0.5 hover:text-accent-foreground", onClick: () => c("/graph"), children: [
          /* @__PURE__ */ i.jsx("span", { className: "text-2xl", children: "🕸️" }),
          /* @__PURE__ */ i.jsx("span", { className: "text-xs font-medium", children: "Knowledge Graph" })
        ] }),
        /* @__PURE__ */ i.jsxs("button", { className: "flex flex-col items-center justify-center gap-2 bg-background border border-border rounded-xl cursor-pointer transition-all duration-200 text-secondary-foreground hover:bg-accent hover:-translate-y-0.5 hover:text-accent-foreground", onClick: () => c("/processing"), children: [
          /* @__PURE__ */ i.jsx("span", { className: "text-2xl", children: "🧠" }),
          /* @__PURE__ */ i.jsx("span", { className: "text-xs font-medium", children: "Brain Console" })
        ] }),
        /* @__PURE__ */ i.jsxs("button", { className: "flex flex-col items-center justify-center gap-2 bg-background border border-border rounded-xl cursor-pointer transition-all duration-200 text-secondary-foreground hover:bg-accent hover:-translate-y-0.5 hover:text-accent-foreground", onClick: () => c("/settings"), children: [
          /* @__PURE__ */ i.jsx("span", { className: "text-2xl", children: "⚙️" }),
          /* @__PURE__ */ i.jsx("span", { className: "text-xs font-medium", children: "Settings" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ i.jsxs("div", { className: "flex flex-col bg-card border border-border rounded-lg overflow-hidden relative transition-all duration-200 hover:shadow-md", children: [
      /* @__PURE__ */ i.jsxs("div", { className: "flex items-center gap-2 p-4 text-xs font-bold tracking-widest text-muted-foreground border-b border-border", children: [
        /* @__PURE__ */ i.jsx(Ga, { size: 16 }),
        /* @__PURE__ */ i.jsx("span", { children: "SYSTEM LOGS" }),
        /* @__PURE__ */ i.jsx("button", { className: "ml-auto text-[10px] text-primary bg-transparent border-none cursor-pointer opacity-80 hover:opacity-100 hover:underline", onClick: () => c("/dev"), children: "VIEW ALL" })
      ] }),
      /* @__PURE__ */ i.jsx("div", { className: "flex-1 p-3 font-mono text-[11px] bg-muted-20 overflow-hidden", children: o.length === 0 ? /* @__PURE__ */ i.jsx("div", { className: "text-muted-foreground text-center mt-5 italic", children: "No activity recorded" }) : o.map((b) => /* @__PURE__ */ i.jsxs("div", { className: `flex gap-2 mb-1.5 opacity-80 ${Sg(b.level)}`, children: [
        /* @__PURE__ */ i.jsxs("span", { className: "text-muted-foreground", children: [
          "[",
          new Date(b.timestamp).toLocaleTimeString([], { hour12: !1 }),
          "]"
        ] }),
        /* @__PURE__ */ i.jsx("span", { className: "text-foreground flex-1 min-w-0 whitespace-nowrap overflow-hidden text-ellipsis", children: b.message })
      ] }, b.id)) })
    ] })
  ] }) });
}, jg = () => /* @__PURE__ */ i.jsxs("div", { className: "engram-memory-stream", children: [
  /* @__PURE__ */ i.jsxs("div", { className: "engram-page-header", children: [
    /* @__PURE__ */ i.jsx(em, { size: 24 }),
    /* @__PURE__ */ i.jsx("h2", { children: "记忆流" })
  ] }),
  /* @__PURE__ */ i.jsx("div", { className: "engram-page-content", children: /* @__PURE__ */ i.jsx("p", { className: "engram-placeholder", children: "记忆时间轴将在这里展示..." }) })
] }), Ng = () => /* @__PURE__ */ i.jsxs("div", { className: "engram-graph-view", children: [
  /* @__PURE__ */ i.jsxs("div", { className: "engram-page-header", children: [
    /* @__PURE__ */ i.jsx(hs, { size: 24 }),
    /* @__PURE__ */ i.jsx("h2", { children: "世界图谱" })
  ] }),
  /* @__PURE__ */ i.jsx("div", { className: "engram-page-content", children: /* @__PURE__ */ i.jsx("p", { className: "engram-placeholder", children: "React Flow 图谱编辑器将在这里展示..." }) })
] }), Tg = [
  { id: "token", label: "Token 数", description: "总结内容达到 Token 上限时触发", icon: h2 },
  { id: "floor", label: "楼层数", description: "总结覆盖的楼层达到上限时触发", icon: am },
  { id: "count", label: "总结次数", description: "执行总结的次数达到上限时触发", icon: G2 }
], Eg = ({
  config: c,
  onChange: o
}) => {
  const f = () => {
    o({ ...c, enabled: !c.enabled });
  }, s = (p) => {
    o({ ...c, trigger: p });
  }, m = (p, T) => {
    o({ ...c, [p]: T });
  };
  return /* @__PURE__ */ i.jsxs("div", { className: "space-y-6", children: [
    /* @__PURE__ */ i.jsxs("div", { className: "flex items-center gap-3 mb-6", children: [
      /* @__PURE__ */ i.jsx(Jr, { className: "w-5 h-5 text-orange-400" }),
      /* @__PURE__ */ i.jsx("h3", { className: "text-lg font-medium text-white", children: "精简配置" })
    ] }),
    /* @__PURE__ */ i.jsxs("div", { className: "flex items-center justify-between p-4 rounded-lg bg-white/5 border border-white/10", children: [
      /* @__PURE__ */ i.jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ i.jsx(Jr, { className: "w-4 h-4 text-orange-400" }),
        /* @__PURE__ */ i.jsxs("div", { children: [
          /* @__PURE__ */ i.jsx("div", { className: "text-sm font-medium text-white", children: "启用精简" }),
          /* @__PURE__ */ i.jsx("div", { className: "text-xs text-white/50", children: "将多次总结压缩为更简洁的摘要" })
        ] })
      ] }),
      /* @__PURE__ */ i.jsx(
        "button",
        {
          type: "button",
          onClick: f,
          className: `relative w-11 h-6 rounded-full transition-colors ${c.enabled ? "bg-orange-500" : "bg-white/20"}`,
          children: /* @__PURE__ */ i.jsx(
            "span",
            {
              className: `absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white shadow transition-transform ${c.enabled ? "translate-x-5" : ""}`
            }
          )
        }
      )
    ] }),
    /* @__PURE__ */ i.jsxs("div", { className: c.enabled ? "" : "opacity-50 pointer-events-none", children: [
      /* @__PURE__ */ i.jsx("div", { className: "text-sm font-medium text-white mb-3", children: "触发条件" }),
      /* @__PURE__ */ i.jsx("div", { className: "grid grid-cols-3 gap-2", children: Tg.map((p) => /* @__PURE__ */ i.jsxs(
        "button",
        {
          type: "button",
          onClick: () => s(p.id),
          className: `flex flex-col items-center gap-2 p-3 rounded-lg border transition-colors ${c.trigger === p.id ? "border-orange-500 bg-orange-500/10 text-orange-400" : "border-white/10 bg-white/5 text-white/60 hover:border-white/20"}`,
          children: [
            qn.createElement(p.icon, { className: "w-5 h-5" }),
            /* @__PURE__ */ i.jsx("span", { className: "text-sm font-medium", children: p.label })
          ]
        },
        p.id
      )) })
    ] }),
    /* @__PURE__ */ i.jsxs("div", { className: c.enabled ? "" : "opacity-50 pointer-events-none", children: [
      /* @__PURE__ */ i.jsx("div", { className: "text-sm font-medium text-white mb-3", children: "阈值设置" }),
      c.trigger === "token" && /* @__PURE__ */ i.jsxs("div", { className: "p-4 rounded-lg bg-white/5 border border-white/10", children: [
        /* @__PURE__ */ i.jsxs("div", { className: "flex items-center justify-between mb-2", children: [
          /* @__PURE__ */ i.jsx("span", { className: "text-sm text-white", children: "Token 上限" }),
          /* @__PURE__ */ i.jsx("span", { className: "text-sm font-mono text-orange-400", children: c.tokenLimit })
        ] }),
        /* @__PURE__ */ i.jsx(
          "input",
          {
            type: "range",
            min: "1024",
            max: "16384",
            step: "512",
            value: c.tokenLimit,
            onChange: (p) => m("tokenLimit", Number(p.target.value)),
            className: "w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-orange-500"
          }
        ),
        /* @__PURE__ */ i.jsxs("div", { className: "flex justify-between text-xs text-white/40 mt-1", children: [
          /* @__PURE__ */ i.jsx("span", { children: "1K" }),
          /* @__PURE__ */ i.jsx("span", { children: "8K" }),
          /* @__PURE__ */ i.jsx("span", { children: "16K" })
        ] })
      ] }),
      c.trigger === "floor" && /* @__PURE__ */ i.jsxs("div", { className: "p-4 rounded-lg bg-white/5 border border-white/10", children: [
        /* @__PURE__ */ i.jsxs("div", { className: "flex items-center justify-between mb-2", children: [
          /* @__PURE__ */ i.jsx("span", { className: "text-sm text-white", children: "楼层上限" }),
          /* @__PURE__ */ i.jsx("span", { className: "text-sm font-mono text-orange-400", children: c.floorLimit })
        ] }),
        /* @__PURE__ */ i.jsx(
          "input",
          {
            type: "range",
            min: "10",
            max: "200",
            step: "10",
            value: c.floorLimit,
            onChange: (p) => m("floorLimit", Number(p.target.value)),
            className: "w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-orange-500"
          }
        ),
        /* @__PURE__ */ i.jsxs("div", { className: "flex justify-between text-xs text-white/40 mt-1", children: [
          /* @__PURE__ */ i.jsx("span", { children: "10" }),
          /* @__PURE__ */ i.jsx("span", { children: "100" }),
          /* @__PURE__ */ i.jsx("span", { children: "200" })
        ] })
      ] }),
      c.trigger === "count" && /* @__PURE__ */ i.jsxs("div", { className: "p-4 rounded-lg bg-white/5 border border-white/10", children: [
        /* @__PURE__ */ i.jsxs("div", { className: "flex items-center justify-between mb-2", children: [
          /* @__PURE__ */ i.jsx("span", { className: "text-sm text-white", children: "总结次数上限" }),
          /* @__PURE__ */ i.jsx("span", { className: "text-sm font-mono text-orange-400", children: c.countLimit })
        ] }),
        /* @__PURE__ */ i.jsx(
          "input",
          {
            type: "range",
            min: "2",
            max: "20",
            step: "1",
            value: c.countLimit,
            onChange: (p) => m("countLimit", Number(p.target.value)),
            className: "w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-orange-500"
          }
        ),
        /* @__PURE__ */ i.jsxs("div", { className: "flex justify-between text-xs text-white/40 mt-1", children: [
          /* @__PURE__ */ i.jsx("span", { children: "2" }),
          /* @__PURE__ */ i.jsx("span", { children: "10" }),
          /* @__PURE__ */ i.jsx("span", { children: "20" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ i.jsx("div", { className: c.enabled ? "" : "opacity-50 pointer-events-none", children: /* @__PURE__ */ i.jsxs(
      "button",
      {
        type: "button",
        className: `w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg font-medium transition-all
                        bg-orange-500 text-white hover:bg-orange-400 active:scale-95`,
        onClick: () => {
          console.log("手动触发精简...");
        },
        children: [
          /* @__PURE__ */ i.jsx(Jr, { className: "w-4 h-4" }),
          "手动精简"
        ]
      }
    ) }),
    /* @__PURE__ */ i.jsx("div", { className: "p-4 rounded-lg bg-orange-500/10 border border-orange-500/20", children: /* @__PURE__ */ i.jsxs("div", { className: "text-sm text-orange-300", children: [
      /* @__PURE__ */ i.jsx("strong", { children: "说明：" }),
      "精简会将多次总结内容使用 ",
      /* @__PURE__ */ i.jsx("code", { children: "trim" }),
      " 类型的提示词模板压缩为更简洁的摘要，减少 Token 消耗。"
    ] }) })
  ] });
}, bi = [
  { value: "text_summary", label: "纯文本总结", description: "将对话转为世界书条目" },
  { value: "vector_summary", label: "向量化总结", description: "输出结构化 JSON，含实体/关系" },
  { value: "trim", label: "精简/修剪", description: "合并、压缩旧的世界书条目" },
  { value: "query_enhance", label: "用户输入加强", description: "扩展用户输入，解决指代问题" }
], _g = {
  temperature: 0.7,
  topP: 0.95,
  maxTokens: 2048,
  frequencyPenalty: 0,
  presencePenalty: 0
}, zg = {
  maxChatHistory: 10,
  includeWorldInfo: !0,
  worldInfoBudget: 2048
}, Cg = {
  source: "transformers"
}, Ag = {
  enabled: !1,
  url: "",
  apiKey: "",
  model: "",
  topN: 5,
  hybridAlpha: 0.5
};
function vm(c = "默认预设") {
  const o = Date.now();
  return {
    id: `preset_${o}`,
    name: c,
    source: "tavern",
    parameters: { ..._g },
    context: { ...zg },
    isDefault: !0,
    createdAt: o,
    updatedAt: o
  };
}
function ea(c, o, f = {}) {
  const s = Date.now();
  return {
    id: `template_${s}_${Math.random().toString(36).slice(2, 8)}`,
    name: c,
    category: o,
    enabled: f.enabled ?? !1,
    isBuiltIn: f.isBuiltIn ?? !1,
    boundPresetId: f.boundPresetId ?? null,
    systemPrompt: f.systemPrompt ?? "",
    userPromptTemplate: f.userPromptTemplate ?? "",
    outputFormat: f.outputFormat ?? "plain",
    availableVariables: f.availableVariables ?? ["{{chatHistory}}", "{{context}}", "{{char}}", "{{user}}"],
    createdAt: s,
    updatedAt: s
  };
}
function Mg() {
  return [
    ea("纯文本剧情总结", "text_summary", {
      enabled: !0,
      isBuiltIn: !0,
      systemPrompt: "你是一个专业的剧情总结助手。请将对话内容总结为简洁的剧情摘要，保留关键情节和角色互动。",
      userPromptTemplate: `请总结以下对话内容：

{{chatHistory}}

请输出一段简洁的剧情摘要，格式如下：
📜 剧情摘要:
[摘要内容]`,
      outputFormat: "markdown"
    }),
    ea("向量化剧情总结", "vector_summary", {
      enabled: !0,
      isBuiltIn: !0,
      systemPrompt: "你是一个结构化信息提取助手。请从对话中提取关键信息，包括事件摘要、涉及的实体和它们之间的关系。",
      userPromptTemplate: `请从以下对话中提取结构化信息：

{{chatHistory}}

请以 JSON 格式输出，包含：
- summary: 事件摘要
- entities: 实体列表 [{name, type}]
- relations: 关系列表 [{subject, predicate, object}]
- keywords: 关键词列表`,
      outputFormat: "json"
    }),
    ea("记忆精简", "trim", {
      enabled: !0,
      isBuiltIn: !0,
      systemPrompt: "你是一个信息压缩助手。请将多条剧情摘要合并、精简为一条更简洁的摘要，保留最重要的信息。",
      userPromptTemplate: `请将以下多条剧情摘要合并精简：

{{context}}

请输出一条精简后的综合摘要。`,
      outputFormat: "markdown"
    }),
    ea("查询增强", "query_enhance", {
      enabled: !0,
      isBuiltIn: !0,
      systemPrompt: '你是一个查询理解助手。请分析用户的输入，识别其中的指代词（如"那件事"、"他"等），并扩展为更明确的查询词。',
      userPromptTemplate: `用户输入：{{userInput}}

最近对话上下文：
{{context}}

请输出扩展后的查询关键词列表，用于检索相关记忆。`,
      outputFormat: "plain"
    })
  ];
}
const Og = {
  enabled: !0,
  includeGlobal: !0
}, wg = {
  enabled: !1,
  trigger: "token",
  tokenLimit: 4096,
  floorLimit: 50,
  countLimit: 5
};
function Dg() {
  return {
    llmPresets: [vm()],
    selectedPresetId: null,
    vectorConfig: { ...Cg },
    rerankConfig: { ...Ag },
    promptTemplates: Mg(),
    worldbookConfig: { ...Og }
  };
}
const Ug = [
  { id: "summarize", label: "总结剧情", description: "将对话内容提炼为剧情摘要" },
  { id: "vectorize", label: "向量化", description: "将内容转换为向量存储" },
  { id: "batch", label: "批量处理", description: "批量执行记忆操作" }
], fi = ({ onNavigate: c }) => {
  const [o, f] = B.useState("summarize"), [s, m] = B.useState(null), [p, T] = B.useState(!1), [_, v] = B.useState({
    autoEnabled: !0,
    floorInterval: 10
  }), [b, D] = B.useState({ ...wg }), [A, R] = B.useState(0);
  B.useEffect(() => {
    X();
  }, []);
  const X = async () => {
    try {
      const { summarizerService: V } = await import("./index-DksWwR47.js");
      m(V.getStatus());
      const { WorldInfoService: ue } = await import("./WorldInfoService-CizlUCtc.js"), k = await ue.getActivatedWorldInfo();
      if (k) {
        const ge = await ue.countTokens(k);
        R(ge);
      }
    } catch (V) {
      console.error("加载 Summarizer 状态失败:", V);
    }
  }, ee = async () => {
    try {
      const { summarizerService: V } = await import("./index-DksWwR47.js");
      V.start(), await X();
    } catch (V) {
      console.error("启动失败:", V);
    }
  }, L = async () => {
    try {
      const { summarizerService: V } = await import("./index-DksWwR47.js");
      V.stop(), await X();
    } catch (V) {
      console.error("停止失败:", V);
    }
  }, P = async () => {
    T(!0);
    try {
      const { summarizerService: V } = await import("./index-DksWwR47.js");
      await V.triggerSummary(!0), await X();
    } catch (V) {
      console.error("触发失败:", V);
    } finally {
      T(!1);
    }
  };
  return /* @__PURE__ */ i.jsxs("div", { className: "flex flex-col gap-4 p-4 h-full overflow-hidden", children: [
    /* @__PURE__ */ i.jsxs("div", { className: "flex items-center justify-between pb-4 border-b border-border", children: [
      /* @__PURE__ */ i.jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ i.jsx(ms, { size: 24, className: "text-primary" }),
        /* @__PURE__ */ i.jsx("h2", { className: "text-2xl font-semibold text-foreground m-0", children: "处理中心" })
      ] }),
      /* @__PURE__ */ i.jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ i.jsxs(
          "button",
          {
            className: "inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors",
            onClick: () => c == null ? void 0 : c("/dev"),
            children: [
              /* @__PURE__ */ i.jsx(k2, { size: 14 }),
              "模型日志"
            ]
          }
        ),
        /* @__PURE__ */ i.jsxs(
          "button",
          {
            className: "inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors",
            onClick: () => c == null ? void 0 : c("/api"),
            children: [
              /* @__PURE__ */ i.jsx(Gn, { size: 14 }),
              "提示词模板"
            ]
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ i.jsx("div", { className: "flex gap-2 flex-wrap", children: Ug.map((V) => /* @__PURE__ */ i.jsx(
      "button",
      {
        className: `inline-flex items-center gap-2 px-3 py-2 border rounded-md text-sm font-medium transition-all
                            ${o === V.id ? "bg-primary-20 text-primary border-primary-30" : "bg-transparent text-muted-foreground border-transparent hover:bg-muted hover:text-foreground hover:border-border"}`,
        onClick: () => f(V.id),
        children: V.label
      },
      V.id
    )) }),
    /* @__PURE__ */ i.jsxs("div", { className: "flex-1 overflow-y-auto", children: [
      o === "summarize" && /* @__PURE__ */ i.jsxs("div", { className: "flex flex-col gap-4", children: [
        /* @__PURE__ */ i.jsxs("div", { className: "bg-card border border-border rounded-lg p-4 shadow-sm", children: [
          /* @__PURE__ */ i.jsxs("div", { className: "flex items-center justify-between mb-4", children: [
            /* @__PURE__ */ i.jsx("h3", { className: "text-lg font-semibold text-foreground m-0", children: "状态统计" }),
            /* @__PURE__ */ i.jsx(
              "button",
              {
                className: "p-1.5 rounded-md hover:bg-muted transition-colors",
                onClick: X,
                title: "刷新状态",
                children: /* @__PURE__ */ i.jsx(gi, { size: 16, className: "text-muted-foreground" })
              }
            )
          ] }),
          s ? /* @__PURE__ */ i.jsxs("div", { className: "grid grid-cols-2 md:grid-cols-5 gap-4", children: [
            /* @__PURE__ */ i.jsxs("div", { className: "flex flex-col gap-1 p-3 bg-muted/30 rounded-lg", children: [
              /* @__PURE__ */ i.jsx("span", { className: "text-muted-foreground text-xs", children: "运行状态" }),
              /* @__PURE__ */ i.jsxs("span", { className: `flex items-center gap-1 text-sm font-medium ${s.running ? "text-green-500" : "text-muted-foreground"}`, children: [
                s.running ? /* @__PURE__ */ i.jsx(S2, { size: 14 }) : /* @__PURE__ */ i.jsx(fs, { size: 14 }),
                s.running ? "运行中" : "已停止"
              ] })
            ] }),
            /* @__PURE__ */ i.jsxs("div", { className: "flex flex-col gap-1 p-3 bg-muted/30 rounded-lg", children: [
              /* @__PURE__ */ i.jsx("span", { className: "text-muted-foreground text-xs", children: "当前楼层" }),
              /* @__PURE__ */ i.jsx("span", { className: "text-primary font-mono text-sm font-medium", children: s.currentFloor })
            ] }),
            /* @__PURE__ */ i.jsxs("div", { className: "flex flex-col gap-1 p-3 bg-muted/30 rounded-lg", children: [
              /* @__PURE__ */ i.jsx("span", { className: "text-muted-foreground text-xs", children: "待处理" }),
              /* @__PURE__ */ i.jsx("span", { className: "text-yellow-500 font-mono text-sm font-medium", children: s.pendingFloors })
            ] }),
            /* @__PURE__ */ i.jsxs("div", { className: "flex flex-col gap-1 p-3 bg-muted/30 rounded-lg", children: [
              /* @__PURE__ */ i.jsx("span", { className: "text-muted-foreground text-xs", children: "总结次数" }),
              /* @__PURE__ */ i.jsx("span", { className: "text-foreground font-mono text-sm font-medium", children: s.historyCount })
            ] }),
            /* @__PURE__ */ i.jsxs("div", { className: "flex flex-col gap-1 p-3 bg-muted/30 rounded-lg", children: [
              /* @__PURE__ */ i.jsx("span", { className: "text-muted-foreground text-xs", children: "世界书 Token" }),
              /* @__PURE__ */ i.jsx("span", { className: "text-orange-400 font-mono text-sm font-medium", children: A.toLocaleString() })
            ] })
          ] }) : /* @__PURE__ */ i.jsx("p", { className: "text-muted-foreground", children: "加载中..." })
        ] }),
        /* @__PURE__ */ i.jsxs("div", { className: "flex gap-2", children: [
          s != null && s.running ? /* @__PURE__ */ i.jsxs(
            "button",
            {
              className: `inline-flex items-center gap-2 px-4 py-2 rounded-md font-medium transition-all border
                                        bg-secondary text-secondary-foreground border-secondary hover:bg-secondary/80 active:scale-95`,
              onClick: L,
              children: [
                /* @__PURE__ */ i.jsx(up, { size: 16 }),
                "停止监听"
              ]
            }
          ) : /* @__PURE__ */ i.jsxs(
            "button",
            {
              className: `inline-flex items-center gap-2 px-4 py-2 rounded-md font-medium transition-all border
                                        bg-primary text-primary-foreground border-primary hover:bg-primary-90 active:scale-95`,
              onClick: ee,
              children: [
                /* @__PURE__ */ i.jsx(im, { size: 16 }),
                "启动监听"
              ]
            }
          ),
          /* @__PURE__ */ i.jsxs(
            "button",
            {
              className: `inline-flex items-center gap-2 px-4 py-2 rounded-md font-medium transition-all border
                                    bg-secondary text-secondary-foreground border-secondary hover:bg-secondary/80 active:scale-95
                                    disabled:opacity-50 disabled:cursor-not-allowed disabled:active:scale-100`,
              onClick: P,
              disabled: p || (s == null ? void 0 : s.isSummarizing),
              children: [
                /* @__PURE__ */ i.jsx(gi, { size: 16, className: p ? "animate-spin" : "" }),
                p ? "处理中..." : "手动触发"
              ]
            }
          )
        ] }),
        /* @__PURE__ */ i.jsxs("div", { className: "bg-card border border-border rounded-lg p-4 shadow-sm", children: [
          /* @__PURE__ */ i.jsx("h3", { className: "text-lg font-semibold text-foreground mb-4", children: "总结设置" }),
          /* @__PURE__ */ i.jsxs("div", { className: "space-y-4", children: [
            /* @__PURE__ */ i.jsxs("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ i.jsxs("div", { children: [
                /* @__PURE__ */ i.jsx("div", { className: "text-sm font-medium text-foreground", children: "自动总结" }),
                /* @__PURE__ */ i.jsx("div", { className: "text-xs text-muted-foreground", children: "达到楼层阈值时自动触发" })
              ] }),
              /* @__PURE__ */ i.jsx(
                "button",
                {
                  type: "button",
                  onClick: () => v((V) => ({ ...V, autoEnabled: !V.autoEnabled })),
                  className: `relative w-11 h-6 rounded-full transition-colors ${_.autoEnabled ? "bg-primary" : "bg-muted"}`,
                  children: /* @__PURE__ */ i.jsx(
                    "span",
                    {
                      className: `absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white shadow transition-transform ${_.autoEnabled ? "translate-x-5" : ""}`
                    }
                  )
                }
              )
            ] }),
            /* @__PURE__ */ i.jsxs("div", { className: _.autoEnabled ? "" : "opacity-50", children: [
              /* @__PURE__ */ i.jsxs("div", { className: "flex items-center justify-between mb-2", children: [
                /* @__PURE__ */ i.jsx("span", { className: "text-sm font-medium text-foreground", children: "楼层间隔" }),
                /* @__PURE__ */ i.jsx("span", { className: "text-sm font-mono text-primary", children: _.floorInterval })
              ] }),
              /* @__PURE__ */ i.jsx(
                "input",
                {
                  type: "range",
                  min: "1",
                  max: "50",
                  value: _.floorInterval,
                  onChange: (V) => v((ue) => ({ ...ue, floorInterval: Number(V.target.value) })),
                  disabled: !_.autoEnabled,
                  className: "w-full h-2 bg-muted rounded-lg appearance-none cursor-pointer accent-primary"
                }
              ),
              /* @__PURE__ */ i.jsxs("div", { className: "flex justify-between text-xs text-muted-foreground mt-1", children: [
                /* @__PURE__ */ i.jsx("span", { children: "1" }),
                /* @__PURE__ */ i.jsx("span", { children: "25" }),
                /* @__PURE__ */ i.jsx("span", { children: "50" })
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ i.jsx("div", { className: "bg-card border border-orange-500/20 rounded-lg p-4 shadow-sm", children: /* @__PURE__ */ i.jsx(
          Eg,
          {
            config: b,
            onChange: D
          }
        ) })
      ] }),
      o === "vectorize" && /* @__PURE__ */ i.jsx("div", { className: "bg-card border border-border rounded-lg p-4 shadow-sm", children: /* @__PURE__ */ i.jsx("p", { className: "text-muted-foreground", children: "🚧 向量化功能开发中..." }) }),
      o === "batch" && /* @__PURE__ */ i.jsx("div", { className: "bg-card border border-border rounded-lg p-4 shadow-sm", children: /* @__PURE__ */ i.jsx("p", { className: "text-muted-foreground", children: "🚧 批量处理功能开发中..." }) })
    ] })
  ] });
}, Rg = ({
  preset: c,
  isSelected: o,
  onSelect: f,
  onEdit: s,
  onCopy: m,
  onDelete: p
}) => {
  var b;
  const T = c.source === "tavern" || c.source === "tavern_profile" ? rm : _2, _ = c.source === "tavern" ? "酒馆当前" : c.source === "tavern_profile" ? "酒馆配置" : "自定义", v = c.source === "custom" ? ((b = c.custom) == null ? void 0 : b.model) || "未设置" : "使用当前";
  return /* @__PURE__ */ i.jsxs(
    "div",
    {
      className: `p-3 cursor-pointer bg-card border border-border rounded-lg shadow-sm transition-all duration-200 hover:border-ring-50 hover:shadow-md ${o ? "bg-primary-5 border-primary-50" : ""}`,
      onClick: f,
      children: [
        /* @__PURE__ */ i.jsxs("div", { className: "flex items-start gap-2.5", children: [
          /* @__PURE__ */ i.jsx(
            "div",
            {
              className: `w-8 h-8 flex items-center justify-center rounded-md ${o ? "bg-primary-20 text-primary" : "bg-secondary text-secondary-foreground"}`,
              children: /* @__PURE__ */ i.jsx(T, { size: 16 })
            }
          ),
          /* @__PURE__ */ i.jsxs("div", { className: "flex-1 min-w-0", children: [
            /* @__PURE__ */ i.jsxs("h4", { className: "m-0 text-[14px] font-medium text-foreground flex items-center gap-2", children: [
              c.name,
              c.isDefault && /* @__PURE__ */ i.jsx("span", { className: "px-2 py-[2px] text-[10px] bg-primary-20 text-primary rounded-sm", children: "默认" })
            ] }),
            /* @__PURE__ */ i.jsxs("p", { className: "mt-1 text-[12px] text-muted-foreground", children: [
              /* @__PURE__ */ i.jsx("span", { children: _ }),
              /* @__PURE__ */ i.jsx("span", { className: "mx-1", children: "·" }),
              /* @__PURE__ */ i.jsx("span", { children: v })
            ] })
          ] }),
          o && /* @__PURE__ */ i.jsx("div", { className: "text-primary", children: /* @__PURE__ */ i.jsx(W0, { size: 16 }) })
        ] }),
        /* @__PURE__ */ i.jsxs("div", { className: "flex gap-2 mt-2.5 flex-wrap", children: [
          /* @__PURE__ */ i.jsxs("span", { className: "px-2 py-[2px] text-[10px] bg-muted text-muted-foreground rounded-sm font-mono", children: [
            "T: ",
            c.parameters.temperature
          ] }),
          /* @__PURE__ */ i.jsxs("span", { className: "px-2 py-[2px] text-[10px] bg-muted text-muted-foreground rounded-sm font-mono", children: [
            "P: ",
            c.parameters.topP
          ] }),
          /* @__PURE__ */ i.jsxs("span", { className: "px-2 py-[2px] text-[10px] bg-muted text-muted-foreground rounded-sm font-mono", children: [
            "Max: ",
            c.parameters.maxTokens
          ] })
        ] }),
        /* @__PURE__ */ i.jsxs("div", { className: "flex gap-1 mt-2.5 pt-2.5 border-t border-border", onClick: (D) => D.stopPropagation(), children: [
          /* @__PURE__ */ i.jsx(
            "button",
            {
              className: "p-1.5 rounded-md hover:bg-accent hover:text-accent-foreground transition-colors text-muted-foreground",
              onClick: s,
              title: "编辑",
              children: /* @__PURE__ */ i.jsx(cp, { size: 14 })
            }
          ),
          /* @__PURE__ */ i.jsx(
            "button",
            {
              className: "p-1.5 rounded-md hover:bg-accent hover:text-accent-foreground transition-colors text-muted-foreground",
              onClick: m,
              title: "复制",
              children: /* @__PURE__ */ i.jsx(tm, { size: 14 })
            }
          ),
          /* @__PURE__ */ i.jsx(
            "button",
            {
              className: "p-1.5 rounded-md hover:bg-destructive hover:text-destructive-foreground transition-colors text-muted-foreground disabled:opacity-50 disabled:cursor-not-allowed",
              onClick: p,
              title: "删除",
              disabled: c.isDefault,
              children: /* @__PURE__ */ i.jsx(Qn, { size: 14 })
            }
          )
        ] })
      ]
    }
  );
}, wt = ({
  label: c,
  description: o,
  required: f,
  error: s,
  className: m,
  type: p = "text",
  value: T,
  onChange: _,
  placeholder: v,
  disabled: b
}) => /* @__PURE__ */ i.jsxs("div", { className: `mb-4 ${m || ""}`, children: [
  /* @__PURE__ */ i.jsxs("label", { className: "block mb-2 text-lg font-medium text-primary", children: [
    c,
    f && /* @__PURE__ */ i.jsx("span", { className: "text-primary ml-0.5", children: "*" })
  ] }),
  o && /* @__PURE__ */ i.jsx("p", { className: "m-0 mb-2 text-md text-muted", children: o }),
  /* @__PURE__ */ i.jsx(
    "input",
    {
      type: p,
      className: `w-full px-3 py-2.5 bg-input border border-border-default rounded-md text-primary text-xl transition-all outline-none focus:border-border-focus focus:ring-2 focus:ring-primary-10 ${s ? "!border-error" : ""}`,
      value: T,
      onChange: (D) => _(D.target.value),
      placeholder: v,
      disabled: b
    }
  ),
  s && /* @__PURE__ */ i.jsx("span", { className: "block mt-1 text-md text-error-light", children: s })
] }), il = ({
  label: c,
  description: o,
  required: f,
  error: s,
  className: m,
  value: p,
  onChange: T,
  min: _ = 0,
  max: v = 100,
  step: b = 1,
  showSlider: D = !0,
  disabled: A
}) => /* @__PURE__ */ i.jsxs("div", { className: `mb-4 ${m || ""}`, children: [
  /* @__PURE__ */ i.jsxs("div", { className: "flex items-center justify-between mb-2", children: [
    /* @__PURE__ */ i.jsxs("label", { className: "block text-lg font-medium text-primary", children: [
      c,
      f && /* @__PURE__ */ i.jsx("span", { className: "text-primary ml-0.5", children: "*" })
    ] }),
    /* @__PURE__ */ i.jsx("span", { className: "text-lg text-primary font-mono", children: p })
  ] }),
  o && /* @__PURE__ */ i.jsx("p", { className: "m-0 mb-2 text-md text-muted", children: o }),
  /* @__PURE__ */ i.jsxs("div", { className: "flex items-center gap-3", children: [
    D && /* @__PURE__ */ i.jsx(
      "input",
      {
        type: "range",
        className: "flex-1 h-1 appearance-none bg-active rounded-sm cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:bg-[image:var(--engram-gradient)] [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:cursor-pointer",
        value: p,
        onChange: (R) => T(parseFloat(R.target.value)),
        min: _,
        max: v,
        step: b,
        disabled: A
      }
    ),
    /* @__PURE__ */ i.jsx(
      "input",
      {
        type: "number",
        className: `w-full px-3 py-2.5 bg-input border border-border-default rounded-md text-primary text-xl transition-all outline-none focus:border-border-focus focus:ring-2 focus:ring-primary-10 w-[80px] text-center ${s ? "!border-error" : ""}`,
        value: p,
        onChange: (R) => {
          const X = parseFloat(R.target.value);
          isNaN(X) || T(Math.max(_, Math.min(v, X)));
        },
        min: _,
        max: v,
        step: b,
        disabled: A
      }
    )
  ] }),
  s && /* @__PURE__ */ i.jsx("span", { className: "block mt-1 text-md text-error-light", children: s })
] }), ta = ({
  label: c,
  description: o,
  required: f,
  error: s,
  className: m,
  value: p,
  onChange: T,
  options: _,
  placeholder: v,
  disabled: b
}) => /* @__PURE__ */ i.jsxs("div", { className: `mb-4 ${m || ""}`, children: [
  /* @__PURE__ */ i.jsxs("label", { className: "block mb-2 text-lg font-medium text-primary", children: [
    c,
    f && /* @__PURE__ */ i.jsx("span", { className: "text-primary ml-0.5", children: "*" })
  ] }),
  o && /* @__PURE__ */ i.jsx("p", { className: "m-0 mb-2 text-md text-muted", children: o }),
  /* @__PURE__ */ i.jsxs(
    "select",
    {
      className: `w-full px-3 py-2.5 bg-input border border-border-default rounded-md text-primary text-xl transition-all outline-none focus:border-border-focus focus:ring-2 focus:ring-primary-10 ${s ? "!border-error" : ""}`,
      value: p,
      onChange: (D) => T(D.target.value),
      disabled: b,
      children: [
        v && /* @__PURE__ */ i.jsx("option", { value: "", disabled: !0, children: v }),
        _.map((D) => /* @__PURE__ */ i.jsx("option", { value: D.value, disabled: D.disabled, children: D.label }, D.value))
      ]
    }
  ),
  s && /* @__PURE__ */ i.jsx("span", { className: "block mt-1 text-md text-error-light", children: s })
] }), xm = ({
  label: c,
  description: o,
  className: f,
  checked: s,
  onChange: m,
  disabled: p
}) => /* @__PURE__ */ i.jsxs("div", { className: `mb-4 flex items-center justify-between p-3 bg-surface rounded-lg ${f || ""}`, children: [
  /* @__PURE__ */ i.jsxs("div", { className: "flex-1", children: [
    /* @__PURE__ */ i.jsx("label", { className: "block text-lg font-medium text-primary mb-0", children: c }),
    o && /* @__PURE__ */ i.jsx("p", { className: "m-0 mt-1 text-md text-muted", children: o })
  ] }),
  /* @__PURE__ */ i.jsx(
    "button",
    {
      type: "button",
      className: `w-[44px] h-6 p-0.5 border-none rounded-full cursor-pointer transition-all ${s ? "bg-[image:var(--engram-gradient)]" : "bg-active"}`,
      onClick: () => !p && m(!s),
      disabled: p,
      role: "switch",
      "aria-checked": s,
      children: /* @__PURE__ */ i.jsx("span", { className: `block w-5 h-5 bg-white rounded-full transition-transform ${s ? "translate-x-[20px]" : ""}` })
    }
  )
] }), Ot = ({
  title: c,
  description: o,
  children: f,
  collapsible: s = !1,
  defaultCollapsed: m = !1
}) => {
  const [p, T] = qn.useState(m);
  return /* @__PURE__ */ i.jsxs("div", { className: "mb-5 p-4 bg-elevated rounded-xl ", children: [
    /* @__PURE__ */ i.jsxs(
      "div",
      {
        className: `${p ? "mb-0" : "mb-4"} ${s ? "cursor-pointer flex items-center justify-between" : ""}`,
        onClick: () => s && T(!p),
        children: [
          /* @__PURE__ */ i.jsxs("div", { className: "", children: [
            /* @__PURE__ */ i.jsx("h4", { className: "m-0 text-xl font-semibold text-primary", children: c }),
            o && /* @__PURE__ */ i.jsx("p", { className: "mt-1 text-md text-muted", children: o })
          ] }),
          s && /* @__PURE__ */ i.jsx("span", { className: "text-muted text-xs", children: p ? "▶" : "▼" })
        ]
      }
    ),
    !p && /* @__PURE__ */ i.jsx("div", { className: "", children: f })
  ] });
}, kg = [
  { value: "openai", label: "OpenAI" },
  { value: "anthropic", label: "Anthropic" },
  { value: "ollama", label: "Ollama" },
  { value: "vllm", label: "vLLM" },
  { value: "azure", label: "Azure OpenAI" },
  { value: "custom", label: "自定义" }
], Bg = [
  { value: "tavern", label: "使用酒馆当前配置" },
  { value: "tavern_profile", label: "使用酒馆配置文件" },
  { value: "custom", label: "自定义 API 配置" }
];
function Hg() {
  var c, o, f, s;
  try {
    const m = (f = (o = (c = window.SillyTavern) == null ? void 0 : c.getContext) == null ? void 0 : o.call(c)) == null ? void 0 : f.extensionSettings;
    return ((s = m == null ? void 0 : m.connectionManager) == null ? void 0 : s.profiles) || [];
  } catch (m) {
    return console.warn("[Engram] 无法获取酒馆 connection_profiles:", m), [];
  }
}
const Lg = ({
  preset: c,
  onChange: o,
  isNew: f = !1
}) => {
  var L, P, V, ue;
  const [s, m] = B.useState([]), [p, T] = B.useState(!1), _ = () => {
    T(!0);
    try {
      const k = Hg();
      m(k);
    } finally {
      T(!1);
    }
  };
  B.useEffect(() => {
    _();
  }, []);
  const v = (k) => {
    o({ ...c, ...k, updatedAt: Date.now() });
  }, b = (k, ge) => {
    v({
      parameters: { ...c.parameters, [k]: ge }
    });
  }, D = (k, ge) => {
    v({
      context: { ...c.context, [k]: ge }
    });
  }, A = (k, ge) => {
    var Qe, F, Z, _e;
    v({
      custom: {
        apiUrl: ((Qe = c.custom) == null ? void 0 : Qe.apiUrl) || "",
        apiKey: ((F = c.custom) == null ? void 0 : F.apiKey) || "",
        model: ((Z = c.custom) == null ? void 0 : Z.model) || "",
        apiSource: ((_e = c.custom) == null ? void 0 : _e.apiSource) || "openai",
        [k]: ge
      }
    });
  }, R = (k) => {
    const ge = k;
    v({
      source: ge,
      tavernProfileId: ge === "tavern_profile" ? c.tavernProfileId : void 0
    }), ge === "tavern_profile" && _();
  }, X = s.map((k) => ({
    value: k.id,
    label: `${k.name} (${k.api || "Unknown"} - ${k.model || "Unknown"})`
  })), ee = s.find((k) => k.id === c.tavernProfileId);
  return /* @__PURE__ */ i.jsxs("div", { className: "", children: [
    /* @__PURE__ */ i.jsxs(Ot, { title: "基本信息", children: [
      /* @__PURE__ */ i.jsx(
        wt,
        {
          label: "预设名称",
          value: c.name,
          onChange: (k) => v({ name: k }),
          placeholder: "输入预设名称",
          required: !0
        }
      ),
      /* @__PURE__ */ i.jsx(
        ta,
        {
          label: "配置源",
          value: c.source,
          onChange: R,
          options: Bg,
          description: "选择 API 配置的来源"
        }
      )
    ] }),
    c.source === "tavern_profile" && /* @__PURE__ */ i.jsxs(Ot, { title: "酒馆配置文件", description: "选择一个已保存的酒馆连接配置", children: [
      /* @__PURE__ */ i.jsxs("div", { className: "flex items-end gap-2", children: [
        /* @__PURE__ */ i.jsx(
          ta,
          {
            className: "flex-1 !mb-0",
            label: "选择配置文件",
            value: c.tavernProfileId || "",
            onChange: (k) => v({ tavernProfileId: k }),
            options: X,
            placeholder: p ? "加载中..." : "请选择配置文件",
            disabled: p || X.length === 0
          }
        ),
        /* @__PURE__ */ i.jsx(
          "button",
          {
            type: "button",
            className: "h-[42px] w-[42px] min-w-[42px] flex items-center justify-center border-none rounded-md bg-hover text-secondary cursor-pointer transition-all hover:bg-active hover:text-white",
            onClick: _,
            disabled: p,
            title: "刷新配置列表",
            children: /* @__PURE__ */ i.jsx(gi, { size: 16, className: p ? "animate-spin" : "" })
          }
        )
      ] }),
      X.length === 0 && !p && /* @__PURE__ */ i.jsx("div", { className: "p-3 bg-primary-10 border border-dashed border-primary-30 rounded-lg text-primary text-lg text-center mt-3", children: "未找到酒馆配置文件。请在酒馆中创建连接配置后刷新。" }),
      ee && /* @__PURE__ */ i.jsxs("div", { className: "mt-4 p-3 bg-surface rounded-lg border border-border-light", children: [
        /* @__PURE__ */ i.jsxs("div", { className: "flex items-center gap-2 py-1 text-lg border-b border-border-light last:border-0", children: [
          /* @__PURE__ */ i.jsx("span", { className: "text-muted min-w-[60px]", children: "API:" }),
          /* @__PURE__ */ i.jsx("span", { className: "text-primary font-mono", children: ee.api || "-" })
        ] }),
        /* @__PURE__ */ i.jsxs("div", { className: "flex items-center gap-2 py-1 text-lg border-b border-border-light last:border-0", children: [
          /* @__PURE__ */ i.jsx("span", { className: "text-muted min-w-[60px]", children: "模型:" }),
          /* @__PURE__ */ i.jsx("span", { className: "text-primary font-mono", children: ee.model || "-" })
        ] }),
        /* @__PURE__ */ i.jsxs("div", { className: "flex items-center gap-2 py-1 text-lg border-b border-border-light last:border-0", children: [
          /* @__PURE__ */ i.jsx("span", { className: "text-muted min-w-[60px]", children: "预设:" }),
          /* @__PURE__ */ i.jsx("span", { className: "text-primary font-mono", children: ee.preset || "-" })
        ] })
      ] })
    ] }),
    c.source === "custom" && /* @__PURE__ */ i.jsxs(Ot, { title: "API 配置", description: "自定义 API 端点和密钥", children: [
      /* @__PURE__ */ i.jsx(
        ta,
        {
          label: "API 类型",
          value: ((L = c.custom) == null ? void 0 : L.apiSource) || "openai",
          onChange: (k) => A("apiSource", k),
          options: kg
        }
      ),
      /* @__PURE__ */ i.jsx(
        wt,
        {
          label: "API URL",
          type: "url",
          value: ((P = c.custom) == null ? void 0 : P.apiUrl) || "",
          onChange: (k) => A("apiUrl", k),
          placeholder: "https://api.openai.com/v1",
          required: !0
        }
      ),
      /* @__PURE__ */ i.jsx(
        wt,
        {
          label: "API Key",
          type: "password",
          value: ((V = c.custom) == null ? void 0 : V.apiKey) || "",
          onChange: (k) => A("apiKey", k),
          placeholder: "sk-..."
        }
      ),
      /* @__PURE__ */ i.jsx(
        wt,
        {
          label: "模型名称",
          value: ((ue = c.custom) == null ? void 0 : ue.model) || "",
          onChange: (k) => A("model", k),
          placeholder: "gpt-4o-mini",
          required: !0
        }
      )
    ] }),
    /* @__PURE__ */ i.jsxs(Ot, { title: "采样参数", description: "控制模型输出的随机性和多样性", children: [
      /* @__PURE__ */ i.jsx(
        il,
        {
          label: "温度 (Temperature)",
          value: c.parameters.temperature,
          onChange: (k) => b("temperature", k),
          min: 0,
          max: 2,
          step: 0.1,
          description: "较高的值使输出更随机，较低的值使输出更确定"
        }
      ),
      /* @__PURE__ */ i.jsx(
        il,
        {
          label: "Top-P",
          value: c.parameters.topP,
          onChange: (k) => b("topP", k),
          min: 0,
          max: 1,
          step: 0.05,
          description: "核采样阈值，控制候选 token 的累积概率"
        }
      ),
      /* @__PURE__ */ i.jsx(
        il,
        {
          label: "最大输出 Tokens",
          value: c.parameters.maxTokens,
          onChange: (k) => b("maxTokens", k),
          min: 64,
          max: 16384,
          step: 64,
          showSlider: !1
        }
      ),
      /* @__PURE__ */ i.jsx(
        il,
        {
          label: "频率惩罚",
          value: c.parameters.frequencyPenalty,
          onChange: (k) => b("frequencyPenalty", k),
          min: -2,
          max: 2,
          step: 0.1,
          description: "降低重复 token 的概率"
        }
      ),
      /* @__PURE__ */ i.jsx(
        il,
        {
          label: "存在惩罚",
          value: c.parameters.presencePenalty,
          onChange: (k) => b("presencePenalty", k),
          min: -2,
          max: 2,
          step: 0.1,
          description: "鼓励模型讨论新主题"
        }
      )
    ] }),
    /* @__PURE__ */ i.jsxs(Ot, { title: "上下文设置", description: "控制发送给模型的上下文内容", children: [
      /* @__PURE__ */ i.jsx(
        il,
        {
          label: "聊天历史条数",
          value: c.context.maxChatHistory,
          onChange: (k) => D("maxChatHistory", k),
          min: 0,
          max: 100,
          step: 1,
          showSlider: !1,
          description: "使用多少条聊天历史（0 表示不使用）"
        }
      ),
      /* @__PURE__ */ i.jsx(
        xm,
        {
          label: "包含世界书设定",
          checked: c.context.includeWorldInfo,
          onChange: (k) => D("includeWorldInfo", k),
          description: "是否在提示词中包含已激活的世界书内容"
        }
      ),
      c.context.includeWorldInfo && /* @__PURE__ */ i.jsx(
        il,
        {
          label: "世界书 Token 预算",
          value: c.context.worldInfoBudget,
          onChange: (k) => D("worldInfoBudget", k),
          min: 256,
          max: 8192,
          step: 256,
          showSlider: !1,
          description: "分配给世界书内容的最大 token 数"
        }
      )
    ] })
  ] });
}, qg = [
  { value: "transformers", label: "Transformers (本地)" },
  { value: "openai", label: "OpenAI Embeddings" },
  { value: "ollama", label: "Ollama" },
  { value: "vllm", label: "vLLM" },
  { value: "cohere", label: "Cohere" },
  { value: "jina", label: "Jina AI" },
  { value: "voyage", label: "Voyage AI" }
], G0 = {
  transformers: "Xenova/all-MiniLM-L6-v2",
  openai: "text-embedding-3-small",
  ollama: "nomic-embed-text",
  vllm: "BAAI/bge-m3",
  cohere: "embed-multilingual-v3.0",
  jina: "jina-embeddings-v3",
  voyage: "voyage-large-2"
}, Q0 = ["ollama", "vllm"], X0 = ["openai", "cohere", "jina", "voyage"], Yg = ({
  config: c,
  onChange: o
}) => {
  var T;
  const f = (_) => {
    o({ ...c, ..._ });
  }, s = (_) => {
    f({
      source: _,
      model: G0[_],
      apiUrl: Q0.includes(_) ? c.apiUrl : void 0,
      apiKey: X0.includes(_) ? c.apiKey : void 0
    });
  }, m = Q0.includes(c.source), p = X0.includes(c.source);
  return /* @__PURE__ */ i.jsxs("div", { className: "", children: [
    /* @__PURE__ */ i.jsxs(Ot, { title: "向量化设置", description: "配置文本向量化使用的模型和端点", children: [
      /* @__PURE__ */ i.jsx(
        ta,
        {
          label: "向量源",
          value: c.source,
          onChange: (_) => s(_),
          options: qg,
          description: "选择向量化服务提供商"
        }
      ),
      m && /* @__PURE__ */ i.jsx(
        wt,
        {
          label: "API URL",
          type: "url",
          value: c.apiUrl || "",
          onChange: (_) => f({ apiUrl: _ }),
          placeholder: c.source === "ollama" ? "http://localhost:11434" : "http://localhost:8000",
          description: `${c.source} 服务的 API 端点`
        }
      ),
      p && /* @__PURE__ */ i.jsx(
        wt,
        {
          label: "API Key",
          type: "password",
          value: c.apiKey || "",
          onChange: (_) => f({ apiKey: _ }),
          placeholder: "输入 API 密钥"
        }
      ),
      /* @__PURE__ */ i.jsx(
        wt,
        {
          label: "模型名称",
          value: c.model || "",
          onChange: (_) => f({ model: _ }),
          placeholder: G0[c.source],
          description: "使用的向量化模型"
        }
      )
    ] }),
    /* @__PURE__ */ i.jsx(Ot, { title: "高级选项", collapsible: !0, defaultCollapsed: !0, children: /* @__PURE__ */ i.jsx(
      wt,
      {
        label: "向量维度",
        value: ((T = c.dimensions) == null ? void 0 : T.toString()) || "",
        onChange: (_) => {
          const v = parseInt(_, 10);
          f({ dimensions: isNaN(v) ? void 0 : v });
        },
        placeholder: "自动",
        description: "指定向量维度（留空则使用模型默认值）"
      }
    ) })
  ] });
}, Gg = [
  "BAAI/bge-reranker-v2-m3",
  "BAAI/bge-reranker-base",
  "BAAI/bge-reranker-large",
  "cross-encoder/ms-marco-MiniLM-L-12-v2",
  "Xenova/ms-marco-MiniLM-L-6-v2"
], Qg = ({
  config: c,
  onChange: o
}) => {
  const f = (s) => {
    o({ ...c, ...s });
  };
  return /* @__PURE__ */ i.jsxs("div", { className: "", children: [
    /* @__PURE__ */ i.jsx(Ot, { title: "Rerank 设置", description: "配置重排序模型以优化检索结果", children: /* @__PURE__ */ i.jsx(
      xm,
      {
        label: "启用 Rerank",
        checked: c.enabled,
        onChange: (s) => f({ enabled: s }),
        description: "使用 Rerank 模型对检索结果进行重新排序"
      }
    ) }),
    c.enabled && /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
      /* @__PURE__ */ i.jsxs(Ot, { title: "API 配置", children: [
        /* @__PURE__ */ i.jsx(
          wt,
          {
            label: "API URL",
            type: "url",
            value: c.url,
            onChange: (s) => f({ url: s }),
            placeholder: "http://localhost:8000/rerank",
            description: "Rerank 服务的 API 端点",
            required: !0
          }
        ),
        /* @__PURE__ */ i.jsx(
          wt,
          {
            label: "API Key",
            type: "password",
            value: c.apiKey,
            onChange: (s) => f({ apiKey: s }),
            placeholder: "输入 API 密钥（如需要）"
          }
        ),
        /* @__PURE__ */ i.jsx(
          wt,
          {
            label: "模型名称",
            value: c.model,
            onChange: (s) => f({ model: s }),
            placeholder: "BAAI/bge-reranker-v2-m3",
            description: "使用的 Rerank 模型",
            required: !0
          }
        ),
        /* @__PURE__ */ i.jsxs("div", { className: "mt-2", children: [
          /* @__PURE__ */ i.jsx("span", { className: "block text-md text-muted mb-2", children: "常用模型：" }),
          /* @__PURE__ */ i.jsx("div", { className: "flex flex-wrap gap-2", children: Gg.map((s) => /* @__PURE__ */ i.jsx(
            "button",
            {
              type: "button",
              className: `px-3 py-1 border border-border-default rounded-sm text-sm cursor-pointer transition-all hover:border-border-focus hover:text-primary ${c.model === s ? "bg-primary-20 border-primary text-primary" : "bg-transparent text-secondary"}`,
              onClick: () => f({ model: s }),
              children: s.split("/").pop()
            },
            s
          )) })
        ] })
      ] }),
      /* @__PURE__ */ i.jsxs(Ot, { title: "参数设置", children: [
        /* @__PURE__ */ i.jsx(
          il,
          {
            label: "Top-N",
            value: c.topN,
            onChange: (s) => f({ topN: s }),
            min: 1,
            max: 50,
            step: 1,
            description: "重排后返回的结果数量"
          }
        ),
        /* @__PURE__ */ i.jsx(
          il,
          {
            label: "混合权重 (Hybrid Alpha)",
            value: c.hybridAlpha,
            onChange: (s) => f({ hybridAlpha: s }),
            min: 0,
            max: 1,
            step: 0.1,
            description: "0 = 纯向量检索评分，1 = 纯 Rerank 评分"
          }
        )
      ] })
    ] })
  ] });
};
function Xg(c) {
  switch (c) {
    case "text_summary":
      return "bg-sky-500/20 text-sky-400";
    case "vector_summary":
      return "bg-violet-500/20 text-violet-400";
    case "trim":
      return "bg-amber-500/20 text-amber-400";
    case "query_enhance":
      return "bg-emerald-500/20 text-emerald-400";
    default:
      return "bg-neutral-500/20 text-neutral-400";
  }
}
function Vg(c) {
  var o;
  return ((o = bi.find((f) => f.value === c)) == null ? void 0 : o.label) || c;
}
const Zg = ({
  template: c,
  isSelected: o = !1,
  onSelect: f,
  onCopy: s,
  onDelete: m,
  onToggleEnabled: p,
  onImport: T
}) => {
  const _ = B.useRef(null), v = (R) => {
    R.stopPropagation();
    const X = {
      version: "1.0",
      exportedAt: Date.now(),
      template: {
        name: c.name,
        category: c.category,
        boundPresetId: c.boundPresetId,
        systemPrompt: c.systemPrompt,
        userPromptTemplate: c.userPromptTemplate,
        outputFormat: c.outputFormat,
        availableVariables: c.availableVariables
      }
    }, ee = new Blob([JSON.stringify(X, null, 2)], { type: "application/json" }), L = URL.createObjectURL(ee), P = document.createElement("a");
    P.href = L, P.download = `engram_template_${c.name.replace(/\s+/g, "_")}.json`, P.click(), URL.revokeObjectURL(L);
  }, b = (R) => {
    var X;
    R.stopPropagation(), (X = _.current) == null || X.click();
  }, D = (R) => {
    var L;
    const X = (L = R.target.files) == null ? void 0 : L[0];
    if (!X || !T) return;
    const ee = new FileReader();
    ee.onload = (P) => {
      var V;
      try {
        const ue = JSON.parse((V = P.target) == null ? void 0 : V.result);
        if (ue.version && ue.template) {
          const k = ea(
            ue.template.name,
            ue.template.category,
            {
              enabled: c.enabled,
              // 保持当前启用状态
              isBuiltIn: c.isBuiltIn,
              // 保持内置状态
              boundPresetId: ue.template.boundPresetId,
              systemPrompt: ue.template.systemPrompt,
              userPromptTemplate: ue.template.userPromptTemplate,
              outputFormat: ue.template.outputFormat,
              availableVariables: ue.template.availableVariables
            }
          );
          k.id = c.id, T(k);
        }
      } catch (ue) {
        console.error("导入失败:", ue);
      }
    }, ee.readAsText(X), _.current && (_.current.value = "");
  }, A = (R) => {
    R.stopPropagation(), p == null || p(!c.enabled);
  };
  return /* @__PURE__ */ i.jsxs(
    "div",
    {
      className: `
                group relative p-3 rounded-lg border cursor-pointer transition-all
                ${o ? "border-primary bg-primary-5 shadow-[0_0_0_1px_rgb(var(--color-primary))]" : "border-border-light bg-surface hover:border-border hover:bg-hover"}
            `,
      onClick: f,
      children: [
        /* @__PURE__ */ i.jsxs("div", { className: "flex items-start justify-between gap-2 mb-2", children: [
          /* @__PURE__ */ i.jsxs("div", { className: "flex items-center gap-2 min-w-0 flex-1", children: [
            /* @__PURE__ */ i.jsx(Gn, { size: 16, className: "text-primary flex-shrink-0" }),
            /* @__PURE__ */ i.jsx("span", { className: "font-medium text-primary truncate", children: c.name })
          ] }),
          /* @__PURE__ */ i.jsxs("div", { className: "flex items-center gap-1", children: [
            /* @__PURE__ */ i.jsx(
              "button",
              {
                className: `p-1.5 rounded transition-colors ${c.enabled ? "bg-emerald-500/20 text-emerald-400" : "text-muted hover:text-primary hover:bg-hover"}`,
                onClick: A,
                title: c.enabled ? "已启用" : "点击启用",
                children: /* @__PURE__ */ i.jsx(W0, { size: 14 })
              }
            ),
            /* @__PURE__ */ i.jsx(
              "button",
              {
                className: "p-1.5 rounded text-muted hover:text-primary hover:bg-hover opacity-0 group-hover:opacity-100 transition-opacity",
                onClick: b,
                title: "导入",
                children: /* @__PURE__ */ i.jsx(Ep, { size: 14 })
              }
            ),
            /* @__PURE__ */ i.jsx(
              "button",
              {
                className: "p-1.5 rounded text-muted hover:text-primary hover:bg-hover opacity-0 group-hover:opacity-100 transition-opacity",
                onClick: v,
                title: "导出",
                children: /* @__PURE__ */ i.jsx(lm, { size: 14 })
              }
            ),
            s && /* @__PURE__ */ i.jsx(
              "button",
              {
                className: "p-1.5 rounded text-muted hover:text-primary hover:bg-hover opacity-0 group-hover:opacity-100 transition-opacity",
                onClick: (R) => {
                  R.stopPropagation(), s();
                },
                title: "复制",
                children: /* @__PURE__ */ i.jsx(tm, { size: 14 })
              }
            ),
            m && !c.isBuiltIn && /* @__PURE__ */ i.jsx(
              "button",
              {
                className: "p-1.5 rounded text-muted hover:text-red-400 hover:bg-red-500/20 opacity-0 group-hover:opacity-100 transition-opacity",
                onClick: (R) => {
                  R.stopPropagation(), m();
                },
                title: "删除",
                children: /* @__PURE__ */ i.jsx(Qn, { size: 14 })
              }
            )
          ] }),
          /* @__PURE__ */ i.jsx(
            "input",
            {
              ref: _,
              type: "file",
              accept: ".json",
              onChange: D,
              className: "hidden"
            }
          )
        ] }),
        /* @__PURE__ */ i.jsxs("div", { className: "flex items-center gap-2 mb-2", children: [
          /* @__PURE__ */ i.jsx("span", { className: `text-xs px-2 py-0.5 rounded-full ${Xg(c.category)}`, children: Vg(c.category) }),
          c.isBuiltIn && /* @__PURE__ */ i.jsx("span", { className: "text-xs px-2 py-0.5 rounded-full bg-neutral-500/20 text-neutral-400", children: "内置" })
        ] }),
        /* @__PURE__ */ i.jsx("p", { className: "text-xs text-muted line-clamp-2 mb-2", children: c.systemPrompt || "(无系统提示词)" }),
        /* @__PURE__ */ i.jsxs("div", { className: "flex items-center justify-between text-xs text-muted", children: [
          /* @__PURE__ */ i.jsx("span", { children: c.boundPresetId ? `绑定: ${c.boundPresetId}` : "使用默认预设" }),
          /* @__PURE__ */ i.jsx("span", { className: "opacity-60", children: c.outputFormat.toUpperCase() })
        ] })
      ]
    }
  );
}, Kg = ({
  templates: c,
  selectedId: o,
  onSelect: f,
  onAdd: s,
  onUpdate: m,
  onDelete: p
}) => {
  const T = () => {
    const A = ea(
      `新模板 ${c.length + 1}`,
      "text_summary"
    );
    s(A), f(A);
  }, _ = (A) => {
    const R = ea(
      `${A.name} (副本)`,
      A.category,
      {
        enabled: !1,
        // 副本默认不启用
        boundPresetId: A.boundPresetId,
        systemPrompt: A.systemPrompt,
        userPromptTemplate: A.userPromptTemplate,
        outputFormat: A.outputFormat,
        availableVariables: [...A.availableVariables]
      }
    );
    s(R);
  }, v = (A, R) => {
    R && c.filter((X) => X.category === A.category && X.id !== A.id && X.enabled).forEach((X) => m({ ...X, enabled: !1 })), m({ ...A, enabled: R });
  }, b = (A) => {
    m(A);
  }, D = bi.map((A) => ({
    ...A,
    templates: c.filter((R) => R.category === A.value)
  })).filter((A) => A.templates.length > 0);
  return /* @__PURE__ */ i.jsxs("div", { className: "flex flex-col gap-4 h-full", children: [
    /* @__PURE__ */ i.jsxs("div", { className: "flex items-center justify-between gap-2", children: [
      /* @__PURE__ */ i.jsx("h3", { className: "m-0 text-sm font-semibold text-primary", children: "提示词模板" }),
      /* @__PURE__ */ i.jsxs(
        "button",
        {
          className: "engram-btn engram-btn-ghost",
          onClick: T,
          children: [
            /* @__PURE__ */ i.jsx(ps, { size: 14 }),
            "新建"
          ]
        }
      )
    ] }),
    /* @__PURE__ */ i.jsxs("div", { className: "flex flex-col gap-4 overflow-y-auto flex-1", children: [
      D.map((A) => /* @__PURE__ */ i.jsxs("div", { children: [
        /* @__PURE__ */ i.jsx("div", { className: "text-xs text-muted mb-2 px-1", children: A.label }),
        /* @__PURE__ */ i.jsx("div", { className: "flex flex-col gap-2", children: A.templates.map((R) => /* @__PURE__ */ i.jsx(
          Zg,
          {
            template: R,
            isSelected: o === R.id,
            onSelect: () => f(R),
            onCopy: () => _(R),
            onDelete: () => p(R),
            onToggleEnabled: (X) => v(R, X),
            onImport: b
          },
          R.id
        )) })
      ] }, A.value)),
      c.length === 0 && /* @__PURE__ */ i.jsxs("div", { className: "flex flex-col items-center justify-center py-8 text-muted gap-2", children: [
        /* @__PURE__ */ i.jsx(Gn, { size: 32 }),
        /* @__PURE__ */ i.jsx("p", { className: "text-sm", children: "暂无模板" })
      ] })
    ] })
  ] });
}, Jg = [
  { value: "plain", label: "纯文本" },
  { value: "markdown", label: "Markdown" },
  { value: "json", label: "JSON" }
], $g = ({
  template: c,
  llmPresets: o,
  defaultPresetId: f,
  onChange: s
}) => {
  var T, _;
  const m = [
    { value: "", label: "使用默认预设" + (f ? ` (${((T = o.find((v) => v.id === f)) == null ? void 0 : T.name) || f})` : "") },
    ...o.map((v) => ({ value: v.id, label: v.name }))
  ], p = (v) => {
    s({ ...c, ...v, updatedAt: Date.now() });
  };
  return /* @__PURE__ */ i.jsxs("div", { className: "flex flex-col gap-4", children: [
    /* @__PURE__ */ i.jsxs(Ot, { title: "基本信息", children: [
      /* @__PURE__ */ i.jsx(
        wt,
        {
          label: "模板名称",
          value: c.name,
          onChange: (v) => p({ name: v }),
          placeholder: "输入模板名称",
          required: !0,
          disabled: c.isBuiltIn
        }
      ),
      /* @__PURE__ */ i.jsx(
        ta,
        {
          label: "模板分类",
          value: c.category,
          onChange: (v) => p({ category: v }),
          options: bi.map((v) => ({ value: v.value, label: v.label })),
          description: (_ = bi.find((v) => v.value === c.category)) == null ? void 0 : _.description
        }
      ),
      /* @__PURE__ */ i.jsx(
        ta,
        {
          label: "模型来源",
          value: c.boundPresetId || "",
          onChange: (v) => p({ boundPresetId: v || null }),
          options: m,
          description: "选择用于此模板的 LLM 预设"
        }
      ),
      /* @__PURE__ */ i.jsx(
        ta,
        {
          label: "输出格式",
          value: c.outputFormat,
          onChange: (v) => p({ outputFormat: v }),
          options: Jg
        }
      )
    ] }),
    /* @__PURE__ */ i.jsxs(Ot, { title: "提示词内容", description: "支持变量：{{chatHistory}}, {{context}}, {{char}}, {{user}}, {{userInput}}", children: [
      /* @__PURE__ */ i.jsxs("div", { className: "flex flex-col gap-2", children: [
        /* @__PURE__ */ i.jsx("label", { className: "text-sm font-medium text-primary", children: "系统提示词" }),
        /* @__PURE__ */ i.jsx(
          "textarea",
          {
            className: "w-full min-h-[100px] p-3 rounded-lg border border-border-light bg-surface text-primary resize-y font-mono text-sm focus:border-primary focus:outline-none",
            value: c.systemPrompt,
            onChange: (v) => p({ systemPrompt: v.target.value }),
            placeholder: "输入系统提示词..."
          }
        )
      ] }),
      /* @__PURE__ */ i.jsxs("div", { className: "flex flex-col gap-2 mt-4", children: [
        /* @__PURE__ */ i.jsx("label", { className: "text-sm font-medium text-primary", children: "用户提示词模板" }),
        /* @__PURE__ */ i.jsx(
          "textarea",
          {
            className: "w-full min-h-[150px] p-3 rounded-lg border border-border-light bg-surface text-primary resize-y font-mono text-sm focus:border-primary focus:outline-none",
            value: c.userPromptTemplate,
            onChange: (v) => p({ userPromptTemplate: v.target.value }),
            placeholder: "输入用户提示词模板..."
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ i.jsxs("div", { className: "p-3 bg-surface rounded-lg border border-border-light", children: [
      /* @__PURE__ */ i.jsx("div", { className: "text-xs text-muted mb-2", children: "可用变量:" }),
      /* @__PURE__ */ i.jsx("div", { className: "flex flex-wrap gap-2", children: c.availableVariables.map((v) => /* @__PURE__ */ i.jsx("code", { className: "px-2 py-1 bg-hover rounded text-xs text-primary font-mono", children: v }, v)) })
    ] })
  ] });
}, Fg = ({
  rules: c,
  selectedId: o,
  onSelect: f,
  onToggle: s,
  onDelete: m,
  onAdd: p,
  onReset: T
}) => {
  const _ = c.filter((v) => v.enabled).length;
  return /* @__PURE__ */ i.jsxs("div", { className: "flex flex-col gap-3", children: [
    /* @__PURE__ */ i.jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ i.jsxs("h3", { className: "m-0 text-sm font-semibold text-foreground", children: [
        "正则规则 (",
        _,
        "/",
        c.length,
        ")"
      ] }),
      /* @__PURE__ */ i.jsxs("div", { className: "flex gap-1", children: [
        /* @__PURE__ */ i.jsx(
          "button",
          {
            className: "p-1.5 rounded-md hover:bg-accent hover:text-accent-foreground transition-colors text-muted-foreground",
            onClick: T,
            title: "重置为默认",
            children: /* @__PURE__ */ i.jsx(gi, { size: 14 })
          }
        ),
        /* @__PURE__ */ i.jsxs(
          "button",
          {
            className: "inline-flex items-center gap-1.5 px-2 py-1.5 rounded-md text-sm transition-colors hover:bg-accent hover:text-accent-foreground text-muted-foreground",
            onClick: p,
            children: [
              /* @__PURE__ */ i.jsx(ps, { size: 14 }),
              "新建"
            ]
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ i.jsxs("div", { className: "flex flex-col gap-2", children: [
      c.map((v) => /* @__PURE__ */ i.jsxs(
        "div",
        {
          className: `p-3 cursor-pointer bg-card border border-border rounded-lg transition-all duration-200 hover:border-ring-50 ${o === v.id ? "bg-primary-5 border-primary-50" : ""}`,
          onClick: () => f(v.id),
          children: [
            /* @__PURE__ */ i.jsxs("div", { className: "flex items-start gap-2", children: [
              /* @__PURE__ */ i.jsx(
                "button",
                {
                  className: `p-1 rounded transition-colors ${v.enabled ? "text-green-500 hover:bg-green-500/20" : "text-muted-foreground hover:bg-muted"}`,
                  onClick: (b) => {
                    b.stopPropagation(), s(v.id);
                  },
                  title: v.enabled ? "已启用" : "已禁用",
                  children: v.enabled ? /* @__PURE__ */ i.jsx(ds, { size: 16 }) : /* @__PURE__ */ i.jsx(N2, { size: 16 })
                }
              ),
              /* @__PURE__ */ i.jsxs("div", { className: "flex-1 min-w-0", children: [
                /* @__PURE__ */ i.jsx("div", { className: "text-sm font-medium text-foreground truncate", children: v.name }),
                v.description && /* @__PURE__ */ i.jsx("div", { className: "text-xs text-muted-foreground mt-0.5 truncate", children: v.description })
              ] }),
              /* @__PURE__ */ i.jsx(
                "button",
                {
                  className: "p-1.5 rounded-md hover:bg-destructive hover:text-destructive-foreground transition-colors text-muted-foreground opacity-0 group-hover:opacity-100",
                  onClick: (b) => {
                    b.stopPropagation(), m(v.id);
                  },
                  title: "删除",
                  children: /* @__PURE__ */ i.jsx(Qn, { size: 14 })
                }
              )
            ] }),
            /* @__PURE__ */ i.jsxs("div", { className: "mt-2 px-2 py-1 bg-muted-20 rounded text-xs font-mono text-muted-foreground truncate", children: [
              "/",
              v.pattern,
              "/",
              v.flags
            ] })
          ]
        },
        v.id
      )),
      c.length === 0 && /* @__PURE__ */ i.jsx("div", { className: "text-center py-8 text-muted-foreground text-sm", children: "暂无正则规则" })
    ] })
  ] });
}, Si = [
  {
    id: "remove-think",
    name: "移除思维链",
    pattern: "<think>[\\s\\S]*?</think>",
    replacement: "",
    enabled: !0,
    flags: "gi",
    description: "移除 <think>...</think> 标签及其内容"
  },
  {
    id: "remove-inner-monologue",
    name: "移除内心独白",
    pattern: "<inner_monologue>[\\s\\S]*?</inner_monologue>",
    replacement: "",
    enabled: !0,
    flags: "gi",
    description: "移除 <inner_monologue>...</inner_monologue> 标签"
  },
  {
    id: "remove-system-note",
    name: "移除系统标记",
    pattern: "\\[System:.*?\\]",
    replacement: "",
    enabled: !0,
    flags: "gi",
    description: "移除 [System:...] 格式的系统标记"
  },
  {
    id: "remove-ooc",
    name: "移除 OOC 标记",
    pattern: "\\(OOC:.*?\\)",
    replacement: "",
    enabled: !1,
    flags: "gi",
    description: "移除 (OOC:...) 格式的元对话"
  },
  {
    id: "remove-empty-lines",
    name: "合并空行",
    pattern: "\\n{3,}",
    replacement: `

`,
    enabled: !0,
    flags: "g",
    description: "将连续3个以上的换行合并为2个"
  }
];
class bm {
  constructor(o) {
    wl(this, "rules", []);
    this.rules = o || [...Si];
  }
  /**
   * 应用所有启用的规则处理文本
   */
  process(o) {
    let f = o;
    for (const s of this.rules)
      if (s.enabled)
        try {
          const m = new RegExp(s.pattern, s.flags);
          f = f.replace(m, s.replacement);
        } catch (m) {
          console.warn(`[RegexProcessor] 规则 "${s.name}" 执行失败:`, m);
        }
    return f;
  }
  /**
   * 使用指定规则处理文本（用于预览）
   */
  processWithRule(o, f) {
    try {
      const s = new RegExp(f.pattern, f.flags);
      return o.replace(s, f.replacement);
    } catch (s) {
      return console.warn("[RegexProcessor] 规则执行失败:", s), o;
    }
  }
  /**
   * 验证正则表达式是否有效
   */
  validatePattern(o, f) {
    try {
      return new RegExp(o, f), { valid: !0 };
    } catch (s) {
      return {
        valid: !1,
        error: s instanceof Error ? s.message : "无效的正则表达式"
      };
    }
  }
  /**
   * 获取所有规则
   */
  getRules() {
    return [...this.rules];
  }
  /**
   * 设置规则
   */
  setRules(o) {
    this.rules = [...o];
  }
  /**
   * 添加规则
   */
  addRule(o) {
    this.rules.push(o);
  }
  /**
   * 更新规则
   */
  updateRule(o, f) {
    const s = this.rules.findIndex((m) => m.id === o);
    s >= 0 && (this.rules[s] = { ...this.rules[s], ...f });
  }
  /**
   * 删除规则
   */
  deleteRule(o) {
    this.rules = this.rules.filter((f) => f.id !== o);
  }
  /**
   * 启用/禁用规则
   */
  toggleRule(o) {
    const f = this.rules.find((s) => s.id === o);
    f && (f.enabled = !f.enabled);
  }
  /**
   * 重置为默认规则
   */
  resetToDefaults() {
    this.rules = [...Si];
  }
  /**
   * 获取启用的规则数量
   */
  getEnabledCount() {
    return this.rules.filter((o) => o.enabled).length;
  }
}
const Sy = new bm(), Wg = [
  { value: "g", label: "全局匹配", description: "匹配所有结果" },
  { value: "i", label: "忽略大小写", description: "不区分大小写" },
  { value: "m", label: "多行模式", description: "^$ 匹配每行" },
  { value: "s", label: "点号匹配换行", description: ". 匹配换行符" }
], Ig = ({ rule: c, onChange: o }) => {
  const [f, s] = B.useState(""), [m, p] = B.useState(""), [T, _] = B.useState({ valid: !0 }), v = new bm();
  B.useEffect(() => {
    const D = v.validatePattern(c.pattern, c.flags);
    _(D);
  }, [c.pattern, c.flags]), B.useEffect(() => {
    if (f && T.valid) {
      const D = v.processWithRule(f, c);
      p(D);
    } else
      p("");
  }, [f, c, T.valid]);
  const b = (D) => {
    const A = c.flags.split(""), R = A.indexOf(D);
    R >= 0 ? A.splice(R, 1) : A.push(D), o({ flags: A.join("") });
  };
  return /* @__PURE__ */ i.jsxs("div", { className: "flex flex-col gap-4", children: [
    /* @__PURE__ */ i.jsxs("div", { className: "flex flex-col gap-3", children: [
      /* @__PURE__ */ i.jsxs("div", { className: "flex flex-col gap-1.5", children: [
        /* @__PURE__ */ i.jsx("label", { className: "text-sm font-medium text-foreground", children: "规则名称" }),
        /* @__PURE__ */ i.jsx(
          "input",
          {
            type: "text",
            className: "w-full px-3 py-2 rounded-md border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring",
            value: c.name,
            onChange: (D) => o({ name: D.target.value }),
            placeholder: "例如：移除思维链"
          }
        )
      ] }),
      /* @__PURE__ */ i.jsxs("div", { className: "flex flex-col gap-1.5", children: [
        /* @__PURE__ */ i.jsx("label", { className: "text-sm font-medium text-foreground", children: "描述（可选）" }),
        /* @__PURE__ */ i.jsx(
          "input",
          {
            type: "text",
            className: "w-full px-3 py-2 rounded-md border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring",
            value: c.description || "",
            onChange: (D) => o({ description: D.target.value }),
            placeholder: "简短描述此规则的用途"
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ i.jsxs("div", { className: "flex flex-col gap-3 p-4 bg-card border border-border rounded-lg", children: [
      /* @__PURE__ */ i.jsxs("div", { className: "flex flex-col gap-1.5", children: [
        /* @__PURE__ */ i.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ i.jsx("label", { className: "text-sm font-medium text-foreground", children: "正则表达式" }),
          T.valid ? /* @__PURE__ */ i.jsx(ds, { size: 14, className: "text-green-500" }) : /* @__PURE__ */ i.jsx(fs, { size: 14, className: "text-red-500" })
        ] }),
        /* @__PURE__ */ i.jsx(
          "input",
          {
            type: "text",
            className: `w-full px-3 py-2 rounded-md border bg-background text-foreground font-mono text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 ${T.valid ? "border-input focus:ring-ring" : "border-red-500 focus:ring-red-500"}`,
            value: c.pattern,
            onChange: (D) => o({ pattern: D.target.value }),
            placeholder: "例如：<think>[\\s\\S]*?</think>"
          }
        ),
        !T.valid && T.error && /* @__PURE__ */ i.jsx("p", { className: "text-xs text-red-500", children: T.error })
      ] }),
      /* @__PURE__ */ i.jsxs("div", { className: "flex flex-col gap-1.5", children: [
        /* @__PURE__ */ i.jsx("label", { className: "text-sm font-medium text-foreground", children: "替换为" }),
        /* @__PURE__ */ i.jsx(
          "input",
          {
            type: "text",
            className: "w-full px-3 py-2 rounded-md border border-input bg-background text-foreground font-mono text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring",
            value: c.replacement,
            onChange: (D) => o({ replacement: D.target.value }),
            placeholder: "留空表示删除匹配内容"
          }
        )
      ] }),
      /* @__PURE__ */ i.jsxs("div", { className: "flex flex-col gap-1.5", children: [
        /* @__PURE__ */ i.jsx("label", { className: "text-sm font-medium text-foreground", children: "匹配选项" }),
        /* @__PURE__ */ i.jsx("div", { className: "flex flex-wrap gap-2", children: Wg.map((D) => /* @__PURE__ */ i.jsxs(
          "button",
          {
            className: `px-2 py-1 text-xs rounded-md border transition-colors ${c.flags.includes(D.value) ? "bg-primary-20 border-primary text-primary" : "bg-background border-border text-muted-foreground hover:bg-muted"}`,
            onClick: () => b(D.value),
            title: D.description,
            children: [
              D.label,
              " (",
              D.value,
              ")"
            ]
          },
          D.value
        )) })
      ] })
    ] }),
    /* @__PURE__ */ i.jsxs("div", { className: "flex flex-col gap-3 p-4 bg-muted-20 border border-border rounded-lg", children: [
      /* @__PURE__ */ i.jsxs("div", { className: "flex items-center gap-2 text-sm font-medium text-foreground", children: [
        /* @__PURE__ */ i.jsx(im, { size: 14 }),
        "测试正则"
      ] }),
      /* @__PURE__ */ i.jsxs("div", { className: "flex flex-col gap-1.5", children: [
        /* @__PURE__ */ i.jsx("label", { className: "text-xs text-muted-foreground", children: "输入文本" }),
        /* @__PURE__ */ i.jsx(
          "textarea",
          {
            className: "w-full min-h-[80px] px-3 py-2 rounded-md border border-input bg-background text-foreground text-sm resize-y focus:outline-none focus:ring-2 focus:ring-ring",
            value: f,
            onChange: (D) => s(D.target.value),
            placeholder: `在此输入测试文本，例如：
<think>这是思考内容</think>
正常对话内容`
          }
        )
      ] }),
      f && T.valid && /* @__PURE__ */ i.jsxs("div", { className: "flex flex-col gap-1.5", children: [
        /* @__PURE__ */ i.jsx("label", { className: "text-xs text-muted-foreground", children: "处理结果" }),
        /* @__PURE__ */ i.jsx("div", { className: "min-h-[60px] px-3 py-2 rounded-md border border-border bg-background text-sm whitespace-pre-wrap", children: m || /* @__PURE__ */ i.jsx("span", { className: "text-muted-foreground italic", children: "（无内容）" }) })
      ] })
    ] }),
    /* @__PURE__ */ i.jsxs("div", { className: "flex items-start gap-2 p-3 bg-blue-500/10 border border-blue-500/30 rounded-lg text-sm text-blue-400", children: [
      /* @__PURE__ */ i.jsx(X2, { size: 16, className: "shrink-0 mt-0.5" }),
      /* @__PURE__ */ i.jsxs("div", { children: [
        "正则规则会在发送给 LLM 之前应用于聊天内容，用于清理干扰信息。 常用规则如移除思维链 ",
        /* @__PURE__ */ i.jsx("code", { className: "bg-blue-500/20 px-1 rounded", children: "<think>" }),
        " 标签等。"
      ] })
    ] })
  ] });
}, Pg = ({
  config: c,
  onChange: o
}) => {
  const f = (s) => {
    o({
      ...c,
      [s]: !c[s]
    });
  };
  return /* @__PURE__ */ i.jsxs("div", { className: "space-y-6", children: [
    /* @__PURE__ */ i.jsxs("div", { className: "flex items-center gap-3 mb-6", children: [
      /* @__PURE__ */ i.jsx(es, { className: "w-5 h-5 text-blue-400" }),
      /* @__PURE__ */ i.jsx("h3", { className: "text-lg font-medium text-white", children: "世界书配置" })
    ] }),
    /* @__PURE__ */ i.jsxs("div", { className: "space-y-4", children: [
      /* @__PURE__ */ i.jsxs("div", { className: "flex items-center justify-between p-4 rounded-lg bg-white/5 border border-white/10", children: [
        /* @__PURE__ */ i.jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ i.jsx(es, { className: "w-4 h-4 text-blue-400" }),
          /* @__PURE__ */ i.jsxs("div", { children: [
            /* @__PURE__ */ i.jsx("div", { className: "text-sm font-medium text-white", children: "启用世界书" }),
            /* @__PURE__ */ i.jsx("div", { className: "text-xs text-white/50", children: "总结时注入始终激活（蓝灯）的世界书条目" })
          ] })
        ] }),
        /* @__PURE__ */ i.jsx(
          "button",
          {
            type: "button",
            onClick: () => f("enabled"),
            className: `relative w-11 h-6 rounded-full transition-colors ${c.enabled ? "bg-blue-500" : "bg-white/20"}`,
            children: /* @__PURE__ */ i.jsx(
              "span",
              {
                className: `absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white shadow transition-transform ${c.enabled ? "translate-x-5" : ""}`
              }
            )
          }
        )
      ] }),
      /* @__PURE__ */ i.jsxs("div", { className: `flex items-center justify-between p-4 rounded-lg bg-white/5 border border-white/10 ${c.enabled ? "" : "opacity-50"}`, children: [
        /* @__PURE__ */ i.jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ i.jsx(q2, { className: "w-4 h-4 text-green-400" }),
          /* @__PURE__ */ i.jsxs("div", { children: [
            /* @__PURE__ */ i.jsx("div", { className: "text-sm font-medium text-white", children: "包含全局世界书" }),
            /* @__PURE__ */ i.jsx("div", { className: "text-xs text-white/50", children: "关闭后只读取角色世界书和聊天世界书" })
          ] })
        ] }),
        /* @__PURE__ */ i.jsx(
          "button",
          {
            type: "button",
            disabled: !c.enabled,
            onClick: () => f("includeGlobal"),
            className: `relative w-11 h-6 rounded-full transition-colors ${c.includeGlobal && c.enabled ? "bg-green-500" : "bg-white/20"} ${c.enabled ? "" : "cursor-not-allowed"}`,
            children: /* @__PURE__ */ i.jsx(
              "span",
              {
                className: `absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white shadow transition-transform ${c.includeGlobal ? "translate-x-5" : ""}`
              }
            )
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ i.jsx("div", { className: "p-4 rounded-lg bg-blue-500/10 border border-blue-500/20", children: /* @__PURE__ */ i.jsxs("div", { className: "text-sm text-blue-300", children: [
      /* @__PURE__ */ i.jsx("strong", { children: "说明：" }),
      "总结时会自动获取所有始终激活（constant=true）的世界书条目作为背景设定注入到提示词中。"
    ] }) })
  ] });
}, V0 = [
  // 模型配置组
  { id: "model", label: "模型配置", icon: ji, group: "model" },
  // 上下文配置组
  { id: "prompt", label: "提示词模板", icon: Gn, group: "context" },
  { id: "regex", label: "正则规则", icon: cm, group: "context" },
  { id: "worldbook", label: "世界书", icon: es, group: "context" }
], ey = [
  { id: "llm", label: "LLM 预设", icon: Yn },
  { id: "vector", label: "向量化", icon: ms },
  { id: "rerank", label: "Rerank", icon: am }
], ty = () => {
  const [c, o] = B.useState("model"), [f, s] = B.useState("llm"), [m, p] = B.useState(Dg), [T, _] = B.useState(null), [v, b] = B.useState(null), [D, A] = B.useState(!1), [R, X] = B.useState([...Si]), [ee, L] = B.useState(null);
  B.useEffect(() => {
  }, []);
  const P = (U) => {
    p((W) => ({ ...W, selectedPresetId: U.id })), _(U);
  }, V = () => {
    const U = vm(`预设 ${m.llmPresets.length + 1}`);
    U.isDefault = !1, p((W) => ({
      ...W,
      llmPresets: [...W.llmPresets, U],
      selectedPresetId: U.id
    })), _(U), A(!0);
  }, ue = (U) => {
    p((W) => ({
      ...W,
      llmPresets: W.llmPresets.map((de) => de.id === U.id ? U : de)
    })), _(U), A(!0);
  }, k = (U) => {
    const W = {
      ...U,
      id: `preset_${Date.now()}`,
      name: `${U.name} (副本)`,
      isDefault: !1,
      createdAt: Date.now(),
      updatedAt: Date.now()
    };
    p((de) => ({ ...de, llmPresets: [...de.llmPresets, W] })), A(!0);
  }, ge = (U) => {
    U.isDefault || (p((W) => ({
      ...W,
      llmPresets: W.llmPresets.filter((de) => de.id !== U.id),
      selectedPresetId: W.selectedPresetId === U.id ? null : W.selectedPresetId
    })), (T == null ? void 0 : T.id) === U.id && _(null), A(!0));
  }, Qe = (U) => {
    b(U);
  }, F = (U) => {
    p((W) => ({
      ...W,
      promptTemplates: [...W.promptTemplates, U]
    })), A(!0);
  }, Z = (U) => {
    p((W) => ({
      ...W,
      promptTemplates: W.promptTemplates.map((de) => de.id === U.id ? U : de)
    })), b(U), A(!0);
  }, _e = (U) => {
    U.isBuiltIn || (p((W) => ({
      ...W,
      promptTemplates: W.promptTemplates.filter((de) => de.id !== U.id)
    })), (v == null ? void 0 : v.id) === U.id && b(null), A(!0));
  }, Ie = (U) => {
    p((W) => ({ ...W, vectorConfig: U })), A(!0);
  }, xt = (U) => {
    p((W) => ({ ...W, rerankConfig: U })), A(!0);
  }, bt = () => {
    console.log("保存配置:", m), A(!1);
  };
  return /* @__PURE__ */ i.jsxs("div", { className: "flex flex-col gap-4 h-full overflow-hidden p-4", children: [
    /* @__PURE__ */ i.jsxs("div", { className: "flex items-center gap-3 pb-4 mb-4 border-b border-border shrink-0", children: [
      /* @__PURE__ */ i.jsx(Yn, { size: 24, className: "text-primary" }),
      /* @__PURE__ */ i.jsx("h2", { className: "text-2xl font-semibold text-foreground m-0", children: "API 配置" }),
      D && /* @__PURE__ */ i.jsxs("button", { className: "ml-auto inline-flex items-center gap-2 px-4 py-2 rounded-md font-medium transition-colors bg-primary text-primary-foreground hover:bg-primary-90", onClick: bt, children: [
        /* @__PURE__ */ i.jsx(mp, { size: 16 }),
        "保存更改"
      ] })
    ] }),
    /* @__PURE__ */ i.jsxs("div", { className: "flex items-center gap-1 shrink-0", children: [
      V0.filter((U) => U.group === "model").map((U) => /* @__PURE__ */ i.jsxs(
        "button",
        {
          className: `inline-flex items-center gap-2 px-3 py-2 border rounded-md text-sm font-medium transition-all
                            ${c === U.id ? "bg-primary-20 text-primary border-primary-30" : "bg-transparent text-muted-foreground border-transparent hover:bg-muted hover:text-foreground hover:border-border active:scale-95"}`,
          onClick: () => o(U.id),
          children: [
            qn.createElement(U.icon, { size: 16 }),
            U.label
          ]
        },
        U.id
      )),
      /* @__PURE__ */ i.jsx("div", { className: "w-px h-6 bg-border mx-2" }),
      V0.filter((U) => U.group === "context").map((U) => /* @__PURE__ */ i.jsxs(
        "button",
        {
          className: `inline-flex items-center gap-2 px-3 py-2 border rounded-md text-sm font-medium transition-all
                            ${c === U.id ? "bg-primary-20 text-primary border-primary-30" : "bg-transparent text-muted-foreground border-transparent hover:bg-muted hover:text-foreground hover:border-border active:scale-95"}`,
          onClick: () => o(U.id),
          children: [
            qn.createElement(U.icon, { size: 16 }),
            U.label
          ]
        },
        U.id
      ))
    ] }),
    /* @__PURE__ */ i.jsxs("div", { className: "flex-1 overflow-y-auto", children: [
      c === "model" && /* @__PURE__ */ i.jsxs("div", { className: "flex flex-col gap-4", children: [
        /* @__PURE__ */ i.jsx("div", { className: "flex gap-2 border-b border-border pb-2 sticky top-0 bg-background z-10 pt-2", children: ey.map((U) => /* @__PURE__ */ i.jsx(
          "button",
          {
            className: `px-3 py-1.5 text-sm rounded-md border transition-all
                                        ${f === U.id ? "bg-primary-20 text-primary border-primary-30" : "text-muted-foreground border-transparent hover:text-foreground hover:bg-muted hover:border-border active:scale-95"}`,
            onClick: () => s(U.id),
            children: U.label
          },
          U.id
        )) }),
        f === "llm" && /* @__PURE__ */ i.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-[300px_1fr] gap-4", children: [
          /* @__PURE__ */ i.jsxs("div", { className: "flex flex-col gap-3", children: [
            /* @__PURE__ */ i.jsxs("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ i.jsx("h3", { className: "m-0 text-sm font-semibold text-foreground", children: "预设列表" }),
              /* @__PURE__ */ i.jsxs("button", { className: "inline-flex items-center gap-1.5 px-2 py-1.5 rounded-md text-sm transition-colors hover:bg-accent hover:text-accent-foreground text-muted-foreground", onClick: V, children: [
                /* @__PURE__ */ i.jsx(ps, { size: 16 }),
                "新建"
              ] })
            ] }),
            /* @__PURE__ */ i.jsx("div", { className: "flex flex-col gap-2", children: m.llmPresets.map((U) => /* @__PURE__ */ i.jsx(
              Rg,
              {
                preset: U,
                isSelected: m.selectedPresetId === U.id,
                onSelect: () => P(U),
                onEdit: () => P(U),
                onCopy: () => k(U),
                onDelete: () => ge(U)
              },
              U.id
            )) })
          ] }),
          /* @__PURE__ */ i.jsx("div", { className: "flex flex-col gap-4", children: T ? /* @__PURE__ */ i.jsx(Lg, { preset: T, onChange: ue }) : /* @__PURE__ */ i.jsxs("div", { className: "flex flex-col items-center justify-center p-10 text-muted-foreground gap-4 border border-dashed border-border rounded-lg", children: [
            /* @__PURE__ */ i.jsx(Yn, { size: 48, className: "opacity-50" }),
            /* @__PURE__ */ i.jsx("p", { children: "选择或创建一个预设开始配置" })
          ] }) })
        ] }),
        f === "vector" && /* @__PURE__ */ i.jsx(Yg, { config: m.vectorConfig, onChange: Ie }),
        f === "rerank" && /* @__PURE__ */ i.jsx(Qg, { config: m.rerankConfig, onChange: xt })
      ] }),
      c === "prompt" && /* @__PURE__ */ i.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-[320px_1fr] gap-4 h-full", children: [
        /* @__PURE__ */ i.jsx(
          Kg,
          {
            templates: m.promptTemplates,
            selectedId: (v == null ? void 0 : v.id) || null,
            onSelect: Qe,
            onAdd: F,
            onUpdate: Z,
            onDelete: _e
          }
        ),
        /* @__PURE__ */ i.jsx("div", { className: "flex flex-col gap-4 overflow-y-auto", children: v ? /* @__PURE__ */ i.jsx(
          $g,
          {
            template: v,
            llmPresets: m.llmPresets,
            defaultPresetId: m.selectedPresetId,
            onChange: Z
          }
        ) : /* @__PURE__ */ i.jsxs("div", { className: "flex flex-col items-center justify-center p-10 text-muted-foreground gap-4 border border-dashed border-border rounded-lg h-full", children: [
          /* @__PURE__ */ i.jsx(Gn, { size: 48, className: "opacity-50" }),
          /* @__PURE__ */ i.jsx("p", { children: "选择一个模板进行编辑" })
        ] }) })
      ] }),
      c === "regex" && /* @__PURE__ */ i.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-[320px_1fr] gap-4 h-full", children: [
        /* @__PURE__ */ i.jsx(
          Fg,
          {
            rules: R,
            selectedId: (ee == null ? void 0 : ee.id) || null,
            onSelect: (U) => {
              const W = R.find((de) => de.id === U);
              L(W || null);
            },
            onToggle: (U) => {
              X((W) => W.map(
                (de) => de.id === U ? { ...de, enabled: !de.enabled } : de
              )), A(!0);
            },
            onDelete: (U) => {
              X((W) => W.filter((de) => de.id !== U)), (ee == null ? void 0 : ee.id) === U && L(null), A(!0);
            },
            onAdd: () => {
              const U = {
                id: `rule_${Date.now()}`,
                name: "新规则",
                pattern: "",
                replacement: "",
                enabled: !0,
                flags: "gi",
                description: ""
              };
              X((W) => [...W, U]), L(U), A(!0);
            },
            onReset: () => {
              X([...Si]), L(null), A(!0);
            }
          }
        ),
        /* @__PURE__ */ i.jsx("div", { className: "flex flex-col gap-4 overflow-y-auto", children: ee ? /* @__PURE__ */ i.jsx(
          Ig,
          {
            rule: ee,
            onChange: (U) => {
              const W = { ...ee, ...U };
              L(W), X((de) => de.map(
                (tt) => tt.id === W.id ? W : tt
              )), A(!0);
            }
          }
        ) : /* @__PURE__ */ i.jsxs("div", { className: "flex flex-col items-center justify-center p-10 text-muted-foreground gap-4 border border-dashed border-border rounded-lg h-full", children: [
          /* @__PURE__ */ i.jsx(cm, { size: 48, className: "opacity-50" }),
          /* @__PURE__ */ i.jsx("p", { children: "选择或创建一个正则规则" })
        ] }) })
      ] }),
      c === "worldbook" && /* @__PURE__ */ i.jsx("div", { className: "max-w-2xl py-4", children: /* @__PURE__ */ i.jsx(
        Pg,
        {
          config: m.worldbookConfig,
          onChange: (U) => {
            p((W) => ({ ...W, worldbookConfig: U })), A(!0);
          }
        }
      ) })
    ] })
  ] });
};
function ly(c) {
  return new Date(c).toTimeString().slice(0, 8);
}
const ay = {
  [ze.DEBUG]: "text-muted-foreground",
  [ze.INFO]: "text-blue-400",
  [ze.SUCCESS]: "text-green-400",
  [ze.WARN]: "text-yellow-400",
  [ze.ERROR]: "text-red-400"
}, ny = ({ entry: c }) => {
  const [o, f] = B.useState(!1), s = c.data !== void 0, m = yi[c.level], p = ay[c.level] || "";
  return /* @__PURE__ */ i.jsxs("div", { className: "mb-0.5", children: [
    /* @__PURE__ */ i.jsxs(
      "div",
      {
        className: `flex items-start gap-2 px-1 py-0.5 rounded-sm transition-colors hover:bg-muted-50 ${s ? "cursor-pointer" : ""}`,
        onClick: () => s && f(!o),
        children: [
          /* @__PURE__ */ i.jsx("span", { className: "flex items-center text-muted-foreground shrink-0", children: s ? o ? /* @__PURE__ */ i.jsx(I0, { size: 12 }) : /* @__PURE__ */ i.jsx(P0, { size: 12 }) : /* @__PURE__ */ i.jsx("span", { style: { width: 12, display: "inline-block" } }) }),
          /* @__PURE__ */ i.jsxs("span", { className: "text-muted-foreground shrink-0", children: [
            "[",
            ly(c.timestamp),
            "]"
          ] }),
          /* @__PURE__ */ i.jsxs("span", { className: "text-purple-400 shrink-0 whitespace-pre", children: [
            "[",
            c.module.padEnd(16),
            "]"
          ] }),
          /* @__PURE__ */ i.jsxs("span", { className: `shrink-0 whitespace-pre ${p}`, children: [
            m.icon,
            " ",
            m.label.padEnd(7)
          ] }),
          /* @__PURE__ */ i.jsx("span", { className: "text-foreground break-words", children: c.message })
        ]
      }
    ),
    o && s && /* @__PURE__ */ i.jsx("div", { className: "ml-8 px-3 py-2 bg-muted-30 border-l-2 border-border rounded-r-sm", children: /* @__PURE__ */ i.jsx("pre", { className: "m-0 text-muted-foreground text-sm whitespace-pre-wrap break-words", children: JSON.stringify(c.data, null, 2) }) })
  ] });
}, Z0 = 100;
class uy {
  constructor() {
    wl(this, "entries", []);
    wl(this, "listeners", /* @__PURE__ */ new Set());
  }
  /**
   * 创建新的日志条目（发送阶段）
   */
  logSend(o) {
    const f = `log_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`, s = {
      id: f,
      timestamp: Date.now(),
      type: o.type,
      direction: "sent",
      systemPrompt: o.systemPrompt,
      userPrompt: o.userPrompt,
      tokensSent: o.tokensSent,
      model: o.model,
      floorRange: o.floorRange,
      status: "pending"
    };
    return this.entries.unshift(s), this.trimEntries(), this.notifyListeners(), f;
  }
  /**
   * 更新日志条目（接收阶段）
   */
  logReceive(o, f) {
    const s = this.entries.find((T) => T.id === o);
    if (!s) return;
    const m = {
      id: `${o}_recv`,
      timestamp: Date.now(),
      type: s.type,
      direction: "received",
      response: f.response,
      tokensReceived: f.tokensReceived,
      status: f.status,
      error: f.error,
      duration: f.duration,
      model: s.model,
      floorRange: s.floorRange
    };
    s.status = f.status, s.duration = f.duration;
    const p = this.entries.findIndex((T) => T.id === o);
    p >= 0 ? this.entries.splice(p, 0, m) : this.entries.unshift(m), this.trimEntries(), this.notifyListeners();
  }
  /**
   * 快捷方法：记录完整的调用过程
   */
  async logCall(o, f) {
    const s = this.logSend(o), m = Date.now();
    try {
      const p = await f();
      return this.logReceive(s, {
        response: typeof p == "string" ? p : JSON.stringify(p),
        status: "success",
        duration: Date.now() - m
      }), p;
    } catch (p) {
      throw this.logReceive(s, {
        status: "error",
        error: p instanceof Error ? p.message : String(p),
        duration: Date.now() - m
      }), p;
    }
  }
  /**
   * 获取所有日志
   */
  getAll() {
    return [...this.entries];
  }
  /**
   * 获取配对的日志（发送+接收）
   */
  getPaired() {
    const o = [], f = this.entries.filter((s) => s.direction === "sent");
    for (const s of f) {
      const m = this.entries.find(
        (p) => p.id === `${s.id}_recv` && p.direction === "received"
      );
      o.push({ sent: s, received: m });
    }
    return o;
  }
  /**
   * 清除所有日志
   */
  clear() {
    this.entries = [], this.notifyListeners();
  }
  /**
   * 订阅日志变化
   */
  subscribe(o) {
    return this.listeners.add(o), () => this.listeners.delete(o);
  }
  /**
   * 获取日志数量
   */
  getCount() {
    return this.entries.filter((o) => o.direction === "sent").length;
  }
  /**
   * 裁剪条目
   */
  trimEntries() {
    this.entries.length > Z0 * 2 && (this.entries = this.entries.slice(0, Z0 * 2));
  }
  /**
   * 通知监听器
   */
  notifyListeners() {
    for (const o of this.listeners)
      o();
  }
}
const di = new uy(), iy = {
  summarize: { label: "总结", color: "bg-blue-500/20 text-blue-400" },
  vectorize: { label: "向量化", color: "bg-purple-500/20 text-purple-400" },
  query: { label: "查询", color: "bg-green-500/20 text-green-400" },
  other: { label: "其他", color: "bg-gray-500/20 text-gray-400" }
}, cy = ({ status: c }) => {
  switch (c) {
    case "pending":
      return /* @__PURE__ */ i.jsx(um, { size: 14, className: "animate-spin text-yellow-400" });
    case "success":
      return /* @__PURE__ */ i.jsx(ds, { size: 14, className: "text-green-400" });
    case "error":
      return /* @__PURE__ */ i.jsx(fs, { size: 14, className: "text-red-400" });
  }
}, ry = (c) => new Date(c).toLocaleTimeString("zh-CN", {
  hour12: !1,
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit"
}), sy = (c) => c === void 0 ? "-" : c < 1e3 ? `${c}ms` : `${(c / 1e3).toFixed(1)}s`, oy = ({ sent: c, received: o }) => {
  const [f, s] = B.useState(!1), m = iy[c.type];
  return /* @__PURE__ */ i.jsxs("div", { className: "border border-border rounded-lg overflow-hidden bg-card", children: [
    /* @__PURE__ */ i.jsxs(
      "div",
      {
        className: "flex items-center gap-2 px-3 py-2 bg-muted-20 cursor-pointer hover:bg-muted-30",
        onClick: () => s(!f),
        children: [
          f ? /* @__PURE__ */ i.jsx(I0, { size: 14 }) : /* @__PURE__ */ i.jsx(P0, { size: 14 }),
          /* @__PURE__ */ i.jsx("span", { className: `px-2 py-0.5 rounded text-xs font-medium ${m.color}`, children: m.label }),
          /* @__PURE__ */ i.jsx("span", { className: "text-xs text-muted-foreground", children: ry(c.timestamp) }),
          /* @__PURE__ */ i.jsx(cy, { status: (o == null ? void 0 : o.status) || c.status }),
          c.floorRange && /* @__PURE__ */ i.jsxs("span", { className: "text-xs text-muted-foreground", children: [
            "楼层 #",
            c.floorRange[0],
            "-",
            c.floorRange[1]
          ] }),
          /* @__PURE__ */ i.jsxs("span", { className: "ml-auto text-xs text-muted-foreground flex items-center gap-1", children: [
            /* @__PURE__ */ i.jsx(em, { size: 12 }),
            sy((o == null ? void 0 : o.duration) || c.duration)
          ] })
        ]
      }
    ),
    f && /* @__PURE__ */ i.jsxs("div", { className: "flex flex-col md:flex-row", children: [
      /* @__PURE__ */ i.jsxs("div", { className: "flex-1 border-r border-border p-3", children: [
        /* @__PURE__ */ i.jsxs("div", { className: "flex items-center gap-2 mb-2 text-sm font-medium text-blue-400", children: [
          /* @__PURE__ */ i.jsx(yp, { size: 14 }),
          "发送",
          c.tokensSent && /* @__PURE__ */ i.jsxs("span", { className: "text-xs text-muted-foreground ml-auto", children: [
            "~",
            c.tokensSent,
            " tokens"
          ] })
        ] }),
        c.systemPrompt && /* @__PURE__ */ i.jsxs("div", { className: "mb-3", children: [
          /* @__PURE__ */ i.jsx("div", { className: "text-xs text-muted-foreground mb-1", children: "System" }),
          /* @__PURE__ */ i.jsx("div", { className: "text-sm p-2 bg-muted-20 rounded max-h-32 overflow-y-auto whitespace-pre-wrap", children: c.systemPrompt })
        ] }),
        c.userPrompt && /* @__PURE__ */ i.jsxs("div", { children: [
          /* @__PURE__ */ i.jsx("div", { className: "text-xs text-muted-foreground mb-1", children: "User" }),
          /* @__PURE__ */ i.jsx("div", { className: "text-sm p-2 bg-muted-20 rounded max-h-48 overflow-y-auto whitespace-pre-wrap", children: c.userPrompt })
        ] })
      ] }),
      /* @__PURE__ */ i.jsxs("div", { className: "flex-1 p-3", children: [
        /* @__PURE__ */ i.jsxs("div", { className: "flex items-center gap-2 mb-2 text-sm font-medium text-green-400", children: [
          /* @__PURE__ */ i.jsx($0, { size: 14 }),
          "接收",
          (o == null ? void 0 : o.tokensReceived) && /* @__PURE__ */ i.jsxs("span", { className: "text-xs text-muted-foreground ml-auto", children: [
            "~",
            o.tokensReceived,
            " tokens"
          ] })
        ] }),
        (o == null ? void 0 : o.status) === "error" && o.error && /* @__PURE__ */ i.jsx("div", { className: "p-2 bg-red-500/10 border border-red-500/30 rounded text-sm text-red-400", children: o.error }),
        (o == null ? void 0 : o.response) && /* @__PURE__ */ i.jsx("div", { className: "text-sm p-2 bg-muted-20 rounded max-h-48 overflow-y-auto whitespace-pre-wrap", children: o.response }),
        !o && c.status === "pending" && /* @__PURE__ */ i.jsxs("div", { className: "flex items-center gap-2 text-sm text-muted-foreground", children: [
          /* @__PURE__ */ i.jsx(um, { size: 14, className: "animate-spin" }),
          "等待响应..."
        ] })
      ] })
    ] })
  ] });
}, fy = () => {
  const [c, o] = B.useState(di.getPaired());
  return B.useEffect(() => di.subscribe(() => {
    o(di.getPaired());
  }), []), /* @__PURE__ */ i.jsxs("div", { className: "flex flex-col h-full", children: [
    /* @__PURE__ */ i.jsxs("div", { className: "flex items-center justify-between px-4 py-3 border-b border-border shrink-0", children: [
      /* @__PURE__ */ i.jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ i.jsx(gs, { size: 16, className: "text-primary" }),
        /* @__PURE__ */ i.jsx("span", { className: "font-medium text-foreground", children: "模型调用日志" }),
        /* @__PURE__ */ i.jsxs("span", { className: "text-xs text-muted-foreground", children: [
          "(",
          c.length,
          ")"
        ] })
      ] }),
      /* @__PURE__ */ i.jsx(
        "button",
        {
          className: "p-1.5 rounded-md hover:bg-destructive hover:text-destructive-foreground transition-colors text-muted-foreground",
          onClick: () => di.clear(),
          title: "清除日志",
          children: /* @__PURE__ */ i.jsx(Qn, { size: 14 })
        }
      )
    ] }),
    /* @__PURE__ */ i.jsx("div", { className: "flex-1 overflow-y-auto p-4", children: c.length === 0 ? /* @__PURE__ */ i.jsxs("div", { className: "flex flex-col items-center justify-center h-full text-muted-foreground gap-3", children: [
      /* @__PURE__ */ i.jsx($0, { size: 48, className: "opacity-30" }),
      /* @__PURE__ */ i.jsx("p", { className: "text-sm", children: "暂无模型调用记录" }),
      /* @__PURE__ */ i.jsx("p", { className: "text-xs", children: "触发总结或向量化后，调用记录将显示在这里" })
    ] }) : /* @__PURE__ */ i.jsx("div", { className: "flex flex-col gap-3", children: c.map(({ sent: f, received: s }) => /* @__PURE__ */ i.jsx(oy, { sent: f, received: s }, f.id)) }) })
  ] });
}, dy = [
  { id: "runtime", label: "运行日志", icon: Ga },
  { id: "model", label: "模型日志", icon: gs }
], my = [
  "ALL",
  "Logger",
  "EventBus",
  "Summarizer",
  "CORE/Pipeline",
  "CORE/RAG",
  "CORE/Memory",
  "UI/GraphView",
  "UI/MemoryStream"
], hy = () => {
  const [c, o] = B.useState("runtime"), [f, s] = B.useState([]), [m, p] = B.useState([]), [T, _] = B.useState(""), [v, b] = B.useState(-1), [D, A] = B.useState("ALL"), [R, X] = B.useState(!0), [ee, L] = B.useState(!1), [P, V] = B.useState(!1), ue = B.useRef(null), k = B.useRef(null);
  B.useEffect(() => {
    s(We.getLogs());
    const F = We.subscribe((Z) => {
      s((_e) => [..._e, Z]);
    });
    return () => F();
  }, []), B.useEffect(() => {
    let F = f;
    if (v !== -1 && (F = F.filter((Z) => Z.level >= v)), D !== "ALL" && (F = F.filter((Z) => Z.module.startsWith(D))), T.trim()) {
      const Z = T.toLowerCase();
      F = F.filter(
        (_e) => _e.message.toLowerCase().includes(Z) || _e.module.toLowerCase().includes(Z)
      );
    }
    p(F);
  }, [f, v, D, T]), B.useEffect(() => {
    R && k.current && k.current.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }, [m, R]);
  const ge = B.useCallback(async () => {
    await We.clear(), s([]);
  }, []), Qe = B.useCallback(() => {
    const F = We.exportToMarkdown(), Z = We.getExportFilename(), _e = new Blob([F], { type: "text/markdown" }), Ie = URL.createObjectURL(_e), xt = document.createElement("a");
    xt.href = Ie, xt.download = Z, xt.click(), URL.revokeObjectURL(Ie), We.success("DevLog", `日志已导出: ${Z}`);
  }, []);
  return /* @__PURE__ */ i.jsxs("div", { className: "flex flex-col h-full gap-3", children: [
    /* @__PURE__ */ i.jsxs("div", { className: "flex items-center gap-4 shrink-0", children: [
      /* @__PURE__ */ i.jsxs("div", { className: "engram-page-header", children: [
        /* @__PURE__ */ i.jsx(Ga, { size: 24 }),
        /* @__PURE__ */ i.jsx("h2", { children: "开发日志" })
      ] }),
      /* @__PURE__ */ i.jsx("div", { className: "flex gap-1 ml-4", children: dy.map((F) => /* @__PURE__ */ i.jsxs(
        "button",
        {
          className: `inline-flex items-center gap-2 px-3 py-1.5 rounded-md text-sm transition-colors ${c === F.id ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"}`,
          onClick: () => o(F.id),
          children: [
            /* @__PURE__ */ i.jsx(F.icon, { size: 14 }),
            F.label
          ]
        },
        F.id
      )) })
    ] }),
    c === "runtime" && /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
      /* @__PURE__ */ i.jsxs("div", { className: "flex items-center gap-2 flex-wrap shrink-0", children: [
        /* @__PURE__ */ i.jsxs("div", { className: "engram-dropdown", children: [
          /* @__PURE__ */ i.jsxs(
            "button",
            {
              className: "engram-btn engram-btn-ghost",
              onClick: () => L(!ee),
              children: [
                /* @__PURE__ */ i.jsx(U0, { size: 14 }),
                v === -1 ? "全部级别" : yi[v].label
              ]
            }
          ),
          ee && /* @__PURE__ */ i.jsxs("div", { className: "engram-dropdown-menu", children: [
            /* @__PURE__ */ i.jsx(
              "button",
              {
                onClick: () => {
                  b(-1), L(!1);
                },
                children: "全部级别"
              }
            ),
            Object.entries(yi).map(([F, Z]) => /* @__PURE__ */ i.jsxs(
              "button",
              {
                onClick: () => {
                  b(Number(F)), L(!1);
                },
                children: [
                  Z.icon,
                  " ",
                  Z.label
                ]
              },
              F
            ))
          ] })
        ] }),
        /* @__PURE__ */ i.jsxs("div", { className: "engram-dropdown", children: [
          /* @__PURE__ */ i.jsxs(
            "button",
            {
              className: "engram-btn engram-btn-ghost",
              onClick: () => V(!P),
              children: [
                /* @__PURE__ */ i.jsx(U0, { size: 14 }),
                D
              ]
            }
          ),
          P && /* @__PURE__ */ i.jsx("div", { className: "engram-dropdown-menu", children: my.map((F) => /* @__PURE__ */ i.jsx(
            "button",
            {
              onClick: () => {
                A(F), V(!1);
              },
              children: F
            },
            F
          )) })
        ] }),
        /* @__PURE__ */ i.jsxs("div", { className: "engram-search-box", children: [
          /* @__PURE__ */ i.jsx(ts, { size: 14 }),
          /* @__PURE__ */ i.jsx(
            "input",
            {
              type: "text",
              placeholder: "搜索日志...",
              value: T,
              onChange: (F) => _(F.target.value)
            }
          )
        ] }),
        /* @__PURE__ */ i.jsxs("div", { className: "flex items-center gap-1 ml-auto", children: [
          /* @__PURE__ */ i.jsx(
            "button",
            {
              className: `engram-btn engram-btn-ghost ${R ? "active" : ""}`,
              onClick: () => X(!R),
              title: "自动滚动到最新",
              children: /* @__PURE__ */ i.jsx(s2, { size: 14 })
            }
          ),
          /* @__PURE__ */ i.jsx(
            "button",
            {
              className: "engram-btn engram-btn-ghost",
              onClick: ge,
              title: "清空日志",
              children: /* @__PURE__ */ i.jsx(Qn, { size: 14 })
            }
          ),
          /* @__PURE__ */ i.jsxs(
            "button",
            {
              className: "engram-btn engram-btn-primary",
              onClick: Qe,
              title: "导出日志",
              children: [
                /* @__PURE__ */ i.jsx(lm, { size: 14 }),
                "导出"
              ]
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ i.jsx("div", { className: "flex-1 p-3 bg-[#1a1a2e] border border-border-default rounded-lg overflow-y-auto font-mono text-md leading-relaxed", ref: ue, children: m.length === 0 ? /* @__PURE__ */ i.jsxs("div", { className: "flex flex-col items-center justify-center h-full gap-3 text-disabled", children: [
        /* @__PURE__ */ i.jsx(Ga, { size: 48, strokeWidth: 1 }),
        /* @__PURE__ */ i.jsx("p", { children: "暂无日志记录" })
      ] }) : /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
        m.map((F) => /* @__PURE__ */ i.jsx(ny, { entry: F }, F.id)),
        /* @__PURE__ */ i.jsx("div", { ref: k })
      ] }) }),
      /* @__PURE__ */ i.jsxs("div", { className: "flex items-center gap-2 px-3 py-2 bg-elevated rounded-md text-md text-muted shrink-0", children: [
        /* @__PURE__ */ i.jsxs("span", { children: [
          "共 ",
          f.length,
          " 条日志"
        ] }),
        m.length !== f.length && /* @__PURE__ */ i.jsxs("span", { children: [
          "（显示 ",
          m.length,
          " 条）"
        ] })
      ] })
    ] }),
    c === "model" && /* @__PURE__ */ i.jsx("div", { className: "flex-1 overflow-hidden", children: /* @__PURE__ */ i.jsx(fy, {}) })
  ] });
}, py = () => {
  const [c, o] = B.useState("default");
  B.useEffect(() => {
    o(Ul.getTheme());
  }, []);
  const f = (m) => {
    Ul.setTheme(m), Ya.set("theme", m), o(m);
  }, s = Object.entries(mi).map(([m, p]) => {
    let T = p.colors.background, _ = p.colors.primary;
    return m === "sillytavern" && (T = "var(--SmartThemeBlurTintColor, #333)", _ = "var(--SmartThemeQuoteColor, #0af)"), {
      id: m,
      name: p.name,
      background: T,
      sidebar: p.colors.sidebar,
      // Add sidebar color
      primary: _
    };
  });
  return /* @__PURE__ */ i.jsxs("div", { className: "space-y-4", children: [
    /* @__PURE__ */ i.jsx("h3", { className: "text-lg font-medium", children: "主题设置" }),
    /* @__PURE__ */ i.jsx("div", { className: "grid grid-cols-2 sm:grid-cols-4 gap-4", children: s.map((m) => /* @__PURE__ */ i.jsxs(
      "button",
      {
        onClick: () => f(m.id),
        className: `
                            relative group flex flex-col items-center gap-2 p-3 rounded-xl border-2 transition-all
                            ${c === m.id ? "border-primary bg-accent/10" : "border-transparent hover:bg-accent/5"}
                        `,
        children: [
          /* @__PURE__ */ i.jsxs("div", { className: "flex items-center justify-center -space-x-3 mb-2", children: [
            /* @__PURE__ */ i.jsx(
              "div",
              {
                className: "w-8 h-8 rounded-full border border-border shadow-sm z-10",
                style: { background: m.background },
                title: "Background"
              }
            ),
            /* @__PURE__ */ i.jsx(
              "div",
              {
                className: "w-8 h-8 rounded-full border border-border shadow-sm z-20",
                style: { background: m.sidebar },
                title: "Sidebar"
              }
            ),
            /* @__PURE__ */ i.jsx(
              "div",
              {
                className: "w-8 h-8 rounded-full border border-border shadow-sm z-30 ring-2 ring-background",
                style: { background: m.primary },
                title: "Primary"
              }
            )
          ] }),
          /* @__PURE__ */ i.jsx("span", { className: `text-sm font-medium ${c === m.id ? "text-primary" : "text-muted-foreground"}`, children: m.name }),
          c === m.id && /* @__PURE__ */ i.jsx("div", { className: "absolute top-2 right-2 w-2 h-2 rounded-full bg-primary" })
        ]
      },
      m.id
    )) })
  ] });
}, gy = () => /* @__PURE__ */ i.jsxs("div", { className: "engram-settings", children: [
  /* @__PURE__ */ i.jsxs("div", { className: "engram-page-header", children: [
    /* @__PURE__ */ i.jsx(ji, { size: 24 }),
    /* @__PURE__ */ i.jsx("h2", { children: "设置" })
  ] }),
  /* @__PURE__ */ i.jsx("div", { className: "engram-page-content", children: /* @__PURE__ */ i.jsx("div", { className: "space-y-6", children: /* @__PURE__ */ i.jsx("section", { className: "bg-card rounded-lg p-6 border border-border shadow-sm", children: /* @__PURE__ */ i.jsx(py, {}) }) }) })
] }), yy = {
  "/dashboard": ym,
  "/memory": jg,
  "/graph": Ng,
  "/processing": fi,
  "/processing/summarize": fi,
  "/processing/vectorize": fi,
  "/processing/batch": fi,
  "/api": ty,
  "/dev": hy,
  "/settings": gy
}, vy = ({ onClose: c }) => {
  const [o, f] = B.useState("/dashboard"), [s, m] = B.useState(!0), [p, T] = B.useState(
    typeof window < "u" && window.innerWidth < 768
  );
  B.useEffect(() => {
    const v = () => {
      T(window.innerWidth < 768);
    };
    return window.addEventListener("resize", v), () => window.removeEventListener("resize", v);
  }, []), B.useEffect(() => {
    p && m(!1);
  }, [p]);
  const _ = yy[o] || ym;
  return /* @__PURE__ */ i.jsx(sg, { children: /* @__PURE__ */ i.jsx(
    pg,
    {
      currentPath: o,
      onNavigate: f,
      isSidebarOpen: s,
      onToggleSidebar: () => m(!s),
      onCloseSidebar: () => m(!1),
      isMobile: p,
      onClose: c,
      children: /* @__PURE__ */ i.jsx(_, { onNavigate: f })
    }
  ) });
};
xg((c, o) => {
  const f = e2.createRoot(c);
  return f.render(qn.createElement(vy, { onClose: o })), f;
});
document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", Y0) : Y0();
export {
  Si as D,
  We as L,
  di as M,
  bm as R,
  Ya as S,
  by as c,
  K0 as g,
  cg as i,
  Sy as r
};
//# sourceMappingURL=index-CXMSo1jn.js.map
