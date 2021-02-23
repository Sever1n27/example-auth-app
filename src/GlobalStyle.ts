import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html, body, #root {
    height: 100%;
    font-size: 16px;
  }
  * {
      box-sizing: border-box;
      padding: 0;
      margin: 0;
  }
`;
