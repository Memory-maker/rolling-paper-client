import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import Router from './routes';

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'LeeSeoyun';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2202-2@1.0/LeeSeoyun.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }

  ${reset};
  * {
    box-sizing: border-box;
  }

  html, body {
    font-family: 'LeeSeoyun', Inter, Arial;
    width: 100%;
    height: 100%;
  }

  input, textarea, select, button { 
    font-family:inherit; 
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
