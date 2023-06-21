import React, {useState} from "react";

function App() {
  const [inputValue, setInputValue] = useState();
  const [name, setName] = useState();

  function handleOnChange(event) {
    setInputValue(event.target.value);
  }

  function handleOnClick() {
    setName(inputValue);
  }

  return (
    <div className="container">
      <h1>Hello {name}</h1>
      <input 
        onChange={handleOnChange}
        type="text"
        placeholder="What's your name?"
        value={name}
      />
      <button onClick={handleOnClick}>Submit</button>
    </div>
  );
}

export default App;