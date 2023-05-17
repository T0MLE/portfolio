import "./stackbtn.scss";
import PropTypes from "prop-types";

function StackBtn({ content }) {
  return <div className="stack-btn">{content}</div>;
}

export default StackBtn;

StackBtn.propTypes = {
  content: PropTypes.string.isRequired,
};
