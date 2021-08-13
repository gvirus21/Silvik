import React from "react";
import {
  CourseContainer,
  CourseGrid,
  CourseDiv,
  CourseHeading,
  CourseInfo,
  CourseBuyButton,
} from "./courseElements";

const CourseSection = () => {
  return (
    <CourseContainer>
      <CourseGrid>
        <CourseDiv>
          <CourseHeading>
            Persuasion Masterclass: How To Powerfully Influence Anyone
          </CourseHeading>
          <CourseInfo>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
            laudantium dolorum.
          </CourseInfo>
          <CourseBuyButton>Buy Now</CourseBuyButton>
        </CourseDiv>
        <CourseDiv>
          <CourseHeading>
            Boost Your Career Success by Developing Your Soft Skills
          </CourseHeading>
          <CourseInfo>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
            laudantium dolorum totam cum quae ipsum aliquam aliquid consequatur
            quasi odit!
          </CourseInfo>
          <CourseBuyButton>Buy Now</CourseBuyButton>
        </CourseDiv>
        <CourseDiv>
          <CourseHeading>
            Master Native English | Speaking Skills, Grammar, and More
          </CourseHeading>
          <CourseInfo>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
            laudantium dolorum.
          </CourseInfo>
          <CourseBuyButton>Buy Now</CourseBuyButton>
        </CourseDiv>
        <CourseDiv>
          <CourseHeading>
            Learn to Code in Python 3: Programming beginner to advanced
          </CourseHeading>
          <CourseInfo>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
            laudantium dolorum totam cum quae ipsum aliquam aliquid consequatur
            quasi odit!
          </CourseInfo>
          <CourseBuyButton>Buy Now</CourseBuyButton>
        </CourseDiv>
        <CourseDiv>
          <CourseHeading>
            Learn To Code By Making a 2D Platformer in Unity
          </CourseHeading>
          <CourseInfo>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
            laudantium dolorum totam cum quae ipsum aliquam aliquid consequatur
            quasi odit!
          </CourseInfo>
          <CourseBuyButton>Buy Now</CourseBuyButton>
        </CourseDiv>
      </CourseGrid>
    </CourseContainer>
  );
};

export default CourseSection;
