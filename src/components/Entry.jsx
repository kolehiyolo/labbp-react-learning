import React from "react";
import Title from "./Title.jsx";
import Description from "./Description.jsx";

function Entry(props) {
  return (
    <div className="term">
      <Title 
        name={props.name}
        emoji={props.emoji}
      />
      <Description 
        meaning={props.meaning}
      />
    </div>
  )
}

export default Entry;
