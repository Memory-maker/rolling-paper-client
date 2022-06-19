import { createGlobalStyle, ThemeProvider } from 'styled-components';
import reset from 'styled-reset';
import Router from './routes';
import GlobalStyle from './styles/GlobalyStyle';
import theme from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router />
    </ThemeProvider>
  );
}

export default App;
