import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import { Scroller } from "./Scroller";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <Scroller />
  </React.StrictMode>,
  rootElement
);
