import styled, { css } from "styled-components";

export const List = styled.ul`
  list-style-type: none;
  margin: 0px;
  padding: 0px;
`;

export const Item = styled.li`
  display: grid;
  grid-template-columns: auto 1fr auto;
  grid-gap: 10px;
  padding: 10px;
  align-items: center;
  border-bottom: solid 1px #ddd;

  ${({ hidden }) =>
    hidden &&
    css`
      display: none;
    `}
`;

export const Content = styled.p`
  ${({ done }) =>
    done &&
    css`
      text-decoration: line-through;
    `}
`;

export const Button = styled.button`
  border: none;
  color: white;
  width: 30px;
  height: 30px;
  padding: 0;
  cursor: pointer;

  ${({ toggleDone }) =>
    toggleDone &&
    css`
      background-color: ${({ theme }) => theme.taskDoneColor};
      transition: 0.3s;

      &:hover {
        filter: brightness(120%);
      }

      &:active {
        filter: brightness(140%);
      }
    `}

  ${({ remove }) =>
    remove &&
    css`
      border: none;
      background-color: ${({ theme }) => theme.taskRemoveColor};
      transition: 0.3s;

      &:hover {
        filter: brightness(120%);
      }

      &:active {
        filter: brightness(140%);
      }
    `}
`;
