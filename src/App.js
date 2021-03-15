import Nav from "react-bootstrap/Nav";
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";
import { useReducer } from "react";
import Login from "./component/Login";

function App() {
  function reducer(state, action) {
    switch (action.type) {
      case "login":
        return {
          loggedIn: true,
        };
      case "logout":
        return {
          loggedIn: false,
        };

      default:
        throw new Error("Invalid action type");
    }
  }

  const initialState = {
    loggedIn: false,
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Router>
      <Nav
        className="justify-content-end"
        onSelect={(key) => {
          //todo logout
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
      <div className="d-flex justify-content-center m-2">
        <Switch>
          <Route exact path="/login">
            <Login />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
