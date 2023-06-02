import WM1 from "../../assets/wondermatch.png";
import WM2 from "../../assets/WM2.png";
import WM3 from "../../assets/WM3.png";
import WM4 from "../../assets/WM4.png";
import WM5 from "../../assets/WM5.png";
import video from "../../assets/video.mp4";
import "./WonderMatch.scss";

import { useContext, useEffect } from "react";

import TransitionContext from "../../context/Transition";
// import { useEffect } from "react";

function WonderMatch() {
  const { language } = useContext(TransitionContext);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="WM">
      <div className="cards-container">
        <div className="image-container img1">
          {" "}
          <img src={WM1} alt="" />
          <p>
            {language == "fr"
              ? "Wonder Match est le fruit d'un Hackaton organisé par la Wild Code School. Le principe était de créer un site en 24h sur le thème des vacances. L'idée de l'app est de matcher avec des destinations en fonction d'images qui les représentent et d'afficher des activités à y faire."
              : "Wonder Match is the result of a Hackathon organized by Wild Code School. The concept was to create a website within 24 hours with a vacation theme. The idea behind the app is to match destinations based on images that represent them and display activities to do there."}
          </p>
        </div>
        <div className="image-container img2">
          <img src={WM2} alt="" />
          <p>
            {language === "fr"
              ? "Dans un premier temps, l'utilisateur doit sélectioner les continents dans lesquels il souhaite voyager."
              : "First, the user needs to select the continents they wish to travel to."}
          </p>
        </div>
        <div className="image-container img3">
          {" "}
          <img src={WM3} alt="" />
          <p>
            {language === "fr"
              ? "En suite, une destination est proposée avec plusieurs images la représentant. L'utilisateur a le choix de liker la destination ou de la passer."
              : "Next, a destination is presented with several images representing it. The user has the choice to like the destination or pass on it."}
          </p>
        </div>
        <div className="image-container img4">
          {" "}
          <img src={WM4} alt="" />
          <p>
            {language === "fr"
              ? "Toutes les destinations avec lesquelles l'utilisateur a matché sont accessibles dans un onglet dédié."
              : "All the destinations with which the user has matched are accessible in a dedicated tab."}
          </p>
        </div>
        <div className="image-container img5">
          {" "}
          <img src={WM5} alt="" />
          <p>
            {language === "fr"
              ? "En cliquant sur une destination, Wonder Match propose une liste de trois activités à y faire."
              : "By clicking on a destination, Wonder Match suggests a list of three activities to do there."}
          </p>
        </div>
        <div className="image-container img6">
          {" "}
          <video controls>
            <source src={video} />
          </video>
          <a
            href="https://github.com/T0MLE/Hackaton-1"
            target="_blank"
            rel="noreferrer"
          >
            {language === "fr"
              ? "Visiter le Github du projet"
              : "Visit the Github repository"}
          </a>
        </div>
      </div>
    </div>
  );
}

export default WonderMatch;
