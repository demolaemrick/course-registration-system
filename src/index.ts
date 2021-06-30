import "reflect-metadata";
import { createConnection } from "typeorm";
import express from "express";

const app = express();
app.use(express.json());

createConnection()
  .then(() => {
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
        console.log(`Server running at http://localhost:${PORT}`)
    })
    
  })
  .catch((error) => console.log(error));
