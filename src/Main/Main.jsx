import React from "react";
import styled from "styled-components";
import Header from "../Header/Header";
import TodoInput from "../TodoInput/TodoInput";
import TodoItems from "../TodosItems/TodosItems";

function reducer(todos, action) {
  switch (action.type) {
    case "create-todo": {
      return [
        ...todos,
        {
          value: action.value,
          id: action.id,
          isCompleted: action.isCompleted,
        },
      ];
    }
    case "toggle-todo": {
      return todos.map((todo) => {
        if (todo.id !== action.id) {
          return todo;
        }

        return {
          ...todo,
          isCompleted: !todo.isCompleted,
        };
      });
    }
  }
}

function Main() {
  const [todos, dispatch] = React.useReducer(reducer, []);

  function createTodo(value) {
    dispatch({
      type: "create-todo",
      value,
      isCompleted: false,
      id: crypto.randomUUID(),
    });
  }

  function toggleTodo(id) {
    dispatch({
      type: "toggle-todo",
      id,
    });
  }
  return (
    <MaxWidthWrapper>
      <Header />
      <Spacer $height={10} />
      <TodoInput createTodo={createTodo} />
      <Spacer $height={15} />
      <TodosWrapper>
        <TodoItems todos={todos} toggleTodo={toggleTodo} />
      </TodosWrapper>
    </MaxWidthWrapper>
  );
}

const MaxWidthWrapper = styled.div`
  --y-padding: 10px;
  --x-padding: 22px;
  border: 2px solid white;
  position: fixed;
  top: 5%;
  left: 0;
  right: 0;
  width: 450px;
  max-width: 85%;
  margin-left: auto;
  margin-right: auto;
  min-height: 500px;
  color: hsl(0deg, 0%, 95%);
`;

const Spacer = styled.div`
  height: ${(props) => props.$height}px;
`;

const TodosWrapper = styled.div`
  background-color: var(--very-dark-desaturated-blue);
`;

export default Main;
