import "./header.scss";
import gsap from "gsap";
import { useEffect } from "react";

function Header() {
  useEffect(() => {
    gsap.to(".char", {
      y: 0,
      stagger: 0.02,
      duration: 0.1,
    });
    gsap.to("#desc", {
      delay: 0.2,
      duration: 0.1,
      opacity: 1,
    });
  }, []);

  return (
    <div className="header">
        <h2 className="my-text">
          <span className="word">
            {" "}
            <span className="char">F</span>
            <span className="char">U</span>
            <span className="char">L</span>
            <span className="char">L</span>
            <span className="char">S</span>
            <span className="char">T</span>
            <span className="char">A</span>
            <span className="char">C</span>
            <span className="char">K</span>
          </span>
          <span className="word">
            {" "}
            <span className="char">D</span>
            <span className="char">E</span>
            <span className="char">V</span>
            <span className="char">E</span>
            <span className="char">L</span>
            <span className="char">O</span>
            <span className="char">P</span>
            <span className="char">E</span>
            <span className="char">R</span>
          </span>
        </h2>
        <h1 className="my-text">
          <span className="word">
            {" "}
            <span className="char">T</span>
            <span className="char">O</span>
            <span className="char">M</span>
          </span>
          <span className="word">
            {" "}
            <span className="char">L</span>
            <span className="char">E</span>
          </span>
          <span className="word">
            {" "}
            <span className="char">L</span>
            <span className="char">A</span>
            <span className="char">U</span>
            <span className="char">R</span>
            <span className="char">A</span>
            <span className="char">I</span>
            <span className="char">N</span>
          </span>
        </h1>
        <p id="desc">
          {" "}
          Currently pursuing a web developement program, I am looking
          for an apprenticeship opportunity starting in September 2023.
        </p>
    </div>
  );
}

export default Header;
