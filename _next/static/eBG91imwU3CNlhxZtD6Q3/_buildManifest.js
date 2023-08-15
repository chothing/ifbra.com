self.__BUILD_MANIFEST = function(s, c, a, e, t, i, n, o) {
    return {
        __rewrites: {
            beforeFiles: [],
            afterFiles: [{
                source: "/robots.txt",
                destination: "/api/robots"
            }, {
                source: "/sitemap",
                destination: "/api/sitemap"
            }],
            fallback: []
        },
        "/404": ["static/chunks/pages/404-69c6d3452eb26ce3.js"],
        "/_error": ["static/chunks/pages/_error-ef373ae42086a363.js"],
        "/blog": [s, c, a, e, t, n, i, o, "static/chunks/pages/blog-80f0f7a74efbc103.js"],
        "/blog/[slug]": [s, c, a, e, t, n, i, o, "static/chunks/pages/blog/[slug]-feaa4e8b2e769580.js"],
        "/checkout/[...idInvoice]": [s, c, a, e, t, n, "static/chunks/6713-41ec996c8d390a4f.js", i, "static/chunks/pages/checkout/[...idInvoice]-c4c00767d2762e17.js"],
        "/contact-form": [s, c, a, e, t, "static/chunks/5644-7c01b54a678bbc3c.js", "static/chunks/2693-c3c6ede6aee7fd60.js", "static/chunks/6880-ff0576f0938760c0.js", "static/css/7ac8cb26da507440.css", "static/chunks/764-0993b9400850a3f7.js", i, "static/chunks/2674-4655fe77a1bdfbb8.js", "static/chunks/pages/contact-form-6ca5eaae4c74a472.js"],
        "/error/404": [s, c, a, e, t, "static/chunks/1664-2b4d2108008cb0cb.js", i, "static/chunks/pages/error/404-1a2288c0b1648b4b.js"],
        "/error/500": [s, c, a, e, t, "static/chunks/5063-6a5ab0f6659bedfe.js", i, "static/chunks/pages/error/500-11eaff5449c0c652.js"],
        "/invoice/print/[idInvoice]": [s, c, a, e, t, "static/chunks/8364-764843f635c47cfd.js", i, "static/chunks/pages/invoice/print/[idInvoice]-adc0e6fcbb1e9f42.js"],
        "/invoice/[idInvoice]": [s, c, a, e, t, n, i, "static/chunks/pages/invoice/[idInvoice]-a9bcd03af88059de.js"],
        "/[[...slug]]": [s, c, a, e, t, i, "static/chunks/pages/[[...slug]]-741d216492d5b11c.js"],
        sortedPages: ["/404", "/_app", "/_error", "/blog", "/blog/[slug]", "/checkout/[...idInvoice]", "/contact-form", "/error/404", "/error/500", "/invoice/print/[idInvoice]", "/invoice/[idInvoice]", "/[[...slug]]"]
    }
}("static/chunks/c9184924-bf6c7b99d23ea14d.js", "static/chunks/228771e0-1847fb34b4287f6e.js", "static/chunks/65291039-051d022aac3405c9.js", "static/chunks/1b8dab7b-93296b38f5f2d428.js", "static/chunks/6315-9260fcdfc1e0e38a.js", "static/chunks/8692-1c95e50db12d2d96.js", "static/chunks/5675-1f12e06df55f2efe.js", "static/chunks/2448-6f9fd86b7cf90c0e.js"), self.__BUILD_MANIFEST_CB && self.__BUILD_MANIFEST_CB();