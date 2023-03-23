import React from "react";
import { useDispatch } from "react-redux";
import { clickSaveItem } from "../../store/todoSlice";
import "./SaveItem.css";

const SaveItem = ({ item }) => {
  const dispatch = useDispatch();
  const clickHandler = (e) => {
    dispatch(clickSaveItem(item.name));
  };
  return (
    <div className="save-item" onClick={clickHandler}>
      {item.name}
    </div>
  );
};

export default SaveItem;
