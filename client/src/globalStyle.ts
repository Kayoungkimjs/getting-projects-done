import { createGlobalStyle } from "styled-components";
import { visuallyHidden } from "./styles/utils/a11y";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    font-family: "Karla", sans-serif;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
  }

  html {
    font-family: "Karla", sans-serif;
    font-size: ${({ theme }) => theme.fontSizes.base};
    letter-spacing: ${({ theme }) => theme.letterSpacings.base};
  }

  body {
    font-family: "Karla", sans-serif;
    color: ${({ theme }) => theme.colors.black};
    background-color: ${({ theme }) => theme.colors.background}; 
  }

  h1 {
    margin: 0;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button,
  input,
  select,
  textarea {
    background-color: transparent;
    border: 0;

    &:focus {
      outline: none;
      box-shadow: none;
    }
  }

  a,
  button {
    cursor: pointer;
  }

  button {
    padding: 0;
  }

  ul,
  ol {
    padding-left: 0;
    list-style: none;
  }

 .visuallyHidden {
    ${visuallyHidden()}
  }
`;
