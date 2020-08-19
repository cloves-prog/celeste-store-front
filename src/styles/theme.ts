import { createMuiTheme } from "@material-ui/core/styles";
import { orange, grey } from "@material-ui/core/colors";

export default createMuiTheme({
  palette: {
    primary: {
      main: orange[500],
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
