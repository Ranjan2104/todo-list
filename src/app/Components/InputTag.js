"use client";

import React, { useState } from "react";

const InputTag = ({ addTodo }) => {
  const [text, setText] = useState("");
  return (
    <>
      <div className="input-main">
        <input
          type="text"
          value={text}
          placeholder="Enter text..."
          className="input-tag"
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div className="btn-main">
        <button
          className="btn-add"
          onClick={() => {
            addTodo(text);
            setText("");
          }}
        >
          Add
        </button>
      </div>
    </>
  );
};

export default InputTag;
