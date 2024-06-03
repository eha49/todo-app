import styled from "styled-components";
import VisuallyHidden from "../VisuallyHidden/VisuallyHidden";
import { X } from "react-feather";

function TodosItems({ todos, toggleTodo, removeTodo }) {
  return (
    <ol>
      {todos.map(({ id, isCompleted, value }) => {
        return (
          <ListItem key={id} $isCompleted={isCompleted}>
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
            <Button
              onClick={() => {
                removeTodo(id);
              }}
            >
              <X strokeWidth={2.5} size={26} />
              <VisuallyHidden>Remove Todo</VisuallyHidden>
            </Button>
          </ListItem>
        );
      })}
    </ol>
  );
}

const ListItem = styled.li`
  position: relative;
  display: flex;
  gap: 12px;
  align-items: center;
  padding: 14px var(--x-padding);
  border-bottom: 1px solid var(--very-dark-grayish-blue);
  font-weight: var(--weight-light);
  font-weight: ${(props) =>
    props.$isCompleted && "var(--weight-regular)"};
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

const Button = styled.button`
  position: absolute;
  color: var(--very-dark-grayish-blue);
  right: var(--x-padding);
  top: calc(var(--y-padding) + 3px);
  padding: 0;
  border: none;
  background: none;
  display: none;
  cursor: pointer;

  ${ListItem}:hover & {
    display: revert;
  }
`;
export default TodosItems;
