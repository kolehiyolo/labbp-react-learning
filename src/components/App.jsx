import React, { useState } from "react";

function App() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: ""
  });

  function updateContact(event) {
    const {value, name} = event.target;

    setContact((prevValue) => {
      const newContact = {...prevValue};
      newContact[name] = value;

      return newContact;
    })

    event.preventDefault();
  }

  return (
    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <form>
        <input onChange={updateContact} name="fName" placeholder="First Name" />
        <input onChange={updateContact} name="lName" placeholder="Last Name" />
        <input onChange={updateContact} name="email" placeholder="Email" />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;