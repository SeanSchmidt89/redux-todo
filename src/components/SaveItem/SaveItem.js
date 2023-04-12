import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { clickSaveItem } from "../../store/todoSlice";
import "./SaveItem.css";

const SaveItem = ({ item }) => {
  const [deleteBtn, setDeleteBtn] = useState(false);
  const dispatch = useDispatch();

  const clickHandler = (e) => {
    dispatch(clickSaveItem(item.name));
    setDeleteBtn(true);

    //
    // get his out of state and make a reducer so you can delete it
    // and pull the valuse of deleteBtn from useSelector and dislpay it
    // on todoList next to save btn
  };
  return (
    <div className="save-item" onClick={clickHandler}>
      {item.name}
      {deleteBtn && <button className="delete-btn">delete</button>}
    </div>
  );
};

export default SaveItem;
