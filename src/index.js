!function() {
    function t(t, e, n) {
        Object.defineProperty(t, e, {
            get: n,
            enumerable: !0
        })
    }
    function e(t, e) {
        return Object.keys(e).forEach((function(n) {
            "default" !== n && "__esModule" !== n && Object.defineProperty(t, n, {
                enumerable: !0,
                get: function() {
                    return e[n]
                }
            })
        }
        )),
        t
    }
    var n = {}
      , i = {}
      , s = "top";
    t(i, "top", (function() {
        return s
    }
    ));
    var o = "bottom";
    t(i, "bottom", (function() {
        return o
    }
    ));
    var r = "right";
    t(i, "right", (function() {
        return r
    }
    ));
    var a = "left";
    t(i, "left", (function() {
        return a
    }
    ));
    var l = "auto";
    t(i, "auto", (function() {
        return l
    }
    ));
    var c = [s, o, r, a];
    t(i, "basePlacements", (function() {
        return c
    }
    ));
    var h = "start";
    t(i, "start", (function() {
        return h
    }
    ));
    var d = "end";
    t(i, "end", (function() {
        return d
    }
    ));
    var u = "clippingParents";
    t(i, "clippingParents", (function() {
        return u
    }
    ));
    var f = "viewport";
    t(i, "viewport", (function() {
        return f
    }
    ));
    var p = "popper";
    t(i, "popper", (function() {
        return p
    }
    ));
    var m = "reference";
    t(i, "reference", (function() {
        return m
    }
    ));
    var g = c.reduce((function(t, e) {
        return t.concat([e + "-" + h, e + "-" + d])
    }
    ), []);
    t(i, "variationPlacements", (function() {
        return g
    }
    ));
    var _ = [].concat(c, [l]).reduce((function(t, e) {
        return t.concat([e, e + "-" + h, e + "-" + d])
    }
    ), []);
    t(i, "placements", (function() {
        return _
    }
    ));
    var b = "beforeRead";
    t(i, "beforeRead", (function() {
        return b
    }
    ));
    var v = "read";
    t(i, "read", (function() {
        return v
    }
    ));
    var y = "afterRead";
    t(i, "afterRead", (function() {
        return y
    }
    ));
    var w = "beforeMain";
    t(i, "beforeMain", (function() {
        return w
    }
    ));
    var E = "main";
    t(i, "main", (function() {
        return E
    }
    ));
    var T = "afterMain";
    t(i, "afterMain", (function() {
        return T
    }
    ));
    var A = "beforeWrite";
    t(i, "beforeWrite", (function() {
        return A
    }
    ));
    var L = "write";
    t(i, "write", (function() {
        return L
    }
    ));
    var k = "afterWrite";
    t(i, "afterWrite", (function() {
        return k
    }
    ));
    var C = [b, v, y, w, E, T, A, L, k];
    t(i, "modifierPhases", (function() {
        return C
    }
    )),
    e(n, i);
    var O = {};
    function D(t) {
        return t ? (t.nodeName || "").toLowerCase() : null
    }
    function x(t) {
        if (null == t)
            return window;
        if ("[object Window]" !== t.toString()) {
            var e = t.ownerDocument;
            return e && e.defaultView || window
        }
        return t
    }
    function N(t) {
        return t instanceof x(t).Element || t instanceof Element
    }
    function S(t) {
        return t instanceof x(t).HTMLElement || t instanceof HTMLElement
    }
    function I(t) {
        return "undefined" != typeof ShadowRoot && (t instanceof x(t).ShadowRoot || t instanceof ShadowRoot)
    }
    var j = {
        name: "applyStyles",
        enabled: !0,
        phase: "write",
        fn: function(t) {
            var e = t.state;
            Object.keys(e.elements).forEach((function(t) {
                var n = e.styles[t] || {}
                  , i = e.attributes[t] || {}
                  , s = e.elements[t];
                S(s) && D(s) && (Object.assign(s.style, n),
                Object.keys(i).forEach((function(t) {
                    var e = i[t];
                    !1 === e ? s.removeAttribute(t) : s.setAttribute(t, !0 === e ? "" : e)
                }
                )))
            }
            ))
        },
        effect: function(t) {
            var e = t.state
              , n = {
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
            return Object.assign(e.elements.popper.style, n.popper),
            e.styles = n,
            e.elements.arrow && Object.assign(e.elements.arrow.style, n.arrow),
            function() {
                Object.keys(e.elements).forEach((function(t) {
                    var i = e.elements[t]
                      , s = e.attributes[t] || {}
                      , o = Object.keys(e.styles.hasOwnProperty(t) ? e.styles[t] : n[t]).reduce((function(t, e) {
                        return t[e] = "",
                        t
                    }
                    ), {});
                    S(i) && D(i) && (Object.assign(i.style, o),
                    Object.keys(s).forEach((function(t) {
                        i.removeAttribute(t)
                    }
                    )))
                }
                ))
            }
        },
        requires: ["computeStyles"]
    };
    function P(t) {
        return t.split("-")[0]
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
        }
    }
    function H(t) {
        var e = M(t)
          , n = t.offsetWidth
          , i = t.offsetHeight;
        return Math.abs(e.width - n) <= 1 && (n = e.width),
        Math.abs(e.height - i) <= 1 && (i = e.height),
        {
            x: t.offsetLeft,
            y: t.offsetTop,
            width: n,
            height: i
        }
    }
    function R(t, e) {
        var n = e.getRootNode && e.getRootNode();
        if (t.contains(e))
            return !0;
        if (n && I(n)) {
            var i = e;
            do {
                if (i && t.isSameNode(i))
                    return !0;
                i = i.parentNode || i.host
            } while (i)
        }
        return !1
    }
    function B(t) {
        return x(t).getComputedStyle(t)
    }
    function $(t) {
        return ["table", "td", "th"].indexOf(D(t)) >= 0
    }
    function W(t) {
        return ((N(t) ? t.ownerDocument : t.document) || window.document).documentElement
    }
    function q(t) {
        return "html" === D(t) ? t : t.assignedSlot || t.parentNode || (I(t) ? t.host : null) || W(t)
    }
    function z(t) {
        return S(t) && "fixed" !== B(t).position ? t.offsetParent : null
    }
    function U(t) {
        for (var e = x(t), n = z(t); n && $(n) && "static" === B(n).position; )
            n = z(n);
        return n && ("html" === D(n) || "body" === D(n) && "static" === B(n).position) ? e : n || function(t) {
            var e = -1 !== navigator.userAgent.toLowerCase().indexOf("firefox");
            if (-1 !== navigator.userAgent.indexOf("Trident") && S(t) && "fixed" === B(t).position)
                return null;
            for (var n = q(t); S(n) && ["html", "body"].indexOf(D(n)) < 0; ) {
                var i = B(n);
                if ("none" !== i.transform || "none" !== i.perspective || "paint" === i.contain || -1 !== ["transform", "perspective"].indexOf(i.willChange) || e && "filter" === i.willChange || e && i.filter && "none" !== i.filter)
                    return n;
                n = n.parentNode
            }
            return null
        }(t) || e
    }
    function F(t) {
        return ["top", "bottom"].indexOf(t) >= 0 ? "x" : "y"
    }
    var V = Math.max
      , K = Math.min
      , X = Math.round;
    function Y(t, e, n) {
        return V(t, K(e, n))
    }
    function Q(t) {
        return Object.assign({}, {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
        }, t)
    }
    function G(t, e) {
        return e.reduce((function(e, n) {
            return e[n] = t,
            e
        }
        ), {})
    }
    var Z = {
        name: "arrow",
        enabled: !0,
        phase: "main",
        fn: function(t) {
            var e, n = t.state, i = t.name, l = t.options, h = n.elements.arrow, d = n.modifiersData.popperOffsets, u = P(n.placement), f = F(u), p = [a, r].indexOf(u) >= 0 ? "height" : "width";
            if (h && d) {
                var m = function(t, e) {
                    return Q("number" != typeof (t = "function" == typeof t ? t(Object.assign({}, e.rects, {
                        placement: e.placement
                    })) : t) ? t : G(t, c))
                }(l.padding, n)
                  , g = H(h)
                  , _ = "y" === f ? s : a
                  , b = "y" === f ? o : r
                  , v = n.rects.reference[p] + n.rects.reference[f] - d[f] - n.rects.popper[p]
                  , y = d[f] - n.rects.reference[f]
                  , w = U(h)
                  , E = w ? "y" === f ? w.clientHeight || 0 : w.clientWidth || 0 : 0
                  , T = v / 2 - y / 2
                  , A = m[_]
                  , L = E - g[p] - m[b]
                  , k = E / 2 - g[p] / 2 + T
                  , C = Y(A, k, L)
                  , O = f;
                n.modifiersData[i] = ((e = {})[O] = C,
                e.centerOffset = C - k,
                e)
            }
        },
        effect: function(t) {
            var e = t.state
              , n = t.options.element
              , i = void 0 === n ? "[data-popper-arrow]" : n;
            null != i && ("string" != typeof i || (i = e.elements.popper.querySelector(i))) && R(e.elements.popper, i) && (e.elements.arrow = i)
        },
        requires: ["popperOffsets"],
        requiresIfExists: ["preventOverflow"]
    }
      , J = {
        top: "auto",
        right: "auto",
        bottom: "auto",
        left: "auto"
    };
    function tt(t) {
        var e, n = t.popper, i = t.popperRect, l = t.placement, c = t.offsets, h = t.position, d = t.gpuAcceleration, u = t.adaptive, f = t.roundOffsets, p = !0 === f ? function(t) {
            var e = t.x
              , n = t.y
              , i = window.devicePixelRatio || 1;
            return {
                x: X(X(e * i) / i) || 0,
                y: X(X(n * i) / i) || 0
            }
        }(c) : "function" == typeof f ? f(c) : c, m = p.x, g = void 0 === m ? 0 : m, _ = p.y, b = void 0 === _ ? 0 : _, v = c.hasOwnProperty("x"), y = c.hasOwnProperty("y"), w = a, E = s, T = window;
        if (u) {
            var A = U(n)
              , L = "clientHeight"
              , k = "clientWidth";
            A === x(n) && "static" !== B(A = W(n)).position && (L = "scrollHeight",
            k = "scrollWidth"),
            A = A,
            l === s && (E = o,
            b -= A[L] - i.height,
            b *= d ? 1 : -1),
            l === a && (w = r,
            g -= A[k] - i.width,
            g *= d ? 1 : -1)
        }
        var C, O = Object.assign({
            position: h
        }, u && J);
        return d ? Object.assign({}, O, ((C = {})[E] = y ? "0" : "",
        C[w] = v ? "0" : "",
        C.transform = (T.devicePixelRatio || 1) < 2 ? "translate(" + g + "px, " + b + "px)" : "translate3d(" + g + "px, " + b + "px, 0)",
        C)) : Object.assign({}, O, ((e = {})[E] = y ? b + "px" : "",
        e[w] = v ? g + "px" : "",
        e.transform = "",
        e))
    }
    var et = {
        name: "computeStyles",
        enabled: !0,
        phase: "beforeWrite",
        fn: function(t) {
            var e = t.state
              , n = t.options
              , i = n.gpuAcceleration
              , s = void 0 === i || i
              , o = n.adaptive
              , r = void 0 === o || o
              , a = n.roundOffsets
              , l = void 0 === a || a
              , c = {
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
            })))),
            null != e.modifiersData.arrow && (e.styles.arrow = Object.assign({}, e.styles.arrow, tt(Object.assign({}, c, {
                offsets: e.modifiersData.arrow,
                position: "absolute",
                adaptive: !1,
                roundOffsets: l
            })))),
            e.attributes.popper = Object.assign({}, e.attributes.popper, {
                "data-popper-placement": e.placement
            })
        },
        data: {}
    }
      , nt = {
        passive: !0
    };
    var it = {
        name: "eventListeners",
        enabled: !0,
        phase: "write",
        fn: function() {},
        effect: function(t) {
            var e = t.state
              , n = t.instance
              , i = t.options
              , s = i.scroll
              , o = void 0 === s || s
              , r = i.resize
              , a = void 0 === r || r
              , l = x(e.elements.popper)
              , c = [].concat(e.scrollParents.reference, e.scrollParents.popper);
            return o && c.forEach((function(t) {
                t.addEventListener("scroll", n.update, nt)
            }
            )),
            a && l.addEventListener("resize", n.update, nt),
            function() {
                o && c.forEach((function(t) {
                    t.removeEventListener("scroll", n.update, nt)
                }
                )),
                a && l.removeEventListener("resize", n.update, nt)
            }
        },
        data: {}
    }
      , st = {
        left: "right",
        right: "left",
        bottom: "top",
        top: "bottom"
    };
    function ot(t) {
        return t.replace(/left|right|bottom|top/g, (function(t) {
            return st[t]
        }
        ))
    }
    var rt = {
        start: "end",
        end: "start"
    };
    function at(t) {
        return t.replace(/start|end/g, (function(t) {
            return rt[t]
        }
        ))
    }
    function lt(t) {
        var e = x(t);
        return {
            scrollLeft: e.pageXOffset,
            scrollTop: e.pageYOffset
        }
    }
    function ct(t) {
        return M(W(t)).left + lt(t).scrollLeft
    }
    function ht(t) {
        var e = B(t)
          , n = e.overflow
          , i = e.overflowX
          , s = e.overflowY;
        return /auto|scroll|overlay|hidden/.test(n + s + i)
    }
    function dt(t) {
        return ["html", "body", "#document"].indexOf(D(t)) >= 0 ? t.ownerDocument.body : S(t) && ht(t) ? t : dt(q(t))
    }
    function ut(t, e) {
        var n;
        void 0 === e && (e = []);
        var i = dt(t)
          , s = i === (null == (n = t.ownerDocument) ? void 0 : n.body)
          , o = x(i)
          , r = s ? [o].concat(o.visualViewport || [], ht(i) ? i : []) : i
          , a = e.concat(r);
        return s ? a : a.concat(ut(q(r)))
    }
    function ft(t) {
        return Object.assign({}, t, {
            left: t.x,
            top: t.y,
            right: t.x + t.width,
            bottom: t.y + t.height
        })
    }
    function pt(t, e) {
        return e === f ? ft(function(t) {
            var e = x(t)
              , n = W(t)
              , i = e.visualViewport
              , s = n.clientWidth
              , o = n.clientHeight
              , r = 0
              , a = 0;
            return i && (s = i.width,
            o = i.height,
            /^((?!chrome|android).)*safari/i.test(navigator.userAgent) || (r = i.offsetLeft,
            a = i.offsetTop)),
            {
                width: s,
                height: o,
                x: r + ct(t),
                y: a
            }
        }(t)) : S(e) ? function(t) {
            var e = M(t);
            return e.top = e.top + t.clientTop,
            e.left = e.left + t.clientLeft,
            e.bottom = e.top + t.clientHeight,
            e.right = e.left + t.clientWidth,
            e.width = t.clientWidth,
            e.height = t.clientHeight,
            e.x = e.left,
            e.y = e.top,
            e
        }(e) : ft(function(t) {
            var e, n = W(t), i = lt(t), s = null == (e = t.ownerDocument) ? void 0 : e.body, o = V(n.scrollWidth, n.clientWidth, s ? s.scrollWidth : 0, s ? s.clientWidth : 0), r = V(n.scrollHeight, n.clientHeight, s ? s.scrollHeight : 0, s ? s.clientHeight : 0), a = -i.scrollLeft + ct(t), l = -i.scrollTop;
            return "rtl" === B(s || n).direction && (a += V(n.clientWidth, s ? s.clientWidth : 0) - o),
            {
                width: o,
                height: r,
                x: a,
                y: l
            }
        }(W(t)))
    }
    function mt(t, e, n) {
        var i = "clippingParents" === e ? function(t) {
            var e = ut(q(t))
              , n = ["absolute", "fixed"].indexOf(B(t).position) >= 0 && S(t) ? U(t) : t;
            return N(n) ? e.filter((function(t) {
                return N(t) && R(t, n) && "body" !== D(t)
            }
            )) : []
        }(t) : [].concat(e)
          , s = [].concat(i, [n])
          , o = s[0]
          , r = s.reduce((function(e, n) {
            var i = pt(t, n);
            return e.top = V(i.top, e.top),
            e.right = K(i.right, e.right),
            e.bottom = K(i.bottom, e.bottom),
            e.left = V(i.left, e.left),
            e
        }
        ), pt(t, o));
        return r.width = r.right - r.left,
        r.height = r.bottom - r.top,
        r.x = r.left,
        r.y = r.top,
        r
    }
    function gt(t) {
        return t.split("-")[1]
    }
    function _t(t) {
        var e, n = t.reference, i = t.element, l = t.placement, c = l ? P(l) : null, u = l ? gt(l) : null, f = n.x + n.width / 2 - i.width / 2, p = n.y + n.height / 2 - i.height / 2;
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
            }
        }
        var m = c ? F(c) : null;
        if (null != m) {
            var g = "y" === m ? "height" : "width";
            switch (u) {
            case h:
                e[m] = e[m] - (n[g] / 2 - i[g] / 2);
                break;
            case d:
                e[m] = e[m] + (n[g] / 2 - i[g] / 2)
            }
        }
        return e
    }
    function bt(t, e) {
        void 0 === e && (e = {});
        var n = e
          , i = n.placement
          , a = void 0 === i ? t.placement : i
          , l = n.boundary
          , h = void 0 === l ? u : l
          , d = n.rootBoundary
          , g = void 0 === d ? f : d
          , _ = n.elementContext
          , b = void 0 === _ ? p : _
          , v = n.altBoundary
          , y = void 0 !== v && v
          , w = n.padding
          , E = void 0 === w ? 0 : w
          , T = Q("number" != typeof E ? E : G(E, c))
          , A = b === p ? m : p
          , L = t.elements.reference
          , k = t.rects.popper
          , C = t.elements[y ? A : b]
          , O = mt(N(C) ? C : C.contextElement || W(t.elements.popper), h, g)
          , D = M(L)
          , x = _t({
            reference: D,
            element: k,
            strategy: "absolute",
            placement: a
        })
          , S = ft(Object.assign({}, k, x))
          , I = b === p ? S : D
          , j = {
            top: O.top - I.top + T.top,
            bottom: I.bottom - O.bottom + T.bottom,
            left: O.left - I.left + T.left,
            right: I.right - O.right + T.right
        }
          , P = t.modifiersData.offset;
        if (b === p && P) {
            var H = P[a];
            Object.keys(j).forEach((function(t) {
                var e = [r, o].indexOf(t) >= 0 ? 1 : -1
                  , n = [s, o].indexOf(t) >= 0 ? "y" : "x";
                j[t] += H[n] * e
            }
            ))
        }
        return j
    }
    var vt = {
        name: "flip",
        enabled: !0,
        phase: "main",
        fn: function(t) {
            var e = t.state
              , n = t.options
              , i = t.name;
            if (!e.modifiersData[i]._skip) {
                for (var d = n.mainAxis, u = void 0 === d || d, f = n.altAxis, p = void 0 === f || f, m = n.fallbackPlacements, b = n.padding, v = n.boundary, y = n.rootBoundary, w = n.altBoundary, E = n.flipVariations, T = void 0 === E || E, A = n.allowedAutoPlacements, L = e.options.placement, k = P(L), C = m || (k === L || !T ? [ot(L)] : function(t) {
                    if (P(t) === l)
                        return [];
                    var e = ot(t);
                    return [at(t), e, at(e)]
                }(L)), O = [L].concat(C).reduce((function(t, n) {
                    return t.concat(P(n) === l ? function(t, e) {
                        void 0 === e && (e = {});
                        var n = e
                          , i = n.placement
                          , s = n.boundary
                          , o = n.rootBoundary
                          , r = n.padding
                          , a = n.flipVariations
                          , l = n.allowedAutoPlacements
                          , h = void 0 === l ? _ : l
                          , d = gt(i)
                          , u = d ? a ? g : g.filter((function(t) {
                            return gt(t) === d
                        }
                        )) : c
                          , f = u.filter((function(t) {
                            return h.indexOf(t) >= 0
                        }
                        ));
                        0 === f.length && (f = u);
                        var p = f.reduce((function(e, n) {
                            return e[n] = bt(t, {
                                placement: n,
                                boundary: s,
                                rootBoundary: o,
                                padding: r
                            })[P(n)],
                            e
                        }
                        ), {});
                        return Object.keys(p).sort((function(t, e) {
                            return p[t] - p[e]
                        }
                        ))
                    }(e, {
                        placement: n,
                        boundary: v,
                        rootBoundary: y,
                        padding: b,
                        flipVariations: T,
                        allowedAutoPlacements: A
                    }) : n)
                }
                ), []), D = e.rects.reference, x = e.rects.popper, N = new Map, S = !0, I = O[0], j = 0; j < O.length; j++) {
                    var M = O[j]
                      , H = P(M)
                      , R = gt(M) === h
                      , B = [s, o].indexOf(H) >= 0
                      , $ = B ? "width" : "height"
                      , W = bt(e, {
                        placement: M,
                        boundary: v,
                        rootBoundary: y,
                        altBoundary: w,
                        padding: b
                    })
                      , q = B ? R ? r : a : R ? o : s;
                    D[$] > x[$] && (q = ot(q));
                    var z = ot(q)
                      , U = [];
                    if (u && U.push(W[H] <= 0),
                    p && U.push(W[q] <= 0, W[z] <= 0),
                    U.every((function(t) {
                        return t
                    }
                    ))) {
                        I = M,
                        S = !1;
                        break
                    }
                    N.set(M, U)
                }
                if (S)
                    for (var F = function(t) {
                        var e = O.find((function(e) {
                            var n = N.get(e);
                            if (n)
                                return n.slice(0, t).every((function(t) {
                                    return t
                                }
                                ))
                        }
                        ));
                        if (e)
                            return I = e,
                            "break"
                    }, V = T ? 3 : 1; V > 0; V--) {
                        if ("break" === F(V))
                            break
                    }
                e.placement !== I && (e.modifiersData[i]._skip = !0,
                e.placement = I,
                e.reset = !0)
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
        }),
        {
            top: t.top - e.height - n.y,
            right: t.right - e.width + n.x,
            bottom: t.bottom - e.height + n.y,
            left: t.left - e.width - n.x
        }
    }
    function wt(t) {
        return [s, r, o, a].some((function(e) {
            return t[e] >= 0
        }
        ))
    }
    var Et = {
        name: "hide",
        enabled: !0,
        phase: "main",
        requiresIfExists: ["preventOverflow"],
        fn: function(t) {
            var e = t.state
              , n = t.name
              , i = e.rects.reference
              , s = e.rects.popper
              , o = e.modifiersData.preventOverflow
              , r = bt(e, {
                elementContext: "reference"
            })
              , a = bt(e, {
                altBoundary: !0
            })
              , l = yt(r, i)
              , c = yt(a, s, o)
              , h = wt(l)
              , d = wt(c);
            e.modifiersData[n] = {
                referenceClippingOffsets: l,
                popperEscapeOffsets: c,
                isReferenceHidden: h,
                hasPopperEscaped: d
            },
            e.attributes.popper = Object.assign({}, e.attributes.popper, {
                "data-popper-reference-hidden": h,
                "data-popper-escaped": d
            })
        }
    };
    var Tt = {
        name: "offset",
        enabled: !0,
        phase: "main",
        requires: ["popperOffsets"],
        fn: function(t) {
            var e = t.state
              , n = t.options
              , i = t.name
              , o = n.offset
              , l = void 0 === o ? [0, 0] : o
              , c = _.reduce((function(t, n) {
                return t[n] = function(t, e, n) {
                    var i = P(t)
                      , o = [a, s].indexOf(i) >= 0 ? -1 : 1
                      , l = "function" == typeof n ? n(Object.assign({}, e, {
                        placement: t
                    })) : n
                      , c = l[0]
                      , h = l[1];
                    return c = c || 0,
                    h = (h || 0) * o,
                    [a, r].indexOf(i) >= 0 ? {
                        x: h,
                        y: c
                    } : {
                        x: c,
                        y: h
                    }
                }(n, e.rects, l),
                t
            }
            ), {})
              , h = c[e.placement]
              , d = h.x
              , u = h.y;
            null != e.modifiersData.popperOffsets && (e.modifiersData.popperOffsets.x += d,
            e.modifiersData.popperOffsets.y += u),
            e.modifiersData[i] = c
        }
    };
    var At = {
        name: "popperOffsets",
        enabled: !0,
        phase: "read",
        fn: function(t) {
            var e = t.state
              , n = t.name;
            e.modifiersData[n] = _t({
                reference: e.rects.reference,
                element: e.rects.popper,
                strategy: "absolute",
                placement: e.placement
            })
        },
        data: {}
    };
    var Lt = {
        name: "preventOverflow",
        enabled: !0,
        phase: "main",
        fn: function(t) {
            var e = t.state
              , n = t.options
              , i = t.name
              , l = n.mainAxis
              , c = void 0 === l || l
              , d = n.altAxis
              , u = void 0 !== d && d
              , f = n.boundary
              , p = n.rootBoundary
              , m = n.altBoundary
              , g = n.padding
              , _ = n.tether
              , b = void 0 === _ || _
              , v = n.tetherOffset
              , y = void 0 === v ? 0 : v
              , w = bt(e, {
                boundary: f,
                rootBoundary: p,
                padding: g,
                altBoundary: m
            })
              , E = P(e.placement)
              , T = gt(e.placement)
              , A = !T
              , L = F(E)
              , k = "x" === L ? "y" : "x"
              , C = e.modifiersData.popperOffsets
              , O = e.rects.reference
              , D = e.rects.popper
              , x = "function" == typeof y ? y(Object.assign({}, e.rects, {
                placement: e.placement
            })) : y
              , N = {
                x: 0,
                y: 0
            };
            if (C) {
                if (c || u) {
                    var S = "y" === L ? s : a
                      , I = "y" === L ? o : r
                      , j = "y" === L ? "height" : "width"
                      , M = C[L]
                      , R = C[L] + w[S]
                      , B = C[L] - w[I]
                      , $ = b ? -D[j] / 2 : 0
                      , W = T === h ? O[j] : D[j]
                      , q = T === h ? -D[j] : -O[j]
                      , z = e.elements.arrow
                      , X = b && z ? H(z) : {
                        width: 0,
                        height: 0
                    }
                      , Q = e.modifiersData["arrow#persistent"] ? e.modifiersData["arrow#persistent"].padding : {
                        top: 0,
                        right: 0,
                        bottom: 0,
                        left: 0
                    }
                      , G = Q[S]
                      , Z = Q[I]
                      , J = Y(0, O[j], X[j])
                      , tt = A ? O[j] / 2 - $ - J - G - x : W - J - G - x
                      , et = A ? -O[j] / 2 + $ + J + Z + x : q + J + Z + x
                      , nt = e.elements.arrow && U(e.elements.arrow)
                      , it = nt ? "y" === L ? nt.clientTop || 0 : nt.clientLeft || 0 : 0
                      , st = e.modifiersData.offset ? e.modifiersData.offset[e.placement][L] : 0
                      , ot = C[L] + tt - st - it
                      , rt = C[L] + et - st;
                    if (c) {
                        var at = Y(b ? K(R, ot) : R, M, b ? V(B, rt) : B);
                        C[L] = at,
                        N[L] = at - M
                    }
                    if (u) {
                        var lt = "x" === L ? s : a
                          , ct = "x" === L ? o : r
                          , ht = C[k]
                          , dt = ht + w[lt]
                          , ut = ht - w[ct]
                          , ft = Y(b ? K(dt, ot) : dt, ht, b ? V(ut, rt) : ut);
                        C[k] = ft,
                        N[k] = ft - ht
                    }
                }
                e.modifiersData[i] = N
            }
        },
        requiresIfExists: ["offset"]
    };
    function kt(t, e, n) {
        void 0 === n && (n = !1);
        var i, s, o = W(e), r = M(t), a = S(e), l = {
            scrollLeft: 0,
            scrollTop: 0
        }, c = {
            x: 0,
            y: 0
        };
        return (a || !a && !n) && (("body" !== D(e) || ht(o)) && (l = (i = e) !== x(i) && S(i) ? {
            scrollLeft: (s = i).scrollLeft,
            scrollTop: s.scrollTop
        } : lt(i)),
        S(e) ? ((c = M(e)).x += e.clientLeft,
        c.y += e.clientTop) : o && (c.x = ct(o))),
        {
            x: r.left + l.scrollLeft - c.x,
            y: r.top + l.scrollTop - c.y,
            width: r.width,
            height: r.height
        }
    }
    function Ct(t) {
        var e = new Map
          , n = new Set
          , i = [];
        function s(t) {
            n.add(t.name),
            [].concat(t.requires || [], t.requiresIfExists || []).forEach((function(t) {
                if (!n.has(t)) {
                    var i = e.get(t);
                    i && s(i)
                }
            }
            )),
            i.push(t)
        }
        return t.forEach((function(t) {
            e.set(t.name, t)
        }
        )),
        t.forEach((function(t) {
            n.has(t.name) || s(t)
        }
        )),
        i
    }
    t(O, "applyStyles", (function() {
        return j
    }
    )),
    t(O, "arrow", (function() {
        return Z
    }
    )),
    t(O, "computeStyles", (function() {
        return et
    }
    )),
    t(O, "eventListeners", (function() {
        return it
    }
    )),
    t(O, "flip", (function() {
        return vt
    }
    )),
    t(O, "hide", (function() {
        return Et
    }
    )),
    t(O, "offset", (function() {
        return Tt
    }
    )),
    t(O, "popperOffsets", (function() {
        return At
    }
    )),
    t(O, "preventOverflow", (function() {
        return Lt
    }
    )),
    e(n, O);
    var Ot = {
        placement: "bottom",
        modifiers: [],
        strategy: "absolute"
    };
    function Dt() {
        for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
            e[n] = arguments[n];
        return !e.some((function(t) {
            return !(t && "function" == typeof t.getBoundingClientRect)
        }
        ))
    }
    function xt(t) {
        void 0 === t && (t = {});
        var e = t
          , n = e.defaultModifiers
          , i = void 0 === n ? [] : n
          , s = e.defaultOptions
          , o = void 0 === s ? Ot : s;
        return function(t, e, n) {
            void 0 === n && (n = o);
            var s, r, a = {
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
            }, l = [], c = !1, h = {
                state: a,
                setOptions: function(n) {
                    d(),
                    a.options = Object.assign({}, o, a.options, n),
                    a.scrollParents = {
                        reference: N(t) ? ut(t) : t.contextElement ? ut(t.contextElement) : [],
                        popper: ut(e)
                    };
                    var s = function(t) {
                        var e = Ct(t);
                        return C.reduce((function(t, n) {
                            return t.concat(e.filter((function(t) {
                                return t.phase === n
                            }
                            )))
                        }
                        ), [])
                    }(function(t) {
                        var e = t.reduce((function(t, e) {
                            var n = t[e.name];
                            return t[e.name] = n ? Object.assign({}, n, e, {
                                options: Object.assign({}, n.options, e.options),
                                data: Object.assign({}, n.data, e.data)
                            }) : e,
                            t
                        }
                        ), {});
                        return Object.keys(e).map((function(t) {
                            return e[t]
                        }
                        ))
                    }([].concat(i, a.options.modifiers)));
                    return a.orderedModifiers = s.filter((function(t) {
                        return t.enabled
                    }
                    )),
                    a.orderedModifiers.forEach((function(t) {
                        var e = t.name
                          , n = t.options
                          , i = void 0 === n ? {} : n
                          , s = t.effect;
                        if ("function" == typeof s) {
                            var o = s({
                                state: a,
                                name: e,
                                instance: h,
                                options: i
                            })
                              , r = function() {};
                            l.push(o || r)
                        }
                    }
                    )),
                    h.update()
                },
                forceUpdate: function() {
                    if (!c) {
                        var t = a.elements
                          , e = t.reference
                          , n = t.popper;
                        if (Dt(e, n)) {
                            a.rects = {
                                reference: kt(e, U(n), "fixed" === a.options.strategy),
                                popper: H(n)
                            },
                            a.reset = !1,
                            a.placement = a.options.placement,
                            a.orderedModifiers.forEach((function(t) {
                                return a.modifiersData[t.name] = Object.assign({}, t.data)
                            }
                            ));
                            for (var i = 0; i < a.orderedModifiers.length; i++)
                                if (!0 !== a.reset) {
                                    var s = a.orderedModifiers[i]
                                      , o = s.fn
                                      , r = s.options
                                      , l = void 0 === r ? {} : r
                                      , d = s.name;
                                    "function" == typeof o && (a = o({
                                        state: a,
                                        options: l,
                                        name: d,
                                        instance: h
                                    }) || a)
                                } else
                                    a.reset = !1,
                                    i = -1
                        }
                    }
                },
                update: (s = function() {
                    return new Promise((function(t) {
                        h.forceUpdate(),
                        t(a)
                    }
                    ))
                }
                ,
                function() {
                    return r || (r = new Promise((function(t) {
                        Promise.resolve().then((function() {
                            r = void 0,
                            t(s())
                        }
                        ))
                    }
                    ))),
                    r
                }
                ),
                destroy: function() {
                    d(),
                    c = !0
                }
            };
            if (!Dt(t, e))
                return h;
            function d() {
                l.forEach((function(t) {
                    return t()
                }
                )),
                l = []
            }
            return h.setOptions(n).then((function(t) {
                !c && n.onFirstUpdate && n.onFirstUpdate(t)
            }
            )),
            h
        }
    }
    var Nt = xt()
      , St = xt({
        defaultModifiers: [it, At, et, j, Tt, vt, Lt, Z, Et]
    })
      , It = xt({
        defaultModifiers: [it, At, et, j]
    });
    t(n, "createPopperBase", (function() {
        return Nt
    }
    )),
    t(n, "detectOverflow", (function() {
        return bt
    }
    )),
    t(n, "popperGenerator", (function() {
        return xt
    }
    )),
    t(n, "createPopper", (function() {
        return St
    }
    )),
    t(n, "createPopperLite", (function() {
        return It
    }
    ));
    const jt = function(t, e=document.documentElement) {
        return [].concat(...Element.prototype.querySelectorAll.call(e, t))
    }
      , Pt = function(t, e=document.documentElement) {
        return Element.prototype.querySelector.call(e, t)
    }
      , Mt = function(t, e) {
        return [].concat(...t.children).filter((t=>t.matches(e)))
    }
      , Ht = function(t, e) {
        const n = [];
        let i = t.parentNode;
        for (; i && i.nodeType === Node.ELEMENT_NODE && 3 !== i.nodeType; )
            i.matches(e) && n.push(i),
            i = i.parentNode;
        return n
    }
      , Rt = function(t, e) {
        let n = t.previousElementSibling;
        for (; n; ) {
            if (n.matches(e))
                return [n];
            n = n.previousElementSibling
        }
        return []
    }
      , Bt = function(t, e) {
        let n = t.nextElementSibling;
        for (; n; ) {
            if (n.matches(e))
                return [n];
            n = n.nextElementSibling
        }
        return []
    }
      , $t = "transitionend"
      , Wt = t=>{
        do {
            t += Math.floor(1e6 * Math.random())
        } while (document.getElementById(t));
        return t
    }
      , qt = t=>{
        let e = t.getAttribute("data-bs-target");
        if (!e || "#" === e) {
            let n = t.getAttribute("href");
            if (!n || !n.includes("#") && !n.startsWith("."))
                return null;
            n.includes("#") && !n.startsWith("#") && (n = `#${n.split("#")[1]}`),
            e = n && "#" !== n ? n.trim() : null
        }
        return e
    }
      , zt = t=>{
        const e = qt(t);
        return e && document.querySelector(e) ? e : null
    }
      , Ut = t=>{
        const e = qt(t);
        return e ? document.querySelector(e) : null
    }
      , Ft = t=>{
        if (!t)
            return 0;
        let {transitionDuration: e, transitionDelay: n} = window.getComputedStyle(t);
        const i = Number.parseFloat(e)
          , s = Number.parseFloat(n);
        return i || s ? (e = e.split(",")[0],
        n = n.split(",")[0],
        1e3 * (Number.parseFloat(e) + Number.parseFloat(n))) : 0
    }
      , Vt = t=>{
        t.dispatchEvent(new Event($t))
    }
      , Kt = t=>!(!t || "object" != typeof t) && (void 0 !== t.jquery && (t = t[0]),
    void 0 !== t.nodeType)
      , Xt = t=>Kt(t) ? t.jquery ? t[0] : t : "string" == typeof t && t.length > 0 ? Pt(t) : null
      , Yt = (t,e)=>{
        let n = !1;
        const i = e + 5;
        t.addEventListener($t, (function e() {
            n = !0,
            t.removeEventListener($t, e)
        }
        )),
        setTimeout((()=>{
            n || Vt(t)
        }
        ), i)
    }
      , Qt = (t,e,n)=>{
        Object.keys(n).forEach((i=>{
            const s = n[i]
              , o = e[i]
              , r = o && Kt(o) ? "element" : null == (a = o) ? `${a}` : {}.toString.call(a).match(/\s([a-z]+)/i)[1].toLowerCase();
            var a;
            if (!new RegExp(s).test(r))
                throw new TypeError(`${t.toUpperCase()}: Option "${i}" provided type "${r}" but expected type "${s}".`)
        }
        ))
    }
      , Gt = t=>{
        if (!t)
            return !1;
        if (t.style && t.parentNode && t.parentNode.style) {
            const e = getComputedStyle(t)
              , n = getComputedStyle(t.parentNode);
            return "none" !== e.display && "none" !== n.display && "hidden" !== e.visibility
        }
        return !1
    }
      , Zt = t=>!t || t.nodeType !== Node.ELEMENT_NODE || (!!t.classList.contains("disabled") || (void 0 !== t.disabled ? t.disabled : t.hasAttribute("disabled") && "false" !== t.getAttribute("disabled")))
      , Jt = t=>{
        if (!document.documentElement.attachShadow)
            return null;
        if ("function" == typeof t.getRootNode) {
            const e = t.getRootNode();
            return e instanceof ShadowRoot ? e : null
        }
        return t instanceof ShadowRoot ? t : t.parentNode ? Jt(t.parentNode) : null
    }
      , te = ()=>{}
      , ee = t=>t.offsetHeight
      , ne = ()=>{
        const {jQuery: t} = window;
        return t && !document.body.hasAttribute("data-bs-no-jquery") ? t : null
    }
      , ie = ()=>"rtl" === document.documentElement.dir
      , se = t=>{
        var e;
        e = ()=>{
            const e = ne();
            if (e) {
                const n = t.NAME
                  , i = e.fn[n];
                e.fn[n] = t.jQueryInterface,
                e.fn[n].Constructor = t,
                e.fn[n].noConflict = ()=>(e.fn[n] = i,
                t.jQueryInterface)
            }
        }
        ,
        "loading" === document.readyState ? document.addEventListener("DOMContentLoaded", e) : e()
    }
      , oe = t=>{
        "function" == typeof t && t()
    }
      , re = new Map;
    var ae = function(t, e, n) {
        re.has(t) || re.set(t, new Map);
        const i = re.get(t);
        i.has(e) || 0 === i.size ? i.set(e, n) : console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(i.keys())[0]}.`)
    }
      , le = function(t, e) {
        return re.has(t) && re.get(t).get(e) || null
    }
      , ce = function(t, e) {
        if (!re.has(t))
            return;
        const n = re.get(t);
        n.delete(e),
        0 === n.size && re.delete(t)
    };
    const he = /[^.]*(?=\..*)\.|.*/
      , de = /\..*/
      , ue = /::\d+$/
      , fe = {};
    let pe = 1;
    const me = {
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    }
      , ge = /^(mouseenter|mouseleave)/i
      , _e = new Set(["click", "dblclick", "mouseup", "mousedown", "contextmenu", "mousewheel", "DOMMouseScroll", "mouseover", "mouseout", "mousemove", "selectstart", "selectend", "keydown", "keypress", "keyup", "orientationchange", "touchstart", "touchmove", "touchend", "touchcancel", "pointerdown", "pointermove", "pointerup", "pointerleave", "pointercancel", "gesturestart", "gesturechange", "gestureend", "focus", "blur", "change", "reset", "select", "submit", "focusin", "focusout", "load", "unload", "beforeunload", "resize", "move", "DOMContentLoaded", "readystatechange", "error", "abort", "scroll"]);
    function be(t, e) {
        return e && `${e}::${pe++}` || t.uidEvent || pe++
    }
    function ve(t) {
        const e = be(t);
        return t.uidEvent = e,
        fe[e] = fe[e] || {},
        fe[e]
    }
    function ye(t, e, n=null) {
        const i = Object.keys(t);
        for (let s = 0, o = i.length; s < o; s++) {
            const o = t[i[s]];
            if (o.originalHandler === e && o.delegationSelector === n)
                return o
        }
        return null
    }
    function we(t, e, n) {
        const i = "string" == typeof e
          , s = i ? n : e;
        let o = Ae(t);
        return _e.has(o) || (o = t),
        [i, s, o]
    }
    function Ee(t, e, n, i, s) {
        if ("string" != typeof e || !t)
            return;
        if (n || (n = i,
        i = null),
        ge.test(e)) {
            const t = t=>function(e) {
                if (!e.relatedTarget || e.relatedTarget !== e.delegateTarget && !e.delegateTarget.contains(e.relatedTarget))
                    return t.call(this, e)
            }
            ;
            i ? i = t(i) : n = t(n)
        }
        const [o,r,a] = we(e, n, i)
          , l = ve(t)
          , c = l[a] || (l[a] = {})
          , h = ye(c, r, o ? n : null);
        if (h)
            return void (h.oneOff = h.oneOff && s);
        const d = be(r, e.replace(he, ""))
          , u = o ? function(t, e, n) {
            return function i(s) {
                const o = t.querySelectorAll(e);
                for (let {target: r} = s; r && r !== this; r = r.parentNode)
                    for (let a = o.length; a--; )
                        if (o[a] === r)
                            return s.delegateTarget = r,
                            i.oneOff && Le.off(t, s.type, e, n),
                            n.apply(r, [s]);
                return null
            }
        }(t, n, i) : function(t, e) {
            return function n(i) {
                return i.delegateTarget = t,
                n.oneOff && Le.off(t, i.type, e),
                e.apply(t, [i])
            }
        }(t, n);
        u.delegationSelector = o ? n : null,
        u.originalHandler = r,
        u.oneOff = s,
        u.uidEvent = d,
        c[d] = u,
        t.addEventListener(a, u, o)
    }
    function Te(t, e, n, i, s) {
        const o = ye(e[n], i, s);
        o && (t.removeEventListener(n, o, Boolean(s)),
        delete e[n][o.uidEvent])
    }
    function Ae(t) {
        return t = t.replace(de, ""),
        me[t] || t
    }
    const Le = {
        on: function(t, e, n, i) {
            Ee(t, e, n, i, !1)
        },
        one: function(t, e, n, i) {
            Ee(t, e, n, i, !0)
        },
        off: function(t, e, n, i) {
            if ("string" != typeof e || !t)
                return;
            const [s,o,r] = we(e, n, i)
              , a = r !== e
              , l = ve(t)
              , c = e.startsWith(".");
            if (void 0 !== o) {
                if (!l || !l[r])
                    return;
                return void Te(t, l, r, o, s ? n : null)
            }
            c && Object.keys(l).forEach((n=>{
                !function(t, e, n, i) {
                    const s = e[n] || {};
                    Object.keys(s).forEach((o=>{
                        if (o.includes(i)) {
                            const i = s[o];
                            Te(t, e, n, i.originalHandler, i.delegationSelector)
                        }
                    }
                    ))
                }(t, l, n, e.slice(1))
            }
            ));
            const h = l[r] || {};
            Object.keys(h).forEach((n=>{
                const i = n.replace(ue, "");
                if (!a || e.includes(i)) {
                    const e = h[n];
                    Te(t, l, r, e.originalHandler, e.delegationSelector)
                }
            }
            ))
        },
        trigger: function(t, e, n) {
            if ("string" != typeof e || !t)
                return null;
            const i = ne()
              , s = Ae(e)
              , o = e !== s
              , r = _e.has(s);
            let a, l = !0, c = !0, h = !1, d = null;
            return o && i && (a = i.Event(e, n),
            i(t).trigger(a),
            l = !a.isPropagationStopped(),
            c = !a.isImmediatePropagationStopped(),
            h = a.isDefaultPrevented()),
            r ? (d = document.createEvent("HTMLEvents"),
            d.initEvent(s, l, !0)) : d = new CustomEvent(e,{
                bubbles: l,
                cancelable: !0
            }),
            void 0 !== n && Object.keys(n).forEach((t=>{
                Object.defineProperty(d, t, {
                    get: function() {
                        return n[t]
                    }
                })
            }
            )),
            h && d.preventDefault(),
            c && t.dispatchEvent(d),
            d.defaultPrevented && void 0 !== a && a.preventDefault(),
            d
        }
    };
    class ke {
        constructor(t) {
            (t = Xt(t)) && (this._element = t,
            ae(this._element, this.constructor.DATA_KEY, this))
        }
        dispose() {
            ce(this._element, this.constructor.DATA_KEY),
            Le.off(this._element, this.constructor.EVENT_KEY),
            Object.getOwnPropertyNames(this).forEach((t=>{
                this[t] = null
            }
            ))
        }
        _queueCallback(t, e, n=!0) {
            if (!n)
                return void oe(t);
            const i = Ft(e);
            Le.one(e, "transitionend", (()=>oe(t))),
            Yt(e, i)
        }
        static getInstance(t) {
            return le(t, this.DATA_KEY)
        }
        static get VERSION() {
            return "5.0.1"
        }
        static get NAME() {
            throw new Error('You have to implement the static method "NAME", for each component!')
        }
        static get DATA_KEY() {
            return `bs.${this.NAME}`
        }
        static get EVENT_KEY() {
            return `.${this.DATA_KEY}`
        }
    }
    const Ce = "bs.alert";
    class Oe extends ke {
        static get NAME() {
            return "alert"
        }
        close(t) {
            const e = t ? this._getRootElement(t) : this._element
              , n = this._triggerCloseEvent(e);
            null === n || n.defaultPrevented || this._removeElement(e)
        }
        _getRootElement(t) {
            return Ut(t) || t.closest(".alert")
        }
        _triggerCloseEvent(t) {
            return Le.trigger(t, "close.bs.alert")
        }
        _removeElement(t) {
            t.classList.remove("show");
            const e = t.classList.contains("fade");
            this._queueCallback((()=>this._destroyElement(t)), t, e)
        }
        _destroyElement(t) {
            t.parentNode && t.parentNode.removeChild(t),
            Le.trigger(t, "closed.bs.alert")
        }
        static jQueryInterface(t) {
            return this.each((function() {
                let e = le(this, Ce);
                e || (e = new Oe(this)),
                "close" === t && e[t](this)
            }
            ))
        }
        static handleDismiss(t) {
            return function(e) {
                e && e.preventDefault(),
                t.close(this)
            }
        }
    }
    Le.on(document, "click.bs.alert.data-api", '[data-bs-dismiss="alert"]', Oe.handleDismiss(new Oe)),
    se(Oe);
    const De = "bs.button"
      , xe = '[data-bs-toggle="button"]';
    class Ne extends ke {
        static get NAME() {
            return "button"
        }
        toggle() {
            this._element.setAttribute("aria-pressed", this._element.classList.toggle("active"))
        }
        static jQueryInterface(t) {
            return this.each((function() {
                let e = le(this, De);
                e || (e = new Ne(this)),
                "toggle" === t && e[t]()
            }
            ))
        }
    }
    function Se(t) {
        return "true" === t || "false" !== t && (t === Number(t).toString() ? Number(t) : "" === t || "null" === t ? null : t)
    }
    function Ie(t) {
        return t.replace(/[A-Z]/g, (t=>`-${t.toLowerCase()}`))
    }
    Le.on(document, "click.bs.button.data-api", xe, (t=>{
        t.preventDefault();
        const e = t.target.closest(xe);
        let n = le(e, De);
        n || (n = new Ne(e)),
        n.toggle()
    }
    )),
    se(Ne);
    const je = {
        setDataAttribute: function(t, e, n) {
            t.setAttribute(`data-bs-${Ie(e)}`, n)
        },
        removeDataAttribute: function(t, e) {
            t.removeAttribute(`data-bs-${Ie(e)}`)
        },
        getDataAttributes: function(t) {
            if (!t)
                return {};
            const e = {};
            return Object.keys(t.dataset).filter((t=>t.startsWith("bs"))).forEach((n=>{
                let i = n.replace(/^bs/, "");
                i = i.charAt(0).toLowerCase() + i.slice(1, i.length),
                e[i] = Se(t.dataset[n])
            }
            )),
            e
        },
        getDataAttribute: function(t, e) {
            return Se(t.getAttribute(`data-bs-${Ie(e)}`))
        },
        offset: function(t) {
            const e = t.getBoundingClientRect();
            return {
                top: e.top + document.body.scrollTop,
                left: e.left + document.body.scrollLeft
            }
        },
        position: function(t) {
            return {
                top: t.offsetTop,
                left: t.offsetLeft
            }
        }
    }
      , Pe = "carousel"
      , Me = "bs.carousel"
      , He = {
        interval: 5e3,
        keyboard: !0,
        slide: !1,
        pause: "hover",
        wrap: !0,
        touch: !0
    }
      , Re = {
        interval: "(number|boolean)",
        keyboard: "boolean",
        slide: "(boolean|string)",
        pause: "(string|boolean)",
        wrap: "boolean",
        touch: "boolean"
    }
      , Be = "next"
      , $e = "prev"
      , We = "left"
      , qe = "right"
      , ze = "slid.bs.carousel"
      , Ue = "active"
      , Fe = ".active.carousel-item"
      , Ve = "touch";
    class Ke extends ke {
        constructor(t, e) {
            super(t),
            this._items = null,
            this._interval = null,
            this._activeElement = null,
            this._isPaused = !1,
            this._isSliding = !1,
            this.touchTimeout = null,
            this.touchStartX = 0,
            this.touchDeltaX = 0,
            this._config = this._getConfig(e),
            this._indicatorsElement = Pt(".carousel-indicators", this._element),
            this._touchSupported = "ontouchstart"in document.documentElement || navigator.maxTouchPoints > 0,
            this._pointerEvent = Boolean(window.PointerEvent),
            this._addEventListeners()
        }
        static get Default() {
            return He
        }
        static get NAME() {
            return Pe
        }
        next() {
            this._isSliding || this._slide(Be)
        }
        nextWhenVisible() {
            !document.hidden && Gt(this._element) && this.next()
        }
        prev() {
            this._isSliding || this._slide($e)
        }
        pause(t) {
            t || (this._isPaused = !0),
            Pt(".carousel-item-next, .carousel-item-prev", this._element) && (Vt(this._element),
            this.cycle(!0)),
            clearInterval(this._interval),
            this._interval = null
        }
        cycle(t) {
            t || (this._isPaused = !1),
            this._interval && (clearInterval(this._interval),
            this._interval = null),
            this._config && this._config.interval && !this._isPaused && (this._updateInterval(),
            this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval))
        }
        to(t) {
            this._activeElement = Pt(Fe, this._element);
            const e = this._getItemIndex(this._activeElement);
            if (t > this._items.length - 1 || t < 0)
                return;
            if (this._isSliding)
                return void Le.one(this._element, ze, (()=>this.to(t)));
            if (e === t)
                return this.pause(),
                void this.cycle();
            const n = t > e ? Be : $e;
            this._slide(n, this._items[t])
        }
        _getConfig(t) {
            return t = {
                ...He,
                ...t
            },
            Qt(Pe, t, Re),
            t
        }
        _handleSwipe() {
            const t = Math.abs(this.touchDeltaX);
            if (t <= 40)
                return;
            const e = t / this.touchDeltaX;
            this.touchDeltaX = 0,
            e && this._slide(e > 0 ? qe : We)
        }
        _addEventListeners() {
            this._config.keyboard && Le.on(this._element, "keydown.bs.carousel", (t=>this._keydown(t))),
            "hover" === this._config.pause && (Le.on(this._element, "mouseenter.bs.carousel", (t=>this.pause(t))),
            Le.on(this._element, "mouseleave.bs.carousel", (t=>this.cycle(t)))),
            this._config.touch && this._touchSupported && this._addTouchEventListeners()
        }
        _addTouchEventListeners() {
            const t = t=>{
                !this._pointerEvent || "pen" !== t.pointerType && t.pointerType !== Ve ? this._pointerEvent || (this.touchStartX = t.touches[0].clientX) : this.touchStartX = t.clientX
            }
              , e = t=>{
                this.touchDeltaX = t.touches && t.touches.length > 1 ? 0 : t.touches[0].clientX - this.touchStartX
            }
              , n = t=>{
                !this._pointerEvent || "pen" !== t.pointerType && t.pointerType !== Ve || (this.touchDeltaX = t.clientX - this.touchStartX),
                this._handleSwipe(),
                "hover" === this._config.pause && (this.pause(),
                this.touchTimeout && clearTimeout(this.touchTimeout),
                this.touchTimeout = setTimeout((t=>this.cycle(t)), 500 + this._config.interval))
            }
            ;
            jt(".carousel-item img", this._element).forEach((t=>{
                Le.on(t, "dragstart.bs.carousel", (t=>t.preventDefault()))
            }
            )),
            this._pointerEvent ? (Le.on(this._element, "pointerdown.bs.carousel", (e=>t(e))),
            Le.on(this._element, "pointerup.bs.carousel", (t=>n(t))),
            this._element.classList.add("pointer-event")) : (Le.on(this._element, "touchstart.bs.carousel", (e=>t(e))),
            Le.on(this._element, "touchmove.bs.carousel", (t=>e(t))),
            Le.on(this._element, "touchend.bs.carousel", (t=>n(t))))
        }
        _keydown(t) {
            /input|textarea/i.test(t.target.tagName) || ("ArrowLeft" === t.key ? (t.preventDefault(),
            this._slide(qe)) : "ArrowRight" === t.key && (t.preventDefault(),
            this._slide(We)))
        }
        _getItemIndex(t) {
            return this._items = t && t.parentNode ? jt(".carousel-item", t.parentNode) : [],
            this._items.indexOf(t)
        }
        _getItemByOrder(t, e) {
            const n = t === Be
              , i = t === $e
              , s = this._getItemIndex(e)
              , o = this._items.length - 1;
            if ((i && 0 === s || n && s === o) && !this._config.wrap)
                return e;
            const r = (s + (i ? -1 : 1)) % this._items.length;
            return -1 === r ? this._items[this._items.length - 1] : this._items[r]
        }
        _triggerSlideEvent(t, e) {
            const n = this._getItemIndex(t)
              , i = this._getItemIndex(Pt(Fe, this._element));
            return Le.trigger(this._element, "slide.bs.carousel", {
                relatedTarget: t,
                direction: e,
                from: i,
                to: n
            })
        }
        _setActiveIndicatorElement(t) {
            if (this._indicatorsElement) {
                const e = Pt(".active", this._indicatorsElement);
                e.classList.remove(Ue),
                e.removeAttribute("aria-current");
                const n = jt("[data-bs-target]", this._indicatorsElement);
                for (let e = 0; e < n.length; e++)
                    if (Number.parseInt(n[e].getAttribute("data-bs-slide-to"), 10) === this._getItemIndex(t)) {
                        n[e].classList.add(Ue),
                        n[e].setAttribute("aria-current", "true");
                        break
                    }
            }
        }
        _updateInterval() {
            const t = this._activeElement || Pt(Fe, this._element);
            if (!t)
                return;
            const e = Number.parseInt(t.getAttribute("data-bs-interval"), 10);
            e ? (this._config.defaultInterval = this._config.defaultInterval || this._config.interval,
            this._config.interval = e) : this._config.interval = this._config.defaultInterval || this._config.interval
        }
        _slide(t, e) {
            const n = this._directionToOrder(t)
              , i = Pt(Fe, this._element)
              , s = this._getItemIndex(i)
              , o = e || this._getItemByOrder(n, i)
              , r = this._getItemIndex(o)
              , a = Boolean(this._interval)
              , l = n === Be
              , c = l ? "carousel-item-start" : "carousel-item-end"
              , h = l ? "carousel-item-next" : "carousel-item-prev"
              , d = this._orderToDirection(n);
            if (o && o.classList.contains(Ue))
                return void (this._isSliding = !1);
            if (this._triggerSlideEvent(o, d).defaultPrevented)
                return;
            if (!i || !o)
                return;
            this._isSliding = !0,
            a && this.pause(),
            this._setActiveIndicatorElement(o),
            this._activeElement = o;
            const u = ()=>{
                Le.trigger(this._element, ze, {
                    relatedTarget: o,
                    direction: d,
                    from: s,
                    to: r
                })
            }
            ;
            if (this._element.classList.contains("slide")) {
                o.classList.add(h),
                ee(o),
                i.classList.add(c),
                o.classList.add(c);
                const t = ()=>{
                    o.classList.remove(c, h),
                    o.classList.add(Ue),
                    i.classList.remove(Ue, h, c),
                    this._isSliding = !1,
                    setTimeout(u, 0)
                }
                ;
                this._queueCallback(t, i, !0)
            } else
                i.classList.remove(Ue),
                o.classList.add(Ue),
                this._isSliding = !1,
                u();
            a && this.cycle()
        }
        _directionToOrder(t) {
            return [qe, We].includes(t) ? ie() ? t === We ? $e : Be : t === We ? Be : $e : t
        }
        _orderToDirection(t) {
            return [Be, $e].includes(t) ? ie() ? t === $e ? We : qe : t === $e ? qe : We : t
        }
        static carouselInterface(t, e) {
            let n = le(t, Me)
              , i = {
                ...He,
                ...je.getDataAttributes(t)
            };
            "object" == typeof e && (i = {
                ...i,
                ...e
            });
            const s = "string" == typeof e ? e : i.slide;
            if (n || (n = new Ke(t,i)),
            "number" == typeof e)
                n.to(e);
            else if ("string" == typeof s) {
                if (void 0 === n[s])
                    throw new TypeError(`No method named "${s}"`);
                n[s]()
            } else
                i.interval && i.ride && (n.pause(),
                n.cycle())
        }
        static jQueryInterface(t) {
            return this.each((function() {
                Ke.carouselInterface(this, t)
            }
            ))
        }
        static dataApiClickHandler(t) {
            const e = Ut(this);
            if (!e || !e.classList.contains("carousel"))
                return;
            const n = {
                ...je.getDataAttributes(e),
                ...je.getDataAttributes(this)
            }
              , i = this.getAttribute("data-bs-slide-to");
            i && (n.interval = !1),
            Ke.carouselInterface(e, n),
            i && le(e, Me).to(i),
            t.preventDefault()
        }
    }
    Le.on(document, "click.bs.carousel.data-api", "[data-bs-slide], [data-bs-slide-to]", Ke.dataApiClickHandler),
    Le.on(window, "load.bs.carousel.data-api", (()=>{
        const t = jt('[data-bs-ride="carousel"]');
        for (let e = 0, n = t.length; e < n; e++)
            Ke.carouselInterface(t[e], le(t[e], Me))
    }
    )),
    se(Ke);
    const Xe = "collapse"
      , Ye = "bs.collapse"
      , Qe = {
        toggle: !0,
        parent: ""
    }
      , Ge = {
        toggle: "boolean",
        parent: "(string|element)"
    }
      , Ze = "show"
      , Je = "collapse"
      , tn = "collapsing"
      , en = "collapsed"
      , nn = "width"
      , sn = '[data-bs-toggle="collapse"]';
    class on extends ke {
        constructor(t, e) {
            super(t),
            this._isTransitioning = !1,
            this._config = this._getConfig(e),
            this._triggerArray = jt(`[data-bs-toggle="collapse"][href="#${this._element.id}"],[data-bs-toggle="collapse"][data-bs-target="#${this._element.id}"]`);
            const n = jt(sn);
            for (let t = 0, e = n.length; t < e; t++) {
                const e = n[t]
                  , i = zt(e)
                  , s = jt(i).filter((t=>t === this._element));
                null !== i && s.length && (this._selector = i,
                this._triggerArray.push(e))
            }
            this._parent = this._config.parent ? this._getParent() : null,
            this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray),
            this._config.toggle && this.toggle()
        }
        static get Default() {
            return Qe
        }
        static get NAME() {
            return Xe
        }
        toggle() {
            this._element.classList.contains(Ze) ? this.hide() : this.show()
        }
        show() {
            if (this._isTransitioning || this._element.classList.contains(Ze))
                return;
            let t, e;
            this._parent && (t = jt(".show, .collapsing", this._parent).filter((t=>"string" == typeof this._config.parent ? t.getAttribute("data-bs-parent") === this._config.parent : t.classList.contains(Je))),
            0 === t.length && (t = null));
            const n = Pt(this._selector);
            if (t) {
                const i = t.find((t=>n !== t));
                if (e = i ? le(i, Ye) : null,
                e && e._isTransitioning)
                    return
            }
            if (Le.trigger(this._element, "show.bs.collapse").defaultPrevented)
                return;
            t && t.forEach((t=>{
                n !== t && on.collapseInterface(t, "hide"),
                e || ae(t, Ye, null)
            }
            ));
            const i = this._getDimension();
            this._element.classList.remove(Je),
            this._element.classList.add(tn),
            this._element.style[i] = 0,
            this._triggerArray.length && this._triggerArray.forEach((t=>{
                t.classList.remove(en),
                t.setAttribute("aria-expanded", !0)
            }
            )),
            this.setTransitioning(!0);
            const s = `scroll ${i[0].toUpperCase() + i.slice(1)}`;
            this._queueCallback((()=>{
                this._element.classList.remove(tn),
                this._element.classList.add(Je, Ze),
                this._element.style[i] = "",
                this.setTransitioning(!1),
                Le.trigger(this._element, "shown.bs.collapse")
            }
            ), this._element, !0),
            this._element.style[i] = `${this._element[s]}px`
        }
        hide() {
            if (this._isTransitioning || !this._element.classList.contains(Ze))
                return;
            if (Le.trigger(this._element, "hide.bs.collapse").defaultPrevented)
                return;
            const t = this._getDimension();
            this._element.style[t] = `${this._element.getBoundingClientRect()[t]}px`,
            ee(this._element),
            this._element.classList.add(tn),
            this._element.classList.remove(Je, Ze);
            const e = this._triggerArray.length;
            if (e > 0)
                for (let t = 0; t < e; t++) {
                    const e = this._triggerArray[t]
                      , n = Ut(e);
                    n && !n.classList.contains(Ze) && (e.classList.add(en),
                    e.setAttribute("aria-expanded", !1))
                }
            this.setTransitioning(!0);
            this._element.style[t] = "",
            this._queueCallback((()=>{
                this.setTransitioning(!1),
                this._element.classList.remove(tn),
                this._element.classList.add(Je),
                Le.trigger(this._element, "hidden.bs.collapse")
            }
            ), this._element, !0)
        }
        setTransitioning(t) {
            this._isTransitioning = t
        }
        _getConfig(t) {
            return (t = {
                ...Qe,
                ...t
            }).toggle = Boolean(t.toggle),
            Qt(Xe, t, Ge),
            t
        }
        _getDimension() {
            return this._element.classList.contains(nn) ? nn : "height"
        }
        _getParent() {
            let {parent: t} = this._config;
            t = Xt(t);
            return jt(`[data-bs-toggle="collapse"][data-bs-parent="${t}"]`, t).forEach((t=>{
                const e = Ut(t);
                this._addAriaAndCollapsedClass(e, [t])
            }
            )),
            t
        }
        _addAriaAndCollapsedClass(t, e) {
            if (!t || !e.length)
                return;
            const n = t.classList.contains(Ze);
            e.forEach((t=>{
                n ? t.classList.remove(en) : t.classList.add(en),
                t.setAttribute("aria-expanded", n)
            }
            ))
        }
        static collapseInterface(t, e) {
            let n = le(t, Ye);
            const i = {
                ...Qe,
                ...je.getDataAttributes(t),
                ..."object" == typeof e && e ? e : {}
            };
            if (!n && i.toggle && "string" == typeof e && /show|hide/.test(e) && (i.toggle = !1),
            n || (n = new on(t,i)),
            "string" == typeof e) {
                if (void 0 === n[e])
                    throw new TypeError(`No method named "${e}"`);
                n[e]()
            }
        }
        static jQueryInterface(t) {
            return this.each((function() {
                on.collapseInterface(this, t)
            }
            ))
        }
    }
    Le.on(document, "click.bs.collapse.data-api", sn, (function(t) {
        ("A" === t.target.tagName || t.delegateTarget && "A" === t.delegateTarget.tagName) && t.preventDefault();
        const e = je.getDataAttributes(this)
          , n = zt(this);
        jt(n).forEach((t=>{
            const n = le(t, Ye);
            let i;
            n ? (null === n._parent && "string" == typeof e.parent && (n._config.parent = e.parent,
            n._parent = n._getParent()),
            i = "toggle") : i = e,
            on.collapseInterface(t, i)
        }
        ))
    }
    )),
    se(on);
    const rn = "dropdown"
      , an = "bs.dropdown"
      , ln = "Escape"
      , cn = "Space"
      , hn = "ArrowUp"
      , dn = "ArrowDown"
      , un = new RegExp("ArrowUp|ArrowDown|Escape")
      , fn = "click.bs.dropdown.data-api"
      , pn = "keydown.bs.dropdown.data-api"
      , mn = "show"
      , gn = '[data-bs-toggle="dropdown"]'
      , _n = ".dropdown-menu"
      , bn = ie() ? "top-end" : "top-start"
      , vn = ie() ? "top-start" : "top-end"
      , yn = ie() ? "bottom-end" : "bottom-start"
      , wn = ie() ? "bottom-start" : "bottom-end"
      , En = ie() ? "left-start" : "right-start"
      , Tn = ie() ? "right-start" : "left-start"
      , An = {
        offset: [0, 2],
        boundary: "clippingParents",
        reference: "toggle",
        display: "dynamic",
        popperConfig: null,
        autoClose: !0
    }
      , Ln = {
        offset: "(array|string|function)",
        boundary: "(string|element)",
        reference: "(string|element|object)",
        display: "string",
        popperConfig: "(null|object|function)",
        autoClose: "(boolean|string)"
    };
    class kn extends ke {
        constructor(t, e) {
            super(t),
            this._popper = null,
            this._config = this._getConfig(e),
            this._menu = this._getMenuElement(),
            this._inNavbar = this._detectNavbar(),
            this._addEventListeners()
        }
        static get Default() {
            return An
        }
        static get DefaultType() {
            return Ln
        }
        static get NAME() {
            return rn
        }
        toggle() {
            if (Zt(this._element))
                return;
            this._element.classList.contains(mn) ? this.hide() : this.show()
        }
        show() {
            if (Zt(this._element) || this._menu.classList.contains(mn))
                return;
            const t = kn.getParentFromElement(this._element)
              , e = {
                relatedTarget: this._element
            };
            if (!Le.trigger(this._element, "show.bs.dropdown", e).defaultPrevented) {
                if (this._inNavbar)
                    je.setDataAttribute(this._menu, "popper", "none");
                else {
                    if (void 0 === n)
                        throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");
                    let e = this._element;
                    "parent" === this._config.reference ? e = t : Kt(this._config.reference) ? e = Xt(this._config.reference) : "object" == typeof this._config.reference && (e = this._config.reference);
                    const i = this._getPopperConfig()
                      , s = i.modifiers.find((t=>"applyStyles" === t.name && !1 === t.enabled));
                    this._popper = St(e, this._menu, i),
                    s && je.setDataAttribute(this._menu, "popper", "static")
                }
                "ontouchstart"in document.documentElement && !t.closest(".navbar-nav") && [].concat(...document.body.children).forEach((t=>Le.on(t, "mouseover", te))),
                this._element.focus(),
                this._element.setAttribute("aria-expanded", !0),
                this._menu.classList.toggle(mn),
                this._element.classList.toggle(mn),
                Le.trigger(this._element, "shown.bs.dropdown", e)
            }
        }
        hide() {
            if (Zt(this._element) || !this._menu.classList.contains(mn))
                return;
            const t = {
                relatedTarget: this._element
            };
            this._completeHide(t)
        }
        dispose() {
            this._popper && this._popper.destroy(),
            super.dispose()
        }
        update() {
            this._inNavbar = this._detectNavbar(),
            this._popper && this._popper.update()
        }
        _addEventListeners() {
            Le.on(this._element, "click.bs.dropdown", (t=>{
                t.preventDefault(),
                this.toggle()
            }
            ))
        }
        _completeHide(t) {
            Le.trigger(this._element, "hide.bs.dropdown", t).defaultPrevented || ("ontouchstart"in document.documentElement && [].concat(...document.body.children).forEach((t=>Le.off(t, "mouseover", te))),
            this._popper && this._popper.destroy(),
            this._menu.classList.remove(mn),
            this._element.classList.remove(mn),
            this._element.setAttribute("aria-expanded", "false"),
            je.removeDataAttribute(this._menu, "popper"),
            Le.trigger(this._element, "hidden.bs.dropdown", t))
        }
        _getConfig(t) {
            if (t = {
                ...this.constructor.Default,
                ...je.getDataAttributes(this._element),
                ...t
            },
            Qt(rn, t, this.constructor.DefaultType),
            "object" == typeof t.reference && !Kt(t.reference) && "function" != typeof t.reference.getBoundingClientRect)
                throw new TypeError(`${rn.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);
            return t
        }
        _getMenuElement() {
            return Bt(this._element, _n)[0]
        }
        _getPlacement() {
            const t = this._element.parentNode;
            if (t.classList.contains("dropend"))
                return En;
            if (t.classList.contains("dropstart"))
                return Tn;
            const e = "end" === getComputedStyle(this._menu).getPropertyValue("--bs-position").trim();
            return t.classList.contains("dropup") ? e ? vn : bn : e ? wn : yn
        }
        _detectNavbar() {
            return null !== this._element.closest(".navbar")
        }
        _getOffset() {
            const {offset: t} = this._config;
            return "string" == typeof t ? t.split(",").map((t=>Number.parseInt(t, 10))) : "function" == typeof t ? e=>t(e, this._element) : t
        }
        _getPopperConfig() {
            const t = {
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
            }]),
            {
                ...t,
                ..."function" == typeof this._config.popperConfig ? this._config.popperConfig(t) : this._config.popperConfig
            }
        }
        _selectMenuItem(t) {
            const e = jt(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)", this._menu).filter(Gt);
            if (!e.length)
                return;
            let n = e.indexOf(t.target);
            t.key === hn && n > 0 && n--,
            t.key === dn && n < e.length - 1 && n++,
            n = -1 === n ? 0 : n,
            e[n].focus()
        }
        static dropdownInterface(t, e) {
            let n = le(t, an);
            if (n || (n = new kn(t,"object" == typeof e ? e : null)),
            "string" == typeof e) {
                if (void 0 === n[e])
                    throw new TypeError(`No method named "${e}"`);
                n[e]()
            }
        }
        static jQueryInterface(t) {
            return this.each((function() {
                kn.dropdownInterface(this, t)
            }
            ))
        }
        static clearMenus(t) {
            if (t && (2 === t.button || "keyup" === t.type && "Tab" !== t.key))
                return;
            const e = jt(gn);
            for (let n = 0, i = e.length; n < i; n++) {
                const i = le(e[n], an);
                if (!i || !1 === i._config.autoClose)
                    continue;
                if (!i._element.classList.contains(mn))
                    continue;
                const s = {
                    relatedTarget: i._element
                };
                if (t) {
                    const e = t.composedPath()
                      , n = e.includes(i._menu);
                    if (e.includes(i._element) || "inside" === i._config.autoClose && !n || "outside" === i._config.autoClose && n)
                        continue;
                    if (i._menu.contains(t.target) && ("keyup" === t.type && "Tab" === t.key || /input|select|option|textarea|form/i.test(t.target.tagName)))
                        continue;
                    "click" === t.type && (s.clickEvent = t)
                }
                i._completeHide(s)
            }
        }
        static getParentFromElement(t) {
            return Ut(t) || t.parentNode
        }
        static dataApiKeydownHandler(t) {
            if (/input|textarea/i.test(t.target.tagName) ? t.key === cn || t.key !== ln && (t.key !== dn && t.key !== hn || t.target.closest(_n)) : !un.test(t.key))
                return;
            const e = this.classList.contains(mn);
            if (!e && t.key === ln)
                return;
            if (t.preventDefault(),
            t.stopPropagation(),
            Zt(this))
                return;
            const n = ()=>this.matches(gn) ? this : Rt(this, gn)[0];
            if (t.key === ln)
                return n().focus(),
                void kn.clearMenus();
            e || t.key !== hn && t.key !== dn ? e && t.key !== cn ? kn.getInstance(n())._selectMenuItem(t) : kn.clearMenus() : n().click()
        }
    }
    Le.on(document, pn, gn, kn.dataApiKeydownHandler),
    Le.on(document, pn, _n, kn.dataApiKeydownHandler),
    Le.on(document, fn, kn.clearMenus),
    Le.on(document, "keyup.bs.dropdown.data-api", kn.clearMenus),
    Le.on(document, fn, gn, (function(t) {
        t.preventDefault(),
        kn.dropdownInterface(this)
    }
    )),
    se(kn);
    const Cn = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top"
      , On = ".sticky-top"
      , Dn = ()=>{
        const t = document.documentElement.clientWidth;
        return Math.abs(window.innerWidth - t)
    }
      , xn = (t=Dn())=>{
        Nn(),
        Sn("body", "paddingRight", (e=>e + t)),
        Sn(Cn, "paddingRight", (e=>e + t)),
        Sn(On, "marginRight", (e=>e - t))
    }
      , Nn = ()=>{
        const t = document.body.style.overflow;
        t && je.setDataAttribute(document.body, "overflow", t),
        document.body.style.overflow = "hidden"
    }
      , Sn = (t,e,n)=>{
        const i = Dn();
        jt(t).forEach((t=>{
            if (t !== document.body && window.innerWidth > t.clientWidth + i)
                return;
            const s = t.style[e]
              , o = window.getComputedStyle(t)[e];
            je.setDataAttribute(t, e, s),
            t.style[e] = `${n(Number.parseFloat(o))}px`
        }
        ))
    }
      , In = ()=>{
        jn("body", "overflow"),
        jn("body", "paddingRight"),
        jn(Cn, "paddingRight"),
        jn(On, "marginRight")
    }
      , jn = (t,e)=>{
        jt(t).forEach((t=>{
            const n = je.getDataAttribute(t, e);
            void 0 === n ? t.style.removeProperty(e) : (je.removeDataAttribute(t, e),
            t.style[e] = n)
        }
        ))
    }
      , Pn = {
        isVisible: !0,
        isAnimated: !1,
        rootElement: document.body,
        clickCallback: null
    }
      , Mn = {
        isVisible: "boolean",
        isAnimated: "boolean",
        rootElement: "element",
        clickCallback: "(function|null)"
    }
      , Hn = "backdrop"
      , Rn = "show"
      , Bn = "mousedown.bs.backdrop";
    class $n {
        constructor(t) {
            this._config = this._getConfig(t),
            this._isAppended = !1,
            this._element = null
        }
        show(t) {
            this._config.isVisible ? (this._append(),
            this._config.isAnimated && ee(this._getElement()),
            this._getElement().classList.add(Rn),
            this._emulateAnimation((()=>{
                oe(t)
            }
            ))) : oe(t)
        }
        hide(t) {
            this._config.isVisible ? (this._getElement().classList.remove(Rn),
            this._emulateAnimation((()=>{
                this.dispose(),
                oe(t)
            }
            ))) : oe(t)
        }
        _getElement() {
            if (!this._element) {
                const t = document.createElement("div");
                t.className = "modal-backdrop",
                this._config.isAnimated && t.classList.add("fade"),
                this._element = t
            }
            return this._element
        }
        _getConfig(t) {
            return (t = {
                ...Pn,
                ..."object" == typeof t ? t : {}
            }).rootElement = t.rootElement || document.body,
            Qt(Hn, t, Mn),
            t
        }
        _append() {
            this._isAppended || (this._config.rootElement.appendChild(this._getElement()),
            Le.on(this._getElement(), Bn, (()=>{
                oe(this._config.clickCallback)
            }
            )),
            this._isAppended = !0)
        }
        dispose() {
            this._isAppended && (Le.off(this._element, Bn),
            this._getElement().parentNode.removeChild(this._element),
            this._isAppended = !1)
        }
        _emulateAnimation(t) {
            if (!this._config.isAnimated)
                return void oe(t);
            const e = Ft(this._getElement());
            Le.one(this._getElement(), "transitionend", (()=>oe(t))),
            Yt(this._getElement(), e)
        }
    }
    const Wn = "modal"
      , qn = ".bs.modal"
      , zn = "Escape"
      , Un = {
        backdrop: !0,
        keyboard: !0,
        focus: !0
    }
      , Fn = {
        backdrop: "(boolean|string)",
        keyboard: "boolean",
        focus: "boolean"
    }
      , Vn = "hidden.bs.modal"
      , Kn = "show.bs.modal"
      , Xn = "focusin.bs.modal"
      , Yn = "resize.bs.modal"
      , Qn = "click.dismiss.bs.modal"
      , Gn = "keydown.dismiss.bs.modal"
      , Zn = "mousedown.dismiss.bs.modal"
      , Jn = "modal-open"
      , ti = "show"
      , ei = "modal-static";
    class ni extends ke {
        constructor(t, e) {
            super(t),
            this._config = this._getConfig(e),
            this._dialog = Pt(".modal-dialog", this._element),
            this._backdrop = this._initializeBackDrop(),
            this._isShown = !1,
            this._ignoreBackdropClick = !1,
            this._isTransitioning = !1
        }
        static get Default() {
            return Un
        }
        static get NAME() {
            return Wn
        }
        toggle(t) {
            return this._isShown ? this.hide() : this.show(t)
        }
        show(t) {
            if (this._isShown || this._isTransitioning)
                return;
            this._isAnimated() && (this._isTransitioning = !0);
            const e = Le.trigger(this._element, Kn, {
                relatedTarget: t
            });
            this._isShown || e.defaultPrevented || (this._isShown = !0,
            xn(),
            document.body.classList.add(Jn),
            this._adjustDialog(),
            this._setEscapeEvent(),
            this._setResizeEvent(),
            Le.on(this._element, Qn, '[data-bs-dismiss="modal"]', (t=>this.hide(t))),
            Le.on(this._dialog, Zn, (()=>{
                Le.one(this._element, "mouseup.dismiss.bs.modal", (t=>{
                    t.target === this._element && (this._ignoreBackdropClick = !0)
                }
                ))
            }
            )),
            this._showBackdrop((()=>this._showElement(t))))
        }
        hide(t) {
            if (t && t.preventDefault(),
            !this._isShown || this._isTransitioning)
                return;
            if (Le.trigger(this._element, "hide.bs.modal").defaultPrevented)
                return;
            this._isShown = !1;
            const e = this._isAnimated();
            e && (this._isTransitioning = !0),
            this._setEscapeEvent(),
            this._setResizeEvent(),
            Le.off(document, Xn),
            this._element.classList.remove(ti),
            Le.off(this._element, Qn),
            Le.off(this._dialog, Zn),
            this._queueCallback((()=>this._hideModal()), this._element, e)
        }
        dispose() {
            [window, this._dialog].forEach((t=>Le.off(t, qn))),
            this._backdrop.dispose(),
            super.dispose(),
            Le.off(document, Xn)
        }
        handleUpdate() {
            this._adjustDialog()
        }
        _initializeBackDrop() {
            return new $n({
                isVisible: Boolean(this._config.backdrop),
                isAnimated: this._isAnimated()
            })
        }
        _getConfig(t) {
            return t = {
                ...Un,
                ...je.getDataAttributes(this._element),
                ...t
            },
            Qt(Wn, t, Fn),
            t
        }
        _showElement(t) {
            const e = this._isAnimated()
              , n = Pt(".modal-body", this._dialog);
            this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element),
            this._element.style.display = "block",
            this._element.removeAttribute("aria-hidden"),
            this._element.setAttribute("aria-modal", !0),
            this._element.setAttribute("role", "dialog"),
            this._element.scrollTop = 0,
            n && (n.scrollTop = 0),
            e && ee(this._element),
            this._element.classList.add(ti),
            this._config.focus && this._enforceFocus();
            this._queueCallback((()=>{
                this._config.focus && this._element.focus(),
                this._isTransitioning = !1,
                Le.trigger(this._element, "shown.bs.modal", {
                    relatedTarget: t
                })
            }
            ), this._dialog, e)
        }
        _enforceFocus() {
            Le.off(document, Xn),
            Le.on(document, Xn, (t=>{
                document === t.target || this._element === t.target || this._element.contains(t.target) || this._element.focus()
            }
            ))
        }
        _setEscapeEvent() {
            this._isShown ? Le.on(this._element, Gn, (t=>{
                this._config.keyboard && t.key === zn ? (t.preventDefault(),
                this.hide()) : this._config.keyboard || t.key !== zn || this._triggerBackdropTransition()
            }
            )) : Le.off(this._element, Gn)
        }
        _setResizeEvent() {
            this._isShown ? Le.on(window, Yn, (()=>this._adjustDialog())) : Le.off(window, Yn)
        }
        _hideModal() {
            this._element.style.display = "none",
            this._element.setAttribute("aria-hidden", !0),
            this._element.removeAttribute("aria-modal"),
            this._element.removeAttribute("role"),
            this._isTransitioning = !1,
            this._backdrop.hide((()=>{
                document.body.classList.remove(Jn),
                this._resetAdjustments(),
                In(),
                Le.trigger(this._element, Vn)
            }
            ))
        }
        _showBackdrop(t) {
            Le.on(this._element, Qn, (t=>{
                this._ignoreBackdropClick ? this._ignoreBackdropClick = !1 : t.target === t.currentTarget && (!0 === this._config.backdrop ? this.hide() : "static" === this._config.backdrop && this._triggerBackdropTransition())
            }
            )),
            this._backdrop.show(t)
        }
        _isAnimated() {
            return this._element.classList.contains("fade")
        }
        _triggerBackdropTransition() {
            if (Le.trigger(this._element, "hidePrevented.bs.modal").defaultPrevented)
                return;
            const t = this._element.scrollHeight > document.documentElement.clientHeight;
            t || (this._element.style.overflowY = "hidden"),
            this._element.classList.add(ei);
            const e = Ft(this._dialog);
            Le.off(this._element, "transitionend"),
            Le.one(this._element, "transitionend", (()=>{
                this._element.classList.remove(ei),
                t || (Le.one(this._element, "transitionend", (()=>{
                    this._element.style.overflowY = ""
                }
                )),
                Yt(this._element, e))
            }
            )),
            Yt(this._element, e),
            this._element.focus()
        }
        _adjustDialog() {
            const t = this._element.scrollHeight > document.documentElement.clientHeight
              , e = Dn()
              , n = e > 0;
            (!n && t && !ie() || n && !t && ie()) && (this._element.style.paddingLeft = `${e}px`),
            (n && !t && !ie() || !n && t && ie()) && (this._element.style.paddingRight = `${e}px`)
        }
        _resetAdjustments() {
            this._element.style.paddingLeft = "",
            this._element.style.paddingRight = ""
        }
        static jQueryInterface(t, e) {
            return this.each((function() {
                const n = ni.getInstance(this) || new ni(this,"object" == typeof t ? t : {});
                if ("string" == typeof t) {
                    if (void 0 === n[t])
                        throw new TypeError(`No method named "${t}"`);
                    n[t](e)
                }
            }
            ))
        }
    }
    Le.on(document, "click.bs.modal.data-api", '[data-bs-toggle="modal"]', (function(t) {
        const e = Ut(this);
        ["A", "AREA"].includes(this.tagName) && t.preventDefault(),
        Le.one(e, Kn, (t=>{
            t.defaultPrevented || Le.one(e, Vn, (()=>{
                Gt(this) && this.focus()
            }
            ))
        }
        ));
        (ni.getInstance(e) || new ni(e)).toggle(this)
    }
    )),
    se(ni);
    const ii = "offcanvas"
      , si = "bs.offcanvas"
      , oi = {
        backdrop: !0,
        keyboard: !0,
        scroll: !1
    }
      , ri = {
        backdrop: "boolean",
        keyboard: "boolean",
        scroll: "boolean"
    }
      , ai = "show"
      , li = ".offcanvas.show"
      , ci = "hidden.bs.offcanvas"
      , hi = "focusin.bs.offcanvas";
    class di extends ke {
        constructor(t, e) {
            super(t),
            this._config = this._getConfig(e),
            this._isShown = !1,
            this._backdrop = this._initializeBackDrop(),
            this._addEventListeners()
        }
        static get NAME() {
            return ii
        }
        static get Default() {
            return oi
        }
        toggle(t) {
            return this._isShown ? this.hide() : this.show(t)
        }
        show(t) {
            if (this._isShown)
                return;
            if (Le.trigger(this._element, "show.bs.offcanvas", {
                relatedTarget: t
            }).defaultPrevented)
                return;
            this._isShown = !0,
            this._element.style.visibility = "visible",
            this._backdrop.show(),
            this._config.scroll || (xn(),
            this._enforceFocusOnElement(this._element)),
            this._element.removeAttribute("aria-hidden"),
            this._element.setAttribute("aria-modal", !0),
            this._element.setAttribute("role", "dialog"),
            this._element.classList.add(ai);
            this._queueCallback((()=>{
                Le.trigger(this._element, "shown.bs.offcanvas", {
                    relatedTarget: t
                })
            }
            ), this._element, !0)
        }
        hide() {
            if (!this._isShown)
                return;
            if (Le.trigger(this._element, "hide.bs.offcanvas").defaultPrevented)
                return;
            Le.off(document, hi),
            this._element.blur(),
            this._isShown = !1,
            this._element.classList.remove(ai),
            this._backdrop.hide();
            this._queueCallback((()=>{
                this._element.setAttribute("aria-hidden", !0),
                this._element.removeAttribute("aria-modal"),
                this._element.removeAttribute("role"),
                this._element.style.visibility = "hidden",
                this._config.scroll || In(),
                Le.trigger(this._element, ci)
            }
            ), this._element, !0)
        }
        dispose() {
            this._backdrop.dispose(),
            super.dispose(),
            Le.off(document, hi)
        }
        _getConfig(t) {
            return t = {
                ...oi,
                ...je.getDataAttributes(this._element),
                ..."object" == typeof t ? t : {}
            },
            Qt(ii, t, ri),
            t
        }
        _initializeBackDrop() {
            return new $n({
                isVisible: this._config.backdrop,
                isAnimated: !0,
                rootElement: this._element.parentNode,
                clickCallback: ()=>this.hide()
            })
        }
        _enforceFocusOnElement(t) {
            Le.off(document, hi),
            Le.on(document, hi, (e=>{
                document === e.target || t === e.target || t.contains(e.target) || t.focus()
            }
            )),
            t.focus()
        }
        _addEventListeners() {
            Le.on(this._element, "click.dismiss.bs.offcanvas", '[data-bs-dismiss="offcanvas"]', (()=>this.hide())),
            Le.on(this._element, "keydown.dismiss.bs.offcanvas", (t=>{
                this._config.keyboard && "Escape" === t.key && this.hide()
            }
            ))
        }
        static jQueryInterface(t) {
            return this.each((function() {
                const e = le(this, si) || new di(this,"object" == typeof t ? t : {});
                if ("string" == typeof t) {
                    if (void 0 === e[t] || t.startsWith("_") || "constructor" === t)
                        throw new TypeError(`No method named "${t}"`);
                    e[t](this)
                }
            }
            ))
        }
    }
    Le.on(document, "click.bs.offcanvas.data-api", '[data-bs-toggle="offcanvas"]', (function(t) {
        const e = Ut(this);
        if (["A", "AREA"].includes(this.tagName) && t.preventDefault(),
        Zt(this))
            return;
        Le.one(e, ci, (()=>{
            Gt(this) && this.focus()
        }
        ));
        const n = Pt(li);
        n && n !== e && di.getInstance(n).hide();
        (le(e, si) || new di(e)).toggle(this)
    }
    )),
    Le.on(window, "load.bs.offcanvas.data-api", (()=>{
        jt(li).forEach((t=>(le(t, si) || new di(t)).show()))
    }
    )),
    se(di);
    const ui = new Set(["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"])
      , fi = /^(?:(?:https?|mailto|ftp|tel|file):|[^#&/:?]*(?:[#/?]|$))/i
      , pi = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i
      , mi = (t,e)=>{
        const n = t.nodeName.toLowerCase();
        if (e.includes(n))
            return !ui.has(n) || Boolean(fi.test(t.nodeValue) || pi.test(t.nodeValue));
        const i = e.filter((t=>t instanceof RegExp));
        for (let t = 0, e = i.length; t < e; t++)
            if (i[t].test(n))
                return !0;
        return !1
    }
      , gi = {
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
        if (!t.length)
            return t;
        if (n && "function" == typeof n)
            return n(t);
        const i = (new window.DOMParser).parseFromString(t, "text/html")
          , s = Object.keys(e)
          , o = [].concat(...i.body.querySelectorAll("*"));
        for (let t = 0, n = o.length; t < n; t++) {
            const n = o[t]
              , i = n.nodeName.toLowerCase();
            if (!s.includes(i)) {
                n.parentNode.removeChild(n);
                continue
            }
            const r = [].concat(...n.attributes)
              , a = [].concat(e["*"] || [], e[i] || []);
            r.forEach((t=>{
                mi(t, a) || n.removeAttribute(t.nodeName)
            }
            ))
        }
        return i.body.innerHTML
    }
    const bi = "tooltip"
      , vi = "bs.tooltip"
      , yi = new RegExp("(^|\\s)bs-tooltip\\S+","g")
      , wi = new Set(["sanitize", "allowList", "sanitizeFn"])
      , Ei = {
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
    }
      , Ti = {
        AUTO: "auto",
        TOP: "top",
        RIGHT: ie() ? "left" : "right",
        BOTTOM: "bottom",
        LEFT: ie() ? "right" : "left"
    }
      , Ai = {
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
    }
      , Li = {
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
    }
      , ki = "fade"
      , Ci = "show"
      , Oi = "show"
      , Di = "out"
      , xi = "hover"
      , Ni = "focus";
    class Si extends ke {
        constructor(t, e) {
            if (void 0 === n)
                throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");
            super(t),
            this._isEnabled = !0,
            this._timeout = 0,
            this._hoverState = "",
            this._activeTrigger = {},
            this._popper = null,
            this._config = this._getConfig(e),
            this.tip = null,
            this._setListeners()
        }
        static get Default() {
            return Ai
        }
        static get NAME() {
            return bi
        }
        static get Event() {
            return Li
        }
        static get DefaultType() {
            return Ei
        }
        enable() {
            this._isEnabled = !0
        }
        disable() {
            this._isEnabled = !1
        }
        toggleEnabled() {
            this._isEnabled = !this._isEnabled
        }
        toggle(t) {
            if (this._isEnabled)
                if (t) {
                    const e = this._initializeOnDelegatedTarget(t);
                    e._activeTrigger.click = !e._activeTrigger.click,
                    e._isWithActiveTrigger() ? e._enter(null, e) : e._leave(null, e)
                } else {
                    if (this.getTipElement().classList.contains(Ci))
                        return void this._leave(null, this);
                    this._enter(null, this)
                }
        }
        dispose() {
            clearTimeout(this._timeout),
            Le.off(this._element.closest(".modal"), "hide.bs.modal", this._hideModalHandler),
            this.tip && this.tip.parentNode && this.tip.parentNode.removeChild(this.tip),
            this._popper && this._popper.destroy(),
            super.dispose()
        }
        show() {
            if ("none" === this._element.style.display)
                throw new Error("Please use show on visible elements");
            if (!this.isWithContent() || !this._isEnabled)
                return;
            const t = Le.trigger(this._element, this.constructor.Event.SHOW)
              , e = Jt(this._element)
              , n = null === e ? this._element.ownerDocument.documentElement.contains(this._element) : e.contains(this._element);
            if (t.defaultPrevented || !n)
                return;
            const i = this.getTipElement()
              , s = Wt(this.constructor.NAME);
            i.setAttribute("id", s),
            this._element.setAttribute("aria-describedby", s),
            this.setContent(),
            this._config.animation && i.classList.add(ki);
            const o = "function" == typeof this._config.placement ? this._config.placement.call(this, i, this._element) : this._config.placement
              , r = this._getAttachment(o);
            this._addAttachmentClass(r);
            const {container: a} = this._config;
            ae(i, this.constructor.DATA_KEY, this),
            this._element.ownerDocument.documentElement.contains(this.tip) || (a.appendChild(i),
            Le.trigger(this._element, this.constructor.Event.INSERTED)),
            this._popper ? this._popper.update() : this._popper = St(this._element, i, this._getPopperConfig(r)),
            i.classList.add(Ci);
            const l = "function" == typeof this._config.customClass ? this._config.customClass() : this._config.customClass;
            l && i.classList.add(...l.split(" ")),
            "ontouchstart"in document.documentElement && [].concat(...document.body.children).forEach((t=>{
                Le.on(t, "mouseover", te)
            }
            ));
            const c = this.tip.classList.contains(ki);
            this._queueCallback((()=>{
                const t = this._hoverState;
                this._hoverState = null,
                Le.trigger(this._element, this.constructor.Event.SHOWN),
                t === Di && this._leave(null, this)
            }
            ), this.tip, c)
        }
        hide() {
            if (!this._popper)
                return;
            const t = this.getTipElement();
            if (Le.trigger(this._element, this.constructor.Event.HIDE).defaultPrevented)
                return;
            t.classList.remove(Ci),
            "ontouchstart"in document.documentElement && [].concat(...document.body.children).forEach((t=>Le.off(t, "mouseover", te))),
            this._activeTrigger.click = !1,
            this._activeTrigger.focus = !1,
            this._activeTrigger.hover = !1;
            const e = this.tip.classList.contains(ki);
            this._queueCallback((()=>{
                this._isWithActiveTrigger() || (this._hoverState !== Oi && t.parentNode && t.parentNode.removeChild(t),
                this._cleanTipClass(),
                this._element.removeAttribute("aria-describedby"),
                Le.trigger(this._element, this.constructor.Event.HIDDEN),
                this._popper && (this._popper.destroy(),
                this._popper = null))
            }
            ), this.tip, e),
            this._hoverState = ""
        }
        update() {
            null !== this._popper && this._popper.update()
        }
        isWithContent() {
            return Boolean(this.getTitle())
        }
        getTipElement() {
            if (this.tip)
                return this.tip;
            const t = document.createElement("div");
            return t.innerHTML = this._config.template,
            this.tip = t.children[0],
            this.tip
        }
        setContent() {
            const t = this.getTipElement();
            this.setElementContent(Pt(".tooltip-inner", t), this.getTitle()),
            t.classList.remove(ki, Ci)
        }
        setElementContent(t, e) {
            if (null !== t)
                return Kt(e) ? (e = Xt(e),
                void (this._config.html ? e.parentNode !== t && (t.innerHTML = "",
                t.appendChild(e)) : t.textContent = e.textContent)) : void (this._config.html ? (this._config.sanitize && (e = _i(e, this._config.allowList, this._config.sanitizeFn)),
                t.innerHTML = e) : t.textContent = e)
        }
        getTitle() {
            let t = this._element.getAttribute("data-bs-original-title");
            return t || (t = "function" == typeof this._config.title ? this._config.title.call(this._element) : this._config.title),
            t
        }
        updateAttachment(t) {
            return "right" === t ? "end" : "left" === t ? "start" : t
        }
        _initializeOnDelegatedTarget(t, e) {
            const n = this.constructor.DATA_KEY;
            return (e = e || le(t.delegateTarget, n)) || (e = new this.constructor(t.delegateTarget,this._getDelegateConfig()),
            ae(t.delegateTarget, n, e)),
            e
        }
        _getOffset() {
            const {offset: t} = this._config;
            return "string" == typeof t ? t.split(",").map((t=>Number.parseInt(t, 10))) : "function" == typeof t ? e=>t(e, this._element) : t
        }
        _getPopperConfig(t) {
            const e = {
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
                        element: `.${this.constructor.NAME}-arrow`
                    }
                }, {
                    name: "onChange",
                    enabled: !0,
                    phase: "afterWrite",
                    fn: t=>this._handlePopperPlacementChange(t)
                }],
                onFirstUpdate: t=>{
                    t.options.placement !== t.placement && this._handlePopperPlacementChange(t)
                }
            };
            return {
                ...e,
                ..."function" == typeof this._config.popperConfig ? this._config.popperConfig(e) : this._config.popperConfig
            }
        }
        _addAttachmentClass(t) {
            this.getTipElement().classList.add(`bs-tooltip-${this.updateAttachment(t)}`)
        }
        _getAttachment(t) {
            return Ti[t.toUpperCase()]
        }
        _setListeners() {
            this._config.trigger.split(" ").forEach((t=>{
                if ("click" === t)
                    Le.on(this._element, this.constructor.Event.CLICK, this._config.selector, (t=>this.toggle(t)));
                else if ("manual" !== t) {
                    const e = t === xi ? this.constructor.Event.MOUSEENTER : this.constructor.Event.FOCUSIN
                      , n = t === xi ? this.constructor.Event.MOUSELEAVE : this.constructor.Event.FOCUSOUT;
                    Le.on(this._element, e, this._config.selector, (t=>this._enter(t))),
                    Le.on(this._element, n, this._config.selector, (t=>this._leave(t)))
                }
            }
            )),
            this._hideModalHandler = ()=>{
                this._element && this.hide()
            }
            ,
            Le.on(this._element.closest(".modal"), "hide.bs.modal", this._hideModalHandler),
            this._config.selector ? this._config = {
                ...this._config,
                trigger: "manual",
                selector: ""
            } : this._fixTitle()
        }
        _fixTitle() {
            const t = this._element.getAttribute("title")
              , e = typeof this._element.getAttribute("data-bs-original-title");
            (t || "string" !== e) && (this._element.setAttribute("data-bs-original-title", t || ""),
            !t || this._element.getAttribute("aria-label") || this._element.textContent || this._element.setAttribute("aria-label", t),
            this._element.setAttribute("title", ""))
        }
        _enter(t, e) {
            e = this._initializeOnDelegatedTarget(t, e),
            t && (e._activeTrigger["focusin" === t.type ? Ni : xi] = !0),
            e.getTipElement().classList.contains(Ci) || e._hoverState === Oi ? e._hoverState = Oi : (clearTimeout(e._timeout),
            e._hoverState = Oi,
            e._config.delay && e._config.delay.show ? e._timeout = setTimeout((()=>{
                e._hoverState === Oi && e.show()
            }
            ), e._config.delay.show) : e.show())
        }
        _leave(t, e) {
            e = this._initializeOnDelegatedTarget(t, e),
            t && (e._activeTrigger["focusout" === t.type ? Ni : xi] = e._element.contains(t.relatedTarget)),
            e._isWithActiveTrigger() || (clearTimeout(e._timeout),
            e._hoverState = Di,
            e._config.delay && e._config.delay.hide ? e._timeout = setTimeout((()=>{
                e._hoverState === Di && e.hide()
            }
            ), e._config.delay.hide) : e.hide())
        }
        _isWithActiveTrigger() {
            for (const t in this._activeTrigger)
                if (this._activeTrigger[t])
                    return !0;
            return !1
        }
        _getConfig(t) {
            const e = je.getDataAttributes(this._element);
            return Object.keys(e).forEach((t=>{
                wi.has(t) && delete e[t]
            }
            )),
            (t = {
                ...this.constructor.Default,
                ...e,
                ..."object" == typeof t && t ? t : {}
            }).container = !1 === t.container ? document.body : Xt(t.container),
            "number" == typeof t.delay && (t.delay = {
                show: t.delay,
                hide: t.delay
            }),
            "number" == typeof t.title && (t.title = t.title.toString()),
            "number" == typeof t.content && (t.content = t.content.toString()),
            Qt(bi, t, this.constructor.DefaultType),
            t.sanitize && (t.template = _i(t.template, t.allowList, t.sanitizeFn)),
            t
        }
        _getDelegateConfig() {
            const t = {};
            if (this._config)
                for (const e in this._config)
                    this.constructor.Default[e] !== this._config[e] && (t[e] = this._config[e]);
            return t
        }
        _cleanTipClass() {
            const t = this.getTipElement()
              , e = t.getAttribute("class").match(yi);
            null !== e && e.length > 0 && e.map((t=>t.trim())).forEach((e=>t.classList.remove(e)))
        }
        _handlePopperPlacementChange(t) {
            const {state: e} = t;
            e && (this.tip = e.elements.popper,
            this._cleanTipClass(),
            this._addAttachmentClass(this._getAttachment(e.placement)))
        }
        static jQueryInterface(t) {
            return this.each((function() {
                let e = le(this, vi);
                const n = "object" == typeof t && t;
                if ((e || !/dispose|hide/.test(t)) && (e || (e = new Si(this,n)),
                "string" == typeof t)) {
                    if (void 0 === e[t])
                        throw new TypeError(`No method named "${t}"`);
                    e[t]()
                }
            }
            ))
        }
    }
    se(Si);
    const Ii = "bs.popover"
      , ji = new RegExp("(^|\\s)bs-popover\\S+","g")
      , Pi = {
        ...Si.Default,
        placement: "right",
        offset: [0, 8],
        trigger: "click",
        content: "",
        template: '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
    }
      , Mi = {
        ...Si.DefaultType,
        content: "(string|element|function)"
    }
      , Hi = {
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
    class Ri extends Si {
        static get Default() {
            return Pi
        }
        static get NAME() {
            return "popover"
        }
        static get Event() {
            return Hi
        }
        static get DefaultType() {
            return Mi
        }
        isWithContent() {
            return this.getTitle() || this._getContent()
        }
        setContent() {
            const t = this.getTipElement();
            this.setElementContent(Pt(".popover-header", t), this.getTitle());
            let e = this._getContent();
            "function" == typeof e && (e = e.call(this._element)),
            this.setElementContent(Pt(".popover-body", t), e),
            t.classList.remove("fade", "show")
        }
        _addAttachmentClass(t) {
            this.getTipElement().classList.add(`bs-popover-${this.updateAttachment(t)}`)
        }
        _getContent() {
            return this._element.getAttribute("data-bs-content") || this._config.content
        }
        _cleanTipClass() {
            const t = this.getTipElement()
              , e = t.getAttribute("class").match(ji);
            null !== e && e.length > 0 && e.map((t=>t.trim())).forEach((e=>t.classList.remove(e)))
        }
        static jQueryInterface(t) {
            return this.each((function() {
                let e = le(this, Ii);
                const n = "object" == typeof t ? t : null;
                if ((e || !/dispose|hide/.test(t)) && (e || (e = new Ri(this,n),
                ae(this, Ii, e)),
                "string" == typeof t)) {
                    if (void 0 === e[t])
                        throw new TypeError(`No method named "${t}"`);
                    e[t]()
                }
            }
            ))
        }
    }
    se(Ri);
    const Bi = "scrollspy"
      , $i = ".bs.scrollspy"
      , Wi = {
        offset: 10,
        method: "auto",
        target: ""
    }
      , qi = {
        offset: "number",
        method: "string",
        target: "(string|element)"
    }
      , zi = "dropdown-item"
      , Ui = "active"
      , Fi = ".nav-link"
      , Vi = "position";
    class Ki extends ke {
        constructor(t, e) {
            super(t),
            this._scrollElement = "BODY" === this._element.tagName ? window : this._element,
            this._config = this._getConfig(e),
            this._selector = `${this._config.target} .nav-link, ${this._config.target} .list-group-item, ${this._config.target} .dropdown-item`,
            this._offsets = [],
            this._targets = [],
            this._activeTarget = null,
            this._scrollHeight = 0,
            Le.on(this._scrollElement, "scroll.bs.scrollspy", (()=>this._process())),
            this.refresh(),
            this._process()
        }
        static get Default() {
            return Wi
        }
        static get NAME() {
            return Bi
        }
        refresh() {
            const t = this._scrollElement === this._scrollElement.window ? "offset" : Vi
              , e = "auto" === this._config.method ? t : this._config.method
              , n = e === Vi ? this._getScrollTop() : 0;
            this._offsets = [],
            this._targets = [],
            this._scrollHeight = this._getScrollHeight();
            jt(this._selector).map((t=>{
                const i = zt(t)
                  , s = i ? Pt(i) : null;
                if (s) {
                    const t = s.getBoundingClientRect();
                    if (t.width || t.height)
                        return [je[e](s).top + n, i]
                }
                return null
            }
            )).filter((t=>t)).sort(((t,e)=>t[0] - e[0])).forEach((t=>{
                this._offsets.push(t[0]),
                this._targets.push(t[1])
            }
            ))
        }
        dispose() {
            Le.off(this._scrollElement, $i),
            super.dispose()
        }
        _getConfig(t) {
            if ("string" != typeof (t = {
                ...Wi,
                ...je.getDataAttributes(this._element),
                ..."object" == typeof t && t ? t : {}
            }).target && Kt(t.target)) {
                let {id: e} = t.target;
                e || (e = Wt(Bi),
                t.target.id = e),
                t.target = `#${e}`
            }
            return Qt(Bi, t, qi),
            t
        }
        _getScrollTop() {
            return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop
        }
        _getScrollHeight() {
            return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
        }
        _getOffsetHeight() {
            return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height
        }
        _process() {
            const t = this._getScrollTop() + this._config.offset
              , e = this._getScrollHeight()
              , n = this._config.offset + e - this._getOffsetHeight();
            if (this._scrollHeight !== e && this.refresh(),
            t >= n) {
                const t = this._targets[this._targets.length - 1];
                this._activeTarget !== t && this._activate(t)
            } else {
                if (this._activeTarget && t < this._offsets[0] && this._offsets[0] > 0)
                    return this._activeTarget = null,
                    void this._clear();
                for (let e = this._offsets.length; e--; ) {
                    this._activeTarget !== this._targets[e] && t >= this._offsets[e] && (void 0 === this._offsets[e + 1] || t < this._offsets[e + 1]) && this._activate(this._targets[e])
                }
            }
        }
        _activate(t) {
            this._activeTarget = t,
            this._clear();
            const e = this._selector.split(",").map((e=>`${e}[data-bs-target="${t}"],${e}[href="${t}"]`))
              , n = Pt(e.join(","));
            n.classList.contains(zi) ? (Pt(".dropdown-toggle", n.closest(".dropdown")).classList.add(Ui),
            n.classList.add(Ui)) : (n.classList.add(Ui),
            Ht(n, ".nav, .list-group").forEach((t=>{
                Rt(t, ".nav-link, .list-group-item").forEach((t=>t.classList.add(Ui))),
                Rt(t, ".nav-item").forEach((t=>{
                    Mt(t, Fi).forEach((t=>t.classList.add(Ui)))
                }
                ))
            }
            ))),
            Le.trigger(this._scrollElement, "activate.bs.scrollspy", {
                relatedTarget: t
            })
        }
        _clear() {
            jt(this._selector).filter((t=>t.classList.contains(Ui))).forEach((t=>t.classList.remove(Ui)))
        }
        static jQueryInterface(t) {
            return this.each((function() {
                const e = Ki.getInstance(this) || new Ki(this,"object" == typeof t ? t : {});
                if ("string" == typeof t) {
                    if (void 0 === e[t])
                        throw new TypeError(`No method named "${t}"`);
                    e[t]()
                }
            }
            ))
        }
    }
    Le.on(window, "load.bs.scrollspy.data-api", (()=>{
        jt('[data-bs-spy="scroll"]').forEach((t=>new Ki(t)))
    }
    )),
    se(Ki);
    const Xi = "bs.tab"
      , Yi = "active"
      , Qi = "fade"
      , Gi = "show"
      , Zi = ".active"
      , Ji = ":scope > li > .active";
    class ts extends ke {
        static get NAME() {
            return "tab"
        }
        show() {
            if (this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && this._element.classList.contains(Yi))
                return;
            let t;
            const e = Ut(this._element)
              , n = this._element.closest(".nav, .list-group");
            if (n) {
                const e = "UL" === n.nodeName || "OL" === n.nodeName ? Ji : Zi;
                t = jt(e, n),
                t = t[t.length - 1]
            }
            const i = t ? Le.trigger(t, "hide.bs.tab", {
                relatedTarget: this._element
            }) : null;
            if (Le.trigger(this._element, "show.bs.tab", {
                relatedTarget: t
            }).defaultPrevented || null !== i && i.defaultPrevented)
                return;
            this._activate(this._element, n);
            const s = ()=>{
                Le.trigger(t, "hidden.bs.tab", {
                    relatedTarget: this._element
                }),
                Le.trigger(this._element, "shown.bs.tab", {
                    relatedTarget: t
                })
            }
            ;
            e ? this._activate(e, e.parentNode, s) : s()
        }
        _activate(t, e, n) {
            const i = (!e || "UL" !== e.nodeName && "OL" !== e.nodeName ? Mt(e, Zi) : jt(Ji, e))[0]
              , s = n && i && i.classList.contains(Qi)
              , o = ()=>this._transitionComplete(t, i, n);
            i && s ? (i.classList.remove(Gi),
            this._queueCallback(o, t, !0)) : o()
        }
        _transitionComplete(t, e, n) {
            if (e) {
                e.classList.remove(Yi);
                const t = Pt(":scope > .dropdown-menu .active", e.parentNode);
                t && t.classList.remove(Yi),
                "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !1)
            }
            t.classList.add(Yi),
            "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !0),
            ee(t),
            t.classList.contains(Qi) && t.classList.add(Gi);
            let i = t.parentNode;
            if (i && "LI" === i.nodeName && (i = i.parentNode),
            i && i.classList.contains("dropdown-menu")) {
                const e = t.closest(".dropdown");
                e && jt(".dropdown-toggle", e).forEach((t=>t.classList.add(Yi))),
                t.setAttribute("aria-expanded", !0)
            }
            n && n()
        }
        static jQueryInterface(t) {
            return this.each((function() {
                const e = le(this, Xi) || new ts(this);
                if ("string" == typeof t) {
                    if (void 0 === e[t])
                        throw new TypeError(`No method named "${t}"`);
                    e[t]()
                }
            }
            ))
        }
    }
    Le.on(document, "click.bs.tab.data-api", '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]', (function(t) {
        if (["A", "AREA"].includes(this.tagName) && t.preventDefault(),
        Zt(this))
            return;
        (le(this, Xi) || new ts(this)).show()
    }
    )),
    se(ts);
    const es = "toast"
      , ns = "bs.toast"
      , is = "hide"
      , ss = "show"
      , os = "showing"
      , rs = {
        animation: "boolean",
        autohide: "boolean",
        delay: "number"
    }
      , as = {
        animation: !0,
        autohide: !0,
        delay: 5e3
    };
    class ls extends ke {
        constructor(t, e) {
            super(t),
            this._config = this._getConfig(e),
            this._timeout = null,
            this._hasMouseInteraction = !1,
            this._hasKeyboardInteraction = !1,
            this._setListeners()
        }
        static get DefaultType() {
            return rs
        }
        static get Default() {
            return as
        }
        static get NAME() {
            return es
        }
        show() {
            if (Le.trigger(this._element, "show.bs.toast").defaultPrevented)
                return;
            this._clearTimeout(),
            this._config.animation && this._element.classList.add("fade");
            this._element.classList.remove(is),
            ee(this._element),
            this._element.classList.add(os),
            this._queueCallback((()=>{
                this._element.classList.remove(os),
                this._element.classList.add(ss),
                Le.trigger(this._element, "shown.bs.toast"),
                this._maybeScheduleHide()
            }
            ), this._element, this._config.animation)
        }
        hide() {
            if (!this._element.classList.contains(ss))
                return;
            if (Le.trigger(this._element, "hide.bs.toast").defaultPrevented)
                return;
            this._element.classList.remove(ss),
            this._queueCallback((()=>{
                this._element.classList.add(is),
                Le.trigger(this._element, "hidden.bs.toast")
            }
            ), this._element, this._config.animation)
        }
        dispose() {
            this._clearTimeout(),
            this._element.classList.contains(ss) && this._element.classList.remove(ss),
            super.dispose()
        }
        _getConfig(t) {
            return t = {
                ...as,
                ...je.getDataAttributes(this._element),
                ..."object" == typeof t && t ? t : {}
            },
            Qt(es, t, this.constructor.DefaultType),
            t
        }
        _maybeScheduleHide() {
            this._config.autohide && (this._hasMouseInteraction || this._hasKeyboardInteraction || (this._timeout = setTimeout((()=>{
                this.hide()
            }
            ), this._config.delay)))
        }
        _onInteraction(t, e) {
            switch (t.type) {
            case "mouseover":
            case "mouseout":
                this._hasMouseInteraction = e;
                break;
            case "focusin":
            case "focusout":
                this._hasKeyboardInteraction = e
            }
            if (e)
                return void this._clearTimeout();
            const n = t.relatedTarget;
            this._element === n || this._element.contains(n) || this._maybeScheduleHide()
        }
        _setListeners() {
            Le.on(this._element, "click.dismiss.bs.toast", '[data-bs-dismiss="toast"]', (()=>this.hide())),
            Le.on(this._element, "mouseover.bs.toast", (t=>this._onInteraction(t, !0))),
            Le.on(this._element, "mouseout.bs.toast", (t=>this._onInteraction(t, !1))),
            Le.on(this._element, "focusin.bs.toast", (t=>this._onInteraction(t, !0))),
            Le.on(this._element, "focusout.bs.toast", (t=>this._onInteraction(t, !1)))
        }
        _clearTimeout() {
            clearTimeout(this._timeout),
            this._timeout = null
        }
        static jQueryInterface(t) {
            return this.each((function() {
                let e = le(this, ns);
                if (e || (e = new ls(this,"object" == typeof t && t)),
                "string" == typeof t) {
                    if (void 0 === e[t])
                        throw new TypeError(`No method named "${t}"`);
                    e[t](this)
                }
            }
            ))
        }
    }
    se(ls)
}();
//# sourceMappingURL=index.8143ac48.js.map
