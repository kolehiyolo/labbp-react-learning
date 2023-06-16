import React from "react";
import Header from "./Header.jsx";
import Entry from "./Entry.jsx";
import emojipedia from "../emojipedia.js";

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
