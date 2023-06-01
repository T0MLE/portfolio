import ScrollingText from "../ScrollingText/ScrollingText";
import "./contact.scss";
import shy from "../../assets/shy.svg";
import star from '../../assets/star-symbol.png'


function Contact() {
  const handleMouse = (e, element) => {
    const position = element.getBoundingClientRect();
    const x = e.pageX - position.left - position.width / 2;
    const y = e.pageY - position.top - position.height / 2;
    element.style.transform = "translate(" + x * 0.4 + "px, " + y * 0.5 + "px)";
  };

  const handleMouseOut = (element) => {
    element.style.transform = "translate(0px, 0px)";
  };

  const text1 =
    <>WORK TOGETHER <img style={{height : '5Opx', width : '50px'}} src={star}/> WORK TOGETHER <img style={{height : '5Opx', width : '50px'}} src={star}/> WORK TOGETHER <img style={{height : '5Opx', width : '50px'}} src={star}/> WORK TOGETHER <img style={{height : '5Opx', width : '50px'}} src={star}/> WORK TOGETHER <img style={{height : '5Opx', width : '50px'}} src={star}/> WORK TOGETHER <img style={{height : '5Opx', width : '50px'}} src={star}/> WORK TOGETHER <img style={{height : '5Opx', width : '50px'}} src={star}/> WORK TOGETHER <img style={{height : '5Opx', width : '50px'}} src={star}/> WORK TOGETHER <img style={{height : '5Opx', width : '50px'}} src={star}/> WORK TOGETHER <img style={{height : '5Opx', width : '50px'}} src={star}/> </>
  const text2 =
  <>GET IN TOUCH <img style={{height : '5Opx', width : '50px'}} src={star}/> GET IN TOUCH <img style={{height : '5Opx', width : '50px'}} src={star}/> GET IN TOUCH <img style={{height : '5Opx', width : '50px'}} src={star}/> GET IN TOUCH <img style={{height : '5Opx', width : '50px'}} src={star}/> GET IN TOUCH <img style={{height : '5Opx', width : '50px'}} src={star}/> GET IN TOUCH <img style={{height : '5Opx', width : '50px'}} src={star}/> GET IN TOUCH <img style={{height : '5Opx', width : '50px'}} src={star}/> GET IN TOUCH <img style={{height : '5Opx', width : '50px'}} src={star}/> GET IN TOUCH <img style={{height : '5Opx', width : '50px'}} src={star}/></>
  return (
    <div>
      <ScrollingText content={text1} direction="right" />
      <ScrollingText content={text2} direction="left" />
      <div id="contacts">
        <div className="shy-container">
          <img src={shy} alt="" />
        </div>
        <a href="mailto:lelaurain.tom@gmail.com">
          <button
            onMouseMove={(e) =>
              window.innerWidth >= 1000 && handleMouse(e, e.currentTarget)
            }
            onMouseLeave={(e) =>
              window.innerWidth >= 1000 && handleMouseOut(e.currentTarget)
            }
          >
            lelaurain.tom@gmail.com
          </button>
        </a>
        <a href="https://www.linkedin.com/in/tom-lelaurain/">
          <button
            onMouseMove={(e) =>
              window.innerWidth >= 1000 && handleMouse(e, e.currentTarget)
            }
            onMouseLeave={(e) =>
              window.innerWidth >= 1000 && handleMouseOut(e.currentTarget)
            }
          >
            Linkedin
          </button>
        </a>
        <a href="https://github.com/T0MLE">
          <button
            onMouseMove={(e) =>
              window.innerWidth >= 1000 && handleMouse(e, e.currentTarget)
            }
            onMouseLeave={(e) =>
              window.innerWidth >= 1000 && handleMouseOut(e.currentTarget)
            }
          >
            Github
          </button>
        </a>
      </div>
    </div>
  );
}

export default Contact;
