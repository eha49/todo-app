import styled from "styled-components";
import { X } from "react-feather";

function TodosItems({ todos, toggleTodo }) {
  return (
    <ol>
      {todos.map(({ id, isCompleted, value }) => {
        return (
          <ListItem key={id}>
            <Checkbox
              id={id}
              type="checkbox"
              checked={isCompleted}
              onChange={() => {
                toggleTodo(id);
              }}
            />
            <Label htmlFor={id} $isCompleted={isCompleted}>
              {value}
            </Label>
            <Remove strokeWidth={1} size={26} strokeOpacity={0.7} />
          </ListItem>
        );
      })}
    </ol>
  );
}

const ListItem = styled.li`
  display: flex;
  gap: 12px;
  align-items: center;
  padding: 14px var(--x-padding);
  border-bottom: 1px solid var(--very-dark-grayish-blue);
`;

const Checkbox = styled.input`
  width: 18px;
  height: 18px;
  clip-path: circle(47% at 50% 50%);
`;

const Label = styled.label`
  color: inherit;
  font-size: 1rem;
  margin-top: 4px;
  text-decoration: ${(props) => props.$isCompleted && "line-through"};
  color: ${(props) =>
    props.$isCompleted && "var(--very-dark-grayish-blue)"};
  text-decoration-thickness: 2px;
`;

const Remove = styled(X)`
  margin-top: -1px;
  margin-left: auto;
  display: none;
  cursor: pointer;

  ${ListItem}:hover & {
    display: revert;
  }
`;
export default TodosItems;
