import React from "react";
import ReactDOM from "react-dom";
import "fontsource-roboto";
import App from "./App";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from './styles/theme'
import { CssBaseline } from "@material-ui/core";

ReactDOM.render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <App />
        </ThemeProvider>
    </React.StrictMode>,
    document.getElementById("root")
);
