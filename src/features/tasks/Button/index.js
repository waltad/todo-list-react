import styled from "styled-components";

export default styled.button`
  border: none;
  background-color: white;
  color: ${({ theme }) => theme.mainColor};
  padding: 20px;
  text-align: center;
  cursor: pointer;
  transition: 0.3s;

  @media (max-width: 767px) {
    padding: 0 0 20px 0;
  }

  &:hover {
    filter: brightness(120%);
  }

  &:active {
    filter: brightness(140%);
  }

  &:disabled {
    color: grey;
    cursor: not-allowed;
  }
`;
