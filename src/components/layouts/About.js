import React from "react";
import { makeStyles } from "@material-ui/core/";
import davenport from "../../../src/davenport.jpg";
import forest from "../../../src/forest.jpg";
import uncc from "../../../src/uncc.jpg";

function About() {
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <div className={classes.hero}>
        <h3 className={classes.line}>"This one's gonna go for miles"</h3>
      </div>
      <div class={classes.scrolldown}></div>
      <div className={classes.next}>
        <h1 className={classes.tag}>
          Education.
          <p>
            While working in sales at Best Buy, I obtained my Bachelors of
            Science in Computer Science with a focus on Software Engineering and
            a minor in Psychology. Here I learned how the software development
            process works; how to build and maintain quality software;
            understanding logic design; assembly and high level programming. It
            was also here, that I honed my skills as a developer with my peers.
            Gaining team building skills and lasting relationships.
          </p>
          <br></br>
        </h1>
        <img className={classes.aboutImage1} src={uncc} alt="UNCC"></img>
      </div>
    </div>
  );
}
const useStyles = makeStyles(theme => ({
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

  wrapper: {
    background: "#1b1b1b",
    height: "100vh"
  },
  hero: {
    height: "100vh",
    backgroundColor: "#1b1b1b",
    display: "block",
    alignItems: "center",
    justifyContent: "center"
  },
  next: {
    height: "100vh",
    backgroundColor: "#ffff",
    marginTop:"10%",
    alignContent:"center"
  },

  line: {
    position: "relative",
    margin: "auto",
    textAlign: "center",
    top: "50%",
    fontSize: "400%",
    color: "#ffff",
    letterSpacing: "10px"
  },

  tag: {
    width: "35%",
    marginLeft: "10%",
    textAlign: "left",
    float: "left",
    fontSize: "200%",
    color: "#1b1b1b",
    letterSpacing: "5px",
    height: "auto"
  },

  outline: {
    boxShadow: "0 10px 20px #1b1b1b, 0 6px 6px #1b1b1b"
  },
  aboutImage1: {
    boxShadow: "0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)",
    textAlign: "right",
    marginRight: "5%",
    width: "50%",
    height: "auto",
    position:"absolute"
  }
}));
export default About;
