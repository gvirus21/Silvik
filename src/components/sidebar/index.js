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
            <SidebarLink onClick={toggle} active={true}>
              Home
            </SidebarLink>
            <SidebarLink onClick={toggle}>Courses</SidebarLink>
            <SidebarLink onClick={toggle}>Team</SidebarLink>
            <SidebarLink onClick={toggle}>Contact us</SidebarLink>
          </SidebarMenu>
        </SidebarWrapper>
      </SidebarContainer>
    </>
  );
};

export default Sidebar;
