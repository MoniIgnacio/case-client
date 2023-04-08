import { Link, useNavigate } from "react-router-dom";
import { verifyService } from "../services/auth.services";
import { useEffect, useState } from "react";

function Navbar() {
  const navigate = useNavigate();
  const [user, setuser] = useState("");
  const [online, setOnline] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    navigate("/login");
  };

  const linkStyle = {
    color: "#fff",
  };

  useEffect(() => {
    isActive();
  }, []);

  const isActive = async () => {
    try {
      const userActive = await verifyService();
      setuser(userActive?.data.user);
      setOnline(true);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container-navbar">
      <ul>
        <li>
          <Link to={`/`} style={linkStyle}>
            Home
          </Link>
        </li>
        <li>
          {online ? null : (
            <Link to={`/login`} style={linkStyle}>
              Login
            </Link>
          )}
        </li>
        <li>
          {online ? null : (
            <Link to={"/signup"} style={linkStyle}>
              Signup
            </Link>
          )}
        </li>
        <li>
          {online ? <button onClick={handleLogout}>Logout</button> : null}
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
