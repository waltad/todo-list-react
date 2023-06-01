import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html {
  box-sizing: border-box;
	}

	*, ::after, ::before {
  box-sizing: inherit;
	}

	body {
		font-family: 'Ubuntu', sans-serif;
		background-color: #ddd;
		word-break: break-word;
	}
`;