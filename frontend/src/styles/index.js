import { createGlobalStyle } from "styled-components";

export const theme = {
  colors: {},
};

export const GlobalStyle = createGlobalStyle`
  :root {
  /* colors */
  --white: #fff;
}

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    width: 100%;
    height: 100%;
    font-family: 'Roboto', 'Open Sans', sans-serif;
    line-height: 1.5;
  }

  #root {
    width: 100%;
    min-height: 80%;
  } 

  body {
    display: flex;
    justify-content: center;
    background-color: var(--color-gray-100);
  }
`;
