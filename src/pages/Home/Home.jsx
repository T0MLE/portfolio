import Header from "../../components/Header/Header";
import Projects from "../../components/Projects/Projects";
import ScrollingText from "../../components/ScrollingText/ScrollingText";
import "./home.scss";

function Home() {
  const text1 =
    "WORK TOGETHER * WORK TOGETHER * WORK TOGETHER * WORK TOGETHER * WORK TOGETHER * WORK TOGETHER * WORK TOGETHER * WORK TOGETHER * WORK TOGETHER * WORK TOGETHER * WORK TOGETHER * WORK TOGETHER * WORK TOGETHER * ";
  const text2 =
    "GET IN TOUCH * GET IN TOUCH * GET IN TOUCH * GET IN TOUCH * GET IN TOUCH * GET IN TOUCH * GET IN TOUCH * GET IN TOUCH * GET IN TOUCH * GET IN TOUCH * GET IN TOUCH * GET IN TOUCH * ";

  return (
    <div className="home-container">
      <Header />
      <Projects />
      <ScrollingText content={text1} direction="right" />
      <ScrollingText content={text2} direction="left" />
    </div>
  );
}

export default Home;
