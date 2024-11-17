import React from "react";
import './addtask.css'

const Addtask = props => {
    const [Input, setInput] = React.useState('');

    const handleSubmit = e => {
        e.preventDefault();
        props.submit({
            text : Input,
            isComplete : false
        });
        setInput('');


    }

    const handleChange = e => {
        setInput(e.target.value);


    }

    return (
        <center>
            <div className="Add-Task">
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder=" Add New Task" id="inputbox" onChange={handleChange} value={Input} /> <br/>
                    <input type="submit" value="sumbit" id="submitbutton" />


                </form>
            </div>
        </center>
    )
}

export default Addtask;