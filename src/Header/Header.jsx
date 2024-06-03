import styled from "styled-components";

function Header() {
  return (
    <Nav>
      <Title>Todo</Title>
      <Toggle>
        <Icon
          src="../../src/assets/images/icon-sun.svg"
          alt="moon icon"
        />
      </Toggle>
    </Nav>
  );
}

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;

const Title = styled.h1`
  font-size: 2.2rem;
  letter-spacing: 6px;
  text-transform: uppercase;
  color: hsl(0deg, 0%, 95%);
`;

const Toggle = styled.button`
  background: transparent;
  cursor: pointer;
  border: none;
  padding: 0;
  padding-left: 12px;
`;

const Icon = styled.img`
  display: block;
  width: 22px;
`;

export default Header;
