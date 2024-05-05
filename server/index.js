import express from "express";
// import cookieParser from "cookie-parser";
// import cors from "cors";
// import http from "http";
import indexroute from "./src/routes/index.js";
import connectDB from "./src/configs/dbconfig.js";
import dotenv from "dotenv"
dotenv.config()

const app = express();

// app.use(cors());
app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());

app.use("/api/v1", indexroute);

const PORT = process.env.PORT || 3000;

connectDB()
app.listen(PORT, () => {
    console.log(`🚀 Server is running.. on http://localhost:${PORT}🚀..`);
  });
//test