import Acomplishments from "../components/Acomplishments/Acomplishments";
import BgAnimation from "../components/BackgrooundAnimation/BackgroundAnimation";
import Hero from "../components/Hero/Hero";
import Projects from "../components/Projects/Projects";
import Technologies from "../components/Technologies/Technologies";
import Contact from "../components/Contact/Contact";
import Timeline from "../components/TimeLine/TimeLine";
import { Layout } from "../layout/Layout";
import { Section } from "../styles/GlobalComponents";
import Image from "next/image";
import HeroImg from "../components/HeroImg/HeroImg";
import Footer from "../components/Footer/Footer";

const Home = () => {
  return (
    <Layout>
      <Section grid>
        <Hero />

        <HeroImg />
      </Section>
      <Projects />
      <Technologies />
      <Contact />
    </Layout>
  );
};

export default Home;
