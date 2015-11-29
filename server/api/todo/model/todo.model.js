/// <reference path="../../../typings/tsd.d.ts" />
var mongoose = require('mongoose');
var _todoSchema = {
    todoMessage: { type: String, required: true, trim: true },
    createdAt: { type: Date, default: Date.now }
};
exports.default = mongoose.Schema(_todoSchema);
