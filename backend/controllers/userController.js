//authenticate user
//route POST /api/users/login
const Login = (req, res) => {
  res.status(200).json({ message: "User logged in!" });
};

export { Login };
