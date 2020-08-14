import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./styles/theme";
import Routes from "./Routes";

const App: React.FC = () => {
    return (
        <ThemeProvider theme={theme}>
            <Routes />
        </ThemeProvider>
    );
};

export default App;
