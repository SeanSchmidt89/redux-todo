import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
};

export const todoSlice = createSlice({
  name: "todoSlice",
  initialState: initialState,
  reducers: {
    addTodos: (state, action) => {
      state.todos.push(action.payload);
    },
    deleteTodo: (state, action) => {
      let id = action.payload;
      let filteredTodos = state.todos.filter((item) => item.id !== id);
      state.todos = filteredTodos;
    },
  },
});

export const { addTodos, deleteTodo } = todoSlice.actions;

export default todoSlice.reducer;
