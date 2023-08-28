import express from "express";
import {
  getAllProducts,
  getSingleProduct,
    addProduct,
  UpdateProduct,
  removeProduct,
} from "../controller/ProductController.js";

const routes = express.Router();

routes.get("/product", getAllProducts).post("/product", addProduct);
routes
  .route("/product/:id")
  .get(getSingleProduct)
  .delete(removeProduct)
  .put(UpdateProduct);

export default routes ;
