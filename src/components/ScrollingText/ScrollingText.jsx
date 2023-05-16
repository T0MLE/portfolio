import { useEffect, useState } from "react";
import "./scrollingtext.scss";

function ScrollingText() {
  const [pos, setPos] = useState(-3000);
  const handleScroll = () => {
    setPos(-3000 + window.scrollY );
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, [pos]);

  return (
    <div className="scrollingtext-container">
      <div style={{ left: pos }}>
        PROJECTS * PROJECTS * PROJECTS * PROJECTS * PROJECTS * PROJECTS *
        PROJECTS * PROJECTS * PROJECTS * PROJECTS * PROJECTS * PROJECTS *
        PROJECTS * PROJECTS * PROJECTS * PROJECTS * PROJECTS * PROJECTS *
        PROJECTS * PROJECTS * PROJECTS * PROJECTS * PROJECTS * PROJECTS *
      </div>
    </div>
  );
}

export default ScrollingText;
