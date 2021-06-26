import Acomplishments from "../components/Acomplishments/Acomplishments";
import BgAnimation from "../components/BackgrooundAnimation/BackgroundAnimation";
import Hero from "../components/Hero/Hero";
import Projects from "../components/Projects/Projects";
import Technologies from "../components/Technologies/Technologies";
import Timeline from "../components/TimeLine/TimeLine";
import { Layout } from "../layout/Layout";
import { Section } from "../styles/GlobalComponents";
import Image from "next/image";

const Home = () => {
  return (
    <Layout>
      <Section grid>
        <Hero />
        <BgAnimation />
        <div
          style={{
            position: "absolute",
            top: 20,
            right: 30,
            borderRadius: "50%",
          }}
        >
          <img
            src="/images/manu-logo2.png"
            style={{
              height: 500,
              width: 500,
              borderRadius: "50%",
              boxShadow: "0 0 8px 8px white inset",
            }}
          />
        </div>
      </Section>
      <Projects />
      <Technologies />
    </Layout>
  );
};

export default Home;
