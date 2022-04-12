import React from "react";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

import { BrowserRouter } from "react-router-dom";


root.render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);

reportWebVitals();
