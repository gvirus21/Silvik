import styled from "styled-components";
import { FaTimes } from "react-icons/fa";

export const SidebarContainer = styled.div`
  position: fixed;
  z-index: 1000;
  height: 100%;
  width: 100%;
  background-color: #eee;
  display: grid;
  align-items: center;
  top: 0;
  right: 0;
  transition: all 0.3s ease-in;
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0%")};
  right: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
`;

export const CloseIcon = styled(FaTimes)`
  color: #000;
  &:hover {
    color: #777;
  }
  &:active {
    color: #000;
  }
`;

export const Icon = styled.div`
  position: absolute;
  top: 3rem;
  right: 3rem;
  background: transparent;
  font-size: 2em;
  cursor: pointer;
  outline: none;
`;

export const SidebarWrapper = styled.div`
  color: #fff;
`;

export const SidebarMenu = styled.ul`
  text-align: center;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(5, 80px);

  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(5, 60px);
  }
`;

export const SidebarLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2em;
  text-transform: uppercase;
  text-decoration: none;
  list-style: none;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  color: ${({ active }) => (active ? "#444444" : "#000")};
  cursor: pointer;

  &:hover {
    color: #777;
  }
  &:active {
    color: #000;
  }
`;
