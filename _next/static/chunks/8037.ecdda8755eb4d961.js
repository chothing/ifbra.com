"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [8037], {
        3677: function(e, l, n) {
            var t = n(67294);
            l.Z = function(e) {
                return t.createElement("svg", Object.assign({
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "none",
                    stroke: "currentColor",
                    viewBox: "0 0 24 24",
                    width: 24,
                    height: 24
                }, e), t.createElement("path", {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: 1.5,
                    d: "m15 19-7-7 7-7"
                }))
            }
        },
        41984: function(e, l, n) {
            var t = n(67294);
            l.Z = function(e) {
                return t.createElement("svg", Object.assign({
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "none",
                    stroke: "currentColor",
                    viewBox: "0 0 24 24",
                    width: 24,
                    height: 24
                }, e), t.createElement("path", {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: 1.5,
                    d: "m9 5 7 7-7 7"
                }))
            }
        },
        43751: function(e, l, n) {
            var t = n(67294);
            l.Z = function(e) {
                return t.createElement("svg", Object.assign({
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "none",
                    stroke: "currentColor",
                    viewBox: "0 0 24 24",
                    width: 24,
                    height: 24
                }, e), t.createElement("path", {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: 1.5,
                    d: "M6 18 18 6M6 6l12 12"
                }))
            }
        },
        3517: function(e, l, n) {
            n.d(l, {
                IP: function() {
                    return r
                },
                dF: function() {
                    return i
                },
                hA: function() {
                    return c
                }
            });
            var t = n(85893),
                o = n(31996);
            n(67294);

            function i(e) {
                switch (null === e || void 0 === e ? void 0 : e.type) {
                    case "color":
                    case "gradient":
                        return null === e || void 0 === e ? void 0 : e.color;
                    case "image":
                        var l, n, t;
                        return (null === e || void 0 === e || null === (l = e.overlay) || void 0 === l || null === (n = l.color) || void 0 === n ? void 0 : n.includes("rgba")) ? (0, o.s)(e.overlay.color) : null === e || void 0 === e || null === (t = e.overlay) || void 0 === t ? void 0 : t.color;
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
                        var l, n, t;
                        return {
                            backgroundImage: "linear-gradient(".concat(null !== (l = e.direction) && void 0 !== l ? l : "180deg", ", ").concat(null !== (n = e.color) && void 0 !== n ? n : "#FFFFFF", ", ").concat(null !== (t = e.color2) && void 0 !== t ? t : "#D1D5DB", ")")
                        };
                    case "image":
                        var o, i;
                        return {
                            backgroundImage: "url(".concat((null === (o = e.image) || void 0 === o ? void 0 : o.preview) || (null === (i = e.image) || void 0 === i ? void 0 : i.url) || e.image, ")"),
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
                var l, n, i, r, c, a = e.background,
                    d = (null === a || void 0 === a || null === (l = a.overlay) || void 0 === l ? void 0 : l.color.includes("rgba")) ? (0, o.s)(null === a || void 0 === a || null === (n = a.overlay) || void 0 === n ? void 0 : n.color) : null === a || void 0 === a || null === (i = a.overlay) || void 0 === i ? void 0 : i.color;
                return "image" === (null === a || void 0 === a ? void 0 : a.type) && a.overlay ? (0, t.jsx)("div", {
                    className: (0, o.AK)("w-full h-full absolute top-0 left-0 z-0"),
                    style: {
                        backgroundColor: (0, o.mR)(null !== d && void 0 !== d ? d : "#000000", null !== (c = null === a || void 0 === a || null === (r = a.overlay) || void 0 === r ? void 0 : r.amount) && void 0 !== c ? c : 50)
                    }
                }) : null
            }
        },
        98037: function(e, l, n) {
            n.r(l), n.d(l, {
                default: function() {
                    return b
                }
            });
            var t = n(14251),
                o = n(52875),
                i = n(85893),
                r = n(31996),
                c = n(67294),
                a = n(29260),
                d = n.n(a),
                s = n(33752),
                u = n.n(s),
                v = n(41984),
                g = n(3677),
                m = n(44080),
                f = n(22872),
                h = n(43751),
                p = n(3517);

            function x(e) {
                var l = e.pictures,
                    n = e.selected,
                    t = e.aspectRatio,
                    o = e.cornerRadius,
                    a = e.open,
                    s = e.background,
                    x = e.setOpen,
                    j = (0, p.dF)(s),
                    b = (0, r.ac)("(min-width: 1920px)"),
                    w = (0, r.ac)("(min-width: 1440px)"),
                    y = (0, r.ac)("(min-width: 1280px)"),
                    N = (0, r.ac)("(min-width: 1024px)"),
                    A = (0, r.ac)("(min-width: 768px)");
                return (0, i.jsx)(m.u, {
                    appear: !0,
                    show: a,
                    as: c.Fragment,
                    children: (0, i.jsxs)(f.V, {
                        as: "div",
                        className: "relative z-[2000]",
                        onClose: function() {
                            return x(!1)
                        },
                        children: [(0, i.jsx)(m.u.Child, {
                            as: c.Fragment,
                            enter: "ease-out duration-300",
                            enterFrom: "opacity-0",
                            enterTo: "opacity-100",
                            leave: "ease-in duration-200",
                            leaveFrom: "opacity-100",
                            leaveTo: "opacity-0",
                            children: (0, i.jsx)("div", {
                                className: (0, r.AK)("fixed inset-0 backdrop-blur-xl"),
                                children: (0, i.jsx)("div", {
                                    className: "fixed inset-0 bg-white opacity-50",
                                    style: (0, p.IP)(s),
                                    children: (0, i.jsx)(p.hA, {
                                        background: s
                                    })
                                })
                            })
                        }), (0, i.jsx)("div", {
                            className: "fixed inset-0 overflow-y-auto",
                            children: (0, i.jsx)("div", {
                                className: "flex w-full min-h-screen items-center justify-center text-center",
                                children: (0, i.jsx)(m.u.Child, {
                                    as: c.Fragment,
                                    enter: "ease-out duration-300",
                                    enterFrom: "opacity-0 scale-95",
                                    enterTo: "opacity-100 scale-100",
                                    leave: "ease-in duration-200",
                                    leaveFrom: "opacity-100 scale-100",
                                    leaveTo: "opacity-0 scale-95",
                                    children: (0, i.jsxs)(f.V.Panel, {
                                        className: "w-full transform overflow-hidden transition-all gallery-carousel",
                                        children: [(0, i.jsx)("div", {
                                            className: "text-right p-6",
                                            children: (0, i.jsx)("button", {
                                                type: "button",
                                                className: "text-gray-900 focus:outline-none hover:text-gray-700 transition-all",
                                                style: {
                                                    color: (0, r.$O)(j)
                                                },
                                                onClick: function() {
                                                    return x(!1)
                                                },
                                                children: (0, i.jsx)(h.Z, {
                                                    className: "h-6 w-6 lg:h-12 lg:w-12",
                                                    "aria-hidden": "true"
                                                })
                                            })
                                        }), (null === l || void 0 === l ? void 0 : l.length) > 0 && (0, i.jsx)(u(), {
                                            slideIndex: n,
                                            cellSpacing: N ? 40 : A ? 32 : 12,
                                            cellAlign: "center",
                                            slidesToShow: function(e) {
                                                return "1:1" === e ? b ? 3 : N ? 2.5 : 1.25 : "2:3" === e ? b ? 3.5 : w ? 3 : y ? 2.5 : 3 : y ? 1.5 : N ? 1.25 : 1.15
                                            }(t),
                                            wrapAround: !0,
                                            transitionMode: "scroll",
                                            defaultControlsConfig: {
                                                nextButtonClassName: A ? "" : "hidden",
                                                nextButtonStyle: {
                                                    background: "transparent"
                                                },
                                                nextButtonText: (0, i.jsx)(v.Z, {
                                                    className: "w-6 lg:w-12 h-6 lg:h-12"
                                                }),
                                                prevButtonClassName: A ? "" : "hidden",
                                                prevButtonStyle: {
                                                    background: "transparent"
                                                },
                                                prevButtonText: (0, i.jsx)(g.Z, {
                                                    className: "w-6 lg:w-12 h-6 lg:h-12"
                                                })
                                            },
                                            renderBottomCenterControls: function(e) {
                                                return (0, i.jsx)("ul", {
                                                    className: "flex items-center gap-4 lg:gap-5 mt-4 md:mt-10 mb-6",
                                                    children: l.map((function(l, n) {
                                                        return (0, i.jsx)("li", {
                                                            className: (0, r.AK)("flex items-center justify-center rounded-full transition-all duration-300", e.currentSlide === n ? "w-4 h-4" : "w-2.5 h-2.5"),
                                                            style: e.currentSlide === n ? {
                                                                backgroundColor: (0, r.mR)((0, r.$O)(j), 20)
                                                            } : {},
                                                            children: (0, i.jsx)("button", {
                                                                className: (0, r.AK)("w-2.5 h-2.5 rounded-full transition-all"),
                                                                style: {
                                                                    backgroundColor: (0, r.$O)(j),
                                                                    opacity: e.currentSlide !== n ? "35%" : "100%"
                                                                },
                                                                onClick: function() {
                                                                    return e.goToSlide(n)
                                                                }
                                                            })
                                                        }, n)
                                                    }))
                                                })
                                            },
                                            children: l.map((function(e) {
                                                return (0, i.jsx)("div", {
                                                    className: (0, r.AK)("relative overflow-hidden", (0, r.n3)(t), o),
                                                    children: (0, r.QW)(e) && (0, i.jsx)(d(), {
                                                        src: (0, r.QW)(e),
                                                        layout: "fill",
                                                        objectFit: "cover",
                                                        alt: e.alt,
                                                        onContextMenu: function(e) {
                                                            e.preventDefault()
                                                        },
                                                        className: (0, r.AK)("w-full h-full object-center object-cover")
                                                    })
                                                }, e._id)
                                            }))
                                        })]
                                    })
                                })
                            })
                        })]
                    })
                })
            }
            var j = n(399);

            function b(e) {
                var l, n = e.id,
                    a = e.website,
                    s = e.block,
                    m = null === s || void 0 === s ? void 0 : s.headline,
                    f = null === s || void 0 === s ? void 0 : s.align,
                    h = (null === s || void 0 === s ? void 0 : s.pictures) || [],
                    b = null === s || void 0 === s ? void 0 : s.aspectRatio,
                    w = null === s || void 0 === s ? void 0 : s.cornerRadius,
                    y = null !== (l = null === s || void 0 === s ? void 0 : s.background) && void 0 !== l ? l : "#FFFFFF",
                    N = (0, r.$O)((0, p.dF)(y)),
                    A = (0, c.useState)(!1),
                    k = A[0],
                    C = A[1],
                    K = (0, c.useState)(null),
                    W = K[0],
                    F = K[1],
                    Q = (0, r.ac)("(min-width: 1920px)"),
                    S = (0, r.ac)("(min-width: 1280px)"),
                    M = (0, r.ac)("(min-width: 1024px)"),
                    B = (0, r.ac)("(min-width: 768px)"),
                    D = (0, j.Z)(s).minHeight,
                    Z = function(e) {
                        (null === s || void 0 === s ? void 0 : s.allowFullscreen) && M && (C(!0), F(e))
                    },
                    G = function() {
                        return (null === s || void 0 === s ? void 0 : s.allowFullscreen) && M ? "hover:opacity-70 cursor-pointer transition-opacity" : ""
                    };
                return (null === s || void 0 === s ? void 0 : s.fullHeight) && ((null === s || void 0 === s ? void 0 : s.spacing) || (s.spacing = {}), s.spacing = (0, o.Z)((0, t.Z)({}, s.spacing), {
                    top: "none",
                    bottom: "none"
                })), (0, i.jsxs)("section", {
                    id: n,
                    className: (0, r.AK)("flex flex-none flex-shrink-0 relative z-10", (0, r.A2)((null === s || void 0 === s ? void 0 : s.verticalAlign) || "center")),
                    style: (0, o.Z)((0, t.Z)({}, (0, p.IP)(y)), {
                        minHeight: D
                    }),
                    children: [(0, i.jsx)(p.hA, {
                        background: y
                    }), (0, i.jsxs)("div", {
                        className: (0, r.AK)("relative z-10", "carousel" === (null === s || void 0 === s ? void 0 : s.style) || (null === s || void 0 === s ? void 0 : s.fullWidth) ? "w-full" : "container mx-auto", function(e) {
                            var l = "";
                            switch (null === e || void 0 === e ? void 0 : e.top) {
                                case "none":
                                    l += "pt-0 ";
                                    break;
                                case "small":
                                    l += "pt-8 lg:pt-12 ";
                                    break;
                                case "medium":
                                    l += "pt-12 lg:pt-20 ";
                                    break;
                                case "large":
                                    l += "pt-16 lg:pt-32 ";
                                    break;
                                default:
                                    l += "pt-12 lg:pt-14 xl:pt-20 "
                            }
                            switch (null === e || void 0 === e ? void 0 : e.bottom) {
                                case "none":
                                    l += "pb-0";
                                    break;
                                case "small":
                                    l += "pb-8 lg:pb-12";
                                    break;
                                case "medium":
                                    l += "pb-12 lg:pb-20";
                                    break;
                                case "large":
                                    l += "pb-16 lg:pb-32";
                                    break;
                                default:
                                    l += "pb-12 lg:pb-14 xl:pb-20"
                            }
                            return l
                        }(null === s || void 0 === s ? void 0 : s.spacing)),
                        children: [(0, i.jsx)("div", {
                            className: (0, r.AK)(("carousel" === (null === s || void 0 === s ? void 0 : s.style) || (null === s || void 0 === s ? void 0 : s.fullWidth)) && "container mx-auto"),
                            children: m && (0, i.jsx)("h2", {
                                className: (0, r.AK)("heading-large mb-6", "text-".concat(f)),
                                style: (0, t.Z)({
                                    color: N
                                }, (0, r.j2)(a)),
                                children: m
                            })
                        }), (0, i.jsx)("div", {
                            className: (0, r.AK)("carousel" === (null === s || void 0 === s ? void 0 : s.style) && "gallery-carousel", "carousel" !== (null === s || void 0 === s ? void 0 : s.style) && !(null === s || void 0 === s ? void 0 : s.noGutters) && (null === s || void 0 === s ? void 0 : s.fullWidth) && "md:px-6"),
                            children: "carousel" === (null === s || void 0 === s ? void 0 : s.style) ? (0, i.jsx)(i.Fragment, {
                                children: (null === h || void 0 === h ? void 0 : h.length) > 0 && (0, i.jsx)(u(), {
                                    cellSpacing: M ? 40 : B ? 32 : 12,
                                    cellAlign: "center",
                                    slidesToShow: function(e) {
                                        return "1:1" === e ? Q ? 3 : M ? 2.5 : 1.25 : "2:3" === e ? Q ? 4 : S ? 3.5 : M ? 3 : B ? 2.5 : 1.5 : "3:2" === e && Q ? 1.75 : S ? 1.5 : M ? 1.25 : 1.15
                                    }(b),
                                    wrapAround: !0,
                                    transitionMode: "scroll",
                                    enableKeyboardControls: !0,
                                    keyCodeConfig: {
                                        previousSlide: [37],
                                        nextSlide: [39]
                                    },
                                    defaultControlsConfig: {
                                        nextButtonClassName: B ? "" : "hidden",
                                        nextButtonStyle: {
                                            background: "transparent"
                                        },
                                        nextButtonText: (0, i.jsx)(v.Z, {
                                            className: "w-6 lg:w-12 h-6 lg:h-12"
                                        }),
                                        prevButtonClassName: B ? "" : "hidden",
                                        prevButtonStyle: {
                                            background: "transparent"
                                        },
                                        prevButtonText: (0, i.jsx)(g.Z, {
                                            className: "w-6 lg:w-12 h-6 lg:h-12"
                                        })
                                    },
                                    renderBottomCenterControls: function(e) {
                                        return (0, i.jsx)("ul", {
                                            className: "flex gap-4 lg:gap-5 mt-4 md:mt-10",
                                            children: h.map((function(l, n) {
                                                return (0, i.jsx)("li", {
                                                    children: (0, i.jsx)("button", {
                                                        className: (0, r.AK)("w-2.5 h-2.5 rounded-full transition-all", e.currentSlide === n && "bg-gray-900 ring-4 ring-gray-200", e.currentSlide > n && ("#111827" === N ? "bg-gray-600" : "bg-gray-200"), e.currentSlide < n && ("#111827" === N ? "bg-gray-900" : "bg-gray-50")),
                                                        onClick: function() {
                                                            return e.goToSlide(n)
                                                        }
                                                    })
                                                }, n)
                                            }))
                                        })
                                    },
                                    children: h.map((function(e) {
                                        return (0, i.jsx)("div", {
                                            className: (0, r.AK)("relative overflow-hidden cursor-auto", (0, r.n3)(b), (0, r.yW)(w)),
                                            children: (0, r.QW)(e) && (0, i.jsx)(d(), {
                                                src: (0, r.QW)(e),
                                                layout: "fill",
                                                objectFit: "cover",
                                                alt: e.alt,
                                                loading: "lazy",
                                                onContextMenu: function(e) {
                                                    e.preventDefault()
                                                },
                                                className: (0, r.AK)("w-full h-full object-center object-cover")
                                            })
                                        }, e._id)
                                    }))
                                })
                            }) : (0, i.jsx)(i.Fragment, {
                                children: 1 === (null === h || void 0 === h ? void 0 : h.length) && (0, i.jsx)("div", {
                                    className: (0, r.AK)(!(null === s || void 0 === s ? void 0 : s.fullWidth) && "max-w-3xl"),
                                    children: (0, i.jsx)("div", {
                                        className: (0, r.AK)("relative overflow-hidden", (0, r.n3)(b), G()),
                                        onClick: function() {
                                            return Z(0)
                                        },
                                        children: (0, r.QW)(h[0]) && (0, i.jsx)(d(), {
                                            src: (0, r.QW)(h[0]),
                                            layout: "fill",
                                            objectFit: "cover",
                                            alt: h[0].alt,
                                            onContextMenu: function(e) {
                                                e.preventDefault()
                                            },
                                            className: (0, r.AK)("w-full h-full object-center object-cover", (0, r.yW)(w))
                                        })
                                    })
                                }) || 2 === (null === h || void 0 === h ? void 0 : h.length) && (0, i.jsx)("div", {
                                    className: (0, r.AK)("grid grid-cols-1 md:grid-cols-2", !(null === s || void 0 === s ? void 0 : s.noGutters) && "gap-6 md:gap-10"),
                                    children: h.map((function(e, l) {
                                        return (0, i.jsx)("div", {
                                            className: (0, r.AK)("relative overflow-hidden", (0, r.n3)(b), G()),
                                            onClick: function() {
                                                return Z(l)
                                            },
                                            children: (0, r.QW)(e) && (0, i.jsx)(d(), {
                                                src: (0, r.QW)(e),
                                                layout: "fill",
                                                objectFit: "cover",
                                                alt: e.alt,
                                                onContextMenu: function(e) {
                                                    e.preventDefault()
                                                },
                                                className: (0, r.AK)("w-full h-full object-center object-cover", (0, r.yW)(w))
                                            })
                                        }, l)
                                    }))
                                }) || (3 === (null === h || void 0 === h ? void 0 : h.length) || 6 === (null === h || void 0 === h ? void 0 : h.length) || 9 === (null === h || void 0 === h ? void 0 : h.length) || 12 === (null === h || void 0 === h ? void 0 : h.length)) && (0, i.jsx)("div", {
                                    className: (0, r.AK)("grid grid-cols-1 lg:grid-cols-3", !(null === s || void 0 === s ? void 0 : s.noGutters) && "gap-6 md:gap-10 mb-6 md:mb-10"),
                                    children: h.map((function(e, l) {
                                        return (0, i.jsx)("div", {
                                            className: (0, r.AK)("relative overflow-hidden", (0, r.n3)(b), G()),
                                            onClick: function() {
                                                return Z(l)
                                            },
                                            children: (0, r.QW)(e) && (0, i.jsx)(d(), {
                                                src: (0, r.QW)(e),
                                                layout: "fill",
                                                objectFit: "cover",
                                                alt: e.alt,
                                                onContextMenu: function(e) {
                                                    e.preventDefault()
                                                },
                                                className: (0, r.AK)("w-full h-full object-center object-cover", (0, r.yW)(w))
                                            })
                                        }, l)
                                    }))
                                }) || 4 === (null === h || void 0 === h ? void 0 : h.length) && (0, i.jsx)("div", {
                                    className: (0, r.AK)("grid grid-cols-1 md:grid-cols-2", !(null === s || void 0 === s ? void 0 : s.noGutters) && "gap-6 md:gap-10"),
                                    children: h.map((function(e, l) {
                                        return (0, i.jsx)("div", {
                                            className: (0, r.AK)("relative overflow-hidden", (0, r.n3)(b), G()),
                                            onClick: function() {
                                                return Z(l)
                                            },
                                            children: (0, r.QW)(e) && (0, i.jsx)(d(), {
                                                src: (0, r.QW)(e),
                                                layout: "fill",
                                                objectFit: "cover",
                                                alt: e.alt,
                                                onContextMenu: function(e) {
                                                    e.preventDefault()
                                                },
                                                className: (0, r.AK)("w-full h-full object-center object-cover", (0, r.yW)(w))
                                            })
                                        }, l)
                                    }))
                                }) || 5 === (null === h || void 0 === h ? void 0 : h.length) && (0, i.jsxs)(i.Fragment, {
                                    children: [(0, i.jsx)("div", {
                                        className: (0, r.AK)("grid grid-cols-1 lg:grid-cols-3", !(null === s || void 0 === s ? void 0 : s.noGutters) && "gap-6 md:gap-10 mb-6 md:mb-10"),
                                        children: h.slice(0, 3).map((function(e, l) {
                                            return (0, i.jsx)("div", {
                                                className: (0, r.AK)("relative overflow-hidden", (0, r.n3)(b), G()),
                                                onClick: function() {
                                                    return Z(l)
                                                },
                                                children: (0, r.QW)(e) && (0, i.jsx)(d(), {
                                                    src: (0, r.QW)(e),
                                                    layout: "fill",
                                                    objectFit: "cover",
                                                    alt: e.alt,
                                                    onContextMenu: function(e) {
                                                        e.preventDefault()
                                                    },
                                                    className: (0, r.AK)("w-full h-full object-center object-cover", (0, r.yW)(w))
                                                })
                                            }, l)
                                        }))
                                    }), (0, i.jsx)("div", {
                                        className: (0, r.AK)("grid grid-cols-1 md:grid-cols-2", !(null === s || void 0 === s ? void 0 : s.noGutters) && "gap-6 md:gap-10"),
                                        children: h.slice(3, 5).map((function(e, l) {
                                            return (0, i.jsx)("div", {
                                                className: (0, r.AK)("relative overflow-hidden", (0, r.n3)(b), G()),
                                                onClick: function() {
                                                    return Z(l)
                                                },
                                                children: (0, r.QW)(e) && (0, i.jsx)(d(), {
                                                    src: (0, r.QW)(e),
                                                    layout: "fill",
                                                    objectFit: "cover",
                                                    alt: e.alt,
                                                    onContextMenu: function(e) {
                                                        e.preventDefault()
                                                    },
                                                    className: (0, r.AK)("w-full h-full object-center object-cover", (0, r.yW)(w))
                                                })
                                            }, l)
                                        }))
                                    })]
                                }) || 7 === (null === h || void 0 === h ? void 0 : h.length) && (0, i.jsxs)(i.Fragment, {
                                    children: [(0, i.jsx)("div", {
                                        className: (0, r.AK)("grid grid-cols-1 lg:grid-cols-3", !(null === s || void 0 === s ? void 0 : s.noGutters) && "gap-6 md:gap-10 mb-6 md:mb-10"),
                                        children: h.slice(0, 3).map((function(e, l) {
                                            return (0, i.jsx)("div", {
                                                className: (0, r.AK)("relative overflow-hidden", (0, r.n3)(b), G()),
                                                onClick: function() {
                                                    return Z(l)
                                                },
                                                children: (0, r.QW)(e) && (0, i.jsx)(d(), {
                                                    src: (0, r.QW)(e),
                                                    layout: "fill",
                                                    objectFit: "cover",
                                                    alt: e.alt,
                                                    onContextMenu: function(e) {
                                                        e.preventDefault()
                                                    },
                                                    className: (0, r.AK)("w-full h-full object-center object-cover", (0, r.yW)(w))
                                                })
                                            }, l)
                                        }))
                                    }), (0, i.jsx)("div", {
                                        className: (0, r.AK)("grid grid-cols-1 md:grid-cols-2", !(null === s || void 0 === s ? void 0 : s.noGutters) && "gap-6 md:gap-10"),
                                        children: h.slice(3, 7).map((function(e, l) {
                                            return (0, i.jsx)("div", {
                                                className: (0, r.AK)("relative overflow-hidden", (0, r.n3)(b), G()),
                                                onClick: function() {
                                                    return Z(l)
                                                },
                                                children: (0, r.QW)(e) && (0, i.jsx)(d(), {
                                                    src: (0, r.QW)(e),
                                                    layout: "fill",
                                                    objectFit: "cover",
                                                    alt: e.alt,
                                                    onContextMenu: function(e) {
                                                        e.preventDefault()
                                                    },
                                                    className: (0, r.AK)("w-full h-full object-center object-cover", (0, r.yW)(w))
                                                })
                                            }, l)
                                        }))
                                    })]
                                }) || 8 === (null === h || void 0 === h ? void 0 : h.length) && (0, i.jsxs)(i.Fragment, {
                                    children: [(0, i.jsx)("div", {
                                        className: (0, r.AK)("grid grid-cols-1 lg:grid-cols-3", !(null === s || void 0 === s ? void 0 : s.noGutters) && "gap-6 md:gap-10 mb-6 md:mb-10"),
                                        children: h.slice(0, 6).map((function(e, l) {
                                            return (0, i.jsx)("div", {
                                                className: (0, r.AK)("relative overflow-hidden", (0, r.n3)(b), G()),
                                                onClick: function() {
                                                    return Z(l)
                                                },
                                                children: (0, r.QW)(e) && (0, i.jsx)(d(), {
                                                    src: (0, r.QW)(e),
                                                    layout: "fill",
                                                    objectFit: "cover",
                                                    alt: e.alt,
                                                    onContextMenu: function(e) {
                                                        e.preventDefault()
                                                    },
                                                    className: (0, r.AK)("w-full h-full object-center object-cover", (0, r.yW)(w))
                                                })
                                            }, l)
                                        }))
                                    }), (0, i.jsx)("div", {
                                        className: (0, r.AK)("grid grid-cols-1 md:grid-cols-2", !(null === s || void 0 === s ? void 0 : s.noGutters) && "gap-6 md:gap-10"),
                                        children: h.slice(6, 8).map((function(e, l) {
                                            return (0, i.jsx)("div", {
                                                className: (0, r.AK)("relative overflow-hidden", (0, r.n3)(b), G()),
                                                onClick: function() {
                                                    return Z(l)
                                                },
                                                children: (0, r.QW)(e) && (0, i.jsx)(d(), {
                                                    src: (0, r.QW)(e),
                                                    layout: "fill",
                                                    objectFit: "cover",
                                                    alt: e.alt,
                                                    onContextMenu: function(e) {
                                                        e.preventDefault()
                                                    },
                                                    className: (0, r.AK)("w-full h-full object-center object-cover", (0, r.yW)(w))
                                                })
                                            }, l)
                                        }))
                                    })]
                                }) || 10 === (null === h || void 0 === h ? void 0 : h.length) && (0, i.jsxs)(i.Fragment, {
                                    children: [(0, i.jsx)("div", {
                                        className: (0, r.AK)("grid grid-cols-1 lg:grid-cols-3", !(null === s || void 0 === s ? void 0 : s.noGutters) && "gap-6 md:gap-10 mb-6 md:mb-10"),
                                        children: h.slice(0, 6).map((function(e, l) {
                                            return (0, i.jsx)("div", {
                                                className: (0, r.AK)("relative overflow-hidden", (0, r.n3)(b), G()),
                                                onClick: function() {
                                                    return Z(l)
                                                },
                                                children: (0, r.QW)(e) && (0, i.jsx)(d(), {
                                                    src: e.url,
                                                    layout: "fill",
                                                    objectFit: "cover",
                                                    alt: e.alt,
                                                    onContextMenu: function(e) {
                                                        e.preventDefault()
                                                    },
                                                    className: (0, r.AK)("w-full h-full object-center object-cover", (0, r.yW)(w))
                                                })
                                            }, l)
                                        }))
                                    }), (0, i.jsx)("div", {
                                        className: (0, r.AK)("grid grid-cols-1 md:grid-cols-2", !(null === s || void 0 === s ? void 0 : s.noGutters) && "gap-6 md:gap-10"),
                                        children: h.slice(6, 10).map((function(e, l) {
                                            return (0, i.jsx)("div", {
                                                className: (0, r.AK)("relative overflow-hidden", (0, r.n3)(b), G()),
                                                onClick: function() {
                                                    return Z(l)
                                                },
                                                children: (0, r.QW)(e) && (0, i.jsx)(d(), {
                                                    src: (0, r.QW)(e),
                                                    layout: "fill",
                                                    objectFit: "cover",
                                                    alt: e.alt,
                                                    onContextMenu: function(e) {
                                                        e.preventDefault()
                                                    },
                                                    className: (0, r.AK)("w-full h-full object-center object-cover", (0, r.yW)(w))
                                                })
                                            }, l)
                                        }))
                                    })]
                                }) || 11 === (null === h || void 0 === h ? void 0 : h.length) && (0, i.jsxs)(i.Fragment, {
                                    children: [(0, i.jsx)("div", {
                                        className: (0, r.AK)("grid grid-cols-1 lg:grid-cols-3", !(null === s || void 0 === s ? void 0 : s.noGutters) && "gap-6 md:gap-10 mb-6 md:mb-10"),
                                        children: h.slice(0, 9).map((function(e, l) {
                                            return (0, i.jsx)("div", {
                                                className: (0, r.AK)("relative overflow-hidden", (0, r.n3)(b), G()),
                                                onClick: function() {
                                                    return Z(l)
                                                },
                                                children: (0, r.QW)(e) && (0, i.jsx)(d(), {
                                                    src: (0, r.QW)(e),
                                                    layout: "fill",
                                                    objectFit: "cover",
                                                    alt: e.alt,
                                                    onContextMenu: function(e) {
                                                        e.preventDefault()
                                                    },
                                                    className: (0, r.AK)("w-full h-full object-center object-cover", (0, r.yW)(w))
                                                })
                                            }, l)
                                        }))
                                    }), (0, i.jsx)("div", {
                                        className: (0, r.AK)("grid grid-cols-1 md:grid-cols-2", !(null === s || void 0 === s ? void 0 : s.noGutters) && "gap-6 md:gap-10"),
                                        children: h.slice(9, 11).map((function(e, l) {
                                            return (0, i.jsx)("div", {
                                                className: (0, r.AK)("relative overflow-hidden", (0, r.n3)(b), G()),
                                                onClick: function() {
                                                    return Z(l)
                                                },
                                                children: (0, r.QW)(e) && (0, i.jsx)(d(), {
                                                    src: (0, r.QW)(e),
                                                    layout: "fill",
                                                    objectFit: "cover",
                                                    alt: e.alt,
                                                    onContextMenu: function(e) {
                                                        e.preventDefault()
                                                    },
                                                    className: (0, r.AK)("w-full h-full object-center object-cover", (0, r.yW)(w))
                                                })
                                            }, l)
                                        }))
                                    })]
                                })
                            })
                        })]
                    }), (null === s || void 0 === s ? void 0 : s.allowFullscreen) && (0, i.jsx)(x, {
                        website: a,
                        pictures: h,
                        selected: W,
                        aspectRatio: b,
                        cornerRadius: (0, r.yW)(w),
                        background: y,
                        open: k,
                        setOpen: C
                    })]
                })
            }
        },
        399: function(e, l, n) {
            n.d(l, {
                Z: function() {
                    return o
                }
            });
            var t = n(67294);

            function o(e) {
                var l, n, o = (0, t.useState)(0),
                    i = o[0],
                    r = o[1],
                    c = (0, t.useState)([0, 0]),
                    a = c[0],
                    d = c[1];
                return (0, t.useEffect)((function() {
                    var e = function() {
                        d([window.innerWidth, window.innerHeight])
                    };
                    return window.addEventListener("resize", e), e(),
                        function() {
                            return window.removeEventListener("resize", e)
                        }
                }), []), (0, t.useEffect)((function() {
                    var l;
                    e && r(1 === e.idx ? (null === (l = null === document || void 0 === document ? void 0 : document.getElementById("website-header")) || void 0 === l ? void 0 : l.offsetHeight) || 80 : 0)
                }), [e, a]), {
                    minHeight: (null === e || void 0 === e || null === (l = e.spacing) || void 0 === l ? void 0 : l.minHeight) ? "calc(".concat("min-h-screen" === (null === e || void 0 === e || null === (n = e.spacing) || void 0 === n ? void 0 : n.minHeight) ? "100vh" : "240px", " - ").concat((null === e || void 0 === e ? void 0 : e.combineWithHeader) ? 0 : i, "px)") : "240px",
                    headerHeight: i
                }
            }
        }
    }
]);