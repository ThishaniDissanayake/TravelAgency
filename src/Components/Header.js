import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Header = () => (
  <AppBar position="static">
    <Toolbar>
      <Typography variant="h6" sx={{ flexGrow: 1 }}>
        Travel Agency
      </Typography>
      <Button color="inherit" component={Link} to="/">Home</Button>
      <Button color="inherit" component={Link} to="/about">About Us</Button>
      <Button color="inherit" component={Link} to="/destinations">Destinations</Button>
      <Button color="inherit" component={Link} to="/contact">Contact Us</Button>
    </Toolbar>
  </AppBar>
);

export default Header;
