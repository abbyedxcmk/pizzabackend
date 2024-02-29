import { useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [users, setUsers] = useState({
    username: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUsers({
      ...users,
      [name]: value,
    });
    console.log(users);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("/api/register", users)
      .then((response) => console.log(response, users))
      .catch((err) => console.log(err));
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>Username</label>
        <input type="text" name="username" onChange={handleInputChange} />
        <label>Password</label>
        <input type="password" name="password" onChange={handleInputChange} />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default App;
