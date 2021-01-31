import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import TodoList from './todoList';
import TodoInput from './todoInput';
import TodoContext from './todoContext';
import VisibilityFilter from './visibilityFilter';
import { VISIBILITY_FILTERS } from '../utils/constants';
import { addTodo, deleteTodo, editTodo, toggleTodo } from '../actions/todos';

const Todo = ({ todoList, addTodo, deleteTodo, editTodo, toggleTodo, currentFilter }) => {
    
    const [visibleTodo, setVisibleTodo] = useState(todoList);
    
    useEffect(() => {
        let newVisibleTodo = todoList;
        if(currentFilter === VISIBILITY_FILTERS.SHOW_COMPLETED){
            newVisibleTodo = todoList.filter(ele => ele.isCompleted === true);
            console.log(newVisibleTodo);
        } 
        else if(currentFilter == VISIBILITY_FILTERS.SHOW_ACTIVE){
            newVisibleTodo = todoList.filter(ele => ele.isCompleted === false);
        }
        setVisibleTodo(newVisibleTodo);
    }, [currentFilter, todoList]);


    return(
        <div>
            <TodoContext.Provider value={{ addTodo, deleteTodo, editTodo, toggleTodo, visibleTodo, currentFilter }}>
                <TodoInput />            
                <TodoList />
                <VisibilityFilter />
            </TodoContext.Provider>
        </div>
    )
};
const mapStateToProps = state => ({todoList: state.todoList, currentFilter: state.currentFilter});
export default connect(mapStateToProps, {
    addTodo,
    deleteTodo,
    editTodo,
    toggleTodo
})(Todo);