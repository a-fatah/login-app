import React, { useContext } from "react";
import { AuthContext } from "../Context";

export default () => {
  const { state } = useContext(AuthContext);

  return (
    <h1 className="display-4">
      {state.loggedIn ? `Hi, ${state.username}` : "Please Login"}
    </h1>
  );
};
