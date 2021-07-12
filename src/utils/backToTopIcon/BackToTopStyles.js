import styled, { keyframes } from "styled-components";

export const BackToTopIconContainer = styled.div`
  position: fixed;
  display: flex;
  cursor: pointer;
  flex-direction: column;
  bottom: 50px;
  right: 50px;
  z-index: 1000;
  @media ${(props) => props.theme.breakpoints.lg} {
    right: 10px;
    bottom: 10px;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    right: 0px;
    bottom: 10px;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    right: 5px;
    bottom: 10px;
    align-items: flex-end;
  }
`;

export const BackToTopIcon = styled.div`
  height: 1.5em;
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 3px;
  h5 {
    font-size: 10px;
  }
  border: 1px solid white;
  border-radius: 5px;
  transition: all 0.2s ease-in;
  &:hover {
    transform: scale(1.1);
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 50%;
  }
`;
