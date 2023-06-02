import "./navbar.scss";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import { useContext } from "react";
import TransitionContext from "../../context/Transition";

function Navbar() {
  const navigate = useNavigate();

  const { setTransition, language, setLanguage, setIsClicked } =
    useContext(TransitionContext);

  const handleClickHome = () => {
    if (window.location.pathname === "/") {
      navigate("/");
    } else {
      setTransition(true);
      setTimeout(function () {
        navigate("/");
      }, 500);
      setTimeout(function () {
        setTransition(false);
      }, 1000);
    }
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

  const handleLang = () => {
    setIsClicked(true);
    setTimeout(() => {
      setIsClicked(false);
    }, 1000);
    setTimeout(() => {
      if (language == "fr") {
        setLanguage("eng");
      } else {
        setLanguage("fr");
      }
    }, 700);
  };

  return (
    <div className="navbar">
      <p onClick={handleClickHome}>Tom Le Laurain</p>
      <div>
        <p onClick={handleLang}>
          {language === "fr" ? "hello ?" : "bonjour ?"}
        </p>
        <a href="mailto:lelaurain.tom@gmail.com">
          <button
            ref={btnref}
            className="contact-btn"
            onMouseMove={window.innerWidth >= 1000 ? handleMouse : null}
            onMouseLeave={window.innerWidth >= 1000 ? handleMouseOut : null}
          >
            Contact
          </button>
        </a>
      </div>
    </div>
  );
}

export default Navbar;
