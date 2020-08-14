import React from "react";
import ReactDOM from "react-dom";
import "fontsource-roboto";
import App from "./App";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./styles/theme";
import { CssBaseline } from "@material-ui/core";

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);
