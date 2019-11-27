import React from "react";
import ReactDOM from "react-dom";
import "normalize.css";

import Layout from "./Layout.js";
import "./styles/main.scss";

class App extends React.Component {
  render() {
    return (
      <div>
        <Layout />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
