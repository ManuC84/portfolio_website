import React from "react";
// import emailjs from "emailjs-com";
import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";

import {
  ContactInfo,
  ContactForm,
  FormBox,
  InputBox,
  ContactContainer,
  ContactSection,
  InfoContainer,
  InfoItemContainer,
  InfoItem,
} from "./ContactStyles";

import { AiOutlineMail } from "react-icons/ai";
import { FiPhoneCall } from "react-icons/fi";
import { MdLocationOn } from "react-icons/md";
import { IconContext } from "react-icons/lib";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(`gmail`, process.env.TEMPLATE_ID, e.target, process.env.USER_ID)
      .then(
        (result) => {
          alert("Message Sent, We will get back to you shortly", result.text);
        },
        (error) => {
          alert("An error occurred, Please try again", error.text);
        }
      );
  };

  return (
    <Section contact id="contact">
      <SectionDivider />
      <SectionTitle main>Contact</SectionTitle>
      <ContactContainer>
        <ContactInfo>
          <img src="/images/photo-manu.jpg" alt="photo-manu" />
          <InfoContainer>
            <h2>Contact Info</h2>
            <InfoItemContainer>
              <InfoItem>
                <AiOutlineMail />
                <a
                  href="mailto:mcufre84@gmail.com"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  <h5>mcufre84@gmail.com</h5>
                </a>
              </InfoItem>
              <InfoItem>
                <FiPhoneCall />
                <a
                  href="tel:680832169"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  {" "}
                  <h5>680832169</h5>
                </a>
              </InfoItem>
              <InfoItem>
                <IconContext.Provider value={{ color: "white" }}>
                  <MdLocationOn color="white" />
                </IconContext.Provider>
                <a
                  href="https://goo.gl/maps/uyKNdPVwqSGkpSYZ9"
                  target="_blank"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  <h5>Barcelona, Spain</h5>
                </a>
              </InfoItem>
            </InfoItemContainer>
          </InfoContainer>
        </ContactInfo>
        <ContactForm onSubmit={handleSubmit}>
          <h2>Get In Touch</h2>
          <FormBox>
            <InputBox className="w50">
              <input type="text" required />
              <span>First Name</span>
            </InputBox>
            <InputBox className="w50">
              <input type="text" required />
              <span>Last Name</span>
            </InputBox>
            <InputBox className="w50">
              <input type="email" required />
              <span>Email Address</span>
            </InputBox>
            <InputBox className="w50">
              <input type="text" required />
              <span>Mobile Number</span>
            </InputBox>
            <InputBox className="w100">
              <textarea required />
              <span>Write your message here...</span>
            </InputBox>

            <InputBox className="w100">
              <input type="submit" value="Send" className="submitButton" />
            </InputBox>
          </FormBox>
        </ContactForm>
      </ContactContainer>
    </Section>
  );
};

export default Contact;
