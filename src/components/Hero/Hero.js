import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection, HeroButton } from "./HeroStyles";

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hi! I'm Manu <br />
        Welcome To <br />
        My World
      </SectionTitle>
      <SectionText>
        I'm an aspiring full-stack developer who is passionate about learning
        new technologies and working hard and smart to bring awesome projects to
        life.
      </SectionText>
      <Button>Get In Touch</Button>
    </LeftSection>
  </Section>
);

export default Hero;
