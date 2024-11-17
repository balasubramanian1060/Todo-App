import React from "react";
import Addtask from "../addtask/addtask";
import Todo from "../todo/todo";

const Todolist = () => {
    const [todos,setTodos] = React.useState([]);
    const Addtodo = todo => {
        if (!todo.text) {
            return;
        }
        const newtodo = [...todos,todo];
        setTodos(newtodo);
    }
    const isComplete = index => {
        const updatelist =[...todos]
        updatelist[index].isComplete=!updatelist[index].isComplete;
        setTodos(updatelist)
    }

    const remove =() => {

    }

    return (
        <div className="Todo-list">
            <Addtask submit={Addtodo} />
            <Todo todo={todos} isComplete={isComplete} remove={remove}/>

        </div>
    )

};

export default Todolist;