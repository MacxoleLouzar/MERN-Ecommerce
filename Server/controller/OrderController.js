import Order from "../models/Order.js";

const OrderProducts = async (req, res) => {
  try {
    const { _id, products } = req.body;
    const product = await Order({ user: _id, products });

    await product.save();
    res.json({ data: "Order successfully" });
  } catch (error) {
    res.json({ error: "Something went wrong, try again later" });
    console.log(error);
  }
};

const viewAllOrder = async (req, res) => {
  try {
    const allOrder = await Order.find()
      .populate({
        path: "user",
        select: "name, ",
      })
      .populate({ path: "products" });
    res.json(allOrder);
  } catch (error) {
    res.json({ data: "Something went wrong, try again later" });
    console.log(error);
  }
};

const viewOrderUser = async (req, res) => {
  try {
    const { id } = req.params;
    const orders = await Order.find({ user: id }).populate({
      path: "products",
    });
    res.json(orders);
  } catch (error) {
    res.json({ error: "Something went wrong, try again later" });
    console.log(error);
  }
};

export { OrderProducts, viewAllOrder, viewOrderUser };
