import "./navbar.scss";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";

function Navbar() {
  const navigate = useNavigate();

  const handleClickHome = () => {
    navigate("/");
  };

  const btnref = useRef();

  const handleMouse = (e) => {
    const position = btnref.current.getBoundingClientRect();
    const x = e.pageX - position.left - position.width / 2;
    const y = e.pageY - position.top - position.height / 2;
    btnref.current.style.transform =
      "translate(" + x * 0.3 + "px, " + y * 0.5 + "px)";
  };

  const handleMouseOut = () => {
    btnref.current.style.transform = "translate(0px, 0px)";
  };

  return (
    <div className="navbar">
      <p onClick={handleClickHome}>Tom Le Laurain</p>
      <button
        ref={btnref}
        className="contact-btn"
        onMouseMove={window.innerWidth >= 1000 && handleMouse}
        onMouseLeave={window.innerWidth >= 1000 && handleMouseOut}
      >
        Contact
      </button>
    </div>
  );
}

export default Navbar;
