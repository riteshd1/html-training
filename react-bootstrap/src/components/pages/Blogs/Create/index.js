import React, { useState } from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
const Create = () => {
  const [name, setName] = useState();
  const [description, setDescription] = useState();
  // const name = "This is blog";
  // const description="This is blog description";

  // const handleChange=(event)=>{
  //     // console.log("handleChange",event.target);
  //     setName(event.target.value)
  // }

  const handleSubmit = (event) => {
    event.preventDefault();
    let formData = { name: name, description: description };
    let localData = localStorage.getItem("data");
    let data = localData?JSON.parse(localData):[];
    data.push(formData);
    localStorage.setItem("data", JSON.stringify(data));
  };

  return (
    <>
      <h4>Create Blog</h4>
      <form method="POST" onSubmit={handleSubmit}>
        <Form.Control
          type="text"
          name="name"
          placeholder="Enter blog title"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Form.Control
          type="text"
          name="description"
          placeholder="Enter description "
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <Button variant="primary" type="submit">
          Save
        </Button>
        <Button variant="secondary" type="button">
          Cancel
        </Button>
      </form>
      <hr></hr>
    </>
  );
};

export default Create;
