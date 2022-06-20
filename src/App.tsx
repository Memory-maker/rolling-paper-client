import { ThemeProvider } from "styled-components";
import Router from "./routes";
import GlobalStyle from "./styles/GlobalyStyle";
import theme from "./theme";

declare global {
  interface Window {
    Kakao: any;
  }
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router />
    </ThemeProvider>
  );
}

export default App;
