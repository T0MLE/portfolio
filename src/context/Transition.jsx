/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

const TransitionContext = createContext();

export default TransitionContext;

export function TransitionProvider({ children }) {
  const [transition, setTransition] = useState(false);
  const [language, setLanguage] = useState("fr");

  return (
    <TransitionContext.Provider
      value={{ transition, setTransition, language, setLanguage }}
    >
      {children}
    </TransitionContext.Provider>
  );
}
