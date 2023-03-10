import React from "react";
import { deleteTodo } from "../../store/todoSlice";
import { useDispatch } from "react-redux";
import "./Todo.css";

const Todo = ({ item }) => {
  const dispatch = useDispatch();
  const deleteHanlder = (e) => {
    dispatch(deleteTodo(item.id));
  };
  return (
    <div>
      {item.title}
      <button onClick={deleteHanlder}>delete</button>
    </div>
  );
};

export default Todo;
