import dotenv from 'dotenv'
dotenv.config()

import "reflect-metadata";
import { createConnection } from "typeorm";
import express from "express";
import cors from "cors"
import cookieParser from "cookie-parser";

import userRoutes from "./modules/routes/user.route"
import courseRoutes from "./modules/routes/course.route"

const app = express();

app.use(express.json());
app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true
}))
app.use(cookieParser())

app.use('/api/user', userRoutes)
app.use('/api/courses', courseRoutes)

createConnection()
  .then(() => {
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
        console.log(`Server running at http://localhost:${PORT}`)
    })
    
  })
  .catch((error) => console.log(error));
