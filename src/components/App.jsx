import React, {useState} from "react";

function App() {
  const [fName, setFName] = useState('');
  const [lName, setLName] = useState('');

  function handleFNameInputChange(event) {
    console.log(`handleFNameInputChange()`); 
    setFName(event.target.value);
  }
  
  function handleLNameInputChange(event) {
    console.log(`handleLNameInputChange()`); 
    setLName(event.target.value);
  }

  return (
    <div className="container">
      <h1>Hello{(fName || lName) && ', ' + fName + ' ' + lName}</h1>
      <form>
        <input onChange={handleFNameInputChange} name="fName" placeholder="First Name" />
        <input onChange={handleLNameInputChange} name="lName" placeholder="Last Name" />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;