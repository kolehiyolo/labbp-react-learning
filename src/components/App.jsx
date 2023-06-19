import React from "react";
import Login from "./Login.jsx";

let isLoggedIn = false;
// let isLoggedIn = true;

function App() {
  return (
    <div className="container">
      {isLoggedIn
        ? <h1>Welcome</h1>
        : (
            <>
              <h1>Hello</h1>
              <Login />
            </>
          )
      }
    </div>
  );
}

export default App;