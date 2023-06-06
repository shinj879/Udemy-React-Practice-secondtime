import React from "react";

export const CompleteTodos = (props) => {
  const { completeTodo, onClickBack } = props;
  return (
    <div className="complete-area">
      <p className="title">Complete Area</p>
      <ul>
        {completeTodo.map((todo, index) => {
          return (
            <div key={todo} className="list-row">
              <li>{todo}</li>
              <button onClick={() => onClickBack(index)}>back</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
