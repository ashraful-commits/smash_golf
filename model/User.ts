import mongoose, { model } from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
    },
    email: {
      type: String,
      trim: true,
    },
    password: {
      type: String,
      trim: true,
    },
    status: {
      type: Boolean,
      default: false,
    },
    role: {
      type: String,
      default: "user",
    },
    photo: {
      type: String,
      default: null,
    },
  },
  { timestamps: true }
);

let UserModel: any;

try {
  UserModel = mongoose.model("Smash");
} catch (e) {
  UserModel = mongoose.model("Smash", userSchema);
}

export default UserModel;
