"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const Allroutes_1 = __importDefault(require("./routes/Allroutes"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = 3001;
app.use(express_1.default.json());
app.use(express_1.default.static(__dirname + "/files", { index: false }));
app.use((0, cors_1.default)());
app.use(Allroutes_1.default);
app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
