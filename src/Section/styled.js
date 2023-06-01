import styled from "styled-components";

export const StyledSection = styled.section`
	margin: 10px 0;
  background: white;
  box-shadow: 0 0 5px #ddd;
`;

export const Header = styled.header`
  display: grid;
  grid-template-columns: 1fr auto;
  justify-content: center;
  border-bottom: 1px solid #ddd;

	@media (max-width: 767px) {
    grid-template-columns: 1fr;
  }
`;

export const StyledTitle = styled.h2`
	font-size: 20px;
  padding: 20px;
  margin: 0;
`;

export const StyledBody = styled.div`
  padding: 20px;
`;