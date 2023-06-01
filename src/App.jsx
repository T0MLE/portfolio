import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Cursor from "./components/cursor";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import { useContext} from "react";
import WFC from "./pages/WFC/WFC";
import WonderMatch from "./pages/WonderMatch/WonderMatch";
import Mario from "./pages/Mario/Mario";
import TransitionContext from "./context/Transition";

function App() {
  const { transition } = useContext(TransitionContext);

  return (
    <>
      <div
        className={transition ? "transition transition-page" : "transition"}
      />
      <Navbar />
      <div className="App">
        <Cursor />

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
