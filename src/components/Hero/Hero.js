import React from 'react';
import { motion } from 'framer-motion';
import {
  Section,
  SectionText,
  SectionTitle,
} from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection, HeroButton, HeroButton2 } from './HeroStyles';
import Link from 'next/link';
import { BsPaperclip } from 'react-icons/bs';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
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
          <SectionTitle main center noMarginTop>
            Hi! I'm Manu <br />
            Welcome To <br />
            My Portfolio
          </SectionTitle>
        </motion.div>

        <motion.div variants={item}>
          <SectionText>
            I'm a highly motivated Web-Developer who is passionate about
            learning new technologies and working hard and smart to bring
            awesome full-stack applications to life.
          </SectionText>
        </motion.div>
        <motion.div
          style={{ display: 'flex', paddingBottom: 32 }}
          variants={item}
        >
          <Link href="#tech">
            <HeroButton>Learn More</HeroButton>
          </Link>
          <HeroButton2
            href="/documents/cv-figma-v5-links-compressed.pdf"
            target="_blank"
          >
            <BsPaperclip />
            Get CV
          </HeroButton2>
        </motion.div>
      </motion.div>
    </LeftSection>
  </Section>
);

export default Hero;
