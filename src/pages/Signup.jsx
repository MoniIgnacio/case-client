import React from "react";

function Signup() {
  return (
    <div>
      <header>
        <form className="form">
          <input type="email" placeholder="user@example.com" name="email" />
          <input type="password" placeholder="• • • • • •" name="password" />
          <button type="submit">Create user</button>
        </form>
      </header>
    </div>
  );
}

export default Signup;
