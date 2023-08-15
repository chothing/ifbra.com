"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [866], {
        3517: function(e, n, o) {
            o.d(n, {
                IP: function() {
                    return r
                },
                dF: function() {
                    return l
                },
                hA: function() {
                    return c
                }
            });
            var i = o(85893),
                t = o(31996);
            o(67294);

            function l(e) {
                switch (null === e || void 0 === e ? void 0 : e.type) {
                    case "color":
                    case "gradient":
                        return null === e || void 0 === e ? void 0 : e.color;
                    case "image":
                        var n, o, i;
                        return (null === e || void 0 === e || null === (n = e.overlay) || void 0 === n || null === (o = n.color) || void 0 === o ? void 0 : o.includes("rgba")) ? (0, t.s)(e.overlay.color) : null === e || void 0 === e || null === (i = e.overlay) || void 0 === i ? void 0 : i.color;
                    default:
                        return e
                }
            }

            function r(e) {
                switch (null === e || void 0 === e ? void 0 : e.type) {
                    case "color":
                        return {
                            backgroundColor: e.color
                        };
                    case "gradient":
                        var n, o, i;
                        return {
                            backgroundImage: "linear-gradient(".concat(null !== (n = e.direction) && void 0 !== n ? n : "180deg", ", ").concat(null !== (o = e.color) && void 0 !== o ? o : "#FFFFFF", ", ").concat(null !== (i = e.color2) && void 0 !== i ? i : "#D1D5DB", ")")
                        };
                    case "image":
                        var t, l;
                        return {
                            backgroundImage: "url(".concat((null === (t = e.image) || void 0 === t ? void 0 : t.preview) || (null === (l = e.image) || void 0 === l ? void 0 : l.url) || e.image, ")"),
                            backgroundPosition: "".concat(e.imagePositionX || "center", " ").concat(e.imagePositionY || "center"),
                            backgroundSize: "cover"
                        };
                    default:
                        return {
                            backgroundColor: e
                        }
                }
            }
            var c = function(e) {
                var n, o, l, r, c, u = e.background,
                    a = (null === u || void 0 === u || null === (n = u.overlay) || void 0 === n ? void 0 : n.color.includes("rgba")) ? (0, t.s)(null === u || void 0 === u || null === (o = u.overlay) || void 0 === o ? void 0 : o.color) : null === u || void 0 === u || null === (l = u.overlay) || void 0 === l ? void 0 : l.color;
                return "image" === (null === u || void 0 === u ? void 0 : u.type) && u.overlay ? (0, i.jsx)("div", {
                    className: (0, t.AK)("w-full h-full absolute top-0 left-0 z-0"),
                    style: {
                        backgroundColor: (0, t.mR)(null !== a && void 0 !== a ? a : "#000000", null !== (c = null === u || void 0 === u || null === (r = u.overlay) || void 0 === r ? void 0 : r.amount) && void 0 !== c ? c : 50)
                    }
                }) : null
            }
        },
        50866: function(e, n, o) {
            o.r(n), o.d(n, {
                default: function() {
                    return a
                }
            });
            var i = o(14251),
                t = o(52875),
                l = o(85893),
                r = o(31996),
                c = o(399),
                u = o(3517);

            function a(e) {
                var n, o = e.id,
                    a = (e.website, e.block),
                    d = null === a || void 0 === a ? void 0 : a.content,
                    v = null === a || void 0 === a ? void 0 : a.align,
                    s = null !== (n = null === a || void 0 === a ? void 0 : a.background) && void 0 !== n ? n : "#F3F4F6",
                    g = (0, r.$O)((0, u.dF)(s)),
                    b = (0, c.Z)(a).minHeight;
                return (0, l.jsxs)("section", {
                    id: o,
                    className: (0, r.AK)("flex flex-none flex-shrink-0 relative z-10", (0, r.A2)((null === a || void 0 === a ? void 0 : a.verticalAlign) || "center")),
                    style: (0, t.Z)((0, i.Z)({}, (0, u.IP)(s)), {
                        minHeight: b
                    }),
                    children: [(0, l.jsx)(u.hA, {
                        background: s
                    }), (0, l.jsx)("div", {
                        className: (0, r.AK)("container mx-auto relative z-10", function(e) {
                            var n = "";
                            switch (null === e || void 0 === e ? void 0 : e.top) {
                                case "none":
                                    n += "pt-0 ";
                                    break;
                                case "small":
                                    n += "pt-8 lg:pt-12 ";
                                    break;
                                case "medium":
                                    n += "pt-12 lg:pt-20 ";
                                    break;
                                case "large":
                                    n += "pt-16 lg:pt-32 ";
                                    break;
                                default:
                                    n += "pt-12 lg:pt-14 xl:pt-20 "
                            }
                            switch (null === e || void 0 === e ? void 0 : e.bottom) {
                                case "none":
                                    n += "pb-0";
                                    break;
                                case "small":
                                    n += "pb-8 lg:pb-12";
                                    break;
                                case "medium":
                                    n += "pb-12 lg:pb-20";
                                    break;
                                case "large":
                                    n += "pb-16 lg:pb-32";
                                    break;
                                default:
                                    n += "pb-12 lg:pb-14 xl:pb-20"
                            }
                            return n
                        }(null === a || void 0 === a ? void 0 : a.spacing)),
                        children: (0, l.jsx)("div", {
                            className: (0, r.AK)("rich-text-block max-w-5xl", "text-".concat(v), "left" === v ? "ml-0 mr-auto" : "right" === v ? "ml-auto mr-0" : "mx-auto"),
                            style: {
                                color: g
                            },
                            dangerouslySetInnerHTML: {
                                __html: d
                            }
                        })
                    })]
                })
            }
        },
        399: function(e, n, o) {
            o.d(n, {
                Z: function() {
                    return t
                }
            });
            var i = o(67294);

            function t(e) {
                var n, o, t = (0, i.useState)(0),
                    l = t[0],
                    r = t[1],
                    c = (0, i.useState)([0, 0]),
                    u = c[0],
                    a = c[1];
                return (0, i.useEffect)((function() {
                    var e = function() {
                        a([window.innerWidth, window.innerHeight])
                    };
                    return window.addEventListener("resize", e), e(),
                        function() {
                            return window.removeEventListener("resize", e)
                        }
                }), []), (0, i.useEffect)((function() {
                    var n;
                    e && r(1 === e.idx ? (null === (n = null === document || void 0 === document ? void 0 : document.getElementById("website-header")) || void 0 === n ? void 0 : n.offsetHeight) || 80 : 0)
                }), [e, u]), {
                    minHeight: (null === e || void 0 === e || null === (n = e.spacing) || void 0 === n ? void 0 : n.minHeight) ? "calc(".concat("min-h-screen" === (null === e || void 0 === e || null === (o = e.spacing) || void 0 === o ? void 0 : o.minHeight) ? "100vh" : "240px", " - ").concat((null === e || void 0 === e ? void 0 : e.combineWithHeader) ? 0 : l, "px)") : "240px",
                    headerHeight: l
                }
            }
        },
        52875: function(e, n, o) {
            function i(e, n) {
                return n = null != n ? n : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : function(e, n) {
                    var o = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var i = Object.getOwnPropertySymbols(e);
                        n && (i = i.filter((function(n) {
                            return Object.getOwnPropertyDescriptor(e, n).enumerable
                        }))), o.push.apply(o, i)
                    }
                    return o
                }(Object(n)).forEach((function(o) {
                    Object.defineProperty(e, o, Object.getOwnPropertyDescriptor(n, o))
                })), e
            }
            o.d(n, {
                Z: function() {
                    return i
                }
            })
        }
    }
]);