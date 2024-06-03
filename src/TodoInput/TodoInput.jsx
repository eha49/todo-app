import React from "react";
import styled from "styled-components";
import VisuallyHidden from "../VisuallyHidden/VisuallyHidden";

function TodoInput({ createTodo }) {
  const [value, setValue] = React.useState("");
  return (
    <Form
      action="#"
      onSubmit={(event) => {
        event.preventDefault();
        createTodo(value);
        setValue("");
      }}
    >
      <VisuallyHidden>Add New Item:</VisuallyHidden>
      <TextInput
        type="text"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
      <Button>Add</Button>
    </Form>
  );
}

const Form = styled.form`
  display: flex;
  gap: 22px;
  background-color: var(--very-dark-desaturated-blue);
  padding: var(--y-padding) var(--x-padding);
  color: hsl(0deg, 0%, 95%);
  border-radius: 6px;
`;

const TextInput = styled.input`
  background-color: inherit;
  border: none;
  border-bottom: 2px solid hsl(235deg, 24%, 30%);
  border-radius: 2px;

  flex: 1;
  color: inherit;
  font-size: 0.9rem;

  &:focus {
    outline-offset: 2px;
  }
`;

const Button = styled.button`
  background-color: hsl(235deg, 24%, 30%);
  padding: 8px 16px;
  border: none;
  border-radius: 6px;
  font-size: 1rem;
  color: inherit;
`;

export default TodoInput;
