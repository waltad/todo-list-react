import { NavLink } from "react-router-dom";
import styled from "styled-components";

const activeClassName = "active";

export const StyledNavLink = styled(NavLink).attrs(() => ({
  activeClassName,
}))`
  color: white;
  text-decoration: none;
  &.${activeClassName} {
    font-weight: bold;
    border-bottom: 1px solid;
  }
`;

export const StyledLi = styled.li`
  list-style-type: none;
  text-align: center;
  padding: 0 20px 0 20px;
`;

export const StyledUl = styled.ul`
  background-color: ${({ theme }) => theme.mainColor};
  display: flex;
  justify-content: center;
  padding: 20px;
`;