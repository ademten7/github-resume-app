import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Container from "./context/Container";

ReactDOM.render(
  <Container>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Container>,

  document.getElementById("root")
);
