import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginService } from "../services/auth.services";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleLogin = async (e) => {
    e.preventDefault();

    const userCredentials = {
      email: email,
      password: password,
    };

    try {
      const response = await loginService(userCredentials);
      localStorage.setItem("authToken", response.data.authToken);
      navigate("/dashboard");
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
      <header style={{display:'flex',justifyContent:'center'}}>
        <h2 style={{ color: "#fff" }}>Login</h2>
      </header>

      <form className="form" onSubmit={handleLogin}>
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
        {errorMessage !== "" && <p style={{ color: "red" }}>{errorMessage}</p>}
        <button>Access</button>
      </form>
    </div>
  );
}

export default Login;
