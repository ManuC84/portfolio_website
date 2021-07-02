import React from "react";
import { AvatarContainer } from "./HeroImgStyles";
import { svgBg } from "../BackgrooundAnimation/BackgroundAnimation";
import { motion } from "framer-motion";

const HeroImg = () => {
  return (
    <motion.div animate={{ scale: 1.1 }} transition={{ duration: 0.6 }}>
      <AvatarContainer>
        {svgBg.animatedBg}
        <img src="/images/manu-logo5.png" style={{ height: 500, width: 500 }} />
      </AvatarContainer>
    </motion.div>
  );
};

export default HeroImg;
