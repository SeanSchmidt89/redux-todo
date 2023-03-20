import React, { useState } from "react";
import { deleteTodo, completeTodo, updateTodo } from "../../store/todoSlice";
import { useDispatch } from "react-redux";
import "./Todo.css";

const Todo = ({ item }) => {
  const dispatch = useDispatch();
  const [update, setUpdate] = useState(false);
  const [updateText, setUpdateText] = useState(item.title);
  const deleteHanlder = (e) => {
    dispatch(deleteTodo(item.id));
  };

  const completeHandler = (e) => {
    dispatch(completeTodo(item.id));
  };

  const showUpdateHandler = (e) => {
    setUpdate(!update);
  };

  const inputHandler = (e) => {
    setUpdateText(e.target.value);
  };

  const formHandler = (e) => {
    e.preventDefault();
    dispatch(updateTodo({ todoId: item.id, title: updateText }));
    setUpdateText("");
    setUpdate(!update);
  };
  return (
    <div className="todo">
      <div className="todo-data">
        <p>{item.title}</p>
        <p> {item.completed ? "Completed" : "Not Completed"}</p>
      </div>
      <div className="todo-btns">
        <button onClick={deleteHanlder}>Delete</button>
        <button onClick={completeHandler}>Complete</button>
        <button onClick={showUpdateHandler}>Update</button>
      </div>
      {update && (
        <form onSubmit={formHandler}>
          <input onChange={inputHandler} value={updateText} />
          <button type="submit">Update</button>
        </form>
      )}
    </div>
  );
};

export default Todo;
