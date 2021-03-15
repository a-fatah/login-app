import React, { useReducer } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { AuthContext } from "./Context";
import NavBar from "./component/NavBar";
import Login from "./component/Login";
import Home from "./component/Home";

function reducer(state, action) {
  debugger;
  switch (action.type) {
    case "login":
      return login(action.payload);
    case "logout":
      return logout();
    default:
      throw new Error("invalid action");
  }
}

function login({ username, password }) {
  localStorage.clear();
  if (password === "s3cr3t") {
    localStorage.setItem("loggedIn", true);
    localStorage.setItem("username", username);
    return {
      loggedIn: true,
      username,
    };
  }
  return {
    loggedIn: false,
    error: "Invalid Credentials",
  };
}

function logout() {
  localStorage.clear();
  return {
    loggedIn: false,
  };
}

function App() {
  const [state, dispatch] = useReducer(reducer, {
    loggedIn: localStorage.getItem("loggedIn"),
    username: localStorage.getItem("username"),
  });

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      <Router>
        <NavBar />
        <div className="d-flex justify-content-center m-2">
          <Switch>
            <Route exact path="/">
              {() => {
                return state.loggedIn ? (
                  <Redirect to="/home" />
                ) : (
                  <Redirect to="/login" />
                );
              }}
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/home">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
