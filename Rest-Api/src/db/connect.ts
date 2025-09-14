import mongoose from "mongoose";
import config from 'config'
import log from "../logger/log";

function connect() {
    const dbUri = config.get("dbUri") as string;

    return mongoose
    .connect(dbUri)
    .then(()=> {
        log.info("Database Connected")
    })
    .catch((error) => {
        log.error("db error", error);
        process.exit(1);
    })
}

export default connect