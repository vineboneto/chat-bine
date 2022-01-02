import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  * {
    font-family: Poppins;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html::-webkit-scrollbar {
    width: 15;
    background-color: #2b2b2b;
  }

  html::-webkit-scrollbar-thumb {
    background: #959595;
    border-radius: 10px;
  }

  html::-webkit-scrollbar-thumb:hover {
    background-color: #e1e1e1;
  }

  html,
  body {
    height: 100%;
    outline: 0;
    background-color: #131516;
  }

  h1 {
    font-size: 30px;
    font-weight: 300;
    align-self: center;
    color: #e8e6e3;
  }

  input {
    height: 2.5rem;
    padding: 0 20px;
    border-radius: 8px;
    margin: 15px 0;
    border: none;
    background-color: #181a1b;
    color: #e8e6e3;
    outline: none;
  }


  input::-webkit-input-placeholder {
    font-family: Poppins;
  }
  input::-ms-input-placeholder {
    font-family: Poppins;
  }
  input::-moz-placeholder {
    font-family: Poppins;
  }
  input::-moz-placeholder {
    font-family: Poppins;
  }

  button {
    height: 2.5rem;
    text-transform: uppercase;
    border-radius: 8px;
    border: none;
    cursor: pointer;
    color: #e8e6e3;
    background-color: #181a1b;
  }

  button:hover {
    background-color: #3e4346;
  }
`
