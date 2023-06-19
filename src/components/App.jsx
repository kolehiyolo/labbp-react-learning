import React from "react";
import Login from "./Login.jsx";

let isLoggedIn = false;
// let isLoggedIn = true;

const currentTime = new Date().getHours();

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
      {
        currentTime && <p>Why are you still working</p>
      }
    </div>
  );
}

export default App;