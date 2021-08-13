import React from "react";
import { HeroSectionContainer, HeroH1, HeroInfo, Btn } from "./heroElements";

const HeroSection = () => {
  return (
    <HeroSectionContainer>
      <HeroH1>
        Welcome to Silvik. We redefine Education of modern Generation.
      </HeroH1>
      <HeroInfo>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam ipsa
        odio quia eos soluta error adipisci odit tenetur, nihil sunt. Commodi
        nesciunt at rerum vitae quaerat alias harum ipsum atque?
      </HeroInfo>
      <Btn>SignUp Now</Btn>
    </HeroSectionContainer>
  );
};

export default HeroSection;
