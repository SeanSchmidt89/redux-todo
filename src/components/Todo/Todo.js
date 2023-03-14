import React from "react";
import { deleteTodo, completeTodo } from "../../store/todoSlice";
import { useDispatch } from "react-redux";
import "./Todo.css";

const Todo = ({ item }) => {
  const dispatch = useDispatch();
  const deleteHanlder = (e) => {
    dispatch(deleteTodo(item.id));
  };

  const completeHandler = (e) => {
    dispatch(completeTodo(item.id));
  };
  return (
    <div>
      {item.title}
      <button onClick={deleteHanlder}>delete</button>
      {item.completed ? "Completed" : "Not Completed"}
      <button onClick={completeHandler}>Complete</button>
    </div>
  );
};

export default Todo;
