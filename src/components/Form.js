import React from "react";

export default function Form({ handleSubmit, value, setValue }) {
  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input data-testid="new-todo-input" type="text" name="value" placeholder="해야 할 일을 입력하세요." value={value} onChange={handleChange}></input>
        <button data-testid="new-todo-add-button" type="submit">
          추가
        </button>
      </form>
    </div>
  );
}
