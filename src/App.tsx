import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import Router from './routes';

const GlobalStyles = createGlobalStyle`
  ${reset};
  * {
    box-sizing: border-box;
  }

  html, body {
    width: 100%;
    height: 100%;
  }

  @font-face {
    font-family: 'LeeSeoyun';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2202-2@1.0/LeeSeoyun.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}

input, textarea, select { font-family:inherit; }

:root {
  // color
  --disable-color: #F1F1F1;
  --background-color: #FFF8EB;;
  --point-color: #F05A39;
  --sub-point-color: #FFBA47;
  --blackground-point-color: #FCEFD6;
  --b-mid-color: #787878;
  --b-low-color: #C0C0C0;
  --point-low-color: #f05a39cc;
  --background-dark-color: #736D62;
  --white-color: #ffffff;
  --black-color: #222222;
  // card color
  --card-pink-color: #FFD3D3;
  --card-blue-color: #D3EAFF;
  --card-green-color: #DEF9C4;
  --card-purple-color: #EFCCFF;
  --card-yellow-color: #FFF5BF;
  // text color
  --text-red-color: #FF0000;
  --text-blue-color : #0085FF;
  --text-green-color: #7DFF00;
  --text-purple-color: #AD00FF;
  --text-yellow-color: #FFD600;
}
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <Router />
    </>
  );
}

export default App;
