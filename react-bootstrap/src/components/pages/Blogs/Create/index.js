import React, {useState} from "react";

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
const Create = ()=>{
    const [name, setName] = useState();
    const [description, setDescription] = useState();
    // const name = "This is blog";
    // const description="This is blog description";

    const handleChange=(event)=>{
        console.log("handleChange",event.target.value);
        setName(event.target.value)
    }
    console.log("Name:",name);
    console.log("description:",description);

    return(
        <>
        <h4>Create Blog</h4>
        <form>
            <Form.Control type="text" name="title" placeholder="Enter blog title" value={name}  onChange={handleChange} />
            <Form.Control type="text" name="description" placeholder="Enter description " value={description} onChange={(e)=>setDescription(e.target.name)} />
            <Button variant="primary" type="button">Save</Button>
            <Button variant="secondary" type="button">Cancel</Button>
        </form>
        <hr></hr>
        </>
    )
}

export default Create;