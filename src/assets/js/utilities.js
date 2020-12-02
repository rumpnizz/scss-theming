(function (app) {
    
    var log = function (msg) {
        if (!app.getSettings('debug')) return;
        console.debug(msg);
    };

    app.extend('log', log);
})(app);