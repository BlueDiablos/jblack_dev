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
        sub: "Software Engineer",
        text: "Click Images To Explore",
      },
      about: {
        title: "'Look at it go Homer; This one's gonna go for miles'",
      },
      contact: {
        title: "Reach out to me",
        sub: "Open for Software Development roles",
      },
    };
  }

  render() {
    return (
      <Router >
        <Container id="nav-color" className="p-0" fluid={true}>
          <Navbar variant="dark" bg="transparent" expand="lg">
            <Navbar.Brand href="/">Jblack</Navbar.Brand>
            <NavDropdown title="Pages" id="basic-nav-dropdown" className="dropdown">
                <Nav.Link style={{color:"black"}} className="nav-link" href="/">Projects</Nav.Link>
                
                <Nav.Link style={{color:"black"}} className="nav-link" href="/contact">Contact</Nav.Link>
            </NavDropdown>
            <Navbar.Collapse  id="basic-navbar-nav">
              <Nav className="ml-auto">
                <Nav.Link  style={{color:"white"}} className="nav-link" href="/">Projects (Coming Soon) </Nav.Link>
                <Nav.Link  style={{color:"white"}} className="nav-link" href="/about">About</Nav.Link>
                <Nav.Link  style={{color:"white"}} className="nav-link" href="/contact">Contact</Nav.Link>
             
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
            render={() => <AboutPage title={this.state.about.title} />}
          />
           <Route
            path="/project"
            exact
            render={() => <ProjectPage title={this.state.about.title} />}
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
