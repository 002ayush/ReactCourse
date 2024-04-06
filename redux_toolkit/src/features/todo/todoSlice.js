import {createSlice,nanoid} from '@reduxjs/toolkit';

const initialState = {
    todos :[],
    edit : false,
    editId : -1,
    editVal : ""
}

export const todoSlice = createSlice({
    name:'todo',
    initialState,
    reducers:{
        addTodo : (state,action) => {
            const todo = {
                
                id:nanoid(),
                text:action.payload,
            }
            state.todos.push(todo)
            localStorage.setItem("Todos",state.todos)
        },
        removeTodo : (state,action) => {
            state.todos = state.todos.filter((todo) => todo.id != action.payload)
        },
        updateTodo : (state,action) => {
           state.todos = state.todos.map((todo)=>{
            if (todo.id === action.payload.id){
                return {...todo,text:action.payload.text}
            }
            return todo;
           })
        },
        setEdit : (state) => {
            state.edit = !state.edit
        },
        setEditInfo : (state,action) => {
            state.editId = action.payload
        },
        setEditValue : (state,action) => {
            state.editVal = action.payload
        }
    }
})
export const {addTodo,removeTodo,updateTodo,setEdit,setEditInfo,setEditValue} = todoSlice.actions
export default todoSlice.reducer