import React from "react";
import SaveItem from "../SaveItem/SaveItem";
import { useSelector } from "react-redux";
import "./SavedList.css";

const SavedList = () => {
  const saved = useSelector((state) => state.todos.saved);
  return (
    <div className="saved-list">
      {saved.length > 0 &&
        saved.map((item) => <SaveItem key={item.name} item={item} />)}
    </div>
  );
};

export default SavedList;
