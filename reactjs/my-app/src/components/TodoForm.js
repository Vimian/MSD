import React, { useState } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";

function TodoForm({ addTodo }) {
  const [input, setInput] = useState("");

  const handleSubmit = (element) => {
    element.preventDefault();

    addTodo({
      id: Math.random(),
      text: input,
    });

    setInput("");
  };

  const handleChange = (element) => {
    setInput(element.target.value);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <InputGroup>
        <Form.Control
          type="text"
          placeholder="Put todo here..."
          value={input}
          onChange={handleChange}
        />
        <Button type="submit">Add</Button>
      </InputGroup>
    </Form>
  );
}

export default TodoForm;
