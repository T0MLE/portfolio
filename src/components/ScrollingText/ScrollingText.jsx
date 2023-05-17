import PropTypes from "prop-types";
import "./scrollingtext.scss";

function ScrollingText({ content, direction }) {
  return (
    <div className="scrollingtext-container">
      <div
        data-scroll
        data-scroll-speed={direction === "left" ? "8" : "-8"}
        data-scroll-direction="horizontal"
      >
        {content}
      </div>
    </div>
  );
}

export default ScrollingText;

ScrollingText.propTypes = {
  content: PropTypes.string.isRequired,
  direction: PropTypes.string.isRequired,
};
