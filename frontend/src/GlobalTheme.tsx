import { createMuiTheme } from '@material-ui/core';

const globalTheme = createMuiTheme({
  overrides: {
    MuiContainer: {
      root: {
        marginTop: '1rem',
      },
    },
  },
});

export default globalTheme;
