import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";

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
  AlertMessage,
} from "./ContactStyles";

import SlideUpWhenVisible from "../../utils/SlideUpWhenVisible";
import { AnimatePresence } from "framer-motion";

import { AiOutlineMail } from "react-icons/ai";
import { FiPhoneCall } from "react-icons/fi";
import { MdLocationOn } from "react-icons/md";
import { IconContext } from "react-icons/lib";
import { TiTick } from "react-icons/ti";
import { IoIosClose } from "react-icons/io";

const Contact = () => {
  const [contactSuccess, setContactSuccess] = useState("");
  const [contactError, setContactError] = useState("");
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        e.target,
        process.env.NEXT_PUBLIC_USER_ID
      )
      .then(
        (result) => {
          setContactSuccess(`Message Sent, We will get back to you shortly`);
          setTimeout(() => {
            setContactSuccess("");
          }, 5000);
        },
        (error) => {
          setContactError(`An error occurred, Please try again`);
          setTimeout(() => {
            setContactError("");
          }, 5000);
        }
      );
    formRef.current.reset();
  };

  return (
    <Section contact id="contact">
      <SectionDivider />
      <SectionTitle main>Contact</SectionTitle>
      <SlideUpWhenVisible>
        <ContactContainer>
          <ContactInfo>
            <img src="/images/photo-manu.jpg" alt="contact-photo" loading="lazy" />
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
          <ContactForm ref={formRef} onSubmit={handleSubmit}>
            <h2>Get In Touch</h2>
            <FormBox>
              <InputBox className="w50">
                <input type="text" name="firstname" required />
                <span>First Name</span>
              </InputBox>
              <InputBox className="w50">
                <input type="text" name="lastname" required />
                <span>Last Name</span>
              </InputBox>
              <InputBox className="w50">
                <input type="email" name="email" required />
                <span>Email Address</span>
              </InputBox>
              <InputBox className="w50">
                <input type="text" name="phone" required />
                <span>Mobile Number</span>
              </InputBox>
              <InputBox className="w100">
                <textarea name="message" required />
                <span>Write your message here...</span>
              </InputBox>

              <InputBox className="w100">
                <input type="submit" value="Send" className="submitButton" />
              </InputBox>
            </FormBox>
            <AnimatePresence>
              {(contactSuccess || contactError) && (
                <AlertMessage
                  className={contactSuccess ? "success-msg" : "error-msg"}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  {contactError ? (
                    <>
                      <IoIosClose /> {contactError}
                    </>
                  ) : (
                    <>
                      <TiTick /> {contactSuccess}
                    </>
                  )}
                </AlertMessage>
              )}
            </AnimatePresence>
          </ContactForm>
        </ContactContainer>
      </SlideUpWhenVisible>
    </Section>
  );
};

export default Contact;
