import { createMuiTheme } from '@material-ui/core/styles'
import { indigo, blueGrey } from '@material-ui/core/colors'


export default createMuiTheme({
    palette: {
        primary: {
            main: indigo[800]
        },
        secondary: {
            main: blueGrey[200]
        },
    }
})
