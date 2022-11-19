import React, { useState } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";

function TodoList() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    if (!todo.text) return;

    setTodos([todo, ...todos]);
  };

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="col-sm-4">
      <h1 className="text-center">Header</h1>
      <TodoForm addTodo={addTodo} />
      <Todo todos={todos} removeTodo={removeTodo} />
    </div>
  );
}

export default TodoList;
