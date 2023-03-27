import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: { name: "default", todos: [] },
  saved: [],
};

export const todoSlice = createSlice({
  name: "todoSlice",
  initialState: initialState,
  reducers: {
    addTodos: (state, action) => {
      state.todos.todos.push(action.payload);
    },
    deleteTodo: (state, action) => {
      let id = action.payload;
      let filteredTodos = state.todos.todos.filter((item) => item.id !== id);
      state.todos.todos = filteredTodos;
    },
    completeTodo: (state, action) => {
      let id = action.payload;
      let completedTodos = state.todos.todos.map((item) => {
        if (item.id === id) {
          return { ...item, completed: !item.completed };
        }
        return item;
      });
      state.todos.todos = completedTodos;
    },
    updateTodo: (state, action) => {
      let id = action.payload.todoId;
      let updatedTodos = state.todos.todos.map((item) => {
        if (item.id === id) {
          return { ...item, title: action.payload.title };
        }
        return item;
      });
      state.todos.todos = updatedTodos;
    },
    sortList: (state, action) => {
      console.log(action.payload);
      let priority = action.payload;
      if (priority === "-") {
        return;
      }
      let sortedList = state.todos.todos.sort((a, b) => {
        if (priority === "High") {
          return b.priorityNum - a.priorityNum;
        } else {
          return a.priorityNum - b.priorityNum;
        }
      });
      state.todos.todos = sortedList;
    },
    saveList: (state, action) => {
      let newSave = { name: action.payload, todos: state.todos.todos };
      state.saved.push(newSave);
      state.todos.todos = [];
    },
    clickSaveItem: (state, action) => {
      let name = action.payload;
      let saved = state.saved.find((item) => item.name === name);
      state.todos.todos = saved.todos;
    },
    resetDefaultList: (state) => {
      state.todos.todos = [];
    },
    deleteList: (state, action) => {
      //let listName = action.payload
      //make button on form apear when listItem is clicked
      //make click handler and send item.name to this function in
      //action.payload
      //delete this list from default list and savedList
    }
  },
});

export const {
  addTodos,
  deleteTodo,
  completeTodo,
  updateTodo,
  sortList,
  saveList,
  clickSaveItem,
  resetDefaultList,
} = todoSlice.actions;

export default todoSlice.reducer;
