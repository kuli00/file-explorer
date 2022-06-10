import background from 'Static/background.jpg';
import cursor from 'Static/cursor.png';
import { createGlobalStyle, css } from 'styled-components';

const scrollBarStyles = css`
  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    background-color: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.palette.secondary};
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: ${({ theme }) => theme.palette.secondary}CF;
  }
`;

const GlobalStyle = createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    overflow: hidden;
    font-family: Helvetica, sans-serif;
  }
  
  body {
    background-image: url(${background});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
  
  * {
    cursor: url(${cursor}) 24 24, auto;
  }
  
  ${scrollBarStyles};
`;

export default GlobalStyle;
