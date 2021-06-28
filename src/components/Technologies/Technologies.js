import React from "react";
import { DiFirebase, DiReact, DiZend, DiNodejsSmall } from "react-icons/di";
import { FaServer } from "react-icons/fa";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import SlideUpWhenVisible from "../../utils/slideUpWhenVisible";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./TechnologiesStyles";

const Technologies = () => (
  <Section id="tech">
    <SectionDivider />
    <SectionTitle main>About</SectionTitle>
    <SlideUpWhenVisible>
      <SectionText>
        While my main focus has been Javascript both in the front-end and
        back-end, specializing in React.js and Express.js, I've also taken
        courses and dabbled in PHP and specially Laravel of which I'm a big fan
        . Regarding databases I have experience with MongoDb and MySql. My
        favorite CSS libraries/frameworks are Material-UI and Styled-Components.
        For state management I specially enjoy Redux-toolkit and have worked
        extensively with it.
      </SectionText>
    </SlideUpWhenVisible>
    <SlideUpWhenVisible>
      <List>
        <ListItem>
          <DiReact size="3rem" />
          <ListContainer>
            <ListTitle>Front-End</ListTitle>
            <ListParagraph>
              experience with <br />
              React.js, Next.js, Redux-Toolkit
            </ListParagraph>
          </ListContainer>
        </ListItem>
        <ListItem>
          <DiNodejsSmall size="3rem" />
          <ListContainer>
            <ListTitle>Back-End</ListTitle>
            <ListParagraph>
              experience with <br />
              Express.js, Laravel
            </ListParagraph>
          </ListContainer>
        </ListItem>
        <ListItem>
          <DiFirebase size="3rem" />
          <ListContainer>
            <ListTitle>Databases</ListTitle>
            <ListParagraph>
              experience with <br />
              MongoDb, MySql, Firebase
            </ListParagraph>
          </ListContainer>
        </ListItem>
      </List>
    </SlideUpWhenVisible>
  </Section>
);

export default Technologies;
