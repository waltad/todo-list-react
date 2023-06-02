import { StyledSection, Header, StyledTitle, StyledBody } from "./styled";

const Section = ({ title, body, extraHeaderContent }) => (
  <StyledSection>
    <Header>
      <StyledTitle>{title}</StyledTitle>
      {extraHeaderContent}
    </Header>
    <StyledBody>
      {body}
    </StyledBody>
  </StyledSection>
);

export default Section;