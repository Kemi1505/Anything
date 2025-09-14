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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUserSessionHandler = createUserSessionHandler;
const UserService_1 = require("../service/UserService");
const sessionSevice_1 = require("../service/sessionSevice");
const config_1 = __importDefault(require("config"));
const jwt_utils_1 = require("../utils/jwt.utils");
function createUserSessionHandler(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        // validte emaill and password
        const user = yield (0, UserService_1.validatePassword)(req.body);
        if (!user) {
            return res.status(401).send("Invalid username or password");
        }
        // create a session
        const session = yield (0, sessionSevice_1.createSession)(user._id.toString(), req.get("user-agent") || "");
        // create access token
        const accessToken = (0, sessionSevice_1.createAccessToken)({
            user,
            session,
        });
        // create refresh token
        const refreshToken = (0, jwt_utils_1.sign)(session, {
            expiresIn: config_1.default.get("refreshTokenTtl"),
        });
        // send refresh and acess token to user
        return res.send({ accessToken, refreshToken });
    });
}
//# sourceMappingURL=sessionController.js.map