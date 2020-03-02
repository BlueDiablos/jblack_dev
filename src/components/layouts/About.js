import React from "react";
import { makeStyles } from "@material-ui/core/";
import { Col, Image, Row, Container } from "react-bootstrap";
import uncc from "../../../src/uncc.jpg";

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
    marginTop: "10%"
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
    width: "50%",
    marginLeft: "10%",
    textAlign: "left",
    float: "left",
    fontSize: "250%",
    color: "#1b1b1b",
    letterSpacing: "5px",
    height: "auto"
  },

  body: {
    width: "75%",
    marginLeft: "10%",
    textAlign: "left",
    float: "left",
    fontSize: "200%",
    color: "#1b1b1b",
    letterSpacing: "5px",
    height: "auto"
  },

  outline: {
    boxShadow: "0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)"
  },
  aboutImage: {
    boxShadow: "0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)",
    display: "block",
    marginTop: "20%",
    marginLeft: "auto",
    marginRight: "auto",
    width: "60%",
    height: "auto"
  }
}));

function About() {
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <div className={classes.hero}>
        <h3 className={classes.line}>"This one's gonna go for miles"</h3>
      </div>
      <div class={classes.scrolldown}></div>

      <div className={classes.outline}></div>

      <div className={classes.next}>
        <Col lg={12} md={12}>
          <h1 className={classes.tag}>Education.</h1>
          <p className={classes.body}>
            While working in sales at Best Buy, I obtained my Bachelors of
            Science in Computer Science with a focus on Software Engineering and
            a minor in Psychology. Here I learned how the software development
            process works; how to build and maintain quality software;
            understanding logic design; assembly and high level programming. It
            was also here, that I honed my skills as a developer with my peers.
            Gaining team building skills and lasting relationships.
          </p>
          <br></br>
        </Col>
        <Col lg={12} md={12} sm={1} xs={1}>
          <Image className={classes.aboutImage} src={uncc} rounded />
        </Col>
      </div>

      <div className={classes.outline}></div>

      <div className={classes.next}>
        <Col lg={12} md={12}>
          <h1 className={classes.tag}>Skills.</h1>
          <p className={classes.body}>
            I'm a software developer who specializes in high level programming
            languages like Java, C#, Ruby, JavaScript and some of the web
            frameworks and libraries that go along with them. (Asp.net, JSP,
            React). My experience extends to domain-specific languages/Tools as
            well --namely MySQL and SQLServer. I also possess knowledge of the
            Software Development Life Cycle (SDLC) and the various processes,
            frameworks and models (Agile, XP, Waterfall, Iterative ) that go
            along with it.
          </p>
          <br></br>
        </Col>
        <Col lg={12} md={12} sm={1} xs={1}>
        
        </Col>
      </div>
    </div>
  );
}
export default About;
