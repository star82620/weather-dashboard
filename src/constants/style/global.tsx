import { createGlobalStyle, css } from "styled-components";

const resetStyle = css`
  html,
  body {
    width: 100%;
    height: 100%;
  }

  * {
    box-sizing: border-box;
    outline: none;
    outline-width: 0;
    padding: 0;
    margin: 0;
  }

  *:focus {
    outline: none;
    outline-width: 0;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: 500;
  }

  p,
  a,
  button {
    padding: 0;
    margin: 0;
  }

  a,
  button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }

  button {
    border: none;
    background: none;
    font-size: 16px;
  }

  input {
    display: inline-block;
    padding: 0;
    margin: 0;
    border: 0;
    vertical-align: middle;
    white-space: normal;
    line-height: 1;
    font-size: 16px;
    background: none;
  }

  ol,
  ul {
    list-style-type: none;
  }
`;

export const GlobalStyle = createGlobalStyle`
${resetStyle}

html,body {
  font-family: 'Noto Sans TC', sans-serif;
  font-size: 16px; 
  font-weight: 400;
  line-height: 1.5;
}
`;
