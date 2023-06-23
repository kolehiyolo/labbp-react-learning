import React, {useState} from "react";

function App() {
  const [fullName, setFullName] = useState({
    fName: "",
    lName: ""
  });

  function handleNameInputChange(event) {
    const {value, name} = event.target;

    setFullName(prevValue => {
      console.log(prevValue);
      switch (name) {
        case 'fName':
          return ({fName: value, lName: prevValue.lName});
        case 'lName':
          return ({fName: prevValue.fName, lName: value});
        default:
          break;
      }
    })
  }

  return (
    <div className="container">
      <h1>Hello{(fullName.fName || fullName.lName) && ', ' + fullName.fName + ' ' + fullName.lName}</h1>
      <form>
        <input onChange={handleNameInputChange} name="fName" placeholder="First Name" />
        <input onChange={handleNameInputChange} name="lName" placeholder="Last Name" />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;