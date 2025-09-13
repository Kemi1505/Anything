"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router1 = void 0;
const express_1 = require("express");
const router1 = (0, express_1.Router)();
exports.router1 = router1;
router1.get('/login', (req, res) => {
    res.send(`
    <form method ='POST'>
        <h1>Log In</h1>
        <div>
            <label>Email</label>
            <input name="email" type = "email" required />
        </div>
        <div>
            <label>Password</label>
            <input name="password" type="password" required  />
        </div>
        <div>
            <button>Log In<button>
        </div>
        
        <a href ='/signup'>SignUp</a>
        
    </form>
  `);
});
//# sourceMappingURL=login.js.map