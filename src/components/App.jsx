import React, {useState} from "react";
import Item from "./Item.jsx";

function App() {
  const [inputValue, setInputValue] = useState('');
  const [todoArray, setTodoArray] = useState([]);

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <form className="form">
        <input onChange={(event) => {setInputValue(event.target.value)}} type="text" />
        <button 
          onClick={(event) => {
            setTodoArray((prevValue) => [...prevValue, inputValue]);
            event.preventDefault();
          }}
          type="submit"
        >
          <span>Add</span>
        </button>
      </form>
      <div>
        <ul>
          {todoArray.map((listItem, index) => <Item key={index} value={listItem}/>)};
        </ul>
      </div>
    </div>
  );
}

export default App;