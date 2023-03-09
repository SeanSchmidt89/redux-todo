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
  },
});

export const { addTodos } = todoSlice.actions;

export default todoSlice.reducer;
