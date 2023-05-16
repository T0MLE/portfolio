import "./stackbtn.scss";
import PropTypes from "prop-types";

function StackBtn({ content }) {
  return <button className="stack-btn">{content}</button>;
}

export default StackBtn;

StackBtn.propTypes = {
  content: PropTypes.string.isRequired,
};
