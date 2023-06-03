import "./project.scss";
import { useContext } from "react";
import TransitionContext from "../../context/Transition";
import PropTypes from "prop-types";
import StackBtn from "../StackBtn/StackBtn";
import arrow from "../../assets/arrow-link.png";
import { useNavigate } from "react-router-dom";

function Project({ img, stack, github, website, route, id }) {
  const { setTransition } = useContext(TransitionContext);
  const navigate = useNavigate();

  const handleClick = () => {
    if (id !== 4) {
      website ? window.open(website, "_blank") : handleTransition();
    }
  };

  const handleTransition = () => {
    setTransition(true);
    setTimeout(function () {
      navigate(route);
    }, 500);
    setTimeout(function () {
      setTransition(false);
    }, 1000);
  };

  return (
    <div className="project">
      <img className="img-proj" src={img} onClick={handleClick} />
      <div className="stack-container">
        <div>
          {stack.map((e) => {
            return <StackBtn content={e} key={stack.indexOf(e)} />;
          })}
        </div>
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
  github: PropTypes.string,
  route: PropTypes.string,
  website: PropTypes.string,
  id: PropTypes.number,
  stack: PropTypes.arrayOf(PropTypes.string),
};
