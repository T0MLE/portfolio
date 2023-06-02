import "./about.scss";
import { useContext } from "react";

import TransitionContext from "../../context/Transition";

import css from "../../assets/css.svg";
import html from "../../assets/html.svg";
import js from "../../assets/js.svg";
import mysql from "../../assets/mysql.svg";
import node from "../../assets/node.svg";
import react from "../../assets/react.svg";
import figma from "../../assets/figma.svg";
import sass from "../../assets/sass.svg";
import git from "../../assets/git.svg";
import coffee from "../../assets/coffee.svg";

function About() {
  const { language } = useContext(TransitionContext);

  const skills = [
    { title: "HTML", img: html },
    { title: "CSS", img: css },
    { title: "JavaScript", img: js },
    { title: "MySQL", img: mysql },
    { title: "Node.js", img: node },
    { title: "React", img: react },
    { title: "Figma", img: figma },
    { title: "Sass", img: sass },
    { title: "Git / Github", img: git },
    { title: language === 'fr' ? "non pas java, le café, je bois beaucoup de café" : "not java, coffee, I drink a lot of coffee", img: coffee },
  ];

  const aboutFr =
    "Bonjour, je suis Tom (comme vous l'avez probablement deviné grâce à l'énorme en-tête). Il y a quelques années, pendant mes études de linguistique, j'ai découvert ma passion pour le développement web. Aujourd'hui, j'essaie de concrétiser cette passion en suivant une formation de développement web fullstack. Dans cette optique, je suis à la recherche d'une alternance en contrat d'apprentissage pour un poste de développeur frontend ou fullstack à partir de septembre 2023. N'hésitez pas à explorer mon portfolio pour en savoir plus sur mon parcours et mes réalisations.";
  const aboutEng =
  "Hello, I'm Tom (as you probably guessed from the huge header). A few years ago, during my linguistics studies, I discovered my passion for web development. Today, I am trying to pursue this passion by undergoing a full-stack web development training. With this goal in mind, I am searching for an apprenticeship opportunity as a frontend or full-stack developer starting from September 2023. Feel free to explore my portfolio to learn more about my achievements."
  return (
    <div className="about-container">
      <div className="about">{language == 'fr' ? aboutFr : aboutEng}</div>
      <div className="skills-title">
        <h2>{language === 'fr' ? "Petite liste de mes skills." : "My skill set" }</h2>
        <div className="skills">
          {skills.map((e) => {
            return (
              <div className="skill" key={skills.indexOf(e)}>
                <img src={e.img} alt="" />
                <span>{e.title}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default About;
