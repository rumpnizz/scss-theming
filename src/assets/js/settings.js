;(function (app) {
    'use strict';

    var settings = {
        debug: false
    };

    var setting = function (key, val) {
        if (!(key in settings)) return;
        settings[key] = val;
    };

    var getSettings = function (key) {
        if (key) return settings[key];
        return Object.assign({}, settings);
    };

    app.extend('setting', setting);
    app.extend('getSettings', getSettings);

})(app);