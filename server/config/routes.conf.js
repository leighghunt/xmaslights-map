/// <reference path="../typings/tsd.d.ts" />
"use strict";
var morgan = require('morgan');
var bodyParser = require('body-parser');
var contentLength = require('express-content-length-validator');
var helmet = require('helmet');
var RoutesConfig = (function () {
    function RoutesConfig() {
    }
    RoutesConfig.init = function (application, exp) {
        var _files = (process.env.NODE_ENV === 'production') ? '/client/dist/' : '/client/__tmp/';
        var _root = process.cwd();
        application.use(exp.static(_root + _files));
        application.use(bodyParser());
        application.use(morgan('dev'));
        application.use(contentLength.validateMax({ max: 999 }));
        application.use(helmet());
    };
    return RoutesConfig;
})();
exports.RoutesConfig = RoutesConfig;
