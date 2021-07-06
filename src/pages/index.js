import BgAnimation from "../components/BackgrooundAnimation/BackgroundAnimation";
import Hero from "../components/Hero/Hero";
import Projects from "../components/Projects/Projects";
import Technologies from "../components/Technologies/Technologies";
import Contact from "../components/Contact/Contact";
import { Layout } from "../layout/Layout";
import { Section } from "../styles/GlobalComponents";
import HeroImg from "../components/HeroImg/HeroImg";
import Footer from "../components/Footer/Footer";
import BackToTop from "../utils/backToTopIcon/BackToTop";

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
