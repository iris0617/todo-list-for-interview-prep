import React, {useContext} from 'react';
import TodoItem from './todoItem';
import TodoContext from './todoContext';

const TodoList = () => {
    const { todoList } = useContext(TodoContext);
    return (
        <div>
            <ul>
            {todoList.map((ele, idx) =>
                <li key={`${idx}`}>
                    <TodoItem item={ele} />
                </li>
            )}   
            </ul>
        </div>
    )
};
export default TodoList;