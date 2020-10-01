import React from "react";

const burger = (props) => {
  return (
    <div>
      <p>
        {props.name} - {props.price} Euros!
      </p>
      <p>{props.children}</p>
    </div>
  );
};

export default burger;

//const as is not changeble. const is a function with arrow syntx
// () = argument
//props.children can be anything in between opened and closed objects: list, text, ...
