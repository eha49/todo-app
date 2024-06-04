import styled from "styled-components";
import VisuallyHidden from "../VisuallyHidden/VisuallyHidden";
import { X, Check } from "react-feather";

function TodosItems({ todos, toggleTodo, removeTodo }) {
  return (
    <ol>
      {todos.map(({ id, isCompleted, value }) => {
        return (
          <ListItem key={id} $isCompleted={isCompleted}>
            <CheckboxContainer>
              <Checkbox
                id={id}
                type="checkbox"
                checked={isCompleted}
                onChange={() => {
                  toggleTodo(id);
                }}
              />
              <PresentationalCheckbox>
                <CustomCheck strokeWidth={5} size={10} />
              </PresentationalCheckbox>
            </CheckboxContainer>
            <Label htmlFor={id} $isCompleted={isCompleted}>
              {value}
            </Label>
            <Button
              onClick={() => {
                removeTodo(id);
              }}
            >
              <X strokeWidth={2} size={26} />
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

const CheckboxContainer = styled.div`
  position: relative;
`;

const Checkbox = styled.input`
  position: absolute;
  inset: 0;
  cursor: pointer;
  opacity: 0;
`;

const PresentationalCheckbox = styled.div`
  width: 18px;
  height: 18px;
  border: 1px solid var(--very-dark-grayish-blue);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  ${Checkbox}:checked + & {
    background: var(--gradient);
  }

  ${Checkbox}:hover + &,
  ${Checkbox}:focus-visible + & {
    border: 2px solid var(--bright-blue);
  }
`;

const CustomCheck = styled(Check)`
  display: none;
  ${Checkbox}:checked ~ ${PresentationalCheckbox} & {
    display: revert;
  }
`;

const Label = styled.label`
  color: inherit;
  font-size: 1rem;
  margin-top: 3px;
  text-decoration: ${(props) => props.$isCompleted && "line-through"};
  color: ${(props) =>
    props.$isCompleted && "var(--dark-grayish-blue)"};
  text-decoration-thickness: 2px;
  cursor: pointer;
`;

const Button = styled.button`
  position: absolute;
  color: var(--dark-grayish-blue);
  right: var(--x-padding);
  top: calc(var(--y-padding) + 3px);
  padding: 0;
  border: none;
  background: none;
  cursor: pointer;

  @media ((hover: hover) and (pointer: fine)) {
    display: none;

    ${ListItem}:hover & {
      display: revert;
    }
  }
`;
export default TodosItems;
