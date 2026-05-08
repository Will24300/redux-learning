import { createSlice } from "@reduxjs/toolkit";

const todoSlicer = createSlice({
    name: "todo",
    initialState: {
        items: []
    },
    reducers: {
        addTodo: (state, action) => {
            state.items.push({
                id: Date.now(),
                text: action.payload,
                isChecked: false
            })
        }
        ,
    checkTodo: (state, action) => {
        const todo = state.items.find((item)=> item.id === action.payload);
        if (todo) {
            todo.isChecked = !todo.isChecked
        }
    },
    deleteTodo: (state, action) => {
        state.items = state.items.filter((item)=> item.id !== action.payload)
    }
    }
})

export const {addTodo, checkTodo, deleteTodo} = todoSlicer.actions;
export default todoSlicer.reducer;