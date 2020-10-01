import React, { Component } from "react";
import "./App.css";
import Burger from "./Burger/Burger";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Burger</h1>
        <p>Menu</p>
        <Burger name="BigChicken" price="4" />
        <Burger name="BigFish" price="3">
          Extra Sauce!
        </Burger>
        <Burger name="BigBeaf" price="5" />
      </div>
    );
    // return React.createElement(
    //   "div",
    //   { className: "App" },
    //   React.createElement("h1", null, "Burger")
    // );
  }
}

export default App;
