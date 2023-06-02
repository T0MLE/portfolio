import "./header.scss";
import gsap from "gsap";
import { useEffect } from "react";
import { useContext } from "react";
import TransitionContext from "../../context/Transition";

function Header() {
  const { language, isClicked, setIsClicked, setLanguage } = useContext(TransitionContext);

  const handleLang = () => {
    setIsClicked(true);
    setTimeout(() => {
      setIsClicked(false);
    }, 1000);
    setTimeout(() => {
      if (language == "fr") {
        setLanguage("eng");
      } else {
        setLanguage("fr");
      }
    }, 700);
  };

  const textFr =
    "Actuellement en formation pour devenir développeur web Fullstack, je recherche une alternance à partir de Septembre 2023.";
  const textEng =
    "Currently pursuing a fullstack web developement program, I am looking for an apprenticeship opportunity starting in September 2023.";

  const roleFr = (
    <h2 className="my-text">
      <span className="word">
        <span className="char">D</span>
        <span className="char">É</span>
        <span className="char">V</span>
        <span className="char">E</span>
        <span className="char">L</span>
        <span className="char">O</span>
        <span className="char">P</span>
        <span className="char">P</span>
        <span className="char">E</span>
        <span className="char">U</span>
        <span className="char">R</span>
      </span>
      <span className="word">
        <span className="char">F</span>
        <span className="char">U</span>
        <span className="char">L</span>
        <span className="char">L</span>
        <span className="char">S</span>
        <span className="char">T</span>
        <span className="char">A</span>
        <span className="char">C</span>
        <span className="char">K</span>
      </span>
    </h2>
  );

  const roleEng = (
    <h2 className="my-text">
      <span className="word">
        <span className="char">F</span>
        <span className="char">U</span>
        <span className="char">L</span>
        <span className="char">L</span>
        <span className="char">S</span>
        <span className="char">T</span>
        <span className="char">A</span>
        <span className="char">C</span>
        <span className="char">K</span>
      </span>
      <span className="word">
        <span className="char">D</span>
        <span className="char">E</span>
        <span className="char">V</span>
        <span className="char">E</span>
        <span className="char">L</span>
        <span className="char">O</span>
        <span className="char">P</span>
        <span className="char">E</span>
        <span className="char">R</span>
      </span>
    </h2>
  );

  // useEffect(() => {
  //   setTimeout(() => {
  //     gsap.to(".char", {
  //       y: 0,
  //       stagger: 0.02,
  //       duration: 0.1,
  //     });
  //   }, 300);

  //   gsap.to(".charName", {
  //     y: 0,
  //     stagger: 0.02,
  //     duration: 0.1,
  //   });
  //   // gsap.to("#desc", {
  //   //   delay: 0.2,
  //   //   duration: 0.1,
  //   //   opacity: 1,
  //   // });
  // }, []);

  useEffect(() => {
    gsap.to(".char", {
      y: 0,
      stagger: 0.02,
      duration: 0.04,
    });
    gsap.to(".charName", {
      y: 0,
      stagger: 0.03,
      duration: 0.2,
    });
    gsap.to("#desc", {
      delay: 0.2,
      duration: 0.1,
      opacity: 1,
    });
    gsap.to("#lang", {
      delay: 0.5,
      duration: 0.1,
      opacity: 1,
    });
  }, [language]);

  useEffect(() => {
    if (isClicked) {
      gsap.to(".char", {
        y: -300,
        stagger: 0.02,
        duration: 0.04,
      });
      gsap.to("#desc", {
        delay: 0,
        duration: 0.001,
        opacity: 0,
      });
    }
  }, [isClicked]);

  return (
    <div className="header">
      {language == "fr" ? roleFr : roleEng}

      <h1 className="my-text">
        <span className="word">
          {" "}
          <span className="charName">T</span>
          <span className="charName">O</span>
          <span className="charName">M</span>
        </span>
        <span className="word">
          {" "}
          <span className="charName">L</span>
          <span className="charName">E</span>
        </span>
        <span className="word">
          {" "}
          <span className="charName">L</span>
          <span className="charName">A</span>
          <span className="charName">U</span>
          <span className="charName">R</span>
          <span className="charName">A</span>
          <span className="charName">I</span>
          <span className="charName">N</span>
        </span>
      </h1>
      <p id="desc">{language == "fr" ? textFr : textEng}</p>
      <span onClick={handleLang} id='lang'>{language === "fr" ? "hello ?" : "bonjour ?"}</span>
    </div>
  );
}

export default Header;
