import { Route, Routes } from "react-router-dom";
import LocomotiveScroll from "locomotive-scroll";
import "./App.scss";
import Cursor from "./components/cursor";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import { useEffect, useRef } from "react";

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
        </Routes>
      </div>
    </>
  );
}

export default App;
