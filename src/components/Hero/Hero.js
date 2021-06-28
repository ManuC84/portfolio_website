import React from "react";
import { motion } from "framer-motion";
import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection, HeroButton } from "./HeroStyles";
import Link from "next/link";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <motion.div variants={container} initial="hidden" animate="show">
        <motion.div variants={item}>
          <SectionTitle main center>
            Hi! I'm Manu <br />
            Welcome To <br />
            My Portfolio
          </SectionTitle>
        </motion.div>

        <motion.div variants={item}>
          <SectionText>
            I'm an aspiring full-stack developer who is passionate about
            learning new technologies and working hard and smart to bring
            awesome projects to life.
          </SectionText>
        </motion.div>
        <motion.div variants={item}>
          <Link href="#tech">
            <Button>Learn More</Button>
          </Link>
        </motion.div>
      </motion.div>
    </LeftSection>
  </Section>
);

export default Hero;
