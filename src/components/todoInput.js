import React, { useContext, useState } from 'react';
import { v4 as uuid } from 'uuid';
import TodoContext from './todoContext';

const TodoInput = () => {
    const [value, setValue] = useState("");
    const { addTodo } = useContext(TodoContext);
    const handleChange = (value) => setValue(value);
    const handleSubmit = () => {
        addTodo({ id: uuid(), text: value, isCompleted: false });
        setValue('');
    }
    return (
        <div>
            <input value={value} onChange={(e)=>handleChange(e.target.value)}/>
            <button onClick={handleSubmit}>Add</button>
        </div>
    );
};
export default TodoInput;