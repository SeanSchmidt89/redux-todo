import React, { useState } from "react";
import Todo from "../Todo/Todo";
import { useSelector, useDispatch } from "react-redux";
import { sortList, saveList } from "../../store/todoSlice";
import "./TodoList.css";

const TodoList = () => {
  const [save, setSave] = useState(false);
  const [inputText, setInputText] = useState("");
  const todos = useSelector((state) => state.todos.todos.todos);
  const dispatch = useDispatch();

  const selectHandler = (e) => {
    dispatch(sortList(e.target.value));
  };

  const showState = (e) => {
    setSave(!save);
  };

  const saveListHandler = (e) => {
    setInputText(e.target.value);
  };

  const saveHandler = (e) => {
    dispatch(saveList(inputText));
    setInputText("");
  };

  return (
    <div className="todoList">
      {todos.length > 0 && (
        <div className="sort">
          <p>Order by Priority</p>
          <select onChange={selectHandler} defaultValue="-">
            <option>-</option>
            <option>High</option>
            <option>Low</option>
          </select>
          <div className="save-todo">
            {save ? (
              <button onClick={showState}>Cancel</button>
            ) : (
              <button onClick={showState}>Save List</button>
            )}
          </div>
          {save && (
            <div className="save-input">
              <input
                onChange={saveListHandler}
                value={inputText}
                placeholder="List Name"
              />
              <button onClick={saveHandler}>Save</button>
            </div>
          )}
        </div>
      )}
      <div className="list-container">
        {todos.length > 0 &&
          todos.map((item) => <Todo key={item.id} item={item} />)}
      </div>
    </div>
  );
};

export default TodoList;
