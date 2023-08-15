"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [5999], {
        80161: function(r, e, a) {
            a.d(e, {
                Z: function() {
                    return c
                }
            });
            var n, i = a(87462),
                t = {
                    ALIGN_AUTO: 0,
                    ALIGN_FLEX_START: 1,
                    ALIGN_CENTER: 2,
                    ALIGN_FLEX_END: 3,
                    ALIGN_STRETCH: 4,
                    ALIGN_BASELINE: 5,
                    ALIGN_SPACE_BETWEEN: 6,
                    ALIGN_SPACE_AROUND: 7,
                    DIMENSION_WIDTH: 0,
                    DIMENSION_HEIGHT: 1,
                    DIRECTION_INHERIT: 0,
                    DIRECTION_LTR: 1,
                    DIRECTION_RTL: 2,
                    DISPLAY_FLEX: 0,
                    DISPLAY_NONE: 1,
                    EDGE_LEFT: 0,
                    EDGE_TOP: 1,
                    EDGE_RIGHT: 2,
                    EDGE_BOTTOM: 3,
                    EDGE_START: 4,
                    EDGE_END: 5,
                    EDGE_HORIZONTAL: 6,
                    EDGE_VERTICAL: 7,
                    EDGE_ALL: 8,
                    EXPERIMENTAL_FEATURE_WEB_FLEX_BASIS: 0,
                    EXPERIMENTAL_FEATURE_ABSOLUTE_PERCENTAGE_AGAINST_PADDING_EDGE: 1,
                    EXPERIMENTAL_FEATURE_FIX_ABSOLUTE_TRAILING_COLUMN_MARGIN: 2,
                    FLEX_DIRECTION_COLUMN: 0,
                    FLEX_DIRECTION_COLUMN_REVERSE: 1,
                    FLEX_DIRECTION_ROW: 2,
                    FLEX_DIRECTION_ROW_REVERSE: 3,
                    GUTTER_COLUMN: 0,
                    GUTTER_ROW: 1,
                    GUTTER_ALL: 2,
                    JUSTIFY_FLEX_START: 0,
                    JUSTIFY_CENTER: 1,
                    JUSTIFY_FLEX_END: 2,
                    JUSTIFY_SPACE_BETWEEN: 3,
                    JUSTIFY_SPACE_AROUND: 4,
                    JUSTIFY_SPACE_EVENLY: 5,
                    LOG_LEVEL_ERROR: 0,
                    LOG_LEVEL_WARN: 1,
                    LOG_LEVEL_INFO: 2,
                    LOG_LEVEL_DEBUG: 3,
                    LOG_LEVEL_VERBOSE: 4,
                    LOG_LEVEL_FATAL: 5,
                    MEASURE_MODE_UNDEFINED: 0,
                    MEASURE_MODE_EXACTLY: 1,
                    MEASURE_MODE_AT_MOST: 2,
                    NODE_TYPE_DEFAULT: 0,
                    NODE_TYPE_TEXT: 1,
                    OVERFLOW_VISIBLE: 0,
                    OVERFLOW_HIDDEN: 1,
                    OVERFLOW_SCROLL: 2,
                    POSITION_TYPE_STATIC: 0,
                    POSITION_TYPE_RELATIVE: 1,
                    POSITION_TYPE_ABSOLUTE: 2,
                    PRINT_OPTIONS_LAYOUT: 1,
                    PRINT_OPTIONS_STYLE: 2,
                    PRINT_OPTIONS_CHILDREN: 4,
                    UNIT_UNDEFINED: 0,
                    UNIT_POINT: 1,
                    UNIT_PERCENT: 2,
                    UNIT_AUTO: 3,
                    WRAP_NO_WRAP: 0,
                    WRAP_WRAP: 1,
                    WRAP_WRAP_REVERSE: 2
                },
                f = t,
                o = (n = "undefined" != typeof document && document.currentScript ? document.currentScript.src : void 0, function(r) {
                    var e, a, i;
                    void 0 === r && (r = {}), e || (e = void 0 !== r ? r : {}), e.ready = new Promise((function(r, e) {
                        a = r, i = e
                    }));
                    var t = Object.assign({}, e),
                        f = "";
                    "undefined" != typeof document && document.currentScript && (f = document.currentScript.src), n && (f = n), f = 0 !== f.indexOf("blob:") ? f.substr(0, f.replace(/[?#].*/, "").lastIndexOf("/") + 1) : "";
                    var o, c = e.print || console.log.bind(console),
                        u = e.printErr || console.warn.bind(console);

                    function b() {}

                    function s(r) {
                        this.exports = function(r) {
                            for (var e, a = new Uint8Array(123), n = 25; n >= 0; --n) a[48 + n] = 52 + n, a[65 + n] = n, a[97 + n] = 26 + n;

                            function i(r, e, n) {
                                for (var i, t, f = 0, o = e, c = n.length, u = e + (3 * c >> 2) - ("=" == n[c - 2]) - ("=" == n[c - 1]); f < c; f += 4) i = a[n.charCodeAt(f + 1)], t = a[n.charCodeAt(f + 2)], r[o++] = a[n.charCodeAt(f)] << 2 | i >> 4, o < u && (r[o++] = i << 4 | t >> 2), o < u && (r[o++] = t << 6 | a[n.charCodeAt(f + 3)])
                            }
                            a[43] = 62, a[47] = 63;
                            var t = new ArrayBuffer(16),
                                f = new Int32Array(t),
                                o = new Float32Array(t),
                                c = new Float64Array(t);

                            function u(r) {
                                return f[r]
                            }

                            function b(r, e) {
                                f[r] = e
                            }

                            function s() {
                                return c[0]
                            }

                            function k(r) {
                                c[0] = r
                            }

                            function A() {
                                throw new Error("abort")
                            }

                            function l(r) {
                                o[2] = r
                            }

                            function d() {
                                return o[2]
                            }
                            return function(r) {
                                var a = r.a,
                                    n = a.a,
                                    t = n.buffer;
                                n.grow = function(r) {
                                    r |= 0;
                                    var a = 0 | na(),
                                        i = a + r | 0;
                                    if (a < i && i < 65536) {
                                        var u = new ArrayBuffer(y(i, 65536));
                                        new Int8Array(u).set(f), f = new Int8Array(u), o = new Int16Array(u), c = new Int32Array(u), h = new Uint8Array(u), v = new Uint16Array(u), p = new Uint32Array(u), N = new Float32Array(u), m = new Float64Array(u), t = u, n.buffer = t, e = h
                                    }
                                    return a
                                };
                                var f = new Int8Array(t),
                                    o = new Int16Array(t),
                                    c = new Int32Array(t),
                                    h = new Uint8Array(t),
                                    v = new Uint16Array(t),
                                    p = new Uint32Array(t),
                                    N = new Float32Array(t),
                                    m = new Float64Array(t),
                                    y = Math.imul,
                                    w = Math.fround,
                                    E = Math.abs,
                                    g = Math.clz32,
                                    R = Math.min,
                                    G = Math.max,
                                    Z = a.b,
                                    W = a.c,
                                    V = a.d,
                                    B = a.e,
                                    T = a.f,
                                    I = a.g,
                                    X = a.h,
                                    O = a.i,
                                    _ = a.j,
                                    L = a.k,
                                    F = a.l,
                                    C = a.m,
                                    P = a.n,
                                    U = a.o,
                                    S = a.p,
                                    Y = a.q,
                                    M = a.r,
                                    H = a.s,
                                    Q = a.t,
                                    z = a.u,
                                    D = a.v,
                                    j = a.w,
                                    x = a.x,
                                    J = a.y,
                                    K = a.z,
                                    q = a.A,
                                    $ = a.B,
                                    rr = a.C,
                                    er = a.D,
                                    ar = 73632,
                                    nr = 0;

                                function ir(r, e, a, n, i, t, o, u, s, k, l, v, p, m) {
                                    var y, g = w(0),
                                        R = w(0),
                                        G = 0,
                                        Z = 0,
                                        W = 0,
                                        V = w(0),
                                        B = w(0),
                                        T = w(0),
                                        X = 0,
                                        O = 0,
                                        _ = 0,
                                        L = w(0),
                                        F = w(0),
                                        C = w(0),
                                        P = 0,
                                        U = w(0),
                                        S = 0,
                                        Y = w(0),
                                        M = w(0),
                                        H = 0,
                                        Q = 0,
                                        z = 0,
                                        D = 0,
                                        j = 0,
                                        x = w(0),
                                        J = 0,
                                        K = w(0),
                                        q = 0,
                                        $ = 0,
                                        rr = 0,
                                        er = 0,
                                        nr = w(0),
                                        ir = 0,
                                        tr = 0,
                                        fr = 0,
                                        cr = 0,
                                        br = w(0),
                                        lr = 0,
                                        dr = 0,
                                        hr = 0,
                                        vr = w(0),
                                        mr = w(0),
                                        wr = 0,
                                        Er = w(0),
                                        gr = w(0),
                                        Zr = w(0),
                                        Lr = 0,
                                        Cr = 0,
                                        Pr = w(0),
                                        Ur = 0,
                                        Sr = w(0),
                                        Hr = w(0),
                                        Dr = w(0),
                                        xr = w(0),
                                        Kr = 0,
                                        qr = 0,
                                        $r = 0,
                                        re = 0,
                                        ee = 0,
                                        ae = 0,
                                        ne = 0,
                                        ie = 0,
                                        te = 0,
                                        fe = w(0),
                                        oe = w(0);
                                    ar = y = ar - 384 | 0;
                                    r: {
                                        e: {
                                            a: {
                                                if (!i || e == e) {
                                                    if (!t || a == a) {
                                                        if (c[(G = (s ? 0 : 4) + l | 0) >> 2] = c[G >> 2] + 1, Ur = (0 | n) <= 1 ? 1 : n, J = (G = 3 & c[r + 24 >> 2]) || Ur, f[r + 300 | 0] = 252 & h[r + 300 | 0] | 3 & J, G = r + 252 | 0, n = (1 != (0 | J)) << 3, B = Mr(r, lr = 2 == (0 | J) ? 3 : 2, o), N[G + n >> 2] = B, Z = G, G = (1 == (0 | J)) << 3, F = Yr(r, lr, o), N[Z + G >> 2] = F, L = Mr(r, 0, o), N[r + 256 >> 2] = L, V = Yr(r, 0, o), N[r + 264 >> 2] = V, te = (W = r + 268 | 0) + n | 0, fe = zr(r, lr), N[te >> 2] = fe, te = G + W | 0, fe = Qr(r, lr), N[te >> 2] = fe, g = zr(r, 0), N[r + 272 >> 2] = g, T = Qr(r, 0), N[r + 280 >> 2] = T, te = (Z = n) + (n = r + 284 | 0) | 0, fe = Br(r, lr, o), N[te >> 2] = fe, te = n + G | 0, fe = Tr(r, lr, o), N[te >> 2] = fe, R = Br(r, 0, o), N[r + 288 >> 2] = R, U = Tr(r, 0, o), N[r + 296 >> 2] = U, B = w(B + F), F = w(L + V), n = c[r + 8 >> 2]) {
                                                            if (L = w(w(w(N[r + 284 >> 2] + N[r + 292 >> 2]) + N[r + 268 >> 2]) + N[r + 276 >> 2]), a = w(t ? a - F : NaN), g = w(w(R + U) + g), (e = R = w(i ? e - B : NaN)) == e && (e = (e = w(R - L)) == e ? Re(e, w(0)) : w(0)), B = w(g + T), g = a, a == a && (g = (g = w(a - B)) == g ? Re(g, w(0)) : w(0)), !(1 != (0 | i) | 1 != (0 | t))) {
                                                                e = (n = (e = ur(r, 2, R, o)) != e) | (g = w(w(Br(r, 2, o) + zr(r, 2)) + w(Tr(r, 2, o) + Qr(r, 2)))) != g ? n ? g : e : Re(e, g), N[r + 516 >> 2] = e, e = (n = (e = ur(r, 0, a, u)) != e) | (a = w(w(Br(r, 0, o) + zr(r, 0)) + w(Tr(r, 0, o) + Qr(r, 0)))) != a ? n ? a : e : Re(e, a), N[r + 520 >> 2] = e;
                                                                break r
                                                            }
                                                            16 & h[r + 4 | 0] ? aa[0 | n](y + 24 | 0, r, e, i, g, t, 0) : aa[0 | n](y + 24 | 0, r, e, i, g, t), c[l + 20 >> 2] = c[l + 20 >> 2] + 1, c[24 + (n = (m << 2) + l | 0) >> 2] = c[n + 24 >> 2] + 1, e = w(L + N[y + 24 >> 2]), e = (n = (e = ur(r, 2, i ? 2 == (0 | i) ? e : R : e, o)) != e) | (g = w(w(Br(r, 2, o) + zr(r, 2)) + w(Tr(r, 2, o) + Qr(r, 2)))) != g ? n ? g : e : Re(e, g), N[r + 516 >> 2] = e, e = w(B + N[y + 28 >> 2]), e = (n = (e = ur(r, 0, t ? 2 == (0 | t) ? e : a : e, u)) != e) | (a = w(w(Br(r, 0, o) + zr(r, 0)) + w(Tr(r, 0, o) + Qr(r, 0)))) != a ? n ? a : e : Re(e, a), N[r + 520 >> 2] = e;
                                                            break r
                                                        }
                                                        if ((0 | (n = c[r + 556 >> 2])) == (0 | (m = c[r + 560 >> 2]))) {
                                                            F = w(a - F), e = (n = (e = ur(r, 2, w(-3 & i ? e - B : w(w(N[r + 284 >> 2] + N[r + 292 >> 2]) + N[r + 268 >> 2]) + N[r + 276 >> 2]), o)) != e) | (a = w(w(Br(r, 2, o) + zr(r, 2)) + w(Tr(r, 2, o) + Qr(r, 2)))) != a ? n ? a : e : Re(e, a), N[r + 516 >> 2] = e, e = (n = (e = ur(r, 0, -3 & t ? F : w(w(w(R + U) + g) + T), u)) != e) | (a = w(w(Br(r, 0, o) + zr(r, 0)) + w(Tr(r, 0, o) + Qr(r, 0)))) != a ? n ? a : e : Re(e, a), N[r + 520 >> 2] = e;
                                                            break r
                                                        }
                                                        if (!(s || (R = w(e - B), g = w(a - F), !(2 == (0 | i) & R <= w(0) | !(!(g <= w(0)) | 2 != (0 | t)) & g == g) & (1 != (0 | i) | 1 != (0 | t))))) {
                                                            e = (n = (e = ur(r, 2, R == R ? 2 == (0 | i) && R < w(0) ? w(0) : R : w(0), o)) != e) | (a = w(w(Br(r, 2, o) + zr(r, 2)) + w(Tr(r, 2, o) + Qr(r, 2)))) != a ? n ? a : e : Re(e, a), N[r + 516 >> 2] = e, e = (n = (e = ur(r, 0, g != g || 2 == (0 | t) && g < w(0) ? w(0) : g, u)) != e) | (a = w(w(Br(r, 0, o) + zr(r, 0)) + w(Tr(r, 0, o) + Qr(r, 0)))) != a ? n ? a : e : Re(e, a), N[r + 520 >> 2] = e;
                                                            break r
                                                        }
                                                        for (er = (z = m - n | 0) >> 2; G = c[n >> 2], c[G + 552 >> 2] != (0 | r) && (W = c[r + 568 >> 2], G = Ir(c[W >> 2], h[W + 8 | 0], G, r, O, 0), c[n >> 2] = G, c[G + 552 >> 2] = r), O = O + 1 | 0, (0 | m) != (0 | (n = n + 4 | 0)););
                                                        f[r + 300 | 0] = 251 & h[r + 300 | 0], O = 3, n = (wr = c[r + 24 >> 2]) >>> 2 & 3;
                                                        n: {
                                                            i: {
                                                                t: {
                                                                    if (2 == (0 | J)) {
                                                                        m = 0;
                                                                        f: switch (n - 2 | 0) {
                                                                            case 0:
                                                                                break n;
                                                                            case 1:
                                                                                break f;
                                                                            default:
                                                                                break t
                                                                        }
                                                                        O = 2;
                                                                        break n
                                                                    }
                                                                    if (O = 2, m = 0, n >>> 0 > 1) break i
                                                                }
                                                                m = O
                                                            }
                                                            O = n
                                                        }
                                                        Sr = w(e - B), nr = w(w(Br(r, O, o) + zr(r, O)) + w(Tr(r, O, o) + Qr(r, O))), U = w(Br(r, m, o) + zr(r, m)), K = w(U + w(Tr(r, m, o) + Qr(r, m))), V = Ar(r, 0, Sr, (q = O >>> 0 > 1) ? nr : K, o), Y = Ar(r, 1, Hr = w(a - F), q ? K : nr, u), M = q ? Y : V, F = q ? V : Y, ir = c[r + 560 >> 2], G = c[r + 556 >> 2];
                                                        n: if (1 == (0 | (S = q ? i : t))) {
                                                            if ((0 | G) == (0 | ir)) break a;
                                                            for (n = 0, W = G;;) {
                                                                Z = n;
                                                                i: if (jr(n = c[W >> 2])) {
                                                                    if (X = 0, Z) break n;
                                                                    if (!(Z = c[n + 552 >> 2])) break n;
                                                                    t: {
                                                                        if (!((a = N[n + 32 >> 2]) == a || (g = w(0), (a = N[n + 28 >> 2]) > w(0))) || (g = a, a == a)) {
                                                                            if (w(E(g)) < w(9999999747378752e-20)) break n;
                                                                            if (!Z) {
                                                                                a = w(0);
                                                                                break t
                                                                            }
                                                                        }
                                                                        if ((a = N[n + 36 >> 2]) != a) {
                                                                            if (f[n + 4 | 0] < 0) {
                                                                                a = w(1);
                                                                                break t
                                                                            }
                                                                            if (a = w(0), !((e = N[n + 28 >> 2]) < w(0))) break t;
                                                                            a = w(-e)
                                                                        }
                                                                        if (a != a) break i
                                                                    }
                                                                    if (w(E(a)) < w(9999999747378752e-20)) break n
                                                                } else n = Z;
                                                                if (X = n, (0 | ir) == (0 | (W = W + 4 | 0))) break
                                                            }
                                                        }
                                                        if ((0 | G) == (0 | ir)) break a;
                                                        for (D = (0 | J) <= 1 ? 1 : J, tr = (fr = V != V) | 1 != (0 | i), cr = Y == Y, dr = V == V, g = w(0);;) {
                                                            sr(_ = c[G >> 2]);
                                                            n: if (4194304 & (W = c[_ + 24 >> 2])) {
                                                                if (Nr(_, 0), W = 1 | (n = h[_ + 4 | 0]), f[_ + 4 | 0] = W, !(4 & n)) break n;
                                                                f[_ + 4 | 0] = 251 & W
                                                            } else
                                                            if (s && (Fr(_, (n = 3 & W) || D, F, M, V), W = c[_ + 24 >> 2]), 131072 != (196608 & W)) {
                                                                if ((0 | X) != (0 | _)) {
                                                                    Z = (hr = c[r + 24 >> 2]) >>> 2 & 3;
                                                                    i: {
                                                                        t: if (2 == (0 | J)) {
                                                                            n = 3;
                                                                            f: switch (Z - 2 | 0) {
                                                                                case 0:
                                                                                    break i;
                                                                                case 1:
                                                                                    break f;
                                                                                default:
                                                                                    break t
                                                                            }
                                                                            n = 2;
                                                                            break i
                                                                        }n = Z
                                                                    }
                                                                    R = ($ = n >>> 0 > 1) ? V : Y, a = w(0), e = N[_ + 40 >> 2];
                                                                    i: {
                                                                        t: {
                                                                            f: if (2139156720 != (0 | (Z = c[_ + 40 >> 2]))) {
                                                                                if (2140081935 == (0 | Z)) break t;
                                                                                P = 4276;
                                                                                o: {
                                                                                    if (2141891242 != (0 | Z)) {
                                                                                        if (e == e) break o;
                                                                                        P = 4268
                                                                                    }
                                                                                    a = N[P >> 2];c: {
                                                                                        u: switch (0 | (Z = c[P + 4 >> 2])) {
                                                                                            case 0:
                                                                                            case 3:
                                                                                                break u;
                                                                                            default:
                                                                                                break c
                                                                                        }
                                                                                        if (e = w(NaN), !(N[_ + 28 >> 2] > w(0))) break i;Z = (P = f[_ + 4 | 0] < 0) ? 3 : 1,
                                                                                        b(2, j = P ? 2143289344 : 0),
                                                                                        a = d()
                                                                                    }
                                                                                    switch (e = w(NaN), Z - 1 | 0) {
                                                                                        case 0:
                                                                                            break t;
                                                                                        case 1:
                                                                                            break f;
                                                                                        default:
                                                                                            break i
                                                                                    }
                                                                                }
                                                                                if (b(2, 536870912 + (-1073741825 & Z) | 0), a = d(), !(1073741824 & Z)) break t
                                                                            }e = w(w(R * a) * w(.009999999776482582));
                                                                            break i
                                                                        }
                                                                        e = a
                                                                    }
                                                                    a = N[_ + 572 >> 2], Z = 0;
                                                                    i: {
                                                                        switch (0 | (Q = c[_ + 576 >> 2])) {
                                                                            case 0:
                                                                            case 3:
                                                                                break i
                                                                        }
                                                                        if (1 != (0 | Q) | (B = N[_ + 572 >> 2]) != B) Z = 1,
                                                                        2 != (0 | Q) | B != B || (Z = 0, a < w(0) || (Z = dr));
                                                                        else {
                                                                            if (a < w(0)) break i;
                                                                            Z = 1
                                                                        }
                                                                    }
                                                                    B = N[_ + 580 >> 2], P = 0;
                                                                    i: {
                                                                        switch (0 | (H = c[_ + 584 >> 2])) {
                                                                            case 0:
                                                                            case 3:
                                                                                break i
                                                                        }
                                                                        if (1 != (0 | H) | (T = N[_ + 580 >> 2]) != T) P = 1,
                                                                        2 != (0 | H) | T != T || (P = 0, B < w(0) || (P = cr));
                                                                        else {
                                                                            if (B < w(0)) break i;
                                                                            P = 1
                                                                        }
                                                                    }
                                                                    i: {
                                                                        t: if (e != e | R != R)
                                                                            if (Z & $) {
                                                                                switch (R = w(w(Br(_, 2, V) + zr(_, 2)) + w(Tr(_, 2, V) + Qr(_, 2))), e = w(NaN), Q - 1 | 0) {
                                                                                    case 1:
                                                                                        a = w(w(V * a) * w(.009999999776482582));
                                                                                    case 0:
                                                                                        if (R <= (e = a)) break t
                                                                                }
                                                                                if (!(e == e | R == R)) {
                                                                                    a = e;
                                                                                    break t
                                                                                }
                                                                                if (e < R) {
                                                                                    a = R;
                                                                                    break t
                                                                                }
                                                                                a = e != e ? R : e
                                                                            } elseif ($ | 1 ^ P) {
                                                                            if (c[y + 360 >> 2] = 2143289344, c[y + 24 >> 2] = 2143289344, j = 0, c[y + 356 >> 2] = 0, c[y + 352 >> 2] = 0, T = w(Mr(_, 2, V) + Yr(_, 2, V)), L = Mr(_, 0, V), C = Yr(_, 0, V), R = w(NaN), rr = 0, e = w(NaN), Z) {
                                                                                f: {
                                                                                    o: switch (Q - 1 | 0) {
                                                                                        case 0:
                                                                                            e = a;
                                                                                            break f;
                                                                                        case 1:
                                                                                            break o;
                                                                                        default:
                                                                                            break f
                                                                                    }
                                                                                    e = w(w(V * a) * w(.009999999776482582))
                                                                                }
                                                                                c[y + 356 >> 2] = 1,
                                                                                e = w(T + e),
                                                                                N[y + 24 >> 2] = e,
                                                                                rr = 1
                                                                            }
                                                                            if (L = w(L + C), P) {
                                                                                a = w(NaN);
                                                                                f: {
                                                                                    o: switch (H - 1 | 0) {
                                                                                        case 0:
                                                                                            a = B;
                                                                                            break f;
                                                                                        case 1:
                                                                                            break o;
                                                                                        default:
                                                                                            break f
                                                                                    }
                                                                                    a = w(w(Y * B) * w(.009999999776482582))
                                                                                }
                                                                                c[y + 352 >> 2] = 1, R = w(L + a), N[y + 360 >> 2] = R, j = 1
                                                                            }
                                                                            Q = n >>> 0 < 2;
                                                                            f: {
                                                                                o: {
                                                                                    c: {
                                                                                        if (!(!$ & 2097152 == (0 | (H = 3145728 & hr)))) {
                                                                                            if (fr | 2097152 == (0 | H)) break o;
                                                                                            if (e != e) break c;
                                                                                            break o
                                                                                        }
                                                                                        if (fr | e == e) break f
                                                                                    }
                                                                                    rr = 2,
                                                                                    c[y + 356 >> 2] = 2,
                                                                                    N[y + 24 >> 2] = V,
                                                                                    e = V
                                                                                }
                                                                                o: {
                                                                                    if (!(!Q & 2097152 == (0 | H))) {
                                                                                        if (2097152 == (0 | H) | Y != Y) break f;
                                                                                        if (R != R) break o;
                                                                                        break f
                                                                                    }
                                                                                    if (R == R | Y != Y) break f
                                                                                }
                                                                                j = 2,
                                                                                c[y + 352 >> 2] = 2,
                                                                                N[y + 360 >> 2] = Y,
                                                                                R = Y
                                                                            }
                                                                            f: if (!(H = (a = N[_ + 224 >> 2]) != a)) {
                                                                                if ($ | 1 != (0 | rr)) {
                                                                                    if (Q | 1 != (0 | j)) break f;
                                                                                    c[y + 356 >> 2] = 1, N[y + 24 >> 2] = w(w(R - L) * a) + T
                                                                                } else c[y + 352 >> 2] = 1, N[y + 360 >> 2] = L + w(w(e - T) / a);
                                                                                j = 1, rr = 1
                                                                            }
                                                                            5 == (0 | (W = (W = W >>> 13 & 7) || hr >>> 10 & 7)) | 1 == (0 | rr) | $ | Z | tr | 4 != (0 | W) || (c[y + 356 >> 2] = 1, N[y + 24 >> 2] = V, H || (j = 1, c[y + 352 >> 2] = 1, N[y + 360 >> 2] = w(V - T) / a)), Q | 1 != (0 | t) | Y != Y | P | 4 != (0 | W) | 1 == (0 | j) || (c[y + 352 >> 2] = 1, N[y + 360 >> 2] = Y, H || (c[y + 356 >> 2] = 1, N[y + 24 >> 2] = w(Y - L) * a)), Vr(_, 2, V, V, y + 356 | 0, y + 24 | 0), Vr(_, 0, Y, V, y + 352 | 0, y + 360 | 0), or(_, N[y + 24 >> 2], N[y + 360 >> 2], J, c[y + 356 >> 2], c[y + 352 >> 2], V, Y, 0, 5, k, l, v, p), a = (W = (e = N[516 + (_ + (c[4252 + (n << 2) >> 2] << 2) | 0) >> 2]) != e) | (a = w(w(Br(_, n, V) + zr(_, n)) + w(Tr(_, n, V) + Qr(_, n)))) != a ? W ? a : e : Re(e, a)
                                                                        } else {
                                                                            switch (e = w(w(Br(_, 0, V) + zr(_, 0)) + w(Tr(_, 0, V) + Qr(_, 0))), a = w(NaN), H - 1 | 0) {
                                                                                case 1:
                                                                                    B = w(w(Y * B) * w(.009999999776482582));
                                                                                case 0:
                                                                                    if (e <= (a = B)) break t
                                                                            }
                                                                            if (a != a & e != e) break t;
                                                                            if (e > a) {
                                                                                a = e;
                                                                                break t
                                                                            }
                                                                            a = a != a ? e : a
                                                                        } else {
                                                                            if (a = N[_ + 308 >> 2], (!h[c[_ + 568 >> 2] + 20 | 0] | c[_ + 304 >> 2] == (0 | p)) & a == a) break i;
                                                                            if (!((a = w(w(Br(_, n, V) + zr(_, n)) + w(Tr(_, n, V) + Qr(_, n)))) <= e) & e < a) break t;
                                                                            a = e
                                                                        }
                                                                        N[_ + 308 >> 2] = a
                                                                    }
                                                                    c[_ + 304 >> 2] = p
                                                                } else c[X + 308 >> 2] = 0, c[X + 304 >> 2] = p, a = w(0);
                                                                g = w(g + w(a + w(Mr(_, O, V) + Yr(_, O, V))))
                                                            }
                                                            if ((0 | ir) == (0 | (G = G + 4 | 0))) break
                                                        }
                                                        break e
                                                    }
                                                    c[y >> 2] = 3023, Xr(r, y), je(), A()
                                                }
                                                c[y + 16 >> 2] = 3105,
                                                Xr(r, y + 16 | 0),
                                                je(),
                                                A()
                                            }
                                            g = w(0)
                                        }
                                        e = w(g + w(0)),
                                        Er = q ? u : o,
                                        vr = q ? o : u,
                                        z >>> 0 >= 5 && (e = w(w(pr(r, O, M) * w(er - 1 >>> 0)) + e)),
                                        n = e > F,
                                        ir = 786432 & wr,
                                        cr = 2 == (0 | S) && ir && n ? 1 : S,
                                        qr = (fr = 1 == (0 | (_ = q ? t : i))) & (1 ^ s),
                                        q = O >>> 0 < 2,
                                        $r = -3 & _,
                                        hr = r + 208 | 0,
                                        H = 4220 + (t = m << 2) | 0,
                                        re = fr & !ir,
                                        ee = 1 != (0 | _) | s,
                                        $ = 4220 + (G = O << 2) | 0,
                                        dr = G + 4252 | 0,
                                        ae = (rr = M == M) << 1,
                                        Q = t + 4252 | 0,
                                        ne = !S | !n,
                                        wr = y + 52 | 0,
                                        Dr = pr(r, m, M),
                                        W = 0,
                                        n = 0,
                                        j = 0;e: {
                                            for (;;) {
                                                if (P = n, Rr(y + 24 | 0, 0, 44), (0 | (n = c[r + 560 >> 2])) != (0 | (t = c[r + 556 >> 2]))) {
                                                    if ((0 | (n = n - t | 0)) < 0) break e;
                                                    G = pe(y + 360 | 0, n >> 2, 0, wr), n = c[y + 44 >> 2], t = c[y + 48 >> 2] - n | 0, t = yr(c[y + 364 >> 2] - t | 0, n, t), n = c[y + 44 >> 2], c[y + 364 >> 2] = n, c[y + 44 >> 2] = t, Z = c[y + 368 >> 2], X = c[y + 372 >> 2], t = c[y + 48 >> 2], c[y + 368 >> 2] = t, S = c[y + 52 >> 2], c[y + 48 >> 2] = Z, c[y + 52 >> 2] = X, c[y + 372 >> 2] = S, c[G >> 2] = n, (0 | n) != (0 | t) && (c[y + 368 >> 2] = t + (3 + (n - t | 0) & -4)), n && Gr(n)
                                                }
                                                t = (X = c[r + 24 >> 2]) >>> 2 & 3;
                                                a: {
                                                    n: if (2 == (0 | ((n = 3 & X) || Ur))) {
                                                        n = 3;
                                                        i: switch (t - 2 | 0) {
                                                            case 0:
                                                                break a;
                                                            case 1:
                                                                break i;
                                                            default:
                                                                break n
                                                        }
                                                        n = 2;
                                                        break a
                                                    }n = t
                                                }
                                                g = pr(r, n, V);
                                                a: if (!((G = W) >>> 0 >= (Z = c[r + 560 >> 2]) - (t = c[r + 556 >> 2]) >> 2 >>> 0))
                                                    for (S = 786432 & X, a = w(0);;) {
                                                        if (Z - t >> 2 >>> 0 <= G >>> 0) break e;
                                                        if (X = c[(G << 2) + t >> 2], !(4194304 & (z = c[X + 24 >> 2]) | 131072 == (196608 & z))) {
                                                            if (c[X + 548 >> 2] = P, e = Mr(X, n, V), R = Yr(X, n, V), t = c[y + 24 >> 2], B = (0 | G) == (0 | W) ? w(0) : g, e = w(e + R), T = ur(X, n, R = N[X + 308 >> 2], vr), t && !(!(w(B + w(e + w(a + T))) > F) | !S)) break a;
                                                            if (c[y + 24 >> 2] = t + 1, B = w(B + w(e + T)), N[y + 28 >> 2] = B + N[y + 28 >> 2], jr(X)) {
                                                                n: if (c[X + 552 >> 2]) {
                                                                    if ((e = N[X + 32 >> 2]) != e && (e = (e = N[X + 28 >> 2]) > w(0) ? e : w(0)), N[y + 32 >> 2] = e + N[y + 32 >> 2], (e = N[X + 36 >> 2]) == e) break n;
                                                                    if (f[X + 4 | 0] < 0) {
                                                                        e = w(1);
                                                                        break n
                                                                    }
                                                                    if (e = w(0), !((T = N[X + 28 >> 2]) < w(0))) break n;
                                                                    e = w(-T)
                                                                } else e = w(0), N[y + 32 >> 2] = N[y + 32 >> 2] + w(0);N[y + 36 >> 2] = N[y + 36 >> 2] - w(e * R)
                                                            }
                                                            if ((0 | (t = c[y + 48 >> 2])) == c[y + 52 >> 2]) {
                                                                if ((Z = 1 + (z = (t = t - c[y + 44 >> 2] | 0) >> 2) | 0) >>> 0 >= 1073741824) break e;
                                                                D = t >>> 1 | 0, z = pe(y + 360 | 0, t >>> 0 >= 2147483644 ? 1073741823 : Z >>> 0 < D >>> 0 ? D : Z, z, wr), c[c[y + 368 >> 2] >> 2] = X, c[y + 368 >> 2] = c[y + 368 >> 2] + 4, t = c[y + 44 >> 2], Z = c[y + 48 >> 2] - t | 0, Z = yr(c[y + 364 >> 2] - Z | 0, t, Z), t = c[y + 44 >> 2], c[y + 364 >> 2] = t, c[y + 44 >> 2] = Z, X = c[y + 368 >> 2], D = c[y + 372 >> 2], Z = c[y + 48 >> 2], c[y + 368 >> 2] = Z, tr = c[y + 52 >> 2], c[y + 48 >> 2] = X, c[y + 52 >> 2] = D, c[y + 372 >> 2] = tr, c[z >> 2] = t, (0 | t) != (0 | Z) && (c[y + 368 >> 2] = Z + (3 + (t - Z | 0) & -4)), t && Gr(t)
                                                            } else c[t >> 2] = X, c[y + 48 >> 2] = t + 4;
                                                            t = c[r + 556 >> 2], Z = c[r + 560 >> 2], a = w(a + B)
                                                        }
                                                        if (!((G = G + 1 | 0) >>> 0 < Z - t >> 2 >>> 0)) break
                                                    }!((C = N[y + 32 >> 2]) > w(0)) | !(C < w(1)) || (c[y + 32 >> 2] = 1065353216, C = w(1)), !((x = N[y + 36 >> 2]) > w(0)) | !(x < w(1)) || (c[y + 36 >> 2] = 1065353216, x = w(1)), c[y + 40 >> 2] = G, L = N[y + 28 >> 2], S = c[y + 24 >> 2], j && Gr(j), B = N[y + 56 >> 2], z = c[y + 48 >> 2], j = c[y + 44 >> 2];
                                                a: {
                                                    n: {
                                                        i: {
                                                            if (1 != (0 | cr)) {
                                                                a = w(0), e = N[hr >> 2];
                                                                t: {
                                                                    f: {
                                                                        o: if (2139156720 != (0 | (n = c[hr >> 2]))) {
                                                                            if (2140081935 == (0 | n)) break f;
                                                                            t = 4276;
                                                                            c: {
                                                                                if (2141891242 != (0 | n)) {
                                                                                    if (e == e) break c;
                                                                                    t = 4268
                                                                                }
                                                                                switch (a = N[t >> 2], e = w(NaN), c[t + 4 >> 2] - 1 | 0) {
                                                                                    case 0:
                                                                                        break f;
                                                                                    case 1:
                                                                                        break o;
                                                                                    default:
                                                                                        break t
                                                                                }
                                                                            }
                                                                            if (b(2, 536870912 + (-1073741825 & n) | 0), a = d(), !(1073741824 & n)) break f
                                                                        }e = w(w(a * o) * w(.009999999776482582));
                                                                        break t
                                                                    }
                                                                    e = a
                                                                }
                                                                a = w(0), g = N[r + 216 >> 2];
                                                                t: {
                                                                    f: {
                                                                        o: if (2139156720 != (0 | (n = c[r + 216 >> 2]))) {
                                                                            if (2140081935 == (0 | n)) break f;
                                                                            t = 4276;
                                                                            c: {
                                                                                if (2141891242 != (0 | n)) {
                                                                                    if (g == g) break c;
                                                                                    t = 4268
                                                                                }
                                                                                switch (a = N[t >> 2], g = w(NaN), c[t + 4 >> 2] - 1 | 0) {
                                                                                    case 0:
                                                                                        break f;
                                                                                    case 1:
                                                                                        break o;
                                                                                    default:
                                                                                        break t
                                                                                }
                                                                            }
                                                                            if (b(2, 536870912 + (-1073741825 & n) | 0), a = d(), !(1073741824 & n)) break f
                                                                        }g = w(w(a * o) * w(.009999999776482582));
                                                                        break t
                                                                    }
                                                                    g = a
                                                                }
                                                                a = w(0), R = N[r + 212 >> 2];
                                                                t: {
                                                                    f: {
                                                                        o: if (2139156720 != (0 | (n = c[r + 212 >> 2]))) {
                                                                            if (2140081935 == (0 | n)) break f;
                                                                            t = 4276;
                                                                            c: {
                                                                                if (2141891242 != (0 | n)) {
                                                                                    if (R == R) break c;
                                                                                    t = 4268
                                                                                }
                                                                                switch (a = N[t >> 2], T = w(NaN), c[t + 4 >> 2] - 1 | 0) {
                                                                                    case 0:
                                                                                        break f;
                                                                                    case 1:
                                                                                        break o;
                                                                                    default:
                                                                                        break t
                                                                                }
                                                                            }
                                                                            if (b(2, 536870912 + (-1073741825 & n) | 0), a = d(), !(1073741824 & n)) break f
                                                                        }T = w(w(a * u) * w(.009999999776482582));
                                                                        break t
                                                                    }
                                                                    T = a
                                                                }
                                                                a = w(0), R = N[r + 220 >> 2];
                                                                t: {
                                                                    f: {
                                                                        o: if (2139156720 != (0 | (n = c[r + 220 >> 2]))) {
                                                                            if (2140081935 == (0 | n)) break f;
                                                                            t = 4276;
                                                                            c: {
                                                                                if (2141891242 != (0 | n)) {
                                                                                    if (R == R) break c;
                                                                                    t = 4268
                                                                                }
                                                                                switch (a = N[t >> 2], R = w(NaN), c[t + 4 >> 2] - 1 | 0) {
                                                                                    case 0:
                                                                                        break f;
                                                                                    case 1:
                                                                                        break o;
                                                                                    default:
                                                                                        break t
                                                                                }
                                                                            }
                                                                            if (b(2, 536870912 + (-1073741825 & n) | 0), a = d(), !(1073741824 & n)) break f
                                                                        }R = w(w(a * u) * w(.009999999776482582));
                                                                        break t
                                                                    }
                                                                    R = a
                                                                }
                                                                if ((a = w(((n = O >>> 0 > 1) ? e : T) - nr)) == a & a > L) break i;
                                                                if ((a = w((n ? g : R) - nr)) == a & a < L) break i;
                                                                if (!h[c[r + 568 >> 2] + 11 | 0]) {
                                                                    if (a = L, !c[r + 552 >> 2] | C == w(0)) break n;
                                                                    t: {
                                                                        if ((e = N[r + 32 >> 2]) != e) {
                                                                            if (!((a = N[r + 28 >> 2]) > w(0))) break t
                                                                        } else a = e;
                                                                        if (a != a) {
                                                                            a = F;
                                                                            break n
                                                                        }
                                                                        e = N[r + 32 >> 2]
                                                                    }
                                                                    if (e != e && (a = L, !((e = N[r + 28 >> 2]) > w(0)))) break n;
                                                                    if (a = F, e != w(0)) break n;
                                                                    a = L;
                                                                    break n
                                                                }
                                                            }
                                                            a = F
                                                        }
                                                        if (a == a) {
                                                            B = w(a - L);
                                                            break a
                                                        }
                                                    }
                                                    L < w(0) && (B = w(-L))
                                                }
                                                if (F = a, !qr) {
                                                    if ((0 | j) != (0 | z)) {
                                                        for (R = w(0), t = j;;) {
                                                            a = ur(n = c[t >> 2], O, L = N[n + 308 >> 2], vr);
                                                            a: if (B < w(0)) {
                                                                if ((X = c[n + 552 >> 2]) ? (g = N[n + 36 >> 2]) != g && (f[n + 4 | 0] < 0 ? g = w(1) : (g = w(0), (e = N[n + 28 >> 2]) < w(0) && (g = w(-e)))) : g = w(0), !((e = w(a * w(-g))) > w(0) | e < w(0))) break a;
                                                                if ((g = w(w(w(B / x) * e) + a)) != g | (e = (Z = (e = ur(n, O, g, F)) != e) | (T = w(w(Br(n, O, V) + zr(n, O)) + w(Tr(n, O, V) + Qr(n, O)))) != T ? Z ? T : e : Re(e, T)) != e | e == g) break a;
                                                                e = w(e - a), X ? (a = N[n + 36 >> 2]) != a && (f[n + 4 | 0] < 0 ? a = w(1) : (a = w(0), (g = N[n + 28 >> 2]) < w(0) && (a = w(-g)))) : a = w(0), R = w(R + e), x = w(w(a * L) + x)
                                                            } else !(B > w(0)) | !c[n + 552 >> 2] || ((g = N[n + 32 >> 2]) == g || (g = N[n + 28 >> 2]) > w(0)) && g < w(0) | g > w(0) && ((T = w(w(w(B / C) * g) + a)) != T | (e = (Z = (e = ur(n, O, T, F)) != e) | (L = w(w(Br(n, O, V) + zr(n, O)) + w(Tr(n, O, V) + Qr(n, O)))) != L ? Z ? L : e : Re(e, L)) != e | e == T || (C = w(C - g), R = w(R + w(e - a))));
                                                            if ((0 | z) == (0 | (t = t + 4 | 0))) break
                                                        }
                                                        for (L = w(B - R), gr = w(L / x), Zr = w(L / C), Cr = !(D = fr & (!(12 & h[r + 26 | 0]) | ne)), tr = c[Q >> 2], T = w(0), Z = j;;) {
                                                            a = ur(t = c[Z >> 2], O, N[t + 308 >> 2], vr);
                                                            a: {
                                                                if (L < w(0)) {
                                                                    if (c[t + 552 >> 2] ? (e = N[t + 36 >> 2]) != e && (f[t + 4 | 0] < 0 ? e = w(1) : (e = w(0), (g = N[t + 28 >> 2]) < w(0) && (e = w(-g)))) : e = w(0), g = a, (e = w(a * w(-e))) == w(0)) break a;
                                                                    e = x == w(0) ? w(a + e) : w(w(gr * e) + a)
                                                                } else {
                                                                    if (g = a, !(L > w(0)) | !c[t + 552 >> 2]) break a;
                                                                    if ((e = N[t + 32 >> 2]) != e && !((e = N[t + 28 >> 2]) > w(0))) break a;
                                                                    if (!(e < w(0) | e > w(0))) break a;
                                                                    e = w(w(Zr * e) + a)
                                                                }
                                                                g = (n = (e = ur(t, O, e, F)) != e) | (g = w(w(Br(t, O, V) + zr(t, O)) + w(Tr(t, O, V) + Qr(t, O)))) != g ? n ? g : e : Re(e, g)
                                                            }
                                                            if (e = Mr(t, O, V), R = Yr(t, O, V), C = Mr(t, m, V), Pr = Yr(t, m, V), R = w(e + R), xr = w(g + R), N[y + 352 >> 2] = xr, c[y + 344 >> 2] = 1, C = w(C + Pr), (e = N[t + 224 >> 2]) != e) {
                                                                e = N[572 + (X = t + (tr << 3) | 0) >> 2];
                                                                a: {
                                                                    n: {
                                                                        i: {
                                                                            t: {
                                                                                f: {
                                                                                    o: {
                                                                                        c: {
                                                                                            u: {
                                                                                                if (rr) {
                                                                                                    R = N[X + 572 >> 2];
                                                                                                    b: {
                                                                                                        s: {
                                                                                                            k: {
                                                                                                                switch (0 | (n = c[X + 576 >> 2])) {
                                                                                                                    case 0:
                                                                                                                    case 3:
                                                                                                                        break k
                                                                                                                }
                                                                                                                if (!(1 != (0 | n) | e != e)) {
                                                                                                                    if (!(D & R < w(0))) break b;
                                                                                                                    break s
                                                                                                                }
                                                                                                                if (!(Cr | !(R < w(0)) | 2 != (0 | n) | e != e)) break s;
                                                                                                                break b
                                                                                                            }
                                                                                                            if (!D) break b
                                                                                                        }
                                                                                                        if ((X = c[t + 24 >> 2] >>> 13 & 7) || (X = c[r + 24 >> 2] >>> 10 & 7), 4 == (0 | X) && (he(y + 24 | 0, t, m), 3 != c[y + 28 >> 2] && (de(y + 360 | 0, t, m), 3 != c[y + 364 >> 2]))) break u
                                                                                                    }
                                                                                                    e = R
                                                                                                } else R = N[X + 572 >> 2],
                                                                                                n = c[X + 576 >> 2];
                                                                                                switch (0 | n) {
                                                                                                    case 0:
                                                                                                    case 3:
                                                                                                        break o;
                                                                                                    default:
                                                                                                        break c
                                                                                                }
                                                                                            }
                                                                                            c[y + 348 >> 2] = 1;
                                                                                            break n
                                                                                        }
                                                                                        if (!(1 != (0 | n) | e != e)) {
                                                                                            if ((e = R) < w(0)) break o;
                                                                                            break i
                                                                                        }
                                                                                        if (2 != (0 | n) | e != e) break f;
                                                                                        if (M == M && !(R < w(0))) break t
                                                                                    }
                                                                                    c[y + 348 >> 2] = ae;
                                                                                    break n
                                                                                }
                                                                                e = w(NaN);f: switch (n - 1 | 0) {
                                                                                    case 1:
                                                                                        break t;
                                                                                    case 0:
                                                                                        break f;
                                                                                    default:
                                                                                        break i
                                                                                }
                                                                                e = R;
                                                                                break i
                                                                            }
                                                                            e = w(w(M * R) * w(.009999999776482582))
                                                                        }
                                                                        e = w(C + e),
                                                                        N[y + 356 >> 2] = e,
                                                                        c[y + 348 >> 2] = (fr | 2 != (0 | n)) & e == e;
                                                                        break a
                                                                    }
                                                                    N[y + 356 >> 2] = M
                                                                }
                                                                e = R
                                                            } else c[y + 348 >> 2] = 1, R = w(xr - R), N[y + 356 >> 2] = C + w(q ? R * e : R / e), R = N[572 + (X = t + (tr << 3) | 0) >> 2], n = c[X + 576 >> 2], e = N[X + 572 >> 2];
                                                            Vr(t, O, F, V, y + 344 | 0, y + 352 | 0), Vr(t, m, M, V, y + 348 | 0, y + 356 | 0);
                                                            a: {
                                                                n: {
                                                                    i: {
                                                                        switch (0 | n) {
                                                                            case 0:
                                                                            case 3:
                                                                                break i
                                                                        }
                                                                        if (!(1 != (0 | n) | e != e)) {
                                                                            if (R < w(0)) break i;
                                                                            break n
                                                                        }
                                                                        if (2 != (0 | n) | e != e) break n;
                                                                        if (!(R < w(0)) && (X = 0, rr)) break a
                                                                    }
                                                                    if (X = 0, (n = c[t + 24 >> 2] >>> 13 & 7) || (n = c[r + 24 >> 2] >>> 10 & 7), 4 != (0 | n)) break a;
                                                                    if (he(y + 24 | 0, t, m), 3 == c[y + 28 >> 2]) break a;de(y + 360 | 0, t, m),
                                                                    X = 3 != c[y + 364 >> 2];
                                                                    break a
                                                                }
                                                                X = 0
                                                            }
                                                            e = N[y + 352 >> 2], R = N[y + 356 >> 2], C = (n = O >>> 0 > 1) ? e : R, e = n ? R : e, Lr = c[y + 344 >> 2], Kr = c[y + 348 >> 2], ie = n ? Lr : Kr, Lr = n ? Kr : Lr, n = (1 ^ X) & s, or(t, C, e, 3 & h[r + 300 | 0], ie, Lr, V, Y, n, n ? 4 : 7, k, l, v, p), T = w(T + w(g - a));
                                                            a: {
                                                                if (4 & (n = h[r + 300 | 0])) X = 251 & n;
                                                                else if (X = 251 & n, n = 0, !(4 & h[t + 300 | 0])) break a;n = 4
                                                            }
                                                            if (f[r + 300 | 0] = n | X, (0 | z) == (0 | (Z = Z + 4 | 0))) break
                                                        }
                                                    } else T = w(0);
                                                    B = w(B - T)
                                                }
                                                n = h[r + 300 | 0], f[r + 300 | 0] = 251 & n | (B < w(0) ? 4 : 4 & n), R = w(Br(r, O, o) + zr(r, O)), gr = w(Tr(r, O, o) + Qr(r, O)), L = pr(r, O, o);
                                                a: if (!(B > w(0)) | 2 != (0 | cr)) T = B;
                                                    else {
                                                        T = w(0), a = w(0);
                                                        n: {
                                                            i: {
                                                                n = hr + (c[dr >> 2] << 2) | 0,
                                                                e = N[n >> 2];t: {
                                                                    if (!(t = 2139156720 == (0 | (n = c[n >> 2])))) {
                                                                        if (Z = 2140081935 == (0 | n)) break i;
                                                                        if ((X = 2141891242 == (0 | n)) | e != e) break a;
                                                                        if (Z) break i;
                                                                        if (X) break a;
                                                                        if (b(2, 536870912 + (-1073741825 & n) | 0), a = d(), !(1073741824 & n)) break t
                                                                    }
                                                                    a = w(w(vr * a) * w(.009999999776482582))
                                                                }
                                                                if (a != a) break a;a = w(0);t: if (!t) {
                                                                    if (2140081935 == (0 | n)) break i;
                                                                    t = 4276;
                                                                    f: {
                                                                        if (2141891242 != (0 | n)) {
                                                                            if (e == e) break f;
                                                                            t = 4268
                                                                        }
                                                                        switch (a = N[t >> 2], g = w(NaN), c[t + 4 >> 2] - 1 | 0) {
                                                                            case 0:
                                                                                break i;
                                                                            case 1:
                                                                                break t;
                                                                            default:
                                                                                break n
                                                                        }
                                                                    }
                                                                    if (b(2, 536870912 + (-1073741825 & n) | 0), a = d(), !(1073741824 & n)) break i
                                                                }g = w(w(vr * a) * w(.009999999776482582));
                                                                break n
                                                            }
                                                            g = a
                                                        }
                                                        if ((e = w(w(w(g - R) - gr) - w(F - B))) != e) break a;
                                                        T = Re(e, w(0))
                                                    }
                                                a: {
                                                    if (!(X = G >>> 0 <= W >>> 0)) {
                                                        for (z = c[r + 556 >> 2], D = (n = c[r + 560 >> 2] - z >> 2) >>> 0 < W >>> 0 ? W : n, Z = 0, n = W;;) {
                                                            if ((0 | n) == (0 | D)) break e;
                                                            if (t = c[z + (n << 2) >> 2], 131072 != (196608 & c[t + 24 >> 2]) && (he(tr = y + 24 | 0, t, O), Cr = c[y + 28 >> 2], de(tr, t, O), Z = ((3 == (0 | Cr)) + Z | 0) + (3 == c[y + 28 >> 2]) | 0), (0 | G) == (0 | (n = n + 1 | 0))) break
                                                        }
                                                        if (C = w(0), a = L, Z) break a
                                                    }
                                                    C = w(0),
                                                    Z = 0,
                                                    a = L;n: switch ((c[r + 24 >> 2] >>> 4 & 7) - 1 | 0) {
                                                        case 0:
                                                            C = w(T * w(.5));
                                                            break a;
                                                        case 1:
                                                            C = T;
                                                            break a;
                                                        case 2:
                                                            if (S >>> 0 < 2) break a;
                                                            a = w(L + w((fe = w(0), oe = Re(T, w(0)), ((te = T != T) ? fe : oe) / w(S - 1 >>> 0))));
                                                            break a;
                                                        case 4:
                                                            C = w(T / w(S + 1 >>> 0)), a = w(L + C);
                                                            break a;
                                                        case 3:
                                                            break n;
                                                        default:
                                                            break a
                                                    }
                                                    C = w(w(T * w(.5)) / w(S >>> 0)),
                                                    a = w(w(C + C) + L)
                                                }
                                                if (e = w(R + C), B = w(0), S = Jr(r), X) a = w(0);
                                                else {
                                                    for (z = G - 1 | 0, Zr = w(T / w(0 | Z)), R = w(0), g = w(0), n = W;;) {
                                                        if (t = c[r + 556 >> 2], c[r + 560 >> 2] - t >> 2 >>> 0 <= n >>> 0) break e;
                                                        kr(y + 24 | 0, Z = (t = c[t + (n << 2) >> 2]) + 228 | 0, 320), a = w(a - ((0 | n) == (0 | z) ? L : w(0)));
                                                        a: if (!(4194304 & (D = c[t + 24 >> 2]))) {
                                                            n: {
                                                                if (131072 == (196608 & D)) {
                                                                    if (!se(t, O)) break n;
                                                                    if (!s) break a;
                                                                    T = _r(t, O, F), x = zr(r, O), Pr = Mr(t, O, V), N[Z + (c[$ >> 2] << 2) >> 2] = Pr + w(T + x);
                                                                    break a
                                                                }
                                                                if (he(y + 360 | 0, t, O), e = w(e + (3 == c[y + 364 >> 2] ? Zr : w(-0))), s && (D = Z, Z = c[$ >> 2] << 2, N[D + Z >> 2] = e + N[Z + (y + 24 | 0) >> 2]), de(y + 360 | 0, t, O), e = w(e + (3 == c[y + 364 >> 2] ? Zr : w(-0))), !ee) {
                                                                    e = w(e + w(w(a + w(Mr(t, O, V) + Yr(t, O, V))) + N[y + 104 >> 2])), B = M;
                                                                    break a
                                                                }
                                                                if (e = w(e + w(a + w(N[(Z = t + 516 | 0) + (c[dr >> 2] << 2) >> 2] + w(Mr(t, O, V) + Yr(t, O, V))))), S) {
                                                                    if (T = Wr(t), x = Mr(t, 0, V), T = w(T + x), x = w(w(N[t + 520 >> 2] + w(Mr(t, 0, V) + Yr(t, 0, V))) - T), R = (t = R != R) | T != T ? t ? T : R : Re(R, T), !((t = g != g) | x != x)) {
                                                                        g = Re(g, x);
                                                                        break a
                                                                    }
                                                                    g = t ? x : g;
                                                                    break a
                                                                }
                                                                if (!((T = w(N[Z + (c[Q >> 2] << 2) >> 2] + w(Mr(t, m, V) + Yr(t, m, V)))) != T | (t = B != B))) {
                                                                    B = Re(B, T);
                                                                    break a
                                                                }
                                                                B = t ? T : B;
                                                                break a
                                                            }
                                                            s && (t = c[$ >> 2] << 2, T = N[t + (y + 24 | 0) >> 2], te = t + Z | 0, fe = w(C + w(T + zr(r, O))), N[te >> 2] = fe)
                                                        }
                                                        if ((0 | G) == (0 | (n = n + 1 | 0))) break
                                                    }
                                                    a = w(g + R)
                                                }
                                                if (R = S ? a : B, T = M, $r || (a = (n = (a = ur(r, m, w(K + R), Er)) != a) | (g = w(w(Br(r, m, o) + zr(r, m)) + w(Tr(r, m, o) + Qr(r, m)))) != g ? n ? g : a : Re(a, g), T = w(a - K)), a = (n = (a = ur(r, m, w(K + (re ? M : R)), Er)) != a) | (g = w(w(Br(r, m, o) + zr(r, m)) + w(Tr(r, m, o) + Qr(r, m)))) != g ? n ? g : a : Re(a, g), g = w(a - K), !(X | !s))
                                                    for (;;) {
                                                        if (n = c[r + 556 >> 2], c[r + 560 >> 2] - n >> 2 >>> 0 <= W >>> 0) break e;
                                                        n = c[n + (W << 2) >> 2];
                                                        a: if (!(4194304 & (t = c[n + 24 >> 2])))
                                                            if (131072 != (196608 & t)) {
                                                                (t = t >>> 13 & 7) || (t = c[r + 24 >> 2] >>> 10 & 7);
                                                                n: {
                                                                    i: {
                                                                        if (5 != (0 | t)) {
                                                                            if (4 == (0 | t) && (he(y + 24 | 0, n, m), t = 4, 3 != c[y + 28 >> 2])) {
                                                                                if (de(y + 360 | 0, n, m), Z = c[Q >> 2], 3 == c[y + 364 >> 2]) break i;
                                                                                R = N[572 + (Z = n + (Z << 3) | 0) >> 2];
                                                                                t: {
                                                                                    switch (0 | (t = c[Z + 576 >> 2])) {
                                                                                        case 0:
                                                                                        case 3:
                                                                                            break t
                                                                                    }
                                                                                    if (!(1 != (0 | t) | (B = N[Z + 572 >> 2]) != B)) {
                                                                                        if (a = U, R < w(0)) break t;
                                                                                        break n
                                                                                    }
                                                                                    if (a = U, rr & !(R < w(0)) | 2 != (0 | t) | B != B) break n
                                                                                }
                                                                                R = N[516 + (n + (c[dr >> 2] << 2) | 0) >> 2], a = (a = N[n + 224 >> 2]) == a ? w(w(Mr(n, m, V) + Yr(n, m, V)) + w(q ? R * a : R / a)) : g, N[y + 360 >> 2] = a, te = y, fe = w(R + w(Mr(n, O, V) + Yr(n, O, V))), N[te + 24 >> 2] = fe, c[y + 356 >> 2] = 1, c[y + 352 >> 2] = 1, Vr(n, O, F, V, y + 356 | 0, y + 24 | 0), Vr(n, m, M, V, y + 352 | 0, y + 360 | 0), R = N[y + 360 >> 2], B = N[y + 24 >> 2], a = (t = O >>> 0 > 1) ? R : B, or(n, R = t ? B : R, a, J, !((t = 0 != (0 | ir) & 512 != (896 & c[r + 24 >> 2])) & q | R != R), (q | !t) & a == a, V, Y, 1, 2, k, l, v, p), a = U;
                                                                                break n
                                                                            }
                                                                        } else t = 8 & c[r + 24 >> 2] ? 5 : 1;Z = c[Q >> 2]
                                                                    }
                                                                    if (a = N[516 + ((Z << 2) + n | 0) >> 2], R = Mr(n, m, V), B = Yr(n, m, V), he(y + 24 | 0, n, m), R = w(T - w(a + w(R + B))), 3 != c[y + 28 >> 2] || (de(y + 360 | 0, n, m), 3 != c[y + 364 >> 2])) {
                                                                        if (de(y + 24 | 0, n, m), a = U, 3 != c[y + 28 >> 2])
                                                                            if (he(y + 24 | 0, n, m), 3 != c[y + 28 >> 2]) {
                                                                                switch (t - 1 | 0) {
                                                                                    case 1:
                                                                                        a = w(U + w(R * w(.5)));
                                                                                        break n;
                                                                                    case 0:
                                                                                        break n
                                                                                }
                                                                                a = w(U + R)
                                                                            } else a = w(U + (fe = w(0), oe = Re(R, w(0)), (te = R != R) ? fe : oe))
                                                                    } else a = w(R * w(.5)),
                                                                    a = w(U + (fe = w(0), oe = Re(a, w(0)), (te = a != a) ? fe : oe))
                                                                }
                                                                n = n + (c[H >> 2] << 2) | 0, N[n + 228 >> 2] = a + w(br + N[n + 228 >> 2])
                                                            } else {
                                                                if (t = c[H >> 2], se(n, m) && (a = w(w(_r(n, m, M) + zr(r, m)) + Mr(n, m, V)), N[228 + (n + (t << 2) | 0) >> 2] = a, a == a)) break a;
                                                                te = n + (t << 2) | 0, fe = w(zr(r, m) + Mr(n, m, V)), N[te + 228 >> 2] = fe
                                                            }
                                                        if ((0 | (W = W + 1 | 0)) == (0 | G)) break
                                                    }
                                                if (a = w((P ? Dr : w(0)) + g), mr = (n = mr != mr) | (e = w(gr + e)) != e ? n ? e : mr : Re(mr, e), br = w(br + a), n = P + 1 | 0, W = G, !(G >>> 0 < er >>> 0)) break
                                            }
                                            a: if (s && (ir || Jr(r))) {
                                                R = w(0);
                                                n: {
                                                    i: if (M == M) {
                                                        e = w(M - br);
                                                        t: switch ((c[r + 24 >> 2] >>> 7 & 7) - 2 | 0) {
                                                            case 0:
                                                                U = w(U + w(e * w(.5)));
                                                                break i;
                                                            case 2:
                                                                if (!(M > br)) break i;
                                                                R = w(e / w(n >>> 0));
                                                                break i;
                                                            case 5:
                                                                if (M > br) {
                                                                    if (U = w(U + w(e / w(n << 1 >>> 0))), n >>> 0 < 2) break i;
                                                                    R = w(e / w(n >>> 0));
                                                                    break n
                                                                }
                                                                U = w(U + w(e * w(.5)));
                                                                break i;
                                                            case 4:
                                                                if (!(M > br) | n >>> 0 < 2) break i;
                                                                R = w(e / w(P >>> 0));
                                                                break n;
                                                            case 1:
                                                                break t;
                                                            default:
                                                                break i
                                                        }
                                                        U = w(U + e)
                                                    }if (!n) break a
                                                }
                                                for (Z = 0, n = 0, t = 0;;) {
                                                    if (B = w(0), a = w(0), e = w(0), g = w(0), G = n, n >>> 0 < er >>> 0) {
                                                        n: {
                                                            for (;;) {
                                                                if (t = c[r + 556 >> 2], c[r + 560 >> 2] - t >> 2 >>> 0 <= G >>> 0) break e;
                                                                if (W = c[t + (G << 2) >> 2], !(4194304 & (X = c[W + 24 >> 2]) | 131072 == (196608 & X))) {
                                                                    if (t = G, c[W + 548 >> 2] != (0 | Z)) break n;
                                                                    (e = N[516 + (W + (c[Q >> 2] << 2) | 0) >> 2]) >= w(0) && (a = (t = a != a) | (e = w(e + w(Mr(W, m, V) + Yr(W, m, V)))) != e ? t ? e : a : Re(a, e)), (t = X >>> 13 & 7) || (t = c[r + 24 >> 2] >>> 10 & 7), !(8 & h[r + 24 | 0]) | 5 != (0 | t) || (e = Wr(W), T = Mr(W, 0, V), e = w(e + T), T = w(w(N[W + 520 >> 2] + w(Mr(W, 0, V) + Yr(W, 0, V))) - e), t = a != a, g = (W = g != g) | e != e ? W ? e : g : Re(g, e), B = (W = B != B) | T != T ? W ? T : B : Re(B, T), a = t | (e = w(g + B)) != e ? t ? e : a : Re(a, e))
                                                                }
                                                                if ((0 | er) == (0 | (G = G + 1 | 0))) break
                                                            }
                                                            t = er
                                                        }
                                                        e = a
                                                    }
                                                    if (T = w(U + (Z ? Dr : w(0))), a = w(R + e), U = w(T + a), n >>> 0 < t >>> 0)
                                                        for (L = w(T + g);;) {
                                                            if (G = c[r + 556 >> 2], c[r + 560 >> 2] - G >> 2 >>> 0 <= n >>> 0) break e;
                                                            W = c[G + (n << 2) >> 2];
                                                            n: if (!(4194304 & (G = c[W + 24 >> 2]) | 131072 == (196608 & G))) {
                                                                (G = G >>> 13 & 7) || (G = c[r + 24 >> 2] >>> 10 & 7);
                                                                i: {
                                                                    t: switch (G - 1 | 0) {
                                                                        case 4:
                                                                            if (8 & h[r + 24 | 0]) break i;
                                                                        case 0:
                                                                            e = Mr(W, m, V), N[228 + (W + (c[H >> 2] << 2) | 0) >> 2] = T + e;
                                                                            break n;
                                                                        case 2:
                                                                            e = Yr(W, m, V), N[(G = W + 228 | 0) + (c[H >> 2] << 2) >> 2] = w(U - e) - N[288 + (G + (c[Q >> 2] << 2) | 0) >> 2];
                                                                            break n;
                                                                        case 1:
                                                                            N[(G = W + 228 | 0) + (c[H >> 2] << 2) >> 2] = T + w(w(a - N[288 + (G + (c[Q >> 2] << 2) | 0) >> 2]) * w(.5));
                                                                            break n;
                                                                        case 3:
                                                                            break t;
                                                                        default:
                                                                            break n
                                                                    }
                                                                    e = Mr(W, m, V),
                                                                    N[228 + (W + (c[H >> 2] << 2) | 0) >> 2] = T + e,
                                                                    X = W + (c[Q >> 2] << 3) | 0,
                                                                    e = N[(G = X) + 572 >> 2];t: {
                                                                        switch (0 | (G = c[G + 576 >> 2])) {
                                                                            case 0:
                                                                            case 3:
                                                                                break t
                                                                        }
                                                                        if (!(1 != (0 | G) | (g = N[X + 572 >> 2]) != g)) {
                                                                            if (e < w(0)) break t;
                                                                            break n
                                                                        }
                                                                        if (rr & !(e < w(0)) | 2 != (0 | G) | g != g) break n
                                                                    }
                                                                    O >>> 0 >= 2 ? (B = a, e = N[W + 516 >> 2], g = w(e + w(Mr(W, O, V) + Yr(W, O, V)))) : (B = w(N[W + 520 >> 2] + w(Mr(W, m, V) + Yr(W, m, V))), e = N[W + 516 >> 2], g = a);t: {
                                                                        f: {
                                                                            if (!(g != g | e != e)) {
                                                                                if (w(E(w(g - e))) < w(9999999747378752e-20)) break f;
                                                                                break t
                                                                            }
                                                                            if (g == g | e == e) break t
                                                                        }
                                                                        if (!((G = (e = N[W + 520 >> 2]) != e) | B != B)) {
                                                                            if (!(w(E(w(B - e))) < w(9999999747378752e-20))) break t;
                                                                            break n
                                                                        }
                                                                        if (B != B && G) break n
                                                                    }
                                                                    or(W, g, B, J, 1, 1, V, Y, 1, 3, k, l, v, p);
                                                                    break n
                                                                }
                                                                te = W, fe = w(w(L - Wr(W)) + _r(W, 0, M)), N[te + 232 >> 2] = fe
                                                            }
                                                            if ((0 | t) == (0 | (n = n + 1 | 0))) break
                                                        }
                                                    if (G = (0 | Z) != (0 | P), Z = Z + 1 | 0, n = t, !G) break
                                                }
                                            }Z = r + 516 | 0,
                                            e = (n = (e = ur(r, 2, Sr, o)) != e) | (a = w(w(Br(r, 2, o) + zr(r, 2)) + w(Tr(r, 2, o) + Qr(r, 2)))) != a ? n ? a : e : Re(e, a),
                                            N[Z >> 2] = e,
                                            e = (n = (e = ur(r, 0, Hr, u)) != e) | (a = w(w(Br(r, 0, o) + zr(r, 0)) + w(Tr(r, 0, o) + Qr(r, 0)))) != a ? n ? a : e : Re(e, a),
                                            N[r + 520 >> 2] = e;a: {
                                                n: if (cr && 2 == (0 | (n = c[r + 24 >> 2] >>> 20 & 3)) | 2 != (0 | cr)) {
                                                    if (2 != (0 | cr) | 2 != (0 | n)) break a;
                                                    e = (n = (e = (n = (a = w(nr + F)) != a) | (e = ur(r, O, mr, vr)) != e ? n ? e : a : Ge(a, e)) != e) | nr != nr ? n ? nr : e : Re(e, nr)
                                                } else {
                                                    if (!((n = (e = ur(r, O, mr, vr)) != e) | (a = w(w(Br(r, O, o) + zr(r, O)) + w(Tr(r, O, o) + Qr(r, O)))) != a)) {
                                                        e = Re(e, a);
                                                        break n
                                                    }
                                                    e = n ? a : e
                                                }N[Z + (c[dr >> 2] << 2) >> 2] = e
                                            }
                                            a: {
                                                n: if (_ && (t = 2 != (0 | _)) | 2 == (0 | (n = c[r + 24 >> 2] >>> 20 & 3))) {
                                                    if (t | 2 != (0 | n)) break a;
                                                    e = (n = (e = (n = (a = w(K + M)) != a) | (e = ur(r, m, w(K + br), Er)) != e ? n ? e : a : Ge(a, e)) != e) | K != K ? n ? K : e : Re(e, K)
                                                } else {
                                                    if (!((n = (e = ur(r, m, w(K + br), Er)) != e) | (a = w(w(Br(r, m, o) + zr(r, m)) + w(Tr(r, m, o) + Qr(r, m)))) != a)) {
                                                        e = Re(e, a);
                                                        break n
                                                    }
                                                    e = n ? a : e
                                                }N[Z + (c[Q >> 2] << 2) >> 2] = e
                                            }
                                            if (s) {
                                                if (n = c[r + 560 >> 2], W = c[r + 556 >> 2], 524288 == (786432 & c[r + 24 >> 2])) {
                                                    for (t = er >>> 0 <= 1 ? 1 : er, s = n - W >> 2, n = 0; G = 0, G = n >>> 0 < s >>> 0 ? c[(n << 2) + W >> 2] : G, 131072 != (196608 & c[G + 24 >> 2]) && (X = (G = G + 228 | 0) + (c[H >> 2] << 2) | 0, P = c[Q >> 2] << 2, N[X >> 2] = w(N[P + Z >> 2] - N[X >> 2]) - N[288 + (G + P | 0) >> 2]), (0 | t) != (0 | (n = n + 1 | 0)););
                                                    W = c[r + 556 >> 2], n = c[r + 560 >> 2]
                                                }
                                                if ((0 | n) != (0 | W))
                                                    for (P = 0 != (0 | (O >>> 0 > 1 ? cr : i));;) {
                                                        s = c[W >> 2];
                                                        a: if (131072 == (4390912 & c[s + 24 >> 2])) {
                                                            a = V, F = Y, h[c[r + 568 >> 2] + 21 | 0] && (F = N[r + 520 >> 2], a = N[r + 516 >> 2]), i = c[r + 24 >> 2] >>> 2 & 3;
                                                            n: {
                                                                i: {
                                                                    if (2 == (0 | J)) {
                                                                        t = 0, G = 3;
                                                                        t: switch (i - 2 | 0) {
                                                                            case 0:
                                                                                break n;
                                                                            case 1:
                                                                                break t;
                                                                            default:
                                                                                break i
                                                                        }
                                                                        G = 2;
                                                                        break n
                                                                    }
                                                                    if (t = 0, !(i >>> 0 <= 1)) {
                                                                        G = i;
                                                                        break n
                                                                    }
                                                                }
                                                                G = i,
                                                                t = lr
                                                            }
                                                            u = w(Mr(s, 2, a) + Yr(s, 2, a)), R = Mr(s, 0, a), B = Yr(s, 0, a), e = N[s + 572 >> 2];
                                                            n: {
                                                                i: {
                                                                    switch (0 | (i = c[s + 576 >> 2])) {
                                                                        case 0:
                                                                        case 3:
                                                                            break i
                                                                    }
                                                                    t: {
                                                                        if (!(1 != (0 | i) | (o = N[s + 572 >> 2]) != o)) {
                                                                            if (g = e, !(e < w(0))) break t;
                                                                            break i
                                                                        }
                                                                        f: {
                                                                            if (2 != (0 | i) | o != o) {
                                                                                g = w(NaN);
                                                                                o: switch (i - 1 | 0) {
                                                                                    case 1:
                                                                                        break f;
                                                                                    case 0:
                                                                                        break o;
                                                                                    default:
                                                                                        break t
                                                                                }
                                                                                g = e;
                                                                                break t
                                                                            }
                                                                            if (a != a | e < w(0)) break i
                                                                        }
                                                                        g = w(w(a * e) * w(.009999999776482582))
                                                                    }
                                                                    g = w(u + g);
                                                                    break n
                                                                }
                                                                g = w(NaN),
                                                                se(s, 2) && be(s, 2) && (g = (i = (e = ur(s, 2, w(w(N[r + 516 >> 2] - w(zr(r, 2) + Qr(r, 2))) - w(_r(s, 2, a) + Or(s, 2, a))), a)) != e) | (o = w(w(Br(s, 2, a) + zr(s, 2)) + w(Tr(s, 2, a) + Qr(s, 2)))) != o ? i ? o : e : Re(e, o))
                                                            }
                                                            B = w(R + B);
                                                            n: {
                                                                i: {
                                                                    t: {
                                                                        f: {
                                                                            o: {
                                                                                c: {
                                                                                    u: {
                                                                                        X = g != g,
                                                                                        o = N[s + 580 >> 2];b: {
                                                                                            s: {
                                                                                                switch (0 | (i = c[s + 584 >> 2])) {
                                                                                                    case 0:
                                                                                                    case 3:
                                                                                                        break s
                                                                                                }
                                                                                                k: {
                                                                                                    if (!(1 != (0 | i) | (e = N[s + 580 >> 2]) != e)) {
                                                                                                        if (!((e = o) < w(0))) break k;
                                                                                                        break s
                                                                                                    }
                                                                                                    A: {
                                                                                                        if (2 != (0 | i) | e != e) {
                                                                                                            e = w(NaN);
                                                                                                            l: switch (i - 1 | 0) {
                                                                                                                case 1:
                                                                                                                    break A;
                                                                                                                case 0:
                                                                                                                    break l;
                                                                                                                default:
                                                                                                                    break k
                                                                                                            }
                                                                                                            e = o;
                                                                                                            break k
                                                                                                        }
                                                                                                        if (F != F | o < w(0)) break s
                                                                                                    }
                                                                                                    e = w(w(F * o) * w(.009999999776482582))
                                                                                                }
                                                                                                e = w(B + e);
                                                                                                break b
                                                                                            }
                                                                                            if (!se(s, 0) || !be(s, 0)) {
                                                                                                if (e = w(NaN), g == g) break u;
                                                                                                break t
                                                                                            }
                                                                                            e = (i = (e = ur(s, 0, w(w(N[r + 520 >> 2] - w(zr(r, 0) + Qr(r, 0))) - w(_r(s, 0, F) + Or(s, 0, F))), F)) != e) | (o = w(w(Br(s, 0, a) + zr(s, 0)) + w(Tr(s, 0, a) + Qr(s, 0)))) != o ? i ? o : e : Re(e, o)
                                                                                        }
                                                                                        if ((0 | X) == (e != e | 0)) break o;
                                                                                        if ((R = N[s + 224 >> 2]) != R) break o;
                                                                                        if (g != g) {
                                                                                            g = w(w(w(e - B) * R) + u);
                                                                                            break o
                                                                                        }
                                                                                        if (e == e) break o;
                                                                                        break c
                                                                                    }
                                                                                    if ((R = N[s + 224 >> 2]) != R) break f
                                                                                }
                                                                                e = w(B + w(w(g - u) / R))
                                                                            }
                                                                            if (g != g) break t;
                                                                            if (e == e) break n
                                                                        }
                                                                        i = 0;
                                                                        break i
                                                                    }
                                                                    i = 1
                                                                }
                                                                X = a > w(0),
                                                                S = i & P & G >>> 0 < 2,
                                                                i ^= 1,
                                                                or(s, o = S && X ? a : g, e, J, S && X ? 2 : i, e == e, o, e, 0, 6, k, l, v, p),
                                                                g = w(N[s + 516 >> 2] + Ye(s, 2, a)),
                                                                e = w(N[s + 520 >> 2] + Ye(s, 0, a))
                                                            }
                                                            or(s, g, e, J, 1, 1, g, e, 1, 1, k, l, v, p), u = (i = G >>> 0 < 2) ? a : F, X = c[r + 568 >> 2], o = h[X + 22 | 0] ? u : a;
                                                            n: {
                                                                if (!be(s, G) || se(s, G))
                                                                    if (se(s, G) | 16 != (112 & c[r + 24 >> 2]))
                                                                        if (se(s, G) | 32 != (112 & c[r + 24 >> 2])) {
                                                                            if (!h[X + 21 | 0]) break n;
                                                                            if (!se(s, G)) break n;
                                                                            e = N[Z + (c[4252 + (G << 2) >> 2] << 2) >> 2], e = w(w(_r(s, G, e) + zr(r, G)) + Mr(s, G, e))
                                                                        } else i = c[4252 + (G << 2) >> 2] << 2, e = w(N[i + Z >> 2] - N[516 + (i + s | 0) >> 2]);
                                                                else i = c[4252 + (G << 2) >> 2] << 2,
                                                                e = w(w(N[i + Z >> 2] - N[516 + (i + s | 0) >> 2]) * w(.5));
                                                                else S = c[4252 + (G << 2) >> 2] << 2,
                                                                e = w(w(w(w(N[S + Z >> 2] - N[516 + (s + S | 0) >> 2]) - Qr(r, G)) - Yr(s, G, o)) - Or(s, G, i ? F : a));N[228 + (s + (c[4220 + (G << 2) >> 2] << 2) | 0) >> 2] = e
                                                            }
                                                            n: if (!be(s, t) || se(s, t))
                                                                if (se(s, t) || ((i = c[s + 24 >> 2] >>> 13 & 7) || (i = c[r + 24 >> 2] >>> 10 & 7), 2 != (0 | i))) {
                                                                    i: if (!se(s, t)) {
                                                                        G = c[s + 24 >> 2] >>> 13 & 7, i = c[r + 24 >> 2];
                                                                        t: {
                                                                            if (!(5 != (0 | (G = G || i >>> 10 & 7)) | 8 & i)) {
                                                                                if (524288 == (786432 & i)) break t;
                                                                                break i
                                                                            }
                                                                            if ((524288 == (786432 & i) | 0) == (3 == (0 | G) | 0)) break i
                                                                        }
                                                                        i = c[4252 + (t << 2) >> 2] << 2, e = w(N[i + Z >> 2] - N[516 + (i + s | 0) >> 2]);
                                                                        break n
                                                                    }if (!h[X + 21 | 0]) break a;
                                                                    if (!se(s, t)) break a;e = N[Z + (c[4252 + (t << 2) >> 2] << 2) >> 2],
                                                                    e = w(w(_r(s, t, e) + zr(r, t)) + Mr(s, t, e))
                                                                }
                                                            else i = c[4252 + (t << 2) >> 2] << 2, e = w(w(N[i + Z >> 2] - N[516 + (i + s | 0) >> 2]) * w(.5));
                                                            else i = c[4252 + (t << 2) >> 2] << 2, e = w(w(w(w(N[i + Z >> 2] - N[516 + (i + s | 0) >> 2]) - Qr(r, t)) - Yr(s, t, o)) - Or(s, t, u));
                                                            N[228 + (s + (c[4220 + (t << 2) >> 2] << 2) | 0) >> 2] = e
                                                        }
                                                        if ((0 | (W = W + 4 | 0)) == (0 | n)) break
                                                    }
                                                if (1 & (m | O))
                                                    for (t = 1 & m, s = 1 & O, k = er >>> 0 <= 1 ? 1 : er, l = 4236 + (m << 2) | 0, v = 4236 + (O << 2) | 0, p = c[r + 556 >> 2], m = c[r + 560 >> 2] - p >> 2, n = 0;;) {
                                                        if ((0 | n) == (0 | m)) break e;
                                                        if (r = c[p + (n << 2) >> 2], 64 & h[r + 26 | 0] || (s && (i = r + 228 | 0, G = c[dr >> 2] << 2, N[i + (c[v >> 2] << 2) >> 2] = w(N[G + Z >> 2] - N[288 + (i + G | 0) >> 2]) - N[i + (c[$ >> 2] << 2) >> 2]), t && (r = r + 228 | 0, i = c[Q >> 2] << 2, N[r + (c[l >> 2] << 2) >> 2] = w(N[i + Z >> 2] - N[288 + (r + i | 0) >> 2]) - N[r + (c[H >> 2] << 2) >> 2])), (0 | k) == (0 | (n = n + 1 | 0))) break
                                                    }
                                            }
                                            if (!j) break r;Gr(j);
                                            break r
                                        }
                                        I(),
                                        A()
                                    }
                                    ar = y + 384 | 0
                                }

                                function tr() {
                                    var r = 0,
                                        e = 0;
                                    T(6952, 6953, 6954, 0, 4284, 17, 4287, 0, 4287, 0, 2528, 4289, 18), r = we(8), c[r >> 2] = 8, c[r + 4 >> 2] = 1, Z(6952, 2873, 6, 4304, 4328, 19, 0 | r, 1), T(6956, 6957, 6958, 6952, 4284, 20, 4284, 21, 4284, 22, 2e3, 4289, 23), r = we(4), c[r >> 2] = 24, Z(6956, 2358, 2, 4336, 4344, 25, 0 | r, 0), V(6952, 1397, 2, 4348, 4356, 26, 27), V(6952, 2978, 3, 4436, 4448, 28, 29), T(6976, 6977, 6978, 0, 4284, 30, 4287, 0, 4287, 0, 2544, 4289, 31), r = we(8), c[r >> 2] = 8, c[r + 4 >> 2] = 1, Z(6976, 3244, 2, 4456, 4344, 32, 0 | r, 1), T(6979, 6980, 6981, 6976, 4284, 33, 4284, 34, 4284, 35, 2023, 4289, 36), r = we(4), c[r >> 2] = 37, Z(6979, 2358, 2, 4464, 4344, 38, 0 | r, 0), V(6976, 1397, 2, 4472, 4356, 39, 40), V(6976, 2978, 3, 4436, 4448, 28, 41), T(6982, 6983, 6984, 0, 4284, 42, 4287, 0, 4287, 0, 2812, 4289, 43), S(6982, 1, 4520, 4284, 44, 45), V(6982, 2866, 1, 4520, 4284, 44, 45), V(6982, 1128, 2, 4524, 4344, 46, 47), r = we(8), c[r + 4 >> 2] = 0, c[r >> 2] = 48, Z(6982, 3185, 4, 4544, 4560, 49, 0 | r, 0), r = we(8), c[r + 4 >> 2] = 0, c[r >> 2] = 50, Z(6982, 1980, 3, 4568, 4580, 51, 0 | r, 0), r = we(8), c[r + 4 >> 2] = 0, c[r >> 2] = 52, Z(6982, 1951, 3, 4588, 4600, 53, 0 | r, 0), r = we(8), c[r + 4 >> 2] = 0, c[r >> 2] = 54, Z(6982, 1799, 3, 4588, 4600, 53, 0 | r, 0), r = we(8), c[r + 4 >> 2] = 0, c[r >> 2] = 55, Z(6982, 3215, 3, 4608, 4448, 56, 0 | r, 0), r = we(8), c[r + 4 >> 2] = 0, c[r >> 2] = 57, Z(6982, 1925, 2, 4620, 4356, 58, 0 | r, 0), r = we(8), c[r + 4 >> 2] = 0, c[r >> 2] = 59, Z(6982, 1784, 2, 4620, 4356, 58, 0 | r, 0), F(6985, 1270, 4628, 60, 4289, 61), Be(1731, 0), Be(1611, 8), Be(2144, 16), Be(2454, 24), Be(2560, 32), Be(1617, 40), L(6985), F(6955, 2849, 4628, 62, 4289, 63), Ve(2560, 0), Ve(1617, 8), L(6955), F(6986, 2860, 4628, 64, 4289, 65), r = we(4), c[r >> 2] = 8, e = we(4), c[e >> 2] = 8, O(6986, 2854, 7018, 4630, 66, 0 | r, 7018, 4634, 67, 0 | e), r = we(4), c[r >> 2] = 0, e = we(4), c[e >> 2] = 0, O(6986, 1606, 7011, 4356, 68, 0 | r, 7011, 4600, 69, 0 | e), L(6986), T(6987, 6988, 6989, 0, 4284, 70, 4287, 0, 4287, 0, 2973, 4289, 71), S(6987, 1, 4640, 4284, 72, 73), V(6987, 1592, 1, 4640, 4284, 72, 73), V(6987, 2802, 2, 4644, 4356, 74, 75), V(6987, 1128, 2, 4652, 4344, 76, 77), r = we(8), c[r + 4 >> 2] = 0, c[r >> 2] = 78, Z(6987, 1752, 2, 4652, 4344, 79, 0 | r, 0), r = we(8), c[r + 4 >> 2] = 0, c[r >> 2] = 80, Z(6987, 2956, 3, 4660, 4600, 81, 0 | r, 0), r = we(8), c[r + 4 >> 2] = 0, c[r >> 2] = 82, Z(6987, 2881, 3, 4672, 4600, 83, 0 | r, 0), r = we(8), c[r + 4 >> 2] = 0, c[r >> 2] = 84, Z(6987, 2334, 4, 4688, 4704, 85, 0 | r, 0), r = we(8), c[r + 4 >> 2] = 0, c[r >> 2] = 86, Z(6987, 1484, 4, 4688, 4704, 85, 0 | r, 0), r = we(8), c[r + 4 >> 2] = 0, c[r >> 2] = 87, Z(6987, 1355, 3, 4672, 4600, 83, 0 | r, 0), r = we(8), c[r + 4 >> 2] = 0, c[r >> 2] = 88, Z(6987, 1817, 3, 4672, 4600, 83, 0 | r, 0), r = we(8), c[r + 4 >> 2] = 0, c[r >> 2] = 89, Z(6987, 2823, 3, 4672, 4600, 83, 0 | r, 0), r = we(8), c[r + 4 >> 2] = 0, c[r >> 2] = 90, Z(6987, 2378, 3, 4672, 4600, 83, 0 | r, 0), r = we(8), c[r + 4 >> 2] = 0, c[r >> 2] = 91, Z(6987, 2163, 3, 4672, 4600, 83, 0 | r, 0), r = we(8), c[r + 4 >> 2] = 0, c[r >> 2] = 92, Z(6987, 1319, 3, 4672, 4600, 83, 0 | r, 0), r = we(8), c[r + 4 >> 2] = 0, c[r >> 2] = 93, Z(6987, 2412, 4, 4688, 4704, 85, 0 | r, 0), r = we(8), c[r + 4 >> 2] = 0, c[r >> 2] = 94, Z(6987, 1503, 4, 4688, 4704, 85, 0 | r, 0), r = we(8), c[r + 4 >> 2] = 0, c[r >> 2] = 95, Z(6987, 2235, 3, 4672, 4600, 83, 0 | r, 0), r = we(8), c[r + 4 >> 2] = 0, c[r >> 2] = 96, Z(6987, 1219, 3, 4672, 4600, 83, 0 | r, 0), r = we(8), c[r + 4 >> 2] = 0, c[r >> 2] = 97, Z(6987, 1136, 3, 4672, 4600, 83, 0 | r, 0), r = we(8), c[r + 4 >> 2] = 0, c[r >> 2] = 98, Z(6987, 1158, 3, 4712, 4634, 99, 0 | r, 0), r = we(8), c[r + 4 >> 2] = 0, c[r >> 2] = 100, Z(6987, 1845, 3, 4712, 4634, 99, 0 | r, 0), r = we(8), c[r + 4 >> 2] = 0, c[r >> 2] = 101, Z(6987, 1464, 3, 4712, 4634, 99, 0 | r, 0), r = we(8), c[r + 4 >> 2] = 0, c[r >> 2] = 102, Z(6987, 2218, 2, 4652, 4344, 79, 0 | r, 0), r = we(8), c[r + 4 >> 2] = 0, c[r >> 2] = 103, Z(6987, 1195, 3, 4712, 4634, 99, 0 | r, 0), r = we(8), c[r + 4 >> 2] = 0, c[r >> 2] = 104, Z(6987, 2500, 3, 4712, 4634, 99, 0 | r, 0), r = we(8), c[r + 4 >> 2] = 0, c[r >> 2] = 105, Z(6987, 2590, 3, 4712, 4634, 99, 0 | r, 0), r = we(8), c[r + 4 >> 2] = 0, c[r >> 2] = 106, Z(6987, 1539, 3, 4712, 4634, 99, 0 | r, 0), r = we(8), c[r + 4 >> 2] = 0, c[r >> 2] = 107, Z(6987, 2249, 2, 4652, 4344, 79, 0 | r, 0), r = we(8), c[r + 4 >> 2] = 0, c[r >> 2] = 108, Z(6987, 1650, 3, 4712, 4634, 99, 0 | r, 0), r = we(8), c[r + 4 >> 2] = 0, c[r >> 2] = 109, Z(6987, 1427, 3, 4712, 4634, 99, 0 | r, 0), r = we(8), c[r + 4 >> 2] = 0, c[r >> 2] = 110, Z(6987, 2204, 2, 4652, 4344, 79, 0 | r, 0), r = we(8), c[r + 4 >> 2] = 0, c[r >> 2] = 111, Z(6987, 2608, 3, 4712, 4634, 99, 0 | r, 0), r = we(8), c[r + 4 >> 2] = 0, c[r >> 2] = 112, Z(6987, 1555, 3, 4712, 4634, 99, 0 | r, 0), r = we(8), c[r + 4 >> 2] = 0, c[r >> 2] = 113, Z(6987, 1670, 3, 4712, 4634, 99, 0 | r, 0), r = we(8), c[r + 4 >> 2] = 0, c[r >> 2] = 114, Z(6987, 1444, 3, 4712, 4634, 99, 0 | r, 0), r = we(8), c[r + 4 >> 2] = 0, c[r >> 2] = 115, Z(6987, 2566, 3, 4712, 4634, 99, 0 | r, 0), r = we(8), c[r + 4 >> 2] = 0, c[r >> 2] = 116, Z(6987, 1520, 3, 4712, 4634, 99, 0 | r, 0), r = we(8), c[r + 4 >> 2] = 0, c[r >> 2] = 117, Z(6987, 1624, 3, 4712, 4634, 99, 0 | r, 0), r = we(8), c[r + 4 >> 2] = 0, c[r >> 2] = 118, Z(6987, 1407, 3, 4712, 4634, 99, 0 | r, 0), r = we(8), c[r + 4 >> 2] = 0, c[r >> 2] = 119, Z(6987, 2304, 3, 4712, 4634, 99, 0 | r, 0), r = we(8), c[r + 4 >> 2] = 0, c[r >> 2] = 120, Z(6987, 2092, 4, 4688, 4704, 85, 0 | r, 0), r = we(8), c[r + 4 >> 2] = 0, c[r >> 2] = 121, Z(6987, 2718, 4, 4688, 4704, 85, 0 | r, 0), r = we(8), c[r + 4 >> 2] = 0, c[r >> 2] = 122, Z(6987, 1574, 4, 4688, 4704, 85, 0 | r, 0), r = we(8), c[r + 4 >> 2] = 0, c[r >> 2] = 123, Z(6987, 2187, 4, 4688, 4704, 85, 0 | r, 0), r = we(8), c[r + 4 >> 2] = 0, c[r >> 2] = 124, Z(6987, 2897, 2, 4724, 4356, 125, 0 | r, 0), r = we(8), c[r + 4 >> 2] = 0, c[r >> 2] = 126, Z(6987, 2346, 3, 4732, 4448, 127, 0 | r, 0), r = we(8), c[r + 4 >> 2] = 0, c[r >> 2] = 128, Z(6987, 1371, 2, 4724, 4356, 125, 0 | r, 0), r = we(8), c[r + 4 >> 2] = 0, c[r >> 2] = 129, Z(6987, 1831, 2, 4724, 4356, 125, 0 | r, 0), r = we(8), c[r + 4 >> 2] = 0, c[r >> 2] = 130, Z(6987, 2836, 2, 4724, 4356, 125, 0 | r, 0), r = we(8), c[r + 4 >> 2] = 0, c[r >> 2] = 131, Z(6987, 2395, 2, 4724, 4356, 125, 0 | r, 0), r = we(8), c[r + 4 >> 2] = 0, c[r >> 2] = 132, Z(6987, 2175, 2, 4724, 4356, 125, 0 | r, 0), r = we(8), c[r + 4 >> 2] = 0, c[r >> 2] = 133, Z(6987, 1337, 2, 4724, 4356, 125, 0 | r, 0), r = we(8), c[r + 4 >> 2] = 0, c[r >> 2] = 134, Z(6987, 2422, 3, 4732, 4448, 127, 0 | r, 0), r = we(8), c[r + 4 >> 2] = 0, c[r >> 2] = 135, Z(6987, 1858, 2, 4744, 4356, 136, 0 | r, 0), r = we(8), c[r + 4 >> 2] = 0, c[r >> 2] = 137, Z(6987, 1207, 2, 4752, 4630, 138, 0 | r, 0), r = we(8), c[r + 4 >> 2] = 0, c[r >> 2] = 139, Z(6987, 2514, 2, 4752, 4630, 138, 0 | r, 0), r = we(8), c[r + 4 >> 2] = 0, c[r >> 2] = 140, Z(6987, 2599, 2, 4744, 4356, 136, 0 | r, 0), r = we(8), c[r + 4 >> 2] = 0, c[r >> 2] = 141, Z(6987, 1660, 2, 4744, 4356, 136, 0 | r, 0), r = we(8), c[r + 4 >> 2] = 0, c[r >> 2] = 142, Z(6987, 2620, 2, 4744, 4356, 136, 0 | r, 0), r = we(8), c[r + 4 >> 2] = 0, c[r >> 2] = 143, Z(6987, 1683, 2, 4744, 4356, 136, 0 | r, 0), r = we(8), c[r + 4 >> 2] = 0, c[r >> 2] = 144, Z(6987, 2578, 2, 4744, 4356, 136, 0 | r, 0), r = we(8), c[r + 4 >> 2] = 0, c[r >> 2] = 145, Z(6987, 1637, 2, 4744, 4356, 136, 0 | r, 0), r = we(8), c[r + 4 >> 2] = 0, c[r >> 2] = 146, Z(6987, 2319, 2, 4752, 4630, 138, 0 | r, 0), r = we(8), c[r + 4 >> 2] = 0, c[r >> 2] = 147, Z(6987, 2102, 3, 4760, 4772, 148, 0 | r, 0), r = we(8), c[r + 4 >> 2] = 0, c[r >> 2] = 149, Z(6987, 1231, 2, 4724, 4356, 125, 0 | r, 0), r = we(8), c[r + 4 >> 2] = 0, c[r >> 2] = 150, Z(6987, 1147, 2, 4724, 4356, 125, 0 | r, 0), r = we(8), c[r + 4 >> 2] = 0, c[r >> 2] = 151, Z(6987, 2729, 3, 4732, 4448, 127, 0 | r, 0), r = we(8), c[r + 4 >> 2] = 0, c[r >> 2] = 152, Z(6987, 2194, 3, 4780, 4792, 153, 0 | r, 0), r = we(8), c[r + 4 >> 2] = 0, c[r >> 2] = 154, Z(6987, 2985, 4, 4800, 4560, 155, 0 | r, 0), r = we(8), c[r + 4 >> 2] = 0, c[r >> 2] = 156, Z(6987, 3006, 3, 4816, 4600, 157, 0 | r, 0), r = we(8), c[r + 4 >> 2] = 0, c[r >> 2] = 158, Z(6987, 1292, 2, 4828, 4356, 159, 0 | r, 0), r = we(8), c[r + 4 >> 2] = 0, c[r >> 2] = 160, Z(6987, 1387, 2, 4836, 4356, 161, 0 | r, 0), r = we(8), c[r + 4 >> 2] = 0, c[r >> 2] = 162, Z(6987, 2997, 3, 4844, 4448, 163, 0 | r, 0), r = we(8), c[r + 4 >> 2] = 0, c[r >> 2] = 164, Z(6987, 2913, 2, 4856, 4356, 165, 0 | r, 0), r = we(8), c[r + 4 >> 2] = 0, c[r >> 2] = 166, Z(6987, 2933, 3, 4864, 4600, 167, 0 | r, 0), r = we(8), c[r + 4 >> 2] = 0, c[r >> 2] = 168, Z(6987, 3308, 3, 4876, 4600, 169, 0 | r, 0), r = we(8), c[r + 4 >> 2] = 0, c[r >> 2] = 170, Z(6987, 3306, 2, 4652, 4344, 79, 0 | r, 0), r = we(8), c[r + 4 >> 2] = 0, c[r >> 2] = 171, Z(6987, 3325, 3, 4888, 4600, 172, 0 | r, 0), r = we(8), c[r + 4 >> 2] = 0, c[r >> 2] = 173, Z(6987, 3323, 2, 4652, 4344, 79, 0 | r, 0), r = we(8), c[r + 4 >> 2] = 0, c[r >> 2] = 174, Z(6987, 1118, 2, 4652, 4344, 79, 0 | r, 0), r = we(8), c[r + 4 >> 2] = 0, c[r >> 2] = 175, Z(6987, 1110, 2, 4900, 4356, 176, 0 | r, 0), r = we(8), c[r + 4 >> 2] = 0, c[r >> 2] = 177, Z(6987, 1243, 5, 4912, 4932, 178, 0 | r, 0), r = we(8), c[r + 4 >> 2] = 0, c[r >> 2] = 179, Z(6987, 1736, 2, 4752, 4630, 138, 0 | r, 0), r = we(8), c[r + 4 >> 2] = 0, c[r >> 2] = 180, Z(6987, 1714, 2, 4752, 4630, 138, 0 | r, 0), r = we(8), c[r + 4 >> 2] = 0, c[r >> 2] = 181, Z(6987, 2148, 2, 4752, 4630, 138, 0 | r, 0), r = we(8), c[r + 4 >> 2] = 0, c[r >> 2] = 182, Z(6987, 2461, 2, 4752, 4630, 138, 0 | r, 0), r = we(8), c[r + 4 >> 2] = 0, c[r >> 2] = 183, Z(6987, 2632, 2, 4752, 4630, 138, 0 | r, 0), r = we(8), c[r + 4 >> 2] = 0, c[r >> 2] = 184, Z(6987, 1696, 2, 4752, 4630, 138, 0 | r, 0), r = we(8), c[r + 4 >> 2] = 0, c[r >> 2] = 185, Z(6987, 1259, 2, 4940, 4356, 186, 0 | r, 0), r = we(8), c[r + 4 >> 2] = 0, c[r >> 2] = 187, Z(6987, 2432, 3, 4760, 4772, 148, 0 | r, 0), r = we(8), c[r + 4 >> 2] = 0, c[r >> 2] = 188, Z(6987, 2112, 3, 4760, 4772, 148, 0 | r, 0), r = we(8), c[r + 4 >> 2] = 0, c[r >> 2] = 189, Z(6987, 2740, 3, 4760, 4772, 148, 0 | r, 0)
                                }

                                function fr(r, e, a, n, i, t, u) {
                                    var b, s, k, A = 0,
                                        l = 0,
                                        d = 0,
                                        v = 0,
                                        p = 0,
                                        N = 0,
                                        w = 0,
                                        E = 0,
                                        g = 0,
                                        R = 0,
                                        G = 0,
                                        Z = 0,
                                        W = 0,
                                        V = 0,
                                        B = 0,
                                        T = 0,
                                        I = 0;
                                    ar = b = ar - 80 | 0, c[b + 76 >> 2] = e, k = b + 55 | 0, s = b + 56 | 0;
                                    r: {
                                        e: {
                                            a: {
                                                n: {
                                                    i: for (;;) {
                                                        if (d = e, (2147483647 ^ E) < (0 | A)) break n;
                                                        E = A + E | 0;
                                                        t: {
                                                            f: {
                                                                o: {
                                                                    if (l = h[0 | (A = d)])
                                                                        for (;;) {
                                                                            c: {
                                                                                u: if (e = 255 & l) {
                                                                                    if (37 != (0 | e)) break c;
                                                                                    for (l = A;;) {
                                                                                        if (37 != h[l + 1 | 0]) {
                                                                                            e = l;
                                                                                            break u
                                                                                        }
                                                                                        if (A = A + 1 | 0, v = h[l + 2 | 0], l = e = l + 2 | 0, 37 != (0 | v)) break
                                                                                    }
                                                                                } else e = A;
                                                                                if ((0 | (A = A - d | 0)) > (0 | (B = 2147483647 ^ E))) break n;
                                                                                if (r && Ur(r, d, A), A) continue i;c[b + 76 >> 2] = e,
                                                                                A = e + 1 | 0,
                                                                                R = -1,
                                                                                !xe(l = f[e + 1 | 0]) | 36 != h[e + 2 | 0] || (R = l - 48 | 0, Z = 1, A = e + 3 | 0),
                                                                                c[b + 76 >> 2] = A,
                                                                                w = 0;u: if ((e = (l = f[0 | A]) - 32 | 0) >>> 0 > 31) v = A;
                                                                                    elseif (v = A, 75913 & (e = 1 << e))
                                                                                    for (;;) {
                                                                                        if (v = A + 1 | 0, c[b + 76 >> 2] = v, w |= e, (e = (l = f[A + 1 | 0]) - 32 | 0) >>> 0 >= 32) break u;
                                                                                        if (A = v, !(75913 & (e = 1 << e))) break
                                                                                    }
                                                                                u: if (42 != (0 | l)) {
                                                                                    if ((0 | (g = ve(b + 76 | 0))) < 0) break n;
                                                                                    l = c[b + 76 >> 2]
                                                                                } else {
                                                                                    if (!xe(e = f[v + 1 | 0]) | 36 != h[v + 2 | 0]) {
                                                                                        if (Z) break o;
                                                                                        if (l = v + 1 | 0, !r) {
                                                                                            c[b + 76 >> 2] = l, Z = 0, g = 0;
                                                                                            break u
                                                                                        }
                                                                                        e = c[a >> 2], c[a >> 2] = e + 4, Z = 0, g = c[e >> 2]
                                                                                    } else c[((e << 2) + i | 0) - 192 >> 2] = 10, l = v + 3 | 0, Z = 1, g = c[((f[v + 1 | 0] << 3) + n | 0) - 384 >> 2];
                                                                                    if (c[b + 76 >> 2] = l, (0 | g) >= 0) break u;
                                                                                    g = 0 - g | 0, w |= 8192
                                                                                }if (A = 0, N = -1, 46 == h[0 | l])
                                                                                    if (42 != h[l + 1 | 0]) c[b + 76 >> 2] = l + 1, N = ve(b + 76 | 0), e = c[b + 76 >> 2], G = 1;
                                                                                    else {
                                                                                        if (!xe(e = f[l + 2 | 0]) | 36 != h[l + 3 | 0]) {
                                                                                            if (Z) break o;
                                                                                            e = l + 2 | 0, N = 0, r && (l = c[a >> 2], c[a >> 2] = l + 4, N = c[l >> 2])
                                                                                        } else c[((e << 2) + i | 0) - 192 >> 2] = 10, e = l + 4 | 0, N = c[((f[l + 2 | 0] << 3) + n | 0) - 384 >> 2];
                                                                                        c[b + 76 >> 2] = e, G = (-1 ^ N) >>> 31 | 0
                                                                                    }
                                                                                else e = l,
                                                                                G = 0;
                                                                                for (;;) {
                                                                                    if (p = A, v = 28, W = e, (A = f[0 | e]) - 123 >>> 0 < 4294967238) break a;
                                                                                    if (e = W + 1 | 0, !((A = h[4895 + (A + y(p, 58) | 0) | 0]) - 1 >>> 0 < 8)) break
                                                                                }
                                                                                c[b + 76 >> 2] = e;u: {
                                                                                    b: {
                                                                                        if (27 != (0 | A)) {
                                                                                            if (!A) break a;
                                                                                            if ((0 | R) >= 0) {
                                                                                                c[(R << 2) + i >> 2] = A, l = c[4 + (A = (R << 3) + n | 0) >> 2], c[b + 64 >> 2] = c[A >> 2], c[b + 68 >> 2] = l;
                                                                                                break b
                                                                                            }
                                                                                            if (!r) break t;
                                                                                            wr(b - -64 | 0, A, a, u);
                                                                                            break u
                                                                                        }
                                                                                        if ((0 | R) >= 0) break a
                                                                                    }
                                                                                    if (A = 0, !r) continue i
                                                                                }
                                                                                l = -65537 & w,
                                                                                w = 8192 & w ? l : w,
                                                                                R = 0,
                                                                                V = 1166,
                                                                                v = s;u: {
                                                                                    b: {
                                                                                        s: {
                                                                                            k: {
                                                                                                A: {
                                                                                                    l: {
                                                                                                        d: {
                                                                                                            h: {
                                                                                                                v: {
                                                                                                                    p: {
                                                                                                                        N: {
                                                                                                                            m: {
                                                                                                                                y: {
                                                                                                                                    w: {
                                                                                                                                        E: {
                                                                                                                                            switch (A = f[0 | W], (A = p && 3 == (15 & A) ? -33 & A : A) - 88 | 0) {
                                                                                                                                                case 11:
                                                                                                                                                    break u;
                                                                                                                                                case 9:
                                                                                                                                                case 13:
                                                                                                                                                case 14:
                                                                                                                                                case 15:
                                                                                                                                                    break b;
                                                                                                                                                case 27:
                                                                                                                                                    break d;
                                                                                                                                                case 12:
                                                                                                                                                case 17:
                                                                                                                                                    break p;
                                                                                                                                                case 23:
                                                                                                                                                    break N;
                                                                                                                                                case 0:
                                                                                                                                                case 32:
                                                                                                                                                    break m;
                                                                                                                                                case 24:
                                                                                                                                                    break y;
                                                                                                                                                case 22:
                                                                                                                                                    break w;
                                                                                                                                                case 29:
                                                                                                                                                    break E;
                                                                                                                                                case 1:
                                                                                                                                                case 2:
                                                                                                                                                case 3:
                                                                                                                                                case 4:
                                                                                                                                                case 5:
                                                                                                                                                case 6:
                                                                                                                                                case 7:
                                                                                                                                                case 8:
                                                                                                                                                case 10:
                                                                                                                                                case 16:
                                                                                                                                                case 18:
                                                                                                                                                case 19:
                                                                                                                                                case 20:
                                                                                                                                                case 21:
                                                                                                                                                case 25:
                                                                                                                                                case 26:
                                                                                                                                                case 28:
                                                                                                                                                case 30:
                                                                                                                                                case 31:
                                                                                                                                                    break f
                                                                                                                                            }
                                                                                                                                            switch (A - 65 | 0) {
                                                                                                                                                case 0:
                                                                                                                                                case 4:
                                                                                                                                                case 5:
                                                                                                                                                case 6:
                                                                                                                                                    break b;
                                                                                                                                                case 2:
                                                                                                                                                    break A;
                                                                                                                                                case 1:
                                                                                                                                                case 3:
                                                                                                                                                    break f
                                                                                                                                            }
                                                                                                                                            if (83 == (0 | A)) break l;
                                                                                                                                            break f
                                                                                                                                        }
                                                                                                                                        l = c[b + 64 >> 2],
                                                                                                                                        p = c[b + 68 >> 2],
                                                                                                                                        A = 1166;
                                                                                                                                        break v
                                                                                                                                    }
                                                                                                                                    A = 0;w: switch (255 & p) {
                                                                                                                                        case 0:
                                                                                                                                        case 1:
                                                                                                                                        case 6:
                                                                                                                                            c[c[b + 64 >> 2] >> 2] = E;
                                                                                                                                            continue i;
                                                                                                                                        case 2:
                                                                                                                                            d = c[b + 64 >> 2], c[d >> 2] = E, c[d + 4 >> 2] = E >> 31;
                                                                                                                                            continue i;
                                                                                                                                        case 3:
                                                                                                                                            o[c[b + 64 >> 2] >> 1] = E;
                                                                                                                                            continue i;
                                                                                                                                        case 4:
                                                                                                                                            f[c[b + 64 >> 2]] = E;
                                                                                                                                            continue i;
                                                                                                                                        case 7:
                                                                                                                                            break w;
                                                                                                                                        default:
                                                                                                                                            continue i
                                                                                                                                    }
                                                                                                                                    d = c[b + 64 >> 2],
                                                                                                                                    c[d >> 2] = E,
                                                                                                                                    c[d + 4 >> 2] = E >> 31;
                                                                                                                                    continue i
                                                                                                                                }
                                                                                                                                N = N >>> 0 <= 8 ? 8 : N,
                                                                                                                                w |= 8,
                                                                                                                                A = 120
                                                                                                                            }
                                                                                                                            if (d = s, (l = c[b + 64 >> 2]) | (p = c[b + 68 >> 2]))
                                                                                                                                for (T = 32 & A; f[0 | (d = d - 1 | 0)] = T | h[5424 + (15 & l) | 0], I = !p & l >>> 0 > 15 | 0 != (0 | p), W = p, p = p >>> 4 | 0, l = (15 & W) << 28 | l >>> 4, I;);
                                                                                                                            if (!(8 & w) | !(c[b + 64 >> 2] | c[b + 68 >> 2])) break h;V = 1166 + (A >>> 4 | 0) | 0,
                                                                                                                            R = 2;
                                                                                                                            break h
                                                                                                                        }
                                                                                                                        if (A = s, p = d = c[b + 68 >> 2], d | (l = c[b + 64 >> 2]))
                                                                                                                            for (; f[0 | (A = A - 1 | 0)] = 7 & l | 48, W = !p & l >>> 0 > 7 | 0 != (0 | p), p = (d = p) >>> 3 | 0, l = (7 & d) << 29 | l >>> 3, W;);
                                                                                                                        if (d = A, !(8 & w)) break h;N = (0 | (A = s - d | 0)) < (0 | N) ? N : A + 1 | 0;
                                                                                                                        break h
                                                                                                                    }
                                                                                                                    l = c[b + 64 >> 2],
                                                                                                                    p = A = c[b + 68 >> 2],
                                                                                                                    (0 | A) < 0 ? (p = d = 0 - (p + (0 != (0 | l)) | 0) | 0, l = 0 - l | 0, c[b + 64 >> 2] = l, c[b + 68 >> 2] = d, R = 1, A = 1166) : 2048 & w ? (R = 1, A = 1167) : A = (R = 1 & w) ? 1168 : 1166
                                                                                                                }
                                                                                                                V = A,
                                                                                                                d = re(l, p, s)
                                                                                                            }
                                                                                                            if ((0 | N) < 0 && G) break n;
                                                                                                            if (w = G ? -65537 & w : w, !(0 != ((A = c[b + 64 >> 2]) | (l = c[b + 68 >> 2])) | N)) {
                                                                                                                d = s, N = 0;
                                                                                                                break f
                                                                                                            }
                                                                                                            N = (0 | (A = !(A | l) + (s - d | 0) | 0)) < (0 | N) ? N : A;
                                                                                                            break f
                                                                                                        }
                                                                                                        w = 0,
                                                                                                        v = 0 != (0 | (p = G = N >>> 0 >= 2147483647 ? 2147483647 : N));d: {
                                                                                                            h: {
                                                                                                                v: {
                                                                                                                    p: {
                                                                                                                        N: if (!(!(3 & (A = d = (A = c[b + 64 >> 2]) || 4208)) | !p))
                                                                                                                            for (;;) {
                                                                                                                                if (!(w = h[0 | A])) break p;
                                                                                                                                if (v = 0 != (0 | (p = p - 1 | 0)), !(3 & (A = A + 1 | 0))) break N;
                                                                                                                                if (!p) break
                                                                                                                            }
                                                                                                                        if (!v) break h;N: {
                                                                                                                            if (!(!h[0 | A] | p >>> 0 < 4))
                                                                                                                                for (;;) {
                                                                                                                                    if ((-1 ^ (v = c[A >> 2])) & v - 16843009 & -2139062144) break N;
                                                                                                                                    if (A = A + 4 | 0, !((p = p - 4 | 0) >>> 0 > 3)) break
                                                                                                                                }
                                                                                                                            if (!p) break h
                                                                                                                        }
                                                                                                                        v = 0;
                                                                                                                        break v
                                                                                                                    }
                                                                                                                    v = 1
                                                                                                                }
                                                                                                                for (;;)
                                                                                                                    if (v) {
                                                                                                                        if (!w) break d;
                                                                                                                        if (A = A + 1 | 0, !(p = p - 1 | 0)) break h;
                                                                                                                        v = 0
                                                                                                                    } else w = h[0 | A], v = 1
                                                                                                            }
                                                                                                            A = 0
                                                                                                        }
                                                                                                        if (v = (A = A ? A - d | 0 : G) + d | 0, (0 | N) >= 0) {
                                                                                                            w = l, N = A;
                                                                                                            break f
                                                                                                        }
                                                                                                        if (w = l, N = A, h[0 | v]) break n;
                                                                                                        break f
                                                                                                    }
                                                                                                    if (N) {
                                                                                                        l = c[b + 64 >> 2];
                                                                                                        break k
                                                                                                    }
                                                                                                    A = 0,
                                                                                                    le(r, 32, g, 0, w);
                                                                                                    break s
                                                                                                }
                                                                                                c[b + 12 >> 2] = 0,
                                                                                                c[b + 8 >> 2] = c[b + 64 >> 2],
                                                                                                l = b + 8 | 0,
                                                                                                c[b + 64 >> 2] = l,
                                                                                                N = -1
                                                                                            }
                                                                                            A = 0;k: {
                                                                                                for (;;) {
                                                                                                    if (!(d = c[l >> 2])) break k;
                                                                                                    if (!((v = (0 | (d = We(b + 4 | 0, d))) < 0) | d >>> 0 > N - A >>> 0)) {
                                                                                                        if (l = l + 4 | 0, N >>> 0 > (A = A + d | 0) >>> 0) continue;
                                                                                                        break k
                                                                                                    }
                                                                                                    break
                                                                                                }
                                                                                                if (v) break e
                                                                                            }
                                                                                            if (v = 61, (0 | A) < 0) break a;
                                                                                            if (le(r, 32, g, A, w), A)
                                                                                                for (v = 0, l = c[b + 64 >> 2];;) {
                                                                                                    if (!(d = c[l >> 2])) break s;
                                                                                                    if ((v = (d = We(b + 4 | 0, d)) + v | 0) >>> 0 > A >>> 0) break s;
                                                                                                    if (Ur(r, b + 4 | 0, d), l = l + 4 | 0, !(A >>> 0 > v >>> 0)) break
                                                                                                } else A = 0
                                                                                        }
                                                                                        le(r, 32, g, A, 8192 ^ w),
                                                                                        A = (0 | A) < (0 | g) ? g : A;
                                                                                        continue i
                                                                                    }
                                                                                    if ((0 | N) < 0 && G) break n;
                                                                                    if (v = 61, (0 | (A = 0 | aa[0 | t](r, m[b + 64 >> 3], g, N, w, A))) >= 0) continue i;
                                                                                    break a
                                                                                }
                                                                                f[b + 55 | 0] = c[b + 64 >> 2],
                                                                                N = 1,
                                                                                d = k,
                                                                                w = l;
                                                                                break f
                                                                            }
                                                                            l = h[A + 1 | 0],
                                                                            A = A + 1 | 0
                                                                        }
                                                                    if (r) break r;
                                                                    if (!Z) break t;
                                                                    for (A = 1;;) {
                                                                        if (r = c[(A << 2) + i >> 2]) {
                                                                            if (wr((A << 3) + n | 0, r, a, u), E = 1, 10 != (0 | (A = A + 1 | 0))) continue;
                                                                            break r
                                                                        }
                                                                        break
                                                                    }
                                                                    if (E = 1, A >>> 0 >= 10) break r;
                                                                    for (;;) {
                                                                        if (c[(A << 2) + i >> 2]) break o;
                                                                        if (10 == (0 | (A = A + 1 | 0))) break
                                                                    }
                                                                    break r
                                                                }
                                                                v = 28;
                                                                break a
                                                            }
                                                            if ((0 | (N = (0 | N) > (0 | (p = v - d | 0)) ? N : p)) > (2147483647 ^ R)) break n;
                                                            if (v = 61, (0 | B) < (0 | (A = (0 | (l = N + R | 0)) < (0 | g) ? g : l))) break a;le(r, 32, A, l, w),
                                                            Ur(r, V, R),
                                                            le(r, 48, A, l, 65536 ^ w),
                                                            le(r, 48, N, p, 0),
                                                            Ur(r, d, p),
                                                            le(r, 32, A, l, 8192 ^ w);
                                                            continue
                                                        }
                                                        break
                                                    }
                                                    E = 0;
                                                    break r
                                                }
                                                v = 61
                                            }
                                            c[1761] = v
                                        }
                                        E = -1
                                    }
                                    return ar = b + 80 | 0, E
                                }

                                function or(r, e, a, n, i, t, o, u, b, s, k, A, l, d) {
                                    var v, m = w(0),
                                        g = 0,
                                        R = 0,
                                        G = 0,
                                        Z = w(0),
                                        W = 0,
                                        V = 0,
                                        B = w(0);
                                    (c[r + 312 >> 2] != (0 | d) && 4 & h[r + 4 | 0] || (W = 0, c[r + 316 >> 2] != (0 | n))) && (c[r + 540 >> 2] = -1082130432, c[r + 544 >> 2] = -1082130432, c[r + 532 >> 2] = 0, c[r + 536 >> 2] = 0, c[r + 524 >> 2] = -1082130432, c[r + 528 >> 2] = -1082130432, c[r + 320 >> 2] = 0, W = 1), v = l + 1 | 0;
                                    r: {
                                        e: {
                                            a: {
                                                n: if (c[r + 8 >> 2]) {
                                                    if (Z = Mr(r, 2, o), B = Yr(r, 2, o), m = w(Mr(r, 0, o) + Yr(r, 0, o)), l = r + 524 | 0, Z = w(Z + B), lr(i, e, t, a, c[r + 532 >> 2], N[l >> 2], c[r + 536 >> 2], N[r + 528 >> 2], N[r + 540 >> 2], N[r + 544 >> 2], Z, m, k)) break a;
                                                    if (!(R = c[r + 320 >> 2])) break n;
                                                    for (g = r + 324 | 0;;) {
                                                        if (l = g + y(G, 24) | 0, lr(i, e, t, a, c[l + 8 >> 2], N[l >> 2], c[l + 12 >> 2], N[l + 4 >> 2], N[l + 16 >> 2], N[l + 20 >> 2], Z, m, k)) break a;
                                                        if ((0 | R) == (0 | (G = G + 1 | 0))) break
                                                    }
                                                } else {
                                                    if (b) {
                                                        i: {
                                                            if (!((m = N[(l = r + 524 | 0) >> 2]) != m | e != e)) {
                                                                if (w(E(w(m - e))) < w(9999999747378752e-20)) break i;
                                                                break n
                                                            }
                                                            if (m == m | e == e) break n
                                                        }
                                                        g = c[r + 532 >> 2] == (0 | i) && c[r + 536 >> 2] == (0 | t) ? l : 0,
                                                        (l = (m = N[r + 528 >> 2]) != m) | (R = a != a) ? l &= R : l = w(E(w(m - a))) < w(9999999747378752e-20),
                                                        l = l ? g : 0;
                                                        break a
                                                    }
                                                    if (!(V = c[r + 320 >> 2])) break n;
                                                    for (R = r + 324 | 0;;) {
                                                        g = y(G, 24);
                                                        i: {
                                                            t: {
                                                                if (!((m = N[(l = g + R | 0) >> 2]) != m | e != e)) {
                                                                    if (w(E(w(m - e))) < w(9999999747378752e-20)) break t;
                                                                    break i
                                                                }
                                                                if (m == m | e == e) break i
                                                            }
                                                            t: {
                                                                if (!((m = N[4 + (g = R + g | 0) >> 2]) != m | a != a)) {
                                                                    if (w(E(w(m - a))) < w(9999999747378752e-20)) break t;
                                                                    break i
                                                                }
                                                                if (m == m | a == a) break i
                                                            }
                                                            if (c[g + 8 >> 2] == (0 | i) && c[g + 12 >> 2] == (0 | t)) break a
                                                        }
                                                        if ((0 | V) == (0 | (G = G + 1 | 0))) break
                                                    }
                                                }ir(r, e, a, n, i, t, o, u, b, k, A, v, d, s),
                                                c[r + 316 >> 2] = n;
                                                break e
                                            }
                                            if (!(!l | W)) {
                                                N[r + 516 >> 2] = N[l + 16 >> 2], N[r + 520 >> 2] = N[l + 20 >> 2], c[(n = (b ? 12 : 16) + A | 0) >> 2] = c[n >> 2] + 1, n = 0;
                                                break r
                                            }
                                            if (ir(r, e, a, n, i, t, o, u, b, k, A, v, d, s), c[r + 316 >> 2] = n, n = 1, l) break r
                                        }(n = (l = c[r + 320 >> 2]) + 1 | 0) >>> 0 > p[A + 8 >> 2] && (c[A + 8 >> 2] = n),
                                        8 == (0 | l) && (c[r + 320 >> 2] = 0, l = 0),
                                        b ? n = r + 524 | 0 : (c[r + 320 >> 2] = l + 1, n = 324 + (y(l, 24) + r | 0) | 0),
                                        c[n + 12 >> 2] = t,
                                        c[n + 8 >> 2] = i,
                                        N[n + 4 >> 2] = a,
                                        N[n >> 2] = e,
                                        N[n + 16 >> 2] = N[r + 516 >> 2],
                                        N[n + 20 >> 2] = N[r + 520 >> 2],
                                        n = 1
                                    }
                                    return b && (i = c[r + 520 >> 2], c[r + 244 >> 2] = c[r + 516 >> 2], c[r + 248 >> 2] = i, t = 1 | (i = h[r + 4 | 0]), f[r + 4 | 0] = t, 4 & i && (f[r + 4 | 0] = 251 & t)), c[r + 312 >> 2] = d, n
                                }

                                function cr(r) {
                                    var e = 0,
                                        a = 0,
                                        n = 0,
                                        i = 0,
                                        t = 0,
                                        f = 0,
                                        o = 0,
                                        u = 0,
                                        b = 0,
                                        s = 0,
                                        k = 0;
                                    o = 8;
                                    r: if (!((r |= 0) >>> 0 > 4294967239)) {
                                        e: {
                                            for (;;) {
                                                if (o = o >>> 0 <= 8 ? 8 : o, t = e = c[1731], i = c[1730], (r = r >>> 0 <= 8 ? 8 : r + 3 & -4) >>> 0 <= 127 ? f = (r >>> 3 | 0) - 1 | 0 : (f = 110 + ((r >>> 29 - (n = g(r)) ^ 4) - (n << 2) | 0) | 0, r >>> 0 <= 4095 || (f = (n = 71 + ((r >>> 30 - n ^ 2) - (n << 1) | 0) | 0) >>> 0 >= 63 ? 63 : n)), a = 31 & f, (63 & f) >>> 0 >= 32 ? (n = 0, e = e >>> a | 0) : (n = e >>> a | 0, e = ((1 << a) - 1 & e) << 32 - a | i >>> a), e | n) {
                                                    for (;;) {
                                                        if (i = n, e | n ? (u = 1 + (a = n - 1 | 0) | 0, t = a, a = 63 - (n = 32 == (0 | (n = g(n ^ (t = -1 != (0 | (a = e - 1 | 0)) ? u : t)))) ? g(e ^ a) + 32 | 0 : n) | 0, nr = 0 - (n >>> 0 > 63) | 0) : (nr = 0, a = 64), a = 31 & (t = a), (63 & t) >>> 0 >= 32 ? (n = 0, e = i >>> a | 0) : (n = i >>> a | 0, e = ((1 << a) - 1 & i) << 32 - a | e >>> a), u = e, (0 | (e = c[5896 + (a = (f = t + f | 0) << 4) >> 2])) == (0 | (t = a + 5888 | 0))) b = c[1731], i = 31 & (e = t = 63 & f), e >>> 0 >= 32 ? (e = 0, a = -1 >>> i | 0) : a = (e = -1 >>> i | 0) | (1 << i) - 1 << 32 - i, a &= -2, i = 31 & t, t >>> 0 >= 32 ? (e = a << i, a = 0) : (e = (1 << i) - 1 & a >>> 32 - i | e << i, a <<= i), s = a, i = e, e = 31 & (a = t = 0 - f & 63), a >>> 0 >= 32 ? (e = -1 << e, a = 0) : e = (a = -1 << e) | (1 << e) - 1 & -1 >>> 32 - e, k = -2 & a, a = 31 & t, t >>> 0 >= 32 ? (t = 0, e = e >>> a | 0) : (t = e >>> a | 0, e = ((1 << a) - 1 & e) << 32 - a | k >>> a), e |= s, nr = i | t, c[1730] = c[1730] & e, c[1731] = nr & b, e = 1 ^ u;
                                                        else {
                                                            if (i = mr(e, o, r)) break r;
                                                            i = c[e + 4 >> 2], c[i + 8 >> 2] = c[e + 8 >> 2], c[c[e + 8 >> 2] + 4 >> 2] = i, c[e + 8 >> 2] = t, i = a + 5892 | 0, c[e + 4 >> 2] = c[i >> 2], c[i >> 2] = e, c[c[e + 4 >> 2] + 8 >> 2] = e, f = f + 1 | 0, e = (1 & n) << 31 | u >>> 1, n = n >>> 1 | 0
                                                        }
                                                        if (!(e | n)) break
                                                    }
                                                    t = c[1731], i = c[1730]
                                                }
                                                a: {
                                                    if (i | t) {
                                                        a = 63 - (32 == (0 | (n = g(t))) ? g(i) + 32 | 0 : n) | 0, n = c[5896 + (e = a << 4) >> 2];
                                                        n: if (!(!t & i >>> 0 < 1073741824) && (f = 99, (0 | (e = e + 5888 | 0)) != (0 | n))) {
                                                            for (;;) {
                                                                if (!f) break n;
                                                                if (i = mr(n, o, r)) break r;
                                                                if (f = f - 1 | 0, (0 | e) == (0 | (n = c[n + 8 >> 2]))) break
                                                            }
                                                            n = e
                                                        }
                                                        if (hr(r + 48 | 0)) break a;
                                                        if (!n) break e;
                                                        if ((0 | (e = 5888 + (a << 4) | 0)) == (0 | n)) break e;
                                                        for (;;) {
                                                            if (i = mr(n, o, r)) break r;
                                                            if ((0 | e) == (0 | (n = c[n + 8 >> 2]))) break
                                                        }
                                                        break e
                                                    }
                                                    if (!hr(r + 48 | 0)) break e
                                                }
                                                if (i = 0, o - 1 & o) break r;
                                                if (!(r >>> 0 <= 4294967239)) break
                                            }
                                            break r
                                        }
                                        i = 0
                                    }
                                    return 0 | i
                                }

                                function ur(r, e, a, n) {
                                    var i = w(0),
                                        t = w(0),
                                        f = 0,
                                        o = w(0);
                                    r: {
                                        e: {
                                            a: {
                                                n: {
                                                    i: {
                                                        t: {
                                                            if (e >>> 0 <= 1) {
                                                                t = N[r + 212 >> 2];
                                                                f: if (2139156720 != (0 | (e = c[r + 212 >> 2]))) {
                                                                    if (2140081935 == (0 | e)) break t;
                                                                    f = 4276;
                                                                    o: {
                                                                        if (2141891242 != (0 | e)) {
                                                                            if (t == t) break o;
                                                                            f = 4268
                                                                        }
                                                                        switch (i = N[f >> 2], t = w(NaN), c[f + 4 >> 2] - 1 | 0) {
                                                                            case 0:
                                                                                break t;
                                                                            case 1:
                                                                                break f;
                                                                            default:
                                                                                break i
                                                                        }
                                                                    }
                                                                    if (b(2, 536870912 + (-1073741825 & e) | 0), i = d(), !(1073741824 & e)) break t
                                                                }
                                                                t = w(w(i * n) * w(.009999999776482582));
                                                                break i
                                                            }
                                                            t = N[r + 208 >> 2];f: {
                                                                o: {
                                                                    c: if (2139156720 != (0 | (e = c[r + 208 >> 2]))) {
                                                                        if (2140081935 == (0 | e)) break o;
                                                                        f = 4276;
                                                                        u: {
                                                                            if (2141891242 != (0 | e)) {
                                                                                if (t == t) break u;
                                                                                f = 4268
                                                                            }
                                                                            switch (i = N[f >> 2], t = w(NaN), c[f + 4 >> 2] - 1 | 0) {
                                                                                case 0:
                                                                                    break o;
                                                                                case 1:
                                                                                    break c;
                                                                                default:
                                                                                    break f
                                                                            }
                                                                        }
                                                                        if (b(2, 536870912 + (-1073741825 & e) | 0), i = d(), !(1073741824 & e)) break o
                                                                    }t = w(w(i * n) * w(.009999999776482582));
                                                                    break f
                                                                }
                                                                t = i
                                                            }
                                                            i = w(0),
                                                            o = N[r + 216 >> 2];f: if (2139156720 != (0 | (r = c[r + 216 >> 2]))) {
                                                                if (2140081935 == (0 | r)) break a;
                                                                e = 4276;
                                                                o: {
                                                                    if (2141891242 != (0 | r)) {
                                                                        if (o == o) break o;
                                                                        e = 4268
                                                                    }
                                                                    switch (i = N[e >> 2], c[e + 4 >> 2] - 1 | 0) {
                                                                        case 1:
                                                                            break f;
                                                                        case 0:
                                                                            break n;
                                                                        default:
                                                                            break e
                                                                    }
                                                                }
                                                                if (b(2, 536870912 + (-1073741825 & r) | 0), i = d(), !(1073741824 & r)) break n
                                                            }i = w(w(i * n) * w(.009999999776482582));
                                                            break n
                                                        }
                                                        t = i
                                                    }
                                                    i = w(0),
                                                    o = N[r + 220 >> 2];i: if (2139156720 != (0 | (r = c[r + 220 >> 2]))) {
                                                        if (2140081935 == (0 | r)) break a;
                                                        e = 4276;
                                                        t: {
                                                            if (2141891242 != (0 | r)) {
                                                                if (o == o) break t;
                                                                e = 4268
                                                            }
                                                            switch (i = N[e >> 2], c[e + 4 >> 2] - 1 | 0) {
                                                                case 1:
                                                                    break i;
                                                                case 0:
                                                                    break n;
                                                                default:
                                                                    break e
                                                            }
                                                        }
                                                        if (b(2, 536870912 + (-1073741825 & r) | 0), i = d(), !(1073741824 & r)) break n
                                                    }i = w(w(i * n) * w(.009999999776482582))
                                                }
                                                if (!(i >= w(0))) break e
                                            }
                                            if (a > i) break r
                                        }
                                        if (!(t >= w(0))) return a;i = a < t ? t : a
                                    }
                                    return i
                                }

                                function br(r, e) {
                                    var a = 0,
                                        n = 0;
                                    for (c[r + 8 >> 2] = 0, c[r + 12 >> 2] = 0, o[r + 4 >> 1] = 1, c[r >> 2] = 0, c[r + 16 >> 2] = 0, c[r + 20 >> 2] = 0, c[r + 24 >> 2] = 0, c[r + 36 >> 2] = 2143289344, c[r + 40 >> 2] = 2141891242, c[r + 28 >> 2] = 2143289344, c[r + 32 >> 2] = 2143289344, n = Rr(r + 44 | 0, 0, 36); c[n + (a << 2) >> 2] = 2143289344, 9 != (0 | (a = a + 1 | 0)););
                                    for (a = 0, n = Rr(r + 80 | 0, 0, 36); c[n + (a << 2) >> 2] = 2143289344, 9 != (0 | (a = a + 1 | 0)););
                                    for (a = 0, n = Rr(r + 116 | 0, 0, 36); c[n + (a << 2) >> 2] = 2143289344, 9 != (0 | (a = a + 1 | 0)););
                                    for (a = 0, n = Rr(r + 152 | 0, 0, 36); c[n + (a << 2) >> 2] = 2143289344, 9 != (0 | (a = a + 1 | 0)););
                                    for (a = 0, c[r + 196 >> 2] = 0, c[(n = r + 188 | 0) >> 2] = 0, c[n + 4 >> 2] = 0; c[n + (a << 2) >> 2] = 2143289344, 3 != (0 | (a = a + 1 | 0)););
                                    for (c[r + 24 >> 2] = 4224, c[r + 224 >> 2] = 2143289344, c[r + 216 >> 2] = 2143289344, c[r + 220 >> 2] = 2143289344, c[r + 208 >> 2] = 2143289344, c[r + 212 >> 2] = 2143289344, c[r + 200 >> 2] = 2141891242, c[r + 204 >> 2] = 2141891242, Rr(r + 228 | 0, 0, 288), c[r + 244 >> 2] = 2143289344, c[r + 248 >> 2] = 2143289344, Rr(r + 252 | 0, 0, 49), c[r + 308 >> 2] = 2143289344, n = r + 516 | 0, a = r + 324 | 0; c[a + 16 >> 2] = -1082130432, c[a + 20 >> 2] = -1082130432, c[a + 8 >> 2] = 0, c[a + 12 >> 2] = 0, c[a >> 2] = -1082130432, c[a + 4 >> 2] = -1082130432, (0 | n) != (0 | (a = a + 24 | 0)););
                                    return c[r + 548 >> 2] = 0, c[r + 552 >> 2] = 0, c[r + 516 >> 2] = 2143289344, c[r + 520 >> 2] = 2143289344, c[r + 572 >> 2] = 2143289344, c[r + 576 >> 2] = 0, c[r + 568 >> 2] = e, c[r + 540 >> 2] = -1082130432, c[r + 544 >> 2] = -1082130432, c[r + 532 >> 2] = 0, c[r + 536 >> 2] = 0, c[r + 524 >> 2] = -1082130432, c[r + 528 >> 2] = -1082130432, c[r + 556 >> 2] = 0, c[r + 560 >> 2] = 0, c[r + 564 >> 2] = 0, c[r + 580 >> 2] = 2143289344, c[r + 584 >> 2] = 0, h[e + 10 | 0] && (c[r + 24 >> 2] = 4616, f[r + 4 | 0] = 128 | h[r + 4 | 0]), r
                                }

                                function sr(r) {
                                    var e, a, n, i, t, f = 0,
                                        o = 0,
                                        u = w(0),
                                        s = w(0),
                                        k = w(0),
                                        A = 0,
                                        l = 0,
                                        h = 0,
                                        v = 0;
                                    for (c[8 + (e = ar - 16 | 0) >> 2] = 0, c[e + 12 >> 2] = 1, a = r + 200 | 0, n = r + 572 | 0, i = r + 208 | 0, t = r + 216 | 0, r = 0;;) {
                                        v = r, h = c[(e + 8 | 0) + (r << 2) >> 2], u = N[(r = t + (A = h << 2) | 0) >> 2];
                                        r: {
                                            e: {
                                                a: {
                                                    n: {
                                                        i: {
                                                            if (!(!((l = 2139156720 == (0 | (f = c[r >> 2]))) | 2140081935 == (0 | f) | 2141891242 == (0 | f)) & u != u)) {
                                                                s = N[(r = A + i | 0) >> 2];
                                                                t: {
                                                                    f: {
                                                                        if (2139156720 != (0 | (o = c[r >> 2]))) {
                                                                            if (k = w(NaN), r = 3, 2141891242 == (0 | o)) break t;
                                                                            if (2140081935 != (0 | o)) break f;
                                                                            k = w(0), r = 1;
                                                                            break t
                                                                        }
                                                                        k = w(0),
                                                                        r = 2;
                                                                        break t
                                                                    }
                                                                    r = 0,
                                                                    s == s && (b(2, 536870912 + (-1073741825 & o) | 0), k = d(), r = 1073741824 & o ? 2 : 1)
                                                                }
                                                                o = r;
                                                                t: {
                                                                    f: {
                                                                        if (!l) {
                                                                            if (s = w(NaN), r = 3, 2141891242 == (0 | f)) break t;
                                                                            if (2140081935 != (0 | f)) break f;
                                                                            s = w(0), r = 1;
                                                                            break t
                                                                        }
                                                                        s = w(0),
                                                                        r = 2;
                                                                        break t
                                                                    }
                                                                    r = 0,
                                                                    u == u && (b(2, 536870912 + (-1073741825 & f) | 0), s = d(), r = 1073741824 & f ? 2 : 1)
                                                                }
                                                                if (!((0 | o) != (0 | r) | !(!r | s != s & k != k | w(E(w(s - k))) < w(9999999747378752e-20)))) {
                                                                    if (r = 0, l) break i;
                                                                    if (2140081935 == (0 | f)) break e;
                                                                    if (2141891242 == (0 | f)) break a;
                                                                    if (u != u) break n;
                                                                    r = 536870912 + (-1073741825 & f) | 0, f = 1073741824 & f ? 2 : 1;
                                                                    break r
                                                                }
                                                            }
                                                            if (r = 0, u = N[(f = A + a | 0) >> 2], 2139156720 != (0 | (f = c[f >> 2]))) {
                                                                if (2140081935 == (0 | f)) break e;
                                                                if (2141891242 == (0 | f)) break a;
                                                                if (u != u) break n;
                                                                r = 536870912 + (-1073741825 & f) | 0, f = 1073741824 & f ? 2 : 1;
                                                                break r
                                                            }
                                                        }
                                                        f = 2;
                                                        break r
                                                    }
                                                    r = 2143289344,
                                                    f = 0;
                                                    break r
                                                }
                                                r = 2143289344,
                                                f = 3;
                                                break r
                                            }
                                            f = 1
                                        }
                                        if (c[4 + (o = (h << 3) + n | 0) >> 2] = f, c[o >> 2] = r, r = 1, 1 & v) break
                                    }
                                }

                                function kr(r, e, a) {
                                    var n, i = 0,
                                        t = 0;
                                    if (a >>> 0 >= 512) return J(0 | r, 0 | e, 0 | a), r;
                                    n = r + a | 0;
                                    r: if (3 & (r ^ e))
                                        if (n >>> 0 < 4) a = r;
                                        else
                                    if ((i = n - 4 | 0) >>> 0 < r >>> 0) a = r;
                                    else
                                        for (a = r; f[0 | a] = h[0 | e], f[a + 1 | 0] = h[e + 1 | 0], f[a + 2 | 0] = h[e + 2 | 0], f[a + 3 | 0] = h[e + 3 | 0], e = e + 4 | 0, i >>> 0 >= (a = a + 4 | 0) >>> 0;);
                                    else {
                                        e: if (3 & r)
                                            if (a)
                                                for (a = r;;) {
                                                    if (f[0 | a] = h[0 | e], e = e + 1 | 0, !(3 & (a = a + 1 | 0))) break e;
                                                    if (!(a >>> 0 < n >>> 0)) break
                                                } else a = r;
                                            else a = r;
                                        if (!((i = -4 & n) >>> 0 < 64 || (t = i + -64 | 0) >>> 0 < a >>> 0))
                                            for (; c[a >> 2] = c[e >> 2], c[a + 4 >> 2] = c[e + 4 >> 2], c[a + 8 >> 2] = c[e + 8 >> 2], c[a + 12 >> 2] = c[e + 12 >> 2], c[a + 16 >> 2] = c[e + 16 >> 2], c[a + 20 >> 2] = c[e + 20 >> 2], c[a + 24 >> 2] = c[e + 24 >> 2], c[a + 28 >> 2] = c[e + 28 >> 2], c[a + 32 >> 2] = c[e + 32 >> 2], c[a + 36 >> 2] = c[e + 36 >> 2], c[a + 40 >> 2] = c[e + 40 >> 2], c[a + 44 >> 2] = c[e + 44 >> 2], c[a + 48 >> 2] = c[e + 48 >> 2], c[a + 52 >> 2] = c[e + 52 >> 2], c[a + 56 >> 2] = c[e + 56 >> 2], c[a + 60 >> 2] = c[e + 60 >> 2], e = e - -64 | 0, t >>> 0 >= (a = a - -64 | 0) >>> 0;);
                                        if (a >>> 0 >= i >>> 0) break r;
                                        for (; c[a >> 2] = c[e >> 2], e = e + 4 | 0, i >>> 0 > (a = a + 4 | 0) >>> 0;);
                                    }
                                    if (a >>> 0 < n >>> 0)
                                        for (; f[0 | a] = h[0 | e], e = e + 1 | 0, (0 | n) != (0 | (a = a + 1 | 0)););
                                    return r
                                }

                                function Ar(r, e, a, n, i) {
                                    var t, f = w(0),
                                        o = 0,
                                        u = w(0),
                                        s = w(0),
                                        k = 0,
                                        A = w(0),
                                        l = w(0);
                                    if (!(t = (u = w(a - n)) != u)) {
                                        a = w(0), f = N[208 + (o = (e << 2) + r | 0) >> 2];
                                        r: {
                                            e: {
                                                a: {
                                                    n: if (2139156720 != (0 | (o = c[o + 208 >> 2]))) {
                                                        if (2140081935 == (0 | o)) break e;
                                                        k = 4276;
                                                        i: {
                                                            if (2141891242 != (0 | o)) {
                                                                if (f == f) break i;
                                                                k = 4268
                                                            }
                                                            switch (a = N[k >> 2], c[k + 4 >> 2] - 1 | 0) {
                                                                case 0:
                                                                    break a;
                                                                case 1:
                                                                    break n;
                                                                default:
                                                                    break r
                                                            }
                                                        }
                                                        if (b(2, 536870912 + (-1073741825 & o) | 0), a = d(), !(1073741824 & o)) break a
                                                    }a = w(w(a * i) * w(.009999999776482582))
                                                }
                                                if (a != a) break r
                                            }
                                            s = w(a - n)
                                        }
                                        a = w(0), f = N[216 + (r = (e << 2) + r | 0) >> 2];
                                        r: {
                                            e: {
                                                a: {
                                                    n: if (2139156720 != (0 | (e = c[r + 216 >> 2]))) {
                                                        if (2140081935 == (0 | e)) break e;
                                                        r = 4276;
                                                        i: {
                                                            if (2141891242 != (0 | e)) {
                                                                if (f == f) break i;
                                                                r = 4268
                                                            }
                                                            switch (a = N[r >> 2], f = w(34028234663852886e22), c[r + 4 >> 2] - 1 | 0) {
                                                                case 0:
                                                                    break a;
                                                                case 1:
                                                                    break n;
                                                                default:
                                                                    break r
                                                            }
                                                        }
                                                        if (b(2, 536870912 + (-1073741825 & e) | 0), a = d(), !(1073741824 & e)) break a
                                                    }a = w(w(a * i) * w(.009999999776482582))
                                                }
                                                if (a != a) {
                                                    f = w(34028234663852886e22);
                                                    break r
                                                }
                                            }
                                            f = w(a - n)
                                        }
                                        if (A = u, l = Ge(u, f), !((r = (a = f != f | t ? A : l) != a) | s != s)) return Re(a, s);
                                        u = r ? s : a
                                    }
                                    return u
                                }

                                function lr(r, e, a, n, i, t, f, o, c, u, b, s, k) {
                                    var A = w(0),
                                        l = w(0),
                                        d = 0,
                                        h = 0,
                                        v = w(0),
                                        p = w(0),
                                        m = w(0),
                                        y = 0,
                                        g = 0;
                                    if (c < w(0) | u < w(0)) r = 0;
                                    else {
                                        v = t, p = e, m = n, l = o, k && (l = o, (A = N[k + 16 >> 2]) != w(0) && (p = Dr(+e, y = +A, 0, 0), m = Dr(+n, y, 0, 0), v = Dr(+t, y, 0, 0), l = Dr(+o, y, 0, 0))), A = l, k = 0, (0 | r) == (0 | i) && ((g = v != v) | (k = p != p) ? k &= g : k = w(E(w(v - p))) < w(9999999747378752e-20)), g = k, (0 | a) == (0 | f) && ((d = A != A) | (k = m != m) ? d &= k : d = w(E(w(A - m))) < w(9999999747378752e-20)), h = 1, k = 1;
                                        r: if (!g) {
                                            e = w(e - b);
                                            e: if (1 != (0 | r)) {
                                                if (!((r = 2 != (0 | r)) | i)) {
                                                    if (!(e >= c)) break e;
                                                    break r
                                                }
                                                if (k = 0, !(e < t) | r | 2 != (0 | i) | e != e | t != t | c != c) break r;
                                                if (k = 1, e >= c) break r
                                            }
                                            k = (i = e != e) | (r = c != c) ? r & i : w(E(w(e - c))) < w(9999999747378752e-20)
                                        }
                                        r: if (!d) {
                                            e = w(n - s);
                                            e: if (1 != (0 | a)) {
                                                if (!((r = 2 != (0 | a)) | f)) {
                                                    if (!(e >= u)) break e;
                                                    break r
                                                }
                                                if (h = 0, !(e < o) | r | 2 != (0 | f) | e != e | o != o | u != u) break r;
                                                if (h = 1, e >= u) break r
                                            }
                                            h = (a = e != e) | (r = u != u) ? r & a : w(E(w(e - u))) < w(9999999747378752e-20)
                                        }
                                        r = k & h
                                    }
                                    return r
                                }

                                function dr(r) {
                                    var e, a, n = 0,
                                        i = 0,
                                        t = 0,
                                        f = 0,
                                        o = 0,
                                        c = 0;
                                    if (k(+r), o = 0 | u(1), t = 0 | u(0), 2047 == (0 | (f = o >>> 20 & 2047))) return (r *= 1) / r;
                                    if (!(n = t << 1) & 2145386496 == (0 | (c = o << 1 | t >>> 31)) | c >>> 0 < 2145386496) return !n & 2145386496 == (0 | c) ? 0 * r : r;
                                    if (f) n = 1048575 & o | 1048576;
                                    else {
                                        if (f = 0, i = t << 12, (0 | (n = o << 12 | t >>> 20)) > 0 | (0 | n) >= 0)
                                            for (; f = f - 1 | 0, n = n << 1 | i >>> 31, i <<= 1, (0 | n) > 0 | (0 | n) >= 0;);
                                        i = 31 & (n = 1 - f | 0), (63 & n) >>> 0 >= 32 ? (n = t << i, t = 0) : (n = (1 << i) - 1 & t >>> 32 - i | o << i, t <<= i)
                                    }
                                    if (i = t, (0 | f) > 1023) {
                                        for (;;) {
                                            if (!((0 | (t = n + -1048576 | 0)) < 0 || (n = t) | i)) return 0 * r;
                                            if (n = n << 1 | i >>> 31, i <<= 1, !((0 | (f = f - 1 | 0)) > 1023)) break
                                        }
                                        f = 1023
                                    }
                                    if (!((0 | (t = n + -1048576 | 0)) < 0 || (n = t) | i)) return 0 * r;
                                    if (1048575 == (0 | n) | n >>> 0 < 1048575)
                                        for (; f = f - 1 | 0, t = n >>> 0 < 524288, c = n << 1 | i >>> 31, i <<= 1, n = c, t;);
                                    return a = -2147483648 & o, c = n + -1048576 | f << 20, o = n, e = i, i = 31 & (t = 1 - f | 0), (63 & t) >>> 0 >= 32 ? (n = 0, t = o >>> i | 0) : (n = o >>> i | 0, t = ((1 << i) - 1 & o) << 32 - i | e >>> i), b(0, 0 | ((i = (0 | f) > 0) ? e : t)), b(1, (i ? c : n) | a), +s()
                                }

                                function hr(r) {
                                    var e = 0,
                                        a = 0,
                                        n = 0,
                                        i = 0,
                                        t = 0;
                                    if ((a = (n = c[1396]) + (e = r + 7 & -8) | 0) >>> 0 <= n >>> 0 && e || a >>> 0 > na() << 16 >>> 0 && !(0 | x(0 | a)) ? (c[1761] = 48, n = -1) : c[1396] = a, -1 != (0 | n)) {
                                        c[12 + (a = (e = r + n | 0) - 16 | 0) >> 2] = 16, c[a >> 2] = 16;
                                        r: {
                                            e: {
                                                if ((0 | (t = (r = c[1728]) ? c[r + 8 >> 2] : 0)) == (0 | n)) {
                                                    if (i = n - (-2 & c[n - 4 >> 2]) | 0, t = c[i - 4 >> 2], c[r + 8 >> 2] = e, e = -16, !(1 & f[((r = i - (-2 & t) | 0) + c[r >> 2] | 0) - 4 | 0])) break e;
                                                    e = c[r + 4 >> 2], c[e + 8 >> 2] = c[r + 8 >> 2], c[c[r + 8 >> 2] + 4 >> 2] = e, a = a - r | 0, c[r >> 2] = a;
                                                    break r
                                                }
                                                c[n + 12 >> 2] = 16,
                                                c[n >> 2] = 16,
                                                c[n + 8 >> 2] = e,
                                                c[n + 4 >> 2] = r,
                                                c[1728] = n,
                                                e = 16
                                            }
                                            a = a - (r = e + n | 0) | 0,
                                            c[r >> 2] = a
                                        }
                                        c[((-4 & a) + r | 0) - 4 >> 2] = 1 | a, (e = c[r >> 2] - 8 | 0) >>> 0 <= 127 ? a = (e >>> 3 | 0) - 1 | 0 : (a = 110 + ((e >>> 29 - (i = g(e)) ^ 4) - (i << 2) | 0) | 0, e >>> 0 <= 4095 || (a = (a = 71 + ((e >>> 30 - i ^ 2) - (i << 1) | 0) | 0) >>> 0 >= 63 ? 63 : a)), e = a << 4, c[r + 4 >> 2] = e + 5888, e = e + 5896 | 0, c[r + 8 >> 2] = c[e >> 2], c[e >> 2] = r, c[c[r + 8 >> 2] + 4 >> 2] = r, e = c[1730], i = c[1731], r = 31 & a, (63 & a) >>> 0 >= 32 ? (a = 1 << r, t = 0) : a = (t = 1 << r) - 1 & 1 >>> 32 - r, c[1730] = t | e, c[1731] = a | i
                                    }
                                    return -1 != (0 | n)
                                }

                                function vr(r, e, a) {
                                    var n = 0,
                                        i = 0,
                                        t = 0,
                                        f = 0,
                                        o = 0,
                                        c = 0,
                                        u = 0,
                                        b = 0,
                                        s = 0;
                                    r: {
                                        e: {
                                            a: {
                                                n: {
                                                    i: {
                                                        t: {
                                                            f: {
                                                                o: {
                                                                    c: {
                                                                        u: {
                                                                            if (e) {
                                                                                if (!a) break u;
                                                                                break c
                                                                            }
                                                                            nr = 0,
                                                                            r = (r >>> 0) / (a >>> 0) | 0;
                                                                            break r
                                                                        }
                                                                        if (!r) break o;
                                                                        break f
                                                                    }
                                                                    if (!(a - 1 & a)) break t;f = 0 - (t = (g(a) + 33 | 0) - g(e) | 0) | 0;
                                                                    break n
                                                                }
                                                                nr = 0,
                                                                r = (e >>> 0) / 0 | 0;
                                                                break r
                                                            }
                                                            if ((n = 32 - g(e) | 0) >>> 0 < 31) break i;
                                                            break a
                                                        }
                                                        if (1 == (0 | a)) break e;a = 31 & (t = a ? 31 - g(a - 1 ^ a) | 0 : 32),
                                                        (63 & t) >>> 0 >= 32 ? r = e >>> a | 0 : (n = e >>> a | 0, r = ((1 << a) - 1 & e) << 32 - a | r >>> a),
                                                        nr = n;
                                                        break r
                                                    }
                                                    t = n + 1 | 0,
                                                    f = 63 - n | 0
                                                }
                                                if (i = 31 & (n = 63 & t), n >>> 0 >= 32 ? (n = 0, o = e >>> i | 0) : (n = e >>> i | 0, o = ((1 << i) - 1 & e) << 32 - i | r >>> i), i = 31 & (f &= 63), f >>> 0 >= 32 ? (e = r << i, r = 0) : (e = (1 << i) - 1 & r >>> 32 - i | e << i, r <<= i), t)
                                                    for (s = -1 == (0 | (f = a - 1 | 0)) ? -1 : 0; c = n << 1 | o >>> 31, o = (n = o << 1 | e >>> 31) - (u = a & (i = s - (c + (n >>> 0 > f >>> 0) | 0) >> 31)) | 0, n = c - (n >>> 0 < u >>> 0) | 0, e = e << 1 | r >>> 31, r = b | r << 1, b = 1 & i, t = t - 1 | 0;);nr = e << 1 | r >>> 31,
                                                r = b | r << 1;
                                                break r
                                            }
                                            r = 0,
                                            e = 0
                                        }
                                        nr = e
                                    }
                                    return r
                                }

                                function pr(r, e, a) {
                                    var n = w(0),
                                        i = w(0);
                                    r: {
                                        e: {
                                            a: {
                                                if (2 == (-2 & e)) {
                                                    if (2139156720 == (0 | (e = c[r + 188 >> 2])) | 2140081935 == (0 | e) | 2141891242 == (0 | e) | (n = N[r + 188 >> 2]) == n) break a;
                                                    if (2139156720 == (0 | (e = c[r + 196 >> 2])) | 2140081935 == (0 | e) | 2141891242 == (0 | e) | (n = N[r + 196 >> 2]) == n) break a;
                                                    break e
                                                }
                                                if (!(2139156720 == (0 | (e = c[r + 192 >> 2])) | 2140081935 == (0 | e) | 2141891242 == (0 | e) | (n = N[r + 192 >> 2]) == n || (n = N[r + 196 >> 2], 2139156720 == (0 | (e = c[r + 196 >> 2])) | 2140081935 == (0 | e) | 2141891242 == (0 | e) || n == n))) break e
                                            }
                                            n = w(0);a: {
                                                n: if (2139156720 != (0 | e)) {
                                                    if (2140081935 == (0 | e)) break r;
                                                    r = 4276;
                                                    i: {
                                                        if (2141891242 != (0 | e)) {
                                                            if (b(2, e), (n = d()) == n) break i;
                                                            r = 4268
                                                        }
                                                        switch (n = N[r >> 2], i = w(NaN), c[r + 4 >> 2] - 1 | 0) {
                                                            case 0:
                                                                break r;
                                                            case 1:
                                                                break n;
                                                            default:
                                                                break a
                                                        }
                                                    }
                                                    if (b(2, 536870912 + (-1073741825 & e) | 0), n = d(), !(1073741824 & e)) break r
                                                }i = w(w(n * a) * w(.009999999776482582))
                                            }
                                            return i
                                        }
                                        n = w(0)
                                    }
                                    return n
                                }

                                function Nr(r, e) {
                                    var a, n, i = 0,
                                        t = 0,
                                        o = 0,
                                        u = 0;
                                    for (ar = i = ar - 320 | 0, a = Rr(i, 0, 288), c[(i = a) + 16 >> 2] = 2143289344, c[i + 20 >> 2] = 2143289344, Rr(i + 24 | 0, 0, 49), c[i + 80 >> 2] = 2143289344, o = i + 288 | 0, t = i + 96 | 0; c[(i = t) + 16 >> 2] = -1082130432, c[i + 20 >> 2] = -1082130432, c[i + 8 >> 2] = 0, c[i + 12 >> 2] = 0, c[i >> 2] = -1082130432, c[i + 4 >> 2] = -1082130432, (0 | o) != (0 | (t = i + 24 | 0)););
                                    if (c[a + 312 >> 2] = -1082130432, c[a + 316 >> 2] = -1082130432, c[a + 304 >> 2] = 0, c[a + 308 >> 2] = 0, c[a + 296 >> 2] = -1082130432, c[a + 300 >> 2] = -1082130432, c[a + 288 >> 2] = 2143289344, c[a + 292 >> 2] = 2143289344, kr(r + 228 | 0, a, 320), c[r + 244 >> 2] = 0, c[r + 248 >> 2] = 0, f[r + 4 | 0] = 1 | h[r + 4 | 0], (0 | (t = c[r + 556 >> 2])) != (0 | (n = c[r + 560 >> 2])))
                                        for (; i = c[t >> 2], c[i + 552 >> 2] != (0 | r) && (o = c[r + 568 >> 2], i = Ir(c[o >> 2], h[o + 8 | 0], i, r, u, e), c[t >> 2] = i, c[i + 552 >> 2] = r, i = c[t >> 2]), Nr(i, e), u = u + 1 | 0, (0 | n) != (0 | (t = t + 4 | 0)););
                                    ar = a + 320 | 0
                                }

                                function mr(r, e, a) {
                                    var n = 0,
                                        i = 0,
                                        t = 0,
                                        f = 0;
                                    return (i = ((n = r + 4 | 0) + e | 0) - 1 & 0 - e) + a >>> 0 <= ((e = c[r >> 2]) + r | 0) - 4 >>> 0 ? (t = c[r + 4 >> 2], c[t + 8 >> 2] = c[r + 8 >> 2], c[c[r + 8 >> 2] + 4 >> 2] = t, (0 | n) != (0 | i) && (i = i - n | 0, t = r - (-2 & c[r - 4 >> 2]) | 0, n = i + c[t >> 2] | 0, c[t >> 2] = n, c[(t + (-4 & n) | 0) - 4 >> 2] = n, e = e - i | 0, c[(r = r + i | 0) >> 2] = e), a + 24 >>> 0 <= e >>> 0 ? (e = (e - a | 0) - 8 | 0, c[(n = 8 + (r + a | 0) | 0) >> 2] = e, c[(n + (-4 & e) | 0) - 4 >> 2] = 1 | e, (i = c[n >> 2] - 8 | 0) >>> 0 <= 127 ? e = (i >>> 3 | 0) - 1 | 0 : (e = 110 + ((i >>> 29 - (t = g(i)) ^ 4) - (t << 2) | 0) | 0, i >>> 0 <= 4095 || (e = (e = 71 + ((i >>> 30 - t ^ 2) - (t << 1) | 0) | 0) >>> 0 >= 63 ? 63 : e)), i = e << 4, c[n + 4 >> 2] = i + 5888, i = i + 5896 | 0, c[n + 8 >> 2] = c[i >> 2], c[i >> 2] = n, c[c[n + 8 >> 2] + 4 >> 2] = n, i = c[1730], t = c[1731], n = 31 & e, (63 & e) >>> 0 >= 32 ? (e = 1 << n, n = 0) : (e = (f = 1 << n) - 1 & 1 >>> 32 - n, n = f), c[1730] = n | i, c[1731] = e | t, e = a + 8 | 0, c[r >> 2] = e, c[((-4 & e) + r | 0) - 4 >> 2] = e) : c[(r + e | 0) - 4 >> 2] = e, r = r + 4 | 0) : r = 0, r
                                }

                                function yr(r, e, a) {
                                    var n = 0,
                                        i = 0;
                                    r: if ((0 | r) != (0 | e)) {
                                        if (e - (i = r + a | 0) >>> 0 <= 0 - (a << 1) >>> 0) return kr(r, e, a);
                                        if (n = 3 & (r ^ e), r >>> 0 < e >>> 0) {
                                            if (n) n = r;
                                            else {
                                                if (3 & r)
                                                    for (n = r;;) {
                                                        if (!a) break r;
                                                        if (f[0 | n] = h[0 | e], e = e + 1 | 0, a = a - 1 | 0, !(3 & (n = n + 1 | 0))) break
                                                    } else n = r;
                                                if (!(a >>> 0 <= 3))
                                                    for (; c[n >> 2] = c[e >> 2], e = e + 4 | 0, n = n + 4 | 0, (a = a - 4 | 0) >>> 0 > 3;);
                                            }
                                            if (a)
                                                for (; f[0 | n] = h[0 | e], n = n + 1 | 0, e = e + 1 | 0, a = a - 1 | 0;);
                                        } else {
                                            if (!n) {
                                                if (3 & i)
                                                    for (;;) {
                                                        if (!a) break r;
                                                        if (f[0 | (n = (a = a - 1 | 0) + r | 0)] = h[e + a | 0], !(3 & n)) break
                                                    }
                                                if (!(a >>> 0 <= 3))
                                                    for (; c[(a = a - 4 | 0) + r >> 2] = c[e + a >> 2], a >>> 0 > 3;);
                                            }
                                            if (!a) break r;
                                            for (; f[(a = a - 1 | 0) + r | 0] = h[e + a | 0], a;);
                                        }
                                    }
                                    return r
                                }

                                function wr(r, e, a, n) {
                                    switch (e - 9 | 0) {
                                        case 0:
                                            return e = c[a >> 2], c[a >> 2] = e + 4, void(c[r >> 2] = c[e >> 2]);
                                        case 6:
                                            return e = c[a >> 2], c[a >> 2] = e + 4, e = o[e >> 1], c[r >> 2] = e, void(c[r + 4 >> 2] = e >> 31);
                                        case 7:
                                            return e = c[a >> 2], c[a >> 2] = e + 4, c[r >> 2] = v[e >> 1], void(c[r + 4 >> 2] = 0);
                                        case 8:
                                            return e = c[a >> 2], c[a >> 2] = e + 4, e = f[0 | e], c[r >> 2] = e, void(c[r + 4 >> 2] = e >> 31);
                                        case 9:
                                            return e = c[a >> 2], c[a >> 2] = e + 4, c[r >> 2] = h[0 | e], void(c[r + 4 >> 2] = 0);
                                        case 16:
                                            return e = c[a >> 2] + 7 & -8, c[a >> 2] = e + 8, void(m[r >> 3] = m[e >> 3]);
                                        case 17:
                                            aa[0 | n](r, a);
                                        default:
                                            return;
                                        case 1:
                                        case 4:
                                        case 14:
                                            return e = c[a >> 2], c[a >> 2] = e + 4, e = c[e >> 2], c[r >> 2] = e, void(c[r + 4 >> 2] = e >> 31);
                                        case 2:
                                        case 5:
                                        case 11:
                                        case 15:
                                            return e = c[a >> 2], c[a >> 2] = e + 4, c[r >> 2] = c[e >> 2], void(c[r + 4 >> 2] = 0);
                                        case 3:
                                        case 10:
                                        case 12:
                                        case 13:
                                    }
                                    e = c[a >> 2] + 7 & -8, c[a >> 2] = e + 8, a = c[e + 4 >> 2], c[r >> 2] = c[e >> 2], c[r + 4 >> 2] = a
                                }

                                function Er(r, e, a, n) {
                                    var i = 0,
                                        t = 0,
                                        f = 0,
                                        o = 0,
                                        u = 0,
                                        b = 0,
                                        s = 0,
                                        k = 0,
                                        A = 0,
                                        l = 0,
                                        d = 0,
                                        v = w(0),
                                        p = w(0),
                                        m = w(0),
                                        y = 0,
                                        g = w(0);
                                    if (0 != e && (v = N[r + 248 >> 2], p = N[r + 244 >> 2], m = N[r + 232 >> 2], y = r, g = Dr(k = +N[r + 228 >> 2], e, 0, i = (f = 8 & h[r + 4 | 0]) >>> 3 | 0), N[y + 228 >> 2] = g, y = r, g = Dr(A = +m, e, 0, i), N[y + 232 >> 2] = g, i = (u = dr((l = +p) * e)) != u, t = (b = dr((d = +v) * e)) != b, a = k + a, o = i | (o = E(u) < 1e-4) ? i | !o : !(E(u + -1) < 1e-4), y = r, g = w(Dr(a + l, e, o & (i = 0 != (0 | f)), i & !o) - Dr(a, e, 0, i)), N[y + 244 >> 2] = g, n = A + n, t = t | (f = E(b) < 1e-4) ? t | !f : !(E(b + -1) < 1e-4), y = r, g = w(Dr(n + d, e, i & t, i & !t) - Dr(n, e, 0, i)), N[y + 248 >> 2] = g, (0 | (i = c[r + 560 >> 2])) != (0 | (t = c[r + 556 >> 2]))))
                                        for (t = (i = i - t >> 2) >>> 0 <= 1 ? 1 : i; i = c[r + 556 >> 2], Er(i = c[r + 560 >> 2] - i >> 2 >>> 0 > s >>> 0 ? c[i + (s << 2) >> 2] : 0, e, a, n), (0 | t) != (0 | (s = s + 1 | 0)););
                                }

                                function gr() {
                                    er(7004, 3018), rr(7005, 2479, 1, 1, 0), B(7006, 2139, 1, -128, 127), B(7007, 2132, 1, -128, 127), B(7008, 2130, 1, 0, 255), B(7009, 1286, 2, -32768, 32767), B(7010, 1277, 2, 0, 65535), B(7011, 1315, 4, -2147483648, 2147483647), B(7012, 1306, 4, 0, -1), B(7013, 2658, 4, -2147483648, 2147483647), B(7014, 2649, 4, 0, -1), Me(7015, 1776, -2147483648, 2147483647), Me(7016, 1775, 0, -1), P(7017, 1769, 4), P(7018, 2966, 8), U(7019, 2676), U(7020, 3835), _(7021, 4, 2663), _(7022, 2, 2688), _(7023, 4, 2703), $(7024, 2484), W(7025, 0, 3766), W(7026, 0, 3868), W(7027, 1, 3796), W(7028, 2, 3398), W(7029, 3, 3429), W(7030, 4, 3469), W(7031, 5, 3498), W(7032, 4, 3905), W(7033, 5, 3935), W(7026, 0, 3600), W(7027, 1, 3567), W(7028, 2, 3666), W(7029, 3, 3632), W(7030, 4, 3733), W(7031, 5, 3699), W(7034, 6, 3536), W(7035, 7, 3974)
                                }

                                function Rr(r, e, a) {
                                    var n = 0,
                                        i = 0,
                                        t = 0,
                                        o = 0;
                                    if (a && (f[0 | r] = e, f[(n = r + a | 0) - 1 | 0] = e, !(a >>> 0 < 3 || (f[r + 2 | 0] = e, f[r + 1 | 0] = e, f[n - 3 | 0] = e, f[n - 2 | 0] = e, a >>> 0 < 7 || (f[r + 3 | 0] = e, f[n - 4 | 0] = e, a >>> 0 < 9 || (i = (n = 0 - r & 3) + r | 0, e = y(255 & e, 16843009), c[i >> 2] = e, c[(a = (n = a - n & -4) + i | 0) - 4 >> 2] = e, n >>> 0 < 9 || (c[i + 8 >> 2] = e, c[i + 4 >> 2] = e, c[a - 8 >> 2] = e, c[a - 12 >> 2] = e, n >>> 0 < 25 || (c[i + 24 >> 2] = e, c[i + 20 >> 2] = e, c[i + 16 >> 2] = e, c[i + 12 >> 2] = e, c[a - 16 >> 2] = e, c[a - 20 >> 2] = e, c[a - 24 >> 2] = e, c[a - 28 >> 2] = e, (a = n - (o = 4 & i | 24) | 0) >>> 0 < 32))))))))
                                        for (n = ke(e, 0, 1, 1), t = nr, e = i + o | 0; c[e + 24 >> 2] = n, c[e + 28 >> 2] = t, c[e + 16 >> 2] = n, c[e + 20 >> 2] = t, c[e + 8 >> 2] = n, c[e + 12 >> 2] = t, c[e >> 2] = n, c[e + 4 >> 2] = t, e = e + 32 | 0, (a = a - 32 | 0) >>> 0 > 31;);
                                    return r
                                }

                                function Gr(r) {
                                    var e = 0,
                                        a = 0,
                                        n = 0,
                                        i = 0,
                                        t = 0;
                                    (r |= 0) && (a = i = c[(e = r - 4 | 0) >> 2], n = e, (0 | (r = -2 & (t = c[r - 8 >> 2]))) != (0 | t) && (a = c[4 + (n = e - r | 0) >> 2], c[a + 8 >> 2] = c[n + 8 >> 2], c[c[n + 8 >> 2] + 4 >> 2] = a, a = r + i | 0), (0 | (e = c[(r = e + i | 0) >> 2])) != c[(r + e | 0) - 4 >> 2] && (i = c[r + 4 >> 2], c[i + 8 >> 2] = c[r + 8 >> 2], c[c[r + 8 >> 2] + 4 >> 2] = i, a = e + a | 0), c[n >> 2] = a, c[((-4 & a) + n | 0) - 4 >> 2] = 1 | a, (e = c[n >> 2] - 8 | 0) >>> 0 <= 127 ? r = (e >>> 3 | 0) - 1 | 0 : (r = 110 + ((e >>> 29 - (a = g(e)) ^ 4) - (a << 2) | 0) | 0, e >>> 0 <= 4095 || (r = (r = 71 + ((e >>> 30 - a ^ 2) - (a << 1) | 0) | 0) >>> 0 >= 63 ? 63 : r)), e = r << 4, c[n + 4 >> 2] = e + 5888, e = e + 5896 | 0, c[n + 8 >> 2] = c[e >> 2], c[e >> 2] = n, c[c[n + 8 >> 2] + 4 >> 2] = n, e = c[1730], a = c[1731], n = 31 & r, (63 & r) >>> 0 >= 32 ? (r = 1 << n, i = 0) : r = (i = 1 << n) - 1 & 1 >>> 32 - n, c[1730] = i | e, c[1731] = r | a)
                                }

                                function Zr(r, e, a, n, i) {
                                    var t, f = 0,
                                        o = 0;
                                    if (ar = t = ar - 208 | 0, c[t + 204 >> 2] = a, Rr(a = t + 160 | 0, 0, 40), c[t + 200 >> 2] = c[t + 204 >> 2], (0 | fr(0, e, t + 200 | 0, t + 80 | 0, a, n, i)) < 0) i = -1;
                                    else {
                                        c[r + 76 >> 2], f = c[r >> 2], c[r + 72 >> 2] <= 0 && (c[r >> 2] = -33 & f);
                                        r: {
                                            e: {
                                                if (c[r + 48 >> 2]) {
                                                    if (c[r + 16 >> 2]) break e
                                                } else c[r + 48 >> 2] = 80,
                                                c[r + 28 >> 2] = 0,
                                                c[r + 16 >> 2] = 0,
                                                c[r + 20 >> 2] = 0,
                                                o = c[r + 44 >> 2],
                                                c[r + 44 >> 2] = t;
                                                if (a = -1, Ne(r)) break r
                                            }
                                            a = fr(r, e, t + 200 | 0, t + 80 | 0, t + 160 | 0, n, i)
                                        }
                                        o && (aa[c[r + 36 >> 2]](r, 0, 0), c[r + 48 >> 2] = 0, c[r + 44 >> 2] = o, c[r + 28 >> 2] = 0, e = c[r + 20 >> 2], c[r + 16 >> 2] = 0, c[r + 20 >> 2] = 0, a = e ? a : -1), e = r, r = c[r >> 2], c[e >> 2] = r | 32 & f, i = 32 & r ? -1 : a
                                    }
                                    return ar = t + 208 | 0, i
                                }

                                function Wr(r) {
                                    var e, a = 0,
                                        n = w(0),
                                        i = 0,
                                        t = 0,
                                        f = 0,
                                        o = 0,
                                        u = w(0),
                                        b = 0;
                                    ar = e = ar - 16 | 0;
                                    r: {
                                        if (a = c[r + 12 >> 2]) {
                                            if (u = N[r + 520 >> 2], n = N[r + 516 >> 2], (n = 32 & h[r + 4 | 0] ? w(aa[0 | a](r, n, u, 0)) : w(aa[0 | a](r, n, u))) == n) break r;
                                            c[e >> 2] = 3340, Xr(r, e), je(), A()
                                        }
                                        e: {
                                            a: {
                                                if ((0 | (f = c[r + 556 >> 2])) != (0 | (a = c[r + 560 >> 2]))) {
                                                    for (b = (a = a - f >> 2) >>> 0 <= 1 ? 1 : a;;) {
                                                        if (t = c[(o << 2) + f >> 2], !c[t + 548 >> 2]) {
                                                            if (131072 != (196608 & (a = c[t + 24 >> 2]))) {
                                                                if ((a = a >>> 13 & 7) || (a = c[r + 24 >> 2] >>> 10 & 7), 2 & h[t + 4 | 0] | (8 & h[r + 24 | 0] ? 5 == (0 | a) : 0)) break a;
                                                                i = i || t
                                                            }
                                                            if ((0 | b) != (0 | (o = o + 1 | 0))) continue
                                                        }
                                                        break
                                                    }
                                                    if (i) break e
                                                }
                                                n = N[r + 520 >> 2];
                                                break r
                                            }
                                            i = t
                                        }
                                        n = w(Wr(i) + N[i + 232 >> 2])
                                    }
                                    return ar = e + 16 | 0, n
                                }

                                function Vr(r, e, a, n, i, t) {
                                    var f = 0,
                                        o = w(0),
                                        u = 0,
                                        s = w(0);
                                    f = (c[4252 + (e << 2) >> 2] << 2) + r | 0, o = N[f + 216 >> 2];
                                    r: {
                                        e: {
                                            a: if (2139156720 != (0 | (f = c[f + 216 >> 2]))) {
                                                if (2140081935 == (0 | f)) break e;
                                                u = 4276;
                                                n: {
                                                    if (2141891242 != (0 | f)) {
                                                        if (o == o) break n;
                                                        u = 4268
                                                    }
                                                    switch (s = N[u >> 2], o = w(NaN), c[u + 4 >> 2] - 1 | 0) {
                                                        case 0:
                                                            break e;
                                                        case 1:
                                                            break a;
                                                        default:
                                                            break r
                                                    }
                                                }
                                                if (b(2, 536870912 + (-1073741825 & f) | 0), s = d(), !(1073741824 & f)) break e
                                            }o = w(w(s * a) * w(.009999999776482582));
                                            break r
                                        }
                                        o = s
                                    }
                                    n = w(o + w(Mr(r, e, n) + Yr(r, e, n)));
                                    r: {
                                        e: {
                                            a: switch (c[i >> 2]) {
                                                case 1:
                                                case 2:
                                                    a = N[t >> 2], n = n != n || a < n ? a : n;
                                                    break e;
                                                case 0:
                                                    break a;
                                                default:
                                                    break r
                                            }
                                            if (n != n) break r;c[i >> 2] = 2
                                        }
                                        N[t >> 2] = n
                                    }
                                }

                                function Br(r, e, a) {
                                    var n, i = w(0),
                                        t = w(0),
                                        f = w(0);
                                    r = r + 116 | 0, n = c[4220 + (e << 2) >> 2];
                                    r: {
                                        e: {
                                            a: {
                                                n: if (2139156720 != (0 | (e = 2 != (-2 & e) ? Hr(r, n, 2140081935) : Lr(r, 4, n, 2140081935)))) {
                                                    if (2140081935 == (0 | e)) break r;
                                                    r = 4276;
                                                    i: {
                                                        if (2141891242 != (0 | e)) {
                                                            if (b(2, e), (i = d()) == i) break i;
                                                            r = 4268
                                                        }
                                                        switch (i = N[r >> 2], t = w(NaN), c[r + 4 >> 2] - 1 | 0) {
                                                            case 0:
                                                                break a;
                                                            case 1:
                                                                break n;
                                                            default:
                                                                break e
                                                        }
                                                    }
                                                    if (b(2, 536870912 + (-1073741825 & e) | 0), i = d(), !(1073741824 & e)) break a
                                                }i = w(w(i * a) * w(.009999999776482582))
                                            }
                                            if (i >= w(0)) return i;
                                            if (t = i, i < w(0)) break r
                                        }
                                        f = t == t ? t : w(0)
                                    }
                                    return f
                                }

                                function Tr(r, e, a) {
                                    var n, i = w(0),
                                        t = w(0),
                                        f = w(0);
                                    r = r + 116 | 0, n = c[4236 + (e << 2) >> 2];
                                    r: {
                                        e: {
                                            a: {
                                                n: if (2139156720 != (0 | (e = 2 != (-2 & e) ? Hr(r, n, 2140081935) : Lr(r, 5, n, 2140081935)))) {
                                                    if (2140081935 == (0 | e)) break r;
                                                    r = 4276;
                                                    i: {
                                                        if (2141891242 != (0 | e)) {
                                                            if (b(2, e), (i = d()) == i) break i;
                                                            r = 4268
                                                        }
                                                        switch (i = N[r >> 2], t = w(NaN), c[r + 4 >> 2] - 1 | 0) {
                                                            case 0:
                                                                break a;
                                                            case 1:
                                                                break n;
                                                            default:
                                                                break e
                                                        }
                                                    }
                                                    if (b(2, 536870912 + (-1073741825 & e) | 0), i = d(), !(1073741824 & e)) break a
                                                }i = w(w(i * a) * w(.009999999776482582))
                                            }
                                            if (i >= w(0)) return i;
                                            if (t = i, i < w(0)) break r
                                        }
                                        f = t == t ? t : w(0)
                                    }
                                    return f
                                }

                                function Ir(r, e, a, n, i, t) {
                                    var f = 0;
                                    r: {
                                        if (!r || !(t = 255 & e ? 0 | aa[0 | r](a, n, i, t) : 0 | aa[0 | r](a, n, i))) {
                                            if (e = kr(t = we(588), a, 552), c[e + 564 >> 2] = 0, c[e + 556 >> 2] = 0, c[e + 560 >> 2] = 0, (0 | (i = c[a + 556 >> 2])) != (0 | (n = c[a + 560 >> 2]))) {
                                                if ((0 | (f = n - i | 0)) < 0) break r;
                                                for (r = we(f), c[e + 556 >> 2] = r, c[e + 564 >> 2] = r + f; c[r >> 2] = c[i >> 2], r = r + 4 | 0, (0 | n) != (0 | (i = i + 4 | 0)););
                                                c[e + 560 >> 2] = r
                                            }
                                            r = c[a + 572 >> 2], c[e + 568 >> 2] = c[a + 568 >> 2], c[e + 572 >> 2] = r, c[e + 584 >> 2] = c[a + 584 >> 2], r = c[a + 580 >> 2], c[e + 576 >> 2] = c[a + 576 >> 2], c[e + 580 >> 2] = r, c[e + 552 >> 2] = 0
                                        }
                                        return t
                                    }
                                    I(), A()
                                }

                                function Xr(r, e) {
                                    var a, n = 0,
                                        i = 0;
                                    ar = a = ar - 16 | 0, c[a + 12 >> 2] = e;
                                    r: {
                                        if (r) {
                                            if (e = c[a + 12 >> 2], n = c[r + 568 >> 2]) {
                                                if (i = c[n + 4 >> 2], h[n + 9 | 0]) {
                                                    aa[0 | i](n, r, 5, 0, 4215, e);
                                                    break r
                                                }
                                                aa[0 | i](n, r, 5, 4215, e);
                                                break r
                                            }
                                        } else e = c[a + 12 >> 2];
                                        if (h[6936]) {
                                            if (n = c[1733], i = c[n + 4 >> 2], h[n + 9 | 0]) {
                                                aa[0 | i](n, r, 5, 0, 4215, e);
                                                break r
                                            }
                                        } else n = we(28),
                                        o[n + 20 >> 1] = 0,
                                        c[n + 16 >> 2] = 1065353216,
                                        o[n + 10 >> 1] = 0,
                                        o[n + 12 >> 1] = 0,
                                        c[n >> 2] = 0,
                                        c[n + 24 >> 2] = 0,
                                        f[n + 9 | 0] = 0,
                                        i = 1,
                                        c[n + 4 >> 2] = 1,
                                        f[n + 22 | 0] = 0,
                                        c[1733] = n,
                                        f[6936] = 1,
                                        c[1732] = c[1732] + 1;aa[0 | i](n, r, 5, 4215, e)
                                    }
                                    ar = a + 16 | 0
                                }

                                function Or(r, e, a) {
                                    var n, i = w(0),
                                        t = w(0);
                                    r = r + 80 | 0, n = c[4236 + (e << 2) >> 2];
                                    r: {
                                        e: {
                                            a: if (2139156720 != (0 | (e = 2 != (-2 & e) ? Hr(r, n, 2140081935) : Lr(r, 5, n, 2140081935)))) {
                                                if (2140081935 == (0 | e)) break r;
                                                r = 4276;
                                                n: {
                                                    if (2141891242 != (0 | e)) {
                                                        if (b(2, e), (i = d()) == i) break n;
                                                        r = 4268
                                                    }
                                                    switch (i = N[r >> 2], t = w(NaN), c[r + 4 >> 2] - 1 | 0) {
                                                        case 0:
                                                            break r;
                                                        case 1:
                                                            break a;
                                                        default:
                                                            break e
                                                    }
                                                }
                                                if (b(2, 536870912 + (-1073741825 & e) | 0), i = d(), !(1073741824 & e)) break r
                                            }t = w(w(i * a) * w(.009999999776482582))
                                        }
                                        return t
                                    }
                                    return i
                                }

                                function _r(r, e, a) {
                                    var n, i = w(0),
                                        t = w(0);
                                    r = r + 80 | 0, n = c[4220 + (e << 2) >> 2];
                                    r: {
                                        e: {
                                            a: if (2139156720 != (0 | (e = 2 != (-2 & e) ? Hr(r, n, 2140081935) : Lr(r, 4, n, 2140081935)))) {
                                                if (2140081935 == (0 | e)) break r;
                                                r = 4276;
                                                n: {
                                                    if (2141891242 != (0 | e)) {
                                                        if (b(2, e), (i = d()) == i) break n;
                                                        r = 4268
                                                    }
                                                    switch (i = N[r >> 2], t = w(NaN), c[r + 4 >> 2] - 1 | 0) {
                                                        case 0:
                                                            break r;
                                                        case 1:
                                                            break a;
                                                        default:
                                                            break e
                                                    }
                                                }
                                                if (b(2, 536870912 + (-1073741825 & e) | 0), i = d(), !(1073741824 & e)) break r
                                            }t = w(w(i * a) * w(.009999999776482582))
                                        }
                                        return t
                                    }
                                    return i
                                }

                                function Lr(r, e, a, n) {
                                    var i = w(0);
                                    return i = N[(e = (e << 2) + r | 0) >> 2], 2139156720 == (0 | (e = c[e >> 2])) | 2140081935 == (0 | e) | 2141891242 == (0 | e) | i == i || (i = N[(e = (a << 2) + r | 0) >> 2], 2139156720 == (0 | (e = c[e >> 2])) | 2140081935 == (0 | e) | 2141891242 == (0 | e) | i == i || 2139156720 == (0 | (e = c[r + 24 >> 2])) | 2140081935 == (0 | e) | 2141891242 == (0 | e) | (i = N[r + 24 >> 2]) == i || (i = N[r + 32 >> 2], (2139156720 == (0 | (r = c[r + 32 >> 2])) | 2140081935 == (0 | r) | 2141891242 == (0 | r) || (e = n, i == i)) && (e = r))), e
                                }

                                function Fr(r, e, a, n, i) {
                                    var t, f = 0,
                                        o = 0,
                                        u = w(0);
                                    f = 2, o = c[r + 24 >> 2] >>> 2 & 3;
                                    r: {
                                        e: {
                                            a: {
                                                if (!(!c[r + 552 >> 2] | 2 != (0 | e))) {
                                                    e = 0, f = 3;
                                                    n: switch (o - 2 | 0) {
                                                        case 0:
                                                            break r;
                                                        case 1:
                                                            break n;
                                                        default:
                                                            break a
                                                    }
                                                    f = 2;
                                                    break r
                                                }
                                                if (e = 0, o >>> 0 > 1) break e
                                            }
                                            e = f
                                        }
                                        f = o
                                    }
                                    a = Le(r, f, a), n = Le(r, e, n), u = Mr(r, f, i), N[(o = r + 228 | 0) + (c[4220 + (t = f << 2) >> 2] << 2) >> 2] = a + u, u = Yr(r, f, i), N[o + (c[t + 4236 >> 2] << 2) >> 2] = a + u, a = Mr(r, e, i), N[o + (c[4220 + (f = e << 2) >> 2] << 2) >> 2] = n + a, a = Yr(r, e, i), N[o + (c[f + 4236 >> 2] << 2) >> 2] = n + a
                                }

                                function Cr(r) {
                                    var e = 0,
                                        a = 0,
                                        n = 0,
                                        i = 0;
                                    if (r |= 0) {
                                        if (e = c[r >> 2], (a = c[e + 552 >> 2]) && (ee(a, e), c[e + 552 >> 2] = 0), (0 | (n = c[e + 560 >> 2])) != (0 | (a = c[e + 556 >> 2])))
                                            for (i = (n = n - a >> 2) >>> 0 <= 1 ? 1 : n, n = 0; c[c[a + (n << 2) >> 2] + 552 >> 2] = 0, (0 | i) != (0 | (n = n + 1 | 0)););
                                        c[e + 560 >> 2] = a, Pr(e + 556 | 0), (a = c[e + 556 >> 2]) && (c[e + 560 >> 2] = a, Gr(a)), Gr(e), e = c[r + 8 >> 2], c[r + 8 >> 2] = 0, e && aa[c[c[e >> 2] + 4 >> 2]](e), e = c[r + 4 >> 2], c[r + 4 >> 2] = 0, e && aa[c[c[e >> 2] + 4 >> 2]](e), Gr(r)
                                    }
                                }

                                function Pr(r) {
                                    var e, a = 0,
                                        n = 0,
                                        i = 0,
                                        t = 0;
                                    ar = e = ar - 32 | 0, a = c[r >> 2], (n = c[r + 4 >> 2] - a >> 2) >>> 0 >= c[r + 8 >> 2] - a >> 2 >>> 0 || (n = pe(e + 8 | 0, n, n, r + 8 | 0), a = c[r >> 2], i = c[r + 4 >> 2] - a | 0, i = yr(c[n + 4 >> 2] - i | 0, a, i), a = c[r >> 2], c[r >> 2] = i, c[n + 4 >> 2] = a, i = c[r + 4 >> 2], c[r + 4 >> 2] = c[n + 8 >> 2], c[n + 8 >> 2] = i, t = c[r + 8 >> 2], c[r + 8 >> 2] = c[n + 12 >> 2], c[n >> 2] = a, c[n + 12 >> 2] = t, (0 | a) != (0 | i) && (c[n + 8 >> 2] = i + (3 + (a - i | 0) & -4)), a && Gr(a)), ar = e + 32 | 0
                                }

                                function Ur(r, e, a) {
                                    var n = 0,
                                        i = 0,
                                        t = 0;
                                    if (!(32 & h[0 | r])) r: {
                                        n = e;e: {
                                            if (!(r = c[(e = r) + 16 >> 2])) {
                                                if (Ne(e)) break e;
                                                r = c[e + 16 >> 2]
                                            }
                                            if (r - (t = c[e + 20 >> 2]) >>> 0 < a >>> 0) {
                                                aa[c[e + 36 >> 2]](e, n, a);
                                                break r
                                            }
                                            a: if (!(c[e + 80 >> 2] < 0)) {
                                                for (r = a;;) {
                                                    if (i = r, !r) break a;
                                                    if (10 == h[n + (r = i - 1 | 0) | 0]) break
                                                }
                                                if (aa[c[e + 36 >> 2]](e, n, i) >>> 0 < i >>> 0) break e;
                                                n = n + i | 0, a = a - i | 0, t = c[e + 20 >> 2]
                                            }kr(t, n, a),
                                            c[e + 20 >> 2] = c[e + 20 >> 2] + a
                                        }
                                    }
                                }

                                function Sr(r, e, a) {
                                    var n, i = 0,
                                        t = 0;
                                    ar = n = ar - 16 | 0, i = r + 24 | 0, aa[0 | e](n + 8 | 0, i), t = c[n + 12 >> 2];
                                    r: if ((c[c[n + 8 >> 2] >> 2] & 7 << t) >> t != (0 | a))
                                        for (aa[0 | e](n + 8 | 0, i), i = e = c[n + 8 >> 2], t = c[e >> 2], e = c[n + 12 >> 2], c[i >> 2] = t & (7 << e ^ -1) | (7 & a) << e;;) {
                                            if (4 & (e = h[r + 4 | 0])) break r;
                                            if (f[r + 4 | 0] = 4 | e, (e = c[r + 20 >> 2]) && aa[0 | e](r), c[r + 308 >> 2] = 2143289344, !(r = c[r + 552 >> 2])) break
                                        }
                                    ar = n + 16 | 0
                                }

                                function Yr(r, e, a) {
                                    var n, i = w(0);
                                    r = r + 44 | 0, n = c[4236 + (e << 2) >> 2];
                                    r: {
                                        if (2139156720 != (0 | (r = 2 != (-2 & e) ? Hr(r, n, 2140081935) : Lr(r, 5, n, 2140081935)))) {
                                            if (2140081935 == (0 | r) | 2141891242 == (0 | r)) break r;
                                            if (b(2, r), (i = d()) != i) return w(NaN);
                                            if (b(2, 536870912 + (-1073741825 & r) | 0), i = d(), !(1073741824 & r)) break r
                                        }
                                        i = w(w(i * a) * w(.009999999776482582))
                                    }
                                    return i
                                }

                                function Mr(r, e, a) {
                                    var n, i = w(0);
                                    r = r + 44 | 0, n = c[4220 + (e << 2) >> 2];
                                    r: {
                                        if (2139156720 != (0 | (r = 2 != (-2 & e) ? Hr(r, n, 2140081935) : Lr(r, 4, n, 2140081935)))) {
                                            if (2140081935 == (0 | r) | 2141891242 == (0 | r)) break r;
                                            if (b(2, r), (i = d()) != i) return w(NaN);
                                            if (b(2, 536870912 + (-1073741825 & r) | 0), i = d(), !(1073741824 & r)) break r
                                        }
                                        i = w(w(i * a) * w(.009999999776482582))
                                    }
                                    return i
                                }

                                function Hr(r, e, a) {
                                    var n = w(0);
                                    return n = N[(e = (e << 2) + r | 0) >> 2], 2139156720 == (0 | (e = c[e >> 2])) | 2140081935 == (0 | e) | 2141891242 == (0 | e) | n == n || 2139156720 == (0 | (e = c[r + 28 >> 2])) | 2140081935 == (0 | e) | 2141891242 == (0 | e) | (n = N[r + 28 >> 2]) == n || (n = N[r + 32 >> 2], (2139156720 == (0 | (r = c[r + 32 >> 2])) | 2140081935 == (0 | r) | 2141891242 == (0 | r) || (e = a, n == n)) && (e = r)), e
                                }

                                function Qr(r, e) {
                                    var a, n = w(0);
                                    return r = r + 152 | 0, a = c[4236 + (e << 2) >> 2], r = 2 != (-2 & e) ? Hr(r, a, 2140081935) : Lr(r, 5, a, 2140081935), n = w(0), 2139156720 != (0 | r) && (n = w(0), 2140081935 != (0 | r) && (2141891242 == (0 | r) || (b(2, r), (n = d()) != n) ? n = w(NaN) : (b(2, 536870912 + (-1073741825 & r) | 0), n = d()))), Re(n, w(0))
                                }

                                function zr(r, e) {
                                    var a, n = w(0);
                                    return r = r + 152 | 0, a = c[4220 + (e << 2) >> 2], r = 2 != (-2 & e) ? Hr(r, a, 2140081935) : Lr(r, 4, a, 2140081935), n = w(0), 2139156720 != (0 | r) && (n = w(0), 2140081935 != (0 | r) && (2141891242 == (0 | r) || (b(2, r), (n = d()) != n) ? n = w(NaN) : (b(2, 536870912 + (-1073741825 & r) | 0), n = d()))), Re(n, w(0))
                                }

                                function Dr(r, e, a, n) {
                                    var i, t = 0,
                                        f = 0;
                                    r: if ((i = (t = (t = dr(r *= e)) < 0 ? t + 1 : t) != t) | !(E(t) < 1e-4)) {
                                        if (t == t) {
                                            if (r -= t, E(t + -1) < 1e-4) {
                                                r += 1;
                                                break r
                                            }
                                        } else r -= t;
                                        a ? r += 1 : n || (f = 0, i || (f = 1, t > .5 || (f = E(t + -.5) < 1e-4 ? 1 : 0)), r += f)
                                    } else r -= t;
                                    return w(r != r | e != e ? NaN : r / e)
                                }

                                function jr(r) {
                                    var e = w(0),
                                        a = 0,
                                        n = w(0);
                                    a = 0;
                                    r: if (131072 != (196608 & c[r + 24 >> 2])) {
                                        if (c[r + 552 >> 2]) {
                                            if (((e = N[r + 32 >> 2]) == e || (e = N[r + 28 >> 2]) > w(0)) && (a = 1, e != w(0))) break r;
                                            (e = N[r + 36 >> 2]) != e && (f[r + 4 | 0] < 0 ? e = w(1) : (e = w(0), (n = N[r + 28 >> 2]) < w(0) && (e = w(-n))))
                                        }
                                        a = e != w(0)
                                    }
                                    return a
                                }

                                function xr(r, e) {
                                    var a = w(0);
                                    r: {
                                        if (2139156720 != (0 | e)) {
                                            if (2140081935 != (0 | e)) {
                                                if (2141891242 != (0 | e)) break r;
                                                return c[r >> 2] = 2143289344, void(c[r + 4 >> 2] = 3)
                                            }
                                            return c[r >> 2] = 0, void(c[r + 4 >> 2] = 1)
                                        }
                                        return c[r >> 2] = 0,
                                        void(c[r + 4 >> 2] = 2)
                                    }
                                    if (b(2, e), (a = d()) != a) return c[r >> 2] = 2143289344, void(c[r + 4 >> 2] = 0);
                                    c[r + 4 >> 2] = 1073741824 & e ? 2 : 1, c[r >> 2] = 536870912 + (-1073741825 & e)
                                }

                                function Jr(r) {
                                    var e = 0,
                                        a = 0,
                                        n = 0;
                                    r: if (8 & (a = c[r + 24 >> 2]) && (e = 1, 5120 != (7168 & a) && (e = 0, (0 | (n = c[r + 560 >> 2])) != (0 | (a = c[r + 556 >> 2])))))
                                        for (n = (r = n - a >> 2) >>> 0 <= 1 ? 1 : r, r = 0;;) {
                                            if (e = 131072 != (196608 & (e = c[c[a + (r << 2) >> 2] + 24 >> 2])) & 40960 == (57344 & e)) break r;
                                            if ((0 | n) == (0 | (r = r + 1 | 0))) break
                                        }
                                    return e
                                }

                                function Kr(r) {
                                    var e = 0,
                                        a = w(0);
                                    return e = 2143289344, w(E(r)) == w(1 / 0) | r != r || (e = 2139156720, r < w(10842021724855044e-35) & r > w(-10842021724855044e-35) | r == w(0) || (b(2, -2147483648 & (l(r), u(2)) | 1602224127), a = d(), e = 1073741824 | (l(r > w(0xffffff0000000000) || r < w(-0xffffff0000000000) ? a : r), u(2) - 536870912))), e
                                }

                                function qr(r) {
                                    var e = 0,
                                        a = w(0);
                                    return e = 2143289344, w(E(r)) == w(1 / 0) | r != r || (e = 2140081935, r < w(10842021724855044e-35) & r > w(-10842021724855044e-35) | r == w(0) || (b(2, -2147483648 & (l(r), u(2)) | 1610612735), a = d(), e = 0 | (l(r > w(0x1fffffe0000000000) || r < w(-0x1fffffe0000000000) ? a : r), u(2) - 536870912))), e
                                }

                                function $r(r, e) {
                                    return e ? e = Te(c[e >> 2]) : (h[6936] ? e = c[1733] : (e = we(28), o[e + 20 >> 1] = 0, c[e + 16 >> 2] = 1065353216, o[e + 10 >> 1] = 0, o[e + 12 >> 1] = 0, c[e >> 2] = 0, c[e + 24 >> 2] = 0, f[e + 9 | 0] = 0, c[e + 4 >> 2] = 1, f[e + 22 | 0] = 0, c[1733] = e, f[6936] = 1, c[1732] = c[1732] + 1), e = Te(e)), c[r + 4 >> 2] = 0, c[r + 8 >> 2] = 0, c[r >> 2] = e, c[e >> 2] = r, r
                                }

                                function re(r, e, a) {
                                    var n = 0,
                                        i = 0,
                                        t = 0;
                                    if (e)
                                        for (; r = ke(n = vr(r, e, 10), i = nr, 246, 0) + r | 0, f[0 | (a = a - 1 | 0)] = 48 | r, t = e >>> 0 > 9, r = n, e = i, t;);
                                    else n = r;
                                    if (n)
                                        for (; r = (n >>> 0) / 10 | 0, f[0 | (a = a - 1 | 0)] = y(r, 246) + n | 48, e = n >>> 0 > 9, n = r, e;);
                                    return a
                                }

                                function ee(r, e) {
                                    var a = 0,
                                        n = 0;
                                    r: {
                                        e: if ((0 | (a = c[r + 556 >> 2])) != (0 | (n = c[r + 560 >> 2]))) {
                                            for (;;) {
                                                if (c[a >> 2] == (0 | e)) break e;
                                                if ((0 | n) == (0 | (a = a + 4 | 0))) break
                                            }
                                            break r
                                        }if ((0 | a) != (0 | n)) return yr(a, e = a + 4 | 0, n - e | 0), c[r + 560 >> 2] = n - 4, 1
                                    }
                                    return 0
                                }

                                function ae(r, e) {
                                    var a, n, i = 0;
                                    if (k(+r), a = 0 | u(1), n = 0 | u(0), 2047 != (0 | (i = a >>> 20 & 2047))) {
                                        if (!i) return 0 == r ? i = 0 : (r = ae(0x10000000000000000 * r, e), i = c[e >> 2] + -64 | 0), c[e >> 2] = i, r;
                                        c[e >> 2] = i - 1022, b(0, 0 | n), b(1, -2146435073 & a | 1071644672), r = +s()
                                    }
                                    return r
                                }

                                function ne(r, e, a) {
                                    var n = 0;
                                    r: if (c[184 + ((n = r + 24 | 0) + (e << 2) | 0) >> 2] != (0 | a))
                                        for (c[184 + ((e << 2) + n | 0) >> 2] = a;;) {
                                            if (4 & (e = h[r + 4 | 0])) break r;
                                            if (f[r + 4 | 0] = 4 | e, (e = c[r + 20 >> 2]) && aa[0 | e](r), c[r + 308 >> 2] = 2143289344, !(r = c[r + 552 >> 2])) break
                                        }
                                }

                                function ie(r, e, a) {
                                    var n = 0;
                                    r: if (c[192 + ((n = r + 24 | 0) + (e << 2) | 0) >> 2] != (0 | a))
                                        for (c[192 + ((e << 2) + n | 0) >> 2] = a;;) {
                                            if (4 & (e = h[r + 4 | 0])) break r;
                                            if (f[r + 4 | 0] = 4 | e, (e = c[r + 20 >> 2]) && aa[0 | e](r), c[r + 308 >> 2] = 2143289344, !(r = c[r + 552 >> 2])) break
                                        }
                                }

                                function te(r, e, a) {
                                    var n = 0;
                                    r: if (c[176 + ((n = r + 24 | 0) + (e << 2) | 0) >> 2] != (0 | a))
                                        for (c[176 + ((e << 2) + n | 0) >> 2] = a;;) {
                                            if (4 & (e = h[r + 4 | 0])) break r;
                                            if (f[r + 4 | 0] = 4 | e, (e = c[r + 20 >> 2]) && aa[0 | e](r), c[r + 308 >> 2] = 2143289344, !(r = c[r + 552 >> 2])) break
                                        }
                                }

                                function fe(r, e) {
                                    var a = 0,
                                        n = 0,
                                        i = 0;
                                    r: if (c[16 + (a = r + 24 | 0) >> 2] != (0 | e))
                                        for (n = 0 | aa[9](a), i = e, c[n + 16 >> 2] = i;;) {
                                            if (4 & (e = h[r + 4 | 0])) break r;
                                            if (f[r + 4 | 0] = 4 | e, (e = c[r + 20 >> 2]) && aa[0 | e](r), c[r + 308 >> 2] = 2143289344, !(r = c[r + 552 >> 2])) break
                                        }
                                }

                                function oe(r, e, a) {
                                    var n = 0;
                                    r: if (c[56 + ((n = r + 24 | 0) + (e << 2) | 0) >> 2] != (0 | a))
                                        for (c[56 + ((e << 2) + n | 0) >> 2] = a;;) {
                                            if (4 & (e = h[r + 4 | 0])) break r;
                                            if (f[r + 4 | 0] = 4 | e, (e = c[r + 20 >> 2]) && aa[0 | e](r), c[r + 308 >> 2] = 2143289344, !(r = c[r + 552 >> 2])) break
                                        }
                                }

                                function ce(r, e, a) {
                                    var n = 0;
                                    r: if (c[92 + ((n = r + 24 | 0) + (e << 2) | 0) >> 2] != (0 | a))
                                        for (c[92 + ((e << 2) + n | 0) >> 2] = a;;) {
                                            if (4 & (e = h[r + 4 | 0])) break r;
                                            if (f[r + 4 | 0] = 4 | e, (e = c[r + 20 >> 2]) && aa[0 | e](r), c[r + 308 >> 2] = 2143289344, !(r = c[r + 552 >> 2])) break
                                        }
                                }

                                function ue(r, e, a) {
                                    var n = 0;
                                    r: if (c[20 + ((n = r + 24 | 0) + (e << 2) | 0) >> 2] != (0 | a))
                                        for (c[20 + ((e << 2) + n | 0) >> 2] = a;;) {
                                            if (4 & (e = h[r + 4 | 0])) break r;
                                            if (f[r + 4 | 0] = 4 | e, (e = c[r + 20 >> 2]) && aa[0 | e](r), c[r + 308 >> 2] = 2143289344, !(r = c[r + 552 >> 2])) break
                                        }
                                }

                                function be(r, e) {
                                    var a, n = w(0);
                                    return r = r + 80 | 0, a = c[4236 + (e << 2) >> 2], 2139156720 == (0 | (r = 2 != (-2 & e) ? Hr(r, a, 2143289344) : Lr(r, 5, a, 2143289344))) | 2140081935 == (0 | r) | 2141891242 == (0 | r) ? r = 1 : (b(2, r), r = (n = d()) == n), r
                                }

                                function se(r, e) {
                                    var a, n = w(0);
                                    return r = r + 80 | 0, a = c[4220 + (e << 2) >> 2], 2139156720 == (0 | (r = 2 != (-2 & e) ? Hr(r, a, 2143289344) : Lr(r, 4, a, 2143289344))) | 2140081935 == (0 | r) | 2141891242 == (0 | r) ? r = 1 : (b(2, r), r = (n = d()) == n), r
                                }

                                function ke(r, e, a, n) {
                                    var i, t, f, o, c = 0,
                                        u = 0;
                                    return o = y(c = a >>> 16 | 0, u = r >>> 16 | 0), c = (65535 & (u = ((f = y(i = 65535 & a, t = 65535 & r)) >>> 16 | 0) + y(u, i) | 0)) + y(c, t) | 0, nr = (y(e, a) + o | 0) + y(r, n) + (u >>> 16) + (c >>> 16) | 0, 65535 & f | c << 16
                                }

                                function Ae(r, e) {
                                    var a, n, i = 0;
                                    ar = a = ar - 16 | 0, n = -17 & (i = h[r + 4 | 0]), f[r + 4 | 0] = n;
                                    r: {
                                        if (e) {
                                            if (c[r + 560 >> 2] != c[r + 556 >> 2]) break r;
                                            i = 8 | n
                                        } else i &= 231;
                                        return c[r + 8 >> 2] = e,
                                        f[r + 4 | 0] = i,
                                        void(ar = a + 16 | 0)
                                    }
                                    c[a >> 2] = 4059, Xr(r, a), je(), A()
                                }

                                function le(r, e, a, n, i) {
                                    var t;
                                    if (ar = t = ar - 256 | 0, !(73728 & i | (0 | a) <= (0 | n))) {
                                        if (Rr(t, 255 & e, (a = (n = a - n | 0) >>> 0 < 256) ? n : 256), !a)
                                            for (; Ur(r, t, 256), (n = n - 256 | 0) >>> 0 > 255;);
                                        Ur(r, t, n)
                                    }
                                    ar = t + 256 | 0
                                }

                                function de(r, e, a) {
                                    var n = 0,
                                        i = w(0);
                                    2 == (-2 & a) && (i = N[(n = e - -64 | 0) >> 2], 2139156720 == (0 | (n = c[n >> 2])) | 2140081935 == (0 | n) | 2141891242 == (0 | n) | i == i) || (n = c[44 + ((c[4236 + (a << 2) >> 2] << 2) + e | 0) >> 2]), xr(r, n)
                                }

                                function he(r, e, a) {
                                    var n = 0,
                                        i = w(0);
                                    2 == (-2 & a) && 2139156720 == (0 | (n = c[e + 60 >> 2])) | 2140081935 == (0 | n) | 2141891242 == (0 | n) | (i = N[e + 60 >> 2]) == i || (n = c[44 + ((c[4220 + (a << 2) >> 2] << 2) + e | 0) >> 2]), xr(r, n)
                                }

                                function ve(r) {
                                    var e = 0,
                                        a = 0,
                                        n = 0;
                                    for (n = c[r >> 2]; xe(a = f[0 | n]);) n = n + 1 | 0, c[r >> 2] = n, e = e >>> 0 <= 214748364 ? (0 | (a = a - 48 | 0)) > (2147483647 ^ (e = y(e, 10))) ? -1 : a + e | 0 : -1;
                                    return e
                                }

                                function pe(r, e, a, n) {
                                    var i = 0;
                                    c[r + 12 >> 2] = 0, c[r + 16 >> 2] = n;
                                    r: {
                                        if (e) {
                                            if (e >>> 0 >= 1073741824) break r;
                                            i = we(e << 2)
                                        }
                                        return c[r >> 2] = i,
                                        a = (a << 2) + i | 0,
                                        c[r + 8 >> 2] = a,
                                        c[r + 12 >> 2] = (e << 2) + i,
                                        c[r + 4 >> 2] = a,
                                        r
                                    }
                                    ea(), A()
                                }

                                function Ne(r) {
                                    var e = 0;
                                    return e = c[r + 72 >> 2], c[r + 72 >> 2] = e - 1 | e, 8 & (e = c[r >> 2]) ? (c[r >> 2] = 32 | e, -1) : (c[r + 4 >> 2] = 0, c[r + 8 >> 2] = 0, e = c[r + 44 >> 2], c[r + 28 >> 2] = e, c[r + 20 >> 2] = e, c[r + 16 >> 2] = e + c[r + 48 >> 2], 0)
                                }

                                function me(r, e, a, n) {
                                    e |= 0, a |= 0, n |= 0;
                                    var i = 0;
                                    i = c[(r |= 0) >> 2], e = ((r = c[r + 4 >> 2]) >> 1) + e | 0, 1 & r && (i = c[i + c[e >> 2] >> 2]), aa[0 | i](e, a, n)
                                }

                                function ye(r, e, a) {
                                    e |= 0, a |= 0;
                                    var n = 0;
                                    return n = c[(r |= 0) >> 2], e = ((r = c[r + 4 >> 2]) >> 1) + e | 0, 1 & r && (n = c[n + c[e >> 2] >> 2]), 0 | aa[0 | n](e, a)
                                }

                                function we(r) {
                                    var e = 0;
                                    r = r || 1;
                                    r: {
                                        for (;;) {
                                            if (e = cr(r)) break r;
                                            if (!(e = c[2022])) break;
                                            aa[0 | e]()
                                        }
                                        I(),
                                        A()
                                    }
                                    return e
                                }

                                function Ee(r, e, a) {
                                    e |= 0, a |= 0;
                                    var n = 0;
                                    n = c[(r |= 0) >> 2], e = ((r = c[r + 4 >> 2]) >> 1) + e | 0, 1 & r && (n = c[n + c[e >> 2] >> 2]), aa[0 | n](e, a)
                                }

                                function ge(r, e) {
                                    e |= 0;
                                    var a = 0;
                                    return a = c[(r |= 0) >> 2], e = ((r = c[r + 4 >> 2]) >> 1) + e | 0, 1 & r && (a = c[a + c[e >> 2] >> 2]), 0 | aa[0 | a](e)
                                }

                                function Re(r, e) {
                                    return (2147483647 & (l(r), u(2))) >>> 0 <= 2139095040 ? (2147483647 & (l(e), u(2))) >>> 0 > 2139095040 ? r : w(G(r, e)) : e
                                }

                                function Ge(r, e) {
                                    return (2147483647 & (l(r), u(2))) >>> 0 <= 2139095040 ? (2147483647 & (l(e), u(2))) >>> 0 > 2139095040 ? r : w(R(r, e)) : e
                                }

                                function Ze(r, e) {
                                    var a;
                                    return r |= 0, e |= 0, ar = a = ar - 16 | 0, c[a + 8 >> 2] = e, r = 0 | aa[0 | r](a + 8 | 0), X(c[a + 8 >> 2]), ar = a + 16 | 0, 0 | r
                                }

                                function We(r, e) {
                                    return r ? (57216 == (-128 & e) | e >>> 0 <= 127 ? (f[0 | r] = e, r = 1) : (c[1761] = 25, r = -1), r) : 0
                                }

                                function Ve(r, e) {
                                    var a, n;
                                    a = we(4), c[a >> 2] = e, n = we(4), c[n >> 2] = e, O(6955, 0 | r, 7018, 4630, 192, 0 | a, 7018, 4634, 193, 0 | n)
                                }

                                function Be(r, e) {
                                    var a, n;
                                    a = we(4), c[a >> 2] = e, n = we(4), c[n >> 2] = e, O(6985, 0 | r, 7018, 4630, 190, 0 | a, 7018, 4634, 191, 0 | n)
                                }

                                function Te(r) {
                                    var e, a;
                                    return ar = e = ar - 16 | 0, a = br(we(588), r), r || (c[e >> 2] = 2759, Xr(0, e), je(), A()), ar = e + 16 | 0, a
                                }

                                function Ie(r, e) {
                                    var a = 0;
                                    1 & f[6964] ? a = c[1740] : (a = 0 | C(1, 4400), f[6964] = 1, c[1740] = a), z(0 | a, 0 | r, 0 | e, 0)
                                }

                                function Xe(r, e) {
                                    e |= 0;
                                    var a = 0;
                                    a = c[(r |= 0) >> 2], e = ((r = c[r + 4 >> 2]) >> 1) + e | 0, 1 & r && (a = c[a + c[e >> 2] >> 2]), aa[0 | a](e)
                                }

                                function Oe(r) {
                                    return c[(r |= 0) >> 2] = 4508, h[r + 4 | 0] && Ie(c[r + 8 >> 2], 1758), X(c[r + 8 >> 2]), 0 | r
                                }

                                function _e(r) {
                                    return c[(r |= 0) >> 2] = 4388, h[r + 4 | 0] && Ie(c[r + 8 >> 2], 1758), X(c[r + 8 >> 2]), 0 | r
                                }

                                function Le(r, e, a) {
                                    return se(r, e) ? _r(r, e, a) : ((a = Or(r, e, a)) == a && (a = w(-a)), a)
                                }

                                function Fe(r) {
                                    var e = 0;
                                    (r |= 0) && ((e = c[r >> 2]) && Gr(e), c[1732] = c[1732] - 1, Gr(r))
                                }

                                function Ce(r, e, a) {
                                    e |= 0, a = +a, m[c[(r |= 0) >> 2] + e >> 3] = a
                                }

                                function Pe(r, e) {
                                    return e |= 0, +m[c[(r |= 0) >> 2] + e >> 3]
                                }

                                function Ue(r) {
                                    (r |= 0) && aa[c[c[r >> 2] + 4 >> 2]](r)
                                }

                                function Se(r) {
                                    return r ? (c[1761] = r, -1) : 0
                                }

                                function Ye(r, e, a) {
                                    return w(Mr(r, e, a) + Yr(r, e, a))
                                }

                                function Me(r, e, a, n) {
                                    j(0 | r, 0 | e, 8, 0, 0 | a, -1, 0 | n)
                                }

                                function He(r, e) {
                                    e |= 0, aa[c[(r |= 0) >> 2]](e)
                                }

                                function Qe(r, e, a) {
                                    return Zr(r, e, a, 2, 3)
                                }

                                function ze(r) {
                                    return 0 | aa[0 | (r |= 0)]()
                                }

                                function De(r, e) {
                                    e |= 0, aa[0 | (r |= 0)](e)
                                }

                                function je() {
                                    aa[c[1470]](), ea(), A()
                                }

                                function xe(r) {
                                    return r - 48 >>> 0 < 10
                                }

                                function Je(r) {
                                    (r |= 0) && Gr(r)
                                }

                                function Ke(r) {
                                    return 0 | r
                                }

                                function qe(r) {
                                    f[4 + (r |= 0) | 0] = 1
                                }

                                function $e(r) {
                                    A()
                                }

                                function ra() {
                                    ea(), A()
                                }

                                function ea() {
                                    I(), A()
                                }
                                i(e = h, 1024, "T25seSBsZWFmIG5vZGVzIHdpdGggY3VzdG9tIG1lYXN1cmUgZnVuY3Rpb25zc2hvdWxkIG1hbnVhbGx5IG1hcmsgdGhlbXNlbHZlcyBhcyBkaXJ0eQBpc0RpcnR5AG1hcmtEaXJ0eQBkZXN0cm95AHNldERpc3BsYXkAZ2V0RGlzcGxheQBzZXRGbGV4AC0rICAgMFgweAAtMFgrMFggMFgtMHgrMHggMHgAc2V0RmxleEdyb3cAZ2V0RmxleEdyb3cAc2V0T3ZlcmZsb3cAZ2V0T3ZlcmZsb3cAY2FsY3VsYXRlTGF5b3V0AGdldENvbXB1dGVkTGF5b3V0AHVuc2lnbmVkIHNob3J0AGdldENoaWxkQ291bnQAdW5zaWduZWQgaW50AHNldEp1c3RpZnlDb250ZW50AGdldEp1c3RpZnlDb250ZW50AHNldEFsaWduQ29udGVudABnZXRBbGlnbkNvbnRlbnQAZ2V0UGFyZW50AGltcGxlbWVudABzZXRNYXhIZWlnaHRQZXJjZW50AHNldEhlaWdodFBlcmNlbnQAc2V0TWluSGVpZ2h0UGVyY2VudABzZXRGbGV4QmFzaXNQZXJjZW50AHNldFBvc2l0aW9uUGVyY2VudABzZXRNYXJnaW5QZXJjZW50AHNldE1heFdpZHRoUGVyY2VudABzZXRXaWR0aFBlcmNlbnQAc2V0TWluV2lkdGhQZXJjZW50AHNldFBhZGRpbmdQZXJjZW50AGNyZWF0ZURlZmF1bHQAdW5pdAByaWdodABoZWlnaHQAc2V0TWF4SGVpZ2h0AGdldE1heEhlaWdodABzZXRIZWlnaHQAZ2V0SGVpZ2h0AHNldE1pbkhlaWdodABnZXRNaW5IZWlnaHQAZ2V0Q29tcHV0ZWRIZWlnaHQAZ2V0Q29tcHV0ZWRSaWdodABsZWZ0AGdldENvbXB1dGVkTGVmdAByZXNldABfX2Rlc3RydWN0AGZsb2F0AHVpbnQ2NF90AHVzZVdlYkRlZmF1bHRzAHNldFVzZVdlYkRlZmF1bHRzAHNldEFsaWduSXRlbXMAZ2V0QWxpZ25JdGVtcwBzZXRGbGV4QmFzaXMAZ2V0RmxleEJhc2lzAENhbm5vdCBnZXQgbGF5b3V0IHByb3BlcnRpZXMgb2YgbXVsdGktZWRnZSBzaG9ydGhhbmRzAHVzZUxlZ2FjeVN0cmV0Y2hCZWhhdmlvdXIAc2V0VXNlTGVnYWN5U3RyZXRjaEJlaGF2aW91cgBzZXRQb2ludFNjYWxlRmFjdG9yAE1lYXN1cmVDYWxsYmFja1dyYXBwZXIARGlydGllZENhbGxiYWNrV3JhcHBlcgBDYW5ub3QgcmVzZXQgYSBub2RlIHN0aWxsIGF0dGFjaGVkIHRvIGEgb3duZXIAc2V0Qm9yZGVyAGdldEJvcmRlcgBnZXRDb21wdXRlZEJvcmRlcgB1bnNpZ25lZCBjaGFyAHRvcABnZXRDb21wdXRlZFRvcABzZXRGbGV4V3JhcABnZXRGbGV4V3JhcABzZXRHYXAAZ2V0R2FwACVwAHNldEhlaWdodEF1dG8Ac2V0RmxleEJhc2lzQXV0bwBzZXRNYXJnaW5BdXRvAHNldFdpZHRoQXV0bwBTY2FsZSBmYWN0b3Igc2hvdWxkIG5vdCBiZSBsZXNzIHRoYW4gemVybwBzZXRBc3BlY3RSYXRpbwBnZXRBc3BlY3RSYXRpbwBzZXRQb3NpdGlvbgBnZXRQb3NpdGlvbgBub3RpZnlPbkRlc3RydWN0aW9uAHNldEZsZXhEaXJlY3Rpb24AZ2V0RmxleERpcmVjdGlvbgBzZXRNYXJnaW4AZ2V0TWFyZ2luAGdldENvbXB1dGVkTWFyZ2luAG5hbgBib3R0b20AZ2V0Q29tcHV0ZWRCb3R0b20AYm9vbABlbXNjcmlwdGVuOjp2YWwAc2V0RmxleFNocmluawBnZXRGbGV4U2hyaW5rAE1lYXN1cmVDYWxsYmFjawBEaXJ0aWVkQ2FsbGJhY2sAd2lkdGgAc2V0TWF4V2lkdGgAZ2V0TWF4V2lkdGgAc2V0V2lkdGgAZ2V0V2lkdGgAc2V0TWluV2lkdGgAZ2V0TWluV2lkdGgAZ2V0Q29tcHV0ZWRXaWR0aAB1bnNpZ25lZCBsb25nAHN0ZDo6d3N0cmluZwBzdGQ6OnN0cmluZwBzdGQ6OnUxNnN0cmluZwBzdGQ6OnUzMnN0cmluZwBzZXRQYWRkaW5nAGdldFBhZGRpbmcAZ2V0Q29tcHV0ZWRQYWRkaW5nAFRyaWVkIHRvIGNvbnN0cnVjdCBZR05vZGUgd2l0aCBudWxsIGNvbmZpZwBjcmVhdGVXaXRoQ29uZmlnAGluZgBzZXRBbGlnblNlbGYAZ2V0QWxpZ25TZWxmAFNpemUAdmFsdWUAVmFsdWUAY3JlYXRlAG1lYXN1cmUAc2V0UG9zaXRpb25UeXBlAGdldFBvc2l0aW9uVHlwZQBpc1JlZmVyZW5jZUJhc2VsaW5lAHNldElzUmVmZXJlbmNlQmFzZWxpbmUAY29weVN0eWxlAGRvdWJsZQBOb2RlAGV4dGVuZABpbnNlcnRDaGlsZABnZXRDaGlsZAByZW1vdmVDaGlsZAB2b2lkAGF2YWlsYWJsZUhlaWdodCBpcyBpbmRlZmluaXRlIHNvIGhlaWdodE1lYXN1cmVNb2RlIG11c3QgYmUgWUdNZWFzdXJlTW9kZVVuZGVmaW5lZABhdmFpbGFibGVXaWR0aCBpcyBpbmRlZmluaXRlIHNvIHdpZHRoTWVhc3VyZU1vZGUgbXVzdCBiZSBZR01lYXN1cmVNb2RlVW5kZWZpbmVkAHNldEV4cGVyaW1lbnRhbEZlYXR1cmVFbmFibGVkAGlzRXhwZXJpbWVudGFsRmVhdHVyZUVuYWJsZWQAZGlydGllZABDYW5ub3QgcmVzZXQgYSBub2RlIHdoaWNoIHN0aWxsIGhhcyBjaGlsZHJlbiBhdHRhY2hlZAB1bnNldE1lYXN1cmVGdW5jAHVuc2V0RGlydGllZEZ1bmMARXhwZWN0IGN1c3RvbSBiYXNlbGluZSBmdW5jdGlvbiB0byBub3QgcmV0dXJuIE5hTgBOQU4ASU5GAGVtc2NyaXB0ZW46Om1lbW9yeV92aWV3PHNob3J0PgBlbXNjcmlwdGVuOjptZW1vcnlfdmlldzx1bnNpZ25lZCBzaG9ydD4AZW1zY3JpcHRlbjo6bWVtb3J5X3ZpZXc8aW50PgBlbXNjcmlwdGVuOjptZW1vcnlfdmlldzx1bnNpZ25lZCBpbnQ+AGVtc2NyaXB0ZW46Om1lbW9yeV92aWV3PGZsb2F0PgBlbXNjcmlwdGVuOjptZW1vcnlfdmlldzx1aW50OF90PgBlbXNjcmlwdGVuOjptZW1vcnlfdmlldzxpbnQ4X3Q+AGVtc2NyaXB0ZW46Om1lbW9yeV92aWV3PHVpbnQxNl90PgBlbXNjcmlwdGVuOjptZW1vcnlfdmlldzxpbnQxNl90PgBlbXNjcmlwdGVuOjptZW1vcnlfdmlldzx1aW50MzJfdD4AZW1zY3JpcHRlbjo6bWVtb3J5X3ZpZXc8aW50MzJfdD4AZW1zY3JpcHRlbjo6bWVtb3J5X3ZpZXc8Y2hhcj4AZW1zY3JpcHRlbjo6bWVtb3J5X3ZpZXc8dW5zaWduZWQgY2hhcj4Ac3RkOjpiYXNpY19zdHJpbmc8dW5zaWduZWQgY2hhcj4AZW1zY3JpcHRlbjo6bWVtb3J5X3ZpZXc8c2lnbmVkIGNoYXI+AGVtc2NyaXB0ZW46Om1lbW9yeV92aWV3PGxvbmc+AGVtc2NyaXB0ZW46Om1lbW9yeV92aWV3PHVuc2lnbmVkIGxvbmc+AGVtc2NyaXB0ZW46Om1lbW9yeV92aWV3PGRvdWJsZT4AQ2hpbGQgYWxyZWFkeSBoYXMgYSBvd25lciwgaXQgbXVzdCBiZSByZW1vdmVkIGZpcnN0LgBDYW5ub3Qgc2V0IG1lYXN1cmUgZnVuY3Rpb246IE5vZGVzIHdpdGggbWVhc3VyZSBmdW5jdGlvbnMgY2Fubm90IGhhdmUgY2hpbGRyZW4uAENhbm5vdCBhZGQgY2hpbGQ6IE5vZGVzIHdpdGggbWVhc3VyZSBmdW5jdGlvbnMgY2Fubm90IGhhdmUgY2hpbGRyZW4uAChudWxsKQAlcwoAAAEAAAADAAAAAAAAAAIAAAADAAAAAQAAAAIAAAAAAAAAAQAAAAE="), i(e, 4270, "wH8AAAAAAADAfwMAAABpaQB2AHZp"), i(e, 4304, "KxsAACkbAABpGwAAYxsAAGkbAABjGwAAaWlpZmlmaQBcGwAALBsAAHZpaQAtGwAAcBsAAGlpaQ=="), i(e, 4368, "wwAAAMQAAADF"), i(e, 4388, "wwAAAMYAAADHAAAAXBs="), i(e, 4416, "KxsAAGkbAABjGwAAaRsAAGMbAABwGwAAaxsAAHAbAABpaWlpAAAAAFwbAABBGwAAXBsAAEMbAABEGwAAcBs="), i(e, 4488, "yAAAAMkAAADK"), i(e, 4508, "yAAAAMsAAADHAAAARxsAAFwbAABHGw=="), i(e, 4544, "XBsAAEcbAABjGwAAXRsAAHZpaWlpAAAAXBsAAEcbAABpGwAAdmlpZgAAAABcGwAARxsAAF0bAAB2aWlpAAAAAF0bAABIGwAAYxsAAF0bAABHGwAAaQBkaWkAdmlpZAAATBsAAEwbAABHGwAAXBsAAEwbAABcGwAATBsAAEsbAABcGwAATBsAAGMbAAAAAAAAXBsAAEwbAABjGwAAahsAAHZpaWlkAAAAXBsAAEwbAABqGwAAYxsAAE0bAABKGwAATRsAAGMbAABKGwAATRsAAGobAABNGwAAahsAAE0bAABjGwAAZGlpaQAAAABpGwAATBsAAGMbAABmaWlpAAAAAFwbAABMGwAATBsAAGQbAABcGwAATBsAAEwbAABkGwAATRsAAEwbAABMGwAATBsAAEwbAABkGwAAXRsAAEwbAABcGwAATBsAAF0bAABcGwAATBsAACkbAABcGwAATBsAAEEbAABdGwAATRsAAAAAAABcGwAATBsAAGobAABqGwAAYxsAAHZpaWRkaQAASRsAAE0b"), i(e, 4960, "GQAKABkZGQAAAAAFAAAAAAAACQAAAAALAAAAAAAAAAAZABEKGRkZAwoHAAEACQsYAAAJBgsAAAsABhkAAAAZGRk="), i(e, 5041, "DgAAAAAAAAAAGQAKDRkZGQANAAACAAkOAAAACQAOAAAO"), i(e, 5099, "DA=="), i(e, 5111, "EwAAAAATAAAAAAkMAAAAAAAMAAAM"), i(e, 5157, "EA=="), i(e, 5169, "DwAAAAQPAAAAAAkQAAAAAAAQAAAQ"), i(e, 5215, "Eg=="), i(e, 5227, "EQAAAAARAAAAAAkSAAAAAAASAAASAAAaAAAAGhoa"), i(e, 5282, "GgAAABoaGgAAAAAAAAk="), i(e, 5331, "FA=="), i(e, 5343, "FwAAAAAXAAAAAAkUAAAAAAAUAAAU"), i(e, 5389, "Fg=="), i(e, 5401, "FQAAAAAVAAAAAAkWAAAAAAAWAAAWAAAwMTIzNDU2Nzg5QUJDREVG"), i(e, 5476, "0Q=="), i(e, 5516, "//////////8="), i(e, 5584, "oB8BAAAAAAAF"), i(e, 5604, "zA=="), i(e, 5628, "zQAAAM4AAACEGw=="), i(e, 5652, "Ag=="), i(e, 5668, "//////////8="), i(e, 5736, "BQ=="), i(e, 5748, "zw=="), i(e, 5772, "zQAAANAAAACYGwAAAAQ="), i(e, 5796, "AQ=="), i(e, 5812, "/////wo="), i(e, 5880, "0g==");
                                var aa = function(r) {
                                    return r.set = function(r, e) {
                                        this[r] = e
                                    }, r.get = function(r) {
                                        return this[r]
                                    }, r
                                }([null, function(r, e, a, n, i) {
                                    return n |= 0, i |= 0, (a |= 0) && 5 != (0 | a) ? 0 | Qe(5736, n, i) : 0 | Qe(5592, n, i)
                                }, function(r, e, a, n, i, t) {
                                    r |= 0, e = +e, a |= 0, n |= 0, i |= 0, t |= 0;
                                    var o, b = 0,
                                        s = 0,
                                        A = 0,
                                        l = 0,
                                        d = 0,
                                        v = 0,
                                        p = 0,
                                        N = 0,
                                        m = 0,
                                        w = 0,
                                        g = 0,
                                        R = 0,
                                        G = 0,
                                        Z = 0,
                                        W = 0,
                                        V = 0,
                                        B = 0,
                                        T = 0;
                                    ar = o = ar - 560 | 0, c[o + 44 >> 2] = 0, k(+e), b = 0 | u(1), u(0), (0 | b) < 0 ? (R = 1, B = 1176, k(+(e = -e)), b = 0 | u(1), u(0)) : 2048 & i ? (R = 1, B = 1179) : (B = (R = 1 & i) ? 1182 : 1177, T = !R);
                                    r: if (2146435072 != (2146435072 & b)) {
                                        Z = o + 16 | 0;
                                        e: {
                                            a: {
                                                n: {
                                                    if (e = ae(e, o + 44 | 0), 0 != (e += e)) {
                                                        if (b = c[o + 44 >> 2], c[o + 44 >> 2] = b - 1, 97 != (0 | (W = 32 | t))) break n;
                                                        break e
                                                    }
                                                    if (97 == (0 | (W = 32 | t))) break e;d = c[o + 44 >> 2],
                                                    v = (0 | n) < 0 ? 6 : n;
                                                    break a
                                                }
                                                d = b - 29 | 0,
                                                c[o + 44 >> 2] = d,
                                                e *= 268435456,
                                                v = (0 | n) < 0 ? 6 : n
                                            }
                                            for (s = w = (o + 48 | 0) + ((0 | d) >= 0 ? 288 : 0) | 0; n = e < 4294967296 & e >= 0 ? ~~e >>> 0 : 0, c[s >> 2] = n, s = s + 4 | 0, 0 != (e = 1e9 * (e - +(n >>> 0))););
                                            if ((0 | d) <= 0) n = d,
                                            b = s,
                                            A = w;
                                            else
                                                for (A = w, n = d;;) {
                                                    if (N = (0 | n) >= 29 ? 29 : n, !(A >>> 0 > (b = s - 4 | 0) >>> 0)) {
                                                        for (n = 0; l = c[b >> 2], V = n, n = 31 & N, (63 & N) >>> 0 >= 32 ? (p = l << n, n = 0) : (p = (1 << n) - 1 & l >>> 32 - n, n = l << n), l = p + m | 0, l = ke(n = vr(V = V + n | 0, n >>> 0 > V >>> 0 ? l + 1 | 0 : l, 1e9), nr, -1e9, 0) + V | 0, c[b >> 2] = l, A >>> 0 <= (b = b - 4 | 0) >>> 0;);
                                                        n && (c[(A = A - 4 | 0) >> 2] = n)
                                                    }
                                                    for (; A >>> 0 < (b = s) >>> 0 && !c[(s = b - 4 | 0) >> 2];);
                                                    if (n = c[o + 44 >> 2] - N | 0, c[o + 44 >> 2] = n, s = b, !((0 | n) > 0)) break
                                                }
                                            if ((0 | n) < 0)
                                                for (G = 1 + ((v + 25 >>> 0) / 9 | 0) | 0, m = 102 == (0 | W);;) {
                                                    if (p = (0 | (n = 0 - n | 0)) >= 9 ? 9 : n, b >>> 0 <= A >>> 0) s = c[A >> 2];
                                                    else {
                                                        for (N = 1e9 >>> p | 0, l = -1 << p ^ -1, n = 0, s = A; V = n, n = c[s >> 2], c[s >> 2] = V + (n >>> p | 0), n = y(N, n & l), (s = s + 4 | 0) >>> 0 < b >>> 0;);
                                                        s = c[A >> 2], n && (c[b >> 2] = n, b = b + 4 | 0)
                                                    }
                                                    if (n = p + c[o + 44 >> 2] | 0, c[o + 44 >> 2] = n, A = (!s << 2) + A | 0, b = b - (s = m ? w : A) >> 2 > (0 | G) ? s + (G << 2) | 0 : b, !((0 | n) < 0)) break
                                                }
                                            if (n = 0, !(b >>> 0 <= A >>> 0 || (n = y(w - A >> 2, 9), s = 10, (l = c[A >> 2]) >>> 0 < 10)))
                                                for (; n = n + 1 | 0, l >>> 0 >= (s = y(s, 10)) >>> 0;);
                                            if ((0 | (s = (v - (102 != (0 | W) ? n : 0) | 0) - (103 == (0 | W) & 0 != (0 | v)) | 0)) < (y(b - w >> 2, 9) - 9 | 0)) {
                                                if (d = ((((0 | d) < 0 ? 4 : 292) + o | 0) + ((l = (0 | (N = s + 9216 | 0)) / 9 | 0) << 2) | 0) - 4048 | 0, s = 10, (0 | (p = N + y(l, -9) | 0)) <= 7)
                                                    for (; s = y(s, 10), 8 != (0 | (p = p + 1 | 0)););
                                                if (!((0 | (N = c[d >> 2])) == (0 | (m = y(G = (N >>> 0) / (s >>> 0) | 0, s))) & (0 | (l = d + 4 | 0)) == (0 | b)) && (N = N - m | 0, !(1 & G) && (e = 9007199254740992, !(1 & f[d - 4 | 0]) | 1e9 != (0 | s) | A >>> 0 >= d >>> 0) || (e = 9007199254740994), g = (0 | b) == (0 | l) ? 1 : 1.5, g = (l = s >>> 1 | 0) >>> 0 > N >>> 0 ? .5 : (0 | l) == (0 | N) ? g : 1.5, 45 != h[0 | B] | T || (g = -g, e = -e), c[d >> 2] = m, e + g != e)) {
                                                    if (n = s + m | 0, c[d >> 2] = n, n >>> 0 >= 1e9)
                                                        for (; c[d >> 2] = 0, (d = d - 4 | 0) >>> 0 < A >>> 0 && (c[(A = A - 4 | 0) >> 2] = 0), n = c[d >> 2] + 1 | 0, c[d >> 2] = n, n >>> 0 > 999999999;);
                                                    if (n = y(w - A >> 2, 9), s = 10, !((l = c[A >> 2]) >>> 0 < 10))
                                                        for (; n = n + 1 | 0, l >>> 0 >= (s = y(s, 10)) >>> 0;);
                                                }
                                                b = b >>> 0 > (s = d + 4 | 0) >>> 0 ? s : b
                                            }
                                            for (; l = b, !(N = b >>> 0 <= A >>> 0) && !c[(b = l - 4 | 0) >> 2];);
                                            if (103 == (0 | W)) {
                                                if (v = ((b = (0 | (s = v || 1)) > (0 | n) & (0 | n) > -5) ? -1 ^ n : -1) + s | 0, t = (b ? -1 : -2) + t | 0, !(d = 8 & i)) {
                                                    if (b = -9, !N && (d = c[l - 4 >> 2]) && (p = 10, b = 0, !((d >>> 0) % 10 | 0))) {
                                                        for (; s = b, b = b + 1 | 0, !((d >>> 0) % ((p = y(p, 10)) >>> 0) | 0););
                                                        b = -1 ^ s
                                                    }
                                                    s = y(l - w >> 2, 9), 70 != (-33 & t) ? (d = 0, v = (0 | (b = (0 | (b = ((n + s | 0) + b | 0) - 9 | 0)) > 0 ? b : 0)) > (0 | v) ? v : b) : (d = 0, v = (0 | (b = (0 | (b = (b + s | 0) - 9 | 0)) > 0 ? b : 0)) > (0 | v) ? v : b)
                                                }
                                            } else d = 8 & i;
                                            if (p = -1, (0 | ((N = d | v) ? 2147483645 : 2147483646)) < (0 | v)) break r;
                                            if (m = 1 + ((0 != (0 | N)) + v | 0) | 0, 70 != (0 | (s = -33 & t))) {
                                                if ((Z - (b = re(((b = n >> 31) ^ n) - b | 0, 0, Z)) | 0) <= 1)
                                                    for (; f[0 | (b = b - 1 | 0)] = 48, (Z - b | 0) < 2;);
                                                if (f[0 | (G = b - 2 | 0)] = t, f[b - 1 | 0] = (0 | n) < 0 ? 45 : 43, (0 | (b = Z - G | 0)) > (2147483647 ^ m)) break r
                                            } else {
                                                if ((2147483647 ^ m) < (0 | n)) break r;
                                                b = (0 | n) > 0 ? n : 0
                                            }
                                            if ((0 | (n = b + m | 0)) > (2147483647 ^ R)) break r;le(r, 32, a, m = n + R | 0, i),
                                            Ur(r, B, R),
                                            le(r, 48, a, m, 65536 ^ i);a: {
                                                n: {
                                                    i: {
                                                        if (70 == (0 | s)) {
                                                            for (n = 8 | (t = o + 16 | 0), d = 9 | t, A = s = A >>> 0 > w >>> 0 ? w : A;;) {
                                                                b = re(c[A >> 2], 0, d);
                                                                t: if ((0 | s) == (0 | A))(0 | b) == (0 | d) && (f[o + 24 | 0] = 48, b = n);
                                                                    else {
                                                                        if (o + 16 >>> 0 >= b >>> 0) break t;
                                                                        for (; f[0 | (b = b - 1 | 0)] = 48, o + 16 >>> 0 < b >>> 0;);
                                                                    }
                                                                if (Ur(r, b, d - b | 0), !(w >>> 0 >= (A = A + 4 | 0) >>> 0)) break
                                                            }
                                                            if (N && Ur(r, 4206, 1), (0 | v) <= 0 | A >>> 0 >= l >>> 0) break i;
                                                            for (;;) {
                                                                if ((b = re(c[A >> 2], 0, d)) >>> 0 > o + 16 >>> 0)
                                                                    for (; f[0 | (b = b - 1 | 0)] = 48, o + 16 >>> 0 < b >>> 0;);
                                                                if (Ur(r, b, (0 | v) >= 9 ? 9 : v), b = v - 9 | 0, l >>> 0 <= (A = A + 4 | 0) >>> 0) break n;
                                                                if (n = (0 | v) > 9, v = b, !n) break
                                                            }
                                                            break n
                                                        }
                                                        t: if (!((0 | v) < 0))
                                                            for (w = A >>> 0 < l >>> 0 ? l : A + 4 | 0, n = 8 | (t = o + 16 | 0), l = 9 | t, s = A;;) {
                                                                (0 | l) == (0 | (b = re(c[s >> 2], 0, l))) && (f[o + 24 | 0] = 48, b = n);
                                                                f: if ((0 | s) == (0 | A)) Ur(r, b, 1), b = b + 1 | 0, d | v && Ur(r, 4206, 1);
                                                                    else {
                                                                        if (o + 16 >>> 0 >= b >>> 0) break f;
                                                                        for (; f[0 | (b = b - 1 | 0)] = 48, o + 16 >>> 0 < b >>> 0;);
                                                                    }
                                                                if (Ur(r, b, (0 | (t = l - b | 0)) > (0 | v) ? v : t), v = v - t | 0, w >>> 0 <= (s = s + 4 | 0) >>> 0) break t;
                                                                if (!((0 | v) >= 0)) break
                                                            }
                                                        le(r, 48, v + 18 | 0, 18, 0),
                                                        Ur(r, G, Z - G | 0);
                                                        break a
                                                    }
                                                    b = v
                                                }
                                                le(r, 48, b + 9 | 0, 9, 0)
                                            }
                                            le(r, 32, a, m, 8192 ^ i),
                                            p = (0 | a) < (0 | m) ? m : a;
                                            break r
                                        }
                                        if (d = (t << 26 >> 31 & 9) + B | 0, !(n >>> 0 > 11)) {
                                            for (b = 12 - n | 0, g = 16; g *= 16, b = b - 1 | 0;);
                                            e = 45 != h[0 | d] ? e + g - g : -(g + (-e - g))
                                        }
                                        for (w = 2 | R, A = 32 & t, (0 | Z) == (0 | (b = re(((b = (s = c[o + 44 >> 2]) >> 31) ^ s) - b | 0, 0, Z))) && (f[o + 15 | 0] = 48, b = o + 15 | 0), f[0 | (v = b - 2 | 0)] = t + 15, f[b - 1 | 0] = (0 | s) < 0 ? 45 : 43, b = 8 & i, s = o + 16 | 0; t = s, l = E(e) < 2147483648 ? ~~e : -2147483648, f[0 | s] = A | h[l + 5424 | 0], !(b | (0 | n) > 0) & 0 == (e = 16 * (e - +(0 | l))) | 1 != ((s = t + 1 | 0) - (o + 16 | 0) | 0) || (f[t + 1 | 0] = 46, s = t + 2 | 0), 0 != e;);
                                        p = -1, (2147483645 - (t = (b = Z - v | 0) + w | 0) | 0) < (0 | n) || (le(r, 32, a, t = (n = !n || ((A = s - (o + 16 | 0) | 0) - 2 | 0) >= (0 | n) ? A = s - (o + 16 | 0) | 0 : n + 2 | 0) + t | 0, i), Ur(r, d, w), le(r, 48, a, t, 65536 ^ i), Ur(r, o + 16 | 0, A), le(r, 48, n - A | 0, 0, 0), Ur(r, v, b), le(r, 32, a, t, 8192 ^ i), p = (0 | a) < (0 | t) ? t : a)
                                    } else le(r, 32, a, b = R + 3 | 0, -65537 & i), Ur(r, B, R), n = 32 & t, Ur(r, e != e ? n ? 2450 : 3390 : n ? 2819 : 3394, 3), le(r, 32, a, b, 8192 ^ i), p = (0 | a) < (0 | b) ? b : a;
                                    return ar = o + 560 | 0, 0 | p
                                }, function(r, e) {
                                    r |= 0;
                                    var a, n, i, t, f, o = 0,
                                        u = 0,
                                        k = 0,
                                        A = 0,
                                        l = 0,
                                        d = 0,
                                        h = 0,
                                        v = 0,
                                        p = 0,
                                        N = 0,
                                        y = 0;
                                    o = e |= 0, e = c[e >> 2] + 7 & -8, c[o >> 2] = e + 16, i = r, d = c[e >> 2], u = c[e + 4 >> 2], n = r = c[e + 12 >> 2], ar = a = ar - 32 | 0, l = r &= 2147483647;
                                    r: if ((0 | (k = r - 1006698496 | 0)) == (0 | (r = r - 1140785152 | 0)) & (e = o = c[e + 8 >> 2]) >>> 0 < e >>> 0 | r >>> 0 > k >>> 0) {
                                        if (e = (r = o) << 4 | u >>> 28, r = o = n << 4 | r >>> 28, 134217728 == (0 | (u &= 268435455)) & 0 != (0 | d) | u >>> 0 > 134217728) {
                                            r = r + 1073741824 | 0, r = (e = e + 1 | 0) ? r : r + 1 | 0;
                                            break r
                                        }
                                        if (r = r + 1073741824 | 0, d | 134217728 != (0 | u)) break r;
                                        r = (e = (u = 1 & e) + e | 0) >>> 0 < u >>> 0 ? r + 1 | 0 : r
                                    } else(!e & 2147418112 == (0 | l) ? !(u | d) : l >>> 0 < 2147418112) ? (e = 0, r = 2146435072, l >>> 0 > 1140785151 || (r = 0, (N = l >>> 16 | 0) >>> 0 < 15249 || (e = d, r = u, l = k = 65535 & n | 65536, p = o, A = o, 64 & (h = N - 15233 | 0) ? (o = e, e = 31 & (k = h + -64 | 0), (63 & k) >>> 0 >= 32 ? (r = o << e, A = 0) : (r = (1 << e) - 1 & o >>> 32 - e | r << e, A = o << e), k = r, e = 0, r = 0) : h && (v = A, A = 31 & h, (63 & h) >>> 0 >= 32 ? (o = v << A, A = 0) : (o = (1 << A) - 1 & v >>> 32 - A | k << A, A = v << A), k = o, y = A, v = e, A = 31 & (o = 64 - h | 0), (63 & o) >>> 0 >= 32 ? (o = 0, e = r >>> A | 0) : (o = r >>> A | 0, e = ((1 << A) - 1 & r) << 32 - A | v >>> A), A = y | e, k |= o, e = 31 & h, (63 & h) >>> 0 >= 32 ? (o = v << e, e = 0) : (o = (1 << e) - 1 & v >>> 32 - e | r << e, e = v << e), r = o), c[a + 16 >> 2] = e, c[a + 20 >> 2] = r, c[a + 24 >> 2] = A, c[a + 28 >> 2] = k, 64 & (e = 15361 - N | 0) ? (u = p, r = 31 & (e = e + -64 | 0), (63 & e) >>> 0 >= 32 ? (o = 0, d = l >>> r | 0) : (o = l >>> r | 0, d = ((1 << r) - 1 & l) << 32 - r | u >>> r), u = o, p = 0, l = 0) : e && (k = p, o = 31 & (r = 64 - e | 0), (63 & r) >>> 0 >= 32 ? (r = k << o, A = 0) : (r = (1 << o) - 1 & k >>> 32 - o | l << o, A = k << o), k = d, d = 31 & e, (63 & e) >>> 0 >= 32 ? (o = 0, k = u >>> d | 0) : (o = u >>> d | 0, k = ((1 << d) - 1 & u) << 32 - d | k >>> d), d = A | k, u = r | o, k = p, o = 31 & e, (63 & e) >>> 0 >= 32 ? (r = 0, p = l >>> o | 0) : (r = l >>> o | 0, p = ((1 << o) - 1 & l) << 32 - o | k >>> o), l = r), c[a >> 2] = d, c[a + 4 >> 2] = u, c[a + 8 >> 2] = p, c[a + 12 >> 2] = l, e = c[a + 8 >> 2], r = c[a + 12 >> 2] << 4 | e >>> 28, e <<= 4, o = c[a >> 2], e |= (l = c[a + 4 >> 2]) >>> 28, 134217728 == (0 | (u = 268435455 & l)) & 0 != (0 | (o |= 0 != (c[a + 16 >> 2] | c[a + 24 >> 2] | c[a + 20 >> 2] | c[a + 28 >> 2]))) | u >>> 0 > 134217728 ? r = (e = e + 1 | 0) ? r : r + 1 | 0 : o | 134217728 != (0 | u) || (r = (o = e) >>> 0 > (e = e + (1 & e) | 0) >>> 0 ? r + 1 | 0 : r)))) : (e = (r = o) << 4 | u >>> 28, r = 524287 & (o = n << 4 | r >>> 28) | 2146959360);
                                    ar = a + 32 | 0, b(0, 0 | e), b(1, -2147483648 & n | r), t = i, f = +s(), m[t >> 3] = f
                                }, Ke, function(r, e) {
                                    e |= 0, c[4 + (r |= 0) >> 2] = 7, c[r >> 2] = e
                                }, function(r, e) {
                                    e |= 0, c[4 + (r |= 0) >> 2] = 10, c[r >> 2] = e
                                }, function(r, e) {
                                    e |= 0, c[4 + (r |= 0) >> 2] = 13, c[r >> 2] = e
                                }, Ke, Ke, Ke, Ke, Ke, Ke, function(r, e, a, n, i, t) {
                                    var f;
                                    r |= 0, e |= 0, a = w(a), n |= 0, i = w(i), t |= 0, ar = f = ar - 16 | 0, e = c[c[e >> 2] + 4 >> 2], aa[c[c[e >> 2] + 8 >> 2]](f, e, a, n, i, t), N[r >> 2] = m[f >> 3], N[r + 4 >> 2] = m[f + 8 >> 3], ar = f + 16 | 0
                                }, function(r) {
                                    r = c[c[(r |= 0) >> 2] + 8 >> 2], aa[c[c[r >> 2] + 8 >> 2]](r)
                                }, tr, function(r) {
                                    return 6952
                                }, Ue, function(r, e, a, n, i, t) {
                                    r |= 0, e |= 0, a = w(a), n |= 0, i = w(i), t |= 0;
                                    var f, o = 0;
                                    return ar = f = ar - 16 | 0, o = c[r >> 2], e = ((r = c[r + 4 >> 2]) >> 1) + e | 0, 1 & r && (o = c[o + c[e >> 2] >> 2]), aa[0 | o](f, e, a, n, i, t), r = we(16), e = c[f + 12 >> 2], c[r + 8 >> 2] = c[f + 8 >> 2], c[r + 12 >> 2] = e, e = c[f + 4 >> 2], c[r >> 2] = c[f >> 2], c[r + 4 >> 2] = e, ar = f + 16 | 0, 0 | r
                                }, function(r) {
                                    return 6956
                                }, Ke, Ke, Ue, qe, He, Ze, function(r) {
                                    var e;
                                    return r |= 0, e = we(12), f[e + 4 | 0] = 0, c[e + 8 >> 2] = c[r >> 2], c[r >> 2] = 0, c[e >> 2] = 4368, 0 | e
                                }, function(r, e, a) {
                                    r |= 0, a |= 0;
                                    var n, i, t = 0,
                                        o = 0;
                                    if (ar = n = ar - 32 | 0, (i = c[(e |= 0) >> 2]) >>> 0 < 2147483632) {
                                        r: {
                                            if (i >>> 0 >= 11) o = we(t = 1 + (15 | i) | 0),
                                            c[n + 16 >> 2] = -2147483648 | t,
                                            c[n + 8 >> 2] = o,
                                            c[n + 12 >> 2] = i,
                                            t = i + o | 0;
                                            else if (f[n + 19 | 0] = i, t = (o = n + 8 | 0) + i | 0, !i) break r;kr(o, e + 4 | 0, i)
                                        }
                                        return f[0 | t] = 0,
                                        c[n >> 2] = a,
                                        aa[0 | r](n + 24 | 0, n + 8 | 0, n),
                                        M(c[n + 24 >> 2]),
                                        r = c[n + 24 >> 2],
                                        X(0 | r),
                                        X(c[n >> 2]),
                                        f[n + 19 | 0] < 0 && Gr(c[n + 8 >> 2]),
                                        ar = n + 32 | 0,
                                        0 | r
                                    }
                                    I(), A()
                                }, function(r, e, a) {
                                    var n, i;
                                    a |= 0, n = r |= 0, i = 0 | Y(0 | (f[11 + (e |= 0) | 0] < 0 ? c[e >> 2] : e), 6956, c[a >> 2]), c[n >> 2] = i
                                }, function(r) {
                                    return 6976
                                }, Ue, Xe, function(r) {
                                    return 6979
                                }, Ke, Ke, Ue, qe, He, Ze, function(r) {
                                    var e;
                                    return r |= 0, e = we(12), f[e + 4 | 0] = 0, c[e + 8 >> 2] = c[r >> 2], c[r >> 2] = 0, c[e >> 2] = 4488, 0 | e
                                }, function(r, e, a) {
                                    var n, i;
                                    a |= 0, n = r |= 0, i = 0 | Y(0 | (f[11 + (e |= 0) | 0] < 0 ? c[e >> 2] : e), 6979, c[a >> 2]), c[n >> 2] = i
                                }, function(r) {
                                    return 6982
                                }, Fe, ze, function() {
                                    var r, e;
                                    return e = we(4), r = we(28), o[r + 20 >> 1] = 0, c[r + 16 >> 2] = 1065353216, o[r + 10 >> 1] = 0, o[r + 12 >> 1] = 0, c[r >> 2] = 0, c[r + 24 >> 2] = 0, f[r + 9 | 0] = 0, c[r + 4 >> 2] = 1, f[r + 22 | 0] = 0, c[1732] = c[1732] + 1, c[e >> 2] = r, 0 | e
                                }, De, Fe, function(r, e, a) {
                                    e |= 0, a |= 0, f[20 + (c[(r |= 0) >> 2] + e | 0) | 0] = a
                                }, me, function(r, e) {
                                    r |= 0, e = w(e);
                                    var a, n = 0,
                                        i = 0;
                                    ar = a = ar - 16 | 0, r = c[r >> 2], e >= w(0) || (c[a >> 2] = 2262, ar = n = ar - 16 | 0, c[n + 12 >> 2] = a, r || (h[6936] ? r = c[1733] : (r = we(28), o[r + 20 >> 1] = 0, c[r + 16 >> 2] = 1065353216, o[r + 10 >> 1] = 0, o[r + 12 >> 1] = 0, c[r >> 2] = 0, c[r + 24 >> 2] = 0, f[r + 9 | 0] = 0, c[r + 4 >> 2] = 1, f[r + 22 | 0] = 0, c[1733] = r, f[6936] = 1, c[1732] = c[1732] + 1)), i = c[r + 4 >> 2], h[r + 9 | 0] ? aa[0 | i](r, 0, 5, 0, 4215, a) : aa[0 | i](r, 0, 5, 4215, a), ar = n + 16 | 0, je(), A()), N[r + 16 >> 2] = e == w(0) ? w(0) : e, ar = a + 16 | 0
                                }, function(r, e, a) {
                                    r |= 0, e |= 0, a = w(a);
                                    var n = 0;
                                    n = c[r >> 2], e = ((r = c[r + 4 >> 2]) >> 1) + e | 0, 1 & r && (n = c[n + c[e >> 2] >> 2]), aa[0 | n](e, a)
                                }, function(r, e) {
                                    e |= 0, f[c[(r |= 0) >> 2] + 11 | 0] = e
                                }, Ee, function(r, e) {
                                    e |= 0, f[c[(r |= 0) >> 2] + 10 | 0] = e
                                }, function(r, e) {
                                    return e |= 0, h[20 + (c[(r |= 0) >> 2] + e | 0) | 0]
                                }, ye, function(r) {
                                    return h[c[(r |= 0) >> 2] + 11 | 0]
                                }, ge, function(r) {
                                    return h[c[(r |= 0) >> 2] + 10 | 0]
                                }, function() {
                                    return 0 | Rr(we(48), 0, 48)
                                }, Je, function() {
                                    var r;
                                    return r = we(16), c[r >> 2] = 0, c[r + 4 >> 2] = 0, c[r + 8 >> 2] = 0, c[r + 12 >> 2] = 0, 0 | r
                                }, Je, function() {
                                    var r;
                                    return r = we(16), c[r + 8 >> 2] = 0, c[r + 12 >> 2] = 0, c[r >> 2] = 0, 0 | r
                                }, Je, Pe, Ce, function(r, e) {
                                    return e |= 0, c[c[(r |= 0) >> 2] + e >> 2]
                                }, function(r, e, a) {
                                    e |= 0, a |= 0, c[c[(r |= 0) >> 2] + e >> 2] = a
                                }, function(r) {
                                    return 6987
                                }, Cr, ze, function() {
                                    return 0 | $r(we(12), 0)
                                }, function(r, e) {
                                    return e |= 0, 0 | aa[0 | (r |= 0)](e)
                                }, function(r) {
                                    return r |= 0, 0 | $r(we(12), r)
                                }, De, Cr, function(r) {
                                    var e, a = 0,
                                        n = 0,
                                        i = 0;
                                    ar = e = ar - 624 | 0, a = c[4 + (r |= 0) >> 2], c[r + 4 >> 2] = 0, a && aa[c[c[a >> 2] + 4 >> 2]](a), a = c[r + 8 >> 2], c[r + 8 >> 2] = 0, a && aa[c[c[a >> 2] + 4 >> 2]](a);
                                    r: {
                                        if (r = c[r >> 2], c[r + 560 >> 2] == c[r + 556 >> 2]) {
                                            if (c[r + 552 >> 2]) break r;
                                            return Pr(r + 556 | 0), i = f[r + 4 | 0], a = br(e + 32 | 0, c[r + 568 >> 2]), n = c[a + 4 >> 2], c[r >> 2] = c[a >> 2], c[r + 4 >> 2] = n, n = c[a + 20 >> 2], c[r + 16 >> 2] = c[a + 16 >> 2], c[r + 20 >> 2] = n, n = c[a + 12 >> 2], c[r + 8 >> 2] = c[a + 8 >> 2], c[r + 12 >> 2] = n, kr(r + 24 | 0, a + 24 | 0, 204), kr(r + 228 | 0, a + 228 | 0, 328), (n = c[r + 556 >> 2]) && (c[r + 560 >> 2] = n, Gr(n)), c[r + 556 >> 2] = c[a + 556 >> 2], c[r + 560 >> 2] = c[a + 560 >> 2], c[r + 564 >> 2] = c[a + 564 >> 2], c[r + 584 >> 2] = c[a + 584 >> 2], n = c[a + 580 >> 2], c[r + 576 >> 2] = c[a + 576 >> 2], c[r + 580 >> 2] = n, n = c[a + 572 >> 2], c[r + 568 >> 2] = c[a + 568 >> 2], c[r + 572 >> 2] = n, (0 | i) < 0 && (f[r + 4 | 0] = 128 | h[r + 4 | 0], c[r + 24 >> 2] = -909 & c[r + 24 >> 2] | 520), void(ar = e + 624 | 0)
                                        }
                                        c[e + 16 >> 2] = 3252,
                                        Xr(r, e + 16 | 0),
                                        je(),
                                        A()
                                    }
                                    c[e >> 2] = 2046, Xr(r, e), je(), A()
                                }, Xe, function(r, e) {
                                    r |= 0, e |= 0;
                                    var a = 0,
                                        n = w(0),
                                        i = 0,
                                        t = 0,
                                        o = w(0),
                                        u = 0,
                                        s = 0,
                                        k = 0,
                                        A = w(0);
                                    r: {
                                        s = c[e >> 2],
                                        e = c[r >> 2];e: if (!(8388607 & (c[s + 24 >> 2] ^ c[e + 24 >> 2]))) {
                                            A = N[s + 40 >> 2], i = c[s + 40 >> 2], n = N[e + 40 >> 2];
                                            a: {
                                                n: {
                                                    if (2139156720 != (0 | (a = c[e + 40 >> 2]))) {
                                                        if (o = w(NaN), r = 3, 2141891242 == (0 | a)) break a;
                                                        if (2140081935 != (0 | a)) break n;
                                                        o = w(0), r = 1;
                                                        break a
                                                    }
                                                    r = 2;
                                                    break a
                                                }
                                                r = 0,
                                                n == n && (b(2, 536870912 + (-1073741825 & a) | 0), o = d(), r = 1073741824 & a ? 2 : 1)
                                            }
                                            a: {
                                                n: {
                                                    if (2139156720 != (0 | i)) {
                                                        if (n = w(NaN), a = 3, 2141891242 == (0 | i)) break a;
                                                        if (2140081935 != (0 | i)) break n;
                                                        n = w(0), a = 1;
                                                        break a
                                                    }
                                                    n = w(0),
                                                    a = 2;
                                                    break a
                                                }
                                                a = 0,
                                                A == A && (b(2, 536870912 + (-1073741825 & i) | 0), n = d(), a = 1073741824 & i ? 2 : 1)
                                            }
                                            if (!((0 | a) != (0 | r) | !(!r | o != o & n != n | w(E(w(o - n))) < w(9999999747378752e-20))) && (t = s + 44 | 0, c[(a = e + 44 | 0) >> 2] == c[t >> 2])) {
                                                r = 0;
                                                a: {
                                                    for (;;) {
                                                        if (i = r, 9 == (0 | (r = r + 1 | 0))) break a;
                                                        if (c[(u = r << 2) + a >> 2] != c[t + u >> 2]) break
                                                    }
                                                    if (i >>> 0 < 8) break e
                                                }
                                                if (t = s + 80 | 0, c[(a = e + 80 | 0) >> 2] == c[t >> 2]) {
                                                    r = 0;
                                                    a: {
                                                        for (;;) {
                                                            if (i = r, 9 == (0 | (r = r + 1 | 0))) break a;
                                                            if (c[(u = r << 2) + a >> 2] != c[t + u >> 2]) break
                                                        }
                                                        if (i >>> 0 < 8) break e
                                                    }
                                                    if (t = s + 116 | 0, c[(a = e + 116 | 0) >> 2] == c[t >> 2]) {
                                                        r = 0;
                                                        a: {
                                                            for (;;) {
                                                                if (i = r, 9 == (0 | (r = r + 1 | 0))) break a;
                                                                if (c[(u = r << 2) + a >> 2] != c[t + u >> 2]) break
                                                            }
                                                            if (i >>> 0 < 8) break e
                                                        }
                                                        if (t = s + 152 | 0, c[(a = e + 152 | 0) >> 2] == c[t >> 2]) {
                                                            r = 0;
                                                            a: {
                                                                for (;;) {
                                                                    if (i = r, 9 == (0 | (r = r + 1 | 0))) break a;
                                                                    if (c[(u = r << 2) + a >> 2] != c[t + u >> 2]) break
                                                                }
                                                                if (i >>> 0 < 8) break e
                                                            }
                                                            if (t = s + 188 | 0, c[(a = e + 188 | 0) >> 2] == c[t >> 2]) {
                                                                r = 0;
                                                                a: {
                                                                    for (;;) {
                                                                        if (i = r, 3 == (0 | (r = r + 1 | 0))) break a;
                                                                        if (c[(u = r << 2) + a >> 2] != c[t + u >> 2]) break
                                                                    }
                                                                    if (i >>> 0 < 2) break e
                                                                }
                                                                for (u = s + 200 | 0, k = e + 200 | 0, r = 0, i = 1; a = c[(r <<= 2) + u >> 2], t = c[r + k >> 2], i && (i = 0, r = 1, (0 | a) == (0 | t)););
                                                                if ((0 | a) == (0 | t)) {
                                                                    for (u = s + 208 | 0, k = e + 208 | 0, r = 0, i = 1; a = c[(r <<= 2) + u >> 2], t = c[r + k >> 2], i && (i = 0, r = 1, (0 | a) == (0 | t)););
                                                                    if ((0 | a) == (0 | t)) {
                                                                        for (u = s + 216 | 0, k = e + 216 | 0, r = 0, i = 1; a = c[(r <<= 2) + u >> 2], t = c[r + k >> 2], i && (i = 0, r = 1, (0 | a) == (0 | t)););
                                                                        if ((0 | a) == (0 | t) && !((0 | (r = (o = N[s + 28 >> 2]) != o)) == ((n = N[e + 28 >> 2]) == n | 0) | !(r | n != n) & n != o || ((n = N[e + 32 >> 2]) == n | 0) == ((o = N[s + 32 >> 2]) != o | 0) | n == n & n != o || (0 | (r = (o = N[s + 36 >> 2]) != o)) == ((n = N[e + 36 >> 2]) == n | 0) | !r & n != o)) {
                                                                            if (r = 0, (n = N[e + 224 >> 2]) != n && (r = 1, (o = N[s + 224 >> 2]) != o)) break r;
                                                                            if ((o = n) == (n = N[s + 224 >> 2]) | n != n & r) break r
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }for (kr(e + 24 | 0, s + 24 | 0, 204);;) {
                                            if (4 & (r = h[e + 4 | 0])) break r;
                                            if (f[e + 4 | 0] = 4 | r, (r = c[e + 20 >> 2]) && aa[0 | r](e), c[e + 308 >> 2] = 2143289344, !(e = c[e + 552 >> 2])) break
                                        }
                                    }
                                }, Ee, function(r, e) {
                                    e |= 0;
                                    var a = 0;
                                    r: if (r = c[(r |= 0) >> 2], ((a = c[r + 24 >> 2]) >>> 16 & 3) != (0 | e))
                                        for (c[r + 24 >> 2] = -196609 & a | e << 16 & 196608;;) {
                                            if (4 & (e = h[r + 4 | 0])) break r;
                                            if (f[r + 4 | 0] = 4 | e, (e = c[r + 20 >> 2]) && aa[0 | e](r), c[r + 308 >> 2] = 2143289344, !(r = c[r + 552 >> 2])) break
                                        }
                                }, Ee, function(r, e, a) {
                                    e |= 0, a = +a, oe(c[(r |= 0) >> 2], e, qr(w(a)))
                                }, function(r, e, a, n) {
                                    e |= 0, a |= 0, n = +n;
                                    var i = 0;
                                    i = c[(r |= 0) >> 2], e = ((r = c[r + 4 >> 2]) >> 1) + e | 0, 1 & r && (i = c[i + c[e >> 2] >> 2]), aa[0 | i](e, a, n)
                                }, function(r, e, a) {
                                    e |= 0, a = +a, oe(c[(r |= 0) >> 2], e, Kr(w(a)))
                                }, function(r, e) {
                                    e |= 0, Sr(c[(r |= 0) >> 2], 5, e)
                                }, function(r, e) {
                                    e |= 0, Sr(c[(r |= 0) >> 2], 6, e)
                                }, function(r, e) {
                                    e |= 0, Sr(c[(r |= 0) >> 2], 7, e)
                                }, function(r, e) {
                                    e |= 0;
                                    var a = 0;
                                    r: if (r = c[(r |= 0) >> 2], ((a = c[r + 24 >> 2]) >>> 2 & 3) != (0 | e))
                                        for (c[r + 24 >> 2] = -13 & a | e << 2 & 12;;) {
                                            if (4 & (e = h[r + 4 | 0])) break r;
                                            if (f[r + 4 | 0] = 4 | e, (e = c[r + 20 >> 2]) && aa[0 | e](r), c[r + 308 >> 2] = 2143289344, !(r = c[r + 552 >> 2])) break
                                        }
                                }, function(r, e) {
                                    e |= 0;
                                    var a = 0;
                                    r: if (r = c[(r |= 0) >> 2], ((a = c[r + 24 >> 2]) >>> 18 & 3) != (0 | e))
                                        for (c[r + 24 >> 2] = -786433 & a | e << 18 & 786432;;) {
                                            if (4 & (e = h[r + 4 | 0])) break r;
                                            if (f[r + 4 | 0] = 4 | e, (e = c[r + 20 >> 2]) && aa[0 | e](r), c[r + 308 >> 2] = 2143289344, !(r = c[r + 552 >> 2])) break
                                        }
                                }, function(r, e) {
                                    e |= 0;
                                    var a = 0;
                                    r: if (r = c[(r |= 0) >> 2], ((a = c[r + 24 >> 2]) >>> 4 & 7) != (0 | e))
                                        for (c[r + 24 >> 2] = -113 & a | e << 4 & 112;;) {
                                            if (4 & (e = h[r + 4 | 0])) break r;
                                            if (f[r + 4 | 0] = 4 | e, (e = c[r + 20 >> 2]) && aa[0 | e](r), c[r + 308 >> 2] = 2143289344, !(r = c[r + 552 >> 2])) break
                                        }
                                }, function(r, e, a) {
                                    e |= 0, a = +a, ue(c[(r |= 0) >> 2], e, qr(w(a)))
                                }, function(r, e, a) {
                                    e |= 0, a = +a, ue(c[(r |= 0) >> 2], e, Kr(w(a)))
                                }, function(r, e) {
                                    e |= 0, ue(c[(r |= 0) >> 2], e, 2141891242)
                                }, function(r, e) {
                                    e |= 0;
                                    var a = 0;
                                    r: if (r = c[(r |= 0) >> 2], ((a = c[r + 24 >> 2]) >>> 20 & 3) != (0 | e))
                                        for (c[r + 24 >> 2] = -3145729 & a | e << 20 & 3145728;;) {
                                            if (4 & (e = h[r + 4 | 0])) break r;
                                            if (f[r + 4 | 0] = 4 | e, (e = c[r + 20 >> 2]) && aa[0 | e](r), c[r + 308 >> 2] = 2143289344, !(r = c[r + 552 >> 2])) break
                                        }
                                }, function(r, e) {
                                    e |= 0;
                                    var a = 0;
                                    r: if (r = c[(r |= 0) >> 2], ((a = c[r + 24 >> 2]) >>> 22 & 1) != (0 | e))
                                        for (c[r + 24 >> 2] = -4194305 & a | e << 22 & 4194304;;) {
                                            if (4 & (e = h[r + 4 | 0])) break r;
                                            if (f[r + 4 | 0] = 4 | e, (e = c[r + 20 >> 2]) && aa[0 | e](r), c[r + 308 >> 2] = 2143289344, !(r = c[r + 552 >> 2])) break
                                        }
                                }, function(r, e) {
                                    r |= 0, e = +e;
                                    var a = 0,
                                        n = w(0),
                                        i = w(0);
                                    r: if (n = w(e), r = c[r >> 2], !(n == (i = N[r + 28 >> 2]) | n != n & i != i))
                                        for (N[r + 28 >> 2] = n;;) {
                                            if (4 & (a = h[r + 4 | 0])) break r;
                                            if (f[r + 4 | 0] = 4 | a, (a = c[r + 20 >> 2]) && aa[0 | a](r), c[r + 308 >> 2] = 2143289344, !(r = c[r + 552 >> 2])) break
                                        }
                                }, function(r, e, a) {
                                    e |= 0, a = +a;
                                    var n = 0;
                                    n = c[(r |= 0) >> 2], e = ((r = c[r + 4 >> 2]) >> 1) + e | 0, 1 & r && (n = c[n + c[e >> 2] >> 2]), aa[0 | n](e, a)
                                }, function(r, e) {
                                    e = +e, fe(c[(r |= 0) >> 2], qr(w(e)))
                                }, function(r, e) {
                                    e = +e, fe(c[(r |= 0) >> 2], Kr(w(e)))
                                }, function(r) {
                                    fe(c[(r |= 0) >> 2], 2141891242)
                                }, function(r, e) {
                                    r |= 0, e = +e;
                                    var a = 0,
                                        n = w(0),
                                        i = w(0);
                                    r: if (n = w(e), r = c[r >> 2], !(n == (i = N[r + 32 >> 2]) | n != n & i != i))
                                        for (N[r + 32 >> 2] = n;;) {
                                            if (4 & (a = h[r + 4 | 0])) break r;
                                            if (f[r + 4 | 0] = 4 | a, (a = c[r + 20 >> 2]) && aa[0 | a](r), c[r + 308 >> 2] = 2143289344, !(r = c[r + 552 >> 2])) break
                                        }
                                }, function(r, e) {
                                    r |= 0, e = +e;
                                    var a = 0,
                                        n = w(0),
                                        i = w(0);
                                    r: if (n = w(e), r = c[r >> 2], !(n == (i = N[r + 36 >> 2]) | n != n & i != i))
                                        for (N[r + 36 >> 2] = n;;) {
                                            if (4 & (a = h[r + 4 | 0])) break r;
                                            if (f[r + 4 | 0] = 4 | a, (a = c[r + 20 >> 2]) && aa[0 | a](r), c[r + 308 >> 2] = 2143289344, !(r = c[r + 552 >> 2])) break
                                        }
                                }, function(r, e) {
                                    e = +e, te(c[(r |= 0) >> 2], 0, qr(w(e)))
                                }, function(r, e) {
                                    e = +e, te(c[(r |= 0) >> 2], 0, Kr(w(e)))
                                }, function(r) {
                                    te(c[(r |= 0) >> 2], 0, 2141891242)
                                }, function(r, e) {
                                    e = +e, te(c[(r |= 0) >> 2], 1, qr(w(e)))
                                }, function(r, e) {
                                    e = +e, te(c[(r |= 0) >> 2], 1, Kr(w(e)))
                                }, function(r) {
                                    te(c[(r |= 0) >> 2], 1, 2141891242)
                                }, function(r, e) {
                                    e = +e, ne(c[(r |= 0) >> 2], 0, qr(w(e)))
                                }, function(r, e) {
                                    e = +e, ne(c[(r |= 0) >> 2], 0, Kr(w(e)))
                                }, function(r, e) {
                                    e = +e, ne(c[(r |= 0) >> 2], 1, qr(w(e)))
                                }, function(r, e) {
                                    e = +e, ne(c[(r |= 0) >> 2], 1, Kr(w(e)))
                                }, function(r, e) {
                                    e = +e, ie(c[(r |= 0) >> 2], 0, qr(w(e)))
                                }, function(r, e) {
                                    e = +e, ie(c[(r |= 0) >> 2], 0, Kr(w(e)))
                                }, function(r, e) {
                                    e = +e, ie(c[(r |= 0) >> 2], 1, qr(w(e)))
                                }, function(r, e) {
                                    e = +e, ie(c[(r |= 0) >> 2], 1, Kr(w(e)))
                                }, function(r, e) {
                                    r |= 0, e = +e;
                                    var a = 0,
                                        n = w(0),
                                        i = w(0);
                                    r: if (n = w(e), r = c[r >> 2], !(n == (i = N[r + 224 >> 2]) | n != n & i != i))
                                        for (N[r + 224 >> 2] = n;;) {
                                            if (4 & (a = h[r + 4 | 0])) break r;
                                            if (f[r + 4 | 0] = 4 | a, (a = c[r + 20 >> 2]) && aa[0 | a](r), c[r + 308 >> 2] = 2143289344, !(r = c[r + 552 >> 2])) break
                                        }
                                }, function(r, e, a) {
                                    e |= 0, a = +a;
                                    var n = 0;
                                    r: if (r = c[(r |= 0) >> 2], (0 | c[152 + (e = r + (e << 2) | 0) >> 2]) != (0 | (n = qr(w(a)))))
                                        for (c[e + 152 >> 2] = n;;) {
                                            if (4 & (e = h[r + 4 | 0])) break r;
                                            if (f[r + 4 | 0] = 4 | e, (e = c[r + 20 >> 2]) && aa[0 | e](r), c[r + 308 >> 2] = 2143289344, !(r = c[r + 552 >> 2])) break
                                        }
                                }, function(r, e, a) {
                                    e |= 0, a = +a, ce(c[(r |= 0) >> 2], e, qr(w(a)))
                                }, function(r, e, a) {
                                    e |= 0, a = +a, ce(c[(r |= 0) >> 2], e, Kr(w(a)))
                                }, function(r, e, a) {
                                    e |= 0, a = +a;
                                    var n = 0;
                                    r: if (r = c[(r |= 0) >> 2], (0 | c[188 + (e = r + (e << 2) | 0) >> 2]) != (0 | (n = qr(w(a)))))
                                        for (c[e + 188 >> 2] = n;;) {
                                            if (4 & (e = h[r + 4 | 0])) break r;
                                            if (f[r + 4 | 0] = 4 | e, (e = c[r + 20 >> 2]) && aa[0 | e](r), c[r + 308 >> 2] = 2143289344, !(r = c[r + 552 >> 2])) break
                                        }
                                }, function(r) {
                                    return 3 & v[c[(r |= 0) >> 2] + 26 >> 1]
                                }, ge, function(r, e, a) {
                                    r |= 0, e |= 0, a |= 0;
                                    var n = 0,
                                        i = 0,
                                        t = w(0);
                                    n = 2, e = c[e >> 2] + (a << 2) | 0, t = N[e + 80 >> 2];
                                    r: {
                                        e: {
                                            if (2139156720 != (0 | (e = c[e + 80 >> 2]))) {
                                                if (i = NaN, 2141891242 == (0 | e)) {
                                                    n = 3;
                                                    break r
                                                }
                                                if (2140081935 != (0 | e)) break e;
                                                i = 0, n = 1;
                                                break r
                                            }
                                            break r
                                        }
                                        t == t ? (n = 1073741824 & e ? 2 : 1, b(2, 536870912 + (-1073741825 & e) | 0), i = +d()) : n = 0
                                    }
                                    m[r + 8 >> 3] = i, c[r >> 2] = n
                                }, function(r, e, a) {
                                    e |= 0, a |= 0;
                                    var n, i = 0;
                                    return ar = n = ar - 16 | 0, i = c[(r |= 0) >> 2], e = ((r = c[r + 4 >> 2]) >> 1) + e | 0, 1 & r && (i = c[i + c[e >> 2] >> 2]), aa[0 | i](n, e, a), r = we(16), e = c[n + 12 >> 2], c[r + 8 >> 2] = c[n + 8 >> 2], c[r + 12 >> 2] = e, e = c[n + 4 >> 2], c[r >> 2] = c[n >> 2], c[r + 4 >> 2] = e, ar = n + 16 | 0, 0 | r
                                }, function(r) {
                                    return c[c[(r |= 0) >> 2] + 24 >> 2] >>> 7 & 7
                                }, function(r) {
                                    return c[c[(r |= 0) >> 2] + 24 >> 2] >>> 10 & 7
                                }, function(r) {
                                    return c[c[(r |= 0) >> 2] + 24 >> 2] >>> 13 & 7
                                }, function(r) {
                                    return c[c[(r |= 0) >> 2] + 24 >> 2] >>> 2 & 3
                                }, function(r) {
                                    return c[c[(r |= 0) >> 2] + 24 >> 2] >>> 18 & 3
                                }, function(r) {
                                    return c[c[(r |= 0) >> 2] + 24 >> 2] >>> 4 & 7
                                }, function(r, e, a) {
                                    r |= 0, e |= 0, a |= 0;
                                    var n = 0,
                                        i = 0,
                                        t = w(0);
                                    n = 2, e = c[e >> 2] + (a << 2) | 0, t = N[e + 44 >> 2];
                                    r: {
                                        e: {
                                            if (2139156720 != (0 | (e = c[e + 44 >> 2]))) {
                                                if (i = NaN, 2141891242 == (0 | e)) {
                                                    n = 3;
                                                    break r
                                                }
                                                if (2140081935 != (0 | e)) break e;
                                                i = 0, n = 1;
                                                break r
                                            }
                                            break r
                                        }
                                        t == t ? (n = 1073741824 & e ? 2 : 1, b(2, 536870912 + (-1073741825 & e) | 0), i = +d()) : n = 0
                                    }
                                    m[r + 8 >> 3] = i, c[r >> 2] = n
                                }, function(r, e) {
                                    r |= 0, e |= 0;
                                    var a = 0,
                                        n = w(0),
                                        i = w(0);
                                    n = w(NaN), e = c[e >> 2], i = N[e + 40 >> 2], a = 3, 2141891242 != (0 | (e = c[e + 40 >> 2])) && (2140081935 != (0 | e) ? 2139156720 != (0 | e) ? (a = 0, i == i && (b(2, 536870912 + (-1073741825 & e) | 0), n = d(), a = 1073741824 & e ? 2 : 1)) : (n = w(0), a = 2) : (n = w(0), a = 1)), c[r >> 2] = a, m[r + 8 >> 3] = n
                                }, function(r, e) {
                                    e |= 0;
                                    var a, n = 0;
                                    return ar = a = ar - 16 | 0, n = c[(r |= 0) >> 2], e = ((r = c[r + 4 >> 2]) >> 1) + e | 0, 1 & r && (n = c[n + c[e >> 2] >> 2]), aa[0 | n](a, e), r = we(16), e = c[a + 12 >> 2], c[r + 8 >> 2] = c[a + 8 >> 2], c[r + 12 >> 2] = e, e = c[a + 4 >> 2], c[r >> 2] = c[a >> 2], c[r + 4 >> 2] = e, ar = a + 16 | 0, 0 | r
                                }, function(r) {
                                    r |= 0;
                                    var e = w(0);
                                    return +((e = N[c[r >> 2] + 32 >> 2]) == e ? e : w(0))
                                }, function(r, e) {
                                    e |= 0;
                                    var a = 0;
                                    return a = c[(r |= 0) >> 2], e = ((r = c[r + 4 >> 2]) >> 1) + e | 0, 1 & r && (a = c[a + c[e >> 2] >> 2]), +aa[0 | a](e)
                                }, function(r) {
                                    r |= 0;
                                    var e = w(0);
                                    return r = c[r >> 2], (e = N[r + 36 >> 2]) != e && (e = h[c[r + 568 >> 2] + 10 | 0] ? w(1) : w(0)), +e
                                }, function(r, e) {
                                    r |= 0, e |= 0;
                                    var a = 0,
                                        n = 0,
                                        i = w(0);
                                    e = c[e >> 2], i = N[e + 200 >> 2];
                                    r: {
                                        e: {
                                            if (2139156720 != (0 | (e = c[e + 200 >> 2]))) {
                                                if (n = NaN, a = 3, 2141891242 == (0 | e)) break r;
                                                if (2140081935 != (0 | e)) break e;
                                                n = 0, a = 1;
                                                break r
                                            }
                                            a = 2;
                                            break r
                                        }
                                        a = 0,
                                        i == i && (b(2, 536870912 + (-1073741825 & e) | 0), n = +d(), a = 1073741824 & e ? 2 : 1)
                                    }
                                    e = a, m[r + 8 >> 3] = n, c[r >> 2] = e
                                }, function(r, e) {
                                    r |= 0, e |= 0;
                                    var a = 0,
                                        n = 0,
                                        i = w(0);
                                    e = c[e >> 2], i = N[e + 204 >> 2];
                                    r: {
                                        e: {
                                            if (2139156720 != (0 | (e = c[e + 204 >> 2]))) {
                                                if (n = NaN, a = 3, 2141891242 == (0 | e)) break r;
                                                if (2140081935 != (0 | e)) break e;
                                                n = 0, a = 1;
                                                break r
                                            }
                                            a = 2;
                                            break r
                                        }
                                        a = 0,
                                        i == i && (b(2, 536870912 + (-1073741825 & e) | 0), n = +d(), a = 1073741824 & e ? 2 : 1)
                                    }
                                    e = a, m[r + 8 >> 3] = n, c[r >> 2] = e
                                }, function(r, e) {
                                    r |= 0, e |= 0;
                                    var a = 0,
                                        n = 0,
                                        i = w(0);
                                    e = c[e >> 2], i = N[e + 208 >> 2];
                                    r: {
                                        e: {
                                            if (2139156720 != (0 | (e = c[e + 208 >> 2]))) {
                                                if (n = NaN, a = 3, 2141891242 == (0 | e)) break r;
                                                if (2140081935 != (0 | e)) break e;
                                                n = 0, a = 1;
                                                break r
                                            }
                                            a = 2;
                                            break r
                                        }
                                        a = 0,
                                        i == i && (b(2, 536870912 + (-1073741825 & e) | 0), n = +d(), a = 1073741824 & e ? 2 : 1)
                                    }
                                    e = a, m[r + 8 >> 3] = n, c[r >> 2] = e
                                }, function(r, e) {
                                    r |= 0, e |= 0;
                                    var a = 0,
                                        n = 0,
                                        i = w(0);
                                    e = c[e >> 2], i = N[e + 212 >> 2];
                                    r: {
                                        e: {
                                            if (2139156720 != (0 | (e = c[e + 212 >> 2]))) {
                                                if (n = NaN, a = 3, 2141891242 == (0 | e)) break r;
                                                if (2140081935 != (0 | e)) break e;
                                                n = 0, a = 1;
                                                break r
                                            }
                                            a = 2;
                                            break r
                                        }
                                        a = 0,
                                        i == i && (b(2, 536870912 + (-1073741825 & e) | 0), n = +d(), a = 1073741824 & e ? 2 : 1)
                                    }
                                    e = a, m[r + 8 >> 3] = n, c[r >> 2] = e
                                }, function(r, e) {
                                    r |= 0, e |= 0;
                                    var a = 0,
                                        n = 0,
                                        i = w(0);
                                    e = c[e >> 2], i = N[e + 216 >> 2];
                                    r: {
                                        e: {
                                            if (2139156720 != (0 | (e = c[e + 216 >> 2]))) {
                                                if (n = NaN, a = 3, 2141891242 == (0 | e)) break r;
                                                if (2140081935 != (0 | e)) break e;
                                                n = 0, a = 1;
                                                break r
                                            }
                                            a = 2;
                                            break r
                                        }
                                        a = 0,
                                        i == i && (b(2, 536870912 + (-1073741825 & e) | 0), n = +d(), a = 1073741824 & e ? 2 : 1)
                                    }
                                    e = a, m[r + 8 >> 3] = n, c[r >> 2] = e
                                }, function(r, e) {
                                    r |= 0, e |= 0;
                                    var a = 0,
                                        n = 0,
                                        i = w(0);
                                    e = c[e >> 2], i = N[e + 220 >> 2];
                                    r: {
                                        e: {
                                            if (2139156720 != (0 | (e = c[e + 220 >> 2]))) {
                                                if (n = NaN, a = 3, 2141891242 == (0 | e)) break r;
                                                if (2140081935 != (0 | e)) break e;
                                                n = 0, a = 1;
                                                break r
                                            }
                                            a = 2;
                                            break r
                                        }
                                        a = 0,
                                        i == i && (b(2, 536870912 + (-1073741825 & e) | 0), n = +d(), a = 1073741824 & e ? 2 : 1)
                                    }
                                    e = a, m[r + 8 >> 3] = n, c[r >> 2] = e
                                }, function(r) {
                                    r |= 0;
                                    var e = w(0);
                                    return +((e = N[c[r >> 2] + 224 >> 2]) != e ? w(NaN) : e)
                                }, function(r, e) {
                                    r |= 0, e |= 0;
                                    var a = 0,
                                        n = w(0);
                                    r = c[r >> 2] + (e << 2) | 0, n = N[r + 152 >> 2];
                                    r: {
                                        if (!(2139156720 == (0 | (r = c[r + 152 >> 2])) | 2140081935 == (0 | r))) {
                                            if (a = NaN, 2141891242 == (0 | r) | n != n) break r;
                                            if (2139156720 != (0 | r)) return b(2, 536870912 + (-1073741825 & r) | 0), +d()
                                        }
                                        a = 0
                                    }
                                    return +a
                                }, function(r, e, a) {
                                    e |= 0, a |= 0;
                                    var n = 0;
                                    return n = c[(r |= 0) >> 2], e = ((r = c[r + 4 >> 2]) >> 1) + e | 0, 1 & r && (n = c[n + c[e >> 2] >> 2]), +aa[0 | n](e, a)
                                }, function(r) {
                                    return c[c[(r |= 0) >> 2] + 24 >> 2] >>> 20 & 3
                                }, function(r) {
                                    return c[c[(r |= 0) >> 2] + 24 >> 2] >>> 22 & 1
                                }, function(r, e, a) {
                                    r |= 0, e |= 0, a |= 0;
                                    var n = 0,
                                        i = 0,
                                        t = w(0);
                                    n = 2, e = c[e >> 2] + (a << 2) | 0, t = N[e + 116 >> 2];
                                    r: {
                                        e: {
                                            if (2139156720 != (0 | (e = c[e + 116 >> 2]))) {
                                                if (i = NaN, 2141891242 == (0 | e)) {
                                                    n = 3;
                                                    break r
                                                }
                                                if (2140081935 != (0 | e)) break e;
                                                i = 0, n = 1;
                                                break r
                                            }
                                            break r
                                        }
                                        t == t ? (n = 1073741824 & e ? 2 : 1, b(2, 536870912 + (-1073741825 & e) | 0), i = +d()) : n = 0
                                    }
                                    m[r + 8 >> 3] = i, c[r >> 2] = n
                                }, function(r, e) {
                                    r |= 0, e |= 0;
                                    var a = w(0),
                                        n = w(0);
                                    r = c[r >> 2] + (e << 2) | 0, n = N[r + 188 >> 2];
                                    r: {
                                        if (!(2139156720 == (0 | (r = c[r + 188 >> 2])) | 2140081935 == (0 | r))) {
                                            if (a = w(NaN), 2141891242 == (0 | r) | n != n) break r;
                                            if (2139156720 != (0 | r)) return w((b(2, 536870912 + (-1073741825 & r) | 0), d()))
                                        }
                                        a = w(0)
                                    }
                                    return w(a)
                                }, function(r, e, a) {
                                    e |= 0, a |= 0;
                                    var n = 0;
                                    return n = c[(r |= 0) >> 2], e = ((r = c[r + 4 >> 2]) >> 1) + e | 0, 1 & r && (n = c[n + c[e >> 2] >> 2]), w(w(aa[0 | n](e, a)))
                                }, function(r, e, a) {
                                    e |= 0, a |= 0;
                                    var n, i = 0,
                                        t = 0,
                                        o = 0,
                                        u = 0,
                                        b = 0,
                                        s = 0,
                                        k = 0,
                                        l = 0,
                                        d = 0;
                                    ar = n = ar - 80 | 0, r = c[(r |= 0) >> 2];
                                    r: {
                                        e: {
                                            if (b = c[e >> 2], !c[b + 552 >> 2]) {
                                                if (c[r + 8 >> 2]) break e;
                                                u = (e = c[r + 556 >> 2]) + (a << 2) | 0;
                                                a: if ((i = c[r + 560 >> 2]) >>> 0 < (o = c[(t = r + 564 | 0) >> 2]) >>> 0) {
                                                    if ((0 | i) == (0 | u)) {
                                                        c[u >> 2] = b, c[r + 560 >> 2] = u + 4;
                                                        break a
                                                    }
                                                    if (a = i, i >>> 0 > (e = i - 4 | 0) >>> 0)
                                                        for (; c[a >> 2] = c[e >> 2], a = a + 4 | 0, i >>> 0 > (e = e + 4 | 0) >>> 0;);
                                                    c[r + 560 >> 2] = a, (0 | (e = u + 4 | 0)) != (0 | i) && yr(i - (-4 & (e = i - e | 0)) | 0, u, e), c[u >> 2] = b
                                                } else {
                                                    if ((i = 1 + (i - e >> 2) | 0) >>> 0 >= 1073741824) break r;
                                                    if (o = (e = o - e | 0) >>> 1 | 0, t = pe(n + 32 | 0, e >>> 0 >= 2147483644 ? 1073741823 : i >>> 0 < o >>> 0 ? o : i, a, t), (0 | (a = c[t + 8 >> 2])) == c[t + 12 >> 2])
                                                        if ((e = c[t + 4 >> 2]) >>> 0 > (i = c[t >> 2]) >>> 0) a = yr(s = (i = (1 + (e - i >> 2) | 0) / -2 << 2) + e | 0, o = e, e = a - e | 0) + e | 0, c[t + 8 >> 2] = a, c[t + 4 >> 2] = i + c[t + 4 >> 2];
                                                        else {
                                                            if (o = pe(n + 56 | 0, e = (0 | a) == (0 | i) ? 1 : a - i >> 1, e >>> 2 | 0, c[t + 16 >> 2]), i = c[o + 8 >> 2], (0 | (e = c[t + 4 >> 2])) != (0 | (a = c[t + 8 >> 2]))) {
                                                                for (a = (a - e | 0) + i | 0; c[i >> 2] = c[e >> 2], e = e + 4 | 0, (0 | (i = i + 4 | 0)) != (0 | a););
                                                                e = c[t + 8 >> 2], i = c[t + 4 >> 2]
                                                            } else a = i, i = e;
                                                            s = c[t >> 2], c[t >> 2] = c[o >> 2], c[o >> 2] = s, c[t + 4 >> 2] = c[o + 4 >> 2], c[o + 4 >> 2] = i, c[t + 8 >> 2] = a, c[o + 8 >> 2] = e, k = c[t + 12 >> 2], c[t + 12 >> 2] = c[o + 12 >> 2], c[o + 12 >> 2] = k, (0 | e) != (0 | i) && (c[o + 8 >> 2] = (3 + (i - e | 0) & -4) + e), s && (Gr(s), a = c[t + 8 >> 2])
                                                        }
                                                    c[a >> 2] = b, c[t + 8 >> 2] = c[t + 8 >> 2] + 4, a = u - (e = c[r + 556 >> 2]) | 0, l = t, d = yr(c[t + 4 >> 2] - a | 0, e, a), c[l + 4 >> 2] = d, i = c[r + 560 >> 2] - u | 0, u = yr(c[t + 8 >> 2], u, i), e = c[r + 556 >> 2], c[r + 556 >> 2] = c[t + 4 >> 2], c[t + 4 >> 2] = e, a = c[r + 560 >> 2], c[r + 560 >> 2] = i + u, c[t + 8 >> 2] = a, i = c[r + 564 >> 2], c[r + 564 >> 2] = c[t + 12 >> 2], c[t >> 2] = e, c[t + 12 >> 2] = i, (0 | e) != (0 | a) && (c[t + 8 >> 2] = a + (3 + (e - a | 0) & -4)), e && Gr(e)
                                                }
                                                for (c[b + 552 >> 2] = r; !(4 & (e = h[r + 4 | 0])) && (f[r + 4 | 0] = 4 | e, (e = c[r + 20 >> 2]) && aa[0 | e](r), c[r + 308 >> 2] = 2143289344, r = c[r + 552 >> 2]););
                                                return void(ar = n + 80 | 0)
                                            }
                                            c[n + 16 >> 2] = 4006,
                                            Xr(r, n + 16 | 0),
                                            je(),
                                            A()
                                        }
                                        c[n >> 2] = 4139,
                                        Xr(r, n),
                                        je(),
                                        A()
                                    }
                                    I(), A()
                                }, me, function(r, e) {
                                    e |= 0;
                                    var a, n = 0,
                                        i = 0,
                                        t = 0;
                                    ar = a = ar - 320 | 0, r = c[(r |= 0) >> 2];
                                    r: if (c[r + 560 >> 2] != c[r + 556 >> 2] && (i = c[e >> 2], e = c[i + 552 >> 2], ee(r, i))) {
                                        if ((0 | r) == (0 | e)) {
                                            for (n = Rr(a, 0, 288), c[(e = n) + 16 >> 2] = 2143289344, c[e + 20 >> 2] = 2143289344, Rr(e + 24 | 0, 0, 49), c[e + 80 >> 2] = 2143289344, t = e + 288 | 0, e = e + 96 | 0; c[e + 16 >> 2] = -1082130432, c[e + 20 >> 2] = -1082130432, c[e + 8 >> 2] = 0, c[e + 12 >> 2] = 0, c[e >> 2] = -1082130432, c[e + 4 >> 2] = -1082130432, (0 | t) != (0 | (e = e + 24 | 0)););
                                            c[n + 312 >> 2] = -1082130432, c[n + 316 >> 2] = -1082130432, c[n + 304 >> 2] = 0, c[n + 308 >> 2] = 0, c[n + 296 >> 2] = -1082130432, c[n + 300 >> 2] = -1082130432, c[n + 288 >> 2] = 2143289344, c[n + 292 >> 2] = 2143289344, kr(i + 228 | 0, n, 320), c[i + 552 >> 2] = 0
                                        }
                                        for (;;) {
                                            if (4 & (e = h[r + 4 | 0])) break r;
                                            if (f[r + 4 | 0] = 4 | e, (e = c[r + 20 >> 2]) && aa[0 | e](r), c[r + 308 >> 2] = 2143289344, !(r = c[r + 552 >> 2])) break
                                        }
                                    }
                                    ar = a + 320 | 0
                                }, Ee, function(r) {
                                    return r = c[(r |= 0) >> 2], c[r + 560 >> 2] - c[r + 556 >> 2] >> 2
                                }, ge, function(r) {
                                    return (r = c[c[(r |= 0) >> 2] + 552 >> 2]) ? c[r >> 2] : 0
                                }, ge, function(r, e) {
                                    e |= 0;
                                    var a, n = 0;
                                    return a = c[(r |= 0) >> 2], r = c[a + 556 >> 2], c[a + 560 >> 2] - r >> 2 >>> 0 <= e >>> 0 || (r = c[r + (e << 2) >> 2]) && (n = c[r >> 2]), 0 | n
                                }, ye, function(r) {
                                    return (2 & h[c[(r |= 0) >> 2] + 4 | 0]) >>> 1 | 0
                                }, ge, function(r, e) {
                                    e |= 0;
                                    var a = 0;
                                    r: if (r = c[(r |= 0) >> 2], ((2 & (a = h[r + 4 | 0])) >>> 1 | 0) != (0 | e))
                                        for (f[r + 4 | 0] = 253 & a | (e ? 2 : 0);;) {
                                            if (4 & (e = h[r + 4 | 0])) break r;
                                            if (f[r + 4 | 0] = 4 | e, (e = c[r + 20 >> 2]) && aa[0 | e](r), c[r + 308 >> 2] = 2143289344, !(r = c[r + 552 >> 2])) break
                                        }
                                }, Ee, function(r, e) {
                                    var a;
                                    e |= 0, a = c[4 + (r |= 0) >> 2], c[r + 4 >> 2] = e, a && aa[c[c[a >> 2] + 4 >> 2]](a), Ae(c[r >> 2], 14)
                                }, Ee, function(r) {
                                    var e;
                                    e = c[4 + (r |= 0) >> 2], c[r + 4 >> 2] = 0, e && aa[c[c[e >> 2] + 4 >> 2]](e), Ae(c[r >> 2], 0)
                                }, function(r, e) {
                                    var a;
                                    e |= 0, a = c[8 + (r |= 0) >> 2], c[r + 8 >> 2] = e, a && aa[c[c[a >> 2] + 4 >> 2]](a), c[c[r >> 2] + 20 >> 2] = 15
                                }, Ee, function(r) {
                                    var e;
                                    e = c[8 + (r |= 0) >> 2], c[r + 8 >> 2] = 0, e && aa[c[c[e >> 2] + 4 >> 2]](e), c[c[r >> 2] + 20 >> 2] = 0
                                }, function(r) {
                                    var e, a = 0;
                                    if (ar = e = ar - 16 | 0, r = c[(r |= 0) >> 2], c[r + 8 >> 2]) {
                                        for (; !(4 & (a = h[r + 4 | 0])) && (f[r + 4 | 0] = 4 | a, (a = c[r + 20 >> 2]) && aa[0 | a](r), c[r + 308 >> 2] = 2143289344, r = c[r + 552 >> 2]););
                                        ar = e + 16 | 0
                                    } else c[e >> 2] = 1024, Xr(r, e), je(), A()
                                }, function(r) {
                                    return (4 & h[c[(r |= 0) >> 2] + 4 | 0]) >>> 2 | 0
                                }, ge, function(r, e, a, n) {
                                    r |= 0, e = +e, a = +a, n |= 0;
                                    var i, t, f = w(0),
                                        o = w(0),
                                        u = w(0),
                                        s = 0,
                                        k = w(0),
                                        A = 0,
                                        l = w(0);
                                    ar = t = ar + -64 | 0, i = c[r >> 2], Rr(t + 8 | 0, 0, 56), c[1735] = c[1735] + 1, sr(i), u = w(e), o = N[i + 572 >> 2];
                                    r: {
                                        e: {
                                            switch (0 | (r = c[i + 576 >> 2])) {
                                                case 0:
                                                case 3:
                                                    break e
                                            }
                                            a: {
                                                if (!(1 != (0 | r) | (f = N[i + 572 >> 2]) != f)) {
                                                    if (!((f = o) < w(0))) break a;
                                                    break e
                                                }
                                                n: {
                                                    if (2 != (0 | r) | f != f) {
                                                        f = w(NaN);
                                                        i: switch (r - 1 | 0) {
                                                            case 1:
                                                                break n;
                                                            case 0:
                                                                break i;
                                                            default:
                                                                break a
                                                        }
                                                        f = o;
                                                        break a
                                                    }
                                                    if (u != u | o < w(0)) break e
                                                }
                                                f = w(w(o * u) * w(.009999999776482582))
                                            }
                                            l = w(f + w(Mr(i, 2, u) + Yr(i, 2, u))),
                                            A = 1;
                                            break r
                                        }
                                        f = w(0),
                                        o = N[i + 216 >> 2];e: {
                                            a: {
                                                n: {
                                                    i: if (2139156720 != (0 | (r = c[i + 216 >> 2]))) {
                                                        if (2140081935 == (0 | r)) break e;
                                                        A = 4276;
                                                        t: {
                                                            if (2141891242 != (0 | r)) {
                                                                if (o == o) break t;
                                                                A = 4268
                                                            }
                                                            switch (f = N[A >> 2], c[A + 4 >> 2] - 1 | 0) {
                                                                case 0:
                                                                    break n;
                                                                case 1:
                                                                    break i;
                                                                default:
                                                                    break a
                                                            }
                                                        }
                                                        if (b(2, 536870912 + (-1073741825 & r) | 0), f = d(), !(1073741824 & r)) break n
                                                    }f = w(w(f * u) * w(.009999999776482582))
                                                }
                                                if (f == f) {
                                                    f = w(0);
                                                    n: if (2139156720 != (0 | r)) {
                                                        if (2140081935 == (0 | r)) break e;
                                                        s = 4276;
                                                        i: {
                                                            if (2141891242 != (0 | r)) {
                                                                if (o == o) break i;
                                                                s = 4268
                                                            }
                                                            switch (f = N[s >> 2], l = w(NaN), A = 2, c[s + 4 >> 2] - 1 | 0) {
                                                                case 1:
                                                                    break n;
                                                                case 0:
                                                                    break e;
                                                                default:
                                                                    break r
                                                            }
                                                        }
                                                        if (b(2, 536870912 + (-1073741825 & r) | 0), f = d(), !(1073741824 & r)) break e
                                                    }
                                                    l = w(w(f * u) * w(.009999999776482582)), A = 2;
                                                    break r
                                                }
                                            }
                                            A = u == u,
                                            l = u;
                                            break r
                                        }
                                        A = 2,
                                        l = f
                                    }
                                    k = w(a), o = N[i + 580 >> 2];
                                    r: {
                                        e: {
                                            switch (0 | (r = c[i + 584 >> 2])) {
                                                case 0:
                                                case 3:
                                                    break e
                                            }
                                            a: {
                                                if (!(1 != (0 | r) | (f = N[i + 580 >> 2]) != f)) {
                                                    if (!((f = o) < w(0))) break a;
                                                    break e
                                                }
                                                n: {
                                                    if (2 != (0 | r) | f != f) {
                                                        f = w(NaN);
                                                        i: switch (r - 1 | 0) {
                                                            case 1:
                                                                break n;
                                                            case 0:
                                                                break i;
                                                            default:
                                                                break a
                                                        }
                                                        f = o;
                                                        break a
                                                    }
                                                    if (k != k | o < w(0)) break e
                                                }
                                                f = w(w(o * k) * w(.009999999776482582))
                                            }
                                            o = w(f + w(Mr(i, 0, u) + Yr(i, 0, u))),
                                            r = 1;
                                            break r
                                        }
                                        f = w(0),
                                        o = N[i + 220 >> 2];e: {
                                            a: {
                                                n: {
                                                    i: if (2139156720 != (0 | (r = c[i + 220 >> 2]))) {
                                                        if (2140081935 == (0 | r)) break e;
                                                        s = 4276;
                                                        t: {
                                                            if (2141891242 != (0 | r)) {
                                                                if (o == o) break t;
                                                                s = 4268
                                                            }
                                                            switch (f = N[s >> 2], c[s + 4 >> 2] - 1 | 0) {
                                                                case 0:
                                                                    break n;
                                                                case 1:
                                                                    break i;
                                                                default:
                                                                    break a
                                                            }
                                                        }
                                                        if (b(2, 536870912 + (-1073741825 & r) | 0), f = d(), !(1073741824 & r)) break n
                                                    }f = w(w(f * k) * w(.009999999776482582))
                                                }
                                                if (f == f) {
                                                    f = w(0);
                                                    n: if (2139156720 != (0 | r)) {
                                                        if (2140081935 == (0 | r)) break e;
                                                        s = 4276;
                                                        i: {
                                                            if (2141891242 != (0 | r)) {
                                                                if (o == o) break i;
                                                                s = 4268
                                                            }
                                                            switch (f = N[s >> 2], o = w(NaN), r = 2, c[s + 4 >> 2] - 1 | 0) {
                                                                case 0:
                                                                    break e;
                                                                case 1:
                                                                    break n;
                                                                default:
                                                                    break r
                                                            }
                                                        }
                                                        if (b(2, 536870912 + (-1073741825 & r) | 0), f = d(), !(1073741824 & r)) break e
                                                    }
                                                    o = w(w(f * k) * w(.009999999776482582)), r = 2;
                                                    break r
                                                }
                                            }
                                            r = k == k,
                                            o = k;
                                            break r
                                        }
                                        r = 2,
                                        o = f
                                    }
                                    or(i, l, o, n, A, r, u, k, 1, 0, c[i + 568 >> 2], t + 8 | 0, 0, c[1735]) && (Fr(i, 3 & h[i + 300 | 0], u, k, u), Er(i, +N[c[i + 568 >> 2] + 16 >> 2], 0, 0)), ar = t - -64 | 0
                                }, function(r, e, a, n, i) {
                                    e |= 0, a = +a, n = +n, i |= 0;
                                    var t = 0;
                                    t = c[(r |= 0) >> 2], e = ((r = c[r + 4 >> 2]) >> 1) + e | 0, 1 & r && (t = c[t + c[e >> 2] >> 2]), aa[0 | t](e, a, n, i)
                                }, function(r) {
                                    return +N[c[(r |= 0) >> 2] + 228 >> 2]
                                }, function(r) {
                                    return +N[c[(r |= 0) >> 2] + 236 >> 2]
                                }, function(r) {
                                    return +N[c[(r |= 0) >> 2] + 232 >> 2]
                                }, function(r) {
                                    return +N[c[(r |= 0) >> 2] + 240 >> 2]
                                }, function(r) {
                                    return +N[c[(r |= 0) >> 2] + 244 >> 2]
                                }, function(r) {
                                    return +N[c[(r |= 0) >> 2] + 248 >> 2]
                                }, function(r, e) {
                                    r |= 0, e = c[(e |= 0) >> 2], m[r >> 3] = N[e + 228 >> 2], m[r + 8 >> 3] = N[e + 236 >> 2], m[r + 16 >> 3] = N[e + 232 >> 2], m[r + 24 >> 3] = N[e + 240 >> 2], m[r + 32 >> 3] = N[e + 244 >> 2], m[r + 40 >> 3] = N[e + 248 >> 2]
                                }, function(r, e) {
                                    e |= 0;
                                    var a, n = 0;
                                    return ar = a = ar - 48 | 0, n = c[(r |= 0) >> 2], e = ((r = c[r + 4 >> 2]) >> 1) + e | 0, 1 & r && (n = c[n + c[e >> 2] >> 2]), aa[0 | n](a, e), r = kr(we(48), a, 48), ar = a + 48 | 0, 0 | r
                                }, function(r, e) {
                                    var a;
                                    if (e |= 0, ar = a = ar - 16 | 0, r = c[(r |= 0) >> 2], (0 | e) < 6) {
                                        ar = a + 16 | 0;
                                        r: {
                                            switch (e - 4 | 0) {
                                                case 0:
                                                    if (e = r + 260 | 0, 2 == (3 & h[r + 300 | 0])) break r;
                                                    e = r + 252 | 0;
                                                    break r;
                                                case 1:
                                                    if (e = r + 252 | 0, 2 == (3 & h[r + 300 | 0])) break r;
                                                    e = r + 260 | 0;
                                                    break r
                                            }
                                            e = 252 + (r + (e << 2) | 0) | 0
                                        }
                                        return +N[e >> 2]
                                    }
                                    c[a >> 2] = 1871, Xr(r, a), je(), A()
                                }, function(r, e) {
                                    var a;
                                    if (e |= 0, ar = a = ar - 16 | 0, r = c[(r |= 0) >> 2], (0 | e) < 6) {
                                        ar = a + 16 | 0;
                                        r: {
                                            switch (e - 4 | 0) {
                                                case 0:
                                                    if (e = r + 276 | 0, 2 == (3 & h[r + 300 | 0])) break r;
                                                    e = r + 268 | 0;
                                                    break r;
                                                case 1:
                                                    if (e = r + 268 | 0, 2 == (3 & h[r + 300 | 0])) break r;
                                                    e = r + 276 | 0;
                                                    break r
                                            }
                                            e = 268 + (r + (e << 2) | 0) | 0
                                        }
                                        return +N[e >> 2]
                                    }
                                    c[a >> 2] = 1871, Xr(r, a), je(), A()
                                }, function(r, e) {
                                    var a;
                                    if (e |= 0, ar = a = ar - 16 | 0, r = c[(r |= 0) >> 2], (0 | e) < 6) {
                                        ar = a + 16 | 0;
                                        r: {
                                            switch (e - 4 | 0) {
                                                case 0:
                                                    if (e = r + 292 | 0, 2 == (3 & h[r + 300 | 0])) break r;
                                                    e = r + 284 | 0;
                                                    break r;
                                                case 1:
                                                    if (e = r + 284 | 0, 2 == (3 & h[r + 300 | 0])) break r;
                                                    e = r + 292 | 0;
                                                    break r
                                            }
                                            e = 284 + (r + (e << 2) | 0) | 0
                                        }
                                        return +N[e >> 2]
                                    }
                                    c[a >> 2] = 1871, Xr(r, a), je(), A()
                                }, Pe, Ce, Pe, Ce, gr, _e, function(r) {
                                    Gr(_e(r |= 0))
                                }, function(r, e, a, n, i, t) {
                                    var o, u, b;
                                    r |= 0, e |= 0, a = w(a), n |= 0, i = w(i), t |= 0, ar = o = ar - 48 | 0, b = c[e + 8 >> 2], 1 & f[6972] ? e = c[1742] : (e = 0 | C(5, 4416), f[6972] = 1, c[1742] = e), c[o + 40 >> 2] = t, N[o + 32 >> 2] = i, c[o + 24 >> 2] = n, N[o + 16 >> 2] = a, e = (u = +Q(0 | e, 0 | b, 2873, o + 12 | 0, o + 16 | 0)) < 4294967296 & u >= 0 ? ~~u >>> 0 : 0, n = c[o + 12 >> 2], t = c[e + 4 >> 2], c[r >> 2] = c[e >> 2], c[r + 4 >> 2] = t, t = c[e + 12 >> 2], c[r + 8 >> 2] = c[e + 8 >> 2], c[r + 12 >> 2] = t, H(0 | n), ar = o + 48 | 0
                                }, $e, ra, Oe, function(r) {
                                    Gr(Oe(r |= 0))
                                }, function(r) {
                                    Ie(c[8 + (r |= 0) >> 2], 3244)
                                }, $e, function(r) {
                                    return 0 | q(c[60 + (r |= 0) >> 2])
                                }, function(r, e, a) {
                                    e |= 0, a |= 0;
                                    var n, i = 0,
                                        t = 0,
                                        f = 0,
                                        o = 0,
                                        u = 0,
                                        b = 0;
                                    ar = n = ar - 32 | 0, i = c[28 + (r |= 0) >> 2], c[n + 16 >> 2] = i, t = c[r + 20 >> 2], c[n + 28 >> 2] = a, c[n + 24 >> 2] = e, e = t - i | 0, c[n + 20 >> 2] = e, t = e + a | 0, u = 2, e = n + 16 | 0;
                                    r: {
                                        for (;;) {
                                            e: {
                                                a: {
                                                    n: {
                                                        if (!Se(0 | K(c[r + 60 >> 2], 0 | e, 0 | u, n + 12 | 0))) {
                                                            if ((0 | (f = c[n + 12 >> 2])) == (0 | t)) break n;
                                                            if ((0 | f) >= 0) break a;
                                                            break e
                                                        }
                                                        if (-1 != (0 | t)) break e
                                                    }
                                                    e = c[r + 44 >> 2],
                                                    c[r + 28 >> 2] = e,
                                                    c[r + 20 >> 2] = e,
                                                    c[r + 16 >> 2] = e + c[r + 48 >> 2],
                                                    r = a;
                                                    break r
                                                }
                                                o = f - ((b = (o = c[e + 4 >> 2]) >>> 0 < f >>> 0) ? o : 0) | 0,
                                                c[(i = (b << 3) + e | 0) >> 2] = o + c[i >> 2],
                                                c[(e = (b ? 12 : 4) + e | 0) >> 2] = c[e >> 2] - o,
                                                t = t - f | 0,
                                                u = u - b | 0,
                                                e = i;
                                                continue
                                            }
                                            break
                                        }
                                        c[r + 28 >> 2] = 0,
                                        c[r + 16 >> 2] = 0,
                                        c[r + 20 >> 2] = 0,
                                        c[r >> 2] = 32 | c[r >> 2],
                                        r = 0,
                                        2 != (0 | u) && (r = a - c[e + 4 >> 2] | 0)
                                    }
                                    return ar = n + 32 | 0, 0 | r
                                }, function(r, e, a, n) {
                                    var i;
                                    return e |= 0, a |= 0, n |= 0, ar = i = ar - 16 | 0, r = Se(0 | D(c[60 + (r |= 0) >> 2], 0 | e, 0 | a, 255 & n, i + 8 | 0)), ar = i + 16 | 0, nr = r ? -1 : c[i + 12 >> 2], 0 | (r ? -1 : c[i + 8 >> 2])
                                }, function(r) {
                                    return 0
                                }, function(r, e, a, n) {
                                    return nr = 0, 0
                                }, function(r, e, a) {
                                    e |= 0, a |= 0;
                                    var n, i, t = 0,
                                        o = 0,
                                        u = 0;
                                    return n = c[84 + (r |= 0) >> 2], o = c[n >> 2], t = c[n + 4 >> 2], i = c[r + 28 >> 2], (u = t >>> 0 < (u = c[r + 20 >> 2] - i | 0) >>> 0 ? t : u) && (kr(o, i, u), o = u + c[n >> 2] | 0, c[n >> 2] = o, t = c[n + 4 >> 2] - u | 0, c[n + 4 >> 2] = t), (t = a >>> 0 > t >>> 0 ? t : a) && (kr(o, e, t), o = t + c[n >> 2] | 0, c[n >> 2] = o, c[n + 4 >> 2] = c[n + 4 >> 2] - t), f[0 | o] = 0, e = c[r + 44 >> 2], c[r + 28 >> 2] = e, c[r + 20 >> 2] = e, 0 | a
                                }, ra]);

                                function na() {
                                    return t.byteLength / 65536 | 0
                                }
                                return {
                                    E: function() {
                                        for (var r = 0, e = 0, a = 0; a = 5888 + (e = r << 4) | 0, c[e + 5892 >> 2] = a, c[e + 5896 >> 2] = a, 64 != (0 | (r = r + 1 | 0)););
                                        hr(48), c[1736] = 16, c[1737] = 0, tr(), c[1737] = c[1748], c[1748] = 6944, c[1749] = 194, c[1750] = 0, gr(), c[1750] = c[1748], c[1748] = 6996
                                    },
                                    F: function(r) {
                                        r |= 0;
                                        var e, a, n = 0,
                                            i = 0,
                                            t = 0;
                                        ar = e = ar - 96 | 0, c[e >> 2] = r, ar = i = ar - 16 | 0, c[i + 12 >> 2] = e, ar = r = ar - 144 | 0, r = kr(r, 5440, 144), n = a = e + 16 | 0, c[r + 44 >> 2] = n, c[r + 20 >> 2] = n, t = (t = -2 - n | 0) >>> 0 >= 2147483647 ? 2147483647 : t, c[r + 48 >> 2] = t, n = n + t | 0, c[r + 28 >> 2] = n, c[r + 16 >> 2] = n, Zr(r, 2201, e, 0, 0), t && (n = c[r + 20 >> 2], f[n - ((0 | n) == c[r + 16 >> 2]) | 0] = 0), ar = r + 144 | 0, ar = i + 16 | 0;
                                        r: {
                                            if (3 & (r = a))
                                                for (;;) {
                                                    if (!h[0 | r]) break r;
                                                    if (!(3 & (r = r + 1 | 0))) break
                                                }
                                            for (; n = r, r = r + 4 | 0, !((-1 ^ (i = c[n >> 2])) & i - 16843009 & -2139062144););
                                            for (; n = (r = n) + 1 | 0, h[0 | r];);
                                        }
                                        return r = (n = cr(r = 1 + (r - a | 0) | 0)) ? kr(n, a, r) : 0, ar = e + 96 | 0, 0 | r
                                    },
                                    G: function() {
                                        var r = 0;
                                        if (r = c[1748])
                                            for (; aa[c[r >> 2]](), r = c[r + 4 >> 2];);
                                    },
                                    H: cr,
                                    I: aa,
                                    J: Gr,
                                    K: function(r, e, a, n, i) {
                                        return e |= 0, a |= 0, n |= 0, i |= 0, 0 | aa[0 | (r |= 0)](e, a, n, i)
                                    }
                                }
                            }(r)
                        }(r)
                    }
                    Object.assign(e, t), t = null, e.wasmBinary && (o = e.wasmBinary), e.noExitRuntime;
                    var k = Error;
                    o = [], "object" != typeof {} && O("no native wasm support detected");
                    var A, l, d, h, v, p, N, m, y, w = !1;

                    function E(r, e, a) {
                        a = e + a;
                        for (var n = ""; !(e >= a);) {
                            var i = r[e++];
                            if (!i) break;
                            if (128 & i) {
                                var t = 63 & r[e++];
                                if (192 == (224 & i)) n += String.fromCharCode((31 & i) << 6 | t);
                                else {
                                    var f = 63 & r[e++];
                                    65536 > (i = 224 == (240 & i) ? (15 & i) << 12 | t << 6 | f : (7 & i) << 18 | t << 12 | f << 6 | 63 & r[e++]) ? n += String.fromCharCode(i) : (i -= 65536, n += String.fromCharCode(55296 | i >> 10, 56320 | 1023 & i))
                                }
                            } else n += String.fromCharCode(i)
                        }
                        return n
                    }

                    function g() {
                        var r = A.buffer;
                        e.HEAP8 = l = new Int8Array(r), e.HEAP16 = h = new Int16Array(r), e.HEAP32 = p = new Int32Array(r), e.HEAPU8 = d = new Uint8Array(r), e.HEAPU16 = v = new Uint16Array(r), e.HEAPU32 = N = new Uint32Array(r), e.HEAPF32 = m = new Float32Array(r), e.HEAPF64 = y = new Float64Array(r)
                    }
                    var R = e.INITIAL_MEMORY || 16777216;
                    65536 <= R || O("INITIAL_MEMORY should be larger than STACK_SIZE, was " + R + "! (STACK_SIZE=65536)"), A = e.wasmMemory ? e.wasmMemory : new function() {
                        this.buffer = new ArrayBuffer(R / 65536 * 65536)
                    }, g(), R = A.buffer.byteLength;
                    var G, Z = [],
                        W = [],
                        V = [];

                    function B() {
                        var r = e.preRun.shift();
                        Z.unshift(r)
                    }
                    var T, I = 0,
                        X = null;

                    function O(r) {
                        throw e.onAbort && e.onAbort(r), u(r = "Aborted(" + r + ")"), w = !0, r = new k(r + ". Build with -sASSERTIONS for more info."), i(r), r
                    }

                    function _(r) {
                        return r.startsWith("data:application/octet-stream;base64,")
                    }
                    if (!_(T = "yoga-asm.wasm")) {
                        var L = T;
                        T = e.locateFile ? e.locateFile(L, f) : f + L
                    }

                    function F(r) {
                        for (; 0 < r.length;) r.shift()(e)
                    }

                    function C(r) {
                        if (void 0 === r) return "_unknown";
                        var e = (r = r.replace(/[^a-zA-Z0-9_]/g, "$")).charCodeAt(0);
                        return 48 <= e && 57 >= e ? "_" + r : r
                    }

                    function P(r, e) {
                        return r = C(r),
                            function() {
                                return e.apply(this, arguments)
                            }
                    }
                    var U = [{}, {
                            value: void 0
                        }, {
                            value: null
                        }, {
                            value: !0
                        }, {
                            value: !1
                        }],
                        S = [];

                    function Y(r) {
                        var e = Error,
                            a = P(r, (function(e) {
                                this.name = r, this.message = e, void 0 !== (e = Error(e).stack) && (this.stack = this.toString() + "\n" + e.replace(/^Error(:[^\n]*)?\n/, ""))
                            }));
                        return a.prototype = Object.create(e.prototype), a.prototype.constructor = a, a.prototype.toString = function() {
                            return void 0 === this.message ? this.name : this.name + ": " + this.message
                        }, a
                    }
                    var M = void 0;

                    function H(r) {
                        throw new M(r)
                    }
                    var Q = function(r) {
                            return r || H("Cannot use deleted val. handle = " + r), U[r].value
                        },
                        z = function(r) {
                            switch (r) {
                                case void 0:
                                    return 1;
                                case null:
                                    return 2;
                                case !0:
                                    return 3;
                                case !1:
                                    return 4;
                                default:
                                    var e = S.length ? S.pop() : U.length;
                                    return U[e] = {
                                        fa: 1,
                                        value: r
                                    }, e
                            }
                        },
                        D = void 0,
                        j = void 0;

                    function x(r) {
                        for (var e = ""; d[r];) e += j[d[r++]];
                        return e
                    }
                    var J = [];

                    function K() {
                        for (; J.length;) {
                            var r = J.pop();
                            r.L.Z = !1, r.delete()
                        }
                    }
                    var q = void 0,
                        $ = {};

                    function rr(r, e) {
                        for (void 0 === e && H("ptr should not be undefined"); r.P;) e = r.aa(e), r = r.P;
                        return e
                    }
                    var er = {};

                    function ar(r) {
                        var e = x(r = ee(r));
                        return ie(r), e
                    }

                    function nr(r, e) {
                        var a = er[r];
                        return void 0 === a && H(e + " has unknown type " + ar(r)), a
                    }

                    function ir() {}
                    var tr = !1;

                    function fr(r) {
                        --r.count.value, 0 === r.count.value && (r.S ? r.T.V(r.S) : r.O.M.V(r.N))
                    }

                    function or(r, e, a) {
                        return e === a ? r : void 0 === a.P || null === (r = or(r, e, a.P)) ? null : a.ma(r)
                    }
                    var cr = {},
                        ur = void 0;

                    function br(r) {
                        throw new ur(r)
                    }

                    function sr(r, e) {
                        return e.O && e.N || br("makeClassHandle requires ptr and ptrType"), !!e.T != !!e.S && br("Both smartPtrType and smartPtr must be specified"), e.count = {
                            value: 1
                        }, kr(Object.create(r, {
                            L: {
                                value: e
                            }
                        }))
                    }

                    function kr(r) {
                        return "undefined" == typeof FinalizationRegistry ? (kr = function(r) {
                            return r
                        }, r) : (tr = new FinalizationRegistry((function(r) {
                            fr(r.L)
                        })), ir = function(r) {
                            tr.unregister(r)
                        }, (kr = function(r) {
                            var e = r.L;
                            return e.S && tr.register(r, {
                                L: e
                            }, r), r
                        })(r))
                    }
                    var Ar = {};

                    function lr(r) {
                        for (; r.length;) {
                            var e = r.pop();
                            r.pop()(e)
                        }
                    }

                    function dr(r) {
                        return this.fromWireType(p[r >> 2])
                    }
                    var hr = {},
                        vr = {};

                    function pr(r, e, a) {
                        function n(e) {
                            (e = a(e)).length !== r.length && br("Mismatched type converter count");
                            for (var n = 0; n < r.length; ++n) mr(r[n], e[n])
                        }
                        r.forEach((function(r) {
                            vr[r] = e
                        }));
                        var i = Array(e.length),
                            t = [],
                            f = 0;
                        e.forEach((function(r, e) {
                            er.hasOwnProperty(r) ? i[e] = er[r] : (t.push(r), hr.hasOwnProperty(r) || (hr[r] = []), hr[r].push((function() {
                                i[e] = er[r], ++f === t.length && n(i)
                            })))
                        })), 0 === t.length && n(i)
                    }

                    function Nr(r) {
                        switch (r) {
                            case 1:
                                return 0;
                            case 2:
                                return 1;
                            case 4:
                                return 2;
                            case 8:
                                return 3;
                            default:
                                throw new TypeError("Unknown type size: " + r)
                        }
                    }

                    function mr(r, e, a) {
                        if (void 0 === a && (a = {}), !("argPackAdvance" in e)) throw new TypeError("registerType registeredInstance requires argPackAdvance");
                        var n = e.name;
                        if (r || H('type "' + n + '" must have a positive integer typeid pointer'), er.hasOwnProperty(r)) {
                            if (a.ta) return;
                            H("Cannot register type '" + n + "' twice")
                        }
                        er[r] = e, delete vr[r], hr.hasOwnProperty(r) && (e = hr[r], delete hr[r], e.forEach((function(r) {
                            return r()
                        })))
                    }

                    function yr(r) {
                        H(r.L.O.M.name + " instance already deleted")
                    }

                    function wr() {}

                    function Er(r, e, a) {
                        if (void 0 === r[e].R) {
                            var n = r[e];
                            r[e] = function() {
                                return r[e].R.hasOwnProperty(arguments.length) || H("Function '" + a + "' called with an invalid number of arguments (" + arguments.length + ") - expects one of (" + r[e].R + ")!"), r[e].R[arguments.length].apply(this, arguments)
                            }, r[e].R = [], r[e].R[n.Y] = n
                        }
                    }

                    function gr(r, e, a, n, i, t, f, o) {
                        this.name = r, this.constructor = e, this.W = a, this.V = n, this.P = i, this.oa = t, this.aa = f, this.ma = o, this.ia = []
                    }

                    function Rr(r, e, a) {
                        for (; e !== a;) e.aa || H("Expected null or instance of " + a.name + ", got an instance of " + e.name), r = e.aa(r), e = e.P;
                        return r
                    }

                    function Gr(r, e) {
                        return null === e ? (this.da && H("null is not a valid " + this.name), 0) : (e.L || H('Cannot pass "' + Lr(e) + '" as a ' + this.name), e.L.N || H("Cannot pass deleted object as a pointer of type " + this.name), Rr(e.L.N, e.L.O.M, this.M))
                    }

                    function Zr(r, e) {
                        if (null === e) {
                            if (this.da && H("null is not a valid " + this.name), this.ca) {
                                var a = this.ea();
                                return null !== r && r.push(this.V, a), a
                            }
                            return 0
                        }
                        if (e.L || H('Cannot pass "' + Lr(e) + '" as a ' + this.name), e.L.N || H("Cannot pass deleted object as a pointer of type " + this.name), !this.ba && e.L.O.ba && H("Cannot convert argument of type " + (e.L.T ? e.L.T.name : e.L.O.name) + " to parameter type " + this.name), a = Rr(e.L.N, e.L.O.M, this.M), this.ca) switch (void 0 === e.L.S && H("Passing raw pointer to smart pointer is illegal"), this.Aa) {
                            case 0:
                                e.L.T === this ? a = e.L.S : H("Cannot convert argument of type " + (e.L.T ? e.L.T.name : e.L.O.name) + " to parameter type " + this.name);
                                break;
                            case 1:
                                a = e.L.S;
                                break;
                            case 2:
                                if (e.L.T === this) a = e.L.S;
                                else {
                                    var n = e.clone();
                                    a = this.wa(a, z((function() {
                                        n.delete()
                                    }))), null !== r && r.push(this.V, a)
                                }
                                break;
                            default:
                                H("Unsupporting sharing policy")
                        }
                        return a
                    }

                    function Wr(r, e) {
                        return null === e ? (this.da && H("null is not a valid " + this.name), 0) : (e.L || H('Cannot pass "' + Lr(e) + '" as a ' + this.name), e.L.N || H("Cannot pass deleted object as a pointer of type " + this.name), e.L.O.ba && H("Cannot convert argument of type " + e.L.O.name + " to parameter type " + this.name), Rr(e.L.N, e.L.O.M, this.M))
                    }

                    function Vr(r, e, a, n) {
                        this.name = r, this.M = e, this.da = a, this.ba = n, this.ca = !1, this.V = this.wa = this.ea = this.ja = this.Aa = this.va = void 0, void 0 !== e.P ? this.toWireType = Zr : (this.toWireType = n ? Gr : Wr, this.U = null)
                    }

                    function Br(r, a) {
                        var n = (r = x(r)).includes("j") ? function(r, a) {
                            var n = [];
                            return function() {
                                if (n.length = 0, Object.assign(n, arguments), r.includes("j")) {
                                    var i = e["dynCall_" + r];
                                    i = n && n.length ? i.apply(null, [a].concat(n)) : i.call(null, a)
                                } else i = G.get(a).apply(null, n);
                                return i
                            }
                        }(r, a) : G.get(a);
                        return "function" != typeof n && H("unknown function pointer with signature " + r + ": " + a), n
                    }
                    var Tr = void 0;

                    function Ir(r, e) {
                        var a = [],
                            n = {};
                        throw e.forEach((function r(e) {
                            n[e] || er[e] || (vr[e] ? vr[e].forEach(r) : (a.push(e), n[e] = !0))
                        })), new Tr(r + ": " + a.map(ar).join([", "]))
                    }

                    function Xr(r, e, a, n, i) {
                        var t = e.length;
                        2 > t && H("argTypes array size mismatch! Must at least get return value and 'this' types!");
                        var f = null !== e[1] && null !== a,
                            o = !1;
                        for (a = 1; a < e.length; ++a)
                            if (null !== e[a] && void 0 === e[a].U) {
                                o = !0;
                                break
                            }
                        var c = "void" !== e[0].name,
                            u = t - 2,
                            b = Array(u),
                            s = [],
                            k = [];
                        return function() {
                            if (arguments.length !== u && H("function " + r + " called with " + arguments.length + " arguments, expected " + u + " args!"), k.length = 0, s.length = f ? 2 : 1, s[0] = i, f) {
                                var a = e[1].toWireType(k, this);
                                s[1] = a
                            }
                            for (var t = 0; t < u; ++t) b[t] = e[t + 2].toWireType(k, arguments[t]), s.push(b[t]);
                            if (t = n.apply(null, s), o) lr(k);
                            else
                                for (var A = f ? 1 : 2; A < e.length; A++) {
                                    var l = 1 === A ? a : b[A - 2];
                                    null !== e[A].U && e[A].U(l)
                                }
                            return c ? e[0].fromWireType(t) : void 0
                        }
                    }

                    function Or(r, e) {
                        for (var a = [], n = 0; n < r; n++) a.push(N[e + 4 * n >> 2]);
                        return a
                    }

                    function _r(r) {
                        4 < r && 0 == --U[r].fa && (U[r] = void 0, S.push(r))
                    }

                    function Lr(r) {
                        if (null === r) return "null";
                        var e = typeof r;
                        return "object" === e || "array" === e || "function" === e ? r.toString() : "" + r
                    }

                    function Fr(r, e) {
                        switch (e) {
                            case 2:
                                return function(r) {
                                    return this.fromWireType(m[r >> 2])
                                };
                            case 3:
                                return function(r) {
                                    return this.fromWireType(y[r >> 3])
                                };
                            default:
                                throw new TypeError("Unknown float type: " + r)
                        }
                    }

                    function Cr(r, e, a) {
                        switch (e) {
                            case 0:
                                return a ? function(r) {
                                    return l[r]
                                } : function(r) {
                                    return d[r]
                                };
                            case 1:
                                return a ? function(r) {
                                    return h[r >> 1]
                                } : function(r) {
                                    return v[r >> 1]
                                };
                            case 2:
                                return a ? function(r) {
                                    return p[r >> 2]
                                } : function(r) {
                                    return N[r >> 2]
                                };
                            default:
                                throw new TypeError("Unknown integer type: " + r)
                        }
                    }

                    function Pr(r, e) {
                        for (var a = "", n = 0; !(n >= e / 2); ++n) {
                            var i = h[r + 2 * n >> 1];
                            if (0 == i) break;
                            a += String.fromCharCode(i)
                        }
                        return a
                    }

                    function Ur(r, e, a) {
                        if (void 0 === a && (a = 2147483647), 2 > a) return 0;
                        var n = e;
                        a = (a -= 2) < 2 * r.length ? a / 2 : r.length;
                        for (var i = 0; i < a; ++i) h[e >> 1] = r.charCodeAt(i), e += 2;
                        return h[e >> 1] = 0, e - n
                    }

                    function Sr(r) {
                        return 2 * r.length
                    }

                    function Yr(r, e) {
                        for (var a = 0, n = ""; !(a >= e / 4);) {
                            var i = p[r + 4 * a >> 2];
                            if (0 == i) break;
                            ++a, 65536 <= i ? (i -= 65536, n += String.fromCharCode(55296 | i >> 10, 56320 | 1023 & i)) : n += String.fromCharCode(i)
                        }
                        return n
                    }

                    function Mr(r, e, a) {
                        if (void 0 === a && (a = 2147483647), 4 > a) return 0;
                        var n = e;
                        a = n + a - 4;
                        for (var i = 0; i < r.length; ++i) {
                            var t = r.charCodeAt(i);
                            if (55296 <= t && 57343 >= t && (t = 65536 + ((1023 & t) << 10) | 1023 & r.charCodeAt(++i)), p[e >> 2] = t, (e += 4) + 4 > a) break
                        }
                        return p[e >> 2] = 0, e - n
                    }

                    function Hr(r) {
                        for (var e = 0, a = 0; a < r.length; ++a) {
                            var n = r.charCodeAt(a);
                            55296 <= n && 57343 >= n && ++a, e += 4
                        }
                        return e
                    }
                    var Qr = {};

                    function zr(r) {
                        var e = Qr[r];
                        return void 0 === e ? x(r) : e
                    }
                    var Dr = [],
                        jr = [],
                        xr = [null, [],
                            []
                        ];
                    M = e.BindingError = Y("BindingError"), e.count_emval_handles = function() {
                        for (var r = 0, e = 5; e < U.length; ++e) void 0 !== U[e] && ++r;
                        return r
                    }, e.get_first_emval = function() {
                        for (var r = 5; r < U.length; ++r)
                            if (void 0 !== U[r]) return U[r];
                        return null
                    }, D = e.PureVirtualError = Y("PureVirtualError");
                    for (var Jr = Array(256), Kr = 0; 256 > Kr; ++Kr) Jr[Kr] = String.fromCharCode(Kr);
                    j = Jr, e.getInheritedInstanceCount = function() {
                        return Object.keys($).length
                    }, e.getLiveInheritedInstances = function() {
                        var r, e = [];
                        for (r in $) $.hasOwnProperty(r) && e.push($[r]);
                        return e
                    }, e.flushPendingDeletes = K, e.setDelayFunction = function(r) {
                        q = r, J.length && q && q(K)
                    }, ur = e.InternalError = Y("InternalError"), wr.prototype.isAliasOf = function(r) {
                        if (!(this instanceof wr && r instanceof wr)) return !1;
                        var e = this.L.O.M,
                            a = this.L.N,
                            n = r.L.O.M;
                        for (r = r.L.N; e.P;) a = e.aa(a), e = e.P;
                        for (; n.P;) r = n.aa(r), n = n.P;
                        return e === n && a === r
                    }, wr.prototype.clone = function() {
                        if (this.L.N || yr(this), this.L.$) return this.L.count.value += 1, this;
                        var r = kr,
                            e = Object,
                            a = e.create,
                            n = Object.getPrototypeOf(this),
                            i = this.L;
                        return (r = r(a.call(e, n, {
                            L: {
                                value: {
                                    count: i.count,
                                    Z: i.Z,
                                    $: i.$,
                                    N: i.N,
                                    O: i.O,
                                    S: i.S,
                                    T: i.T
                                }
                            }
                        }))).L.count.value += 1, r.L.Z = !1, r
                    }, wr.prototype.delete = function() {
                        this.L.N || yr(this), this.L.Z && !this.L.$ && H("Object already scheduled for deletion"), ir(this), fr(this.L), this.L.$ || (this.L.S = void 0, this.L.N = void 0)
                    }, wr.prototype.isDeleted = function() {
                        return !this.L.N
                    }, wr.prototype.deleteLater = function() {
                        return this.L.N || yr(this), this.L.Z && !this.L.$ && H("Object already scheduled for deletion"), J.push(this), 1 === J.length && q && q(K), this.L.Z = !0, this
                    }, Vr.prototype.pa = function(r) {
                        return this.ja && (r = this.ja(r)), r
                    }, Vr.prototype.ga = function(r) {
                        this.V && this.V(r)
                    }, Vr.prototype.argPackAdvance = 8, Vr.prototype.readValueFromPointer = dr, Vr.prototype.deleteObject = function(r) {
                        null !== r && r.delete()
                    }, Vr.prototype.fromWireType = function(r) {
                        function e() {
                            return this.ca ? sr(this.M.W, {
                                O: this.va,
                                N: a,
                                T: this,
                                S: r
                            }) : sr(this.M.W, {
                                O: this,
                                N: r
                            })
                        }
                        var a = this.pa(r);
                        if (!a) return this.ga(r), null;
                        var n = function(r, e) {
                            return e = rr(r, e), $[e]
                        }(this.M, a);
                        if (void 0 !== n) return 0 === n.L.count.value ? (n.L.N = a, n.L.S = r, n.clone()) : (n = n.clone(), this.ga(r), n);
                        if (n = this.M.oa(a), !(n = cr[n])) return e.call(this);
                        n = this.ba ? n.ka : n.pointerType;
                        var i = or(a, this.M, n.M);
                        return null === i ? e.call(this) : this.ca ? sr(n.M.W, {
                            O: n,
                            N: i,
                            T: this,
                            S: r
                        }) : sr(n.M.W, {
                            O: n,
                            N: i
                        })
                    }, Tr = e.UnboundTypeError = Y("UnboundTypeError");
                    var qr = "function" == typeof atob ? atob : function(r) {
                            var e = "",
                                a = 0;
                            r = r.replace(/[^A-Za-z0-9\+\/=]/g, "");
                            do {
                                var n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(r.charAt(a++)),
                                    i = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(r.charAt(a++)),
                                    t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(r.charAt(a++)),
                                    f = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(r.charAt(a++));
                                n = n << 2 | i >> 4, i = (15 & i) << 4 | t >> 2;
                                var o = (3 & t) << 6 | f;
                                e += String.fromCharCode(n), 64 !== t && (e += String.fromCharCode(i)), 64 !== f && (e += String.fromCharCode(o))
                            } while (a < r.length);
                            return e
                        },
                        $r = {
                            q: function(r, e, a) {
                                r = x(r), e = nr(e, "wrapper"), a = Q(a);
                                var n = [].slice,
                                    i = e.M,
                                    t = i.W,
                                    f = i.P.W,
                                    o = i.P.constructor;
                                for (var c in r = P(r, (function() {
                                        i.P.ia.forEach(function(r) {
                                            if (this[r] === f[r]) throw new D("Pure virtual function " + r + " must be implemented in JavaScript")
                                        }.bind(this)), Object.defineProperty(this, "__parent", {
                                            value: t
                                        }), this.__construct.apply(this, n.call(arguments))
                                    })), t.__construct = function() {
                                        this === t && H("Pass correct 'this' to __construct");
                                        var r = o.implement.apply(void 0, [this].concat(n.call(arguments)));
                                        ir(r);
                                        var e = r.L;
                                        r.notifyOnDestruction(), e.$ = !0, Object.defineProperties(this, {
                                            L: {
                                                value: e
                                            }
                                        }), kr(this), r = e.N, r = rr(i, r), $.hasOwnProperty(r) ? H("Tried to register registered instance: " + r) : $[r] = this
                                    }, t.__destruct = function() {
                                        this === t && H("Pass correct 'this' to __destruct"), ir(this);
                                        var r = this.L.N;
                                        r = rr(i, r), $.hasOwnProperty(r) ? delete $[r] : H("Tried to unregister unregistered instance: " + r)
                                    }, r.prototype = Object.create(t), a) r.prototype[c] = a[c];
                                return z(r)
                            },
                            k: function(r) {
                                var e = Ar[r];
                                delete Ar[r];
                                var a = e.ea,
                                    n = e.V,
                                    i = e.ha;
                                pr([r], i.map((function(r) {
                                    return r.sa
                                })).concat(i.map((function(r) {
                                    return r.ya
                                }))), (function(r) {
                                    var t = {};
                                    return i.forEach((function(e, a) {
                                        var n = r[a],
                                            f = e.qa,
                                            o = e.ra,
                                            c = r[a + i.length],
                                            u = e.xa,
                                            b = e.za;
                                        t[e.na] = {
                                            read: function(r) {
                                                return n.fromWireType(f(o, r))
                                            },
                                            write: function(r, e) {
                                                var a = [];
                                                u(b, r, c.toWireType(a, e)), lr(a)
                                            }
                                        }
                                    })), [{
                                        name: e.name,
                                        fromWireType: function(r) {
                                            var e, a = {};
                                            for (e in t) a[e] = t[e].read(r);
                                            return n(r), a
                                        },
                                        toWireType: function(r, e) {
                                            for (var i in t)
                                                if (!(i in e)) throw new TypeError('Missing field:  "' + i + '"');
                                            var f = a();
                                            for (i in t) t[i].write(f, e[i]);
                                            return null !== r && r.push(n, f), f
                                        },
                                        argPackAdvance: 8,
                                        readValueFromPointer: dr,
                                        U: n
                                    }]
                                }))
                            },
                            w: function() {},
                            C: function(r, e, a, n, i) {
                                var t = Nr(a);
                                mr(r, {
                                    name: e = x(e),
                                    fromWireType: function(r) {
                                        return !!r
                                    },
                                    toWireType: function(r, e) {
                                        return e ? n : i
                                    },
                                    argPackAdvance: 8,
                                    readValueFromPointer: function(r) {
                                        if (1 === a) var n = l;
                                        else if (2 === a) n = h;
                                        else {
                                            if (4 !== a) throw new TypeError("Unknown boolean type size: " + e);
                                            n = p
                                        }
                                        return this.fromWireType(n[r >> t])
                                    },
                                    U: null
                                })
                            },
                            f: function(r, a, n, i, t, f, o, c, u, b, s, k, A) {
                                s = x(s), f = Br(t, f), c && (c = Br(o, c)), b && (b = Br(u, b)), A = Br(k, A);
                                var l = C(s);
                                ! function(r, a) {
                                    e.hasOwnProperty(r) ? (H("Cannot register public name '" + r + "' twice"), Er(e, r, r), e.hasOwnProperty(void 0) && H("Cannot register multiple overloads of a function with the same number of arguments (undefined)!"), e[r].R[void 0] = a) : e[r] = a
                                }(l, (function() {
                                    Ir("Cannot construct " + s + " due to unbound types", [i])
                                })), pr([r, a, n], i ? [i] : [], (function(a) {
                                    if (a = a[0], i) var n = a.M,
                                        t = n.W;
                                    else t = wr.prototype;
                                    a = P(l, (function() {
                                        if (Object.getPrototypeOf(this) !== o) throw new M("Use 'new' to construct " + s);
                                        if (void 0 === u.X) throw new M(s + " has no accessible constructor");
                                        var r = u.X[arguments.length];
                                        if (void 0 === r) throw new M("Tried to invoke ctor of " + s + " with invalid number of parameters (" + arguments.length + ") - expected (" + Object.keys(u.X).toString() + ") parameters instead!");
                                        return r.apply(this, arguments)
                                    }));
                                    var o = Object.create(t, {
                                        constructor: {
                                            value: a
                                        }
                                    });
                                    a.prototype = o;
                                    var u = new gr(s, a, o, A, n, f, c, b);
                                    n = new Vr(s, u, !0, !1), t = new Vr(s + "*", u, !1, !1);
                                    var k = new Vr(s + " const*", u, !1, !0);
                                    return cr[r] = {
                                            pointerType: t,
                                            ka: k
                                        },
                                        function(r, a) {
                                            e.hasOwnProperty(r) || br("Replacing nonexistant public symbol"), e[r] = a, e[r].Y = void 0
                                        }(l, a), [n, t, k]
                                }))
                            },
                            d: function(r, e, a, n, i, t, f) {
                                var o = Or(a, n);
                                e = x(e), t = Br(i, t), pr([], [r], (function(r) {
                                    function n() {
                                        Ir("Cannot call " + i + " due to unbound types", o)
                                    }
                                    var i = (r = r[0]).name + "." + e;
                                    e.startsWith("@@") && (e = Symbol[e.substring(2)]);
                                    var c = r.M.constructor;
                                    return void 0 === c[e] ? (n.Y = a - 1, c[e] = n) : (Er(c, e, i), c[e].R[a - 1] = n), pr([], o, (function(r) {
                                        return r = Xr(i, [r[0], null].concat(r.slice(1)), null, t, f), void 0 === c[e].R ? (r.Y = a - 1, c[e] = r) : c[e].R[a - 1] = r, []
                                    })), []
                                }))
                            },
                            p: function(r, e, a, n, i, t) {
                                0 < e || O();
                                var f = Or(e, a);
                                i = Br(n, i), pr([], [r], (function(r) {
                                    var a = "constructor " + (r = r[0]).name;
                                    if (void 0 === r.M.X && (r.M.X = []), void 0 !== r.M.X[e - 1]) throw new M("Cannot register multiple constructors with identical number of parameters (" + (e - 1) + ") for class '" + r.name + "'! Overload resolution is currently only performed using the parameter count, not actual type info!");
                                    return r.M.X[e - 1] = function() {
                                        Ir("Cannot construct " + r.name + " due to unbound types", f)
                                    }, pr([], f, (function(n) {
                                        return n.splice(1, 0, null), r.M.X[e - 1] = Xr(a, n, null, i, t), []
                                    })), []
                                }))
                            },
                            b: function(r, e, a, n, i, t, f, o) {
                                var c = Or(a, n);
                                e = x(e), t = Br(i, t), pr([], [r], (function(r) {
                                    function n() {
                                        Ir("Cannot call " + i + " due to unbound types", c)
                                    }
                                    var i = (r = r[0]).name + "." + e;
                                    e.startsWith("@@") && (e = Symbol[e.substring(2)]), o && r.M.ia.push(e);
                                    var u = r.M.W,
                                        b = u[e];
                                    return void 0 === b || void 0 === b.R && b.className !== r.name && b.Y === a - 2 ? (n.Y = a - 2, n.className = r.name, u[e] = n) : (Er(u, e, i), u[e].R[a - 2] = n), pr([], c, (function(n) {
                                        return n = Xr(i, n, r, t, f), void 0 === u[e].R ? (n.Y = a - 2, u[e] = n) : u[e].R[a - 2] = n, []
                                    })), []
                                }))
                            },
                            B: function(r, e) {
                                mr(r, {
                                    name: e = x(e),
                                    fromWireType: function(r) {
                                        var e = Q(r);
                                        return _r(r), e
                                    },
                                    toWireType: function(r, e) {
                                        return z(e)
                                    },
                                    argPackAdvance: 8,
                                    readValueFromPointer: dr,
                                    U: null
                                })
                            },
                            n: function(r, e, a) {
                                a = Nr(a), mr(r, {
                                    name: e = x(e),
                                    fromWireType: function(r) {
                                        return r
                                    },
                                    toWireType: function(r, e) {
                                        return e
                                    },
                                    argPackAdvance: 8,
                                    readValueFromPointer: Fr(e, a),
                                    U: null
                                })
                            },
                            e: function(r, e, a, n, i) {
                                e = x(e), -1 === i && (i = 4294967295), i = Nr(a);
                                var t = function(r) {
                                    return r
                                };
                                if (0 === n) {
                                    var f = 32 - 8 * a;
                                    t = function(r) {
                                        return r << f >>> f
                                    }
                                }
                                a = e.includes("unsigned") ? function(r, e) {
                                    return e >>> 0
                                } : function(r, e) {
                                    return e
                                }, mr(r, {
                                    name: e,
                                    fromWireType: t,
                                    toWireType: a,
                                    argPackAdvance: 8,
                                    readValueFromPointer: Cr(e, i, 0 !== n),
                                    U: null
                                })
                            },
                            c: function(r, e, a) {
                                function n(r) {
                                    r >>= 2;
                                    var e = N;
                                    return new i(e.buffer, e[r + 1], e[r])
                                }
                                var i = [Int8Array, Uint8Array, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array, Float64Array][e];
                                mr(r, {
                                    name: a = x(a),
                                    fromWireType: n,
                                    argPackAdvance: 8,
                                    readValueFromPointer: n
                                }, {
                                    ta: !0
                                })
                            },
                            o: function(r, e) {
                                var a = "std::string" === (e = x(e));
                                mr(r, {
                                    name: e,
                                    fromWireType: function(r) {
                                        var e = N[r >> 2],
                                            n = r + 4;
                                        if (a)
                                            for (var i = n, t = 0; t <= e; ++t) {
                                                var f = n + t;
                                                if (t == e || 0 == d[f]) {
                                                    if (i = i ? E(d, i, f - i) : "", void 0 === o) var o = i;
                                                    else o += String.fromCharCode(0), o += i;
                                                    i = f + 1
                                                }
                                            } else {
                                                for (o = Array(e), t = 0; t < e; ++t) o[t] = String.fromCharCode(d[n + t]);
                                                o = o.join("")
                                            }
                                        return ie(r), o
                                    },
                                    toWireType: function(r, e) {
                                        e instanceof ArrayBuffer && (e = new Uint8Array(e));
                                        var n, i = "string" == typeof e;
                                        if (i || e instanceof Uint8Array || e instanceof Uint8ClampedArray || e instanceof Int8Array || H("Cannot pass non-string to std::string"), a && i) {
                                            var t = 0;
                                            for (n = 0; n < e.length; ++n) {
                                                var f = e.charCodeAt(n);
                                                127 >= f ? t++ : 2047 >= f ? t += 2 : 55296 <= f && 57343 >= f ? (t += 4, ++n) : t += 3
                                            }
                                            n = t
                                        } else n = e.length;
                                        if (f = (t = ne(4 + n + 1)) + 4, N[t >> 2] = n, a && i) {
                                            if (i = f, f = n + 1, n = d, 0 < f) {
                                                f = i + f - 1;
                                                for (var o = 0; o < e.length; ++o) {
                                                    var c = e.charCodeAt(o);
                                                    if (55296 <= c && 57343 >= c && (c = 65536 + ((1023 & c) << 10) | 1023 & e.charCodeAt(++o)), 127 >= c) {
                                                        if (i >= f) break;
                                                        n[i++] = c
                                                    } else {
                                                        if (2047 >= c) {
                                                            if (i + 1 >= f) break;
                                                            n[i++] = 192 | c >> 6
                                                        } else {
                                                            if (65535 >= c) {
                                                                if (i + 2 >= f) break;
                                                                n[i++] = 224 | c >> 12
                                                            } else {
                                                                if (i + 3 >= f) break;
                                                                n[i++] = 240 | c >> 18, n[i++] = 128 | c >> 12 & 63
                                                            }
                                                            n[i++] = 128 | c >> 6 & 63
                                                        }
                                                        n[i++] = 128 | 63 & c
                                                    }
                                                }
                                                n[i] = 0
                                            }
                                        } else if (i)
                                            for (i = 0; i < n; ++i) 255 < (o = e.charCodeAt(i)) && (ie(f), H("String has UTF-16 code units that do not fit in 8 bits")), d[f + i] = o;
                                        else
                                            for (i = 0; i < n; ++i) d[f + i] = e[i];
                                        return null !== r && r.push(ie, t), t
                                    },
                                    argPackAdvance: 8,
                                    readValueFromPointer: dr,
                                    U: function(r) {
                                        ie(r)
                                    }
                                })
                            },
                            j: function(r, e, a) {
                                if (a = x(a), 2 === e) var n = Pr,
                                    i = Ur,
                                    t = Sr,
                                    f = function() {
                                        return v
                                    },
                                    o = 1;
                                else 4 === e && (n = Yr, i = Mr, t = Hr, f = function() {
                                    return N
                                }, o = 2);
                                mr(r, {
                                    name: a,
                                    fromWireType: function(r) {
                                        for (var a, i = N[r >> 2], t = f(), c = r + 4, u = 0; u <= i; ++u) {
                                            var b = r + 4 + u * e;
                                            u != i && 0 != t[b >> o] || (c = n(c, b - c), void 0 === a ? a = c : (a += String.fromCharCode(0), a += c), c = b + e)
                                        }
                                        return ie(r), a
                                    },
                                    toWireType: function(r, n) {
                                        "string" != typeof n && H("Cannot pass non-string to C++ string type " + a);
                                        var f = t(n),
                                            c = ne(4 + f + e);
                                        return N[c >> 2] = f >> o, i(n, c + 4, f + e), null !== r && r.push(ie, c), c
                                    },
                                    argPackAdvance: 8,
                                    readValueFromPointer: dr,
                                    U: function(r) {
                                        ie(r)
                                    }
                                })
                            },
                            l: function(r, e, a, n, i, t) {
                                Ar[r] = {
                                    name: x(e),
                                    ea: Br(a, n),
                                    V: Br(i, t),
                                    ha: []
                                }
                            },
                            i: function(r, e, a, n, i, t, f, o, c, u) {
                                Ar[r].ha.push({
                                    na: x(e),
                                    sa: a,
                                    qa: Br(n, i),
                                    ra: t,
                                    ya: f,
                                    xa: Br(o, c),
                                    za: u
                                })
                            },
                            D: function(r, e) {
                                mr(r, {
                                    ua: !0,
                                    name: e = x(e),
                                    argPackAdvance: 0,
                                    fromWireType: function() {},
                                    toWireType: function() {}
                                })
                            },
                            t: function(r, e, a, n, i) {
                                r = Dr[r], e = Q(e), a = zr(a);
                                var t = [];
                                return N[n >> 2] = z(t), r(e, a, t, i)
                            },
                            u: function(r, e, a, n) {
                                (r = Dr[r])(e = Q(e), a = zr(a), null, n)
                            },
                            h: _r,
                            m: function(r, e) {
                                var a = function(r, e) {
                                        for (var a = Array(r), n = 0; n < r; ++n) a[n] = nr(N[e + 4 * n >> 2], "parameter " + n);
                                        return a
                                    }(r, e),
                                    n = a[0];
                                e = n.name + "_$" + a.slice(1).map((function(r) {
                                    return r.name
                                })).join("_") + "$";
                                var i = jr[e];
                                if (void 0 !== i) return i;
                                var t = Array(r - 1);
                                return i = function(r) {
                                    var e = Dr.length;
                                    return Dr.push(r), e
                                }((function(e, i, f, o) {
                                    for (var c = 0, u = 0; u < r - 1; ++u) t[u] = a[u + 1].readValueFromPointer(o + c), c += a[u + 1].argPackAdvance;
                                    for (e = e[i].apply(e, t), u = 0; u < r - 1; ++u) a[u + 1].la && a[u + 1].la(t[u]);
                                    if (!n.ua) return n.toWireType(f, e)
                                })), jr[e] = i
                            },
                            r: function(r) {
                                4 < r && (U[r].fa += 1)
                            },
                            s: function(r) {
                                lr(Q(r)), _r(r)
                            },
                            g: function() {
                                O("")
                            },
                            y: function(r, e, a) {
                                d.copyWithin(r, e, e + a)
                            },
                            x: function(r) {
                                var e = d.length;
                                if (2147483648 < (r >>>= 0)) return !1;
                                for (var a = 1; 4 >= a; a *= 2) {
                                    var n = e * (1 + .2 / a);
                                    n = Math.min(n, r + 100663296);
                                    var i = Math,
                                        t = i.min;
                                    n = Math.max(r, n), n += (65536 - n % 65536) % 65536;
                                    r: {
                                        var f = A.buffer;
                                        try {
                                            A.grow(t.call(i, 2147483648, n) - f.byteLength + 65535 >>> 16), g();
                                            var o = 1;
                                            break r
                                        } catch (r) {}
                                        o = void 0
                                    }
                                    if (o) return !0
                                }
                                return !1
                            },
                            A: function() {
                                return 52
                            },
                            v: function() {
                                return 70
                            },
                            z: function(r, e, a, n) {
                                for (var i = 0, t = 0; t < a; t++) {
                                    var f = N[e >> 2],
                                        o = N[e + 4 >> 2];
                                    e += 8;
                                    for (var b = 0; b < o; b++) {
                                        var s = d[f + b],
                                            k = xr[r];
                                        0 === s || 10 === s ? ((1 === r ? c : u)(E(k, 0)), k.length = 0) : k.push(s)
                                    }
                                    i += o
                                }
                                return N[n >> 2] = i, 0
                            },
                            a: A
                        },
                        re = function() {
                            function r(r) {
                                e.asm = r.exports, G = e.asm.I, W.unshift(e.asm.E), I--, e.monitorRunDependencies && e.monitorRunDependencies(I), 0 == I && X && (r = X, X = null, r())
                            }
                            var a = {
                                a: $r
                            };
                            if (I++, e.monitorRunDependencies && e.monitorRunDependencies(I), e.instantiateWasm) try {
                                return e.instantiateWasm(a, r)
                            } catch (r) {
                                u("Module.instantiateWasm callback failed with error: " + r), i(r)
                            }
                            return a = function(r) {
                                var e = T;
                                try {
                                    try {
                                        if (e == T && o) new Uint8Array(o);
                                        else {
                                            if (_(e)) {
                                                try {
                                                    var a = qr(e.slice(37)),
                                                        n = new Uint8Array(a.length);
                                                    for (e = 0; e < a.length; ++e) n[e] = a.charCodeAt(e);
                                                    var i = n
                                                } catch (r) {
                                                    throw Error("Converting base64 string to bytes failed.")
                                                }
                                                var t = i
                                            } else t = void 0;
                                            if (!t) throw "sync fetching of the wasm failed: you can preload it to Module['wasmBinary'] manually, or emcc.py will do that for you when generating HTML (but not JS)"
                                        }
                                    } catch (r) {
                                        O(r)
                                    }
                                    var f = new b,
                                        c = new s(r)
                                } catch (e) {
                                    throw r = e.toString(), u("failed to compile wasm module: " + r), (r.includes("imported Memory") || r.includes("memory import")) && u("Memory size incompatibility issues may be due to changing INITIAL_MEMORY at runtime to something too large. Use ALLOW_MEMORY_GROWTH to allow any size memory (and also make sure not to set INITIAL_MEMORY at runtime to something smaller than it was at compile time)."), e
                                }
                                return [c, f]
                            }(a), r(a[0]), e.asm
                        }(),
                        ee = e.___getTypeName = re.F;
                    e.__embind_initialize_bindings = re.G;
                    var ae, ne = re.H,
                        ie = re.J;

                    function te() {
                        function r() {
                            if (!ae && (ae = !0, e.calledRun = !0, !w)) {
                                if (F(W), a(e), e.onRuntimeInitialized && e.onRuntimeInitialized(), e.postRun)
                                    for ("function" == typeof e.postRun && (e.postRun = [e.postRun]); e.postRun.length;) {
                                        var r = e.postRun.shift();
                                        V.unshift(r)
                                    }
                                F(V)
                            }
                        }
                        if (!(0 < I)) {
                            if (e.preRun)
                                for ("function" == typeof e.preRun && (e.preRun = [e.preRun]); e.preRun.length;) B();
                            F(Z), 0 < I || (e.setStatus ? (e.setStatus("Running..."), setTimeout((function() {
                                setTimeout((function() {
                                    e.setStatus("")
                                }), 1), r()
                            }), 1)) : r())
                        }
                    }
                    if (e.dynCall_jiji = re.K, X = function r() {
                            ae || te(), ae || (X = r)
                        }, e.preInit)
                        for ("function" == typeof e.preInit && (e.preInit = [e.preInit]); 0 < e.preInit.length;) e.preInit.pop()();
                    return te(), r
                });
            var c = function(r) {
                function e(r, e, a) {
                    var n = r[e];
                    r[e] = function() {
                        for (var r = arguments.length, e = new Array(r), i = 0; i < r; i++) e[i] = arguments[i];
                        return a.call.apply(a, [this, n].concat(e))
                    }
                }
                for (var a = function() {
                        var a, i = t[n],
                            o = ((a = {})[f.UNIT_POINT] = r.Node.prototype[i], a[f.UNIT_PERCENT] = r.Node.prototype[i + "Percent"], a[f.UNIT_AUTO] = r.Node.prototype[i + "Auto"], a);
                        e(r.Node.prototype, i, (function(r) {
                            for (var e, a, n = arguments.length, t = new Array(n > 1 ? n - 1 : 0), c = 1; c < n; c++) t[c - 1] = arguments[c];
                            var u, b, s = t.pop();
                            if ("auto" === s) u = f.UNIT_AUTO, b = void 0;
                            else if ("object" == typeof s) u = s.unit, b = s.valueOf();
                            else if (u = "string" == typeof s && s.endsWith("%") ? f.UNIT_PERCENT : f.UNIT_POINT, b = parseFloat(s), !Number.isNaN(s) && Number.isNaN(b)) throw new Error("Invalid value " + s + " for " + i);
                            if (!o[u]) throw new Error('Failed to execute "' + i + "\": Unsupported unit '" + s + "'");
                            return void 0 !== b ? (e = o[u]).call.apply(e, [this].concat(t, [b])) : (a = o[u]).call.apply(a, [this].concat(t))
                        }))
                    }, n = 0, t = ["setPosition", "setMargin", "setFlexBasis", "setWidth", "setHeight", "setMinWidth", "setMinHeight", "setMaxWidth", "setMaxHeight", "setPadding"]; n < t.length; n++) a();
                return e(r.Node.prototype, "setMeasureFunc", (function(e, a) {
                    return a ? e.call(this, (n = a, r.MeasureCallback.implement({
                        measure: function() {
                            var r = n.apply(void 0, arguments),
                                e = r.width,
                                a = r.height;
                            return {
                                width: null != e ? e : NaN,
                                height: null != a ? a : NaN
                            }
                        }
                    }))) : this.unsetMeasureFunc();
                    var n
                })), e(r.Node.prototype, "setDirtiedFunc", (function(e, a) {
                    var n;
                    e.call(this, (n = a, r.DirtiedCallback.implement({
                        dirtied: n
                    })))
                })), e(r.Config.prototype, "free", (function() {
                    r.Config.destroy(this)
                })), e(r.Node, "create", (function(e, a) {
                    return a ? r.Node.createWithConfig(a) : r.Node.createDefault()
                })), e(r.Node.prototype, "free", (function() {
                    r.Node.destroy(this)
                })), e(r.Node.prototype, "freeRecursive", (function() {
                    for (var r = 0, e = this.getChildCount(); r < e; ++r) this.getChild(0).freeRecursive();
                    this.free()
                })), e(r.Node.prototype, "calculateLayout", (function(r, e, a, n) {
                    return void 0 === e && (e = NaN), void 0 === a && (a = NaN), void 0 === n && (n = f.DIRECTION_LTR), r.call(this, e, a, n)
                })), (0, i.Z)({
                    Config: r.Config,
                    Node: r.Node
                }, f)
            }(o())
        }
    }
]);