import React from "react";
import { makeStyles } from "@material-ui/core/";
import davenport from "../../../src/davenport.jpg";
import forest from "../../../src/forest.jpg";
import uncc from "../../../src/uncc.jpg";

function About() {
  const classes = useStyles();
  return (
    <div className={classes.App}>
      <div className={classes.wrapper}>
        <div className={classes.outline}>
          <div className={classes.hero}>
            <div className={classes.row}>
              <h3 className={classes.line}>My Story</h3>
            </div>
          </div>
        </div>
        <div class={classes.scrolldown}></div>
      </div>
      <div className={classes.next}>
        <div className={classes.outline}>
          <div className={classes.hero2}>
            <h1 className={classes.tag}>
              Born in Davenport Iowa, 1994.
              <p>
                Located halfway between Des Moine Iowa and Chicago Illinois;
                largest of the quad cities. A victorian-era land which is home
                to a historic riverfront and the Figge Art Mesuem.
              </p>
              <br></br>
            </h1>
            <img
              className={classes.aboutImage1}
              src={davenport}
              alt="devenport"
            ></img>
          </div>
        </div>
      </div>
      <div className={classes.next2}>
        <div className={classes.outline}>
          <div className={classes.hero2}>
            <h1 className={classes.tag2}>
              From place to place.
              <p>
                From Texas to Kentucky; Louisiana to Arizona and onward to North
                Carolina. Growing up in an ever changing environment impacted
                who I am today: Resilient and open minded.
              </p>
            </h1>
            <img
              className={classes.aboutImage2}
              src={forest}
              alt="forest"
            ></img>
          </div>
        </div>
      </div>
      <div className={classes.next}>
        <div className={classes.outline}>
          <div className={classes.hero2}>
            <h1 className={classes.tag}>
              Education.
              <p>
                While working in sales at Best Buy, I obtained my Bachelors of
                Science in Computer Science with a focus on Software Engineering
                and a minor in Psychology. Here I learned how the software
                development process works; how to build and maintain quality
                software; understanding logic design; assembly and high level
                programming. It was also here, that I honed my skills as a
                developer with my peers. Gaining team building skills and
                lasting relationships.
              </p>
              <br></br>
            </h1>
            <img
              className={classes.aboutImage2}
              src={uncc}
              alt="UNCC"
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
}
const useStyles = makeStyles(theme => ({
  App: {
    margin: "0",
    width: "100%",
    font: "Myriad Set Pro"
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

  wrapper: {
    background: "#1b1b1b"
  },
  hero: {
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  hero2: {
    height: "100vh",
    display: "flex",
    alignItems: "center"
  },

  next: {
    margin: "0",
    width: "100%",
    font: "Myriad Set Pro",
    boxShadow: "0 10px 20px #1b1b1b, 0 6px 6px #1b1b1b"
  },
  next2: {
    background: "#1b1b1b",
    margin: "0",
    width: "100%",
    font: "Myriad Set Pro",
    boxShadow: "0 10px 20px #1b1b1b, 0 6px 6px #1b1b1b"
  },
  line: {
    position: "relative",
    margin: "0",
    fontSize: "600%",
    color: "#ffff",
    letterSpacing: "10px"
  },

  tag: {
    position: "left",
    marginRight: "10%",
    textAlign: "right",
    fontSize: "200%",
    color: "#1b1b1b",
    letterSpacing: "5px"
  },
  tag2: {
    position: "left",
    marginRight: "10%",
    textAlign: "right",
    fontSize: "200%",
    color: "#ffff",
    letterSpacing: "5px"
  },
  outline: {
    boxShadow: "0 10px 20px #1b1b1b, 0 6px 6px #1b1b1b"
  },
  aboutImage1: {
    boxShadow: "0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)",
    position: "relative",
    width: "100%",
    height: "50%",
    marginRight: "10%"
  },
  aboutImage2: {
    boxShadow: "0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)",
    position: "relative",
    width: "50%",
    height: "50%",
    marginRight: "10%"
  }
}));
export default About;
