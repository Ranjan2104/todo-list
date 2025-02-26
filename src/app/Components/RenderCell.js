"use client";

import React from "react";
import Card from "./Card";

const RenderCell = ({ todos, setTodos }) => {
  console.log("state", todos);
  return (
    <div className="render-Main">
      {todos.map((ele, i) => {
        return <Card key={i} ele={ele} sNo={i + 1} setTodos={setTodos}/>;
      })}
    </div>
  );
};

export default RenderCell;
