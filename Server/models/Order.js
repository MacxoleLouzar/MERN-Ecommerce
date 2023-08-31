import mongoose from "mongoose";

const OrderSchema = mongoose.Schema({
  products: [{ type: mongoose.Schema.Types.ObjectId, ref: "Product" }],
  user: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  date: {
    type: Date,
    default: Date.now(),
  },
});

export default mongoose.model("Order", OrderSchema);
