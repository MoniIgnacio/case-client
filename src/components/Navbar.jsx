import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    navigate("/");
  };

  const colorLink = {
    color: "#fff",
  };

  return (
    <div className="container-navbar">
      <ul>
        <li>
          <Link to={`/`} style={colorLink}>
            Home
          </Link>
        </li>
        <li>
          <Link to={`/login`} style={colorLink}>
            Login
          </Link>
        </li>
        <li>
          <Link to={"/signup"} style={colorLink}>
            Signup
          </Link>
        </li>
        <li>
          <button onClick={handleLogout}>Logout</button>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
