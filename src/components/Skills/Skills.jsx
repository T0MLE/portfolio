import "./skills.scss";

import { useEffect, useRef } from "react";
import {
  Engine,
  World,
  Bodies,
  Render,
  Events,
  Matter,
  Mouse,
  MouseConstraint,
  Runner,
} from "matter-js";

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

function Skills() {
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
        pixelRatio: 2,
        wireframes: false,
        background: "transparent",
      },
    });

    const ground = Bodies.rectangle(
      canvasRef.current.offsetWidth / 2 + 160,
      canvasRef.current.offsetHeight + 60,
      canvasRef.current.offsetWidth + 320,
      160,
      { render: { fillStyle: "transparent" }, isStatic: true }
    );
    var wallLeft = Bodies.rectangle(
      -80,
      canvasRef.current.offsetHeight / 2,
      160,
      canvasRef.current.offsetHeight,
      { isStatic: true }
    );
    var wallRight = Bodies.rectangle(
      canvasRef.current.offsetWidth + 80,
      canvasRef.current.offsetHeight / 2,
      160,
      1200,
      { isStatic: true }
    );
    var roof = Bodies.rectangle(
      canvasRef.current.offsetWidth / 2 + 160,
      -80,
      canvasRef.current.offsetWidth + 320,
      160,
      { isStatic: true }
    );
    const radius = 50;
    // Créez la div qui tombe
    const html = Bodies.rectangle(230, 0, 300, 100, {
      chamfer: { radius: radius },
      render: {
        sprite: { texture: imghtml, overflow: "hidden", radius: radius },
      },
    });

    const css = Bodies.rectangle(130, 0, 300, 100, {
      chamfer: { radius: radius },
      render: {
        sprite: { texture: imgcss, overflow: "hidden", radius: radius },
      },
    });

    const js = Bodies.rectangle(430, 0, 300, 100, {
      chamfer: { radius: radius },
      render: {
        sprite: { texture: imgjs, overflow: "hidden", radius: radius },
      },
    });

    const react = Bodies.rectangle(330, 0, 300, 100, {
      chamfer: { radius: radius },
      render: {
        sprite: { texture: imgreact, overflow: "hidden", radius: radius },
      },
    });

    const node = Bodies.rectangle(330, 0, 300, 100, {
      chamfer: { radius: radius },
      render: {
        sprite: { texture: imgnode, overflow: "hidden", radius: radius },
      },
    });

    const express = Bodies.rectangle(530, 0, 350, 100, {
      chamfer: { radius: radius },
      render: {
        sprite: { texture: imgexpress, overflow: "hidden", radius: radius },
      },
    });

    const git = Bodies.rectangle(230, 150, 300, 100, {
      chamfer: { radius: radius },
      render: {
        sprite: { texture: imggit, overflow: "hidden", radius: radius },
      },
    });

    const figma = Bodies.rectangle(330, 150, 300, 100, {
      chamfer: { radius: radius },
      render: {
        sprite: { texture: imgfigma, overflow: "hidden", radius: radius },
      },
    });

    const coffee = Bodies.rectangle(430, 150, 400, 100, {
      chamfer: { radius: radius },
      render: {
        sprite: { texture: imgcoffee, overflow: "hidden", radius: radius },
      },
    });

    const mysql = Bodies.rectangle(630, 150, 300, 100, {
      chamfer: { radius: radius },
      render: {
        sprite: { texture: imgmysql, overflow: "hidden", radius: radius },
      },
    });

    const skills = Bodies.rectangle(530, 0, 300, 100, {
      chamfer: { radius: radius },
      render: {
        sprite: { texture: imgskills, overflow: "hidden", radius: radius },
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

    var mouse = Mouse.create(render.canvas),
      mouseConstraint = MouseConstraint.create(engine, {
        mouse: mouse,
        constraint: {
          stiffness: 0.2,
          render: {
            visible: false,
          },
        },
      });

    World.add(world, mouseConstraint);

    // keep the mouse in sync with rendering
    render.mouse = mouse;

    // Allow page scrolling in matter.js window
    mouse.element.removeEventListener("mousewheel", mouse.mousewheel);
    mouse.element.removeEventListener("DOMMouseScroll", mouse.mousewheel);

    // Detect clicks vs. drags
    let click = false;

    document.addEventListener("mousedown", () => (click = true));
    document.addEventListener("mousemove", () => (click = false));
    document.addEventListener("mouseup", () =>
      console.log(click ? "click" : "drag")
    );

    // Create a On-Mouseup Event-Handler
    Events.on(mouseConstraint, "mouseup", function (event) {
      var mouseConstraint = event.source;
      var bodies = engine.world.bodies;
      if (!mouseConstraint.bodyB) {
        for (let i = 0; i < bodies.length; i++) {
          var body = bodies[i];
          // Check if clicked or dragged
          if (click === true) {
            if (
              Matter.Bounds.contains(
                body.bounds,
                mouseConstraint.mouse.position
              )
            ) {
              var bodyUrl = body.url;
              console.log("Body.Url >> " + bodyUrl);
              // Hyperlinking feature
              if (bodyUrl != undefined) {
                //window.location.href = bodyUrl;
                window.open(bodyUrl, "_blank");
                console.log("Hyperlink was opened");
              }
              break;
            }
          }
        }
      }
    });

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

export default Skills;
