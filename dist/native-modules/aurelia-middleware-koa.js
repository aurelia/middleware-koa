import { render } from 'aurelia-ssr-engine';
export var aureliaKoaMiddleware = function (renderOptions, initializationOptions) {
    return function (ctx, next) {
        var url = ctx.request.URL;
        var pathname = url.pathname;
        // skip requests where urls have an extension
        var extensionMatcher = /^.*\.[^\\]+$/;
        if (pathname.match(extensionMatcher)) {
            return next();
        }
        return render(Object.assign({ url: url }, renderOptions), initializationOptions)
            .then(function (html) {
            ctx.body = html;
        })
            .catch(function (e) {
            ctx.body = "<html><body>Failed to render " + pathname + "</body></html>";
            console.log("Failed to render " + pathname);
            console.log(e);
        });
    };
};
