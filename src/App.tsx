import { ThemeProvider } from "styled-components";
import Router from "./routes";
import GlobalStyle from "./styles/GlobalyStyle";
import theme from "./theme";
import { createContext, useState, Dispatch, SetStateAction } from "react";

interface State {
  isToggle: boolean;
  setIsToggle: Dispatch<SetStateAction<boolean>>;
  isLock: boolean;
  setIsLock: Dispatch<SetStateAction<boolean>>;
}

export const CreateContext = createContext<State | null>(null);
function App() {
  const [isToggle, setIsToggle] = useState(false);
  const [isLock, setIsLock] = useState(false);
  return (
    <CreateContext.Provider value={{ isToggle, setIsToggle, isLock, setIsLock }}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Router />
      </ThemeProvider>
    </CreateContext.Provider>
  );
}

export default App;
