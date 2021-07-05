import React from "react";
import { AvatarContainer } from "./HeroImgStyles";
import { svgBg } from "../BackgrooundAnimation/BackgroundAnimation";
import { motion } from "framer-motion";

const HeroImg = () => {
  return (
    <motion.div animate={{ scale: 1.1 }} transition={{ duration: 0.6 }}>
      <AvatarContainer>
        {svgBg.animatedBg}
        <img src="/images/manu-logo5.png" alt="hero image" loading="eager" />
      </AvatarContainer>
    </motion.div>
  );
};

export default HeroImg;
