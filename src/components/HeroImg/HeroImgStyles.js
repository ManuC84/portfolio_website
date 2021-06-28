import styled from "styled-components";

export const AvatarContainer = styled.div`
  position: relative;
  height: 500px;
  width: 500px;
  border-radius: 50%;
  box-shadow: 0 0 20px 8px white inset;
  transform: scale(0.8);

  @media ${(props) => props.theme.breakpoints.lg} {
    height: 400px;
    width: 400px;
    top: 50px;
    img {
      height: 400px;
      width: 400px;
    }
  }
  @media only screen and (max-width: 980px) {
    display: none;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    display: none;
  }

  img {
    position: absolute;
    top: 0;
    right: 0;
    border-radius: 50%;
  }
`;
