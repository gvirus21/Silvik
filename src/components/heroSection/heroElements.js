import styled from "styled-components";

export const HeroSectionContainer = styled.div`
  background-color: #f5efed;
  padding: 3em 0;
  min-height: 40em;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

export const HeroH1 = styled.h1`
  font-family: lora;
  font-weight: 700;
  font-size: 3em;
  margin: 0 1em;
  margin-top: 5em;
  max-width: 20em;
  text-align: center;
`;

export const HeroInfo = styled.p`
  font-weight: 500;
  color: #4b443c;
  letter-spacing: 2px;
  font-family: montserrat;
  text-align: center;
  margin: 2em;
  max-width: 50em;
`;

export const Btn = styled.button`
  margin-bottom: 1em;
  padding: 1.2em 1.8em;
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
