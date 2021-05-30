import { AppBar, Box, Typography } from '@material-ui/core';
import { FC } from 'react';

type NavbarType = {
  title?: string;
};

const Navbar: FC<NavbarType> = ({ title = 'Weather Search' }) => {
  return (
    <AppBar position="static">
      <Box paddingX={2} paddingY={1}>
        <Typography component="h1" variant="h5">
          {title}
        </Typography>
      </Box>
    </AppBar>
  );
};
export default Navbar;
