import NavBar from "../Navbar";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/esm/Button";
import Container from "react-bootstrap/esm/Container";
import { useState } from "react";
import axios from "axios";

const Login = () => {
  const [users, setUsers] = useState({
    email: "",
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
      .post("/api/users/login", users)
      .then((response) => console.log(response, users))
      .catch((err) => console.log(err));
  };
  return (
    <>
      <NavBar></NavBar>
      <Container>
        <h1>Login</h1>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter Email"
              name="email"
              onChange={handleInputChange}
            ></Form.Control>
          </Form.Group>
          <Form.Group controlId="formPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              onChange={handleInputChange}
            ></Form.Control>
          </Form.Group>
          <Button type="submit">Login</Button>
        </Form>
      </Container>
    </>
  );
};

export default Login;
