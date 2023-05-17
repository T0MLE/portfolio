import { Route, Routes } from "react-router-dom";
import LocomotiveScroll from "locomotive-scroll";
import "./App.scss";
import Cursor from "./components/cursor";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import { useEffect, useRef } from "react";
import WFC from "./pages/WFC/WFC";
import WonderMatch from "./pages/WonderMatch/WonderMatch";
import Mario from "./pages/Mario/Mario";

function App() {
  const scrollRef = useRef();

  useEffect(() => {
    new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      lerp: 0.1,
    });
  }, []);

  return (
    <>
      <Cursor />
      <Navbar />
      <div ref={scrollRef}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/wildfitnessclub" element={<WFC />} />
          <Route path="/cvmario" element={<Mario />} />
          <Route path="/wondermatch" element={<WonderMatch />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
