import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Form from "../../components/Form";
import Lists from "../../components/Lists";
import axios from "../../api/api";

export default function TodosPage() {
  const [todoData, setTodoData] = useState([]);
  const [value, setValue] = useState("");

  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("access_token")) navigate("/signin");
  }, [navigate]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios({
        url: "/todos",
        method: "GET",
      });
      console.log(request.data);
      setTodoData(request.data);
    }
    fetchData();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    let newTodo = {
      todo: value ? value : alert("리스트를 작성해주세요"),
      isCompleted: false,
    };
    async function fetchData() {
      await axios({
        url: "/todos",
        method: "POST",
        data: newTodo,
      });

      const request = await axios({
        url: "/todos",
        method: "GET",
      });

      setTodoData(request.data);
    }
    fetchData();
    setValue("");
  };

  return (
    <div>
      <div>
        <div>
          <h1>할 일 목록</h1>
        </div>
        <Form handleSubmit={handleSubmit} value={value} setValue={setValue} setTodoData={setTodoData} />
        <Lists todoData={todoData} setTodoData={setTodoData} />
      </div>
    </div>
  );
}
