import "./header.scss";
import gsap from "gsap";
import SplitType from "split-type";
import { useEffect } from "react";

function Header() {
  useEffect(() => {
    new SplitType(".my-text");
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
      <h1 className="my-text">TOm LE LaURAIN</h1>
      <h2 className="my-text">FULLSTaCK DEVELOPER</h2>
      <p id="desc">
        {" "}
        Currently pursuing a fullstack web developement program, I am looking
        for an apprenticeship opportunity starting in September 2023.
      </p>
    </div>
  );
}

export default Header;
