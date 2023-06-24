import React, {useState} from "react";

function ToDoItem(props) {
  const [todoStatus, setTodoStatus] = useState(false);

  function updateTodoStatus() {
    setTodoStatus((prevValue)=>{
      return !prevValue;
    })
  }

  return (
    <li 
      id={props.id}
      onClick={updateTodoStatus}
      style={
        {
          textDecoration: (todoStatus) && 'line-through'
        }
      }
    >
      {props.value}
    </li>
  );
}

export default ToDoItem;