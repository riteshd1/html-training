import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/esm/Button";
import "./style.css";
function List({blogData}) {
  // const [blogData, setBlogData] = useState([]);
  const [num1, setNum1]=useState(0);
  const [counter, setCounter]=useState(0);
  const getData = () => {
    let myData = localStorage.getItem("data");
     myData = myData?JSON.parse(myData):[];
    console.log("myData", myData);
    // setBlogData(myData);
  };

  const handleChange = (e)=>{
    setNum1(e.target.value);
    // setCounter(counter+1);

  }
  useEffect(()=>{setCounter(counter+1)},[num1]);
  // useEffect(getData,[blogData]);
  
  return (
    <>
      <Button onClick={getData}>Refresh</Button>
      <Button onClick={()=>localStorage.setItem("data",[])} className="clearBtn">Clear</Button>
<hr />
    <input type="text" name="num1" value={num1} onChange={handleChange} /> <Button>Count {counter}</Button>
    <hr />
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