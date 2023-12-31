import mongoose from "mongoose";

const UserSchema = mongoose.Schema({
  name: {
    type: String,
    require: true,
  },

  image: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
    unique: true,
  },
  password: {
    type: String,
    require: true,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
});

export default mongoose.model("User", UserSchema);
