import React from "react";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const navigate = useNavigate();
  return (
    <div>
      <button onClick={() => navigate("/signin")}>로그인</button>
      <button onClick={() => navigate("/signup")}>회원가입</button>
      <button onClick={() => navigate("/todo")}>투두리스트</button>
    </div>
  );
}
