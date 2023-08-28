import mongoose from "mongoose";

const connect = async () => {
  try {
    const url =
      "mongodb+srv://macxolelouzaar:e1234567890@cluster0.khnaqkc.mongodb.net/";

    mongoose.set("strictQuery", true);
    mongoose.connect(url),
    console.log("MongoDB Connection Succeeded.");
  } catch (error) {
    console.log("Error in DB connection: " + error);
  }
};

export default connect;

