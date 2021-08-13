import styled from "styled-components";

export const CourseContainer = styled.div`
  width: 100vw;
  /* background-color: #c49991; */
  background-color: #212223;
`;

export const CourseGrid = styled.div`
  width: 80vw;
  margin: 0 auto;
  padding: 2em;
  display: grid;
  grid-gap: 5em;
  place-items: center;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  text-align: center;
`;
export const CourseDiv = styled.div`
  height: 25em;
  width: 20em;
  padding: 2em;
  border-radius: 25px;
  background-color: white;
  box-shadow: 4px 4px 30px -15px black;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

export const Heading = styled.h1`
  font-family: lora;
  font-weight: 700;
  padding: 2em;
  text-align: center;
  color: White;
`;

export const CourseHeading = styled.h1`
  font-family: lora;
  font-size: 1.6em;
  font-weight: 700;
  max-width: 10em;
  text-transform: capitalize;
`;

export const CourseInfo = styled.p`
  font-size: 1em;
  color: #777;
  font-weight: 300;
  margin: 1em 0;
`;

export const CourseBuyButton = styled.button`
  padding: 1em;
  background-color: #000;
  color: #fff;
  font-size: 0.9em;
  letter-spacing: 2px;
  text-transform: uppercase;
  border-radius: 50px;
  border: 2px solid transparent;
  transition: 0.3s all ease-in-out;

  &:hover {
    background-color: transparent;
    border: 2px solid black;
    color: black;
  }

  &:active {
    background-color: #444;
    color: #fff;
    border: 2px solid transparent;
    transition: 0.4s all ease-in-out;
  }
`;
