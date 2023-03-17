import React from "react";
import Todo from "../Todo/Todo";
import { useSelector, useDispatch } from "react-redux";
import { sortList } from "../../store/todoSlice";
import "./TodoList.css";

const TodoList = () => {
  const todos = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();

  const selectHandler = (e) => {
    dispatch(sortList(e.target.value));
  };
  return (
    <div className="todoList">
      <div className="sort">
        <p>Order by Priority</p>
        <select onChange={selectHandler} defaultValue="-">
          <option>-</option>
          <option>High</option>
          <option>Low</option>
        </select>
      </div>
      <div className="list-container">
        {todos.length > 0 &&
          todos.map((item) => <Todo key={item.id} item={item} />)}
      </div>
    </div>
  );
};

export default TodoList;
