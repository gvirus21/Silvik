import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
} from "./sidebarElements";

const Sidebar = ({ toggle, isOpen }) => {
  return (
    <>
      <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
          <CloseIcon />
        </Icon>
        <SidebarWrapper>
          <SidebarMenu>
            <SidebarLink
              to="about"
              onClick={toggle}
              smooth={true}
              duration={500}
              exact={true}
              offset={-80}
            >
              Home
            </SidebarLink>
            <SidebarLink
              to="discover"
              onClick={toggle}
              smooth={true}
              duration={500}
              exact={true}
              offset={-80}
            >
              Courses
            </SidebarLink>
            <SidebarLink
              to="services"
              onClick={toggle}
              smooth={true}
              duration={500}
              exact={true}
              offset={-80}
            >
              Team
            </SidebarLink>
            <SidebarLink
              to="services"
              onClick={toggle}
              smooth={true}
              duration={500}
              exact={true}
              offset={-80}
            >
              Contact us
            </SidebarLink>
          </SidebarMenu>
        </SidebarWrapper>
      </SidebarContainer>
    </>
  );
};

export default Sidebar;
