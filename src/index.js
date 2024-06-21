import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Middleware } from "./middleware/Middleware";
import { Toolkitexample } from "./ReduxToolkit/Toolkitexample";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  // <Middleware />
  <Toolkitexample />
  // </React.StrictMode>
);
