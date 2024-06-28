import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import UseScrollToTop from "./hooks/useScrollToTop.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AnimatePresence>
      <div className="bg-secondary-light dark:bg-primary-dark transition duration-300">
        <BrowserRouter>
          <App />
        </BrowserRouter>
        <UseScrollToTop />
      </div>
    </AnimatePresence>
  </React.StrictMode>
);
