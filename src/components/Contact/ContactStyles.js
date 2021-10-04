import styled from 'styled-components';
import { motion } from 'framer-motion';

export const ContactSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;

export const ContactContainer = styled.div`
  position: relative;
  /* min-width: 1100px; */
  min-height: 550px;
  display: flex;
  z-index: 1000;
  margin-top: 20px;

  @media only screen and (max-width: 1200px) {
    /* width: 90%; */
    min-width: auto;
    margin: 20px;
    box-shadow: 3px 3px 20px rgba(80, 78, 78, 0.5);
  }
  @media only screen and (max-width: 991px) {
    display: flex;
    flex-direction: column-reverse;
    width: auto;
    height: auto;
  }
`;

export const ContactInfo = styled.div`
  position: absolute;
  width: 350px;
  height: calc(100% - 120px);
  background-color: #212d45;
  background-image: linear-gradient(315deg, #212d45 50%, #4d566a 94%);
  margin: 58px 0 16px;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  justify-content: space-evenly;
  box-shadow: 3px 3px 20px rgba(80, 78, 78, 0.5);
  border-top: 1px solid rgba(255, 255, 255, 0.3);
  border-left: 1px solid rgba(255, 255, 255, 0.3);

  border-radius: 10px;

  img {
    width: 120px;
    height: 120px;
    border-radius: 50%;
  }

  @media only screen and (max-width: 1200px) {
    top: 0;
    height: 550px;
    position: relative;
    box-shadow: none;
    margin: 0;
    border-radius: 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.3);
    border-right: 1px solid rgba(255, 255, 255, 0.3);
  }

  @media only screen and (max-width: 991px) {
    width: 100%;
    height: auto;
    flex-direction: row-reverse;
    justify-content: space-around;
  }
  @media only screen and (max-width: 425px) {
    width: 100%;
    height: auto;
    flex-direction: column;
    justify-content: space-between;
    img {
      margin-top: 30px;
    }
  }
`;

export const InfoContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 30px;
  height: 50%;
  h2 {
    margin-bottom: 20px;
  }
`;

export const InfoItemContainer = styled.div``;

export const InfoItem = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 20px;
  h5 {
    margin-left: 20px;
  }
`;

export const ContactForm = styled.form`
  position: absolute;
  padding: 70px 50px;
  padding-left: 250px;
  margin-left: 150px;
  width: calc(100% - 150px);
  height: 100%;
  background: #fff;
  box-shadow: 0 50px 50px rgba(0, 0, 0, 0.25);

  h2 {
    color: black;
    font-size: 24px;
    font-weight: 500;
  }

  @media only screen and (max-width: 1200px) {
    position: relative;
    width: calc(100% - 350px);
    padding-left: 0;
    margin-left: 0;
    padding: 40px;
    height: 550px;
    box-shadow: none;
  }

  @media only screen and (max-width: 991px) {
    width: 100%;
  }

  @media only screen and (max-width: 600px) {
    height: auto;
  }
`;

export const FormBox = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding-top: 30px;
  .css-18btcsr {
    margin-left: 25px;
    bottom: 15px;
    background: #fff;
  }
`;

export const InputBox = styled.div`
  position: relative;
  margin-bottom: 35px;

  span.email-textarea {
    transform: translateY(-20px);
    font-size: 12px;
    font-weight: 400;
    letter-spacing: 1px;
  }

  span {
    color: black;
  }

  &.w50 {
    width: 47%;
    @media only screen and (max-width: 600px) {
      width: 100%;
    }
  }

  &.w100 {
    width: 100%;
  }

  input,
  textarea {
    width: 100%;
    resize: none;
    padding: 5px 0;
    font-size: 18px;
    font-weight: 300;
    color: #333;
    border: none;
    outline: none;
    border-bottom: 1px solid #777;
  }

  textarea {
    height: 120px;
  }

  span {
    position: absolute;
    left: 0;
    padding: 5px 0;
    pointer-events: none;
    font-size: 18px;
    font-weight: 300;
    transition: 0.3s;
  }

  input:focus ~ span,
  input:valid ~ span,
  textarea:focus ~ span,
  textarea:valid ~ span {
    transform: translateY(-20px);
    font-size: 12px;
    font-weight: 400;
    letter-spacing: 1px;
  }

  .submitButton {
    position: relative;
    cursor: pointer;
    background: #293856;
    color: #fff;
    border: none;
    border-radius: 5px;
    max-width: 150px;
    padding: 12px;
  }

  .submitButton:hover {
    background: #212d45;
  }
`;

export const AlertMessage = styled(motion.div)`
  &.success-msg,
  &.error-msg {
    margin: 10px 0;
    padding: 10px;
    border-radius: 3px 3px 3px 3px;
  }

  &.success-msg {
    color: #270;
    background-color: #dff2bf;
  }

  &.error-msg {
    color: #d8000c;
    background-color: #ffbaba;
  }
`;
