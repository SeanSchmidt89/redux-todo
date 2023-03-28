import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodos, resetDefaultList } from "../../store/todoSlice";
import "./Form.css";

const Form = () => {
  const [inputText, setInputText] = useState("");
  const [error, setError] = useState(false);
  const [priority, setPriority] = useState("Medium");
  const todos = useSelector((state) => state.todos.todos.todos);
  const dispatch = useDispatch();

  const textHandler = (e) => {
    setInputText(e.target.value);
  };

  const formHandler = (e) => {
    e.preventDefault();
    if (inputText.length === 0) {
      setError(true);
      return;
    }
    let priorityNumber = 2;
    if (priority === "High") {
      priorityNumber = 3;
    } else if (priority === "Low") {
      priorityNumber = 1;
    }
    let todo = {
      id: Math.random() * 10000,
      title: inputText,
      completed: false,
      priority: priority,
      priorityNum: priorityNumber,
    };
    dispatch(addTodos(todo));
    setInputText("");
    setError(false);
  };

  const selectHandler = (e) => {
    setPriority(e.target.value);
  };

  const resetHandler = (e) => {
    dispatch(resetDefaultList())
  }

  return (
    <div className="form">
      <form onSubmit={formHandler}>
        <input
          onChange={textHandler}
          value={inputText}
          placeholder="add todo"
        />
        <select onChange={selectHandler} defaultValue="Medium">
          <option>High</option>
          <option>Medium</option>
          <option>Low</option>
        </select>
        <button type="submit">Add</button>
      </form>
      {todos.length > 0 && <button className="reset-btn" onClick={resetHandler}>New List</button>}
      {error && <p className="error">Please enter a todo</p>}
    </div>
  );
};

export default Form;
