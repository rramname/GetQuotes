"use strict";
exports.__esModule = true;
var express = require("express");
var Router = /** @class */ (function () {
    function Router() {
        this.routes = express.Router();
        this.routes.get('/', function (req, resp) {
            return "default working";
        });
    }
    return Router;
}());
exports.Router = Router;
