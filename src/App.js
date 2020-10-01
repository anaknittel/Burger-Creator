import React, { Component } from "react";
import "./App.css";
import Burger from "./Burger/Burger";

class App extends Component {
  state = {
    burgers: [
      { name: "BigChicken", price: 4 },
      { name: "BigFish", price: 3 },
      { name: "BigBeaf", price: 5 },
    ],
  };

  switchBurgerHandler = () => {
    console.log("HEY");
  };

  render() {
    return (
      <div className="App">
        <h1>Burger</h1>
        <p>Menu</p>
        <button onClick={this.switchBurgerHandler}>Switch Burger</button>
        <Burger
          name={this.state.burgers[0].name}
          price={this.state.burgers[0].price}
        />
        <Burger
          name={this.state.burgers[1].name}
          price={this.state.burgers[1].price}
        >
          Extra Sauce!
        </Burger>
        <Burger
          name={this.state.burgers[2].name}
          price={this.state.burgers[2].price}
        />
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

//{this} refers to the class App
