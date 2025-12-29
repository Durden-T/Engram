var b4 = Object.defineProperty;
var S4 = (s, u, c) => u in s ? b4(s, u, { enumerable: !0, configurable: !0, writable: !0, value: c }) : s[u] = c;
var Qe = (s, u, c) => S4(s, typeof u != "symbol" ? u + "" : u, c);
function C1(s) {
  return s && s.__esModule && Object.prototype.hasOwnProperty.call(s, "default") ? s.default : s;
}
var ic = { exports: {} }, P = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var X0;
function j4() {
  if (X0) return P;
  X0 = 1;
  var s = Symbol.for("react.transitional.element"), u = Symbol.for("react.portal"), c = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), m = Symbol.for("react.profiler"), h = Symbol.for("react.consumer"), v = Symbol.for("react.context"), C = Symbol.for("react.forward_ref"), p = Symbol.for("react.suspense"), b = Symbol.for("react.memo"), _ = Symbol.for("react.lazy"), T = Symbol.for("react.activity"), R = Symbol.iterator;
  function Z(y) {
    return y === null || typeof y != "object" ? null : (y = R && y[R] || y["@@iterator"], typeof y == "function" ? y : null);
  }
  var B = {
    isMounted: function() {
      return !1;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, L = Object.assign, $ = {};
  function H(y, O, Y) {
    this.props = y, this.context = O, this.refs = $, this.updater = Y || B;
  }
  H.prototype.isReactComponent = {}, H.prototype.setState = function(y, O) {
    if (typeof y != "object" && typeof y != "function" && y != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, y, O, "setState");
  }, H.prototype.forceUpdate = function(y) {
    this.updater.enqueueForceUpdate(this, y, "forceUpdate");
  };
  function ee() {
  }
  ee.prototype = H.prototype;
  function q(y, O, Y) {
    this.props = y, this.context = O, this.refs = $, this.updater = Y || B;
  }
  var ie = q.prototype = new ee();
  ie.constructor = q, L(ie, H.prototype), ie.isPureReactComponent = !0;
  var te = Array.isArray;
  function ce() {
  }
  var I = { H: null, A: null, T: null, S: null }, Me = Object.prototype.hasOwnProperty;
  function Ge(y, O, Y) {
    var V = Y.ref;
    return {
      $$typeof: s,
      type: y,
      key: O,
      ref: V !== void 0 ? V : null,
      props: Y
    };
  }
  function Ut(y, O) {
    return Ge(y.type, O, y.props);
  }
  function tt(y) {
    return typeof y == "object" && y !== null && y.$$typeof === s;
  }
  function me(y) {
    var O = { "=": "=0", ":": "=2" };
    return "$" + y.replace(/[=:]/g, function(Y) {
      return O[Y];
    });
  }
  var Vt = /\/+/g;
  function wt(y, O) {
    return typeof y == "object" && y !== null && y.key != null ? me("" + y.key) : O.toString(36);
  }
  function X(y) {
    switch (y.status) {
      case "fulfilled":
        return y.value;
      case "rejected":
        throw y.reason;
      default:
        switch (typeof y.status == "string" ? y.then(ce, ce) : (y.status = "pending", y.then(
          function(O) {
            y.status === "pending" && (y.status = "fulfilled", y.value = O);
          },
          function(O) {
            y.status === "pending" && (y.status = "rejected", y.reason = O);
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
  function S(y, O, Y, V, le) {
    var re = typeof y;
    (re === "undefined" || re === "boolean") && (y = null);
    var xe = !1;
    if (y === null) xe = !0;
    else
      switch (re) {
        case "bigint":
        case "string":
        case "number":
          xe = !0;
          break;
        case "object":
          switch (y.$$typeof) {
            case s:
            case u:
              xe = !0;
              break;
            case _:
              return xe = y._init, S(
                xe(y._payload),
                O,
                Y,
                V,
                le
              );
          }
      }
    if (xe)
      return le = le(y), xe = V === "" ? "." + wt(y, 0) : V, te(le) ? (Y = "", xe != null && (Y = xe.replace(Vt, "$&/") + "/"), S(le, O, Y, "", function(Fa) {
        return Fa;
      })) : le != null && (tt(le) && (le = Ut(
        le,
        Y + (le.key == null || y && y.key === le.key ? "" : ("" + le.key).replace(
          Vt,
          "$&/"
        ) + "/") + xe
      )), O.push(le)), 1;
    xe = 0;
    var Pe = V === "" ? "." : V + ":";
    if (te(y))
      for (var De = 0; De < y.length; De++)
        V = y[De], re = Pe + wt(V, De), xe += S(
          V,
          O,
          Y,
          re,
          le
        );
    else if (De = Z(y), typeof De == "function")
      for (y = De.call(y), De = 0; !(V = y.next()).done; )
        V = V.value, re = Pe + wt(V, De++), xe += S(
          V,
          O,
          Y,
          re,
          le
        );
    else if (re === "object") {
      if (typeof y.then == "function")
        return S(
          X(y),
          O,
          Y,
          V,
          le
        );
      throw O = String(y), Error(
        "Objects are not valid as a React child (found: " + (O === "[object Object]" ? "object with keys {" + Object.keys(y).join(", ") + "}" : O) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return xe;
  }
  function U(y, O, Y) {
    if (y == null) return y;
    var V = [], le = 0;
    return S(y, V, "", "", function(re) {
      return O.call(Y, re, le++);
    }), V;
  }
  function F(y) {
    if (y._status === -1) {
      var O = y._result;
      O = O(), O.then(
        function(Y) {
          (y._status === 0 || y._status === -1) && (y._status = 1, y._result = Y);
        },
        function(Y) {
          (y._status === 0 || y._status === -1) && (y._status = 2, y._result = Y);
        }
      ), y._status === -1 && (y._status = 0, y._result = O);
    }
    if (y._status === 1) return y._result.default;
    throw y._result;
  }
  var be = typeof reportError == "function" ? reportError : function(y) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var O = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof y == "object" && y !== null && typeof y.message == "string" ? String(y.message) : String(y),
        error: y
      });
      if (!window.dispatchEvent(O)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", y);
      return;
    }
    console.error(y);
  }, Ne = {
    map: U,
    forEach: function(y, O, Y) {
      U(
        y,
        function() {
          O.apply(this, arguments);
        },
        Y
      );
    },
    count: function(y) {
      var O = 0;
      return U(y, function() {
        O++;
      }), O;
    },
    toArray: function(y) {
      return U(y, function(O) {
        return O;
      }) || [];
    },
    only: function(y) {
      if (!tt(y))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return y;
    }
  };
  return P.Activity = T, P.Children = Ne, P.Component = H, P.Fragment = c, P.Profiler = m, P.PureComponent = q, P.StrictMode = o, P.Suspense = p, P.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = I, P.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(y) {
      return I.H.useMemoCache(y);
    }
  }, P.cache = function(y) {
    return function() {
      return y.apply(null, arguments);
    };
  }, P.cacheSignal = function() {
    return null;
  }, P.cloneElement = function(y, O, Y) {
    if (y == null)
      throw Error(
        "The argument must be a React element, but you passed " + y + "."
      );
    var V = L({}, y.props), le = y.key;
    if (O != null)
      for (re in O.key !== void 0 && (le = "" + O.key), O)
        !Me.call(O, re) || re === "key" || re === "__self" || re === "__source" || re === "ref" && O.ref === void 0 || (V[re] = O[re]);
    var re = arguments.length - 2;
    if (re === 1) V.children = Y;
    else if (1 < re) {
      for (var xe = Array(re), Pe = 0; Pe < re; Pe++)
        xe[Pe] = arguments[Pe + 2];
      V.children = xe;
    }
    return Ge(y.type, le, V);
  }, P.createContext = function(y) {
    return y = {
      $$typeof: v,
      _currentValue: y,
      _currentValue2: y,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, y.Provider = y, y.Consumer = {
      $$typeof: h,
      _context: y
    }, y;
  }, P.createElement = function(y, O, Y) {
    var V, le = {}, re = null;
    if (O != null)
      for (V in O.key !== void 0 && (re = "" + O.key), O)
        Me.call(O, V) && V !== "key" && V !== "__self" && V !== "__source" && (le[V] = O[V]);
    var xe = arguments.length - 2;
    if (xe === 1) le.children = Y;
    else if (1 < xe) {
      for (var Pe = Array(xe), De = 0; De < xe; De++)
        Pe[De] = arguments[De + 2];
      le.children = Pe;
    }
    if (y && y.defaultProps)
      for (V in xe = y.defaultProps, xe)
        le[V] === void 0 && (le[V] = xe[V]);
    return Ge(y, re, le);
  }, P.createRef = function() {
    return { current: null };
  }, P.forwardRef = function(y) {
    return { $$typeof: C, render: y };
  }, P.isValidElement = tt, P.lazy = function(y) {
    return {
      $$typeof: _,
      _payload: { _status: -1, _result: y },
      _init: F
    };
  }, P.memo = function(y, O) {
    return {
      $$typeof: b,
      type: y,
      compare: O === void 0 ? null : O
    };
  }, P.startTransition = function(y) {
    var O = I.T, Y = {};
    I.T = Y;
    try {
      var V = y(), le = I.S;
      le !== null && le(Y, V), typeof V == "object" && V !== null && typeof V.then == "function" && V.then(ce, be);
    } catch (re) {
      be(re);
    } finally {
      O !== null && Y.types !== null && (O.types = Y.types), I.T = O;
    }
  }, P.unstable_useCacheRefresh = function() {
    return I.H.useCacheRefresh();
  }, P.use = function(y) {
    return I.H.use(y);
  }, P.useActionState = function(y, O, Y) {
    return I.H.useActionState(y, O, Y);
  }, P.useCallback = function(y, O) {
    return I.H.useCallback(y, O);
  }, P.useContext = function(y) {
    return I.H.useContext(y);
  }, P.useDebugValue = function() {
  }, P.useDeferredValue = function(y, O) {
    return I.H.useDeferredValue(y, O);
  }, P.useEffect = function(y, O) {
    return I.H.useEffect(y, O);
  }, P.useEffectEvent = function(y) {
    return I.H.useEffectEvent(y);
  }, P.useId = function() {
    return I.H.useId();
  }, P.useImperativeHandle = function(y, O, Y) {
    return I.H.useImperativeHandle(y, O, Y);
  }, P.useInsertionEffect = function(y, O) {
    return I.H.useInsertionEffect(y, O);
  }, P.useLayoutEffect = function(y, O) {
    return I.H.useLayoutEffect(y, O);
  }, P.useMemo = function(y, O) {
    return I.H.useMemo(y, O);
  }, P.useOptimistic = function(y, O) {
    return I.H.useOptimistic(y, O);
  }, P.useReducer = function(y, O, Y) {
    return I.H.useReducer(y, O, Y);
  }, P.useRef = function(y) {
    return I.H.useRef(y);
  }, P.useState = function(y) {
    return I.H.useState(y);
  }, P.useSyncExternalStore = function(y, O, Y) {
    return I.H.useSyncExternalStore(
      y,
      O,
      Y
    );
  }, P.useTransition = function() {
    return I.H.useTransition();
  }, P.version = "19.2.3", P;
}
var Q0;
function Ec() {
  return Q0 || (Q0 = 1, ic.exports = j4()), ic.exports;
}
var D = Ec();
const C4 = /* @__PURE__ */ C1(D);
var rc = { exports: {} }, Xn = {}, uc = { exports: {} }, sc = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Z0;
function N4() {
  return Z0 || (Z0 = 1, (function(s) {
    function u(S, U) {
      var F = S.length;
      S.push(U);
      e: for (; 0 < F; ) {
        var be = F - 1 >>> 1, Ne = S[be];
        if (0 < m(Ne, U))
          S[be] = U, S[F] = Ne, F = be;
        else break e;
      }
    }
    function c(S) {
      return S.length === 0 ? null : S[0];
    }
    function o(S) {
      if (S.length === 0) return null;
      var U = S[0], F = S.pop();
      if (F !== U) {
        S[0] = F;
        e: for (var be = 0, Ne = S.length, y = Ne >>> 1; be < y; ) {
          var O = 2 * (be + 1) - 1, Y = S[O], V = O + 1, le = S[V];
          if (0 > m(Y, F))
            V < Ne && 0 > m(le, Y) ? (S[be] = le, S[V] = F, be = V) : (S[be] = Y, S[O] = F, be = O);
          else if (V < Ne && 0 > m(le, F))
            S[be] = le, S[V] = F, be = V;
          else break e;
        }
      }
      return U;
    }
    function m(S, U) {
      var F = S.sortIndex - U.sortIndex;
      return F !== 0 ? F : S.id - U.id;
    }
    if (s.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var h = performance;
      s.unstable_now = function() {
        return h.now();
      };
    } else {
      var v = Date, C = v.now();
      s.unstable_now = function() {
        return v.now() - C;
      };
    }
    var p = [], b = [], _ = 1, T = null, R = 3, Z = !1, B = !1, L = !1, $ = !1, H = typeof setTimeout == "function" ? setTimeout : null, ee = typeof clearTimeout == "function" ? clearTimeout : null, q = typeof setImmediate < "u" ? setImmediate : null;
    function ie(S) {
      for (var U = c(b); U !== null; ) {
        if (U.callback === null) o(b);
        else if (U.startTime <= S)
          o(b), U.sortIndex = U.expirationTime, u(p, U);
        else break;
        U = c(b);
      }
    }
    function te(S) {
      if (L = !1, ie(S), !B)
        if (c(p) !== null)
          B = !0, ce || (ce = !0, me());
        else {
          var U = c(b);
          U !== null && X(te, U.startTime - S);
        }
    }
    var ce = !1, I = -1, Me = 5, Ge = -1;
    function Ut() {
      return $ ? !0 : !(s.unstable_now() - Ge < Me);
    }
    function tt() {
      if ($ = !1, ce) {
        var S = s.unstable_now();
        Ge = S;
        var U = !0;
        try {
          e: {
            B = !1, L && (L = !1, ee(I), I = -1), Z = !0;
            var F = R;
            try {
              t: {
                for (ie(S), T = c(p); T !== null && !(T.expirationTime > S && Ut()); ) {
                  var be = T.callback;
                  if (typeof be == "function") {
                    T.callback = null, R = T.priorityLevel;
                    var Ne = be(
                      T.expirationTime <= S
                    );
                    if (S = s.unstable_now(), typeof Ne == "function") {
                      T.callback = Ne, ie(S), U = !0;
                      break t;
                    }
                    T === c(p) && o(p), ie(S);
                  } else o(p);
                  T = c(p);
                }
                if (T !== null) U = !0;
                else {
                  var y = c(b);
                  y !== null && X(
                    te,
                    y.startTime - S
                  ), U = !1;
                }
              }
              break e;
            } finally {
              T = null, R = F, Z = !1;
            }
            U = void 0;
          }
        } finally {
          U ? me() : ce = !1;
        }
      }
    }
    var me;
    if (typeof q == "function")
      me = function() {
        q(tt);
      };
    else if (typeof MessageChannel < "u") {
      var Vt = new MessageChannel(), wt = Vt.port2;
      Vt.port1.onmessage = tt, me = function() {
        wt.postMessage(null);
      };
    } else
      me = function() {
        H(tt, 0);
      };
    function X(S, U) {
      I = H(function() {
        S(s.unstable_now());
      }, U);
    }
    s.unstable_IdlePriority = 5, s.unstable_ImmediatePriority = 1, s.unstable_LowPriority = 4, s.unstable_NormalPriority = 3, s.unstable_Profiling = null, s.unstable_UserBlockingPriority = 2, s.unstable_cancelCallback = function(S) {
      S.callback = null;
    }, s.unstable_forceFrameRate = function(S) {
      0 > S || 125 < S ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : Me = 0 < S ? Math.floor(1e3 / S) : 5;
    }, s.unstable_getCurrentPriorityLevel = function() {
      return R;
    }, s.unstable_next = function(S) {
      switch (R) {
        case 1:
        case 2:
        case 3:
          var U = 3;
          break;
        default:
          U = R;
      }
      var F = R;
      R = U;
      try {
        return S();
      } finally {
        R = F;
      }
    }, s.unstable_requestPaint = function() {
      $ = !0;
    }, s.unstable_runWithPriority = function(S, U) {
      switch (S) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          S = 3;
      }
      var F = R;
      R = S;
      try {
        return U();
      } finally {
        R = F;
      }
    }, s.unstable_scheduleCallback = function(S, U, F) {
      var be = s.unstable_now();
      switch (typeof F == "object" && F !== null ? (F = F.delay, F = typeof F == "number" && 0 < F ? be + F : be) : F = be, S) {
        case 1:
          var Ne = -1;
          break;
        case 2:
          Ne = 250;
          break;
        case 5:
          Ne = 1073741823;
          break;
        case 4:
          Ne = 1e4;
          break;
        default:
          Ne = 5e3;
      }
      return Ne = F + Ne, S = {
        id: _++,
        callback: U,
        priorityLevel: S,
        startTime: F,
        expirationTime: Ne,
        sortIndex: -1
      }, F > be ? (S.sortIndex = F, u(b, S), c(p) === null && S === c(b) && (L ? (ee(I), I = -1) : L = !0, X(te, F - be))) : (S.sortIndex = Ne, u(p, S), B || Z || (B = !0, ce || (ce = !0, me()))), S;
    }, s.unstable_shouldYield = Ut, s.unstable_wrapCallback = function(S) {
      var U = R;
      return function() {
        var F = R;
        R = U;
        try {
          return S.apply(this, arguments);
        } finally {
          R = F;
        }
      };
    };
  })(sc)), sc;
}
var K0;
function E4() {
  return K0 || (K0 = 1, uc.exports = N4()), uc.exports;
}
var cc = { exports: {} }, Ie = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var J0;
function T4() {
  if (J0) return Ie;
  J0 = 1;
  var s = Ec();
  function u(p) {
    var b = "https://react.dev/errors/" + p;
    if (1 < arguments.length) {
      b += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var _ = 2; _ < arguments.length; _++)
        b += "&args[]=" + encodeURIComponent(arguments[_]);
    }
    return "Minified React error #" + p + "; visit " + b + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function c() {
  }
  var o = {
    d: {
      f: c,
      r: function() {
        throw Error(u(522));
      },
      D: c,
      C: c,
      L: c,
      m: c,
      X: c,
      S: c,
      M: c
    },
    p: 0,
    findDOMNode: null
  }, m = Symbol.for("react.portal");
  function h(p, b, _) {
    var T = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: m,
      key: T == null ? null : "" + T,
      children: p,
      containerInfo: b,
      implementation: _
    };
  }
  var v = s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function C(p, b) {
    if (p === "font") return "";
    if (typeof b == "string")
      return b === "use-credentials" ? b : "";
  }
  return Ie.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = o, Ie.createPortal = function(p, b) {
    var _ = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!b || b.nodeType !== 1 && b.nodeType !== 9 && b.nodeType !== 11)
      throw Error(u(299));
    return h(p, b, null, _);
  }, Ie.flushSync = function(p) {
    var b = v.T, _ = o.p;
    try {
      if (v.T = null, o.p = 2, p) return p();
    } finally {
      v.T = b, o.p = _, o.d.f();
    }
  }, Ie.preconnect = function(p, b) {
    typeof p == "string" && (b ? (b = b.crossOrigin, b = typeof b == "string" ? b === "use-credentials" ? b : "" : void 0) : b = null, o.d.C(p, b));
  }, Ie.prefetchDNS = function(p) {
    typeof p == "string" && o.d.D(p);
  }, Ie.preinit = function(p, b) {
    if (typeof p == "string" && b && typeof b.as == "string") {
      var _ = b.as, T = C(_, b.crossOrigin), R = typeof b.integrity == "string" ? b.integrity : void 0, Z = typeof b.fetchPriority == "string" ? b.fetchPriority : void 0;
      _ === "style" ? o.d.S(
        p,
        typeof b.precedence == "string" ? b.precedence : void 0,
        {
          crossOrigin: T,
          integrity: R,
          fetchPriority: Z
        }
      ) : _ === "script" && o.d.X(p, {
        crossOrigin: T,
        integrity: R,
        fetchPriority: Z,
        nonce: typeof b.nonce == "string" ? b.nonce : void 0
      });
    }
  }, Ie.preinitModule = function(p, b) {
    if (typeof p == "string")
      if (typeof b == "object" && b !== null) {
        if (b.as == null || b.as === "script") {
          var _ = C(
            b.as,
            b.crossOrigin
          );
          o.d.M(p, {
            crossOrigin: _,
            integrity: typeof b.integrity == "string" ? b.integrity : void 0,
            nonce: typeof b.nonce == "string" ? b.nonce : void 0
          });
        }
      } else b == null && o.d.M(p);
  }, Ie.preload = function(p, b) {
    if (typeof p == "string" && typeof b == "object" && b !== null && typeof b.as == "string") {
      var _ = b.as, T = C(_, b.crossOrigin);
      o.d.L(p, _, {
        crossOrigin: T,
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
  }, Ie.preloadModule = function(p, b) {
    if (typeof p == "string")
      if (b) {
        var _ = C(b.as, b.crossOrigin);
        o.d.m(p, {
          as: typeof b.as == "string" && b.as !== "script" ? b.as : void 0,
          crossOrigin: _,
          integrity: typeof b.integrity == "string" ? b.integrity : void 0
        });
      } else o.d.m(p);
  }, Ie.requestFormReset = function(p) {
    o.d.r(p);
  }, Ie.unstable_batchedUpdates = function(p, b) {
    return p(b);
  }, Ie.useFormState = function(p, b, _) {
    return v.H.useFormState(p, b, _);
  }, Ie.useFormStatus = function() {
    return v.H.useHostTransitionStatus();
  }, Ie.version = "19.2.3", Ie;
}
var $0;
function _4() {
  if ($0) return cc.exports;
  $0 = 1;
  function s() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s);
      } catch (u) {
        console.error(u);
      }
  }
  return s(), cc.exports = T4(), cc.exports;
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
var F0;
function z4() {
  if (F0) return Xn;
  F0 = 1;
  var s = E4(), u = Ec(), c = _4();
  function o(e) {
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
  function h(e) {
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
  function v(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function C(e) {
    if (e.tag === 31) {
      var t = e.memoizedState;
      if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function p(e) {
    if (h(e) !== e)
      throw Error(o(188));
  }
  function b(e) {
    var t = e.alternate;
    if (!t) {
      if (t = h(e), t === null) throw Error(o(188));
      return t !== e ? null : e;
    }
    for (var l = e, a = t; ; ) {
      var n = l.return;
      if (n === null) break;
      var i = n.alternate;
      if (i === null) {
        if (a = n.return, a !== null) {
          l = a;
          continue;
        }
        break;
      }
      if (n.child === i.child) {
        for (i = n.child; i; ) {
          if (i === l) return p(n), e;
          if (i === a) return p(n), t;
          i = i.sibling;
        }
        throw Error(o(188));
      }
      if (l.return !== a.return) l = n, a = i;
      else {
        for (var d = !1, f = n.child; f; ) {
          if (f === l) {
            d = !0, l = n, a = i;
            break;
          }
          if (f === a) {
            d = !0, a = n, l = i;
            break;
          }
          f = f.sibling;
        }
        if (!d) {
          for (f = i.child; f; ) {
            if (f === l) {
              d = !0, l = i, a = n;
              break;
            }
            if (f === a) {
              d = !0, a = i, l = n;
              break;
            }
            f = f.sibling;
          }
          if (!d) throw Error(o(189));
        }
      }
      if (l.alternate !== a) throw Error(o(190));
    }
    if (l.tag !== 3) throw Error(o(188));
    return l.stateNode.current === l ? e : t;
  }
  function _(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e;
    for (e = e.child; e !== null; ) {
      if (t = _(e), t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var T = Object.assign, R = Symbol.for("react.element"), Z = Symbol.for("react.transitional.element"), B = Symbol.for("react.portal"), L = Symbol.for("react.fragment"), $ = Symbol.for("react.strict_mode"), H = Symbol.for("react.profiler"), ee = Symbol.for("react.consumer"), q = Symbol.for("react.context"), ie = Symbol.for("react.forward_ref"), te = Symbol.for("react.suspense"), ce = Symbol.for("react.suspense_list"), I = Symbol.for("react.memo"), Me = Symbol.for("react.lazy"), Ge = Symbol.for("react.activity"), Ut = Symbol.for("react.memo_cache_sentinel"), tt = Symbol.iterator;
  function me(e) {
    return e === null || typeof e != "object" ? null : (e = tt && e[tt] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var Vt = Symbol.for("react.client.reference");
  function wt(e) {
    if (e == null) return null;
    if (typeof e == "function")
      return e.$$typeof === Vt ? null : e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case L:
        return "Fragment";
      case H:
        return "Profiler";
      case $:
        return "StrictMode";
      case te:
        return "Suspense";
      case ce:
        return "SuspenseList";
      case Ge:
        return "Activity";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case B:
          return "Portal";
        case q:
          return e.displayName || "Context";
        case ee:
          return (e._context.displayName || "Context") + ".Consumer";
        case ie:
          var t = e.render;
          return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
        case I:
          return t = e.displayName || null, t !== null ? t : wt(e.type) || "Memo";
        case Me:
          t = e._payload, e = e._init;
          try {
            return wt(e(t));
          } catch {
          }
      }
    return null;
  }
  var X = Array.isArray, S = u.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, U = c.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, F = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, be = [], Ne = -1;
  function y(e) {
    return { current: e };
  }
  function O(e) {
    0 > Ne || (e.current = be[Ne], be[Ne] = null, Ne--);
  }
  function Y(e, t) {
    Ne++, be[Ne] = e.current, e.current = t;
  }
  var V = y(null), le = y(null), re = y(null), xe = y(null);
  function Pe(e, t) {
    switch (Y(re, t), Y(le, e), Y(V, null), t.nodeType) {
      case 9:
      case 11:
        e = (e = t.documentElement) && (e = e.namespaceURI) ? m0(e) : 0;
        break;
      default:
        if (e = t.tagName, t = t.namespaceURI)
          t = m0(t), e = h0(t, e);
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
    O(V), Y(V, e);
  }
  function De() {
    O(V), O(le), O(re);
  }
  function Fa(e) {
    e.memoizedState !== null && Y(xe, e);
    var t = V.current, l = h0(t, e.type);
    t !== l && (Y(le, e), Y(V, l));
  }
  function ui(e) {
    le.current === e && (O(V), O(le)), xe.current === e && (O(xe), qn._currentValue = F);
  }
  var Yr, Yc;
  function Ul(e) {
    if (Yr === void 0)
      try {
        throw Error();
      } catch (l) {
        var t = l.stack.trim().match(/\n( *(at )?)/);
        Yr = t && t[1] || "", Yc = -1 < l.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < l.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + Yr + e + Yc;
  }
  var Gr = !1;
  function Vr(e, t) {
    if (!e || Gr) return "";
    Gr = !0;
    var l = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var a = {
        DetermineComponentFrameRoot: function() {
          try {
            if (t) {
              var k = function() {
                throw Error();
              };
              if (Object.defineProperty(k.prototype, "props", {
                set: function() {
                  throw Error();
                }
              }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct(k, []);
                } catch (M) {
                  var z = M;
                }
                Reflect.construct(e, [], k);
              } else {
                try {
                  k.call();
                } catch (M) {
                  z = M;
                }
                e.call(k.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (M) {
                z = M;
              }
              (k = e()) && typeof k.catch == "function" && k.catch(function() {
              });
            }
          } catch (M) {
            if (M && z && typeof M.stack == "string")
              return [M.stack, z.stack];
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
      var i = a.DetermineComponentFrameRoot(), d = i[0], f = i[1];
      if (d && f) {
        var g = d.split(`
`), E = f.split(`
`);
        for (n = a = 0; a < g.length && !g[a].includes("DetermineComponentFrameRoot"); )
          a++;
        for (; n < E.length && !E[n].includes(
          "DetermineComponentFrameRoot"
        ); )
          n++;
        if (a === g.length || n === E.length)
          for (a = g.length - 1, n = E.length - 1; 1 <= a && 0 <= n && g[a] !== E[n]; )
            n--;
        for (; 1 <= a && 0 <= n; a--, n--)
          if (g[a] !== E[n]) {
            if (a !== 1 || n !== 1)
              do
                if (a--, n--, 0 > n || g[a] !== E[n]) {
                  var A = `
` + g[a].replace(" at new ", " at ");
                  return e.displayName && A.includes("<anonymous>") && (A = A.replace("<anonymous>", e.displayName)), A;
                }
              while (1 <= a && 0 <= n);
            break;
          }
      }
    } finally {
      Gr = !1, Error.prepareStackTrace = l;
    }
    return (l = e ? e.displayName || e.name : "") ? Ul(l) : "";
  }
  function W1(e, t) {
    switch (e.tag) {
      case 26:
      case 27:
      case 5:
        return Ul(e.type);
      case 16:
        return Ul("Lazy");
      case 13:
        return e.child !== t && t !== null ? Ul("Suspense Fallback") : Ul("Suspense");
      case 19:
        return Ul("SuspenseList");
      case 0:
      case 15:
        return Vr(e.type, !1);
      case 11:
        return Vr(e.type.render, !1);
      case 1:
        return Vr(e.type, !0);
      case 31:
        return Ul("Activity");
      default:
        return "";
    }
  }
  function Gc(e) {
    try {
      var t = "", l = null;
      do
        t += W1(e, l), l = e, e = e.return;
      while (e);
      return t;
    } catch (a) {
      return `
Error generating stack: ` + a.message + `
` + a.stack;
    }
  }
  var Xr = Object.prototype.hasOwnProperty, Qr = s.unstable_scheduleCallback, Zr = s.unstable_cancelCallback, I1 = s.unstable_shouldYield, P1 = s.unstable_requestPaint, ot = s.unstable_now, e2 = s.unstable_getCurrentPriorityLevel, Vc = s.unstable_ImmediatePriority, Xc = s.unstable_UserBlockingPriority, si = s.unstable_NormalPriority, t2 = s.unstable_LowPriority, Qc = s.unstable_IdlePriority, l2 = s.log, a2 = s.unstable_setDisableYieldValue, Wa = null, dt = null;
  function ol(e) {
    if (typeof l2 == "function" && a2(e), dt && typeof dt.setStrictMode == "function")
      try {
        dt.setStrictMode(Wa, e);
      } catch {
      }
  }
  var ft = Math.clz32 ? Math.clz32 : r2, n2 = Math.log, i2 = Math.LN2;
  function r2(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (n2(e) / i2 | 0) | 0;
  }
  var ci = 256, oi = 262144, di = 4194304;
  function Hl(e) {
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
  function fi(e, t, l) {
    var a = e.pendingLanes;
    if (a === 0) return 0;
    var n = 0, i = e.suspendedLanes, d = e.pingedLanes;
    e = e.warmLanes;
    var f = a & 134217727;
    return f !== 0 ? (a = f & ~i, a !== 0 ? n = Hl(a) : (d &= f, d !== 0 ? n = Hl(d) : l || (l = f & ~e, l !== 0 && (n = Hl(l))))) : (f = a & ~i, f !== 0 ? n = Hl(f) : d !== 0 ? n = Hl(d) : l || (l = a & ~e, l !== 0 && (n = Hl(l)))), n === 0 ? 0 : t !== 0 && t !== n && (t & i) === 0 && (i = n & -n, l = t & -t, i >= l || i === 32 && (l & 4194048) !== 0) ? t : n;
  }
  function Ia(e, t) {
    return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
  }
  function u2(e, t) {
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
  function Zc() {
    var e = di;
    return di <<= 1, (di & 62914560) === 0 && (di = 4194304), e;
  }
  function Kr(e) {
    for (var t = [], l = 0; 31 > l; l++) t.push(e);
    return t;
  }
  function Pa(e, t) {
    e.pendingLanes |= t, t !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0);
  }
  function s2(e, t, l, a, n, i) {
    var d = e.pendingLanes;
    e.pendingLanes = l, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= l, e.entangledLanes &= l, e.errorRecoveryDisabledLanes &= l, e.shellSuspendCounter = 0;
    var f = e.entanglements, g = e.expirationTimes, E = e.hiddenUpdates;
    for (l = d & ~l; 0 < l; ) {
      var A = 31 - ft(l), k = 1 << A;
      f[A] = 0, g[A] = -1;
      var z = E[A];
      if (z !== null)
        for (E[A] = null, A = 0; A < z.length; A++) {
          var M = z[A];
          M !== null && (M.lane &= -536870913);
        }
      l &= ~k;
    }
    a !== 0 && Kc(e, a, 0), i !== 0 && n === 0 && e.tag !== 0 && (e.suspendedLanes |= i & ~(d & ~t));
  }
  function Kc(e, t, l) {
    e.pendingLanes |= t, e.suspendedLanes &= ~t;
    var a = 31 - ft(t);
    e.entangledLanes |= t, e.entanglements[a] = e.entanglements[a] | 1073741824 | l & 261930;
  }
  function Jc(e, t) {
    var l = e.entangledLanes |= t;
    for (e = e.entanglements; l; ) {
      var a = 31 - ft(l), n = 1 << a;
      n & t | e[a] & t && (e[a] |= t), l &= ~n;
    }
  }
  function $c(e, t) {
    var l = t & -t;
    return l = (l & 42) !== 0 ? 1 : Jr(l), (l & (e.suspendedLanes | t)) !== 0 ? 0 : l;
  }
  function Jr(e) {
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
  function $r(e) {
    return e &= -e, 2 < e ? 8 < e ? (e & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function Fc() {
    var e = U.p;
    return e !== 0 ? e : (e = window.event, e === void 0 ? 32 : H0(e.type));
  }
  function Wc(e, t) {
    var l = U.p;
    try {
      return U.p = e, t();
    } finally {
      U.p = l;
    }
  }
  var dl = Math.random().toString(36).slice(2), Ze = "__reactFiber$" + dl, lt = "__reactProps$" + dl, ia = "__reactContainer$" + dl, Fr = "__reactEvents$" + dl, c2 = "__reactListeners$" + dl, o2 = "__reactHandles$" + dl, Ic = "__reactResources$" + dl, en = "__reactMarker$" + dl;
  function Wr(e) {
    delete e[Ze], delete e[lt], delete e[Fr], delete e[c2], delete e[o2];
  }
  function ra(e) {
    var t = e[Ze];
    if (t) return t;
    for (var l = e.parentNode; l; ) {
      if (t = l[ia] || l[Ze]) {
        if (l = t.alternate, t.child !== null || l !== null && l.child !== null)
          for (e = S0(e); e !== null; ) {
            if (l = e[Ze]) return l;
            e = S0(e);
          }
        return t;
      }
      e = l, l = e.parentNode;
    }
    return null;
  }
  function ua(e) {
    if (e = e[Ze] || e[ia]) {
      var t = e.tag;
      if (t === 5 || t === 6 || t === 13 || t === 31 || t === 26 || t === 27 || t === 3)
        return e;
    }
    return null;
  }
  function tn(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
    throw Error(o(33));
  }
  function sa(e) {
    var t = e[Ic];
    return t || (t = e[Ic] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), t;
  }
  function Ve(e) {
    e[en] = !0;
  }
  var Pc = /* @__PURE__ */ new Set(), eo = {};
  function Bl(e, t) {
    ca(e, t), ca(e + "Capture", t);
  }
  function ca(e, t) {
    for (eo[e] = t, e = 0; e < t.length; e++)
      Pc.add(t[e]);
  }
  var d2 = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), to = {}, lo = {};
  function f2(e) {
    return Xr.call(lo, e) ? !0 : Xr.call(to, e) ? !1 : d2.test(e) ? lo[e] = !0 : (to[e] = !0, !1);
  }
  function mi(e, t, l) {
    if (f2(t))
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
  function hi(e, t, l) {
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
  function Xt(e, t, l, a) {
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
  function ao(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function m2(e, t, l) {
    var a = Object.getOwnPropertyDescriptor(
      e.constructor.prototype,
      t
    );
    if (!e.hasOwnProperty(t) && typeof a < "u" && typeof a.get == "function" && typeof a.set == "function") {
      var n = a.get, i = a.set;
      return Object.defineProperty(e, t, {
        configurable: !0,
        get: function() {
          return n.call(this);
        },
        set: function(d) {
          l = "" + d, i.call(this, d);
        }
      }), Object.defineProperty(e, t, {
        enumerable: a.enumerable
      }), {
        getValue: function() {
          return l;
        },
        setValue: function(d) {
          l = "" + d;
        },
        stopTracking: function() {
          e._valueTracker = null, delete e[t];
        }
      };
    }
  }
  function Ir(e) {
    if (!e._valueTracker) {
      var t = ao(e) ? "checked" : "value";
      e._valueTracker = m2(
        e,
        t,
        "" + e[t]
      );
    }
  }
  function no(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var l = t.getValue(), a = "";
    return e && (a = ao(e) ? e.checked ? "true" : "false" : e.value), e = a, e !== l ? (t.setValue(e), !0) : !1;
  }
  function gi(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  var h2 = /[\n"\\]/g;
  function jt(e) {
    return e.replace(
      h2,
      function(t) {
        return "\\" + t.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function Pr(e, t, l, a, n, i, d, f) {
    e.name = "", d != null && typeof d != "function" && typeof d != "symbol" && typeof d != "boolean" ? e.type = d : e.removeAttribute("type"), t != null ? d === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + St(t)) : e.value !== "" + St(t) && (e.value = "" + St(t)) : d !== "submit" && d !== "reset" || e.removeAttribute("value"), t != null ? eu(e, d, St(t)) : l != null ? eu(e, d, St(l)) : a != null && e.removeAttribute("value"), n == null && i != null && (e.defaultChecked = !!i), n != null && (e.checked = n && typeof n != "function" && typeof n != "symbol"), f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" ? e.name = "" + St(f) : e.removeAttribute("name");
  }
  function io(e, t, l, a, n, i, d, f) {
    if (i != null && typeof i != "function" && typeof i != "symbol" && typeof i != "boolean" && (e.type = i), t != null || l != null) {
      if (!(i !== "submit" && i !== "reset" || t != null)) {
        Ir(e);
        return;
      }
      l = l != null ? "" + St(l) : "", t = t != null ? "" + St(t) : l, f || t === e.value || (e.value = t), e.defaultValue = t;
    }
    a = a ?? n, a = typeof a != "function" && typeof a != "symbol" && !!a, e.checked = f ? e.checked : !!a, e.defaultChecked = !!a, d != null && typeof d != "function" && typeof d != "symbol" && typeof d != "boolean" && (e.name = d), Ir(e);
  }
  function eu(e, t, l) {
    t === "number" && gi(e.ownerDocument) === e || e.defaultValue === "" + l || (e.defaultValue = "" + l);
  }
  function oa(e, t, l, a) {
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
  function ro(e, t, l) {
    if (t != null && (t = "" + St(t), t !== e.value && (e.value = t), l == null)) {
      e.defaultValue !== t && (e.defaultValue = t);
      return;
    }
    e.defaultValue = l != null ? "" + St(l) : "";
  }
  function uo(e, t, l, a) {
    if (t == null) {
      if (a != null) {
        if (l != null) throw Error(o(92));
        if (X(a)) {
          if (1 < a.length) throw Error(o(93));
          a = a[0];
        }
        l = a;
      }
      l == null && (l = ""), t = l;
    }
    l = St(t), e.defaultValue = l, a = e.textContent, a === l && a !== "" && a !== null && (e.value = a), Ir(e);
  }
  function da(e, t) {
    if (t) {
      var l = e.firstChild;
      if (l && l === e.lastChild && l.nodeType === 3) {
        l.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var g2 = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function so(e, t, l) {
    var a = t.indexOf("--") === 0;
    l == null || typeof l == "boolean" || l === "" ? a ? e.setProperty(t, "") : t === "float" ? e.cssFloat = "" : e[t] = "" : a ? e.setProperty(t, l) : typeof l != "number" || l === 0 || g2.has(t) ? t === "float" ? e.cssFloat = l : e[t] = ("" + l).trim() : e[t] = l + "px";
  }
  function co(e, t, l) {
    if (t != null && typeof t != "object")
      throw Error(o(62));
    if (e = e.style, l != null) {
      for (var a in l)
        !l.hasOwnProperty(a) || t != null && t.hasOwnProperty(a) || (a.indexOf("--") === 0 ? e.setProperty(a, "") : a === "float" ? e.cssFloat = "" : e[a] = "");
      for (var n in t)
        a = t[n], t.hasOwnProperty(n) && l[n] !== a && so(e, n, a);
    } else
      for (var i in t)
        t.hasOwnProperty(i) && so(e, i, t[i]);
  }
  function tu(e) {
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
  var p2 = /* @__PURE__ */ new Map([
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
  ]), x2 = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function pi(e) {
    return x2.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e;
  }
  function Qt() {
  }
  var lu = null;
  function au(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var fa = null, ma = null;
  function oo(e) {
    var t = ua(e);
    if (t && (e = t.stateNode)) {
      var l = e[lt] || null;
      e: switch (e = t.stateNode, t.type) {
        case "input":
          if (Pr(
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
                if (!n) throw Error(o(90));
                Pr(
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
              a = l[t], a.form === e.form && no(a);
          }
          break e;
        case "textarea":
          ro(e, l.value, l.defaultValue);
          break e;
        case "select":
          t = l.value, t != null && oa(e, !!l.multiple, t, !1);
      }
    }
  }
  var nu = !1;
  function fo(e, t, l) {
    if (nu) return e(t, l);
    nu = !0;
    try {
      var a = e(t);
      return a;
    } finally {
      if (nu = !1, (fa !== null || ma !== null) && (ar(), fa && (t = fa, e = ma, ma = fa = null, oo(t), e)))
        for (t = 0; t < e.length; t++) oo(e[t]);
    }
  }
  function ln(e, t) {
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
        o(231, t, typeof l)
      );
    return l;
  }
  var Zt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), iu = !1;
  if (Zt)
    try {
      var an = {};
      Object.defineProperty(an, "passive", {
        get: function() {
          iu = !0;
        }
      }), window.addEventListener("test", an, an), window.removeEventListener("test", an, an);
    } catch {
      iu = !1;
    }
  var fl = null, ru = null, xi = null;
  function mo() {
    if (xi) return xi;
    var e, t = ru, l = t.length, a, n = "value" in fl ? fl.value : fl.textContent, i = n.length;
    for (e = 0; e < l && t[e] === n[e]; e++) ;
    var d = l - e;
    for (a = 1; a <= d && t[l - a] === n[i - a]; a++) ;
    return xi = n.slice(e, 1 < a ? 1 - a : void 0);
  }
  function yi(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function vi() {
    return !0;
  }
  function ho() {
    return !1;
  }
  function at(e) {
    function t(l, a, n, i, d) {
      this._reactName = l, this._targetInst = n, this.type = a, this.nativeEvent = i, this.target = d, this.currentTarget = null;
      for (var f in e)
        e.hasOwnProperty(f) && (l = e[f], this[f] = l ? l(i) : i[f]);
      return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? vi : ho, this.isPropagationStopped = ho, this;
    }
    return T(t.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var l = this.nativeEvent;
        l && (l.preventDefault ? l.preventDefault() : typeof l.returnValue != "unknown" && (l.returnValue = !1), this.isDefaultPrevented = vi);
      },
      stopPropagation: function() {
        var l = this.nativeEvent;
        l && (l.stopPropagation ? l.stopPropagation() : typeof l.cancelBubble != "unknown" && (l.cancelBubble = !0), this.isPropagationStopped = vi);
      },
      persist: function() {
      },
      isPersistent: vi
    }), t;
  }
  var Ll = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, bi = at(Ll), nn = T({}, Ll, { view: 0, detail: 0 }), y2 = at(nn), uu, su, rn, Si = T({}, nn, {
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
    getModifierState: ou,
    button: 0,
    buttons: 0,
    relatedTarget: function(e) {
      return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
    },
    movementX: function(e) {
      return "movementX" in e ? e.movementX : (e !== rn && (rn && e.type === "mousemove" ? (uu = e.screenX - rn.screenX, su = e.screenY - rn.screenY) : su = uu = 0, rn = e), uu);
    },
    movementY: function(e) {
      return "movementY" in e ? e.movementY : su;
    }
  }), go = at(Si), v2 = T({}, Si, { dataTransfer: 0 }), b2 = at(v2), S2 = T({}, nn, { relatedTarget: 0 }), cu = at(S2), j2 = T({}, Ll, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), C2 = at(j2), N2 = T({}, Ll, {
    clipboardData: function(e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    }
  }), E2 = at(N2), T2 = T({}, Ll, { data: 0 }), po = at(T2), _2 = {
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
  }, z2 = {
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
  }, M2 = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function A2(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = M2[e]) ? !!t[e] : !1;
  }
  function ou() {
    return A2;
  }
  var w2 = T({}, nn, {
    key: function(e) {
      if (e.key) {
        var t = _2[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress" ? (e = yi(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? z2[e.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: ou,
    charCode: function(e) {
      return e.type === "keypress" ? yi(e) : 0;
    },
    keyCode: function(e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function(e) {
      return e.type === "keypress" ? yi(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    }
  }), k2 = at(w2), O2 = T({}, Si, {
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
  }), xo = at(O2), D2 = T({}, nn, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: ou
  }), R2 = at(D2), U2 = T({}, Ll, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), H2 = at(U2), B2 = T({}, Si, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), L2 = at(B2), q2 = T({}, Ll, {
    newState: 0,
    oldState: 0
  }), Y2 = at(q2), G2 = [9, 13, 27, 32], du = Zt && "CompositionEvent" in window, un = null;
  Zt && "documentMode" in document && (un = document.documentMode);
  var V2 = Zt && "TextEvent" in window && !un, yo = Zt && (!du || un && 8 < un && 11 >= un), vo = " ", bo = !1;
  function So(e, t) {
    switch (e) {
      case "keyup":
        return G2.indexOf(t.keyCode) !== -1;
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
  function jo(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var ha = !1;
  function X2(e, t) {
    switch (e) {
      case "compositionend":
        return jo(t);
      case "keypress":
        return t.which !== 32 ? null : (bo = !0, vo);
      case "textInput":
        return e = t.data, e === vo && bo ? null : e;
      default:
        return null;
    }
  }
  function Q2(e, t) {
    if (ha)
      return e === "compositionend" || !du && So(e, t) ? (e = mo(), xi = ru = fl = null, ha = !1, e) : null;
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
        return yo && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var Z2 = {
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
  function Co(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!Z2[e.type] : t === "textarea";
  }
  function No(e, t, l, a) {
    fa ? ma ? ma.push(a) : ma = [a] : fa = a, t = or(t, "onChange"), 0 < t.length && (l = new bi(
      "onChange",
      "change",
      null,
      l,
      a
    ), e.push({ event: l, listeners: t }));
  }
  var sn = null, cn = null;
  function K2(e) {
    u0(e, 0);
  }
  function ji(e) {
    var t = tn(e);
    if (no(t)) return e;
  }
  function Eo(e, t) {
    if (e === "change") return t;
  }
  var To = !1;
  if (Zt) {
    var fu;
    if (Zt) {
      var mu = "oninput" in document;
      if (!mu) {
        var _o = document.createElement("div");
        _o.setAttribute("oninput", "return;"), mu = typeof _o.oninput == "function";
      }
      fu = mu;
    } else fu = !1;
    To = fu && (!document.documentMode || 9 < document.documentMode);
  }
  function zo() {
    sn && (sn.detachEvent("onpropertychange", Mo), cn = sn = null);
  }
  function Mo(e) {
    if (e.propertyName === "value" && ji(cn)) {
      var t = [];
      No(
        t,
        cn,
        e,
        au(e)
      ), fo(K2, t);
    }
  }
  function J2(e, t, l) {
    e === "focusin" ? (zo(), sn = t, cn = l, sn.attachEvent("onpropertychange", Mo)) : e === "focusout" && zo();
  }
  function $2(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return ji(cn);
  }
  function F2(e, t) {
    if (e === "click") return ji(t);
  }
  function W2(e, t) {
    if (e === "input" || e === "change")
      return ji(t);
  }
  function I2(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var mt = typeof Object.is == "function" ? Object.is : I2;
  function on(e, t) {
    if (mt(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null)
      return !1;
    var l = Object.keys(e), a = Object.keys(t);
    if (l.length !== a.length) return !1;
    for (a = 0; a < l.length; a++) {
      var n = l[a];
      if (!Xr.call(t, n) || !mt(e[n], t[n]))
        return !1;
    }
    return !0;
  }
  function Ao(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function wo(e, t) {
    var l = Ao(e);
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
      l = Ao(l);
    }
  }
  function ko(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? ko(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
  }
  function Oo(e) {
    e = e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null ? e.ownerDocument.defaultView : window;
    for (var t = gi(e.document); t instanceof e.HTMLIFrameElement; ) {
      try {
        var l = typeof t.contentWindow.location.href == "string";
      } catch {
        l = !1;
      }
      if (l) e = t.contentWindow;
      else break;
      t = gi(e.document);
    }
    return t;
  }
  function hu(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
  }
  var P2 = Zt && "documentMode" in document && 11 >= document.documentMode, ga = null, gu = null, dn = null, pu = !1;
  function Do(e, t, l) {
    var a = l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
    pu || ga == null || ga !== gi(a) || (a = ga, "selectionStart" in a && hu(a) ? a = { start: a.selectionStart, end: a.selectionEnd } : (a = (a.ownerDocument && a.ownerDocument.defaultView || window).getSelection(), a = {
      anchorNode: a.anchorNode,
      anchorOffset: a.anchorOffset,
      focusNode: a.focusNode,
      focusOffset: a.focusOffset
    }), dn && on(dn, a) || (dn = a, a = or(gu, "onSelect"), 0 < a.length && (t = new bi(
      "onSelect",
      "select",
      null,
      t,
      l
    ), e.push({ event: t, listeners: a }), t.target = ga)));
  }
  function ql(e, t) {
    var l = {};
    return l[e.toLowerCase()] = t.toLowerCase(), l["Webkit" + e] = "webkit" + t, l["Moz" + e] = "moz" + t, l;
  }
  var pa = {
    animationend: ql("Animation", "AnimationEnd"),
    animationiteration: ql("Animation", "AnimationIteration"),
    animationstart: ql("Animation", "AnimationStart"),
    transitionrun: ql("Transition", "TransitionRun"),
    transitionstart: ql("Transition", "TransitionStart"),
    transitioncancel: ql("Transition", "TransitionCancel"),
    transitionend: ql("Transition", "TransitionEnd")
  }, xu = {}, Ro = {};
  Zt && (Ro = document.createElement("div").style, "AnimationEvent" in window || (delete pa.animationend.animation, delete pa.animationiteration.animation, delete pa.animationstart.animation), "TransitionEvent" in window || delete pa.transitionend.transition);
  function Yl(e) {
    if (xu[e]) return xu[e];
    if (!pa[e]) return e;
    var t = pa[e], l;
    for (l in t)
      if (t.hasOwnProperty(l) && l in Ro)
        return xu[e] = t[l];
    return e;
  }
  var Uo = Yl("animationend"), Ho = Yl("animationiteration"), Bo = Yl("animationstart"), em = Yl("transitionrun"), tm = Yl("transitionstart"), lm = Yl("transitioncancel"), Lo = Yl("transitionend"), qo = /* @__PURE__ */ new Map(), yu = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  yu.push("scrollEnd");
  function kt(e, t) {
    qo.set(e, t), Bl(t, [e]);
  }
  var Ci = typeof reportError == "function" ? reportError : function(e) {
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
  }, Ct = [], xa = 0, vu = 0;
  function Ni() {
    for (var e = xa, t = vu = xa = 0; t < e; ) {
      var l = Ct[t];
      Ct[t++] = null;
      var a = Ct[t];
      Ct[t++] = null;
      var n = Ct[t];
      Ct[t++] = null;
      var i = Ct[t];
      if (Ct[t++] = null, a !== null && n !== null) {
        var d = a.pending;
        d === null ? n.next = n : (n.next = d.next, d.next = n), a.pending = n;
      }
      i !== 0 && Yo(l, n, i);
    }
  }
  function Ei(e, t, l, a) {
    Ct[xa++] = e, Ct[xa++] = t, Ct[xa++] = l, Ct[xa++] = a, vu |= a, e.lanes |= a, e = e.alternate, e !== null && (e.lanes |= a);
  }
  function bu(e, t, l, a) {
    return Ei(e, t, l, a), Ti(e);
  }
  function Gl(e, t) {
    return Ei(e, null, null, t), Ti(e);
  }
  function Yo(e, t, l) {
    e.lanes |= l;
    var a = e.alternate;
    a !== null && (a.lanes |= l);
    for (var n = !1, i = e.return; i !== null; )
      i.childLanes |= l, a = i.alternate, a !== null && (a.childLanes |= l), i.tag === 22 && (e = i.stateNode, e === null || e._visibility & 1 || (n = !0)), e = i, i = i.return;
    return e.tag === 3 ? (i = e.stateNode, n && t !== null && (n = 31 - ft(l), e = i.hiddenUpdates, a = e[n], a === null ? e[n] = [t] : a.push(t), t.lane = l | 536870912), i) : null;
  }
  function Ti(e) {
    if (50 < On)
      throw On = 0, Ms = null, Error(o(185));
    for (var t = e.return; t !== null; )
      e = t, t = e.return;
    return e.tag === 3 ? e.stateNode : null;
  }
  var ya = {};
  function am(e, t, l, a) {
    this.tag = e, this.key = l, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = a, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function ht(e, t, l, a) {
    return new am(e, t, l, a);
  }
  function Su(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function Kt(e, t) {
    var l = e.alternate;
    return l === null ? (l = ht(
      e.tag,
      t,
      e.key,
      e.mode
    ), l.elementType = e.elementType, l.type = e.type, l.stateNode = e.stateNode, l.alternate = e, e.alternate = l) : (l.pendingProps = t, l.type = e.type, l.flags = 0, l.subtreeFlags = 0, l.deletions = null), l.flags = e.flags & 65011712, l.childLanes = e.childLanes, l.lanes = e.lanes, l.child = e.child, l.memoizedProps = e.memoizedProps, l.memoizedState = e.memoizedState, l.updateQueue = e.updateQueue, t = e.dependencies, l.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, l.sibling = e.sibling, l.index = e.index, l.ref = e.ref, l.refCleanup = e.refCleanup, l;
  }
  function Go(e, t) {
    e.flags &= 65011714;
    var l = e.alternate;
    return l === null ? (e.childLanes = 0, e.lanes = t, e.child = null, e.subtreeFlags = 0, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null) : (e.childLanes = l.childLanes, e.lanes = l.lanes, e.child = l.child, e.subtreeFlags = 0, e.deletions = null, e.memoizedProps = l.memoizedProps, e.memoizedState = l.memoizedState, e.updateQueue = l.updateQueue, e.type = l.type, t = l.dependencies, e.dependencies = t === null ? null : {
      lanes: t.lanes,
      firstContext: t.firstContext
    }), e;
  }
  function _i(e, t, l, a, n, i) {
    var d = 0;
    if (a = e, typeof e == "function") Su(e) && (d = 1);
    else if (typeof e == "string")
      d = s4(
        e,
        l,
        V.current
      ) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
    else
      e: switch (e) {
        case Ge:
          return e = ht(31, l, t, n), e.elementType = Ge, e.lanes = i, e;
        case L:
          return Vl(l.children, n, i, t);
        case $:
          d = 8, n |= 24;
          break;
        case H:
          return e = ht(12, l, t, n | 2), e.elementType = H, e.lanes = i, e;
        case te:
          return e = ht(13, l, t, n), e.elementType = te, e.lanes = i, e;
        case ce:
          return e = ht(19, l, t, n), e.elementType = ce, e.lanes = i, e;
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case q:
                d = 10;
                break e;
              case ee:
                d = 9;
                break e;
              case ie:
                d = 11;
                break e;
              case I:
                d = 14;
                break e;
              case Me:
                d = 16, a = null;
                break e;
            }
          d = 29, l = Error(
            o(130, e === null ? "null" : typeof e, "")
          ), a = null;
      }
    return t = ht(d, l, t, n), t.elementType = e, t.type = a, t.lanes = i, t;
  }
  function Vl(e, t, l, a) {
    return e = ht(7, e, a, t), e.lanes = l, e;
  }
  function ju(e, t, l) {
    return e = ht(6, e, null, t), e.lanes = l, e;
  }
  function Vo(e) {
    var t = ht(18, null, null, 0);
    return t.stateNode = e, t;
  }
  function Cu(e, t, l) {
    return t = ht(
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
  var Xo = /* @__PURE__ */ new WeakMap();
  function Nt(e, t) {
    if (typeof e == "object" && e !== null) {
      var l = Xo.get(e);
      return l !== void 0 ? l : (t = {
        value: e,
        source: t,
        stack: Gc(t)
      }, Xo.set(e, t), t);
    }
    return {
      value: e,
      source: t,
      stack: Gc(t)
    };
  }
  var va = [], ba = 0, zi = null, fn = 0, Et = [], Tt = 0, ml = null, Ht = 1, Bt = "";
  function Jt(e, t) {
    va[ba++] = fn, va[ba++] = zi, zi = e, fn = t;
  }
  function Qo(e, t, l) {
    Et[Tt++] = Ht, Et[Tt++] = Bt, Et[Tt++] = ml, ml = e;
    var a = Ht;
    e = Bt;
    var n = 32 - ft(a) - 1;
    a &= ~(1 << n), l += 1;
    var i = 32 - ft(t) + n;
    if (30 < i) {
      var d = n - n % 5;
      i = (a & (1 << d) - 1).toString(32), a >>= d, n -= d, Ht = 1 << 32 - ft(t) + n | l << n | a, Bt = i + e;
    } else
      Ht = 1 << i | l << n | a, Bt = e;
  }
  function Nu(e) {
    e.return !== null && (Jt(e, 1), Qo(e, 1, 0));
  }
  function Eu(e) {
    for (; e === zi; )
      zi = va[--ba], va[ba] = null, fn = va[--ba], va[ba] = null;
    for (; e === ml; )
      ml = Et[--Tt], Et[Tt] = null, Bt = Et[--Tt], Et[Tt] = null, Ht = Et[--Tt], Et[Tt] = null;
  }
  function Zo(e, t) {
    Et[Tt++] = Ht, Et[Tt++] = Bt, Et[Tt++] = ml, Ht = t.id, Bt = t.overflow, ml = e;
  }
  var Ke = null, _e = null, fe = !1, hl = null, _t = !1, Tu = Error(o(519));
  function gl(e) {
    var t = Error(
      o(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML",
        ""
      )
    );
    throw mn(Nt(t, e)), Tu;
  }
  function Ko(e) {
    var t = e.stateNode, l = e.type, a = e.memoizedProps;
    switch (t[Ze] = e, t[lt] = a, l) {
      case "dialog":
        se("cancel", t), se("close", t);
        break;
      case "iframe":
      case "object":
      case "embed":
        se("load", t);
        break;
      case "video":
      case "audio":
        for (l = 0; l < Rn.length; l++)
          se(Rn[l], t);
        break;
      case "source":
        se("error", t);
        break;
      case "img":
      case "image":
      case "link":
        se("error", t), se("load", t);
        break;
      case "details":
        se("toggle", t);
        break;
      case "input":
        se("invalid", t), io(
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
        se("invalid", t);
        break;
      case "textarea":
        se("invalid", t), uo(t, a.value, a.defaultValue, a.children);
    }
    l = a.children, typeof l != "string" && typeof l != "number" && typeof l != "bigint" || t.textContent === "" + l || a.suppressHydrationWarning === !0 || d0(t.textContent, l) ? (a.popover != null && (se("beforetoggle", t), se("toggle", t)), a.onScroll != null && se("scroll", t), a.onScrollEnd != null && se("scrollend", t), a.onClick != null && (t.onclick = Qt), t = !0) : t = !1, t || gl(e, !0);
  }
  function Jo(e) {
    for (Ke = e.return; Ke; )
      switch (Ke.tag) {
        case 5:
        case 31:
        case 13:
          _t = !1;
          return;
        case 27:
        case 3:
          _t = !0;
          return;
        default:
          Ke = Ke.return;
      }
  }
  function Sa(e) {
    if (e !== Ke) return !1;
    if (!fe) return Jo(e), fe = !0, !1;
    var t = e.tag, l;
    if ((l = t !== 3 && t !== 27) && ((l = t === 5) && (l = e.type, l = !(l !== "form" && l !== "button") || Xs(e.type, e.memoizedProps)), l = !l), l && _e && gl(e), Jo(e), t === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(o(317));
      _e = b0(e);
    } else if (t === 31) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(o(317));
      _e = b0(e);
    } else
      t === 27 ? (t = _e, Ml(e.type) ? (e = $s, $s = null, _e = e) : _e = t) : _e = Ke ? Mt(e.stateNode.nextSibling) : null;
    return !0;
  }
  function Xl() {
    _e = Ke = null, fe = !1;
  }
  function _u() {
    var e = hl;
    return e !== null && (ut === null ? ut = e : ut.push.apply(
      ut,
      e
    ), hl = null), e;
  }
  function mn(e) {
    hl === null ? hl = [e] : hl.push(e);
  }
  var zu = y(null), Ql = null, $t = null;
  function pl(e, t, l) {
    Y(zu, t._currentValue), t._currentValue = l;
  }
  function Ft(e) {
    e._currentValue = zu.current, O(zu);
  }
  function Mu(e, t, l) {
    for (; e !== null; ) {
      var a = e.alternate;
      if ((e.childLanes & t) !== t ? (e.childLanes |= t, a !== null && (a.childLanes |= t)) : a !== null && (a.childLanes & t) !== t && (a.childLanes |= t), e === l) break;
      e = e.return;
    }
  }
  function Au(e, t, l, a) {
    var n = e.child;
    for (n !== null && (n.return = e); n !== null; ) {
      var i = n.dependencies;
      if (i !== null) {
        var d = n.child;
        i = i.firstContext;
        e: for (; i !== null; ) {
          var f = i;
          i = n;
          for (var g = 0; g < t.length; g++)
            if (f.context === t[g]) {
              i.lanes |= l, f = i.alternate, f !== null && (f.lanes |= l), Mu(
                i.return,
                l,
                e
              ), a || (d = null);
              break e;
            }
          i = f.next;
        }
      } else if (n.tag === 18) {
        if (d = n.return, d === null) throw Error(o(341));
        d.lanes |= l, i = d.alternate, i !== null && (i.lanes |= l), Mu(d, l, e), d = null;
      } else d = n.child;
      if (d !== null) d.return = n;
      else
        for (d = n; d !== null; ) {
          if (d === e) {
            d = null;
            break;
          }
          if (n = d.sibling, n !== null) {
            n.return = d.return, d = n;
            break;
          }
          d = d.return;
        }
      n = d;
    }
  }
  function ja(e, t, l, a) {
    e = null;
    for (var n = t, i = !1; n !== null; ) {
      if (!i) {
        if ((n.flags & 524288) !== 0) i = !0;
        else if ((n.flags & 262144) !== 0) break;
      }
      if (n.tag === 10) {
        var d = n.alternate;
        if (d === null) throw Error(o(387));
        if (d = d.memoizedProps, d !== null) {
          var f = n.type;
          mt(n.pendingProps.value, d.value) || (e !== null ? e.push(f) : e = [f]);
        }
      } else if (n === xe.current) {
        if (d = n.alternate, d === null) throw Error(o(387));
        d.memoizedState.memoizedState !== n.memoizedState.memoizedState && (e !== null ? e.push(qn) : e = [qn]);
      }
      n = n.return;
    }
    e !== null && Au(
      t,
      e,
      l,
      a
    ), t.flags |= 262144;
  }
  function Mi(e) {
    for (e = e.firstContext; e !== null; ) {
      if (!mt(
        e.context._currentValue,
        e.memoizedValue
      ))
        return !0;
      e = e.next;
    }
    return !1;
  }
  function Zl(e) {
    Ql = e, $t = null, e = e.dependencies, e !== null && (e.firstContext = null);
  }
  function Je(e) {
    return $o(Ql, e);
  }
  function Ai(e, t) {
    return Ql === null && Zl(e), $o(e, t);
  }
  function $o(e, t) {
    var l = t._currentValue;
    if (t = { context: t, memoizedValue: l, next: null }, $t === null) {
      if (e === null) throw Error(o(308));
      $t = t, e.dependencies = { lanes: 0, firstContext: t }, e.flags |= 524288;
    } else $t = $t.next = t;
    return l;
  }
  var nm = typeof AbortController < "u" ? AbortController : function() {
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
  }, im = s.unstable_scheduleCallback, rm = s.unstable_NormalPriority, He = {
    $$typeof: q,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function wu() {
    return {
      controller: new nm(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function hn(e) {
    e.refCount--, e.refCount === 0 && im(rm, function() {
      e.controller.abort();
    });
  }
  var gn = null, ku = 0, Ca = 0, Na = null;
  function um(e, t) {
    if (gn === null) {
      var l = gn = [];
      ku = 0, Ca = Rs(), Na = {
        status: "pending",
        value: void 0,
        then: function(a) {
          l.push(a);
        }
      };
    }
    return ku++, t.then(Fo, Fo), t;
  }
  function Fo() {
    if (--ku === 0 && gn !== null) {
      Na !== null && (Na.status = "fulfilled");
      var e = gn;
      gn = null, Ca = 0, Na = null;
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
  }
  function sm(e, t) {
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
  var Wo = S.S;
  S.S = function(e, t) {
    Rf = ot(), typeof t == "object" && t !== null && typeof t.then == "function" && um(e, t), Wo !== null && Wo(e, t);
  };
  var Kl = y(null);
  function Ou() {
    var e = Kl.current;
    return e !== null ? e : Ee.pooledCache;
  }
  function wi(e, t) {
    t === null ? Y(Kl, Kl.current) : Y(Kl, t.pool);
  }
  function Io() {
    var e = Ou();
    return e === null ? null : { parent: He._currentValue, pool: e };
  }
  var Ea = Error(o(460)), Du = Error(o(474)), ki = Error(o(542)), Oi = { then: function() {
  } };
  function Po(e) {
    return e = e.status, e === "fulfilled" || e === "rejected";
  }
  function ed(e, t, l) {
    switch (l = e[l], l === void 0 ? e.push(t) : l !== t && (t.then(Qt, Qt), t = l), t.status) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw e = t.reason, ld(e), e;
      default:
        if (typeof t.status == "string") t.then(Qt, Qt);
        else {
          if (e = Ee, e !== null && 100 < e.shellSuspendCounter)
            throw Error(o(482));
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
            throw e = t.reason, ld(e), e;
        }
        throw $l = t, Ea;
    }
  }
  function Jl(e) {
    try {
      var t = e._init;
      return t(e._payload);
    } catch (l) {
      throw l !== null && typeof l == "object" && typeof l.then == "function" ? ($l = l, Ea) : l;
    }
  }
  var $l = null;
  function td() {
    if ($l === null) throw Error(o(459));
    var e = $l;
    return $l = null, e;
  }
  function ld(e) {
    if (e === Ea || e === ki)
      throw Error(o(483));
  }
  var Ta = null, pn = 0;
  function Di(e) {
    var t = pn;
    return pn += 1, Ta === null && (Ta = []), ed(Ta, e, t);
  }
  function xn(e, t) {
    t = t.props.ref, e.ref = t !== void 0 ? t : null;
  }
  function Ri(e, t) {
    throw t.$$typeof === R ? Error(o(525)) : (e = Object.prototype.toString.call(t), Error(
      o(
        31,
        e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e
      )
    ));
  }
  function ad(e) {
    function t(j, x) {
      if (e) {
        var N = j.deletions;
        N === null ? (j.deletions = [x], j.flags |= 16) : N.push(x);
      }
    }
    function l(j, x) {
      if (!e) return null;
      for (; x !== null; )
        t(j, x), x = x.sibling;
      return null;
    }
    function a(j) {
      for (var x = /* @__PURE__ */ new Map(); j !== null; )
        j.key !== null ? x.set(j.key, j) : x.set(j.index, j), j = j.sibling;
      return x;
    }
    function n(j, x) {
      return j = Kt(j, x), j.index = 0, j.sibling = null, j;
    }
    function i(j, x, N) {
      return j.index = N, e ? (N = j.alternate, N !== null ? (N = N.index, N < x ? (j.flags |= 67108866, x) : N) : (j.flags |= 67108866, x)) : (j.flags |= 1048576, x);
    }
    function d(j) {
      return e && j.alternate === null && (j.flags |= 67108866), j;
    }
    function f(j, x, N, w) {
      return x === null || x.tag !== 6 ? (x = ju(N, j.mode, w), x.return = j, x) : (x = n(x, N), x.return = j, x);
    }
    function g(j, x, N, w) {
      var K = N.type;
      return K === L ? A(
        j,
        x,
        N.props.children,
        w,
        N.key
      ) : x !== null && (x.elementType === K || typeof K == "object" && K !== null && K.$$typeof === Me && Jl(K) === x.type) ? (x = n(x, N.props), xn(x, N), x.return = j, x) : (x = _i(
        N.type,
        N.key,
        N.props,
        null,
        j.mode,
        w
      ), xn(x, N), x.return = j, x);
    }
    function E(j, x, N, w) {
      return x === null || x.tag !== 4 || x.stateNode.containerInfo !== N.containerInfo || x.stateNode.implementation !== N.implementation ? (x = Cu(N, j.mode, w), x.return = j, x) : (x = n(x, N.children || []), x.return = j, x);
    }
    function A(j, x, N, w, K) {
      return x === null || x.tag !== 7 ? (x = Vl(
        N,
        j.mode,
        w,
        K
      ), x.return = j, x) : (x = n(x, N), x.return = j, x);
    }
    function k(j, x, N) {
      if (typeof x == "string" && x !== "" || typeof x == "number" || typeof x == "bigint")
        return x = ju(
          "" + x,
          j.mode,
          N
        ), x.return = j, x;
      if (typeof x == "object" && x !== null) {
        switch (x.$$typeof) {
          case Z:
            return N = _i(
              x.type,
              x.key,
              x.props,
              null,
              j.mode,
              N
            ), xn(N, x), N.return = j, N;
          case B:
            return x = Cu(
              x,
              j.mode,
              N
            ), x.return = j, x;
          case Me:
            return x = Jl(x), k(j, x, N);
        }
        if (X(x) || me(x))
          return x = Vl(
            x,
            j.mode,
            N,
            null
          ), x.return = j, x;
        if (typeof x.then == "function")
          return k(j, Di(x), N);
        if (x.$$typeof === q)
          return k(
            j,
            Ai(j, x),
            N
          );
        Ri(j, x);
      }
      return null;
    }
    function z(j, x, N, w) {
      var K = x !== null ? x.key : null;
      if (typeof N == "string" && N !== "" || typeof N == "number" || typeof N == "bigint")
        return K !== null ? null : f(j, x, "" + N, w);
      if (typeof N == "object" && N !== null) {
        switch (N.$$typeof) {
          case Z:
            return N.key === K ? g(j, x, N, w) : null;
          case B:
            return N.key === K ? E(j, x, N, w) : null;
          case Me:
            return N = Jl(N), z(j, x, N, w);
        }
        if (X(N) || me(N))
          return K !== null ? null : A(j, x, N, w, null);
        if (typeof N.then == "function")
          return z(
            j,
            x,
            Di(N),
            w
          );
        if (N.$$typeof === q)
          return z(
            j,
            x,
            Ai(j, N),
            w
          );
        Ri(j, N);
      }
      return null;
    }
    function M(j, x, N, w, K) {
      if (typeof w == "string" && w !== "" || typeof w == "number" || typeof w == "bigint")
        return j = j.get(N) || null, f(x, j, "" + w, K);
      if (typeof w == "object" && w !== null) {
        switch (w.$$typeof) {
          case Z:
            return j = j.get(
              w.key === null ? N : w.key
            ) || null, g(x, j, w, K);
          case B:
            return j = j.get(
              w.key === null ? N : w.key
            ) || null, E(x, j, w, K);
          case Me:
            return w = Jl(w), M(
              j,
              x,
              N,
              w,
              K
            );
        }
        if (X(w) || me(w))
          return j = j.get(N) || null, A(x, j, w, K, null);
        if (typeof w.then == "function")
          return M(
            j,
            x,
            N,
            Di(w),
            K
          );
        if (w.$$typeof === q)
          return M(
            j,
            x,
            N,
            Ai(x, w),
            K
          );
        Ri(x, w);
      }
      return null;
    }
    function G(j, x, N, w) {
      for (var K = null, he = null, Q = x, ne = x = 0, de = null; Q !== null && ne < N.length; ne++) {
        Q.index > ne ? (de = Q, Q = null) : de = Q.sibling;
        var ge = z(
          j,
          Q,
          N[ne],
          w
        );
        if (ge === null) {
          Q === null && (Q = de);
          break;
        }
        e && Q && ge.alternate === null && t(j, Q), x = i(ge, x, ne), he === null ? K = ge : he.sibling = ge, he = ge, Q = de;
      }
      if (ne === N.length)
        return l(j, Q), fe && Jt(j, ne), K;
      if (Q === null) {
        for (; ne < N.length; ne++)
          Q = k(j, N[ne], w), Q !== null && (x = i(
            Q,
            x,
            ne
          ), he === null ? K = Q : he.sibling = Q, he = Q);
        return fe && Jt(j, ne), K;
      }
      for (Q = a(Q); ne < N.length; ne++)
        de = M(
          Q,
          j,
          ne,
          N[ne],
          w
        ), de !== null && (e && de.alternate !== null && Q.delete(
          de.key === null ? ne : de.key
        ), x = i(
          de,
          x,
          ne
        ), he === null ? K = de : he.sibling = de, he = de);
      return e && Q.forEach(function(Dl) {
        return t(j, Dl);
      }), fe && Jt(j, ne), K;
    }
    function W(j, x, N, w) {
      if (N == null) throw Error(o(151));
      for (var K = null, he = null, Q = x, ne = x = 0, de = null, ge = N.next(); Q !== null && !ge.done; ne++, ge = N.next()) {
        Q.index > ne ? (de = Q, Q = null) : de = Q.sibling;
        var Dl = z(j, Q, ge.value, w);
        if (Dl === null) {
          Q === null && (Q = de);
          break;
        }
        e && Q && Dl.alternate === null && t(j, Q), x = i(Dl, x, ne), he === null ? K = Dl : he.sibling = Dl, he = Dl, Q = de;
      }
      if (ge.done)
        return l(j, Q), fe && Jt(j, ne), K;
      if (Q === null) {
        for (; !ge.done; ne++, ge = N.next())
          ge = k(j, ge.value, w), ge !== null && (x = i(ge, x, ne), he === null ? K = ge : he.sibling = ge, he = ge);
        return fe && Jt(j, ne), K;
      }
      for (Q = a(Q); !ge.done; ne++, ge = N.next())
        ge = M(Q, j, ne, ge.value, w), ge !== null && (e && ge.alternate !== null && Q.delete(ge.key === null ? ne : ge.key), x = i(ge, x, ne), he === null ? K = ge : he.sibling = ge, he = ge);
      return e && Q.forEach(function(v4) {
        return t(j, v4);
      }), fe && Jt(j, ne), K;
    }
    function Ce(j, x, N, w) {
      if (typeof N == "object" && N !== null && N.type === L && N.key === null && (N = N.props.children), typeof N == "object" && N !== null) {
        switch (N.$$typeof) {
          case Z:
            e: {
              for (var K = N.key; x !== null; ) {
                if (x.key === K) {
                  if (K = N.type, K === L) {
                    if (x.tag === 7) {
                      l(
                        j,
                        x.sibling
                      ), w = n(
                        x,
                        N.props.children
                      ), w.return = j, j = w;
                      break e;
                    }
                  } else if (x.elementType === K || typeof K == "object" && K !== null && K.$$typeof === Me && Jl(K) === x.type) {
                    l(
                      j,
                      x.sibling
                    ), w = n(x, N.props), xn(w, N), w.return = j, j = w;
                    break e;
                  }
                  l(j, x);
                  break;
                } else t(j, x);
                x = x.sibling;
              }
              N.type === L ? (w = Vl(
                N.props.children,
                j.mode,
                w,
                N.key
              ), w.return = j, j = w) : (w = _i(
                N.type,
                N.key,
                N.props,
                null,
                j.mode,
                w
              ), xn(w, N), w.return = j, j = w);
            }
            return d(j);
          case B:
            e: {
              for (K = N.key; x !== null; ) {
                if (x.key === K)
                  if (x.tag === 4 && x.stateNode.containerInfo === N.containerInfo && x.stateNode.implementation === N.implementation) {
                    l(
                      j,
                      x.sibling
                    ), w = n(x, N.children || []), w.return = j, j = w;
                    break e;
                  } else {
                    l(j, x);
                    break;
                  }
                else t(j, x);
                x = x.sibling;
              }
              w = Cu(N, j.mode, w), w.return = j, j = w;
            }
            return d(j);
          case Me:
            return N = Jl(N), Ce(
              j,
              x,
              N,
              w
            );
        }
        if (X(N))
          return G(
            j,
            x,
            N,
            w
          );
        if (me(N)) {
          if (K = me(N), typeof K != "function") throw Error(o(150));
          return N = K.call(N), W(
            j,
            x,
            N,
            w
          );
        }
        if (typeof N.then == "function")
          return Ce(
            j,
            x,
            Di(N),
            w
          );
        if (N.$$typeof === q)
          return Ce(
            j,
            x,
            Ai(j, N),
            w
          );
        Ri(j, N);
      }
      return typeof N == "string" && N !== "" || typeof N == "number" || typeof N == "bigint" ? (N = "" + N, x !== null && x.tag === 6 ? (l(j, x.sibling), w = n(x, N), w.return = j, j = w) : (l(j, x), w = ju(N, j.mode, w), w.return = j, j = w), d(j)) : l(j, x);
    }
    return function(j, x, N, w) {
      try {
        pn = 0;
        var K = Ce(
          j,
          x,
          N,
          w
        );
        return Ta = null, K;
      } catch (Q) {
        if (Q === Ea || Q === ki) throw Q;
        var he = ht(29, Q, null, j.mode);
        return he.lanes = w, he.return = j, he;
      } finally {
      }
    };
  }
  var Fl = ad(!0), nd = ad(!1), xl = !1;
  function Ru(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function Uu(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
      baseState: e.baseState,
      firstBaseUpdate: e.firstBaseUpdate,
      lastBaseUpdate: e.lastBaseUpdate,
      shared: e.shared,
      callbacks: null
    });
  }
  function yl(e) {
    return { lane: e, tag: 0, payload: null, callback: null, next: null };
  }
  function vl(e, t, l) {
    var a = e.updateQueue;
    if (a === null) return null;
    if (a = a.shared, (pe & 2) !== 0) {
      var n = a.pending;
      return n === null ? t.next = t : (t.next = n.next, n.next = t), a.pending = t, t = Ti(e), Yo(e, null, l), t;
    }
    return Ei(e, a, t, l), Ti(e);
  }
  function yn(e, t, l) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (l & 4194048) !== 0)) {
      var a = t.lanes;
      a &= e.pendingLanes, l |= a, t.lanes = l, Jc(e, l);
    }
  }
  function Hu(e, t) {
    var l = e.updateQueue, a = e.alternate;
    if (a !== null && (a = a.updateQueue, l === a)) {
      var n = null, i = null;
      if (l = l.firstBaseUpdate, l !== null) {
        do {
          var d = {
            lane: l.lane,
            tag: l.tag,
            payload: l.payload,
            callback: null,
            next: null
          };
          i === null ? n = i = d : i = i.next = d, l = l.next;
        } while (l !== null);
        i === null ? n = i = t : i = i.next = t;
      } else n = i = t;
      l = {
        baseState: a.baseState,
        firstBaseUpdate: n,
        lastBaseUpdate: i,
        shared: a.shared,
        callbacks: a.callbacks
      }, e.updateQueue = l;
      return;
    }
    e = l.lastBaseUpdate, e === null ? l.firstBaseUpdate = t : e.next = t, l.lastBaseUpdate = t;
  }
  var Bu = !1;
  function vn() {
    if (Bu) {
      var e = Na;
      if (e !== null) throw e;
    }
  }
  function bn(e, t, l, a) {
    Bu = !1;
    var n = e.updateQueue;
    xl = !1;
    var i = n.firstBaseUpdate, d = n.lastBaseUpdate, f = n.shared.pending;
    if (f !== null) {
      n.shared.pending = null;
      var g = f, E = g.next;
      g.next = null, d === null ? i = E : d.next = E, d = g;
      var A = e.alternate;
      A !== null && (A = A.updateQueue, f = A.lastBaseUpdate, f !== d && (f === null ? A.firstBaseUpdate = E : f.next = E, A.lastBaseUpdate = g));
    }
    if (i !== null) {
      var k = n.baseState;
      d = 0, A = E = g = null, f = i;
      do {
        var z = f.lane & -536870913, M = z !== f.lane;
        if (M ? (oe & z) === z : (a & z) === z) {
          z !== 0 && z === Ca && (Bu = !0), A !== null && (A = A.next = {
            lane: 0,
            tag: f.tag,
            payload: f.payload,
            callback: null,
            next: null
          });
          e: {
            var G = e, W = f;
            z = t;
            var Ce = l;
            switch (W.tag) {
              case 1:
                if (G = W.payload, typeof G == "function") {
                  k = G.call(Ce, k, z);
                  break e;
                }
                k = G;
                break e;
              case 3:
                G.flags = G.flags & -65537 | 128;
              case 0:
                if (G = W.payload, z = typeof G == "function" ? G.call(Ce, k, z) : G, z == null) break e;
                k = T({}, k, z);
                break e;
              case 2:
                xl = !0;
            }
          }
          z = f.callback, z !== null && (e.flags |= 64, M && (e.flags |= 8192), M = n.callbacks, M === null ? n.callbacks = [z] : M.push(z));
        } else
          M = {
            lane: z,
            tag: f.tag,
            payload: f.payload,
            callback: f.callback,
            next: null
          }, A === null ? (E = A = M, g = k) : A = A.next = M, d |= z;
        if (f = f.next, f === null) {
          if (f = n.shared.pending, f === null)
            break;
          M = f, f = M.next, M.next = null, n.lastBaseUpdate = M, n.shared.pending = null;
        }
      } while (!0);
      A === null && (g = k), n.baseState = g, n.firstBaseUpdate = E, n.lastBaseUpdate = A, i === null && (n.shared.lanes = 0), Nl |= d, e.lanes = d, e.memoizedState = k;
    }
  }
  function id(e, t) {
    if (typeof e != "function")
      throw Error(o(191, e));
    e.call(t);
  }
  function rd(e, t) {
    var l = e.callbacks;
    if (l !== null)
      for (e.callbacks = null, e = 0; e < l.length; e++)
        id(l[e], t);
  }
  var _a = y(null), Ui = y(0);
  function ud(e, t) {
    e = il, Y(Ui, e), Y(_a, t), il = e | t.baseLanes;
  }
  function Lu() {
    Y(Ui, il), Y(_a, _a.current);
  }
  function qu() {
    il = Ui.current, O(_a), O(Ui);
  }
  var gt = y(null), zt = null;
  function bl(e) {
    var t = e.alternate;
    Y(Re, Re.current & 1), Y(gt, e), zt === null && (t === null || _a.current !== null || t.memoizedState !== null) && (zt = e);
  }
  function Yu(e) {
    Y(Re, Re.current), Y(gt, e), zt === null && (zt = e);
  }
  function sd(e) {
    e.tag === 22 ? (Y(Re, Re.current), Y(gt, e), zt === null && (zt = e)) : Sl();
  }
  function Sl() {
    Y(Re, Re.current), Y(gt, gt.current);
  }
  function pt(e) {
    O(gt), zt === e && (zt = null), O(Re);
  }
  var Re = y(0);
  function Hi(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var l = t.memoizedState;
        if (l !== null && (l = l.dehydrated, l === null || Ks(l) || Js(l)))
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
  var Wt = 0, ae = null, Se = null, Be = null, Bi = !1, za = !1, Wl = !1, Li = 0, Sn = 0, Ma = null, cm = 0;
  function we() {
    throw Error(o(321));
  }
  function Gu(e, t) {
    if (t === null) return !1;
    for (var l = 0; l < t.length && l < e.length; l++)
      if (!mt(e[l], t[l])) return !1;
    return !0;
  }
  function Vu(e, t, l, a, n, i) {
    return Wt = i, ae = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, S.H = e === null || e.memoizedState === null ? Qd : ns, Wl = !1, i = l(a, n), Wl = !1, za && (i = od(
      t,
      l,
      a,
      n
    )), cd(e), i;
  }
  function cd(e) {
    S.H = Nn;
    var t = Se !== null && Se.next !== null;
    if (Wt = 0, Be = Se = ae = null, Bi = !1, Sn = 0, Ma = null, t) throw Error(o(300));
    e === null || Le || (e = e.dependencies, e !== null && Mi(e) && (Le = !0));
  }
  function od(e, t, l, a) {
    ae = e;
    var n = 0;
    do {
      if (za && (Ma = null), Sn = 0, za = !1, 25 <= n) throw Error(o(301));
      if (n += 1, Be = Se = null, e.updateQueue != null) {
        var i = e.updateQueue;
        i.lastEffect = null, i.events = null, i.stores = null, i.memoCache != null && (i.memoCache.index = 0);
      }
      S.H = Zd, i = t(l, a);
    } while (za);
    return i;
  }
  function om() {
    var e = S.H, t = e.useState()[0];
    return t = typeof t.then == "function" ? jn(t) : t, e = e.useState()[0], (Se !== null ? Se.memoizedState : null) !== e && (ae.flags |= 1024), t;
  }
  function Xu() {
    var e = Li !== 0;
    return Li = 0, e;
  }
  function Qu(e, t, l) {
    t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l;
  }
  function Zu(e) {
    if (Bi) {
      for (e = e.memoizedState; e !== null; ) {
        var t = e.queue;
        t !== null && (t.pending = null), e = e.next;
      }
      Bi = !1;
    }
    Wt = 0, Be = Se = ae = null, za = !1, Sn = Li = 0, Ma = null;
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
  function Ue() {
    if (Se === null) {
      var e = ae.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Se.next;
    var t = Be === null ? ae.memoizedState : Be.next;
    if (t !== null)
      Be = t, Se = e;
    else {
      if (e === null)
        throw ae.alternate === null ? Error(o(467)) : Error(o(310));
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
  function qi() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function jn(e) {
    var t = Sn;
    return Sn += 1, Ma === null && (Ma = []), e = ed(Ma, e, t), t = ae, (Be === null ? t.memoizedState : Be.next) === null && (t = t.alternate, S.H = t === null || t.memoizedState === null ? Qd : ns), e;
  }
  function Yi(e) {
    if (e !== null && typeof e == "object") {
      if (typeof e.then == "function") return jn(e);
      if (e.$$typeof === q) return Je(e);
    }
    throw Error(o(438, String(e)));
  }
  function Ku(e) {
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
    if (t == null && (t = { data: [], index: 0 }), l === null && (l = qi(), ae.updateQueue = l), l.memoCache = t, l = t.data[t.index], l === void 0)
      for (l = t.data[t.index] = Array(e), a = 0; a < e; a++)
        l[a] = Ut;
    return t.index++, l;
  }
  function It(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function Gi(e) {
    var t = Ue();
    return Ju(t, Se, e);
  }
  function Ju(e, t, l) {
    var a = e.queue;
    if (a === null) throw Error(o(311));
    a.lastRenderedReducer = l;
    var n = e.baseQueue, i = a.pending;
    if (i !== null) {
      if (n !== null) {
        var d = n.next;
        n.next = i.next, i.next = d;
      }
      t.baseQueue = n = i, a.pending = null;
    }
    if (i = e.baseState, n === null) e.memoizedState = i;
    else {
      t = n.next;
      var f = d = null, g = null, E = t, A = !1;
      do {
        var k = E.lane & -536870913;
        if (k !== E.lane ? (oe & k) === k : (Wt & k) === k) {
          var z = E.revertLane;
          if (z === 0)
            g !== null && (g = g.next = {
              lane: 0,
              revertLane: 0,
              gesture: null,
              action: E.action,
              hasEagerState: E.hasEagerState,
              eagerState: E.eagerState,
              next: null
            }), k === Ca && (A = !0);
          else if ((Wt & z) === z) {
            E = E.next, z === Ca && (A = !0);
            continue;
          } else
            k = {
              lane: 0,
              revertLane: E.revertLane,
              gesture: null,
              action: E.action,
              hasEagerState: E.hasEagerState,
              eagerState: E.eagerState,
              next: null
            }, g === null ? (f = g = k, d = i) : g = g.next = k, ae.lanes |= z, Nl |= z;
          k = E.action, Wl && l(i, k), i = E.hasEagerState ? E.eagerState : l(i, k);
        } else
          z = {
            lane: k,
            revertLane: E.revertLane,
            gesture: E.gesture,
            action: E.action,
            hasEagerState: E.hasEagerState,
            eagerState: E.eagerState,
            next: null
          }, g === null ? (f = g = z, d = i) : g = g.next = z, ae.lanes |= k, Nl |= k;
        E = E.next;
      } while (E !== null && E !== t);
      if (g === null ? d = i : g.next = f, !mt(i, e.memoizedState) && (Le = !0, A && (l = Na, l !== null)))
        throw l;
      e.memoizedState = i, e.baseState = d, e.baseQueue = g, a.lastRenderedState = i;
    }
    return n === null && (a.lanes = 0), [e.memoizedState, a.dispatch];
  }
  function $u(e) {
    var t = Ue(), l = t.queue;
    if (l === null) throw Error(o(311));
    l.lastRenderedReducer = e;
    var a = l.dispatch, n = l.pending, i = t.memoizedState;
    if (n !== null) {
      l.pending = null;
      var d = n = n.next;
      do
        i = e(i, d.action), d = d.next;
      while (d !== n);
      mt(i, t.memoizedState) || (Le = !0), t.memoizedState = i, t.baseQueue === null && (t.baseState = i), l.lastRenderedState = i;
    }
    return [i, a];
  }
  function dd(e, t, l) {
    var a = ae, n = Ue(), i = fe;
    if (i) {
      if (l === void 0) throw Error(o(407));
      l = l();
    } else l = t();
    var d = !mt(
      (Se || n).memoizedState,
      l
    );
    if (d && (n.memoizedState = l, Le = !0), n = n.queue, Iu(hd.bind(null, a, n, e), [
      e
    ]), n.getSnapshot !== t || d || Be !== null && Be.memoizedState.tag & 1) {
      if (a.flags |= 2048, Aa(
        9,
        { destroy: void 0 },
        md.bind(
          null,
          a,
          n,
          l,
          t
        ),
        null
      ), Ee === null) throw Error(o(349));
      i || (Wt & 127) !== 0 || fd(a, t, l);
    }
    return l;
  }
  function fd(e, t, l) {
    e.flags |= 16384, e = { getSnapshot: t, value: l }, t = ae.updateQueue, t === null ? (t = qi(), ae.updateQueue = t, t.stores = [e]) : (l = t.stores, l === null ? t.stores = [e] : l.push(e));
  }
  function md(e, t, l, a) {
    t.value = l, t.getSnapshot = a, gd(t) && pd(e);
  }
  function hd(e, t, l) {
    return l(function() {
      gd(t) && pd(e);
    });
  }
  function gd(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var l = t();
      return !mt(e, l);
    } catch {
      return !0;
    }
  }
  function pd(e) {
    var t = Gl(e, 2);
    t !== null && st(t, e, 2);
  }
  function Fu(e) {
    var t = et();
    if (typeof e == "function") {
      var l = e;
      if (e = l(), Wl) {
        ol(!0);
        try {
          l();
        } finally {
          ol(!1);
        }
      }
    }
    return t.memoizedState = t.baseState = e, t.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: It,
      lastRenderedState: e
    }, t;
  }
  function xd(e, t, l, a) {
    return e.baseState = l, Ju(
      e,
      Se,
      typeof a == "function" ? a : It
    );
  }
  function dm(e, t, l, a, n) {
    if (Qi(e)) throw Error(o(485));
    if (e = t.action, e !== null) {
      var i = {
        payload: n,
        action: e,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function(d) {
          i.listeners.push(d);
        }
      };
      S.T !== null ? l(!0) : i.isTransition = !1, a(i), l = t.pending, l === null ? (i.next = t.pending = i, yd(t, i)) : (i.next = l.next, t.pending = l.next = i);
    }
  }
  function yd(e, t) {
    var l = t.action, a = t.payload, n = e.state;
    if (t.isTransition) {
      var i = S.T, d = {};
      S.T = d;
      try {
        var f = l(n, a), g = S.S;
        g !== null && g(d, f), vd(e, t, f);
      } catch (E) {
        Wu(e, t, E);
      } finally {
        i !== null && d.types !== null && (i.types = d.types), S.T = i;
      }
    } else
      try {
        i = l(n, a), vd(e, t, i);
      } catch (E) {
        Wu(e, t, E);
      }
  }
  function vd(e, t, l) {
    l !== null && typeof l == "object" && typeof l.then == "function" ? l.then(
      function(a) {
        bd(e, t, a);
      },
      function(a) {
        return Wu(e, t, a);
      }
    ) : bd(e, t, l);
  }
  function bd(e, t, l) {
    t.status = "fulfilled", t.value = l, Sd(t), e.state = l, t = e.pending, t !== null && (l = t.next, l === t ? e.pending = null : (l = l.next, t.next = l, yd(e, l)));
  }
  function Wu(e, t, l) {
    var a = e.pending;
    if (e.pending = null, a !== null) {
      a = a.next;
      do
        t.status = "rejected", t.reason = l, Sd(t), t = t.next;
      while (t !== a);
    }
    e.action = null;
  }
  function Sd(e) {
    e = e.listeners;
    for (var t = 0; t < e.length; t++) (0, e[t])();
  }
  function jd(e, t) {
    return t;
  }
  function Cd(e, t) {
    if (fe) {
      var l = Ee.formState;
      if (l !== null) {
        e: {
          var a = ae;
          if (fe) {
            if (_e) {
              t: {
                for (var n = _e, i = _t; n.nodeType !== 8; ) {
                  if (!i) {
                    n = null;
                    break t;
                  }
                  if (n = Mt(
                    n.nextSibling
                  ), n === null) {
                    n = null;
                    break t;
                  }
                }
                i = n.data, n = i === "F!" || i === "F" ? n : null;
              }
              if (n) {
                _e = Mt(
                  n.nextSibling
                ), a = n.data === "F!";
                break e;
              }
            }
            gl(a);
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
      lastRenderedReducer: jd,
      lastRenderedState: t
    }, l.queue = a, l = Gd.bind(
      null,
      ae,
      a
    ), a.dispatch = l, a = Fu(!1), i = as.bind(
      null,
      ae,
      !1,
      a.queue
    ), a = et(), n = {
      state: t,
      dispatch: null,
      action: e,
      pending: null
    }, a.queue = n, l = dm.bind(
      null,
      ae,
      n,
      i,
      l
    ), n.dispatch = l, a.memoizedState = e, [t, l, !1];
  }
  function Nd(e) {
    var t = Ue();
    return Ed(t, Se, e);
  }
  function Ed(e, t, l) {
    if (t = Ju(
      e,
      t,
      jd
    )[0], e = Gi(It)[0], typeof t == "object" && t !== null && typeof t.then == "function")
      try {
        var a = jn(t);
      } catch (d) {
        throw d === Ea ? ki : d;
      }
    else a = t;
    t = Ue();
    var n = t.queue, i = n.dispatch;
    return l !== t.memoizedState && (ae.flags |= 2048, Aa(
      9,
      { destroy: void 0 },
      fm.bind(null, n, l),
      null
    )), [a, i, e];
  }
  function fm(e, t) {
    e.action = t;
  }
  function Td(e) {
    var t = Ue(), l = Se;
    if (l !== null)
      return Ed(t, l, e);
    Ue(), t = t.memoizedState, l = Ue();
    var a = l.queue.dispatch;
    return l.memoizedState = e, [t, a, !1];
  }
  function Aa(e, t, l, a) {
    return e = { tag: e, create: l, deps: a, inst: t, next: null }, t = ae.updateQueue, t === null && (t = qi(), ae.updateQueue = t), l = t.lastEffect, l === null ? t.lastEffect = e.next = e : (a = l.next, l.next = e, e.next = a, t.lastEffect = e), e;
  }
  function _d() {
    return Ue().memoizedState;
  }
  function Vi(e, t, l, a) {
    var n = et();
    ae.flags |= e, n.memoizedState = Aa(
      1 | t,
      { destroy: void 0 },
      l,
      a === void 0 ? null : a
    );
  }
  function Xi(e, t, l, a) {
    var n = Ue();
    a = a === void 0 ? null : a;
    var i = n.memoizedState.inst;
    Se !== null && a !== null && Gu(a, Se.memoizedState.deps) ? n.memoizedState = Aa(t, i, l, a) : (ae.flags |= e, n.memoizedState = Aa(
      1 | t,
      i,
      l,
      a
    ));
  }
  function zd(e, t) {
    Vi(8390656, 8, e, t);
  }
  function Iu(e, t) {
    Xi(2048, 8, e, t);
  }
  function mm(e) {
    ae.flags |= 4;
    var t = ae.updateQueue;
    if (t === null)
      t = qi(), ae.updateQueue = t, t.events = [e];
    else {
      var l = t.events;
      l === null ? t.events = [e] : l.push(e);
    }
  }
  function Md(e) {
    var t = Ue().memoizedState;
    return mm({ ref: t, nextImpl: e }), function() {
      if ((pe & 2) !== 0) throw Error(o(440));
      return t.impl.apply(void 0, arguments);
    };
  }
  function Ad(e, t) {
    return Xi(4, 2, e, t);
  }
  function wd(e, t) {
    return Xi(4, 4, e, t);
  }
  function kd(e, t) {
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
  function Od(e, t, l) {
    l = l != null ? l.concat([e]) : null, Xi(4, 4, kd.bind(null, t, e), l);
  }
  function Pu() {
  }
  function Dd(e, t) {
    var l = Ue();
    t = t === void 0 ? null : t;
    var a = l.memoizedState;
    return t !== null && Gu(t, a[1]) ? a[0] : (l.memoizedState = [e, t], e);
  }
  function Rd(e, t) {
    var l = Ue();
    t = t === void 0 ? null : t;
    var a = l.memoizedState;
    if (t !== null && Gu(t, a[1]))
      return a[0];
    if (a = e(), Wl) {
      ol(!0);
      try {
        e();
      } finally {
        ol(!1);
      }
    }
    return l.memoizedState = [a, t], a;
  }
  function es(e, t, l) {
    return l === void 0 || (Wt & 1073741824) !== 0 && (oe & 261930) === 0 ? e.memoizedState = t : (e.memoizedState = l, e = Hf(), ae.lanes |= e, Nl |= e, l);
  }
  function Ud(e, t, l, a) {
    return mt(l, t) ? l : _a.current !== null ? (e = es(e, l, a), mt(e, t) || (Le = !0), e) : (Wt & 42) === 0 || (Wt & 1073741824) !== 0 && (oe & 261930) === 0 ? (Le = !0, e.memoizedState = l) : (e = Hf(), ae.lanes |= e, Nl |= e, t);
  }
  function Hd(e, t, l, a, n) {
    var i = U.p;
    U.p = i !== 0 && 8 > i ? i : 8;
    var d = S.T, f = {};
    S.T = f, as(e, !1, t, l);
    try {
      var g = n(), E = S.S;
      if (E !== null && E(f, g), g !== null && typeof g == "object" && typeof g.then == "function") {
        var A = sm(
          g,
          a
        );
        Cn(
          e,
          t,
          A,
          vt(e)
        );
      } else
        Cn(
          e,
          t,
          a,
          vt(e)
        );
    } catch (k) {
      Cn(
        e,
        t,
        { then: function() {
        }, status: "rejected", reason: k },
        vt()
      );
    } finally {
      U.p = i, d !== null && f.types !== null && (d.types = f.types), S.T = d;
    }
  }
  function hm() {
  }
  function ts(e, t, l, a) {
    if (e.tag !== 5) throw Error(o(476));
    var n = Bd(e).queue;
    Hd(
      e,
      n,
      t,
      F,
      l === null ? hm : function() {
        return Ld(e), l(a);
      }
    );
  }
  function Bd(e) {
    var t = e.memoizedState;
    if (t !== null) return t;
    t = {
      memoizedState: F,
      baseState: F,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: It,
        lastRenderedState: F
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
        lastRenderedReducer: It,
        lastRenderedState: l
      },
      next: null
    }, e.memoizedState = t, e = e.alternate, e !== null && (e.memoizedState = t), t;
  }
  function Ld(e) {
    var t = Bd(e);
    t.next === null && (t = e.alternate.memoizedState), Cn(
      e,
      t.next.queue,
      {},
      vt()
    );
  }
  function ls() {
    return Je(qn);
  }
  function qd() {
    return Ue().memoizedState;
  }
  function Yd() {
    return Ue().memoizedState;
  }
  function gm(e) {
    for (var t = e.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var l = vt();
          e = yl(l);
          var a = vl(t, e, l);
          a !== null && (st(a, t, l), yn(a, t, l)), t = { cache: wu() }, e.payload = t;
          return;
      }
      t = t.return;
    }
  }
  function pm(e, t, l) {
    var a = vt();
    l = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Qi(e) ? Vd(t, l) : (l = bu(e, t, l, a), l !== null && (st(l, e, a), Xd(l, t, a)));
  }
  function Gd(e, t, l) {
    var a = vt();
    Cn(e, t, l, a);
  }
  function Cn(e, t, l, a) {
    var n = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (Qi(e)) Vd(t, n);
    else {
      var i = e.alternate;
      if (e.lanes === 0 && (i === null || i.lanes === 0) && (i = t.lastRenderedReducer, i !== null))
        try {
          var d = t.lastRenderedState, f = i(d, l);
          if (n.hasEagerState = !0, n.eagerState = f, mt(f, d))
            return Ei(e, t, n, 0), Ee === null && Ni(), !1;
        } catch {
        } finally {
        }
      if (l = bu(e, t, n, a), l !== null)
        return st(l, e, a), Xd(l, t, a), !0;
    }
    return !1;
  }
  function as(e, t, l, a) {
    if (a = {
      lane: 2,
      revertLane: Rs(),
      gesture: null,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Qi(e)) {
      if (t) throw Error(o(479));
    } else
      t = bu(
        e,
        l,
        a,
        2
      ), t !== null && st(t, e, 2);
  }
  function Qi(e) {
    var t = e.alternate;
    return e === ae || t !== null && t === ae;
  }
  function Vd(e, t) {
    za = Bi = !0;
    var l = e.pending;
    l === null ? t.next = t : (t.next = l.next, l.next = t), e.pending = t;
  }
  function Xd(e, t, l) {
    if ((l & 4194048) !== 0) {
      var a = t.lanes;
      a &= e.pendingLanes, l |= a, t.lanes = l, Jc(e, l);
    }
  }
  var Nn = {
    readContext: Je,
    use: Yi,
    useCallback: we,
    useContext: we,
    useEffect: we,
    useImperativeHandle: we,
    useLayoutEffect: we,
    useInsertionEffect: we,
    useMemo: we,
    useReducer: we,
    useRef: we,
    useState: we,
    useDebugValue: we,
    useDeferredValue: we,
    useTransition: we,
    useSyncExternalStore: we,
    useId: we,
    useHostTransitionStatus: we,
    useFormState: we,
    useActionState: we,
    useOptimistic: we,
    useMemoCache: we,
    useCacheRefresh: we
  };
  Nn.useEffectEvent = we;
  var Qd = {
    readContext: Je,
    use: Yi,
    useCallback: function(e, t) {
      return et().memoizedState = [
        e,
        t === void 0 ? null : t
      ], e;
    },
    useContext: Je,
    useEffect: zd,
    useImperativeHandle: function(e, t, l) {
      l = l != null ? l.concat([e]) : null, Vi(
        4194308,
        4,
        kd.bind(null, t, e),
        l
      );
    },
    useLayoutEffect: function(e, t) {
      return Vi(4194308, 4, e, t);
    },
    useInsertionEffect: function(e, t) {
      Vi(4, 2, e, t);
    },
    useMemo: function(e, t) {
      var l = et();
      t = t === void 0 ? null : t;
      var a = e();
      if (Wl) {
        ol(!0);
        try {
          e();
        } finally {
          ol(!1);
        }
      }
      return l.memoizedState = [a, t], a;
    },
    useReducer: function(e, t, l) {
      var a = et();
      if (l !== void 0) {
        var n = l(t);
        if (Wl) {
          ol(!0);
          try {
            l(t);
          } finally {
            ol(!1);
          }
        }
      } else n = t;
      return a.memoizedState = a.baseState = n, e = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: n
      }, a.queue = e, e = e.dispatch = pm.bind(
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
      e = Fu(e);
      var t = e.queue, l = Gd.bind(null, ae, t);
      return t.dispatch = l, [e.memoizedState, l];
    },
    useDebugValue: Pu,
    useDeferredValue: function(e, t) {
      var l = et();
      return es(l, e, t);
    },
    useTransition: function() {
      var e = Fu(!1);
      return e = Hd.bind(
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
          throw Error(o(407));
        l = l();
      } else {
        if (l = t(), Ee === null)
          throw Error(o(349));
        (oe & 127) !== 0 || fd(a, t, l);
      }
      n.memoizedState = l;
      var i = { value: l, getSnapshot: t };
      return n.queue = i, zd(hd.bind(null, a, i, e), [
        e
      ]), a.flags |= 2048, Aa(
        9,
        { destroy: void 0 },
        md.bind(
          null,
          a,
          i,
          l,
          t
        ),
        null
      ), l;
    },
    useId: function() {
      var e = et(), t = Ee.identifierPrefix;
      if (fe) {
        var l = Bt, a = Ht;
        l = (a & ~(1 << 32 - ft(a) - 1)).toString(32) + l, t = "_" + t + "R_" + l, l = Li++, 0 < l && (t += "H" + l.toString(32)), t += "_";
      } else
        l = cm++, t = "_" + t + "r_" + l.toString(32) + "_";
      return e.memoizedState = t;
    },
    useHostTransitionStatus: ls,
    useFormState: Cd,
    useActionState: Cd,
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
      return t.queue = l, t = as.bind(
        null,
        ae,
        !0,
        l
      ), l.dispatch = t, [e, t];
    },
    useMemoCache: Ku,
    useCacheRefresh: function() {
      return et().memoizedState = gm.bind(
        null,
        ae
      );
    },
    useEffectEvent: function(e) {
      var t = et(), l = { impl: e };
      return t.memoizedState = l, function() {
        if ((pe & 2) !== 0)
          throw Error(o(440));
        return l.impl.apply(void 0, arguments);
      };
    }
  }, ns = {
    readContext: Je,
    use: Yi,
    useCallback: Dd,
    useContext: Je,
    useEffect: Iu,
    useImperativeHandle: Od,
    useInsertionEffect: Ad,
    useLayoutEffect: wd,
    useMemo: Rd,
    useReducer: Gi,
    useRef: _d,
    useState: function() {
      return Gi(It);
    },
    useDebugValue: Pu,
    useDeferredValue: function(e, t) {
      var l = Ue();
      return Ud(
        l,
        Se.memoizedState,
        e,
        t
      );
    },
    useTransition: function() {
      var e = Gi(It)[0], t = Ue().memoizedState;
      return [
        typeof e == "boolean" ? e : jn(e),
        t
      ];
    },
    useSyncExternalStore: dd,
    useId: qd,
    useHostTransitionStatus: ls,
    useFormState: Nd,
    useActionState: Nd,
    useOptimistic: function(e, t) {
      var l = Ue();
      return xd(l, Se, e, t);
    },
    useMemoCache: Ku,
    useCacheRefresh: Yd
  };
  ns.useEffectEvent = Md;
  var Zd = {
    readContext: Je,
    use: Yi,
    useCallback: Dd,
    useContext: Je,
    useEffect: Iu,
    useImperativeHandle: Od,
    useInsertionEffect: Ad,
    useLayoutEffect: wd,
    useMemo: Rd,
    useReducer: $u,
    useRef: _d,
    useState: function() {
      return $u(It);
    },
    useDebugValue: Pu,
    useDeferredValue: function(e, t) {
      var l = Ue();
      return Se === null ? es(l, e, t) : Ud(
        l,
        Se.memoizedState,
        e,
        t
      );
    },
    useTransition: function() {
      var e = $u(It)[0], t = Ue().memoizedState;
      return [
        typeof e == "boolean" ? e : jn(e),
        t
      ];
    },
    useSyncExternalStore: dd,
    useId: qd,
    useHostTransitionStatus: ls,
    useFormState: Td,
    useActionState: Td,
    useOptimistic: function(e, t) {
      var l = Ue();
      return Se !== null ? xd(l, Se, e, t) : (l.baseState = e, [e, l.queue.dispatch]);
    },
    useMemoCache: Ku,
    useCacheRefresh: Yd
  };
  Zd.useEffectEvent = Md;
  function is(e, t, l, a) {
    t = e.memoizedState, l = l(a, t), l = l == null ? t : T({}, t, l), e.memoizedState = l, e.lanes === 0 && (e.updateQueue.baseState = l);
  }
  var rs = {
    enqueueSetState: function(e, t, l) {
      e = e._reactInternals;
      var a = vt(), n = yl(a);
      n.payload = t, l != null && (n.callback = l), t = vl(e, n, a), t !== null && (st(t, e, a), yn(t, e, a));
    },
    enqueueReplaceState: function(e, t, l) {
      e = e._reactInternals;
      var a = vt(), n = yl(a);
      n.tag = 1, n.payload = t, l != null && (n.callback = l), t = vl(e, n, a), t !== null && (st(t, e, a), yn(t, e, a));
    },
    enqueueForceUpdate: function(e, t) {
      e = e._reactInternals;
      var l = vt(), a = yl(l);
      a.tag = 2, t != null && (a.callback = t), t = vl(e, a, l), t !== null && (st(t, e, l), yn(t, e, l));
    }
  };
  function Kd(e, t, l, a, n, i, d) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(a, i, d) : t.prototype && t.prototype.isPureReactComponent ? !on(l, a) || !on(n, i) : !0;
  }
  function Jd(e, t, l, a) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(l, a), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(l, a), t.state !== e && rs.enqueueReplaceState(t, t.state, null);
  }
  function Il(e, t) {
    var l = t;
    if ("ref" in t) {
      l = {};
      for (var a in t)
        a !== "ref" && (l[a] = t[a]);
    }
    if (e = e.defaultProps) {
      l === t && (l = T({}, l));
      for (var n in e)
        l[n] === void 0 && (l[n] = e[n]);
    }
    return l;
  }
  function $d(e) {
    Ci(e);
  }
  function Fd(e) {
    console.error(e);
  }
  function Wd(e) {
    Ci(e);
  }
  function Zi(e, t) {
    try {
      var l = e.onUncaughtError;
      l(t.value, { componentStack: t.stack });
    } catch (a) {
      setTimeout(function() {
        throw a;
      });
    }
  }
  function Id(e, t, l) {
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
  function us(e, t, l) {
    return l = yl(l), l.tag = 3, l.payload = { element: null }, l.callback = function() {
      Zi(e, t);
    }, l;
  }
  function Pd(e) {
    return e = yl(e), e.tag = 3, e;
  }
  function ef(e, t, l, a) {
    var n = l.type.getDerivedStateFromError;
    if (typeof n == "function") {
      var i = a.value;
      e.payload = function() {
        return n(i);
      }, e.callback = function() {
        Id(t, l, a);
      };
    }
    var d = l.stateNode;
    d !== null && typeof d.componentDidCatch == "function" && (e.callback = function() {
      Id(t, l, a), typeof n != "function" && (El === null ? El = /* @__PURE__ */ new Set([this]) : El.add(this));
      var f = a.stack;
      this.componentDidCatch(a.value, {
        componentStack: f !== null ? f : ""
      });
    });
  }
  function xm(e, t, l, a, n) {
    if (l.flags |= 32768, a !== null && typeof a == "object" && typeof a.then == "function") {
      if (t = l.alternate, t !== null && ja(
        t,
        l,
        n,
        !0
      ), l = gt.current, l !== null) {
        switch (l.tag) {
          case 31:
          case 13:
            return zt === null ? nr() : l.alternate === null && ke === 0 && (ke = 3), l.flags &= -257, l.flags |= 65536, l.lanes = n, a === Oi ? l.flags |= 16384 : (t = l.updateQueue, t === null ? l.updateQueue = /* @__PURE__ */ new Set([a]) : t.add(a), ks(e, a, n)), !1;
          case 22:
            return l.flags |= 65536, a === Oi ? l.flags |= 16384 : (t = l.updateQueue, t === null ? (t = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([a])
            }, l.updateQueue = t) : (l = t.retryQueue, l === null ? t.retryQueue = /* @__PURE__ */ new Set([a]) : l.add(a)), ks(e, a, n)), !1;
        }
        throw Error(o(435, l.tag));
      }
      return ks(e, a, n), nr(), !1;
    }
    if (fe)
      return t = gt.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = n, a !== Tu && (e = Error(o(422), { cause: a }), mn(Nt(e, l)))) : (a !== Tu && (t = Error(o(423), {
        cause: a
      }), mn(
        Nt(t, l)
      )), e = e.current.alternate, e.flags |= 65536, n &= -n, e.lanes |= n, a = Nt(a, l), n = us(
        e.stateNode,
        a,
        n
      ), Hu(e, n), ke !== 4 && (ke = 2)), !1;
    var i = Error(o(520), { cause: a });
    if (i = Nt(i, l), kn === null ? kn = [i] : kn.push(i), ke !== 4 && (ke = 2), t === null) return !0;
    a = Nt(a, l), l = t;
    do {
      switch (l.tag) {
        case 3:
          return l.flags |= 65536, e = n & -n, l.lanes |= e, e = us(l.stateNode, a, e), Hu(l, e), !1;
        case 1:
          if (t = l.type, i = l.stateNode, (l.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || i !== null && typeof i.componentDidCatch == "function" && (El === null || !El.has(i))))
            return l.flags |= 65536, n &= -n, l.lanes |= n, n = Pd(n), ef(
              n,
              e,
              l,
              a
            ), Hu(l, n), !1;
      }
      l = l.return;
    } while (l !== null);
    return !1;
  }
  var ss = Error(o(461)), Le = !1;
  function $e(e, t, l, a) {
    t.child = e === null ? nd(t, null, l, a) : Fl(
      t,
      e.child,
      l,
      a
    );
  }
  function tf(e, t, l, a, n) {
    l = l.render;
    var i = t.ref;
    if ("ref" in a) {
      var d = {};
      for (var f in a)
        f !== "ref" && (d[f] = a[f]);
    } else d = a;
    return Zl(t), a = Vu(
      e,
      t,
      l,
      d,
      i,
      n
    ), f = Xu(), e !== null && !Le ? (Qu(e, t, n), Pt(e, t, n)) : (fe && f && Nu(t), t.flags |= 1, $e(e, t, a, n), t.child);
  }
  function lf(e, t, l, a, n) {
    if (e === null) {
      var i = l.type;
      return typeof i == "function" && !Su(i) && i.defaultProps === void 0 && l.compare === null ? (t.tag = 15, t.type = i, af(
        e,
        t,
        i,
        a,
        n
      )) : (e = _i(
        l.type,
        null,
        a,
        t,
        t.mode,
        n
      ), e.ref = t.ref, e.return = t, t.child = e);
    }
    if (i = e.child, !ps(e, n)) {
      var d = i.memoizedProps;
      if (l = l.compare, l = l !== null ? l : on, l(d, a) && e.ref === t.ref)
        return Pt(e, t, n);
    }
    return t.flags |= 1, e = Kt(i, a), e.ref = t.ref, e.return = t, t.child = e;
  }
  function af(e, t, l, a, n) {
    if (e !== null) {
      var i = e.memoizedProps;
      if (on(i, a) && e.ref === t.ref)
        if (Le = !1, t.pendingProps = a = i, ps(e, n))
          (e.flags & 131072) !== 0 && (Le = !0);
        else
          return t.lanes = e.lanes, Pt(e, t, n);
    }
    return cs(
      e,
      t,
      l,
      a,
      n
    );
  }
  function nf(e, t, l, a) {
    var n = a.children, i = e !== null ? e.memoizedState : null;
    if (e === null && t.stateNode === null && (t.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), a.mode === "hidden") {
      if ((t.flags & 128) !== 0) {
        if (i = i !== null ? i.baseLanes | l : l, e !== null) {
          for (a = t.child = e.child, n = 0; a !== null; )
            n = n | a.lanes | a.childLanes, a = a.sibling;
          a = n & ~i;
        } else a = 0, t.child = null;
        return rf(
          e,
          t,
          i,
          l,
          a
        );
      }
      if ((l & 536870912) !== 0)
        t.memoizedState = { baseLanes: 0, cachePool: null }, e !== null && wi(
          t,
          i !== null ? i.cachePool : null
        ), i !== null ? ud(t, i) : Lu(), sd(t);
      else
        return a = t.lanes = 536870912, rf(
          e,
          t,
          i !== null ? i.baseLanes | l : l,
          l,
          a
        );
    } else
      i !== null ? (wi(t, i.cachePool), ud(t, i), Sl(), t.memoizedState = null) : (e !== null && wi(t, null), Lu(), Sl());
    return $e(e, t, n, l), t.child;
  }
  function En(e, t) {
    return e !== null && e.tag === 22 || t.stateNode !== null || (t.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), t.sibling;
  }
  function rf(e, t, l, a, n) {
    var i = Ou();
    return i = i === null ? null : { parent: He._currentValue, pool: i }, t.memoizedState = {
      baseLanes: l,
      cachePool: i
    }, e !== null && wi(t, null), Lu(), sd(t), e !== null && ja(e, t, a, !0), t.childLanes = n, null;
  }
  function Ki(e, t) {
    return t = $i(
      { mode: t.mode, children: t.children },
      e.mode
    ), t.ref = e.ref, e.child = t, t.return = e, t;
  }
  function uf(e, t, l) {
    return Fl(t, e.child, null, l), e = Ki(t, t.pendingProps), e.flags |= 2, pt(t), t.memoizedState = null, e;
  }
  function ym(e, t, l) {
    var a = t.pendingProps, n = (t.flags & 128) !== 0;
    if (t.flags &= -129, e === null) {
      if (fe) {
        if (a.mode === "hidden")
          return e = Ki(t, a), t.lanes = 536870912, En(null, e);
        if (Yu(t), (e = _e) ? (e = v0(
          e,
          _t
        ), e = e !== null && e.data === "&" ? e : null, e !== null && (t.memoizedState = {
          dehydrated: e,
          treeContext: ml !== null ? { id: Ht, overflow: Bt } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, l = Vo(e), l.return = t, t.child = l, Ke = t, _e = null)) : e = null, e === null) throw gl(t);
        return t.lanes = 536870912, null;
      }
      return Ki(t, a);
    }
    var i = e.memoizedState;
    if (i !== null) {
      var d = i.dehydrated;
      if (Yu(t), n)
        if (t.flags & 256)
          t.flags &= -257, t = uf(
            e,
            t,
            l
          );
        else if (t.memoizedState !== null)
          t.child = e.child, t.flags |= 128, t = null;
        else throw Error(o(558));
      else if (Le || ja(e, t, l, !1), n = (l & e.childLanes) !== 0, Le || n) {
        if (a = Ee, a !== null && (d = $c(a, l), d !== 0 && d !== i.retryLane))
          throw i.retryLane = d, Gl(e, d), st(a, e, d), ss;
        nr(), t = uf(
          e,
          t,
          l
        );
      } else
        e = i.treeContext, _e = Mt(d.nextSibling), Ke = t, fe = !0, hl = null, _t = !1, e !== null && Zo(t, e), t = Ki(t, a), t.flags |= 4096;
      return t;
    }
    return e = Kt(e.child, {
      mode: a.mode,
      children: a.children
    }), e.ref = t.ref, t.child = e, e.return = t, e;
  }
  function Ji(e, t) {
    var l = t.ref;
    if (l === null)
      e !== null && e.ref !== null && (t.flags |= 4194816);
    else {
      if (typeof l != "function" && typeof l != "object")
        throw Error(o(284));
      (e === null || e.ref !== l) && (t.flags |= 4194816);
    }
  }
  function cs(e, t, l, a, n) {
    return Zl(t), l = Vu(
      e,
      t,
      l,
      a,
      void 0,
      n
    ), a = Xu(), e !== null && !Le ? (Qu(e, t, n), Pt(e, t, n)) : (fe && a && Nu(t), t.flags |= 1, $e(e, t, l, n), t.child);
  }
  function sf(e, t, l, a, n, i) {
    return Zl(t), t.updateQueue = null, l = od(
      t,
      a,
      l,
      n
    ), cd(e), a = Xu(), e !== null && !Le ? (Qu(e, t, i), Pt(e, t, i)) : (fe && a && Nu(t), t.flags |= 1, $e(e, t, l, i), t.child);
  }
  function cf(e, t, l, a, n) {
    if (Zl(t), t.stateNode === null) {
      var i = ya, d = l.contextType;
      typeof d == "object" && d !== null && (i = Je(d)), i = new l(a, i), t.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null, i.updater = rs, t.stateNode = i, i._reactInternals = t, i = t.stateNode, i.props = a, i.state = t.memoizedState, i.refs = {}, Ru(t), d = l.contextType, i.context = typeof d == "object" && d !== null ? Je(d) : ya, i.state = t.memoizedState, d = l.getDerivedStateFromProps, typeof d == "function" && (is(
        t,
        l,
        d,
        a
      ), i.state = t.memoizedState), typeof l.getDerivedStateFromProps == "function" || typeof i.getSnapshotBeforeUpdate == "function" || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (d = i.state, typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(), d !== i.state && rs.enqueueReplaceState(i, i.state, null), bn(t, a, i, n), vn(), i.state = t.memoizedState), typeof i.componentDidMount == "function" && (t.flags |= 4194308), a = !0;
    } else if (e === null) {
      i = t.stateNode;
      var f = t.memoizedProps, g = Il(l, f);
      i.props = g;
      var E = i.context, A = l.contextType;
      d = ya, typeof A == "object" && A !== null && (d = Je(A));
      var k = l.getDerivedStateFromProps;
      A = typeof k == "function" || typeof i.getSnapshotBeforeUpdate == "function", f = t.pendingProps !== f, A || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (f || E !== d) && Jd(
        t,
        i,
        a,
        d
      ), xl = !1;
      var z = t.memoizedState;
      i.state = z, bn(t, a, i, n), vn(), E = t.memoizedState, f || z !== E || xl ? (typeof k == "function" && (is(
        t,
        l,
        k,
        a
      ), E = t.memoizedState), (g = xl || Kd(
        t,
        l,
        g,
        a,
        z,
        E,
        d
      )) ? (A || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount()), typeof i.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = a, t.memoizedState = E), i.props = a, i.state = E, i.context = d, a = g) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), a = !1);
    } else {
      i = t.stateNode, Uu(e, t), d = t.memoizedProps, A = Il(l, d), i.props = A, k = t.pendingProps, z = i.context, E = l.contextType, g = ya, typeof E == "object" && E !== null && (g = Je(E)), f = l.getDerivedStateFromProps, (E = typeof f == "function" || typeof i.getSnapshotBeforeUpdate == "function") || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (d !== k || z !== g) && Jd(
        t,
        i,
        a,
        g
      ), xl = !1, z = t.memoizedState, i.state = z, bn(t, a, i, n), vn();
      var M = t.memoizedState;
      d !== k || z !== M || xl || e !== null && e.dependencies !== null && Mi(e.dependencies) ? (typeof f == "function" && (is(
        t,
        l,
        f,
        a
      ), M = t.memoizedState), (A = xl || Kd(
        t,
        l,
        A,
        a,
        z,
        M,
        g
      ) || e !== null && e.dependencies !== null && Mi(e.dependencies)) ? (E || typeof i.UNSAFE_componentWillUpdate != "function" && typeof i.componentWillUpdate != "function" || (typeof i.componentWillUpdate == "function" && i.componentWillUpdate(a, M, g), typeof i.UNSAFE_componentWillUpdate == "function" && i.UNSAFE_componentWillUpdate(
        a,
        M,
        g
      )), typeof i.componentDidUpdate == "function" && (t.flags |= 4), typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof i.componentDidUpdate != "function" || d === e.memoizedProps && z === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || d === e.memoizedProps && z === e.memoizedState || (t.flags |= 1024), t.memoizedProps = a, t.memoizedState = M), i.props = a, i.state = M, i.context = g, a = A) : (typeof i.componentDidUpdate != "function" || d === e.memoizedProps && z === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || d === e.memoizedProps && z === e.memoizedState || (t.flags |= 1024), a = !1);
    }
    return i = a, Ji(e, t), a = (t.flags & 128) !== 0, i || a ? (i = t.stateNode, l = a && typeof l.getDerivedStateFromError != "function" ? null : i.render(), t.flags |= 1, e !== null && a ? (t.child = Fl(
      t,
      e.child,
      null,
      n
    ), t.child = Fl(
      t,
      null,
      l,
      n
    )) : $e(e, t, l, n), t.memoizedState = i.state, e = t.child) : e = Pt(
      e,
      t,
      n
    ), e;
  }
  function of(e, t, l, a) {
    return Xl(), t.flags |= 256, $e(e, t, l, a), t.child;
  }
  var os = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function ds(e) {
    return { baseLanes: e, cachePool: Io() };
  }
  function fs(e, t, l) {
    return e = e !== null ? e.childLanes & ~l : 0, t && (e |= yt), e;
  }
  function df(e, t, l) {
    var a = t.pendingProps, n = !1, i = (t.flags & 128) !== 0, d;
    if ((d = i) || (d = e !== null && e.memoizedState === null ? !1 : (Re.current & 2) !== 0), d && (n = !0, t.flags &= -129), d = (t.flags & 32) !== 0, t.flags &= -33, e === null) {
      if (fe) {
        if (n ? bl(t) : Sl(), (e = _e) ? (e = v0(
          e,
          _t
        ), e = e !== null && e.data !== "&" ? e : null, e !== null && (t.memoizedState = {
          dehydrated: e,
          treeContext: ml !== null ? { id: Ht, overflow: Bt } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, l = Vo(e), l.return = t, t.child = l, Ke = t, _e = null)) : e = null, e === null) throw gl(t);
        return Js(e) ? t.lanes = 32 : t.lanes = 536870912, null;
      }
      var f = a.children;
      return a = a.fallback, n ? (Sl(), n = t.mode, f = $i(
        { mode: "hidden", children: f },
        n
      ), a = Vl(
        a,
        n,
        l,
        null
      ), f.return = t, a.return = t, f.sibling = a, t.child = f, a = t.child, a.memoizedState = ds(l), a.childLanes = fs(
        e,
        d,
        l
      ), t.memoizedState = os, En(null, a)) : (bl(t), ms(t, f));
    }
    var g = e.memoizedState;
    if (g !== null && (f = g.dehydrated, f !== null)) {
      if (i)
        t.flags & 256 ? (bl(t), t.flags &= -257, t = hs(
          e,
          t,
          l
        )) : t.memoizedState !== null ? (Sl(), t.child = e.child, t.flags |= 128, t = null) : (Sl(), f = a.fallback, n = t.mode, a = $i(
          { mode: "visible", children: a.children },
          n
        ), f = Vl(
          f,
          n,
          l,
          null
        ), f.flags |= 2, a.return = t, f.return = t, a.sibling = f, t.child = a, Fl(
          t,
          e.child,
          null,
          l
        ), a = t.child, a.memoizedState = ds(l), a.childLanes = fs(
          e,
          d,
          l
        ), t.memoizedState = os, t = En(null, a));
      else if (bl(t), Js(f)) {
        if (d = f.nextSibling && f.nextSibling.dataset, d) var E = d.dgst;
        d = E, a = Error(o(419)), a.stack = "", a.digest = d, mn({ value: a, source: null, stack: null }), t = hs(
          e,
          t,
          l
        );
      } else if (Le || ja(e, t, l, !1), d = (l & e.childLanes) !== 0, Le || d) {
        if (d = Ee, d !== null && (a = $c(d, l), a !== 0 && a !== g.retryLane))
          throw g.retryLane = a, Gl(e, a), st(d, e, a), ss;
        Ks(f) || nr(), t = hs(
          e,
          t,
          l
        );
      } else
        Ks(f) ? (t.flags |= 192, t.child = e.child, t = null) : (e = g.treeContext, _e = Mt(
          f.nextSibling
        ), Ke = t, fe = !0, hl = null, _t = !1, e !== null && Zo(t, e), t = ms(
          t,
          a.children
        ), t.flags |= 4096);
      return t;
    }
    return n ? (Sl(), f = a.fallback, n = t.mode, g = e.child, E = g.sibling, a = Kt(g, {
      mode: "hidden",
      children: a.children
    }), a.subtreeFlags = g.subtreeFlags & 65011712, E !== null ? f = Kt(
      E,
      f
    ) : (f = Vl(
      f,
      n,
      l,
      null
    ), f.flags |= 2), f.return = t, a.return = t, a.sibling = f, t.child = a, En(null, a), a = t.child, f = e.child.memoizedState, f === null ? f = ds(l) : (n = f.cachePool, n !== null ? (g = He._currentValue, n = n.parent !== g ? { parent: g, pool: g } : n) : n = Io(), f = {
      baseLanes: f.baseLanes | l,
      cachePool: n
    }), a.memoizedState = f, a.childLanes = fs(
      e,
      d,
      l
    ), t.memoizedState = os, En(e.child, a)) : (bl(t), l = e.child, e = l.sibling, l = Kt(l, {
      mode: "visible",
      children: a.children
    }), l.return = t, l.sibling = null, e !== null && (d = t.deletions, d === null ? (t.deletions = [e], t.flags |= 16) : d.push(e)), t.child = l, t.memoizedState = null, l);
  }
  function ms(e, t) {
    return t = $i(
      { mode: "visible", children: t },
      e.mode
    ), t.return = e, e.child = t;
  }
  function $i(e, t) {
    return e = ht(22, e, null, t), e.lanes = 0, e;
  }
  function hs(e, t, l) {
    return Fl(t, e.child, null, l), e = ms(
      t,
      t.pendingProps.children
    ), e.flags |= 2, t.memoizedState = null, e;
  }
  function ff(e, t, l) {
    e.lanes |= t;
    var a = e.alternate;
    a !== null && (a.lanes |= t), Mu(e.return, t, l);
  }
  function gs(e, t, l, a, n, i) {
    var d = e.memoizedState;
    d === null ? e.memoizedState = {
      isBackwards: t,
      rendering: null,
      renderingStartTime: 0,
      last: a,
      tail: l,
      tailMode: n,
      treeForkCount: i
    } : (d.isBackwards = t, d.rendering = null, d.renderingStartTime = 0, d.last = a, d.tail = l, d.tailMode = n, d.treeForkCount = i);
  }
  function mf(e, t, l) {
    var a = t.pendingProps, n = a.revealOrder, i = a.tail;
    a = a.children;
    var d = Re.current, f = (d & 2) !== 0;
    if (f ? (d = d & 1 | 2, t.flags |= 128) : d &= 1, Y(Re, d), $e(e, t, a, l), a = fe ? fn : 0, !f && e !== null && (e.flags & 128) !== 0)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13)
          e.memoizedState !== null && ff(e, l, t);
        else if (e.tag === 19)
          ff(e, l, t);
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
          e = l.alternate, e !== null && Hi(e) === null && (n = l), l = l.sibling;
        l = n, l === null ? (n = t.child, t.child = null) : (n = l.sibling, l.sibling = null), gs(
          t,
          !1,
          n,
          l,
          i,
          a
        );
        break;
      case "backwards":
      case "unstable_legacy-backwards":
        for (l = null, n = t.child, t.child = null; n !== null; ) {
          if (e = n.alternate, e !== null && Hi(e) === null) {
            t.child = n;
            break;
          }
          e = n.sibling, n.sibling = l, l = n, n = e;
        }
        gs(
          t,
          !0,
          l,
          null,
          i,
          a
        );
        break;
      case "together":
        gs(
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
  function Pt(e, t, l) {
    if (e !== null && (t.dependencies = e.dependencies), Nl |= t.lanes, (l & t.childLanes) === 0)
      if (e !== null) {
        if (ja(
          e,
          t,
          l,
          !1
        ), (l & t.childLanes) === 0)
          return null;
      } else return null;
    if (e !== null && t.child !== e.child)
      throw Error(o(153));
    if (t.child !== null) {
      for (e = t.child, l = Kt(e, e.pendingProps), t.child = l, l.return = t; e.sibling !== null; )
        e = e.sibling, l = l.sibling = Kt(e, e.pendingProps), l.return = t;
      l.sibling = null;
    }
    return t.child;
  }
  function ps(e, t) {
    return (e.lanes & t) !== 0 ? !0 : (e = e.dependencies, !!(e !== null && Mi(e)));
  }
  function vm(e, t, l) {
    switch (t.tag) {
      case 3:
        Pe(t, t.stateNode.containerInfo), pl(t, He, e.memoizedState.cache), Xl();
        break;
      case 27:
      case 5:
        Fa(t);
        break;
      case 4:
        Pe(t, t.stateNode.containerInfo);
        break;
      case 10:
        pl(
          t,
          t.type,
          t.memoizedProps.value
        );
        break;
      case 31:
        if (t.memoizedState !== null)
          return t.flags |= 128, Yu(t), null;
        break;
      case 13:
        var a = t.memoizedState;
        if (a !== null)
          return a.dehydrated !== null ? (bl(t), t.flags |= 128, null) : (l & t.child.childLanes) !== 0 ? df(e, t, l) : (bl(t), e = Pt(
            e,
            t,
            l
          ), e !== null ? e.sibling : null);
        bl(t);
        break;
      case 19:
        var n = (e.flags & 128) !== 0;
        if (a = (l & t.childLanes) !== 0, a || (ja(
          e,
          t,
          l,
          !1
        ), a = (l & t.childLanes) !== 0), n) {
          if (a)
            return mf(
              e,
              t,
              l
            );
          t.flags |= 128;
        }
        if (n = t.memoizedState, n !== null && (n.rendering = null, n.tail = null, n.lastEffect = null), Y(Re, Re.current), a) break;
        return null;
      case 22:
        return t.lanes = 0, nf(
          e,
          t,
          l,
          t.pendingProps
        );
      case 24:
        pl(t, He, e.memoizedState.cache);
    }
    return Pt(e, t, l);
  }
  function hf(e, t, l) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps)
        Le = !0;
      else {
        if (!ps(e, l) && (t.flags & 128) === 0)
          return Le = !1, vm(
            e,
            t,
            l
          );
        Le = (e.flags & 131072) !== 0;
      }
    else
      Le = !1, fe && (t.flags & 1048576) !== 0 && Qo(t, fn, t.index);
    switch (t.lanes = 0, t.tag) {
      case 16:
        e: {
          var a = t.pendingProps;
          if (e = Jl(t.elementType), t.type = e, typeof e == "function")
            Su(e) ? (a = Il(e, a), t.tag = 1, t = cf(
              null,
              t,
              e,
              a,
              l
            )) : (t.tag = 0, t = cs(
              null,
              t,
              e,
              a,
              l
            ));
          else {
            if (e != null) {
              var n = e.$$typeof;
              if (n === ie) {
                t.tag = 11, t = tf(
                  null,
                  t,
                  e,
                  a,
                  l
                );
                break e;
              } else if (n === I) {
                t.tag = 14, t = lf(
                  null,
                  t,
                  e,
                  a,
                  l
                );
                break e;
              }
            }
            throw t = wt(e) || e, Error(o(306, t, ""));
          }
        }
        return t;
      case 0:
        return cs(
          e,
          t,
          t.type,
          t.pendingProps,
          l
        );
      case 1:
        return a = t.type, n = Il(
          a,
          t.pendingProps
        ), cf(
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
          ), e === null) throw Error(o(387));
          a = t.pendingProps;
          var i = t.memoizedState;
          n = i.element, Uu(e, t), bn(t, a, null, l);
          var d = t.memoizedState;
          if (a = d.cache, pl(t, He, a), a !== i.cache && Au(
            t,
            [He],
            l,
            !0
          ), vn(), a = d.element, i.isDehydrated)
            if (i = {
              element: a,
              isDehydrated: !1,
              cache: d.cache
            }, t.updateQueue.baseState = i, t.memoizedState = i, t.flags & 256) {
              t = of(
                e,
                t,
                a,
                l
              );
              break e;
            } else if (a !== n) {
              n = Nt(
                Error(o(424)),
                t
              ), mn(n), t = of(
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
              for (_e = Mt(e.firstChild), Ke = t, fe = !0, hl = null, _t = !0, l = nd(
                t,
                null,
                a,
                l
              ), t.child = l; l; )
                l.flags = l.flags & -3 | 4096, l = l.sibling;
            }
          else {
            if (Xl(), a === n) {
              t = Pt(
                e,
                t,
                l
              );
              break e;
            }
            $e(e, t, a, l);
          }
          t = t.child;
        }
        return t;
      case 26:
        return Ji(e, t), e === null ? (l = E0(
          t.type,
          null,
          t.pendingProps,
          null
        )) ? t.memoizedState = l : fe || (l = t.type, e = t.pendingProps, a = dr(
          re.current
        ).createElement(l), a[Ze] = t, a[lt] = e, Fe(a, l, e), Ve(a), t.stateNode = a) : t.memoizedState = E0(
          t.type,
          e.memoizedProps,
          t.pendingProps,
          e.memoizedState
        ), null;
      case 27:
        return Fa(t), e === null && fe && (a = t.stateNode = j0(
          t.type,
          t.pendingProps,
          re.current
        ), Ke = t, _t = !0, n = _e, Ml(t.type) ? ($s = n, _e = Mt(a.firstChild)) : _e = n), $e(
          e,
          t,
          t.pendingProps.children,
          l
        ), Ji(e, t), e === null && (t.flags |= 4194304), t.child;
      case 5:
        return e === null && fe && ((n = a = _e) && (a = $m(
          a,
          t.type,
          t.pendingProps,
          _t
        ), a !== null ? (t.stateNode = a, Ke = t, _e = Mt(a.firstChild), _t = !1, n = !0) : n = !1), n || gl(t)), Fa(t), n = t.type, i = t.pendingProps, d = e !== null ? e.memoizedProps : null, a = i.children, Xs(n, i) ? a = null : d !== null && Xs(n, d) && (t.flags |= 32), t.memoizedState !== null && (n = Vu(
          e,
          t,
          om,
          null,
          null,
          l
        ), qn._currentValue = n), Ji(e, t), $e(e, t, a, l), t.child;
      case 6:
        return e === null && fe && ((e = l = _e) && (l = Fm(
          l,
          t.pendingProps,
          _t
        ), l !== null ? (t.stateNode = l, Ke = t, _e = null, e = !0) : e = !1), e || gl(t)), null;
      case 13:
        return df(e, t, l);
      case 4:
        return Pe(
          t,
          t.stateNode.containerInfo
        ), a = t.pendingProps, e === null ? t.child = Fl(
          t,
          null,
          a,
          l
        ) : $e(e, t, a, l), t.child;
      case 11:
        return tf(
          e,
          t,
          t.type,
          t.pendingProps,
          l
        );
      case 7:
        return $e(
          e,
          t,
          t.pendingProps,
          l
        ), t.child;
      case 8:
        return $e(
          e,
          t,
          t.pendingProps.children,
          l
        ), t.child;
      case 12:
        return $e(
          e,
          t,
          t.pendingProps.children,
          l
        ), t.child;
      case 10:
        return a = t.pendingProps, pl(t, t.type, a.value), $e(e, t, a.children, l), t.child;
      case 9:
        return n = t.type._context, a = t.pendingProps.children, Zl(t), n = Je(n), a = a(n), t.flags |= 1, $e(e, t, a, l), t.child;
      case 14:
        return lf(
          e,
          t,
          t.type,
          t.pendingProps,
          l
        );
      case 15:
        return af(
          e,
          t,
          t.type,
          t.pendingProps,
          l
        );
      case 19:
        return mf(e, t, l);
      case 31:
        return ym(e, t, l);
      case 22:
        return nf(
          e,
          t,
          l,
          t.pendingProps
        );
      case 24:
        return Zl(t), a = Je(He), e === null ? (n = Ou(), n === null && (n = Ee, i = wu(), n.pooledCache = i, i.refCount++, i !== null && (n.pooledCacheLanes |= l), n = i), t.memoizedState = { parent: a, cache: n }, Ru(t), pl(t, He, n)) : ((e.lanes & l) !== 0 && (Uu(e, t), bn(t, null, null, l), vn()), n = e.memoizedState, i = t.memoizedState, n.parent !== a ? (n = { parent: a, cache: a }, t.memoizedState = n, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = n), pl(t, He, a)) : (a = i.cache, pl(t, He, a), a !== n.cache && Au(
          t,
          [He],
          l,
          !0
        ))), $e(
          e,
          t,
          t.pendingProps.children,
          l
        ), t.child;
      case 29:
        throw t.pendingProps;
    }
    throw Error(o(156, t.tag));
  }
  function el(e) {
    e.flags |= 4;
  }
  function xs(e, t, l, a, n) {
    if ((t = (e.mode & 32) !== 0) && (t = !1), t) {
      if (e.flags |= 16777216, (n & 335544128) === n)
        if (e.stateNode.complete) e.flags |= 8192;
        else if (Yf()) e.flags |= 8192;
        else
          throw $l = Oi, Du;
    } else e.flags &= -16777217;
  }
  function gf(e, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
      e.flags &= -16777217;
    else if (e.flags |= 16777216, !A0(t))
      if (Yf()) e.flags |= 8192;
      else
        throw $l = Oi, Du;
  }
  function Fi(e, t) {
    t !== null && (e.flags |= 4), e.flags & 16384 && (t = e.tag !== 22 ? Zc() : 536870912, e.lanes |= t, Da |= t);
  }
  function Tn(e, t) {
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
  function ze(e) {
    var t = e.alternate !== null && e.alternate.child === e.child, l = 0, a = 0;
    if (t)
      for (var n = e.child; n !== null; )
        l |= n.lanes | n.childLanes, a |= n.subtreeFlags & 65011712, a |= n.flags & 65011712, n.return = e, n = n.sibling;
    else
      for (n = e.child; n !== null; )
        l |= n.lanes | n.childLanes, a |= n.subtreeFlags, a |= n.flags, n.return = e, n = n.sibling;
    return e.subtreeFlags |= a, e.childLanes = l, t;
  }
  function bm(e, t, l) {
    var a = t.pendingProps;
    switch (Eu(t), t.tag) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return ze(t), null;
      case 1:
        return ze(t), null;
      case 3:
        return l = t.stateNode, a = null, e !== null && (a = e.memoizedState.cache), t.memoizedState.cache !== a && (t.flags |= 2048), Ft(He), De(), l.pendingContext && (l.context = l.pendingContext, l.pendingContext = null), (e === null || e.child === null) && (Sa(t) ? el(t) : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, _u())), ze(t), null;
      case 26:
        var n = t.type, i = t.memoizedState;
        return e === null ? (el(t), i !== null ? (ze(t), gf(t, i)) : (ze(t), xs(
          t,
          n,
          null,
          a,
          l
        ))) : i ? i !== e.memoizedState ? (el(t), ze(t), gf(t, i)) : (ze(t), t.flags &= -16777217) : (e = e.memoizedProps, e !== a && el(t), ze(t), xs(
          t,
          n,
          e,
          a,
          l
        )), null;
      case 27:
        if (ui(t), l = re.current, n = t.type, e !== null && t.stateNode != null)
          e.memoizedProps !== a && el(t);
        else {
          if (!a) {
            if (t.stateNode === null)
              throw Error(o(166));
            return ze(t), null;
          }
          e = V.current, Sa(t) ? Ko(t) : (e = j0(n, a, l), t.stateNode = e, el(t));
        }
        return ze(t), null;
      case 5:
        if (ui(t), n = t.type, e !== null && t.stateNode != null)
          e.memoizedProps !== a && el(t);
        else {
          if (!a) {
            if (t.stateNode === null)
              throw Error(o(166));
            return ze(t), null;
          }
          if (i = V.current, Sa(t))
            Ko(t);
          else {
            var d = dr(
              re.current
            );
            switch (i) {
              case 1:
                i = d.createElementNS(
                  "http://www.w3.org/2000/svg",
                  n
                );
                break;
              case 2:
                i = d.createElementNS(
                  "http://www.w3.org/1998/Math/MathML",
                  n
                );
                break;
              default:
                switch (n) {
                  case "svg":
                    i = d.createElementNS(
                      "http://www.w3.org/2000/svg",
                      n
                    );
                    break;
                  case "math":
                    i = d.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      n
                    );
                    break;
                  case "script":
                    i = d.createElement("div"), i.innerHTML = "<script><\/script>", i = i.removeChild(
                      i.firstChild
                    );
                    break;
                  case "select":
                    i = typeof a.is == "string" ? d.createElement("select", {
                      is: a.is
                    }) : d.createElement("select"), a.multiple ? i.multiple = !0 : a.size && (i.size = a.size);
                    break;
                  default:
                    i = typeof a.is == "string" ? d.createElement(n, { is: a.is }) : d.createElement(n);
                }
            }
            i[Ze] = t, i[lt] = a;
            e: for (d = t.child; d !== null; ) {
              if (d.tag === 5 || d.tag === 6)
                i.appendChild(d.stateNode);
              else if (d.tag !== 4 && d.tag !== 27 && d.child !== null) {
                d.child.return = d, d = d.child;
                continue;
              }
              if (d === t) break e;
              for (; d.sibling === null; ) {
                if (d.return === null || d.return === t)
                  break e;
                d = d.return;
              }
              d.sibling.return = d.return, d = d.sibling;
            }
            t.stateNode = i;
            e: switch (Fe(i, n, a), n) {
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
            a && el(t);
          }
        }
        return ze(t), xs(
          t,
          t.type,
          e === null ? null : e.memoizedProps,
          t.pendingProps,
          l
        ), null;
      case 6:
        if (e && t.stateNode != null)
          e.memoizedProps !== a && el(t);
        else {
          if (typeof a != "string" && t.stateNode === null)
            throw Error(o(166));
          if (e = re.current, Sa(t)) {
            if (e = t.stateNode, l = t.memoizedProps, a = null, n = Ke, n !== null)
              switch (n.tag) {
                case 27:
                case 5:
                  a = n.memoizedProps;
              }
            e[Ze] = t, e = !!(e.nodeValue === l || a !== null && a.suppressHydrationWarning === !0 || d0(e.nodeValue, l)), e || gl(t, !0);
          } else
            e = dr(e).createTextNode(
              a
            ), e[Ze] = t, t.stateNode = e;
        }
        return ze(t), null;
      case 31:
        if (l = t.memoizedState, e === null || e.memoizedState !== null) {
          if (a = Sa(t), l !== null) {
            if (e === null) {
              if (!a) throw Error(o(318));
              if (e = t.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(o(557));
              e[Ze] = t;
            } else
              Xl(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            ze(t), e = !1;
          } else
            l = _u(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = l), e = !0;
          if (!e)
            return t.flags & 256 ? (pt(t), t) : (pt(t), null);
          if ((t.flags & 128) !== 0)
            throw Error(o(558));
        }
        return ze(t), null;
      case 13:
        if (a = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (n = Sa(t), a !== null && a.dehydrated !== null) {
            if (e === null) {
              if (!n) throw Error(o(318));
              if (n = t.memoizedState, n = n !== null ? n.dehydrated : null, !n) throw Error(o(317));
              n[Ze] = t;
            } else
              Xl(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            ze(t), n = !1;
          } else
            n = _u(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = n), n = !0;
          if (!n)
            return t.flags & 256 ? (pt(t), t) : (pt(t), null);
        }
        return pt(t), (t.flags & 128) !== 0 ? (t.lanes = l, t) : (l = a !== null, e = e !== null && e.memoizedState !== null, l && (a = t.child, n = null, a.alternate !== null && a.alternate.memoizedState !== null && a.alternate.memoizedState.cachePool !== null && (n = a.alternate.memoizedState.cachePool.pool), i = null, a.memoizedState !== null && a.memoizedState.cachePool !== null && (i = a.memoizedState.cachePool.pool), i !== n && (a.flags |= 2048)), l !== e && l && (t.child.flags |= 8192), Fi(t, t.updateQueue), ze(t), null);
      case 4:
        return De(), e === null && Ls(t.stateNode.containerInfo), ze(t), null;
      case 10:
        return Ft(t.type), ze(t), null;
      case 19:
        if (O(Re), a = t.memoizedState, a === null) return ze(t), null;
        if (n = (t.flags & 128) !== 0, i = a.rendering, i === null)
          if (n) Tn(a, !1);
          else {
            if (ke !== 0 || e !== null && (e.flags & 128) !== 0)
              for (e = t.child; e !== null; ) {
                if (i = Hi(e), i !== null) {
                  for (t.flags |= 128, Tn(a, !1), e = i.updateQueue, t.updateQueue = e, Fi(t, e), t.subtreeFlags = 0, e = l, l = t.child; l !== null; )
                    Go(l, e), l = l.sibling;
                  return Y(
                    Re,
                    Re.current & 1 | 2
                  ), fe && Jt(t, a.treeForkCount), t.child;
                }
                e = e.sibling;
              }
            a.tail !== null && ot() > tr && (t.flags |= 128, n = !0, Tn(a, !1), t.lanes = 4194304);
          }
        else {
          if (!n)
            if (e = Hi(i), e !== null) {
              if (t.flags |= 128, n = !0, e = e.updateQueue, t.updateQueue = e, Fi(t, e), Tn(a, !0), a.tail === null && a.tailMode === "hidden" && !i.alternate && !fe)
                return ze(t), null;
            } else
              2 * ot() - a.renderingStartTime > tr && l !== 536870912 && (t.flags |= 128, n = !0, Tn(a, !1), t.lanes = 4194304);
          a.isBackwards ? (i.sibling = t.child, t.child = i) : (e = a.last, e !== null ? e.sibling = i : t.child = i, a.last = i);
        }
        return a.tail !== null ? (e = a.tail, a.rendering = e, a.tail = e.sibling, a.renderingStartTime = ot(), e.sibling = null, l = Re.current, Y(
          Re,
          n ? l & 1 | 2 : l & 1
        ), fe && Jt(t, a.treeForkCount), e) : (ze(t), null);
      case 22:
      case 23:
        return pt(t), qu(), a = t.memoizedState !== null, e !== null ? e.memoizedState !== null !== a && (t.flags |= 8192) : a && (t.flags |= 8192), a ? (l & 536870912) !== 0 && (t.flags & 128) === 0 && (ze(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : ze(t), l = t.updateQueue, l !== null && Fi(t, l.retryQueue), l = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (l = e.memoizedState.cachePool.pool), a = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (a = t.memoizedState.cachePool.pool), a !== l && (t.flags |= 2048), e !== null && O(Kl), null;
      case 24:
        return l = null, e !== null && (l = e.memoizedState.cache), t.memoizedState.cache !== l && (t.flags |= 2048), Ft(He), ze(t), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(o(156, t.tag));
  }
  function Sm(e, t) {
    switch (Eu(t), t.tag) {
      case 1:
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 3:
        return Ft(He), De(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
      case 26:
      case 27:
      case 5:
        return ui(t), null;
      case 31:
        if (t.memoizedState !== null) {
          if (pt(t), t.alternate === null)
            throw Error(o(340));
          Xl();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 13:
        if (pt(t), e = t.memoizedState, e !== null && e.dehydrated !== null) {
          if (t.alternate === null)
            throw Error(o(340));
          Xl();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 19:
        return O(Re), null;
      case 4:
        return De(), null;
      case 10:
        return Ft(t.type), null;
      case 22:
      case 23:
        return pt(t), qu(), e !== null && O(Kl), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 24:
        return Ft(He), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function pf(e, t) {
    switch (Eu(t), t.tag) {
      case 3:
        Ft(He), De();
        break;
      case 26:
      case 27:
      case 5:
        ui(t);
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
        O(Re);
        break;
      case 10:
        Ft(t.type);
        break;
      case 22:
      case 23:
        pt(t), qu(), e !== null && O(Kl);
        break;
      case 24:
        Ft(He);
    }
  }
  function _n(e, t) {
    try {
      var l = t.updateQueue, a = l !== null ? l.lastEffect : null;
      if (a !== null) {
        var n = a.next;
        l = n;
        do {
          if ((l.tag & e) === e) {
            a = void 0;
            var i = l.create, d = l.inst;
            a = i(), d.destroy = a;
          }
          l = l.next;
        } while (l !== n);
      }
    } catch (f) {
      ve(t, t.return, f);
    }
  }
  function jl(e, t, l) {
    try {
      var a = t.updateQueue, n = a !== null ? a.lastEffect : null;
      if (n !== null) {
        var i = n.next;
        a = i;
        do {
          if ((a.tag & e) === e) {
            var d = a.inst, f = d.destroy;
            if (f !== void 0) {
              d.destroy = void 0, n = t;
              var g = l, E = f;
              try {
                E();
              } catch (A) {
                ve(
                  n,
                  g,
                  A
                );
              }
            }
          }
          a = a.next;
        } while (a !== i);
      }
    } catch (A) {
      ve(t, t.return, A);
    }
  }
  function xf(e) {
    var t = e.updateQueue;
    if (t !== null) {
      var l = e.stateNode;
      try {
        rd(t, l);
      } catch (a) {
        ve(e, e.return, a);
      }
    }
  }
  function yf(e, t, l) {
    l.props = Il(
      e.type,
      e.memoizedProps
    ), l.state = e.memoizedState;
    try {
      l.componentWillUnmount();
    } catch (a) {
      ve(e, t, a);
    }
  }
  function zn(e, t) {
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
      ve(e, t, n);
    }
  }
  function Lt(e, t) {
    var l = e.ref, a = e.refCleanup;
    if (l !== null)
      if (typeof a == "function")
        try {
          a();
        } catch (n) {
          ve(e, t, n);
        } finally {
          e.refCleanup = null, e = e.alternate, e != null && (e.refCleanup = null);
        }
      else if (typeof l == "function")
        try {
          l(null);
        } catch (n) {
          ve(e, t, n);
        }
      else l.current = null;
  }
  function vf(e) {
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
      ve(e, e.return, n);
    }
  }
  function ys(e, t, l) {
    try {
      var a = e.stateNode;
      Vm(a, e.type, l, t), a[lt] = t;
    } catch (n) {
      ve(e, e.return, n);
    }
  }
  function bf(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && Ml(e.type) || e.tag === 4;
  }
  function vs(e) {
    e: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || bf(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.tag === 27 && Ml(e.type) || e.flags & 2 || e.child === null || e.tag === 4) continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function bs(e, t, l) {
    var a = e.tag;
    if (a === 5 || a === 6)
      e = e.stateNode, t ? (l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l).insertBefore(e, t) : (t = l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l, t.appendChild(e), l = l._reactRootContainer, l != null || t.onclick !== null || (t.onclick = Qt));
    else if (a !== 4 && (a === 27 && Ml(e.type) && (l = e.stateNode, t = null), e = e.child, e !== null))
      for (bs(e, t, l), e = e.sibling; e !== null; )
        bs(e, t, l), e = e.sibling;
  }
  function Wi(e, t, l) {
    var a = e.tag;
    if (a === 5 || a === 6)
      e = e.stateNode, t ? l.insertBefore(e, t) : l.appendChild(e);
    else if (a !== 4 && (a === 27 && Ml(e.type) && (l = e.stateNode), e = e.child, e !== null))
      for (Wi(e, t, l), e = e.sibling; e !== null; )
        Wi(e, t, l), e = e.sibling;
  }
  function Sf(e) {
    var t = e.stateNode, l = e.memoizedProps;
    try {
      for (var a = e.type, n = t.attributes; n.length; )
        t.removeAttributeNode(n[0]);
      Fe(t, a, l), t[Ze] = e, t[lt] = l;
    } catch (i) {
      ve(e, e.return, i);
    }
  }
  var tl = !1, qe = !1, Ss = !1, jf = typeof WeakSet == "function" ? WeakSet : Set, Xe = null;
  function jm(e, t) {
    if (e = e.containerInfo, Gs = yr, e = Oo(e), hu(e)) {
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
            var n = a.anchorOffset, i = a.focusNode;
            a = a.focusOffset;
            try {
              l.nodeType, i.nodeType;
            } catch {
              l = null;
              break e;
            }
            var d = 0, f = -1, g = -1, E = 0, A = 0, k = e, z = null;
            t: for (; ; ) {
              for (var M; k !== l || n !== 0 && k.nodeType !== 3 || (f = d + n), k !== i || a !== 0 && k.nodeType !== 3 || (g = d + a), k.nodeType === 3 && (d += k.nodeValue.length), (M = k.firstChild) !== null; )
                z = k, k = M;
              for (; ; ) {
                if (k === e) break t;
                if (z === l && ++E === n && (f = d), z === i && ++A === a && (g = d), (M = k.nextSibling) !== null) break;
                k = z, z = k.parentNode;
              }
              k = M;
            }
            l = f === -1 || g === -1 ? null : { start: f, end: g };
          } else l = null;
        }
      l = l || { start: 0, end: 0 };
    } else l = null;
    for (Vs = { focusedElem: e, selectionRange: l }, yr = !1, Xe = t; Xe !== null; )
      if (t = Xe, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null)
        e.return = t, Xe = e;
      else
        for (; Xe !== null; ) {
          switch (t = Xe, i = t.alternate, e = t.flags, t.tag) {
            case 0:
              if ((e & 4) !== 0 && (e = t.updateQueue, e = e !== null ? e.events : null, e !== null))
                for (l = 0; l < e.length; l++)
                  n = e[l], n.ref.impl = n.nextImpl;
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((e & 1024) !== 0 && i !== null) {
                e = void 0, l = t, n = i.memoizedProps, i = i.memoizedState, a = l.stateNode;
                try {
                  var G = Il(
                    l.type,
                    n
                  );
                  e = a.getSnapshotBeforeUpdate(
                    G,
                    i
                  ), a.__reactInternalSnapshotBeforeUpdate = e;
                } catch (W) {
                  ve(
                    l,
                    l.return,
                    W
                  );
                }
              }
              break;
            case 3:
              if ((e & 1024) !== 0) {
                if (e = t.stateNode.containerInfo, l = e.nodeType, l === 9)
                  Zs(e);
                else if (l === 1)
                  switch (e.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      Zs(e);
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
              if ((e & 1024) !== 0) throw Error(o(163));
          }
          if (e = t.sibling, e !== null) {
            e.return = t.return, Xe = e;
            break;
          }
          Xe = t.return;
        }
  }
  function Cf(e, t, l) {
    var a = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        al(e, l), a & 4 && _n(5, l);
        break;
      case 1:
        if (al(e, l), a & 4)
          if (e = l.stateNode, t === null)
            try {
              e.componentDidMount();
            } catch (d) {
              ve(l, l.return, d);
            }
          else {
            var n = Il(
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
            } catch (d) {
              ve(
                l,
                l.return,
                d
              );
            }
          }
        a & 64 && xf(l), a & 512 && zn(l, l.return);
        break;
      case 3:
        if (al(e, l), a & 64 && (e = l.updateQueue, e !== null)) {
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
            rd(e, t);
          } catch (d) {
            ve(l, l.return, d);
          }
        }
        break;
      case 27:
        t === null && a & 4 && Sf(l);
      case 26:
      case 5:
        al(e, l), t === null && a & 4 && vf(l), a & 512 && zn(l, l.return);
        break;
      case 12:
        al(e, l);
        break;
      case 31:
        al(e, l), a & 4 && Tf(e, l);
        break;
      case 13:
        al(e, l), a & 4 && _f(e, l), a & 64 && (e = l.memoizedState, e !== null && (e = e.dehydrated, e !== null && (l = wm.bind(
          null,
          l
        ), Wm(e, l))));
        break;
      case 22:
        if (a = l.memoizedState !== null || tl, !a) {
          t = t !== null && t.memoizedState !== null || qe, n = tl;
          var i = qe;
          tl = a, (qe = t) && !i ? nl(
            e,
            l,
            (l.subtreeFlags & 8772) !== 0
          ) : al(e, l), tl = n, qe = i;
        }
        break;
      case 30:
        break;
      default:
        al(e, l);
    }
  }
  function Nf(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, Nf(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && Wr(t)), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  var Ae = null, nt = !1;
  function ll(e, t, l) {
    for (l = l.child; l !== null; )
      Ef(e, t, l), l = l.sibling;
  }
  function Ef(e, t, l) {
    if (dt && typeof dt.onCommitFiberUnmount == "function")
      try {
        dt.onCommitFiberUnmount(Wa, l);
      } catch {
      }
    switch (l.tag) {
      case 26:
        qe || Lt(l, t), ll(
          e,
          t,
          l
        ), l.memoizedState ? l.memoizedState.count-- : l.stateNode && (l = l.stateNode, l.parentNode.removeChild(l));
        break;
      case 27:
        qe || Lt(l, t);
        var a = Ae, n = nt;
        Ml(l.type) && (Ae = l.stateNode, nt = !1), ll(
          e,
          t,
          l
        ), Hn(l.stateNode), Ae = a, nt = n;
        break;
      case 5:
        qe || Lt(l, t);
      case 6:
        if (a = Ae, n = nt, Ae = null, ll(
          e,
          t,
          l
        ), Ae = a, nt = n, Ae !== null)
          if (nt)
            try {
              (Ae.nodeType === 9 ? Ae.body : Ae.nodeName === "HTML" ? Ae.ownerDocument.body : Ae).removeChild(l.stateNode);
            } catch (i) {
              ve(
                l,
                t,
                i
              );
            }
          else
            try {
              Ae.removeChild(l.stateNode);
            } catch (i) {
              ve(
                l,
                t,
                i
              );
            }
        break;
      case 18:
        Ae !== null && (nt ? (e = Ae, x0(
          e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e,
          l.stateNode
        ), Ga(e)) : x0(Ae, l.stateNode));
        break;
      case 4:
        a = Ae, n = nt, Ae = l.stateNode.containerInfo, nt = !0, ll(
          e,
          t,
          l
        ), Ae = a, nt = n;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        jl(2, l, t), qe || jl(4, l, t), ll(
          e,
          t,
          l
        );
        break;
      case 1:
        qe || (Lt(l, t), a = l.stateNode, typeof a.componentWillUnmount == "function" && yf(
          l,
          t,
          a
        )), ll(
          e,
          t,
          l
        );
        break;
      case 21:
        ll(
          e,
          t,
          l
        );
        break;
      case 22:
        qe = (a = qe) || l.memoizedState !== null, ll(
          e,
          t,
          l
        ), qe = a;
        break;
      default:
        ll(
          e,
          t,
          l
        );
    }
  }
  function Tf(e, t) {
    if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null))) {
      e = e.dehydrated;
      try {
        Ga(e);
      } catch (l) {
        ve(t, t.return, l);
      }
    }
  }
  function _f(e, t) {
    if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null))))
      try {
        Ga(e);
      } catch (l) {
        ve(t, t.return, l);
      }
  }
  function Cm(e) {
    switch (e.tag) {
      case 31:
      case 13:
      case 19:
        var t = e.stateNode;
        return t === null && (t = e.stateNode = new jf()), t;
      case 22:
        return e = e.stateNode, t = e._retryCache, t === null && (t = e._retryCache = new jf()), t;
      default:
        throw Error(o(435, e.tag));
    }
  }
  function Ii(e, t) {
    var l = Cm(e);
    t.forEach(function(a) {
      if (!l.has(a)) {
        l.add(a);
        var n = km.bind(null, e, a);
        a.then(n, n);
      }
    });
  }
  function it(e, t) {
    var l = t.deletions;
    if (l !== null)
      for (var a = 0; a < l.length; a++) {
        var n = l[a], i = e, d = t, f = d;
        e: for (; f !== null; ) {
          switch (f.tag) {
            case 27:
              if (Ml(f.type)) {
                Ae = f.stateNode, nt = !1;
                break e;
              }
              break;
            case 5:
              Ae = f.stateNode, nt = !1;
              break e;
            case 3:
            case 4:
              Ae = f.stateNode.containerInfo, nt = !0;
              break e;
          }
          f = f.return;
        }
        if (Ae === null) throw Error(o(160));
        Ef(i, d, n), Ae = null, nt = !1, i = n.alternate, i !== null && (i.return = null), n.return = null;
      }
    if (t.subtreeFlags & 13886)
      for (t = t.child; t !== null; )
        zf(t, e), t = t.sibling;
  }
  var Ot = null;
  function zf(e, t) {
    var l = e.alternate, a = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        it(t, e), rt(e), a & 4 && (jl(3, e, e.return), _n(3, e), jl(5, e, e.return));
        break;
      case 1:
        it(t, e), rt(e), a & 512 && (qe || l === null || Lt(l, l.return)), a & 64 && tl && (e = e.updateQueue, e !== null && (a = e.callbacks, a !== null && (l = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = l === null ? a : l.concat(a))));
        break;
      case 26:
        var n = Ot;
        if (it(t, e), rt(e), a & 512 && (qe || l === null || Lt(l, l.return)), a & 4) {
          var i = l !== null ? l.memoizedState : null;
          if (a = e.memoizedState, l === null)
            if (a === null)
              if (e.stateNode === null) {
                e: {
                  a = e.type, l = e.memoizedProps, n = n.ownerDocument || n;
                  t: switch (a) {
                    case "title":
                      i = n.getElementsByTagName("title")[0], (!i || i[en] || i[Ze] || i.namespaceURI === "http://www.w3.org/2000/svg" || i.hasAttribute("itemprop")) && (i = n.createElement(a), n.head.insertBefore(
                        i,
                        n.querySelector("head > title")
                      )), Fe(i, a, l), i[Ze] = e, Ve(i), a = i;
                      break e;
                    case "link":
                      var d = z0(
                        "link",
                        "href",
                        n
                      ).get(a + (l.href || ""));
                      if (d) {
                        for (var f = 0; f < d.length; f++)
                          if (i = d[f], i.getAttribute("href") === (l.href == null || l.href === "" ? null : l.href) && i.getAttribute("rel") === (l.rel == null ? null : l.rel) && i.getAttribute("title") === (l.title == null ? null : l.title) && i.getAttribute("crossorigin") === (l.crossOrigin == null ? null : l.crossOrigin)) {
                            d.splice(f, 1);
                            break t;
                          }
                      }
                      i = n.createElement(a), Fe(i, a, l), n.head.appendChild(i);
                      break;
                    case "meta":
                      if (d = z0(
                        "meta",
                        "content",
                        n
                      ).get(a + (l.content || ""))) {
                        for (f = 0; f < d.length; f++)
                          if (i = d[f], i.getAttribute("content") === (l.content == null ? null : "" + l.content) && i.getAttribute("name") === (l.name == null ? null : l.name) && i.getAttribute("property") === (l.property == null ? null : l.property) && i.getAttribute("http-equiv") === (l.httpEquiv == null ? null : l.httpEquiv) && i.getAttribute("charset") === (l.charSet == null ? null : l.charSet)) {
                            d.splice(f, 1);
                            break t;
                          }
                      }
                      i = n.createElement(a), Fe(i, a, l), n.head.appendChild(i);
                      break;
                    default:
                      throw Error(o(468, a));
                  }
                  i[Ze] = e, Ve(i), a = i;
                }
                e.stateNode = a;
              } else
                M0(
                  n,
                  e.type,
                  e.stateNode
                );
            else
              e.stateNode = _0(
                n,
                a,
                e.memoizedProps
              );
          else
            i !== a ? (i === null ? l.stateNode !== null && (l = l.stateNode, l.parentNode.removeChild(l)) : i.count--, a === null ? M0(
              n,
              e.type,
              e.stateNode
            ) : _0(
              n,
              a,
              e.memoizedProps
            )) : a === null && e.stateNode !== null && ys(
              e,
              e.memoizedProps,
              l.memoizedProps
            );
        }
        break;
      case 27:
        it(t, e), rt(e), a & 512 && (qe || l === null || Lt(l, l.return)), l !== null && a & 4 && ys(
          e,
          e.memoizedProps,
          l.memoizedProps
        );
        break;
      case 5:
        if (it(t, e), rt(e), a & 512 && (qe || l === null || Lt(l, l.return)), e.flags & 32) {
          n = e.stateNode;
          try {
            da(n, "");
          } catch (G) {
            ve(e, e.return, G);
          }
        }
        a & 4 && e.stateNode != null && (n = e.memoizedProps, ys(
          e,
          n,
          l !== null ? l.memoizedProps : n
        )), a & 1024 && (Ss = !0);
        break;
      case 6:
        if (it(t, e), rt(e), a & 4) {
          if (e.stateNode === null)
            throw Error(o(162));
          a = e.memoizedProps, l = e.stateNode;
          try {
            l.nodeValue = a;
          } catch (G) {
            ve(e, e.return, G);
          }
        }
        break;
      case 3:
        if (hr = null, n = Ot, Ot = fr(t.containerInfo), it(t, e), Ot = n, rt(e), a & 4 && l !== null && l.memoizedState.isDehydrated)
          try {
            Ga(t.containerInfo);
          } catch (G) {
            ve(e, e.return, G);
          }
        Ss && (Ss = !1, Mf(e));
        break;
      case 4:
        a = Ot, Ot = fr(
          e.stateNode.containerInfo
        ), it(t, e), rt(e), Ot = a;
        break;
      case 12:
        it(t, e), rt(e);
        break;
      case 31:
        it(t, e), rt(e), a & 4 && (a = e.updateQueue, a !== null && (e.updateQueue = null, Ii(e, a)));
        break;
      case 13:
        it(t, e), rt(e), e.child.flags & 8192 && e.memoizedState !== null != (l !== null && l.memoizedState !== null) && (er = ot()), a & 4 && (a = e.updateQueue, a !== null && (e.updateQueue = null, Ii(e, a)));
        break;
      case 22:
        n = e.memoizedState !== null;
        var g = l !== null && l.memoizedState !== null, E = tl, A = qe;
        if (tl = E || n, qe = A || g, it(t, e), qe = A, tl = E, rt(e), a & 8192)
          e: for (t = e.stateNode, t._visibility = n ? t._visibility & -2 : t._visibility | 1, n && (l === null || g || tl || qe || Pl(e)), l = null, t = e; ; ) {
            if (t.tag === 5 || t.tag === 26) {
              if (l === null) {
                g = l = t;
                try {
                  if (i = g.stateNode, n)
                    d = i.style, typeof d.setProperty == "function" ? d.setProperty("display", "none", "important") : d.display = "none";
                  else {
                    f = g.stateNode;
                    var k = g.memoizedProps.style, z = k != null && k.hasOwnProperty("display") ? k.display : null;
                    f.style.display = z == null || typeof z == "boolean" ? "" : ("" + z).trim();
                  }
                } catch (G) {
                  ve(g, g.return, G);
                }
              }
            } else if (t.tag === 6) {
              if (l === null) {
                g = t;
                try {
                  g.stateNode.nodeValue = n ? "" : g.memoizedProps;
                } catch (G) {
                  ve(g, g.return, G);
                }
              }
            } else if (t.tag === 18) {
              if (l === null) {
                g = t;
                try {
                  var M = g.stateNode;
                  n ? y0(M, !0) : y0(g.stateNode, !1);
                } catch (G) {
                  ve(g, g.return, G);
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
        a & 4 && (a = e.updateQueue, a !== null && (l = a.retryQueue, l !== null && (a.retryQueue = null, Ii(e, l))));
        break;
      case 19:
        it(t, e), rt(e), a & 4 && (a = e.updateQueue, a !== null && (e.updateQueue = null, Ii(e, a)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        it(t, e), rt(e);
    }
  }
  function rt(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        for (var l, a = e.return; a !== null; ) {
          if (bf(a)) {
            l = a;
            break;
          }
          a = a.return;
        }
        if (l == null) throw Error(o(160));
        switch (l.tag) {
          case 27:
            var n = l.stateNode, i = vs(e);
            Wi(e, i, n);
            break;
          case 5:
            var d = l.stateNode;
            l.flags & 32 && (da(d, ""), l.flags &= -33);
            var f = vs(e);
            Wi(e, f, d);
            break;
          case 3:
          case 4:
            var g = l.stateNode.containerInfo, E = vs(e);
            bs(
              e,
              E,
              g
            );
            break;
          default:
            throw Error(o(161));
        }
      } catch (A) {
        ve(e, e.return, A);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function Mf(e) {
    if (e.subtreeFlags & 1024)
      for (e = e.child; e !== null; ) {
        var t = e;
        Mf(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), e = e.sibling;
      }
  }
  function al(e, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null; )
        Cf(e, t.alternate, t), t = t.sibling;
  }
  function Pl(e) {
    for (e = e.child; e !== null; ) {
      var t = e;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          jl(4, t, t.return), Pl(t);
          break;
        case 1:
          Lt(t, t.return);
          var l = t.stateNode;
          typeof l.componentWillUnmount == "function" && yf(
            t,
            t.return,
            l
          ), Pl(t);
          break;
        case 27:
          Hn(t.stateNode);
        case 26:
        case 5:
          Lt(t, t.return), Pl(t);
          break;
        case 22:
          t.memoizedState === null && Pl(t);
          break;
        case 30:
          Pl(t);
          break;
        default:
          Pl(t);
      }
      e = e.sibling;
    }
  }
  function nl(e, t, l) {
    for (l = l && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
      var a = t.alternate, n = e, i = t, d = i.flags;
      switch (i.tag) {
        case 0:
        case 11:
        case 15:
          nl(
            n,
            i,
            l
          ), _n(4, i);
          break;
        case 1:
          if (nl(
            n,
            i,
            l
          ), a = i, n = a.stateNode, typeof n.componentDidMount == "function")
            try {
              n.componentDidMount();
            } catch (E) {
              ve(a, a.return, E);
            }
          if (a = i, n = a.updateQueue, n !== null) {
            var f = a.stateNode;
            try {
              var g = n.shared.hiddenCallbacks;
              if (g !== null)
                for (n.shared.hiddenCallbacks = null, n = 0; n < g.length; n++)
                  id(g[n], f);
            } catch (E) {
              ve(a, a.return, E);
            }
          }
          l && d & 64 && xf(i), zn(i, i.return);
          break;
        case 27:
          Sf(i);
        case 26:
        case 5:
          nl(
            n,
            i,
            l
          ), l && a === null && d & 4 && vf(i), zn(i, i.return);
          break;
        case 12:
          nl(
            n,
            i,
            l
          );
          break;
        case 31:
          nl(
            n,
            i,
            l
          ), l && d & 4 && Tf(n, i);
          break;
        case 13:
          nl(
            n,
            i,
            l
          ), l && d & 4 && _f(n, i);
          break;
        case 22:
          i.memoizedState === null && nl(
            n,
            i,
            l
          ), zn(i, i.return);
          break;
        case 30:
          break;
        default:
          nl(
            n,
            i,
            l
          );
      }
      t = t.sibling;
    }
  }
  function js(e, t) {
    var l = null;
    e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (l = e.memoizedState.cachePool.pool), e = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), e !== l && (e != null && e.refCount++, l != null && hn(l));
  }
  function Cs(e, t) {
    e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && hn(e));
  }
  function Dt(e, t, l, a) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; )
        Af(
          e,
          t,
          l,
          a
        ), t = t.sibling;
  }
  function Af(e, t, l, a) {
    var n = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        Dt(
          e,
          t,
          l,
          a
        ), n & 2048 && _n(9, t);
        break;
      case 1:
        Dt(
          e,
          t,
          l,
          a
        );
        break;
      case 3:
        Dt(
          e,
          t,
          l,
          a
        ), n & 2048 && (e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && hn(e)));
        break;
      case 12:
        if (n & 2048) {
          Dt(
            e,
            t,
            l,
            a
          ), e = t.stateNode;
          try {
            var i = t.memoizedProps, d = i.id, f = i.onPostCommit;
            typeof f == "function" && f(
              d,
              t.alternate === null ? "mount" : "update",
              e.passiveEffectDuration,
              -0
            );
          } catch (g) {
            ve(t, t.return, g);
          }
        } else
          Dt(
            e,
            t,
            l,
            a
          );
        break;
      case 31:
        Dt(
          e,
          t,
          l,
          a
        );
        break;
      case 13:
        Dt(
          e,
          t,
          l,
          a
        );
        break;
      case 23:
        break;
      case 22:
        i = t.stateNode, d = t.alternate, t.memoizedState !== null ? i._visibility & 2 ? Dt(
          e,
          t,
          l,
          a
        ) : Mn(e, t) : i._visibility & 2 ? Dt(
          e,
          t,
          l,
          a
        ) : (i._visibility |= 2, wa(
          e,
          t,
          l,
          a,
          (t.subtreeFlags & 10256) !== 0 || !1
        )), n & 2048 && js(d, t);
        break;
      case 24:
        Dt(
          e,
          t,
          l,
          a
        ), n & 2048 && Cs(t.alternate, t);
        break;
      default:
        Dt(
          e,
          t,
          l,
          a
        );
    }
  }
  function wa(e, t, l, a, n) {
    for (n = n && ((t.subtreeFlags & 10256) !== 0 || !1), t = t.child; t !== null; ) {
      var i = e, d = t, f = l, g = a, E = d.flags;
      switch (d.tag) {
        case 0:
        case 11:
        case 15:
          wa(
            i,
            d,
            f,
            g,
            n
          ), _n(8, d);
          break;
        case 23:
          break;
        case 22:
          var A = d.stateNode;
          d.memoizedState !== null ? A._visibility & 2 ? wa(
            i,
            d,
            f,
            g,
            n
          ) : Mn(
            i,
            d
          ) : (A._visibility |= 2, wa(
            i,
            d,
            f,
            g,
            n
          )), n && E & 2048 && js(
            d.alternate,
            d
          );
          break;
        case 24:
          wa(
            i,
            d,
            f,
            g,
            n
          ), n && E & 2048 && Cs(d.alternate, d);
          break;
        default:
          wa(
            i,
            d,
            f,
            g,
            n
          );
      }
      t = t.sibling;
    }
  }
  function Mn(e, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) {
        var l = e, a = t, n = a.flags;
        switch (a.tag) {
          case 22:
            Mn(l, a), n & 2048 && js(
              a.alternate,
              a
            );
            break;
          case 24:
            Mn(l, a), n & 2048 && Cs(a.alternate, a);
            break;
          default:
            Mn(l, a);
        }
        t = t.sibling;
      }
  }
  var An = 8192;
  function ka(e, t, l) {
    if (e.subtreeFlags & An)
      for (e = e.child; e !== null; )
        wf(
          e,
          t,
          l
        ), e = e.sibling;
  }
  function wf(e, t, l) {
    switch (e.tag) {
      case 26:
        ka(
          e,
          t,
          l
        ), e.flags & An && e.memoizedState !== null && c4(
          l,
          Ot,
          e.memoizedState,
          e.memoizedProps
        );
        break;
      case 5:
        ka(
          e,
          t,
          l
        );
        break;
      case 3:
      case 4:
        var a = Ot;
        Ot = fr(e.stateNode.containerInfo), ka(
          e,
          t,
          l
        ), Ot = a;
        break;
      case 22:
        e.memoizedState === null && (a = e.alternate, a !== null && a.memoizedState !== null ? (a = An, An = 16777216, ka(
          e,
          t,
          l
        ), An = a) : ka(
          e,
          t,
          l
        ));
        break;
      default:
        ka(
          e,
          t,
          l
        );
    }
  }
  function kf(e) {
    var t = e.alternate;
    if (t !== null && (e = t.child, e !== null)) {
      t.child = null;
      do
        t = e.sibling, e.sibling = null, e = t;
      while (e !== null);
    }
  }
  function wn(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var l = 0; l < t.length; l++) {
          var a = t[l];
          Xe = a, Df(
            a,
            e
          );
        }
      kf(e);
    }
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; )
        Of(e), e = e.sibling;
  }
  function Of(e) {
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        wn(e), e.flags & 2048 && jl(9, e, e.return);
        break;
      case 3:
        wn(e);
        break;
      case 12:
        wn(e);
        break;
      case 22:
        var t = e.stateNode;
        e.memoizedState !== null && t._visibility & 2 && (e.return === null || e.return.tag !== 13) ? (t._visibility &= -3, Pi(e)) : wn(e);
        break;
      default:
        wn(e);
    }
  }
  function Pi(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var l = 0; l < t.length; l++) {
          var a = t[l];
          Xe = a, Df(
            a,
            e
          );
        }
      kf(e);
    }
    for (e = e.child; e !== null; ) {
      switch (t = e, t.tag) {
        case 0:
        case 11:
        case 15:
          jl(8, t, t.return), Pi(t);
          break;
        case 22:
          l = t.stateNode, l._visibility & 2 && (l._visibility &= -3, Pi(t));
          break;
        default:
          Pi(t);
      }
      e = e.sibling;
    }
  }
  function Df(e, t) {
    for (; Xe !== null; ) {
      var l = Xe;
      switch (l.tag) {
        case 0:
        case 11:
        case 15:
          jl(8, l, t);
          break;
        case 23:
        case 22:
          if (l.memoizedState !== null && l.memoizedState.cachePool !== null) {
            var a = l.memoizedState.cachePool.pool;
            a != null && a.refCount++;
          }
          break;
        case 24:
          hn(l.memoizedState.cache);
      }
      if (a = l.child, a !== null) a.return = l, Xe = a;
      else
        e: for (l = e; Xe !== null; ) {
          a = Xe;
          var n = a.sibling, i = a.return;
          if (Nf(a), a === l) {
            Xe = null;
            break e;
          }
          if (n !== null) {
            n.return = i, Xe = n;
            break e;
          }
          Xe = i;
        }
    }
  }
  var Nm = {
    getCacheForType: function(e) {
      var t = Je(He), l = t.data.get(e);
      return l === void 0 && (l = e(), t.data.set(e, l)), l;
    },
    cacheSignal: function() {
      return Je(He).controller.signal;
    }
  }, Em = typeof WeakMap == "function" ? WeakMap : Map, pe = 0, Ee = null, ue = null, oe = 0, ye = 0, xt = null, Cl = !1, Oa = !1, Ns = !1, il = 0, ke = 0, Nl = 0, ea = 0, Es = 0, yt = 0, Da = 0, kn = null, ut = null, Ts = !1, er = 0, Rf = 0, tr = 1 / 0, lr = null, El = null, Ye = 0, Tl = null, Ra = null, rl = 0, _s = 0, zs = null, Uf = null, On = 0, Ms = null;
  function vt() {
    return (pe & 2) !== 0 && oe !== 0 ? oe & -oe : S.T !== null ? Rs() : Fc();
  }
  function Hf() {
    if (yt === 0)
      if ((oe & 536870912) === 0 || fe) {
        var e = oi;
        oi <<= 1, (oi & 3932160) === 0 && (oi = 262144), yt = e;
      } else yt = 536870912;
    return e = gt.current, e !== null && (e.flags |= 32), yt;
  }
  function st(e, t, l) {
    (e === Ee && (ye === 2 || ye === 9) || e.cancelPendingCommit !== null) && (Ua(e, 0), _l(
      e,
      oe,
      yt,
      !1
    )), Pa(e, l), ((pe & 2) === 0 || e !== Ee) && (e === Ee && ((pe & 2) === 0 && (ea |= l), ke === 4 && _l(
      e,
      oe,
      yt,
      !1
    )), qt(e));
  }
  function Bf(e, t, l) {
    if ((pe & 6) !== 0) throw Error(o(327));
    var a = !l && (t & 127) === 0 && (t & e.expiredLanes) === 0 || Ia(e, t), n = a ? zm(e, t) : ws(e, t, !0), i = a;
    do {
      if (n === 0) {
        Oa && !a && _l(e, t, 0, !1);
        break;
      } else {
        if (l = e.current.alternate, i && !Tm(l)) {
          n = ws(e, t, !1), i = !1;
          continue;
        }
        if (n === 2) {
          if (i = t, e.errorRecoveryDisabledLanes & i)
            var d = 0;
          else
            d = e.pendingLanes & -536870913, d = d !== 0 ? d : d & 536870912 ? 536870912 : 0;
          if (d !== 0) {
            t = d;
            e: {
              var f = e;
              n = kn;
              var g = f.current.memoizedState.isDehydrated;
              if (g && (Ua(f, d).flags |= 256), d = ws(
                f,
                d,
                !1
              ), d !== 2) {
                if (Ns && !g) {
                  f.errorRecoveryDisabledLanes |= i, ea |= i, n = 4;
                  break e;
                }
                i = ut, ut = n, i !== null && (ut === null ? ut = i : ut.push.apply(
                  ut,
                  i
                ));
              }
              n = d;
            }
            if (i = !1, n !== 2) continue;
          }
        }
        if (n === 1) {
          Ua(e, 0), _l(e, t, 0, !0);
          break;
        }
        e: {
          switch (a = e, i = n, i) {
            case 0:
            case 1:
              throw Error(o(345));
            case 4:
              if ((t & 4194048) !== t) break;
            case 6:
              _l(
                a,
                t,
                yt,
                !Cl
              );
              break e;
            case 2:
              ut = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(o(329));
          }
          if ((t & 62914560) === t && (n = er + 300 - ot(), 10 < n)) {
            if (_l(
              a,
              t,
              yt,
              !Cl
            ), fi(a, 0, !0) !== 0) break e;
            rl = t, a.timeoutHandle = g0(
              Lf.bind(
                null,
                a,
                l,
                ut,
                lr,
                Ts,
                t,
                yt,
                ea,
                Da,
                Cl,
                i,
                "Throttled",
                -0,
                0
              ),
              n
            );
            break e;
          }
          Lf(
            a,
            l,
            ut,
            lr,
            Ts,
            t,
            yt,
            ea,
            Da,
            Cl,
            i,
            null,
            -0,
            0
          );
        }
      }
      break;
    } while (!0);
    qt(e);
  }
  function Lf(e, t, l, a, n, i, d, f, g, E, A, k, z, M) {
    if (e.timeoutHandle = -1, k = t.subtreeFlags, k & 8192 || (k & 16785408) === 16785408) {
      k = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: Qt
      }, wf(
        t,
        i,
        k
      );
      var G = (i & 62914560) === i ? er - ot() : (i & 4194048) === i ? Rf - ot() : 0;
      if (G = o4(
        k,
        G
      ), G !== null) {
        rl = i, e.cancelPendingCommit = G(
          Kf.bind(
            null,
            e,
            t,
            i,
            l,
            a,
            n,
            d,
            f,
            g,
            A,
            k,
            null,
            z,
            M
          )
        ), _l(e, i, d, !E);
        return;
      }
    }
    Kf(
      e,
      t,
      i,
      l,
      a,
      n,
      d,
      f,
      g
    );
  }
  function Tm(e) {
    for (var t = e; ; ) {
      var l = t.tag;
      if ((l === 0 || l === 11 || l === 15) && t.flags & 16384 && (l = t.updateQueue, l !== null && (l = l.stores, l !== null)))
        for (var a = 0; a < l.length; a++) {
          var n = l[a], i = n.getSnapshot;
          n = n.value;
          try {
            if (!mt(i(), n)) return !1;
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
  function _l(e, t, l, a) {
    t &= ~Es, t &= ~ea, e.suspendedLanes |= t, e.pingedLanes &= ~t, a && (e.warmLanes |= t), a = e.expirationTimes;
    for (var n = t; 0 < n; ) {
      var i = 31 - ft(n), d = 1 << i;
      a[i] = -1, n &= ~d;
    }
    l !== 0 && Kc(e, l, t);
  }
  function ar() {
    return (pe & 6) === 0 ? (Dn(0), !1) : !0;
  }
  function As() {
    if (ue !== null) {
      if (ye === 0)
        var e = ue.return;
      else
        e = ue, $t = Ql = null, Zu(e), Ta = null, pn = 0, e = ue;
      for (; e !== null; )
        pf(e.alternate, e), e = e.return;
      ue = null;
    }
  }
  function Ua(e, t) {
    var l = e.timeoutHandle;
    l !== -1 && (e.timeoutHandle = -1, Zm(l)), l = e.cancelPendingCommit, l !== null && (e.cancelPendingCommit = null, l()), rl = 0, As(), Ee = e, ue = l = Kt(e.current, null), oe = t, ye = 0, xt = null, Cl = !1, Oa = Ia(e, t), Ns = !1, Da = yt = Es = ea = Nl = ke = 0, ut = kn = null, Ts = !1, (t & 8) !== 0 && (t |= t & 32);
    var a = e.entangledLanes;
    if (a !== 0)
      for (e = e.entanglements, a &= t; 0 < a; ) {
        var n = 31 - ft(a), i = 1 << n;
        t |= e[n], a &= ~i;
      }
    return il = t, Ni(), l;
  }
  function qf(e, t) {
    ae = null, S.H = Nn, t === Ea || t === ki ? (t = td(), ye = 3) : t === Du ? (t = td(), ye = 4) : ye = t === ss ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1, xt = t, ue === null && (ke = 1, Zi(
      e,
      Nt(t, e.current)
    ));
  }
  function Yf() {
    var e = gt.current;
    return e === null ? !0 : (oe & 4194048) === oe ? zt === null : (oe & 62914560) === oe || (oe & 536870912) !== 0 ? e === zt : !1;
  }
  function Gf() {
    var e = S.H;
    return S.H = Nn, e === null ? Nn : e;
  }
  function Vf() {
    var e = S.A;
    return S.A = Nm, e;
  }
  function nr() {
    ke = 4, Cl || (oe & 4194048) !== oe && gt.current !== null || (Oa = !0), (Nl & 134217727) === 0 && (ea & 134217727) === 0 || Ee === null || _l(
      Ee,
      oe,
      yt,
      !1
    );
  }
  function ws(e, t, l) {
    var a = pe;
    pe |= 2;
    var n = Gf(), i = Vf();
    (Ee !== e || oe !== t) && (lr = null, Ua(e, t)), t = !1;
    var d = ke;
    e: do
      try {
        if (ye !== 0 && ue !== null) {
          var f = ue, g = xt;
          switch (ye) {
            case 8:
              As(), d = 6;
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              gt.current === null && (t = !0);
              var E = ye;
              if (ye = 0, xt = null, Ha(e, f, g, E), l && Oa) {
                d = 0;
                break e;
              }
              break;
            default:
              E = ye, ye = 0, xt = null, Ha(e, f, g, E);
          }
        }
        _m(), d = ke;
        break;
      } catch (A) {
        qf(e, A);
      }
    while (!0);
    return t && e.shellSuspendCounter++, $t = Ql = null, pe = a, S.H = n, S.A = i, ue === null && (Ee = null, oe = 0, Ni()), d;
  }
  function _m() {
    for (; ue !== null; ) Xf(ue);
  }
  function zm(e, t) {
    var l = pe;
    pe |= 2;
    var a = Gf(), n = Vf();
    Ee !== e || oe !== t ? (lr = null, tr = ot() + 500, Ua(e, t)) : Oa = Ia(
      e,
      t
    );
    e: do
      try {
        if (ye !== 0 && ue !== null) {
          t = ue;
          var i = xt;
          t: switch (ye) {
            case 1:
              ye = 0, xt = null, Ha(e, t, i, 1);
              break;
            case 2:
            case 9:
              if (Po(i)) {
                ye = 0, xt = null, Qf(t);
                break;
              }
              t = function() {
                ye !== 2 && ye !== 9 || Ee !== e || (ye = 7), qt(e);
              }, i.then(t, t);
              break e;
            case 3:
              ye = 7;
              break e;
            case 4:
              ye = 5;
              break e;
            case 7:
              Po(i) ? (ye = 0, xt = null, Qf(t)) : (ye = 0, xt = null, Ha(e, t, i, 7));
              break;
            case 5:
              var d = null;
              switch (ue.tag) {
                case 26:
                  d = ue.memoizedState;
                case 5:
                case 27:
                  var f = ue;
                  if (d ? A0(d) : f.stateNode.complete) {
                    ye = 0, xt = null;
                    var g = f.sibling;
                    if (g !== null) ue = g;
                    else {
                      var E = f.return;
                      E !== null ? (ue = E, ir(E)) : ue = null;
                    }
                    break t;
                  }
              }
              ye = 0, xt = null, Ha(e, t, i, 5);
              break;
            case 6:
              ye = 0, xt = null, Ha(e, t, i, 6);
              break;
            case 8:
              As(), ke = 6;
              break e;
            default:
              throw Error(o(462));
          }
        }
        Mm();
        break;
      } catch (A) {
        qf(e, A);
      }
    while (!0);
    return $t = Ql = null, S.H = a, S.A = n, pe = l, ue !== null ? 0 : (Ee = null, oe = 0, Ni(), ke);
  }
  function Mm() {
    for (; ue !== null && !I1(); )
      Xf(ue);
  }
  function Xf(e) {
    var t = hf(e.alternate, e, il);
    e.memoizedProps = e.pendingProps, t === null ? ir(e) : ue = t;
  }
  function Qf(e) {
    var t = e, l = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = sf(
          l,
          t,
          t.pendingProps,
          t.type,
          void 0,
          oe
        );
        break;
      case 11:
        t = sf(
          l,
          t,
          t.pendingProps,
          t.type.render,
          t.ref,
          oe
        );
        break;
      case 5:
        Zu(t);
      default:
        pf(l, t), t = ue = Go(t, il), t = hf(l, t, il);
    }
    e.memoizedProps = e.pendingProps, t === null ? ir(e) : ue = t;
  }
  function Ha(e, t, l, a) {
    $t = Ql = null, Zu(t), Ta = null, pn = 0;
    var n = t.return;
    try {
      if (xm(
        e,
        n,
        t,
        l,
        oe
      )) {
        ke = 1, Zi(
          e,
          Nt(l, e.current)
        ), ue = null;
        return;
      }
    } catch (i) {
      if (n !== null) throw ue = n, i;
      ke = 1, Zi(
        e,
        Nt(l, e.current)
      ), ue = null;
      return;
    }
    t.flags & 32768 ? (fe || a === 1 ? e = !0 : Oa || (oe & 536870912) !== 0 ? e = !1 : (Cl = e = !0, (a === 2 || a === 9 || a === 3 || a === 6) && (a = gt.current, a !== null && a.tag === 13 && (a.flags |= 16384))), Zf(t, e)) : ir(t);
  }
  function ir(e) {
    var t = e;
    do {
      if ((t.flags & 32768) !== 0) {
        Zf(
          t,
          Cl
        );
        return;
      }
      e = t.return;
      var l = bm(
        t.alternate,
        t,
        il
      );
      if (l !== null) {
        ue = l;
        return;
      }
      if (t = t.sibling, t !== null) {
        ue = t;
        return;
      }
      ue = t = e;
    } while (t !== null);
    ke === 0 && (ke = 5);
  }
  function Zf(e, t) {
    do {
      var l = Sm(e.alternate, e);
      if (l !== null) {
        l.flags &= 32767, ue = l;
        return;
      }
      if (l = e.return, l !== null && (l.flags |= 32768, l.subtreeFlags = 0, l.deletions = null), !t && (e = e.sibling, e !== null)) {
        ue = e;
        return;
      }
      ue = e = l;
    } while (e !== null);
    ke = 6, ue = null;
  }
  function Kf(e, t, l, a, n, i, d, f, g) {
    e.cancelPendingCommit = null;
    do
      rr();
    while (Ye !== 0);
    if ((pe & 6) !== 0) throw Error(o(327));
    if (t !== null) {
      if (t === e.current) throw Error(o(177));
      if (i = t.lanes | t.childLanes, i |= vu, s2(
        e,
        l,
        i,
        d,
        f,
        g
      ), e === Ee && (ue = Ee = null, oe = 0), Ra = t, Tl = e, rl = l, _s = i, zs = n, Uf = a, (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (e.callbackNode = null, e.callbackPriority = 0, Om(si, function() {
        return If(), null;
      })) : (e.callbackNode = null, e.callbackPriority = 0), a = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || a) {
        a = S.T, S.T = null, n = U.p, U.p = 2, d = pe, pe |= 4;
        try {
          jm(e, t, l);
        } finally {
          pe = d, U.p = n, S.T = a;
        }
      }
      Ye = 1, Jf(), $f(), Ff();
    }
  }
  function Jf() {
    if (Ye === 1) {
      Ye = 0;
      var e = Tl, t = Ra, l = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || l) {
        l = S.T, S.T = null;
        var a = U.p;
        U.p = 2;
        var n = pe;
        pe |= 4;
        try {
          zf(t, e);
          var i = Vs, d = Oo(e.containerInfo), f = i.focusedElem, g = i.selectionRange;
          if (d !== f && f && f.ownerDocument && ko(
            f.ownerDocument.documentElement,
            f
          )) {
            if (g !== null && hu(f)) {
              var E = g.start, A = g.end;
              if (A === void 0 && (A = E), "selectionStart" in f)
                f.selectionStart = E, f.selectionEnd = Math.min(
                  A,
                  f.value.length
                );
              else {
                var k = f.ownerDocument || document, z = k && k.defaultView || window;
                if (z.getSelection) {
                  var M = z.getSelection(), G = f.textContent.length, W = Math.min(g.start, G), Ce = g.end === void 0 ? W : Math.min(g.end, G);
                  !M.extend && W > Ce && (d = Ce, Ce = W, W = d);
                  var j = wo(
                    f,
                    W
                  ), x = wo(
                    f,
                    Ce
                  );
                  if (j && x && (M.rangeCount !== 1 || M.anchorNode !== j.node || M.anchorOffset !== j.offset || M.focusNode !== x.node || M.focusOffset !== x.offset)) {
                    var N = k.createRange();
                    N.setStart(j.node, j.offset), M.removeAllRanges(), W > Ce ? (M.addRange(N), M.extend(x.node, x.offset)) : (N.setEnd(x.node, x.offset), M.addRange(N));
                  }
                }
              }
            }
            for (k = [], M = f; M = M.parentNode; )
              M.nodeType === 1 && k.push({
                element: M,
                left: M.scrollLeft,
                top: M.scrollTop
              });
            for (typeof f.focus == "function" && f.focus(), f = 0; f < k.length; f++) {
              var w = k[f];
              w.element.scrollLeft = w.left, w.element.scrollTop = w.top;
            }
          }
          yr = !!Gs, Vs = Gs = null;
        } finally {
          pe = n, U.p = a, S.T = l;
        }
      }
      e.current = t, Ye = 2;
    }
  }
  function $f() {
    if (Ye === 2) {
      Ye = 0;
      var e = Tl, t = Ra, l = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || l) {
        l = S.T, S.T = null;
        var a = U.p;
        U.p = 2;
        var n = pe;
        pe |= 4;
        try {
          Cf(e, t.alternate, t);
        } finally {
          pe = n, U.p = a, S.T = l;
        }
      }
      Ye = 3;
    }
  }
  function Ff() {
    if (Ye === 4 || Ye === 3) {
      Ye = 0, P1();
      var e = Tl, t = Ra, l = rl, a = Uf;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? Ye = 5 : (Ye = 0, Ra = Tl = null, Wf(e, e.pendingLanes));
      var n = e.pendingLanes;
      if (n === 0 && (El = null), $r(l), t = t.stateNode, dt && typeof dt.onCommitFiberRoot == "function")
        try {
          dt.onCommitFiberRoot(
            Wa,
            t,
            void 0,
            (t.current.flags & 128) === 128
          );
        } catch {
        }
      if (a !== null) {
        t = S.T, n = U.p, U.p = 2, S.T = null;
        try {
          for (var i = e.onRecoverableError, d = 0; d < a.length; d++) {
            var f = a[d];
            i(f.value, {
              componentStack: f.stack
            });
          }
        } finally {
          S.T = t, U.p = n;
        }
      }
      (rl & 3) !== 0 && rr(), qt(e), n = e.pendingLanes, (l & 261930) !== 0 && (n & 42) !== 0 ? e === Ms ? On++ : (On = 0, Ms = e) : On = 0, Dn(0);
    }
  }
  function Wf(e, t) {
    (e.pooledCacheLanes &= t) === 0 && (t = e.pooledCache, t != null && (e.pooledCache = null, hn(t)));
  }
  function rr() {
    return Jf(), $f(), Ff(), If();
  }
  function If() {
    if (Ye !== 5) return !1;
    var e = Tl, t = _s;
    _s = 0;
    var l = $r(rl), a = S.T, n = U.p;
    try {
      U.p = 32 > l ? 32 : l, S.T = null, l = zs, zs = null;
      var i = Tl, d = rl;
      if (Ye = 0, Ra = Tl = null, rl = 0, (pe & 6) !== 0) throw Error(o(331));
      var f = pe;
      if (pe |= 4, Of(i.current), Af(
        i,
        i.current,
        d,
        l
      ), pe = f, Dn(0, !1), dt && typeof dt.onPostCommitFiberRoot == "function")
        try {
          dt.onPostCommitFiberRoot(Wa, i);
        } catch {
        }
      return !0;
    } finally {
      U.p = n, S.T = a, Wf(e, t);
    }
  }
  function Pf(e, t, l) {
    t = Nt(l, t), t = us(e.stateNode, t, 2), e = vl(e, t, 2), e !== null && (Pa(e, 2), qt(e));
  }
  function ve(e, t, l) {
    if (e.tag === 3)
      Pf(e, e, l);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          Pf(
            t,
            e,
            l
          );
          break;
        } else if (t.tag === 1) {
          var a = t.stateNode;
          if (typeof t.type.getDerivedStateFromError == "function" || typeof a.componentDidCatch == "function" && (El === null || !El.has(a))) {
            e = Nt(l, e), l = Pd(2), a = vl(t, l, 2), a !== null && (ef(
              l,
              a,
              t,
              e
            ), Pa(a, 2), qt(a));
            break;
          }
        }
        t = t.return;
      }
  }
  function ks(e, t, l) {
    var a = e.pingCache;
    if (a === null) {
      a = e.pingCache = new Em();
      var n = /* @__PURE__ */ new Set();
      a.set(t, n);
    } else
      n = a.get(t), n === void 0 && (n = /* @__PURE__ */ new Set(), a.set(t, n));
    n.has(l) || (Ns = !0, n.add(l), e = Am.bind(null, e, t, l), t.then(e, e));
  }
  function Am(e, t, l) {
    var a = e.pingCache;
    a !== null && a.delete(t), e.pingedLanes |= e.suspendedLanes & l, e.warmLanes &= ~l, Ee === e && (oe & l) === l && (ke === 4 || ke === 3 && (oe & 62914560) === oe && 300 > ot() - er ? (pe & 2) === 0 && Ua(e, 0) : Es |= l, Da === oe && (Da = 0)), qt(e);
  }
  function e0(e, t) {
    t === 0 && (t = Zc()), e = Gl(e, t), e !== null && (Pa(e, t), qt(e));
  }
  function wm(e) {
    var t = e.memoizedState, l = 0;
    t !== null && (l = t.retryLane), e0(e, l);
  }
  function km(e, t) {
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
        throw Error(o(314));
    }
    a !== null && a.delete(t), e0(e, l);
  }
  function Om(e, t) {
    return Qr(e, t);
  }
  var ur = null, Ba = null, Os = !1, sr = !1, Ds = !1, zl = 0;
  function qt(e) {
    e !== Ba && e.next === null && (Ba === null ? ur = Ba = e : Ba = Ba.next = e), sr = !0, Os || (Os = !0, Rm());
  }
  function Dn(e, t) {
    if (!Ds && sr) {
      Ds = !0;
      do
        for (var l = !1, a = ur; a !== null; ) {
          if (e !== 0) {
            var n = a.pendingLanes;
            if (n === 0) var i = 0;
            else {
              var d = a.suspendedLanes, f = a.pingedLanes;
              i = (1 << 31 - ft(42 | e) + 1) - 1, i &= n & ~(d & ~f), i = i & 201326741 ? i & 201326741 | 1 : i ? i | 2 : 0;
            }
            i !== 0 && (l = !0, n0(a, i));
          } else
            i = oe, i = fi(
              a,
              a === Ee ? i : 0,
              a.cancelPendingCommit !== null || a.timeoutHandle !== -1
            ), (i & 3) === 0 || Ia(a, i) || (l = !0, n0(a, i));
          a = a.next;
        }
      while (l);
      Ds = !1;
    }
  }
  function Dm() {
    t0();
  }
  function t0() {
    sr = Os = !1;
    var e = 0;
    zl !== 0 && Qm() && (e = zl);
    for (var t = ot(), l = null, a = ur; a !== null; ) {
      var n = a.next, i = l0(a, t);
      i === 0 ? (a.next = null, l === null ? ur = n : l.next = n, n === null && (Ba = l)) : (l = a, (e !== 0 || (i & 3) !== 0) && (sr = !0)), a = n;
    }
    Ye !== 0 && Ye !== 5 || Dn(e), zl !== 0 && (zl = 0);
  }
  function l0(e, t) {
    for (var l = e.suspendedLanes, a = e.pingedLanes, n = e.expirationTimes, i = e.pendingLanes & -62914561; 0 < i; ) {
      var d = 31 - ft(i), f = 1 << d, g = n[d];
      g === -1 ? ((f & l) === 0 || (f & a) !== 0) && (n[d] = u2(f, t)) : g <= t && (e.expiredLanes |= f), i &= ~f;
    }
    if (t = Ee, l = oe, l = fi(
      e,
      e === t ? l : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), a = e.callbackNode, l === 0 || e === t && (ye === 2 || ye === 9) || e.cancelPendingCommit !== null)
      return a !== null && a !== null && Zr(a), e.callbackNode = null, e.callbackPriority = 0;
    if ((l & 3) === 0 || Ia(e, l)) {
      if (t = l & -l, t === e.callbackPriority) return t;
      switch (a !== null && Zr(a), $r(l)) {
        case 2:
        case 8:
          l = Xc;
          break;
        case 32:
          l = si;
          break;
        case 268435456:
          l = Qc;
          break;
        default:
          l = si;
      }
      return a = a0.bind(null, e), l = Qr(l, a), e.callbackPriority = t, e.callbackNode = l, t;
    }
    return a !== null && a !== null && Zr(a), e.callbackPriority = 2, e.callbackNode = null, 2;
  }
  function a0(e, t) {
    if (Ye !== 0 && Ye !== 5)
      return e.callbackNode = null, e.callbackPriority = 0, null;
    var l = e.callbackNode;
    if (rr() && e.callbackNode !== l)
      return null;
    var a = oe;
    return a = fi(
      e,
      e === Ee ? a : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), a === 0 ? null : (Bf(e, a, t), l0(e, ot()), e.callbackNode != null && e.callbackNode === l ? a0.bind(null, e) : null);
  }
  function n0(e, t) {
    if (rr()) return null;
    Bf(e, t, !0);
  }
  function Rm() {
    Km(function() {
      (pe & 6) !== 0 ? Qr(
        Vc,
        Dm
      ) : t0();
    });
  }
  function Rs() {
    if (zl === 0) {
      var e = Ca;
      e === 0 && (e = ci, ci <<= 1, (ci & 261888) === 0 && (ci = 256)), zl = e;
    }
    return zl;
  }
  function i0(e) {
    return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : pi("" + e);
  }
  function r0(e, t) {
    var l = t.ownerDocument.createElement("input");
    return l.name = t.name, l.value = t.value, e.id && l.setAttribute("form", e.id), t.parentNode.insertBefore(l, t), e = new FormData(e), l.parentNode.removeChild(l), e;
  }
  function Um(e, t, l, a, n) {
    if (t === "submit" && l && l.stateNode === n) {
      var i = i0(
        (n[lt] || null).action
      ), d = a.submitter;
      d && (t = (t = d[lt] || null) ? i0(t.formAction) : d.getAttribute("formAction"), t !== null && (i = t, d = null));
      var f = new bi(
        "action",
        "action",
        null,
        a,
        n
      );
      e.push({
        event: f,
        listeners: [
          {
            instance: null,
            listener: function() {
              if (a.defaultPrevented) {
                if (zl !== 0) {
                  var g = d ? r0(n, d) : new FormData(n);
                  ts(
                    l,
                    {
                      pending: !0,
                      data: g,
                      method: n.method,
                      action: i
                    },
                    null,
                    g
                  );
                }
              } else
                typeof i == "function" && (f.preventDefault(), g = d ? r0(n, d) : new FormData(n), ts(
                  l,
                  {
                    pending: !0,
                    data: g,
                    method: n.method,
                    action: i
                  },
                  i,
                  g
                ));
            },
            currentTarget: n
          }
        ]
      });
    }
  }
  for (var Us = 0; Us < yu.length; Us++) {
    var Hs = yu[Us], Hm = Hs.toLowerCase(), Bm = Hs[0].toUpperCase() + Hs.slice(1);
    kt(
      Hm,
      "on" + Bm
    );
  }
  kt(Uo, "onAnimationEnd"), kt(Ho, "onAnimationIteration"), kt(Bo, "onAnimationStart"), kt("dblclick", "onDoubleClick"), kt("focusin", "onFocus"), kt("focusout", "onBlur"), kt(em, "onTransitionRun"), kt(tm, "onTransitionStart"), kt(lm, "onTransitionCancel"), kt(Lo, "onTransitionEnd"), ca("onMouseEnter", ["mouseout", "mouseover"]), ca("onMouseLeave", ["mouseout", "mouseover"]), ca("onPointerEnter", ["pointerout", "pointerover"]), ca("onPointerLeave", ["pointerout", "pointerover"]), Bl(
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
  var Rn = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), Lm = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Rn)
  );
  function u0(e, t) {
    t = (t & 4) !== 0;
    for (var l = 0; l < e.length; l++) {
      var a = e[l], n = a.event;
      a = a.listeners;
      e: {
        var i = void 0;
        if (t)
          for (var d = a.length - 1; 0 <= d; d--) {
            var f = a[d], g = f.instance, E = f.currentTarget;
            if (f = f.listener, g !== i && n.isPropagationStopped())
              break e;
            i = f, n.currentTarget = E;
            try {
              i(n);
            } catch (A) {
              Ci(A);
            }
            n.currentTarget = null, i = g;
          }
        else
          for (d = 0; d < a.length; d++) {
            if (f = a[d], g = f.instance, E = f.currentTarget, f = f.listener, g !== i && n.isPropagationStopped())
              break e;
            i = f, n.currentTarget = E;
            try {
              i(n);
            } catch (A) {
              Ci(A);
            }
            n.currentTarget = null, i = g;
          }
      }
    }
  }
  function se(e, t) {
    var l = t[Fr];
    l === void 0 && (l = t[Fr] = /* @__PURE__ */ new Set());
    var a = e + "__bubble";
    l.has(a) || (s0(t, e, 2, !1), l.add(a));
  }
  function Bs(e, t, l) {
    var a = 0;
    t && (a |= 4), s0(
      l,
      e,
      a,
      t
    );
  }
  var cr = "_reactListening" + Math.random().toString(36).slice(2);
  function Ls(e) {
    if (!e[cr]) {
      e[cr] = !0, Pc.forEach(function(l) {
        l !== "selectionchange" && (Lm.has(l) || Bs(l, !1, e), Bs(l, !0, e));
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[cr] || (t[cr] = !0, Bs("selectionchange", !1, t));
    }
  }
  function s0(e, t, l, a) {
    switch (H0(t)) {
      case 2:
        var n = m4;
        break;
      case 8:
        n = h4;
        break;
      default:
        n = ec;
    }
    l = n.bind(
      null,
      t,
      l,
      e
    ), n = void 0, !iu || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (n = !0), a ? n !== void 0 ? e.addEventListener(t, l, {
      capture: !0,
      passive: n
    }) : e.addEventListener(t, l, !0) : n !== void 0 ? e.addEventListener(t, l, {
      passive: n
    }) : e.addEventListener(t, l, !1);
  }
  function qs(e, t, l, a, n) {
    var i = a;
    if ((t & 1) === 0 && (t & 2) === 0 && a !== null)
      e: for (; ; ) {
        if (a === null) return;
        var d = a.tag;
        if (d === 3 || d === 4) {
          var f = a.stateNode.containerInfo;
          if (f === n) break;
          if (d === 4)
            for (d = a.return; d !== null; ) {
              var g = d.tag;
              if ((g === 3 || g === 4) && d.stateNode.containerInfo === n)
                return;
              d = d.return;
            }
          for (; f !== null; ) {
            if (d = ra(f), d === null) return;
            if (g = d.tag, g === 5 || g === 6 || g === 26 || g === 27) {
              a = i = d;
              continue e;
            }
            f = f.parentNode;
          }
        }
        a = a.return;
      }
    fo(function() {
      var E = i, A = au(l), k = [];
      e: {
        var z = qo.get(e);
        if (z !== void 0) {
          var M = bi, G = e;
          switch (e) {
            case "keypress":
              if (yi(l) === 0) break e;
            case "keydown":
            case "keyup":
              M = k2;
              break;
            case "focusin":
              G = "focus", M = cu;
              break;
            case "focusout":
              G = "blur", M = cu;
              break;
            case "beforeblur":
            case "afterblur":
              M = cu;
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
              M = go;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              M = b2;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              M = R2;
              break;
            case Uo:
            case Ho:
            case Bo:
              M = C2;
              break;
            case Lo:
              M = H2;
              break;
            case "scroll":
            case "scrollend":
              M = y2;
              break;
            case "wheel":
              M = L2;
              break;
            case "copy":
            case "cut":
            case "paste":
              M = E2;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              M = xo;
              break;
            case "toggle":
            case "beforetoggle":
              M = Y2;
          }
          var W = (t & 4) !== 0, Ce = !W && (e === "scroll" || e === "scrollend"), j = W ? z !== null ? z + "Capture" : null : z;
          W = [];
          for (var x = E, N; x !== null; ) {
            var w = x;
            if (N = w.stateNode, w = w.tag, w !== 5 && w !== 26 && w !== 27 || N === null || j === null || (w = ln(x, j), w != null && W.push(
              Un(x, w, N)
            )), Ce) break;
            x = x.return;
          }
          0 < W.length && (z = new M(
            z,
            G,
            null,
            l,
            A
          ), k.push({ event: z, listeners: W }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (z = e === "mouseover" || e === "pointerover", M = e === "mouseout" || e === "pointerout", z && l !== lu && (G = l.relatedTarget || l.fromElement) && (ra(G) || G[ia]))
            break e;
          if ((M || z) && (z = A.window === A ? A : (z = A.ownerDocument) ? z.defaultView || z.parentWindow : window, M ? (G = l.relatedTarget || l.toElement, M = E, G = G ? ra(G) : null, G !== null && (Ce = h(G), W = G.tag, G !== Ce || W !== 5 && W !== 27 && W !== 6) && (G = null)) : (M = null, G = E), M !== G)) {
            if (W = go, w = "onMouseLeave", j = "onMouseEnter", x = "mouse", (e === "pointerout" || e === "pointerover") && (W = xo, w = "onPointerLeave", j = "onPointerEnter", x = "pointer"), Ce = M == null ? z : tn(M), N = G == null ? z : tn(G), z = new W(
              w,
              x + "leave",
              M,
              l,
              A
            ), z.target = Ce, z.relatedTarget = N, w = null, ra(A) === E && (W = new W(
              j,
              x + "enter",
              G,
              l,
              A
            ), W.target = N, W.relatedTarget = Ce, w = W), Ce = w, M && G)
              t: {
                for (W = qm, j = M, x = G, N = 0, w = j; w; w = W(w))
                  N++;
                w = 0;
                for (var K = x; K; K = W(K))
                  w++;
                for (; 0 < N - w; )
                  j = W(j), N--;
                for (; 0 < w - N; )
                  x = W(x), w--;
                for (; N--; ) {
                  if (j === x || x !== null && j === x.alternate) {
                    W = j;
                    break t;
                  }
                  j = W(j), x = W(x);
                }
                W = null;
              }
            else W = null;
            M !== null && c0(
              k,
              z,
              M,
              W,
              !1
            ), G !== null && Ce !== null && c0(
              k,
              Ce,
              G,
              W,
              !0
            );
          }
        }
        e: {
          if (z = E ? tn(E) : window, M = z.nodeName && z.nodeName.toLowerCase(), M === "select" || M === "input" && z.type === "file")
            var he = Eo;
          else if (Co(z))
            if (To)
              he = W2;
            else {
              he = $2;
              var Q = J2;
            }
          else
            M = z.nodeName, !M || M.toLowerCase() !== "input" || z.type !== "checkbox" && z.type !== "radio" ? E && tu(E.elementType) && (he = Eo) : he = F2;
          if (he && (he = he(e, E))) {
            No(
              k,
              he,
              l,
              A
            );
            break e;
          }
          Q && Q(e, z, E), e === "focusout" && E && z.type === "number" && E.memoizedProps.value != null && eu(z, "number", z.value);
        }
        switch (Q = E ? tn(E) : window, e) {
          case "focusin":
            (Co(Q) || Q.contentEditable === "true") && (ga = Q, gu = E, dn = null);
            break;
          case "focusout":
            dn = gu = ga = null;
            break;
          case "mousedown":
            pu = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            pu = !1, Do(k, l, A);
            break;
          case "selectionchange":
            if (P2) break;
          case "keydown":
          case "keyup":
            Do(k, l, A);
        }
        var ne;
        if (du)
          e: {
            switch (e) {
              case "compositionstart":
                var de = "onCompositionStart";
                break e;
              case "compositionend":
                de = "onCompositionEnd";
                break e;
              case "compositionupdate":
                de = "onCompositionUpdate";
                break e;
            }
            de = void 0;
          }
        else
          ha ? So(e, l) && (de = "onCompositionEnd") : e === "keydown" && l.keyCode === 229 && (de = "onCompositionStart");
        de && (yo && l.locale !== "ko" && (ha || de !== "onCompositionStart" ? de === "onCompositionEnd" && ha && (ne = mo()) : (fl = A, ru = "value" in fl ? fl.value : fl.textContent, ha = !0)), Q = or(E, de), 0 < Q.length && (de = new po(
          de,
          e,
          null,
          l,
          A
        ), k.push({ event: de, listeners: Q }), ne ? de.data = ne : (ne = jo(l), ne !== null && (de.data = ne)))), (ne = V2 ? X2(e, l) : Q2(e, l)) && (de = or(E, "onBeforeInput"), 0 < de.length && (Q = new po(
          "onBeforeInput",
          "beforeinput",
          null,
          l,
          A
        ), k.push({
          event: Q,
          listeners: de
        }), Q.data = ne)), Um(
          k,
          e,
          E,
          l,
          A
        );
      }
      u0(k, t);
    });
  }
  function Un(e, t, l) {
    return {
      instance: e,
      listener: t,
      currentTarget: l
    };
  }
  function or(e, t) {
    for (var l = t + "Capture", a = []; e !== null; ) {
      var n = e, i = n.stateNode;
      if (n = n.tag, n !== 5 && n !== 26 && n !== 27 || i === null || (n = ln(e, l), n != null && a.unshift(
        Un(e, n, i)
      ), n = ln(e, t), n != null && a.push(
        Un(e, n, i)
      )), e.tag === 3) return a;
      e = e.return;
    }
    return [];
  }
  function qm(e) {
    if (e === null) return null;
    do
      e = e.return;
    while (e && e.tag !== 5 && e.tag !== 27);
    return e || null;
  }
  function c0(e, t, l, a, n) {
    for (var i = t._reactName, d = []; l !== null && l !== a; ) {
      var f = l, g = f.alternate, E = f.stateNode;
      if (f = f.tag, g !== null && g === a) break;
      f !== 5 && f !== 26 && f !== 27 || E === null || (g = E, n ? (E = ln(l, i), E != null && d.unshift(
        Un(l, E, g)
      )) : n || (E = ln(l, i), E != null && d.push(
        Un(l, E, g)
      ))), l = l.return;
    }
    d.length !== 0 && e.push({ event: t, listeners: d });
  }
  var Ym = /\r\n?/g, Gm = /\u0000|\uFFFD/g;
  function o0(e) {
    return (typeof e == "string" ? e : "" + e).replace(Ym, `
`).replace(Gm, "");
  }
  function d0(e, t) {
    return t = o0(t), o0(e) === t;
  }
  function je(e, t, l, a, n, i) {
    switch (l) {
      case "children":
        typeof a == "string" ? t === "body" || t === "textarea" && a === "" || da(e, a) : (typeof a == "number" || typeof a == "bigint") && t !== "body" && da(e, "" + a);
        break;
      case "className":
        hi(e, "class", a);
        break;
      case "tabIndex":
        hi(e, "tabindex", a);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        hi(e, l, a);
        break;
      case "style":
        co(e, a, i);
        break;
      case "data":
        if (t !== "object") {
          hi(e, "data", a);
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
        a = pi("" + a), e.setAttribute(l, a);
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
          typeof i == "function" && (l === "formAction" ? (t !== "input" && je(e, t, "name", n.name, n, null), je(
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
        a = pi("" + a), e.setAttribute(l, a);
        break;
      case "onClick":
        a != null && (e.onclick = Qt);
        break;
      case "onScroll":
        a != null && se("scroll", e);
        break;
      case "onScrollEnd":
        a != null && se("scrollend", e);
        break;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a))
            throw Error(o(61));
          if (l = a.__html, l != null) {
            if (n.children != null) throw Error(o(60));
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
        l = pi("" + a), e.setAttributeNS(
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
        se("beforetoggle", e), se("toggle", e), mi(e, "popover", a);
        break;
      case "xlinkActuate":
        Xt(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          a
        );
        break;
      case "xlinkArcrole":
        Xt(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          a
        );
        break;
      case "xlinkRole":
        Xt(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          a
        );
        break;
      case "xlinkShow":
        Xt(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          a
        );
        break;
      case "xlinkTitle":
        Xt(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          a
        );
        break;
      case "xlinkType":
        Xt(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          a
        );
        break;
      case "xmlBase":
        Xt(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          a
        );
        break;
      case "xmlLang":
        Xt(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          a
        );
        break;
      case "xmlSpace":
        Xt(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:space",
          a
        );
        break;
      case "is":
        mi(e, "is", a);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < l.length) || l[0] !== "o" && l[0] !== "O" || l[1] !== "n" && l[1] !== "N") && (l = p2.get(l) || l, mi(e, l, a));
    }
  }
  function Ys(e, t, l, a, n, i) {
    switch (l) {
      case "style":
        co(e, a, i);
        break;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a))
            throw Error(o(61));
          if (l = a.__html, l != null) {
            if (n.children != null) throw Error(o(60));
            e.innerHTML = l;
          }
        }
        break;
      case "children":
        typeof a == "string" ? da(e, a) : (typeof a == "number" || typeof a == "bigint") && da(e, "" + a);
        break;
      case "onScroll":
        a != null && se("scroll", e);
        break;
      case "onScrollEnd":
        a != null && se("scrollend", e);
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
        if (!eo.hasOwnProperty(l))
          e: {
            if (l[0] === "o" && l[1] === "n" && (n = l.endsWith("Capture"), t = l.slice(2, n ? l.length - 7 : void 0), i = e[lt] || null, i = i != null ? i[l] : null, typeof i == "function" && e.removeEventListener(t, i, n), typeof a == "function")) {
              typeof i != "function" && i !== null && (l in e ? e[l] = null : e.hasAttribute(l) && e.removeAttribute(l)), e.addEventListener(t, a, n);
              break e;
            }
            l in e ? e[l] = a : a === !0 ? e.setAttribute(l, "") : mi(e, l, a);
          }
    }
  }
  function Fe(e, t, l) {
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
        se("error", e), se("load", e);
        var a = !1, n = !1, i;
        for (i in l)
          if (l.hasOwnProperty(i)) {
            var d = l[i];
            if (d != null)
              switch (i) {
                case "src":
                  a = !0;
                  break;
                case "srcSet":
                  n = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(o(137, t));
                default:
                  je(e, t, i, d, l, null);
              }
          }
        n && je(e, t, "srcSet", l.srcSet, l, null), a && je(e, t, "src", l.src, l, null);
        return;
      case "input":
        se("invalid", e);
        var f = i = d = n = null, g = null, E = null;
        for (a in l)
          if (l.hasOwnProperty(a)) {
            var A = l[a];
            if (A != null)
              switch (a) {
                case "name":
                  n = A;
                  break;
                case "type":
                  d = A;
                  break;
                case "checked":
                  g = A;
                  break;
                case "defaultChecked":
                  E = A;
                  break;
                case "value":
                  i = A;
                  break;
                case "defaultValue":
                  f = A;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (A != null)
                    throw Error(o(137, t));
                  break;
                default:
                  je(e, t, a, A, l, null);
              }
          }
        io(
          e,
          i,
          f,
          g,
          E,
          d,
          n,
          !1
        );
        return;
      case "select":
        se("invalid", e), a = d = i = null;
        for (n in l)
          if (l.hasOwnProperty(n) && (f = l[n], f != null))
            switch (n) {
              case "value":
                i = f;
                break;
              case "defaultValue":
                d = f;
                break;
              case "multiple":
                a = f;
              default:
                je(e, t, n, f, l, null);
            }
        t = i, l = d, e.multiple = !!a, t != null ? oa(e, !!a, t, !1) : l != null && oa(e, !!a, l, !0);
        return;
      case "textarea":
        se("invalid", e), i = n = a = null;
        for (d in l)
          if (l.hasOwnProperty(d) && (f = l[d], f != null))
            switch (d) {
              case "value":
                a = f;
                break;
              case "defaultValue":
                n = f;
                break;
              case "children":
                i = f;
                break;
              case "dangerouslySetInnerHTML":
                if (f != null) throw Error(o(91));
                break;
              default:
                je(e, t, d, f, l, null);
            }
        uo(e, a, n, i);
        return;
      case "option":
        for (g in l)
          if (l.hasOwnProperty(g) && (a = l[g], a != null))
            switch (g) {
              case "selected":
                e.selected = a && typeof a != "function" && typeof a != "symbol";
                break;
              default:
                je(e, t, g, a, l, null);
            }
        return;
      case "dialog":
        se("beforetoggle", e), se("toggle", e), se("cancel", e), se("close", e);
        break;
      case "iframe":
      case "object":
        se("load", e);
        break;
      case "video":
      case "audio":
        for (a = 0; a < Rn.length; a++)
          se(Rn[a], e);
        break;
      case "image":
        se("error", e), se("load", e);
        break;
      case "details":
        se("toggle", e);
        break;
      case "embed":
      case "source":
      case "link":
        se("error", e), se("load", e);
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
        for (E in l)
          if (l.hasOwnProperty(E) && (a = l[E], a != null))
            switch (E) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(o(137, t));
              default:
                je(e, t, E, a, l, null);
            }
        return;
      default:
        if (tu(t)) {
          for (A in l)
            l.hasOwnProperty(A) && (a = l[A], a !== void 0 && Ys(
              e,
              t,
              A,
              a,
              l,
              void 0
            ));
          return;
        }
    }
    for (f in l)
      l.hasOwnProperty(f) && (a = l[f], a != null && je(e, t, f, a, l, null));
  }
  function Vm(e, t, l, a) {
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
        var n = null, i = null, d = null, f = null, g = null, E = null, A = null;
        for (M in l) {
          var k = l[M];
          if (l.hasOwnProperty(M) && k != null)
            switch (M) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                g = k;
              default:
                a.hasOwnProperty(M) || je(e, t, M, null, a, k);
            }
        }
        for (var z in a) {
          var M = a[z];
          if (k = l[z], a.hasOwnProperty(z) && (M != null || k != null))
            switch (z) {
              case "type":
                i = M;
                break;
              case "name":
                n = M;
                break;
              case "checked":
                E = M;
                break;
              case "defaultChecked":
                A = M;
                break;
              case "value":
                d = M;
                break;
              case "defaultValue":
                f = M;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (M != null)
                  throw Error(o(137, t));
                break;
              default:
                M !== k && je(
                  e,
                  t,
                  z,
                  M,
                  a,
                  k
                );
            }
        }
        Pr(
          e,
          d,
          f,
          g,
          E,
          A,
          i,
          n
        );
        return;
      case "select":
        M = d = f = z = null;
        for (i in l)
          if (g = l[i], l.hasOwnProperty(i) && g != null)
            switch (i) {
              case "value":
                break;
              case "multiple":
                M = g;
              default:
                a.hasOwnProperty(i) || je(
                  e,
                  t,
                  i,
                  null,
                  a,
                  g
                );
            }
        for (n in a)
          if (i = a[n], g = l[n], a.hasOwnProperty(n) && (i != null || g != null))
            switch (n) {
              case "value":
                z = i;
                break;
              case "defaultValue":
                f = i;
                break;
              case "multiple":
                d = i;
              default:
                i !== g && je(
                  e,
                  t,
                  n,
                  i,
                  a,
                  g
                );
            }
        t = f, l = d, a = M, z != null ? oa(e, !!l, z, !1) : !!a != !!l && (t != null ? oa(e, !!l, t, !0) : oa(e, !!l, l ? [] : "", !1));
        return;
      case "textarea":
        M = z = null;
        for (f in l)
          if (n = l[f], l.hasOwnProperty(f) && n != null && !a.hasOwnProperty(f))
            switch (f) {
              case "value":
                break;
              case "children":
                break;
              default:
                je(e, t, f, null, a, n);
            }
        for (d in a)
          if (n = a[d], i = l[d], a.hasOwnProperty(d) && (n != null || i != null))
            switch (d) {
              case "value":
                z = n;
                break;
              case "defaultValue":
                M = n;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (n != null) throw Error(o(91));
                break;
              default:
                n !== i && je(e, t, d, n, a, i);
            }
        ro(e, z, M);
        return;
      case "option":
        for (var G in l)
          if (z = l[G], l.hasOwnProperty(G) && z != null && !a.hasOwnProperty(G))
            switch (G) {
              case "selected":
                e.selected = !1;
                break;
              default:
                je(
                  e,
                  t,
                  G,
                  null,
                  a,
                  z
                );
            }
        for (g in a)
          if (z = a[g], M = l[g], a.hasOwnProperty(g) && z !== M && (z != null || M != null))
            switch (g) {
              case "selected":
                e.selected = z && typeof z != "function" && typeof z != "symbol";
                break;
              default:
                je(
                  e,
                  t,
                  g,
                  z,
                  a,
                  M
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
        for (var W in l)
          z = l[W], l.hasOwnProperty(W) && z != null && !a.hasOwnProperty(W) && je(e, t, W, null, a, z);
        for (E in a)
          if (z = a[E], M = l[E], a.hasOwnProperty(E) && z !== M && (z != null || M != null))
            switch (E) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (z != null)
                  throw Error(o(137, t));
                break;
              default:
                je(
                  e,
                  t,
                  E,
                  z,
                  a,
                  M
                );
            }
        return;
      default:
        if (tu(t)) {
          for (var Ce in l)
            z = l[Ce], l.hasOwnProperty(Ce) && z !== void 0 && !a.hasOwnProperty(Ce) && Ys(
              e,
              t,
              Ce,
              void 0,
              a,
              z
            );
          for (A in a)
            z = a[A], M = l[A], !a.hasOwnProperty(A) || z === M || z === void 0 && M === void 0 || Ys(
              e,
              t,
              A,
              z,
              a,
              M
            );
          return;
        }
    }
    for (var j in l)
      z = l[j], l.hasOwnProperty(j) && z != null && !a.hasOwnProperty(j) && je(e, t, j, null, a, z);
    for (k in a)
      z = a[k], M = l[k], !a.hasOwnProperty(k) || z === M || z == null && M == null || je(e, t, k, z, a, M);
  }
  function f0(e) {
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
  function Xm() {
    if (typeof performance.getEntriesByType == "function") {
      for (var e = 0, t = 0, l = performance.getEntriesByType("resource"), a = 0; a < l.length; a++) {
        var n = l[a], i = n.transferSize, d = n.initiatorType, f = n.duration;
        if (i && f && f0(d)) {
          for (d = 0, f = n.responseEnd, a += 1; a < l.length; a++) {
            var g = l[a], E = g.startTime;
            if (E > f) break;
            var A = g.transferSize, k = g.initiatorType;
            A && f0(k) && (g = g.responseEnd, d += A * (g < f ? 1 : (f - E) / (g - E)));
          }
          if (--a, t += 8 * (i + d) / (n.duration / 1e3), e++, 10 < e) break;
        }
      }
      if (0 < e) return t / e / 1e6;
    }
    return navigator.connection && (e = navigator.connection.downlink, typeof e == "number") ? e : 5;
  }
  var Gs = null, Vs = null;
  function dr(e) {
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  function m0(e) {
    switch (e) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function h0(e, t) {
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
  function Xs(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var Qs = null;
  function Qm() {
    var e = window.event;
    return e && e.type === "popstate" ? e === Qs ? !1 : (Qs = e, !0) : (Qs = null, !1);
  }
  var g0 = typeof setTimeout == "function" ? setTimeout : void 0, Zm = typeof clearTimeout == "function" ? clearTimeout : void 0, p0 = typeof Promise == "function" ? Promise : void 0, Km = typeof queueMicrotask == "function" ? queueMicrotask : typeof p0 < "u" ? function(e) {
    return p0.resolve(null).then(e).catch(Jm);
  } : g0;
  function Jm(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function Ml(e) {
    return e === "head";
  }
  function x0(e, t) {
    var l = t, a = 0;
    do {
      var n = l.nextSibling;
      if (e.removeChild(l), n && n.nodeType === 8)
        if (l = n.data, l === "/$" || l === "/&") {
          if (a === 0) {
            e.removeChild(n), Ga(t);
            return;
          }
          a--;
        } else if (l === "$" || l === "$?" || l === "$~" || l === "$!" || l === "&")
          a++;
        else if (l === "html")
          Hn(e.ownerDocument.documentElement);
        else if (l === "head") {
          l = e.ownerDocument.head, Hn(l);
          for (var i = l.firstChild; i; ) {
            var d = i.nextSibling, f = i.nodeName;
            i[en] || f === "SCRIPT" || f === "STYLE" || f === "LINK" && i.rel.toLowerCase() === "stylesheet" || l.removeChild(i), i = d;
          }
        } else
          l === "body" && Hn(e.ownerDocument.body);
      l = n;
    } while (l);
    Ga(t);
  }
  function y0(e, t) {
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
  function Zs(e) {
    var t = e.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var l = t;
      switch (t = t.nextSibling, l.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          Zs(l), Wr(l);
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
  function $m(e, t, l, a) {
    for (; e.nodeType === 1; ) {
      var n = l;
      if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!a && (e.nodeName !== "INPUT" || e.type !== "hidden"))
          break;
      } else if (a) {
        if (!e[en])
          switch (t) {
            case "meta":
              if (!e.hasAttribute("itemprop")) break;
              return e;
            case "link":
              if (i = e.getAttribute("rel"), i === "stylesheet" && e.hasAttribute("data-precedence"))
                break;
              if (i !== n.rel || e.getAttribute("href") !== (n.href == null || n.href === "" ? null : n.href) || e.getAttribute("crossorigin") !== (n.crossOrigin == null ? null : n.crossOrigin) || e.getAttribute("title") !== (n.title == null ? null : n.title))
                break;
              return e;
            case "style":
              if (e.hasAttribute("data-precedence")) break;
              return e;
            case "script":
              if (i = e.getAttribute("src"), (i !== (n.src == null ? null : n.src) || e.getAttribute("type") !== (n.type == null ? null : n.type) || e.getAttribute("crossorigin") !== (n.crossOrigin == null ? null : n.crossOrigin)) && i && e.hasAttribute("async") && !e.hasAttribute("itemprop"))
                break;
              return e;
            default:
              return e;
          }
      } else if (t === "input" && e.type === "hidden") {
        var i = n.name == null ? null : "" + n.name;
        if (n.type === "hidden" && e.getAttribute("name") === i)
          return e;
      } else return e;
      if (e = Mt(e.nextSibling), e === null) break;
    }
    return null;
  }
  function Fm(e, t, l) {
    if (t === "") return null;
    for (; e.nodeType !== 3; )
      if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !l || (e = Mt(e.nextSibling), e === null)) return null;
    return e;
  }
  function v0(e, t) {
    for (; e.nodeType !== 8; )
      if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !t || (e = Mt(e.nextSibling), e === null)) return null;
    return e;
  }
  function Ks(e) {
    return e.data === "$?" || e.data === "$~";
  }
  function Js(e) {
    return e.data === "$!" || e.data === "$?" && e.ownerDocument.readyState !== "loading";
  }
  function Wm(e, t) {
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
  function Mt(e) {
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
  var $s = null;
  function b0(e) {
    e = e.nextSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var l = e.data;
        if (l === "/$" || l === "/&") {
          if (t === 0)
            return Mt(e.nextSibling);
          t--;
        } else
          l !== "$" && l !== "$!" && l !== "$?" && l !== "$~" && l !== "&" || t++;
      }
      e = e.nextSibling;
    }
    return null;
  }
  function S0(e) {
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
  function j0(e, t, l) {
    switch (t = dr(l), e) {
      case "html":
        if (e = t.documentElement, !e) throw Error(o(452));
        return e;
      case "head":
        if (e = t.head, !e) throw Error(o(453));
        return e;
      case "body":
        if (e = t.body, !e) throw Error(o(454));
        return e;
      default:
        throw Error(o(451));
    }
  }
  function Hn(e) {
    for (var t = e.attributes; t.length; )
      e.removeAttributeNode(t[0]);
    Wr(e);
  }
  var At = /* @__PURE__ */ new Map(), C0 = /* @__PURE__ */ new Set();
  function fr(e) {
    return typeof e.getRootNode == "function" ? e.getRootNode() : e.nodeType === 9 ? e : e.ownerDocument;
  }
  var ul = U.d;
  U.d = {
    f: Im,
    r: Pm,
    D: e4,
    C: t4,
    L: l4,
    m: a4,
    X: i4,
    S: n4,
    M: r4
  };
  function Im() {
    var e = ul.f(), t = ar();
    return e || t;
  }
  function Pm(e) {
    var t = ua(e);
    t !== null && t.tag === 5 && t.type === "form" ? Ld(t) : ul.r(e);
  }
  var La = typeof document > "u" ? null : document;
  function N0(e, t, l) {
    var a = La;
    if (a && typeof t == "string" && t) {
      var n = jt(t);
      n = 'link[rel="' + e + '"][href="' + n + '"]', typeof l == "string" && (n += '[crossorigin="' + l + '"]'), C0.has(n) || (C0.add(n), e = { rel: e, crossOrigin: l, href: t }, a.querySelector(n) === null && (t = a.createElement("link"), Fe(t, "link", e), Ve(t), a.head.appendChild(t)));
    }
  }
  function e4(e) {
    ul.D(e), N0("dns-prefetch", e, null);
  }
  function t4(e, t) {
    ul.C(e, t), N0("preconnect", e, t);
  }
  function l4(e, t, l) {
    ul.L(e, t, l);
    var a = La;
    if (a && e && t) {
      var n = 'link[rel="preload"][as="' + jt(t) + '"]';
      t === "image" && l && l.imageSrcSet ? (n += '[imagesrcset="' + jt(
        l.imageSrcSet
      ) + '"]', typeof l.imageSizes == "string" && (n += '[imagesizes="' + jt(
        l.imageSizes
      ) + '"]')) : n += '[href="' + jt(e) + '"]';
      var i = n;
      switch (t) {
        case "style":
          i = qa(e);
          break;
        case "script":
          i = Ya(e);
      }
      At.has(i) || (e = T(
        {
          rel: "preload",
          href: t === "image" && l && l.imageSrcSet ? void 0 : e,
          as: t
        },
        l
      ), At.set(i, e), a.querySelector(n) !== null || t === "style" && a.querySelector(Bn(i)) || t === "script" && a.querySelector(Ln(i)) || (t = a.createElement("link"), Fe(t, "link", e), Ve(t), a.head.appendChild(t)));
    }
  }
  function a4(e, t) {
    ul.m(e, t);
    var l = La;
    if (l && e) {
      var a = t && typeof t.as == "string" ? t.as : "script", n = 'link[rel="modulepreload"][as="' + jt(a) + '"][href="' + jt(e) + '"]', i = n;
      switch (a) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          i = Ya(e);
      }
      if (!At.has(i) && (e = T({ rel: "modulepreload", href: e }, t), At.set(i, e), l.querySelector(n) === null)) {
        switch (a) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (l.querySelector(Ln(i)))
              return;
        }
        a = l.createElement("link"), Fe(a, "link", e), Ve(a), l.head.appendChild(a);
      }
    }
  }
  function n4(e, t, l) {
    ul.S(e, t, l);
    var a = La;
    if (a && e) {
      var n = sa(a).hoistableStyles, i = qa(e);
      t = t || "default";
      var d = n.get(i);
      if (!d) {
        var f = { loading: 0, preload: null };
        if (d = a.querySelector(
          Bn(i)
        ))
          f.loading = 5;
        else {
          e = T(
            { rel: "stylesheet", href: e, "data-precedence": t },
            l
          ), (l = At.get(i)) && Fs(e, l);
          var g = d = a.createElement("link");
          Ve(g), Fe(g, "link", e), g._p = new Promise(function(E, A) {
            g.onload = E, g.onerror = A;
          }), g.addEventListener("load", function() {
            f.loading |= 1;
          }), g.addEventListener("error", function() {
            f.loading |= 2;
          }), f.loading |= 4, mr(d, t, a);
        }
        d = {
          type: "stylesheet",
          instance: d,
          count: 1,
          state: f
        }, n.set(i, d);
      }
    }
  }
  function i4(e, t) {
    ul.X(e, t);
    var l = La;
    if (l && e) {
      var a = sa(l).hoistableScripts, n = Ya(e), i = a.get(n);
      i || (i = l.querySelector(Ln(n)), i || (e = T({ src: e, async: !0 }, t), (t = At.get(n)) && Ws(e, t), i = l.createElement("script"), Ve(i), Fe(i, "link", e), l.head.appendChild(i)), i = {
        type: "script",
        instance: i,
        count: 1,
        state: null
      }, a.set(n, i));
    }
  }
  function r4(e, t) {
    ul.M(e, t);
    var l = La;
    if (l && e) {
      var a = sa(l).hoistableScripts, n = Ya(e), i = a.get(n);
      i || (i = l.querySelector(Ln(n)), i || (e = T({ src: e, async: !0, type: "module" }, t), (t = At.get(n)) && Ws(e, t), i = l.createElement("script"), Ve(i), Fe(i, "link", e), l.head.appendChild(i)), i = {
        type: "script",
        instance: i,
        count: 1,
        state: null
      }, a.set(n, i));
    }
  }
  function E0(e, t, l, a) {
    var n = (n = re.current) ? fr(n) : null;
    if (!n) throw Error(o(446));
    switch (e) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof l.precedence == "string" && typeof l.href == "string" ? (t = qa(l.href), l = sa(
          n
        ).hoistableStyles, a = l.get(t), a || (a = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, l.set(t, a)), a) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (l.rel === "stylesheet" && typeof l.href == "string" && typeof l.precedence == "string") {
          e = qa(l.href);
          var i = sa(
            n
          ).hoistableStyles, d = i.get(e);
          if (d || (n = n.ownerDocument || n, d = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, i.set(e, d), (i = n.querySelector(
            Bn(e)
          )) && !i._p && (d.instance = i, d.state.loading = 5), At.has(e) || (l = {
            rel: "preload",
            as: "style",
            href: l.href,
            crossOrigin: l.crossOrigin,
            integrity: l.integrity,
            media: l.media,
            hrefLang: l.hrefLang,
            referrerPolicy: l.referrerPolicy
          }, At.set(e, l), i || u4(
            n,
            e,
            l,
            d.state
          ))), t && a === null)
            throw Error(o(528, ""));
          return d;
        }
        if (t && a !== null)
          throw Error(o(529, ""));
        return null;
      case "script":
        return t = l.async, l = l.src, typeof l == "string" && t && typeof t != "function" && typeof t != "symbol" ? (t = Ya(l), l = sa(
          n
        ).hoistableScripts, a = l.get(t), a || (a = {
          type: "script",
          instance: null,
          count: 0,
          state: null
        }, l.set(t, a)), a) : { type: "void", instance: null, count: 0, state: null };
      default:
        throw Error(o(444, e));
    }
  }
  function qa(e) {
    return 'href="' + jt(e) + '"';
  }
  function Bn(e) {
    return 'link[rel="stylesheet"][' + e + "]";
  }
  function T0(e) {
    return T({}, e, {
      "data-precedence": e.precedence,
      precedence: null
    });
  }
  function u4(e, t, l, a) {
    e.querySelector('link[rel="preload"][as="style"][' + t + "]") ? a.loading = 1 : (t = e.createElement("link"), a.preload = t, t.addEventListener("load", function() {
      return a.loading |= 1;
    }), t.addEventListener("error", function() {
      return a.loading |= 2;
    }), Fe(t, "link", l), Ve(t), e.head.appendChild(t));
  }
  function Ya(e) {
    return '[src="' + jt(e) + '"]';
  }
  function Ln(e) {
    return "script[async]" + e;
  }
  function _0(e, t, l) {
    if (t.count++, t.instance === null)
      switch (t.type) {
        case "style":
          var a = e.querySelector(
            'style[data-href~="' + jt(l.href) + '"]'
          );
          if (a)
            return t.instance = a, Ve(a), a;
          var n = T({}, l, {
            "data-href": l.href,
            "data-precedence": l.precedence,
            href: null,
            precedence: null
          });
          return a = (e.ownerDocument || e).createElement(
            "style"
          ), Ve(a), Fe(a, "style", n), mr(a, l.precedence, e), t.instance = a;
        case "stylesheet":
          n = qa(l.href);
          var i = e.querySelector(
            Bn(n)
          );
          if (i)
            return t.state.loading |= 4, t.instance = i, Ve(i), i;
          a = T0(l), (n = At.get(n)) && Fs(a, n), i = (e.ownerDocument || e).createElement("link"), Ve(i);
          var d = i;
          return d._p = new Promise(function(f, g) {
            d.onload = f, d.onerror = g;
          }), Fe(i, "link", a), t.state.loading |= 4, mr(i, l.precedence, e), t.instance = i;
        case "script":
          return i = Ya(l.src), (n = e.querySelector(
            Ln(i)
          )) ? (t.instance = n, Ve(n), n) : (a = l, (n = At.get(i)) && (a = T({}, l), Ws(a, n)), e = e.ownerDocument || e, n = e.createElement("script"), Ve(n), Fe(n, "link", a), e.head.appendChild(n), t.instance = n);
        case "void":
          return null;
        default:
          throw Error(o(443, t.type));
      }
    else
      t.type === "stylesheet" && (t.state.loading & 4) === 0 && (a = t.instance, t.state.loading |= 4, mr(a, l.precedence, e));
    return t.instance;
  }
  function mr(e, t, l) {
    for (var a = l.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), n = a.length ? a[a.length - 1] : null, i = n, d = 0; d < a.length; d++) {
      var f = a[d];
      if (f.dataset.precedence === t) i = f;
      else if (i !== n) break;
    }
    i ? i.parentNode.insertBefore(e, i.nextSibling) : (t = l.nodeType === 9 ? l.head : l, t.insertBefore(e, t.firstChild));
  }
  function Fs(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.title == null && (e.title = t.title);
  }
  function Ws(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.integrity == null && (e.integrity = t.integrity);
  }
  var hr = null;
  function z0(e, t, l) {
    if (hr === null) {
      var a = /* @__PURE__ */ new Map(), n = hr = /* @__PURE__ */ new Map();
      n.set(l, a);
    } else
      n = hr, a = n.get(l), a || (a = /* @__PURE__ */ new Map(), n.set(l, a));
    if (a.has(e)) return a;
    for (a.set(e, null), l = l.getElementsByTagName(e), n = 0; n < l.length; n++) {
      var i = l[n];
      if (!(i[en] || i[Ze] || e === "link" && i.getAttribute("rel") === "stylesheet") && i.namespaceURI !== "http://www.w3.org/2000/svg") {
        var d = i.getAttribute(t) || "";
        d = e + d;
        var f = a.get(d);
        f ? f.push(i) : a.set(d, [i]);
      }
    }
    return a;
  }
  function M0(e, t, l) {
    e = e.ownerDocument || e, e.head.insertBefore(
      l,
      t === "title" ? e.querySelector("head > title") : null
    );
  }
  function s4(e, t, l) {
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
  function A0(e) {
    return !(e.type === "stylesheet" && (e.state.loading & 3) === 0);
  }
  function c4(e, t, l, a) {
    if (l.type === "stylesheet" && (typeof a.media != "string" || matchMedia(a.media).matches !== !1) && (l.state.loading & 4) === 0) {
      if (l.instance === null) {
        var n = qa(a.href), i = t.querySelector(
          Bn(n)
        );
        if (i) {
          t = i._p, t !== null && typeof t == "object" && typeof t.then == "function" && (e.count++, e = gr.bind(e), t.then(e, e)), l.state.loading |= 4, l.instance = i, Ve(i);
          return;
        }
        i = t.ownerDocument || t, a = T0(a), (n = At.get(n)) && Fs(a, n), i = i.createElement("link"), Ve(i);
        var d = i;
        d._p = new Promise(function(f, g) {
          d.onload = f, d.onerror = g;
        }), Fe(i, "link", a), l.instance = i;
      }
      e.stylesheets === null && (e.stylesheets = /* @__PURE__ */ new Map()), e.stylesheets.set(l, t), (t = l.state.preload) && (l.state.loading & 3) === 0 && (e.count++, l = gr.bind(e), t.addEventListener("load", l), t.addEventListener("error", l));
    }
  }
  var Is = 0;
  function o4(e, t) {
    return e.stylesheets && e.count === 0 && xr(e, e.stylesheets), 0 < e.count || 0 < e.imgCount ? function(l) {
      var a = setTimeout(function() {
        if (e.stylesheets && xr(e, e.stylesheets), e.unsuspend) {
          var i = e.unsuspend;
          e.unsuspend = null, i();
        }
      }, 6e4 + t);
      0 < e.imgBytes && Is === 0 && (Is = 62500 * Xm());
      var n = setTimeout(
        function() {
          if (e.waitingForImages = !1, e.count === 0 && (e.stylesheets && xr(e, e.stylesheets), e.unsuspend)) {
            var i = e.unsuspend;
            e.unsuspend = null, i();
          }
        },
        (e.imgBytes > Is ? 50 : 800) + t
      );
      return e.unsuspend = l, function() {
        e.unsuspend = null, clearTimeout(a), clearTimeout(n);
      };
    } : null;
  }
  function gr() {
    if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
      if (this.stylesheets) xr(this, this.stylesheets);
      else if (this.unsuspend) {
        var e = this.unsuspend;
        this.unsuspend = null, e();
      }
    }
  }
  var pr = null;
  function xr(e, t) {
    e.stylesheets = null, e.unsuspend !== null && (e.count++, pr = /* @__PURE__ */ new Map(), t.forEach(d4, e), pr = null, gr.call(e));
  }
  function d4(e, t) {
    if (!(t.state.loading & 4)) {
      var l = pr.get(e);
      if (l) var a = l.get(null);
      else {
        l = /* @__PURE__ */ new Map(), pr.set(e, l);
        for (var n = e.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), i = 0; i < n.length; i++) {
          var d = n[i];
          (d.nodeName === "LINK" || d.getAttribute("media") !== "not all") && (l.set(d.dataset.precedence, d), a = d);
        }
        a && l.set(null, a);
      }
      n = t.instance, d = n.getAttribute("data-precedence"), i = l.get(d) || a, i === a && l.set(null, n), l.set(d, n), this.count++, a = gr.bind(this), n.addEventListener("load", a), n.addEventListener("error", a), i ? i.parentNode.insertBefore(n, i.nextSibling) : (e = e.nodeType === 9 ? e.head : e, e.insertBefore(n, e.firstChild)), t.state.loading |= 4;
    }
  }
  var qn = {
    $$typeof: q,
    Provider: null,
    Consumer: null,
    _currentValue: F,
    _currentValue2: F,
    _threadCount: 0
  };
  function f4(e, t, l, a, n, i, d, f, g) {
    this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Kr(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Kr(0), this.hiddenUpdates = Kr(null), this.identifierPrefix = a, this.onUncaughtError = n, this.onCaughtError = i, this.onRecoverableError = d, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = g, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function w0(e, t, l, a, n, i, d, f, g, E, A, k) {
    return e = new f4(
      e,
      t,
      l,
      d,
      g,
      E,
      A,
      k,
      f
    ), t = 1, i === !0 && (t |= 24), i = ht(3, null, null, t), e.current = i, i.stateNode = e, t = wu(), t.refCount++, e.pooledCache = t, t.refCount++, i.memoizedState = {
      element: a,
      isDehydrated: l,
      cache: t
    }, Ru(i), e;
  }
  function k0(e) {
    return e ? (e = ya, e) : ya;
  }
  function O0(e, t, l, a, n, i) {
    n = k0(n), a.context === null ? a.context = n : a.pendingContext = n, a = yl(t), a.payload = { element: l }, i = i === void 0 ? null : i, i !== null && (a.callback = i), l = vl(e, a, t), l !== null && (st(l, e, t), yn(l, e, t));
  }
  function D0(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var l = e.retryLane;
      e.retryLane = l !== 0 && l < t ? l : t;
    }
  }
  function Ps(e, t) {
    D0(e, t), (e = e.alternate) && D0(e, t);
  }
  function R0(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = Gl(e, 67108864);
      t !== null && st(t, e, 67108864), Ps(e, 67108864);
    }
  }
  function U0(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = vt();
      t = Jr(t);
      var l = Gl(e, t);
      l !== null && st(l, e, t), Ps(e, t);
    }
  }
  var yr = !0;
  function m4(e, t, l, a) {
    var n = S.T;
    S.T = null;
    var i = U.p;
    try {
      U.p = 2, ec(e, t, l, a);
    } finally {
      U.p = i, S.T = n;
    }
  }
  function h4(e, t, l, a) {
    var n = S.T;
    S.T = null;
    var i = U.p;
    try {
      U.p = 8, ec(e, t, l, a);
    } finally {
      U.p = i, S.T = n;
    }
  }
  function ec(e, t, l, a) {
    if (yr) {
      var n = tc(a);
      if (n === null)
        qs(
          e,
          t,
          a,
          vr,
          l
        ), B0(e, a);
      else if (p4(
        n,
        e,
        t,
        l,
        a
      ))
        a.stopPropagation();
      else if (B0(e, a), t & 4 && -1 < g4.indexOf(e)) {
        for (; n !== null; ) {
          var i = ua(n);
          if (i !== null)
            switch (i.tag) {
              case 3:
                if (i = i.stateNode, i.current.memoizedState.isDehydrated) {
                  var d = Hl(i.pendingLanes);
                  if (d !== 0) {
                    var f = i;
                    for (f.pendingLanes |= 2, f.entangledLanes |= 2; d; ) {
                      var g = 1 << 31 - ft(d);
                      f.entanglements[1] |= g, d &= ~g;
                    }
                    qt(i), (pe & 6) === 0 && (tr = ot() + 500, Dn(0));
                  }
                }
                break;
              case 31:
              case 13:
                f = Gl(i, 2), f !== null && st(f, i, 2), ar(), Ps(i, 2);
            }
          if (i = tc(a), i === null && qs(
            e,
            t,
            a,
            vr,
            l
          ), i === n) break;
          n = i;
        }
        n !== null && a.stopPropagation();
      } else
        qs(
          e,
          t,
          a,
          null,
          l
        );
    }
  }
  function tc(e) {
    return e = au(e), lc(e);
  }
  var vr = null;
  function lc(e) {
    if (vr = null, e = ra(e), e !== null) {
      var t = h(e);
      if (t === null) e = null;
      else {
        var l = t.tag;
        if (l === 13) {
          if (e = v(t), e !== null) return e;
          e = null;
        } else if (l === 31) {
          if (e = C(t), e !== null) return e;
          e = null;
        } else if (l === 3) {
          if (t.stateNode.current.memoizedState.isDehydrated)
            return t.tag === 3 ? t.stateNode.containerInfo : null;
          e = null;
        } else t !== e && (e = null);
      }
    }
    return vr = e, null;
  }
  function H0(e) {
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
        switch (e2()) {
          case Vc:
            return 2;
          case Xc:
            return 8;
          case si:
          case t2:
            return 32;
          case Qc:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var ac = !1, Al = null, wl = null, kl = null, Yn = /* @__PURE__ */ new Map(), Gn = /* @__PURE__ */ new Map(), Ol = [], g4 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function B0(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        Al = null;
        break;
      case "dragenter":
      case "dragleave":
        wl = null;
        break;
      case "mouseover":
      case "mouseout":
        kl = null;
        break;
      case "pointerover":
      case "pointerout":
        Yn.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Gn.delete(t.pointerId);
    }
  }
  function Vn(e, t, l, a, n, i) {
    return e === null || e.nativeEvent !== i ? (e = {
      blockedOn: t,
      domEventName: l,
      eventSystemFlags: a,
      nativeEvent: i,
      targetContainers: [n]
    }, t !== null && (t = ua(t), t !== null && R0(t)), e) : (e.eventSystemFlags |= a, t = e.targetContainers, n !== null && t.indexOf(n) === -1 && t.push(n), e);
  }
  function p4(e, t, l, a, n) {
    switch (t) {
      case "focusin":
        return Al = Vn(
          Al,
          e,
          t,
          l,
          a,
          n
        ), !0;
      case "dragenter":
        return wl = Vn(
          wl,
          e,
          t,
          l,
          a,
          n
        ), !0;
      case "mouseover":
        return kl = Vn(
          kl,
          e,
          t,
          l,
          a,
          n
        ), !0;
      case "pointerover":
        var i = n.pointerId;
        return Yn.set(
          i,
          Vn(
            Yn.get(i) || null,
            e,
            t,
            l,
            a,
            n
          )
        ), !0;
      case "gotpointercapture":
        return i = n.pointerId, Gn.set(
          i,
          Vn(
            Gn.get(i) || null,
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
  function L0(e) {
    var t = ra(e.target);
    if (t !== null) {
      var l = h(t);
      if (l !== null) {
        if (t = l.tag, t === 13) {
          if (t = v(l), t !== null) {
            e.blockedOn = t, Wc(e.priority, function() {
              U0(l);
            });
            return;
          }
        } else if (t === 31) {
          if (t = C(l), t !== null) {
            e.blockedOn = t, Wc(e.priority, function() {
              U0(l);
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
  function br(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var l = tc(e.nativeEvent);
      if (l === null) {
        l = e.nativeEvent;
        var a = new l.constructor(
          l.type,
          l
        );
        lu = a, l.target.dispatchEvent(a), lu = null;
      } else
        return t = ua(l), t !== null && R0(t), e.blockedOn = l, !1;
      t.shift();
    }
    return !0;
  }
  function q0(e, t, l) {
    br(e) && l.delete(t);
  }
  function x4() {
    ac = !1, Al !== null && br(Al) && (Al = null), wl !== null && br(wl) && (wl = null), kl !== null && br(kl) && (kl = null), Yn.forEach(q0), Gn.forEach(q0);
  }
  function Sr(e, t) {
    e.blockedOn === t && (e.blockedOn = null, ac || (ac = !0, s.unstable_scheduleCallback(
      s.unstable_NormalPriority,
      x4
    )));
  }
  var jr = null;
  function Y0(e) {
    jr !== e && (jr = e, s.unstable_scheduleCallback(
      s.unstable_NormalPriority,
      function() {
        jr === e && (jr = null);
        for (var t = 0; t < e.length; t += 3) {
          var l = e[t], a = e[t + 1], n = e[t + 2];
          if (typeof a != "function") {
            if (lc(a || l) === null)
              continue;
            break;
          }
          var i = ua(l);
          i !== null && (e.splice(t, 3), t -= 3, ts(
            i,
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
  function Ga(e) {
    function t(g) {
      return Sr(g, e);
    }
    Al !== null && Sr(Al, e), wl !== null && Sr(wl, e), kl !== null && Sr(kl, e), Yn.forEach(t), Gn.forEach(t);
    for (var l = 0; l < Ol.length; l++) {
      var a = Ol[l];
      a.blockedOn === e && (a.blockedOn = null);
    }
    for (; 0 < Ol.length && (l = Ol[0], l.blockedOn === null); )
      L0(l), l.blockedOn === null && Ol.shift();
    if (l = (e.ownerDocument || e).$$reactFormReplay, l != null)
      for (a = 0; a < l.length; a += 3) {
        var n = l[a], i = l[a + 1], d = n[lt] || null;
        if (typeof i == "function")
          d || Y0(l);
        else if (d) {
          var f = null;
          if (i && i.hasAttribute("formAction")) {
            if (n = i, d = i[lt] || null)
              f = d.formAction;
            else if (lc(n) !== null) continue;
          } else f = d.action;
          typeof f == "function" ? l[a + 1] = f : (l.splice(a, 3), a -= 3), Y0(l);
        }
      }
  }
  function G0() {
    function e(i) {
      i.canIntercept && i.info === "react-transition" && i.intercept({
        handler: function() {
          return new Promise(function(d) {
            return n = d;
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
        var i = navigation.currentEntry;
        i && i.url != null && navigation.navigate(i.url, {
          state: i.getState(),
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
  function nc(e) {
    this._internalRoot = e;
  }
  Cr.prototype.render = nc.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(o(409));
    var l = t.current, a = vt();
    O0(l, a, e, t, null, null);
  }, Cr.prototype.unmount = nc.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      O0(e.current, 2, null, e, null, null), ar(), t[ia] = null;
    }
  };
  function Cr(e) {
    this._internalRoot = e;
  }
  Cr.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var t = Fc();
      e = { blockedOn: null, target: e, priority: t };
      for (var l = 0; l < Ol.length && t !== 0 && t < Ol[l].priority; l++) ;
      Ol.splice(l, 0, e), l === 0 && L0(e);
    }
  };
  var V0 = u.version;
  if (V0 !== "19.2.3")
    throw Error(
      o(
        527,
        V0,
        "19.2.3"
      )
    );
  U.findDOMNode = function(e) {
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function" ? Error(o(188)) : (e = Object.keys(e).join(","), Error(o(268, e)));
    return e = b(t), e = e !== null ? _(e) : null, e = e === null ? null : e.stateNode, e;
  };
  var y4 = {
    bundleType: 0,
    version: "19.2.3",
    rendererPackageName: "react-dom",
    currentDispatcherRef: S,
    reconcilerVersion: "19.2.3"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Nr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Nr.isDisabled && Nr.supportsFiber)
      try {
        Wa = Nr.inject(
          y4
        ), dt = Nr;
      } catch {
      }
  }
  return Xn.createRoot = function(e, t) {
    if (!m(e)) throw Error(o(299));
    var l = !1, a = "", n = $d, i = Fd, d = Wd;
    return t != null && (t.unstable_strictMode === !0 && (l = !0), t.identifierPrefix !== void 0 && (a = t.identifierPrefix), t.onUncaughtError !== void 0 && (n = t.onUncaughtError), t.onCaughtError !== void 0 && (i = t.onCaughtError), t.onRecoverableError !== void 0 && (d = t.onRecoverableError)), t = w0(
      e,
      1,
      !1,
      null,
      null,
      l,
      a,
      null,
      n,
      i,
      d,
      G0
    ), e[ia] = t.current, Ls(e), new nc(t);
  }, Xn.hydrateRoot = function(e, t, l) {
    if (!m(e)) throw Error(o(299));
    var a = !1, n = "", i = $d, d = Fd, f = Wd, g = null;
    return l != null && (l.unstable_strictMode === !0 && (a = !0), l.identifierPrefix !== void 0 && (n = l.identifierPrefix), l.onUncaughtError !== void 0 && (i = l.onUncaughtError), l.onCaughtError !== void 0 && (d = l.onCaughtError), l.onRecoverableError !== void 0 && (f = l.onRecoverableError), l.formState !== void 0 && (g = l.formState)), t = w0(
      e,
      1,
      !0,
      t,
      l ?? null,
      a,
      n,
      g,
      i,
      d,
      f,
      G0
    ), t.context = k0(null), l = t.current, a = vt(), a = Jr(a), n = yl(a), n.callback = null, vl(l, n, a), l = a, t.current.lanes = l, Pa(t, l), qt(t), e[ia] = t.current, Ls(e), new Cr(t);
  }, Xn.version = "19.2.3", Xn;
}
var W0;
function M4() {
  if (W0) return rc.exports;
  W0 = 1;
  function s() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s);
      } catch (u) {
        console.error(u);
      }
  }
  return s(), rc.exports = z4(), rc.exports;
}
var A4 = M4();
const w4 = /* @__PURE__ */ C1(A4);
var oc = { exports: {} }, Qn = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var I0;
function k4() {
  if (I0) return Qn;
  I0 = 1;
  var s = Symbol.for("react.transitional.element"), u = Symbol.for("react.fragment");
  function c(o, m, h) {
    var v = null;
    if (h !== void 0 && (v = "" + h), m.key !== void 0 && (v = "" + m.key), "key" in m) {
      h = {};
      for (var C in m)
        C !== "key" && (h[C] = m[C]);
    } else h = m;
    return m = h.ref, {
      $$typeof: s,
      type: o,
      key: v,
      ref: m !== void 0 ? m : null,
      props: h
    };
  }
  return Qn.Fragment = u, Qn.jsx = c, Qn.jsxs = c, Qn;
}
var P0;
function O4() {
  return P0 || (P0 = 1, oc.exports = k4()), oc.exports;
}
var r = O4();
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const D4 = (s) => s.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), R4 = (s) => s.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (u, c, o) => o ? o.toUpperCase() : c.toLowerCase()
), e1 = (s) => {
  const u = R4(s);
  return u.charAt(0).toUpperCase() + u.slice(1);
}, N1 = (...s) => s.filter((u, c, o) => !!u && u.trim() !== "" && o.indexOf(u) === c).join(" ").trim(), U4 = (s) => {
  for (const u in s)
    if (u.startsWith("aria-") || u === "role" || u === "title")
      return !0;
};
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var H4 = {
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
const B4 = D.forwardRef(
  ({
    color: s = "currentColor",
    size: u = 24,
    strokeWidth: c = 2,
    absoluteStrokeWidth: o,
    className: m = "",
    children: h,
    iconNode: v,
    ...C
  }, p) => D.createElement(
    "svg",
    {
      ref: p,
      ...H4,
      width: u,
      height: u,
      stroke: s,
      strokeWidth: o ? Number(c) * 24 / Number(u) : c,
      className: N1("lucide", m),
      ...!h && !U4(C) && { "aria-hidden": "true" },
      ...C
    },
    [
      ...v.map(([b, _]) => D.createElement(b, _)),
      ...Array.isArray(h) ? h : [h]
    ]
  )
);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const J = (s, u) => {
  const c = D.forwardRef(
    ({ className: o, ...m }, h) => D.createElement(B4, {
      ref: h,
      iconNode: u,
      className: N1(
        `lucide-${D4(e1(s))}`,
        `lucide-${s}`,
        o
      ),
      ...m
    })
  );
  return c.displayName = e1(s), c;
};
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const L4 = [
  ["path", { d: "M12 17V3", key: "1cwfxf" }],
  ["path", { d: "m6 11 6 6 6-6", key: "12ii2o" }],
  ["path", { d: "M19 21H5", key: "150jfl" }]
], q4 = J("arrow-down-to-line", L4);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Y4 = [
  ["path", { d: "M7 7h10v10", key: "1tivn9" }],
  ["path", { d: "M7 17 17 7", key: "1vkiza" }]
], G4 = J("arrow-up-right", Y4);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const V4 = [
  ["path", { d: "M10.268 21a2 2 0 0 0 3.464 0", key: "vwvbt9" }],
  [
    "path",
    {
      d: "M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",
      key: "11g9vi"
    }
  ]
], X4 = J("bell", V4);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Q4 = [
  ["path", { d: "M12 8V4H8", key: "hb8ula" }],
  ["rect", { width: "16", height: "12", x: "4", y: "8", rx: "2", key: "enze0r" }],
  ["path", { d: "M2 14h2", key: "vft8re" }],
  ["path", { d: "M20 14h2", key: "4cs60a" }],
  ["path", { d: "M15 13v2", key: "1xurst" }],
  ["path", { d: "M9 13v2", key: "rq6x2g" }]
], E1 = J("bot", Q4);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Z4 = [
  [
    "path",
    {
      d: "M2.97 12.92A2 2 0 0 0 2 14.63v3.24a2 2 0 0 0 .97 1.71l3 1.8a2 2 0 0 0 2.06 0L12 19v-5.5l-5-3-4.03 2.42Z",
      key: "lc1i9w"
    }
  ],
  ["path", { d: "m7 16.5-4.74-2.85", key: "1o9zyk" }],
  ["path", { d: "m7 16.5 5-3", key: "va8pkn" }],
  ["path", { d: "M7 16.5v5.17", key: "jnp8gn" }],
  [
    "path",
    {
      d: "M12 13.5V19l3.97 2.38a2 2 0 0 0 2.06 0l3-1.8a2 2 0 0 0 .97-1.71v-3.24a2 2 0 0 0-.97-1.71L17 10.5l-5 3Z",
      key: "8zsnat"
    }
  ],
  ["path", { d: "m17 16.5-5-3", key: "8arw3v" }],
  ["path", { d: "m17 16.5 4.74-2.85", key: "8rfmw" }],
  ["path", { d: "M17 16.5v5.17", key: "k6z78m" }],
  [
    "path",
    {
      d: "M7.97 4.42A2 2 0 0 0 7 6.13v4.37l5 3 5-3V6.13a2 2 0 0 0-.97-1.71l-3-1.8a2 2 0 0 0-2.06 0l-3 1.8Z",
      key: "1xygjf"
    }
  ],
  ["path", { d: "M12 8 7.26 5.15", key: "1vbdud" }],
  ["path", { d: "m12 8 4.74-2.85", key: "3rx089" }],
  ["path", { d: "M12 13.5V8", key: "1io7kd" }]
], K4 = J("boxes", Z4);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const J4 = [
  [
    "path",
    {
      d: "M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z",
      key: "l5xja"
    }
  ],
  ["path", { d: "M9 13a4.5 4.5 0 0 0 3-4", key: "10igwf" }],
  ["path", { d: "M6.003 5.125A3 3 0 0 0 6.401 6.5", key: "105sqy" }],
  ["path", { d: "M3.477 10.896a4 4 0 0 1 .585-.396", key: "ql3yin" }],
  ["path", { d: "M6 18a4 4 0 0 1-1.967-.516", key: "2e4loj" }],
  ["path", { d: "M12 13h4", key: "1ku699" }],
  ["path", { d: "M12 18h6a2 2 0 0 1 2 2v1", key: "105ag5" }],
  ["path", { d: "M12 8h8", key: "1lhi5i" }],
  ["path", { d: "M16 8V5a2 2 0 0 1 2-2", key: "u6izg6" }],
  ["circle", { cx: "16", cy: "13", r: ".5", key: "ry7gng" }],
  ["circle", { cx: "18", cy: "3", r: ".5", key: "1aiba7" }],
  ["circle", { cx: "20", cy: "21", r: ".5", key: "yhc1fs" }],
  ["circle", { cx: "20", cy: "8", r: ".5", key: "1e43v0" }]
], $4 = J("brain-circuit", J4);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const F4 = [
  ["path", { d: "M12 18V5", key: "adv99a" }],
  ["path", { d: "M15 13a4.17 4.17 0 0 1-3-4 4.17 4.17 0 0 1-3 4", key: "1e3is1" }],
  ["path", { d: "M17.598 6.5A3 3 0 1 0 12 5a3 3 0 1 0-5.598 1.5", key: "1gqd8o" }],
  ["path", { d: "M17.997 5.125a4 4 0 0 1 2.526 5.77", key: "iwvgf7" }],
  ["path", { d: "M18 18a4 4 0 0 0 2-7.464", key: "efp6ie" }],
  ["path", { d: "M19.967 17.483A4 4 0 1 1 12 18a4 4 0 1 1-7.967-.517", key: "1gq6am" }],
  ["path", { d: "M6 18a4 4 0 0 1-2-7.464", key: "k1g0md" }],
  ["path", { d: "M6.003 5.125a4 4 0 0 0-2.526 5.77", key: "q97ue3" }]
], T1 = J("brain", F4);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const W4 = [
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
], I4 = J("calculator", W4);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const P4 = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]], e3 = J("check", P4);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const t3 = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]], ei = J("chevron-down", t3);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const l3 = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]], _1 = J("chevron-right", l3);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const a3 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["line", { x1: "12", x2: "12", y1: "8", y2: "12", key: "1pkeuh" }],
  ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16", key: "4dfq90" }]
], Tc = J("circle-alert", a3);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const n3 = [
  ["path", { d: "M21.801 10A10 10 0 1 1 17 3.335", key: "yps3ct" }],
  ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }]
], _c = J("circle-check-big", n3);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const i3 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]
], r3 = J("circle-check", i3);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const u3 = [
  ["path", { d: "M12 6v6l4 2", key: "mmk7yg" }],
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]
], s3 = J("clock", u3);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const c3 = [
  ["path", { d: "M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z", key: "p7xjir" }]
], o3 = J("cloud", c3);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const d3 = [
  ["rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2", key: "17jyea" }],
  ["path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2", key: "zix9uf" }]
], z1 = J("copy", d3);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const f3 = [
  ["path", { d: "M20 4v7a4 4 0 0 1-4 4H4", key: "6o5b7l" }],
  ["path", { d: "m9 10-5 5 5 5", key: "1kshq7" }]
], t1 = J("corner-down-left", f3);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const m3 = [
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
], zc = J("cpu", m3);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const h3 = [
  ["ellipse", { cx: "12", cy: "5", rx: "9", ry: "3", key: "msslwz" }],
  ["path", { d: "M3 5V19A9 3 0 0 0 21 19V5", key: "1wlel7" }],
  ["path", { d: "M3 12A9 3 0 0 0 21 12", key: "mv7ke4" }]
], ni = J("database", h3);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const g3 = [
  ["path", { d: "M12 15V3", key: "m9g1x1" }],
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
  ["path", { d: "m7 10 5 5 5-5", key: "brsn70" }]
], wr = J("download", g3);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const p3 = [
  ["path", { d: "M15 3h6v6", key: "1q9fwt" }],
  ["path", { d: "M10 14 21 3", key: "gplh6r" }],
  ["path", { d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6", key: "a6xqqp" }]
], x3 = J("external-link", p3);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const y3 = [
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
], Mc = J("file-text", y3);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const v3 = [
  ["line", { x1: "4", x2: "20", y1: "9", y2: "9", key: "4lhtct" }],
  ["line", { x1: "4", x2: "20", y1: "15", y2: "15", key: "vyu0kd" }],
  ["line", { x1: "10", x2: "8", y1: "3", y2: "21", key: "1ggp8o" }],
  ["line", { x1: "16", x2: "14", y1: "3", y2: "21", key: "weycgp" }]
], b3 = J("hash", v3);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const S3 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 16v-4", key: "1dtifu" }],
  ["path", { d: "M12 8h.01", key: "e9boi3" }]
], j3 = J("info", S3);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const C3 = [
  ["path", { d: "m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4", key: "g0fldk" }],
  ["path", { d: "m21 2-9.6 9.6", key: "1j0ho8" }],
  ["circle", { cx: "7.5", cy: "15.5", r: "5.5", key: "yqb3hr" }]
], Ac = J("key", C3);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const N3 = [
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
], wc = J("layers", N3);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const E3 = [
  ["rect", { width: "7", height: "9", x: "3", y: "3", rx: "1", key: "10lvy0" }],
  ["rect", { width: "7", height: "5", x: "14", y: "3", rx: "1", key: "16une8" }],
  ["rect", { width: "7", height: "9", x: "14", y: "12", rx: "1", key: "1hutg5" }],
  ["rect", { width: "7", height: "5", x: "3", y: "16", rx: "1", key: "ldoo1y" }]
], T3 = J("layout-dashboard", E3);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const _3 = [
  ["path", { d: "M3 5h.01", key: "18ugdj" }],
  ["path", { d: "M3 12h.01", key: "nlz23k" }],
  ["path", { d: "M3 19h.01", key: "noohij" }],
  ["path", { d: "M8 5h13", key: "1pao27" }],
  ["path", { d: "M8 12h13", key: "1za7za" }],
  ["path", { d: "M8 19h13", key: "m83p4d" }]
], z3 = J("list", _3);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const M3 = [["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]], M1 = J("loader-circle", M3);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const A3 = [
  ["path", { d: "M15 3h6v6", key: "1q9fwt" }],
  ["path", { d: "m21 3-7 7", key: "1l2asr" }],
  ["path", { d: "m3 21 7-7", key: "tjx5ai" }],
  ["path", { d: "M9 21H3v-6", key: "wtvkvv" }]
], w3 = J("maximize-2", A3);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const k3 = [
  ["path", { d: "M4 5h16", key: "1tepv9" }],
  ["path", { d: "M4 12h16", key: "1lakjw" }],
  ["path", { d: "M4 19h16", key: "1djgab" }]
], O3 = J("menu", k3);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const D3 = [
  [
    "path",
    {
      d: "M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",
      key: "kfwtm"
    }
  ]
], l1 = J("moon", D3);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const R3 = [
  ["rect", { x: "16", y: "16", width: "6", height: "6", rx: "1", key: "4q2zg0" }],
  ["rect", { x: "2", y: "16", width: "6", height: "6", rx: "1", key: "8cvhb9" }],
  ["rect", { x: "9", y: "2", width: "6", height: "6", rx: "1", key: "1egb70" }],
  ["path", { d: "M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3", key: "1jsf9p" }],
  ["path", { d: "M12 12V8", key: "2874zd" }]
], A1 = J("network", R3);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const U3 = [
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
], a1 = J("palette", U3);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const H3 = [
  ["rect", { x: "14", y: "3", width: "5", height: "18", rx: "1", key: "kaeet6" }],
  ["rect", { x: "5", y: "3", width: "5", height: "18", rx: "1", key: "1wsw3u" }]
], B3 = J("pause", H3);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const L3 = [
  [
    "path",
    {
      d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
      key: "1a8usu"
    }
  ]
], q3 = J("pen", L3);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Y3 = [
  [
    "path",
    {
      d: "M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",
      key: "10ikf1"
    }
  ]
], kc = J("play", Y3);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const G3 = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
], Oc = J("plus", G3);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const V3 = [
  ["path", { d: "M12 2v10", key: "mnfbl" }],
  ["path", { d: "M18.4 6.6a9 9 0 1 1-12.77.04", key: "obofu9" }]
], Dc = J("power", V3);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const X3 = [
  ["path", { d: "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8", key: "v9h5vc" }],
  ["path", { d: "M21 3v5h-5", key: "1q7to0" }],
  ["path", { d: "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16", key: "3uifl3" }],
  ["path", { d: "M8 16H3v5", key: "1cv678" }]
], ti = J("refresh-cw", X3);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Q3 = [
  ["path", { d: "M17 3v10", key: "15fgeh" }],
  ["path", { d: "m12.67 5.5 8.66 5", key: "1gpheq" }],
  ["path", { d: "m12.67 10.5 8.66-5", key: "1dkfa6" }],
  [
    "path",
    { d: "M9 17a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-2z", key: "swwfx4" }
  ]
], w1 = J("regex", Q3);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Z3 = [
  [
    "path",
    {
      d: "M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",
      key: "1c8476"
    }
  ],
  ["path", { d: "M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7", key: "1ydtos" }],
  ["path", { d: "M7 3v4a1 1 0 0 0 1 1h7", key: "t51u73" }]
], K3 = J("save", Z3);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const J3 = [
  ["circle", { cx: "6", cy: "6", r: "3", key: "1lh9wr" }],
  ["path", { d: "M8.12 8.12 12 12", key: "1alkpv" }],
  ["path", { d: "M20 4 8.12 15.88", key: "xgtan2" }],
  ["circle", { cx: "6", cy: "18", r: "3", key: "fqmcym" }],
  ["path", { d: "M14.8 14.8 20 20", key: "ptml3r" }]
], $3 = J("scissors", J3);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const F3 = [
  ["path", { d: "m21 21-4.34-4.34", key: "14j7rj" }],
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }]
], Wn = J("search", F3);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const W3 = [
  [
    "path",
    {
      d: "M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",
      key: "1ffxy3"
    }
  ],
  ["path", { d: "m21.854 2.147-10.94 10.939", key: "12cjpa" }]
], I3 = J("send", W3);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const P3 = [
  ["rect", { width: "20", height: "8", x: "2", y: "2", rx: "2", ry: "2", key: "ngkwjq" }],
  ["rect", { width: "20", height: "8", x: "2", y: "14", rx: "2", ry: "2", key: "iecqi9" }],
  ["line", { x1: "6", x2: "6.01", y1: "6", y2: "6", key: "16zg32" }],
  ["line", { x1: "6", x2: "6.01", y1: "18", y2: "18", key: "nzw8ys" }]
], k1 = J("server", P3);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const eh = [
  [
    "path",
    {
      d: "M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",
      key: "1i5ecw"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
], O1 = J("settings", eh);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const th = [
  ["path", { d: "M14 17H5", key: "gfn3mx" }],
  ["path", { d: "M19 7h-9", key: "6i9tg" }],
  ["circle", { cx: "17", cy: "17", r: "3", key: "18b49y" }],
  ["circle", { cx: "7", cy: "7", r: "3", key: "dfmy0x" }]
], Rc = J("settings-2", th);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const lh = [
  ["circle", { cx: "12", cy: "12", r: "4", key: "4exip2" }],
  ["path", { d: "M12 2v2", key: "tus03m" }],
  ["path", { d: "M12 20v2", key: "1lh1kg" }],
  ["path", { d: "m4.93 4.93 1.41 1.41", key: "149t6j" }],
  ["path", { d: "m17.66 17.66 1.41 1.41", key: "ptbguv" }],
  ["path", { d: "M2 12h2", key: "1t8f8n" }],
  ["path", { d: "M20 12h2", key: "1q8mjw" }],
  ["path", { d: "m6.34 17.66-1.41 1.41", key: "1m8zz5" }],
  ["path", { d: "m19.07 4.93-1.41 1.41", key: "1shlcs" }]
], ah = J("sun", lh);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const nh = [
  ["path", { d: "M12 19h8", key: "baeox8" }],
  ["path", { d: "m4 17 6-6-6-6", key: "1yngyt" }]
], $a = J("terminal", nh);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ih = [
  ["path", { d: "M10 11v6", key: "nco0om" }],
  ["path", { d: "M14 11v6", key: "outv1u" }],
  ["path", { d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6", key: "miytrc" }],
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2", key: "e791ji" }]
], ii = J("trash-2", ih);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const rh = [
  ["path", { d: "M12 3v12", key: "1x0j5s" }],
  ["path", { d: "m17 8-5-5-5 5", key: "7q97r8" }],
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }]
], uh = J("upload", rh);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const sh = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
], Uc = J("x", sh);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ch = [
  [
    "path",
    {
      d: "M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",
      key: "1xq2db"
    }
  ]
], Hc = J("zap", ch), oh = () => /* @__PURE__ */ r.jsx("style", { children: `
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;500;600&family=JetBrains+Mono:wght@300;400;500&display=swap');
    
    :root {
      --font-sans: 'Inter', system-ui, -apple-system, sans-serif;
      --font-mono: 'JetBrains Mono', monospace;
    }

    body {
      font-family: var(--font-sans);
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }
    
    .font-mono {
      font-family: var(--font-mono);
    }
    
    /* Custom Scrollbar for dark theme - Minimalist */
    ::-webkit-scrollbar {
      width: 6px;
      height: 6px;
    }
    ::-webkit-scrollbar-track {
      background: transparent;
    }
    ::-webkit-scrollbar-thumb {
      background: rgba(63, 63, 70, 0.4); /* zinc-700 with opacity */
      border-radius: 3px;
    }
    ::-webkit-scrollbar-thumb:hover {
      background: rgba(82, 82, 91, 0.6); /* zinc-600 with opacity */
    }

    /* Animation Utilities */
    .animate-float {
      animation: float 6s ease-in-out infinite;
    }
    .animate-in {
      animation: fadeIn 0.3s ease-out forwards;
    }
    .fade-in {
      opacity: 0;
      animation: fadeIn 0.3s ease-out forwards;
    }
    
    @keyframes float {
      0% { transform: translateY(0px); }
      50% { transform: translateY(-10px); }
      100% { transform: translateY(0px); }
    }
    
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(5px); }
      to { opacity: 1; transform: translateY(0); }
    }

    /* Utility to hide scrollbar but keep functionality */
    .no-scrollbar::-webkit-scrollbar {
      display: none;
    }
    .no-scrollbar {
      -ms-overflow-style: none;
      scrollbar-width: none;
    }
  ` }), pc = [
  // 导航命令
  {
    id: "nav-memory",
    icon: z3,
    label: "前往记忆流",
    description: "查看所有记忆片段的时间线",
    action: (s) => s("/memory"),
    keywords: ["memory", "stream", "timeline", "记忆"],
    type: "navigation"
  },
  {
    id: "nav-graph",
    icon: A1,
    label: "前往世界图谱",
    description: "探索实体关系可视化网络",
    action: (s) => s("/graph"),
    keywords: ["graph", "world", "map", "图谱"],
    type: "navigation"
  },
  {
    id: "nav-brain",
    icon: T1,
    label: "前往大脑控制台",
    description: "记忆操作、总结与向量化",
    action: (s) => s("/processing"),
    keywords: ["brain", "console", "summarize", "大脑"],
    type: "navigation"
  },
  {
    id: "nav-api",
    icon: Ac,
    label: "API 预设配置",
    description: "管理 LLM 连接设置",
    action: (s) => s("/api"),
    keywords: ["api", "config", "llm", "设置"],
    type: "navigation"
  },
  {
    id: "nav-dev",
    icon: $a,
    label: "开发日志",
    description: "查看系统运行日志和状态",
    action: (s) => s("/dev"),
    keywords: ["dev", "log", "debug", "日志"],
    type: "navigation"
  },
  {
    id: "nav-settings",
    icon: O1,
    label: "系统设置",
    description: "调整 Engram 全局选项",
    action: (s) => s("/settings"),
    keywords: ["settings", "config", "option", "选项"],
    type: "navigation"
  }
];
function dh(s) {
  const u = s.toLowerCase().trim();
  return u ? pc.filter((c) => {
    var o;
    return c.label.toLowerCase().includes(u) || ((o = c.description) == null ? void 0 : o.toLowerCase().includes(u)) || c.keywords.some((m) => m.toLowerCase().includes(u));
  }) : pc;
}
const fh = {
  name: "Paper (Light)",
  colors: {
    background: "oklch(1.0000 0 0)",
    foreground: "oklch(0.1884 0.0128 248.5103)",
    card: "oklch(0.9784 0.0011 197.1387)",
    cardForeground: "oklch(0.1884 0.0128 248.5103)",
    popover: "oklch(1.0000 0 0)",
    popoverForeground: "oklch(0.1884 0.0128 248.5103)",
    primary: "oklch(0.6723 0.1606 244.9955)",
    primaryForeground: "oklch(1.0000 0 0)",
    secondary: "oklch(0.1884 0.0128 248.5103)",
    secondaryForeground: "oklch(1.0000 0 0)",
    muted: "oklch(0.9222 0.0013 286.3737)",
    mutedForeground: "oklch(0.1884 0.0128 248.5103)",
    accent: "oklch(0.9392 0.0166 250.8453)",
    accentForeground: "oklch(0.6723 0.1606 244.9955)",
    destructive: "oklch(0.6188 0.2376 25.7658)",
    destructiveForeground: "oklch(1.0000 0 0)",
    border: "oklch(0.9317 0.0118 231.6594)",
    input: "oklch(0.9809 0.0025 228.7836)",
    ring: "oklch(0.6818 0.1584 243.3540)",
    chart1: "oklch(0.6723 0.1606 244.9955)",
    chart2: "oklch(0.6907 0.1554 160.3454)",
    chart3: "oklch(0.8214 0.1600 82.5337)",
    chart4: "oklch(0.7064 0.1822 151.7125)",
    chart5: "oklch(0.5919 0.2186 10.5826)",
    sidebar: "oklch(0.9784 0.0011 197.1387)",
    sidebarForeground: "oklch(0.1884 0.0128 248.5103)",
    sidebarPrimary: "oklch(0.6723 0.1606 244.9955)",
    sidebarPrimaryForeground: "oklch(1.0000 0 0)",
    sidebarAccent: "oklch(0.9392 0.0166 250.8453)",
    sidebarAccentForeground: "oklch(0.6723 0.1606 244.9955)",
    sidebarBorder: "oklch(0.9271 0.0101 238.5177)",
    sidebarRing: "oklch(0.6818 0.1584 243.3540)"
  },
  variables: {
    radius: "1.3rem"
  }
}, mh = {
  name: "Claude (Dark)",
  colors: {
    background: "oklch(0.2679 0.0036 106.6427)",
    foreground: "oklch(0.8074 0.0142 93.0137)",
    card: "oklch(0.2679 0.0036 106.6427)",
    cardForeground: "oklch(0.8074 0.0142 93.0137)",
    popover: "oklch(0.2357 0.0024 67.7077)",
    popoverForeground: "oklch(0.8074 0.0142 93.0137)",
    primary: "oklch(0.6724 0.1308 38.7559)",
    primaryForeground: "oklch(1.0000 0 0)",
    secondary: "oklch(0.2213 0.0038 106.7070)",
    secondaryForeground: "oklch(0.8074 0.0142 93.0137)",
    muted: "oklch(0.2357 0.0024 67.7077)",
    mutedForeground: "oklch(0.7713 0.0169 99.0657)",
    accent: "oklch(0.6724 0.1308 38.7559)",
    accentForeground: "oklch(1.0000 0 0)",
    destructive: "oklch(0.6368 0.2078 25.3313)",
    destructiveForeground: "oklch(1.0000 0 0)",
    border: "oklch(0.3618 0.0101 106.8928)",
    input: "oklch(0.4336 0.0113 100.2195)",
    ring: "oklch(0.6724 0.1308 38.7559)",
    chart1: "oklch(0.6724 0.1308 38.7559)",
    chart2: "oklch(0.6898 0.1581 290.4107)",
    chart3: "oklch(0.8816 0.0276 93.1280)",
    chart4: "oklch(0.3074 0.0516 289.3230)",
    chart5: "oklch(0.6368 0.2078 25.3313)",
    sidebar: "oklch(0.2357 0.0024 67.7077)",
    sidebarForeground: "oklch(0.7713 0.0169 99.0657)",
    sidebarPrimary: "oklch(0.6724 0.1308 38.7559)",
    sidebarPrimaryForeground: "oklch(1.0000 0 0)",
    sidebarAccent: "oklch(0.2213 0.0038 106.7070)",
    sidebarAccentForeground: "oklch(0.8074 0.0142 93.0137)",
    sidebarBorder: "oklch(0.3618 0.0101 106.8928)",
    sidebarRing: "oklch(0.6724 0.1308 38.7559)"
  },
  variables: {
    radius: "0.4rem"
  }
}, hh = {
  name: "Twitter (Dark)",
  colors: {
    background: "oklch(0 0 0)",
    foreground: "oklch(0.9328 0.0025 228.7857)",
    card: "oklch(0 0 0)",
    // Matching background for seamless look, or slightly lighter
    cardForeground: "oklch(0.9328 0.0025 228.7857)",
    popover: "oklch(0 0 0)",
    popoverForeground: "oklch(0.9328 0.0025 228.7857)",
    primary: "oklch(0.6692 0.1607 245.0110)",
    primaryForeground: "oklch(1.0000 0 0)",
    secondary: "oklch(0.2097 0.0080 274.5332)",
    // Using card color from ref as secondary
    secondaryForeground: "oklch(0.8853 0 0)",
    muted: "oklch(0.2090 0 0)",
    mutedForeground: "oklch(0.5637 0.0078 247.9662)",
    accent: "oklch(0.1928 0.0331 242.5459)",
    accentForeground: "oklch(0.6692 0.1607 245.0110)",
    destructive: "oklch(0.6188 0.2376 25.7658)",
    destructiveForeground: "oklch(1.0000 0 0)",
    border: "oklch(0.2674 0.0047 248.0045)",
    input: "oklch(0.3020 0.0288 244.8244)",
    ring: "oklch(0.6818 0.1584 243.3540)",
    chart1: "oklch(0.6723 0.1606 244.9955)",
    chart2: "oklch(0.6907 0.1554 160.3454)",
    chart3: "oklch(0.8214 0.1600 82.5337)",
    chart4: "oklch(0.7064 0.1822 151.7125)",
    chart5: "oklch(0.5919 0.2186 10.5826)",
    sidebar: "oklch(0 0 0)",
    sidebarForeground: "oklch(0.9328 0.0025 228.7857)",
    sidebarPrimary: "oklch(0.6692 0.1607 245.0110)",
    sidebarPrimaryForeground: "oklch(1.0000 0 0)",
    sidebarAccent: "oklch(0.1928 0.0331 242.5459)",
    sidebarAccentForeground: "oklch(0.6692 0.1607 245.0110)",
    sidebarBorder: "oklch(0.2674 0.0047 248.0045)",
    sidebarRing: "oklch(0.6818 0.1584 243.3540)"
  },
  variables: {
    radius: "1.3rem"
  }
}, gh = {
  name: "Discord (Dark)",
  colors: {
    background: "#313338",
    foreground: "#f2f3f5",
    card: "#2b2d31",
    cardForeground: "#f2f3f5",
    popover: "#313338",
    popoverForeground: "#f2f3f5",
    primary: "#5865f2",
    primaryForeground: "#ffffff",
    secondary: "#2b2d31",
    secondaryForeground: "#f2f3f5",
    muted: "#1e1f22",
    mutedForeground: "#949ba4",
    accent: "#3f4147",
    accentForeground: "#f2f3f5",
    destructive: "#fa777c",
    destructiveForeground: "#313338",
    border: "#1e1f22",
    input: "#1e1f22",
    ring: "#5865f2",
    chart1: "#5865f2",
    chart2: "#23a559",
    chart3: "#f0b232",
    chart4: "#00a8fc",
    chart5: "#eb459e",
    sidebar: "#1e1f22",
    sidebarForeground: "#949ba4",
    sidebarPrimary: "#5865f2",
    sidebarPrimaryForeground: "#ffffff",
    sidebarAccent: "#3f4147",
    sidebarAccentForeground: "#f2f3f5",
    sidebarBorder: "#1e1f22",
    sidebarRing: "#5865f2"
  },
  variables: {
    radius: "0.25rem"
  }
}, ph = {
  name: "Catppuccin Mocha",
  colors: {
    background: "#1e1e2e",
    // foreground: '#cdd6f4', // Old Text
    foreground: "#cba6f7",
    // Modified: Mauve as requested
    card: "#313244",
    cardForeground: "#cba6f7",
    // Also match text
    popover: "#1e1e2e",
    popoverForeground: "#cba6f7",
    primary: "#89b4fa",
    primaryForeground: "#1e1e2e",
    secondary: "#45475a",
    secondaryForeground: "#cba6f7",
    muted: "#313244",
    mutedForeground: "#a6adc8",
    accent: "#45475a",
    accentForeground: "#cba6f7",
    destructive: "#f38ba8",
    destructiveForeground: "#1e1e2e",
    border: "#313244",
    input: "#313244",
    ring: "#89b4fa",
    chart1: "#89b4fa",
    chart2: "#a6e3a1",
    chart3: "#f9e2af",
    chart4: "#fab387",
    chart5: "#cba6f7",
    sidebar: "#181825",
    sidebarForeground: "#cba6f7",
    // Mauve
    sidebarPrimary: "#89b4fa",
    sidebarPrimaryForeground: "#1e1e2e",
    sidebarAccent: "#313244",
    sidebarAccentForeground: "#cba6f7",
    sidebarBorder: "#11111b",
    sidebarRing: "#89b4fa"
  },
  variables: {
    radius: "0.5rem"
  }
}, xh = {
  name: "SillyTavern (继承)",
  colors: {
    background: "var(--SmartThemeBlurTintColor)",
    foreground: "var(--SmartThemeBodyColor)",
    card: "var(--SmartThemeBlurTintColor)",
    cardForeground: "var(--SmartThemeBodyColor)",
    popover: "var(--SmartThemeBlurTintColor)",
    popoverForeground: "var(--SmartThemeBodyColor)",
    primary: "var(--SmartThemeQuoteColor)",
    primaryForeground: "var(--SmartThemeBodyColor)",
    secondary: "var(--SmartThemeBorderColor)",
    secondaryForeground: "var(--SmartThemeBodyColor)",
    muted: "rgba(0,0,0,0.2)",
    mutedForeground: "rgba(255,255,255,0.5)",
    accent: "var(--SmartThemeQuoteColor)",
    accentForeground: "var(--SmartThemeBodyColor)",
    destructive: "var(--SmartThemeBorderColor)",
    destructiveForeground: "var(--SmartThemeBodyColor)",
    border: "var(--SmartThemeBorderColor)",
    input: "var(--SmartThemeBorderColor)",
    ring: "var(--SmartThemeQuoteColor)",
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
}, zr = {
  sillytavern: xh,
  // SillyTavern 继承主题
  paperLight: fh,
  twitterDark: hh,
  claudeDark: mh,
  catppuccin: ph,
  discord: gh
}, We = [];
for (let s = 0; s < 256; ++s)
  We.push((s + 256).toString(16).slice(1));
function yh(s, u = 0) {
  return (We[s[u + 0]] + We[s[u + 1]] + We[s[u + 2]] + We[s[u + 3]] + "-" + We[s[u + 4]] + We[s[u + 5]] + "-" + We[s[u + 6]] + We[s[u + 7]] + "-" + We[s[u + 8]] + We[s[u + 9]] + "-" + We[s[u + 10]] + We[s[u + 11]] + We[s[u + 12]] + We[s[u + 13]] + We[s[u + 14]] + We[s[u + 15]]).toLowerCase();
}
let dc;
const vh = new Uint8Array(16);
function bh() {
  if (!dc) {
    if (typeof crypto > "u" || !crypto.getRandomValues)
      throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
    dc = crypto.getRandomValues.bind(crypto);
  }
  return dc(vh);
}
const Sh = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto), n1 = { randomUUID: Sh };
function jh(s, u, c) {
  var m;
  s = s || {};
  const o = s.random ?? ((m = s.rng) == null ? void 0 : m.call(s)) ?? bh();
  if (o.length < 16)
    throw new Error("Random bytes length must be >= 16");
  return o[6] = o[6] & 15 | 64, o[8] = o[8] & 63 | 128, yh(o);
}
function Ch(s, u, c) {
  return n1.randomUUID && !s ? n1.randomUUID() : jh(s);
}
var xc = function(s, u) {
  return xc = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(c, o) {
    c.__proto__ = o;
  } || function(c, o) {
    for (var m in o) Object.prototype.hasOwnProperty.call(o, m) && (c[m] = o[m]);
  }, xc(s, u);
};
function ri(s, u) {
  if (typeof u != "function" && u !== null)
    throw new TypeError("Class extends value " + String(u) + " is not a constructor or null");
  xc(s, u);
  function c() {
    this.constructor = s;
  }
  s.prototype = u === null ? Object.create(u) : (c.prototype = u.prototype, new c());
}
function yc(s) {
  var u = typeof Symbol == "function" && Symbol.iterator, c = u && s[u], o = 0;
  if (c) return c.call(s);
  if (s && typeof s.length == "number") return {
    next: function() {
      return s && o >= s.length && (s = void 0), { value: s && s[o++], done: !s };
    }
  };
  throw new TypeError(u ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function vc(s, u) {
  var c = typeof Symbol == "function" && s[Symbol.iterator];
  if (!c) return s;
  var o = c.call(s), m, h = [], v;
  try {
    for (; (u === void 0 || u-- > 0) && !(m = o.next()).done; ) h.push(m.value);
  } catch (C) {
    v = { error: C };
  } finally {
    try {
      m && !m.done && (c = o.return) && c.call(o);
    } finally {
      if (v) throw v.error;
    }
  }
  return h;
}
function bc(s, u, c) {
  if (c || arguments.length === 2) for (var o = 0, m = u.length, h; o < m; o++)
    (h || !(o in u)) && (h || (h = Array.prototype.slice.call(u, 0, o)), h[o] = u[o]);
  return s.concat(h || Array.prototype.slice.call(u));
}
function Gt(s) {
  return typeof s == "function";
}
function D1(s) {
  var u = function(o) {
    Error.call(o), o.stack = new Error().stack;
  }, c = s(u);
  return c.prototype = Object.create(Error.prototype), c.prototype.constructor = c, c;
}
var fc = D1(function(s) {
  return function(c) {
    s(this), this.message = c ? c.length + ` errors occurred during unsubscription:
` + c.map(function(o, m) {
      return m + 1 + ") " + o.toString();
    }).join(`
  `) : "", this.name = "UnsubscriptionError", this.errors = c;
  };
});
function Sc(s, u) {
  if (s) {
    var c = s.indexOf(u);
    0 <= c && s.splice(c, 1);
  }
}
var Lr = (function() {
  function s(u) {
    this.initialTeardown = u, this.closed = !1, this._parentage = null, this._finalizers = null;
  }
  return s.prototype.unsubscribe = function() {
    var u, c, o, m, h;
    if (!this.closed) {
      this.closed = !0;
      var v = this._parentage;
      if (v)
        if (this._parentage = null, Array.isArray(v))
          try {
            for (var C = yc(v), p = C.next(); !p.done; p = C.next()) {
              var b = p.value;
              b.remove(this);
            }
          } catch (L) {
            u = { error: L };
          } finally {
            try {
              p && !p.done && (c = C.return) && c.call(C);
            } finally {
              if (u) throw u.error;
            }
          }
        else
          v.remove(this);
      var _ = this.initialTeardown;
      if (Gt(_))
        try {
          _();
        } catch (L) {
          h = L instanceof fc ? L.errors : [L];
        }
      var T = this._finalizers;
      if (T) {
        this._finalizers = null;
        try {
          for (var R = yc(T), Z = R.next(); !Z.done; Z = R.next()) {
            var B = Z.value;
            try {
              i1(B);
            } catch (L) {
              h = h ?? [], L instanceof fc ? h = bc(bc([], vc(h)), vc(L.errors)) : h.push(L);
            }
          }
        } catch (L) {
          o = { error: L };
        } finally {
          try {
            Z && !Z.done && (m = R.return) && m.call(R);
          } finally {
            if (o) throw o.error;
          }
        }
      }
      if (h)
        throw new fc(h);
    }
  }, s.prototype.add = function(u) {
    var c;
    if (u && u !== this)
      if (this.closed)
        i1(u);
      else {
        if (u instanceof s) {
          if (u.closed || u._hasParent(this))
            return;
          u._addParent(this);
        }
        (this._finalizers = (c = this._finalizers) !== null && c !== void 0 ? c : []).push(u);
      }
  }, s.prototype._hasParent = function(u) {
    var c = this._parentage;
    return c === u || Array.isArray(c) && c.includes(u);
  }, s.prototype._addParent = function(u) {
    var c = this._parentage;
    this._parentage = Array.isArray(c) ? (c.push(u), c) : c ? [c, u] : u;
  }, s.prototype._removeParent = function(u) {
    var c = this._parentage;
    c === u ? this._parentage = null : Array.isArray(c) && Sc(c, u);
  }, s.prototype.remove = function(u) {
    var c = this._finalizers;
    c && Sc(c, u), u instanceof s && u._removeParent(this);
  }, s.EMPTY = (function() {
    var u = new s();
    return u.closed = !0, u;
  })(), s;
})(), R1 = Lr.EMPTY;
function U1(s) {
  return s instanceof Lr || s && "closed" in s && Gt(s.remove) && Gt(s.add) && Gt(s.unsubscribe);
}
function i1(s) {
  Gt(s) ? s() : s.unsubscribe();
}
var Nh = {
  Promise: void 0
}, Eh = {
  setTimeout: function(s, u) {
    for (var c = [], o = 2; o < arguments.length; o++)
      c[o - 2] = arguments[o];
    return setTimeout.apply(void 0, bc([s, u], vc(c)));
  },
  clearTimeout: function(s) {
    return clearTimeout(s);
  },
  delegate: void 0
};
function Th(s) {
  Eh.setTimeout(function() {
    throw s;
  });
}
function r1() {
}
function Mr(s) {
  s();
}
var Bc = (function(s) {
  ri(u, s);
  function u(c) {
    var o = s.call(this) || this;
    return o.isStopped = !1, c ? (o.destination = c, U1(c) && c.add(o)) : o.destination = Mh, o;
  }
  return u.create = function(c, o, m) {
    return new jc(c, o, m);
  }, u.prototype.next = function(c) {
    this.isStopped || this._next(c);
  }, u.prototype.error = function(c) {
    this.isStopped || (this.isStopped = !0, this._error(c));
  }, u.prototype.complete = function() {
    this.isStopped || (this.isStopped = !0, this._complete());
  }, u.prototype.unsubscribe = function() {
    this.closed || (this.isStopped = !0, s.prototype.unsubscribe.call(this), this.destination = null);
  }, u.prototype._next = function(c) {
    this.destination.next(c);
  }, u.prototype._error = function(c) {
    try {
      this.destination.error(c);
    } finally {
      this.unsubscribe();
    }
  }, u.prototype._complete = function() {
    try {
      this.destination.complete();
    } finally {
      this.unsubscribe();
    }
  }, u;
})(Lr), _h = (function() {
  function s(u) {
    this.partialObserver = u;
  }
  return s.prototype.next = function(u) {
    var c = this.partialObserver;
    if (c.next)
      try {
        c.next(u);
      } catch (o) {
        Er(o);
      }
  }, s.prototype.error = function(u) {
    var c = this.partialObserver;
    if (c.error)
      try {
        c.error(u);
      } catch (o) {
        Er(o);
      }
    else
      Er(u);
  }, s.prototype.complete = function() {
    var u = this.partialObserver;
    if (u.complete)
      try {
        u.complete();
      } catch (c) {
        Er(c);
      }
  }, s;
})(), jc = (function(s) {
  ri(u, s);
  function u(c, o, m) {
    var h = s.call(this) || this, v;
    return Gt(c) || !c ? v = {
      next: c ?? void 0,
      error: o ?? void 0,
      complete: m ?? void 0
    } : v = c, h.destination = new _h(v), h;
  }
  return u;
})(Bc);
function Er(s) {
  Th(s);
}
function zh(s) {
  throw s;
}
var Mh = {
  closed: !0,
  next: r1,
  error: zh,
  complete: r1
}, Ah = (function() {
  return typeof Symbol == "function" && Symbol.observable || "@@observable";
})();
function wh(s) {
  return s;
}
function kh(s) {
  return s.length === 0 ? wh : s.length === 1 ? s[0] : function(c) {
    return s.reduce(function(o, m) {
      return m(o);
    }, c);
  };
}
var u1 = (function() {
  function s(u) {
    u && (this._subscribe = u);
  }
  return s.prototype.lift = function(u) {
    var c = new s();
    return c.source = this, c.operator = u, c;
  }, s.prototype.subscribe = function(u, c, o) {
    var m = this, h = Dh(u) ? u : new jc(u, c, o);
    return Mr(function() {
      var v = m, C = v.operator, p = v.source;
      h.add(C ? C.call(h, p) : p ? m._subscribe(h) : m._trySubscribe(h));
    }), h;
  }, s.prototype._trySubscribe = function(u) {
    try {
      return this._subscribe(u);
    } catch (c) {
      u.error(c);
    }
  }, s.prototype.forEach = function(u, c) {
    var o = this;
    return c = s1(c), new c(function(m, h) {
      var v = new jc({
        next: function(C) {
          try {
            u(C);
          } catch (p) {
            h(p), v.unsubscribe();
          }
        },
        error: h,
        complete: m
      });
      o.subscribe(v);
    });
  }, s.prototype._subscribe = function(u) {
    var c;
    return (c = this.source) === null || c === void 0 ? void 0 : c.subscribe(u);
  }, s.prototype[Ah] = function() {
    return this;
  }, s.prototype.pipe = function() {
    for (var u = [], c = 0; c < arguments.length; c++)
      u[c] = arguments[c];
    return kh(u)(this);
  }, s.prototype.toPromise = function(u) {
    var c = this;
    return u = s1(u), new u(function(o, m) {
      var h;
      c.subscribe(function(v) {
        return h = v;
      }, function(v) {
        return m(v);
      }, function() {
        return o(h);
      });
    });
  }, s.create = function(u) {
    return new s(u);
  }, s;
})();
function s1(s) {
  var u;
  return (u = s ?? Nh.Promise) !== null && u !== void 0 ? u : Promise;
}
function Oh(s) {
  return s && Gt(s.next) && Gt(s.error) && Gt(s.complete);
}
function Dh(s) {
  return s && s instanceof Bc || Oh(s) && U1(s);
}
function Rh(s) {
  return Gt(s == null ? void 0 : s.lift);
}
function Uh(s) {
  return function(u) {
    if (Rh(u))
      return u.lift(function(c) {
        try {
          return s(c, this);
        } catch (o) {
          this.error(o);
        }
      });
    throw new TypeError("Unable to lift unknown Observable type");
  };
}
function Hh(s, u, c, o, m) {
  return new Bh(s, u, c, o, m);
}
var Bh = (function(s) {
  ri(u, s);
  function u(c, o, m, h, v, C) {
    var p = s.call(this, c) || this;
    return p.onFinalize = v, p.shouldUnsubscribe = C, p._next = o ? function(b) {
      try {
        o(b);
      } catch (_) {
        c.error(_);
      }
    } : s.prototype._next, p._error = h ? function(b) {
      try {
        h(b);
      } catch (_) {
        c.error(_);
      } finally {
        this.unsubscribe();
      }
    } : s.prototype._error, p._complete = m ? function() {
      try {
        m();
      } catch (b) {
        c.error(b);
      } finally {
        this.unsubscribe();
      }
    } : s.prototype._complete, p;
  }
  return u.prototype.unsubscribe = function() {
    var c;
    if (!this.shouldUnsubscribe || this.shouldUnsubscribe()) {
      var o = this.closed;
      s.prototype.unsubscribe.call(this), !o && ((c = this.onFinalize) === null || c === void 0 || c.call(this));
    }
  }, u;
})(Bc), Lh = D1(function(s) {
  return function() {
    s(this), this.name = "ObjectUnsubscribedError", this.message = "object unsubscribed";
  };
}), Lc = (function(s) {
  ri(u, s);
  function u() {
    var c = s.call(this) || this;
    return c.closed = !1, c.currentObservers = null, c.observers = [], c.isStopped = !1, c.hasError = !1, c.thrownError = null, c;
  }
  return u.prototype.lift = function(c) {
    var o = new c1(this, this);
    return o.operator = c, o;
  }, u.prototype._throwIfClosed = function() {
    if (this.closed)
      throw new Lh();
  }, u.prototype.next = function(c) {
    var o = this;
    Mr(function() {
      var m, h;
      if (o._throwIfClosed(), !o.isStopped) {
        o.currentObservers || (o.currentObservers = Array.from(o.observers));
        try {
          for (var v = yc(o.currentObservers), C = v.next(); !C.done; C = v.next()) {
            var p = C.value;
            p.next(c);
          }
        } catch (b) {
          m = { error: b };
        } finally {
          try {
            C && !C.done && (h = v.return) && h.call(v);
          } finally {
            if (m) throw m.error;
          }
        }
      }
    });
  }, u.prototype.error = function(c) {
    var o = this;
    Mr(function() {
      if (o._throwIfClosed(), !o.isStopped) {
        o.hasError = o.isStopped = !0, o.thrownError = c;
        for (var m = o.observers; m.length; )
          m.shift().error(c);
      }
    });
  }, u.prototype.complete = function() {
    var c = this;
    Mr(function() {
      if (c._throwIfClosed(), !c.isStopped) {
        c.isStopped = !0;
        for (var o = c.observers; o.length; )
          o.shift().complete();
      }
    });
  }, u.prototype.unsubscribe = function() {
    this.isStopped = this.closed = !0, this.observers = this.currentObservers = null;
  }, Object.defineProperty(u.prototype, "observed", {
    get: function() {
      var c;
      return ((c = this.observers) === null || c === void 0 ? void 0 : c.length) > 0;
    },
    enumerable: !1,
    configurable: !0
  }), u.prototype._trySubscribe = function(c) {
    return this._throwIfClosed(), s.prototype._trySubscribe.call(this, c);
  }, u.prototype._subscribe = function(c) {
    return this._throwIfClosed(), this._checkFinalizedStatuses(c), this._innerSubscribe(c);
  }, u.prototype._innerSubscribe = function(c) {
    var o = this, m = this, h = m.hasError, v = m.isStopped, C = m.observers;
    return h || v ? R1 : (this.currentObservers = null, C.push(c), new Lr(function() {
      o.currentObservers = null, Sc(C, c);
    }));
  }, u.prototype._checkFinalizedStatuses = function(c) {
    var o = this, m = o.hasError, h = o.thrownError, v = o.isStopped;
    m ? c.error(h) : v && c.complete();
  }, u.prototype.asObservable = function() {
    var c = new u1();
    return c.source = this, c;
  }, u.create = function(c, o) {
    return new c1(c, o);
  }, u;
})(u1), c1 = (function(s) {
  ri(u, s);
  function u(c, o) {
    var m = s.call(this) || this;
    return m.destination = c, m.source = o, m;
  }
  return u.prototype.next = function(c) {
    var o, m;
    (m = (o = this.destination) === null || o === void 0 ? void 0 : o.next) === null || m === void 0 || m.call(o, c);
  }, u.prototype.error = function(c) {
    var o, m;
    (m = (o = this.destination) === null || o === void 0 ? void 0 : o.error) === null || m === void 0 || m.call(o, c);
  }, u.prototype.complete = function() {
    var c, o;
    (o = (c = this.destination) === null || c === void 0 ? void 0 : c.complete) === null || o === void 0 || o.call(c);
  }, u.prototype._subscribe = function(c) {
    var o, m;
    return (m = (o = this.source) === null || o === void 0 ? void 0 : o.subscribe(c)) !== null && m !== void 0 ? m : R1;
  }, u;
})(Lc);
function qh(s, u) {
  return Uh(function(c, o) {
    var m = 0;
    c.subscribe(Hh(o, function(h) {
      return s.call(u, h, m++) && o.next(h);
    }));
  });
}
const Tr = new Lc(), Yh = {
  /**
   * 发布事件
   */
  emit(s) {
    Tr.next({
      ...s,
      timestamp: Date.now()
    });
  },
  /**
   * 订阅所有事件
   */
  subscribe(s) {
    const u = Tr.subscribe(s);
    return {
      unsubscribe: () => u.unsubscribe()
    };
  },
  /**
   * 订阅特定类型的事件
   */
  on(s, u) {
    const c = Tr.pipe(qh((o) => o.type === s)).subscribe((o) => u(o.payload));
    return {
      unsubscribe: () => c.unsubscribe()
    };
  },
  /**
   * 获取事件流（用于 RxJS 操作符）
   */
  asObservable() {
    return Tr.asObservable();
  }
};
var Te = /* @__PURE__ */ ((s) => (s[s.DEBUG = 0] = "DEBUG", s[s.INFO = 1] = "INFO", s[s.SUCCESS = 2] = "SUCCESS", s[s.WARN = 3] = "WARN", s[s.ERROR = 4] = "ERROR", s))(Te || {});
const kr = {
  0: { label: "DEBUG", icon: "●", color: "#6c757d" },
  1: { label: "INFO", icon: "●", color: "#17a2b8" },
  2: { label: "OK", icon: "●", color: "#28a745" },
  3: { label: "WARN", icon: "▲", color: "#ffc107" },
  4: { label: "ERROR", icon: "✕", color: "#dc3545" }
}, H1 = {
  maxEntries: 5e3,
  minLevel: 0
  /* DEBUG */
}, B1 = new Lc();
let cl = [], Pn = { ...H1 };
function Gh(s) {
  return new Date(s).toTimeString().slice(0, 8);
}
function Qa(s, u, c, o) {
  if (s < Pn.minLevel) return;
  const m = {
    id: Ch(),
    timestamp: Date.now(),
    level: s,
    module: u,
    message: c,
    data: o
  };
  cl.push(m), cl.length > Pn.maxEntries && (cl = cl.slice(-Pn.maxEntries)), B1.next(m);
}
function Vh() {
  Yh.subscribe((s) => {
    const c = {
      INGESTION_START: Te.INFO,
      INGESTION_COMPLETE: Te.SUCCESS,
      ENTITY_CREATED: Te.INFO,
      MEMORY_STORED: Te.SUCCESS,
      RETRIEVAL_START: Te.DEBUG,
      RETRIEVAL_COMPLETE: Te.SUCCESS,
      CHAT_CHANGED: Te.INFO,
      MESSAGE_RECEIVED: Te.DEBUG
    }[s.type] ?? Te.DEBUG;
    Qa(c, "EventBus", `${s.type}`, s.payload);
  });
}
const Oe = {
  /**
   * 初始化 Logger（纯内存模式）
   */
  init(s) {
    s && (Pn = { ...Pn, ...s }), cl = [], Vh(), Oe.info("Logger", "Logger 初始化完成");
  },
  /**
   * DEBUG 级别日志
   */
  debug(s, u, c) {
    Qa(Te.DEBUG, s, u, c);
  },
  /**
   * INFO 级别日志
   */
  info(s, u, c) {
    Qa(Te.INFO, s, u, c);
  },
  /**
   * SUCCESS 级别日志
   */
  success(s, u, c) {
    Qa(Te.SUCCESS, s, u, c);
  },
  /**
   * WARN 级别日志
   */
  warn(s, u, c) {
    Qa(Te.WARN, s, u, c);
  },
  /**
   * ERROR 级别日志
   */
  error(s, u, c) {
    Qa(Te.ERROR, s, u, c);
  },
  /**
   * 获取所有缓存日志
   */
  getLogs() {
    return [...cl];
  },
  /**
   * 订阅新日志
   */
  subscribe(s) {
    const u = B1.subscribe(s);
    return () => u.unsubscribe();
  },
  /**
   * 清空所有日志（仅内存）
   */
  clear() {
    cl = [], Oe.info("Logger", "日志已清空");
  },
  /**
   * 导出日志为 Markdown 格式
   */
  exportToMarkdown() {
    const s = /* @__PURE__ */ new Date();
    s.toISOString().slice(0, 10), s.toTimeString().slice(0, 8).replace(/:/g, "");
    const u = {
      [Te.DEBUG]: "DEBUG",
      [Te.INFO]: "INFO",
      [Te.SUCCESS]: "SUCCESS",
      [Te.WARN]: "WARN",
      [Te.ERROR]: "ERROR"
    };
    let c = `# Engram Debug Log

`;
    c += `- **导出时间**: ${s.toLocaleString("zh-CN")}
`, c += `- **版本**: 0.1.0
`, c += `- **日志条数**: ${cl.length}

`, c += `---

`, c += `## 日志记录

`, c += "```\n";
    for (const o of cl) {
      const m = Gh(o.timestamp), h = u[o.level].padEnd(7), v = o.module.padEnd(16);
      if (c += `[${m}] [${v}] ${h} ${o.message}
`, o.data !== void 0) {
        const C = JSON.stringify(o.data, null, 2).split(`
`).map((p) => `    ${p}`).join(`
`);
        c += `${C}
`;
      }
    }
    return c += "```\n", c;
  },
  /**
   * 获取导出文件名
   */
  getExportFilename() {
    const s = /* @__PURE__ */ new Date(), u = s.toISOString().slice(0, 10), c = s.toTimeString().slice(0, 8).replace(/:/g, "");
    return `engram_log_${u}_${c}.md`;
  }
}, L1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  DEFAULT_LOGGER_CONFIG: H1,
  LogLevel: Te,
  LogLevelConfig: kr,
  Logger: Oe
}, Symbol.toStringTag, { value: "Module" })), ta = Object.freeze({
  theme: "odysseia",
  presets: {},
  templates: {},
  promptTemplates: [],
  hasSeenWelcome: !1,
  lastReadVersion: "0.0.0"
});
class Rt {
  /**
   * 获取 SillyTavern context
   */
  static getContext() {
    var u, c;
    return (c = (u = window.SillyTavern) == null ? void 0 : u.getContext) == null ? void 0 : c.call(u);
  }
  /**
   * 获取扩展设置对象
   * 如果不存在则创建
   */
  static getExtensionSettings() {
    const u = this.getContext();
    return u != null && u.extensionSettings ? (u.extensionSettings[this.EXTENSION_NAME] || (u.extensionSettings[this.EXTENSION_NAME] = { ...ta }, Oe.debug("SettingsManager", "Initialized engram settings with defaults"), this.save()), u.extensionSettings[this.EXTENSION_NAME]) : (Oe.warn("SettingsManager", "SillyTavern context.extensionSettings not available"), { ...ta });
  }
  /**
   * 初始化设置（在扩展加载时调用）
   * 确保所有必需的字段都存在
   */
  static initSettings() {
    const u = this.getContext();
    if (!(u != null && u.extensionSettings)) {
      Oe.warn("SettingsManager", "Cannot init settings: context not available");
      return;
    }
    let c = !1;
    u.extensionSettings[this.EXTENSION_NAME] || (u.extensionSettings[this.EXTENSION_NAME] = { ...ta }, c = !0, Oe.info("SettingsManager", "Created engram settings"));
    const o = u.extensionSettings[this.EXTENSION_NAME];
    for (const m of Object.keys(ta))
      m in o || (o[m] = ta[m], c = !0, Oe.debug("SettingsManager", `Added missing field: ${m}`));
    c && this.save();
  }
  /**
   * Get a specific setting value
   */
  static get(u) {
    const o = this.getExtensionSettings()[u];
    return o !== void 0 ? o : ta[u];
  }
  /**
   * Save a specific setting value
   * 直接更新 context.extensionSettings 中的字段
   */
  static set(u, c) {
    const o = this.getContext();
    if (!(o != null && o.extensionSettings)) {
      Oe.warn("SettingsManager", "Cannot set: context.extensionSettings not available");
      return;
    }
    o.extensionSettings[this.EXTENSION_NAME] || (o.extensionSettings[this.EXTENSION_NAME] = { ...ta }), o.extensionSettings[this.EXTENSION_NAME][u] = c, Oe.debug("SettingsManager", `Set ${String(u)} = ${JSON.stringify(c)}`), this.save();
  }
  /**
   * 保存设置到服务器
   */
  static save() {
    const u = this.getContext();
    u != null && u.saveSettingsDebounced ? (u.saveSettingsDebounced(), Oe.debug("SettingsManager", "Saved via context.saveSettingsDebounced")) : Oe.warn("SettingsManager", "saveSettingsDebounced not available");
  }
  /**
   * Load settings from SillyTavern global state
   * 兼容旧代码的接口
   */
  static loadSettings() {
    return this.getExtensionSettings();
  }
  /**
   * 获取指定分类下已启用的提示词模板
   * @param category 模板分类
   * @returns 启用的模板，如果没有则返回 null
   */
  static getEnabledPromptTemplate(u) {
    return (this.get("promptTemplates") || []).find((o) => o.category === u && o.enabled) || null;
  }
}
Qe(Rt, "EXTENSION_NAME", "engram");
const Xh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  SettingsManager: Rt
}, Symbol.toStringTag, { value: "Module" }));
class Rl {
  /**
   * 初始化主题系统
   */
  static init() {
    this.injectStyles();
    let c = Rt.loadSettings().theme;
    c || (c = localStorage.getItem(this.STORAGE_KEY), c && Rt.set("theme", c));
    const o = zr[c] ? c : "claudeDark";
    this.setTheme(o), Oe.info("ThemeManager", `主题系统初始化完成: ${o}`);
  }
  /**
   * 切换主题
   */
  static setTheme(u) {
    zr[u] || (Oe.warn("ThemeManager", `未知主题: ${u}, 回退到 claudeDark`), u = "claudeDark"), this.currentTheme = u, Rt.set("theme", u), localStorage.setItem(this.STORAGE_KEY, u), this.applyThemeVariables(u);
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
    const u = "engram-styles";
    if (document.getElementById(u)) return;
    const c = document.createElement("link");
    c.id = u, c.rel = "stylesheet", c.type = "text/css", c.href = `scripts/extensions/Engram_project/dist/style.css?v=${Date.now()}`, document.head.appendChild(c);
  }
  /**
   * 应用 CSS 变量到根元素
   */
  static applyThemeVariables(u) {
    const c = zr[u];
    if (!c) return;
    const o = document.documentElement, m = (v, C) => {
      o.style.setProperty(v, C);
    };
    Object.entries(c.colors).forEach(([v, C]) => {
      let p = `--${v.replace(/([A-Z])/g, "-$1").toLowerCase()}`;
      p = p.replace(/(\d+)/, "-$1"), m(p, C);
    }), Object.entries(c.variables).forEach(([v, C]) => {
      m(`--${v}`, C);
    }), u !== "paperLight" ? o.classList.add("dark") : o.classList.remove("dark");
  }
}
Qe(Rl, "STORAGE_KEY", "engram-theme"), Qe(Rl, "currentTheme", "claudeDark");
const Qh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ThemeManager: Rl
}, Symbol.toStringTag, { value: "Module" })), q1 = D.createContext(void 0);
function Zh({ children: s }) {
  const [u, c] = D.useState(Rl.getTheme()), o = u !== "paperLight", m = (h) => {
    Rl.setTheme(h), c(h);
  };
  return D.useEffect(() => {
    const h = Rl.getTheme();
    h !== u && c(h);
  }, []), /* @__PURE__ */ r.jsx(q1.Provider, { value: { theme: u, setTheme: m, isDarkMode: o }, children: s });
}
function Kh() {
  const s = D.useContext(q1);
  if (s === void 0)
    throw new Error("useTheme must be used within a ThemeProvider");
  return s;
}
const Jh = ({ onNavigate: s }) => {
  const { setTheme: u } = Kh(), [c, o] = D.useState(""), [m, h] = D.useState(!1), [v, C] = D.useState(0), [p, b] = D.useState(pc), _ = D.useRef(null), T = [
    {
      id: "theme-paper-light",
      icon: ah,
      label: "主题: Paper Light (Twitter)",
      description: "清爽明亮的推特风格",
      action: () => u("paperLight"),
      keywords: ["theme", "light", "white", "twitter", "paper", "主题"],
      type: "action"
    },
    {
      id: "theme-twitter-dark",
      icon: l1,
      label: "主题: Twitter Dark",
      description: "纯黑、高对比度的推特深色风格",
      action: () => u("twitterDark"),
      keywords: ["theme", "dark", "black", "twitter", "blue", "主题"],
      type: "action"
    },
    {
      id: "theme-claude-dark",
      icon: l1,
      label: "主题: Claude Dark",
      description: "深色纸感风格",
      action: () => u("claudeDark"),
      keywords: ["theme", "dark", "claude", "paper", "主题"],
      type: "action"
    },
    {
      id: "theme-catppuccin",
      icon: a1,
      label: "主题: Catppuccin Mocha",
      description: "柔和的粉彩深色主题",
      action: () => u("catppuccin"),
      keywords: ["theme", "dark", "catppuccin", "mocha", "主题"],
      type: "action"
    },
    {
      id: "theme-discord",
      icon: a1,
      label: "主题: Discord Dark",
      description: "经典的 Discord 深色风格",
      action: () => u("discord"),
      keywords: ["theme", "dark", "discord", "game", "主题"],
      type: "action"
    }
  ];
  D.useEffect(() => {
    const B = dh(c), L = c.toLowerCase().trim(), $ = T.filter(
      (H) => {
        var ee;
        return !L || H.label.toLowerCase().includes(L) || ((ee = H.description) == null ? void 0 : ee.toLowerCase().includes(L)) || H.keywords.some((q) => q.toLowerCase().includes(L));
      }
    );
    b([...B, ...$]), C(0);
  }, [c]), D.useEffect(() => {
    const B = (L) => {
      (L.metaKey || L.ctrlKey) && L.key === "k" && (L.preventDefault(), h(!0));
    };
    return window.addEventListener("keydown", B), () => window.removeEventListener("keydown", B);
  }, []), D.useEffect(() => {
    m && setTimeout(() => {
      var B;
      return (B = _.current) == null ? void 0 : B.focus();
    }, 50);
  }, [m]);
  const R = (B) => {
    const L = p.length + (c ? 1 : 0);
    switch (B.key) {
      case "ArrowDown":
        B.preventDefault(), C(($) => ($ + 1) % L);
        break;
      case "ArrowUp":
        B.preventDefault(), C(($) => ($ - 1 + L) % L);
        break;
      case "Enter":
        B.preventDefault(), Z();
        break;
      case "Escape":
        h(!1);
        break;
    }
  }, Z = () => {
    p.length > 0 && v < p.length ? p[v].action(s) : c && (console.log("Searching memory for:", c), s("/memory")), h(!1), o("");
  };
  return /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
    /* @__PURE__ */ r.jsxs(
      "button",
      {
        onClick: () => h(!0),
        className: "flex items-center gap-2 px-3 py-1.5 rounded-md text-sm text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-colors border border-transparent hover:border-border",
        title: "搜索 (Cmd+K)",
        children: [
          /* @__PURE__ */ r.jsx(Wn, { size: 18 }),
          /* @__PURE__ */ r.jsx("span", { className: "hidden md:inline text-xs opacity-70", children: "搜索..." }),
          /* @__PURE__ */ r.jsxs("kbd", { className: "hidden md:inline-flex h-5 items-center gap-1 rounded border border-border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground ml-2", children: [
            /* @__PURE__ */ r.jsx("span", { className: "text-xs", children: "⌘" }),
            "K"
          ] })
        ]
      }
    ),
    m && /* @__PURE__ */ r.jsx(
      "div",
      {
        className: "fixed inset-0 z-[100] flex items-start justify-center pt-[20vh] px-4 animate-in fade-in duration-200",
        style: {
          height: "100dvh",
          width: "100vw",
          backgroundColor: "rgba(0,0,0,0.5)",
          // Explicit semi-transparent black
          backdropFilter: "blur(4px)"
        },
        onClick: (B) => {
          B.target === B.currentTarget && h(!1);
        },
        children: /* @__PURE__ */ r.jsxs(
          "div",
          {
            className: "w-full max-w-xl border border-border rounded-xl shadow-2xl overflow-hidden flex flex-col animate-in zoom-in-95 slide-in-from-top-4 duration-200",
            style: {
              backgroundColor: "var(--popover)",
              // Force theme background color
              color: "var(--popover-foreground)"
            },
            children: [
              /* @__PURE__ */ r.jsxs("div", { className: "flex items-center gap-3 px-4 py-3 border-b border-border/50", children: [
                /* @__PURE__ */ r.jsx(Wn, { size: 20, className: "text-muted-foreground shrink-0" }),
                /* @__PURE__ */ r.jsx(
                  "input",
                  {
                    ref: _,
                    type: "text",
                    className: "flex-1 bg-transparent border-none outline-none text-lg text-foreground placeholder:text-muted-foreground/50",
                    placeholder: "输入命令、跳转页面或搜索记忆...",
                    value: c,
                    onChange: (B) => o(B.target.value),
                    onKeyDown: R
                  }
                ),
                /* @__PURE__ */ r.jsx("div", { className: "text-[10px] text-muted-foreground border border-border px-1.5 py-0.5 rounded bg-muted/50", children: "ESC" })
              ] }),
              /* @__PURE__ */ r.jsxs("div", { className: "max-h-[60vh] overflow-y-auto p-2 scroll-smooth", children: [
                p.length > 0 && /* @__PURE__ */ r.jsxs("div", { className: "space-y-1", children: [
                  /* @__PURE__ */ r.jsx("div", { className: "px-2 py-1.5 text-xs font-semibold text-muted-foreground/70 uppercase tracking-wider", children: "建议操作" }),
                  p.map((B, L) => /* @__PURE__ */ r.jsxs(
                    "div",
                    {
                      className: `flex items-center gap-3 px-3 py-2.5 rounded-lg cursor-pointer transition-colors ${L === v ? "bg-primary/10 text-primary" : "text-foreground hover:bg-muted/50"}`,
                      onClick: () => {
                        B.action(s), h(!1), o("");
                      },
                      onMouseEnter: () => C(L),
                      children: [
                        /* @__PURE__ */ r.jsx(B.icon, { size: 18, className: `shrink-0 ${L === v ? "text-primary" : "text-muted-foreground"}` }),
                        /* @__PURE__ */ r.jsxs("div", { className: "flex-1 min-w-0", children: [
                          /* @__PURE__ */ r.jsx("div", { className: "text-sm font-medium", children: B.label }),
                          B.description && /* @__PURE__ */ r.jsx("div", { className: "text-xs text-muted-foreground/80 truncate", children: B.description })
                        ] }),
                        L === v && /* @__PURE__ */ r.jsx(t1, { size: 16, className: "text-muted-foreground/50" })
                      ]
                    },
                    B.id
                  ))
                ] }),
                c && /* @__PURE__ */ r.jsxs("div", { className: "mt-2 pt-2 border-t border-border/50", children: [
                  /* @__PURE__ */ r.jsx("div", { className: "px-2 py-1.5 text-xs font-semibold text-muted-foreground/70 uppercase tracking-wider", children: "全站搜索" }),
                  /* @__PURE__ */ r.jsxs(
                    "div",
                    {
                      className: `flex items-center gap-3 px-3 py-2.5 rounded-lg cursor-pointer transition-colors ${v === p.length ? "bg-primary/10 text-primary" : "text-foreground hover:bg-muted/50"}`,
                      onClick: () => Z(),
                      onMouseEnter: () => C(p.length),
                      children: [
                        /* @__PURE__ */ r.jsx(Wn, { size: 18, className: `shrink-0 ${v === p.length ? "text-primary" : "text-muted-foreground"}` }),
                        /* @__PURE__ */ r.jsxs("div", { className: "flex-1 min-w-0", children: [
                          /* @__PURE__ */ r.jsxs("div", { className: "text-sm font-medium", children: [
                            '搜索记忆: "',
                            /* @__PURE__ */ r.jsx("span", { className: "text-primary", children: c }),
                            '"'
                          ] }),
                          /* @__PURE__ */ r.jsx("div", { className: "text-xs text-muted-foreground/80", children: "在记忆流和知识图谱中深度搜索" })
                        ] }),
                        v === p.length && /* @__PURE__ */ r.jsx(t1, { size: 16, className: "text-muted-foreground/50" })
                      ]
                    }
                  )
                ] }),
                p.length === 0 && !c && /* @__PURE__ */ r.jsxs("div", { className: "px-4 py-12 text-center text-muted-foreground text-sm flex flex-col items-center gap-2", children: [
                  /* @__PURE__ */ r.jsx(Wn, { size: 32, className: "opacity-20 mb-2" }),
                  /* @__PURE__ */ r.jsx("p", { children: "输入关键词开始搜索..." })
                ] })
              ] })
            ]
          }
        )
      }
    )
  ] });
}, Cc = ({ className: s = "", size: u = 24 }) => /* @__PURE__ */ r.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 400 592",
    width: u,
    height: u,
    className: s,
    "aria-label": "Engram Icon",
    children: /* @__PURE__ */ r.jsx(
      "path",
      {
        fill: "currentColor",
        d: `M103.875908,522.166260 
                C75.225380,521.276611 55.289425,503.229828 52.249313,475.852142 
                C49.879883,454.514191 63.027035,433.000366 83.930901,424.858398 
                C88.449257,423.098541 89.857674,420.860199 89.801926,416.150269 
                C89.555420,395.322357 89.621246,374.489380 89.762306,353.659515 
                C89.787170,349.987000 88.728760,348.057556 85.120293,346.642609 
                C64.672897,338.625031 52.338894,320.951630 52.085896,299.869415 
                C51.832878,278.785156 63.730618,260.903198 84.118019,252.449951 
                C88.288918,250.720566 89.867378,248.680847 89.807304,244.052597 
                C89.539139,223.391968 89.589142,202.724701 89.796356,182.062561 
                C89.836380,178.071609 88.518524,176.326385 84.841705,174.787247 
                C57.730556,163.438416 45.530682,135.966721 55.436111,109.194000 
                C62.627293,89.757439 81.922821,76.710289 103.282494,76.841476 
                C124.355003,76.970901 143.082275,89.740875 149.993118,109.121849 
                C151.315979,112.831749 153.184799,113.869263 156.863403,113.853104 
                C186.192612,113.724319 215.522736,113.698357 244.851929,113.811600 
                C248.773117,113.826736 250.677307,112.652130 252.052902,108.765602 
                C259.013885,89.098465 278.589447,76.365829 300.503601,76.811897 
                C322.171844,77.252960 341.040283,91.132324 347.255371,111.201912 
                C356.569763,141.279358 340.344788,170.373184 309.893127,176.623123 
                C283.359375,182.068970 260.376740,167.450562 251.980011,145.670181 
                C250.492157,141.810806 248.818085,140.240295 244.552948,140.266785 
                C215.390915,140.447968 186.227219,140.357330 157.064072,140.375076 
                C154.628784,140.376556 151.855545,139.805771 151.141357,143.359161 
                C150.400787,147.043839 146.628937,150.064713 151.136917,154.478546 
                C184.592346,187.235229 217.778336,220.267349 250.982285,253.280014 
                C253.021469,255.307434 254.527191,255.254166 257.033264,254.047714 
                C276.199188,244.820953 294.752930,247.045853 310.978485,259.993408 
                C328.011017,273.584869 333.936798,292.106659 327.764038,313.282837 
                C321.779785,333.812378 307.254517,345.637268 286.367889,349.037231 
                C276.405396,350.658997 266.352570,349.443024 257.275055,344.363342 
                C254.265045,342.678986 252.301132,343.049744 249.903275,345.441406 
                C230.205368,365.088531 210.395386,384.623230 190.631638,404.204376 
                C177.732651,416.984222 164.859726,429.790344 151.962982,442.572388 
                C148.257980,446.244415 148.113403,452.901764 151.629196,456.671387 
                C152.707138,457.827148 154.029282,457.681976 155.328629,457.681946 
                C185.658203,457.681458 215.987854,457.631042 246.317261,457.695557 
                C249.355972,457.702026 250.687012,456.399414 251.717636,453.698944 
                C259.314423,433.793579 278.324493,420.868317 299.341309,421.146240 
                C320.526215,421.426361 339.575745,434.206421 346.686249,452.909271 
                C354.337341,473.034058 348.794159,495.642761 332.699371,509.956390 
                C307.061371,532.757202 263.380280,521.715210 251.978027,489.436371 
                C250.838303,486.209961 249.371201,484.953583 245.964813,484.962799 
                C216.302094,485.043304 186.639008,484.985840 156.976028,484.969330 
                C154.436981,484.967896 152.081528,484.923981 150.916916,488.054077 
                C142.892441,509.621246 126.842339,520.325989 103.875908,522.166260 
                M141.430466,266.110352 
                C145.394760,270.906738 148.503693,276.196198 150.388428,282.139069 
                C151.211502,284.734314 152.692291,285.770782 155.494156,285.760895 
                C179.139755,285.677429 202.787949,285.547394 226.430206,285.843811 
                C232.373352,285.918304 231.388184,281.058533 233.335602,278.254700 
                C235.007233,275.847992 233.916855,274.189880 232.000244,272.304352 
                C199.956863,240.780380 167.866821,209.301468 136.133682,177.467056 
                C131.183243,172.500824 127.483856,170.729507 121.013550,174.621368 
                C117.660522,176.638214 116.183739,178.155136 116.217278,182.042480 
                C116.398239,203.022598 116.444160,224.006012 116.243645,244.985474 
                C116.204666,249.064667 117.676285,250.918961 121.328865,252.228989 
                C128.972488,254.970444 135.505173,259.524170 141.430466,266.110352 
                M116.349434,377.499908 
                C116.351860,390.663696 116.870338,403.855377 116.161102,416.980713 
                C115.742699,424.723846 121.926743,423.801880 125.649162,426.262665 
                C129.080231,428.530792 130.798965,425.706268 132.741440,423.784821 
                C165.551407,391.329803 198.234940,358.745361 231.274231,326.525696 
                C235.764252,322.147095 232.377243,319.155212 231.599960,315.493317 
                C230.884583,312.123138 228.193359,312.382568 225.670288,312.382812 
                C202.675171,312.384949 179.679749,312.445435 156.685303,312.323212 
                C153.331955,312.305389 151.624329,313.386505 150.456299,316.584381 
                C145.119888,331.194611 135.004120,341.287384 120.496223,346.769958 
                C117.238434,348.001068 116.190170,349.706024 116.267418,353.006317 
                C116.450615,360.833862 116.340004,368.668243 116.349434,377.499908z`
      }
    )
  }
), $h = ({
  onToggleSidebar: s,
  isMobile: u,
  // Deprecated prop, handled by CSS
  onClose: c,
  onNavigate: o
}) => /* @__PURE__ */ r.jsxs("header", { className: "h-14 flex items-center justify-between px-4 border-b border-border bg-sidebar/95 backdrop-blur z-50 transition-all duration-300 w-full flex-shrink-0", children: [
  /* @__PURE__ */ r.jsxs("div", { className: "flex items-center gap-3 w-16 md:w-64", children: [
    /* @__PURE__ */ r.jsx(
      "button",
      {
        className: "p-2 -ml-2 rounded-md hover:bg-sidebar-accent hover:text-sidebar-accent-foreground transition-colors md:hidden",
        onClick: s,
        title: "菜单",
        children: /* @__PURE__ */ r.jsx(O3, { size: 20 })
      }
    ),
    /* @__PURE__ */ r.jsxs("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ r.jsx("div", { className: "md:hidden", children: /* @__PURE__ */ r.jsx(Cc, { size: 24, className: "text-primary" }) }),
      /* @__PURE__ */ r.jsxs("div", { className: "hidden md:flex items-center gap-2", children: [
        /* @__PURE__ */ r.jsx(Cc, { size: 20, className: "text-primary" }),
        /* @__PURE__ */ r.jsx("span", { className: "font-semibold text-sidebar-foreground tracking-tight", children: "Engram" })
      ] })
    ] })
  ] }),
  /* @__PURE__ */ r.jsx("div", { className: "flex-1 flex justify-center max-w-xl mx-2 md:mx-4", children: /* @__PURE__ */ r.jsx(Jh, { onNavigate: o }) }),
  /* @__PURE__ */ r.jsx("div", { className: "flex items-center gap-2 w-16 md:w-64 justify-end", children: /* @__PURE__ */ r.jsx(
    "button",
    {
      className: "p-2 rounded-md hover:bg-destructive hover:text-destructive-foreground transition-colors text-muted-foreground",
      onClick: c,
      title: "关闭扩展",
      children: /* @__PURE__ */ r.jsx(Uc, { size: 20 })
    }
  ) })
] }), Fh = ({ className: s = "", height: u = 24 }) => {
  const c = Math.round(u * 3.17);
  return /* @__PURE__ */ r.jsxs(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "235 175 555 175",
      width: c,
      height: u,
      className: s,
      "aria-label": "Engram",
      children: [
        /* @__PURE__ */ r.jsx("path", { fill: "currentColor", d: "M752.3,294.5c-0.2-11.8-0.3-23.1-0.4-34.4c0-2.7,0-5.3-0.2-8c-0.6-6.4-4.1-10.1-9.8-10.9 c-6.9-0.9-12.2,2-14.5,7.9c-1,2.5-1.2,5.2-1.2,7.9c0,11,-0.3,22,0,33c0.1,5.2-1.7,6.9-6.7,6.4c-3.3-0.3-6.7-0.3-10,0 c-4.9,0.5-5.9-1.9-5.8-6.2c0.2-11.8,0.2-23.7,0-35.5c-0.2-9.4-5.4-14.3-14.1-13.5c-6.4,0.6-11.1,5.7-11.3,13 c-0.3,11.7-0.2,23.3-0.3,35c0,7.1,0,7.1-7.3,7.1c-3.3,0-6.7-0.1-10,0c-3.3,0.1-4.9-1.1-4.9-4.6c0.1-21.5,0-43-0.1-64.5 c0-2.9,1.3-4.3,4.2-4.3c3.2,0,6.3-0.1,9.5,0.1c4,0,8.8-1,7.5,6.6c8.6-6.1,16.9-8.7,26.3-7c5.2,1,10.1,2.7,13.7,6.6 c2.8,2.9,4.6,2.4,7.4,0c6.8-5.8,15-7.9,23.8-6.9c16.3,1.8,25.1,11.7,25.8,29.5c0.5,13.3,0.1,26.6,0.2,40 c0,3.4-1.2,5.1-4.7,4.7C763.8,295.7,757.9,298,752.3,294.5z" }),
        /* @__PURE__ */ r.jsx("path", { fill: "currentColor", d: "M463.1,324.1c-10.8-0.7-20.9-2.4-30.2-7.5c-3.6-2-5-4-2.4-7.8c2.3-3.4,4.1-7.1,6.5-11.3 c6.1,3.6,11.8,6.8,18.5,7.7c5.3,0.7,10.6,1.1,15.8-0.5c8.3-2.6,12.2-9.1,10.9-18.6c-9.1,7.5-19.3,8.6-30.2,6.4 c-7.8-1.6-14.2-5.6-19.2-11.8c-10.5-12.8-10.6-32.5-0.5-45.5c11.2-14.3,28.6-16.4,50.9-6.1c-0.4-6.2,3.5-6.3,8.1-6.2 c13,0.2,13,0.1,13,13c0,16.3-0.5,32.7,0.1,49C505.4,309.3,491.3,322.1,467.6,324C466.2,324.1,464.9,324.1,463.1,324.1z M482.1,252.6 c-0.6-2.1-1.6-4-3-5.7c-4.6-6-13.5-8.4-21.2-5.5c-7.4,2.7-11.1,8.9-10.6,17.8c0.4,7.4,5.7,13.5,13.6,15.2 C474.1,277.2,485.2,266.4,482.1,252.6z" }),
        /* @__PURE__ */ r.jsx("path", { fill: "currentColor", d: "M258.1,201.6c20.3,0,40.1,0.1,60-0.1c4.5,0,6.3,1.3,6.1,5.9c-0.4,14.6,2.1,12.6-12.7,12.7 c-10.7,0.1-21.3,0.1-32-0.1c-3.8-0.1-5.2,1-5.3,5.1c0,13.4-0.2,13.4,13.4,13.4c8.7,0,17.3,0.1,26,0c3.4-0.1,4.7,1.2,4.7,4.7 c-0.2,16.4,1.9,13.7-13.1,13.9c-8.8,0.1-17.7,0.1-26.5,0c-3.2,0-4.6,1.1-4.4,4.4c0.2,3.8,0.2,7.7,0,11.5 c-0.2,3.5,1.1,4.7,4.6,4.7c13.7-0.1,27.3,0.2,41-0.1c5.1-0.1,6.6,1.5,6.5,6.5c-0.2,12.3,0,12.3-12.1,12.3 c-18.7-0.1-37.3-0.2-56,0c-4.9,0.1-6.7-1.2-6.7-6.4c0.2-27.5,0.2-55,0-82.5C251.6,203,253,200.9,258.1,201.6z" }),
        /* @__PURE__ */ r.jsx("path", { fill: "currentColor", d: "M599.5,239.6c-5.6,0.9-10.6,2.1-15,4.9c-2.5,1.6-4,0.9-5.1-1.6c-0.9-2-1.9-3.9-2.9-5.8 c-3.1-6.1-3-6.4,3-9.3c11.6-5.6,23.9-7.1,36.5-4.6c15.1,2.9,23.6,12.8,24.1,28.7c0.4,13.3,0.1,26.6,0.2,40 c0,3.5-1.5,4.8-4.8,4.6c-3,0-6,0-9,0.1c-4.2,0.2-8.1,0.2-6.6-6.6c-12.4,9.5-24.9,10.4-37.7,3.9c-8.5-4.3-11.9-12-11.3-21.2 c0.6-9.1,5.9-15,14.4-17.9c5.7-1.9,11.6-2.8,17.7-2.8c4.6,0,9.3,0.5,13.8-0.4c1.9-7.2-7.4-13.5-17.2-11.9 M617.7,271.9 c-0.1-2.5,1-5.8-3.3-5.8c-5,0-10-0.1-15,0.2c-4,0.3-6.9,2.4-7.1,6.9c-0.2,4.5,2.2,7.2,6.3,8.4C606.5,283.8,613.8,280.3,617.7,271.9z" }),
        /* @__PURE__ */ r.jsx("path", { fill: "currentColor", d: "M346.2,222.9c2.6,0,4.8,0.1,7,0c4.7-0.4,8.1,0.7,7,7.3c6-4,11.6-7.1,18.2-7.9c18.2-2.1,34.8,7.7,35,29.4 c0.1,13.2-0.1,26.3,0.1,39.5c0,3.9-1.2,5.5-5.2,5.2c-4,0-8,0-12,0.2c-3.5,0.2-4.7-1.3-4.7-4.7c0.1-10.3,0.1-20.7,0-31 c0-2.3-0.1-4.7-0.5-7c-1.3-8.4-5.4-12.3-12.9-12.6c-8.4-0.3-14.3,3.9-16,11.9c-2,9.6-0.7,19.3-0.9,28.9 c-0.2,14.4,0,14.4-14.4,14.4c-7.8,0-7.9,0-7.9-8c0-19.5,0-39,0-58.5C339,223.3,339.2,223.2,346.2,222.9z" }),
        /* @__PURE__ */ r.jsx("path", { fill: "currentColor", d: "M543.2,258.4c-0.1,11.1-0.3,21.8-0.2,32.4c0,4-1.2,5.9-5.4,5.6c-4.3-0.3-8.7-0.1-13-0.1 c-2.7,0-3.9-1.3-3.9-4c0-21.8,0-43.6,0-65.5c0-2.8,1.3-3.9,3.9-4c2.8,0,5.7,0,8.5-0.1c4.8-0.2,9.6-0.5,8.7,6.4 c2.1,0.8,2.8-0.7,3.9-1.3c2.3-1.2,4.5-2.8,7-3.8c11.8-4.7,14.3-3,14.3,9.3c0,0.8-0.1,1.7,0,2.5c0.6,4.6-1,6.4-6,6.5 C550,242.6,544.8,247.5,543.2,258.4z" })
      ]
    }
  );
}, Wh = "0.2.0", Ih = {
  version: Wh
}, Va = {
  owner: "shiyue137mh-netizen",
  repo: "Engram",
  branch: "master"
  // 实际分支名是 master
}, _r = Ih.version;
let Zn = null, Kn = null;
function mc(s, u) {
  const c = s.split(".").map(Number), o = u.split(".").map(Number);
  for (let m = 0; m < Math.max(c.length, o.length); m++) {
    const h = c[m] || 0, v = o[m] || 0;
    if (h > v) return 1;
    if (h < v) return -1;
  }
  return 0;
}
class la {
  /**
   * 获取当前版本
   */
  static getCurrentVersion() {
    return _r;
  }
  /**
   * 从 GitHub 获取最新版本号
   */
  static async getLatestVersion() {
    if (Zn)
      return Zn;
    try {
      const u = `https://raw.githubusercontent.com/${Va.owner}/${Va.repo}/${Va.branch}/manifest.json`, c = await fetch(u);
      return c.ok ? (Zn = (await c.json()).version || null, Zn) : null;
    } catch {
      return null;
    }
  }
  /**
   * 检查是否有更新
   */
  static async hasUpdate() {
    const u = await this.getLatestVersion();
    return u ? mc(u, _r) > 0 : !1;
  }
  /**
   * 获取更新日志
   */
  static async getChangelog() {
    if (Kn)
      return Kn;
    try {
      const u = `https://raw.githubusercontent.com/${Va.owner}/${Va.repo}/${Va.branch}/CHANGELOG.md`, c = await fetch(u);
      return c.ok ? (Kn = await c.text(), Kn) : (console.warn("[Engram] UpdateService: 获取更新日志失败", c.status), null);
    } catch (u) {
      return console.error("[Engram] UpdateService: 获取更新日志异常", u), null;
    }
  }
  /**
   * 获取已读版本（上次用户确认查看的版本）
   */
  static getReadVersion() {
    try {
      return Rt.get("lastReadVersion") || "0.0.0";
    } catch {
      return "0.0.0";
    }
  }
  /**
   * 标记版本已读
   */
  static async markAsRead(u) {
    const c = u || await this.getLatestVersion() || _r;
    try {
      Rt.set("lastReadVersion", c), console.debug("[Engram] UpdateService: 已标记版本已读", c);
    } catch (o) {
      console.error("[Engram] UpdateService: 标记已读失败", o);
    }
  }
  /**
   * 检查是否有未读更新
   */
  static async hasUnreadUpdate() {
    const u = await this.getLatestVersion();
    if (!u || mc(u, _r) <= 0)
      return !1;
    const c = this.getReadVersion();
    return mc(u, c) > 0;
  }
  /**
   * 清除缓存（强制刷新）
   */
  static clearCache() {
    Zn = null, Kn = null;
  }
}
const Ph = ({ isOpen: s, onClose: u }) => {
  const [c, o] = D.useState(!0), [m, h] = D.useState(null), [v, C] = D.useState(null), [p, b] = D.useState(!1), [_, T] = D.useState(!1), R = la.getCurrentVersion();
  D.useEffect(() => {
    s && Z();
  }, [s]);
  const Z = async () => {
    o(!0);
    try {
      const [$, H, ee] = await Promise.all([
        la.getLatestVersion(),
        la.getChangelog(),
        la.hasUpdate()
      ]);
      h($), C(H), b(ee);
    } catch ($) {
      console.error("[Engram] 加载更新信息失败", $);
    } finally {
      o(!1);
    }
  }, B = async () => {
    T(!0);
    try {
      const $ = m || R;
      console.debug("[Engram] Marking update as read:", $), await la.markAsRead($), u();
    } finally {
      T(!1);
    }
  }, L = () => {
    la.clearCache(), Z();
  };
  return s ? /* @__PURE__ */ r.jsxs("div", { className: "fixed inset-0 z-[100] flex items-center justify-center p-4", children: [
    /* @__PURE__ */ r.jsx(
      "div",
      {
        className: "absolute inset-0 bg-black/60 backdrop-blur-sm",
        onClick: u
      }
    ),
    /* @__PURE__ */ r.jsxs("div", { className: "relative bg-card border border-border rounded-xl shadow-2xl w-full max-w-lg max-h-[80vh] flex flex-col overflow-hidden animate-in zoom-in-95 duration-200", children: [
      /* @__PURE__ */ r.jsxs("div", { className: "flex items-center justify-between px-5 py-4 border-b border-border/50", children: [
        /* @__PURE__ */ r.jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ r.jsx("div", { className: "w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center", children: /* @__PURE__ */ r.jsx(wr, { size: 16, className: "text-primary" }) }),
          /* @__PURE__ */ r.jsxs("div", { children: [
            /* @__PURE__ */ r.jsx("h2", { className: "text-base font-semibold text-foreground", children: "更新通知" }),
            /* @__PURE__ */ r.jsxs("p", { className: "text-xs text-muted-foreground", children: [
              "当前版本: v",
              R
            ] })
          ] })
        ] }),
        /* @__PURE__ */ r.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ r.jsx(
            "button",
            {
              onClick: L,
              className: "p-2 rounded-lg hover:bg-muted/50 text-muted-foreground hover:text-foreground transition-colors",
              title: "刷新",
              children: /* @__PURE__ */ r.jsx(ti, { size: 16, className: c ? "animate-spin" : "" })
            }
          ),
          /* @__PURE__ */ r.jsx(
            "button",
            {
              onClick: u,
              className: "p-2 rounded-lg hover:bg-muted/50 text-muted-foreground hover:text-foreground transition-colors",
              children: /* @__PURE__ */ r.jsx(Uc, { size: 16 })
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ r.jsx("div", { className: "flex-1 overflow-y-auto p-5", children: c ? /* @__PURE__ */ r.jsxs("div", { className: "flex flex-col items-center justify-center py-12 text-muted-foreground", children: [
        /* @__PURE__ */ r.jsx(ti, { size: 24, className: "animate-spin mb-3" }),
        /* @__PURE__ */ r.jsx("p", { className: "text-sm", children: "正在检查更新..." })
      ] }) : /* @__PURE__ */ r.jsxs("div", { className: "space-y-4", children: [
        /* @__PURE__ */ r.jsx("div", { className: `
                                p-4 rounded-lg border
                                ${p ? "bg-primary/5 border-primary/20" : "bg-green-500/5 border-green-500/20"}
                            `, children: /* @__PURE__ */ r.jsxs("div", { className: "flex items-center gap-3", children: [
          p ? /* @__PURE__ */ r.jsx(wr, { size: 20, className: "text-primary" }) : /* @__PURE__ */ r.jsx(_c, { size: 20, className: "text-green-500" }),
          /* @__PURE__ */ r.jsxs("div", { children: [
            /* @__PURE__ */ r.jsx("p", { className: "font-medium text-foreground", children: p ? `发现新版本: v${m}` : "已是最新版本" }),
            /* @__PURE__ */ r.jsx("p", { className: "text-xs text-muted-foreground mt-0.5", children: p ? "请手动更新扩展以获取新功能" : "无需更新" })
          ] })
        ] }) }),
        v && /* @__PURE__ */ r.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ r.jsx("h3", { className: "text-xs font-medium text-muted-foreground uppercase tracking-wider", children: "更新日志" }),
          /* @__PURE__ */ r.jsx("div", { className: "bg-muted/20 rounded-lg p-4 max-h-64 overflow-y-auto", children: /* @__PURE__ */ r.jsxs("pre", { className: "text-xs text-foreground/80 whitespace-pre-wrap font-mono leading-relaxed", children: [
            v.substring(0, 2e3),
            v.length > 2e3 && `

... (更多内容请查看完整日志)`
          ] }) })
        ] }),
        !v && !c && /* @__PURE__ */ r.jsx("div", { className: "text-center py-8 text-muted-foreground", children: /* @__PURE__ */ r.jsx("p", { className: "text-sm", children: "无法获取更新日志" }) })
      ] }) }),
      /* @__PURE__ */ r.jsxs("div", { className: "px-5 py-4 border-t border-border/50 flex justify-end gap-3", children: [
        /* @__PURE__ */ r.jsx(
          "button",
          {
            onClick: u,
            className: "px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors",
            children: "关闭"
          }
        ),
        p && /* @__PURE__ */ r.jsx(
          "button",
          {
            onClick: B,
            disabled: _,
            className: "px-4 py-2 text-sm bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors disabled:opacity-50",
            children: _ ? "处理中..." : "我知道了"
          }
        )
      ] })
    ] })
  ] }) : null;
}, o1 = [
  { id: "dashboard", label: "仪表盘", icon: T3 },
  { id: "memory", label: "记忆流", icon: $4 },
  { id: "graph", label: "神经图谱", icon: A1 },
  { id: "processing", label: "数据处理", icon: G4 },
  { id: "presets", label: "API 预设", icon: ni },
  { id: "devlog", label: "开发日志", icon: $a },
  { id: "settings", label: "系统设置", icon: Rc }
], e5 = ({ children: s, activeTab: u, setActiveTab: c, onClose: o }) => {
  const [m, h] = D.useState(!1), [v, C] = D.useState(!1), [p, b] = D.useState(!1);
  return D.useEffect(() => {
    (async () => {
      try {
        const T = await la.hasUnreadUpdate();
        b(T);
      } catch (T) {
        console.debug("[Engram] 检查更新失败", T);
      }
    })();
  }, []), /* @__PURE__ */ r.jsxs("div", { className: "flex absolute inset-0 w-full h-full bg-background text-foreground overflow-hidden font-sans selection:bg-primary/30 selection:text-primary", id: "engram-layout-root", children: [
    /* @__PURE__ */ r.jsx(oh, {}),
    /* @__PURE__ */ r.jsx(
      Ph,
      {
        isOpen: v,
        onClose: () => {
          C(!1), b(!1);
        }
      }
    ),
    /* @__PURE__ */ r.jsxs("aside", { className: "[display:none] md:flex w-36 flex-shrink-0 bg-sidebar flex-col z-40 pt-4 px-2 border-r border-border/50", children: [
      /* @__PURE__ */ r.jsx("nav", { className: "flex-1 w-full flex flex-col gap-1 overflow-y-auto no-scrollbar", children: o1.map((_) => {
        const T = _.icon, R = u === _.id;
        return /* @__PURE__ */ r.jsxs(
          "button",
          {
            onClick: () => c(_.id),
            className: `
                                    w-full flex items-center gap-2 px-2 py-2 rounded-lg transition-all duration-200 text-left
                                    ${R ? "bg-primary/10 text-primary" : "text-muted-foreground hover:text-foreground hover:bg-muted/10"}
                                `,
            children: [
              /* @__PURE__ */ r.jsx(T, { size: 18, strokeWidth: R ? 2 : 1.5, className: "flex-shrink-0" }),
              /* @__PURE__ */ r.jsx("span", { className: `text-xs ${R ? "font-medium" : "font-normal"}`, children: _.label })
            ]
          },
          _.id
        );
      }) }),
      /* @__PURE__ */ r.jsxs("div", { className: "pb-3 pt-2 border-t border-border/30 mt-2 space-y-2", children: [
        /* @__PURE__ */ r.jsxs(
          "button",
          {
            onClick: () => C(!0),
            className: "w-full flex items-center gap-2 px-2 py-1.5 rounded-lg transition-all duration-200 text-muted-foreground hover:text-foreground hover:bg-muted/10 text-left",
            children: [
              /* @__PURE__ */ r.jsxs("div", { className: "relative", children: [
                /* @__PURE__ */ r.jsx(X4, { size: 16, strokeWidth: 1.5 }),
                p && /* @__PURE__ */ r.jsx("span", { className: "absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full animate-pulse" })
              ] }),
              /* @__PURE__ */ r.jsx("span", { className: "text-xs", children: "更新通知" }),
              p && /* @__PURE__ */ r.jsx("span", { className: "ml-auto text-[10px] px-1.5 py-0.5 bg-primary/20 text-primary rounded-full", children: "NEW" })
            ]
          }
        ),
        /* @__PURE__ */ r.jsx("div", { className: "opacity-40 text-muted-foreground px-2", children: /* @__PURE__ */ r.jsx(Fh, { height: 12 }) })
      ] })
    ] }),
    /* @__PURE__ */ r.jsxs("div", { className: "flex flex-1 flex-col overflow-hidden", children: [
      /* @__PURE__ */ r.jsx(
        $h,
        {
          onToggleSidebar: () => h(!m),
          isMobile: !1,
          onClose: o,
          onNavigate: (_) => c(_.replace("/", ""))
        }
      ),
      m && /* @__PURE__ */ r.jsxs(
        "div",
        {
          className: "fixed inset-0 z-50 flex justify-start",
          style: { height: "100dvh", width: "100vw" },
          children: [
            /* @__PURE__ */ r.jsx(
              "div",
              {
                className: "absolute inset-0 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200",
                onClick: () => h(!1)
              }
            ),
            /* @__PURE__ */ r.jsxs(
              "div",
              {
                id: "mobile-menu-drawer",
                className: "relative w-64 max-w-[80vw] h-full bg-sidebar border-r border-border shadow-2xl flex flex-col p-6 animate-in slide-in-from-left duration-300",
                style: { height: "100dvh" },
                children: [
                  /* @__PURE__ */ r.jsxs("div", { className: "flex justify-between items-center mb-8", children: [
                    /* @__PURE__ */ r.jsx("span", { className: "text-lg font-semibold text-sidebar-foreground/80", children: "导航" }),
                    /* @__PURE__ */ r.jsx(
                      "button",
                      {
                        onClick: () => h(!1),
                        className: "p-2 -mr-2 rounded-md hover:bg-sidebar-accent text-muted-foreground hover:text-sidebar-accent-foreground transition-colors",
                        children: /* @__PURE__ */ r.jsx(Uc, { size: 20 })
                      }
                    )
                  ] }),
                  /* @__PURE__ */ r.jsx("nav", { className: "space-y-4 flex-1 overflow-y-auto", children: o1.map((_) => {
                    const T = u === _.id;
                    return /* @__PURE__ */ r.jsxs(
                      "button",
                      {
                        onClick: () => {
                          c(_.id), h(!1);
                        },
                        className: `
                                                w-full flex items-center gap-4 px-4 py-3 rounded-xl text-left transition-all duration-200
                                                ${T ? "bg-primary/10 text-primary font-medium" : "text-muted-foreground hover:bg-sidebar-accent hover:text-sidebar-foreground"}
                                            `,
                        children: [
                          /* @__PURE__ */ r.jsx(_.icon, { size: 22, className: T ? "text-primary" : "text-muted-foreground/70" }),
                          /* @__PURE__ */ r.jsx("span", { children: _.label })
                        ]
                      },
                      _.id
                    );
                  }) }),
                  /* @__PURE__ */ r.jsx("div", { className: "mt-auto pt-6 border-t border-border/20", children: /* @__PURE__ */ r.jsxs("div", { className: "flex items-center gap-3 px-2 text-xs text-muted-foreground/50", children: [
                    /* @__PURE__ */ r.jsx(Cc, { size: 14 }),
                    /* @__PURE__ */ r.jsx("span", { children: "Engram v0.1.0" })
                  ] }) })
                ]
              }
            )
          ]
        }
      ),
      /* @__PURE__ */ r.jsx("main", { className: "flex-1 flex flex-col relative w-full overflow-hidden bg-background", children: /* @__PURE__ */ r.jsx("div", { className: "flex-1 overflow-y-auto overflow-x-hidden pt-0 px-4 pb-4 md:px-8 md:pb-8 lg:px-12 lg:pb-12 scroll-smooth", children: /* @__PURE__ */ r.jsx("div", { className: "max-w-6xl mx-auto min-h-full pb-20", children: s }) }) })
    ] }),
    "  "
  ] });
}, hc = ({
  title: s,
  value: u,
  icon: c,
  subtext: o,
  highlight: m = !1
}) => /* @__PURE__ */ r.jsxs("div", { className: `flex-1 flex flex-col p-4 bg-card border border-border rounded-lg overflow-hidden relative transition-all duration-200 hover:shadow-md ${m ? "bg-primary-10 border-primary-30" : ""}`, children: [
  /* @__PURE__ */ r.jsxs("div", { className: "flex justify-between items-start mb-3", children: [
    /* @__PURE__ */ r.jsx("div", { className: `p-2 rounded-lg ${m ? "bg-primary-20 text-primary" : "bg-secondary text-secondary-foreground"}`, children: /* @__PURE__ */ r.jsx(c, { size: 20 }) }),
    m && /* @__PURE__ */ r.jsx("div", { className: "w-2 h-2 bg-green-500 rounded-full shadow-[0_0_8px_rgba(236,72,153,0.5)]" })
  ] }),
  /* @__PURE__ */ r.jsxs("div", { children: [
    /* @__PURE__ */ r.jsx("div", { className: "text-2xl font-bold text-foreground font-mono", children: u }),
    /* @__PURE__ */ r.jsx("div", { className: "text-[11px] text-muted-foreground font-semibold mt-1 tracking-[0.5px]", children: s }),
    o && /* @__PURE__ */ r.jsx("div", { className: "text-[10px] text-muted-foreground/70 mt-0.5", children: o })
  ] })
] });
function Or() {
  var s, u;
  try {
    return ((u = (s = window.SillyTavern) == null ? void 0 : s.getContext) == null ? void 0 : u.call(s)) || null;
  } catch (c) {
    return console.warn("[Engram] Failed to get ST context:", c), null;
  }
}
function t5() {
  return Or() !== null;
}
async function d1() {
  const { Logger: s } = await Promise.resolve().then(() => L1);
  await s.init(), s.info("STBridge", "Engram 插件正在初始化...");
  const { SettingsManager: u } = await Promise.resolve().then(() => Xh);
  u.initSettings(), s.info("STBridge", "SettingsManager initialized");
  try {
    const { checkTavernIntegration: o } = await Promise.resolve().then(() => hg), m = await o();
    s.info("TavernAPI", "酒馆接口对接状态", m);
  } catch (o) {
    s.warn("TavernAPI", "酒馆接口检查失败", { error: String(o) });
  }
  try {
    const { summarizerService: o } = await Promise.resolve().then(() => In);
    o.start();
    const m = o.getStatus();
    s.info("Summarizer", "服务已启动", m);
  } catch (o) {
    s.warn("Summarizer", "服务启动失败", { error: String(o) });
  }
  l5();
  const { ThemeManager: c } = await Promise.resolve().then(() => Qh);
  c.init(), s.success("STBridge", "Engram 初始化完成 - Where memories leave their trace.");
}
const Y1 = '<svg viewBox="0 0 400 592" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M103.875908,522.166260 C75.225380,521.276611 55.289425,503.229828 52.249313,475.852142 C49.879883,454.514191 63.027035,433.000366 83.930901,424.858398 C88.449257,423.098541 89.857674,420.860199 89.801926,416.150269 C89.555420,395.322357 89.621246,374.489380 89.762306,353.659515 C89.787170,349.987000 88.728760,348.057556 85.120293,346.642609 C64.672897,338.625031 52.338894,320.951630 52.085896,299.869415 C51.832878,278.785156 63.730618,260.903198 84.118019,252.449951 C88.288918,250.720566 89.867378,248.680847 89.807304,244.052597 C89.539139,223.391968 89.589142,202.724701 89.796356,182.062561 C89.836380,178.071609 88.518524,176.326385 84.841705,174.787247 C57.730556,163.438416 45.530682,135.966721 55.436111,109.194000 C62.627293,89.757439 81.922821,76.710289 103.282494,76.841476 C124.355003,76.970901 143.082275,89.740875 149.993118,109.121849 C151.315979,112.831749 153.184799,113.869263 156.863403,113.853104 C186.192612,113.724319 215.522736,113.698357 244.851929,113.811600 C248.773117,113.826736 250.677307,112.652130 252.052902,108.765602 C259.013885,89.098465 278.589447,76.365829 300.503601,76.811897 C322.171844,77.252960 341.040283,91.132324 347.255371,111.201912 C356.569763,141.279358 340.344788,170.373184 309.893127,176.623123 C283.359375,182.068970 260.376740,167.450562 251.980011,145.670181 C250.492157,141.810806 248.818085,140.240295 244.552948,140.266785 C215.390915,140.447968 186.227219,140.357330 157.064072,140.375076 C154.628784,140.376556 151.855545,139.805771 151.141357,143.359161 C150.400787,147.043839 146.628937,150.064713 151.136917,154.478546 C184.592346,187.235229 217.778336,220.267349 250.982285,253.280014 C253.021469,255.307434 254.527191,255.254166 257.033264,254.047714 C276.199188,244.820953 294.752930,247.045853 310.978485,259.993408 C328.011017,273.584869 333.936798,292.106659 327.764038,313.282837 C321.779785,333.812378 307.254517,345.637268 286.367889,349.037231 C276.405396,350.658997 266.352570,349.443024 257.275055,344.363342 C254.265045,342.678986 252.301132,343.049744 249.903275,345.441406 C230.205368,365.088531 210.395386,384.623230 190.631638,404.204376 C177.732651,416.984222 164.859726,429.790344 151.962982,442.572388 C148.257980,446.244415 148.113403,452.901764 151.629196,456.671387 C152.707138,457.827148 154.029282,457.681976 155.328629,457.681946 C185.658203,457.681458 215.987854,457.631042 246.317261,457.695557 C249.355972,457.702026 250.687012,456.399414 251.717636,453.698944 C259.314423,433.793579 278.324493,420.868317 299.341309,421.146240 C320.526215,421.426361 339.575745,434.206421 346.686249,452.909271 C354.337341,473.034058 348.794159,495.642761 332.699371,509.956390 C307.061371,532.757202 263.380280,521.715210 251.978027,489.436371 C250.838303,486.209961 249.371201,484.953583 245.964813,484.962799 C216.302094,485.043304 186.639008,484.985840 156.976028,484.969330 C154.436981,484.967896 152.081528,484.923981 150.916916,488.054077 C142.892441,509.621246 126.842339,520.325989 103.875908,522.166260 M141.430466,266.110352 C145.394760,270.906738 148.503693,276.196198 150.388428,282.139069 C151.211502,284.734314 152.692291,285.770782 155.494156,285.760895 C179.139755,285.677429 202.787949,285.547394 226.430206,285.843811 C232.373352,285.918304 231.388184,281.058533 233.335602,278.254700 C235.007233,275.847992 233.916855,274.189880 232.000244,272.304352 C199.956863,240.780380 167.866821,209.301468 136.133682,177.467056 C131.183243,172.500824 127.483856,170.729507 121.013550,174.621368 C117.660522,176.638214 116.183739,178.155136 116.217278,182.042480 C116.398239,203.022598 116.444160,224.006012 116.243645,244.985474 C116.204666,249.064667 117.676285,250.918961 121.328865,252.228989 C128.972488,254.970444 135.505173,259.524170 141.430466,266.110352 M116.349434,377.499908 C116.351860,390.663696 116.870338,403.855377 116.161102,416.980713 C115.742699,424.723846 121.926743,423.801880 125.649162,426.262665 C129.080231,428.530792 130.798965,425.706268 132.741440,423.784821 C165.551407,391.329803 198.234940,358.745361 231.274231,326.525696 C235.764252,322.147095 232.377243,319.155212 231.599960,315.493317 C230.884583,312.123138 228.193359,312.382568 225.670288,312.382812 C202.675171,312.384949 179.679749,312.445435 156.685303,312.323212 C153.331955,312.305389 151.624329,313.386505 150.456299,316.584381 C145.119888,331.194611 135.004120,341.287384 120.496223,346.769958 C117.238434,348.001068 116.190170,349.706024 116.267418,353.006317 C116.450615,360.833862 116.340004,368.668243 116.349434,377.499908z"/></svg>';
function l5() {
  const s = document.querySelector("#top-settings-holder"), u = document.querySelector("#WI-SP-button");
  if (!s) {
    console.warn("[Engram] #top-settings-holder not found, fallback to floating orb"), a5();
    return;
  }
  const c = document.createElement("div");
  c.id = "engram-drawer", c.className = "drawer";
  const o = document.createElement("div");
  o.className = "drawer-toggle drawer-header";
  const m = document.createElement("div");
  m.id = "engram-drawer-icon", m.className = "drawer-icon fa-fw closedIcon", m.title = "Engram - 记忆操作系统", m.setAttribute("data-i18n", "[title]Engram - Memory OS"), m.innerHTML = Y1, m.addEventListener("click", Dr), o.appendChild(m), c.appendChild(o), u ? (s.insertBefore(c, u), console.log("[Engram] Top bar button injected before WI-SP-button")) : (s.appendChild(c), console.log("[Engram] Top bar button injected at end (WI-SP-button not found)"));
}
function a5() {
  const s = document.createElement("div");
  s.className = "fixed bottom-5 right-5 w-12 h-12 rounded-full cursor-pointer z-[9999] flex items-center justify-center transition-transform duration-200 bg-gradient-to-br from-orange-500 to-pink-500 shadow-[0_0_20px_rgba(249,115,22,0.5)] hover:scale-110 hover:shadow-[0_0_30px_rgba(249,115,22,0.7)] text-white", s.title = "Engram - 记忆操作系统", s.innerHTML = Y1, s.addEventListener("click", Dr), document.body.appendChild(s);
}
let Nc = null;
function n5(s) {
  Nc = s;
}
let gc = !1, Jn = null, Ar = null;
function Dr() {
  gc && Jn ? (Ar && (Ar.unmount(), Ar = null), Jn.remove(), Jn = null, gc = !1) : (Jn = i5(), document.body.appendChild(Jn), gc = !0);
}
function i5() {
  var u;
  const s = document.createElement("div");
  return s.className = "fixed inset-0 w-full h-full z-[10000] flex flex-col bg-background text-foreground overflow-hidden", s.style.backgroundColor = "var(--background)", s.style.color = "var(--foreground)", s.style.height = "100dvh", s.style.width = "100vw", s.style.top = "0", s.style.left = "0", s.id = "engram-panel-root", Nc ? Ar = Nc(s, Dr) : (s.innerHTML = `
            <div class="flex items-center justify-between p-4 border-b border-slate-400/20">
                <h2 class="m-0 text-lg text-slate-200 flex items-center gap-2">🧠 Engram</h2>
                <button class="bg-transparent border-none text-slate-400 text-2xl cursor-pointer p-1 hover:text-slate-200">&times;</button>
            </div>
            <div class="flex-1 overflow-auto p-5">
                <p style="color: #94a3b8;">React 渲染器未加载，请检查配置。</p>
            </div>
        `, (u = s.querySelector("button")) == null || u.addEventListener("click", Dr)), s;
}
const r5 = (s) => {
  switch (s) {
    case 0:
      return "text-muted-foreground";
    case 1:
      return "text-primary";
    case 2:
      return "text-green-400";
    case 3:
      return "text-yellow-400";
    case 4:
      return "text-red-400";
    default:
      return "text-primary";
  }
}, f1 = ({ onNavigate: s }) => {
  const [u, c] = D.useState([]), [o, m] = D.useState(Or()), [h, v] = D.useState(0);
  D.useEffect(() => (c(Oe.getLogs().slice(0, 3)), Oe.subscribe((T) => {
    c((R) => [T, ...R].slice(0, 3));
  })), []), D.useEffect(() => {
    const _ = setInterval(() => {
      v((T) => T + 1);
    }, 1e3);
    return () => clearInterval(_);
  }, []);
  const C = (_) => {
    const T = Math.floor(_ / 3600), R = Math.floor(_ % 3600 / 60), Z = _ % 60;
    return `${T.toString().padStart(2, "0")}:${R.toString().padStart(2, "0")}:${Z.toString().padStart(2, "0")}`;
  }, p = (o == null ? void 0 : o.name2) || "Unknown", b = (_) => {
    s && s(_);
  };
  return /* @__PURE__ */ r.jsx("div", { className: "h-full overflow-y-auto p-6 [&::-webkit-scrollbar]:hidden", children: /* @__PURE__ */ r.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4 max-w-[1000px] mx-auto", children: [
    /* @__PURE__ */ r.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4 col-span-full", children: [
      /* @__PURE__ */ r.jsx(
        hc,
        {
          title: "ACTIVE MODEL",
          value: o ? "Connected" : "Offline",
          subtext: o ? `Chatting with ${p}` : "Waiting for connection...",
          icon: k1,
          highlight: !!o
        }
      ),
      /* @__PURE__ */ r.jsx(
        hc,
        {
          title: "MEMORY NODES",
          value: "0",
          subtext: "Graph Database",
          icon: ni
        }
      ),
      /* @__PURE__ */ r.jsx(
        hc,
        {
          title: "SYSTEM UPTIME",
          value: C(h),
          subtext: "Session Duration",
          icon: zc
        }
      )
    ] }),
    /* @__PURE__ */ r.jsxs("div", { className: "flex flex-col bg-card border border-border rounded-lg overflow-hidden relative transition-all duration-200 hover:shadow-md", children: [
      /* @__PURE__ */ r.jsxs("div", { className: "flex items-center gap-2 p-4 text-xs font-bold tracking-widest text-muted-foreground border-b border-border", children: [
        /* @__PURE__ */ r.jsx(Hc, { size: 16 }),
        /* @__PURE__ */ r.jsx("span", { children: "QUICK ACTIONS" })
      ] }),
      /* @__PURE__ */ r.jsxs("div", { className: "flex-1 grid grid-cols-4 gap-3 p-4", children: [
        /* @__PURE__ */ r.jsxs("button", { className: "flex flex-col items-center justify-center gap-2 p-3 bg-background border border-border rounded-xl cursor-pointer transition-all duration-200 text-muted-foreground hover:bg-accent hover:-translate-y-0.5 hover:text-accent-foreground", onClick: () => b("memory"), children: [
          /* @__PURE__ */ r.jsx("span", { className: "text-2xl", children: "📜" }),
          /* @__PURE__ */ r.jsx("span", { className: "text-xs font-medium", children: "Memory Stream" })
        ] }),
        /* @__PURE__ */ r.jsxs("button", { className: "flex flex-col items-center justify-center gap-2 p-3 bg-background border border-border rounded-xl cursor-pointer transition-all duration-200 text-muted-foreground hover:bg-accent hover:-translate-y-0.5 hover:text-accent-foreground", onClick: () => b("graph"), children: [
          /* @__PURE__ */ r.jsx("span", { className: "text-2xl", children: "🕸️" }),
          /* @__PURE__ */ r.jsx("span", { className: "text-xs font-medium", children: "Knowledge Graph" })
        ] }),
        /* @__PURE__ */ r.jsxs("button", { className: "flex flex-col items-center justify-center gap-2 p-3 bg-background border border-border rounded-xl cursor-pointer transition-all duration-200 text-muted-foreground hover:bg-accent hover:-translate-y-0.5 hover:text-accent-foreground", onClick: () => b("processing"), children: [
          /* @__PURE__ */ r.jsx("span", { className: "text-2xl", children: "🧠" }),
          /* @__PURE__ */ r.jsx("span", { className: "text-xs font-medium", children: "Brain Console" })
        ] }),
        /* @__PURE__ */ r.jsxs("button", { className: "flex flex-col items-center justify-center gap-2 p-3 bg-background border border-border rounded-xl cursor-pointer transition-all duration-200 text-muted-foreground hover:bg-accent hover:-translate-y-0.5 hover:text-accent-foreground", onClick: () => b("settings"), children: [
          /* @__PURE__ */ r.jsx("span", { className: "text-2xl", children: "⚙️" }),
          /* @__PURE__ */ r.jsx("span", { className: "text-xs font-medium", children: "Settings" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ r.jsxs("div", { className: "flex flex-col bg-card border border-border rounded-lg overflow-hidden relative transition-all duration-200 hover:shadow-md", children: [
      /* @__PURE__ */ r.jsxs("div", { className: "flex items-center gap-2 p-4 text-xs font-bold tracking-widest text-muted-foreground border-b border-border", children: [
        /* @__PURE__ */ r.jsx($a, { size: 16 }),
        /* @__PURE__ */ r.jsx("span", { children: "SYSTEM LOGS" }),
        /* @__PURE__ */ r.jsx("button", { className: "ml-auto text-[10px] text-primary bg-transparent border-none cursor-pointer opacity-80 hover:opacity-100 hover:underline", onClick: () => b("devlog"), children: "VIEW ALL" })
      ] }),
      /* @__PURE__ */ r.jsx("div", { className: "flex-1 p-3 font-mono text-[11px] bg-muted/20 overflow-hidden", children: u.length === 0 ? /* @__PURE__ */ r.jsx("div", { className: "text-muted-foreground text-center mt-5 italic", children: "No activity recorded" }) : u.map((_) => /* @__PURE__ */ r.jsxs("div", { className: `flex gap-2 mb-1.5 opacity-80 ${r5(_.level)}`, children: [
        /* @__PURE__ */ r.jsxs("span", { className: "text-muted-foreground", children: [
          "[",
          new Date(_.timestamp).toLocaleTimeString([], { hour12: !1 }),
          "]"
        ] }),
        /* @__PURE__ */ r.jsx("span", { className: "text-foreground flex-1 min-w-0 whitespace-nowrap overflow-hidden text-ellipsis", children: _.message })
      ] }, _.id)) })
    ] })
  ] }) });
}, qr = ({ title: s, subtitle: u, actions: c }) => /* @__PURE__ */ r.jsxs("div", { className: "mb-8 px-4 md:px-0 flex justify-between items-start animate-in fade-in slide-in-from-bottom-2 duration-500", children: [
  /* @__PURE__ */ r.jsxs("div", { children: [
    /* @__PURE__ */ r.jsx("h1", { className: "text-3xl font-light tracking-tight text-foreground", children: s }),
    u && /* @__PURE__ */ r.jsx("p", { className: "mt-2 text-muted-foreground text-sm font-light", children: u })
  ] }),
  c && /* @__PURE__ */ r.jsx("div", { className: "flex gap-2", children: c })
] }), m1 = ({
  icon: s,
  label: u,
  primary: c = !1,
  size: o = "md",
  className: m = "",
  ...h
}) => /* @__PURE__ */ r.jsxs(
  "button",
  {
    className: `
            flex items-center gap-2 rounded-full font-medium transition-all active:scale-95
            ${o === "sm" ? "px-3 py-1.5 text-xs" : "px-5 py-2.5 text-sm"}
            ${c ? "bg-primary text-primary-foreground hover:opacity-90 shadow-[0_0_15px_var(--primary)] border border-transparent" : "text-muted-foreground hover:text-foreground border border-border hover:border-input bg-muted/50 hover:bg-muted"}
            ${m}
        `,
    ...h,
    children: [
      s && /* @__PURE__ */ r.jsx(s, { size: o === "sm" ? 14 : 16 }),
      u
    ]
  }
), u5 = () => {
  const [s] = D.useState([
    { id: "1", x: 250, y: 150, label: "User Input", type: "input" },
    { id: "2", x: 250, y: 300, label: "Memory Retriever", type: "process" },
    { id: "3", x: 100, y: 450, label: "Summary Agent", type: "output" },
    { id: "4", x: 400, y: 450, label: "Context Builder", type: "output" }
  ]), u = [
    { source: "1", target: "2" },
    { source: "2", target: "3" },
    { source: "2", target: "4" }
  ];
  return /* @__PURE__ */ r.jsxs("div", { className: "h-full flex flex-col relative bg-card rounded-xl overflow-hidden border border-border shadow-inner group", children: [
    /* @__PURE__ */ r.jsx(
      "div",
      {
        className: "absolute inset-0 opacity-[0.15] pointer-events-none",
        style: {
          backgroundImage: "radial-gradient(#555 1px, transparent 1px)",
          backgroundSize: "24px 24px"
        }
      }
    ),
    /* @__PURE__ */ r.jsxs("div", { className: "absolute top-4 right-4 z-10 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300", children: [
      /* @__PURE__ */ r.jsx("button", { className: "p-2 bg-muted text-muted-foreground hover:text-foreground rounded border border-border shadow-lg hover:border-border transition-colors", children: /* @__PURE__ */ r.jsx(Oc, { size: 16 }) }),
      /* @__PURE__ */ r.jsx("button", { className: "p-2 bg-muted text-muted-foreground hover:text-foreground rounded border border-border shadow-lg hover:border-border transition-colors", children: /* @__PURE__ */ r.jsx(w3, { size: 16 }) }),
      /* @__PURE__ */ r.jsx("button", { className: "p-2 bg-muted text-muted-foreground hover:text-foreground rounded border border-border shadow-lg hover:border-border transition-colors", children: /* @__PURE__ */ r.jsx(Rc, { size: 16 }) })
    ] }),
    /* @__PURE__ */ r.jsx("div", { className: "absolute bottom-4 left-4 z-10 bg-muted/80 backdrop-blur border border-border px-3 py-1.5 rounded-full text-[10px] text-muted-foreground font-mono tracking-wider uppercase", children: "Render Engine: Mock 1.0" }),
    /* @__PURE__ */ r.jsxs("svg", { className: "w-full h-full pointer-events-none", children: [
      /* @__PURE__ */ r.jsx("defs", { children: /* @__PURE__ */ r.jsx("marker", { id: "arrowhead", markerWidth: "10", markerHeight: "7", refX: "9", refY: "3.5", orient: "auto", children: /* @__PURE__ */ r.jsx("polygon", { points: "0 0, 10 3.5, 0 7", fill: "#3b82f6", opacity: "0.5" }) }) }),
      u.map((c, o) => {
        const m = s.find((T) => T.id === c.source), h = s.find((T) => T.id === c.target);
        if (!m || !h) return null;
        const v = m.x + 150 / 2, C = m.y + 60, p = h.x + 150 / 2, b = h.y, _ = `M ${v} ${C} C ${v} ${C + 50}, ${p} ${b - 50}, ${p} ${b}`;
        return /* @__PURE__ */ r.jsx("g", { children: /* @__PURE__ */ r.jsx("path", { d: _, stroke: "#3b82f6", strokeWidth: "1.5", fill: "none", className: "opacity-40", markerEnd: "url(#arrowhead)" }) }, o);
      })
    ] }),
    s.map((c) => /* @__PURE__ */ r.jsxs(
      "div",
      {
        className: "absolute w-[150px] group/node cursor-grab active:cursor-grabbing",
        style: { left: c.x, top: c.y },
        children: [
          c.type !== "input" && /* @__PURE__ */ r.jsx("div", { className: "absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-muted-foreground rounded-full border border-background z-10" }),
          c.type !== "output" && /* @__PURE__ */ r.jsx("div", { className: "absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-muted-foreground rounded-full border border-background z-10" }),
          /* @__PURE__ */ r.jsxs("div", { className: `
                        bg-background/90 border rounded-md p-3 backdrop-blur-sm transition-all duration-300
                        ${c.type === "input" ? "border-blue-500/30 shadow-[0_0_15px_rgba(59,130,246,0.1)]" : "border-border group-hover/node:border-border shadow-lg"}
                    `, children: [
            /* @__PURE__ */ r.jsx("div", { className: "text-[9px] text-muted-foreground uppercase tracking-widest mb-2 font-bold", children: c.type }),
            /* @__PURE__ */ r.jsxs("div", { className: "text-xs text-foreground font-medium flex items-center gap-2", children: [
              c.type === "input" && /* @__PURE__ */ r.jsx($a, { size: 12, className: "text-blue-400" }),
              c.type === "process" && /* @__PURE__ */ r.jsx(zc, { size: 12, className: "text-purple-400" }),
              c.type === "output" && /* @__PURE__ */ r.jsx(ni, { size: 12, className: "text-emerald-400" }),
              c.label
            ] })
          ] })
        ]
      },
      c.id
    ))
  ] });
}, s5 = () => /* @__PURE__ */ r.jsxs("div", { className: "h-[calc(100vh-140px)] animate-in fade-in flex flex-col", children: [
  /* @__PURE__ */ r.jsx(
    qr,
    {
      title: "神经图谱",
      subtitle: "知识节点可视化",
      actions: /* @__PURE__ */ r.jsxs("div", { className: "flex gap-2", children: [
        /* @__PURE__ */ r.jsx(m1, { icon: kc, label: "Auto Layout", size: "sm" }),
        /* @__PURE__ */ r.jsx(m1, { icon: Rc, label: "Config", size: "sm" })
      ] })
    }
  ),
  /* @__PURE__ */ r.jsx("div", { className: "flex-1 pb-4 min-h-0", children: /* @__PURE__ */ r.jsx(u5, {}) })
] });
function c5(s) {
  return new Date(s).toTimeString().slice(0, 8);
}
const o5 = {
  [Te.DEBUG]: { text: "text-zinc-500", bg: "bg-zinc-500/10" },
  [Te.INFO]: { text: "text-blue-400", bg: "bg-blue-500/10" },
  [Te.SUCCESS]: { text: "text-emerald-400", bg: "bg-emerald-500/10" },
  [Te.WARN]: { text: "text-amber-400", bg: "bg-amber-500/10" },
  [Te.ERROR]: { text: "text-red-400", bg: "bg-red-500/10" }
}, d5 = ({ entry: s }) => {
  const [u, c] = D.useState(!1), o = s.data !== void 0, m = kr[s.level], h = o5[s.level];
  return /* @__PURE__ */ r.jsxs("div", { className: "group", children: [
    /* @__PURE__ */ r.jsxs(
      "div",
      {
        className: `
                    flex items-start gap-3 px-2 py-1 rounded-sm transition-colors
                    hover:bg-white/[0.02]
                    ${o ? "cursor-pointer" : ""}
                `,
        onClick: () => o && c(!u),
        children: [
          /* @__PURE__ */ r.jsx("span", { className: "flex items-center text-zinc-600 shrink-0 mt-0.5 w-3", children: o ? u ? /* @__PURE__ */ r.jsx(ei, { size: 12 }) : /* @__PURE__ */ r.jsx(_1, { size: 12 }) : null }),
          /* @__PURE__ */ r.jsx("span", { className: "text-zinc-600 shrink-0 tabular-nums text-[11px]", children: c5(s.timestamp) }),
          /* @__PURE__ */ r.jsx("span", { className: `
                    shrink-0 text-[10px] font-medium px-1.5 py-0.5 rounded
                    ${h.text} ${h.bg}
                `, children: m.label }),
          /* @__PURE__ */ r.jsx("span", { className: "text-zinc-500 shrink-0 text-[11px]", children: s.module }),
          /* @__PURE__ */ r.jsx("span", { className: "text-zinc-300 text-[11px] break-words flex-1 leading-relaxed", children: s.message })
        ]
      }
    ),
    u && o && /* @__PURE__ */ r.jsx("div", { className: "ml-10 mr-2 mb-1 px-3 py-2 bg-zinc-900/50 border-l-2 border-zinc-700 rounded-r text-[10px]", children: /* @__PURE__ */ r.jsx("pre", { className: "m-0 text-zinc-400 whitespace-pre-wrap break-words font-mono", children: JSON.stringify(s.data, null, 2) }) })
  ] });
}, h1 = 100;
class f5 {
  constructor() {
    Qe(this, "entries", []);
    Qe(this, "listeners", /* @__PURE__ */ new Set());
  }
  /**
   * 创建新的日志条目（发送阶段）
   */
  logSend(u) {
    const c = `log_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`, o = {
      id: c,
      timestamp: Date.now(),
      type: u.type,
      direction: "sent",
      systemPrompt: u.systemPrompt,
      userPrompt: u.userPrompt,
      tokensSent: u.tokensSent,
      model: u.model,
      floorRange: u.floorRange,
      status: "pending"
    };
    return this.entries.unshift(o), this.trimEntries(), this.notifyListeners(), c;
  }
  /**
   * 更新日志条目（接收阶段）
   */
  logReceive(u, c) {
    const o = this.entries.find((v) => v.id === u);
    if (!o) return;
    const m = {
      id: `${u}_recv`,
      timestamp: Date.now(),
      type: o.type,
      direction: "received",
      response: c.response,
      tokensReceived: c.tokensReceived,
      status: c.status,
      error: c.error,
      duration: c.duration,
      model: o.model,
      floorRange: o.floorRange
    };
    o.status = c.status, o.duration = c.duration;
    const h = this.entries.findIndex((v) => v.id === u);
    h >= 0 ? this.entries.splice(h, 0, m) : this.entries.unshift(m), this.trimEntries(), this.notifyListeners();
  }
  /**
   * 快捷方法：记录完整的调用过程
   */
  async logCall(u, c) {
    const o = this.logSend(u), m = Date.now();
    try {
      const h = await c();
      return this.logReceive(o, {
        response: typeof h == "string" ? h : JSON.stringify(h),
        status: "success",
        duration: Date.now() - m
      }), h;
    } catch (h) {
      throw this.logReceive(o, {
        status: "error",
        error: h instanceof Error ? h.message : String(h),
        duration: Date.now() - m
      }), h;
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
    const u = [], c = this.entries.filter((o) => o.direction === "sent");
    for (const o of c) {
      const m = this.entries.find(
        (h) => h.id === `${o.id}_recv` && h.direction === "received"
      );
      u.push({ sent: o, received: m });
    }
    return u;
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
  subscribe(u) {
    return this.listeners.add(u), () => this.listeners.delete(u);
  }
  /**
   * 获取日志数量
   */
  getCount() {
    return this.entries.filter((u) => u.direction === "sent").length;
  }
  /**
   * 裁剪条目
   */
  trimEntries() {
    this.entries.length > h1 * 2 && (this.entries = this.entries.slice(0, h1 * 2));
  }
  /**
   * 通知监听器
   */
  notifyListeners() {
    for (const u of this.listeners)
      u();
  }
}
const Za = new f5(), m5 = {
  summarize: { label: "总结", color: "bg-blue-500/20 text-blue-400" },
  vectorize: { label: "向量化", color: "bg-purple-500/20 text-purple-400" },
  query: { label: "查询", color: "bg-green-500/20 text-green-400" },
  other: { label: "其他", color: "bg-gray-500/20 text-gray-400" }
}, h5 = ({ status: s }) => {
  switch (s) {
    case "pending":
      return /* @__PURE__ */ r.jsx(M1, { size: 14, className: "animate-spin text-yellow-400" });
    case "success":
      return /* @__PURE__ */ r.jsx(_c, { size: 14, className: "text-green-400" });
    case "error":
      return /* @__PURE__ */ r.jsx(Tc, { size: 14, className: "text-red-400" });
  }
}, g5 = (s) => new Date(s).toLocaleTimeString("zh-CN", {
  hour12: !1,
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit"
}), p5 = (s) => s === void 0 ? "-" : s < 1e3 ? `${s}ms` : `${(s / 1e3).toFixed(1)}s`, x5 = ({ sent: s, received: u }) => {
  const [c, o] = D.useState(!1), m = m5[s.type];
  return /* @__PURE__ */ r.jsxs("div", { className: "border border-border rounded-lg overflow-hidden bg-card", children: [
    /* @__PURE__ */ r.jsxs(
      "div",
      {
        className: "flex items-center gap-2 px-3 py-2 bg-muted-20 cursor-pointer hover:bg-muted-30",
        onClick: () => o(!c),
        children: [
          c ? /* @__PURE__ */ r.jsx(ei, { size: 14 }) : /* @__PURE__ */ r.jsx(_1, { size: 14 }),
          /* @__PURE__ */ r.jsx("span", { className: `px-2 py-0.5 rounded text-xs font-medium ${m.color}`, children: m.label }),
          /* @__PURE__ */ r.jsx("span", { className: "text-xs text-muted-foreground", children: g5(s.timestamp) }),
          /* @__PURE__ */ r.jsx(h5, { status: (u == null ? void 0 : u.status) || s.status }),
          s.floorRange && /* @__PURE__ */ r.jsxs("span", { className: "text-xs text-muted-foreground", children: [
            "楼层 #",
            s.floorRange[0],
            "-",
            s.floorRange[1]
          ] }),
          /* @__PURE__ */ r.jsxs("span", { className: "ml-auto text-xs text-muted-foreground flex items-center gap-1", children: [
            /* @__PURE__ */ r.jsx(s3, { size: 12 }),
            p5((u == null ? void 0 : u.duration) || s.duration)
          ] })
        ]
      }
    ),
    c && /* @__PURE__ */ r.jsxs("div", { className: "flex flex-col md:flex-row", children: [
      /* @__PURE__ */ r.jsxs("div", { className: "flex-1 border-r border-border p-3", children: [
        /* @__PURE__ */ r.jsxs("div", { className: "flex items-center gap-2 mb-2 text-sm font-medium text-blue-400", children: [
          /* @__PURE__ */ r.jsx(I3, { size: 14 }),
          "发送",
          s.tokensSent && /* @__PURE__ */ r.jsxs("span", { className: "text-xs text-muted-foreground ml-auto", children: [
            "~",
            s.tokensSent,
            " tokens"
          ] })
        ] }),
        s.systemPrompt && /* @__PURE__ */ r.jsxs("div", { className: "mb-3", children: [
          /* @__PURE__ */ r.jsx("div", { className: "text-xs text-muted-foreground mb-1", children: "System" }),
          /* @__PURE__ */ r.jsx("div", { className: "text-sm p-2 bg-muted-20 rounded max-h-32 overflow-y-auto whitespace-pre-wrap", children: s.systemPrompt })
        ] }),
        s.userPrompt && /* @__PURE__ */ r.jsxs("div", { children: [
          /* @__PURE__ */ r.jsx("div", { className: "text-xs text-muted-foreground mb-1", children: "User" }),
          /* @__PURE__ */ r.jsx("div", { className: "text-sm p-2 bg-muted-20 rounded max-h-48 overflow-y-auto whitespace-pre-wrap", children: s.userPrompt })
        ] })
      ] }),
      /* @__PURE__ */ r.jsxs("div", { className: "flex-1 p-3", children: [
        /* @__PURE__ */ r.jsxs("div", { className: "flex items-center gap-2 mb-2 text-sm font-medium text-green-400", children: [
          /* @__PURE__ */ r.jsx(E1, { size: 14 }),
          "接收",
          (u == null ? void 0 : u.tokensReceived) && /* @__PURE__ */ r.jsxs("span", { className: "text-xs text-muted-foreground ml-auto", children: [
            "~",
            u.tokensReceived,
            " tokens"
          ] })
        ] }),
        (u == null ? void 0 : u.status) === "error" && u.error && /* @__PURE__ */ r.jsx("div", { className: "p-2 bg-red-500/10 border border-red-500/30 rounded text-sm text-red-400", children: u.error }),
        (u == null ? void 0 : u.response) && /* @__PURE__ */ r.jsx("div", { className: "text-sm p-2 bg-muted-20 rounded max-h-48 overflow-y-auto whitespace-pre-wrap", children: u.response }),
        !u && s.status === "pending" && /* @__PURE__ */ r.jsxs("div", { className: "flex items-center gap-2 text-sm text-muted-foreground", children: [
          /* @__PURE__ */ r.jsx(M1, { size: 14, className: "animate-spin" }),
          "等待响应..."
        ] })
      ] })
    ] })
  ] });
}, y5 = () => {
  const [s, u] = D.useState(Za.getPaired());
  return D.useEffect(() => Za.subscribe(() => {
    u(Za.getPaired());
  }), []), /* @__PURE__ */ r.jsxs("div", { className: "flex flex-col h-full", children: [
    /* @__PURE__ */ r.jsxs("div", { className: "flex items-center justify-between px-4 py-3 border-b border-border shrink-0", children: [
      /* @__PURE__ */ r.jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ r.jsx(Hc, { size: 16, className: "text-primary" }),
        /* @__PURE__ */ r.jsx("span", { className: "font-medium text-foreground", children: "模型调用日志" }),
        /* @__PURE__ */ r.jsxs("span", { className: "text-xs text-muted-foreground", children: [
          "(",
          s.length,
          ")"
        ] })
      ] }),
      /* @__PURE__ */ r.jsx(
        "button",
        {
          className: "p-1.5 rounded-md hover:bg-destructive hover:text-destructive-foreground transition-colors text-muted-foreground",
          onClick: () => Za.clear(),
          title: "清除日志",
          children: /* @__PURE__ */ r.jsx(ii, { size: 14 })
        }
      )
    ] }),
    /* @__PURE__ */ r.jsx("div", { className: "flex-1 overflow-y-auto p-4", children: s.length === 0 ? /* @__PURE__ */ r.jsxs("div", { className: "flex flex-col items-center justify-center h-full text-muted-foreground gap-3", children: [
      /* @__PURE__ */ r.jsx(E1, { size: 48, className: "opacity-30" }),
      /* @__PURE__ */ r.jsx("p", { className: "text-sm", children: "暂无模型调用记录" }),
      /* @__PURE__ */ r.jsx("p", { className: "text-xs", children: "触发总结或向量化后，调用记录将显示在这里" })
    ] }) : /* @__PURE__ */ r.jsx("div", { className: "flex flex-col gap-3", children: s.map(({ sent: c, received: o }) => /* @__PURE__ */ r.jsx(x5, { sent: c, received: o }, c.id)) }) })
  ] });
}, Rr = ({ tabs: s, activeTab: u, onChange: c, sticky: o = !0, top: m = 0, className: h = "" }) => /* @__PURE__ */ r.jsx(
  "div",
  {
    className: `
            flex overflow-x-auto gap-2 mb-6 pb-1 no-scrollbar border-b border-border
            ${o ? "sticky z-10 bg-background pt-4 pb-2 -mt-4 -mx-4 px-4 md:-mx-8 md:px-8 lg:-mx-12 lg:px-12" : "px-0"}
            ${h}
        `,
    style: o ? { top: m } : void 0,
    children: s.map((v) => /* @__PURE__ */ r.jsxs(
      "button",
      {
        onClick: () => c(v.id),
        className: `flex items-center gap-2 whitespace-nowrap px-4 py-2 text-sm transition-all relative ${u === v.id ? "text-foreground" : "text-muted-foreground hover:text-foreground"}`,
        children: [
          v.icon && /* @__PURE__ */ r.jsx("span", { className: "w-4 h-4", children: v.icon }),
          v.label,
          u === v.id && /* @__PURE__ */ r.jsx("div", { className: "absolute bottom-0 left-0 right-0 h-[1px] bg-primary shadow-[0_0_10px_var(--primary)]" })
        ]
      },
      v.id
    ))
  }
), v5 = [
  { id: "runtime", label: "运行日志", icon: /* @__PURE__ */ r.jsx($a, { size: 14 }) },
  { id: "model", label: "模型日志", icon: /* @__PURE__ */ r.jsx(Hc, { size: 14 }) }
], b5 = [
  "ALL",
  "Logger",
  "EventBus",
  "Summarizer",
  "CORE/Pipeline",
  "CORE/RAG",
  "CORE/Memory",
  "UI/GraphView",
  "UI/MemoryStream"
], S5 = () => {
  const [s, u] = D.useState("runtime"), [c, o] = D.useState([]), [m, h] = D.useState([]), [v, C] = D.useState(""), [p, b] = D.useState(-1), [_, T] = D.useState("ALL"), [R, Z] = D.useState(!0), [B, L] = D.useState(!1), [$, H] = D.useState(!1), ee = D.useRef(null);
  D.useEffect(() => {
    o(Oe.getLogs());
    const te = Oe.subscribe((ce) => {
      o((I) => [...I, ce]);
    });
    return () => te();
  }, []), D.useEffect(() => {
    let te = c;
    if (p !== -1 && (te = te.filter((ce) => ce.level >= p)), _ !== "ALL" && (te = te.filter((ce) => ce.module.startsWith(_))), v.trim()) {
      const ce = v.toLowerCase();
      te = te.filter(
        (I) => I.message.toLowerCase().includes(ce) || I.module.toLowerCase().includes(ce)
      );
    }
    h(te);
  }, [c, p, _, v]), D.useEffect(() => {
    R && ee.current && ee.current.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }, [m, R]);
  const q = D.useCallback(async () => {
    await Oe.clear(), o([]);
  }, []), ie = D.useCallback(() => {
    const te = Oe.exportToMarkdown(), ce = Oe.getExportFilename(), I = new Blob([te], { type: "text/markdown" }), Me = URL.createObjectURL(I), Ge = document.createElement("a");
    Ge.href = Me, Ge.download = ce, Ge.click(), URL.revokeObjectURL(Me), Oe.success("DevLog", `日志已导出: ${ce}`);
  }, []);
  return /* @__PURE__ */ r.jsxs("div", { className: "flex flex-col h-full", children: [
    /* @__PURE__ */ r.jsxs("div", { className: "mb-6", children: [
      /* @__PURE__ */ r.jsx("h1", { className: "text-2xl font-light text-foreground tracking-tight mb-2", children: "开发日志" }),
      /* @__PURE__ */ r.jsx("p", { className: "text-sm text-muted-foreground", children: "运行时日志和模型调用记录" })
    ] }),
    /* @__PURE__ */ r.jsx(
      Rr,
      {
        tabs: v5,
        activeTab: s,
        onChange: (te) => u(te),
        sticky: !0
      }
    ),
    s === "runtime" && /* @__PURE__ */ r.jsxs("div", { className: "flex flex-col flex-1 min-h-0", children: [
      /* @__PURE__ */ r.jsx("div", { className: "sticky top-[52px] z-10 bg-background/95 backdrop-blur-sm py-3 -mx-4 px-4 md:-mx-8 md:px-8 lg:-mx-12 lg:px-12 border-b border-border", children: /* @__PURE__ */ r.jsxs("div", { className: "flex items-center gap-2 flex-wrap", children: [
        /* @__PURE__ */ r.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ r.jsxs(
            "button",
            {
              className: "inline-flex items-center gap-1.5 px-2.5 py-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors",
              onClick: () => L(!B),
              children: [
                p === -1 ? "全部级别" : kr[p].label,
                /* @__PURE__ */ r.jsx(ei, { size: 12 })
              ]
            }
          ),
          B && /* @__PURE__ */ r.jsxs("div", { className: "absolute top-full left-0 mt-1 bg-popover border border-border rounded-md shadow-lg z-20 min-w-[100px] py-1", children: [
            /* @__PURE__ */ r.jsx(
              "button",
              {
                className: "w-full text-left px-3 py-1.5 text-xs hover:bg-accent transition-colors",
                onClick: () => {
                  b(-1), L(!1);
                },
                children: "全部级别"
              }
            ),
            Object.entries(kr).map(([te, ce]) => /* @__PURE__ */ r.jsxs(
              "button",
              {
                className: "w-full text-left px-3 py-1.5 text-xs hover:bg-accent transition-colors",
                onClick: () => {
                  b(Number(te)), L(!1);
                },
                children: [
                  ce.icon,
                  " ",
                  ce.label
                ]
              },
              te
            ))
          ] })
        ] }),
        /* @__PURE__ */ r.jsx("div", { className: "w-px h-4 bg-border" }),
        /* @__PURE__ */ r.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ r.jsxs(
            "button",
            {
              className: "inline-flex items-center gap-1.5 px-2.5 py-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors",
              onClick: () => H(!$),
              children: [
                _,
                /* @__PURE__ */ r.jsx(ei, { size: 12 })
              ]
            }
          ),
          $ && /* @__PURE__ */ r.jsx("div", { className: "absolute top-full left-0 mt-1 bg-popover border border-border rounded-md shadow-lg z-20 min-w-[120px] py-1 max-h-48 overflow-y-auto", children: b5.map((te) => /* @__PURE__ */ r.jsx(
            "button",
            {
              className: "w-full text-left px-3 py-1.5 text-xs hover:bg-accent transition-colors",
              onClick: () => {
                T(te), H(!1);
              },
              children: te
            },
            te
          )) })
        ] }),
        /* @__PURE__ */ r.jsx("div", { className: "w-px h-4 bg-border" }),
        /* @__PURE__ */ r.jsxs("div", { className: "flex items-center gap-1.5 text-muted-foreground", children: [
          /* @__PURE__ */ r.jsx(Wn, { size: 12 }),
          /* @__PURE__ */ r.jsx(
            "input",
            {
              type: "text",
              placeholder: "搜索日志...",
              value: v,
              onChange: (te) => C(te.target.value),
              className: "bg-transparent border-none outline-none text-xs text-foreground placeholder:text-muted-foreground w-24 md:w-40"
            }
          )
        ] }),
        /* @__PURE__ */ r.jsxs("div", { className: "flex items-center gap-1 ml-auto", children: [
          /* @__PURE__ */ r.jsx(
            "button",
            {
              className: `p-1.5 rounded transition-colors ${R ? "text-primary" : "text-muted-foreground hover:text-foreground"}`,
              onClick: () => Z(!R),
              title: "自动滚动",
              children: /* @__PURE__ */ r.jsx(q4, { size: 14 })
            }
          ),
          /* @__PURE__ */ r.jsx(
            "button",
            {
              className: "p-1.5 rounded text-muted-foreground hover:text-foreground transition-colors",
              onClick: q,
              title: "清空",
              children: /* @__PURE__ */ r.jsx(ii, { size: 14 })
            }
          ),
          /* @__PURE__ */ r.jsxs(
            "button",
            {
              className: "inline-flex items-center gap-1 px-2 py-1 text-xs text-muted-foreground hover:text-foreground transition-colors",
              onClick: ie,
              children: [
                /* @__PURE__ */ r.jsx(wr, { size: 12 }),
                "导出"
              ]
            }
          )
        ] })
      ] }) }),
      /* @__PURE__ */ r.jsx("div", { className: "flex-1 overflow-y-auto font-mono text-xs leading-relaxed py-2", children: m.length === 0 ? /* @__PURE__ */ r.jsxs("div", { className: "flex flex-col items-center justify-center h-full gap-3 text-muted-foreground", children: [
        /* @__PURE__ */ r.jsx($a, { size: 32, strokeWidth: 1, className: "opacity-30" }),
        /* @__PURE__ */ r.jsx("p", { className: "text-sm font-light", children: "暂无日志记录" })
      ] }) : /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
        m.map((te) => /* @__PURE__ */ r.jsx(d5, { entry: te }, te.id)),
        /* @__PURE__ */ r.jsx("div", { ref: ee })
      ] }) }),
      /* @__PURE__ */ r.jsxs("div", { className: "text-[10px] text-muted-foreground py-2 border-t border-border", children: [
        c.length,
        " 条日志",
        m.length !== c.length && ` · ${m.length} 条匹配`
      ] })
    ] }),
    s === "model" && /* @__PURE__ */ r.jsx("div", { className: "flex-1 overflow-hidden", children: /* @__PURE__ */ r.jsx(y5, {}) })
  ] });
}, j5 = {
  default: "text-muted-foreground bg-muted/50",
  primary: "text-primary bg-primary/10",
  blue: "text-blue-500 bg-blue-500/10",
  purple: "text-purple-500 bg-purple-500/10",
  orange: "text-orange-500 bg-orange-500/10",
  emerald: "text-emerald-500 bg-emerald-500/10"
}, C5 = ({
  icon: s,
  title: u,
  subtitle: c,
  meta: o,
  badges: m = [],
  selected: h = !1,
  disabled: v = !1,
  toggle: C,
  onClick: p,
  actions: b = [],
  className: _ = "",
  compact: T = !1
}) => {
  const R = b.filter((B) => !B.hidden), Z = !!C;
  return /* @__PURE__ */ r.jsxs(
    "div",
    {
      className: `
                group relative flex items-center gap-3 
                ${T ? "py-2 px-2" : "py-3 px-3"}
                rounded-lg cursor-pointer transition-all duration-150
                ${h ? "bg-accent/60" : "hover:bg-muted/40"}
                ${v ? "opacity-50 pointer-events-none" : ""}
                ${_}
            `,
      onClick: p,
      children: [
        (s || Z) && /* @__PURE__ */ r.jsx("div", { className: "flex-shrink-0", children: Z ? /* @__PURE__ */ r.jsx(
          "button",
          {
            className: `
                                w-7 h-7 flex items-center justify-center rounded-md transition-colors
                                ${C.checked ? "text-primary" : "text-muted-foreground hover:text-foreground"}
                            `,
            onClick: (B) => {
              B.stopPropagation(), C.onChange(!C.checked);
            },
            children: /* @__PURE__ */ r.jsx(Dc, { size: 14 })
          }
        ) : /* @__PURE__ */ r.jsx("div", { className: `
                            w-7 h-7 flex items-center justify-center rounded-md transition-colors
                            ${h ? "text-primary" : "text-muted-foreground group-hover:text-foreground"}
                        `, children: s }) }),
        /* @__PURE__ */ r.jsxs("div", { className: "flex-1 min-w-0", children: [
          /* @__PURE__ */ r.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ r.jsx("span", { className: `
                        text-sm font-medium truncate transition-colors
                        ${h ? "text-foreground" : "text-muted-foreground group-hover:text-foreground"}
                        ${C && !C.checked ? "line-through opacity-60" : ""}
                    `, children: u }),
            m.map((B, L) => /* @__PURE__ */ r.jsx(
              "span",
              {
                className: `
                                text-[10px] px-1.5 py-0.5 rounded-sm font-medium flex-shrink-0
                                ${j5[B.color || "default"]}
                            `,
                children: B.text
              },
              L
            ))
          ] }),
          (c || o) && /* @__PURE__ */ r.jsxs("div", { className: "flex items-center justify-between mt-0.5 text-[11px] text-muted-foreground/70", children: [
            c && /* @__PURE__ */ r.jsx("span", { className: "truncate", children: c }),
            o && /* @__PURE__ */ r.jsx("span", { className: "flex-shrink-0 font-mono", children: o })
          ] })
        ] }),
        h && !R.length && /* @__PURE__ */ r.jsx(e3, { size: 14, className: "text-primary flex-shrink-0" }),
        R.length > 0 && /* @__PURE__ */ r.jsx("div", { className: `
                    flex items-center gap-0.5 flex-shrink-0
                    ${h ? "opacity-100" : "opacity-0 group-hover:opacity-100"}
                    transition-opacity
                `, children: R.map((B, L) => /* @__PURE__ */ r.jsx(
          "button",
          {
            className: `
                                p-1.5 rounded transition-colors
                                ${B.danger ? "text-muted-foreground hover:text-destructive hover:bg-destructive/10" : "text-muted-foreground hover:text-foreground hover:bg-muted"}
                            `,
            onClick: ($) => {
              $.stopPropagation(), B.onClick($);
            },
            title: B.title,
            children: B.icon
          },
          L
        )) })
      ]
    }
  );
}, N5 = ({
  preset: s,
  isSelected: u,
  onSelect: c,
  onEdit: o,
  onCopy: m,
  onDelete: h
}) => {
  var p;
  const v = s.source === "tavern" || s.source === "tavern_profile" ? k1 : o3, C = s.source === "custom" ? ((p = s.custom) == null ? void 0 : p.model) || "未设置" : "使用当前";
  return /* @__PURE__ */ r.jsx(
    C5,
    {
      icon: /* @__PURE__ */ r.jsx(v, { size: 14 }),
      title: s.name,
      subtitle: C,
      meta: `T:${s.parameters.temperature}`,
      badges: s.isDefault ? [{ text: "DEFAULT", color: "primary" }] : [],
      selected: u,
      onClick: c,
      actions: [
        { icon: /* @__PURE__ */ r.jsx(q3, { size: 12 }), onClick: () => o(), title: "编辑" },
        { icon: /* @__PURE__ */ r.jsx(z1, { size: 12 }), onClick: () => m(), title: "复制" },
        { icon: /* @__PURE__ */ r.jsx(ii, { size: 12 }), onClick: () => h(), title: "删除", danger: !0, hidden: s.isDefault }
      ]
    }
  );
}, bt = ({ title: s, description: u, children: c, className: o = "" }) => /* @__PURE__ */ r.jsxs("div", { className: `mb-8 ${o}`, children: [
  /* @__PURE__ */ r.jsxs("div", { className: "mb-4", children: [
    /* @__PURE__ */ r.jsx("h3", { className: "text-sm font-medium text-foreground", children: s }),
    u && /* @__PURE__ */ r.jsx("p", { className: "text-xs text-muted-foreground mt-1", children: u })
  ] }),
  /* @__PURE__ */ r.jsx("div", { className: "space-y-4", children: c })
] }), ct = ({
  label: s,
  description: u,
  error: c,
  required: o,
  className: m = "",
  value: h,
  onChange: v,
  placeholder: C,
  type: p = "text",
  disabled: b,
  multiline: _,
  rows: T = 3
}) => /* @__PURE__ */ r.jsxs("div", { className: `flex flex-col gap-1.5 ${m}`, children: [
  /* @__PURE__ */ r.jsxs("label", { className: "text-xs font-medium text-muted-foreground flex items-center gap-1", children: [
    s,
    o && /* @__PURE__ */ r.jsx("span", { className: "text-destructive", children: "*" })
  ] }),
  /* @__PURE__ */ r.jsx("div", { className: "relative group", children: _ ? /* @__PURE__ */ r.jsx(
    "textarea",
    {
      value: h,
      onChange: (R) => v(R.target.value),
      placeholder: C,
      disabled: b,
      rows: T,
      className: `
                            engram-input w-full bg-transparent text-foreground text-sm px-3 py-2 border border-input rounded-md
                            focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-mono placeholder-muted-foreground/50
                            disabled:opacity-50 disabled:cursor-not-allowed
                        `
    }
  ) : /* @__PURE__ */ r.jsx(
    "input",
    {
      type: p,
      value: h,
      onChange: (R) => v(R.target.value),
      placeholder: C,
      disabled: b,
      className: `
                            engram-input w-full bg-transparent text-foreground text-sm px-3 py-2 border border-input rounded-md
                            focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-mono placeholder-muted-foreground/50
                            disabled:opacity-50 disabled:cursor-not-allowed
                        `
    }
  ) }),
  u && /* @__PURE__ */ r.jsx("p", { className: "text-[10px] text-muted-foreground/80", children: u }),
  c && /* @__PURE__ */ r.jsx("p", { className: "text-[10px] text-destructive", children: c })
] }), sl = ({
  label: s,
  description: u,
  error: c,
  required: o,
  className: m = "",
  value: h,
  onChange: v,
  min: C,
  max: p,
  step: b = 1,
  showSlider: _ = !0
}) => /* @__PURE__ */ r.jsxs("div", { className: `flex flex-col gap-1.5 ${m}`, children: [
  /* @__PURE__ */ r.jsxs("div", { className: "flex justify-between items-center", children: [
    /* @__PURE__ */ r.jsxs("label", { className: "text-xs font-medium text-muted-foreground flex items-center gap-1", children: [
      s,
      o && /* @__PURE__ */ r.jsx("span", { className: "text-destructive", children: "*" })
    ] }),
    /* @__PURE__ */ r.jsx("div", { className: "text-[10px] font-mono text-muted-foreground bg-muted px-1.5 rounded", children: h })
  ] }),
  /* @__PURE__ */ r.jsxs("div", { className: "flex items-center gap-3", children: [
    _ && C !== void 0 && p !== void 0 && /* @__PURE__ */ r.jsx(
      "input",
      {
        type: "range",
        min: C,
        max: p,
        step: b,
        value: h,
        onChange: (T) => v(Number(T.target.value)),
        className: "flex-1 h-1 bg-muted rounded-lg appearance-none cursor-pointer accent-primary hover:accent-primary/80"
      }
    ),
    /* @__PURE__ */ r.jsx(
      "input",
      {
        type: "number",
        min: C,
        max: p,
        step: b,
        value: h,
        onChange: (T) => v(Number(T.target.value)),
        className: `
                        bg-transparent border border-input rounded-md text-foreground text-xs px-2 py-1 font-mono text-center
                        focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all w-20
                        [appearance:textfield] [&::-webkit-outer-spin-button]:m-0 [&::-webkit-inner-spin-button]:m-0
                    `
      }
    )
  ] }),
  u && /* @__PURE__ */ r.jsx("p", { className: "text-[10px] text-muted-foreground/80", children: u }),
  c && /* @__PURE__ */ r.jsx("p", { className: "text-[10px] text-destructive", children: c })
] }), na = ({
  label: s,
  description: u,
  error: c,
  required: o,
  className: m = "",
  value: h,
  onChange: v,
  options: C,
  placeholder: p = "Select...",
  disabled: b
}) => /* @__PURE__ */ r.jsxs("div", { className: `flex flex-col gap-1.5 ${m}`, children: [
  /* @__PURE__ */ r.jsxs("label", { className: "text-xs font-medium text-muted-foreground flex items-center gap-1", children: [
    s,
    o && /* @__PURE__ */ r.jsx("span", { className: "text-destructive", children: "*" })
  ] }),
  /* @__PURE__ */ r.jsxs("div", { className: "relative", children: [
    /* @__PURE__ */ r.jsxs(
      "select",
      {
        value: h,
        onChange: (_) => v(_.target.value),
        disabled: b,
        className: `
                        engram-select w-full bg-transparent text-foreground text-sm pl-3 pr-8 py-2 border border-input rounded-md
                        focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all appearance-none cursor-pointer
                        disabled:opacity-50 disabled:cursor-not-allowed
                    `,
        children: [
          /* @__PURE__ */ r.jsx("option", { value: "", disabled: !0, className: "bg-popover text-muted-foreground", children: p }),
          C.map((_) => /* @__PURE__ */ r.jsx("option", { value: _.value, className: "bg-popover text-foreground", children: _.label }, _.value))
        ]
      }
    ),
    /* @__PURE__ */ r.jsx(ei, { size: 14, className: "absolute right-0 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none" })
  ] }),
  u && /* @__PURE__ */ r.jsx("p", { className: "text-[10px] text-muted-foreground/80", children: u }),
  c && /* @__PURE__ */ r.jsx("p", { className: "text-[10px] text-destructive", children: c })
] }), Ur = ({
  label: s,
  description: u,
  error: c,
  className: o = "",
  checked: m,
  onChange: h,
  disabled: v
}) => /* @__PURE__ */ r.jsxs("div", { className: `flex items-start justify-between gap-4 py-1 ${o} ${v ? "opacity-50 pointer-events-none" : ""}`, children: [
  /* @__PURE__ */ r.jsxs("div", { className: "flex-1", children: [
    /* @__PURE__ */ r.jsx("label", { className: "text-xs font-medium text-foreground cursor-pointer", onClick: () => !v && h(!m), children: s }),
    u && /* @__PURE__ */ r.jsx("p", { className: "text-[10px] text-muted-foreground/80 mt-0.5", children: u }),
    c && /* @__PURE__ */ r.jsx("p", { className: "text-[10px] text-destructive mt-0.5", children: c })
  ] }),
  /* @__PURE__ */ r.jsx(
    "button",
    {
      type: "button",
      role: "switch",
      "aria-checked": m,
      onClick: () => !v && h(!m),
      disabled: v,
      className: `
                    relative inline-flex h-5 w-9 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none
                    ${m ? "bg-primary" : "bg-input"}
                `,
      children: /* @__PURE__ */ r.jsx(
        "span",
        {
          className: `
                        pointer-events-none inline-block h-4 w-4 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out
                        ${m ? "translate-x-4" : "translate-x-0"}
                    `
        }
      )
    }
  )
] }), E5 = [
  { value: "openai", label: "OpenAI" },
  { value: "anthropic", label: "Anthropic" },
  { value: "ollama", label: "Ollama" },
  { value: "vllm", label: "vLLM" },
  { value: "azure", label: "Azure OpenAI" },
  { value: "custom", label: "自定义" }
], T5 = [
  { value: "tavern", label: "使用酒馆当前配置" },
  { value: "tavern_profile", label: "使用酒馆配置文件" },
  { value: "custom", label: "自定义 API 配置" }
];
function _5() {
  var s, u, c, o;
  try {
    const m = (c = (u = (s = window.SillyTavern) == null ? void 0 : s.getContext) == null ? void 0 : u.call(s)) == null ? void 0 : c.extensionSettings;
    return ((o = m == null ? void 0 : m.connectionManager) == null ? void 0 : o.profiles) || [];
  } catch (m) {
    return console.warn("[Engram] 无法获取酒馆 connection_profiles:", m), [];
  }
}
const z5 = ({
  preset: s,
  onChange: u,
  isNew: c = !1
}) => {
  var L, $, H, ee;
  const [o, m] = D.useState([]), [h, v] = D.useState(!1), C = () => {
    v(!0);
    try {
      const q = _5();
      m(q);
    } finally {
      v(!1);
    }
  };
  D.useEffect(() => {
    C();
  }, []);
  const p = (q) => {
    u({ ...s, ...q, updatedAt: Date.now() });
  }, b = (q, ie) => {
    p({
      parameters: { ...s.parameters, [q]: ie }
    });
  }, _ = (q, ie) => {
    p({
      context: { ...s.context, [q]: ie }
    });
  }, T = (q, ie) => {
    var te, ce, I, Me;
    p({
      custom: {
        apiUrl: ((te = s.custom) == null ? void 0 : te.apiUrl) || "",
        apiKey: ((ce = s.custom) == null ? void 0 : ce.apiKey) || "",
        model: ((I = s.custom) == null ? void 0 : I.model) || "",
        apiSource: ((Me = s.custom) == null ? void 0 : Me.apiSource) || "openai",
        [q]: ie
      }
    });
  }, R = (q) => {
    const ie = q;
    p({
      source: ie,
      tavernProfileId: ie === "tavern_profile" ? s.tavernProfileId : void 0
    }), ie === "tavern_profile" && C();
  }, Z = o.map((q) => ({
    value: q.id,
    label: `${q.name} (${q.api || "Unknown"} - ${q.model || "Unknown"})`
  })), B = o.find((q) => q.id === s.tavernProfileId);
  return /* @__PURE__ */ r.jsxs("div", { className: "", children: [
    /* @__PURE__ */ r.jsxs(bt, { title: "基本信息", children: [
      /* @__PURE__ */ r.jsx(
        ct,
        {
          label: "预设名称",
          value: s.name,
          onChange: (q) => p({ name: q }),
          placeholder: "输入预设名称",
          required: !0
        }
      ),
      /* @__PURE__ */ r.jsx(
        na,
        {
          label: "配置源",
          value: s.source,
          onChange: R,
          options: T5,
          description: "选择 API 配置的来源"
        }
      )
    ] }),
    s.source === "tavern_profile" && /* @__PURE__ */ r.jsxs(bt, { title: "酒馆配置文件", description: "选择一个已保存的酒馆连接配置", children: [
      /* @__PURE__ */ r.jsxs("div", { className: "flex items-end gap-2", children: [
        /* @__PURE__ */ r.jsx(
          na,
          {
            className: "flex-1 !mb-0",
            label: "选择配置文件",
            value: s.tavernProfileId || "",
            onChange: (q) => p({ tavernProfileId: q }),
            options: Z,
            placeholder: h ? "加载中..." : "请选择配置文件",
            disabled: h || Z.length === 0
          }
        ),
        /* @__PURE__ */ r.jsx(
          "button",
          {
            type: "button",
            className: "h-[42px] w-[42px] min-w-[42px] flex items-center justify-center border-none rounded-md bg-muted text-muted-foreground cursor-pointer transition-all hover:bg-accent hover:text-foreground",
            onClick: C,
            disabled: h,
            title: "刷新配置列表",
            children: /* @__PURE__ */ r.jsx(ti, { size: 16, className: h ? "animate-spin" : "" })
          }
        )
      ] }),
      Z.length === 0 && !h && /* @__PURE__ */ r.jsx("div", { className: "p-3 bg-muted/30 border border-dashed border-border rounded-lg text-muted-foreground text-sm text-center mt-3", children: "未找到酒馆配置文件。请在酒馆中创建连接配置后刷新。" }),
      B && /* @__PURE__ */ r.jsxs("div", { className: "mt-4 p-3 bg-card rounded-lg border border-border", children: [
        /* @__PURE__ */ r.jsxs("div", { className: "flex items-center gap-2 py-1 text-sm border-b border-border last:border-0", children: [
          /* @__PURE__ */ r.jsx("span", { className: "text-muted-foreground min-w-[60px]", children: "API:" }),
          /* @__PURE__ */ r.jsx("span", { className: "text-foreground font-mono", children: B.api || "-" })
        ] }),
        /* @__PURE__ */ r.jsxs("div", { className: "flex items-center gap-2 py-1 text-sm border-b border-border last:border-0", children: [
          /* @__PURE__ */ r.jsx("span", { className: "text-muted-foreground min-w-[60px]", children: "模型:" }),
          /* @__PURE__ */ r.jsx("span", { className: "text-foreground font-mono", children: B.model || "-" })
        ] }),
        /* @__PURE__ */ r.jsxs("div", { className: "flex items-center gap-2 py-1 text-sm border-b border-border last:border-0", children: [
          /* @__PURE__ */ r.jsx("span", { className: "text-muted-foreground min-w-[60px]", children: "预设:" }),
          /* @__PURE__ */ r.jsx("span", { className: "text-foreground font-mono", children: B.preset || "-" })
        ] })
      ] })
    ] }),
    s.source === "custom" && /* @__PURE__ */ r.jsxs(bt, { title: "API 配置", description: "自定义 API 端点和密钥", children: [
      /* @__PURE__ */ r.jsx(
        na,
        {
          label: "API 类型",
          value: ((L = s.custom) == null ? void 0 : L.apiSource) || "openai",
          onChange: (q) => T("apiSource", q),
          options: E5
        }
      ),
      /* @__PURE__ */ r.jsx(
        ct,
        {
          label: "API URL",
          type: "url",
          value: (($ = s.custom) == null ? void 0 : $.apiUrl) || "",
          onChange: (q) => T("apiUrl", q),
          placeholder: "https://api.openai.com/v1",
          required: !0
        }
      ),
      /* @__PURE__ */ r.jsx(
        ct,
        {
          label: "API Key",
          type: "password",
          value: ((H = s.custom) == null ? void 0 : H.apiKey) || "",
          onChange: (q) => T("apiKey", q),
          placeholder: "sk-..."
        }
      ),
      /* @__PURE__ */ r.jsx(
        ct,
        {
          label: "模型名称",
          value: ((ee = s.custom) == null ? void 0 : ee.model) || "",
          onChange: (q) => T("model", q),
          placeholder: "gpt-4o-mini",
          required: !0
        }
      )
    ] }),
    /* @__PURE__ */ r.jsxs(bt, { title: "采样参数", description: "控制模型输出的随机性和多样性", children: [
      /* @__PURE__ */ r.jsx(
        sl,
        {
          label: "温度 (Temperature)",
          value: s.parameters.temperature,
          onChange: (q) => b("temperature", q),
          min: 0,
          max: 2,
          step: 0.1,
          description: "较高的值使输出更随机，较低的值使输出更确定"
        }
      ),
      /* @__PURE__ */ r.jsx(
        sl,
        {
          label: "Top-P",
          value: s.parameters.topP,
          onChange: (q) => b("topP", q),
          min: 0,
          max: 1,
          step: 0.05,
          description: "核采样阈值，控制候选 token 的累积概率"
        }
      ),
      /* @__PURE__ */ r.jsx(
        sl,
        {
          label: "最大输出 Tokens",
          value: s.parameters.maxTokens,
          onChange: (q) => b("maxTokens", q),
          min: 64,
          max: 16384,
          step: 64,
          showSlider: !1
        }
      ),
      /* @__PURE__ */ r.jsx(
        sl,
        {
          label: "频率惩罚",
          value: s.parameters.frequencyPenalty,
          onChange: (q) => b("frequencyPenalty", q),
          min: -2,
          max: 2,
          step: 0.1,
          description: "降低重复 token 的概率"
        }
      ),
      /* @__PURE__ */ r.jsx(
        sl,
        {
          label: "存在惩罚",
          value: s.parameters.presencePenalty,
          onChange: (q) => b("presencePenalty", q),
          min: -2,
          max: 2,
          step: 0.1,
          description: "鼓励模型讨论新主题"
        }
      )
    ] }),
    /* @__PURE__ */ r.jsxs(bt, { title: "上下文设置", description: "控制发送给模型的上下文内容", children: [
      /* @__PURE__ */ r.jsx(
        sl,
        {
          label: "聊天历史条数",
          value: s.context.maxChatHistory,
          onChange: (q) => _("maxChatHistory", q),
          min: 0,
          max: 100,
          step: 1,
          showSlider: !1,
          description: "使用多少条聊天历史（0 表示不使用）"
        }
      ),
      /* @__PURE__ */ r.jsx(
        Ur,
        {
          label: "包含世界书设定",
          checked: s.context.includeWorldInfo,
          onChange: (q) => _("includeWorldInfo", q),
          description: "是否在提示词中包含已激活的世界书内容"
        }
      ),
      s.context.includeWorldInfo && /* @__PURE__ */ r.jsx(
        sl,
        {
          label: "世界书 Token 预算",
          value: s.context.worldInfoBudget,
          onChange: (q) => _("worldInfoBudget", q),
          min: 256,
          max: 8192,
          step: 256,
          showSlider: !1,
          description: "分配给世界书内容的最大 token 数"
        }
      )
    ] })
  ] });
}, M5 = [
  { value: "transformers", label: "Transformers (本地)" },
  { value: "openai", label: "OpenAI Embeddings" },
  { value: "ollama", label: "Ollama" },
  { value: "vllm", label: "vLLM" },
  { value: "cohere", label: "Cohere" },
  { value: "jina", label: "Jina AI" },
  { value: "voyage", label: "Voyage AI" }
], g1 = {
  transformers: "Xenova/all-MiniLM-L6-v2",
  openai: "text-embedding-3-small",
  ollama: "nomic-embed-text",
  vllm: "BAAI/bge-m3",
  cohere: "embed-multilingual-v3.0",
  jina: "jina-embeddings-v3",
  voyage: "voyage-large-2"
}, p1 = ["ollama", "vllm"], x1 = ["openai", "cohere", "jina", "voyage"], A5 = ({
  config: s,
  onChange: u
}) => {
  var v;
  const c = (C) => {
    u({ ...s, ...C });
  }, o = (C) => {
    c({
      source: C,
      model: g1[C],
      apiUrl: p1.includes(C) ? s.apiUrl : void 0,
      apiKey: x1.includes(C) ? s.apiKey : void 0
    });
  }, m = p1.includes(s.source), h = x1.includes(s.source);
  return /* @__PURE__ */ r.jsxs("div", { className: "", children: [
    /* @__PURE__ */ r.jsxs(bt, { title: "向量化设置", description: "配置文本向量化使用的模型和端点", children: [
      /* @__PURE__ */ r.jsx(
        na,
        {
          label: "向量源",
          value: s.source,
          onChange: (C) => o(C),
          options: M5,
          description: "选择向量化服务提供商"
        }
      ),
      m && /* @__PURE__ */ r.jsx(
        ct,
        {
          label: "API URL",
          type: "url",
          value: s.apiUrl || "",
          onChange: (C) => c({ apiUrl: C }),
          placeholder: s.source === "ollama" ? "http://localhost:11434" : "http://localhost:8000",
          description: `${s.source} 服务的 API 端点`
        }
      ),
      h && /* @__PURE__ */ r.jsx(
        ct,
        {
          label: "API Key",
          type: "password",
          value: s.apiKey || "",
          onChange: (C) => c({ apiKey: C }),
          placeholder: "输入 API 密钥"
        }
      ),
      /* @__PURE__ */ r.jsx(
        ct,
        {
          label: "模型名称",
          value: s.model || "",
          onChange: (C) => c({ model: C }),
          placeholder: g1[s.source],
          description: "使用的向量化模型"
        }
      )
    ] }),
    /* @__PURE__ */ r.jsx(bt, { title: "高级选项", collapsible: !0, defaultCollapsed: !0, children: /* @__PURE__ */ r.jsx(
      ct,
      {
        label: "向量维度",
        value: ((v = s.dimensions) == null ? void 0 : v.toString()) || "",
        onChange: (C) => {
          const p = parseInt(C, 10);
          c({ dimensions: isNaN(p) ? void 0 : p });
        },
        placeholder: "自动",
        description: "指定向量维度（留空则使用模型默认值）"
      }
    ) })
  ] });
}, w5 = [
  "BAAI/bge-reranker-v2-m3",
  "BAAI/bge-reranker-base",
  "BAAI/bge-reranker-large",
  "cross-encoder/ms-marco-MiniLM-L-12-v2",
  "Xenova/ms-marco-MiniLM-L-6-v2"
], k5 = ({
  config: s,
  onChange: u
}) => {
  const c = (o) => {
    u({ ...s, ...o });
  };
  return /* @__PURE__ */ r.jsxs("div", { className: "", children: [
    /* @__PURE__ */ r.jsx(bt, { title: "Rerank 设置", description: "配置重排序模型以优化检索结果", children: /* @__PURE__ */ r.jsx(
      Ur,
      {
        label: "启用 Rerank",
        checked: s.enabled,
        onChange: (o) => c({ enabled: o }),
        description: "使用 Rerank 模型对检索结果进行重新排序"
      }
    ) }),
    s.enabled && /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
      /* @__PURE__ */ r.jsxs(bt, { title: "API 配置", children: [
        /* @__PURE__ */ r.jsx(
          ct,
          {
            label: "API URL",
            type: "url",
            value: s.url,
            onChange: (o) => c({ url: o }),
            placeholder: "http://localhost:8000/rerank",
            description: "Rerank 服务的 API 端点",
            required: !0
          }
        ),
        /* @__PURE__ */ r.jsx(
          ct,
          {
            label: "API Key",
            type: "password",
            value: s.apiKey,
            onChange: (o) => c({ apiKey: o }),
            placeholder: "输入 API 密钥（如需要）"
          }
        ),
        /* @__PURE__ */ r.jsxs("div", { className: "flex flex-col gap-2", children: [
          /* @__PURE__ */ r.jsx(
            ct,
            {
              label: "模型名称",
              value: s.model,
              onChange: (o) => c({ model: o }),
              placeholder: "BAAI/bge-reranker-v2-m3",
              description: "使用的 Rerank 模型",
              required: !0
            }
          ),
          /* @__PURE__ */ r.jsxs("div", { children: [
            /* @__PURE__ */ r.jsx("span", { className: "block text-[10px] text-muted-foreground mb-2", children: "常用模型：" }),
            /* @__PURE__ */ r.jsx("div", { className: "flex flex-wrap gap-2", children: w5.map((o) => /* @__PURE__ */ r.jsx(
              "button",
              {
                type: "button",
                className: `
                                                px-2.5 py-1 border rounded text-xs cursor-pointer transition-all 
                                                ${s.model === o ? "bg-accent border-input text-foreground" : "bg-transparent border-transparent text-muted-foreground hover:bg-accent hover:text-foreground"}
                                            `,
                onClick: () => c({ model: o }),
                children: o.split("/").pop()
              },
              o
            )) })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ r.jsxs(bt, { title: "参数设置", children: [
        /* @__PURE__ */ r.jsx(
          sl,
          {
            label: "Top-N",
            value: s.topN,
            onChange: (o) => c({ topN: o }),
            min: 1,
            max: 50,
            step: 1,
            description: "重排后返回的结果数量"
          }
        ),
        /* @__PURE__ */ r.jsx(
          sl,
          {
            label: "混合权重 (Hybrid Alpha)",
            value: s.hybridAlpha,
            onChange: (o) => c({ hybridAlpha: o }),
            min: 0,
            max: 1,
            step: 0.1,
            description: "0 = 纯向量检索评分，1 = 纯 Rerank 评分"
          }
        )
      ] })
    ] })
  ] });
}, Hr = [
  { value: "text_summary", label: "纯文本总结", description: "将对话转为世界书条目" },
  { value: "vector_summary", label: "向量化总结", description: "输出结构化 JSON，含实体/关系" },
  { value: "trim", label: "精简/修剪", description: "合并、压缩旧的世界书条目" },
  { value: "query_enhance", label: "用户输入加强", description: "扩展用户输入，解决指代问题" }
], O5 = {
  temperature: 0.7,
  topP: 0.95,
  maxTokens: 2048,
  frequencyPenalty: 0,
  presencePenalty: 0
}, D5 = {
  maxChatHistory: 10,
  includeWorldInfo: !0,
  worldInfoBudget: 2048
}, R5 = {
  source: "transformers"
}, U5 = {
  enabled: !1,
  url: "",
  apiKey: "",
  model: "",
  topN: 5,
  hybridAlpha: 0.5
};
function G1(s = "默认预设") {
  const u = Date.now();
  return {
    id: `preset_${u}`,
    name: s,
    source: "tavern",
    parameters: { ...O5 },
    context: { ...D5 },
    isDefault: !0,
    createdAt: u,
    updatedAt: u
  };
}
function aa(s, u, c = {}) {
  const o = Date.now();
  return {
    id: `template_${o}_${Math.random().toString(36).slice(2, 8)}`,
    name: s,
    category: u,
    enabled: c.enabled ?? !1,
    isBuiltIn: c.isBuiltIn ?? !1,
    boundPresetId: c.boundPresetId ?? null,
    systemPrompt: c.systemPrompt ?? "",
    userPromptTemplate: c.userPromptTemplate ?? "",
    outputFormat: c.outputFormat ?? "plain",
    availableVariables: c.availableVariables ?? ["{{chatHistory}}", "{{context}}", "{{char}}", "{{user}}"],
    createdAt: o,
    updatedAt: o
  };
}
function H5() {
  return [
    aa("纯文本剧情总结", "text_summary", {
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
    aa("向量化剧情总结", "vector_summary", {
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
    aa("记忆精简", "trim", {
      enabled: !0,
      isBuiltIn: !0,
      systemPrompt: "你是一个信息压缩助手。请将多条剧情摘要合并、精简为一条更简洁的摘要，保留最重要的信息。",
      userPromptTemplate: `请将以下多条剧情摘要合并精简：

{{context}}

请输出一条精简后的综合摘要。`,
      outputFormat: "markdown"
    }),
    aa("查询增强", "query_enhance", {
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
const B5 = {
  enabled: !0,
  includeGlobal: !0
}, L5 = {
  enabled: !1,
  trigger: "token",
  tokenLimit: 4096,
  floorLimit: 50,
  countLimit: 5
};
function q5() {
  return {
    llmPresets: [G1()],
    selectedPresetId: null,
    vectorConfig: { ...R5 },
    rerankConfig: { ...U5 },
    promptTemplates: H5(),
    worldbookConfig: { ...B5 }
  };
}
function Y5(s) {
  switch (s) {
    case "text_summary":
      return "text-blue-500 bg-blue-500/10 border border-blue-500/20";
    case "vector_summary":
      return "text-purple-500 bg-purple-500/10 border border-purple-500/20";
    case "trim":
      return "text-orange-500 bg-orange-500/10 border border-orange-500/20";
    case "query_enhance":
      return "text-emerald-500 bg-emerald-500/10 border border-emerald-500/20";
    default:
      return "text-muted-foreground bg-muted border border-border";
  }
}
function G5(s) {
  var u;
  return ((u = Hr.find((c) => c.value === s)) == null ? void 0 : u.label) || s;
}
const V5 = ({
  template: s,
  isSelected: u = !1,
  onSelect: c,
  onCopy: o,
  onDelete: m,
  onToggleEnabled: h,
  onImport: v
}) => {
  const C = D.useRef(null), p = (T) => {
    T.stopPropagation();
    const R = {
      version: "1.0",
      exportedAt: Date.now(),
      template: {
        name: s.name,
        category: s.category,
        boundPresetId: s.boundPresetId,
        systemPrompt: s.systemPrompt,
        userPromptTemplate: s.userPromptTemplate,
        outputFormat: s.outputFormat,
        availableVariables: s.availableVariables
      }
    }, Z = new Blob([JSON.stringify(R, null, 2)], { type: "application/json" }), B = URL.createObjectURL(Z), L = document.createElement("a");
    L.href = B, L.download = `engram_template_${s.name.replace(/\s+/g, "_")}.json`, L.click(), URL.revokeObjectURL(B);
  }, b = (T) => {
    var R;
    T.stopPropagation(), (R = C.current) == null || R.click();
  }, _ = (T) => {
    var B;
    const R = (B = T.target.files) == null ? void 0 : B[0];
    if (!R || !v) return;
    const Z = new FileReader();
    Z.onload = (L) => {
      var $;
      try {
        const H = JSON.parse(($ = L.target) == null ? void 0 : $.result);
        if (H.version && H.template) {
          const ee = aa(
            H.template.name,
            H.template.category,
            {
              enabled: s.enabled,
              // 保持当前启用状态
              isBuiltIn: s.isBuiltIn,
              // 保持内置状态
              boundPresetId: H.template.boundPresetId,
              systemPrompt: H.template.systemPrompt,
              userPromptTemplate: H.template.userPromptTemplate,
              outputFormat: H.template.outputFormat,
              availableVariables: H.template.availableVariables
            }
          );
          ee.id = s.id, v(ee);
        }
      } catch (H) {
        console.error("导入失败:", H);
      }
    }, Z.readAsText(R), C.current && (C.current.value = "");
  };
  return /* @__PURE__ */ r.jsxs(
    "div",
    {
      className: `
                group relative p-3 rounded-lg border cursor-pointer transition-all duration-200
                ${u ? "bg-accent/50 border-input" : "bg-transparent border-transparent hover:bg-muted/50 hover:border-border"}
            `,
      onClick: c,
      children: [
        /* @__PURE__ */ r.jsxs("div", { className: "flex items-start gap-3", children: [
          /* @__PURE__ */ r.jsx(
            "button",
            {
              className: `
                        w-8 h-8 flex items-center justify-center rounded-lg transition-colors flex-shrink-0
                        ${s.enabled ? "bg-primary/10 text-primary" : "bg-muted text-muted-foreground hover:text-foreground"}
                    `,
              onClick: (T) => {
                T.stopPropagation(), h == null || h(!s.enabled);
              },
              children: /* @__PURE__ */ r.jsx(Dc, { size: 14 })
            }
          ),
          /* @__PURE__ */ r.jsxs("div", { className: "flex-1 min-w-0", children: [
            /* @__PURE__ */ r.jsxs("div", { className: "flex items-center justify-between gap-2", children: [
              /* @__PURE__ */ r.jsx("h4", { className: `text-sm font-medium truncate ${u ? "text-foreground" : "text-muted-foreground group-hover:text-foreground"}`, children: s.name }),
              /* @__PURE__ */ r.jsxs("div", { className: "flex items-center gap-1.5 flex-shrink-0", children: [
                /* @__PURE__ */ r.jsx("span", { className: `text-[10px] px-1.5 py-0.5 rounded-sm font-medium ${Y5(s.category)}`, children: G5(s.category) }),
                s.isBuiltIn && /* @__PURE__ */ r.jsx("span", { className: "text-[10px] px-1.5 py-0.5 rounded-sm bg-muted text-muted-foreground", children: "BUILTIN" })
              ] })
            ] }),
            /* @__PURE__ */ r.jsxs("div", { className: "mt-1 flex items-center justify-between text-[10px] text-muted-foreground/70 font-mono", children: [
              /* @__PURE__ */ r.jsx("span", { className: "truncate max-w-[120px]", children: s.boundPresetId ? `BOUND: ${s.boundPresetId}` : "DEFAULT PRESET" }),
              /* @__PURE__ */ r.jsx("span", { children: s.outputFormat.toUpperCase() })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ r.jsxs("div", { className: `mt-2 flex justify-end gap-1 ${u || "opacity-0 group-hover:opacity-100"} transition-opacity`, children: [
          /* @__PURE__ */ r.jsx("button", { className: "p-1.5 hover:bg-muted rounded text-muted-foreground hover:text-foreground transition-colors", onClick: b, title: "Import", children: /* @__PURE__ */ r.jsx(uh, { size: 12 }) }),
          /* @__PURE__ */ r.jsx("button", { className: "p-1.5 hover:bg-muted rounded text-muted-foreground hover:text-foreground transition-colors", onClick: p, title: "Export", children: /* @__PURE__ */ r.jsx(wr, { size: 12 }) }),
          /* @__PURE__ */ r.jsx("button", { className: "p-1.5 hover:bg-muted rounded text-muted-foreground hover:text-foreground transition-colors", onClick: (T) => {
            T.stopPropagation(), o == null || o();
          }, title: "Copy", children: /* @__PURE__ */ r.jsx(z1, { size: 12 }) }),
          !s.isBuiltIn && /* @__PURE__ */ r.jsx("button", { className: "p-1.5 hover:bg-destructive/10 rounded text-muted-foreground hover:text-destructive transition-colors", onClick: (T) => {
            T.stopPropagation(), m == null || m();
          }, title: "Delete", children: /* @__PURE__ */ r.jsx(ii, { size: 12 }) })
        ] }),
        /* @__PURE__ */ r.jsx(
          "input",
          {
            ref: C,
            type: "file",
            accept: ".json",
            onChange: _,
            className: "hidden"
          }
        )
      ]
    }
  );
}, X5 = ({
  templates: s,
  selectedId: u,
  onSelect: c,
  onAdd: o,
  onUpdate: m,
  onDelete: h
}) => {
  const v = () => {
    const T = aa(
      `新模板 ${s.length + 1}`,
      "text_summary"
    );
    o(T), c(T);
  }, C = (T) => {
    const R = aa(
      `${T.name} (副本)`,
      T.category,
      {
        enabled: !1,
        // 副本默认不启用
        boundPresetId: T.boundPresetId,
        systemPrompt: T.systemPrompt,
        userPromptTemplate: T.userPromptTemplate,
        outputFormat: T.outputFormat,
        availableVariables: [...T.availableVariables]
      }
    );
    o(R);
  }, p = (T, R) => {
    R && s.filter((Z) => Z.category === T.category && Z.id !== T.id && Z.enabled).forEach((Z) => m({ ...Z, enabled: !1 })), m({ ...T, enabled: R });
  }, b = (T) => {
    m(T);
  }, _ = Hr.map((T) => ({
    ...T,
    templates: s.filter((R) => R.category === T.value)
  })).filter((T) => T.templates.length > 0);
  return /* @__PURE__ */ r.jsxs("div", { className: "flex flex-col gap-4 h-full", children: [
    /* @__PURE__ */ r.jsxs("div", { className: "flex items-center justify-between gap-2", children: [
      /* @__PURE__ */ r.jsx("h3", { className: "text-xs font-bold text-muted-foreground uppercase tracking-wider", children: "提示词模板" }),
      /* @__PURE__ */ r.jsx(
        "button",
        {
          className: "text-muted-foreground hover:text-foreground transition-colors",
          onClick: v,
          children: /* @__PURE__ */ r.jsx(Oc, { size: 16 })
        }
      )
    ] }),
    /* @__PURE__ */ r.jsxs("div", { className: "flex flex-col gap-6 overflow-y-auto flex-1 no-scrollbar", children: [
      _.map((T) => /* @__PURE__ */ r.jsxs("div", { className: "flex flex-col gap-2", children: [
        /* @__PURE__ */ r.jsxs("div", { className: "text-[10px] items-center gap-2 text-muted-foreground font-medium px-1 uppercase tracking-wider flex", children: [
          T.label,
          /* @__PURE__ */ r.jsx("div", { className: "h-px bg-border flex-1" })
        ] }),
        /* @__PURE__ */ r.jsx("div", { className: "flex flex-col gap-1", children: T.templates.map((R) => /* @__PURE__ */ r.jsx(
          V5,
          {
            template: R,
            isSelected: u === R.id,
            onSelect: () => c(R),
            onCopy: () => C(R),
            onDelete: () => h(R),
            onToggleEnabled: (Z) => p(R, Z),
            onImport: b
          },
          R.id
        )) })
      ] }, T.value)),
      s.length === 0 && /* @__PURE__ */ r.jsxs("div", { className: "flex flex-col items-center justify-center py-12 text-muted-foreground gap-2 border border-dashed border-border rounded-lg", children: [
        /* @__PURE__ */ r.jsx(Mc, { size: 24, className: "opacity-50" }),
        /* @__PURE__ */ r.jsx("p", { className: "text-xs", children: "暂无模板" })
      ] })
    ] })
  ] });
}, Q5 = [
  { value: "plain", label: "纯文本" },
  { value: "markdown", label: "Markdown" },
  { value: "json", label: "JSON" }
], Z5 = ({
  template: s,
  llmPresets: u,
  defaultPresetId: c,
  onChange: o
}) => {
  var v, C;
  const m = [
    { value: "", label: "使用默认预设" + (c ? ` (${((v = u.find((p) => p.id === c)) == null ? void 0 : v.name) || c})` : "") },
    ...u.map((p) => ({ value: p.id, label: p.name }))
  ], h = (p) => {
    o({ ...s, ...p, updatedAt: Date.now() });
  };
  return /* @__PURE__ */ r.jsxs("div", { className: "flex flex-col gap-4", children: [
    /* @__PURE__ */ r.jsxs(bt, { title: "基本信息", children: [
      /* @__PURE__ */ r.jsx(
        ct,
        {
          label: "模板名称",
          value: s.name,
          onChange: (p) => h({ name: p }),
          placeholder: "输入模板名称",
          required: !0,
          disabled: s.isBuiltIn
        }
      ),
      /* @__PURE__ */ r.jsx(
        na,
        {
          label: "模板分类",
          value: s.category,
          onChange: (p) => h({ category: p }),
          options: Hr.map((p) => ({ value: p.value, label: p.label })),
          description: (C = Hr.find((p) => p.value === s.category)) == null ? void 0 : C.description
        }
      ),
      /* @__PURE__ */ r.jsx(
        na,
        {
          label: "模型来源",
          value: s.boundPresetId || "",
          onChange: (p) => h({ boundPresetId: p || null }),
          options: m,
          description: "选择用于此模板的 LLM 预设"
        }
      ),
      /* @__PURE__ */ r.jsx(
        na,
        {
          label: "输出格式",
          value: s.outputFormat,
          onChange: (p) => h({ outputFormat: p }),
          options: Q5
        }
      )
    ] }),
    /* @__PURE__ */ r.jsxs(bt, { title: "提示词内容", description: "支持变量：{{chatHistory}}, {{context}}, {{char}}, {{user}}, {{userInput}}", children: [
      /* @__PURE__ */ r.jsx(
        ct,
        {
          label: "系统提示词",
          value: s.systemPrompt,
          onChange: (p) => h({ systemPrompt: p }),
          placeholder: "输入系统提示词...",
          multiline: !0,
          rows: 4
        }
      ),
      /* @__PURE__ */ r.jsx(
        ct,
        {
          label: "用户提示词模板",
          value: s.userPromptTemplate,
          onChange: (p) => h({ userPromptTemplate: p }),
          placeholder: "输入用户提示词模板...",
          multiline: !0,
          rows: 6
        }
      )
    ] }),
    /* @__PURE__ */ r.jsxs("div", { className: "px-3 py-2 bg-muted/30 rounded border border-border", children: [
      /* @__PURE__ */ r.jsx("div", { className: "text-[10px] text-muted-foreground mb-2 font-medium uppercase tracking-wider", children: "可用变量" }),
      /* @__PURE__ */ r.jsx("div", { className: "flex flex-wrap gap-2", children: s.availableVariables.map((p) => /* @__PURE__ */ r.jsx("code", { className: "px-1.5 py-0.5 bg-muted rounded text-[10px] text-primary font-mono", children: p }, p)) })
    ] })
  ] });
}, K5 = ({
  rules: s,
  selectedId: u,
  onSelect: c,
  onToggle: o,
  onDelete: m,
  onAdd: h,
  onReset: v
}) => /* @__PURE__ */ r.jsxs("div", { className: "flex flex-col gap-4", children: [
  /* @__PURE__ */ r.jsxs("div", { className: "flex items-center justify-between", children: [
    /* @__PURE__ */ r.jsx("h3", { className: "text-xs font-bold text-muted-foreground uppercase tracking-wider", children: "正则规则列表" }),
    /* @__PURE__ */ r.jsxs("div", { className: "flex gap-2", children: [
      /* @__PURE__ */ r.jsx(
        "button",
        {
          className: "text-[10px] text-muted-foreground hover:text-destructive transition-colors",
          onClick: v,
          children: "重置默认"
        }
      ),
      /* @__PURE__ */ r.jsx(
        "button",
        {
          className: "text-muted-foreground hover:text-foreground transition-colors",
          onClick: h,
          children: /* @__PURE__ */ r.jsx(w1, { size: 16 })
        }
      )
    ] })
  ] }),
  /* @__PURE__ */ r.jsxs("div", { className: "flex flex-col gap-1", children: [
    s.map((C) => /* @__PURE__ */ r.jsxs(
      "div",
      {
        className: `
                            group p-3 rounded-lg transition-all duration-200 cursor-pointer border flex items-center gap-3
                            ${u === C.id ? "bg-accent/50 border-input" : "bg-transparent border-transparent hover:bg-muted/50 hover:border-border"}
                        `,
        onClick: () => c(C.id),
        children: [
          /* @__PURE__ */ r.jsx(
            "button",
            {
              className: `
                                w-8 h-8 flex items-center justify-center rounded-lg transition-colors
                                ${C.enabled ? u === C.id ? "bg-primary/20 text-primary" : "bg-muted text-primary" : "bg-muted text-muted-foreground"}
                            `,
              onClick: (p) => {
                p.stopPropagation(), o(C.id);
              },
              title: C.enabled ? "点击禁用" : "点击启用",
              children: /* @__PURE__ */ r.jsx(Dc, { size: 14 })
            }
          ),
          /* @__PURE__ */ r.jsxs("div", { className: "flex-1 min-w-0", children: [
            /* @__PURE__ */ r.jsx("div", { className: "flex items-center justify-between", children: /* @__PURE__ */ r.jsx("h4", { className: `text-sm font-medium truncate ${u === C.id ? "text-foreground" : "text-muted-foreground group-hover:text-foreground"} ${!C.enabled && "opacity-50 line-through"}`, children: C.name }) }),
            /* @__PURE__ */ r.jsx("div", { className: "mt-0.5 flex items-center gap-2", children: /* @__PURE__ */ r.jsxs("code", { className: "text-[10px] bg-muted px-1 rounded text-muted-foreground font-mono truncate max-w-[120px]", children: [
              "/",
              C.pattern,
              "/",
              C.flags
            ] }) })
          ] }),
          /* @__PURE__ */ r.jsx("div", { className: `flex items-center ${u === C.id ? "opacity-100" : "opacity-0 group-hover:opacity-100"} transition-opacity`, children: /* @__PURE__ */ r.jsx(
            "button",
            {
              className: "p-1.5 hover:bg-destructive/10 rounded text-muted-foreground hover:text-destructive transition-colors",
              onClick: (p) => {
                p.stopPropagation(), m(C.id);
              },
              children: /* @__PURE__ */ r.jsx(ii, { size: 12 })
            }
          ) })
        ]
      },
      C.id
    )),
    s.length === 0 && /* @__PURE__ */ r.jsx("div", { className: "text-center p-8 border border-dashed border-border rounded-lg", children: /* @__PURE__ */ r.jsx("p", { className: "text-xs text-muted-foreground", children: "无规则" }) })
  ] })
] }), li = [
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
class qc {
  constructor(u) {
    Qe(this, "rules", []);
    this.rules = u || [...li];
  }
  /**
   * 应用所有启用的规则处理文本
   */
  process(u) {
    let c = u;
    for (const o of this.rules)
      if (o.enabled)
        try {
          const m = new RegExp(o.pattern, o.flags);
          c = c.replace(m, o.replacement);
        } catch (m) {
          console.warn(`[RegexProcessor] 规则 "${o.name}" 执行失败:`, m);
        }
    return c;
  }
  /**
   * 使用指定规则处理文本（用于预览）
   */
  processWithRule(u, c) {
    try {
      const o = new RegExp(c.pattern, c.flags);
      return u.replace(o, c.replacement);
    } catch (o) {
      return console.warn("[RegexProcessor] 规则执行失败:", o), u;
    }
  }
  /**
   * 验证正则表达式是否有效
   */
  validatePattern(u, c) {
    try {
      return new RegExp(u, c), { valid: !0 };
    } catch (o) {
      return {
        valid: !1,
        error: o instanceof Error ? o.message : "无效的正则表达式"
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
  setRules(u) {
    this.rules = [...u];
  }
  /**
   * 添加规则
   */
  addRule(u) {
    this.rules.push(u);
  }
  /**
   * 更新规则
   */
  updateRule(u, c) {
    const o = this.rules.findIndex((m) => m.id === u);
    o >= 0 && (this.rules[o] = { ...this.rules[o], ...c });
  }
  /**
   * 删除规则
   */
  deleteRule(u) {
    this.rules = this.rules.filter((c) => c.id !== u);
  }
  /**
   * 启用/禁用规则
   */
  toggleRule(u) {
    const c = this.rules.find((o) => o.id === u);
    c && (c.enabled = !c.enabled);
  }
  /**
   * 重置为默认规则
   */
  resetToDefaults() {
    this.rules = [...li];
  }
  /**
   * 获取启用的规则数量
   */
  getEnabledCount() {
    return this.rules.filter((u) => u.enabled).length;
  }
}
const V1 = new qc(), J5 = [
  { value: "g", label: "全局匹配", description: "匹配所有结果" },
  { value: "i", label: "忽略大小写", description: "不区分大小写" },
  { value: "m", label: "多行模式", description: "^$ 匹配每行" },
  { value: "s", label: "点号匹配换行", description: ". 匹配换行符" }
], $5 = ({ rule: s, onChange: u }) => {
  const [c, o] = D.useState(""), [m, h] = D.useState(""), [v, C] = D.useState({ valid: !0 }), p = new qc();
  D.useEffect(() => {
    const _ = p.validatePattern(s.pattern, s.flags);
    C(_);
  }, [s.pattern, s.flags]), D.useEffect(() => {
    if (c && v.valid) {
      const _ = p.processWithRule(c, s);
      h(_);
    } else
      h("");
  }, [c, s, v.valid]);
  const b = (_) => {
    const T = s.flags.split(""), R = T.indexOf(_);
    R >= 0 ? T.splice(R, 1) : T.push(_), u({ flags: T.join("") });
  };
  return /* @__PURE__ */ r.jsxs("div", { className: "flex flex-col gap-4", children: [
    /* @__PURE__ */ r.jsxs("div", { className: "flex flex-col gap-3", children: [
      /* @__PURE__ */ r.jsxs("div", { className: "flex flex-col gap-1.5", children: [
        /* @__PURE__ */ r.jsx("label", { className: "text-sm font-medium text-foreground", children: "规则名称" }),
        /* @__PURE__ */ r.jsx(
          "input",
          {
            type: "text",
            className: "w-full px-3 py-2 rounded-md border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring",
            value: s.name,
            onChange: (_) => u({ name: _.target.value }),
            placeholder: "例如：移除思维链"
          }
        )
      ] }),
      /* @__PURE__ */ r.jsxs("div", { className: "flex flex-col gap-1.5", children: [
        /* @__PURE__ */ r.jsx("label", { className: "text-sm font-medium text-foreground", children: "描述（可选）" }),
        /* @__PURE__ */ r.jsx(
          "input",
          {
            type: "text",
            className: "w-full px-3 py-2 rounded-md border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring",
            value: s.description || "",
            onChange: (_) => u({ description: _.target.value }),
            placeholder: "简短描述此规则的用途"
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ r.jsxs("div", { className: "flex flex-col gap-3 p-4 bg-card border border-border rounded-lg", children: [
      /* @__PURE__ */ r.jsxs("div", { className: "flex flex-col gap-1.5", children: [
        /* @__PURE__ */ r.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ r.jsx("label", { className: "text-sm font-medium text-foreground", children: "正则表达式" }),
          v.valid ? /* @__PURE__ */ r.jsx(_c, { size: 14, className: "text-green-500" }) : /* @__PURE__ */ r.jsx(Tc, { size: 14, className: "text-red-500" })
        ] }),
        /* @__PURE__ */ r.jsx(
          "input",
          {
            type: "text",
            className: `w-full px-3 py-2 rounded-md border bg-background text-foreground font-mono text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 ${v.valid ? "border-input focus:ring-ring" : "border-red-500 focus:ring-red-500"}`,
            value: s.pattern,
            onChange: (_) => u({ pattern: _.target.value }),
            placeholder: "例如：<think>[\\s\\S]*?</think>"
          }
        ),
        !v.valid && v.error && /* @__PURE__ */ r.jsx("p", { className: "text-xs text-red-500", children: v.error })
      ] }),
      /* @__PURE__ */ r.jsxs("div", { className: "flex flex-col gap-1.5", children: [
        /* @__PURE__ */ r.jsx("label", { className: "text-sm font-medium text-foreground", children: "替换为" }),
        /* @__PURE__ */ r.jsx(
          "input",
          {
            type: "text",
            className: "w-full px-3 py-2 rounded-md border border-input bg-background text-foreground font-mono text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring",
            value: s.replacement,
            onChange: (_) => u({ replacement: _.target.value }),
            placeholder: "留空表示删除匹配内容"
          }
        )
      ] }),
      /* @__PURE__ */ r.jsxs("div", { className: "flex flex-col gap-1.5", children: [
        /* @__PURE__ */ r.jsx("label", { className: "text-sm font-medium text-foreground", children: "匹配选项" }),
        /* @__PURE__ */ r.jsx("div", { className: "flex flex-wrap gap-2", children: J5.map((_) => /* @__PURE__ */ r.jsxs(
          "button",
          {
            className: `px-2 py-1 text-xs rounded-md border transition-colors ${s.flags.includes(_.value) ? "bg-primary-20 border-primary text-primary" : "bg-background border-border text-muted-foreground hover:bg-muted"}`,
            onClick: () => b(_.value),
            title: _.description,
            children: [
              _.label,
              " (",
              _.value,
              ")"
            ]
          },
          _.value
        )) })
      ] })
    ] }),
    /* @__PURE__ */ r.jsxs("div", { className: "flex flex-col gap-3 p-4 bg-muted-20 border border-border rounded-lg", children: [
      /* @__PURE__ */ r.jsxs("div", { className: "flex items-center gap-2 text-sm font-medium text-foreground", children: [
        /* @__PURE__ */ r.jsx(kc, { size: 14 }),
        "测试正则"
      ] }),
      /* @__PURE__ */ r.jsxs("div", { className: "flex flex-col gap-1.5", children: [
        /* @__PURE__ */ r.jsx("label", { className: "text-xs text-muted-foreground", children: "输入文本" }),
        /* @__PURE__ */ r.jsx(
          "textarea",
          {
            className: "w-full min-h-[80px] px-3 py-2 rounded-md border border-input bg-background text-foreground text-sm resize-y focus:outline-none focus:ring-2 focus:ring-ring",
            value: c,
            onChange: (_) => o(_.target.value),
            placeholder: `在此输入测试文本，例如：
<think>这是思考内容</think>
正常对话内容`
          }
        )
      ] }),
      c && v.valid && /* @__PURE__ */ r.jsxs("div", { className: "flex flex-col gap-1.5", children: [
        /* @__PURE__ */ r.jsx("label", { className: "text-xs text-muted-foreground", children: "处理结果" }),
        /* @__PURE__ */ r.jsx("div", { className: "min-h-[60px] px-3 py-2 rounded-md border border-border bg-background text-sm whitespace-pre-wrap", children: m || /* @__PURE__ */ r.jsx("span", { className: "text-muted-foreground italic", children: "（无内容）" }) })
      ] })
    ] }),
    /* @__PURE__ */ r.jsxs("div", { className: "flex items-start gap-2 p-3 bg-blue-500/10 border border-blue-500/30 rounded-lg text-sm text-blue-400", children: [
      /* @__PURE__ */ r.jsx(j3, { size: 16, className: "shrink-0 mt-0.5" }),
      /* @__PURE__ */ r.jsxs("div", { children: [
        "正则规则会在发送给 LLM 之前应用于聊天内容，用于清理干扰信息。 常用规则如移除思维链 ",
        /* @__PURE__ */ r.jsx("code", { className: "bg-blue-500/20 px-1 rounded", children: "<think>" }),
        " 标签等。"
      ] })
    ] })
  ] });
}, F5 = ({
  config: s,
  onChange: u
}) => {
  const c = (o) => {
    u({
      ...s,
      [o]: !s[o]
    });
  };
  return /* @__PURE__ */ r.jsx("div", { className: "", children: /* @__PURE__ */ r.jsxs(bt, { title: "世界书配置", description: "总结时会自动获取所有始终激活（constant=true）的世界书条目作为背景设定注入到提示词中。", children: [
    /* @__PURE__ */ r.jsx(
      Ur,
      {
        label: "启用世界书",
        description: "总结时注入始终激活（蓝灯）的世界书条目",
        checked: s.enabled,
        onChange: () => c("enabled")
      }
    ),
    /* @__PURE__ */ r.jsx(
      Ur,
      {
        label: "包含全局世界书",
        description: "关闭后只读取角色世界书和聊天世界书",
        checked: s.includeGlobal,
        onChange: () => c("includeGlobal"),
        disabled: !s.enabled
      }
    )
  ] }) });
};
function W5() {
  const [s, u] = D.useState(q5), [c, o] = D.useState(null), [m, h] = D.useState(null), [v, C] = D.useState(!1), [p, b] = D.useState([...li]), [_, T] = D.useState(null);
  D.useEffect(() => {
  }, []);
  const R = D.useCallback((X) => {
    u((S) => ({ ...S, selectedPresetId: X.id })), o(X);
  }, []), Z = D.useCallback(() => {
    const X = G1(`预设 ${s.llmPresets.length + 1}`);
    X.isDefault = !1, u((S) => ({
      ...S,
      llmPresets: [...S.llmPresets, X],
      selectedPresetId: X.id
    })), o(X), C(!0);
  }, [s.llmPresets.length]), B = D.useCallback((X) => {
    u((S) => ({
      ...S,
      llmPresets: S.llmPresets.map((U) => U.id === X.id ? X : U)
    })), o(X), C(!0);
  }, []), L = D.useCallback((X) => {
    const S = {
      ...X,
      id: `preset_${Date.now()}`,
      name: `${X.name} (副本)`,
      isDefault: !1,
      createdAt: Date.now(),
      updatedAt: Date.now()
    };
    u((U) => ({ ...U, llmPresets: [...U.llmPresets, S] })), C(!0);
  }, []), $ = D.useCallback((X) => {
    X.isDefault || (u((S) => ({
      ...S,
      llmPresets: S.llmPresets.filter((U) => U.id !== X.id),
      selectedPresetId: S.selectedPresetId === X.id ? null : S.selectedPresetId
    })), o((S) => (S == null ? void 0 : S.id) === X.id ? null : S), C(!0));
  }, []), H = D.useCallback((X) => {
    h(X);
  }, []), ee = D.useCallback((X) => {
    u((S) => ({
      ...S,
      promptTemplates: [...S.promptTemplates, X]
    })), C(!0);
  }, []), q = D.useCallback((X) => {
    u((S) => ({
      ...S,
      promptTemplates: S.promptTemplates.map((U) => U.id === X.id ? X : U)
    })), h(X), C(!0);
  }, []), ie = D.useCallback((X) => {
    X.isBuiltIn || (u((S) => ({
      ...S,
      promptTemplates: S.promptTemplates.filter((U) => U.id !== X.id)
    })), h((S) => (S == null ? void 0 : S.id) === X.id ? null : S), C(!0));
  }, []), te = D.useCallback((X) => {
    u((S) => ({ ...S, vectorConfig: X })), C(!0);
  }, []), ce = D.useCallback((X) => {
    u((S) => ({ ...S, rerankConfig: X })), C(!0);
  }, []), I = D.useCallback((X) => {
    u((S) => ({ ...S, worldbookConfig: X })), C(!0);
  }, []), Me = D.useCallback((X) => {
    const S = p.find((U) => U.id === X);
    T(S || null);
  }, [p]), Ge = D.useCallback(() => {
    const X = {
      id: `rule_${Date.now()}`,
      name: "新规则",
      pattern: "",
      replacement: "",
      enabled: !0,
      flags: "gi",
      description: ""
    };
    b((S) => [...S, X]), T(X), C(!0);
  }, []), Ut = D.useCallback((X) => {
    if (!_) return;
    const S = { ..._, ...X };
    T(S), b((U) => U.map((F) => F.id === S.id ? S : F)), C(!0);
  }, [_]), tt = D.useCallback((X) => {
    b((S) => S.map(
      (U) => U.id === X ? { ...U, enabled: !U.enabled } : U
    )), C(!0);
  }, []), me = D.useCallback((X) => {
    b((S) => S.filter((U) => U.id !== X)), T((S) => (S == null ? void 0 : S.id) === X ? null : S), C(!0);
  }, []), Vt = D.useCallback(() => {
    b([...li]), T(null), C(!0);
  }, []), wt = D.useCallback(() => {
    console.log("保存配置:", s, p), C(!1);
  }, [s, p]);
  return {
    settings: s,
    editingPreset: c,
    editingTemplate: m,
    hasChanges: v,
    regexRules: p,
    editingRule: _,
    selectPreset: R,
    addPreset: Z,
    updatePreset: B,
    copyPreset: L,
    deletePreset: $,
    selectTemplate: H,
    addTemplate: ee,
    updateTemplate: q,
    deleteTemplate: ie,
    updateVectorConfig: te,
    updateRerankConfig: ce,
    updateWorldbookConfig: I,
    selectRule: Me,
    addRule: Ge,
    updateRule: Ut,
    toggleRule: tt,
    deleteRule: me,
    resetRules: Vt,
    save: wt
  };
}
const I5 = [
  { id: "llm", label: "LLM 预设", icon: Ac },
  { id: "vector", label: "向量化", icon: zc },
  { id: "rerank", label: "Rerank", icon: wc }
], P5 = () => {
  const [s, u] = D.useState("model"), [c, o] = D.useState("llm"), {
    settings: m,
    editingPreset: h,
    editingTemplate: v,
    hasChanges: C,
    regexRules: p,
    editingRule: b,
    selectPreset: _,
    addPreset: T,
    updatePreset: R,
    copyPreset: Z,
    deletePreset: B,
    selectTemplate: L,
    addTemplate: $,
    updateTemplate: H,
    deleteTemplate: ee,
    updateVectorConfig: q,
    updateRerankConfig: ie,
    selectRule: te,
    addRule: ce,
    updateRule: I,
    toggleRule: Me,
    deleteRule: Ge,
    resetRules: Ut,
    save: tt
  } = W5();
  return /* @__PURE__ */ r.jsxs("div", { className: "flex flex-col h-full animate-in fade-in", children: [
    /* @__PURE__ */ r.jsx(
      qr,
      {
        title: "API 配置",
        subtitle: "管理模型参数和上下文规则",
        actions: C && /* @__PURE__ */ r.jsxs(
          "button",
          {
            className: "inline-flex items-center gap-2 px-4 py-2 rounded-full font-medium transition-colors bg-primary text-primary-foreground hover:opacity-90 text-sm shadow-sm",
            onClick: tt,
            children: [
              /* @__PURE__ */ r.jsx(K3, { size: 16 }),
              "保存更改"
            ]
          }
        )
      }
    ),
    /* @__PURE__ */ r.jsx(
      Rr,
      {
        tabs: [
          { id: "model", label: "模型配置" },
          { id: "prompt", label: "提示词模板" },
          { id: "regex", label: "正则规则" },
          { id: "worldbook", label: "世界书" }
        ],
        activeTab: s,
        onChange: (me) => u(me)
      }
    ),
    /* @__PURE__ */ r.jsxs("div", { className: "flex-1 overflow-y-auto no-scrollbar", children: [
      s === "model" && /* @__PURE__ */ r.jsxs("div", { className: "flex flex-col gap-6", children: [
        /* @__PURE__ */ r.jsx(
          Rr,
          {
            tabs: I5.map((me) => ({ ...me, icon: /* @__PURE__ */ r.jsx(me.icon, { size: 14 }) })),
            activeTab: c,
            onChange: (me) => o(me),
            sticky: !0,
            top: 0,
            className: "mb-6"
          }
        ),
        c === "llm" && /* @__PURE__ */ r.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-[300px_1fr] gap-8", children: [
          /* @__PURE__ */ r.jsxs("div", { className: "flex flex-col gap-4 border-r border-border/50 pr-4", children: [
            /* @__PURE__ */ r.jsxs("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ r.jsx("h3", { className: "text-xs font-bold text-muted-foreground uppercase tracking-wider", children: "预设列表" }),
              /* @__PURE__ */ r.jsx("button", { className: "text-muted-foreground hover:text-foreground transition-colors", onClick: T, children: /* @__PURE__ */ r.jsx(Oc, { size: 16 }) })
            ] }),
            /* @__PURE__ */ r.jsx("div", { className: "flex flex-col gap-1", children: m.llmPresets.map((me) => /* @__PURE__ */ r.jsx(
              N5,
              {
                preset: me,
                isSelected: m.selectedPresetId === me.id,
                onSelect: () => _(me),
                onEdit: () => _(me),
                onCopy: () => Z(me),
                onDelete: () => B(me)
              },
              me.id
            )) })
          ] }),
          /* @__PURE__ */ r.jsx("div", { className: "flex flex-col", children: h ? /* @__PURE__ */ r.jsx("div", { className: "animate-in fade-in slide-in-from-right-2 duration-300", children: /* @__PURE__ */ r.jsx(z5, { preset: h, onChange: R }) }) : /* @__PURE__ */ r.jsxs("div", { className: "flex flex-col items-center justify-center p-12 text-muted-foreground gap-4", children: [
            /* @__PURE__ */ r.jsx(Ac, { size: 32, className: "opacity-20" }),
            /* @__PURE__ */ r.jsx("p", { className: "text-sm font-light", children: "选择或创建一个预设开始配置" })
          ] }) })
        ] }),
        c === "vector" && /* @__PURE__ */ r.jsx(A5, { config: m.vectorConfig, onChange: q }),
        c === "rerank" && /* @__PURE__ */ r.jsx(k5, { config: m.rerankConfig, onChange: ie })
      ] }),
      s === "prompt" && /* @__PURE__ */ r.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-[320px_1fr] gap-8 h-full", children: [
        /* @__PURE__ */ r.jsx("div", { className: "border-r border-border/50 pr-4", children: /* @__PURE__ */ r.jsx(
          X5,
          {
            templates: m.promptTemplates,
            selectedId: (v == null ? void 0 : v.id) || null,
            onSelect: L,
            onAdd: $,
            onUpdate: H,
            onDelete: ee
          }
        ) }),
        /* @__PURE__ */ r.jsx("div", { className: "flex flex-col gap-4 overflow-y-auto no-scrollbar", children: v ? /* @__PURE__ */ r.jsx(
          Z5,
          {
            template: v,
            llmPresets: m.llmPresets,
            defaultPresetId: m.selectedPresetId,
            onChange: H
          }
        ) : /* @__PURE__ */ r.jsxs("div", { className: "flex flex-col items-center justify-center p-12 text-muted-foreground gap-4", children: [
          /* @__PURE__ */ r.jsx(Mc, { size: 32, className: "opacity-20" }),
          /* @__PURE__ */ r.jsx("p", { className: "text-sm font-light", children: "选择一个模板进行编辑" })
        ] }) })
      ] }),
      s === "regex" && /* @__PURE__ */ r.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-[320px_1fr] gap-8 h-full", children: [
        /* @__PURE__ */ r.jsx("div", { className: "border-r border-border/50 pr-4", children: /* @__PURE__ */ r.jsx(
          K5,
          {
            rules: p,
            selectedId: (b == null ? void 0 : b.id) || null,
            onSelect: te,
            onToggle: Me,
            onDelete: Ge,
            onAdd: ce,
            onReset: Ut
          }
        ) }),
        /* @__PURE__ */ r.jsx("div", { className: "flex flex-col gap-4 overflow-y-auto no-scrollbar", children: b ? /* @__PURE__ */ r.jsx($5, { rule: b, onChange: I }) : /* @__PURE__ */ r.jsxs("div", { className: "flex flex-col items-center justify-center p-12 text-muted-foreground gap-4", children: [
          /* @__PURE__ */ r.jsx(w1, { size: 32, className: "opacity-20" }),
          /* @__PURE__ */ r.jsx("p", { className: "text-sm font-light", children: "选择或创建一个正则规则" })
        ] }) })
      ] }),
      s === "worldbook" && /* @__PURE__ */ r.jsx("div", { className: "max-w-2xl py-4", children: /* @__PURE__ */ r.jsx(
        F5,
        {
          config: m.worldbookConfig,
          onChange: (me) => {
          }
        }
      ) })
    ] })
  ] });
}, eg = () => {
  const [s, u] = D.useState("claudeDark");
  D.useEffect(() => {
    u(Rl.getTheme());
  }, []);
  const c = (m) => {
    Rl.setTheme(m), Rt.set("theme", m), u(m);
  }, o = Object.entries(zr).map(([m, h]) => {
    let v = h.colors.background, C = h.colors.primary;
    return {
      id: m,
      name: h.name,
      background: v,
      sidebar: h.colors.sidebar,
      // Add sidebar color
      primary: C
    };
  });
  return /* @__PURE__ */ r.jsxs("div", { className: "space-y-4", children: [
    /* @__PURE__ */ r.jsx("h3", { className: "text-lg font-medium", children: "主题设置" }),
    /* @__PURE__ */ r.jsx("div", { className: "grid grid-cols-2 sm:grid-cols-4 gap-4", children: o.map((m) => /* @__PURE__ */ r.jsxs(
      "button",
      {
        onClick: () => c(m.id),
        className: `
                            relative group flex flex-col items-center gap-2 p-3 rounded-xl border-2 transition-all
                            ${s === m.id ? "border-primary bg-accent/10" : "border-transparent hover:bg-accent/5"}
                        `,
        children: [
          /* @__PURE__ */ r.jsxs("div", { className: "flex items-center justify-center -space-x-3 mb-2", children: [
            /* @__PURE__ */ r.jsx(
              "div",
              {
                className: "w-8 h-8 rounded-full border border-border shadow-sm z-10",
                style: { background: m.background },
                title: "Background"
              }
            ),
            /* @__PURE__ */ r.jsx(
              "div",
              {
                className: "w-8 h-8 rounded-full border border-border shadow-sm z-20",
                style: { background: m.sidebar },
                title: "Sidebar"
              }
            ),
            /* @__PURE__ */ r.jsx(
              "div",
              {
                className: "w-8 h-8 rounded-full border border-border shadow-sm z-30 ring-2 ring-background",
                style: { background: m.primary },
                title: "Primary"
              }
            )
          ] }),
          /* @__PURE__ */ r.jsx("span", { className: `text-sm font-medium ${s === m.id ? "text-primary" : "text-muted-foreground"}`, children: m.name }),
          s === m.id && /* @__PURE__ */ r.jsx("div", { className: "absolute top-2 right-2 w-2 h-2 rounded-full bg-primary" })
        ]
      },
      m.id
    )) })
  ] });
}, tg = () => /* @__PURE__ */ r.jsxs("div", { className: "flex flex-col h-full animate-in fade-in", children: [
  /* @__PURE__ */ r.jsx(qr, { title: "设置", subtitle: "扩展全局选项" }),
  /* @__PURE__ */ r.jsxs("div", { className: "p-6", children: [
    /* @__PURE__ */ r.jsx(eg, {}),
    /* @__PURE__ */ r.jsx("div", { className: "mt-8 pt-8 border-t border-border", children: /* @__PURE__ */ r.jsxs("div", { className: "flex flex-col items-center justify-center text-muted-foreground gap-2 py-8 opacity-50", children: [
      /* @__PURE__ */ r.jsx(O1, { size: 32 }),
      /* @__PURE__ */ r.jsx("p", { className: "text-sm", children: "更多设置开发中..." })
    ] }) })
  ] })
] }), lg = () => /* @__PURE__ */ r.jsxs("div", { className: "flex flex-col h-full animate-in fade-in", children: [
  /* @__PURE__ */ r.jsx(qr, { title: "记忆流", subtitle: "查看和管理记忆碎片" }),
  /* @__PURE__ */ r.jsxs("div", { className: "flex-1 flex flex-col items-center justify-center text-muted-foreground gap-4", children: [
    /* @__PURE__ */ r.jsx(T1, { size: 48, className: "opacity-20" }),
    /* @__PURE__ */ r.jsx("p", { children: "记忆流功能正在开发中..." })
  ] })
] }), ag = [
  { id: "token", label: "Token 数", icon: I4 },
  { id: "floor", label: "楼层数", icon: wc },
  { id: "count", label: "总结次数", icon: b3 }
], ng = () => {
  const [s, u] = D.useState(null), [c, o] = D.useState(!1), [m, h] = D.useState({
    autoEnabled: !0,
    floorInterval: 10
  }), [v, C] = D.useState({ ...L5 }), [p, b] = D.useState(0);
  D.useEffect(() => {
    _();
  }, []);
  const _ = async () => {
    try {
      const { summarizerService: H } = await Promise.resolve().then(() => In);
      u(H.getStatus());
      const { WorldInfoService: ee } = await Promise.resolve().then(() => X1), q = await ee.getActivatedWorldInfo();
      if (q) {
        const ie = await ee.countTokens(q);
        b(ie);
      }
    } catch (H) {
      console.error("加载 Summarizer 状态失败:", H);
    }
  }, T = async () => {
    try {
      const { summarizerService: H } = await Promise.resolve().then(() => In);
      H.start(), await _();
    } catch (H) {
      console.error("启动失败:", H);
    }
  }, R = async () => {
    try {
      const { summarizerService: H } = await Promise.resolve().then(() => In);
      H.stop(), await _();
    } catch (H) {
      console.error("停止失败:", H);
    }
  }, Z = async () => {
    o(!0);
    try {
      const { summarizerService: H } = await Promise.resolve().then(() => In);
      await H.triggerSummary(!0), await _();
    } catch (H) {
      console.error("触发失败:", H);
    } finally {
      o(!1);
    }
  }, B = (H, ee) => {
    C({ ...v, [H]: ee });
  }, $ = (() => {
    switch (v.trigger) {
      case "token":
        return { value: v.tokenLimit, min: 1024, max: 16384, step: 512, label: "Token 上限" };
      case "floor":
        return { value: v.floorLimit, min: 10, max: 200, step: 10, label: "楼层上限" };
      case "count":
        return { value: v.countLimit, min: 2, max: 20, step: 1, label: "次数上限" };
    }
  })();
  return /* @__PURE__ */ r.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12", children: [
    /* @__PURE__ */ r.jsxs("section", { className: "space-y-8", children: [
      /* @__PURE__ */ r.jsxs("div", { children: [
        /* @__PURE__ */ r.jsxs("div", { className: "flex items-center justify-between mb-6", children: [
          /* @__PURE__ */ r.jsx("h2", { className: "text-xs font-medium text-muted-foreground uppercase tracking-wider", children: "状态监控" }),
          /* @__PURE__ */ r.jsx(
            "button",
            {
              className: "p-1 rounded text-muted-foreground hover:text-foreground transition-colors",
              onClick: _,
              title: "刷新",
              children: /* @__PURE__ */ r.jsx(ti, { size: 14 })
            }
          )
        ] }),
        s ? /* @__PURE__ */ r.jsxs("div", { className: "space-y-6", children: [
          /* @__PURE__ */ r.jsxs("div", { className: "grid grid-cols-2 gap-6", children: [
            /* @__PURE__ */ r.jsxs("div", { children: [
              /* @__PURE__ */ r.jsx("span", { className: "text-xs text-muted-foreground block mb-1", children: "运行状态" }),
              /* @__PURE__ */ r.jsxs("div", { className: `flex items-center gap-2 text-lg font-medium ${s.running ? "text-green-500" : "text-muted-foreground"}`, children: [
                s.running ? /* @__PURE__ */ r.jsx(r3, { size: 18 }) : /* @__PURE__ */ r.jsx(Tc, { size: 18 }),
                s.running ? "运行中" : "已停止"
              ] })
            ] }),
            /* @__PURE__ */ r.jsxs("div", { children: [
              /* @__PURE__ */ r.jsx("span", { className: "text-xs text-muted-foreground block mb-1", children: "待处理" }),
              /* @__PURE__ */ r.jsx("div", { className: "text-3xl font-light text-amber-500 font-mono", children: s.pendingFloors })
            ] })
          ] }),
          /* @__PURE__ */ r.jsxs("div", { className: "grid grid-cols-2 gap-6 pt-4 border-t border-border/30", children: [
            /* @__PURE__ */ r.jsxs("div", { children: [
              /* @__PURE__ */ r.jsx("span", { className: "text-[10px] text-muted-foreground/70 uppercase tracking-wider block mb-1", children: "当前楼层" }),
              /* @__PURE__ */ r.jsx("div", { className: "text-xl font-mono text-foreground/80", children: s.currentFloor })
            ] }),
            /* @__PURE__ */ r.jsxs("div", { children: [
              /* @__PURE__ */ r.jsx("span", { className: "text-[10px] text-muted-foreground/70 uppercase tracking-wider block mb-1", children: "总结次数" }),
              /* @__PURE__ */ r.jsx("div", { className: "text-xl font-mono text-foreground/80", children: s.historyCount })
            ] })
          ] }),
          /* @__PURE__ */ r.jsxs("div", { className: "pt-4 border-t border-border/30", children: [
            /* @__PURE__ */ r.jsx("span", { className: "text-[10px] text-muted-foreground/60 uppercase tracking-wider block mb-1", children: "世界书 Token" }),
            /* @__PURE__ */ r.jsx("div", { className: "text-sm font-mono text-primary/80", children: p.toLocaleString() })
          ] })
        ] }) : /* @__PURE__ */ r.jsx("p", { className: "text-sm text-muted-foreground", children: "加载中..." })
      ] }),
      /* @__PURE__ */ r.jsxs("div", { className: "flex gap-3", children: [
        s != null && s.running ? /* @__PURE__ */ r.jsxs(
          "button",
          {
            className: "inline-flex items-center gap-2 px-4 py-2 text-sm text-muted-foreground hover:text-foreground border border-border rounded-lg transition-colors",
            onClick: R,
            children: [
              /* @__PURE__ */ r.jsx(B3, { size: 14 }),
              "停止监听"
            ]
          }
        ) : /* @__PURE__ */ r.jsxs(
          "button",
          {
            className: "inline-flex items-center gap-2 px-4 py-2 text-sm bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors",
            onClick: T,
            children: [
              /* @__PURE__ */ r.jsx(kc, { size: 14 }),
              "启动监听"
            ]
          }
        ),
        /* @__PURE__ */ r.jsxs(
          "button",
          {
            className: "inline-flex items-center gap-2 px-4 py-2 text-sm text-muted-foreground hover:text-foreground border border-border rounded-lg transition-colors disabled:opacity-50",
            onClick: Z,
            disabled: c || (s == null ? void 0 : s.isSummarizing),
            children: [
              /* @__PURE__ */ r.jsx(ti, { size: 14, className: c ? "animate-spin" : "" }),
              c ? "处理中..." : "手动触发"
            ]
          }
        )
      ] }),
      /* @__PURE__ */ r.jsxs("div", { className: "pt-6 border-t border-border/50 space-y-4", children: [
        /* @__PURE__ */ r.jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ r.jsxs("div", { children: [
            /* @__PURE__ */ r.jsx("span", { className: "text-sm text-foreground", children: "自动总结" }),
            /* @__PURE__ */ r.jsxs("span", { className: "text-xs text-muted-foreground ml-2", children: [
              "每 ",
              m.floorInterval,
              " 楼"
            ] })
          ] }),
          /* @__PURE__ */ r.jsx(
            "button",
            {
              type: "button",
              onClick: () => h((H) => ({ ...H, autoEnabled: !H.autoEnabled })),
              className: `relative w-9 h-5 rounded-full transition-colors ${m.autoEnabled ? "bg-primary" : "bg-input"}`,
              children: /* @__PURE__ */ r.jsx("span", { className: `absolute top-0.5 left-0.5 w-4 h-4 rounded-full bg-white shadow transition-transform ${m.autoEnabled ? "translate-x-4" : "translate-x-0"}` })
            }
          )
        ] }),
        m.autoEnabled && /* @__PURE__ */ r.jsxs("div", { children: [
          /* @__PURE__ */ r.jsx(
            "input",
            {
              type: "range",
              min: "1",
              max: "50",
              value: m.floorInterval,
              onChange: (H) => h((ee) => ({ ...ee, floorInterval: Number(H.target.value) })),
              className: "w-full h-1 bg-border rounded-lg appearance-none cursor-pointer accent-primary"
            }
          ),
          /* @__PURE__ */ r.jsxs("div", { className: "flex justify-between text-[10px] text-muted-foreground/60 mt-1 font-mono", children: [
            /* @__PURE__ */ r.jsx("span", { children: "1" }),
            /* @__PURE__ */ r.jsx("span", { children: "25" }),
            /* @__PURE__ */ r.jsx("span", { children: "50" })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ r.jsxs("section", { className: "space-y-6 lg:border-l lg:border-border/30 lg:pl-8", children: [
      /* @__PURE__ */ r.jsxs("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ r.jsxs("div", { children: [
          /* @__PURE__ */ r.jsx("h2", { className: "text-sm font-medium text-foreground", children: "精简配置" }),
          /* @__PURE__ */ r.jsx("p", { className: "text-xs text-muted-foreground mt-0.5", children: "将多次总结压缩为更简洁的摘要" })
        ] }),
        /* @__PURE__ */ r.jsx(
          "button",
          {
            type: "button",
            onClick: () => C((H) => ({ ...H, enabled: !H.enabled })),
            className: `relative w-9 h-5 rounded-full transition-colors ${v.enabled ? "bg-primary" : "bg-input"}`,
            children: /* @__PURE__ */ r.jsx("span", { className: `absolute top-0.5 left-0.5 w-4 h-4 rounded-full bg-white shadow transition-transform ${v.enabled ? "translate-x-4" : "translate-x-0"}` })
          }
        )
      ] }),
      /* @__PURE__ */ r.jsxs("div", { className: `space-y-6 transition-opacity ${v.enabled ? "opacity-100" : "opacity-40 pointer-events-none"}`, children: [
        /* @__PURE__ */ r.jsxs("div", { className: "space-y-3", children: [
          /* @__PURE__ */ r.jsx("span", { className: "text-xs text-muted-foreground", children: "触发条件" }),
          /* @__PURE__ */ r.jsx("div", { className: "flex gap-6", children: ag.map((H) => /* @__PURE__ */ r.jsxs(
            "label",
            {
              className: "flex items-center gap-2 cursor-pointer group",
              children: [
                /* @__PURE__ */ r.jsx(
                  "span",
                  {
                    className: `w-4 h-4 rounded-full border-2 flex items-center justify-center transition-colors
                                        ${v.trigger === H.id ? "border-primary bg-primary" : "border-border group-hover:border-muted-foreground"}`,
                    children: v.trigger === H.id && /* @__PURE__ */ r.jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-primary-foreground" })
                  }
                ),
                /* @__PURE__ */ r.jsx("span", { className: `text-sm transition-colors ${v.trigger === H.id ? "text-foreground" : "text-muted-foreground"}`, children: H.label })
              ]
            },
            H.id
          )) })
        ] }),
        /* @__PURE__ */ r.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ r.jsxs("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ r.jsx("span", { className: "text-xs text-muted-foreground", children: $.label }),
            /* @__PURE__ */ r.jsx("span", { className: "text-xs font-mono text-primary", children: $.value })
          ] }),
          /* @__PURE__ */ r.jsx(
            "input",
            {
              type: "range",
              min: $.min,
              max: $.max,
              step: $.step,
              value: $.value,
              onChange: (H) => {
                const ee = v.trigger === "token" ? "tokenLimit" : v.trigger === "floor" ? "floorLimit" : "countLimit";
                B(ee, Number(H.target.value));
              },
              className: "w-full h-1 bg-border rounded-lg appearance-none cursor-pointer accent-primary"
            }
          ),
          /* @__PURE__ */ r.jsxs("div", { className: "flex justify-between text-[10px] text-muted-foreground/60 font-mono", children: [
            /* @__PURE__ */ r.jsx("span", { children: $.min }),
            /* @__PURE__ */ r.jsx("span", { children: Math.round(($.min + $.max) / 2) }),
            /* @__PURE__ */ r.jsx("span", { children: $.max })
          ] })
        ] }),
        /* @__PURE__ */ r.jsxs(
          "button",
          {
            type: "button",
            className: "inline-flex items-center gap-2 px-4 py-2 text-sm bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors",
            onClick: () => console.log("手动触发精简..."),
            children: [
              /* @__PURE__ */ r.jsx($3, { size: 14 }),
              "手动执行精简"
            ]
          }
        ),
        /* @__PURE__ */ r.jsx("p", { className: "text-xs text-muted-foreground/70 leading-relaxed", children: "精简会将多次总结内容压缩为更简洁的摘要，减少 Token 消耗。" })
      ] })
    ] })
  ] });
}, ig = [
  { id: "summary", label: "记忆摘要", icon: /* @__PURE__ */ r.jsx(Mc, { size: 16 }) },
  { id: "vectorization", label: "向量化", icon: /* @__PURE__ */ r.jsx(ni, { size: 16 }) },
  { id: "batch", label: "批量处理", icon: /* @__PURE__ */ r.jsx(wc, { size: 16 }) }
], rg = [
  { id: "devlog", label: "模型日志", linkTo: "devlog" },
  { id: "presets", label: "提示词模板", linkTo: "presets" }
], ug = ({ onNavigate: s }) => {
  const [u, c] = D.useState("summary");
  return /* @__PURE__ */ r.jsxs("div", { className: "flex flex-col h-full", children: [
    /* @__PURE__ */ r.jsxs("div", { className: "mb-6", children: [
      /* @__PURE__ */ r.jsx("h1", { className: "text-2xl font-light text-foreground tracking-tight mb-2", children: "数据处理" }),
      /* @__PURE__ */ r.jsx("p", { className: "text-sm text-muted-foreground", children: "记忆摘要、向量化存储和批量任务管理" })
    ] }),
    /* @__PURE__ */ r.jsxs("div", { className: "flex items-center justify-between border-b border-border mb-6", children: [
      /* @__PURE__ */ r.jsx(
        Rr,
        {
          tabs: ig,
          activeTab: u,
          onChange: (o) => c(o),
          sticky: !1,
          className: "border-b-0 mb-0"
        }
      ),
      /* @__PURE__ */ r.jsx("div", { className: "flex items-center gap-4 pr-2", children: rg.map((o) => /* @__PURE__ */ r.jsxs(
        "button",
        {
          className: "inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors",
          onClick: () => s == null ? void 0 : s(o.linkTo),
          children: [
            /* @__PURE__ */ r.jsx(x3, { size: 12 }),
            o.label
          ]
        },
        o.id
      )) })
    ] }),
    /* @__PURE__ */ r.jsxs("div", { className: "flex-1 overflow-y-auto no-scrollbar", children: [
      u === "summary" && /* @__PURE__ */ r.jsx(ng, {}),
      u === "vectorization" && /* @__PURE__ */ r.jsxs("div", { className: "flex flex-col items-center justify-center h-48 text-muted-foreground gap-2", children: [
        /* @__PURE__ */ r.jsx(ni, { size: 32, strokeWidth: 1, className: "opacity-30" }),
        /* @__PURE__ */ r.jsx("p", { className: "text-sm font-light", children: "向量化功能开发中..." })
      ] }),
      u === "batch" && /* @__PURE__ */ r.jsxs("div", { className: "flex flex-col items-center justify-center h-48 text-muted-foreground gap-2", children: [
        /* @__PURE__ */ r.jsx(K4, { size: 32, strokeWidth: 1, className: "opacity-30" }),
        /* @__PURE__ */ r.jsx("p", { className: "text-sm font-light", children: "批量处理功能开发中..." })
      ] })
    ] })
  ] });
}, Yt = {
  primary: "#FFFFFF",
  grid: "#111111"
}, sg = ({ onComplete: s }) => {
  const u = D.useRef(null), c = D.useRef(null), o = D.useRef(null), m = D.useRef(null), [h, v] = D.useState(!1);
  D.useEffect(() => {
    if (window.gsap) {
      v(!0);
      return;
    }
    const p = document.createElement("script");
    p.src = "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js", p.async = !0, p.onload = () => v(!0), document.body.appendChild(p);
  }, []);
  const C = () => {
    var Z;
    if (!h || !c.current) return;
    const p = window.gsap, b = c.current, _ = b.getTotalLength();
    p.set(b, {
      strokeDasharray: _,
      strokeDashoffset: _,
      stroke: Yt.primary,
      fillOpacity: 0,
      opacity: 1,
      strokeWidth: 2
    });
    const T = (Z = o.current) == null ? void 0 : Z.querySelectorAll("path");
    T && p.set(T, { opacity: 0, y: 10 }), p.set(m.current, { scale: 1, opacity: 1 }), p.set(u.current, { opacity: 1 });
    const R = p.timeline({
      onComplete: () => {
        p.to(u.current, {
          opacity: 0,
          duration: 0.8,
          ease: "power2.out",
          onComplete: s
        });
      }
    });
    R.to(b, {
      strokeDashoffset: 0,
      duration: 2.5,
      ease: "power2.inOut"
    }), T && R.to(T, {
      opacity: 1,
      y: 0,
      duration: 1.2,
      stagger: 0.08,
      ease: "power3.out"
    }, "-=0.8"), R.to({}, { duration: 1 });
  };
  return D.useEffect(() => {
    if (h) {
      const p = setTimeout(C, 800);
      return () => clearTimeout(p);
    }
  }, [h]), /* @__PURE__ */ r.jsxs(
    "div",
    {
      ref: u,
      className: "fixed inset-0 z-[200] flex flex-col items-center justify-center bg-black overflow-hidden",
      style: { touchAction: "none" },
      children: [
        /* @__PURE__ */ r.jsx(
          "div",
          {
            className: "absolute inset-0 pointer-events-none",
            style: {
              backgroundImage: `
                        linear-gradient(to right, ${Yt.grid} 1px, transparent 1px),
                        linear-gradient(to bottom, ${Yt.grid} 1px, transparent 1px)
                    `,
              backgroundSize: "40px 40px",
              opacity: 0.3
            }
          }
        ),
        /* @__PURE__ */ r.jsx(
          "div",
          {
            className: "absolute inset-0 pointer-events-none",
            style: { background: "radial-gradient(circle at center, transparent 0%, black 100%)", opacity: 0.9 }
          }
        ),
        /* @__PURE__ */ r.jsxs("div", { className: "z-10 relative flex flex-col items-center justify-center w-full h-full p-4", children: [
          /* @__PURE__ */ r.jsx("div", { className: "w-full max-w-[600px] md:max-w-[800px] aspect-[4/3]", children: /* @__PURE__ */ r.jsx(
            "svg",
            {
              version: "1.1",
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "250 0 550 600",
              className: "w-full h-full overflow-visible",
              children: /* @__PURE__ */ r.jsxs("g", { ref: m, className: "origin-center", children: [
                /* @__PURE__ */ r.jsx(
                  "path",
                  {
                    ref: c,
                    fill: "none",
                    stroke: Yt.primary,
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    d: "M463.360840,364.455627 C437.246704,381.338409 406.466644,366.209045 404.026672,335.650848 C402.910156,321.667206 412.549713,306.544678 426.813293,300.633850 C430.474335,299.116699 431.826355,297.290924 431.760071,293.302460 C431.519287,278.808716 431.584564,264.307892 431.718292,249.811417 C431.748169,246.574463 430.886292,244.713684 427.681274,243.389038 C412.366425,237.059357 404.237366,225.144638 404.208862,208.867447 C404.179871,192.298615 412.621979,180.486938 428.224701,174.293686 C430.850494,173.251419 431.710938,171.751862 431.696136,169.060089 C431.613586,154.062912 431.568054,139.064117 431.723419,124.068092 C431.759430,120.590492 430.119568,119.052467 427.243103,117.790627 C413.349915,111.695946 405.841095,101.009903 404.195740,85.916542 C402.099884,66.690948 418.566650,47.364159 437.884277,46.682220 C456.888519,46.011345 468.064789,52.989845 476.252197,70.840332 C477.174438,72.851059 478.313995,73.541710 480.422974,73.516098 C499.569031,73.283493 518.722961,73.393646 537.862915,73.456795 C545.529785,73.482086 549.225952,71.767975 552.791809,64.663139 C559.898376,50.503635 576.618042,43.921410 592.447876,47.234680 C608.699890,50.636322 619.276489,62.116261 621.438904,78.701805 C623.839478,97.113228 612.679382,114.371338 595.357910,119.034004 C577.219604,123.916542 558.125427,115.204048 550.887390,98.365906 C549.251465,94.560234 547.316284,93.116508 543.150696,93.160004 C522.989380,93.370483 502.824707,93.284561 482.661285,93.261726 C479.716156,93.258385 477.395905,93.379341 475.956635,96.902077 C474.571899,100.291283 475.702576,102.070137 477.892181,104.225159 C501.524139,127.483910 525.127991,150.771423 548.653259,174.137985 C550.803162,176.273376 552.520325,176.380997 555.207153,175.171799 C569.642334,168.675354 583.205750,171.177368 594.759277,181.252563 C606.783813,191.738449 610.379395,205.504944 605.248840,220.725037 C600.321167,235.343246 589.568848,243.345337 574.305420,245.467117 C567.655396,246.391541 561.334045,245.373352 555.347839,242.591797 C552.373169,241.209595 550.274536,241.303284 547.832886,243.728531 C524.197693,267.205322 500.499634,290.619415 476.704651,313.934174 C474.165771,316.421844 475.106598,318.487793 476.015411,321.059723 C476.869354,323.476318 478.159149,324.356232 480.796143,324.332367 C501.456360,324.145294 522.118530,324.019531 542.778870,324.122131 C546.987793,324.143005 549.216675,322.931549 551.044983,318.871887 C558.230042,302.918091 576.073181,294.652069 593.497131,298.684143 C610.451355,302.607544 622.335205,317.668091 622.119812,334.958160 C621.900024,352.608002 609.316650,367.564362 591.822144,370.969543 C574.585754,374.324463 557.004028,364.861755 550.521484,348.456757 C549.268677,345.286346 547.631836,344.200745 544.294861,344.220337 C523.465576,344.342865 502.634888,344.322540 481.805359,344.218109 C478.697174,344.202545 476.993927,345.152252 475.888916,348.205902 C473.513214,354.771179 469.417969,360.183167 463.360840,364.455627 M472.733368,188.880936 C473.545441,190.333145 474.799072,191.702774 475.088898,193.252655 C476.058929,198.439468 479.434326,198.919983 483.888489,198.861130 C499.042145,198.660889 514.201233,198.707901 529.355957,198.872879 C532.819580,198.910583 534.700989,197.913788 536.177185,194.588806 C537.657104,191.255417 536.060120,189.735016 534.097900,187.805573 C510.706268,164.804840 487.354065,141.764008 463.949341,118.776604 C462.445251,117.299316 461.277863,114.441566 458.282349,116.423027 C455.343719,118.366882 451.028107,118.406143 451.180542,123.994591 C451.584534,138.807007 451.429443,153.638779 451.250458,168.459885 C451.208984,171.894135 452.474548,173.487930 455.559784,174.673798 C462.566864,177.367126 468.343140,181.758774 472.733368,188.880936 M457.308807,300.958954 C460.540070,302.823181 462.218414,300.310028 464.063263,298.488586 C487.164032,275.681519 510.248199,252.857559 533.326538,230.027756 C535.300171,228.075378 537.458679,226.516449 535.970032,222.843750 C534.495117,219.205124 532.067688,218.878906 528.898010,218.890778 C513.414001,218.948746 497.929138,219.002151 482.445862,218.887329 C478.998230,218.861771 477.090668,219.941055 475.670502,223.284790 C471.742218,232.533905 465.159332,239.474701 455.665497,243.103836 C452.239746,244.413376 451.216278,246.302231 451.253540,249.781387 C451.406891,264.098541 451.489380,278.421356 451.223358,292.735107 C451.142975,297.059998 452.224640,299.783386 457.308807,300.958954 z"
                  }
                ),
                /* @__PURE__ */ r.jsxs("g", { ref: o, children: [
                  /* @__PURE__ */ r.jsx("path", { fill: Yt.primary, d: "M732.215698,483.876190 C732.750061,488.775055 731.110779,490.523590 726.372742,490.479736 C713.642639,490.361908 713.645874,490.566711 713.641113,477.834442 C713.638428,470.668732 713.788818,463.497284 713.552246,456.338928 C713.318970,449.278015 710.633911,445.451111 705.788818,444.403778 C698.667542,442.864441 692.689270,447.076904 692.324463,454.647736 C691.851685,464.458313 691.862549,474.305084 692.048706,484.128967 C692.137085,488.792786 690.778625,490.578705 685.827454,490.500549 C672.843933,490.295532 672.845886,490.510315 672.820435,477.502625 C672.805786,470.003754 672.887146,462.502136 672.708618,455.006927 C672.557556,448.666412 669.519653,444.981689 664.341858,444.320343 C658.234436,443.540314 653.997803,446.541077 652.162415,452.864807 C651.503052,455.136719 651.331299,457.435608 651.335754,459.781158 C651.352234,468.446747 651.306274,477.112488 651.338745,485.777985 C651.348389,488.341766 651.062439,490.138977 647.717529,490.447815 C632.733521,491.831421 632.748596,491.913239 632.764404,477.031830 C632.778870,463.366852 632.738831,449.701782 632.731445,436.036774 C632.727478,428.732941 632.735718,428.732544 640.257812,428.707031 C641.591003,428.702484 642.924194,428.695312 644.257324,428.701721 C647.429321,428.717010 651.058289,427.916016 650.925598,433.229431 C655.308960,431.486603 658.595154,429.192383 662.595154,428.377930 C670.453491,426.777832 677.619019,428.117981 683.735718,433.181641 C686.512207,435.480164 688.239807,435.373474 690.953918,433.250153 C697.176208,428.382202 704.485840,426.832367 712.194946,428.080414 C725.100098,430.169739 731.944641,439.074829 732.175659,453.896454 C732.328857,463.726379 732.212036,473.560547 732.215698,483.876190 z" }),
                  /* @__PURE__ */ r.jsx("path", { fill: Yt.primary, d: "M487.575867,485.935303 C487.614716,484.616028 487.614716,483.640503 487.614716,481.796417 C479.116760,488.238525 470.153107,489.257660 460.718079,486.787720 C454.401794,485.134186 449.163879,481.675842 445.200134,476.457642 C436.960876,465.610748 437.295532,448.722229 445.889771,438.315796 C455.451538,426.737823 470.295227,425.042450 488.444458,433.733826 C487.913239,428.612457 491.194366,428.604004 494.772766,428.684540 C508.272736,428.988373 506.179840,426.849945 506.294434,440.421967 C506.411133,454.245575 506.366882,468.071228 506.299957,481.895538 C506.205750,501.359833 494.742065,512.847900 475.259460,513.370544 C465.272614,513.638489 455.717651,512.255005 446.682343,507.725311 C443.034790,505.896667 441.336151,503.847290 444.229065,500.105438 C444.329590,499.975464 444.390869,499.814941 444.469086,499.667908 C448.861603,491.411743 448.894196,491.340729 457.207886,495.157196 C463.352356,497.977905 469.817169,498.376801 476.285126,497.456818 C482.543640,496.566620 486.238434,492.476532 487.575867,485.935303 M469.264740,471.577881 C471.084900,471.642700 472.915710,471.865356 474.723328,471.743805 C481.074341,471.316620 486.258820,466.628052 487.489288,460.346558 C488.669373,454.322296 485.713593,448.118378 480.288971,445.234039 C472.426056,441.053253 462.868591,443.867035 459.399658,451.384033 C455.705688,459.388580 459.382996,467.492737 469.264740,471.577881 z" }),
                  /* @__PURE__ */ r.jsx("path", { fill: Yt.primary, d: "M350.790619,410.644409 C354.007477,410.561554 355.147522,411.945587 355.144592,414.620361 C355.128937,428.846375 356.152588,426.165161 344.558044,426.338898 C335.900940,426.468628 327.237854,426.493591 318.582581,426.315826 C314.804382,426.238220 313.157715,427.376373 313.262451,431.424896 C313.571655,443.375275 312.019470,441.570435 323.204529,441.691742 C330.530579,441.771271 337.860626,441.831665 345.183899,441.671692 C348.853607,441.591553 350.203705,443.056824 350.190338,446.675842 C350.143219,459.433014 350.725433,457.207275 340.024445,457.368561 C332.865692,457.476471 325.700195,457.536346 318.545349,457.339996 C314.731018,457.235291 313.250702,458.478516 313.234222,462.478668 C313.185364,474.308960 313.038177,474.321259 324.813477,474.130890 C334.298523,473.977539 343.772430,475.169159 353.264343,474.338776 C354.864075,474.198792 356.466827,474.576569 356.702301,476.439850 C357.203217,480.403656 357.364838,484.405273 356.646729,488.365631 C356.297211,490.293060 354.652405,490.369568 353.118927,490.370575 C334.801880,490.382568 316.484711,490.350647 298.167847,490.412506 C295.104187,490.422852 294.024323,488.921082 294.024200,486.130402 C294.023224,462.484924 294.047699,438.839325 293.967896,415.194092 C293.954620,411.261261 296.028046,410.593658 299.359711,410.610138 C316.344330,410.694275 333.329620,410.638672 350.790619,410.644409 z" }),
                  /* @__PURE__ */ r.jsx("path", { fill: Yt.primary, d: "M620.003906,453.402435 C620.062195,464.023071 619.882812,474.188721 620.189575,484.339661 C620.338318,489.262421 618.431458,490.973572 613.757507,490.452362 C611.783386,490.232208 609.754700,490.291412 607.767883,490.444916 C604.889648,490.667267 602.478821,490.168823 601.296570,486.513000 C594.831909,490.991821 587.888184,491.843719 580.600464,491.328247 C565.916626,490.289642 557.201233,476.053131 563.502625,463.374390 C565.502930,459.349640 568.872803,457.136932 572.794861,455.506927 C578.118103,453.294647 583.702881,452.709900 589.425354,452.731232 C592.879822,452.744110 596.387085,453.235260 599.791443,452.317169 C599.855774,446.843750 597.260681,443.903503 591.552673,443.177338 C585.446533,442.400513 579.495911,443.228607 574.179382,446.386688 C570.948853,448.305603 569.535645,447.214966 568.011658,444.340485 C563.043945,434.970917 563.058899,434.663818 573.199219,430.800537 C582.143921,427.392792 591.347961,426.734100 600.678101,428.904358 C613.358643,431.853943 619.173157,440.405762 620.003906,453.402435 M582.869263,466.083313 C579.496887,469.605530 579.013306,473.431427 581.947998,475.906952 C585.513611,478.914764 589.714966,478.291107 593.721985,477.031647 C597.412354,475.871704 599.990784,473.365112 600.658081,469.369629 C601.070496,466.900665 600.409729,465.044220 597.411255,465.098297 C592.800171,465.181488 588.157471,464.530182 582.869263,466.083313 z" }),
                  /* @__PURE__ */ r.jsx("path", { fill: Yt.primary, d: "M410.915314,457.280090 C410.311127,447.930115 406.925934,444.198608 399.452026,444.194855 C391.667114,444.190948 386.727997,448.953094 386.409271,457.536652 C386.075653,466.521088 386.068634,475.532593 386.350006,484.518738 C386.494904,489.147247 384.896912,490.532959 380.337830,490.481964 C367.440552,490.337616 367.627808,490.513641 367.533173,477.713593 C367.426025,463.226135 368.160004,448.728760 367.168365,434.251617 C366.898468,430.311462 368.239288,428.249725 372.529694,428.668640 C374.840057,428.894196 377.203857,428.868896 379.519684,428.673553 C383.194244,428.363556 385.817352,429.188293 385.487488,434.182526 C390.858826,430.844635 395.856995,428.304504 401.601257,427.794434 C418.292908,426.312286 429.386810,436.518799 429.975342,454.379517 C430.315308,464.696716 429.971527,475.035126 430.046204,485.363190 C430.071198,488.817627 428.985992,490.534210 425.145325,490.442291 C408.307220,490.039520 411.204895,492.848450 410.942963,476.734924 C410.840088,470.406036 410.927368,464.074036 410.915314,457.280090 z" }),
                  /* @__PURE__ */ r.jsx("path", { fill: Yt.primary, d: "M556.799500,444.921539 C554.214233,445.227783 552.026184,445.174683 549.913574,445.548401 C542.544189,446.852142 538.560974,452.210632 538.387756,461.266998 C538.231995,469.411011 538.239258,477.561676 538.377136,485.705963 C538.433838,489.055634 537.355591,490.537964 533.812988,490.447296 C516.656677,490.008148 519.942505,492.939087 519.712585,476.823181 C519.510925,462.693848 519.801025,448.557343 519.590698,434.428253 C519.527222,430.165985 520.732788,428.169983 525.216187,428.665833 C527.350830,428.901917 529.549255,428.854156 531.692566,428.654297 C535.487610,428.300446 537.940002,429.350586 537.432373,434.447845 C542.475464,431.817810 546.689819,428.862549 551.859985,428.147003 C557.409912,427.378845 558.504028,428.019318 558.285950,433.612213 C558.141113,437.327057 559.514648,441.236115 556.799500,444.921539 z" })
                ] })
              ] })
            }
          ) }),
          /* @__PURE__ */ r.jsx("p", { className: "mt-6 md:mt-8 text-white/30 text-xs md:text-sm tracking-widest uppercase", children: "Where memories leave their trace" })
        ] })
      ]
    }
  );
}, cg = ({ onClose: s }) => {
  const [u, c] = D.useState("dashboard"), [o, m] = D.useState(!1), [h, v] = D.useState(!1);
  D.useEffect(() => {
    const b = setTimeout(() => {
      const _ = Rt.get("hasSeenWelcome");
      console.debug("[Engram] hasSeenWelcome:", _), _ || m(!0), v(!0);
    }, 1e3);
    return () => clearTimeout(b);
  }, []);
  const C = () => {
    Rt.set("hasSeenWelcome", !0), console.debug("[Engram] hasSeenWelcome saved"), m(!1);
  };
  if (!h)
    return null;
  const p = () => {
    switch (u) {
      case "dashboard":
        return /* @__PURE__ */ r.jsx(f1, { onNavigate: c });
      case "presets":
        return /* @__PURE__ */ r.jsx(P5, {});
      case "graph":
        return /* @__PURE__ */ r.jsx(s5, {});
      case "devlog":
        return /* @__PURE__ */ r.jsx(S5, {});
      case "settings":
        return /* @__PURE__ */ r.jsx(tg, {});
      case "memory":
        return /* @__PURE__ */ r.jsx(lg, {});
      case "processing":
        return /* @__PURE__ */ r.jsx(ug, { onNavigate: c });
      default:
        return /* @__PURE__ */ r.jsx(f1, {});
    }
  };
  return /* @__PURE__ */ r.jsxs(Zh, { children: [
    o && /* @__PURE__ */ r.jsx(sg, { onComplete: C }),
    /* @__PURE__ */ r.jsx(e5, { activeTab: u, setActiveTab: c, onClose: s, children: p() })
  ] });
};
n5((s, u) => {
  const c = w4.createRoot(s);
  return c.render(C4.createElement(cg, { onClose: u })), c;
});
document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", d1) : d1();
const Ka = {
  MESSAGE_RECEIVED: "message_received",
  // 聊天事件
  CHAT_CHANGED: "chat_id_changed"
};
function $n() {
  try {
    const s = window.SillyTavern;
    if (s != null && s.getContext) {
      const u = s.getContext();
      return (u == null ? void 0 : u.eventSource) || null;
    }
    return null;
  } catch {
    return console.warn("[Engram] EventBus: 无法获取 SillyTavern eventSource"), null;
  }
}
class ai {
  /**
   * 订阅事件
   * @param event 事件名称
   * @param callback 回调函数
   * @returns 取消订阅函数
   */
  static on(u, c) {
    const o = $n();
    return o && o.on(u, c), this.listeners.has(u) || this.listeners.set(u, /* @__PURE__ */ new Set()), this.listeners.get(u).add(c), () => {
      this.off(u, c);
    };
  }
  /**
   * 一次性订阅事件（触发后自动取消）
   * @param event 事件名称
   * @param callback 回调函数
   */
  static once(u, c) {
    const o = $n();
    if (o)
      o.once(u, c);
    else {
      const m = (...h) => {
        this.off(u, m), c(...h);
      };
      this.on(u, m);
    }
  }
  /**
   * 取消订阅事件
   * @param event 事件名称
   * @param callback 回调函数
   */
  static off(u, c) {
    var m;
    const o = $n();
    o && o.removeListener(u, c), (m = this.listeners.get(u)) == null || m.delete(c);
  }
  /**
   * 清除所有已注册的监听器
   * 在扩展卸载时调用
   */
  static clearAll() {
    const u = $n();
    for (const [c, o] of this.listeners)
      for (const m of o)
        u && u.removeListener(c, m);
    this.listeners.clear();
  }
  /**
   * 检查 EventBus 是否可用
   */
  static isAvailable() {
    return $n() !== null;
  }
}
Qe(ai, "listeners", /* @__PURE__ */ new Map());
const og = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  EventBus: ai,
  TavernEventType: Ka
}, Symbol.toStringTag, { value: "Module" }));
function dg(s, u) {
  let c = "assistant";
  return s.is_user ? c = "user" : s.is_system && (c = "system"), {
    id: u,
    role: c,
    content: s.mes || "",
    name: s.name || "",
    isHidden: s.is_hidden ?? !1,
    raw: s
  };
}
class Br {
  /**
   * 获取当前聊天的所有消息
   * @param options 查询选项
   */
  static getAllMessages(u = {}) {
    const c = Or();
    if (!(c != null && c.chat))
      return [];
    let o = c.chat.map((m, h) => dg(m, h));
    if (u.includeHidden || (o = o.filter((m) => !m.isHidden)), u.role) {
      const m = Array.isArray(u.role) ? u.role : [u.role];
      o = o.filter((h) => m.includes(h.role));
    }
    return o;
  }
  /**
   * 获取最近 N 条消息
   * @param count 消息数量
   * @param options 查询选项
   */
  static getRecentMessages(u, c = {}) {
    return this.getAllMessages(c).slice(-u);
  }
  /**
   * 获取指定范围的消息
   * @param start 起始索引（包含）
   * @param end 结束索引（不包含）
   * @param options 查询选项
   */
  static getMessages(u, c, o = {}) {
    return this.getAllMessages(o).slice(u, c);
  }
  /**
   * 获取当前楼层数（消息总数）
   * @param options 查询选项
   */
  static getFloorCount(u = {}) {
    return this.getAllMessages(u).length;
  }
  /**
   * 获取最后一条消息
   * @param options 查询选项
   */
  static getLastMessage(u = {}) {
    const c = this.getAllMessages(u);
    return c.length > 0 ? c[c.length - 1] : null;
  }
  /**
   * 获取当前角色名称
   */
  static getCurrentCharacterName() {
    var c;
    const u = Or();
    return !(u != null && u.characters) || u.characterId < 0 ? null : ((c = u.characters[u.characterId]) == null ? void 0 : c.name) || null;
  }
  /**
   * 格式化消息为纯文本（用于传给 LLM）
   * @param messages 消息数组
   * @param format 格式化模板
   */
  static formatMessagesAsText(u, c = "simple") {
    return c === "simple" ? u.map((o) => `${o.name}: ${o.content}`).join(`

`) : u.map((o) => `[${o.role.toUpperCase()}] ${o.name}:
${o.content}`).join(`

---

`);
  }
  /**
   * 检查 MessageService 是否可用
   */
  static isAvailable() {
    return t5();
  }
}
const fg = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  MessageService: Br
}, Symbol.toStringTag, { value: "Module" }));
async function y1(s) {
  try {
    const u = window.SillyTavern;
    if (u != null && u.getContext) {
      const c = u.getContext();
      if (c != null && c.getTokenCountAsync)
        return await c.getTokenCountAsync(s);
    }
    return Math.ceil(s.length / 4);
  } catch {
    return console.warn("[Engram] WorldInfoService: 无法使用酒馆 Token 计数，使用估算"), Math.ceil(s.length / 4);
  }
}
function Fn() {
  try {
    return window.TavernHelper || null;
  } catch {
    return null;
  }
}
class Ja {
  /**
   * 计算文本的 Token 数量
   * @param text 文本内容
   */
  static async countTokens(u) {
    return y1(u);
  }
  /**
   * 批量计算多段文本的 Token 数量
   * @param texts 文本数组
   */
  static async countTokensBatch(u) {
    return Promise.all(u.map((c) => y1(c)));
  }
  /**
   * 获取当前聊天的绑定世界书名称
   * 使用自定义命名规则：角色name2_Engram_聊天文件名
   */
  static async getChatWorldbook() {
    var u, c;
    try {
      const o = (c = (u = window.SillyTavern) == null ? void 0 : u.getContext) == null ? void 0 : c.call(u);
      if (!o) {
        console.warn("[Engram] WorldInfoService: 无法获取 ST 上下文");
        const p = Fn();
        return p != null && p.getOrCreateChatWorldbook ? await p.getOrCreateChatWorldbook("current") : null;
      }
      const m = o.name2 || "Unknown", h = o.chatId || "chat", v = `${m}_Engram_${h}`.replace(/[<>:"/\\|?*]/g, "_").replace(/\s+/g, "_").substring(0, 100);
      console.debug("[Engram] WorldInfoService: 使用世界书名称", v);
      const C = Fn();
      if (C != null && C.createWorldbookEntries)
        try {
          await C.createWorldbookEntries(v, []);
        } catch (p) {
          console.debug("[Engram] 世界书可能已存在:", p);
        }
      return v;
    } catch (o) {
      return console.error("[Engram] WorldInfoService: 获取聊天世界书失败", o), null;
    }
  }
  /**
   * 获取世界书的所有条目
   * @param worldbookName 世界书名称
   */
  static async getEntries(u) {
    const c = Fn();
    if (!(c != null && c.getWorldbook))
      return console.warn("[Engram] WorldInfoService: TavernHelper 不可用"), [];
    try {
      return (await c.getWorldbook(u)).map((m) => {
        const h = m;
        return {
          uid: h.uid || 0,
          name: h.name || "",
          content: h.content || "",
          enabled: h.enabled ?? !0,
          constant: h.constant ?? !1,
          keys: h.key || [],
          position: h.position || "before_character_definition",
          depth: h.depth || 0,
          order: h.order || 100
        };
      });
    } catch (o) {
      return console.error("[Engram] WorldInfoService: 获取世界书条目失败", o), [];
    }
  }
  /**
   * 创建新的世界书条目
   * @param worldbookName 世界书名称
   * @param params 条目参数
   */
  static async createEntry(u, c) {
    const o = Fn();
    if (!(o != null && o.createWorldbookEntries))
      return console.warn("[Engram] WorldInfoService: TavernHelper 不可用"), !1;
    try {
      const m = {
        name: c.name,
        content: c.content,
        enabled: c.enabled ?? !0,
        strategy: {
          type: c.constant ? "constant" : "selective",
          keys: c.keys || [],
          keys_secondary: {
            logic: "and_any",
            keys: c.keysSecondary || []
          },
          scan_depth: "same_as_global"
        },
        position: {
          type: c.position || "before_character_definition",
          role: c.role || "system",
          depth: c.depth || 0,
          order: c.order || 100
        },
        probability: c.probability || 100
      };
      return await o.createWorldbookEntries(u, [m]), !0;
    } catch (m) {
      return console.error("[Engram] WorldInfoService: 创建世界书条目失败", m), !1;
    }
  }
  /**
   * 获取世界书的 Token 统计
   * @param worldbookName 世界书名称
   */
  static async getWorldbookTokenStats(u) {
    const c = await this.getEntries(u), o = await Promise.all(
      c.map(async (h) => ({
        name: h.name,
        tokens: await this.countTokens(h.content)
      }))
    );
    return {
      totalTokens: o.reduce((h, v) => h + v.tokens, 0),
      entryCount: c.length,
      entries: o
    };
  }
  /**
   * 检查 WorldInfoService 是否可用
   */
  static isAvailable() {
    return Fn() !== null;
  }
  /**
   * 检查 Token 计数是否使用酒馆原生 API
   */
  static async isNativeTokenCountAvailable() {
    try {
      const u = window.SillyTavern;
      if (u != null && u.getContext) {
        const c = u.getContext();
        return typeof (c == null ? void 0 : c.getTokenCountAsync) == "function";
      }
      return !1;
    } catch {
      return !1;
    }
  }
  /**
   * 获取所有激活的世界书条目内容（用于总结）
   * 使用酒馆原生 getWorldInfoPrompt 进行扫描，获取所有激活的条目
   * 支持：蓝灯（常驻）+ 绿灯（关键词触发）
   * 
   * @param chatMessages 可选，用于关键词扫描的聊天消息
   * @returns 格式化后的世界书内容字符串
   */
  static async getActivatedWorldInfo(u) {
    var c, o;
    try {
      const h = await new Function("path", "return import(path)")("/scripts/world-info.js"), v = h == null ? void 0 : h.getWorldInfoPrompt;
      if (typeof v != "function")
        return console.warn("[Engram] WorldInfoService: getWorldInfoPrompt 不可用，回退到常驻条目"), this.getConstantWorldInfo();
      let C = u;
      if (!C || C.length === 0) {
        const T = (o = (c = window.SillyTavern) == null ? void 0 : c.getContext) == null ? void 0 : o.call(c);
        T != null && T.chat && Array.isArray(T.chat) && (C = T.chat.map((R) => R.mes || "").reverse());
      }
      if (!C || C.length === 0)
        return console.warn("[Engram] WorldInfoService: 无聊天消息，回退到常驻条目"), this.getConstantWorldInfo();
      const b = await v(C, 8192, !0, {
        trigger: "normal"
      }), _ = [
        (b == null ? void 0 : b.worldInfoBefore) || "",
        (b == null ? void 0 : b.worldInfoAfter) || ""
      ].filter(Boolean).join(`

`).trim();
      return _ && console.debug(`[Engram] WorldInfoService: 获取到激活的世界书内容 (${_.length} 字符)`), _;
    } catch (m) {
      return console.warn("[Engram] WorldInfoService: 获取世界书失败，回退到常驻条目", m), this.getConstantWorldInfo();
    }
  }
  /**
   * 获取常驻激活的世界书条目（蓝灯）
   * 作为 getActivatedWorldInfo 的回退方案
   */
  static async getConstantWorldInfo() {
    try {
      const c = await new Function("path", "return import(path)")("/scripts/world-info.js"), o = c == null ? void 0 : c.getSortedEntries;
      if (typeof o != "function")
        return "";
      const m = await o();
      if (!m || !Array.isArray(m))
        return "";
      const h = m.filter((v) => v.constant === !0 && v.disable !== !0 && v.content);
      return h.length === 0 ? "" : (console.debug(`[Engram] WorldInfoService: 回退获取 ${h.length} 个常驻条目`), h.map((v) => v.content).join(`

`));
    } catch {
      return "";
    }
  }
}
const X1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  WorldInfoService: Ja
}, Symbol.toStringTag, { value: "Module" }));
async function mg() {
  const { EventBus: s } = await Promise.resolve().then(() => og), { MessageService: u } = await Promise.resolve().then(() => fg), { WorldInfoService: c } = await Promise.resolve().then(() => X1);
  return {
    eventBus: s.isAvailable(),
    messageService: u.isAvailable(),
    worldInfoService: c.isAvailable(),
    nativeTokenCount: await c.isNativeTokenCountAvailable(),
    floorCount: u.isAvailable() ? u.getFloorCount() : null,
    characterName: u.isAvailable() ? u.getCurrentCharacterName() : null
  };
}
const hg = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  EventBus: ai,
  MessageService: Br,
  TavernEventType: Ka,
  WorldInfoService: Ja,
  checkTavernIntegration: mg
}, Symbol.toStringTag, { value: "Module" })), gg = [
  // 移除多余空行
  { pattern: /\n{3,}/g, replacement: `

`, description: "多余空行" },
  // 移除行首行尾空白
  { pattern: /^[ \t]+|[ \t]+$/gm, replacement: "", description: "行首尾空白" },
  // 移除 Markdown 代码块标记（保留内容）
  { pattern: /```\w*\n?/g, replacement: "", description: "Markdown代码块" },
  // 统一中文引号
  { pattern: /[""]/g, replacement: '"', description: "中文引号" },
  { pattern: /['']/g, replacement: "'", description: "中文单引号" },
  // 移除常见的 LLM 前缀
  { pattern: /^(好的|以下是|这是|根据对话).{0,20}[:：]\s*/gm, replacement: "", description: "LLM前缀" },
  // 移除末尾的解释性文字
  { pattern: /\n*如果.{0,50}请.{0,30}[。！]?\s*$/g, replacement: "", description: "末尾解释" }
];
class Q1 {
  constructor(u) {
    Qe(this, "rules");
    this.rules = u || gg;
  }
  /**
   * 清洗 LLM 输出文本
   * @param text 原始文本
   * @returns 清洗后的文本
   */
  clean(u) {
    let c = u;
    for (const o of this.rules)
      c = c.replace(o.pattern, o.replacement);
    return c.trim();
  }
  /**
   * 格式化为世界书条目格式
   * @param summary 总结内容
   * @param metadata 元数据
   */
  formatAsWorldEntry(u, c) {
    new Date(c.timestamp).toLocaleDateString("zh-CN");
    let h = `📜 剧情摘要 [楼层${`${c.floorRange[0]}-${c.floorRange[1]}`}]
`;
    return h += u, h;
  }
  /**
   * 提取纯文本（移除所有格式标记）
   * @param text 原始文本
   */
  extractPlainText(u) {
    return u.replace(/```[\s\S]*?```/g, "").replace(/\[([^\]]+)\]\([^)]+\)/g, "$1").replace(/[*_~`#]/g, "").replace(/\n{2,}/g, `
`).trim();
  }
  /**
   * 截断文本到指定长度
   * @param text 文本
   * @param maxLength 最大长度
   * @param suffix 截断后缀
   */
  truncate(u, c, o = "...") {
    return u.length <= c ? u : u.slice(0, c - o.length) + o;
  }
  /**
   * 添加自定义规则
   */
  addRule(u) {
    this.rules.push(u);
  }
  /**
   * 获取当前规则列表
   */
  getRules() {
    return [...this.rules];
  }
}
const Z1 = new Q1();
function v1() {
  try {
    return window.TavernHelper || null;
  } catch {
    return null;
  }
}
class K1 {
  /**
   * 调用 LLM 生成
   * @param request 请求参数
   */
  async generate(u) {
    const c = v1();
    if (!(c != null && c.generateRaw) && !(c != null && c.generate))
      return {
        success: !1,
        content: "",
        error: "TavernHelper 不可用"
      };
    try {
      let o;
      if (c.generateRaw)
        o = await c.generateRaw({
          ordered_prompts: [
            { role: "system", content: u.systemPrompt },
            { role: "user", content: u.userPrompt }
          ]
          // 如果指定了预设 ID，可以在这里配置
          // custom_api: request.presetId ? await this.getPresetConfig(request.presetId) : undefined,
        });
      else if (c.generate)
        o = await c.generate({
          user_input: u.userPrompt,
          system_prompt: u.systemPrompt,
          should_stream: !1,
          max_chat_history: 0
        });
      else
        throw new Error("无可用的生成 API");
      return {
        success: !0,
        content: o || ""
      };
    } catch (o) {
      const m = o instanceof Error ? o.message : String(o);
      return console.error("[Engram] LLMAdapter 调用失败:", o), {
        success: !1,
        content: "",
        error: m
      };
    }
  }
  /**
   * 检查 LLM API 是否可用
   */
  isAvailable() {
    const u = v1();
    return !!(u != null && u.generate || u != null && u.generateRaw);
  }
  /**
   * 估算文本 Token 数（简单估算）
   * @param text 文本
   */
  estimateTokens(u) {
    return Math.ceil(u.length / 3);
  }
}
const J1 = new K1(), $1 = {
  enabled: !0,
  triggerMode: "auto",
  floorInterval: 10,
  worldbookMode: "chat",
  previewEnabled: !0,
  promptTemplateId: null,
  // 使用内置默认模板
  llmPresetId: null
  // 使用默认预设
}, b1 = {
  system: `你是一个专业的剧情总结助手。你的任务是将对话内容提炼为简洁的剧情摘要。

要求：
1. 保留关键情节和转折点
2. 提取重要的角色互动和情感变化
3. 使用第三人称叙述
4. 保持简洁，避免冗余
5. 直接输出摘要内容，不要添加前缀或解释`,
  user: `{{worldbookContext}}请将以下对话内容总结为剧情摘要：

{{chatHistory}}

---
请输出简洁的剧情摘要：`
}, Xa = "engram";
function S1() {
  var s, u;
  try {
    return ((u = (s = window.SillyTavern) == null ? void 0 : s.getContext) == null ? void 0 : u.call(s)) || null;
  } catch {
    return null;
  }
}
function j1() {
  var s, u;
  try {
    const c = (u = (s = window.SillyTavern) == null ? void 0 : s.getContext) == null ? void 0 : u.call(s);
    return c != null && c.chat_metadata ? c.chat_metadata : window.chat_metadata || null;
  } catch {
    return null;
  }
}
function pg() {
  var s;
  try {
    (s = window.saveChatDebounced) == null || s.call(window);
  } catch {
    console.warn("[Engram] saveChatDebounced 不可用");
  }
}
class F1 {
  constructor(u, c, o) {
    Qe(this, "config");
    Qe(this, "textProcessor");
    Qe(this, "llmAdapter");
    Qe(this, "currentChatId", null);
    Qe(this, "isRunning", !1);
    Qe(this, "isSummarizing", !1);
    Qe(this, "unsubscribeMessage", null);
    Qe(this, "unsubscribeChat", null);
    Qe(this, "summaryHistory", []);
    this.config = { ...$1, ...u }, this.textProcessor = c || Z1, this.llmAdapter = o || J1;
  }
  // ==================== 元数据操作 ====================
  /**
   * 从当前聊天元数据获取值
   */
  getFromChatMetadata(u) {
    const c = j1();
    if (c)
      return c.extensions || (c.extensions = {}), c.extensions[Xa] || (c.extensions[Xa] = {}), c.extensions[Xa][u];
  }
  /**
   * 保存值到当前聊天元数据
   */
  saveToChatMetadata(u, c) {
    const o = j1();
    o && (o.extensions || (o.extensions = {}), o.extensions[Xa] || (o.extensions[Xa] = {}), o.extensions[Xa][u] = c, this.log("debug", `已保存到 chat_metadata: ${u} = ${c}`), pg());
  }
  /**
   * 获取上次总结的楼层（从聊天元数据）
   */
  getLastSummarizedFloor() {
    const u = this.getFromChatMetadata("lastSummarizedFloor");
    return typeof u == "number" ? u : 0;
  }
  /**
   * 设置上次总结的楼层（保存到聊天元数据）
   */
  setLastSummarizedFloor(u) {
    this.saveToChatMetadata("lastSummarizedFloor", u);
  }
  // ==================== 楼层计算 ====================
  /**
   * 获取当前真实楼层数
   */
  getCurrentFloor() {
    const u = S1();
    return u != null && u.chat ? u.chat.length : 0;
  }
  /**
   * 获取当前聊天 ID
   */
  getCurrentChatId() {
    const u = S1();
    return (u == null ? void 0 : u.chatId) || null;
  }
  // ==================== 生命周期 ====================
  /**
   * 启动服务，开始监听事件
   */
  start() {
    if (this.isRunning) {
      this.log("warn", "服务已在运行");
      return;
    }
    this.initializeForCurrentChat(), this.config.triggerMode === "auto" && (this.unsubscribeMessage = ai.on(
      Ka.MESSAGE_RECEIVED,
      this.handleMessageReceived.bind(this)
    ), this.log("debug", `已订阅事件: ${Ka.MESSAGE_RECEIVED}`)), this.unsubscribeChat = ai.on(
      Ka.CHAT_CHANGED,
      this.handleChatChanged.bind(this)
    ), this.log("debug", `已订阅事件: ${Ka.CHAT_CHANGED}`), this.isRunning = !0;
    const u = this.getStatus();
    this.log("info", "服务已启动", u);
  }
  /**
   * 停止服务
   */
  stop() {
    this.unsubscribeMessage && (this.unsubscribeMessage(), this.unsubscribeMessage = null), this.unsubscribeChat && (this.unsubscribeChat(), this.unsubscribeChat = null), this.isRunning = !1, this.log("info", "服务已停止");
  }
  /**
   * 为当前聊天初始化状态
   */
  initializeForCurrentChat() {
    const u = this.getCurrentChatId(), c = this.getCurrentFloor(), o = this.getLastSummarizedFloor();
    this.currentChatId = u, this.log("info", "初始化当前聊天状态", {
      chatId: u,
      currentFloor: c,
      lastSummarizedFloor: o,
      pendingFloors: c - o
    }), o === 0 && c > 0 && (this.log("info", "首次初始化，设置基准为当前楼层", { currentFloor: c }), this.setLastSummarizedFloor(c));
  }
  // ==================== 事件处理 ====================
  /**
   * 处理消息接收事件
   */
  async handleMessageReceived() {
    const u = this.getCurrentFloor(), c = this.getLastSummarizedFloor(), o = u - c;
    this.log("debug", "收到新消息", {
      currentFloor: u,
      lastSummarized: c,
      pendingFloors: o,
      triggerAt: this.config.floorInterval
    }), o >= this.config.floorInterval && (this.log("info", "达到触发条件，准备总结", {
      pendingFloors: o,
      interval: this.config.floorInterval
    }), await this.triggerSummary());
  }
  /**
   * 处理聊天切换事件
   */
  handleChatChanged() {
    const u = this.getCurrentChatId();
    this.log("info", "聊天已切换", {
      from: this.currentChatId,
      to: u
    }), this.initializeForCurrentChat();
  }
  // ==================== 总结逻辑 ====================
  /**
   * 手动/自动触发总结
   */
  async triggerSummary(u = !1) {
    if (this.isSummarizing)
      return this.log("warn", "正在执行总结，跳过本次触发"), null;
    if (!this.config.enabled && !u)
      return this.log("debug", "自动总结已禁用"), null;
    const c = this.getCurrentFloor(), o = this.getLastSummarizedFloor();
    this.isSummarizing = !0, this.log("info", "开始执行总结", {
      floorRange: [o + 1, c],
      manual: u
    });
    try {
      const m = Br.getMessages(o, c);
      if (m.length === 0)
        return this.log("warn", "没有待总结的消息"), null;
      const h = {
        messages: m.map((ie) => ({
          role: ie.role,
          content: ie.content,
          name: ie.name
        })),
        floorRange: [o + 1, c]
      }, v = Br.formatMessagesAsText(m), C = V1.process(v);
      this.log("debug", "应用正则清洗", {
        originalLength: v.length,
        cleanedLength: C.length
      });
      let p = "";
      try {
        const ie = await Ja.getActivatedWorldInfo();
        ie && (p = `【背景设定】
` + ie + `

`, this.log("debug", "已加载世界书内容", { length: ie.length }));
      } catch (ie) {
        this.log("warn", "获取世界书失败", { error: String(ie) });
      }
      const b = Rt.getEnabledPromptTemplate("text_summary"), _ = (b == null ? void 0 : b.systemPrompt) || b1.system, R = ((b == null ? void 0 : b.userPromptTemplate) || b1.user).replace("{{worldbookContext}}", p).replace("{{chatHistory}}", C).replace("{{context}}", p);
      this.log("debug", "使用提示词模板", {
        source: b ? "APIPresets" : "fallback",
        templateName: (b == null ? void 0 : b.name) || "default"
      });
      const Z = Za.logSend({
        type: "summarize",
        systemPrompt: _,
        userPrompt: R,
        floorRange: h.floorRange
      }), B = Date.now(), L = await this.llmAdapter.generate({
        systemPrompt: _,
        userPrompt: R
      });
      if (Za.logReceive(Z, {
        response: L.content,
        status: L.success ? "success" : "error",
        error: L.error,
        duration: Date.now() - B
      }), !L.success)
        return this.log("error", "LLM 调用失败", { error: L.error }), this.showNotification("error", `总结失败: ${L.error}`), null;
      const $ = this.textProcessor.clean(L.content), H = await Ja.countTokens($), ee = {
        content: $,
        tokenCount: H,
        sourceFloors: h.floorRange,
        timestamp: Date.now(),
        writtenToWorldbook: !1
      };
      this.config.previewEnabled && this.log("info", "预览模式：等待用户确认", { result: ee });
      const q = await this.writeToWorldbook(ee);
      return ee.writtenToWorldbook = q, this.setLastSummarizedFloor(c), this.summaryHistory.push(ee), this.log("success", "总结完成", {
        tokens: H,
        floorRange: ee.sourceFloors,
        newLastSummarized: c
      }), ee;
    } catch (m) {
      const h = m instanceof Error ? m.message : String(m);
      return this.log("error", "总结执行异常", { error: h }), this.showNotification("error", `总结异常: ${h}`), null;
    } finally {
      this.isSummarizing = !1;
    }
  }
  /**
   * 写入世界书
   */
  async writeToWorldbook(u) {
    try {
      const c = await Ja.getChatWorldbook();
      if (!c)
        return this.log("warn", "无法获取聊天世界书"), !1;
      const o = this.textProcessor.formatAsWorldEntry(
        u.content,
        {
          floorRange: u.sourceFloors,
          timestamp: u.timestamp
        }
      ), m = await Ja.createEntry(c, {
        name: `剧情摘要_${u.sourceFloors[0]}-${u.sourceFloors[1]}`,
        content: o,
        enabled: !0,
        constant: !0
      });
      return m && this.log("success", "已写入世界书", { worldbook: c }), m;
    } catch (c) {
      return this.log("error", "写入世界书失败", { error: String(c) }), !1;
    }
  }
  // ==================== 状态查询 ====================
  /**
   * 获取当前状态
   */
  getStatus() {
    const u = this.getCurrentFloor(), c = this.getLastSummarizedFloor();
    return {
      running: this.isRunning,
      currentFloor: u,
      lastSummarizedFloor: c,
      pendingFloors: Math.max(0, u - c),
      historyCount: this.summaryHistory.length,
      isSummarizing: this.isSummarizing
    };
  }
  /**
   * 刷新状态（强制重新读取）
   */
  refreshStatus() {
    return this.initializeForCurrentChat(), this.getStatus();
  }
  /**
   * 获取配置
   */
  getConfig() {
    return { ...this.config };
  }
  /**
   * 更新配置
   */
  updateConfig(u) {
    this.config = { ...this.config, ...u }, this.log("info", "配置已更新", { config: this.config });
  }
  /**
   * 获取总结历史
   */
  getHistory() {
    return [...this.summaryHistory];
  }
  /**
   * 重置基准楼层为当前楼层
   */
  resetBaseFloor() {
    const u = this.getCurrentFloor();
    this.setLastSummarizedFloor(u), this.log("info", "已重置基准楼层", { currentFloor: u });
  }
  // ==================== 工具方法 ====================
  /**
   * 记录日志
   */
  async log(u, c, o) {
    try {
      const { Logger: m } = await Promise.resolve().then(() => L1);
      m[u]("Summarizer", c, o);
    } catch {
      console.log(`[Summarizer] ${u}: ${c}`, o);
    }
  }
  /**
   * 显示通知
   */
  showNotification(u, c) {
    try {
      const o = window.toastr;
      o != null && o[u] && o[u](c, "Engram");
    } catch {
      console.log(`[Engram Notification] ${u}: ${c}`);
    }
  }
}
const xg = new F1(), In = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  DEFAULT_REGEX_RULES: li,
  DEFAULT_SUMMARIZER_CONFIG: $1,
  LLMAdapter: K1,
  RegexProcessor: qc,
  SummarizerService: F1,
  TextProcessor: Q1,
  llmAdapter: J1,
  regexProcessor: V1,
  summarizerService: xg,
  textProcessor: Z1
}, Symbol.toStringTag, { value: "Module" }));
//# sourceMappingURL=index.js.map
