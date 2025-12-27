var wv = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function N0(c) {
  return c && c.__esModule && Object.prototype.hasOwnProperty.call(c, "default") ? c.default : c;
}
var Mf = { exports: {} }, k = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var u0;
function mh() {
  if (u0) return k;
  u0 = 1;
  var c = Symbol.for("react.transitional.element"), d = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), f = Symbol.for("react.strict_mode"), b = Symbol.for("react.profiler"), z = Symbol.for("react.consumer"), O = Symbol.for("react.context"), C = Symbol.for("react.forward_ref"), N = Symbol.for("react.suspense"), x = Symbol.for("react.memo"), D = Symbol.for("react.lazy"), H = Symbol.for("react.activity"), J = Symbol.iterator;
  function w(v) {
    return v === null || typeof v != "object" ? null : (v = J && v[J] || v["@@iterator"], typeof v == "function" ? v : null);
  }
  var et = {
    isMounted: function() {
      return !1;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, F = Object.assign, G = {};
  function I(v, M, R) {
    this.props = v, this.context = M, this.refs = G, this.updater = R || et;
  }
  I.prototype.isReactComponent = {}, I.prototype.setState = function(v, M) {
    if (typeof v != "object" && typeof v != "function" && v != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, v, M, "setState");
  }, I.prototype.forceUpdate = function(v) {
    this.updater.enqueueForceUpdate(this, v, "forceUpdate");
  };
  function Ct() {
  }
  Ct.prototype = I.prototype;
  function q(v, M, R) {
    this.props = v, this.context = M, this.refs = G, this.updater = R || et;
  }
  var K = q.prototype = new Ct();
  K.constructor = q, F(K, I.prototype), K.isPureReactComponent = !0;
  var vt = Array.isArray;
  function At() {
  }
  var P = { H: null, A: null, T: null, S: null }, Mt = Object.prototype.hasOwnProperty;
  function Me(v, M, R) {
    var Y = R.ref;
    return {
      $$typeof: c,
      type: v,
      key: M,
      ref: Y !== void 0 ? Y : null,
      props: R
    };
  }
  function Fl(v, M) {
    return Me(v.type, M, v.props);
  }
  function Oe(v) {
    return typeof v == "object" && v !== null && v.$$typeof === c;
  }
  function Wt(v) {
    var M = { "=": "=0", ":": "=2" };
    return "$" + v.replace(/[=:]/g, function(R) {
      return M[R];
    });
  }
  var Ol = /\/+/g;
  function Le(v, M) {
    return typeof v == "object" && v !== null && v.key != null ? Wt("" + v.key) : M.toString(36);
  }
  function _e(v) {
    switch (v.status) {
      case "fulfilled":
        return v.value;
      case "rejected":
        throw v.reason;
      default:
        switch (typeof v.status == "string" ? v.then(At, At) : (v.status = "pending", v.then(
          function(M) {
            v.status === "pending" && (v.status = "fulfilled", v.value = M);
          },
          function(M) {
            v.status === "pending" && (v.status = "rejected", v.reason = M);
          }
        )), v.status) {
          case "fulfilled":
            return v.value;
          case "rejected":
            throw v.reason;
        }
    }
    throw v;
  }
  function A(v, M, R, Y, $) {
    var lt = typeof v;
    (lt === "undefined" || lt === "boolean") && (v = null);
    var dt = !1;
    if (v === null) dt = !0;
    else
      switch (lt) {
        case "bigint":
        case "string":
        case "number":
          dt = !0;
          break;
        case "object":
          switch (v.$$typeof) {
            case c:
            case d:
              dt = !0;
              break;
            case D:
              return dt = v._init, A(
                dt(v._payload),
                M,
                R,
                Y,
                $
              );
          }
      }
    if (dt)
      return $ = $(v), dt = Y === "" ? "." + Le(v, 0) : Y, vt($) ? (R = "", dt != null && (R = dt.replace(Ol, "$&/") + "/"), A($, M, R, "", function(Ba) {
        return Ba;
      })) : $ != null && (Oe($) && ($ = Fl(
        $,
        R + ($.key == null || v && v.key === $.key ? "" : ("" + $.key).replace(
          Ol,
          "$&/"
        ) + "/") + dt
      )), M.push($)), 1;
    dt = 0;
    var kt = Y === "" ? "." : Y + ":";
    if (vt(v))
      for (var Ot = 0; Ot < v.length; Ot++)
        Y = v[Ot], lt = kt + Le(Y, Ot), dt += A(
          Y,
          M,
          R,
          lt,
          $
        );
    else if (Ot = w(v), typeof Ot == "function")
      for (v = Ot.call(v), Ot = 0; !(Y = v.next()).done; )
        Y = Y.value, lt = kt + Le(Y, Ot++), dt += A(
          Y,
          M,
          R,
          lt,
          $
        );
    else if (lt === "object") {
      if (typeof v.then == "function")
        return A(
          _e(v),
          M,
          R,
          Y,
          $
        );
      throw M = String(v), Error(
        "Objects are not valid as a React child (found: " + (M === "[object Object]" ? "object with keys {" + Object.keys(v).join(", ") + "}" : M) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return dt;
  }
  function U(v, M, R) {
    if (v == null) return v;
    var Y = [], $ = 0;
    return A(v, Y, "", "", function(lt) {
      return M.call(R, lt, $++);
    }), Y;
  }
  function V(v) {
    if (v._status === -1) {
      var M = v._result;
      M = M(), M.then(
        function(R) {
          (v._status === 0 || v._status === -1) && (v._status = 1, v._result = R);
        },
        function(R) {
          (v._status === 0 || v._status === -1) && (v._status = 2, v._result = R);
        }
      ), v._status === -1 && (v._status = 0, v._result = M);
    }
    if (v._status === 1) return v._result.default;
    throw v._result;
  }
  var yt = typeof reportError == "function" ? reportError : function(v) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var M = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof v == "object" && v !== null && typeof v.message == "string" ? String(v.message) : String(v),
        error: v
      });
      if (!window.dispatchEvent(M)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", v);
      return;
    }
    console.error(v);
  }, xt = {
    map: U,
    forEach: function(v, M, R) {
      U(
        v,
        function() {
          M.apply(this, arguments);
        },
        R
      );
    },
    count: function(v) {
      var M = 0;
      return U(v, function() {
        M++;
      }), M;
    },
    toArray: function(v) {
      return U(v, function(M) {
        return M;
      }) || [];
    },
    only: function(v) {
      if (!Oe(v))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return v;
    }
  };
  return k.Activity = H, k.Children = xt, k.Component = I, k.Fragment = r, k.Profiler = b, k.PureComponent = q, k.StrictMode = f, k.Suspense = N, k.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = P, k.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(v) {
      return P.H.useMemoCache(v);
    }
  }, k.cache = function(v) {
    return function() {
      return v.apply(null, arguments);
    };
  }, k.cacheSignal = function() {
    return null;
  }, k.cloneElement = function(v, M, R) {
    if (v == null)
      throw Error(
        "The argument must be a React element, but you passed " + v + "."
      );
    var Y = F({}, v.props), $ = v.key;
    if (M != null)
      for (lt in M.key !== void 0 && ($ = "" + M.key), M)
        !Mt.call(M, lt) || lt === "key" || lt === "__self" || lt === "__source" || lt === "ref" && M.ref === void 0 || (Y[lt] = M[lt]);
    var lt = arguments.length - 2;
    if (lt === 1) Y.children = R;
    else if (1 < lt) {
      for (var dt = Array(lt), kt = 0; kt < lt; kt++)
        dt[kt] = arguments[kt + 2];
      Y.children = dt;
    }
    return Me(v.type, $, Y);
  }, k.createContext = function(v) {
    return v = {
      $$typeof: O,
      _currentValue: v,
      _currentValue2: v,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, v.Provider = v, v.Consumer = {
      $$typeof: z,
      _context: v
    }, v;
  }, k.createElement = function(v, M, R) {
    var Y, $ = {}, lt = null;
    if (M != null)
      for (Y in M.key !== void 0 && (lt = "" + M.key), M)
        Mt.call(M, Y) && Y !== "key" && Y !== "__self" && Y !== "__source" && ($[Y] = M[Y]);
    var dt = arguments.length - 2;
    if (dt === 1) $.children = R;
    else if (1 < dt) {
      for (var kt = Array(dt), Ot = 0; Ot < dt; Ot++)
        kt[Ot] = arguments[Ot + 2];
      $.children = kt;
    }
    if (v && v.defaultProps)
      for (Y in dt = v.defaultProps, dt)
        $[Y] === void 0 && ($[Y] = dt[Y]);
    return Me(v, lt, $);
  }, k.createRef = function() {
    return { current: null };
  }, k.forwardRef = function(v) {
    return { $$typeof: C, render: v };
  }, k.isValidElement = Oe, k.lazy = function(v) {
    return {
      $$typeof: D,
      _payload: { _status: -1, _result: v },
      _init: V
    };
  }, k.memo = function(v, M) {
    return {
      $$typeof: x,
      type: v,
      compare: M === void 0 ? null : M
    };
  }, k.startTransition = function(v) {
    var M = P.T, R = {};
    P.T = R;
    try {
      var Y = v(), $ = P.S;
      $ !== null && $(R, Y), typeof Y == "object" && Y !== null && typeof Y.then == "function" && Y.then(At, yt);
    } catch (lt) {
      yt(lt);
    } finally {
      M !== null && R.types !== null && (M.types = R.types), P.T = M;
    }
  }, k.unstable_useCacheRefresh = function() {
    return P.H.useCacheRefresh();
  }, k.use = function(v) {
    return P.H.use(v);
  }, k.useActionState = function(v, M, R) {
    return P.H.useActionState(v, M, R);
  }, k.useCallback = function(v, M) {
    return P.H.useCallback(v, M);
  }, k.useContext = function(v) {
    return P.H.useContext(v);
  }, k.useDebugValue = function() {
  }, k.useDeferredValue = function(v, M) {
    return P.H.useDeferredValue(v, M);
  }, k.useEffect = function(v, M) {
    return P.H.useEffect(v, M);
  }, k.useEffectEvent = function(v) {
    return P.H.useEffectEvent(v);
  }, k.useId = function() {
    return P.H.useId();
  }, k.useImperativeHandle = function(v, M, R) {
    return P.H.useImperativeHandle(v, M, R);
  }, k.useInsertionEffect = function(v, M) {
    return P.H.useInsertionEffect(v, M);
  }, k.useLayoutEffect = function(v, M) {
    return P.H.useLayoutEffect(v, M);
  }, k.useMemo = function(v, M) {
    return P.H.useMemo(v, M);
  }, k.useOptimistic = function(v, M) {
    return P.H.useOptimistic(v, M);
  }, k.useReducer = function(v, M, R) {
    return P.H.useReducer(v, M, R);
  }, k.useRef = function(v) {
    return P.H.useRef(v);
  }, k.useState = function(v) {
    return P.H.useState(v);
  }, k.useSyncExternalStore = function(v, M, R) {
    return P.H.useSyncExternalStore(
      v,
      M,
      R
    );
  }, k.useTransition = function() {
    return P.H.useTransition();
  }, k.version = "19.2.3", k;
}
var i0;
function Wf() {
  return i0 || (i0 = 1, Mf.exports = mh()), Mf.exports;
}
var Z = Wf();
const Ff = /* @__PURE__ */ N0(Z);
var Of = { exports: {} }, On = {}, Df = { exports: {} }, Uf = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var c0;
function hh() {
  return c0 || (c0 = 1, (function(c) {
    function d(A, U) {
      var V = A.length;
      A.push(U);
      t: for (; 0 < V; ) {
        var yt = V - 1 >>> 1, xt = A[yt];
        if (0 < b(xt, U))
          A[yt] = U, A[V] = xt, V = yt;
        else break t;
      }
    }
    function r(A) {
      return A.length === 0 ? null : A[0];
    }
    function f(A) {
      if (A.length === 0) return null;
      var U = A[0], V = A.pop();
      if (V !== U) {
        A[0] = V;
        t: for (var yt = 0, xt = A.length, v = xt >>> 1; yt < v; ) {
          var M = 2 * (yt + 1) - 1, R = A[M], Y = M + 1, $ = A[Y];
          if (0 > b(R, V))
            Y < xt && 0 > b($, R) ? (A[yt] = $, A[Y] = V, yt = Y) : (A[yt] = R, A[M] = V, yt = M);
          else if (Y < xt && 0 > b($, V))
            A[yt] = $, A[Y] = V, yt = Y;
          else break t;
        }
      }
      return U;
    }
    function b(A, U) {
      var V = A.sortIndex - U.sortIndex;
      return V !== 0 ? V : A.id - U.id;
    }
    if (c.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var z = performance;
      c.unstable_now = function() {
        return z.now();
      };
    } else {
      var O = Date, C = O.now();
      c.unstable_now = function() {
        return O.now() - C;
      };
    }
    var N = [], x = [], D = 1, H = null, J = 3, w = !1, et = !1, F = !1, G = !1, I = typeof setTimeout == "function" ? setTimeout : null, Ct = typeof clearTimeout == "function" ? clearTimeout : null, q = typeof setImmediate < "u" ? setImmediate : null;
    function K(A) {
      for (var U = r(x); U !== null; ) {
        if (U.callback === null) f(x);
        else if (U.startTime <= A)
          f(x), U.sortIndex = U.expirationTime, d(N, U);
        else break;
        U = r(x);
      }
    }
    function vt(A) {
      if (F = !1, K(A), !et)
        if (r(N) !== null)
          et = !0, At || (At = !0, Wt());
        else {
          var U = r(x);
          U !== null && _e(vt, U.startTime - A);
        }
    }
    var At = !1, P = -1, Mt = 5, Me = -1;
    function Fl() {
      return G ? !0 : !(c.unstable_now() - Me < Mt);
    }
    function Oe() {
      if (G = !1, At) {
        var A = c.unstable_now();
        Me = A;
        var U = !0;
        try {
          t: {
            et = !1, F && (F = !1, Ct(P), P = -1), w = !0;
            var V = J;
            try {
              e: {
                for (K(A), H = r(N); H !== null && !(H.expirationTime > A && Fl()); ) {
                  var yt = H.callback;
                  if (typeof yt == "function") {
                    H.callback = null, J = H.priorityLevel;
                    var xt = yt(
                      H.expirationTime <= A
                    );
                    if (A = c.unstable_now(), typeof xt == "function") {
                      H.callback = xt, K(A), U = !0;
                      break e;
                    }
                    H === r(N) && f(N), K(A);
                  } else f(N);
                  H = r(N);
                }
                if (H !== null) U = !0;
                else {
                  var v = r(x);
                  v !== null && _e(
                    vt,
                    v.startTime - A
                  ), U = !1;
                }
              }
              break t;
            } finally {
              H = null, J = V, w = !1;
            }
            U = void 0;
          }
        } finally {
          U ? Wt() : At = !1;
        }
      }
    }
    var Wt;
    if (typeof q == "function")
      Wt = function() {
        q(Oe);
      };
    else if (typeof MessageChannel < "u") {
      var Ol = new MessageChannel(), Le = Ol.port2;
      Ol.port1.onmessage = Oe, Wt = function() {
        Le.postMessage(null);
      };
    } else
      Wt = function() {
        I(Oe, 0);
      };
    function _e(A, U) {
      P = I(function() {
        A(c.unstable_now());
      }, U);
    }
    c.unstable_IdlePriority = 5, c.unstable_ImmediatePriority = 1, c.unstable_LowPriority = 4, c.unstable_NormalPriority = 3, c.unstable_Profiling = null, c.unstable_UserBlockingPriority = 2, c.unstable_cancelCallback = function(A) {
      A.callback = null;
    }, c.unstable_forceFrameRate = function(A) {
      0 > A || 125 < A ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : Mt = 0 < A ? Math.floor(1e3 / A) : 5;
    }, c.unstable_getCurrentPriorityLevel = function() {
      return J;
    }, c.unstable_next = function(A) {
      switch (J) {
        case 1:
        case 2:
        case 3:
          var U = 3;
          break;
        default:
          U = J;
      }
      var V = J;
      J = U;
      try {
        return A();
      } finally {
        J = V;
      }
    }, c.unstable_requestPaint = function() {
      G = !0;
    }, c.unstable_runWithPriority = function(A, U) {
      switch (A) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          A = 3;
      }
      var V = J;
      J = A;
      try {
        return U();
      } finally {
        J = V;
      }
    }, c.unstable_scheduleCallback = function(A, U, V) {
      var yt = c.unstable_now();
      switch (typeof V == "object" && V !== null ? (V = V.delay, V = typeof V == "number" && 0 < V ? yt + V : yt) : V = yt, A) {
        case 1:
          var xt = -1;
          break;
        case 2:
          xt = 250;
          break;
        case 5:
          xt = 1073741823;
          break;
        case 4:
          xt = 1e4;
          break;
        default:
          xt = 5e3;
      }
      return xt = V + xt, A = {
        id: D++,
        callback: U,
        priorityLevel: A,
        startTime: V,
        expirationTime: xt,
        sortIndex: -1
      }, V > yt ? (A.sortIndex = V, d(x, A), r(N) === null && A === r(x) && (F ? (Ct(P), P = -1) : F = !0, _e(vt, V - yt))) : (A.sortIndex = xt, d(N, A), et || w || (et = !0, At || (At = !0, Wt()))), A;
    }, c.unstable_shouldYield = Fl, c.unstable_wrapCallback = function(A) {
      var U = J;
      return function() {
        var V = J;
        J = U;
        try {
          return A.apply(this, arguments);
        } finally {
          J = V;
        }
      };
    };
  })(Uf)), Uf;
}
var f0;
function vh() {
  return f0 || (f0 = 1, Df.exports = hh()), Df.exports;
}
var Rf = { exports: {} }, Jt = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var s0;
function yh() {
  if (s0) return Jt;
  s0 = 1;
  var c = Wf();
  function d(N) {
    var x = "https://react.dev/errors/" + N;
    if (1 < arguments.length) {
      x += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var D = 2; D < arguments.length; D++)
        x += "&args[]=" + encodeURIComponent(arguments[D]);
    }
    return "Minified React error #" + N + "; visit " + x + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function r() {
  }
  var f = {
    d: {
      f: r,
      r: function() {
        throw Error(d(522));
      },
      D: r,
      C: r,
      L: r,
      m: r,
      X: r,
      S: r,
      M: r
    },
    p: 0,
    findDOMNode: null
  }, b = Symbol.for("react.portal");
  function z(N, x, D) {
    var H = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: b,
      key: H == null ? null : "" + H,
      children: N,
      containerInfo: x,
      implementation: D
    };
  }
  var O = c.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function C(N, x) {
    if (N === "font") return "";
    if (typeof x == "string")
      return x === "use-credentials" ? x : "";
  }
  return Jt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = f, Jt.createPortal = function(N, x) {
    var D = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!x || x.nodeType !== 1 && x.nodeType !== 9 && x.nodeType !== 11)
      throw Error(d(299));
    return z(N, x, null, D);
  }, Jt.flushSync = function(N) {
    var x = O.T, D = f.p;
    try {
      if (O.T = null, f.p = 2, N) return N();
    } finally {
      O.T = x, f.p = D, f.d.f();
    }
  }, Jt.preconnect = function(N, x) {
    typeof N == "string" && (x ? (x = x.crossOrigin, x = typeof x == "string" ? x === "use-credentials" ? x : "" : void 0) : x = null, f.d.C(N, x));
  }, Jt.prefetchDNS = function(N) {
    typeof N == "string" && f.d.D(N);
  }, Jt.preinit = function(N, x) {
    if (typeof N == "string" && x && typeof x.as == "string") {
      var D = x.as, H = C(D, x.crossOrigin), J = typeof x.integrity == "string" ? x.integrity : void 0, w = typeof x.fetchPriority == "string" ? x.fetchPriority : void 0;
      D === "style" ? f.d.S(
        N,
        typeof x.precedence == "string" ? x.precedence : void 0,
        {
          crossOrigin: H,
          integrity: J,
          fetchPriority: w
        }
      ) : D === "script" && f.d.X(N, {
        crossOrigin: H,
        integrity: J,
        fetchPriority: w,
        nonce: typeof x.nonce == "string" ? x.nonce : void 0
      });
    }
  }, Jt.preinitModule = function(N, x) {
    if (typeof N == "string")
      if (typeof x == "object" && x !== null) {
        if (x.as == null || x.as === "script") {
          var D = C(
            x.as,
            x.crossOrigin
          );
          f.d.M(N, {
            crossOrigin: D,
            integrity: typeof x.integrity == "string" ? x.integrity : void 0,
            nonce: typeof x.nonce == "string" ? x.nonce : void 0
          });
        }
      } else x == null && f.d.M(N);
  }, Jt.preload = function(N, x) {
    if (typeof N == "string" && typeof x == "object" && x !== null && typeof x.as == "string") {
      var D = x.as, H = C(D, x.crossOrigin);
      f.d.L(N, D, {
        crossOrigin: H,
        integrity: typeof x.integrity == "string" ? x.integrity : void 0,
        nonce: typeof x.nonce == "string" ? x.nonce : void 0,
        type: typeof x.type == "string" ? x.type : void 0,
        fetchPriority: typeof x.fetchPriority == "string" ? x.fetchPriority : void 0,
        referrerPolicy: typeof x.referrerPolicy == "string" ? x.referrerPolicy : void 0,
        imageSrcSet: typeof x.imageSrcSet == "string" ? x.imageSrcSet : void 0,
        imageSizes: typeof x.imageSizes == "string" ? x.imageSizes : void 0,
        media: typeof x.media == "string" ? x.media : void 0
      });
    }
  }, Jt.preloadModule = function(N, x) {
    if (typeof N == "string")
      if (x) {
        var D = C(x.as, x.crossOrigin);
        f.d.m(N, {
          as: typeof x.as == "string" && x.as !== "script" ? x.as : void 0,
          crossOrigin: D,
          integrity: typeof x.integrity == "string" ? x.integrity : void 0
        });
      } else f.d.m(N);
  }, Jt.requestFormReset = function(N) {
    f.d.r(N);
  }, Jt.unstable_batchedUpdates = function(N, x) {
    return N(x);
  }, Jt.useFormState = function(N, x, D) {
    return O.H.useFormState(N, x, D);
  }, Jt.useFormStatus = function() {
    return O.H.useHostTransitionStatus();
  }, Jt.version = "19.2.3", Jt;
}
var r0;
function bh() {
  if (r0) return Rf.exports;
  r0 = 1;
  function c() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(c);
      } catch (d) {
        console.error(d);
      }
  }
  return c(), Rf.exports = yh(), Rf.exports;
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
var o0;
function gh() {
  if (o0) return On;
  o0 = 1;
  var c = vh(), d = Wf(), r = bh();
  function f(t) {
    var e = "https://react.dev/errors/" + t;
    if (1 < arguments.length) {
      e += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var l = 2; l < arguments.length; l++)
        e += "&args[]=" + encodeURIComponent(arguments[l]);
    }
    return "Minified React error #" + t + "; visit " + e + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function b(t) {
    return !(!t || t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11);
  }
  function z(t) {
    var e = t, l = t;
    if (t.alternate) for (; e.return; ) e = e.return;
    else {
      t = e;
      do
        e = t, (e.flags & 4098) !== 0 && (l = e.return), t = e.return;
      while (t);
    }
    return e.tag === 3 ? l : null;
  }
  function O(t) {
    if (t.tag === 13) {
      var e = t.memoizedState;
      if (e === null && (t = t.alternate, t !== null && (e = t.memoizedState)), e !== null) return e.dehydrated;
    }
    return null;
  }
  function C(t) {
    if (t.tag === 31) {
      var e = t.memoizedState;
      if (e === null && (t = t.alternate, t !== null && (e = t.memoizedState)), e !== null) return e.dehydrated;
    }
    return null;
  }
  function N(t) {
    if (z(t) !== t)
      throw Error(f(188));
  }
  function x(t) {
    var e = t.alternate;
    if (!e) {
      if (e = z(t), e === null) throw Error(f(188));
      return e !== t ? null : t;
    }
    for (var l = t, a = e; ; ) {
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
          if (u === l) return N(n), t;
          if (u === a) return N(n), e;
          u = u.sibling;
        }
        throw Error(f(188));
      }
      if (l.return !== a.return) l = n, a = u;
      else {
        for (var i = !1, s = n.child; s; ) {
          if (s === l) {
            i = !0, l = n, a = u;
            break;
          }
          if (s === a) {
            i = !0, a = n, l = u;
            break;
          }
          s = s.sibling;
        }
        if (!i) {
          for (s = u.child; s; ) {
            if (s === l) {
              i = !0, l = u, a = n;
              break;
            }
            if (s === a) {
              i = !0, a = u, l = n;
              break;
            }
            s = s.sibling;
          }
          if (!i) throw Error(f(189));
        }
      }
      if (l.alternate !== a) throw Error(f(190));
    }
    if (l.tag !== 3) throw Error(f(188));
    return l.stateNode.current === l ? t : e;
  }
  function D(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t;
    for (t = t.child; t !== null; ) {
      if (e = D(t), e !== null) return e;
      t = t.sibling;
    }
    return null;
  }
  var H = Object.assign, J = Symbol.for("react.element"), w = Symbol.for("react.transitional.element"), et = Symbol.for("react.portal"), F = Symbol.for("react.fragment"), G = Symbol.for("react.strict_mode"), I = Symbol.for("react.profiler"), Ct = Symbol.for("react.consumer"), q = Symbol.for("react.context"), K = Symbol.for("react.forward_ref"), vt = Symbol.for("react.suspense"), At = Symbol.for("react.suspense_list"), P = Symbol.for("react.memo"), Mt = Symbol.for("react.lazy"), Me = Symbol.for("react.activity"), Fl = Symbol.for("react.memo_cache_sentinel"), Oe = Symbol.iterator;
  function Wt(t) {
    return t === null || typeof t != "object" ? null : (t = Oe && t[Oe] || t["@@iterator"], typeof t == "function" ? t : null);
  }
  var Ol = Symbol.for("react.client.reference");
  function Le(t) {
    if (t == null) return null;
    if (typeof t == "function")
      return t.$$typeof === Ol ? null : t.displayName || t.name || null;
    if (typeof t == "string") return t;
    switch (t) {
      case F:
        return "Fragment";
      case I:
        return "Profiler";
      case G:
        return "StrictMode";
      case vt:
        return "Suspense";
      case At:
        return "SuspenseList";
      case Me:
        return "Activity";
    }
    if (typeof t == "object")
      switch (t.$$typeof) {
        case et:
          return "Portal";
        case q:
          return t.displayName || "Context";
        case Ct:
          return (t._context.displayName || "Context") + ".Consumer";
        case K:
          var e = t.render;
          return t = t.displayName, t || (t = e.displayName || e.name || "", t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef"), t;
        case P:
          return e = t.displayName || null, e !== null ? e : Le(t.type) || "Memo";
        case Mt:
          e = t._payload, t = t._init;
          try {
            return Le(t(e));
          } catch {
          }
      }
    return null;
  }
  var _e = Array.isArray, A = d.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, U = r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, V = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, yt = [], xt = -1;
  function v(t) {
    return { current: t };
  }
  function M(t) {
    0 > xt || (t.current = yt[xt], yt[xt] = null, xt--);
  }
  function R(t, e) {
    xt++, yt[xt] = t.current, t.current = e;
  }
  var Y = v(null), $ = v(null), lt = v(null), dt = v(null);
  function kt(t, e) {
    switch (R(lt, e), R($, t), R(Y, null), e.nodeType) {
      case 9:
      case 11:
        t = (t = e.documentElement) && (t = t.namespaceURI) ? Nd(t) : 0;
        break;
      default:
        if (t = e.tagName, e = e.namespaceURI)
          e = Nd(e), t = Cd(e, t);
        else
          switch (t) {
            case "svg":
              t = 1;
              break;
            case "math":
              t = 2;
              break;
            default:
              t = 0;
          }
    }
    M(Y), R(Y, t);
  }
  function Ot() {
    M(Y), M($), M(lt);
  }
  function Ba(t) {
    t.memoizedState !== null && R(dt, t);
    var e = Y.current, l = Cd(e, t.type);
    e !== l && (R($, t), R(Y, l));
  }
  function Bn(t) {
    $.current === t && (M(Y), M($)), dt.current === t && (M(dt), Tn._currentValue = V);
  }
  var oi, as;
  function Dl(t) {
    if (oi === void 0)
      try {
        throw Error();
      } catch (l) {
        var e = l.stack.trim().match(/\n( *(at )?)/);
        oi = e && e[1] || "", as = -1 < l.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < l.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + oi + t + as;
  }
  var di = !1;
  function mi(t, e) {
    if (!t || di) return "";
    di = !0;
    var l = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var a = {
        DetermineComponentFrameRoot: function() {
          try {
            if (e) {
              var T = function() {
                throw Error();
              };
              if (Object.defineProperty(T.prototype, "props", {
                set: function() {
                  throw Error();
                }
              }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct(T, []);
                } catch (E) {
                  var S = E;
                }
                Reflect.construct(t, [], T);
              } else {
                try {
                  T.call();
                } catch (E) {
                  S = E;
                }
                t.call(T.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (E) {
                S = E;
              }
              (T = t()) && typeof T.catch == "function" && T.catch(function() {
              });
            }
          } catch (E) {
            if (E && S && typeof E.stack == "string")
              return [E.stack, S.stack];
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
      var u = a.DetermineComponentFrameRoot(), i = u[0], s = u[1];
      if (i && s) {
        var m = i.split(`
`), p = s.split(`
`);
        for (n = a = 0; a < m.length && !m[a].includes("DetermineComponentFrameRoot"); )
          a++;
        for (; n < p.length && !p[n].includes(
          "DetermineComponentFrameRoot"
        ); )
          n++;
        if (a === m.length || n === p.length)
          for (a = m.length - 1, n = p.length - 1; 1 <= a && 0 <= n && m[a] !== p[n]; )
            n--;
        for (; 1 <= a && 0 <= n; a--, n--)
          if (m[a] !== p[n]) {
            if (a !== 1 || n !== 1)
              do
                if (a--, n--, 0 > n || m[a] !== p[n]) {
                  var _ = `
` + m[a].replace(" at new ", " at ");
                  return t.displayName && _.includes("<anonymous>") && (_ = _.replace("<anonymous>", t.displayName)), _;
                }
              while (1 <= a && 0 <= n);
            break;
          }
      }
    } finally {
      di = !1, Error.prepareStackTrace = l;
    }
    return (l = t ? t.displayName || t.name : "") ? Dl(l) : "";
  }
  function Z0(t, e) {
    switch (t.tag) {
      case 26:
      case 27:
      case 5:
        return Dl(t.type);
      case 16:
        return Dl("Lazy");
      case 13:
        return t.child !== e && e !== null ? Dl("Suspense Fallback") : Dl("Suspense");
      case 19:
        return Dl("SuspenseList");
      case 0:
      case 15:
        return mi(t.type, !1);
      case 11:
        return mi(t.type.render, !1);
      case 1:
        return mi(t.type, !0);
      case 31:
        return Dl("Activity");
      default:
        return "";
    }
  }
  function ns(t) {
    try {
      var e = "", l = null;
      do
        e += Z0(t, l), l = t, t = t.return;
      while (t);
      return e;
    } catch (a) {
      return `
Error generating stack: ` + a.message + `
` + a.stack;
    }
  }
  var hi = Object.prototype.hasOwnProperty, vi = c.unstable_scheduleCallback, yi = c.unstable_cancelCallback, V0 = c.unstable_shouldYield, K0 = c.unstable_requestPaint, ne = c.unstable_now, J0 = c.unstable_getCurrentPriorityLevel, us = c.unstable_ImmediatePriority, is = c.unstable_UserBlockingPriority, Yn = c.unstable_NormalPriority, k0 = c.unstable_LowPriority, cs = c.unstable_IdlePriority, $0 = c.log, W0 = c.unstable_setDisableYieldValue, Ya = null, ue = null;
  function ul(t) {
    if (typeof $0 == "function" && W0(t), ue && typeof ue.setStrictMode == "function")
      try {
        ue.setStrictMode(Ya, t);
      } catch {
      }
  }
  var ie = Math.clz32 ? Math.clz32 : P0, F0 = Math.log, I0 = Math.LN2;
  function P0(t) {
    return t >>>= 0, t === 0 ? 32 : 31 - (F0(t) / I0 | 0) | 0;
  }
  var Ln = 256, Gn = 262144, wn = 4194304;
  function Ul(t) {
    var e = t & 42;
    if (e !== 0) return e;
    switch (t & -t) {
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
        return t & 261888;
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t & 3932160;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return t & 62914560;
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
        return t;
    }
  }
  function Qn(t, e, l) {
    var a = t.pendingLanes;
    if (a === 0) return 0;
    var n = 0, u = t.suspendedLanes, i = t.pingedLanes;
    t = t.warmLanes;
    var s = a & 134217727;
    return s !== 0 ? (a = s & ~u, a !== 0 ? n = Ul(a) : (i &= s, i !== 0 ? n = Ul(i) : l || (l = s & ~t, l !== 0 && (n = Ul(l))))) : (s = a & ~u, s !== 0 ? n = Ul(s) : i !== 0 ? n = Ul(i) : l || (l = a & ~t, l !== 0 && (n = Ul(l)))), n === 0 ? 0 : e !== 0 && e !== n && (e & u) === 0 && (u = n & -n, l = e & -e, u >= l || u === 32 && (l & 4194048) !== 0) ? e : n;
  }
  function La(t, e) {
    return (t.pendingLanes & ~(t.suspendedLanes & ~t.pingedLanes) & e) === 0;
  }
  function t1(t, e) {
    switch (t) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return e + 250;
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
        return e + 5e3;
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
  function fs() {
    var t = wn;
    return wn <<= 1, (wn & 62914560) === 0 && (wn = 4194304), t;
  }
  function bi(t) {
    for (var e = [], l = 0; 31 > l; l++) e.push(t);
    return e;
  }
  function Ga(t, e) {
    t.pendingLanes |= e, e !== 268435456 && (t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0);
  }
  function e1(t, e, l, a, n, u) {
    var i = t.pendingLanes;
    t.pendingLanes = l, t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0, t.expiredLanes &= l, t.entangledLanes &= l, t.errorRecoveryDisabledLanes &= l, t.shellSuspendCounter = 0;
    var s = t.entanglements, m = t.expirationTimes, p = t.hiddenUpdates;
    for (l = i & ~l; 0 < l; ) {
      var _ = 31 - ie(l), T = 1 << _;
      s[_] = 0, m[_] = -1;
      var S = p[_];
      if (S !== null)
        for (p[_] = null, _ = 0; _ < S.length; _++) {
          var E = S[_];
          E !== null && (E.lane &= -536870913);
        }
      l &= ~T;
    }
    a !== 0 && ss(t, a, 0), u !== 0 && n === 0 && t.tag !== 0 && (t.suspendedLanes |= u & ~(i & ~e));
  }
  function ss(t, e, l) {
    t.pendingLanes |= e, t.suspendedLanes &= ~e;
    var a = 31 - ie(e);
    t.entangledLanes |= e, t.entanglements[a] = t.entanglements[a] | 1073741824 | l & 261930;
  }
  function rs(t, e) {
    var l = t.entangledLanes |= e;
    for (t = t.entanglements; l; ) {
      var a = 31 - ie(l), n = 1 << a;
      n & e | t[a] & e && (t[a] |= e), l &= ~n;
    }
  }
  function os(t, e) {
    var l = e & -e;
    return l = (l & 42) !== 0 ? 1 : gi(l), (l & (t.suspendedLanes | e)) !== 0 ? 0 : l;
  }
  function gi(t) {
    switch (t) {
      case 2:
        t = 1;
        break;
      case 8:
        t = 4;
        break;
      case 32:
        t = 16;
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
        t = 128;
        break;
      case 268435456:
        t = 134217728;
        break;
      default:
        t = 0;
    }
    return t;
  }
  function pi(t) {
    return t &= -t, 2 < t ? 8 < t ? (t & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function ds() {
    var t = U.p;
    return t !== 0 ? t : (t = window.event, t === void 0 ? 32 : Id(t.type));
  }
  function ms(t, e) {
    var l = U.p;
    try {
      return U.p = t, e();
    } finally {
      U.p = l;
    }
  }
  var il = Math.random().toString(36).slice(2), wt = "__reactFiber$" + il, Ft = "__reactProps$" + il, Il = "__reactContainer$" + il, xi = "__reactEvents$" + il, l1 = "__reactListeners$" + il, a1 = "__reactHandles$" + il, hs = "__reactResources$" + il, wa = "__reactMarker$" + il;
  function Si(t) {
    delete t[wt], delete t[Ft], delete t[xi], delete t[l1], delete t[a1];
  }
  function Pl(t) {
    var e = t[wt];
    if (e) return e;
    for (var l = t.parentNode; l; ) {
      if (e = l[Il] || l[wt]) {
        if (l = e.alternate, e.child !== null || l !== null && l.child !== null)
          for (t = qd(t); t !== null; ) {
            if (l = t[wt]) return l;
            t = qd(t);
          }
        return e;
      }
      t = l, l = t.parentNode;
    }
    return null;
  }
  function ta(t) {
    if (t = t[wt] || t[Il]) {
      var e = t.tag;
      if (e === 5 || e === 6 || e === 13 || e === 31 || e === 26 || e === 27 || e === 3)
        return t;
    }
    return null;
  }
  function Qa(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t.stateNode;
    throw Error(f(33));
  }
  function ea(t) {
    var e = t[hs];
    return e || (e = t[hs] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), e;
  }
  function Lt(t) {
    t[wa] = !0;
  }
  var vs = /* @__PURE__ */ new Set(), ys = {};
  function Rl(t, e) {
    la(t, e), la(t + "Capture", e);
  }
  function la(t, e) {
    for (ys[t] = e, t = 0; t < e.length; t++)
      vs.add(e[t]);
  }
  var n1 = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), bs = {}, gs = {};
  function u1(t) {
    return hi.call(gs, t) ? !0 : hi.call(bs, t) ? !1 : n1.test(t) ? gs[t] = !0 : (bs[t] = !0, !1);
  }
  function Xn(t, e, l) {
    if (u1(e))
      if (l === null) t.removeAttribute(e);
      else {
        switch (typeof l) {
          case "undefined":
          case "function":
          case "symbol":
            t.removeAttribute(e);
            return;
          case "boolean":
            var a = e.toLowerCase().slice(0, 5);
            if (a !== "data-" && a !== "aria-") {
              t.removeAttribute(e);
              return;
            }
        }
        t.setAttribute(e, "" + l);
      }
  }
  function Zn(t, e, l) {
    if (l === null) t.removeAttribute(e);
    else {
      switch (typeof l) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(e);
          return;
      }
      t.setAttribute(e, "" + l);
    }
  }
  function Ge(t, e, l, a) {
    if (a === null) t.removeAttribute(l);
    else {
      switch (typeof a) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(l);
          return;
      }
      t.setAttributeNS(e, l, "" + a);
    }
  }
  function he(t) {
    switch (typeof t) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return t;
      case "object":
        return t;
      default:
        return "";
    }
  }
  function ps(t) {
    var e = t.type;
    return (t = t.nodeName) && t.toLowerCase() === "input" && (e === "checkbox" || e === "radio");
  }
  function i1(t, e, l) {
    var a = Object.getOwnPropertyDescriptor(
      t.constructor.prototype,
      e
    );
    if (!t.hasOwnProperty(e) && typeof a < "u" && typeof a.get == "function" && typeof a.set == "function") {
      var n = a.get, u = a.set;
      return Object.defineProperty(t, e, {
        configurable: !0,
        get: function() {
          return n.call(this);
        },
        set: function(i) {
          l = "" + i, u.call(this, i);
        }
      }), Object.defineProperty(t, e, {
        enumerable: a.enumerable
      }), {
        getValue: function() {
          return l;
        },
        setValue: function(i) {
          l = "" + i;
        },
        stopTracking: function() {
          t._valueTracker = null, delete t[e];
        }
      };
    }
  }
  function Ei(t) {
    if (!t._valueTracker) {
      var e = ps(t) ? "checked" : "value";
      t._valueTracker = i1(
        t,
        e,
        "" + t[e]
      );
    }
  }
  function xs(t) {
    if (!t) return !1;
    var e = t._valueTracker;
    if (!e) return !0;
    var l = e.getValue(), a = "";
    return t && (a = ps(t) ? t.checked ? "true" : "false" : t.value), t = a, t !== l ? (e.setValue(t), !0) : !1;
  }
  function Vn(t) {
    if (t = t || (typeof document < "u" ? document : void 0), typeof t > "u") return null;
    try {
      return t.activeElement || t.body;
    } catch {
      return t.body;
    }
  }
  var c1 = /[\n"\\]/g;
  function ve(t) {
    return t.replace(
      c1,
      function(e) {
        return "\\" + e.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function zi(t, e, l, a, n, u, i, s) {
    t.name = "", i != null && typeof i != "function" && typeof i != "symbol" && typeof i != "boolean" ? t.type = i : t.removeAttribute("type"), e != null ? i === "number" ? (e === 0 && t.value === "" || t.value != e) && (t.value = "" + he(e)) : t.value !== "" + he(e) && (t.value = "" + he(e)) : i !== "submit" && i !== "reset" || t.removeAttribute("value"), e != null ? _i(t, i, he(e)) : l != null ? _i(t, i, he(l)) : a != null && t.removeAttribute("value"), n == null && u != null && (t.defaultChecked = !!u), n != null && (t.checked = n && typeof n != "function" && typeof n != "symbol"), s != null && typeof s != "function" && typeof s != "symbol" && typeof s != "boolean" ? t.name = "" + he(s) : t.removeAttribute("name");
  }
  function Ss(t, e, l, a, n, u, i, s) {
    if (u != null && typeof u != "function" && typeof u != "symbol" && typeof u != "boolean" && (t.type = u), e != null || l != null) {
      if (!(u !== "submit" && u !== "reset" || e != null)) {
        Ei(t);
        return;
      }
      l = l != null ? "" + he(l) : "", e = e != null ? "" + he(e) : l, s || e === t.value || (t.value = e), t.defaultValue = e;
    }
    a = a ?? n, a = typeof a != "function" && typeof a != "symbol" && !!a, t.checked = s ? t.checked : !!a, t.defaultChecked = !!a, i != null && typeof i != "function" && typeof i != "symbol" && typeof i != "boolean" && (t.name = i), Ei(t);
  }
  function _i(t, e, l) {
    e === "number" && Vn(t.ownerDocument) === t || t.defaultValue === "" + l || (t.defaultValue = "" + l);
  }
  function aa(t, e, l, a) {
    if (t = t.options, e) {
      e = {};
      for (var n = 0; n < l.length; n++)
        e["$" + l[n]] = !0;
      for (l = 0; l < t.length; l++)
        n = e.hasOwnProperty("$" + t[l].value), t[l].selected !== n && (t[l].selected = n), n && a && (t[l].defaultSelected = !0);
    } else {
      for (l = "" + he(l), e = null, n = 0; n < t.length; n++) {
        if (t[n].value === l) {
          t[n].selected = !0, a && (t[n].defaultSelected = !0);
          return;
        }
        e !== null || t[n].disabled || (e = t[n]);
      }
      e !== null && (e.selected = !0);
    }
  }
  function Es(t, e, l) {
    if (e != null && (e = "" + he(e), e !== t.value && (t.value = e), l == null)) {
      t.defaultValue !== e && (t.defaultValue = e);
      return;
    }
    t.defaultValue = l != null ? "" + he(l) : "";
  }
  function zs(t, e, l, a) {
    if (e == null) {
      if (a != null) {
        if (l != null) throw Error(f(92));
        if (_e(a)) {
          if (1 < a.length) throw Error(f(93));
          a = a[0];
        }
        l = a;
      }
      l == null && (l = ""), e = l;
    }
    l = he(e), t.defaultValue = l, a = t.textContent, a === l && a !== "" && a !== null && (t.value = a), Ei(t);
  }
  function na(t, e) {
    if (e) {
      var l = t.firstChild;
      if (l && l === t.lastChild && l.nodeType === 3) {
        l.nodeValue = e;
        return;
      }
    }
    t.textContent = e;
  }
  var f1 = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function _s(t, e, l) {
    var a = e.indexOf("--") === 0;
    l == null || typeof l == "boolean" || l === "" ? a ? t.setProperty(e, "") : e === "float" ? t.cssFloat = "" : t[e] = "" : a ? t.setProperty(e, l) : typeof l != "number" || l === 0 || f1.has(e) ? e === "float" ? t.cssFloat = l : t[e] = ("" + l).trim() : t[e] = l + "px";
  }
  function As(t, e, l) {
    if (e != null && typeof e != "object")
      throw Error(f(62));
    if (t = t.style, l != null) {
      for (var a in l)
        !l.hasOwnProperty(a) || e != null && e.hasOwnProperty(a) || (a.indexOf("--") === 0 ? t.setProperty(a, "") : a === "float" ? t.cssFloat = "" : t[a] = "");
      for (var n in e)
        a = e[n], e.hasOwnProperty(n) && l[n] !== a && _s(t, n, a);
    } else
      for (var u in e)
        e.hasOwnProperty(u) && _s(t, u, e[u]);
  }
  function Ai(t) {
    if (t.indexOf("-") === -1) return !1;
    switch (t) {
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
  var s1 = /* @__PURE__ */ new Map([
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
  ]), r1 = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Kn(t) {
    return r1.test("" + t) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : t;
  }
  function we() {
  }
  var ji = null;
  function Ti(t) {
    return t = t.target || t.srcElement || window, t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === 3 ? t.parentNode : t;
  }
  var ua = null, ia = null;
  function js(t) {
    var e = ta(t);
    if (e && (t = e.stateNode)) {
      var l = t[Ft] || null;
      t: switch (t = e.stateNode, e.type) {
        case "input":
          if (zi(
            t,
            l.value,
            l.defaultValue,
            l.defaultValue,
            l.checked,
            l.defaultChecked,
            l.type,
            l.name
          ), e = l.name, l.type === "radio" && e != null) {
            for (l = t; l.parentNode; ) l = l.parentNode;
            for (l = l.querySelectorAll(
              'input[name="' + ve(
                "" + e
              ) + '"][type="radio"]'
            ), e = 0; e < l.length; e++) {
              var a = l[e];
              if (a !== t && a.form === t.form) {
                var n = a[Ft] || null;
                if (!n) throw Error(f(90));
                zi(
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
            for (e = 0; e < l.length; e++)
              a = l[e], a.form === t.form && xs(a);
          }
          break t;
        case "textarea":
          Es(t, l.value, l.defaultValue);
          break t;
        case "select":
          e = l.value, e != null && aa(t, !!l.multiple, e, !1);
      }
    }
  }
  var Ni = !1;
  function Ts(t, e, l) {
    if (Ni) return t(e, l);
    Ni = !0;
    try {
      var a = t(e);
      return a;
    } finally {
      if (Ni = !1, (ua !== null || ia !== null) && (Uu(), ua && (e = ua, t = ia, ia = ua = null, js(e), t)))
        for (e = 0; e < t.length; e++) js(t[e]);
    }
  }
  function Xa(t, e) {
    var l = t.stateNode;
    if (l === null) return null;
    var a = l[Ft] || null;
    if (a === null) return null;
    l = a[e];
    t: switch (e) {
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
        (a = !a.disabled) || (t = t.type, a = !(t === "button" || t === "input" || t === "select" || t === "textarea")), t = !a;
        break t;
      default:
        t = !1;
    }
    if (t) return null;
    if (l && typeof l != "function")
      throw Error(
        f(231, e, typeof l)
      );
    return l;
  }
  var Qe = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Ci = !1;
  if (Qe)
    try {
      var Za = {};
      Object.defineProperty(Za, "passive", {
        get: function() {
          Ci = !0;
        }
      }), window.addEventListener("test", Za, Za), window.removeEventListener("test", Za, Za);
    } catch {
      Ci = !1;
    }
  var cl = null, Mi = null, Jn = null;
  function Ns() {
    if (Jn) return Jn;
    var t, e = Mi, l = e.length, a, n = "value" in cl ? cl.value : cl.textContent, u = n.length;
    for (t = 0; t < l && e[t] === n[t]; t++) ;
    var i = l - t;
    for (a = 1; a <= i && e[l - a] === n[u - a]; a++) ;
    return Jn = n.slice(t, 1 < a ? 1 - a : void 0);
  }
  function kn(t) {
    var e = t.keyCode;
    return "charCode" in t ? (t = t.charCode, t === 0 && e === 13 && (t = 13)) : t = e, t === 10 && (t = 13), 32 <= t || t === 13 ? t : 0;
  }
  function $n() {
    return !0;
  }
  function Cs() {
    return !1;
  }
  function It(t) {
    function e(l, a, n, u, i) {
      this._reactName = l, this._targetInst = n, this.type = a, this.nativeEvent = u, this.target = i, this.currentTarget = null;
      for (var s in t)
        t.hasOwnProperty(s) && (l = t[s], this[s] = l ? l(u) : u[s]);
      return this.isDefaultPrevented = (u.defaultPrevented != null ? u.defaultPrevented : u.returnValue === !1) ? $n : Cs, this.isPropagationStopped = Cs, this;
    }
    return H(e.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var l = this.nativeEvent;
        l && (l.preventDefault ? l.preventDefault() : typeof l.returnValue != "unknown" && (l.returnValue = !1), this.isDefaultPrevented = $n);
      },
      stopPropagation: function() {
        var l = this.nativeEvent;
        l && (l.stopPropagation ? l.stopPropagation() : typeof l.cancelBubble != "unknown" && (l.cancelBubble = !0), this.isPropagationStopped = $n);
      },
      persist: function() {
      },
      isPersistent: $n
    }), e;
  }
  var Hl = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(t) {
      return t.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, Wn = It(Hl), Va = H({}, Hl, { view: 0, detail: 0 }), o1 = It(Va), Oi, Di, Ka, Fn = H({}, Va, {
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
    getModifierState: Ri,
    button: 0,
    buttons: 0,
    relatedTarget: function(t) {
      return t.relatedTarget === void 0 ? t.fromElement === t.srcElement ? t.toElement : t.fromElement : t.relatedTarget;
    },
    movementX: function(t) {
      return "movementX" in t ? t.movementX : (t !== Ka && (Ka && t.type === "mousemove" ? (Oi = t.screenX - Ka.screenX, Di = t.screenY - Ka.screenY) : Di = Oi = 0, Ka = t), Oi);
    },
    movementY: function(t) {
      return "movementY" in t ? t.movementY : Di;
    }
  }), Ms = It(Fn), d1 = H({}, Fn, { dataTransfer: 0 }), m1 = It(d1), h1 = H({}, Va, { relatedTarget: 0 }), Ui = It(h1), v1 = H({}, Hl, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), y1 = It(v1), b1 = H({}, Hl, {
    clipboardData: function(t) {
      return "clipboardData" in t ? t.clipboardData : window.clipboardData;
    }
  }), g1 = It(b1), p1 = H({}, Hl, { data: 0 }), Os = It(p1), x1 = {
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
  }, S1 = {
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
  }, E1 = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function z1(t) {
    var e = this.nativeEvent;
    return e.getModifierState ? e.getModifierState(t) : (t = E1[t]) ? !!e[t] : !1;
  }
  function Ri() {
    return z1;
  }
  var _1 = H({}, Va, {
    key: function(t) {
      if (t.key) {
        var e = x1[t.key] || t.key;
        if (e !== "Unidentified") return e;
      }
      return t.type === "keypress" ? (t = kn(t), t === 13 ? "Enter" : String.fromCharCode(t)) : t.type === "keydown" || t.type === "keyup" ? S1[t.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Ri,
    charCode: function(t) {
      return t.type === "keypress" ? kn(t) : 0;
    },
    keyCode: function(t) {
      return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
    },
    which: function(t) {
      return t.type === "keypress" ? kn(t) : t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
    }
  }), A1 = It(_1), j1 = H({}, Fn, {
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
  }), Ds = It(j1), T1 = H({}, Va, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Ri
  }), N1 = It(T1), C1 = H({}, Hl, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), M1 = It(C1), O1 = H({}, Fn, {
    deltaX: function(t) {
      return "deltaX" in t ? t.deltaX : "wheelDeltaX" in t ? -t.wheelDeltaX : 0;
    },
    deltaY: function(t) {
      return "deltaY" in t ? t.deltaY : "wheelDeltaY" in t ? -t.wheelDeltaY : "wheelDelta" in t ? -t.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), D1 = It(O1), U1 = H({}, Hl, {
    newState: 0,
    oldState: 0
  }), R1 = It(U1), H1 = [9, 13, 27, 32], Hi = Qe && "CompositionEvent" in window, Ja = null;
  Qe && "documentMode" in document && (Ja = document.documentMode);
  var q1 = Qe && "TextEvent" in window && !Ja, Us = Qe && (!Hi || Ja && 8 < Ja && 11 >= Ja), Rs = " ", Hs = !1;
  function qs(t, e) {
    switch (t) {
      case "keyup":
        return H1.indexOf(e.keyCode) !== -1;
      case "keydown":
        return e.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function Bs(t) {
    return t = t.detail, typeof t == "object" && "data" in t ? t.data : null;
  }
  var ca = !1;
  function B1(t, e) {
    switch (t) {
      case "compositionend":
        return Bs(e);
      case "keypress":
        return e.which !== 32 ? null : (Hs = !0, Rs);
      case "textInput":
        return t = e.data, t === Rs && Hs ? null : t;
      default:
        return null;
    }
  }
  function Y1(t, e) {
    if (ca)
      return t === "compositionend" || !Hi && qs(t, e) ? (t = Ns(), Jn = Mi = cl = null, ca = !1, t) : null;
    switch (t) {
      case "paste":
        return null;
      case "keypress":
        if (!(e.ctrlKey || e.altKey || e.metaKey) || e.ctrlKey && e.altKey) {
          if (e.char && 1 < e.char.length)
            return e.char;
          if (e.which) return String.fromCharCode(e.which);
        }
        return null;
      case "compositionend":
        return Us && e.locale !== "ko" ? null : e.data;
      default:
        return null;
    }
  }
  var L1 = {
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
  function Ys(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return e === "input" ? !!L1[t.type] : e === "textarea";
  }
  function Ls(t, e, l, a) {
    ua ? ia ? ia.push(a) : ia = [a] : ua = a, e = Gu(e, "onChange"), 0 < e.length && (l = new Wn(
      "onChange",
      "change",
      null,
      l,
      a
    ), t.push({ event: l, listeners: e }));
  }
  var ka = null, $a = null;
  function G1(t) {
    Ed(t, 0);
  }
  function In(t) {
    var e = Qa(t);
    if (xs(e)) return t;
  }
  function Gs(t, e) {
    if (t === "change") return e;
  }
  var ws = !1;
  if (Qe) {
    var qi;
    if (Qe) {
      var Bi = "oninput" in document;
      if (!Bi) {
        var Qs = document.createElement("div");
        Qs.setAttribute("oninput", "return;"), Bi = typeof Qs.oninput == "function";
      }
      qi = Bi;
    } else qi = !1;
    ws = qi && (!document.documentMode || 9 < document.documentMode);
  }
  function Xs() {
    ka && (ka.detachEvent("onpropertychange", Zs), $a = ka = null);
  }
  function Zs(t) {
    if (t.propertyName === "value" && In($a)) {
      var e = [];
      Ls(
        e,
        $a,
        t,
        Ti(t)
      ), Ts(G1, e);
    }
  }
  function w1(t, e, l) {
    t === "focusin" ? (Xs(), ka = e, $a = l, ka.attachEvent("onpropertychange", Zs)) : t === "focusout" && Xs();
  }
  function Q1(t) {
    if (t === "selectionchange" || t === "keyup" || t === "keydown")
      return In($a);
  }
  function X1(t, e) {
    if (t === "click") return In(e);
  }
  function Z1(t, e) {
    if (t === "input" || t === "change")
      return In(e);
  }
  function V1(t, e) {
    return t === e && (t !== 0 || 1 / t === 1 / e) || t !== t && e !== e;
  }
  var ce = typeof Object.is == "function" ? Object.is : V1;
  function Wa(t, e) {
    if (ce(t, e)) return !0;
    if (typeof t != "object" || t === null || typeof e != "object" || e === null)
      return !1;
    var l = Object.keys(t), a = Object.keys(e);
    if (l.length !== a.length) return !1;
    for (a = 0; a < l.length; a++) {
      var n = l[a];
      if (!hi.call(e, n) || !ce(t[n], e[n]))
        return !1;
    }
    return !0;
  }
  function Vs(t) {
    for (; t && t.firstChild; ) t = t.firstChild;
    return t;
  }
  function Ks(t, e) {
    var l = Vs(t);
    t = 0;
    for (var a; l; ) {
      if (l.nodeType === 3) {
        if (a = t + l.textContent.length, t <= e && a >= e)
          return { node: l, offset: e - t };
        t = a;
      }
      t: {
        for (; l; ) {
          if (l.nextSibling) {
            l = l.nextSibling;
            break t;
          }
          l = l.parentNode;
        }
        l = void 0;
      }
      l = Vs(l);
    }
  }
  function Js(t, e) {
    return t && e ? t === e ? !0 : t && t.nodeType === 3 ? !1 : e && e.nodeType === 3 ? Js(t, e.parentNode) : "contains" in t ? t.contains(e) : t.compareDocumentPosition ? !!(t.compareDocumentPosition(e) & 16) : !1 : !1;
  }
  function ks(t) {
    t = t != null && t.ownerDocument != null && t.ownerDocument.defaultView != null ? t.ownerDocument.defaultView : window;
    for (var e = Vn(t.document); e instanceof t.HTMLIFrameElement; ) {
      try {
        var l = typeof e.contentWindow.location.href == "string";
      } catch {
        l = !1;
      }
      if (l) t = e.contentWindow;
      else break;
      e = Vn(t.document);
    }
    return e;
  }
  function Yi(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return e && (e === "input" && (t.type === "text" || t.type === "search" || t.type === "tel" || t.type === "url" || t.type === "password") || e === "textarea" || t.contentEditable === "true");
  }
  var K1 = Qe && "documentMode" in document && 11 >= document.documentMode, fa = null, Li = null, Fa = null, Gi = !1;
  function $s(t, e, l) {
    var a = l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
    Gi || fa == null || fa !== Vn(a) || (a = fa, "selectionStart" in a && Yi(a) ? a = { start: a.selectionStart, end: a.selectionEnd } : (a = (a.ownerDocument && a.ownerDocument.defaultView || window).getSelection(), a = {
      anchorNode: a.anchorNode,
      anchorOffset: a.anchorOffset,
      focusNode: a.focusNode,
      focusOffset: a.focusOffset
    }), Fa && Wa(Fa, a) || (Fa = a, a = Gu(Li, "onSelect"), 0 < a.length && (e = new Wn(
      "onSelect",
      "select",
      null,
      e,
      l
    ), t.push({ event: e, listeners: a }), e.target = fa)));
  }
  function ql(t, e) {
    var l = {};
    return l[t.toLowerCase()] = e.toLowerCase(), l["Webkit" + t] = "webkit" + e, l["Moz" + t] = "moz" + e, l;
  }
  var sa = {
    animationend: ql("Animation", "AnimationEnd"),
    animationiteration: ql("Animation", "AnimationIteration"),
    animationstart: ql("Animation", "AnimationStart"),
    transitionrun: ql("Transition", "TransitionRun"),
    transitionstart: ql("Transition", "TransitionStart"),
    transitioncancel: ql("Transition", "TransitionCancel"),
    transitionend: ql("Transition", "TransitionEnd")
  }, wi = {}, Ws = {};
  Qe && (Ws = document.createElement("div").style, "AnimationEvent" in window || (delete sa.animationend.animation, delete sa.animationiteration.animation, delete sa.animationstart.animation), "TransitionEvent" in window || delete sa.transitionend.transition);
  function Bl(t) {
    if (wi[t]) return wi[t];
    if (!sa[t]) return t;
    var e = sa[t], l;
    for (l in e)
      if (e.hasOwnProperty(l) && l in Ws)
        return wi[t] = e[l];
    return t;
  }
  var Fs = Bl("animationend"), Is = Bl("animationiteration"), Ps = Bl("animationstart"), J1 = Bl("transitionrun"), k1 = Bl("transitionstart"), $1 = Bl("transitioncancel"), tr = Bl("transitionend"), er = /* @__PURE__ */ new Map(), Qi = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  Qi.push("scrollEnd");
  function Ae(t, e) {
    er.set(t, e), Rl(e, [t]);
  }
  var Pn = typeof reportError == "function" ? reportError : function(t) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var e = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof t == "object" && t !== null && typeof t.message == "string" ? String(t.message) : String(t),
        error: t
      });
      if (!window.dispatchEvent(e)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", t);
      return;
    }
    console.error(t);
  }, ye = [], ra = 0, Xi = 0;
  function tu() {
    for (var t = ra, e = Xi = ra = 0; e < t; ) {
      var l = ye[e];
      ye[e++] = null;
      var a = ye[e];
      ye[e++] = null;
      var n = ye[e];
      ye[e++] = null;
      var u = ye[e];
      if (ye[e++] = null, a !== null && n !== null) {
        var i = a.pending;
        i === null ? n.next = n : (n.next = i.next, i.next = n), a.pending = n;
      }
      u !== 0 && lr(l, n, u);
    }
  }
  function eu(t, e, l, a) {
    ye[ra++] = t, ye[ra++] = e, ye[ra++] = l, ye[ra++] = a, Xi |= a, t.lanes |= a, t = t.alternate, t !== null && (t.lanes |= a);
  }
  function Zi(t, e, l, a) {
    return eu(t, e, l, a), lu(t);
  }
  function Yl(t, e) {
    return eu(t, null, null, e), lu(t);
  }
  function lr(t, e, l) {
    t.lanes |= l;
    var a = t.alternate;
    a !== null && (a.lanes |= l);
    for (var n = !1, u = t.return; u !== null; )
      u.childLanes |= l, a = u.alternate, a !== null && (a.childLanes |= l), u.tag === 22 && (t = u.stateNode, t === null || t._visibility & 1 || (n = !0)), t = u, u = u.return;
    return t.tag === 3 ? (u = t.stateNode, n && e !== null && (n = 31 - ie(l), t = u.hiddenUpdates, a = t[n], a === null ? t[n] = [e] : a.push(e), e.lane = l | 536870912), u) : null;
  }
  function lu(t) {
    if (50 < xn)
      throw xn = 0, Pc = null, Error(f(185));
    for (var e = t.return; e !== null; )
      t = e, e = t.return;
    return t.tag === 3 ? t.stateNode : null;
  }
  var oa = {};
  function W1(t, e, l, a) {
    this.tag = t, this.key = l, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = e, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = a, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function fe(t, e, l, a) {
    return new W1(t, e, l, a);
  }
  function Vi(t) {
    return t = t.prototype, !(!t || !t.isReactComponent);
  }
  function Xe(t, e) {
    var l = t.alternate;
    return l === null ? (l = fe(
      t.tag,
      e,
      t.key,
      t.mode
    ), l.elementType = t.elementType, l.type = t.type, l.stateNode = t.stateNode, l.alternate = t, t.alternate = l) : (l.pendingProps = e, l.type = t.type, l.flags = 0, l.subtreeFlags = 0, l.deletions = null), l.flags = t.flags & 65011712, l.childLanes = t.childLanes, l.lanes = t.lanes, l.child = t.child, l.memoizedProps = t.memoizedProps, l.memoizedState = t.memoizedState, l.updateQueue = t.updateQueue, e = t.dependencies, l.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }, l.sibling = t.sibling, l.index = t.index, l.ref = t.ref, l.refCleanup = t.refCleanup, l;
  }
  function ar(t, e) {
    t.flags &= 65011714;
    var l = t.alternate;
    return l === null ? (t.childLanes = 0, t.lanes = e, t.child = null, t.subtreeFlags = 0, t.memoizedProps = null, t.memoizedState = null, t.updateQueue = null, t.dependencies = null, t.stateNode = null) : (t.childLanes = l.childLanes, t.lanes = l.lanes, t.child = l.child, t.subtreeFlags = 0, t.deletions = null, t.memoizedProps = l.memoizedProps, t.memoizedState = l.memoizedState, t.updateQueue = l.updateQueue, t.type = l.type, e = l.dependencies, t.dependencies = e === null ? null : {
      lanes: e.lanes,
      firstContext: e.firstContext
    }), t;
  }
  function au(t, e, l, a, n, u) {
    var i = 0;
    if (a = t, typeof t == "function") Vi(t) && (i = 1);
    else if (typeof t == "string")
      i = eh(
        t,
        l,
        Y.current
      ) ? 26 : t === "html" || t === "head" || t === "body" ? 27 : 5;
    else
      t: switch (t) {
        case Me:
          return t = fe(31, l, e, n), t.elementType = Me, t.lanes = u, t;
        case F:
          return Ll(l.children, n, u, e);
        case G:
          i = 8, n |= 24;
          break;
        case I:
          return t = fe(12, l, e, n | 2), t.elementType = I, t.lanes = u, t;
        case vt:
          return t = fe(13, l, e, n), t.elementType = vt, t.lanes = u, t;
        case At:
          return t = fe(19, l, e, n), t.elementType = At, t.lanes = u, t;
        default:
          if (typeof t == "object" && t !== null)
            switch (t.$$typeof) {
              case q:
                i = 10;
                break t;
              case Ct:
                i = 9;
                break t;
              case K:
                i = 11;
                break t;
              case P:
                i = 14;
                break t;
              case Mt:
                i = 16, a = null;
                break t;
            }
          i = 29, l = Error(
            f(130, t === null ? "null" : typeof t, "")
          ), a = null;
      }
    return e = fe(i, l, e, n), e.elementType = t, e.type = a, e.lanes = u, e;
  }
  function Ll(t, e, l, a) {
    return t = fe(7, t, a, e), t.lanes = l, t;
  }
  function Ki(t, e, l) {
    return t = fe(6, t, null, e), t.lanes = l, t;
  }
  function nr(t) {
    var e = fe(18, null, null, 0);
    return e.stateNode = t, e;
  }
  function Ji(t, e, l) {
    return e = fe(
      4,
      t.children !== null ? t.children : [],
      t.key,
      e
    ), e.lanes = l, e.stateNode = {
      containerInfo: t.containerInfo,
      pendingChildren: null,
      implementation: t.implementation
    }, e;
  }
  var ur = /* @__PURE__ */ new WeakMap();
  function be(t, e) {
    if (typeof t == "object" && t !== null) {
      var l = ur.get(t);
      return l !== void 0 ? l : (e = {
        value: t,
        source: e,
        stack: ns(e)
      }, ur.set(t, e), e);
    }
    return {
      value: t,
      source: e,
      stack: ns(e)
    };
  }
  var da = [], ma = 0, nu = null, Ia = 0, ge = [], pe = 0, fl = null, De = 1, Ue = "";
  function Ze(t, e) {
    da[ma++] = Ia, da[ma++] = nu, nu = t, Ia = e;
  }
  function ir(t, e, l) {
    ge[pe++] = De, ge[pe++] = Ue, ge[pe++] = fl, fl = t;
    var a = De;
    t = Ue;
    var n = 32 - ie(a) - 1;
    a &= ~(1 << n), l += 1;
    var u = 32 - ie(e) + n;
    if (30 < u) {
      var i = n - n % 5;
      u = (a & (1 << i) - 1).toString(32), a >>= i, n -= i, De = 1 << 32 - ie(e) + n | l << n | a, Ue = u + t;
    } else
      De = 1 << u | l << n | a, Ue = t;
  }
  function ki(t) {
    t.return !== null && (Ze(t, 1), ir(t, 1, 0));
  }
  function $i(t) {
    for (; t === nu; )
      nu = da[--ma], da[ma] = null, Ia = da[--ma], da[ma] = null;
    for (; t === fl; )
      fl = ge[--pe], ge[pe] = null, Ue = ge[--pe], ge[pe] = null, De = ge[--pe], ge[pe] = null;
  }
  function cr(t, e) {
    ge[pe++] = De, ge[pe++] = Ue, ge[pe++] = fl, De = e.id, Ue = e.overflow, fl = t;
  }
  var Qt = null, zt = null, ct = !1, sl = null, xe = !1, Wi = Error(f(519));
  function rl(t) {
    var e = Error(
      f(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML",
        ""
      )
    );
    throw Pa(be(e, t)), Wi;
  }
  function fr(t) {
    var e = t.stateNode, l = t.type, a = t.memoizedProps;
    switch (e[wt] = t, e[Ft] = a, l) {
      case "dialog":
        nt("cancel", e), nt("close", e);
        break;
      case "iframe":
      case "object":
      case "embed":
        nt("load", e);
        break;
      case "video":
      case "audio":
        for (l = 0; l < En.length; l++)
          nt(En[l], e);
        break;
      case "source":
        nt("error", e);
        break;
      case "img":
      case "image":
      case "link":
        nt("error", e), nt("load", e);
        break;
      case "details":
        nt("toggle", e);
        break;
      case "input":
        nt("invalid", e), Ss(
          e,
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
        nt("invalid", e);
        break;
      case "textarea":
        nt("invalid", e), zs(e, a.value, a.defaultValue, a.children);
    }
    l = a.children, typeof l != "string" && typeof l != "number" && typeof l != "bigint" || e.textContent === "" + l || a.suppressHydrationWarning === !0 || jd(e.textContent, l) ? (a.popover != null && (nt("beforetoggle", e), nt("toggle", e)), a.onScroll != null && nt("scroll", e), a.onScrollEnd != null && nt("scrollend", e), a.onClick != null && (e.onclick = we), e = !0) : e = !1, e || rl(t, !0);
  }
  function sr(t) {
    for (Qt = t.return; Qt; )
      switch (Qt.tag) {
        case 5:
        case 31:
        case 13:
          xe = !1;
          return;
        case 27:
        case 3:
          xe = !0;
          return;
        default:
          Qt = Qt.return;
      }
  }
  function ha(t) {
    if (t !== Qt) return !1;
    if (!ct) return sr(t), ct = !0, !1;
    var e = t.tag, l;
    if ((l = e !== 3 && e !== 27) && ((l = e === 5) && (l = t.type, l = !(l !== "form" && l !== "button") || vf(t.type, t.memoizedProps)), l = !l), l && zt && rl(t), sr(t), e === 13) {
      if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(f(317));
      zt = Hd(t);
    } else if (e === 31) {
      if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(f(317));
      zt = Hd(t);
    } else
      e === 27 ? (e = zt, _l(t.type) ? (t = xf, xf = null, zt = t) : zt = e) : zt = Qt ? Ee(t.stateNode.nextSibling) : null;
    return !0;
  }
  function Gl() {
    zt = Qt = null, ct = !1;
  }
  function Fi() {
    var t = sl;
    return t !== null && (le === null ? le = t : le.push.apply(
      le,
      t
    ), sl = null), t;
  }
  function Pa(t) {
    sl === null ? sl = [t] : sl.push(t);
  }
  var Ii = v(null), wl = null, Ve = null;
  function ol(t, e, l) {
    R(Ii, e._currentValue), e._currentValue = l;
  }
  function Ke(t) {
    t._currentValue = Ii.current, M(Ii);
  }
  function Pi(t, e, l) {
    for (; t !== null; ) {
      var a = t.alternate;
      if ((t.childLanes & e) !== e ? (t.childLanes |= e, a !== null && (a.childLanes |= e)) : a !== null && (a.childLanes & e) !== e && (a.childLanes |= e), t === l) break;
      t = t.return;
    }
  }
  function tc(t, e, l, a) {
    var n = t.child;
    for (n !== null && (n.return = t); n !== null; ) {
      var u = n.dependencies;
      if (u !== null) {
        var i = n.child;
        u = u.firstContext;
        t: for (; u !== null; ) {
          var s = u;
          u = n;
          for (var m = 0; m < e.length; m++)
            if (s.context === e[m]) {
              u.lanes |= l, s = u.alternate, s !== null && (s.lanes |= l), Pi(
                u.return,
                l,
                t
              ), a || (i = null);
              break t;
            }
          u = s.next;
        }
      } else if (n.tag === 18) {
        if (i = n.return, i === null) throw Error(f(341));
        i.lanes |= l, u = i.alternate, u !== null && (u.lanes |= l), Pi(i, l, t), i = null;
      } else i = n.child;
      if (i !== null) i.return = n;
      else
        for (i = n; i !== null; ) {
          if (i === t) {
            i = null;
            break;
          }
          if (n = i.sibling, n !== null) {
            n.return = i.return, i = n;
            break;
          }
          i = i.return;
        }
      n = i;
    }
  }
  function va(t, e, l, a) {
    t = null;
    for (var n = e, u = !1; n !== null; ) {
      if (!u) {
        if ((n.flags & 524288) !== 0) u = !0;
        else if ((n.flags & 262144) !== 0) break;
      }
      if (n.tag === 10) {
        var i = n.alternate;
        if (i === null) throw Error(f(387));
        if (i = i.memoizedProps, i !== null) {
          var s = n.type;
          ce(n.pendingProps.value, i.value) || (t !== null ? t.push(s) : t = [s]);
        }
      } else if (n === dt.current) {
        if (i = n.alternate, i === null) throw Error(f(387));
        i.memoizedState.memoizedState !== n.memoizedState.memoizedState && (t !== null ? t.push(Tn) : t = [Tn]);
      }
      n = n.return;
    }
    t !== null && tc(
      e,
      t,
      l,
      a
    ), e.flags |= 262144;
  }
  function uu(t) {
    for (t = t.firstContext; t !== null; ) {
      if (!ce(
        t.context._currentValue,
        t.memoizedValue
      ))
        return !0;
      t = t.next;
    }
    return !1;
  }
  function Ql(t) {
    wl = t, Ve = null, t = t.dependencies, t !== null && (t.firstContext = null);
  }
  function Xt(t) {
    return rr(wl, t);
  }
  function iu(t, e) {
    return wl === null && Ql(t), rr(t, e);
  }
  function rr(t, e) {
    var l = e._currentValue;
    if (e = { context: e, memoizedValue: l, next: null }, Ve === null) {
      if (t === null) throw Error(f(308));
      Ve = e, t.dependencies = { lanes: 0, firstContext: e }, t.flags |= 524288;
    } else Ve = Ve.next = e;
    return l;
  }
  var F1 = typeof AbortController < "u" ? AbortController : function() {
    var t = [], e = this.signal = {
      aborted: !1,
      addEventListener: function(l, a) {
        t.push(a);
      }
    };
    this.abort = function() {
      e.aborted = !0, t.forEach(function(l) {
        return l();
      });
    };
  }, I1 = c.unstable_scheduleCallback, P1 = c.unstable_NormalPriority, Rt = {
    $$typeof: q,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function ec() {
    return {
      controller: new F1(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function tn(t) {
    t.refCount--, t.refCount === 0 && I1(P1, function() {
      t.controller.abort();
    });
  }
  var en = null, lc = 0, ya = 0, ba = null;
  function tm(t, e) {
    if (en === null) {
      var l = en = [];
      lc = 0, ya = uf(), ba = {
        status: "pending",
        value: void 0,
        then: function(a) {
          l.push(a);
        }
      };
    }
    return lc++, e.then(or, or), e;
  }
  function or() {
    if (--lc === 0 && en !== null) {
      ba !== null && (ba.status = "fulfilled");
      var t = en;
      en = null, ya = 0, ba = null;
      for (var e = 0; e < t.length; e++) (0, t[e])();
    }
  }
  function em(t, e) {
    var l = [], a = {
      status: "pending",
      value: null,
      reason: null,
      then: function(n) {
        l.push(n);
      }
    };
    return t.then(
      function() {
        a.status = "fulfilled", a.value = e;
        for (var n = 0; n < l.length; n++) (0, l[n])(e);
      },
      function(n) {
        for (a.status = "rejected", a.reason = n, n = 0; n < l.length; n++)
          (0, l[n])(void 0);
      }
    ), a;
  }
  var dr = A.S;
  A.S = function(t, e) {
    Wo = ne(), typeof e == "object" && e !== null && typeof e.then == "function" && tm(t, e), dr !== null && dr(t, e);
  };
  var Xl = v(null);
  function ac() {
    var t = Xl.current;
    return t !== null ? t : St.pooledCache;
  }
  function cu(t, e) {
    e === null ? R(Xl, Xl.current) : R(Xl, e.pool);
  }
  function mr() {
    var t = ac();
    return t === null ? null : { parent: Rt._currentValue, pool: t };
  }
  var ga = Error(f(460)), nc = Error(f(474)), fu = Error(f(542)), su = { then: function() {
  } };
  function hr(t) {
    return t = t.status, t === "fulfilled" || t === "rejected";
  }
  function vr(t, e, l) {
    switch (l = t[l], l === void 0 ? t.push(e) : l !== e && (e.then(we, we), e = l), e.status) {
      case "fulfilled":
        return e.value;
      case "rejected":
        throw t = e.reason, br(t), t;
      default:
        if (typeof e.status == "string") e.then(we, we);
        else {
          if (t = St, t !== null && 100 < t.shellSuspendCounter)
            throw Error(f(482));
          t = e, t.status = "pending", t.then(
            function(a) {
              if (e.status === "pending") {
                var n = e;
                n.status = "fulfilled", n.value = a;
              }
            },
            function(a) {
              if (e.status === "pending") {
                var n = e;
                n.status = "rejected", n.reason = a;
              }
            }
          );
        }
        switch (e.status) {
          case "fulfilled":
            return e.value;
          case "rejected":
            throw t = e.reason, br(t), t;
        }
        throw Vl = e, ga;
    }
  }
  function Zl(t) {
    try {
      var e = t._init;
      return e(t._payload);
    } catch (l) {
      throw l !== null && typeof l == "object" && typeof l.then == "function" ? (Vl = l, ga) : l;
    }
  }
  var Vl = null;
  function yr() {
    if (Vl === null) throw Error(f(459));
    var t = Vl;
    return Vl = null, t;
  }
  function br(t) {
    if (t === ga || t === fu)
      throw Error(f(483));
  }
  var pa = null, ln = 0;
  function ru(t) {
    var e = ln;
    return ln += 1, pa === null && (pa = []), vr(pa, t, e);
  }
  function an(t, e) {
    e = e.props.ref, t.ref = e !== void 0 ? e : null;
  }
  function ou(t, e) {
    throw e.$$typeof === J ? Error(f(525)) : (t = Object.prototype.toString.call(e), Error(
      f(
        31,
        t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t
      )
    ));
  }
  function gr(t) {
    function e(y, h) {
      if (t) {
        var g = y.deletions;
        g === null ? (y.deletions = [h], y.flags |= 16) : g.push(h);
      }
    }
    function l(y, h) {
      if (!t) return null;
      for (; h !== null; )
        e(y, h), h = h.sibling;
      return null;
    }
    function a(y) {
      for (var h = /* @__PURE__ */ new Map(); y !== null; )
        y.key !== null ? h.set(y.key, y) : h.set(y.index, y), y = y.sibling;
      return h;
    }
    function n(y, h) {
      return y = Xe(y, h), y.index = 0, y.sibling = null, y;
    }
    function u(y, h, g) {
      return y.index = g, t ? (g = y.alternate, g !== null ? (g = g.index, g < h ? (y.flags |= 67108866, h) : g) : (y.flags |= 67108866, h)) : (y.flags |= 1048576, h);
    }
    function i(y) {
      return t && y.alternate === null && (y.flags |= 67108866), y;
    }
    function s(y, h, g, j) {
      return h === null || h.tag !== 6 ? (h = Ki(g, y.mode, j), h.return = y, h) : (h = n(h, g), h.return = y, h);
    }
    function m(y, h, g, j) {
      var Q = g.type;
      return Q === F ? _(
        y,
        h,
        g.props.children,
        j,
        g.key
      ) : h !== null && (h.elementType === Q || typeof Q == "object" && Q !== null && Q.$$typeof === Mt && Zl(Q) === h.type) ? (h = n(h, g.props), an(h, g), h.return = y, h) : (h = au(
        g.type,
        g.key,
        g.props,
        null,
        y.mode,
        j
      ), an(h, g), h.return = y, h);
    }
    function p(y, h, g, j) {
      return h === null || h.tag !== 4 || h.stateNode.containerInfo !== g.containerInfo || h.stateNode.implementation !== g.implementation ? (h = Ji(g, y.mode, j), h.return = y, h) : (h = n(h, g.children || []), h.return = y, h);
    }
    function _(y, h, g, j, Q) {
      return h === null || h.tag !== 7 ? (h = Ll(
        g,
        y.mode,
        j,
        Q
      ), h.return = y, h) : (h = n(h, g), h.return = y, h);
    }
    function T(y, h, g) {
      if (typeof h == "string" && h !== "" || typeof h == "number" || typeof h == "bigint")
        return h = Ki(
          "" + h,
          y.mode,
          g
        ), h.return = y, h;
      if (typeof h == "object" && h !== null) {
        switch (h.$$typeof) {
          case w:
            return g = au(
              h.type,
              h.key,
              h.props,
              null,
              y.mode,
              g
            ), an(g, h), g.return = y, g;
          case et:
            return h = Ji(
              h,
              y.mode,
              g
            ), h.return = y, h;
          case Mt:
            return h = Zl(h), T(y, h, g);
        }
        if (_e(h) || Wt(h))
          return h = Ll(
            h,
            y.mode,
            g,
            null
          ), h.return = y, h;
        if (typeof h.then == "function")
          return T(y, ru(h), g);
        if (h.$$typeof === q)
          return T(
            y,
            iu(y, h),
            g
          );
        ou(y, h);
      }
      return null;
    }
    function S(y, h, g, j) {
      var Q = h !== null ? h.key : null;
      if (typeof g == "string" && g !== "" || typeof g == "number" || typeof g == "bigint")
        return Q !== null ? null : s(y, h, "" + g, j);
      if (typeof g == "object" && g !== null) {
        switch (g.$$typeof) {
          case w:
            return g.key === Q ? m(y, h, g, j) : null;
          case et:
            return g.key === Q ? p(y, h, g, j) : null;
          case Mt:
            return g = Zl(g), S(y, h, g, j);
        }
        if (_e(g) || Wt(g))
          return Q !== null ? null : _(y, h, g, j, null);
        if (typeof g.then == "function")
          return S(
            y,
            h,
            ru(g),
            j
          );
        if (g.$$typeof === q)
          return S(
            y,
            h,
            iu(y, g),
            j
          );
        ou(y, g);
      }
      return null;
    }
    function E(y, h, g, j, Q) {
      if (typeof j == "string" && j !== "" || typeof j == "number" || typeof j == "bigint")
        return y = y.get(g) || null, s(h, y, "" + j, Q);
      if (typeof j == "object" && j !== null) {
        switch (j.$$typeof) {
          case w:
            return y = y.get(
              j.key === null ? g : j.key
            ) || null, m(h, y, j, Q);
          case et:
            return y = y.get(
              j.key === null ? g : j.key
            ) || null, p(h, y, j, Q);
          case Mt:
            return j = Zl(j), E(
              y,
              h,
              g,
              j,
              Q
            );
        }
        if (_e(j) || Wt(j))
          return y = y.get(g) || null, _(h, y, j, Q, null);
        if (typeof j.then == "function")
          return E(
            y,
            h,
            g,
            ru(j),
            Q
          );
        if (j.$$typeof === q)
          return E(
            y,
            h,
            g,
            iu(h, j),
            Q
          );
        ou(h, j);
      }
      return null;
    }
    function B(y, h, g, j) {
      for (var Q = null, st = null, L = h, tt = h = 0, it = null; L !== null && tt < g.length; tt++) {
        L.index > tt ? (it = L, L = null) : it = L.sibling;
        var rt = S(
          y,
          L,
          g[tt],
          j
        );
        if (rt === null) {
          L === null && (L = it);
          break;
        }
        t && L && rt.alternate === null && e(y, L), h = u(rt, h, tt), st === null ? Q = rt : st.sibling = rt, st = rt, L = it;
      }
      if (tt === g.length)
        return l(y, L), ct && Ze(y, tt), Q;
      if (L === null) {
        for (; tt < g.length; tt++)
          L = T(y, g[tt], j), L !== null && (h = u(
            L,
            h,
            tt
          ), st === null ? Q = L : st.sibling = L, st = L);
        return ct && Ze(y, tt), Q;
      }
      for (L = a(L); tt < g.length; tt++)
        it = E(
          L,
          y,
          tt,
          g[tt],
          j
        ), it !== null && (t && it.alternate !== null && L.delete(
          it.key === null ? tt : it.key
        ), h = u(
          it,
          h,
          tt
        ), st === null ? Q = it : st.sibling = it, st = it);
      return t && L.forEach(function(Cl) {
        return e(y, Cl);
      }), ct && Ze(y, tt), Q;
    }
    function X(y, h, g, j) {
      if (g == null) throw Error(f(151));
      for (var Q = null, st = null, L = h, tt = h = 0, it = null, rt = g.next(); L !== null && !rt.done; tt++, rt = g.next()) {
        L.index > tt ? (it = L, L = null) : it = L.sibling;
        var Cl = S(y, L, rt.value, j);
        if (Cl === null) {
          L === null && (L = it);
          break;
        }
        t && L && Cl.alternate === null && e(y, L), h = u(Cl, h, tt), st === null ? Q = Cl : st.sibling = Cl, st = Cl, L = it;
      }
      if (rt.done)
        return l(y, L), ct && Ze(y, tt), Q;
      if (L === null) {
        for (; !rt.done; tt++, rt = g.next())
          rt = T(y, rt.value, j), rt !== null && (h = u(rt, h, tt), st === null ? Q = rt : st.sibling = rt, st = rt);
        return ct && Ze(y, tt), Q;
      }
      for (L = a(L); !rt.done; tt++, rt = g.next())
        rt = E(L, y, tt, rt.value, j), rt !== null && (t && rt.alternate !== null && L.delete(rt.key === null ? tt : rt.key), h = u(rt, h, tt), st === null ? Q = rt : st.sibling = rt, st = rt);
      return t && L.forEach(function(dh) {
        return e(y, dh);
      }), ct && Ze(y, tt), Q;
    }
    function pt(y, h, g, j) {
      if (typeof g == "object" && g !== null && g.type === F && g.key === null && (g = g.props.children), typeof g == "object" && g !== null) {
        switch (g.$$typeof) {
          case w:
            t: {
              for (var Q = g.key; h !== null; ) {
                if (h.key === Q) {
                  if (Q = g.type, Q === F) {
                    if (h.tag === 7) {
                      l(
                        y,
                        h.sibling
                      ), j = n(
                        h,
                        g.props.children
                      ), j.return = y, y = j;
                      break t;
                    }
                  } else if (h.elementType === Q || typeof Q == "object" && Q !== null && Q.$$typeof === Mt && Zl(Q) === h.type) {
                    l(
                      y,
                      h.sibling
                    ), j = n(h, g.props), an(j, g), j.return = y, y = j;
                    break t;
                  }
                  l(y, h);
                  break;
                } else e(y, h);
                h = h.sibling;
              }
              g.type === F ? (j = Ll(
                g.props.children,
                y.mode,
                j,
                g.key
              ), j.return = y, y = j) : (j = au(
                g.type,
                g.key,
                g.props,
                null,
                y.mode,
                j
              ), an(j, g), j.return = y, y = j);
            }
            return i(y);
          case et:
            t: {
              for (Q = g.key; h !== null; ) {
                if (h.key === Q)
                  if (h.tag === 4 && h.stateNode.containerInfo === g.containerInfo && h.stateNode.implementation === g.implementation) {
                    l(
                      y,
                      h.sibling
                    ), j = n(h, g.children || []), j.return = y, y = j;
                    break t;
                  } else {
                    l(y, h);
                    break;
                  }
                else e(y, h);
                h = h.sibling;
              }
              j = Ji(g, y.mode, j), j.return = y, y = j;
            }
            return i(y);
          case Mt:
            return g = Zl(g), pt(
              y,
              h,
              g,
              j
            );
        }
        if (_e(g))
          return B(
            y,
            h,
            g,
            j
          );
        if (Wt(g)) {
          if (Q = Wt(g), typeof Q != "function") throw Error(f(150));
          return g = Q.call(g), X(
            y,
            h,
            g,
            j
          );
        }
        if (typeof g.then == "function")
          return pt(
            y,
            h,
            ru(g),
            j
          );
        if (g.$$typeof === q)
          return pt(
            y,
            h,
            iu(y, g),
            j
          );
        ou(y, g);
      }
      return typeof g == "string" && g !== "" || typeof g == "number" || typeof g == "bigint" ? (g = "" + g, h !== null && h.tag === 6 ? (l(y, h.sibling), j = n(h, g), j.return = y, y = j) : (l(y, h), j = Ki(g, y.mode, j), j.return = y, y = j), i(y)) : l(y, h);
    }
    return function(y, h, g, j) {
      try {
        ln = 0;
        var Q = pt(
          y,
          h,
          g,
          j
        );
        return pa = null, Q;
      } catch (L) {
        if (L === ga || L === fu) throw L;
        var st = fe(29, L, null, y.mode);
        return st.lanes = j, st.return = y, st;
      } finally {
      }
    };
  }
  var Kl = gr(!0), pr = gr(!1), dl = !1;
  function uc(t) {
    t.updateQueue = {
      baseState: t.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function ic(t, e) {
    t = t.updateQueue, e.updateQueue === t && (e.updateQueue = {
      baseState: t.baseState,
      firstBaseUpdate: t.firstBaseUpdate,
      lastBaseUpdate: t.lastBaseUpdate,
      shared: t.shared,
      callbacks: null
    });
  }
  function ml(t) {
    return { lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function hl(t, e, l) {
    var a = t.updateQueue;
    if (a === null) return null;
    if (a = a.shared, (ot & 2) !== 0) {
      var n = a.pending;
      return n === null ? e.next = e : (e.next = n.next, n.next = e), a.pending = e, e = lu(t), lr(t, null, l), e;
    }
    return eu(t, a, e, l), lu(t);
  }
  function nn(t, e, l) {
    if (e = e.updateQueue, e !== null && (e = e.shared, (l & 4194048) !== 0)) {
      var a = e.lanes;
      a &= t.pendingLanes, l |= a, e.lanes = l, rs(t, l);
    }
  }
  function cc(t, e) {
    var l = t.updateQueue, a = t.alternate;
    if (a !== null && (a = a.updateQueue, l === a)) {
      var n = null, u = null;
      if (l = l.firstBaseUpdate, l !== null) {
        do {
          var i = {
            lane: l.lane,
            tag: l.tag,
            payload: l.payload,
            callback: null,
            next: null
          };
          u === null ? n = u = i : u = u.next = i, l = l.next;
        } while (l !== null);
        u === null ? n = u = e : u = u.next = e;
      } else n = u = e;
      l = {
        baseState: a.baseState,
        firstBaseUpdate: n,
        lastBaseUpdate: u,
        shared: a.shared,
        callbacks: a.callbacks
      }, t.updateQueue = l;
      return;
    }
    t = l.lastBaseUpdate, t === null ? l.firstBaseUpdate = e : t.next = e, l.lastBaseUpdate = e;
  }
  var fc = !1;
  function un() {
    if (fc) {
      var t = ba;
      if (t !== null) throw t;
    }
  }
  function cn(t, e, l, a) {
    fc = !1;
    var n = t.updateQueue;
    dl = !1;
    var u = n.firstBaseUpdate, i = n.lastBaseUpdate, s = n.shared.pending;
    if (s !== null) {
      n.shared.pending = null;
      var m = s, p = m.next;
      m.next = null, i === null ? u = p : i.next = p, i = m;
      var _ = t.alternate;
      _ !== null && (_ = _.updateQueue, s = _.lastBaseUpdate, s !== i && (s === null ? _.firstBaseUpdate = p : s.next = p, _.lastBaseUpdate = m));
    }
    if (u !== null) {
      var T = n.baseState;
      i = 0, _ = p = m = null, s = u;
      do {
        var S = s.lane & -536870913, E = S !== s.lane;
        if (E ? (ut & S) === S : (a & S) === S) {
          S !== 0 && S === ya && (fc = !0), _ !== null && (_ = _.next = {
            lane: 0,
            tag: s.tag,
            payload: s.payload,
            callback: null,
            next: null
          });
          t: {
            var B = t, X = s;
            S = e;
            var pt = l;
            switch (X.tag) {
              case 1:
                if (B = X.payload, typeof B == "function") {
                  T = B.call(pt, T, S);
                  break t;
                }
                T = B;
                break t;
              case 3:
                B.flags = B.flags & -65537 | 128;
              case 0:
                if (B = X.payload, S = typeof B == "function" ? B.call(pt, T, S) : B, S == null) break t;
                T = H({}, T, S);
                break t;
              case 2:
                dl = !0;
            }
          }
          S = s.callback, S !== null && (t.flags |= 64, E && (t.flags |= 8192), E = n.callbacks, E === null ? n.callbacks = [S] : E.push(S));
        } else
          E = {
            lane: S,
            tag: s.tag,
            payload: s.payload,
            callback: s.callback,
            next: null
          }, _ === null ? (p = _ = E, m = T) : _ = _.next = E, i |= S;
        if (s = s.next, s === null) {
          if (s = n.shared.pending, s === null)
            break;
          E = s, s = E.next, E.next = null, n.lastBaseUpdate = E, n.shared.pending = null;
        }
      } while (!0);
      _ === null && (m = T), n.baseState = m, n.firstBaseUpdate = p, n.lastBaseUpdate = _, u === null && (n.shared.lanes = 0), pl |= i, t.lanes = i, t.memoizedState = T;
    }
  }
  function xr(t, e) {
    if (typeof t != "function")
      throw Error(f(191, t));
    t.call(e);
  }
  function Sr(t, e) {
    var l = t.callbacks;
    if (l !== null)
      for (t.callbacks = null, t = 0; t < l.length; t++)
        xr(l[t], e);
  }
  var xa = v(null), du = v(0);
  function Er(t, e) {
    t = el, R(du, t), R(xa, e), el = t | e.baseLanes;
  }
  function sc() {
    R(du, el), R(xa, xa.current);
  }
  function rc() {
    el = du.current, M(xa), M(du);
  }
  var se = v(null), Se = null;
  function vl(t) {
    var e = t.alternate;
    R(Dt, Dt.current & 1), R(se, t), Se === null && (e === null || xa.current !== null || e.memoizedState !== null) && (Se = t);
  }
  function oc(t) {
    R(Dt, Dt.current), R(se, t), Se === null && (Se = t);
  }
  function zr(t) {
    t.tag === 22 ? (R(Dt, Dt.current), R(se, t), Se === null && (Se = t)) : yl();
  }
  function yl() {
    R(Dt, Dt.current), R(se, se.current);
  }
  function re(t) {
    M(se), Se === t && (Se = null), M(Dt);
  }
  var Dt = v(0);
  function mu(t) {
    for (var e = t; e !== null; ) {
      if (e.tag === 13) {
        var l = e.memoizedState;
        if (l !== null && (l = l.dehydrated, l === null || gf(l) || pf(l)))
          return e;
      } else if (e.tag === 19 && (e.memoizedProps.revealOrder === "forwards" || e.memoizedProps.revealOrder === "backwards" || e.memoizedProps.revealOrder === "unstable_legacy-backwards" || e.memoizedProps.revealOrder === "together")) {
        if ((e.flags & 128) !== 0) return e;
      } else if (e.child !== null) {
        e.child.return = e, e = e.child;
        continue;
      }
      if (e === t) break;
      for (; e.sibling === null; ) {
        if (e.return === null || e.return === t) return null;
        e = e.return;
      }
      e.sibling.return = e.return, e = e.sibling;
    }
    return null;
  }
  var Je = 0, W = null, bt = null, Ht = null, hu = !1, Sa = !1, Jl = !1, vu = 0, fn = 0, Ea = null, lm = 0;
  function Tt() {
    throw Error(f(321));
  }
  function dc(t, e) {
    if (e === null) return !1;
    for (var l = 0; l < e.length && l < t.length; l++)
      if (!ce(t[l], e[l])) return !1;
    return !0;
  }
  function mc(t, e, l, a, n, u) {
    return Je = u, W = e, e.memoizedState = null, e.updateQueue = null, e.lanes = 0, A.H = t === null || t.memoizedState === null ? io : Nc, Jl = !1, u = l(a, n), Jl = !1, Sa && (u = Ar(
      e,
      l,
      a,
      n
    )), _r(t), u;
  }
  function _r(t) {
    A.H = on;
    var e = bt !== null && bt.next !== null;
    if (Je = 0, Ht = bt = W = null, hu = !1, fn = 0, Ea = null, e) throw Error(f(300));
    t === null || qt || (t = t.dependencies, t !== null && uu(t) && (qt = !0));
  }
  function Ar(t, e, l, a) {
    W = t;
    var n = 0;
    do {
      if (Sa && (Ea = null), fn = 0, Sa = !1, 25 <= n) throw Error(f(301));
      if (n += 1, Ht = bt = null, t.updateQueue != null) {
        var u = t.updateQueue;
        u.lastEffect = null, u.events = null, u.stores = null, u.memoCache != null && (u.memoCache.index = 0);
      }
      A.H = co, u = e(l, a);
    } while (Sa);
    return u;
  }
  function am() {
    var t = A.H, e = t.useState()[0];
    return e = typeof e.then == "function" ? sn(e) : e, t = t.useState()[0], (bt !== null ? bt.memoizedState : null) !== t && (W.flags |= 1024), e;
  }
  function hc() {
    var t = vu !== 0;
    return vu = 0, t;
  }
  function vc(t, e, l) {
    e.updateQueue = t.updateQueue, e.flags &= -2053, t.lanes &= ~l;
  }
  function yc(t) {
    if (hu) {
      for (t = t.memoizedState; t !== null; ) {
        var e = t.queue;
        e !== null && (e.pending = null), t = t.next;
      }
      hu = !1;
    }
    Je = 0, Ht = bt = W = null, Sa = !1, fn = vu = 0, Ea = null;
  }
  function $t() {
    var t = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return Ht === null ? W.memoizedState = Ht = t : Ht = Ht.next = t, Ht;
  }
  function Ut() {
    if (bt === null) {
      var t = W.alternate;
      t = t !== null ? t.memoizedState : null;
    } else t = bt.next;
    var e = Ht === null ? W.memoizedState : Ht.next;
    if (e !== null)
      Ht = e, bt = t;
    else {
      if (t === null)
        throw W.alternate === null ? Error(f(467)) : Error(f(310));
      bt = t, t = {
        memoizedState: bt.memoizedState,
        baseState: bt.baseState,
        baseQueue: bt.baseQueue,
        queue: bt.queue,
        next: null
      }, Ht === null ? W.memoizedState = Ht = t : Ht = Ht.next = t;
    }
    return Ht;
  }
  function yu() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function sn(t) {
    var e = fn;
    return fn += 1, Ea === null && (Ea = []), t = vr(Ea, t, e), e = W, (Ht === null ? e.memoizedState : Ht.next) === null && (e = e.alternate, A.H = e === null || e.memoizedState === null ? io : Nc), t;
  }
  function bu(t) {
    if (t !== null && typeof t == "object") {
      if (typeof t.then == "function") return sn(t);
      if (t.$$typeof === q) return Xt(t);
    }
    throw Error(f(438, String(t)));
  }
  function bc(t) {
    var e = null, l = W.updateQueue;
    if (l !== null && (e = l.memoCache), e == null) {
      var a = W.alternate;
      a !== null && (a = a.updateQueue, a !== null && (a = a.memoCache, a != null && (e = {
        data: a.data.map(function(n) {
          return n.slice();
        }),
        index: 0
      })));
    }
    if (e == null && (e = { data: [], index: 0 }), l === null && (l = yu(), W.updateQueue = l), l.memoCache = e, l = e.data[e.index], l === void 0)
      for (l = e.data[e.index] = Array(t), a = 0; a < t; a++)
        l[a] = Fl;
    return e.index++, l;
  }
  function ke(t, e) {
    return typeof e == "function" ? e(t) : e;
  }
  function gu(t) {
    var e = Ut();
    return gc(e, bt, t);
  }
  function gc(t, e, l) {
    var a = t.queue;
    if (a === null) throw Error(f(311));
    a.lastRenderedReducer = l;
    var n = t.baseQueue, u = a.pending;
    if (u !== null) {
      if (n !== null) {
        var i = n.next;
        n.next = u.next, u.next = i;
      }
      e.baseQueue = n = u, a.pending = null;
    }
    if (u = t.baseState, n === null) t.memoizedState = u;
    else {
      e = n.next;
      var s = i = null, m = null, p = e, _ = !1;
      do {
        var T = p.lane & -536870913;
        if (T !== p.lane ? (ut & T) === T : (Je & T) === T) {
          var S = p.revertLane;
          if (S === 0)
            m !== null && (m = m.next = {
              lane: 0,
              revertLane: 0,
              gesture: null,
              action: p.action,
              hasEagerState: p.hasEagerState,
              eagerState: p.eagerState,
              next: null
            }), T === ya && (_ = !0);
          else if ((Je & S) === S) {
            p = p.next, S === ya && (_ = !0);
            continue;
          } else
            T = {
              lane: 0,
              revertLane: p.revertLane,
              gesture: null,
              action: p.action,
              hasEagerState: p.hasEagerState,
              eagerState: p.eagerState,
              next: null
            }, m === null ? (s = m = T, i = u) : m = m.next = T, W.lanes |= S, pl |= S;
          T = p.action, Jl && l(u, T), u = p.hasEagerState ? p.eagerState : l(u, T);
        } else
          S = {
            lane: T,
            revertLane: p.revertLane,
            gesture: p.gesture,
            action: p.action,
            hasEagerState: p.hasEagerState,
            eagerState: p.eagerState,
            next: null
          }, m === null ? (s = m = S, i = u) : m = m.next = S, W.lanes |= T, pl |= T;
        p = p.next;
      } while (p !== null && p !== e);
      if (m === null ? i = u : m.next = s, !ce(u, t.memoizedState) && (qt = !0, _ && (l = ba, l !== null)))
        throw l;
      t.memoizedState = u, t.baseState = i, t.baseQueue = m, a.lastRenderedState = u;
    }
    return n === null && (a.lanes = 0), [t.memoizedState, a.dispatch];
  }
  function pc(t) {
    var e = Ut(), l = e.queue;
    if (l === null) throw Error(f(311));
    l.lastRenderedReducer = t;
    var a = l.dispatch, n = l.pending, u = e.memoizedState;
    if (n !== null) {
      l.pending = null;
      var i = n = n.next;
      do
        u = t(u, i.action), i = i.next;
      while (i !== n);
      ce(u, e.memoizedState) || (qt = !0), e.memoizedState = u, e.baseQueue === null && (e.baseState = u), l.lastRenderedState = u;
    }
    return [u, a];
  }
  function jr(t, e, l) {
    var a = W, n = Ut(), u = ct;
    if (u) {
      if (l === void 0) throw Error(f(407));
      l = l();
    } else l = e();
    var i = !ce(
      (bt || n).memoizedState,
      l
    );
    if (i && (n.memoizedState = l, qt = !0), n = n.queue, Ec(Cr.bind(null, a, n, t), [
      t
    ]), n.getSnapshot !== e || i || Ht !== null && Ht.memoizedState.tag & 1) {
      if (a.flags |= 2048, za(
        9,
        { destroy: void 0 },
        Nr.bind(
          null,
          a,
          n,
          l,
          e
        ),
        null
      ), St === null) throw Error(f(349));
      u || (Je & 127) !== 0 || Tr(a, e, l);
    }
    return l;
  }
  function Tr(t, e, l) {
    t.flags |= 16384, t = { getSnapshot: e, value: l }, e = W.updateQueue, e === null ? (e = yu(), W.updateQueue = e, e.stores = [t]) : (l = e.stores, l === null ? e.stores = [t] : l.push(t));
  }
  function Nr(t, e, l, a) {
    e.value = l, e.getSnapshot = a, Mr(e) && Or(t);
  }
  function Cr(t, e, l) {
    return l(function() {
      Mr(e) && Or(t);
    });
  }
  function Mr(t) {
    var e = t.getSnapshot;
    t = t.value;
    try {
      var l = e();
      return !ce(t, l);
    } catch {
      return !0;
    }
  }
  function Or(t) {
    var e = Yl(t, 2);
    e !== null && ae(e, t, 2);
  }
  function xc(t) {
    var e = $t();
    if (typeof t == "function") {
      var l = t;
      if (t = l(), Jl) {
        ul(!0);
        try {
          l();
        } finally {
          ul(!1);
        }
      }
    }
    return e.memoizedState = e.baseState = t, e.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: ke,
      lastRenderedState: t
    }, e;
  }
  function Dr(t, e, l, a) {
    return t.baseState = l, gc(
      t,
      bt,
      typeof a == "function" ? a : ke
    );
  }
  function nm(t, e, l, a, n) {
    if (Su(t)) throw Error(f(485));
    if (t = e.action, t !== null) {
      var u = {
        payload: n,
        action: t,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function(i) {
          u.listeners.push(i);
        }
      };
      A.T !== null ? l(!0) : u.isTransition = !1, a(u), l = e.pending, l === null ? (u.next = e.pending = u, Ur(e, u)) : (u.next = l.next, e.pending = l.next = u);
    }
  }
  function Ur(t, e) {
    var l = e.action, a = e.payload, n = t.state;
    if (e.isTransition) {
      var u = A.T, i = {};
      A.T = i;
      try {
        var s = l(n, a), m = A.S;
        m !== null && m(i, s), Rr(t, e, s);
      } catch (p) {
        Sc(t, e, p);
      } finally {
        u !== null && i.types !== null && (u.types = i.types), A.T = u;
      }
    } else
      try {
        u = l(n, a), Rr(t, e, u);
      } catch (p) {
        Sc(t, e, p);
      }
  }
  function Rr(t, e, l) {
    l !== null && typeof l == "object" && typeof l.then == "function" ? l.then(
      function(a) {
        Hr(t, e, a);
      },
      function(a) {
        return Sc(t, e, a);
      }
    ) : Hr(t, e, l);
  }
  function Hr(t, e, l) {
    e.status = "fulfilled", e.value = l, qr(e), t.state = l, e = t.pending, e !== null && (l = e.next, l === e ? t.pending = null : (l = l.next, e.next = l, Ur(t, l)));
  }
  function Sc(t, e, l) {
    var a = t.pending;
    if (t.pending = null, a !== null) {
      a = a.next;
      do
        e.status = "rejected", e.reason = l, qr(e), e = e.next;
      while (e !== a);
    }
    t.action = null;
  }
  function qr(t) {
    t = t.listeners;
    for (var e = 0; e < t.length; e++) (0, t[e])();
  }
  function Br(t, e) {
    return e;
  }
  function Yr(t, e) {
    if (ct) {
      var l = St.formState;
      if (l !== null) {
        t: {
          var a = W;
          if (ct) {
            if (zt) {
              e: {
                for (var n = zt, u = xe; n.nodeType !== 8; ) {
                  if (!u) {
                    n = null;
                    break e;
                  }
                  if (n = Ee(
                    n.nextSibling
                  ), n === null) {
                    n = null;
                    break e;
                  }
                }
                u = n.data, n = u === "F!" || u === "F" ? n : null;
              }
              if (n) {
                zt = Ee(
                  n.nextSibling
                ), a = n.data === "F!";
                break t;
              }
            }
            rl(a);
          }
          a = !1;
        }
        a && (e = l[0]);
      }
    }
    return l = $t(), l.memoizedState = l.baseState = e, a = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Br,
      lastRenderedState: e
    }, l.queue = a, l = ao.bind(
      null,
      W,
      a
    ), a.dispatch = l, a = xc(!1), u = Tc.bind(
      null,
      W,
      !1,
      a.queue
    ), a = $t(), n = {
      state: e,
      dispatch: null,
      action: t,
      pending: null
    }, a.queue = n, l = nm.bind(
      null,
      W,
      n,
      u,
      l
    ), n.dispatch = l, a.memoizedState = t, [e, l, !1];
  }
  function Lr(t) {
    var e = Ut();
    return Gr(e, bt, t);
  }
  function Gr(t, e, l) {
    if (e = gc(
      t,
      e,
      Br
    )[0], t = gu(ke)[0], typeof e == "object" && e !== null && typeof e.then == "function")
      try {
        var a = sn(e);
      } catch (i) {
        throw i === ga ? fu : i;
      }
    else a = e;
    e = Ut();
    var n = e.queue, u = n.dispatch;
    return l !== e.memoizedState && (W.flags |= 2048, za(
      9,
      { destroy: void 0 },
      um.bind(null, n, l),
      null
    )), [a, u, t];
  }
  function um(t, e) {
    t.action = e;
  }
  function wr(t) {
    var e = Ut(), l = bt;
    if (l !== null)
      return Gr(e, l, t);
    Ut(), e = e.memoizedState, l = Ut();
    var a = l.queue.dispatch;
    return l.memoizedState = t, [e, a, !1];
  }
  function za(t, e, l, a) {
    return t = { tag: t, create: l, deps: a, inst: e, next: null }, e = W.updateQueue, e === null && (e = yu(), W.updateQueue = e), l = e.lastEffect, l === null ? e.lastEffect = t.next = t : (a = l.next, l.next = t, t.next = a, e.lastEffect = t), t;
  }
  function Qr() {
    return Ut().memoizedState;
  }
  function pu(t, e, l, a) {
    var n = $t();
    W.flags |= t, n.memoizedState = za(
      1 | e,
      { destroy: void 0 },
      l,
      a === void 0 ? null : a
    );
  }
  function xu(t, e, l, a) {
    var n = Ut();
    a = a === void 0 ? null : a;
    var u = n.memoizedState.inst;
    bt !== null && a !== null && dc(a, bt.memoizedState.deps) ? n.memoizedState = za(e, u, l, a) : (W.flags |= t, n.memoizedState = za(
      1 | e,
      u,
      l,
      a
    ));
  }
  function Xr(t, e) {
    pu(8390656, 8, t, e);
  }
  function Ec(t, e) {
    xu(2048, 8, t, e);
  }
  function im(t) {
    W.flags |= 4;
    var e = W.updateQueue;
    if (e === null)
      e = yu(), W.updateQueue = e, e.events = [t];
    else {
      var l = e.events;
      l === null ? e.events = [t] : l.push(t);
    }
  }
  function Zr(t) {
    var e = Ut().memoizedState;
    return im({ ref: e, nextImpl: t }), function() {
      if ((ot & 2) !== 0) throw Error(f(440));
      return e.impl.apply(void 0, arguments);
    };
  }
  function Vr(t, e) {
    return xu(4, 2, t, e);
  }
  function Kr(t, e) {
    return xu(4, 4, t, e);
  }
  function Jr(t, e) {
    if (typeof e == "function") {
      t = t();
      var l = e(t);
      return function() {
        typeof l == "function" ? l() : e(null);
      };
    }
    if (e != null)
      return t = t(), e.current = t, function() {
        e.current = null;
      };
  }
  function kr(t, e, l) {
    l = l != null ? l.concat([t]) : null, xu(4, 4, Jr.bind(null, e, t), l);
  }
  function zc() {
  }
  function $r(t, e) {
    var l = Ut();
    e = e === void 0 ? null : e;
    var a = l.memoizedState;
    return e !== null && dc(e, a[1]) ? a[0] : (l.memoizedState = [t, e], t);
  }
  function Wr(t, e) {
    var l = Ut();
    e = e === void 0 ? null : e;
    var a = l.memoizedState;
    if (e !== null && dc(e, a[1]))
      return a[0];
    if (a = t(), Jl) {
      ul(!0);
      try {
        t();
      } finally {
        ul(!1);
      }
    }
    return l.memoizedState = [a, e], a;
  }
  function _c(t, e, l) {
    return l === void 0 || (Je & 1073741824) !== 0 && (ut & 261930) === 0 ? t.memoizedState = e : (t.memoizedState = l, t = Io(), W.lanes |= t, pl |= t, l);
  }
  function Fr(t, e, l, a) {
    return ce(l, e) ? l : xa.current !== null ? (t = _c(t, l, a), ce(t, e) || (qt = !0), t) : (Je & 42) === 0 || (Je & 1073741824) !== 0 && (ut & 261930) === 0 ? (qt = !0, t.memoizedState = l) : (t = Io(), W.lanes |= t, pl |= t, e);
  }
  function Ir(t, e, l, a, n) {
    var u = U.p;
    U.p = u !== 0 && 8 > u ? u : 8;
    var i = A.T, s = {};
    A.T = s, Tc(t, !1, e, l);
    try {
      var m = n(), p = A.S;
      if (p !== null && p(s, m), m !== null && typeof m == "object" && typeof m.then == "function") {
        var _ = em(
          m,
          a
        );
        rn(
          t,
          e,
          _,
          me(t)
        );
      } else
        rn(
          t,
          e,
          a,
          me(t)
        );
    } catch (T) {
      rn(
        t,
        e,
        { then: function() {
        }, status: "rejected", reason: T },
        me()
      );
    } finally {
      U.p = u, i !== null && s.types !== null && (i.types = s.types), A.T = i;
    }
  }
  function cm() {
  }
  function Ac(t, e, l, a) {
    if (t.tag !== 5) throw Error(f(476));
    var n = Pr(t).queue;
    Ir(
      t,
      n,
      e,
      V,
      l === null ? cm : function() {
        return to(t), l(a);
      }
    );
  }
  function Pr(t) {
    var e = t.memoizedState;
    if (e !== null) return e;
    e = {
      memoizedState: V,
      baseState: V,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: ke,
        lastRenderedState: V
      },
      next: null
    };
    var l = {};
    return e.next = {
      memoizedState: l,
      baseState: l,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: ke,
        lastRenderedState: l
      },
      next: null
    }, t.memoizedState = e, t = t.alternate, t !== null && (t.memoizedState = e), e;
  }
  function to(t) {
    var e = Pr(t);
    e.next === null && (e = t.alternate.memoizedState), rn(
      t,
      e.next.queue,
      {},
      me()
    );
  }
  function jc() {
    return Xt(Tn);
  }
  function eo() {
    return Ut().memoizedState;
  }
  function lo() {
    return Ut().memoizedState;
  }
  function fm(t) {
    for (var e = t.return; e !== null; ) {
      switch (e.tag) {
        case 24:
        case 3:
          var l = me();
          t = ml(l);
          var a = hl(e, t, l);
          a !== null && (ae(a, e, l), nn(a, e, l)), e = { cache: ec() }, t.payload = e;
          return;
      }
      e = e.return;
    }
  }
  function sm(t, e, l) {
    var a = me();
    l = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Su(t) ? no(e, l) : (l = Zi(t, e, l, a), l !== null && (ae(l, t, a), uo(l, e, a)));
  }
  function ao(t, e, l) {
    var a = me();
    rn(t, e, l, a);
  }
  function rn(t, e, l, a) {
    var n = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (Su(t)) no(e, n);
    else {
      var u = t.alternate;
      if (t.lanes === 0 && (u === null || u.lanes === 0) && (u = e.lastRenderedReducer, u !== null))
        try {
          var i = e.lastRenderedState, s = u(i, l);
          if (n.hasEagerState = !0, n.eagerState = s, ce(s, i))
            return eu(t, e, n, 0), St === null && tu(), !1;
        } catch {
        } finally {
        }
      if (l = Zi(t, e, n, a), l !== null)
        return ae(l, t, a), uo(l, e, a), !0;
    }
    return !1;
  }
  function Tc(t, e, l, a) {
    if (a = {
      lane: 2,
      revertLane: uf(),
      gesture: null,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Su(t)) {
      if (e) throw Error(f(479));
    } else
      e = Zi(
        t,
        l,
        a,
        2
      ), e !== null && ae(e, t, 2);
  }
  function Su(t) {
    var e = t.alternate;
    return t === W || e !== null && e === W;
  }
  function no(t, e) {
    Sa = hu = !0;
    var l = t.pending;
    l === null ? e.next = e : (e.next = l.next, l.next = e), t.pending = e;
  }
  function uo(t, e, l) {
    if ((l & 4194048) !== 0) {
      var a = e.lanes;
      a &= t.pendingLanes, l |= a, e.lanes = l, rs(t, l);
    }
  }
  var on = {
    readContext: Xt,
    use: bu,
    useCallback: Tt,
    useContext: Tt,
    useEffect: Tt,
    useImperativeHandle: Tt,
    useLayoutEffect: Tt,
    useInsertionEffect: Tt,
    useMemo: Tt,
    useReducer: Tt,
    useRef: Tt,
    useState: Tt,
    useDebugValue: Tt,
    useDeferredValue: Tt,
    useTransition: Tt,
    useSyncExternalStore: Tt,
    useId: Tt,
    useHostTransitionStatus: Tt,
    useFormState: Tt,
    useActionState: Tt,
    useOptimistic: Tt,
    useMemoCache: Tt,
    useCacheRefresh: Tt
  };
  on.useEffectEvent = Tt;
  var io = {
    readContext: Xt,
    use: bu,
    useCallback: function(t, e) {
      return $t().memoizedState = [
        t,
        e === void 0 ? null : e
      ], t;
    },
    useContext: Xt,
    useEffect: Xr,
    useImperativeHandle: function(t, e, l) {
      l = l != null ? l.concat([t]) : null, pu(
        4194308,
        4,
        Jr.bind(null, e, t),
        l
      );
    },
    useLayoutEffect: function(t, e) {
      return pu(4194308, 4, t, e);
    },
    useInsertionEffect: function(t, e) {
      pu(4, 2, t, e);
    },
    useMemo: function(t, e) {
      var l = $t();
      e = e === void 0 ? null : e;
      var a = t();
      if (Jl) {
        ul(!0);
        try {
          t();
        } finally {
          ul(!1);
        }
      }
      return l.memoizedState = [a, e], a;
    },
    useReducer: function(t, e, l) {
      var a = $t();
      if (l !== void 0) {
        var n = l(e);
        if (Jl) {
          ul(!0);
          try {
            l(e);
          } finally {
            ul(!1);
          }
        }
      } else n = e;
      return a.memoizedState = a.baseState = n, t = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: t,
        lastRenderedState: n
      }, a.queue = t, t = t.dispatch = sm.bind(
        null,
        W,
        t
      ), [a.memoizedState, t];
    },
    useRef: function(t) {
      var e = $t();
      return t = { current: t }, e.memoizedState = t;
    },
    useState: function(t) {
      t = xc(t);
      var e = t.queue, l = ao.bind(null, W, e);
      return e.dispatch = l, [t.memoizedState, l];
    },
    useDebugValue: zc,
    useDeferredValue: function(t, e) {
      var l = $t();
      return _c(l, t, e);
    },
    useTransition: function() {
      var t = xc(!1);
      return t = Ir.bind(
        null,
        W,
        t.queue,
        !0,
        !1
      ), $t().memoizedState = t, [!1, t];
    },
    useSyncExternalStore: function(t, e, l) {
      var a = W, n = $t();
      if (ct) {
        if (l === void 0)
          throw Error(f(407));
        l = l();
      } else {
        if (l = e(), St === null)
          throw Error(f(349));
        (ut & 127) !== 0 || Tr(a, e, l);
      }
      n.memoizedState = l;
      var u = { value: l, getSnapshot: e };
      return n.queue = u, Xr(Cr.bind(null, a, u, t), [
        t
      ]), a.flags |= 2048, za(
        9,
        { destroy: void 0 },
        Nr.bind(
          null,
          a,
          u,
          l,
          e
        ),
        null
      ), l;
    },
    useId: function() {
      var t = $t(), e = St.identifierPrefix;
      if (ct) {
        var l = Ue, a = De;
        l = (a & ~(1 << 32 - ie(a) - 1)).toString(32) + l, e = "_" + e + "R_" + l, l = vu++, 0 < l && (e += "H" + l.toString(32)), e += "_";
      } else
        l = lm++, e = "_" + e + "r_" + l.toString(32) + "_";
      return t.memoizedState = e;
    },
    useHostTransitionStatus: jc,
    useFormState: Yr,
    useActionState: Yr,
    useOptimistic: function(t) {
      var e = $t();
      e.memoizedState = e.baseState = t;
      var l = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return e.queue = l, e = Tc.bind(
        null,
        W,
        !0,
        l
      ), l.dispatch = e, [t, e];
    },
    useMemoCache: bc,
    useCacheRefresh: function() {
      return $t().memoizedState = fm.bind(
        null,
        W
      );
    },
    useEffectEvent: function(t) {
      var e = $t(), l = { impl: t };
      return e.memoizedState = l, function() {
        if ((ot & 2) !== 0)
          throw Error(f(440));
        return l.impl.apply(void 0, arguments);
      };
    }
  }, Nc = {
    readContext: Xt,
    use: bu,
    useCallback: $r,
    useContext: Xt,
    useEffect: Ec,
    useImperativeHandle: kr,
    useInsertionEffect: Vr,
    useLayoutEffect: Kr,
    useMemo: Wr,
    useReducer: gu,
    useRef: Qr,
    useState: function() {
      return gu(ke);
    },
    useDebugValue: zc,
    useDeferredValue: function(t, e) {
      var l = Ut();
      return Fr(
        l,
        bt.memoizedState,
        t,
        e
      );
    },
    useTransition: function() {
      var t = gu(ke)[0], e = Ut().memoizedState;
      return [
        typeof t == "boolean" ? t : sn(t),
        e
      ];
    },
    useSyncExternalStore: jr,
    useId: eo,
    useHostTransitionStatus: jc,
    useFormState: Lr,
    useActionState: Lr,
    useOptimistic: function(t, e) {
      var l = Ut();
      return Dr(l, bt, t, e);
    },
    useMemoCache: bc,
    useCacheRefresh: lo
  };
  Nc.useEffectEvent = Zr;
  var co = {
    readContext: Xt,
    use: bu,
    useCallback: $r,
    useContext: Xt,
    useEffect: Ec,
    useImperativeHandle: kr,
    useInsertionEffect: Vr,
    useLayoutEffect: Kr,
    useMemo: Wr,
    useReducer: pc,
    useRef: Qr,
    useState: function() {
      return pc(ke);
    },
    useDebugValue: zc,
    useDeferredValue: function(t, e) {
      var l = Ut();
      return bt === null ? _c(l, t, e) : Fr(
        l,
        bt.memoizedState,
        t,
        e
      );
    },
    useTransition: function() {
      var t = pc(ke)[0], e = Ut().memoizedState;
      return [
        typeof t == "boolean" ? t : sn(t),
        e
      ];
    },
    useSyncExternalStore: jr,
    useId: eo,
    useHostTransitionStatus: jc,
    useFormState: wr,
    useActionState: wr,
    useOptimistic: function(t, e) {
      var l = Ut();
      return bt !== null ? Dr(l, bt, t, e) : (l.baseState = t, [t, l.queue.dispatch]);
    },
    useMemoCache: bc,
    useCacheRefresh: lo
  };
  co.useEffectEvent = Zr;
  function Cc(t, e, l, a) {
    e = t.memoizedState, l = l(a, e), l = l == null ? e : H({}, e, l), t.memoizedState = l, t.lanes === 0 && (t.updateQueue.baseState = l);
  }
  var Mc = {
    enqueueSetState: function(t, e, l) {
      t = t._reactInternals;
      var a = me(), n = ml(a);
      n.payload = e, l != null && (n.callback = l), e = hl(t, n, a), e !== null && (ae(e, t, a), nn(e, t, a));
    },
    enqueueReplaceState: function(t, e, l) {
      t = t._reactInternals;
      var a = me(), n = ml(a);
      n.tag = 1, n.payload = e, l != null && (n.callback = l), e = hl(t, n, a), e !== null && (ae(e, t, a), nn(e, t, a));
    },
    enqueueForceUpdate: function(t, e) {
      t = t._reactInternals;
      var l = me(), a = ml(l);
      a.tag = 2, e != null && (a.callback = e), e = hl(t, a, l), e !== null && (ae(e, t, l), nn(e, t, l));
    }
  };
  function fo(t, e, l, a, n, u, i) {
    return t = t.stateNode, typeof t.shouldComponentUpdate == "function" ? t.shouldComponentUpdate(a, u, i) : e.prototype && e.prototype.isPureReactComponent ? !Wa(l, a) || !Wa(n, u) : !0;
  }
  function so(t, e, l, a) {
    t = e.state, typeof e.componentWillReceiveProps == "function" && e.componentWillReceiveProps(l, a), typeof e.UNSAFE_componentWillReceiveProps == "function" && e.UNSAFE_componentWillReceiveProps(l, a), e.state !== t && Mc.enqueueReplaceState(e, e.state, null);
  }
  function kl(t, e) {
    var l = e;
    if ("ref" in e) {
      l = {};
      for (var a in e)
        a !== "ref" && (l[a] = e[a]);
    }
    if (t = t.defaultProps) {
      l === e && (l = H({}, l));
      for (var n in t)
        l[n] === void 0 && (l[n] = t[n]);
    }
    return l;
  }
  function ro(t) {
    Pn(t);
  }
  function oo(t) {
    console.error(t);
  }
  function mo(t) {
    Pn(t);
  }
  function Eu(t, e) {
    try {
      var l = t.onUncaughtError;
      l(e.value, { componentStack: e.stack });
    } catch (a) {
      setTimeout(function() {
        throw a;
      });
    }
  }
  function ho(t, e, l) {
    try {
      var a = t.onCaughtError;
      a(l.value, {
        componentStack: l.stack,
        errorBoundary: e.tag === 1 ? e.stateNode : null
      });
    } catch (n) {
      setTimeout(function() {
        throw n;
      });
    }
  }
  function Oc(t, e, l) {
    return l = ml(l), l.tag = 3, l.payload = { element: null }, l.callback = function() {
      Eu(t, e);
    }, l;
  }
  function vo(t) {
    return t = ml(t), t.tag = 3, t;
  }
  function yo(t, e, l, a) {
    var n = l.type.getDerivedStateFromError;
    if (typeof n == "function") {
      var u = a.value;
      t.payload = function() {
        return n(u);
      }, t.callback = function() {
        ho(e, l, a);
      };
    }
    var i = l.stateNode;
    i !== null && typeof i.componentDidCatch == "function" && (t.callback = function() {
      ho(e, l, a), typeof n != "function" && (xl === null ? xl = /* @__PURE__ */ new Set([this]) : xl.add(this));
      var s = a.stack;
      this.componentDidCatch(a.value, {
        componentStack: s !== null ? s : ""
      });
    });
  }
  function rm(t, e, l, a, n) {
    if (l.flags |= 32768, a !== null && typeof a == "object" && typeof a.then == "function") {
      if (e = l.alternate, e !== null && va(
        e,
        l,
        n,
        !0
      ), l = se.current, l !== null) {
        switch (l.tag) {
          case 31:
          case 13:
            return Se === null ? Ru() : l.alternate === null && Nt === 0 && (Nt = 3), l.flags &= -257, l.flags |= 65536, l.lanes = n, a === su ? l.flags |= 16384 : (e = l.updateQueue, e === null ? l.updateQueue = /* @__PURE__ */ new Set([a]) : e.add(a), lf(t, a, n)), !1;
          case 22:
            return l.flags |= 65536, a === su ? l.flags |= 16384 : (e = l.updateQueue, e === null ? (e = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([a])
            }, l.updateQueue = e) : (l = e.retryQueue, l === null ? e.retryQueue = /* @__PURE__ */ new Set([a]) : l.add(a)), lf(t, a, n)), !1;
        }
        throw Error(f(435, l.tag));
      }
      return lf(t, a, n), Ru(), !1;
    }
    if (ct)
      return e = se.current, e !== null ? ((e.flags & 65536) === 0 && (e.flags |= 256), e.flags |= 65536, e.lanes = n, a !== Wi && (t = Error(f(422), { cause: a }), Pa(be(t, l)))) : (a !== Wi && (e = Error(f(423), {
        cause: a
      }), Pa(
        be(e, l)
      )), t = t.current.alternate, t.flags |= 65536, n &= -n, t.lanes |= n, a = be(a, l), n = Oc(
        t.stateNode,
        a,
        n
      ), cc(t, n), Nt !== 4 && (Nt = 2)), !1;
    var u = Error(f(520), { cause: a });
    if (u = be(u, l), pn === null ? pn = [u] : pn.push(u), Nt !== 4 && (Nt = 2), e === null) return !0;
    a = be(a, l), l = e;
    do {
      switch (l.tag) {
        case 3:
          return l.flags |= 65536, t = n & -n, l.lanes |= t, t = Oc(l.stateNode, a, t), cc(l, t), !1;
        case 1:
          if (e = l.type, u = l.stateNode, (l.flags & 128) === 0 && (typeof e.getDerivedStateFromError == "function" || u !== null && typeof u.componentDidCatch == "function" && (xl === null || !xl.has(u))))
            return l.flags |= 65536, n &= -n, l.lanes |= n, n = vo(n), yo(
              n,
              t,
              l,
              a
            ), cc(l, n), !1;
      }
      l = l.return;
    } while (l !== null);
    return !1;
  }
  var Dc = Error(f(461)), qt = !1;
  function Zt(t, e, l, a) {
    e.child = t === null ? pr(e, null, l, a) : Kl(
      e,
      t.child,
      l,
      a
    );
  }
  function bo(t, e, l, a, n) {
    l = l.render;
    var u = e.ref;
    if ("ref" in a) {
      var i = {};
      for (var s in a)
        s !== "ref" && (i[s] = a[s]);
    } else i = a;
    return Ql(e), a = mc(
      t,
      e,
      l,
      i,
      u,
      n
    ), s = hc(), t !== null && !qt ? (vc(t, e, n), $e(t, e, n)) : (ct && s && ki(e), e.flags |= 1, Zt(t, e, a, n), e.child);
  }
  function go(t, e, l, a, n) {
    if (t === null) {
      var u = l.type;
      return typeof u == "function" && !Vi(u) && u.defaultProps === void 0 && l.compare === null ? (e.tag = 15, e.type = u, po(
        t,
        e,
        u,
        a,
        n
      )) : (t = au(
        l.type,
        null,
        a,
        e,
        e.mode,
        n
      ), t.ref = e.ref, t.return = e, e.child = t);
    }
    if (u = t.child, !Gc(t, n)) {
      var i = u.memoizedProps;
      if (l = l.compare, l = l !== null ? l : Wa, l(i, a) && t.ref === e.ref)
        return $e(t, e, n);
    }
    return e.flags |= 1, t = Xe(u, a), t.ref = e.ref, t.return = e, e.child = t;
  }
  function po(t, e, l, a, n) {
    if (t !== null) {
      var u = t.memoizedProps;
      if (Wa(u, a) && t.ref === e.ref)
        if (qt = !1, e.pendingProps = a = u, Gc(t, n))
          (t.flags & 131072) !== 0 && (qt = !0);
        else
          return e.lanes = t.lanes, $e(t, e, n);
    }
    return Uc(
      t,
      e,
      l,
      a,
      n
    );
  }
  function xo(t, e, l, a) {
    var n = a.children, u = t !== null ? t.memoizedState : null;
    if (t === null && e.stateNode === null && (e.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), a.mode === "hidden") {
      if ((e.flags & 128) !== 0) {
        if (u = u !== null ? u.baseLanes | l : l, t !== null) {
          for (a = e.child = t.child, n = 0; a !== null; )
            n = n | a.lanes | a.childLanes, a = a.sibling;
          a = n & ~u;
        } else a = 0, e.child = null;
        return So(
          t,
          e,
          u,
          l,
          a
        );
      }
      if ((l & 536870912) !== 0)
        e.memoizedState = { baseLanes: 0, cachePool: null }, t !== null && cu(
          e,
          u !== null ? u.cachePool : null
        ), u !== null ? Er(e, u) : sc(), zr(e);
      else
        return a = e.lanes = 536870912, So(
          t,
          e,
          u !== null ? u.baseLanes | l : l,
          l,
          a
        );
    } else
      u !== null ? (cu(e, u.cachePool), Er(e, u), yl(), e.memoizedState = null) : (t !== null && cu(e, null), sc(), yl());
    return Zt(t, e, n, l), e.child;
  }
  function dn(t, e) {
    return t !== null && t.tag === 22 || e.stateNode !== null || (e.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), e.sibling;
  }
  function So(t, e, l, a, n) {
    var u = ac();
    return u = u === null ? null : { parent: Rt._currentValue, pool: u }, e.memoizedState = {
      baseLanes: l,
      cachePool: u
    }, t !== null && cu(e, null), sc(), zr(e), t !== null && va(t, e, a, !0), e.childLanes = n, null;
  }
  function zu(t, e) {
    return e = Au(
      { mode: e.mode, children: e.children },
      t.mode
    ), e.ref = t.ref, t.child = e, e.return = t, e;
  }
  function Eo(t, e, l) {
    return Kl(e, t.child, null, l), t = zu(e, e.pendingProps), t.flags |= 2, re(e), e.memoizedState = null, t;
  }
  function om(t, e, l) {
    var a = e.pendingProps, n = (e.flags & 128) !== 0;
    if (e.flags &= -129, t === null) {
      if (ct) {
        if (a.mode === "hidden")
          return t = zu(e, a), e.lanes = 536870912, dn(null, t);
        if (oc(e), (t = zt) ? (t = Rd(
          t,
          xe
        ), t = t !== null && t.data === "&" ? t : null, t !== null && (e.memoizedState = {
          dehydrated: t,
          treeContext: fl !== null ? { id: De, overflow: Ue } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, l = nr(t), l.return = e, e.child = l, Qt = e, zt = null)) : t = null, t === null) throw rl(e);
        return e.lanes = 536870912, null;
      }
      return zu(e, a);
    }
    var u = t.memoizedState;
    if (u !== null) {
      var i = u.dehydrated;
      if (oc(e), n)
        if (e.flags & 256)
          e.flags &= -257, e = Eo(
            t,
            e,
            l
          );
        else if (e.memoizedState !== null)
          e.child = t.child, e.flags |= 128, e = null;
        else throw Error(f(558));
      else if (qt || va(t, e, l, !1), n = (l & t.childLanes) !== 0, qt || n) {
        if (a = St, a !== null && (i = os(a, l), i !== 0 && i !== u.retryLane))
          throw u.retryLane = i, Yl(t, i), ae(a, t, i), Dc;
        Ru(), e = Eo(
          t,
          e,
          l
        );
      } else
        t = u.treeContext, zt = Ee(i.nextSibling), Qt = e, ct = !0, sl = null, xe = !1, t !== null && cr(e, t), e = zu(e, a), e.flags |= 4096;
      return e;
    }
    return t = Xe(t.child, {
      mode: a.mode,
      children: a.children
    }), t.ref = e.ref, e.child = t, t.return = e, t;
  }
  function _u(t, e) {
    var l = e.ref;
    if (l === null)
      t !== null && t.ref !== null && (e.flags |= 4194816);
    else {
      if (typeof l != "function" && typeof l != "object")
        throw Error(f(284));
      (t === null || t.ref !== l) && (e.flags |= 4194816);
    }
  }
  function Uc(t, e, l, a, n) {
    return Ql(e), l = mc(
      t,
      e,
      l,
      a,
      void 0,
      n
    ), a = hc(), t !== null && !qt ? (vc(t, e, n), $e(t, e, n)) : (ct && a && ki(e), e.flags |= 1, Zt(t, e, l, n), e.child);
  }
  function zo(t, e, l, a, n, u) {
    return Ql(e), e.updateQueue = null, l = Ar(
      e,
      a,
      l,
      n
    ), _r(t), a = hc(), t !== null && !qt ? (vc(t, e, u), $e(t, e, u)) : (ct && a && ki(e), e.flags |= 1, Zt(t, e, l, u), e.child);
  }
  function _o(t, e, l, a, n) {
    if (Ql(e), e.stateNode === null) {
      var u = oa, i = l.contextType;
      typeof i == "object" && i !== null && (u = Xt(i)), u = new l(a, u), e.memoizedState = u.state !== null && u.state !== void 0 ? u.state : null, u.updater = Mc, e.stateNode = u, u._reactInternals = e, u = e.stateNode, u.props = a, u.state = e.memoizedState, u.refs = {}, uc(e), i = l.contextType, u.context = typeof i == "object" && i !== null ? Xt(i) : oa, u.state = e.memoizedState, i = l.getDerivedStateFromProps, typeof i == "function" && (Cc(
        e,
        l,
        i,
        a
      ), u.state = e.memoizedState), typeof l.getDerivedStateFromProps == "function" || typeof u.getSnapshotBeforeUpdate == "function" || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (i = u.state, typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount(), i !== u.state && Mc.enqueueReplaceState(u, u.state, null), cn(e, a, u, n), un(), u.state = e.memoizedState), typeof u.componentDidMount == "function" && (e.flags |= 4194308), a = !0;
    } else if (t === null) {
      u = e.stateNode;
      var s = e.memoizedProps, m = kl(l, s);
      u.props = m;
      var p = u.context, _ = l.contextType;
      i = oa, typeof _ == "object" && _ !== null && (i = Xt(_));
      var T = l.getDerivedStateFromProps;
      _ = typeof T == "function" || typeof u.getSnapshotBeforeUpdate == "function", s = e.pendingProps !== s, _ || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (s || p !== i) && so(
        e,
        u,
        a,
        i
      ), dl = !1;
      var S = e.memoizedState;
      u.state = S, cn(e, a, u, n), un(), p = e.memoizedState, s || S !== p || dl ? (typeof T == "function" && (Cc(
        e,
        l,
        T,
        a
      ), p = e.memoizedState), (m = dl || fo(
        e,
        l,
        m,
        a,
        S,
        p,
        i
      )) ? (_ || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount()), typeof u.componentDidMount == "function" && (e.flags |= 4194308)) : (typeof u.componentDidMount == "function" && (e.flags |= 4194308), e.memoizedProps = a, e.memoizedState = p), u.props = a, u.state = p, u.context = i, a = m) : (typeof u.componentDidMount == "function" && (e.flags |= 4194308), a = !1);
    } else {
      u = e.stateNode, ic(t, e), i = e.memoizedProps, _ = kl(l, i), u.props = _, T = e.pendingProps, S = u.context, p = l.contextType, m = oa, typeof p == "object" && p !== null && (m = Xt(p)), s = l.getDerivedStateFromProps, (p = typeof s == "function" || typeof u.getSnapshotBeforeUpdate == "function") || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (i !== T || S !== m) && so(
        e,
        u,
        a,
        m
      ), dl = !1, S = e.memoizedState, u.state = S, cn(e, a, u, n), un();
      var E = e.memoizedState;
      i !== T || S !== E || dl || t !== null && t.dependencies !== null && uu(t.dependencies) ? (typeof s == "function" && (Cc(
        e,
        l,
        s,
        a
      ), E = e.memoizedState), (_ = dl || fo(
        e,
        l,
        _,
        a,
        S,
        E,
        m
      ) || t !== null && t.dependencies !== null && uu(t.dependencies)) ? (p || typeof u.UNSAFE_componentWillUpdate != "function" && typeof u.componentWillUpdate != "function" || (typeof u.componentWillUpdate == "function" && u.componentWillUpdate(a, E, m), typeof u.UNSAFE_componentWillUpdate == "function" && u.UNSAFE_componentWillUpdate(
        a,
        E,
        m
      )), typeof u.componentDidUpdate == "function" && (e.flags |= 4), typeof u.getSnapshotBeforeUpdate == "function" && (e.flags |= 1024)) : (typeof u.componentDidUpdate != "function" || i === t.memoizedProps && S === t.memoizedState || (e.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || i === t.memoizedProps && S === t.memoizedState || (e.flags |= 1024), e.memoizedProps = a, e.memoizedState = E), u.props = a, u.state = E, u.context = m, a = _) : (typeof u.componentDidUpdate != "function" || i === t.memoizedProps && S === t.memoizedState || (e.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || i === t.memoizedProps && S === t.memoizedState || (e.flags |= 1024), a = !1);
    }
    return u = a, _u(t, e), a = (e.flags & 128) !== 0, u || a ? (u = e.stateNode, l = a && typeof l.getDerivedStateFromError != "function" ? null : u.render(), e.flags |= 1, t !== null && a ? (e.child = Kl(
      e,
      t.child,
      null,
      n
    ), e.child = Kl(
      e,
      null,
      l,
      n
    )) : Zt(t, e, l, n), e.memoizedState = u.state, t = e.child) : t = $e(
      t,
      e,
      n
    ), t;
  }
  function Ao(t, e, l, a) {
    return Gl(), e.flags |= 256, Zt(t, e, l, a), e.child;
  }
  var Rc = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function Hc(t) {
    return { baseLanes: t, cachePool: mr() };
  }
  function qc(t, e, l) {
    return t = t !== null ? t.childLanes & ~l : 0, e && (t |= de), t;
  }
  function jo(t, e, l) {
    var a = e.pendingProps, n = !1, u = (e.flags & 128) !== 0, i;
    if ((i = u) || (i = t !== null && t.memoizedState === null ? !1 : (Dt.current & 2) !== 0), i && (n = !0, e.flags &= -129), i = (e.flags & 32) !== 0, e.flags &= -33, t === null) {
      if (ct) {
        if (n ? vl(e) : yl(), (t = zt) ? (t = Rd(
          t,
          xe
        ), t = t !== null && t.data !== "&" ? t : null, t !== null && (e.memoizedState = {
          dehydrated: t,
          treeContext: fl !== null ? { id: De, overflow: Ue } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, l = nr(t), l.return = e, e.child = l, Qt = e, zt = null)) : t = null, t === null) throw rl(e);
        return pf(t) ? e.lanes = 32 : e.lanes = 536870912, null;
      }
      var s = a.children;
      return a = a.fallback, n ? (yl(), n = e.mode, s = Au(
        { mode: "hidden", children: s },
        n
      ), a = Ll(
        a,
        n,
        l,
        null
      ), s.return = e, a.return = e, s.sibling = a, e.child = s, a = e.child, a.memoizedState = Hc(l), a.childLanes = qc(
        t,
        i,
        l
      ), e.memoizedState = Rc, dn(null, a)) : (vl(e), Bc(e, s));
    }
    var m = t.memoizedState;
    if (m !== null && (s = m.dehydrated, s !== null)) {
      if (u)
        e.flags & 256 ? (vl(e), e.flags &= -257, e = Yc(
          t,
          e,
          l
        )) : e.memoizedState !== null ? (yl(), e.child = t.child, e.flags |= 128, e = null) : (yl(), s = a.fallback, n = e.mode, a = Au(
          { mode: "visible", children: a.children },
          n
        ), s = Ll(
          s,
          n,
          l,
          null
        ), s.flags |= 2, a.return = e, s.return = e, a.sibling = s, e.child = a, Kl(
          e,
          t.child,
          null,
          l
        ), a = e.child, a.memoizedState = Hc(l), a.childLanes = qc(
          t,
          i,
          l
        ), e.memoizedState = Rc, e = dn(null, a));
      else if (vl(e), pf(s)) {
        if (i = s.nextSibling && s.nextSibling.dataset, i) var p = i.dgst;
        i = p, a = Error(f(419)), a.stack = "", a.digest = i, Pa({ value: a, source: null, stack: null }), e = Yc(
          t,
          e,
          l
        );
      } else if (qt || va(t, e, l, !1), i = (l & t.childLanes) !== 0, qt || i) {
        if (i = St, i !== null && (a = os(i, l), a !== 0 && a !== m.retryLane))
          throw m.retryLane = a, Yl(t, a), ae(i, t, a), Dc;
        gf(s) || Ru(), e = Yc(
          t,
          e,
          l
        );
      } else
        gf(s) ? (e.flags |= 192, e.child = t.child, e = null) : (t = m.treeContext, zt = Ee(
          s.nextSibling
        ), Qt = e, ct = !0, sl = null, xe = !1, t !== null && cr(e, t), e = Bc(
          e,
          a.children
        ), e.flags |= 4096);
      return e;
    }
    return n ? (yl(), s = a.fallback, n = e.mode, m = t.child, p = m.sibling, a = Xe(m, {
      mode: "hidden",
      children: a.children
    }), a.subtreeFlags = m.subtreeFlags & 65011712, p !== null ? s = Xe(
      p,
      s
    ) : (s = Ll(
      s,
      n,
      l,
      null
    ), s.flags |= 2), s.return = e, a.return = e, a.sibling = s, e.child = a, dn(null, a), a = e.child, s = t.child.memoizedState, s === null ? s = Hc(l) : (n = s.cachePool, n !== null ? (m = Rt._currentValue, n = n.parent !== m ? { parent: m, pool: m } : n) : n = mr(), s = {
      baseLanes: s.baseLanes | l,
      cachePool: n
    }), a.memoizedState = s, a.childLanes = qc(
      t,
      i,
      l
    ), e.memoizedState = Rc, dn(t.child, a)) : (vl(e), l = t.child, t = l.sibling, l = Xe(l, {
      mode: "visible",
      children: a.children
    }), l.return = e, l.sibling = null, t !== null && (i = e.deletions, i === null ? (e.deletions = [t], e.flags |= 16) : i.push(t)), e.child = l, e.memoizedState = null, l);
  }
  function Bc(t, e) {
    return e = Au(
      { mode: "visible", children: e },
      t.mode
    ), e.return = t, t.child = e;
  }
  function Au(t, e) {
    return t = fe(22, t, null, e), t.lanes = 0, t;
  }
  function Yc(t, e, l) {
    return Kl(e, t.child, null, l), t = Bc(
      e,
      e.pendingProps.children
    ), t.flags |= 2, e.memoizedState = null, t;
  }
  function To(t, e, l) {
    t.lanes |= e;
    var a = t.alternate;
    a !== null && (a.lanes |= e), Pi(t.return, e, l);
  }
  function Lc(t, e, l, a, n, u) {
    var i = t.memoizedState;
    i === null ? t.memoizedState = {
      isBackwards: e,
      rendering: null,
      renderingStartTime: 0,
      last: a,
      tail: l,
      tailMode: n,
      treeForkCount: u
    } : (i.isBackwards = e, i.rendering = null, i.renderingStartTime = 0, i.last = a, i.tail = l, i.tailMode = n, i.treeForkCount = u);
  }
  function No(t, e, l) {
    var a = e.pendingProps, n = a.revealOrder, u = a.tail;
    a = a.children;
    var i = Dt.current, s = (i & 2) !== 0;
    if (s ? (i = i & 1 | 2, e.flags |= 128) : i &= 1, R(Dt, i), Zt(t, e, a, l), a = ct ? Ia : 0, !s && t !== null && (t.flags & 128) !== 0)
      t: for (t = e.child; t !== null; ) {
        if (t.tag === 13)
          t.memoizedState !== null && To(t, l, e);
        else if (t.tag === 19)
          To(t, l, e);
        else if (t.child !== null) {
          t.child.return = t, t = t.child;
          continue;
        }
        if (t === e) break t;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e)
            break t;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
    switch (n) {
      case "forwards":
        for (l = e.child, n = null; l !== null; )
          t = l.alternate, t !== null && mu(t) === null && (n = l), l = l.sibling;
        l = n, l === null ? (n = e.child, e.child = null) : (n = l.sibling, l.sibling = null), Lc(
          e,
          !1,
          n,
          l,
          u,
          a
        );
        break;
      case "backwards":
      case "unstable_legacy-backwards":
        for (l = null, n = e.child, e.child = null; n !== null; ) {
          if (t = n.alternate, t !== null && mu(t) === null) {
            e.child = n;
            break;
          }
          t = n.sibling, n.sibling = l, l = n, n = t;
        }
        Lc(
          e,
          !0,
          l,
          null,
          u,
          a
        );
        break;
      case "together":
        Lc(
          e,
          !1,
          null,
          null,
          void 0,
          a
        );
        break;
      default:
        e.memoizedState = null;
    }
    return e.child;
  }
  function $e(t, e, l) {
    if (t !== null && (e.dependencies = t.dependencies), pl |= e.lanes, (l & e.childLanes) === 0)
      if (t !== null) {
        if (va(
          t,
          e,
          l,
          !1
        ), (l & e.childLanes) === 0)
          return null;
      } else return null;
    if (t !== null && e.child !== t.child)
      throw Error(f(153));
    if (e.child !== null) {
      for (t = e.child, l = Xe(t, t.pendingProps), e.child = l, l.return = e; t.sibling !== null; )
        t = t.sibling, l = l.sibling = Xe(t, t.pendingProps), l.return = e;
      l.sibling = null;
    }
    return e.child;
  }
  function Gc(t, e) {
    return (t.lanes & e) !== 0 ? !0 : (t = t.dependencies, !!(t !== null && uu(t)));
  }
  function dm(t, e, l) {
    switch (e.tag) {
      case 3:
        kt(e, e.stateNode.containerInfo), ol(e, Rt, t.memoizedState.cache), Gl();
        break;
      case 27:
      case 5:
        Ba(e);
        break;
      case 4:
        kt(e, e.stateNode.containerInfo);
        break;
      case 10:
        ol(
          e,
          e.type,
          e.memoizedProps.value
        );
        break;
      case 31:
        if (e.memoizedState !== null)
          return e.flags |= 128, oc(e), null;
        break;
      case 13:
        var a = e.memoizedState;
        if (a !== null)
          return a.dehydrated !== null ? (vl(e), e.flags |= 128, null) : (l & e.child.childLanes) !== 0 ? jo(t, e, l) : (vl(e), t = $e(
            t,
            e,
            l
          ), t !== null ? t.sibling : null);
        vl(e);
        break;
      case 19:
        var n = (t.flags & 128) !== 0;
        if (a = (l & e.childLanes) !== 0, a || (va(
          t,
          e,
          l,
          !1
        ), a = (l & e.childLanes) !== 0), n) {
          if (a)
            return No(
              t,
              e,
              l
            );
          e.flags |= 128;
        }
        if (n = e.memoizedState, n !== null && (n.rendering = null, n.tail = null, n.lastEffect = null), R(Dt, Dt.current), a) break;
        return null;
      case 22:
        return e.lanes = 0, xo(
          t,
          e,
          l,
          e.pendingProps
        );
      case 24:
        ol(e, Rt, t.memoizedState.cache);
    }
    return $e(t, e, l);
  }
  function Co(t, e, l) {
    if (t !== null)
      if (t.memoizedProps !== e.pendingProps)
        qt = !0;
      else {
        if (!Gc(t, l) && (e.flags & 128) === 0)
          return qt = !1, dm(
            t,
            e,
            l
          );
        qt = (t.flags & 131072) !== 0;
      }
    else
      qt = !1, ct && (e.flags & 1048576) !== 0 && ir(e, Ia, e.index);
    switch (e.lanes = 0, e.tag) {
      case 16:
        t: {
          var a = e.pendingProps;
          if (t = Zl(e.elementType), e.type = t, typeof t == "function")
            Vi(t) ? (a = kl(t, a), e.tag = 1, e = _o(
              null,
              e,
              t,
              a,
              l
            )) : (e.tag = 0, e = Uc(
              null,
              e,
              t,
              a,
              l
            ));
          else {
            if (t != null) {
              var n = t.$$typeof;
              if (n === K) {
                e.tag = 11, e = bo(
                  null,
                  e,
                  t,
                  a,
                  l
                );
                break t;
              } else if (n === P) {
                e.tag = 14, e = go(
                  null,
                  e,
                  t,
                  a,
                  l
                );
                break t;
              }
            }
            throw e = Le(t) || t, Error(f(306, e, ""));
          }
        }
        return e;
      case 0:
        return Uc(
          t,
          e,
          e.type,
          e.pendingProps,
          l
        );
      case 1:
        return a = e.type, n = kl(
          a,
          e.pendingProps
        ), _o(
          t,
          e,
          a,
          n,
          l
        );
      case 3:
        t: {
          if (kt(
            e,
            e.stateNode.containerInfo
          ), t === null) throw Error(f(387));
          a = e.pendingProps;
          var u = e.memoizedState;
          n = u.element, ic(t, e), cn(e, a, null, l);
          var i = e.memoizedState;
          if (a = i.cache, ol(e, Rt, a), a !== u.cache && tc(
            e,
            [Rt],
            l,
            !0
          ), un(), a = i.element, u.isDehydrated)
            if (u = {
              element: a,
              isDehydrated: !1,
              cache: i.cache
            }, e.updateQueue.baseState = u, e.memoizedState = u, e.flags & 256) {
              e = Ao(
                t,
                e,
                a,
                l
              );
              break t;
            } else if (a !== n) {
              n = be(
                Error(f(424)),
                e
              ), Pa(n), e = Ao(
                t,
                e,
                a,
                l
              );
              break t;
            } else {
              switch (t = e.stateNode.containerInfo, t.nodeType) {
                case 9:
                  t = t.body;
                  break;
                default:
                  t = t.nodeName === "HTML" ? t.ownerDocument.body : t;
              }
              for (zt = Ee(t.firstChild), Qt = e, ct = !0, sl = null, xe = !0, l = pr(
                e,
                null,
                a,
                l
              ), e.child = l; l; )
                l.flags = l.flags & -3 | 4096, l = l.sibling;
            }
          else {
            if (Gl(), a === n) {
              e = $e(
                t,
                e,
                l
              );
              break t;
            }
            Zt(t, e, a, l);
          }
          e = e.child;
        }
        return e;
      case 26:
        return _u(t, e), t === null ? (l = Gd(
          e.type,
          null,
          e.pendingProps,
          null
        )) ? e.memoizedState = l : ct || (l = e.type, t = e.pendingProps, a = wu(
          lt.current
        ).createElement(l), a[wt] = e, a[Ft] = t, Vt(a, l, t), Lt(a), e.stateNode = a) : e.memoizedState = Gd(
          e.type,
          t.memoizedProps,
          e.pendingProps,
          t.memoizedState
        ), null;
      case 27:
        return Ba(e), t === null && ct && (a = e.stateNode = Bd(
          e.type,
          e.pendingProps,
          lt.current
        ), Qt = e, xe = !0, n = zt, _l(e.type) ? (xf = n, zt = Ee(a.firstChild)) : zt = n), Zt(
          t,
          e,
          e.pendingProps.children,
          l
        ), _u(t, e), t === null && (e.flags |= 4194304), e.child;
      case 5:
        return t === null && ct && ((n = a = zt) && (a = Qm(
          a,
          e.type,
          e.pendingProps,
          xe
        ), a !== null ? (e.stateNode = a, Qt = e, zt = Ee(a.firstChild), xe = !1, n = !0) : n = !1), n || rl(e)), Ba(e), n = e.type, u = e.pendingProps, i = t !== null ? t.memoizedProps : null, a = u.children, vf(n, u) ? a = null : i !== null && vf(n, i) && (e.flags |= 32), e.memoizedState !== null && (n = mc(
          t,
          e,
          am,
          null,
          null,
          l
        ), Tn._currentValue = n), _u(t, e), Zt(t, e, a, l), e.child;
      case 6:
        return t === null && ct && ((t = l = zt) && (l = Xm(
          l,
          e.pendingProps,
          xe
        ), l !== null ? (e.stateNode = l, Qt = e, zt = null, t = !0) : t = !1), t || rl(e)), null;
      case 13:
        return jo(t, e, l);
      case 4:
        return kt(
          e,
          e.stateNode.containerInfo
        ), a = e.pendingProps, t === null ? e.child = Kl(
          e,
          null,
          a,
          l
        ) : Zt(t, e, a, l), e.child;
      case 11:
        return bo(
          t,
          e,
          e.type,
          e.pendingProps,
          l
        );
      case 7:
        return Zt(
          t,
          e,
          e.pendingProps,
          l
        ), e.child;
      case 8:
        return Zt(
          t,
          e,
          e.pendingProps.children,
          l
        ), e.child;
      case 12:
        return Zt(
          t,
          e,
          e.pendingProps.children,
          l
        ), e.child;
      case 10:
        return a = e.pendingProps, ol(e, e.type, a.value), Zt(t, e, a.children, l), e.child;
      case 9:
        return n = e.type._context, a = e.pendingProps.children, Ql(e), n = Xt(n), a = a(n), e.flags |= 1, Zt(t, e, a, l), e.child;
      case 14:
        return go(
          t,
          e,
          e.type,
          e.pendingProps,
          l
        );
      case 15:
        return po(
          t,
          e,
          e.type,
          e.pendingProps,
          l
        );
      case 19:
        return No(t, e, l);
      case 31:
        return om(t, e, l);
      case 22:
        return xo(
          t,
          e,
          l,
          e.pendingProps
        );
      case 24:
        return Ql(e), a = Xt(Rt), t === null ? (n = ac(), n === null && (n = St, u = ec(), n.pooledCache = u, u.refCount++, u !== null && (n.pooledCacheLanes |= l), n = u), e.memoizedState = { parent: a, cache: n }, uc(e), ol(e, Rt, n)) : ((t.lanes & l) !== 0 && (ic(t, e), cn(e, null, null, l), un()), n = t.memoizedState, u = e.memoizedState, n.parent !== a ? (n = { parent: a, cache: a }, e.memoizedState = n, e.lanes === 0 && (e.memoizedState = e.updateQueue.baseState = n), ol(e, Rt, a)) : (a = u.cache, ol(e, Rt, a), a !== n.cache && tc(
          e,
          [Rt],
          l,
          !0
        ))), Zt(
          t,
          e,
          e.pendingProps.children,
          l
        ), e.child;
      case 29:
        throw e.pendingProps;
    }
    throw Error(f(156, e.tag));
  }
  function We(t) {
    t.flags |= 4;
  }
  function wc(t, e, l, a, n) {
    if ((e = (t.mode & 32) !== 0) && (e = !1), e) {
      if (t.flags |= 16777216, (n & 335544128) === n)
        if (t.stateNode.complete) t.flags |= 8192;
        else if (ld()) t.flags |= 8192;
        else
          throw Vl = su, nc;
    } else t.flags &= -16777217;
  }
  function Mo(t, e) {
    if (e.type !== "stylesheet" || (e.state.loading & 4) !== 0)
      t.flags &= -16777217;
    else if (t.flags |= 16777216, !Vd(e))
      if (ld()) t.flags |= 8192;
      else
        throw Vl = su, nc;
  }
  function ju(t, e) {
    e !== null && (t.flags |= 4), t.flags & 16384 && (e = t.tag !== 22 ? fs() : 536870912, t.lanes |= e, Ta |= e);
  }
  function mn(t, e) {
    if (!ct)
      switch (t.tailMode) {
        case "hidden":
          e = t.tail;
          for (var l = null; e !== null; )
            e.alternate !== null && (l = e), e = e.sibling;
          l === null ? t.tail = null : l.sibling = null;
          break;
        case "collapsed":
          l = t.tail;
          for (var a = null; l !== null; )
            l.alternate !== null && (a = l), l = l.sibling;
          a === null ? e || t.tail === null ? t.tail = null : t.tail.sibling = null : a.sibling = null;
      }
  }
  function _t(t) {
    var e = t.alternate !== null && t.alternate.child === t.child, l = 0, a = 0;
    if (e)
      for (var n = t.child; n !== null; )
        l |= n.lanes | n.childLanes, a |= n.subtreeFlags & 65011712, a |= n.flags & 65011712, n.return = t, n = n.sibling;
    else
      for (n = t.child; n !== null; )
        l |= n.lanes | n.childLanes, a |= n.subtreeFlags, a |= n.flags, n.return = t, n = n.sibling;
    return t.subtreeFlags |= a, t.childLanes = l, e;
  }
  function mm(t, e, l) {
    var a = e.pendingProps;
    switch ($i(e), e.tag) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return _t(e), null;
      case 1:
        return _t(e), null;
      case 3:
        return l = e.stateNode, a = null, t !== null && (a = t.memoizedState.cache), e.memoizedState.cache !== a && (e.flags |= 2048), Ke(Rt), Ot(), l.pendingContext && (l.context = l.pendingContext, l.pendingContext = null), (t === null || t.child === null) && (ha(e) ? We(e) : t === null || t.memoizedState.isDehydrated && (e.flags & 256) === 0 || (e.flags |= 1024, Fi())), _t(e), null;
      case 26:
        var n = e.type, u = e.memoizedState;
        return t === null ? (We(e), u !== null ? (_t(e), Mo(e, u)) : (_t(e), wc(
          e,
          n,
          null,
          a,
          l
        ))) : u ? u !== t.memoizedState ? (We(e), _t(e), Mo(e, u)) : (_t(e), e.flags &= -16777217) : (t = t.memoizedProps, t !== a && We(e), _t(e), wc(
          e,
          n,
          t,
          a,
          l
        )), null;
      case 27:
        if (Bn(e), l = lt.current, n = e.type, t !== null && e.stateNode != null)
          t.memoizedProps !== a && We(e);
        else {
          if (!a) {
            if (e.stateNode === null)
              throw Error(f(166));
            return _t(e), null;
          }
          t = Y.current, ha(e) ? fr(e) : (t = Bd(n, a, l), e.stateNode = t, We(e));
        }
        return _t(e), null;
      case 5:
        if (Bn(e), n = e.type, t !== null && e.stateNode != null)
          t.memoizedProps !== a && We(e);
        else {
          if (!a) {
            if (e.stateNode === null)
              throw Error(f(166));
            return _t(e), null;
          }
          if (u = Y.current, ha(e))
            fr(e);
          else {
            var i = wu(
              lt.current
            );
            switch (u) {
              case 1:
                u = i.createElementNS(
                  "http://www.w3.org/2000/svg",
                  n
                );
                break;
              case 2:
                u = i.createElementNS(
                  "http://www.w3.org/1998/Math/MathML",
                  n
                );
                break;
              default:
                switch (n) {
                  case "svg":
                    u = i.createElementNS(
                      "http://www.w3.org/2000/svg",
                      n
                    );
                    break;
                  case "math":
                    u = i.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      n
                    );
                    break;
                  case "script":
                    u = i.createElement("div"), u.innerHTML = "<script><\/script>", u = u.removeChild(
                      u.firstChild
                    );
                    break;
                  case "select":
                    u = typeof a.is == "string" ? i.createElement("select", {
                      is: a.is
                    }) : i.createElement("select"), a.multiple ? u.multiple = !0 : a.size && (u.size = a.size);
                    break;
                  default:
                    u = typeof a.is == "string" ? i.createElement(n, { is: a.is }) : i.createElement(n);
                }
            }
            u[wt] = e, u[Ft] = a;
            t: for (i = e.child; i !== null; ) {
              if (i.tag === 5 || i.tag === 6)
                u.appendChild(i.stateNode);
              else if (i.tag !== 4 && i.tag !== 27 && i.child !== null) {
                i.child.return = i, i = i.child;
                continue;
              }
              if (i === e) break t;
              for (; i.sibling === null; ) {
                if (i.return === null || i.return === e)
                  break t;
                i = i.return;
              }
              i.sibling.return = i.return, i = i.sibling;
            }
            e.stateNode = u;
            t: switch (Vt(u, n, a), n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                a = !!a.autoFocus;
                break t;
              case "img":
                a = !0;
                break t;
              default:
                a = !1;
            }
            a && We(e);
          }
        }
        return _t(e), wc(
          e,
          e.type,
          t === null ? null : t.memoizedProps,
          e.pendingProps,
          l
        ), null;
      case 6:
        if (t && e.stateNode != null)
          t.memoizedProps !== a && We(e);
        else {
          if (typeof a != "string" && e.stateNode === null)
            throw Error(f(166));
          if (t = lt.current, ha(e)) {
            if (t = e.stateNode, l = e.memoizedProps, a = null, n = Qt, n !== null)
              switch (n.tag) {
                case 27:
                case 5:
                  a = n.memoizedProps;
              }
            t[wt] = e, t = !!(t.nodeValue === l || a !== null && a.suppressHydrationWarning === !0 || jd(t.nodeValue, l)), t || rl(e, !0);
          } else
            t = wu(t).createTextNode(
              a
            ), t[wt] = e, e.stateNode = t;
        }
        return _t(e), null;
      case 31:
        if (l = e.memoizedState, t === null || t.memoizedState !== null) {
          if (a = ha(e), l !== null) {
            if (t === null) {
              if (!a) throw Error(f(318));
              if (t = e.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(f(557));
              t[wt] = e;
            } else
              Gl(), (e.flags & 128) === 0 && (e.memoizedState = null), e.flags |= 4;
            _t(e), t = !1;
          } else
            l = Fi(), t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = l), t = !0;
          if (!t)
            return e.flags & 256 ? (re(e), e) : (re(e), null);
          if ((e.flags & 128) !== 0)
            throw Error(f(558));
        }
        return _t(e), null;
      case 13:
        if (a = e.memoizedState, t === null || t.memoizedState !== null && t.memoizedState.dehydrated !== null) {
          if (n = ha(e), a !== null && a.dehydrated !== null) {
            if (t === null) {
              if (!n) throw Error(f(318));
              if (n = e.memoizedState, n = n !== null ? n.dehydrated : null, !n) throw Error(f(317));
              n[wt] = e;
            } else
              Gl(), (e.flags & 128) === 0 && (e.memoizedState = null), e.flags |= 4;
            _t(e), n = !1;
          } else
            n = Fi(), t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = n), n = !0;
          if (!n)
            return e.flags & 256 ? (re(e), e) : (re(e), null);
        }
        return re(e), (e.flags & 128) !== 0 ? (e.lanes = l, e) : (l = a !== null, t = t !== null && t.memoizedState !== null, l && (a = e.child, n = null, a.alternate !== null && a.alternate.memoizedState !== null && a.alternate.memoizedState.cachePool !== null && (n = a.alternate.memoizedState.cachePool.pool), u = null, a.memoizedState !== null && a.memoizedState.cachePool !== null && (u = a.memoizedState.cachePool.pool), u !== n && (a.flags |= 2048)), l !== t && l && (e.child.flags |= 8192), ju(e, e.updateQueue), _t(e), null);
      case 4:
        return Ot(), t === null && rf(e.stateNode.containerInfo), _t(e), null;
      case 10:
        return Ke(e.type), _t(e), null;
      case 19:
        if (M(Dt), a = e.memoizedState, a === null) return _t(e), null;
        if (n = (e.flags & 128) !== 0, u = a.rendering, u === null)
          if (n) mn(a, !1);
          else {
            if (Nt !== 0 || t !== null && (t.flags & 128) !== 0)
              for (t = e.child; t !== null; ) {
                if (u = mu(t), u !== null) {
                  for (e.flags |= 128, mn(a, !1), t = u.updateQueue, e.updateQueue = t, ju(e, t), e.subtreeFlags = 0, t = l, l = e.child; l !== null; )
                    ar(l, t), l = l.sibling;
                  return R(
                    Dt,
                    Dt.current & 1 | 2
                  ), ct && Ze(e, a.treeForkCount), e.child;
                }
                t = t.sibling;
              }
            a.tail !== null && ne() > Ou && (e.flags |= 128, n = !0, mn(a, !1), e.lanes = 4194304);
          }
        else {
          if (!n)
            if (t = mu(u), t !== null) {
              if (e.flags |= 128, n = !0, t = t.updateQueue, e.updateQueue = t, ju(e, t), mn(a, !0), a.tail === null && a.tailMode === "hidden" && !u.alternate && !ct)
                return _t(e), null;
            } else
              2 * ne() - a.renderingStartTime > Ou && l !== 536870912 && (e.flags |= 128, n = !0, mn(a, !1), e.lanes = 4194304);
          a.isBackwards ? (u.sibling = e.child, e.child = u) : (t = a.last, t !== null ? t.sibling = u : e.child = u, a.last = u);
        }
        return a.tail !== null ? (t = a.tail, a.rendering = t, a.tail = t.sibling, a.renderingStartTime = ne(), t.sibling = null, l = Dt.current, R(
          Dt,
          n ? l & 1 | 2 : l & 1
        ), ct && Ze(e, a.treeForkCount), t) : (_t(e), null);
      case 22:
      case 23:
        return re(e), rc(), a = e.memoizedState !== null, t !== null ? t.memoizedState !== null !== a && (e.flags |= 8192) : a && (e.flags |= 8192), a ? (l & 536870912) !== 0 && (e.flags & 128) === 0 && (_t(e), e.subtreeFlags & 6 && (e.flags |= 8192)) : _t(e), l = e.updateQueue, l !== null && ju(e, l.retryQueue), l = null, t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (l = t.memoizedState.cachePool.pool), a = null, e.memoizedState !== null && e.memoizedState.cachePool !== null && (a = e.memoizedState.cachePool.pool), a !== l && (e.flags |= 2048), t !== null && M(Xl), null;
      case 24:
        return l = null, t !== null && (l = t.memoizedState.cache), e.memoizedState.cache !== l && (e.flags |= 2048), Ke(Rt), _t(e), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(f(156, e.tag));
  }
  function hm(t, e) {
    switch ($i(e), e.tag) {
      case 1:
        return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 3:
        return Ke(Rt), Ot(), t = e.flags, (t & 65536) !== 0 && (t & 128) === 0 ? (e.flags = t & -65537 | 128, e) : null;
      case 26:
      case 27:
      case 5:
        return Bn(e), null;
      case 31:
        if (e.memoizedState !== null) {
          if (re(e), e.alternate === null)
            throw Error(f(340));
          Gl();
        }
        return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 13:
        if (re(e), t = e.memoizedState, t !== null && t.dehydrated !== null) {
          if (e.alternate === null)
            throw Error(f(340));
          Gl();
        }
        return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 19:
        return M(Dt), null;
      case 4:
        return Ot(), null;
      case 10:
        return Ke(e.type), null;
      case 22:
      case 23:
        return re(e), rc(), t !== null && M(Xl), t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 24:
        return Ke(Rt), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Oo(t, e) {
    switch ($i(e), e.tag) {
      case 3:
        Ke(Rt), Ot();
        break;
      case 26:
      case 27:
      case 5:
        Bn(e);
        break;
      case 4:
        Ot();
        break;
      case 31:
        e.memoizedState !== null && re(e);
        break;
      case 13:
        re(e);
        break;
      case 19:
        M(Dt);
        break;
      case 10:
        Ke(e.type);
        break;
      case 22:
      case 23:
        re(e), rc(), t !== null && M(Xl);
        break;
      case 24:
        Ke(Rt);
    }
  }
  function hn(t, e) {
    try {
      var l = e.updateQueue, a = l !== null ? l.lastEffect : null;
      if (a !== null) {
        var n = a.next;
        l = n;
        do {
          if ((l.tag & t) === t) {
            a = void 0;
            var u = l.create, i = l.inst;
            a = u(), i.destroy = a;
          }
          l = l.next;
        } while (l !== n);
      }
    } catch (s) {
      ht(e, e.return, s);
    }
  }
  function bl(t, e, l) {
    try {
      var a = e.updateQueue, n = a !== null ? a.lastEffect : null;
      if (n !== null) {
        var u = n.next;
        a = u;
        do {
          if ((a.tag & t) === t) {
            var i = a.inst, s = i.destroy;
            if (s !== void 0) {
              i.destroy = void 0, n = e;
              var m = l, p = s;
              try {
                p();
              } catch (_) {
                ht(
                  n,
                  m,
                  _
                );
              }
            }
          }
          a = a.next;
        } while (a !== u);
      }
    } catch (_) {
      ht(e, e.return, _);
    }
  }
  function Do(t) {
    var e = t.updateQueue;
    if (e !== null) {
      var l = t.stateNode;
      try {
        Sr(e, l);
      } catch (a) {
        ht(t, t.return, a);
      }
    }
  }
  function Uo(t, e, l) {
    l.props = kl(
      t.type,
      t.memoizedProps
    ), l.state = t.memoizedState;
    try {
      l.componentWillUnmount();
    } catch (a) {
      ht(t, e, a);
    }
  }
  function vn(t, e) {
    try {
      var l = t.ref;
      if (l !== null) {
        switch (t.tag) {
          case 26:
          case 27:
          case 5:
            var a = t.stateNode;
            break;
          case 30:
            a = t.stateNode;
            break;
          default:
            a = t.stateNode;
        }
        typeof l == "function" ? t.refCleanup = l(a) : l.current = a;
      }
    } catch (n) {
      ht(t, e, n);
    }
  }
  function Re(t, e) {
    var l = t.ref, a = t.refCleanup;
    if (l !== null)
      if (typeof a == "function")
        try {
          a();
        } catch (n) {
          ht(t, e, n);
        } finally {
          t.refCleanup = null, t = t.alternate, t != null && (t.refCleanup = null);
        }
      else if (typeof l == "function")
        try {
          l(null);
        } catch (n) {
          ht(t, e, n);
        }
      else l.current = null;
  }
  function Ro(t) {
    var e = t.type, l = t.memoizedProps, a = t.stateNode;
    try {
      t: switch (e) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          l.autoFocus && a.focus();
          break t;
        case "img":
          l.src ? a.src = l.src : l.srcSet && (a.srcset = l.srcSet);
      }
    } catch (n) {
      ht(t, t.return, n);
    }
  }
  function Qc(t, e, l) {
    try {
      var a = t.stateNode;
      qm(a, t.type, l, e), a[Ft] = e;
    } catch (n) {
      ht(t, t.return, n);
    }
  }
  function Ho(t) {
    return t.tag === 5 || t.tag === 3 || t.tag === 26 || t.tag === 27 && _l(t.type) || t.tag === 4;
  }
  function Xc(t) {
    t: for (; ; ) {
      for (; t.sibling === null; ) {
        if (t.return === null || Ho(t.return)) return null;
        t = t.return;
      }
      for (t.sibling.return = t.return, t = t.sibling; t.tag !== 5 && t.tag !== 6 && t.tag !== 18; ) {
        if (t.tag === 27 && _l(t.type) || t.flags & 2 || t.child === null || t.tag === 4) continue t;
        t.child.return = t, t = t.child;
      }
      if (!(t.flags & 2)) return t.stateNode;
    }
  }
  function Zc(t, e, l) {
    var a = t.tag;
    if (a === 5 || a === 6)
      t = t.stateNode, e ? (l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l).insertBefore(t, e) : (e = l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l, e.appendChild(t), l = l._reactRootContainer, l != null || e.onclick !== null || (e.onclick = we));
    else if (a !== 4 && (a === 27 && _l(t.type) && (l = t.stateNode, e = null), t = t.child, t !== null))
      for (Zc(t, e, l), t = t.sibling; t !== null; )
        Zc(t, e, l), t = t.sibling;
  }
  function Tu(t, e, l) {
    var a = t.tag;
    if (a === 5 || a === 6)
      t = t.stateNode, e ? l.insertBefore(t, e) : l.appendChild(t);
    else if (a !== 4 && (a === 27 && _l(t.type) && (l = t.stateNode), t = t.child, t !== null))
      for (Tu(t, e, l), t = t.sibling; t !== null; )
        Tu(t, e, l), t = t.sibling;
  }
  function qo(t) {
    var e = t.stateNode, l = t.memoizedProps;
    try {
      for (var a = t.type, n = e.attributes; n.length; )
        e.removeAttributeNode(n[0]);
      Vt(e, a, l), e[wt] = t, e[Ft] = l;
    } catch (u) {
      ht(t, t.return, u);
    }
  }
  var Fe = !1, Bt = !1, Vc = !1, Bo = typeof WeakSet == "function" ? WeakSet : Set, Gt = null;
  function vm(t, e) {
    if (t = t.containerInfo, mf = ku, t = ks(t), Yi(t)) {
      if ("selectionStart" in t)
        var l = {
          start: t.selectionStart,
          end: t.selectionEnd
        };
      else
        t: {
          l = (l = t.ownerDocument) && l.defaultView || window;
          var a = l.getSelection && l.getSelection();
          if (a && a.rangeCount !== 0) {
            l = a.anchorNode;
            var n = a.anchorOffset, u = a.focusNode;
            a = a.focusOffset;
            try {
              l.nodeType, u.nodeType;
            } catch {
              l = null;
              break t;
            }
            var i = 0, s = -1, m = -1, p = 0, _ = 0, T = t, S = null;
            e: for (; ; ) {
              for (var E; T !== l || n !== 0 && T.nodeType !== 3 || (s = i + n), T !== u || a !== 0 && T.nodeType !== 3 || (m = i + a), T.nodeType === 3 && (i += T.nodeValue.length), (E = T.firstChild) !== null; )
                S = T, T = E;
              for (; ; ) {
                if (T === t) break e;
                if (S === l && ++p === n && (s = i), S === u && ++_ === a && (m = i), (E = T.nextSibling) !== null) break;
                T = S, S = T.parentNode;
              }
              T = E;
            }
            l = s === -1 || m === -1 ? null : { start: s, end: m };
          } else l = null;
        }
      l = l || { start: 0, end: 0 };
    } else l = null;
    for (hf = { focusedElem: t, selectionRange: l }, ku = !1, Gt = e; Gt !== null; )
      if (e = Gt, t = e.child, (e.subtreeFlags & 1028) !== 0 && t !== null)
        t.return = e, Gt = t;
      else
        for (; Gt !== null; ) {
          switch (e = Gt, u = e.alternate, t = e.flags, e.tag) {
            case 0:
              if ((t & 4) !== 0 && (t = e.updateQueue, t = t !== null ? t.events : null, t !== null))
                for (l = 0; l < t.length; l++)
                  n = t[l], n.ref.impl = n.nextImpl;
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((t & 1024) !== 0 && u !== null) {
                t = void 0, l = e, n = u.memoizedProps, u = u.memoizedState, a = l.stateNode;
                try {
                  var B = kl(
                    l.type,
                    n
                  );
                  t = a.getSnapshotBeforeUpdate(
                    B,
                    u
                  ), a.__reactInternalSnapshotBeforeUpdate = t;
                } catch (X) {
                  ht(
                    l,
                    l.return,
                    X
                  );
                }
              }
              break;
            case 3:
              if ((t & 1024) !== 0) {
                if (t = e.stateNode.containerInfo, l = t.nodeType, l === 9)
                  bf(t);
                else if (l === 1)
                  switch (t.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      bf(t);
                      break;
                    default:
                      t.textContent = "";
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
              if ((t & 1024) !== 0) throw Error(f(163));
          }
          if (t = e.sibling, t !== null) {
            t.return = e.return, Gt = t;
            break;
          }
          Gt = e.return;
        }
  }
  function Yo(t, e, l) {
    var a = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        Pe(t, l), a & 4 && hn(5, l);
        break;
      case 1:
        if (Pe(t, l), a & 4)
          if (t = l.stateNode, e === null)
            try {
              t.componentDidMount();
            } catch (i) {
              ht(l, l.return, i);
            }
          else {
            var n = kl(
              l.type,
              e.memoizedProps
            );
            e = e.memoizedState;
            try {
              t.componentDidUpdate(
                n,
                e,
                t.__reactInternalSnapshotBeforeUpdate
              );
            } catch (i) {
              ht(
                l,
                l.return,
                i
              );
            }
          }
        a & 64 && Do(l), a & 512 && vn(l, l.return);
        break;
      case 3:
        if (Pe(t, l), a & 64 && (t = l.updateQueue, t !== null)) {
          if (e = null, l.child !== null)
            switch (l.child.tag) {
              case 27:
              case 5:
                e = l.child.stateNode;
                break;
              case 1:
                e = l.child.stateNode;
            }
          try {
            Sr(t, e);
          } catch (i) {
            ht(l, l.return, i);
          }
        }
        break;
      case 27:
        e === null && a & 4 && qo(l);
      case 26:
      case 5:
        Pe(t, l), e === null && a & 4 && Ro(l), a & 512 && vn(l, l.return);
        break;
      case 12:
        Pe(t, l);
        break;
      case 31:
        Pe(t, l), a & 4 && wo(t, l);
        break;
      case 13:
        Pe(t, l), a & 4 && Qo(t, l), a & 64 && (t = l.memoizedState, t !== null && (t = t.dehydrated, t !== null && (l = _m.bind(
          null,
          l
        ), Zm(t, l))));
        break;
      case 22:
        if (a = l.memoizedState !== null || Fe, !a) {
          e = e !== null && e.memoizedState !== null || Bt, n = Fe;
          var u = Bt;
          Fe = a, (Bt = e) && !u ? tl(
            t,
            l,
            (l.subtreeFlags & 8772) !== 0
          ) : Pe(t, l), Fe = n, Bt = u;
        }
        break;
      case 30:
        break;
      default:
        Pe(t, l);
    }
  }
  function Lo(t) {
    var e = t.alternate;
    e !== null && (t.alternate = null, Lo(e)), t.child = null, t.deletions = null, t.sibling = null, t.tag === 5 && (e = t.stateNode, e !== null && Si(e)), t.stateNode = null, t.return = null, t.dependencies = null, t.memoizedProps = null, t.memoizedState = null, t.pendingProps = null, t.stateNode = null, t.updateQueue = null;
  }
  var jt = null, Pt = !1;
  function Ie(t, e, l) {
    for (l = l.child; l !== null; )
      Go(t, e, l), l = l.sibling;
  }
  function Go(t, e, l) {
    if (ue && typeof ue.onCommitFiberUnmount == "function")
      try {
        ue.onCommitFiberUnmount(Ya, l);
      } catch {
      }
    switch (l.tag) {
      case 26:
        Bt || Re(l, e), Ie(
          t,
          e,
          l
        ), l.memoizedState ? l.memoizedState.count-- : l.stateNode && (l = l.stateNode, l.parentNode.removeChild(l));
        break;
      case 27:
        Bt || Re(l, e);
        var a = jt, n = Pt;
        _l(l.type) && (jt = l.stateNode, Pt = !1), Ie(
          t,
          e,
          l
        ), _n(l.stateNode), jt = a, Pt = n;
        break;
      case 5:
        Bt || Re(l, e);
      case 6:
        if (a = jt, n = Pt, jt = null, Ie(
          t,
          e,
          l
        ), jt = a, Pt = n, jt !== null)
          if (Pt)
            try {
              (jt.nodeType === 9 ? jt.body : jt.nodeName === "HTML" ? jt.ownerDocument.body : jt).removeChild(l.stateNode);
            } catch (u) {
              ht(
                l,
                e,
                u
              );
            }
          else
            try {
              jt.removeChild(l.stateNode);
            } catch (u) {
              ht(
                l,
                e,
                u
              );
            }
        break;
      case 18:
        jt !== null && (Pt ? (t = jt, Dd(
          t.nodeType === 9 ? t.body : t.nodeName === "HTML" ? t.ownerDocument.body : t,
          l.stateNode
        ), Ha(t)) : Dd(jt, l.stateNode));
        break;
      case 4:
        a = jt, n = Pt, jt = l.stateNode.containerInfo, Pt = !0, Ie(
          t,
          e,
          l
        ), jt = a, Pt = n;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        bl(2, l, e), Bt || bl(4, l, e), Ie(
          t,
          e,
          l
        );
        break;
      case 1:
        Bt || (Re(l, e), a = l.stateNode, typeof a.componentWillUnmount == "function" && Uo(
          l,
          e,
          a
        )), Ie(
          t,
          e,
          l
        );
        break;
      case 21:
        Ie(
          t,
          e,
          l
        );
        break;
      case 22:
        Bt = (a = Bt) || l.memoizedState !== null, Ie(
          t,
          e,
          l
        ), Bt = a;
        break;
      default:
        Ie(
          t,
          e,
          l
        );
    }
  }
  function wo(t, e) {
    if (e.memoizedState === null && (t = e.alternate, t !== null && (t = t.memoizedState, t !== null))) {
      t = t.dehydrated;
      try {
        Ha(t);
      } catch (l) {
        ht(e, e.return, l);
      }
    }
  }
  function Qo(t, e) {
    if (e.memoizedState === null && (t = e.alternate, t !== null && (t = t.memoizedState, t !== null && (t = t.dehydrated, t !== null))))
      try {
        Ha(t);
      } catch (l) {
        ht(e, e.return, l);
      }
  }
  function ym(t) {
    switch (t.tag) {
      case 31:
      case 13:
      case 19:
        var e = t.stateNode;
        return e === null && (e = t.stateNode = new Bo()), e;
      case 22:
        return t = t.stateNode, e = t._retryCache, e === null && (e = t._retryCache = new Bo()), e;
      default:
        throw Error(f(435, t.tag));
    }
  }
  function Nu(t, e) {
    var l = ym(t);
    e.forEach(function(a) {
      if (!l.has(a)) {
        l.add(a);
        var n = Am.bind(null, t, a);
        a.then(n, n);
      }
    });
  }
  function te(t, e) {
    var l = e.deletions;
    if (l !== null)
      for (var a = 0; a < l.length; a++) {
        var n = l[a], u = t, i = e, s = i;
        t: for (; s !== null; ) {
          switch (s.tag) {
            case 27:
              if (_l(s.type)) {
                jt = s.stateNode, Pt = !1;
                break t;
              }
              break;
            case 5:
              jt = s.stateNode, Pt = !1;
              break t;
            case 3:
            case 4:
              jt = s.stateNode.containerInfo, Pt = !0;
              break t;
          }
          s = s.return;
        }
        if (jt === null) throw Error(f(160));
        Go(u, i, n), jt = null, Pt = !1, u = n.alternate, u !== null && (u.return = null), n.return = null;
      }
    if (e.subtreeFlags & 13886)
      for (e = e.child; e !== null; )
        Xo(e, t), e = e.sibling;
  }
  var je = null;
  function Xo(t, e) {
    var l = t.alternate, a = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        te(e, t), ee(t), a & 4 && (bl(3, t, t.return), hn(3, t), bl(5, t, t.return));
        break;
      case 1:
        te(e, t), ee(t), a & 512 && (Bt || l === null || Re(l, l.return)), a & 64 && Fe && (t = t.updateQueue, t !== null && (a = t.callbacks, a !== null && (l = t.shared.hiddenCallbacks, t.shared.hiddenCallbacks = l === null ? a : l.concat(a))));
        break;
      case 26:
        var n = je;
        if (te(e, t), ee(t), a & 512 && (Bt || l === null || Re(l, l.return)), a & 4) {
          var u = l !== null ? l.memoizedState : null;
          if (a = t.memoizedState, l === null)
            if (a === null)
              if (t.stateNode === null) {
                t: {
                  a = t.type, l = t.memoizedProps, n = n.ownerDocument || n;
                  e: switch (a) {
                    case "title":
                      u = n.getElementsByTagName("title")[0], (!u || u[wa] || u[wt] || u.namespaceURI === "http://www.w3.org/2000/svg" || u.hasAttribute("itemprop")) && (u = n.createElement(a), n.head.insertBefore(
                        u,
                        n.querySelector("head > title")
                      )), Vt(u, a, l), u[wt] = t, Lt(u), a = u;
                      break t;
                    case "link":
                      var i = Xd(
                        "link",
                        "href",
                        n
                      ).get(a + (l.href || ""));
                      if (i) {
                        for (var s = 0; s < i.length; s++)
                          if (u = i[s], u.getAttribute("href") === (l.href == null || l.href === "" ? null : l.href) && u.getAttribute("rel") === (l.rel == null ? null : l.rel) && u.getAttribute("title") === (l.title == null ? null : l.title) && u.getAttribute("crossorigin") === (l.crossOrigin == null ? null : l.crossOrigin)) {
                            i.splice(s, 1);
                            break e;
                          }
                      }
                      u = n.createElement(a), Vt(u, a, l), n.head.appendChild(u);
                      break;
                    case "meta":
                      if (i = Xd(
                        "meta",
                        "content",
                        n
                      ).get(a + (l.content || ""))) {
                        for (s = 0; s < i.length; s++)
                          if (u = i[s], u.getAttribute("content") === (l.content == null ? null : "" + l.content) && u.getAttribute("name") === (l.name == null ? null : l.name) && u.getAttribute("property") === (l.property == null ? null : l.property) && u.getAttribute("http-equiv") === (l.httpEquiv == null ? null : l.httpEquiv) && u.getAttribute("charset") === (l.charSet == null ? null : l.charSet)) {
                            i.splice(s, 1);
                            break e;
                          }
                      }
                      u = n.createElement(a), Vt(u, a, l), n.head.appendChild(u);
                      break;
                    default:
                      throw Error(f(468, a));
                  }
                  u[wt] = t, Lt(u), a = u;
                }
                t.stateNode = a;
              } else
                Zd(
                  n,
                  t.type,
                  t.stateNode
                );
            else
              t.stateNode = Qd(
                n,
                a,
                t.memoizedProps
              );
          else
            u !== a ? (u === null ? l.stateNode !== null && (l = l.stateNode, l.parentNode.removeChild(l)) : u.count--, a === null ? Zd(
              n,
              t.type,
              t.stateNode
            ) : Qd(
              n,
              a,
              t.memoizedProps
            )) : a === null && t.stateNode !== null && Qc(
              t,
              t.memoizedProps,
              l.memoizedProps
            );
        }
        break;
      case 27:
        te(e, t), ee(t), a & 512 && (Bt || l === null || Re(l, l.return)), l !== null && a & 4 && Qc(
          t,
          t.memoizedProps,
          l.memoizedProps
        );
        break;
      case 5:
        if (te(e, t), ee(t), a & 512 && (Bt || l === null || Re(l, l.return)), t.flags & 32) {
          n = t.stateNode;
          try {
            na(n, "");
          } catch (B) {
            ht(t, t.return, B);
          }
        }
        a & 4 && t.stateNode != null && (n = t.memoizedProps, Qc(
          t,
          n,
          l !== null ? l.memoizedProps : n
        )), a & 1024 && (Vc = !0);
        break;
      case 6:
        if (te(e, t), ee(t), a & 4) {
          if (t.stateNode === null)
            throw Error(f(162));
          a = t.memoizedProps, l = t.stateNode;
          try {
            l.nodeValue = a;
          } catch (B) {
            ht(t, t.return, B);
          }
        }
        break;
      case 3:
        if (Zu = null, n = je, je = Qu(e.containerInfo), te(e, t), je = n, ee(t), a & 4 && l !== null && l.memoizedState.isDehydrated)
          try {
            Ha(e.containerInfo);
          } catch (B) {
            ht(t, t.return, B);
          }
        Vc && (Vc = !1, Zo(t));
        break;
      case 4:
        a = je, je = Qu(
          t.stateNode.containerInfo
        ), te(e, t), ee(t), je = a;
        break;
      case 12:
        te(e, t), ee(t);
        break;
      case 31:
        te(e, t), ee(t), a & 4 && (a = t.updateQueue, a !== null && (t.updateQueue = null, Nu(t, a)));
        break;
      case 13:
        te(e, t), ee(t), t.child.flags & 8192 && t.memoizedState !== null != (l !== null && l.memoizedState !== null) && (Mu = ne()), a & 4 && (a = t.updateQueue, a !== null && (t.updateQueue = null, Nu(t, a)));
        break;
      case 22:
        n = t.memoizedState !== null;
        var m = l !== null && l.memoizedState !== null, p = Fe, _ = Bt;
        if (Fe = p || n, Bt = _ || m, te(e, t), Bt = _, Fe = p, ee(t), a & 8192)
          t: for (e = t.stateNode, e._visibility = n ? e._visibility & -2 : e._visibility | 1, n && (l === null || m || Fe || Bt || $l(t)), l = null, e = t; ; ) {
            if (e.tag === 5 || e.tag === 26) {
              if (l === null) {
                m = l = e;
                try {
                  if (u = m.stateNode, n)
                    i = u.style, typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none";
                  else {
                    s = m.stateNode;
                    var T = m.memoizedProps.style, S = T != null && T.hasOwnProperty("display") ? T.display : null;
                    s.style.display = S == null || typeof S == "boolean" ? "" : ("" + S).trim();
                  }
                } catch (B) {
                  ht(m, m.return, B);
                }
              }
            } else if (e.tag === 6) {
              if (l === null) {
                m = e;
                try {
                  m.stateNode.nodeValue = n ? "" : m.memoizedProps;
                } catch (B) {
                  ht(m, m.return, B);
                }
              }
            } else if (e.tag === 18) {
              if (l === null) {
                m = e;
                try {
                  var E = m.stateNode;
                  n ? Ud(E, !0) : Ud(m.stateNode, !1);
                } catch (B) {
                  ht(m, m.return, B);
                }
              }
            } else if ((e.tag !== 22 && e.tag !== 23 || e.memoizedState === null || e === t) && e.child !== null) {
              e.child.return = e, e = e.child;
              continue;
            }
            if (e === t) break t;
            for (; e.sibling === null; ) {
              if (e.return === null || e.return === t) break t;
              l === e && (l = null), e = e.return;
            }
            l === e && (l = null), e.sibling.return = e.return, e = e.sibling;
          }
        a & 4 && (a = t.updateQueue, a !== null && (l = a.retryQueue, l !== null && (a.retryQueue = null, Nu(t, l))));
        break;
      case 19:
        te(e, t), ee(t), a & 4 && (a = t.updateQueue, a !== null && (t.updateQueue = null, Nu(t, a)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        te(e, t), ee(t);
    }
  }
  function ee(t) {
    var e = t.flags;
    if (e & 2) {
      try {
        for (var l, a = t.return; a !== null; ) {
          if (Ho(a)) {
            l = a;
            break;
          }
          a = a.return;
        }
        if (l == null) throw Error(f(160));
        switch (l.tag) {
          case 27:
            var n = l.stateNode, u = Xc(t);
            Tu(t, u, n);
            break;
          case 5:
            var i = l.stateNode;
            l.flags & 32 && (na(i, ""), l.flags &= -33);
            var s = Xc(t);
            Tu(t, s, i);
            break;
          case 3:
          case 4:
            var m = l.stateNode.containerInfo, p = Xc(t);
            Zc(
              t,
              p,
              m
            );
            break;
          default:
            throw Error(f(161));
        }
      } catch (_) {
        ht(t, t.return, _);
      }
      t.flags &= -3;
    }
    e & 4096 && (t.flags &= -4097);
  }
  function Zo(t) {
    if (t.subtreeFlags & 1024)
      for (t = t.child; t !== null; ) {
        var e = t;
        Zo(e), e.tag === 5 && e.flags & 1024 && e.stateNode.reset(), t = t.sibling;
      }
  }
  function Pe(t, e) {
    if (e.subtreeFlags & 8772)
      for (e = e.child; e !== null; )
        Yo(t, e.alternate, e), e = e.sibling;
  }
  function $l(t) {
    for (t = t.child; t !== null; ) {
      var e = t;
      switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          bl(4, e, e.return), $l(e);
          break;
        case 1:
          Re(e, e.return);
          var l = e.stateNode;
          typeof l.componentWillUnmount == "function" && Uo(
            e,
            e.return,
            l
          ), $l(e);
          break;
        case 27:
          _n(e.stateNode);
        case 26:
        case 5:
          Re(e, e.return), $l(e);
          break;
        case 22:
          e.memoizedState === null && $l(e);
          break;
        case 30:
          $l(e);
          break;
        default:
          $l(e);
      }
      t = t.sibling;
    }
  }
  function tl(t, e, l) {
    for (l = l && (e.subtreeFlags & 8772) !== 0, e = e.child; e !== null; ) {
      var a = e.alternate, n = t, u = e, i = u.flags;
      switch (u.tag) {
        case 0:
        case 11:
        case 15:
          tl(
            n,
            u,
            l
          ), hn(4, u);
          break;
        case 1:
          if (tl(
            n,
            u,
            l
          ), a = u, n = a.stateNode, typeof n.componentDidMount == "function")
            try {
              n.componentDidMount();
            } catch (p) {
              ht(a, a.return, p);
            }
          if (a = u, n = a.updateQueue, n !== null) {
            var s = a.stateNode;
            try {
              var m = n.shared.hiddenCallbacks;
              if (m !== null)
                for (n.shared.hiddenCallbacks = null, n = 0; n < m.length; n++)
                  xr(m[n], s);
            } catch (p) {
              ht(a, a.return, p);
            }
          }
          l && i & 64 && Do(u), vn(u, u.return);
          break;
        case 27:
          qo(u);
        case 26:
        case 5:
          tl(
            n,
            u,
            l
          ), l && a === null && i & 4 && Ro(u), vn(u, u.return);
          break;
        case 12:
          tl(
            n,
            u,
            l
          );
          break;
        case 31:
          tl(
            n,
            u,
            l
          ), l && i & 4 && wo(n, u);
          break;
        case 13:
          tl(
            n,
            u,
            l
          ), l && i & 4 && Qo(n, u);
          break;
        case 22:
          u.memoizedState === null && tl(
            n,
            u,
            l
          ), vn(u, u.return);
          break;
        case 30:
          break;
        default:
          tl(
            n,
            u,
            l
          );
      }
      e = e.sibling;
    }
  }
  function Kc(t, e) {
    var l = null;
    t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (l = t.memoizedState.cachePool.pool), t = null, e.memoizedState !== null && e.memoizedState.cachePool !== null && (t = e.memoizedState.cachePool.pool), t !== l && (t != null && t.refCount++, l != null && tn(l));
  }
  function Jc(t, e) {
    t = null, e.alternate !== null && (t = e.alternate.memoizedState.cache), e = e.memoizedState.cache, e !== t && (e.refCount++, t != null && tn(t));
  }
  function Te(t, e, l, a) {
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; )
        Vo(
          t,
          e,
          l,
          a
        ), e = e.sibling;
  }
  function Vo(t, e, l, a) {
    var n = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        Te(
          t,
          e,
          l,
          a
        ), n & 2048 && hn(9, e);
        break;
      case 1:
        Te(
          t,
          e,
          l,
          a
        );
        break;
      case 3:
        Te(
          t,
          e,
          l,
          a
        ), n & 2048 && (t = null, e.alternate !== null && (t = e.alternate.memoizedState.cache), e = e.memoizedState.cache, e !== t && (e.refCount++, t != null && tn(t)));
        break;
      case 12:
        if (n & 2048) {
          Te(
            t,
            e,
            l,
            a
          ), t = e.stateNode;
          try {
            var u = e.memoizedProps, i = u.id, s = u.onPostCommit;
            typeof s == "function" && s(
              i,
              e.alternate === null ? "mount" : "update",
              t.passiveEffectDuration,
              -0
            );
          } catch (m) {
            ht(e, e.return, m);
          }
        } else
          Te(
            t,
            e,
            l,
            a
          );
        break;
      case 31:
        Te(
          t,
          e,
          l,
          a
        );
        break;
      case 13:
        Te(
          t,
          e,
          l,
          a
        );
        break;
      case 23:
        break;
      case 22:
        u = e.stateNode, i = e.alternate, e.memoizedState !== null ? u._visibility & 2 ? Te(
          t,
          e,
          l,
          a
        ) : yn(t, e) : u._visibility & 2 ? Te(
          t,
          e,
          l,
          a
        ) : (u._visibility |= 2, _a(
          t,
          e,
          l,
          a,
          (e.subtreeFlags & 10256) !== 0 || !1
        )), n & 2048 && Kc(i, e);
        break;
      case 24:
        Te(
          t,
          e,
          l,
          a
        ), n & 2048 && Jc(e.alternate, e);
        break;
      default:
        Te(
          t,
          e,
          l,
          a
        );
    }
  }
  function _a(t, e, l, a, n) {
    for (n = n && ((e.subtreeFlags & 10256) !== 0 || !1), e = e.child; e !== null; ) {
      var u = t, i = e, s = l, m = a, p = i.flags;
      switch (i.tag) {
        case 0:
        case 11:
        case 15:
          _a(
            u,
            i,
            s,
            m,
            n
          ), hn(8, i);
          break;
        case 23:
          break;
        case 22:
          var _ = i.stateNode;
          i.memoizedState !== null ? _._visibility & 2 ? _a(
            u,
            i,
            s,
            m,
            n
          ) : yn(
            u,
            i
          ) : (_._visibility |= 2, _a(
            u,
            i,
            s,
            m,
            n
          )), n && p & 2048 && Kc(
            i.alternate,
            i
          );
          break;
        case 24:
          _a(
            u,
            i,
            s,
            m,
            n
          ), n && p & 2048 && Jc(i.alternate, i);
          break;
        default:
          _a(
            u,
            i,
            s,
            m,
            n
          );
      }
      e = e.sibling;
    }
  }
  function yn(t, e) {
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; ) {
        var l = t, a = e, n = a.flags;
        switch (a.tag) {
          case 22:
            yn(l, a), n & 2048 && Kc(
              a.alternate,
              a
            );
            break;
          case 24:
            yn(l, a), n & 2048 && Jc(a.alternate, a);
            break;
          default:
            yn(l, a);
        }
        e = e.sibling;
      }
  }
  var bn = 8192;
  function Aa(t, e, l) {
    if (t.subtreeFlags & bn)
      for (t = t.child; t !== null; )
        Ko(
          t,
          e,
          l
        ), t = t.sibling;
  }
  function Ko(t, e, l) {
    switch (t.tag) {
      case 26:
        Aa(
          t,
          e,
          l
        ), t.flags & bn && t.memoizedState !== null && lh(
          l,
          je,
          t.memoizedState,
          t.memoizedProps
        );
        break;
      case 5:
        Aa(
          t,
          e,
          l
        );
        break;
      case 3:
      case 4:
        var a = je;
        je = Qu(t.stateNode.containerInfo), Aa(
          t,
          e,
          l
        ), je = a;
        break;
      case 22:
        t.memoizedState === null && (a = t.alternate, a !== null && a.memoizedState !== null ? (a = bn, bn = 16777216, Aa(
          t,
          e,
          l
        ), bn = a) : Aa(
          t,
          e,
          l
        ));
        break;
      default:
        Aa(
          t,
          e,
          l
        );
    }
  }
  function Jo(t) {
    var e = t.alternate;
    if (e !== null && (t = e.child, t !== null)) {
      e.child = null;
      do
        e = t.sibling, t.sibling = null, t = e;
      while (t !== null);
    }
  }
  function gn(t) {
    var e = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (e !== null)
        for (var l = 0; l < e.length; l++) {
          var a = e[l];
          Gt = a, $o(
            a,
            t
          );
        }
      Jo(t);
    }
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; )
        ko(t), t = t.sibling;
  }
  function ko(t) {
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        gn(t), t.flags & 2048 && bl(9, t, t.return);
        break;
      case 3:
        gn(t);
        break;
      case 12:
        gn(t);
        break;
      case 22:
        var e = t.stateNode;
        t.memoizedState !== null && e._visibility & 2 && (t.return === null || t.return.tag !== 13) ? (e._visibility &= -3, Cu(t)) : gn(t);
        break;
      default:
        gn(t);
    }
  }
  function Cu(t) {
    var e = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (e !== null)
        for (var l = 0; l < e.length; l++) {
          var a = e[l];
          Gt = a, $o(
            a,
            t
          );
        }
      Jo(t);
    }
    for (t = t.child; t !== null; ) {
      switch (e = t, e.tag) {
        case 0:
        case 11:
        case 15:
          bl(8, e, e.return), Cu(e);
          break;
        case 22:
          l = e.stateNode, l._visibility & 2 && (l._visibility &= -3, Cu(e));
          break;
        default:
          Cu(e);
      }
      t = t.sibling;
    }
  }
  function $o(t, e) {
    for (; Gt !== null; ) {
      var l = Gt;
      switch (l.tag) {
        case 0:
        case 11:
        case 15:
          bl(8, l, e);
          break;
        case 23:
        case 22:
          if (l.memoizedState !== null && l.memoizedState.cachePool !== null) {
            var a = l.memoizedState.cachePool.pool;
            a != null && a.refCount++;
          }
          break;
        case 24:
          tn(l.memoizedState.cache);
      }
      if (a = l.child, a !== null) a.return = l, Gt = a;
      else
        t: for (l = t; Gt !== null; ) {
          a = Gt;
          var n = a.sibling, u = a.return;
          if (Lo(a), a === l) {
            Gt = null;
            break t;
          }
          if (n !== null) {
            n.return = u, Gt = n;
            break t;
          }
          Gt = u;
        }
    }
  }
  var bm = {
    getCacheForType: function(t) {
      var e = Xt(Rt), l = e.data.get(t);
      return l === void 0 && (l = t(), e.data.set(t, l)), l;
    },
    cacheSignal: function() {
      return Xt(Rt).controller.signal;
    }
  }, gm = typeof WeakMap == "function" ? WeakMap : Map, ot = 0, St = null, at = null, ut = 0, mt = 0, oe = null, gl = !1, ja = !1, kc = !1, el = 0, Nt = 0, pl = 0, Wl = 0, $c = 0, de = 0, Ta = 0, pn = null, le = null, Wc = !1, Mu = 0, Wo = 0, Ou = 1 / 0, Du = null, xl = null, Yt = 0, Sl = null, Na = null, ll = 0, Fc = 0, Ic = null, Fo = null, xn = 0, Pc = null;
  function me() {
    return (ot & 2) !== 0 && ut !== 0 ? ut & -ut : A.T !== null ? uf() : ds();
  }
  function Io() {
    if (de === 0)
      if ((ut & 536870912) === 0 || ct) {
        var t = Gn;
        Gn <<= 1, (Gn & 3932160) === 0 && (Gn = 262144), de = t;
      } else de = 536870912;
    return t = se.current, t !== null && (t.flags |= 32), de;
  }
  function ae(t, e, l) {
    (t === St && (mt === 2 || mt === 9) || t.cancelPendingCommit !== null) && (Ca(t, 0), El(
      t,
      ut,
      de,
      !1
    )), Ga(t, l), ((ot & 2) === 0 || t !== St) && (t === St && ((ot & 2) === 0 && (Wl |= l), Nt === 4 && El(
      t,
      ut,
      de,
      !1
    )), He(t));
  }
  function Po(t, e, l) {
    if ((ot & 6) !== 0) throw Error(f(327));
    var a = !l && (e & 127) === 0 && (e & t.expiredLanes) === 0 || La(t, e), n = a ? Sm(t, e) : ef(t, e, !0), u = a;
    do {
      if (n === 0) {
        ja && !a && El(t, e, 0, !1);
        break;
      } else {
        if (l = t.current.alternate, u && !pm(l)) {
          n = ef(t, e, !1), u = !1;
          continue;
        }
        if (n === 2) {
          if (u = e, t.errorRecoveryDisabledLanes & u)
            var i = 0;
          else
            i = t.pendingLanes & -536870913, i = i !== 0 ? i : i & 536870912 ? 536870912 : 0;
          if (i !== 0) {
            e = i;
            t: {
              var s = t;
              n = pn;
              var m = s.current.memoizedState.isDehydrated;
              if (m && (Ca(s, i).flags |= 256), i = ef(
                s,
                i,
                !1
              ), i !== 2) {
                if (kc && !m) {
                  s.errorRecoveryDisabledLanes |= u, Wl |= u, n = 4;
                  break t;
                }
                u = le, le = n, u !== null && (le === null ? le = u : le.push.apply(
                  le,
                  u
                ));
              }
              n = i;
            }
            if (u = !1, n !== 2) continue;
          }
        }
        if (n === 1) {
          Ca(t, 0), El(t, e, 0, !0);
          break;
        }
        t: {
          switch (a = t, u = n, u) {
            case 0:
            case 1:
              throw Error(f(345));
            case 4:
              if ((e & 4194048) !== e) break;
            case 6:
              El(
                a,
                e,
                de,
                !gl
              );
              break t;
            case 2:
              le = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(f(329));
          }
          if ((e & 62914560) === e && (n = Mu + 300 - ne(), 10 < n)) {
            if (El(
              a,
              e,
              de,
              !gl
            ), Qn(a, 0, !0) !== 0) break t;
            ll = e, a.timeoutHandle = Md(
              td.bind(
                null,
                a,
                l,
                le,
                Du,
                Wc,
                e,
                de,
                Wl,
                Ta,
                gl,
                u,
                "Throttled",
                -0,
                0
              ),
              n
            );
            break t;
          }
          td(
            a,
            l,
            le,
            Du,
            Wc,
            e,
            de,
            Wl,
            Ta,
            gl,
            u,
            null,
            -0,
            0
          );
        }
      }
      break;
    } while (!0);
    He(t);
  }
  function td(t, e, l, a, n, u, i, s, m, p, _, T, S, E) {
    if (t.timeoutHandle = -1, T = e.subtreeFlags, T & 8192 || (T & 16785408) === 16785408) {
      T = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: we
      }, Ko(
        e,
        u,
        T
      );
      var B = (u & 62914560) === u ? Mu - ne() : (u & 4194048) === u ? Wo - ne() : 0;
      if (B = ah(
        T,
        B
      ), B !== null) {
        ll = u, t.cancelPendingCommit = B(
          fd.bind(
            null,
            t,
            e,
            u,
            l,
            a,
            n,
            i,
            s,
            m,
            _,
            T,
            null,
            S,
            E
          )
        ), El(t, u, i, !p);
        return;
      }
    }
    fd(
      t,
      e,
      u,
      l,
      a,
      n,
      i,
      s,
      m
    );
  }
  function pm(t) {
    for (var e = t; ; ) {
      var l = e.tag;
      if ((l === 0 || l === 11 || l === 15) && e.flags & 16384 && (l = e.updateQueue, l !== null && (l = l.stores, l !== null)))
        for (var a = 0; a < l.length; a++) {
          var n = l[a], u = n.getSnapshot;
          n = n.value;
          try {
            if (!ce(u(), n)) return !1;
          } catch {
            return !1;
          }
        }
      if (l = e.child, e.subtreeFlags & 16384 && l !== null)
        l.return = e, e = l;
      else {
        if (e === t) break;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) return !0;
          e = e.return;
        }
        e.sibling.return = e.return, e = e.sibling;
      }
    }
    return !0;
  }
  function El(t, e, l, a) {
    e &= ~$c, e &= ~Wl, t.suspendedLanes |= e, t.pingedLanes &= ~e, a && (t.warmLanes |= e), a = t.expirationTimes;
    for (var n = e; 0 < n; ) {
      var u = 31 - ie(n), i = 1 << u;
      a[u] = -1, n &= ~i;
    }
    l !== 0 && ss(t, l, e);
  }
  function Uu() {
    return (ot & 6) === 0 ? (Sn(0), !1) : !0;
  }
  function tf() {
    if (at !== null) {
      if (mt === 0)
        var t = at.return;
      else
        t = at, Ve = wl = null, yc(t), pa = null, ln = 0, t = at;
      for (; t !== null; )
        Oo(t.alternate, t), t = t.return;
      at = null;
    }
  }
  function Ca(t, e) {
    var l = t.timeoutHandle;
    l !== -1 && (t.timeoutHandle = -1, Lm(l)), l = t.cancelPendingCommit, l !== null && (t.cancelPendingCommit = null, l()), ll = 0, tf(), St = t, at = l = Xe(t.current, null), ut = e, mt = 0, oe = null, gl = !1, ja = La(t, e), kc = !1, Ta = de = $c = Wl = pl = Nt = 0, le = pn = null, Wc = !1, (e & 8) !== 0 && (e |= e & 32);
    var a = t.entangledLanes;
    if (a !== 0)
      for (t = t.entanglements, a &= e; 0 < a; ) {
        var n = 31 - ie(a), u = 1 << n;
        e |= t[n], a &= ~u;
      }
    return el = e, tu(), l;
  }
  function ed(t, e) {
    W = null, A.H = on, e === ga || e === fu ? (e = yr(), mt = 3) : e === nc ? (e = yr(), mt = 4) : mt = e === Dc ? 8 : e !== null && typeof e == "object" && typeof e.then == "function" ? 6 : 1, oe = e, at === null && (Nt = 1, Eu(
      t,
      be(e, t.current)
    ));
  }
  function ld() {
    var t = se.current;
    return t === null ? !0 : (ut & 4194048) === ut ? Se === null : (ut & 62914560) === ut || (ut & 536870912) !== 0 ? t === Se : !1;
  }
  function ad() {
    var t = A.H;
    return A.H = on, t === null ? on : t;
  }
  function nd() {
    var t = A.A;
    return A.A = bm, t;
  }
  function Ru() {
    Nt = 4, gl || (ut & 4194048) !== ut && se.current !== null || (ja = !0), (pl & 134217727) === 0 && (Wl & 134217727) === 0 || St === null || El(
      St,
      ut,
      de,
      !1
    );
  }
  function ef(t, e, l) {
    var a = ot;
    ot |= 2;
    var n = ad(), u = nd();
    (St !== t || ut !== e) && (Du = null, Ca(t, e)), e = !1;
    var i = Nt;
    t: do
      try {
        if (mt !== 0 && at !== null) {
          var s = at, m = oe;
          switch (mt) {
            case 8:
              tf(), i = 6;
              break t;
            case 3:
            case 2:
            case 9:
            case 6:
              se.current === null && (e = !0);
              var p = mt;
              if (mt = 0, oe = null, Ma(t, s, m, p), l && ja) {
                i = 0;
                break t;
              }
              break;
            default:
              p = mt, mt = 0, oe = null, Ma(t, s, m, p);
          }
        }
        xm(), i = Nt;
        break;
      } catch (_) {
        ed(t, _);
      }
    while (!0);
    return e && t.shellSuspendCounter++, Ve = wl = null, ot = a, A.H = n, A.A = u, at === null && (St = null, ut = 0, tu()), i;
  }
  function xm() {
    for (; at !== null; ) ud(at);
  }
  function Sm(t, e) {
    var l = ot;
    ot |= 2;
    var a = ad(), n = nd();
    St !== t || ut !== e ? (Du = null, Ou = ne() + 500, Ca(t, e)) : ja = La(
      t,
      e
    );
    t: do
      try {
        if (mt !== 0 && at !== null) {
          e = at;
          var u = oe;
          e: switch (mt) {
            case 1:
              mt = 0, oe = null, Ma(t, e, u, 1);
              break;
            case 2:
            case 9:
              if (hr(u)) {
                mt = 0, oe = null, id(e);
                break;
              }
              e = function() {
                mt !== 2 && mt !== 9 || St !== t || (mt = 7), He(t);
              }, u.then(e, e);
              break t;
            case 3:
              mt = 7;
              break t;
            case 4:
              mt = 5;
              break t;
            case 7:
              hr(u) ? (mt = 0, oe = null, id(e)) : (mt = 0, oe = null, Ma(t, e, u, 7));
              break;
            case 5:
              var i = null;
              switch (at.tag) {
                case 26:
                  i = at.memoizedState;
                case 5:
                case 27:
                  var s = at;
                  if (i ? Vd(i) : s.stateNode.complete) {
                    mt = 0, oe = null;
                    var m = s.sibling;
                    if (m !== null) at = m;
                    else {
                      var p = s.return;
                      p !== null ? (at = p, Hu(p)) : at = null;
                    }
                    break e;
                  }
              }
              mt = 0, oe = null, Ma(t, e, u, 5);
              break;
            case 6:
              mt = 0, oe = null, Ma(t, e, u, 6);
              break;
            case 8:
              tf(), Nt = 6;
              break t;
            default:
              throw Error(f(462));
          }
        }
        Em();
        break;
      } catch (_) {
        ed(t, _);
      }
    while (!0);
    return Ve = wl = null, A.H = a, A.A = n, ot = l, at !== null ? 0 : (St = null, ut = 0, tu(), Nt);
  }
  function Em() {
    for (; at !== null && !V0(); )
      ud(at);
  }
  function ud(t) {
    var e = Co(t.alternate, t, el);
    t.memoizedProps = t.pendingProps, e === null ? Hu(t) : at = e;
  }
  function id(t) {
    var e = t, l = e.alternate;
    switch (e.tag) {
      case 15:
      case 0:
        e = zo(
          l,
          e,
          e.pendingProps,
          e.type,
          void 0,
          ut
        );
        break;
      case 11:
        e = zo(
          l,
          e,
          e.pendingProps,
          e.type.render,
          e.ref,
          ut
        );
        break;
      case 5:
        yc(e);
      default:
        Oo(l, e), e = at = ar(e, el), e = Co(l, e, el);
    }
    t.memoizedProps = t.pendingProps, e === null ? Hu(t) : at = e;
  }
  function Ma(t, e, l, a) {
    Ve = wl = null, yc(e), pa = null, ln = 0;
    var n = e.return;
    try {
      if (rm(
        t,
        n,
        e,
        l,
        ut
      )) {
        Nt = 1, Eu(
          t,
          be(l, t.current)
        ), at = null;
        return;
      }
    } catch (u) {
      if (n !== null) throw at = n, u;
      Nt = 1, Eu(
        t,
        be(l, t.current)
      ), at = null;
      return;
    }
    e.flags & 32768 ? (ct || a === 1 ? t = !0 : ja || (ut & 536870912) !== 0 ? t = !1 : (gl = t = !0, (a === 2 || a === 9 || a === 3 || a === 6) && (a = se.current, a !== null && a.tag === 13 && (a.flags |= 16384))), cd(e, t)) : Hu(e);
  }
  function Hu(t) {
    var e = t;
    do {
      if ((e.flags & 32768) !== 0) {
        cd(
          e,
          gl
        );
        return;
      }
      t = e.return;
      var l = mm(
        e.alternate,
        e,
        el
      );
      if (l !== null) {
        at = l;
        return;
      }
      if (e = e.sibling, e !== null) {
        at = e;
        return;
      }
      at = e = t;
    } while (e !== null);
    Nt === 0 && (Nt = 5);
  }
  function cd(t, e) {
    do {
      var l = hm(t.alternate, t);
      if (l !== null) {
        l.flags &= 32767, at = l;
        return;
      }
      if (l = t.return, l !== null && (l.flags |= 32768, l.subtreeFlags = 0, l.deletions = null), !e && (t = t.sibling, t !== null)) {
        at = t;
        return;
      }
      at = t = l;
    } while (t !== null);
    Nt = 6, at = null;
  }
  function fd(t, e, l, a, n, u, i, s, m) {
    t.cancelPendingCommit = null;
    do
      qu();
    while (Yt !== 0);
    if ((ot & 6) !== 0) throw Error(f(327));
    if (e !== null) {
      if (e === t.current) throw Error(f(177));
      if (u = e.lanes | e.childLanes, u |= Xi, e1(
        t,
        l,
        u,
        i,
        s,
        m
      ), t === St && (at = St = null, ut = 0), Na = e, Sl = t, ll = l, Fc = u, Ic = n, Fo = a, (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0 ? (t.callbackNode = null, t.callbackPriority = 0, jm(Yn, function() {
        return md(), null;
      })) : (t.callbackNode = null, t.callbackPriority = 0), a = (e.flags & 13878) !== 0, (e.subtreeFlags & 13878) !== 0 || a) {
        a = A.T, A.T = null, n = U.p, U.p = 2, i = ot, ot |= 4;
        try {
          vm(t, e, l);
        } finally {
          ot = i, U.p = n, A.T = a;
        }
      }
      Yt = 1, sd(), rd(), od();
    }
  }
  function sd() {
    if (Yt === 1) {
      Yt = 0;
      var t = Sl, e = Na, l = (e.flags & 13878) !== 0;
      if ((e.subtreeFlags & 13878) !== 0 || l) {
        l = A.T, A.T = null;
        var a = U.p;
        U.p = 2;
        var n = ot;
        ot |= 4;
        try {
          Xo(e, t);
          var u = hf, i = ks(t.containerInfo), s = u.focusedElem, m = u.selectionRange;
          if (i !== s && s && s.ownerDocument && Js(
            s.ownerDocument.documentElement,
            s
          )) {
            if (m !== null && Yi(s)) {
              var p = m.start, _ = m.end;
              if (_ === void 0 && (_ = p), "selectionStart" in s)
                s.selectionStart = p, s.selectionEnd = Math.min(
                  _,
                  s.value.length
                );
              else {
                var T = s.ownerDocument || document, S = T && T.defaultView || window;
                if (S.getSelection) {
                  var E = S.getSelection(), B = s.textContent.length, X = Math.min(m.start, B), pt = m.end === void 0 ? X : Math.min(m.end, B);
                  !E.extend && X > pt && (i = pt, pt = X, X = i);
                  var y = Ks(
                    s,
                    X
                  ), h = Ks(
                    s,
                    pt
                  );
                  if (y && h && (E.rangeCount !== 1 || E.anchorNode !== y.node || E.anchorOffset !== y.offset || E.focusNode !== h.node || E.focusOffset !== h.offset)) {
                    var g = T.createRange();
                    g.setStart(y.node, y.offset), E.removeAllRanges(), X > pt ? (E.addRange(g), E.extend(h.node, h.offset)) : (g.setEnd(h.node, h.offset), E.addRange(g));
                  }
                }
              }
            }
            for (T = [], E = s; E = E.parentNode; )
              E.nodeType === 1 && T.push({
                element: E,
                left: E.scrollLeft,
                top: E.scrollTop
              });
            for (typeof s.focus == "function" && s.focus(), s = 0; s < T.length; s++) {
              var j = T[s];
              j.element.scrollLeft = j.left, j.element.scrollTop = j.top;
            }
          }
          ku = !!mf, hf = mf = null;
        } finally {
          ot = n, U.p = a, A.T = l;
        }
      }
      t.current = e, Yt = 2;
    }
  }
  function rd() {
    if (Yt === 2) {
      Yt = 0;
      var t = Sl, e = Na, l = (e.flags & 8772) !== 0;
      if ((e.subtreeFlags & 8772) !== 0 || l) {
        l = A.T, A.T = null;
        var a = U.p;
        U.p = 2;
        var n = ot;
        ot |= 4;
        try {
          Yo(t, e.alternate, e);
        } finally {
          ot = n, U.p = a, A.T = l;
        }
      }
      Yt = 3;
    }
  }
  function od() {
    if (Yt === 4 || Yt === 3) {
      Yt = 0, K0();
      var t = Sl, e = Na, l = ll, a = Fo;
      (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0 ? Yt = 5 : (Yt = 0, Na = Sl = null, dd(t, t.pendingLanes));
      var n = t.pendingLanes;
      if (n === 0 && (xl = null), pi(l), e = e.stateNode, ue && typeof ue.onCommitFiberRoot == "function")
        try {
          ue.onCommitFiberRoot(
            Ya,
            e,
            void 0,
            (e.current.flags & 128) === 128
          );
        } catch {
        }
      if (a !== null) {
        e = A.T, n = U.p, U.p = 2, A.T = null;
        try {
          for (var u = t.onRecoverableError, i = 0; i < a.length; i++) {
            var s = a[i];
            u(s.value, {
              componentStack: s.stack
            });
          }
        } finally {
          A.T = e, U.p = n;
        }
      }
      (ll & 3) !== 0 && qu(), He(t), n = t.pendingLanes, (l & 261930) !== 0 && (n & 42) !== 0 ? t === Pc ? xn++ : (xn = 0, Pc = t) : xn = 0, Sn(0);
    }
  }
  function dd(t, e) {
    (t.pooledCacheLanes &= e) === 0 && (e = t.pooledCache, e != null && (t.pooledCache = null, tn(e)));
  }
  function qu() {
    return sd(), rd(), od(), md();
  }
  function md() {
    if (Yt !== 5) return !1;
    var t = Sl, e = Fc;
    Fc = 0;
    var l = pi(ll), a = A.T, n = U.p;
    try {
      U.p = 32 > l ? 32 : l, A.T = null, l = Ic, Ic = null;
      var u = Sl, i = ll;
      if (Yt = 0, Na = Sl = null, ll = 0, (ot & 6) !== 0) throw Error(f(331));
      var s = ot;
      if (ot |= 4, ko(u.current), Vo(
        u,
        u.current,
        i,
        l
      ), ot = s, Sn(0, !1), ue && typeof ue.onPostCommitFiberRoot == "function")
        try {
          ue.onPostCommitFiberRoot(Ya, u);
        } catch {
        }
      return !0;
    } finally {
      U.p = n, A.T = a, dd(t, e);
    }
  }
  function hd(t, e, l) {
    e = be(l, e), e = Oc(t.stateNode, e, 2), t = hl(t, e, 2), t !== null && (Ga(t, 2), He(t));
  }
  function ht(t, e, l) {
    if (t.tag === 3)
      hd(t, t, l);
    else
      for (; e !== null; ) {
        if (e.tag === 3) {
          hd(
            e,
            t,
            l
          );
          break;
        } else if (e.tag === 1) {
          var a = e.stateNode;
          if (typeof e.type.getDerivedStateFromError == "function" || typeof a.componentDidCatch == "function" && (xl === null || !xl.has(a))) {
            t = be(l, t), l = vo(2), a = hl(e, l, 2), a !== null && (yo(
              l,
              a,
              e,
              t
            ), Ga(a, 2), He(a));
            break;
          }
        }
        e = e.return;
      }
  }
  function lf(t, e, l) {
    var a = t.pingCache;
    if (a === null) {
      a = t.pingCache = new gm();
      var n = /* @__PURE__ */ new Set();
      a.set(e, n);
    } else
      n = a.get(e), n === void 0 && (n = /* @__PURE__ */ new Set(), a.set(e, n));
    n.has(l) || (kc = !0, n.add(l), t = zm.bind(null, t, e, l), e.then(t, t));
  }
  function zm(t, e, l) {
    var a = t.pingCache;
    a !== null && a.delete(e), t.pingedLanes |= t.suspendedLanes & l, t.warmLanes &= ~l, St === t && (ut & l) === l && (Nt === 4 || Nt === 3 && (ut & 62914560) === ut && 300 > ne() - Mu ? (ot & 2) === 0 && Ca(t, 0) : $c |= l, Ta === ut && (Ta = 0)), He(t);
  }
  function vd(t, e) {
    e === 0 && (e = fs()), t = Yl(t, e), t !== null && (Ga(t, e), He(t));
  }
  function _m(t) {
    var e = t.memoizedState, l = 0;
    e !== null && (l = e.retryLane), vd(t, l);
  }
  function Am(t, e) {
    var l = 0;
    switch (t.tag) {
      case 31:
      case 13:
        var a = t.stateNode, n = t.memoizedState;
        n !== null && (l = n.retryLane);
        break;
      case 19:
        a = t.stateNode;
        break;
      case 22:
        a = t.stateNode._retryCache;
        break;
      default:
        throw Error(f(314));
    }
    a !== null && a.delete(e), vd(t, l);
  }
  function jm(t, e) {
    return vi(t, e);
  }
  var Bu = null, Oa = null, af = !1, Yu = !1, nf = !1, zl = 0;
  function He(t) {
    t !== Oa && t.next === null && (Oa === null ? Bu = Oa = t : Oa = Oa.next = t), Yu = !0, af || (af = !0, Nm());
  }
  function Sn(t, e) {
    if (!nf && Yu) {
      nf = !0;
      do
        for (var l = !1, a = Bu; a !== null; ) {
          if (t !== 0) {
            var n = a.pendingLanes;
            if (n === 0) var u = 0;
            else {
              var i = a.suspendedLanes, s = a.pingedLanes;
              u = (1 << 31 - ie(42 | t) + 1) - 1, u &= n & ~(i & ~s), u = u & 201326741 ? u & 201326741 | 1 : u ? u | 2 : 0;
            }
            u !== 0 && (l = !0, pd(a, u));
          } else
            u = ut, u = Qn(
              a,
              a === St ? u : 0,
              a.cancelPendingCommit !== null || a.timeoutHandle !== -1
            ), (u & 3) === 0 || La(a, u) || (l = !0, pd(a, u));
          a = a.next;
        }
      while (l);
      nf = !1;
    }
  }
  function Tm() {
    yd();
  }
  function yd() {
    Yu = af = !1;
    var t = 0;
    zl !== 0 && Ym() && (t = zl);
    for (var e = ne(), l = null, a = Bu; a !== null; ) {
      var n = a.next, u = bd(a, e);
      u === 0 ? (a.next = null, l === null ? Bu = n : l.next = n, n === null && (Oa = l)) : (l = a, (t !== 0 || (u & 3) !== 0) && (Yu = !0)), a = n;
    }
    Yt !== 0 && Yt !== 5 || Sn(t), zl !== 0 && (zl = 0);
  }
  function bd(t, e) {
    for (var l = t.suspendedLanes, a = t.pingedLanes, n = t.expirationTimes, u = t.pendingLanes & -62914561; 0 < u; ) {
      var i = 31 - ie(u), s = 1 << i, m = n[i];
      m === -1 ? ((s & l) === 0 || (s & a) !== 0) && (n[i] = t1(s, e)) : m <= e && (t.expiredLanes |= s), u &= ~s;
    }
    if (e = St, l = ut, l = Qn(
      t,
      t === e ? l : 0,
      t.cancelPendingCommit !== null || t.timeoutHandle !== -1
    ), a = t.callbackNode, l === 0 || t === e && (mt === 2 || mt === 9) || t.cancelPendingCommit !== null)
      return a !== null && a !== null && yi(a), t.callbackNode = null, t.callbackPriority = 0;
    if ((l & 3) === 0 || La(t, l)) {
      if (e = l & -l, e === t.callbackPriority) return e;
      switch (a !== null && yi(a), pi(l)) {
        case 2:
        case 8:
          l = is;
          break;
        case 32:
          l = Yn;
          break;
        case 268435456:
          l = cs;
          break;
        default:
          l = Yn;
      }
      return a = gd.bind(null, t), l = vi(l, a), t.callbackPriority = e, t.callbackNode = l, e;
    }
    return a !== null && a !== null && yi(a), t.callbackPriority = 2, t.callbackNode = null, 2;
  }
  function gd(t, e) {
    if (Yt !== 0 && Yt !== 5)
      return t.callbackNode = null, t.callbackPriority = 0, null;
    var l = t.callbackNode;
    if (qu() && t.callbackNode !== l)
      return null;
    var a = ut;
    return a = Qn(
      t,
      t === St ? a : 0,
      t.cancelPendingCommit !== null || t.timeoutHandle !== -1
    ), a === 0 ? null : (Po(t, a, e), bd(t, ne()), t.callbackNode != null && t.callbackNode === l ? gd.bind(null, t) : null);
  }
  function pd(t, e) {
    if (qu()) return null;
    Po(t, e, !0);
  }
  function Nm() {
    Gm(function() {
      (ot & 6) !== 0 ? vi(
        us,
        Tm
      ) : yd();
    });
  }
  function uf() {
    if (zl === 0) {
      var t = ya;
      t === 0 && (t = Ln, Ln <<= 1, (Ln & 261888) === 0 && (Ln = 256)), zl = t;
    }
    return zl;
  }
  function xd(t) {
    return t == null || typeof t == "symbol" || typeof t == "boolean" ? null : typeof t == "function" ? t : Kn("" + t);
  }
  function Sd(t, e) {
    var l = e.ownerDocument.createElement("input");
    return l.name = e.name, l.value = e.value, t.id && l.setAttribute("form", t.id), e.parentNode.insertBefore(l, e), t = new FormData(t), l.parentNode.removeChild(l), t;
  }
  function Cm(t, e, l, a, n) {
    if (e === "submit" && l && l.stateNode === n) {
      var u = xd(
        (n[Ft] || null).action
      ), i = a.submitter;
      i && (e = (e = i[Ft] || null) ? xd(e.formAction) : i.getAttribute("formAction"), e !== null && (u = e, i = null));
      var s = new Wn(
        "action",
        "action",
        null,
        a,
        n
      );
      t.push({
        event: s,
        listeners: [
          {
            instance: null,
            listener: function() {
              if (a.defaultPrevented) {
                if (zl !== 0) {
                  var m = i ? Sd(n, i) : new FormData(n);
                  Ac(
                    l,
                    {
                      pending: !0,
                      data: m,
                      method: n.method,
                      action: u
                    },
                    null,
                    m
                  );
                }
              } else
                typeof u == "function" && (s.preventDefault(), m = i ? Sd(n, i) : new FormData(n), Ac(
                  l,
                  {
                    pending: !0,
                    data: m,
                    method: n.method,
                    action: u
                  },
                  u,
                  m
                ));
            },
            currentTarget: n
          }
        ]
      });
    }
  }
  for (var cf = 0; cf < Qi.length; cf++) {
    var ff = Qi[cf], Mm = ff.toLowerCase(), Om = ff[0].toUpperCase() + ff.slice(1);
    Ae(
      Mm,
      "on" + Om
    );
  }
  Ae(Fs, "onAnimationEnd"), Ae(Is, "onAnimationIteration"), Ae(Ps, "onAnimationStart"), Ae("dblclick", "onDoubleClick"), Ae("focusin", "onFocus"), Ae("focusout", "onBlur"), Ae(J1, "onTransitionRun"), Ae(k1, "onTransitionStart"), Ae($1, "onTransitionCancel"), Ae(tr, "onTransitionEnd"), la("onMouseEnter", ["mouseout", "mouseover"]), la("onMouseLeave", ["mouseout", "mouseover"]), la("onPointerEnter", ["pointerout", "pointerover"]), la("onPointerLeave", ["pointerout", "pointerover"]), Rl(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(" ")
  ), Rl(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  ), Rl("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), Rl(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  ), Rl(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  ), Rl(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var En = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), Dm = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(En)
  );
  function Ed(t, e) {
    e = (e & 4) !== 0;
    for (var l = 0; l < t.length; l++) {
      var a = t[l], n = a.event;
      a = a.listeners;
      t: {
        var u = void 0;
        if (e)
          for (var i = a.length - 1; 0 <= i; i--) {
            var s = a[i], m = s.instance, p = s.currentTarget;
            if (s = s.listener, m !== u && n.isPropagationStopped())
              break t;
            u = s, n.currentTarget = p;
            try {
              u(n);
            } catch (_) {
              Pn(_);
            }
            n.currentTarget = null, u = m;
          }
        else
          for (i = 0; i < a.length; i++) {
            if (s = a[i], m = s.instance, p = s.currentTarget, s = s.listener, m !== u && n.isPropagationStopped())
              break t;
            u = s, n.currentTarget = p;
            try {
              u(n);
            } catch (_) {
              Pn(_);
            }
            n.currentTarget = null, u = m;
          }
      }
    }
  }
  function nt(t, e) {
    var l = e[xi];
    l === void 0 && (l = e[xi] = /* @__PURE__ */ new Set());
    var a = t + "__bubble";
    l.has(a) || (zd(e, t, 2, !1), l.add(a));
  }
  function sf(t, e, l) {
    var a = 0;
    e && (a |= 4), zd(
      l,
      t,
      a,
      e
    );
  }
  var Lu = "_reactListening" + Math.random().toString(36).slice(2);
  function rf(t) {
    if (!t[Lu]) {
      t[Lu] = !0, vs.forEach(function(l) {
        l !== "selectionchange" && (Dm.has(l) || sf(l, !1, t), sf(l, !0, t));
      });
      var e = t.nodeType === 9 ? t : t.ownerDocument;
      e === null || e[Lu] || (e[Lu] = !0, sf("selectionchange", !1, e));
    }
  }
  function zd(t, e, l, a) {
    switch (Id(e)) {
      case 2:
        var n = ih;
        break;
      case 8:
        n = ch;
        break;
      default:
        n = Af;
    }
    l = n.bind(
      null,
      e,
      l,
      t
    ), n = void 0, !Ci || e !== "touchstart" && e !== "touchmove" && e !== "wheel" || (n = !0), a ? n !== void 0 ? t.addEventListener(e, l, {
      capture: !0,
      passive: n
    }) : t.addEventListener(e, l, !0) : n !== void 0 ? t.addEventListener(e, l, {
      passive: n
    }) : t.addEventListener(e, l, !1);
  }
  function of(t, e, l, a, n) {
    var u = a;
    if ((e & 1) === 0 && (e & 2) === 0 && a !== null)
      t: for (; ; ) {
        if (a === null) return;
        var i = a.tag;
        if (i === 3 || i === 4) {
          var s = a.stateNode.containerInfo;
          if (s === n) break;
          if (i === 4)
            for (i = a.return; i !== null; ) {
              var m = i.tag;
              if ((m === 3 || m === 4) && i.stateNode.containerInfo === n)
                return;
              i = i.return;
            }
          for (; s !== null; ) {
            if (i = Pl(s), i === null) return;
            if (m = i.tag, m === 5 || m === 6 || m === 26 || m === 27) {
              a = u = i;
              continue t;
            }
            s = s.parentNode;
          }
        }
        a = a.return;
      }
    Ts(function() {
      var p = u, _ = Ti(l), T = [];
      t: {
        var S = er.get(t);
        if (S !== void 0) {
          var E = Wn, B = t;
          switch (t) {
            case "keypress":
              if (kn(l) === 0) break t;
            case "keydown":
            case "keyup":
              E = A1;
              break;
            case "focusin":
              B = "focus", E = Ui;
              break;
            case "focusout":
              B = "blur", E = Ui;
              break;
            case "beforeblur":
            case "afterblur":
              E = Ui;
              break;
            case "click":
              if (l.button === 2) break t;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              E = Ms;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              E = m1;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              E = N1;
              break;
            case Fs:
            case Is:
            case Ps:
              E = y1;
              break;
            case tr:
              E = M1;
              break;
            case "scroll":
            case "scrollend":
              E = o1;
              break;
            case "wheel":
              E = D1;
              break;
            case "copy":
            case "cut":
            case "paste":
              E = g1;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              E = Ds;
              break;
            case "toggle":
            case "beforetoggle":
              E = R1;
          }
          var X = (e & 4) !== 0, pt = !X && (t === "scroll" || t === "scrollend"), y = X ? S !== null ? S + "Capture" : null : S;
          X = [];
          for (var h = p, g; h !== null; ) {
            var j = h;
            if (g = j.stateNode, j = j.tag, j !== 5 && j !== 26 && j !== 27 || g === null || y === null || (j = Xa(h, y), j != null && X.push(
              zn(h, j, g)
            )), pt) break;
            h = h.return;
          }
          0 < X.length && (S = new E(
            S,
            B,
            null,
            l,
            _
          ), T.push({ event: S, listeners: X }));
        }
      }
      if ((e & 7) === 0) {
        t: {
          if (S = t === "mouseover" || t === "pointerover", E = t === "mouseout" || t === "pointerout", S && l !== ji && (B = l.relatedTarget || l.fromElement) && (Pl(B) || B[Il]))
            break t;
          if ((E || S) && (S = _.window === _ ? _ : (S = _.ownerDocument) ? S.defaultView || S.parentWindow : window, E ? (B = l.relatedTarget || l.toElement, E = p, B = B ? Pl(B) : null, B !== null && (pt = z(B), X = B.tag, B !== pt || X !== 5 && X !== 27 && X !== 6) && (B = null)) : (E = null, B = p), E !== B)) {
            if (X = Ms, j = "onMouseLeave", y = "onMouseEnter", h = "mouse", (t === "pointerout" || t === "pointerover") && (X = Ds, j = "onPointerLeave", y = "onPointerEnter", h = "pointer"), pt = E == null ? S : Qa(E), g = B == null ? S : Qa(B), S = new X(
              j,
              h + "leave",
              E,
              l,
              _
            ), S.target = pt, S.relatedTarget = g, j = null, Pl(_) === p && (X = new X(
              y,
              h + "enter",
              B,
              l,
              _
            ), X.target = g, X.relatedTarget = pt, j = X), pt = j, E && B)
              e: {
                for (X = Um, y = E, h = B, g = 0, j = y; j; j = X(j))
                  g++;
                j = 0;
                for (var Q = h; Q; Q = X(Q))
                  j++;
                for (; 0 < g - j; )
                  y = X(y), g--;
                for (; 0 < j - g; )
                  h = X(h), j--;
                for (; g--; ) {
                  if (y === h || h !== null && y === h.alternate) {
                    X = y;
                    break e;
                  }
                  y = X(y), h = X(h);
                }
                X = null;
              }
            else X = null;
            E !== null && _d(
              T,
              S,
              E,
              X,
              !1
            ), B !== null && pt !== null && _d(
              T,
              pt,
              B,
              X,
              !0
            );
          }
        }
        t: {
          if (S = p ? Qa(p) : window, E = S.nodeName && S.nodeName.toLowerCase(), E === "select" || E === "input" && S.type === "file")
            var st = Gs;
          else if (Ys(S))
            if (ws)
              st = Z1;
            else {
              st = Q1;
              var L = w1;
            }
          else
            E = S.nodeName, !E || E.toLowerCase() !== "input" || S.type !== "checkbox" && S.type !== "radio" ? p && Ai(p.elementType) && (st = Gs) : st = X1;
          if (st && (st = st(t, p))) {
            Ls(
              T,
              st,
              l,
              _
            );
            break t;
          }
          L && L(t, S, p), t === "focusout" && p && S.type === "number" && p.memoizedProps.value != null && _i(S, "number", S.value);
        }
        switch (L = p ? Qa(p) : window, t) {
          case "focusin":
            (Ys(L) || L.contentEditable === "true") && (fa = L, Li = p, Fa = null);
            break;
          case "focusout":
            Fa = Li = fa = null;
            break;
          case "mousedown":
            Gi = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Gi = !1, $s(T, l, _);
            break;
          case "selectionchange":
            if (K1) break;
          case "keydown":
          case "keyup":
            $s(T, l, _);
        }
        var tt;
        if (Hi)
          t: {
            switch (t) {
              case "compositionstart":
                var it = "onCompositionStart";
                break t;
              case "compositionend":
                it = "onCompositionEnd";
                break t;
              case "compositionupdate":
                it = "onCompositionUpdate";
                break t;
            }
            it = void 0;
          }
        else
          ca ? qs(t, l) && (it = "onCompositionEnd") : t === "keydown" && l.keyCode === 229 && (it = "onCompositionStart");
        it && (Us && l.locale !== "ko" && (ca || it !== "onCompositionStart" ? it === "onCompositionEnd" && ca && (tt = Ns()) : (cl = _, Mi = "value" in cl ? cl.value : cl.textContent, ca = !0)), L = Gu(p, it), 0 < L.length && (it = new Os(
          it,
          t,
          null,
          l,
          _
        ), T.push({ event: it, listeners: L }), tt ? it.data = tt : (tt = Bs(l), tt !== null && (it.data = tt)))), (tt = q1 ? B1(t, l) : Y1(t, l)) && (it = Gu(p, "onBeforeInput"), 0 < it.length && (L = new Os(
          "onBeforeInput",
          "beforeinput",
          null,
          l,
          _
        ), T.push({
          event: L,
          listeners: it
        }), L.data = tt)), Cm(
          T,
          t,
          p,
          l,
          _
        );
      }
      Ed(T, e);
    });
  }
  function zn(t, e, l) {
    return {
      instance: t,
      listener: e,
      currentTarget: l
    };
  }
  function Gu(t, e) {
    for (var l = e + "Capture", a = []; t !== null; ) {
      var n = t, u = n.stateNode;
      if (n = n.tag, n !== 5 && n !== 26 && n !== 27 || u === null || (n = Xa(t, l), n != null && a.unshift(
        zn(t, n, u)
      ), n = Xa(t, e), n != null && a.push(
        zn(t, n, u)
      )), t.tag === 3) return a;
      t = t.return;
    }
    return [];
  }
  function Um(t) {
    if (t === null) return null;
    do
      t = t.return;
    while (t && t.tag !== 5 && t.tag !== 27);
    return t || null;
  }
  function _d(t, e, l, a, n) {
    for (var u = e._reactName, i = []; l !== null && l !== a; ) {
      var s = l, m = s.alternate, p = s.stateNode;
      if (s = s.tag, m !== null && m === a) break;
      s !== 5 && s !== 26 && s !== 27 || p === null || (m = p, n ? (p = Xa(l, u), p != null && i.unshift(
        zn(l, p, m)
      )) : n || (p = Xa(l, u), p != null && i.push(
        zn(l, p, m)
      ))), l = l.return;
    }
    i.length !== 0 && t.push({ event: e, listeners: i });
  }
  var Rm = /\r\n?/g, Hm = /\u0000|\uFFFD/g;
  function Ad(t) {
    return (typeof t == "string" ? t : "" + t).replace(Rm, `
`).replace(Hm, "");
  }
  function jd(t, e) {
    return e = Ad(e), Ad(t) === e;
  }
  function gt(t, e, l, a, n, u) {
    switch (l) {
      case "children":
        typeof a == "string" ? e === "body" || e === "textarea" && a === "" || na(t, a) : (typeof a == "number" || typeof a == "bigint") && e !== "body" && na(t, "" + a);
        break;
      case "className":
        Zn(t, "class", a);
        break;
      case "tabIndex":
        Zn(t, "tabindex", a);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        Zn(t, l, a);
        break;
      case "style":
        As(t, a, u);
        break;
      case "data":
        if (e !== "object") {
          Zn(t, "data", a);
          break;
        }
      case "src":
      case "href":
        if (a === "" && (e !== "a" || l !== "href")) {
          t.removeAttribute(l);
          break;
        }
        if (a == null || typeof a == "function" || typeof a == "symbol" || typeof a == "boolean") {
          t.removeAttribute(l);
          break;
        }
        a = Kn("" + a), t.setAttribute(l, a);
        break;
      case "action":
      case "formAction":
        if (typeof a == "function") {
          t.setAttribute(
            l,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof u == "function" && (l === "formAction" ? (e !== "input" && gt(t, e, "name", n.name, n, null), gt(
            t,
            e,
            "formEncType",
            n.formEncType,
            n,
            null
          ), gt(
            t,
            e,
            "formMethod",
            n.formMethod,
            n,
            null
          ), gt(
            t,
            e,
            "formTarget",
            n.formTarget,
            n,
            null
          )) : (gt(t, e, "encType", n.encType, n, null), gt(t, e, "method", n.method, n, null), gt(t, e, "target", n.target, n, null)));
        if (a == null || typeof a == "symbol" || typeof a == "boolean") {
          t.removeAttribute(l);
          break;
        }
        a = Kn("" + a), t.setAttribute(l, a);
        break;
      case "onClick":
        a != null && (t.onclick = we);
        break;
      case "onScroll":
        a != null && nt("scroll", t);
        break;
      case "onScrollEnd":
        a != null && nt("scrollend", t);
        break;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a))
            throw Error(f(61));
          if (l = a.__html, l != null) {
            if (n.children != null) throw Error(f(60));
            t.innerHTML = l;
          }
        }
        break;
      case "multiple":
        t.multiple = a && typeof a != "function" && typeof a != "symbol";
        break;
      case "muted":
        t.muted = a && typeof a != "function" && typeof a != "symbol";
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
          t.removeAttribute("xlink:href");
          break;
        }
        l = Kn("" + a), t.setAttributeNS(
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
        a != null && typeof a != "function" && typeof a != "symbol" ? t.setAttribute(l, "" + a) : t.removeAttribute(l);
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
        a && typeof a != "function" && typeof a != "symbol" ? t.setAttribute(l, "") : t.removeAttribute(l);
        break;
      case "capture":
      case "download":
        a === !0 ? t.setAttribute(l, "") : a !== !1 && a != null && typeof a != "function" && typeof a != "symbol" ? t.setAttribute(l, a) : t.removeAttribute(l);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        a != null && typeof a != "function" && typeof a != "symbol" && !isNaN(a) && 1 <= a ? t.setAttribute(l, a) : t.removeAttribute(l);
        break;
      case "rowSpan":
      case "start":
        a == null || typeof a == "function" || typeof a == "symbol" || isNaN(a) ? t.removeAttribute(l) : t.setAttribute(l, a);
        break;
      case "popover":
        nt("beforetoggle", t), nt("toggle", t), Xn(t, "popover", a);
        break;
      case "xlinkActuate":
        Ge(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          a
        );
        break;
      case "xlinkArcrole":
        Ge(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          a
        );
        break;
      case "xlinkRole":
        Ge(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          a
        );
        break;
      case "xlinkShow":
        Ge(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          a
        );
        break;
      case "xlinkTitle":
        Ge(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          a
        );
        break;
      case "xlinkType":
        Ge(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          a
        );
        break;
      case "xmlBase":
        Ge(
          t,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          a
        );
        break;
      case "xmlLang":
        Ge(
          t,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          a
        );
        break;
      case "xmlSpace":
        Ge(
          t,
          "http://www.w3.org/XML/1998/namespace",
          "xml:space",
          a
        );
        break;
      case "is":
        Xn(t, "is", a);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < l.length) || l[0] !== "o" && l[0] !== "O" || l[1] !== "n" && l[1] !== "N") && (l = s1.get(l) || l, Xn(t, l, a));
    }
  }
  function df(t, e, l, a, n, u) {
    switch (l) {
      case "style":
        As(t, a, u);
        break;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a))
            throw Error(f(61));
          if (l = a.__html, l != null) {
            if (n.children != null) throw Error(f(60));
            t.innerHTML = l;
          }
        }
        break;
      case "children":
        typeof a == "string" ? na(t, a) : (typeof a == "number" || typeof a == "bigint") && na(t, "" + a);
        break;
      case "onScroll":
        a != null && nt("scroll", t);
        break;
      case "onScrollEnd":
        a != null && nt("scrollend", t);
        break;
      case "onClick":
        a != null && (t.onclick = we);
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
        if (!ys.hasOwnProperty(l))
          t: {
            if (l[0] === "o" && l[1] === "n" && (n = l.endsWith("Capture"), e = l.slice(2, n ? l.length - 7 : void 0), u = t[Ft] || null, u = u != null ? u[l] : null, typeof u == "function" && t.removeEventListener(e, u, n), typeof a == "function")) {
              typeof u != "function" && u !== null && (l in t ? t[l] = null : t.hasAttribute(l) && t.removeAttribute(l)), t.addEventListener(e, a, n);
              break t;
            }
            l in t ? t[l] = a : a === !0 ? t.setAttribute(l, "") : Xn(t, l, a);
          }
    }
  }
  function Vt(t, e, l) {
    switch (e) {
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
        nt("error", t), nt("load", t);
        var a = !1, n = !1, u;
        for (u in l)
          if (l.hasOwnProperty(u)) {
            var i = l[u];
            if (i != null)
              switch (u) {
                case "src":
                  a = !0;
                  break;
                case "srcSet":
                  n = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(f(137, e));
                default:
                  gt(t, e, u, i, l, null);
              }
          }
        n && gt(t, e, "srcSet", l.srcSet, l, null), a && gt(t, e, "src", l.src, l, null);
        return;
      case "input":
        nt("invalid", t);
        var s = u = i = n = null, m = null, p = null;
        for (a in l)
          if (l.hasOwnProperty(a)) {
            var _ = l[a];
            if (_ != null)
              switch (a) {
                case "name":
                  n = _;
                  break;
                case "type":
                  i = _;
                  break;
                case "checked":
                  m = _;
                  break;
                case "defaultChecked":
                  p = _;
                  break;
                case "value":
                  u = _;
                  break;
                case "defaultValue":
                  s = _;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (_ != null)
                    throw Error(f(137, e));
                  break;
                default:
                  gt(t, e, a, _, l, null);
              }
          }
        Ss(
          t,
          u,
          s,
          m,
          p,
          i,
          n,
          !1
        );
        return;
      case "select":
        nt("invalid", t), a = i = u = null;
        for (n in l)
          if (l.hasOwnProperty(n) && (s = l[n], s != null))
            switch (n) {
              case "value":
                u = s;
                break;
              case "defaultValue":
                i = s;
                break;
              case "multiple":
                a = s;
              default:
                gt(t, e, n, s, l, null);
            }
        e = u, l = i, t.multiple = !!a, e != null ? aa(t, !!a, e, !1) : l != null && aa(t, !!a, l, !0);
        return;
      case "textarea":
        nt("invalid", t), u = n = a = null;
        for (i in l)
          if (l.hasOwnProperty(i) && (s = l[i], s != null))
            switch (i) {
              case "value":
                a = s;
                break;
              case "defaultValue":
                n = s;
                break;
              case "children":
                u = s;
                break;
              case "dangerouslySetInnerHTML":
                if (s != null) throw Error(f(91));
                break;
              default:
                gt(t, e, i, s, l, null);
            }
        zs(t, a, n, u);
        return;
      case "option":
        for (m in l)
          if (l.hasOwnProperty(m) && (a = l[m], a != null))
            switch (m) {
              case "selected":
                t.selected = a && typeof a != "function" && typeof a != "symbol";
                break;
              default:
                gt(t, e, m, a, l, null);
            }
        return;
      case "dialog":
        nt("beforetoggle", t), nt("toggle", t), nt("cancel", t), nt("close", t);
        break;
      case "iframe":
      case "object":
        nt("load", t);
        break;
      case "video":
      case "audio":
        for (a = 0; a < En.length; a++)
          nt(En[a], t);
        break;
      case "image":
        nt("error", t), nt("load", t);
        break;
      case "details":
        nt("toggle", t);
        break;
      case "embed":
      case "source":
      case "link":
        nt("error", t), nt("load", t);
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
        for (p in l)
          if (l.hasOwnProperty(p) && (a = l[p], a != null))
            switch (p) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(f(137, e));
              default:
                gt(t, e, p, a, l, null);
            }
        return;
      default:
        if (Ai(e)) {
          for (_ in l)
            l.hasOwnProperty(_) && (a = l[_], a !== void 0 && df(
              t,
              e,
              _,
              a,
              l,
              void 0
            ));
          return;
        }
    }
    for (s in l)
      l.hasOwnProperty(s) && (a = l[s], a != null && gt(t, e, s, a, l, null));
  }
  function qm(t, e, l, a) {
    switch (e) {
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
        var n = null, u = null, i = null, s = null, m = null, p = null, _ = null;
        for (E in l) {
          var T = l[E];
          if (l.hasOwnProperty(E) && T != null)
            switch (E) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                m = T;
              default:
                a.hasOwnProperty(E) || gt(t, e, E, null, a, T);
            }
        }
        for (var S in a) {
          var E = a[S];
          if (T = l[S], a.hasOwnProperty(S) && (E != null || T != null))
            switch (S) {
              case "type":
                u = E;
                break;
              case "name":
                n = E;
                break;
              case "checked":
                p = E;
                break;
              case "defaultChecked":
                _ = E;
                break;
              case "value":
                i = E;
                break;
              case "defaultValue":
                s = E;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (E != null)
                  throw Error(f(137, e));
                break;
              default:
                E !== T && gt(
                  t,
                  e,
                  S,
                  E,
                  a,
                  T
                );
            }
        }
        zi(
          t,
          i,
          s,
          m,
          p,
          _,
          u,
          n
        );
        return;
      case "select":
        E = i = s = S = null;
        for (u in l)
          if (m = l[u], l.hasOwnProperty(u) && m != null)
            switch (u) {
              case "value":
                break;
              case "multiple":
                E = m;
              default:
                a.hasOwnProperty(u) || gt(
                  t,
                  e,
                  u,
                  null,
                  a,
                  m
                );
            }
        for (n in a)
          if (u = a[n], m = l[n], a.hasOwnProperty(n) && (u != null || m != null))
            switch (n) {
              case "value":
                S = u;
                break;
              case "defaultValue":
                s = u;
                break;
              case "multiple":
                i = u;
              default:
                u !== m && gt(
                  t,
                  e,
                  n,
                  u,
                  a,
                  m
                );
            }
        e = s, l = i, a = E, S != null ? aa(t, !!l, S, !1) : !!a != !!l && (e != null ? aa(t, !!l, e, !0) : aa(t, !!l, l ? [] : "", !1));
        return;
      case "textarea":
        E = S = null;
        for (s in l)
          if (n = l[s], l.hasOwnProperty(s) && n != null && !a.hasOwnProperty(s))
            switch (s) {
              case "value":
                break;
              case "children":
                break;
              default:
                gt(t, e, s, null, a, n);
            }
        for (i in a)
          if (n = a[i], u = l[i], a.hasOwnProperty(i) && (n != null || u != null))
            switch (i) {
              case "value":
                S = n;
                break;
              case "defaultValue":
                E = n;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (n != null) throw Error(f(91));
                break;
              default:
                n !== u && gt(t, e, i, n, a, u);
            }
        Es(t, S, E);
        return;
      case "option":
        for (var B in l)
          if (S = l[B], l.hasOwnProperty(B) && S != null && !a.hasOwnProperty(B))
            switch (B) {
              case "selected":
                t.selected = !1;
                break;
              default:
                gt(
                  t,
                  e,
                  B,
                  null,
                  a,
                  S
                );
            }
        for (m in a)
          if (S = a[m], E = l[m], a.hasOwnProperty(m) && S !== E && (S != null || E != null))
            switch (m) {
              case "selected":
                t.selected = S && typeof S != "function" && typeof S != "symbol";
                break;
              default:
                gt(
                  t,
                  e,
                  m,
                  S,
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
        for (var X in l)
          S = l[X], l.hasOwnProperty(X) && S != null && !a.hasOwnProperty(X) && gt(t, e, X, null, a, S);
        for (p in a)
          if (S = a[p], E = l[p], a.hasOwnProperty(p) && S !== E && (S != null || E != null))
            switch (p) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (S != null)
                  throw Error(f(137, e));
                break;
              default:
                gt(
                  t,
                  e,
                  p,
                  S,
                  a,
                  E
                );
            }
        return;
      default:
        if (Ai(e)) {
          for (var pt in l)
            S = l[pt], l.hasOwnProperty(pt) && S !== void 0 && !a.hasOwnProperty(pt) && df(
              t,
              e,
              pt,
              void 0,
              a,
              S
            );
          for (_ in a)
            S = a[_], E = l[_], !a.hasOwnProperty(_) || S === E || S === void 0 && E === void 0 || df(
              t,
              e,
              _,
              S,
              a,
              E
            );
          return;
        }
    }
    for (var y in l)
      S = l[y], l.hasOwnProperty(y) && S != null && !a.hasOwnProperty(y) && gt(t, e, y, null, a, S);
    for (T in a)
      S = a[T], E = l[T], !a.hasOwnProperty(T) || S === E || S == null && E == null || gt(t, e, T, S, a, E);
  }
  function Td(t) {
    switch (t) {
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
  function Bm() {
    if (typeof performance.getEntriesByType == "function") {
      for (var t = 0, e = 0, l = performance.getEntriesByType("resource"), a = 0; a < l.length; a++) {
        var n = l[a], u = n.transferSize, i = n.initiatorType, s = n.duration;
        if (u && s && Td(i)) {
          for (i = 0, s = n.responseEnd, a += 1; a < l.length; a++) {
            var m = l[a], p = m.startTime;
            if (p > s) break;
            var _ = m.transferSize, T = m.initiatorType;
            _ && Td(T) && (m = m.responseEnd, i += _ * (m < s ? 1 : (s - p) / (m - p)));
          }
          if (--a, e += 8 * (u + i) / (n.duration / 1e3), t++, 10 < t) break;
        }
      }
      if (0 < t) return e / t / 1e6;
    }
    return navigator.connection && (t = navigator.connection.downlink, typeof t == "number") ? t : 5;
  }
  var mf = null, hf = null;
  function wu(t) {
    return t.nodeType === 9 ? t : t.ownerDocument;
  }
  function Nd(t) {
    switch (t) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function Cd(t, e) {
    if (t === 0)
      switch (e) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return t === 1 && e === "foreignObject" ? 0 : t;
  }
  function vf(t, e) {
    return t === "textarea" || t === "noscript" || typeof e.children == "string" || typeof e.children == "number" || typeof e.children == "bigint" || typeof e.dangerouslySetInnerHTML == "object" && e.dangerouslySetInnerHTML !== null && e.dangerouslySetInnerHTML.__html != null;
  }
  var yf = null;
  function Ym() {
    var t = window.event;
    return t && t.type === "popstate" ? t === yf ? !1 : (yf = t, !0) : (yf = null, !1);
  }
  var Md = typeof setTimeout == "function" ? setTimeout : void 0, Lm = typeof clearTimeout == "function" ? clearTimeout : void 0, Od = typeof Promise == "function" ? Promise : void 0, Gm = typeof queueMicrotask == "function" ? queueMicrotask : typeof Od < "u" ? function(t) {
    return Od.resolve(null).then(t).catch(wm);
  } : Md;
  function wm(t) {
    setTimeout(function() {
      throw t;
    });
  }
  function _l(t) {
    return t === "head";
  }
  function Dd(t, e) {
    var l = e, a = 0;
    do {
      var n = l.nextSibling;
      if (t.removeChild(l), n && n.nodeType === 8)
        if (l = n.data, l === "/$" || l === "/&") {
          if (a === 0) {
            t.removeChild(n), Ha(e);
            return;
          }
          a--;
        } else if (l === "$" || l === "$?" || l === "$~" || l === "$!" || l === "&")
          a++;
        else if (l === "html")
          _n(t.ownerDocument.documentElement);
        else if (l === "head") {
          l = t.ownerDocument.head, _n(l);
          for (var u = l.firstChild; u; ) {
            var i = u.nextSibling, s = u.nodeName;
            u[wa] || s === "SCRIPT" || s === "STYLE" || s === "LINK" && u.rel.toLowerCase() === "stylesheet" || l.removeChild(u), u = i;
          }
        } else
          l === "body" && _n(t.ownerDocument.body);
      l = n;
    } while (l);
    Ha(e);
  }
  function Ud(t, e) {
    var l = t;
    t = 0;
    do {
      var a = l.nextSibling;
      if (l.nodeType === 1 ? e ? (l._stashedDisplay = l.style.display, l.style.display = "none") : (l.style.display = l._stashedDisplay || "", l.getAttribute("style") === "" && l.removeAttribute("style")) : l.nodeType === 3 && (e ? (l._stashedText = l.nodeValue, l.nodeValue = "") : l.nodeValue = l._stashedText || ""), a && a.nodeType === 8)
        if (l = a.data, l === "/$") {
          if (t === 0) break;
          t--;
        } else
          l !== "$" && l !== "$?" && l !== "$~" && l !== "$!" || t++;
      l = a;
    } while (l);
  }
  function bf(t) {
    var e = t.firstChild;
    for (e && e.nodeType === 10 && (e = e.nextSibling); e; ) {
      var l = e;
      switch (e = e.nextSibling, l.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          bf(l), Si(l);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (l.rel.toLowerCase() === "stylesheet") continue;
      }
      t.removeChild(l);
    }
  }
  function Qm(t, e, l, a) {
    for (; t.nodeType === 1; ) {
      var n = l;
      if (t.nodeName.toLowerCase() !== e.toLowerCase()) {
        if (!a && (t.nodeName !== "INPUT" || t.type !== "hidden"))
          break;
      } else if (a) {
        if (!t[wa])
          switch (e) {
            case "meta":
              if (!t.hasAttribute("itemprop")) break;
              return t;
            case "link":
              if (u = t.getAttribute("rel"), u === "stylesheet" && t.hasAttribute("data-precedence"))
                break;
              if (u !== n.rel || t.getAttribute("href") !== (n.href == null || n.href === "" ? null : n.href) || t.getAttribute("crossorigin") !== (n.crossOrigin == null ? null : n.crossOrigin) || t.getAttribute("title") !== (n.title == null ? null : n.title))
                break;
              return t;
            case "style":
              if (t.hasAttribute("data-precedence")) break;
              return t;
            case "script":
              if (u = t.getAttribute("src"), (u !== (n.src == null ? null : n.src) || t.getAttribute("type") !== (n.type == null ? null : n.type) || t.getAttribute("crossorigin") !== (n.crossOrigin == null ? null : n.crossOrigin)) && u && t.hasAttribute("async") && !t.hasAttribute("itemprop"))
                break;
              return t;
            default:
              return t;
          }
      } else if (e === "input" && t.type === "hidden") {
        var u = n.name == null ? null : "" + n.name;
        if (n.type === "hidden" && t.getAttribute("name") === u)
          return t;
      } else return t;
      if (t = Ee(t.nextSibling), t === null) break;
    }
    return null;
  }
  function Xm(t, e, l) {
    if (e === "") return null;
    for (; t.nodeType !== 3; )
      if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !l || (t = Ee(t.nextSibling), t === null)) return null;
    return t;
  }
  function Rd(t, e) {
    for (; t.nodeType !== 8; )
      if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !e || (t = Ee(t.nextSibling), t === null)) return null;
    return t;
  }
  function gf(t) {
    return t.data === "$?" || t.data === "$~";
  }
  function pf(t) {
    return t.data === "$!" || t.data === "$?" && t.ownerDocument.readyState !== "loading";
  }
  function Zm(t, e) {
    var l = t.ownerDocument;
    if (t.data === "$~") t._reactRetry = e;
    else if (t.data !== "$?" || l.readyState !== "loading")
      e();
    else {
      var a = function() {
        e(), l.removeEventListener("DOMContentLoaded", a);
      };
      l.addEventListener("DOMContentLoaded", a), t._reactRetry = a;
    }
  }
  function Ee(t) {
    for (; t != null; t = t.nextSibling) {
      var e = t.nodeType;
      if (e === 1 || e === 3) break;
      if (e === 8) {
        if (e = t.data, e === "$" || e === "$!" || e === "$?" || e === "$~" || e === "&" || e === "F!" || e === "F")
          break;
        if (e === "/$" || e === "/&") return null;
      }
    }
    return t;
  }
  var xf = null;
  function Hd(t) {
    t = t.nextSibling;
    for (var e = 0; t; ) {
      if (t.nodeType === 8) {
        var l = t.data;
        if (l === "/$" || l === "/&") {
          if (e === 0)
            return Ee(t.nextSibling);
          e--;
        } else
          l !== "$" && l !== "$!" && l !== "$?" && l !== "$~" && l !== "&" || e++;
      }
      t = t.nextSibling;
    }
    return null;
  }
  function qd(t) {
    t = t.previousSibling;
    for (var e = 0; t; ) {
      if (t.nodeType === 8) {
        var l = t.data;
        if (l === "$" || l === "$!" || l === "$?" || l === "$~" || l === "&") {
          if (e === 0) return t;
          e--;
        } else l !== "/$" && l !== "/&" || e++;
      }
      t = t.previousSibling;
    }
    return null;
  }
  function Bd(t, e, l) {
    switch (e = wu(l), t) {
      case "html":
        if (t = e.documentElement, !t) throw Error(f(452));
        return t;
      case "head":
        if (t = e.head, !t) throw Error(f(453));
        return t;
      case "body":
        if (t = e.body, !t) throw Error(f(454));
        return t;
      default:
        throw Error(f(451));
    }
  }
  function _n(t) {
    for (var e = t.attributes; e.length; )
      t.removeAttributeNode(e[0]);
    Si(t);
  }
  var ze = /* @__PURE__ */ new Map(), Yd = /* @__PURE__ */ new Set();
  function Qu(t) {
    return typeof t.getRootNode == "function" ? t.getRootNode() : t.nodeType === 9 ? t : t.ownerDocument;
  }
  var al = U.d;
  U.d = {
    f: Vm,
    r: Km,
    D: Jm,
    C: km,
    L: $m,
    m: Wm,
    X: Im,
    S: Fm,
    M: Pm
  };
  function Vm() {
    var t = al.f(), e = Uu();
    return t || e;
  }
  function Km(t) {
    var e = ta(t);
    e !== null && e.tag === 5 && e.type === "form" ? to(e) : al.r(t);
  }
  var Da = typeof document > "u" ? null : document;
  function Ld(t, e, l) {
    var a = Da;
    if (a && typeof e == "string" && e) {
      var n = ve(e);
      n = 'link[rel="' + t + '"][href="' + n + '"]', typeof l == "string" && (n += '[crossorigin="' + l + '"]'), Yd.has(n) || (Yd.add(n), t = { rel: t, crossOrigin: l, href: e }, a.querySelector(n) === null && (e = a.createElement("link"), Vt(e, "link", t), Lt(e), a.head.appendChild(e)));
    }
  }
  function Jm(t) {
    al.D(t), Ld("dns-prefetch", t, null);
  }
  function km(t, e) {
    al.C(t, e), Ld("preconnect", t, e);
  }
  function $m(t, e, l) {
    al.L(t, e, l);
    var a = Da;
    if (a && t && e) {
      var n = 'link[rel="preload"][as="' + ve(e) + '"]';
      e === "image" && l && l.imageSrcSet ? (n += '[imagesrcset="' + ve(
        l.imageSrcSet
      ) + '"]', typeof l.imageSizes == "string" && (n += '[imagesizes="' + ve(
        l.imageSizes
      ) + '"]')) : n += '[href="' + ve(t) + '"]';
      var u = n;
      switch (e) {
        case "style":
          u = Ua(t);
          break;
        case "script":
          u = Ra(t);
      }
      ze.has(u) || (t = H(
        {
          rel: "preload",
          href: e === "image" && l && l.imageSrcSet ? void 0 : t,
          as: e
        },
        l
      ), ze.set(u, t), a.querySelector(n) !== null || e === "style" && a.querySelector(An(u)) || e === "script" && a.querySelector(jn(u)) || (e = a.createElement("link"), Vt(e, "link", t), Lt(e), a.head.appendChild(e)));
    }
  }
  function Wm(t, e) {
    al.m(t, e);
    var l = Da;
    if (l && t) {
      var a = e && typeof e.as == "string" ? e.as : "script", n = 'link[rel="modulepreload"][as="' + ve(a) + '"][href="' + ve(t) + '"]', u = n;
      switch (a) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          u = Ra(t);
      }
      if (!ze.has(u) && (t = H({ rel: "modulepreload", href: t }, e), ze.set(u, t), l.querySelector(n) === null)) {
        switch (a) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (l.querySelector(jn(u)))
              return;
        }
        a = l.createElement("link"), Vt(a, "link", t), Lt(a), l.head.appendChild(a);
      }
    }
  }
  function Fm(t, e, l) {
    al.S(t, e, l);
    var a = Da;
    if (a && t) {
      var n = ea(a).hoistableStyles, u = Ua(t);
      e = e || "default";
      var i = n.get(u);
      if (!i) {
        var s = { loading: 0, preload: null };
        if (i = a.querySelector(
          An(u)
        ))
          s.loading = 5;
        else {
          t = H(
            { rel: "stylesheet", href: t, "data-precedence": e },
            l
          ), (l = ze.get(u)) && Sf(t, l);
          var m = i = a.createElement("link");
          Lt(m), Vt(m, "link", t), m._p = new Promise(function(p, _) {
            m.onload = p, m.onerror = _;
          }), m.addEventListener("load", function() {
            s.loading |= 1;
          }), m.addEventListener("error", function() {
            s.loading |= 2;
          }), s.loading |= 4, Xu(i, e, a);
        }
        i = {
          type: "stylesheet",
          instance: i,
          count: 1,
          state: s
        }, n.set(u, i);
      }
    }
  }
  function Im(t, e) {
    al.X(t, e);
    var l = Da;
    if (l && t) {
      var a = ea(l).hoistableScripts, n = Ra(t), u = a.get(n);
      u || (u = l.querySelector(jn(n)), u || (t = H({ src: t, async: !0 }, e), (e = ze.get(n)) && Ef(t, e), u = l.createElement("script"), Lt(u), Vt(u, "link", t), l.head.appendChild(u)), u = {
        type: "script",
        instance: u,
        count: 1,
        state: null
      }, a.set(n, u));
    }
  }
  function Pm(t, e) {
    al.M(t, e);
    var l = Da;
    if (l && t) {
      var a = ea(l).hoistableScripts, n = Ra(t), u = a.get(n);
      u || (u = l.querySelector(jn(n)), u || (t = H({ src: t, async: !0, type: "module" }, e), (e = ze.get(n)) && Ef(t, e), u = l.createElement("script"), Lt(u), Vt(u, "link", t), l.head.appendChild(u)), u = {
        type: "script",
        instance: u,
        count: 1,
        state: null
      }, a.set(n, u));
    }
  }
  function Gd(t, e, l, a) {
    var n = (n = lt.current) ? Qu(n) : null;
    if (!n) throw Error(f(446));
    switch (t) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof l.precedence == "string" && typeof l.href == "string" ? (e = Ua(l.href), l = ea(
          n
        ).hoistableStyles, a = l.get(e), a || (a = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, l.set(e, a)), a) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (l.rel === "stylesheet" && typeof l.href == "string" && typeof l.precedence == "string") {
          t = Ua(l.href);
          var u = ea(
            n
          ).hoistableStyles, i = u.get(t);
          if (i || (n = n.ownerDocument || n, i = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, u.set(t, i), (u = n.querySelector(
            An(t)
          )) && !u._p && (i.instance = u, i.state.loading = 5), ze.has(t) || (l = {
            rel: "preload",
            as: "style",
            href: l.href,
            crossOrigin: l.crossOrigin,
            integrity: l.integrity,
            media: l.media,
            hrefLang: l.hrefLang,
            referrerPolicy: l.referrerPolicy
          }, ze.set(t, l), u || th(
            n,
            t,
            l,
            i.state
          ))), e && a === null)
            throw Error(f(528, ""));
          return i;
        }
        if (e && a !== null)
          throw Error(f(529, ""));
        return null;
      case "script":
        return e = l.async, l = l.src, typeof l == "string" && e && typeof e != "function" && typeof e != "symbol" ? (e = Ra(l), l = ea(
          n
        ).hoistableScripts, a = l.get(e), a || (a = {
          type: "script",
          instance: null,
          count: 0,
          state: null
        }, l.set(e, a)), a) : { type: "void", instance: null, count: 0, state: null };
      default:
        throw Error(f(444, t));
    }
  }
  function Ua(t) {
    return 'href="' + ve(t) + '"';
  }
  function An(t) {
    return 'link[rel="stylesheet"][' + t + "]";
  }
  function wd(t) {
    return H({}, t, {
      "data-precedence": t.precedence,
      precedence: null
    });
  }
  function th(t, e, l, a) {
    t.querySelector('link[rel="preload"][as="style"][' + e + "]") ? a.loading = 1 : (e = t.createElement("link"), a.preload = e, e.addEventListener("load", function() {
      return a.loading |= 1;
    }), e.addEventListener("error", function() {
      return a.loading |= 2;
    }), Vt(e, "link", l), Lt(e), t.head.appendChild(e));
  }
  function Ra(t) {
    return '[src="' + ve(t) + '"]';
  }
  function jn(t) {
    return "script[async]" + t;
  }
  function Qd(t, e, l) {
    if (e.count++, e.instance === null)
      switch (e.type) {
        case "style":
          var a = t.querySelector(
            'style[data-href~="' + ve(l.href) + '"]'
          );
          if (a)
            return e.instance = a, Lt(a), a;
          var n = H({}, l, {
            "data-href": l.href,
            "data-precedence": l.precedence,
            href: null,
            precedence: null
          });
          return a = (t.ownerDocument || t).createElement(
            "style"
          ), Lt(a), Vt(a, "style", n), Xu(a, l.precedence, t), e.instance = a;
        case "stylesheet":
          n = Ua(l.href);
          var u = t.querySelector(
            An(n)
          );
          if (u)
            return e.state.loading |= 4, e.instance = u, Lt(u), u;
          a = wd(l), (n = ze.get(n)) && Sf(a, n), u = (t.ownerDocument || t).createElement("link"), Lt(u);
          var i = u;
          return i._p = new Promise(function(s, m) {
            i.onload = s, i.onerror = m;
          }), Vt(u, "link", a), e.state.loading |= 4, Xu(u, l.precedence, t), e.instance = u;
        case "script":
          return u = Ra(l.src), (n = t.querySelector(
            jn(u)
          )) ? (e.instance = n, Lt(n), n) : (a = l, (n = ze.get(u)) && (a = H({}, l), Ef(a, n)), t = t.ownerDocument || t, n = t.createElement("script"), Lt(n), Vt(n, "link", a), t.head.appendChild(n), e.instance = n);
        case "void":
          return null;
        default:
          throw Error(f(443, e.type));
      }
    else
      e.type === "stylesheet" && (e.state.loading & 4) === 0 && (a = e.instance, e.state.loading |= 4, Xu(a, l.precedence, t));
    return e.instance;
  }
  function Xu(t, e, l) {
    for (var a = l.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), n = a.length ? a[a.length - 1] : null, u = n, i = 0; i < a.length; i++) {
      var s = a[i];
      if (s.dataset.precedence === e) u = s;
      else if (u !== n) break;
    }
    u ? u.parentNode.insertBefore(t, u.nextSibling) : (e = l.nodeType === 9 ? l.head : l, e.insertBefore(t, e.firstChild));
  }
  function Sf(t, e) {
    t.crossOrigin == null && (t.crossOrigin = e.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy), t.title == null && (t.title = e.title);
  }
  function Ef(t, e) {
    t.crossOrigin == null && (t.crossOrigin = e.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy), t.integrity == null && (t.integrity = e.integrity);
  }
  var Zu = null;
  function Xd(t, e, l) {
    if (Zu === null) {
      var a = /* @__PURE__ */ new Map(), n = Zu = /* @__PURE__ */ new Map();
      n.set(l, a);
    } else
      n = Zu, a = n.get(l), a || (a = /* @__PURE__ */ new Map(), n.set(l, a));
    if (a.has(t)) return a;
    for (a.set(t, null), l = l.getElementsByTagName(t), n = 0; n < l.length; n++) {
      var u = l[n];
      if (!(u[wa] || u[wt] || t === "link" && u.getAttribute("rel") === "stylesheet") && u.namespaceURI !== "http://www.w3.org/2000/svg") {
        var i = u.getAttribute(e) || "";
        i = t + i;
        var s = a.get(i);
        s ? s.push(u) : a.set(i, [u]);
      }
    }
    return a;
  }
  function Zd(t, e, l) {
    t = t.ownerDocument || t, t.head.insertBefore(
      l,
      e === "title" ? t.querySelector("head > title") : null
    );
  }
  function eh(t, e, l) {
    if (l === 1 || e.itemProp != null) return !1;
    switch (t) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (typeof e.precedence != "string" || typeof e.href != "string" || e.href === "")
          break;
        return !0;
      case "link":
        if (typeof e.rel != "string" || typeof e.href != "string" || e.href === "" || e.onLoad || e.onError)
          break;
        switch (e.rel) {
          case "stylesheet":
            return t = e.disabled, typeof e.precedence == "string" && t == null;
          default:
            return !0;
        }
      case "script":
        if (e.async && typeof e.async != "function" && typeof e.async != "symbol" && !e.onLoad && !e.onError && e.src && typeof e.src == "string")
          return !0;
    }
    return !1;
  }
  function Vd(t) {
    return !(t.type === "stylesheet" && (t.state.loading & 3) === 0);
  }
  function lh(t, e, l, a) {
    if (l.type === "stylesheet" && (typeof a.media != "string" || matchMedia(a.media).matches !== !1) && (l.state.loading & 4) === 0) {
      if (l.instance === null) {
        var n = Ua(a.href), u = e.querySelector(
          An(n)
        );
        if (u) {
          e = u._p, e !== null && typeof e == "object" && typeof e.then == "function" && (t.count++, t = Vu.bind(t), e.then(t, t)), l.state.loading |= 4, l.instance = u, Lt(u);
          return;
        }
        u = e.ownerDocument || e, a = wd(a), (n = ze.get(n)) && Sf(a, n), u = u.createElement("link"), Lt(u);
        var i = u;
        i._p = new Promise(function(s, m) {
          i.onload = s, i.onerror = m;
        }), Vt(u, "link", a), l.instance = u;
      }
      t.stylesheets === null && (t.stylesheets = /* @__PURE__ */ new Map()), t.stylesheets.set(l, e), (e = l.state.preload) && (l.state.loading & 3) === 0 && (t.count++, l = Vu.bind(t), e.addEventListener("load", l), e.addEventListener("error", l));
    }
  }
  var zf = 0;
  function ah(t, e) {
    return t.stylesheets && t.count === 0 && Ju(t, t.stylesheets), 0 < t.count || 0 < t.imgCount ? function(l) {
      var a = setTimeout(function() {
        if (t.stylesheets && Ju(t, t.stylesheets), t.unsuspend) {
          var u = t.unsuspend;
          t.unsuspend = null, u();
        }
      }, 6e4 + e);
      0 < t.imgBytes && zf === 0 && (zf = 62500 * Bm());
      var n = setTimeout(
        function() {
          if (t.waitingForImages = !1, t.count === 0 && (t.stylesheets && Ju(t, t.stylesheets), t.unsuspend)) {
            var u = t.unsuspend;
            t.unsuspend = null, u();
          }
        },
        (t.imgBytes > zf ? 50 : 800) + e
      );
      return t.unsuspend = l, function() {
        t.unsuspend = null, clearTimeout(a), clearTimeout(n);
      };
    } : null;
  }
  function Vu() {
    if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
      if (this.stylesheets) Ju(this, this.stylesheets);
      else if (this.unsuspend) {
        var t = this.unsuspend;
        this.unsuspend = null, t();
      }
    }
  }
  var Ku = null;
  function Ju(t, e) {
    t.stylesheets = null, t.unsuspend !== null && (t.count++, Ku = /* @__PURE__ */ new Map(), e.forEach(nh, t), Ku = null, Vu.call(t));
  }
  function nh(t, e) {
    if (!(e.state.loading & 4)) {
      var l = Ku.get(t);
      if (l) var a = l.get(null);
      else {
        l = /* @__PURE__ */ new Map(), Ku.set(t, l);
        for (var n = t.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), u = 0; u < n.length; u++) {
          var i = n[u];
          (i.nodeName === "LINK" || i.getAttribute("media") !== "not all") && (l.set(i.dataset.precedence, i), a = i);
        }
        a && l.set(null, a);
      }
      n = e.instance, i = n.getAttribute("data-precedence"), u = l.get(i) || a, u === a && l.set(null, n), l.set(i, n), this.count++, a = Vu.bind(this), n.addEventListener("load", a), n.addEventListener("error", a), u ? u.parentNode.insertBefore(n, u.nextSibling) : (t = t.nodeType === 9 ? t.head : t, t.insertBefore(n, t.firstChild)), e.state.loading |= 4;
    }
  }
  var Tn = {
    $$typeof: q,
    Provider: null,
    Consumer: null,
    _currentValue: V,
    _currentValue2: V,
    _threadCount: 0
  };
  function uh(t, e, l, a, n, u, i, s, m) {
    this.tag = 1, this.containerInfo = t, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = bi(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = bi(0), this.hiddenUpdates = bi(null), this.identifierPrefix = a, this.onUncaughtError = n, this.onCaughtError = u, this.onRecoverableError = i, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = m, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function Kd(t, e, l, a, n, u, i, s, m, p, _, T) {
    return t = new uh(
      t,
      e,
      l,
      i,
      m,
      p,
      _,
      T,
      s
    ), e = 1, u === !0 && (e |= 24), u = fe(3, null, null, e), t.current = u, u.stateNode = t, e = ec(), e.refCount++, t.pooledCache = e, e.refCount++, u.memoizedState = {
      element: a,
      isDehydrated: l,
      cache: e
    }, uc(u), t;
  }
  function Jd(t) {
    return t ? (t = oa, t) : oa;
  }
  function kd(t, e, l, a, n, u) {
    n = Jd(n), a.context === null ? a.context = n : a.pendingContext = n, a = ml(e), a.payload = { element: l }, u = u === void 0 ? null : u, u !== null && (a.callback = u), l = hl(t, a, e), l !== null && (ae(l, t, e), nn(l, t, e));
  }
  function $d(t, e) {
    if (t = t.memoizedState, t !== null && t.dehydrated !== null) {
      var l = t.retryLane;
      t.retryLane = l !== 0 && l < e ? l : e;
    }
  }
  function _f(t, e) {
    $d(t, e), (t = t.alternate) && $d(t, e);
  }
  function Wd(t) {
    if (t.tag === 13 || t.tag === 31) {
      var e = Yl(t, 67108864);
      e !== null && ae(e, t, 67108864), _f(t, 67108864);
    }
  }
  function Fd(t) {
    if (t.tag === 13 || t.tag === 31) {
      var e = me();
      e = gi(e);
      var l = Yl(t, e);
      l !== null && ae(l, t, e), _f(t, e);
    }
  }
  var ku = !0;
  function ih(t, e, l, a) {
    var n = A.T;
    A.T = null;
    var u = U.p;
    try {
      U.p = 2, Af(t, e, l, a);
    } finally {
      U.p = u, A.T = n;
    }
  }
  function ch(t, e, l, a) {
    var n = A.T;
    A.T = null;
    var u = U.p;
    try {
      U.p = 8, Af(t, e, l, a);
    } finally {
      U.p = u, A.T = n;
    }
  }
  function Af(t, e, l, a) {
    if (ku) {
      var n = jf(a);
      if (n === null)
        of(
          t,
          e,
          a,
          $u,
          l
        ), Pd(t, a);
      else if (sh(
        n,
        t,
        e,
        l,
        a
      ))
        a.stopPropagation();
      else if (Pd(t, a), e & 4 && -1 < fh.indexOf(t)) {
        for (; n !== null; ) {
          var u = ta(n);
          if (u !== null)
            switch (u.tag) {
              case 3:
                if (u = u.stateNode, u.current.memoizedState.isDehydrated) {
                  var i = Ul(u.pendingLanes);
                  if (i !== 0) {
                    var s = u;
                    for (s.pendingLanes |= 2, s.entangledLanes |= 2; i; ) {
                      var m = 1 << 31 - ie(i);
                      s.entanglements[1] |= m, i &= ~m;
                    }
                    He(u), (ot & 6) === 0 && (Ou = ne() + 500, Sn(0));
                  }
                }
                break;
              case 31:
              case 13:
                s = Yl(u, 2), s !== null && ae(s, u, 2), Uu(), _f(u, 2);
            }
          if (u = jf(a), u === null && of(
            t,
            e,
            a,
            $u,
            l
          ), u === n) break;
          n = u;
        }
        n !== null && a.stopPropagation();
      } else
        of(
          t,
          e,
          a,
          null,
          l
        );
    }
  }
  function jf(t) {
    return t = Ti(t), Tf(t);
  }
  var $u = null;
  function Tf(t) {
    if ($u = null, t = Pl(t), t !== null) {
      var e = z(t);
      if (e === null) t = null;
      else {
        var l = e.tag;
        if (l === 13) {
          if (t = O(e), t !== null) return t;
          t = null;
        } else if (l === 31) {
          if (t = C(e), t !== null) return t;
          t = null;
        } else if (l === 3) {
          if (e.stateNode.current.memoizedState.isDehydrated)
            return e.tag === 3 ? e.stateNode.containerInfo : null;
          t = null;
        } else e !== t && (t = null);
      }
    }
    return $u = t, null;
  }
  function Id(t) {
    switch (t) {
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
        switch (J0()) {
          case us:
            return 2;
          case is:
            return 8;
          case Yn:
          case k0:
            return 32;
          case cs:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var Nf = !1, Al = null, jl = null, Tl = null, Nn = /* @__PURE__ */ new Map(), Cn = /* @__PURE__ */ new Map(), Nl = [], fh = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function Pd(t, e) {
    switch (t) {
      case "focusin":
      case "focusout":
        Al = null;
        break;
      case "dragenter":
      case "dragleave":
        jl = null;
        break;
      case "mouseover":
      case "mouseout":
        Tl = null;
        break;
      case "pointerover":
      case "pointerout":
        Nn.delete(e.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Cn.delete(e.pointerId);
    }
  }
  function Mn(t, e, l, a, n, u) {
    return t === null || t.nativeEvent !== u ? (t = {
      blockedOn: e,
      domEventName: l,
      eventSystemFlags: a,
      nativeEvent: u,
      targetContainers: [n]
    }, e !== null && (e = ta(e), e !== null && Wd(e)), t) : (t.eventSystemFlags |= a, e = t.targetContainers, n !== null && e.indexOf(n) === -1 && e.push(n), t);
  }
  function sh(t, e, l, a, n) {
    switch (e) {
      case "focusin":
        return Al = Mn(
          Al,
          t,
          e,
          l,
          a,
          n
        ), !0;
      case "dragenter":
        return jl = Mn(
          jl,
          t,
          e,
          l,
          a,
          n
        ), !0;
      case "mouseover":
        return Tl = Mn(
          Tl,
          t,
          e,
          l,
          a,
          n
        ), !0;
      case "pointerover":
        var u = n.pointerId;
        return Nn.set(
          u,
          Mn(
            Nn.get(u) || null,
            t,
            e,
            l,
            a,
            n
          )
        ), !0;
      case "gotpointercapture":
        return u = n.pointerId, Cn.set(
          u,
          Mn(
            Cn.get(u) || null,
            t,
            e,
            l,
            a,
            n
          )
        ), !0;
    }
    return !1;
  }
  function t0(t) {
    var e = Pl(t.target);
    if (e !== null) {
      var l = z(e);
      if (l !== null) {
        if (e = l.tag, e === 13) {
          if (e = O(l), e !== null) {
            t.blockedOn = e, ms(t.priority, function() {
              Fd(l);
            });
            return;
          }
        } else if (e === 31) {
          if (e = C(l), e !== null) {
            t.blockedOn = e, ms(t.priority, function() {
              Fd(l);
            });
            return;
          }
        } else if (e === 3 && l.stateNode.current.memoizedState.isDehydrated) {
          t.blockedOn = l.tag === 3 ? l.stateNode.containerInfo : null;
          return;
        }
      }
    }
    t.blockedOn = null;
  }
  function Wu(t) {
    if (t.blockedOn !== null) return !1;
    for (var e = t.targetContainers; 0 < e.length; ) {
      var l = jf(t.nativeEvent);
      if (l === null) {
        l = t.nativeEvent;
        var a = new l.constructor(
          l.type,
          l
        );
        ji = a, l.target.dispatchEvent(a), ji = null;
      } else
        return e = ta(l), e !== null && Wd(e), t.blockedOn = l, !1;
      e.shift();
    }
    return !0;
  }
  function e0(t, e, l) {
    Wu(t) && l.delete(e);
  }
  function rh() {
    Nf = !1, Al !== null && Wu(Al) && (Al = null), jl !== null && Wu(jl) && (jl = null), Tl !== null && Wu(Tl) && (Tl = null), Nn.forEach(e0), Cn.forEach(e0);
  }
  function Fu(t, e) {
    t.blockedOn === e && (t.blockedOn = null, Nf || (Nf = !0, c.unstable_scheduleCallback(
      c.unstable_NormalPriority,
      rh
    )));
  }
  var Iu = null;
  function l0(t) {
    Iu !== t && (Iu = t, c.unstable_scheduleCallback(
      c.unstable_NormalPriority,
      function() {
        Iu === t && (Iu = null);
        for (var e = 0; e < t.length; e += 3) {
          var l = t[e], a = t[e + 1], n = t[e + 2];
          if (typeof a != "function") {
            if (Tf(a || l) === null)
              continue;
            break;
          }
          var u = ta(l);
          u !== null && (t.splice(e, 3), e -= 3, Ac(
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
  function Ha(t) {
    function e(m) {
      return Fu(m, t);
    }
    Al !== null && Fu(Al, t), jl !== null && Fu(jl, t), Tl !== null && Fu(Tl, t), Nn.forEach(e), Cn.forEach(e);
    for (var l = 0; l < Nl.length; l++) {
      var a = Nl[l];
      a.blockedOn === t && (a.blockedOn = null);
    }
    for (; 0 < Nl.length && (l = Nl[0], l.blockedOn === null); )
      t0(l), l.blockedOn === null && Nl.shift();
    if (l = (t.ownerDocument || t).$$reactFormReplay, l != null)
      for (a = 0; a < l.length; a += 3) {
        var n = l[a], u = l[a + 1], i = n[Ft] || null;
        if (typeof u == "function")
          i || l0(l);
        else if (i) {
          var s = null;
          if (u && u.hasAttribute("formAction")) {
            if (n = u, i = u[Ft] || null)
              s = i.formAction;
            else if (Tf(n) !== null) continue;
          } else s = i.action;
          typeof s == "function" ? l[a + 1] = s : (l.splice(a, 3), a -= 3), l0(l);
        }
      }
  }
  function a0() {
    function t(u) {
      u.canIntercept && u.info === "react-transition" && u.intercept({
        handler: function() {
          return new Promise(function(i) {
            return n = i;
          });
        },
        focusReset: "manual",
        scroll: "manual"
      });
    }
    function e() {
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
      return navigation.addEventListener("navigate", t), navigation.addEventListener("navigatesuccess", e), navigation.addEventListener("navigateerror", e), setTimeout(l, 100), function() {
        a = !0, navigation.removeEventListener("navigate", t), navigation.removeEventListener("navigatesuccess", e), navigation.removeEventListener("navigateerror", e), n !== null && (n(), n = null);
      };
    }
  }
  function Cf(t) {
    this._internalRoot = t;
  }
  Pu.prototype.render = Cf.prototype.render = function(t) {
    var e = this._internalRoot;
    if (e === null) throw Error(f(409));
    var l = e.current, a = me();
    kd(l, a, t, e, null, null);
  }, Pu.prototype.unmount = Cf.prototype.unmount = function() {
    var t = this._internalRoot;
    if (t !== null) {
      this._internalRoot = null;
      var e = t.containerInfo;
      kd(t.current, 2, null, t, null, null), Uu(), e[Il] = null;
    }
  };
  function Pu(t) {
    this._internalRoot = t;
  }
  Pu.prototype.unstable_scheduleHydration = function(t) {
    if (t) {
      var e = ds();
      t = { blockedOn: null, target: t, priority: e };
      for (var l = 0; l < Nl.length && e !== 0 && e < Nl[l].priority; l++) ;
      Nl.splice(l, 0, t), l === 0 && t0(t);
    }
  };
  var n0 = d.version;
  if (n0 !== "19.2.3")
    throw Error(
      f(
        527,
        n0,
        "19.2.3"
      )
    );
  U.findDOMNode = function(t) {
    var e = t._reactInternals;
    if (e === void 0)
      throw typeof t.render == "function" ? Error(f(188)) : (t = Object.keys(t).join(","), Error(f(268, t)));
    return t = x(e), t = t !== null ? D(t) : null, t = t === null ? null : t.stateNode, t;
  };
  var oh = {
    bundleType: 0,
    version: "19.2.3",
    rendererPackageName: "react-dom",
    currentDispatcherRef: A,
    reconcilerVersion: "19.2.3"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var ti = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!ti.isDisabled && ti.supportsFiber)
      try {
        Ya = ti.inject(
          oh
        ), ue = ti;
      } catch {
      }
  }
  return On.createRoot = function(t, e) {
    if (!b(t)) throw Error(f(299));
    var l = !1, a = "", n = ro, u = oo, i = mo;
    return e != null && (e.unstable_strictMode === !0 && (l = !0), e.identifierPrefix !== void 0 && (a = e.identifierPrefix), e.onUncaughtError !== void 0 && (n = e.onUncaughtError), e.onCaughtError !== void 0 && (u = e.onCaughtError), e.onRecoverableError !== void 0 && (i = e.onRecoverableError)), e = Kd(
      t,
      1,
      !1,
      null,
      null,
      l,
      a,
      null,
      n,
      u,
      i,
      a0
    ), t[Il] = e.current, rf(t), new Cf(e);
  }, On.hydrateRoot = function(t, e, l) {
    if (!b(t)) throw Error(f(299));
    var a = !1, n = "", u = ro, i = oo, s = mo, m = null;
    return l != null && (l.unstable_strictMode === !0 && (a = !0), l.identifierPrefix !== void 0 && (n = l.identifierPrefix), l.onUncaughtError !== void 0 && (u = l.onUncaughtError), l.onCaughtError !== void 0 && (i = l.onCaughtError), l.onRecoverableError !== void 0 && (s = l.onRecoverableError), l.formState !== void 0 && (m = l.formState)), e = Kd(
      t,
      1,
      !0,
      e,
      l ?? null,
      a,
      n,
      m,
      u,
      i,
      s,
      a0
    ), e.context = Jd(null), l = e.current, a = me(), a = gi(a), n = ml(a), n.callback = null, hl(l, n, a), l = a, e.current.lanes = l, Ga(e, l), He(e), t[Il] = e.current, rf(t), new Pu(e);
  }, On.version = "19.2.3", On;
}
var d0;
function ph() {
  if (d0) return Of.exports;
  d0 = 1;
  function c() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(c);
      } catch (d) {
        console.error(d);
      }
  }
  return c(), Of.exports = gh(), Of.exports;
}
var xh = ph();
const Sh = /* @__PURE__ */ N0(xh);
var Hf = { exports: {} }, Dn = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var m0;
function Eh() {
  if (m0) return Dn;
  m0 = 1;
  var c = Symbol.for("react.transitional.element"), d = Symbol.for("react.fragment");
  function r(f, b, z) {
    var O = null;
    if (z !== void 0 && (O = "" + z), b.key !== void 0 && (O = "" + b.key), "key" in b) {
      z = {};
      for (var C in b)
        C !== "key" && (z[C] = b[C]);
    } else z = b;
    return b = z.ref, {
      $$typeof: c,
      type: f,
      key: O,
      ref: b !== void 0 ? b : null,
      props: z
    };
  }
  return Dn.Fragment = d, Dn.jsx = r, Dn.jsxs = r, Dn;
}
var h0;
function zh() {
  return h0 || (h0 = 1, Hf.exports = Eh()), Hf.exports;
}
var o = zh();
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const _h = (c) => c.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), Ah = (c) => c.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (d, r, f) => f ? f.toUpperCase() : r.toLowerCase()
), v0 = (c) => {
  const d = Ah(c);
  return d.charAt(0).toUpperCase() + d.slice(1);
}, C0 = (...c) => c.filter((d, r, f) => !!d && d.trim() !== "" && f.indexOf(d) === r).join(" ").trim(), jh = (c) => {
  for (const d in c)
    if (d.startsWith("aria-") || d === "role" || d === "title")
      return !0;
};
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Th = {
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
const Nh = Z.forwardRef(
  ({
    color: c = "currentColor",
    size: d = 24,
    strokeWidth: r = 2,
    absoluteStrokeWidth: f,
    className: b = "",
    children: z,
    iconNode: O,
    ...C
  }, N) => Z.createElement(
    "svg",
    {
      ref: N,
      ...Th,
      width: d,
      height: d,
      stroke: c,
      strokeWidth: f ? Number(r) * 24 / Number(d) : r,
      className: C0("lucide", b),
      ...!z && !jh(C) && { "aria-hidden": "true" },
      ...C
    },
    [
      ...O.map(([x, D]) => Z.createElement(x, D)),
      ...Array.isArray(z) ? z : [z]
    ]
  )
);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ft = (c, d) => {
  const r = Z.forwardRef(
    ({ className: f, ...b }, z) => Z.createElement(Nh, {
      ref: z,
      iconNode: d,
      className: C0(
        `lucide-${_h(v0(c))}`,
        `lucide-${c}`,
        f
      ),
      ...b
    })
  );
  return r.displayName = v0(c), r;
};
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ch = [
  ["path", { d: "M12 17V3", key: "1cwfxf" }],
  ["path", { d: "m6 11 6 6 6-6", key: "12ii2o" }],
  ["path", { d: "M19 21H5", key: "150jfl" }]
], Mh = ft("arrow-down-to-line", Ch);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Oh = [
  ["path", { d: "M12 18V5", key: "adv99a" }],
  ["path", { d: "M15 13a4.17 4.17 0 0 1-3-4 4.17 4.17 0 0 1-3 4", key: "1e3is1" }],
  ["path", { d: "M17.598 6.5A3 3 0 1 0 12 5a3 3 0 1 0-5.598 1.5", key: "1gqd8o" }],
  ["path", { d: "M17.997 5.125a4 4 0 0 1 2.526 5.77", key: "iwvgf7" }],
  ["path", { d: "M18 18a4 4 0 0 0 2-7.464", key: "efp6ie" }],
  ["path", { d: "M19.967 17.483A4 4 0 1 1 12 18a4 4 0 1 1-7.967-.517", key: "1gq6am" }],
  ["path", { d: "M6 18a4 4 0 0 1-2-7.464", key: "k1g0md" }],
  ["path", { d: "M6.003 5.125a4 4 0 0 0-2.526 5.77", key: "q97ue3" }]
], If = ft("brain", Oh);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Dh = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]], Uh = ft("check", Dh);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Rh = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]], Hh = ft("chevron-down", Rh);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const qh = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]], Bh = ft("chevron-right", qh);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Yh = [
  ["path", { d: "M12 6v6l4 2", key: "mmk7yg" }],
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]
], Lh = ft("clock", Yh);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Gh = [
  ["path", { d: "M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z", key: "p7xjir" }]
], wh = ft("cloud", Gh);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Qh = [
  [
    "path",
    { d: "M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3", key: "11bfej" }
  ]
], Xh = ft("command", Qh);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Zh = [
  ["rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2", key: "17jyea" }],
  ["path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2", key: "zix9uf" }]
], Vh = ft("copy", Zh);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Kh = [
  ["path", { d: "M20 4v7a4 4 0 0 1-4 4H4", key: "6o5b7l" }],
  ["path", { d: "m9 10-5 5 5 5", key: "1kshq7" }]
], y0 = ft("corner-down-left", Kh);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Jh = [
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
], M0 = ft("cpu", Jh);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const kh = [
  ["ellipse", { cx: "12", cy: "5", rx: "9", ry: "3", key: "msslwz" }],
  ["path", { d: "M3 5V19A9 3 0 0 0 21 19V5", key: "1wlel7" }],
  ["path", { d: "M3 12A9 3 0 0 0 21 12", key: "mv7ke4" }]
], $h = ft("database", kh);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Wh = [
  ["path", { d: "M12 15V3", key: "m9g1x1" }],
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
  ["path", { d: "m7 10 5 5 5-5", key: "brsn70" }]
], Fh = ft("download", Wh);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ih = [
  [
    "path",
    {
      d: "M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z",
      key: "sc7q7i"
    }
  ]
], b0 = ft("funnel", Ih);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ph = [
  ["path", { d: "m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4", key: "g0fldk" }],
  ["path", { d: "m21 2-9.6 9.6", key: "1j0ho8" }],
  ["circle", { cx: "7.5", cy: "15.5", r: "5.5", key: "yqb3hr" }]
], Rn = ft("key", Ph);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const t2 = [
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
], e2 = ft("layers", t2);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const l2 = [
  ["rect", { width: "7", height: "9", x: "3", y: "3", rx: "1", key: "10lvy0" }],
  ["rect", { width: "7", height: "5", x: "14", y: "3", rx: "1", key: "16une8" }],
  ["rect", { width: "7", height: "9", x: "14", y: "12", rx: "1", key: "1hutg5" }],
  ["rect", { width: "7", height: "5", x: "3", y: "16", rx: "1", key: "ldoo1y" }]
], a2 = ft("layout-dashboard", l2);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const n2 = [
  ["path", { d: "M3 5h.01", key: "18ugdj" }],
  ["path", { d: "M3 12h.01", key: "nlz23k" }],
  ["path", { d: "M3 19h.01", key: "noohij" }],
  ["path", { d: "M8 5h13", key: "1pao27" }],
  ["path", { d: "M8 12h13", key: "1za7za" }],
  ["path", { d: "M8 19h13", key: "m83p4d" }]
], O0 = ft("list", n2);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const u2 = [
  ["path", { d: "M15 3h6v6", key: "1q9fwt" }],
  ["path", { d: "m21 3-7 7", key: "1l2asr" }],
  ["path", { d: "m3 21 7-7", key: "tjx5ai" }],
  ["path", { d: "M9 21H3v-6", key: "wtvkvv" }]
], i2 = ft("maximize-2", u2);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const c2 = [
  ["path", { d: "M4 5h16", key: "1tepv9" }],
  ["path", { d: "M4 12h16", key: "1lakjw" }],
  ["path", { d: "M4 19h16", key: "1djgab" }]
], f2 = ft("menu", c2);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const s2 = [
  ["path", { d: "m14 10 7-7", key: "oa77jy" }],
  ["path", { d: "M20 10h-6V4", key: "mjg0md" }],
  ["path", { d: "m3 21 7-7", key: "tjx5ai" }],
  ["path", { d: "M4 14h6v6", key: "rmj7iw" }]
], r2 = ft("minimize-2", s2);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const o2 = [
  ["rect", { x: "16", y: "16", width: "6", height: "6", rx: "1", key: "4q2zg0" }],
  ["rect", { x: "2", y: "16", width: "6", height: "6", rx: "1", key: "8cvhb9" }],
  ["rect", { x: "9", y: "2", width: "6", height: "6", rx: "1", key: "1egb70" }],
  ["path", { d: "M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3", key: "1jsf9p" }],
  ["path", { d: "M12 12V8", key: "2874zd" }]
], Pf = ft("network", o2);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const d2 = [
  [
    "path",
    {
      d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
      key: "1a8usu"
    }
  ]
], m2 = ft("pen", d2);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const h2 = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
], v2 = ft("plus", h2);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const y2 = [
  ["path", { d: "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8", key: "v9h5vc" }],
  ["path", { d: "M21 3v5h-5", key: "1q7to0" }],
  ["path", { d: "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16", key: "3uifl3" }],
  ["path", { d: "M8 16H3v5", key: "1cv678" }]
], b2 = ft("refresh-cw", y2);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const g2 = [
  [
    "path",
    {
      d: "M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",
      key: "1c8476"
    }
  ],
  ["path", { d: "M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7", key: "1ydtos" }],
  ["path", { d: "M7 3v4a1 1 0 0 0 1 1h7", key: "t51u73" }]
], p2 = ft("save", g2);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const x2 = [
  ["path", { d: "m21 21-4.34-4.34", key: "14j7rj" }],
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }]
], wf = ft("search", x2);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const S2 = [
  ["rect", { width: "20", height: "8", x: "2", y: "2", rx: "2", ry: "2", key: "ngkwjq" }],
  ["rect", { width: "20", height: "8", x: "2", y: "14", rx: "2", ry: "2", key: "iecqi9" }],
  ["line", { x1: "6", x2: "6.01", y1: "6", y2: "6", key: "16zg32" }],
  ["line", { x1: "6", x2: "6.01", y1: "18", y2: "18", key: "nzw8ys" }]
], D0 = ft("server", S2);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const E2 = [
  [
    "path",
    {
      d: "M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",
      key: "1i5ecw"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
], ts = ft("settings", E2);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const z2 = [
  ["path", { d: "M12 19h8", key: "baeox8" }],
  ["path", { d: "m4 17 6-6-6-6", key: "1yngyt" }]
], Hn = ft("terminal", z2);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const _2 = [
  ["path", { d: "M10 11v6", key: "nco0om" }],
  ["path", { d: "M14 11v6", key: "outv1u" }],
  ["path", { d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6", key: "miytrc" }],
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2", key: "e791ji" }]
], U0 = ft("trash-2", _2);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const A2 = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
], R0 = ft("x", A2);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const j2 = [
  [
    "path",
    {
      d: "M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",
      key: "1xq2db"
    }
  ]
], T2 = ft("zap", j2), Qf = [
  // 导航命令
  {
    id: "nav-memory",
    icon: O0,
    label: "前往记忆流",
    description: "查看所有记忆片段的时间线",
    action: (c) => c("/memory"),
    keywords: ["memory", "stream", "timeline", "记忆"],
    type: "navigation"
  },
  {
    id: "nav-graph",
    icon: Pf,
    label: "前往世界图谱",
    description: "探索实体关系可视化网络",
    action: (c) => c("/graph"),
    keywords: ["graph", "world", "map", "图谱"],
    type: "navigation"
  },
  {
    id: "nav-brain",
    icon: If,
    label: "前往大脑控制台",
    description: "记忆操作、总结与向量化",
    action: (c) => c("/brain"),
    keywords: ["brain", "console", "summarize", "大脑"],
    type: "navigation"
  },
  {
    id: "nav-api",
    icon: Rn,
    label: "API 预设配置",
    description: "管理 LLM 连接设置",
    action: (c) => c("/api"),
    keywords: ["api", "config", "llm", "设置"],
    type: "navigation"
  },
  {
    id: "nav-dev",
    icon: Hn,
    label: "开发日志",
    description: "查看系统运行日志和状态",
    action: (c) => c("/dev"),
    keywords: ["dev", "log", "debug", "日志"],
    type: "navigation"
  },
  {
    id: "nav-settings",
    icon: ts,
    label: "系统设置",
    description: "调整 Engram 全局选项",
    action: (c) => c("/settings"),
    keywords: ["settings", "config", "option", "选项"],
    type: "navigation"
  }
];
function N2(c) {
  const d = c.toLowerCase().trim();
  return d ? Qf.filter((r) => {
    var f;
    return r.label.toLowerCase().includes(d) || ((f = r.description) == null ? void 0 : f.toLowerCase().includes(d)) || r.keywords.some((b) => b.toLowerCase().includes(d));
  }) : Qf;
}
const C2 = ({ onNavigate: c }) => {
  const [d, r] = Z.useState(""), [f, b] = Z.useState(!1), [z, O] = Z.useState(0), [C, N] = Z.useState(Qf), x = Z.useRef(null), D = Z.useRef(null);
  Z.useEffect(() => {
    N(N2(d)), O(0);
  }, [d]), Z.useEffect(() => {
    const w = (et) => {
      x.current && !x.current.contains(et.target) && b(!1);
    };
    return document.addEventListener("mousedown", w), () => document.removeEventListener("mousedown", w);
  }, []), Z.useEffect(() => {
    const w = (et) => {
      var F;
      (et.metaKey || et.ctrlKey) && et.key === "k" && (et.preventDefault(), (F = D.current) == null || F.focus(), b(!0));
    };
    return window.addEventListener("keydown", w), () => window.removeEventListener("keydown", w);
  }, []);
  const H = (w) => {
    var F;
    if (!f) {
      (w.key === "ArrowDown" || w.key === "Enter") && b(!0);
      return;
    }
    const et = C.length + (d ? 1 : 0);
    switch (w.key) {
      case "ArrowDown":
        w.preventDefault(), O((G) => (G + 1) % et);
        break;
      case "ArrowUp":
        w.preventDefault(), O((G) => (G - 1 + et) % et);
        break;
      case "Enter":
        w.preventDefault(), J();
        break;
      case "Escape":
        b(!1), (F = D.current) == null || F.blur();
        break;
    }
  }, J = () => {
    C.length > 0 && z < C.length ? C[z].action(c) : d && (console.log("Searching memory for:", d), c("/memory")), b(!1), r("");
  };
  return /* @__PURE__ */ o.jsxs("div", { className: "engram-command-palette", ref: x, children: [
    /* @__PURE__ */ o.jsxs("div", { className: `engram-cp-input-wrapper ${f ? "active" : ""}`, children: [
      /* @__PURE__ */ o.jsx(wf, { size: 16, className: "engram-cp-icon" }),
      /* @__PURE__ */ o.jsx(
        "input",
        {
          ref: D,
          type: "text",
          className: "engram-cp-input",
          placeholder: "搜索命令、页面或记忆... (Cmd+K)",
          value: d,
          onChange: (w) => {
            r(w.target.value), b(!0);
          },
          onFocus: () => b(!0),
          onKeyDown: H
        }
      ),
      !d && /* @__PURE__ */ o.jsxs("div", { className: "engram-cp-shortcut", children: [
        /* @__PURE__ */ o.jsx(Xh, { size: 12 }),
        "K"
      ] })
    ] }),
    f && /* @__PURE__ */ o.jsxs("div", { className: "engram-cp-dropdown", children: [
      C.length > 0 && /* @__PURE__ */ o.jsxs("div", { className: "engram-cp-group", children: [
        /* @__PURE__ */ o.jsx("div", { className: "engram-cp-label", children: "功能与导航" }),
        C.map((w, et) => /* @__PURE__ */ o.jsxs(
          "div",
          {
            className: `engram-cp-item ${et === z ? "selected" : ""}`,
            onClick: () => {
              w.action(c), b(!1), r("");
            },
            children: [
              /* @__PURE__ */ o.jsx(w.icon, { size: 16, className: "engram-cp-item-icon" }),
              /* @__PURE__ */ o.jsxs("div", { className: "engram-cp-item-content", children: [
                /* @__PURE__ */ o.jsx("div", { className: "engram-cp-item-title", children: w.label }),
                w.description && /* @__PURE__ */ o.jsx("div", { className: "engram-cp-item-desc", children: w.description })
              ] }),
              et === z && /* @__PURE__ */ o.jsx(y0, { size: 14, className: "engram-cp-enter" })
            ]
          },
          w.id
        ))
      ] }),
      d && /* @__PURE__ */ o.jsxs("div", { className: "engram-cp-group", children: [
        /* @__PURE__ */ o.jsx("div", { className: "engram-cp-label", children: "搜索" }),
        /* @__PURE__ */ o.jsxs(
          "div",
          {
            className: `engram-cp-item ${z === C.length ? "selected" : ""}`,
            onClick: () => {
              J();
            },
            children: [
              /* @__PURE__ */ o.jsx(wf, { size: 16, className: "engram-cp-item-icon" }),
              /* @__PURE__ */ o.jsxs("div", { className: "engram-cp-item-content", children: [
                /* @__PURE__ */ o.jsxs("div", { className: "engram-cp-item-title", children: [
                  '搜索记忆: "',
                  d,
                  '"'
                ] }),
                /* @__PURE__ */ o.jsx("div", { className: "engram-cp-item-desc", children: "在记忆流和图谱中搜索此关键词" })
              ] }),
              z === C.length && /* @__PURE__ */ o.jsx(y0, { size: 14, className: "engram-cp-enter" })
            ]
          }
        )
      ] }),
      C.length === 0 && !d && /* @__PURE__ */ o.jsx("div", { className: "engram-cp-empty", children: "无需搜索，直接输入..." })
    ] })
  ] });
}, M2 = ({
  isFullscreen: c,
  onToggleFullscreen: d,
  onToggleSidebar: r,
  isMobile: f,
  onClose: b,
  onNavigate: z
}) => /* @__PURE__ */ o.jsxs("header", { className: "engram-header", children: [
  /* @__PURE__ */ o.jsxs("div", { className: "engram-header-left", children: [
    f && /* @__PURE__ */ o.jsx(
      "button",
      {
        className: "engram-icon-btn",
        onClick: r,
        title: "菜单",
        children: /* @__PURE__ */ o.jsx(f2, { size: 20 })
      }
    ),
    /* @__PURE__ */ o.jsx("span", { className: "engram-logo-text", children: "Engram" })
  ] }),
  /* @__PURE__ */ o.jsx("div", { className: "engram-header-center", children: /* @__PURE__ */ o.jsx(C2, { onNavigate: z }) }),
  /* @__PURE__ */ o.jsxs("div", { className: "engram-header-right", children: [
    /* @__PURE__ */ o.jsx(
      "button",
      {
        className: "engram-icon-btn",
        onClick: d,
        title: c ? "退出全屏" : "全屏",
        children: c ? /* @__PURE__ */ o.jsx(r2, { size: 18 }) : /* @__PURE__ */ o.jsx(i2, { size: 18 })
      }
    ),
    /* @__PURE__ */ o.jsx(
      "button",
      {
        className: "engram-icon-btn engram-close-btn",
        onClick: b,
        title: "关闭",
        children: /* @__PURE__ */ o.jsx(R0, { size: 18 })
      }
    )
  ] })
] }), O2 = [
  { id: "dashboard", icon: a2, label: "仪表盘", path: "/dashboard" },
  { id: "memory", icon: O0, label: "记忆流", path: "/memory" },
  { id: "graph", icon: Pf, label: "世界图谱", path: "/graph" },
  { id: "brain", icon: If, label: "记忆", path: "/brain" },
  { id: "api", icon: Rn, label: "API 预设", path: "/api" },
  { id: "dev", icon: Hn, label: "开发日志", path: "/dev" },
  { id: "settings", icon: ts, label: "设置", path: "/settings" }
], D2 = ({
  currentPath: c,
  onNavigate: d,
  isOpen: r,
  onClose: f,
  isMobile: b
}) => {
  const z = (C) => {
    d(C.path), b && f();
  }, O = (C) => c.startsWith(C);
  return b && !r ? null : /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
    b && r && /* @__PURE__ */ o.jsx("div", { className: "engram-sidebar-overlay", onClick: f }),
    /* @__PURE__ */ o.jsxs("nav", { className: `engram-sidebar ${r ? "open" : ""}`, children: [
      b && /* @__PURE__ */ o.jsxs("div", { className: "engram-sidebar-header", children: [
        /* @__PURE__ */ o.jsx("span", { children: "导航" }),
        /* @__PURE__ */ o.jsx("button", { className: "engram-icon-btn", onClick: f, children: /* @__PURE__ */ o.jsx(R0, { size: 18 }) })
      ] }),
      /* @__PURE__ */ o.jsx("ul", { className: "engram-nav-list", children: O2.map((C) => /* @__PURE__ */ o.jsx("li", { className: "engram-nav-item", children: /* @__PURE__ */ o.jsx(
        "button",
        {
          className: `engram-nav-btn ${O(C.path) ? "active" : ""}`,
          onClick: () => z(C),
          title: C.label,
          children: /* @__PURE__ */ o.jsx(C.icon, { size: 20 })
        }
      ) }, C.id)) })
    ] })
  ] });
}, U2 = ({
  children: c,
  currentPath: d,
  onNavigate: r,
  isFullscreen: f,
  onToggleFullscreen: b,
  isSidebarOpen: z,
  onToggleSidebar: O,
  onCloseSidebar: C,
  isMobile: N,
  onClose: x
}) => /* @__PURE__ */ o.jsxs("div", { className: `flex flex-col h-full w-full bg-[rgba(30,30,35,0.95)] text-slate-200 overflow-hidden ${f ? "fixed top-0 left-0 right-0 bottom-0 z-[10000]" : ""}`, children: [
  /* @__PURE__ */ o.jsx(
    M2,
    {
      isFullscreen: f,
      onToggleFullscreen: b,
      onToggleSidebar: O,
      isMobile: N,
      onClose: x,
      onNavigate: r
    }
  ),
  /* @__PURE__ */ o.jsxs("div", { className: "flex flex-1 min-h-0 overflow-hidden relative", children: [
    /* @__PURE__ */ o.jsx(
      D2,
      {
        currentPath: d,
        onNavigate: r,
        isOpen: z,
        onClose: C,
        isMobile: N
      }
    ),
    /* @__PURE__ */ o.jsx("main", { className: "flex-1 overflow-y-auto overflow-x-hidden p-4 min-w-0 min-h-0", children: c })
  ] })
] }), qf = ({
  title: c,
  value: d,
  icon: r,
  subtext: f,
  highlight: b = !1
}) => /* @__PURE__ */ o.jsxs("div", { className: `flex-1 flex flex-col p-4 bg-surface backdrop-blur-md border border-border-light rounded-lg overflow-hidden relative transition-all duration-200 hover:shadow-md hover:border-border-default ${b ? "bg-primary-10 border-primary-30" : ""}`, children: [
  /* @__PURE__ */ o.jsxs("div", { className: "flex justify-between items-start mb-3", children: [
    /* @__PURE__ */ o.jsx("div", { className: `p-2 rounded-lg ${b ? "bg-primary-20 text-primary" : "bg-hover text-text-secondary"}`, children: /* @__PURE__ */ o.jsx(r, { size: 20 }) }),
    b && /* @__PURE__ */ o.jsx("div", { className: "w-2 h-2 bg-success rounded-full shadow-[0_0_8px_var(--engram-success)]" })
  ] }),
  /* @__PURE__ */ o.jsxs("div", { children: [
    /* @__PURE__ */ o.jsx("div", { className: "text-2xl font-bold text-primary font-mono", children: d }),
    /* @__PURE__ */ o.jsx("div", { className: "text-[11px] text-muted font-semibold mt-1 tracking-[0.5px]", children: c }),
    f && /* @__PURE__ */ o.jsx("div", { className: "text-[10px] text-disabled mt-0.5", children: f })
  ] })
] }), Kt = [];
for (let c = 0; c < 256; ++c)
  Kt.push((c + 256).toString(16).slice(1));
function R2(c, d = 0) {
  return (Kt[c[d + 0]] + Kt[c[d + 1]] + Kt[c[d + 2]] + Kt[c[d + 3]] + "-" + Kt[c[d + 4]] + Kt[c[d + 5]] + "-" + Kt[c[d + 6]] + Kt[c[d + 7]] + "-" + Kt[c[d + 8]] + Kt[c[d + 9]] + "-" + Kt[c[d + 10]] + Kt[c[d + 11]] + Kt[c[d + 12]] + Kt[c[d + 13]] + Kt[c[d + 14]] + Kt[c[d + 15]]).toLowerCase();
}
let Bf;
const H2 = new Uint8Array(16);
function q2() {
  if (!Bf) {
    if (typeof crypto > "u" || !crypto.getRandomValues)
      throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
    Bf = crypto.getRandomValues.bind(crypto);
  }
  return Bf(H2);
}
const B2 = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto), g0 = { randomUUID: B2 };
function Y2(c, d, r) {
  var b;
  c = c || {};
  const f = c.random ?? ((b = c.rng) == null ? void 0 : b.call(c)) ?? q2();
  if (f.length < 16)
    throw new Error("Random bytes length must be >= 16");
  return f[6] = f[6] & 15 | 64, f[8] = f[8] & 63 | 128, R2(f);
}
function L2(c, d, r) {
  return g0.randomUUID && !c ? g0.randomUUID() : Y2(c);
}
var Xf = function(c, d) {
  return Xf = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(r, f) {
    r.__proto__ = f;
  } || function(r, f) {
    for (var b in f) Object.prototype.hasOwnProperty.call(f, b) && (r[b] = f[b]);
  }, Xf(c, d);
};
function qn(c, d) {
  if (typeof d != "function" && d !== null)
    throw new TypeError("Class extends value " + String(d) + " is not a constructor or null");
  Xf(c, d);
  function r() {
    this.constructor = c;
  }
  c.prototype = d === null ? Object.create(d) : (r.prototype = d.prototype, new r());
}
function Zf(c) {
  var d = typeof Symbol == "function" && Symbol.iterator, r = d && c[d], f = 0;
  if (r) return r.call(c);
  if (c && typeof c.length == "number") return {
    next: function() {
      return c && f >= c.length && (c = void 0), { value: c && c[f++], done: !c };
    }
  };
  throw new TypeError(d ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function Vf(c, d) {
  var r = typeof Symbol == "function" && c[Symbol.iterator];
  if (!r) return c;
  var f = r.call(c), b, z = [], O;
  try {
    for (; (d === void 0 || d-- > 0) && !(b = f.next()).done; ) z.push(b.value);
  } catch (C) {
    O = { error: C };
  } finally {
    try {
      b && !b.done && (r = f.return) && r.call(f);
    } finally {
      if (O) throw O.error;
    }
  }
  return z;
}
function Kf(c, d, r) {
  if (r || arguments.length === 2) for (var f = 0, b = d.length, z; f < b; f++)
    (z || !(f in d)) && (z || (z = Array.prototype.slice.call(d, 0, f)), z[f] = d[f]);
  return c.concat(z || Array.prototype.slice.call(d));
}
function Ye(c) {
  return typeof c == "function";
}
function H0(c) {
  var d = function(f) {
    Error.call(f), f.stack = new Error().stack;
  }, r = c(d);
  return r.prototype = Object.create(Error.prototype), r.prototype.constructor = r, r;
}
var Yf = H0(function(c) {
  return function(r) {
    c(this), this.message = r ? r.length + ` errors occurred during unsubscription:
` + r.map(function(f, b) {
      return b + 1 + ") " + f.toString();
    }).join(`
  `) : "", this.name = "UnsubscriptionError", this.errors = r;
  };
});
function Jf(c, d) {
  if (c) {
    var r = c.indexOf(d);
    0 <= r && c.splice(r, 1);
  }
}
var ri = (function() {
  function c(d) {
    this.initialTeardown = d, this.closed = !1, this._parentage = null, this._finalizers = null;
  }
  return c.prototype.unsubscribe = function() {
    var d, r, f, b, z;
    if (!this.closed) {
      this.closed = !0;
      var O = this._parentage;
      if (O)
        if (this._parentage = null, Array.isArray(O))
          try {
            for (var C = Zf(O), N = C.next(); !N.done; N = C.next()) {
              var x = N.value;
              x.remove(this);
            }
          } catch (F) {
            d = { error: F };
          } finally {
            try {
              N && !N.done && (r = C.return) && r.call(C);
            } finally {
              if (d) throw d.error;
            }
          }
        else
          O.remove(this);
      var D = this.initialTeardown;
      if (Ye(D))
        try {
          D();
        } catch (F) {
          z = F instanceof Yf ? F.errors : [F];
        }
      var H = this._finalizers;
      if (H) {
        this._finalizers = null;
        try {
          for (var J = Zf(H), w = J.next(); !w.done; w = J.next()) {
            var et = w.value;
            try {
              p0(et);
            } catch (F) {
              z = z ?? [], F instanceof Yf ? z = Kf(Kf([], Vf(z)), Vf(F.errors)) : z.push(F);
            }
          }
        } catch (F) {
          f = { error: F };
        } finally {
          try {
            w && !w.done && (b = J.return) && b.call(J);
          } finally {
            if (f) throw f.error;
          }
        }
      }
      if (z)
        throw new Yf(z);
    }
  }, c.prototype.add = function(d) {
    var r;
    if (d && d !== this)
      if (this.closed)
        p0(d);
      else {
        if (d instanceof c) {
          if (d.closed || d._hasParent(this))
            return;
          d._addParent(this);
        }
        (this._finalizers = (r = this._finalizers) !== null && r !== void 0 ? r : []).push(d);
      }
  }, c.prototype._hasParent = function(d) {
    var r = this._parentage;
    return r === d || Array.isArray(r) && r.includes(d);
  }, c.prototype._addParent = function(d) {
    var r = this._parentage;
    this._parentage = Array.isArray(r) ? (r.push(d), r) : r ? [r, d] : d;
  }, c.prototype._removeParent = function(d) {
    var r = this._parentage;
    r === d ? this._parentage = null : Array.isArray(r) && Jf(r, d);
  }, c.prototype.remove = function(d) {
    var r = this._finalizers;
    r && Jf(r, d), d instanceof c && d._removeParent(this);
  }, c.EMPTY = (function() {
    var d = new c();
    return d.closed = !0, d;
  })(), c;
})(), q0 = ri.EMPTY;
function B0(c) {
  return c instanceof ri || c && "closed" in c && Ye(c.remove) && Ye(c.add) && Ye(c.unsubscribe);
}
function p0(c) {
  Ye(c) ? c() : c.unsubscribe();
}
var G2 = {
  Promise: void 0
}, w2 = {
  setTimeout: function(c, d) {
    for (var r = [], f = 2; f < arguments.length; f++)
      r[f - 2] = arguments[f];
    return setTimeout.apply(void 0, Kf([c, d], Vf(r)));
  },
  clearTimeout: function(c) {
    return clearTimeout(c);
  },
  delegate: void 0
};
function Q2(c) {
  w2.setTimeout(function() {
    throw c;
  });
}
function x0() {
}
function ni(c) {
  c();
}
var es = (function(c) {
  qn(d, c);
  function d(r) {
    var f = c.call(this) || this;
    return f.isStopped = !1, r ? (f.destination = r, B0(r) && r.add(f)) : f.destination = V2, f;
  }
  return d.create = function(r, f, b) {
    return new kf(r, f, b);
  }, d.prototype.next = function(r) {
    this.isStopped || this._next(r);
  }, d.prototype.error = function(r) {
    this.isStopped || (this.isStopped = !0, this._error(r));
  }, d.prototype.complete = function() {
    this.isStopped || (this.isStopped = !0, this._complete());
  }, d.prototype.unsubscribe = function() {
    this.closed || (this.isStopped = !0, c.prototype.unsubscribe.call(this), this.destination = null);
  }, d.prototype._next = function(r) {
    this.destination.next(r);
  }, d.prototype._error = function(r) {
    try {
      this.destination.error(r);
    } finally {
      this.unsubscribe();
    }
  }, d.prototype._complete = function() {
    try {
      this.destination.complete();
    } finally {
      this.unsubscribe();
    }
  }, d;
})(ri), X2 = (function() {
  function c(d) {
    this.partialObserver = d;
  }
  return c.prototype.next = function(d) {
    var r = this.partialObserver;
    if (r.next)
      try {
        r.next(d);
      } catch (f) {
        ei(f);
      }
  }, c.prototype.error = function(d) {
    var r = this.partialObserver;
    if (r.error)
      try {
        r.error(d);
      } catch (f) {
        ei(f);
      }
    else
      ei(d);
  }, c.prototype.complete = function() {
    var d = this.partialObserver;
    if (d.complete)
      try {
        d.complete();
      } catch (r) {
        ei(r);
      }
  }, c;
})(), kf = (function(c) {
  qn(d, c);
  function d(r, f, b) {
    var z = c.call(this) || this, O;
    return Ye(r) || !r ? O = {
      next: r ?? void 0,
      error: f ?? void 0,
      complete: b ?? void 0
    } : O = r, z.destination = new X2(O), z;
  }
  return d;
})(es);
function ei(c) {
  Q2(c);
}
function Z2(c) {
  throw c;
}
var V2 = {
  closed: !0,
  next: x0,
  error: Z2,
  complete: x0
}, K2 = (function() {
  return typeof Symbol == "function" && Symbol.observable || "@@observable";
})();
function J2(c) {
  return c;
}
function k2(c) {
  return c.length === 0 ? J2 : c.length === 1 ? c[0] : function(r) {
    return c.reduce(function(f, b) {
      return b(f);
    }, r);
  };
}
var S0 = (function() {
  function c(d) {
    d && (this._subscribe = d);
  }
  return c.prototype.lift = function(d) {
    var r = new c();
    return r.source = this, r.operator = d, r;
  }, c.prototype.subscribe = function(d, r, f) {
    var b = this, z = W2(d) ? d : new kf(d, r, f);
    return ni(function() {
      var O = b, C = O.operator, N = O.source;
      z.add(C ? C.call(z, N) : N ? b._subscribe(z) : b._trySubscribe(z));
    }), z;
  }, c.prototype._trySubscribe = function(d) {
    try {
      return this._subscribe(d);
    } catch (r) {
      d.error(r);
    }
  }, c.prototype.forEach = function(d, r) {
    var f = this;
    return r = E0(r), new r(function(b, z) {
      var O = new kf({
        next: function(C) {
          try {
            d(C);
          } catch (N) {
            z(N), O.unsubscribe();
          }
        },
        error: z,
        complete: b
      });
      f.subscribe(O);
    });
  }, c.prototype._subscribe = function(d) {
    var r;
    return (r = this.source) === null || r === void 0 ? void 0 : r.subscribe(d);
  }, c.prototype[K2] = function() {
    return this;
  }, c.prototype.pipe = function() {
    for (var d = [], r = 0; r < arguments.length; r++)
      d[r] = arguments[r];
    return k2(d)(this);
  }, c.prototype.toPromise = function(d) {
    var r = this;
    return d = E0(d), new d(function(f, b) {
      var z;
      r.subscribe(function(O) {
        return z = O;
      }, function(O) {
        return b(O);
      }, function() {
        return f(z);
      });
    });
  }, c.create = function(d) {
    return new c(d);
  }, c;
})();
function E0(c) {
  var d;
  return (d = c ?? G2.Promise) !== null && d !== void 0 ? d : Promise;
}
function $2(c) {
  return c && Ye(c.next) && Ye(c.error) && Ye(c.complete);
}
function W2(c) {
  return c && c instanceof es || $2(c) && B0(c);
}
function F2(c) {
  return Ye(c == null ? void 0 : c.lift);
}
function I2(c) {
  return function(d) {
    if (F2(d))
      return d.lift(function(r) {
        try {
          return c(r, this);
        } catch (f) {
          this.error(f);
        }
      });
    throw new TypeError("Unable to lift unknown Observable type");
  };
}
function P2(c, d, r, f, b) {
  return new tv(c, d, r, f, b);
}
var tv = (function(c) {
  qn(d, c);
  function d(r, f, b, z, O, C) {
    var N = c.call(this, r) || this;
    return N.onFinalize = O, N.shouldUnsubscribe = C, N._next = f ? function(x) {
      try {
        f(x);
      } catch (D) {
        r.error(D);
      }
    } : c.prototype._next, N._error = z ? function(x) {
      try {
        z(x);
      } catch (D) {
        r.error(D);
      } finally {
        this.unsubscribe();
      }
    } : c.prototype._error, N._complete = b ? function() {
      try {
        b();
      } catch (x) {
        r.error(x);
      } finally {
        this.unsubscribe();
      }
    } : c.prototype._complete, N;
  }
  return d.prototype.unsubscribe = function() {
    var r;
    if (!this.shouldUnsubscribe || this.shouldUnsubscribe()) {
      var f = this.closed;
      c.prototype.unsubscribe.call(this), !f && ((r = this.onFinalize) === null || r === void 0 || r.call(this));
    }
  }, d;
})(es), ev = H0(function(c) {
  return function() {
    c(this), this.name = "ObjectUnsubscribedError", this.message = "object unsubscribed";
  };
}), ls = (function(c) {
  qn(d, c);
  function d() {
    var r = c.call(this) || this;
    return r.closed = !1, r.currentObservers = null, r.observers = [], r.isStopped = !1, r.hasError = !1, r.thrownError = null, r;
  }
  return d.prototype.lift = function(r) {
    var f = new z0(this, this);
    return f.operator = r, f;
  }, d.prototype._throwIfClosed = function() {
    if (this.closed)
      throw new ev();
  }, d.prototype.next = function(r) {
    var f = this;
    ni(function() {
      var b, z;
      if (f._throwIfClosed(), !f.isStopped) {
        f.currentObservers || (f.currentObservers = Array.from(f.observers));
        try {
          for (var O = Zf(f.currentObservers), C = O.next(); !C.done; C = O.next()) {
            var N = C.value;
            N.next(r);
          }
        } catch (x) {
          b = { error: x };
        } finally {
          try {
            C && !C.done && (z = O.return) && z.call(O);
          } finally {
            if (b) throw b.error;
          }
        }
      }
    });
  }, d.prototype.error = function(r) {
    var f = this;
    ni(function() {
      if (f._throwIfClosed(), !f.isStopped) {
        f.hasError = f.isStopped = !0, f.thrownError = r;
        for (var b = f.observers; b.length; )
          b.shift().error(r);
      }
    });
  }, d.prototype.complete = function() {
    var r = this;
    ni(function() {
      if (r._throwIfClosed(), !r.isStopped) {
        r.isStopped = !0;
        for (var f = r.observers; f.length; )
          f.shift().complete();
      }
    });
  }, d.prototype.unsubscribe = function() {
    this.isStopped = this.closed = !0, this.observers = this.currentObservers = null;
  }, Object.defineProperty(d.prototype, "observed", {
    get: function() {
      var r;
      return ((r = this.observers) === null || r === void 0 ? void 0 : r.length) > 0;
    },
    enumerable: !1,
    configurable: !0
  }), d.prototype._trySubscribe = function(r) {
    return this._throwIfClosed(), c.prototype._trySubscribe.call(this, r);
  }, d.prototype._subscribe = function(r) {
    return this._throwIfClosed(), this._checkFinalizedStatuses(r), this._innerSubscribe(r);
  }, d.prototype._innerSubscribe = function(r) {
    var f = this, b = this, z = b.hasError, O = b.isStopped, C = b.observers;
    return z || O ? q0 : (this.currentObservers = null, C.push(r), new ri(function() {
      f.currentObservers = null, Jf(C, r);
    }));
  }, d.prototype._checkFinalizedStatuses = function(r) {
    var f = this, b = f.hasError, z = f.thrownError, O = f.isStopped;
    b ? r.error(z) : O && r.complete();
  }, d.prototype.asObservable = function() {
    var r = new S0();
    return r.source = this, r;
  }, d.create = function(r, f) {
    return new z0(r, f);
  }, d;
})(S0), z0 = (function(c) {
  qn(d, c);
  function d(r, f) {
    var b = c.call(this) || this;
    return b.destination = r, b.source = f, b;
  }
  return d.prototype.next = function(r) {
    var f, b;
    (b = (f = this.destination) === null || f === void 0 ? void 0 : f.next) === null || b === void 0 || b.call(f, r);
  }, d.prototype.error = function(r) {
    var f, b;
    (b = (f = this.destination) === null || f === void 0 ? void 0 : f.error) === null || b === void 0 || b.call(f, r);
  }, d.prototype.complete = function() {
    var r, f;
    (f = (r = this.destination) === null || r === void 0 ? void 0 : r.complete) === null || f === void 0 || f.call(r);
  }, d.prototype._subscribe = function(r) {
    var f, b;
    return (b = (f = this.source) === null || f === void 0 ? void 0 : f.subscribe(r)) !== null && b !== void 0 ? b : q0;
  }, d;
})(ls);
function lv(c, d) {
  return I2(function(r, f) {
    var b = 0;
    r.subscribe(P2(f, function(z) {
      return c.call(d, z, b++) && f.next(z);
    }));
  });
}
const li = new ls(), av = {
  /**
   * 发布事件
   */
  emit(c) {
    li.next({
      ...c,
      timestamp: Date.now()
    });
  },
  /**
   * 订阅所有事件
   */
  subscribe(c) {
    const d = li.subscribe(c);
    return {
      unsubscribe: () => d.unsubscribe()
    };
  },
  /**
   * 订阅特定类型的事件
   */
  on(c, d) {
    const r = li.pipe(lv((f) => f.type === c)).subscribe((f) => d(f.payload));
    return {
      unsubscribe: () => r.unsubscribe()
    };
  },
  /**
   * 获取事件流（用于 RxJS 操作符）
   */
  asObservable() {
    return li.asObservable();
  }
};
var Et = /* @__PURE__ */ ((c) => (c[c.DEBUG = 0] = "DEBUG", c[c.INFO = 1] = "INFO", c[c.SUCCESS = 2] = "SUCCESS", c[c.WARN = 3] = "WARN", c[c.ERROR = 4] = "ERROR", c))(Et || {});
const ci = {
  0: { label: "DEBUG", icon: "🔍", color: "#6c757d" },
  1: { label: "INFO", icon: "ℹ️", color: "#17a2b8" },
  2: { label: "SUCCESS", icon: "✅", color: "#28a745" },
  3: { label: "WARN", icon: "⚠️", color: "#ffc107" },
  4: { label: "ERROR", icon: "❌", color: "#dc3545" }
}, Y0 = {
  maxEntries: 5e3,
  minLevel: 0
  /* DEBUG */
}, L0 = new ls();
let qe = [], Ml = { ...Y0 }, Lf = null;
async function fi() {
  if (!Lf) {
    const { db: c } = await import("./DexieDB-mXAjz41s.js");
    Lf = c;
  }
  return Lf;
}
function nv(c) {
  return new Date(c).toTimeString().slice(0, 8);
}
async function qa(c, d, r, f) {
  if (c < Ml.minLevel) return;
  const b = {
    id: L2(),
    timestamp: Date.now(),
    level: c,
    module: d,
    message: r,
    data: f
  };
  qe.push(b), L0.next(b);
  try {
    const z = await fi();
    await z.logs.add(b);
    const O = await z.logs.count();
    O > Ml.maxEntries && await uv(O - Ml.maxEntries);
  } catch (z) {
    console.error("[Engram/Logger] 日志持久化失败:", z);
  }
}
async function uv(c) {
  try {
    const d = await fi(), f = (await d.logs.orderBy("timestamp").limit(c).toArray()).map((b) => b.id);
    await d.logs.bulkDelete(f), qe = qe.slice(-Ml.maxEntries);
  } catch (d) {
    console.error("[Engram/Logger] 清理旧日志失败:", d);
  }
}
function iv() {
  av.subscribe((c) => {
    const r = {
      INGESTION_START: Et.INFO,
      INGESTION_COMPLETE: Et.SUCCESS,
      ENTITY_CREATED: Et.INFO,
      MEMORY_STORED: Et.SUCCESS,
      RETRIEVAL_START: Et.DEBUG,
      RETRIEVAL_COMPLETE: Et.SUCCESS,
      CHAT_CHANGED: Et.INFO,
      MESSAGE_RECEIVED: Et.DEBUG
    }[c.type] ?? Et.DEBUG;
    qa(r, "EventBus", `${c.type}`, c.payload);
  });
}
const Ne = {
  /**
   * 初始化 Logger
   */
  async init(c) {
    c && (Ml = { ...Ml, ...c });
    try {
      qe = await (await fi()).logs.orderBy("timestamp").reverse().limit(Ml.maxEntries).toArray(), qe.reverse();
    } catch (d) {
      console.error("[Engram/Logger] 加载历史日志失败:", d), qe = [];
    }
    iv(), Ne.info("Logger", "Logger 初始化完成", { maxEntries: Ml.maxEntries });
  },
  /**
   * DEBUG 级别日志
   */
  debug(c, d, r) {
    qa(Et.DEBUG, c, d, r);
  },
  /**
   * INFO 级别日志
   */
  info(c, d, r) {
    qa(Et.INFO, c, d, r);
  },
  /**
   * SUCCESS 级别日志
   */
  success(c, d, r) {
    qa(Et.SUCCESS, c, d, r);
  },
  /**
   * WARN 级别日志
   */
  warn(c, d, r) {
    qa(Et.WARN, c, d, r);
  },
  /**
   * ERROR 级别日志
   */
  error(c, d, r) {
    qa(Et.ERROR, c, d, r);
  },
  /**
   * 获取所有缓存日志
   */
  getLogs() {
    return [...qe];
  },
  /**
   * 订阅新日志
   */
  subscribe(c) {
    const d = L0.subscribe(c);
    return () => d.unsubscribe();
  },
  /**
   * 清空所有日志
   */
  async clear() {
    try {
      await (await fi()).logs.clear(), qe = [], Ne.info("Logger", "日志已清空");
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
    const d = {
      [Et.DEBUG]: "DEBUG",
      [Et.INFO]: "INFO",
      [Et.SUCCESS]: "SUCCESS",
      [Et.WARN]: "WARN",
      [Et.ERROR]: "ERROR"
    };
    let r = `# Engram Debug Log

`;
    r += `- **导出时间**: ${c.toLocaleString("zh-CN")}
`, r += `- **版本**: 0.1.0
`, r += `- **日志条数**: ${qe.length}

`, r += `---

`, r += `## 日志记录

`, r += "```\n";
    for (const f of qe) {
      const b = nv(f.timestamp), z = d[f.level].padEnd(7), O = f.module.padEnd(16);
      if (r += `[${b}] [${O}] ${z} ${f.message}
`, f.data !== void 0) {
        const C = JSON.stringify(f.data, null, 2).split(`
`).map((N) => `    ${N}`).join(`
`);
        r += `${C}
`;
      }
    }
    return r += "```\n", r;
  },
  /**
   * 获取导出文件名
   */
  getExportFilename() {
    const c = /* @__PURE__ */ new Date(), d = c.toISOString().slice(0, 10), r = c.toTimeString().slice(0, 8).replace(/:/g, "");
    return `engram_log_${d}_${r}.md`;
  }
}, cv = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  DEFAULT_LOGGER_CONFIG: Y0,
  LogLevel: Et,
  LogLevelConfig: ci,
  Logger: Ne
}, Symbol.toStringTag, { value: "Module" }));
function fv() {
  var c, d;
  try {
    return ((d = (c = window.SillyTavern) == null ? void 0 : c.getContext) == null ? void 0 : d.call(c)) || null;
  } catch (r) {
    return console.warn("[Engram] Failed to get ST context:", r), null;
  }
}
async function _0() {
  const { Logger: c } = await Promise.resolve().then(() => cv);
  await c.init(), c.info("STBridge", "Engram 插件正在初始化..."), sv(), c.success("STBridge", "Engram 初始化完成 - Where memories leave their trace.");
}
const G0 = '<svg viewBox="0 0 400 592" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M103.875908,522.166260 C75.225380,521.276611 55.289425,503.229828 52.249313,475.852142 C49.879883,454.514191 63.027035,433.000366 83.930901,424.858398 C88.449257,423.098541 89.857674,420.860199 89.801926,416.150269 C89.555420,395.322357 89.621246,374.489380 89.762306,353.659515 C89.787170,349.987000 88.728760,348.057556 85.120293,346.642609 C64.672897,338.625031 52.338894,320.951630 52.085896,299.869415 C51.832878,278.785156 63.730618,260.903198 84.118019,252.449951 C88.288918,250.720566 89.867378,248.680847 89.807304,244.052597 C89.539139,223.391968 89.589142,202.724701 89.796356,182.062561 C89.836380,178.071609 88.518524,176.326385 84.841705,174.787247 C57.730556,163.438416 45.530682,135.966721 55.436111,109.194000 C62.627293,89.757439 81.922821,76.710289 103.282494,76.841476 C124.355003,76.970901 143.082275,89.740875 149.993118,109.121849 C151.315979,112.831749 153.184799,113.869263 156.863403,113.853104 C186.192612,113.724319 215.522736,113.698357 244.851929,113.811600 C248.773117,113.826736 250.677307,112.652130 252.052902,108.765602 C259.013885,89.098465 278.589447,76.365829 300.503601,76.811897 C322.171844,77.252960 341.040283,91.132324 347.255371,111.201912 C356.569763,141.279358 340.344788,170.373184 309.893127,176.623123 C283.359375,182.068970 260.376740,167.450562 251.980011,145.670181 C250.492157,141.810806 248.818085,140.240295 244.552948,140.266785 C215.390915,140.447968 186.227219,140.357330 157.064072,140.375076 C154.628784,140.376556 151.855545,139.805771 151.141357,143.359161 C150.400787,147.043839 146.628937,150.064713 151.136917,154.478546 C184.592346,187.235229 217.778336,220.267349 250.982285,253.280014 C253.021469,255.307434 254.527191,255.254166 257.033264,254.047714 C276.199188,244.820953 294.752930,247.045853 310.978485,259.993408 C328.011017,273.584869 333.936798,292.106659 327.764038,313.282837 C321.779785,333.812378 307.254517,345.637268 286.367889,349.037231 C276.405396,350.658997 266.352570,349.443024 257.275055,344.363342 C254.265045,342.678986 252.301132,343.049744 249.903275,345.441406 C230.205368,365.088531 210.395386,384.623230 190.631638,404.204376 C177.732651,416.984222 164.859726,429.790344 151.962982,442.572388 C148.257980,446.244415 148.113403,452.901764 151.629196,456.671387 C152.707138,457.827148 154.029282,457.681976 155.328629,457.681946 C185.658203,457.681458 215.987854,457.631042 246.317261,457.695557 C249.355972,457.702026 250.687012,456.399414 251.717636,453.698944 C259.314423,433.793579 278.324493,420.868317 299.341309,421.146240 C320.526215,421.426361 339.575745,434.206421 346.686249,452.909271 C354.337341,473.034058 348.794159,495.642761 332.699371,509.956390 C307.061371,532.757202 263.380280,521.715210 251.978027,489.436371 C250.838303,486.209961 249.371201,484.953583 245.964813,484.962799 C216.302094,485.043304 186.639008,484.985840 156.976028,484.969330 C154.436981,484.967896 152.081528,484.923981 150.916916,488.054077 C142.892441,509.621246 126.842339,520.325989 103.875908,522.166260 M141.430466,266.110352 C145.394760,270.906738 148.503693,276.196198 150.388428,282.139069 C151.211502,284.734314 152.692291,285.770782 155.494156,285.760895 C179.139755,285.677429 202.787949,285.547394 226.430206,285.843811 C232.373352,285.918304 231.388184,281.058533 233.335602,278.254700 C235.007233,275.847992 233.916855,274.189880 232.000244,272.304352 C199.956863,240.780380 167.866821,209.301468 136.133682,177.467056 C131.183243,172.500824 127.483856,170.729507 121.013550,174.621368 C117.660522,176.638214 116.183739,178.155136 116.217278,182.042480 C116.398239,203.022598 116.444160,224.006012 116.243645,244.985474 C116.204666,249.064667 117.676285,250.918961 121.328865,252.228989 C128.972488,254.970444 135.505173,259.524170 141.430466,266.110352 M116.349434,377.499908 C116.351860,390.663696 116.870338,403.855377 116.161102,416.980713 C115.742699,424.723846 121.926743,423.801880 125.649162,426.262665 C129.080231,428.530792 130.798965,425.706268 132.741440,423.784821 C165.551407,391.329803 198.234940,358.745361 231.274231,326.525696 C235.764252,322.147095 232.377243,319.155212 231.599960,315.493317 C230.884583,312.123138 228.193359,312.382568 225.670288,312.382812 C202.675171,312.384949 179.679749,312.445435 156.685303,312.323212 C153.331955,312.305389 151.624329,313.386505 150.456299,316.584381 C145.119888,331.194611 135.004120,341.287384 120.496223,346.769958 C117.238434,348.001068 116.190170,349.706024 116.267418,353.006317 C116.450615,360.833862 116.340004,368.668243 116.349434,377.499908z"/></svg>';
function sv() {
  const c = document.querySelector("#top-settings-holder"), d = document.querySelector("#WI-SP-button");
  if (!c) {
    console.warn("[Engram] #top-settings-holder not found, fallback to floating orb"), rv();
    return;
  }
  const r = document.createElement("div");
  r.id = "engram-drawer", r.className = "drawer";
  const f = document.createElement("div");
  f.className = "drawer-toggle drawer-header";
  const b = document.createElement("div");
  b.id = "engram-drawer-icon", b.className = "drawer-icon fa-fw closedIcon", b.title = "Engram - 记忆操作系统", b.setAttribute("data-i18n", "[title]Engram - Memory OS"), b.innerHTML = G0, b.addEventListener("click", si), f.appendChild(b), r.appendChild(f), d ? (c.insertBefore(r, d), console.log("[Engram] Top bar button injected before WI-SP-button")) : (c.appendChild(r), console.log("[Engram] Top bar button injected at end (WI-SP-button not found)"));
}
function rv() {
  const c = document.createElement("div");
  c.className = "fixed bottom-5 right-5 w-12 h-12 rounded-full cursor-pointer z-[9999] flex items-center justify-center transition-transform duration-200 bg-gradient-to-br from-orange-500 to-pink-500 shadow-[0_0_20px_rgba(249,115,22,0.5)] hover:scale-110 hover:shadow-[0_0_30px_rgba(249,115,22,0.7)] text-white", c.title = "Engram - 记忆操作系统", c.innerHTML = G0, c.addEventListener("click", si), document.body.appendChild(c);
}
let $f = null;
function ov(c) {
  $f = c;
}
let Gf = !1, Un = null, ui = null;
function si() {
  Gf && Un ? (ui && (ui.unmount(), ui = null), Un.remove(), Un = null, Gf = !1) : (Un = dv(), document.body.appendChild(Un), Gf = !0);
}
function dv() {
  var d;
  const c = document.createElement("div");
  return c.className = "fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] max-w-[1200px] h-[70vh] rounded-2xl overflow-hidden z-[10000] flex flex-col bg-[#1e1e2d]/95 backdrop-blur-xl border border-slate-400/20 shadow-[0_4px_20px_rgba(0,0,0,0.3)]", c.id = "engram-panel-root", $f ? ui = $f(c, si) : (c.innerHTML = `
            <div class="flex items-center justify-between p-4 border-b border-slate-400/20">
                <h2 class="m-0 text-lg text-slate-200 flex items-center gap-2">🧠 Engram</h2>
                <button class="bg-transparent border-none text-slate-400 text-2xl cursor-pointer p-1 hover:text-slate-200">&times;</button>
            </div>
            <div class="flex-1 overflow-auto p-5">
                <p style="color: #94a3b8;">React 渲染器未加载，请检查配置。</p>
            </div>
        `, (d = c.querySelector("button")) == null || d.addEventListener("click", si)), c;
}
const mv = (c) => {
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
}, w0 = ({ onNavigate: c }) => {
  const [d, r] = Z.useState([]), [f, b] = Z.useState(fv()), [z, O] = Z.useState(0);
  Z.useEffect(() => (r(Ne.getLogs().slice(0, 3)), Ne.subscribe((D) => {
    r((H) => [D, ...H].slice(0, 3));
  })), []), Z.useEffect(() => {
    const x = setInterval(() => {
      O((D) => D + 1);
    }, 1e3);
    return () => clearInterval(x);
  }, []);
  const C = (x) => {
    const D = Math.floor(x / 3600), H = Math.floor(x % 3600 / 60), J = x % 60;
    return `${D.toString().padStart(2, "0")}:${H.toString().padStart(2, "0")}:${J.toString().padStart(2, "0")}`;
  }, N = (f == null ? void 0 : f.name2) || "Unknown";
  return f != null && f.name1, /* @__PURE__ */ o.jsx("div", { className: "h-full overflow-y-auto p-6 [&::-webkit-scrollbar]:hidden", children: /* @__PURE__ */ o.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4 max-w-[1000px] mx-auto", children: [
    /* @__PURE__ */ o.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4 col-span-full", children: [
      /* @__PURE__ */ o.jsx(
        qf,
        {
          title: "ACTIVE MODEL",
          value: f ? "Connected" : "Offline",
          subtext: f ? `Chatting with ${N}` : "Waiting for connection...",
          icon: D0,
          highlight: !!f
        }
      ),
      /* @__PURE__ */ o.jsx(
        qf,
        {
          title: "MEMORY NODES",
          value: "0",
          subtext: "Graph Database",
          icon: $h
        }
      ),
      /* @__PURE__ */ o.jsx(
        qf,
        {
          title: "SYSTEM UPTIME",
          value: C(z),
          subtext: "Session Duration",
          icon: M0
        }
      )
    ] }),
    /* @__PURE__ */ o.jsxs("div", { className: "flex flex-col bg-surface backdrop-blur-md border border-border-light rounded-lg overflow-hidden relative transition-all duration-200 hover:shadow-md hover:border-border-default", children: [
      /* @__PURE__ */ o.jsxs("div", { className: "flex items-center gap-2 p-4 text-xs font-bold tracking-widest text-muted border-b border-border-light", children: [
        /* @__PURE__ */ o.jsx(T2, { size: 16 }),
        /* @__PURE__ */ o.jsx("span", { children: "QUICK ACTIONS" })
      ] }),
      /* @__PURE__ */ o.jsxs("div", { className: "flex-1 grid grid-cols-4 gap-3 p-4", children: [
        /* @__PURE__ */ o.jsxs("button", { className: "flex flex-col items-center justify-center gap-2 bg-surface border border-border-light rounded-xl cursor-pointer transition-all duration-200 text-text-secondary hover:bg-white/10 hover:-translate-y-0.5 hover:text-white", onClick: () => c("/memory"), children: [
          /* @__PURE__ */ o.jsx("span", { className: "text-2xl", children: "📜" }),
          /* @__PURE__ */ o.jsx("span", { className: "text-xs font-medium", children: "Memory Stream" })
        ] }),
        /* @__PURE__ */ o.jsxs("button", { className: "flex flex-col items-center justify-center gap-2 bg-surface border border-border-light rounded-xl cursor-pointer transition-all duration-200 text-text-secondary hover:bg-white/10 hover:-translate-y-0.5 hover:text-white", onClick: () => c("/graph"), children: [
          /* @__PURE__ */ o.jsx("span", { className: "text-2xl", children: "🕸️" }),
          /* @__PURE__ */ o.jsx("span", { className: "text-xs font-medium", children: "Knowledge Graph" })
        ] }),
        /* @__PURE__ */ o.jsxs("button", { className: "flex flex-col items-center justify-center gap-2 bg-surface border border-border-light rounded-xl cursor-pointer transition-all duration-200 text-text-secondary hover:bg-white/10 hover:-translate-y-0.5 hover:text-white", onClick: () => c("/brain"), children: [
          /* @__PURE__ */ o.jsx("span", { className: "text-2xl", children: "🧠" }),
          /* @__PURE__ */ o.jsx("span", { className: "text-xs font-medium", children: "Brain Console" })
        ] }),
        /* @__PURE__ */ o.jsxs("button", { className: "flex flex-col items-center justify-center gap-2 bg-surface border border-border-light rounded-xl cursor-pointer transition-all duration-200 text-text-secondary hover:bg-white/10 hover:-translate-y-0.5 hover:text-white", onClick: () => c("/settings"), children: [
          /* @__PURE__ */ o.jsx("span", { className: "text-2xl", children: "⚙️" }),
          /* @__PURE__ */ o.jsx("span", { className: "text-xs font-medium", children: "Settings" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ o.jsxs("div", { className: "flex flex-col bg-surface backdrop-blur-md border border-border-light rounded-lg overflow-hidden relative transition-all duration-200 hover:shadow-md hover:border-border-default", children: [
      /* @__PURE__ */ o.jsxs("div", { className: "flex items-center gap-2 p-4 text-xs font-bold tracking-widest text-muted border-b border-border-light", children: [
        /* @__PURE__ */ o.jsx(Hn, { size: 16 }),
        /* @__PURE__ */ o.jsx("span", { children: "SYSTEM LOGS" }),
        /* @__PURE__ */ o.jsx("button", { className: "ml-auto text-[10px] text-primary bg-transparent border-none cursor-pointer opacity-80 hover:opacity-100 hover:underline", onClick: () => c("/dev"), children: "VIEW ALL" })
      ] }),
      /* @__PURE__ */ o.jsx("div", { className: "flex-1 p-3 font-mono text-[11px] bg-black/30 overflow-hidden", children: d.length === 0 ? /* @__PURE__ */ o.jsx("div", { className: "text-disabled text-center mt-5 italic", children: "No activity recorded" }) : d.map((x) => /* @__PURE__ */ o.jsxs("div", { className: `flex gap-2 mb-1.5 opacity-80 ${mv(x.level)}`, children: [
        /* @__PURE__ */ o.jsxs("span", { className: "text-muted", children: [
          "[",
          new Date(x.timestamp).toLocaleTimeString([], { hour12: !1 }),
          "]"
        ] }),
        /* @__PURE__ */ o.jsx("span", { className: "text-primary flex-1 min-w-0 whitespace-nowrap overflow-hidden text-ellipsis", children: x.message })
      ] }, x.id)) })
    ] })
  ] }) });
}, hv = () => /* @__PURE__ */ o.jsxs("div", { className: "engram-memory-stream", children: [
  /* @__PURE__ */ o.jsxs("div", { className: "engram-page-header", children: [
    /* @__PURE__ */ o.jsx(Lh, { size: 24 }),
    /* @__PURE__ */ o.jsx("h2", { children: "记忆流" })
  ] }),
  /* @__PURE__ */ o.jsx("div", { className: "engram-page-content", children: /* @__PURE__ */ o.jsx("p", { className: "engram-placeholder", children: "记忆时间轴将在这里展示..." }) })
] }), vv = () => /* @__PURE__ */ o.jsxs("div", { className: "engram-graph-view", children: [
  /* @__PURE__ */ o.jsxs("div", { className: "engram-page-header", children: [
    /* @__PURE__ */ o.jsx(Pf, { size: 24 }),
    /* @__PURE__ */ o.jsx("h2", { children: "世界图谱" })
  ] }),
  /* @__PURE__ */ o.jsx("div", { className: "engram-page-content", children: /* @__PURE__ */ o.jsx("p", { className: "engram-placeholder", children: "React Flow 图谱编辑器将在这里展示..." }) })
] }), yv = [
  { id: "summarize", label: "总结剧情" },
  { id: "vectorize", label: "向量化" },
  { id: "batch", label: "批量处理" }
], ai = () => {
  const [c, d] = Z.useState("summarize");
  return /* @__PURE__ */ o.jsxs("div", { className: "engram-brain-view", children: [
    /* @__PURE__ */ o.jsxs("div", { className: "engram-page-header", children: [
      /* @__PURE__ */ o.jsx(If, { size: 24 }),
      /* @__PURE__ */ o.jsx("h2", { children: "记忆" })
    ] }),
    /* @__PURE__ */ o.jsx("div", { className: "engram-tabs", children: yv.map((r) => /* @__PURE__ */ o.jsx(
      "button",
      {
        className: `engram-tab ${c === r.id ? "active" : ""}`,
        onClick: () => d(r.id),
        children: r.label
      },
      r.id
    )) }),
    /* @__PURE__ */ o.jsxs("div", { className: "engram-page-content", children: [
      c === "summarize" && /* @__PURE__ */ o.jsx("div", { children: /* @__PURE__ */ o.jsx("p", { className: "engram-placeholder", children: "总结剧情功能..." }) }),
      c === "vectorize" && /* @__PURE__ */ o.jsx("div", { children: /* @__PURE__ */ o.jsx("p", { className: "engram-placeholder", children: "向量化功能..." }) }),
      c === "batch" && /* @__PURE__ */ o.jsx("div", { children: /* @__PURE__ */ o.jsx("p", { className: "engram-placeholder", children: "批量处理功能..." }) })
    ] })
  ] });
}, Ce = ({
  label: c,
  description: d,
  required: r,
  error: f,
  className: b,
  type: z = "text",
  value: O,
  onChange: C,
  placeholder: N,
  disabled: x
}) => /* @__PURE__ */ o.jsxs("div", { className: `mb-4 ${b || ""}`, children: [
  /* @__PURE__ */ o.jsxs("label", { className: "block mb-2 text-lg font-medium text-text-primary", children: [
    c,
    r && /* @__PURE__ */ o.jsx("span", { className: "text-primary ml-0.5", children: "*" })
  ] }),
  d && /* @__PURE__ */ o.jsx("p", { className: "m-0 mb-2 text-md text-muted", children: d }),
  /* @__PURE__ */ o.jsx(
    "input",
    {
      type: z,
      className: `w-full px-3 py-2.5 bg-input border border-border-default rounded-md text-text-primary text-xl transition-all outline-none focus:border-border-focus focus:ring-2 focus:ring-primary-10 ${f ? "!border-error" : ""}`,
      value: O,
      onChange: (D) => C(D.target.value),
      placeholder: N,
      disabled: x
    }
  ),
  f && /* @__PURE__ */ o.jsx("span", { className: "block mt-1 text-md text-error-light", children: f })
] }), nl = ({
  label: c,
  description: d,
  required: r,
  error: f,
  className: b,
  value: z,
  onChange: O,
  min: C = 0,
  max: N = 100,
  step: x = 1,
  showSlider: D = !0,
  disabled: H
}) => /* @__PURE__ */ o.jsxs("div", { className: `mb-4 ${b || ""}`, children: [
  /* @__PURE__ */ o.jsxs("div", { className: "flex items-center justify-between mb-2", children: [
    /* @__PURE__ */ o.jsxs("label", { className: "block text-lg font-medium text-text-primary", children: [
      c,
      r && /* @__PURE__ */ o.jsx("span", { className: "text-primary ml-0.5", children: "*" })
    ] }),
    /* @__PURE__ */ o.jsx("span", { className: "text-lg text-primary font-mono", children: z })
  ] }),
  d && /* @__PURE__ */ o.jsx("p", { className: "m-0 mb-2 text-md text-muted", children: d }),
  /* @__PURE__ */ o.jsxs("div", { className: "flex items-center gap-3", children: [
    D && /* @__PURE__ */ o.jsx(
      "input",
      {
        type: "range",
        className: "flex-1 h-1 appearance-none bg-active rounded-sm cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:bg-[image:var(--engram-gradient)] [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:cursor-pointer",
        value: z,
        onChange: (J) => O(parseFloat(J.target.value)),
        min: C,
        max: N,
        step: x,
        disabled: H
      }
    ),
    /* @__PURE__ */ o.jsx(
      "input",
      {
        type: "number",
        className: `w-full px-3 py-2.5 bg-input border border-border-default rounded-md text-text-primary text-xl transition-all outline-none focus:border-border-focus focus:ring-2 focus:ring-primary-10 w-[80px] text-center ${f ? "!border-error" : ""}`,
        value: z,
        onChange: (J) => {
          const w = parseFloat(J.target.value);
          isNaN(w) || O(Math.max(C, Math.min(N, w)));
        },
        min: C,
        max: N,
        step: x,
        disabled: H
      }
    )
  ] }),
  f && /* @__PURE__ */ o.jsx("span", { className: "block mt-1 text-md text-error-light", children: f })
] }), ii = ({
  label: c,
  description: d,
  required: r,
  error: f,
  className: b,
  value: z,
  onChange: O,
  options: C,
  placeholder: N,
  disabled: x
}) => /* @__PURE__ */ o.jsxs("div", { className: `mb-4 ${b || ""}`, children: [
  /* @__PURE__ */ o.jsxs("label", { className: "block mb-2 text-lg font-medium text-text-primary", children: [
    c,
    r && /* @__PURE__ */ o.jsx("span", { className: "text-primary ml-0.5", children: "*" })
  ] }),
  d && /* @__PURE__ */ o.jsx("p", { className: "m-0 mb-2 text-md text-muted", children: d }),
  /* @__PURE__ */ o.jsxs(
    "select",
    {
      className: `w-full px-3 py-2.5 bg-input border border-border-default rounded-md text-text-primary text-xl transition-all outline-none focus:border-border-focus focus:ring-2 focus:ring-primary-10 ${f ? "!border-error" : ""}`,
      value: z,
      onChange: (D) => O(D.target.value),
      disabled: x,
      children: [
        N && /* @__PURE__ */ o.jsx("option", { value: "", disabled: !0, children: N }),
        C.map((D) => /* @__PURE__ */ o.jsx("option", { value: D.value, disabled: D.disabled, children: D.label }, D.value))
      ]
    }
  ),
  f && /* @__PURE__ */ o.jsx("span", { className: "block mt-1 text-md text-error-light", children: f })
] }), Q0 = ({
  label: c,
  description: d,
  className: r,
  checked: f,
  onChange: b,
  disabled: z
}) => /* @__PURE__ */ o.jsxs("div", { className: `mb-4 flex items-center justify-between p-3 bg-surface rounded-lg ${r || ""}`, children: [
  /* @__PURE__ */ o.jsxs("div", { className: "flex-1", children: [
    /* @__PURE__ */ o.jsx("label", { className: "block text-lg font-medium text-text-primary mb-0", children: c }),
    d && /* @__PURE__ */ o.jsx("p", { className: "m-0 mt-1 text-md text-muted", children: d })
  ] }),
  /* @__PURE__ */ o.jsx(
    "button",
    {
      type: "button",
      className: `w-[44px] h-6 p-0.5 border-none rounded-full cursor-pointer transition-all ${f ? "bg-[image:var(--engram-gradient)]" : "bg-active"}`,
      onClick: () => !z && b(!f),
      disabled: z,
      role: "switch",
      "aria-checked": f,
      children: /* @__PURE__ */ o.jsx("span", { className: `block w-5 h-5 bg-white rounded-full transition-transform ${f ? "translate-x-[20px]" : ""}` })
    }
  )
] }), Be = ({
  title: c,
  description: d,
  children: r,
  collapsible: f = !1,
  defaultCollapsed: b = !1
}) => {
  const [z, O] = Ff.useState(b);
  return /* @__PURE__ */ o.jsxs("div", { className: "mb-5 p-4 bg-elevated rounded-xl ", children: [
    /* @__PURE__ */ o.jsxs(
      "div",
      {
        className: `${z ? "mb-0" : "mb-4"} ${f ? "cursor-pointer flex items-center justify-between" : ""}`,
        onClick: () => f && O(!z),
        children: [
          /* @__PURE__ */ o.jsxs("div", { className: "", children: [
            /* @__PURE__ */ o.jsx("h4", { className: "m-0 text-xl font-semibold text-text-primary", children: c }),
            d && /* @__PURE__ */ o.jsx("p", { className: "mt-1 text-md text-muted", children: d })
          ] }),
          f && /* @__PURE__ */ o.jsx("span", { className: "text-muted text-xs", children: z ? "▶" : "▼" })
        ]
      }
    ),
    !z && /* @__PURE__ */ o.jsx("div", { className: "", children: r })
  ] });
}, bv = ({
  preset: c,
  isSelected: d,
  onSelect: r,
  onEdit: f,
  onCopy: b,
  onDelete: z
}) => {
  var x;
  const O = c.source === "tavern" || c.source === "tavern_profile" ? D0 : wh, C = c.source === "tavern" ? "酒馆当前" : c.source === "tavern_profile" ? "酒馆配置" : "自定义", N = c.source === "custom" ? ((x = c.custom) == null ? void 0 : x.model) || "未设置" : "使用当前";
  return /* @__PURE__ */ o.jsxs(
    "div",
    {
      className: `p-3 cursor-pointer bg-surface backdrop-blur-md border border-border-light rounded-lg shadow-sm transition-all duration-200 hover:bg-hover hover:border-border-default hover:shadow-md ${d ? "bg-primary-10 border-primary-30" : ""}`,
      onClick: r,
      children: [
        /* @__PURE__ */ o.jsxs("div", { className: "flex items-start gap-2.5", children: [
          /* @__PURE__ */ o.jsx(
            "div",
            {
              className: `w-8 h-8 flex items-center justify-center rounded-md ${d ? "bg-primary-20 text-primary" : "bg-hover text-text-secondary"}`,
              children: /* @__PURE__ */ o.jsx(O, { size: 16 })
            }
          ),
          /* @__PURE__ */ o.jsxs("div", { className: "flex-1 min-w-0", children: [
            /* @__PURE__ */ o.jsxs("h4", { className: "m-0 text-[14px] font-medium text-primary flex items-center gap-2", children: [
              c.name,
              c.isDefault && /* @__PURE__ */ o.jsx("span", { className: "px-2 py-[2px] text-[10px] bg-primary-20 text-primary rounded-sm", children: "默认" })
            ] }),
            /* @__PURE__ */ o.jsxs("p", { className: "mt-1 text-[12px] text-muted", children: [
              /* @__PURE__ */ o.jsx("span", { children: C }),
              /* @__PURE__ */ o.jsx("span", { className: "mx-1", children: "·" }),
              /* @__PURE__ */ o.jsx("span", { children: N })
            ] })
          ] }),
          d && /* @__PURE__ */ o.jsx("div", { className: "text-primary", children: /* @__PURE__ */ o.jsx(Uh, { size: 16 }) })
        ] }),
        /* @__PURE__ */ o.jsxs("div", { className: "flex gap-2 mt-2.5 flex-wrap", children: [
          /* @__PURE__ */ o.jsxs("span", { className: "px-2 py-[2px] text-[10px] bg-hover text-text-secondary rounded-sm font-mono", children: [
            "T: ",
            c.parameters.temperature
          ] }),
          /* @__PURE__ */ o.jsxs("span", { className: "px-2 py-[2px] text-[10px] bg-hover text-text-secondary rounded-sm font-mono", children: [
            "P: ",
            c.parameters.topP
          ] }),
          /* @__PURE__ */ o.jsxs("span", { className: "px-2 py-[2px] text-[10px] bg-hover text-text-secondary rounded-sm font-mono", children: [
            "Max: ",
            c.parameters.maxTokens
          ] })
        ] }),
        /* @__PURE__ */ o.jsxs("div", { className: "flex gap-1 mt-2.5 pt-2.5 border-t border-border-light", onClick: (D) => D.stopPropagation(), children: [
          /* @__PURE__ */ o.jsx("button", { className: "engram-icon-btn", onClick: f, title: "编辑", children: /* @__PURE__ */ o.jsx(m2, { size: 14 }) }),
          /* @__PURE__ */ o.jsx("button", { className: "engram-icon-btn", onClick: b, title: "复制", children: /* @__PURE__ */ o.jsx(Vh, { size: 14 }) }),
          /* @__PURE__ */ o.jsx(
            "button",
            {
              className: "engram-icon-btn engram-close-btn",
              onClick: z,
              title: "删除",
              disabled: c.isDefault,
              children: /* @__PURE__ */ o.jsx(U0, { size: 14 })
            }
          )
        ] })
      ]
    }
  );
}, gv = [
  { value: "openai", label: "OpenAI" },
  { value: "anthropic", label: "Anthropic" },
  { value: "ollama", label: "Ollama" },
  { value: "vllm", label: "vLLM" },
  { value: "azure", label: "Azure OpenAI" },
  { value: "custom", label: "自定义" }
], pv = [
  { value: "tavern", label: "使用酒馆当前配置" },
  { value: "tavern_profile", label: "使用酒馆配置文件" },
  { value: "custom", label: "自定义 API 配置" }
];
function xv() {
  var c, d, r, f;
  try {
    const b = (r = (d = (c = window.SillyTavern) == null ? void 0 : c.getContext) == null ? void 0 : d.call(c)) == null ? void 0 : r.extensionSettings;
    return ((f = b == null ? void 0 : b.connectionManager) == null ? void 0 : f.profiles) || [];
  } catch (b) {
    return console.warn("[Engram] 无法获取酒馆 connection_profiles:", b), [];
  }
}
const Sv = ({
  preset: c,
  onChange: d,
  isNew: r = !1
}) => {
  var F, G, I, Ct;
  const [f, b] = Z.useState([]), [z, O] = Z.useState(!1), C = () => {
    O(!0);
    try {
      const q = xv();
      b(q);
    } finally {
      O(!1);
    }
  };
  Z.useEffect(() => {
    C();
  }, []);
  const N = (q) => {
    d({ ...c, ...q, updatedAt: Date.now() });
  }, x = (q, K) => {
    N({
      parameters: { ...c.parameters, [q]: K }
    });
  }, D = (q, K) => {
    N({
      context: { ...c.context, [q]: K }
    });
  }, H = (q, K) => {
    var vt, At, P, Mt;
    N({
      custom: {
        apiUrl: ((vt = c.custom) == null ? void 0 : vt.apiUrl) || "",
        apiKey: ((At = c.custom) == null ? void 0 : At.apiKey) || "",
        model: ((P = c.custom) == null ? void 0 : P.model) || "",
        apiSource: ((Mt = c.custom) == null ? void 0 : Mt.apiSource) || "openai",
        [q]: K
      }
    });
  }, J = (q) => {
    const K = q;
    N({
      source: K,
      tavernProfileId: K === "tavern_profile" ? c.tavernProfileId : void 0
    }), K === "tavern_profile" && C();
  }, w = f.map((q) => ({
    value: q.id,
    label: `${q.name} (${q.api || "Unknown"} - ${q.model || "Unknown"})`
  })), et = f.find((q) => q.id === c.tavernProfileId);
  return /* @__PURE__ */ o.jsxs("div", { className: "", children: [
    /* @__PURE__ */ o.jsxs(Be, { title: "基本信息", children: [
      /* @__PURE__ */ o.jsx(
        Ce,
        {
          label: "预设名称",
          value: c.name,
          onChange: (q) => N({ name: q }),
          placeholder: "输入预设名称",
          required: !0
        }
      ),
      /* @__PURE__ */ o.jsx(
        ii,
        {
          label: "配置源",
          value: c.source,
          onChange: J,
          options: pv,
          description: "选择 API 配置的来源"
        }
      )
    ] }),
    c.source === "tavern_profile" && /* @__PURE__ */ o.jsxs(Be, { title: "酒馆配置文件", description: "选择一个已保存的酒馆连接配置", children: [
      /* @__PURE__ */ o.jsxs("div", { className: "flex items-end gap-2", children: [
        /* @__PURE__ */ o.jsx(
          ii,
          {
            className: "flex-1 !mb-0",
            label: "选择配置文件",
            value: c.tavernProfileId || "",
            onChange: (q) => N({ tavernProfileId: q }),
            options: w,
            placeholder: z ? "加载中..." : "请选择配置文件",
            disabled: z || w.length === 0
          }
        ),
        /* @__PURE__ */ o.jsx(
          "button",
          {
            type: "button",
            className: "h-[42px] w-[42px] min-w-[42px] flex items-center justify-center border-none rounded-md bg-hover text-text-secondary cursor-pointer transition-all hover:bg-active hover:text-white",
            onClick: C,
            disabled: z,
            title: "刷新配置列表",
            children: /* @__PURE__ */ o.jsx(b2, { size: 16, className: z ? "animate-spin" : "" })
          }
        )
      ] }),
      w.length === 0 && !z && /* @__PURE__ */ o.jsx("div", { className: "p-3 bg-primary-10 border border-dashed border-primary-30 rounded-lg text-primary text-lg text-center mt-3", children: "未找到酒馆配置文件。请在酒馆中创建连接配置后刷新。" }),
      et && /* @__PURE__ */ o.jsxs("div", { className: "mt-4 p-3 bg-surface rounded-lg border border-border-light", children: [
        /* @__PURE__ */ o.jsxs("div", { className: "flex items-center gap-2 py-1 text-lg border-b border-border-light last:border-0", children: [
          /* @__PURE__ */ o.jsx("span", { className: "text-muted min-w-[60px]", children: "API:" }),
          /* @__PURE__ */ o.jsx("span", { className: "text-text-primary font-mono", children: et.api || "-" })
        ] }),
        /* @__PURE__ */ o.jsxs("div", { className: "flex items-center gap-2 py-1 text-lg border-b border-border-light last:border-0", children: [
          /* @__PURE__ */ o.jsx("span", { className: "text-muted min-w-[60px]", children: "模型:" }),
          /* @__PURE__ */ o.jsx("span", { className: "text-text-primary font-mono", children: et.model || "-" })
        ] }),
        /* @__PURE__ */ o.jsxs("div", { className: "flex items-center gap-2 py-1 text-lg border-b border-border-light last:border-0", children: [
          /* @__PURE__ */ o.jsx("span", { className: "text-muted min-w-[60px]", children: "预设:" }),
          /* @__PURE__ */ o.jsx("span", { className: "text-text-primary font-mono", children: et.preset || "-" })
        ] })
      ] })
    ] }),
    c.source === "custom" && /* @__PURE__ */ o.jsxs(Be, { title: "API 配置", description: "自定义 API 端点和密钥", children: [
      /* @__PURE__ */ o.jsx(
        ii,
        {
          label: "API 类型",
          value: ((F = c.custom) == null ? void 0 : F.apiSource) || "openai",
          onChange: (q) => H("apiSource", q),
          options: gv
        }
      ),
      /* @__PURE__ */ o.jsx(
        Ce,
        {
          label: "API URL",
          type: "url",
          value: ((G = c.custom) == null ? void 0 : G.apiUrl) || "",
          onChange: (q) => H("apiUrl", q),
          placeholder: "https://api.openai.com/v1",
          required: !0
        }
      ),
      /* @__PURE__ */ o.jsx(
        Ce,
        {
          label: "API Key",
          type: "password",
          value: ((I = c.custom) == null ? void 0 : I.apiKey) || "",
          onChange: (q) => H("apiKey", q),
          placeholder: "sk-..."
        }
      ),
      /* @__PURE__ */ o.jsx(
        Ce,
        {
          label: "模型名称",
          value: ((Ct = c.custom) == null ? void 0 : Ct.model) || "",
          onChange: (q) => H("model", q),
          placeholder: "gpt-4o-mini",
          required: !0
        }
      )
    ] }),
    /* @__PURE__ */ o.jsxs(Be, { title: "采样参数", description: "控制模型输出的随机性和多样性", children: [
      /* @__PURE__ */ o.jsx(
        nl,
        {
          label: "温度 (Temperature)",
          value: c.parameters.temperature,
          onChange: (q) => x("temperature", q),
          min: 0,
          max: 2,
          step: 0.1,
          description: "较高的值使输出更随机，较低的值使输出更确定"
        }
      ),
      /* @__PURE__ */ o.jsx(
        nl,
        {
          label: "Top-P",
          value: c.parameters.topP,
          onChange: (q) => x("topP", q),
          min: 0,
          max: 1,
          step: 0.05,
          description: "核采样阈值，控制候选 token 的累积概率"
        }
      ),
      /* @__PURE__ */ o.jsx(
        nl,
        {
          label: "最大输出 Tokens",
          value: c.parameters.maxTokens,
          onChange: (q) => x("maxTokens", q),
          min: 64,
          max: 16384,
          step: 64,
          showSlider: !1
        }
      ),
      /* @__PURE__ */ o.jsx(
        nl,
        {
          label: "频率惩罚",
          value: c.parameters.frequencyPenalty,
          onChange: (q) => x("frequencyPenalty", q),
          min: -2,
          max: 2,
          step: 0.1,
          description: "降低重复 token 的概率"
        }
      ),
      /* @__PURE__ */ o.jsx(
        nl,
        {
          label: "存在惩罚",
          value: c.parameters.presencePenalty,
          onChange: (q) => x("presencePenalty", q),
          min: -2,
          max: 2,
          step: 0.1,
          description: "鼓励模型讨论新主题"
        }
      )
    ] }),
    /* @__PURE__ */ o.jsxs(Be, { title: "上下文设置", description: "控制发送给模型的上下文内容", children: [
      /* @__PURE__ */ o.jsx(
        nl,
        {
          label: "聊天历史条数",
          value: c.context.maxChatHistory,
          onChange: (q) => D("maxChatHistory", q),
          min: 0,
          max: 100,
          step: 1,
          showSlider: !1,
          description: "使用多少条聊天历史（0 表示不使用）"
        }
      ),
      /* @__PURE__ */ o.jsx(
        Q0,
        {
          label: "包含世界书设定",
          checked: c.context.includeWorldInfo,
          onChange: (q) => D("includeWorldInfo", q),
          description: "是否在提示词中包含已激活的世界书内容"
        }
      ),
      c.context.includeWorldInfo && /* @__PURE__ */ o.jsx(
        nl,
        {
          label: "世界书 Token 预算",
          value: c.context.worldInfoBudget,
          onChange: (q) => D("worldInfoBudget", q),
          min: 256,
          max: 8192,
          step: 256,
          showSlider: !1,
          description: "分配给世界书内容的最大 token 数"
        }
      )
    ] })
  ] });
}, Ev = [
  { value: "transformers", label: "Transformers (本地)" },
  { value: "openai", label: "OpenAI Embeddings" },
  { value: "ollama", label: "Ollama" },
  { value: "vllm", label: "vLLM" },
  { value: "cohere", label: "Cohere" },
  { value: "jina", label: "Jina AI" },
  { value: "voyage", label: "Voyage AI" }
], A0 = {
  transformers: "Xenova/all-MiniLM-L6-v2",
  openai: "text-embedding-3-small",
  ollama: "nomic-embed-text",
  vllm: "BAAI/bge-m3",
  cohere: "embed-multilingual-v3.0",
  jina: "jina-embeddings-v3",
  voyage: "voyage-large-2"
}, j0 = ["ollama", "vllm"], T0 = ["openai", "cohere", "jina", "voyage"], zv = ({
  config: c,
  onChange: d
}) => {
  var O;
  const r = (C) => {
    d({ ...c, ...C });
  }, f = (C) => {
    r({
      source: C,
      model: A0[C],
      apiUrl: j0.includes(C) ? c.apiUrl : void 0,
      apiKey: T0.includes(C) ? c.apiKey : void 0
    });
  }, b = j0.includes(c.source), z = T0.includes(c.source);
  return /* @__PURE__ */ o.jsxs("div", { className: "", children: [
    /* @__PURE__ */ o.jsxs(Be, { title: "向量化设置", description: "配置文本向量化使用的模型和端点", children: [
      /* @__PURE__ */ o.jsx(
        ii,
        {
          label: "向量源",
          value: c.source,
          onChange: (C) => f(C),
          options: Ev,
          description: "选择向量化服务提供商"
        }
      ),
      b && /* @__PURE__ */ o.jsx(
        Ce,
        {
          label: "API URL",
          type: "url",
          value: c.apiUrl || "",
          onChange: (C) => r({ apiUrl: C }),
          placeholder: c.source === "ollama" ? "http://localhost:11434" : "http://localhost:8000",
          description: `${c.source} 服务的 API 端点`
        }
      ),
      z && /* @__PURE__ */ o.jsx(
        Ce,
        {
          label: "API Key",
          type: "password",
          value: c.apiKey || "",
          onChange: (C) => r({ apiKey: C }),
          placeholder: "输入 API 密钥"
        }
      ),
      /* @__PURE__ */ o.jsx(
        Ce,
        {
          label: "模型名称",
          value: c.model || "",
          onChange: (C) => r({ model: C }),
          placeholder: A0[c.source],
          description: "使用的向量化模型"
        }
      )
    ] }),
    /* @__PURE__ */ o.jsx(Be, { title: "高级选项", collapsible: !0, defaultCollapsed: !0, children: /* @__PURE__ */ o.jsx(
      Ce,
      {
        label: "向量维度",
        value: ((O = c.dimensions) == null ? void 0 : O.toString()) || "",
        onChange: (C) => {
          const N = parseInt(C, 10);
          r({ dimensions: isNaN(N) ? void 0 : N });
        },
        placeholder: "自动",
        description: "指定向量维度（留空则使用模型默认值）"
      }
    ) })
  ] });
}, _v = [
  "BAAI/bge-reranker-v2-m3",
  "BAAI/bge-reranker-base",
  "BAAI/bge-reranker-large",
  "cross-encoder/ms-marco-MiniLM-L-12-v2",
  "Xenova/ms-marco-MiniLM-L-6-v2"
], Av = ({
  config: c,
  onChange: d
}) => {
  const r = (f) => {
    d({ ...c, ...f });
  };
  return /* @__PURE__ */ o.jsxs("div", { className: "", children: [
    /* @__PURE__ */ o.jsx(Be, { title: "Rerank 设置", description: "配置重排序模型以优化检索结果", children: /* @__PURE__ */ o.jsx(
      Q0,
      {
        label: "启用 Rerank",
        checked: c.enabled,
        onChange: (f) => r({ enabled: f }),
        description: "使用 Rerank 模型对检索结果进行重新排序"
      }
    ) }),
    c.enabled && /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
      /* @__PURE__ */ o.jsxs(Be, { title: "API 配置", children: [
        /* @__PURE__ */ o.jsx(
          Ce,
          {
            label: "API URL",
            type: "url",
            value: c.url,
            onChange: (f) => r({ url: f }),
            placeholder: "http://localhost:8000/rerank",
            description: "Rerank 服务的 API 端点",
            required: !0
          }
        ),
        /* @__PURE__ */ o.jsx(
          Ce,
          {
            label: "API Key",
            type: "password",
            value: c.apiKey,
            onChange: (f) => r({ apiKey: f }),
            placeholder: "输入 API 密钥（如需要）"
          }
        ),
        /* @__PURE__ */ o.jsx(
          Ce,
          {
            label: "模型名称",
            value: c.model,
            onChange: (f) => r({ model: f }),
            placeholder: "BAAI/bge-reranker-v2-m3",
            description: "使用的 Rerank 模型",
            required: !0
          }
        ),
        /* @__PURE__ */ o.jsxs("div", { className: "mt-2", children: [
          /* @__PURE__ */ o.jsx("span", { className: "block text-md text-muted mb-2", children: "常用模型：" }),
          /* @__PURE__ */ o.jsx("div", { className: "flex flex-wrap gap-2", children: _v.map((f) => /* @__PURE__ */ o.jsx(
            "button",
            {
              type: "button",
              className: `px-3 py-1 border border-border-default rounded-sm text-sm cursor-pointer transition-all hover:border-border-focus hover:text-primary ${c.model === f ? "bg-primary-20 border-primary text-primary" : "bg-transparent text-text-secondary"}`,
              onClick: () => r({ model: f }),
              children: f.split("/").pop()
            },
            f
          )) })
        ] })
      ] }),
      /* @__PURE__ */ o.jsxs(Be, { title: "参数设置", children: [
        /* @__PURE__ */ o.jsx(
          nl,
          {
            label: "Top-N",
            value: c.topN,
            onChange: (f) => r({ topN: f }),
            min: 1,
            max: 50,
            step: 1,
            description: "重排后返回的结果数量"
          }
        ),
        /* @__PURE__ */ o.jsx(
          nl,
          {
            label: "混合权重 (Hybrid Alpha)",
            value: c.hybridAlpha,
            onChange: (f) => r({ hybridAlpha: f }),
            min: 0,
            max: 1,
            step: 0.1,
            description: "0 = 纯向量检索评分，1 = 纯 Rerank 评分"
          }
        )
      ] })
    ] })
  ] });
}, jv = {
  temperature: 0.7,
  topP: 0.95,
  maxTokens: 2048,
  frequencyPenalty: 0,
  presencePenalty: 0
}, Tv = {
  maxChatHistory: 10,
  includeWorldInfo: !0,
  worldInfoBudget: 2048
}, Nv = {
  source: "transformers"
}, Cv = {
  enabled: !1,
  url: "",
  apiKey: "",
  model: "",
  topN: 5,
  hybridAlpha: 0.5
};
function X0(c = "默认预设") {
  const d = Date.now();
  return {
    id: `preset_${d}`,
    name: c,
    source: "tavern",
    parameters: { ...jv },
    context: { ...Tv },
    isDefault: !0,
    createdAt: d,
    updatedAt: d
  };
}
function Mv() {
  return {
    llmPresets: [X0()],
    selectedPresetId: null,
    vectorConfig: { ...Nv },
    rerankConfig: { ...Cv }
  };
}
const Ov = [
  { id: "llm", label: "LLM 预设", icon: Rn },
  { id: "vector", label: "向量化", icon: M0 },
  { id: "rerank", label: "Rerank", icon: e2 }
], Dv = () => {
  const [c, d] = Z.useState("llm"), [r, f] = Z.useState(Mv), [b, z] = Z.useState(null), [O, C] = Z.useState(!1);
  Z.useEffect(() => {
  }, []);
  const N = (G) => {
    f((I) => ({
      ...I,
      selectedPresetId: G.id
    })), z(G);
  }, x = () => {
    const G = X0(`预设 ${r.llmPresets.length + 1}`);
    G.isDefault = !1, f((I) => ({
      ...I,
      llmPresets: [...I.llmPresets, G],
      selectedPresetId: G.id
    })), z(G), C(!0);
  }, D = (G) => {
    f((I) => ({
      ...I,
      llmPresets: I.llmPresets.map(
        (Ct) => Ct.id === G.id ? G : Ct
      )
    })), z(G), C(!0);
  }, H = (G) => {
    const I = {
      ...G,
      id: `preset_${Date.now()}`,
      name: `${G.name} (副本)`,
      isDefault: !1,
      createdAt: Date.now(),
      updatedAt: Date.now()
    };
    f((Ct) => ({
      ...Ct,
      llmPresets: [...Ct.llmPresets, I]
    })), C(!0);
  }, J = (G) => {
    G.isDefault || (f((I) => ({
      ...I,
      llmPresets: I.llmPresets.filter((Ct) => Ct.id !== G.id),
      selectedPresetId: I.selectedPresetId === G.id ? null : I.selectedPresetId
    })), (b == null ? void 0 : b.id) === G.id && z(null), C(!0));
  }, w = (G) => {
    f((I) => ({ ...I, vectorConfig: G })), C(!0);
  }, et = (G) => {
    f((I) => ({ ...I, rerankConfig: G })), C(!0);
  }, F = () => {
    console.log("保存配置:", r), C(!1);
  };
  return /* @__PURE__ */ o.jsxs("div", { className: "flex flex-col gap-4", children: [
    /* @__PURE__ */ o.jsxs("div", { className: "engram-page-header", children: [
      /* @__PURE__ */ o.jsx(Rn, { size: 24 }),
      /* @__PURE__ */ o.jsx("h2", { children: "API 配置" }),
      O && /* @__PURE__ */ o.jsxs("button", { className: "engram-btn engram-btn-primary", onClick: F, children: [
        /* @__PURE__ */ o.jsx(p2, { size: 16 }),
        "保存更改"
      ] })
    ] }),
    /* @__PURE__ */ o.jsx("div", { className: "engram-tabs", children: Ov.map((G) => /* @__PURE__ */ o.jsxs(
      "button",
      {
        className: `engram-tab ${c === G.id ? "active" : ""}`,
        onClick: () => d(G.id),
        children: [
          Ff.createElement(G.icon, { size: 16 }),
          G.label
        ]
      },
      G.id
    )) }),
    /* @__PURE__ */ o.jsxs("div", { className: "flex-1", children: [
      c === "llm" && /* @__PURE__ */ o.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-[300px_1fr] gap-4", children: [
        /* @__PURE__ */ o.jsxs("div", { className: "flex flex-col gap-3 max-md:max-h-[200px] max-md:overflow-y-auto", children: [
          /* @__PURE__ */ o.jsxs("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ o.jsx("h3", { className: "m-0 text-[14px] font-semibold text-primary", children: "预设列表" }),
            /* @__PURE__ */ o.jsxs(
              "button",
              {
                className: "engram-btn engram-btn-ghost",
                onClick: x,
                children: [
                  /* @__PURE__ */ o.jsx(v2, { size: 16 }),
                  "新建"
                ]
              }
            )
          ] }),
          /* @__PURE__ */ o.jsx("div", { className: "flex flex-col gap-2", children: r.llmPresets.map((G) => /* @__PURE__ */ o.jsx(
            bv,
            {
              preset: G,
              isSelected: r.selectedPresetId === G.id,
              onSelect: () => N(G),
              onEdit: () => {
                z(G), f((I) => ({
                  ...I,
                  selectedPresetId: G.id
                })), z(G);
              },
              onCopy: () => H(G),
              onDelete: () => J(G)
            },
            G.id
          )) })
        ] }),
        /* @__PURE__ */ o.jsx("div", { className: "flex flex-col gap-4", children: b ? /* @__PURE__ */ o.jsx(
          Sv,
          {
            preset: b,
            onChange: D
          }
        ) : /* @__PURE__ */ o.jsxs("div", { className: "flex flex-col items-center justify-center p-10 text-muted gap-4", children: [
          /* @__PURE__ */ o.jsx(Rn, { size: 48 }),
          /* @__PURE__ */ o.jsx("p", { children: "选择或创建一个预设开始配置" })
        ] }) })
      ] }),
      c === "vector" && /* @__PURE__ */ o.jsx("div", { className: "flex flex-col gap-4", children: /* @__PURE__ */ o.jsx(
        zv,
        {
          config: r.vectorConfig,
          onChange: w
        }
      ) }),
      c === "rerank" && /* @__PURE__ */ o.jsx("div", { className: "flex flex-col gap-4", children: /* @__PURE__ */ o.jsx(
        Av,
        {
          config: r.rerankConfig,
          onChange: et
        }
      ) })
    ] })
  ] });
};
function Uv(c) {
  return new Date(c).toTimeString().slice(0, 8);
}
const Rv = {
  [Et.DEBUG]: "text-[#6c757d]",
  [Et.INFO]: "text-[#17a2b8]",
  [Et.SUCCESS]: "text-[#28a745]",
  [Et.WARN]: "text-[#ffc107]",
  [Et.ERROR]: "text-[#dc3545]"
}, Hv = ({ entry: c }) => {
  const [d, r] = Z.useState(!1), f = c.data !== void 0, b = ci[c.level], z = Rv[c.level] || "";
  return /* @__PURE__ */ o.jsxs("div", { className: "mb-0.5", children: [
    /* @__PURE__ */ o.jsxs(
      "div",
      {
        className: `flex items-start gap-2 px-1 py-0.5 rounded-sm transition-colors hover:bg-hover ${f ? "cursor-pointer" : ""}`,
        onClick: () => f && r(!d),
        children: [
          /* @__PURE__ */ o.jsx("span", { className: "flex items-center text-muted shrink-0", children: f ? d ? /* @__PURE__ */ o.jsx(Hh, { size: 12 }) : /* @__PURE__ */ o.jsx(Bh, { size: 12 }) : /* @__PURE__ */ o.jsx("span", { style: { width: 12, display: "inline-block" } }) }),
          /* @__PURE__ */ o.jsxs("span", { className: "text-muted shrink-0", children: [
            "[",
            Uv(c.timestamp),
            "]"
          ] }),
          /* @__PURE__ */ o.jsxs("span", { className: "text-[#8b5cf6] shrink-0 whitespace-pre", children: [
            "[",
            c.module.padEnd(16),
            "]"
          ] }),
          /* @__PURE__ */ o.jsxs("span", { className: `shrink-0 whitespace-pre ${z}`, children: [
            b.icon,
            " ",
            b.label.padEnd(7)
          ] }),
          /* @__PURE__ */ o.jsx("span", { className: "text-text-primary break-words", children: c.message })
        ]
      }
    ),
    d && f && /* @__PURE__ */ o.jsx("div", { className: "ml-8 px-3 py-2 bg-black/30 border-l-2 border-disabled rounded-r-sm", children: /* @__PURE__ */ o.jsx("pre", { className: "m-0 text-text-secondary text-sm whitespace-pre-wrap break-words", children: JSON.stringify(c.data, null, 2) }) })
  ] });
}, qv = [
  "ALL",
  "Logger",
  "EventBus",
  "CORE/Pipeline",
  "CORE/RAG",
  "CORE/Memory",
  "UI/GraphView",
  "UI/MemoryStream"
], Bv = () => {
  const [c, d] = Z.useState([]), [r, f] = Z.useState([]), [b, z] = Z.useState(""), [O, C] = Z.useState(-1), [N, x] = Z.useState("ALL"), [D, H] = Z.useState(!0), [J, w] = Z.useState(!1), [et, F] = Z.useState(!1), G = Z.useRef(null), I = Z.useRef(null);
  Z.useEffect(() => {
    d(Ne.getLogs());
    const K = Ne.subscribe((vt) => {
      d((At) => [...At, vt]);
    });
    return () => K();
  }, []), Z.useEffect(() => {
    let K = c;
    if (O !== -1 && (K = K.filter((vt) => vt.level >= O)), N !== "ALL" && (K = K.filter((vt) => vt.module.startsWith(N))), b.trim()) {
      const vt = b.toLowerCase();
      K = K.filter(
        (At) => At.message.toLowerCase().includes(vt) || At.module.toLowerCase().includes(vt)
      );
    }
    f(K);
  }, [c, O, N, b]), Z.useEffect(() => {
    D && I.current && I.current.scrollIntoView({ behavior: "smooth" });
  }, [r, D]);
  const Ct = Z.useCallback(async () => {
    await Ne.clear(), d([]);
  }, []), q = Z.useCallback(() => {
    const K = Ne.exportToMarkdown(), vt = Ne.getExportFilename(), At = new Blob([K], { type: "text/markdown" }), P = URL.createObjectURL(At), Mt = document.createElement("a");
    Mt.href = P, Mt.download = vt, Mt.click(), URL.revokeObjectURL(P), Ne.success("DevLog", `日志已导出: ${vt}`);
  }, []);
  return /* @__PURE__ */ o.jsxs("div", { className: "flex flex-col h-full gap-3", children: [
    /* @__PURE__ */ o.jsxs("div", { className: "engram-page-header", children: [
      /* @__PURE__ */ o.jsx(Hn, { size: 24 }),
      /* @__PURE__ */ o.jsx("h2", { children: "开发日志" })
    ] }),
    /* @__PURE__ */ o.jsxs("div", { className: "flex items-center gap-2 flex-wrap", children: [
      /* @__PURE__ */ o.jsxs("div", { className: "engram-dropdown", children: [
        /* @__PURE__ */ o.jsxs(
          "button",
          {
            className: "engram-btn engram-btn-ghost",
            onClick: () => w(!J),
            children: [
              /* @__PURE__ */ o.jsx(b0, { size: 14 }),
              O === -1 ? "全部级别" : ci[O].label
            ]
          }
        ),
        J && /* @__PURE__ */ o.jsxs("div", { className: "engram-dropdown-menu", children: [
          /* @__PURE__ */ o.jsx(
            "button",
            {
              onClick: () => {
                C(-1), w(!1);
              },
              children: "全部级别"
            }
          ),
          Object.entries(ci).map(([K, vt]) => /* @__PURE__ */ o.jsxs(
            "button",
            {
              onClick: () => {
                C(Number(K)), w(!1);
              },
              children: [
                vt.icon,
                " ",
                vt.label
              ]
            },
            K
          ))
        ] })
      ] }),
      /* @__PURE__ */ o.jsxs("div", { className: "engram-dropdown", children: [
        /* @__PURE__ */ o.jsxs(
          "button",
          {
            className: "engram-btn engram-btn-ghost",
            onClick: () => F(!et),
            children: [
              /* @__PURE__ */ o.jsx(b0, { size: 14 }),
              N
            ]
          }
        ),
        et && /* @__PURE__ */ o.jsx("div", { className: "engram-dropdown-menu", children: qv.map((K) => /* @__PURE__ */ o.jsx(
          "button",
          {
            onClick: () => {
              x(K), F(!1);
            },
            children: K
          },
          K
        )) })
      ] }),
      /* @__PURE__ */ o.jsxs("div", { className: "engram-search-box", children: [
        /* @__PURE__ */ o.jsx(wf, { size: 14 }),
        /* @__PURE__ */ o.jsx(
          "input",
          {
            type: "text",
            placeholder: "搜索日志...",
            value: b,
            onChange: (K) => z(K.target.value)
          }
        )
      ] }),
      /* @__PURE__ */ o.jsxs("div", { className: "flex items-center gap-1 ml-auto", children: [
        /* @__PURE__ */ o.jsx(
          "button",
          {
            className: `engram-btn engram-btn-ghost ${D ? "active" : ""}`,
            onClick: () => H(!D),
            title: "自动滚动到最新",
            children: /* @__PURE__ */ o.jsx(Mh, { size: 14 })
          }
        ),
        /* @__PURE__ */ o.jsx(
          "button",
          {
            className: "engram-btn engram-btn-ghost",
            onClick: Ct,
            title: "清空日志",
            children: /* @__PURE__ */ o.jsx(U0, { size: 14 })
          }
        ),
        /* @__PURE__ */ o.jsxs(
          "button",
          {
            className: "engram-btn engram-btn-primary",
            onClick: q,
            title: "导出日志",
            children: [
              /* @__PURE__ */ o.jsx(Fh, { size: 14 }),
              "导出"
            ]
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ o.jsx("div", { className: "flex-1 p-3 bg-[#1a1a2e] border border-border-default rounded-lg overflow-y-auto font-mono text-md leading-relaxed", ref: G, children: r.length === 0 ? /* @__PURE__ */ o.jsxs("div", { className: "flex flex-col items-center justify-center h-full gap-3 text-disabled", children: [
      /* @__PURE__ */ o.jsx(Hn, { size: 48, strokeWidth: 1 }),
      /* @__PURE__ */ o.jsx("p", { children: "暂无日志记录" })
    ] }) : /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
      r.map((K) => /* @__PURE__ */ o.jsx(Hv, { entry: K }, K.id)),
      /* @__PURE__ */ o.jsx("div", { ref: I })
    ] }) }),
    /* @__PURE__ */ o.jsxs("div", { className: "flex items-center gap-2 px-3 py-2 bg-elevated rounded-md text-md text-muted", children: [
      /* @__PURE__ */ o.jsxs("span", { children: [
        "共 ",
        c.length,
        " 条日志"
      ] }),
      r.length !== c.length && /* @__PURE__ */ o.jsxs("span", { children: [
        "（显示 ",
        r.length,
        " 条）"
      ] })
    ] })
  ] });
}, Yv = () => /* @__PURE__ */ o.jsxs("div", { className: "engram-settings", children: [
  /* @__PURE__ */ o.jsxs("div", { className: "engram-page-header", children: [
    /* @__PURE__ */ o.jsx(ts, { size: 24 }),
    /* @__PURE__ */ o.jsx("h2", { children: "设置" })
  ] }),
  /* @__PURE__ */ o.jsx("div", { className: "engram-page-content", children: /* @__PURE__ */ o.jsx("p", { className: "engram-placeholder", children: "设置选项将在这里展示..." }) })
] }), Lv = {
  "/dashboard": w0,
  "/memory": hv,
  "/graph": vv,
  "/brain": ai,
  "/brain/summarize": ai,
  "/brain/vectorize": ai,
  "/brain/batch": ai,
  "/api": Dv,
  "/dev": Bv,
  "/settings": Yv
}, Gv = ({ onClose: c }) => {
  const [d, r] = Z.useState("/dashboard"), [f, b] = Z.useState(!1), [z, O] = Z.useState(!0), [C, N] = Z.useState(
    typeof window < "u" && window.innerWidth < 768
  );
  Z.useEffect(() => {
    const D = () => {
      N(window.innerWidth < 768);
    };
    return window.addEventListener("resize", D), () => window.removeEventListener("resize", D);
  }, []), Z.useEffect(() => {
    C && (b(!0), O(!1));
  }, [C]);
  const x = Lv[d] || w0;
  return /* @__PURE__ */ o.jsx(
    U2,
    {
      currentPath: d,
      onNavigate: r,
      isFullscreen: f,
      onToggleFullscreen: () => b(!f),
      isSidebarOpen: z,
      onToggleSidebar: () => O(!z),
      onCloseSidebar: () => O(!1),
      isMobile: C,
      onClose: c,
      children: /* @__PURE__ */ o.jsx(x, { onNavigate: r })
    }
  );
};
ov((c, d) => {
  const r = Sh.createRoot(c);
  return r.render(Ff.createElement(Gv, { onClose: d })), r;
});
document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", _0) : _0();
export {
  wv as c,
  N0 as g
};
//# sourceMappingURL=index-DkQ_uUnH.js.map
