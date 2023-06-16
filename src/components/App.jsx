import React from "react";
import Header from "./Header.jsx";
import emojipedia from "../emojipedia.js";

function createEntry() {
  return (
    <div className="term">
      {/* TITLE */}
      <dt>
        <span className="emoji" role="img" aria-label="Tense Biceps">
          💪
        </span>
        <span>Tense Biceps</span>
      </dt>
      {/* DESCRIPTION */}
      <dd>
        “You can do that!” or “I feel strong!” Arm with tense biceps. Also
        used in connection with doing sports, e.g. at the gym.
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
