import React from "react";
import List from "./List";

export default function Lists({ todoData, setTodoData }) {
  return (
    <>
      {todoData.map((data) => (
        <List key={data.id} setTodoData={setTodoData} data={data} />
      ))}
    </>
  );
}
