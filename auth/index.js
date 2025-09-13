"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const signup_1 = require("./routes/signup");
const login_1 = require("./routes/login");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use(signup_1.router, login_1.router1);
app.get('/', (req, res) => {
    res.send('First Endpoint with get');
});
app.listen(5000, () => {
    console.log('listening on 5000');
});
//# sourceMappingURL=index.js.map