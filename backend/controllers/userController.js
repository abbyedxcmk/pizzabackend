import { db } from "../database/DBclient.js";
import bcrypt from "bcrypt";

//authenticate user
//route POST /api/users/login
const Login = (req, res) => {
  const { email, password } = req.body;

  res.status(200).json({ message: "User logged in!" });
};

// POST ---> Register User /api/users
const Register = async (req, res) => {
  const { email, password } = req.body;
  //check if user already exists
  let { data, error } = await db.from("User").select("*");
  for (let user of data) {
    console.log(user.email);
    if (user.email === email) {
      res.status(400);
      throw new Error("User already exists!");
    }
  }

  //if it does not exists add user to database
  await db
    .from("User")
    .insert([
      {
        email: email,
        password: await bcrypt.hash(password, 10),
      },
    ])
    .select();

  res.status(200).json({ message: "User registered!" });
};

// POST ---> Logout /api/users/logout
const Logout = (req, res) => {
  res.status(200).json({ message: "User logged out!" });
};

// GET ----> Show account info /api/users/profile
const Profile = (req, res) => {
  res.status(200).json({ message: "Checked user profile!" });
};

export { Login, Register, Logout, Profile };
