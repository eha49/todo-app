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
    case "remove-todo": {
      return todos.filter((todo) => {
        return todo.id !== action.id;
      });
    }
    case "clear-todo": {
      return todos.filter((todo) => !todo.isCompleted);
    }
  }
}

function Main() {
  const [todos, dispatch] = React.useReducer(reducer, []);

  const pendingTodosArr = React.useMemo(() => {
    return todos.filter((todo) => {
      return !todo.isCompleted;
    });
  }, [todos]);

  const completedTodosArr = React.useMemo(() => {
    return todos.filter((todo) => {
      return todo.isCompleted;
    });
  }, [todos]);

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

  function removeTodo(id) {
    dispatch({
      type: "remove-todo",
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
        <TodoItems
          todos={todos}
          toggleTodo={toggleTodo}
          removeTodo={removeTodo}
        />
        {todos.length > 0 && (
          <TodoControls>
            <span>
              {pendingTodosArr.length === 1 && "1 item left"}
              {pendingTodosArr.length !== 1 &&
                `${pendingTodosArr.length} items left`}
            </span>
            <ClearCompletedButton
              onClick={() => {
                dispatch({ type: "clear-todo" });
              }}
              disabled={!completedTodosArr.length}
            >
              Clear Completed
            </ClearCompletedButton>
          </TodoControls>
        )}
      </TodosWrapper>
    </MaxWidthWrapper>
  );
}

const MaxWidthWrapper = styled.div`
  --y-padding: 10px;
  --x-padding: 22px;
  position: fixed;
  top: 5%;
  left: 0;
  right: 0;
  width: 450px;
  max-width: 90%;
  margin-left: auto;
  margin-right: auto;
  min-height: 500px;
  color: hsl(0deg, 0%, 95%);
  display: flex;
  flex-direction: column;
`;

const Spacer = styled.div`
  height: ${(props) => props.$height}px;
`;

const TodosWrapper = styled.div`
  background-color: var(--very-dark-desaturated-blue);
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const TodoControls = styled.div`
  font-size: 0.9rem;
  padding: var(--y-padding) var(--x-padding);
  color: var(--dark-grayish-blue);
  display: flex;
  justify-content: space-between;
  margin-top: auto;
`;

const ClearCompletedButton = styled.button`
  padding: 0;
  border: none;
  background-color: transparent;
  color: inherit;
  cursor: pointer;

  &:disabled {
    cursor: not-allowed;
  }

  &:not(:disabled):hover {
    color: hsl(0deg, 0%, 95%);
  }
`;

export default Main;
