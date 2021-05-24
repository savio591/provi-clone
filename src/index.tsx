import React from "react";
import ReactDOM from "react-dom";
import Routes from "./routes";
import { Server } from "./server";

Server();

ReactDOM.render(
  <React.StrictMode>
    <Routes />
  </React.StrictMode>,
  document.getElementById("root")
);
