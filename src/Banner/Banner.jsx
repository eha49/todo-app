import React from "react";
import styled from "styled-components";
import { AppThemeContext } from "../AppThemeProvider/AppThemeProvider";

function Banner() {
  const { isDark } = React.useContext(AppThemeContext);

  return (
    <>
      {isDark && (
        <BannerImage
          src="../../src/assets/images/bg-desktop-dark.jpg"
          alt="banner image"
        />
      )}
      {!isDark && (
        <BannerImage
          src="../../src/assets/images/bg-desktop-light.jpg"
          alt="banner image"
        />
      )}
    </>
  );
}

const BannerImage = styled.img`
  display: block;
  width: 100%;
  height: 200px;
  object-fit: cover;
  object-position: center;
`;

export default Banner;
