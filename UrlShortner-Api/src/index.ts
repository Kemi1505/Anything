import express from "express";
import {connect} from "./db/connect";
import cookieParser from "cookie-parser";
import urlRoutes from "./routes/urlRoutes";
import authRoutes from "./routes/authRoutes";

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(cookieParser())


app.listen(3030 , ()=>{
    console.log("Listening on port 3030")

    connect()

    authRoutes(app)
    urlRoutes(app)

})