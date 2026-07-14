import "dotenv/config";

import express from "express";
import cors from "cors";

import sendEmail from "./api/send-email.js";


const app = express();


app.use(cors());

app.use(express.json());



app.post(
    "/api/send-email",
    sendEmail
);



app.listen(
    3001,
    () => {

        console.log(
            "🌈 Blinkita email server running on port 3001"
        );

    }
);