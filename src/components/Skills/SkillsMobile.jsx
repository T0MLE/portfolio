// import "./skills.scss";

// import imghtml from "../../assets/html.svg";
// import imgcss from "../../assets/css.svg";
// import imgjs from "../../assets/js.svg";
// import imgreact from "../../assets/react.svg";
// import imggit from "../../assets/git.svg";
// import imgfigma from "../../assets/figma.svg";
// import imgnode from "../../assets/node.svg";
// import imgexpress from "../../assets/express.svg";
// import imgcoffee from "../../assets/coffee.svg";
// import imgmysql from "../../assets/mysql.svg";
// import imgskills from "../../assets/skills.svg";

// function SkillsMobile() {
//   const skills = [
//     imgskills,
//     imghtml,
//     imgcss,
//     imgjs,
//     imgreact,
//     imggit,
//     imgfigma,
//     imgnode,
//     imgexpress,
//     imgcoffee,
//     imgmysql,
//   ];
//   return (
//     <div className="skills-container">
//       {skills.map((e) => {
//         return <img src={e} key={skills.indexOf(e)} />;
//       })}
//     </div>
//   );
// }

// export default SkillsMobile;

import "./skills.scss";

import { useEffect, useRef } from "react";
import { Engine, World, Bodies, Render, Runner } from "matter-js";

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
  const canvasRef = useRef(null);

  useEffect(() => {
    // Créez un moteur Matter.js
    const engine = Engine.create();
    const { world } = engine;

    // Créez un rendu pour afficher les objets physiques
    const render = Render.create({
      element: canvasRef.current,
      engine: engine,
      options: {
        width: canvasRef.current.offsetWidth,
        height: canvasRef.current.offsetHeight,
        pixelRatio: 3,
        wireframes: false,
        background: "transparent",
      },
    });

    const ground = Bodies.rectangle(
      canvasRef.current.offsetWidth / 2 + 160,
      canvasRef.current.offsetHeight + 79,
      canvasRef.current.offsetWidth + 320,
      160,
      { render: { fillStyle: "transparent" }, isStatic: true }
    );
    const wallLeft = Bodies.rectangle(
      -80,
      canvasRef.current.offsetHeight / 2,
      160,
      canvasRef.current.offsetHeight,
      { isStatic: true }
    );
    const wallRight = Bodies.rectangle(
      canvasRef.current.offsetWidth + 80,
      canvasRef.current.offsetHeight / 2,
      160,
      1200,
      { isStatic: true }
    );
    const roof = Bodies.rectangle(
      canvasRef.current.offsetWidth / 2 + 160,
      -80,
      canvasRef.current.offsetWidth + 320,
      160,
      { isStatic: true }
    );
    const radius = 50;
    // Créez la div qui tombe
    let html = Bodies.rectangle(100, 60, 170, 64, {
      chamfer: { radius: radius },
      render: {
        sprite: {
          texture: imghtml,
          xScale: 0.6,
          yScale: 0.6,
          overflow: "hidden",
          radius: radius,
        },
      },
    });

    const css = Bodies.rectangle(160, 60, 190, 64, {
      chamfer: { radius: radius },
      render: {
        sprite: {
          texture: imgcss,
          xScale: 0.6,
          yScale: 0.6,
          overflow: "hidden",
          radius: radius,
        },
      },
    });

    const js = Bodies.rectangle(200, 70, 170, 64, {
      chamfer: { radius: radius },
      render: {
        sprite: {
          texture: imgjs,
          xScale: 0.6,
          yScale: 0.6,
          overflow: "hidden",
          radius: radius,
        },
      },
    });

    const react = Bodies.rectangle(200, 200, 170, 64, {
      chamfer: { radius: radius },
      render: {
        sprite: {
          texture: imgreact,
          xScale: 0.6,
          yScale: 0.6,
          overflow: "hidden",
          radius: radius,
        },
      },
    });

    const node = Bodies.rectangle(300, 200, 170, 64, {
      chamfer: { radius: radius },
      render: {
        sprite: {
          texture: imgnode,
          xScale: 0.6,
          yScale: 0.6,
          overflow: "hidden",
          radius: radius,
        },
      },
    });

    const express = Bodies.rectangle(400, 60, 170, 64, {
      chamfer: { radius: radius },
      render: {
        sprite: {
          texture: imgexpress,
          xScale: 0.6,
          yScale: 0.6,
          overflow: "hidden",
          radius: radius,
        },
      },
    });

    const git = Bodies.rectangle(230, 150, 280, 64, {
      chamfer: { radius: radius },
      render: {
        sprite: {
          texture: imggit,
          xScale: 0.6,
          yScale: 0.6,
          overflow: "hidden",
          radius: radius,
        },
      },
    });

    const figma = Bodies.rectangle(110, 200, 170, 64, {
      chamfer: { radius: radius },
      render: {
        sprite: {
          texture: imgfigma,
          xScale: 0.6,
          yScale: 0.6,
          overflow: "hidden",
          radius: radius,
        },
      },
    });

    const coffee = Bodies.rectangle(240, 100, 280, 64, {
      chamfer: { radius: radius },
      render: {
        sprite: {
          texture: imgcoffee,
          xScale: 0.6,
          yScale: 0.6,
          overflow: "hidden",
          radius: radius,
        },
      },
    });

    const mysql = Bodies.rectangle(80, 200, 170, 64, {
      chamfer: { radius: radius },
      render: {
        sprite: {
          texture: imgmysql,
          xScale: 0.6,
          yScale: 0.6,
          overflow: "hidden",
          radius: radius,
        },
      },
    });

    const skills = Bodies.rectangle(110, 60, 170, 64, {
      chamfer: { radius: radius },
      render: {
        sprite: {
          texture: imgskills,
          xScale: 0.6,
          yScale: 0.6,
          overflow: "hidden",
          radius: radius,
        },
      },
    });

    World.add(engine.world, [
      ground,
      wallLeft,
      wallRight,
      roof,
      css,
      html,
      js,
      react,
      node,
      express,
      git,
      figma,
      coffee,
      mysql,
      skills,
    ]);

    // Lancez le rendu
    Render.run(render);

    // Lancez le moteur
    Runner.run(engine);
    // Engine.run(engine);

    // Nettoyage lors de la suppression du composant
    return () => {
      Render.stop(render);
      World.clear(world);
      Engine.clear(engine);
    };
  }, []);

  return <div className="skills-container" ref={canvasRef}></div>;
}

export default SkillsMobile;
