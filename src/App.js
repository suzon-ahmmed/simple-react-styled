// import "./assets/css/main.css";
// import BasicStyle from "./components/BasicStyle";
import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./components/styles/Global.styles";
import Tutorial from "./components/Tutorial";

export const themeContext = React.createContext();

const lightTheme = {
  bgColor: "#f0f2f5",
  CardCpmtainerColor: "#fff",
  title: "red",
  subtext: "#1040c5",
  btnColor: '#4361ee',
  btnHoverBg: '#4361ee',
  ToggleSwitchColor: '#262626'
};
const darkTheme = {
  bgColor: "#262626",
  CardCpmtainerColor: "#1e1e1e",
  title: "#fff",
  subtext: "#aaa",
  btnColor: '#aaa',
  btnHoverBg: '#262626',
  ToggleSwitchColor: '#fff'
};

function App() {
  const [theme, setTheme] = useState("dark");

  const isLightTheme = theme === "light";

  const checkTheme = () => {
    setTheme(isLightTheme ? "dark" : "light");
  };

  return (
    <div>
      {/* <BasicStyle /> */}
      <GlobalStyle />
      <themeContext.Provider value={checkTheme}>
        <ThemeProvider theme={isLightTheme ? lightTheme : darkTheme}>
          <Tutorial />
        </ThemeProvider>
      </themeContext.Provider>
    </div>
  );
}

export default App;
