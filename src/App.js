import Nav from "react-bootstrap/Nav";
import { useReducer } from "react";

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
    <div>
      <Nav
        className="justify-content-end"
        activeKey="/login"
        onSelect={(selected) => alert(`Selected ${selected}`)}
      >
        {state.loggedIn ? (
          <Nav.Item>
            <Nav.Link eventKey="logout">Logout</Nav.Link>
          </Nav.Item>
        ) : (
          <Nav.Item>
            <Nav.Link href="/login">Login</Nav.Link>
          </Nav.Item>
        )}
      </Nav>
      <div className="d-flex justify-content-center m-2"></div>
    </div>
  );
}

export default App;
