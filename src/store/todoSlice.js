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
    completeTodo: (state, action) => {
      let id = action.payload;
      let completedTodos = state.todos.map((item) => {
        if (item.id === id) {
          return { ...item, completed: !item.completed };
        }
        return item;
      });
      state.todos = completedTodos;
    },
    updateTodo: (state, action) => {
      let id = action.payload.todoId;
      let updatedTodos = state.todos.map((item) => {
        if (item.id === id) {
          return { ...item, title: action.payload.title };
        }
        return item;
      });
      state.todos = updatedTodos;
    },
    sortList: (state, action) => {
      console.log(action.payload);
      let priority = action.payload;
      if(priority === '-'){
        return
      }
      let sortedList = state.todos.sort((a, b) => {
        if (priority === "High") {
          return b.priorityNum - a.priorityNum;
        } else {
          return a.priorityNum - b.priorityNum;
        }
      });
      state.todos = sortedList;
    },
  },
});

export const { addTodos, deleteTodo, completeTodo, updateTodo, sortList } =
  todoSlice.actions;

export default todoSlice.reducer;
