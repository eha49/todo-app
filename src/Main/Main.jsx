import styled from "styled-components";
import Header from "../Header/Header";

function Main() {
  return (
    <MaxWidthWrapper>
      <Header />
    </MaxWidthWrapper>
  );
}

const MaxWidthWrapper = styled.div`
  border: 2px solid white;
  position: fixed;
  top: 5%;
  left: 0;
  right: 0;
  width: 450px;
  max-width: 85%;
  margin-left: auto;
  margin-right: auto;
  min-height: 500px;
`;

export default Main;
