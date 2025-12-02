import mongoose from "mongoose";
import { ENV } from "./env.js";

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(ENV.DB_URL);
    console.log(`Conneected to MONGODB: ${conn.connection.host}`);
  } catch (error) {
    console.log("MONGODB connection error", error.message);
    process.exit(1); // process.exit(1); exit code 1 means failure, 0 neans success
  }
};
