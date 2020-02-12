import React from 'react';
import { makeStyles, Hidden } from '@material-ui/core/';
import {RemoveScrollBar} from 'react-remove-scroll-bar';



function Splash () {
    const classes = useStyles();
  return (
    <div className={classes.App}>
    <RemoveScrollBar></RemoveScrollBar>
      <div className={classes.wrapper}>
        <div className={classes.outline}>
          <div className={classes.hero}>
            <div className={classes.header}>
              <h1 className={classes.line}>Joseph Blackledge: Software Developer.</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  
  
  );
  
}
const useStyles = makeStyles(theme => ({
  App : {  
    background: "#1b1b1b",
    margin: '0',
    width: '100%',
    font: 'Myriad Set Pro',
 
  },
  hero:{
   height: '100vh',
   display: 'flex',
   alignItems: 'center',
  justifyContent: 'center'
  },
  header:{
    fontWeight: "lighter",
    textAlign: "center",
    letterSpacing:"10px",
    lineHeight: "58px"
  },
  line:{
    position: "relative",
    top: "50%",
    textAlign: "center",
    margin: "0",
    fontSize: "300%",
    color: "#ffff"

  },
  outline: {
    boxShadow: "0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)"
  }

}));
export default Splash;