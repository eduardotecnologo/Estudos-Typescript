"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var UserController_1 = __importDefault(require("./controllers/UserController"));
var router = express_1.Router();
router.get('/users', UserController_1.default.index);
router.post('/users/create', UserController_1.default.create);
// router.get('/', (req, res) => {
//   return res.send('Koééé manolo');
// });
exports.default = router;
