import "./project.scss";
import PropTypes from "prop-types";

function Project({ img }) {
  return (
    <div className="project" style={{ backgroundImage: `url(${img})` }}></div>
  );
}

export default Project;

Project.propTypes = {
  img: PropTypes.string.isRequired,
};
