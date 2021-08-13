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
  font-family: montserrat;
  font-size: 2em;
  font-weight: 700;
  color: #0f1108;
  text-transform: capitalize;
  letter-spacing: 3px;
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
  padding: 1em;
`;

export const NavLink = styled.a`
  font-size: 1em;
  font-family: montserrat;
  /* color: #0f1108; */
  color: ${({ active }) => (active ? "#000" : "#444444")};
  font-weight: ${({ active }) => (active ? "600" : "400")};
  cursor: pointer;
  transition: 0.2s all ease-in-ease-in-out;

  &:hover {
    color: #777;
  }
  &:active {
    color: #000;
  }
`;
