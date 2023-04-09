import { Link, useNavigate } from "react-router-dom";
import { verifyService } from "../services/auth.services";
import { useEffect, useState } from "react";

function Navbar() {
  const navigate = useNavigate();
  const [user, setuser] = useState("");
  const [online, setOnline] = useState(false);

  useEffect(() => {
    isActive();
  }, [online]);

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    setOnline(false);
    navigate("/login");
  };

  const linkStyle = {
    color: "#fff",
  };

  const isActive = async () => {
    try {
      const userActive = await verifyService();
      setuser(userActive?.data.user);
      setOnline(true);
    } catch (error) {
      setuser("");
      setOnline(false);
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
