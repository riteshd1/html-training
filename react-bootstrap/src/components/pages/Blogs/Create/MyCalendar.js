import React,{useState} from "react";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
let ValuePiece = Date | null;

let Value = ValuePiece | [ValuePiece, ValuePiece];
 const MyCalendar = ()=>{
    const [value, onChange] = useState(new Date());

    return (
      <div>
        <Calendar onChange={onChange} value={value} />
      </div>
    );
 }

 export default MyCalendar;