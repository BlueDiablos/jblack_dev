import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, withRouter } from "react-router-dom";
import { Container } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Joseph Blackledge",
      headerLinks: [
        { title: "Home", path: "/" },
        { title: "About", path: "/about" },
        { title: "Contact", path: "/contact" },
        { title: "Projects", path: "/project"}
      ],

      home: {
        title: "Joseph Blackledge",
        sub: "Software Engineer",
        text: "Click Images To Explore"
      },
      about: {
        title: "'Look at it go Homer; This one's gonna go for miles'"
      },
      contact: {
        title: "Reach out to me",
        sub: "Open for Software Development roles"
      }
    };
  }

  render() {
    return (
      <Router>
        <Container id="nav-color" className="p-0" fluid={true}>
          <Navbar variant="dark" bg="transparent" expand="lg">
            <Navbar.Brand>Jblack</Navbar.Brand>

            <Navbar.Toggle
              className="border-0"
              id="toggle-color"
              aria-controls="navbar-toggle"
            />
            <Navbar.Collapse id="navbar-toggle">
              <Nav className="ml-auto">
                <Link className="nav-link" to="/">
                  Home
                </Link>
  
                <Link className="nav-link" to="/about">
                  About
                </Link>
                <Link className="nav-link" to="/contact">
                  Contact
                </Link>
               
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
            path="/contact"
            exact
            render={() => <ContactPage title={this.state.contact.title} sub={this.state.contact.sub} />}
          />
        </Container>
      </Router>
    
    );
   
  }
}

export default App;
