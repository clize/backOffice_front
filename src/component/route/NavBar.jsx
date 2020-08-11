import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import { IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';


const NavBar = () => {
    return (
        <div>
            <AppBar position="static">
                <Toolbar style={style}>
                    {/* <IconButton edge="start" color="inherit" aria-label="Menu"> */}
                    {/* <MenuIcon />
                    </IconButton> */}
                    <Button aria-controls="simple-menu" aria-haspopup="true" color="inherit" backgroundColor='#000000' >
                    CHECK
                    </Button>
                    <Button aria-controls="simple-menu" aria-haspopup="true" color="inherit" >
                    MONITORING
                    </Button>
                    <Button aria-controls="simple-menu" aria-haspopup="true" color="inherit" a href="/codes2">
                    WORK
                    </Button>
                    <Button aria-controls="simple-menu" aria-haspopup="true" color="inherit" a href="/codes">
                    SELECT
                    </Button>

                    <Typography variant="h6" style={style} align="right">
                    BACKOFFICE SYSTEM
                    </Typography>

                    {/* <Button color="inherit">Login</Button> */}
                </Toolbar>
            </AppBar>
        </div>
    );
}



const style = {
    flexGrow: 1,
    backgroundColor: '#333333',
}

export default NavBar;

