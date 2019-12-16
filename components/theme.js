import { createMuiTheme } from '@material-ui/core/styles';
import { deepPurple, deepOrange, red, grey } from '@material-ui/core/colors';

const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: deepPurple[300],
    },
    secondary: {
      main: deepOrange.A100,
    },
    error: {
      main: red.A400,
    },
    background: {
      default: grey[900],
    },
  },
});

export default theme;
