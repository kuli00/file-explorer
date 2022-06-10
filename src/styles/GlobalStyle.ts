import { createGlobalStyle } from 'styled-components';

import background from '../../static/background.jpg';
import cursor from '../../static/cursor.png';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    overflow: hidden;
    font-family: Helvetica, sans-serif;
    cursor: url(${cursor}) 24 24, auto;
  }
  
  body {
    background-image: url(${background});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
  
  ::-webkit-scrollbar {
    width: 10px;
  }
  
  ::-webkit-scrollbar-track {
    background-color: transparent;
  }
  
  ::-webkit-scrollbar-thumb {
    background-color: #FDEE09;
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: #FDEE09CF;
  }
`;

export default GlobalStyle;
