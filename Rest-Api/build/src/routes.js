"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const userScema_1 = require("./schema/userScema");
const userController_1 = require("./controller/userController");
const validateRequest_1 = __importDefault(require("./middleware/validateRequest"));
const sessionController_1 = require("./controller/sessionController");
exports.default = (app) => {
    app.get("/check", (req, res) => res.sendStatus(200));
    // Register
    // POST/api/user
    app.post("/api/users", (0, validateRequest_1.default)(userScema_1.createUserSchema), userController_1.createUserHandler);
    // Login
    // POST/api/sessions
    app.post("/api/sessions", (0, validateRequest_1.default)(userScema_1.createUserSessionSchema), sessionController_1.createUserSessionHandler);
    // get user sessions
    // GET/api/sessions
    // Logout
    //DELETE/api/sessions
};
//# sourceMappingURL=routes.js.map