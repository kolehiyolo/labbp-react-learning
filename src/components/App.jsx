import React from "react";
import Card from "./Card.jsx";
import contacts from "../contacts.js";

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      {contacts.map((contact, index) => {
        return (
          <Card 
            key={'card-'+index}
            name={contact.name}
            imgURL={contact.imgURL}
            phone={contact.phone}
            email={contact.email}
          />
        );
      })}
    </div>
  );
}

export default App;
