import React from "react";
import Title from "./Title.jsx";

function Entry(props) {
  return (
    <div className="term">
      {/* TITLE */}
      <Title 
        name={props.name}
        emoji={props.emoji}
      />
      {/* DESCRIPTION */}
      <dd>
        {props.meaning}
      </dd>
    </div>
  )
}

export default Entry;
