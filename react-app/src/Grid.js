import React from 'react';
import './App.css';
const Grid = ({title,colorName})=>{
    //alert("colorName",colorName);
    
    return(
        <div style={{backgroundColor:colorName, height:50, width:100}}>
            <h1 className={"h1Css"}>{title}</h1>
        </div>
    )
}

export default Grid;