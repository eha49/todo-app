import styled from "styled-components";

function TodosItems({ todos, toggleTodo }) {
  return (
    <ol>
      {todos.map(({ id, isCompleted, value }) => {
        return (
          <li key={id}>
            <input
              id={id}
              type="checkbox"
              checked={isCompleted}
              onChange={() => {
                toggleTodo(id);
              }}
            />
            <Label htmlFor={id}>{value}</Label>
          </li>
        );
      })}
    </ol>
  );
}

const Label = styled.label`
  color: inherit;
`;
export default TodosItems;
