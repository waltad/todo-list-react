import styled from "styled-components";

export const Buttons = styled.p`
  display: grid;
  grid-template-columns: auto auto;
  margin: 0;

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
  }
`;

export const Button = styled.button`
  border: none;
  background-color: white;
  color: teal;
  padding: 20px;
  text-align: center;
  cursor: pointer;
  transition: 0.3s;

  @media (max-width: 767px) {
    padding: 0 0 20px 0;
  }

  &:hover {
  color: hsl(180, 100%, 35%);
  }

  &:active {
    color: hsl(180, 100%, 45%);
  }

  &:disabled {
    color: hsl(0, 0%, 80%);
    cursor: not-allowed;
  }
`;