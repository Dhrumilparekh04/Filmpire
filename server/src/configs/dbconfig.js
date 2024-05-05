import mongoose from "mongoose";
import dotenv from "dotenv"
dotenv.config()

const connectDB = async () => {
    try {
      await mongoose.connect(process.env.URI);
      console.log("Connected to MongoDB Atlas");
    } catch (error) {
      console.log("Error connecting to MongoDB Atlas:", error);
    }
  };
  
  export default connectDB;
  