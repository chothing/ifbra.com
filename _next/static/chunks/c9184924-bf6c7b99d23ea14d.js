"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [4186], {
        6054: function(e, t, r) {
            r.d(t, {
                MR: function() {
                    return Bu
                },
                ZP: function() {
                    return ll
                }
            });
            var n = r(94578),
                i = r(97326),
                o = r(62292),
                a = r.n(o),
                c = r(30405),
                s = r(27948),
                u = r(71619),
                l = r.n(u),
                f = r(98906),
                h = r(43144),
                d = r(68214),
                m = r.n(d),
                g = r(4201),
                p = r(51852),
                y = r(87462),
                v = r(78249),
                b = "undefined" !== typeof r.g ? r.g : "undefined" !== typeof self ? self : "undefined" !== typeof window ? window : {},
                A = [],
                w = [],
                _ = "undefined" !== typeof Uint8Array ? Uint8Array : Array,
                O = !1;

            function S() {
                O = !0;
                for (var e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", t = 0, r = e.length; t < r; ++t) A[t] = e[t], w[e.charCodeAt(t)] = t;
                w["-".charCodeAt(0)] = 62, w["_".charCodeAt(0)] = 63
            }

            function E(e, t, r) {
                for (var n, i, o = [], a = t; a < r; a += 3) n = (e[a] << 16) + (e[a + 1] << 8) + e[a + 2], o.push(A[(i = n) >> 18 & 63] + A[i >> 12 & 63] + A[i >> 6 & 63] + A[63 & i]);
                return o.join("")
            }

            function T(e) {
                var t;
                O || S();
                for (var r = e.length, n = r % 3, i = "", o = [], a = 16383, c = 0, s = r - n; c < s; c += a) o.push(E(e, c, c + a > s ? s : c + a));
                return 1 === n ? (t = e[r - 1], i += A[t >> 2], i += A[t << 4 & 63], i += "==") : 2 === n && (t = (e[r - 2] << 8) + e[r - 1], i += A[t >> 10], i += A[t >> 4 & 63], i += A[t << 2 & 63], i += "="), o.push(i), o.join("")
            }

            function x(e, t, r, n, i) {
                var o, a, c = 8 * i - n - 1,
                    s = (1 << c) - 1,
                    u = s >> 1,
                    l = -7,
                    f = r ? i - 1 : 0,
                    h = r ? -1 : 1,
                    d = e[t + f];
                for (f += h, o = d & (1 << -l) - 1, d >>= -l, l += c; l > 0; o = 256 * o + e[t + f], f += h, l -= 8);
                for (a = o & (1 << -l) - 1, o >>= -l, l += n; l > 0; a = 256 * a + e[t + f], f += h, l -= 8);
                if (0 === o) o = 1 - u;
                else {
                    if (o === s) return a ? NaN : 1 / 0 * (d ? -1 : 1);
                    a += Math.pow(2, n), o -= u
                }
                return (d ? -1 : 1) * a * Math.pow(2, o - n)
            }

            function k(e, t, r, n, i, o) {
                var a, c, s, u = 8 * o - i - 1,
                    l = (1 << u) - 1,
                    f = l >> 1,
                    h = 23 === i ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
                    d = n ? 0 : o - 1,
                    m = n ? 1 : -1,
                    g = t < 0 || 0 === t && 1 / t < 0 ? 1 : 0;
                for (t = Math.abs(t), isNaN(t) || t === 1 / 0 ? (c = isNaN(t) ? 1 : 0, a = l) : (a = Math.floor(Math.log(t) / Math.LN2), t * (s = Math.pow(2, -a)) < 1 && (a--, s *= 2), (t += a + f >= 1 ? h / s : h * Math.pow(2, 1 - f)) * s >= 2 && (a++, s /= 2), a + f >= l ? (c = 0, a = l) : a + f >= 1 ? (c = (t * s - 1) * Math.pow(2, i), a += f) : (c = t * Math.pow(2, f - 1) * Math.pow(2, i), a = 0)); i >= 8; e[r + d] = 255 & c, d += m, c /= 256, i -= 8);
                for (a = a << i | c, u += i; u > 0; e[r + d] = 255 & a, d += m, a /= 256, u -= 8);
                e[r + d - m] |= 128 * g
            }
            var R = {}.toString,
                U = Array.isArray || function(e) {
                    return "[object Array]" == R.call(e)
                };

            function C() {
                return F.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823
            }

            function P(e, t) {
                if (C() < t) throw new RangeError("Invalid typed array length");
                return F.TYPED_ARRAY_SUPPORT ? (e = new Uint8Array(t)).__proto__ = F.prototype : (null === e && (e = new F(t)), e.length = t), e
            }

            function F(e, t, r) {
                if (!F.TYPED_ARRAY_SUPPORT && !(this instanceof F)) return new F(e, t, r);
                if ("number" === typeof e) {
                    if ("string" === typeof t) throw new Error("If encoding is specified then the first argument must be a string");
                    return L(this, e)
                }
                return D(this, e, t, r)
            }

            function D(e, t, r, n) {
                if ("number" === typeof t) throw new TypeError('"value" argument must not be a number');
                return "undefined" !== typeof ArrayBuffer && t instanceof ArrayBuffer ? function(e, t, r, n) {
                    if (t.byteLength, r < 0 || t.byteLength < r) throw new RangeError("'offset' is out of bounds");
                    if (t.byteLength < r + (n || 0)) throw new RangeError("'length' is out of bounds");
                    t = void 0 === r && void 0 === n ? new Uint8Array(t) : void 0 === n ? new Uint8Array(t, r) : new Uint8Array(t, r, n);
                    F.TYPED_ARRAY_SUPPORT ? (e = t).__proto__ = F.prototype : e = N(e, t);
                    return e
                }(e, t, r, n) : "string" === typeof t ? function(e, t, r) {
                    "string" === typeof r && "" !== r || (r = "utf8");
                    if (!F.isEncoding(r)) throw new TypeError('"encoding" must be a valid string encoding');
                    var n = 0 | B(t, r),
                        i = (e = P(e, n)).write(t, r);
                    i !== n && (e = e.slice(0, i));
                    return e
                }(e, t, r) : function(e, t) {
                    if (M(t)) {
                        var r = 0 | j(t.length);
                        return 0 === (e = P(e, r)).length || t.copy(e, 0, 0, r), e
                    }
                    if (t) {
                        if ("undefined" !== typeof ArrayBuffer && t.buffer instanceof ArrayBuffer || "length" in t) return "number" !== typeof t.length || (n = t.length) !== n ? P(e, 0) : N(e, t);
                        if ("Buffer" === t.type && U(t.data)) return N(e, t.data)
                    }
                    var n;
                    throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")
                }(e, t)
            }

            function I(e) {
                if ("number" !== typeof e) throw new TypeError('"size" argument must be a number');
                if (e < 0) throw new RangeError('"size" argument must not be negative')
            }

            function L(e, t) {
                if (I(t), e = P(e, t < 0 ? 0 : 0 | j(t)), !F.TYPED_ARRAY_SUPPORT)
                    for (var r = 0; r < t; ++r) e[r] = 0;
                return e
            }

            function N(e, t) {
                var r = t.length < 0 ? 0 : 0 | j(t.length);
                e = P(e, r);
                for (var n = 0; n < r; n += 1) e[n] = 255 & t[n];
                return e
            }

            function j(e) {
                if (e >= C()) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + C().toString(16) + " bytes");
                return 0 | e
            }

            function M(e) {
                return !(null == e || !e._isBuffer)
            }

            function B(e, t) {
                if (M(e)) return e.length;
                if ("undefined" !== typeof ArrayBuffer && "function" === typeof ArrayBuffer.isView && (ArrayBuffer.isView(e) || e instanceof ArrayBuffer)) return e.byteLength;
                "string" !== typeof e && (e = "" + e);
                var r = e.length;
                if (0 === r) return 0;
                for (var n = !1;;) switch (t) {
                    case "ascii":
                    case "latin1":
                    case "binary":
                        return r;
                    case "utf8":
                    case "utf-8":
                    case void 0:
                        return de(e).length;
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        return 2 * r;
                    case "hex":
                        return r >>> 1;
                    case "base64":
                        return me(e).length;
                    default:
                        if (n) return de(e).length;
                        t = ("" + t).toLowerCase(), n = !0
                }
            }

            function Y(e, t, r) {
                var n = !1;
                if ((void 0 === t || t < 0) && (t = 0), t > this.length) return "";
                if ((void 0 === r || r > this.length) && (r = this.length), r <= 0) return "";
                if ((r >>>= 0) <= (t >>>= 0)) return "";
                for (e || (e = "utf8");;) switch (e) {
                    case "hex":
                        return re(this, t, r);
                    case "utf8":
                    case "utf-8":
                        return $(this, t, r);
                    case "ascii":
                        return ee(this, t, r);
                    case "latin1":
                    case "binary":
                        return te(this, t, r);
                    case "base64":
                        return X(this, t, r);
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        return ne(this, t, r);
                    default:
                        if (n) throw new TypeError("Unknown encoding: " + e);
                        e = (e + "").toLowerCase(), n = !0
                }
            }

            function W(e, t, r) {
                var n = e[t];
                e[t] = e[r], e[r] = n
            }

            function q(e, t, r, n, i) {
                if (0 === e.length) return -1;
                if ("string" === typeof r ? (n = r, r = 0) : r > 2147483647 ? r = 2147483647 : r < -2147483648 && (r = -2147483648), r = +r, isNaN(r) && (r = i ? 0 : e.length - 1), r < 0 && (r = e.length + r), r >= e.length) {
                    if (i) return -1;
                    r = e.length - 1
                } else if (r < 0) {
                    if (!i) return -1;
                    r = 0
                }
                if ("string" === typeof t && (t = F.from(t, n)), M(t)) return 0 === t.length ? -1 : z(e, t, r, n, i);
                if ("number" === typeof t) return t &= 255, F.TYPED_ARRAY_SUPPORT && "function" === typeof Uint8Array.prototype.indexOf ? i ? Uint8Array.prototype.indexOf.call(e, t, r) : Uint8Array.prototype.lastIndexOf.call(e, t, r) : z(e, [t], r, n, i);
                throw new TypeError("val must be string, number or Buffer")
            }

            function z(e, t, r, n, i) {
                var o, a = 1,
                    c = e.length,
                    s = t.length;
                if (void 0 !== n && ("ucs2" === (n = String(n).toLowerCase()) || "ucs-2" === n || "utf16le" === n || "utf-16le" === n)) {
                    if (e.length < 2 || t.length < 2) return -1;
                    a = 2, c /= 2, s /= 2, r /= 2
                }

                function u(e, t) {
                    return 1 === a ? e[t] : e.readUInt16BE(t * a)
                }
                if (i) {
                    var l = -1;
                    for (o = r; o < c; o++)
                        if (u(e, o) === u(t, -1 === l ? 0 : o - l)) {
                            if (-1 === l && (l = o), o - l + 1 === s) return l * a
                        } else -1 !== l && (o -= o - l), l = -1
                } else
                    for (r + s > c && (r = c - s), o = r; o >= 0; o--) {
                        for (var f = !0, h = 0; h < s; h++)
                            if (u(e, o + h) !== u(t, h)) {
                                f = !1;
                                break
                            }
                        if (f) return o
                    }
                return -1
            }

            function V(e, t, r, n) {
                r = Number(r) || 0;
                var i = e.length - r;
                n ? (n = Number(n)) > i && (n = i) : n = i;
                var o = t.length;
                if (o % 2 !== 0) throw new TypeError("Invalid hex string");
                n > o / 2 && (n = o / 2);
                for (var a = 0; a < n; ++a) {
                    var c = parseInt(t.substr(2 * a, 2), 16);
                    if (isNaN(c)) return a;
                    e[r + a] = c
                }
                return a
            }

            function G(e, t, r, n) {
                return ge(de(t, e.length - r), e, r, n)
            }

            function Z(e, t, r, n) {
                return ge(function(e) {
                    for (var t = [], r = 0; r < e.length; ++r) t.push(255 & e.charCodeAt(r));
                    return t
                }(t), e, r, n)
            }

            function K(e, t, r, n) {
                return Z(e, t, r, n)
            }

            function H(e, t, r, n) {
                return ge(me(t), e, r, n)
            }

            function J(e, t, r, n) {
                return ge(function(e, t) {
                    for (var r, n, i, o = [], a = 0; a < e.length && !((t -= 2) < 0); ++a) n = (r = e.charCodeAt(a)) >> 8, i = r % 256, o.push(i), o.push(n);
                    return o
                }(t, e.length - r), e, r, n)
            }

            function X(e, t, r) {
                return 0 === t && r === e.length ? T(e) : T(e.slice(t, r))
            }

            function $(e, t, r) {
                r = Math.min(e.length, r);
                for (var n = [], i = t; i < r;) {
                    var o, a, c, s, u = e[i],
                        l = null,
                        f = u > 239 ? 4 : u > 223 ? 3 : u > 191 ? 2 : 1;
                    if (i + f <= r) switch (f) {
                        case 1:
                            u < 128 && (l = u);
                            break;
                        case 2:
                            128 === (192 & (o = e[i + 1])) && (s = (31 & u) << 6 | 63 & o) > 127 && (l = s);
                            break;
                        case 3:
                            o = e[i + 1], a = e[i + 2], 128 === (192 & o) && 128 === (192 & a) && (s = (15 & u) << 12 | (63 & o) << 6 | 63 & a) > 2047 && (s < 55296 || s > 57343) && (l = s);
                            break;
                        case 4:
                            o = e[i + 1], a = e[i + 2], c = e[i + 3], 128 === (192 & o) && 128 === (192 & a) && 128 === (192 & c) && (s = (15 & u) << 18 | (63 & o) << 12 | (63 & a) << 6 | 63 & c) > 65535 && s < 1114112 && (l = s)
                    }
                    null === l ? (l = 65533, f = 1) : l > 65535 && (l -= 65536, n.push(l >>> 10 & 1023 | 55296), l = 56320 | 1023 & l), n.push(l), i += f
                }
                return function(e) {
                    var t = e.length;
                    if (t <= Q) return String.fromCharCode.apply(String, e);
                    var r = "",
                        n = 0;
                    for (; n < t;) r += String.fromCharCode.apply(String, e.slice(n, n += Q));
                    return r
                }(n)
            }
            F.TYPED_ARRAY_SUPPORT = void 0 === b.TYPED_ARRAY_SUPPORT || b.TYPED_ARRAY_SUPPORT, F.poolSize = 8192, F._augment = function(e) {
                return e.__proto__ = F.prototype, e
            }, F.from = function(e, t, r) {
                return D(null, e, t, r)
            }, F.TYPED_ARRAY_SUPPORT && (F.prototype.__proto__ = Uint8Array.prototype, F.__proto__ = Uint8Array), F.alloc = function(e, t, r) {
                return function(e, t, r, n) {
                    return I(t), t <= 0 ? P(e, t) : void 0 !== r ? "string" === typeof n ? P(e, t).fill(r, n) : P(e, t).fill(r) : P(e, t)
                }(null, e, t, r)
            }, F.allocUnsafe = function(e) {
                return L(null, e)
            }, F.allocUnsafeSlow = function(e) {
                return L(null, e)
            }, F.isBuffer = function(e) {
                return null != e && (!!e._isBuffer || pe(e) || function(e) {
                    return "function" === typeof e.readFloatLE && "function" === typeof e.slice && pe(e.slice(0, 0))
                }(e))
            }, F.compare = function(e, t) {
                if (!M(e) || !M(t)) throw new TypeError("Arguments must be Buffers");
                if (e === t) return 0;
                for (var r = e.length, n = t.length, i = 0, o = Math.min(r, n); i < o; ++i)
                    if (e[i] !== t[i]) {
                        r = e[i], n = t[i];
                        break
                    }
                return r < n ? -1 : n < r ? 1 : 0
            }, F.isEncoding = function(e) {
                switch (String(e).toLowerCase()) {
                    case "hex":
                    case "utf8":
                    case "utf-8":
                    case "ascii":
                    case "latin1":
                    case "binary":
                    case "base64":
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        return !0;
                    default:
                        return !1
                }
            }, F.concat = function(e, t) {
                if (!U(e)) throw new TypeError('"list" argument must be an Array of Buffers');
                if (0 === e.length) return F.alloc(0);
                var r;
                if (void 0 === t)
                    for (t = 0, r = 0; r < e.length; ++r) t += e[r].length;
                var n = F.allocUnsafe(t),
                    i = 0;
                for (r = 0; r < e.length; ++r) {
                    var o = e[r];
                    if (!M(o)) throw new TypeError('"list" argument must be an Array of Buffers');
                    o.copy(n, i), i += o.length
                }
                return n
            }, F.byteLength = B, F.prototype._isBuffer = !0, F.prototype.swap16 = function() {
                var e = this.length;
                if (e % 2 !== 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
                for (var t = 0; t < e; t += 2) W(this, t, t + 1);
                return this
            }, F.prototype.swap32 = function() {
                var e = this.length;
                if (e % 4 !== 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
                for (var t = 0; t < e; t += 4) W(this, t, t + 3), W(this, t + 1, t + 2);
                return this
            }, F.prototype.swap64 = function() {
                var e = this.length;
                if (e % 8 !== 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
                for (var t = 0; t < e; t += 8) W(this, t, t + 7), W(this, t + 1, t + 6), W(this, t + 2, t + 5), W(this, t + 3, t + 4);
                return this
            }, F.prototype.toString = function() {
                var e = 0 | this.length;
                return 0 === e ? "" : 0 === arguments.length ? $(this, 0, e) : Y.apply(this, arguments)
            }, F.prototype.equals = function(e) {
                if (!M(e)) throw new TypeError("Argument must be a Buffer");
                return this === e || 0 === F.compare(this, e)
            }, F.prototype.inspect = function() {
                var e = "";
                return this.length > 0 && (e = this.toString("hex", 0, 50).match(/.{2}/g).join(" "), this.length > 50 && (e += " ... ")), "<Buffer " + e + ">"
            }, F.prototype.compare = function(e, t, r, n, i) {
                if (!M(e)) throw new TypeError("Argument must be a Buffer");
                if (void 0 === t && (t = 0), void 0 === r && (r = e ? e.length : 0), void 0 === n && (n = 0), void 0 === i && (i = this.length), t < 0 || r > e.length || n < 0 || i > this.length) throw new RangeError("out of range index");
                if (n >= i && t >= r) return 0;
                if (n >= i) return -1;
                if (t >= r) return 1;
                if (this === e) return 0;
                for (var o = (i >>>= 0) - (n >>>= 0), a = (r >>>= 0) - (t >>>= 0), c = Math.min(o, a), s = this.slice(n, i), u = e.slice(t, r), l = 0; l < c; ++l)
                    if (s[l] !== u[l]) {
                        o = s[l], a = u[l];
                        break
                    }
                return o < a ? -1 : a < o ? 1 : 0
            }, F.prototype.includes = function(e, t, r) {
                return -1 !== this.indexOf(e, t, r)
            }, F.prototype.indexOf = function(e, t, r) {
                return q(this, e, t, r, !0)
            }, F.prototype.lastIndexOf = function(e, t, r) {
                return q(this, e, t, r, !1)
            }, F.prototype.write = function(e, t, r, n) {
                if (void 0 === t) n = "utf8", r = this.length, t = 0;
                else if (void 0 === r && "string" === typeof t) n = t, r = this.length, t = 0;
                else {
                    if (!isFinite(t)) throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
                    t |= 0, isFinite(r) ? (r |= 0, void 0 === n && (n = "utf8")) : (n = r, r = void 0)
                }
                var i = this.length - t;
                if ((void 0 === r || r > i) && (r = i), e.length > 0 && (r < 0 || t < 0) || t > this.length) throw new RangeError("Attempt to write outside buffer bounds");
                n || (n = "utf8");
                for (var o = !1;;) switch (n) {
                    case "hex":
                        return V(this, e, t, r);
                    case "utf8":
                    case "utf-8":
                        return G(this, e, t, r);
                    case "ascii":
                        return Z(this, e, t, r);
                    case "latin1":
                    case "binary":
                        return K(this, e, t, r);
                    case "base64":
                        return H(this, e, t, r);
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        return J(this, e, t, r);
                    default:
                        if (o) throw new TypeError("Unknown encoding: " + n);
                        n = ("" + n).toLowerCase(), o = !0
                }
            }, F.prototype.toJSON = function() {
                return {
                    type: "Buffer",
                    data: Array.prototype.slice.call(this._arr || this, 0)
                }
            };
            var Q = 4096;

            function ee(e, t, r) {
                var n = "";
                r = Math.min(e.length, r);
                for (var i = t; i < r; ++i) n += String.fromCharCode(127 & e[i]);
                return n
            }

            function te(e, t, r) {
                var n = "";
                r = Math.min(e.length, r);
                for (var i = t; i < r; ++i) n += String.fromCharCode(e[i]);
                return n
            }

            function re(e, t, r) {
                var n = e.length;
                (!t || t < 0) && (t = 0), (!r || r < 0 || r > n) && (r = n);
                for (var i = "", o = t; o < r; ++o) i += he(e[o]);
                return i
            }

            function ne(e, t, r) {
                for (var n = e.slice(t, r), i = "", o = 0; o < n.length; o += 2) i += String.fromCharCode(n[o] + 256 * n[o + 1]);
                return i
            }

            function ie(e, t, r) {
                if (e % 1 !== 0 || e < 0) throw new RangeError("offset is not uint");
                if (e + t > r) throw new RangeError("Trying to access beyond buffer length")
            }

            function oe(e, t, r, n, i, o) {
                if (!M(e)) throw new TypeError('"buffer" argument must be a Buffer instance');
                if (t > i || t < o) throw new RangeError('"value" argument is out of bounds');
                if (r + n > e.length) throw new RangeError("Index out of range")
            }

            function ae(e, t, r, n) {
                t < 0 && (t = 65535 + t + 1);
                for (var i = 0, o = Math.min(e.length - r, 2); i < o; ++i) e[r + i] = (t & 255 << 8 * (n ? i : 1 - i)) >>> 8 * (n ? i : 1 - i)
            }

            function ce(e, t, r, n) {
                t < 0 && (t = 4294967295 + t + 1);
                for (var i = 0, o = Math.min(e.length - r, 4); i < o; ++i) e[r + i] = t >>> 8 * (n ? i : 3 - i) & 255
            }

            function se(e, t, r, n, i, o) {
                if (r + n > e.length) throw new RangeError("Index out of range");
                if (r < 0) throw new RangeError("Index out of range")
            }

            function ue(e, t, r, n, i) {
                return i || se(e, 0, r, 4), k(e, t, r, n, 23, 4), r + 4
            }

            function le(e, t, r, n, i) {
                return i || se(e, 0, r, 8), k(e, t, r, n, 52, 8), r + 8
            }
            F.prototype.slice = function(e, t) {
                var r, n = this.length;
                if ((e = ~~e) < 0 ? (e += n) < 0 && (e = 0) : e > n && (e = n), (t = void 0 === t ? n : ~~t) < 0 ? (t += n) < 0 && (t = 0) : t > n && (t = n), t < e && (t = e), F.TYPED_ARRAY_SUPPORT)(r = this.subarray(e, t)).__proto__ = F.prototype;
                else {
                    var i = t - e;
                    r = new F(i, void 0);
                    for (var o = 0; o < i; ++o) r[o] = this[o + e]
                }
                return r
            }, F.prototype.readUIntLE = function(e, t, r) {
                e |= 0, t |= 0, r || ie(e, t, this.length);
                for (var n = this[e], i = 1, o = 0; ++o < t && (i *= 256);) n += this[e + o] * i;
                return n
            }, F.prototype.readUIntBE = function(e, t, r) {
                e |= 0, t |= 0, r || ie(e, t, this.length);
                for (var n = this[e + --t], i = 1; t > 0 && (i *= 256);) n += this[e + --t] * i;
                return n
            }, F.prototype.readUInt8 = function(e, t) {
                return t || ie(e, 1, this.length), this[e]
            }, F.prototype.readUInt16LE = function(e, t) {
                return t || ie(e, 2, this.length), this[e] | this[e + 1] << 8
            }, F.prototype.readUInt16BE = function(e, t) {
                return t || ie(e, 2, this.length), this[e] << 8 | this[e + 1]
            }, F.prototype.readUInt32LE = function(e, t) {
                return t || ie(e, 4, this.length), (this[e] | this[e + 1] << 8 | this[e + 2] << 16) + 16777216 * this[e + 3]
            }, F.prototype.readUInt32BE = function(e, t) {
                return t || ie(e, 4, this.length), 16777216 * this[e] + (this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3])
            }, F.prototype.readIntLE = function(e, t, r) {
                e |= 0, t |= 0, r || ie(e, t, this.length);
                for (var n = this[e], i = 1, o = 0; ++o < t && (i *= 256);) n += this[e + o] * i;
                return n >= (i *= 128) && (n -= Math.pow(2, 8 * t)), n
            }, F.prototype.readIntBE = function(e, t, r) {
                e |= 0, t |= 0, r || ie(e, t, this.length);
                for (var n = t, i = 1, o = this[e + --n]; n > 0 && (i *= 256);) o += this[e + --n] * i;
                return o >= (i *= 128) && (o -= Math.pow(2, 8 * t)), o
            }, F.prototype.readInt8 = function(e, t) {
                return t || ie(e, 1, this.length), 128 & this[e] ? -1 * (255 - this[e] + 1) : this[e]
            }, F.prototype.readInt16LE = function(e, t) {
                t || ie(e, 2, this.length);
                var r = this[e] | this[e + 1] << 8;
                return 32768 & r ? 4294901760 | r : r
            }, F.prototype.readInt16BE = function(e, t) {
                t || ie(e, 2, this.length);
                var r = this[e + 1] | this[e] << 8;
                return 32768 & r ? 4294901760 | r : r
            }, F.prototype.readInt32LE = function(e, t) {
                return t || ie(e, 4, this.length), this[e] | this[e + 1] << 8 | this[e + 2] << 16 | this[e + 3] << 24
            }, F.prototype.readInt32BE = function(e, t) {
                return t || ie(e, 4, this.length), this[e] << 24 | this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3]
            }, F.prototype.readFloatLE = function(e, t) {
                return t || ie(e, 4, this.length), x(this, e, !0, 23, 4)
            }, F.prototype.readFloatBE = function(e, t) {
                return t || ie(e, 4, this.length), x(this, e, !1, 23, 4)
            }, F.prototype.readDoubleLE = function(e, t) {
                return t || ie(e, 8, this.length), x(this, e, !0, 52, 8)
            }, F.prototype.readDoubleBE = function(e, t) {
                return t || ie(e, 8, this.length), x(this, e, !1, 52, 8)
            }, F.prototype.writeUIntLE = function(e, t, r, n) {
                (e = +e, t |= 0, r |= 0, n) || oe(this, e, t, r, Math.pow(2, 8 * r) - 1, 0);
                var i = 1,
                    o = 0;
                for (this[t] = 255 & e; ++o < r && (i *= 256);) this[t + o] = e / i & 255;
                return t + r
            }, F.prototype.writeUIntBE = function(e, t, r, n) {
                (e = +e, t |= 0, r |= 0, n) || oe(this, e, t, r, Math.pow(2, 8 * r) - 1, 0);
                var i = r - 1,
                    o = 1;
                for (this[t + i] = 255 & e; --i >= 0 && (o *= 256);) this[t + i] = e / o & 255;
                return t + r
            }, F.prototype.writeUInt8 = function(e, t, r) {
                return e = +e, t |= 0, r || oe(this, e, t, 1, 255, 0), F.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)), this[t] = 255 & e, t + 1
            }, F.prototype.writeUInt16LE = function(e, t, r) {
                return e = +e, t |= 0, r || oe(this, e, t, 2, 65535, 0), F.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e, this[t + 1] = e >>> 8) : ae(this, e, t, !0), t + 2
            }, F.prototype.writeUInt16BE = function(e, t, r) {
                return e = +e, t |= 0, r || oe(this, e, t, 2, 65535, 0), F.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 8, this[t + 1] = 255 & e) : ae(this, e, t, !1), t + 2
            }, F.prototype.writeUInt32LE = function(e, t, r) {
                return e = +e, t |= 0, r || oe(this, e, t, 4, 4294967295, 0), F.TYPED_ARRAY_SUPPORT ? (this[t + 3] = e >>> 24, this[t + 2] = e >>> 16, this[t + 1] = e >>> 8, this[t] = 255 & e) : ce(this, e, t, !0), t + 4
            }, F.prototype.writeUInt32BE = function(e, t, r) {
                return e = +e, t |= 0, r || oe(this, e, t, 4, 4294967295, 0), F.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = 255 & e) : ce(this, e, t, !1), t + 4
            }, F.prototype.writeIntLE = function(e, t, r, n) {
                if (e = +e, t |= 0, !n) {
                    var i = Math.pow(2, 8 * r - 1);
                    oe(this, e, t, r, i - 1, -i)
                }
                var o = 0,
                    a = 1,
                    c = 0;
                for (this[t] = 255 & e; ++o < r && (a *= 256);) e < 0 && 0 === c && 0 !== this[t + o - 1] && (c = 1), this[t + o] = (e / a >> 0) - c & 255;
                return t + r
            }, F.prototype.writeIntBE = function(e, t, r, n) {
                if (e = +e, t |= 0, !n) {
                    var i = Math.pow(2, 8 * r - 1);
                    oe(this, e, t, r, i - 1, -i)
                }
                var o = r - 1,
                    a = 1,
                    c = 0;
                for (this[t + o] = 255 & e; --o >= 0 && (a *= 256);) e < 0 && 0 === c && 0 !== this[t + o + 1] && (c = 1), this[t + o] = (e / a >> 0) - c & 255;
                return t + r
            }, F.prototype.writeInt8 = function(e, t, r) {
                return e = +e, t |= 0, r || oe(this, e, t, 1, 127, -128), F.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)), e < 0 && (e = 255 + e + 1), this[t] = 255 & e, t + 1
            }, F.prototype.writeInt16LE = function(e, t, r) {
                return e = +e, t |= 0, r || oe(this, e, t, 2, 32767, -32768), F.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e, this[t + 1] = e >>> 8) : ae(this, e, t, !0), t + 2
            }, F.prototype.writeInt16BE = function(e, t, r) {
                return e = +e, t |= 0, r || oe(this, e, t, 2, 32767, -32768), F.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 8, this[t + 1] = 255 & e) : ae(this, e, t, !1), t + 2
            }, F.prototype.writeInt32LE = function(e, t, r) {
                return e = +e, t |= 0, r || oe(this, e, t, 4, 2147483647, -2147483648), F.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e, this[t + 1] = e >>> 8, this[t + 2] = e >>> 16, this[t + 3] = e >>> 24) : ce(this, e, t, !0), t + 4
            }, F.prototype.writeInt32BE = function(e, t, r) {
                return e = +e, t |= 0, r || oe(this, e, t, 4, 2147483647, -2147483648), e < 0 && (e = 4294967295 + e + 1), F.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = 255 & e) : ce(this, e, t, !1), t + 4
            }, F.prototype.writeFloatLE = function(e, t, r) {
                return ue(this, e, t, !0, r)
            }, F.prototype.writeFloatBE = function(e, t, r) {
                return ue(this, e, t, !1, r)
            }, F.prototype.writeDoubleLE = function(e, t, r) {
                return le(this, e, t, !0, r)
            }, F.prototype.writeDoubleBE = function(e, t, r) {
                return le(this, e, t, !1, r)
            }, F.prototype.copy = function(e, t, r, n) {
                if (r || (r = 0), n || 0 === n || (n = this.length), t >= e.length && (t = e.length), t || (t = 0), n > 0 && n < r && (n = r), n === r) return 0;
                if (0 === e.length || 0 === this.length) return 0;
                if (t < 0) throw new RangeError("targetStart out of bounds");
                if (r < 0 || r >= this.length) throw new RangeError("sourceStart out of bounds");
                if (n < 0) throw new RangeError("sourceEnd out of bounds");
                n > this.length && (n = this.length), e.length - t < n - r && (n = e.length - t + r);
                var i, o = n - r;
                if (this === e && r < t && t < n)
                    for (i = o - 1; i >= 0; --i) e[i + t] = this[i + r];
                else if (o < 1e3 || !F.TYPED_ARRAY_SUPPORT)
                    for (i = 0; i < o; ++i) e[i + t] = this[i + r];
                else Uint8Array.prototype.set.call(e, this.subarray(r, r + o), t);
                return o
            }, F.prototype.fill = function(e, t, r, n) {
                if ("string" === typeof e) {
                    if ("string" === typeof t ? (n = t, t = 0, r = this.length) : "string" === typeof r && (n = r, r = this.length), 1 === e.length) {
                        var i = e.charCodeAt(0);
                        i < 256 && (e = i)
                    }
                    if (void 0 !== n && "string" !== typeof n) throw new TypeError("encoding must be a string");
                    if ("string" === typeof n && !F.isEncoding(n)) throw new TypeError("Unknown encoding: " + n)
                } else "number" === typeof e && (e &= 255);
                if (t < 0 || this.length < t || this.length < r) throw new RangeError("Out of range index");
                if (r <= t) return this;
                var o;
                if (t >>>= 0, r = void 0 === r ? this.length : r >>> 0, e || (e = 0), "number" === typeof e)
                    for (o = t; o < r; ++o) this[o] = e;
                else {
                    var a = M(e) ? e : de(new F(e, n).toString()),
                        c = a.length;
                    for (o = 0; o < r - t; ++o) this[o + t] = a[o % c]
                }
                return this
            };
            var fe = /[^+\/0-9A-Za-z-_]/g;

            function he(e) {
                return e < 16 ? "0" + e.toString(16) : e.toString(16)
            }

            function de(e, t) {
                var r;
                t = t || 1 / 0;
                for (var n = e.length, i = null, o = [], a = 0; a < n; ++a) {
                    if ((r = e.charCodeAt(a)) > 55295 && r < 57344) {
                        if (!i) {
                            if (r > 56319) {
                                (t -= 3) > -1 && o.push(239, 191, 189);
                                continue
                            }
                            if (a + 1 === n) {
                                (t -= 3) > -1 && o.push(239, 191, 189);
                                continue
                            }
                            i = r;
                            continue
                        }
                        if (r < 56320) {
                            (t -= 3) > -1 && o.push(239, 191, 189), i = r;
                            continue
                        }
                        r = 65536 + (i - 55296 << 10 | r - 56320)
                    } else i && (t -= 3) > -1 && o.push(239, 191, 189);
                    if (i = null, r < 128) {
                        if ((t -= 1) < 0) break;
                        o.push(r)
                    } else if (r < 2048) {
                        if ((t -= 2) < 0) break;
                        o.push(r >> 6 | 192, 63 & r | 128)
                    } else if (r < 65536) {
                        if ((t -= 3) < 0) break;
                        o.push(r >> 12 | 224, r >> 6 & 63 | 128, 63 & r | 128)
                    } else {
                        if (!(r < 1114112)) throw new Error("Invalid code point");
                        if ((t -= 4) < 0) break;
                        o.push(r >> 18 | 240, r >> 12 & 63 | 128, r >> 6 & 63 | 128, 63 & r | 128)
                    }
                }
                return o
            }

            function me(e) {
                return function(e) {
                    var t, r, n, i, o, a;
                    O || S();
                    var c = e.length;
                    if (c % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
                    o = "=" === e[c - 2] ? 2 : "=" === e[c - 1] ? 1 : 0, a = new _(3 * c / 4 - o), n = o > 0 ? c - 4 : c;
                    var s = 0;
                    for (t = 0, r = 0; t < n; t += 4, r += 3) i = w[e.charCodeAt(t)] << 18 | w[e.charCodeAt(t + 1)] << 12 | w[e.charCodeAt(t + 2)] << 6 | w[e.charCodeAt(t + 3)], a[s++] = i >> 16 & 255, a[s++] = i >> 8 & 255, a[s++] = 255 & i;
                    return 2 === o ? (i = w[e.charCodeAt(t)] << 2 | w[e.charCodeAt(t + 1)] >> 4, a[s++] = 255 & i) : 1 === o && (i = w[e.charCodeAt(t)] << 10 | w[e.charCodeAt(t + 1)] << 4 | w[e.charCodeAt(t + 2)] >> 2, a[s++] = i >> 8 & 255, a[s++] = 255 & i), a
                }(function(e) {
                    if ((e = function(e) {
                            return e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, "")
                        }(e).replace(fe, "")).length < 2) return "";
                    for (; e.length % 4 !== 0;) e += "=";
                    return e
                }(e))
            }

            function ge(e, t, r, n) {
                for (var i = 0; i < n && !(i + r >= t.length || i >= e.length); ++i) t[i + r] = e[i];
                return i
            }

            function pe(e) {
                return !!e.constructor && "function" === typeof e.constructor.isBuffer && e.constructor.isBuffer(e)
            }
            var ye = "undefined" !== typeof globalThis ? globalThis : "undefined" !== typeof window ? window : "undefined" !== typeof r.g ? r.g : "undefined" !== typeof self ? self : {};

            function ve(e) {
                if (e.__esModule) return e;
                var t = Object.defineProperty({}, "__esModule", {
                    value: !0
                });
                return Object.keys(e).forEach((function(r) {
                    var n = Object.getOwnPropertyDescriptor(e, r);
                    Object.defineProperty(t, r, n.get ? n : {
                        enumerable: !0,
                        get: function() {
                            return e[r]
                        }
                    })
                })), t
            }
            var be = {
                    exports: {}
                },
                Ae = {};

            function we() {
                throw new Error("setTimeout has not been defined")
            }

            function _e() {
                throw new Error("clearTimeout has not been defined")
            }
            var Oe = we,
                Se = _e;

            function Ee(e) {
                if (Oe === setTimeout) return setTimeout(e, 0);
                if ((Oe === we || !Oe) && setTimeout) return Oe = setTimeout, setTimeout(e, 0);
                try {
                    return Oe(e, 0)
                } catch (t) {
                    try {
                        return Oe.call(null, e, 0)
                    } catch (t) {
                        return Oe.call(this, e, 0)
                    }
                }
            }
            "function" === typeof b.setTimeout && (Oe = setTimeout), "function" === typeof b.clearTimeout && (Se = clearTimeout);
            var Te, xe = [],
                ke = !1,
                Re = -1;

            function Ue() {
                ke && Te && (ke = !1, Te.length ? xe = Te.concat(xe) : Re = -1, xe.length && Ce())
            }

            function Ce() {
                if (!ke) {
                    var e = Ee(Ue);
                    ke = !0;
                    for (var t = xe.length; t;) {
                        for (Te = xe, xe = []; ++Re < t;) Te && Te[Re].run();
                        Re = -1, t = xe.length
                    }
                    Te = null, ke = !1,
                        function(e) {
                            if (Se === clearTimeout) return clearTimeout(e);
                            if ((Se === _e || !Se) && clearTimeout) return Se = clearTimeout, clearTimeout(e);
                            try {
                                Se(e)
                            } catch (t) {
                                try {
                                    return Se.call(null, e)
                                } catch (t) {
                                    return Se.call(this, e)
                                }
                            }
                        }(e)
                }
            }

            function Pe(e, t) {
                this.fun = e, this.array = t
            }
            Pe.prototype.run = function() {
                this.fun.apply(null, this.array)
            };

            function Fe() {}
            var De = Fe,
                Ie = Fe,
                Le = Fe,
                Ne = Fe,
                je = Fe,
                Me = Fe,
                Be = Fe;
            var Ye = b.performance || {},
                We = Ye.now || Ye.mozNow || Ye.msNow || Ye.oNow || Ye.webkitNow || function() {
                    return (new Date).getTime()
                };
            var qe = new Date;
            var ze, Ve = {
                    nextTick: function(e) {
                        var t = new Array(arguments.length - 1);
                        if (arguments.length > 1)
                            for (var r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
                        xe.push(new Pe(e, t)), 1 !== xe.length || ke || Ee(Ce)
                    },
                    title: "browser",
                    browser: !0,
                    env: {},
                    argv: [],
                    version: "",
                    versions: {},
                    on: De,
                    addListener: Ie,
                    once: Le,
                    off: Ne,
                    removeListener: je,
                    removeAllListeners: Me,
                    emit: Be,
                    binding: function(e) {
                        throw new Error("process.binding is not supported")
                    },
                    cwd: function() {
                        return "/"
                    },
                    chdir: function(e) {
                        throw new Error("process.chdir is not supported")
                    },
                    umask: function() {
                        return 0
                    },
                    hrtime: function(e) {
                        var t = .001 * We.call(Ye),
                            r = Math.floor(t),
                            n = Math.floor(t % 1 * 1e9);
                        return e && (r -= e[0], (n -= e[1]) < 0 && (r--, n += 1e9)), [r, n]
                    },
                    platform: "browser",
                    release: {},
                    config: {},
                    uptime: function() {
                        return (new Date - qe) / 1e3
                    }
                },
                Ge = {
                    exports: {}
                },
                Ze = "object" === typeof Reflect ? Reflect : null,
                Ke = Ze && "function" === typeof Ze.apply ? Ze.apply : function(e, t, r) {
                    return Function.prototype.apply.call(e, t, r)
                };
            ze = Ze && "function" === typeof Ze.ownKeys ? Ze.ownKeys : Object.getOwnPropertySymbols ? function(e) {
                return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))
            } : function(e) {
                return Object.getOwnPropertyNames(e)
            };
            var He = Number.isNaN || function(e) {
                return e !== e
            };

            function Je() {
                Je.init.call(this)
            }
            Ge.exports = Je, Ge.exports.once = function(e, t) {
                return new Promise((function(r, n) {
                    function i(r) {
                        e.removeListener(t, o), n(r)
                    }

                    function o() {
                        "function" === typeof e.removeListener && e.removeListener("error", i), r([].slice.call(arguments))
                    }
                    at(e, t, o, {
                        once: !0
                    }), "error" !== t && function(e, t, r) {
                        "function" === typeof e.on && at(e, "error", t, r)
                    }(e, i, {
                        once: !0
                    })
                }))
            }, Je.EventEmitter = Je, Je.prototype._events = void 0, Je.prototype._eventsCount = 0, Je.prototype._maxListeners = void 0;
            var Xe = 10;

            function $e(e) {
                if ("function" !== typeof e) throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof e)
            }

            function Qe(e) {
                return void 0 === e._maxListeners ? Je.defaultMaxListeners : e._maxListeners
            }

            function et(e, t, r, n) {
                var i, o, a, c;
                if ($e(r), void 0 === (o = e._events) ? (o = e._events = Object.create(null), e._eventsCount = 0) : (void 0 !== o.newListener && (e.emit("newListener", t, r.listener ? r.listener : r), o = e._events), a = o[t]), void 0 === a) a = o[t] = r, ++e._eventsCount;
                else if ("function" === typeof a ? a = o[t] = n ? [r, a] : [a, r] : n ? a.unshift(r) : a.push(r), (i = Qe(e)) > 0 && a.length > i && !a.warned) {
                    a.warned = !0;
                    var s = new Error("Possible EventEmitter memory leak detected. " + a.length + " " + String(t) + " listeners added. Use emitter.setMaxListeners() to increase limit");
                    s.name = "MaxListenersExceededWarning", s.emitter = e, s.type = t, s.count = a.length, c = s, console && console.warn && console.warn(c)
                }
                return e
            }

            function tt() {
                if (!this.fired) return this.target.removeListener(this.type, this.wrapFn), this.fired = !0, 0 === arguments.length ? this.listener.call(this.target) : this.listener.apply(this.target, arguments)
            }

            function rt(e, t, r) {
                var n = {
                        fired: !1,
                        wrapFn: void 0,
                        target: e,
                        type: t,
                        listener: r
                    },
                    i = tt.bind(n);
                return i.listener = r, n.wrapFn = i, i
            }

            function nt(e, t, r) {
                var n = e._events;
                if (void 0 === n) return [];
                var i = n[t];
                return void 0 === i ? [] : "function" === typeof i ? r ? [i.listener || i] : [i] : r ? function(e) {
                    for (var t = new Array(e.length), r = 0; r < t.length; ++r) t[r] = e[r].listener || e[r];
                    return t
                }(i) : ot(i, i.length)
            }

            function it(e) {
                var t = this._events;
                if (void 0 !== t) {
                    var r = t[e];
                    if ("function" === typeof r) return 1;
                    if (void 0 !== r) return r.length
                }
                return 0
            }

            function ot(e, t) {
                for (var r = new Array(t), n = 0; n < t; ++n) r[n] = e[n];
                return r
            }

            function at(e, t, r, n) {
                if ("function" === typeof e.on) n.once ? e.once(t, r) : e.on(t, r);
                else {
                    if ("function" !== typeof e.addEventListener) throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof e);
                    e.addEventListener(t, (function i(o) {
                        n.once && e.removeEventListener(t, i), r(o)
                    }))
                }
            }
            Object.defineProperty(Je, "defaultMaxListeners", {
                enumerable: !0,
                get: function() {
                    return Xe
                },
                set: function(e) {
                    if ("number" !== typeof e || e < 0 || He(e)) throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + e + ".");
                    Xe = e
                }
            }), Je.init = function() {
                void 0 !== this._events && this._events !== Object.getPrototypeOf(this)._events || (this._events = Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0
            }, Je.prototype.setMaxListeners = function(e) {
                if ("number" !== typeof e || e < 0 || He(e)) throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + e + ".");
                return this._maxListeners = e, this
            }, Je.prototype.getMaxListeners = function() {
                return Qe(this)
            }, Je.prototype.emit = function(e) {
                for (var t = [], r = 1; r < arguments.length; r++) t.push(arguments[r]);
                var n = "error" === e,
                    i = this._events;
                if (void 0 !== i) n = n && void 0 === i.error;
                else if (!n) return !1;
                if (n) {
                    var o;
                    if (t.length > 0 && (o = t[0]), o instanceof Error) throw o;
                    var a = new Error("Unhandled error." + (o ? " (" + o.message + ")" : ""));
                    throw a.context = o, a
                }
                var c = i[e];
                if (void 0 === c) return !1;
                if ("function" === typeof c) Ke(c, this, t);
                else {
                    var s = c.length,
                        u = ot(c, s);
                    for (r = 0; r < s; ++r) Ke(u[r], this, t)
                }
                return !0
            }, Je.prototype.addListener = function(e, t) {
                return et(this, e, t, !1)
            }, Je.prototype.on = Je.prototype.addListener, Je.prototype.prependListener = function(e, t) {
                return et(this, e, t, !0)
            }, Je.prototype.once = function(e, t) {
                return $e(t), this.on(e, rt(this, e, t)), this
            }, Je.prototype.prependOnceListener = function(e, t) {
                return $e(t), this.prependListener(e, rt(this, e, t)), this
            }, Je.prototype.removeListener = function(e, t) {
                var r, n, i, o, a;
                if ($e(t), void 0 === (n = this._events)) return this;
                if (void 0 === (r = n[e])) return this;
                if (r === t || r.listener === t) 0 === --this._eventsCount ? this._events = Object.create(null) : (delete n[e], n.removeListener && this.emit("removeListener", e, r.listener || t));
                else if ("function" !== typeof r) {
                    for (i = -1, o = r.length - 1; o >= 0; o--)
                        if (r[o] === t || r[o].listener === t) {
                            a = r[o].listener, i = o;
                            break
                        }
                    if (i < 0) return this;
                    0 === i ? r.shift() : function(e, t) {
                        for (; t + 1 < e.length; t++) e[t] = e[t + 1];
                        e.pop()
                    }(r, i), 1 === r.length && (n[e] = r[0]), void 0 !== n.removeListener && this.emit("removeListener", e, a || t)
                }
                return this
            }, Je.prototype.off = Je.prototype.removeListener, Je.prototype.removeAllListeners = function(e) {
                var t, r, n;
                if (void 0 === (r = this._events)) return this;
                if (void 0 === r.removeListener) return 0 === arguments.length ? (this._events = Object.create(null), this._eventsCount = 0) : void 0 !== r[e] && (0 === --this._eventsCount ? this._events = Object.create(null) : delete r[e]), this;
                if (0 === arguments.length) {
                    var i, o = Object.keys(r);
                    for (n = 0; n < o.length; ++n) "removeListener" !== (i = o[n]) && this.removeAllListeners(i);
                    return this.removeAllListeners("removeListener"), this._events = Object.create(null), this._eventsCount = 0, this
                }
                if ("function" === typeof(t = r[e])) this.removeListener(e, t);
                else if (void 0 !== t)
                    for (n = t.length - 1; n >= 0; n--) this.removeListener(e, t[n]);
                return this
            }, Je.prototype.listeners = function(e) {
                return nt(this, e, !0)
            }, Je.prototype.rawListeners = function(e) {
                return nt(this, e, !1)
            }, Je.listenerCount = function(e, t) {
                return "function" === typeof e.listenerCount ? e.listenerCount(t) : it.call(e, t)
            }, Je.prototype.listenerCount = it, Je.prototype.eventNames = function() {
                return this._eventsCount > 0 ? ze(this._events) : []
            };
            for (var ct = Ge.exports.EventEmitter, st = {}, ut = {
                    byteLength: function(e) {
                        var t = pt(e),
                            r = t[0],
                            n = t[1];
                        return 3 * (r + n) / 4 - n
                    },
                    toByteArray: function(e) {
                        var t, r, n = pt(e),
                            i = n[0],
                            o = n[1],
                            a = new ht(function(e, t, r) {
                                return 3 * (t + r) / 4 - r
                            }(0, i, o)),
                            c = 0,
                            s = o > 0 ? i - 4 : i;
                        for (r = 0; r < s; r += 4) t = ft[e.charCodeAt(r)] << 18 | ft[e.charCodeAt(r + 1)] << 12 | ft[e.charCodeAt(r + 2)] << 6 | ft[e.charCodeAt(r + 3)], a[c++] = t >> 16 & 255, a[c++] = t >> 8 & 255, a[c++] = 255 & t;
                        2 === o && (t = ft[e.charCodeAt(r)] << 2 | ft[e.charCodeAt(r + 1)] >> 4, a[c++] = 255 & t);
                        1 === o && (t = ft[e.charCodeAt(r)] << 10 | ft[e.charCodeAt(r + 1)] << 4 | ft[e.charCodeAt(r + 2)] >> 2, a[c++] = t >> 8 & 255, a[c++] = 255 & t);
                        return a
                    },
                    fromByteArray: function(e) {
                        for (var t, r = e.length, n = r % 3, i = [], o = 16383, a = 0, c = r - n; a < c; a += o) i.push(yt(e, a, a + o > c ? c : a + o));
                        1 === n ? (t = e[r - 1], i.push(lt[t >> 2] + lt[t << 4 & 63] + "==")) : 2 === n && (t = (e[r - 2] << 8) + e[r - 1], i.push(lt[t >> 10] + lt[t >> 4 & 63] + lt[t << 2 & 63] + "="));
                        return i.join("")
                    }
                }, lt = [], ft = [], ht = "undefined" !== typeof Uint8Array ? Uint8Array : Array, dt = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", mt = 0, gt = dt.length; mt < gt; ++mt) lt[mt] = dt[mt], ft[dt.charCodeAt(mt)] = mt;

            function pt(e) {
                var t = e.length;
                if (t % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
                var r = e.indexOf("=");
                return -1 === r && (r = t), [r, r === t ? 0 : 4 - r % 4]
            }

            function yt(e, t, r) {
                for (var n, i, o = [], a = t; a < r; a += 3) n = (e[a] << 16 & 16711680) + (e[a + 1] << 8 & 65280) + (255 & e[a + 2]), o.push(lt[(i = n) >> 18 & 63] + lt[i >> 12 & 63] + lt[i >> 6 & 63] + lt[63 & i]);
                return o.join("")
            }
            ft["-".charCodeAt(0)] = 62, ft["_".charCodeAt(0)] = 63;
            var vt = {
                read: function(e, t, r, n, i) {
                    var o, a, c = 8 * i - n - 1,
                        s = (1 << c) - 1,
                        u = s >> 1,
                        l = -7,
                        f = r ? i - 1 : 0,
                        h = r ? -1 : 1,
                        d = e[t + f];
                    for (f += h, o = d & (1 << -l) - 1, d >>= -l, l += c; l > 0; o = 256 * o + e[t + f], f += h, l -= 8);
                    for (a = o & (1 << -l) - 1, o >>= -l, l += n; l > 0; a = 256 * a + e[t + f], f += h, l -= 8);
                    if (0 === o) o = 1 - u;
                    else {
                        if (o === s) return a ? NaN : 1 / 0 * (d ? -1 : 1);
                        a += Math.pow(2, n), o -= u
                    }
                    return (d ? -1 : 1) * a * Math.pow(2, o - n)
                },
                write: function(e, t, r, n, i, o) {
                    var a, c, s, u = 8 * o - i - 1,
                        l = (1 << u) - 1,
                        f = l >> 1,
                        h = 23 === i ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
                        d = n ? 0 : o - 1,
                        m = n ? 1 : -1,
                        g = t < 0 || 0 === t && 1 / t < 0 ? 1 : 0;
                    for (t = Math.abs(t), isNaN(t) || t === 1 / 0 ? (c = isNaN(t) ? 1 : 0, a = l) : (a = Math.floor(Math.log(t) / Math.LN2), t * (s = Math.pow(2, -a)) < 1 && (a--, s *= 2), (t += a + f >= 1 ? h / s : h * Math.pow(2, 1 - f)) * s >= 2 && (a++, s /= 2), a + f >= l ? (c = 0, a = l) : a + f >= 1 ? (c = (t * s - 1) * Math.pow(2, i), a += f) : (c = t * Math.pow(2, f - 1) * Math.pow(2, i), a = 0)); i >= 8; e[r + d] = 255 & c, d += m, c /= 256, i -= 8);
                    for (a = a << i | c, u += i; u > 0; e[r + d] = 255 & a, d += m, a /= 256, u -= 8);
                    e[r + d - m] |= 128 * g
                }
            };
            ! function(e) {
                var t = ut,
                    r = vt,
                    n = "function" === typeof Symbol && "function" === typeof Symbol.for ? Symbol.for("nodejs.util.inspect.custom") : null;
                e.Buffer = a, e.SlowBuffer = function(e) {
                    +e != e && (e = 0);
                    return a.alloc(+e)
                }, e.INSPECT_MAX_BYTES = 50;
                var i = 2147483647;

                function o(e) {
                    if (e > i) throw new RangeError('The value "' + e + '" is invalid for option "size"');
                    var t = new Uint8Array(e);
                    return Object.setPrototypeOf(t, a.prototype), t
                }

                function a(e, t, r) {
                    if ("number" === typeof e) {
                        if ("string" === typeof t) throw new TypeError('The "string" argument must be of type string. Received type number');
                        return u(e)
                    }
                    return c(e, t, r)
                }

                function c(e, t, r) {
                    if ("string" === typeof e) return function(e, t) {
                        "string" === typeof t && "" !== t || (t = "utf8");
                        if (!a.isEncoding(t)) throw new TypeError("Unknown encoding: " + t);
                        var r = 0 | d(e, t),
                            n = o(r),
                            i = n.write(e, t);
                        i !== r && (n = n.slice(0, i));
                        return n
                    }(e, t);
                    if (ArrayBuffer.isView(e)) return function(e) {
                        if (M(e, Uint8Array)) {
                            var t = new Uint8Array(e);
                            return f(t.buffer, t.byteOffset, t.byteLength)
                        }
                        return l(e)
                    }(e);
                    if (null == e) throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof e);
                    if (M(e, ArrayBuffer) || e && M(e.buffer, ArrayBuffer)) return f(e, t, r);
                    if ("undefined" !== typeof SharedArrayBuffer && (M(e, SharedArrayBuffer) || e && M(e.buffer, SharedArrayBuffer))) return f(e, t, r);
                    if ("number" === typeof e) throw new TypeError('The "value" argument must not be of type number. Received type number');
                    var n = e.valueOf && e.valueOf();
                    if (null != n && n !== e) return a.from(n, t, r);
                    var i = function(e) {
                        if (a.isBuffer(e)) {
                            var t = 0 | h(e.length),
                                r = o(t);
                            return 0 === r.length || e.copy(r, 0, 0, t), r
                        }
                        if (void 0 !== e.length) return "number" !== typeof e.length || B(e.length) ? o(0) : l(e);
                        if ("Buffer" === e.type && Array.isArray(e.data)) return l(e.data)
                    }(e);
                    if (i) return i;
                    if ("undefined" !== typeof Symbol && null != Symbol.toPrimitive && "function" === typeof e[Symbol.toPrimitive]) return a.from(e[Symbol.toPrimitive]("string"), t, r);
                    throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof e)
                }

                function s(e) {
                    if ("number" !== typeof e) throw new TypeError('"size" argument must be of type number');
                    if (e < 0) throw new RangeError('The value "' + e + '" is invalid for option "size"')
                }

                function u(e) {
                    return s(e), o(e < 0 ? 0 : 0 | h(e))
                }

                function l(e) {
                    for (var t = e.length < 0 ? 0 : 0 | h(e.length), r = o(t), n = 0; n < t; n += 1) r[n] = 255 & e[n];
                    return r
                }

                function f(e, t, r) {
                    if (t < 0 || e.byteLength < t) throw new RangeError('"offset" is outside of buffer bounds');
                    if (e.byteLength < t + (r || 0)) throw new RangeError('"length" is outside of buffer bounds');
                    var n;
                    return n = void 0 === t && void 0 === r ? new Uint8Array(e) : void 0 === r ? new Uint8Array(e, t) : new Uint8Array(e, t, r), Object.setPrototypeOf(n, a.prototype), n
                }

                function h(e) {
                    if (e >= i) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + i.toString(16) + " bytes");
                    return 0 | e
                }

                function d(e, t) {
                    if (a.isBuffer(e)) return e.length;
                    if (ArrayBuffer.isView(e) || M(e, ArrayBuffer)) return e.byteLength;
                    if ("string" !== typeof e) throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof e);
                    var r = e.length,
                        n = arguments.length > 2 && !0 === arguments[2];
                    if (!n && 0 === r) return 0;
                    for (var i = !1;;) switch (t) {
                        case "ascii":
                        case "latin1":
                        case "binary":
                            return r;
                        case "utf8":
                        case "utf-8":
                            return L(e).length;
                        case "ucs2":
                        case "ucs-2":
                        case "utf16le":
                        case "utf-16le":
                            return 2 * r;
                        case "hex":
                            return r >>> 1;
                        case "base64":
                            return N(e).length;
                        default:
                            if (i) return n ? -1 : L(e).length;
                            t = ("" + t).toLowerCase(), i = !0
                    }
                }

                function m(e, t, r) {
                    var n = !1;
                    if ((void 0 === t || t < 0) && (t = 0), t > this.length) return "";
                    if ((void 0 === r || r > this.length) && (r = this.length), r <= 0) return "";
                    if ((r >>>= 0) <= (t >>>= 0)) return "";
                    for (e || (e = "utf8");;) switch (e) {
                        case "hex":
                            return k(this, t, r);
                        case "utf8":
                        case "utf-8":
                            return S(this, t, r);
                        case "ascii":
                            return T(this, t, r);
                        case "latin1":
                        case "binary":
                            return x(this, t, r);
                        case "base64":
                            return O(this, t, r);
                        case "ucs2":
                        case "ucs-2":
                        case "utf16le":
                        case "utf-16le":
                            return R(this, t, r);
                        default:
                            if (n) throw new TypeError("Unknown encoding: " + e);
                            e = (e + "").toLowerCase(), n = !0
                    }
                }

                function g(e, t, r) {
                    var n = e[t];
                    e[t] = e[r], e[r] = n
                }

                function p(e, t, r, n, i) {
                    if (0 === e.length) return -1;
                    if ("string" === typeof r ? (n = r, r = 0) : r > 2147483647 ? r = 2147483647 : r < -2147483648 && (r = -2147483648), B(r = +r) && (r = i ? 0 : e.length - 1), r < 0 && (r = e.length + r), r >= e.length) {
                        if (i) return -1;
                        r = e.length - 1
                    } else if (r < 0) {
                        if (!i) return -1;
                        r = 0
                    }
                    if ("string" === typeof t && (t = a.from(t, n)), a.isBuffer(t)) return 0 === t.length ? -1 : y(e, t, r, n, i);
                    if ("number" === typeof t) return t &= 255, "function" === typeof Uint8Array.prototype.indexOf ? i ? Uint8Array.prototype.indexOf.call(e, t, r) : Uint8Array.prototype.lastIndexOf.call(e, t, r) : y(e, [t], r, n, i);
                    throw new TypeError("val must be string, number or Buffer")
                }

                function y(e, t, r, n, i) {
                    var o, a = 1,
                        c = e.length,
                        s = t.length;
                    if (void 0 !== n && ("ucs2" === (n = String(n).toLowerCase()) || "ucs-2" === n || "utf16le" === n || "utf-16le" === n)) {
                        if (e.length < 2 || t.length < 2) return -1;
                        a = 2, c /= 2, s /= 2, r /= 2
                    }

                    function u(e, t) {
                        return 1 === a ? e[t] : e.readUInt16BE(t * a)
                    }
                    if (i) {
                        var l = -1;
                        for (o = r; o < c; o++)
                            if (u(e, o) === u(t, -1 === l ? 0 : o - l)) {
                                if (-1 === l && (l = o), o - l + 1 === s) return l * a
                            } else -1 !== l && (o -= o - l), l = -1
                    } else
                        for (r + s > c && (r = c - s), o = r; o >= 0; o--) {
                            for (var f = !0, h = 0; h < s; h++)
                                if (u(e, o + h) !== u(t, h)) {
                                    f = !1;
                                    break
                                }
                            if (f) return o
                        }
                    return -1
                }

                function v(e, t, r, n) {
                    r = Number(r) || 0;
                    var i = e.length - r;
                    n ? (n = Number(n)) > i && (n = i) : n = i;
                    var o = t.length;
                    n > o / 2 && (n = o / 2);
                    for (var a = 0; a < n; ++a) {
                        var c = parseInt(t.substr(2 * a, 2), 16);
                        if (B(c)) return a;
                        e[r + a] = c
                    }
                    return a
                }

                function b(e, t, r, n) {
                    return j(L(t, e.length - r), e, r, n)
                }

                function A(e, t, r, n) {
                    return j(function(e) {
                        for (var t = [], r = 0; r < e.length; ++r) t.push(255 & e.charCodeAt(r));
                        return t
                    }(t), e, r, n)
                }

                function w(e, t, r, n) {
                    return j(N(t), e, r, n)
                }

                function _(e, t, r, n) {
                    return j(function(e, t) {
                        for (var r, n, i, o = [], a = 0; a < e.length && !((t -= 2) < 0); ++a) n = (r = e.charCodeAt(a)) >> 8, i = r % 256, o.push(i), o.push(n);
                        return o
                    }(t, e.length - r), e, r, n)
                }

                function O(e, r, n) {
                    return 0 === r && n === e.length ? t.fromByteArray(e) : t.fromByteArray(e.slice(r, n))
                }

                function S(e, t, r) {
                    r = Math.min(e.length, r);
                    for (var n = [], i = t; i < r;) {
                        var o, a, c, s, u = e[i],
                            l = null,
                            f = u > 239 ? 4 : u > 223 ? 3 : u > 191 ? 2 : 1;
                        if (i + f <= r) switch (f) {
                            case 1:
                                u < 128 && (l = u);
                                break;
                            case 2:
                                128 === (192 & (o = e[i + 1])) && (s = (31 & u) << 6 | 63 & o) > 127 && (l = s);
                                break;
                            case 3:
                                o = e[i + 1], a = e[i + 2], 128 === (192 & o) && 128 === (192 & a) && (s = (15 & u) << 12 | (63 & o) << 6 | 63 & a) > 2047 && (s < 55296 || s > 57343) && (l = s);
                                break;
                            case 4:
                                o = e[i + 1], a = e[i + 2], c = e[i + 3], 128 === (192 & o) && 128 === (192 & a) && 128 === (192 & c) && (s = (15 & u) << 18 | (63 & o) << 12 | (63 & a) << 6 | 63 & c) > 65535 && s < 1114112 && (l = s)
                        }
                        null === l ? (l = 65533, f = 1) : l > 65535 && (l -= 65536, n.push(l >>> 10 & 1023 | 55296), l = 56320 | 1023 & l), n.push(l), i += f
                    }
                    return function(e) {
                        var t = e.length;
                        if (t <= E) return String.fromCharCode.apply(String, e);
                        var r = "",
                            n = 0;
                        for (; n < t;) r += String.fromCharCode.apply(String, e.slice(n, n += E));
                        return r
                    }(n)
                }
                e.kMaxLength = i, a.TYPED_ARRAY_SUPPORT = function() {
                    try {
                        var e = new Uint8Array(1),
                            t = {
                                foo: function() {
                                    return 42
                                }
                            };
                        return Object.setPrototypeOf(t, Uint8Array.prototype), Object.setPrototypeOf(e, t), 42 === e.foo()
                    } catch (r) {
                        return !1
                    }
                }(), a.TYPED_ARRAY_SUPPORT || "undefined" === typeof console || "function" !== typeof console.error || console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."), Object.defineProperty(a.prototype, "parent", {
                    enumerable: !0,
                    get: function() {
                        if (a.isBuffer(this)) return this.buffer
                    }
                }), Object.defineProperty(a.prototype, "offset", {
                    enumerable: !0,
                    get: function() {
                        if (a.isBuffer(this)) return this.byteOffset
                    }
                }), a.poolSize = 8192, a.from = function(e, t, r) {
                    return c(e, t, r)
                }, Object.setPrototypeOf(a.prototype, Uint8Array.prototype), Object.setPrototypeOf(a, Uint8Array), a.alloc = function(e, t, r) {
                    return function(e, t, r) {
                        return s(e), e <= 0 ? o(e) : void 0 !== t ? "string" === typeof r ? o(e).fill(t, r) : o(e).fill(t) : o(e)
                    }(e, t, r)
                }, a.allocUnsafe = function(e) {
                    return u(e)
                }, a.allocUnsafeSlow = function(e) {
                    return u(e)
                }, a.isBuffer = function(e) {
                    return null != e && !0 === e._isBuffer && e !== a.prototype
                }, a.compare = function(e, t) {
                    if (M(e, Uint8Array) && (e = a.from(e, e.offset, e.byteLength)), M(t, Uint8Array) && (t = a.from(t, t.offset, t.byteLength)), !a.isBuffer(e) || !a.isBuffer(t)) throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
                    if (e === t) return 0;
                    for (var r = e.length, n = t.length, i = 0, o = Math.min(r, n); i < o; ++i)
                        if (e[i] !== t[i]) {
                            r = e[i], n = t[i];
                            break
                        }
                    return r < n ? -1 : n < r ? 1 : 0
                }, a.isEncoding = function(e) {
                    switch (String(e).toLowerCase()) {
                        case "hex":
                        case "utf8":
                        case "utf-8":
                        case "ascii":
                        case "latin1":
                        case "binary":
                        case "base64":
                        case "ucs2":
                        case "ucs-2":
                        case "utf16le":
                        case "utf-16le":
                            return !0;
                        default:
                            return !1
                    }
                }, a.concat = function(e, t) {
                    if (!Array.isArray(e)) throw new TypeError('"list" argument must be an Array of Buffers');
                    if (0 === e.length) return a.alloc(0);
                    var r;
                    if (void 0 === t)
                        for (t = 0, r = 0; r < e.length; ++r) t += e[r].length;
                    var n = a.allocUnsafe(t),
                        i = 0;
                    for (r = 0; r < e.length; ++r) {
                        var o = e[r];
                        if (M(o, Uint8Array)) i + o.length > n.length ? a.from(o).copy(n, i) : Uint8Array.prototype.set.call(n, o, i);
                        else {
                            if (!a.isBuffer(o)) throw new TypeError('"list" argument must be an Array of Buffers');
                            o.copy(n, i)
                        }
                        i += o.length
                    }
                    return n
                }, a.byteLength = d, a.prototype._isBuffer = !0, a.prototype.swap16 = function() {
                    var e = this.length;
                    if (e % 2 !== 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
                    for (var t = 0; t < e; t += 2) g(this, t, t + 1);
                    return this
                }, a.prototype.swap32 = function() {
                    var e = this.length;
                    if (e % 4 !== 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
                    for (var t = 0; t < e; t += 4) g(this, t, t + 3), g(this, t + 1, t + 2);
                    return this
                }, a.prototype.swap64 = function() {
                    var e = this.length;
                    if (e % 8 !== 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
                    for (var t = 0; t < e; t += 8) g(this, t, t + 7), g(this, t + 1, t + 6), g(this, t + 2, t + 5), g(this, t + 3, t + 4);
                    return this
                }, a.prototype.toString = function() {
                    var e = this.length;
                    return 0 === e ? "" : 0 === arguments.length ? S(this, 0, e) : m.apply(this, arguments)
                }, a.prototype.toLocaleString = a.prototype.toString, a.prototype.equals = function(e) {
                    if (!a.isBuffer(e)) throw new TypeError("Argument must be a Buffer");
                    return this === e || 0 === a.compare(this, e)
                }, a.prototype.inspect = function() {
                    var t = "",
                        r = e.INSPECT_MAX_BYTES;
                    return t = this.toString("hex", 0, r).replace(/(.{2})/g, "$1 ").trim(), this.length > r && (t += " ... "), "<Buffer " + t + ">"
                }, n && (a.prototype[n] = a.prototype.inspect), a.prototype.compare = function(e, t, r, n, i) {
                    if (M(e, Uint8Array) && (e = a.from(e, e.offset, e.byteLength)), !a.isBuffer(e)) throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof e);
                    if (void 0 === t && (t = 0), void 0 === r && (r = e ? e.length : 0), void 0 === n && (n = 0), void 0 === i && (i = this.length), t < 0 || r > e.length || n < 0 || i > this.length) throw new RangeError("out of range index");
                    if (n >= i && t >= r) return 0;
                    if (n >= i) return -1;
                    if (t >= r) return 1;
                    if (this === e) return 0;
                    for (var o = (i >>>= 0) - (n >>>= 0), c = (r >>>= 0) - (t >>>= 0), s = Math.min(o, c), u = this.slice(n, i), l = e.slice(t, r), f = 0; f < s; ++f)
                        if (u[f] !== l[f]) {
                            o = u[f], c = l[f];
                            break
                        }
                    return o < c ? -1 : c < o ? 1 : 0
                }, a.prototype.includes = function(e, t, r) {
                    return -1 !== this.indexOf(e, t, r)
                }, a.prototype.indexOf = function(e, t, r) {
                    return p(this, e, t, r, !0)
                }, a.prototype.lastIndexOf = function(e, t, r) {
                    return p(this, e, t, r, !1)
                }, a.prototype.write = function(e, t, r, n) {
                    if (void 0 === t) n = "utf8", r = this.length, t = 0;
                    else if (void 0 === r && "string" === typeof t) n = t, r = this.length, t = 0;
                    else {
                        if (!isFinite(t)) throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
                        t >>>= 0, isFinite(r) ? (r >>>= 0, void 0 === n && (n = "utf8")) : (n = r, r = void 0)
                    }
                    var i = this.length - t;
                    if ((void 0 === r || r > i) && (r = i), e.length > 0 && (r < 0 || t < 0) || t > this.length) throw new RangeError("Attempt to write outside buffer bounds");
                    n || (n = "utf8");
                    for (var o = !1;;) switch (n) {
                        case "hex":
                            return v(this, e, t, r);
                        case "utf8":
                        case "utf-8":
                            return b(this, e, t, r);
                        case "ascii":
                        case "latin1":
                        case "binary":
                            return A(this, e, t, r);
                        case "base64":
                            return w(this, e, t, r);
                        case "ucs2":
                        case "ucs-2":
                        case "utf16le":
                        case "utf-16le":
                            return _(this, e, t, r);
                        default:
                            if (o) throw new TypeError("Unknown encoding: " + n);
                            n = ("" + n).toLowerCase(), o = !0
                    }
                }, a.prototype.toJSON = function() {
                    return {
                        type: "Buffer",
                        data: Array.prototype.slice.call(this._arr || this, 0)
                    }
                };
                var E = 4096;

                function T(e, t, r) {
                    var n = "";
                    r = Math.min(e.length, r);
                    for (var i = t; i < r; ++i) n += String.fromCharCode(127 & e[i]);
                    return n
                }

                function x(e, t, r) {
                    var n = "";
                    r = Math.min(e.length, r);
                    for (var i = t; i < r; ++i) n += String.fromCharCode(e[i]);
                    return n
                }

                function k(e, t, r) {
                    var n = e.length;
                    (!t || t < 0) && (t = 0), (!r || r < 0 || r > n) && (r = n);
                    for (var i = "", o = t; o < r; ++o) i += Y[e[o]];
                    return i
                }

                function R(e, t, r) {
                    for (var n = e.slice(t, r), i = "", o = 0; o < n.length - 1; o += 2) i += String.fromCharCode(n[o] + 256 * n[o + 1]);
                    return i
                }

                function U(e, t, r) {
                    if (e % 1 !== 0 || e < 0) throw new RangeError("offset is not uint");
                    if (e + t > r) throw new RangeError("Trying to access beyond buffer length")
                }

                function C(e, t, r, n, i, o) {
                    if (!a.isBuffer(e)) throw new TypeError('"buffer" argument must be a Buffer instance');
                    if (t > i || t < o) throw new RangeError('"value" argument is out of bounds');
                    if (r + n > e.length) throw new RangeError("Index out of range")
                }

                function P(e, t, r, n, i, o) {
                    if (r + n > e.length) throw new RangeError("Index out of range");
                    if (r < 0) throw new RangeError("Index out of range")
                }

                function F(e, t, n, i, o) {
                    return t = +t, n >>>= 0, o || P(e, 0, n, 4), r.write(e, t, n, i, 23, 4), n + 4
                }

                function D(e, t, n, i, o) {
                    return t = +t, n >>>= 0, o || P(e, 0, n, 8), r.write(e, t, n, i, 52, 8), n + 8
                }
                a.prototype.slice = function(e, t) {
                    var r = this.length;
                    (e = ~~e) < 0 ? (e += r) < 0 && (e = 0) : e > r && (e = r), (t = void 0 === t ? r : ~~t) < 0 ? (t += r) < 0 && (t = 0) : t > r && (t = r), t < e && (t = e);
                    var n = this.subarray(e, t);
                    return Object.setPrototypeOf(n, a.prototype), n
                }, a.prototype.readUintLE = a.prototype.readUIntLE = function(e, t, r) {
                    e >>>= 0, t >>>= 0, r || U(e, t, this.length);
                    for (var n = this[e], i = 1, o = 0; ++o < t && (i *= 256);) n += this[e + o] * i;
                    return n
                }, a.prototype.readUintBE = a.prototype.readUIntBE = function(e, t, r) {
                    e >>>= 0, t >>>= 0, r || U(e, t, this.length);
                    for (var n = this[e + --t], i = 1; t > 0 && (i *= 256);) n += this[e + --t] * i;
                    return n
                }, a.prototype.readUint8 = a.prototype.readUInt8 = function(e, t) {
                    return e >>>= 0, t || U(e, 1, this.length), this[e]
                }, a.prototype.readUint16LE = a.prototype.readUInt16LE = function(e, t) {
                    return e >>>= 0, t || U(e, 2, this.length), this[e] | this[e + 1] << 8
                }, a.prototype.readUint16BE = a.prototype.readUInt16BE = function(e, t) {
                    return e >>>= 0, t || U(e, 2, this.length), this[e] << 8 | this[e + 1]
                }, a.prototype.readUint32LE = a.prototype.readUInt32LE = function(e, t) {
                    return e >>>= 0, t || U(e, 4, this.length), (this[e] | this[e + 1] << 8 | this[e + 2] << 16) + 16777216 * this[e + 3]
                }, a.prototype.readUint32BE = a.prototype.readUInt32BE = function(e, t) {
                    return e >>>= 0, t || U(e, 4, this.length), 16777216 * this[e] + (this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3])
                }, a.prototype.readIntLE = function(e, t, r) {
                    e >>>= 0, t >>>= 0, r || U(e, t, this.length);
                    for (var n = this[e], i = 1, o = 0; ++o < t && (i *= 256);) n += this[e + o] * i;
                    return n >= (i *= 128) && (n -= Math.pow(2, 8 * t)), n
                }, a.prototype.readIntBE = function(e, t, r) {
                    e >>>= 0, t >>>= 0, r || U(e, t, this.length);
                    for (var n = t, i = 1, o = this[e + --n]; n > 0 && (i *= 256);) o += this[e + --n] * i;
                    return o >= (i *= 128) && (o -= Math.pow(2, 8 * t)), o
                }, a.prototype.readInt8 = function(e, t) {
                    return e >>>= 0, t || U(e, 1, this.length), 128 & this[e] ? -1 * (255 - this[e] + 1) : this[e]
                }, a.prototype.readInt16LE = function(e, t) {
                    e >>>= 0, t || U(e, 2, this.length);
                    var r = this[e] | this[e + 1] << 8;
                    return 32768 & r ? 4294901760 | r : r
                }, a.prototype.readInt16BE = function(e, t) {
                    e >>>= 0, t || U(e, 2, this.length);
                    var r = this[e + 1] | this[e] << 8;
                    return 32768 & r ? 4294901760 | r : r
                }, a.prototype.readInt32LE = function(e, t) {
                    return e >>>= 0, t || U(e, 4, this.length), this[e] | this[e + 1] << 8 | this[e + 2] << 16 | this[e + 3] << 24
                }, a.prototype.readInt32BE = function(e, t) {
                    return e >>>= 0, t || U(e, 4, this.length), this[e] << 24 | this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3]
                }, a.prototype.readFloatLE = function(e, t) {
                    return e >>>= 0, t || U(e, 4, this.length), r.read(this, e, !0, 23, 4)
                }, a.prototype.readFloatBE = function(e, t) {
                    return e >>>= 0, t || U(e, 4, this.length), r.read(this, e, !1, 23, 4)
                }, a.prototype.readDoubleLE = function(e, t) {
                    return e >>>= 0, t || U(e, 8, this.length), r.read(this, e, !0, 52, 8)
                }, a.prototype.readDoubleBE = function(e, t) {
                    return e >>>= 0, t || U(e, 8, this.length), r.read(this, e, !1, 52, 8)
                }, a.prototype.writeUintLE = a.prototype.writeUIntLE = function(e, t, r, n) {
                    (e = +e, t >>>= 0, r >>>= 0, n) || C(this, e, t, r, Math.pow(2, 8 * r) - 1, 0);
                    var i = 1,
                        o = 0;
                    for (this[t] = 255 & e; ++o < r && (i *= 256);) this[t + o] = e / i & 255;
                    return t + r
                }, a.prototype.writeUintBE = a.prototype.writeUIntBE = function(e, t, r, n) {
                    (e = +e, t >>>= 0, r >>>= 0, n) || C(this, e, t, r, Math.pow(2, 8 * r) - 1, 0);
                    var i = r - 1,
                        o = 1;
                    for (this[t + i] = 255 & e; --i >= 0 && (o *= 256);) this[t + i] = e / o & 255;
                    return t + r
                }, a.prototype.writeUint8 = a.prototype.writeUInt8 = function(e, t, r) {
                    return e = +e, t >>>= 0, r || C(this, e, t, 1, 255, 0), this[t] = 255 & e, t + 1
                }, a.prototype.writeUint16LE = a.prototype.writeUInt16LE = function(e, t, r) {
                    return e = +e, t >>>= 0, r || C(this, e, t, 2, 65535, 0), this[t] = 255 & e, this[t + 1] = e >>> 8, t + 2
                }, a.prototype.writeUint16BE = a.prototype.writeUInt16BE = function(e, t, r) {
                    return e = +e, t >>>= 0, r || C(this, e, t, 2, 65535, 0), this[t] = e >>> 8, this[t + 1] = 255 & e, t + 2
                }, a.prototype.writeUint32LE = a.prototype.writeUInt32LE = function(e, t, r) {
                    return e = +e, t >>>= 0, r || C(this, e, t, 4, 4294967295, 0), this[t + 3] = e >>> 24, this[t + 2] = e >>> 16, this[t + 1] = e >>> 8, this[t] = 255 & e, t + 4
                }, a.prototype.writeUint32BE = a.prototype.writeUInt32BE = function(e, t, r) {
                    return e = +e, t >>>= 0, r || C(this, e, t, 4, 4294967295, 0), this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = 255 & e, t + 4
                }, a.prototype.writeIntLE = function(e, t, r, n) {
                    if (e = +e, t >>>= 0, !n) {
                        var i = Math.pow(2, 8 * r - 1);
                        C(this, e, t, r, i - 1, -i)
                    }
                    var o = 0,
                        a = 1,
                        c = 0;
                    for (this[t] = 255 & e; ++o < r && (a *= 256);) e < 0 && 0 === c && 0 !== this[t + o - 1] && (c = 1), this[t + o] = (e / a >> 0) - c & 255;
                    return t + r
                }, a.prototype.writeIntBE = function(e, t, r, n) {
                    if (e = +e, t >>>= 0, !n) {
                        var i = Math.pow(2, 8 * r - 1);
                        C(this, e, t, r, i - 1, -i)
                    }
                    var o = r - 1,
                        a = 1,
                        c = 0;
                    for (this[t + o] = 255 & e; --o >= 0 && (a *= 256);) e < 0 && 0 === c && 0 !== this[t + o + 1] && (c = 1), this[t + o] = (e / a >> 0) - c & 255;
                    return t + r
                }, a.prototype.writeInt8 = function(e, t, r) {
                    return e = +e, t >>>= 0, r || C(this, e, t, 1, 127, -128), e < 0 && (e = 255 + e + 1), this[t] = 255 & e, t + 1
                }, a.prototype.writeInt16LE = function(e, t, r) {
                    return e = +e, t >>>= 0, r || C(this, e, t, 2, 32767, -32768), this[t] = 255 & e, this[t + 1] = e >>> 8, t + 2
                }, a.prototype.writeInt16BE = function(e, t, r) {
                    return e = +e, t >>>= 0, r || C(this, e, t, 2, 32767, -32768), this[t] = e >>> 8, this[t + 1] = 255 & e, t + 2
                }, a.prototype.writeInt32LE = function(e, t, r) {
                    return e = +e, t >>>= 0, r || C(this, e, t, 4, 2147483647, -2147483648), this[t] = 255 & e, this[t + 1] = e >>> 8, this[t + 2] = e >>> 16, this[t + 3] = e >>> 24, t + 4
                }, a.prototype.writeInt32BE = function(e, t, r) {
                    return e = +e, t >>>= 0, r || C(this, e, t, 4, 2147483647, -2147483648), e < 0 && (e = 4294967295 + e + 1), this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = 255 & e, t + 4
                }, a.prototype.writeFloatLE = function(e, t, r) {
                    return F(this, e, t, !0, r)
                }, a.prototype.writeFloatBE = function(e, t, r) {
                    return F(this, e, t, !1, r)
                }, a.prototype.writeDoubleLE = function(e, t, r) {
                    return D(this, e, t, !0, r)
                }, a.prototype.writeDoubleBE = function(e, t, r) {
                    return D(this, e, t, !1, r)
                }, a.prototype.copy = function(e, t, r, n) {
                    if (!a.isBuffer(e)) throw new TypeError("argument should be a Buffer");
                    if (r || (r = 0), n || 0 === n || (n = this.length), t >= e.length && (t = e.length), t || (t = 0), n > 0 && n < r && (n = r), n === r) return 0;
                    if (0 === e.length || 0 === this.length) return 0;
                    if (t < 0) throw new RangeError("targetStart out of bounds");
                    if (r < 0 || r >= this.length) throw new RangeError("Index out of range");
                    if (n < 0) throw new RangeError("sourceEnd out of bounds");
                    n > this.length && (n = this.length), e.length - t < n - r && (n = e.length - t + r);
                    var i = n - r;
                    return this === e && "function" === typeof Uint8Array.prototype.copyWithin ? this.copyWithin(t, r, n) : Uint8Array.prototype.set.call(e, this.subarray(r, n), t), i
                }, a.prototype.fill = function(e, t, r, n) {
                    if ("string" === typeof e) {
                        if ("string" === typeof t ? (n = t, t = 0, r = this.length) : "string" === typeof r && (n = r, r = this.length), void 0 !== n && "string" !== typeof n) throw new TypeError("encoding must be a string");
                        if ("string" === typeof n && !a.isEncoding(n)) throw new TypeError("Unknown encoding: " + n);
                        if (1 === e.length) {
                            var i = e.charCodeAt(0);
                            ("utf8" === n && i < 128 || "latin1" === n) && (e = i)
                        }
                    } else "number" === typeof e ? e &= 255 : "boolean" === typeof e && (e = Number(e));
                    if (t < 0 || this.length < t || this.length < r) throw new RangeError("Out of range index");
                    if (r <= t) return this;
                    var o;
                    if (t >>>= 0, r = void 0 === r ? this.length : r >>> 0, e || (e = 0), "number" === typeof e)
                        for (o = t; o < r; ++o) this[o] = e;
                    else {
                        var c = a.isBuffer(e) ? e : a.from(e, n),
                            s = c.length;
                        if (0 === s) throw new TypeError('The value "' + e + '" is invalid for argument "value"');
                        for (o = 0; o < r - t; ++o) this[o + t] = c[o % s]
                    }
                    return this
                };
                var I = /[^+/0-9A-Za-z-_]/g;

                function L(e, t) {
                    var r;
                    t = t || 1 / 0;
                    for (var n = e.length, i = null, o = [], a = 0; a < n; ++a) {
                        if ((r = e.charCodeAt(a)) > 55295 && r < 57344) {
                            if (!i) {
                                if (r > 56319) {
                                    (t -= 3) > -1 && o.push(239, 191, 189);
                                    continue
                                }
                                if (a + 1 === n) {
                                    (t -= 3) > -1 && o.push(239, 191, 189);
                                    continue
                                }
                                i = r;
                                continue
                            }
                            if (r < 56320) {
                                (t -= 3) > -1 && o.push(239, 191, 189), i = r;
                                continue
                            }
                            r = 65536 + (i - 55296 << 10 | r - 56320)
                        } else i && (t -= 3) > -1 && o.push(239, 191, 189);
                        if (i = null, r < 128) {
                            if ((t -= 1) < 0) break;
                            o.push(r)
                        } else if (r < 2048) {
                            if ((t -= 2) < 0) break;
                            o.push(r >> 6 | 192, 63 & r | 128)
                        } else if (r < 65536) {
                            if ((t -= 3) < 0) break;
                            o.push(r >> 12 | 224, r >> 6 & 63 | 128, 63 & r | 128)
                        } else {
                            if (!(r < 1114112)) throw new Error("Invalid code point");
                            if ((t -= 4) < 0) break;
                            o.push(r >> 18 | 240, r >> 12 & 63 | 128, r >> 6 & 63 | 128, 63 & r | 128)
                        }
                    }
                    return o
                }

                function N(e) {
                    return t.toByteArray(function(e) {
                        if ((e = (e = e.split("=")[0]).trim().replace(I, "")).length < 2) return "";
                        for (; e.length % 4 !== 0;) e += "=";
                        return e
                    }(e))
                }

                function j(e, t, r, n) {
                    for (var i = 0; i < n && !(i + r >= t.length || i >= e.length); ++i) t[i + r] = e[i];
                    return i
                }

                function M(e, t) {
                    return e instanceof t || null != e && null != e.constructor && null != e.constructor.name && e.constructor.name === t.name
                }

                function B(e) {
                    return e !== e
                }
                var Y = function() {
                    for (var e = "0123456789abcdef", t = new Array(256), r = 0; r < 16; ++r)
                        for (var n = 16 * r, i = 0; i < 16; ++i) t[n + i] = e[r] + e[i];
                    return t
                }()
            }(st);
            var bt = ve(Object.freeze({
                __proto__: null,
                default: {}
            }));

            function At(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function wt(e, t, r) {
                return t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r, e
            }

            function _t(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }
            var Ot = st.Buffer,
                St = bt.inspect,
                Et = St && St.custom || "inspect";

            function Tt(e, t, r) {
                Ot.prototype.copy.call(e, t, r)
            }
            var xt = function() {
                function e() {
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, e), this.head = null, this.tail = null, this.length = 0
                }
                var t, r, n;
                return t = e, r = [{
                    key: "push",
                    value: function(e) {
                        var t = {
                            data: e,
                            next: null
                        };
                        this.length > 0 ? this.tail.next = t : this.head = t, this.tail = t, ++this.length
                    }
                }, {
                    key: "unshift",
                    value: function(e) {
                        var t = {
                            data: e,
                            next: this.head
                        };
                        0 === this.length && (this.tail = t), this.head = t, ++this.length
                    }
                }, {
                    key: "shift",
                    value: function() {
                        if (0 !== this.length) {
                            var e = this.head.data;
                            return 1 === this.length ? this.head = this.tail = null : this.head = this.head.next, --this.length, e
                        }
                    }
                }, {
                    key: "clear",
                    value: function() {
                        this.head = this.tail = null, this.length = 0
                    }
                }, {
                    key: "join",
                    value: function(e) {
                        if (0 === this.length) return "";
                        for (var t = this.head, r = "" + t.data; t = t.next;) r += e + t.data;
                        return r
                    }
                }, {
                    key: "concat",
                    value: function(e) {
                        if (0 === this.length) return Ot.alloc(0);
                        for (var t = Ot.allocUnsafe(e >>> 0), r = this.head, n = 0; r;) Tt(r.data, t, n), n += r.data.length, r = r.next;
                        return t
                    }
                }, {
                    key: "consume",
                    value: function(e, t) {
                        var r;
                        return e < this.head.data.length ? (r = this.head.data.slice(0, e), this.head.data = this.head.data.slice(e)) : r = e === this.head.data.length ? this.shift() : t ? this._getString(e) : this._getBuffer(e), r
                    }
                }, {
                    key: "first",
                    value: function() {
                        return this.head.data
                    }
                }, {
                    key: "_getString",
                    value: function(e) {
                        var t = this.head,
                            r = 1,
                            n = t.data;
                        for (e -= n.length; t = t.next;) {
                            var i = t.data,
                                o = e > i.length ? i.length : e;
                            if (o === i.length ? n += i : n += i.slice(0, e), 0 === (e -= o)) {
                                o === i.length ? (++r, t.next ? this.head = t.next : this.head = this.tail = null) : (this.head = t, t.data = i.slice(o));
                                break
                            }++r
                        }
                        return this.length -= r, n
                    }
                }, {
                    key: "_getBuffer",
                    value: function(e) {
                        var t = Ot.allocUnsafe(e),
                            r = this.head,
                            n = 1;
                        for (r.data.copy(t), e -= r.data.length; r = r.next;) {
                            var i = r.data,
                                o = e > i.length ? i.length : e;
                            if (i.copy(t, t.length - e, 0, o), 0 === (e -= o)) {
                                o === i.length ? (++n, r.next ? this.head = r.next : this.head = this.tail = null) : (this.head = r, r.data = i.slice(o));
                                break
                            }++n
                        }
                        return this.length -= n, t
                    }
                }, {
                    key: Et,
                    value: function(e, t) {
                        return St(this, function(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var r = null != arguments[t] ? arguments[t] : {};
                                t % 2 ? At(Object(r), !0).forEach((function(t) {
                                    wt(e, t, r[t])
                                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : At(Object(r)).forEach((function(t) {
                                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                                }))
                            }
                            return e
                        }({}, t, {
                            depth: 0,
                            customInspect: !1
                        }))
                    }
                }], r && _t(t.prototype, r), n && _t(t, n), e
            }();

            function kt(e, t) {
                Ut(e, t), Rt(e)
            }

            function Rt(e) {
                e._writableState && !e._writableState.emitClose || e._readableState && !e._readableState.emitClose || e.emit("close")
            }

            function Ut(e, t) {
                e.emit("error", t)
            }
            var Ct = {
                    destroy: function(e, t) {
                        var r = this,
                            n = this._readableState && this._readableState.destroyed,
                            i = this._writableState && this._writableState.destroyed;
                        return n || i ? (t ? t(e) : e && (this._writableState ? this._writableState.errorEmitted || (this._writableState.errorEmitted = !0, Ve.nextTick(Ut, this, e)) : Ve.nextTick(Ut, this, e)), this) : (this._readableState && (this._readableState.destroyed = !0), this._writableState && (this._writableState.destroyed = !0), this._destroy(e || null, (function(e) {
                            !t && e ? r._writableState ? r._writableState.errorEmitted ? Ve.nextTick(Rt, r) : (r._writableState.errorEmitted = !0, Ve.nextTick(kt, r, e)) : Ve.nextTick(kt, r, e) : t ? (Ve.nextTick(Rt, r), t(e)) : Ve.nextTick(Rt, r)
                        })), this)
                    },
                    undestroy: function() {
                        this._readableState && (this._readableState.destroyed = !1, this._readableState.reading = !1, this._readableState.ended = !1, this._readableState.endEmitted = !1), this._writableState && (this._writableState.destroyed = !1, this._writableState.ended = !1, this._writableState.ending = !1, this._writableState.finalCalled = !1, this._writableState.prefinished = !1, this._writableState.finished = !1, this._writableState.errorEmitted = !1)
                    },
                    errorOrDestroy: function(e, t) {
                        var r = e._readableState,
                            n = e._writableState;
                        r && r.autoDestroy || n && n.autoDestroy ? e.destroy(t) : e.emit("error", t)
                    }
                },
                Pt = {};
            var Ft = {};

            function Dt(e, t, r) {
                r || (r = Error);
                var n = function(e) {
                    var r, n;

                    function i(r, n, i) {
                        return e.call(this, function(e, r, n) {
                            return "string" === typeof t ? t : t(e, r, n)
                        }(r, n, i)) || this
                    }
                    return n = e, (r = i).prototype = Object.create(n.prototype), r.prototype.constructor = r, r.__proto__ = n, i
                }(r);
                n.prototype.name = r.name, n.prototype.code = e, Ft[e] = n
            }

            function It(e, t) {
                if (Array.isArray(e)) {
                    var r = e.length;
                    return e = e.map((function(e) {
                        return String(e)
                    })), r > 2 ? "one of ".concat(t, " ").concat(e.slice(0, r - 1).join(", "), ", or ") + e[r - 1] : 2 === r ? "one of ".concat(t, " ").concat(e[0], " or ").concat(e[1]) : "of ".concat(t, " ").concat(e[0])
                }
                return "of ".concat(t, " ").concat(String(e))
            }
            Dt("ERR_INVALID_OPT_VALUE", (function(e, t) {
                return 'The value "' + t + '" is invalid for option "' + e + '"'
            }), TypeError), Dt("ERR_INVALID_ARG_TYPE", (function(e, t, r) {
                var n, i, o, a;
                if ("string" === typeof t && (i = "not ", t.substr(!o || o < 0 ? 0 : +o, i.length) === i) ? (n = "must not be", t = t.replace(/^not /, "")) : n = "must be", function(e, t, r) {
                        return (void 0 === r || r > e.length) && (r = e.length), e.substring(r - t.length, r) === t
                    }(e, " argument")) a = "The ".concat(e, " ").concat(n, " ").concat(It(t, "type"));
                else {
                    var c = function(e, t, r) {
                        return "number" !== typeof r && (r = 0), !(r + t.length > e.length) && -1 !== e.indexOf(t, r)
                    }(e, ".") ? "property" : "argument";
                    a = 'The "'.concat(e, '" ').concat(c, " ").concat(n, " ").concat(It(t, "type"))
                }
                return a += ". Received type ".concat(typeof r)
            }), TypeError), Dt("ERR_STREAM_PUSH_AFTER_EOF", "stream.push() after EOF"), Dt("ERR_METHOD_NOT_IMPLEMENTED", (function(e) {
                return "The " + e + " method is not implemented"
            })), Dt("ERR_STREAM_PREMATURE_CLOSE", "Premature close"), Dt("ERR_STREAM_DESTROYED", (function(e) {
                return "Cannot call " + e + " after a stream was destroyed"
            })), Dt("ERR_MULTIPLE_CALLBACK", "Callback called multiple times"), Dt("ERR_STREAM_CANNOT_PIPE", "Cannot pipe, not readable"), Dt("ERR_STREAM_WRITE_AFTER_END", "write after end"), Dt("ERR_STREAM_NULL_VALUES", "May not write null values to stream", TypeError), Dt("ERR_UNKNOWN_ENCODING", (function(e) {
                return "Unknown encoding: " + e
            }), TypeError), Dt("ERR_STREAM_UNSHIFT_AFTER_END_EVENT", "stream.unshift() after end event"), Pt.codes = Ft;
            var Lt = Pt.codes.ERR_INVALID_OPT_VALUE;
            var Nt = {
                    getHighWaterMark: function(e, t, r, n) {
                        var i = function(e, t, r) {
                            return null != e.highWaterMark ? e.highWaterMark : t ? e[r] : null
                        }(t, n, r);
                        if (null != i) {
                            if (!isFinite(i) || Math.floor(i) !== i || i < 0) throw new Lt(n ? r : "highWaterMark", i);
                            return Math.floor(i)
                        }
                        return e.objectMode ? 16 : 16384
                    }
                },
                jt = {
                    exports: {}
                };
            "function" === typeof Object.create ? jt.exports = function(e, t) {
                t && (e.super_ = t, e.prototype = Object.create(t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }))
            } : jt.exports = function(e, t) {
                if (t) {
                    e.super_ = t;
                    var r = function() {};
                    r.prototype = t.prototype, e.prototype = new r, e.prototype.constructor = e
                }
            };
            var Mt = {},
                Bt = {
                    exports: {}
                };
            ! function(e, t) {
                var r = st,
                    n = r.Buffer;

                function i(e, t) {
                    for (var r in e) t[r] = e[r]
                }

                function o(e, t, r) {
                    return n(e, t, r)
                }
                n.from && n.alloc && n.allocUnsafe && n.allocUnsafeSlow ? e.exports = r : (i(r, t), t.Buffer = o), o.prototype = Object.create(n.prototype), i(n, o), o.from = function(e, t, r) {
                    if ("number" === typeof e) throw new TypeError("Argument must not be a number");
                    return n(e, t, r)
                }, o.alloc = function(e, t, r) {
                    if ("number" !== typeof e) throw new TypeError("Argument must be a number");
                    var i = n(e);
                    return void 0 !== t ? "string" === typeof r ? i.fill(t, r) : i.fill(t) : i.fill(0), i
                }, o.allocUnsafe = function(e) {
                    if ("number" !== typeof e) throw new TypeError("Argument must be a number");
                    return n(e)
                }, o.allocUnsafeSlow = function(e) {
                    if ("number" !== typeof e) throw new TypeError("Argument must be a number");
                    return r.SlowBuffer(e)
                }
            }(Bt, Bt.exports);
            var Yt = Bt.exports.Buffer,
                Wt = Yt.isEncoding || function(e) {
                    switch ((e = "" + e) && e.toLowerCase()) {
                        case "hex":
                        case "utf8":
                        case "utf-8":
                        case "ascii":
                        case "binary":
                        case "base64":
                        case "ucs2":
                        case "ucs-2":
                        case "utf16le":
                        case "utf-16le":
                        case "raw":
                            return !0;
                        default:
                            return !1
                    }
                };

            function qt(e) {
                var t;
                switch (this.encoding = function(e) {
                    var t = function(e) {
                        if (!e) return "utf8";
                        for (var t;;) switch (e) {
                            case "utf8":
                            case "utf-8":
                                return "utf8";
                            case "ucs2":
                            case "ucs-2":
                            case "utf16le":
                            case "utf-16le":
                                return "utf16le";
                            case "latin1":
                            case "binary":
                                return "latin1";
                            case "base64":
                            case "ascii":
                            case "hex":
                                return e;
                            default:
                                if (t) return;
                                e = ("" + e).toLowerCase(), t = !0
                        }
                    }(e);
                    if ("string" !== typeof t && (Yt.isEncoding === Wt || !Wt(e))) throw new Error("Unknown encoding: " + e);
                    return t || e
                }(e), this.encoding) {
                    case "utf16le":
                        this.text = Gt, this.end = Zt, t = 4;
                        break;
                    case "utf8":
                        this.fillLast = Vt, t = 4;
                        break;
                    case "base64":
                        this.text = Kt, this.end = Ht, t = 3;
                        break;
                    default:
                        return this.write = Jt, void(this.end = Xt)
                }
                this.lastNeed = 0, this.lastTotal = 0, this.lastChar = Yt.allocUnsafe(t)
            }

            function zt(e) {
                return e <= 127 ? 0 : e >> 5 === 6 ? 2 : e >> 4 === 14 ? 3 : e >> 3 === 30 ? 4 : e >> 6 === 2 ? -1 : -2
            }

            function Vt(e) {
                var t = this.lastTotal - this.lastNeed,
                    r = function(e, t, r) {
                        if (128 !== (192 & t[0])) return e.lastNeed = 0, "\ufffd";
                        if (e.lastNeed > 1 && t.length > 1) {
                            if (128 !== (192 & t[1])) return e.lastNeed = 1, "\ufffd";
                            if (e.lastNeed > 2 && t.length > 2 && 128 !== (192 & t[2])) return e.lastNeed = 2, "\ufffd"
                        }
                    }(this, e);
                return void 0 !== r ? r : this.lastNeed <= e.length ? (e.copy(this.lastChar, t, 0, this.lastNeed), this.lastChar.toString(this.encoding, 0, this.lastTotal)) : (e.copy(this.lastChar, t, 0, e.length), void(this.lastNeed -= e.length))
            }

            function Gt(e, t) {
                if ((e.length - t) % 2 === 0) {
                    var r = e.toString("utf16le", t);
                    if (r) {
                        var n = r.charCodeAt(r.length - 1);
                        if (n >= 55296 && n <= 56319) return this.lastNeed = 2, this.lastTotal = 4, this.lastChar[0] = e[e.length - 2], this.lastChar[1] = e[e.length - 1], r.slice(0, -1)
                    }
                    return r
                }
                return this.lastNeed = 1, this.lastTotal = 2, this.lastChar[0] = e[e.length - 1], e.toString("utf16le", t, e.length - 1)
            }

            function Zt(e) {
                var t = e && e.length ? this.write(e) : "";
                if (this.lastNeed) {
                    var r = this.lastTotal - this.lastNeed;
                    return t + this.lastChar.toString("utf16le", 0, r)
                }
                return t
            }

            function Kt(e, t) {
                var r = (e.length - t) % 3;
                return 0 === r ? e.toString("base64", t) : (this.lastNeed = 3 - r, this.lastTotal = 3, 1 === r ? this.lastChar[0] = e[e.length - 1] : (this.lastChar[0] = e[e.length - 2], this.lastChar[1] = e[e.length - 1]), e.toString("base64", t, e.length - r))
            }

            function Ht(e) {
                var t = e && e.length ? this.write(e) : "";
                return this.lastNeed ? t + this.lastChar.toString("base64", 0, 3 - this.lastNeed) : t
            }

            function Jt(e) {
                return e.toString(this.encoding)
            }

            function Xt(e) {
                return e && e.length ? this.write(e) : ""
            }
            Mt.StringDecoder = qt, qt.prototype.write = function(e) {
                if (0 === e.length) return "";
                var t, r;
                if (this.lastNeed) {
                    if (void 0 === (t = this.fillLast(e))) return "";
                    r = this.lastNeed, this.lastNeed = 0
                } else r = 0;
                return r < e.length ? t ? t + this.text(e, r) : this.text(e, r) : t || ""
            }, qt.prototype.end = function(e) {
                var t = e && e.length ? this.write(e) : "";
                return this.lastNeed ? t + "\ufffd" : t
            }, qt.prototype.text = function(e, t) {
                var r = function(e, t, r) {
                    var n = t.length - 1;
                    if (n < r) return 0;
                    var i = zt(t[n]);
                    if (i >= 0) return i > 0 && (e.lastNeed = i - 1), i;
                    if (--n < r || -2 === i) return 0;
                    if ((i = zt(t[n])) >= 0) return i > 0 && (e.lastNeed = i - 2), i;
                    if (--n < r || -2 === i) return 0;
                    if ((i = zt(t[n])) >= 0) return i > 0 && (2 === i ? i = 0 : e.lastNeed = i - 3), i;
                    return 0
                }(this, e, t);
                if (!this.lastNeed) return e.toString("utf8", t);
                this.lastTotal = r;
                var n = e.length - (r - this.lastNeed);
                return e.copy(this.lastChar, 0, n), e.toString("utf8", t, n)
            }, qt.prototype.fillLast = function(e) {
                if (this.lastNeed <= e.length) return e.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, this.lastNeed), this.lastChar.toString(this.encoding, 0, this.lastTotal);
                e.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, e.length), this.lastNeed -= e.length
            };
            var $t = Pt.codes.ERR_STREAM_PREMATURE_CLOSE;

            function Qt() {}
            var er, tr = function e(t, r, n) {
                if ("function" === typeof r) return e(t, null, r);
                r || (r = {}), n = function(e) {
                    var t = !1;
                    return function() {
                        if (!t) {
                            t = !0;
                            for (var r = arguments.length, n = new Array(r), i = 0; i < r; i++) n[i] = arguments[i];
                            e.apply(this, n)
                        }
                    }
                }(n || Qt);
                var i = r.readable || !1 !== r.readable && t.readable,
                    o = r.writable || !1 !== r.writable && t.writable,
                    a = function() {
                        t.writable || s()
                    },
                    c = t._writableState && t._writableState.finished,
                    s = function() {
                        o = !1, c = !0, i || n.call(t)
                    },
                    u = t._readableState && t._readableState.endEmitted,
                    l = function() {
                        i = !1, u = !0, o || n.call(t)
                    },
                    f = function(e) {
                        n.call(t, e)
                    },
                    h = function() {
                        var e;
                        return i && !u ? (t._readableState && t._readableState.ended || (e = new $t), n.call(t, e)) : o && !c ? (t._writableState && t._writableState.ended || (e = new $t), n.call(t, e)) : void 0
                    },
                    d = function() {
                        t.req.on("finish", s)
                    };
                return ! function(e) {
                        return e.setHeader && "function" === typeof e.abort
                    }(t) ? o && !t._writableState && (t.on("end", a), t.on("close", a)) : (t.on("complete", s), t.on("abort", h), t.req ? d() : t.on("request", d)), t.on("end", l), t.on("finish", s), !1 !== r.error && t.on("error", f), t.on("close", h),
                    function() {
                        t.removeListener("complete", s), t.removeListener("abort", h), t.removeListener("request", d), t.req && t.req.removeListener("finish", s), t.removeListener("end", a), t.removeListener("close", a), t.removeListener("finish", s), t.removeListener("end", l), t.removeListener("error", f), t.removeListener("close", h)
                    }
            };

            function rr(e, t, r) {
                return t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r, e
            }
            var nr = tr,
                ir = Symbol("lastResolve"),
                or = Symbol("lastReject"),
                ar = Symbol("error"),
                cr = Symbol("ended"),
                sr = Symbol("lastPromise"),
                ur = Symbol("handlePromise"),
                lr = Symbol("stream");

            function fr(e, t) {
                return {
                    value: e,
                    done: t
                }
            }

            function hr(e) {
                var t = e[ir];
                if (null !== t) {
                    var r = e[lr].read();
                    null !== r && (e[sr] = null, e[ir] = null, e[or] = null, t(fr(r, !1)))
                }
            }

            function dr(e) {
                Ve.nextTick(hr, e)
            }
            var mr = Object.getPrototypeOf((function() {})),
                gr = Object.setPrototypeOf((er = {
                    get stream() {
                        return this[lr]
                    },
                    next: function() {
                        var e = this,
                            t = this[ar];
                        if (null !== t) return Promise.reject(t);
                        if (this[cr]) return Promise.resolve(fr(void 0, !0));
                        if (this[lr].destroyed) return new Promise((function(t, r) {
                            Ve.nextTick((function() {
                                e[ar] ? r(e[ar]) : t(fr(void 0, !0))
                            }))
                        }));
                        var r, n = this[sr];
                        if (n) r = new Promise(function(e, t) {
                            return function(r, n) {
                                e.then((function() {
                                    t[cr] ? r(fr(void 0, !0)) : t[ur](r, n)
                                }), n)
                            }
                        }(n, this));
                        else {
                            var i = this[lr].read();
                            if (null !== i) return Promise.resolve(fr(i, !1));
                            r = new Promise(this[ur])
                        }
                        return this[sr] = r, r
                    }
                }, rr(er, Symbol.asyncIterator, (function() {
                    return this
                })), rr(er, "return", (function() {
                    var e = this;
                    return new Promise((function(t, r) {
                        e[lr].destroy(null, (function(e) {
                            e ? r(e) : t(fr(void 0, !0))
                        }))
                    }))
                })), er), mr),
                pr = function(e) {
                    var t, r = Object.create(gr, (rr(t = {}, lr, {
                        value: e,
                        writable: !0
                    }), rr(t, ir, {
                        value: null,
                        writable: !0
                    }), rr(t, or, {
                        value: null,
                        writable: !0
                    }), rr(t, ar, {
                        value: null,
                        writable: !0
                    }), rr(t, cr, {
                        value: e._readableState.endEmitted,
                        writable: !0
                    }), rr(t, ur, {
                        value: function(e, t) {
                            var n = r[lr].read();
                            n ? (r[sr] = null, r[ir] = null, r[or] = null, e(fr(n, !1))) : (r[ir] = e, r[or] = t)
                        },
                        writable: !0
                    }), t));
                    return r[sr] = null, nr(e, (function(e) {
                        if (e && "ERR_STREAM_PREMATURE_CLOSE" !== e.code) {
                            var t = r[or];
                            return null !== t && (r[sr] = null, r[ir] = null, r[or] = null, t(e)), void(r[ar] = e)
                        }
                        var n = r[ir];
                        null !== n && (r[sr] = null, r[ir] = null, r[or] = null, n(fr(void 0, !0))), r[cr] = !0
                    })), e.on("readable", dr.bind(null, r)), r
                },
                yr = function() {
                    throw new Error("Readable.from is not available in the browser")
                },
                vr = Ae;
            vr.Readable = Mr, Mr.ReadableState = jr, Ge.exports.EventEmitter;
            var br = function(e, t) {
                    return e.listeners(t).length
                },
                Ar = ct,
                wr = st.Buffer,
                _r = ye.Uint8Array || function() {};
            var Or, Sr = bt;
            Or = Sr && Sr.debuglog ? Sr.debuglog("stream") : function() {};
            var Er, Tr, xr, kr = xt,
                Rr = Ct,
                Ur = Nt.getHighWaterMark,
                Cr = Pt.codes,
                Pr = Cr.ERR_INVALID_ARG_TYPE,
                Fr = Cr.ERR_STREAM_PUSH_AFTER_EOF,
                Dr = Cr.ERR_METHOD_NOT_IMPLEMENTED,
                Ir = Cr.ERR_STREAM_UNSHIFT_AFTER_END_EVENT;
            jt.exports(Mr, Ar);
            var Lr = Rr.errorOrDestroy,
                Nr = ["error", "close", "destroy", "pause", "resume"];

            function jr(e, t, r) {
                e = e || {}, "boolean" !== typeof r && (r = t instanceof vr.Duplex), this.objectMode = !!e.objectMode, r && (this.objectMode = this.objectMode || !!e.readableObjectMode), this.highWaterMark = Ur(this, e, "readableHighWaterMark", r), this.buffer = new kr, this.length = 0, this.pipes = null, this.pipesCount = 0, this.flowing = null, this.ended = !1, this.endEmitted = !1, this.reading = !1, this.sync = !0, this.needReadable = !1, this.emittedReadable = !1, this.readableListening = !1, this.resumeScheduled = !1, this.paused = !0, this.emitClose = !1 !== e.emitClose, this.autoDestroy = !!e.autoDestroy, this.destroyed = !1, this.defaultEncoding = e.defaultEncoding || "utf8", this.awaitDrain = 0, this.readingMore = !1, this.decoder = null, this.encoding = null, e.encoding && (Er || (Er = Mt.StringDecoder), this.decoder = new Er(e.encoding), this.encoding = e.encoding)
            }

            function Mr(e) {
                if (!(this instanceof Mr)) return new Mr(e);
                var t = this instanceof vr.Duplex;
                this._readableState = new jr(e, this, t), this.readable = !0, e && ("function" === typeof e.read && (this._read = e.read), "function" === typeof e.destroy && (this._destroy = e.destroy)), Ar.call(this)
            }

            function Br(e, t, r, n, i) {
                Or("readableAddChunk", t);
                var o, a = e._readableState;
                if (null === t) a.reading = !1,
                    function(e, t) {
                        if (Or("onEofChunk"), t.ended) return;
                        if (t.decoder) {
                            var r = t.decoder.end();
                            r && r.length && (t.buffer.push(r), t.length += t.objectMode ? 1 : r.length)
                        }
                        t.ended = !0, t.sync ? zr(e) : (t.needReadable = !1, t.emittedReadable || (t.emittedReadable = !0, Vr(e)))
                    }(e, a);
                else if (i || (o = function(e, t) {
                        var r;
                        n = t, wr.isBuffer(n) || n instanceof _r || "string" === typeof t || void 0 === t || e.objectMode || (r = new Pr("chunk", ["string", "Buffer", "Uint8Array"], t));
                        var n;
                        return r
                    }(a, t)), o) Lr(e, o);
                else if (a.objectMode || t && t.length > 0)
                    if ("string" === typeof t || a.objectMode || Object.getPrototypeOf(t) === wr.prototype || (t = function(e) {
                            return wr.from(e)
                        }(t)), n) a.endEmitted ? Lr(e, new Ir) : Yr(e, a, t, !0);
                    else if (a.ended) Lr(e, new Fr);
                else {
                    if (a.destroyed) return !1;
                    a.reading = !1, a.decoder && !r ? (t = a.decoder.write(t), a.objectMode || 0 !== t.length ? Yr(e, a, t, !1) : Gr(e, a)) : Yr(e, a, t, !1)
                } else n || (a.reading = !1, Gr(e, a));
                return !a.ended && (a.length < a.highWaterMark || 0 === a.length)
            }

            function Yr(e, t, r, n) {
                t.flowing && 0 === t.length && !t.sync ? (t.awaitDrain = 0, e.emit("data", r)) : (t.length += t.objectMode ? 1 : r.length, n ? t.buffer.unshift(r) : t.buffer.push(r), t.needReadable && zr(e)), Gr(e, t)
            }
            Object.defineProperty(Mr.prototype, "destroyed", {
                enumerable: !1,
                get: function() {
                    return void 0 !== this._readableState && this._readableState.destroyed
                },
                set: function(e) {
                    this._readableState && (this._readableState.destroyed = e)
                }
            }), Mr.prototype.destroy = Rr.destroy, Mr.prototype._undestroy = Rr.undestroy, Mr.prototype._destroy = function(e, t) {
                t(e)
            }, Mr.prototype.push = function(e, t) {
                var r, n = this._readableState;
                return n.objectMode ? r = !0 : "string" === typeof e && ((t = t || n.defaultEncoding) !== n.encoding && (e = wr.from(e, t), t = ""), r = !0), Br(this, e, t, !1, r)
            }, Mr.prototype.unshift = function(e) {
                return Br(this, e, null, !0, !1)
            }, Mr.prototype.isPaused = function() {
                return !1 === this._readableState.flowing
            }, Mr.prototype.setEncoding = function(e) {
                Er || (Er = Mt.StringDecoder);
                var t = new Er(e);
                this._readableState.decoder = t, this._readableState.encoding = this._readableState.decoder.encoding;
                for (var r = this._readableState.buffer.head, n = ""; null !== r;) n += t.write(r.data), r = r.next;
                return this._readableState.buffer.clear(), "" !== n && this._readableState.buffer.push(n), this._readableState.length = n.length, this
            };
            var Wr = 1073741824;

            function qr(e, t) {
                return e <= 0 || 0 === t.length && t.ended ? 0 : t.objectMode ? 1 : e !== e ? t.flowing && t.length ? t.buffer.head.data.length : t.length : (e > t.highWaterMark && (t.highWaterMark = function(e) {
                    return e >= Wr ? e = Wr : (e--, e |= e >>> 1, e |= e >>> 2, e |= e >>> 4, e |= e >>> 8, e |= e >>> 16, e++), e
                }(e)), e <= t.length ? e : t.ended ? t.length : (t.needReadable = !0, 0))
            }

            function zr(e) {
                var t = e._readableState;
                Or("emitReadable", t.needReadable, t.emittedReadable), t.needReadable = !1, t.emittedReadable || (Or("emitReadable", t.flowing), t.emittedReadable = !0, Ve.nextTick(Vr, e))
            }

            function Vr(e) {
                var t = e._readableState;
                Or("emitReadable_", t.destroyed, t.length, t.ended), t.destroyed || !t.length && !t.ended || (e.emit("readable"), t.emittedReadable = !1), t.needReadable = !t.flowing && !t.ended && t.length <= t.highWaterMark, Xr(e)
            }

            function Gr(e, t) {
                t.readingMore || (t.readingMore = !0, Ve.nextTick(Zr, e, t))
            }

            function Zr(e, t) {
                for (; !t.reading && !t.ended && (t.length < t.highWaterMark || t.flowing && 0 === t.length);) {
                    var r = t.length;
                    if (Or("maybeReadMore read 0"), e.read(0), r === t.length) break
                }
                t.readingMore = !1
            }

            function Kr(e) {
                var t = e._readableState;
                t.readableListening = e.listenerCount("readable") > 0, t.resumeScheduled && !t.paused ? t.flowing = !0 : e.listenerCount("data") > 0 && e.resume()
            }

            function Hr(e) {
                Or("readable nexttick read 0"), e.read(0)
            }

            function Jr(e, t) {
                Or("resume", t.reading), t.reading || e.read(0), t.resumeScheduled = !1, e.emit("resume"), Xr(e), t.flowing && !t.reading && e.read(0)
            }

            function Xr(e) {
                var t = e._readableState;
                for (Or("flow", t.flowing); t.flowing && null !== e.read(););
            }

            function $r(e, t) {
                return 0 === t.length ? null : (t.objectMode ? r = t.buffer.shift() : !e || e >= t.length ? (r = t.decoder ? t.buffer.join("") : 1 === t.buffer.length ? t.buffer.first() : t.buffer.concat(t.length), t.buffer.clear()) : r = t.buffer.consume(e, t.decoder), r);
                var r
            }

            function Qr(e) {
                var t = e._readableState;
                Or("endReadable", t.endEmitted), t.endEmitted || (t.ended = !0, Ve.nextTick(en, t, e))
            }

            function en(e, t) {
                if (Or("endReadableNT", e.endEmitted, e.length), !e.endEmitted && 0 === e.length && (e.endEmitted = !0, t.readable = !1, t.emit("end"), e.autoDestroy)) {
                    var r = t._writableState;
                    (!r || r.autoDestroy && r.finished) && t.destroy()
                }
            }

            function tn(e, t) {
                for (var r = 0, n = e.length; r < n; r++)
                    if (e[r] === t) return r;
                return -1
            }
            Mr.prototype.read = function(e) {
                Or("read", e), e = parseInt(e, 10);
                var t = this._readableState,
                    r = e;
                if (0 !== e && (t.emittedReadable = !1), 0 === e && t.needReadable && ((0 !== t.highWaterMark ? t.length >= t.highWaterMark : t.length > 0) || t.ended)) return Or("read: emitReadable", t.length, t.ended), 0 === t.length && t.ended ? Qr(this) : zr(this), null;
                if (0 === (e = qr(e, t)) && t.ended) return 0 === t.length && Qr(this), null;
                var n, i = t.needReadable;
                return Or("need readable", i), (0 === t.length || t.length - e < t.highWaterMark) && Or("length less than watermark", i = !0), t.ended || t.reading ? Or("reading or ended", i = !1) : i && (Or("do read"), t.reading = !0, t.sync = !0, 0 === t.length && (t.needReadable = !0), this._read(t.highWaterMark), t.sync = !1, t.reading || (e = qr(r, t))), null === (n = e > 0 ? $r(e, t) : null) ? (t.needReadable = t.length <= t.highWaterMark, e = 0) : (t.length -= e, t.awaitDrain = 0), 0 === t.length && (t.ended || (t.needReadable = !0), r !== e && t.ended && Qr(this)), null !== n && this.emit("data", n), n
            }, Mr.prototype._read = function(e) {
                Lr(this, new Dr("_read()"))
            }, Mr.prototype.pipe = function(e, t) {
                var r = this,
                    n = this._readableState;
                switch (n.pipesCount) {
                    case 0:
                        n.pipes = e;
                        break;
                    case 1:
                        n.pipes = [n.pipes, e];
                        break;
                    default:
                        n.pipes.push(e)
                }
                n.pipesCount += 1, Or("pipe count=%d opts=%j", n.pipesCount, t);
                var i = (!t || !1 !== t.end) && e !== Ve.stdout && e !== Ve.stderr ? a : d;

                function o(t, i) {
                    Or("onunpipe"), t === r && i && !1 === i.hasUnpiped && (i.hasUnpiped = !0, Or("cleanup"), e.removeListener("close", f), e.removeListener("finish", h), e.removeListener("drain", c), e.removeListener("error", l), e.removeListener("unpipe", o), r.removeListener("end", a), r.removeListener("end", d), r.removeListener("data", u), s = !0, !n.awaitDrain || e._writableState && !e._writableState.needDrain || c())
                }

                function a() {
                    Or("onend"), e.end()
                }
                n.endEmitted ? Ve.nextTick(i) : r.once("end", i), e.on("unpipe", o);
                var c = function(e) {
                    return function() {
                        var t = e._readableState;
                        Or("pipeOnDrain", t.awaitDrain), t.awaitDrain && t.awaitDrain--, 0 === t.awaitDrain && br(e, "data") && (t.flowing = !0, Xr(e))
                    }
                }(r);
                e.on("drain", c);
                var s = !1;

                function u(t) {
                    Or("ondata");
                    var i = e.write(t);
                    Or("dest.write", i), !1 === i && ((1 === n.pipesCount && n.pipes === e || n.pipesCount > 1 && -1 !== tn(n.pipes, e)) && !s && (Or("false write response, pause", n.awaitDrain), n.awaitDrain++), r.pause())
                }

                function l(t) {
                    Or("onerror", t), d(), e.removeListener("error", l), 0 === br(e, "error") && Lr(e, t)
                }

                function f() {
                    e.removeListener("finish", h), d()
                }

                function h() {
                    Or("onfinish"), e.removeListener("close", f), d()
                }

                function d() {
                    Or("unpipe"), r.unpipe(e)
                }
                return r.on("data", u),
                    function(e, t, r) {
                        if ("function" === typeof e.prependListener) return e.prependListener(t, r);
                        e._events && e._events[t] ? Array.isArray(e._events[t]) ? e._events[t].unshift(r) : e._events[t] = [r, e._events[t]] : e.on(t, r)
                    }(e, "error", l), e.once("close", f), e.once("finish", h), e.emit("pipe", r), n.flowing || (Or("pipe resume"), r.resume()), e
            }, Mr.prototype.unpipe = function(e) {
                var t = this._readableState,
                    r = {
                        hasUnpiped: !1
                    };
                if (0 === t.pipesCount) return this;
                if (1 === t.pipesCount) return e && e !== t.pipes || (e || (e = t.pipes), t.pipes = null, t.pipesCount = 0, t.flowing = !1, e && e.emit("unpipe", this, r)), this;
                if (!e) {
                    var n = t.pipes,
                        i = t.pipesCount;
                    t.pipes = null, t.pipesCount = 0, t.flowing = !1;
                    for (var o = 0; o < i; o++) n[o].emit("unpipe", this, {
                        hasUnpiped: !1
                    });
                    return this
                }
                var a = tn(t.pipes, e);
                return -1 === a || (t.pipes.splice(a, 1), t.pipesCount -= 1, 1 === t.pipesCount && (t.pipes = t.pipes[0]), e.emit("unpipe", this, r)), this
            }, Mr.prototype.on = function(e, t) {
                var r = Ar.prototype.on.call(this, e, t),
                    n = this._readableState;
                return "data" === e ? (n.readableListening = this.listenerCount("readable") > 0, !1 !== n.flowing && this.resume()) : "readable" === e && (n.endEmitted || n.readableListening || (n.readableListening = n.needReadable = !0, n.flowing = !1, n.emittedReadable = !1, Or("on readable", n.length, n.reading), n.length ? zr(this) : n.reading || Ve.nextTick(Hr, this))), r
            }, Mr.prototype.addListener = Mr.prototype.on, Mr.prototype.removeListener = function(e, t) {
                var r = Ar.prototype.removeListener.call(this, e, t);
                return "readable" === e && Ve.nextTick(Kr, this), r
            }, Mr.prototype.removeAllListeners = function(e) {
                var t = Ar.prototype.removeAllListeners.apply(this, arguments);
                return "readable" !== e && void 0 !== e || Ve.nextTick(Kr, this), t
            }, Mr.prototype.resume = function() {
                var e = this._readableState;
                return e.flowing || (Or("resume"), e.flowing = !e.readableListening, function(e, t) {
                    t.resumeScheduled || (t.resumeScheduled = !0, Ve.nextTick(Jr, e, t))
                }(this, e)), e.paused = !1, this
            }, Mr.prototype.pause = function() {
                return Or("call pause flowing=%j", this._readableState.flowing), !1 !== this._readableState.flowing && (Or("pause"), this._readableState.flowing = !1, this.emit("pause")), this._readableState.paused = !0, this
            }, Mr.prototype.wrap = function(e) {
                var t = this,
                    r = this._readableState,
                    n = !1;
                for (var i in e.on("end", (function() {
                        if (Or("wrapped end"), r.decoder && !r.ended) {
                            var e = r.decoder.end();
                            e && e.length && t.push(e)
                        }
                        t.push(null)
                    })), e.on("data", (function(i) {
                        (Or("wrapped data"), r.decoder && (i = r.decoder.write(i)), !r.objectMode || null !== i && void 0 !== i) && ((r.objectMode || i && i.length) && (t.push(i) || (n = !0, e.pause())))
                    })), e) void 0 === this[i] && "function" === typeof e[i] && (this[i] = function(t) {
                    return function() {
                        return e[t].apply(e, arguments)
                    }
                }(i));
                for (var o = 0; o < Nr.length; o++) e.on(Nr[o], this.emit.bind(this, Nr[o]));
                return this._read = function(t) {
                    Or("wrapped _read", t), n && (n = !1, e.resume())
                }, this
            }, "function" === typeof Symbol && (Mr.prototype[Symbol.asyncIterator] = function() {
                return void 0 === Tr && (Tr = pr), Tr(this)
            }), Object.defineProperty(Mr.prototype, "readableHighWaterMark", {
                enumerable: !1,
                get: function() {
                    return this._readableState.highWaterMark
                }
            }), Object.defineProperty(Mr.prototype, "readableBuffer", {
                enumerable: !1,
                get: function() {
                    return this._readableState && this._readableState.buffer
                }
            }), Object.defineProperty(Mr.prototype, "readableFlowing", {
                enumerable: !1,
                get: function() {
                    return this._readableState.flowing
                },
                set: function(e) {
                    this._readableState && (this._readableState.flowing = e)
                }
            }), Mr._fromList = $r, Object.defineProperty(Mr.prototype, "readableLength", {
                enumerable: !1,
                get: function() {
                    return this._readableState.length
                }
            }), "function" === typeof Symbol && (Mr.from = function(e, t) {
                return void 0 === xr && (xr = yr), xr(Mr, e, t)
            });
            var rn = function(e, t) {
                if (nn("noDeprecation")) return e;
                var r = !1;
                return function() {
                    if (!r) {
                        if (nn("throwDeprecation")) throw new Error(t);
                        nn("traceDeprecation") ? console.trace(t) : console.warn(t), r = !0
                    }
                    return e.apply(this, arguments)
                }
            };

            function nn(e) {
                try {
                    if (!ye.localStorage) return !1
                } catch (r) {
                    return !1
                }
                var t = ye.localStorage[e];
                return null != t && "true" === String(t).toLowerCase()
            }
            var on = Ae;

            function an(e) {
                var t = this;
                this.next = null, this.entry = null, this.finish = function() {
                    ! function(e, t, r) {
                        var n = e.entry;
                        e.entry = null;
                        for (; n;) {
                            var i = n.callback;
                            t.pendingcb--, i(r), n = n.next
                        }
                        t.corkedRequestsFree.next = e
                    }(t, e)
                }
            }
            on.Writable = Tn, Tn.WritableState = En;
            var cn = {
                    deprecate: rn
                },
                sn = ct,
                un = st.Buffer,
                ln = ye.Uint8Array || function() {};
            var fn, hn = Ct,
                dn = Nt.getHighWaterMark,
                mn = Pt.codes,
                gn = mn.ERR_INVALID_ARG_TYPE,
                pn = mn.ERR_METHOD_NOT_IMPLEMENTED,
                yn = mn.ERR_MULTIPLE_CALLBACK,
                vn = mn.ERR_STREAM_CANNOT_PIPE,
                bn = mn.ERR_STREAM_DESTROYED,
                An = mn.ERR_STREAM_NULL_VALUES,
                wn = mn.ERR_STREAM_WRITE_AFTER_END,
                _n = mn.ERR_UNKNOWN_ENCODING,
                On = hn.errorOrDestroy;

            function Sn() {}

            function En(e, t, r) {
                e = e || {}, "boolean" !== typeof r && (r = t instanceof on.Duplex), this.objectMode = !!e.objectMode, r && (this.objectMode = this.objectMode || !!e.writableObjectMode), this.highWaterMark = dn(this, e, "writableHighWaterMark", r), this.finalCalled = !1, this.needDrain = !1, this.ending = !1, this.ended = !1, this.finished = !1, this.destroyed = !1;
                var n = !1 === e.decodeStrings;
                this.decodeStrings = !n, this.defaultEncoding = e.defaultEncoding || "utf8", this.length = 0, this.writing = !1, this.corked = 0, this.sync = !0, this.bufferProcessing = !1, this.onwrite = function(e) {
                    ! function(e, t) {
                        var r = e._writableState,
                            n = r.sync,
                            i = r.writecb;
                        if ("function" !== typeof i) throw new yn;
                        if (function(e) {
                                e.writing = !1, e.writecb = null, e.length -= e.writelen, e.writelen = 0
                            }(r), t) ! function(e, t, r, n, i) {
                            --t.pendingcb, r ? (Ve.nextTick(i, n), Ve.nextTick(Pn, e, t), e._writableState.errorEmitted = !0, On(e, n)) : (i(n), e._writableState.errorEmitted = !0, On(e, n), Pn(e, t))
                        }(e, r, n, t, i);
                        else {
                            var o = Un(r) || e.destroyed;
                            o || r.corked || r.bufferProcessing || !r.bufferedRequest || Rn(e, r), n ? Ve.nextTick(kn, e, r, o, i) : kn(e, r, o, i)
                        }
                    }(t, e)
                }, this.writecb = null, this.writelen = 0, this.bufferedRequest = null, this.lastBufferedRequest = null, this.pendingcb = 0, this.prefinished = !1, this.errorEmitted = !1, this.emitClose = !1 !== e.emitClose, this.autoDestroy = !!e.autoDestroy, this.bufferedRequestCount = 0, this.corkedRequestsFree = new an(this)
            }

            function Tn(e) {
                var t = this instanceof on.Duplex;
                if (!t && !fn.call(Tn, this)) return new Tn(e);
                this._writableState = new En(e, this, t), this.writable = !0, e && ("function" === typeof e.write && (this._write = e.write), "function" === typeof e.writev && (this._writev = e.writev), "function" === typeof e.destroy && (this._destroy = e.destroy), "function" === typeof e.final && (this._final = e.final)), sn.call(this)
            }

            function xn(e, t, r, n, i, o, a) {
                t.writelen = n, t.writecb = a, t.writing = !0, t.sync = !0, t.destroyed ? t.onwrite(new bn("write")) : r ? e._writev(i, t.onwrite) : e._write(i, o, t.onwrite), t.sync = !1
            }

            function kn(e, t, r, n) {
                r || function(e, t) {
                    0 === t.length && t.needDrain && (t.needDrain = !1, e.emit("drain"))
                }(e, t), t.pendingcb--, n(), Pn(e, t)
            }

            function Rn(e, t) {
                t.bufferProcessing = !0;
                var r = t.bufferedRequest;
                if (e._writev && r && r.next) {
                    var n = t.bufferedRequestCount,
                        i = new Array(n),
                        o = t.corkedRequestsFree;
                    o.entry = r;
                    for (var a = 0, c = !0; r;) i[a] = r, r.isBuf || (c = !1), r = r.next, a += 1;
                    i.allBuffers = c, xn(e, t, !0, t.length, i, "", o.finish), t.pendingcb++, t.lastBufferedRequest = null, o.next ? (t.corkedRequestsFree = o.next, o.next = null) : t.corkedRequestsFree = new an(t), t.bufferedRequestCount = 0
                } else {
                    for (; r;) {
                        var s = r.chunk,
                            u = r.encoding,
                            l = r.callback;
                        if (xn(e, t, !1, t.objectMode ? 1 : s.length, s, u, l), r = r.next, t.bufferedRequestCount--, t.writing) break
                    }
                    null === r && (t.lastBufferedRequest = null)
                }
                t.bufferedRequest = r, t.bufferProcessing = !1
            }

            function Un(e) {
                return e.ending && 0 === e.length && null === e.bufferedRequest && !e.finished && !e.writing
            }

            function Cn(e, t) {
                e._final((function(r) {
                    t.pendingcb--, r && On(e, r), t.prefinished = !0, e.emit("prefinish"), Pn(e, t)
                }))
            }

            function Pn(e, t) {
                var r = Un(t);
                if (r && (function(e, t) {
                        t.prefinished || t.finalCalled || ("function" !== typeof e._final || t.destroyed ? (t.prefinished = !0, e.emit("prefinish")) : (t.pendingcb++, t.finalCalled = !0, Ve.nextTick(Cn, e, t)))
                    }(e, t), 0 === t.pendingcb && (t.finished = !0, e.emit("finish"), t.autoDestroy))) {
                    var n = e._readableState;
                    (!n || n.autoDestroy && n.endEmitted) && e.destroy()
                }
                return r
            }
            jt.exports(Tn, sn), En.prototype.getBuffer = function() {
                    for (var e = this.bufferedRequest, t = []; e;) t.push(e), e = e.next;
                    return t
                },
                function() {
                    try {
                        Object.defineProperty(En.prototype, "buffer", {
                            get: cn.deprecate((function() {
                                return this.getBuffer()
                            }), "_writableState.buffer is deprecated. Use _writableState.getBuffer instead.", "DEP0003")
                        })
                    } catch (e) {}
                }(), "function" === typeof Symbol && Symbol.hasInstance && "function" === typeof Function.prototype[Symbol.hasInstance] ? (fn = Function.prototype[Symbol.hasInstance], Object.defineProperty(Tn, Symbol.hasInstance, {
                    value: function(e) {
                        return !!fn.call(this, e) || this === Tn && (e && e._writableState instanceof En)
                    }
                })) : fn = function(e) {
                    return e instanceof this
                }, Tn.prototype.pipe = function() {
                    On(this, new vn)
                }, Tn.prototype.write = function(e, t, r) {
                    var n, i = this._writableState,
                        o = !1,
                        a = !i.objectMode && (n = e, un.isBuffer(n) || n instanceof ln);
                    return a && !un.isBuffer(e) && (e = function(e) {
                        return un.from(e)
                    }(e)), "function" === typeof t && (r = t, t = null), a ? t = "buffer" : t || (t = i.defaultEncoding), "function" !== typeof r && (r = Sn), i.ending ? function(e, t) {
                        var r = new wn;
                        On(e, r), Ve.nextTick(t, r)
                    }(this, r) : (a || function(e, t, r, n) {
                        var i;
                        return null === r ? i = new An : "string" === typeof r || t.objectMode || (i = new gn("chunk", ["string", "Buffer"], r)), !i || (On(e, i), Ve.nextTick(n, i), !1)
                    }(this, i, e, r)) && (i.pendingcb++, o = function(e, t, r, n, i, o) {
                        if (!r) {
                            var a = function(e, t, r) {
                                e.objectMode || !1 === e.decodeStrings || "string" !== typeof t || (t = un.from(t, r));
                                return t
                            }(t, n, i);
                            n !== a && (r = !0, i = "buffer", n = a)
                        }
                        var c = t.objectMode ? 1 : n.length;
                        t.length += c;
                        var s = t.length < t.highWaterMark;
                        s || (t.needDrain = !0);
                        if (t.writing || t.corked) {
                            var u = t.lastBufferedRequest;
                            t.lastBufferedRequest = {
                                chunk: n,
                                encoding: i,
                                isBuf: r,
                                callback: o,
                                next: null
                            }, u ? u.next = t.lastBufferedRequest : t.bufferedRequest = t.lastBufferedRequest, t.bufferedRequestCount += 1
                        } else xn(e, t, !1, c, n, i, o);
                        return s
                    }(this, i, a, e, t, r)), o
                }, Tn.prototype.cork = function() {
                    this._writableState.corked++
                }, Tn.prototype.uncork = function() {
                    var e = this._writableState;
                    e.corked && (e.corked--, e.writing || e.corked || e.bufferProcessing || !e.bufferedRequest || Rn(this, e))
                }, Tn.prototype.setDefaultEncoding = function(e) {
                    if ("string" === typeof e && (e = e.toLowerCase()), !(["hex", "utf8", "utf-8", "ascii", "binary", "base64", "ucs2", "ucs-2", "utf16le", "utf-16le", "raw"].indexOf((e + "").toLowerCase()) > -1)) throw new _n(e);
                    return this._writableState.defaultEncoding = e, this
                }, Object.defineProperty(Tn.prototype, "writableBuffer", {
                    enumerable: !1,
                    get: function() {
                        return this._writableState && this._writableState.getBuffer()
                    }
                }), Object.defineProperty(Tn.prototype, "writableHighWaterMark", {
                    enumerable: !1,
                    get: function() {
                        return this._writableState.highWaterMark
                    }
                }), Tn.prototype._write = function(e, t, r) {
                    r(new pn("_write()"))
                }, Tn.prototype._writev = null, Tn.prototype.end = function(e, t, r) {
                    var n = this._writableState;
                    return "function" === typeof e ? (r = e, e = null, t = null) : "function" === typeof t && (r = t, t = null), null !== e && void 0 !== e && this.write(e, t), n.corked && (n.corked = 1, this.uncork()), n.ending || function(e, t, r) {
                        t.ending = !0, Pn(e, t), r && (t.finished ? Ve.nextTick(r) : e.once("finish", r));
                        t.ended = !0, e.writable = !1
                    }(this, n, r), this
                }, Object.defineProperty(Tn.prototype, "writableLength", {
                    enumerable: !1,
                    get: function() {
                        return this._writableState.length
                    }
                }), Object.defineProperty(Tn.prototype, "destroyed", {
                    enumerable: !1,
                    get: function() {
                        return void 0 !== this._writableState && this._writableState.destroyed
                    },
                    set: function(e) {
                        this._writableState && (this._writableState.destroyed = e)
                    }
                }), Tn.prototype.destroy = hn.destroy, Tn.prototype._undestroy = hn.undestroy, Tn.prototype._destroy = function(e, t) {
                    t(e)
                };
            var Fn = Object.keys || function(e) {
                    var t = [];
                    for (var r in e) t.push(r);
                    return t
                },
                Dn = Ae;
            Dn.Duplex = jn, jt.exports(jn, Dn.Readable);
            for (var In = Fn(Dn.Writable.prototype), Ln = 0; Ln < In.length; Ln++) {
                var Nn = In[Ln];
                jn.prototype[Nn] || (jn.prototype[Nn] = Dn.Writable.prototype[Nn])
            }

            function jn(e) {
                if (!(this instanceof jn)) return new jn(e);
                Dn.Readable.call(this, e), Dn.Writable.call(this, e), this.allowHalfOpen = !0, e && (!1 === e.readable && (this.readable = !1), !1 === e.writable && (this.writable = !1), !1 === e.allowHalfOpen && (this.allowHalfOpen = !1, this.once("end", Mn)))
            }

            function Mn() {
                this._writableState.ended || Ve.nextTick(Bn, this)
            }

            function Bn(e) {
                e.end()
            }
            Object.defineProperty(jn.prototype, "writableHighWaterMark", {
                enumerable: !1,
                get: function() {
                    return this._writableState.highWaterMark
                }
            }), Object.defineProperty(jn.prototype, "writableBuffer", {
                enumerable: !1,
                get: function() {
                    return this._writableState && this._writableState.getBuffer()
                }
            }), Object.defineProperty(jn.prototype, "writableLength", {
                enumerable: !1,
                get: function() {
                    return this._writableState.length
                }
            }), Object.defineProperty(jn.prototype, "destroyed", {
                enumerable: !1,
                get: function() {
                    return void 0 !== this._readableState && void 0 !== this._writableState && (this._readableState.destroyed && this._writableState.destroyed)
                },
                set: function(e) {
                    void 0 !== this._readableState && void 0 !== this._writableState && (this._readableState.destroyed = e, this._writableState.destroyed = e)
                }
            });
            var Yn = Ae;
            Yn.Transform = Kn;
            var Wn = Pt.codes,
                qn = Wn.ERR_METHOD_NOT_IMPLEMENTED,
                zn = Wn.ERR_MULTIPLE_CALLBACK,
                Vn = Wn.ERR_TRANSFORM_ALREADY_TRANSFORMING,
                Gn = Wn.ERR_TRANSFORM_WITH_LENGTH_0;

            function Zn(e, t) {
                var r = this._transformState;
                r.transforming = !1;
                var n = r.writecb;
                if (null === n) return this.emit("error", new zn);
                r.writechunk = null, r.writecb = null, null != t && this.push(t), n(e);
                var i = this._readableState;
                i.reading = !1, (i.needReadable || i.length < i.highWaterMark) && this._read(i.highWaterMark)
            }

            function Kn(e) {
                if (!(this instanceof Kn)) return new Kn(e);
                Yn.Duplex.call(this, e), this._transformState = {
                    afterTransform: Zn.bind(this),
                    needTransform: !1,
                    transforming: !1,
                    writecb: null,
                    writechunk: null,
                    writeencoding: null
                }, this._readableState.needReadable = !0, this._readableState.sync = !1, e && ("function" === typeof e.transform && (this._transform = e.transform), "function" === typeof e.flush && (this._flush = e.flush)), this.on("prefinish", Hn)
            }

            function Hn() {
                var e = this;
                "function" !== typeof this._flush || this._readableState.destroyed ? Jn(this, null, null) : this._flush((function(t, r) {
                    Jn(e, t, r)
                }))
            }

            function Jn(e, t, r) {
                if (t) return e.emit("error", t);
                if (null != r && e.push(r), e._writableState.length) throw new Gn;
                if (e._transformState.transforming) throw new Vn;
                return e.push(null)
            }
            jt.exports(Kn, Yn.Duplex), Kn.prototype.push = function(e, t) {
                return this._transformState.needTransform = !1, Yn.Duplex.prototype.push.call(this, e, t)
            }, Kn.prototype._transform = function(e, t, r) {
                r(new qn("_transform()"))
            }, Kn.prototype._write = function(e, t, r) {
                var n = this._transformState;
                if (n.writecb = r, n.writechunk = e, n.writeencoding = t, !n.transforming) {
                    var i = this._readableState;
                    (n.needTransform || i.needReadable || i.length < i.highWaterMark) && this._read(i.highWaterMark)
                }
            }, Kn.prototype._read = function(e) {
                var t = this._transformState;
                null === t.writechunk || t.transforming ? t.needTransform = !0 : (t.transforming = !0, this._transform(t.writechunk, t.writeencoding, t.afterTransform))
            }, Kn.prototype._destroy = function(e, t) {
                Yn.Duplex.prototype._destroy.call(this, e, (function(e) {
                    t(e)
                }))
            };
            var Xn, $n = Ae;

            function Qn(e) {
                if (!(this instanceof Qn)) return new Qn(e);
                Transform.call(this, e)
            }
            $n.PassThrough = Qn, jt.exports(Qn, $n.Transform), Qn.prototype._transform = function(e, t, r) {
                r(null, e)
            };
            var ei = Pt.codes,
                ti = ei.ERR_MISSING_ARGS,
                ri = ei.ERR_STREAM_DESTROYED;

            function ni(e) {
                if (e) throw e
            }

            function ii(e, t, r, n) {
                n = function(e) {
                    var t = !1;
                    return function() {
                        t || (t = !0, e.apply(void 0, arguments))
                    }
                }(n);
                var i = !1;
                e.on("close", (function() {
                    i = !0
                })), void 0 === Xn && (Xn = tr), Xn(e, {
                    readable: t,
                    writable: r
                }, (function(e) {
                    if (e) return n(e);
                    i = !0, n()
                }));
                var o = !1;
                return function(t) {
                    if (!i && !o) return o = !0,
                        function(e) {
                            return e.setHeader && "function" === typeof e.abort
                        }(e) ? e.abort() : "function" === typeof e.destroy ? e.destroy() : void n(t || new ri("pipe"))
                }
            }

            function oi(e) {
                e()
            }

            function ai(e, t) {
                return e.pipe(t)
            }

            function ci(e) {
                return e.length ? "function" !== typeof e[e.length - 1] ? ni : e.pop() : ni
            }
            var si = function() {
                for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                var n, i = ci(t);
                if (Array.isArray(t[0]) && (t = t[0]), t.length < 2) throw new ti("streams");
                var o = t.map((function(e, r) {
                    var a = r < t.length - 1;
                    return ii(e, a, r > 0, (function(e) {
                        n || (n = e), e && o.forEach(oi), a || (o.forEach(oi), i(n))
                    }))
                }));
                return t.reduce(ai)
            };
            ! function(e, t) {
                var r = Ae;
                (t = e.exports = r.Readable).Stream = r.Readable, t.Readable = r.Readable, t.Writable = r.Writable, t.Duplex = r.Duplex, t.Transform = r.Transform, t.PassThrough = r.PassThrough, t.finished = tr, t.pipeline = si
            }(be, be.exports);
            var ui, li = be.exports,
                fi = {},
                hi = {},
                di = {
                    exports: {}
                },
                mi = {},
                gi = {},
                pi = {},
                yi = function() {
                    if ("function" !== typeof Symbol || "function" !== typeof Object.getOwnPropertySymbols) return !1;
                    if ("symbol" === typeof Symbol.iterator) return !0;
                    var e = {},
                        t = Symbol("test"),
                        r = Object(t);
                    if ("string" === typeof t) return !1;
                    if ("[object Symbol]" !== Object.prototype.toString.call(t)) return !1;
                    if ("[object Symbol]" !== Object.prototype.toString.call(r)) return !1;
                    for (t in e[t] = 42, e) return !1;
                    if ("function" === typeof Object.keys && 0 !== Object.keys(e).length) return !1;
                    if ("function" === typeof Object.getOwnPropertyNames && 0 !== Object.getOwnPropertyNames(e).length) return !1;
                    var n = Object.getOwnPropertySymbols(e);
                    if (1 !== n.length || n[0] !== t) return !1;
                    if (!Object.prototype.propertyIsEnumerable.call(e, t)) return !1;
                    if ("function" === typeof Object.getOwnPropertyDescriptor) {
                        var i = Object.getOwnPropertyDescriptor(e, t);
                        if (42 !== i.value || !0 !== i.enumerable) return !1
                    }
                    return !0
                },
                vi = "undefined" !== typeof Symbol && Symbol,
                bi = yi,
                Ai = "Function.prototype.bind called on incompatible ",
                wi = Array.prototype.slice,
                _i = Object.prototype.toString,
                Oi = "[object Function]",
                Si = function(e) {
                    var t = this;
                    if ("function" !== typeof t || _i.call(t) !== Oi) throw new TypeError(Ai + t);
                    for (var r, n = wi.call(arguments, 1), i = function() {
                            if (this instanceof r) {
                                var i = t.apply(this, n.concat(wi.call(arguments)));
                                return Object(i) === i ? i : this
                            }
                            return t.apply(e, n.concat(wi.call(arguments)))
                        }, o = Math.max(0, t.length - n.length), a = [], c = 0; c < o; c++) a.push("$" + c);
                    if (r = Function("binder", "return function (" + a.join(",") + "){ return binder.apply(this,arguments); }")(i), t.prototype) {
                        var s = function() {};
                        s.prototype = t.prototype, r.prototype = new s, s.prototype = null
                    }
                    return r
                },
                Ei = Function.prototype.bind || Si,
                Ti = Ei.call(Function.call, Object.prototype.hasOwnProperty),
                xi = SyntaxError,
                ki = Function,
                Ri = TypeError,
                Ui = function(e) {
                    try {
                        return ki('"use strict"; return (' + e + ").constructor;")()
                    } catch (t) {}
                },
                Ci = Object.getOwnPropertyDescriptor;
            if (Ci) try {
                Ci({}, "")
            } catch (hl) {
                Ci = null
            }
            var Pi = function() {
                    throw new Ri
                },
                Fi = Ci ? function() {
                    try {
                        return Pi
                    } catch (e) {
                        try {
                            return Ci(arguments, "callee").get
                        } catch (t) {
                            return Pi
                        }
                    }
                }() : Pi,
                Di = "function" === typeof vi && "function" === typeof Symbol && "symbol" === typeof vi("foo") && "symbol" === typeof Symbol("bar") && bi(),
                Ii = Object.getPrototypeOf || function(e) {
                    return e.__proto__
                },
                Li = {},
                Ni = "undefined" === typeof Uint8Array ? ui : Ii(Uint8Array),
                ji = {
                    "%AggregateError%": "undefined" === typeof AggregateError ? ui : AggregateError,
                    "%Array%": Array,
                    "%ArrayBuffer%": "undefined" === typeof ArrayBuffer ? ui : ArrayBuffer,
                    "%ArrayIteratorPrototype%": Di ? Ii([][Symbol.iterator]()) : ui,
                    "%AsyncFromSyncIteratorPrototype%": ui,
                    "%AsyncFunction%": Li,
                    "%AsyncGenerator%": Li,
                    "%AsyncGeneratorFunction%": Li,
                    "%AsyncIteratorPrototype%": Li,
                    "%Atomics%": "undefined" === typeof Atomics ? ui : Atomics,
                    "%BigInt%": "undefined" === typeof BigInt ? ui : BigInt,
                    "%Boolean%": Boolean,
                    "%DataView%": "undefined" === typeof DataView ? ui : DataView,
                    "%Date%": Date,
                    "%decodeURI%": decodeURI,
                    "%decodeURIComponent%": decodeURIComponent,
                    "%encodeURI%": encodeURI,
                    "%encodeURIComponent%": encodeURIComponent,
                    "%Error%": Error,
                    "%eval%": eval,
                    "%EvalError%": EvalError,
                    "%Float32Array%": "undefined" === typeof Float32Array ? ui : Float32Array,
                    "%Float64Array%": "undefined" === typeof Float64Array ? ui : Float64Array,
                    "%FinalizationRegistry%": "undefined" === typeof FinalizationRegistry ? ui : FinalizationRegistry,
                    "%Function%": ki,
                    "%GeneratorFunction%": Li,
                    "%Int8Array%": "undefined" === typeof Int8Array ? ui : Int8Array,
                    "%Int16Array%": "undefined" === typeof Int16Array ? ui : Int16Array,
                    "%Int32Array%": "undefined" === typeof Int32Array ? ui : Int32Array,
                    "%isFinite%": isFinite,
                    "%isNaN%": isNaN,
                    "%IteratorPrototype%": Di ? Ii(Ii([][Symbol.iterator]())) : ui,
                    "%JSON%": "object" === typeof JSON ? JSON : ui,
                    "%Map%": "undefined" === typeof Map ? ui : Map,
                    "%MapIteratorPrototype%": "undefined" !== typeof Map && Di ? Ii((new Map)[Symbol.iterator]()) : ui,
                    "%Math%": Math,
                    "%Number%": Number,
                    "%Object%": Object,
                    "%parseFloat%": parseFloat,
                    "%parseInt%": parseInt,
                    "%Promise%": "undefined" === typeof Promise ? ui : Promise,
                    "%Proxy%": "undefined" === typeof Proxy ? ui : Proxy,
                    "%RangeError%": RangeError,
                    "%ReferenceError%": ReferenceError,
                    "%Reflect%": "undefined" === typeof Reflect ? ui : Reflect,
                    "%RegExp%": RegExp,
                    "%Set%": "undefined" === typeof Set ? ui : Set,
                    "%SetIteratorPrototype%": "undefined" !== typeof Set && Di ? Ii((new Set)[Symbol.iterator]()) : ui,
                    "%SharedArrayBuffer%": "undefined" === typeof SharedArrayBuffer ? ui : SharedArrayBuffer,
                    "%String%": String,
                    "%StringIteratorPrototype%": Di ? Ii("" [Symbol.iterator]()) : ui,
                    "%Symbol%": Di ? Symbol : ui,
                    "%SyntaxError%": xi,
                    "%ThrowTypeError%": Fi,
                    "%TypedArray%": Ni,
                    "%TypeError%": Ri,
                    "%Uint8Array%": "undefined" === typeof Uint8Array ? ui : Uint8Array,
                    "%Uint8ClampedArray%": "undefined" === typeof Uint8ClampedArray ? ui : Uint8ClampedArray,
                    "%Uint16Array%": "undefined" === typeof Uint16Array ? ui : Uint16Array,
                    "%Uint32Array%": "undefined" === typeof Uint32Array ? ui : Uint32Array,
                    "%URIError%": URIError,
                    "%WeakMap%": "undefined" === typeof WeakMap ? ui : WeakMap,
                    "%WeakRef%": "undefined" === typeof WeakRef ? ui : WeakRef,
                    "%WeakSet%": "undefined" === typeof WeakSet ? ui : WeakSet
                },
                Mi = function e(t) {
                    var r;
                    if ("%AsyncFunction%" === t) r = Ui("async function () {}");
                    else if ("%GeneratorFunction%" === t) r = Ui("function* () {}");
                    else if ("%AsyncGeneratorFunction%" === t) r = Ui("async function* () {}");
                    else if ("%AsyncGenerator%" === t) {
                        var n = e("%AsyncGeneratorFunction%");
                        n && (r = n.prototype)
                    } else if ("%AsyncIteratorPrototype%" === t) {
                        var i = e("%AsyncGenerator%");
                        i && (r = Ii(i.prototype))
                    }
                    return ji[t] = r, r
                },
                Bi = {
                    "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"],
                    "%ArrayPrototype%": ["Array", "prototype"],
                    "%ArrayProto_entries%": ["Array", "prototype", "entries"],
                    "%ArrayProto_forEach%": ["Array", "prototype", "forEach"],
                    "%ArrayProto_keys%": ["Array", "prototype", "keys"],
                    "%ArrayProto_values%": ["Array", "prototype", "values"],
                    "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"],
                    "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"],
                    "%AsyncGeneratorPrototype%": ["AsyncGeneratorFunction", "prototype", "prototype"],
                    "%BooleanPrototype%": ["Boolean", "prototype"],
                    "%DataViewPrototype%": ["DataView", "prototype"],
                    "%DatePrototype%": ["Date", "prototype"],
                    "%ErrorPrototype%": ["Error", "prototype"],
                    "%EvalErrorPrototype%": ["EvalError", "prototype"],
                    "%Float32ArrayPrototype%": ["Float32Array", "prototype"],
                    "%Float64ArrayPrototype%": ["Float64Array", "prototype"],
                    "%FunctionPrototype%": ["Function", "prototype"],
                    "%Generator%": ["GeneratorFunction", "prototype"],
                    "%GeneratorPrototype%": ["GeneratorFunction", "prototype", "prototype"],
                    "%Int8ArrayPrototype%": ["Int8Array", "prototype"],
                    "%Int16ArrayPrototype%": ["Int16Array", "prototype"],
                    "%Int32ArrayPrototype%": ["Int32Array", "prototype"],
                    "%JSONParse%": ["JSON", "parse"],
                    "%JSONStringify%": ["JSON", "stringify"],
                    "%MapPrototype%": ["Map", "prototype"],
                    "%NumberPrototype%": ["Number", "prototype"],
                    "%ObjectPrototype%": ["Object", "prototype"],
                    "%ObjProto_toString%": ["Object", "prototype", "toString"],
                    "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"],
                    "%PromisePrototype%": ["Promise", "prototype"],
                    "%PromiseProto_then%": ["Promise", "prototype", "then"],
                    "%Promise_all%": ["Promise", "all"],
                    "%Promise_reject%": ["Promise", "reject"],
                    "%Promise_resolve%": ["Promise", "resolve"],
                    "%RangeErrorPrototype%": ["RangeError", "prototype"],
                    "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"],
                    "%RegExpPrototype%": ["RegExp", "prototype"],
                    "%SetPrototype%": ["Set", "prototype"],
                    "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"],
                    "%StringPrototype%": ["String", "prototype"],
                    "%SymbolPrototype%": ["Symbol", "prototype"],
                    "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"],
                    "%TypedArrayPrototype%": ["TypedArray", "prototype"],
                    "%TypeErrorPrototype%": ["TypeError", "prototype"],
                    "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"],
                    "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"],
                    "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"],
                    "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"],
                    "%URIErrorPrototype%": ["URIError", "prototype"],
                    "%WeakMapPrototype%": ["WeakMap", "prototype"],
                    "%WeakSetPrototype%": ["WeakSet", "prototype"]
                },
                Yi = Ei,
                Wi = Ti,
                qi = Yi.call(Function.call, Array.prototype.concat),
                zi = Yi.call(Function.apply, Array.prototype.splice),
                Vi = Yi.call(Function.call, String.prototype.replace),
                Gi = Yi.call(Function.call, String.prototype.slice),
                Zi = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,
                Ki = /\\(\\)?/g,
                Hi = function(e) {
                    var t = Gi(e, 0, 1),
                        r = Gi(e, -1);
                    if ("%" === t && "%" !== r) throw new xi("invalid intrinsic syntax, expected closing `%`");
                    if ("%" === r && "%" !== t) throw new xi("invalid intrinsic syntax, expected opening `%`");
                    var n = [];
                    return Vi(e, Zi, (function(e, t, r, i) {
                        n[n.length] = r ? Vi(i, Ki, "$1") : t || e
                    })), n
                },
                Ji = function(e, t) {
                    var r, n = e;
                    if (Wi(Bi, n) && (n = "%" + (r = Bi[n])[0] + "%"), Wi(ji, n)) {
                        var i = ji[n];
                        if (i === Li && (i = Mi(n)), "undefined" === typeof i && !t) throw new Ri("intrinsic " + e + " exists, but is not available. Please file an issue!");
                        return {
                            alias: r,
                            name: n,
                            value: i
                        }
                    }
                    throw new xi("intrinsic " + e + " does not exist!")
                },
                Xi = function(e, t) {
                    if ("string" !== typeof e || 0 === e.length) throw new Ri("intrinsic name must be a non-empty string");
                    if (arguments.length > 1 && "boolean" !== typeof t) throw new Ri('"allowMissing" argument must be a boolean');
                    var r = Hi(e),
                        n = r.length > 0 ? r[0] : "",
                        i = Ji("%" + n + "%", t),
                        o = i.name,
                        a = i.value,
                        c = !1,
                        s = i.alias;
                    s && (n = s[0], zi(r, qi([0, 1], s)));
                    for (var u = 1, l = !0; u < r.length; u += 1) {
                        var f = r[u],
                            h = Gi(f, 0, 1),
                            d = Gi(f, -1);
                        if (('"' === h || "'" === h || "`" === h || '"' === d || "'" === d || "`" === d) && h !== d) throw new xi("property names with quotes must have matching quotes");
                        if ("constructor" !== f && l || (c = !0), Wi(ji, o = "%" + (n += "." + f) + "%")) a = ji[o];
                        else if (null != a) {
                            if (!(f in a)) {
                                if (!t) throw new Ri("base intrinsic for " + e + " exists, but the property is not available.");
                                return
                            }
                            if (Ci && u + 1 >= r.length) {
                                var m = Ci(a, f);
                                a = (l = !!m) && "get" in m && !("originalValue" in m.get) ? m.get : a[f]
                            } else l = Wi(a, f), a = a[f];
                            l && !c && (ji[o] = a)
                        }
                    }
                    return a
                },
                $i = {
                    exports: {}
                };
            ! function(e) {
                var t = Ei,
                    r = Xi,
                    n = r("%Function.prototype.apply%"),
                    i = r("%Function.prototype.call%"),
                    o = r("%Reflect.apply%", !0) || t.call(i, n),
                    a = r("%Object.getOwnPropertyDescriptor%", !0),
                    c = r("%Object.defineProperty%", !0),
                    s = r("%Math.max%");
                if (c) try {
                    c({}, "a", {
                        value: 1
                    })
                } catch (hl) {
                    c = null
                }
                e.exports = function(e) {
                    var r = o(t, i, arguments);
                    if (a && c) {
                        var n = a(r, "length");
                        n.configurable && c(r, "length", {
                            value: 1 + s(0, e.length - (arguments.length - 1))
                        })
                    }
                    return r
                };
                var u = function() {
                    return o(t, n, arguments)
                };
                c ? c(e.exports, "apply", {
                    value: u
                }) : e.exports.apply = u
            }($i);
            var Qi = Xi,
                eo = $i.exports,
                to = eo(Qi("String.prototype.indexOf")),
                ro = function(e, t) {
                    var r = Qi(e, !!t);
                    return "function" === typeof r && to(e, ".prototype.") > -1 ? eo(r) : r
                },
                no = "function" === typeof Symbol && "symbol" === typeof Symbol.toStringTag,
                io = ro("Object.prototype.toString"),
                oo = function(e) {
                    return !(no && e && "object" === typeof e && Symbol.toStringTag in e) && "[object Arguments]" === io(e)
                },
                ao = function(e) {
                    return !!oo(e) || null !== e && "object" === typeof e && "number" === typeof e.length && e.length >= 0 && "[object Array]" !== io(e) && "[object Function]" === io(e.callee)
                },
                co = function() {
                    return oo(arguments)
                }();
            oo.isLegacyArguments = ao;
            var so, uo = co ? oo : ao,
                lo = yi,
                fo = function() {
                    return lo() && !!Symbol.toStringTag
                },
                ho = Object.prototype.toString,
                mo = Function.prototype.toString,
                go = /^\s*(?:function)?\*/,
                po = fo(),
                yo = Object.getPrototypeOf,
                vo = function(e) {
                    if ("function" !== typeof e) return !1;
                    if (go.test(mo.call(e))) return !0;
                    if (!po) return "[object GeneratorFunction]" === ho.call(e);
                    if (!yo) return !1;
                    if ("undefined" === typeof so) {
                        var t = function() {
                            if (!po) return !1;
                            try {
                                return Function("return function*() {}")()
                            } catch (hl) {}
                        }();
                        so = !!t && yo(t)
                    }
                    return yo(e) === so
                },
                bo = Object.prototype.hasOwnProperty,
                Ao = Object.prototype.toString,
                wo = function(e, t, r) {
                    if ("[object Function]" !== Ao.call(t)) throw new TypeError("iterator must be a function");
                    var n = e.length;
                    if (n === +n)
                        for (var i = 0; i < n; i++) t.call(r, e[i], i, e);
                    else
                        for (var o in e) bo.call(e, o) && t.call(r, e[o], o, e)
                },
                _o = ["BigInt64Array", "BigUint64Array", "Float32Array", "Float64Array", "Int16Array", "Int32Array", "Int8Array", "Uint16Array", "Uint32Array", "Uint8Array", "Uint8ClampedArray"],
                Oo = "undefined" === typeof globalThis ? ye : globalThis,
                So = function() {
                    for (var e = [], t = 0; t < _o.length; t++) "function" === typeof Oo[_o[t]] && (e[e.length] = _o[t]);
                    return e
                },
                Eo = Xi("%Object.getOwnPropertyDescriptor%", !0);
            if (Eo) try {
                Eo([], "length")
            } catch (hl) {
                Eo = null
            }
            var To = Eo,
                xo = wo,
                ko = So,
                Ro = ro,
                Uo = Ro("Object.prototype.toString"),
                Co = fo(),
                Po = "undefined" === typeof globalThis ? ye : globalThis,
                Fo = ko(),
                Do = Ro("Array.prototype.indexOf", !0) || function(e, t) {
                    for (var r = 0; r < e.length; r += 1)
                        if (e[r] === t) return r;
                    return -1
                },
                Io = Ro("String.prototype.slice"),
                Lo = {},
                No = To,
                jo = Object.getPrototypeOf;
            Co && No && jo && xo(Fo, (function(e) {
                var t = new Po[e];
                if (Symbol.toStringTag in t) {
                    var r = jo(t),
                        n = No(r, Symbol.toStringTag);
                    if (!n) {
                        var i = jo(r);
                        n = No(i, Symbol.toStringTag)
                    }
                    Lo[e] = n.get
                }
            }));
            var Mo = function(e) {
                    if (!e || "object" !== typeof e) return !1;
                    if (!Co || !(Symbol.toStringTag in e)) {
                        var t = Io(Uo(e), 8, -1);
                        return Do(Fo, t) > -1
                    }
                    return !!No && function(e) {
                        var t = !1;
                        return xo(Lo, (function(r, n) {
                            if (!t) try {
                                t = r.call(e) === n
                            } catch (hl) {}
                        })), t
                    }(e)
                },
                Bo = wo,
                Yo = So,
                Wo = ro,
                qo = Wo("Object.prototype.toString"),
                zo = fo(),
                Vo = "undefined" === typeof globalThis ? ye : globalThis,
                Go = Yo(),
                Zo = Wo("String.prototype.slice"),
                Ko = {},
                Ho = To,
                Jo = Object.getPrototypeOf;
            zo && Ho && Jo && Bo(Go, (function(e) {
                if ("function" === typeof Vo[e]) {
                    var t = new Vo[e];
                    if (Symbol.toStringTag in t) {
                        var r = Jo(t),
                            n = Ho(r, Symbol.toStringTag);
                        if (!n) {
                            var i = Jo(r);
                            n = Ho(i, Symbol.toStringTag)
                        }
                        Ko[e] = n.get
                    }
                }
            }));
            var Xo = Mo,
                $o = function(e) {
                    return !!Xo(e) && (zo && Symbol.toStringTag in e ? function(e) {
                        var t = !1;
                        return Bo(Ko, (function(r, n) {
                            if (!t) try {
                                var i = r.call(e);
                                i === n && (t = i)
                            } catch (hl) {}
                        })), t
                    }(e) : Zo(qo(e), 8, -1))
                };
            ! function(e) {
                var t = uo,
                    r = vo,
                    n = $o,
                    i = Mo;

                function o(e) {
                    return e.call.bind(e)
                }
                var a = "undefined" !== typeof BigInt,
                    c = "undefined" !== typeof Symbol,
                    s = o(Object.prototype.toString),
                    u = o(Number.prototype.valueOf),
                    l = o(String.prototype.valueOf),
                    f = o(Boolean.prototype.valueOf);
                if (a) var h = o(BigInt.prototype.valueOf);
                if (c) var d = o(Symbol.prototype.valueOf);

                function m(e, t) {
                    if ("object" !== typeof e) return !1;
                    try {
                        return t(e), !0
                    } catch (hl) {
                        return !1
                    }
                }

                function g(e) {
                    return "[object Map]" === s(e)
                }

                function p(e) {
                    return "[object Set]" === s(e)
                }

                function y(e) {
                    return "[object WeakMap]" === s(e)
                }

                function v(e) {
                    return "[object WeakSet]" === s(e)
                }

                function b(e) {
                    return "[object ArrayBuffer]" === s(e)
                }

                function A(e) {
                    return "undefined" !== typeof ArrayBuffer && (b.working ? b(e) : e instanceof ArrayBuffer)
                }

                function w(e) {
                    return "[object DataView]" === s(e)
                }

                function _(e) {
                    return "undefined" !== typeof DataView && (w.working ? w(e) : e instanceof DataView)
                }
                e.isArgumentsObject = t, e.isGeneratorFunction = r, e.isTypedArray = i, e.isPromise = function(e) {
                    return "undefined" !== typeof Promise && e instanceof Promise || null !== e && "object" === typeof e && "function" === typeof e.then && "function" === typeof e.catch
                }, e.isArrayBufferView = function(e) {
                    return "undefined" !== typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView(e) : i(e) || _(e)
                }, e.isUint8Array = function(e) {
                    return "Uint8Array" === n(e)
                }, e.isUint8ClampedArray = function(e) {
                    return "Uint8ClampedArray" === n(e)
                }, e.isUint16Array = function(e) {
                    return "Uint16Array" === n(e)
                }, e.isUint32Array = function(e) {
                    return "Uint32Array" === n(e)
                }, e.isInt8Array = function(e) {
                    return "Int8Array" === n(e)
                }, e.isInt16Array = function(e) {
                    return "Int16Array" === n(e)
                }, e.isInt32Array = function(e) {
                    return "Int32Array" === n(e)
                }, e.isFloat32Array = function(e) {
                    return "Float32Array" === n(e)
                }, e.isFloat64Array = function(e) {
                    return "Float64Array" === n(e)
                }, e.isBigInt64Array = function(e) {
                    return "BigInt64Array" === n(e)
                }, e.isBigUint64Array = function(e) {
                    return "BigUint64Array" === n(e)
                }, g.working = "undefined" !== typeof Map && g(new Map), e.isMap = function(e) {
                    return "undefined" !== typeof Map && (g.working ? g(e) : e instanceof Map)
                }, p.working = "undefined" !== typeof Set && p(new Set), e.isSet = function(e) {
                    return "undefined" !== typeof Set && (p.working ? p(e) : e instanceof Set)
                }, y.working = "undefined" !== typeof WeakMap && y(new WeakMap), e.isWeakMap = function(e) {
                    return "undefined" !== typeof WeakMap && (y.working ? y(e) : e instanceof WeakMap)
                }, v.working = "undefined" !== typeof WeakSet && v(new WeakSet), e.isWeakSet = function(e) {
                    return v(e)
                }, b.working = "undefined" !== typeof ArrayBuffer && b(new ArrayBuffer), e.isArrayBuffer = A, w.working = "undefined" !== typeof ArrayBuffer && "undefined" !== typeof DataView && w(new DataView(new ArrayBuffer(1), 0, 1)), e.isDataView = _;
                var O = "undefined" !== typeof SharedArrayBuffer ? SharedArrayBuffer : void 0;

                function S(e) {
                    return "[object SharedArrayBuffer]" === s(e)
                }

                function E(e) {
                    return "undefined" !== typeof O && ("undefined" === typeof S.working && (S.working = S(new O)), S.working ? S(e) : e instanceof O)
                }

                function T(e) {
                    return m(e, u)
                }

                function x(e) {
                    return m(e, l)
                }

                function k(e) {
                    return m(e, f)
                }

                function R(e) {
                    return a && m(e, h)
                }

                function U(e) {
                    return c && m(e, d)
                }
                e.isSharedArrayBuffer = E, e.isAsyncFunction = function(e) {
                    return "[object AsyncFunction]" === s(e)
                }, e.isMapIterator = function(e) {
                    return "[object Map Iterator]" === s(e)
                }, e.isSetIterator = function(e) {
                    return "[object Set Iterator]" === s(e)
                }, e.isGeneratorObject = function(e) {
                    return "[object Generator]" === s(e)
                }, e.isWebAssemblyCompiledModule = function(e) {
                    return "[object WebAssembly.Module]" === s(e)
                }, e.isNumberObject = T, e.isStringObject = x, e.isBooleanObject = k, e.isBigIntObject = R, e.isSymbolObject = U, e.isBoxedPrimitive = function(e) {
                    return T(e) || x(e) || k(e) || R(e) || U(e)
                }, e.isAnyArrayBuffer = function(e) {
                    return "undefined" !== typeof Uint8Array && (A(e) || E(e))
                }, ["isProxy", "isExternal", "isModuleNamespaceObject"].forEach((function(t) {
                    Object.defineProperty(e, t, {
                        enumerable: !1,
                        value: function() {
                            throw new Error(t + " is not supported in userland")
                        }
                    })
                }))
            }(pi);
            var Qo = function(e) {
                return e && "object" === typeof e && "function" === typeof e.copy && "function" === typeof e.fill && "function" === typeof e.readUInt8
            };

            function ea(e) {
                return ea = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }, ea(e)
            }

            function ta(e, t) {
                return !t || "object" !== ea(t) && "function" !== typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function ra(e) {
                return ra = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                }, ra(e)
            }

            function na(e, t) {
                return na = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e
                }, na(e, t)
            }! function(e) {
                var t = Object.getOwnPropertyDescriptors || function(e) {
                        for (var t = Object.keys(e), r = {}, n = 0; n < t.length; n++) r[t[n]] = Object.getOwnPropertyDescriptor(e, t[n]);
                        return r
                    },
                    r = /%[sdj%]/g;
                e.format = function(e) {
                    if (!p(e)) {
                        for (var t = [], n = 0; n < arguments.length; n++) t.push(a(arguments[n]));
                        return t.join(" ")
                    }
                    n = 1;
                    for (var i = arguments, o = i.length, c = String(e).replace(r, (function(e) {
                            if ("%%" === e) return "%";
                            if (n >= o) return e;
                            switch (e) {
                                case "%s":
                                    return String(i[n++]);
                                case "%d":
                                    return Number(i[n++]);
                                case "%j":
                                    try {
                                        return JSON.stringify(i[n++])
                                    } catch (t) {
                                        return "[Circular]"
                                    }
                                default:
                                    return e
                            }
                        })), s = i[n]; n < o; s = i[++n]) m(s) || !b(s) ? c += " " + s : c += " " + a(s);
                    return c
                }, e.deprecate = function(t, r) {
                    if ("undefined" !== typeof Ve && !0 === Ve.noDeprecation) return t;
                    if ("undefined" === typeof Ve) return function() {
                        return e.deprecate(t, r).apply(this, arguments)
                    };
                    var n = !1;
                    return function() {
                        return n || (console.error(r), n = !0), t.apply(this, arguments)
                    }
                };
                var n = {},
                    i = /^$/;
                if (Ve.env.NODE_DEBUG) {
                    var o = Ve.env.NODE_DEBUG;
                    o = o.replace(/[|\\{}()[\]^$+?.]/g, "\\$&").replace(/\*/g, ".*").replace(/,/g, "$|^").toUpperCase(), i = new RegExp("^" + o + "$", "i")
                }

                function a(t, r) {
                    var n = {
                        seen: [],
                        stylize: s
                    };
                    return arguments.length >= 3 && (n.depth = arguments[2]), arguments.length >= 4 && (n.colors = arguments[3]), d(r) ? n.showHidden = r : r && e._extend(n, r), y(n.showHidden) && (n.showHidden = !1), y(n.depth) && (n.depth = 2), y(n.colors) && (n.colors = !1), y(n.customInspect) && (n.customInspect = !0), n.colors && (n.stylize = c), u(n, t, n.depth)
                }

                function c(e, t) {
                    var r = a.styles[t];
                    return r ? "\x1b[" + a.colors[r][0] + "m" + e + "\x1b[" + a.colors[r][1] + "m" : e
                }

                function s(e, t) {
                    return e
                }

                function u(t, r, n) {
                    if (t.customInspect && r && _(r.inspect) && r.inspect !== e.inspect && (!r.constructor || r.constructor.prototype !== r)) {
                        var i = r.inspect(n, t);
                        return p(i) || (i = u(t, i, n)), i
                    }
                    var o = function(e, t) {
                        if (y(t)) return e.stylize("undefined", "undefined");
                        if (p(t)) {
                            var r = "'" + JSON.stringify(t).replace(/^"|"$/g, "").replace(/'/g, "\\'").replace(/\\"/g, '"') + "'";
                            return e.stylize(r, "string")
                        }
                        if (g(t)) return e.stylize("" + t, "number");
                        if (d(t)) return e.stylize("" + t, "boolean");
                        if (m(t)) return e.stylize("null", "null")
                    }(t, r);
                    if (o) return o;
                    var a = Object.keys(r),
                        c = function(e) {
                            var t = {};
                            return e.forEach((function(e, r) {
                                t[e] = !0
                            })), t
                        }(a);
                    if (t.showHidden && (a = Object.getOwnPropertyNames(r)), w(r) && (a.indexOf("message") >= 0 || a.indexOf("description") >= 0)) return l(r);
                    if (0 === a.length) {
                        if (_(r)) {
                            var s = r.name ? ": " + r.name : "";
                            return t.stylize("[Function" + s + "]", "special")
                        }
                        if (v(r)) return t.stylize(RegExp.prototype.toString.call(r), "regexp");
                        if (A(r)) return t.stylize(Date.prototype.toString.call(r), "date");
                        if (w(r)) return l(r)
                    }
                    var b, O = "",
                        S = !1,
                        E = ["{", "}"];
                    (h(r) && (S = !0, E = ["[", "]"]), _(r)) && (O = " [Function" + (r.name ? ": " + r.name : "") + "]");
                    return v(r) && (O = " " + RegExp.prototype.toString.call(r)), A(r) && (O = " " + Date.prototype.toUTCString.call(r)), w(r) && (O = " " + l(r)), 0 !== a.length || S && 0 != r.length ? n < 0 ? v(r) ? t.stylize(RegExp.prototype.toString.call(r), "regexp") : t.stylize("[Object]", "special") : (t.seen.push(r), b = S ? function(e, t, r, n, i) {
                        for (var o = [], a = 0, c = t.length; a < c; ++a) x(t, String(a)) ? o.push(f(e, t, r, n, String(a), !0)) : o.push("");
                        return i.forEach((function(i) {
                            i.match(/^\d+$/) || o.push(f(e, t, r, n, i, !0))
                        })), o
                    }(t, r, n, c, a) : a.map((function(e) {
                        return f(t, r, n, c, e, S)
                    })), t.seen.pop(), function(e, t, r) {
                        if (e.reduce((function(e, t) {
                                return t.indexOf("\n"), e + t.replace(/\u001b\[\d\d?m/g, "").length + 1
                            }), 0) > 60) return r[0] + ("" === t ? "" : t + "\n ") + " " + e.join(",\n  ") + " " + r[1];
                        return r[0] + t + " " + e.join(", ") + " " + r[1]
                    }(b, O, E)) : E[0] + O + E[1]
                }

                function l(e) {
                    return "[" + Error.prototype.toString.call(e) + "]"
                }

                function f(e, t, r, n, i, o) {
                    var a, c, s;
                    if ((s = Object.getOwnPropertyDescriptor(t, i) || {
                            value: t[i]
                        }).get ? c = s.set ? e.stylize("[Getter/Setter]", "special") : e.stylize("[Getter]", "special") : s.set && (c = e.stylize("[Setter]", "special")), x(n, i) || (a = "[" + i + "]"), c || (e.seen.indexOf(s.value) < 0 ? (c = m(r) ? u(e, s.value, null) : u(e, s.value, r - 1)).indexOf("\n") > -1 && (c = o ? c.split("\n").map((function(e) {
                            return "  " + e
                        })).join("\n").substr(2) : "\n" + c.split("\n").map((function(e) {
                            return "   " + e
                        })).join("\n")) : c = e.stylize("[Circular]", "special")), y(a)) {
                        if (o && i.match(/^\d+$/)) return c;
                        (a = JSON.stringify("" + i)).match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/) ? (a = a.substr(1, a.length - 2), a = e.stylize(a, "name")) : (a = a.replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"$)/g, "'"), a = e.stylize(a, "string"))
                    }
                    return a + ": " + c
                }

                function h(e) {
                    return Array.isArray(e)
                }

                function d(e) {
                    return "boolean" === typeof e
                }

                function m(e) {
                    return null === e
                }

                function g(e) {
                    return "number" === typeof e
                }

                function p(e) {
                    return "string" === typeof e
                }

                function y(e) {
                    return void 0 === e
                }

                function v(e) {
                    return b(e) && "[object RegExp]" === O(e)
                }

                function b(e) {
                    return "object" === typeof e && null !== e
                }

                function A(e) {
                    return b(e) && "[object Date]" === O(e)
                }

                function w(e) {
                    return b(e) && ("[object Error]" === O(e) || e instanceof Error)
                }

                function _(e) {
                    return "function" === typeof e
                }

                function O(e) {
                    return Object.prototype.toString.call(e)
                }

                function S(e) {
                    return e < 10 ? "0" + e.toString(10) : e.toString(10)
                }
                e.debuglog = function(t) {
                    if (t = t.toUpperCase(), !n[t])
                        if (i.test(t)) {
                            var r = Ve.pid;
                            n[t] = function() {
                                var n = e.format.apply(e, arguments);
                                console.error("%s %d: %s", t, r, n)
                            }
                        } else n[t] = function() {};
                    return n[t]
                }, e.inspect = a, a.colors = {
                    bold: [1, 22],
                    italic: [3, 23],
                    underline: [4, 24],
                    inverse: [7, 27],
                    white: [37, 39],
                    grey: [90, 39],
                    black: [30, 39],
                    blue: [34, 39],
                    cyan: [36, 39],
                    green: [32, 39],
                    magenta: [35, 39],
                    red: [31, 39],
                    yellow: [33, 39]
                }, a.styles = {
                    special: "cyan",
                    number: "yellow",
                    boolean: "yellow",
                    undefined: "grey",
                    null: "bold",
                    string: "green",
                    date: "magenta",
                    regexp: "red"
                }, e.types = pi, e.isArray = h, e.isBoolean = d, e.isNull = m, e.isNullOrUndefined = function(e) {
                    return null == e
                }, e.isNumber = g, e.isString = p, e.isSymbol = function(e) {
                    return "symbol" === typeof e
                }, e.isUndefined = y, e.isRegExp = v, e.types.isRegExp = v, e.isObject = b, e.isDate = A, e.types.isDate = A, e.isError = w, e.types.isNativeError = w, e.isFunction = _, e.isPrimitive = function(e) {
                    return null === e || "boolean" === typeof e || "number" === typeof e || "string" === typeof e || "symbol" === typeof e || "undefined" === typeof e
                }, e.isBuffer = Qo;
                var E = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

                function T() {
                    var e = new Date,
                        t = [S(e.getHours()), S(e.getMinutes()), S(e.getSeconds())].join(":");
                    return [e.getDate(), E[e.getMonth()], t].join(" ")
                }

                function x(e, t) {
                    return Object.prototype.hasOwnProperty.call(e, t)
                }
                e.log = function() {
                    console.log("%s - %s", T(), e.format.apply(e, arguments))
                }, e.inherits = jt.exports, e._extend = function(e, t) {
                    if (!t || !b(t)) return e;
                    for (var r = Object.keys(t), n = r.length; n--;) e[r[n]] = t[r[n]];
                    return e
                };
                var k = "undefined" !== typeof Symbol ? Symbol("util.promisify.custom") : void 0;

                function R(e, t) {
                    if (!e) {
                        var r = new Error("Promise was rejected with a falsy value");
                        r.reason = e, e = r
                    }
                    return t(e)
                }
                e.promisify = function(e) {
                    if ("function" !== typeof e) throw new TypeError('The "original" argument must be of type Function');
                    if (k && e[k]) {
                        var r;
                        if ("function" !== typeof(r = e[k])) throw new TypeError('The "util.promisify.custom" argument must be of type Function');
                        return Object.defineProperty(r, k, {
                            value: r,
                            enumerable: !1,
                            writable: !1,
                            configurable: !0
                        }), r
                    }

                    function r() {
                        for (var t, r, n = new Promise((function(e, n) {
                                t = e, r = n
                            })), i = [], o = 0; o < arguments.length; o++) i.push(arguments[o]);
                        i.push((function(e, n) {
                            e ? r(e) : t(n)
                        }));
                        try {
                            e.apply(this, i)
                        } catch (a) {
                            r(a)
                        }
                        return n
                    }
                    return Object.setPrototypeOf(r, Object.getPrototypeOf(e)), k && Object.defineProperty(r, k, {
                        value: r,
                        enumerable: !1,
                        writable: !1,
                        configurable: !0
                    }), Object.defineProperties(r, t(e))
                }, e.promisify.custom = k, e.callbackify = function(e) {
                    if ("function" !== typeof e) throw new TypeError('The "original" argument must be of type Function');

                    function r() {
                        for (var t = [], r = 0; r < arguments.length; r++) t.push(arguments[r]);
                        var n = t.pop();
                        if ("function" !== typeof n) throw new TypeError("The last argument must be of type Function");
                        var i = this,
                            o = function() {
                                return n.apply(i, arguments)
                            };
                        e.apply(this, t).then((function(e) {
                            Ve.nextTick(o.bind(null, null, e))
                        }), (function(e) {
                            Ve.nextTick(R.bind(null, e, o))
                        }))
                    }
                    return Object.setPrototypeOf(r, Object.getPrototypeOf(e)), Object.defineProperties(r, t(e)), r
                }
            }(gi);
            var ia, oa, aa = {};

            function ca(e, t, r) {
                r || (r = Error);
                var n = function(r) {
                    function n(r, i, o) {
                        var a;
                        return function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, n), a = ta(this, ra(n).call(this, function(e, r, n) {
                            return "string" === typeof t ? t : t(e, r, n)
                        }(r, i, o))), a.code = e, a
                    }
                    return function(e, t) {
                        if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        }), t && na(e, t)
                    }(n, r), n
                }(r);
                aa[e] = n
            }

            function sa(e, t) {
                if (Array.isArray(e)) {
                    var r = e.length;
                    return e = e.map((function(e) {
                        return String(e)
                    })), r > 2 ? "one of ".concat(t, " ").concat(e.slice(0, r - 1).join(", "), ", or ") + e[r - 1] : 2 === r ? "one of ".concat(t, " ").concat(e[0], " or ").concat(e[1]) : "of ".concat(t, " ").concat(e[0])
                }
                return "of ".concat(t, " ").concat(String(e))
            }

            function ua(e, t, r) {
                return t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r, e
            }

            function la(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }

            function fa(e, t) {
                return !t || "object" !== va(t) && "function" !== typeof t ? ha(e) : t
            }

            function ha(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function da(e) {
                var t = "function" === typeof Map ? new Map : void 0;
                return da = function(e) {
                    if (null === e || (r = e, -1 === Function.toString.call(r).indexOf("[native code]"))) return e;
                    var r;
                    if ("function" !== typeof e) throw new TypeError("Super expression must either be null or a function");
                    if ("undefined" !== typeof t) {
                        if (t.has(e)) return t.get(e);
                        t.set(e, n)
                    }

                    function n() {
                        return ga(e, arguments, ya(this).constructor)
                    }
                    return n.prototype = Object.create(e.prototype, {
                        constructor: {
                            value: n,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), pa(n, e)
                }, da(e)
            }

            function ma() {
                if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" === typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                } catch (hl) {
                    return !1
                }
            }

            function ga(e, t, r) {
                return ga = ma() ? Reflect.construct : function(e, t, r) {
                    var n = [null];
                    n.push.apply(n, t);
                    var i = new(Function.bind.apply(e, n));
                    return r && pa(i, r.prototype), i
                }, ga.apply(null, arguments)
            }

            function pa(e, t) {
                return pa = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e
                }, pa(e, t)
            }

            function ya(e) {
                return ya = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                }, ya(e)
            }

            function va(e) {
                return va = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }, va(e)
            }
            ca("ERR_AMBIGUOUS_ARGUMENT", 'The "%s" argument is ambiguous. %s', TypeError), ca("ERR_INVALID_ARG_TYPE", (function(e, t, r) {
                var n, i, o, a;
                if (void 0 === ia && (ia = di.exports), ia("string" === typeof e, "'name' must be a string"), "string" === typeof t && (i = "not ", t.substr(!o || o < 0 ? 0 : +o, i.length) === i) ? (n = "must not be", t = t.replace(/^not /, "")) : n = "must be", function(e, t, r) {
                        return (void 0 === r || r > e.length) && (r = e.length), e.substring(r - t.length, r) === t
                    }(e, " argument")) a = "The ".concat(e, " ").concat(n, " ").concat(sa(t, "type"));
                else {
                    var c = function(e, t, r) {
                        return "number" !== typeof r && (r = 0), !(r + t.length > e.length) && -1 !== e.indexOf(t, r)
                    }(e, ".") ? "property" : "argument";
                    a = 'The "'.concat(e, '" ').concat(c, " ").concat(n, " ").concat(sa(t, "type"))
                }
                return a += ". Received type ".concat(ea(r))
            }), TypeError), ca("ERR_INVALID_ARG_VALUE", (function(e, t) {
                var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "is invalid";
                void 0 === oa && (oa = gi);
                var n = oa.inspect(t);
                return n.length > 128 && (n = "".concat(n.slice(0, 128), "...")), "The argument '".concat(e, "' ").concat(r, ". Received ").concat(n)
            }), TypeError), ca("ERR_INVALID_RETURN_VALUE", (function(e, t, r) {
                var n;
                return n = r && r.constructor && r.constructor.name ? "instance of ".concat(r.constructor.name) : "type ".concat(ea(r)), "Expected ".concat(e, ' to be returned from the "').concat(t, '"') + " function but got ".concat(n, ".")
            }), TypeError), ca("ERR_MISSING_ARGS", (function() {
                for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                void 0 === ia && (ia = di.exports), ia(t.length > 0, "At least one arg needs to be specified");
                var n = "The ",
                    i = t.length;
                switch (t = t.map((function(e) {
                    return '"'.concat(e, '"')
                })), i) {
                    case 1:
                        n += "".concat(t[0], " argument");
                        break;
                    case 2:
                        n += "".concat(t[0], " and ").concat(t[1], " arguments");
                        break;
                    default:
                        n += t.slice(0, i - 1).join(", "), n += ", and ".concat(t[i - 1], " arguments")
                }
                return "".concat(n, " must be specified")
            }), TypeError), mi.codes = aa;
            var ba = gi.inspect,
                Aa = mi.codes.ERR_INVALID_ARG_TYPE;

            function wa(e, t, r) {
                return (void 0 === r || r > e.length) && (r = e.length), e.substring(r - t.length, r) === t
            }
            var _a = "",
                Oa = "",
                Sa = {
                    deepStrictEqual: "Expected values to be strictly deep-equal:",
                    strictEqual: "Expected values to be strictly equal:",
                    strictEqualObject: 'Expected "actual" to be reference-equal to "expected":',
                    deepEqual: "Expected values to be loosely deep-equal:",
                    equal: "Expected values to be loosely equal:",
                    notDeepStrictEqual: 'Expected "actual" not to be strictly deep-equal to:',
                    notStrictEqual: 'Expected "actual" to be strictly unequal to:',
                    notStrictEqualObject: 'Expected "actual" not to be reference-equal to "expected":',
                    notDeepEqual: 'Expected "actual" not to be loosely deep-equal to:',
                    notEqual: 'Expected "actual" to be loosely unequal to:',
                    notIdentical: "Values identical but not reference-equal:"
                };

            function Ea(e) {
                var t = Object.keys(e),
                    r = Object.create(Object.getPrototypeOf(e));
                return t.forEach((function(t) {
                    r[t] = e[t]
                })), Object.defineProperty(r, "message", {
                    value: e.message
                }), r
            }

            function Ta(e) {
                return ba(e, {
                    compact: !1,
                    customInspect: !1,
                    depth: 1e3,
                    maxArrayLength: 1 / 0,
                    showHidden: !1,
                    breakLength: 1 / 0,
                    showProxy: !1,
                    sorted: !0,
                    getters: !0
                })
            }

            function xa(e, t, r) {
                var n = "",
                    i = "",
                    o = 0,
                    a = "",
                    c = !1,
                    s = Ta(e),
                    u = s.split("\n"),
                    l = Ta(t).split("\n"),
                    f = 0,
                    h = "";
                if ("strictEqual" === r && "object" === va(e) && "object" === va(t) && null !== e && null !== t && (r = "strictEqualObject"), 1 === u.length && 1 === l.length && u[0] !== l[0]) {
                    var d = u[0].length + l[0].length;
                    if (d <= 10) {
                        if (("object" !== va(e) || null === e) && ("object" !== va(t) || null === t) && (0 !== e || 0 !== t)) return "".concat(Sa[r], "\n\n") + "".concat(u[0], " !== ").concat(l[0], "\n")
                    } else if ("strictEqualObject" !== r) {
                        if (d < 80) {
                            for (; u[0][f] === l[0][f];) f++;
                            f > 2 && (h = "\n  ".concat(function(e, t) {
                                if (t = Math.floor(t), 0 == e.length || 0 == t) return "";
                                var r = e.length * t;
                                for (t = Math.floor(Math.log(t) / Math.log(2)); t;) e += e, t--;
                                return e + e.substring(0, r - e.length)
                            }(" ", f), "^"), f = 0)
                        }
                    }
                }
                for (var m = u[u.length - 1], g = l[l.length - 1]; m === g && (f++ < 2 ? a = "\n  ".concat(m).concat(a) : n = m, u.pop(), l.pop(), 0 !== u.length && 0 !== l.length);) m = u[u.length - 1], g = l[l.length - 1];
                var p = Math.max(u.length, l.length);
                if (0 === p) {
                    var y = s.split("\n");
                    if (y.length > 30)
                        for (y[26] = "".concat(_a, "...").concat(Oa); y.length > 27;) y.pop();
                    return "".concat(Sa.notIdentical, "\n\n").concat(y.join("\n"), "\n")
                }
                f > 3 && (a = "\n".concat(_a, "...").concat(Oa).concat(a), c = !0), "" !== n && (a = "\n  ".concat(n).concat(a), n = "");
                var v = 0,
                    b = Sa[r] + "\n".concat("", "+ actual").concat(Oa, " ").concat("", "- expected").concat(Oa),
                    A = " ".concat(_a, "...").concat(Oa, " Lines skipped");
                for (f = 0; f < p; f++) {
                    var w = f - o;
                    if (u.length < f + 1) w > 1 && f > 2 && (w > 4 ? (i += "\n".concat(_a, "...").concat(Oa), c = !0) : w > 3 && (i += "\n  ".concat(l[f - 2]), v++), i += "\n  ".concat(l[f - 1]), v++), o = f, n += "\n".concat("", "-").concat(Oa, " ").concat(l[f]), v++;
                    else if (l.length < f + 1) w > 1 && f > 2 && (w > 4 ? (i += "\n".concat(_a, "...").concat(Oa), c = !0) : w > 3 && (i += "\n  ".concat(u[f - 2]), v++), i += "\n  ".concat(u[f - 1]), v++), o = f, i += "\n".concat("", "+").concat(Oa, " ").concat(u[f]), v++;
                    else {
                        var _ = l[f],
                            O = u[f],
                            S = O !== _ && (!wa(O, ",") || O.slice(0, -1) !== _);
                        S && wa(_, ",") && _.slice(0, -1) === O && (S = !1, O += ","), S ? (w > 1 && f > 2 && (w > 4 ? (i += "\n".concat(_a, "...").concat(Oa), c = !0) : w > 3 && (i += "\n  ".concat(u[f - 2]), v++), i += "\n  ".concat(u[f - 1]), v++), o = f, i += "\n".concat("", "+").concat(Oa, " ").concat(O), n += "\n".concat("", "-").concat(Oa, " ").concat(_), v += 2) : (i += n, n = "", 1 !== w && 0 !== f || (i += "\n  ".concat(O), v++))
                    }
                    if (v > 20 && f < p - 2) return "".concat(b).concat(A, "\n").concat(i, "\n").concat(_a, "...").concat(Oa).concat(n, "\n") + "".concat(_a, "...").concat(Oa)
                }
                return "".concat(b).concat(c ? A : "", "\n").concat(i).concat(n).concat(a).concat(h)
            }
            var ka = function(e) {
                    function t(e) {
                        var r;
                        if (function(e, t) {
                                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                            }(this, t), "object" !== va(e) || null === e) throw new Aa("options", "Object", e);
                        var n = e.message,
                            i = e.operator,
                            o = e.stackStartFn,
                            a = e.actual,
                            c = e.expected,
                            s = Error.stackTraceLimit;
                        if (Error.stackTraceLimit = 0, null != n) r = fa(this, ya(t).call(this, String(n)));
                        else if ("object" === va(a) && null !== a && "object" === va(c) && null !== c && "stack" in a && a instanceof Error && "stack" in c && c instanceof Error && (a = Ea(a), c = Ea(c)), "deepStrictEqual" === i || "strictEqual" === i) r = fa(this, ya(t).call(this, xa(a, c, i)));
                        else if ("notDeepStrictEqual" === i || "notStrictEqual" === i) {
                            var u = Sa[i],
                                l = Ta(a).split("\n");
                            if ("notStrictEqual" === i && "object" === va(a) && null !== a && (u = Sa.notStrictEqualObject), l.length > 30)
                                for (l[26] = "".concat(_a, "...").concat(Oa); l.length > 27;) l.pop();
                            r = 1 === l.length ? fa(this, ya(t).call(this, "".concat(u, " ").concat(l[0]))) : fa(this, ya(t).call(this, "".concat(u, "\n\n").concat(l.join("\n"), "\n")))
                        } else {
                            var f = Ta(a),
                                h = "",
                                d = Sa[i];
                            "notDeepEqual" === i || "notEqual" === i ? (f = "".concat(Sa[i], "\n\n").concat(f)).length > 1024 && (f = "".concat(f.slice(0, 1021), "...")) : (h = "".concat(Ta(c)), f.length > 512 && (f = "".concat(f.slice(0, 509), "...")), h.length > 512 && (h = "".concat(h.slice(0, 509), "...")), "deepEqual" === i || "equal" === i ? f = "".concat(d, "\n\n").concat(f, "\n\nshould equal\n\n") : h = " ".concat(i, " ").concat(h)), r = fa(this, ya(t).call(this, "".concat(f).concat(h)))
                        }
                        return Error.stackTraceLimit = s, r.generatedMessage = !n, Object.defineProperty(ha(r), "name", {
                            value: "AssertionError [ERR_ASSERTION]",
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }), r.code = "ERR_ASSERTION", r.actual = a, r.expected = c, r.operator = i, Error.captureStackTrace && Error.captureStackTrace(ha(r), o), r.stack, r.name = "AssertionError", fa(r)
                    }
                    var r, n, i;
                    return function(e, t) {
                        if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        }), t && pa(e, t)
                    }(t, e), r = t, n = [{
                        key: "toString",
                        value: function() {
                            return "".concat(this.name, " [").concat(this.code, "]: ").concat(this.message)
                        }
                    }, {
                        key: ba.custom,
                        value: function(e, t) {
                            return ba(this, function(e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var r = null != arguments[t] ? arguments[t] : {},
                                        n = Object.keys(r);
                                    "function" === typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                                        return Object.getOwnPropertyDescriptor(r, e).enumerable
                                    })))), n.forEach((function(t) {
                                        ua(e, t, r[t])
                                    }))
                                }
                                return e
                            }({}, t, {
                                customInspect: !1,
                                depth: 0
                            }))
                        }
                    }], n && la(r.prototype, n), i && la(r, i), t
                }(da(Error)),
                Ra = ka;

            function Ua(e, t) {
                if (void 0 === e || null === e) throw new TypeError("Cannot convert first argument to object");
                for (var r = Object(e), n = 1; n < arguments.length; n++) {
                    var i = arguments[n];
                    if (void 0 !== i && null !== i)
                        for (var o = Object.keys(Object(i)), a = 0, c = o.length; a < c; a++) {
                            var s = o[a],
                                u = Object.getOwnPropertyDescriptor(i, s);
                            void 0 !== u && u.enumerable && (r[s] = i[s])
                        }
                }
                return r
            }
            var Ca, Pa = {
                    assign: Ua,
                    polyfill: function() {
                        Object.assign || Object.defineProperty(Object, "assign", {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: Ua
                        })
                    }
                },
                Fa = Object.prototype.toString,
                Da = function(e) {
                    var t = Fa.call(e),
                        r = "[object Arguments]" === t;
                    return r || (r = "[object Array]" !== t && null !== e && "object" === typeof e && "number" === typeof e.length && e.length >= 0 && "[object Function]" === Fa.call(e.callee)), r
                };
            if (!Object.keys) {
                var Ia = Object.prototype.hasOwnProperty,
                    La = Object.prototype.toString,
                    Na = Da,
                    ja = Object.prototype.propertyIsEnumerable,
                    Ma = !ja.call({
                        toString: null
                    }, "toString"),
                    Ba = ja.call((function() {}), "prototype"),
                    Ya = ["toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor"],
                    Wa = function(e) {
                        var t = e.constructor;
                        return t && t.prototype === e
                    },
                    qa = {
                        $applicationCache: !0,
                        $console: !0,
                        $external: !0,
                        $frame: !0,
                        $frameElement: !0,
                        $frames: !0,
                        $innerHeight: !0,
                        $innerWidth: !0,
                        $onmozfullscreenchange: !0,
                        $onmozfullscreenerror: !0,
                        $outerHeight: !0,
                        $outerWidth: !0,
                        $pageXOffset: !0,
                        $pageYOffset: !0,
                        $parent: !0,
                        $scrollLeft: !0,
                        $scrollTop: !0,
                        $scrollX: !0,
                        $scrollY: !0,
                        $self: !0,
                        $webkitIndexedDB: !0,
                        $webkitStorageInfo: !0,
                        $window: !0
                    },
                    za = function() {
                        if ("undefined" === typeof window) return !1;
                        for (var e in window) try {
                            if (!qa["$" + e] && Ia.call(window, e) && null !== window[e] && "object" === typeof window[e]) try {
                                Wa(window[e])
                            } catch (hl) {
                                return !0
                            }
                        } catch (hl) {
                            return !0
                        }
                        return !1
                    }();
                Ca = function(e) {
                    var t = null !== e && "object" === typeof e,
                        r = "[object Function]" === La.call(e),
                        n = Na(e),
                        i = t && "[object String]" === La.call(e),
                        o = [];
                    if (!t && !r && !n) throw new TypeError("Object.keys called on a non-object");
                    var a = Ba && r;
                    if (i && e.length > 0 && !Ia.call(e, 0))
                        for (var c = 0; c < e.length; ++c) o.push(String(c));
                    if (n && e.length > 0)
                        for (var s = 0; s < e.length; ++s) o.push(String(s));
                    else
                        for (var u in e) a && "prototype" === u || !Ia.call(e, u) || o.push(String(u));
                    if (Ma)
                        for (var l = function(e) {
                                if ("undefined" === typeof window || !za) return Wa(e);
                                try {
                                    return Wa(e)
                                } catch (hl) {
                                    return !1
                                }
                            }(e), f = 0; f < Ya.length; ++f) l && "constructor" === Ya[f] || !Ia.call(e, Ya[f]) || o.push(Ya[f]);
                    return o
                }
            }
            var Va = Ca,
                Ga = Array.prototype.slice,
                Za = Da,
                Ka = Object.keys,
                Ha = Ka ? function(e) {
                    return Ka(e)
                } : Va,
                Ja = Object.keys;
            Ha.shim = function() {
                if (Object.keys) {
                    var e = function() {
                        var e = Object.keys(arguments);
                        return e && e.length === arguments.length
                    }(1, 2);
                    e || (Object.keys = function(e) {
                        return Za(e) ? Ja(Ga.call(e)) : Ja(e)
                    })
                } else Object.keys = Ha;
                return Object.keys || Ha
            };
            var Xa = Ha,
                $a = "function" === typeof Symbol && "symbol" === typeof Symbol("foo"),
                Qa = Object.prototype.toString,
                ec = Array.prototype.concat,
                tc = Object.defineProperty,
                rc = tc && function() {
                    var e = {};
                    try {
                        for (var t in tc(e, "x", {
                                enumerable: !1,
                                value: e
                            }), e) return !1;
                        return e.x === e
                    } catch (hl) {
                        return !1
                    }
                }(),
                nc = function(e, t, r, n) {
                    var i;
                    (!(t in e) || "function" === typeof(i = n) && "[object Function]" === Qa.call(i) && n()) && (rc ? tc(e, t, {
                        configurable: !0,
                        enumerable: !1,
                        value: r,
                        writable: !0
                    }) : e[t] = r)
                },
                ic = function(e, t) {
                    var r = arguments.length > 2 ? arguments[2] : {},
                        n = Xa(t);
                    $a && (n = ec.call(n, Object.getOwnPropertySymbols(t)));
                    for (var i = 0; i < n.length; i += 1) nc(e, n[i], t[n[i]], r[n[i]])
                };
            ic.supportsDescriptors = !!rc;
            var oc = ic,
                ac = function(e) {
                    return e !== e
                },
                cc = function(e, t) {
                    return 0 === e && 0 === t ? 1 / e === 1 / t : e === t || !(!ac(e) || !ac(t))
                },
                sc = cc,
                uc = function() {
                    return "function" === typeof Object.is ? Object.is : sc
                },
                lc = uc,
                fc = oc,
                hc = oc,
                dc = cc,
                mc = uc,
                gc = function() {
                    var e = lc();
                    return fc(Object, {
                        is: e
                    }, {
                        is: function() {
                            return Object.is !== e
                        }
                    }), e
                },
                pc = (0, $i.exports)(mc(), Object);
            hc(pc, {
                getPolyfill: mc,
                implementation: dc,
                shim: gc
            });
            var yc = pc,
                vc = function(e) {
                    return e !== e
                },
                bc = vc,
                Ac = function() {
                    return Number.isNaN && Number.isNaN(NaN) && !Number.isNaN("a") ? Number.isNaN : bc
                },
                wc = oc,
                _c = Ac,
                Oc = oc,
                Sc = vc,
                Ec = Ac,
                Tc = function() {
                    var e = _c();
                    return wc(Number, {
                        isNaN: e
                    }, {
                        isNaN: function() {
                            return Number.isNaN !== e
                        }
                    }), e
                },
                xc = (0, $i.exports)(Ec(), Number);
            Oc(xc, {
                getPolyfill: Ec,
                implementation: Sc,
                shim: Tc
            });
            var kc = xc;

            function Rc(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var r = [],
                        n = !0,
                        i = !1,
                        o = void 0;
                    try {
                        for (var a, c = e[Symbol.iterator](); !(n = (a = c.next()).done) && (r.push(a.value), !t || r.length !== t); n = !0);
                    } catch (s) {
                        i = !0, o = s
                    } finally {
                        try {
                            n || null == c.return || c.return()
                        } finally {
                            if (i) throw o
                        }
                    }
                    return r
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance")
                }()
            }

            function Uc(e) {
                return Uc = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }, Uc(e)
            }
            var Cc = void 0 !== /a/g.flags,
                Pc = function(e) {
                    var t = [];
                    return e.forEach((function(e) {
                        return t.push(e)
                    })), t
                },
                Fc = function(e) {
                    var t = [];
                    return e.forEach((function(e, r) {
                        return t.push([r, e])
                    })), t
                },
                Dc = Object.is ? Object.is : yc,
                Ic = Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols : function() {
                    return []
                },
                Lc = Number.isNaN ? Number.isNaN : kc;

            function Nc(e) {
                return e.call.bind(e)
            }
            var jc = Nc(Object.prototype.hasOwnProperty),
                Mc = Nc(Object.prototype.propertyIsEnumerable),
                Bc = Nc(Object.prototype.toString),
                Yc = gi.types,
                Wc = Yc.isAnyArrayBuffer,
                qc = Yc.isArrayBufferView,
                zc = Yc.isDate,
                Vc = Yc.isMap,
                Gc = Yc.isRegExp,
                Zc = Yc.isSet,
                Kc = Yc.isNativeError,
                Hc = Yc.isBoxedPrimitive,
                Jc = Yc.isNumberObject,
                Xc = Yc.isStringObject,
                $c = Yc.isBooleanObject,
                Qc = Yc.isBigIntObject,
                es = Yc.isSymbolObject,
                ts = Yc.isFloat32Array,
                rs = Yc.isFloat64Array;

            function ns(e) {
                if (0 === e.length || e.length > 10) return !0;
                for (var t = 0; t < e.length; t++) {
                    var r = e.charCodeAt(t);
                    if (r < 48 || r > 57) return !0
                }
                return 10 === e.length && e >= Math.pow(2, 32)
            }

            function is(e) {
                return Object.keys(e).filter(ns).concat(Ic(e).filter(Object.prototype.propertyIsEnumerable.bind(e)))
            }

            function os(e, t) {
                if (e === t) return 0;
                for (var r = e.length, n = t.length, i = 0, o = Math.min(r, n); i < o; ++i)
                    if (e[i] !== t[i]) {
                        r = e[i], n = t[i];
                        break
                    }
                return r < n ? -1 : n < r ? 1 : 0
            }

            function as(e, t, r, n) {
                if (e === t) return 0 !== e || (!r || Dc(e, t));
                if (r) {
                    if ("object" !== Uc(e)) return "number" === typeof e && Lc(e) && Lc(t);
                    if ("object" !== Uc(t) || null === e || null === t) return !1;
                    if (Object.getPrototypeOf(e) !== Object.getPrototypeOf(t)) return !1
                } else {
                    if (null === e || "object" !== Uc(e)) return (null === t || "object" !== Uc(t)) && e == t;
                    if (null === t || "object" !== Uc(t)) return !1
                }
                var i, o, a, c, s = Bc(e);
                if (s !== Bc(t)) return !1;
                if (Array.isArray(e)) {
                    if (e.length !== t.length) return !1;
                    var u = is(e),
                        l = is(t);
                    return u.length === l.length && ss(e, t, r, n, 1, u)
                }
                if ("[object Object]" === s && (!Vc(e) && Vc(t) || !Zc(e) && Zc(t))) return !1;
                if (zc(e)) {
                    if (!zc(t) || Date.prototype.getTime.call(e) !== Date.prototype.getTime.call(t)) return !1
                } else if (Gc(e)) {
                    if (!Gc(t) || (a = e, c = t, !(Cc ? a.source === c.source && a.flags === c.flags : RegExp.prototype.toString.call(a) === RegExp.prototype.toString.call(c)))) return !1
                } else if (Kc(e) || e instanceof Error) {
                    if (e.message !== t.message || e.name !== t.name) return !1
                } else {
                    if (qc(e)) {
                        if (r || !ts(e) && !rs(e)) {
                            if (! function(e, t) {
                                    return e.byteLength === t.byteLength && 0 === os(new Uint8Array(e.buffer, e.byteOffset, e.byteLength), new Uint8Array(t.buffer, t.byteOffset, t.byteLength))
                                }(e, t)) return !1
                        } else if (! function(e, t) {
                                if (e.byteLength !== t.byteLength) return !1;
                                for (var r = 0; r < e.byteLength; r++)
                                    if (e[r] !== t[r]) return !1;
                                return !0
                            }(e, t)) return !1;
                        var f = is(e),
                            h = is(t);
                        return f.length === h.length && ss(e, t, r, n, 0, f)
                    }
                    if (Zc(e)) return !(!Zc(t) || e.size !== t.size) && ss(e, t, r, n, 2);
                    if (Vc(e)) return !(!Vc(t) || e.size !== t.size) && ss(e, t, r, n, 3);
                    if (Wc(e)) {
                        if (o = t, (i = e).byteLength !== o.byteLength || 0 !== os(new Uint8Array(i), new Uint8Array(o))) return !1
                    } else if (Hc(e) && ! function(e, t) {
                            return Jc(e) ? Jc(t) && Dc(Number.prototype.valueOf.call(e), Number.prototype.valueOf.call(t)) : Xc(e) ? Xc(t) && String.prototype.valueOf.call(e) === String.prototype.valueOf.call(t) : $c(e) ? $c(t) && Boolean.prototype.valueOf.call(e) === Boolean.prototype.valueOf.call(t) : Qc(e) ? Qc(t) && BigInt.prototype.valueOf.call(e) === BigInt.prototype.valueOf.call(t) : es(t) && Symbol.prototype.valueOf.call(e) === Symbol.prototype.valueOf.call(t)
                        }(e, t)) return !1
                }
                return ss(e, t, r, n, 0)
            }

            function cs(e, t) {
                return t.filter((function(t) {
                    return Mc(e, t)
                }))
            }

            function ss(e, t, r, n, i, o) {
                if (5 === arguments.length) {
                    o = Object.keys(e);
                    var a = Object.keys(t);
                    if (o.length !== a.length) return !1
                }
                for (var c = 0; c < o.length; c++)
                    if (!jc(t, o[c])) return !1;
                if (r && 5 === arguments.length) {
                    var s = Ic(e);
                    if (0 !== s.length) {
                        var u = 0;
                        for (c = 0; c < s.length; c++) {
                            var l = s[c];
                            if (Mc(e, l)) {
                                if (!Mc(t, l)) return !1;
                                o.push(l), u++
                            } else if (Mc(t, l)) return !1
                        }
                        var f = Ic(t);
                        if (s.length !== f.length && cs(t, f).length !== u) return !1
                    } else {
                        var h = Ic(t);
                        if (0 !== h.length && 0 !== cs(t, h).length) return !1
                    }
                }
                if (0 === o.length && (0 === i || 1 === i && 0 === e.length || 0 === e.size)) return !0;
                if (void 0 === n) n = {
                    val1: new Map,
                    val2: new Map,
                    position: 0
                };
                else {
                    var d = n.val1.get(e);
                    if (void 0 !== d) {
                        var m = n.val2.get(t);
                        if (void 0 !== m) return d === m
                    }
                    n.position++
                }
                n.val1.set(e, n.position), n.val2.set(t, n.position);
                var g = ms(e, t, r, o, n, i);
                return n.val1.delete(e), n.val2.delete(t), g
            }

            function us(e, t, r, n) {
                for (var i = Pc(e), o = 0; o < i.length; o++) {
                    var a = i[o];
                    if (as(t, a, r, n)) return e.delete(a), !0
                }
                return !1
            }

            function ls(e) {
                switch (Uc(e)) {
                    case "undefined":
                        return null;
                    case "object":
                        return;
                    case "symbol":
                        return !1;
                    case "string":
                        e = +e;
                    case "number":
                        if (Lc(e)) return !1
                }
                return !0
            }

            function fs(e, t, r) {
                var n = ls(r);
                return null != n ? n : t.has(n) && !e.has(n)
            }

            function hs(e, t, r, n, i) {
                var o = ls(r);
                if (null != o) return o;
                var a = t.get(o);
                return !(void 0 === a && !t.has(o) || !as(n, a, !1, i)) && (!e.has(o) && as(n, a, !1, i))
            }

            function ds(e, t, r, n, i, o) {
                for (var a = Pc(e), c = 0; c < a.length; c++) {
                    var s = a[c];
                    if (as(r, s, i, o) && as(n, t.get(s), i, o)) return e.delete(s), !0
                }
                return !1
            }

            function ms(e, t, r, n, i, o) {
                var a = 0;
                if (2 === o) {
                    if (! function(e, t, r, n) {
                            for (var i = null, o = Pc(e), a = 0; a < o.length; a++) {
                                var c = o[a];
                                if ("object" === Uc(c) && null !== c) null === i && (i = new Set), i.add(c);
                                else if (!t.has(c)) {
                                    if (r) return !1;
                                    if (!fs(e, t, c)) return !1;
                                    null === i && (i = new Set), i.add(c)
                                }
                            }
                            if (null !== i) {
                                for (var s = Pc(t), u = 0; u < s.length; u++) {
                                    var l = s[u];
                                    if ("object" === Uc(l) && null !== l) {
                                        if (!us(i, l, r, n)) return !1
                                    } else if (!r && !e.has(l) && !us(i, l, r, n)) return !1
                                }
                                return 0 === i.size
                            }
                            return !0
                        }(e, t, r, i)) return !1
                } else if (3 === o) {
                    if (! function(e, t, r, n) {
                            for (var i = null, o = Fc(e), a = 0; a < o.length; a++) {
                                var c = Rc(o[a], 2),
                                    s = c[0],
                                    u = c[1];
                                if ("object" === Uc(s) && null !== s) null === i && (i = new Set), i.add(s);
                                else {
                                    var l = t.get(s);
                                    if (void 0 === l && !t.has(s) || !as(u, l, r, n)) {
                                        if (r) return !1;
                                        if (!hs(e, t, s, u, n)) return !1;
                                        null === i && (i = new Set), i.add(s)
                                    }
                                }
                            }
                            if (null !== i) {
                                for (var f = Fc(t), h = 0; h < f.length; h++) {
                                    var d = Rc(f[h], 2),
                                        m = (s = d[0], d[1]);
                                    if ("object" === Uc(s) && null !== s) {
                                        if (!ds(i, e, s, m, r, n)) return !1
                                    } else if (!r && (!e.has(s) || !as(e.get(s), m, !1, n)) && !ds(i, e, s, m, !1, n)) return !1
                                }
                                return 0 === i.size
                            }
                            return !0
                        }(e, t, r, i)) return !1
                } else if (1 === o)
                    for (; a < e.length; a++) {
                        if (!jc(e, a)) {
                            if (jc(t, a)) return !1;
                            for (var c = Object.keys(e); a < c.length; a++) {
                                var s = c[a];
                                if (!jc(t, s) || !as(e[s], t[s], r, i)) return !1
                            }
                            return c.length === Object.keys(t).length
                        }
                        if (!jc(t, a) || !as(e[a], t[a], r, i)) return !1
                    }
                for (a = 0; a < n.length; a++) {
                    var u = n[a];
                    if (!as(e[u], t[u], r, i)) return !1
                }
                return !0
            }
            var gs = {
                isDeepEqual: function(e, t) {
                    return as(e, t, false)
                },
                isDeepStrictEqual: function(e, t) {
                    return as(e, t, true)
                }
            };

            function ps(e) {
                return ps = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }, ps(e)
            }
            var ys, vs, bs = mi.codes,
                As = bs.ERR_AMBIGUOUS_ARGUMENT,
                ws = bs.ERR_INVALID_ARG_TYPE,
                _s = bs.ERR_INVALID_ARG_VALUE,
                Os = bs.ERR_INVALID_RETURN_VALUE,
                Ss = bs.ERR_MISSING_ARGS,
                Es = Ra,
                Ts = gi.inspect,
                xs = gi.types,
                ks = xs.isPromise,
                Rs = xs.isRegExp,
                Us = Object.assign ? Object.assign : Pa.assign,
                Cs = Object.is ? Object.is : yc;

            function Ps() {
                ys = gs.isDeepEqual, vs = gs.isDeepStrictEqual
            }
            var Fs = !1,
                Ds = di.exports = js,
                Is = {};

            function Ls(e) {
                if (e.message instanceof Error) throw e.message;
                throw new Es(e)
            }

            function Ns(e, t, r, n) {
                if (!r) {
                    var i = !1;
                    if (0 === t) i = !0, n = "No value argument passed to `assert.ok()`";
                    else if (n instanceof Error) throw n;
                    var o = new Es({
                        actual: r,
                        expected: !0,
                        message: n,
                        operator: "==",
                        stackStartFn: e
                    });
                    throw o.generatedMessage = i, o
                }
            }

            function js() {
                for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                Ns.apply(void 0, [js, t.length].concat(t))
            }
            Ds.fail = function e(t, r, n, i, o) {
                var a, c = arguments.length;
                if (0 === c) a = "Failed";
                else if (1 === c) n = t, t = void 0;
                else {
                    if (!1 === Fs) {
                        Fs = !0;
                        var s = console.warn.bind(console);
                        s("assert.fail() with more than one argument is deprecated. Please use assert.strictEqual() instead or only pass a message.", "DeprecationWarning", "DEP0094")
                    }
                    2 === c && (i = "!=")
                }
                if (n instanceof Error) throw n;
                var u = {
                    actual: t,
                    expected: r,
                    operator: void 0 === i ? "fail" : i,
                    stackStartFn: o || e
                };
                void 0 !== n && (u.message = n);
                var l = new Es(u);
                throw a && (l.message = a, l.generatedMessage = !0), l
            }, Ds.AssertionError = Es, Ds.ok = js, Ds.equal = function e(t, r, n) {
                if (arguments.length < 2) throw new Ss("actual", "expected");
                t != r && Ls({
                    actual: t,
                    expected: r,
                    message: n,
                    operator: "==",
                    stackStartFn: e
                })
            }, Ds.notEqual = function e(t, r, n) {
                if (arguments.length < 2) throw new Ss("actual", "expected");
                t == r && Ls({
                    actual: t,
                    expected: r,
                    message: n,
                    operator: "!=",
                    stackStartFn: e
                })
            }, Ds.deepEqual = function e(t, r, n) {
                if (arguments.length < 2) throw new Ss("actual", "expected");
                void 0 === ys && Ps(), ys(t, r) || Ls({
                    actual: t,
                    expected: r,
                    message: n,
                    operator: "deepEqual",
                    stackStartFn: e
                })
            }, Ds.notDeepEqual = function e(t, r, n) {
                if (arguments.length < 2) throw new Ss("actual", "expected");
                void 0 === ys && Ps(), ys(t, r) && Ls({
                    actual: t,
                    expected: r,
                    message: n,
                    operator: "notDeepEqual",
                    stackStartFn: e
                })
            }, Ds.deepStrictEqual = function e(t, r, n) {
                if (arguments.length < 2) throw new Ss("actual", "expected");
                void 0 === ys && Ps(), vs(t, r) || Ls({
                    actual: t,
                    expected: r,
                    message: n,
                    operator: "deepStrictEqual",
                    stackStartFn: e
                })
            }, Ds.notDeepStrictEqual = function e(t, r, n) {
                if (arguments.length < 2) throw new Ss("actual", "expected");
                void 0 === ys && Ps();
                vs(t, r) && Ls({
                    actual: t,
                    expected: r,
                    message: n,
                    operator: "notDeepStrictEqual",
                    stackStartFn: e
                })
            }, Ds.strictEqual = function e(t, r, n) {
                if (arguments.length < 2) throw new Ss("actual", "expected");
                Cs(t, r) || Ls({
                    actual: t,
                    expected: r,
                    message: n,
                    operator: "strictEqual",
                    stackStartFn: e
                })
            }, Ds.notStrictEqual = function e(t, r, n) {
                if (arguments.length < 2) throw new Ss("actual", "expected");
                Cs(t, r) && Ls({
                    actual: t,
                    expected: r,
                    message: n,
                    operator: "notStrictEqual",
                    stackStartFn: e
                })
            };
            var Ms = function e(t, r, n) {
                var i = this;
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e), r.forEach((function(e) {
                    e in t && (void 0 !== n && "string" === typeof n[e] && Rs(t[e]) && t[e].test(n[e]) ? i[e] = n[e] : i[e] = t[e])
                }))
            };

            function Bs(e, t, r, n, i, o) {
                if (!(r in e) || !vs(e[r], t[r])) {
                    if (!n) {
                        var a = new Ms(e, i),
                            c = new Ms(t, i, e),
                            s = new Es({
                                actual: a,
                                expected: c,
                                operator: "deepStrictEqual",
                                stackStartFn: o
                            });
                        throw s.actual = e, s.expected = t, s.operator = o.name, s
                    }
                    Ls({
                        actual: e,
                        expected: t,
                        message: n,
                        operator: o.name,
                        stackStartFn: o
                    })
                }
            }

            function Ys(e, t, r, n) {
                if ("function" !== typeof t) {
                    if (Rs(t)) return t.test(e);
                    if (2 === arguments.length) throw new ws("expected", ["Function", "RegExp"], t);
                    if ("object" !== ps(e) || null === e) {
                        var i = new Es({
                            actual: e,
                            expected: t,
                            message: r,
                            operator: "deepStrictEqual",
                            stackStartFn: n
                        });
                        throw i.operator = n.name, i
                    }
                    var o = Object.keys(t);
                    if (t instanceof Error) o.push("name", "message");
                    else if (0 === o.length) throw new _s("error", t, "may not be an empty object");
                    return void 0 === ys && Ps(), o.forEach((function(i) {
                        "string" === typeof e[i] && Rs(t[i]) && t[i].test(e[i]) || Bs(e, t, i, r, o, n)
                    })), !0
                }
                return void 0 !== t.prototype && e instanceof t || !Error.isPrototypeOf(t) && !0 === t.call({}, e)
            }

            function Ws(e) {
                if ("function" !== typeof e) throw new ws("fn", "Function", e);
                try {
                    e()
                } catch (hl) {
                    return hl
                }
                return Is
            }

            function qs(e) {
                return ks(e) || null !== e && "object" === ps(e) && "function" === typeof e.then && "function" === typeof e.catch
            }

            function zs(e) {
                return Promise.resolve().then((function() {
                    var t;
                    if ("function" === typeof e) {
                        if (!qs(t = e())) throw new Os("instance of Promise", "promiseFn", t)
                    } else {
                        if (!qs(e)) throw new ws("promiseFn", ["Function", "Promise"], e);
                        t = e
                    }
                    return Promise.resolve().then((function() {
                        return t
                    })).then((function() {
                        return Is
                    })).catch((function(e) {
                        return e
                    }))
                }))
            }

            function Vs(e, t, r, n) {
                if ("string" === typeof r) {
                    if (4 === arguments.length) throw new ws("error", ["Object", "Error", "Function", "RegExp"], r);
                    if ("object" === ps(t) && null !== t) {
                        if (t.message === r) throw new As("error/message", 'The error message "'.concat(t.message, '" is identical to the message.'))
                    } else if (t === r) throw new As("error/message", 'The error "'.concat(t, '" is identical to the message.'));
                    n = r, r = void 0
                } else if (null != r && "object" !== ps(r) && "function" !== typeof r) throw new ws("error", ["Object", "Error", "Function", "RegExp"], r);
                if (t === Is) {
                    var i = "";
                    r && r.name && (i += " (".concat(r.name, ")")), i += n ? ": ".concat(n) : ".";
                    var o = "rejects" === e.name ? "rejection" : "exception";
                    Ls({
                        actual: void 0,
                        expected: r,
                        operator: e.name,
                        message: "Missing expected ".concat(o).concat(i),
                        stackStartFn: e
                    })
                }
                if (r && !Ys(t, r, n, e)) throw t
            }

            function Gs(e, t, r, n) {
                if (t !== Is) {
                    if ("string" === typeof r && (n = r, r = void 0), !r || Ys(t, r)) {
                        var i = n ? ": ".concat(n) : ".",
                            o = "doesNotReject" === e.name ? "rejection" : "exception";
                        Ls({
                            actual: t,
                            expected: r,
                            operator: e.name,
                            message: "Got unwanted ".concat(o).concat(i, "\n") + 'Actual message: "'.concat(t && t.message, '"'),
                            stackStartFn: e
                        })
                    }
                    throw t
                }
            }

            function Zs() {
                for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                Ns.apply(void 0, [Zs, t.length].concat(t))
            }
            Ds.throws = function e(t) {
                    for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++) n[i - 1] = arguments[i];
                    Vs.apply(void 0, [e, Ws(t)].concat(n))
                }, Ds.rejects = function e(t) {
                    for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++) n[i - 1] = arguments[i];
                    return zs(t).then((function(t) {
                        return Vs.apply(void 0, [e, t].concat(n))
                    }))
                }, Ds.doesNotThrow = function e(t) {
                    for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++) n[i - 1] = arguments[i];
                    Gs.apply(void 0, [e, Ws(t)].concat(n))
                }, Ds.doesNotReject = function e(t) {
                    for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++) n[i - 1] = arguments[i];
                    return zs(t).then((function(t) {
                        return Gs.apply(void 0, [e, t].concat(n))
                    }))
                }, Ds.ifError = function e(t) {
                    if (null !== t && void 0 !== t) {
                        var r = "ifError got unwanted exception: ";
                        "object" === ps(t) && "string" === typeof t.message ? 0 === t.message.length && t.constructor ? r += t.constructor.name : r += t.message : r += Ts(t);
                        var n = new Es({
                                actual: t,
                                expected: null,
                                operator: "ifError",
                                message: r,
                                stackStartFn: e
                            }),
                            i = t.stack;
                        if ("string" === typeof i) {
                            var o = i.split("\n");
                            o.shift();
                            for (var a = n.stack.split("\n"), c = 0; c < o.length; c++) {
                                var s = a.indexOf(o[c]);
                                if (-1 !== s) {
                                    a = a.slice(0, s);
                                    break
                                }
                            }
                            n.stack = "".concat(a.join("\n"), "\n").concat(o.join("\n"))
                        }
                        throw n
                    }
                }, Ds.strict = Us(Zs, Ds, {
                    equal: Ds.strictEqual,
                    deepEqual: Ds.deepStrictEqual,
                    notEqual: Ds.notStrictEqual,
                    notDeepEqual: Ds.notDeepStrictEqual
                }), Ds.strict.strict = Ds.strict,
                function(e) {
                    var t = di.exports,
                        r = a(),
                        n = c,
                        i = s,
                        o = l();
                    for (var u in o) e[u] = o[u];
                    e.NONE = 0, e.DEFLATE = 1, e.INFLATE = 2, e.GZIP = 3, e.GUNZIP = 4, e.DEFLATERAW = 5, e.INFLATERAW = 6, e.UNZIP = 7;

                    function f(t) {
                        if ("number" !== typeof t || t < e.DEFLATE || t > e.UNZIP) throw new TypeError("Bad argument");
                        this.dictionary = null, this.err = 0, this.flush = 0, this.init_done = !1, this.level = 0, this.memLevel = 0, this.mode = t, this.strategy = 0, this.windowBits = 0, this.write_in_progress = !1, this.pending_close = !1, this.gzip_id_bytes_read = 0
                    }
                    f.prototype.close = function() {
                        this.write_in_progress ? this.pending_close = !0 : (this.pending_close = !1, t(this.init_done, "close before init"), t(this.mode <= e.UNZIP), this.mode === e.DEFLATE || this.mode === e.GZIP || this.mode === e.DEFLATERAW ? n.deflateEnd(this.strm) : this.mode !== e.INFLATE && this.mode !== e.GUNZIP && this.mode !== e.INFLATERAW && this.mode !== e.UNZIP || i.inflateEnd(this.strm), this.mode = e.NONE, this.dictionary = null)
                    }, f.prototype.write = function(e, t, r, n, i, o, a) {
                        return this._write(!0, e, t, r, n, i, o, a)
                    }, f.prototype.writeSync = function(e, t, r, n, i, o, a) {
                        return this._write(!1, e, t, r, n, i, o, a)
                    }, f.prototype._write = function(r, n, i, o, a, c, s, u) {
                        if (t.equal(arguments.length, 8), t(this.init_done, "write before init"), t(this.mode !== e.NONE, "already finalized"), t.equal(!1, this.write_in_progress, "write already in progress"), t.equal(!1, this.pending_close, "close is pending"), this.write_in_progress = !0, t.equal(!1, void 0 === n, "must provide flush value"), this.write_in_progress = !0, n !== e.Z_NO_FLUSH && n !== e.Z_PARTIAL_FLUSH && n !== e.Z_SYNC_FLUSH && n !== e.Z_FULL_FLUSH && n !== e.Z_FINISH && n !== e.Z_BLOCK) throw new Error("Invalid flush value");
                        if (null == i && (i = F.alloc(0), a = 0, o = 0), this.strm.avail_in = a, this.strm.input = i, this.strm.next_in = o, this.strm.avail_out = u, this.strm.output = c, this.strm.next_out = s, this.flush = n, !r) return this._process(), this._checkError() ? this._afterSync() : void 0;
                        var l = this;
                        return Ve.nextTick((function() {
                            l._process(), l._after()
                        })), this
                    }, f.prototype._afterSync = function() {
                        var e = this.strm.avail_out,
                            t = this.strm.avail_in;
                        return this.write_in_progress = !1, [t, e]
                    }, f.prototype._process = function() {
                        var t = null;
                        switch (this.mode) {
                            case e.DEFLATE:
                            case e.GZIP:
                            case e.DEFLATERAW:
                                this.err = n.deflate(this.strm, this.flush);
                                break;
                            case e.UNZIP:
                                switch (this.strm.avail_in > 0 && (t = this.strm.next_in), this.gzip_id_bytes_read) {
                                    case 0:
                                        if (null === t) break;
                                        if (31 !== this.strm.input[t]) {
                                            this.mode = e.INFLATE;
                                            break
                                        }
                                        if (this.gzip_id_bytes_read = 1, t++, 1 === this.strm.avail_in) break;
                                    case 1:
                                        if (null === t) break;
                                        139 === this.strm.input[t] ? (this.gzip_id_bytes_read = 2, this.mode = e.GUNZIP) : this.mode = e.INFLATE;
                                        break;
                                    default:
                                        throw new Error("invalid number of gzip magic number bytes read")
                                }
                            case e.INFLATE:
                            case e.GUNZIP:
                            case e.INFLATERAW:
                                for (this.err = i.inflate(this.strm, this.flush), this.err === e.Z_NEED_DICT && this.dictionary && (this.err = i.inflateSetDictionary(this.strm, this.dictionary), this.err === e.Z_OK ? this.err = i.inflate(this.strm, this.flush) : this.err === e.Z_DATA_ERROR && (this.err = e.Z_NEED_DICT)); this.strm.avail_in > 0 && this.mode === e.GUNZIP && this.err === e.Z_STREAM_END && 0 !== this.strm.next_in[0];) this.reset(), this.err = i.inflate(this.strm, this.flush);
                                break;
                            default:
                                throw new Error("Unknown mode " + this.mode)
                        }
                    }, f.prototype._checkError = function() {
                        switch (this.err) {
                            case e.Z_OK:
                            case e.Z_BUF_ERROR:
                                if (0 !== this.strm.avail_out && this.flush === e.Z_FINISH) return this._error("unexpected end of file"), !1;
                                break;
                            case e.Z_STREAM_END:
                                break;
                            case e.Z_NEED_DICT:
                                return null == this.dictionary ? this._error("Missing dictionary") : this._error("Bad dictionary"), !1;
                            default:
                                return this._error("Zlib error"), !1
                        }
                        return !0
                    }, f.prototype._after = function() {
                        if (this._checkError()) {
                            var e = this.strm.avail_out,
                                t = this.strm.avail_in;
                            this.write_in_progress = !1, this.callback(t, e), this.pending_close && this.close()
                        }
                    }, f.prototype._error = function(e) {
                        this.strm.msg && (e = this.strm.msg), this.onerror(e, this.err), this.write_in_progress = !1, this.pending_close && this.close()
                    }, f.prototype.init = function(r, n, i, o, a) {
                        t(4 === arguments.length || 5 === arguments.length, "init(windowBits, level, memLevel, strategy, [dictionary])"), t(r >= 8 && r <= 15, "invalid windowBits"), t(n >= -1 && n <= 9, "invalid compression level"), t(i >= 1 && i <= 9, "invalid memlevel"), t(o === e.Z_FILTERED || o === e.Z_HUFFMAN_ONLY || o === e.Z_RLE || o === e.Z_FIXED || o === e.Z_DEFAULT_STRATEGY, "invalid strategy"), this._init(n, r, i, o, a), this._setDictionary()
                    }, f.prototype.params = function() {
                        throw new Error("deflateParams Not supported")
                    }, f.prototype.reset = function() {
                        this._reset(), this._setDictionary()
                    }, f.prototype._init = function(t, o, a, c, s) {
                        switch (this.level = t, this.windowBits = o, this.memLevel = a, this.strategy = c, this.flush = e.Z_NO_FLUSH, this.err = e.Z_OK, this.mode !== e.GZIP && this.mode !== e.GUNZIP || (this.windowBits += 16), this.mode === e.UNZIP && (this.windowBits += 32), this.mode !== e.DEFLATERAW && this.mode !== e.INFLATERAW || (this.windowBits = -1 * this.windowBits), this.strm = new r, this.mode) {
                            case e.DEFLATE:
                            case e.GZIP:
                            case e.DEFLATERAW:
                                this.err = n.deflateInit2(this.strm, this.level, e.Z_DEFLATED, this.windowBits, this.memLevel, this.strategy);
                                break;
                            case e.INFLATE:
                            case e.GUNZIP:
                            case e.INFLATERAW:
                            case e.UNZIP:
                                this.err = i.inflateInit2(this.strm, this.windowBits);
                                break;
                            default:
                                throw new Error("Unknown mode " + this.mode)
                        }
                        this.err !== e.Z_OK && this._error("Init error"), this.dictionary = s, this.write_in_progress = !1, this.init_done = !0
                    }, f.prototype._setDictionary = function() {
                        if (null != this.dictionary) {
                            switch (this.err = e.Z_OK, this.mode) {
                                case e.DEFLATE:
                                case e.DEFLATERAW:
                                    this.err = n.deflateSetDictionary(this.strm, this.dictionary)
                            }
                            this.err !== e.Z_OK && this._error("Failed to set dictionary")
                        }
                    }, f.prototype._reset = function() {
                        switch (this.err = e.Z_OK, this.mode) {
                            case e.DEFLATE:
                            case e.DEFLATERAW:
                            case e.GZIP:
                                this.err = n.deflateReset(this.strm);
                                break;
                            case e.INFLATE:
                            case e.INFLATERAW:
                            case e.GUNZIP:
                                this.err = i.inflateReset(this.strm)
                        }
                        this.err !== e.Z_OK && this._error("Failed to reset stream")
                    }, e.Zlib = f
                }(hi),
                function(e) {
                    var t = st.Buffer,
                        r = be.exports.Transform,
                        n = hi,
                        i = gi,
                        o = di.exports.ok,
                        a = st.kMaxLength,
                        c = "Cannot create final Buffer. It would be larger than 0x" + a.toString(16) + " bytes";
                    n.Z_MIN_WINDOWBITS = 8, n.Z_MAX_WINDOWBITS = 15, n.Z_DEFAULT_WINDOWBITS = 15, n.Z_MIN_CHUNK = 64, n.Z_MAX_CHUNK = 1 / 0, n.Z_DEFAULT_CHUNK = 16384, n.Z_MIN_MEMLEVEL = 1, n.Z_MAX_MEMLEVEL = 9, n.Z_DEFAULT_MEMLEVEL = 8, n.Z_MIN_LEVEL = -1, n.Z_MAX_LEVEL = 9, n.Z_DEFAULT_LEVEL = n.Z_DEFAULT_COMPRESSION;
                    for (var s = Object.keys(n), u = 0; u < s.length; u++) {
                        var l = s[u];
                        l.match(/^Z/) && Object.defineProperty(e, l, {
                            enumerable: !0,
                            value: n[l],
                            writable: !1
                        })
                    }
                    for (var f = {
                            Z_OK: n.Z_OK,
                            Z_STREAM_END: n.Z_STREAM_END,
                            Z_NEED_DICT: n.Z_NEED_DICT,
                            Z_ERRNO: n.Z_ERRNO,
                            Z_STREAM_ERROR: n.Z_STREAM_ERROR,
                            Z_DATA_ERROR: n.Z_DATA_ERROR,
                            Z_MEM_ERROR: n.Z_MEM_ERROR,
                            Z_BUF_ERROR: n.Z_BUF_ERROR,
                            Z_VERSION_ERROR: n.Z_VERSION_ERROR
                        }, h = Object.keys(f), d = 0; d < h.length; d++) {
                        var m = h[d];
                        f[f[m]] = m
                    }

                    function g(e, r, n) {
                        var i = [],
                            o = 0;

                        function s() {
                            for (var t; null !== (t = e.read());) i.push(t), o += t.length;
                            e.once("readable", s)
                        }

                        function u() {
                            var r, s = null;
                            o >= a ? s = new RangeError(c) : r = t.concat(i, o), i = [], e.close(), n(s, r)
                        }
                        e.on("error", (function(t) {
                            e.removeListener("end", u), e.removeListener("readable", s), n(t)
                        })), e.on("end", u), e.end(r), s()
                    }

                    function p(e, r) {
                        if ("string" === typeof r && (r = t.from(r)), !t.isBuffer(r)) throw new TypeError("Not a string or buffer");
                        var n = e._finishFlushFlag;
                        return e._processChunk(r, n)
                    }

                    function y(e) {
                        if (!(this instanceof y)) return new y(e);
                        E.call(this, e, n.DEFLATE)
                    }

                    function v(e) {
                        if (!(this instanceof v)) return new v(e);
                        E.call(this, e, n.INFLATE)
                    }

                    function b(e) {
                        if (!(this instanceof b)) return new b(e);
                        E.call(this, e, n.GZIP)
                    }

                    function A(e) {
                        if (!(this instanceof A)) return new A(e);
                        E.call(this, e, n.GUNZIP)
                    }

                    function w(e) {
                        if (!(this instanceof w)) return new w(e);
                        E.call(this, e, n.DEFLATERAW)
                    }

                    function _(e) {
                        if (!(this instanceof _)) return new _(e);
                        E.call(this, e, n.INFLATERAW)
                    }

                    function O(e) {
                        if (!(this instanceof O)) return new O(e);
                        E.call(this, e, n.UNZIP)
                    }

                    function S(e) {
                        return e === n.Z_NO_FLUSH || e === n.Z_PARTIAL_FLUSH || e === n.Z_SYNC_FLUSH || e === n.Z_FULL_FLUSH || e === n.Z_FINISH || e === n.Z_BLOCK
                    }

                    function E(i, o) {
                        var a = this;
                        if (this._opts = i = i || {}, this._chunkSize = i.chunkSize || e.Z_DEFAULT_CHUNK, r.call(this, i), i.flush && !S(i.flush)) throw new Error("Invalid flush flag: " + i.flush);
                        if (i.finishFlush && !S(i.finishFlush)) throw new Error("Invalid flush flag: " + i.finishFlush);
                        if (this._flushFlag = i.flush || n.Z_NO_FLUSH, this._finishFlushFlag = "undefined" !== typeof i.finishFlush ? i.finishFlush : n.Z_FINISH, i.chunkSize && (i.chunkSize < e.Z_MIN_CHUNK || i.chunkSize > e.Z_MAX_CHUNK)) throw new Error("Invalid chunk size: " + i.chunkSize);
                        if (i.windowBits && (i.windowBits < e.Z_MIN_WINDOWBITS || i.windowBits > e.Z_MAX_WINDOWBITS)) throw new Error("Invalid windowBits: " + i.windowBits);
                        if (i.level && (i.level < e.Z_MIN_LEVEL || i.level > e.Z_MAX_LEVEL)) throw new Error("Invalid compression level: " + i.level);
                        if (i.memLevel && (i.memLevel < e.Z_MIN_MEMLEVEL || i.memLevel > e.Z_MAX_MEMLEVEL)) throw new Error("Invalid memLevel: " + i.memLevel);
                        if (i.strategy && i.strategy != e.Z_FILTERED && i.strategy != e.Z_HUFFMAN_ONLY && i.strategy != e.Z_RLE && i.strategy != e.Z_FIXED && i.strategy != e.Z_DEFAULT_STRATEGY) throw new Error("Invalid strategy: " + i.strategy);
                        if (i.dictionary && !t.isBuffer(i.dictionary)) throw new Error("Invalid dictionary: it should be a Buffer instance");
                        this._handle = new n.Zlib(o);
                        var c = this;
                        this._hadError = !1, this._handle.onerror = function(t, r) {
                            T(c), c._hadError = !0;
                            var n = new Error(t);
                            n.errno = r, n.code = e.codes[r], c.emit("error", n)
                        };
                        var s = e.Z_DEFAULT_COMPRESSION;
                        "number" === typeof i.level && (s = i.level);
                        var u = e.Z_DEFAULT_STRATEGY;
                        "number" === typeof i.strategy && (u = i.strategy), this._handle.init(i.windowBits || e.Z_DEFAULT_WINDOWBITS, s, i.memLevel || e.Z_DEFAULT_MEMLEVEL, u, i.dictionary), this._buffer = t.allocUnsafe(this._chunkSize), this._offset = 0, this._level = s, this._strategy = u, this.once("end", this.close), Object.defineProperty(this, "_closed", {
                            get: function() {
                                return !a._handle
                            },
                            configurable: !0,
                            enumerable: !0
                        })
                    }

                    function T(e, t) {
                        t && Ve.nextTick(t), e._handle && (e._handle.close(), e._handle = null)
                    }

                    function x(e) {
                        e.emit("close")
                    }
                    Object.defineProperty(e, "codes", {
                        enumerable: !0,
                        value: Object.freeze(f),
                        writable: !1
                    }), e.Deflate = y, e.Inflate = v, e.Gzip = b, e.Gunzip = A, e.DeflateRaw = w, e.InflateRaw = _, e.Unzip = O, e.createDeflate = function(e) {
                        return new y(e)
                    }, e.createInflate = function(e) {
                        return new v(e)
                    }, e.createDeflateRaw = function(e) {
                        return new w(e)
                    }, e.createInflateRaw = function(e) {
                        return new _(e)
                    }, e.createGzip = function(e) {
                        return new b(e)
                    }, e.createGunzip = function(e) {
                        return new A(e)
                    }, e.createUnzip = function(e) {
                        return new O(e)
                    }, e.deflate = function(e, t, r) {
                        return "function" === typeof t && (r = t, t = {}), g(new y(t), e, r)
                    }, e.deflateSync = function(e, t) {
                        return p(new y(t), e)
                    }, e.gzip = function(e, t, r) {
                        return "function" === typeof t && (r = t, t = {}), g(new b(t), e, r)
                    }, e.gzipSync = function(e, t) {
                        return p(new b(t), e)
                    }, e.deflateRaw = function(e, t, r) {
                        return "function" === typeof t && (r = t, t = {}), g(new w(t), e, r)
                    }, e.deflateRawSync = function(e, t) {
                        return p(new w(t), e)
                    }, e.unzip = function(e, t, r) {
                        return "function" === typeof t && (r = t, t = {}), g(new O(t), e, r)
                    }, e.unzipSync = function(e, t) {
                        return p(new O(t), e)
                    }, e.inflate = function(e, t, r) {
                        return "function" === typeof t && (r = t, t = {}), g(new v(t), e, r)
                    }, e.inflateSync = function(e, t) {
                        return p(new v(t), e)
                    }, e.gunzip = function(e, t, r) {
                        return "function" === typeof t && (r = t, t = {}), g(new A(t), e, r)
                    }, e.gunzipSync = function(e, t) {
                        return p(new A(t), e)
                    }, e.inflateRaw = function(e, t, r) {
                        return "function" === typeof t && (r = t, t = {}), g(new _(t), e, r)
                    }, e.inflateRawSync = function(e, t) {
                        return p(new _(t), e)
                    }, i.inherits(E, r), E.prototype.params = function(t, r, i) {
                        if (t < e.Z_MIN_LEVEL || t > e.Z_MAX_LEVEL) throw new RangeError("Invalid compression level: " + t);
                        if (r != e.Z_FILTERED && r != e.Z_HUFFMAN_ONLY && r != e.Z_RLE && r != e.Z_FIXED && r != e.Z_DEFAULT_STRATEGY) throw new TypeError("Invalid strategy: " + r);
                        if (this._level !== t || this._strategy !== r) {
                            var a = this;
                            this.flush(n.Z_SYNC_FLUSH, (function() {
                                o(a._handle, "zlib binding closed"), a._handle.params(t, r), a._hadError || (a._level = t, a._strategy = r, i && i())
                            }))
                        } else Ve.nextTick(i)
                    }, E.prototype.reset = function() {
                        return o(this._handle, "zlib binding closed"), this._handle.reset()
                    }, E.prototype._flush = function(e) {
                        this._transform(t.alloc(0), "", e)
                    }, E.prototype.flush = function(e, r) {
                        var i = this,
                            o = this._writableState;
                        ("function" === typeof e || void 0 === e && !r) && (r = e, e = n.Z_FULL_FLUSH), o.ended ? r && Ve.nextTick(r) : o.ending ? r && this.once("end", r) : o.needDrain ? r && this.once("drain", (function() {
                            return i.flush(e, r)
                        })) : (this._flushFlag = e, this.write(t.alloc(0), "", r))
                    }, E.prototype.close = function(e) {
                        T(this, e), Ve.nextTick(x, this)
                    }, E.prototype._transform = function(e, r, i) {
                        var o, a = this._writableState,
                            c = (a.ending || a.ended) && (!e || a.length === e.length);
                        return null === e || t.isBuffer(e) ? this._handle ? (c ? o = this._finishFlushFlag : (o = this._flushFlag, e.length >= a.length && (this._flushFlag = this._opts.flush || n.Z_NO_FLUSH)), void this._processChunk(e, o, i)) : i(new Error("zlib binding closed")) : i(new Error("invalid input"))
                    }, E.prototype._processChunk = function(e, r, n) {
                        var i = e && e.length,
                            s = this._chunkSize - this._offset,
                            u = 0,
                            l = this,
                            f = "function" === typeof n;
                        if (!f) {
                            var h, d = [],
                                m = 0;
                            this.on("error", (function(e) {
                                h = e
                            })), o(this._handle, "zlib binding closed");
                            do {
                                var g = this._handle.writeSync(r, e, u, i, this._buffer, this._offset, s)
                            } while (!this._hadError && v(g[0], g[1]));
                            if (this._hadError) throw h;
                            if (m >= a) throw T(this), new RangeError(c);
                            var p = t.concat(d, m);
                            return T(this), p
                        }
                        o(this._handle, "zlib binding closed");
                        var y = this._handle.write(r, e, u, i, this._buffer, this._offset, s);

                        function v(a, c) {
                            if (this && (this.buffer = null, this.callback = null), !l._hadError) {
                                var h = s - c;
                                if (o(h >= 0, "have should not go down"), h > 0) {
                                    var g = l._buffer.slice(l._offset, l._offset + h);
                                    l._offset += h, f ? l.push(g) : (d.push(g), m += g.length)
                                }
                                if ((0 === c || l._offset >= l._chunkSize) && (s = l._chunkSize, l._offset = 0, l._buffer = t.allocUnsafe(l._chunkSize)), 0 === c) {
                                    if (u += i - a, i = a, !f) return !0;
                                    var p = l._handle.write(r, e, u, i, l._buffer, l._offset, l._chunkSize);
                                    return p.callback = v, void(p.buffer = e)
                                }
                                if (!f) return !1;
                                n()
                            }
                        }
                        y.buffer = e, y.callback = v
                    }, i.inherits(y, E), i.inherits(v, E), i.inherits(b, E), i.inherits(A, E), i.inherits(w, E), i.inherits(_, E), i.inherits(O, E)
                }(fi);
            var Ks, Hs, Js, Xs, $s, Qs, eu = function(e) {
                    function t(t, r, n) {
                        var o;
                        return (o = e.call(this, {
                            decodeStrings: !1
                        }) || this).finalize = o.finalize.bind((0, i.Z)(o)), o.document = t, o.id = r, null == n && (n = {}), o.data = n, o.gen = 0, o.deflate = null, o.compress = o.document.compress && !o.data.Filter, o.uncompressedLength = 0, o.chunks = [], o
                    }(0, n.Z)(t, e);
                    var r = t.prototype;
                    return r.initDeflate = function() {
                        var e = this;
                        return this.data.Filter = "FlateDecode", this.deflate = fi.createDeflate(), this.deflate.on("data", (function(t) {
                            return e.chunks.push(t), e.data.Length += t.length
                        })), this.deflate.on("end", this.finalize)
                    }, r._write = function(e, t, r) {
                        return e instanceof Uint8Array || (e = F.from(e + "\n", "binary")), this.uncompressedLength += e.length, null == this.data.Length && (this.data.Length = 0), this.compress ? (this.deflate || this.initDeflate(), this.deflate.write(e)) : (this.chunks.push(e), this.data.Length += e.length), r()
                    }, r.end = function() {
                        return e.prototype.end.apply(this, arguments), this.deflate ? this.deflate.end() : this.finalize()
                    }, r.finalize = function() {
                        if (this.offset = this.document._offset, this.document._write(this.id + " " + this.gen + " obj"), this.document._write(au.convert(this.data)), this.chunks.length) {
                            this.document._write("stream");
                            for (var e = 0, t = Array.from(this.chunks); e < t.length; e++) {
                                var r = t[e];
                                this.document._write(r)
                            }
                            this.chunks.length = 0, this.document._write("\nendstream")
                        }
                        return this.document._write("endobj"), this.document._refEnd(this)
                    }, r.toString = function() {
                        return this.id + " " + this.gen + " R"
                    }, t
                }(li.Writable),
                tu = function(e) {
                    function t() {
                        return e.apply(this, arguments) || this
                    }(0, n.Z)(t, e);
                    var r = t.prototype;
                    return r._compareKeys = function(e, t) {
                        return e.localeCompare(t)
                    }, r._keysName = function() {
                        return "Names"
                    }, r._dataForKey = function(e) {
                        return new String(e)
                    }, t
                }(function() {
                    function e(e) {
                        void 0 === e && (e = {}), this._items = {}, this.limits = "boolean" !== typeof e.limits || e.limits
                    }
                    var t = e.prototype;
                    return t.add = function(e, t) {
                        return this._items[e] = t
                    }, t.get = function(e) {
                        return this._items[e]
                    }, t.toString = function() {
                        var e = this,
                            t = Object.keys(this._items).sort((function(t, r) {
                                return e._compareKeys(t, r)
                            })),
                            r = ["<<"];
                        if (this.limits && t.length > 1) {
                            var n = t[0],
                                i = t[t.length - 1];
                            r.push("  /Limits " + au.convert([this._dataForKey(n), this._dataForKey(i)]))
                        }
                        r.push("  /" + this._keysName() + " [");
                        for (var o, a = (0, f.Z)(t); !(o = a()).done;) {
                            var c = o.value;
                            r.push("    " + au.convert(this._dataForKey(c)) + " " + au.convert(this._items[c]))
                        }
                        return r.push("]"), r.push(">>"), r.join("\n")
                    }, t._compareKeys = function() {
                        throw new Error("Must be implemented by subclasses")
                    }, t._keysName = function() {
                        throw new Error("Must be implemented by subclasses")
                    }, t._dataForKey = function() {
                        throw new Error("Must be implemented by subclasses")
                    }, e
                }()),
                ru = /[\n\r\t\b\f\(\)\\]/g,
                nu = {
                    "\n": "\\n",
                    "\r": "\\r",
                    "\t": "\\t",
                    "\b": "\\b",
                    "\f": "\\f",
                    "\\": "\\\\",
                    "(": "\\(",
                    ")": "\\)"
                },
                iu = function(e, t) {
                    return (Array(t + 1).join("0") + e).slice(-t)
                },
                ou = function() {
                    function e() {}
                    return e.convert = function(t) {
                        if ("string" === typeof t) return "/" + t;
                        if (t instanceof String) {
                            for (var r = t, n = !1, i = 0, o = r.length; i < o; i++)
                                if (r.charCodeAt(i) > 127) {
                                    n = !0;
                                    break
                                }
                            return n && (r = function(e) {
                                var t = e.length;
                                if (1 & t) throw new Error("Buffer length must be even");
                                for (var r = 0, n = t - 1; r < n; r += 2) {
                                    var i = e[r];
                                    e[r] = e[r + 1], e[r + 1] = i
                                }
                                return e
                            }(F.from("\ufeff" + r, "utf16le")).toString("binary")), "(" + (r = r.replace(ru, (function(e) {
                                return nu[e]
                            }))) + ")"
                        }
                        if (F.isBuffer(t)) return "<" + t.toString("hex") + ">";
                        if (t instanceof eu || t instanceof tu) return t.toString();
                        if (t instanceof Date) return "(D:" + iu(t.getUTCFullYear(), 4) + iu(t.getUTCMonth() + 1, 2) + iu(t.getUTCDate(), 2) + iu(t.getUTCHours(), 2) + iu(t.getUTCMinutes(), 2) + iu(t.getUTCSeconds(), 2) + "Z)";
                        if (Array.isArray(t)) return "[" + Array.from(t).map((function(t) {
                            return e.convert(t)
                        })).join(" ") + "]";
                        if ("[object Object]" === {}.toString.call(t)) {
                            var a = ["<<"];
                            for (var c in t) {
                                var s = t[c];
                                a.push("/" + c + " " + e.convert(s))
                            }
                            return a.push(">>"), a.join("\n")
                        }
                        return "number" === typeof t ? e.number(t) : "" + t
                    }, e.number = function(e) {
                        if (e > -1e21 && e < 1e21) return Math.round(1e6 * e) / 1e6;
                        throw new Error("unsupported number: " + e)
                    }, e
                }(),
                au = ou,
                cu = {
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0
                },
                su = {
                    "4A0": [4767.87, 6740.79],
                    "2A0": [3370.39, 4767.87],
                    A0: [2383.94, 3370.39],
                    A1: [1683.78, 2383.94],
                    A2: [1190.55, 1683.78],
                    A3: [841.89, 1190.55],
                    A4: [595.28, 841.89],
                    A5: [419.53, 595.28],
                    A6: [297.64, 419.53],
                    A7: [209.76, 297.64],
                    A8: [147.4, 209.76],
                    A9: [104.88, 147.4],
                    A10: [73.7, 104.88],
                    B0: [2834.65, 4008.19],
                    B1: [2004.09, 2834.65],
                    B2: [1417.32, 2004.09],
                    B3: [1000.63, 1417.32],
                    B4: [708.66, 1000.63],
                    B5: [498.9, 708.66],
                    B6: [354.33, 498.9],
                    B7: [249.45, 354.33],
                    B8: [175.75, 249.45],
                    B9: [124.72, 175.75],
                    B10: [87.87, 124.72],
                    C0: [2599.37, 3676.54],
                    C1: [1836.85, 2599.37],
                    C2: [1298.27, 1836.85],
                    C3: [918.43, 1298.27],
                    C4: [649.13, 918.43],
                    C5: [459.21, 649.13],
                    C6: [323.15, 459.21],
                    C7: [229.61, 323.15],
                    C8: [161.57, 229.61],
                    C9: [113.39, 161.57],
                    C10: [79.37, 113.39],
                    RA0: [2437.8, 3458.27],
                    RA1: [1729.13, 2437.8],
                    RA2: [1218.9, 1729.13],
                    RA3: [864.57, 1218.9],
                    RA4: [609.45, 864.57],
                    SRA0: [2551.18, 3628.35],
                    SRA1: [1814.17, 2551.18],
                    SRA2: [1275.59, 1814.17],
                    SRA3: [907.09, 1275.59],
                    SRA4: [637.8, 907.09],
                    EXECUTIVE: [521.86, 756],
                    FOLIO: [612, 936],
                    LEGAL: [612, 1008],
                    LETTER: [612, 792],
                    TABLOID: [792, 1224]
                },
                uu = function() {
                    function e(e, t) {
                        void 0 === t && (t = {}), this.document = e, this.size = t.size || "letter", this.layout = t.layout || "portrait", this.userUnit = t.userUnit || 1, this.margins = cu;
                        var r = Array.isArray(this.size) ? this.size : su[this.size.toUpperCase()];
                        this.width = r["portrait" === this.layout ? 0 : 1], this.height = r["portrait" === this.layout ? 1 : 0], this.content = this.document.ref(), this.resources = this.document.ref({
                            ProcSet: ["PDF", "Text", "ImageB", "ImageC", "ImageI"]
                        }), this.dictionary = this.document.ref({
                            Type: "Page",
                            Parent: this.document._root.data.Pages,
                            MediaBox: [0, 0, this.width, this.height],
                            Contents: this.content,
                            Resources: this.resources,
                            UserUnit: this.userUnit
                        })
                    }
                    var t = e.prototype;
                    return t.maxY = function() {
                        return this.height
                    }, t.write = function(e) {
                        return this.content.write(e)
                    }, t.end = function() {
                        return this.dictionary.end(), this.resources.end(), this.content.end()
                    }, (0, h.Z)(e, [{
                        key: "fonts",
                        get: function() {
                            var e = this.resources.data;
                            return null != e.Font ? e.Font : e.Font = {}
                        }
                    }, {
                        key: "xobjects",
                        get: function() {
                            var e = this.resources.data;
                            return null != e.XObject ? e.XObject : e.XObject = {}
                        }
                    }, {
                        key: "ext_gstates",
                        get: function() {
                            var e = this.resources.data;
                            return null != e.ExtGState ? e.ExtGState : e.ExtGState = {}
                        }
                    }, {
                        key: "patterns",
                        get: function() {
                            var e = this.resources.data;
                            return null != e.Pattern ? e.Pattern : e.Pattern = {}
                        }
                    }, {
                        key: "colorSpaces",
                        get: function() {
                            var e = this.resources.data;
                            return e.ColorSpace || (e.ColorSpace = {})
                        }
                    }, {
                        key: "annotations",
                        get: function() {
                            var e = this.dictionary.data;
                            return null != e.Annots ? e.Annots : e.Annots = []
                        }
                    }, {
                        key: "structParentTreeKey",
                        get: function() {
                            var e = this.dictionary.data;
                            return null != e.StructParents ? e.StructParents : e.StructParents = this.document.createStructParentTreeNextKey()
                        }
                    }]), e
                }(),
                lu = function() {
                    function e() {}
                    return e.generateFileID = function(e) {
                        void 0 === e && (e = {});
                        var t = e.CreationDate.getTime() + "\n";
                        for (var r in e) e.hasOwnProperty(r) && (t += r + ": " + e[r].valueOf() + "\n");
                        return function(e) {
                            for (var t = [], r = 0; r < e.sigBytes; r++) t.push(e.words[Math.floor(r / 4)] >> 8 * (3 - r % 4) & 255);
                            return F.from(t)
                        }(m()(t))
                    }, e
                }(),
                fu = au.number,
                hu = function() {
                    function e(e) {
                        this.doc = e, this.stops = [], this.embedded = !1, this.transform = [1, 0, 0, 1, 0, 0]
                    }
                    var t = e.prototype;
                    return t.stop = function(e, t, r) {
                        if (null == r && (r = 1), t = this.doc._normalizeColor(t), 0 === this.stops.length)
                            if (3 === t.length) this._colorSpace = "DeviceRGB";
                            else if (4 === t.length) this._colorSpace = "DeviceCMYK";
                        else {
                            if (1 !== t.length) throw new Error("Unknown color space");
                            this._colorSpace = "DeviceGray"
                        } else if ("DeviceRGB" === this._colorSpace && 3 !== t.length || "DeviceCMYK" === this._colorSpace && 4 !== t.length || "DeviceGray" === this._colorSpace && 1 !== t.length) throw new Error("All gradient stops must use the same color space");
                        return r = Math.max(0, Math.min(1, r)), this.stops.push([e, t, r]), this
                    }, t.setTransform = function(e, t, r, n, i, o) {
                        return this.transform = [e, t, r, n, i, o], this
                    }, t.embed = function(e) {
                        var t, r = this.stops.length;
                        if (0 !== r) {
                            this.embedded = !0, this.matrix = e;
                            var n = this.stops[r - 1];
                            n[0] < 1 && this.stops.push([1, n[1], n[2]]);
                            for (var i = [], o = [], a = [], c = 0; c < r - 1; c++) o.push(0, 1), c + 2 !== r && i.push(this.stops[c + 1][0]), t = this.doc.ref({
                                FunctionType: 2,
                                Domain: [0, 1],
                                C0: this.stops[c + 0][1],
                                C1: this.stops[c + 1][1],
                                N: 1
                            }), a.push(t), t.end();
                            1 === r ? t = a[0] : (t = this.doc.ref({
                                FunctionType: 3,
                                Domain: [0, 1],
                                Functions: a,
                                Bounds: i,
                                Encode: o
                            })).end(), this.id = "Sh" + ++this.doc._gradCount;
                            var s = this.shader(t);
                            s.end();
                            var u = this.doc.ref({
                                Type: "Pattern",
                                PatternType: 2,
                                Shading: s,
                                Matrix: this.matrix.map(fu)
                            });
                            if (u.end(), this.stops.some((function(e) {
                                    return e[2] < 1
                                }))) {
                                var l = this.opacityGradient();
                                l._colorSpace = "DeviceGray";
                                for (var h, d = (0, f.Z)(this.stops); !(h = d()).done;) {
                                    var m = h.value;
                                    l.stop(m[0], [m[2]])
                                }
                                l = l.embed(this.matrix);
                                var g = [0, 0, this.doc.page.width, this.doc.page.height],
                                    p = this.doc.ref({
                                        Type: "XObject",
                                        Subtype: "Form",
                                        FormType: 1,
                                        BBox: g,
                                        Group: {
                                            Type: "Group",
                                            S: "Transparency",
                                            CS: "DeviceGray"
                                        },
                                        Resources: {
                                            ProcSet: ["PDF", "Text", "ImageB", "ImageC", "ImageI"],
                                            Pattern: {
                                                Sh1: l
                                            }
                                        }
                                    });
                                p.write("/Pattern cs /Sh1 scn"), p.end(g.join(" ") + " re f");
                                var y = this.doc.ref({
                                    Type: "ExtGState",
                                    SMask: {
                                        Type: "Mask",
                                        S: "Luminosity",
                                        G: p
                                    }
                                });
                                y.end();
                                var v = this.doc.ref({
                                    Type: "Pattern",
                                    PatternType: 1,
                                    PaintType: 1,
                                    TilingType: 2,
                                    BBox: g,
                                    XStep: g[2],
                                    YStep: g[3],
                                    Resources: {
                                        ProcSet: ["PDF", "Text", "ImageB", "ImageC", "ImageI"],
                                        Pattern: {
                                            Sh1: u
                                        },
                                        ExtGState: {
                                            Gs1: y
                                        }
                                    }
                                });
                                v.write("/Gs1 gs /Pattern cs /Sh1 scn"), v.end(g.join(" ") + " re f"), this.doc.page.patterns[this.id] = v
                            } else this.doc.page.patterns[this.id] = u;
                            return u
                        }
                    }, t.apply = function(e) {
                        var t = this.doc._ctm,
                            r = t[0],
                            n = t[1],
                            i = t[2],
                            o = t[3],
                            a = t[4],
                            c = t[5],
                            s = this.transform,
                            u = s[0],
                            l = s[1],
                            f = s[2],
                            h = s[3],
                            d = s[4],
                            m = s[5],
                            g = [r * u + i * l, n * u + o * l, r * f + i * h, n * f + o * h, r * d + i * m + a, n * d + o * m + c];
                        return this.embedded && g.join(" ") === this.matrix.join(" ") || this.embed(g), this.doc.addContent("/" + this.id + " " + e)
                    }, e
                }(),
                du = function(e) {
                    function t(t, r, n, i, o) {
                        var a;
                        return (a = e.call(this, t) || this).x1 = r, a.y1 = n, a.x2 = i, a.y2 = o, a
                    }(0, n.Z)(t, e);
                    var r = t.prototype;
                    return r.shader = function(e) {
                        return this.doc.ref({
                            ShadingType: 2,
                            ColorSpace: this._colorSpace,
                            Coords: [this.x1, this.y1, this.x2, this.y2],
                            Function: e,
                            Extend: [!0, !0]
                        })
                    }, r.opacityGradient = function() {
                        return new t(this.doc, this.x1, this.y1, this.x2, this.y2)
                    }, t
                }(hu),
                mu = function(e) {
                    function t(t, r, n, i, o, a, c) {
                        var s;
                        return (s = e.call(this, t) || this).doc = t, s.x1 = r, s.y1 = n, s.r1 = i, s.x2 = o, s.y2 = a, s.r2 = c, s
                    }(0, n.Z)(t, e);
                    var r = t.prototype;
                    return r.shader = function(e) {
                        return this.doc.ref({
                            ShadingType: 3,
                            ColorSpace: this._colorSpace,
                            Coords: [this.x1, this.y1, this.r1, this.x2, this.y2, this.r2],
                            Function: e,
                            Extend: [!0, !0]
                        })
                    }, r.opacityGradient = function() {
                        return new t(this.doc, this.x1, this.y1, this.r1, this.x2, this.y2, this.r2)
                    }, t
                }(hu),
                gu = {
                    PDFGradient: hu,
                    PDFLinearGradient: du,
                    PDFRadialGradient: mu
                },
                pu = gu.PDFGradient,
                yu = gu.PDFLinearGradient,
                vu = gu.PDFRadialGradient,
                bu = {
                    initColor: function() {
                        return this._opacityRegistry = {}, this._opacityCount = 0, this._gradCount = 0
                    },
                    _normalizeColor: function(e) {
                        if (e instanceof pu) return e;
                        var t;
                        if ("string" === typeof e)
                            if ("#" === e.charAt(0)) {
                                4 === e.length && (e = e.replace(/#([0-9A-F])([0-9A-F])([0-9A-F])/i, "#$1$1$2$2$3$3"));
                                var r = parseInt(e.slice(1), 16);
                                e = [r >> 16, r >> 8 & 255, 255 & r]
                            } else Au[e] && (e = Au[e]);
                        return Array.isArray(e) ? (3 === e.length ? e = function() {
                            for (var r = [], n = 0, i = Array.from(e); n < i.length; n++) t = i[n], r.push(t / 255);
                            return r
                        }() : 4 === e.length && (e = function() {
                            for (var r = [], n = 0, i = Array.from(e); n < i.length; n++) t = i[n], r.push(t / 100);
                            return r
                        }()), e) : null
                    },
                    _setColor: function(e, t) {
                        if (!(e = this._normalizeColor(e))) return !1;
                        var r = t ? "SCN" : "scn";
                        if (e instanceof pu) this._setColorSpace("Pattern", t), e.apply(r);
                        else {
                            var n = 4 === e.length ? "DeviceCMYK" : "DeviceRGB";
                            this._setColorSpace(n, t), e = e.join(" "), this.addContent(e + " " + r)
                        }
                        return !0
                    },
                    _setColorSpace: function(e, t) {
                        var r = t ? "CS" : "cs";
                        return this.addContent("/" + e + " " + r)
                    },
                    fillColor: function(e, t) {
                        return this._setColor(e, !1) && this.fillOpacity(t), this._fillColor = [e, t], this
                    },
                    strokeColor: function(e, t) {
                        return this._setColor(e, !0) && this.strokeOpacity(t), this
                    },
                    opacity: function(e) {
                        return this._doOpacity(e, e), this
                    },
                    fillOpacity: function(e) {
                        return this._doOpacity(e, null), this
                    },
                    strokeOpacity: function(e) {
                        return this._doOpacity(null, e), this
                    },
                    _doOpacity: function(e, t) {
                        var r, n;
                        if (null != e || null != t) {
                            null != e && (e = Math.max(0, Math.min(1, e))), null != t && (t = Math.max(0, Math.min(1, t)));
                            var i = e + "_" + t;
                            if (this._opacityRegistry[i]) {
                                var o = Array.from(this._opacityRegistry[i]);
                                r = o[0], n = o[1]
                            } else {
                                r = {
                                    Type: "ExtGState"
                                }, null != e && (r.ca = e), null != t && (r.CA = t), (r = this.ref(r)).end(), n = "Gs" + ++this._opacityCount, this._opacityRegistry[i] = [r, n]
                            }
                            return this.page.ext_gstates[n] = r, this.addContent("/" + n + " gs")
                        }
                    },
                    linearGradient: function(e, t, r, n) {
                        return new yu(this, e, t, r, n)
                    },
                    radialGradient: function(e, t, r, n, i, o) {
                        return new vu(this, e, t, r, n, i, o)
                    }
                },
                Au = {
                    aliceblue: [240, 248, 255],
                    antiquewhite: [250, 235, 215],
                    aqua: [0, 255, 255],
                    aquamarine: [127, 255, 212],
                    azure: [240, 255, 255],
                    beige: [245, 245, 220],
                    bisque: [255, 228, 196],
                    black: [0, 0, 0],
                    blanchedalmond: [255, 235, 205],
                    blue: [0, 0, 255],
                    blueviolet: [138, 43, 226],
                    brown: [165, 42, 42],
                    burlywood: [222, 184, 135],
                    cadetblue: [95, 158, 160],
                    chartreuse: [127, 255, 0],
                    chocolate: [210, 105, 30],
                    coral: [255, 127, 80],
                    cornflowerblue: [100, 149, 237],
                    cornsilk: [255, 248, 220],
                    crimson: [220, 20, 60],
                    cyan: [0, 255, 255],
                    darkblue: [0, 0, 139],
                    darkcyan: [0, 139, 139],
                    darkgoldenrod: [184, 134, 11],
                    darkgray: [169, 169, 169],
                    darkgreen: [0, 100, 0],
                    darkgrey: [169, 169, 169],
                    darkkhaki: [189, 183, 107],
                    darkmagenta: [139, 0, 139],
                    darkolivegreen: [85, 107, 47],
                    darkorange: [255, 140, 0],
                    darkorchid: [153, 50, 204],
                    darkred: [139, 0, 0],
                    darksalmon: [233, 150, 122],
                    darkseagreen: [143, 188, 143],
                    darkslateblue: [72, 61, 139],
                    darkslategray: [47, 79, 79],
                    darkslategrey: [47, 79, 79],
                    darkturquoise: [0, 206, 209],
                    darkviolet: [148, 0, 211],
                    deeppink: [255, 20, 147],
                    deepskyblue: [0, 191, 255],
                    dimgray: [105, 105, 105],
                    dimgrey: [105, 105, 105],
                    dodgerblue: [30, 144, 255],
                    firebrick: [178, 34, 34],
                    floralwhite: [255, 250, 240],
                    forestgreen: [34, 139, 34],
                    fuchsia: [255, 0, 255],
                    gainsboro: [220, 220, 220],
                    ghostwhite: [248, 248, 255],
                    gold: [255, 215, 0],
                    goldenrod: [218, 165, 32],
                    gray: [128, 128, 128],
                    grey: [128, 128, 128],
                    green: [0, 128, 0],
                    greenyellow: [173, 255, 47],
                    honeydew: [240, 255, 240],
                    hotpink: [255, 105, 180],
                    indianred: [205, 92, 92],
                    indigo: [75, 0, 130],
                    ivory: [255, 255, 240],
                    khaki: [240, 230, 140],
                    lavender: [230, 230, 250],
                    lavenderblush: [255, 240, 245],
                    lawngreen: [124, 252, 0],
                    lemonchiffon: [255, 250, 205],
                    lightblue: [173, 216, 230],
                    lightcoral: [240, 128, 128],
                    lightcyan: [224, 255, 255],
                    lightgoldenrodyellow: [250, 250, 210],
                    lightgray: [211, 211, 211],
                    lightgreen: [144, 238, 144],
                    lightgrey: [211, 211, 211],
                    lightpink: [255, 182, 193],
                    lightsalmon: [255, 160, 122],
                    lightseagreen: [32, 178, 170],
                    lightskyblue: [135, 206, 250],
                    lightslategray: [119, 136, 153],
                    lightslategrey: [119, 136, 153],
                    lightsteelblue: [176, 196, 222],
                    lightyellow: [255, 255, 224],
                    lime: [0, 255, 0],
                    limegreen: [50, 205, 50],
                    linen: [250, 240, 230],
                    magenta: [255, 0, 255],
                    maroon: [128, 0, 0],
                    mediumaquamarine: [102, 205, 170],
                    mediumblue: [0, 0, 205],
                    mediumorchid: [186, 85, 211],
                    mediumpurple: [147, 112, 219],
                    mediumseagreen: [60, 179, 113],
                    mediumslateblue: [123, 104, 238],
                    mediumspringgreen: [0, 250, 154],
                    mediumturquoise: [72, 209, 204],
                    mediumvioletred: [199, 21, 133],
                    midnightblue: [25, 25, 112],
                    mintcream: [245, 255, 250],
                    mistyrose: [255, 228, 225],
                    moccasin: [255, 228, 181],
                    navajowhite: [255, 222, 173],
                    navy: [0, 0, 128],
                    oldlace: [253, 245, 230],
                    olive: [128, 128, 0],
                    olivedrab: [107, 142, 35],
                    orange: [255, 165, 0],
                    orangered: [255, 69, 0],
                    orchid: [218, 112, 214],
                    palegoldenrod: [238, 232, 170],
                    palegreen: [152, 251, 152],
                    paleturquoise: [175, 238, 238],
                    palevioletred: [219, 112, 147],
                    papayawhip: [255, 239, 213],
                    peachpuff: [255, 218, 185],
                    peru: [205, 133, 63],
                    pink: [255, 192, 203],
                    plum: [221, 160, 221],
                    powderblue: [176, 224, 230],
                    purple: [128, 0, 128],
                    red: [255, 0, 0],
                    rosybrown: [188, 143, 143],
                    royalblue: [65, 105, 225],
                    saddlebrown: [139, 69, 19],
                    salmon: [250, 128, 114],
                    sandybrown: [244, 164, 96],
                    seagreen: [46, 139, 87],
                    seashell: [255, 245, 238],
                    sienna: [160, 82, 45],
                    silver: [192, 192, 192],
                    skyblue: [135, 206, 235],
                    slateblue: [106, 90, 205],
                    slategray: [112, 128, 144],
                    slategrey: [112, 128, 144],
                    snow: [255, 250, 250],
                    springgreen: [0, 255, 127],
                    steelblue: [70, 130, 180],
                    tan: [210, 180, 140],
                    teal: [0, 128, 128],
                    thistle: [216, 191, 216],
                    tomato: [255, 99, 71],
                    turquoise: [64, 224, 208],
                    violet: [238, 130, 238],
                    wheat: [245, 222, 179],
                    white: [255, 255, 255],
                    whitesmoke: [245, 245, 245],
                    yellow: [255, 255, 0],
                    yellowgreen: [154, 205, 50]
                };
            Ks = Hs = Js = Xs = $s = Qs = 0;
            var wu = {
                    M: 2,
                    m: 2,
                    Z: 0,
                    z: 0,
                    L: 2,
                    l: 2,
                    H: 1,
                    h: 1,
                    V: 1,
                    v: 1,
                    C: 6,
                    c: 6,
                    S: 4,
                    s: 4,
                    Q: 4,
                    q: 4,
                    T: 2,
                    t: 2,
                    A: 7,
                    a: 7
                },
                _u = function(e) {
                    return e in wu
                },
                Ou = function(e) {
                    var t = e.codePointAt(0);
                    return 32 === t || 9 === t || 13 === t || 10 === t
                },
                Su = function(e) {
                    var t = e.codePointAt(0);
                    return null != t && (48 <= t && t <= 57)
                },
                Eu = function(e, t) {
                    for (var r = t, n = "", i = "none"; r < e.length; r += 1) {
                        var o = e[r];
                        if ("+" === o || "-" === o) {
                            if ("none" === i) {
                                i = "sign", n += o;
                                continue
                            }
                            if ("e" === i) {
                                i = "exponent_sign", n += o;
                                continue
                            }
                        }
                        if (Su(o)) {
                            if ("none" === i || "sign" === i || "whole" === i) {
                                i = "whole", n += o;
                                continue
                            }
                            if ("decimal_point" === i || "decimal" === i) {
                                i = "decimal", n += o;
                                continue
                            }
                            if ("e" === i || "exponent_sign" === i || "exponent" === i) {
                                i = "exponent", n += o;
                                continue
                            }
                        }
                        if ("." !== o || "none" !== i && "sign" !== i && "whole" !== i) {
                            if ("E" !== o && "e" !== o || "whole" !== i && "decimal_point" !== i && "decimal" !== i) break;
                            i = "e", n += o
                        } else i = "decimal_point", n += o
                    }
                    var a = Number.parseFloat(n);
                    return Number.isNaN(a) ? [t, null] : [r - 1, a]
                },
                Tu = {
                    M: function(e, t) {
                        return Ks = t[0], Hs = t[1], Js = Xs = null, $s = Ks, Qs = Hs, e.moveTo(Ks, Hs)
                    },
                    m: function(e, t) {
                        return Ks += t[0], Hs += t[1], Js = Xs = null, $s = Ks, Qs = Hs, e.moveTo(Ks, Hs)
                    },
                    C: function(e, t) {
                        return Ks = t[4], Hs = t[5], Js = t[2], Xs = t[3], e.bezierCurveTo.apply(e, t)
                    },
                    c: function(e, t) {
                        return e.bezierCurveTo(t[0] + Ks, t[1] + Hs, t[2] + Ks, t[3] + Hs, t[4] + Ks, t[5] + Hs), Js = Ks + t[2], Xs = Hs + t[3], Ks += t[4], Hs += t[5]
                    },
                    S: function(e, t) {
                        return null === Js && (Js = Ks, Xs = Hs), e.bezierCurveTo(Ks - (Js - Ks), Hs - (Xs - Hs), t[0], t[1], t[2], t[3]), Js = t[0], Xs = t[1], Ks = t[2], Hs = t[3]
                    },
                    s: function(e, t) {
                        return null === Js && (Js = Ks, Xs = Hs), e.bezierCurveTo(Ks - (Js - Ks), Hs - (Xs - Hs), Ks + t[0], Hs + t[1], Ks + t[2], Hs + t[3]), Js = Ks + t[0], Xs = Hs + t[1], Ks += t[2], Hs += t[3]
                    },
                    Q: function(e, t) {
                        return Js = t[0], Xs = t[1], Ks = t[2], Hs = t[3], e.quadraticCurveTo(t[0], t[1], Ks, Hs)
                    },
                    q: function(e, t) {
                        return e.quadraticCurveTo(t[0] + Ks, t[1] + Hs, t[2] + Ks, t[3] + Hs), Js = Ks + t[0], Xs = Hs + t[1], Ks += t[2], Hs += t[3]
                    },
                    T: function(e, t) {
                        return null === Js ? (Js = Ks, Xs = Hs) : (Js = Ks - (Js - Ks), Xs = Hs - (Xs - Hs)), e.quadraticCurveTo(Js, Xs, t[0], t[1]), Js = Ks - (Js - Ks), Xs = Hs - (Xs - Hs), Ks = t[0], Hs = t[1]
                    },
                    t: function(e, t) {
                        return null === Js ? (Js = Ks, Xs = Hs) : (Js = Ks - (Js - Ks), Xs = Hs - (Xs - Hs)), e.quadraticCurveTo(Js, Xs, Ks + t[0], Hs + t[1]), Ks += t[0], Hs += t[1]
                    },
                    A: function(e, t) {
                        return xu(e, Ks, Hs, t), Ks = t[5], Hs = t[6]
                    },
                    a: function(e, t) {
                        return t[5] += Ks, t[6] += Hs, xu(e, Ks, Hs, t), Ks = t[5], Hs = t[6]
                    },
                    L: function(e, t) {
                        return Ks = t[0], Hs = t[1], Js = Xs = null, e.lineTo(Ks, Hs)
                    },
                    l: function(e, t) {
                        return Ks += t[0], Hs += t[1], Js = Xs = null, e.lineTo(Ks, Hs)
                    },
                    H: function(e, t) {
                        return Ks = t[0], Js = Xs = null, e.lineTo(Ks, Hs)
                    },
                    h: function(e, t) {
                        return Ks += t[0], Js = Xs = null, e.lineTo(Ks, Hs)
                    },
                    V: function(e, t) {
                        return Hs = t[0], Js = Xs = null, e.lineTo(Ks, Hs)
                    },
                    v: function(e, t) {
                        return Hs += t[0], Js = Xs = null, e.lineTo(Ks, Hs)
                    },
                    Z: function(e) {
                        return e.closePath(), Ks = $s, Hs = Qs
                    },
                    z: function(e) {
                        return e.closePath(), Ks = $s, Hs = Qs
                    }
                },
                xu = function(e, t, r, n) {
                    for (var i, o = n[0], a = n[1], c = n[2], s = n[3], u = n[4], l = n[5], h = n[6], d = ku(l, h, o, a, s, u, c, t, r), m = (0, f.Z)(d); !(i = m()).done;) {
                        var g = i.value,
                            p = Ru.apply(void 0, g);
                        e.bezierCurveTo.apply(e, p)
                    }
                },
                ku = function(e, t, r, n, i, o, a, c, s) {
                    var u = a * (Math.PI / 180),
                        l = Math.sin(u),
                        f = Math.cos(u);
                    r = Math.abs(r), n = Math.abs(n);
                    var h = (Js = f * (c - e) * .5 + l * (s - t) * .5) * Js / (r * r) + (Xs = f * (s - t) * .5 - l * (c - e) * .5) * Xs / (n * n);
                    h > 1 && (r *= h = Math.sqrt(h), n *= h);
                    var d = f / r,
                        m = l / r,
                        g = -l / n,
                        p = f / n,
                        y = d * c + m * s,
                        v = g * c + p * s,
                        b = d * e + m * t,
                        A = g * e + p * t,
                        w = 1 / ((b - y) * (b - y) + (A - v) * (A - v)) - .25;
                    w < 0 && (w = 0);
                    var _ = Math.sqrt(w);
                    o === i && (_ = -_);
                    var O = .5 * (y + b) - _ * (A - v),
                        S = .5 * (v + A) + _ * (b - y),
                        E = Math.atan2(v - S, y - O),
                        T = Math.atan2(A - S, b - O) - E;
                    T < 0 && 1 === o ? T += 2 * Math.PI : T > 0 && 0 === o && (T -= 2 * Math.PI);
                    for (var x = Math.ceil(Math.abs(T / (.5 * Math.PI + .001))), k = [], R = 0; R < x; R++) {
                        var U = E + R * T / x,
                            C = E + (R + 1) * T / x;
                        k[R] = [O, S, U, C, r, n, l, f]
                    }
                    return k
                },
                Ru = function(e, t, r, n, i, o, a, c) {
                    var s = c * i,
                        u = -a * o,
                        l = a * i,
                        f = c * o,
                        h = .5 * (n - r),
                        d = 8 / 3 * Math.sin(.5 * h) * Math.sin(.5 * h) / Math.sin(h),
                        m = e + Math.cos(r) - d * Math.sin(r),
                        g = t + Math.sin(r) + d * Math.cos(r),
                        p = e + Math.cos(n),
                        y = t + Math.sin(n),
                        v = p + d * Math.sin(n),
                        b = y - d * Math.cos(n);
                    return [s * m + u * g, l * m + f * g, s * v + u * b, l * v + f * b, s * p + u * y, l * p + f * y]
                },
                Uu = function() {
                    function e() {}
                    return e.apply = function(e, t) {
                        var r = function(e) {
                            for (var t = [], r = null, n = [], i = 0, o = !1, a = !1, c = 0; c < e.length; c += 1) {
                                var s = e.charAt(c);
                                if (!Ou(s))
                                    if (o && "," === s) {
                                        if (a) break;
                                        a = !0
                                    } else if (_u(s)) {
                                    if (a) return t;
                                    if (null == r) {
                                        if ("M" !== s && "m" !== s) return t
                                    } else if (0 !== n.length) return t;
                                    n = [], o = !1, 0 === (i = wu[r = s]) && t.push({
                                        command: r,
                                        args: n
                                    })
                                } else {
                                    if (null == r) return t;
                                    var u = c,
                                        l = null;
                                    if ("A" === r || "a" === r) {
                                        var f = n.length;
                                        if ((0 === f || 1 === f) && "+" !== s && "-" !== s) {
                                            var h = Eu(e, c);
                                            u = h[0], l = h[1]
                                        }
                                        if (2 === f || 5 === f || 6 === f) {
                                            var d = Eu(e, c);
                                            u = d[0], l = d[1]
                                        }
                                        3 !== f && 4 !== f || ("0" === s && (l = 0), "1" === s && (l = 1))
                                    } else {
                                        var m = Eu(e, c);
                                        u = m[0], l = m[1]
                                    }
                                    if (null == l) return t;
                                    n.push(l), o = !0, a = !1, c = u, n.length === i && (t.push({
                                        command: r,
                                        args: n
                                    }), "M" === r && (r = "L"), "m" === r && (r = "l"), n = [])
                                }
                            }
                            return t
                        }(t);
                        ! function(e, t) {
                            Ks = Hs = Js = Xs = $s = Qs = 0;
                            for (var r = 0; r < e.length; r++) {
                                var n = e[r],
                                    i = n.command,
                                    o = n.args;
                                "function" === typeof Tu[i] && Tu[i](t, o)
                            }
                        }(r, e)
                    }, e
                }(),
                Cu = au.number,
                Pu = (Math.sqrt(2) - 1) / 3 * 4,
                Fu = {
                    initVector: function() {
                        return this._ctm = [1, 0, 0, 1, 0, 0], this._ctmStack = []
                    },
                    save: function() {
                        return this._ctmStack.push(this._ctm.slice()), this.addContent("q")
                    },
                    restore: function() {
                        return this._ctm = this._ctmStack.pop() || [1, 0, 0, 1, 0, 0], this.addContent("Q")
                    },
                    closePath: function() {
                        return this.addContent("h")
                    },
                    lineWidth: function(e) {
                        return this.addContent(Cu(e) + " w")
                    },
                    _CAP_STYLES: {
                        BUTT: 0,
                        ROUND: 1,
                        SQUARE: 2
                    },
                    lineCap: function(e) {
                        return "string" === typeof e && (e = this._CAP_STYLES[e.toUpperCase()]), this.addContent(e + " J")
                    },
                    _JOIN_STYLES: {
                        MITER: 0,
                        ROUND: 1,
                        BEVEL: 2
                    },
                    lineJoin: function(e) {
                        return "string" === typeof e && (e = this._JOIN_STYLES[e.toUpperCase()]), this.addContent(e + " j")
                    },
                    miterLimit: function(e) {
                        return this.addContent(Cu(e) + " M")
                    },
                    dash: function(e, t) {
                        var r;
                        if (null == t && (t = {}), null == e) return this;
                        if (Array.isArray(e)) return e = Array.from(e).map((function(e) {
                            return au.number(e)
                        })).join(" "), r = t.phase || 0, this.addContent("[" + e + "] " + au.number(r) + " d");
                        var n = null != t.space ? t.space : e;
                        return r = t.phase || 0, this.addContent("[" + au.number(e) + " " + au.number(n) + "] " + au.number(r) + " d")
                    },
                    undash: function() {
                        return this.addContent("[] 0 d")
                    },
                    moveTo: function(e, t) {
                        return this.addContent(Cu(e) + " " + Cu(t) + " m")
                    },
                    lineTo: function(e, t) {
                        return this.addContent(Cu(e) + " " + Cu(t) + " l")
                    },
                    bezierCurveTo: function(e, t, r, n, i, o) {
                        return this.addContent(Cu(e) + " " + Cu(t) + " " + Cu(r) + " " + Cu(n) + " " + Cu(i) + " " + Cu(o) + " c")
                    },
                    quadraticCurveTo: function(e, t, r, n) {
                        return this.addContent(Cu(e) + " " + Cu(t) + " " + Cu(r) + " " + Cu(n) + " v")
                    },
                    rect: function(e, t, r, n) {
                        return this.addContent(Cu(e) + " " + Cu(t) + " " + Cu(r) + " " + Cu(n) + " re")
                    },
                    roundedRect: function(e, t, r, n, i) {
                        null == i && (i = 0);
                        var o = (i = Math.min(i, .5 * r, .5 * n)) * (1 - Pu);
                        return this.moveTo(e + i, t), this.lineTo(e + r - i, t), this.bezierCurveTo(e + r - o, t, e + r, t + o, e + r, t + i), this.lineTo(e + r, t + n - i), this.bezierCurveTo(e + r, t + n - o, e + r - o, t + n, e + r - i, t + n), this.lineTo(e + i, t + n), this.bezierCurveTo(e + o, t + n, e, t + n - o, e, t + n - i), this.lineTo(e, t + i), this.bezierCurveTo(e, t + o, e + o, t, e + i, t), this.closePath()
                    },
                    ellipse: function(e, t, r, n) {
                        null == n && (n = r);
                        var i = r * Pu,
                            o = n * Pu,
                            a = (e -= r) + 2 * r,
                            c = (t -= n) + 2 * n,
                            s = e + r,
                            u = t + n;
                        return this.moveTo(e, u), this.bezierCurveTo(e, u - o, s - i, t, s, t), this.bezierCurveTo(s + i, t, a, u - o, a, u), this.bezierCurveTo(a, u + o, s + i, c, s, c), this.bezierCurveTo(s - i, c, e, u + o, e, u), this.closePath()
                    },
                    circle: function(e, t, r) {
                        return this.ellipse(e, t, r)
                    },
                    arc: function(e, t, r, n, i, o) {
                        null == o && (o = !1);
                        var a = 2 * Math.PI,
                            c = .5 * Math.PI,
                            s = i - n;
                        if (Math.abs(s) > a) s = a;
                        else if (0 !== s && o !== s < 0) {
                            s = (o ? -1 : 1) * a + s
                        }
                        var u = Math.ceil(Math.abs(s) / c),
                            l = s / u,
                            f = l / c * Pu * r,
                            h = n,
                            d = -Math.sin(h) * f,
                            m = Math.cos(h) * f,
                            g = e + Math.cos(h) * r,
                            p = t + Math.sin(h) * r;
                        this.moveTo(g, p);
                        for (var y = 0, v = u, b = 0 <= v; b ? y < v : y > v; b ? y++ : y--) {
                            var A = g + d,
                                w = p + m;
                            h += l, g = e + Math.cos(h) * r, p = t + Math.sin(h) * r;
                            var _ = g - (d = -Math.sin(h) * f),
                                O = p - (m = Math.cos(h) * f);
                            this.bezierCurveTo(A, w, _, O, g, p)
                        }
                        return this
                    },
                    polygon: function() {
                        for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                        this.moveTo.apply(this, Array.from(t.shift() || []));
                        for (var n = 0, i = Array.from(t); n < i.length; n++) {
                            var o = i[n];
                            this.lineTo.apply(this, Array.from(o || []))
                        }
                        return this.closePath()
                    },
                    path: function(e) {
                        return Uu.apply(this, e), this
                    },
                    _windingRule: function(e) {
                        return /even-?odd/.test(e) ? "*" : ""
                    },
                    fill: function(e, t) {
                        return /(even-?odd)|(non-?zero)/.test(e) && (t = e, e = null), e && this.fillColor(e), this.addContent("f" + this._windingRule(t))
                    },
                    stroke: function(e) {
                        return e && this.strokeColor(e), this.addContent("S")
                    },
                    fillAndStroke: function(e, t, r) {
                        null == t && (t = e);
                        var n = /(even-?odd)|(non-?zero)/;
                        return n.test(e) && (r = e, e = null), n.test(t) && (r = t, t = e), e && (this.fillColor(e), this.strokeColor(t)), this.addContent("B" + this._windingRule(r))
                    },
                    clip: function(e) {
                        return this.addContent("W" + this._windingRule(e) + " n")
                    },
                    transform: function(e, t, r, n, i, o) {
                        var a = this._ctm,
                            c = Array.from(a),
                            s = c[0],
                            u = c[1],
                            l = c[2],
                            f = c[3],
                            h = c[4],
                            d = c[5];
                        a[0] = s * e + l * t, a[1] = u * e + f * t, a[2] = s * r + l * n, a[3] = u * r + f * n, a[4] = s * i + l * o + h, a[5] = u * i + f * o + d;
                        var m = [e, t, r, n, i, o].map((function(e) {
                            return au.number(e)
                        })).join(" ");
                        return this.addContent(m + " cm")
                    },
                    translate: function(e, t) {
                        return this.transform(1, 0, 0, 1, e, t)
                    },
                    rotate: function(e, t) {
                        void 0 === t && (t = {});
                        var r = e * Math.PI / 180,
                            n = Math.cos(r),
                            i = Math.sin(r),
                            o = 0,
                            a = 0;
                        if (null != t.origin) {
                            var c = Array.from(t.origin),
                                s = (o = c[0]) * i + (a = c[1]) * n;
                            o -= o * n - a * i, a -= s
                        }
                        return this.transform(n, i, -i, n, o, a)
                    },
                    scale: function(e, t, r) {
                        void 0 === r && (r = {}), null == t && (t = e), "object" === typeof t && (r = t, t = e);
                        var n = 0,
                            i = 0;
                        if (null != r.origin) {
                            var o = Array.from(r.origin);
                            n = o[0], i = o[1], n -= e * n, i -= t * i
                        }
                        return this.transform(e, 0, 0, t, n, i)
                    },
                    skew: function(e, t, r) {
                        void 0 === e && (e = 0), void 0 === t && (t = 0);
                        var n = e * Math.PI / 180,
                            i = t * Math.PI / 180,
                            o = Math.tan(n),
                            a = Math.tan(i),
                            c = 0,
                            s = 0;
                        if (null != r.origin) {
                            var u = Array.from(r.origin);
                            c = u[0];
                            var l = (s = u[1]) + a * c;
                            c -= c + o * s, s -= l
                        }
                        return this.transform(1, a, o, 1, c, s)
                    }
                },
                Du = {
                    402: 131,
                    8211: 150,
                    8212: 151,
                    8216: 145,
                    8217: 146,
                    8218: 130,
                    8220: 147,
                    8221: 148,
                    8222: 132,
                    8224: 134,
                    8225: 135,
                    8226: 149,
                    8230: 133,
                    8364: 128,
                    8240: 137,
                    8249: 139,
                    8250: 155,
                    710: 136,
                    8482: 153,
                    338: 140,
                    339: 156,
                    732: 152,
                    352: 138,
                    353: 154,
                    376: 159,
                    381: 142,
                    382: 158
                },
                Iu = ".notdef       .notdef        .notdef        .notdef\n.notdef       .notdef        .notdef        .notdef\n.notdef       .notdef        .notdef        .notdef\n.notdef       .notdef        .notdef        .notdef\n.notdef       .notdef        .notdef        .notdef\n.notdef       .notdef        .notdef        .notdef\n.notdef       .notdef        .notdef        .notdef\n.notdef       .notdef        .notdef        .notdef\n\nspace         exclam         quotedbl       numbersign\ndollar        percent        ampersand      quotesingle\nparenleft     parenright     asterisk       plus\ncomma         hyphen         period         slash\nzero          one            two            three\nfour          five           six            seven\neight         nine           colon          semicolon\nless          equal          greater        question\n\nat            A              B              C\nD             E              F              G\nH             I              J              K\nL             M              N              O\nP             Q              R              S\nT             U              V              W\nX             Y              Z              bracketleft\nbackslash     bracketright   asciicircum    underscore\n\ngrave         a              b              c\nd             e              f              g\nh             i              j              k\nl             m              n              o\np             q              r              s\nt             u              v              w\nx             y              z              braceleft\nbar           braceright     asciitilde     .notdef\n\nEuro          .notdef        quotesinglbase florin\nquotedblbase  ellipsis       dagger         daggerdbl\ncircumflex    perthousand    Scaron         guilsinglleft\nOE            .notdef        Zcaron         .notdef\n.notdef       quoteleft      quoteright     quotedblleft\nquotedblright bullet         endash         emdash\ntilde         trademark      scaron         guilsinglright\noe            .notdef        zcaron         ydieresis\n\nspace         exclamdown     cent           sterling\ncurrency      yen            brokenbar      section\ndieresis      copyright      ordfeminine    guillemotleft\nlogicalnot    hyphen         registered     macron\ndegree        plusminus      twosuperior    threesuperior\nacute         mu             paragraph      periodcentered\ncedilla       onesuperior    ordmasculine   guillemotright\nonequarter    onehalf        threequarters  questiondown\n\nAgrave        Aacute         Acircumflex    Atilde\nAdieresis     Aring          AE             Ccedilla\nEgrave        Eacute         Ecircumflex    Edieresis\nIgrave        Iacute         Icircumflex    Idieresis\nEth           Ntilde         Ograve         Oacute\nOcircumflex   Otilde         Odieresis      multiply\nOslash        Ugrave         Uacute         Ucircumflex\nUdieresis     Yacute         Thorn          germandbls\n\nagrave        aacute         acircumflex    atilde\nadieresis     aring          ae             ccedilla\negrave        eacute         ecircumflex    edieresis\nigrave        iacute         icircumflex    idieresis\neth           ntilde         ograve         oacute\nocircumflex   otilde         odieresis      divide\noslash        ugrave         uacute         ucircumflex\nudieresis     yacute         thorn          ydieresis".split(/\s+/);
            var Lu = function() {
                    function e(e) {
                        var t = this;
                        "string" === typeof e ? (this.contents = e, this.parse()) : (this.attributes = e.attributes, this.glyphWidths = e.glyphWidths, this.kernPairs = e.kernPairs), this.charWidths = function(e, t, r) {
                            for (var n = [], i = e < t, o = r ? i ? t + 1 : t - 1 : t, a = e; i ? a < o : a > o; i ? a++ : a--) n.push(a);
                            return n
                        }(0, 255, !0).map((function(e) {
                            return t.glyphWidths[Iu[e]]
                        })), this.bbox = Array.from(this.attributes.FontBBox.split(/\s+/)).map((function(e) {
                            return +e
                        })), this.ascender = +(this.attributes.Ascender || 0), this.descender = +(this.attributes.Descender || 0), this.xHeight = +(this.attributes.XHeight || 0), this.capHeight = +(this.attributes.CapHeight || 0), this.lineGap = this.bbox[3] - this.bbox[1] - (this.ascender - this.descender)
                    }
                    e.open = function(e) {
                        throw new Error("AFMFont.open not available on browser build")
                    }, e.fromJson = function(t) {
                        return new e(t)
                    };
                    var t = e.prototype;
                    return t.parse = function() {
                        var e = function(e) {
                            for (var t, r = {
                                    attributes: {},
                                    glyphWidths: {},
                                    kernPairs: {}
                                }, n = "", i = (0, f.Z)(e.split("\n")); !(t = i()).done;) {
                                var o, a, c = t.value;
                                if (o = c.match(/^Start(\w+)/)) n = o[1];
                                else if (o = c.match(/^End(\w+)/)) n = "";
                                else switch (n) {
                                    case "FontMetrics":
                                        var s = (o = c.match(/(^\w+)\s+(.*)/))[1],
                                            u = o[2];
                                        (a = r.attributes[s]) ? (Array.isArray(a) || (a = r.attributes[s] = [a]), a.push(u)) : r.attributes[s] = u;
                                        break;
                                    case "CharMetrics":
                                        if (!/^CH?\s/.test(c)) continue;
                                        var l = c.match(/\bN\s+(\.?\w+)\s*;/)[1];
                                        r.glyphWidths[l] = +c.match(/\bWX\s+(\d+)\s*;/)[1];
                                        break;
                                    case "KernPairs":
                                        (o = c.match(/^KPX\s+(\.?\w+)\s+(\.?\w+)\s+(-?\d+)/)) && (r.kernPairs[o[1] + o[2]] = parseInt(o[3]))
                                }
                            }
                            return r
                        }(this.contents);
                        this.attributes = e.attributes, this.glyphWidths = e.glyphWidths, this.kernPairs = e.kernPairs
                    }, t.encodeText = function(e) {
                        for (var t = [], r = 0, n = e.length, i = 0 <= n; i ? r < n : r > n; i ? r++ : r--) {
                            var o = e.charCodeAt(r);
                            o = Du[o] || o, t.push(o.toString(16))
                        }
                        return t
                    }, t.glyphsForString = function(e) {
                        for (var t = [], r = 0, n = e.length, i = 0 <= n; i ? r < n : r > n; i ? r++ : r--) {
                            var o = e.charCodeAt(r);
                            t.push(this.characterToGlyph(o))
                        }
                        return t
                    }, t.characterToGlyph = function(e) {
                        return Iu[Du[e] || e] || ".notdef"
                    }, t.widthOfGlyph = function(e) {
                        return this.glyphWidths[e] || 0
                    }, t.getKernPair = function(e, t) {
                        return this.kernPairs[e + t] || 0
                    }, t.advancesForGlyphs = function(e) {
                        for (var t = [], r = 0; r < e.length; r++) {
                            var n = e[r],
                                i = e[r + 1];
                            t.push(this.widthOfGlyph(n) + this.getKernPair(n, i))
                        }
                        return t
                    }, e
                }(),
                Nu = function(e) {
                    return [e.FontName, {
                        attributes: e,
                        glyphWidths: {},
                        kernPairs: {}
                    }]
                },
                ju = function(e) {
                    var t = e.attributes,
                        r = e.glyphWidths,
                        n = e.kernPairs,
                        i = t.map(Nu);
                    return Object.keys(r).forEach((function(e) {
                        r[e].forEach((function(t, r) {
                            t && (i[r][1].glyphWidths[e] = t)
                        }))
                    })), Object.keys(n).forEach((function(e) {
                        n[e].forEach((function(t, r) {
                            t && (i[r][1].kernPairs[e] = t)
                        }))
                    })), Object.fromEntries(i)
                }({
                    attributes: [{
                        Comment: ["Copyright (c) 1985, 1987, 1989, 1990, 1997 Adobe Systems Incorporated.  All Rights Reserved.", "Creation Date: Thu May  1 12:43:52 1997", "UniqueID 43052", "VMusage 37169 48194"],
                        FontName: "Helvetica-Bold",
                        FullName: "Helvetica Bold",
                        FamilyName: "Helvetica",
                        Weight: "Bold",
                        ItalicAngle: "0",
                        IsFixedPitch: "false",
                        CharacterSet: "ExtendedRoman",
                        FontBBox: "-170 -228 1003 962 ",
                        UnderlinePosition: "-100",
                        UnderlineThickness: "50",
                        Version: "002.000",
                        Notice: "Copyright (c) 1985, 1987, 1989, 1990, 1997 Adobe Systems Incorporated.  All Rights Reserved.Helvetica is a trademark of Linotype-Hell AG and/or its subsidiaries.",
                        EncodingScheme: "AdobeStandardEncoding",
                        CapHeight: "718",
                        XHeight: "532",
                        Ascender: "718",
                        Descender: "-207",
                        StdHW: "118",
                        StdVW: "140"
                    }, {
                        Comment: ["Copyright (c) 1985, 1987, 1989, 1990, 1997 Adobe Systems Incorporated.  All Rights Reserved.", "Creation Date: Thu May  1 12:45:12 1997", "UniqueID 43053", "VMusage 14482 68586"],
                        FontName: "Helvetica-BoldOblique",
                        FullName: "Helvetica Bold Oblique",
                        FamilyName: "Helvetica",
                        Weight: "Bold",
                        ItalicAngle: "-12",
                        IsFixedPitch: "false",
                        CharacterSet: "ExtendedRoman",
                        FontBBox: "-174 -228 1114 962",
                        UnderlinePosition: "-100",
                        UnderlineThickness: "50",
                        Version: "002.000",
                        Notice: "Copyright (c) 1985, 1987, 1989, 1990, 1997 Adobe Systems Incorporated.  All Rights Reserved.Helvetica is a trademark of Linotype-Hell AG and/or its subsidiaries.",
                        EncodingScheme: "AdobeStandardEncoding",
                        CapHeight: "718",
                        XHeight: "532",
                        Ascender: "718",
                        Descender: "-207",
                        StdHW: "118",
                        StdVW: "140"
                    }, {
                        Comment: ["Copyright (c) 1985, 1987, 1989, 1990, 1997 Adobe Systems Incorporated.  All Rights Reserved.", "Creation Date: Thu May  1 12:44:31 1997", "UniqueID 43055", "VMusage 14960 69346"],
                        FontName: "Helvetica-Oblique",
                        FullName: "Helvetica Oblique",
                        FamilyName: "Helvetica",
                        Weight: "Medium",
                        ItalicAngle: "-12",
                        IsFixedPitch: "false",
                        CharacterSet: "ExtendedRoman",
                        FontBBox: "-170 -225 1116 931 ",
                        UnderlinePosition: "-100",
                        UnderlineThickness: "50",
                        Version: "002.000",
                        Notice: "Copyright (c) 1985, 1987, 1989, 1990, 1997 Adobe Systems Incorporated.  All Rights Reserved.Helvetica is a trademark of Linotype-Hell AG and/or its subsidiaries.",
                        EncodingScheme: "AdobeStandardEncoding",
                        CapHeight: "718",
                        XHeight: "523",
                        Ascender: "718",
                        Descender: "-207",
                        StdHW: "76",
                        StdVW: "88"
                    }, {
                        Comment: ["Copyright (c) 1985, 1987, 1989, 1990, 1997 Adobe Systems Incorporated.  All Rights Reserved.", "Creation Date: Thu May  1 12:38:23 1997", "UniqueID 43054", "VMusage 37069 48094"],
                        FontName: "Helvetica",
                        FullName: "Helvetica",
                        FamilyName: "Helvetica",
                        Weight: "Medium",
                        ItalicAngle: "0",
                        IsFixedPitch: "false",
                        CharacterSet: "ExtendedRoman",
                        FontBBox: "-166 -225 1000 931 ",
                        UnderlinePosition: "-100",
                        UnderlineThickness: "50",
                        Version: "002.000",
                        Notice: "Copyright (c) 1985, 1987, 1989, 1990, 1997 Adobe Systems Incorporated.  All Rights Reserved.Helvetica is a trademark of Linotype-Hell AG and/or its subsidiaries.",
                        EncodingScheme: "AdobeStandardEncoding",
                        CapHeight: "718",
                        XHeight: "523",
                        Ascender: "718",
                        Descender: "-207",
                        StdHW: "76",
                        StdVW: "88"
                    }, {
                        Comment: ["Copyright (c) 1985, 1987, 1989, 1990, 1993, 1997 Adobe Systems Incorporated.  All Rights Reserved.", "Creation Date: Thu May  1 12:52:56 1997", "UniqueID 43065", "VMusage 41636 52661"],
                        FontName: "Times-Bold",
                        FullName: "Times Bold",
                        FamilyName: "Times",
                        Weight: "Bold",
                        ItalicAngle: "0",
                        IsFixedPitch: "false",
                        CharacterSet: "ExtendedRoman",
                        FontBBox: "-168 -218 1000 935 ",
                        UnderlinePosition: "-100",
                        UnderlineThickness: "50",
                        Version: "002.000",
                        Notice: "Copyright (c) 1985, 1987, 1989, 1990, 1993, 1997 Adobe Systems Incorporated.  All Rights Reserved.Times is a trademark of Linotype-Hell AG and/or its subsidiaries.",
                        EncodingScheme: "AdobeStandardEncoding",
                        CapHeight: "676",
                        XHeight: "461",
                        Ascender: "683",
                        Descender: "-217",
                        StdHW: "44",
                        StdVW: "139"
                    }, {
                        Comment: ["Copyright (c) 1985, 1987, 1989, 1990, 1993, 1997 Adobe Systems Incorporated.  All Rights Reserved.", "Creation Date: Thu May  1 13:04:06 1997", "UniqueID 43066", "VMusage 45874 56899"],
                        FontName: "Times-BoldItalic",
                        FullName: "Times Bold Italic",
                        FamilyName: "Times",
                        Weight: "Bold",
                        ItalicAngle: "-15",
                        IsFixedPitch: "false",
                        CharacterSet: "ExtendedRoman",
                        FontBBox: "-200 -218 996 921",
                        UnderlinePosition: "-100",
                        UnderlineThickness: "50",
                        Version: "002.000",
                        Notice: "Copyright (c) 1985, 1987, 1989, 1990, 1993, 1997 Adobe Systems Incorporated.  All Rights Reserved.Times is a trademark of Linotype-Hell AG and/or its subsidiaries.",
                        EncodingScheme: "AdobeStandardEncoding",
                        CapHeight: "669",
                        XHeight: "462",
                        Ascender: "683",
                        Descender: "-217",
                        StdHW: "42",
                        StdVW: "121"
                    }, {
                        Comment: ["Copyright (c) 1985, 1987, 1989, 1990, 1993, 1997 Adobe Systems Incorporated.  All Rights Reserved.", "Creation Date: Thu May  1 12:56:55 1997", "UniqueID 43067", "VMusage 47727 58752"],
                        FontName: "Times-Italic",
                        FullName: "Times Italic",
                        FamilyName: "Times",
                        Weight: "Medium",
                        ItalicAngle: "-15.5",
                        IsFixedPitch: "false",
                        CharacterSet: "ExtendedRoman",
                        FontBBox: "-169 -217 1010 883 ",
                        UnderlinePosition: "-100",
                        UnderlineThickness: "50",
                        Version: "002.000",
                        Notice: "Copyright (c) 1985, 1987, 1989, 1990, 1993, 1997 Adobe Systems Incorporated.  All Rights Reserved.Times is a trademark of Linotype-Hell AG and/or its subsidiaries.",
                        EncodingScheme: "AdobeStandardEncoding",
                        CapHeight: "653",
                        XHeight: "441",
                        Ascender: "683",
                        Descender: "-217",
                        StdHW: "32",
                        StdVW: "76"
                    }, {
                        Comment: ["Copyright (c) 1985, 1987, 1989, 1990, 1993, 1997 Adobe Systems Incorporated.  All Rights Reserved.", "Creation Date: Thu May  1 12:49:17 1997", "UniqueID 43068", "VMusage 43909 54934"],
                        FontName: "Times-Roman",
                        FullName: "Times Roman",
                        FamilyName: "Times",
                        Weight: "Roman",
                        ItalicAngle: "0",
                        IsFixedPitch: "false",
                        CharacterSet: "ExtendedRoman",
                        FontBBox: "-168 -218 1000 898 ",
                        UnderlinePosition: "-100",
                        UnderlineThickness: "50",
                        Version: "002.000",
                        Notice: "Copyright (c) 1985, 1987, 1989, 1990, 1993, 1997 Adobe Systems Incorporated.  All Rights Reserved.Times is a trademark of Linotype-Hell AG and/or its subsidiaries.",
                        EncodingScheme: "AdobeStandardEncoding",
                        CapHeight: "662",
                        XHeight: "450",
                        Ascender: "683",
                        Descender: "-217",
                        StdHW: "28",
                        StdVW: "84"
                    }, {
                        Comment: ["Copyright (c) 1989, 1990, 1991, 1993, 1997 Adobe Systems Incorporated.  All Rights Reserved.", "Creation Date: Mon Jun 23 16:28:00 1997", "UniqueID 43048", "VMusage 41139 52164"],
                        FontName: "Courier-Bold",
                        FullName: "Courier Bold",
                        FamilyName: "Courier",
                        Weight: "Bold",
                        ItalicAngle: "0",
                        IsFixedPitch: "true",
                        CharacterSet: "ExtendedRoman",
                        FontBBox: "-113 -250 749 801 ",
                        UnderlinePosition: "-100",
                        UnderlineThickness: "50",
                        Version: "003.000",
                        Notice: "Copyright (c) 1989, 1990, 1991, 1993, 1997 Adobe Systems Incorporated.  All Rights Reserved.",
                        EncodingScheme: "AdobeStandardEncoding",
                        CapHeight: "562",
                        XHeight: "439",
                        Ascender: "629",
                        Descender: "-157",
                        StdHW: "84",
                        StdVW: "106"
                    }, {
                        Comment: ["Copyright (c) 1989, 1990, 1991, 1993, 1997 Adobe Systems Incorporated.  All Rights Reserved.", "Creation Date: Mon Jun 23 16:28:46 1997", "UniqueID 43049", "VMusage 17529 79244"],
                        FontName: "Courier-BoldOblique",
                        FullName: "Courier Bold Oblique",
                        FamilyName: "Courier",
                        Weight: "Bold",
                        ItalicAngle: "-12",
                        IsFixedPitch: "true",
                        CharacterSet: "ExtendedRoman",
                        FontBBox: "-57 -250 869 801",
                        UnderlinePosition: "-100",
                        UnderlineThickness: "50",
                        Version: "003.000",
                        Notice: "Copyright (c) 1989, 1990, 1991, 1993, 1997 Adobe Systems Incorporated.  All Rights Reserved.",
                        EncodingScheme: "AdobeStandardEncoding",
                        CapHeight: "562",
                        XHeight: "439",
                        Ascender: "629",
                        Descender: "-157",
                        StdHW: "84",
                        StdVW: "106"
                    }, {
                        Comment: ["Copyright (c) 1989, 1990, 1991, 1992, 1993, 1997 Adobe Systems Incorporated.  All Rights Reserved.", "Creation Date: Thu May  1 17:37:52 1997", "UniqueID 43051", "VMusage 16248 75829"],
                        FontName: "Courier-Oblique",
                        FullName: "Courier Oblique",
                        FamilyName: "Courier",
                        Weight: "Medium",
                        ItalicAngle: "-12",
                        IsFixedPitch: "true",
                        CharacterSet: "ExtendedRoman",
                        FontBBox: "-27 -250 849 805 ",
                        UnderlinePosition: "-100",
                        UnderlineThickness: "50",
                        Version: "003.000",
                        Notice: "Copyright (c) 1989, 1990, 1991, 1992, 1993, 1997 Adobe Systems Incorporated.  All Rights Reserved.",
                        EncodingScheme: "AdobeStandardEncoding",
                        CapHeight: "562",
                        XHeight: "426",
                        Ascender: "629",
                        Descender: "-157",
                        StdHW: "51",
                        StdVW: "51"
                    }, {
                        Comment: ["Copyright (c) 1989, 1990, 1991, 1992, 1993, 1997 Adobe Systems Incorporated.  All Rights Reserved.", "Creation Date: Thu May  1 17:27:09 1997", "UniqueID 43050", "VMusage 39754 50779"],
                        FontName: "Courier",
                        FullName: "Courier",
                        FamilyName: "Courier",
                        Weight: "Medium",
                        ItalicAngle: "0",
                        IsFixedPitch: "true",
                        CharacterSet: "ExtendedRoman",
                        FontBBox: "-23 -250 715 805 ",
                        UnderlinePosition: "-100",
                        UnderlineThickness: "50",
                        Version: "003.000",
                        Notice: "Copyright (c) 1989, 1990, 1991, 1992, 1993, 1997 Adobe Systems Incorporated.  All Rights Reserved.",
                        EncodingScheme: "AdobeStandardEncoding",
                        CapHeight: "562",
                        XHeight: "426",
                        Ascender: "629",
                        Descender: "-157",
                        StdHW: "51",
                        StdVW: "51"
                    }],
                    glyphWidths: {
                        space: [278, 278, 278, 278, 250, 250, 250, 250, 600, 600, 600, 600],
                        exclam: [333, 333, 278, 278, 333, 389, 333, 333, 600, 600, 600, 600],
                        quotedbl: [474, 474, 355, 355, 555, 555, 420, 408, 600, 600, 600, 600],
                        numbersign: [556, 556, 556, 556, 500, 500, 500, 500, 600, 600, 600, 600],
                        dollar: [556, 556, 556, 556, 500, 500, 500, 500, 600, 600, 600, 600],
                        percent: [889, 889, 889, 889, 1e3, 833, 833, 833, 600, 600, 600, 600],
                        ampersand: [722, 722, 667, 667, 833, 778, 778, 778, 600, 600, 600, 600],
                        quoteright: [278, 278, 222, 222, 333, 333, 333, 333, 600, 600, 600, 600],
                        parenleft: [333, 333, 333, 333, 333, 333, 333, 333, 600, 600, 600, 600],
                        parenright: [333, 333, 333, 333, 333, 333, 333, 333, 600, 600, 600, 600],
                        asterisk: [389, 389, 389, 389, 500, 500, 500, 500, 600, 600, 600, 600],
                        plus: [584, 584, 584, 584, 570, 570, 675, 564, 600, 600, 600, 600],
                        comma: [278, 278, 278, 278, 250, 250, 250, 250, 600, 600, 600, 600],
                        hyphen: [333, 333, 333, 333, 333, 333, 333, 333, 600, 600, 600, 600],
                        period: [278, 278, 278, 278, 250, 250, 250, 250, 600, 600, 600, 600],
                        slash: [278, 278, 278, 278, 278, 278, 278, 278, 600, 600, 600, 600],
                        zero: [556, 556, 556, 556, 500, 500, 500, 500, 600, 600, 600, 600],
                        one: [556, 556, 556, 556, 500, 500, 500, 500, 600, 600, 600, 600],
                        two: [556, 556, 556, 556, 500, 500, 500, 500, 600, 600, 600, 600],
                        three: [556, 556, 556, 556, 500, 500, 500, 500, 600, 600, 600, 600],
                        four: [556, 556, 556, 556, 500, 500, 500, 500, 600, 600, 600, 600],
                        five: [556, 556, 556, 556, 500, 500, 500, 500, 600, 600, 600, 600],
                        six: [556, 556, 556, 556, 500, 500, 500, 500, 600, 600, 600, 600],
                        seven: [556, 556, 556, 556, 500, 500, 500, 500, 600, 600, 600, 600],
                        eight: [556, 556, 556, 556, 500, 500, 500, 500, 600, 600, 600, 600],
                        nine: [556, 556, 556, 556, 500, 500, 500, 500, 600, 600, 600, 600],
                        colon: [333, 333, 278, 278, 333, 333, 333, 278, 600, 600, 600, 600],
                        semicolon: [333, 333, 278, 278, 333, 333, 333, 278, 600, 600, 600, 600],
                        less: [584, 584, 584, 584, 570, 570, 675, 564, 600, 600, 600, 600],
                        equal: [584, 584, 584, 584, 570, 570, 675, 564, 600, 600, 600, 600],
                        greater: [584, 584, 584, 584, 570, 570, 675, 564, 600, 600, 600, 600],
                        question: [611, 611, 556, 556, 500, 500, 500, 444, 600, 600, 600, 600],
                        at: [975, 975, 1015, 1015, 930, 832, 920, 921, 600, 600, 600, 600],
                        A: [722, 722, 667, 667, 722, 667, 611, 722, 600, 600, 600, 600],
                        B: [722, 722, 667, 667, 667, 667, 611, 667, 600, 600, 600, 600],
                        C: [722, 722, 722, 722, 722, 667, 667, 667, 600, 600, 600, 600],
                        D: [722, 722, 722, 722, 722, 722, 722, 722, 600, 600, 600, 600],
                        E: [667, 667, 667, 667, 667, 667, 611, 611, 600, 600, 600, 600],
                        F: [611, 611, 611, 611, 611, 667, 611, 556, 600, 600, 600, 600],
                        G: [778, 778, 778, 778, 778, 722, 722, 722, 600, 600, 600, 600],
                        H: [722, 722, 722, 722, 778, 778, 722, 722, 600, 600, 600, 600],
                        I: [278, 278, 278, 278, 389, 389, 333, 333, 600, 600, 600, 600],
                        J: [556, 556, 500, 500, 500, 500, 444, 389, 600, 600, 600, 600],
                        K: [722, 722, 667, 667, 778, 667, 667, 722, 600, 600, 600, 600],
                        L: [611, 611, 556, 556, 667, 611, 556, 611, 600, 600, 600, 600],
                        M: [833, 833, 833, 833, 944, 889, 833, 889, 600, 600, 600, 600],
                        N: [722, 722, 722, 722, 722, 722, 667, 722, 600, 600, 600, 600],
                        O: [778, 778, 778, 778, 778, 722, 722, 722, 600, 600, 600, 600],
                        P: [667, 667, 667, 667, 611, 611, 611, 556, 600, 600, 600, 600],
                        Q: [778, 778, 778, 778, 778, 722, 722, 722, 600, 600, 600, 600],
                        R: [722, 722, 722, 722, 722, 667, 611, 667, 600, 600, 600, 600],
                        S: [667, 667, 667, 667, 556, 556, 500, 556, 600, 600, 600, 600],
                        T: [611, 611, 611, 611, 667, 611, 556, 611, 600, 600, 600, 600],
                        U: [722, 722, 722, 722, 722, 722, 722, 722, 600, 600, 600, 600],
                        V: [667, 667, 667, 667, 722, 667, 611, 722, 600, 600, 600, 600],
                        W: [944, 944, 944, 944, 1e3, 889, 833, 944, 600, 600, 600, 600],
                        X: [667, 667, 667, 667, 722, 667, 611, 722, 600, 600, 600, 600],
                        Y: [667, 667, 667, 667, 722, 611, 556, 722, 600, 600, 600, 600],
                        Z: [611, 611, 611, 611, 667, 611, 556, 611, 600, 600, 600, 600],
                        bracketleft: [333, 333, 278, 278, 333, 333, 389, 333, 600, 600, 600, 600],
                        backslash: [278, 278, 278, 278, 278, 278, 278, 278, 600, 600, 600, 600],
                        bracketright: [333, 333, 278, 278, 333, 333, 389, 333, 600, 600, 600, 600],
                        asciicircum: [584, 584, 469, 469, 581, 570, 422, 469, 600, 600, 600, 600],
                        underscore: [556, 556, 556, 556, 500, 500, 500, 500, 600, 600, 600, 600],
                        quoteleft: [278, 278, 222, 222, 333, 333, 333, 333, 600, 600, 600, 600],
                        a: [556, 556, 556, 556, 500, 500, 500, 444, 600, 600, 600, 600],
                        b: [611, 611, 556, 556, 556, 500, 500, 500, 600, 600, 600, 600],
                        c: [556, 556, 500, 500, 444, 444, 444, 444, 600, 600, 600, 600],
                        d: [611, 611, 556, 556, 556, 500, 500, 500, 600, 600, 600, 600],
                        e: [556, 556, 556, 556, 444, 444, 444, 444, 600, 600, 600, 600],
                        f: [333, 333, 278, 278, 333, 333, 278, 333, 600, 600, 600, 600],
                        g: [611, 611, 556, 556, 500, 500, 500, 500, 600, 600, 600, 600],
                        h: [611, 611, 556, 556, 556, 556, 500, 500, 600, 600, 600, 600],
                        i: [278, 278, 222, 222, 278, 278, 278, 278, 600, 600, 600, 600],
                        j: [278, 278, 222, 222, 333, 278, 278, 278, 600, 600, 600, 600],
                        k: [556, 556, 500, 500, 556, 500, 444, 500, 600, 600, 600, 600],
                        l: [278, 278, 222, 222, 278, 278, 278, 278, 600, 600, 600, 600],
                        m: [889, 889, 833, 833, 833, 778, 722, 778, 600, 600, 600, 600],
                        n: [611, 611, 556, 556, 556, 556, 500, 500, 600, 600, 600, 600],
                        o: [611, 611, 556, 556, 500, 500, 500, 500, 600, 600, 600, 600],
                        p: [611, 611, 556, 556, 556, 500, 500, 500, 600, 600, 600, 600],
                        q: [611, 611, 556, 556, 556, 500, 500, 500, 600, 600, 600, 600],
                        r: [389, 389, 333, 333, 444, 389, 389, 333, 600, 600, 600, 600],
                        s: [556, 556, 500, 500, 389, 389, 389, 389, 600, 600, 600, 600],
                        t: [333, 333, 278, 278, 333, 278, 278, 278, 600, 600, 600, 600],
                        u: [611, 611, 556, 556, 556, 556, 500, 500, 600, 600, 600, 600],
                        v: [556, 556, 500, 500, 500, 444, 444, 500, 600, 600, 600, 600],
                        w: [778, 778, 722, 722, 722, 667, 667, 722, 600, 600, 600, 600],
                        x: [556, 556, 500, 500, 500, 500, 444, 500, 600, 600, 600, 600],
                        y: [556, 556, 500, 500, 500, 444, 444, 500, 600, 600, 600, 600],
                        z: [500, 500, 500, 500, 444, 389, 389, 444, 600, 600, 600, 600],
                        braceleft: [389, 389, 334, 334, 394, 348, 400, 480, 600, 600, 600, 600],
                        bar: [280, 280, 260, 260, 220, 220, 275, 200, 600, 600, 600, 600],
                        braceright: [389, 389, 334, 334, 394, 348, 400, 480, 600, 600, 600, 600],
                        asciitilde: [584, 584, 584, 584, 520, 570, 541, 541, 600, 600, 600, 600],
                        exclamdown: [333, 333, 333, 333, 333, 389, 389, 333, 600, 600, 600, 600],
                        cent: [556, 556, 556, 556, 500, 500, 500, 500, 600, 600, 600, 600],
                        sterling: [556, 556, 556, 556, 500, 500, 500, 500, 600, 600, 600, 600],
                        fraction: [167, 167, 167, 167, 167, 167, 167, 167, 600, 600, 600, 600],
                        yen: [556, 556, 556, 556, 500, 500, 500, 500, 600, 600, 600, 600],
                        florin: [556, 556, 556, 556, 500, 500, 500, 500, 600, 600, 600, 600],
                        section: [556, 556, 556, 556, 500, 500, 500, 500, 600, 600, 600, 600],
                        currency: [556, 556, 556, 556, 500, 500, 500, 500, 600, 600, 600, 600],
                        quotesingle: [238, 238, 191, 191, 278, 278, 214, 180, 600, 600, 600, 600],
                        quotedblleft: [500, 500, 333, 333, 500, 500, 556, 444, 600, 600, 600, 600],
                        guillemotleft: [556, 556, 556, 556, 500, 500, 500, 500, 600, 600, 600, 600],
                        guilsinglleft: [333, 333, 333, 333, 333, 333, 333, 333, 600, 600, 600, 600],
                        guilsinglright: [333, 333, 333, 333, 333, 333, 333, 333, 600, 600, 600, 600],
                        fi: [611, 611, 500, 500, 556, 556, 500, 556, 600, 600, 600, 600],
                        fl: [611, 611, 500, 500, 556, 556, 500, 556, 600, 600, 600, 600],
                        endash: [556, 556, 556, 556, 500, 500, 500, 500, 600, 600, 600, 600],
                        dagger: [556, 556, 556, 556, 500, 500, 500, 500, 600, 600, 600, 600],
                        daggerdbl: [556, 556, 556, 556, 500, 500, 500, 500, 600, 600, 600, 600],
                        periodcentered: [278, 278, 278, 278, 250, 250, 250, 250, 600, 600, 600, 600],
                        paragraph: [556, 556, 537, 537, 540, 500, 523, 453, 600, 600, 600, 600],
                        bullet: [350, 350, 350, 350, 350, 350, 350, 350, 600, 600, 600, 600],
                        quotesinglbase: [278, 278, 222, 222, 333, 333, 333, 333, 600, 600, 600, 600],
                        quotedblbase: [500, 500, 333, 333, 500, 500, 556, 444, 600, 600, 600, 600],
                        quotedblright: [500, 500, 333, 333, 500, 500, 556, 444, 600, 600, 600, 600],
                        guillemotright: [556, 556, 556, 556, 500, 500, 500, 500, 600, 600, 600, 600],
                        ellipsis: [1e3, 1e3, 1e3, 1e3, 1e3, 1e3, 889, 1e3, 600, 600, 600, 600],
                        perthousand: [1e3, 1e3, 1e3, 1e3, 1e3, 1e3, 1e3, 1e3, 600, 600, 600, 600],
                        questiondown: [611, 611, 611, 611, 500, 500, 500, 444, 600, 600, 600, 600],
                        grave: [333, 333, 333, 333, 333, 333, 333, 333, 600, 600, 600, 600],
                        acute: [333, 333, 333, 333, 333, 333, 333, 333, 600, 600, 600, 600],
                        circumflex: [333, 333, 333, 333, 333, 333, 333, 333, 600, 600, 600, 600],
                        tilde: [333, 333, 333, 333, 333, 333, 333, 333, 600, 600, 600, 600],
                        macron: [333, 333, 333, 333, 333, 333, 333, 333, 600, 600, 600, 600],
                        breve: [333, 333, 333, 333, 333, 333, 333, 333, 600, 600, 600, 600],
                        dotaccent: [333, 333, 333, 333, 333, 333, 333, 333, 600, 600, 600, 600],
                        dieresis: [333, 333, 333, 333, 333, 333, 333, 333, 600, 600, 600, 600],
                        ring: [333, 333, 333, 333, 333, 333, 333, 333, 600, 600, 600, 600],
                        cedilla: [333, 333, 333, 333, 333, 333, 333, 333, 600, 600, 600, 600],
                        hungarumlaut: [333, 333, 333, 333, 333, 333, 333, 333, 600, 600, 600, 600],
                        ogonek: [333, 333, 333, 333, 333, 333, 333, 333, 600, 600, 600, 600],
                        caron: [333, 333, 333, 333, 333, 333, 333, 333, 600, 600, 600, 600],
                        emdash: [1e3, 1e3, 1e3, 1e3, 1e3, 1e3, 889, 1e3, 600, 600, 600, 600],
                        AE: [1e3, 1e3, 1e3, 1e3, 1e3, 944, 889, 889, 600, 600, 600, 600],
                        ordfeminine: [370, 370, 370, 370, 300, 266, 276, 276, 600, 600, 600, 600],
                        Lslash: [611, 611, 556, 556, 667, 611, 556, 611, 600, 600, 600, 600],
                        Oslash: [778, 778, 778, 778, 778, 722, 722, 722, 600, 600, 600, 600],
                        OE: [1e3, 1e3, 1e3, 1e3, 1e3, 944, 944, 889, 600, 600, 600, 600],
                        ordmasculine: [365, 365, 365, 365, 330, 300, 310, 310, 600, 600, 600, 600],
                        ae: [889, 889, 889, 889, 722, 722, 667, 667, 600, 600, 600, 600],
                        dotlessi: [278, 278, 278, 278, 278, 278, 278, 278, 600, 600, 600, 600],
                        lslash: [278, 278, 222, 222, 278, 278, 278, 278, 600, 600, 600, 600],
                        oslash: [611, 611, 611, 611, 500, 500, 500, 500, 600, 600, 600, 600],
                        oe: [944, 944, 944, 944, 722, 722, 667, 722, 600, 600, 600, 600],
                        germandbls: [611, 611, 611, 611, 556, 500, 500, 500, 600, 600, 600, 600],
                        Idieresis: [278, 278, 278, 278, 389, 389, 333, 333, 600, 600, 600, 600],
                        eacute: [556, 556, 556, 556, 444, 444, 444, 444, 600, 600, 600, 600],
                        abreve: [556, 556, 556, 556, 500, 500, 500, 444, 600, 600, 600, 600],
                        uhungarumlaut: [611, 611, 556, 556, 556, 556, 500, 500, 600, 600, 600, 600],
                        ecaron: [556, 556, 556, 556, 444, 444, 444, 444, 600, 600, 600, 600],
                        Ydieresis: [667, 667, 667, 667, 722, 611, 556, 722, 600, 600, 600, 600],
                        divide: [584, 584, 584, 584, 570, 570, 675, 564, 600, 600, 600, 600],
                        Yacute: [667, 667, 667, 667, 722, 611, 556, 722, 600, 600, 600, 600],
                        Acircumflex: [722, 722, 667, 667, 722, 667, 611, 722, 600, 600, 600, 600],
                        aacute: [556, 556, 556, 556, 500, 500, 500, 444, 600, 600, 600, 600],
                        Ucircumflex: [722, 722, 722, 722, 722, 722, 722, 722, 600, 600, 600, 600],
                        yacute: [556, 556, 500, 500, 500, 444, 444, 500, 600, 600, 600, 600],
                        scommaaccent: [556, 556, 500, 500, 389, 389, 389, 389, 600, 600, 600, 600],
                        ecircumflex: [556, 556, 556, 556, 444, 444, 444, 444, 600, 600, 600, 600],
                        Uring: [722, 722, 722, 722, 722, 722, 722, 722, 600, 600, 600, 600],
                        Udieresis: [722, 722, 722, 722, 722, 722, 722, 722, 600, 600, 600, 600],
                        aogonek: [556, 556, 556, 556, 500, 500, 500, 444, 600, 600, 600, 600],
                        Uacute: [722, 722, 722, 722, 722, 722, 722, 722, 600, 600, 600, 600],
                        uogonek: [611, 611, 556, 556, 556, 556, 500, 500, 600, 600, 600, 600],
                        Edieresis: [667, 667, 667, 667, 667, 667, 611, 611, 600, 600, 600, 600],
                        Dcroat: [722, 722, 722, 722, 722, 722, 722, 722, 600, 600, 600, 600],
                        commaaccent: [250, 250, 250, 250, 250, 250, 250, 250, 600, 600, 600, 600],
                        copyright: [737, 737, 737, 737, 747, 747, 760, 760, 600, 600, 600, 600],
                        Emacron: [667, 667, 667, 667, 667, 667, 611, 611, 600, 600, 600, 600],
                        ccaron: [556, 556, 500, 500, 444, 444, 444, 444, 600, 600, 600, 600],
                        aring: [556, 556, 556, 556, 500, 500, 500, 444, 600, 600, 600, 600],
                        Ncommaaccent: [722, 722, 722, 722, 722, 722, 667, 722, 600, 600, 600, 600],
                        lacute: [278, 278, 222, 222, 278, 278, 278, 278, 600, 600, 600, 600],
                        agrave: [556, 556, 556, 556, 500, 500, 500, 444, 600, 600, 600, 600],
                        Tcommaaccent: [611, 611, 611, 611, 667, 611, 556, 611, 600, 600, 600, 600],
                        Cacute: [722, 722, 722, 722, 722, 667, 667, 667, 600, 600, 600, 600],
                        atilde: [556, 556, 556, 556, 500, 500, 500, 444, 600, 600, 600, 600],
                        Edotaccent: [667, 667, 667, 667, 667, 667, 611, 611, 600, 600, 600, 600],
                        scaron: [556, 556, 500, 500, 389, 389, 389, 389, 600, 600, 600, 600],
                        scedilla: [556, 556, 500, 500, 389, 389, 389, 389, 600, 600, 600, 600],
                        iacute: [278, 278, 278, 278, 278, 278, 278, 278, 600, 600, 600, 600],
                        lozenge: [494, 494, 471, 471, 494, 494, 471, 471, 600, 600, 600, 600],
                        Rcaron: [722, 722, 722, 722, 722, 667, 611, 667, 600, 600, 600, 600],
                        Gcommaaccent: [778, 778, 778, 778, 778, 722, 722, 722, 600, 600, 600, 600],
                        ucircumflex: [611, 611, 556, 556, 556, 556, 500, 500, 600, 600, 600, 600],
                        acircumflex: [556, 556, 556, 556, 500, 500, 500, 444, 600, 600, 600, 600],
                        Amacron: [722, 722, 667, 667, 722, 667, 611, 722, 600, 600, 600, 600],
                        rcaron: [389, 389, 333, 333, 444, 389, 389, 333, 600, 600, 600, 600],
                        ccedilla: [556, 556, 500, 500, 444, 444, 444, 444, 600, 600, 600, 600],
                        Zdotaccent: [611, 611, 611, 611, 667, 611, 556, 611, 600, 600, 600, 600],
                        Thorn: [667, 667, 667, 667, 611, 611, 611, 556, 600, 600, 600, 600],
                        Omacron: [778, 778, 778, 778, 778, 722, 722, 722, 600, 600, 600, 600],
                        Racute: [722, 722, 722, 722, 722, 667, 611, 667, 600, 600, 600, 600],
                        Sacute: [667, 667, 667, 667, 556, 556, 500, 556, 600, 600, 600, 600],
                        dcaron: [743, 743, 643, 643, 672, 608, 544, 588, 600, 600, 600, 600],
                        Umacron: [722, 722, 722, 722, 722, 722, 722, 722, 600, 600, 600, 600],
                        uring: [611, 611, 556, 556, 556, 556, 500, 500, 600, 600, 600, 600],
                        threesuperior: [333, 333, 333, 333, 300, 300, 300, 300, 600, 600, 600, 600],
                        Ograve: [778, 778, 778, 778, 778, 722, 722, 722, 600, 600, 600, 600],
                        Agrave: [722, 722, 667, 667, 722, 667, 611, 722, 600, 600, 600, 600],
                        Abreve: [722, 722, 667, 667, 722, 667, 611, 722, 600, 600, 600, 600],
                        multiply: [584, 584, 584, 584, 570, 570, 675, 564, 600, 600, 600, 600],
                        uacute: [611, 611, 556, 556, 556, 556, 500, 500, 600, 600, 600, 600],
                        Tcaron: [611, 611, 611, 611, 667, 611, 556, 611, 600, 600, 600, 600],
                        partialdiff: [494, 494, 476, 476, 494, 494, 476, 476, 600, 600, 600, 600],
                        ydieresis: [556, 556, 500, 500, 500, 444, 444, 500, 600, 600, 600, 600],
                        Nacute: [722, 722, 722, 722, 722, 722, 667, 722, 600, 600, 600, 600],
                        icircumflex: [278, 278, 278, 278, 278, 278, 278, 278, 600, 600, 600, 600],
                        Ecircumflex: [667, 667, 667, 667, 667, 667, 611, 611, 600, 600, 600, 600],
                        adieresis: [556, 556, 556, 556, 500, 500, 500, 444, 600, 600, 600, 600],
                        edieresis: [556, 556, 556, 556, 444, 444, 444, 444, 600, 600, 600, 600],
                        cacute: [556, 556, 500, 500, 444, 444, 444, 444, 600, 600, 600, 600],
                        nacute: [611, 611, 556, 556, 556, 556, 500, 500, 600, 600, 600, 600],
                        umacron: [611, 611, 556, 556, 556, 556, 500, 500, 600, 600, 600, 600],
                        Ncaron: [722, 722, 722, 722, 722, 722, 667, 722, 600, 600, 600, 600],
                        Iacute: [278, 278, 278, 278, 389, 389, 333, 333, 600, 600, 600, 600],
                        plusminus: [584, 584, 584, 584, 570, 570, 675, 564, 600, 600, 600, 600],
                        brokenbar: [280, 280, 260, 260, 220, 220, 275, 200, 600, 600, 600, 600],
                        registered: [737, 737, 737, 737, 747, 747, 760, 760, 600, 600, 600, 600],
                        Gbreve: [778, 778, 778, 778, 778, 722, 722, 722, 600, 600, 600, 600],
                        Idotaccent: [278, 278, 278, 278, 389, 389, 333, 333, 600, 600, 600, 600],
                        summation: [600, 600, 600, 600, 600, 600, 600, 600, 600, 600, 600, 600],
                        Egrave: [667, 667, 667, 667, 667, 667, 611, 611, 600, 600, 600, 600],
                        racute: [389, 389, 333, 333, 444, 389, 389, 333, 600, 600, 600, 600],
                        omacron: [611, 611, 556, 556, 500, 500, 500, 500, 600, 600, 600, 600],
                        Zacute: [611, 611, 611, 611, 667, 611, 556, 611, 600, 600, 600, 600],
                        Zcaron: [611, 611, 611, 611, 667, 611, 556, 611, 600, 600, 600, 600],
                        greaterequal: [549, 549, 549, 549, 549, 549, 549, 549, 600, 600, 600, 600],
                        Eth: [722, 722, 722, 722, 722, 722, 722, 722, 600, 600, 600, 600],
                        Ccedilla: [722, 722, 722, 722, 722, 667, 667, 667, 600, 600, 600, 600],
                        lcommaaccent: [278, 278, 222, 222, 278, 278, 278, 278, 600, 600, 600, 600],
                        tcaron: [389, 389, 317, 317, 416, 366, 300, 326, 600, 600, 600, 600],
                        eogonek: [556, 556, 556, 556, 444, 444, 444, 444, 600, 600, 600, 600],
                        Uogonek: [722, 722, 722, 722, 722, 722, 722, 722, 600, 600, 600, 600],
                        Aacute: [722, 722, 667, 667, 722, 667, 611, 722, 600, 600, 600, 600],
                        Adieresis: [722, 722, 667, 667, 722, 667, 611, 722, 600, 600, 600, 600],
                        egrave: [556, 556, 556, 556, 444, 444, 444, 444, 600, 600, 600, 600],
                        zacute: [500, 500, 500, 500, 444, 389, 389, 444, 600, 600, 600, 600],
                        iogonek: [278, 278, 222, 222, 278, 278, 278, 278, 600, 600, 600, 600],
                        Oacute: [778, 778, 778, 778, 778, 722, 722, 722, 600, 600, 600, 600],
                        oacute: [611, 611, 556, 556, 500, 500, 500, 500, 600, 600, 600, 600],
                        amacron: [556, 556, 556, 556, 500, 500, 500, 444, 600, 600, 600, 600],
                        sacute: [556, 556, 500, 500, 389, 389, 389, 389, 600, 600, 600, 600],
                        idieresis: [278, 278, 278, 278, 278, 278, 278, 278, 600, 600, 600, 600],
                        Ocircumflex: [778, 778, 778, 778, 778, 722, 722, 722, 600, 600, 600, 600],
                        Ugrave: [722, 722, 722, 722, 722, 722, 722, 722, 600, 600, 600, 600],
                        Delta: [612, 612, 612, 612, 612, 612, 612, 612, 600, 600, 600, 600],
                        thorn: [611, 611, 556, 556, 556, 500, 500, 500, 600, 600, 600, 600],
                        twosuperior: [333, 333, 333, 333, 300, 300, 300, 300, 600, 600, 600, 600],
                        Odieresis: [778, 778, 778, 778, 778, 722, 722, 722, 600, 600, 600, 600],
                        mu: [611, 611, 556, 556, 556, 576, 500, 500, 600, 600, 600, 600],
                        igrave: [278, 278, 278, 278, 278, 278, 278, 278, 600, 600, 600, 600],
                        ohungarumlaut: [611, 611, 556, 556, 500, 500, 500, 500, 600, 600, 600, 600],
                        Eogonek: [667, 667, 667, 667, 667, 667, 611, 611, 600, 600, 600, 600],
                        dcroat: [611, 611, 556, 556, 556, 500, 500, 500, 600, 600, 600, 600],
                        threequarters: [834, 834, 834, 834, 750, 750, 750, 750, 600, 600, 600, 600],
                        Scedilla: [667, 667, 667, 667, 556, 556, 500, 556, 600, 600, 600, 600],
                        lcaron: [400, 400, 299, 299, 394, 382, 300, 344, 600, 600, 600, 600],
                        Kcommaaccent: [722, 722, 667, 667, 778, 667, 667, 722, 600, 600, 600, 600],
                        Lacute: [611, 611, 556, 556, 667, 611, 556, 611, 600, 600, 600, 600],
                        trademark: [1e3, 1e3, 1e3, 1e3, 1e3, 1e3, 980, 980, 600, 600, 600, 600],
                        edotaccent: [556, 556, 556, 556, 444, 444, 444, 444, 600, 600, 600, 600],
                        Igrave: [278, 278, 278, 278, 389, 389, 333, 333, 600, 600, 600, 600],
                        Imacron: [278, 278, 278, 278, 389, 389, 333, 333, 600, 600, 600, 600],
                        Lcaron: [611, 611, 556, 556, 667, 611, 611, 611, 600, 600, 600, 600],
                        onehalf: [834, 834, 834, 834, 750, 750, 750, 750, 600, 600, 600, 600],
                        lessequal: [549, 549, 549, 549, 549, 549, 549, 549, 600, 600, 600, 600],
                        ocircumflex: [611, 611, 556, 556, 500, 500, 500, 500, 600, 600, 600, 600],
                        ntilde: [611, 611, 556, 556, 556, 556, 500, 500, 600, 600, 600, 600],
                        Uhungarumlaut: [722, 722, 722, 722, 722, 722, 722, 722, 600, 600, 600, 600],
                        Eacute: [667, 667, 667, 667, 667, 667, 611, 611, 600, 600, 600, 600],
                        emacron: [556, 556, 556, 556, 444, 444, 444, 444, 600, 600, 600, 600],
                        gbreve: [611, 611, 556, 556, 500, 500, 500, 500, 600, 600, 600, 600],
                        onequarter: [834, 834, 834, 834, 750, 750, 750, 750, 600, 600, 600, 600],
                        Scaron: [667, 667, 667, 667, 556, 556, 500, 556, 600, 600, 600, 600],
                        Scommaaccent: [667, 667, 667, 667, 556, 556, 500, 556, 600, 600, 600, 600],
                        Ohungarumlaut: [778, 778, 778, 778, 778, 722, 722, 722, 600, 600, 600, 600],
                        degree: [400, 400, 400, 400, 400, 400, 400, 400, 600, 600, 600, 600],
                        ograve: [611, 611, 556, 556, 500, 500, 500, 500, 600, 600, 600, 600],
                        Ccaron: [722, 722, 722, 722, 722, 667, 667, 667, 600, 600, 600, 600],
                        ugrave: [611, 611, 556, 556, 556, 556, 500, 500, 600, 600, 600, 600],
                        radical: [549, 549, 453, 453, 549, 549, 453, 453, 600, 600, 600, 600],
                        Dcaron: [722, 722, 722, 722, 722, 722, 722, 722, 600, 600, 600, 600],
                        rcommaaccent: [389, 389, 333, 333, 444, 389, 389, 333, 600, 600, 600, 600],
                        Ntilde: [722, 722, 722, 722, 722, 722, 667, 722, 600, 600, 600, 600],
                        otilde: [611, 611, 556, 556, 500, 500, 500, 500, 600, 600, 600, 600],
                        Rcommaaccent: [722, 722, 722, 722, 722, 667, 611, 667, 600, 600, 600, 600],
                        Lcommaaccent: [611, 611, 556, 556, 667, 611, 556, 611, 600, 600, 600, 600],
                        Atilde: [722, 722, 667, 667, 722, 667, 611, 722, 600, 600, 600, 600],
                        Aogonek: [722, 722, 667, 667, 722, 667, 611, 722, 600, 600, 600, 600],
                        Aring: [722, 722, 667, 667, 722, 667, 611, 722, 600, 600, 600, 600],
                        Otilde: [778, 778, 778, 778, 778, 722, 722, 722, 600, 600, 600, 600],
                        zdotaccent: [500, 500, 500, 500, 444, 389, 389, 444, 600, 600, 600, 600],
                        Ecaron: [667, 667, 667, 667, 667, 667, 611, 611, 600, 600, 600, 600],
                        Iogonek: [278, 278, 278, 278, 389, 389, 333, 333, 600, 600, 600, 600],
                        kcommaaccent: [556, 556, 500, 500, 556, 500, 444, 500, 600, 600, 600, 600],
                        minus: [584, 584, 584, 584, 570, 606, 675, 564, 600, 600, 600, 600],
                        Icircumflex: [278, 278, 278, 278, 389, 389, 333, 333, 600, 600, 600, 600],
                        ncaron: [611, 611, 556, 556, 556, 556, 500, 500, 600, 600, 600, 600],
                        tcommaaccent: [333, 333, 278, 278, 333, 278, 278, 278, 600, 600, 600, 600],
                        logicalnot: [584, 584, 584, 584, 570, 606, 675, 564, 600, 600, 600, 600],
                        odieresis: [611, 611, 556, 556, 500, 500, 500, 500, 600, 600, 600, 600],
                        udieresis: [611, 611, 556, 556, 556, 556, 500, 500, 600, 600, 600, 600],
                        notequal: [549, 549, 549, 549, 549, 549, 549, 549, 600, 600, 600, 600],
                        gcommaaccent: [611, 611, 556, 556, 500, 500, 500, 500, 600, 600, 600, 600],
                        eth: [611, 611, 556, 556, 500, 500, 500, 500, 600, 600, 600, 600],
                        zcaron: [500, 500, 500, 500, 444, 389, 389, 444, 600, 600, 600, 600],
                        ncommaaccent: [611, 611, 556, 556, 556, 556, 500, 500, 600, 600, 600, 600],
                        onesuperior: [333, 333, 333, 333, 300, 300, 300, 300, 600, 600, 600, 600],
                        imacron: [278, 278, 278, 278, 278, 278, 278, 278, 600, 600, 600, 600],
                        Euro: [556, 556, 556, 556, 500, 500, 500, 500, 600, 600, 600, 600]
                    },
                    kernPairs: {
                        AC: [-40, -40, -30, -30, -55, -65, -30, -40],
                        ACacute: [-40, -40, -30, -30, -55, -65, -30, -40],
                        ACcaron: [-40, -40, -30, -30, -55, -65, -30, -40],
                        ACcedilla: [-40, -40, -30, -30, -55, -65, -30, -40],
                        AG: [-50, -50, -30, -30, -55, -60, -35, -40],
                        AGbreve: [-50, -50, -30, -30, -55, -60, -35, -40],
                        AGcommaaccent: [-50, -50, -30, -30, -55, -60, -35, -40],
                        AO: [-40, -40, -30, -30, -45, -50, -40, -55],
                        AOacute: [-40, -40, -30, -30, -45, -50, -40, -55],
                        AOcircumflex: [-40, -40, -30, -30, -45, -50, -40, -55],
                        AOdieresis: [-40, -40, -30, -30, -45, -50, -40, -55],
                        AOgrave: [-40, -40, -30, -30, -45, -50, -40, -55],
                        AOhungarumlaut: [-40, -40, -30, -30, -45, -50, -40, -55],
                        AOmacron: [-40, -40, -30, -30, -45, -50, -40, -55],
                        AOslash: [-40, -40, -30, -30, -45, -50, -40, -55],
                        AOtilde: [-40, -40, -30, -30, -45, -50, -40, -55],
                        AQ: [-40, -40, -30, -30, -45, -55, -40, -55],
                        AT: [-90, -90, -120, -120, -95, -55, -37, -111],
                        ATcaron: [-90, -90, -120, -120, -95, -55, -37, -111],
                        ATcommaaccent: [-90, -90, -120, -120, -95, -55, -37, -111],
                        AU: [-50, -50, -50, -50, -50, -50, -50, -55],
                        AUacute: [-50, -50, -50, -50, -50, -50, -50, -55],
                        AUcircumflex: [-50, -50, -50, -50, -50, -50, -50, -55],
                        AUdieresis: [-50, -50, -50, -50, -50, -50, -50, -55],
                        AUgrave: [-50, -50, -50, -50, -50, -50, -50, -55],
                        AUhungarumlaut: [-50, -50, -50, -50, -50, -50, -50, -55],
                        AUmacron: [-50, -50, -50, -50, -50, -50, -50, -55],
                        AUogonek: [-50, -50, -50, -50, -50, -50, -50, -55],
                        AUring: [-50, -50, -50, -50, -50, -50, -50, -55],
                        AV: [-80, -80, -70, -70, -145, -95, -105, -135],
                        AW: [-60, -60, -50, -50, -130, -100, -95, -90],
                        AY: [-110, -110, -100, -100, -100, -70, -55, -105],
                        AYacute: [-110, -110, -100, -100, -100, -70, -55, -105],
                        AYdieresis: [-110, -110, -100, -100, -100, -70, -55, -105],
                        Au: [-30, -30, -30, -30, -50, -30, -20],
                        Auacute: [-30, -30, -30, -30, -50, -30, -20],
                        Aucircumflex: [-30, -30, -30, -30, -50, -30, -20],
                        Audieresis: [-30, -30, -30, -30, -50, -30, -20],
                        Augrave: [-30, -30, -30, -30, -50, -30, -20],
                        Auhungarumlaut: [-30, -30, -30, -30, -50, -30, -20],
                        Aumacron: [-30, -30, -30, -30, -50, -30, -20],
                        Auogonek: [-30, -30, -30, -30, -50, -30, -20],
                        Auring: [-30, -30, -30, -30, -50, -30, -20],
                        Av: [-40, -40, -40, -40, -100, -74, -55, -74],
                        Aw: [-30, -30, -40, -40, -90, -74, -55, -92],
                        Ay: [-30, -30, -40, -40, -74, -74, -55, -92],
                        Ayacute: [-30, -30, -40, -40, -74, -74, -55, -92],
                        Aydieresis: [-30, -30, -40, -40, -74, -74, -55, -92],
                        AacuteC: [-40, -40, -30, -30, -55, -65, -30, -40],
                        AacuteCacute: [-40, -40, -30, -30, -55, -65, -30, -40],
                        AacuteCcaron: [-40, -40, -30, -30, -55, -65, -30, -40],
                        AacuteCcedilla: [-40, -40, -30, -30, -55, -65, -30, -40],
                        AacuteG: [-50, -50, -30, -30, -55, -60, -35, -40],
                        AacuteGbreve: [-50, -50, -30, -30, -55, -60, -35, -40],
                        AacuteGcommaaccent: [-50, -50, -30, -30, -55, -60, -35, -40],
                        AacuteO: [-40, -40, -30, -30, -45, -50, -40, -55],
                        AacuteOacute: [-40, -40, -30, -30, -45, -50, -40, -55],
                        AacuteOcircumflex: [-40, -40, -30, -30, -45, -50, -40, -55],
                        AacuteOdieresis: [-40, -40, -30, -30, -45, -50, -40, -55],
                        AacuteOgrave: [-40, -40, -30, -30, -45, -50, -40, -55],
                        AacuteOhungarumlaut: [-40, -40, -30, -30, -45, -50, -40, -55],
                        AacuteOmacron: [-40, -40, -30, -30, -45, -50, -40, -55],
                        AacuteOslash: [-40, -40, -30, -30, -45, -50, -40, -55],
                        AacuteOtilde: [-40, -40, -30, -30, -45, -50, -40, -55],
                        AacuteQ: [-40, -40, -30, -30, -45, -55, -40, -55],
                        AacuteT: [-90, -90, -120, -120, -95, -55, -37, -111],
                        AacuteTcaron: [-90, -90, -120, -120, -95, -55, -37, -111],
                        AacuteTcommaaccent: [-90, -90, -120, -120, -95, -55, -37, -111],
                        AacuteU: [-50, -50, -50, -50, -50, -50, -50, -55],
                        AacuteUacute: [-50, -50, -50, -50, -50, -50, -50, -55],
                        AacuteUcircumflex: [-50, -50, -50, -50, -50, -50, -50, -55],
                        AacuteUdieresis: [-50, -50, -50, -50, -50, -50, -50, -55],
                        AacuteUgrave: [-50, -50, -50, -50, -50, -50, -50, -55],
                        AacuteUhungarumlaut: [-50, -50, -50, -50, -50, -50, -50, -55],
                        AacuteUmacron: [-50, -50, -50, -50, -50, -50, -50, -55],
                        AacuteUogonek: [-50, -50, -50, -50, -50, -50, -50, -55],
                        AacuteUring: [-50, -50, -50, -50, -50, -50, -50, -55],
                        AacuteV: [-80, -80, -70, -70, -145, -95, -105, -135],
                        AacuteW: [-60, -60, -50, -50, -130, -100, -95, -90],
                        AacuteY: [-110, -110, -100, -100, -100, -70, -55, -105],
                        AacuteYacute: [-110, -110, -100, -100, -100, -70, -55, -105],
                        AacuteYdieresis: [-110, -110, -100, -100, -100, -70, -55, -105],
                        Aacuteu: [-30, -30, -30, -30, -50, -30, -20],
                        Aacuteuacute: [-30, -30, -30, -30, -50, -30, -20],
                        Aacuteucircumflex: [-30, -30, -30, -30, -50, -30, -20],
                        Aacuteudieresis: [-30, -30, -30, -30, -50, -30, -20],
                        Aacuteugrave: [-30, -30, -30, -30, -50, -30, -20],
                        Aacuteuhungarumlaut: [-30, -30, -30, -30, -50, -30, -20],
                        Aacuteumacron: [-30, -30, -30, -30, -50, -30, -20],
                        Aacuteuogonek: [-30, -30, -30, -30, -50, -30, -20],
                        Aacuteuring: [-30, -30, -30, -30, -50, -30, -20],
                        Aacutev: [-40, -40, -40, -40, -100, -74, -55, -74],
                        Aacutew: [-30, -30, -40, -40, -90, -74, -55, -92],
                        Aacutey: [-30, -30, -40, -40, -74, -74, -55, -92],
                        Aacuteyacute: [-30, -30, -40, -40, -74, -74, -55, -92],
                        Aacuteydieresis: [-30, -30, -40, -40, -74, -74, -55, -92],
                        AbreveC: [-40, -40, -30, -30, -55, -65, -30, -40],
                        AbreveCacute: [-40, -40, -30, -30, -55, -65, -30, -40],
                        AbreveCcaron: [-40, -40, -30, -30, -55, -65, -30, -40],
                        AbreveCcedilla: [-40, -40, -30, -30, -55, -65, -30, -40],
                        AbreveG: [-50, -50, -30, -30, -55, -60, -35, -40],
                        AbreveGbreve: [-50, -50, -30, -30, -55, -60, -35, -40],
                        AbreveGcommaaccent: [-50, -50, -30, -30, -55, -60, -35, -40],
                        AbreveO: [-40, -40, -30, -30, -45, -50, -40, -55],
                        AbreveOacute: [-40, -40, -30, -30, -45, -50, -40, -55],
                        AbreveOcircumflex: [-40, -40, -30, -30, -45, -50, -40, -55],
                        AbreveOdieresis: [-40, -40, -30, -30, -45, -50, -40, -55],
                        AbreveOgrave: [-40, -40, -30, -30, -45, -50, -40, -55],
                        AbreveOhungarumlaut: [-40, -40, -30, -30, -45, -50, -40, -55],
                        AbreveOmacron: [-40, -40, -30, -30, -45, -50, -40, -55],
                        AbreveOslash: [-40, -40, -30, -30, -45, -50, -40, -55],
                        AbreveOtilde: [-40, -40, -30, -30, -45, -50, -40, -55],
                        AbreveQ: [-40, -40, -30, -30, -45, -55, -40, -55],
                        AbreveT: [-90, -90, -120, -120, -95, -55, -37, -111],
                        AbreveTcaron: [-90, -90, -120, -120, -95, -55, -37, -111],
                        AbreveTcommaaccent: [-90, -90, -120, -120, -95, -55, -37, -111],
                        AbreveU: [-50, -50, -50, -50, -50, -50, -50, -55],
                        AbreveUacute: [-50, -50, -50, -50, -50, -50, -50, -55],
                        AbreveUcircumflex: [-50, -50, -50, -50, -50, -50, -50, -55],
                        AbreveUdieresis: [-50, -50, -50, -50, -50, -50, -50, -55],
                        AbreveUgrave: [-50, -50, -50, -50, -50, -50, -50, -55],
                        AbreveUhungarumlaut: [-50, -50, -50, -50, -50, -50, -50, -55],
                        AbreveUmacron: [-50, -50, -50, -50, -50, -50, -50, -55],
                        AbreveUogonek: [-50, -50, -50, -50, -50, -50, -50, -55],
                        AbreveUring: [-50, -50, -50, -50, -50, -50, -50, -55],
                        AbreveV: [-80, -80, -70, -70, -145, -95, -105, -135],
                        AbreveW: [-60, -60, -50, -50, -130, -100, -95, -90],
                        AbreveY: [-110, -110, -100, -100, -100, -70, -55, -105],
                        AbreveYacute: [-110, -110, -100, -100, -100, -70, -55, -105],
                        AbreveYdieresis: [-110, -110, -100, -100, -100, -70, -55, -105],
                        Abreveu: [-30, -30, -30, -30, -50, -30, -20],
                        Abreveuacute: [-30, -30, -30, -30, -50, -30, -20],
                        Abreveucircumflex: [-30, -30, -30, -30, -50, -30, -20],
                        Abreveudieresis: [-30, -30, -30, -30, -50, -30, -20],
                        Abreveugrave: [-30, -30, -30, -30, -50, -30, -20],
                        Abreveuhungarumlaut: [-30, -30, -30, -30, -50, -30, -20],
                        Abreveumacron: [-30, -30, -30, -30, -50, -30, -20],
                        Abreveuogonek: [-30, -30, -30, -30, -50, -30, -20],
                        Abreveuring: [-30, -30, -30, -30, -50, -30, -20],
                        Abrevev: [-40, -40, -40, -40, -100, -74, -55, -74],
                        Abrevew: [-30, -30, -40, -40, -90, -74, -55, -92],
                        Abrevey: [-30, -30, -40, -40, -74, -74, -55, -92],
                        Abreveyacute: [-30, -30, -40, -40, -74, -74, -55, -92],
                        Abreveydieresis: [-30, -30, -40, -40, -74, -74, -55, -92],
                        AcircumflexC: [-40, -40, -30, -30, -55, -65, -30, -40],
                        AcircumflexCacute: [-40, -40, -30, -30, -55, -65, -30, -40],
                        AcircumflexCcaron: [-40, -40, -30, -30, -55, -65, -30, -40],
                        AcircumflexCcedilla: [-40, -40, -30, -30, -55, -65, -30, -40],
                        AcircumflexG: [-50, -50, -30, -30, -55, -60, -35, -40],
                        AcircumflexGbreve: [-50, -50, -30, -30, -55, -60, -35, -40],
                        AcircumflexGcommaaccent: [-50, -50, -30, -30, -55, -60, -35, -40],
                        AcircumflexO: [-40, -40, -30, -30, -45, -50, -40, -55],
                        AcircumflexOacute: [-40, -40, -30, -30, -45, -50, -40, -55],
                        AcircumflexOcircumflex: [-40, -40, -30, -30, -45, -50, -40, -55],
                        AcircumflexOdieresis: [-40, -40, -30, -30, -45, -50, -40, -55],
                        AcircumflexOgrave: [-40, -40, -30, -30, -45, -50, -40, -55],
                        AcircumflexOhungarumlaut: [-40, -40, -30, -30, -45, -50, -40, -55],
                        AcircumflexOmacron: [-40, -40, -30, -30, -45, -50, -40, -55],
                        AcircumflexOslash: [-40, -40, -30, -30, -45, -50, -40, -55],
                        AcircumflexOtilde: [-40, -40, -30, -30, -45, -50, -40, -55],
                        AcircumflexQ: [-40, -40, -30, -30, -45, -55, -40, -55],
                        AcircumflexT: [-90, -90, -120, -120, -95, -55, -37, -111],
                        AcircumflexTcaron: [-90, -90, -120, -120, -95, -55, -37, -111],
                        AcircumflexTcommaaccent: [-90, -90, -120, -120, -95, -55, -37, -111],
                        AcircumflexU: [-50, -50, -50, -50, -50, -50, -50, -55],
                        AcircumflexUacute: [-50, -50, -50, -50, -50, -50, -50, -55],
                        AcircumflexUcircumflex: [-50, -50, -50, -50, -50, -50, -50, -55],
                        AcircumflexUdieresis: [-50, -50, -50, -50, -50, -50, -50, -55],
                        AcircumflexUgrave: [-50, -50, -50, -50, -50, -50, -50, -55],
                        AcircumflexUhungarumlaut: [-50, -50, -50, -50, -50, -50, -50, -55],
                        AcircumflexUmacron: [-50, -50, -50, -50, -50, -50, -50, -55],
                        AcircumflexUogonek: [-50, -50, -50, -50, -50, -50, -50, -55],
                        AcircumflexUring: [-50, -50, -50, -50, -50, -50, -50, -55],
                        AcircumflexV: [-80, -80, -70, -70, -145, -95, -105, -135],
                        AcircumflexW: [-60, -60, -50, -50, -130, -100, -95, -90],
                        AcircumflexY: [-110, -110, -100, -100, -100, -70, -55, -105],
                        AcircumflexYacute: [-110, -110, -100, -100, -100, -70, -55, -105],
                        AcircumflexYdieresis: [-110, -110, -100, -100, -100, -70, -55, -105],
                        Acircumflexu: [-30, -30, -30, -30, -50, -30, -20],
                        Acircumflexuacute: [-30, -30, -30, -30, -50, -30, -20],
                        Acircumflexucircumflex: [-30, -30, -30, -30, -50, -30, -20],
                        Acircumflexudieresis: [-30, -30, -30, -30, -50, -30, -20],
                        Acircumflexugrave: [-30, -30, -30, -30, -50, -30, -20],
                        Acircumflexuhungarumlaut: [-30, -30, -30, -30, -50, -30, -20],
                        Acircumflexumacron: [-30, -30, -30, -30, -50, -30, -20],
                        Acircumflexuogonek: [-30, -30, -30, -30, -50, -30, -20],
                        Acircumflexuring: [-30, -30, -30, -30, -50, -30, -20],
                        Acircumflexv: [-40, -40, -40, -40, -100, -74, -55, -74],
                        Acircumflexw: [-30, -30, -40, -40, -90, -74, -55, -92],
                        Acircumflexy: [-30, -30, -40, -40, -74, -74, -55, -92],
                        Acircumflexyacute: [-30, -30, -40, -40, -74, -74, -55, -92],
                        Acircumflexydieresis: [-30, -30, -40, -40, -74, -74, -55, -92],
                        AdieresisC: [-40, -40, -30, -30, -55, -65, -30, -40],
                        AdieresisCacute: [-40, -40, -30, -30, -55, -65, -30, -40],
                        AdieresisCcaron: [-40, -40, -30, -30, -55, -65, -30, -40],
                        AdieresisCcedilla: [-40, -40, -30, -30, -55, -65, -30, -40],
                        AdieresisG: [-50, -50, -30, -30, -55, -60, -35, -40],
                        AdieresisGbreve: [-50, -50, -30, -30, -55, -60, -35, -40],
                        AdieresisGcommaaccent: [-50, -50, -30, -30, -55, -60, -35, -40],
                        AdieresisO: [-40, -40, -30, -30, -45, -50, -40, -55],
                        AdieresisOacute: [-40, -40, -30, -30, -45, -50, -40, -55],
                        AdieresisOcircumflex: [-40, -40, -30, -30, -45, -50, -40, -55],
                        AdieresisOdieresis: [-40, -40, -30, -30, -45, -50, -40, -55],
                        AdieresisOgrave: [-40, -40, -30, -30, -45, -50, -40, -55],
                        AdieresisOhungarumlaut: [-40, -40, -30, -30, -45, -50, -40, -55],
                        AdieresisOmacron: [-40, -40, -30, -30, -45, -50, -40, -55],
                        AdieresisOslash: [-40, -40, -30, -30, -45, -50, -40, -55],
                        AdieresisOtilde: [-40, -40, -30, -30, -45, -50, -40, -55],
                        AdieresisQ: [-40, -40, -30, -30, -45, -55, -40, -55],
                        AdieresisT: [-90, -90, -120, -120, -95, -55, -37, -111],
                        AdieresisTcaron: [-90, -90, -120, -120, -95, -55, -37, -111],
                        AdieresisTcommaaccent: [-90, -90, -120, -120, -95, -55, -37, -111],
                        AdieresisU: [-50, -50, -50, -50, -50, -50, -50, -55],
                        AdieresisUacute: [-50, -50, -50, -50, -50, -50, -50, -55],
                        AdieresisUcircumflex: [-50, -50, -50, -50, -50, -50, -50, -55],
                        AdieresisUdieresis: [-50, -50, -50, -50, -50, -50, -50, -55],
                        AdieresisUgrave: [-50, -50, -50, -50, -50, -50, -50, -55],
                        AdieresisUhungarumlaut: [-50, -50, -50, -50, -50, -50, -50, -55],
                        AdieresisUmacron: [-50, -50, -50, -50, -50, -50, -50, -55],
                        AdieresisUogonek: [-50, -50, -50, -50, -50, -50, -50, -55],
                        AdieresisUring: [-50, -50, -50, -50, -50, -50, -50, -55],
                        AdieresisV: [-80, -80, -70, -70, -145, -95, -105, -135],
                        AdieresisW: [-60, -60, -50, -50, -130, -100, -95, -90],
                        AdieresisY: [-110, -110, -100, -100, -100, -70, -55, -105],
                        AdieresisYacute: [-110, -110, -100, -100, -100, -70, -55, -105],
                        AdieresisYdieresis: [-110, -110, -100, -100, -100, -70, -55, -105],
                        Adieresisu: [-30, -30, -30, -30, -50, -30, -20],
                        Adieresisuacute: [-30, -30, -30, -30, -50, -30, -20],
                        Adieresisucircumflex: [-30, -30, -30, -30, -50, -30, -20],
                        Adieresisudieresis: [-30, -30, -30, -30, -50, -30, -20],
                        Adieresisugrave: [-30, -30, -30, -30, -50, -30, -20],
                        Adieresisuhungarumlaut: [-30, -30, -30, -30, -50, -30, -20],
                        Adieresisumacron: [-30, -30, -30, -30, -50, -30, -20],
                        Adieresisuogonek: [-30, -30, -30, -30, -50, -30, -20],
                        Adieresisuring: [-30, -30, -30, -30, -50, -30, -20],
                        Adieresisv: [-40, -40, -40, -40, -100, -74, -55, -74],
                        Adieresisw: [-30, -30, -40, -40, -90, -74, -55, -92],
                        Adieresisy: [-30, -30, -40, -40, -74, -74, -55, -92],
                        Adieresisyacute: [-30, -30, -40, -40, -74, -74, -55, -92],
                        Adieresisydieresis: [-30, -30, -40, -40, -74, -74, -55, -92],
                        AgraveC: [-40, -40, -30, -30, -55, -65, -30, -40],
                        AgraveCacute: [-40, -40, -30, -30, -55, -65, -30, -40],
                        AgraveCcaron: [-40, -40, -30, -30, -55, -65, -30, -40],
                        AgraveCcedilla: [-40, -40, -30, -30, -55, -65, -30, -40],
                        AgraveG: [-50, -50, -30, -30, -55, -60, -35, -40],
                        AgraveGbreve: [-50, -50, -30, -30, -55, -60, -35, -40],
                        AgraveGcommaaccent: [-50, -50, -30, -30, -55, -60, -35, -40],
                        AgraveO: [-40, -40, -30, -30, -45, -50, -40, -55],
                        AgraveOacute: [-40, -40, -30, -30, -45, -50, -40, -55],
                        AgraveOcircumflex: [-40, -40, -30, -30, -45, -50, -40, -55],
                        AgraveOdieresis: [-40, -40, -30, -30, -45, -50, -40, -55],
                        AgraveOgrave: [-40, -40, -30, -30, -45, -50, -40, -55],
                        AgraveOhungarumlaut: [-40, -40, -30, -30, -45, -50, -40, -55],
                        AgraveOmacron: [-40, -40, -30, -30, -45, -50, -40, -55],
                        AgraveOslash: [-40, -40, -30, -30, -45, -50, -40, -55],
                        AgraveOtilde: [-40, -40, -30, -30, -45, -50, -40, -55],
                        AgraveQ: [-40, -40, -30, -30, -45, -55, -40, -55],
                        AgraveT: [-90, -90, -120, -120, -95, -55, -37, -111],
                        AgraveTcaron: [-90, -90, -120, -120, -95, -55, -37, -111],
                        AgraveTcommaaccent: [-90, -90, -120, -120, -95, -55, -37, -111],
                        AgraveU: [-50, -50, -50, -50, -50, -50, -50, -55],
                        AgraveUacute: [-50, -50, -50, -50, -50, -50, -50, -55],
                        AgraveUcircumflex: [-50, -50, -50, -50, -50, -50, -50, -55],
                        AgraveUdieresis: [-50, -50, -50, -50, -50, -50, -50, -55],
                        AgraveUgrave: [-50, -50, -50, -50, -50, -50, -50, -55],
                        AgraveUhungarumlaut: [-50, -50, -50, -50, -50, -50, -50, -55],
                        AgraveUmacron: [-50, -50, -50, -50, -50, -50, -50, -55],
                        AgraveUogonek: [-50, -50, -50, -50, -50, -50, -50, -55],
                        AgraveUring: [-50, -50, -50, -50, -50, -50, -50, -55],
                        AgraveV: [-80, -80, -70, -70, -145, -95, -105, -135],
                        AgraveW: [-60, -60, -50, -50, -130, -100, -95, -90],
                        AgraveY: [-110, -110, -100, -100, -100, -70, -55, -105],
                        AgraveYacute: [-110, -110, -100, -100, -100, -70, -55, -105],
                        AgraveYdieresis: [-110, -110, -100, -100, -100, -70, -55, -105],
                        Agraveu: [-30, -30, -30, -30, -50, -30, -20],
                        Agraveuacute: [-30, -30, -30, -30, -50, -30, -20],
                        Agraveucircumflex: [-30, -30, -30, -30, -50, -30, -20],
                        Agraveudieresis: [-30, -30, -30, -30, -50, -30, -20],
                        Agraveugrave: [-30, -30, -30, -30, -50, -30, -20],
                        Agraveuhungarumlaut: [-30, -30, -30, -30, -50, -30, -20],
                        Agraveumacron: [-30, -30, -30, -30, -50, -30, -20],
                        Agraveuogonek: [-30, -30, -30, -30, -50, -30, -20],
                        Agraveuring: [-30, -30, -30, -30, -50, -30, -20],
                        Agravev: [-40, -40, -40, -40, -100, -74, -55, -74],
                        Agravew: [-30, -30, -40, -40, -90, -74, -55, -92],
                        Agravey: [-30, -30, -40, -40, -74, -74, -55, -92],
                        Agraveyacute: [-30, -30, -40, -40, -74, -74, -55, -92],
                        Agraveydieresis: [-30, -30, -40, -40, -74, -74, -55, -92],
                        AmacronC: [-40, -40, -30, -30, -55, -65, -30, -40],
                        AmacronCacute: [-40, -40, -30, -30, -55, -65, -30, -40],
                        AmacronCcaron: [-40, -40, -30, -30, -55, -65, -30, -40],
                        AmacronCcedilla: [-40, -40, -30, -30, -55, -65, -30, -40],
                        AmacronG: [-50, -50, -30, -30, -55, -60, -35, -40],
                        AmacronGbreve: [-50, -50, -30, -30, -55, -60, -35, -40],
                        AmacronGcommaaccent: [-50, -50, -30, -30, -55, -60, -35, -40],
                        AmacronO: [-40, -40, -30, -30, -45, -50, -40, -55],
                        AmacronOacute: [-40, -40, -30, -30, -45, -50, -40, -55],
                        AmacronOcircumflex: [-40, -40, -30, -30, -45, -50, -40, -55],
                        AmacronOdieresis: [-40, -40, -30, -30, -45, -50, -40, -55],
                        AmacronOgrave: [-40, -40, -30, -30, -45, -50, -40, -55],
                        AmacronOhungarumlaut: [-40, -40, -30, -30, -45, -50, -40, -55],
                        AmacronOmacron: [-40, -40, -30, -30, -45, -50, -40, -55],
                        AmacronOslash: [-40, -40, -30, -30, -45, -50, -40, -55],
                        AmacronOtilde: [-40, -40, -30, -30, -45, -50, -40, -55],
                        AmacronQ: [-40, -40, -30, -30, -45, -55, -40, -55],
                        AmacronT: [-90, -90, -120, -120, -95, -55, -37, -111],
                        AmacronTcaron: [-90, -90, -120, -120, -95, -55, -37, -111],
                        AmacronTcommaaccent: [-90, -90, -120, -120, -95, -55, -37, -111],
                        AmacronU: [-50, -50, -50, -50, -50, -50, -50, -55],
                        AmacronUacute: [-50, -50, -50, -50, -50, -50, -50, -55],
                        AmacronUcircumflex: [-50, -50, -50, -50, -50, -50, -50, -55],
                        AmacronUdieresis: [-50, -50, -50, -50, -50, -50, -50, -55],
                        AmacronUgrave: [-50, -50, -50, -50, -50, -50, -50, -55],
                        AmacronUhungarumlaut: [-50, -50, -50, -50, -50, -50, -50, -55],
                        AmacronUmacron: [-50, -50, -50, -50, -50, -50, -50, -55],
                        AmacronUogonek: [-50, -50, -50, -50, -50, -50, -50, -55],
                        AmacronUring: [-50, -50, -50, -50, -50, -50, -50, -55],
                        AmacronV: [-80, -80, -70, -70, -145, -95, -105, -135],
                        AmacronW: [-60, -60, -50, -50, -130, -100, -95, -90],
                        AmacronY: [-110, -110, -100, -100, -100, -70, -55, -105],
                        AmacronYacute: [-110, -110, -100, -100, -100, -70, -55, -105],
                        AmacronYdieresis: [-110, -110, -100, -100, -100, -70, -55, -105],
                        Amacronu: [-30, -30, -30, -30, -50, -30, -20],
                        Amacronuacute: [-30, -30, -30, -30, -50, -30, -20],
                        Amacronucircumflex: [-30, -30, -30, -30, -50, -30, -20],
                        Amacronudieresis: [-30, -30, -30, -30, -50, -30, -20],
                        Amacronugrave: [-30, -30, -30, -30, -50, -30, -20],
                        Amacronuhungarumlaut: [-30, -30, -30, -30, -50, -30, -20],
                        Amacronumacron: [-30, -30, -30, -30, -50, -30, -20],
                        Amacronuogonek: [-30, -30, -30, -30, -50, -30, -20],
                        Amacronuring: [-30, -30, -30, -30, -50, -30, -20],
                        Amacronv: [-40, -40, -40, -40, -100, -74, -55, -74],
                        Amacronw: [-30, -30, -40, -40, -90, -74, -55, -92],
                        Amacrony: [-30, -30, -40, -40, -74, -74, -55, -92],
                        Amacronyacute: [-30, -30, -40, -40, -74, -74, -55, -92],
                        Amacronydieresis: [-30, -30, -40, -40, -74, -74, -55, -92],
                        AogonekC: [-40, -40, -30, -30, -55, -65, -30, -40],
                        AogonekCacute: [-40, -40, -30, -30, -55, -65, -30, -40],
                        AogonekCcaron: [-40, -40, -30, -30, -55, -65, -30, -40],
                        AogonekCcedilla: [-40, -40, -30, -30, -55, -65, -30, -40],
                        AogonekG: [-50, -50, -30, -30, -55, -60, -35, -40],
                        AogonekGbreve: [-50, -50, -30, -30, -55, -60, -35, -40],
                        AogonekGcommaaccent: [-50, -50, -30, -30, -55, -60, -35, -40],
                        AogonekO: [-40, -40, -30, -30, -45, -50, -40, -55],
                        AogonekOacute: [-40, -40, -30, -30, -45, -50, -40, -55],
                        AogonekOcircumflex: [-40, -40, -30, -30, -45, -50, -40, -55],
                        AogonekOdieresis: [-40, -40, -30, -30, -45, -50, -40, -55],
                        AogonekOgrave: [-40, -40, -30, -30, -45, -50, -40, -55],
                        AogonekOhungarumlaut: [-40, -40, -30, -30, -45, -50, -40, -55],
                        AogonekOmacron: [-40, -40, -30, -30, -45, -50, -40, -55],
                        AogonekOslash: [-40, -40, -30, -30, -45, -50, -40, -55],
                        AogonekOtilde: [-40, -40, -30, -30, -45, -50, -40, -55],
                        AogonekQ: [-40, -40, -30, -30, -45, -55, -40, -55],
                        AogonekT: [-90, -90, -120, -120, -95, -55, -37, -111],
                        AogonekTcaron: [-90, -90, -120, -120, -95, -55, -37, -111],
                        AogonekTcommaaccent: [-90, -90, -120, -120, -95, -55, -37, -111],
                        AogonekU: [-50, -50, -50, -50, -50, -50, -50, -55],
                        AogonekUacute: [-50, -50, -50, -50, -50, -50, -50, -55],
                        AogonekUcircumflex: [-50, -50, -50, -50, -50, -50, -50, -55],
                        AogonekUdieresis: [-50, -50, -50, -50, -50, -50, -50, -55],
                        AogonekUgrave: [-50, -50, -50, -50, -50, -50, -50, -55],
                        AogonekUhungarumlaut: [-50, -50, -50, -50, -50, -50, -50, -55],
                        AogonekUmacron: [-50, -50, -50, -50, -50, -50, -50, -55],
                        AogonekUogonek: [-50, -50, -50, -50, -50, -50, -50, -55],
                        AogonekUring: [-50, -50, -50, -50, -50, -50, -50, -55],
                        AogonekV: [-80, -80, -70, -70, -145, -95, -105, -135],
                        AogonekW: [-60, -60, -50, -50, -130, -100, -95, -90],
                        AogonekY: [-110, -110, -100, -100, -100, -70, -55, -105],
                        AogonekYacute: [-110, -110, -100, -100, -100, -70, -55, -105],
                        AogonekYdieresis: [-110, -110, -100, -100, -100, -70, -55, -105],
                        Aogoneku: [-30, -30, -30, -30, -50, -30, -20],
                        Aogonekuacute: [-30, -30, -30, -30, -50, -30, -20],
                        Aogonekucircumflex: [-30, -30, -30, -30, -50, -30, -20],
                        Aogonekudieresis: [-30, -30, -30, -30, -50, -30, -20],
                        Aogonekugrave: [-30, -30, -30, -30, -50, -30, -20],
                        Aogonekuhungarumlaut: [-30, -30, -30, -30, -50, -30, -20],
                        Aogonekumacron: [-30, -30, -30, -30, -50, -30, -20],
                        Aogonekuogonek: [-30, -30, -30, -30, -50, -30, -20],
                        Aogonekuring: [-30, -30, -30, -30, -50, -30, -20],
                        Aogonekv: [-40, -40, -40, -40, -100, -74, -55, -74],
                        Aogonekw: [-30, -30, -40, -40, -90, -74, -55, -52],
                        Aogoneky: [-30, -30, -40, -40, -34, -34, -55, -52],
                        Aogonekyacute: [-30, -30, -40, -40, -34, -34, -55, -52],
                        Aogonekydieresis: [-30, -30, -40, -40, -34, -34, -55, -52],
                        AringC: [-40, -40, -30, -30, -55, -65, -30, -40],
                        AringCacute: [-40, -40, -30, -30, -55, -65, -30, -40],
                        AringCcaron: [-40, -40, -30, -30, -55, -65, -30, -40],
                        AringCcedilla: [-40, -40, -30, -30, -55, -65, -30, -40],
                        AringG: [-50, -50, -30, -30, -55, -60, -35, -40],
                        AringGbreve: [-50, -50, -30, -30, -55, -60, -35, -40],
                        AringGcommaaccent: [-50, -50, -30, -30, -55, -60, -35, -40],
                        AringO: [-40, -40, -30, -30, -45, -50, -40, -55],
                        AringOacute: [-40, -40, -30, -30, -45, -50, -40, -55],
                        AringOcircumflex: [-40, -40, -30, -30, -45, -50, -40, -55],
                        AringOdieresis: [-40, -40, -30, -30, -45, -50, -40, -55],
                        AringOgrave: [-40, -40, -30, -30, -45, -50, -40, -55],
                        AringOhungarumlaut: [-40, -40, -30, -30, -45, -50, -40, -55],
                        AringOmacron: [-40, -40, -30, -30, -45, -50, -40, -55],
                        AringOslash: [-40, -40, -30, -30, -45, -50, -40, -55],
                        AringOtilde: [-40, -40, -30, -30, -45, -50, -40, -55],
                        AringQ: [-40, -40, -30, -30, -45, -55, -40, -55],
                        AringT: [-90, -90, -120, -120, -95, -55, -37, -111],
                        AringTcaron: [-90, -90, -120, -120, -95, -55, -37, -111],
                        AringTcommaaccent: [-90, -90, -120, -120, -95, -55, -37, -111],
                        AringU: [-50, -50, -50, -50, -50, -50, -50, -55],
                        AringUacute: [-50, -50, -50, -50, -50, -50, -50, -55],
                        AringUcircumflex: [-50, -50, -50, -50, -50, -50, -50, -55],
                        AringUdieresis: [-50, -50, -50, -50, -50, -50, -50, -55],
                        AringUgrave: [-50, -50, -50, -50, -50, -50, -50, -55],
                        AringUhungarumlaut: [-50, -50, -50, -50, -50, -50, -50, -55],
                        AringUmacron: [-50, -50, -50, -50, -50, -50, -50, -55],
                        AringUogonek: [-50, -50, -50, -50, -50, -50, -50, -55],
                        AringUring: [-50, -50, -50, -50, -50, -50, -50, -55],
                        AringV: [-80, -80, -70, -70, -145, -95, -105, -135],
                        AringW: [-60, -60, -50, -50, -130, -100, -95, -90],
                        AringY: [-110, -110, -100, -100, -100, -70, -55, -105],
                        AringYacute: [-110, -110, -100, -100, -100, -70, -55, -105],
                        AringYdieresis: [-110, -110, -100, -100, -100, -70, -55, -105],
                        Aringu: [-30, -30, -30, -30, -50, -30, -20],
                        Aringuacute: [-30, -30, -30, -30, -50, -30, -20],
                        Aringucircumflex: [-30, -30, -30, -30, -50, -30, -20],
                        Aringudieresis: [-30, -30, -30, -30, -50, -30, -20],
                        Aringugrave: [-30, -30, -30, -30, -50, -30, -20],
                        Aringuhungarumlaut: [-30, -30, -30, -30, -50, -30, -20],
                        Aringumacron: [-30, -30, -30, -30, -50, -30, -20],
                        Aringuogonek: [-30, -30, -30, -30, -50, -30, -20],
                        Aringuring: [-30, -30, -30, -30, -50, -30, -20],
                        Aringv: [-40, -40, -40, -40, -100, -74, -55, -74],
                        Aringw: [-30, -30, -40, -40, -90, -74, -55, -92],
                        Aringy: [-30, -30, -40, -40, -74, -74, -55, -92],
                        Aringyacute: [-30, -30, -40, -40, -74, -74, -55, -92],
                        Aringydieresis: [-30, -30, -40, -40, -74, -74, -55, -92],
                        AtildeC: [-40, -40, -30, -30, -55, -65, -30, -40],
                        AtildeCacute: [-40, -40, -30, -30, -55, -65, -30, -40],
                        AtildeCcaron: [-40, -40, -30, -30, -55, -65, -30, -40],
                        AtildeCcedilla: [-40, -40, -30, -30, -55, -65, -30, -40],
                        AtildeG: [-50, -50, -30, -30, -55, -60, -35, -40],
                        AtildeGbreve: [-50, -50, -30, -30, -55, -60, -35, -40],
                        AtildeGcommaaccent: [-50, -50, -30, -30, -55, -60, -35, -40],
                        AtildeO: [-40, -40, -30, -30, -45, -50, -40, -55],
                        AtildeOacute: [-40, -40, -30, -30, -45, -50, -40, -55],
                        AtildeOcircumflex: [-40, -40, -30, -30, -45, -50, -40, -55],
                        AtildeOdieresis: [-40, -40, -30, -30, -45, -50, -40, -55],
                        AtildeOgrave: [-40, -40, -30, -30, -45, -50, -40, -55],
                        AtildeOhungarumlaut: [-40, -40, -30, -30, -45, -50, -40, -55],
                        AtildeOmacron: [-40, -40, -30, -30, -45, -50, -40, -55],
                        AtildeOslash: [-40, -40, -30, -30, -45, -50, -40, -55],
                        AtildeOtilde: [-40, -40, -30, -30, -45, -50, -40, -55],
                        AtildeQ: [-40, -40, -30, -30, -45, -55, -40, -55],
                        AtildeT: [-90, -90, -120, -120, -95, -55, -37, -111],
                        AtildeTcaron: [-90, -90, -120, -120, -95, -55, -37, -111],
                        AtildeTcommaaccent: [-90, -90, -120, -120, -95, -55, -37, -111],
                        AtildeU: [-50, -50, -50, -50, -50, -50, -50, -55],
                        AtildeUacute: [-50, -50, -50, -50, -50, -50, -50, -55],
                        AtildeUcircumflex: [-50, -50, -50, -50, -50, -50, -50, -55],
                        AtildeUdieresis: [-50, -50, -50, -50, -50, -50, -50, -55],
                        AtildeUgrave: [-50, -50, -50, -50, -50, -50, -50, -55],
                        AtildeUhungarumlaut: [-50, -50, -50, -50, -50, -50, -50, -55],
                        AtildeUmacron: [-50, -50, -50, -50, -50, -50, -50, -55],
                        AtildeUogonek: [-50, -50, -50, -50, -50, -50, -50, -55],
                        AtildeUring: [-50, -50, -50, -50, -50, -50, -50, -55],
                        AtildeV: [-80, -80, -70, -70, -145, -95, -105, -135],
                        AtildeW: [-60, -60, -50, -50, -130, -100, -95, -90],
                        AtildeY: [-110, -110, -100, -100, -100, -70, -55, -105],
                        AtildeYacute: [-110, -110, -100, -100, -100, -70, -55, -105],
                        AtildeYdieresis: [-110, -110, -100, -100, -100, -70, -55, -105],
                        Atildeu: [-30, -30, -30, -30, -50, -30, -20],
                        Atildeuacute: [-30, -30, -30, -30, -50, -30, -20],
                        Atildeucircumflex: [-30, -30, -30, -30, -50, -30, -20],
                        Atildeudieresis: [-30, -30, -30, -30, -50, -30, -20],
                        Atildeugrave: [-30, -30, -30, -30, -50, -30, -20],
                        Atildeuhungarumlaut: [-30, -30, -30, -30, -50, -30, -20],
                        Atildeumacron: [-30, -30, -30, -30, -50, -30, -20],
                        Atildeuogonek: [-30, -30, -30, -30, -50, -30, -20],
                        Atildeuring: [-30, -30, -30, -30, -50, -30, -20],
                        Atildev: [-40, -40, -40, -40, -100, -74, -55, -74],
                        Atildew: [-30, -30, -40, -40, -90, -74, -55, -92],
                        Atildey: [-30, -30, -40, -40, -74, -74, -55, -92],
                        Atildeyacute: [-30, -30, -40, -40, -74, -74, -55, -92],
                        Atildeydieresis: [-30, -30, -40, -40, -74, -74, -55, -92],
                        BA: [-30, -30, 0, 0, -30, -25, -25, -35],
                        BAacute: [-30, -30, 0, 0, -30, -25, -25, -35],
                        BAbreve: [-30, -30, 0, 0, -30, -25, -25, -35],
                        BAcircumflex: [-30, -30, 0, 0, -30, -25, -25, -35],
                        BAdieresis: [-30, -30, 0, 0, -30, -25, -25, -35],
                        BAgrave: [-30, -30, 0, 0, -30, -25, -25, -35],
                        BAmacron: [-30, -30, 0, 0, -30, -25, -25, -35],
                        BAogonek: [-30, -30, 0, 0, -30, -25, -25, -35],
                        BAring: [-30, -30, 0, 0, -30, -25, -25, -35],
                        BAtilde: [-30, -30, 0, 0, -30, -25, -25, -35],
                        BU: [-10, -10, -10, -10, -10, -10, -10, -10],
                        BUacute: [-10, -10, -10, -10, -10, -10, -10, -10],
                        BUcircumflex: [-10, -10, -10, -10, -10, -10, -10, -10],
                        BUdieresis: [-10, -10, -10, -10, -10, -10, -10, -10],
                        BUgrave: [-10, -10, -10, -10, -10, -10, -10, -10],
                        BUhungarumlaut: [-10, -10, -10, -10, -10, -10, -10, -10],
                        BUmacron: [-10, -10, -10, -10, -10, -10, -10, -10],
                        BUogonek: [-10, -10, -10, -10, -10, -10, -10, -10],
                        BUring: [-10, -10, -10, -10, -10, -10, -10, -10],
                        DA: [-40, -40, -40, -40, -35, -25, -35, -40],
                        DAacute: [-40, -40, -40, -40, -35, -25, -35, -40],
                        DAbreve: [-40, -40, -40, -40, -35, -25, -35, -40],
                        DAcircumflex: [-40, -40, -40, -40, -35, -25, -35, -40],
                        DAdieresis: [-40, -40, -40, -40, -35, -25, -35, -40],
                        DAgrave: [-40, -40, -40, -40, -35, -25, -35, -40],
                        DAmacron: [-40, -40, -40, -40, -35, -25, -35, -40],
                        DAogonek: [-40, -40, -40, -40, -35, -25, -35, -40],
                        DAring: [-40, -40, -40, -40, -35, -25, -35, -40],
                        DAtilde: [-40, -40, -40, -40, -35, -25, -35, -40],
                        DV: [-40, -40, -70, -70, -40, -50, -40, -40],
                        DW: [-40, -40, -40, -40, -40, -40, -40, -30],
                        DY: [-70, -70, -90, -90, -40, -50, -40, -55],
                        DYacute: [-70, -70, -90, -90, -40, -50, -40, -55],
                        DYdieresis: [-70, -70, -90, -90, -40, -50, -40, -55],
                        Dcomma: [-30, -30, -70, -70],
                        Dperiod: [-30, -30, -70, -70, -20],
                        DcaronA: [-40, -40, -40, -40, -35, -25, -35, -40],
                        DcaronAacute: [-40, -40, -40, -40, -35, -25, -35, -40],
                        DcaronAbreve: [-40, -40, -40, -40, -35, -25, -35, -40],
                        DcaronAcircumflex: [-40, -40, -40, -40, -35, -25, -35, -40],
                        DcaronAdieresis: [-40, -40, -40, -40, -35, -25, -35, -40],
                        DcaronAgrave: [-40, -40, -40, -40, -35, -25, -35, -40],
                        DcaronAmacron: [-40, -40, -40, -40, -35, -25, -35, -40],
                        DcaronAogonek: [-40, -40, -40, -40, -35, -25, -35, -40],
                        DcaronAring: [-40, -40, -40, -40, -35, -25, -35, -40],
                        DcaronAtilde: [-40, -40, -40, -40, -35, -25, -35, -40],
                        DcaronV: [-40, -40, -70, -70, -40, -50, -40, -40],
                        DcaronW: [-40, -40, -40, -40, -40, -40, -40, -30],
                        DcaronY: [-70, -70, -90, -90, -40, -50, -40, -55],
                        DcaronYacute: [-70, -70, -90, -90, -40, -50, -40, -55],
                        DcaronYdieresis: [-70, -70, -90, -90, -40, -50, -40, -55],
                        Dcaroncomma: [-30, -30, -70, -70],
                        Dcaronperiod: [-30, -30, -70, -70, -20],
                        DcroatA: [-40, -40, -40, -40, -35, -25, -35, -40],
                        DcroatAacute: [-40, -40, -40, -40, -35, -25, -35, -40],
                        DcroatAbreve: [-40, -40, -40, -40, -35, -25, -35, -40],
                        DcroatAcircumflex: [-40, -40, -40, -40, -35, -25, -35, -40],
                        DcroatAdieresis: [-40, -40, -40, -40, -35, -25, -35, -40],
                        DcroatAgrave: [-40, -40, -40, -40, -35, -25, -35, -40],
                        DcroatAmacron: [-40, -40, -40, -40, -35, -25, -35, -40],
                        DcroatAogonek: [-40, -40, -40, -40, -35, -25, -35, -40],
                        DcroatAring: [-40, -40, -40, -40, -35, -25, -35, -40],
                        DcroatAtilde: [-40, -40, -40, -40, -35, -25, -35, -40],
                        DcroatV: [-40, -40, -70, -70, -40, -50, -40, -40],
                        DcroatW: [-40, -40, -40, -40, -40, -40, -40, -30],
                        DcroatY: [-70, -70, -90, -90, -40, -50, -40, -55],
                        DcroatYacute: [-70, -70, -90, -90, -40, -50, -40, -55],
                        DcroatYdieresis: [-70, -70, -90, -90, -40, -50, -40, -55],
                        Dcroatcomma: [-30, -30, -70, -70],
                        Dcroatperiod: [-30, -30, -70, -70, -20],
                        FA: [-80, -80, -80, -80, -90, -100, -115, -74],
                        FAacute: [-80, -80, -80, -80, -90, -100, -115, -74],
                        FAbreve: [-80, -80, -80, -80, -90, -100, -115, -74],
                        FAcircumflex: [-80, -80, -80, -80, -90, -100, -115, -74],
                        FAdieresis: [-80, -80, -80, -80, -90, -100, -115, -74],
                        FAgrave: [-80, -80, -80, -80, -90, -100, -115, -74],
                        FAmacron: [-80, -80, -80, -80, -90, -100, -115, -74],
                        FAogonek: [-80, -80, -80, -80, -90, -100, -115, -74],
                        FAring: [-80, -80, -80, -80, -90, -100, -115, -74],
                        FAtilde: [-80, -80, -80, -80, -90, -100, -115, -74],
                        Fa: [-20, -20, -50, -50, -25, -95, -75, -15],
                        Faacute: [-20, -20, -50, -50, -25, -95, -75, -15],
                        Fabreve: [-20, -20, -50, -50, -25, -95, -75, -15],
                        Facircumflex: [-20, -20, -50, -50, -25, -95, -75, -15],
                        Fadieresis: [-20, -20, -50, -50, -25, -95, -75, -15],
                        Fagrave: [-20, -20, -50, -50, -25, -95, -75, -15],
                        Famacron: [-20, -20, -50, -50, -25, -95, -75, -15],
                        Faogonek: [-20, -20, -50, -50, -25, -95, -75, -15],
                        Faring: [-20, -20, -50, -50, -25, -95, -75, -15],
                        Fatilde: [-20, -20, -50, -50, -25, -95, -75, -15],
                        Fcomma: [-100, -100, -150, -150, -92, -129, -135, -80],
                        Fperiod: [-100, -100, -150, -150, -110, -129, -135, -80],
                        JA: [-20, -20, -20, -20, -30, -25, -40, -60],
                        JAacute: [-20, -20, -20, -20, -30, -25, -40, -60],
                        JAbreve: [-20, -20, -20, -20, -30, -25, -40, -60],
                        JAcircumflex: [-20, -20, -20, -20, -30, -25, -40, -60],
                        JAdieresis: [-20, -20, -20, -20, -30, -25, -40, -60],
                        JAgrave: [-20, -20, -20, -20, -30, -25, -40, -60],
                        JAmacron: [-20, -20, -20, -20, -30, -25, -40, -60],
                        JAogonek: [-20, -20, -20, -20, -30, -25, -40, -60],
                        JAring: [-20, -20, -20, -20, -30, -25, -40, -60],
                        JAtilde: [-20, -20, -20, -20, -30, -25, -40, -60],
                        Jcomma: [-20, -20, -30, -30, 0, -10, -25],
                        Jperiod: [-20, -20, -30, -30, -20, -10, -25],
                        Ju: [-20, -20, -20, -20, -15, -40, -35],
                        Juacute: [-20, -20, -20, -20, -15, -40, -35],
                        Jucircumflex: [-20, -20, -20, -20, -15, -40, -35],
                        Judieresis: [-20, -20, -20, -20, -15, -40, -35],
                        Jugrave: [-20, -20, -20, -20, -15, -40, -35],
                        Juhungarumlaut: [-20, -20, -20, -20, -15, -40, -35],
                        Jumacron: [-20, -20, -20, -20, -15, -40, -35],
                        Juogonek: [-20, -20, -20, -20, -15, -40, -35],
                        Juring: [-20, -20, -20, -20, -15, -40, -35],
                        KO: [-30, -30, -50, -50, -30, -30, -50, -30],
                        KOacute: [-30, -30, -50, -50, -30, -30, -50, -30],
                        KOcircumflex: [-30, -30, -50, -50, -30, -30, -50, -30],
                        KOdieresis: [-30, -30, -50, -50, -30, -30, -50, -30],
                        KOgrave: [-30, -30, -50, -50, -30, -30, -50, -30],
                        KOhungarumlaut: [-30, -30, -50, -50, -30, -30, -50, -30],
                        KOmacron: [-30, -30, -50, -50, -30, -30, -50, -30],
                        KOslash: [-30, -30, -50, -50, -30, -30, -50, -30],
                        KOtilde: [-30, -30, -50, -50, -30, -30, -50, -30],
                        Ke: [-15, -15, -40, -40, -25, -25, -35, -25],
                        Keacute: [-15, -15, -40, -40, -25, -25, -35, -25],
                        Kecaron: [-15, -15, -40, -40, -25, -25, -35, -25],
                        Kecircumflex: [-15, -15, -40, -40, -25, -25, -35, -25],
                        Kedieresis: [-15, -15, -40, -40, -25, -25, -35, -25],
                        Kedotaccent: [-15, -15, -40, -40, -25, -25, -35, -25],
                        Kegrave: [-15, -15, -40, -40, -25, -25, -35, -25],
                        Kemacron: [-15, -15, -40, -40, -25, -25, -35, -25],
                        Keogonek: [-15, -15, -40, -40, -25, -25, -35, -25],
                        Ko: [-35, -35, -40, -40, -25, -25, -40, -35],
                        Koacute: [-35, -35, -40, -40, -25, -25, -40, -35],
                        Kocircumflex: [-35, -35, -40, -40, -25, -25, -40, -35],
                        Kodieresis: [-35, -35, -40, -40, -25, -25, -40, -35],
                        Kograve: [-35, -35, -40, -40, -25, -25, -40, -35],
                        Kohungarumlaut: [-35, -35, -40, -40, -25, -25, -40, -35],
                        Komacron: [-35, -35, -40, -40, -25, -25, -40, -35],
                        Koslash: [-35, -35, -40, -40, -25, -25, -40, -35],
                        Kotilde: [-35, -35, -40, -40, -25, -25, -40, -35],
                        Ku: [-30, -30, -30, -30, -15, -20, -40, -15],
                        Kuacute: [-30, -30, -30, -30, -15, -20, -40, -15],
                        Kucircumflex: [-30, -30, -30, -30, -15, -20, -40, -15],
                        Kudieresis: [-30, -30, -30, -30, -15, -20, -40, -15],
                        Kugrave: [-30, -30, -30, -30, -15, -20, -40, -15],
                        Kuhungarumlaut: [-30, -30, -30, -30, -15, -20, -40, -15],
                        Kumacron: [-30, -30, -30, -30, -15, -20, -40, -15],
                        Kuogonek: [-30, -30, -30, -30, -15, -20, -40, -15],
                        Kuring: [-30, -30, -30, -30, -15, -20, -40, -15],
                        Ky: [-40, -40, -50, -50, -45, -20, -40, -25],
                        Kyacute: [-40, -40, -50, -50, -45, -20, -40, -25],
                        Kydieresis: [-40, -40, -50, -50, -45, -20, -40, -25],
                        KcommaaccentO: [-30, -30, -50, -50, -30, -30, -50, -30],
                        KcommaaccentOacute: [-30, -30, -50, -50, -30, -30, -50, -30],
                        KcommaaccentOcircumflex: [-30, -30, -50, -50, -30, -30, -50, -30],
                        KcommaaccentOdieresis: [-30, -30, -50, -50, -30, -30, -50, -30],
                        KcommaaccentOgrave: [-30, -30, -50, -50, -30, -30, -50, -30],
                        KcommaaccentOhungarumlaut: [-30, -30, -50, -50, -30, -30, -50, -30],
                        KcommaaccentOmacron: [-30, -30, -50, -50, -30, -30, -50, -30],
                        KcommaaccentOslash: [-30, -30, -50, -50, -30, -30, -50, -30],
                        KcommaaccentOtilde: [-30, -30, -50, -50, -30, -30, -50, -30],
                        Kcommaaccente: [-15, -15, -40, -40, -25, -25, -35, -25],
                        Kcommaaccenteacute: [-15, -15, -40, -40, -25, -25, -35, -25],
                        Kcommaaccentecaron: [-15, -15, -40, -40, -25, -25, -35, -25],
                        Kcommaaccentecircumflex: [-15, -15, -40, -40, -25, -25, -35, -25],
                        Kcommaaccentedieresis: [-15, -15, -40, -40, -25, -25, -35, -25],
                        Kcommaaccentedotaccent: [-15, -15, -40, -40, -25, -25, -35, -25],
                        Kcommaaccentegrave: [-15, -15, -40, -40, -25, -25, -35, -25],
                        Kcommaaccentemacron: [-15, -15, -40, -40, -25, -25, -35, -25],
                        Kcommaaccenteogonek: [-15, -15, -40, -40, -25, -25, -35, -25],
                        Kcommaaccento: [-35, -35, -40, -40, -25, -25, -40, -35],
                        Kcommaaccentoacute: [-35, -35, -40, -40, -25, -25, -40, -35],
                        Kcommaaccentocircumflex: [-35, -35, -40, -40, -25, -25, -40, -35],
                        Kcommaaccentodieresis: [-35, -35, -40, -40, -25, -25, -40, -35],
                        Kcommaaccentograve: [-35, -35, -40, -40, -25, -25, -40, -35],
                        Kcommaaccentohungarumlaut: [-35, -35, -40, -40, -25, -25, -40, -35],
                        Kcommaaccentomacron: [-35, -35, -40, -40, -25, -25, -40, -35],
                        Kcommaaccentoslash: [-35, -35, -40, -40, -25, -25, -40, -35],
                        Kcommaaccentotilde: [-35, -35, -40, -40, -25, -25, -40, -35],
                        Kcommaaccentu: [-30, -30, -30, -30, -15, -20, -40, -15],
                        Kcommaaccentuacute: [-30, -30, -30, -30, -15, -20, -40, -15],
                        Kcommaaccentucircumflex: [-30, -30, -30, -30, -15, -20, -40, -15],
                        Kcommaaccentudieresis: [-30, -30, -30, -30, -15, -20, -40, -15],
                        Kcommaaccentugrave: [-30, -30, -30, -30, -15, -20, -40, -15],
                        Kcommaaccentuhungarumlaut: [-30, -30, -30, -30, -15, -20, -40, -15],
                        Kcommaaccentumacron: [-30, -30, -30, -30, -15, -20, -40, -15],
                        Kcommaaccentuogonek: [-30, -30, -30, -30, -15, -20, -40, -15],
                        Kcommaaccenturing: [-30, -30, -30, -30, -15, -20, -40, -15],
                        Kcommaaccenty: [-40, -40, -50, -50, -45, -20, -40, -25],
                        Kcommaaccentyacute: [-40, -40, -50, -50, -45, -20, -40, -25],
                        Kcommaaccentydieresis: [-40, -40, -50, -50, -45, -20, -40, -25],
                        LT: [-90, -90, -110, -110, -92, -18, -20, -92],
                        LTcaron: [-90, -90, -110, -110, -92, -18, -20, -92],
                        LTcommaaccent: [-90, -90, -110, -110, -92, -18, -20, -92],
                        LV: [-110, -110, -110, -110, -92, -37, -55, -100],
                        LW: [-80, -80, -70, -70, -92, -37, -55, -74],
                        LY: [-120, -120, -140, -140, -92, -37, -20, -100],
                        LYacute: [-120, -120, -140, -140, -92, -37, -20, -100],
                        LYdieresis: [-120, -120, -140, -140, -92, -37, -20, -100],
                        Lquotedblright: [-140, -140, -140, -140, -20],
                        Lquoteright: [-140, -140, -160, -160, -110, -55, -37, -92],
                        Ly: [-30, -30, -30, -30, -55, -37, -30, -55],
                        Lyacute: [-30, -30, -30, -30, -55, -37, -30, -55],
                        Lydieresis: [-30, -30, -30, -30, -55, -37, -30, -55],
                        LacuteT: [-90, -90, -110, -110, -92, -18, -20, -92],
                        LacuteTcaron: [-90, -90, -110, -110, -92, -18, -20, -92],
                        LacuteTcommaaccent: [-90, -90, -110, -110, -92, -18, -20, -92],
                        LacuteV: [-110, -110, -110, -110, -92, -37, -55, -100],
                        LacuteW: [-80, -80, -70, -70, -92, -37, -55, -74],
                        LacuteY: [-120, -120, -140, -140, -92, -37, -20, -100],
                        LacuteYacute: [-120, -120, -140, -140, -92, -37, -20, -100],
                        LacuteYdieresis: [-120, -120, -140, -140, -92, -37, -20, -100],
                        Lacutequotedblright: [-140, -140, -140, -140, -20],
                        Lacutequoteright: [-140, -140, -160, -160, -110, -55, -37, -92],
                        Lacutey: [-30, -30, -30, -30, -55, -37, -30, -55],
                        Lacuteyacute: [-30, -30, -30, -30, -55, -37, -30, -55],
                        Lacuteydieresis: [-30, -30, -30, -30, -55, -37, -30, -55],
                        LcommaaccentT: [-90, -90, -110, -110, -92, -18, -20, -92],
                        LcommaaccentTcaron: [-90, -90, -110, -110, -92, -18, -20, -92],
                        LcommaaccentTcommaaccent: [-90, -90, -110, -110, -92, -18, -20, -92],
                        LcommaaccentV: [-110, -110, -110, -110, -92, -37, -55, -100],
                        LcommaaccentW: [-80, -80, -70, -70, -92, -37, -55, -74],
                        LcommaaccentY: [-120, -120, -140, -140, -92, -37, -20, -100],
                        LcommaaccentYacute: [-120, -120, -140, -140, -92, -37, -20, -100],
                        LcommaaccentYdieresis: [-120, -120, -140, -140, -92, -37, -20, -100],
                        Lcommaaccentquotedblright: [-140, -140, -140, -140, -20],
                        Lcommaaccentquoteright: [-140, -140, -160, -160, -110, -55, -37, -92],
                        Lcommaaccenty: [-30, -30, -30, -30, -55, -37, -30, -55],
                        Lcommaaccentyacute: [-30, -30, -30, -30, -55, -37, -30, -55],
                        Lcommaaccentydieresis: [-30, -30, -30, -30, -55, -37, -30, -55],
                        LslashT: [-90, -90, -110, -110, -92, -18, -20, -92],
                        LslashTcaron: [-90, -90, -110, -110, -92, -18, -20, -92],
                        LslashTcommaaccent: [-90, -90, -110, -110, -92, -18, -20, -92],
                        LslashV: [-110, -110, -110, -110, -92, -37, -55, -100],
                        LslashW: [-80, -80, -70, -70, -92, -37, -55, -74],
                        LslashY: [-120, -120, -140, -140, -92, -37, -20, -100],
                        LslashYacute: [-120, -120, -140, -140, -92, -37, -20, -100],
                        LslashYdieresis: [-120, -120, -140, -140, -92, -37, -20, -100],
                        Lslashquotedblright: [-140, -140, -140, -140, -20],
                        Lslashquoteright: [-140, -140, -160, -160, -110, -55, -37, -92],
                        Lslashy: [-30, -30, -30, -30, -55, -37, -30, -55],
                        Lslashyacute: [-30, -30, -30, -30, -55, -37, -30, -55],
                        Lslashydieresis: [-30, -30, -30, -30, -55, -37, -30, -55],
                        OA: [-50, -50, -20, -20, -40, -40, -55, -35],
                        OAacute: [-50, -50, -20, -20, -40, -40, -55, -35],
                        OAbreve: [-50, -50, -20, -20, -40, -40, -55, -35],
                        OAcircumflex: [-50, -50, -20, -20, -40, -40, -55, -35],
                        OAdieresis: [-50, -50, -20, -20, -40, -40, -55, -35],
                        OAgrave: [-50, -50, -20, -20, -40, -40, -55, -35],
                        OAmacron: [-50, -50, -20, -20, -40, -40, -55, -35],
                        OAogonek: [-50, -50, -20, -20, -40, -40, -55, -35],
                        OAring: [-50, -50, -20, -20, -40, -40, -55, -35],
                        OAtilde: [-50, -50, -20, -20, -40, -40, -55, -35],
                        OT: [-40, -40, -40, -40, -40, -40, -40, -40],
                        OTcaron: [-40, -40, -40, -40, -40, -40, -40, -40],
                        OTcommaaccent: [-40, -40, -40, -40, -40, -40, -40, -40],
                        OV: [-50, -50, -50, -50, -50, -50, -50, -50],
                        OW: [-50, -50, -30, -30, -50, -50, -50, -35],
                        OX: [-50, -50, -60, -60, -40, -40, -40, -40],
                        OY: [-70, -70, -70, -70, -50, -50, -50, -50],
                        OYacute: [-70, -70, -70, -70, -50, -50, -50, -50],
                        OYdieresis: [-70, -70, -70, -70, -50, -50, -50, -50],
                        Ocomma: [-40, -40, -40, -40],
                        Operiod: [-40, -40, -40, -40],
                        OacuteA: [-50, -50, -20, -20, -40, -40, -55, -35],
                        OacuteAacute: [-50, -50, -20, -20, -40, -40, -55, -35],
                        OacuteAbreve: [-50, -50, -20, -20, -40, -40, -55, -35],
                        OacuteAcircumflex: [-50, -50, -20, -20, -40, -40, -55, -35],
                        OacuteAdieresis: [-50, -50, -20, -20, -40, -40, -55, -35],
                        OacuteAgrave: [-50, -50, -20, -20, -40, -40, -55, -35],
                        OacuteAmacron: [-50, -50, -20, -20, -40, -40, -55, -35],
                        OacuteAogonek: [-50, -50, -20, -20, -40, -40, -55, -35],
                        OacuteAring: [-50, -50, -20, -20, -40, -40, -55, -35],
                        OacuteAtilde: [-50, -50, -20, -20, -40, -40, -55, -35],
                        OacuteT: [-40, -40, -40, -40, -40, -40, -40, -40],
                        OacuteTcaron: [-40, -40, -40, -40, -40, -40, -40, -40],
                        OacuteTcommaaccent: [-40, -40, -40, -40, -40, -40, -40, -40],
                        OacuteV: [-50, -50, -50, -50, -50, -50, -50, -50],
                        OacuteW: [-50, -50, -30, -30, -50, -50, -50, -35],
                        OacuteX: [-50, -50, -60, -60, -40, -40, -40, -40],
                        OacuteY: [-70, -70, -70, -70, -50, -50, -50, -50],
                        OacuteYacute: [-70, -70, -70, -70, -50, -50, -50, -50],
                        OacuteYdieresis: [-70, -70, -70, -70, -50, -50, -50, -50],
                        Oacutecomma: [-40, -40, -40, -40],
                        Oacuteperiod: [-40, -40, -40, -40],
                        OcircumflexA: [-50, -50, -20, -20, -40, -40, -55, -35],
                        OcircumflexAacute: [-50, -50, -20, -20, -40, -40, -55, -35],
                        OcircumflexAbreve: [-50, -50, -20, -20, -40, -40, -55, -35],
                        OcircumflexAcircumflex: [-50, -50, -20, -20, -40, -40, -55, -35],
                        OcircumflexAdieresis: [-50, -50, -20, -20, -40, -40, -55, -35],
                        OcircumflexAgrave: [-50, -50, -20, -20, -40, -40, -55, -35],
                        OcircumflexAmacron: [-50, -50, -20, -20, -40, -40, -55, -35],
                        OcircumflexAogonek: [-50, -50, -20, -20, -40, -40, -55, -35],
                        OcircumflexAring: [-50, -50, -20, -20, -40, -40, -55, -35],
                        OcircumflexAtilde: [-50, -50, -20, -20, -40, -40, -55, -35],
                        OcircumflexT: [-40, -40, -40, -40, -40, -40, -40, -40],
                        OcircumflexTcaron: [-40, -40, -40, -40, -40, -40, -40, -40],
                        OcircumflexTcommaaccent: [-40, -40, -40, -40, -40, -40, -40, -40],
                        OcircumflexV: [-50, -50, -50, -50, -50, -50, -50, -50],
                        OcircumflexW: [-50, -50, -30, -30, -50, -50, -50, -35],
                        OcircumflexX: [-50, -50, -60, -60, -40, -40, -40, -40],
                        OcircumflexY: [-70, -70, -70, -70, -50, -50, -50, -50],
                        OcircumflexYacute: [-70, -70, -70, -70, -50, -50, -50, -50],
                        OcircumflexYdieresis: [-70, -70, -70, -70, -50, -50, -50, -50],
                        Ocircumflexcomma: [-40, -40, -40, -40],
                        Ocircumflexperiod: [-40, -40, -40, -40],
                        OdieresisA: [-50, -50, -20, -20, -40, -40, -55, -35],
                        OdieresisAacute: [-50, -50, -20, -20, -40, -40, -55, -35],
                        OdieresisAbreve: [-50, -50, -20, -20, -40, -40, -55, -35],
                        OdieresisAcircumflex: [-50, -50, -20, -20, -40, -40, -55, -35],
                        OdieresisAdieresis: [-50, -50, -20, -20, -40, -40, -55, -35],
                        OdieresisAgrave: [-50, -50, -20, -20, -40, -40, -55, -35],
                        OdieresisAmacron: [-50, -50, -20, -20, -40, -40, -55, -35],
                        OdieresisAogonek: [-50, -50, -20, -20, -40, -40, -55, -35],
                        OdieresisAring: [-50, -50, -20, -20, -40, -40, -55, -35],
                        OdieresisAtilde: [-50, -50, -20, -20, -40, -40, -55, -35],
                        OdieresisT: [-40, -40, -40, -40, -40, -40, -40, -40],
                        OdieresisTcaron: [-40, -40, -40, -40, -40, -40, -40, -40],
                        OdieresisTcommaaccent: [-40, -40, -40, -40, -40, -40, -40, -40],
                        OdieresisV: [-50, -50, -50, -50, -50, -50, -50, -50],
                        OdieresisW: [-50, -50, -30, -30, -50, -50, -50, -35],
                        OdieresisX: [-50, -50, -60, -60, -40, -40, -40, -40],
                        OdieresisY: [-70, -70, -70, -70, -50, -50, -50, -50],
                        OdieresisYacute: [-70, -70, -70, -70, -50, -50, -50, -50],
                        OdieresisYdieresis: [-70, -70, -70, -70, -50, -50, -50, -50],
                        Odieresiscomma: [-40, -40, -40, -40],
                        Odieresisperiod: [-40, -40, -40, -40],
                        OgraveA: [-50, -50, -20, -20, -40, -40, -55, -35],
                        OgraveAacute: [-50, -50, -20, -20, -40, -40, -55, -35],
                        OgraveAbreve: [-50, -50, -20, -20, -40, -40, -55, -35],
                        OgraveAcircumflex: [-50, -50, -20, -20, -40, -40, -55, -35],
                        OgraveAdieresis: [-50, -50, -20, -20, -40, -40, -55, -35],
                        OgraveAgrave: [-50, -50, -20, -20, -40, -40, -55, -35],
                        OgraveAmacron: [-50, -50, -20, -20, -40, -40, -55, -35],
                        OgraveAogonek: [-50, -50, -20, -20, -40, -40, -55, -35],
                        OgraveAring: [-50, -50, -20, -20, -40, -40, -55, -35],
                        OgraveAtilde: [-50, -50, -20, -20, -40, -40, -55, -35],
                        OgraveT: [-40, -40, -40, -40, -40, -40, -40, -40],
                        OgraveTcaron: [-40, -40, -40, -40, -40, -40, -40, -40],
                        OgraveTcommaaccent: [-40, -40, -40, -40, -40, -40, -40, -40],
                        OgraveV: [-50, -50, -50, -50, -50, -50, -50, -50],
                        OgraveW: [-50, -50, -30, -30, -50, -50, -50, -35],
                        OgraveX: [-50, -50, -60, -60, -40, -40, -40, -40],
                        OgraveY: [-70, -70, -70, -70, -50, -50, -50, -50],
                        OgraveYacute: [-70, -70, -70, -70, -50, -50, -50, -50],
                        OgraveYdieresis: [-70, -70, -70, -70, -50, -50, -50, -50],
                        Ogravecomma: [-40, -40, -40, -40],
                        Ograveperiod: [-40, -40, -40, -40],
                        OhungarumlautA: [-50, -50, -20, -20, -40, -40, -55, -35],
                        OhungarumlautAacute: [-50, -50, -20, -20, -40, -40, -55, -35],
                        OhungarumlautAbreve: [-50, -50, -20, -20, -40, -40, -55, -35],
                        OhungarumlautAcircumflex: [-50, -50, -20, -20, -40, -40, -55, -35],
                        OhungarumlautAdieresis: [-50, -50, -20, -20, -40, -40, -55, -35],
                        OhungarumlautAgrave: [-50, -50, -20, -20, -40, -40, -55, -35],
                        OhungarumlautAmacron: [-50, -50, -20, -20, -40, -40, -55, -35],
                        OhungarumlautAogonek: [-50, -50, -20, -20, -40, -40, -55, -35],
                        OhungarumlautAring: [-50, -50, -20, -20, -40, -40, -55, -35],
                        OhungarumlautAtilde: [-50, -50, -20, -20, -40, -40, -55, -35],
                        OhungarumlautT: [-40, -40, -40, -40, -40, -40, -40, -40],
                        OhungarumlautTcaron: [-40, -40, -40, -40, -40, -40, -40, -40],
                        OhungarumlautTcommaaccent: [-40, -40, -40, -40, -40, -40, -40, -40],
                        OhungarumlautV: [-50, -50, -50, -50, -50, -50, -50, -50],
                        OhungarumlautW: [-50, -50, -30, -30, -50, -50, -50, -35],
                        OhungarumlautX: [-50, -50, -60, -60, -40, -40, -40, -40],
                        OhungarumlautY: [-70, -70, -70, -70, -50, -50, -50, -50],
                        OhungarumlautYacute: [-70, -70, -70, -70, -50, -50, -50, -50],
                        OhungarumlautYdieresis: [-70, -70, -70, -70, -50, -50, -50, -50],
                        Ohungarumlautcomma: [-40, -40, -40, -40],
                        Ohungarumlautperiod: [-40, -40, -40, -40],
                        OmacronA: [-50, -50, -20, -20, -40, -40, -55, -35],
                        OmacronAacute: [-50, -50, -20, -20, -40, -40, -55, -35],
                        OmacronAbreve: [-50, -50, -20, -20, -40, -40, -55, -35],
                        OmacronAcircumflex: [-50, -50, -20, -20, -40, -40, -55, -35],
                        OmacronAdieresis: [-50, -50, -20, -20, -40, -40, -55, -35],
                        OmacronAgrave: [-50, -50, -20, -20, -40, -40, -55, -35],
                        OmacronAmacron: [-50, -50, -20, -20, -40, -40, -55, -35],
                        OmacronAogonek: [-50, -50, -20, -20, -40, -40, -55, -35],
                        OmacronAring: [-50, -50, -20, -20, -40, -40, -55, -35],
                        OmacronAtilde: [-50, -50, -20, -20, -40, -40, -55, -35],
                        OmacronT: [-40, -40, -40, -40, -40, -40, -40, -40],
                        OmacronTcaron: [-40, -40, -40, -40, -40, -40, -40, -40],
                        OmacronTcommaaccent: [-40, -40, -40, -40, -40, -40, -40, -40],
                        OmacronV: [-50, -50, -50, -50, -50, -50, -50, -50],
                        OmacronW: [-50, -50, -30, -30, -50, -50, -50, -35],
                        OmacronX: [-50, -50, -60, -60, -40, -40, -40, -40],
                        OmacronY: [-70, -70, -70, -70, -50, -50, -50, -50],
                        OmacronYacute: [-70, -70, -70, -70, -50, -50, -50, -50],
                        OmacronYdieresis: [-70, -70, -70, -70, -50, -50, -50, -50],
                        Omacroncomma: [-40, -40, -40, -40],
                        Omacronperiod: [-40, -40, -40, -40],
                        OslashA: [-50, -50, -20, -20, -40, -40, -55, -35],
                        OslashAacute: [-50, -50, -20, -20, -40, -40, -55, -35],
                        OslashAbreve: [-50, -50, -20, -20, -40, -40, -55, -35],
                        OslashAcircumflex: [-50, -50, -20, -20, -40, -40, -55, -35],
                        OslashAdieresis: [-50, -50, -20, -20, -40, -40, -55, -35],
                        OslashAgrave: [-50, -50, -20, -20, -40, -40, -55, -35],
                        OslashAmacron: [-50, -50, -20, -20, -40, -40, -55, -35],
                        OslashAogonek: [-50, -50, -20, -20, -40, -40, -55, -35],
                        OslashAring: [-50, -50, -20, -20, -40, -40, -55, -35],
                        OslashAtilde: [-50, -50, -20, -20, -40, -40, -55, -35],
                        OslashT: [-40, -40, -40, -40, -40, -40, -40, -40],
                        OslashTcaron: [-40, -40, -40, -40, -40, -40, -40, -40],
                        OslashTcommaaccent: [-40, -40, -40, -40, -40, -40, -40, -40],
                        OslashV: [-50, -50, -50, -50, -50, -50, -50, -50],
                        OslashW: [-50, -50, -30, -30, -50, -50, -50, -35],
                        OslashX: [-50, -50, -60, -60, -40, -40, -40, -40],
                        OslashY: [-70, -70, -70, -70, -50, -50, -50, -50],
                        OslashYacute: [-70, -70, -70, -70, -50, -50, -50, -50],
                        OslashYdieresis: [-70, -70, -70, -70, -50, -50, -50, -50],
                        Oslashcomma: [-40, -40, -40, -40],
                        Oslashperiod: [-40, -40, -40, -40],
                        OtildeA: [-50, -50, -20, -20, -40, -40, -55, -35],
                        OtildeAacute: [-50, -50, -20, -20, -40, -40, -55, -35],
                        OtildeAbreve: [-50, -50, -20, -20, -40, -40, -55, -35],
                        OtildeAcircumflex: [-50, -50, -20, -20, -40, -40, -55, -35],
                        OtildeAdieresis: [-50, -50, -20, -20, -40, -40, -55, -35],
                        OtildeAgrave: [-50, -50, -20, -20, -40, -40, -55, -35],
                        OtildeAmacron: [-50, -50, -20, -20, -40, -40, -55, -35],
                        OtildeAogonek: [-50, -50, -20, -20, -40, -40, -55, -35],
                        OtildeAring: [-50, -50, -20, -20, -40, -40, -55, -35],
                        OtildeAtilde: [-50, -50, -20, -20, -40, -40, -55, -35],
                        OtildeT: [-40, -40, -40, -40, -40, -40, -40, -40],
                        OtildeTcaron: [-40, -40, -40, -40, -40, -40, -40, -40],
                        OtildeTcommaaccent: [-40, -40, -40, -40, -40, -40, -40, -40],
                        OtildeV: [-50, -50, -50, -50, -50, -50, -50, -50],
                        OtildeW: [-50, -50, -30, -30, -50, -50, -50, -35],
                        OtildeX: [-50, -50, -60, -60, -40, -40, -40, -40],
                        OtildeY: [-70, -70, -70, -70, -50, -50, -50, -50],
                        OtildeYacute: [-70, -70, -70, -70, -50, -50, -50, -50],
                        OtildeYdieresis: [-70, -70, -70, -70, -50, -50, -50, -50],
                        Otildecomma: [-40, -40, -40, -40],
                        Otildeperiod: [-40, -40, -40, -40],
                        PA: [-100, -100, -120, -120, -74, -85, -90, -92],
                        PAacute: [-100, -100, -120, -120, -74, -85, -90, -92],
                        PAbreve: [-100, -100, -120, -120, -74, -85, -90, -92],
                        PAcircumflex: [-100, -100, -120, -120, -74, -85, -90, -92],
                        PAdieresis: [-100, -100, -120, -120, -74, -85, -90, -92],
                        PAgrave: [-100, -100, -120, -120, -74, -85, -90, -92],
                        PAmacron: [-100, -100, -120, -120, -74, -85, -90, -92],
                        PAogonek: [-100, -100, -120, -120, -74, -85, -90, -92],
                        PAring: [-100, -100, -120, -120, -74, -85, -90, -92],
                        PAtilde: [-100, -100, -120, -120, -74, -85, -90, -92],
                        Pa: [-30, -30, -40, -40, -10, -40, -80, -15],
                        Paacute: [-30, -30, -40, -40, -10, -40, -80, -15],
                        Pabreve: [-30, -30, -40, -40, -10, -40, -80, -15],
                        Pacircumflex: [-30, -30, -40, -40, -10, -40, -80, -15],
                        Padieresis: [-30, -30, -40, -40, -10, -40, -80, -15],
                        Pagrave: [-30, -30, -40, -40, -10, -40, -80, -15],
                        Pamacron: [-30, -30, -40, -40, -10, -40, -80, -15],
                        Paogonek: [-30, -30, -40, -40, -10, -40, -80, -15],
                        Paring: [-30, -30, -40, -40, -10, -40, -80, -15],
                        Patilde: [-30, -30, -40, -40, -10, -40, -80, -15],
                        Pcomma: [-120, -120, -180, -180, -92, -129, -135, -111],
                        Pe: [-30, -30, -50, -50, -20, -50, -80],
                        Peacute: [-30, -30, -50, -50, -20, -50, -80],
                        Pecaron: [-30, -30, -50, -50, -20, -50, -80],
                        Pecircumflex: [-30, -30, -50, -50, -20, -50, -80],
                        Pedieresis: [-30, -30, -50, -50, -20, -50, -80],
                        Pedotaccent: [-30, -30, -50, -50, -20, -50, -80],
                        Pegrave: [-30, -30, -50, -50, -20, -50, -80],
                        Pemacron: [-30, -30, -50, -50, -20, -50, -80],
                        Peogonek: [-30, -30, -50, -50, -20, -50, -80],
                        Po: [-40, -40, -50, -50, -20, -55, -80],
                        Poacute: [-40, -40, -50, -50, -20, -55, -80],
                        Pocircumflex: [-40, -40, -50, -50, -20, -55, -80],
                        Podieresis: [-40, -40, -50, -50, -20, -55, -80],
                        Pograve: [-40, -40, -50, -50, -20, -55, -80],
                        Pohungarumlaut: [-40, -40, -50, -50, -20, -55, -80],
                        Pomacron: [-40, -40, -50, -50, -20, -55, -80],
                        Poslash: [-40, -40, -50, -50, -20, -55, -80],
                        Potilde: [-40, -40, -50, -50, -20, -55, -80],
                        Pperiod: [-120, -120, -180, -180, -110, -129, -135, -111],
                        QU: [-10, -10, -10, -10, -10, -10, -10, -10],
                        QUacute: [-10, -10, -10, -10, -10, -10, -10, -10],
                        QUcircumflex: [-10, -10, -10, -10, -10, -10, -10, -10],
                        QUdieresis: [-10, -10, -10, -10, -10, -10, -10, -10],
                        QUgrave: [-10, -10, -10, -10, -10, -10, -10, -10],
                        QUhungarumlaut: [-10, -10, -10, -10, -10, -10, -10, -10],
                        QUmacron: [-10, -10, -10, -10, -10, -10, -10, -10],
                        QUogonek: [-10, -10, -10, -10, -10, -10, -10, -10],
                        QUring: [-10, -10, -10, -10, -10, -10, -10, -10],
                        Qcomma: [20, 20],
                        Qperiod: [20, 20, 0, 0, -20],
                        RO: [-20, -20, -20, -20, -30, -40, -40, -40],
                        ROacute: [-20, -20, -20, -20, -30, -40, -40, -40],
                        ROcircumflex: [-20, -20, -20, -20, -30, -40, -40, -40],
                        ROdieresis: [-20, -20, -20, -20, -30, -40, -40, -40],
                        ROgrave: [-20, -20, -20, -20, -30, -40, -40, -40],
                        ROhungarumlaut: [-20, -20, -20, -20, -30, -40, -40, -40],
                        ROmacron: [-20, -20, -20, -20, -30, -40, -40, -40],
                        ROslash: [-20, -20, -20, -20, -30, -40, -40, -40],
                        ROtilde: [-20, -20, -20, -20, -30, -40, -40, -40],
                        RT: [-20, -20, -30, -30, -40, -30, 0, -60],
                        RTcaron: [-20, -20, -30, -30, -40, -30, 0, -60],
                        RTcommaaccent: [-20, -20, -30, -30, -40, -30, 0, -60],
                        RU: [-20, -20, -40, -40, -30, -40, -40, -40],
                        RUacute: [-20, -20, -40, -40, -30, -40, -40, -40],
                        RUcircumflex: [-20, -20, -40, -40, -30, -40, -40, -40],
                        RUdieresis: [-20, -20, -40, -40, -30, -40, -40, -40],
                        RUgrave: [-20, -20, -40, -40, -30, -40, -40, -40],
                        RUhungarumlaut: [-20, -20, -40, -40, -30, -40, -40, -40],
                        RUmacron: [-20, -20, -40, -40, -30, -40, -40, -40],
                        RUogonek: [-20, -20, -40, -40, -30, -40, -40, -40],
                        RUring: [-20, -20, -40, -40, -30, -40, -40, -40],
                        RV: [-50, -50, -50, -50, -55, -18, -18, -80],
                        RW: [-40, -40, -30, -30, -35, -18, -18, -55],
                        RY: [-50, -50, -50, -50, -35, -18, -18, -65],
                        RYacute: [-50, -50, -50, -50, -35, -18, -18, -65],
                        RYdieresis: [-50, -50, -50, -50, -35, -18, -18, -65],
                        RacuteO: [-20, -20, -20, -20, -30, -40, -40, -40],
                        RacuteOacute: [-20, -20, -20, -20, -30, -40, -40, -40],
                        RacuteOcircumflex: [-20, -20, -20, -20, -30, -40, -40, -40],
                        RacuteOdieresis: [-20, -20, -20, -20, -30, -40, -40, -40],
                        RacuteOgrave: [-20, -20, -20, -20, -30, -40, -40, -40],
                        RacuteOhungarumlaut: [-20, -20, -20, -20, -30, -40, -40, -40],
                        RacuteOmacron: [-20, -20, -20, -20, -30, -40, -40, -40],
                        RacuteOslash: [-20, -20, -20, -20, -30, -40, -40, -40],
                        RacuteOtilde: [-20, -20, -20, -20, -30, -40, -40, -40],
                        RacuteT: [-20, -20, -30, -30, -40, -30, 0, -60],
                        RacuteTcaron: [-20, -20, -30, -30, -40, -30, 0, -60],
                        RacuteTcommaaccent: [-20, -20, -30, -30, -40, -30, 0, -60],
                        RacuteU: [-20, -20, -40, -40, -30, -40, -40, -40],
                        RacuteUacute: [-20, -20, -40, -40, -30, -40, -40, -40],
                        RacuteUcircumflex: [-20, -20, -40, -40, -30, -40, -40, -40],
                        RacuteUdieresis: [-20, -20, -40, -40, -30, -40, -40, -40],
                        RacuteUgrave: [-20, -20, -40, -40, -30, -40, -40, -40],
                        RacuteUhungarumlaut: [-20, -20, -40, -40, -30, -40, -40, -40],
                        RacuteUmacron: [-20, -20, -40, -40, -30, -40, -40, -40],
                        RacuteUogonek: [-20, -20, -40, -40, -30, -40, -40, -40],
                        RacuteUring: [-20, -20, -40, -40, -30, -40, -40, -40],
                        RacuteV: [-50, -50, -50, -50, -55, -18, -18, -80],
                        RacuteW: [-40, -40, -30, -30, -35, -18, -18, -55],
                        RacuteY: [-50, -50, -50, -50, -35, -18, -18, -65],
                        RacuteYacute: [-50, -50, -50, -50, -35, -18, -18, -65],
                        RacuteYdieresis: [-50, -50, -50, -50, -35, -18, -18, -65],
                        RcaronO: [-20, -20, -20, -20, -30, -40, -40, -40],
                        RcaronOacute: [-20, -20, -20, -20, -30, -40, -40, -40],
                        RcaronOcircumflex: [-20, -20, -20, -20, -30, -40, -40, -40],
                        RcaronOdieresis: [-20, -20, -20, -20, -30, -40, -40, -40],
                        RcaronOgrave: [-20, -20, -20, -20, -30, -40, -40, -40],
                        RcaronOhungarumlaut: [-20, -20, -20, -20, -30, -40, -40, -40],
                        RcaronOmacron: [-20, -20, -20, -20, -30, -40, -40, -40],
                        RcaronOslash: [-20, -20, -20, -20, -30, -40, -40, -40],
                        RcaronOtilde: [-20, -20, -20, -20, -30, -40, -40, -40],
                        RcaronT: [-20, -20, -30, -30, -40, -30, 0, -60],
                        RcaronTcaron: [-20, -20, -30, -30, -40, -30, 0, -60],
                        RcaronTcommaaccent: [-20, -20, -30, -30, -40, -30, 0, -60],
                        RcaronU: [-20, -20, -40, -40, -30, -40, -40, -40],
                        RcaronUacute: [-20, -20, -40, -40, -30, -40, -40, -40],
                        RcaronUcircumflex: [-20, -20, -40, -40, -30, -40, -40, -40],
                        RcaronUdieresis: [-20, -20, -40, -40, -30, -40, -40, -40],
                        RcaronUgrave: [-20, -20, -40, -40, -30, -40, -40, -40],
                        RcaronUhungarumlaut: [-20, -20, -40, -40, -30, -40, -40, -40],
                        RcaronUmacron: [-20, -20, -40, -40, -30, -40, -40, -40],
                        RcaronUogonek: [-20, -20, -40, -40, -30, -40, -40, -40],
                        RcaronUring: [-20, -20, -40, -40, -30, -40, -40, -40],
                        RcaronV: [-50, -50, -50, -50, -55, -18, -18, -80],
                        RcaronW: [-40, -40, -30, -30, -35, -18, -18, -55],
                        RcaronY: [-50, -50, -50, -50, -35, -18, -18, -65],
                        RcaronYacute: [-50, -50, -50, -50, -35, -18, -18, -65],
                        RcaronYdieresis: [-50, -50, -50, -50, -35, -18, -18, -65],
                        RcommaaccentO: [-20, -20, -20, -20, -30, -40, -40, -40],
                        RcommaaccentOacute: [-20, -20, -20, -20, -30, -40, -40, -40],
                        RcommaaccentOcircumflex: [-20, -20, -20, -20, -30, -40, -40, -40],
                        RcommaaccentOdieresis: [-20, -20, -20, -20, -30, -40, -40, -40],
                        RcommaaccentOgrave: [-20, -20, -20, -20, -30, -40, -40, -40],
                        RcommaaccentOhungarumlaut: [-20, -20, -20, -20, -30, -40, -40, -40],
                        RcommaaccentOmacron: [-20, -20, -20, -20, -30, -40, -40, -40],
                        RcommaaccentOslash: [-20, -20, -20, -20, -30, -40, -40, -40],
                        RcommaaccentOtilde: [-20, -20, -20, -20, -30, -40, -40, -40],
                        RcommaaccentT: [-20, -20, -30, -30, -40, -30, 0, -60],
                        RcommaaccentTcaron: [-20, -20, -30, -30, -40, -30, 0, -60],
                        RcommaaccentTcommaaccent: [-20, -20, -30, -30, -40, -30, 0, -60],
                        RcommaaccentU: [-20, -20, -40, -40, -30, -40, -40, -40],
                        RcommaaccentUacute: [-20, -20, -40, -40, -30, -40, -40, -40],
                        RcommaaccentUcircumflex: [-20, -20, -40, -40, -30, -40, -40, -40],
                        RcommaaccentUdieresis: [-20, -20, -40, -40, -30, -40, -40, -40],
                        RcommaaccentUgrave: [-20, -20, -40, -40, -30, -40, -40, -40],
                        RcommaaccentUhungarumlaut: [-20, -20, -40, -40, -30, -40, -40, -40],
                        RcommaaccentUmacron: [-20, -20, -40, -40, -30, -40, -40, -40],
                        RcommaaccentUogonek: [-20, -20, -40, -40, -30, -40, -40, -40],
                        RcommaaccentUring: [-20, -20, -40, -40, -30, -40, -40, -40],
                        RcommaaccentV: [-50, -50, -50, -50, -55, -18, -18, -80],
                        RcommaaccentW: [-40, -40, -30, -30, -35, -18, -18, -55],
                        RcommaaccentY: [-50, -50, -50, -50, -35, -18, -18, -65],
                        RcommaaccentYacute: [-50, -50, -50, -50, -35, -18, -18, -65],
                        RcommaaccentYdieresis: [-50, -50, -50, -50, -35, -18, -18, -65],
                        TA: [-90, -90, -120, -120, -90, -55, -50, -93],
                        TAacute: [-90, -90, -120, -120, -90, -55, -50, -93],
                        TAbreve: [-90, -90, -120, -120, -90, -55, -50, -93],
                        TAcircumflex: [-90, -90, -120, -120, -90, -55, -50, -93],
                        TAdieresis: [-90, -90, -120, -120, -90, -55, -50, -93],
                        TAgrave: [-90, -90, -120, -120, -90, -55, -50, -93],
                        TAmacron: [-90, -90, -120, -120, -90, -55, -50, -93],
                        TAogonek: [-90, -90, -120, -120, -90, -55, -50, -93],
                        TAring: [-90, -90, -120, -120, -90, -55, -50, -93],
                        TAtilde: [-90, -90, -120, -120, -90, -55, -50, -93],
                        TO: [-40, -40, -40, -40, -18, -18, -18, -18],
                        TOacute: [-40, -40, -40, -40, -18, -18, -18, -18],
                        TOcircumflex: [-40, -40, -40, -40, -18, -18, -18, -18],
                        TOdieresis: [-40, -40, -40, -40, -18, -18, -18, -18],
                        TOgrave: [-40, -40, -40, -40, -18, -18, -18, -18],
                        TOhungarumlaut: [-40, -40, -40, -40, -18, -18, -18, -18],
                        TOmacron: [-40, -40, -40, -40, -18, -18, -18, -18],
                        TOslash: [-40, -40, -40, -40, -18, -18, -18, -18],
                        TOtilde: [-40, -40, -40, -40, -18, -18, -18, -18],
                        Ta: [-80, -80, -120, -120, -92, -92, -92, -80],
                        Taacute: [-80, -80, -120, -120, -92, -92, -92, -80],
                        Tabreve: [-80, -80, -60, -60, -52, -92, -92, -80],
                        Tacircumflex: [-80, -80, -120, -120, -52, -92, -92, -80],
                        Tadieresis: [-80, -80, -120, -120, -52, -92, -92, -40],
                        Tagrave: [-80, -80, -120, -120, -52, -92, -92, -40],
                        Tamacron: [-80, -80, -60, -60, -52, -92, -92, -40],
                        Taogonek: [-80, -80, -120, -120, -92, -92, -92, -80],
                        Taring: [-80, -80, -120, -120, -92, -92, -92, -80],
                        Tatilde: [-80, -80, -60, -60, -52, -92, -92, -40],
                        Tcolon: [-40, -40, -20, -20, -74, -74, -55, -50],
                        Tcomma: [-80, -80, -120, -120, -74, -92, -74, -74],
                        Te: [-60, -60, -120, -120, -92, -92, -92, -70],
                        Teacute: [-60, -60, -120, -120, -92, -92, -92, -70],
                        Tecaron: [-60, -60, -120, -120, -92, -92, -92, -70],
                        Tecircumflex: [-60, -60, -120, -120, -92, -92, -52, -70],
                        Tedieresis: [-60, -60, -120, -120, -52, -52, -52, -30],
                        Tedotaccent: [-60, -60, -120, -120, -92, -92, -92, -70],
                        Tegrave: [-60, -60, -60, -60, -52, -52, -52, -70],
                        Temacron: [-60, -60, -60, -60, -52, -52, -52, -30],
                        Teogonek: [-60, -60, -120, -120, -92, -92, -92, -70],
                        Thyphen: [-120, -120, -140, -140, -92, -92, -74, -92],
                        To: [-80, -80, -120, -120, -92, -95, -92, -80],
                        Toacute: [-80, -80, -120, -120, -92, -95, -92, -80],
                        Tocircumflex: [-80, -80, -120, -120, -92, -95, -92, -80],
                        Todieresis: [-80, -80, -120, -120, -92, -95, -92, -80],
                        Tograve: [-80, -80, -120, -120, -92, -95, -92, -80],
                        Tohungarumlaut: [-80, -80, -120, -120, -92, -95, -92, -80],
                        Tomacron: [-80, -80, -60, -60, -92, -95, -92, -80],
                        Toslash: [-80, -80, -120, -120, -92, -95, -92, -80],
                        Totilde: [-80, -80, -60, -60, -92, -95, -92, -80],
                        Tperiod: [-80, -80, -120, -120, -90, -92, -74, -74],
                        Tr: [-80, -80, -120, -120, -74, -37, -55, -35],
                        Tracute: [-80, -80, -120, -120, -74, -37, -55, -35],
                        Trcommaaccent: [-80, -80, -120, -120, -74, -37, -55, -35],
                        Tsemicolon: [-40, -40, -20, -20, -74, -74, -65, -55],
                        Tu: [-90, -90, -120, -120, -92, -37, -55, -45],
                        Tuacute: [-90, -90, -120, -120, -92, -37, -55, -45],
                        Tucircumflex: [-90, -90, -120, -120, -92, -37, -55, -45],
                        Tudieresis: [-90, -90, -120, -120, -92, -37, -55, -45],
                        Tugrave: [-90, -90, -120, -120, -92, -37, -55, -45],
                        Tuhungarumlaut: [-90, -90, -120, -120, -92, -37, -55, -45],
                        Tumacron: [-90, -90, -60, -60, -92, -37, -55, -45],
                        Tuogonek: [-90, -90, -120, -120, -92, -37, -55, -45],
                        Turing: [-90, -90, -120, -120, -92, -37, -55, -45],
                        Tw: [-60, -60, -120, -120, -74, -37, -74, -80],
                        Ty: [-60, -60, -120, -120, -34, -37, -74, -80],
                        Tyacute: [-60, -60, -120, -120, -34, -37, -74, -80],
                        Tydieresis: [-60, -60, -60, -60, -34, -37, -34, -80],
                        TcaronA: [-90, -90, -120, -120, -90, -55, -50, -93],
                        TcaronAacute: [-90, -90, -120, -120, -90, -55, -50, -93],
                        TcaronAbreve: [-90, -90, -120, -120, -90, -55, -50, -93],
                        TcaronAcircumflex: [-90, -90, -120, -120, -90, -55, -50, -93],
                        TcaronAdieresis: [-90, -90, -120, -120, -90, -55, -50, -93],
                        TcaronAgrave: [-90, -90, -120, -120, -90, -55, -50, -93],
                        TcaronAmacron: [-90, -90, -120, -120, -90, -55, -50, -93],
                        TcaronAogonek: [-90, -90, -120, -120, -90, -55, -50, -93],
                        TcaronAring: [-90, -90, -120, -120, -90, -55, -50, -93],
                        TcaronAtilde: [-90, -90, -120, -120, -90, -55, -50, -93],
                        TcaronO: [-40, -40, -40, -40, -18, -18, -18, -18],
                        TcaronOacute: [-40, -40, -40, -40, -18, -18, -18, -18],
                        TcaronOcircumflex: [-40, -40, -40, -40, -18, -18, -18, -18],
                        TcaronOdieresis: [-40, -40, -40, -40, -18, -18, -18, -18],
                        TcaronOgrave: [-40, -40, -40, -40, -18, -18, -18, -18],
                        TcaronOhungarumlaut: [-40, -40, -40, -40, -18, -18, -18, -18],
                        TcaronOmacron: [-40, -40, -40, -40, -18, -18, -18, -18],
                        TcaronOslash: [-40, -40, -40, -40, -18, -18, -18, -18],
                        TcaronOtilde: [-40, -40, -40, -40, -18, -18, -18, -18],
                        Tcarona: [-80, -80, -120, -120, -92, -92, -92, -80],
                        Tcaronaacute: [-80, -80, -120, -120, -92, -92, -92, -80],
                        Tcaronabreve: [-80, -80, -60, -60, -52, -92, -92, -80],
                        Tcaronacircumflex: [-80, -80, -120, -120, -52, -92, -92, -80],
                        Tcaronadieresis: [-80, -80, -120, -120, -52, -92, -92, -40],
                        Tcaronagrave: [-80, -80, -120, -120, -52, -92, -92, -40],
                        Tcaronamacron: [-80, -80, -60, -60, -52, -92, -92, -40],
                        Tcaronaogonek: [-80, -80, -120, -120, -92, -92, -92, -80],
                        Tcaronaring: [-80, -80, -120, -120, -92, -92, -92, -80],
                        Tcaronatilde: [-80, -80, -60, -60, -52, -92, -92, -40],
                        Tcaroncolon: [-40, -40, -20, -20, -74, -74, -55, -50],
                        Tcaroncomma: [-80, -80, -120, -120, -74, -92, -74, -74],
                        Tcarone: [-60, -60, -120, -120, -92, -92, -92, -70],
                        Tcaroneacute: [-60, -60, -120, -120, -92, -92, -92, -70],
                        Tcaronecaron: [-60, -60, -120, -120, -92, -92, -92, -70],
                        Tcaronecircumflex: [-60, -60, -120, -120, -92, -92, -52, -30],
                        Tcaronedieresis: [-60, -60, -120, -120, -52, -52, -52, -30],
                        Tcaronedotaccent: [-60, -60, -120, -120, -92, -92, -92, -70],
                        Tcaronegrave: [-60, -60, -60, -60, -52, -52, -52, -70],
                        Tcaronemacron: [-60, -60, -60, -60, -52, -52, -52, -30],
                        Tcaroneogonek: [-60, -60, -120, -120, -92, -92, -92, -70],
                        Tcaronhyphen: [-120, -120, -140, -140, -92, -92, -74, -92],
                        Tcarono: [-80, -80, -120, -120, -92, -95, -92, -80],
                        Tcaronoacute: [-80, -80, -120, -120, -92, -95, -92, -80],
                        Tcaronocircumflex: [-80, -80, -120, -120, -92, -95, -92, -80],
                        Tcaronodieresis: [-80, -80, -120, -120, -92, -95, -92, -80],
                        Tcaronograve: [-80, -80, -120, -120, -92, -95, -92, -80],
                        Tcaronohungarumlaut: [-80, -80, -120, -120, -92, -95, -92, -80],
                        Tcaronomacron: [-80, -80, -60, -60, -92, -95, -92, -80],
                        Tcaronoslash: [-80, -80, -120, -120, -92, -95, -92, -80],
                        Tcaronotilde: [-80, -80, -60, -60, -92, -95, -92, -80],
                        Tcaronperiod: [-80, -80, -120, -120, -90, -92, -74, -74],
                        Tcaronr: [-80, -80, -120, -120, -74, -37, -55, -35],
                        Tcaronracute: [-80, -80, -120, -120, -74, -37, -55, -35],
                        Tcaronrcommaaccent: [-80, -80, -120, -120, -74, -37, -55, -35],
                        Tcaronsemicolon: [-40, -40, -20, -20, -74, -74, -65, -55],
                        Tcaronu: [-90, -90, -120, -120, -92, -37, -55, -45],
                        Tcaronuacute: [-90, -90, -120, -120, -92, -37, -55, -45],
                        Tcaronucircumflex: [-90, -90, -120, -120, -92, -37, -55, -45],
                        Tcaronudieresis: [-90, -90, -120, -120, -92, -37, -55, -45],
                        Tcaronugrave: [-90, -90, -120, -120, -92, -37, -55, -45],
                        Tcaronuhungarumlaut: [-90, -90, -120, -120, -92, -37, -55, -45],
                        Tcaronumacron: [-90, -90, -60, -60, -92, -37, -55, -45],
                        Tcaronuogonek: [-90, -90, -120, -120, -92, -37, -55, -45],
                        Tcaronuring: [-90, -90, -120, -120, -92, -37, -55, -45],
                        Tcaronw: [-60, -60, -120, -120, -74, -37, -74, -80],
                        Tcarony: [-60, -60, -120, -120, -34, -37, -74, -80],
                        Tcaronyacute: [-60, -60, -120, -120, -34, -37, -74, -80],
                        Tcaronydieresis: [-60, -60, -60, -60, -34, -37, -34, -80],
                        TcommaaccentA: [-90, -90, -120, -120, -90, -55, -50, -93],
                        TcommaaccentAacute: [-90, -90, -120, -120, -90, -55, -50, -93],
                        TcommaaccentAbreve: [-90, -90, -120, -120, -90, -55, -50, -93],
                        TcommaaccentAcircumflex: [-90, -90, -120, -120, -90, -55, -50, -93],
                        TcommaaccentAdieresis: [-90, -90, -120, -120, -90, -55, -50, -93],
                        TcommaaccentAgrave: [-90, -90, -120, -120, -90, -55, -50, -93],
                        TcommaaccentAmacron: [-90, -90, -120, -120, -90, -55, -50, -93],
                        TcommaaccentAogonek: [-90, -90, -120, -120, -90, -55, -50, -93],
                        TcommaaccentAring: [-90, -90, -120, -120, -90, -55, -50, -93],
                        TcommaaccentAtilde: [-90, -90, -120, -120, -90, -55, -50, -93],
                        TcommaaccentO: [-40, -40, -40, -40, -18, -18, -18, -18],
                        TcommaaccentOacute: [-40, -40, -40, -40, -18, -18, -18, -18],
                        TcommaaccentOcircumflex: [-40, -40, -40, -40, -18, -18, -18, -18],
                        TcommaaccentOdieresis: [-40, -40, -40, -40, -18, -18, -18, -18],
                        TcommaaccentOgrave: [-40, -40, -40, -40, -18, -18, -18, -18],
                        TcommaaccentOhungarumlaut: [-40, -40, -40, -40, -18, -18, -18, -18],
                        TcommaaccentOmacron: [-40, -40, -40, -40, -18, -18, -18, -18],
                        TcommaaccentOslash: [-40, -40, -40, -40, -18, -18, -18, -18],
                        TcommaaccentOtilde: [-40, -40, -40, -40, -18, -18, -18, -18],
                        Tcommaaccenta: [-80, -80, -120, -120, -92, -92, -92, -80],
                        Tcommaaccentaacute: [-80, -80, -120, -120, -92, -92, -92, -80],
                        Tcommaaccentabreve: [-80, -80, -60, -60, -52, -92, -92, -80],
                        Tcommaaccentacircumflex: [-80, -80, -120, -120, -52, -92, -92, -80],
                        Tcommaaccentadieresis: [-80, -80, -120, -120, -52, -92, -92, -40],
                        Tcommaaccentagrave: [-80, -80, -120, -120, -52, -92, -92, -40],
                        Tcommaaccentamacron: [-80, -80, -60, -60, -52, -92, -92, -40],
                        Tcommaaccentaogonek: [-80, -80, -120, -120, -92, -92, -92, -80],
                        Tcommaaccentaring: [-80, -80, -120, -120, -92, -92, -92, -80],
                        Tcommaaccentatilde: [-80, -80, -60, -60, -52, -92, -92, -40],
                        Tcommaaccentcolon: [-40, -40, -20, -20, -74, -74, -55, -50],
                        Tcommaaccentcomma: [-80, -80, -120, -120, -74, -92, -74, -74],
                        Tcommaaccente: [-60, -60, -120, -120, -92, -92, -92, -70],
                        Tcommaaccenteacute: [-60, -60, -120, -120, -92, -92, -92, -70],
                        Tcommaaccentecaron: [-60, -60, -120, -120, -92, -92, -92, -70],
                        Tcommaaccentecircumflex: [-60, -60, -120, -120, -92, -92, -52, -30],
                        Tcommaaccentedieresis: [-60, -60, -120, -120, -52, -52, -52, -30],
                        Tcommaaccentedotaccent: [-60, -60, -120, -120, -92, -92, -92, -70],
                        Tcommaaccentegrave: [-60, -60, -60, -60, -52, -52, -52, -30],
                        Tcommaaccentemacron: [-60, -60, -60, -60, -52, -52, -52, -70],
                        Tcommaaccenteogonek: [-60, -60, -120, -120, -92, -92, -92, -70],
                        Tcommaaccenthyphen: [-120, -120, -140, -140, -92, -92, -74, -92],
                        Tcommaaccento: [-80, -80, -120, -120, -92, -95, -92, -80],
                        Tcommaaccentoacute: [-80, -80, -120, -120, -92, -95, -92, -80],
                        Tcommaaccentocircumflex: [-80, -80, -120, -120, -92, -95, -92, -80],
                        Tcommaaccentodieresis: [-80, -80, -120, -120, -92, -95, -92, -80],
                        Tcommaaccentograve: [-80, -80, -120, -120, -92, -95, -92, -80],
                        Tcommaaccentohungarumlaut: [-80, -80, -120, -120, -92, -95, -92, -80],
                        Tcommaaccentomacron: [-80, -80, -60, -60, -92, -95, -92, -80],
                        Tcommaaccentoslash: [-80, -80, -120, -120, -92, -95, -92, -80],
                        Tcommaaccentotilde: [-80, -80, -60, -60, -92, -95, -92, -80],
                        Tcommaaccentperiod: [-80, -80, -120, -120, -90, -92, -74, -74],
                        Tcommaaccentr: [-80, -80, -120, -120, -74, -37, -55, -35],
                        Tcommaaccentracute: [-80, -80, -120, -120, -74, -37, -55, -35],
                        Tcommaaccentrcommaaccent: [-80, -80, -120, -120, -74, -37, -55, -35],
                        Tcommaaccentsemicolon: [-40, -40, -20, -20, -74, -74, -65, -55],
                        Tcommaaccentu: [-90, -90, -120, -120, -92, -37, -55, -45],
                        Tcommaaccentuacute: [-90, -90, -120, -120, -92, -37, -55, -45],
                        Tcommaaccentucircumflex: [-90, -90, -120, -120, -92, -37, -55, -45],
                        Tcommaaccentudieresis: [-90, -90, -120, -120, -92, -37, -55, -45],
                        Tcommaaccentugrave: [-90, -90, -120, -120, -92, -37, -55, -45],
                        Tcommaaccentuhungarumlaut: [-90, -90, -120, -120, -92, -37, -55, -45],
                        Tcommaaccentumacron: [-90, -90, -60, -60, -92, -37, -55, -45],
                        Tcommaaccentuogonek: [-90, -90, -120, -120, -92, -37, -55, -45],
                        Tcommaaccenturing: [-90, -90, -120, -120, -92, -37, -55, -45],
                        Tcommaaccentw: [-60, -60, -120, -120, -74, -37, -74, -80],
                        Tcommaaccenty: [-60, -60, -120, -120, -34, -37, -74, -80],
                        Tcommaaccentyacute: [-60, -60, -120, -120, -34, -37, -74, -80],
                        Tcommaaccentydieresis: [-60, -60, -60, -60, -34, -37, -34, -80],
                        UA: [-50, -50, -40, -40, -60, -45, -40, -40],
                        UAacute: [-50, -50, -40, -40, -60, -45, -40, -40],
                        UAbreve: [-50, -50, -40, -40, -60, -45, -40, -40],
                        UAcircumflex: [-50, -50, -40, -40, -60, -45, -40, -40],
                        UAdieresis: [-50, -50, -40, -40, -60, -45, -40, -40],
                        UAgrave: [-50, -50, -40, -40, -60, -45, -40, -40],
                        UAmacron: [-50, -50, -40, -40, -60, -45, -40, -40],
                        UAogonek: [-50, -50, -40, -40, -60, -45, -40, -40],
                        UAring: [-50, -50, -40, -40, -60, -45, -40, -40],
                        UAtilde: [-50, -50, -40, -40, -60, -45, -40, -40],
                        Ucomma: [-30, -30, -40, -40, -50, 0, -25],
                        Uperiod: [-30, -30, -40, -40, -50, 0, -25],
                        UacuteA: [-50, -50, -40, -40, -60, -45, -40, -40],
                        UacuteAacute: [-50, -50, -40, -40, -60, -45, -40, -40],
                        UacuteAbreve: [-50, -50, -40, -40, -60, -45, -40, -40],
                        UacuteAcircumflex: [-50, -50, -40, -40, -60, -45, -40, -40],
                        UacuteAdieresis: [-50, -50, -40, -40, -60, -45, -40, -40],
                        UacuteAgrave: [-50, -50, -40, -40, -60, -45, -40, -40],
                        UacuteAmacron: [-50, -50, -40, -40, -60, -45, -40, -40],
                        UacuteAogonek: [-50, -50, -40, -40, -60, -45, -40, -40],
                        UacuteAring: [-50, -50, -40, -40, -60, -45, -40, -40],
                        UacuteAtilde: [-50, -50, -40, -40, -60, -45, -40, -40],
                        Uacutecomma: [-30, -30, -40, -40, -50, 0, -25],
                        Uacuteperiod: [-30, -30, -40, -40, -50, 0, -25],
                        UcircumflexA: [-50, -50, -40, -40, -60, -45, -40, -40],
                        UcircumflexAacute: [-50, -50, -40, -40, -60, -45, -40, -40],
                        UcircumflexAbreve: [-50, -50, -40, -40, -60, -45, -40, -40],
                        UcircumflexAcircumflex: [-50, -50, -40, -40, -60, -45, -40, -40],
                        UcircumflexAdieresis: [-50, -50, -40, -40, -60, -45, -40, -40],
                        UcircumflexAgrave: [-50, -50, -40, -40, -60, -45, -40, -40],
                        UcircumflexAmacron: [-50, -50, -40, -40, -60, -45, -40, -40],
                        UcircumflexAogonek: [-50, -50, -40, -40, -60, -45, -40, -40],
                        UcircumflexAring: [-50, -50, -40, -40, -60, -45, -40, -40],
                        UcircumflexAtilde: [-50, -50, -40, -40, -60, -45, -40, -40],
                        Ucircumflexcomma: [-30, -30, -40, -40, -50, 0, -25],
                        Ucircumflexperiod: [-30, -30, -40, -40, -50, 0, -25],
                        UdieresisA: [-50, -50, -40, -40, -60, -45, -40, -40],
                        UdieresisAacute: [-50, -50, -40, -40, -60, -45, -40, -40],
                        UdieresisAbreve: [-50, -50, -40, -40, -60, -45, -40, -40],
                        UdieresisAcircumflex: [-50, -50, -40, -40, -60, -45, -40, -40],
                        UdieresisAdieresis: [-50, -50, -40, -40, -60, -45, -40, -40],
                        UdieresisAgrave: [-50, -50, -40, -40, -60, -45, -40, -40],
                        UdieresisAmacron: [-50, -50, -40, -40, -60, -45, -40, -40],
                        UdieresisAogonek: [-50, -50, -40, -40, -60, -45, -40, -40],
                        UdieresisAring: [-50, -50, -40, -40, -60, -45, -40, -40],
                        UdieresisAtilde: [-50, -50, -40, -40, -60, -45, -40, -40],
                        Udieresiscomma: [-30, -30, -40, -40, -50, 0, -25],
                        Udieresisperiod: [-30, -30, -40, -40, -50, 0, -25],
                        UgraveA: [-50, -50, -40, -40, -60, -45, -40, -40],
                        UgraveAacute: [-50, -50, -40, -40, -60, -45, -40, -40],
                        UgraveAbreve: [-50, -50, -40, -40, -60, -45, -40, -40],
                        UgraveAcircumflex: [-50, -50, -40, -40, -60, -45, -40, -40],
                        UgraveAdieresis: [-50, -50, -40, -40, -60, -45, -40, -40],
                        UgraveAgrave: [-50, -50, -40, -40, -60, -45, -40, -40],
                        UgraveAmacron: [-50, -50, -40, -40, -60, -45, -40, -40],
                        UgraveAogonek: [-50, -50, -40, -40, -60, -45, -40, -40],
                        UgraveAring: [-50, -50, -40, -40, -60, -45, -40, -40],
                        UgraveAtilde: [-50, -50, -40, -40, -60, -45, -40, -40],
                        Ugravecomma: [-30, -30, -40, -40, -50, 0, -25],
                        Ugraveperiod: [-30, -30, -40, -40, -50, 0, -25],
                        UhungarumlautA: [-50, -50, -40, -40, -60, -45, -40, -40],
                        UhungarumlautAacute: [-50, -50, -40, -40, -60, -45, -40, -40],
                        UhungarumlautAbreve: [-50, -50, -40, -40, -60, -45, -40, -40],
                        UhungarumlautAcircumflex: [-50, -50, -40, -40, -60, -45, -40, -40],
                        UhungarumlautAdieresis: [-50, -50, -40, -40, -60, -45, -40, -40],
                        UhungarumlautAgrave: [-50, -50, -40, -40, -60, -45, -40, -40],
                        UhungarumlautAmacron: [-50, -50, -40, -40, -60, -45, -40, -40],
                        UhungarumlautAogonek: [-50, -50, -40, -40, -60, -45, -40, -40],
                        UhungarumlautAring: [-50, -50, -40, -40, -60, -45, -40, -40],
                        UhungarumlautAtilde: [-50, -50, -40, -40, -60, -45, -40, -40],
                        Uhungarumlautcomma: [-30, -30, -40, -40, -50, 0, -25],
                        Uhungarumlautperiod: [-30, -30, -40, -40, -50, 0, -25],
                        UmacronA: [-50, -50, -40, -40, -60, -45, -40, -40],
                        UmacronAacute: [-50, -50, -40, -40, -60, -45, -40, -40],
                        UmacronAbreve: [-50, -50, -40, -40, -60, -45, -40, -40],
                        UmacronAcircumflex: [-50, -50, -40, -40, -60, -45, -40, -40],
                        UmacronAdieresis: [-50, -50, -40, -40, -60, -45, -40, -40],
                        UmacronAgrave: [-50, -50, -40, -40, -60, -45, -40, -40],
                        UmacronAmacron: [-50, -50, -40, -40, -60, -45, -40, -40],
                        UmacronAogonek: [-50, -50, -40, -40, -60, -45, -40, -40],
                        UmacronAring: [-50, -50, -40, -40, -60, -45, -40, -40],
                        UmacronAtilde: [-50, -50, -40, -40, -60, -45, -40, -40],
                        Umacroncomma: [-30, -30, -40, -40, -50, 0, -25],
                        Umacronperiod: [-30, -30, -40, -40, -50, 0, -25],
                        UogonekA: [-50, -50, -40, -40, -60, -45, -40, -40],
                        UogonekAacute: [-50, -50, -40, -40, -60, -45, -40, -40],
                        UogonekAbreve: [-50, -50, -40, -40, -60, -45, -40, -40],
                        UogonekAcircumflex: [-50, -50, -40, -40, -60, -45, -40, -40],
                        UogonekAdieresis: [-50, -50, -40, -40, -60, -45, -40, -40],
                        UogonekAgrave: [-50, -50, -40, -40, -60, -45, -40, -40],
                        UogonekAmacron: [-50, -50, -40, -40, -60, -45, -40, -40],
                        UogonekAogonek: [-50, -50, -40, -40, -60, -45, -40, -40],
                        UogonekAring: [-50, -50, -40, -40, -60, -45, -40, -40],
                        UogonekAtilde: [-50, -50, -40, -40, -60, -45, -40, -40],
                        Uogonekcomma: [-30, -30, -40, -40, -50, 0, -25],
                        Uogonekperiod: [-30, -30, -40, -40, -50, 0, -25],
                        UringA: [-50, -50, -40, -40, -60, -45, -40, -40],
                        UringAacute: [-50, -50, -40, -40, -60, -45, -40, -40],
                        UringAbreve: [-50, -50, -40, -40, -60, -45, -40, -40],
                        UringAcircumflex: [-50, -50, -40, -40, -60, -45, -40, -40],
                        UringAdieresis: [-50, -50, -40, -40, -60, -45, -40, -40],
                        UringAgrave: [-50, -50, -40, -40, -60, -45, -40, -40],
                        UringAmacron: [-50, -50, -40, -40, -60, -45, -40, -40],
                        UringAogonek: [-50, -50, -40, -40, -60, -45, -40, -40],
                        UringAring: [-50, -50, -40, -40, -60, -45, -40, -40],
                        UringAtilde: [-50, -50, -40, -40, -60, -45, -40, -40],
                        Uringcomma: [-30, -30, -40, -40, -50, 0, -25],
                        Uringperiod: [-30, -30, -40, -40, -50, 0, -25],
                        VA: [-80, -80, -80, -80, -135, -85, -60, -135],
                        VAacute: [-80, -80, -80, -80, -135, -85, -60, -135],
                        VAbreve: [-80, -80, -80, -80, -135, -85, -60, -135],
                        VAcircumflex: [-80, -80, -80, -80, -135, -85, -60, -135],
                        VAdieresis: [-80, -80, -80, -80, -135, -85, -60, -135],
                        VAgrave: [-80, -80, -80, -80, -135, -85, -60, -135],
                        VAmacron: [-80, -80, -80, -80, -135, -85, -60, -135],
                        VAogonek: [-80, -80, -80, -80, -135, -85, -60, -135],
                        VAring: [-80, -80, -80, -80, -135, -85, -60, -135],
                        VAtilde: [-80, -80, -80, -80, -135, -85, -60, -135],
                        VG: [-50, -50, -40, -40, -30, -10, 0, -15],
                        VGbreve: [-50, -50, -40, -40, -30, -10, 0, -15],
                        VGcommaaccent: [-50, -50, -40, -40, -30, -10, 0, -15],
                        VO: [-50, -50, -40, -40, -45, -30, -30, -40],
                        VOacute: [-50, -50, -40, -40, -45, -30, -30, -40],
                        VOcircumflex: [-50, -50, -40, -40, -45, -30, -30, -40],
                        VOdieresis: [-50, -50, -40, -40, -45, -30, -30, -40],
                        VOgrave: [-50, -50, -40, -40, -45, -30, -30, -40],
                        VOhungarumlaut: [-50, -50, -40, -40, -45, -30, -30, -40],
                        VOmacron: [-50, -50, -40, -40, -45, -30, -30, -40],
                        VOslash: [-50, -50, -40, -40, -45, -30, -30, -40],
                        VOtilde: [-50, -50, -40, -40, -45, -30, -30, -40],
                        Va: [-60, -60, -70, -70, -92, -111, -111, -111],
                        Vaacute: [-60, -60, -70, -70, -92, -111, -111, -111],
                        Vabreve: [-60, -60, -70, -70, -92, -111, -111, -111],
                        Vacircumflex: [-60, -60, -70, -70, -92, -111, -111, -71],
                        Vadieresis: [-60, -60, -70, -70, -92, -111, -111, -71],
                        Vagrave: [-60, -60, -70, -70, -92, -111, -111, -71],
                        Vamacron: [-60, -60, -70, -70, -92, -111, -111, -71],
                        Vaogonek: [-60, -60, -70, -70, -92, -111, -111, -111],
                        Varing: [-60, -60, -70, -70, -92, -111, -111, -111],
                        Vatilde: [-60, -60, -70, -70, -92, -111, -111, -71],
                        Vcolon: [-40, -40, -40, -40, -92, -74, -65, -74],
                        Vcomma: [-120, -120, -125, -125, -129, -129, -129, -129],
                        Ve: [-50, -50, -80, -80, -100, -111, -111, -111],
                        Veacute: [-50, -50, -80, -80, -100, -111, -111, -111],
                        Vecaron: [-50, -50, -80, -80, -100, -111, -111, -71],
                        Vecircumflex: [-50, -50, -80, -80, -100, -111, -111, -71],
                        Vedieresis: [-50, -50, -80, -80, -100, -71, -71, -71],
                        Vedotaccent: [-50, -50, -80, -80, -100, -111, -111, -111],
                        Vegrave: [-50, -50, -80, -80, -100, -71, -71, -71],
                        Vemacron: [-50, -50, -80, -80, -100, -71, -71, -71],
                        Veogonek: [-50, -50, -80, -80, -100, -111, -111, -111],
                        Vhyphen: [-80, -80, -80, -80, -74, -70, -55, -100],
                        Vo: [-90, -90, -80, -80, -100, -111, -111, -129],
                        Voacute: [-90, -90, -80, -80, -100, -111, -111, -129],
                        Vocircumflex: [-90, -90, -80, -80, -100, -111, -111, -129],
                        Vodieresis: [-90, -90, -80, -80, -100, -111, -111, -89],
                        Vograve: [-90, -90, -80, -80, -100, -111, -111, -89],
                        Vohungarumlaut: [-90, -90, -80, -80, -100, -111, -111, -129],
                        Vomacron: [-90, -90, -80, -80, -100, -111, -111, -89],
                        Voslash: [-90, -90, -80, -80, -100, -111, -111, -129],
                        Votilde: [-90, -90, -80, -80, -100, -111, -111, -89],
                        Vperiod: [-120, -120, -125, -125, -145, -129, -129, -129],
                        Vsemicolon: [-40, -40, -40, -40, -92, -74, -74, -74],
                        Vu: [-60, -60, -70, -70, -92, -55, -74, -75],
                        Vuacute: [-60, -60, -70, -70, -92, -55, -74, -75],
                        Vucircumflex: [-60, -60, -70, -70, -92, -55, -74, -75],
                        Vudieresis: [-60, -60, -70, -70, -92, -55, -74, -75],
                        Vugrave: [-60, -60, -70, -70, -92, -55, -74, -75],
                        Vuhungarumlaut: [-60, -60, -70, -70, -92, -55, -74, -75],
                        Vumacron: [-60, -60, -70, -70, -92, -55, -74, -75],
                        Vuogonek: [-60, -60, -70, -70, -92, -55, -74, -75],
                        Vuring: [-60, -60, -70, -70, -92, -55, -74, -75],
                        WA: [-60, -60, -50, -50, -120, -74, -60, -120],
                        WAacute: [-60, -60, -50, -50, -120, -74, -60, -120],
                        WAbreve: [-60, -60, -50, -50, -120, -74, -60, -120],
                        WAcircumflex: [-60, -60, -50, -50, -120, -74, -60, -120],
                        WAdieresis: [-60, -60, -50, -50, -120, -74, -60, -120],
                        WAgrave: [-60, -60, -50, -50, -120, -74, -60, -120],
                        WAmacron: [-60, -60, -50, -50, -120, -74, -60, -120],
                        WAogonek: [-60, -60, -50, -50, -120, -74, -60, -120],
                        WAring: [-60, -60, -50, -50, -120, -74, -60, -120],
                        WAtilde: [-60, -60, -50, -50, -120, -74, -60, -120],
                        WO: [-20, -20, -20, -20, -10, -15, -25, -10],
                        WOacute: [-20, -20, -20, -20, -10, -15, -25, -10],
                        WOcircumflex: [-20, -20, -20, -20, -10, -15, -25, -10],
                        WOdieresis: [-20, -20, -20, -20, -10, -15, -25, -10],
                        WOgrave: [-20, -20, -20, -20, -10, -15, -25, -10],
                        WOhungarumlaut: [-20, -20, -20, -20, -10, -15, -25, -10],
                        WOmacron: [-20, -20, -20, -20, -10, -15, -25, -10],
                        WOslash: [-20, -20, -20, -20, -10, -15, -25, -10],
                        WOtilde: [-20, -20, -20, -20, -10, -15, -25, -10],
                        Wa: [-40, -40, -40, -40, -65, -85, -92, -80],
                        Waacute: [-40, -40, -40, -40, -65, -85, -92, -80],
                        Wabreve: [-40, -40, -40, -40, -65, -85, -92, -80],
                        Wacircumflex: [-40, -40, -40, -40, -65, -85, -92, -80],
                        Wadieresis: [-40, -40, -40, -40, -65, -85, -92, -80],
                        Wagrave: [-40, -40, -40, -40, -65, -85, -92, -80],
                        Wamacron: [-40, -40, -40, -40, -65, -85, -92, -80],
                        Waogonek: [-40, -40, -40, -40, -65, -85, -92, -80],
                        Waring: [-40, -40, -40, -40, -65, -85, -92, -80],
                        Watilde: [-40, -40, -40, -40, -65, -85, -92, -80],
                        Wcolon: [-10, -10, 0, 0, -55, -55, -65, -37],
                        Wcomma: [-80, -80, -80, -80, -92, -74, -92, -92],
                        We: [-35, -35, -30, -30, -65, -90, -92, -80],
                        Weacute: [-35, -35, -30, -30, -65, -90, -92, -80],
                        Wecaron: [-35, -35, -30, -30, -65, -90, -92, -80],
                        Wecircumflex: [-35, -35, -30, -30, -65, -90, -92, -80],
                        Wedieresis: [-35, -35, -30, -30, -65, -50, -52, -40],
                        Wedotaccent: [-35, -35, -30, -30, -65, -90, -92, -80],
                        Wegrave: [-35, -35, -30, -30, -65, -50, -52, -40],
                        Wemacron: [-35, -35, -30, -30, -65, -50, -52, -40],
                        Weogonek: [-35, -35, -30, -30, -65, -90, -92, -80],
                        Whyphen: [-40, -40, -40, -40, -37, -50, -37, -65],
                        Wo: [-60, -60, -30, -30, -75, -80, -92, -80],
                        Woacute: [-60, -60, -30, -30, -75, -80, -92, -80],
                        Wocircumflex: [-60, -60, -30, -30, -75, -80, -92, -80],
                        Wodieresis: [-60, -60, -30, -30, -75, -80, -92, -80],
                        Wograve: [-60, -60, -30, -30, -75, -80, -92, -80],
                        Wohungarumlaut: [-60, -60, -30, -30, -75, -80, -92, -80],
                        Womacron: [-60, -60, -30, -30, -75, -80, -92, -80],
                        Woslash: [-60, -60, -30, -30, -75, -80, -92, -80],
                        Wotilde: [-60, -60, -30, -30, -75, -80, -92, -80],
                        Wperiod: [-80, -80, -80, -80, -92, -74, -92, -92],
                        Wsemicolon: [-10, -10, 0, 0, -55, -55, -65, -37],
                        Wu: [-45, -45, -30, -30, -50, -55, -55, -50],
                        Wuacute: [-45, -45, -30, -30, -50, -55, -55, -50],
                        Wucircumflex: [-45, -45, -30, -30, -50, -55, -55, -50],
                        Wudieresis: [-45, -45, -30, -30, -50, -55, -55, -50],
                        Wugrave: [-45, -45, -30, -30, -50, -55, -55, -50],
                        Wuhungarumlaut: [-45, -45, -30, -30, -50, -55, -55, -50],
                        Wumacron: [-45, -45, -30, -30, -50, -55, -55, -50],
                        Wuogonek: [-45, -45, -30, -30, -50, -55, -55, -50],
                        Wuring: [-45, -45, -30, -30, -50, -55, -55, -50],
                        Wy: [-20, -20, -20, -20, -60, -55, -70, -73],
                        Wyacute: [-20, -20, -20, -20, -60, -55, -70, -73],
                        Wydieresis: [-20, -20, -20, -20, -60, -55, -70, -73],
                        YA: [-110, -110, -110, -110, -110, -74, -50, -120],
                        YAacute: [-110, -110, -110, -110, -110, -74, -50, -120],
                        YAbreve: [-110, -110, -110, -110, -110, -74, -50, -120],
                        YAcircumflex: [-110, -110, -110, -110, -110, -74, -50, -120],
                        YAdieresis: [-110, -110, -110, -110, -110, -74, -50, -120],
                        YAgrave: [-110, -110, -110, -110, -110, -74, -50, -120],
                        YAmacron: [-110, -110, -110, -110, -110, -74, -50, -120],
                        YAogonek: [-110, -110, -110, -110, -110, -74, -50, -120],
                        YAring: [-110, -110, -110, -110, -110, -74, -50, -120],
                        YAtilde: [-110, -110, -110, -110, -110, -74, -50, -120],
                        YO: [-70, -70, -85, -85, -35, -25, -15, -30],
                        YOacute: [-70, -70, -85, -85, -35, -25, -15, -30],
                        YOcircumflex: [-70, -70, -85, -85, -35, -25, -15, -30],
                        YOdieresis: [-70, -70, -85, -85, -35, -25, -15, -30],
                        YOgrave: [-70, -70, -85, -85, -35, -25, -15, -30],
                        YOhungarumlaut: [-70, -70, -85, -85, -35, -25, -15, -30],
                        YOmacron: [-70, -70, -85, -85, -35, -25, -15, -30],
                        YOslash: [-70, -70, -85, -85, -35, -25, -15, -30],
                        YOtilde: [-70, -70, -85, -85, -35, -25, -15, -30],
                        Ya: [-90, -90, -140, -140, -85, -92, -92, -100],
                        Yaacute: [-90, -90, -140, -140, -85, -92, -92, -100],
                        Yabreve: [-90, -90, -70, -70, -85, -92, -92, -100],
                        Yacircumflex: [-90, -90, -140, -140, -85, -92, -92, -100],
                        Yadieresis: [-90, -90, -140, -140, -85, -92, -92, -60],
                        Yagrave: [-90, -90, -140, -140, -85, -92, -92, -60],
                        Yamacron: [-90, -90, -70, -70, -85, -92, -92, -60],
                        Yaogonek: [-90, -90, -140, -140, -85, -92, -92, -100],
                        Yaring: [-90, -90, -140, -140, -85, -92, -92, -100],
                        Yatilde: [-90, -90, -140, -140, -85, -92, -92, -60],
                        Ycolon: [-50, -50, -60, -60, -92, -92, -65, -92],
                        Ycomma: [-100, -100, -140, -140, -92, -92, -92, -129],
                        Ye: [-80, -80, -140, -140, -111, -111, -92, -100],
                        Yeacute: [-80, -80, -140, -140, -111, -111, -92, -100],
                        Yecaron: [-80, -80, -140, -140, -111, -111, -92, -100],
                        Yecircumflex: [-80, -80, -140, -140, -111, -71, -92, -100],
                        Yedieresis: [-80, -80, -140, -140, -71, -71, -52, -60],
                        Yedotaccent: [-80, -80, -140, -140, -111, -111, -92, -100],
                        Yegrave: [-80, -80, -140, -140, -71, -71, -52, -60],
                        Yemacron: [-80, -80, -70, -70, -71, -71, -52, -60],
                        Yeogonek: [-80, -80, -140, -140, -111, -111, -92, -100],
                        Yo: [-100, -100, -140, -140, -111, -111, -92, -110],
                        Yoacute: [-100, -100, -140, -140, -111, -111, -92, -110],
                        Yocircumflex: [-100, -100, -140, -140, -111, -111, -92, -110],
                        Yodieresis: [-100, -100, -140, -140, -111, -111, -92, -70],
                        Yograve: [-100, -100, -140, -140, -111, -111, -92, -70],
                        Yohungarumlaut: [-100, -100, -140, -140, -111, -111, -92, -110],
                        Yomacron: [-100, -100, -140, -140, -111, -111, -92, -70],
                        Yoslash: [-100, -100, -140, -140, -111, -111, -92, -110],
                        Yotilde: [-100, -100, -140, -140, -111, -111, -92, -70],
                        Yperiod: [-100, -100, -140, -140, -92, -74, -92, -129],
                        Ysemicolon: [-50, -50, -60, -60, -92, -92, -65, -92],
                        Yu: [-100, -100, -110, -110, -92, -92, -92, -111],
                        Yuacute: [-100, -100, -110, -110, -92, -92, -92, -111],
                        Yucircumflex: [-100, -100, -110, -110, -92, -92, -92, -111],
                        Yudieresis: [-100, -100, -110, -110, -92, -92, -92, -71],
                        Yugrave: [-100, -100, -110, -110, -92, -92, -92, -71],
                        Yuhungarumlaut: [-100, -100, -110, -110, -92, -92, -92, -111],
                        Yumacron: [-100, -100, -110, -110, -92, -92, -92, -71],
                        Yuogonek: [-100, -100, -110, -110, -92, -92, -92, -111],
                        Yuring: [-100, -100, -110, -110, -92, -92, -92, -111],
                        YacuteA: [-110, -110, -110, -110, -110, -74, -50, -120],
                        YacuteAacute: [-110, -110, -110, -110, -110, -74, -50, -120],
                        YacuteAbreve: [-110, -110, -110, -110, -110, -74, -50, -120],
                        YacuteAcircumflex: [-110, -110, -110, -110, -110, -74, -50, -120],
                        YacuteAdieresis: [-110, -110, -110, -110, -110, -74, -50, -120],
                        YacuteAgrave: [-110, -110, -110, -110, -110, -74, -50, -120],
                        YacuteAmacron: [-110, -110, -110, -110, -110, -74, -50, -120],
                        YacuteAogonek: [-110, -110, -110, -110, -110, -74, -50, -120],
                        YacuteAring: [-110, -110, -110, -110, -110, -74, -50, -120],
                        YacuteAtilde: [-110, -110, -110, -110, -110, -74, -50, -120],
                        YacuteO: [-70, -70, -85, -85, -35, -25, -15, -30],
                        YacuteOacute: [-70, -70, -85, -85, -35, -25, -15, -30],
                        YacuteOcircumflex: [-70, -70, -85, -85, -35, -25, -15, -30],
                        YacuteOdieresis: [-70, -70, -85, -85, -35, -25, -15, -30],
                        YacuteOgrave: [-70, -70, -85, -85, -35, -25, -15, -30],
                        YacuteOhungarumlaut: [-70, -70, -85, -85, -35, -25, -15, -30],
                        YacuteOmacron: [-70, -70, -85, -85, -35, -25, -15, -30],
                        YacuteOslash: [-70, -70, -85, -85, -35, -25, -15, -30],
                        YacuteOtilde: [-70, -70, -85, -85, -35, -25, -15, -30],
                        Yacutea: [-90, -90, -140, -140, -85, -92, -92, -100],
                        Yacuteaacute: [-90, -90, -140, -140, -85, -92, -92, -100],
                        Yacuteabreve: [-90, -90, -70, -70, -85, -92, -92, -100],
                        Yacuteacircumflex: [-90, -90, -140, -140, -85, -92, -92, -100],
                        Yacuteadieresis: [-90, -90, -140, -140, -85, -92, -92, -60],
                        Yacuteagrave: [-90, -90, -140, -140, -85, -92, -92, -60],
                        Yacuteamacron: [-90, -90, -70, -70, -85, -92, -92, -60],
                        Yacuteaogonek: [-90, -90, -140, -140, -85, -92, -92, -100],
                        Yacutearing: [-90, -90, -140, -140, -85, -92, -92, -100],
                        Yacuteatilde: [-90, -90, -70, -70, -85, -92, -92, -60],
                        Yacutecolon: [-50, -50, -60, -60, -92, -92, -65, -92],
                        Yacutecomma: [-100, -100, -140, -140, -92, -92, -92, -129],
                        Yacutee: [-80, -80, -140, -140, -111, -111, -92, -100],
                        Yacuteeacute: [-80, -80, -140, -140, -111, -111, -92, -100],
                        Yacuteecaron: [-80, -80, -140, -140, -111, -111, -92, -100],
                        Yacuteecircumflex: [-80, -80, -140, -140, -111, -71, -92, -100],
                        Yacuteedieresis: [-80, -80, -140, -140, -71, -71, -52, -60],
                        Yacuteedotaccent: [-80, -80, -140, -140, -111, -111, -92, -100],
                        Yacuteegrave: [-80, -80, -140, -140, -71, -71, -52, -60],
                        Yacuteemacron: [-80, -80, -70, -70, -71, -71, -52, -60],
                        Yacuteeogonek: [-80, -80, -140, -140, -111, -111, -92, -100],
                        Yacuteo: [-100, -100, -140, -140, -111, -111, -92, -110],
                        Yacuteoacute: [-100, -100, -140, -140, -111, -111, -92, -110],
                        Yacuteocircumflex: [-100, -100, -140, -140, -111, -111, -92, -110],
                        Yacuteodieresis: [-100, -100, -140, -140, -111, -111, -92, -70],
                        Yacuteograve: [-100, -100, -140, -140, -111, -111, -92, -70],
                        Yacuteohungarumlaut: [-100, -100, -140, -140, -111, -111, -92, -110],
                        Yacuteomacron: [-100, -100, -70, -70, -111, -111, -92, -70],
                        Yacuteoslash: [-100, -100, -140, -140, -111, -111, -92, -110],
                        Yacuteotilde: [-100, -100, -140, -140, -111, -111, -92, -70],
                        Yacuteperiod: [-100, -100, -140, -140, -92, -74, -92, -129],
                        Yacutesemicolon: [-50, -50, -60, -60, -92, -92, -65, -92],
                        Yacuteu: [-100, -100, -110, -110, -92, -92, -92, -111],
                        Yacuteuacute: [-100, -100, -110, -110, -92, -92, -92, -111],
                        Yacuteucircumflex: [-100, -100, -110, -110, -92, -92, -92, -111],
                        Yacuteudieresis: [-100, -100, -110, -110, -92, -92, -92, -71],
                        Yacuteugrave: [-100, -100, -110, -110, -92, -92, -92, -71],
                        Yacuteuhungarumlaut: [-100, -100, -110, -110, -92, -92, -92, -111],
                        Yacuteumacron: [-100, -100, -110, -110, -92, -92, -92, -71],
                        Yacuteuogonek: [-100, -100, -110, -110, -92, -92, -92, -111],
                        Yacuteuring: [-100, -100, -110, -110, -92, -92, -92, -111],
                        YdieresisA: [-110, -110, -110, -110, -110, -74, -50, -120],
                        YdieresisAacute: [-110, -110, -110, -110, -110, -74, -50, -120],
                        YdieresisAbreve: [-110, -110, -110, -110, -110, -74, -50, -120],
                        YdieresisAcircumflex: [-110, -110, -110, -110, -110, -74, -50, -120],
                        YdieresisAdieresis: [-110, -110, -110, -110, -110, -74, -50, -120],
                        YdieresisAgrave: [-110, -110, -110, -110, -110, -74, -50, -120],
                        YdieresisAmacron: [-110, -110, -110, -110, -110, -74, -50, -120],
                        YdieresisAogonek: [-110, -110, -110, -110, -110, -74, -50, -120],
                        YdieresisAring: [-110, -110, -110, -110, -110, -74, -50, -120],
                        YdieresisAtilde: [-110, -110, -110, -110, -110, -74, -50, -120],
                        YdieresisO: [-70, -70, -85, -85, -35, -25, -15, -30],
                        YdieresisOacute: [-70, -70, -85, -85, -35, -25, -15, -30],
                        YdieresisOcircumflex: [-70, -70, -85, -85, -35, -25, -15, -30],
                        YdieresisOdieresis: [-70, -70, -85, -85, -35, -25, -15, -30],
                        YdieresisOgrave: [-70, -70, -85, -85, -35, -25, -15, -30],
                        YdieresisOhungarumlaut: [-70, -70, -85, -85, -35, -25, -15, -30],
                        YdieresisOmacron: [-70, -70, -85, -85, -35, -25, -15, -30],
                        YdieresisOslash: [-70, -70, -85, -85, -35, -25, -15, -30],
                        YdieresisOtilde: [-70, -70, -85, -85, -35, -25, -15, -30],
                        Ydieresisa: [-90, -90, -140, -140, -85, -92, -92, -100],
                        Ydieresisaacute: [-90, -90, -140, -140, -85, -92, -92, -100],
                        Ydieresisabreve: [-90, -90, -70, -70, -85, -92, -92, -100],
                        Ydieresisacircumflex: [-90, -90, -140, -140, -85, -92, -92, -100],
                        Ydieresisadieresis: [-90, -90, -140, -140, -85, -92, -92, -60],
                        Ydieresisagrave: [-90, -90, -140, -140, -85, -92, -92, -60],
                        Ydieresisamacron: [-90, -90, -70, -70, -85, -92, -92, -60],
                        Ydieresisaogonek: [-90, -90, -140, -140, -85, -92, -92, -100],
                        Ydieresisaring: [-90, -90, -140, -140, -85, -92, -92, -100],
                        Ydieresisatilde: [-90, -90, -70, -70, -85, -92, -92, -100],
                        Ydieresiscolon: [-50, -50, -60, -60, -92, -92, -65, -92],
                        Ydieresiscomma: [-100, -100, -140, -140, -92, -92, -92, -129],
                        Ydieresise: [-80, -80, -140, -140, -111, -111, -92, -100],
                        Ydieresiseacute: [-80, -80, -140, -140, -111, -111, -92, -100],
                        Ydieresisecaron: [-80, -80, -140, -140, -111, -111, -92, -100],
                        Ydieresisecircumflex: [-80, -80, -140, -140, -111, -71, -92, -100],
                        Ydieresisedieresis: [-80, -80, -140, -140, -71, -71, -52, -60],
                        Ydieresisedotaccent: [-80, -80, -140, -140, -111, -111, -92, -100],
                        Ydieresisegrave: [-80, -80, -140, -140, -71, -71, -52, -60],
                        Ydieresisemacron: [-80, -80, -70, -70, -71, -71, -52, -60],
                        Ydieresiseogonek: [-80, -80, -140, -140, -111, -111, -92, -100],
                        Ydieresiso: [-100, -100, -140, -140, -111, -111, -92, -110],
                        Ydieresisoacute: [-100, -100, -140, -140, -111, -111, -92, -110],
                        Ydieresisocircumflex: [-100, -100, -140, -140, -111, -111, -92, -110],
                        Ydieresisodieresis: [-100, -100, -140, -140, -111, -111, -92, -70],
                        Ydieresisograve: [-100, -100, -140, -140, -111, -111, -92, -70],
                        Ydieresisohungarumlaut: [-100, -100, -140, -140, -111, -111, -92, -110],
                        Ydieresisomacron: [-100, -100, -140, -140, -111, -111, -92, -70],
                        Ydieresisoslash: [-100, -100, -140, -140, -111, -111, -92, -110],
                        Ydieresisotilde: [-100, -100, -140, -140, -111, -111, -92, -70],
                        Ydieresisperiod: [-100, -100, -140, -140, -92, -74, -92, -129],
                        Ydieresissemicolon: [-50, -50, -60, -60, -92, -92, -65, -92],
                        Ydieresisu: [-100, -100, -110, -110, -92, -92, -92, -111],
                        Ydieresisuacute: [-100, -100, -110, -110, -92, -92, -92, -111],
                        Ydieresisucircumflex: [-100, -100, -110, -110, -92, -92, -92, -111],
                        Ydieresisudieresis: [-100, -100, -110, -110, -92, -92, -92, -71],
                        Ydieresisugrave: [-100, -100, -110, -110, -92, -92, -92, -71],
                        Ydieresisuhungarumlaut: [-100, -100, -110, -110, -92, -92, -92, -111],
                        Ydieresisumacron: [-100, -100, -110, -110, -92, -92, -92, -71],
                        Ydieresisuogonek: [-100, -100, -110, -110, -92, -92, -92, -111],
                        Ydieresisuring: [-100, -100, -110, -110, -92, -92, -92, -111],
                        ag: [-10, -10, 0, 0, 0, 0, -10],
                        agbreve: [-10, -10, 0, 0, 0, 0, -10],
                        agcommaaccent: [-10, -10, 0, 0, 0, 0, -10],
                        av: [-15, -15, -20, -20, -25, 0, 0, -20],
                        aw: [-15, -15, -20, -20, 0, 0, 0, -15],
                        ay: [-20, -20, -30, -30],
                        ayacute: [-20, -20, -30, -30],
                        aydieresis: [-20, -20, -30, -30],
                        aacuteg: [-10, -10, 0, 0, 0, 0, -10],
                        aacutegbreve: [-10, -10, 0, 0, 0, 0, -10],
                        aacutegcommaaccent: [-10, -10, 0, 0, 0, 0, -10],
                        aacutev: [-15, -15, -20, -20, -25, 0, 0, -20],
                        aacutew: [-15, -15, -20, -20, 0, 0, 0, -15],
                        aacutey: [-20, -20, -30, -30],
                        aacuteyacute: [-20, -20, -30, -30],
                        aacuteydieresis: [-20, -20, -30, -30],
                        abreveg: [-10, -10, 0, 0, 0, 0, -10],
                        abrevegbreve: [-10, -10, 0, 0, 0, 0, -10],
                        abrevegcommaaccent: [-10, -10, 0, 0, 0, 0, -10],
                        abrevev: [-15, -15, -20, -20, -25, 0, 0, -20],
                        abrevew: [-15, -15, -20, -20, 0, 0, 0, -15],
                        abrevey: [-20, -20, -30, -30],
                        abreveyacute: [-20, -20, -30, -30],
                        abreveydieresis: [-20, -20, -30, -30],
                        acircumflexg: [-10, -10, 0, 0, 0, 0, -10],
                        acircumflexgbreve: [-10, -10, 0, 0, 0, 0, -10],
                        acircumflexgcommaaccent: [-10, -10, 0, 0, 0, 0, -10],
                        acircumflexv: [-15, -15, -20, -20, -25, 0, 0, -20],
                        acircumflexw: [-15, -15, -20, -20, 0, 0, 0, -15],
                        acircumflexy: [-20, -20, -30, -30],
                        acircumflexyacute: [-20, -20, -30, -30],
                        acircumflexydieresis: [-20, -20, -30, -30],
                        adieresisg: [-10, -10, 0, 0, 0, 0, -10],
                        adieresisgbreve: [-10, -10, 0, 0, 0, 0, -10],
                        adieresisgcommaaccent: [-10, -10, 0, 0, 0, 0, -10],
                        adieresisv: [-15, -15, -20, -20, -25, 0, 0, -20],
                        adieresisw: [-15, -15, -20, -20, 0, 0, 0, -15],
                        adieresisy: [-20, -20, -30, -30],
                        adieresisyacute: [-20, -20, -30, -30],
                        adieresisydieresis: [-20, -20, -30, -30],
                        agraveg: [-10, -10, 0, 0, 0, 0, -10],
                        agravegbreve: [-10, -10, 0, 0, 0, 0, -10],
                        agravegcommaaccent: [-10, -10, 0, 0, 0, 0, -10],
                        agravev: [-15, -15, -20, -20, -25, 0, 0, -20],
                        agravew: [-15, -15, -20, -20, 0, 0, 0, -15],
                        agravey: [-20, -20, -30, -30],
                        agraveyacute: [-20, -20, -30, -30],
                        agraveydieresis: [-20, -20, -30, -30],
                        amacrong: [-10, -10, 0, 0, 0, 0, -10],
                        amacrongbreve: [-10, -10, 0, 0, 0, 0, -10],
                        amacrongcommaaccent: [-10, -10, 0, 0, 0, 0, -10],
                        amacronv: [-15, -15, -20, -20, -25, 0, 0, -20],
                        amacronw: [-15, -15, -20, -20, 0, 0, 0, -15],
                        amacrony: [-20, -20, -30, -30],
                        amacronyacute: [-20, -20, -30, -30],
                        amacronydieresis: [-20, -20, -30, -30],
                        aogonekg: [-10, -10, 0, 0, 0, 0, -10],
                        aogonekgbreve: [-10, -10, 0, 0, 0, 0, -10],
                        aogonekgcommaaccent: [-10, -10, 0, 0, 0, 0, -10],
                        aogonekv: [-15, -15, -20, -20, -25, 0, 0, -20],
                        aogonekw: [-15, -15, -20, -20, 0, 0, 0, -15],
                        aogoneky: [-20, -20, -30, -30],
                        aogonekyacute: [-20, -20, -30, -30],
                        aogonekydieresis: [-20, -20, -30, -30],
                        aringg: [-10, -10, 0, 0, 0, 0, -10],
                        aringgbreve: [-10, -10, 0, 0, 0, 0, -10],
                        aringgcommaaccent: [-10, -10, 0, 0, 0, 0, -10],
                        aringv: [-15, -15, -20, -20, -25, 0, 0, -20],
                        aringw: [-15, -15, -20, -20, 0, 0, 0, -15],
                        aringy: [-20, -20, -30, -30],
                        aringyacute: [-20, -20, -30, -30],
                        aringydieresis: [-20, -20, -30, -30],
                        atildeg: [-10, -10, 0, 0, 0, 0, -10],
                        atildegbreve: [-10, -10, 0, 0, 0, 0, -10],
                        atildegcommaaccent: [-10, -10, 0, 0, 0, 0, -10],
                        atildev: [-15, -15, -20, -20, -25, 0, 0, -20],
                        atildew: [-15, -15, -20, -20, 0, 0, 0, -15],
                        atildey: [-20, -20, -30, -30],
                        atildeyacute: [-20, -20, -30, -30],
                        atildeydieresis: [-20, -20, -30, -30],
                        bl: [-10, -10, -20, -20],
                        blacute: [-10, -10, -20, -20],
                        blcommaaccent: [-10, -10, -20, -20],
                        blslash: [-10, -10, -20, -20],
                        bu: [-20, -20, -20, -20, -20, -20, -20, -20],
                        buacute: [-20, -20, -20, -20, -20, -20, -20, -20],
                        bucircumflex: [-20, -20, -20, -20, -20, -20, -20, -20],
                        budieresis: [-20, -20, -20, -20, -20, -20, -20, -20],
                        bugrave: [-20, -20, -20, -20, -20, -20, -20, -20],
                        buhungarumlaut: [-20, -20, -20, -20, -20, -20, -20, -20],
                        bumacron: [-20, -20, -20, -20, -20, -20, -20, -20],
                        buogonek: [-20, -20, -20, -20, -20, -20, -20, -20],
                        buring: [-20, -20, -20, -20, -20, -20, -20, -20],
                        bv: [-20, -20, -20, -20, -15, 0, 0, -15],
                        by: [-20, -20, -20, -20],
                        byacute: [-20, -20, -20, -20],
                        bydieresis: [-20, -20, -20, -20],
                        ch: [-10, -10, 0, 0, 0, -10, -15],
                        ck: [-20, -20, -20, -20, 0, -10, -20],
                        ckcommaaccent: [-20, -20, -20, -20, 0, -10, -20],
                        cl: [-20, -20],
                        clacute: [-20, -20],
                        clcommaaccent: [-20, -20],
                        clslash: [-20, -20],
                        cy: [-10, -10, 0, 0, 0, 0, 0, -15],
                        cyacute: [-10, -10, 0, 0, 0, 0, 0, -15],
                        cydieresis: [-10, -10, 0, 0, 0, 0, 0, -15],
                        cacuteh: [-10, -10, 0, 0, 0, -10, -15],
                        cacutek: [-20, -20, -20, -20, 0, -10, -20],
                        cacutekcommaaccent: [-20, -20, -20, -20, 0, -10, -20],
                        cacutel: [-20, -20],
                        cacutelacute: [-20, -20],
                        cacutelcommaaccent: [-20, -20],
                        cacutelslash: [-20, -20],
                        cacutey: [-10, -10, 0, 0, 0, 0, 0, -15],
                        cacuteyacute: [-10, -10, 0, 0, 0, 0, 0, -15],
                        cacuteydieresis: [-10, -10, 0, 0, 0, 0, 0, -15],
                        ccaronh: [-10, -10, 0, 0, 0, -10, -15],
                        ccaronk: [-20, -20, -20, -20, 0, -10, -20],
                        ccaronkcommaaccent: [-20, -20, -20, -20, 0, -10, -20],
                        ccaronl: [-20, -20],
                        ccaronlacute: [-20, -20],
                        ccaronlcommaaccent: [-20, -20],
                        ccaronlslash: [-20, -20],
                        ccarony: [-10, -10, 0, 0, 0, 0, 0, -15],
                        ccaronyacute: [-10, -10, 0, 0, 0, 0, 0, -15],
                        ccaronydieresis: [-10, -10, 0, 0, 0, 0, 0, -15],
                        ccedillah: [-10, -10, 0, 0, 0, -10, -15],
                        ccedillak: [-20, -20, -20, -20, 0, -10, -20],
                        ccedillakcommaaccent: [-20, -20, -20, -20, 0, -10, -20],
                        ccedillal: [-20, -20],
                        ccedillalacute: [-20, -20],
                        ccedillalcommaaccent: [-20, -20],
                        ccedillalslash: [-20, -20],
                        ccedillay: [-10, -10, 0, 0, 0, 0, 0, -15],
                        ccedillayacute: [-10, -10, 0, 0, 0, 0, 0, -15],
                        ccedillaydieresis: [-10, -10, 0, 0, 0, 0, 0, -15],
                        colonspace: [-40, -40, -50, -50],
                        commaquotedblright: [-120, -120, -100, -100, -45, -95, -140, -70],
                        commaquoteright: [-120, -120, -100, -100, -55, -95, -140, -70],
                        commaspace: [-40, -40],
                        dd: [-10, -10],
                        ddcroat: [-10, -10],
                        dv: [-15, -15],
                        dw: [-15, -15, 0, 0, -15],
                        dy: [-15, -15],
                        dyacute: [-15, -15],
                        dydieresis: [-15, -15],
                        dcroatd: [-10, -10],
                        dcroatdcroat: [-10, -10],
                        dcroatv: [-15, -15],
                        dcroatw: [-15, -15, 0, 0, -15],
                        dcroaty: [-15, -15],
                        dcroatyacute: [-15, -15],
                        dcroatydieresis: [-15, -15],
                        ecomma: [10, 10, -15, -15, 0, 0, -10],
                        eperiod: [20, 20, -15, -15, 0, 0, -15],
                        ev: [-15, -15, -30, -30, -15, 0, -15, -25],
                        ew: [-15, -15, -20, -20, 0, 0, -15, -25],
                        ex: [-15, -15, -30, -30, 0, 0, -20, -15],
                        ey: [-15, -15, -20, -20, 0, 0, -30, -15],
                        eyacute: [-15, -15, -20, -20, 0, 0, -30, -15],
                        eydieresis: [-15, -15, -20, -20, 0, 0, -30, -15],
                        eacutecomma: [10, 10, -15, -15, 0, 0, -10],
                        eacuteperiod: [20, 20, -15, -15, 0, 0, -15],
                        eacutev: [-15, -15, -30, -30, -15, 0, -15, -25],
                        eacutew: [-15, -15, -20, -20, 0, 0, -15, -25],
                        eacutex: [-15, -15, -30, -30, 0, 0, -20, -15],
                        eacutey: [-15, -15, -20, -20, 0, 0, -30, -15],
                        eacuteyacute: [-15, -15, -20, -20, 0, 0, -30, -15],
                        eacuteydieresis: [-15, -15, -20, -20, 0, 0, -30, -15],
                        ecaroncomma: [10, 10, -15, -15, 0, 0, -10],
                        ecaronperiod: [20, 20, -15, -15, 0, 0, -15],
                        ecaronv: [-15, -15, -30, -30, -15, 0, -15, -25],
                        ecaronw: [-15, -15, -20, -20, 0, 0, -15, -25],
                        ecaronx: [-15, -15, -30, -30, 0, 0, -20, -15],
                        ecarony: [-15, -15, -20, -20, 0, 0, -30, -15],
                        ecaronyacute: [-15, -15, -20, -20, 0, 0, -30, -15],
                        ecaronydieresis: [-15, -15, -20, -20, 0, 0, -30, -15],
                        ecircumflexcomma: [10, 10, -15, -15, 0, 0, -10],
                        ecircumflexperiod: [20, 20, -15, -15, 0, 0, -15],
                        ecircumflexv: [-15, -15, -30, -30, -15, 0, -15, -25],
                        ecircumflexw: [-15, -15, -20, -20, 0, 0, -15, -25],
                        ecircumflexx: [-15, -15, -30, -30, 0, 0, -20, -15],
                        ecircumflexy: [-15, -15, -20, -20, 0, 0, -30, -15],
                        ecircumflexyacute: [-15, -15, -20, -20, 0, 0, -30, -15],
                        ecircumflexydieresis: [-15, -15, -20, -20, 0, 0, -30, -15],
                        edieresiscomma: [10, 10, -15, -15, 0, 0, -10],
                        edieresisperiod: [20, 20, -15, -15, 0, 0, -15],
                        edieresisv: [-15, -15, -30, -30, -15, 0, -15, -25],
                        edieresisw: [-15, -15, -20, -20, 0, 0, -15, -25],
                        edieresisx: [-15, -15, -30, -30, 0, 0, -20, -15],
                        edieresisy: [-15, -15, -20, -20, 0, 0, -30, -15],
                        edieresisyacute: [-15, -15, -20, -20, 0, 0, -30, -15],
                        edieresisydieresis: [-15, -15, -20, -20, 0, 0, -30, -15],
                        edotaccentcomma: [10, 10, -15, -15, 0, 0, -10],
                        edotaccentperiod: [20, 20, -15, -15, 0, 0, -15],
                        edotaccentv: [-15, -15, -30, -30, -15, 0, -15, -25],
                        edotaccentw: [-15, -15, -20, -20, 0, 0, -15, -25],
                        edotaccentx: [-15, -15, -30, -30, 0, 0, -20, -15],
                        edotaccenty: [-15, -15, -20, -20, 0, 0, -30, -15],
                        edotaccentyacute: [-15, -15, -20, -20, 0, 0, -30, -15],
                        edotaccentydieresis: [-15, -15, -20, -20, 0, 0, -30, -15],
                        egravecomma: [10, 10, -15, -15, 0, 0, -10],
                        egraveperiod: [20, 20, -15, -15, 0, 0, -15],
                        egravev: [-15, -15, -30, -30, -15, 0, -15, -25],
                        egravew: [-15, -15, -20, -20, 0, 0, -15, -25],
                        egravex: [-15, -15, -30, -30, 0, 0, -20, -15],
                        egravey: [-15, -15, -20, -20, 0, 0, -30, -15],
                        egraveyacute: [-15, -15, -20, -20, 0, 0, -30, -15],
                        egraveydieresis: [-15, -15, -20, -20, 0, 0, -30, -15],
                        emacroncomma: [10, 10, -15, -15, 0, 0, -10],
                        emacronperiod: [20, 20, -15, -15, 0, 0, -15],
                        emacronv: [-15, -15, -30, -30, -15, 0, -15, -25],
                        emacronw: [-15, -15, -20, -20, 0, 0, -15, -25],
                        emacronx: [-15, -15, -30, -30, 0, 0, -20, -15],
                        emacrony: [-15, -15, -20, -20, 0, 0, -30, -15],
                        emacronyacute: [-15, -15, -20, -20, 0, 0, -30, -15],
                        emacronydieresis: [-15, -15, -20, -20, 0, 0, -30, -15],
                        eogonekcomma: [10, 10, -15, -15, 0, 0, -10],
                        eogonekperiod: [20, 20, -15, -15, 0, 0, -15],
                        eogonekv: [-15, -15, -30, -30, -15, 0, -15, -25],
                        eogonekw: [-15, -15, -20, -20, 0, 0, -15, -25],
                        eogonekx: [-15, -15, -30, -30, 0, 0, -20, -15],
                        eogoneky: [-15, -15, -20, -20, 0, 0, -30, -15],
                        eogonekyacute: [-15, -15, -20, -20, 0, 0, -30, -15],
                        eogonekydieresis: [-15, -15, -20, -20, 0, 0, -30, -15],
                        fcomma: [-10, -10, -30, -30, -15, -10, -10],
                        fe: [-10, -10, -30, -30, 0, -10],
                        feacute: [-10, -10, -30, -30, 0, -10],
                        fecaron: [-10, -10, -30, -30],
                        fecircumflex: [-10, -10, -30, -30],
                        fedieresis: [-10, -10, -30, -30],
                        fedotaccent: [-10, -10, -30, -30, 0, -10],
                        fegrave: [-10, -10, -30, -30],
                        femacron: [-10, -10, -30, -30],
                        feogonek: [-10, -10, -30, -30, 0, -10],
                        fo: [-20, -20, -30, -30, -25, -10],
                        foacute: [-20, -20, -30, -30, -25, -10],
                        focircumflex: [-20, -20, -30, -30, -25, -10],
                        fodieresis: [-20, -20, -30, -30, -25],
                        fograve: [-20, -20, -30, -30, -25, -10],
                        fohungarumlaut: [-20, -20, -30, -30, -25, -10],
                        fomacron: [-20, -20, -30, -30, -25],
                        foslash: [-20, -20, -30, -30, -25, -10],
                        fotilde: [-20, -20, -30, -30, -25, -10],
                        fperiod: [-10, -10, -30, -30, -15, -10, -15],
                        fquotedblright: [30, 30, 60, 60, 50],
                        fquoteright: [30, 30, 50, 50, 55, 55, 92, 55],
                        ge: [10, 10, 0, 0, 0, 0, -10],
                        geacute: [10, 10, 0, 0, 0, 0, -10],
                        gecaron: [10, 10, 0, 0, 0, 0, -10],
                        gecircumflex: [10, 10, 0, 0, 0, 0, -10],
                        gedieresis: [10, 10, 0, 0, 0, 0, -10],
                        gedotaccent: [10, 10, 0, 0, 0, 0, -10],
                        gegrave: [10, 10, 0, 0, 0, 0, -10],
                        gemacron: [10, 10, 0, 0, 0, 0, -10],
                        geogonek: [10, 10, 0, 0, 0, 0, -10],
                        gg: [-10, -10, 0, 0, 0, 0, -10],
                        ggbreve: [-10, -10, 0, 0, 0, 0, -10],
                        ggcommaaccent: [-10, -10, 0, 0, 0, 0, -10],
                        gbrevee: [10, 10, 0, 0, 0, 0, -10],
                        gbreveeacute: [10, 10, 0, 0, 0, 0, -10],
                        gbreveecaron: [10, 10, 0, 0, 0, 0, -10],
                        gbreveecircumflex: [10, 10, 0, 0, 0, 0, -10],
                        gbreveedieresis: [10, 10, 0, 0, 0, 0, -10],
                        gbreveedotaccent: [10, 10, 0, 0, 0, 0, -10],
                        gbreveegrave: [10, 10, 0, 0, 0, 0, -10],
                        gbreveemacron: [10, 10, 0, 0, 0, 0, -10],
                        gbreveeogonek: [10, 10, 0, 0, 0, 0, -10],
                        gbreveg: [-10, -10, 0, 0, 0, 0, -10],
                        gbrevegbreve: [-10, -10, 0, 0, 0, 0, -10],
                        gbrevegcommaaccent: [-10, -10, 0, 0, 0, 0, -10],
                        gcommaaccente: [10, 10, 0, 0, 0, 0, -10],
                        gcommaaccenteacute: [10, 10, 0, 0, 0, 0, -10],
                        gcommaaccentecaron: [10, 10, 0, 0, 0, 0, -10],
                        gcommaaccentecircumflex: [10, 10, 0, 0, 0, 0, -10],
                        gcommaaccentedieresis: [10, 10, 0, 0, 0, 0, -10],
                        gcommaaccentedotaccent: [10, 10, 0, 0, 0, 0, -10],
                        gcommaaccentegrave: [10, 10, 0, 0, 0, 0, -10],
                        gcommaaccentemacron: [10, 10, 0, 0, 0, 0, -10],
                        gcommaaccenteogonek: [10, 10, 0, 0, 0, 0, -10],
                        gcommaaccentg: [-10, -10, 0, 0, 0, 0, -10],
                        gcommaaccentgbreve: [-10, -10, 0, 0, 0, 0, -10],
                        gcommaaccentgcommaaccent: [-10, -10, 0, 0, 0, 0, -10],
                        hy: [-20, -20, -30, -30, -15, 0, 0, -5],
                        hyacute: [-20, -20, -30, -30, -15, 0, 0, -5],
                        hydieresis: [-20, -20, -30, -30, -15, 0, 0, -5],
                        ko: [-15, -15, -20, -20, -15, -10, -10, -10],
                        koacute: [-15, -15, -20, -20, -15, -10, -10, -10],
                        kocircumflex: [-15, -15, -20, -20, -15, -10, -10, -10],
                        kodieresis: [-15, -15, -20, -20, -15, -10, -10, -10],
                        kograve: [-15, -15, -20, -20, -15, -10, -10, -10],
                        kohungarumlaut: [-15, -15, -20, -20, -15, -10, -10, -10],
                        komacron: [-15, -15, -20, -20, -15, -10, -10, -10],
                        koslash: [-15, -15, -20, -20, -15, -10, -10, -10],
                        kotilde: [-15, -15, -20, -20, -15, -10, -10, -10],
                        kcommaaccento: [-15, -15, -20, -20, -15, -10, -10, -10],
                        kcommaaccentoacute: [-15, -15, -20, -20, -15, -10, -10, -10],
                        kcommaaccentocircumflex: [-15, -15, -20, -20, -15, -10, -10, -10],
                        kcommaaccentodieresis: [-15, -15, -20, -20, -15, -10, -10, -10],
                        kcommaaccentograve: [-15, -15, -20, -20, -15, -10, -10, -10],
                        kcommaaccentohungarumlaut: [-15, -15, -20, -20, -15, -10, -10, -10],
                        kcommaaccentomacron: [-15, -15, -20, -20, -15, -10, -10, -10],
                        kcommaaccentoslash: [-15, -15, -20, -20, -15, -10, -10, -10],
                        kcommaaccentotilde: [-15, -15, -20, -20, -15, -10, -10, -10],
                        lw: [-15, -15, 0, 0, 0, 0, 0, -10],
                        ly: [-15, -15],
                        lyacute: [-15, -15],
                        lydieresis: [-15, -15],
                        lacutew: [-15, -15, 0, 0, 0, 0, 0, -10],
                        lacutey: [-15, -15],
                        lacuteyacute: [-15, -15],
                        lacuteydieresis: [-15, -15],
                        lcommaaccentw: [-15, -15, 0, 0, 0, 0, 0, -10],
                        lcommaaccenty: [-15, -15],
                        lcommaaccentyacute: [-15, -15],
                        lcommaaccentydieresis: [-15, -15],
                        lslashw: [-15, -15, 0, 0, 0, 0, 0, -10],
                        lslashy: [-15, -15],
                        lslashyacute: [-15, -15],
                        lslashydieresis: [-15, -15],
                        mu: [-20, -20, -10, -10],
                        muacute: [-20, -20, -10, -10],
                        mucircumflex: [-20, -20, -10, -10],
                        mudieresis: [-20, -20, -10, -10],
                        mugrave: [-20, -20, -10, -10],
                        muhungarumlaut: [-20, -20, -10, -10],
                        mumacron: [-20, -20, -10, -10],
                        muogonek: [-20, -20, -10, -10],
                        muring: [-20, -20, -10, -10],
                        my: [-30, -30, -15, -15],
                        myacute: [-30, -30, -15, -15],
                        mydieresis: [-30, -30, -15, -15],
                        nu: [-10, -10, -10, -10],
                        nuacute: [-10, -10, -10, -10],
                        nucircumflex: [-10, -10, -10, -10],
                        nudieresis: [-10, -10, -10, -10],
                        nugrave: [-10, -10, -10, -10],
                        nuhungarumlaut: [-10, -10, -10, -10],
                        numacron: [-10, -10, -10, -10],
                        nuogonek: [-10, -10, -10, -10],
                        nuring: [-10, -10, -10, -10],
                        nv: [-40, -40, -20, -20, -40, -40, -40, -40],
                        ny: [-20, -20, -15, -15, 0, 0, 0, -15],
                        nyacute: [-20, -20, -15, -15, 0, 0, 0, -15],
                        nydieresis: [-20, -20, -15, -15, 0, 0, 0, -15],
                        nacuteu: [-10, -10, -10, -10],
                        nacuteuacute: [-10, -10, -10, -10],
                        nacuteucircumflex: [-10, -10, -10, -10],
                        nacuteudieresis: [-10, -10, -10, -10],
                        nacuteugrave: [-10, -10, -10, -10],
                        nacuteuhungarumlaut: [-10, -10, -10, -10],
                        nacuteumacron: [-10, -10, -10, -10],
                        nacuteuogonek: [-10, -10, -10, -10],
                        nacuteuring: [-10, -10, -10, -10],
                        nacutev: [-40, -40, -20, -20, -40, -40, -40, -40],
                        nacutey: [-20, -20, -15, -15, 0, 0, 0, -15],
                        nacuteyacute: [-20, -20, -15, -15, 0, 0, 0, -15],
                        nacuteydieresis: [-20, -20, -15, -15, 0, 0, 0, -15],
                        ncaronu: [-10, -10, -10, -10],
                        ncaronuacute: [-10, -10, -10, -10],
                        ncaronucircumflex: [-10, -10, -10, -10],
                        ncaronudieresis: [-10, -10, -10, -10],
                        ncaronugrave: [-10, -10, -10, -10],
                        ncaronuhungarumlaut: [-10, -10, -10, -10],
                        ncaronumacron: [-10, -10, -10, -10],
                        ncaronuogonek: [-10, -10, -10, -10],
                        ncaronuring: [-10, -10, -10, -10],
                        ncaronv: [-40, -40, -20, -20, -40, -40, -40, -40],
                        ncarony: [-20, -20, -15, -15, 0, 0, 0, -15],
                        ncaronyacute: [-20, -20, -15, -15, 0, 0, 0, -15],
                        ncaronydieresis: [-20, -20, -15, -15, 0, 0, 0, -15],
                        ncommaaccentu: [-10, -10, -10, -10],
                        ncommaaccentuacute: [-10, -10, -10, -10],
                        ncommaaccentucircumflex: [-10, -10, -10, -10],
                        ncommaaccentudieresis: [-10, -10, -10, -10],
                        ncommaaccentugrave: [-10, -10, -10, -10],
                        ncommaaccentuhungarumlaut: [-10, -10, -10, -10],
                        ncommaaccentumacron: [-10, -10, -10, -10],
                        ncommaaccentuogonek: [-10, -10, -10, -10],
                        ncommaaccenturing: [-10, -10, -10, -10],
                        ncommaaccentv: [-40, -40, -20, -20, -40, -40, -40, -40],
                        ncommaaccenty: [-20, -20, -15, -15, 0, 0, 0, -15],
                        ncommaaccentyacute: [-20, -20, -15, -15, 0, 0, 0, -15],
                        ncommaaccentydieresis: [-20, -20, -15, -15, 0, 0, 0, -15],
                        ntildeu: [-10, -10, -10, -10],
                        ntildeuacute: [-10, -10, -10, -10],
                        ntildeucircumflex: [-10, -10, -10, -10],
                        ntildeudieresis: [-10, -10, -10, -10],
                        ntildeugrave: [-10, -10, -10, -10],
                        ntildeuhungarumlaut: [-10, -10, -10, -10],
                        ntildeumacron: [-10, -10, -10, -10],
                        ntildeuogonek: [-10, -10, -10, -10],
                        ntildeuring: [-10, -10, -10, -10],
                        ntildev: [-40, -40, -20, -20, -40, -40, -40, -40],
                        ntildey: [-20, -20, -15, -15, 0, 0, 0, -15],
                        ntildeyacute: [-20, -20, -15, -15, 0, 0, 0, -15],
                        ntildeydieresis: [-20, -20, -15, -15, 0, 0, 0, -15],
                        ov: [-20, -20, -15, -15, -10, -15, -10, -15],
                        ow: [-15, -15, -15, -15, -10, -25, 0, -25],
                        ox: [-30, -30, -30, -30, 0, -10],
                        oy: [-20, -20, -30, -30, 0, -10, 0, -10],
                        oyacute: [-20, -20, -30, -30, 0, -10, 0, -10],
                        oydieresis: [-20, -20, -30, -30, 0, -10, 0, -10],
                        oacutev: [-20, -20, -15, -15, -10, -15, -10, -15],
                        oacutew: [-15, -15, -15, -15, -10, -25, 0, -25],
                        oacutex: [-30, -30, -30, -30, 0, -10],
                        oacutey: [-20, -20, -30, -30, 0, -10, 0, -10],
                        oacuteyacute: [-20, -20, -30, -30, 0, -10, 0, -10],
                        oacuteydieresis: [-20, -20, -30, -30, 0, -10, 0, -10],
                        ocircumflexv: [-20, -20, -15, -15, -10, -15, -10, -15],
                        ocircumflexw: [-15, -15, -15, -15, -10, -25, 0, -25],
                        ocircumflexx: [-30, -30, -30, -30, 0, -10],
                        ocircumflexy: [-20, -20, -30, -30, 0, -10, 0, -10],
                        ocircumflexyacute: [-20, -20, -30, -30, 0, -10, 0, -10],
                        ocircumflexydieresis: [-20, -20, -30, -30, 0, -10, 0, -10],
                        odieresisv: [-20, -20, -15, -15, -10, -15, -10, -15],
                        odieresisw: [-15, -15, -15, -15, -10, -25, 0, -25],
                        odieresisx: [-30, -30, -30, -30, 0, -10],
                        odieresisy: [-20, -20, -30, -30, 0, -10, 0, -10],
                        odieresisyacute: [-20, -20, -30, -30, 0, -10, 0, -10],
                        odieresisydieresis: [-20, -20, -30, -30, 0, -10, 0, -10],
                        ogravev: [-20, -20, -15, -15, -10, -15, -10, -15],
                        ogravew: [-15, -15, -15, -15, -10, -25, 0, -25],
                        ogravex: [-30, -30, -30, -30, 0, -10],
                        ogravey: [-20, -20, -30, -30, 0, -10, 0, -10],
                        ograveyacute: [-20, -20, -30, -30, 0, -10, 0, -10],
                        ograveydieresis: [-20, -20, -30, -30, 0, -10, 0, -10],
                        ohungarumlautv: [-20, -20, -15, -15, -10, -15, -10, -15],
                        ohungarumlautw: [-15, -15, -15, -15, -10, -25, 0, -25],
                        ohungarumlautx: [-30, -30, -30, -30, 0, -10],
                        ohungarumlauty: [-20, -20, -30, -30, 0, -10, 0, -10],
                        ohungarumlautyacute: [-20, -20, -30, -30, 0, -10, 0, -10],
                        ohungarumlautydieresis: [-20, -20, -30, -30, 0, -10, 0, -10],
                        omacronv: [-20, -20, -15, -15, -10, -15, -10, -15],
                        omacronw: [-15, -15, -15, -15, -10, -25, 0, -25],
                        omacronx: [-30, -30, -30, -30, 0, -10],
                        omacrony: [-20, -20, -30, -30, 0, -10, 0, -10],
                        omacronyacute: [-20, -20, -30, -30, 0, -10, 0, -10],
                        omacronydieresis: [-20, -20, -30, -30, 0, -10, 0, -10],
                        oslashv: [-20, -20, -70, -70, -10, -15, -10, -15],
                        oslashw: [-15, -15, -70, -70, -10, -25, 0, -25],
                        oslashx: [-30, -30, -85, -85, 0, -10],
                        oslashy: [-20, -20, -70, -70, 0, -10, 0, -10],
                        oslashyacute: [-20, -20, -70, -70, 0, -10, 0, -10],
                        oslashydieresis: [-20, -20, -70, -70, 0, -10, 0, -10],
                        otildev: [-20, -20, -15, -15, -10, -15, -10, -15],
                        otildew: [-15, -15, -15, -15, -10, -25, 0, -25],
                        otildex: [-30, -30, -30, -30, 0, -10],
                        otildey: [-20, -20, -30, -30, 0, -10, 0, -10],
                        otildeyacute: [-20, -20, -30, -30, 0, -10, 0, -10],
                        otildeydieresis: [-20, -20, -30, -30, 0, -10, 0, -10],
                        py: [-15, -15, -30, -30, 0, 0, 0, -10],
                        pyacute: [-15, -15, -30, -30, 0, 0, 0, -10],
                        pydieresis: [-15, -15, -30, -30, 0, 0, 0, -10],
                        periodquotedblright: [-120, -120, -100, -100, -55, -95, -140, -70],
                        periodquoteright: [-120, -120, -100, -100, -55, -95, -140, -70],
                        periodspace: [-40, -40, -60, -60],
                        quotedblrightspace: [-80, -80, -40, -40],
                        quoteleftquoteleft: [-46, -46, -57, -57, -63, -74, -111, -74],
                        quoterightd: [-80, -80, -50, -50, -20, -15, -25, -50],
                        quoterightdcroat: [-80, -80, -50, -50, -20, -15, -25, -50],
                        quoterightl: [-20, -20, 0, 0, 0, 0, 0, -10],
                        quoterightlacute: [-20, -20, 0, 0, 0, 0, 0, -10],
                        quoterightlcommaaccent: [-20, -20, 0, 0, 0, 0, 0, -10],
                        quoterightlslash: [-20, -20, 0, 0, 0, 0, 0, -10],
                        quoterightquoteright: [-46, -46, -57, -57, -63, -74, -111, -74],
                        quoterightr: [-40, -40, -50, -50, -20, -15, -25, -50],
                        quoterightracute: [-40, -40, -50, -50, -20, -15, -25, -50],
                        quoterightrcaron: [-40, -40, -50, -50, -20, -15, -25, -50],
                        quoterightrcommaaccent: [-40, -40, -50, -50, -20, -15, -25, -50],
                        quoterights: [-60, -60, -50, -50, -37, -74, -40, -55],
                        quoterightsacute: [-60, -60, -50, -50, -37, -74, -40, -55],
                        quoterightscaron: [-60, -60, -50, -50, -37, -74, -40, -55],
                        quoterightscedilla: [-60, -60, -50, -50, -37, -74, -40, -55],
                        quoterightscommaaccent: [-60, -60, -50, -50, -37, -74, -40, -55],
                        quoterightspace: [-80, -80, -70, -70, -74, -74, -111, -74],
                        quoterightv: [-20, -20, 0, 0, -20, -15, -10, -50],
                        rc: [-20, -20, 0, 0, -18, 0, -37],
                        rcacute: [-20, -20, 0, 0, -18, 0, -37],
                        rccaron: [-20, -20, 0, 0, -18, 0, -37],
                        rccedilla: [-20, -20, 0, 0, -18, 0, -37],
                        rcomma: [-60, -60, -50, -50, -92, -65, -111, -40],
                        rd: [-20, -20, 0, 0, 0, 0, -37],
                        rdcroat: [-20, -20, 0, 0, 0, 0, -37],
                        rg: [-15, -15, 0, 0, -10, 0, -37, -18],
                        rgbreve: [-15, -15, 0, 0, -10, 0, -37, -18],
                        rgcommaaccent: [-15, -15, 0, 0, -10, 0, -37, -18],
                        rhyphen: [-20, -20, 0, 0, -37, 0, -20, -20],
                        ro: [-20, -20, 0, 0, -18, 0, -45],
                        roacute: [-20, -20, 0, 0, -18, 0, -45],
                        rocircumflex: [-20, -20, 0, 0, -18, 0, -45],
                        rodieresis: [-20, -20, 0, 0, -18, 0, -45],
                        rograve: [-20, -20, 0, 0, -18, 0, -45],
                        rohungarumlaut: [-20, -20, 0, 0, -18, 0, -45],
                        romacron: [-20, -20, 0, 0, -18, 0, -45],
                        roslash: [-20, -20, 0, 0, -18, 0, -45],
                        rotilde: [-20, -20, 0, 0, -18, 0, -45],
                        rperiod: [-60, -60, -50, -50, -100, -65, -111, -55],
                        rq: [-20, -20, 0, 0, -18, 0, -37],
                        rs: [-15, -15, 0, 0, 0, 0, -10],
                        rsacute: [-15, -15, 0, 0, 0, 0, -10],
                        rscaron: [-15, -15, 0, 0, 0, 0, -10],
                        rscedilla: [-15, -15, 0, 0, 0, 0, -10],
                        rscommaaccent: [-15, -15, 0, 0, 0, 0, -10],
                        rt: [20, 20, 40, 40],
                        rtcommaaccent: [20, 20, 40, 40],
                        rv: [10, 10, 30, 30, -10],
                        ry: [10, 10, 30, 30],
                        ryacute: [10, 10, 30, 30],
                        rydieresis: [10, 10, 30, 30],
                        racutec: [-20, -20, 0, 0, -18, 0, -37],
                        racutecacute: [-20, -20, 0, 0, -18, 0, -37],
                        racuteccaron: [-20, -20, 0, 0, -18, 0, -37],
                        racuteccedilla: [-20, -20, 0, 0, -18, 0, -37],
                        racutecomma: [-60, -60, -50, -50, -92, -65, -111, -40],
                        racuted: [-20, -20, 0, 0, 0, 0, -37],
                        racutedcroat: [-20, -20, 0, 0, 0, 0, -37],
                        racuteg: [-15, -15, 0, 0, -10, 0, -37, -18],
                        racutegbreve: [-15, -15, 0, 0, -10, 0, -37, -18],
                        racutegcommaaccent: [-15, -15, 0, 0, -10, 0, -37, -18],
                        racutehyphen: [-20, -20, 0, 0, -37, 0, -20, -20],
                        racuteo: [-20, -20, 0, 0, -18, 0, -45],
                        racuteoacute: [-20, -20, 0, 0, -18, 0, -45],
                        racuteocircumflex: [-20, -20, 0, 0, -18, 0, -45],
                        racuteodieresis: [-20, -20, 0, 0, -18, 0, -45],
                        racuteograve: [-20, -20, 0, 0, -18, 0, -45],
                        racuteohungarumlaut: [-20, -20, 0, 0, -18, 0, -45],
                        racuteomacron: [-20, -20, 0, 0, -18, 0, -45],
                        racuteoslash: [-20, -20, 0, 0, -18, 0, -45],
                        racuteotilde: [-20, -20, 0, 0, -18, 0, -45],
                        racuteperiod: [-60, -60, -50, -50, -100, -65, -111, -55],
                        racuteq: [-20, -20, 0, 0, -18, 0, -37],
                        racutes: [-15, -15, 0, 0, 0, 0, -10],
                        racutesacute: [-15, -15, 0, 0, 0, 0, -10],
                        racutescaron: [-15, -15, 0, 0, 0, 0, -10],
                        racutescedilla: [-15, -15, 0, 0, 0, 0, -10],
                        racutescommaaccent: [-15, -15, 0, 0, 0, 0, -10],
                        racutet: [20, 20, 40, 40],
                        racutetcommaaccent: [20, 20, 40, 40],
                        racutev: [10, 10, 30, 30, -10],
                        racutey: [10, 10, 30, 30],
                        racuteyacute: [10, 10, 30, 30],
                        racuteydieresis: [10, 10, 30, 30],
                        rcaronc: [-20, -20, 0, 0, -18, 0, -37],
                        rcaroncacute: [-20, -20, 0, 0, -18, 0, -37],
                        rcaronccaron: [-20, -20, 0, 0, -18, 0, -37],
                        rcaronccedilla: [-20, -20, 0, 0, -18, 0, -37],
                        rcaroncomma: [-60, -60, -50, -50, -92, -65, -111, -40],
                        rcarond: [-20, -20, 0, 0, 0, 0, -37],
                        rcarondcroat: [-20, -20, 0, 0, 0, 0, -37],
                        rcarong: [-15, -15, 0, 0, -10, 0, -37, -18],
                        rcarongbreve: [-15, -15, 0, 0, -10, 0, -37, -18],
                        rcarongcommaaccent: [-15, -15, 0, 0, -10, 0, -37, -18],
                        rcaronhyphen: [-20, -20, 0, 0, -37, 0, -20, -20],
                        rcarono: [-20, -20, 0, 0, -18, 0, -45],
                        rcaronoacute: [-20, -20, 0, 0, -18, 0, -45],
                        rcaronocircumflex: [-20, -20, 0, 0, -18, 0, -45],
                        rcaronodieresis: [-20, -20, 0, 0, -18, 0, -45],
                        rcaronograve: [-20, -20, 0, 0, -18, 0, -45],
                        rcaronohungarumlaut: [-20, -20, 0, 0, -18, 0, -45],
                        rcaronomacron: [-20, -20, 0, 0, -18, 0, -45],
                        rcaronoslash: [-20, -20, 0, 0, -18, 0, -45],
                        rcaronotilde: [-20, -20, 0, 0, -18, 0, -45],
                        rcaronperiod: [-60, -60, -50, -50, -100, -65, -111, -55],
                        rcaronq: [-20, -20, 0, 0, -18, 0, -37],
                        rcarons: [-15, -15, 0, 0, 0, 0, -10],
                        rcaronsacute: [-15, -15, 0, 0, 0, 0, -10],
                        rcaronscaron: [-15, -15, 0, 0, 0, 0, -10],
                        rcaronscedilla: [-15, -15, 0, 0, 0, 0, -10],
                        rcaronscommaaccent: [-15, -15, 0, 0, 0, 0, -10],
                        rcaront: [20, 20, 40, 40],
                        rcarontcommaaccent: [20, 20, 40, 40],
                        rcaronv: [10, 10, 30, 30, -10],
                        rcarony: [10, 10, 30, 30],
                        rcaronyacute: [10, 10, 30, 30],
                        rcaronydieresis: [10, 10, 30, 30],
                        rcommaaccentc: [-20, -20, 0, 0, -18, 0, -37],
                        rcommaaccentcacute: [-20, -20, 0, 0, -18, 0, -37],
                        rcommaaccentccaron: [-20, -20, 0, 0, -18, 0, -37],
                        rcommaaccentccedilla: [-20, -20, 0, 0, -18, 0, -37],
                        rcommaaccentcomma: [-60, -60, -50, -50, -92, -65, -111, -40],
                        rcommaaccentd: [-20, -20, 0, 0, 0, 0, -37],
                        rcommaaccentdcroat: [-20, -20, 0, 0, 0, 0, -37],
                        rcommaaccentg: [-15, -15, 0, 0, -10, 0, -37, -18],
                        rcommaaccentgbreve: [-15, -15, 0, 0, -10, 0, -37, -18],
                        rcommaaccentgcommaaccent: [-15, -15, 0, 0, -10, 0, -37, -18],
                        rcommaaccenthyphen: [-20, -20, 0, 0, -37, 0, -20, -20],
                        rcommaaccento: [-20, -20, 0, 0, -18, 0, -45],
                        rcommaaccentoacute: [-20, -20, 0, 0, -18, 0, -45],
                        rcommaaccentocircumflex: [-20, -20, 0, 0, -18, 0, -45],
                        rcommaaccentodieresis: [-20, -20, 0, 0, -18, 0, -45],
                        rcommaaccentograve: [-20, -20, 0, 0, -18, 0, -45],
                        rcommaaccentohungarumlaut: [-20, -20, 0, 0, -18, 0, -45],
                        rcommaaccentomacron: [-20, -20, 0, 0, -18, 0, -45],
                        rcommaaccentoslash: [-20, -20, 0, 0, -18, 0, -45],
                        rcommaaccentotilde: [-20, -20, 0, 0, -18, 0, -45],
                        rcommaaccentperiod: [-60, -60, -50, -50, -100, -65, -111, -55],
                        rcommaaccentq: [-20, -20, 0, 0, -18, 0, -37],
                        rcommaaccents: [-15, -15, 0, 0, 0, 0, -10],
                        rcommaaccentsacute: [-15, -15, 0, 0, 0, 0, -10],
                        rcommaaccentscaron: [-15, -15, 0, 0, 0, 0, -10],
                        rcommaaccentscedilla: [-15, -15, 0, 0, 0, 0, -10],
                        rcommaaccentscommaaccent: [-15, -15, 0, 0, 0, 0, -10],
                        rcommaaccentt: [20, 20, 40, 40],
                        rcommaaccenttcommaaccent: [20, 20, 40, 40],
                        rcommaaccentv: [10, 10, 30, 30, -10],
                        rcommaaccenty: [10, 10, 30, 30],
                        rcommaaccentyacute: [10, 10, 30, 30],
                        rcommaaccentydieresis: [10, 10, 30, 30],
                        sw: [-15, -15, -30, -30],
                        sacutew: [-15, -15, -30, -30],
                        scaronw: [-15, -15, -30, -30],
                        scedillaw: [-15, -15, -30, -30],
                        scommaaccentw: [-15, -15, -30, -30],
                        semicolonspace: [-40, -40, -50, -50],
                        spaceT: [-100, -100, -50, -50, -30, 0, -18, -18],
                        spaceTcaron: [-100, -100, -50, -50, -30, 0, -18, -18],
                        spaceTcommaaccent: [-100, -100, -50, -50, -30, 0, -18, -18],
                        spaceV: [-80, -80, -50, -50, -45, -70, -35, -50],
                        spaceW: [-80, -80, -40, -40, -30, -70, -40, -30],
                        spaceY: [-120, -120, -90, -90, -55, -70, -75, -90],
                        spaceYacute: [-120, -120, -90, -90, -55, -70, -75, -90],
                        spaceYdieresis: [-120, -120, -90, -90, -55, -70, -75, -90],
                        spacequotedblleft: [-80, -80, -30, -30],
                        spacequoteleft: [-60, -60, -60, -60],
                        va: [-20, -20, -25, -25, -10, 0, 0, -25],
                        vaacute: [-20, -20, -25, -25, -10, 0, 0, -25],
                        vabreve: [-20, -20, -25, -25, -10, 0, 0, -25],
                        vacircumflex: [-20, -20, -25, -25, -10, 0, 0, -25],
                        vadieresis: [-20, -20, -25, -25, -10, 0, 0, -25],
                        vagrave: [-20, -20, -25, -25, -10, 0, 0, -25],
                        vamacron: [-20, -20, -25, -25, -10, 0, 0, -25],
                        vaogonek: [-20, -20, -25, -25, -10, 0, 0, -25],
                        varing: [-20, -20, -25, -25, -10, 0, 0, -25],
                        vatilde: [-20, -20, -25, -25, -10, 0, 0, -25],
                        vcomma: [-80, -80, -80, -80, -55, -37, -74, -65],
                        vo: [-30, -30, -25, -25, -10, -15, 0, -20],
                        voacute: [-30, -30, -25, -25, -10, -15, 0, -20],
                        vocircumflex: [-30, -30, -25, -25, -10, -15, 0, -20],
                        vodieresis: [-30, -30, -25, -25, -10, -15, 0, -20],
                        vograve: [-30, -30, -25, -25, -10, -15, 0, -20],
                        vohungarumlaut: [-30, -30, -25, -25, -10, -15, 0, -20],
                        vomacron: [-30, -30, -25, -25, -10, -15, 0, -20],
                        voslash: [-30, -30, -25, -25, -10, -15, 0, -20],
                        votilde: [-30, -30, -25, -25, -10, -15, 0, -20],
                        vperiod: [-80, -80, -80, -80, -70, -37, -74, -65],
                        wcomma: [-40, -40, -60, -60, -55, -37, -74, -65],
                        wo: [-20, -20, -10, -10, -10, -15, 0, -10],
                        woacute: [-20, -20, -10, -10, -10, -15, 0, -10],
                        wocircumflex: [-20, -20, -10, -10, -10, -15, 0, -10],
                        wodieresis: [-20, -20, -10, -10, -10, -15, 0, -10],
                        wograve: [-20, -20, -10, -10, -10, -15, 0, -10],
                        wohungarumlaut: [-20, -20, -10, -10, -10, -15, 0, -10],
                        womacron: [-20, -20, -10, -10, -10, -15, 0, -10],
                        woslash: [-20, -20, -10, -10, -10, -15, 0, -10],
                        wotilde: [-20, -20, -10, -10, -10, -15, 0, -10],
                        wperiod: [-40, -40, -60, -60, -70, -37, -74, -65],
                        xe: [-10, -10, -30, -30, 0, -10, 0, -15],
                        xeacute: [-10, -10, -30, -30, 0, -10, 0, -15],
                        xecaron: [-10, -10, -30, -30, 0, -10, 0, -15],
                        xecircumflex: [-10, -10, -30, -30, 0, -10, 0, -15],
                        xedieresis: [-10, -10, -30, -30, 0, -10, 0, -15],
                        xedotaccent: [-10, -10, -30, -30, 0, -10, 0, -15],
                        xegrave: [-10, -10, -30, -30, 0, -10, 0, -15],
                        xemacron: [-10, -10, -30, -30, 0, -10, 0, -15],
                        xeogonek: [-10, -10, -30, -30, 0, -10, 0, -15],
                        ya: [-30, -30, -20, -20],
                        yaacute: [-30, -30, -20, -20],
                        yabreve: [-30, -30, -20, -20],
                        yacircumflex: [-30, -30, -20, -20],
                        yadieresis: [-30, -30, -20, -20],
                        yagrave: [-30, -30, -20, -20],
                        yamacron: [-30, -30, -20, -20],
                        yaogonek: [-30, -30, -20, -20],
                        yaring: [-30, -30, -20, -20],
                        yatilde: [-30, -30, -20, -20],
                        ycomma: [-80, -80, -100, -100, -55, -37, -55, -65],
                        ye: [-10, -10, -20, -20, -10],
                        yeacute: [-10, -10, -20, -20, -10],
                        yecaron: [-10, -10, -20, -20, -10],
                        yecircumflex: [-10, -10, -20, -20, -10],
                        yedieresis: [-10, -10, -20, -20, -10],
                        yedotaccent: [-10, -10, -20, -20, -10],
                        yegrave: [-10, -10, -20, -20, -10],
                        yemacron: [-10, -10, -20, -20, -10],
                        yeogonek: [-10, -10, -20, -20, -10],
                        yo: [-25, -25, -20, -20, -25],
                        yoacute: [-25, -25, -20, -20, -25],
                        yocircumflex: [-25, -25, -20, -20, -25],
                        yodieresis: [-25, -25, -20, -20, -25],
                        yograve: [-25, -25, -20, -20, -25],
                        yohungarumlaut: [-25, -25, -20, -20, -25],
                        yomacron: [-25, -25, -20, -20, -25],
                        yoslash: [-25, -25, -20, -20, -25],
                        yotilde: [-25, -25, -20, -20, -25],
                        yperiod: [-80, -80, -100, -100, -70, -37, -55, -65],
                        yacutea: [-30, -30, -20, -20],
                        yacuteaacute: [-30, -30, -20, -20],
                        yacuteabreve: [-30, -30, -20, -20],
                        yacuteacircumflex: [-30, -30, -20, -20],
                        yacuteadieresis: [-30, -30, -20, -20],
                        yacuteagrave: [-30, -30, -20, -20],
                        yacuteamacron: [-30, -30, -20, -20],
                        yacuteaogonek: [-30, -30, -20, -20],
                        yacutearing: [-30, -30, -20, -20],
                        yacuteatilde: [-30, -30, -20, -20],
                        yacutecomma: [-80, -80, -100, -100, -55, -37, -55, -65],
                        yacutee: [-10, -10, -20, -20, -10],
                        yacuteeacute: [-10, -10, -20, -20, -10],
                        yacuteecaron: [-10, -10, -20, -20, -10],
                        yacuteecircumflex: [-10, -10, -20, -20, -10],
                        yacuteedieresis: [-10, -10, -20, -20, -10],
                        yacuteedotaccent: [-10, -10, -20, -20, -10],
                        yacuteegrave: [-10, -10, -20, -20, -10],
                        yacuteemacron: [-10, -10, -20, -20, -10],
                        yacuteeogonek: [-10, -10, -20, -20, -10],
                        yacuteo: [-25, -25, -20, -20, -25],
                        yacuteoacute: [-25, -25, -20, -20, -25],
                        yacuteocircumflex: [-25, -25, -20, -20, -25],
                        yacuteodieresis: [-25, -25, -20, -20, -25],
                        yacuteograve: [-25, -25, -20, -20, -25],
                        yacuteohungarumlaut: [-25, -25, -20, -20, -25],
                        yacuteomacron: [-25, -25, -20, -20, -25],
                        yacuteoslash: [-25, -25, -20, -20, -25],
                        yacuteotilde: [-25, -25, -20, -20, -25],
                        yacuteperiod: [-80, -80, -100, -100, -70, -37, -55, -65],
                        ydieresisa: [-30, -30, -20, -20],
                        ydieresisaacute: [-30, -30, -20, -20],
                        ydieresisabreve: [-30, -30, -20, -20],
                        ydieresisacircumflex: [-30, -30, -20, -20],
                        ydieresisadieresis: [-30, -30, -20, -20],
                        ydieresisagrave: [-30, -30, -20, -20],
                        ydieresisamacron: [-30, -30, -20, -20],
                        ydieresisaogonek: [-30, -30, -20, -20],
                        ydieresisaring: [-30, -30, -20, -20],
                        ydieresisatilde: [-30, -30, -20, -20],
                        ydieresiscomma: [-80, -80, -100, -100, -55, -37, -55, -65],
                        ydieresise: [-10, -10, -20, -20, -10],
                        ydieresiseacute: [-10, -10, -20, -20, -10],
                        ydieresisecaron: [-10, -10, -20, -20, -10],
                        ydieresisecircumflex: [-10, -10, -20, -20, -10],
                        ydieresisedieresis: [-10, -10, -20, -20, -10],
                        ydieresisedotaccent: [-10, -10, -20, -20, -10],
                        ydieresisegrave: [-10, -10, -20, -20, -10],
                        ydieresisemacron: [-10, -10, -20, -20, -10],
                        ydieresiseogonek: [-10, -10, -20, -20, -10],
                        ydieresiso: [-25, -25, -20, -20, -25],
                        ydieresisoacute: [-25, -25, -20, -20, -25],
                        ydieresisocircumflex: [-25, -25, -20, -20, -25],
                        ydieresisodieresis: [-25, -25, -20, -20, -25],
                        ydieresisograve: [-25, -25, -20, -20, -25],
                        ydieresisohungarumlaut: [-25, -25, -20, -20, -25],
                        ydieresisomacron: [-25, -25, -20, -20, -25],
                        ydieresisoslash: [-25, -25, -20, -20, -25],
                        ydieresisotilde: [-25, -25, -20, -20, -25],
                        ydieresisperiod: [-80, -80, -100, -100, -70, -37, -55, -65],
                        ze: [10, 10, -15, -15],
                        zeacute: [10, 10, -15, -15],
                        zecaron: [10, 10, -15, -15],
                        zecircumflex: [10, 10, -15, -15],
                        zedieresis: [10, 10, -15, -15],
                        zedotaccent: [10, 10, -15, -15],
                        zegrave: [10, 10, -15, -15],
                        zemacron: [10, 10, -15, -15],
                        zeogonek: [10, 10, -15, -15],
                        zacutee: [10, 10, -15, -15],
                        zacuteeacute: [10, 10, -15, -15],
                        zacuteecaron: [10, 10, -15, -15],
                        zacuteecircumflex: [10, 10, -15, -15],
                        zacuteedieresis: [10, 10, -15, -15],
                        zacuteedotaccent: [10, 10, -15, -15],
                        zacuteegrave: [10, 10, -15, -15],
                        zacuteemacron: [10, 10, -15, -15],
                        zacuteeogonek: [10, 10, -15, -15],
                        zcarone: [10, 10, -15, -15],
                        zcaroneacute: [10, 10, -15, -15],
                        zcaronecaron: [10, 10, -15, -15],
                        zcaronecircumflex: [10, 10, -15, -15],
                        zcaronedieresis: [10, 10, -15, -15],
                        zcaronedotaccent: [10, 10, -15, -15],
                        zcaronegrave: [10, 10, -15, -15],
                        zcaronemacron: [10, 10, -15, -15],
                        zcaroneogonek: [10, 10, -15, -15],
                        zdotaccente: [10, 10, -15, -15],
                        zdotaccenteacute: [10, 10, -15, -15],
                        zdotaccentecaron: [10, 10, -15, -15],
                        zdotaccentecircumflex: [10, 10, -15, -15],
                        zdotaccentedieresis: [10, 10, -15, -15],
                        zdotaccentedotaccent: [10, 10, -15, -15],
                        zdotaccentegrave: [10, 10, -15, -15],
                        zdotaccentemacron: [10, 10, -15, -15],
                        zdotaccenteogonek: [10, 10, -15, -15],
                        Bcomma: [0, 0, -20, -20],
                        Bperiod: [0, 0, -20, -20],
                        Ccomma: [0, 0, -30, -30],
                        Cperiod: [0, 0, -30, -30],
                        Cacutecomma: [0, 0, -30, -30],
                        Cacuteperiod: [0, 0, -30, -30],
                        Ccaroncomma: [0, 0, -30, -30],
                        Ccaronperiod: [0, 0, -30, -30],
                        Ccedillacomma: [0, 0, -30, -30],
                        Ccedillaperiod: [0, 0, -30, -30],
                        Fe: [0, 0, -30, -30, -25, -100, -75],
                        Feacute: [0, 0, -30, -30, -25, -100, -75],
                        Fecaron: [0, 0, -30, -30, -25, -100, -75],
                        Fecircumflex: [0, 0, -30, -30, -25, -100, -75],
                        Fedieresis: [0, 0, -30, -30, -25, -100, -75],
                        Fedotaccent: [0, 0, -30, -30, -25, -100, -75],
                        Fegrave: [0, 0, -30, -30, -25, -100, -75],
                        Femacron: [0, 0, -30, -30, -25, -100, -75],
                        Feogonek: [0, 0, -30, -30, -25, -100, -75],
                        Fo: [0, 0, -30, -30, -25, -70, -105, -15],
                        Foacute: [0, 0, -30, -30, -25, -70, -105, -15],
                        Focircumflex: [0, 0, -30, -30, -25, -70, -105, -15],
                        Fodieresis: [0, 0, -30, -30, -25, -70, -105, -15],
                        Fograve: [0, 0, -30, -30, -25, -70, -105, -15],
                        Fohungarumlaut: [0, 0, -30, -30, -25, -70, -105, -15],
                        Fomacron: [0, 0, -30, -30, -25, -70, -105, -15],
                        Foslash: [0, 0, -30, -30, -25, -70, -105, -15],
                        Fotilde: [0, 0, -30, -30, -25, -70, -105, -15],
                        Fr: [0, 0, -45, -45, 0, -50, -55],
                        Fracute: [0, 0, -45, -45, 0, -50, -55],
                        Frcaron: [0, 0, -45, -45, 0, -50, -55],
                        Frcommaaccent: [0, 0, -45, -45, 0, -50, -55],
                        Ja: [0, 0, -20, -20, -15, -40, -35],
                        Jaacute: [0, 0, -20, -20, -15, -40, -35],
                        Jabreve: [0, 0, -20, -20, -15, -40, -35],
                        Jacircumflex: [0, 0, -20, -20, -15, -40, -35],
                        Jadieresis: [0, 0, -20, -20, -15, -40, -35],
                        Jagrave: [0, 0, -20, -20, -15, -40, -35],
                        Jamacron: [0, 0, -20, -20, -15, -40, -35],
                        Jaogonek: [0, 0, -20, -20, -15, -40, -35],
                        Jaring: [0, 0, -20, -20, -15, -40, -35],
                        Jatilde: [0, 0, -20, -20, -15, -40, -35],
                        LcaronT: [0, 0, -110, -110],
                        LcaronTcaron: [0, 0, -110, -110],
                        LcaronTcommaaccent: [0, 0, -110, -110],
                        LcaronV: [0, 0, -110, -110],
                        LcaronW: [0, 0, -70, -70],
                        LcaronY: [0, 0, -140, -140],
                        LcaronYacute: [0, 0, -140, -140],
                        LcaronYdieresis: [0, 0, -140, -140],
                        Lcaronquotedblright: [0, 0, -140, -140],
                        Lcaronquoteright: [0, 0, -160, -160, 0, 0, 0, -92],
                        Lcarony: [0, 0, -30, -30, 0, 0, 0, -55],
                        Lcaronyacute: [0, 0, -30, -30, 0, 0, 0, -55],
                        Lcaronydieresis: [0, 0, -30, -30, 0, 0, 0, -55],
                        Scomma: [0, 0, -20, -20],
                        Speriod: [0, 0, -20, -20],
                        Sacutecomma: [0, 0, -20, -20],
                        Sacuteperiod: [0, 0, -20, -20],
                        Scaroncomma: [0, 0, -20, -20],
                        Scaronperiod: [0, 0, -20, -20],
                        Scedillacomma: [0, 0, -20, -20],
                        Scedillaperiod: [0, 0, -20, -20],
                        Scommaaccentcomma: [0, 0, -20, -20],
                        Scommaaccentperiod: [0, 0, -20, -20],
                        Trcaron: [0, 0, -120, -120, -74, -37, -55, -35],
                        Tcaronrcaron: [0, 0, -120, -120, -74, -37, -55, -35],
                        Tcommaaccentrcaron: [0, 0, -120, -120, -74, -37, -55, -35],
                        Yhyphen: [0, 0, -140, -140, -92, -92, -74, -111],
                        Yi: [0, 0, -20, -20, -37, -55, -74, -55],
                        Yiacute: [0, 0, -20, -20, -37, -55, -74, -55],
                        Yiogonek: [0, 0, -20, -20, -37, -55, -74, -55],
                        Yacutehyphen: [0, 0, -140, -140, -92, -92, -74, -111],
                        Yacutei: [0, 0, -20, -20, -37, -55, -74, -55],
                        Yacuteiacute: [0, 0, -20, -20, -37, -55, -74, -55],
                        Yacuteiogonek: [0, 0, -20, -20, -37, -55, -74, -55],
                        Ydieresishyphen: [0, 0, -140, -140, -92, -92, -74, -111],
                        Ydieresisi: [0, 0, -20, -20, -37, -55, -74, -55],
                        Ydieresisiacute: [0, 0, -20, -20, -37, -55, -74, -55],
                        Ydieresisiogonek: [0, 0, -20, -20, -37, -55, -74, -55],
                        bb: [0, 0, -10, -10, -10, -10],
                        bcomma: [0, 0, -40, -40],
                        bperiod: [0, 0, -40, -40, -40, -40, -40, -40],
                        ccomma: [0, 0, -15, -15],
                        cacutecomma: [0, 0, -15, -15],
                        ccaroncomma: [0, 0, -15, -15],
                        ccedillacomma: [0, 0, -15, -15],
                        fa: [0, 0, -30, -30, 0, 0, 0, -10],
                        faacute: [0, 0, -30, -30, 0, 0, 0, -10],
                        fabreve: [0, 0, -30, -30, 0, 0, 0, -10],
                        facircumflex: [0, 0, -30, -30, 0, 0, 0, -10],
                        fadieresis: [0, 0, -30, -30, 0, 0, 0, -10],
                        fagrave: [0, 0, -30, -30, 0, 0, 0, -10],
                        famacron: [0, 0, -30, -30, 0, 0, 0, -10],
                        faogonek: [0, 0, -30, -30, 0, 0, 0, -10],
                        faring: [0, 0, -30, -30, 0, 0, 0, -10],
                        fatilde: [0, 0, -30, -30, 0, 0, 0, -10],
                        fdotlessi: [0, 0, -28, -28, -35, -30, -60, -50],
                        gr: [0, 0, -10, -10],
                        gracute: [0, 0, -10, -10],
                        grcaron: [0, 0, -10, -10],
                        grcommaaccent: [0, 0, -10, -10],
                        gbrever: [0, 0, -10, -10],
                        gbreveracute: [0, 0, -10, -10],
                        gbrevercaron: [0, 0, -10, -10],
                        gbrevercommaaccent: [0, 0, -10, -10],
                        gcommaaccentr: [0, 0, -10, -10],
                        gcommaaccentracute: [0, 0, -10, -10],
                        gcommaaccentrcaron: [0, 0, -10, -10],
                        gcommaaccentrcommaaccent: [0, 0, -10, -10],
                        ke: [0, 0, -20, -20, -10, -30, -10, -10],
                        keacute: [0, 0, -20, -20, -10, -30, -10, -10],
                        kecaron: [0, 0, -20, -20, -10, -30, -10, -10],
                        kecircumflex: [0, 0, -20, -20, -10, -30, -10, -10],
                        kedieresis: [0, 0, -20, -20, -10, -30, -10, -10],
                        kedotaccent: [0, 0, -20, -20, -10, -30, -10, -10],
                        kegrave: [0, 0, -20, -20, -10, -30, -10, -10],
                        kemacron: [0, 0, -20, -20, -10, -30, -10, -10],
                        keogonek: [0, 0, -20, -20, -10, -30, -10, -10],
                        kcommaaccente: [0, 0, -20, -20, -10, -30, -10, -10],
                        kcommaaccenteacute: [0, 0, -20, -20, -10, -30, -10, -10],
                        kcommaaccentecaron: [0, 0, -20, -20, -10, -30, -10, -10],
                        kcommaaccentecircumflex: [0, 0, -20, -20, -10, -30, -10, -10],
                        kcommaaccentedieresis: [0, 0, -20, -20, -10, -30, -10, -10],
                        kcommaaccentedotaccent: [0, 0, -20, -20, -10, -30, -10, -10],
                        kcommaaccentegrave: [0, 0, -20, -20, -10, -30, -10, -10],
                        kcommaaccentemacron: [0, 0, -20, -20, -10, -30, -10, -10],
                        kcommaaccenteogonek: [0, 0, -20, -20, -10, -30, -10, -10],
                        ocomma: [0, 0, -40, -40],
                        operiod: [0, 0, -40, -40],
                        oacutecomma: [0, 0, -40, -40],
                        oacuteperiod: [0, 0, -40, -40],
                        ocircumflexcomma: [0, 0, -40, -40],
                        ocircumflexperiod: [0, 0, -40, -40],
                        odieresiscomma: [0, 0, -40, -40],
                        odieresisperiod: [0, 0, -40, -40],
                        ogravecomma: [0, 0, -40, -40],
                        ograveperiod: [0, 0, -40, -40],
                        ohungarumlautcomma: [0, 0, -40, -40],
                        ohungarumlautperiod: [0, 0, -40, -40],
                        omacroncomma: [0, 0, -40, -40],
                        omacronperiod: [0, 0, -40, -40],
                        oslasha: [0, 0, -55, -55],
                        oslashaacute: [0, 0, -55, -55],
                        oslashabreve: [0, 0, -55, -55],
                        oslashacircumflex: [0, 0, -55, -55],
                        oslashadieresis: [0, 0, -55, -55],
                        oslashagrave: [0, 0, -55, -55],
                        oslashamacron: [0, 0, -55, -55],
                        oslashaogonek: [0, 0, -55, -55],
                        oslasharing: [0, 0, -55, -55],
                        oslashatilde: [0, 0, -55, -55],
                        oslashb: [0, 0, -55, -55],
                        oslashc: [0, 0, -55, -55],
                        oslashcacute: [0, 0, -55, -55],
                        oslashccaron: [0, 0, -55, -55],
                        oslashccedilla: [0, 0, -55, -55],
                        oslashcomma: [0, 0, -95, -95],
                        oslashd: [0, 0, -55, -55],
                        oslashdcroat: [0, 0, -55, -55],
                        oslashe: [0, 0, -55, -55],
                        oslasheacute: [0, 0, -55, -55],
                        oslashecaron: [0, 0, -55, -55],
                        oslashecircumflex: [0, 0, -55, -55],
                        oslashedieresis: [0, 0, -55, -55],
                        oslashedotaccent: [0, 0, -55, -55],
                        oslashegrave: [0, 0, -55, -55],
                        oslashemacron: [0, 0, -55, -55],
                        oslasheogonek: [0, 0, -55, -55],
                        oslashf: [0, 0, -55, -55],
                        oslashg: [0, 0, -55, -55, 0, 0, -10],
                        oslashgbreve: [0, 0, -55, -55, 0, 0, -10],
                        oslashgcommaaccent: [0, 0, -55, -55, 0, 0, -10],
                        oslashh: [0, 0, -55, -55],
                        oslashi: [0, 0, -55, -55],
                        oslashiacute: [0, 0, -55, -55],
                        oslashicircumflex: [0, 0, -55, -55],
                        oslashidieresis: [0, 0, -55, -55],
                        oslashigrave: [0, 0, -55, -55],
                        oslashimacron: [0, 0, -55, -55],
                        oslashiogonek: [0, 0, -55, -55],
                        oslashj: [0, 0, -55, -55],
                        oslashk: [0, 0, -55, -55],
                        oslashkcommaaccent: [0, 0, -55, -55],
                        oslashl: [0, 0, -55, -55],
                        oslashlacute: [0, 0, -55, -55],
                        oslashlcommaaccent: [0, 0, -55, -55],
                        oslashlslash: [0, 0, -55, -55],
                        oslashm: [0, 0, -55, -55],
                        oslashn: [0, 0, -55, -55],
                        oslashnacute: [0, 0, -55, -55],
                        oslashncaron: [0, 0, -55, -55],
                        oslashncommaaccent: [0, 0, -55, -55],
                        oslashntilde: [0, 0, -55, -55],
                        oslasho: [0, 0, -55, -55],
                        oslashoacute: [0, 0, -55, -55],
                        oslashocircumflex: [0, 0, -55, -55],
                        oslashodieresis: [0, 0, -55, -55],
                        oslashograve: [0, 0, -55, -55],
                        oslashohungarumlaut: [0, 0, -55, -55],
                        oslashomacron: [0, 0, -55, -55],
                        oslashoslash: [0, 0, -55, -55],
                        oslashotilde: [0, 0, -55, -55],
                        oslashp: [0, 0, -55, -55],
                        oslashperiod: [0, 0, -95, -95],
                        oslashq: [0, 0, -55, -55],
                        oslashr: [0, 0, -55, -55],
                        oslashracute: [0, 0, -55, -55],
                        oslashrcaron: [0, 0, -55, -55],
                        oslashrcommaaccent: [0, 0, -55, -55],
                        oslashs: [0, 0, -55, -55],
                        oslashsacute: [0, 0, -55, -55],
                        oslashscaron: [0, 0, -55, -55],
                        oslashscedilla: [0, 0, -55, -55],
                        oslashscommaaccent: [0, 0, -55, -55],
                        oslasht: [0, 0, -55, -55],
                        oslashtcommaaccent: [0, 0, -55, -55],
                        oslashu: [0, 0, -55, -55],
                        oslashuacute: [0, 0, -55, -55],
                        oslashucircumflex: [0, 0, -55, -55],
                        oslashudieresis: [0, 0, -55, -55],
                        oslashugrave: [0, 0, -55, -55],
                        oslashuhungarumlaut: [0, 0, -55, -55],
                        oslashumacron: [0, 0, -55, -55],
                        oslashuogonek: [0, 0, -55, -55],
                        oslashuring: [0, 0, -55, -55],
                        oslashz: [0, 0, -55, -55],
                        oslashzacute: [0, 0, -55, -55],
                        oslashzcaron: [0, 0, -55, -55],
                        oslashzdotaccent: [0, 0, -55, -55],
                        otildecomma: [0, 0, -40, -40],
                        otildeperiod: [0, 0, -40, -40],
                        pcomma: [0, 0, -35, -35],
                        pperiod: [0, 0, -35, -35],
                        ra: [0, 0, -10, -10, 0, 0, -15],
                        raacute: [0, 0, -10, -10, 0, 0, -15],
                        rabreve: [0, 0, -10, -10, 0, 0, -15],
                        racircumflex: [0, 0, -10, -10, 0, 0, -15],
                        radieresis: [0, 0, -10, -10, 0, 0, -15],
                        ragrave: [0, 0, -10, -10, 0, 0, -15],
                        ramacron: [0, 0, -10, -10, 0, 0, -15],
                        raogonek: [0, 0, -10, -10, 0, 0, -15],
                        raring: [0, 0, -10, -10, 0, 0, -15],
                        ratilde: [0, 0, -10, -10, 0, 0, -15],
                        rcolon: [0, 0, 30, 30],
                        ri: [0, 0, 15, 15],
                        riacute: [0, 0, 15, 15],
                        ricircumflex: [0, 0, 15, 15],
                        ridieresis: [0, 0, 15, 15],
                        rigrave: [0, 0, 15, 15],
                        rimacron: [0, 0, 15, 15],
                        riogonek: [0, 0, 15, 15],
                        rk: [0, 0, 15, 15],
                        rkcommaaccent: [0, 0, 15, 15],
                        rl: [0, 0, 15, 15],
                        rlacute: [0, 0, 15, 15],
                        rlcommaaccent: [0, 0, 15, 15],
                        rlslash: [0, 0, 15, 15],
                        rm: [0, 0, 25, 25],
                        rn: [0, 0, 25, 25, -15],
                        rnacute: [0, 0, 25, 25, -15],
                        rncaron: [0, 0, 25, 25, -15],
                        rncommaaccent: [0, 0, 25, 25, -15],
                        rntilde: [0, 0, 25, 25, -15],
                        rp: [0, 0, 30, 30, -10],
                        rsemicolon: [0, 0, 30, 30],
                        ru: [0, 0, 15, 15],
                        ruacute: [0, 0, 15, 15],
                        rucircumflex: [0, 0, 15, 15],
                        rudieresis: [0, 0, 15, 15],
                        rugrave: [0, 0, 15, 15],
                        ruhungarumlaut: [0, 0, 15, 15],
                        rumacron: [0, 0, 15, 15],
                        ruogonek: [0, 0, 15, 15],
                        ruring: [0, 0, 15, 15],
                        racutea: [0, 0, -10, -10, 0, 0, -15],
                        racuteaacute: [0, 0, -10, -10, 0, 0, -15],
                        racuteabreve: [0, 0, -10, -10, 0, 0, -15],
                        racuteacircumflex: [0, 0, -10, -10, 0, 0, -15],
                        racuteadieresis: [0, 0, -10, -10, 0, 0, -15],
                        racuteagrave: [0, 0, -10, -10, 0, 0, -15],
                        racuteamacron: [0, 0, -10, -10, 0, 0, -15],
                        racuteaogonek: [0, 0, -10, -10, 0, 0, -15],
                        racutearing: [0, 0, -10, -10, 0, 0, -15],
                        racuteatilde: [0, 0, -10, -10, 0, 0, -15],
                        racutecolon: [0, 0, 30, 30],
                        racutei: [0, 0, 15, 15],
                        racuteiacute: [0, 0, 15, 15],
                        racuteicircumflex: [0, 0, 15, 15],
                        racuteidieresis: [0, 0, 15, 15],
                        racuteigrave: [0, 0, 15, 15],
                        racuteimacron: [0, 0, 15, 15],
                        racuteiogonek: [0, 0, 15, 15],
                        racutek: [0, 0, 15, 15],
                        racutekcommaaccent: [0, 0, 15, 15],
                        racutel: [0, 0, 15, 15],
                        racutelacute: [0, 0, 15, 15],
                        racutelcommaaccent: [0, 0, 15, 15],
                        racutelslash: [0, 0, 15, 15],
                        racutem: [0, 0, 25, 25],
                        racuten: [0, 0, 25, 25, -15],
                        racutenacute: [0, 0, 25, 25, -15],
                        racutencaron: [0, 0, 25, 25, -15],
                        racutencommaaccent: [0, 0, 25, 25, -15],
                        racutentilde: [0, 0, 25, 25, -15],
                        racutep: [0, 0, 30, 30, -10],
                        racutesemicolon: [0, 0, 30, 30],
                        racuteu: [0, 0, 15, 15],
                        racuteuacute: [0, 0, 15, 15],
                        racuteucircumflex: [0, 0, 15, 15],
                        racuteudieresis: [0, 0, 15, 15],
                        racuteugrave: [0, 0, 15, 15],
                        racuteuhungarumlaut: [0, 0, 15, 15],
                        racuteumacron: [0, 0, 15, 15],
                        racuteuogonek: [0, 0, 15, 15],
                        racuteuring: [0, 0, 15, 15],
                        rcarona: [0, 0, -10, -10, 0, 0, -15],
                        rcaronaacute: [0, 0, -10, -10, 0, 0, -15],
                        rcaronabreve: [0, 0, -10, -10, 0, 0, -15],
                        rcaronacircumflex: [0, 0, -10, -10, 0, 0, -15],
                        rcaronadieresis: [0, 0, -10, -10, 0, 0, -15],
                        rcaronagrave: [0, 0, -10, -10, 0, 0, -15],
                        rcaronamacron: [0, 0, -10, -10, 0, 0, -15],
                        rcaronaogonek: [0, 0, -10, -10, 0, 0, -15],
                        rcaronaring: [0, 0, -10, -10, 0, 0, -15],
                        rcaronatilde: [0, 0, -10, -10, 0, 0, -15],
                        rcaroncolon: [0, 0, 30, 30],
                        rcaroni: [0, 0, 15, 15],
                        rcaroniacute: [0, 0, 15, 15],
                        rcaronicircumflex: [0, 0, 15, 15],
                        rcaronidieresis: [0, 0, 15, 15],
                        rcaronigrave: [0, 0, 15, 15],
                        rcaronimacron: [0, 0, 15, 15],
                        rcaroniogonek: [0, 0, 15, 15],
                        rcaronk: [0, 0, 15, 15],
                        rcaronkcommaaccent: [0, 0, 15, 15],
                        rcaronl: [0, 0, 15, 15],
                        rcaronlacute: [0, 0, 15, 15],
                        rcaronlcommaaccent: [0, 0, 15, 15],
                        rcaronlslash: [0, 0, 15, 15],
                        rcaronm: [0, 0, 25, 25],
                        rcaronn: [0, 0, 25, 25, -15],
                        rcaronnacute: [0, 0, 25, 25, -15],
                        rcaronncaron: [0, 0, 25, 25, -15],
                        rcaronncommaaccent: [0, 0, 25, 25, -15],
                        rcaronntilde: [0, 0, 25, 25, -15],
                        rcaronp: [0, 0, 30, 30, -10],
                        rcaronsemicolon: [0, 0, 30, 30],
                        rcaronu: [0, 0, 15, 15],
                        rcaronuacute: [0, 0, 15, 15],
                        rcaronucircumflex: [0, 0, 15, 15],
                        rcaronudieresis: [0, 0, 15, 15],
                        rcaronugrave: [0, 0, 15, 15],
                        rcaronuhungarumlaut: [0, 0, 15, 15],
                        rcaronumacron: [0, 0, 15, 15],
                        rcaronuogonek: [0, 0, 15, 15],
                        rcaronuring: [0, 0, 15, 15],
                        rcommaaccenta: [0, 0, -10, -10, 0, 0, -15],
                        rcommaaccentaacute: [0, 0, -10, -10, 0, 0, -15],
                        rcommaaccentabreve: [0, 0, -10, -10, 0, 0, -15],
                        rcommaaccentacircumflex: [0, 0, -10, -10, 0, 0, -15],
                        rcommaaccentadieresis: [0, 0, -10, -10, 0, 0, -15],
                        rcommaaccentagrave: [0, 0, -10, -10, 0, 0, -15],
                        rcommaaccentamacron: [0, 0, -10, -10, 0, 0, -15],
                        rcommaaccentaogonek: [0, 0, -10, -10, 0, 0, -15],
                        rcommaaccentaring: [0, 0, -10, -10, 0, 0, -15],
                        rcommaaccentatilde: [0, 0, -10, -10, 0, 0, -15],
                        rcommaaccentcolon: [0, 0, 30, 30],
                        rcommaaccenti: [0, 0, 15, 15],
                        rcommaaccentiacute: [0, 0, 15, 15],
                        rcommaaccenticircumflex: [0, 0, 15, 15],
                        rcommaaccentidieresis: [0, 0, 15, 15],
                        rcommaaccentigrave: [0, 0, 15, 15],
                        rcommaaccentimacron: [0, 0, 15, 15],
                        rcommaaccentiogonek: [0, 0, 15, 15],
                        rcommaaccentk: [0, 0, 15, 15],
                        rcommaaccentkcommaaccent: [0, 0, 15, 15],
                        rcommaaccentl: [0, 0, 15, 15],
                        rcommaaccentlacute: [0, 0, 15, 15],
                        rcommaaccentlcommaaccent: [0, 0, 15, 15],
                        rcommaaccentlslash: [0, 0, 15, 15],
                        rcommaaccentm: [0, 0, 25, 25],
                        rcommaaccentn: [0, 0, 25, 25, -15],
                        rcommaaccentnacute: [0, 0, 25, 25, -15],
                        rcommaaccentncaron: [0, 0, 25, 25, -15],
                        rcommaaccentncommaaccent: [0, 0, 25, 25, -15],
                        rcommaaccentntilde: [0, 0, 25, 25, -15],
                        rcommaaccentp: [0, 0, 30, 30, -10],
                        rcommaaccentsemicolon: [0, 0, 30, 30],
                        rcommaaccentu: [0, 0, 15, 15],
                        rcommaaccentuacute: [0, 0, 15, 15],
                        rcommaaccentucircumflex: [0, 0, 15, 15],
                        rcommaaccentudieresis: [0, 0, 15, 15],
                        rcommaaccentugrave: [0, 0, 15, 15],
                        rcommaaccentuhungarumlaut: [0, 0, 15, 15],
                        rcommaaccentumacron: [0, 0, 15, 15],
                        rcommaaccentuogonek: [0, 0, 15, 15],
                        rcommaaccenturing: [0, 0, 15, 15],
                        scomma: [0, 0, -15, -15],
                        speriod: [0, 0, -15, -15],
                        sacutecomma: [0, 0, -15, -15],
                        sacuteperiod: [0, 0, -15, -15],
                        scaroncomma: [0, 0, -15, -15],
                        scaronperiod: [0, 0, -15, -15],
                        scedillacomma: [0, 0, -15, -15],
                        scedillaperiod: [0, 0, -15, -15],
                        scommaaccentcomma: [0, 0, -15, -15],
                        scommaaccentperiod: [0, 0, -15, -15],
                        ve: [0, 0, -25, -25, -10, -15, 0, -15],
                        veacute: [0, 0, -25, -25, -10, -15, 0, -15],
                        vecaron: [0, 0, -25, -25, -10, -15, 0, -15],
                        vecircumflex: [0, 0, -25, -25, -10, -15, 0, -15],
                        vedieresis: [0, 0, -25, -25, -10, -15, 0, -15],
                        vedotaccent: [0, 0, -25, -25, -10, -15, 0, -15],
                        vegrave: [0, 0, -25, -25, -10, -15, 0, -15],
                        vemacron: [0, 0, -25, -25, -10, -15, 0, -15],
                        veogonek: [0, 0, -25, -25, -10, -15, 0, -15],
                        wa: [0, 0, -15, -15, 0, -10, 0, -10],
                        waacute: [0, 0, -15, -15, 0, -10, 0, -10],
                        wabreve: [0, 0, -15, -15, 0, -10, 0, -10],
                        wacircumflex: [0, 0, -15, -15, 0, -10, 0, -10],
                        wadieresis: [0, 0, -15, -15, 0, -10, 0, -10],
                        wagrave: [0, 0, -15, -15, 0, -10, 0, -10],
                        wamacron: [0, 0, -15, -15, 0, -10, 0, -10],
                        waogonek: [0, 0, -15, -15, 0, -10, 0, -10],
                        waring: [0, 0, -15, -15, 0, -10, 0, -10],
                        watilde: [0, 0, -15, -15, 0, -10, 0, -10],
                        we: [0, 0, -10, -10, 0, -10],
                        weacute: [0, 0, -10, -10, 0, -10],
                        wecaron: [0, 0, -10, -10, 0, -10],
                        wecircumflex: [0, 0, -10, -10, 0, -10],
                        wedieresis: [0, 0, -10, -10, 0, -10],
                        wedotaccent: [0, 0, -10, -10, 0, -10],
                        wegrave: [0, 0, -10, -10, 0, -10],
                        wemacron: [0, 0, -10, -10, 0, -10],
                        weogonek: [0, 0, -10, -10, 0, -10],
                        zo: [0, 0, -15, -15],
                        zoacute: [0, 0, -15, -15],
                        zocircumflex: [0, 0, -15, -15],
                        zodieresis: [0, 0, -15, -15],
                        zograve: [0, 0, -15, -15],
                        zohungarumlaut: [0, 0, -15, -15],
                        zomacron: [0, 0, -15, -15],
                        zoslash: [0, 0, -15, -15],
                        zotilde: [0, 0, -15, -15],
                        zacuteo: [0, 0, -15, -15],
                        zacuteoacute: [0, 0, -15, -15],
                        zacuteocircumflex: [0, 0, -15, -15],
                        zacuteodieresis: [0, 0, -15, -15],
                        zacuteograve: [0, 0, -15, -15],
                        zacuteohungarumlaut: [0, 0, -15, -15],
                        zacuteomacron: [0, 0, -15, -15],
                        zacuteoslash: [0, 0, -15, -15],
                        zacuteotilde: [0, 0, -15, -15],
                        zcarono: [0, 0, -15, -15],
                        zcaronoacute: [0, 0, -15, -15],
                        zcaronocircumflex: [0, 0, -15, -15],
                        zcaronodieresis: [0, 0, -15, -15],
                        zcaronograve: [0, 0, -15, -15],
                        zcaronohungarumlaut: [0, 0, -15, -15],
                        zcaronomacron: [0, 0, -15, -15],
                        zcaronoslash: [0, 0, -15, -15],
                        zcaronotilde: [0, 0, -15, -15],
                        zdotaccento: [0, 0, -15, -15],
                        zdotaccentoacute: [0, 0, -15, -15],
                        zdotaccentocircumflex: [0, 0, -15, -15],
                        zdotaccentodieresis: [0, 0, -15, -15],
                        zdotaccentograve: [0, 0, -15, -15],
                        zdotaccentohungarumlaut: [0, 0, -15, -15],
                        zdotaccentomacron: [0, 0, -15, -15],
                        zdotaccentoslash: [0, 0, -15, -15],
                        zdotaccentotilde: [0, 0, -15, -15],
                        Ap: [0, 0, 0, 0, -25],
                        Aquoteright: [0, 0, 0, 0, -74, -74, -37, -111],
                        Aacutep: [0, 0, 0, 0, -25],
                        Aacutequoteright: [0, 0, 0, 0, -74, -74, -37, -111],
                        Abrevep: [0, 0, 0, 0, -25],
                        Abrevequoteright: [0, 0, 0, 0, -74, -74, -37, -111],
                        Acircumflexp: [0, 0, 0, 0, -25],
                        Acircumflexquoteright: [0, 0, 0, 0, -74, -74, -37, -111],
                        Adieresisp: [0, 0, 0, 0, -25],
                        Adieresisquoteright: [0, 0, 0, 0, -74, -74, -37, -111],
                        Agravep: [0, 0, 0, 0, -25],
                        Agravequoteright: [0, 0, 0, 0, -74, -74, -37, -111],
                        Amacronp: [0, 0, 0, 0, -25],
                        Amacronquoteright: [0, 0, 0, 0, -74, -74, -37, -111],
                        Aogonekp: [0, 0, 0, 0, -25],
                        Aogonekquoteright: [0, 0, 0, 0, -74, -74, -37, -111],
                        Aringp: [0, 0, 0, 0, -25],
                        Aringquoteright: [0, 0, 0, 0, -74, -74, -37, -111],
                        Atildep: [0, 0, 0, 0, -25],
                        Atildequoteright: [0, 0, 0, 0, -74, -74, -37, -111],
                        Je: [0, 0, 0, 0, -15, -40, -25],
                        Jeacute: [0, 0, 0, 0, -15, -40, -25],
                        Jecaron: [0, 0, 0, 0, -15, -40, -25],
                        Jecircumflex: [0, 0, 0, 0, -15, -40, -25],
                        Jedieresis: [0, 0, 0, 0, -15, -40, -25],
                        Jedotaccent: [0, 0, 0, 0, -15, -40, -25],
                        Jegrave: [0, 0, 0, 0, -15, -40, -25],
                        Jemacron: [0, 0, 0, 0, -15, -40, -25],
                        Jeogonek: [0, 0, 0, 0, -15, -40, -25],
                        Jo: [0, 0, 0, 0, -15, -40, -25],
                        Joacute: [0, 0, 0, 0, -15, -40, -25],
                        Jocircumflex: [0, 0, 0, 0, -15, -40, -25],
                        Jodieresis: [0, 0, 0, 0, -15, -40, -25],
                        Jograve: [0, 0, 0, 0, -15, -40, -25],
                        Johungarumlaut: [0, 0, 0, 0, -15, -40, -25],
                        Jomacron: [0, 0, 0, 0, -15, -40, -25],
                        Joslash: [0, 0, 0, 0, -15, -40, -25],
                        Jotilde: [0, 0, 0, 0, -15, -40, -25],
                        NA: [0, 0, 0, 0, -20, -30, -27, -35],
                        NAacute: [0, 0, 0, 0, -20, -30, -27, -35],
                        NAbreve: [0, 0, 0, 0, -20, -30, -27, -35],
                        NAcircumflex: [0, 0, 0, 0, -20, -30, -27, -35],
                        NAdieresis: [0, 0, 0, 0, -20, -30, -27, -35],
                        NAgrave: [0, 0, 0, 0, -20, -30, -27, -35],
                        NAmacron: [0, 0, 0, 0, -20, -30, -27, -35],
                        NAogonek: [0, 0, 0, 0, -20, -30, -27, -35],
                        NAring: [0, 0, 0, 0, -20, -30, -27, -35],
                        NAtilde: [0, 0, 0, 0, -20, -30, -27, -35],
                        NacuteA: [0, 0, 0, 0, -20, -30, -27, -35],
                        NacuteAacute: [0, 0, 0, 0, -20, -30, -27, -35],
                        NacuteAbreve: [0, 0, 0, 0, -20, -30, -27, -35],
                        NacuteAcircumflex: [0, 0, 0, 0, -20, -30, -27, -35],
                        NacuteAdieresis: [0, 0, 0, 0, -20, -30, -27, -35],
                        NacuteAgrave: [0, 0, 0, 0, -20, -30, -27, -35],
                        NacuteAmacron: [0, 0, 0, 0, -20, -30, -27, -35],
                        NacuteAogonek: [0, 0, 0, 0, -20, -30, -27, -35],
                        NacuteAring: [0, 0, 0, 0, -20, -30, -27, -35],
                        NacuteAtilde: [0, 0, 0, 0, -20, -30, -27, -35],
                        NcaronA: [0, 0, 0, 0, -20, -30, -27, -35],
                        NcaronAacute: [0, 0, 0, 0, -20, -30, -27, -35],
                        NcaronAbreve: [0, 0, 0, 0, -20, -30, -27, -35],
                        NcaronAcircumflex: [0, 0, 0, 0, -20, -30, -27, -35],
                        NcaronAdieresis: [0, 0, 0, 0, -20, -30, -27, -35],
                        NcaronAgrave: [0, 0, 0, 0, -20, -30, -27, -35],
                        NcaronAmacron: [0, 0, 0, 0, -20, -30, -27, -35],
                        NcaronAogonek: [0, 0, 0, 0, -20, -30, -27, -35],
                        NcaronAring: [0, 0, 0, 0, -20, -30, -27, -35],
                        NcaronAtilde: [0, 0, 0, 0, -20, -30, -27, -35],
                        NcommaaccentA: [0, 0, 0, 0, -20, -30, -27, -35],
                        NcommaaccentAacute: [0, 0, 0, 0, -20, -30, -27, -35],
                        NcommaaccentAbreve: [0, 0, 0, 0, -20, -30, -27, -35],
                        NcommaaccentAcircumflex: [0, 0, 0, 0, -20, -30, -27, -35],
                        NcommaaccentAdieresis: [0, 0, 0, 0, -20, -30, -27, -35],
                        NcommaaccentAgrave: [0, 0, 0, 0, -20, -30, -27, -35],
                        NcommaaccentAmacron: [0, 0, 0, 0, -20, -30, -27, -35],
                        NcommaaccentAogonek: [0, 0, 0, 0, -20, -30, -27, -35],
                        NcommaaccentAring: [0, 0, 0, 0, -20, -30, -27, -35],
                        NcommaaccentAtilde: [0, 0, 0, 0, -20, -30, -27, -35],
                        NtildeA: [0, 0, 0, 0, -20, -30, -27, -35],
                        NtildeAacute: [0, 0, 0, 0, -20, -30, -27, -35],
                        NtildeAbreve: [0, 0, 0, 0, -20, -30, -27, -35],
                        NtildeAcircumflex: [0, 0, 0, 0, -20, -30, -27, -35],
                        NtildeAdieresis: [0, 0, 0, 0, -20, -30, -27, -35],
                        NtildeAgrave: [0, 0, 0, 0, -20, -30, -27, -35],
                        NtildeAmacron: [0, 0, 0, 0, -20, -30, -27, -35],
                        NtildeAogonek: [0, 0, 0, 0, -20, -30, -27, -35],
                        NtildeAring: [0, 0, 0, 0, -20, -30, -27, -35],
                        NtildeAtilde: [0, 0, 0, 0, -20, -30, -27, -35],
                        Ti: [0, 0, 0, 0, -18, -37, -55, -35],
                        Tiacute: [0, 0, 0, 0, -18, -37, -55, -35],
                        Tiogonek: [0, 0, 0, 0, -18, -37, -55, -35],
                        Tcaroni: [0, 0, 0, 0, -18, -37, -55, -35],
                        Tcaroniacute: [0, 0, 0, 0, -18, -37, -55, -35],
                        Tcaroniogonek: [0, 0, 0, 0, -18, -37, -55, -35],
                        Tcommaaccenti: [0, 0, 0, 0, -18, -37, -55, -35],
                        Tcommaaccentiacute: [0, 0, 0, 0, -18, -37, -55, -35],
                        Tcommaaccentiogonek: [0, 0, 0, 0, -18, -37, -55, -35],
                        Vi: [0, 0, 0, 0, -37, -55, -74, -60],
                        Viacute: [0, 0, 0, 0, -37, -55, -74, -60],
                        Vicircumflex: [0, 0, 0, 0, -37, 0, -34, -20],
                        Vidieresis: [0, 0, 0, 0, -37, 0, -34, -20],
                        Vigrave: [0, 0, 0, 0, -37, 0, -34, -20],
                        Vimacron: [0, 0, 0, 0, -37, 0, -34, -20],
                        Viogonek: [0, 0, 0, 0, -37, -55, -74, -60],
                        Wi: [0, 0, 0, 0, -18, -37, -55, -40],
                        Wiacute: [0, 0, 0, 0, -18, -37, -55, -40],
                        Wiogonek: [0, 0, 0, 0, -18, -37, -55, -40],
                        fi: [0, 0, 0, 0, -25, 0, -20, -20],
                        gperiod: [0, 0, 0, 0, -15, 0, -15],
                        gbreveperiod: [0, 0, 0, 0, -15, 0, -15],
                        gcommaaccentperiod: [0, 0, 0, 0, -15, 0, -15],
                        iv: [0, 0, 0, 0, -10, 0, 0, -25],
                        iacutev: [0, 0, 0, 0, -10, 0, 0, -25],
                        icircumflexv: [0, 0, 0, 0, -10, 0, 0, -25],
                        idieresisv: [0, 0, 0, 0, -10, 0, 0, -25],
                        igravev: [0, 0, 0, 0, -10, 0, 0, -25],
                        imacronv: [0, 0, 0, 0, -10, 0, 0, -25],
                        iogonekv: [0, 0, 0, 0, -10, 0, 0, -25],
                        ky: [0, 0, 0, 0, -15, 0, -10, -15],
                        kyacute: [0, 0, 0, 0, -15, 0, -10, -15],
                        kydieresis: [0, 0, 0, 0, -15, 0, -10, -15],
                        kcommaaccenty: [0, 0, 0, 0, -15, 0, -10, -15],
                        kcommaaccentyacute: [0, 0, 0, 0, -15, 0, -10, -15],
                        kcommaaccentydieresis: [0, 0, 0, 0, -15, 0, -10, -15],
                        quotedblleftA: [0, 0, 0, 0, -10, 0, 0, -80],
                        quotedblleftAacute: [0, 0, 0, 0, -10, 0, 0, -80],
                        quotedblleftAbreve: [0, 0, 0, 0, -10, 0, 0, -80],
                        quotedblleftAcircumflex: [0, 0, 0, 0, -10, 0, 0, -80],
                        quotedblleftAdieresis: [0, 0, 0, 0, -10, 0, 0, -80],
                        quotedblleftAgrave: [0, 0, 0, 0, -10, 0, 0, -80],
                        quotedblleftAmacron: [0, 0, 0, 0, -10, 0, 0, -80],
                        quotedblleftAogonek: [0, 0, 0, 0, -10, 0, 0, -80],
                        quotedblleftAring: [0, 0, 0, 0, -10, 0, 0, -80],
                        quotedblleftAtilde: [0, 0, 0, 0, -10, 0, 0, -80],
                        quoteleftA: [0, 0, 0, 0, -10, 0, 0, -80],
                        quoteleftAacute: [0, 0, 0, 0, -10, 0, 0, -80],
                        quoteleftAbreve: [0, 0, 0, 0, -10, 0, 0, -80],
                        quoteleftAcircumflex: [0, 0, 0, 0, -10, 0, 0, -80],
                        quoteleftAdieresis: [0, 0, 0, 0, -10, 0, 0, -80],
                        quoteleftAgrave: [0, 0, 0, 0, -10, 0, 0, -80],
                        quoteleftAmacron: [0, 0, 0, 0, -10, 0, 0, -80],
                        quoteleftAogonek: [0, 0, 0, 0, -10, 0, 0, -80],
                        quoteleftAring: [0, 0, 0, 0, -10, 0, 0, -80],
                        quoteleftAtilde: [0, 0, 0, 0, -10, 0, 0, -80],
                        re: [0, 0, 0, 0, -18, 0, -37],
                        reacute: [0, 0, 0, 0, -18, 0, -37],
                        recaron: [0, 0, 0, 0, -18, 0, -37],
                        recircumflex: [0, 0, 0, 0, -18, 0, -37],
                        redieresis: [0, 0, 0, 0, -18, 0, -37],
                        redotaccent: [0, 0, 0, 0, -18, 0, -37],
                        regrave: [0, 0, 0, 0, -18, 0, -37],
                        remacron: [0, 0, 0, 0, -18, 0, -37],
                        reogonek: [0, 0, 0, 0, -18, 0, -37],
                        racutee: [0, 0, 0, 0, -18, 0, -37],
                        racuteeacute: [0, 0, 0, 0, -18, 0, -37],
                        racuteecaron: [0, 0, 0, 0, -18, 0, -37],
                        racuteecircumflex: [0, 0, 0, 0, -18, 0, -37],
                        racuteedieresis: [0, 0, 0, 0, -18, 0, -37],
                        racuteedotaccent: [0, 0, 0, 0, -18, 0, -37],
                        racuteegrave: [0, 0, 0, 0, -18, 0, -37],
                        racuteemacron: [0, 0, 0, 0, -18, 0, -37],
                        racuteeogonek: [0, 0, 0, 0, -18, 0, -37],
                        rcarone: [0, 0, 0, 0, -18, 0, -37],
                        rcaroneacute: [0, 0, 0, 0, -18, 0, -37],
                        rcaronecaron: [0, 0, 0, 0, -18, 0, -37],
                        rcaronecircumflex: [0, 0, 0, 0, -18, 0, -37],
                        rcaronedieresis: [0, 0, 0, 0, -18, 0, -37],
                        rcaronedotaccent: [0, 0, 0, 0, -18, 0, -37],
                        rcaronegrave: [0, 0, 0, 0, -18, 0, -37],
                        rcaronemacron: [0, 0, 0, 0, -18, 0, -37],
                        rcaroneogonek: [0, 0, 0, 0, -18, 0, -37],
                        rcommaaccente: [0, 0, 0, 0, -18, 0, -37],
                        rcommaaccenteacute: [0, 0, 0, 0, -18, 0, -37],
                        rcommaaccentecaron: [0, 0, 0, 0, -18, 0, -37],
                        rcommaaccentecircumflex: [0, 0, 0, 0, -18, 0, -37],
                        rcommaaccentedieresis: [0, 0, 0, 0, -18, 0, -37],
                        rcommaaccentedotaccent: [0, 0, 0, 0, -18, 0, -37],
                        rcommaaccentegrave: [0, 0, 0, 0, -18, 0, -37],
                        rcommaaccentemacron: [0, 0, 0, 0, -18, 0, -37],
                        rcommaaccenteogonek: [0, 0, 0, 0, -18, 0, -37],
                        spaceA: [0, 0, 0, 0, -55, -37, -18, -55],
                        spaceAacute: [0, 0, 0, 0, -55, -37, -18, -55],
                        spaceAbreve: [0, 0, 0, 0, -55, -37, -18, -55],
                        spaceAcircumflex: [0, 0, 0, 0, -55, -37, -18, -55],
                        spaceAdieresis: [0, 0, 0, 0, -55, -37, -18, -55],
                        spaceAgrave: [0, 0, 0, 0, -55, -37, -18, -55],
                        spaceAmacron: [0, 0, 0, 0, -55, -37, -18, -55],
                        spaceAogonek: [0, 0, 0, 0, -55, -37, -18, -55],
                        spaceAring: [0, 0, 0, 0, -55, -37, -18, -55],
                        spaceAtilde: [0, 0, 0, 0, -55, -37, -18, -55],
                        Fi: [0, 0, 0, 0, 0, -40, -45],
                        Fiacute: [0, 0, 0, 0, 0, -40, -45],
                        Ficircumflex: [0, 0, 0, 0, 0, -40, -45],
                        Fidieresis: [0, 0, 0, 0, 0, -40, -45],
                        Figrave: [0, 0, 0, 0, 0, -40, -45],
                        Fimacron: [0, 0, 0, 0, 0, -40, -45],
                        Fiogonek: [0, 0, 0, 0, 0, -40, -45],
                        eb: [0, 0, 0, 0, 0, -10],
                        eacuteb: [0, 0, 0, 0, 0, -10],
                        ecaronb: [0, 0, 0, 0, 0, -10],
                        ecircumflexb: [0, 0, 0, 0, 0, -10],
                        edieresisb: [0, 0, 0, 0, 0, -10],
                        edotaccentb: [0, 0, 0, 0, 0, -10],
                        egraveb: [0, 0, 0, 0, 0, -10],
                        emacronb: [0, 0, 0, 0, 0, -10],
                        eogonekb: [0, 0, 0, 0, 0, -10],
                        ff: [0, 0, 0, 0, 0, -18, -18, -25],
                        quoterightt: [0, 0, 0, 0, 0, -37, -30, -18],
                        quoterighttcommaaccent: [0, 0, 0, 0, 0, -37, -30, -18],
                        Yicircumflex: [0, 0, 0, 0, 0, 0, -34],
                        Yidieresis: [0, 0, 0, 0, 0, 0, -34],
                        Yigrave: [0, 0, 0, 0, 0, 0, -34],
                        Yimacron: [0, 0, 0, 0, 0, 0, -34],
                        Yacuteicircumflex: [0, 0, 0, 0, 0, 0, -34],
                        Yacuteidieresis: [0, 0, 0, 0, 0, 0, -34],
                        Yacuteigrave: [0, 0, 0, 0, 0, 0, -34],
                        Yacuteimacron: [0, 0, 0, 0, 0, 0, -34],
                        Ydieresisicircumflex: [0, 0, 0, 0, 0, 0, -34],
                        Ydieresisidieresis: [0, 0, 0, 0, 0, 0, -34],
                        Ydieresisigrave: [0, 0, 0, 0, 0, 0, -34],
                        Ydieresisimacron: [0, 0, 0, 0, 0, 0, -34],
                        eg: [0, 0, 0, 0, 0, 0, -40, -15],
                        egbreve: [0, 0, 0, 0, 0, 0, -40, -15],
                        egcommaaccent: [0, 0, 0, 0, 0, 0, -40, -15],
                        eacuteg: [0, 0, 0, 0, 0, 0, -40, -15],
                        eacutegbreve: [0, 0, 0, 0, 0, 0, -40, -15],
                        eacutegcommaaccent: [0, 0, 0, 0, 0, 0, -40, -15],
                        ecarong: [0, 0, 0, 0, 0, 0, -40, -15],
                        ecarongbreve: [0, 0, 0, 0, 0, 0, -40, -15],
                        ecarongcommaaccent: [0, 0, 0, 0, 0, 0, -40, -15],
                        ecircumflexg: [0, 0, 0, 0, 0, 0, -40, -15],
                        ecircumflexgbreve: [0, 0, 0, 0, 0, 0, -40, -15],
                        ecircumflexgcommaaccent: [0, 0, 0, 0, 0, 0, -40, -15],
                        edieresisg: [0, 0, 0, 0, 0, 0, -40, -15],
                        edieresisgbreve: [0, 0, 0, 0, 0, 0, -40, -15],
                        edieresisgcommaaccent: [0, 0, 0, 0, 0, 0, -40, -15],
                        edotaccentg: [0, 0, 0, 0, 0, 0, -40, -15],
                        edotaccentgbreve: [0, 0, 0, 0, 0, 0, -40, -15],
                        edotaccentgcommaaccent: [0, 0, 0, 0, 0, 0, -40, -15],
                        egraveg: [0, 0, 0, 0, 0, 0, -40, -15],
                        egravegbreve: [0, 0, 0, 0, 0, 0, -40, -15],
                        egravegcommaaccent: [0, 0, 0, 0, 0, 0, -40, -15],
                        emacrong: [0, 0, 0, 0, 0, 0, -40, -15],
                        emacrongbreve: [0, 0, 0, 0, 0, 0, -40, -15],
                        emacrongcommaaccent: [0, 0, 0, 0, 0, 0, -40, -15],
                        eogonekg: [0, 0, 0, 0, 0, 0, -40, -15],
                        eogonekgbreve: [0, 0, 0, 0, 0, 0, -40, -15],
                        eogonekgcommaaccent: [0, 0, 0, 0, 0, 0, -40, -15],
                        fiogonek: [0, 0, 0, 0, 0, 0, -20],
                        gcomma: [0, 0, 0, 0, 0, 0, -10],
                        gbrevecomma: [0, 0, 0, 0, 0, 0, -10],
                        gcommaaccentcomma: [0, 0, 0, 0, 0, 0, -10],
                        og: [0, 0, 0, 0, 0, 0, -10],
                        ogbreve: [0, 0, 0, 0, 0, 0, -10],
                        ogcommaaccent: [0, 0, 0, 0, 0, 0, -10],
                        oacuteg: [0, 0, 0, 0, 0, 0, -10],
                        oacutegbreve: [0, 0, 0, 0, 0, 0, -10],
                        oacutegcommaaccent: [0, 0, 0, 0, 0, 0, -10],
                        ocircumflexg: [0, 0, 0, 0, 0, 0, -10],
                        ocircumflexgbreve: [0, 0, 0, 0, 0, 0, -10],
                        ocircumflexgcommaaccent: [0, 0, 0, 0, 0, 0, -10],
                        odieresisg: [0, 0, 0, 0, 0, 0, -10],
                        odieresisgbreve: [0, 0, 0, 0, 0, 0, -10],
                        odieresisgcommaaccent: [0, 0, 0, 0, 0, 0, -10],
                        ograveg: [0, 0, 0, 0, 0, 0, -10],
                        ogravegbreve: [0, 0, 0, 0, 0, 0, -10],
                        ogravegcommaaccent: [0, 0, 0, 0, 0, 0, -10],
                        ohungarumlautg: [0, 0, 0, 0, 0, 0, -10],
                        ohungarumlautgbreve: [0, 0, 0, 0, 0, 0, -10],
                        ohungarumlautgcommaaccent: [0, 0, 0, 0, 0, 0, -10],
                        omacrong: [0, 0, 0, 0, 0, 0, -10],
                        omacrongbreve: [0, 0, 0, 0, 0, 0, -10],
                        omacrongcommaaccent: [0, 0, 0, 0, 0, 0, -10],
                        otildeg: [0, 0, 0, 0, 0, 0, -10],
                        otildegbreve: [0, 0, 0, 0, 0, 0, -10],
                        otildegcommaaccent: [0, 0, 0, 0, 0, 0, -10],
                        fiacute: [0, 0, 0, 0, 0, 0, 0, -20],
                        ga: [0, 0, 0, 0, 0, 0, 0, -5],
                        gaacute: [0, 0, 0, 0, 0, 0, 0, -5],
                        gabreve: [0, 0, 0, 0, 0, 0, 0, -5],
                        gacircumflex: [0, 0, 0, 0, 0, 0, 0, -5],
                        gadieresis: [0, 0, 0, 0, 0, 0, 0, -5],
                        gagrave: [0, 0, 0, 0, 0, 0, 0, -5],
                        gamacron: [0, 0, 0, 0, 0, 0, 0, -5],
                        gaogonek: [0, 0, 0, 0, 0, 0, 0, -5],
                        garing: [0, 0, 0, 0, 0, 0, 0, -5],
                        gatilde: [0, 0, 0, 0, 0, 0, 0, -5],
                        gbrevea: [0, 0, 0, 0, 0, 0, 0, -5],
                        gbreveaacute: [0, 0, 0, 0, 0, 0, 0, -5],
                        gbreveabreve: [0, 0, 0, 0, 0, 0, 0, -5],
                        gbreveacircumflex: [0, 0, 0, 0, 0, 0, 0, -5],
                        gbreveadieresis: [0, 0, 0, 0, 0, 0, 0, -5],
                        gbreveagrave: [0, 0, 0, 0, 0, 0, 0, -5],
                        gbreveamacron: [0, 0, 0, 0, 0, 0, 0, -5],
                        gbreveaogonek: [0, 0, 0, 0, 0, 0, 0, -5],
                        gbrevearing: [0, 0, 0, 0, 0, 0, 0, -5],
                        gbreveatilde: [0, 0, 0, 0, 0, 0, 0, -5],
                        gcommaaccenta: [0, 0, 0, 0, 0, 0, 0, -5],
                        gcommaaccentaacute: [0, 0, 0, 0, 0, 0, 0, -5],
                        gcommaaccentabreve: [0, 0, 0, 0, 0, 0, 0, -5],
                        gcommaaccentacircumflex: [0, 0, 0, 0, 0, 0, 0, -5],
                        gcommaaccentadieresis: [0, 0, 0, 0, 0, 0, 0, -5],
                        gcommaaccentagrave: [0, 0, 0, 0, 0, 0, 0, -5],
                        gcommaaccentamacron: [0, 0, 0, 0, 0, 0, 0, -5],
                        gcommaaccentaogonek: [0, 0, 0, 0, 0, 0, 0, -5],
                        gcommaaccentaring: [0, 0, 0, 0, 0, 0, 0, -5],
                        gcommaaccentatilde: [0, 0, 0, 0, 0, 0, 0, -5]
                    }
                }),
                Mu = function() {
                    for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                    var n = Array.from(t).map((function(e) {
                        return ("0000" + e.toString(16)).slice(-4)
                    }));
                    return n.join("")
                },
                Bu = function() {
                    function e() {}
                    e.open = function(e, t, r, n) {
                        var i;
                        if ("string" === typeof t) {
                            if (Yu.isStandardFont(t)) return new Yu(e, t, n);
                            throw new Error("Can't open " + t + " in browser build")
                        }
                        if (t instanceof Uint8Array ? i = g.Ue(t, r) : t instanceof ArrayBuffer ? i = g.Ue(new Uint8Array(t), r) : "object" === typeof t && (i = t), null == i) throw new Error("Not a supported font format or standard PDF font.");
                        return new Wu(e, i, n)
                    };
                    var t = e.prototype;
                    return t.encode = function() {
                        throw new Error("Must be implemented by subclasses")
                    }, t.widthOfString = function() {
                        throw new Error("Must be implemented by subclasses")
                    }, t.ref = function() {
                        return null != this.dictionary ? this.dictionary : this.dictionary = this.document.ref()
                    }, t.finalize = function() {
                        if (!this.embedded && null != this.dictionary) return this.embed(), this.embedded = !0
                    }, t.embed = function() {
                        throw new Error("Must be implemented by subclasses")
                    }, t.lineHeight = function(e, t) {
                        null == t && (t = !1);
                        var r = t ? this.lineGap : 0;
                        return (this.ascender + r - this.descender) / 1e3 * e
                    }, e
                }(),
                Yu = function(e) {
                    return function(e) {
                        function t(t, r, n) {
                            var i;
                            return (i = e.call(this) || this).document = t, i.name = r, i.id = n, i.font = Lu.fromJson(ju[i.name]), i.ascender = i.font.ascender, i.descender = i.font.descender, i.bbox = i.font.bbox, i.lineGap = i.font.lineGap, i
                        }(0, n.Z)(t, e);
                        var r = t.prototype;
                        return r.embed = function() {
                            return this.dictionary.data = {
                                Type: "Font",
                                BaseFont: this.name,
                                Subtype: "Type1",
                                Encoding: "WinAnsiEncoding"
                            }, this.dictionary.end()
                        }, r.encode = function(e) {
                            for (var t = this.font.encodeText(e), r = this.font.glyphsForString("" + e), n = this.font.advancesForGlyphs(r), i = [], o = 0; o < r.length; o++) {
                                var a = r[o];
                                i.push({
                                    xAdvance: n[o],
                                    yAdvance: 0,
                                    xOffset: 0,
                                    yOffset: 0,
                                    advanceWidth: this.font.widthOfGlyph(a)
                                })
                            }
                            return [t, i]
                        }, r.encodeGlyphs = function(e) {
                            for (var t = [], r = 0, n = Array.from(e); r < n.length; r++) {
                                var i = n[r];
                                t.push(("00" + i.id.toString(16)).slice(-2))
                            }
                            return t
                        }, r.widthOfString = function(e, t) {
                            for (var r = this.font.glyphsForString("" + e), n = this.font.advancesForGlyphs(r), i = 0, o = 0, a = Array.from(n); o < a.length; o++) {
                                i += a[o]
                            }
                            return i * (t / 1e3)
                        }, t.isStandardFont = function(e) {
                            return e in ju
                        }, t
                    }(e)
                }(Bu),
                Wu = function(e) {
                    return function(e) {
                        function t(t, r, n) {
                            var i;
                            return (i = e.call(this) || this).document = t, i.font = r, i.id = n, i.subset = i.font.createSubset(), i.unicode = [
                                [0]
                            ], i.widths = [i.font.getGlyph(0).advanceWidth], i.name = i.font.postscriptName, i.scale = 1e3 / i.font.unitsPerEm, i.ascender = i.font.ascent * i.scale, i.descender = i.font.descent * i.scale, i.xHeight = i.font.xHeight * i.scale, i.capHeight = i.font.capHeight * i.scale, i.lineGap = i.font.lineGap * i.scale, i.bbox = i.font.bbox, i.layoutCache = Object.create(null), i
                        }(0, n.Z)(t, e);
                        var r = t.prototype;
                        return r.layoutRun = function(e, t) {
                            for (var r = this.font.layout(e, t), n = 0; n < r.positions.length; n++) {
                                var i = r.positions[n];
                                for (var o in i) i[o] *= this.scale;
                                i.advanceWidth = r.glyphs[n].advanceWidth * this.scale
                            }
                            return r
                        }, r.layoutCached = function(e) {
                            var t;
                            if (t = this.layoutCache[e]) return t;
                            var r = this.layoutRun(e);
                            return this.layoutCache[e] = r, r
                        }, r.layout = function(e, t, r) {
                            if (null == r && (r = !1), t) return this.layoutRun(e, t);
                            for (var n = r ? null : [], i = r ? null : [], o = 0, a = 0, c = 0; c <= e.length;) {
                                var s;
                                if (c === e.length && a < c || (s = e.charAt(c), [" ", "\t"].includes(s))) {
                                    var u = this.layoutCached(e.slice(a, ++c));
                                    r || (n.push.apply(n, Array.from(u.glyphs || [])), i.push.apply(i, Array.from(u.positions || []))), o += u.advanceWidth, a = c
                                } else c++
                            }
                            return {
                                glyphs: n,
                                positions: i,
                                advanceWidth: o
                            }
                        }, r.encode = function(e, t) {
                            for (var r = this.layout(e, t), n = r.glyphs, i = r.positions, o = [], a = 0; a < n.length; a++) {
                                var c = n[a],
                                    s = this.subset.includeGlyph(c.id);
                                o.push(("0000" + s.toString(16)).slice(-4)), null == this.widths[s] && (this.widths[s] = c.advanceWidth * this.scale), null == this.unicode[s] && (this.unicode[s] = this.font._cmapProcessor.codePointsForGlyph(c.id))
                            }
                            return [o, i]
                        }, r.encodeGlyphs = function(e) {
                            for (var t = [], r = 0; r < e.length; r++) {
                                var n = e[r],
                                    i = this.subset.includeGlyph(n.id);
                                t.push(("0000" + i.toString(16)).slice(-4)), null == this.widths[i] && (this.widths[i] = n.advanceWidth * this.scale), null == this.unicode[i] && (this.unicode[i] = this.font._cmapProcessor.codePointsForGlyph(n.id))
                            }
                            return t
                        }, r.widthOfString = function(e, t, r) {
                            return this.layout(e, r, !0).advanceWidth * (t / 1e3)
                        }, r.embed = function() {
                            var e = null != this.subset.cff,
                                t = this.document.ref();
                            e && (t.data.Subtype = "CIDFontType0C"), t.end(this.subset.encode());
                            var r = ((null != this.font["OS/2"] ? this.font["OS/2"].sFamilyClass : void 0) || 0) >> 8,
                                n = 0;
                            this.font.post.isFixedPitch && (n |= 1), 1 <= r && r <= 7 && (n |= 2), n |= 4, 10 === r && (n |= 8), this.font.head.macStyle.italic && (n |= 64);
                            var i = [0, 1, 2, 3, 4, 5].map((function(e) {
                                    return String.fromCharCode(26 * Math.random() + 65)
                                })).join("") + "+" + this.font.postscriptName,
                                o = this.font.bbox,
                                a = this.document.ref({
                                    Type: "FontDescriptor",
                                    FontName: i,
                                    Flags: n,
                                    FontBBox: [o.minX * this.scale, o.minY * this.scale, o.maxX * this.scale, o.maxY * this.scale],
                                    ItalicAngle: this.font.italicAngle,
                                    Ascent: this.ascender,
                                    Descent: this.descender,
                                    CapHeight: (this.font.capHeight || this.font.ascent) * this.scale,
                                    XHeight: (this.font.xHeight || 0) * this.scale,
                                    StemV: 0
                                });
                            e ? a.data.FontFile3 = t : a.data.FontFile2 = t, a.end();
                            var c = this.document.ref({
                                Type: "Font",
                                Subtype: e ? "CIDFontType0" : "CIDFontType2",
                                BaseFont: i,
                                CIDSystemInfo: {
                                    Registry: new String("Adobe"),
                                    Ordering: new String("Identity"),
                                    Supplement: 0
                                },
                                FontDescriptor: a,
                                W: [0, this.widths]
                            });
                            return c.end(), this.dictionary.data = {
                                Type: "Font",
                                Subtype: "Type0",
                                BaseFont: i,
                                Encoding: "Identity-H",
                                DescendantFonts: [c],
                                ToUnicode: this.toUnicodeCmap()
                            }, this.dictionary.end()
                        }, r.toUnicodeCmap = function() {
                            for (var e = this.document.ref(), t = [], r = 0, n = Array.from(this.unicode); r < n.length; r++)
                                for (var i = n[r], o = [], a = 0, c = Array.from(i); a < c.length; a++) {
                                    var s = c[a];
                                    s > 65535 && (s -= 65536, o.push(Mu(s >>> 10 & 1023 | 55296)), s = 56320 | 1023 & s), o.push(Mu(s)), t.push("<" + o.join(" ") + ">")
                                }
                            return e.end("  /CIDInit /ProcSet findresource begin\n  12 dict begin\n  begincmap\n  /CIDSystemInfo <<\n  /Registry (Adobe)\n  /Ordering (UCS)\n  /Supplement 0\n  >> def\n  /CMapName /Adobe-Identity-UCS def\n  /CMapType 2 def\n  1 begincodespacerange\n  <0000><ffff>\n  endcodespacerange\n  1 beginbfrange\n  <0000> <" + Mu(t.length - 1) + "> [" + t.join(" ") + "]\n  endbfrange\n  endcmap\n  CMapName currentdict /CMap defineresource pop\n  end\n  end  "), e
                        }, t
                    }(e)
                }(Bu),
                qu = {
                    initFonts: function() {
                        return this._fontFamilies = {}, this._fontCount = 0, this._fontSize = 12, this._font = null, this._registeredFonts = {}, this.font("Helvetica")
                    },
                    font: function(e, t, r) {
                        var n, i;
                        if ("number" === typeof t && (r = t, t = null), "string" === typeof e && this._registeredFonts[e]) {
                            n = e;
                            var o = this._registeredFonts[e];
                            e = o.src, t = o.family
                        } else "string" !== typeof(n = t || e) && (n = null);
                        if (null != r && this.fontSize(r), i = this._fontFamilies[n]) return this._font = i, this;
                        var a = "F" + ++this._fontCount;
                        return this._font = Bu.open(this, e, t, a), (i = this._fontFamilies[this._font.name]) ? (this._font = i, this) : (n && (this._fontFamilies[n] = this._font), this._font.name && (this._fontFamilies[this._font.name] = this._font), this)
                    },
                    fontSize: function(e) {
                        return this._fontSize = e, this
                    },
                    currentLineHeight: function(e) {
                        return null == e && (e = !1), this._font.lineHeight(this._fontSize, e)
                    },
                    registerFont: function(e, t, r) {
                        return this._registeredFonts[e] = {
                            src: t,
                            family: r
                        }, this
                    }
                },
                zu = au.number,
                Vu = {
                    initText: function() {
                        return this._line = this._line.bind(this), this.x = 0, this.y = 0, this._lineGap = 0
                    },
                    _text: function(e, t, r, n, i) {
                        var o = this;
                        e = null == e ? "" : "" + e, (n = this._initOptions(t, r, n)).wordSpacing && (e = e.replace(/\s{2,}/g, " "));
                        for (var a, c = (0, f.Z)(e.split("\n")); !(a = c()).done;) {
                            var s = a.value;
                            n.structParent && n.structParent.add(o.struct(n.structType || "P", [o.markStructureContent(n.structType || "P")])), i(s, n)
                        }
                        return this
                    },
                    text: function(e, t, r, n) {
                        return this._text(e, t, r, n, this._line)
                    },
                    widthOfString: function(e, t) {
                        return void 0 === t && (t = {}), this._font.widthOfString(e, this._fontSize, t.features) + (t.characterSpacing || 0) * (e.length - 1)
                    },
                    _initOptions: function(e, t, r) {
                        void 0 === e && (e = {}), void 0 === r && (r = {}), "object" === typeof e && (r = e, e = null);
                        var n = Object.assign({}, r);
                        if (this._textOptions)
                            for (var i in this._textOptions) {
                                var o = this._textOptions[i];
                                "continued" !== i && void 0 === n[i] && (n[i] = o)
                            }
                        return null != e && (this.x = e), null != t && (this.y = t), !1 !== n.lineBreak && (null == n.width && (n.width = this.page.width - this.x - this.page.margins.right), n.width = Math.max(n.width, 0)), n.columns || (n.columns = 0), null == n.columnGap && (n.columnGap = 18), n
                    },
                    _line: function(e, t) {
                        return void 0 === t && (t = {}), this._fragment(e, this.x, this.y, t), this.x += this.widthOfString(e)
                    },
                    _fragment: function(e, t, r, n) {
                        if (0 !== (e = ("" + e).replace(/\n/g, "")).length) {
                            var i = this._font.encode(e, n.features),
                                o = i[0],
                                a = i[1],
                                c = this._font.ascender / 1e3 * this._fontSize;
                            this._glyphs(o, a, t, r + c, n)
                        }
                    },
                    _glyphs: function(e, t, r, n, i) {
                        var o, a = this,
                            c = [],
                            s = this._fontSize / 1e3,
                            u = 0,
                            l = !1;
                        this.save(), this.transform(1, 0, 0, -1, 0, this.page.height), n = this.page.height - n, null == this.page.fonts[this._font.id] && (this.page.fonts[this._font.id] = this._font.ref()), this.addContent("BT"), this.addContent("1 0 0 1 " + zu(r) + " " + zu(n) + " Tm"), this.addContent("/" + this._font.id + " " + zu(this._fontSize) + " Tf");
                        var f = i.fill && i.stroke ? 2 : i.stroke ? 1 : 0;
                        f && this.addContent(f + " Tr");
                        var h = function(r) {
                                if (u < r) {
                                    var n = e.slice(u, r).join(""),
                                        i = t[r - 1].xAdvance - t[r - 1].advanceWidth;
                                    c.push("<" + n + "> " + zu(-i))
                                }
                                return u = r
                            },
                            d = function(e) {
                                if (h(e), c.length > 0) return a.addContent("[" + c.join(" ") + "] TJ"), c.length = 0
                            };
                        for (o = 0; o < t.length; o++) {
                            var m = t[o];
                            m.xOffset || m.yOffset ? (d(o), this.addContent("1 0 0 1 " + zu(r + m.xOffset * s) + " " + zu(n + m.yOffset * s) + " Tm"), d(o + 1), l = !0) : (l && (this.addContent("1 0 0 1 " + zu(r) + " " + zu(n) + " Tm"), l = !1), m.xAdvance - m.advanceWidth !== 0 && h(o + 1)), r += m.xAdvance * s
                        }
                        return d(o), this.addContent("ET"), this.restore()
                    }
                },
                Gu = [65472, 65473, 65474, 65475, 65477, 65478, 65479, 65480, 65481, 65482, 65483, 65484, 65485, 65486, 65487],
                Zu = function() {
                    function e(e, t) {
                        var r;
                        if (this.data = e, this.label = t, 65496 !== this.data.readUInt16BE(0)) throw "SOI not found in JPEG";
                        for (var n = 2; n < this.data.length && (r = this.data.readUInt16BE(n), n += 2, !Array.from(Gu).includes(r));) n += this.data.readUInt16BE(n);
                        if (!Array.from(Gu).includes(r)) throw "Invalid JPEG.";
                        n += 2, this.bits = this.data[n++], this.height = this.data.readUInt16BE(n), n += 2, this.width = this.data.readUInt16BE(n), n += 2;
                        var i = this.data[n++];
                        this.colorSpace = function() {
                            switch (i) {
                                case 1:
                                    return "DeviceGray";
                                case 3:
                                    return "DeviceRGB";
                                case 4:
                                    return "DeviceCMYK"
                            }
                        }(), this.obj = null
                    }
                    return e.prototype.embed = function(e) {
                        this.obj || (this.obj = e.ref({
                            Type: "XObject",
                            Subtype: "Image",
                            BitsPerComponent: this.bits,
                            Width: this.width,
                            Height: this.height,
                            ColorSpace: this.colorSpace,
                            Filter: "DCTDecode"
                        }), "DeviceCMYK" === this.colorSpace && (this.obj.data.Decode = [1, 0, 1, 0, 1, 0, 1, 0]), this.obj.end(this.data), this.data = null)
                    }, e
                }(),
                Ku = function() {
                    function e(e, t) {
                        this.label = t, this.image = new p.Z(e), this.width = this.image.width, this.height = this.image.height, this.imgData = this.image.imgData, this.obj = null
                    }
                    var t = e.prototype;
                    return t.embed = function(e) {
                        var t = !1;
                        if (this.document = e, !this.obj) {
                            var r = this.image.hasAlphaChannel,
                                n = 1 === this.image.interlaceMethod;
                            if (this.obj = this.document.ref({
                                    Type: "XObject",
                                    Subtype: "Image",
                                    BitsPerComponent: r ? 8 : this.image.bits,
                                    Width: this.width,
                                    Height: this.height,
                                    Filter: "FlateDecode"
                                }), !r) {
                                var i = this.document.ref({
                                    Predictor: n ? 1 : 15,
                                    Colors: this.image.colors,
                                    BitsPerComponent: this.image.bits,
                                    Columns: this.width
                                });
                                this.obj.data.DecodeParms = i, i.end()
                            }
                            if (0 === this.image.palette.length) this.obj.data.ColorSpace = this.image.colorSpace;
                            else {
                                var o = this.document.ref();
                                o.end(F.from(this.image.palette)), this.obj.data.ColorSpace = ["Indexed", "DeviceRGB", this.image.palette.length / 3 - 1, o]
                            }
                            if (null != this.image.transparency.grayscale) {
                                var a = this.image.transparency.grayscale;
                                this.obj.data.Mask = [a, a]
                            } else if (this.image.transparency.rgb) {
                                for (var c, s = this.image.transparency.rgb, u = [], l = (0, f.Z)(s); !(c = l()).done;) {
                                    var h = c.value;
                                    u.push(h, h)
                                }
                                this.obj.data.Mask = u
                            } else {
                                if (this.image.transparency.indexed) return t = !0, this.loadIndexedAlphaChannel();
                                if (r) return t = !0, this.splitAlphaChannel()
                            }
                            if (n && !t) return this.decodeData();
                            this.finalize()
                        }
                    }, t.finalize = function() {
                        if (this.alphaChannel) {
                            var e = this.document.ref({
                                Type: "XObject",
                                Subtype: "Image",
                                Height: this.height,
                                Width: this.width,
                                BitsPerComponent: 8,
                                Filter: "FlateDecode",
                                ColorSpace: "DeviceGray",
                                Decode: [0, 1]
                            });
                            e.end(this.alphaChannel), this.obj.data.SMask = e
                        }
                        this.obj.end(this.imgData), this.image = null, this.imgData = null
                    }, t.splitAlphaChannel = function() {
                        var e = this;
                        return this.image.decodePixels((function(t) {
                            for (var r, n, i = e.image.colors, o = e.width * e.height, a = F.alloc(o * i), c = F.alloc(o), s = n = r = 0, u = t.length, l = 16 === e.image.bits ? 1 : 0; s < u;) {
                                for (var f = 0; f < i; f++) a[n++] = t[s++], s += l;
                                c[r++] = t[s++], s += l
                            }
                            return e.imgData = fi.deflateSync(a), e.alphaChannel = fi.deflateSync(c), e.finalize()
                        }))
                    }, t.loadIndexedAlphaChannel = function() {
                        var e = this,
                            t = this.image.transparency.indexed;
                        return this.image.decodePixels((function(r) {
                            for (var n = F.alloc(e.width * e.height), i = 0, o = 0, a = r.length; o < a; o++) n[i++] = t[r[o]];
                            return e.alphaChannel = fi.deflateSync(n), e.finalize()
                        }))
                    }, t.decodeData = function() {
                        var e = this;
                        this.image.decodePixels((function(t) {
                            e.imgData = fi.deflateSync(t), e.finalize()
                        }))
                    }, e
                }(),
                Hu = function() {
                    function e() {}
                    return e.open = function(e, t) {
                        var r;
                        if (F.isBuffer(e)) r = e;
                        else if (e instanceof ArrayBuffer) r = F.from(new Uint8Array(e));
                        else {
                            var n = /^data:.+;base64,(.*)$/.exec(e);
                            n && (r = F.from(n[1], "base64"))
                        }
                        if (255 === r[0] && 216 === r[1]) return new Zu(r, t);
                        if (137 === r[0] && "PNG" === r.toString("ascii", 1, 4)) return new Ku(r, t);
                        throw new Error("Unknown image format.")
                    }, e
                }(),
                Ju = {
                    initImages: function() {
                        this._imageRegistry = {}, this._imageCount = 0
                    },
                    embedImage: function(e) {
                        var t;
                        return "string" === typeof e && (t = this._imageRegistry[e]), t || (t = e.width && e.height ? e : this.openImage(e)), t.obj || t.embed(this), t
                    },
                    image: function(e, t, r, n) {
                        var i, o, a, c, s, u;
                        void 0 === n && (n = {}), "object" === typeof t && (n = t, t = null);
                        var l = e instanceof Hu ? e : this.embedImage(e);
                        t = null != (s = null != t ? t : n.x) ? s : this.x, r = null != (u = null != r ? r : n.y) ? u : this.y, null == this.page.xobjects[l.label] && (this.page.xobjects[l.label] = l.obj);
                        var f = n.width || l.width,
                            h = n.height || l.height;
                        if (n.width && !n.height) {
                            var d = f / l.width;
                            f = l.width * d, h = l.height * d
                        } else if (n.height && !n.width) {
                            var m = h / l.height;
                            f = l.width * m, h = l.height * m
                        } else if (n.scale) f = l.width * n.scale, h = l.height * n.scale;
                        else if (n.fit) {
                            var g = Array.from(n.fit);
                            o = (a = g[0]) / (i = g[1]), (c = l.width / l.height) > o ? (f = a, h = a / c) : (h = i, f = i * c)
                        }
                        return this.y === r && (this.y += h), this.save(), this.transform(f, 0, 0, -h, t, r + h), this.addContent("/" + l.label + " Do"), this.restore(), this
                    },
                    openImage: function(e) {
                        var t;
                        return "string" === typeof e && (t = this._imageRegistry[e]), t || (t = Hu.open(e, "I" + ++this._imageCount), "string" === typeof e && (this._imageRegistry[e] = t)), t
                    }
                },
                Xu = {
                    annotate: function(e, t, r, n, i) {
                        for (var o in i.Type = "Annot", i.Rect = this._convertRect(e, t, r, n), i.Border = [0, 0, 0], "Link" === i.Subtype && "undefined" === typeof i.F && (i.F = 4), "Link" !== i.Subtype && null == i.C && (i.C = this._normalizeColor(i.color || [0, 0, 0])), delete i.color, "string" === typeof i.Dest && (i.Dest = new String(i.Dest)), i) {
                            var a = i[o];
                            i[o[0].toUpperCase() + o.slice(1)] = a
                        }
                        var c = this.ref(i);
                        return this.page.annotations.push(c), c.end(), this
                    },
                    note: function(e, t, r, n, i, o) {
                        return void 0 === o && (o = {}), o.Subtype = "Text", o.Contents = new String(i), o.Name = "Comment", null == o.color && (o.color = [243, 223, 92]), o.Border = [0, 0, o.borderWidth || 0], delete o.borderWidth, this.annotate(e, t, r, n, o)
                    },
                    goTo: function(e, t, r, n, i, o) {
                        return void 0 === o && (o = {}), o.Subtype = "Link", o.A = this.ref({
                            S: "GoTo",
                            D: new String(i)
                        }), o.A.end(), this.annotate(e, t, r, n, o)
                    },
                    link: function(e, t, r, n, i, o) {
                        if (void 0 === o && (o = {}), o.Subtype = "Link", "number" === typeof i) {
                            var a = this._root.data.Pages.data;
                            if (!(i >= 0 && i < a.Kids.length)) throw new Error("The document has no page " + i);
                            o.A = this.ref({
                                S: "GoTo",
                                D: [a.Kids[i], "XYZ", null, null, null]
                            }), o.A.end()
                        } else o.A = this.ref({
                            S: "URI",
                            URI: new String(i)
                        }), o.A.end();
                        return this.annotate(e, t, r, n, o)
                    },
                    _markup: function(e, t, r, n, i) {
                        void 0 === i && (i = {});
                        var o = this._convertRect(e, t, r, n),
                            a = o[0],
                            c = o[1],
                            s = o[2],
                            u = o[3];
                        return i.QuadPoints = [a, u, s, u, a, c, s, c], i.Contents = new String, this.annotate(e, t, r, n, i)
                    },
                    highlight: function(e, t, r, n, i) {
                        return void 0 === i && (i = {}), i.Subtype = "Highlight", null == i.color && (i.color = [241, 238, 148]), this._markup(e, t, r, n, i)
                    },
                    fileAnnotation: function(e, t, r, n, i, o) {
                        void 0 === i && (i = {}), void 0 === o && (o = {});
                        var a = this.file(i.src, Object.assign({
                            hidden: !0
                        }, i));
                        return o.Subtype = "FileAttachment", o.FS = a, o.Contents ? o.Contents = new String(o.Contents) : a.data.Desc && (o.Contents = a.data.Desc), this.annotate(e, t, r, n, o)
                    },
                    _convertRect: function(e, t, r, n) {
                        var i = t;
                        t += n;
                        var o = e + r,
                            a = this._ctm,
                            c = a[0],
                            s = a[1],
                            u = a[2],
                            l = a[3],
                            f = a[4],
                            h = a[5];
                        return [e = c * e + u * t + f, t = s * e + l * t + h, o = c * o + u * i + f, i = s * o + l * i + h]
                    }
                },
                $u = {
                    top: 0,
                    left: 0,
                    zoom: 0,
                    fit: !1,
                    pageNumber: null,
                    expanded: !1
                },
                Qu = function() {
                    function e(e, t, r, n, i) {
                        if (void 0 === i && (i = $u), this.document = e, this.options = i, this.outlineData = {}, null !== n) {
                            var o = n.data.MediaBox[2],
                                a = n.data.MediaBox[3] - (i.top || 0),
                                c = o - (i.left || 0),
                                s = i.zoom || 0;
                            this.outlineData.Dest = i.fit ? [n, "Fit"] : [n, "XYZ", c, a, s]
                        }
                        null !== t && (this.outlineData.Parent = t), null !== r && (this.outlineData.Title = new String(r)), this.dictionary = this.document.ref(this.outlineData), this.children = []
                    }
                    var t = e.prototype;
                    return t.addItem = function(t, r) {
                        void 0 === r && (r = $u);
                        var n = this.document._root.data.Pages.data.Kids,
                            i = null !== r.pageNumber ? n[r.pageNumber] : this.document.page.dictionary,
                            o = new e(this.document, this.dictionary, t, i, r);
                        return this.children.push(o), o
                    }, t.endOutline = function() {
                        if (this.children.length > 0) {
                            this.options.expanded && (this.outlineData.Count = this.children.length);
                            var e = this.children[0],
                                t = this.children[this.children.length - 1];
                            this.outlineData.First = e.dictionary, this.outlineData.Last = t.dictionary;
                            for (var r = 0, n = this.children.length; r < n; r++) {
                                var i = this.children[r];
                                r > 0 && (i.outlineData.Prev = this.children[r - 1].dictionary), r < this.children.length - 1 && (i.outlineData.Next = this.children[r + 1].dictionary), i.endOutline()
                            }
                        }
                        return this.dictionary.end()
                    }, e
                }(),
                el = {
                    initOutline: function() {
                        this.outline = new Qu(this, null, null, null)
                    },
                    endOutline: function() {
                        this.outline.endOutline(), this.outline.children.length > 0 && (this._root.data.Outlines = this.outline.dictionary, this._root.data.PageMode = this._root.data.PageMode || "UseOutlines")
                    }
                },
                tl = {
                    readOnly: 1,
                    required: 2,
                    noExport: 4,
                    multiline: 4096,
                    password: 8192,
                    toggleToOffButton: 16384,
                    radioButton: 32768,
                    pushButton: 65536,
                    combo: 131072,
                    edit: 262144,
                    sort: 524288,
                    multiSelect: 2097152,
                    noSpell: 4194304
                },
                rl = {
                    left: 0,
                    center: 1,
                    right: 2
                },
                nl = {
                    value: "V",
                    defaultValue: "DV"
                },
                il = {
                    zip: "0",
                    zipPlus4: "1",
                    zip4: "1",
                    phone: "2",
                    ssn: "3"
                },
                ol = {
                    nDec: 0,
                    sepComma: !1,
                    negStyle: "MinusBlack",
                    currency: "",
                    currencyPrepend: !0
                },
                al = {
                    nDec: 0,
                    sepComma: !1
                },
                cl = {
                    initForm: function() {
                        if (!this._font) throw new Error("Must set a font before calling initForm method");
                        this._acroform = {
                            fonts: {},
                            defaultFont: this._font.name
                        }, this._acroform.fonts[this._font.id] = this._font.ref();
                        var e = {
                            Fields: [],
                            NeedAppearances: !0,
                            DA: new String("/" + this._font.id + " 0 Tf 0 g"),
                            DR: {
                                Font: {}
                            }
                        };
                        e.DR.Font[this._font.id] = this._font.ref();
                        var t = this.ref(e);
                        return this._root.data.AcroForm = t, this
                    },
                    endAcroForm: function() {
                        var e = this;
                        if (this._root.data.AcroForm) {
                            if (!Object.keys(this._acroform.fonts).length && !this._acroform.defaultFont) throw new Error("No fonts specified for PDF form");
                            var t = this._root.data.AcroForm.data.DR.Font;
                            Object.keys(this._acroform.fonts).forEach((function(r) {
                                t[r] = e._acroform.fonts[r]
                            })), this._root.data.AcroForm.data.Fields.forEach((function(t) {
                                e._endChild(t)
                            })), this._root.data.AcroForm.end()
                        }
                        return this
                    },
                    _endChild: function(e) {
                        var t = this;
                        return Array.isArray(e.data.Kids) && (e.data.Kids.forEach((function(e) {
                            t._endChild(e)
                        })), e.end()), this
                    },
                    formField: function(e, t) {
                        void 0 === t && (t = {});
                        var r = this._fieldDict(e, null, t),
                            n = this.ref(r);
                        return this._addToParent(n), n
                    },
                    formAnnotation: function(e, t, r, n, i, o, a) {
                        void 0 === a && (a = {});
                        var c = this._fieldDict(e, t, a);
                        c.Subtype = "Widget", void 0 === c.F && (c.F = 4), this.annotate(r, n, i, o, c);
                        var s = this.page.annotations[this.page.annotations.length - 1];
                        return this._addToParent(s)
                    },
                    formText: function(e, t, r, n, i, o) {
                        return void 0 === o && (o = {}), this.formAnnotation(e, "text", t, r, n, i, o)
                    },
                    formPushButton: function(e, t, r, n, i, o) {
                        return void 0 === o && (o = {}), this.formAnnotation(e, "pushButton", t, r, n, i, o)
                    },
                    formCombo: function(e, t, r, n, i, o) {
                        return void 0 === o && (o = {}), this.formAnnotation(e, "combo", t, r, n, i, o)
                    },
                    formList: function(e, t, r, n, i, o) {
                        return void 0 === o && (o = {}), this.formAnnotation(e, "list", t, r, n, i, o)
                    },
                    formRadioButton: function(e, t, r, n, i, o) {
                        return void 0 === o && (o = {}), this.formAnnotation(e, "radioButton", t, r, n, i, o)
                    },
                    formCheckbox: function(e, t, r, n, i, o) {
                        return void 0 === o && (o = {}), this.formAnnotation(e, "checkbox", t, r, n, i, o)
                    },
                    _addToParent: function(e) {
                        var t = e.data.Parent;
                        return t ? (t.data.Kids || (t.data.Kids = []), t.data.Kids.push(e)) : this._root.data.AcroForm.data.Fields.push(e), this
                    },
                    _fieldDict: function(e, t, r) {
                        if (void 0 === r && (r = {}), !this._acroform) throw new Error("Call document.initForms() method before adding form elements to document");
                        var n = Object.assign({}, r);
                        return null !== t && (n = this._resolveType(t, r)), n = this._resolveFlags(n), n = this._resolveJustify(n), n = this._resolveFont(n), n = this._resolveStrings(n), n = this._resolveColors(n), (n = this._resolveFormat(n)).T = new String(e), n.parent && (n.Parent = n.parent, delete n.parent), n
                    },
                    _resolveType: function(e, t) {
                        if ("text" === e) t.FT = "Tx";
                        else if ("pushButton" === e) t.FT = "Btn", t.pushButton = !0;
                        else if ("radioButton" === e) t.FT = "Btn", t.radioButton = !0;
                        else if ("checkbox" === e) t.FT = "Btn";
                        else if ("combo" === e) t.FT = "Ch", t.combo = !0;
                        else {
                            if ("list" !== e) throw new Error("Invalid form annotation type '" + e + "'");
                            t.FT = "Ch"
                        }
                        return t
                    },
                    _resolveFormat: function(e) {
                        var t = e.format;
                        if (t && t.type) {
                            var r, n, i = "";
                            if (void 0 !== il[t.type]) r = "AFSpecial_Keystroke", n = "AFSpecial_Format", i = il[t.type];
                            else {
                                var o = t.type.charAt(0).toUpperCase() + t.type.slice(1);
                                if (r = "AF" + o + "_Keystroke", n = "AF" + o + "_Format", "date" === t.type) r += "Ex", i = String(t.param);
                                else if ("time" === t.type) i = String(t.param);
                                else if ("number" === t.type) {
                                    var a = Object.assign({}, ol, t);
                                    i = String([String(a.nDec), a.sepComma ? "0" : "1", '"' + a.negStyle + '"', "null", '"' + a.currency + '"', String(a.currencyPrepend)].join(","))
                                } else if ("percent" === t.type) {
                                    var c = Object.assign({}, al, t);
                                    i = String([String(c.nDec), c.sepComma ? "0" : "1"].join(","))
                                }
                            }
                            e.AA = e.AA ? e.AA : {}, e.AA.K = {
                                S: "JavaScript",
                                JS: new String(r + "(" + i + ");")
                            }, e.AA.F = {
                                S: "JavaScript",
                                JS: new String(n + "(" + i + ");")
                            }
                        }
                        return delete e.format, e
                    },
                    _resolveColors: function(e) {
                        var t = this._normalizeColor(e.backgroundColor);
                        return t && (e.MK || (e.MK = {}), e.MK.BG = t), (t = this._normalizeColor(e.borderColor)) && (e.MK || (e.MK = {}), e.MK.BC = t), delete e.backgroundColor, delete e.borderColor, e
                    },
                    _resolveFlags: function(e) {
                        var t = 0;
                        return Object.keys(e).forEach((function(r) {
                            tl[r] && (t |= tl[r], delete e[r])
                        })), 0 !== t && (e.Ff = e.Ff ? e.Ff : 0, e.Ff |= t), e
                    },
                    _resolveJustify: function(e) {
                        var t = 0;
                        return void 0 !== e.align && ("number" === typeof rl[e.align] && (t = rl[e.align]), delete e.align), 0 !== t && (e.Q = t), e
                    },
                    _resolveFont: function(e) {
                        if (null === this._acroform.fonts[this._font.id] && (this._acroform.fonts[this._font.id] = this._font.ref()), this._acroform.defaultFont !== this._font.name) {
                            e.DR = {
                                Font: {}
                            };
                            var t = e.fontSize || 0;
                            e.DR.Font[this._font.id] = this._font.ref(), e.DA = new String("/" + this._font.id + " " + t + " Tf 0 g")
                        }
                        return e
                    },
                    _resolveStrings: function(e) {
                        var t = [];

                        function r(e) {
                            if (Array.isArray(e))
                                for (var r = 0; r < e.length; r++) "string" === typeof e[r] ? t.push(new String(e[r])) : t.push(e[r])
                        }
                        return r(e.Opt), e.select && (r(e.select), delete e.select), t.length && (e.Opt = t), Object.keys(nl).forEach((function(t) {
                            void 0 !== e[t] && (e[nl[t]] = e[t], delete e[t])
                        })), ["V", "DV"].forEach((function(t) {
                            "string" === typeof e[t] && (e[t] = new String(e[t]))
                        })), e.MK && e.MK.CA && (e.MK.CA = new String(e.MK.CA)), e.label && (e.MK = e.MK ? e.MK : {}, e.MK.CA = new String(e.label), delete e.label), e
                    }
                },
                sl = {
                    file: function(e, t) {
                        void 0 === t && (t = {}), t.name = t.name || e;
                        var r, n = {
                            Type: "EmbeddedFile",
                            Params: {}
                        };
                        if (!e) throw new Error("No src specified");
                        if (F.isBuffer(e)) r = e;
                        else if (e instanceof ArrayBuffer) r = F.from(new Uint8Array(e));
                        else {
                            var i;
                            if (!(i = /^data:(.*);base64,(.*)$/.exec(e))) throw new Error("Could not find file " + e);
                            i[1] && (n.Subtype = i[1].replace("/", "#2F")), r = F.from(i[2], "base64")
                        }
                        t.creationDate instanceof Date && (n.Params.CreationDate = t.creationDate), t.modifiedDate instanceof Date && (n.Params.ModDate = t.modifiedDate), t.type && (n.Subtype = t.type.replace("/", "#2F"));
                        var o, a = m()(v.lib.WordArray.create(new Uint8Array(r)));
                        n.Params.CheckSum = new String(a), n.Params.Size = r.byteLength, this._fileRegistry || (this._fileRegistry = {});
                        var c, s, u = this._fileRegistry[t.name];
                        u && (s = u, (c = n).Subtype === s.Subtype && c.Params.CheckSum.toString() === s.Params.CheckSum.toString() && c.Params.Size === s.Params.Size && c.Params.CreationDate === s.Params.CreationDate && c.Params.ModDate === s.Params.ModDate) ? o = u.ref : ((o = this.ref(n)).end(r), this._fileRegistry[t.name] = (0, y.Z)({}, n, {
                            ref: o
                        }));
                        var l = {
                            Type: "Filespec",
                            F: new String(t.name),
                            EF: {
                                F: o
                            },
                            UF: new String(t.name)
                        };
                        t.description && (l.Desc = new String(t.description));
                        var f = this.ref(l);
                        return f.end(), t.hidden || this.addNamedEmbeddedFile(t.name, f), f
                    }
                };
            var ul = function(e) {
                    return e[0].toUpperCase() + e.slice(1)
                },
                ll = function(e) {
                    function t(t) {
                        var r;
                        switch (void 0 === t && (t = {}), (r = e.call(this) || this).options = t, t.pdfVersion) {
                            case "1.4":
                                r.version = 1.4;
                                break;
                            case "1.5":
                                r.version = 1.5;
                                break;
                            case "1.6":
                                r.version = 1.6;
                                break;
                            case "1.7":
                            case "1.7ext3":
                                r.version = 1.7;
                                break;
                            default:
                                r.version = 1.3
                        }
                        r.compress = null == r.options.compress || r.options.compress, r._pageBuffer = [], r._pageBufferStart = 0, r._offsets = [], r._waiting = 0, r._ended = !1, r._offset = 0;
                        var n = r.ref({
                                Type: "Pages",
                                Count: 0,
                                Kids: []
                            }),
                            i = r.ref({
                                Dests: new tu
                            });
                        if (r._root = r.ref({
                                Type: "Catalog",
                                Pages: n,
                                Names: i
                            }), r.options.lang && (r._root.data.Lang = new String(r.options.lang)), r.options.pageLayout && (r._root.data.PageLayout = ul(r.options.pageLayout)), r.options.pageMode && (r._root.data.PageMode = ul(r.options.pageMode)), r.page = null, r.initColor(), r.initVector(), r.initFonts(), r.initText(), r.initImages(), r.initOutline(), r.info = {
                                Producer: "PDFKit",
                                Creator: "PDFKit",
                                CreationDate: new Date
                            }, r.options.info)
                            for (var o in r.options.info) {
                                var a = r.options.info[o];
                                r.info[o] = a
                            }
                        return r.options.displayTitle && (r._root.data.ViewerPreferences = r.ref({
                            DisplayDocTitle: !0
                        })), r._id = lu.generateFileID(r.info), r._write("%PDF-" + r.version), r._write("%\xff\xff\xff\xff"), !1 !== r.options.autoFirstPage && r.addPage(), r
                    }(0, n.Z)(t, e);
                    var r = t.prototype;
                    return r.addPage = function(e) {
                        null == e && (e = this.options), this.options.bufferPages || this.flushPages(), this.page = new uu(this, e), this._pageBuffer.push(this.page);
                        var t = this._root.data.Pages.data;
                        return t.Kids.push(this.page.dictionary), t.Count++, this._ctm = [1, 0, 0, 1, 0, 0], this.transform(1, 0, 0, -1, 0, this.page.height), this
                    }, r.flushPages = function() {
                        var e = this._pageBuffer;
                        this._pageBuffer = [], this._pageBufferStart += e.length;
                        for (var t = 0, r = Array.from(e); t < r.length; t++) {
                            r[t].end()
                        }
                    }, r.addNamedDestination = function(e) {
                        for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
                        0 === r.length && (r = ["XYZ", null, null, null]), "XYZ" === r[0] && null !== r[2] && (r[2] = this.page.height - r[2]), r.unshift(this.page.dictionary), this._root.data.Names.data.Dests.add(e, r)
                    }, r.addNamedEmbeddedFile = function(e, t) {
                        this._root.data.Names.data.EmbeddedFiles || (this._root.data.Names.data.EmbeddedFiles = new tu({
                            limits: !1
                        })), this._root.data.Names.data.EmbeddedFiles.add(e, t)
                    }, r.addNamedJavaScript = function(e, t) {
                        this._root.data.Names.data.JavaScript || (this._root.data.Names.data.JavaScript = new tu);
                        var r = {
                            JS: new String(t),
                            S: "JavaScript"
                        };
                        this._root.data.Names.data.JavaScript.add(e, r)
                    }, r.ref = function(e) {
                        var t = new eu(this, this._offsets.length + 1, e);
                        return this._offsets.push(null), this._waiting++, t
                    }, r._read = function() {}, r._write = function(e) {
                        return F.isBuffer(e) || (e = F.from(e + "\n", "binary")), this.push(e), this._offset += e.length
                    }, r.addContent = function(e) {
                        return this.page.write(e), this
                    }, r._refEnd = function(e) {
                        if (this._offsets[e.id - 1] = e.offset, 0 === --this._waiting && this._ended) return this._finalize(), this._ended = !1
                    }, r.end = function() {
                        for (var e in this.flushPages(), this._info = this.ref(), this.info) {
                            var t = this.info[e];
                            "string" === typeof t && (t = new String(t));
                            var r = this.ref(t);
                            r.end(), this._info.data[e] = r
                        }
                        for (var n in this._info.end(), this._fontFamilies) {
                            this._fontFamilies[n].finalize()
                        }
                        if (this.endOutline(), this._root.end(), this._root.data.Pages.end(), this._root.data.Names.end(), this.endAcroForm(), this._root.data.ViewerPreferences && this._root.data.ViewerPreferences.end(), 0 === this._waiting) return this._finalize();
                        this._ended = !0
                    }, r._finalize = function() {
                        var e = this._offset;
                        this._write("xref"), this._write("0 " + (this._offsets.length + 1)), this._write("0000000000 65535 f ");
                        for (var t = 0, r = Array.from(this._offsets); t < r.length; t++) {
                            var n = r[t];
                            n = ("0000000000" + n).slice(-10), this._write(n + " 00000 n ")
                        }
                        var i = {
                            Size: this._offsets.length + 1,
                            Root: this._root,
                            Info: this._info,
                            ID: [this._id, this._id]
                        };
                        return this._write("trailer"), this._write(au.convert(i)), this._write("startxref"), this._write("" + e), this._write("%%EOF"), this.push(null)
                    }, r.toString = function() {
                        return "[object PDFDocument]"
                    }, t
                }(li.Readable),
                fl = function(e) {
                    Object.assign(ll.prototype, e)
                };
            fl(bu), fl(Fu), fl(qu), fl(Vu), fl(Ju), fl(Xu), fl(el), fl(cl), fl(sl)
        }
    }
]);