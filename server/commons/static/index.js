/// <reference path="../../typings/tsd.d.ts" />
"use strict";
var fs = require('fs');
var StaticDispatcher = (function () {
    function StaticDispatcher() {
    }
    StaticDispatcher.sendIndex = function (req, res) {
        var _root = process.cwd();
        res.setHeader('Content-Type', 'text/html');
        fs.createReadStream(_root + '/client/__tmp/index.html')
            .pipe(res);
    };
    return StaticDispatcher;
})();
exports.StaticDispatcher = StaticDispatcher;
