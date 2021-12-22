import React from "react";
import ReactDOM from "react-dom";
import { Providers } from "./Provider";

import "./styles/global.css";

ReactDOM.render(
  <React.StrictMode>
    <Providers />
  </React.StrictMode>,
  document.getElementById("root")
);
