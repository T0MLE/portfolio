import "./navbar.scss";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(-1);
  };
  return (
    <div className="navbar">
      <p onClick={handleClick}>TLL.</p>
      <button className="contact-btn">Contact</button>
    </div>
  );
}

export default Navbar;
