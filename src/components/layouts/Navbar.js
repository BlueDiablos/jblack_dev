import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Navbar,Nav} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'


function NavMenu(){
    
  const classes = useStyles();
  return (
<>
  <Navbar className={classes.bar} variant="dark">
    <Navbar.Brand className={classes.aesthetic}href="/">Jblack</Navbar.Brand>
    <Nav className={classes.aesthetic}>
      <LinkContainer to="/home">
      <Nav.Link >Home</Nav.Link>
      </LinkContainer>
      <LinkContainer to="/about">
      <Nav.Link >About</Nav.Link>
      </LinkContainer>
      <LinkContainer to="/home">
      <Nav.Link>Projects</Nav.Link>
      </LinkContainer>
      <LinkContainer to="/dashboard">
      <Nav.Link >Stats</Nav.Link>
      </LinkContainer>
    </Nav>
  </Navbar>
</>
  );

};  

const useStyles = makeStyles(theme => ({
    aesthetic: {
        letterSpacing:"1px",
        fontSize:"150%",
     
    },
    bar: {
      backgroundColor: '#1b1b1b',
    },
    hamburger:{
      fontSize:"30px"
    }
   
}));

export default NavMenu;
