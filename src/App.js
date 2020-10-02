import React, { useState } from "react";
import "./App.css";
import Burger from "./Burger/Burger";

const app = (props) => {
  const [burgersState, setBurgersState] = useState({
    burgers: [
      { name: "BigChicken", price: 4 },
      { name: "BigFish", price: 3 },
      { name: "BigBeaf", price: 5 },
    ],
    otherState: "null",
  });

  console.log(burgersState);

  const switchBurgerHandler = () => {
    //console.log("HEY");
    //DONT DO THIS burgersState.burgers[0].name = 'SmallChicken'
    setBurgersState({
      burgers: [
        { name: "SmallChicken", price: 2 },
        { name: "SmallFish", price: 2.5 },
        { name: "SmallBeaf", price: 4 },
      ],
    });
  };

  return (
    <div className="App">
      <h1>Burger</h1>
      <p>Menu</p>
      <button onClick={switchBurgerHandler}>Switch Burger's Size</button>
      <Burger
        name={burgersState.burgers[0].name}
        price={burgersState.burgers[0].price}
      />
      <Burger
        name={burgersState.burgers[1].name}
        price={burgersState.burgers[1].price}
        click={switchBurgerHandler}
      >
        Extra Sauce!
      </Burger>
      <Burger
        name={burgersState.burgers[2].name}
        price={burgersState.burgers[2].price}
      />
    </div>
  );
  // return React.createElement(
  //   "div",
  //   { className: "App" },
  //   React.createElement("h1", null, "Burger")
  // );
};

export default app;

//{this} refers to the class App
