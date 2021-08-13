import React from "react";
import {
  Navbar,
  NavContainer,
  Logo,
  LogoDot,
  MobileIcon,
  NavUl,
  NavLi,
  NavLink,
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
          <NavLi>
            <NavLink active={true}>Home</NavLink>
          </NavLi>
          <NavLi>
            <NavLink>Courses</NavLink>
          </NavLi>
          <NavLi>
            <NavLink>Team</NavLink>
          </NavLi>
          <NavLi>
            <NavLink>Contact us</NavLink>
          </NavLi>
        </NavUl>
      </NavContainer>
    </Navbar>
  );
};

export default Nav;
