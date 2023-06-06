import React from "react";

const style = {
  backgroundColor: "#c1ffff",
  width: "400px",
  height: "30px",
  padding: "8px",
  margin: "8px",
  borderRadius: "8px"
};

export const InputTodo = (props) => {
  const { todoText, onChangeText, onClickAdd, triger } = props;
  return (
    <div style={style}>
      <input
        disabled={triger}
        placeholder="input-words"
        value={todoText}
        onChange={onChangeText}
      />
      <button disabled={triger} onClick={onClickAdd}>
        ADD
      </button>
    </div>
  );
};
