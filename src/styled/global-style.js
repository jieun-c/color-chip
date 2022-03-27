import reset from "styled-reset";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  ${reset}

  /* other styles */
  /* i@mport url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR&display=swap'); */

  body{
    font-family: 'Noto Sans KR', sans-serif;
    font-size: 16px;
    line-height: 1.6;
    color: #000;
  }
  a{text-decoration:none; color:#000;}
`;

export default GlobalStyle;
