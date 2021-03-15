import React from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function Login() {
  return (
    <Container>
      <Form>
        <Form.Group>
          <Form.Label>Username/Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter your username or email"
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" />
        </Form.Group>
        <Button type="submit" variant="primary">
          Login
        </Button>
      </Form>
    </Container>
  );
}

export default Login;
