import styled, { keyframes } from "styled-components";

export const BackToTopIconContainer = styled.div`
  position: fixed;
  display: flex;
  cursor: pointer;
  flex-direction: column;
  bottom: 50px;
  right: 50px;
  z-index: 1000;
  @media ${(props) => props.theme.breakpoints.sm} {
    right: 0;
    bottom: 0;
  }
`;

const arrowAnimation = keyframes`
    from {
        opacity: 1;
    }
    to {
        opacity: 0;
        }
`;

export const BackToTopIcon1 = styled.div`
  /* opacity: 0; */
  animation: ${arrowAnimation} 1s linear infinite 0.1s;
`;
export const BackToTopIcon2 = styled.div`
  /* opacity: 0; */
  animation: ${arrowAnimation} 1s linear infinite 0.2s;
`;
export const BackToTopIcon3 = styled.div`
  /* opacity: 0; */
  animation: ${arrowAnimation} 1s linear infinite 0.3s;
`;
