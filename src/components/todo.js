import React, {useState} from 'react';
import TodoList from './todoList';
import TodoInput from './todoInput';
import TodoContext from './todoContext';

const Todo = () => {
    const [todoList, setTodoList] = useState([]);
    const addTodo = (todo) => {
        setTodoList([...todoList, todo]);
    }
    const deleteTodo = (todoId) => {
        const newTodoList = todoList.filter(todo => todo.id != todoId)
        setTodoList(newTodoList);
    }
    const toggleTodo = (todoId) => {
        const newTodoList = todoList.map(ele => {
            if(ele.id == todoId){
                ele.isCompleted = !ele.isCompleted;
            }
            return ele;
        });
        setTodoList(newTodoList);
    }
    const editTodo = (todoId, newText) => {
        const newTodoList = todoList.map(ele => {
            if(ele.id == todoId){
                ele.text = newText;
            }
            return ele;
        });
        setTodoList(newTodoList);
    }
    return(
        <div>
            <TodoContext.Provider value={{ addTodo, deleteTodo, editTodo, toggleTodo, todoList }}>
                <TodoInput />            
                <TodoList />
            </TodoContext.Provider>
        </div>
    )
};
export default Todo;