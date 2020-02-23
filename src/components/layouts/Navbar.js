import React from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton'




function Navbar(){
    
  const classes = useStyles();
  return (
  <AppBar position="relative" className={classes.bar}>
    <Toolbar>
    <IconButton edge="center" className={classes.menuButton} color="inherit" aria-label="menu">
    <MenuIcon className={classes.hamburger}>
      <Typography>
        Hello
      </Typography>
    </MenuIcon>
    </IconButton>

    <Typography variant="h4" className={classes.aesthetic}>
      Jblack />
    </Typography>
   
  </Toolbar>
  </AppBar>
  );

};

const useStyles = makeStyles(theme => ({
    aesthetic: {
        letterSpacing:"2px",
        color: "#ffff",
        fontWeight: "bolder",
        left:"50%",
        right:"50%",
        margin: "auto"
    },
    bar: {
      backgroundColor: '#1b1b1b'
    },
    hamburger:{
      fontSize:"30px"

      
    }
   
}));

export default Navbar;
