import "reflect-metadata";
import { createConnection } from "typeorm";
import express from "express";
import cors from "cors"

const app = express();

app.use(express.json());
app.use(cors())

app.use

createConnection()
  .then(() => {
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
        console.log(`Server running at http://localhost:${PORT}`)
    })
    
  })
  .catch((error) => console.log(error));
