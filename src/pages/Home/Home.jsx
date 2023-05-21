import Contact from "../../components/Contact/Contact";
import Header from "../../components/Header/Header";
import Projects from "../../components/Projects/Projects";
import Skills from "../../components/Skills/Skills";
import "./home.scss";

function Home() {
  return (
    <div className="home-container">
      <Header />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
}

export default Home;
