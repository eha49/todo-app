import styled from "styled-components";

function Header() {
  return (
    <Nav>
      <h1>Todo</h1>
      <button>
        <Icon
          src="../../src/assets/images/icon-sun.svg"
          alt="moon icon"
        />
      </button>
    </Nav>
  );
}

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
`;

const Icon = styled.img`
  display: block;
  width: 100%;
`;

export default Header;
