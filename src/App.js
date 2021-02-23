import React from "react";
import { Route, Switch } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./GlobalStyle";
import { Auth } from "@pages";

const theme = {
  colors: {
    main: "#222",
    secondary: "#d9e2ef",
    success: "#42ba96",
    error: "#df4759",
    neutral: "#467fd0",
    border: "#d9e2ef",
  },
  background: "#fff",
  borderRadius: "4px",
  border: "1px solid #d9e2ef",
  transition: "0.3s ease",
};

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Switch>
        <Route exact path="/">
          <Auth />
        </Route>
      </Switch>
    </ThemeProvider>
  );
}
