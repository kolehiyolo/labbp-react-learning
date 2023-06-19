import React from "react";

let isLoggedIn = false;
// let isLoggedIn = true;

function App() {
  function checkLoginThenRender() {
    if (isLoggedIn) {
      return (
        <h1>Welcome</h1>
      );
    } else {
      return (
        <>
          <h1>Hello</h1>
          <form className="form">
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <button type="submit">Login</button>
          </form>
        </>
      );
    }
  }

  return (
    <div className="container">
      {checkLoginThenRender()}
    </div>
  );
}

export default App;