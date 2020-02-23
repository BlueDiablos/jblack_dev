import React from "react";
import { makeStyles } from "@material-ui/core/";
import Chart from "./Chart";
import Barchart from './Barchart';

function Dash() {
  const classes = useStyles();
  return (
    <div className={classes.app}>
      <div className={classes.page}>
      <h3 className={classes.headline}>Yearly GitHub Stats</h3>
        <div className={classes.chart}>
          <Chart />
        
        </div>
        <div className={classes.bar}>
          <Barchart />
          </div>
        
      </div>
    
    </div>
  );
}
const useStyles = makeStyles(theme => ({
  app: {
    margin: "0",
    width: "100%",
    font: "Myriad Set Pro"
  },
  chart: {
    position: "relative",
    width: "50%",
    left: "15%",
    top: "40%",
    font: "Myriad Set Pro"
  },
  bar:{
    position:"absolute",
    width: "10%",
    left: "70%",
    top: "50%",
  },
  scrolldown: {
    position: "absolute",
    left: "50%",
    bottom: "100px",
    display: "block",
    textAlign: "center",
    fontSize: "20px",
    textDecoration: "none",
    textShadow: "0",
    width: "13px",
    height: "13px",
    borderBottom: "2px solid #fff",
    borderRight: "2px solid #fff",
    transform: "translate(-50%, 0) rotate(45deg)"
  },
  pageNext:{
    height: "100vh",
    backgroundColor: "#fff"
  },

  headline: {
    position: "relative",
    margin: "0",
    left:"25%",
    top: "10%",
    fontSize: "300%",
    color: "#ffff",
    letterSpacing: "10px"
  },
  headlineNext: {
    position: "relative",
    margin: "0",
    left:"25%",
    top: "10%",
    fontSize: "300%",
    color: "#1b1b1b",
    letterSpacing: "10px"
  },
  page: {
    height: "100vh",
    backgroundColor: "#1b1b1b"
  }
}));
export default Dash;
