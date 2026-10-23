import express from "express";
import dotenv from "dotenv"
import cors from "cors"
import connectDB from "./config/db.js";

import authRoutes from "./routes/commonRoutes/authRoutes.js"

dotenv.config()

const app = express()

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  }))
app.use(express.json())

app.use("/api/auth", authRoutes)

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