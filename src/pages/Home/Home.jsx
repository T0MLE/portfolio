import Contact from "../../components/Contact/Contact";
import Header from "../../components/Header/Header";
import Projects from "../../components/Projects/Projects";
import "./home.scss";

function Home() {
 

  return (
    <div className="home-container">
      <Header />
      <Projects />
      <Contact />
    </div>
  );
}

export default Home;
