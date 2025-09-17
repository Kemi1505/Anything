import { Express, Request, Response } from "express";
import { validUrl } from "../middleware/validUrl";
import { shortenUrl } from "../controller/urlController";
import { redirectUrlHandler } from "../controller/redirectController";
import { shortenCustomUrl } from "../controller/cutomUrlController";
import { getUserUrls } from "../db/getUserUrl";

export default (app: Express) =>{

    app.post("/api/shorten",validUrl, shortenUrl);

    app.post("/custom/shorten",validUrl, shortenCustomUrl);

    app.get("/api/:shortCode", redirectUrlHandler);

    app.get("/api/urls", getUserUrls);
}