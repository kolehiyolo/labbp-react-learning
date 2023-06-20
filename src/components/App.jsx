import React from "react";
import ReactDOM from "react-dom/client";

function App() {
  let count = 0;

  const root = ReactDOM.createRoot(document.getElementById('root'));

  function increaseCount() {
    count++;
    console.log(count); 
    root.render(
      <div>
        <h1>{count}</h1>
        <button onClick={increaseCount}>+</button>
        <button onClick={decreaseCount}>-</button>
      </div>
    );
  }
  
  function decreaseCount() {
    count--;
    console.log(count); 
    root.render(
      <div>
        <h1>{count}</h1>
        <button onClick={increaseCount}>+</button>
        <button onClick={decreaseCount}>-</button>
      </div>
    );
  }

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increaseCount}>+</button>
      <button onClick={decreaseCount}>-</button>
    </div>
  );
}

export default App;