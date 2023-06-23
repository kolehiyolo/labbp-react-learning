import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);

const citrus = ["Lime", "Lemon", "Orange"];
const fruits = ["Apple", "Banana",  "Coconut", ...citrus];

console.log(fruits); 

const fullName = {
  fName: "James",
  lName: "Bond",
};

const user = {
  ...fullName,
  id: 1,
  username: "jamesbond007",
}

console.log(user); 

