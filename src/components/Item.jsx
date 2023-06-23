import React from "react";

function Item(props) {
  console.log(`CALLED`); 
  return <li>{props.value}</li>;
}

export default Item;