import React, { useState, useEffect, useContext } from "react";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import { AuthContext } from "../Context";
import { useHistory } from "react-router";

function Login() {
  const [payload, setPayload] = useState({});

  const { state, dispatch } = useContext(AuthContext);

  const history = useHistory();

  const handleLogin = (e) => {
    e.preventDefault();

    dispatch({ type: "login", payload });
  };

  const handleChange = (e) => {
    setPayload({
      ...payload,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    if (state.loggedIn) {
      history.push("/");
    }
  }, [state, history]);

  return (
    <div className="w-25">
      <Form>
        {state.error ? <Alert variant="danger">{state.error}</Alert> : ""}
        <Form.Group>
          <Form.Label>Username/Email</Form.Label>
          <Form.Control
            name="username"
            type="text"
            placeholder="Enter your username or email"
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control
            name="password"
            type="password"
            placeholder="Password"
            onChange={handleChange}
          />
        </Form.Group>
        <Button type="submit" variant="primary" onClick={handleLogin}>
          Login
        </Button>
      </Form>
    </div>
  );
}

export default Login;
