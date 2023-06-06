import React, { useState } from "react";
import "./styles.css";
import { InputTodo } from "./Components/inputTodo";
import { IncompleteTodos } from "./Components/IncompleteTodos";
import { CompleteTodos } from "./Components/CompleteTodos";

export const App = () => {
  const [todoText, setTodoText] = useState("");
  const [incompleteTodo, setIncompleteTodo] = useState([]);
  const [completeTodo, setCompletetodo] = useState([]);
  const onChangeText = (e) => setTodoText(e.target.value);
  const onClickAdd = () => {
    if (todoText === "") return;
    const newTodos = [...incompleteTodo, todoText];
    setIncompleteTodo(newTodos);
    setTodoText("");
  };

  const onClickDelete = (index) => {
    const newTodos = [...incompleteTodo];
    newTodos.splice(index, 1);
    setIncompleteTodo(newTodos);
  };
  const onClickComplete = (index) => {
    const newTodos = [...completeTodo, incompleteTodo[index]];
    setCompletetodo(newTodos);
    incompleteTodo.splice(index, 1);
    setIncompleteTodo([...incompleteTodo]);
  };

  const onClickBack = (index) => {
    setIncompleteTodo([...incompleteTodo, completeTodo[index]]);
    completeTodo.splice(index, 1);
    setCompletetodo(completeTodo);
  };

  return (
    <>
      <InputTodo
        todoText={todoText}
        onChangeText={onChangeText}
        onClickAdd={onClickAdd}
        triger={incompleteTodo.length >= 5}
      />

      <IncompleteTodos
        incompleteTodo={incompleteTodo}
        onClickComplete={onClickComplete}
        onClickDelete={onClickDelete}
      />
      <CompleteTodos completeTodo={completeTodo} onClickBack={onClickBack} />
    </>
  );
};
