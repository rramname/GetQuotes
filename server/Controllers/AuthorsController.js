"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var express = require("express");
var fetch = require("node-fetch");
var AuthorsController = /** @class */ (function () {
    function AuthorsController() {
        var _this = this;
        this.exp = express();
        this.exp.use(function (req, resp, next) {
            next();
        });
        this.authorsRoutes = express.Router();
        this.authorsRoutes.get("/", function (req, resp) { return __awaiter(_this, void 0, void 0, function () {
            var re;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.GetTypeHead()];
                    case 1:
                        re = _a.sent();
                        resp.send(re);
                        return [2 /*return*/];
                }
            });
        }); });
        this.authorsRoutes.get("/:author", function (req, resp) { return __awaiter(_this, void 0, void 0, function () {
            var re;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log("quote by auth");
                        return [4 /*yield*/, this.GetQuotesByAuthor(req.params.author)];
                    case 1:
                        re = _a.sent();
                        console.log("sending");
                        console.log(re);
                        resp.send(re);
                        return [2 /*return*/];
                }
            });
        }); });
    }
    AuthorsController.prototype.GetTypeHead = function () {
        return __awaiter(this, void 0, void 0, function () {
            var resp;
            return __generator(this, function (_a) {
                resp = {
                    "authors": [
                        {
                            "name": "Henry David Thoreau",
                            "permalink": "henry-david-thoreau",
                            "count": 148
                        },
                        {
                            "name": "Ralph Waldo Emerson",
                            "permalink": "ralph-waldo-emerson",
                            "count": 139
                        },
                        {
                            "name": "Albert Einstein",
                            "permalink": "albert-einstein",
                            "count": 135
                        },
                        {
                            "name": "Mark Twain",
                            "permalink": "mark-twain",
                            "count": 126
                        },
                        {
                            "name": "Friedrich Nietzsche",
                            "permalink": "friedrich-nietzsche",
                            "count": 122
                        },
                        {
                            "name": "Mahatma Gandhi",
                            "permalink": "mahatma-gandhi",
                            "count": 118
                        },
                        {
                            "name": "George Bernard Shaw",
                            "permalink": "george-bernard-shaw",
                            "count": 117
                        },
                        {
                            "name": "Oscar Wilde",
                            "permalink": "oscar-wilde",
                            "count": 112
                        },
                        {
                            "name": "Benjamin Franklin",
                            "permalink": "benjamin-franklin",
                            "count": 112
                        },
                        {
                            "name": "Mitt Romney",
                            "permalink": "mitt-romney",
                            "count": 109
                        },
                        {
                            "name": "Thomas Jefferson",
                            "permalink": "thomas-jefferson",
                            "count": 102
                        },
                        {
                            "name": "Francois de La Rochefoucauld",
                            "permalink": "francois-de-la-rochefoucauld",
                            "count": 100
                        },
                        {
                            "name": "Aristotle",
                            "permalink": "aristotle",
                            "count": 100
                        },
                        {
                            "name": "Plato",
                            "permalink": "plato",
                            "count": 98
                        },
                        {
                            "name": "Barack Obama",
                            "permalink": "barack-obama",
                            "count": 94
                        }
                    ]
                };
                return [2 /*return*/, resp];
            });
        });
    };
    AuthorsController.prototype.GetQuotesByAuthor = function (author) {
        return __awaiter(this, void 0, void 0, function () {
            var url, resp;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = "https://favqs.com/api/quotes/?filter=" + author + "&type=author";
                        console.log(url);
                        return [4 /*yield*/, fetch("https://favqs.com/api/quotes/?filter=" + author + "&type=author", {
                                method: "GET",
                                credentials: 'include',
                                headers: {
                                    "Authorization": "Token token=b87a405f6efc955f5861946c602d82d9"
                                }
                            }).then(function (resp) { return resp.json(); })];
                    case 1:
                        resp = _a.sent();
                        return [2 /*return*/, resp];
                }
            });
        });
    };
    return AuthorsController;
}());
exports.AuthorsController = AuthorsController;
