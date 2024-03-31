import React, { useEffect, useState } from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import MyCalendar from "./MyCalendar";
import MyEditor from "./MyEditor";
const Create = ({setBlogData}) => {
  const [name, setName] = useState();
  const [description, setDescription] = useState();
  const [formValues, setFormValue] = useState({name:'',description:''});
  // const name = "This is blog";
  // const description="This is blog description";

  // const handleChange=(event)=>{
  //     // console.log("handleChange",event.target);
  //     setName(event.target.value)
  // }

  const handleSubmit = (event) => {
    event.preventDefault();
    if(formValues.name==''){
      alert("Blog title is required!");
    }
    // let formData = { name: name, description: description };
    let localData = localStorage.getItem("data");
    let data = localData?JSON.parse(localData):[];
    data.push(formValues);
    localStorage.setItem("data", JSON.stringify(data));
    setBlogData(data);
  };

  // useEffect(()=>{
  //   alert('test')
  // },[formValues.name])

  console.log("formValues",formValues);
  return (
    <>
      <h4>Create Blog</h4>
      <form method="POST" onSubmit={handleSubmit}>
        <Form.Control
          type="text"
          name="name"
          placeholder="Enter blog title"
          value={formValues.name}
          onChange={(e) => setFormValue({...formValues, name:e.target.value})}
        />
        <Form.Control
          type="text"
          name="description"
          placeholder="Enter description "
          value={formValues.description}
          // onChange={(e) => setDescription(e.target.value)}
          onChange={(e) => setFormValue({...formValues, description:e.target.value})}
        />
        <MyEditor />
        <MyCalendar />
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
