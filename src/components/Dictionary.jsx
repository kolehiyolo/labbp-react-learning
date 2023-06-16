import React from "react";
import Entry from "./Entry.jsx";
import emojipedia from "../emojipedia.js";

function Dictionary() {
  function createEntry(entry) {
    return (
      <Entry 
        key={entry.id}
        id={entry.id}
        emoji={entry.emoji}
        name={entry.name}
        meaning={entry.meaning}
      />
    )
  }

  return (
    <dl className="dictionary">
      {emojipedia.map(createEntry)}
    </dl>
  );
}

export default Dictionary;
