"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const data_1 = require("../models/data");
class UserController {
    topUsers(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const topUsers = data_1.users
                    .sort((a, b) => b.postCount - a.postCount)
                    .slice(0, 5);
                res.status(200).json(topUsers);
            }
            catch (e) {
                console.error(e);
                res.status(500).json({ message: "Internal Server Error" });
            }
        });
    }
}
exports.UserController = UserController;
