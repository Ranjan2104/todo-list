"use client";

import React, { useState } from "react";
import { deleteData, getAllData } from "../utils/IndexDB";

const Card = ({ sNo, ele, setTodos }) => {
  const [checked, setChecked] = useState(false);

  const handleDelete = async (id) => {
    await deleteData("MyDB", "todos", id);
    getAllData("MyDB", "todos").then(setTodos || []);
  };

  return (
    <div className="card-main" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
      <div style={{ textDecoration: checked ? "line-through" : "none", wordBreak: "break-word", flex: 1 }}>
        {`${sNo} - ${ele.text}`}
      </div>
      <div
        style={{
          cursor: "pointer",
          display: "flex",
          gap: 10,
          alignItems: "center",
        }}
      >
        <input
          type="checkbox"
          checked={checked}
          onChange={() => setChecked(!checked)}
          style={{
            cursor: "pointer",
            width: 20,
            height: 20,
            margin: 0,
          }}
        />
        <img
          src="https://img.icons8.com/?size=100&id=KtLdJpNivpcV&format=png&color=000000"
          height={25}
          onClick={() => handleDelete(ele.id)}
        />
      </div>
    </div>
  );
};

export default Card;
