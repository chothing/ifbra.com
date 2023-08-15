"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [6848], {
        3517: function(e, i, n) {
            n.d(i, {
                IP: function() {
                    return r
                },
                dF: function() {
                    return t
                },
                hA: function() {
                    return d
                }
            });
            var o = n(85893),
                l = n(31996);
            n(67294);

            function t(e) {
                switch (null === e || void 0 === e ? void 0 : e.type) {
                    case "color":
                    case "gradient":
                        return null === e || void 0 === e ? void 0 : e.color;
                    case "image":
                        var i, n, o;
                        return (null === e || void 0 === e || null === (i = e.overlay) || void 0 === i || null === (n = i.color) || void 0 === n ? void 0 : n.includes("rgba")) ? (0, l.s)(e.overlay.color) : null === e || void 0 === e || null === (o = e.overlay) || void 0 === o ? void 0 : o.color;
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
                        var i, n, o;
                        return {
                            backgroundImage: "linear-gradient(".concat(null !== (i = e.direction) && void 0 !== i ? i : "180deg", ", ").concat(null !== (n = e.color) && void 0 !== n ? n : "#FFFFFF", ", ").concat(null !== (o = e.color2) && void 0 !== o ? o : "#D1D5DB", ")")
                        };
                    case "image":
                        var l, t;
                        return {
                            backgroundImage: "url(".concat((null === (l = e.image) || void 0 === l ? void 0 : l.preview) || (null === (t = e.image) || void 0 === t ? void 0 : t.url) || e.image, ")"),
                            backgroundPosition: "".concat(e.imagePositionX || "center", " ").concat(e.imagePositionY || "center"),
                            backgroundSize: "cover"
                        };
                    default:
                        return {
                            backgroundColor: e
                        }
                }
            }
            var d = function(e) {
                var i, n, t, r, d, u = e.background,
                    c = (null === u || void 0 === u || null === (i = u.overlay) || void 0 === i ? void 0 : i.color.includes("rgba")) ? (0, l.s)(null === u || void 0 === u || null === (n = u.overlay) || void 0 === n ? void 0 : n.color) : null === u || void 0 === u || null === (t = u.overlay) || void 0 === t ? void 0 : t.color;
                return "image" === (null === u || void 0 === u ? void 0 : u.type) && u.overlay ? (0, o.jsx)("div", {
                    className: (0, l.AK)("w-full h-full absolute top-0 left-0 z-0"),
                    style: {
                        backgroundColor: (0, l.mR)(null !== c && void 0 !== c ? c : "#000000", null !== (d = null === u || void 0 === u || null === (r = u.overlay) || void 0 === r ? void 0 : r.amount) && void 0 !== d ? d : 50)
                    }
                }) : null
            }
        },
        16848: function(e, i, n) {
            n.r(i), n.d(i, {
                default: function() {
                    return v
                }
            });
            var o = n(14251),
                l = n(52875),
                t = n(85893),
                r = n(31996),
                d = n(29260),
                u = n.n(d),
                c = n(399),
                a = n(3517);

            function v(e) {
                var i, n, d, v, s, g = e.id,
                    f = (e.website, e.block),
                    m = null !== (s = null === f || void 0 === f ? void 0 : f.background) && void 0 !== s ? s : "#FFFFFF",
                    p = (0, c.Z)(f).minHeight;
                return (0, t.jsxs)("section", {
                    id: g,
                    className: (0, r.AK)("flex flex-none relative z-10", (0, r.A2)((null === f || void 0 === f ? void 0 : f.verticalAlign) || "center")),
                    style: (0, l.Z)((0, o.Z)({}, (null === f || void 0 === f ? void 0 : f.fullWidth) ? {} : (0, a.IP)(m)), {
                        minHeight: p
                    }),
                    children: [(0, t.jsx)(a.hA, {
                        background: m
                    }), (0, t.jsx)("div", {
                        className: (0, r.AK)("relative z-10", (null === f || void 0 === f ? void 0 : f.fullWidth) ? "w-full" : "container ".concat(function(e) {
                            var i = "";
                            switch (null === e || void 0 === e ? void 0 : e.top) {
                                case "none":
                                    i += "pt-0 ";
                                    break;
                                case "small":
                                    i += "pt-8 lg:pt-12 ";
                                    break;
                                case "medium":
                                    i += "pt-12 lg:pt-20 ";
                                    break;
                                case "large":
                                    i += "pt-16 lg:pt-32 ";
                                    break;
                                default:
                                    i += "pt-12 lg:pt-14 xl:pt-20 "
                            }
                            switch (null === e || void 0 === e ? void 0 : e.bottom) {
                                case "none":
                                    i += "pb-0";
                                    break;
                                case "small":
                                    i += "pb-8 lg:pb-12";
                                    break;
                                case "medium":
                                    i += "pb-12 lg:pb-20";
                                    break;
                                case "large":
                                    i += "pb-16 lg:pb-32";
                                    break;
                                default:
                                    i += "pb-12 lg:pb-14 xl:pb-20"
                            }
                            return i
                        }(null === f || void 0 === f ? void 0 : f.spacing)), "mx-auto"),
                        children: (0, t.jsx)("div", {
                            className: (0, r.AK)("relative z-10", !f.fullWidth && ("min-h-screen" !== (null === f || void 0 === f || null === (i = f.spacing) || void 0 === i ? void 0 : i.minHeight) ? "max-h-250 mx-auto" : "mx-auto"), "flex justify-center items-center"),
                            children: (null === f || void 0 === f || null === (n = f.media) || void 0 === n ? void 0 : n.url) && (0, t.jsx)("div", {
                                className: (0, r.AK)("relative overflow-hidden w-full", (null === f || void 0 === f ? void 0 : f.fullWidth) ? "w-full " + ("min-h-screen" === (null === f || void 0 === f || null === (d = f.spacing) || void 0 === d ? void 0 : d.minHeight) ? "" : "h-60 md:h-80 lg:h-120 xl:h-150") : (0, r.n3)(null === f || void 0 === f ? void 0 : f.aspectRatio), !(null === f || void 0 === f ? void 0 : f.fullWidth) && (0, r.yW)(null === f || void 0 === f ? void 0 : f.cornerRadius)),
                                style: "min-h-screen" === (null === f || void 0 === f || null === (v = f.spacing) || void 0 === v ? void 0 : v.minHeight) && (null === f || void 0 === f ? void 0 : f.fullWidth) ? {
                                    minHeight: p
                                } : {},
                                children: (0, r.QW)(null === f || void 0 === f ? void 0 : f.media) && (0, t.jsx)(u(), {
                                    onContextMenu: function(e) {
                                        e.preventDefault()
                                    },
                                    src: (0, r.QW)(null === f || void 0 === f ? void 0 : f.media),
                                    alt: null === f || void 0 === f ? void 0 : f.media.author,
                                    layout: "fill",
                                    objectFit: (null === f || void 0 === f ? void 0 : f.imageFit) || "cover",
                                    objectPosition: "".concat((null === f || void 0 === f ? void 0 : f.imagePositionX) || "center", " ").concat((null === f || void 0 === f ? void 0 : f.imagePositionY) || "center"),
                                    className: (0, r.AK)("w-full h-full")
                                })
                            })
                        })
                    })]
                })
            }
        },
        399: function(e, i, n) {
            n.d(i, {
                Z: function() {
                    return l
                }
            });
            var o = n(67294);

            function l(e) {
                var i, n, l = (0, o.useState)(0),
                    t = l[0],
                    r = l[1],
                    d = (0, o.useState)([0, 0]),
                    u = d[0],
                    c = d[1];
                return (0, o.useEffect)((function() {
                    var e = function() {
                        c([window.innerWidth, window.innerHeight])
                    };
                    return window.addEventListener("resize", e), e(),
                        function() {
                            return window.removeEventListener("resize", e)
                        }
                }), []), (0, o.useEffect)((function() {
                    var i;
                    e && r(1 === e.idx ? (null === (i = null === document || void 0 === document ? void 0 : document.getElementById("website-header")) || void 0 === i ? void 0 : i.offsetHeight) || 80 : 0)
                }), [e, u]), {
                    minHeight: (null === e || void 0 === e || null === (i = e.spacing) || void 0 === i ? void 0 : i.minHeight) ? "calc(".concat("min-h-screen" === (null === e || void 0 === e || null === (n = e.spacing) || void 0 === n ? void 0 : n.minHeight) ? "100vh" : "240px", " - ").concat((null === e || void 0 === e ? void 0 : e.combineWithHeader) ? 0 : t, "px)") : "240px",
                    headerHeight: t
                }
            }
        },
        52875: function(e, i, n) {
            function o(e, i) {
                return i = null != i ? i : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : function(e, i) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var o = Object.getOwnPropertySymbols(e);
                        i && (o = o.filter((function(i) {
                            return Object.getOwnPropertyDescriptor(e, i).enumerable
                        }))), n.push.apply(n, o)
                    }
                    return n
                }(Object(i)).forEach((function(n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(i, n))
                })), e
            }
            n.d(i, {
                Z: function() {
                    return o
                }
            })
        }
    }
]);