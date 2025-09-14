"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const config_1 = __importDefault(require("config"));
const log_1 = __importDefault(require("./logger/log"));
const connect_1 = __importDefault(require("./db/connect"));
const routes_1 = __importDefault(require("./routes"));
const port = config_1.default.get('port');
const host = config_1.default.get('host');
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.listen(port, host, () => {
    log_1.default.info(`Listening on http://${host}:${port}`);
    (0, connect_1.default)();
    (0, routes_1.default)(app);
});
//# sourceMappingURL=index.js.map