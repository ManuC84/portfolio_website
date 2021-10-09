import styled from 'styled-components';

export const LeftSection = styled.div`
  width: 100%;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 80%;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
`;

export const HeroButton = styled.button`
  width: 200px;
  font-size: 20px;
  font-weight: 600;
  color: #fff;
  cursor: pointer;
  margin: 0 20px 20px 5px;
  height: 55px;
  text-align: center;
  border: none;
  background-size: 300% 100%;
  background-image: linear-gradient(
    to right,
    #667eea,
    #764ba2,
    #6b8dd6,
    #8e37d7
  );
  box-shadow: 0 0 10px 0 rgba(116, 79, 168, 0.75);

  border-radius: 50px;
  moz-transition: all 0.8s ease-in-out;
  -o-transition: all 0.8s ease-in-out;
  -webkit-transition: all 0.8s ease-in-out;
  transition: all 0.8s ease-in-out;
  &:hover {
    background-position: 100% 0;
    moz-transition: all 0.8s ease-in-out;
    -o-transition: all 0.8s ease-in-out;
    -webkit-transition: all 0.8s ease-in-out;
    transition: all 0.8s ease-in-out;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 15px;
  }
`;

export const HeroButton2 = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  font-size: 20px;
  font-weight: 600;
  color: #fff;
  cursor: pointer;
  margin: 0 20px 20px 0;
  height: 55px;
  text-align: center;
  background: transparent;
  border: 2px solid white;

  -webkit-box-shadow: 0px 0px 5px 0 rgba(250, 240, 250, 1);
  -moz-box-shadow: 0px 0px 5px 0 rgba(250, 240, 250, 1);
  box-shadow: 0px 0px 5px 0 rgba(250, 240, 250, 1);
  border-radius: 50px;

  moz-transition: all 0.8s ease-in-out;
  -o-transition: all 0.8s ease-in-out;
  -webkit-transition: all 0.8s ease-in-out;
  transition: all 0.8s ease-in-out;

  &:hover {
    background: white;
    color: #0f1624;
    border: none;
    moz-transition: all 0.8s ease-in-out;
    -o-transition: all 0.8s ease-in-out;
    -webkit-transition: all 0.8s ease-in-out;
    transition: all 0.8s ease-in-out;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 15px;
  }
`;
