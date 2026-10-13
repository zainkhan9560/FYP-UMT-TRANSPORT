import express from "express";
import dotenv from "dotenv"
import cors from "cors"
import connectDB from "./config/db.js";

dotenv.config()

const app = express()

app.use(cors())
app.use(express.json())

app.get("/", (req, res) => {
    res.send("UMT Transport API is running")
})

const startServer = async () => {
  await connectDB();

  app.listen(process.env.PORT || 5000, () => {
    console.log(`Server running on port ${process.env.PORT || 5000}`);
  });
};


startServer()