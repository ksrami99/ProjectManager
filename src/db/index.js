import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("DB Connected");
  } catch (error) {
    console.error("MongoDB connection Failed", error);
    process.exit(1);
  }
};


export default connectDB;