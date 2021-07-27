import React, { useContext } from "react";
import AuthContext from "../state/auth-context";

function TheName() {
  const ctx = useContext(AuthContext);
  return (
    <div>
      {ctx.title} {ctx.name} {ctx.sname}
      <button onClick={ctx.updateState}>Click</button>
    </div>
  );
}

export default TheName;
