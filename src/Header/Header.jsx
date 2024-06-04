import React from "react";
import styled from "styled-components";
import { AppThemeContext } from "../AppThemeProvider/AppThemeProvider";

function Header() {
  const { isDark, toggleTheme } = React.useContext(AppThemeContext);
  return (
    <Nav>
      <Title>Todo</Title>
      <Toggle onClick={toggleTheme}>
        {isDark && (
          <Icon
            src="../../src/assets/images/icon-sun.svg"
            alt="moon icon"
          />
        )}
        {!isDark && (
          <Icon
            src="../../src/assets/images/icon-moon.svg"
            alt="moon icon"
          />
        )}
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
  width: 18px;
`;

export default Header;
