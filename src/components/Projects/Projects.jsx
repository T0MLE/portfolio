import { useState } from "react";
import Draggable from "react-draggable";
import Project from "../project/Project";
import ScrollingText from "../ScrollingText/ScrollingText";
import "./projects.scss";
import WFC from "../../assets/WFC.png";
import mario from "../../assets/mario.png";
import wonder from "../../assets/wondermatch.png";
import { useNavigate } from "react-router-dom";

function Projects() {
  const text =
    "PROJECTS * PROJECTS * PROJECTS * PROJECTS * PROJECTS * PROJECTS * PROJECTS * PROJECTS * PROJECTS * PROJECTS * PROJECTS * PROJECTS * PROJECTS * PROJECTS * PROJECTS * PROJECTS * PROJECTS * PROJECTS * PROJECTS * PROJECTS * PROJECTS * PROJECTS * PROJECTS * PROJECTS *";
  const [zIndex, setZIndex] = useState({ div1: 3, div2: 2, div3: 1 });

  const handleDrag = (divID) => {
    setZIndex((prevState) => {
      let arr = Object.values(zIndex);
      let max = Math.max(...arr);
      return {
        ...prevState,
        [divID]: max + 1,
      };
    });
  };

  const navigate = useNavigate();

  const handleClick = (route) => {
    navigate(route);
  };

  const desktop = () => (
    <div className="draggable-container">
      <Draggable
        handle="strong"
        bounds="parent"
        onDrag={() => handleDrag("div1")}
      >
        <div
          className="project-card card1"
          style={{ zIndex: `${zIndex["div1"]}` }}
        >
          <strong>
            <div className="handle" style={{ backgroundColor: "#EBFDF8" }}>
              <div className="dots">
                {" "}
                <div className="dot" />
                <div className="dot" />
                <div className="dot" />
              </div>
              Wild_Fitness_Club.png
            </div>
          </strong>
          <div
            className="projet-wrapper"
            onClick={() => handleClick("/wildfitnessclub")}
          >
            {" "}
            <Project img={WFC} stack={["HTML", "SCSS", "React"]} />
          </div>
        </div>
      </Draggable>
      <Draggable
        handle="strong"
        bounds="parent"
        onDrag={() => handleDrag("div2")}
      >
        <div
          className="project-card card2"
          style={{ zIndex: `${zIndex["div2"]}` }}
        >
          <strong>
            <div className="handle" style={{ backgroundColor: "#fffbe0" }}>
              <div className="dots">
                {" "}
                <div className="dot" />
                <div className="dot" />
                <div className="dot" />
              </div>
              CV_MARIO.png
            </div>
          </strong>
          <div
            className="projet-wrapper"
            onClick={() => handleClick("/cvmario")}
          >
            <Project img={mario} stack={["HTML", "CSS", "Vanilla JS"]} />
          </div>
        </div>
      </Draggable>
      <Draggable
        handle="strong"
        bounds="parent"
        onDrag={() => handleDrag("div3")}
      >
        <div
          className="project-card card3"
          style={{ zIndex: `${zIndex["div3"]}` }}
        >
          <strong>
            <div className="handle" style={{ backgroundColor: "#F8EAFF" }}>
              <div className="dots">
                {" "}
                <div className="dot" />
                <div className="dot" />
                <div className="dot" />
              </div>
              Wonder_Match.png
            </div>
          </strong>
          <div
            className="projet-wrapper"
            onClick={() => handleClick("/wondermatch")}
          >
            <Project img={wonder} stack={["HTML", "CSS", "React"]} />
          </div>
        </div>
      </Draggable>
    </div>
  )
    
  

  const mobile = () => (
    <div className="projects-container-mobile">
    <div
      className="projet-wrapper"
      onClick={() => handleClick("/wildfitnessclub")}
    >
      <div className="handle" style={{ backgroundColor: "#EBFDF8" }}>
        <div className="dots">
          {" "}
          <div className="dot" />
          <div className="dot" />
          <div className="dot" />
        </div>
        Wild_Fitness_Club.png
      </div>
      <Project img={WFC} stack={["HTML", "SCSS", "React"]} />
    </div>
    <div className="projet-wrapper" onClick={() => handleClick("/cvmario")}>
      <div className="handle" style={{ backgroundColor: "#EBFDF8" }}>
        <div className="dots">
          {" "}
          <div className="dot" />
          <div className="dot" />
          <div className="dot" />
        </div>
        Wild_Fitness_Club.png
      </div>
      <Project img={mario} stack={["HTML", "CSS", "Vanilla JS"]} />
    </div>
    <div
      className="projet-wrapper"
      onClick={() => handleClick("/wondermatch")}
    >
      <div className="handle" style={{ backgroundColor: "#EBFDF8" }}>
        <div className="dots">
          {" "}
          <div className="dot" />
          <div className="dot" />
          <div className="dot" />
        </div>
        Wild_Fitness_Club.png
      </div>
      <Project img={wonder} stack={["HTML", "CSS", "React"]} />
    </div>
  </div>
  )
   
  
  return (
    <>
      <ScrollingText content={text} direction="left" />
      {window.innerWidth >= 701 ? desktop()  :  mobile() }
    </>
  );
}

export default Projects;
