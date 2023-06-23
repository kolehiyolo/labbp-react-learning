import React from "react";
import Item from "./Item.jsx";

function App() {
  function addTodoItem(event) {
    console.log(`Add button pressed`); 
    event.preventDefault();
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <form className="form">
        <input type="text" />
        <button onClick={addTodoItem} type="submit">
          <span>Add</span>
        </button>
      </form>
      <div>
        <ul>
          <li>A Item</li>
        </ul>
      </div>
    </div>
  );
}

export default App;