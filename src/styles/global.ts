import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body, input, button {
    font-family: sans-serif;
  }

  body {
    background: #161616;
    color: #999;
  }

  button {
    cursor: pointer;
  }

  #root {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
  }
`;
