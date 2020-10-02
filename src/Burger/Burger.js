import React from "react";

const burger = (props) => {
  return (
    <div>
      <p onClick={props.click}>
        {props.name} - {props.price} Euros!
      </p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} />
    </div>
  );
};

export default burger;

//const as is not changeble. const is a function with arrow syntx
// () = argument
//props.children can be anything in between opened and closed objects: list, text, ...

// <input type="text" onChange={props.changed} value={props.name} />  makes the input is filled with the names before changing
