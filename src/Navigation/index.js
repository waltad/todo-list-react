import { StyledLi, StyledNavLink, StyledUl } from "./styled";

export default () => {
  return (
    <nav>
      <StyledUl>
        <StyledLi>
          <StyledNavLink to="/zadania">Zadania</StyledNavLink>
        </StyledLi>
        <StyledLi>
          <StyledNavLink to="/author">O autorze</StyledNavLink>
        </StyledLi>
      </StyledUl>
    </nav>
  );
};