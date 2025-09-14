"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const config_1 = __importDefault(require("config"));
const log_1 = __importDefault(require("../logger/log"));
function connect() {
    const dbUri = config_1.default.get("dbUri");
    return mongoose_1.default
        .connect(dbUri)
        .then(() => {
        log_1.default.info("Database Connected");
    })
        .catch((error) => {
        log_1.default.error("db error", error);
        process.exit(1);
    });
}
exports.default = connect;
//# sourceMappingURL=connect.js.map