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
  
  //button {
  //  border: none;
  //  background: none;
  //  clip-path: polygon(0 0, 100% 0, 100% 100%, 90% 100%, 90% 90%, 80% 90%, 80% 100%, 8% 100%, 0 70%);
  //  width: 100px;
  //  position: relative;
  //  color: white;
  //  z-index: 10;
  //  text-transform: uppercase;
  //  font-weight: 700;
  //  
  //  &:before,
  //  &:after {
  //    content: '';
  //    width: 100%;
  //    height: 100%;
  //    position: absolute;
  //    top: 0;
  //    z-index: -1;
  //  }
  //  
  //  &:after {
  //    background-color: rgb(214, 13, 19);
  //    left: -3px;
  //  }
  //  
  //  &:before {
  //    background-color: rgb(253, 238, 9);
  //    left: 0;
  //  }
  //}
`;

export default GlobalStyle;
