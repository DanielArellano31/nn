import mongoose from "mongoose";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { test } from "./controllers/user.controller.js";
dotenv.config()

mongoose.connect(process.env.url_database)

.then(() => {
    console.log('Conexión exitosa')
})

.catch((err) => {
    console.log('no jalo')
})

const app = express()

app.use(cors())

app.listen(4000, () => {
    console.log('Esta corriendo el servidor')
})

test ()
