import React from "react";

import { Section } from "../../styles/GlobalComponents";

import { SocialIcons } from "../Header/HeaderStyles";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from "react-icons/ai";
import { DiCssdeck } from "react-icons/di";
import {
  CompanyContainer,
  FooterWrapper,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
  Slogan,
  SocialContainer,
  SocialIconsContainer,
} from "./FooterStyles";

const Footer = () => {
  return (
    <Section>
      <FooterWrapper>
        <LinkList>
          <Slogan>
            Made with{" "}
            <span role="img" aria-label="sheep">
              ❤️
            </span>{" "}
            by Manuel Cufré using Next.js
          </Slogan>
          <SocialContainer>
            <SocialIconsContainer>
              <SocialIcons href="https://github.com/ManuC84" target="_blank">
                <AiFillGithub size="3rem" />
              </SocialIcons>
              <SocialIcons
                href="https://www.linkedin.com/in/manuel-cufre/"
                target="_blank"
              >
                <AiFillLinkedin size="3rem" />
              </SocialIcons>
              <SocialIcons
                href="https://twitter.com/manuelcufre3"
                target="_blank"
              >
                <AiFillTwitterCircle size="3rem" />
              </SocialIcons>
            </SocialIconsContainer>
          </SocialContainer>
        </LinkList>
      </FooterWrapper>
    </Section>
  );
};

export default Footer;
