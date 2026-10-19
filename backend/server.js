import express from "express";
import dotenv from "dotenv"
import cors from "cors"
import connectDB from "./config/db.js";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/commonRoutes/authRoutes.js"

dotenv.config()

const app = express()

app.use(cors({
  origin: [
    "http://localhost:5173",
    "http://localhost:5174",
  ],
  credentials: true
}))
app.use(express.json())
app.use(cookieParser())

//HOME ROUTE
app.get("/", (req, res) => {
    res.send("UMT Transport API is running")
})

//AUTH ROUTES
app.use("/api/auth", authRoutes)

const startServer = async () => {
  await connectDB();

  app.listen(process.env.PORT || 5000, () => {
    console.log(`Server running on port ${process.env.PORT || 5000}`);
  });
};


startServer()