import React, {useState} from "react";

function App() {
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());

  function getCurrentTime() {
    setCurrentTime(new Date().toLocaleTimeString());
  }

  return (
    <div className="container">
      <h1>{currentTime}</h1>
      <button onClick={getCurrentTime}>Get Time</button>
    </div>
  );
}

export default App;