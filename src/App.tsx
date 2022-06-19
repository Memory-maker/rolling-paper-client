import React from "react";
import GlobalStyles from "./styles/GlobalyStyle";
import Router from "./routes";
import theme from "./theme";
import { ThemeProvider } from "styled-components";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router />
    </ThemeProvider>
  );
}

export default App;
