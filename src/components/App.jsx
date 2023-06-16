import React from "react";
import Header from "./Header.jsx";
import emojipedia from "../emojipedia.js";

function createEntry(entry) {
  return (
    <div className="term">
      {/* TITLE */}
      <dt>
        <span className="emoji" role="img" aria-label={entry.name}>
          {entry.emoji}
        </span>
        <span>{entry.name}</span>
      </dt>
      {/* DESCRIPTION */}
      <dd>
        {entry.meaning}
      </dd>
    </div>
  )
}

function App() {
  return (
    <div>
      <Header />
      {/* DICTIONARY */}
      <dl className="dictionary">
        {/* ENTRY */}
        {emojipedia.map(createEntry)}
      </dl>
    </div>
  );
}

export default App;
