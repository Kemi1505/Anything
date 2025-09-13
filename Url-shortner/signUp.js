"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.json());
const users = [];
app.get('/signup', (req, res) => {
    res.send(`
        <form method ='POST'>
            <div>
                <label>UserName</label>
                <input name="username" />
            </div>
            <div>
                <label>Email</label>
                <input name="email" />
            </div>
            <div>
                <label>Password</label>
                <input name="password" type="password" />
            </div>
            <div>
                <label>Confirm Password</label>
                <input name="confPassword" type="password" />
            </div>
            <button>SignUp<button>
        </form>
    `);
});
app.post('/signup', (req, res) => {
    const { username, password, email, confPassword } = req.body;
    if (password !== confPassword) {
        res.send('Password and Confirm Password should be same');
    }
    else {
        const newUser = { username, password, email };
        users.push(newUser);
        res.send(`Hello ${username}, you just signed up`);
    }
});
app.listen(4000, () => {
    console.log('listening to port 3000');
});
//# sourceMappingURL=signUp.js.map