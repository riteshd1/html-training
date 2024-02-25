import React,{useContext} from "react";
import TitleContext from "./TitleContext";
const Component5 = ()=>{
    const titleContext = useContext(TitleContext);
    console.log("titleContext",titleContext);
    return  (<>
    <h1>Component5 {titleContext}</h1>
    </>)
}
export default Component5;