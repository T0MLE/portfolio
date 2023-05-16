import "./project.scss";
import PropTypes from "prop-types";
import StackBtn from "../StackBtn/StackBtn";

function Project({ img, stack }) {
  return (
    <div className="project">
      <img className="img-proj" src={img} />
      <div className="stack-container">
        {" "}
        {stack.map((e) => {
          return <StackBtn content={e} key={stack.indexOf(e)} />;
        })}
      </div>
    </div>
  );
}

export default Project;

Project.propTypes = {
  img: PropTypes.string.isRequired,
  stack: PropTypes.arrayOf(PropTypes.string),
};
