import mongoose from "mongoose";
export const MongoDbConection = async () => {
  try {
    const mongoUrl = process.env.MONGO_URL;
    if (!mongoUrl) {
      throw new Error(
        "MongoDB URL is not defined in the environment variables."
      );
    }

    await mongoose.connect(mongoUrl);
    console.log("Mongodb connected");
  } catch (error) {
    console.log(error);
  }
};
