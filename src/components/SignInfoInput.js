import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../api/api";

export default function SignInfoInput({ type }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("access_token")) navigate("/todo");
  }, [navigate]);

  const checkValidation = (email, password) => {
    return email.includes("@") & (password.length >= 8);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    axios({
      method: "post",
      url: type === "signin" ? "/auth/signin" : "/auth/signup",
      data: {
        email: email,
        password: password,
      },
    }).then((res) => {
      if ((type === "signup") & (res.status === 201)) {
        navigate("/signin");
      } else if ((type === "signin") & (res.status === 200)) {
        if (res.data.access_token) localStorage.setItem("access_token", res.data.access_token);
        navigate("/todo");
        window.location.reload();
      } else {
        alert(res.data.message);
      }
    });
  };

  return (
    <div>
      <form onSubmit={onSubmitHandler}>
        <div data-testid="email-input">
          <label>Email</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}></input>
          <span></span>
        </div>
        <div data-testid="password-input">
          <label>Password</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}></input>
        </div>
        <div></div>
        <br />
        <div data-testid={`${type}-button`}>
          <button type="submit" disabled={!checkValidation(email, password)}>
            {type === "signin" ? "로그인" : "회원가입"}
          </button>
        </div>
      </form>
    </div>
  );
}
