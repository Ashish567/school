import React from "react";
import ReactDOM from "react-dom";
import App from "./app";

const Appp = () => {
  return (
    <div>
      <App />
      <h1>React</h1>
    </div>
  );
};

ReactDOM.render(<Appp />, document.getElementById("app"));
