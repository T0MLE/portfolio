import { useState } from "react";
import Draggable from "react-draggable";
import Project from "../project/Project";
import ScrollingText from "../ScrollingText/ScrollingText";
import "./projects.scss";
import WFC from "../../assets/WFC.png";
import mario from "../../assets/mario.png";
import wonder from "../../assets/wondermatch.png";
import portfolio from "../../assets/portfolio.png";

function Projects() {
  const text =
    "PROJECTS * PROJECTS * PROJECTS * PROJECTS * PROJECTS * PROJECTS * PROJECTS * PROJECTS * PROJECTS * PROJECTS * PROJECTS * PROJECTS * PROJECTS * PROJECTS * PROJECTS * PROJECTS * PROJECTS * PROJECTS * PROJECTS * PROJECTS * PROJECTS * PROJECTS * PROJECTS * PROJECTS *";
  const [zIndex, setZIndex] = useState({
    div1: 4,
    div2: 1,
    div3: 2,
    div4: 3,
    div5: 1,
  });

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
            <div className="handle" style={{ backgroundColor: "#F6F5F1" }}>
              <div className="dots">
                {" "}
                <div className="dot" />
                <div className="dot" />
                <div className="dot" />
              </div>
              Wild_Fitness_Club.png
            </div>
          </strong>
          <div className="projet-wrapper">
            {" "}
            <Project
              img={WFC}
              stack={["HTML", "SCSS", "React"]}
              github={"https://github.com/T0MLE/WCS-Projet2"}
              website={
                "https://6474c943c137bd1c26d896a7--wonderful-meerkat-5de761.netlify.app/"
              }
            />
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
            <div className="handle" style={{ backgroundColor: "#F6F5F1" }}>
              <div className="dots">
                {" "}
                <div className="dot" />
                <div className="dot" />
                <div className="dot" />
              </div>
              CV_MARIO.png
            </div>
          </strong>
          <div className="projet-wrapper">
            <Project
              img={mario}
              stack={["HTML", "CSS", "JavaScript"]}
              github={"https://github.com/T0MLE/WCS-project1"}
              website={"https://t0mle.github.io/WCS-project1/"}
            />
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
            <div className="handle" style={{ backgroundColor: "#F6F5F1" }}>
              <div className="dots">
                {" "}
                <div className="dot" />
                <div className="dot" />
                <div className="dot" />
              </div>
              Wonder_Match.png
            </div>
          </strong>
          <div className="projet-wrapper">
            <Project
              img={wonder}
              stack={["HTML", "CSS", "React"]}
              github={"https://github.com/T0MLE/Hackaton-1"}
            />
          </div>
        </div>
      </Draggable>
      <Draggable
        handle="strong"
        bounds="parent"
        onDrag={() => handleDrag("div4")}
      >
        <div
          className="project-card card4"
          style={{ zIndex: `${zIndex["div4"]}` }}
        >
          <strong>
            <div className="handle" style={{ backgroundColor: "#F6F5F1" }}>
              <div className="dots">
                {" "}
                <div className="dot" />
                <div className="dot" />
                <div className="dot" />
              </div>
              Mon_incroyable_portfolio.png
            </div>
          </strong>
          <div className="projet-wrapper">
            <Project
              img={portfolio}
              stack={["HTML", "SCSS", "React"]}
              github={"https://github.com/T0MLE/portfolio"}
            />
          </div>
        </div>
      </Draggable>
      <div className="passioncss">
        <Draggable
          handle="strong"
          bounds=".draggable-container"
          onDrag={() => handleDrag("div5")}
        >
          <div
            className="project-card card5"
            style={{ zIndex: `${zIndex["div4"]}` }}
          >
            <strong>
              <div className="handle" style={{ backgroundColor: "#F6F5F1" }}>
                <div className="dots">
                  {" "}
                  <div className="dot" />
                  <div className="dot" />
                  <div className="dot" />
                </div>
                Passion.png
              </div>
            </strong>
            <div className="imgpassion">
              <span>CSS IS</span>
              <span>MY PASS</span>
            </div>
          </div>
        </Draggable>
        <div className="text-overflow">ION</div>
      </div>
    </div>
  );

  const mobile = () => (
    <div className="projects-container-mobile">
      <div className="projet-wrapper">
        <div className="handle" style={{ backgroundColor: "#F6F5F1" }}>
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
      <div className="projet-wrapper">
        <div className="handle" style={{ backgroundColor: "#F6F5F1" }}>
          <div className="dots">
            {" "}
            <div className="dot" />
            <div className="dot" />
            <div className="dot" />
          </div>
          CV_Mario.png
        </div>
        <Project img={mario} stack={["HTML", "CSS", "Vanilla JS"]} />
      </div>
      <div className="projet-wrapper">
        <div className="handle" style={{ backgroundColor: "#F6F5F1" }}>
          <div className="dots">
            {" "}
            <div className="dot" />
            <div className="dot" />
            <div className="dot" />
          </div>
          Wonder_Match.png
        </div>
        <Project img={wonder} stack={["HTML", "CSS", "React"]} />
      </div>
      <div className="projet-wrapper">
        <div className="handle" style={{ backgroundColor: "#F6F5F1" }}>
          <div className="dots">
            {" "}
            <div className="dot" />
            <div className="dot" />
            <div className="dot" />
          </div>
          Mon_incroyable_portfolio.png
        </div>
        <Project img={portfolio} stack={["HTML", "SCSS", "React"]} />
      </div>
    </div>
  );

  return (
    <>
      <ScrollingText content={text} direction="left" />
      {window.innerWidth >= 701 ? desktop() : mobile()}
    </>
  );
}

export default Projects;
