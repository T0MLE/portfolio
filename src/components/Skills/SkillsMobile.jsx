import "./skills.scss";

import imghtml from "../../assets/html.svg";
import imgcss from "../../assets/css.svg";
import imgjs from "../../assets/js.svg";
import imgreact from "../../assets/react.svg";
import imggit from "../../assets/git.svg";
import imgfigma from "../../assets/figma.svg";
import imgnode from "../../assets/node.svg";
import imgexpress from "../../assets/express.svg";
import imgcoffee from "../../assets/coffee.svg";
import imgmysql from "../../assets/mysql.svg";
import imgskills from "../../assets/skills.svg";

function SkillsMobile() {
  const skills = [
    imgskills,
    imghtml,
    imgcss,
    imgjs,
    imgreact,
    imggit,
    imgfigma,
    imgnode,
    imgexpress,
    imgcoffee,
    imgmysql,
  ];
  return (
    <div className="skills-container">
      {skills.map((e) => {
        return <img src={e} key={skills.indexOf(e)} />;
      })}
    </div>
  );
}

export default SkillsMobile;
