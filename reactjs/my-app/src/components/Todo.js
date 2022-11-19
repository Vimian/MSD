import React from "react";

function Todo({ todos, removeTodo }) {
  const handleMouseEnter = (element) => {
    element.target.style.textDecoration = "line-through";
  };
  const handleMouseLeave = (element) => {
    element.target.style.textDecoration = "none";
  };

  return todos.map((todo) => (
    <div
      className="todo"
      key={todo.id}
      onClick={() => {
        removeTodo(todo.id);
      }}
    >
      <p onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        {todo.text}
      </p>
    </div>
  ));
}

export default Todo;
