import React from "react";
import {
  Navbar,
  NavContainer,
  Logo,
  LogoDot,
  MobileIcon,
  NavUl,
  NavLi,
} from "./navStyledItems";

import { FiMenu } from "react-icons/fi";
const Nav = ({ toggle }) => {
  return (
    <Navbar>
      <NavContainer>
        <Logo>
          Silvik<LogoDot>.</LogoDot>
        </Logo>
        <MobileIcon onClick={toggle}>
          <FiMenu />
        </MobileIcon>
        <NavUl>
          <NavLi>Home</NavLi>
          <NavLi>Courses</NavLi>
          <NavLi>Team</NavLi>
          <NavLi>Contact us</NavLi>
        </NavUl>
      </NavContainer>
    </Navbar>
  );
};

export default Nav;
