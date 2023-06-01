import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import { TransitionProvider } from "./context/Transition";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <TransitionProvider>
      <App />
    </TransitionProvider>
  </BrowserRouter>
);
