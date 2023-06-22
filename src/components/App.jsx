import React, {useState} from "react";

function App() {
  const [inputValue, setInputValue] = useState();
  const [name, setName] = useState();

  function handleOnChange(event) {
    setInputValue(event.target.value);
  }

  function handleOnClick(event) {
    setName(inputValue);

    event.preventDefault();
  }

  return (
    <div className="container">
      <h1>Hello {name}</h1>
      <form onSubmit={handleOnClick}>
        <input 
          onChange={handleOnChange}
          type="text"
          placeholder="What's your name?"
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;