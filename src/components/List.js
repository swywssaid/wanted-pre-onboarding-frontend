import axios from "../api/api";
import React, { useState } from "react";

export default function List({ setTodoData, data }) {
  const [isModifying, setIsModifying] = useState(false);
  const [modifiedTodo, setModifiedTodo] = useState(data.todo);

  const deleteList = (id) => {
    async function fetchData() {
      await axios({
        url: `/todos/${id}`,
        method: "DELETE",
      });

      const request = await axios({
        url: "/todos",
        method: "GET",
      });

      setTodoData(request.data);
    }
    fetchData();
  };

  const handleCompletedChange = (data) => {
    async function fetchData() {
      await axios({
        url: `/todos/${data.id}`,
        method: "PUT",
        data: {
          todo: data.todo,
          isCompleted: !data.isCompleted,
        },
      });
    }
    fetchData();
  };

  const submitmodifiedList = (data) => {
    async function fetchData() {
      await axios({
        url: `/todos/${data.id}`,
        method: "PUT",
        data: {
          todo: modifiedTodo,
          isCompleted: data.isCompleted,
        },
      });

      const request = await axios({
        url: "/todos",
        method: "GET",
      });

      setTodoData(request.data);
      setIsModifying(false);
    }
    fetchData();
  };

  if (isModifying) {
    return (
      <li key={data.id}>
        <label>
          <input type="checkbox" defaultChecked={data.isCompleted} onChange={() => handleCompletedChange(data)} />
          <input data-testid="modify-input" value={modifiedTodo} autoFocus onChange={(e) => setModifiedTodo(e.target.value)} />
        </label>
        <button data-testid="submit-button" onClick={() => submitmodifiedList(data)}>
          제출
        </button>
        <button
          data-testid="cancel-button"
          onClick={() => {
            setIsModifying(false);
            setModifiedTodo(data.todo);
          }}
        >
          취소
        </button>
      </li>
    );
  } else {
    return (
      <li key={data.id}>
        <label>
          <input type="checkbox" defaultChecked={data.isCompleted} onChange={() => handleCompletedChange(data)} /> <span>{data.todo}</span>
        </label>
        <button data-testid="modify-button" onClick={() => setIsModifying(true)}>
          수정
        </button>
        <button data-testid="delete-button" onClick={() => deleteList(data.id)}>
          삭제
        </button>
      </li>
    );
  }
}
