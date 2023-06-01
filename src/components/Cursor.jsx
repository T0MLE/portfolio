import { useEffect } from "react";
import RETICOOL from "reticool";

function Cursor() {
  useEffect(() => {
    const config = {
      cursor: "none",
      radius: 32,
      borderWidth: 1,
      color: "#260F71",
      opacity: 1,
      ease: 0.5,
      content: null,
      lockTriggers: "none",
      lockExpand: 0,
    };

    if (window.innerWidth >= 1000) {
      new RETICOOL(config);
    }
  }, []);

  return null;
}

export default Cursor;
