"use strict";
exports.__esModule = true;
var express = require("express");
console.log("ts file listening");
var app = /** @class */ (function () {
    function app() {
        this.express = express();
        this.express.listen(3000, function () {
            console.log("express server started");
        });
    }
    return app;
}());
exports["default"] = new app().express;
