import styled from "styled-components";

export const HeroSectionContainer = styled.div`
  background-color: #f5efed;
  height: 40em;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const HeroH1 = styled.h1`
  font-weight: 700;
  font-size: 3em;
  margin: 2em;
`;

export const Btn = styled.button`
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
