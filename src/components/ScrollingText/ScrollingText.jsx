import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import "./scrollingtext.scss";

function ScrollingText({ content, direction }) {
  const [pos, setPos] = useState(-3000);

  useEffect(() => {
    const handleScroll = () => {
      direction === "left"
        ? setPos(-3000 + window.scrollY)
        : setPos(-1000 - window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [direction]);

  return (
    <div className="scrollingtext-container">
      {window.innerWidth <= 700 ? (
        <div style={{ left: pos }}> {content}</div>
      ) : (
        <div
          data-scroll
          data-scroll-speed={direction === "left" ? "8" : "-8"}
          data-scroll-direction="horizontal"
        >
          {" "}
          {content}
        </div>
      )}
    </div>
  );
}

export default ScrollingText;

ScrollingText.propTypes = {
  content: PropTypes.string.isRequired,
  direction: PropTypes.string.isRequired,
};
