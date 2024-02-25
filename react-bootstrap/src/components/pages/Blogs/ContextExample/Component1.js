import React, { useState, createContext } from "react";
import Component2 from "./Component2";
import Component5 from "./Component5";
import TitleContext from "./TitleContext";

const Component1 = () => {
//   const TitleContext = createContext();
  const [title, setTitle] = useState("This is my titless");
  return (
    <>
      <TitleContext.Provider value={title}>
        <h1>Component1</h1>
        <Component2  />
        
      </TitleContext.Provider>
    </>
  );
};

export default Component1;
