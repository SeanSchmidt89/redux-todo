import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodos } from "../../store/todoSlice";
import "./Form.css";

const Form = () => {
  const [inputText, SetInputText] = useState("");
  const dispatch = useDispatch();

  const textHandler = (e) => {
    SetInputText(e.target.value);
  };

  const formHandler = (e) => {
    e.preventDefault();
    let todo = {
      id: Math.random() * 10000,
      title: inputText,
    };
    dispatch(addTodos(todo));
    SetInputText("");
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
    </div>
  );
};

export default Form;
