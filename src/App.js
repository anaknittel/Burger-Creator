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
    otherState: "null",
  };

  switchBurgerHandler = (newBurger) => {
    this.setState({
      burgers: [
        { name: newBurger, price: 2 },
        { name: "SmallFish", price: 2.5 },
        { name: "SmallBeaf", price: 4 },
      ],
    });
  };

  burgersChangedHandler = (event) => {
    this.setState({
      burgers: [
        { name: "BigChicken", price: 4 },
        { name: event.target.value, price: 3 },
        { name: "BigBeaf", price: 5 },
      ],
    });
  };

  render() {
    return (
      <div className="App">
        <h1>Burger</h1>
        <p>Menu</p>
        <button onClick={this.switchBurgerHandler.bind(this, "SmallChicken")}>
          Switch Burger's Size
        </button>
        <Burger
          name={this.state.burgers[0].name}
          price={this.state.burgers[0].price}
        />
        <Burger
          name={this.state.burgers[1].name}
          price={this.state.burgers[1].price}
          click={this.switchBurgerHandler.bind(this, "MiniChicken")}
          changed={this.burgersChangedHandler}
        >
          Extra Sauce!
        </Burger>
        <Burger
          name={this.state.burgers[2].name}
          price={this.state.burgers[2].price}
        />
      </div>
    );
  }
}

export default App;

// import React, { useState } from "react";
// import "./App.css";
// import Burger from "./Burger/Burger";

// const app = (props) => {
//   const [burgersState, setBurgersState] = useState({
//     burgers: [
//       { name: "BigChicken", price: 4 },
//       { name: "BigFish", price: 3 },
//       { name: "BigBeaf", price: 5 },
//     ],
//     otherState: "null",
//   });

//   console.log(burgersState);

//   const switchBurgerHandler = () => {
//     //console.log("HEY");
//     //DONT DO THIS burgersState.burgers[0].name = 'SmallChicken'
//     setBurgersState({
//       burgers: [
//         { name: newBurger, price: 2 },
//         { name: "SmallFish", price: 2.5 },
//         { name: "SmallBeaf", price: 4 },
//       ],
//     });
//   };

//   return (
//     <div className="App">
//       <h1>Burger</h1>
//       <p>Menu</p>
//       <button onClick={switchBurgerHandler}>Switch Burger's Size</button>
//       <Burger
//         name={burgersState.burgers[0].name}
//         price={burgersState.burgers[0].price}
//       />
//       <Burger
//         name={burgersState.burgers[1].name}
//         price={burgersState.burgers[1].price}
//         click={burgersState.switchBurgerHandler.bind(
//           burgersState,
//           "BigChicken"
//         )}
//       >
//         Extra Sauce!
//       </Burger>
//       <Burger
//         name={burgersState.burgers[2].name}
//         price={burgersState.burgers[2].price}
//       />
//     </div>
//   );
//   // return React.createElement(
//   //   "div",
//   //   { className: "App" },
//   //   React.createElement("h1", null, "Burger")
//   // );
// };

// //{this} refers to the class App
