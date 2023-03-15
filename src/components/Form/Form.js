import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodos } from "../../store/todoSlice";
import "./Form.css";

const Form = () => {
  const [inputText, SetInputText] = useState("");
  const [error, SetError] = useState(false);
  const dispatch = useDispatch();

  const textHandler = (e) => {
    SetInputText(e.target.value);
  };

  const formHandler = (e) => {
    e.preventDefault();
    if (inputText.length === 0) {
      SetError(true);
      return;
    }
    let todo = {
      id: Math.random() * 10000,
      title: inputText,
      completed: false,
    };
    dispatch(addTodos(todo));
    SetInputText("");
    SetError(false);
  };
  return (
    <div>
      <form onSubmit={formHandler}>
        <input
          onChange={textHandler}
          value={inputText}
          placeholder="add todo"
        />
        <button type="submit">Add</button>
      </form>
      {error && <p>Please enter a todo</p>}
    </div>
  );
};

export default Form;
