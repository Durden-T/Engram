var d3 = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function U1(c) {
  return c && c.__esModule && Object.prototype.hasOwnProperty.call(c, "default") ? c.default : c;
}
var Hf = { exports: {} }, k = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var o1;
function ph() {
  if (o1) return k;
  o1 = 1;
  var c = Symbol.for("react.transitional.element"), d = Symbol.for("react.portal"), o = Symbol.for("react.fragment"), f = Symbol.for("react.strict_mode"), g = Symbol.for("react.profiler"), x = Symbol.for("react.consumer"), O = Symbol.for("react.context"), C = Symbol.for("react.forward_ref"), j = Symbol.for("react.suspense"), S = Symbol.for("react.memo"), D = Symbol.for("react.lazy"), H = Symbol.for("react.activity"), J = Symbol.iterator;
  function w(v) {
    return v === null || typeof v != "object" ? null : (v = J && v[J] || v["@@iterator"], typeof v == "function" ? v : null);
  }
  var el = {
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
    this.props = v, this.context = M, this.refs = G, this.updater = R || el;
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
  function Ml() {
  }
  Ml.prototype = I.prototype;
  function q(v, M, R) {
    this.props = v, this.context = M, this.refs = G, this.updater = R || el;
  }
  var K = q.prototype = new Ml();
  K.constructor = q, F(K, I.prototype), K.isPureReactComponent = !0;
  var yl = Array.isArray;
  function zl() {
  }
  var P = { H: null, A: null, T: null, S: null }, Ol = Object.prototype.hasOwnProperty;
  function Rt(v, M, R) {
    var L = R.ref;
    return {
      $$typeof: c,
      type: v,
      key: M,
      ref: L !== void 0 ? L : null,
      props: R
    };
  }
  function ta(v, M) {
    return Rt(v.type, M, v.props);
  }
  function Ht(v) {
    return typeof v == "object" && v !== null && v.$$typeof === c;
  }
  function lt(v) {
    var M = { "=": "=0", ":": "=2" };
    return "$" + v.replace(/[=:]/g, function(R) {
      return M[R];
    });
  }
  var He = /\/+/g;
  function Xt(v, M) {
    return typeof v == "object" && v !== null && v.key != null ? lt("" + v.key) : M.toString(36);
  }
  function jt(v) {
    switch (v.status) {
      case "fulfilled":
        return v.value;
      case "rejected":
        throw v.reason;
      default:
        switch (typeof v.status == "string" ? v.then(zl, zl) : (v.status = "pending", v.then(
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
  function A(v, M, R, L, $) {
    var al = typeof v;
    (al === "undefined" || al === "boolean") && (v = null);
    var ml = !1;
    if (v === null) ml = !0;
    else
      switch (al) {
        case "bigint":
        case "string":
        case "number":
          ml = !0;
          break;
        case "object":
          switch (v.$$typeof) {
            case c:
            case d:
              ml = !0;
              break;
            case D:
              return ml = v._init, A(
                ml(v._payload),
                M,
                R,
                L,
                $
              );
          }
      }
    if (ml)
      return $ = $(v), ml = L === "" ? "." + Xt(v, 0) : L, yl($) ? (R = "", ml != null && (R = ml.replace(He, "$&/") + "/"), A($, M, R, "", function(Qa) {
        return Qa;
      })) : $ != null && (Ht($) && ($ = ta(
        $,
        R + ($.key == null || v && v.key === $.key ? "" : ("" + $.key).replace(
          He,
          "$&/"
        ) + "/") + ml
      )), M.push($)), 1;
    ml = 0;
    var Fl = L === "" ? "." : L + ":";
    if (yl(v))
      for (var Dl = 0; Dl < v.length; Dl++)
        L = v[Dl], al = Fl + Xt(L, Dl), ml += A(
          L,
          M,
          R,
          al,
          $
        );
    else if (Dl = w(v), typeof Dl == "function")
      for (v = Dl.call(v), Dl = 0; !(L = v.next()).done; )
        L = L.value, al = Fl + Xt(L, Dl++), ml += A(
          L,
          M,
          R,
          al,
          $
        );
    else if (al === "object") {
      if (typeof v.then == "function")
        return A(
          jt(v),
          M,
          R,
          L,
          $
        );
      throw M = String(v), Error(
        "Objects are not valid as a React child (found: " + (M === "[object Object]" ? "object with keys {" + Object.keys(v).join(", ") + "}" : M) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return ml;
  }
  function U(v, M, R) {
    if (v == null) return v;
    var L = [], $ = 0;
    return A(v, L, "", "", function(al) {
      return M.call(R, al, $++);
    }), L;
  }
  function Z(v) {
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
  var gl = typeof reportError == "function" ? reportError : function(v) {
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
  }, _l = {
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
      if (!Ht(v))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return v;
    }
  };
  return k.Activity = H, k.Children = _l, k.Component = I, k.Fragment = o, k.Profiler = g, k.PureComponent = q, k.StrictMode = f, k.Suspense = j, k.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = P, k.__COMPILER_RUNTIME = {
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
    var L = F({}, v.props), $ = v.key;
    if (M != null)
      for (al in M.key !== void 0 && ($ = "" + M.key), M)
        !Ol.call(M, al) || al === "key" || al === "__self" || al === "__source" || al === "ref" && M.ref === void 0 || (L[al] = M[al]);
    var al = arguments.length - 2;
    if (al === 1) L.children = R;
    else if (1 < al) {
      for (var ml = Array(al), Fl = 0; Fl < al; Fl++)
        ml[Fl] = arguments[Fl + 2];
      L.children = ml;
    }
    return Rt(v.type, $, L);
  }, k.createContext = function(v) {
    return v = {
      $$typeof: O,
      _currentValue: v,
      _currentValue2: v,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, v.Provider = v, v.Consumer = {
      $$typeof: x,
      _context: v
    }, v;
  }, k.createElement = function(v, M, R) {
    var L, $ = {}, al = null;
    if (M != null)
      for (L in M.key !== void 0 && (al = "" + M.key), M)
        Ol.call(M, L) && L !== "key" && L !== "__self" && L !== "__source" && ($[L] = M[L]);
    var ml = arguments.length - 2;
    if (ml === 1) $.children = R;
    else if (1 < ml) {
      for (var Fl = Array(ml), Dl = 0; Dl < ml; Dl++)
        Fl[Dl] = arguments[Dl + 2];
      $.children = Fl;
    }
    if (v && v.defaultProps)
      for (L in ml = v.defaultProps, ml)
        $[L] === void 0 && ($[L] = ml[L]);
    return Rt(v, al, $);
  }, k.createRef = function() {
    return { current: null };
  }, k.forwardRef = function(v) {
    return { $$typeof: C, render: v };
  }, k.isValidElement = Ht, k.lazy = function(v) {
    return {
      $$typeof: D,
      _payload: { _status: -1, _result: v },
      _init: Z
    };
  }, k.memo = function(v, M) {
    return {
      $$typeof: S,
      type: v,
      compare: M === void 0 ? null : M
    };
  }, k.startTransition = function(v) {
    var M = P.T, R = {};
    P.T = R;
    try {
      var L = v(), $ = P.S;
      $ !== null && $(R, L), typeof L == "object" && L !== null && typeof L.then == "function" && L.then(zl, gl);
    } catch (al) {
      gl(al);
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
var r1;
function ts() {
  return r1 || (r1 = 1, Hf.exports = ph()), Hf.exports;
}
var V = ts();
const es = /* @__PURE__ */ U1(V);
var qf = { exports: {} }, qn = {}, Bf = { exports: {} }, Lf = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var d1;
function bh() {
  return d1 || (d1 = 1, (function(c) {
    function d(A, U) {
      var Z = A.length;
      A.push(U);
      l: for (; 0 < Z; ) {
        var gl = Z - 1 >>> 1, _l = A[gl];
        if (0 < g(_l, U))
          A[gl] = U, A[Z] = _l, Z = gl;
        else break l;
      }
    }
    function o(A) {
      return A.length === 0 ? null : A[0];
    }
    function f(A) {
      if (A.length === 0) return null;
      var U = A[0], Z = A.pop();
      if (Z !== U) {
        A[0] = Z;
        l: for (var gl = 0, _l = A.length, v = _l >>> 1; gl < v; ) {
          var M = 2 * (gl + 1) - 1, R = A[M], L = M + 1, $ = A[L];
          if (0 > g(R, Z))
            L < _l && 0 > g($, R) ? (A[gl] = $, A[L] = Z, gl = L) : (A[gl] = R, A[M] = Z, gl = M);
          else if (L < _l && 0 > g($, Z))
            A[gl] = $, A[L] = Z, gl = L;
          else break l;
        }
      }
      return U;
    }
    function g(A, U) {
      var Z = A.sortIndex - U.sortIndex;
      return Z !== 0 ? Z : A.id - U.id;
    }
    if (c.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var x = performance;
      c.unstable_now = function() {
        return x.now();
      };
    } else {
      var O = Date, C = O.now();
      c.unstable_now = function() {
        return O.now() - C;
      };
    }
    var j = [], S = [], D = 1, H = null, J = 3, w = !1, el = !1, F = !1, G = !1, I = typeof setTimeout == "function" ? setTimeout : null, Ml = typeof clearTimeout == "function" ? clearTimeout : null, q = typeof setImmediate < "u" ? setImmediate : null;
    function K(A) {
      for (var U = o(S); U !== null; ) {
        if (U.callback === null) f(S);
        else if (U.startTime <= A)
          f(S), U.sortIndex = U.expirationTime, d(j, U);
        else break;
        U = o(S);
      }
    }
    function yl(A) {
      if (F = !1, K(A), !el)
        if (o(j) !== null)
          el = !0, zl || (zl = !0, lt());
        else {
          var U = o(S);
          U !== null && jt(yl, U.startTime - A);
        }
    }
    var zl = !1, P = -1, Ol = 5, Rt = -1;
    function ta() {
      return G ? !0 : !(c.unstable_now() - Rt < Ol);
    }
    function Ht() {
      if (G = !1, zl) {
        var A = c.unstable_now();
        Rt = A;
        var U = !0;
        try {
          l: {
            el = !1, F && (F = !1, Ml(P), P = -1), w = !0;
            var Z = J;
            try {
              t: {
                for (K(A), H = o(j); H !== null && !(H.expirationTime > A && ta()); ) {
                  var gl = H.callback;
                  if (typeof gl == "function") {
                    H.callback = null, J = H.priorityLevel;
                    var _l = gl(
                      H.expirationTime <= A
                    );
                    if (A = c.unstable_now(), typeof _l == "function") {
                      H.callback = _l, K(A), U = !0;
                      break t;
                    }
                    H === o(j) && f(j), K(A);
                  } else f(j);
                  H = o(j);
                }
                if (H !== null) U = !0;
                else {
                  var v = o(S);
                  v !== null && jt(
                    yl,
                    v.startTime - A
                  ), U = !1;
                }
              }
              break l;
            } finally {
              H = null, J = Z, w = !1;
            }
            U = void 0;
          }
        } finally {
          U ? lt() : zl = !1;
        }
      }
    }
    var lt;
    if (typeof q == "function")
      lt = function() {
        q(Ht);
      };
    else if (typeof MessageChannel < "u") {
      var He = new MessageChannel(), Xt = He.port2;
      He.port1.onmessage = Ht, lt = function() {
        Xt.postMessage(null);
      };
    } else
      lt = function() {
        I(Ht, 0);
      };
    function jt(A, U) {
      P = I(function() {
        A(c.unstable_now());
      }, U);
    }
    c.unstable_IdlePriority = 5, c.unstable_ImmediatePriority = 1, c.unstable_LowPriority = 4, c.unstable_NormalPriority = 3, c.unstable_Profiling = null, c.unstable_UserBlockingPriority = 2, c.unstable_cancelCallback = function(A) {
      A.callback = null;
    }, c.unstable_forceFrameRate = function(A) {
      0 > A || 125 < A ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : Ol = 0 < A ? Math.floor(1e3 / A) : 5;
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
      var Z = J;
      J = U;
      try {
        return A();
      } finally {
        J = Z;
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
      var Z = J;
      J = A;
      try {
        return U();
      } finally {
        J = Z;
      }
    }, c.unstable_scheduleCallback = function(A, U, Z) {
      var gl = c.unstable_now();
      switch (typeof Z == "object" && Z !== null ? (Z = Z.delay, Z = typeof Z == "number" && 0 < Z ? gl + Z : gl) : Z = gl, A) {
        case 1:
          var _l = -1;
          break;
        case 2:
          _l = 250;
          break;
        case 5:
          _l = 1073741823;
          break;
        case 4:
          _l = 1e4;
          break;
        default:
          _l = 5e3;
      }
      return _l = Z + _l, A = {
        id: D++,
        callback: U,
        priorityLevel: A,
        startTime: Z,
        expirationTime: _l,
        sortIndex: -1
      }, Z > gl ? (A.sortIndex = Z, d(S, A), o(j) === null && A === o(S) && (F ? (Ml(P), P = -1) : F = !0, jt(yl, Z - gl))) : (A.sortIndex = _l, d(j, A), el || w || (el = !0, zl || (zl = !0, lt()))), A;
    }, c.unstable_shouldYield = ta, c.unstable_wrapCallback = function(A) {
      var U = J;
      return function() {
        var Z = J;
        J = U;
        try {
          return A.apply(this, arguments);
        } finally {
          J = Z;
        }
      };
    };
  })(Lf)), Lf;
}
var m1;
function Sh() {
  return m1 || (m1 = 1, Bf.exports = bh()), Bf.exports;
}
var Yf = { exports: {} }, Wl = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var h1;
function _h() {
  if (h1) return Wl;
  h1 = 1;
  var c = ts();
  function d(j) {
    var S = "https://react.dev/errors/" + j;
    if (1 < arguments.length) {
      S += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var D = 2; D < arguments.length; D++)
        S += "&args[]=" + encodeURIComponent(arguments[D]);
    }
    return "Minified React error #" + j + "; visit " + S + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function o() {
  }
  var f = {
    d: {
      f: o,
      r: function() {
        throw Error(d(522));
      },
      D: o,
      C: o,
      L: o,
      m: o,
      X: o,
      S: o,
      M: o
    },
    p: 0,
    findDOMNode: null
  }, g = Symbol.for("react.portal");
  function x(j, S, D) {
    var H = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: g,
      key: H == null ? null : "" + H,
      children: j,
      containerInfo: S,
      implementation: D
    };
  }
  var O = c.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function C(j, S) {
    if (j === "font") return "";
    if (typeof S == "string")
      return S === "use-credentials" ? S : "";
  }
  return Wl.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = f, Wl.createPortal = function(j, S) {
    var D = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!S || S.nodeType !== 1 && S.nodeType !== 9 && S.nodeType !== 11)
      throw Error(d(299));
    return x(j, S, null, D);
  }, Wl.flushSync = function(j) {
    var S = O.T, D = f.p;
    try {
      if (O.T = null, f.p = 2, j) return j();
    } finally {
      O.T = S, f.p = D, f.d.f();
    }
  }, Wl.preconnect = function(j, S) {
    typeof j == "string" && (S ? (S = S.crossOrigin, S = typeof S == "string" ? S === "use-credentials" ? S : "" : void 0) : S = null, f.d.C(j, S));
  }, Wl.prefetchDNS = function(j) {
    typeof j == "string" && f.d.D(j);
  }, Wl.preinit = function(j, S) {
    if (typeof j == "string" && S && typeof S.as == "string") {
      var D = S.as, H = C(D, S.crossOrigin), J = typeof S.integrity == "string" ? S.integrity : void 0, w = typeof S.fetchPriority == "string" ? S.fetchPriority : void 0;
      D === "style" ? f.d.S(
        j,
        typeof S.precedence == "string" ? S.precedence : void 0,
        {
          crossOrigin: H,
          integrity: J,
          fetchPriority: w
        }
      ) : D === "script" && f.d.X(j, {
        crossOrigin: H,
        integrity: J,
        fetchPriority: w,
        nonce: typeof S.nonce == "string" ? S.nonce : void 0
      });
    }
  }, Wl.preinitModule = function(j, S) {
    if (typeof j == "string")
      if (typeof S == "object" && S !== null) {
        if (S.as == null || S.as === "script") {
          var D = C(
            S.as,
            S.crossOrigin
          );
          f.d.M(j, {
            crossOrigin: D,
            integrity: typeof S.integrity == "string" ? S.integrity : void 0,
            nonce: typeof S.nonce == "string" ? S.nonce : void 0
          });
        }
      } else S == null && f.d.M(j);
  }, Wl.preload = function(j, S) {
    if (typeof j == "string" && typeof S == "object" && S !== null && typeof S.as == "string") {
      var D = S.as, H = C(D, S.crossOrigin);
      f.d.L(j, D, {
        crossOrigin: H,
        integrity: typeof S.integrity == "string" ? S.integrity : void 0,
        nonce: typeof S.nonce == "string" ? S.nonce : void 0,
        type: typeof S.type == "string" ? S.type : void 0,
        fetchPriority: typeof S.fetchPriority == "string" ? S.fetchPriority : void 0,
        referrerPolicy: typeof S.referrerPolicy == "string" ? S.referrerPolicy : void 0,
        imageSrcSet: typeof S.imageSrcSet == "string" ? S.imageSrcSet : void 0,
        imageSizes: typeof S.imageSizes == "string" ? S.imageSizes : void 0,
        media: typeof S.media == "string" ? S.media : void 0
      });
    }
  }, Wl.preloadModule = function(j, S) {
    if (typeof j == "string")
      if (S) {
        var D = C(S.as, S.crossOrigin);
        f.d.m(j, {
          as: typeof S.as == "string" && S.as !== "script" ? S.as : void 0,
          crossOrigin: D,
          integrity: typeof S.integrity == "string" ? S.integrity : void 0
        });
      } else f.d.m(j);
  }, Wl.requestFormReset = function(j) {
    f.d.r(j);
  }, Wl.unstable_batchedUpdates = function(j, S) {
    return j(S);
  }, Wl.useFormState = function(j, S, D) {
    return O.H.useFormState(j, S, D);
  }, Wl.useFormStatus = function() {
    return O.H.useHostTransitionStatus();
  }, Wl.version = "19.2.3", Wl;
}
var v1;
function Eh() {
  if (v1) return Yf.exports;
  v1 = 1;
  function c() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(c);
      } catch (d) {
        console.error(d);
      }
  }
  return c(), Yf.exports = _h(), Yf.exports;
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
var y1;
function xh() {
  if (y1) return qn;
  y1 = 1;
  var c = Sh(), d = ts(), o = Eh();
  function f(l) {
    var t = "https://react.dev/errors/" + l;
    if (1 < arguments.length) {
      t += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var e = 2; e < arguments.length; e++)
        t += "&args[]=" + encodeURIComponent(arguments[e]);
    }
    return "Minified React error #" + l + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function g(l) {
    return !(!l || l.nodeType !== 1 && l.nodeType !== 9 && l.nodeType !== 11);
  }
  function x(l) {
    var t = l, e = l;
    if (l.alternate) for (; t.return; ) t = t.return;
    else {
      l = t;
      do
        t = l, (t.flags & 4098) !== 0 && (e = t.return), l = t.return;
      while (l);
    }
    return t.tag === 3 ? e : null;
  }
  function O(l) {
    if (l.tag === 13) {
      var t = l.memoizedState;
      if (t === null && (l = l.alternate, l !== null && (t = l.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function C(l) {
    if (l.tag === 31) {
      var t = l.memoizedState;
      if (t === null && (l = l.alternate, l !== null && (t = l.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function j(l) {
    if (x(l) !== l)
      throw Error(f(188));
  }
  function S(l) {
    var t = l.alternate;
    if (!t) {
      if (t = x(l), t === null) throw Error(f(188));
      return t !== l ? null : l;
    }
    for (var e = l, a = t; ; ) {
      var n = e.return;
      if (n === null) break;
      var u = n.alternate;
      if (u === null) {
        if (a = n.return, a !== null) {
          e = a;
          continue;
        }
        break;
      }
      if (n.child === u.child) {
        for (u = n.child; u; ) {
          if (u === e) return j(n), l;
          if (u === a) return j(n), t;
          u = u.sibling;
        }
        throw Error(f(188));
      }
      if (e.return !== a.return) e = n, a = u;
      else {
        for (var i = !1, s = n.child; s; ) {
          if (s === e) {
            i = !0, e = n, a = u;
            break;
          }
          if (s === a) {
            i = !0, a = n, e = u;
            break;
          }
          s = s.sibling;
        }
        if (!i) {
          for (s = u.child; s; ) {
            if (s === e) {
              i = !0, e = u, a = n;
              break;
            }
            if (s === a) {
              i = !0, a = u, e = n;
              break;
            }
            s = s.sibling;
          }
          if (!i) throw Error(f(189));
        }
      }
      if (e.alternate !== a) throw Error(f(190));
    }
    if (e.tag !== 3) throw Error(f(188));
    return e.stateNode.current === e ? l : t;
  }
  function D(l) {
    var t = l.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return l;
    for (l = l.child; l !== null; ) {
      if (t = D(l), t !== null) return t;
      l = l.sibling;
    }
    return null;
  }
  var H = Object.assign, J = Symbol.for("react.element"), w = Symbol.for("react.transitional.element"), el = Symbol.for("react.portal"), F = Symbol.for("react.fragment"), G = Symbol.for("react.strict_mode"), I = Symbol.for("react.profiler"), Ml = Symbol.for("react.consumer"), q = Symbol.for("react.context"), K = Symbol.for("react.forward_ref"), yl = Symbol.for("react.suspense"), zl = Symbol.for("react.suspense_list"), P = Symbol.for("react.memo"), Ol = Symbol.for("react.lazy"), Rt = Symbol.for("react.activity"), ta = Symbol.for("react.memo_cache_sentinel"), Ht = Symbol.iterator;
  function lt(l) {
    return l === null || typeof l != "object" ? null : (l = Ht && l[Ht] || l["@@iterator"], typeof l == "function" ? l : null);
  }
  var He = Symbol.for("react.client.reference");
  function Xt(l) {
    if (l == null) return null;
    if (typeof l == "function")
      return l.$$typeof === He ? null : l.displayName || l.name || null;
    if (typeof l == "string") return l;
    switch (l) {
      case F:
        return "Fragment";
      case I:
        return "Profiler";
      case G:
        return "StrictMode";
      case yl:
        return "Suspense";
      case zl:
        return "SuspenseList";
      case Rt:
        return "Activity";
    }
    if (typeof l == "object")
      switch (l.$$typeof) {
        case el:
          return "Portal";
        case q:
          return l.displayName || "Context";
        case Ml:
          return (l._context.displayName || "Context") + ".Consumer";
        case K:
          var t = l.render;
          return l = l.displayName, l || (l = t.displayName || t.name || "", l = l !== "" ? "ForwardRef(" + l + ")" : "ForwardRef"), l;
        case P:
          return t = l.displayName || null, t !== null ? t : Xt(l.type) || "Memo";
        case Ol:
          t = l._payload, l = l._init;
          try {
            return Xt(l(t));
          } catch {
          }
      }
    return null;
  }
  var jt = Array.isArray, A = d.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, U = o.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Z = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, gl = [], _l = -1;
  function v(l) {
    return { current: l };
  }
  function M(l) {
    0 > _l || (l.current = gl[_l], gl[_l] = null, _l--);
  }
  function R(l, t) {
    _l++, gl[_l] = l.current, l.current = t;
  }
  var L = v(null), $ = v(null), al = v(null), ml = v(null);
  function Fl(l, t) {
    switch (R(al, t), R($, l), R(L, null), t.nodeType) {
      case 9:
      case 11:
        l = (l = t.documentElement) && (l = l.namespaceURI) ? Ud(l) : 0;
        break;
      default:
        if (l = t.tagName, t = t.namespaceURI)
          t = Ud(t), l = Rd(t, l);
        else
          switch (l) {
            case "svg":
              l = 1;
              break;
            case "math":
              l = 2;
              break;
            default:
              l = 0;
          }
    }
    M(L), R(L, l);
  }
  function Dl() {
    M(L), M($), M(al);
  }
  function Qa(l) {
    l.memoizedState !== null && R(ml, l);
    var t = L.current, e = Rd(t, l.type);
    t !== e && (R($, l), R(L, e));
  }
  function Qn(l) {
    $.current === l && (M(L), M($)), ml.current === l && (M(ml), Dn._currentValue = Z);
  }
  var yi, fs;
  function qe(l) {
    if (yi === void 0)
      try {
        throw Error();
      } catch (e) {
        var t = e.stack.trim().match(/\n( *(at )?)/);
        yi = t && t[1] || "", fs = -1 < e.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < e.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + yi + l + fs;
  }
  var gi = !1;
  function pi(l, t) {
    if (!l || gi) return "";
    gi = !0;
    var e = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var a = {
        DetermineComponentFrameRoot: function() {
          try {
            if (t) {
              var N = function() {
                throw Error();
              };
              if (Object.defineProperty(N.prototype, "props", {
                set: function() {
                  throw Error();
                }
              }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct(N, []);
                } catch (E) {
                  var _ = E;
                }
                Reflect.construct(l, [], N);
              } else {
                try {
                  N.call();
                } catch (E) {
                  _ = E;
                }
                l.call(N.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (E) {
                _ = E;
              }
              (N = l()) && typeof N.catch == "function" && N.catch(function() {
              });
            }
          } catch (E) {
            if (E && _ && typeof E.stack == "string")
              return [E.stack, _.stack];
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
`), b = s.split(`
`);
        for (n = a = 0; a < m.length && !m[a].includes("DetermineComponentFrameRoot"); )
          a++;
        for (; n < b.length && !b[n].includes(
          "DetermineComponentFrameRoot"
        ); )
          n++;
        if (a === m.length || n === b.length)
          for (a = m.length - 1, n = b.length - 1; 1 <= a && 0 <= n && m[a] !== b[n]; )
            n--;
        for (; 1 <= a && 0 <= n; a--, n--)
          if (m[a] !== b[n]) {
            if (a !== 1 || n !== 1)
              do
                if (a--, n--, 0 > n || m[a] !== b[n]) {
                  var T = `
` + m[a].replace(" at new ", " at ");
                  return l.displayName && T.includes("<anonymous>") && (T = T.replace("<anonymous>", l.displayName)), T;
                }
              while (1 <= a && 0 <= n);
            break;
          }
      }
    } finally {
      gi = !1, Error.prepareStackTrace = e;
    }
    return (e = l ? l.displayName || l.name : "") ? qe(e) : "";
  }
  function $1(l, t) {
    switch (l.tag) {
      case 26:
      case 27:
      case 5:
        return qe(l.type);
      case 16:
        return qe("Lazy");
      case 13:
        return l.child !== t && t !== null ? qe("Suspense Fallback") : qe("Suspense");
      case 19:
        return qe("SuspenseList");
      case 0:
      case 15:
        return pi(l.type, !1);
      case 11:
        return pi(l.type.render, !1);
      case 1:
        return pi(l.type, !0);
      case 31:
        return qe("Activity");
      default:
        return "";
    }
  }
  function ss(l) {
    try {
      var t = "", e = null;
      do
        t += $1(l, e), e = l, l = l.return;
      while (l);
      return t;
    } catch (a) {
      return `
Error generating stack: ` + a.message + `
` + a.stack;
    }
  }
  var bi = Object.prototype.hasOwnProperty, Si = c.unstable_scheduleCallback, _i = c.unstable_cancelCallback, W1 = c.unstable_shouldYield, F1 = c.unstable_requestPaint, ft = c.unstable_now, I1 = c.unstable_getCurrentPriorityLevel, os = c.unstable_ImmediatePriority, rs = c.unstable_UserBlockingPriority, Xn = c.unstable_NormalPriority, P1 = c.unstable_LowPriority, ds = c.unstable_IdlePriority, l0 = c.log, t0 = c.unstable_setDisableYieldValue, Xa = null, st = null;
  function se(l) {
    if (typeof l0 == "function" && t0(l), st && typeof st.setStrictMode == "function")
      try {
        st.setStrictMode(Xa, l);
      } catch {
      }
  }
  var ot = Math.clz32 ? Math.clz32 : n0, e0 = Math.log, a0 = Math.LN2;
  function n0(l) {
    return l >>>= 0, l === 0 ? 32 : 31 - (e0(l) / a0 | 0) | 0;
  }
  var Vn = 256, Zn = 262144, Kn = 4194304;
  function Be(l) {
    var t = l & 42;
    if (t !== 0) return t;
    switch (l & -l) {
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
        return l & 261888;
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return l & 3932160;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return l & 62914560;
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
        return l;
    }
  }
  function Jn(l, t, e) {
    var a = l.pendingLanes;
    if (a === 0) return 0;
    var n = 0, u = l.suspendedLanes, i = l.pingedLanes;
    l = l.warmLanes;
    var s = a & 134217727;
    return s !== 0 ? (a = s & ~u, a !== 0 ? n = Be(a) : (i &= s, i !== 0 ? n = Be(i) : e || (e = s & ~l, e !== 0 && (n = Be(e))))) : (s = a & ~u, s !== 0 ? n = Be(s) : i !== 0 ? n = Be(i) : e || (e = a & ~l, e !== 0 && (n = Be(e)))), n === 0 ? 0 : t !== 0 && t !== n && (t & u) === 0 && (u = n & -n, e = t & -t, u >= e || u === 32 && (e & 4194048) !== 0) ? t : n;
  }
  function Va(l, t) {
    return (l.pendingLanes & ~(l.suspendedLanes & ~l.pingedLanes) & t) === 0;
  }
  function u0(l, t) {
    switch (l) {
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
  function ms() {
    var l = Kn;
    return Kn <<= 1, (Kn & 62914560) === 0 && (Kn = 4194304), l;
  }
  function Ei(l) {
    for (var t = [], e = 0; 31 > e; e++) t.push(l);
    return t;
  }
  function Za(l, t) {
    l.pendingLanes |= t, t !== 268435456 && (l.suspendedLanes = 0, l.pingedLanes = 0, l.warmLanes = 0);
  }
  function i0(l, t, e, a, n, u) {
    var i = l.pendingLanes;
    l.pendingLanes = e, l.suspendedLanes = 0, l.pingedLanes = 0, l.warmLanes = 0, l.expiredLanes &= e, l.entangledLanes &= e, l.errorRecoveryDisabledLanes &= e, l.shellSuspendCounter = 0;
    var s = l.entanglements, m = l.expirationTimes, b = l.hiddenUpdates;
    for (e = i & ~e; 0 < e; ) {
      var T = 31 - ot(e), N = 1 << T;
      s[T] = 0, m[T] = -1;
      var _ = b[T];
      if (_ !== null)
        for (b[T] = null, T = 0; T < _.length; T++) {
          var E = _[T];
          E !== null && (E.lane &= -536870913);
        }
      e &= ~N;
    }
    a !== 0 && hs(l, a, 0), u !== 0 && n === 0 && l.tag !== 0 && (l.suspendedLanes |= u & ~(i & ~t));
  }
  function hs(l, t, e) {
    l.pendingLanes |= t, l.suspendedLanes &= ~t;
    var a = 31 - ot(t);
    l.entangledLanes |= t, l.entanglements[a] = l.entanglements[a] | 1073741824 | e & 261930;
  }
  function vs(l, t) {
    var e = l.entangledLanes |= t;
    for (l = l.entanglements; e; ) {
      var a = 31 - ot(e), n = 1 << a;
      n & t | l[a] & t && (l[a] |= t), e &= ~n;
    }
  }
  function ys(l, t) {
    var e = t & -t;
    return e = (e & 42) !== 0 ? 1 : xi(e), (e & (l.suspendedLanes | t)) !== 0 ? 0 : e;
  }
  function xi(l) {
    switch (l) {
      case 2:
        l = 1;
        break;
      case 8:
        l = 4;
        break;
      case 32:
        l = 16;
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
        l = 128;
        break;
      case 268435456:
        l = 134217728;
        break;
      default:
        l = 0;
    }
    return l;
  }
  function Ti(l) {
    return l &= -l, 2 < l ? 8 < l ? (l & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function gs() {
    var l = U.p;
    return l !== 0 ? l : (l = window.event, l === void 0 ? 32 : a1(l.type));
  }
  function ps(l, t) {
    var e = U.p;
    try {
      return U.p = l, t();
    } finally {
      U.p = e;
    }
  }
  var oe = Math.random().toString(36).slice(2), Vl = "__reactFiber$" + oe, tt = "__reactProps$" + oe, ea = "__reactContainer$" + oe, Ai = "__reactEvents$" + oe, c0 = "__reactListeners$" + oe, f0 = "__reactHandles$" + oe, bs = "__reactResources$" + oe, Ka = "__reactMarker$" + oe;
  function zi(l) {
    delete l[Vl], delete l[tt], delete l[Ai], delete l[c0], delete l[f0];
  }
  function aa(l) {
    var t = l[Vl];
    if (t) return t;
    for (var e = l.parentNode; e; ) {
      if (t = e[ea] || e[Vl]) {
        if (e = t.alternate, t.child !== null || e !== null && e.child !== null)
          for (l = wd(l); l !== null; ) {
            if (e = l[Vl]) return e;
            l = wd(l);
          }
        return t;
      }
      l = e, e = l.parentNode;
    }
    return null;
  }
  function na(l) {
    if (l = l[Vl] || l[ea]) {
      var t = l.tag;
      if (t === 5 || t === 6 || t === 13 || t === 31 || t === 26 || t === 27 || t === 3)
        return l;
    }
    return null;
  }
  function Ja(l) {
    var t = l.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return l.stateNode;
    throw Error(f(33));
  }
  function ua(l) {
    var t = l[bs];
    return t || (t = l[bs] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), t;
  }
  function Ql(l) {
    l[Ka] = !0;
  }
  var Ss = /* @__PURE__ */ new Set(), _s = {};
  function Le(l, t) {
    ia(l, t), ia(l + "Capture", t);
  }
  function ia(l, t) {
    for (_s[l] = t, l = 0; l < t.length; l++)
      Ss.add(t[l]);
  }
  var s0 = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), Es = {}, xs = {};
  function o0(l) {
    return bi.call(xs, l) ? !0 : bi.call(Es, l) ? !1 : s0.test(l) ? xs[l] = !0 : (Es[l] = !0, !1);
  }
  function kn(l, t, e) {
    if (o0(t))
      if (e === null) l.removeAttribute(t);
      else {
        switch (typeof e) {
          case "undefined":
          case "function":
          case "symbol":
            l.removeAttribute(t);
            return;
          case "boolean":
            var a = t.toLowerCase().slice(0, 5);
            if (a !== "data-" && a !== "aria-") {
              l.removeAttribute(t);
              return;
            }
        }
        l.setAttribute(t, "" + e);
      }
  }
  function $n(l, t, e) {
    if (e === null) l.removeAttribute(t);
    else {
      switch (typeof e) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          l.removeAttribute(t);
          return;
      }
      l.setAttribute(t, "" + e);
    }
  }
  function Vt(l, t, e, a) {
    if (a === null) l.removeAttribute(e);
    else {
      switch (typeof a) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          l.removeAttribute(e);
          return;
      }
      l.setAttributeNS(t, e, "" + a);
    }
  }
  function pt(l) {
    switch (typeof l) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return l;
      case "object":
        return l;
      default:
        return "";
    }
  }
  function Ts(l) {
    var t = l.type;
    return (l = l.nodeName) && l.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function r0(l, t, e) {
    var a = Object.getOwnPropertyDescriptor(
      l.constructor.prototype,
      t
    );
    if (!l.hasOwnProperty(t) && typeof a < "u" && typeof a.get == "function" && typeof a.set == "function") {
      var n = a.get, u = a.set;
      return Object.defineProperty(l, t, {
        configurable: !0,
        get: function() {
          return n.call(this);
        },
        set: function(i) {
          e = "" + i, u.call(this, i);
        }
      }), Object.defineProperty(l, t, {
        enumerable: a.enumerable
      }), {
        getValue: function() {
          return e;
        },
        setValue: function(i) {
          e = "" + i;
        },
        stopTracking: function() {
          l._valueTracker = null, delete l[t];
        }
      };
    }
  }
  function Ni(l) {
    if (!l._valueTracker) {
      var t = Ts(l) ? "checked" : "value";
      l._valueTracker = r0(
        l,
        t,
        "" + l[t]
      );
    }
  }
  function As(l) {
    if (!l) return !1;
    var t = l._valueTracker;
    if (!t) return !0;
    var e = t.getValue(), a = "";
    return l && (a = Ts(l) ? l.checked ? "true" : "false" : l.value), l = a, l !== e ? (t.setValue(l), !0) : !1;
  }
  function Wn(l) {
    if (l = l || (typeof document < "u" ? document : void 0), typeof l > "u") return null;
    try {
      return l.activeElement || l.body;
    } catch {
      return l.body;
    }
  }
  var d0 = /[\n"\\]/g;
  function bt(l) {
    return l.replace(
      d0,
      function(t) {
        return "\\" + t.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function ji(l, t, e, a, n, u, i, s) {
    l.name = "", i != null && typeof i != "function" && typeof i != "symbol" && typeof i != "boolean" ? l.type = i : l.removeAttribute("type"), t != null ? i === "number" ? (t === 0 && l.value === "" || l.value != t) && (l.value = "" + pt(t)) : l.value !== "" + pt(t) && (l.value = "" + pt(t)) : i !== "submit" && i !== "reset" || l.removeAttribute("value"), t != null ? Ci(l, i, pt(t)) : e != null ? Ci(l, i, pt(e)) : a != null && l.removeAttribute("value"), n == null && u != null && (l.defaultChecked = !!u), n != null && (l.checked = n && typeof n != "function" && typeof n != "symbol"), s != null && typeof s != "function" && typeof s != "symbol" && typeof s != "boolean" ? l.name = "" + pt(s) : l.removeAttribute("name");
  }
  function zs(l, t, e, a, n, u, i, s) {
    if (u != null && typeof u != "function" && typeof u != "symbol" && typeof u != "boolean" && (l.type = u), t != null || e != null) {
      if (!(u !== "submit" && u !== "reset" || t != null)) {
        Ni(l);
        return;
      }
      e = e != null ? "" + pt(e) : "", t = t != null ? "" + pt(t) : e, s || t === l.value || (l.value = t), l.defaultValue = t;
    }
    a = a ?? n, a = typeof a != "function" && typeof a != "symbol" && !!a, l.checked = s ? l.checked : !!a, l.defaultChecked = !!a, i != null && typeof i != "function" && typeof i != "symbol" && typeof i != "boolean" && (l.name = i), Ni(l);
  }
  function Ci(l, t, e) {
    t === "number" && Wn(l.ownerDocument) === l || l.defaultValue === "" + e || (l.defaultValue = "" + e);
  }
  function ca(l, t, e, a) {
    if (l = l.options, t) {
      t = {};
      for (var n = 0; n < e.length; n++)
        t["$" + e[n]] = !0;
      for (e = 0; e < l.length; e++)
        n = t.hasOwnProperty("$" + l[e].value), l[e].selected !== n && (l[e].selected = n), n && a && (l[e].defaultSelected = !0);
    } else {
      for (e = "" + pt(e), t = null, n = 0; n < l.length; n++) {
        if (l[n].value === e) {
          l[n].selected = !0, a && (l[n].defaultSelected = !0);
          return;
        }
        t !== null || l[n].disabled || (t = l[n]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function Ns(l, t, e) {
    if (t != null && (t = "" + pt(t), t !== l.value && (l.value = t), e == null)) {
      l.defaultValue !== t && (l.defaultValue = t);
      return;
    }
    l.defaultValue = e != null ? "" + pt(e) : "";
  }
  function js(l, t, e, a) {
    if (t == null) {
      if (a != null) {
        if (e != null) throw Error(f(92));
        if (jt(a)) {
          if (1 < a.length) throw Error(f(93));
          a = a[0];
        }
        e = a;
      }
      e == null && (e = ""), t = e;
    }
    e = pt(t), l.defaultValue = e, a = l.textContent, a === e && a !== "" && a !== null && (l.value = a), Ni(l);
  }
  function fa(l, t) {
    if (t) {
      var e = l.firstChild;
      if (e && e === l.lastChild && e.nodeType === 3) {
        e.nodeValue = t;
        return;
      }
    }
    l.textContent = t;
  }
  var m0 = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function Cs(l, t, e) {
    var a = t.indexOf("--") === 0;
    e == null || typeof e == "boolean" || e === "" ? a ? l.setProperty(t, "") : t === "float" ? l.cssFloat = "" : l[t] = "" : a ? l.setProperty(t, e) : typeof e != "number" || e === 0 || m0.has(t) ? t === "float" ? l.cssFloat = e : l[t] = ("" + e).trim() : l[t] = e + "px";
  }
  function Ms(l, t, e) {
    if (t != null && typeof t != "object")
      throw Error(f(62));
    if (l = l.style, e != null) {
      for (var a in e)
        !e.hasOwnProperty(a) || t != null && t.hasOwnProperty(a) || (a.indexOf("--") === 0 ? l.setProperty(a, "") : a === "float" ? l.cssFloat = "" : l[a] = "");
      for (var n in t)
        a = t[n], t.hasOwnProperty(n) && e[n] !== a && Cs(l, n, a);
    } else
      for (var u in t)
        t.hasOwnProperty(u) && Cs(l, u, t[u]);
  }
  function Mi(l) {
    if (l.indexOf("-") === -1) return !1;
    switch (l) {
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
  var h0 = /* @__PURE__ */ new Map([
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
  ]), v0 = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Fn(l) {
    return v0.test("" + l) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : l;
  }
  function Zt() {
  }
  var Oi = null;
  function Di(l) {
    return l = l.target || l.srcElement || window, l.correspondingUseElement && (l = l.correspondingUseElement), l.nodeType === 3 ? l.parentNode : l;
  }
  var sa = null, oa = null;
  function Os(l) {
    var t = na(l);
    if (t && (l = t.stateNode)) {
      var e = l[tt] || null;
      l: switch (l = t.stateNode, t.type) {
        case "input":
          if (ji(
            l,
            e.value,
            e.defaultValue,
            e.defaultValue,
            e.checked,
            e.defaultChecked,
            e.type,
            e.name
          ), t = e.name, e.type === "radio" && t != null) {
            for (e = l; e.parentNode; ) e = e.parentNode;
            for (e = e.querySelectorAll(
              'input[name="' + bt(
                "" + t
              ) + '"][type="radio"]'
            ), t = 0; t < e.length; t++) {
              var a = e[t];
              if (a !== l && a.form === l.form) {
                var n = a[tt] || null;
                if (!n) throw Error(f(90));
                ji(
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
            for (t = 0; t < e.length; t++)
              a = e[t], a.form === l.form && As(a);
          }
          break l;
        case "textarea":
          Ns(l, e.value, e.defaultValue);
          break l;
        case "select":
          t = e.value, t != null && ca(l, !!e.multiple, t, !1);
      }
    }
  }
  var Ui = !1;
  function Ds(l, t, e) {
    if (Ui) return l(t, e);
    Ui = !0;
    try {
      var a = l(t);
      return a;
    } finally {
      if (Ui = !1, (sa !== null || oa !== null) && (Lu(), sa && (t = sa, l = oa, oa = sa = null, Os(t), l)))
        for (t = 0; t < l.length; t++) Os(l[t]);
    }
  }
  function ka(l, t) {
    var e = l.stateNode;
    if (e === null) return null;
    var a = e[tt] || null;
    if (a === null) return null;
    e = a[t];
    l: switch (t) {
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
        (a = !a.disabled) || (l = l.type, a = !(l === "button" || l === "input" || l === "select" || l === "textarea")), l = !a;
        break l;
      default:
        l = !1;
    }
    if (l) return null;
    if (e && typeof e != "function")
      throw Error(
        f(231, t, typeof e)
      );
    return e;
  }
  var Kt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Ri = !1;
  if (Kt)
    try {
      var $a = {};
      Object.defineProperty($a, "passive", {
        get: function() {
          Ri = !0;
        }
      }), window.addEventListener("test", $a, $a), window.removeEventListener("test", $a, $a);
    } catch {
      Ri = !1;
    }
  var re = null, Hi = null, In = null;
  function Us() {
    if (In) return In;
    var l, t = Hi, e = t.length, a, n = "value" in re ? re.value : re.textContent, u = n.length;
    for (l = 0; l < e && t[l] === n[l]; l++) ;
    var i = e - l;
    for (a = 1; a <= i && t[e - a] === n[u - a]; a++) ;
    return In = n.slice(l, 1 < a ? 1 - a : void 0);
  }
  function Pn(l) {
    var t = l.keyCode;
    return "charCode" in l ? (l = l.charCode, l === 0 && t === 13 && (l = 13)) : l = t, l === 10 && (l = 13), 32 <= l || l === 13 ? l : 0;
  }
  function lu() {
    return !0;
  }
  function Rs() {
    return !1;
  }
  function et(l) {
    function t(e, a, n, u, i) {
      this._reactName = e, this._targetInst = n, this.type = a, this.nativeEvent = u, this.target = i, this.currentTarget = null;
      for (var s in l)
        l.hasOwnProperty(s) && (e = l[s], this[s] = e ? e(u) : u[s]);
      return this.isDefaultPrevented = (u.defaultPrevented != null ? u.defaultPrevented : u.returnValue === !1) ? lu : Rs, this.isPropagationStopped = Rs, this;
    }
    return H(t.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var e = this.nativeEvent;
        e && (e.preventDefault ? e.preventDefault() : typeof e.returnValue != "unknown" && (e.returnValue = !1), this.isDefaultPrevented = lu);
      },
      stopPropagation: function() {
        var e = this.nativeEvent;
        e && (e.stopPropagation ? e.stopPropagation() : typeof e.cancelBubble != "unknown" && (e.cancelBubble = !0), this.isPropagationStopped = lu);
      },
      persist: function() {
      },
      isPersistent: lu
    }), t;
  }
  var Ye = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(l) {
      return l.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, tu = et(Ye), Wa = H({}, Ye, { view: 0, detail: 0 }), y0 = et(Wa), qi, Bi, Fa, eu = H({}, Wa, {
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
    getModifierState: Yi,
    button: 0,
    buttons: 0,
    relatedTarget: function(l) {
      return l.relatedTarget === void 0 ? l.fromElement === l.srcElement ? l.toElement : l.fromElement : l.relatedTarget;
    },
    movementX: function(l) {
      return "movementX" in l ? l.movementX : (l !== Fa && (Fa && l.type === "mousemove" ? (qi = l.screenX - Fa.screenX, Bi = l.screenY - Fa.screenY) : Bi = qi = 0, Fa = l), qi);
    },
    movementY: function(l) {
      return "movementY" in l ? l.movementY : Bi;
    }
  }), Hs = et(eu), g0 = H({}, eu, { dataTransfer: 0 }), p0 = et(g0), b0 = H({}, Wa, { relatedTarget: 0 }), Li = et(b0), S0 = H({}, Ye, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), _0 = et(S0), E0 = H({}, Ye, {
    clipboardData: function(l) {
      return "clipboardData" in l ? l.clipboardData : window.clipboardData;
    }
  }), x0 = et(E0), T0 = H({}, Ye, { data: 0 }), qs = et(T0), A0 = {
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
  }, z0 = {
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
  }, N0 = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function j0(l) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(l) : (l = N0[l]) ? !!t[l] : !1;
  }
  function Yi() {
    return j0;
  }
  var C0 = H({}, Wa, {
    key: function(l) {
      if (l.key) {
        var t = A0[l.key] || l.key;
        if (t !== "Unidentified") return t;
      }
      return l.type === "keypress" ? (l = Pn(l), l === 13 ? "Enter" : String.fromCharCode(l)) : l.type === "keydown" || l.type === "keyup" ? z0[l.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Yi,
    charCode: function(l) {
      return l.type === "keypress" ? Pn(l) : 0;
    },
    keyCode: function(l) {
      return l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0;
    },
    which: function(l) {
      return l.type === "keypress" ? Pn(l) : l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0;
    }
  }), M0 = et(C0), O0 = H({}, eu, {
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
  }), Bs = et(O0), D0 = H({}, Wa, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Yi
  }), U0 = et(D0), R0 = H({}, Ye, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), H0 = et(R0), q0 = H({}, eu, {
    deltaX: function(l) {
      return "deltaX" in l ? l.deltaX : "wheelDeltaX" in l ? -l.wheelDeltaX : 0;
    },
    deltaY: function(l) {
      return "deltaY" in l ? l.deltaY : "wheelDeltaY" in l ? -l.wheelDeltaY : "wheelDelta" in l ? -l.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), B0 = et(q0), L0 = H({}, Ye, {
    newState: 0,
    oldState: 0
  }), Y0 = et(L0), G0 = [9, 13, 27, 32], Gi = Kt && "CompositionEvent" in window, Ia = null;
  Kt && "documentMode" in document && (Ia = document.documentMode);
  var w0 = Kt && "TextEvent" in window && !Ia, Ls = Kt && (!Gi || Ia && 8 < Ia && 11 >= Ia), Ys = " ", Gs = !1;
  function ws(l, t) {
    switch (l) {
      case "keyup":
        return G0.indexOf(t.keyCode) !== -1;
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
  function Qs(l) {
    return l = l.detail, typeof l == "object" && "data" in l ? l.data : null;
  }
  var ra = !1;
  function Q0(l, t) {
    switch (l) {
      case "compositionend":
        return Qs(t);
      case "keypress":
        return t.which !== 32 ? null : (Gs = !0, Ys);
      case "textInput":
        return l = t.data, l === Ys && Gs ? null : l;
      default:
        return null;
    }
  }
  function X0(l, t) {
    if (ra)
      return l === "compositionend" || !Gi && ws(l, t) ? (l = Us(), In = Hi = re = null, ra = !1, l) : null;
    switch (l) {
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
        return Ls && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var V0 = {
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
  function Xs(l) {
    var t = l && l.nodeName && l.nodeName.toLowerCase();
    return t === "input" ? !!V0[l.type] : t === "textarea";
  }
  function Vs(l, t, e, a) {
    sa ? oa ? oa.push(a) : oa = [a] : sa = a, t = Zu(t, "onChange"), 0 < t.length && (e = new tu(
      "onChange",
      "change",
      null,
      e,
      a
    ), l.push({ event: e, listeners: t }));
  }
  var Pa = null, ln = null;
  function Z0(l) {
    Nd(l, 0);
  }
  function au(l) {
    var t = Ja(l);
    if (As(t)) return l;
  }
  function Zs(l, t) {
    if (l === "change") return t;
  }
  var Ks = !1;
  if (Kt) {
    var wi;
    if (Kt) {
      var Qi = "oninput" in document;
      if (!Qi) {
        var Js = document.createElement("div");
        Js.setAttribute("oninput", "return;"), Qi = typeof Js.oninput == "function";
      }
      wi = Qi;
    } else wi = !1;
    Ks = wi && (!document.documentMode || 9 < document.documentMode);
  }
  function ks() {
    Pa && (Pa.detachEvent("onpropertychange", $s), ln = Pa = null);
  }
  function $s(l) {
    if (l.propertyName === "value" && au(ln)) {
      var t = [];
      Vs(
        t,
        ln,
        l,
        Di(l)
      ), Ds(Z0, t);
    }
  }
  function K0(l, t, e) {
    l === "focusin" ? (ks(), Pa = t, ln = e, Pa.attachEvent("onpropertychange", $s)) : l === "focusout" && ks();
  }
  function J0(l) {
    if (l === "selectionchange" || l === "keyup" || l === "keydown")
      return au(ln);
  }
  function k0(l, t) {
    if (l === "click") return au(t);
  }
  function $0(l, t) {
    if (l === "input" || l === "change")
      return au(t);
  }
  function W0(l, t) {
    return l === t && (l !== 0 || 1 / l === 1 / t) || l !== l && t !== t;
  }
  var rt = typeof Object.is == "function" ? Object.is : W0;
  function tn(l, t) {
    if (rt(l, t)) return !0;
    if (typeof l != "object" || l === null || typeof t != "object" || t === null)
      return !1;
    var e = Object.keys(l), a = Object.keys(t);
    if (e.length !== a.length) return !1;
    for (a = 0; a < e.length; a++) {
      var n = e[a];
      if (!bi.call(t, n) || !rt(l[n], t[n]))
        return !1;
    }
    return !0;
  }
  function Ws(l) {
    for (; l && l.firstChild; ) l = l.firstChild;
    return l;
  }
  function Fs(l, t) {
    var e = Ws(l);
    l = 0;
    for (var a; e; ) {
      if (e.nodeType === 3) {
        if (a = l + e.textContent.length, l <= t && a >= t)
          return { node: e, offset: t - l };
        l = a;
      }
      l: {
        for (; e; ) {
          if (e.nextSibling) {
            e = e.nextSibling;
            break l;
          }
          e = e.parentNode;
        }
        e = void 0;
      }
      e = Ws(e);
    }
  }
  function Is(l, t) {
    return l && t ? l === t ? !0 : l && l.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Is(l, t.parentNode) : "contains" in l ? l.contains(t) : l.compareDocumentPosition ? !!(l.compareDocumentPosition(t) & 16) : !1 : !1;
  }
  function Ps(l) {
    l = l != null && l.ownerDocument != null && l.ownerDocument.defaultView != null ? l.ownerDocument.defaultView : window;
    for (var t = Wn(l.document); t instanceof l.HTMLIFrameElement; ) {
      try {
        var e = typeof t.contentWindow.location.href == "string";
      } catch {
        e = !1;
      }
      if (e) l = t.contentWindow;
      else break;
      t = Wn(l.document);
    }
    return t;
  }
  function Xi(l) {
    var t = l && l.nodeName && l.nodeName.toLowerCase();
    return t && (t === "input" && (l.type === "text" || l.type === "search" || l.type === "tel" || l.type === "url" || l.type === "password") || t === "textarea" || l.contentEditable === "true");
  }
  var F0 = Kt && "documentMode" in document && 11 >= document.documentMode, da = null, Vi = null, en = null, Zi = !1;
  function lo(l, t, e) {
    var a = e.window === e ? e.document : e.nodeType === 9 ? e : e.ownerDocument;
    Zi || da == null || da !== Wn(a) || (a = da, "selectionStart" in a && Xi(a) ? a = { start: a.selectionStart, end: a.selectionEnd } : (a = (a.ownerDocument && a.ownerDocument.defaultView || window).getSelection(), a = {
      anchorNode: a.anchorNode,
      anchorOffset: a.anchorOffset,
      focusNode: a.focusNode,
      focusOffset: a.focusOffset
    }), en && tn(en, a) || (en = a, a = Zu(Vi, "onSelect"), 0 < a.length && (t = new tu(
      "onSelect",
      "select",
      null,
      t,
      e
    ), l.push({ event: t, listeners: a }), t.target = da)));
  }
  function Ge(l, t) {
    var e = {};
    return e[l.toLowerCase()] = t.toLowerCase(), e["Webkit" + l] = "webkit" + t, e["Moz" + l] = "moz" + t, e;
  }
  var ma = {
    animationend: Ge("Animation", "AnimationEnd"),
    animationiteration: Ge("Animation", "AnimationIteration"),
    animationstart: Ge("Animation", "AnimationStart"),
    transitionrun: Ge("Transition", "TransitionRun"),
    transitionstart: Ge("Transition", "TransitionStart"),
    transitioncancel: Ge("Transition", "TransitionCancel"),
    transitionend: Ge("Transition", "TransitionEnd")
  }, Ki = {}, to = {};
  Kt && (to = document.createElement("div").style, "AnimationEvent" in window || (delete ma.animationend.animation, delete ma.animationiteration.animation, delete ma.animationstart.animation), "TransitionEvent" in window || delete ma.transitionend.transition);
  function we(l) {
    if (Ki[l]) return Ki[l];
    if (!ma[l]) return l;
    var t = ma[l], e;
    for (e in t)
      if (t.hasOwnProperty(e) && e in to)
        return Ki[l] = t[e];
    return l;
  }
  var eo = we("animationend"), ao = we("animationiteration"), no = we("animationstart"), I0 = we("transitionrun"), P0 = we("transitionstart"), lm = we("transitioncancel"), uo = we("transitionend"), io = /* @__PURE__ */ new Map(), Ji = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  Ji.push("scrollEnd");
  function Ct(l, t) {
    io.set(l, t), Le(t, [l]);
  }
  var nu = typeof reportError == "function" ? reportError : function(l) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var t = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof l == "object" && l !== null && typeof l.message == "string" ? String(l.message) : String(l),
        error: l
      });
      if (!window.dispatchEvent(t)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", l);
      return;
    }
    console.error(l);
  }, St = [], ha = 0, ki = 0;
  function uu() {
    for (var l = ha, t = ki = ha = 0; t < l; ) {
      var e = St[t];
      St[t++] = null;
      var a = St[t];
      St[t++] = null;
      var n = St[t];
      St[t++] = null;
      var u = St[t];
      if (St[t++] = null, a !== null && n !== null) {
        var i = a.pending;
        i === null ? n.next = n : (n.next = i.next, i.next = n), a.pending = n;
      }
      u !== 0 && co(e, n, u);
    }
  }
  function iu(l, t, e, a) {
    St[ha++] = l, St[ha++] = t, St[ha++] = e, St[ha++] = a, ki |= a, l.lanes |= a, l = l.alternate, l !== null && (l.lanes |= a);
  }
  function $i(l, t, e, a) {
    return iu(l, t, e, a), cu(l);
  }
  function Qe(l, t) {
    return iu(l, null, null, t), cu(l);
  }
  function co(l, t, e) {
    l.lanes |= e;
    var a = l.alternate;
    a !== null && (a.lanes |= e);
    for (var n = !1, u = l.return; u !== null; )
      u.childLanes |= e, a = u.alternate, a !== null && (a.childLanes |= e), u.tag === 22 && (l = u.stateNode, l === null || l._visibility & 1 || (n = !0)), l = u, u = u.return;
    return l.tag === 3 ? (u = l.stateNode, n && t !== null && (n = 31 - ot(e), l = u.hiddenUpdates, a = l[n], a === null ? l[n] = [t] : a.push(t), t.lane = e | 536870912), u) : null;
  }
  function cu(l) {
    if (50 < An)
      throw An = 0, nf = null, Error(f(185));
    for (var t = l.return; t !== null; )
      l = t, t = l.return;
    return l.tag === 3 ? l.stateNode : null;
  }
  var va = {};
  function tm(l, t, e, a) {
    this.tag = l, this.key = e, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = a, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function dt(l, t, e, a) {
    return new tm(l, t, e, a);
  }
  function Wi(l) {
    return l = l.prototype, !(!l || !l.isReactComponent);
  }
  function Jt(l, t) {
    var e = l.alternate;
    return e === null ? (e = dt(
      l.tag,
      t,
      l.key,
      l.mode
    ), e.elementType = l.elementType, e.type = l.type, e.stateNode = l.stateNode, e.alternate = l, l.alternate = e) : (e.pendingProps = t, e.type = l.type, e.flags = 0, e.subtreeFlags = 0, e.deletions = null), e.flags = l.flags & 65011712, e.childLanes = l.childLanes, e.lanes = l.lanes, e.child = l.child, e.memoizedProps = l.memoizedProps, e.memoizedState = l.memoizedState, e.updateQueue = l.updateQueue, t = l.dependencies, e.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, e.sibling = l.sibling, e.index = l.index, e.ref = l.ref, e.refCleanup = l.refCleanup, e;
  }
  function fo(l, t) {
    l.flags &= 65011714;
    var e = l.alternate;
    return e === null ? (l.childLanes = 0, l.lanes = t, l.child = null, l.subtreeFlags = 0, l.memoizedProps = null, l.memoizedState = null, l.updateQueue = null, l.dependencies = null, l.stateNode = null) : (l.childLanes = e.childLanes, l.lanes = e.lanes, l.child = e.child, l.subtreeFlags = 0, l.deletions = null, l.memoizedProps = e.memoizedProps, l.memoizedState = e.memoizedState, l.updateQueue = e.updateQueue, l.type = e.type, t = e.dependencies, l.dependencies = t === null ? null : {
      lanes: t.lanes,
      firstContext: t.firstContext
    }), l;
  }
  function fu(l, t, e, a, n, u) {
    var i = 0;
    if (a = l, typeof l == "function") Wi(l) && (i = 1);
    else if (typeof l == "string")
      i = ih(
        l,
        e,
        L.current
      ) ? 26 : l === "html" || l === "head" || l === "body" ? 27 : 5;
    else
      l: switch (l) {
        case Rt:
          return l = dt(31, e, t, n), l.elementType = Rt, l.lanes = u, l;
        case F:
          return Xe(e.children, n, u, t);
        case G:
          i = 8, n |= 24;
          break;
        case I:
          return l = dt(12, e, t, n | 2), l.elementType = I, l.lanes = u, l;
        case yl:
          return l = dt(13, e, t, n), l.elementType = yl, l.lanes = u, l;
        case zl:
          return l = dt(19, e, t, n), l.elementType = zl, l.lanes = u, l;
        default:
          if (typeof l == "object" && l !== null)
            switch (l.$$typeof) {
              case q:
                i = 10;
                break l;
              case Ml:
                i = 9;
                break l;
              case K:
                i = 11;
                break l;
              case P:
                i = 14;
                break l;
              case Ol:
                i = 16, a = null;
                break l;
            }
          i = 29, e = Error(
            f(130, l === null ? "null" : typeof l, "")
          ), a = null;
      }
    return t = dt(i, e, t, n), t.elementType = l, t.type = a, t.lanes = u, t;
  }
  function Xe(l, t, e, a) {
    return l = dt(7, l, a, t), l.lanes = e, l;
  }
  function Fi(l, t, e) {
    return l = dt(6, l, null, t), l.lanes = e, l;
  }
  function so(l) {
    var t = dt(18, null, null, 0);
    return t.stateNode = l, t;
  }
  function Ii(l, t, e) {
    return t = dt(
      4,
      l.children !== null ? l.children : [],
      l.key,
      t
    ), t.lanes = e, t.stateNode = {
      containerInfo: l.containerInfo,
      pendingChildren: null,
      implementation: l.implementation
    }, t;
  }
  var oo = /* @__PURE__ */ new WeakMap();
  function _t(l, t) {
    if (typeof l == "object" && l !== null) {
      var e = oo.get(l);
      return e !== void 0 ? e : (t = {
        value: l,
        source: t,
        stack: ss(t)
      }, oo.set(l, t), t);
    }
    return {
      value: l,
      source: t,
      stack: ss(t)
    };
  }
  var ya = [], ga = 0, su = null, an = 0, Et = [], xt = 0, de = null, qt = 1, Bt = "";
  function kt(l, t) {
    ya[ga++] = an, ya[ga++] = su, su = l, an = t;
  }
  function ro(l, t, e) {
    Et[xt++] = qt, Et[xt++] = Bt, Et[xt++] = de, de = l;
    var a = qt;
    l = Bt;
    var n = 32 - ot(a) - 1;
    a &= ~(1 << n), e += 1;
    var u = 32 - ot(t) + n;
    if (30 < u) {
      var i = n - n % 5;
      u = (a & (1 << i) - 1).toString(32), a >>= i, n -= i, qt = 1 << 32 - ot(t) + n | e << n | a, Bt = u + l;
    } else
      qt = 1 << u | e << n | a, Bt = l;
  }
  function Pi(l) {
    l.return !== null && (kt(l, 1), ro(l, 1, 0));
  }
  function lc(l) {
    for (; l === su; )
      su = ya[--ga], ya[ga] = null, an = ya[--ga], ya[ga] = null;
    for (; l === de; )
      de = Et[--xt], Et[xt] = null, Bt = Et[--xt], Et[xt] = null, qt = Et[--xt], Et[xt] = null;
  }
  function mo(l, t) {
    Et[xt++] = qt, Et[xt++] = Bt, Et[xt++] = de, qt = t.id, Bt = t.overflow, de = l;
  }
  var Zl = null, Tl = null, fl = !1, me = null, Tt = !1, tc = Error(f(519));
  function he(l) {
    var t = Error(
      f(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML",
        ""
      )
    );
    throw nn(_t(t, l)), tc;
  }
  function ho(l) {
    var t = l.stateNode, e = l.type, a = l.memoizedProps;
    switch (t[Vl] = l, t[tt] = a, e) {
      case "dialog":
        ul("cancel", t), ul("close", t);
        break;
      case "iframe":
      case "object":
      case "embed":
        ul("load", t);
        break;
      case "video":
      case "audio":
        for (e = 0; e < Nn.length; e++)
          ul(Nn[e], t);
        break;
      case "source":
        ul("error", t);
        break;
      case "img":
      case "image":
      case "link":
        ul("error", t), ul("load", t);
        break;
      case "details":
        ul("toggle", t);
        break;
      case "input":
        ul("invalid", t), zs(
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
        ul("invalid", t);
        break;
      case "textarea":
        ul("invalid", t), js(t, a.value, a.defaultValue, a.children);
    }
    e = a.children, typeof e != "string" && typeof e != "number" && typeof e != "bigint" || t.textContent === "" + e || a.suppressHydrationWarning === !0 || Od(t.textContent, e) ? (a.popover != null && (ul("beforetoggle", t), ul("toggle", t)), a.onScroll != null && ul("scroll", t), a.onScrollEnd != null && ul("scrollend", t), a.onClick != null && (t.onclick = Zt), t = !0) : t = !1, t || he(l, !0);
  }
  function vo(l) {
    for (Zl = l.return; Zl; )
      switch (Zl.tag) {
        case 5:
        case 31:
        case 13:
          Tt = !1;
          return;
        case 27:
        case 3:
          Tt = !0;
          return;
        default:
          Zl = Zl.return;
      }
  }
  function pa(l) {
    if (l !== Zl) return !1;
    if (!fl) return vo(l), fl = !0, !1;
    var t = l.tag, e;
    if ((e = t !== 3 && t !== 27) && ((e = t === 5) && (e = l.type, e = !(e !== "form" && e !== "button") || Sf(l.type, l.memoizedProps)), e = !e), e && Tl && he(l), vo(l), t === 13) {
      if (l = l.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(f(317));
      Tl = Gd(l);
    } else if (t === 31) {
      if (l = l.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(f(317));
      Tl = Gd(l);
    } else
      t === 27 ? (t = Tl, je(l.type) ? (l = Af, Af = null, Tl = l) : Tl = t) : Tl = Zl ? zt(l.stateNode.nextSibling) : null;
    return !0;
  }
  function Ve() {
    Tl = Zl = null, fl = !1;
  }
  function ec() {
    var l = me;
    return l !== null && (it === null ? it = l : it.push.apply(
      it,
      l
    ), me = null), l;
  }
  function nn(l) {
    me === null ? me = [l] : me.push(l);
  }
  var ac = v(null), Ze = null, $t = null;
  function ve(l, t, e) {
    R(ac, t._currentValue), t._currentValue = e;
  }
  function Wt(l) {
    l._currentValue = ac.current, M(ac);
  }
  function nc(l, t, e) {
    for (; l !== null; ) {
      var a = l.alternate;
      if ((l.childLanes & t) !== t ? (l.childLanes |= t, a !== null && (a.childLanes |= t)) : a !== null && (a.childLanes & t) !== t && (a.childLanes |= t), l === e) break;
      l = l.return;
    }
  }
  function uc(l, t, e, a) {
    var n = l.child;
    for (n !== null && (n.return = l); n !== null; ) {
      var u = n.dependencies;
      if (u !== null) {
        var i = n.child;
        u = u.firstContext;
        l: for (; u !== null; ) {
          var s = u;
          u = n;
          for (var m = 0; m < t.length; m++)
            if (s.context === t[m]) {
              u.lanes |= e, s = u.alternate, s !== null && (s.lanes |= e), nc(
                u.return,
                e,
                l
              ), a || (i = null);
              break l;
            }
          u = s.next;
        }
      } else if (n.tag === 18) {
        if (i = n.return, i === null) throw Error(f(341));
        i.lanes |= e, u = i.alternate, u !== null && (u.lanes |= e), nc(i, e, l), i = null;
      } else i = n.child;
      if (i !== null) i.return = n;
      else
        for (i = n; i !== null; ) {
          if (i === l) {
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
  function ba(l, t, e, a) {
    l = null;
    for (var n = t, u = !1; n !== null; ) {
      if (!u) {
        if ((n.flags & 524288) !== 0) u = !0;
        else if ((n.flags & 262144) !== 0) break;
      }
      if (n.tag === 10) {
        var i = n.alternate;
        if (i === null) throw Error(f(387));
        if (i = i.memoizedProps, i !== null) {
          var s = n.type;
          rt(n.pendingProps.value, i.value) || (l !== null ? l.push(s) : l = [s]);
        }
      } else if (n === ml.current) {
        if (i = n.alternate, i === null) throw Error(f(387));
        i.memoizedState.memoizedState !== n.memoizedState.memoizedState && (l !== null ? l.push(Dn) : l = [Dn]);
      }
      n = n.return;
    }
    l !== null && uc(
      t,
      l,
      e,
      a
    ), t.flags |= 262144;
  }
  function ou(l) {
    for (l = l.firstContext; l !== null; ) {
      if (!rt(
        l.context._currentValue,
        l.memoizedValue
      ))
        return !0;
      l = l.next;
    }
    return !1;
  }
  function Ke(l) {
    Ze = l, $t = null, l = l.dependencies, l !== null && (l.firstContext = null);
  }
  function Kl(l) {
    return yo(Ze, l);
  }
  function ru(l, t) {
    return Ze === null && Ke(l), yo(l, t);
  }
  function yo(l, t) {
    var e = t._currentValue;
    if (t = { context: t, memoizedValue: e, next: null }, $t === null) {
      if (l === null) throw Error(f(308));
      $t = t, l.dependencies = { lanes: 0, firstContext: t }, l.flags |= 524288;
    } else $t = $t.next = t;
    return e;
  }
  var em = typeof AbortController < "u" ? AbortController : function() {
    var l = [], t = this.signal = {
      aborted: !1,
      addEventListener: function(e, a) {
        l.push(a);
      }
    };
    this.abort = function() {
      t.aborted = !0, l.forEach(function(e) {
        return e();
      });
    };
  }, am = c.unstable_scheduleCallback, nm = c.unstable_NormalPriority, Hl = {
    $$typeof: q,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function ic() {
    return {
      controller: new em(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function un(l) {
    l.refCount--, l.refCount === 0 && am(nm, function() {
      l.controller.abort();
    });
  }
  var cn = null, cc = 0, Sa = 0, _a = null;
  function um(l, t) {
    if (cn === null) {
      var e = cn = [];
      cc = 0, Sa = rf(), _a = {
        status: "pending",
        value: void 0,
        then: function(a) {
          e.push(a);
        }
      };
    }
    return cc++, t.then(go, go), t;
  }
  function go() {
    if (--cc === 0 && cn !== null) {
      _a !== null && (_a.status = "fulfilled");
      var l = cn;
      cn = null, Sa = 0, _a = null;
      for (var t = 0; t < l.length; t++) (0, l[t])();
    }
  }
  function im(l, t) {
    var e = [], a = {
      status: "pending",
      value: null,
      reason: null,
      then: function(n) {
        e.push(n);
      }
    };
    return l.then(
      function() {
        a.status = "fulfilled", a.value = t;
        for (var n = 0; n < e.length; n++) (0, e[n])(t);
      },
      function(n) {
        for (a.status = "rejected", a.reason = n, n = 0; n < e.length; n++)
          (0, e[n])(void 0);
      }
    ), a;
  }
  var po = A.S;
  A.S = function(l, t) {
    td = ft(), typeof t == "object" && t !== null && typeof t.then == "function" && um(l, t), po !== null && po(l, t);
  };
  var Je = v(null);
  function fc() {
    var l = Je.current;
    return l !== null ? l : El.pooledCache;
  }
  function du(l, t) {
    t === null ? R(Je, Je.current) : R(Je, t.pool);
  }
  function bo() {
    var l = fc();
    return l === null ? null : { parent: Hl._currentValue, pool: l };
  }
  var Ea = Error(f(460)), sc = Error(f(474)), mu = Error(f(542)), hu = { then: function() {
  } };
  function So(l) {
    return l = l.status, l === "fulfilled" || l === "rejected";
  }
  function _o(l, t, e) {
    switch (e = l[e], e === void 0 ? l.push(t) : e !== t && (t.then(Zt, Zt), t = e), t.status) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw l = t.reason, xo(l), l;
      default:
        if (typeof t.status == "string") t.then(Zt, Zt);
        else {
          if (l = El, l !== null && 100 < l.shellSuspendCounter)
            throw Error(f(482));
          l = t, l.status = "pending", l.then(
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
            throw l = t.reason, xo(l), l;
        }
        throw $e = t, Ea;
    }
  }
  function ke(l) {
    try {
      var t = l._init;
      return t(l._payload);
    } catch (e) {
      throw e !== null && typeof e == "object" && typeof e.then == "function" ? ($e = e, Ea) : e;
    }
  }
  var $e = null;
  function Eo() {
    if ($e === null) throw Error(f(459));
    var l = $e;
    return $e = null, l;
  }
  function xo(l) {
    if (l === Ea || l === mu)
      throw Error(f(483));
  }
  var xa = null, fn = 0;
  function vu(l) {
    var t = fn;
    return fn += 1, xa === null && (xa = []), _o(xa, l, t);
  }
  function sn(l, t) {
    t = t.props.ref, l.ref = t !== void 0 ? t : null;
  }
  function yu(l, t) {
    throw t.$$typeof === J ? Error(f(525)) : (l = Object.prototype.toString.call(t), Error(
      f(
        31,
        l === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : l
      )
    ));
  }
  function To(l) {
    function t(y, h) {
      if (l) {
        var p = y.deletions;
        p === null ? (y.deletions = [h], y.flags |= 16) : p.push(h);
      }
    }
    function e(y, h) {
      if (!l) return null;
      for (; h !== null; )
        t(y, h), h = h.sibling;
      return null;
    }
    function a(y) {
      for (var h = /* @__PURE__ */ new Map(); y !== null; )
        y.key !== null ? h.set(y.key, y) : h.set(y.index, y), y = y.sibling;
      return h;
    }
    function n(y, h) {
      return y = Jt(y, h), y.index = 0, y.sibling = null, y;
    }
    function u(y, h, p) {
      return y.index = p, l ? (p = y.alternate, p !== null ? (p = p.index, p < h ? (y.flags |= 67108866, h) : p) : (y.flags |= 67108866, h)) : (y.flags |= 1048576, h);
    }
    function i(y) {
      return l && y.alternate === null && (y.flags |= 67108866), y;
    }
    function s(y, h, p, z) {
      return h === null || h.tag !== 6 ? (h = Fi(p, y.mode, z), h.return = y, h) : (h = n(h, p), h.return = y, h);
    }
    function m(y, h, p, z) {
      var Q = p.type;
      return Q === F ? T(
        y,
        h,
        p.props.children,
        z,
        p.key
      ) : h !== null && (h.elementType === Q || typeof Q == "object" && Q !== null && Q.$$typeof === Ol && ke(Q) === h.type) ? (h = n(h, p.props), sn(h, p), h.return = y, h) : (h = fu(
        p.type,
        p.key,
        p.props,
        null,
        y.mode,
        z
      ), sn(h, p), h.return = y, h);
    }
    function b(y, h, p, z) {
      return h === null || h.tag !== 4 || h.stateNode.containerInfo !== p.containerInfo || h.stateNode.implementation !== p.implementation ? (h = Ii(p, y.mode, z), h.return = y, h) : (h = n(h, p.children || []), h.return = y, h);
    }
    function T(y, h, p, z, Q) {
      return h === null || h.tag !== 7 ? (h = Xe(
        p,
        y.mode,
        z,
        Q
      ), h.return = y, h) : (h = n(h, p), h.return = y, h);
    }
    function N(y, h, p) {
      if (typeof h == "string" && h !== "" || typeof h == "number" || typeof h == "bigint")
        return h = Fi(
          "" + h,
          y.mode,
          p
        ), h.return = y, h;
      if (typeof h == "object" && h !== null) {
        switch (h.$$typeof) {
          case w:
            return p = fu(
              h.type,
              h.key,
              h.props,
              null,
              y.mode,
              p
            ), sn(p, h), p.return = y, p;
          case el:
            return h = Ii(
              h,
              y.mode,
              p
            ), h.return = y, h;
          case Ol:
            return h = ke(h), N(y, h, p);
        }
        if (jt(h) || lt(h))
          return h = Xe(
            h,
            y.mode,
            p,
            null
          ), h.return = y, h;
        if (typeof h.then == "function")
          return N(y, vu(h), p);
        if (h.$$typeof === q)
          return N(
            y,
            ru(y, h),
            p
          );
        yu(y, h);
      }
      return null;
    }
    function _(y, h, p, z) {
      var Q = h !== null ? h.key : null;
      if (typeof p == "string" && p !== "" || typeof p == "number" || typeof p == "bigint")
        return Q !== null ? null : s(y, h, "" + p, z);
      if (typeof p == "object" && p !== null) {
        switch (p.$$typeof) {
          case w:
            return p.key === Q ? m(y, h, p, z) : null;
          case el:
            return p.key === Q ? b(y, h, p, z) : null;
          case Ol:
            return p = ke(p), _(y, h, p, z);
        }
        if (jt(p) || lt(p))
          return Q !== null ? null : T(y, h, p, z, null);
        if (typeof p.then == "function")
          return _(
            y,
            h,
            vu(p),
            z
          );
        if (p.$$typeof === q)
          return _(
            y,
            h,
            ru(y, p),
            z
          );
        yu(y, p);
      }
      return null;
    }
    function E(y, h, p, z, Q) {
      if (typeof z == "string" && z !== "" || typeof z == "number" || typeof z == "bigint")
        return y = y.get(p) || null, s(h, y, "" + z, Q);
      if (typeof z == "object" && z !== null) {
        switch (z.$$typeof) {
          case w:
            return y = y.get(
              z.key === null ? p : z.key
            ) || null, m(h, y, z, Q);
          case el:
            return y = y.get(
              z.key === null ? p : z.key
            ) || null, b(h, y, z, Q);
          case Ol:
            return z = ke(z), E(
              y,
              h,
              p,
              z,
              Q
            );
        }
        if (jt(z) || lt(z))
          return y = y.get(p) || null, T(h, y, z, Q, null);
        if (typeof z.then == "function")
          return E(
            y,
            h,
            p,
            vu(z),
            Q
          );
        if (z.$$typeof === q)
          return E(
            y,
            h,
            p,
            ru(h, z),
            Q
          );
        yu(h, z);
      }
      return null;
    }
    function B(y, h, p, z) {
      for (var Q = null, ol = null, Y = h, ll = h = 0, cl = null; Y !== null && ll < p.length; ll++) {
        Y.index > ll ? (cl = Y, Y = null) : cl = Y.sibling;
        var rl = _(
          y,
          Y,
          p[ll],
          z
        );
        if (rl === null) {
          Y === null && (Y = cl);
          break;
        }
        l && Y && rl.alternate === null && t(y, Y), h = u(rl, h, ll), ol === null ? Q = rl : ol.sibling = rl, ol = rl, Y = cl;
      }
      if (ll === p.length)
        return e(y, Y), fl && kt(y, ll), Q;
      if (Y === null) {
        for (; ll < p.length; ll++)
          Y = N(y, p[ll], z), Y !== null && (h = u(
            Y,
            h,
            ll
          ), ol === null ? Q = Y : ol.sibling = Y, ol = Y);
        return fl && kt(y, ll), Q;
      }
      for (Y = a(Y); ll < p.length; ll++)
        cl = E(
          Y,
          y,
          ll,
          p[ll],
          z
        ), cl !== null && (l && cl.alternate !== null && Y.delete(
          cl.key === null ? ll : cl.key
        ), h = u(
          cl,
          h,
          ll
        ), ol === null ? Q = cl : ol.sibling = cl, ol = cl);
      return l && Y.forEach(function(Ue) {
        return t(y, Ue);
      }), fl && kt(y, ll), Q;
    }
    function X(y, h, p, z) {
      if (p == null) throw Error(f(151));
      for (var Q = null, ol = null, Y = h, ll = h = 0, cl = null, rl = p.next(); Y !== null && !rl.done; ll++, rl = p.next()) {
        Y.index > ll ? (cl = Y, Y = null) : cl = Y.sibling;
        var Ue = _(y, Y, rl.value, z);
        if (Ue === null) {
          Y === null && (Y = cl);
          break;
        }
        l && Y && Ue.alternate === null && t(y, Y), h = u(Ue, h, ll), ol === null ? Q = Ue : ol.sibling = Ue, ol = Ue, Y = cl;
      }
      if (rl.done)
        return e(y, Y), fl && kt(y, ll), Q;
      if (Y === null) {
        for (; !rl.done; ll++, rl = p.next())
          rl = N(y, rl.value, z), rl !== null && (h = u(rl, h, ll), ol === null ? Q = rl : ol.sibling = rl, ol = rl);
        return fl && kt(y, ll), Q;
      }
      for (Y = a(Y); !rl.done; ll++, rl = p.next())
        rl = E(Y, y, ll, rl.value, z), rl !== null && (l && rl.alternate !== null && Y.delete(rl.key === null ? ll : rl.key), h = u(rl, h, ll), ol === null ? Q = rl : ol.sibling = rl, ol = rl);
      return l && Y.forEach(function(gh) {
        return t(y, gh);
      }), fl && kt(y, ll), Q;
    }
    function Sl(y, h, p, z) {
      if (typeof p == "object" && p !== null && p.type === F && p.key === null && (p = p.props.children), typeof p == "object" && p !== null) {
        switch (p.$$typeof) {
          case w:
            l: {
              for (var Q = p.key; h !== null; ) {
                if (h.key === Q) {
                  if (Q = p.type, Q === F) {
                    if (h.tag === 7) {
                      e(
                        y,
                        h.sibling
                      ), z = n(
                        h,
                        p.props.children
                      ), z.return = y, y = z;
                      break l;
                    }
                  } else if (h.elementType === Q || typeof Q == "object" && Q !== null && Q.$$typeof === Ol && ke(Q) === h.type) {
                    e(
                      y,
                      h.sibling
                    ), z = n(h, p.props), sn(z, p), z.return = y, y = z;
                    break l;
                  }
                  e(y, h);
                  break;
                } else t(y, h);
                h = h.sibling;
              }
              p.type === F ? (z = Xe(
                p.props.children,
                y.mode,
                z,
                p.key
              ), z.return = y, y = z) : (z = fu(
                p.type,
                p.key,
                p.props,
                null,
                y.mode,
                z
              ), sn(z, p), z.return = y, y = z);
            }
            return i(y);
          case el:
            l: {
              for (Q = p.key; h !== null; ) {
                if (h.key === Q)
                  if (h.tag === 4 && h.stateNode.containerInfo === p.containerInfo && h.stateNode.implementation === p.implementation) {
                    e(
                      y,
                      h.sibling
                    ), z = n(h, p.children || []), z.return = y, y = z;
                    break l;
                  } else {
                    e(y, h);
                    break;
                  }
                else t(y, h);
                h = h.sibling;
              }
              z = Ii(p, y.mode, z), z.return = y, y = z;
            }
            return i(y);
          case Ol:
            return p = ke(p), Sl(
              y,
              h,
              p,
              z
            );
        }
        if (jt(p))
          return B(
            y,
            h,
            p,
            z
          );
        if (lt(p)) {
          if (Q = lt(p), typeof Q != "function") throw Error(f(150));
          return p = Q.call(p), X(
            y,
            h,
            p,
            z
          );
        }
        if (typeof p.then == "function")
          return Sl(
            y,
            h,
            vu(p),
            z
          );
        if (p.$$typeof === q)
          return Sl(
            y,
            h,
            ru(y, p),
            z
          );
        yu(y, p);
      }
      return typeof p == "string" && p !== "" || typeof p == "number" || typeof p == "bigint" ? (p = "" + p, h !== null && h.tag === 6 ? (e(y, h.sibling), z = n(h, p), z.return = y, y = z) : (e(y, h), z = Fi(p, y.mode, z), z.return = y, y = z), i(y)) : e(y, h);
    }
    return function(y, h, p, z) {
      try {
        fn = 0;
        var Q = Sl(
          y,
          h,
          p,
          z
        );
        return xa = null, Q;
      } catch (Y) {
        if (Y === Ea || Y === mu) throw Y;
        var ol = dt(29, Y, null, y.mode);
        return ol.lanes = z, ol.return = y, ol;
      } finally {
      }
    };
  }
  var We = To(!0), Ao = To(!1), ye = !1;
  function oc(l) {
    l.updateQueue = {
      baseState: l.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function rc(l, t) {
    l = l.updateQueue, t.updateQueue === l && (t.updateQueue = {
      baseState: l.baseState,
      firstBaseUpdate: l.firstBaseUpdate,
      lastBaseUpdate: l.lastBaseUpdate,
      shared: l.shared,
      callbacks: null
    });
  }
  function ge(l) {
    return { lane: l, tag: 0, payload: null, callback: null, next: null };
  }
  function pe(l, t, e) {
    var a = l.updateQueue;
    if (a === null) return null;
    if (a = a.shared, (dl & 2) !== 0) {
      var n = a.pending;
      return n === null ? t.next = t : (t.next = n.next, n.next = t), a.pending = t, t = cu(l), co(l, null, e), t;
    }
    return iu(l, a, t, e), cu(l);
  }
  function on(l, t, e) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (e & 4194048) !== 0)) {
      var a = t.lanes;
      a &= l.pendingLanes, e |= a, t.lanes = e, vs(l, e);
    }
  }
  function dc(l, t) {
    var e = l.updateQueue, a = l.alternate;
    if (a !== null && (a = a.updateQueue, e === a)) {
      var n = null, u = null;
      if (e = e.firstBaseUpdate, e !== null) {
        do {
          var i = {
            lane: e.lane,
            tag: e.tag,
            payload: e.payload,
            callback: null,
            next: null
          };
          u === null ? n = u = i : u = u.next = i, e = e.next;
        } while (e !== null);
        u === null ? n = u = t : u = u.next = t;
      } else n = u = t;
      e = {
        baseState: a.baseState,
        firstBaseUpdate: n,
        lastBaseUpdate: u,
        shared: a.shared,
        callbacks: a.callbacks
      }, l.updateQueue = e;
      return;
    }
    l = e.lastBaseUpdate, l === null ? e.firstBaseUpdate = t : l.next = t, e.lastBaseUpdate = t;
  }
  var mc = !1;
  function rn() {
    if (mc) {
      var l = _a;
      if (l !== null) throw l;
    }
  }
  function dn(l, t, e, a) {
    mc = !1;
    var n = l.updateQueue;
    ye = !1;
    var u = n.firstBaseUpdate, i = n.lastBaseUpdate, s = n.shared.pending;
    if (s !== null) {
      n.shared.pending = null;
      var m = s, b = m.next;
      m.next = null, i === null ? u = b : i.next = b, i = m;
      var T = l.alternate;
      T !== null && (T = T.updateQueue, s = T.lastBaseUpdate, s !== i && (s === null ? T.firstBaseUpdate = b : s.next = b, T.lastBaseUpdate = m));
    }
    if (u !== null) {
      var N = n.baseState;
      i = 0, T = b = m = null, s = u;
      do {
        var _ = s.lane & -536870913, E = _ !== s.lane;
        if (E ? (il & _) === _ : (a & _) === _) {
          _ !== 0 && _ === Sa && (mc = !0), T !== null && (T = T.next = {
            lane: 0,
            tag: s.tag,
            payload: s.payload,
            callback: null,
            next: null
          });
          l: {
            var B = l, X = s;
            _ = t;
            var Sl = e;
            switch (X.tag) {
              case 1:
                if (B = X.payload, typeof B == "function") {
                  N = B.call(Sl, N, _);
                  break l;
                }
                N = B;
                break l;
              case 3:
                B.flags = B.flags & -65537 | 128;
              case 0:
                if (B = X.payload, _ = typeof B == "function" ? B.call(Sl, N, _) : B, _ == null) break l;
                N = H({}, N, _);
                break l;
              case 2:
                ye = !0;
            }
          }
          _ = s.callback, _ !== null && (l.flags |= 64, E && (l.flags |= 8192), E = n.callbacks, E === null ? n.callbacks = [_] : E.push(_));
        } else
          E = {
            lane: _,
            tag: s.tag,
            payload: s.payload,
            callback: s.callback,
            next: null
          }, T === null ? (b = T = E, m = N) : T = T.next = E, i |= _;
        if (s = s.next, s === null) {
          if (s = n.shared.pending, s === null)
            break;
          E = s, s = E.next, E.next = null, n.lastBaseUpdate = E, n.shared.pending = null;
        }
      } while (!0);
      T === null && (m = N), n.baseState = m, n.firstBaseUpdate = b, n.lastBaseUpdate = T, u === null && (n.shared.lanes = 0), xe |= i, l.lanes = i, l.memoizedState = N;
    }
  }
  function zo(l, t) {
    if (typeof l != "function")
      throw Error(f(191, l));
    l.call(t);
  }
  function No(l, t) {
    var e = l.callbacks;
    if (e !== null)
      for (l.callbacks = null, l = 0; l < e.length; l++)
        zo(e[l], t);
  }
  var Ta = v(null), gu = v(0);
  function jo(l, t) {
    l = ue, R(gu, l), R(Ta, t), ue = l | t.baseLanes;
  }
  function hc() {
    R(gu, ue), R(Ta, Ta.current);
  }
  function vc() {
    ue = gu.current, M(Ta), M(gu);
  }
  var mt = v(null), At = null;
  function be(l) {
    var t = l.alternate;
    R(Ul, Ul.current & 1), R(mt, l), At === null && (t === null || Ta.current !== null || t.memoizedState !== null) && (At = l);
  }
  function yc(l) {
    R(Ul, Ul.current), R(mt, l), At === null && (At = l);
  }
  function Co(l) {
    l.tag === 22 ? (R(Ul, Ul.current), R(mt, l), At === null && (At = l)) : Se();
  }
  function Se() {
    R(Ul, Ul.current), R(mt, mt.current);
  }
  function ht(l) {
    M(mt), At === l && (At = null), M(Ul);
  }
  var Ul = v(0);
  function pu(l) {
    for (var t = l; t !== null; ) {
      if (t.tag === 13) {
        var e = t.memoizedState;
        if (e !== null && (e = e.dehydrated, e === null || xf(e) || Tf(e)))
          return t;
      } else if (t.tag === 19 && (t.memoizedProps.revealOrder === "forwards" || t.memoizedProps.revealOrder === "backwards" || t.memoizedProps.revealOrder === "unstable_legacy-backwards" || t.memoizedProps.revealOrder === "together")) {
        if ((t.flags & 128) !== 0) return t;
      } else if (t.child !== null) {
        t.child.return = t, t = t.child;
        continue;
      }
      if (t === l) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === l) return null;
        t = t.return;
      }
      t.sibling.return = t.return, t = t.sibling;
    }
    return null;
  }
  var Ft = 0, W = null, pl = null, ql = null, bu = !1, Aa = !1, Fe = !1, Su = 0, mn = 0, za = null, cm = 0;
  function jl() {
    throw Error(f(321));
  }
  function gc(l, t) {
    if (t === null) return !1;
    for (var e = 0; e < t.length && e < l.length; e++)
      if (!rt(l[e], t[e])) return !1;
    return !0;
  }
  function pc(l, t, e, a, n, u) {
    return Ft = u, W = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, A.H = l === null || l.memoizedState === null ? dr : Uc, Fe = !1, u = e(a, n), Fe = !1, Aa && (u = Oo(
      t,
      e,
      a,
      n
    )), Mo(l), u;
  }
  function Mo(l) {
    A.H = yn;
    var t = pl !== null && pl.next !== null;
    if (Ft = 0, ql = pl = W = null, bu = !1, mn = 0, za = null, t) throw Error(f(300));
    l === null || Bl || (l = l.dependencies, l !== null && ou(l) && (Bl = !0));
  }
  function Oo(l, t, e, a) {
    W = l;
    var n = 0;
    do {
      if (Aa && (za = null), mn = 0, Aa = !1, 25 <= n) throw Error(f(301));
      if (n += 1, ql = pl = null, l.updateQueue != null) {
        var u = l.updateQueue;
        u.lastEffect = null, u.events = null, u.stores = null, u.memoCache != null && (u.memoCache.index = 0);
      }
      A.H = mr, u = t(e, a);
    } while (Aa);
    return u;
  }
  function fm() {
    var l = A.H, t = l.useState()[0];
    return t = typeof t.then == "function" ? hn(t) : t, l = l.useState()[0], (pl !== null ? pl.memoizedState : null) !== l && (W.flags |= 1024), t;
  }
  function bc() {
    var l = Su !== 0;
    return Su = 0, l;
  }
  function Sc(l, t, e) {
    t.updateQueue = l.updateQueue, t.flags &= -2053, l.lanes &= ~e;
  }
  function _c(l) {
    if (bu) {
      for (l = l.memoizedState; l !== null; ) {
        var t = l.queue;
        t !== null && (t.pending = null), l = l.next;
      }
      bu = !1;
    }
    Ft = 0, ql = pl = W = null, Aa = !1, mn = Su = 0, za = null;
  }
  function Il() {
    var l = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return ql === null ? W.memoizedState = ql = l : ql = ql.next = l, ql;
  }
  function Rl() {
    if (pl === null) {
      var l = W.alternate;
      l = l !== null ? l.memoizedState : null;
    } else l = pl.next;
    var t = ql === null ? W.memoizedState : ql.next;
    if (t !== null)
      ql = t, pl = l;
    else {
      if (l === null)
        throw W.alternate === null ? Error(f(467)) : Error(f(310));
      pl = l, l = {
        memoizedState: pl.memoizedState,
        baseState: pl.baseState,
        baseQueue: pl.baseQueue,
        queue: pl.queue,
        next: null
      }, ql === null ? W.memoizedState = ql = l : ql = ql.next = l;
    }
    return ql;
  }
  function _u() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function hn(l) {
    var t = mn;
    return mn += 1, za === null && (za = []), l = _o(za, l, t), t = W, (ql === null ? t.memoizedState : ql.next) === null && (t = t.alternate, A.H = t === null || t.memoizedState === null ? dr : Uc), l;
  }
  function Eu(l) {
    if (l !== null && typeof l == "object") {
      if (typeof l.then == "function") return hn(l);
      if (l.$$typeof === q) return Kl(l);
    }
    throw Error(f(438, String(l)));
  }
  function Ec(l) {
    var t = null, e = W.updateQueue;
    if (e !== null && (t = e.memoCache), t == null) {
      var a = W.alternate;
      a !== null && (a = a.updateQueue, a !== null && (a = a.memoCache, a != null && (t = {
        data: a.data.map(function(n) {
          return n.slice();
        }),
        index: 0
      })));
    }
    if (t == null && (t = { data: [], index: 0 }), e === null && (e = _u(), W.updateQueue = e), e.memoCache = t, e = t.data[t.index], e === void 0)
      for (e = t.data[t.index] = Array(l), a = 0; a < l; a++)
        e[a] = ta;
    return t.index++, e;
  }
  function It(l, t) {
    return typeof t == "function" ? t(l) : t;
  }
  function xu(l) {
    var t = Rl();
    return xc(t, pl, l);
  }
  function xc(l, t, e) {
    var a = l.queue;
    if (a === null) throw Error(f(311));
    a.lastRenderedReducer = e;
    var n = l.baseQueue, u = a.pending;
    if (u !== null) {
      if (n !== null) {
        var i = n.next;
        n.next = u.next, u.next = i;
      }
      t.baseQueue = n = u, a.pending = null;
    }
    if (u = l.baseState, n === null) l.memoizedState = u;
    else {
      t = n.next;
      var s = i = null, m = null, b = t, T = !1;
      do {
        var N = b.lane & -536870913;
        if (N !== b.lane ? (il & N) === N : (Ft & N) === N) {
          var _ = b.revertLane;
          if (_ === 0)
            m !== null && (m = m.next = {
              lane: 0,
              revertLane: 0,
              gesture: null,
              action: b.action,
              hasEagerState: b.hasEagerState,
              eagerState: b.eagerState,
              next: null
            }), N === Sa && (T = !0);
          else if ((Ft & _) === _) {
            b = b.next, _ === Sa && (T = !0);
            continue;
          } else
            N = {
              lane: 0,
              revertLane: b.revertLane,
              gesture: null,
              action: b.action,
              hasEagerState: b.hasEagerState,
              eagerState: b.eagerState,
              next: null
            }, m === null ? (s = m = N, i = u) : m = m.next = N, W.lanes |= _, xe |= _;
          N = b.action, Fe && e(u, N), u = b.hasEagerState ? b.eagerState : e(u, N);
        } else
          _ = {
            lane: N,
            revertLane: b.revertLane,
            gesture: b.gesture,
            action: b.action,
            hasEagerState: b.hasEagerState,
            eagerState: b.eagerState,
            next: null
          }, m === null ? (s = m = _, i = u) : m = m.next = _, W.lanes |= N, xe |= N;
        b = b.next;
      } while (b !== null && b !== t);
      if (m === null ? i = u : m.next = s, !rt(u, l.memoizedState) && (Bl = !0, T && (e = _a, e !== null)))
        throw e;
      l.memoizedState = u, l.baseState = i, l.baseQueue = m, a.lastRenderedState = u;
    }
    return n === null && (a.lanes = 0), [l.memoizedState, a.dispatch];
  }
  function Tc(l) {
    var t = Rl(), e = t.queue;
    if (e === null) throw Error(f(311));
    e.lastRenderedReducer = l;
    var a = e.dispatch, n = e.pending, u = t.memoizedState;
    if (n !== null) {
      e.pending = null;
      var i = n = n.next;
      do
        u = l(u, i.action), i = i.next;
      while (i !== n);
      rt(u, t.memoizedState) || (Bl = !0), t.memoizedState = u, t.baseQueue === null && (t.baseState = u), e.lastRenderedState = u;
    }
    return [u, a];
  }
  function Do(l, t, e) {
    var a = W, n = Rl(), u = fl;
    if (u) {
      if (e === void 0) throw Error(f(407));
      e = e();
    } else e = t();
    var i = !rt(
      (pl || n).memoizedState,
      e
    );
    if (i && (n.memoizedState = e, Bl = !0), n = n.queue, Nc(Ho.bind(null, a, n, l), [
      l
    ]), n.getSnapshot !== t || i || ql !== null && ql.memoizedState.tag & 1) {
      if (a.flags |= 2048, Na(
        9,
        { destroy: void 0 },
        Ro.bind(
          null,
          a,
          n,
          e,
          t
        ),
        null
      ), El === null) throw Error(f(349));
      u || (Ft & 127) !== 0 || Uo(a, t, e);
    }
    return e;
  }
  function Uo(l, t, e) {
    l.flags |= 16384, l = { getSnapshot: t, value: e }, t = W.updateQueue, t === null ? (t = _u(), W.updateQueue = t, t.stores = [l]) : (e = t.stores, e === null ? t.stores = [l] : e.push(l));
  }
  function Ro(l, t, e, a) {
    t.value = e, t.getSnapshot = a, qo(t) && Bo(l);
  }
  function Ho(l, t, e) {
    return e(function() {
      qo(t) && Bo(l);
    });
  }
  function qo(l) {
    var t = l.getSnapshot;
    l = l.value;
    try {
      var e = t();
      return !rt(l, e);
    } catch {
      return !0;
    }
  }
  function Bo(l) {
    var t = Qe(l, 2);
    t !== null && ct(t, l, 2);
  }
  function Ac(l) {
    var t = Il();
    if (typeof l == "function") {
      var e = l;
      if (l = e(), Fe) {
        se(!0);
        try {
          e();
        } finally {
          se(!1);
        }
      }
    }
    return t.memoizedState = t.baseState = l, t.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: It,
      lastRenderedState: l
    }, t;
  }
  function Lo(l, t, e, a) {
    return l.baseState = e, xc(
      l,
      pl,
      typeof a == "function" ? a : It
    );
  }
  function sm(l, t, e, a, n) {
    if (zu(l)) throw Error(f(485));
    if (l = t.action, l !== null) {
      var u = {
        payload: n,
        action: l,
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
      A.T !== null ? e(!0) : u.isTransition = !1, a(u), e = t.pending, e === null ? (u.next = t.pending = u, Yo(t, u)) : (u.next = e.next, t.pending = e.next = u);
    }
  }
  function Yo(l, t) {
    var e = t.action, a = t.payload, n = l.state;
    if (t.isTransition) {
      var u = A.T, i = {};
      A.T = i;
      try {
        var s = e(n, a), m = A.S;
        m !== null && m(i, s), Go(l, t, s);
      } catch (b) {
        zc(l, t, b);
      } finally {
        u !== null && i.types !== null && (u.types = i.types), A.T = u;
      }
    } else
      try {
        u = e(n, a), Go(l, t, u);
      } catch (b) {
        zc(l, t, b);
      }
  }
  function Go(l, t, e) {
    e !== null && typeof e == "object" && typeof e.then == "function" ? e.then(
      function(a) {
        wo(l, t, a);
      },
      function(a) {
        return zc(l, t, a);
      }
    ) : wo(l, t, e);
  }
  function wo(l, t, e) {
    t.status = "fulfilled", t.value = e, Qo(t), l.state = e, t = l.pending, t !== null && (e = t.next, e === t ? l.pending = null : (e = e.next, t.next = e, Yo(l, e)));
  }
  function zc(l, t, e) {
    var a = l.pending;
    if (l.pending = null, a !== null) {
      a = a.next;
      do
        t.status = "rejected", t.reason = e, Qo(t), t = t.next;
      while (t !== a);
    }
    l.action = null;
  }
  function Qo(l) {
    l = l.listeners;
    for (var t = 0; t < l.length; t++) (0, l[t])();
  }
  function Xo(l, t) {
    return t;
  }
  function Vo(l, t) {
    if (fl) {
      var e = El.formState;
      if (e !== null) {
        l: {
          var a = W;
          if (fl) {
            if (Tl) {
              t: {
                for (var n = Tl, u = Tt; n.nodeType !== 8; ) {
                  if (!u) {
                    n = null;
                    break t;
                  }
                  if (n = zt(
                    n.nextSibling
                  ), n === null) {
                    n = null;
                    break t;
                  }
                }
                u = n.data, n = u === "F!" || u === "F" ? n : null;
              }
              if (n) {
                Tl = zt(
                  n.nextSibling
                ), a = n.data === "F!";
                break l;
              }
            }
            he(a);
          }
          a = !1;
        }
        a && (t = e[0]);
      }
    }
    return e = Il(), e.memoizedState = e.baseState = t, a = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Xo,
      lastRenderedState: t
    }, e.queue = a, e = sr.bind(
      null,
      W,
      a
    ), a.dispatch = e, a = Ac(!1), u = Dc.bind(
      null,
      W,
      !1,
      a.queue
    ), a = Il(), n = {
      state: t,
      dispatch: null,
      action: l,
      pending: null
    }, a.queue = n, e = sm.bind(
      null,
      W,
      n,
      u,
      e
    ), n.dispatch = e, a.memoizedState = l, [t, e, !1];
  }
  function Zo(l) {
    var t = Rl();
    return Ko(t, pl, l);
  }
  function Ko(l, t, e) {
    if (t = xc(
      l,
      t,
      Xo
    )[0], l = xu(It)[0], typeof t == "object" && t !== null && typeof t.then == "function")
      try {
        var a = hn(t);
      } catch (i) {
        throw i === Ea ? mu : i;
      }
    else a = t;
    t = Rl();
    var n = t.queue, u = n.dispatch;
    return e !== t.memoizedState && (W.flags |= 2048, Na(
      9,
      { destroy: void 0 },
      om.bind(null, n, e),
      null
    )), [a, u, l];
  }
  function om(l, t) {
    l.action = t;
  }
  function Jo(l) {
    var t = Rl(), e = pl;
    if (e !== null)
      return Ko(t, e, l);
    Rl(), t = t.memoizedState, e = Rl();
    var a = e.queue.dispatch;
    return e.memoizedState = l, [t, a, !1];
  }
  function Na(l, t, e, a) {
    return l = { tag: l, create: e, deps: a, inst: t, next: null }, t = W.updateQueue, t === null && (t = _u(), W.updateQueue = t), e = t.lastEffect, e === null ? t.lastEffect = l.next = l : (a = e.next, e.next = l, l.next = a, t.lastEffect = l), l;
  }
  function ko() {
    return Rl().memoizedState;
  }
  function Tu(l, t, e, a) {
    var n = Il();
    W.flags |= l, n.memoizedState = Na(
      1 | t,
      { destroy: void 0 },
      e,
      a === void 0 ? null : a
    );
  }
  function Au(l, t, e, a) {
    var n = Rl();
    a = a === void 0 ? null : a;
    var u = n.memoizedState.inst;
    pl !== null && a !== null && gc(a, pl.memoizedState.deps) ? n.memoizedState = Na(t, u, e, a) : (W.flags |= l, n.memoizedState = Na(
      1 | t,
      u,
      e,
      a
    ));
  }
  function $o(l, t) {
    Tu(8390656, 8, l, t);
  }
  function Nc(l, t) {
    Au(2048, 8, l, t);
  }
  function rm(l) {
    W.flags |= 4;
    var t = W.updateQueue;
    if (t === null)
      t = _u(), W.updateQueue = t, t.events = [l];
    else {
      var e = t.events;
      e === null ? t.events = [l] : e.push(l);
    }
  }
  function Wo(l) {
    var t = Rl().memoizedState;
    return rm({ ref: t, nextImpl: l }), function() {
      if ((dl & 2) !== 0) throw Error(f(440));
      return t.impl.apply(void 0, arguments);
    };
  }
  function Fo(l, t) {
    return Au(4, 2, l, t);
  }
  function Io(l, t) {
    return Au(4, 4, l, t);
  }
  function Po(l, t) {
    if (typeof t == "function") {
      l = l();
      var e = t(l);
      return function() {
        typeof e == "function" ? e() : t(null);
      };
    }
    if (t != null)
      return l = l(), t.current = l, function() {
        t.current = null;
      };
  }
  function lr(l, t, e) {
    e = e != null ? e.concat([l]) : null, Au(4, 4, Po.bind(null, t, l), e);
  }
  function jc() {
  }
  function tr(l, t) {
    var e = Rl();
    t = t === void 0 ? null : t;
    var a = e.memoizedState;
    return t !== null && gc(t, a[1]) ? a[0] : (e.memoizedState = [l, t], l);
  }
  function er(l, t) {
    var e = Rl();
    t = t === void 0 ? null : t;
    var a = e.memoizedState;
    if (t !== null && gc(t, a[1]))
      return a[0];
    if (a = l(), Fe) {
      se(!0);
      try {
        l();
      } finally {
        se(!1);
      }
    }
    return e.memoizedState = [a, t], a;
  }
  function Cc(l, t, e) {
    return e === void 0 || (Ft & 1073741824) !== 0 && (il & 261930) === 0 ? l.memoizedState = t : (l.memoizedState = e, l = ad(), W.lanes |= l, xe |= l, e);
  }
  function ar(l, t, e, a) {
    return rt(e, t) ? e : Ta.current !== null ? (l = Cc(l, e, a), rt(l, t) || (Bl = !0), l) : (Ft & 42) === 0 || (Ft & 1073741824) !== 0 && (il & 261930) === 0 ? (Bl = !0, l.memoizedState = e) : (l = ad(), W.lanes |= l, xe |= l, t);
  }
  function nr(l, t, e, a, n) {
    var u = U.p;
    U.p = u !== 0 && 8 > u ? u : 8;
    var i = A.T, s = {};
    A.T = s, Dc(l, !1, t, e);
    try {
      var m = n(), b = A.S;
      if (b !== null && b(s, m), m !== null && typeof m == "object" && typeof m.then == "function") {
        var T = im(
          m,
          a
        );
        vn(
          l,
          t,
          T,
          gt(l)
        );
      } else
        vn(
          l,
          t,
          a,
          gt(l)
        );
    } catch (N) {
      vn(
        l,
        t,
        { then: function() {
        }, status: "rejected", reason: N },
        gt()
      );
    } finally {
      U.p = u, i !== null && s.types !== null && (i.types = s.types), A.T = i;
    }
  }
  function dm() {
  }
  function Mc(l, t, e, a) {
    if (l.tag !== 5) throw Error(f(476));
    var n = ur(l).queue;
    nr(
      l,
      n,
      t,
      Z,
      e === null ? dm : function() {
        return ir(l), e(a);
      }
    );
  }
  function ur(l) {
    var t = l.memoizedState;
    if (t !== null) return t;
    t = {
      memoizedState: Z,
      baseState: Z,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: It,
        lastRenderedState: Z
      },
      next: null
    };
    var e = {};
    return t.next = {
      memoizedState: e,
      baseState: e,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: It,
        lastRenderedState: e
      },
      next: null
    }, l.memoizedState = t, l = l.alternate, l !== null && (l.memoizedState = t), t;
  }
  function ir(l) {
    var t = ur(l);
    t.next === null && (t = l.alternate.memoizedState), vn(
      l,
      t.next.queue,
      {},
      gt()
    );
  }
  function Oc() {
    return Kl(Dn);
  }
  function cr() {
    return Rl().memoizedState;
  }
  function fr() {
    return Rl().memoizedState;
  }
  function mm(l) {
    for (var t = l.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var e = gt();
          l = ge(e);
          var a = pe(t, l, e);
          a !== null && (ct(a, t, e), on(a, t, e)), t = { cache: ic() }, l.payload = t;
          return;
      }
      t = t.return;
    }
  }
  function hm(l, t, e) {
    var a = gt();
    e = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: e,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, zu(l) ? or(t, e) : (e = $i(l, t, e, a), e !== null && (ct(e, l, a), rr(e, t, a)));
  }
  function sr(l, t, e) {
    var a = gt();
    vn(l, t, e, a);
  }
  function vn(l, t, e, a) {
    var n = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: e,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (zu(l)) or(t, n);
    else {
      var u = l.alternate;
      if (l.lanes === 0 && (u === null || u.lanes === 0) && (u = t.lastRenderedReducer, u !== null))
        try {
          var i = t.lastRenderedState, s = u(i, e);
          if (n.hasEagerState = !0, n.eagerState = s, rt(s, i))
            return iu(l, t, n, 0), El === null && uu(), !1;
        } catch {
        } finally {
        }
      if (e = $i(l, t, n, a), e !== null)
        return ct(e, l, a), rr(e, t, a), !0;
    }
    return !1;
  }
  function Dc(l, t, e, a) {
    if (a = {
      lane: 2,
      revertLane: rf(),
      gesture: null,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, zu(l)) {
      if (t) throw Error(f(479));
    } else
      t = $i(
        l,
        e,
        a,
        2
      ), t !== null && ct(t, l, 2);
  }
  function zu(l) {
    var t = l.alternate;
    return l === W || t !== null && t === W;
  }
  function or(l, t) {
    Aa = bu = !0;
    var e = l.pending;
    e === null ? t.next = t : (t.next = e.next, e.next = t), l.pending = t;
  }
  function rr(l, t, e) {
    if ((e & 4194048) !== 0) {
      var a = t.lanes;
      a &= l.pendingLanes, e |= a, t.lanes = e, vs(l, e);
    }
  }
  var yn = {
    readContext: Kl,
    use: Eu,
    useCallback: jl,
    useContext: jl,
    useEffect: jl,
    useImperativeHandle: jl,
    useLayoutEffect: jl,
    useInsertionEffect: jl,
    useMemo: jl,
    useReducer: jl,
    useRef: jl,
    useState: jl,
    useDebugValue: jl,
    useDeferredValue: jl,
    useTransition: jl,
    useSyncExternalStore: jl,
    useId: jl,
    useHostTransitionStatus: jl,
    useFormState: jl,
    useActionState: jl,
    useOptimistic: jl,
    useMemoCache: jl,
    useCacheRefresh: jl
  };
  yn.useEffectEvent = jl;
  var dr = {
    readContext: Kl,
    use: Eu,
    useCallback: function(l, t) {
      return Il().memoizedState = [
        l,
        t === void 0 ? null : t
      ], l;
    },
    useContext: Kl,
    useEffect: $o,
    useImperativeHandle: function(l, t, e) {
      e = e != null ? e.concat([l]) : null, Tu(
        4194308,
        4,
        Po.bind(null, t, l),
        e
      );
    },
    useLayoutEffect: function(l, t) {
      return Tu(4194308, 4, l, t);
    },
    useInsertionEffect: function(l, t) {
      Tu(4, 2, l, t);
    },
    useMemo: function(l, t) {
      var e = Il();
      t = t === void 0 ? null : t;
      var a = l();
      if (Fe) {
        se(!0);
        try {
          l();
        } finally {
          se(!1);
        }
      }
      return e.memoizedState = [a, t], a;
    },
    useReducer: function(l, t, e) {
      var a = Il();
      if (e !== void 0) {
        var n = e(t);
        if (Fe) {
          se(!0);
          try {
            e(t);
          } finally {
            se(!1);
          }
        }
      } else n = t;
      return a.memoizedState = a.baseState = n, l = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: l,
        lastRenderedState: n
      }, a.queue = l, l = l.dispatch = hm.bind(
        null,
        W,
        l
      ), [a.memoizedState, l];
    },
    useRef: function(l) {
      var t = Il();
      return l = { current: l }, t.memoizedState = l;
    },
    useState: function(l) {
      l = Ac(l);
      var t = l.queue, e = sr.bind(null, W, t);
      return t.dispatch = e, [l.memoizedState, e];
    },
    useDebugValue: jc,
    useDeferredValue: function(l, t) {
      var e = Il();
      return Cc(e, l, t);
    },
    useTransition: function() {
      var l = Ac(!1);
      return l = nr.bind(
        null,
        W,
        l.queue,
        !0,
        !1
      ), Il().memoizedState = l, [!1, l];
    },
    useSyncExternalStore: function(l, t, e) {
      var a = W, n = Il();
      if (fl) {
        if (e === void 0)
          throw Error(f(407));
        e = e();
      } else {
        if (e = t(), El === null)
          throw Error(f(349));
        (il & 127) !== 0 || Uo(a, t, e);
      }
      n.memoizedState = e;
      var u = { value: e, getSnapshot: t };
      return n.queue = u, $o(Ho.bind(null, a, u, l), [
        l
      ]), a.flags |= 2048, Na(
        9,
        { destroy: void 0 },
        Ro.bind(
          null,
          a,
          u,
          e,
          t
        ),
        null
      ), e;
    },
    useId: function() {
      var l = Il(), t = El.identifierPrefix;
      if (fl) {
        var e = Bt, a = qt;
        e = (a & ~(1 << 32 - ot(a) - 1)).toString(32) + e, t = "_" + t + "R_" + e, e = Su++, 0 < e && (t += "H" + e.toString(32)), t += "_";
      } else
        e = cm++, t = "_" + t + "r_" + e.toString(32) + "_";
      return l.memoizedState = t;
    },
    useHostTransitionStatus: Oc,
    useFormState: Vo,
    useActionState: Vo,
    useOptimistic: function(l) {
      var t = Il();
      t.memoizedState = t.baseState = l;
      var e = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return t.queue = e, t = Dc.bind(
        null,
        W,
        !0,
        e
      ), e.dispatch = t, [l, t];
    },
    useMemoCache: Ec,
    useCacheRefresh: function() {
      return Il().memoizedState = mm.bind(
        null,
        W
      );
    },
    useEffectEvent: function(l) {
      var t = Il(), e = { impl: l };
      return t.memoizedState = e, function() {
        if ((dl & 2) !== 0)
          throw Error(f(440));
        return e.impl.apply(void 0, arguments);
      };
    }
  }, Uc = {
    readContext: Kl,
    use: Eu,
    useCallback: tr,
    useContext: Kl,
    useEffect: Nc,
    useImperativeHandle: lr,
    useInsertionEffect: Fo,
    useLayoutEffect: Io,
    useMemo: er,
    useReducer: xu,
    useRef: ko,
    useState: function() {
      return xu(It);
    },
    useDebugValue: jc,
    useDeferredValue: function(l, t) {
      var e = Rl();
      return ar(
        e,
        pl.memoizedState,
        l,
        t
      );
    },
    useTransition: function() {
      var l = xu(It)[0], t = Rl().memoizedState;
      return [
        typeof l == "boolean" ? l : hn(l),
        t
      ];
    },
    useSyncExternalStore: Do,
    useId: cr,
    useHostTransitionStatus: Oc,
    useFormState: Zo,
    useActionState: Zo,
    useOptimistic: function(l, t) {
      var e = Rl();
      return Lo(e, pl, l, t);
    },
    useMemoCache: Ec,
    useCacheRefresh: fr
  };
  Uc.useEffectEvent = Wo;
  var mr = {
    readContext: Kl,
    use: Eu,
    useCallback: tr,
    useContext: Kl,
    useEffect: Nc,
    useImperativeHandle: lr,
    useInsertionEffect: Fo,
    useLayoutEffect: Io,
    useMemo: er,
    useReducer: Tc,
    useRef: ko,
    useState: function() {
      return Tc(It);
    },
    useDebugValue: jc,
    useDeferredValue: function(l, t) {
      var e = Rl();
      return pl === null ? Cc(e, l, t) : ar(
        e,
        pl.memoizedState,
        l,
        t
      );
    },
    useTransition: function() {
      var l = Tc(It)[0], t = Rl().memoizedState;
      return [
        typeof l == "boolean" ? l : hn(l),
        t
      ];
    },
    useSyncExternalStore: Do,
    useId: cr,
    useHostTransitionStatus: Oc,
    useFormState: Jo,
    useActionState: Jo,
    useOptimistic: function(l, t) {
      var e = Rl();
      return pl !== null ? Lo(e, pl, l, t) : (e.baseState = l, [l, e.queue.dispatch]);
    },
    useMemoCache: Ec,
    useCacheRefresh: fr
  };
  mr.useEffectEvent = Wo;
  function Rc(l, t, e, a) {
    t = l.memoizedState, e = e(a, t), e = e == null ? t : H({}, t, e), l.memoizedState = e, l.lanes === 0 && (l.updateQueue.baseState = e);
  }
  var Hc = {
    enqueueSetState: function(l, t, e) {
      l = l._reactInternals;
      var a = gt(), n = ge(a);
      n.payload = t, e != null && (n.callback = e), t = pe(l, n, a), t !== null && (ct(t, l, a), on(t, l, a));
    },
    enqueueReplaceState: function(l, t, e) {
      l = l._reactInternals;
      var a = gt(), n = ge(a);
      n.tag = 1, n.payload = t, e != null && (n.callback = e), t = pe(l, n, a), t !== null && (ct(t, l, a), on(t, l, a));
    },
    enqueueForceUpdate: function(l, t) {
      l = l._reactInternals;
      var e = gt(), a = ge(e);
      a.tag = 2, t != null && (a.callback = t), t = pe(l, a, e), t !== null && (ct(t, l, e), on(t, l, e));
    }
  };
  function hr(l, t, e, a, n, u, i) {
    return l = l.stateNode, typeof l.shouldComponentUpdate == "function" ? l.shouldComponentUpdate(a, u, i) : t.prototype && t.prototype.isPureReactComponent ? !tn(e, a) || !tn(n, u) : !0;
  }
  function vr(l, t, e, a) {
    l = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(e, a), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(e, a), t.state !== l && Hc.enqueueReplaceState(t, t.state, null);
  }
  function Ie(l, t) {
    var e = t;
    if ("ref" in t) {
      e = {};
      for (var a in t)
        a !== "ref" && (e[a] = t[a]);
    }
    if (l = l.defaultProps) {
      e === t && (e = H({}, e));
      for (var n in l)
        e[n] === void 0 && (e[n] = l[n]);
    }
    return e;
  }
  function yr(l) {
    nu(l);
  }
  function gr(l) {
    console.error(l);
  }
  function pr(l) {
    nu(l);
  }
  function Nu(l, t) {
    try {
      var e = l.onUncaughtError;
      e(t.value, { componentStack: t.stack });
    } catch (a) {
      setTimeout(function() {
        throw a;
      });
    }
  }
  function br(l, t, e) {
    try {
      var a = l.onCaughtError;
      a(e.value, {
        componentStack: e.stack,
        errorBoundary: t.tag === 1 ? t.stateNode : null
      });
    } catch (n) {
      setTimeout(function() {
        throw n;
      });
    }
  }
  function qc(l, t, e) {
    return e = ge(e), e.tag = 3, e.payload = { element: null }, e.callback = function() {
      Nu(l, t);
    }, e;
  }
  function Sr(l) {
    return l = ge(l), l.tag = 3, l;
  }
  function _r(l, t, e, a) {
    var n = e.type.getDerivedStateFromError;
    if (typeof n == "function") {
      var u = a.value;
      l.payload = function() {
        return n(u);
      }, l.callback = function() {
        br(t, e, a);
      };
    }
    var i = e.stateNode;
    i !== null && typeof i.componentDidCatch == "function" && (l.callback = function() {
      br(t, e, a), typeof n != "function" && (Te === null ? Te = /* @__PURE__ */ new Set([this]) : Te.add(this));
      var s = a.stack;
      this.componentDidCatch(a.value, {
        componentStack: s !== null ? s : ""
      });
    });
  }
  function vm(l, t, e, a, n) {
    if (e.flags |= 32768, a !== null && typeof a == "object" && typeof a.then == "function") {
      if (t = e.alternate, t !== null && ba(
        t,
        e,
        n,
        !0
      ), e = mt.current, e !== null) {
        switch (e.tag) {
          case 31:
          case 13:
            return At === null ? Yu() : e.alternate === null && Cl === 0 && (Cl = 3), e.flags &= -257, e.flags |= 65536, e.lanes = n, a === hu ? e.flags |= 16384 : (t = e.updateQueue, t === null ? e.updateQueue = /* @__PURE__ */ new Set([a]) : t.add(a), ff(l, a, n)), !1;
          case 22:
            return e.flags |= 65536, a === hu ? e.flags |= 16384 : (t = e.updateQueue, t === null ? (t = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([a])
            }, e.updateQueue = t) : (e = t.retryQueue, e === null ? t.retryQueue = /* @__PURE__ */ new Set([a]) : e.add(a)), ff(l, a, n)), !1;
        }
        throw Error(f(435, e.tag));
      }
      return ff(l, a, n), Yu(), !1;
    }
    if (fl)
      return t = mt.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = n, a !== tc && (l = Error(f(422), { cause: a }), nn(_t(l, e)))) : (a !== tc && (t = Error(f(423), {
        cause: a
      }), nn(
        _t(t, e)
      )), l = l.current.alternate, l.flags |= 65536, n &= -n, l.lanes |= n, a = _t(a, e), n = qc(
        l.stateNode,
        a,
        n
      ), dc(l, n), Cl !== 4 && (Cl = 2)), !1;
    var u = Error(f(520), { cause: a });
    if (u = _t(u, e), Tn === null ? Tn = [u] : Tn.push(u), Cl !== 4 && (Cl = 2), t === null) return !0;
    a = _t(a, e), e = t;
    do {
      switch (e.tag) {
        case 3:
          return e.flags |= 65536, l = n & -n, e.lanes |= l, l = qc(e.stateNode, a, l), dc(e, l), !1;
        case 1:
          if (t = e.type, u = e.stateNode, (e.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || u !== null && typeof u.componentDidCatch == "function" && (Te === null || !Te.has(u))))
            return e.flags |= 65536, n &= -n, e.lanes |= n, n = Sr(n), _r(
              n,
              l,
              e,
              a
            ), dc(e, n), !1;
      }
      e = e.return;
    } while (e !== null);
    return !1;
  }
  var Bc = Error(f(461)), Bl = !1;
  function Jl(l, t, e, a) {
    t.child = l === null ? Ao(t, null, e, a) : We(
      t,
      l.child,
      e,
      a
    );
  }
  function Er(l, t, e, a, n) {
    e = e.render;
    var u = t.ref;
    if ("ref" in a) {
      var i = {};
      for (var s in a)
        s !== "ref" && (i[s] = a[s]);
    } else i = a;
    return Ke(t), a = pc(
      l,
      t,
      e,
      i,
      u,
      n
    ), s = bc(), l !== null && !Bl ? (Sc(l, t, n), Pt(l, t, n)) : (fl && s && Pi(t), t.flags |= 1, Jl(l, t, a, n), t.child);
  }
  function xr(l, t, e, a, n) {
    if (l === null) {
      var u = e.type;
      return typeof u == "function" && !Wi(u) && u.defaultProps === void 0 && e.compare === null ? (t.tag = 15, t.type = u, Tr(
        l,
        t,
        u,
        a,
        n
      )) : (l = fu(
        e.type,
        null,
        a,
        t,
        t.mode,
        n
      ), l.ref = t.ref, l.return = t, t.child = l);
    }
    if (u = l.child, !Zc(l, n)) {
      var i = u.memoizedProps;
      if (e = e.compare, e = e !== null ? e : tn, e(i, a) && l.ref === t.ref)
        return Pt(l, t, n);
    }
    return t.flags |= 1, l = Jt(u, a), l.ref = t.ref, l.return = t, t.child = l;
  }
  function Tr(l, t, e, a, n) {
    if (l !== null) {
      var u = l.memoizedProps;
      if (tn(u, a) && l.ref === t.ref)
        if (Bl = !1, t.pendingProps = a = u, Zc(l, n))
          (l.flags & 131072) !== 0 && (Bl = !0);
        else
          return t.lanes = l.lanes, Pt(l, t, n);
    }
    return Lc(
      l,
      t,
      e,
      a,
      n
    );
  }
  function Ar(l, t, e, a) {
    var n = a.children, u = l !== null ? l.memoizedState : null;
    if (l === null && t.stateNode === null && (t.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), a.mode === "hidden") {
      if ((t.flags & 128) !== 0) {
        if (u = u !== null ? u.baseLanes | e : e, l !== null) {
          for (a = t.child = l.child, n = 0; a !== null; )
            n = n | a.lanes | a.childLanes, a = a.sibling;
          a = n & ~u;
        } else a = 0, t.child = null;
        return zr(
          l,
          t,
          u,
          e,
          a
        );
      }
      if ((e & 536870912) !== 0)
        t.memoizedState = { baseLanes: 0, cachePool: null }, l !== null && du(
          t,
          u !== null ? u.cachePool : null
        ), u !== null ? jo(t, u) : hc(), Co(t);
      else
        return a = t.lanes = 536870912, zr(
          l,
          t,
          u !== null ? u.baseLanes | e : e,
          e,
          a
        );
    } else
      u !== null ? (du(t, u.cachePool), jo(t, u), Se(), t.memoizedState = null) : (l !== null && du(t, null), hc(), Se());
    return Jl(l, t, n, e), t.child;
  }
  function gn(l, t) {
    return l !== null && l.tag === 22 || t.stateNode !== null || (t.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), t.sibling;
  }
  function zr(l, t, e, a, n) {
    var u = fc();
    return u = u === null ? null : { parent: Hl._currentValue, pool: u }, t.memoizedState = {
      baseLanes: e,
      cachePool: u
    }, l !== null && du(t, null), hc(), Co(t), l !== null && ba(l, t, a, !0), t.childLanes = n, null;
  }
  function ju(l, t) {
    return t = Mu(
      { mode: t.mode, children: t.children },
      l.mode
    ), t.ref = l.ref, l.child = t, t.return = l, t;
  }
  function Nr(l, t, e) {
    return We(t, l.child, null, e), l = ju(t, t.pendingProps), l.flags |= 2, ht(t), t.memoizedState = null, l;
  }
  function ym(l, t, e) {
    var a = t.pendingProps, n = (t.flags & 128) !== 0;
    if (t.flags &= -129, l === null) {
      if (fl) {
        if (a.mode === "hidden")
          return l = ju(t, a), t.lanes = 536870912, gn(null, l);
        if (yc(t), (l = Tl) ? (l = Yd(
          l,
          Tt
        ), l = l !== null && l.data === "&" ? l : null, l !== null && (t.memoizedState = {
          dehydrated: l,
          treeContext: de !== null ? { id: qt, overflow: Bt } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, e = so(l), e.return = t, t.child = e, Zl = t, Tl = null)) : l = null, l === null) throw he(t);
        return t.lanes = 536870912, null;
      }
      return ju(t, a);
    }
    var u = l.memoizedState;
    if (u !== null) {
      var i = u.dehydrated;
      if (yc(t), n)
        if (t.flags & 256)
          t.flags &= -257, t = Nr(
            l,
            t,
            e
          );
        else if (t.memoizedState !== null)
          t.child = l.child, t.flags |= 128, t = null;
        else throw Error(f(558));
      else if (Bl || ba(l, t, e, !1), n = (e & l.childLanes) !== 0, Bl || n) {
        if (a = El, a !== null && (i = ys(a, e), i !== 0 && i !== u.retryLane))
          throw u.retryLane = i, Qe(l, i), ct(a, l, i), Bc;
        Yu(), t = Nr(
          l,
          t,
          e
        );
      } else
        l = u.treeContext, Tl = zt(i.nextSibling), Zl = t, fl = !0, me = null, Tt = !1, l !== null && mo(t, l), t = ju(t, a), t.flags |= 4096;
      return t;
    }
    return l = Jt(l.child, {
      mode: a.mode,
      children: a.children
    }), l.ref = t.ref, t.child = l, l.return = t, l;
  }
  function Cu(l, t) {
    var e = t.ref;
    if (e === null)
      l !== null && l.ref !== null && (t.flags |= 4194816);
    else {
      if (typeof e != "function" && typeof e != "object")
        throw Error(f(284));
      (l === null || l.ref !== e) && (t.flags |= 4194816);
    }
  }
  function Lc(l, t, e, a, n) {
    return Ke(t), e = pc(
      l,
      t,
      e,
      a,
      void 0,
      n
    ), a = bc(), l !== null && !Bl ? (Sc(l, t, n), Pt(l, t, n)) : (fl && a && Pi(t), t.flags |= 1, Jl(l, t, e, n), t.child);
  }
  function jr(l, t, e, a, n, u) {
    return Ke(t), t.updateQueue = null, e = Oo(
      t,
      a,
      e,
      n
    ), Mo(l), a = bc(), l !== null && !Bl ? (Sc(l, t, u), Pt(l, t, u)) : (fl && a && Pi(t), t.flags |= 1, Jl(l, t, e, u), t.child);
  }
  function Cr(l, t, e, a, n) {
    if (Ke(t), t.stateNode === null) {
      var u = va, i = e.contextType;
      typeof i == "object" && i !== null && (u = Kl(i)), u = new e(a, u), t.memoizedState = u.state !== null && u.state !== void 0 ? u.state : null, u.updater = Hc, t.stateNode = u, u._reactInternals = t, u = t.stateNode, u.props = a, u.state = t.memoizedState, u.refs = {}, oc(t), i = e.contextType, u.context = typeof i == "object" && i !== null ? Kl(i) : va, u.state = t.memoizedState, i = e.getDerivedStateFromProps, typeof i == "function" && (Rc(
        t,
        e,
        i,
        a
      ), u.state = t.memoizedState), typeof e.getDerivedStateFromProps == "function" || typeof u.getSnapshotBeforeUpdate == "function" || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (i = u.state, typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount(), i !== u.state && Hc.enqueueReplaceState(u, u.state, null), dn(t, a, u, n), rn(), u.state = t.memoizedState), typeof u.componentDidMount == "function" && (t.flags |= 4194308), a = !0;
    } else if (l === null) {
      u = t.stateNode;
      var s = t.memoizedProps, m = Ie(e, s);
      u.props = m;
      var b = u.context, T = e.contextType;
      i = va, typeof T == "object" && T !== null && (i = Kl(T));
      var N = e.getDerivedStateFromProps;
      T = typeof N == "function" || typeof u.getSnapshotBeforeUpdate == "function", s = t.pendingProps !== s, T || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (s || b !== i) && vr(
        t,
        u,
        a,
        i
      ), ye = !1;
      var _ = t.memoizedState;
      u.state = _, dn(t, a, u, n), rn(), b = t.memoizedState, s || _ !== b || ye ? (typeof N == "function" && (Rc(
        t,
        e,
        N,
        a
      ), b = t.memoizedState), (m = ye || hr(
        t,
        e,
        m,
        a,
        _,
        b,
        i
      )) ? (T || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount()), typeof u.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof u.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = a, t.memoizedState = b), u.props = a, u.state = b, u.context = i, a = m) : (typeof u.componentDidMount == "function" && (t.flags |= 4194308), a = !1);
    } else {
      u = t.stateNode, rc(l, t), i = t.memoizedProps, T = Ie(e, i), u.props = T, N = t.pendingProps, _ = u.context, b = e.contextType, m = va, typeof b == "object" && b !== null && (m = Kl(b)), s = e.getDerivedStateFromProps, (b = typeof s == "function" || typeof u.getSnapshotBeforeUpdate == "function") || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (i !== N || _ !== m) && vr(
        t,
        u,
        a,
        m
      ), ye = !1, _ = t.memoizedState, u.state = _, dn(t, a, u, n), rn();
      var E = t.memoizedState;
      i !== N || _ !== E || ye || l !== null && l.dependencies !== null && ou(l.dependencies) ? (typeof s == "function" && (Rc(
        t,
        e,
        s,
        a
      ), E = t.memoizedState), (T = ye || hr(
        t,
        e,
        T,
        a,
        _,
        E,
        m
      ) || l !== null && l.dependencies !== null && ou(l.dependencies)) ? (b || typeof u.UNSAFE_componentWillUpdate != "function" && typeof u.componentWillUpdate != "function" || (typeof u.componentWillUpdate == "function" && u.componentWillUpdate(a, E, m), typeof u.UNSAFE_componentWillUpdate == "function" && u.UNSAFE_componentWillUpdate(
        a,
        E,
        m
      )), typeof u.componentDidUpdate == "function" && (t.flags |= 4), typeof u.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof u.componentDidUpdate != "function" || i === l.memoizedProps && _ === l.memoizedState || (t.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || i === l.memoizedProps && _ === l.memoizedState || (t.flags |= 1024), t.memoizedProps = a, t.memoizedState = E), u.props = a, u.state = E, u.context = m, a = T) : (typeof u.componentDidUpdate != "function" || i === l.memoizedProps && _ === l.memoizedState || (t.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || i === l.memoizedProps && _ === l.memoizedState || (t.flags |= 1024), a = !1);
    }
    return u = a, Cu(l, t), a = (t.flags & 128) !== 0, u || a ? (u = t.stateNode, e = a && typeof e.getDerivedStateFromError != "function" ? null : u.render(), t.flags |= 1, l !== null && a ? (t.child = We(
      t,
      l.child,
      null,
      n
    ), t.child = We(
      t,
      null,
      e,
      n
    )) : Jl(l, t, e, n), t.memoizedState = u.state, l = t.child) : l = Pt(
      l,
      t,
      n
    ), l;
  }
  function Mr(l, t, e, a) {
    return Ve(), t.flags |= 256, Jl(l, t, e, a), t.child;
  }
  var Yc = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function Gc(l) {
    return { baseLanes: l, cachePool: bo() };
  }
  function wc(l, t, e) {
    return l = l !== null ? l.childLanes & ~e : 0, t && (l |= yt), l;
  }
  function Or(l, t, e) {
    var a = t.pendingProps, n = !1, u = (t.flags & 128) !== 0, i;
    if ((i = u) || (i = l !== null && l.memoizedState === null ? !1 : (Ul.current & 2) !== 0), i && (n = !0, t.flags &= -129), i = (t.flags & 32) !== 0, t.flags &= -33, l === null) {
      if (fl) {
        if (n ? be(t) : Se(), (l = Tl) ? (l = Yd(
          l,
          Tt
        ), l = l !== null && l.data !== "&" ? l : null, l !== null && (t.memoizedState = {
          dehydrated: l,
          treeContext: de !== null ? { id: qt, overflow: Bt } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, e = so(l), e.return = t, t.child = e, Zl = t, Tl = null)) : l = null, l === null) throw he(t);
        return Tf(l) ? t.lanes = 32 : t.lanes = 536870912, null;
      }
      var s = a.children;
      return a = a.fallback, n ? (Se(), n = t.mode, s = Mu(
        { mode: "hidden", children: s },
        n
      ), a = Xe(
        a,
        n,
        e,
        null
      ), s.return = t, a.return = t, s.sibling = a, t.child = s, a = t.child, a.memoizedState = Gc(e), a.childLanes = wc(
        l,
        i,
        e
      ), t.memoizedState = Yc, gn(null, a)) : (be(t), Qc(t, s));
    }
    var m = l.memoizedState;
    if (m !== null && (s = m.dehydrated, s !== null)) {
      if (u)
        t.flags & 256 ? (be(t), t.flags &= -257, t = Xc(
          l,
          t,
          e
        )) : t.memoizedState !== null ? (Se(), t.child = l.child, t.flags |= 128, t = null) : (Se(), s = a.fallback, n = t.mode, a = Mu(
          { mode: "visible", children: a.children },
          n
        ), s = Xe(
          s,
          n,
          e,
          null
        ), s.flags |= 2, a.return = t, s.return = t, a.sibling = s, t.child = a, We(
          t,
          l.child,
          null,
          e
        ), a = t.child, a.memoizedState = Gc(e), a.childLanes = wc(
          l,
          i,
          e
        ), t.memoizedState = Yc, t = gn(null, a));
      else if (be(t), Tf(s)) {
        if (i = s.nextSibling && s.nextSibling.dataset, i) var b = i.dgst;
        i = b, a = Error(f(419)), a.stack = "", a.digest = i, nn({ value: a, source: null, stack: null }), t = Xc(
          l,
          t,
          e
        );
      } else if (Bl || ba(l, t, e, !1), i = (e & l.childLanes) !== 0, Bl || i) {
        if (i = El, i !== null && (a = ys(i, e), a !== 0 && a !== m.retryLane))
          throw m.retryLane = a, Qe(l, a), ct(i, l, a), Bc;
        xf(s) || Yu(), t = Xc(
          l,
          t,
          e
        );
      } else
        xf(s) ? (t.flags |= 192, t.child = l.child, t = null) : (l = m.treeContext, Tl = zt(
          s.nextSibling
        ), Zl = t, fl = !0, me = null, Tt = !1, l !== null && mo(t, l), t = Qc(
          t,
          a.children
        ), t.flags |= 4096);
      return t;
    }
    return n ? (Se(), s = a.fallback, n = t.mode, m = l.child, b = m.sibling, a = Jt(m, {
      mode: "hidden",
      children: a.children
    }), a.subtreeFlags = m.subtreeFlags & 65011712, b !== null ? s = Jt(
      b,
      s
    ) : (s = Xe(
      s,
      n,
      e,
      null
    ), s.flags |= 2), s.return = t, a.return = t, a.sibling = s, t.child = a, gn(null, a), a = t.child, s = l.child.memoizedState, s === null ? s = Gc(e) : (n = s.cachePool, n !== null ? (m = Hl._currentValue, n = n.parent !== m ? { parent: m, pool: m } : n) : n = bo(), s = {
      baseLanes: s.baseLanes | e,
      cachePool: n
    }), a.memoizedState = s, a.childLanes = wc(
      l,
      i,
      e
    ), t.memoizedState = Yc, gn(l.child, a)) : (be(t), e = l.child, l = e.sibling, e = Jt(e, {
      mode: "visible",
      children: a.children
    }), e.return = t, e.sibling = null, l !== null && (i = t.deletions, i === null ? (t.deletions = [l], t.flags |= 16) : i.push(l)), t.child = e, t.memoizedState = null, e);
  }
  function Qc(l, t) {
    return t = Mu(
      { mode: "visible", children: t },
      l.mode
    ), t.return = l, l.child = t;
  }
  function Mu(l, t) {
    return l = dt(22, l, null, t), l.lanes = 0, l;
  }
  function Xc(l, t, e) {
    return We(t, l.child, null, e), l = Qc(
      t,
      t.pendingProps.children
    ), l.flags |= 2, t.memoizedState = null, l;
  }
  function Dr(l, t, e) {
    l.lanes |= t;
    var a = l.alternate;
    a !== null && (a.lanes |= t), nc(l.return, t, e);
  }
  function Vc(l, t, e, a, n, u) {
    var i = l.memoizedState;
    i === null ? l.memoizedState = {
      isBackwards: t,
      rendering: null,
      renderingStartTime: 0,
      last: a,
      tail: e,
      tailMode: n,
      treeForkCount: u
    } : (i.isBackwards = t, i.rendering = null, i.renderingStartTime = 0, i.last = a, i.tail = e, i.tailMode = n, i.treeForkCount = u);
  }
  function Ur(l, t, e) {
    var a = t.pendingProps, n = a.revealOrder, u = a.tail;
    a = a.children;
    var i = Ul.current, s = (i & 2) !== 0;
    if (s ? (i = i & 1 | 2, t.flags |= 128) : i &= 1, R(Ul, i), Jl(l, t, a, e), a = fl ? an : 0, !s && l !== null && (l.flags & 128) !== 0)
      l: for (l = t.child; l !== null; ) {
        if (l.tag === 13)
          l.memoizedState !== null && Dr(l, e, t);
        else if (l.tag === 19)
          Dr(l, e, t);
        else if (l.child !== null) {
          l.child.return = l, l = l.child;
          continue;
        }
        if (l === t) break l;
        for (; l.sibling === null; ) {
          if (l.return === null || l.return === t)
            break l;
          l = l.return;
        }
        l.sibling.return = l.return, l = l.sibling;
      }
    switch (n) {
      case "forwards":
        for (e = t.child, n = null; e !== null; )
          l = e.alternate, l !== null && pu(l) === null && (n = e), e = e.sibling;
        e = n, e === null ? (n = t.child, t.child = null) : (n = e.sibling, e.sibling = null), Vc(
          t,
          !1,
          n,
          e,
          u,
          a
        );
        break;
      case "backwards":
      case "unstable_legacy-backwards":
        for (e = null, n = t.child, t.child = null; n !== null; ) {
          if (l = n.alternate, l !== null && pu(l) === null) {
            t.child = n;
            break;
          }
          l = n.sibling, n.sibling = e, e = n, n = l;
        }
        Vc(
          t,
          !0,
          e,
          null,
          u,
          a
        );
        break;
      case "together":
        Vc(
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
  function Pt(l, t, e) {
    if (l !== null && (t.dependencies = l.dependencies), xe |= t.lanes, (e & t.childLanes) === 0)
      if (l !== null) {
        if (ba(
          l,
          t,
          e,
          !1
        ), (e & t.childLanes) === 0)
          return null;
      } else return null;
    if (l !== null && t.child !== l.child)
      throw Error(f(153));
    if (t.child !== null) {
      for (l = t.child, e = Jt(l, l.pendingProps), t.child = e, e.return = t; l.sibling !== null; )
        l = l.sibling, e = e.sibling = Jt(l, l.pendingProps), e.return = t;
      e.sibling = null;
    }
    return t.child;
  }
  function Zc(l, t) {
    return (l.lanes & t) !== 0 ? !0 : (l = l.dependencies, !!(l !== null && ou(l)));
  }
  function gm(l, t, e) {
    switch (t.tag) {
      case 3:
        Fl(t, t.stateNode.containerInfo), ve(t, Hl, l.memoizedState.cache), Ve();
        break;
      case 27:
      case 5:
        Qa(t);
        break;
      case 4:
        Fl(t, t.stateNode.containerInfo);
        break;
      case 10:
        ve(
          t,
          t.type,
          t.memoizedProps.value
        );
        break;
      case 31:
        if (t.memoizedState !== null)
          return t.flags |= 128, yc(t), null;
        break;
      case 13:
        var a = t.memoizedState;
        if (a !== null)
          return a.dehydrated !== null ? (be(t), t.flags |= 128, null) : (e & t.child.childLanes) !== 0 ? Or(l, t, e) : (be(t), l = Pt(
            l,
            t,
            e
          ), l !== null ? l.sibling : null);
        be(t);
        break;
      case 19:
        var n = (l.flags & 128) !== 0;
        if (a = (e & t.childLanes) !== 0, a || (ba(
          l,
          t,
          e,
          !1
        ), a = (e & t.childLanes) !== 0), n) {
          if (a)
            return Ur(
              l,
              t,
              e
            );
          t.flags |= 128;
        }
        if (n = t.memoizedState, n !== null && (n.rendering = null, n.tail = null, n.lastEffect = null), R(Ul, Ul.current), a) break;
        return null;
      case 22:
        return t.lanes = 0, Ar(
          l,
          t,
          e,
          t.pendingProps
        );
      case 24:
        ve(t, Hl, l.memoizedState.cache);
    }
    return Pt(l, t, e);
  }
  function Rr(l, t, e) {
    if (l !== null)
      if (l.memoizedProps !== t.pendingProps)
        Bl = !0;
      else {
        if (!Zc(l, e) && (t.flags & 128) === 0)
          return Bl = !1, gm(
            l,
            t,
            e
          );
        Bl = (l.flags & 131072) !== 0;
      }
    else
      Bl = !1, fl && (t.flags & 1048576) !== 0 && ro(t, an, t.index);
    switch (t.lanes = 0, t.tag) {
      case 16:
        l: {
          var a = t.pendingProps;
          if (l = ke(t.elementType), t.type = l, typeof l == "function")
            Wi(l) ? (a = Ie(l, a), t.tag = 1, t = Cr(
              null,
              t,
              l,
              a,
              e
            )) : (t.tag = 0, t = Lc(
              null,
              t,
              l,
              a,
              e
            ));
          else {
            if (l != null) {
              var n = l.$$typeof;
              if (n === K) {
                t.tag = 11, t = Er(
                  null,
                  t,
                  l,
                  a,
                  e
                );
                break l;
              } else if (n === P) {
                t.tag = 14, t = xr(
                  null,
                  t,
                  l,
                  a,
                  e
                );
                break l;
              }
            }
            throw t = Xt(l) || l, Error(f(306, t, ""));
          }
        }
        return t;
      case 0:
        return Lc(
          l,
          t,
          t.type,
          t.pendingProps,
          e
        );
      case 1:
        return a = t.type, n = Ie(
          a,
          t.pendingProps
        ), Cr(
          l,
          t,
          a,
          n,
          e
        );
      case 3:
        l: {
          if (Fl(
            t,
            t.stateNode.containerInfo
          ), l === null) throw Error(f(387));
          a = t.pendingProps;
          var u = t.memoizedState;
          n = u.element, rc(l, t), dn(t, a, null, e);
          var i = t.memoizedState;
          if (a = i.cache, ve(t, Hl, a), a !== u.cache && uc(
            t,
            [Hl],
            e,
            !0
          ), rn(), a = i.element, u.isDehydrated)
            if (u = {
              element: a,
              isDehydrated: !1,
              cache: i.cache
            }, t.updateQueue.baseState = u, t.memoizedState = u, t.flags & 256) {
              t = Mr(
                l,
                t,
                a,
                e
              );
              break l;
            } else if (a !== n) {
              n = _t(
                Error(f(424)),
                t
              ), nn(n), t = Mr(
                l,
                t,
                a,
                e
              );
              break l;
            } else {
              switch (l = t.stateNode.containerInfo, l.nodeType) {
                case 9:
                  l = l.body;
                  break;
                default:
                  l = l.nodeName === "HTML" ? l.ownerDocument.body : l;
              }
              for (Tl = zt(l.firstChild), Zl = t, fl = !0, me = null, Tt = !0, e = Ao(
                t,
                null,
                a,
                e
              ), t.child = e; e; )
                e.flags = e.flags & -3 | 4096, e = e.sibling;
            }
          else {
            if (Ve(), a === n) {
              t = Pt(
                l,
                t,
                e
              );
              break l;
            }
            Jl(l, t, a, e);
          }
          t = t.child;
        }
        return t;
      case 26:
        return Cu(l, t), l === null ? (e = Zd(
          t.type,
          null,
          t.pendingProps,
          null
        )) ? t.memoizedState = e : fl || (e = t.type, l = t.pendingProps, a = Ku(
          al.current
        ).createElement(e), a[Vl] = t, a[tt] = l, kl(a, e, l), Ql(a), t.stateNode = a) : t.memoizedState = Zd(
          t.type,
          l.memoizedProps,
          t.pendingProps,
          l.memoizedState
        ), null;
      case 27:
        return Qa(t), l === null && fl && (a = t.stateNode = Qd(
          t.type,
          t.pendingProps,
          al.current
        ), Zl = t, Tt = !0, n = Tl, je(t.type) ? (Af = n, Tl = zt(a.firstChild)) : Tl = n), Jl(
          l,
          t,
          t.pendingProps.children,
          e
        ), Cu(l, t), l === null && (t.flags |= 4194304), t.child;
      case 5:
        return l === null && fl && ((n = a = Tl) && (a = Jm(
          a,
          t.type,
          t.pendingProps,
          Tt
        ), a !== null ? (t.stateNode = a, Zl = t, Tl = zt(a.firstChild), Tt = !1, n = !0) : n = !1), n || he(t)), Qa(t), n = t.type, u = t.pendingProps, i = l !== null ? l.memoizedProps : null, a = u.children, Sf(n, u) ? a = null : i !== null && Sf(n, i) && (t.flags |= 32), t.memoizedState !== null && (n = pc(
          l,
          t,
          fm,
          null,
          null,
          e
        ), Dn._currentValue = n), Cu(l, t), Jl(l, t, a, e), t.child;
      case 6:
        return l === null && fl && ((l = e = Tl) && (e = km(
          e,
          t.pendingProps,
          Tt
        ), e !== null ? (t.stateNode = e, Zl = t, Tl = null, l = !0) : l = !1), l || he(t)), null;
      case 13:
        return Or(l, t, e);
      case 4:
        return Fl(
          t,
          t.stateNode.containerInfo
        ), a = t.pendingProps, l === null ? t.child = We(
          t,
          null,
          a,
          e
        ) : Jl(l, t, a, e), t.child;
      case 11:
        return Er(
          l,
          t,
          t.type,
          t.pendingProps,
          e
        );
      case 7:
        return Jl(
          l,
          t,
          t.pendingProps,
          e
        ), t.child;
      case 8:
        return Jl(
          l,
          t,
          t.pendingProps.children,
          e
        ), t.child;
      case 12:
        return Jl(
          l,
          t,
          t.pendingProps.children,
          e
        ), t.child;
      case 10:
        return a = t.pendingProps, ve(t, t.type, a.value), Jl(l, t, a.children, e), t.child;
      case 9:
        return n = t.type._context, a = t.pendingProps.children, Ke(t), n = Kl(n), a = a(n), t.flags |= 1, Jl(l, t, a, e), t.child;
      case 14:
        return xr(
          l,
          t,
          t.type,
          t.pendingProps,
          e
        );
      case 15:
        return Tr(
          l,
          t,
          t.type,
          t.pendingProps,
          e
        );
      case 19:
        return Ur(l, t, e);
      case 31:
        return ym(l, t, e);
      case 22:
        return Ar(
          l,
          t,
          e,
          t.pendingProps
        );
      case 24:
        return Ke(t), a = Kl(Hl), l === null ? (n = fc(), n === null && (n = El, u = ic(), n.pooledCache = u, u.refCount++, u !== null && (n.pooledCacheLanes |= e), n = u), t.memoizedState = { parent: a, cache: n }, oc(t), ve(t, Hl, n)) : ((l.lanes & e) !== 0 && (rc(l, t), dn(t, null, null, e), rn()), n = l.memoizedState, u = t.memoizedState, n.parent !== a ? (n = { parent: a, cache: a }, t.memoizedState = n, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = n), ve(t, Hl, a)) : (a = u.cache, ve(t, Hl, a), a !== n.cache && uc(
          t,
          [Hl],
          e,
          !0
        ))), Jl(
          l,
          t,
          t.pendingProps.children,
          e
        ), t.child;
      case 29:
        throw t.pendingProps;
    }
    throw Error(f(156, t.tag));
  }
  function le(l) {
    l.flags |= 4;
  }
  function Kc(l, t, e, a, n) {
    if ((t = (l.mode & 32) !== 0) && (t = !1), t) {
      if (l.flags |= 16777216, (n & 335544128) === n)
        if (l.stateNode.complete) l.flags |= 8192;
        else if (cd()) l.flags |= 8192;
        else
          throw $e = hu, sc;
    } else l.flags &= -16777217;
  }
  function Hr(l, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
      l.flags &= -16777217;
    else if (l.flags |= 16777216, !Wd(t))
      if (cd()) l.flags |= 8192;
      else
        throw $e = hu, sc;
  }
  function Ou(l, t) {
    t !== null && (l.flags |= 4), l.flags & 16384 && (t = l.tag !== 22 ? ms() : 536870912, l.lanes |= t, Oa |= t);
  }
  function pn(l, t) {
    if (!fl)
      switch (l.tailMode) {
        case "hidden":
          t = l.tail;
          for (var e = null; t !== null; )
            t.alternate !== null && (e = t), t = t.sibling;
          e === null ? l.tail = null : e.sibling = null;
          break;
        case "collapsed":
          e = l.tail;
          for (var a = null; e !== null; )
            e.alternate !== null && (a = e), e = e.sibling;
          a === null ? t || l.tail === null ? l.tail = null : l.tail.sibling = null : a.sibling = null;
      }
  }
  function Al(l) {
    var t = l.alternate !== null && l.alternate.child === l.child, e = 0, a = 0;
    if (t)
      for (var n = l.child; n !== null; )
        e |= n.lanes | n.childLanes, a |= n.subtreeFlags & 65011712, a |= n.flags & 65011712, n.return = l, n = n.sibling;
    else
      for (n = l.child; n !== null; )
        e |= n.lanes | n.childLanes, a |= n.subtreeFlags, a |= n.flags, n.return = l, n = n.sibling;
    return l.subtreeFlags |= a, l.childLanes = e, t;
  }
  function pm(l, t, e) {
    var a = t.pendingProps;
    switch (lc(t), t.tag) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Al(t), null;
      case 1:
        return Al(t), null;
      case 3:
        return e = t.stateNode, a = null, l !== null && (a = l.memoizedState.cache), t.memoizedState.cache !== a && (t.flags |= 2048), Wt(Hl), Dl(), e.pendingContext && (e.context = e.pendingContext, e.pendingContext = null), (l === null || l.child === null) && (pa(t) ? le(t) : l === null || l.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, ec())), Al(t), null;
      case 26:
        var n = t.type, u = t.memoizedState;
        return l === null ? (le(t), u !== null ? (Al(t), Hr(t, u)) : (Al(t), Kc(
          t,
          n,
          null,
          a,
          e
        ))) : u ? u !== l.memoizedState ? (le(t), Al(t), Hr(t, u)) : (Al(t), t.flags &= -16777217) : (l = l.memoizedProps, l !== a && le(t), Al(t), Kc(
          t,
          n,
          l,
          a,
          e
        )), null;
      case 27:
        if (Qn(t), e = al.current, n = t.type, l !== null && t.stateNode != null)
          l.memoizedProps !== a && le(t);
        else {
          if (!a) {
            if (t.stateNode === null)
              throw Error(f(166));
            return Al(t), null;
          }
          l = L.current, pa(t) ? ho(t) : (l = Qd(n, a, e), t.stateNode = l, le(t));
        }
        return Al(t), null;
      case 5:
        if (Qn(t), n = t.type, l !== null && t.stateNode != null)
          l.memoizedProps !== a && le(t);
        else {
          if (!a) {
            if (t.stateNode === null)
              throw Error(f(166));
            return Al(t), null;
          }
          if (u = L.current, pa(t))
            ho(t);
          else {
            var i = Ku(
              al.current
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
            u[Vl] = t, u[tt] = a;
            l: for (i = t.child; i !== null; ) {
              if (i.tag === 5 || i.tag === 6)
                u.appendChild(i.stateNode);
              else if (i.tag !== 4 && i.tag !== 27 && i.child !== null) {
                i.child.return = i, i = i.child;
                continue;
              }
              if (i === t) break l;
              for (; i.sibling === null; ) {
                if (i.return === null || i.return === t)
                  break l;
                i = i.return;
              }
              i.sibling.return = i.return, i = i.sibling;
            }
            t.stateNode = u;
            l: switch (kl(u, n, a), n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                a = !!a.autoFocus;
                break l;
              case "img":
                a = !0;
                break l;
              default:
                a = !1;
            }
            a && le(t);
          }
        }
        return Al(t), Kc(
          t,
          t.type,
          l === null ? null : l.memoizedProps,
          t.pendingProps,
          e
        ), null;
      case 6:
        if (l && t.stateNode != null)
          l.memoizedProps !== a && le(t);
        else {
          if (typeof a != "string" && t.stateNode === null)
            throw Error(f(166));
          if (l = al.current, pa(t)) {
            if (l = t.stateNode, e = t.memoizedProps, a = null, n = Zl, n !== null)
              switch (n.tag) {
                case 27:
                case 5:
                  a = n.memoizedProps;
              }
            l[Vl] = t, l = !!(l.nodeValue === e || a !== null && a.suppressHydrationWarning === !0 || Od(l.nodeValue, e)), l || he(t, !0);
          } else
            l = Ku(l).createTextNode(
              a
            ), l[Vl] = t, t.stateNode = l;
        }
        return Al(t), null;
      case 31:
        if (e = t.memoizedState, l === null || l.memoizedState !== null) {
          if (a = pa(t), e !== null) {
            if (l === null) {
              if (!a) throw Error(f(318));
              if (l = t.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(f(557));
              l[Vl] = t;
            } else
              Ve(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            Al(t), l = !1;
          } else
            e = ec(), l !== null && l.memoizedState !== null && (l.memoizedState.hydrationErrors = e), l = !0;
          if (!l)
            return t.flags & 256 ? (ht(t), t) : (ht(t), null);
          if ((t.flags & 128) !== 0)
            throw Error(f(558));
        }
        return Al(t), null;
      case 13:
        if (a = t.memoizedState, l === null || l.memoizedState !== null && l.memoizedState.dehydrated !== null) {
          if (n = pa(t), a !== null && a.dehydrated !== null) {
            if (l === null) {
              if (!n) throw Error(f(318));
              if (n = t.memoizedState, n = n !== null ? n.dehydrated : null, !n) throw Error(f(317));
              n[Vl] = t;
            } else
              Ve(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            Al(t), n = !1;
          } else
            n = ec(), l !== null && l.memoizedState !== null && (l.memoizedState.hydrationErrors = n), n = !0;
          if (!n)
            return t.flags & 256 ? (ht(t), t) : (ht(t), null);
        }
        return ht(t), (t.flags & 128) !== 0 ? (t.lanes = e, t) : (e = a !== null, l = l !== null && l.memoizedState !== null, e && (a = t.child, n = null, a.alternate !== null && a.alternate.memoizedState !== null && a.alternate.memoizedState.cachePool !== null && (n = a.alternate.memoizedState.cachePool.pool), u = null, a.memoizedState !== null && a.memoizedState.cachePool !== null && (u = a.memoizedState.cachePool.pool), u !== n && (a.flags |= 2048)), e !== l && e && (t.child.flags |= 8192), Ou(t, t.updateQueue), Al(t), null);
      case 4:
        return Dl(), l === null && vf(t.stateNode.containerInfo), Al(t), null;
      case 10:
        return Wt(t.type), Al(t), null;
      case 19:
        if (M(Ul), a = t.memoizedState, a === null) return Al(t), null;
        if (n = (t.flags & 128) !== 0, u = a.rendering, u === null)
          if (n) pn(a, !1);
          else {
            if (Cl !== 0 || l !== null && (l.flags & 128) !== 0)
              for (l = t.child; l !== null; ) {
                if (u = pu(l), u !== null) {
                  for (t.flags |= 128, pn(a, !1), l = u.updateQueue, t.updateQueue = l, Ou(t, l), t.subtreeFlags = 0, l = e, e = t.child; e !== null; )
                    fo(e, l), e = e.sibling;
                  return R(
                    Ul,
                    Ul.current & 1 | 2
                  ), fl && kt(t, a.treeForkCount), t.child;
                }
                l = l.sibling;
              }
            a.tail !== null && ft() > qu && (t.flags |= 128, n = !0, pn(a, !1), t.lanes = 4194304);
          }
        else {
          if (!n)
            if (l = pu(u), l !== null) {
              if (t.flags |= 128, n = !0, l = l.updateQueue, t.updateQueue = l, Ou(t, l), pn(a, !0), a.tail === null && a.tailMode === "hidden" && !u.alternate && !fl)
                return Al(t), null;
            } else
              2 * ft() - a.renderingStartTime > qu && e !== 536870912 && (t.flags |= 128, n = !0, pn(a, !1), t.lanes = 4194304);
          a.isBackwards ? (u.sibling = t.child, t.child = u) : (l = a.last, l !== null ? l.sibling = u : t.child = u, a.last = u);
        }
        return a.tail !== null ? (l = a.tail, a.rendering = l, a.tail = l.sibling, a.renderingStartTime = ft(), l.sibling = null, e = Ul.current, R(
          Ul,
          n ? e & 1 | 2 : e & 1
        ), fl && kt(t, a.treeForkCount), l) : (Al(t), null);
      case 22:
      case 23:
        return ht(t), vc(), a = t.memoizedState !== null, l !== null ? l.memoizedState !== null !== a && (t.flags |= 8192) : a && (t.flags |= 8192), a ? (e & 536870912) !== 0 && (t.flags & 128) === 0 && (Al(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Al(t), e = t.updateQueue, e !== null && Ou(t, e.retryQueue), e = null, l !== null && l.memoizedState !== null && l.memoizedState.cachePool !== null && (e = l.memoizedState.cachePool.pool), a = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (a = t.memoizedState.cachePool.pool), a !== e && (t.flags |= 2048), l !== null && M(Je), null;
      case 24:
        return e = null, l !== null && (e = l.memoizedState.cache), t.memoizedState.cache !== e && (t.flags |= 2048), Wt(Hl), Al(t), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(f(156, t.tag));
  }
  function bm(l, t) {
    switch (lc(t), t.tag) {
      case 1:
        return l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, t) : null;
      case 3:
        return Wt(Hl), Dl(), l = t.flags, (l & 65536) !== 0 && (l & 128) === 0 ? (t.flags = l & -65537 | 128, t) : null;
      case 26:
      case 27:
      case 5:
        return Qn(t), null;
      case 31:
        if (t.memoizedState !== null) {
          if (ht(t), t.alternate === null)
            throw Error(f(340));
          Ve();
        }
        return l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, t) : null;
      case 13:
        if (ht(t), l = t.memoizedState, l !== null && l.dehydrated !== null) {
          if (t.alternate === null)
            throw Error(f(340));
          Ve();
        }
        return l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, t) : null;
      case 19:
        return M(Ul), null;
      case 4:
        return Dl(), null;
      case 10:
        return Wt(t.type), null;
      case 22:
      case 23:
        return ht(t), vc(), l !== null && M(Je), l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, t) : null;
      case 24:
        return Wt(Hl), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function qr(l, t) {
    switch (lc(t), t.tag) {
      case 3:
        Wt(Hl), Dl();
        break;
      case 26:
      case 27:
      case 5:
        Qn(t);
        break;
      case 4:
        Dl();
        break;
      case 31:
        t.memoizedState !== null && ht(t);
        break;
      case 13:
        ht(t);
        break;
      case 19:
        M(Ul);
        break;
      case 10:
        Wt(t.type);
        break;
      case 22:
      case 23:
        ht(t), vc(), l !== null && M(Je);
        break;
      case 24:
        Wt(Hl);
    }
  }
  function bn(l, t) {
    try {
      var e = t.updateQueue, a = e !== null ? e.lastEffect : null;
      if (a !== null) {
        var n = a.next;
        e = n;
        do {
          if ((e.tag & l) === l) {
            a = void 0;
            var u = e.create, i = e.inst;
            a = u(), i.destroy = a;
          }
          e = e.next;
        } while (e !== n);
      }
    } catch (s) {
      vl(t, t.return, s);
    }
  }
  function _e(l, t, e) {
    try {
      var a = t.updateQueue, n = a !== null ? a.lastEffect : null;
      if (n !== null) {
        var u = n.next;
        a = u;
        do {
          if ((a.tag & l) === l) {
            var i = a.inst, s = i.destroy;
            if (s !== void 0) {
              i.destroy = void 0, n = t;
              var m = e, b = s;
              try {
                b();
              } catch (T) {
                vl(
                  n,
                  m,
                  T
                );
              }
            }
          }
          a = a.next;
        } while (a !== u);
      }
    } catch (T) {
      vl(t, t.return, T);
    }
  }
  function Br(l) {
    var t = l.updateQueue;
    if (t !== null) {
      var e = l.stateNode;
      try {
        No(t, e);
      } catch (a) {
        vl(l, l.return, a);
      }
    }
  }
  function Lr(l, t, e) {
    e.props = Ie(
      l.type,
      l.memoizedProps
    ), e.state = l.memoizedState;
    try {
      e.componentWillUnmount();
    } catch (a) {
      vl(l, t, a);
    }
  }
  function Sn(l, t) {
    try {
      var e = l.ref;
      if (e !== null) {
        switch (l.tag) {
          case 26:
          case 27:
          case 5:
            var a = l.stateNode;
            break;
          case 30:
            a = l.stateNode;
            break;
          default:
            a = l.stateNode;
        }
        typeof e == "function" ? l.refCleanup = e(a) : e.current = a;
      }
    } catch (n) {
      vl(l, t, n);
    }
  }
  function Lt(l, t) {
    var e = l.ref, a = l.refCleanup;
    if (e !== null)
      if (typeof a == "function")
        try {
          a();
        } catch (n) {
          vl(l, t, n);
        } finally {
          l.refCleanup = null, l = l.alternate, l != null && (l.refCleanup = null);
        }
      else if (typeof e == "function")
        try {
          e(null);
        } catch (n) {
          vl(l, t, n);
        }
      else e.current = null;
  }
  function Yr(l) {
    var t = l.type, e = l.memoizedProps, a = l.stateNode;
    try {
      l: switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          e.autoFocus && a.focus();
          break l;
        case "img":
          e.src ? a.src = e.src : e.srcSet && (a.srcset = e.srcSet);
      }
    } catch (n) {
      vl(l, l.return, n);
    }
  }
  function Jc(l, t, e) {
    try {
      var a = l.stateNode;
      wm(a, l.type, e, t), a[tt] = t;
    } catch (n) {
      vl(l, l.return, n);
    }
  }
  function Gr(l) {
    return l.tag === 5 || l.tag === 3 || l.tag === 26 || l.tag === 27 && je(l.type) || l.tag === 4;
  }
  function kc(l) {
    l: for (; ; ) {
      for (; l.sibling === null; ) {
        if (l.return === null || Gr(l.return)) return null;
        l = l.return;
      }
      for (l.sibling.return = l.return, l = l.sibling; l.tag !== 5 && l.tag !== 6 && l.tag !== 18; ) {
        if (l.tag === 27 && je(l.type) || l.flags & 2 || l.child === null || l.tag === 4) continue l;
        l.child.return = l, l = l.child;
      }
      if (!(l.flags & 2)) return l.stateNode;
    }
  }
  function $c(l, t, e) {
    var a = l.tag;
    if (a === 5 || a === 6)
      l = l.stateNode, t ? (e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e).insertBefore(l, t) : (t = e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e, t.appendChild(l), e = e._reactRootContainer, e != null || t.onclick !== null || (t.onclick = Zt));
    else if (a !== 4 && (a === 27 && je(l.type) && (e = l.stateNode, t = null), l = l.child, l !== null))
      for ($c(l, t, e), l = l.sibling; l !== null; )
        $c(l, t, e), l = l.sibling;
  }
  function Du(l, t, e) {
    var a = l.tag;
    if (a === 5 || a === 6)
      l = l.stateNode, t ? e.insertBefore(l, t) : e.appendChild(l);
    else if (a !== 4 && (a === 27 && je(l.type) && (e = l.stateNode), l = l.child, l !== null))
      for (Du(l, t, e), l = l.sibling; l !== null; )
        Du(l, t, e), l = l.sibling;
  }
  function wr(l) {
    var t = l.stateNode, e = l.memoizedProps;
    try {
      for (var a = l.type, n = t.attributes; n.length; )
        t.removeAttributeNode(n[0]);
      kl(t, a, e), t[Vl] = l, t[tt] = e;
    } catch (u) {
      vl(l, l.return, u);
    }
  }
  var te = !1, Ll = !1, Wc = !1, Qr = typeof WeakSet == "function" ? WeakSet : Set, Xl = null;
  function Sm(l, t) {
    if (l = l.containerInfo, pf = Pu, l = Ps(l), Xi(l)) {
      if ("selectionStart" in l)
        var e = {
          start: l.selectionStart,
          end: l.selectionEnd
        };
      else
        l: {
          e = (e = l.ownerDocument) && e.defaultView || window;
          var a = e.getSelection && e.getSelection();
          if (a && a.rangeCount !== 0) {
            e = a.anchorNode;
            var n = a.anchorOffset, u = a.focusNode;
            a = a.focusOffset;
            try {
              e.nodeType, u.nodeType;
            } catch {
              e = null;
              break l;
            }
            var i = 0, s = -1, m = -1, b = 0, T = 0, N = l, _ = null;
            t: for (; ; ) {
              for (var E; N !== e || n !== 0 && N.nodeType !== 3 || (s = i + n), N !== u || a !== 0 && N.nodeType !== 3 || (m = i + a), N.nodeType === 3 && (i += N.nodeValue.length), (E = N.firstChild) !== null; )
                _ = N, N = E;
              for (; ; ) {
                if (N === l) break t;
                if (_ === e && ++b === n && (s = i), _ === u && ++T === a && (m = i), (E = N.nextSibling) !== null) break;
                N = _, _ = N.parentNode;
              }
              N = E;
            }
            e = s === -1 || m === -1 ? null : { start: s, end: m };
          } else e = null;
        }
      e = e || { start: 0, end: 0 };
    } else e = null;
    for (bf = { focusedElem: l, selectionRange: e }, Pu = !1, Xl = t; Xl !== null; )
      if (t = Xl, l = t.child, (t.subtreeFlags & 1028) !== 0 && l !== null)
        l.return = t, Xl = l;
      else
        for (; Xl !== null; ) {
          switch (t = Xl, u = t.alternate, l = t.flags, t.tag) {
            case 0:
              if ((l & 4) !== 0 && (l = t.updateQueue, l = l !== null ? l.events : null, l !== null))
                for (e = 0; e < l.length; e++)
                  n = l[e], n.ref.impl = n.nextImpl;
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((l & 1024) !== 0 && u !== null) {
                l = void 0, e = t, n = u.memoizedProps, u = u.memoizedState, a = e.stateNode;
                try {
                  var B = Ie(
                    e.type,
                    n
                  );
                  l = a.getSnapshotBeforeUpdate(
                    B,
                    u
                  ), a.__reactInternalSnapshotBeforeUpdate = l;
                } catch (X) {
                  vl(
                    e,
                    e.return,
                    X
                  );
                }
              }
              break;
            case 3:
              if ((l & 1024) !== 0) {
                if (l = t.stateNode.containerInfo, e = l.nodeType, e === 9)
                  Ef(l);
                else if (e === 1)
                  switch (l.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      Ef(l);
                      break;
                    default:
                      l.textContent = "";
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
              if ((l & 1024) !== 0) throw Error(f(163));
          }
          if (l = t.sibling, l !== null) {
            l.return = t.return, Xl = l;
            break;
          }
          Xl = t.return;
        }
  }
  function Xr(l, t, e) {
    var a = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        ae(l, e), a & 4 && bn(5, e);
        break;
      case 1:
        if (ae(l, e), a & 4)
          if (l = e.stateNode, t === null)
            try {
              l.componentDidMount();
            } catch (i) {
              vl(e, e.return, i);
            }
          else {
            var n = Ie(
              e.type,
              t.memoizedProps
            );
            t = t.memoizedState;
            try {
              l.componentDidUpdate(
                n,
                t,
                l.__reactInternalSnapshotBeforeUpdate
              );
            } catch (i) {
              vl(
                e,
                e.return,
                i
              );
            }
          }
        a & 64 && Br(e), a & 512 && Sn(e, e.return);
        break;
      case 3:
        if (ae(l, e), a & 64 && (l = e.updateQueue, l !== null)) {
          if (t = null, e.child !== null)
            switch (e.child.tag) {
              case 27:
              case 5:
                t = e.child.stateNode;
                break;
              case 1:
                t = e.child.stateNode;
            }
          try {
            No(l, t);
          } catch (i) {
            vl(e, e.return, i);
          }
        }
        break;
      case 27:
        t === null && a & 4 && wr(e);
      case 26:
      case 5:
        ae(l, e), t === null && a & 4 && Yr(e), a & 512 && Sn(e, e.return);
        break;
      case 12:
        ae(l, e);
        break;
      case 31:
        ae(l, e), a & 4 && Kr(l, e);
        break;
      case 13:
        ae(l, e), a & 4 && Jr(l, e), a & 64 && (l = e.memoizedState, l !== null && (l = l.dehydrated, l !== null && (e = Cm.bind(
          null,
          e
        ), $m(l, e))));
        break;
      case 22:
        if (a = e.memoizedState !== null || te, !a) {
          t = t !== null && t.memoizedState !== null || Ll, n = te;
          var u = Ll;
          te = a, (Ll = t) && !u ? ne(
            l,
            e,
            (e.subtreeFlags & 8772) !== 0
          ) : ae(l, e), te = n, Ll = u;
        }
        break;
      case 30:
        break;
      default:
        ae(l, e);
    }
  }
  function Vr(l) {
    var t = l.alternate;
    t !== null && (l.alternate = null, Vr(t)), l.child = null, l.deletions = null, l.sibling = null, l.tag === 5 && (t = l.stateNode, t !== null && zi(t)), l.stateNode = null, l.return = null, l.dependencies = null, l.memoizedProps = null, l.memoizedState = null, l.pendingProps = null, l.stateNode = null, l.updateQueue = null;
  }
  var Nl = null, at = !1;
  function ee(l, t, e) {
    for (e = e.child; e !== null; )
      Zr(l, t, e), e = e.sibling;
  }
  function Zr(l, t, e) {
    if (st && typeof st.onCommitFiberUnmount == "function")
      try {
        st.onCommitFiberUnmount(Xa, e);
      } catch {
      }
    switch (e.tag) {
      case 26:
        Ll || Lt(e, t), ee(
          l,
          t,
          e
        ), e.memoizedState ? e.memoizedState.count-- : e.stateNode && (e = e.stateNode, e.parentNode.removeChild(e));
        break;
      case 27:
        Ll || Lt(e, t);
        var a = Nl, n = at;
        je(e.type) && (Nl = e.stateNode, at = !1), ee(
          l,
          t,
          e
        ), Cn(e.stateNode), Nl = a, at = n;
        break;
      case 5:
        Ll || Lt(e, t);
      case 6:
        if (a = Nl, n = at, Nl = null, ee(
          l,
          t,
          e
        ), Nl = a, at = n, Nl !== null)
          if (at)
            try {
              (Nl.nodeType === 9 ? Nl.body : Nl.nodeName === "HTML" ? Nl.ownerDocument.body : Nl).removeChild(e.stateNode);
            } catch (u) {
              vl(
                e,
                t,
                u
              );
            }
          else
            try {
              Nl.removeChild(e.stateNode);
            } catch (u) {
              vl(
                e,
                t,
                u
              );
            }
        break;
      case 18:
        Nl !== null && (at ? (l = Nl, Bd(
          l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l,
          e.stateNode
        ), Ya(l)) : Bd(Nl, e.stateNode));
        break;
      case 4:
        a = Nl, n = at, Nl = e.stateNode.containerInfo, at = !0, ee(
          l,
          t,
          e
        ), Nl = a, at = n;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        _e(2, e, t), Ll || _e(4, e, t), ee(
          l,
          t,
          e
        );
        break;
      case 1:
        Ll || (Lt(e, t), a = e.stateNode, typeof a.componentWillUnmount == "function" && Lr(
          e,
          t,
          a
        )), ee(
          l,
          t,
          e
        );
        break;
      case 21:
        ee(
          l,
          t,
          e
        );
        break;
      case 22:
        Ll = (a = Ll) || e.memoizedState !== null, ee(
          l,
          t,
          e
        ), Ll = a;
        break;
      default:
        ee(
          l,
          t,
          e
        );
    }
  }
  function Kr(l, t) {
    if (t.memoizedState === null && (l = t.alternate, l !== null && (l = l.memoizedState, l !== null))) {
      l = l.dehydrated;
      try {
        Ya(l);
      } catch (e) {
        vl(t, t.return, e);
      }
    }
  }
  function Jr(l, t) {
    if (t.memoizedState === null && (l = t.alternate, l !== null && (l = l.memoizedState, l !== null && (l = l.dehydrated, l !== null))))
      try {
        Ya(l);
      } catch (e) {
        vl(t, t.return, e);
      }
  }
  function _m(l) {
    switch (l.tag) {
      case 31:
      case 13:
      case 19:
        var t = l.stateNode;
        return t === null && (t = l.stateNode = new Qr()), t;
      case 22:
        return l = l.stateNode, t = l._retryCache, t === null && (t = l._retryCache = new Qr()), t;
      default:
        throw Error(f(435, l.tag));
    }
  }
  function Uu(l, t) {
    var e = _m(l);
    t.forEach(function(a) {
      if (!e.has(a)) {
        e.add(a);
        var n = Mm.bind(null, l, a);
        a.then(n, n);
      }
    });
  }
  function nt(l, t) {
    var e = t.deletions;
    if (e !== null)
      for (var a = 0; a < e.length; a++) {
        var n = e[a], u = l, i = t, s = i;
        l: for (; s !== null; ) {
          switch (s.tag) {
            case 27:
              if (je(s.type)) {
                Nl = s.stateNode, at = !1;
                break l;
              }
              break;
            case 5:
              Nl = s.stateNode, at = !1;
              break l;
            case 3:
            case 4:
              Nl = s.stateNode.containerInfo, at = !0;
              break l;
          }
          s = s.return;
        }
        if (Nl === null) throw Error(f(160));
        Zr(u, i, n), Nl = null, at = !1, u = n.alternate, u !== null && (u.return = null), n.return = null;
      }
    if (t.subtreeFlags & 13886)
      for (t = t.child; t !== null; )
        kr(t, l), t = t.sibling;
  }
  var Mt = null;
  function kr(l, t) {
    var e = l.alternate, a = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        nt(t, l), ut(l), a & 4 && (_e(3, l, l.return), bn(3, l), _e(5, l, l.return));
        break;
      case 1:
        nt(t, l), ut(l), a & 512 && (Ll || e === null || Lt(e, e.return)), a & 64 && te && (l = l.updateQueue, l !== null && (a = l.callbacks, a !== null && (e = l.shared.hiddenCallbacks, l.shared.hiddenCallbacks = e === null ? a : e.concat(a))));
        break;
      case 26:
        var n = Mt;
        if (nt(t, l), ut(l), a & 512 && (Ll || e === null || Lt(e, e.return)), a & 4) {
          var u = e !== null ? e.memoizedState : null;
          if (a = l.memoizedState, e === null)
            if (a === null)
              if (l.stateNode === null) {
                l: {
                  a = l.type, e = l.memoizedProps, n = n.ownerDocument || n;
                  t: switch (a) {
                    case "title":
                      u = n.getElementsByTagName("title")[0], (!u || u[Ka] || u[Vl] || u.namespaceURI === "http://www.w3.org/2000/svg" || u.hasAttribute("itemprop")) && (u = n.createElement(a), n.head.insertBefore(
                        u,
                        n.querySelector("head > title")
                      )), kl(u, a, e), u[Vl] = l, Ql(u), a = u;
                      break l;
                    case "link":
                      var i = kd(
                        "link",
                        "href",
                        n
                      ).get(a + (e.href || ""));
                      if (i) {
                        for (var s = 0; s < i.length; s++)
                          if (u = i[s], u.getAttribute("href") === (e.href == null || e.href === "" ? null : e.href) && u.getAttribute("rel") === (e.rel == null ? null : e.rel) && u.getAttribute("title") === (e.title == null ? null : e.title) && u.getAttribute("crossorigin") === (e.crossOrigin == null ? null : e.crossOrigin)) {
                            i.splice(s, 1);
                            break t;
                          }
                      }
                      u = n.createElement(a), kl(u, a, e), n.head.appendChild(u);
                      break;
                    case "meta":
                      if (i = kd(
                        "meta",
                        "content",
                        n
                      ).get(a + (e.content || ""))) {
                        for (s = 0; s < i.length; s++)
                          if (u = i[s], u.getAttribute("content") === (e.content == null ? null : "" + e.content) && u.getAttribute("name") === (e.name == null ? null : e.name) && u.getAttribute("property") === (e.property == null ? null : e.property) && u.getAttribute("http-equiv") === (e.httpEquiv == null ? null : e.httpEquiv) && u.getAttribute("charset") === (e.charSet == null ? null : e.charSet)) {
                            i.splice(s, 1);
                            break t;
                          }
                      }
                      u = n.createElement(a), kl(u, a, e), n.head.appendChild(u);
                      break;
                    default:
                      throw Error(f(468, a));
                  }
                  u[Vl] = l, Ql(u), a = u;
                }
                l.stateNode = a;
              } else
                $d(
                  n,
                  l.type,
                  l.stateNode
                );
            else
              l.stateNode = Jd(
                n,
                a,
                l.memoizedProps
              );
          else
            u !== a ? (u === null ? e.stateNode !== null && (e = e.stateNode, e.parentNode.removeChild(e)) : u.count--, a === null ? $d(
              n,
              l.type,
              l.stateNode
            ) : Jd(
              n,
              a,
              l.memoizedProps
            )) : a === null && l.stateNode !== null && Jc(
              l,
              l.memoizedProps,
              e.memoizedProps
            );
        }
        break;
      case 27:
        nt(t, l), ut(l), a & 512 && (Ll || e === null || Lt(e, e.return)), e !== null && a & 4 && Jc(
          l,
          l.memoizedProps,
          e.memoizedProps
        );
        break;
      case 5:
        if (nt(t, l), ut(l), a & 512 && (Ll || e === null || Lt(e, e.return)), l.flags & 32) {
          n = l.stateNode;
          try {
            fa(n, "");
          } catch (B) {
            vl(l, l.return, B);
          }
        }
        a & 4 && l.stateNode != null && (n = l.memoizedProps, Jc(
          l,
          n,
          e !== null ? e.memoizedProps : n
        )), a & 1024 && (Wc = !0);
        break;
      case 6:
        if (nt(t, l), ut(l), a & 4) {
          if (l.stateNode === null)
            throw Error(f(162));
          a = l.memoizedProps, e = l.stateNode;
          try {
            e.nodeValue = a;
          } catch (B) {
            vl(l, l.return, B);
          }
        }
        break;
      case 3:
        if ($u = null, n = Mt, Mt = Ju(t.containerInfo), nt(t, l), Mt = n, ut(l), a & 4 && e !== null && e.memoizedState.isDehydrated)
          try {
            Ya(t.containerInfo);
          } catch (B) {
            vl(l, l.return, B);
          }
        Wc && (Wc = !1, $r(l));
        break;
      case 4:
        a = Mt, Mt = Ju(
          l.stateNode.containerInfo
        ), nt(t, l), ut(l), Mt = a;
        break;
      case 12:
        nt(t, l), ut(l);
        break;
      case 31:
        nt(t, l), ut(l), a & 4 && (a = l.updateQueue, a !== null && (l.updateQueue = null, Uu(l, a)));
        break;
      case 13:
        nt(t, l), ut(l), l.child.flags & 8192 && l.memoizedState !== null != (e !== null && e.memoizedState !== null) && (Hu = ft()), a & 4 && (a = l.updateQueue, a !== null && (l.updateQueue = null, Uu(l, a)));
        break;
      case 22:
        n = l.memoizedState !== null;
        var m = e !== null && e.memoizedState !== null, b = te, T = Ll;
        if (te = b || n, Ll = T || m, nt(t, l), Ll = T, te = b, ut(l), a & 8192)
          l: for (t = l.stateNode, t._visibility = n ? t._visibility & -2 : t._visibility | 1, n && (e === null || m || te || Ll || Pe(l)), e = null, t = l; ; ) {
            if (t.tag === 5 || t.tag === 26) {
              if (e === null) {
                m = e = t;
                try {
                  if (u = m.stateNode, n)
                    i = u.style, typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none";
                  else {
                    s = m.stateNode;
                    var N = m.memoizedProps.style, _ = N != null && N.hasOwnProperty("display") ? N.display : null;
                    s.style.display = _ == null || typeof _ == "boolean" ? "" : ("" + _).trim();
                  }
                } catch (B) {
                  vl(m, m.return, B);
                }
              }
            } else if (t.tag === 6) {
              if (e === null) {
                m = t;
                try {
                  m.stateNode.nodeValue = n ? "" : m.memoizedProps;
                } catch (B) {
                  vl(m, m.return, B);
                }
              }
            } else if (t.tag === 18) {
              if (e === null) {
                m = t;
                try {
                  var E = m.stateNode;
                  n ? Ld(E, !0) : Ld(m.stateNode, !1);
                } catch (B) {
                  vl(m, m.return, B);
                }
              }
            } else if ((t.tag !== 22 && t.tag !== 23 || t.memoizedState === null || t === l) && t.child !== null) {
              t.child.return = t, t = t.child;
              continue;
            }
            if (t === l) break l;
            for (; t.sibling === null; ) {
              if (t.return === null || t.return === l) break l;
              e === t && (e = null), t = t.return;
            }
            e === t && (e = null), t.sibling.return = t.return, t = t.sibling;
          }
        a & 4 && (a = l.updateQueue, a !== null && (e = a.retryQueue, e !== null && (a.retryQueue = null, Uu(l, e))));
        break;
      case 19:
        nt(t, l), ut(l), a & 4 && (a = l.updateQueue, a !== null && (l.updateQueue = null, Uu(l, a)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        nt(t, l), ut(l);
    }
  }
  function ut(l) {
    var t = l.flags;
    if (t & 2) {
      try {
        for (var e, a = l.return; a !== null; ) {
          if (Gr(a)) {
            e = a;
            break;
          }
          a = a.return;
        }
        if (e == null) throw Error(f(160));
        switch (e.tag) {
          case 27:
            var n = e.stateNode, u = kc(l);
            Du(l, u, n);
            break;
          case 5:
            var i = e.stateNode;
            e.flags & 32 && (fa(i, ""), e.flags &= -33);
            var s = kc(l);
            Du(l, s, i);
            break;
          case 3:
          case 4:
            var m = e.stateNode.containerInfo, b = kc(l);
            $c(
              l,
              b,
              m
            );
            break;
          default:
            throw Error(f(161));
        }
      } catch (T) {
        vl(l, l.return, T);
      }
      l.flags &= -3;
    }
    t & 4096 && (l.flags &= -4097);
  }
  function $r(l) {
    if (l.subtreeFlags & 1024)
      for (l = l.child; l !== null; ) {
        var t = l;
        $r(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), l = l.sibling;
      }
  }
  function ae(l, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null; )
        Xr(l, t.alternate, t), t = t.sibling;
  }
  function Pe(l) {
    for (l = l.child; l !== null; ) {
      var t = l;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          _e(4, t, t.return), Pe(t);
          break;
        case 1:
          Lt(t, t.return);
          var e = t.stateNode;
          typeof e.componentWillUnmount == "function" && Lr(
            t,
            t.return,
            e
          ), Pe(t);
          break;
        case 27:
          Cn(t.stateNode);
        case 26:
        case 5:
          Lt(t, t.return), Pe(t);
          break;
        case 22:
          t.memoizedState === null && Pe(t);
          break;
        case 30:
          Pe(t);
          break;
        default:
          Pe(t);
      }
      l = l.sibling;
    }
  }
  function ne(l, t, e) {
    for (e = e && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
      var a = t.alternate, n = l, u = t, i = u.flags;
      switch (u.tag) {
        case 0:
        case 11:
        case 15:
          ne(
            n,
            u,
            e
          ), bn(4, u);
          break;
        case 1:
          if (ne(
            n,
            u,
            e
          ), a = u, n = a.stateNode, typeof n.componentDidMount == "function")
            try {
              n.componentDidMount();
            } catch (b) {
              vl(a, a.return, b);
            }
          if (a = u, n = a.updateQueue, n !== null) {
            var s = a.stateNode;
            try {
              var m = n.shared.hiddenCallbacks;
              if (m !== null)
                for (n.shared.hiddenCallbacks = null, n = 0; n < m.length; n++)
                  zo(m[n], s);
            } catch (b) {
              vl(a, a.return, b);
            }
          }
          e && i & 64 && Br(u), Sn(u, u.return);
          break;
        case 27:
          wr(u);
        case 26:
        case 5:
          ne(
            n,
            u,
            e
          ), e && a === null && i & 4 && Yr(u), Sn(u, u.return);
          break;
        case 12:
          ne(
            n,
            u,
            e
          );
          break;
        case 31:
          ne(
            n,
            u,
            e
          ), e && i & 4 && Kr(n, u);
          break;
        case 13:
          ne(
            n,
            u,
            e
          ), e && i & 4 && Jr(n, u);
          break;
        case 22:
          u.memoizedState === null && ne(
            n,
            u,
            e
          ), Sn(u, u.return);
          break;
        case 30:
          break;
        default:
          ne(
            n,
            u,
            e
          );
      }
      t = t.sibling;
    }
  }
  function Fc(l, t) {
    var e = null;
    l !== null && l.memoizedState !== null && l.memoizedState.cachePool !== null && (e = l.memoizedState.cachePool.pool), l = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (l = t.memoizedState.cachePool.pool), l !== e && (l != null && l.refCount++, e != null && un(e));
  }
  function Ic(l, t) {
    l = null, t.alternate !== null && (l = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== l && (t.refCount++, l != null && un(l));
  }
  function Ot(l, t, e, a) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; )
        Wr(
          l,
          t,
          e,
          a
        ), t = t.sibling;
  }
  function Wr(l, t, e, a) {
    var n = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        Ot(
          l,
          t,
          e,
          a
        ), n & 2048 && bn(9, t);
        break;
      case 1:
        Ot(
          l,
          t,
          e,
          a
        );
        break;
      case 3:
        Ot(
          l,
          t,
          e,
          a
        ), n & 2048 && (l = null, t.alternate !== null && (l = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== l && (t.refCount++, l != null && un(l)));
        break;
      case 12:
        if (n & 2048) {
          Ot(
            l,
            t,
            e,
            a
          ), l = t.stateNode;
          try {
            var u = t.memoizedProps, i = u.id, s = u.onPostCommit;
            typeof s == "function" && s(
              i,
              t.alternate === null ? "mount" : "update",
              l.passiveEffectDuration,
              -0
            );
          } catch (m) {
            vl(t, t.return, m);
          }
        } else
          Ot(
            l,
            t,
            e,
            a
          );
        break;
      case 31:
        Ot(
          l,
          t,
          e,
          a
        );
        break;
      case 13:
        Ot(
          l,
          t,
          e,
          a
        );
        break;
      case 23:
        break;
      case 22:
        u = t.stateNode, i = t.alternate, t.memoizedState !== null ? u._visibility & 2 ? Ot(
          l,
          t,
          e,
          a
        ) : _n(l, t) : u._visibility & 2 ? Ot(
          l,
          t,
          e,
          a
        ) : (u._visibility |= 2, ja(
          l,
          t,
          e,
          a,
          (t.subtreeFlags & 10256) !== 0 || !1
        )), n & 2048 && Fc(i, t);
        break;
      case 24:
        Ot(
          l,
          t,
          e,
          a
        ), n & 2048 && Ic(t.alternate, t);
        break;
      default:
        Ot(
          l,
          t,
          e,
          a
        );
    }
  }
  function ja(l, t, e, a, n) {
    for (n = n && ((t.subtreeFlags & 10256) !== 0 || !1), t = t.child; t !== null; ) {
      var u = l, i = t, s = e, m = a, b = i.flags;
      switch (i.tag) {
        case 0:
        case 11:
        case 15:
          ja(
            u,
            i,
            s,
            m,
            n
          ), bn(8, i);
          break;
        case 23:
          break;
        case 22:
          var T = i.stateNode;
          i.memoizedState !== null ? T._visibility & 2 ? ja(
            u,
            i,
            s,
            m,
            n
          ) : _n(
            u,
            i
          ) : (T._visibility |= 2, ja(
            u,
            i,
            s,
            m,
            n
          )), n && b & 2048 && Fc(
            i.alternate,
            i
          );
          break;
        case 24:
          ja(
            u,
            i,
            s,
            m,
            n
          ), n && b & 2048 && Ic(i.alternate, i);
          break;
        default:
          ja(
            u,
            i,
            s,
            m,
            n
          );
      }
      t = t.sibling;
    }
  }
  function _n(l, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) {
        var e = l, a = t, n = a.flags;
        switch (a.tag) {
          case 22:
            _n(e, a), n & 2048 && Fc(
              a.alternate,
              a
            );
            break;
          case 24:
            _n(e, a), n & 2048 && Ic(a.alternate, a);
            break;
          default:
            _n(e, a);
        }
        t = t.sibling;
      }
  }
  var En = 8192;
  function Ca(l, t, e) {
    if (l.subtreeFlags & En)
      for (l = l.child; l !== null; )
        Fr(
          l,
          t,
          e
        ), l = l.sibling;
  }
  function Fr(l, t, e) {
    switch (l.tag) {
      case 26:
        Ca(
          l,
          t,
          e
        ), l.flags & En && l.memoizedState !== null && ch(
          e,
          Mt,
          l.memoizedState,
          l.memoizedProps
        );
        break;
      case 5:
        Ca(
          l,
          t,
          e
        );
        break;
      case 3:
      case 4:
        var a = Mt;
        Mt = Ju(l.stateNode.containerInfo), Ca(
          l,
          t,
          e
        ), Mt = a;
        break;
      case 22:
        l.memoizedState === null && (a = l.alternate, a !== null && a.memoizedState !== null ? (a = En, En = 16777216, Ca(
          l,
          t,
          e
        ), En = a) : Ca(
          l,
          t,
          e
        ));
        break;
      default:
        Ca(
          l,
          t,
          e
        );
    }
  }
  function Ir(l) {
    var t = l.alternate;
    if (t !== null && (l = t.child, l !== null)) {
      t.child = null;
      do
        t = l.sibling, l.sibling = null, l = t;
      while (l !== null);
    }
  }
  function xn(l) {
    var t = l.deletions;
    if ((l.flags & 16) !== 0) {
      if (t !== null)
        for (var e = 0; e < t.length; e++) {
          var a = t[e];
          Xl = a, ld(
            a,
            l
          );
        }
      Ir(l);
    }
    if (l.subtreeFlags & 10256)
      for (l = l.child; l !== null; )
        Pr(l), l = l.sibling;
  }
  function Pr(l) {
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        xn(l), l.flags & 2048 && _e(9, l, l.return);
        break;
      case 3:
        xn(l);
        break;
      case 12:
        xn(l);
        break;
      case 22:
        var t = l.stateNode;
        l.memoizedState !== null && t._visibility & 2 && (l.return === null || l.return.tag !== 13) ? (t._visibility &= -3, Ru(l)) : xn(l);
        break;
      default:
        xn(l);
    }
  }
  function Ru(l) {
    var t = l.deletions;
    if ((l.flags & 16) !== 0) {
      if (t !== null)
        for (var e = 0; e < t.length; e++) {
          var a = t[e];
          Xl = a, ld(
            a,
            l
          );
        }
      Ir(l);
    }
    for (l = l.child; l !== null; ) {
      switch (t = l, t.tag) {
        case 0:
        case 11:
        case 15:
          _e(8, t, t.return), Ru(t);
          break;
        case 22:
          e = t.stateNode, e._visibility & 2 && (e._visibility &= -3, Ru(t));
          break;
        default:
          Ru(t);
      }
      l = l.sibling;
    }
  }
  function ld(l, t) {
    for (; Xl !== null; ) {
      var e = Xl;
      switch (e.tag) {
        case 0:
        case 11:
        case 15:
          _e(8, e, t);
          break;
        case 23:
        case 22:
          if (e.memoizedState !== null && e.memoizedState.cachePool !== null) {
            var a = e.memoizedState.cachePool.pool;
            a != null && a.refCount++;
          }
          break;
        case 24:
          un(e.memoizedState.cache);
      }
      if (a = e.child, a !== null) a.return = e, Xl = a;
      else
        l: for (e = l; Xl !== null; ) {
          a = Xl;
          var n = a.sibling, u = a.return;
          if (Vr(a), a === e) {
            Xl = null;
            break l;
          }
          if (n !== null) {
            n.return = u, Xl = n;
            break l;
          }
          Xl = u;
        }
    }
  }
  var Em = {
    getCacheForType: function(l) {
      var t = Kl(Hl), e = t.data.get(l);
      return e === void 0 && (e = l(), t.data.set(l, e)), e;
    },
    cacheSignal: function() {
      return Kl(Hl).controller.signal;
    }
  }, xm = typeof WeakMap == "function" ? WeakMap : Map, dl = 0, El = null, nl = null, il = 0, hl = 0, vt = null, Ee = !1, Ma = !1, Pc = !1, ue = 0, Cl = 0, xe = 0, la = 0, lf = 0, yt = 0, Oa = 0, Tn = null, it = null, tf = !1, Hu = 0, td = 0, qu = 1 / 0, Bu = null, Te = null, Gl = 0, Ae = null, Da = null, ie = 0, ef = 0, af = null, ed = null, An = 0, nf = null;
  function gt() {
    return (dl & 2) !== 0 && il !== 0 ? il & -il : A.T !== null ? rf() : gs();
  }
  function ad() {
    if (yt === 0)
      if ((il & 536870912) === 0 || fl) {
        var l = Zn;
        Zn <<= 1, (Zn & 3932160) === 0 && (Zn = 262144), yt = l;
      } else yt = 536870912;
    return l = mt.current, l !== null && (l.flags |= 32), yt;
  }
  function ct(l, t, e) {
    (l === El && (hl === 2 || hl === 9) || l.cancelPendingCommit !== null) && (Ua(l, 0), ze(
      l,
      il,
      yt,
      !1
    )), Za(l, e), ((dl & 2) === 0 || l !== El) && (l === El && ((dl & 2) === 0 && (la |= e), Cl === 4 && ze(
      l,
      il,
      yt,
      !1
    )), Yt(l));
  }
  function nd(l, t, e) {
    if ((dl & 6) !== 0) throw Error(f(327));
    var a = !e && (t & 127) === 0 && (t & l.expiredLanes) === 0 || Va(l, t), n = a ? zm(l, t) : cf(l, t, !0), u = a;
    do {
      if (n === 0) {
        Ma && !a && ze(l, t, 0, !1);
        break;
      } else {
        if (e = l.current.alternate, u && !Tm(e)) {
          n = cf(l, t, !1), u = !1;
          continue;
        }
        if (n === 2) {
          if (u = t, l.errorRecoveryDisabledLanes & u)
            var i = 0;
          else
            i = l.pendingLanes & -536870913, i = i !== 0 ? i : i & 536870912 ? 536870912 : 0;
          if (i !== 0) {
            t = i;
            l: {
              var s = l;
              n = Tn;
              var m = s.current.memoizedState.isDehydrated;
              if (m && (Ua(s, i).flags |= 256), i = cf(
                s,
                i,
                !1
              ), i !== 2) {
                if (Pc && !m) {
                  s.errorRecoveryDisabledLanes |= u, la |= u, n = 4;
                  break l;
                }
                u = it, it = n, u !== null && (it === null ? it = u : it.push.apply(
                  it,
                  u
                ));
              }
              n = i;
            }
            if (u = !1, n !== 2) continue;
          }
        }
        if (n === 1) {
          Ua(l, 0), ze(l, t, 0, !0);
          break;
        }
        l: {
          switch (a = l, u = n, u) {
            case 0:
            case 1:
              throw Error(f(345));
            case 4:
              if ((t & 4194048) !== t) break;
            case 6:
              ze(
                a,
                t,
                yt,
                !Ee
              );
              break l;
            case 2:
              it = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(f(329));
          }
          if ((t & 62914560) === t && (n = Hu + 300 - ft(), 10 < n)) {
            if (ze(
              a,
              t,
              yt,
              !Ee
            ), Jn(a, 0, !0) !== 0) break l;
            ie = t, a.timeoutHandle = Hd(
              ud.bind(
                null,
                a,
                e,
                it,
                Bu,
                tf,
                t,
                yt,
                la,
                Oa,
                Ee,
                u,
                "Throttled",
                -0,
                0
              ),
              n
            );
            break l;
          }
          ud(
            a,
            e,
            it,
            Bu,
            tf,
            t,
            yt,
            la,
            Oa,
            Ee,
            u,
            null,
            -0,
            0
          );
        }
      }
      break;
    } while (!0);
    Yt(l);
  }
  function ud(l, t, e, a, n, u, i, s, m, b, T, N, _, E) {
    if (l.timeoutHandle = -1, N = t.subtreeFlags, N & 8192 || (N & 16785408) === 16785408) {
      N = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: Zt
      }, Fr(
        t,
        u,
        N
      );
      var B = (u & 62914560) === u ? Hu - ft() : (u & 4194048) === u ? td - ft() : 0;
      if (B = fh(
        N,
        B
      ), B !== null) {
        ie = u, l.cancelPendingCommit = B(
          md.bind(
            null,
            l,
            t,
            u,
            e,
            a,
            n,
            i,
            s,
            m,
            T,
            N,
            null,
            _,
            E
          )
        ), ze(l, u, i, !b);
        return;
      }
    }
    md(
      l,
      t,
      u,
      e,
      a,
      n,
      i,
      s,
      m
    );
  }
  function Tm(l) {
    for (var t = l; ; ) {
      var e = t.tag;
      if ((e === 0 || e === 11 || e === 15) && t.flags & 16384 && (e = t.updateQueue, e !== null && (e = e.stores, e !== null)))
        for (var a = 0; a < e.length; a++) {
          var n = e[a], u = n.getSnapshot;
          n = n.value;
          try {
            if (!rt(u(), n)) return !1;
          } catch {
            return !1;
          }
        }
      if (e = t.child, t.subtreeFlags & 16384 && e !== null)
        e.return = t, t = e;
      else {
        if (t === l) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === l) return !0;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
    }
    return !0;
  }
  function ze(l, t, e, a) {
    t &= ~lf, t &= ~la, l.suspendedLanes |= t, l.pingedLanes &= ~t, a && (l.warmLanes |= t), a = l.expirationTimes;
    for (var n = t; 0 < n; ) {
      var u = 31 - ot(n), i = 1 << u;
      a[u] = -1, n &= ~i;
    }
    e !== 0 && hs(l, e, t);
  }
  function Lu() {
    return (dl & 6) === 0 ? (zn(0), !1) : !0;
  }
  function uf() {
    if (nl !== null) {
      if (hl === 0)
        var l = nl.return;
      else
        l = nl, $t = Ze = null, _c(l), xa = null, fn = 0, l = nl;
      for (; l !== null; )
        qr(l.alternate, l), l = l.return;
      nl = null;
    }
  }
  function Ua(l, t) {
    var e = l.timeoutHandle;
    e !== -1 && (l.timeoutHandle = -1, Vm(e)), e = l.cancelPendingCommit, e !== null && (l.cancelPendingCommit = null, e()), ie = 0, uf(), El = l, nl = e = Jt(l.current, null), il = t, hl = 0, vt = null, Ee = !1, Ma = Va(l, t), Pc = !1, Oa = yt = lf = la = xe = Cl = 0, it = Tn = null, tf = !1, (t & 8) !== 0 && (t |= t & 32);
    var a = l.entangledLanes;
    if (a !== 0)
      for (l = l.entanglements, a &= t; 0 < a; ) {
        var n = 31 - ot(a), u = 1 << n;
        t |= l[n], a &= ~u;
      }
    return ue = t, uu(), e;
  }
  function id(l, t) {
    W = null, A.H = yn, t === Ea || t === mu ? (t = Eo(), hl = 3) : t === sc ? (t = Eo(), hl = 4) : hl = t === Bc ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1, vt = t, nl === null && (Cl = 1, Nu(
      l,
      _t(t, l.current)
    ));
  }
  function cd() {
    var l = mt.current;
    return l === null ? !0 : (il & 4194048) === il ? At === null : (il & 62914560) === il || (il & 536870912) !== 0 ? l === At : !1;
  }
  function fd() {
    var l = A.H;
    return A.H = yn, l === null ? yn : l;
  }
  function sd() {
    var l = A.A;
    return A.A = Em, l;
  }
  function Yu() {
    Cl = 4, Ee || (il & 4194048) !== il && mt.current !== null || (Ma = !0), (xe & 134217727) === 0 && (la & 134217727) === 0 || El === null || ze(
      El,
      il,
      yt,
      !1
    );
  }
  function cf(l, t, e) {
    var a = dl;
    dl |= 2;
    var n = fd(), u = sd();
    (El !== l || il !== t) && (Bu = null, Ua(l, t)), t = !1;
    var i = Cl;
    l: do
      try {
        if (hl !== 0 && nl !== null) {
          var s = nl, m = vt;
          switch (hl) {
            case 8:
              uf(), i = 6;
              break l;
            case 3:
            case 2:
            case 9:
            case 6:
              mt.current === null && (t = !0);
              var b = hl;
              if (hl = 0, vt = null, Ra(l, s, m, b), e && Ma) {
                i = 0;
                break l;
              }
              break;
            default:
              b = hl, hl = 0, vt = null, Ra(l, s, m, b);
          }
        }
        Am(), i = Cl;
        break;
      } catch (T) {
        id(l, T);
      }
    while (!0);
    return t && l.shellSuspendCounter++, $t = Ze = null, dl = a, A.H = n, A.A = u, nl === null && (El = null, il = 0, uu()), i;
  }
  function Am() {
    for (; nl !== null; ) od(nl);
  }
  function zm(l, t) {
    var e = dl;
    dl |= 2;
    var a = fd(), n = sd();
    El !== l || il !== t ? (Bu = null, qu = ft() + 500, Ua(l, t)) : Ma = Va(
      l,
      t
    );
    l: do
      try {
        if (hl !== 0 && nl !== null) {
          t = nl;
          var u = vt;
          t: switch (hl) {
            case 1:
              hl = 0, vt = null, Ra(l, t, u, 1);
              break;
            case 2:
            case 9:
              if (So(u)) {
                hl = 0, vt = null, rd(t);
                break;
              }
              t = function() {
                hl !== 2 && hl !== 9 || El !== l || (hl = 7), Yt(l);
              }, u.then(t, t);
              break l;
            case 3:
              hl = 7;
              break l;
            case 4:
              hl = 5;
              break l;
            case 7:
              So(u) ? (hl = 0, vt = null, rd(t)) : (hl = 0, vt = null, Ra(l, t, u, 7));
              break;
            case 5:
              var i = null;
              switch (nl.tag) {
                case 26:
                  i = nl.memoizedState;
                case 5:
                case 27:
                  var s = nl;
                  if (i ? Wd(i) : s.stateNode.complete) {
                    hl = 0, vt = null;
                    var m = s.sibling;
                    if (m !== null) nl = m;
                    else {
                      var b = s.return;
                      b !== null ? (nl = b, Gu(b)) : nl = null;
                    }
                    break t;
                  }
              }
              hl = 0, vt = null, Ra(l, t, u, 5);
              break;
            case 6:
              hl = 0, vt = null, Ra(l, t, u, 6);
              break;
            case 8:
              uf(), Cl = 6;
              break l;
            default:
              throw Error(f(462));
          }
        }
        Nm();
        break;
      } catch (T) {
        id(l, T);
      }
    while (!0);
    return $t = Ze = null, A.H = a, A.A = n, dl = e, nl !== null ? 0 : (El = null, il = 0, uu(), Cl);
  }
  function Nm() {
    for (; nl !== null && !W1(); )
      od(nl);
  }
  function od(l) {
    var t = Rr(l.alternate, l, ue);
    l.memoizedProps = l.pendingProps, t === null ? Gu(l) : nl = t;
  }
  function rd(l) {
    var t = l, e = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = jr(
          e,
          t,
          t.pendingProps,
          t.type,
          void 0,
          il
        );
        break;
      case 11:
        t = jr(
          e,
          t,
          t.pendingProps,
          t.type.render,
          t.ref,
          il
        );
        break;
      case 5:
        _c(t);
      default:
        qr(e, t), t = nl = fo(t, ue), t = Rr(e, t, ue);
    }
    l.memoizedProps = l.pendingProps, t === null ? Gu(l) : nl = t;
  }
  function Ra(l, t, e, a) {
    $t = Ze = null, _c(t), xa = null, fn = 0;
    var n = t.return;
    try {
      if (vm(
        l,
        n,
        t,
        e,
        il
      )) {
        Cl = 1, Nu(
          l,
          _t(e, l.current)
        ), nl = null;
        return;
      }
    } catch (u) {
      if (n !== null) throw nl = n, u;
      Cl = 1, Nu(
        l,
        _t(e, l.current)
      ), nl = null;
      return;
    }
    t.flags & 32768 ? (fl || a === 1 ? l = !0 : Ma || (il & 536870912) !== 0 ? l = !1 : (Ee = l = !0, (a === 2 || a === 9 || a === 3 || a === 6) && (a = mt.current, a !== null && a.tag === 13 && (a.flags |= 16384))), dd(t, l)) : Gu(t);
  }
  function Gu(l) {
    var t = l;
    do {
      if ((t.flags & 32768) !== 0) {
        dd(
          t,
          Ee
        );
        return;
      }
      l = t.return;
      var e = pm(
        t.alternate,
        t,
        ue
      );
      if (e !== null) {
        nl = e;
        return;
      }
      if (t = t.sibling, t !== null) {
        nl = t;
        return;
      }
      nl = t = l;
    } while (t !== null);
    Cl === 0 && (Cl = 5);
  }
  function dd(l, t) {
    do {
      var e = bm(l.alternate, l);
      if (e !== null) {
        e.flags &= 32767, nl = e;
        return;
      }
      if (e = l.return, e !== null && (e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null), !t && (l = l.sibling, l !== null)) {
        nl = l;
        return;
      }
      nl = l = e;
    } while (l !== null);
    Cl = 6, nl = null;
  }
  function md(l, t, e, a, n, u, i, s, m) {
    l.cancelPendingCommit = null;
    do
      wu();
    while (Gl !== 0);
    if ((dl & 6) !== 0) throw Error(f(327));
    if (t !== null) {
      if (t === l.current) throw Error(f(177));
      if (u = t.lanes | t.childLanes, u |= ki, i0(
        l,
        e,
        u,
        i,
        s,
        m
      ), l === El && (nl = El = null, il = 0), Da = t, Ae = l, ie = e, ef = u, af = n, ed = a, (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (l.callbackNode = null, l.callbackPriority = 0, Om(Xn, function() {
        return pd(), null;
      })) : (l.callbackNode = null, l.callbackPriority = 0), a = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || a) {
        a = A.T, A.T = null, n = U.p, U.p = 2, i = dl, dl |= 4;
        try {
          Sm(l, t, e);
        } finally {
          dl = i, U.p = n, A.T = a;
        }
      }
      Gl = 1, hd(), vd(), yd();
    }
  }
  function hd() {
    if (Gl === 1) {
      Gl = 0;
      var l = Ae, t = Da, e = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || e) {
        e = A.T, A.T = null;
        var a = U.p;
        U.p = 2;
        var n = dl;
        dl |= 4;
        try {
          kr(t, l);
          var u = bf, i = Ps(l.containerInfo), s = u.focusedElem, m = u.selectionRange;
          if (i !== s && s && s.ownerDocument && Is(
            s.ownerDocument.documentElement,
            s
          )) {
            if (m !== null && Xi(s)) {
              var b = m.start, T = m.end;
              if (T === void 0 && (T = b), "selectionStart" in s)
                s.selectionStart = b, s.selectionEnd = Math.min(
                  T,
                  s.value.length
                );
              else {
                var N = s.ownerDocument || document, _ = N && N.defaultView || window;
                if (_.getSelection) {
                  var E = _.getSelection(), B = s.textContent.length, X = Math.min(m.start, B), Sl = m.end === void 0 ? X : Math.min(m.end, B);
                  !E.extend && X > Sl && (i = Sl, Sl = X, X = i);
                  var y = Fs(
                    s,
                    X
                  ), h = Fs(
                    s,
                    Sl
                  );
                  if (y && h && (E.rangeCount !== 1 || E.anchorNode !== y.node || E.anchorOffset !== y.offset || E.focusNode !== h.node || E.focusOffset !== h.offset)) {
                    var p = N.createRange();
                    p.setStart(y.node, y.offset), E.removeAllRanges(), X > Sl ? (E.addRange(p), E.extend(h.node, h.offset)) : (p.setEnd(h.node, h.offset), E.addRange(p));
                  }
                }
              }
            }
            for (N = [], E = s; E = E.parentNode; )
              E.nodeType === 1 && N.push({
                element: E,
                left: E.scrollLeft,
                top: E.scrollTop
              });
            for (typeof s.focus == "function" && s.focus(), s = 0; s < N.length; s++) {
              var z = N[s];
              z.element.scrollLeft = z.left, z.element.scrollTop = z.top;
            }
          }
          Pu = !!pf, bf = pf = null;
        } finally {
          dl = n, U.p = a, A.T = e;
        }
      }
      l.current = t, Gl = 2;
    }
  }
  function vd() {
    if (Gl === 2) {
      Gl = 0;
      var l = Ae, t = Da, e = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || e) {
        e = A.T, A.T = null;
        var a = U.p;
        U.p = 2;
        var n = dl;
        dl |= 4;
        try {
          Xr(l, t.alternate, t);
        } finally {
          dl = n, U.p = a, A.T = e;
        }
      }
      Gl = 3;
    }
  }
  function yd() {
    if (Gl === 4 || Gl === 3) {
      Gl = 0, F1();
      var l = Ae, t = Da, e = ie, a = ed;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? Gl = 5 : (Gl = 0, Da = Ae = null, gd(l, l.pendingLanes));
      var n = l.pendingLanes;
      if (n === 0 && (Te = null), Ti(e), t = t.stateNode, st && typeof st.onCommitFiberRoot == "function")
        try {
          st.onCommitFiberRoot(
            Xa,
            t,
            void 0,
            (t.current.flags & 128) === 128
          );
        } catch {
        }
      if (a !== null) {
        t = A.T, n = U.p, U.p = 2, A.T = null;
        try {
          for (var u = l.onRecoverableError, i = 0; i < a.length; i++) {
            var s = a[i];
            u(s.value, {
              componentStack: s.stack
            });
          }
        } finally {
          A.T = t, U.p = n;
        }
      }
      (ie & 3) !== 0 && wu(), Yt(l), n = l.pendingLanes, (e & 261930) !== 0 && (n & 42) !== 0 ? l === nf ? An++ : (An = 0, nf = l) : An = 0, zn(0);
    }
  }
  function gd(l, t) {
    (l.pooledCacheLanes &= t) === 0 && (t = l.pooledCache, t != null && (l.pooledCache = null, un(t)));
  }
  function wu() {
    return hd(), vd(), yd(), pd();
  }
  function pd() {
    if (Gl !== 5) return !1;
    var l = Ae, t = ef;
    ef = 0;
    var e = Ti(ie), a = A.T, n = U.p;
    try {
      U.p = 32 > e ? 32 : e, A.T = null, e = af, af = null;
      var u = Ae, i = ie;
      if (Gl = 0, Da = Ae = null, ie = 0, (dl & 6) !== 0) throw Error(f(331));
      var s = dl;
      if (dl |= 4, Pr(u.current), Wr(
        u,
        u.current,
        i,
        e
      ), dl = s, zn(0, !1), st && typeof st.onPostCommitFiberRoot == "function")
        try {
          st.onPostCommitFiberRoot(Xa, u);
        } catch {
        }
      return !0;
    } finally {
      U.p = n, A.T = a, gd(l, t);
    }
  }
  function bd(l, t, e) {
    t = _t(e, t), t = qc(l.stateNode, t, 2), l = pe(l, t, 2), l !== null && (Za(l, 2), Yt(l));
  }
  function vl(l, t, e) {
    if (l.tag === 3)
      bd(l, l, e);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          bd(
            t,
            l,
            e
          );
          break;
        } else if (t.tag === 1) {
          var a = t.stateNode;
          if (typeof t.type.getDerivedStateFromError == "function" || typeof a.componentDidCatch == "function" && (Te === null || !Te.has(a))) {
            l = _t(e, l), e = Sr(2), a = pe(t, e, 2), a !== null && (_r(
              e,
              a,
              t,
              l
            ), Za(a, 2), Yt(a));
            break;
          }
        }
        t = t.return;
      }
  }
  function ff(l, t, e) {
    var a = l.pingCache;
    if (a === null) {
      a = l.pingCache = new xm();
      var n = /* @__PURE__ */ new Set();
      a.set(t, n);
    } else
      n = a.get(t), n === void 0 && (n = /* @__PURE__ */ new Set(), a.set(t, n));
    n.has(e) || (Pc = !0, n.add(e), l = jm.bind(null, l, t, e), t.then(l, l));
  }
  function jm(l, t, e) {
    var a = l.pingCache;
    a !== null && a.delete(t), l.pingedLanes |= l.suspendedLanes & e, l.warmLanes &= ~e, El === l && (il & e) === e && (Cl === 4 || Cl === 3 && (il & 62914560) === il && 300 > ft() - Hu ? (dl & 2) === 0 && Ua(l, 0) : lf |= e, Oa === il && (Oa = 0)), Yt(l);
  }
  function Sd(l, t) {
    t === 0 && (t = ms()), l = Qe(l, t), l !== null && (Za(l, t), Yt(l));
  }
  function Cm(l) {
    var t = l.memoizedState, e = 0;
    t !== null && (e = t.retryLane), Sd(l, e);
  }
  function Mm(l, t) {
    var e = 0;
    switch (l.tag) {
      case 31:
      case 13:
        var a = l.stateNode, n = l.memoizedState;
        n !== null && (e = n.retryLane);
        break;
      case 19:
        a = l.stateNode;
        break;
      case 22:
        a = l.stateNode._retryCache;
        break;
      default:
        throw Error(f(314));
    }
    a !== null && a.delete(t), Sd(l, e);
  }
  function Om(l, t) {
    return Si(l, t);
  }
  var Qu = null, Ha = null, sf = !1, Xu = !1, of = !1, Ne = 0;
  function Yt(l) {
    l !== Ha && l.next === null && (Ha === null ? Qu = Ha = l : Ha = Ha.next = l), Xu = !0, sf || (sf = !0, Um());
  }
  function zn(l, t) {
    if (!of && Xu) {
      of = !0;
      do
        for (var e = !1, a = Qu; a !== null; ) {
          if (l !== 0) {
            var n = a.pendingLanes;
            if (n === 0) var u = 0;
            else {
              var i = a.suspendedLanes, s = a.pingedLanes;
              u = (1 << 31 - ot(42 | l) + 1) - 1, u &= n & ~(i & ~s), u = u & 201326741 ? u & 201326741 | 1 : u ? u | 2 : 0;
            }
            u !== 0 && (e = !0, Td(a, u));
          } else
            u = il, u = Jn(
              a,
              a === El ? u : 0,
              a.cancelPendingCommit !== null || a.timeoutHandle !== -1
            ), (u & 3) === 0 || Va(a, u) || (e = !0, Td(a, u));
          a = a.next;
        }
      while (e);
      of = !1;
    }
  }
  function Dm() {
    _d();
  }
  function _d() {
    Xu = sf = !1;
    var l = 0;
    Ne !== 0 && Xm() && (l = Ne);
    for (var t = ft(), e = null, a = Qu; a !== null; ) {
      var n = a.next, u = Ed(a, t);
      u === 0 ? (a.next = null, e === null ? Qu = n : e.next = n, n === null && (Ha = e)) : (e = a, (l !== 0 || (u & 3) !== 0) && (Xu = !0)), a = n;
    }
    Gl !== 0 && Gl !== 5 || zn(l), Ne !== 0 && (Ne = 0);
  }
  function Ed(l, t) {
    for (var e = l.suspendedLanes, a = l.pingedLanes, n = l.expirationTimes, u = l.pendingLanes & -62914561; 0 < u; ) {
      var i = 31 - ot(u), s = 1 << i, m = n[i];
      m === -1 ? ((s & e) === 0 || (s & a) !== 0) && (n[i] = u0(s, t)) : m <= t && (l.expiredLanes |= s), u &= ~s;
    }
    if (t = El, e = il, e = Jn(
      l,
      l === t ? e : 0,
      l.cancelPendingCommit !== null || l.timeoutHandle !== -1
    ), a = l.callbackNode, e === 0 || l === t && (hl === 2 || hl === 9) || l.cancelPendingCommit !== null)
      return a !== null && a !== null && _i(a), l.callbackNode = null, l.callbackPriority = 0;
    if ((e & 3) === 0 || Va(l, e)) {
      if (t = e & -e, t === l.callbackPriority) return t;
      switch (a !== null && _i(a), Ti(e)) {
        case 2:
        case 8:
          e = rs;
          break;
        case 32:
          e = Xn;
          break;
        case 268435456:
          e = ds;
          break;
        default:
          e = Xn;
      }
      return a = xd.bind(null, l), e = Si(e, a), l.callbackPriority = t, l.callbackNode = e, t;
    }
    return a !== null && a !== null && _i(a), l.callbackPriority = 2, l.callbackNode = null, 2;
  }
  function xd(l, t) {
    if (Gl !== 0 && Gl !== 5)
      return l.callbackNode = null, l.callbackPriority = 0, null;
    var e = l.callbackNode;
    if (wu() && l.callbackNode !== e)
      return null;
    var a = il;
    return a = Jn(
      l,
      l === El ? a : 0,
      l.cancelPendingCommit !== null || l.timeoutHandle !== -1
    ), a === 0 ? null : (nd(l, a, t), Ed(l, ft()), l.callbackNode != null && l.callbackNode === e ? xd.bind(null, l) : null);
  }
  function Td(l, t) {
    if (wu()) return null;
    nd(l, t, !0);
  }
  function Um() {
    Zm(function() {
      (dl & 6) !== 0 ? Si(
        os,
        Dm
      ) : _d();
    });
  }
  function rf() {
    if (Ne === 0) {
      var l = Sa;
      l === 0 && (l = Vn, Vn <<= 1, (Vn & 261888) === 0 && (Vn = 256)), Ne = l;
    }
    return Ne;
  }
  function Ad(l) {
    return l == null || typeof l == "symbol" || typeof l == "boolean" ? null : typeof l == "function" ? l : Fn("" + l);
  }
  function zd(l, t) {
    var e = t.ownerDocument.createElement("input");
    return e.name = t.name, e.value = t.value, l.id && e.setAttribute("form", l.id), t.parentNode.insertBefore(e, t), l = new FormData(l), e.parentNode.removeChild(e), l;
  }
  function Rm(l, t, e, a, n) {
    if (t === "submit" && e && e.stateNode === n) {
      var u = Ad(
        (n[tt] || null).action
      ), i = a.submitter;
      i && (t = (t = i[tt] || null) ? Ad(t.formAction) : i.getAttribute("formAction"), t !== null && (u = t, i = null));
      var s = new tu(
        "action",
        "action",
        null,
        a,
        n
      );
      l.push({
        event: s,
        listeners: [
          {
            instance: null,
            listener: function() {
              if (a.defaultPrevented) {
                if (Ne !== 0) {
                  var m = i ? zd(n, i) : new FormData(n);
                  Mc(
                    e,
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
                typeof u == "function" && (s.preventDefault(), m = i ? zd(n, i) : new FormData(n), Mc(
                  e,
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
  for (var df = 0; df < Ji.length; df++) {
    var mf = Ji[df], Hm = mf.toLowerCase(), qm = mf[0].toUpperCase() + mf.slice(1);
    Ct(
      Hm,
      "on" + qm
    );
  }
  Ct(eo, "onAnimationEnd"), Ct(ao, "onAnimationIteration"), Ct(no, "onAnimationStart"), Ct("dblclick", "onDoubleClick"), Ct("focusin", "onFocus"), Ct("focusout", "onBlur"), Ct(I0, "onTransitionRun"), Ct(P0, "onTransitionStart"), Ct(lm, "onTransitionCancel"), Ct(uo, "onTransitionEnd"), ia("onMouseEnter", ["mouseout", "mouseover"]), ia("onMouseLeave", ["mouseout", "mouseover"]), ia("onPointerEnter", ["pointerout", "pointerover"]), ia("onPointerLeave", ["pointerout", "pointerover"]), Le(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(" ")
  ), Le(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  ), Le("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), Le(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  ), Le(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  ), Le(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var Nn = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), Bm = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Nn)
  );
  function Nd(l, t) {
    t = (t & 4) !== 0;
    for (var e = 0; e < l.length; e++) {
      var a = l[e], n = a.event;
      a = a.listeners;
      l: {
        var u = void 0;
        if (t)
          for (var i = a.length - 1; 0 <= i; i--) {
            var s = a[i], m = s.instance, b = s.currentTarget;
            if (s = s.listener, m !== u && n.isPropagationStopped())
              break l;
            u = s, n.currentTarget = b;
            try {
              u(n);
            } catch (T) {
              nu(T);
            }
            n.currentTarget = null, u = m;
          }
        else
          for (i = 0; i < a.length; i++) {
            if (s = a[i], m = s.instance, b = s.currentTarget, s = s.listener, m !== u && n.isPropagationStopped())
              break l;
            u = s, n.currentTarget = b;
            try {
              u(n);
            } catch (T) {
              nu(T);
            }
            n.currentTarget = null, u = m;
          }
      }
    }
  }
  function ul(l, t) {
    var e = t[Ai];
    e === void 0 && (e = t[Ai] = /* @__PURE__ */ new Set());
    var a = l + "__bubble";
    e.has(a) || (jd(t, l, 2, !1), e.add(a));
  }
  function hf(l, t, e) {
    var a = 0;
    t && (a |= 4), jd(
      e,
      l,
      a,
      t
    );
  }
  var Vu = "_reactListening" + Math.random().toString(36).slice(2);
  function vf(l) {
    if (!l[Vu]) {
      l[Vu] = !0, Ss.forEach(function(e) {
        e !== "selectionchange" && (Bm.has(e) || hf(e, !1, l), hf(e, !0, l));
      });
      var t = l.nodeType === 9 ? l : l.ownerDocument;
      t === null || t[Vu] || (t[Vu] = !0, hf("selectionchange", !1, t));
    }
  }
  function jd(l, t, e, a) {
    switch (a1(t)) {
      case 2:
        var n = rh;
        break;
      case 8:
        n = dh;
        break;
      default:
        n = Mf;
    }
    e = n.bind(
      null,
      t,
      e,
      l
    ), n = void 0, !Ri || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (n = !0), a ? n !== void 0 ? l.addEventListener(t, e, {
      capture: !0,
      passive: n
    }) : l.addEventListener(t, e, !0) : n !== void 0 ? l.addEventListener(t, e, {
      passive: n
    }) : l.addEventListener(t, e, !1);
  }
  function yf(l, t, e, a, n) {
    var u = a;
    if ((t & 1) === 0 && (t & 2) === 0 && a !== null)
      l: for (; ; ) {
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
            if (i = aa(s), i === null) return;
            if (m = i.tag, m === 5 || m === 6 || m === 26 || m === 27) {
              a = u = i;
              continue l;
            }
            s = s.parentNode;
          }
        }
        a = a.return;
      }
    Ds(function() {
      var b = u, T = Di(e), N = [];
      l: {
        var _ = io.get(l);
        if (_ !== void 0) {
          var E = tu, B = l;
          switch (l) {
            case "keypress":
              if (Pn(e) === 0) break l;
            case "keydown":
            case "keyup":
              E = M0;
              break;
            case "focusin":
              B = "focus", E = Li;
              break;
            case "focusout":
              B = "blur", E = Li;
              break;
            case "beforeblur":
            case "afterblur":
              E = Li;
              break;
            case "click":
              if (e.button === 2) break l;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              E = Hs;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              E = p0;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              E = U0;
              break;
            case eo:
            case ao:
            case no:
              E = _0;
              break;
            case uo:
              E = H0;
              break;
            case "scroll":
            case "scrollend":
              E = y0;
              break;
            case "wheel":
              E = B0;
              break;
            case "copy":
            case "cut":
            case "paste":
              E = x0;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              E = Bs;
              break;
            case "toggle":
            case "beforetoggle":
              E = Y0;
          }
          var X = (t & 4) !== 0, Sl = !X && (l === "scroll" || l === "scrollend"), y = X ? _ !== null ? _ + "Capture" : null : _;
          X = [];
          for (var h = b, p; h !== null; ) {
            var z = h;
            if (p = z.stateNode, z = z.tag, z !== 5 && z !== 26 && z !== 27 || p === null || y === null || (z = ka(h, y), z != null && X.push(
              jn(h, z, p)
            )), Sl) break;
            h = h.return;
          }
          0 < X.length && (_ = new E(
            _,
            B,
            null,
            e,
            T
          ), N.push({ event: _, listeners: X }));
        }
      }
      if ((t & 7) === 0) {
        l: {
          if (_ = l === "mouseover" || l === "pointerover", E = l === "mouseout" || l === "pointerout", _ && e !== Oi && (B = e.relatedTarget || e.fromElement) && (aa(B) || B[ea]))
            break l;
          if ((E || _) && (_ = T.window === T ? T : (_ = T.ownerDocument) ? _.defaultView || _.parentWindow : window, E ? (B = e.relatedTarget || e.toElement, E = b, B = B ? aa(B) : null, B !== null && (Sl = x(B), X = B.tag, B !== Sl || X !== 5 && X !== 27 && X !== 6) && (B = null)) : (E = null, B = b), E !== B)) {
            if (X = Hs, z = "onMouseLeave", y = "onMouseEnter", h = "mouse", (l === "pointerout" || l === "pointerover") && (X = Bs, z = "onPointerLeave", y = "onPointerEnter", h = "pointer"), Sl = E == null ? _ : Ja(E), p = B == null ? _ : Ja(B), _ = new X(
              z,
              h + "leave",
              E,
              e,
              T
            ), _.target = Sl, _.relatedTarget = p, z = null, aa(T) === b && (X = new X(
              y,
              h + "enter",
              B,
              e,
              T
            ), X.target = p, X.relatedTarget = Sl, z = X), Sl = z, E && B)
              t: {
                for (X = Lm, y = E, h = B, p = 0, z = y; z; z = X(z))
                  p++;
                z = 0;
                for (var Q = h; Q; Q = X(Q))
                  z++;
                for (; 0 < p - z; )
                  y = X(y), p--;
                for (; 0 < z - p; )
                  h = X(h), z--;
                for (; p--; ) {
                  if (y === h || h !== null && y === h.alternate) {
                    X = y;
                    break t;
                  }
                  y = X(y), h = X(h);
                }
                X = null;
              }
            else X = null;
            E !== null && Cd(
              N,
              _,
              E,
              X,
              !1
            ), B !== null && Sl !== null && Cd(
              N,
              Sl,
              B,
              X,
              !0
            );
          }
        }
        l: {
          if (_ = b ? Ja(b) : window, E = _.nodeName && _.nodeName.toLowerCase(), E === "select" || E === "input" && _.type === "file")
            var ol = Zs;
          else if (Xs(_))
            if (Ks)
              ol = $0;
            else {
              ol = J0;
              var Y = K0;
            }
          else
            E = _.nodeName, !E || E.toLowerCase() !== "input" || _.type !== "checkbox" && _.type !== "radio" ? b && Mi(b.elementType) && (ol = Zs) : ol = k0;
          if (ol && (ol = ol(l, b))) {
            Vs(
              N,
              ol,
              e,
              T
            );
            break l;
          }
          Y && Y(l, _, b), l === "focusout" && b && _.type === "number" && b.memoizedProps.value != null && Ci(_, "number", _.value);
        }
        switch (Y = b ? Ja(b) : window, l) {
          case "focusin":
            (Xs(Y) || Y.contentEditable === "true") && (da = Y, Vi = b, en = null);
            break;
          case "focusout":
            en = Vi = da = null;
            break;
          case "mousedown":
            Zi = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Zi = !1, lo(N, e, T);
            break;
          case "selectionchange":
            if (F0) break;
          case "keydown":
          case "keyup":
            lo(N, e, T);
        }
        var ll;
        if (Gi)
          l: {
            switch (l) {
              case "compositionstart":
                var cl = "onCompositionStart";
                break l;
              case "compositionend":
                cl = "onCompositionEnd";
                break l;
              case "compositionupdate":
                cl = "onCompositionUpdate";
                break l;
            }
            cl = void 0;
          }
        else
          ra ? ws(l, e) && (cl = "onCompositionEnd") : l === "keydown" && e.keyCode === 229 && (cl = "onCompositionStart");
        cl && (Ls && e.locale !== "ko" && (ra || cl !== "onCompositionStart" ? cl === "onCompositionEnd" && ra && (ll = Us()) : (re = T, Hi = "value" in re ? re.value : re.textContent, ra = !0)), Y = Zu(b, cl), 0 < Y.length && (cl = new qs(
          cl,
          l,
          null,
          e,
          T
        ), N.push({ event: cl, listeners: Y }), ll ? cl.data = ll : (ll = Qs(e), ll !== null && (cl.data = ll)))), (ll = w0 ? Q0(l, e) : X0(l, e)) && (cl = Zu(b, "onBeforeInput"), 0 < cl.length && (Y = new qs(
          "onBeforeInput",
          "beforeinput",
          null,
          e,
          T
        ), N.push({
          event: Y,
          listeners: cl
        }), Y.data = ll)), Rm(
          N,
          l,
          b,
          e,
          T
        );
      }
      Nd(N, t);
    });
  }
  function jn(l, t, e) {
    return {
      instance: l,
      listener: t,
      currentTarget: e
    };
  }
  function Zu(l, t) {
    for (var e = t + "Capture", a = []; l !== null; ) {
      var n = l, u = n.stateNode;
      if (n = n.tag, n !== 5 && n !== 26 && n !== 27 || u === null || (n = ka(l, e), n != null && a.unshift(
        jn(l, n, u)
      ), n = ka(l, t), n != null && a.push(
        jn(l, n, u)
      )), l.tag === 3) return a;
      l = l.return;
    }
    return [];
  }
  function Lm(l) {
    if (l === null) return null;
    do
      l = l.return;
    while (l && l.tag !== 5 && l.tag !== 27);
    return l || null;
  }
  function Cd(l, t, e, a, n) {
    for (var u = t._reactName, i = []; e !== null && e !== a; ) {
      var s = e, m = s.alternate, b = s.stateNode;
      if (s = s.tag, m !== null && m === a) break;
      s !== 5 && s !== 26 && s !== 27 || b === null || (m = b, n ? (b = ka(e, u), b != null && i.unshift(
        jn(e, b, m)
      )) : n || (b = ka(e, u), b != null && i.push(
        jn(e, b, m)
      ))), e = e.return;
    }
    i.length !== 0 && l.push({ event: t, listeners: i });
  }
  var Ym = /\r\n?/g, Gm = /\u0000|\uFFFD/g;
  function Md(l) {
    return (typeof l == "string" ? l : "" + l).replace(Ym, `
`).replace(Gm, "");
  }
  function Od(l, t) {
    return t = Md(t), Md(l) === t;
  }
  function bl(l, t, e, a, n, u) {
    switch (e) {
      case "children":
        typeof a == "string" ? t === "body" || t === "textarea" && a === "" || fa(l, a) : (typeof a == "number" || typeof a == "bigint") && t !== "body" && fa(l, "" + a);
        break;
      case "className":
        $n(l, "class", a);
        break;
      case "tabIndex":
        $n(l, "tabindex", a);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        $n(l, e, a);
        break;
      case "style":
        Ms(l, a, u);
        break;
      case "data":
        if (t !== "object") {
          $n(l, "data", a);
          break;
        }
      case "src":
      case "href":
        if (a === "" && (t !== "a" || e !== "href")) {
          l.removeAttribute(e);
          break;
        }
        if (a == null || typeof a == "function" || typeof a == "symbol" || typeof a == "boolean") {
          l.removeAttribute(e);
          break;
        }
        a = Fn("" + a), l.setAttribute(e, a);
        break;
      case "action":
      case "formAction":
        if (typeof a == "function") {
          l.setAttribute(
            e,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof u == "function" && (e === "formAction" ? (t !== "input" && bl(l, t, "name", n.name, n, null), bl(
            l,
            t,
            "formEncType",
            n.formEncType,
            n,
            null
          ), bl(
            l,
            t,
            "formMethod",
            n.formMethod,
            n,
            null
          ), bl(
            l,
            t,
            "formTarget",
            n.formTarget,
            n,
            null
          )) : (bl(l, t, "encType", n.encType, n, null), bl(l, t, "method", n.method, n, null), bl(l, t, "target", n.target, n, null)));
        if (a == null || typeof a == "symbol" || typeof a == "boolean") {
          l.removeAttribute(e);
          break;
        }
        a = Fn("" + a), l.setAttribute(e, a);
        break;
      case "onClick":
        a != null && (l.onclick = Zt);
        break;
      case "onScroll":
        a != null && ul("scroll", l);
        break;
      case "onScrollEnd":
        a != null && ul("scrollend", l);
        break;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a))
            throw Error(f(61));
          if (e = a.__html, e != null) {
            if (n.children != null) throw Error(f(60));
            l.innerHTML = e;
          }
        }
        break;
      case "multiple":
        l.multiple = a && typeof a != "function" && typeof a != "symbol";
        break;
      case "muted":
        l.muted = a && typeof a != "function" && typeof a != "symbol";
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
          l.removeAttribute("xlink:href");
          break;
        }
        e = Fn("" + a), l.setAttributeNS(
          "http://www.w3.org/1999/xlink",
          "xlink:href",
          e
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
        a != null && typeof a != "function" && typeof a != "symbol" ? l.setAttribute(e, "" + a) : l.removeAttribute(e);
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
        a && typeof a != "function" && typeof a != "symbol" ? l.setAttribute(e, "") : l.removeAttribute(e);
        break;
      case "capture":
      case "download":
        a === !0 ? l.setAttribute(e, "") : a !== !1 && a != null && typeof a != "function" && typeof a != "symbol" ? l.setAttribute(e, a) : l.removeAttribute(e);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        a != null && typeof a != "function" && typeof a != "symbol" && !isNaN(a) && 1 <= a ? l.setAttribute(e, a) : l.removeAttribute(e);
        break;
      case "rowSpan":
      case "start":
        a == null || typeof a == "function" || typeof a == "symbol" || isNaN(a) ? l.removeAttribute(e) : l.setAttribute(e, a);
        break;
      case "popover":
        ul("beforetoggle", l), ul("toggle", l), kn(l, "popover", a);
        break;
      case "xlinkActuate":
        Vt(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          a
        );
        break;
      case "xlinkArcrole":
        Vt(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          a
        );
        break;
      case "xlinkRole":
        Vt(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          a
        );
        break;
      case "xlinkShow":
        Vt(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          a
        );
        break;
      case "xlinkTitle":
        Vt(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          a
        );
        break;
      case "xlinkType":
        Vt(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          a
        );
        break;
      case "xmlBase":
        Vt(
          l,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          a
        );
        break;
      case "xmlLang":
        Vt(
          l,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          a
        );
        break;
      case "xmlSpace":
        Vt(
          l,
          "http://www.w3.org/XML/1998/namespace",
          "xml:space",
          a
        );
        break;
      case "is":
        kn(l, "is", a);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < e.length) || e[0] !== "o" && e[0] !== "O" || e[1] !== "n" && e[1] !== "N") && (e = h0.get(e) || e, kn(l, e, a));
    }
  }
  function gf(l, t, e, a, n, u) {
    switch (e) {
      case "style":
        Ms(l, a, u);
        break;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a))
            throw Error(f(61));
          if (e = a.__html, e != null) {
            if (n.children != null) throw Error(f(60));
            l.innerHTML = e;
          }
        }
        break;
      case "children":
        typeof a == "string" ? fa(l, a) : (typeof a == "number" || typeof a == "bigint") && fa(l, "" + a);
        break;
      case "onScroll":
        a != null && ul("scroll", l);
        break;
      case "onScrollEnd":
        a != null && ul("scrollend", l);
        break;
      case "onClick":
        a != null && (l.onclick = Zt);
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
        if (!_s.hasOwnProperty(e))
          l: {
            if (e[0] === "o" && e[1] === "n" && (n = e.endsWith("Capture"), t = e.slice(2, n ? e.length - 7 : void 0), u = l[tt] || null, u = u != null ? u[e] : null, typeof u == "function" && l.removeEventListener(t, u, n), typeof a == "function")) {
              typeof u != "function" && u !== null && (e in l ? l[e] = null : l.hasAttribute(e) && l.removeAttribute(e)), l.addEventListener(t, a, n);
              break l;
            }
            e in l ? l[e] = a : a === !0 ? l.setAttribute(e, "") : kn(l, e, a);
          }
    }
  }
  function kl(l, t, e) {
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
        ul("error", l), ul("load", l);
        var a = !1, n = !1, u;
        for (u in e)
          if (e.hasOwnProperty(u)) {
            var i = e[u];
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
                  throw Error(f(137, t));
                default:
                  bl(l, t, u, i, e, null);
              }
          }
        n && bl(l, t, "srcSet", e.srcSet, e, null), a && bl(l, t, "src", e.src, e, null);
        return;
      case "input":
        ul("invalid", l);
        var s = u = i = n = null, m = null, b = null;
        for (a in e)
          if (e.hasOwnProperty(a)) {
            var T = e[a];
            if (T != null)
              switch (a) {
                case "name":
                  n = T;
                  break;
                case "type":
                  i = T;
                  break;
                case "checked":
                  m = T;
                  break;
                case "defaultChecked":
                  b = T;
                  break;
                case "value":
                  u = T;
                  break;
                case "defaultValue":
                  s = T;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (T != null)
                    throw Error(f(137, t));
                  break;
                default:
                  bl(l, t, a, T, e, null);
              }
          }
        zs(
          l,
          u,
          s,
          m,
          b,
          i,
          n,
          !1
        );
        return;
      case "select":
        ul("invalid", l), a = i = u = null;
        for (n in e)
          if (e.hasOwnProperty(n) && (s = e[n], s != null))
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
                bl(l, t, n, s, e, null);
            }
        t = u, e = i, l.multiple = !!a, t != null ? ca(l, !!a, t, !1) : e != null && ca(l, !!a, e, !0);
        return;
      case "textarea":
        ul("invalid", l), u = n = a = null;
        for (i in e)
          if (e.hasOwnProperty(i) && (s = e[i], s != null))
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
                bl(l, t, i, s, e, null);
            }
        js(l, a, n, u);
        return;
      case "option":
        for (m in e)
          if (e.hasOwnProperty(m) && (a = e[m], a != null))
            switch (m) {
              case "selected":
                l.selected = a && typeof a != "function" && typeof a != "symbol";
                break;
              default:
                bl(l, t, m, a, e, null);
            }
        return;
      case "dialog":
        ul("beforetoggle", l), ul("toggle", l), ul("cancel", l), ul("close", l);
        break;
      case "iframe":
      case "object":
        ul("load", l);
        break;
      case "video":
      case "audio":
        for (a = 0; a < Nn.length; a++)
          ul(Nn[a], l);
        break;
      case "image":
        ul("error", l), ul("load", l);
        break;
      case "details":
        ul("toggle", l);
        break;
      case "embed":
      case "source":
      case "link":
        ul("error", l), ul("load", l);
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
        for (b in e)
          if (e.hasOwnProperty(b) && (a = e[b], a != null))
            switch (b) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(f(137, t));
              default:
                bl(l, t, b, a, e, null);
            }
        return;
      default:
        if (Mi(t)) {
          for (T in e)
            e.hasOwnProperty(T) && (a = e[T], a !== void 0 && gf(
              l,
              t,
              T,
              a,
              e,
              void 0
            ));
          return;
        }
    }
    for (s in e)
      e.hasOwnProperty(s) && (a = e[s], a != null && bl(l, t, s, a, e, null));
  }
  function wm(l, t, e, a) {
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
        var n = null, u = null, i = null, s = null, m = null, b = null, T = null;
        for (E in e) {
          var N = e[E];
          if (e.hasOwnProperty(E) && N != null)
            switch (E) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                m = N;
              default:
                a.hasOwnProperty(E) || bl(l, t, E, null, a, N);
            }
        }
        for (var _ in a) {
          var E = a[_];
          if (N = e[_], a.hasOwnProperty(_) && (E != null || N != null))
            switch (_) {
              case "type":
                u = E;
                break;
              case "name":
                n = E;
                break;
              case "checked":
                b = E;
                break;
              case "defaultChecked":
                T = E;
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
                  throw Error(f(137, t));
                break;
              default:
                E !== N && bl(
                  l,
                  t,
                  _,
                  E,
                  a,
                  N
                );
            }
        }
        ji(
          l,
          i,
          s,
          m,
          b,
          T,
          u,
          n
        );
        return;
      case "select":
        E = i = s = _ = null;
        for (u in e)
          if (m = e[u], e.hasOwnProperty(u) && m != null)
            switch (u) {
              case "value":
                break;
              case "multiple":
                E = m;
              default:
                a.hasOwnProperty(u) || bl(
                  l,
                  t,
                  u,
                  null,
                  a,
                  m
                );
            }
        for (n in a)
          if (u = a[n], m = e[n], a.hasOwnProperty(n) && (u != null || m != null))
            switch (n) {
              case "value":
                _ = u;
                break;
              case "defaultValue":
                s = u;
                break;
              case "multiple":
                i = u;
              default:
                u !== m && bl(
                  l,
                  t,
                  n,
                  u,
                  a,
                  m
                );
            }
        t = s, e = i, a = E, _ != null ? ca(l, !!e, _, !1) : !!a != !!e && (t != null ? ca(l, !!e, t, !0) : ca(l, !!e, e ? [] : "", !1));
        return;
      case "textarea":
        E = _ = null;
        for (s in e)
          if (n = e[s], e.hasOwnProperty(s) && n != null && !a.hasOwnProperty(s))
            switch (s) {
              case "value":
                break;
              case "children":
                break;
              default:
                bl(l, t, s, null, a, n);
            }
        for (i in a)
          if (n = a[i], u = e[i], a.hasOwnProperty(i) && (n != null || u != null))
            switch (i) {
              case "value":
                _ = n;
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
                n !== u && bl(l, t, i, n, a, u);
            }
        Ns(l, _, E);
        return;
      case "option":
        for (var B in e)
          if (_ = e[B], e.hasOwnProperty(B) && _ != null && !a.hasOwnProperty(B))
            switch (B) {
              case "selected":
                l.selected = !1;
                break;
              default:
                bl(
                  l,
                  t,
                  B,
                  null,
                  a,
                  _
                );
            }
        for (m in a)
          if (_ = a[m], E = e[m], a.hasOwnProperty(m) && _ !== E && (_ != null || E != null))
            switch (m) {
              case "selected":
                l.selected = _ && typeof _ != "function" && typeof _ != "symbol";
                break;
              default:
                bl(
                  l,
                  t,
                  m,
                  _,
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
        for (var X in e)
          _ = e[X], e.hasOwnProperty(X) && _ != null && !a.hasOwnProperty(X) && bl(l, t, X, null, a, _);
        for (b in a)
          if (_ = a[b], E = e[b], a.hasOwnProperty(b) && _ !== E && (_ != null || E != null))
            switch (b) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (_ != null)
                  throw Error(f(137, t));
                break;
              default:
                bl(
                  l,
                  t,
                  b,
                  _,
                  a,
                  E
                );
            }
        return;
      default:
        if (Mi(t)) {
          for (var Sl in e)
            _ = e[Sl], e.hasOwnProperty(Sl) && _ !== void 0 && !a.hasOwnProperty(Sl) && gf(
              l,
              t,
              Sl,
              void 0,
              a,
              _
            );
          for (T in a)
            _ = a[T], E = e[T], !a.hasOwnProperty(T) || _ === E || _ === void 0 && E === void 0 || gf(
              l,
              t,
              T,
              _,
              a,
              E
            );
          return;
        }
    }
    for (var y in e)
      _ = e[y], e.hasOwnProperty(y) && _ != null && !a.hasOwnProperty(y) && bl(l, t, y, null, a, _);
    for (N in a)
      _ = a[N], E = e[N], !a.hasOwnProperty(N) || _ === E || _ == null && E == null || bl(l, t, N, _, a, E);
  }
  function Dd(l) {
    switch (l) {
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
  function Qm() {
    if (typeof performance.getEntriesByType == "function") {
      for (var l = 0, t = 0, e = performance.getEntriesByType("resource"), a = 0; a < e.length; a++) {
        var n = e[a], u = n.transferSize, i = n.initiatorType, s = n.duration;
        if (u && s && Dd(i)) {
          for (i = 0, s = n.responseEnd, a += 1; a < e.length; a++) {
            var m = e[a], b = m.startTime;
            if (b > s) break;
            var T = m.transferSize, N = m.initiatorType;
            T && Dd(N) && (m = m.responseEnd, i += T * (m < s ? 1 : (s - b) / (m - b)));
          }
          if (--a, t += 8 * (u + i) / (n.duration / 1e3), l++, 10 < l) break;
        }
      }
      if (0 < l) return t / l / 1e6;
    }
    return navigator.connection && (l = navigator.connection.downlink, typeof l == "number") ? l : 5;
  }
  var pf = null, bf = null;
  function Ku(l) {
    return l.nodeType === 9 ? l : l.ownerDocument;
  }
  function Ud(l) {
    switch (l) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function Rd(l, t) {
    if (l === 0)
      switch (t) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return l === 1 && t === "foreignObject" ? 0 : l;
  }
  function Sf(l, t) {
    return l === "textarea" || l === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var _f = null;
  function Xm() {
    var l = window.event;
    return l && l.type === "popstate" ? l === _f ? !1 : (_f = l, !0) : (_f = null, !1);
  }
  var Hd = typeof setTimeout == "function" ? setTimeout : void 0, Vm = typeof clearTimeout == "function" ? clearTimeout : void 0, qd = typeof Promise == "function" ? Promise : void 0, Zm = typeof queueMicrotask == "function" ? queueMicrotask : typeof qd < "u" ? function(l) {
    return qd.resolve(null).then(l).catch(Km);
  } : Hd;
  function Km(l) {
    setTimeout(function() {
      throw l;
    });
  }
  function je(l) {
    return l === "head";
  }
  function Bd(l, t) {
    var e = t, a = 0;
    do {
      var n = e.nextSibling;
      if (l.removeChild(e), n && n.nodeType === 8)
        if (e = n.data, e === "/$" || e === "/&") {
          if (a === 0) {
            l.removeChild(n), Ya(t);
            return;
          }
          a--;
        } else if (e === "$" || e === "$?" || e === "$~" || e === "$!" || e === "&")
          a++;
        else if (e === "html")
          Cn(l.ownerDocument.documentElement);
        else if (e === "head") {
          e = l.ownerDocument.head, Cn(e);
          for (var u = e.firstChild; u; ) {
            var i = u.nextSibling, s = u.nodeName;
            u[Ka] || s === "SCRIPT" || s === "STYLE" || s === "LINK" && u.rel.toLowerCase() === "stylesheet" || e.removeChild(u), u = i;
          }
        } else
          e === "body" && Cn(l.ownerDocument.body);
      e = n;
    } while (e);
    Ya(t);
  }
  function Ld(l, t) {
    var e = l;
    l = 0;
    do {
      var a = e.nextSibling;
      if (e.nodeType === 1 ? t ? (e._stashedDisplay = e.style.display, e.style.display = "none") : (e.style.display = e._stashedDisplay || "", e.getAttribute("style") === "" && e.removeAttribute("style")) : e.nodeType === 3 && (t ? (e._stashedText = e.nodeValue, e.nodeValue = "") : e.nodeValue = e._stashedText || ""), a && a.nodeType === 8)
        if (e = a.data, e === "/$") {
          if (l === 0) break;
          l--;
        } else
          e !== "$" && e !== "$?" && e !== "$~" && e !== "$!" || l++;
      e = a;
    } while (e);
  }
  function Ef(l) {
    var t = l.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var e = t;
      switch (t = t.nextSibling, e.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          Ef(e), zi(e);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (e.rel.toLowerCase() === "stylesheet") continue;
      }
      l.removeChild(e);
    }
  }
  function Jm(l, t, e, a) {
    for (; l.nodeType === 1; ) {
      var n = e;
      if (l.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!a && (l.nodeName !== "INPUT" || l.type !== "hidden"))
          break;
      } else if (a) {
        if (!l[Ka])
          switch (t) {
            case "meta":
              if (!l.hasAttribute("itemprop")) break;
              return l;
            case "link":
              if (u = l.getAttribute("rel"), u === "stylesheet" && l.hasAttribute("data-precedence"))
                break;
              if (u !== n.rel || l.getAttribute("href") !== (n.href == null || n.href === "" ? null : n.href) || l.getAttribute("crossorigin") !== (n.crossOrigin == null ? null : n.crossOrigin) || l.getAttribute("title") !== (n.title == null ? null : n.title))
                break;
              return l;
            case "style":
              if (l.hasAttribute("data-precedence")) break;
              return l;
            case "script":
              if (u = l.getAttribute("src"), (u !== (n.src == null ? null : n.src) || l.getAttribute("type") !== (n.type == null ? null : n.type) || l.getAttribute("crossorigin") !== (n.crossOrigin == null ? null : n.crossOrigin)) && u && l.hasAttribute("async") && !l.hasAttribute("itemprop"))
                break;
              return l;
            default:
              return l;
          }
      } else if (t === "input" && l.type === "hidden") {
        var u = n.name == null ? null : "" + n.name;
        if (n.type === "hidden" && l.getAttribute("name") === u)
          return l;
      } else return l;
      if (l = zt(l.nextSibling), l === null) break;
    }
    return null;
  }
  function km(l, t, e) {
    if (t === "") return null;
    for (; l.nodeType !== 3; )
      if ((l.nodeType !== 1 || l.nodeName !== "INPUT" || l.type !== "hidden") && !e || (l = zt(l.nextSibling), l === null)) return null;
    return l;
  }
  function Yd(l, t) {
    for (; l.nodeType !== 8; )
      if ((l.nodeType !== 1 || l.nodeName !== "INPUT" || l.type !== "hidden") && !t || (l = zt(l.nextSibling), l === null)) return null;
    return l;
  }
  function xf(l) {
    return l.data === "$?" || l.data === "$~";
  }
  function Tf(l) {
    return l.data === "$!" || l.data === "$?" && l.ownerDocument.readyState !== "loading";
  }
  function $m(l, t) {
    var e = l.ownerDocument;
    if (l.data === "$~") l._reactRetry = t;
    else if (l.data !== "$?" || e.readyState !== "loading")
      t();
    else {
      var a = function() {
        t(), e.removeEventListener("DOMContentLoaded", a);
      };
      e.addEventListener("DOMContentLoaded", a), l._reactRetry = a;
    }
  }
  function zt(l) {
    for (; l != null; l = l.nextSibling) {
      var t = l.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (t = l.data, t === "$" || t === "$!" || t === "$?" || t === "$~" || t === "&" || t === "F!" || t === "F")
          break;
        if (t === "/$" || t === "/&") return null;
      }
    }
    return l;
  }
  var Af = null;
  function Gd(l) {
    l = l.nextSibling;
    for (var t = 0; l; ) {
      if (l.nodeType === 8) {
        var e = l.data;
        if (e === "/$" || e === "/&") {
          if (t === 0)
            return zt(l.nextSibling);
          t--;
        } else
          e !== "$" && e !== "$!" && e !== "$?" && e !== "$~" && e !== "&" || t++;
      }
      l = l.nextSibling;
    }
    return null;
  }
  function wd(l) {
    l = l.previousSibling;
    for (var t = 0; l; ) {
      if (l.nodeType === 8) {
        var e = l.data;
        if (e === "$" || e === "$!" || e === "$?" || e === "$~" || e === "&") {
          if (t === 0) return l;
          t--;
        } else e !== "/$" && e !== "/&" || t++;
      }
      l = l.previousSibling;
    }
    return null;
  }
  function Qd(l, t, e) {
    switch (t = Ku(e), l) {
      case "html":
        if (l = t.documentElement, !l) throw Error(f(452));
        return l;
      case "head":
        if (l = t.head, !l) throw Error(f(453));
        return l;
      case "body":
        if (l = t.body, !l) throw Error(f(454));
        return l;
      default:
        throw Error(f(451));
    }
  }
  function Cn(l) {
    for (var t = l.attributes; t.length; )
      l.removeAttributeNode(t[0]);
    zi(l);
  }
  var Nt = /* @__PURE__ */ new Map(), Xd = /* @__PURE__ */ new Set();
  function Ju(l) {
    return typeof l.getRootNode == "function" ? l.getRootNode() : l.nodeType === 9 ? l : l.ownerDocument;
  }
  var ce = U.d;
  U.d = {
    f: Wm,
    r: Fm,
    D: Im,
    C: Pm,
    L: lh,
    m: th,
    X: ah,
    S: eh,
    M: nh
  };
  function Wm() {
    var l = ce.f(), t = Lu();
    return l || t;
  }
  function Fm(l) {
    var t = na(l);
    t !== null && t.tag === 5 && t.type === "form" ? ir(t) : ce.r(l);
  }
  var qa = typeof document > "u" ? null : document;
  function Vd(l, t, e) {
    var a = qa;
    if (a && typeof t == "string" && t) {
      var n = bt(t);
      n = 'link[rel="' + l + '"][href="' + n + '"]', typeof e == "string" && (n += '[crossorigin="' + e + '"]'), Xd.has(n) || (Xd.add(n), l = { rel: l, crossOrigin: e, href: t }, a.querySelector(n) === null && (t = a.createElement("link"), kl(t, "link", l), Ql(t), a.head.appendChild(t)));
    }
  }
  function Im(l) {
    ce.D(l), Vd("dns-prefetch", l, null);
  }
  function Pm(l, t) {
    ce.C(l, t), Vd("preconnect", l, t);
  }
  function lh(l, t, e) {
    ce.L(l, t, e);
    var a = qa;
    if (a && l && t) {
      var n = 'link[rel="preload"][as="' + bt(t) + '"]';
      t === "image" && e && e.imageSrcSet ? (n += '[imagesrcset="' + bt(
        e.imageSrcSet
      ) + '"]', typeof e.imageSizes == "string" && (n += '[imagesizes="' + bt(
        e.imageSizes
      ) + '"]')) : n += '[href="' + bt(l) + '"]';
      var u = n;
      switch (t) {
        case "style":
          u = Ba(l);
          break;
        case "script":
          u = La(l);
      }
      Nt.has(u) || (l = H(
        {
          rel: "preload",
          href: t === "image" && e && e.imageSrcSet ? void 0 : l,
          as: t
        },
        e
      ), Nt.set(u, l), a.querySelector(n) !== null || t === "style" && a.querySelector(Mn(u)) || t === "script" && a.querySelector(On(u)) || (t = a.createElement("link"), kl(t, "link", l), Ql(t), a.head.appendChild(t)));
    }
  }
  function th(l, t) {
    ce.m(l, t);
    var e = qa;
    if (e && l) {
      var a = t && typeof t.as == "string" ? t.as : "script", n = 'link[rel="modulepreload"][as="' + bt(a) + '"][href="' + bt(l) + '"]', u = n;
      switch (a) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          u = La(l);
      }
      if (!Nt.has(u) && (l = H({ rel: "modulepreload", href: l }, t), Nt.set(u, l), e.querySelector(n) === null)) {
        switch (a) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (e.querySelector(On(u)))
              return;
        }
        a = e.createElement("link"), kl(a, "link", l), Ql(a), e.head.appendChild(a);
      }
    }
  }
  function eh(l, t, e) {
    ce.S(l, t, e);
    var a = qa;
    if (a && l) {
      var n = ua(a).hoistableStyles, u = Ba(l);
      t = t || "default";
      var i = n.get(u);
      if (!i) {
        var s = { loading: 0, preload: null };
        if (i = a.querySelector(
          Mn(u)
        ))
          s.loading = 5;
        else {
          l = H(
            { rel: "stylesheet", href: l, "data-precedence": t },
            e
          ), (e = Nt.get(u)) && zf(l, e);
          var m = i = a.createElement("link");
          Ql(m), kl(m, "link", l), m._p = new Promise(function(b, T) {
            m.onload = b, m.onerror = T;
          }), m.addEventListener("load", function() {
            s.loading |= 1;
          }), m.addEventListener("error", function() {
            s.loading |= 2;
          }), s.loading |= 4, ku(i, t, a);
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
  function ah(l, t) {
    ce.X(l, t);
    var e = qa;
    if (e && l) {
      var a = ua(e).hoistableScripts, n = La(l), u = a.get(n);
      u || (u = e.querySelector(On(n)), u || (l = H({ src: l, async: !0 }, t), (t = Nt.get(n)) && Nf(l, t), u = e.createElement("script"), Ql(u), kl(u, "link", l), e.head.appendChild(u)), u = {
        type: "script",
        instance: u,
        count: 1,
        state: null
      }, a.set(n, u));
    }
  }
  function nh(l, t) {
    ce.M(l, t);
    var e = qa;
    if (e && l) {
      var a = ua(e).hoistableScripts, n = La(l), u = a.get(n);
      u || (u = e.querySelector(On(n)), u || (l = H({ src: l, async: !0, type: "module" }, t), (t = Nt.get(n)) && Nf(l, t), u = e.createElement("script"), Ql(u), kl(u, "link", l), e.head.appendChild(u)), u = {
        type: "script",
        instance: u,
        count: 1,
        state: null
      }, a.set(n, u));
    }
  }
  function Zd(l, t, e, a) {
    var n = (n = al.current) ? Ju(n) : null;
    if (!n) throw Error(f(446));
    switch (l) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof e.precedence == "string" && typeof e.href == "string" ? (t = Ba(e.href), e = ua(
          n
        ).hoistableStyles, a = e.get(t), a || (a = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, e.set(t, a)), a) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (e.rel === "stylesheet" && typeof e.href == "string" && typeof e.precedence == "string") {
          l = Ba(e.href);
          var u = ua(
            n
          ).hoistableStyles, i = u.get(l);
          if (i || (n = n.ownerDocument || n, i = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, u.set(l, i), (u = n.querySelector(
            Mn(l)
          )) && !u._p && (i.instance = u, i.state.loading = 5), Nt.has(l) || (e = {
            rel: "preload",
            as: "style",
            href: e.href,
            crossOrigin: e.crossOrigin,
            integrity: e.integrity,
            media: e.media,
            hrefLang: e.hrefLang,
            referrerPolicy: e.referrerPolicy
          }, Nt.set(l, e), u || uh(
            n,
            l,
            e,
            i.state
          ))), t && a === null)
            throw Error(f(528, ""));
          return i;
        }
        if (t && a !== null)
          throw Error(f(529, ""));
        return null;
      case "script":
        return t = e.async, e = e.src, typeof e == "string" && t && typeof t != "function" && typeof t != "symbol" ? (t = La(e), e = ua(
          n
        ).hoistableScripts, a = e.get(t), a || (a = {
          type: "script",
          instance: null,
          count: 0,
          state: null
        }, e.set(t, a)), a) : { type: "void", instance: null, count: 0, state: null };
      default:
        throw Error(f(444, l));
    }
  }
  function Ba(l) {
    return 'href="' + bt(l) + '"';
  }
  function Mn(l) {
    return 'link[rel="stylesheet"][' + l + "]";
  }
  function Kd(l) {
    return H({}, l, {
      "data-precedence": l.precedence,
      precedence: null
    });
  }
  function uh(l, t, e, a) {
    l.querySelector('link[rel="preload"][as="style"][' + t + "]") ? a.loading = 1 : (t = l.createElement("link"), a.preload = t, t.addEventListener("load", function() {
      return a.loading |= 1;
    }), t.addEventListener("error", function() {
      return a.loading |= 2;
    }), kl(t, "link", e), Ql(t), l.head.appendChild(t));
  }
  function La(l) {
    return '[src="' + bt(l) + '"]';
  }
  function On(l) {
    return "script[async]" + l;
  }
  function Jd(l, t, e) {
    if (t.count++, t.instance === null)
      switch (t.type) {
        case "style":
          var a = l.querySelector(
            'style[data-href~="' + bt(e.href) + '"]'
          );
          if (a)
            return t.instance = a, Ql(a), a;
          var n = H({}, e, {
            "data-href": e.href,
            "data-precedence": e.precedence,
            href: null,
            precedence: null
          });
          return a = (l.ownerDocument || l).createElement(
            "style"
          ), Ql(a), kl(a, "style", n), ku(a, e.precedence, l), t.instance = a;
        case "stylesheet":
          n = Ba(e.href);
          var u = l.querySelector(
            Mn(n)
          );
          if (u)
            return t.state.loading |= 4, t.instance = u, Ql(u), u;
          a = Kd(e), (n = Nt.get(n)) && zf(a, n), u = (l.ownerDocument || l).createElement("link"), Ql(u);
          var i = u;
          return i._p = new Promise(function(s, m) {
            i.onload = s, i.onerror = m;
          }), kl(u, "link", a), t.state.loading |= 4, ku(u, e.precedence, l), t.instance = u;
        case "script":
          return u = La(e.src), (n = l.querySelector(
            On(u)
          )) ? (t.instance = n, Ql(n), n) : (a = e, (n = Nt.get(u)) && (a = H({}, e), Nf(a, n)), l = l.ownerDocument || l, n = l.createElement("script"), Ql(n), kl(n, "link", a), l.head.appendChild(n), t.instance = n);
        case "void":
          return null;
        default:
          throw Error(f(443, t.type));
      }
    else
      t.type === "stylesheet" && (t.state.loading & 4) === 0 && (a = t.instance, t.state.loading |= 4, ku(a, e.precedence, l));
    return t.instance;
  }
  function ku(l, t, e) {
    for (var a = e.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), n = a.length ? a[a.length - 1] : null, u = n, i = 0; i < a.length; i++) {
      var s = a[i];
      if (s.dataset.precedence === t) u = s;
      else if (u !== n) break;
    }
    u ? u.parentNode.insertBefore(l, u.nextSibling) : (t = e.nodeType === 9 ? e.head : e, t.insertBefore(l, t.firstChild));
  }
  function zf(l, t) {
    l.crossOrigin == null && (l.crossOrigin = t.crossOrigin), l.referrerPolicy == null && (l.referrerPolicy = t.referrerPolicy), l.title == null && (l.title = t.title);
  }
  function Nf(l, t) {
    l.crossOrigin == null && (l.crossOrigin = t.crossOrigin), l.referrerPolicy == null && (l.referrerPolicy = t.referrerPolicy), l.integrity == null && (l.integrity = t.integrity);
  }
  var $u = null;
  function kd(l, t, e) {
    if ($u === null) {
      var a = /* @__PURE__ */ new Map(), n = $u = /* @__PURE__ */ new Map();
      n.set(e, a);
    } else
      n = $u, a = n.get(e), a || (a = /* @__PURE__ */ new Map(), n.set(e, a));
    if (a.has(l)) return a;
    for (a.set(l, null), e = e.getElementsByTagName(l), n = 0; n < e.length; n++) {
      var u = e[n];
      if (!(u[Ka] || u[Vl] || l === "link" && u.getAttribute("rel") === "stylesheet") && u.namespaceURI !== "http://www.w3.org/2000/svg") {
        var i = u.getAttribute(t) || "";
        i = l + i;
        var s = a.get(i);
        s ? s.push(u) : a.set(i, [u]);
      }
    }
    return a;
  }
  function $d(l, t, e) {
    l = l.ownerDocument || l, l.head.insertBefore(
      e,
      t === "title" ? l.querySelector("head > title") : null
    );
  }
  function ih(l, t, e) {
    if (e === 1 || t.itemProp != null) return !1;
    switch (l) {
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
            return l = t.disabled, typeof t.precedence == "string" && l == null;
          default:
            return !0;
        }
      case "script":
        if (t.async && typeof t.async != "function" && typeof t.async != "symbol" && !t.onLoad && !t.onError && t.src && typeof t.src == "string")
          return !0;
    }
    return !1;
  }
  function Wd(l) {
    return !(l.type === "stylesheet" && (l.state.loading & 3) === 0);
  }
  function ch(l, t, e, a) {
    if (e.type === "stylesheet" && (typeof a.media != "string" || matchMedia(a.media).matches !== !1) && (e.state.loading & 4) === 0) {
      if (e.instance === null) {
        var n = Ba(a.href), u = t.querySelector(
          Mn(n)
        );
        if (u) {
          t = u._p, t !== null && typeof t == "object" && typeof t.then == "function" && (l.count++, l = Wu.bind(l), t.then(l, l)), e.state.loading |= 4, e.instance = u, Ql(u);
          return;
        }
        u = t.ownerDocument || t, a = Kd(a), (n = Nt.get(n)) && zf(a, n), u = u.createElement("link"), Ql(u);
        var i = u;
        i._p = new Promise(function(s, m) {
          i.onload = s, i.onerror = m;
        }), kl(u, "link", a), e.instance = u;
      }
      l.stylesheets === null && (l.stylesheets = /* @__PURE__ */ new Map()), l.stylesheets.set(e, t), (t = e.state.preload) && (e.state.loading & 3) === 0 && (l.count++, e = Wu.bind(l), t.addEventListener("load", e), t.addEventListener("error", e));
    }
  }
  var jf = 0;
  function fh(l, t) {
    return l.stylesheets && l.count === 0 && Iu(l, l.stylesheets), 0 < l.count || 0 < l.imgCount ? function(e) {
      var a = setTimeout(function() {
        if (l.stylesheets && Iu(l, l.stylesheets), l.unsuspend) {
          var u = l.unsuspend;
          l.unsuspend = null, u();
        }
      }, 6e4 + t);
      0 < l.imgBytes && jf === 0 && (jf = 62500 * Qm());
      var n = setTimeout(
        function() {
          if (l.waitingForImages = !1, l.count === 0 && (l.stylesheets && Iu(l, l.stylesheets), l.unsuspend)) {
            var u = l.unsuspend;
            l.unsuspend = null, u();
          }
        },
        (l.imgBytes > jf ? 50 : 800) + t
      );
      return l.unsuspend = e, function() {
        l.unsuspend = null, clearTimeout(a), clearTimeout(n);
      };
    } : null;
  }
  function Wu() {
    if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
      if (this.stylesheets) Iu(this, this.stylesheets);
      else if (this.unsuspend) {
        var l = this.unsuspend;
        this.unsuspend = null, l();
      }
    }
  }
  var Fu = null;
  function Iu(l, t) {
    l.stylesheets = null, l.unsuspend !== null && (l.count++, Fu = /* @__PURE__ */ new Map(), t.forEach(sh, l), Fu = null, Wu.call(l));
  }
  function sh(l, t) {
    if (!(t.state.loading & 4)) {
      var e = Fu.get(l);
      if (e) var a = e.get(null);
      else {
        e = /* @__PURE__ */ new Map(), Fu.set(l, e);
        for (var n = l.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), u = 0; u < n.length; u++) {
          var i = n[u];
          (i.nodeName === "LINK" || i.getAttribute("media") !== "not all") && (e.set(i.dataset.precedence, i), a = i);
        }
        a && e.set(null, a);
      }
      n = t.instance, i = n.getAttribute("data-precedence"), u = e.get(i) || a, u === a && e.set(null, n), e.set(i, n), this.count++, a = Wu.bind(this), n.addEventListener("load", a), n.addEventListener("error", a), u ? u.parentNode.insertBefore(n, u.nextSibling) : (l = l.nodeType === 9 ? l.head : l, l.insertBefore(n, l.firstChild)), t.state.loading |= 4;
    }
  }
  var Dn = {
    $$typeof: q,
    Provider: null,
    Consumer: null,
    _currentValue: Z,
    _currentValue2: Z,
    _threadCount: 0
  };
  function oh(l, t, e, a, n, u, i, s, m) {
    this.tag = 1, this.containerInfo = l, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Ei(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Ei(0), this.hiddenUpdates = Ei(null), this.identifierPrefix = a, this.onUncaughtError = n, this.onCaughtError = u, this.onRecoverableError = i, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = m, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function Fd(l, t, e, a, n, u, i, s, m, b, T, N) {
    return l = new oh(
      l,
      t,
      e,
      i,
      m,
      b,
      T,
      N,
      s
    ), t = 1, u === !0 && (t |= 24), u = dt(3, null, null, t), l.current = u, u.stateNode = l, t = ic(), t.refCount++, l.pooledCache = t, t.refCount++, u.memoizedState = {
      element: a,
      isDehydrated: e,
      cache: t
    }, oc(u), l;
  }
  function Id(l) {
    return l ? (l = va, l) : va;
  }
  function Pd(l, t, e, a, n, u) {
    n = Id(n), a.context === null ? a.context = n : a.pendingContext = n, a = ge(t), a.payload = { element: e }, u = u === void 0 ? null : u, u !== null && (a.callback = u), e = pe(l, a, t), e !== null && (ct(e, l, t), on(e, l, t));
  }
  function l1(l, t) {
    if (l = l.memoizedState, l !== null && l.dehydrated !== null) {
      var e = l.retryLane;
      l.retryLane = e !== 0 && e < t ? e : t;
    }
  }
  function Cf(l, t) {
    l1(l, t), (l = l.alternate) && l1(l, t);
  }
  function t1(l) {
    if (l.tag === 13 || l.tag === 31) {
      var t = Qe(l, 67108864);
      t !== null && ct(t, l, 67108864), Cf(l, 67108864);
    }
  }
  function e1(l) {
    if (l.tag === 13 || l.tag === 31) {
      var t = gt();
      t = xi(t);
      var e = Qe(l, t);
      e !== null && ct(e, l, t), Cf(l, t);
    }
  }
  var Pu = !0;
  function rh(l, t, e, a) {
    var n = A.T;
    A.T = null;
    var u = U.p;
    try {
      U.p = 2, Mf(l, t, e, a);
    } finally {
      U.p = u, A.T = n;
    }
  }
  function dh(l, t, e, a) {
    var n = A.T;
    A.T = null;
    var u = U.p;
    try {
      U.p = 8, Mf(l, t, e, a);
    } finally {
      U.p = u, A.T = n;
    }
  }
  function Mf(l, t, e, a) {
    if (Pu) {
      var n = Of(a);
      if (n === null)
        yf(
          l,
          t,
          a,
          li,
          e
        ), n1(l, a);
      else if (hh(
        n,
        l,
        t,
        e,
        a
      ))
        a.stopPropagation();
      else if (n1(l, a), t & 4 && -1 < mh.indexOf(l)) {
        for (; n !== null; ) {
          var u = na(n);
          if (u !== null)
            switch (u.tag) {
              case 3:
                if (u = u.stateNode, u.current.memoizedState.isDehydrated) {
                  var i = Be(u.pendingLanes);
                  if (i !== 0) {
                    var s = u;
                    for (s.pendingLanes |= 2, s.entangledLanes |= 2; i; ) {
                      var m = 1 << 31 - ot(i);
                      s.entanglements[1] |= m, i &= ~m;
                    }
                    Yt(u), (dl & 6) === 0 && (qu = ft() + 500, zn(0));
                  }
                }
                break;
              case 31:
              case 13:
                s = Qe(u, 2), s !== null && ct(s, u, 2), Lu(), Cf(u, 2);
            }
          if (u = Of(a), u === null && yf(
            l,
            t,
            a,
            li,
            e
          ), u === n) break;
          n = u;
        }
        n !== null && a.stopPropagation();
      } else
        yf(
          l,
          t,
          a,
          null,
          e
        );
    }
  }
  function Of(l) {
    return l = Di(l), Df(l);
  }
  var li = null;
  function Df(l) {
    if (li = null, l = aa(l), l !== null) {
      var t = x(l);
      if (t === null) l = null;
      else {
        var e = t.tag;
        if (e === 13) {
          if (l = O(t), l !== null) return l;
          l = null;
        } else if (e === 31) {
          if (l = C(t), l !== null) return l;
          l = null;
        } else if (e === 3) {
          if (t.stateNode.current.memoizedState.isDehydrated)
            return t.tag === 3 ? t.stateNode.containerInfo : null;
          l = null;
        } else t !== l && (l = null);
      }
    }
    return li = l, null;
  }
  function a1(l) {
    switch (l) {
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
        switch (I1()) {
          case os:
            return 2;
          case rs:
            return 8;
          case Xn:
          case P1:
            return 32;
          case ds:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var Uf = !1, Ce = null, Me = null, Oe = null, Un = /* @__PURE__ */ new Map(), Rn = /* @__PURE__ */ new Map(), De = [], mh = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function n1(l, t) {
    switch (l) {
      case "focusin":
      case "focusout":
        Ce = null;
        break;
      case "dragenter":
      case "dragleave":
        Me = null;
        break;
      case "mouseover":
      case "mouseout":
        Oe = null;
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
  function Hn(l, t, e, a, n, u) {
    return l === null || l.nativeEvent !== u ? (l = {
      blockedOn: t,
      domEventName: e,
      eventSystemFlags: a,
      nativeEvent: u,
      targetContainers: [n]
    }, t !== null && (t = na(t), t !== null && t1(t)), l) : (l.eventSystemFlags |= a, t = l.targetContainers, n !== null && t.indexOf(n) === -1 && t.push(n), l);
  }
  function hh(l, t, e, a, n) {
    switch (t) {
      case "focusin":
        return Ce = Hn(
          Ce,
          l,
          t,
          e,
          a,
          n
        ), !0;
      case "dragenter":
        return Me = Hn(
          Me,
          l,
          t,
          e,
          a,
          n
        ), !0;
      case "mouseover":
        return Oe = Hn(
          Oe,
          l,
          t,
          e,
          a,
          n
        ), !0;
      case "pointerover":
        var u = n.pointerId;
        return Un.set(
          u,
          Hn(
            Un.get(u) || null,
            l,
            t,
            e,
            a,
            n
          )
        ), !0;
      case "gotpointercapture":
        return u = n.pointerId, Rn.set(
          u,
          Hn(
            Rn.get(u) || null,
            l,
            t,
            e,
            a,
            n
          )
        ), !0;
    }
    return !1;
  }
  function u1(l) {
    var t = aa(l.target);
    if (t !== null) {
      var e = x(t);
      if (e !== null) {
        if (t = e.tag, t === 13) {
          if (t = O(e), t !== null) {
            l.blockedOn = t, ps(l.priority, function() {
              e1(e);
            });
            return;
          }
        } else if (t === 31) {
          if (t = C(e), t !== null) {
            l.blockedOn = t, ps(l.priority, function() {
              e1(e);
            });
            return;
          }
        } else if (t === 3 && e.stateNode.current.memoizedState.isDehydrated) {
          l.blockedOn = e.tag === 3 ? e.stateNode.containerInfo : null;
          return;
        }
      }
    }
    l.blockedOn = null;
  }
  function ti(l) {
    if (l.blockedOn !== null) return !1;
    for (var t = l.targetContainers; 0 < t.length; ) {
      var e = Of(l.nativeEvent);
      if (e === null) {
        e = l.nativeEvent;
        var a = new e.constructor(
          e.type,
          e
        );
        Oi = a, e.target.dispatchEvent(a), Oi = null;
      } else
        return t = na(e), t !== null && t1(t), l.blockedOn = e, !1;
      t.shift();
    }
    return !0;
  }
  function i1(l, t, e) {
    ti(l) && e.delete(t);
  }
  function vh() {
    Uf = !1, Ce !== null && ti(Ce) && (Ce = null), Me !== null && ti(Me) && (Me = null), Oe !== null && ti(Oe) && (Oe = null), Un.forEach(i1), Rn.forEach(i1);
  }
  function ei(l, t) {
    l.blockedOn === t && (l.blockedOn = null, Uf || (Uf = !0, c.unstable_scheduleCallback(
      c.unstable_NormalPriority,
      vh
    )));
  }
  var ai = null;
  function c1(l) {
    ai !== l && (ai = l, c.unstable_scheduleCallback(
      c.unstable_NormalPriority,
      function() {
        ai === l && (ai = null);
        for (var t = 0; t < l.length; t += 3) {
          var e = l[t], a = l[t + 1], n = l[t + 2];
          if (typeof a != "function") {
            if (Df(a || e) === null)
              continue;
            break;
          }
          var u = na(e);
          u !== null && (l.splice(t, 3), t -= 3, Mc(
            u,
            {
              pending: !0,
              data: n,
              method: e.method,
              action: a
            },
            a,
            n
          ));
        }
      }
    ));
  }
  function Ya(l) {
    function t(m) {
      return ei(m, l);
    }
    Ce !== null && ei(Ce, l), Me !== null && ei(Me, l), Oe !== null && ei(Oe, l), Un.forEach(t), Rn.forEach(t);
    for (var e = 0; e < De.length; e++) {
      var a = De[e];
      a.blockedOn === l && (a.blockedOn = null);
    }
    for (; 0 < De.length && (e = De[0], e.blockedOn === null); )
      u1(e), e.blockedOn === null && De.shift();
    if (e = (l.ownerDocument || l).$$reactFormReplay, e != null)
      for (a = 0; a < e.length; a += 3) {
        var n = e[a], u = e[a + 1], i = n[tt] || null;
        if (typeof u == "function")
          i || c1(e);
        else if (i) {
          var s = null;
          if (u && u.hasAttribute("formAction")) {
            if (n = u, i = u[tt] || null)
              s = i.formAction;
            else if (Df(n) !== null) continue;
          } else s = i.action;
          typeof s == "function" ? e[a + 1] = s : (e.splice(a, 3), a -= 3), c1(e);
        }
      }
  }
  function f1() {
    function l(u) {
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
    function t() {
      n !== null && (n(), n = null), a || setTimeout(e, 20);
    }
    function e() {
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
      return navigation.addEventListener("navigate", l), navigation.addEventListener("navigatesuccess", t), navigation.addEventListener("navigateerror", t), setTimeout(e, 100), function() {
        a = !0, navigation.removeEventListener("navigate", l), navigation.removeEventListener("navigatesuccess", t), navigation.removeEventListener("navigateerror", t), n !== null && (n(), n = null);
      };
    }
  }
  function Rf(l) {
    this._internalRoot = l;
  }
  ni.prototype.render = Rf.prototype.render = function(l) {
    var t = this._internalRoot;
    if (t === null) throw Error(f(409));
    var e = t.current, a = gt();
    Pd(e, a, l, t, null, null);
  }, ni.prototype.unmount = Rf.prototype.unmount = function() {
    var l = this._internalRoot;
    if (l !== null) {
      this._internalRoot = null;
      var t = l.containerInfo;
      Pd(l.current, 2, null, l, null, null), Lu(), t[ea] = null;
    }
  };
  function ni(l) {
    this._internalRoot = l;
  }
  ni.prototype.unstable_scheduleHydration = function(l) {
    if (l) {
      var t = gs();
      l = { blockedOn: null, target: l, priority: t };
      for (var e = 0; e < De.length && t !== 0 && t < De[e].priority; e++) ;
      De.splice(e, 0, l), e === 0 && u1(l);
    }
  };
  var s1 = d.version;
  if (s1 !== "19.2.3")
    throw Error(
      f(
        527,
        s1,
        "19.2.3"
      )
    );
  U.findDOMNode = function(l) {
    var t = l._reactInternals;
    if (t === void 0)
      throw typeof l.render == "function" ? Error(f(188)) : (l = Object.keys(l).join(","), Error(f(268, l)));
    return l = S(t), l = l !== null ? D(l) : null, l = l === null ? null : l.stateNode, l;
  };
  var yh = {
    bundleType: 0,
    version: "19.2.3",
    rendererPackageName: "react-dom",
    currentDispatcherRef: A,
    reconcilerVersion: "19.2.3"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var ui = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!ui.isDisabled && ui.supportsFiber)
      try {
        Xa = ui.inject(
          yh
        ), st = ui;
      } catch {
      }
  }
  return qn.createRoot = function(l, t) {
    if (!g(l)) throw Error(f(299));
    var e = !1, a = "", n = yr, u = gr, i = pr;
    return t != null && (t.unstable_strictMode === !0 && (e = !0), t.identifierPrefix !== void 0 && (a = t.identifierPrefix), t.onUncaughtError !== void 0 && (n = t.onUncaughtError), t.onCaughtError !== void 0 && (u = t.onCaughtError), t.onRecoverableError !== void 0 && (i = t.onRecoverableError)), t = Fd(
      l,
      1,
      !1,
      null,
      null,
      e,
      a,
      null,
      n,
      u,
      i,
      f1
    ), l[ea] = t.current, vf(l), new Rf(t);
  }, qn.hydrateRoot = function(l, t, e) {
    if (!g(l)) throw Error(f(299));
    var a = !1, n = "", u = yr, i = gr, s = pr, m = null;
    return e != null && (e.unstable_strictMode === !0 && (a = !0), e.identifierPrefix !== void 0 && (n = e.identifierPrefix), e.onUncaughtError !== void 0 && (u = e.onUncaughtError), e.onCaughtError !== void 0 && (i = e.onCaughtError), e.onRecoverableError !== void 0 && (s = e.onRecoverableError), e.formState !== void 0 && (m = e.formState)), t = Fd(
      l,
      1,
      !0,
      t,
      e ?? null,
      a,
      n,
      m,
      u,
      i,
      s,
      f1
    ), t.context = Id(null), e = t.current, a = gt(), a = xi(a), n = ge(a), n.callback = null, pe(e, n, a), e = a, t.current.lanes = e, Za(t, e), Yt(t), l[ea] = t.current, vf(l), new ni(t);
  }, qn.version = "19.2.3", qn;
}
var g1;
function Th() {
  if (g1) return qf.exports;
  g1 = 1;
  function c() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(c);
      } catch (d) {
        console.error(d);
      }
  }
  return c(), qf.exports = xh(), qf.exports;
}
var Ah = Th();
const zh = /* @__PURE__ */ U1(Ah);
var Gf = { exports: {} }, Bn = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var p1;
function Nh() {
  if (p1) return Bn;
  p1 = 1;
  var c = Symbol.for("react.transitional.element"), d = Symbol.for("react.fragment");
  function o(f, g, x) {
    var O = null;
    if (x !== void 0 && (O = "" + x), g.key !== void 0 && (O = "" + g.key), "key" in g) {
      x = {};
      for (var C in g)
        C !== "key" && (x[C] = g[C]);
    } else x = g;
    return g = x.ref, {
      $$typeof: c,
      type: f,
      key: O,
      ref: g !== void 0 ? g : null,
      props: x
    };
  }
  return Bn.Fragment = d, Bn.jsx = o, Bn.jsxs = o, Bn;
}
var b1;
function jh() {
  return b1 || (b1 = 1, Gf.exports = Nh()), Gf.exports;
}
var r = jh();
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ch = (c) => c.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), Mh = (c) => c.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (d, o, f) => f ? f.toUpperCase() : o.toLowerCase()
), S1 = (c) => {
  const d = Mh(c);
  return d.charAt(0).toUpperCase() + d.slice(1);
}, R1 = (...c) => c.filter((d, o, f) => !!d && d.trim() !== "" && f.indexOf(d) === o).join(" ").trim(), Oh = (c) => {
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
var Dh = {
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
const Uh = V.forwardRef(
  ({
    color: c = "currentColor",
    size: d = 24,
    strokeWidth: o = 2,
    absoluteStrokeWidth: f,
    className: g = "",
    children: x,
    iconNode: O,
    ...C
  }, j) => V.createElement(
    "svg",
    {
      ref: j,
      ...Dh,
      width: d,
      height: d,
      stroke: c,
      strokeWidth: f ? Number(o) * 24 / Number(d) : o,
      className: R1("lucide", g),
      ...!x && !Oh(C) && { "aria-hidden": "true" },
      ...C
    },
    [
      ...O.map(([S, D]) => V.createElement(S, D)),
      ...Array.isArray(x) ? x : [x]
    ]
  )
);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const sl = (c, d) => {
  const o = V.forwardRef(
    ({ className: f, ...g }, x) => V.createElement(Uh, {
      ref: x,
      iconNode: d,
      className: R1(
        `lucide-${Ch(S1(c))}`,
        `lucide-${c}`,
        f
      ),
      ...g
    })
  );
  return o.displayName = S1(c), o;
};
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Rh = [
  ["path", { d: "M12 17V3", key: "1cwfxf" }],
  ["path", { d: "m6 11 6 6 6-6", key: "12ii2o" }],
  ["path", { d: "M19 21H5", key: "150jfl" }]
], Hh = sl("arrow-down-to-line", Rh);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const qh = [
  ["path", { d: "M12 18V5", key: "adv99a" }],
  ["path", { d: "M15 13a4.17 4.17 0 0 1-3-4 4.17 4.17 0 0 1-3 4", key: "1e3is1" }],
  ["path", { d: "M17.598 6.5A3 3 0 1 0 12 5a3 3 0 1 0-5.598 1.5", key: "1gqd8o" }],
  ["path", { d: "M17.997 5.125a4 4 0 0 1 2.526 5.77", key: "iwvgf7" }],
  ["path", { d: "M18 18a4 4 0 0 0 2-7.464", key: "efp6ie" }],
  ["path", { d: "M19.967 17.483A4 4 0 1 1 12 18a4 4 0 1 1-7.967-.517", key: "1gq6am" }],
  ["path", { d: "M6 18a4 4 0 0 1-2-7.464", key: "k1g0md" }],
  ["path", { d: "M6.003 5.125a4 4 0 0 0-2.526 5.77", key: "q97ue3" }]
], as = sl("brain", qh);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Bh = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]], Lh = sl("check", Bh);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Yh = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]], Gh = sl("chevron-down", Yh);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const wh = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]], Qh = sl("chevron-right", wh);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Xh = [
  ["path", { d: "M12 6v6l4 2", key: "mmk7yg" }],
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]
], Vh = sl("clock", Xh);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Zh = [
  ["path", { d: "M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z", key: "p7xjir" }]
], Kh = sl("cloud", Zh);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Jh = [
  [
    "path",
    { d: "M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3", key: "11bfej" }
  ]
], kh = sl("command", Jh);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $h = [
  ["rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2", key: "17jyea" }],
  ["path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2", key: "zix9uf" }]
], Wh = sl("copy", $h);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Fh = [
  ["path", { d: "M20 4v7a4 4 0 0 1-4 4H4", key: "6o5b7l" }],
  ["path", { d: "m9 10-5 5 5 5", key: "1kshq7" }]
], _1 = sl("corner-down-left", Fh);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ih = [
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
], H1 = sl("cpu", Ih);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ph = [
  ["ellipse", { cx: "12", cy: "5", rx: "9", ry: "3", key: "msslwz" }],
  ["path", { d: "M3 5V19A9 3 0 0 0 21 19V5", key: "1wlel7" }],
  ["path", { d: "M3 12A9 3 0 0 0 21 12", key: "mv7ke4" }]
], lv = sl("database", Ph);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const tv = [
  ["path", { d: "M12 15V3", key: "m9g1x1" }],
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
  ["path", { d: "m7 10 5 5 5-5", key: "brsn70" }]
], ev = sl("download", tv);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const av = [
  [
    "path",
    {
      d: "M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z",
      key: "sc7q7i"
    }
  ]
], E1 = sl("funnel", av);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const nv = [
  ["path", { d: "m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4", key: "g0fldk" }],
  ["path", { d: "m21 2-9.6 9.6", key: "1j0ho8" }],
  ["circle", { cx: "7.5", cy: "15.5", r: "5.5", key: "yqb3hr" }]
], Yn = sl("key", nv);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const uv = [
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
], iv = sl("layers", uv);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const cv = [
  ["rect", { width: "7", height: "9", x: "3", y: "3", rx: "1", key: "10lvy0" }],
  ["rect", { width: "7", height: "5", x: "14", y: "3", rx: "1", key: "16une8" }],
  ["rect", { width: "7", height: "9", x: "14", y: "12", rx: "1", key: "1hutg5" }],
  ["rect", { width: "7", height: "5", x: "3", y: "16", rx: "1", key: "ldoo1y" }]
], fv = sl("layout-dashboard", cv);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const sv = [
  ["path", { d: "M3 5h.01", key: "18ugdj" }],
  ["path", { d: "M3 12h.01", key: "nlz23k" }],
  ["path", { d: "M3 19h.01", key: "noohij" }],
  ["path", { d: "M8 5h13", key: "1pao27" }],
  ["path", { d: "M8 12h13", key: "1za7za" }],
  ["path", { d: "M8 19h13", key: "m83p4d" }]
], q1 = sl("list", sv);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ov = [
  ["path", { d: "M15 3h6v6", key: "1q9fwt" }],
  ["path", { d: "m21 3-7 7", key: "1l2asr" }],
  ["path", { d: "m3 21 7-7", key: "tjx5ai" }],
  ["path", { d: "M9 21H3v-6", key: "wtvkvv" }]
], rv = sl("maximize-2", ov);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const dv = [
  ["path", { d: "M4 5h16", key: "1tepv9" }],
  ["path", { d: "M4 12h16", key: "1lakjw" }],
  ["path", { d: "M4 19h16", key: "1djgab" }]
], mv = sl("menu", dv);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const hv = [
  ["path", { d: "m14 10 7-7", key: "oa77jy" }],
  ["path", { d: "M20 10h-6V4", key: "mjg0md" }],
  ["path", { d: "m3 21 7-7", key: "tjx5ai" }],
  ["path", { d: "M4 14h6v6", key: "rmj7iw" }]
], vv = sl("minimize-2", hv);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const yv = [
  ["rect", { x: "16", y: "16", width: "6", height: "6", rx: "1", key: "4q2zg0" }],
  ["rect", { x: "2", y: "16", width: "6", height: "6", rx: "1", key: "8cvhb9" }],
  ["rect", { x: "9", y: "2", width: "6", height: "6", rx: "1", key: "1egb70" }],
  ["path", { d: "M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3", key: "1jsf9p" }],
  ["path", { d: "M12 12V8", key: "2874zd" }]
], ns = sl("network", yv);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const gv = [
  [
    "path",
    {
      d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
      key: "1a8usu"
    }
  ]
], pv = sl("pen", gv);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const bv = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
], Sv = sl("plus", bv);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const _v = [
  ["path", { d: "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8", key: "v9h5vc" }],
  ["path", { d: "M21 3v5h-5", key: "1q7to0" }],
  ["path", { d: "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16", key: "3uifl3" }],
  ["path", { d: "M8 16H3v5", key: "1cv678" }]
], Ev = sl("refresh-cw", _v);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const xv = [
  [
    "path",
    {
      d: "M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",
      key: "1c8476"
    }
  ],
  ["path", { d: "M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7", key: "1ydtos" }],
  ["path", { d: "M7 3v4a1 1 0 0 0 1 1h7", key: "t51u73" }]
], Tv = sl("save", xv);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Av = [
  ["path", { d: "m21 21-4.34-4.34", key: "14j7rj" }],
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }]
], Kf = sl("search", Av);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const zv = [
  ["rect", { width: "20", height: "8", x: "2", y: "2", rx: "2", ry: "2", key: "ngkwjq" }],
  ["rect", { width: "20", height: "8", x: "2", y: "14", rx: "2", ry: "2", key: "iecqi9" }],
  ["line", { x1: "6", x2: "6.01", y1: "6", y2: "6", key: "16zg32" }],
  ["line", { x1: "6", x2: "6.01", y1: "18", y2: "18", key: "nzw8ys" }]
], B1 = sl("server", zv);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Nv = [
  [
    "path",
    {
      d: "M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",
      key: "1i5ecw"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
], us = sl("settings", Nv);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const jv = [
  ["path", { d: "M12 19h8", key: "baeox8" }],
  ["path", { d: "m4 17 6-6-6-6", key: "1yngyt" }]
], Gn = sl("terminal", jv);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Cv = [
  ["path", { d: "M10 11v6", key: "nco0om" }],
  ["path", { d: "M14 11v6", key: "outv1u" }],
  ["path", { d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6", key: "miytrc" }],
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2", key: "e791ji" }]
], L1 = sl("trash-2", Cv);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Mv = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
], Y1 = sl("x", Mv);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ov = [
  [
    "path",
    {
      d: "M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",
      key: "1xq2db"
    }
  ]
], Dv = sl("zap", Ov), Jf = [
  // 导航命令
  {
    id: "nav-memory",
    icon: q1,
    label: "前往记忆流",
    description: "查看所有记忆片段的时间线",
    action: (c) => c("/memory"),
    keywords: ["memory", "stream", "timeline", "记忆"],
    type: "navigation"
  },
  {
    id: "nav-graph",
    icon: ns,
    label: "前往世界图谱",
    description: "探索实体关系可视化网络",
    action: (c) => c("/graph"),
    keywords: ["graph", "world", "map", "图谱"],
    type: "navigation"
  },
  {
    id: "nav-brain",
    icon: as,
    label: "前往大脑控制台",
    description: "记忆操作、总结与向量化",
    action: (c) => c("/brain"),
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
    icon: Gn,
    label: "开发日志",
    description: "查看系统运行日志和状态",
    action: (c) => c("/dev"),
    keywords: ["dev", "log", "debug", "日志"],
    type: "navigation"
  },
  {
    id: "nav-settings",
    icon: us,
    label: "系统设置",
    description: "调整 Engram 全局选项",
    action: (c) => c("/settings"),
    keywords: ["settings", "config", "option", "选项"],
    type: "navigation"
  }
];
function Uv(c) {
  const d = c.toLowerCase().trim();
  return d ? Jf.filter((o) => {
    var f;
    return o.label.toLowerCase().includes(d) || ((f = o.description) == null ? void 0 : f.toLowerCase().includes(d)) || o.keywords.some((g) => g.toLowerCase().includes(d));
  }) : Jf;
}
const Rv = ({ onNavigate: c }) => {
  const [d, o] = V.useState(""), [f, g] = V.useState(!1), [x, O] = V.useState(0), [C, j] = V.useState(Jf), S = V.useRef(null), D = V.useRef(null);
  V.useEffect(() => {
    j(Uv(d)), O(0);
  }, [d]), V.useEffect(() => {
    const w = (el) => {
      S.current && !S.current.contains(el.target) && g(!1);
    };
    return document.addEventListener("mousedown", w), () => document.removeEventListener("mousedown", w);
  }, []), V.useEffect(() => {
    const w = (el) => {
      var F;
      (el.metaKey || el.ctrlKey) && el.key === "k" && (el.preventDefault(), (F = D.current) == null || F.focus(), g(!0));
    };
    return window.addEventListener("keydown", w), () => window.removeEventListener("keydown", w);
  }, []);
  const H = (w) => {
    var F;
    if (!f) {
      (w.key === "ArrowDown" || w.key === "Enter") && g(!0);
      return;
    }
    const el = C.length + (d ? 1 : 0);
    switch (w.key) {
      case "ArrowDown":
        w.preventDefault(), O((G) => (G + 1) % el);
        break;
      case "ArrowUp":
        w.preventDefault(), O((G) => (G - 1 + el) % el);
        break;
      case "Enter":
        w.preventDefault(), J();
        break;
      case "Escape":
        g(!1), (F = D.current) == null || F.blur();
        break;
    }
  }, J = () => {
    C.length > 0 && x < C.length ? C[x].action(c) : d && (console.log("Searching memory for:", d), c("/memory")), g(!1), o("");
  };
  return /* @__PURE__ */ r.jsxs("div", { className: "engram-command-palette", ref: S, children: [
    /* @__PURE__ */ r.jsxs("div", { className: `engram-cp-input-wrapper ${f ? "active" : ""}`, children: [
      /* @__PURE__ */ r.jsx(Kf, { size: 16, className: "engram-cp-icon" }),
      /* @__PURE__ */ r.jsx(
        "input",
        {
          ref: D,
          type: "text",
          className: "engram-cp-input",
          placeholder: "搜索命令、页面或记忆... (Cmd+K)",
          value: d,
          onChange: (w) => {
            o(w.target.value), g(!0);
          },
          onFocus: () => g(!0),
          onKeyDown: H
        }
      ),
      !d && /* @__PURE__ */ r.jsxs("div", { className: "engram-cp-shortcut", children: [
        /* @__PURE__ */ r.jsx(kh, { size: 12 }),
        "K"
      ] })
    ] }),
    f && /* @__PURE__ */ r.jsxs("div", { className: "engram-cp-dropdown", children: [
      C.length > 0 && /* @__PURE__ */ r.jsxs("div", { className: "engram-cp-group", children: [
        /* @__PURE__ */ r.jsx("div", { className: "engram-cp-label", children: "功能与导航" }),
        C.map((w, el) => /* @__PURE__ */ r.jsxs(
          "div",
          {
            className: `engram-cp-item ${el === x ? "selected" : ""}`,
            onClick: () => {
              w.action(c), g(!1), o("");
            },
            children: [
              /* @__PURE__ */ r.jsx(w.icon, { size: 16, className: "engram-cp-item-icon" }),
              /* @__PURE__ */ r.jsxs("div", { className: "engram-cp-item-content", children: [
                /* @__PURE__ */ r.jsx("div", { className: "engram-cp-item-title", children: w.label }),
                w.description && /* @__PURE__ */ r.jsx("div", { className: "engram-cp-item-desc", children: w.description })
              ] }),
              el === x && /* @__PURE__ */ r.jsx(_1, { size: 14, className: "engram-cp-enter" })
            ]
          },
          w.id
        ))
      ] }),
      d && /* @__PURE__ */ r.jsxs("div", { className: "engram-cp-group", children: [
        /* @__PURE__ */ r.jsx("div", { className: "engram-cp-label", children: "搜索" }),
        /* @__PURE__ */ r.jsxs(
          "div",
          {
            className: `engram-cp-item ${x === C.length ? "selected" : ""}`,
            onClick: () => {
              J();
            },
            children: [
              /* @__PURE__ */ r.jsx(Kf, { size: 16, className: "engram-cp-item-icon" }),
              /* @__PURE__ */ r.jsxs("div", { className: "engram-cp-item-content", children: [
                /* @__PURE__ */ r.jsxs("div", { className: "engram-cp-item-title", children: [
                  '搜索记忆: "',
                  d,
                  '"'
                ] }),
                /* @__PURE__ */ r.jsx("div", { className: "engram-cp-item-desc", children: "在记忆流和图谱中搜索此关键词" })
              ] }),
              x === C.length && /* @__PURE__ */ r.jsx(_1, { size: 14, className: "engram-cp-enter" })
            ]
          }
        )
      ] }),
      C.length === 0 && !d && /* @__PURE__ */ r.jsx("div", { className: "engram-cp-empty", children: "无需搜索，直接输入..." })
    ] })
  ] });
}, Hv = ({
  isFullscreen: c,
  onToggleFullscreen: d,
  onToggleSidebar: o,
  isMobile: f,
  onClose: g,
  onNavigate: x
}) => /* @__PURE__ */ r.jsxs("header", { className: "engram-header", children: [
  /* @__PURE__ */ r.jsxs("div", { className: "engram-header-left", children: [
    f && /* @__PURE__ */ r.jsx(
      "button",
      {
        className: "engram-icon-btn",
        onClick: o,
        title: "菜单",
        children: /* @__PURE__ */ r.jsx(mv, { size: 20 })
      }
    ),
    /* @__PURE__ */ r.jsx("span", { className: "engram-logo-text", children: "Engram" })
  ] }),
  /* @__PURE__ */ r.jsx("div", { className: "engram-header-center", children: /* @__PURE__ */ r.jsx(Rv, { onNavigate: x }) }),
  /* @__PURE__ */ r.jsxs("div", { className: "engram-header-right", children: [
    /* @__PURE__ */ r.jsx(
      "button",
      {
        className: "engram-icon-btn",
        onClick: d,
        title: c ? "退出全屏" : "全屏",
        children: c ? /* @__PURE__ */ r.jsx(vv, { size: 18 }) : /* @__PURE__ */ r.jsx(rv, { size: 18 })
      }
    ),
    /* @__PURE__ */ r.jsx(
      "button",
      {
        className: "engram-icon-btn engram-close-btn",
        onClick: g,
        title: "关闭",
        children: /* @__PURE__ */ r.jsx(Y1, { size: 18 })
      }
    )
  ] })
] }), qv = [
  { id: "dashboard", icon: fv, label: "仪表盘", path: "/dashboard" },
  { id: "memory", icon: q1, label: "记忆流", path: "/memory" },
  { id: "graph", icon: ns, label: "世界图谱", path: "/graph" },
  { id: "brain", icon: as, label: "记忆", path: "/brain" },
  { id: "api", icon: Yn, label: "API 预设", path: "/api" },
  { id: "dev", icon: Gn, label: "开发日志", path: "/dev" },
  { id: "settings", icon: us, label: "设置", path: "/settings" }
], Bv = ({
  currentPath: c,
  onNavigate: d,
  isOpen: o,
  onClose: f,
  isMobile: g
}) => {
  const x = (C) => {
    d(C.path), g && f();
  }, O = (C) => c.startsWith(C);
  return g && !o ? null : /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
    g && o && /* @__PURE__ */ r.jsx("div", { className: "engram-sidebar-overlay", onClick: f }),
    /* @__PURE__ */ r.jsxs("nav", { className: `engram-sidebar ${o ? "open" : ""}`, children: [
      g && /* @__PURE__ */ r.jsxs("div", { className: "engram-sidebar-header", children: [
        /* @__PURE__ */ r.jsx("span", { children: "导航" }),
        /* @__PURE__ */ r.jsx("button", { className: "engram-icon-btn", onClick: f, children: /* @__PURE__ */ r.jsx(Y1, { size: 18 }) })
      ] }),
      /* @__PURE__ */ r.jsx("ul", { className: "engram-nav-list", children: qv.map((C) => /* @__PURE__ */ r.jsx("li", { className: "engram-nav-item", children: /* @__PURE__ */ r.jsx(
        "button",
        {
          className: `engram-nav-btn ${O(C.path) ? "active" : ""}`,
          onClick: () => x(C),
          title: C.label,
          children: /* @__PURE__ */ r.jsx(C.icon, { size: 20 })
        }
      ) }, C.id)) })
    ] })
  ] });
}, Lv = ({
  children: c,
  currentPath: d,
  onNavigate: o,
  isFullscreen: f,
  onToggleFullscreen: g,
  isSidebarOpen: x,
  onToggleSidebar: O,
  onCloseSidebar: C,
  isMobile: j,
  onClose: S
}) => /* @__PURE__ */ r.jsxs("div", { className: `engram-layout ${f ? "eg-fullscreen" : ""}`, children: [
  /* @__PURE__ */ r.jsx(
    Hv,
    {
      isFullscreen: f,
      onToggleFullscreen: g,
      onToggleSidebar: O,
      isMobile: j,
      onClose: S,
      onNavigate: o
    }
  ),
  /* @__PURE__ */ r.jsxs("div", { className: "engram-body", children: [
    /* @__PURE__ */ r.jsx(
      Bv,
      {
        currentPath: d,
        onNavigate: o,
        isOpen: x,
        onClose: C,
        isMobile: j
      }
    ),
    /* @__PURE__ */ r.jsx("main", { className: "engram-content", children: c })
  ] })
] }), wf = ({
  title: c,
  value: d,
  icon: o,
  subtext: f,
  highlight: g = !1
}) => /* @__PURE__ */ r.jsxs("div", { className: `engram-stats-card ${g ? "highlight" : ""}`, children: [
  /* @__PURE__ */ r.jsxs("div", { className: "stats-header", children: [
    /* @__PURE__ */ r.jsx("div", { className: "stats-icon-wrapper", children: /* @__PURE__ */ r.jsx(o, { size: 20 }) }),
    g && /* @__PURE__ */ r.jsx("div", { className: "stats-pulse" })
  ] }),
  /* @__PURE__ */ r.jsxs("div", { className: "stats-content", children: [
    /* @__PURE__ */ r.jsx("div", { className: "stats-value", children: d }),
    /* @__PURE__ */ r.jsx("div", { className: "stats-title", children: c }),
    f && /* @__PURE__ */ r.jsx("div", { className: "stats-subtext", children: f })
  ] })
] }), $l = [];
for (let c = 0; c < 256; ++c)
  $l.push((c + 256).toString(16).slice(1));
function Yv(c, d = 0) {
  return ($l[c[d + 0]] + $l[c[d + 1]] + $l[c[d + 2]] + $l[c[d + 3]] + "-" + $l[c[d + 4]] + $l[c[d + 5]] + "-" + $l[c[d + 6]] + $l[c[d + 7]] + "-" + $l[c[d + 8]] + $l[c[d + 9]] + "-" + $l[c[d + 10]] + $l[c[d + 11]] + $l[c[d + 12]] + $l[c[d + 13]] + $l[c[d + 14]] + $l[c[d + 15]]).toLowerCase();
}
let Qf;
const Gv = new Uint8Array(16);
function wv() {
  if (!Qf) {
    if (typeof crypto > "u" || !crypto.getRandomValues)
      throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
    Qf = crypto.getRandomValues.bind(crypto);
  }
  return Qf(Gv);
}
const Qv = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto), x1 = { randomUUID: Qv };
function Xv(c, d, o) {
  var g;
  c = c || {};
  const f = c.random ?? ((g = c.rng) == null ? void 0 : g.call(c)) ?? wv();
  if (f.length < 16)
    throw new Error("Random bytes length must be >= 16");
  return f[6] = f[6] & 15 | 64, f[8] = f[8] & 63 | 128, Yv(f);
}
function Vv(c, d, o) {
  return x1.randomUUID && !c ? x1.randomUUID() : Xv(c);
}
var kf = function(c, d) {
  return kf = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(o, f) {
    o.__proto__ = f;
  } || function(o, f) {
    for (var g in f) Object.prototype.hasOwnProperty.call(f, g) && (o[g] = f[g]);
  }, kf(c, d);
};
function wn(c, d) {
  if (typeof d != "function" && d !== null)
    throw new TypeError("Class extends value " + String(d) + " is not a constructor or null");
  kf(c, d);
  function o() {
    this.constructor = c;
  }
  c.prototype = d === null ? Object.create(d) : (o.prototype = d.prototype, new o());
}
function $f(c) {
  var d = typeof Symbol == "function" && Symbol.iterator, o = d && c[d], f = 0;
  if (o) return o.call(c);
  if (c && typeof c.length == "number") return {
    next: function() {
      return c && f >= c.length && (c = void 0), { value: c && c[f++], done: !c };
    }
  };
  throw new TypeError(d ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function Wf(c, d) {
  var o = typeof Symbol == "function" && c[Symbol.iterator];
  if (!o) return c;
  var f = o.call(c), g, x = [], O;
  try {
    for (; (d === void 0 || d-- > 0) && !(g = f.next()).done; ) x.push(g.value);
  } catch (C) {
    O = { error: C };
  } finally {
    try {
      g && !g.done && (o = f.return) && o.call(f);
    } finally {
      if (O) throw O.error;
    }
  }
  return x;
}
function Ff(c, d, o) {
  if (o || arguments.length === 2) for (var f = 0, g = d.length, x; f < g; f++)
    (x || !(f in d)) && (x || (x = Array.prototype.slice.call(d, 0, f)), x[f] = d[f]);
  return c.concat(x || Array.prototype.slice.call(d));
}
function Qt(c) {
  return typeof c == "function";
}
function G1(c) {
  var d = function(f) {
    Error.call(f), f.stack = new Error().stack;
  }, o = c(d);
  return o.prototype = Object.create(Error.prototype), o.prototype.constructor = o, o;
}
var Xf = G1(function(c) {
  return function(o) {
    c(this), this.message = o ? o.length + ` errors occurred during unsubscription:
` + o.map(function(f, g) {
      return g + 1 + ") " + f.toString();
    }).join(`
  `) : "", this.name = "UnsubscriptionError", this.errors = o;
  };
});
function If(c, d) {
  if (c) {
    var o = c.indexOf(d);
    0 <= o && c.splice(o, 1);
  }
}
var vi = (function() {
  function c(d) {
    this.initialTeardown = d, this.closed = !1, this._parentage = null, this._finalizers = null;
  }
  return c.prototype.unsubscribe = function() {
    var d, o, f, g, x;
    if (!this.closed) {
      this.closed = !0;
      var O = this._parentage;
      if (O)
        if (this._parentage = null, Array.isArray(O))
          try {
            for (var C = $f(O), j = C.next(); !j.done; j = C.next()) {
              var S = j.value;
              S.remove(this);
            }
          } catch (F) {
            d = { error: F };
          } finally {
            try {
              j && !j.done && (o = C.return) && o.call(C);
            } finally {
              if (d) throw d.error;
            }
          }
        else
          O.remove(this);
      var D = this.initialTeardown;
      if (Qt(D))
        try {
          D();
        } catch (F) {
          x = F instanceof Xf ? F.errors : [F];
        }
      var H = this._finalizers;
      if (H) {
        this._finalizers = null;
        try {
          for (var J = $f(H), w = J.next(); !w.done; w = J.next()) {
            var el = w.value;
            try {
              T1(el);
            } catch (F) {
              x = x ?? [], F instanceof Xf ? x = Ff(Ff([], Wf(x)), Wf(F.errors)) : x.push(F);
            }
          }
        } catch (F) {
          f = { error: F };
        } finally {
          try {
            w && !w.done && (g = J.return) && g.call(J);
          } finally {
            if (f) throw f.error;
          }
        }
      }
      if (x)
        throw new Xf(x);
    }
  }, c.prototype.add = function(d) {
    var o;
    if (d && d !== this)
      if (this.closed)
        T1(d);
      else {
        if (d instanceof c) {
          if (d.closed || d._hasParent(this))
            return;
          d._addParent(this);
        }
        (this._finalizers = (o = this._finalizers) !== null && o !== void 0 ? o : []).push(d);
      }
  }, c.prototype._hasParent = function(d) {
    var o = this._parentage;
    return o === d || Array.isArray(o) && o.includes(d);
  }, c.prototype._addParent = function(d) {
    var o = this._parentage;
    this._parentage = Array.isArray(o) ? (o.push(d), o) : o ? [o, d] : d;
  }, c.prototype._removeParent = function(d) {
    var o = this._parentage;
    o === d ? this._parentage = null : Array.isArray(o) && If(o, d);
  }, c.prototype.remove = function(d) {
    var o = this._finalizers;
    o && If(o, d), d instanceof c && d._removeParent(this);
  }, c.EMPTY = (function() {
    var d = new c();
    return d.closed = !0, d;
  })(), c;
})(), w1 = vi.EMPTY;
function Q1(c) {
  return c instanceof vi || c && "closed" in c && Qt(c.remove) && Qt(c.add) && Qt(c.unsubscribe);
}
function T1(c) {
  Qt(c) ? c() : c.unsubscribe();
}
var Zv = {
  Promise: void 0
}, Kv = {
  setTimeout: function(c, d) {
    for (var o = [], f = 2; f < arguments.length; f++)
      o[f - 2] = arguments[f];
    return setTimeout.apply(void 0, Ff([c, d], Wf(o)));
  },
  clearTimeout: function(c) {
    return clearTimeout(c);
  },
  delegate: void 0
};
function Jv(c) {
  Kv.setTimeout(function() {
    throw c;
  });
}
function A1() {
}
function si(c) {
  c();
}
var is = (function(c) {
  wn(d, c);
  function d(o) {
    var f = c.call(this) || this;
    return f.isStopped = !1, o ? (f.destination = o, Q1(o) && o.add(f)) : f.destination = Wv, f;
  }
  return d.create = function(o, f, g) {
    return new Pf(o, f, g);
  }, d.prototype.next = function(o) {
    this.isStopped || this._next(o);
  }, d.prototype.error = function(o) {
    this.isStopped || (this.isStopped = !0, this._error(o));
  }, d.prototype.complete = function() {
    this.isStopped || (this.isStopped = !0, this._complete());
  }, d.prototype.unsubscribe = function() {
    this.closed || (this.isStopped = !0, c.prototype.unsubscribe.call(this), this.destination = null);
  }, d.prototype._next = function(o) {
    this.destination.next(o);
  }, d.prototype._error = function(o) {
    try {
      this.destination.error(o);
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
})(vi), kv = (function() {
  function c(d) {
    this.partialObserver = d;
  }
  return c.prototype.next = function(d) {
    var o = this.partialObserver;
    if (o.next)
      try {
        o.next(d);
      } catch (f) {
        ii(f);
      }
  }, c.prototype.error = function(d) {
    var o = this.partialObserver;
    if (o.error)
      try {
        o.error(d);
      } catch (f) {
        ii(f);
      }
    else
      ii(d);
  }, c.prototype.complete = function() {
    var d = this.partialObserver;
    if (d.complete)
      try {
        d.complete();
      } catch (o) {
        ii(o);
      }
  }, c;
})(), Pf = (function(c) {
  wn(d, c);
  function d(o, f, g) {
    var x = c.call(this) || this, O;
    return Qt(o) || !o ? O = {
      next: o ?? void 0,
      error: f ?? void 0,
      complete: g ?? void 0
    } : O = o, x.destination = new kv(O), x;
  }
  return d;
})(is);
function ii(c) {
  Jv(c);
}
function $v(c) {
  throw c;
}
var Wv = {
  closed: !0,
  next: A1,
  error: $v,
  complete: A1
}, Fv = (function() {
  return typeof Symbol == "function" && Symbol.observable || "@@observable";
})();
function Iv(c) {
  return c;
}
function Pv(c) {
  return c.length === 0 ? Iv : c.length === 1 ? c[0] : function(o) {
    return c.reduce(function(f, g) {
      return g(f);
    }, o);
  };
}
var z1 = (function() {
  function c(d) {
    d && (this._subscribe = d);
  }
  return c.prototype.lift = function(d) {
    var o = new c();
    return o.source = this, o.operator = d, o;
  }, c.prototype.subscribe = function(d, o, f) {
    var g = this, x = t2(d) ? d : new Pf(d, o, f);
    return si(function() {
      var O = g, C = O.operator, j = O.source;
      x.add(C ? C.call(x, j) : j ? g._subscribe(x) : g._trySubscribe(x));
    }), x;
  }, c.prototype._trySubscribe = function(d) {
    try {
      return this._subscribe(d);
    } catch (o) {
      d.error(o);
    }
  }, c.prototype.forEach = function(d, o) {
    var f = this;
    return o = N1(o), new o(function(g, x) {
      var O = new Pf({
        next: function(C) {
          try {
            d(C);
          } catch (j) {
            x(j), O.unsubscribe();
          }
        },
        error: x,
        complete: g
      });
      f.subscribe(O);
    });
  }, c.prototype._subscribe = function(d) {
    var o;
    return (o = this.source) === null || o === void 0 ? void 0 : o.subscribe(d);
  }, c.prototype[Fv] = function() {
    return this;
  }, c.prototype.pipe = function() {
    for (var d = [], o = 0; o < arguments.length; o++)
      d[o] = arguments[o];
    return Pv(d)(this);
  }, c.prototype.toPromise = function(d) {
    var o = this;
    return d = N1(d), new d(function(f, g) {
      var x;
      o.subscribe(function(O) {
        return x = O;
      }, function(O) {
        return g(O);
      }, function() {
        return f(x);
      });
    });
  }, c.create = function(d) {
    return new c(d);
  }, c;
})();
function N1(c) {
  var d;
  return (d = c ?? Zv.Promise) !== null && d !== void 0 ? d : Promise;
}
function l2(c) {
  return c && Qt(c.next) && Qt(c.error) && Qt(c.complete);
}
function t2(c) {
  return c && c instanceof is || l2(c) && Q1(c);
}
function e2(c) {
  return Qt(c == null ? void 0 : c.lift);
}
function a2(c) {
  return function(d) {
    if (e2(d))
      return d.lift(function(o) {
        try {
          return c(o, this);
        } catch (f) {
          this.error(f);
        }
      });
    throw new TypeError("Unable to lift unknown Observable type");
  };
}
function n2(c, d, o, f, g) {
  return new u2(c, d, o, f, g);
}
var u2 = (function(c) {
  wn(d, c);
  function d(o, f, g, x, O, C) {
    var j = c.call(this, o) || this;
    return j.onFinalize = O, j.shouldUnsubscribe = C, j._next = f ? function(S) {
      try {
        f(S);
      } catch (D) {
        o.error(D);
      }
    } : c.prototype._next, j._error = x ? function(S) {
      try {
        x(S);
      } catch (D) {
        o.error(D);
      } finally {
        this.unsubscribe();
      }
    } : c.prototype._error, j._complete = g ? function() {
      try {
        g();
      } catch (S) {
        o.error(S);
      } finally {
        this.unsubscribe();
      }
    } : c.prototype._complete, j;
  }
  return d.prototype.unsubscribe = function() {
    var o;
    if (!this.shouldUnsubscribe || this.shouldUnsubscribe()) {
      var f = this.closed;
      c.prototype.unsubscribe.call(this), !f && ((o = this.onFinalize) === null || o === void 0 || o.call(this));
    }
  }, d;
})(is), i2 = G1(function(c) {
  return function() {
    c(this), this.name = "ObjectUnsubscribedError", this.message = "object unsubscribed";
  };
}), cs = (function(c) {
  wn(d, c);
  function d() {
    var o = c.call(this) || this;
    return o.closed = !1, o.currentObservers = null, o.observers = [], o.isStopped = !1, o.hasError = !1, o.thrownError = null, o;
  }
  return d.prototype.lift = function(o) {
    var f = new j1(this, this);
    return f.operator = o, f;
  }, d.prototype._throwIfClosed = function() {
    if (this.closed)
      throw new i2();
  }, d.prototype.next = function(o) {
    var f = this;
    si(function() {
      var g, x;
      if (f._throwIfClosed(), !f.isStopped) {
        f.currentObservers || (f.currentObservers = Array.from(f.observers));
        try {
          for (var O = $f(f.currentObservers), C = O.next(); !C.done; C = O.next()) {
            var j = C.value;
            j.next(o);
          }
        } catch (S) {
          g = { error: S };
        } finally {
          try {
            C && !C.done && (x = O.return) && x.call(O);
          } finally {
            if (g) throw g.error;
          }
        }
      }
    });
  }, d.prototype.error = function(o) {
    var f = this;
    si(function() {
      if (f._throwIfClosed(), !f.isStopped) {
        f.hasError = f.isStopped = !0, f.thrownError = o;
        for (var g = f.observers; g.length; )
          g.shift().error(o);
      }
    });
  }, d.prototype.complete = function() {
    var o = this;
    si(function() {
      if (o._throwIfClosed(), !o.isStopped) {
        o.isStopped = !0;
        for (var f = o.observers; f.length; )
          f.shift().complete();
      }
    });
  }, d.prototype.unsubscribe = function() {
    this.isStopped = this.closed = !0, this.observers = this.currentObservers = null;
  }, Object.defineProperty(d.prototype, "observed", {
    get: function() {
      var o;
      return ((o = this.observers) === null || o === void 0 ? void 0 : o.length) > 0;
    },
    enumerable: !1,
    configurable: !0
  }), d.prototype._trySubscribe = function(o) {
    return this._throwIfClosed(), c.prototype._trySubscribe.call(this, o);
  }, d.prototype._subscribe = function(o) {
    return this._throwIfClosed(), this._checkFinalizedStatuses(o), this._innerSubscribe(o);
  }, d.prototype._innerSubscribe = function(o) {
    var f = this, g = this, x = g.hasError, O = g.isStopped, C = g.observers;
    return x || O ? w1 : (this.currentObservers = null, C.push(o), new vi(function() {
      f.currentObservers = null, If(C, o);
    }));
  }, d.prototype._checkFinalizedStatuses = function(o) {
    var f = this, g = f.hasError, x = f.thrownError, O = f.isStopped;
    g ? o.error(x) : O && o.complete();
  }, d.prototype.asObservable = function() {
    var o = new z1();
    return o.source = this, o;
  }, d.create = function(o, f) {
    return new j1(o, f);
  }, d;
})(z1), j1 = (function(c) {
  wn(d, c);
  function d(o, f) {
    var g = c.call(this) || this;
    return g.destination = o, g.source = f, g;
  }
  return d.prototype.next = function(o) {
    var f, g;
    (g = (f = this.destination) === null || f === void 0 ? void 0 : f.next) === null || g === void 0 || g.call(f, o);
  }, d.prototype.error = function(o) {
    var f, g;
    (g = (f = this.destination) === null || f === void 0 ? void 0 : f.error) === null || g === void 0 || g.call(f, o);
  }, d.prototype.complete = function() {
    var o, f;
    (f = (o = this.destination) === null || o === void 0 ? void 0 : o.complete) === null || f === void 0 || f.call(o);
  }, d.prototype._subscribe = function(o) {
    var f, g;
    return (g = (f = this.source) === null || f === void 0 ? void 0 : f.subscribe(o)) !== null && g !== void 0 ? g : w1;
  }, d;
})(cs);
function c2(c, d) {
  return a2(function(o, f) {
    var g = 0;
    o.subscribe(n2(f, function(x) {
      return c.call(d, x, g++) && f.next(x);
    }));
  });
}
const ci = new cs(), f2 = {
  /**
   * 发布事件
   */
  emit(c) {
    ci.next({
      ...c,
      timestamp: Date.now()
    });
  },
  /**
   * 订阅所有事件
   */
  subscribe(c) {
    const d = ci.subscribe(c);
    return {
      unsubscribe: () => d.unsubscribe()
    };
  },
  /**
   * 订阅特定类型的事件
   */
  on(c, d) {
    const o = ci.pipe(c2((f) => f.type === c)).subscribe((f) => d(f.payload));
    return {
      unsubscribe: () => o.unsubscribe()
    };
  },
  /**
   * 获取事件流（用于 RxJS 操作符）
   */
  asObservable() {
    return ci.asObservable();
  }
};
var xl = /* @__PURE__ */ ((c) => (c[c.DEBUG = 0] = "DEBUG", c[c.INFO = 1] = "INFO", c[c.SUCCESS = 2] = "SUCCESS", c[c.WARN = 3] = "WARN", c[c.ERROR = 4] = "ERROR", c))(xl || {});
const di = {
  0: { label: "DEBUG", icon: "🔍", color: "#6c757d" },
  1: { label: "INFO", icon: "ℹ️", color: "#17a2b8" },
  2: { label: "SUCCESS", icon: "✅", color: "#28a745" },
  3: { label: "WARN", icon: "⚠️", color: "#ffc107" },
  4: { label: "ERROR", icon: "❌", color: "#dc3545" }
}, X1 = {
  maxEntries: 5e3,
  minLevel: 0
  /* DEBUG */
}, V1 = new cs();
let Gt = [], Re = { ...X1 }, Vf = null;
async function mi() {
  if (!Vf) {
    const { db: c } = await import("./DexieDB-DAc9uiSV.js");
    Vf = c;
  }
  return Vf;
}
function s2(c) {
  return new Date(c).toTimeString().slice(0, 8);
}
async function wa(c, d, o, f) {
  if (c < Re.minLevel) return;
  const g = {
    id: Vv(),
    timestamp: Date.now(),
    level: c,
    module: d,
    message: o,
    data: f
  };
  Gt.push(g), V1.next(g);
  try {
    const x = await mi();
    await x.logs.add(g);
    const O = await x.logs.count();
    O > Re.maxEntries && await o2(O - Re.maxEntries);
  } catch (x) {
    console.error("[Engram/Logger] 日志持久化失败:", x);
  }
}
async function o2(c) {
  try {
    const d = await mi(), f = (await d.logs.orderBy("timestamp").limit(c).toArray()).map((g) => g.id);
    await d.logs.bulkDelete(f), Gt = Gt.slice(-Re.maxEntries);
  } catch (d) {
    console.error("[Engram/Logger] 清理旧日志失败:", d);
  }
}
function r2() {
  f2.subscribe((c) => {
    const o = {
      INGESTION_START: xl.INFO,
      INGESTION_COMPLETE: xl.SUCCESS,
      ENTITY_CREATED: xl.INFO,
      MEMORY_STORED: xl.SUCCESS,
      RETRIEVAL_START: xl.DEBUG,
      RETRIEVAL_COMPLETE: xl.SUCCESS,
      CHAT_CHANGED: xl.INFO,
      MESSAGE_RECEIVED: xl.DEBUG
    }[c.type] ?? xl.DEBUG;
    wa(o, "EventBus", `${c.type}`, c.payload);
  });
}
const Dt = {
  /**
   * 初始化 Logger
   */
  async init(c) {
    c && (Re = { ...Re, ...c });
    try {
      Gt = await (await mi()).logs.orderBy("timestamp").reverse().limit(Re.maxEntries).toArray(), Gt.reverse();
    } catch (d) {
      console.error("[Engram/Logger] 加载历史日志失败:", d), Gt = [];
    }
    r2(), Dt.info("Logger", "Logger 初始化完成", { maxEntries: Re.maxEntries });
  },
  /**
   * DEBUG 级别日志
   */
  debug(c, d, o) {
    wa(xl.DEBUG, c, d, o);
  },
  /**
   * INFO 级别日志
   */
  info(c, d, o) {
    wa(xl.INFO, c, d, o);
  },
  /**
   * SUCCESS 级别日志
   */
  success(c, d, o) {
    wa(xl.SUCCESS, c, d, o);
  },
  /**
   * WARN 级别日志
   */
  warn(c, d, o) {
    wa(xl.WARN, c, d, o);
  },
  /**
   * ERROR 级别日志
   */
  error(c, d, o) {
    wa(xl.ERROR, c, d, o);
  },
  /**
   * 获取所有缓存日志
   */
  getLogs() {
    return [...Gt];
  },
  /**
   * 订阅新日志
   */
  subscribe(c) {
    const d = V1.subscribe(c);
    return () => d.unsubscribe();
  },
  /**
   * 清空所有日志
   */
  async clear() {
    try {
      await (await mi()).logs.clear(), Gt = [], Dt.info("Logger", "日志已清空");
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
      [xl.DEBUG]: "DEBUG",
      [xl.INFO]: "INFO",
      [xl.SUCCESS]: "SUCCESS",
      [xl.WARN]: "WARN",
      [xl.ERROR]: "ERROR"
    };
    let o = `# Engram Debug Log

`;
    o += `- **导出时间**: ${c.toLocaleString("zh-CN")}
`, o += `- **版本**: 0.1.0
`, o += `- **日志条数**: ${Gt.length}

`, o += `---

`, o += `## 日志记录

`, o += "```\n";
    for (const f of Gt) {
      const g = s2(f.timestamp), x = d[f.level].padEnd(7), O = f.module.padEnd(16);
      if (o += `[${g}] [${O}] ${x} ${f.message}
`, f.data !== void 0) {
        const C = JSON.stringify(f.data, null, 2).split(`
`).map((j) => `    ${j}`).join(`
`);
        o += `${C}
`;
      }
    }
    return o += "```\n", o;
  },
  /**
   * 获取导出文件名
   */
  getExportFilename() {
    const c = /* @__PURE__ */ new Date(), d = c.toISOString().slice(0, 10), o = c.toTimeString().slice(0, 8).replace(/:/g, "");
    return `engram_log_${d}_${o}.md`;
  }
}, d2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  DEFAULT_LOGGER_CONFIG: X1,
  LogLevel: xl,
  LogLevelConfig: di,
  Logger: Dt
}, Symbol.toStringTag, { value: "Module" }));
function m2() {
  var c, d;
  try {
    return ((d = (c = window.SillyTavern) == null ? void 0 : c.getContext) == null ? void 0 : d.call(c)) || null;
  } catch (o) {
    return console.warn("[Engram] Failed to get ST context:", o), null;
  }
}
async function C1() {
  const { Logger: c } = await Promise.resolve().then(() => d2);
  await c.init(), c.info("STBridge", "Engram 插件正在初始化..."), h2(), c.success("STBridge", "Engram 初始化完成 - Where memories leave their trace.");
}
const Z1 = '<svg viewBox="0 0 400 592" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M103.875908,522.166260 C75.225380,521.276611 55.289425,503.229828 52.249313,475.852142 C49.879883,454.514191 63.027035,433.000366 83.930901,424.858398 C88.449257,423.098541 89.857674,420.860199 89.801926,416.150269 C89.555420,395.322357 89.621246,374.489380 89.762306,353.659515 C89.787170,349.987000 88.728760,348.057556 85.120293,346.642609 C64.672897,338.625031 52.338894,320.951630 52.085896,299.869415 C51.832878,278.785156 63.730618,260.903198 84.118019,252.449951 C88.288918,250.720566 89.867378,248.680847 89.807304,244.052597 C89.539139,223.391968 89.589142,202.724701 89.796356,182.062561 C89.836380,178.071609 88.518524,176.326385 84.841705,174.787247 C57.730556,163.438416 45.530682,135.966721 55.436111,109.194000 C62.627293,89.757439 81.922821,76.710289 103.282494,76.841476 C124.355003,76.970901 143.082275,89.740875 149.993118,109.121849 C151.315979,112.831749 153.184799,113.869263 156.863403,113.853104 C186.192612,113.724319 215.522736,113.698357 244.851929,113.811600 C248.773117,113.826736 250.677307,112.652130 252.052902,108.765602 C259.013885,89.098465 278.589447,76.365829 300.503601,76.811897 C322.171844,77.252960 341.040283,91.132324 347.255371,111.201912 C356.569763,141.279358 340.344788,170.373184 309.893127,176.623123 C283.359375,182.068970 260.376740,167.450562 251.980011,145.670181 C250.492157,141.810806 248.818085,140.240295 244.552948,140.266785 C215.390915,140.447968 186.227219,140.357330 157.064072,140.375076 C154.628784,140.376556 151.855545,139.805771 151.141357,143.359161 C150.400787,147.043839 146.628937,150.064713 151.136917,154.478546 C184.592346,187.235229 217.778336,220.267349 250.982285,253.280014 C253.021469,255.307434 254.527191,255.254166 257.033264,254.047714 C276.199188,244.820953 294.752930,247.045853 310.978485,259.993408 C328.011017,273.584869 333.936798,292.106659 327.764038,313.282837 C321.779785,333.812378 307.254517,345.637268 286.367889,349.037231 C276.405396,350.658997 266.352570,349.443024 257.275055,344.363342 C254.265045,342.678986 252.301132,343.049744 249.903275,345.441406 C230.205368,365.088531 210.395386,384.623230 190.631638,404.204376 C177.732651,416.984222 164.859726,429.790344 151.962982,442.572388 C148.257980,446.244415 148.113403,452.901764 151.629196,456.671387 C152.707138,457.827148 154.029282,457.681976 155.328629,457.681946 C185.658203,457.681458 215.987854,457.631042 246.317261,457.695557 C249.355972,457.702026 250.687012,456.399414 251.717636,453.698944 C259.314423,433.793579 278.324493,420.868317 299.341309,421.146240 C320.526215,421.426361 339.575745,434.206421 346.686249,452.909271 C354.337341,473.034058 348.794159,495.642761 332.699371,509.956390 C307.061371,532.757202 263.380280,521.715210 251.978027,489.436371 C250.838303,486.209961 249.371201,484.953583 245.964813,484.962799 C216.302094,485.043304 186.639008,484.985840 156.976028,484.969330 C154.436981,484.967896 152.081528,484.923981 150.916916,488.054077 C142.892441,509.621246 126.842339,520.325989 103.875908,522.166260 M141.430466,266.110352 C145.394760,270.906738 148.503693,276.196198 150.388428,282.139069 C151.211502,284.734314 152.692291,285.770782 155.494156,285.760895 C179.139755,285.677429 202.787949,285.547394 226.430206,285.843811 C232.373352,285.918304 231.388184,281.058533 233.335602,278.254700 C235.007233,275.847992 233.916855,274.189880 232.000244,272.304352 C199.956863,240.780380 167.866821,209.301468 136.133682,177.467056 C131.183243,172.500824 127.483856,170.729507 121.013550,174.621368 C117.660522,176.638214 116.183739,178.155136 116.217278,182.042480 C116.398239,203.022598 116.444160,224.006012 116.243645,244.985474 C116.204666,249.064667 117.676285,250.918961 121.328865,252.228989 C128.972488,254.970444 135.505173,259.524170 141.430466,266.110352 M116.349434,377.499908 C116.351860,390.663696 116.870338,403.855377 116.161102,416.980713 C115.742699,424.723846 121.926743,423.801880 125.649162,426.262665 C129.080231,428.530792 130.798965,425.706268 132.741440,423.784821 C165.551407,391.329803 198.234940,358.745361 231.274231,326.525696 C235.764252,322.147095 232.377243,319.155212 231.599960,315.493317 C230.884583,312.123138 228.193359,312.382568 225.670288,312.382812 C202.675171,312.384949 179.679749,312.445435 156.685303,312.323212 C153.331955,312.305389 151.624329,313.386505 150.456299,316.584381 C145.119888,331.194611 135.004120,341.287384 120.496223,346.769958 C117.238434,348.001068 116.190170,349.706024 116.267418,353.006317 C116.450615,360.833862 116.340004,368.668243 116.349434,377.499908z"/></svg>';
function h2() {
  const c = document.querySelector("#top-settings-holder"), d = document.querySelector("#WI-SP-button");
  if (!c) {
    console.warn("[Engram] #top-settings-holder not found, fallback to floating orb"), v2();
    return;
  }
  const o = document.createElement("div");
  o.id = "engram-drawer", o.className = "drawer";
  const f = document.createElement("div");
  f.className = "drawer-toggle drawer-header";
  const g = document.createElement("div");
  g.id = "engram-drawer-icon", g.className = "drawer-icon fa-fw closedIcon", g.title = "Engram - 记忆操作系统", g.setAttribute("data-i18n", "[title]Engram - Memory OS"), g.innerHTML = Z1, g.addEventListener("click", hi), f.appendChild(g), o.appendChild(f), d ? (c.insertBefore(o, d), console.log("[Engram] Top bar button injected before WI-SP-button")) : (c.appendChild(o), console.log("[Engram] Top bar button injected at end (WI-SP-button not found)"));
}
function v2() {
  const c = document.createElement("div");
  c.className = "engram-orb", c.title = "Engram - 记忆操作系统", c.innerHTML = Z1, c.addEventListener("click", hi), document.body.appendChild(c);
}
let ls = null;
function y2(c) {
  ls = c;
}
let Zf = !1, Ln = null, oi = null;
function hi() {
  Zf && Ln ? (oi && (oi.unmount(), oi = null), Ln.remove(), Ln = null, Zf = !1) : (Ln = g2(), document.body.appendChild(Ln), Zf = !0);
}
function g2() {
  var d;
  const c = document.createElement("div");
  return c.className = "engram-panel", c.id = "engram-panel-root", ls ? oi = ls(c, hi) : (c.innerHTML = `
            <div class="engram-panel-header">
                <h2>🧠 Engram</h2>
                <button class="engram-panel-close">&times;</button>
            </div>
            <div class="engram-panel-content">
                <p style="color: #94a3b8;">React 渲染器未加载，请检查配置。</p>
            </div>
        `, (d = c.querySelector(".engram-panel-close")) == null || d.addEventListener("click", hi)), c;
}
const K1 = ({ onNavigate: c }) => {
  const [d, o] = V.useState([]), [f, g] = V.useState(m2()), [x, O] = V.useState(0);
  V.useEffect(() => (o(Dt.getLogs().slice(0, 3)), Dt.subscribe((D) => {
    o((H) => [D, ...H].slice(0, 3));
  })), []), V.useEffect(() => {
    const S = setInterval(() => {
      O((D) => D + 1);
    }, 1e3);
    return () => clearInterval(S);
  }, []);
  const C = (S) => {
    const D = Math.floor(S / 3600), H = Math.floor(S % 3600 / 60), J = S % 60;
    return `${D.toString().padStart(2, "0")}:${H.toString().padStart(2, "0")}:${J.toString().padStart(2, "0")}`;
  }, j = (f == null ? void 0 : f.name2) || "Unknown";
  return f != null && f.name1, /* @__PURE__ */ r.jsx("div", { className: "engram-dashboard", children: /* @__PURE__ */ r.jsxs("div", { className: "engram-dashboard-grid", children: [
    /* @__PURE__ */ r.jsxs("div", { className: "dashboard-stats-row", children: [
      /* @__PURE__ */ r.jsx(
        wf,
        {
          title: "ACTIVE MODEL",
          value: f ? "Connected" : "Offline",
          subtext: f ? `Chatting with ${j}` : "Waiting for connection...",
          icon: B1,
          highlight: !!f
        }
      ),
      /* @__PURE__ */ r.jsx(
        wf,
        {
          title: "MEMORY NODES",
          value: "0",
          subtext: "Graph Database",
          icon: lv
        }
      ),
      /* @__PURE__ */ r.jsx(
        wf,
        {
          title: "SYSTEM UPTIME",
          value: C(x),
          subtext: "Session Duration",
          icon: H1
        }
      )
    ] }),
    /* @__PURE__ */ r.jsxs("div", { className: "dashboard-cell cell-actions", children: [
      /* @__PURE__ */ r.jsxs("div", { className: "cell-header", children: [
        /* @__PURE__ */ r.jsx(Dv, { size: 16 }),
        /* @__PURE__ */ r.jsx("span", { children: "QUICK ACTIONS" })
      ] }),
      /* @__PURE__ */ r.jsxs("div", { className: "actions-grid", children: [
        /* @__PURE__ */ r.jsxs("button", { className: "action-tile", onClick: () => c("/memory"), children: [
          /* @__PURE__ */ r.jsx("span", { className: "tile-icon", children: "📜" }),
          /* @__PURE__ */ r.jsx("span", { className: "tile-label", children: "Memory Stream" })
        ] }),
        /* @__PURE__ */ r.jsxs("button", { className: "action-tile", onClick: () => c("/graph"), children: [
          /* @__PURE__ */ r.jsx("span", { className: "tile-icon", children: "🕸️" }),
          /* @__PURE__ */ r.jsx("span", { className: "tile-label", children: "Knowledge Graph" })
        ] }),
        /* @__PURE__ */ r.jsxs("button", { className: "action-tile", onClick: () => c("/brain"), children: [
          /* @__PURE__ */ r.jsx("span", { className: "tile-icon", children: "🧠" }),
          /* @__PURE__ */ r.jsx("span", { className: "tile-label", children: "Brain Console" })
        ] }),
        /* @__PURE__ */ r.jsxs("button", { className: "action-tile", onClick: () => c("/settings"), children: [
          /* @__PURE__ */ r.jsx("span", { className: "tile-icon", children: "⚙️" }),
          /* @__PURE__ */ r.jsx("span", { className: "tile-label", children: "Settings" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ r.jsxs("div", { className: "dashboard-cell cell-terminal", children: [
      /* @__PURE__ */ r.jsxs("div", { className: "cell-header", children: [
        /* @__PURE__ */ r.jsx(Gn, { size: 16 }),
        /* @__PURE__ */ r.jsx("span", { children: "SYSTEM LOGS" }),
        /* @__PURE__ */ r.jsx("button", { className: "mini-link", onClick: () => c("/dev"), children: "VIEW ALL" })
      ] }),
      /* @__PURE__ */ r.jsx("div", { className: "mini-terminal-content", children: d.length === 0 ? /* @__PURE__ */ r.jsx("div", { className: "mini-log-empty", children: "No activity recorded" }) : d.map((S) => /* @__PURE__ */ r.jsxs("div", { className: `mini-log-line level-${S.level}`, children: [
        /* @__PURE__ */ r.jsxs("span", { className: "log-time", children: [
          "[",
          new Date(S.timestamp).toLocaleTimeString([], { hour12: !1 }),
          "]"
        ] }),
        /* @__PURE__ */ r.jsx("span", { className: "log-msg", children: S.message })
      ] }, S.id)) })
    ] })
  ] }) });
}, p2 = () => /* @__PURE__ */ r.jsxs("div", { className: "engram-memory-stream", children: [
  /* @__PURE__ */ r.jsxs("div", { className: "engram-page-header", children: [
    /* @__PURE__ */ r.jsx(Vh, { size: 24 }),
    /* @__PURE__ */ r.jsx("h2", { children: "记忆流" })
  ] }),
  /* @__PURE__ */ r.jsx("div", { className: "engram-page-content", children: /* @__PURE__ */ r.jsx("p", { className: "engram-placeholder", children: "记忆时间轴将在这里展示..." }) })
] }), b2 = () => /* @__PURE__ */ r.jsxs("div", { className: "engram-graph-view", children: [
  /* @__PURE__ */ r.jsxs("div", { className: "engram-page-header", children: [
    /* @__PURE__ */ r.jsx(ns, { size: 24 }),
    /* @__PURE__ */ r.jsx("h2", { children: "世界图谱" })
  ] }),
  /* @__PURE__ */ r.jsx("div", { className: "engram-page-content", children: /* @__PURE__ */ r.jsx("p", { className: "engram-placeholder", children: "React Flow 图谱编辑器将在这里展示..." }) })
] }), S2 = [
  { id: "summarize", label: "总结剧情" },
  { id: "vectorize", label: "向量化" },
  { id: "batch", label: "批量处理" }
], fi = () => {
  const [c, d] = V.useState("summarize");
  return /* @__PURE__ */ r.jsxs("div", { className: "engram-brain-view", children: [
    /* @__PURE__ */ r.jsxs("div", { className: "engram-page-header", children: [
      /* @__PURE__ */ r.jsx(as, { size: 24 }),
      /* @__PURE__ */ r.jsx("h2", { children: "记忆" })
    ] }),
    /* @__PURE__ */ r.jsx("div", { className: "engram-tabs", children: S2.map((o) => /* @__PURE__ */ r.jsx(
      "button",
      {
        className: `engram-tab ${c === o.id ? "active" : ""}`,
        onClick: () => d(o.id),
        children: o.label
      },
      o.id
    )) }),
    /* @__PURE__ */ r.jsxs("div", { className: "engram-page-content", children: [
      c === "summarize" && /* @__PURE__ */ r.jsx("div", { children: /* @__PURE__ */ r.jsx("p", { className: "engram-placeholder", children: "总结剧情功能..." }) }),
      c === "vectorize" && /* @__PURE__ */ r.jsx("div", { children: /* @__PURE__ */ r.jsx("p", { className: "engram-placeholder", children: "向量化功能..." }) }),
      c === "batch" && /* @__PURE__ */ r.jsx("div", { children: /* @__PURE__ */ r.jsx("p", { className: "engram-placeholder", children: "批量处理功能..." }) })
    ] })
  ] });
}, _2 = "_field_eaw1g_7", E2 = "_label_eaw1g_12", x2 = "_required_eaw1g_20", T2 = "_labelRow_eaw1g_25", A2 = "_value_eaw1g_32", z2 = "_desc_eaw1g_39", N2 = "_input_eaw1g_46", j2 = "_select_eaw1g_47", C2 = "_hasError_eaw1g_65", M2 = "_error_eaw1g_69", O2 = "_numberGroup_eaw1g_77", D2 = "_slider_eaw1g_83", U2 = "_numberInput_eaw1g_102", R2 = "_switchWrapper_eaw1g_108", H2 = "_switchContent_eaw1g_117", q2 = "_switchActive_eaw1g_141", B2 = "_switchToggle_eaw1g_145", L2 = "_section_eaw1g_159", Y2 = "_sectionHeader_eaw1g_166", G2 = "_sectionHeaderClickable_eaw1g_170", w2 = "_sectionTitle_eaw1g_177", Q2 = "_sectionArrow_eaw1g_190", X2 = "_collapsed_eaw1g_195", tl = {
  field: _2,
  label: E2,
  required: x2,
  labelRow: T2,
  value: A2,
  desc: z2,
  input: N2,
  select: j2,
  hasError: C2,
  error: M2,
  numberGroup: O2,
  slider: D2,
  numberInput: U2,
  switchWrapper: R2,
  switchContent: H2,
  switch: "_switch_eaw1g_108",
  switchActive: q2,
  switchToggle: B2,
  section: L2,
  sectionHeader: Y2,
  sectionHeaderClickable: G2,
  sectionTitle: w2,
  sectionArrow: Q2,
  collapsed: X2
}, Ut = ({
  label: c,
  description: d,
  required: o,
  error: f,
  className: g,
  type: x = "text",
  value: O,
  onChange: C,
  placeholder: j,
  disabled: S
}) => /* @__PURE__ */ r.jsxs("div", { className: `${tl.field} ${g || ""}`, children: [
  /* @__PURE__ */ r.jsxs("label", { className: tl.label, children: [
    c,
    o && /* @__PURE__ */ r.jsx("span", { className: tl.required, children: "*" })
  ] }),
  d && /* @__PURE__ */ r.jsx("p", { className: tl.desc, children: d }),
  /* @__PURE__ */ r.jsx(
    "input",
    {
      type: x,
      className: `${tl.input} ${f ? tl.hasError : ""}`,
      value: O,
      onChange: (D) => C(D.target.value),
      placeholder: j,
      disabled: S
    }
  ),
  f && /* @__PURE__ */ r.jsx("span", { className: tl.error, children: f })
] }), fe = ({
  label: c,
  description: d,
  required: o,
  error: f,
  className: g,
  value: x,
  onChange: O,
  min: C = 0,
  max: j = 100,
  step: S = 1,
  showSlider: D = !0,
  disabled: H
}) => /* @__PURE__ */ r.jsxs("div", { className: `${tl.field} ${g || ""}`, children: [
  /* @__PURE__ */ r.jsxs("div", { className: tl.labelRow, children: [
    /* @__PURE__ */ r.jsxs("label", { className: tl.label, children: [
      c,
      o && /* @__PURE__ */ r.jsx("span", { className: tl.required, children: "*" })
    ] }),
    /* @__PURE__ */ r.jsx("span", { className: tl.value, children: x })
  ] }),
  d && /* @__PURE__ */ r.jsx("p", { className: tl.desc, children: d }),
  /* @__PURE__ */ r.jsxs("div", { className: tl.numberGroup, children: [
    D && /* @__PURE__ */ r.jsx(
      "input",
      {
        type: "range",
        className: tl.slider,
        value: x,
        onChange: (J) => O(parseFloat(J.target.value)),
        min: C,
        max: j,
        step: S,
        disabled: H
      }
    ),
    /* @__PURE__ */ r.jsx(
      "input",
      {
        type: "number",
        className: `${tl.input} ${tl.numberInput} ${f ? tl.hasError : ""}`,
        value: x,
        onChange: (J) => {
          const w = parseFloat(J.target.value);
          isNaN(w) || O(Math.max(C, Math.min(j, w)));
        },
        min: C,
        max: j,
        step: S,
        disabled: H
      }
    )
  ] }),
  f && /* @__PURE__ */ r.jsx("span", { className: tl.error, children: f })
] }), ri = ({
  label: c,
  description: d,
  required: o,
  error: f,
  className: g,
  value: x,
  onChange: O,
  options: C,
  placeholder: j,
  disabled: S
}) => /* @__PURE__ */ r.jsxs("div", { className: `${tl.field} ${g || ""}`, children: [
  /* @__PURE__ */ r.jsxs("label", { className: tl.label, children: [
    c,
    o && /* @__PURE__ */ r.jsx("span", { className: tl.required, children: "*" })
  ] }),
  d && /* @__PURE__ */ r.jsx("p", { className: tl.desc, children: d }),
  /* @__PURE__ */ r.jsxs(
    "select",
    {
      className: `${tl.select} ${f ? tl.hasError : ""}`,
      value: x,
      onChange: (D) => O(D.target.value),
      disabled: S,
      children: [
        j && /* @__PURE__ */ r.jsx("option", { value: "", disabled: !0, children: j }),
        C.map((D) => /* @__PURE__ */ r.jsx("option", { value: D.value, disabled: D.disabled, children: D.label }, D.value))
      ]
    }
  ),
  f && /* @__PURE__ */ r.jsx("span", { className: tl.error, children: f })
] }), J1 = ({
  label: c,
  description: d,
  className: o,
  checked: f,
  onChange: g,
  disabled: x
}) => /* @__PURE__ */ r.jsxs("div", { className: `${tl.field} ${tl.switchWrapper} ${o || ""}`, children: [
  /* @__PURE__ */ r.jsxs("div", { className: tl.switchContent, children: [
    /* @__PURE__ */ r.jsx("label", { className: tl.label, children: c }),
    d && /* @__PURE__ */ r.jsx("p", { className: tl.desc, children: d })
  ] }),
  /* @__PURE__ */ r.jsx(
    "button",
    {
      type: "button",
      className: `${tl.switch} ${f ? tl.switchActive : ""}`,
      onClick: () => !x && g(!f),
      disabled: x,
      role: "switch",
      "aria-checked": f,
      children: /* @__PURE__ */ r.jsx("span", { className: tl.switchToggle })
    }
  )
] }), wt = ({
  title: c,
  description: d,
  children: o,
  collapsible: f = !1,
  defaultCollapsed: g = !1
}) => {
  const [x, O] = es.useState(g);
  return /* @__PURE__ */ r.jsxs("div", { className: `${tl.section} ${x ? tl.collapsed : ""}`, children: [
    /* @__PURE__ */ r.jsxs(
      "div",
      {
        className: `${tl.sectionHeader} ${f ? tl.sectionHeaderClickable : ""}`,
        onClick: () => f && O(!x),
        children: [
          /* @__PURE__ */ r.jsxs("div", { className: tl.sectionTitle, children: [
            /* @__PURE__ */ r.jsx("h4", { children: c }),
            d && /* @__PURE__ */ r.jsx("p", { children: d })
          ] }),
          f && /* @__PURE__ */ r.jsx("span", { className: tl.sectionArrow, children: x ? "▶" : "▼" })
        ]
      }
    ),
    !x && /* @__PURE__ */ r.jsx("div", { className: tl.sectionBody, children: o })
  ] });
}, V2 = "_card_6bpkm_5", Z2 = "_selected_6bpkm_19", K2 = "_header_6bpkm_24", J2 = "_icon_6bpkm_30", k2 = "_info_6bpkm_46", $2 = "_name_6bpkm_51", W2 = "_defaultBadge_6bpkm_61", F2 = "_meta_6bpkm_69", I2 = "_divider_6bpkm_75", P2 = "_check_6bpkm_79", ly = "_params_6bpkm_83", ty = "_paramTag_6bpkm_90", ey = "_actions_6bpkm_99", ay = "_actionBtn_6bpkm_107", ny = "_danger_6bpkm_126", wl = {
  card: V2,
  selected: Z2,
  header: K2,
  icon: J2,
  info: k2,
  name: $2,
  defaultBadge: W2,
  meta: F2,
  divider: I2,
  check: P2,
  params: ly,
  paramTag: ty,
  actions: ey,
  actionBtn: ay,
  danger: ny
}, uy = ({
  preset: c,
  isSelected: d,
  onSelect: o,
  onEdit: f,
  onCopy: g,
  onDelete: x
}) => {
  var S;
  const O = c.source === "tavern" || c.source === "tavern_profile" ? B1 : Kh, C = c.source === "tavern" ? "酒馆当前" : c.source === "tavern_profile" ? "酒馆配置" : "自定义", j = c.source === "custom" ? ((S = c.custom) == null ? void 0 : S.model) || "未设置" : "使用当前";
  return /* @__PURE__ */ r.jsxs(
    "div",
    {
      className: `${wl.card} ${d ? wl.selected : ""}`,
      onClick: o,
      children: [
        /* @__PURE__ */ r.jsxs("div", { className: wl.header, children: [
          /* @__PURE__ */ r.jsx("div", { className: wl.icon, children: /* @__PURE__ */ r.jsx(O, { size: 16 }) }),
          /* @__PURE__ */ r.jsxs("div", { className: wl.info, children: [
            /* @__PURE__ */ r.jsxs("h4", { className: wl.name, children: [
              c.name,
              c.isDefault && /* @__PURE__ */ r.jsx("span", { className: wl.defaultBadge, children: "默认" })
            ] }),
            /* @__PURE__ */ r.jsxs("p", { className: wl.meta, children: [
              /* @__PURE__ */ r.jsx("span", { children: C }),
              /* @__PURE__ */ r.jsx("span", { className: wl.divider, children: "·" }),
              /* @__PURE__ */ r.jsx("span", { children: j })
            ] })
          ] }),
          d && /* @__PURE__ */ r.jsx("div", { className: wl.check, children: /* @__PURE__ */ r.jsx(Lh, { size: 16 }) })
        ] }),
        /* @__PURE__ */ r.jsxs("div", { className: wl.params, children: [
          /* @__PURE__ */ r.jsxs("span", { className: wl.paramTag, children: [
            "T: ",
            c.parameters.temperature
          ] }),
          /* @__PURE__ */ r.jsxs("span", { className: wl.paramTag, children: [
            "P: ",
            c.parameters.topP
          ] }),
          /* @__PURE__ */ r.jsxs("span", { className: wl.paramTag, children: [
            "Max: ",
            c.parameters.maxTokens
          ] })
        ] }),
        /* @__PURE__ */ r.jsxs("div", { className: wl.actions, onClick: (D) => D.stopPropagation(), children: [
          /* @__PURE__ */ r.jsx("button", { className: wl.actionBtn, onClick: f, title: "编辑", children: /* @__PURE__ */ r.jsx(pv, { size: 14 }) }),
          /* @__PURE__ */ r.jsx("button", { className: wl.actionBtn, onClick: g, title: "复制", children: /* @__PURE__ */ r.jsx(Wh, { size: 14 }) }),
          /* @__PURE__ */ r.jsx(
            "button",
            {
              className: `${wl.actionBtn} ${wl.danger}`,
              onClick: x,
              title: "删除",
              disabled: c.isDefault,
              children: /* @__PURE__ */ r.jsx(L1, { size: 14 })
            }
          )
        ] })
      ]
    }
  );
}, iy = "_form_543pe_5", cy = "_profileSelectRow_543pe_10", fy = "_refreshBtn_543pe_21", sy = "_spinning_543pe_41", oy = "_emptyHint_543pe_56", ry = "_profilePreview_543pe_68", dy = "_previewItem_543pe_76", my = "_previewLabel_543pe_88", hy = "_previewValue_543pe_93", Pl = {
  form: iy,
  profileSelectRow: cy,
  refreshBtn: fy,
  spinning: sy,
  emptyHint: oy,
  profilePreview: ry,
  previewItem: dy,
  previewLabel: my,
  previewValue: hy
}, vy = [
  { value: "openai", label: "OpenAI" },
  { value: "anthropic", label: "Anthropic" },
  { value: "ollama", label: "Ollama" },
  { value: "vllm", label: "vLLM" },
  { value: "azure", label: "Azure OpenAI" },
  { value: "custom", label: "自定义" }
], yy = [
  { value: "tavern", label: "使用酒馆当前配置" },
  { value: "tavern_profile", label: "使用酒馆配置文件" },
  { value: "custom", label: "自定义 API 配置" }
];
function gy() {
  var c, d, o, f;
  try {
    const g = (o = (d = (c = window.SillyTavern) == null ? void 0 : c.getContext) == null ? void 0 : d.call(c)) == null ? void 0 : o.extensionSettings;
    return ((f = g == null ? void 0 : g.connectionManager) == null ? void 0 : f.profiles) || [];
  } catch (g) {
    return console.warn("[Engram] 无法获取酒馆 connection_profiles:", g), [];
  }
}
const py = ({
  preset: c,
  onChange: d,
  isNew: o = !1
}) => {
  var F, G, I, Ml;
  const [f, g] = V.useState([]), [x, O] = V.useState(!1), C = () => {
    O(!0);
    try {
      const q = gy();
      g(q);
    } finally {
      O(!1);
    }
  };
  V.useEffect(() => {
    C();
  }, []);
  const j = (q) => {
    d({ ...c, ...q, updatedAt: Date.now() });
  }, S = (q, K) => {
    j({
      parameters: { ...c.parameters, [q]: K }
    });
  }, D = (q, K) => {
    j({
      context: { ...c.context, [q]: K }
    });
  }, H = (q, K) => {
    var yl, zl, P, Ol;
    j({
      custom: {
        apiUrl: ((yl = c.custom) == null ? void 0 : yl.apiUrl) || "",
        apiKey: ((zl = c.custom) == null ? void 0 : zl.apiKey) || "",
        model: ((P = c.custom) == null ? void 0 : P.model) || "",
        apiSource: ((Ol = c.custom) == null ? void 0 : Ol.apiSource) || "openai",
        [q]: K
      }
    });
  }, J = (q) => {
    const K = q;
    j({
      source: K,
      tavernProfileId: K === "tavern_profile" ? c.tavernProfileId : void 0
    }), K === "tavern_profile" && C();
  }, w = f.map((q) => ({
    value: q.id,
    label: `${q.name} (${q.api || "Unknown"} - ${q.model || "Unknown"})`
  })), el = f.find((q) => q.id === c.tavernProfileId);
  return /* @__PURE__ */ r.jsxs("div", { className: Pl.form, children: [
    /* @__PURE__ */ r.jsxs(wt, { title: "基本信息", children: [
      /* @__PURE__ */ r.jsx(
        Ut,
        {
          label: "预设名称",
          value: c.name,
          onChange: (q) => j({ name: q }),
          placeholder: "输入预设名称",
          required: !0
        }
      ),
      /* @__PURE__ */ r.jsx(
        ri,
        {
          label: "配置源",
          value: c.source,
          onChange: J,
          options: yy,
          description: "选择 API 配置的来源"
        }
      )
    ] }),
    c.source === "tavern_profile" && /* @__PURE__ */ r.jsxs(wt, { title: "酒馆配置文件", description: "选择一个已保存的酒馆连接配置", children: [
      /* @__PURE__ */ r.jsxs("div", { className: Pl.profileSelectRow, children: [
        /* @__PURE__ */ r.jsx(
          ri,
          {
            label: "选择配置文件",
            value: c.tavernProfileId || "",
            onChange: (q) => j({ tavernProfileId: q }),
            options: w,
            placeholder: x ? "加载中..." : "请选择配置文件",
            disabled: x || w.length === 0
          }
        ),
        /* @__PURE__ */ r.jsx(
          "button",
          {
            type: "button",
            className: Pl.refreshBtn,
            onClick: C,
            disabled: x,
            title: "刷新配置列表",
            children: /* @__PURE__ */ r.jsx(Ev, { size: 16, className: x ? Pl.spinning : "" })
          }
        )
      ] }),
      w.length === 0 && !x && /* @__PURE__ */ r.jsx("div", { className: Pl.emptyHint, children: "未找到酒馆配置文件。请在酒馆中创建连接配置后刷新。" }),
      el && /* @__PURE__ */ r.jsxs("div", { className: Pl.profilePreview, children: [
        /* @__PURE__ */ r.jsxs("div", { className: Pl.previewItem, children: [
          /* @__PURE__ */ r.jsx("span", { className: Pl.previewLabel, children: "API:" }),
          /* @__PURE__ */ r.jsx("span", { className: Pl.previewValue, children: el.api || "-" })
        ] }),
        /* @__PURE__ */ r.jsxs("div", { className: Pl.previewItem, children: [
          /* @__PURE__ */ r.jsx("span", { className: Pl.previewLabel, children: "模型:" }),
          /* @__PURE__ */ r.jsx("span", { className: Pl.previewValue, children: el.model || "-" })
        ] }),
        /* @__PURE__ */ r.jsxs("div", { className: Pl.previewItem, children: [
          /* @__PURE__ */ r.jsx("span", { className: Pl.previewLabel, children: "预设:" }),
          /* @__PURE__ */ r.jsx("span", { className: Pl.previewValue, children: el.preset || "-" })
        ] })
      ] })
    ] }),
    c.source === "custom" && /* @__PURE__ */ r.jsxs(wt, { title: "API 配置", description: "自定义 API 端点和密钥", children: [
      /* @__PURE__ */ r.jsx(
        ri,
        {
          label: "API 类型",
          value: ((F = c.custom) == null ? void 0 : F.apiSource) || "openai",
          onChange: (q) => H("apiSource", q),
          options: vy
        }
      ),
      /* @__PURE__ */ r.jsx(
        Ut,
        {
          label: "API URL",
          type: "url",
          value: ((G = c.custom) == null ? void 0 : G.apiUrl) || "",
          onChange: (q) => H("apiUrl", q),
          placeholder: "https://api.openai.com/v1",
          required: !0
        }
      ),
      /* @__PURE__ */ r.jsx(
        Ut,
        {
          label: "API Key",
          type: "password",
          value: ((I = c.custom) == null ? void 0 : I.apiKey) || "",
          onChange: (q) => H("apiKey", q),
          placeholder: "sk-..."
        }
      ),
      /* @__PURE__ */ r.jsx(
        Ut,
        {
          label: "模型名称",
          value: ((Ml = c.custom) == null ? void 0 : Ml.model) || "",
          onChange: (q) => H("model", q),
          placeholder: "gpt-4o-mini",
          required: !0
        }
      )
    ] }),
    /* @__PURE__ */ r.jsxs(wt, { title: "采样参数", description: "控制模型输出的随机性和多样性", children: [
      /* @__PURE__ */ r.jsx(
        fe,
        {
          label: "温度 (Temperature)",
          value: c.parameters.temperature,
          onChange: (q) => S("temperature", q),
          min: 0,
          max: 2,
          step: 0.1,
          description: "较高的值使输出更随机，较低的值使输出更确定"
        }
      ),
      /* @__PURE__ */ r.jsx(
        fe,
        {
          label: "Top-P",
          value: c.parameters.topP,
          onChange: (q) => S("topP", q),
          min: 0,
          max: 1,
          step: 0.05,
          description: "核采样阈值，控制候选 token 的累积概率"
        }
      ),
      /* @__PURE__ */ r.jsx(
        fe,
        {
          label: "最大输出 Tokens",
          value: c.parameters.maxTokens,
          onChange: (q) => S("maxTokens", q),
          min: 64,
          max: 16384,
          step: 64,
          showSlider: !1
        }
      ),
      /* @__PURE__ */ r.jsx(
        fe,
        {
          label: "频率惩罚",
          value: c.parameters.frequencyPenalty,
          onChange: (q) => S("frequencyPenalty", q),
          min: -2,
          max: 2,
          step: 0.1,
          description: "降低重复 token 的概率"
        }
      ),
      /* @__PURE__ */ r.jsx(
        fe,
        {
          label: "存在惩罚",
          value: c.parameters.presencePenalty,
          onChange: (q) => S("presencePenalty", q),
          min: -2,
          max: 2,
          step: 0.1,
          description: "鼓励模型讨论新主题"
        }
      )
    ] }),
    /* @__PURE__ */ r.jsxs(wt, { title: "上下文设置", description: "控制发送给模型的上下文内容", children: [
      /* @__PURE__ */ r.jsx(
        fe,
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
      /* @__PURE__ */ r.jsx(
        J1,
        {
          label: "包含世界书设定",
          checked: c.context.includeWorldInfo,
          onChange: (q) => D("includeWorldInfo", q),
          description: "是否在提示词中包含已激活的世界书内容"
        }
      ),
      c.context.includeWorldInfo && /* @__PURE__ */ r.jsx(
        fe,
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
}, by = "_form_yhwxi_5", Sy = {
  form: by
}, _y = [
  { value: "transformers", label: "Transformers (本地)" },
  { value: "openai", label: "OpenAI Embeddings" },
  { value: "ollama", label: "Ollama" },
  { value: "vllm", label: "vLLM" },
  { value: "cohere", label: "Cohere" },
  { value: "jina", label: "Jina AI" },
  { value: "voyage", label: "Voyage AI" }
], M1 = {
  transformers: "Xenova/all-MiniLM-L6-v2",
  openai: "text-embedding-3-small",
  ollama: "nomic-embed-text",
  vllm: "BAAI/bge-m3",
  cohere: "embed-multilingual-v3.0",
  jina: "jina-embeddings-v3",
  voyage: "voyage-large-2"
}, O1 = ["ollama", "vllm"], D1 = ["openai", "cohere", "jina", "voyage"], Ey = ({
  config: c,
  onChange: d
}) => {
  var O;
  const o = (C) => {
    d({ ...c, ...C });
  }, f = (C) => {
    o({
      source: C,
      model: M1[C],
      apiUrl: O1.includes(C) ? c.apiUrl : void 0,
      apiKey: D1.includes(C) ? c.apiKey : void 0
    });
  }, g = O1.includes(c.source), x = D1.includes(c.source);
  return /* @__PURE__ */ r.jsxs("div", { className: Sy.form, children: [
    /* @__PURE__ */ r.jsxs(wt, { title: "向量化设置", description: "配置文本向量化使用的模型和端点", children: [
      /* @__PURE__ */ r.jsx(
        ri,
        {
          label: "向量源",
          value: c.source,
          onChange: (C) => f(C),
          options: _y,
          description: "选择向量化服务提供商"
        }
      ),
      g && /* @__PURE__ */ r.jsx(
        Ut,
        {
          label: "API URL",
          type: "url",
          value: c.apiUrl || "",
          onChange: (C) => o({ apiUrl: C }),
          placeholder: c.source === "ollama" ? "http://localhost:11434" : "http://localhost:8000",
          description: `${c.source} 服务的 API 端点`
        }
      ),
      x && /* @__PURE__ */ r.jsx(
        Ut,
        {
          label: "API Key",
          type: "password",
          value: c.apiKey || "",
          onChange: (C) => o({ apiKey: C }),
          placeholder: "输入 API 密钥"
        }
      ),
      /* @__PURE__ */ r.jsx(
        Ut,
        {
          label: "模型名称",
          value: c.model || "",
          onChange: (C) => o({ model: C }),
          placeholder: M1[c.source],
          description: "使用的向量化模型"
        }
      )
    ] }),
    /* @__PURE__ */ r.jsx(wt, { title: "高级选项", collapsible: !0, defaultCollapsed: !0, children: /* @__PURE__ */ r.jsx(
      Ut,
      {
        label: "向量维度",
        value: ((O = c.dimensions) == null ? void 0 : O.toString()) || "",
        onChange: (C) => {
          const j = parseInt(C, 10);
          o({ dimensions: isNaN(j) ? void 0 : j });
        },
        placeholder: "自动",
        description: "指定向量维度（留空则使用模型默认值）"
      }
    ) })
  ] });
}, xy = "_form_ddlra_5", Ty = "_quickSelect_ddlra_10", Ay = "_quickSelectLabel_ddlra_14", zy = "_quickSelectChips_ddlra_21", Ny = "_chip_ddlra_27", jy = "_chipActive_ddlra_43", Ga = {
  form: xy,
  quickSelect: Ty,
  quickSelectLabel: Ay,
  quickSelectChips: zy,
  chip: Ny,
  chipActive: jy
}, Cy = [
  "BAAI/bge-reranker-v2-m3",
  "BAAI/bge-reranker-base",
  "BAAI/bge-reranker-large",
  "cross-encoder/ms-marco-MiniLM-L-12-v2",
  "Xenova/ms-marco-MiniLM-L-6-v2"
], My = ({
  config: c,
  onChange: d
}) => {
  const o = (f) => {
    d({ ...c, ...f });
  };
  return /* @__PURE__ */ r.jsxs("div", { className: Ga.form, children: [
    /* @__PURE__ */ r.jsx(wt, { title: "Rerank 设置", description: "配置重排序模型以优化检索结果", children: /* @__PURE__ */ r.jsx(
      J1,
      {
        label: "启用 Rerank",
        checked: c.enabled,
        onChange: (f) => o({ enabled: f }),
        description: "使用 Rerank 模型对检索结果进行重新排序"
      }
    ) }),
    c.enabled && /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
      /* @__PURE__ */ r.jsxs(wt, { title: "API 配置", children: [
        /* @__PURE__ */ r.jsx(
          Ut,
          {
            label: "API URL",
            type: "url",
            value: c.url,
            onChange: (f) => o({ url: f }),
            placeholder: "http://localhost:8000/rerank",
            description: "Rerank 服务的 API 端点",
            required: !0
          }
        ),
        /* @__PURE__ */ r.jsx(
          Ut,
          {
            label: "API Key",
            type: "password",
            value: c.apiKey,
            onChange: (f) => o({ apiKey: f }),
            placeholder: "输入 API 密钥（如需要）"
          }
        ),
        /* @__PURE__ */ r.jsx(
          Ut,
          {
            label: "模型名称",
            value: c.model,
            onChange: (f) => o({ model: f }),
            placeholder: "BAAI/bge-reranker-v2-m3",
            description: "使用的 Rerank 模型",
            required: !0
          }
        ),
        /* @__PURE__ */ r.jsxs("div", { className: Ga.quickSelect, children: [
          /* @__PURE__ */ r.jsx("span", { className: Ga.quickSelectLabel, children: "常用模型：" }),
          /* @__PURE__ */ r.jsx("div", { className: Ga.quickSelectChips, children: Cy.map((f) => /* @__PURE__ */ r.jsx(
            "button",
            {
              type: "button",
              className: `${Ga.chip} ${c.model === f ? Ga.chipActive : ""}`,
              onClick: () => o({ model: f }),
              children: f.split("/").pop()
            },
            f
          )) })
        ] })
      ] }),
      /* @__PURE__ */ r.jsxs(wt, { title: "参数设置", children: [
        /* @__PURE__ */ r.jsx(
          fe,
          {
            label: "Top-N",
            value: c.topN,
            onChange: (f) => o({ topN: f }),
            min: 1,
            max: 50,
            step: 1,
            description: "重排后返回的结果数量"
          }
        ),
        /* @__PURE__ */ r.jsx(
          fe,
          {
            label: "混合权重 (Hybrid Alpha)",
            value: c.hybridAlpha,
            onChange: (f) => o({ hybridAlpha: f }),
            min: 0,
            max: 1,
            step: 0.1,
            description: "0 = 纯向量检索评分，1 = 纯 Rerank 评分"
          }
        )
      ] })
    ] })
  ] });
}, Oy = {
  temperature: 0.7,
  topP: 0.95,
  maxTokens: 2048,
  frequencyPenalty: 0,
  presencePenalty: 0
}, Dy = {
  maxChatHistory: 10,
  includeWorldInfo: !0,
  worldInfoBudget: 2048
}, Uy = {
  source: "transformers"
}, Ry = {
  enabled: !1,
  url: "",
  apiKey: "",
  model: "",
  topN: 5,
  hybridAlpha: 0.5
};
function k1(c = "默认预设") {
  const d = Date.now();
  return {
    id: `preset_${d}`,
    name: c,
    source: "tavern",
    parameters: { ...Oy },
    context: { ...Dy },
    isDefault: !0,
    createdAt: d,
    updatedAt: d
  };
}
function Hy() {
  return {
    llmPresets: [k1()],
    selectedPresetId: null,
    vectorConfig: { ...Uy },
    rerankConfig: { ...Ry }
  };
}
const qy = [
  { id: "llm", label: "LLM 预设", icon: Yn },
  { id: "vector", label: "向量化", icon: H1 },
  { id: "rerank", label: "Rerank", icon: iv }
], By = () => {
  const [c, d] = V.useState("llm"), [o, f] = V.useState(Hy), [g, x] = V.useState(null), [O, C] = V.useState(!1);
  V.useEffect(() => {
  }, []);
  const j = (G) => {
    f((I) => ({
      ...I,
      selectedPresetId: G.id
    })), x(G);
  }, S = () => {
    const G = k1(`预设 ${o.llmPresets.length + 1}`);
    G.isDefault = !1, f((I) => ({
      ...I,
      llmPresets: [...I.llmPresets, G],
      selectedPresetId: G.id
    })), x(G), C(!0);
  }, D = (G) => {
    f((I) => ({
      ...I,
      llmPresets: I.llmPresets.map(
        (Ml) => Ml.id === G.id ? G : Ml
      )
    })), x(G), C(!0);
  }, H = (G) => {
    const I = {
      ...G,
      id: `preset_${Date.now()}`,
      name: `${G.name} (副本)`,
      isDefault: !1,
      createdAt: Date.now(),
      updatedAt: Date.now()
    };
    f((Ml) => ({
      ...Ml,
      llmPresets: [...Ml.llmPresets, I]
    })), C(!0);
  }, J = (G) => {
    G.isDefault || (f((I) => ({
      ...I,
      llmPresets: I.llmPresets.filter((Ml) => Ml.id !== G.id),
      selectedPresetId: I.selectedPresetId === G.id ? null : I.selectedPresetId
    })), (g == null ? void 0 : g.id) === G.id && x(null), C(!0));
  }, w = (G) => {
    f((I) => ({ ...I, vectorConfig: G })), C(!0);
  }, el = (G) => {
    f((I) => ({ ...I, rerankConfig: G })), C(!0);
  }, F = () => {
    console.log("保存配置:", o), C(!1);
  };
  return /* @__PURE__ */ r.jsxs("div", { className: "engram-api-presets", children: [
    /* @__PURE__ */ r.jsxs("div", { className: "engram-page-header", children: [
      /* @__PURE__ */ r.jsx(Yn, { size: 24 }),
      /* @__PURE__ */ r.jsx("h2", { children: "API 配置" }),
      O && /* @__PURE__ */ r.jsxs("button", { className: "engram-btn engram-btn-primary", onClick: F, children: [
        /* @__PURE__ */ r.jsx(Tv, { size: 16 }),
        "保存更改"
      ] })
    ] }),
    /* @__PURE__ */ r.jsx("div", { className: "engram-tabs", children: qy.map((G) => /* @__PURE__ */ r.jsxs(
      "button",
      {
        className: `engram-tab ${c === G.id ? "active" : ""}`,
        onClick: () => d(G.id),
        children: [
          es.createElement(G.icon, { size: 16 }),
          G.label
        ]
      },
      G.id
    )) }),
    /* @__PURE__ */ r.jsxs("div", { className: "engram-api-content", children: [
      c === "llm" && /* @__PURE__ */ r.jsxs("div", { className: "engram-llm-tab", children: [
        /* @__PURE__ */ r.jsxs("div", { className: "engram-preset-list", children: [
          /* @__PURE__ */ r.jsxs("div", { className: "preset-list-header", children: [
            /* @__PURE__ */ r.jsx("h3", { children: "预设列表" }),
            /* @__PURE__ */ r.jsxs(
              "button",
              {
                className: "engram-btn engram-btn-ghost",
                onClick: S,
                children: [
                  /* @__PURE__ */ r.jsx(Sv, { size: 16 }),
                  "新建"
                ]
              }
            )
          ] }),
          /* @__PURE__ */ r.jsx("div", { className: "preset-list-items", children: o.llmPresets.map((G) => /* @__PURE__ */ r.jsx(
            uy,
            {
              preset: G,
              isSelected: o.selectedPresetId === G.id,
              onSelect: () => j(G),
              onEdit: () => {
                x(G), f((I) => ({
                  ...I,
                  selectedPresetId: G.id
                }));
              },
              onCopy: () => H(G),
              onDelete: () => J(G)
            },
            G.id
          )) })
        ] }),
        /* @__PURE__ */ r.jsx("div", { className: "engram-preset-editor", children: g ? /* @__PURE__ */ r.jsx(
          py,
          {
            preset: g,
            onChange: D
          }
        ) : /* @__PURE__ */ r.jsxs("div", { className: "engram-empty-state", children: [
          /* @__PURE__ */ r.jsx(Yn, { size: 48 }),
          /* @__PURE__ */ r.jsx("p", { children: "选择或创建一个预设开始配置" })
        ] }) })
      ] }),
      c === "vector" && /* @__PURE__ */ r.jsx("div", { className: "engram-vector-tab", children: /* @__PURE__ */ r.jsx(
        Ey,
        {
          config: o.vectorConfig,
          onChange: w
        }
      ) }),
      c === "rerank" && /* @__PURE__ */ r.jsx("div", { className: "engram-rerank-tab", children: /* @__PURE__ */ r.jsx(
        My,
        {
          config: o.rerankConfig,
          onChange: el
        }
      ) })
    ] })
  ] });
}, Ly = "_container_1onc6_5", Yy = "_toolbar_1onc6_13", Gy = "_toolbarRight_1onc6_20", wy = "_terminal_1onc6_28", Qy = "_terminalEmpty_1onc6_40", Xy = "_logEntry_1onc6_51", Vy = "_logLine_1onc6_55", Zy = "_hasData_1onc6_64", Ky = "_logExpand_1onc6_72", Jy = "_logTime_1onc6_79", ky = "_logModule_1onc6_84", $y = "_logLevel_1onc6_90", Wy = "_logMessage_1onc6_95", Fy = "_levelDebug_1onc6_101", Iy = "_levelInfo_1onc6_105", Py = "_levelSuccess_1onc6_109", l3 = "_levelWarn_1onc6_113", t3 = "_levelError_1onc6_117", e3 = "_logData_1onc6_122", a3 = "_statusbar_1onc6_139", Yl = {
  container: Ly,
  toolbar: Yy,
  toolbarRight: Gy,
  terminal: wy,
  terminalEmpty: Qy,
  logEntry: Xy,
  logLine: Vy,
  hasData: Zy,
  logExpand: Ky,
  logTime: Jy,
  logModule: ky,
  logLevel: $y,
  logMessage: Wy,
  levelDebug: Fy,
  levelInfo: Iy,
  levelSuccess: Py,
  levelWarn: l3,
  levelError: t3,
  logData: e3,
  statusbar: a3
};
function n3(c) {
  return new Date(c).toTimeString().slice(0, 8);
}
const u3 = {
  [xl.DEBUG]: Yl.levelDebug,
  [xl.INFO]: Yl.levelInfo,
  [xl.SUCCESS]: Yl.levelSuccess,
  [xl.WARN]: Yl.levelWarn,
  [xl.ERROR]: Yl.levelError
}, i3 = ({ entry: c }) => {
  const [d, o] = V.useState(!1), f = c.data !== void 0, g = di[c.level], x = u3[c.level] || "";
  return /* @__PURE__ */ r.jsxs("div", { className: Yl.logEntry, children: [
    /* @__PURE__ */ r.jsxs(
      "div",
      {
        className: `${Yl.logLine} ${f ? Yl.hasData : ""}`,
        onClick: () => f && o(!d),
        children: [
          /* @__PURE__ */ r.jsx("span", { className: Yl.logExpand, children: f ? d ? /* @__PURE__ */ r.jsx(Gh, { size: 12 }) : /* @__PURE__ */ r.jsx(Qh, { size: 12 }) : /* @__PURE__ */ r.jsx("span", { style: { width: 12, display: "inline-block" } }) }),
          /* @__PURE__ */ r.jsxs("span", { className: Yl.logTime, children: [
            "[",
            n3(c.timestamp),
            "]"
          ] }),
          /* @__PURE__ */ r.jsxs("span", { className: Yl.logModule, children: [
            "[",
            c.module.padEnd(16),
            "]"
          ] }),
          /* @__PURE__ */ r.jsxs("span", { className: `${Yl.logLevel} ${x}`, children: [
            g.icon,
            " ",
            g.label.padEnd(7)
          ] }),
          /* @__PURE__ */ r.jsx("span", { className: Yl.logMessage, children: c.message })
        ]
      }
    ),
    d && f && /* @__PURE__ */ r.jsx("div", { className: Yl.logData, children: /* @__PURE__ */ r.jsx("pre", { children: JSON.stringify(c.data, null, 2) }) })
  ] });
}, c3 = [
  "ALL",
  "Logger",
  "EventBus",
  "CORE/Pipeline",
  "CORE/RAG",
  "CORE/Memory",
  "UI/GraphView",
  "UI/MemoryStream"
], f3 = () => {
  const [c, d] = V.useState([]), [o, f] = V.useState([]), [g, x] = V.useState(""), [O, C] = V.useState(-1), [j, S] = V.useState("ALL"), [D, H] = V.useState(!0), [J, w] = V.useState(!1), [el, F] = V.useState(!1), G = V.useRef(null), I = V.useRef(null);
  V.useEffect(() => {
    d(Dt.getLogs());
    const K = Dt.subscribe((yl) => {
      d((zl) => [...zl, yl]);
    });
    return () => K();
  }, []), V.useEffect(() => {
    let K = c;
    if (O !== -1 && (K = K.filter((yl) => yl.level >= O)), j !== "ALL" && (K = K.filter((yl) => yl.module.startsWith(j))), g.trim()) {
      const yl = g.toLowerCase();
      K = K.filter(
        (zl) => zl.message.toLowerCase().includes(yl) || zl.module.toLowerCase().includes(yl)
      );
    }
    f(K);
  }, [c, O, j, g]), V.useEffect(() => {
    D && I.current && I.current.scrollIntoView({ behavior: "smooth" });
  }, [o, D]);
  const Ml = V.useCallback(async () => {
    await Dt.clear(), d([]);
  }, []), q = V.useCallback(() => {
    const K = Dt.exportToMarkdown(), yl = Dt.getExportFilename(), zl = new Blob([K], { type: "text/markdown" }), P = URL.createObjectURL(zl), Ol = document.createElement("a");
    Ol.href = P, Ol.download = yl, Ol.click(), URL.revokeObjectURL(P), Dt.success("DevLog", `日志已导出: ${yl}`);
  }, []);
  return /* @__PURE__ */ r.jsxs("div", { className: Yl.container, children: [
    /* @__PURE__ */ r.jsxs("div", { className: "engram-page-header", children: [
      /* @__PURE__ */ r.jsx(Gn, { size: 24 }),
      /* @__PURE__ */ r.jsx("h2", { children: "开发日志" })
    ] }),
    /* @__PURE__ */ r.jsxs("div", { className: Yl.toolbar, children: [
      /* @__PURE__ */ r.jsxs("div", { className: "engram-dropdown", children: [
        /* @__PURE__ */ r.jsxs(
          "button",
          {
            className: "engram-btn engram-btn-ghost",
            onClick: () => w(!J),
            children: [
              /* @__PURE__ */ r.jsx(E1, { size: 14 }),
              O === -1 ? "全部级别" : di[O].label
            ]
          }
        ),
        J && /* @__PURE__ */ r.jsxs("div", { className: "engram-dropdown-menu", children: [
          /* @__PURE__ */ r.jsx(
            "button",
            {
              onClick: () => {
                C(-1), w(!1);
              },
              children: "全部级别"
            }
          ),
          Object.entries(di).map(([K, yl]) => /* @__PURE__ */ r.jsxs(
            "button",
            {
              onClick: () => {
                C(Number(K)), w(!1);
              },
              children: [
                yl.icon,
                " ",
                yl.label
              ]
            },
            K
          ))
        ] })
      ] }),
      /* @__PURE__ */ r.jsxs("div", { className: "engram-dropdown", children: [
        /* @__PURE__ */ r.jsxs(
          "button",
          {
            className: "engram-btn engram-btn-ghost",
            onClick: () => F(!el),
            children: [
              /* @__PURE__ */ r.jsx(E1, { size: 14 }),
              j
            ]
          }
        ),
        el && /* @__PURE__ */ r.jsx("div", { className: "engram-dropdown-menu", children: c3.map((K) => /* @__PURE__ */ r.jsx(
          "button",
          {
            onClick: () => {
              S(K), F(!1);
            },
            children: K
          },
          K
        )) })
      ] }),
      /* @__PURE__ */ r.jsxs("div", { className: "engram-search-box", children: [
        /* @__PURE__ */ r.jsx(Kf, { size: 14 }),
        /* @__PURE__ */ r.jsx(
          "input",
          {
            type: "text",
            placeholder: "搜索日志...",
            value: g,
            onChange: (K) => x(K.target.value)
          }
        )
      ] }),
      /* @__PURE__ */ r.jsxs("div", { className: Yl.toolbarRight, children: [
        /* @__PURE__ */ r.jsx(
          "button",
          {
            className: `engram-btn engram-btn-ghost ${D ? "active" : ""}`,
            onClick: () => H(!D),
            title: "自动滚动到最新",
            children: /* @__PURE__ */ r.jsx(Hh, { size: 14 })
          }
        ),
        /* @__PURE__ */ r.jsx(
          "button",
          {
            className: "engram-btn engram-btn-ghost",
            onClick: Ml,
            title: "清空日志",
            children: /* @__PURE__ */ r.jsx(L1, { size: 14 })
          }
        ),
        /* @__PURE__ */ r.jsxs(
          "button",
          {
            className: "engram-btn engram-btn-primary",
            onClick: q,
            title: "导出日志",
            children: [
              /* @__PURE__ */ r.jsx(ev, { size: 14 }),
              "导出"
            ]
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ r.jsx("div", { className: Yl.terminal, ref: G, children: o.length === 0 ? /* @__PURE__ */ r.jsxs("div", { className: Yl.terminalEmpty, children: [
      /* @__PURE__ */ r.jsx(Gn, { size: 48, strokeWidth: 1 }),
      /* @__PURE__ */ r.jsx("p", { children: "暂无日志记录" })
    ] }) : /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
      o.map((K) => /* @__PURE__ */ r.jsx(i3, { entry: K }, K.id)),
      /* @__PURE__ */ r.jsx("div", { ref: I })
    ] }) }),
    /* @__PURE__ */ r.jsxs("div", { className: Yl.statusbar, children: [
      /* @__PURE__ */ r.jsxs("span", { children: [
        "共 ",
        c.length,
        " 条日志"
      ] }),
      o.length !== c.length && /* @__PURE__ */ r.jsxs("span", { children: [
        "（显示 ",
        o.length,
        " 条）"
      ] })
    ] })
  ] });
}, s3 = () => /* @__PURE__ */ r.jsxs("div", { className: "engram-settings", children: [
  /* @__PURE__ */ r.jsxs("div", { className: "engram-page-header", children: [
    /* @__PURE__ */ r.jsx(us, { size: 24 }),
    /* @__PURE__ */ r.jsx("h2", { children: "设置" })
  ] }),
  /* @__PURE__ */ r.jsx("div", { className: "engram-page-content", children: /* @__PURE__ */ r.jsx("p", { className: "engram-placeholder", children: "设置选项将在这里展示..." }) })
] }), o3 = {
  "/dashboard": K1,
  "/memory": p2,
  "/graph": b2,
  "/brain": fi,
  "/brain/summarize": fi,
  "/brain/vectorize": fi,
  "/brain/batch": fi,
  "/api": By,
  "/dev": f3,
  "/settings": s3
}, r3 = ({ onClose: c }) => {
  const [d, o] = V.useState("/dashboard"), [f, g] = V.useState(!1), [x, O] = V.useState(!0), [C, j] = V.useState(
    typeof window < "u" && window.innerWidth < 768
  );
  V.useEffect(() => {
    const D = () => {
      j(window.innerWidth < 768);
    };
    return window.addEventListener("resize", D), () => window.removeEventListener("resize", D);
  }, []), V.useEffect(() => {
    C && (g(!0), O(!1));
  }, [C]);
  const S = o3[d] || K1;
  return /* @__PURE__ */ r.jsx(
    Lv,
    {
      currentPath: d,
      onNavigate: o,
      isFullscreen: f,
      onToggleFullscreen: () => g(!f),
      isSidebarOpen: x,
      onToggleSidebar: () => O(!x),
      onCloseSidebar: () => O(!1),
      isMobile: C,
      onClose: c,
      children: /* @__PURE__ */ r.jsx(S, { onNavigate: o })
    }
  );
};
y2((c, d) => {
  const o = zh.createRoot(c);
  return o.render(es.createElement(r3, { onClose: d })), o;
});
document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", C1) : C1();
export {
  d3 as c,
  U1 as g
};
//# sourceMappingURL=index-CFNNZ-yT.js.map
