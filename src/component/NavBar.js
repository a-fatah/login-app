import React, { useContext } from "react";
import { Link } from "react-router-dom";

import Nav from "react-bootstrap/Nav";
import { AuthContext } from "../Context";

function NavBar() {
  const { state, dispatch } = useContext(AuthContext);

  return (
    <Nav
      className="justify-content-end"
      onSelect={(key) => {
        if (key === "logout") {
          dispatch({ type: "logout" });
        }
      }}
    >
      {state.loggedIn ? (
        <Nav.Item>
          <Nav.Link eventKey="logout">Logout</Nav.Link>
        </Nav.Item>
      ) : (
        <Nav.Item>
          <Nav.Link as={Link} to="/login">
            Login
          </Nav.Link>
        </Nav.Item>
      )}
    </Nav>
  );
}

export default NavBar;
