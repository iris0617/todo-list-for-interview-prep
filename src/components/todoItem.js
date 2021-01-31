import React, { useContext, useState } from 'react';
import TodoContext from './todoContext';
const TodoItem = ({ item }) => {
    const { deleteTodo, toggleTodo, editTodo } = useContext(TodoContext);
    const [isEditing, setIsEditing] = useState(false);
    const [value, setValue] = useState('');

    const handleDelete = () => {
        deleteTodo(item.id);
    };
    const handleToggle = () => {
        toggleTodo(item.id);
    }
    const handleEdit = () => {
        setIsEditing(true);
    }
    const handleComplete = () => {
        setIsEditing(false);
        editTodo(item.id, value);
    }
    const isCompletedItem = item && item.isCompleted ? 'completed-item' : '';
    
    return (
        <div>
            {isEditing ? (<input value={value} onChange={(e) => setValue(e.target.value)}/>) : (
                <span className={isCompletedItem} onClick={()=>handleToggle()}> {item.text} </span>
            )}
            {isEditing ? (<button onClick={()=>handleComplete()}>Complete</button>) 
            : (<button onClick={()=>handleEdit()}>Edit</button> 
            )}
           
           <button onClick={()=>handleDelete()}>Delete</button> 
        </div>
    )
};
export default TodoItem;