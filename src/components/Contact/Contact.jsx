import ScrollingText from "../ScrollingText/ScrollingText";
import "./contact.scss";

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
    "WORK TOGETHER * WORK TOGETHER * WORK TOGETHER * WORK TOGETHER * WORK TOGETHER * WORK TOGETHER * WORK TOGETHER * WORK TOGETHER * WORK TOGETHER * WORK TOGETHER * WORK TOGETHER * WORK TOGETHER * WORK TOGETHER * ";
  const text2 =
    "GET IN TOUCH * GET IN TOUCH * GET IN TOUCH * GET IN TOUCH * GET IN TOUCH * GET IN TOUCH * GET IN TOUCH * GET IN TOUCH * GET IN TOUCH * GET IN TOUCH * GET IN TOUCH * GET IN TOUCH * ";
  return (
    <div>
      <ScrollingText content={text1} direction="right" />
      <ScrollingText content={text2} direction="left" />
      <div id="contacts">
        <button
          onMouseMove={(e) =>
            window.innerWidth >= 1000 && handleMouse(e, e.currentTarget)
          }
          onMouseLeave={(e) =>
            window.innerWidth >= 1000 && handleMouseOut(e.currentTarget)
          }
        >
          <a href="mailto:lelaurain.tom@gmail.com">lelaurain.tom@gmail.com</a>
        </button>
        <button
          onMouseMove={(e) =>
            window.innerWidth >= 1000 && handleMouse(e, e.currentTarget)
          }
          onMouseLeave={(e) =>
            window.innerWidth >= 1000 && handleMouseOut(e.currentTarget)
          }
        >
          <a href="https://www.linkedin.com/in/tom-lelaurain/">Linkedin</a>
        </button>
        <button
          onMouseMove={(e) =>
            window.innerWidth >= 1000 && handleMouse(e, e.currentTarget)
          }
          onMouseLeave={(e) =>
            window.innerWidth >= 1000 && handleMouseOut(e.currentTarget)
          }
        >
          <a href="https://github.com/T0MLE">Github</a>
        </button>
      </div>
    </div>
  );
}

export default Contact;
