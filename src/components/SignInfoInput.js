import React, { useState } from "react";

export default function SignInfoInput({ type }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const checkValidation = (email, password) => {
    return email.includes("@") & (password.length >= 8);
  };

  return (
    <div>
      <form>
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
