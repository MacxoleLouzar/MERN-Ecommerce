import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/User";

const getAllUser = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.json({ error: "something went wrong " });
    console.log(error);
  }
};

const register = async (req, res) => {
  try {
    //Data from client
    const { name, email, password, image } = req.body;

    if (!name || !email || !password) {
      return res.json({ error: "All fields are required" });
    }

    //Client exist?

    const user = await User.findOne({ email });
    if (user) {
      return res.json({ error: "User already exist" });
    }

    //Encrypt the password
    const hashpassword = await bcrypt.hash(password, 15);

    //add user into database

    const newUser = await User({ name, email, password: hashpassword });
    await newUser.save();

    res.json({ data: "Succesfully registered" });
  } catch (error) {
    res.json({ error: "Something went wrong, please re-register later" });
    console.log(error);
  }
};

const login = async () => {
  try {
    //Data from client
    const { email, password } = req.body;
    if (!email || !password) {
      return res.json({ error: "All field are required" });
    }

    //Check if client exist
    const user = await User.findOne({ email });
    if (!user) {
      return res.json({ error: "User do not exist" });
    }
    //check password

    const comparePassword = await bcrypt.compare(password, user.password);
    if (!comparePassword) {
      return res.json({ error: "password incorrect" });
    }
    //generate Token
    const token = await jwt.sign(
      {
        _id: user._id,
        name: user.name,
        email: user.email,
        dateJoined: user.date,
      },
      process.env.SECRET_KEY,
      { expiresIn: "1h" }
    );
    return res.json({
      token,
      _id: user._id,
      name: user.name,
      email: user.email,
      dateJoined: user.date,
    });
  } catch (error) {
    res.json({ error: "Something went wrong, please try later" });
    console.log(error);
  }
};

export { getAllUser, login, register };
