import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  withRouter,
} from "react-router-dom";
import { Container, NavDropdown } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";  
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import "./index.css"  
import ProjectPage from "./pages/ProjectPage";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Joseph Blackledge",
      headerLinks: [
        { title: "Home", path: "/" },
        { title: "About", path: "/about" },
        { title: "Contact", path: "/contact" },
        { title: "Projects", path: "/project" },
      ],

      home: {
        title: "Joseph Blackledge",
        sub: "Software Developer",
        text: "Click or tap any of the icons below",
      },
      about: {
        title: "Who I Am",
        sub: "'This One's Gonna Go for Miles'"
      },
      contact: {
        title: "Reach out to me",
        sub: "Open for Software Development roles",
      },
      project: {
        title: "Most Notable Projects",
        sub : "Click or tap a card to explore more"
      }
    };
  }

  render() {
    return (
      <Router >
        <Container className="p-0" fluid={true}>
          <Navbar variant="dark" style={{backgroundColor: "#2b2b2b"}} expand="lg">
            <Navbar.Brand href="/">Jblack</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" style={{zIndex: 99, height:"100%", backgroundColor:"#2b2b2b",textAlign:"center"}}>
              <Nav className="ml-auto">
                <Nav.Link  className="nav-link" href="/project">Explore </Nav.Link>
                <Nav.Link  className="nav-link" href="/about">About</Nav.Link>
                <Nav.Link  className="nav-link" href="/contact">Contact</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>

          <Route
            path="/"
            exact
            render={() => (
              <HomePage
                title={this.state.home.title}
                sub={this.state.home.sub}
                text={this.state.home.text}
              />
            )}
          />
          <Route
            path="/about"
            exact
            render={() => <AboutPage title={this.state.about.title} sub={this.state.about.sub} />}
          />
           <Route
            path="/project"
            exact
            render={() => <ProjectPage title={this.state.project.title} sub={this.state.project.sub} />}
          />
          <Route
            path="/contact"
            exact
            render={() => (
              <ContactPage
                title={this.state.contact.title}
                sub={this.state.contact.sub}
              />
            )}
          />
        </Container>
      </Router>
    );
  }
}

export default App;
