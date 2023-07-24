import { NavLink } from "react-router-dom";
import styled from "styled-components";

const activeClassName = "active";

export const StyledNavLink = styled(NavLink).attrs(() => ({
  activeClassName,
}))`
  color: white;
  &.${activeClassName} {
    font-weight: bold;
  }
`;

export const StyledLi = styled.li`
  list-style-type: none;
  text-align: center;
`;

export const StyledUl = styled.ul`
  background-color: ${({ theme }) => theme.mainColor};
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 20px;
`;