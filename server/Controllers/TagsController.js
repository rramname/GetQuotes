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
var TagsController = /** @class */ (function () {
    function TagsController() {
        var _this = this;
        this.exp = express();
        this.exp.use(function (req, resp, next) {
            next();
        });
        this.tagsRoutes = express.Router();
        this.tagsRoutes.get("/", function (req, resp) { return __awaiter(_this, void 0, void 0, function () {
            var re;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.GetTags()];
                    case 1:
                        re = _a.sent();
                        resp.send(re);
                        return [2 /*return*/];
                }
            });
        }); });
        this.tagsRoutes.get("/:tag", function (req, resp) { return __awaiter(_this, void 0, void 0, function () {
            var re;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.GetQuotesByTag(req.params.tag)];
                    case 1:
                        re = _a.sent();
                        resp.send(re);
                        return [2 /*return*/];
                }
            });
        }); });
    }
    TagsController.prototype.GetTags = function () {
        var resp = { "tags": [
                {
                    "name": "life",
                    "permalink": "life",
                    "count": 1004
                },
                {
                    "name": "religion",
                    "permalink": "religion",
                    "count": 990
                },
                {
                    "name": "god",
                    "permalink": "god",
                    "count": 988
                },
                {
                    "name": "happiness",
                    "permalink": "happiness",
                    "count": 983
                },
                {
                    "name": "work",
                    "permalink": "work",
                    "count": 981
                },
                {
                    "name": "men",
                    "permalink": "men",
                    "count": 981
                },
                {
                    "name": "great",
                    "permalink": "great",
                    "count": 977
                },
                {
                    "name": "nature",
                    "permalink": "nature",
                    "count": 977
                },
                {
                    "name": "knowledge",
                    "permalink": "knowledge",
                    "count": 975
                },
                {
                    "name": "truth",
                    "permalink": "truth",
                    "count": 975
                },
                {
                    "name": "science",
                    "permalink": "science",
                    "count": 975
                },
                {
                    "name": "good",
                    "permalink": "good",
                    "count": 974
                },
                {
                    "name": "love",
                    "permalink": "love",
                    "count": 974
                },
                {
                    "name": "time",
                    "permalink": "time",
                    "count": 968
                },
                {
                    "name": "funny",
                    "permalink": "funny",
                    "count": 968
                },
                {
                    "name": "death",
                    "permalink": "death",
                    "count": 967
                },
                {
                    "name": "business",
                    "permalink": "business",
                    "count": 962
                },
                {
                    "name": "power",
                    "permalink": "power",
                    "count": 961
                },
                {
                    "name": "fear",
                    "permalink": "fear",
                    "count": 959
                },
                {
                    "name": "best",
                    "permalink": "best",
                    "count": 957
                },
                {
                    "name": "faith",
                    "permalink": "faith",
                    "count": 957
                },
                {
                    "name": "politics",
                    "permalink": "politics",
                    "count": 954
                },
                {
                    "name": "society",
                    "permalink": "society",
                    "count": 952
                },
                {
                    "name": "war",
                    "permalink": "war",
                    "count": 951
                },
                {
                    "name": "history",
                    "permalink": "history",
                    "count": 951
                },
                {
                    "name": "success",
                    "permalink": "success",
                    "count": 950
                },
                {
                    "name": "alone",
                    "permalink": "alone",
                    "count": 949
                },
                {
                    "name": "education",
                    "permalink": "education",
                    "count": 946
                },
                {
                    "name": "learning",
                    "permalink": "learning",
                    "count": 943
                },
                {
                    "name": "marriage",
                    "permalink": "marriage",
                    "count": 941
                },
                {
                    "name": "government",
                    "permalink": "government",
                    "count": 940
                },
                {
                    "name": "hope",
                    "permalink": "hope",
                    "count": 939
                },
                {
                    "name": "money",
                    "permalink": "money",
                    "count": 939
                },
                {
                    "name": "respect",
                    "permalink": "respect",
                    "count": 939
                },
                {
                    "name": "freedom",
                    "permalink": "freedom",
                    "count": 938
                },
                {
                    "name": "future",
                    "permalink": "future",
                    "count": 937
                },
                {
                    "name": "peace",
                    "permalink": "peace",
                    "count": 936
                },
                {
                    "name": "experience",
                    "permalink": "experience",
                    "count": 934
                },
                {
                    "name": "health",
                    "permalink": "health",
                    "count": 928
                },
                {
                    "name": "age",
                    "permalink": "age",
                    "count": 927
                },
                {
                    "name": "change",
                    "permalink": "change",
                    "count": 925
                },
                {
                    "name": "beauty",
                    "permalink": "beauty",
                    "count": 925
                },
                {
                    "name": "relationship",
                    "permalink": "relationship",
                    "count": 918
                },
                {
                    "name": "music",
                    "permalink": "music",
                    "count": 909
                },
                {
                    "name": "home",
                    "permalink": "home",
                    "count": 904
                },
                {
                    "name": "women",
                    "permalink": "women",
                    "count": 899
                },
                {
                    "name": "mom",
                    "permalink": "mom",
                    "count": 893
                }
            ] };
        return resp;
    };
    TagsController.prototype.GetQuotesByTag = function (tag) {
        return __awaiter(this, void 0, void 0, function () {
            var url, resp;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = "https://favqs.com/api/quotes/?filter=" + tag + "&type=tag";
                        console.log(url);
                        return [4 /*yield*/, fetch(url, {
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
    return TagsController;
}());
exports.TagsController = TagsController;
