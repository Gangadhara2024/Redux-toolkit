import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Middleware } from "./middleware/Middleware";
import { Toolkitexample } from "./ReduxToolkit/Toolkitexample";
import Toolkit3 from "./Reduxtoolkit2/Toolkit3";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <Middleware />
  // <Toolkitexample />
  <Toolkit3 />
);
