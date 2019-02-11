/*
存放每一個模塊需要進行的派發任務（ActionCreator）
 */

import {ADD_TODO, FILTER_TODO, UPDATE_TODO_STATE, DELETE_TODO} from './actions-types'

// 增加todo
export const addTodo = (todo) => ({type: ADD_TODO, todo});

// 篩選todo，text（all / complete / uncomplete）
export const filterTodo = (text) => ({type: FILTER_TODO, data: text});
// export const filterTodo = (text) => ({type: FILTER_TODO, text});

// 更新todo的狀態信息
export const updateTodoState = (todoId, newState) => ({type: UPDATE_TODO_STATE, todoId, newState});

// 刪除指定任務信息
export const deleteTodo = (deleteId) => ({type: DELETE_TODO, deleteId});

