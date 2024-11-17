import React from "react";
import '../todo/todo.css';


const Todo = props => {
    const arr = [1,2,3,4,5,6]
    const todolist = props.todo.map((currentEle,index) => {
       return <div key ={index}>
                <ol key ={arr[0]++}>
                    <span key ={arr[1]++} onClick={() => props.isComplete(index)}  className= {currentEle.isComplete ? 'isCompletetask'  :'duetask'}>{currentEle.text}  
                   
                    </span>
                    <span key={arr[3]} className="stutas">
                       {currentEle.isComplete ? " Completed " : "Do it fast"}
                    </span>
                   
                    <hr key={arr[2]} />
                   
                </ol>
            </div>
    });
    return (
        <div>
            <center>
                <div className="todo">
                    <ol className="ol"> {todolist} </ol>
                </div>
            </center>
        </div>
    )
}

export default Todo;