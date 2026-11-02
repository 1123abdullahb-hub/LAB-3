import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";

function User() {
  const { user, login, logout } = useContext(UserContext);

  return (
    <div className="section">
      <h2>User Management – Context API</h2>

      <h3>Welcome, {user}!</h3>

      {user === "Guest" ? (
        <button onClick={login}>Login</button>
      ) : (
        <button onClick={logout}>Logout</button>
      )}
    </div>
  );
}

export default User;