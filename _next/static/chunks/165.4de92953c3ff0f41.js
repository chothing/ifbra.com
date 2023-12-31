"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [165], {
        3517: function(l, e, o) {
            o.d(e, {
                IP: function() {
                    return t
                },
                dF: function() {
                    return s
                },
                hA: function() {
                    return a
                }
            });
            var i = o(85893),
                n = o(31996);
            o(67294);

            function s(l) {
                switch (null === l || void 0 === l ? void 0 : l.type) {
                    case "color":
                    case "gradient":
                        return null === l || void 0 === l ? void 0 : l.color;
                    case "image":
                        var e, o, i;
                        return (null === l || void 0 === l || null === (e = l.overlay) || void 0 === e || null === (o = e.color) || void 0 === o ? void 0 : o.includes("rgba")) ? (0, n.s)(l.overlay.color) : null === l || void 0 === l || null === (i = l.overlay) || void 0 === i ? void 0 : i.color;
                    default:
                        return l
                }
            }

            function t(l) {
                switch (null === l || void 0 === l ? void 0 : l.type) {
                    case "color":
                        return {
                            backgroundColor: l.color
                        };
                    case "gradient":
                        var e, o, i;
                        return {
                            backgroundImage: "linear-gradient(".concat(null !== (e = l.direction) && void 0 !== e ? e : "180deg", ", ").concat(null !== (o = l.color) && void 0 !== o ? o : "#FFFFFF", ", ").concat(null !== (i = l.color2) && void 0 !== i ? i : "#D1D5DB", ")")
                        };
                    case "image":
                        var n, s;
                        return {
                            backgroundImage: "url(".concat((null === (n = l.image) || void 0 === n ? void 0 : n.preview) || (null === (s = l.image) || void 0 === s ? void 0 : s.url) || l.image, ")"),
                            backgroundPosition: "".concat(l.imagePositionX || "center", " ").concat(l.imagePositionY || "center"),
                            backgroundSize: "cover"
                        };
                    default:
                        return {
                            backgroundColor: l
                        }
                }
            }
            var a = function(l) {
                var e, o, s, t, a, d = l.background,
                    r = (null === d || void 0 === d || null === (e = d.overlay) || void 0 === e ? void 0 : e.color.includes("rgba")) ? (0, n.s)(null === d || void 0 === d || null === (o = d.overlay) || void 0 === o ? void 0 : o.color) : null === d || void 0 === d || null === (s = d.overlay) || void 0 === s ? void 0 : s.color;
                return "image" === (null === d || void 0 === d ? void 0 : d.type) && d.overlay ? (0, i.jsx)("div", {
                    className: (0, n.AK)("w-full h-full absolute top-0 left-0 z-0"),
                    style: {
                        backgroundColor: (0, n.mR)(null !== r && void 0 !== r ? r : "#000000", null !== (a = null === d || void 0 === d || null === (t = d.overlay) || void 0 === t ? void 0 : t.amount) && void 0 !== a ? a : 50)
                    }
                }) : null
            }
        },
        165: function(l, e, o) {
            o.r(e), o.d(e, {
                default: function() {
                    return y
                }
            });
            var i = o(14251),
                n = o(52875),
                s = o(85893),
                t = o(31996),
                a = o(67294),
                d = o(41664),
                r = o.n(d),
                c = o(90387),
                u = o(52077),
                v = o(90434),
                g = o(41984),
                m = o(43751),
                h = o(17258),
                f = o(22872),
                x = o(74007),
                p = o(3517),
                b = o(75654),
                j = [{
                    id: "facebook",
                    host: "facebook.com"
                }, {
                    id: "twitter",
                    host: "twitter.com"
                }, {
                    id: "linkedin",
                    host: "linkedin.com"
                }, {
                    id: "youtube",
                    host: "youtube.com"
                }, {
                    id: "pinterest",
                    host: "pinterest.com"
                }, {
                    id: "instagram",
                    host: "instagram.com"
                }, {
                    id: "tiktok",
                    host: "tiktok.com"
                }, {
                    id: "thumbtack",
                    host: "thumbtack.com"
                }, {
                    id: "homeadvisor",
                    host: "homeadvisor.com"
                }, {
                    id: "angi",
                    host: "angi.com"
                }, {
                    id: "behance",
                    host: "behance.net"
                }, {
                    id: "dribbble",
                    host: "dribbble.com"
                }];

            function y(l) {
                var e, o, d, y, N, w = l.website,
                    k = (0, a.useState)(!1),
                    F = k[0],
                    D = k[1],
                    A = (0, a.useState)(""),
                    Z = A[0],
                    O = A[1],
                    P = (0, a.useState)(null),
                    C = P[0],
                    _ = P[1],
                    S = (0, c.useRouter)(),
                    L = null === w || void 0 === w ? void 0 : w.footer,
                    R = null !== (y = null === L || void 0 === L ? void 0 : L.background) && void 0 !== y ? y : "#FFFFFF",
                    K = (0, t.$O)((0, p.dF)(R));
                L && L.showName && (null === L.businessName || void 0 === L.businessName) && (L.businessName = null === w || void 0 === w || null === (N = w.Business) || void 0 === N ? void 0 : N.name);
                !L || null !== L.businessAddress && void 0 !== L.businessAddress || (L.businessAddress = "");
                var z = null === w || void 0 === w ? void 0 : w.header,
                    I = null === w || void 0 === w || null === (e = w.pages) || void 0 === e ? void 0 : e.find((function(l) {
                        return !l.slug && l.default
                    })),
                    E = null === (d = null === (o = w.pages) || void 0 === o ? void 0 : o.filter((function(l) {
                        return !0 === l.showOnFooter || void 0 === l.showOnFooter
                    }))) || void 0 === d ? void 0 : d.map((function(l) {
                        var e = {
                            href: "/".concat(l.slug || ""),
                            name: l.label,
                            current: S.asPath === "/".concat(l.slug || "") || S.asPath.includes("/".concat(l.slug, "/")),
                            type: l.type,
                            forceRender: l.forceRender
                        };
                        return "parent" === e.type && (e.nests = w.pages.filter((function(e) {
                            return e.Parent === l._id
                        })).map((function(e) {
                            return {
                                href: "/".concat(l.slug, "/").concat(e.slug || ""),
                                name: e.label,
                                current: S.asPath === "/".concat(l.slug, "/").concat(e.slug || ""),
                                forceRender: e.forceRender
                            }
                        })), 0 === e.nests.length) ? null : e
                    })).filter((function(l) {
                        return null !== l
                    })),
                    M = function() {
                        var l, e, o, n, a, d, r, c;
                        return L.showLogo && "branding" === L.source && (null === w || void 0 === w ? void 0 : w.logo) ? (0, s.jsxs)(s.Fragment, {
                            children: [(0, s.jsx)("img", {
                                className: "hidden lg:block transition-all object-contain",
                                src: null === w || void 0 === w || null === (l = w.logo) || void 0 === l ? void 0 : l.url,
                                alt: null === L || void 0 === L ? void 0 : L.businessName,
                                style: {
                                    height: (null === L || void 0 === L || null === (e = L.logoDesktop) || void 0 === e ? void 0 : e.height) + "px"
                                }
                            }), (0, s.jsx)("img", {
                                className: "lg:hidden transition-all object-contain",
                                src: null === w || void 0 === w || null === (o = w.logo) || void 0 === o ? void 0 : o.url,
                                alt: null === L || void 0 === L ? void 0 : L.businessName,
                                style: {
                                    height: (null === L || void 0 === L || null === (n = L.logoMobile) || void 0 === n ? void 0 : n.height) + "px"
                                }
                            })]
                        }) : L.showLogo && "upload" === L.source && (null === L || void 0 === L ? void 0 : L.customLogo) ? (0, s.jsxs)(s.Fragment, {
                            children: [(0, s.jsx)("img", {
                                className: "hidden lg:block transition-all object-contain",
                                src: null === L || void 0 === L || null === (a = L.customLogo) || void 0 === a ? void 0 : a.url,
                                alt: null === L || void 0 === L ? void 0 : L.businessName,
                                style: {
                                    height: (null === L || void 0 === L || null === (d = L.logoDesktop) || void 0 === d ? void 0 : d.height) + "px"
                                }
                            }), (0, s.jsx)("img", {
                                className: "lg:hidden transition-all object-contain",
                                src: null === L || void 0 === L || null === (r = L.customLogo) || void 0 === r ? void 0 : r.url,
                                alt: null === L || void 0 === L ? void 0 : L.businessName,
                                style: {
                                    height: (null === L || void 0 === L || null === (c = L.logoMobile) || void 0 === c ? void 0 : c.height) + "px"
                                }
                            })]
                        }) : L.businessName ? (0, s.jsx)("div", {
                            className: "max-w-full overflow-hidden grid",
                            children: (0, s.jsx)("h3", {
                                className: (0, t.AK)("heading-medium overflow-hidden whitespace-nowrap overflow-ellipsis", "simple-right" !== (null === L || void 0 === L ? void 0 : L.style) && "simple-center" !== (null === L || void 0 === L ? void 0 : L.style) && "xl:heading-small"),
                                style: (0, i.Z)({
                                    color: K
                                }, (0, t.j2)(w)),
                                children: null === L || void 0 === L ? void 0 : L.businessName
                            })
                        }) : (0, s.jsx)(s.Fragment, {})
                    },
                    B = function() {
                        if (0 === (null === E || void 0 === E ? void 0 : E.length)) return (0, s.jsx)(s.Fragment, {});
                        var l = (0, p.dF)(R),
                            e = (0, t.h)(l, -10);
                        return e !== K && e !== l || (e = (0, t.h)(l, 10)), (0, s.jsx)("ul", {
                            className: (0, t.AK)("flex flex-col lg:flex-row items-start lg:items-center flex-wrap gap-6", "stacked-right" === (null === L || void 0 === L ? void 0 : L.style) && "justify-end items-end", ("stacked-center" === (null === L || void 0 === L ? void 0 : L.style) || "simple-center" === (null === L || void 0 === L ? void 0 : L.style)) && "justify-center items-center"),
                            style: {
                                color: K
                            },
                            children: null === E || void 0 === E ? void 0 : E.filter((function(l) {
                                return "nested" !== l.type
                            })).map((function(l) {
                                var o;
                                return (0, s.jsx)("li", {
                                    className: "border-b-2",
                                    style: {
                                        borderColor: l.current ? "".concat(K) : "transparent"
                                    },
                                    children: "parent" === l.type ? (0, s.jsxs)(s.Fragment, {
                                        children: [(0, s.jsx)(x.Z, {
                                            className: "!hidden lg:!inline-block",
                                            openUp: !0,
                                            buttonClassName: "inline-flex items-center gap-2 pb-1.5",
                                            itemsContainerClass: "!pl-6 !pr-12 w-max max-w-120 !max-h-50 no-scrollbar",
                                            button: (0, s.jsxs)(s.Fragment, {
                                                children: [(0, s.jsx)("span", {
                                                    className: "body-normal whitespace-nowrap",
                                                    children: l.name
                                                }), (0, s.jsx)(v.Z, {
                                                    className: "w-4 h-4"
                                                })]
                                            }),
                                            itemsContainerStyle: {
                                                backgroundColor: e,
                                                color: K
                                            },
                                            children: null === (o = l.nests) || void 0 === o ? void 0 : o.map((function(l) {
                                                return (0, s.jsx)(h.v.Item, {
                                                    children: (0, s.jsx)(r(), {
                                                        href: l.href,
                                                        legacyBehavior: !1,
                                                        className: "block py-2 body-normal border-b-2",
                                                        style: {
                                                            borderColor: l.current ? "".concat(K) : "transparent"
                                                        },
                                                        children: l.name
                                                    })
                                                }, "page-link-".concat(l.href))
                                            }))
                                        }), (0, s.jsxs)("button", {
                                            className: "inline-flex lg:hidden items-center gap-2",
                                            onClick: function() {
                                                D(!0), _(l.nests)
                                            },
                                            children: [(0, s.jsx)("span", {
                                                className: "body-normal",
                                                children: l.name
                                            }), (0, s.jsx)(g.Z, {
                                                className: "w-4 h-4",
                                                "aria-hidden": "true"
                                            })]
                                        })]
                                    }) : (0, s.jsx)(r(), {
                                        href: l.href,
                                        children: (0, s.jsx)("a", {
                                            className: "block pb-1.5 body-normal",
                                            target: l.forceRender ? "_parent" : "_self",
                                            children: l.name
                                        })
                                    })
                                }, "page-link-".concat(l.href))
                            }))
                        })
                    },
                    V = function() {
                        return (null === w || void 0 === w ? void 0 : w.social) && 0 !== (null === w || void 0 === w ? void 0 : w.social.length) ? (0, s.jsx)("ul", {
                            className: (0, t.AK)("flex items-center gap-x-4 gap-y-2 flex-wrap", "stacked-right" === (null === L || void 0 === L ? void 0 : L.style) && "justify-end", ("stacked-center" === (null === L || void 0 === L ? void 0 : L.style) || "simple-center" === (null === L || void 0 === L ? void 0 : L.style)) && "justify-center"),
                            children: Array.isArray(w.social) && w.social.map((function(l, e) {
                                var o = j.find((function(e) {
                                        return e.id === l.type
                                    })),
                                    i = l.link;
                                return "custom" !== l.type && (i = (i = l.link.replace(/[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\//gi, "").replace(/https?:/g, "").replace(/^\/\/?/g, "")).replace(null === o || void 0 === o ? void 0 : o.host, ""), i = "https://".concat(null === o || void 0 === o ? void 0 : o.host, "/").concat(i)), (0, s.jsx)("li", {
                                    children: (0, s.jsx)(r(), {
                                        href: i,
                                        children: (0, s.jsx)("a", {
                                            target: "_blank",
                                            children: (0, s.jsx)(b.Q, {
                                                icon: l,
                                                color: K,
                                                settings: w.socialSettings
                                            })
                                        })
                                    })
                                }, "social-icon-header-".concat(e))
                            }))
                        }) : (0, s.jsx)(s.Fragment, {})
                    },
                    U = function() {
                        return !1 === L.madeWithDurable ? (0, s.jsx)(s.Fragment, {}) : (0, s.jsxs)("p", {
                            className: (0, t.AK)("body-normal lg:text-right whitespace-nowrap", ("stacked-center" === (null === L || void 0 === L ? void 0 : L.style) || "simple-center" === (null === L || void 0 === L ? void 0 : L.style)) && "!text-center", "stacked-left" === (null === L || void 0 === L ? void 0 : L.style) && "!text-left"),
                            children: [(0, s.jsx)("span", {
                                children: "Made with\xa0"
                            }), (0, s.jsx)(r(), {
                                href: "https://durable.co?referrer=".concat(encodeURIComponent(Z)),
                                children: (0, s.jsx)("a", {
                                    target: "_blank",
                                    className: "underline",
                                    style: {
                                        color: K
                                    },
                                    children: "Durable"
                                })
                            })]
                        })
                    },
                    Q = function() {
                        D(!1), _(null)
                    };
                return (0, a.useEffect)((function() {
                    S && Q()
                }), [S]), (0, a.useEffect)((function() {
                    O(null === location || void 0 === location ? void 0 : location.origin)
                }), []), (0, s.jsxs)(s.Fragment, {
                    children: [(0, s.jsxs)("footer", {
                        id: "website-footer",
                        className: "flex-1 relative z-10",
                        style: (0, n.Z)((0, i.Z)({}, (0, p.IP)(R)), {
                            color: K
                        }),
                        children: [(0, s.jsx)(p.hA, {
                            background: R
                        }), (0, s.jsx)("div", {
                            className: (0, t.AK)("relative z-10 container mx-auto", function(l) {
                                var e = "";
                                switch (null === l || void 0 === l ? void 0 : l.top) {
                                    case "none":
                                        e += "pt-0 ";
                                        break;
                                    case "small":
                                        e += "pt-8 lg:pt-12 ";
                                        break;
                                    case "medium":
                                        e += "pt-12 lg:pt-20 ";
                                        break;
                                    case "large":
                                        e += "pt-16 lg:pt-32 ";
                                        break;
                                    default:
                                        e += "pt-12 lg:pt-14 xl:pt-20 "
                                }
                                switch (null === l || void 0 === l ? void 0 : l.bottom) {
                                    case "none":
                                        e += "pb-0";
                                        break;
                                    case "small":
                                        e += "pb-8 lg:pb-12";
                                        break;
                                    case "medium":
                                        e += "pb-12 lg:pb-20";
                                        break;
                                    case "large":
                                        e += "pb-16 lg:pb-32";
                                        break;
                                    default:
                                        e += "pb-12 lg:pb-14 xl:pb-20"
                                }
                                return e
                            }(null === L || void 0 === L ? void 0 : L.spacing)),
                            children: "split-left" === (null === L || void 0 === L ? void 0 : L.style) ? (0, s.jsxs)("div", {
                                className: "flex flex-col lg:flex-row lg:justify-between gap-12",
                                children: [(0, s.jsxs)("div", {
                                    className: "flex flex-col items-start gap-12 lg:gap-6",
                                    children: [M(), (0, s.jsxs)("div", {
                                        className: "flex flex-col lg:flex-row lg:items-center gap-12",
                                        children: [B(), L.showSocial && V(), (null === L || void 0 === L ? void 0 : L.button) && (0, s.jsx)(u.Z, {
                                            className: "lg !py-2",
                                            button: L.button,
                                            website: w
                                        })]
                                    })]
                                }), (0, s.jsxs)("div", {
                                    className: "flex flex-col gap-6",
                                    children: [!!L.additionalDetails && (0, s.jsx)("div", {
                                        className: "body-normal lg:text-right",
                                        style: {
                                            color: K
                                        },
                                        children: null === L || void 0 === L ? void 0 : L.additionalDetails
                                    }), U()]
                                })]
                            }) : "stacked-right" === L.style ? (0, s.jsxs)("div", {
                                className: "flex flex-col justify-end items-end gap-12 text-right",
                                children: [(0, s.jsxs)("div", {
                                    className: "flex flex-col items-end gap-6",
                                    children: [M(), !!L.additionalDetails && (0, s.jsx)("div", {
                                        className: "body-normal",
                                        style: {
                                            color: K
                                        },
                                        children: null === L || void 0 === L ? void 0 : L.additionalDetails
                                    })]
                                }), (0, s.jsxs)("div", {
                                    className: "flex flex-col justify-end gap-12 lg:gap-14",
                                    children: [B(), L.showSocial && V(), (null === L || void 0 === L ? void 0 : L.button) && (0, s.jsx)("div", {
                                        children: (0, s.jsx)(u.Z, {
                                            className: "lg !py-2",
                                            button: L.button,
                                            website: w
                                        })
                                    })]
                                }), U()]
                            }) : "stacked-center" === L.style ? (0, s.jsxs)("div", {
                                className: "flex flex-col justify-center gap-12 text-center",
                                children: [(0, s.jsxs)("div", {
                                    className: "flex flex-col items-center gap-6",
                                    children: [M(), !!L.additionalDetails && (0, s.jsx)("div", {
                                        className: "body-normal",
                                        style: {
                                            color: K
                                        },
                                        children: null === L || void 0 === L ? void 0 : L.additionalDetails
                                    })]
                                }), (0, s.jsxs)("div", {
                                    className: "flex flex-col justify-center gap-12 lg:gap-14",
                                    children: [B(), L.showSocial && V(), (null === L || void 0 === L ? void 0 : L.button) && (0, s.jsx)("div", {
                                        children: (0, s.jsx)(u.Z, {
                                            className: "lg !py-2",
                                            button: L.button,
                                            website: w
                                        })
                                    })]
                                }), U()]
                            }) : "stacked-left" === L.style ? (0, s.jsxs)("div", {
                                className: "flex flex-col items-start gap-12 text-left",
                                children: [(0, s.jsxs)("div", {
                                    className: "flex flex-col items-start gap-6",
                                    children: [M(), !!L.additionalDetails && (0, s.jsx)("div", {
                                        className: "body-normal",
                                        style: {
                                            color: K
                                        },
                                        children: null === L || void 0 === L ? void 0 : L.additionalDetails
                                    })]
                                }), (0, s.jsxs)("div", {
                                    className: "flex flex-col items-start gap-12 lg:gap-14",
                                    children: [B(), L.showSocial && V(), (null === L || void 0 === L ? void 0 : L.button) && (0, s.jsx)("div", {
                                        children: (0, s.jsx)(u.Z, {
                                            className: "lg !py-2",
                                            button: L.button,
                                            website: w
                                        })
                                    })]
                                }), U()]
                            }) : "simple-right" === L.style ? (0, s.jsxs)("div", {
                                className: "flex flex-col lg:flex-row gap-12",
                                children: [(0, s.jsxs)("div", {
                                    className: (0, t.AK)("flex flex-col lg:flex-row items-start lg:items-center gap-6", (null === L || void 0 === L ? void 0 : L.showLogo) ? "lg:gap-10" : "lg:gap-2"),
                                    children: [M(), !!L.additionalDetails && (0, s.jsxs)(s.Fragment, {
                                        children: [!(null === L || void 0 === L ? void 0 : L.showLogo) && (0, s.jsx)("span", {
                                            className: "hidden lg:inline-block",
                                            children: "\xb7"
                                        }), (0, s.jsx)("div", {
                                            className: "body-normal",
                                            style: {
                                                color: K
                                            },
                                            children: null === L || void 0 === L ? void 0 : L.additionalDetails
                                        })]
                                    })]
                                }), (0, s.jsxs)("div", {
                                    className: "flex-1 w-full flex flex-col lg:flex-row lg:items-center gap-12 lg:gap-14 justify-end",
                                    children: [(0, s.jsxs)("div", {
                                        className: "flex flex-col lg:flex-row items-start lg:items-center lg:justify-end gap-12 lg:gap-14 w-full lg:w-auto max-w-[100vw]",
                                        children: [B(), L.showSocial && V(), (null === L || void 0 === L ? void 0 : L.button) && (0, s.jsx)(u.Z, {
                                            className: "lg !py-2",
                                            button: L.button,
                                            website: w
                                        })]
                                    }), U()]
                                })]
                            }) : "simple-center" === L.style ? (0, s.jsxs)("div", {
                                className: "flex flex-col justify-center gap-12 text-center",
                                children: [(0, s.jsxs)("div", {
                                    className: (0, t.AK)("flex flex-col justify-center lg:items-center gap-6", (null === L || void 0 === L ? void 0 : L.showLogo) ? "lg:gap-6" : "lg:flex-row lg:gap-2"),
                                    children: [M(), !!L.additionalDetails && (0, s.jsxs)(s.Fragment, {
                                        children: [!(null === L || void 0 === L ? void 0 : L.showLogo) && (0, s.jsx)("span", {
                                            className: "hidden lg:inline-block",
                                            children: "\xb7"
                                        }), (0, s.jsx)("div", {
                                            className: "body-normal",
                                            style: {
                                                color: K
                                            },
                                            children: null === L || void 0 === L ? void 0 : L.additionalDetails
                                        })]
                                    })]
                                }), (0, s.jsxs)("div", {
                                    className: "flex flex-col lg:flex-row lg:items-center justify-center gap-12 lg:gap-14",
                                    children: [B(), L.showSocial && V(), (null === L || void 0 === L ? void 0 : L.button) && (0, s.jsx)(u.Z, {
                                        className: "lg !py-2",
                                        button: L.button,
                                        website: w
                                    }), U()]
                                })]
                            }) : (0, s.jsxs)("div", {
                                className: "flex flex-col lg:flex-row items-start lg:justify-between gap-12",
                                children: [(0, s.jsxs)("div", {
                                    className: "flex flex-col gap-6 items-start lg:max-w-[30vw]",
                                    children: [M(), !!(null === L || void 0 === L ? void 0 : L.additionalDetails) && (0, s.jsx)("div", {
                                        className: "body-normal",
                                        style: {
                                            color: K
                                        },
                                        children: null === L || void 0 === L ? void 0 : L.additionalDetails
                                    })]
                                }), (0, s.jsxs)("div", {
                                    className: "flex flex-col gap-12 lg:gap-6",
                                    children: [(0, s.jsxs)("div", {
                                        className: "flex flex-col lg:flex-row gap-12 lg:items-center lg:justify-end",
                                        children: [B(), L.showSocial && V(), (null === L || void 0 === L ? void 0 : L.button) && (0, s.jsx)(u.Z, {
                                            className: "lg !py-2",
                                            button: L.button,
                                            website: w
                                        })]
                                    }), U()]
                                })]
                            })
                        })]
                    }), (0, s.jsx)(f.V, {
                        open: F,
                        onClose: Q,
                        className: "relative z-[3000] h-full",
                        children: (0, s.jsxs)(f.V.Panel, {
                            className: "fixed inset-0 flex flex-col h-full",
                            style: (0, n.Z)((0, i.Z)({}, (0, p.IP)(R)), {
                                color: K
                            }),
                            children: [(0, s.jsx)(p.hA, {
                                background: R
                            }), (0, s.jsxs)("div", {
                                className: "flex-1 flex flex-col h-full container mx-auto pb-6",
                                children: [(0, s.jsxs)("div", {
                                    className: (0, t.AK)("items-center gap-3 py-6", "left" !== (null === z || void 0 === z ? void 0 : z.style) ? "grid" : "flex justify-between"),
                                    style: "left" !== (null === z || void 0 === z ? void 0 : z.style) ? {
                                        gridTemplateColumns: "1fr auto 1fr"
                                    } : {},
                                    children: [("center" === (null === z || void 0 === z ? void 0 : z.style) || "full-center" === (null === z || void 0 === z ? void 0 : z.style)) && (0, s.jsx)("div", {}), function() {
                                        var l, e, o, n, a, d, c, u;
                                        return (null === z || void 0 === z ? void 0 : z.showLogo) && "branding" === (null === z || void 0 === z ? void 0 : z.source) && (null === w || void 0 === w ? void 0 : w.logo) ? (0, s.jsx)(r(), {
                                            href: "/",
                                            children: (0, s.jsxs)("a", {
                                                target: (null === I || void 0 === I ? void 0 : I.forceRender) ? "_parent" : "_self",
                                                children: [(0, s.jsx)("img", {
                                                    className: "hidden lg:block transition-all object-contain",
                                                    src: null === w || void 0 === w || null === (l = w.logo) || void 0 === l ? void 0 : l.url,
                                                    alt: null === z || void 0 === z ? void 0 : z.siteName,
                                                    style: {
                                                        height: (null === z || void 0 === z || null === (e = z.logoDesktop) || void 0 === e ? void 0 : e.height) + "px"
                                                    }
                                                }), (0, s.jsx)("img", {
                                                    className: "lg:hidden transition-all object-contain",
                                                    src: null === w || void 0 === w || null === (o = w.logo) || void 0 === o ? void 0 : o.url,
                                                    alt: null === z || void 0 === z ? void 0 : z.siteName,
                                                    style: {
                                                        height: (null === z || void 0 === z || null === (n = z.logoMobile) || void 0 === n ? void 0 : n.height) + "px"
                                                    }
                                                })]
                                            })
                                        }) : (null === z || void 0 === z ? void 0 : z.showLogo) && "upload" === (null === z || void 0 === z ? void 0 : z.source) && (null === z || void 0 === z ? void 0 : z.customLogo) ? (0, s.jsx)(r(), {
                                            href: "/",
                                            children: (0, s.jsxs)("a", {
                                                target: (null === I || void 0 === I ? void 0 : I.forceRender) ? "_parent" : "_self",
                                                children: [(0, s.jsx)("img", {
                                                    className: "hidden lg:block transition-all object-contain",
                                                    src: null === z || void 0 === z || null === (a = z.customLogo) || void 0 === a ? void 0 : a.url,
                                                    alt: null === z || void 0 === z ? void 0 : z.siteName,
                                                    style: {
                                                        height: (null === z || void 0 === z || null === (d = z.logoDesktop) || void 0 === d ? void 0 : d.height) + "px"
                                                    }
                                                }), (0, s.jsx)("img", {
                                                    className: "lg:hidden transition-all object-contain",
                                                    src: null === z || void 0 === z || null === (c = z.customLogo) || void 0 === c ? void 0 : c.url,
                                                    alt: null === z || void 0 === z ? void 0 : z.siteName,
                                                    style: {
                                                        height: (null === z || void 0 === z || null === (u = z.logoMobile) || void 0 === u ? void 0 : u.height) + "px"
                                                    }
                                                })]
                                            })
                                        }) : (0, s.jsx)(r(), {
                                            href: "/",
                                            children: (0, s.jsx)("a", {
                                                target: (null === I || void 0 === I ? void 0 : I.forceRender) ? "_parent" : "_self",
                                                children: (0, s.jsx)("h1", {
                                                    className: "heading-small lg:heading-medium overflow-hidden overflow-ellipsis max-w-full",
                                                    style: (0, i.Z)({
                                                        color: K
                                                    }, (0, t.j2)(w)),
                                                    children: null === z || void 0 === z ? void 0 : z.siteName
                                                })
                                            })
                                        })
                                    }(), (0, s.jsx)("div", {
                                        className: "ml-auto lg:hidden",
                                        children: (0, s.jsx)("button", {
                                            className: "inline-flex items-center justify-center p-2 rounded-md focus:outline-none",
                                            style: {
                                                color: K
                                            },
                                            onClick: Q,
                                            children: (0, s.jsx)(m.Z, {
                                                className: "block h-5 w-5",
                                                "aria-hidden": "true"
                                            })
                                        })
                                    })]
                                }), (0, s.jsx)("ul", {
                                    className: (0, t.AK)("flex-1 flex flex-col justify-center gap-3 w-full py-6 overflow-auto", "center" === (null === L || void 0 === L ? void 0 : L.style) || "full-center" === (null === L || void 0 === L ? void 0 : L.style) ? "text-center" : ""),
                                    style: (0, i.Z)({
                                        color: K
                                    }, (0, t.SV)(w)),
                                    children: null === C || void 0 === C ? void 0 : C.map((function(l) {
                                        return (0, s.jsx)("li", {
                                            className: (0, t.AK)("body-large py-2 border-b-2"),
                                            style: {
                                                borderColor: l.current ? "".concat(K) : "transparent"
                                            },
                                            children: (0, s.jsx)(r(), {
                                                href: l.href,
                                                children: (0, s.jsx)("a", {
                                                    className: "block w-full",
                                                    target: l.forceRender ? "_parent" : "_self",
                                                    children: l.name
                                                })
                                            })
                                        }, "page-link-".concat(l.href))
                                    }))
                                })]
                            })]
                        })
                    })]
                })
            }
        },
        52875: function(l, e, o) {
            function i(l, e) {
                return e = null != e ? e : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(e)) : function(l, e) {
                    var o = Object.keys(l);
                    if (Object.getOwnPropertySymbols) {
                        var i = Object.getOwnPropertySymbols(l);
                        e && (i = i.filter((function(e) {
                            return Object.getOwnPropertyDescriptor(l, e).enumerable
                        }))), o.push.apply(o, i)
                    }
                    return o
                }(Object(e)).forEach((function(o) {
                    Object.defineProperty(l, o, Object.getOwnPropertyDescriptor(e, o))
                })), l
            }
            o.d(e, {
                Z: function() {
                    return i
                }
            })
        }
    }
]);