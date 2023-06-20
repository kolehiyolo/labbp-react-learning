import React from "react";

var isDone = false;

function strike() {
  isDone = true;
  document.getElementById("root").style.textDecoration = "line-through";
}

function unStrike() {
  isDone = false;
  document.getElementById("root").style.textDecoration = null;
}

function App() {
  return (
    <div>
      <p style={isDone ? { textDecoration: "line-through" } : null}>Buy milk</p>
      <button onClick={strike}>Change to strike through</button>
      <button onClick={unStrike}>Change back</button>
    </div>
  );
}

export default App;
