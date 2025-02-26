"use client";

import React from "react";
import { deleteData, getAllData } from "../utils/IndexDB";

const Card = ({ sNo, ele, setTodos }) => {
  const handleDetele = async (id) => {
    await deleteData("MyDB", "todos", id);
    getAllData("MyDB", "todos").then(setTodos || []);
  };
  return (
    <div className="card-main">
      <div>{`${sNo} - ${ele.text}`}</div>
      <div style={{ cursor: "pointer" }}>
        <img
          src="https://img.icons8.com/?size=100&id=KtLdJpNivpcV&format=png&color=000000"
          height={25}
          onClick={() => handleDetele(ele.id)}
        />
      </div>
    </div>
  );
};

export default Card;
