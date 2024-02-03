import mongoose from "mongoose";

async function connectMongodb() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected");
  } catch (error) {
    console.log(error);
  }
}

export default connectMongodb;
