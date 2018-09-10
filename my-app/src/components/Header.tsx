import {AppBar, IconButton, Toolbar, Typography} from '@material-ui/core/';
import * as React from 'react';
import MenuIcon from '@material-ui/core/MenuItem';

//import { Nav, Navbar, NavItem } from 'react-bootstrap';
//import { IndexLinkContainer } from "react-router-bootstrap";


import { Link } from 'react-router-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
      primary: {
        // light: will be calculated from palette.primary.main,
        main: '#ff4400',
        // dark: will be calculated from palette.primary.main,
        // contrastText: will be calculated to contrast with palette.primary.main
      },
      secondary: {
        light: '#0066ff',
        main: '#0044ff',
        // dark: will be calculated from palette.secondary.main,
        contrastText: '#ffcc00',
      },
      // error: will use the default color
    },
    typography: {
      // Use the system font instead of the default Roboto font.
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
    },
  });

export const Header: React.StatelessComponent<{}> = () => {
    return (
        <MuiThemeProvider theme={theme}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton  aria-label="Menu" color="primary">
                        <MenuIcon aria-haspopup="true"/>
                    </IconButton>
                    <Typography variant="display2" color="inherit">
                        <Link style={{color: "white"}} to="/">Github Stalker</Link>
                    </Typography>
                </Toolbar>
            </AppBar>
        </MuiThemeProvider>
    );
}