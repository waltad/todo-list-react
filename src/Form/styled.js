import styled from "styled-components";

export const StyledForm = styled.form`
  display: grid;
  grid-template-columns: 1fr auto;
  grid-gap: 20px;
`;

export const Input = styled.input`
  padding: 10px;
  border: 1px solid #ddd;
`;

export const Button = styled.button`
  border: none;
  background-color: teal;
  color: white;
  padding: 10px;
  cursor: pointer;
  transition: 0.5s;

  &:hover {
    background-color: hsl(180, 100%, 30%);
    transform: scale(1.1);
  }

  &:active {
    background-color: hsl(180, 100%, 35%);
  }

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
  }
`;