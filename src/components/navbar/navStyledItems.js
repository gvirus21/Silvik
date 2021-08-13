import styled from "styled-components";

export const Navbar = styled.div`
  height: 6em;
  width: 100vw;
  display: flex;
  justify-content: center;
  position: sticky;
  top: 0;
  margin-top: -130px;
  background-color: white;
  box-shadow: 0px 2px 20px -10px rgba(0, 0, 0, 0.3);
`;

export const NavContainer = styled.div`
  height: 5em;
  width: 80vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.h1`
  font-size: 2em;
  font-weight: 700;
  color: #0f1108;
  text-transform: uppercase;
`;

export const LogoDot = styled.span`
  color: orange;
  font-size: 1.2em;
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 700px) {
    display: block;
    position: absolute;
    top: 0.1em;
    right: 0.5em;
    transform: translate(-100%, 60%);
    font-size: 2rem;
    cursor: pointer;
    color: black;
    transition: color 0.2s ease-in;

    &:hover {
      color: grey;
    }
    &:active {
      color: black;
    }
  }
`;
export const NavUl = styled.ul`
  display: flex;
  list-style: none;
  @media screen and (max-width: 700px) {
    display: none;
  }
`;

export const NavLi = styled.li`
  font-size: 1.2em;
  padding: 1em;
  color: #0f1108;
`;
