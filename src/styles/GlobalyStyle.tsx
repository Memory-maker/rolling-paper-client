import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  @font-face {
      font-family: 'LeeSeoyun';
      src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2202-2@1.0/LeeSeoyun.woff') format('woff');
      font-weight: normal;
      font-style: normal;
  }
  @font-face {
    font-family: 'EarlyFontDiary';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_220508@1.0/EarlyFontDiary.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
      font-family: 'PyeongChangPeace-Light';
      src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2206-02@1.0/PyeongChangPeace-Light.woff2') format('woff2');
      font-weight: 300;
      font-style: normal;
  }
  @font-face {
      font-family: 'ParkYongJun';
      src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_220508@1.0/ParkYongJun.woff2') format('woff2');
      font-weight: normal;
      font-style: normal;
  }

  ${reset};
   * {
    box-sizing: border-box;
  }

  html{
    min-height: -webkit-fill-available;
    
  }
  #root{
    height: 100vh; 
  } 
  body {
    width:100%;
    min-height: 100vh; 
    min-height: -webkit-fill-available;
    font-family: 'LeeSeoyun'
  }
  a {
    text-decoration:none;
  color: #767676;
  }
  button{
    border: none;
    background: inherit;
    outline: none;
    font-family: inherit;
  }
  input{
    font-family: inherit;
  }
`;
export default GlobalStyle;
