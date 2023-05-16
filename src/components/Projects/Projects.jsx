import { useState } from "react";
import Draggable from "react-draggable";
import Project from "../project/Project";
import ScrollingText from "../ScrollingText/ScrollingText";
import "./projects.scss";

function Projects() {
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

  return (
    <>
      <ScrollingText />
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
              <div className="handle">
                <div className="dot" />
                <div className="dot" />
                <div className="dot" />
              </div>
            </strong>
            <Project />
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
              <div className="handle">
                <div className="dot" />
                <div className="dot" />
                <div className="dot" />
              </div>
            </strong>
            <Project />
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
              <div className="handle">
                <div className="dot" />
                <div className="dot" />
                <div className="dot" />
              </div>
            </strong>
            <Project />
          </div>
        </Draggable>
      </div>
    </>
  );
}

export default Projects;
