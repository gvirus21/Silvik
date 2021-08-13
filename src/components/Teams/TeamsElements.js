import styled from "styled-components";

export const TeamsContainer = styled.div`
  height: 30em;
  width: 100vw;
  background-color: aliceblue;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TeamsBox = styled.div`
  height: 25em;
  width: 80vw;
  margin: 3em;
  background-color: lightgrey;
  overflow-x: scroll;
  overflow-y: hidden;
  display: flex;
  justify-content: center;
  background-color: transparent;

  ::-webkit-scrollbar {
    display: none;
  }

  @media screen and (max-width: 1200px) {
    width: 80vw;
  }

  @media screen and (max-width: 700px) {
    justify-content: flex-start;
  }
`;

export const TeamBox = styled.div`
  min-height: 22em;
  min-width: 18em;
  margin: 1em;
  background-color: #fff;
  box-shadow: 0px 2px 20px -10px rgba(0, 0, 0, 0.3);
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Img = styled.img`
  height: 15em;
  border-radius: 10px;
`;

export const TeamHeading = styled.h2`
  font-size: 1.5em;
  font-weight: 700;
  margin: 0.8em;
  color: #000;
`;

export const TeamRole = styled.p`
  font-size: 1.2em;
  font-weight: 300;
  color: #777;
  margin: 0 1em;
`;
