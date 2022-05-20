import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import { CarProvider } from "./context";

// const root = ReactDOM.createRoot(document.getElementById("root"));

ReactDOM.render(
  <CarProvider>
    <Router>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Router>
  </CarProvider>, document.getElementById("root")
);
