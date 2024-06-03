import React from "react";
import styled from "styled-components";
import Header from "../Header/Header";
import TodoInput from "../TodoInput/TodoInput";

function reducer({ todos, action }) {
  switch (action.type) {
    case "create-todo": {
      return [
        ...todos,
        {
          value: action.value,
          id: action.id,
        },
      ];
    }
  }
}

function Main() {
  const [todos, dispatch] = React.useReducer(reducer, []);
  console.log(todos);

  function createTodo(value) {
    dispatch({
      value,
      id: crypto.randomUUID(),
    });
  }
  return (
    <MaxWidthWrapper>
      <Header />
      <Spacer $height={20} />

      <TodoInput createTodo={createTodo} />
      <Spacer $height={20} />
      <TodosWrapper></TodosWrapper>
    </MaxWidthWrapper>
  );
}

const MaxWidthWrapper = styled.div`
  --y-padding: 12px;
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
`;

const Spacer = styled.div`
  height: ${(props) => props.$height}px;
`;

const TodosWrapper = styled.div`
  background-color: var(--very-dark-desaturated-blue);
`;

export default Main;
