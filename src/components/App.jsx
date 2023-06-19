import React from "react";
import Login from "./Login.jsx";

let isLoggedIn = false;
// let isLoggedIn = true;

function App() {
  function checkLoginThenRender() {
    // if (isLoggedIn) {
    //   return (
    //     <h1>Welcome</h1>
    //   );
    // } else {
    //   return (
    //     <>
    //       <h1>Hello</h1>
    //       <Login />
    //     </>
    //   );
    // }
    return isLoggedIn
      ?
        <h1>Welcome</h1>
      :
        (
          <>
            <h1>Hello</h1>
            <Login />
          </>
        );
  }

  return (
    <div className="container">
      {/* {checkLoginThenRender()} */}
      {isLoggedIn
      ?
        <h1>Welcome</h1>
      :
        (
          <>
            <h1>Hello</h1>
            <Login />
          </>
        )}
    </div>
  );
}

export default App;