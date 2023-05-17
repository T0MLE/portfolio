import RETICOOL from "reticool";

function Cursor() {
  const config = {
    cursor: "none",
    radius: 32,
    borderWidth: 1,
    color: "#260F71",
    opacity: 1,
    ease: 0.5,
    content: null,
    lockTriggers: "[data-lock], button",
    lockExpand: 0,
  };

  new RETICOOL(config);

}

export default Cursor;
