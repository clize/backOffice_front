// import React from 'react';
import React, { useState } from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

// import { IconButton } from '@material-ui/core';
// import MenuIcon from '@material-ui/icons/Menu';


export default function NavBar() {
    const [anchorEl, setAnchorEl] = React.useState(null);
  
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };
  
    return (
      <div>
            <AppBar position="static" >
                 <Toolbar style={style}>
                     {/* <IconButton edge="start" color="inherit" aria-label="Menu"> */}
                     {/* <MenuIcon />
                     </IconButton> */}
                     <Button aria-controls="simple-menu" aria-haspopup="true" color="inherit" backgroundColor='#000000' >
                     CHECK
                     </Button>
                     <Button aria-controls="simple-menu" aria-haspopup="true" color="inherit" a href="/profile">
                     MONITORING
                     </Button>
                     <Button aria-controls="simple-menu" aria-haspopup="true" color="inherit" a href="/codes2">
                     WORK
                     </Button>
                     <Button aria-controls="simple-menu" aria-haspopup="true" color="inherit" a href="/comcodelist">
                     SELECT
                     </Button>
                     <Button aria-controls="simple-menu" aria-haspopup="true" color="inherit" onClick={handleClick}>
                     SELECT
                     </Button>
                     <Menu
                     id="simple-menu"
                     anchorEl={anchorEl}
                     keepMounted
                     open={Boolean(anchorEl)}
                     onClose={handleClose}
                     >
                     <MenuItem onClick={handleClose}>공통코드 관리</MenuItem>
                     <MenuItem onClick={handleClose}>My account</MenuItem>
                     <MenuItem onClick={handleClose}>Logout</MenuItem>
                     </Menu>
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