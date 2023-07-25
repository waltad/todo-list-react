import styled from "styled-components";

export const StyledButtons = styled.p`
  display: grid;
  grid-template-columns: auto auto;
  margin: 0;

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
  }
`;
