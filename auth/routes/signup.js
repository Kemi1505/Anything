"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const bcrypt_1 = __importDefault(require("bcrypt"));
const dbConfig_1 = require("../dbConfig");
const router = (0, express_1.Router)();
exports.router = router;
router.get('/signup', (req, res) => {
    res.send(`
    <form method ='POST'>
        <h1>Sign Up</h1>
        <div>
            <label>UserName</label>
            <input name="username" type="text" required />
        </div>
        <div>
            <label>Email</label>
            <input name="email" type = "email" required />
        </div>
        <div>
            <label>Password</label>
            <input name="password" type="password" required  />
        </div>
        <div>
            <label>Confirm Password</label>
            <input name="confPassword" type="password" required  />
        </div>
        <div>
            <button>SignUp<button>
        </div>
        <a href ='/login'>Login</a>
    </form>
  `);
});
router.post('/signup', async (req, res) => {
    const { name, email, password, confPassword } = req.body;
    console.log({ name, email, password, confPassword });
    if (password !== confPassword) {
        return res.json({ error: 'Password and Confirm Password should be same' });
    }
    let hashedPassword = await bcrypt_1.default.hash(password, 10);
    const check = await dbConfig_1.pool.query('SELECT * FROM users WHERE email = $1', [email]);
    if (check.rows.length > 0) {
        return res.json({ error: 'Email already registered' });
    }
    else {
        dbConfig_1.pool.query('INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING *', [name, email, hashedPassword], (error, results) => {
            if (error) {
                return res.json({ error: "Something is wrong" });
            }
            console.log(results.row);
            return res.json({ message: "successful signup" });
        });
    }
});
//# sourceMappingURL=signup.js.map