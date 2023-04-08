import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { signupService } from "../services/auth.services";

function Signup() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handlePassword2Change = (e) => setPassword2(e.target.value);

  const handleSignup = async (e) => {
    e.preventDefault();

    const newUser = {
      email: email,
      password: password,
      passwordSecure: password2,
    };

    try {
      await signupService(newUser);

      navigate("/login");
    } catch (error) {
      if (error.response && error.response.status === 400) {
        setErrorMessage(error.response.data.errorMessage);
      } else {
        navigate("/error");
      }
    }
  };

  return (
    <div>
      <header style={{ display: "flex", justifyContent: "center" }}>
        <h2 style={{ color: "#fff" }}>Create User</h2>
      </header>

      <form className="form" onSubmit={handleSignup}>
        <input
          type="email"
          placeholder="user@example.com"
          name="email"
          value={email}
          onChange={handleEmailChange}
        />

        <input
          type="password"
          placeholder="• • • • • •"
          name="password"
          value={password}
          onChange={handlePasswordChange}
        />

        <input
          type="password"
          placeholder="• • • • • •"
          name="password2"
          value={password2}
          onChange={handlePassword2Change}
        />

        {errorMessage !== "" && <p style={{ color: "red" }}>{errorMessage}</p>}
        <button type="submit">Create user</button>
      </form>
    </div>
  );
}

export default Signup;
