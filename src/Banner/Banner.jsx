import styled from "styled-components";

function Banner() {
  return (
    <BannerImage
      src="../../src/assets/images/bg-desktop-dark.jpg"
      alt="banner image"
    />
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
