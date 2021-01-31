import { combineReducers } from 'redux';
import TodoReducer from './todoReducer';
import VisibilityFilterReducer from './visibilityFilterReducer';

export default combineReducers({
    todoList: TodoReducer,
    currentFilter: VisibilityFilterReducer
});