"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [8077], {
        3517: function(e, l, n) {
            n.d(l, {
                IP: function() {
                    return t
                },
                dF: function() {
                    return a
                },
                hA: function() {
                    return s
                }
            });
            var i = n(85893),
                o = n(31996);
            n(67294);

            function a(e) {
                switch (null === e || void 0 === e ? void 0 : e.type) {
                    case "color":
                    case "gradient":
                        return null === e || void 0 === e ? void 0 : e.color;
                    case "image":
                        var l, n, i;
                        return (null === e || void 0 === e || null === (l = e.overlay) || void 0 === l || null === (n = l.color) || void 0 === n ? void 0 : n.includes("rgba")) ? (0, o.s)(e.overlay.color) : null === e || void 0 === e || null === (i = e.overlay) || void 0 === i ? void 0 : i.color;
                    default:
                        return e
                }
            }

            function t(e) {
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
                        var o, a;
                        return {
                            backgroundImage: "url(".concat((null === (o = e.image) || void 0 === o ? void 0 : o.preview) || (null === (a = e.image) || void 0 === a ? void 0 : a.url) || e.image, ")"),
                            backgroundPosition: "".concat(e.imagePositionX || "center", " ").concat(e.imagePositionY || "center"),
                            backgroundSize: "cover"
                        };
                    default:
                        return {
                            backgroundColor: e
                        }
                }
            }
            var s = function(e) {
                var l, n, a, t, s, r = e.background,
                    d = (null === r || void 0 === r || null === (l = r.overlay) || void 0 === l ? void 0 : l.color.includes("rgba")) ? (0, o.s)(null === r || void 0 === r || null === (n = r.overlay) || void 0 === n ? void 0 : n.color) : null === r || void 0 === r || null === (a = r.overlay) || void 0 === a ? void 0 : a.color;
                return "image" === (null === r || void 0 === r ? void 0 : r.type) && r.overlay ? (0, i.jsx)("div", {
                    className: (0, o.AK)("w-full h-full absolute top-0 left-0 z-0"),
                    style: {
                        backgroundColor: (0, o.mR)(null !== d && void 0 !== d ? d : "#000000", null !== (s = null === r || void 0 === r || null === (t = r.overlay) || void 0 === t ? void 0 : t.amount) && void 0 !== s ? s : 50)
                    }
                }) : null
            }
        },
        52077: function(e, l, n) {
            n.d(l, {
                Z: function() {
                    return r
                }
            });
            var i = n(85893),
                o = n(41664),
                a = n.n(o),
                t = n(16494),
                s = n(31996);

            function r(e) {
                var l, n, o, r, d = e.button,
                    c = e.type,
                    u = e.website,
                    v = e.action,
                    m = e.loading,
                    f = e.className,
                    h = (null === u || void 0 === u || null === (l = u.button) || void 0 === l ? void 0 : l.background) || (null === u || void 0 === u ? void 0 : u.secondaryColor),
                    g = {
                        background: "outline" === (null === u || void 0 === u || null === (n = u.button) || void 0 === n ? void 0 : n.style) ? "transparent" : h,
                        borderRadius: isNaN(null === u || void 0 === u || null === (o = u.button) || void 0 === o ? void 0 : o.cornerRadius) ? 8 : u.button.cornerRadius,
                        color: "outline" === (null === u || void 0 === u || null === (r = u.button) || void 0 === r ? void 0 : r.style) ? h : (0, s.$O)(h),
                        border: "2px solid ".concat(h)
                    };
                return v && "function" === typeof v || "submit" === c ? (0, i.jsx)("button", {
                    type: "submit" === c ? "submit" : "button",
                    onClick: v,
                    className: (0, s.AK)("button primary", f),
                    style: g,
                    disabled: m,
                    children: m ? (0, i.jsx)(t.Z, {}) : d.label
                }) : (0, i.jsx)(a(), {
                    href: function(e) {
                        if (e) {
                            if ("email" === e.type) return "mailto:" + e.link;
                            if ("phone" === e.type) return "tel:" + e.link;
                            if ("section" === e.type) return "#" + e.link;
                            if ("page" === e.type) {
                                var l, n, i, o = null === u || void 0 === u || null === (l = u.pages) || void 0 === l ? void 0 : l.find((function(l) {
                                        return l._id === e.page
                                    })),
                                    a = (null === o || void 0 === o ? void 0 : o.Parent) ? null === u || void 0 === u || null === (n = u.pages) || void 0 === n ? void 0 : n.find((function(e) {
                                        return e._id === (null === o || void 0 === o ? void 0 : o.Parent)
                                    })) : null,
                                    t = "";
                                return a && (t += "".concat(a.slug, "/")), t += null !== (i = null === o || void 0 === o ? void 0 : o.slug) && void 0 !== i ? i : "/"
                            }
                            var s, r = null === (s = e.link) || void 0 === s ? void 0 : s.replace(/https?:\/\//gi, "");
                            return r && "#" !== r ? "https://" + r : "#"
                        }
                        return "/"
                    }(d),
                    scroll: "section" !== (null === d || void 0 === d ? void 0 : d.type),
                    children: (0, i.jsx)("a", {
                        className: (0, s.AK)("button primary", f),
                        target: function(e) {
                            var l, n, i, o = null === u || void 0 === u || null === (l = u.pages) || void 0 === l ? void 0 : l.find((function(l) {
                                return l._id === e.page
                            }));
                            return e.newPage ? "_blank" : (null === o || void 0 === o ? void 0 : o.forceRender) ? "_parent" : (null === u || void 0 === u || null === (n = u.button) || void 0 === n ? void 0 : n.target) ? null === u || void 0 === u || null === (i = u.button) || void 0 === i ? void 0 : i.target : "_self"
                        }(d),
                        style: g,
                        children: d.label
                    })
                })
            }
        },
        68077: function(e, l, n) {
            n.r(l), n.d(l, {
                default: function() {
                    return Z
                }
            });
            var i = n(34727),
                o = n(14251),
                a = n(52875),
                t = n(69779),
                s = n(97582),
                r = n(85893),
                d = n(31996),
                c = n(67294),
                u = n(52077),
                v = n(34853);
            var m = c.forwardRef((function(e, l) {
                    return c.createElement("svg", Object.assign({
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 20 20",
                        fill: "currentColor",
                        "aria-hidden": "true",
                        ref: l
                    }, e), c.createElement("path", {
                        fillRule: "evenodd",
                        d: "M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z",
                        clipRule: "evenodd"
                    }))
                })),
                f = n(41664),
                h = n.n(f),
                g = n(57333),
                b = n(14441),
                x = n(80360),
                p = n(33253),
                y = n(30120),
                w = n(9198),
                N = n.n(w),
                j = (n(18698), n(399)),
                F = n(3517),
                k = {
                    name: "",
                    email: "",
                    message: "",
                    idBusiness: null,
                    valid: !0
                };

            function Z(e) {
                var l, n, f, w, Z, C, _, S, A, L = e.id,
                    E = e.block,
                    H = e.website,
                    K = e.apiUrl,
                    P = e.captchaKey,
                    R = (null === E || void 0 === E ? void 0 : E.headline) ? "<h3>".concat(E.headline, "</h3><p>").concat(E.content, "</p>") : null === E || void 0 === E ? void 0 : E.content,
                    M = null === E || void 0 === E ? void 0 : E.align,
                    z = null !== (Z = null === E || void 0 === E ? void 0 : E.background) && void 0 !== Z ? Z : "#FFFFFF",
                    I = (0, d.$O)((0, F.dF)(z)),
                    D = null !== (C = null === E || void 0 === E ? void 0 : E.nameFieldLabel) && void 0 !== C ? C : "Name",
                    B = null !== (_ = null === E || void 0 === E ? void 0 : E.emailFieldLabel) && void 0 !== _ ? _ : "E-mail",
                    O = null !== (S = null === E || void 0 === E ? void 0 : E.messageFieldLabel) && void 0 !== S ? S : "Message",
                    T = null !== (A = null === E || void 0 === E ? void 0 : E.sendButtonLabel) && void 0 !== A ? A : "Send",
                    q = (0, c.useState)(!1),
                    $ = q[0],
                    W = q[1],
                    G = (0, c.useState)((0, a.Z)((0, o.Z)({}, k), {
                        customFields: E.customFields
                    })),
                    J = G[0],
                    U = G[1],
                    V = (0, c.useState)(!1),
                    X = V[0],
                    Y = V[1],
                    Q = (0, c.useState)(null),
                    ee = Q[0],
                    le = Q[1],
                    ne = c.createRef(),
                    ie = new d.bl(K),
                    oe = (0, j.Z)(E).minHeight,
                    ae = (0, F.dF)(z),
                    te = {
                        borderRadius: isNaN(null === H || void 0 === H || null === (l = H.button) || void 0 === l ? void 0 : l.cornerRadius) ? 8 : H.button.cornerRadius,
                        backgroundColor: ae && (0, d.jn)(ae) ? "rgba(255,255,255,0.07)" : "rgba(0,0,0,0.07)",
                        color: I
                    },
                    se = function() {
                        var e = (0, i.Z)((function(e) {
                            var l, n, i, t, r, c, u, v;
                            return (0, s.__generator)(this, (function(s) {
                                switch (s.label) {
                                    case 0:
                                        if (!e) return W(!1), [2];
                                        if (ne.current.reset(), !J.name || !J.email || !(0, d.oH)(J.email) || !J.message) return U((0, a.Z)((0, o.Z)({}, J), {
                                            valid: !1
                                        })), W(!1), [2];
                                        if (E && (null === E || void 0 === E ? void 0 : E.fields) && (null === E || void 0 === E || null === (l = E.fields) || void 0 === l ? void 0 : l.length)) {
                                            n = !0, i = !1, t = void 0;
                                            try {
                                                for (r = E.fields[Symbol.iterator](); !(n = (c = r.next()).done); n = !0)
                                                    if ((u = c.value).required && !J[u.label.toLowerCase()]) return U((0, a.Z)((0, o.Z)({}, J), {
                                                        valid: !1
                                                    })), W(!1), [2]
                                            } catch (m) {
                                                i = !0, t = m
                                            } finally {
                                                try {
                                                    n || null == r.return || r.return()
                                                } finally {
                                                    if (i) throw t
                                                }
                                            }
                                        }
                                        return J.captcha = e, [4, ie.post("/website/send-contact-form", J)];
                                    case 1:
                                        return (v = s.sent()) && !0 === v.status ? (U(k), Y(!0)) : le("Error while sending your message. Try again later."), W(!1), [2]
                                }
                            }))
                        }));
                        return function(l) {
                            return e.apply(this, arguments)
                        }
                    }(),
                    re = function(e, l) {
                        var n = [];
                        (null === J || void 0 === J ? void 0 : J.customFields) && (n = (0, t.Z)(J.customFields));
                        var i = null === n || void 0 === n ? void 0 : n.find((function(l) {
                            return l.Field === e
                        }));
                        i ? i.value = l : n.push({
                            Field: e,
                            value: l
                        }), U((function(e) {
                            return (0, a.Z)((0, o.Z)({}, e), {
                                customFields: n
                            })
                        }))
                    };
                return (0, c.useEffect)((function() {
                    U((0, a.Z)((0, o.Z)({}, J), {
                        customFields: E.customFields
                    }))
                }), [E]), (0, c.useEffect)((function() {
                    U((0, a.Z)((0, o.Z)({}, J), {
                        idBusiness: H.Business._id
                    }))
                }), [H]), (0, r.jsxs)("section", {
                    id: L,
                    className: (0, d.AK)("flex flex-none flex-shrink-0 relative z-10", (0, d.A2)((null === E || void 0 === E ? void 0 : E.verticalAlign) || "center")),
                    style: (0, a.Z)((0, o.Z)({}, (0, F.IP)(z)), {
                        minHeight: oe
                    }),
                    children: [(0, r.jsx)(F.hA, {
                        background: z
                    }), (0, r.jsx)("div", {
                        className: (0, d.AK)("container mx-auto relative z-10", function(e) {
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
                        }(null === E || void 0 === E ? void 0 : E.spacing)),
                        children: X ? (0, r.jsx)("div", {
                            className: "w-full flex flex-col items-center py-20",
                            children: (null === E || void 0 === E ? void 0 : E.successMessage) ? (0, r.jsx)("div", {
                                className: "rich-text-block max-w-5xl",
                                style: {
                                    color: I
                                },
                                dangerouslySetInnerHTML: {
                                    __html: E.successMessage
                                }
                            }) : (0, r.jsxs)(r.Fragment, {
                                children: [(0, r.jsx)("h3", {
                                    className: "heading-medium mb-5",
                                    style: {
                                        color: I
                                    },
                                    children: "Message sent!"
                                }), (0, r.jsx)("p", {
                                    className: "body-normal text-gray-600",
                                    style: {
                                        color: I
                                    },
                                    children: "We'll get in touch with you as soon as possible."
                                })]
                            })
                        }) : (0, r.jsxs)("div", {
                            className: (0, d.AK)("flex flex-col w-full gap-10 lg:gap-20", "left" === M ? "lg:!flex-row-reverse" : "lg:flex-row"),
                            children: [(0, r.jsx)("div", {
                                className: "w-full lg:w-1/2 lg:mt-10",
                                children: (0, r.jsx)("div", {
                                    className: "rich-text-block",
                                    style: {
                                        color: I
                                    },
                                    dangerouslySetInnerHTML: {
                                        __html: R
                                    }
                                })
                            }), (0, r.jsxs)("div", {
                                className: "w-full lg:w-1/2",
                                children: [ee && (0, r.jsx)("div", {
                                    className: "rounded-md bg-red-50 p-4 mb-4",
                                    children: (0, r.jsxs)("div", {
                                        className: "flex",
                                        children: [(0, r.jsx)("div", {
                                            className: "flex-shrink-0",
                                            children: (0, r.jsx)(m, {
                                                className: "h-5 w-5 text-red-400",
                                                "aria-hidden": "true"
                                            })
                                        }), (0, r.jsx)("div", {
                                            className: "ml-3",
                                            children: (0, r.jsx)("p", {
                                                className: "text-sm font-medium text-red-800",
                                                children: ee
                                            })
                                        })]
                                    })
                                }), (0, r.jsxs)("form", {
                                    className: "block",
                                    onSubmit: function(e) {
                                        le(null), e.preventDefault(), W(!0), ne.current.execute()
                                    },
                                    noValidate: !0,
                                    children: [(0, r.jsxs)("div", {
                                        className: "flex flex-col lg:flex-row gap-4 mb-4",
                                        children: [(0, r.jsxs)("div", {
                                            className: "flex-1",
                                            children: [(0, r.jsx)("label", {
                                                className: "mb-1 body-small",
                                                style: {
                                                    color: I
                                                },
                                                children: D
                                            }), (0, r.jsx)("input", {
                                                className: "input border-none !shadow-none !placeholder-current",
                                                type: "text",
                                                value: J.name,
                                                onChange: function(e) {
                                                    return U((0, a.Z)((0, o.Z)({}, J), {
                                                        name: e.target.value
                                                    }))
                                                },
                                                style: te
                                            }), !J.valid && !J.name && (0, r.jsx)("div", {
                                                className: "text-sm mt-1 text-red-500",
                                                children: "Provide a name"
                                            })]
                                        }), (0, r.jsxs)("div", {
                                            className: "flex-1",
                                            children: [(0, r.jsx)("label", {
                                                className: "mb-1 body-small",
                                                style: {
                                                    color: I
                                                },
                                                children: B
                                            }), (0, r.jsx)("input", {
                                                className: "input border-none !shadow-none !placeholder-current",
                                                type: "text",
                                                value: J.email,
                                                onChange: function(e) {
                                                    return U((0, a.Z)((0, o.Z)({}, J), {
                                                        email: e.target.value
                                                    }))
                                                },
                                                style: te
                                            }), !J.valid && (!J.email || !(0, d.oH)(J.email)) && (0, r.jsx)("div", {
                                                className: "text-sm mt-1 text-red-500",
                                                children: "Provide a valid email"
                                            })]
                                        })]
                                    }), null === E || void 0 === E || null === (n = E.fields) || void 0 === n ? void 0 : n.map((function(e, l) {
                                        return (0, r.jsxs)("div", {
                                            className: "mb-4",
                                            children: [(0, r.jsx)("label", {
                                                className: "mb-1 body-small",
                                                style: {
                                                    color: I
                                                },
                                                children: e.label
                                            }), (0, r.jsx)("input", {
                                                className: "input border-none !shadow-none !placeholder-current",
                                                type: "text",
                                                required: e.required,
                                                value: J[e.label.toLowerCase()],
                                                onChange: function(l) {
                                                    return function(e, l) {
                                                        var n = (0, d.p$)(J);
                                                        n[l.label.toLowerCase()] = e.target.value, U(n)
                                                    }(l, e)
                                                },
                                                style: te
                                            }), !J.valid && !J[e.label.toLowerCase()] && e.required && (0, r.jsxs)("div", {
                                                className: "text-sm mt-1 text-red-500",
                                                children: [e.label, " is required"]
                                            })]
                                        }, "custom-field-".concat(l))
                                    })), (null === J || void 0 === J || null === (f = J.customFields) || void 0 === f ? void 0 : f.length) > 0 && (0, r.jsx)("div", {
                                        className: "flex flex-col lg:grid lg:grid-cols-2 gap-4 w-full mb-4",
                                        children: null === J || void 0 === J || null === (w = J.customFields) || void 0 === w ? void 0 : w.map((function(e, l) {
                                            var n, i, s = null === (i = null === J || void 0 === J || null === (n = J.customFields) || void 0 === n ? void 0 : n.find((function(l) {
                                                return l.Field === e.Field._id
                                            }))) || void 0 === i ? void 0 : i.value;
                                            switch (e.Field.type) {
                                                case "text":
                                                    var c;
                                                    return (0, r.jsxs)("div", {
                                                        className: (0, d.AK)(l % 2 === 0 && l === (null === E || void 0 === E || null === (c = E.customFields) || void 0 === c ? void 0 : c.length) - 1 ? "col-span-2" : ""),
                                                        children: [(0, r.jsx)("label", {
                                                            className: "mb-1 body-small",
                                                            style: {
                                                                color: I
                                                            },
                                                            children: e.Field.name
                                                        }), (0, r.jsx)("input", {
                                                            className: "input border-none !shadow-none !placeholder-current",
                                                            name: e.Field.name,
                                                            value: s || "",
                                                            onChange: function(l) {
                                                                return re(e.Field._id, l.target.value)
                                                            },
                                                            type: "text",
                                                            style: te
                                                        })]
                                                    }, l);
                                                case "number":
                                                    var u;
                                                    return (0, r.jsxs)("div", {
                                                        className: (0, d.AK)("w-full", l % 2 === 0 && l === (null === E || void 0 === E || null === (u = E.customFields) || void 0 === u ? void 0 : u.length) - 1 ? "col-span-2" : ""),
                                                        children: [(0, r.jsx)("label", {
                                                            className: "mb-1 body-small",
                                                            style: {
                                                                color: I
                                                            },
                                                            children: e.Field.name
                                                        }), (0, r.jsx)(g.Z, {
                                                            value: s || "",
                                                            onChange: function(l) {
                                                                return re(e.Field._id, l.target.value)
                                                            },
                                                            thousandSeparator: !1,
                                                            allowNegative: !0,
                                                            decimalScale: 0,
                                                            allowLeadingZeros: !1,
                                                            allowEmptyFormatting: !1,
                                                            className: "input w-full border-none !shadow-none !placeholder-current",
                                                            style: te
                                                        })]
                                                    }, l);
                                                case "money":
                                                    var v;
                                                    return (0, r.jsxs)("div", {
                                                        className: (0, d.AK)("w-full", l % 2 === 0 && l === (null === E || void 0 === E || null === (v = E.customFields) || void 0 === v ? void 0 : v.length) - 1 ? "col-span-2" : ""),
                                                        children: [(0, r.jsx)("label", {
                                                            className: "mb-1 body-small",
                                                            style: {
                                                                color: I
                                                            },
                                                            children: e.Field.name
                                                        }), (0, r.jsx)(g.Z, {
                                                            value: s || "",
                                                            onChange: function(l) {
                                                                return re(e.Field._id, l.target.value)
                                                            },
                                                            thousandSeparator: ",",
                                                            decimalSeparator: ".",
                                                            allowNegative: !0,
                                                            decimalScale: 2,
                                                            prefix: "$",
                                                            placeholder: "$0",
                                                            allowLeadingZeros: !1,
                                                            allowEmptyFormatting: !1,
                                                            className: "input w-full border-none !shadow-none !placeholder-current",
                                                            style: te
                                                        })]
                                                    }, l);
                                                case "date":
                                                    var m;
                                                    return (0, r.jsxs)("div", {
                                                        className: (0, d.AK)("flex flex-col md:min-w-40 w-full", l % 2 === 0 && l === (null === E || void 0 === E || null === (m = E.customFields) || void 0 === m ? void 0 : m.length) - 1 ? "col-span-2" : ""),
                                                        children: [(0, r.jsx)("label", {
                                                            className: "mb-1 body-small",
                                                            style: {
                                                                color: I
                                                            },
                                                            children: e.Field.name
                                                        }), (0, r.jsx)(N(), {
                                                            className: "w-full flex-1",
                                                            selected: s ? new Date(s) : null,
                                                            onChange: function(l) {
                                                                return re(e.Field._id, y.ou.fromJSDate(l).startOf("day").toISO())
                                                            },
                                                            dateFormat: "MMM dd, yyyy",
                                                            calendarClassName: "tailwind-calendar",
                                                            customInput: (0, r.jsx)(b.Z, {
                                                                className: "border-none !shadow-none !placeholder-current",
                                                                labelClass: "text-current",
                                                                hint: y.ou.now().toFormat("DD"),
                                                                onClear: function() {
                                                                    return re(e.Field._id, null)
                                                                },
                                                                style: te
                                                            })
                                                        })]
                                                    }, l);
                                                case "checkbox":
                                                    var f, h;
                                                    return (0, r.jsxs)("div", {
                                                        className: (0, d.AK)("flex flex-col md:min-w-40 w-full", l % 2 === 0 && l === (null === E || void 0 === E || null === (f = E.customFields) || void 0 === f ? void 0 : f.length) - 1 ? "col-span-2" : ""),
                                                        children: [(0, r.jsx)("label", {
                                                            className: "mb-1 body-small",
                                                            style: {
                                                                color: I
                                                            },
                                                            children: e.Field.name
                                                        }), (0, r.jsx)("div", {
                                                            className: "flex flex-wrap gap-x-6 gap-y-2",
                                                            children: null === (h = e.Field.options) || void 0 === h ? void 0 : h.map((function(l) {
                                                                return (0, r.jsxs)("label", {
                                                                    className: "inline-flex items-center",
                                                                    children: [(0, r.jsx)("input", {
                                                                        type: "checkbox",
                                                                        className: "mr-1",
                                                                        value: l.id,
                                                                        checked: !!(null === s || void 0 === s ? void 0 : s.includes(l.id)),
                                                                        onChange: function(n) {
                                                                            return function(e, l, n) {
                                                                                var i = (0, t.Z)(J.customFields),
                                                                                    s = null === i || void 0 === i ? void 0 : i.find((function(l) {
                                                                                        return l.Field === e
                                                                                    }));
                                                                                if (s || (s = {
                                                                                        Field: e,
                                                                                        value: []
                                                                                    }, i.push(s)), n) s.value.includes(l) || s.value.push(l);
                                                                                else {
                                                                                    var r = s.value.indexOf(l); - 1 !== r && s.value.splice(r, 1)
                                                                                }
                                                                                U((function(e) {
                                                                                    return (0, a.Z)((0, o.Z)({}, e), {
                                                                                        customFields: i
                                                                                    })
                                                                                }))
                                                                            }(e.Field._id, l.id, n.target.checked)
                                                                        }
                                                                    }), (0, r.jsx)("span", {
                                                                        style: {
                                                                            color: I
                                                                        },
                                                                        children: l.name
                                                                    })]
                                                                }, l.id)
                                                            }))
                                                        })]
                                                    }, l);
                                                case "dropdown":
                                                    var w;
                                                    return (0, r.jsxs)("div", {
                                                        className: (0, d.AK)("flex flex-col md:min-w-40 w-full", l % 2 === 0 && l === (null === E || void 0 === E || null === (w = E.customFields) || void 0 === w ? void 0 : w.length) - 1 ? "col-span-2" : ""),
                                                        children: [(0, r.jsx)("label", {
                                                            className: "mb-1 body-small text-current",
                                                            style: {
                                                                color: I
                                                            },
                                                            children: e.Field.name
                                                        }), (0, r.jsx)(x.Z, {
                                                            className: "w-full",
                                                            btnClassName: "border-none !shadow-none !placeholder-current",
                                                            value: s ? e.Field.options.find((function(e) {
                                                                return e.id === s
                                                            })) : e.Field.options[0],
                                                            onChange: function(l) {
                                                                return re(e.Field._id, l.id)
                                                            },
                                                            values: e.Field.options,
                                                            style: te,
                                                            iconStyle: {
                                                                color: I
                                                            }
                                                        }, l)]
                                                    }, l);
                                                case "rating":
                                                    var j;
                                                    return (0, r.jsxs)("div", {
                                                        className: (0, d.AK)("flex flex-col md:min-w-40 w-full", l % 2 === 0 && l === (null === E || void 0 === E || null === (j = E.customFields) || void 0 === j ? void 0 : j.length) - 1 ? "col-span-2" : ""),
                                                        children: [(0, r.jsx)("label", {
                                                            className: "mb-1 body-small",
                                                            style: {
                                                                color: I
                                                            },
                                                            children: e.Field.name
                                                        }), (0, r.jsx)(p.Z, {
                                                            className: "flex mt-2",
                                                            rating: s || 0,
                                                            setRating: function(l) {
                                                                return re(e.Field._id, l)
                                                            }
                                                        })]
                                                    }, l)
                                            }
                                        }))
                                    }), (0, r.jsxs)("div", {
                                        className: "mb-4",
                                        children: [(0, r.jsx)("label", {
                                            className: "mb-1 body-small",
                                            style: {
                                                color: I
                                            },
                                            children: O
                                        }), (0, r.jsx)("textarea", {
                                            className: "input border-none !shadow-none !placeholder-current",
                                            placeholder: "",
                                            rows: "5",
                                            value: J.message,
                                            onChange: function(e) {
                                                return U((0, a.Z)((0, o.Z)({}, J), {
                                                    message: e.target.value
                                                }))
                                            },
                                            style: te
                                        }), !J.valid && !J.message && (0, r.jsx)("div", {
                                            className: "text-sm mt-1 text-red-500",
                                            children: "Provide a message"
                                        })]
                                    }), (0, r.jsxs)("div", {
                                        className: "flex flex-col md:flex-row justify-between items-start gap-4",
                                        children: [(0, r.jsxs)("div", {
                                            className: "text-xs max-w-sm text-gray-500",
                                            style: {
                                                color: I
                                            },
                                            children: ["This site is protected by reCAPTCHA and the Google", (0, r.jsx)(h(), {
                                                href: "https://policies.google.com/privacy",
                                                children: (0, r.jsx)("a", {
                                                    target: "_blank",
                                                    className: "font-bold",
                                                    style: {
                                                        color: I
                                                    },
                                                    children: " Privacy Policy"
                                                })
                                            }), " and", (0, r.jsx)(h(), {
                                                href: "https://policies.google.com/terms",
                                                children: (0, r.jsx)("a", {
                                                    target: "_blank",
                                                    className: "font-bold",
                                                    style: {
                                                        color: I
                                                    },
                                                    children: " Terms of Service"
                                                })
                                            }), " apply."]
                                        }), (0, r.jsx)(u.Z, {
                                            type: "submit",
                                            button: {
                                                label: T
                                            },
                                            website: H,
                                            loading: $,
                                            className: "lg w-36 mt-2 md:mt-0"
                                        })]
                                    }), (0, r.jsx)(v.Z, {
                                        ref: ne,
                                        className: "hidden",
                                        size: "invisible",
                                        badge: "inline",
                                        sitekey: P,
                                        onChange: se
                                    })]
                                })]
                            })]
                        })
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
            var i = n(67294);

            function o(e) {
                var l, n, o = (0, i.useState)(0),
                    a = o[0],
                    t = o[1],
                    s = (0, i.useState)([0, 0]),
                    r = s[0],
                    d = s[1];
                return (0, i.useEffect)((function() {
                    var e = function() {
                        d([window.innerWidth, window.innerHeight])
                    };
                    return window.addEventListener("resize", e), e(),
                        function() {
                            return window.removeEventListener("resize", e)
                        }
                }), []), (0, i.useEffect)((function() {
                    var l;
                    e && t(1 === e.idx ? (null === (l = null === document || void 0 === document ? void 0 : document.getElementById("website-header")) || void 0 === l ? void 0 : l.offsetHeight) || 80 : 0)
                }), [e, r]), {
                    minHeight: (null === e || void 0 === e || null === (l = e.spacing) || void 0 === l ? void 0 : l.minHeight) ? "calc(".concat("min-h-screen" === (null === e || void 0 === e || null === (n = e.spacing) || void 0 === n ? void 0 : n.minHeight) ? "100vh" : "240px", " - ").concat((null === e || void 0 === e ? void 0 : e.combineWithHeader) ? 0 : a, "px)") : "240px",
                    headerHeight: a
                }
            }
        }
    }
]);