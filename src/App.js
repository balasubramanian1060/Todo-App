import React from "react";
import './App.css';
import Todolist from "./todolist/todolist";



const TodoApp = () => {

  let dateobj = new Date();
  let days =["Sun", "Mon" , "Tue" , "Wed" , "Thus" , "Fri" , "Sat"];
  let months =["Jan" , "Feb" , "Mar" , "Apr" , "May" , "June" , "July" , "Aug" , "Sep" , "Oct" , "Nov" , "Dec"];

  let date = dateobj.getDate();
  let month = months[dateobj.getMonth()];
  let day =days[dateobj.getDay()];

  return (
    <div className="Todoapp">
          <h1>Today <span>{day} {date} {month} </span></h1>
          <Todolist />
         
          
          
    </div>
  );
};


export default TodoApp;