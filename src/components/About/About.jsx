import "./about.scss";
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
    { title: "non pas java, le café, je bois beaucoup de café", img: coffee },
  ];

  const about =
    "Bonjour, je suis Tom (comme vous l'avez probablement deviné grâce à l'énorme en-tête). Il y a quelques années, pendant mes études de linguistique, j'ai découvert ma passion pour le développement web. Aujourd'hui, j'essaie de concrétiser cette passion en suivant une formation de développement web fullstack. Dans cette optique, je suis à la recherche d'une alternance en contrat d'apprentissage pour un poste de développeur frontend ou fullstack à partir de septembre 2023. N'hésitez pas à explorer mon portfolio pour en savoir plus sur mon parcours et mes réalisations.";

  return (
    <div className="about-container">
      <div className="about">{about}</div>
      <div className="skills-title">
        <h2>Petite liste de mes skills.</h2>
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
