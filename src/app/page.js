"use client";

import { useState, useEffect } from "react";
import Header from "./Components/Header";
import InputTag from "./Components/InputTag";
import RenderCell from "./Components/RenderCell";
import { addData, getAllData } from "./utils/IndexDB";

export default function Home() {
  const [todos, setTodos] = useState(null);

  useEffect(() => {
    getAllData("MyDB", "todos").then(setTodos || []);
  }, []);

  const addTodo = async (data) => {
    if (!data) return;
    await addData("MyDB", "todos", { text: data });
    getAllData("MyDB", "todos").then(setTodos);
  };

  if (todos === null) return <p>Loading...</p>;

  return (
    <div>
      <Header />
      <InputTag addTodo={addTodo} />
      <RenderCell todos={todos} setTodos={setTodos} />
    </div>
  );
}
