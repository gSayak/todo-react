import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export const AddTodo = (props) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const submit = (e) => {
    e.preventDefault();
    if (!title || !desc) {
      alert("Title or description cannot be blank!!");
    }
    else{
    props.addTodo(title, desc);
    setTitle("");
    setDesc("");
  }
  };
  return (
    <div className="container my-3">
      <h3>Add a ToDO</h3>
      <Form onSubmit={submit}>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="title">ToDo Title</Form.Label>
          <Form.Control
            type="text"
            id="title"
            placeholder="Enter Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label htmlFor="desc">Description</Form.Label>
          <Form.Control
            type="text"
            id="desc"
            placeholder="Todo Description"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
        </Form.Group>

        <Button variant="primary" type="submit" className="btn-sm btn-success">
          Add ToDo
        </Button>
      </Form>
    </div>
  );
};
