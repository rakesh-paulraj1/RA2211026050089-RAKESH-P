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
exports.PostController = void 0;
const data_1 = require("../models/data");
class PostController {
    getPosts(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { type } = req.query;
                if (type === "popular") {
                    const maxComments = Math.max(...data_1.posts.map(post => post.comments));
                    const popularPosts = data_1.posts.filter(post => post.comments === maxComments);
                    res.status(200).json(popularPosts);
                }
                else if (type === "latest") {
                    const latestPosts = data_1.posts
                        .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
                        .slice(0, 5);
                    res.status(200).json(latestPosts);
                }
                else {
                    res.status(400).json({ message: "Invalid type. Use 'popular' or 'latest'." });
                }
            }
            catch (e) {
                console.error(e);
                res.status(500).json({ message: "Internal Server Error" });
            }
        });
    }
}
exports.PostController = PostController;
