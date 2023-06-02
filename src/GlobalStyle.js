import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html {
  box-sizing: border-box;
	}

	*, ::after, ::before {
  box-sizing: inherit;
	}

	body {
		font-family: ${({theme}) => theme.font};
		background-color: ${({theme}) => theme.backgroundColor};
		word-break: break-word;
	}
`;