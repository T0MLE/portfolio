/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

const TransitionContext = createContext();

export default TransitionContext;

export function TransitionProvider({ children }) {
  const [transition, setTransition] = useState(false);
  const [language, setLanguage] = useState("fr");
  const [isClicked, setIsClicked] = useState(false)

  return (
    <TransitionContext.Provider
      value={{ transition, setTransition, language, setLanguage, isClicked, setIsClicked }}
    >
      {children}
    </TransitionContext.Provider>
  );
}
