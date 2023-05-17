import ScrollingText from "../ScrollingText/ScrollingText";
import "./contact.scss";

function Contact() {
  const text1 =
    "WORK TOGETHER * WORK TOGETHER * WORK TOGETHER * WORK TOGETHER * WORK TOGETHER * WORK TOGETHER * WORK TOGETHER * WORK TOGETHER * WORK TOGETHER * WORK TOGETHER * WORK TOGETHER * WORK TOGETHER * WORK TOGETHER * ";
  const text2 =
    "GET IN TOUCH * GET IN TOUCH * GET IN TOUCH * GET IN TOUCH * GET IN TOUCH * GET IN TOUCH * GET IN TOUCH * GET IN TOUCH * GET IN TOUCH * GET IN TOUCH * GET IN TOUCH * GET IN TOUCH * ";
  return (
    <div>
      <ScrollingText content={text1} direction="right" />
      <ScrollingText content={text2} direction="left" />
    </div>
  );
}

export default Contact;
