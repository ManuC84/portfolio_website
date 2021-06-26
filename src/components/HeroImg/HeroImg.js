import React from "react";
import { AvatarContainer } from "./HeroImgStyles";
import { svgBg } from "../BackgrooundAnimation/BackgroundAnimation";

const HeroImg = () => {
  return (
    <AvatarContainer>
      {svgBg.animatedBg}
      <img src="/images/manu-logo2.png" />
    </AvatarContainer>
  );
};

export default HeroImg;
