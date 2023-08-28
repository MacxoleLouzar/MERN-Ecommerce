import mongoose from "mongoose";

const productScheme = new mongoose.Schema({
    category: { type: String, default: "other" },
    name: { type: String, require: true },
    description: { type: String },
    price: { type: Number, require: true },
    image: { type: String, require: true },
    images: [{ type: String }],
    rating: [{ type: Number }],
    stock: { type: Number },
    dateAdded: { type: Date, default: Date.now }
});

export default mongoose.model("Product", productScheme);