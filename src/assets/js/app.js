var app = (function () {

    var methods = {};

    methods.extend = function (name, fn) {
        methods[name] = fn;
    };

    return methods;
})();