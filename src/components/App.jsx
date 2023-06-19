import React, {useState} from "react";

function App() {
  const state = useState(254);
  let count = 0;

  const rgb = [41, 128, 185];

  console.log(state[0]); 

  function increase() {
    count++;
    console.log(`Increasing count to ${count}`); 
  }

  return (
    <div className="container">
      <h1>{state[0]}</h1>
      <button onClick={increase}>+</button>
    </div>
  );
}

export default App;