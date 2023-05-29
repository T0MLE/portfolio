import "./project.scss";
import PropTypes from "prop-types";
import StackBtn from "../StackBtn/StackBtn";
import arrow from "../../assets/arrow-link.png";
// import { useNavigate } from "react-router-dom";

function Project({ img, stack, github, website }) {
  // const navigate = useNavigate();

  const handleClick = () => {
    website && window.open(website, "_blank");
  };

  return (
    <div className="project">
      <img className="img-proj" src={img} onClick={handleClick} />
      <div className="stack-container">
        {" "}
        {stack.map((e) => {
          return <StackBtn content={e} key={stack.indexOf(e)} />;
        })}
        <div className="github-link">
          <a href={github} target="_blank" rel="noreferrer">
            {" "}
            <span>Github</span>
            <img src={arrow} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Project;

Project.propTypes = {
  img: PropTypes.string.isRequired,
  github: PropTypes.string.isRequired,
  route: PropTypes.string,
  website: PropTypes.string,
  stack: PropTypes.arrayOf(PropTypes.string),
};
