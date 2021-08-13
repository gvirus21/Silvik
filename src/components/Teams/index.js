import React from "react";
import {
  TeamsContainer,
  TeamsBox,
  TeamBox,
  Heading,
  Img,
  TeamHeading,
  TeamRole,
} from "./TeamsElements";
import img1 from "../../images/team1.png";
import img2 from "../../images/team2.png";
import img3 from "../../images/team3.png";
import img4 from "../../images/team4.png";
const Teams = () => {
  return (
    <>
      <TeamsContainer>
        <Heading>Our Team</Heading>
        <TeamsBox>
          <TeamBox>
            <Img src={img1} />
            <TeamHeading>Rachel Su</TeamHeading>
            <TeamRole>Instructor, Co-Founder</TeamRole>
          </TeamBox>
          <TeamBox>
            <Img src={img2} />
            <TeamHeading>Michel Doe</TeamHeading>
            <TeamRole>Social Media Manager</TeamRole>
          </TeamBox>
          <TeamBox>
            <Img src={img3} />
            <TeamHeading>John sore</TeamHeading>
            <TeamRole>Software Developer</TeamRole>
          </TeamBox>
          <TeamBox>
            <Img src={img4} />
            <TeamHeading>Chris cavil</TeamHeading>
            <TeamRole>Software Developer</TeamRole>
          </TeamBox>
        </TeamsBox>
      </TeamsContainer>
    </>
  );
};

export default Teams;
