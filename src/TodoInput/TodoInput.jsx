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
        required={true}
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
  border-radius: 6px;
`;

const TextInput = styled.input`
  background-color: inherit;
  border: none;
  border-bottom: 2px solid var(--very-dark-grayish-blue);
  border-radius: 2px;
  font-weight: var(--weight-light);
  flex: 1;
  color: inherit;
  font-size: 1rem;

  /* overwriting the default min-width for inputs - here used to allow the shrinking at smaller screen sizes */
  min-width: 0;

  &:focus {
    outline-offset: 2px;
  }
`;

const Button = styled.button`
  background-color: var(--very-dark-grayish-blue);
  padding: 8px 16px;
  border: none;
  border-radius: 6px;
  font-size: 1rem;
  color: inherit;
  cursor: pointer;
`;

export default TodoInput;
