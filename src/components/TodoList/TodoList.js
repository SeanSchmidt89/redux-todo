import React from "react";
import Todo from "../Todo/Todo";
import { useSelector } from "react-redux";
import "./TodoList.css";

const TodoList = () => {
  const todos = useSelector((state) => state.todos.todos);
  return (
    <div>
      TodoList
      {todos.length > 0 &&
        todos.map((item) => <Todo key={item.id} item={item} />)}
    </div>
  );
};

export default TodoList;
