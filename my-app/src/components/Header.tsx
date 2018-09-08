import {AppBar, IconButton, Toolbar, Typography} from '@material-ui/core/';
import * as React from 'react';
import MenuIcon from '@material-ui/core/MenuItem';

//import { Nav, Navbar, NavItem } from 'react-bootstrap';
//import { IndexLinkContainer } from "react-router-bootstrap";
import { Link } from 'react-router-dom';

export const Header: React.StatelessComponent<{}> = () => {
    return (
            <AppBar position="static">
                <Toolbar>
                    <IconButton  aria-label="Menu" color="inherit">
                        <MenuIcon aria-haspopup="true"/>
                    </IconButton>
                    <Typography variant="display2" color="inherit">
                        <Link style={{color: "white"}} to="/">Git gud</Link>
                        <Link to="/FirstComponent"> Page 1 </Link>
                        <Link to="/SecondComponent"> Page 2 </Link>
                    </Typography>
                </Toolbar>
            </AppBar>
    );
}