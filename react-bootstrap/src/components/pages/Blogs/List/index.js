import React, { useState } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/esm/Button";

function List() {
  const [blogData, setBlogData] = useState([]);
  const getData = () => {
    let myData = localStorage.getItem("data");
     myData = myData?JSON.parse(myData):[];
    console.log("myData", myData);
    setBlogData(myData);
  };
  return (
    <>
      <Button onClick={getData}>Refresh</Button>
      <Button onClick={()=>localStorage.setItem("data",[])}>Clear</Button>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {blogData.map((item) => {
            return (
              <tr>
                <td>{item.name}</td>
                <td colSpan={2}>{item.description}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
}

export default List;