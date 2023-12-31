"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [2258], {
        3517: function(e, l, n) {
            n.d(l, {
                IP: function() {
                    return d
                },
                dF: function() {
                    return o
                },
                hA: function() {
                    return r
                }
            });
            var i = n(85893),
                a = n(31996);
            n(67294);

            function o(e) {
                switch (null === e || void 0 === e ? void 0 : e.type) {
                    case "color":
                    case "gradient":
                        return null === e || void 0 === e ? void 0 : e.color;
                    case "image":
                        var l, n, i;
                        return (null === e || void 0 === e || null === (l = e.overlay) || void 0 === l || null === (n = l.color) || void 0 === n ? void 0 : n.includes("rgba")) ? (0, a.s)(e.overlay.color) : null === e || void 0 === e || null === (i = e.overlay) || void 0 === i ? void 0 : i.color;
                    default:
                        return e
                }
            }

            function d(e) {
                switch (null === e || void 0 === e ? void 0 : e.type) {
                    case "color":
                        return {
                            backgroundColor: e.color
                        };
                    case "gradient":
                        var l, n, i;
                        return {
                            backgroundImage: "linear-gradient(".concat(null !== (l = e.direction) && void 0 !== l ? l : "180deg", ", ").concat(null !== (n = e.color) && void 0 !== n ? n : "#FFFFFF", ", ").concat(null !== (i = e.color2) && void 0 !== i ? i : "#D1D5DB", ")")
                        };
                    case "image":
                        var a, o;
                        return {
                            backgroundImage: "url(".concat((null === (a = e.image) || void 0 === a ? void 0 : a.preview) || (null === (o = e.image) || void 0 === o ? void 0 : o.url) || e.image, ")"),
                            backgroundPosition: "".concat(e.imagePositionX || "center", " ").concat(e.imagePositionY || "center"),
                            backgroundSize: "cover"
                        };
                    default:
                        return {
                            backgroundColor: e
                        }
                }
            }
            var r = function(e) {
                var l, n, o, d, r, s = e.background,
                    t = (null === s || void 0 === s || null === (l = s.overlay) || void 0 === l ? void 0 : l.color.includes("rgba")) ? (0, a.s)(null === s || void 0 === s || null === (n = s.overlay) || void 0 === n ? void 0 : n.color) : null === s || void 0 === s || null === (o = s.overlay) || void 0 === o ? void 0 : o.color;
                return "image" === (null === s || void 0 === s ? void 0 : s.type) && s.overlay ? (0, i.jsx)("div", {
                    className: (0, a.AK)("w-full h-full absolute top-0 left-0 z-0"),
                    style: {
                        backgroundColor: (0, a.mR)(null !== t && void 0 !== t ? t : "#000000", null !== (r = null === s || void 0 === s || null === (d = s.overlay) || void 0 === d ? void 0 : d.amount) && void 0 !== r ? r : 50)
                    }
                }) : null
            }
        },
        52077: function(e, l, n) {
            n.d(l, {
                Z: function() {
                    return s
                }
            });
            var i = n(85893),
                a = n(41664),
                o = n.n(a),
                d = n(16494),
                r = n(31996);

            function s(e) {
                var l, n, a, s, t = e.button,
                    u = e.type,
                    c = e.website,
                    v = e.action,
                    g = e.loading,
                    m = e.className,
                    b = (null === c || void 0 === c || null === (l = c.button) || void 0 === l ? void 0 : l.background) || (null === c || void 0 === c ? void 0 : c.secondaryColor),
                    h = {
                        background: "outline" === (null === c || void 0 === c || null === (n = c.button) || void 0 === n ? void 0 : n.style) ? "transparent" : b,
                        borderRadius: isNaN(null === c || void 0 === c || null === (a = c.button) || void 0 === a ? void 0 : a.cornerRadius) ? 8 : c.button.cornerRadius,
                        color: "outline" === (null === c || void 0 === c || null === (s = c.button) || void 0 === s ? void 0 : s.style) ? b : (0, r.$O)(b),
                        border: "2px solid ".concat(b)
                    };
                return v && "function" === typeof v || "submit" === u ? (0, i.jsx)("button", {
                    type: "submit" === u ? "submit" : "button",
                    onClick: v,
                    className: (0, r.AK)("button primary", m),
                    style: h,
                    disabled: g,
                    children: g ? (0, i.jsx)(d.Z, {}) : t.label
                }) : (0, i.jsx)(o(), {
                    href: function(e) {
                        if (e) {
                            if ("email" === e.type) return "mailto:" + e.link;
                            if ("phone" === e.type) return "tel:" + e.link;
                            if ("section" === e.type) return "#" + e.link;
                            if ("page" === e.type) {
                                var l, n, i, a = null === c || void 0 === c || null === (l = c.pages) || void 0 === l ? void 0 : l.find((function(l) {
                                        return l._id === e.page
                                    })),
                                    o = (null === a || void 0 === a ? void 0 : a.Parent) ? null === c || void 0 === c || null === (n = c.pages) || void 0 === n ? void 0 : n.find((function(e) {
                                        return e._id === (null === a || void 0 === a ? void 0 : a.Parent)
                                    })) : null,
                                    d = "";
                                return o && (d += "".concat(o.slug, "/")), d += null !== (i = null === a || void 0 === a ? void 0 : a.slug) && void 0 !== i ? i : "/"
                            }
                            var r, s = null === (r = e.link) || void 0 === r ? void 0 : r.replace(/https?:\/\//gi, "");
                            return s && "#" !== s ? "https://" + s : "#"
                        }
                        return "/"
                    }(t),
                    scroll: "section" !== (null === t || void 0 === t ? void 0 : t.type),
                    children: (0, i.jsx)("a", {
                        className: (0, r.AK)("button primary", m),
                        target: function(e) {
                            var l, n, i, a = null === c || void 0 === c || null === (l = c.pages) || void 0 === l ? void 0 : l.find((function(l) {
                                return l._id === e.page
                            }));
                            return e.newPage ? "_blank" : (null === a || void 0 === a ? void 0 : a.forceRender) ? "_parent" : (null === c || void 0 === c || null === (n = c.button) || void 0 === n ? void 0 : n.target) ? null === c || void 0 === c || null === (i = c.button) || void 0 === i ? void 0 : i.target : "_self"
                        }(t),
                        style: h,
                        children: t.label
                    })
                })
            }
        },
        16494: function(e, l, n) {
            n.d(l, {
                Z: function() {
                    return o
                }
            });
            var i = n(85893),
                a = n(31996);

            function o(e) {
                var l = e.text,
                    n = e.className,
                    o = e.classNameChild;
                switch (e.variant) {
                    case "form":
                        return (0, i.jsx)("div", {
                            className: "w-full max-w-screen-sm my-8",
                            children: (0, i.jsxs)("div", {
                                className: "animate-pulse flex space-y-8 flex-col",
                                children: [(0, i.jsxs)("div", {
                                    className: "space-y-3",
                                    children: [(0, i.jsx)("div", {
                                        className: "h-4 bg-gray-100 rounded w-1/2"
                                    }), (0, i.jsx)("div", {
                                        className: "h-9 bg-gray-100 rounded"
                                    }), (0, i.jsx)("div", {
                                        className: "h-2 bg-gray-100 rounded w-5/6"
                                    })]
                                }), (0, i.jsx)("hr", {}), (0, i.jsxs)("div", {
                                    className: "space-y-3",
                                    children: [(0, i.jsx)("div", {
                                        className: "h-4 bg-gray-100 rounded w-1/4"
                                    }), (0, i.jsx)("div", {
                                        className: "h-9 bg-gray-100 rounded"
                                    }), (0, i.jsx)("div", {
                                        className: "h-2 bg-gray-100 rounded w-1/2"
                                    })]
                                }), (0, i.jsx)("hr", {}), (0, i.jsxs)("div", {
                                    className: "space-y-3",
                                    children: [(0, i.jsx)("div", {
                                        className: "h-4 bg-gray-100 rounded w-1/4"
                                    }), (0, i.jsx)("div", {
                                        className: "h-9 bg-gray-100 rounded"
                                    }), (0, i.jsx)("div", {
                                        className: "h-2 bg-gray-100 rounded w-1/2"
                                    })]
                                }), (0, i.jsx)("hr", {}), (0, i.jsxs)("div", {
                                    className: "space-y-3",
                                    children: [(0, i.jsx)("div", {
                                        className: "h-4 bg-gray-100 rounded w-1/6"
                                    }), (0, i.jsx)("div", {
                                        className: "h-9 bg-gray-100 rounded"
                                    }), (0, i.jsx)("div", {
                                        className: "h-2 bg-gray-100 rounded w-3/4"
                                    })]
                                }), (0, i.jsx)("div", {
                                    className: "h-10 bg-gray-200 rounded w-1/4 ml-auto mt-4"
                                })]
                            })
                        });
                    case "skeleton":
                        return (0, i.jsx)("div", {
                            className: n,
                            children: (0, i.jsx)("div", {
                                className: "animate-pulse",
                                children: (0, i.jsx)("div", {
                                    className: (0, a.AK)("h-6 bg-gray-200 rounded", o)
                                })
                            })
                        });
                    case "table":
                        return (0, i.jsx)("div", {
                            className: "w-full my-8",
                            children: (0, i.jsxs)("div", {
                                className: "animate-pulse flex space-y-2 flex-col",
                                children: [(0, i.jsxs)("div", {
                                    className: "space-x-2 flex",
                                    children: [(0, i.jsx)("div", {
                                        className: "h-9 bg-gray-200 rounded w-full"
                                    }), (0, i.jsx)("div", {
                                        className: "h-9 bg-gray-200 rounded w-full"
                                    }), (0, i.jsx)("div", {
                                        className: "h-9 bg-gray-200 rounded w-full"
                                    }), (0, i.jsx)("div", {
                                        className: "h-9 bg-gray-200 rounded w-full"
                                    }), (0, i.jsx)("div", {
                                        className: "h-9 bg-gray-200 rounded w-full"
                                    }), (0, i.jsx)("div", {
                                        className: "h-9 bg-gray-200 rounded w-full"
                                    })]
                                }), [1, 2, 3, 4, 5, 6].map((function(e) {
                                    return (0, i.jsxs)("div", {
                                        className: "space-x-2 flex",
                                        children: [(0, i.jsx)("div", {
                                            className: "h-9 bg-gray-100 rounded w-full"
                                        }), (0, i.jsx)("div", {
                                            className: "h-9 bg-gray-100 rounded w-full"
                                        }), (0, i.jsx)("div", {
                                            className: "h-9 bg-gray-100 rounded w-full"
                                        }), (0, i.jsx)("div", {
                                            className: "h-9 bg-gray-100 rounded w-full"
                                        }), (0, i.jsx)("div", {
                                            className: "h-9 bg-gray-100 rounded w-full"
                                        }), (0, i.jsx)("div", {
                                            className: "h-9 bg-gray-100 rounded w-full"
                                        })]
                                    }, e)
                                }))]
                            })
                        });
                    default:
                        return (0, i.jsxs)("div", {
                            className: (0, a.AK)("inline-flex items-center", n),
                            children: [(0, i.jsxs)("svg", {
                                className: (0, a.AK)("animate-spin ml-1 mr-3 h-4 w-4", n && "text-indigo-600"),
                                xmlns: "http://www.w3.org/2000/svg",
                                fill: "none",
                                viewBox: "0 0 24 24",
                                children: [(0, i.jsx)("circle", {
                                    className: "opacity-25",
                                    cx: "12",
                                    cy: "12",
                                    r: "10",
                                    stroke: "currentColor",
                                    strokeWidth: "4"
                                }), (0, i.jsx)("path", {
                                    className: "opacity-75",
                                    fill: "currentColor",
                                    d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                })]
                            }), l || "" === l ? l : "Loading..."]
                        })
                }
            }
        },
        82258: function(e, l, n) {
            n.r(l), n.d(l, {
                default: function() {
                    return u
                }
            });
            var i = n(14251),
                a = n(52875),
                o = n(85893),
                d = n(31996),
                r = n(52077),
                s = n(399),
                t = n(3517);

            function u(e) {
                var l, n, u = e.id,
                    c = e.block,
                    v = e.website,
                    g = null === c || void 0 === c ? void 0 : c.headline,
                    m = null === c || void 0 === c ? void 0 : c.content,
                    b = null === c || void 0 === c ? void 0 : c.button,
                    h = null === c || void 0 === c ? void 0 : c.align,
                    x = null !== (l = null === c || void 0 === c ? void 0 : c.background) && void 0 !== l ? l : "#FFFFFF",
                    f = (0, d.$O)(null !== (n = (0, t.dF)(x)) && void 0 !== n ? n : "#F3F4F6"),
                    p = (0, s.Z)(c),
                    y = p.minHeight,
                    j = p.headerHeight;
                return (0, o.jsxs)("section", {
                    id: u,
                    "data-combine-with-header": 1 === (null === c || void 0 === c ? void 0 : c.idx) && (null === c || void 0 === c ? void 0 : c.combineWithHeader),
                    "data-text-color": f,
                    className: (0, d.AK)("flex-shrink-0 flex relative z-10", function(e) {
                        switch (e) {
                            case "top":
                                return "items-start";
                            case "bottom":
                                return "items-end";
                            default:
                                return "items-center"
                        }
                    }((null === c || void 0 === c ? void 0 : c.verticalAlign) || "center")),
                    style: (0, i.Z)((0, a.Z)((0, i.Z)({}, (0, t.IP)(x)), {
                        minHeight: y
                    }), (null === c || void 0 === c ? void 0 : c.combineWithHeader) ? {
                        marginTop: "-".concat(j, "px"),
                        paddingTop: "".concat(j, "px")
                    } : {}),
                    children: [(0, o.jsx)(t.hA, {
                        background: x
                    }), (0, o.jsx)("div", {
                        className: (0, d.AK)("relative container mx-auto px-6 z-10", function(e) {
                            var l = "";
                            switch (null === e || void 0 === e ? void 0 : e.top) {
                                case "none":
                                    l += "pt-0 ";
                                    break;
                                case "small":
                                    l += "pt-8 lg:pt-32 ";
                                    break;
                                case "medium":
                                    l += "pt-12 lg:pt-40 ";
                                    break;
                                case "large":
                                    l += "pt-20 lg:pt-48 ";
                                    break;
                                default:
                                    l += "pt-12 lg:pt-32 xl:pt-40 "
                            }
                            switch (null === e || void 0 === e ? void 0 : e.bottom) {
                                case "none":
                                    l += "pb-0";
                                    break;
                                case "small":
                                    l += "pb-8 lg:pb-32";
                                    break;
                                case "medium":
                                    l += "pb-12 lg:pb-40";
                                    break;
                                case "large":
                                    l += "pb-20 lg:pb-48";
                                    break;
                                default:
                                    l += "pb-12 lg:pb-32 xl:pb-40"
                            }
                            return l
                        }(null === c || void 0 === c ? void 0 : c.spacing)),
                        children: (0, o.jsxs)("div", {
                            className: (0, d.AK)("max-w-3xl", "text-".concat(h), "left" === h ? "ml-0 mr-auto" : "right" === h ? "ml-auto mr-0" : "mx-auto"),
                            children: [g && (0, o.jsx)("h2", {
                                className: (0, d.AK)("heading-xlarge mb-6 break-word", "text-".concat(h)),
                                style: (0, i.Z)({
                                    color: f
                                }, (0, d.j2)(v)),
                                children: g
                            }), m && (0, o.jsx)("p", {
                                className: (0, d.AK)("body-large"),
                                style: (0, i.Z)({
                                    color: f
                                }, (0, d.SV)(v)),
                                children: m
                            }), b && (0, o.jsx)(r.Z, {
                                button: b,
                                website: v,
                                className: "xl mt-6 lg:mt-8 w-full md:w-max"
                            })]
                        })
                    })]
                })
            }
        },
        399: function(e, l, n) {
            n.d(l, {
                Z: function() {
                    return a
                }
            });
            var i = n(67294);

            function a(e) {
                var l, n, a = (0, i.useState)(0),
                    o = a[0],
                    d = a[1],
                    r = (0, i.useState)([0, 0]),
                    s = r[0],
                    t = r[1];
                return (0, i.useEffect)((function() {
                    var e = function() {
                        t([window.innerWidth, window.innerHeight])
                    };
                    return window.addEventListener("resize", e), e(),
                        function() {
                            return window.removeEventListener("resize", e)
                        }
                }), []), (0, i.useEffect)((function() {
                    var l;
                    e && d(1 === e.idx ? (null === (l = null === document || void 0 === document ? void 0 : document.getElementById("website-header")) || void 0 === l ? void 0 : l.offsetHeight) || 80 : 0)
                }), [e, s]), {
                    minHeight: (null === e || void 0 === e || null === (l = e.spacing) || void 0 === l ? void 0 : l.minHeight) ? "calc(".concat("min-h-screen" === (null === e || void 0 === e || null === (n = e.spacing) || void 0 === n ? void 0 : n.minHeight) ? "100vh" : "240px", " - ").concat((null === e || void 0 === e ? void 0 : e.combineWithHeader) ? 0 : o, "px)") : "240px",
                    headerHeight: o
                }
            }
        }
    }
]);