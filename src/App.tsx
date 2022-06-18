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
