
import React from "react";

function Todo({ todo, toggleComplete, removeTodo }) {
  function handleCheckboxClick() {
    toggleComplete(todo.id);
  }

  function handleRemoveClick() {
    removeTodo(todo.id);
  }

  return (
    <ul style={{ display: "flex" }}>
      <checkbox checked={todo.completed} onClick={handleCheckboxClick} />
      <span
        variant="body1"
        style={{
          textDecoration: todo.completed ? "line-through" : null
        }}
      >
        {todo.task}
      </span>
      <button onClick={handleRemoveClick}>
        
      </button>
    </ul>
  );
}

export default Todo;