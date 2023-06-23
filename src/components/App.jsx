import React, {useState} from "react";
import Item from "./Item.jsx";

function App() {
  const [inputValue, setInputValue] = useState('');
  const [todoArray, setTodoArray] = useState([]);

  function updateInputValue(event) {
    console.log(`Input updated`); 
    const newInput = event.target.value;
    setInputValue(newInput);
  }

  function addTodoItem(event) {
    console.log(`Add button pressed`); 

    setTodoArray((prevValue) => {
      return [...prevValue, inputValue];
    });

    event.preventDefault();
  }

  function renderListItem(listItem, index) {
    return <Item key={index} value={listItem}/>;
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <form className="form">
        <input onChange={updateInputValue} type="text" />
        <button onClick={addTodoItem} type="submit">
          <span>Add</span>
        </button>
      </form>
      <div>
        <ul>
          {todoArray.map(renderListItem)};
        </ul>
      </div>
    </div>
  );
}

export default App;