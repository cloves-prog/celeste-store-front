import { createMuiTheme } from "@material-ui/core/styles";
import { indigo, blueGrey, grey } from "@material-ui/core/colors";

export default createMuiTheme({
  palette: {
    primary: {
      main: indigo[800],
    },
    secondary: {
      main: blueGrey[200],
    },
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        body: {
          backgroundColor: grey[100],
        },
      },
    },
  },
});
