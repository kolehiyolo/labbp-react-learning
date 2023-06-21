import React, {useState} from "react";

function App() {
  const [headingText, setHeadingText] = useState('Hello');
  const [buttonStyle, setButtonStyle] = useState();

  function handleClick() {
    console.log(`Clicked`); 
    const username = document.getElementById("username").value;

    setHeadingText(`Hello, ${username}`);
  }

  function handleOnMouseOver() {
    console.log(`handleOnMouseOver()`); 
    setButtonStyle({background: "black", color: "white"});
  }
  
  function handleOnMouseOut() {
    console.log(`handleOnMouseOut()`); 
    setButtonStyle();
  }

  return (
    <div className="container">
      <h1>{headingText}</h1>
      <input id="username" type="text" placeholder="What's your name?" />
      <button 
        onClick={handleClick}
        onMouseOver={handleOnMouseOver}
        onMouseOut={handleOnMouseOut}
        style={buttonStyle}
      >Submit</button>
    </div>
  );
}

export default App;