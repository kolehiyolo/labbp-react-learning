import React from "react";

function Entry(props) {
  return (
    <div className="term">
      {/* TITLE */}
      <dt>
        <span className="emoji" role="img" aria-label={props.name}>
          {props.emoji}
        </span>
        <span>{props.name}</span>
      </dt>
      {/* DESCRIPTION */}
      <dd>
        {props.meaning}
      </dd>
    </div>
  )
}

export default Entry;
