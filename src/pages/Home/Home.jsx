import About from "../../components/About/About";
import Contact from "../../components/Contact/Contact";
import Header from "../../components/Header/Header";
import Projects from "../../components/Projects/Projects";
import LocomotiveScroll from "locomotive-scroll";

import "./home.scss";
// import { useLocation } from "react-router-dom";
import { useEffect, useRef } from "react";

function Home() {
  // const location = useLocation();
  const scrollRef = useRef();

  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      lerp: 0.1,
      smartphone: { smooth: false },
    });

    return () => {
      scroll.destroy();
    };
  }, []);

  return (
    <div className="home-container" ref={scrollRef}>
      <Header />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default Home;
