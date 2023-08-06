import { createSlice } from "@reduxjs/toolkit";

const todoReducer = createSlice({
    name: 'todoList',
    initialState: {
        globalList: [],
        filtredList: []
    },
    reducers:{
        addTodo(state,action){
            state.globalList.push(action.payload)
            state.filtredList = state.globalList
        },
        setIsDone(state,action){
            state.globalList.map(task => task.id===action.payload ? task.isDone = !task.isDone : task)
            state.filtredList = state.globalList
        },
        updateTodo(state,action){
            state.globalList.map(task => task.id===action.payload.id ? task.description = action.payload.description: task)
            state.filtredList = state.globalList
        },
        filterByDone(state,action){
            state.filtredList = state.globalList.filter(task => task.isDone === action.payload)
        },
        resetTasks(state){
            state.filtredList = state.globalList
        },
        deleteTodo(state, action) {
            state.globalList = state.globalList.filter(task => task.id !== action.payload);
            state.filtredList = state.globalList;
        },
        
    }
})

export const {addTodo,setIsDone,updateTodo,filterByDone,resetTasks,deleteTodo} = todoReducer.actions
export default todoReducer.reducer