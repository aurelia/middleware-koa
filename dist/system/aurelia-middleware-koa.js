System.register(["aurelia-ssr-engine"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var aurelia_ssr_engine_1, aureliaKoaMiddleware;
    return {
        setters: [
            function (aurelia_ssr_engine_1_1) {
                aurelia_ssr_engine_1 = aurelia_ssr_engine_1_1;
            }
        ],
        execute: function () {
            exports_1("aureliaKoaMiddleware", aureliaKoaMiddleware = function (renderOptions, initializationOptions) {
                return function (ctx, next) {
                    var url = ctx.request.URL;
                    var pathname = url.pathname;
                    // skip requests where urls have an extension
                    var extensionMatcher = /^.*\.[^\\]+$/;
                    if (pathname.match(extensionMatcher)) {
                        return next();
                    }
                    return aurelia_ssr_engine_1.render(Object.assign({ url: url }, renderOptions), initializationOptions)
                        .then(function (html) {
                        ctx.body = html;
                    })
                        .catch(function (e) {
                        ctx.body = "<html><body>Failed to render " + pathname + "</body></html>";
                        console.log("Failed to render " + pathname);
                        console.log(e);
                    });
                };
            });
        }
    };
});
