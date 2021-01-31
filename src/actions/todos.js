import { createAction } from '@reduxjs/toolkit';
const ADD_TODO = 'ADD_TODO';
const DELETE_TODO = 'DELETE_TODO';
const TOGGLE_TODO = 'TOGGLE_TODO';
const EDIT_TODO = 'EDIT_TODO';

export const addTodo = createAction(ADD_TODO);
export const deleteTodo = createAction(DELETE_TODO);
export const editTodo = createAction(EDIT_TODO);
export const toggleTodo = createAction(TOGGLE_TODO);

