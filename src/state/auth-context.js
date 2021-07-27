import React, { useState } from "react";

const AuthContext = React.createContext({});

export const AuthContextprovider = (props) => {
  const [state, setState] = useState({
    isLoggedin: false,
    name: "Ted",
    sname: "Bundy",
    title: "Mr",
    count: 0,
    updateState: updateHandler,
  });

  function updateHandler() {
    const newState = Object.assign({}, state);
    newState.title = "Mrs";
    setState(newState);
  }

  return (
    <AuthContext.Provider value={state}>{props.children}</AuthContext.Provider>
  );
};

export default AuthContext;
