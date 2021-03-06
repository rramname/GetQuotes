"use strict";
exports.__esModule = true;
var express = require("express");
var QuoteRouter = require("./Controllers/QuotesController");
var AuthorsRouter = require("./Controllers/AuthorsController");
var TagsRouter = require("./Controllers/TagsController");
console.log("ts file listening");
var app = /** @class */ (function () {
    function app() {
        this.quoteRoutes = new QuoteRouter.QuotesController();
        this.authorsRoutes = new AuthorsRouter.AuthorsController();
        this.tagsRoutes = new TagsRouter.TagsController();
        this.express = express();
        this.express.use(function (req, res, next) {
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
            next();
        });
        this.express.use("/home", this.quoteRoutes.quoteRoutes);
        this.express.use("/authors", this.authorsRoutes.authorsRoutes);
        this.express.use("/Tags", this.tagsRoutes.tagsRoutes);
        this.express.listen(3000, function () {
            console.log("express server started");
        });
    }
    return app;
}());
exports["default"] = new app().express;
