import WM1 from "../../assets/wondermatch.png";
import WM2 from "../../assets/WM2.png";
import WM3 from "../../assets/WM3.png";
import WM4 from "../../assets/WM4.png";
import WM5 from "../../assets/WM5.png";
import video from "../../assets/video.mp4";
import "./WonderMatch.scss";
// import { useEffect } from "react";

function WonderMatch() {
  // useEffect(() => {
  //   const scrollInterval = setInterval(() => {
  //     const windowHeight = window.innerHeight;
  //     const scrollDistance = windowHeight * 0.8;
  //     const currentPosition = window.pageYOffset || document.documentElement.scrollTop;

  //       window.scrollTo(0, currentPosition + scrollDistance);

  //   }, 5000);

  //   return () => clearInterval(scrollInterval);
  // }, []);

  return (
    <div className="WM">
      <div className="cards-container">
        <div className="image-container img1">
          {" "}
          <img src={WM1} alt="" />
          <p>
            Wonder Match est le fruit d&apos;un Hackaton organisé par la Wild
            Code School. Le principe était de créer un site en 24h sur le thème
            des vacances. L&apos;idée de l&apos;app est de matcher avec des
            destinations en fonction d&apos;images qui les représentent et
            d&apos;afficher des activités à y faire.
          </p>
        </div>
        <div className="image-container img2">
          <img src={WM2} alt="" />
          <p>
            Dans un premier temps, l&apos;utilisateur doit sélectioner les
            continents dans lesquels il souhaite voyager.
          </p>
        </div>
        <div className="image-container img3">
          {" "}
          <img src={WM3} alt="" />
          <p>
            En suite, une destination est proposée avec plusieurs images la
            représentant. L&apos;utilisateur a le choix de liker la destination
            ou de la passer.
          </p>
        </div>
        <div className="image-container img4">
          {" "}
          <img src={WM4} alt="" />
          <p>
            Toutes les destinations avec lesquelles l&apos;utilisateur a matché
            sont accessibles dans un onglet dédié.
          </p>
        </div>
        <div className="image-container img5">
          {" "}
          <img src={WM5} alt="" />
          <p>
            En cliquant sur une destination, Wonder Match propose une liste de
            trois activités à y faire.
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
            Visiter le Github du projet
          </a>
        </div>
      </div>
    </div>
  );
}

export default WonderMatch;
