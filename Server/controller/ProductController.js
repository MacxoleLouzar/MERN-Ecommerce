import ProductModel from "../models/ProductModel.js";

//GET all products
const getAllProducts = async (req, res) => {
  try {
    const products = await ProductModel.find({});
    res.json({ products });
  } catch (error) {
    console.log(error);
  }
};

//GET a single product
const getSingleProduct = async (req, res) => {
  const _id = req.params.id;
  try {
    const product = await ProductModel.findById({ _id });
    res.json({ product });
  } catch (error) {
    console.log(error);
  }
};

//Post a product
const addProduct = async (req, res) => {
  try {
    res.json({ data: "Product added successful" });
  } catch (error) {
    console.log(error);
  }
};

const UpdateProduct = async (req, res) => {
    const _id = req.params.id;
    const prod = await req.body;
    try {
        const product = await ProductModel.updateOne(_id, prod)
        res.json({data:product.rows, message:"product updated"});
    
   } catch (error) {
    console.log(error)
   }
}

const removeProduct = async (req, res) => {
  res.json({ data: "product removed" });
};

export { getAllProducts, getSingleProduct, addProduct, UpdateProduct, removeProduct };
