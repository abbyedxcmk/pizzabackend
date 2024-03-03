import "./index.css";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import NavBar from "../Navbar";
import { useState } from "react";
import axios from "axios";

const Register = () => {
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
      .post("/api/users", users)
      .then((response) => console.log(response, users))
      .catch((err) => console.log(err));
  };
  return (
    <>
      <NavBar></NavBar>
      <Container className="w-75 my-5 bg-secondary rounded">
        <Form
          className="p-4 rounded vh-50 registerForm"
          onSubmit={handleSubmit}
        >
          <Form.Group controlId="formEmail" className="mb-3">
            <h1 className="mb-5">Create an Account</h1>
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder="Enter Email"
              onChange={handleInputChange}
            ></Form.Control>
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          <Form.Group controlId="formPassword" className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              onChange={handleInputChange}
            ></Form.Control>
          </Form.Group>
          <Form.Group controlId="formConfirmPassword" className="mb-3">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              name="confirm-password"
              onChange={handleInputChange}
            ></Form.Control>
          </Form.Group>
          <Button variant="primary" type="submit" className="w-100 mb-5">
            Register
          </Button>
          <Row>
            <Col className="col-8">
              <p>Already have an account?</p>
            </Col>
            <Col className="col-4">
              <a>Log in</a>
            </Col>
          </Row>
          <Row>
            <Col className="col-8">
              <p>Forgot Password?</p>
            </Col>
            <Col className="col-4">
              <a>Get Help</a>
            </Col>
          </Row>
        </Form>
      </Container>
    </>
  );
};

export default Register;
