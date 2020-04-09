import React from "react";
import "./ContactPage.css";
import Axios from 'axios';

import Hero from "../components/Hero";
import Content from "../components/Content";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import Footer from '../components/Footer';


class ContactPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: "",
      disabled: false,
      emailSent: null,
    };
  }

  handleChange = (event) => {
    console.log(event);

    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    this.setState({
      disabled: true,
    });

    Axios({
      method: 'post',
      url: 'http://localhost:3030/api/send',
      data: this.state
    }).then(res => {
      if (res.data.success) {
        this.setState({
          name: "",
          email: "",
          message: "",
          disabled: false,
          emailSent: true
        })
      } else {
        this.setState({
          disabled: false,
          emailSent: false
        })
      }
    })
      .catch(err => {
        this.setState({
          disabled: false,
          emailSent: false
        })
      })


  };

  render() {
    return (
      <div id="App">
        <Hero title={this.props.title} sub={this.props.sub} />
        <Content>
          <Form onSubmit={this.handleSubmit}>
            <Form.Group>
              <Form.Label htmlFor="full-name">Full Name: </Form.Label>
              <Form.Control
                id="full-name"
                name="name"
                type="text"
                value={this.state.name}
                onChange={this.handleChange}
              ></Form.Control>
            </Form.Group>

            <Form.Group>
              <Form.Label htmlFor="email">Email: </Form.Label>
              <Form.Control
                id="email"
                name="email"
                type="email"
                value={this.state.email}
                onChange={this.handleChange}
              ></Form.Control>
            </Form.Group>

            <Form.Group>
              <Form.Label htmlFor="message">Message: </Form.Label>
              <Form.Control
                id="message"
                name="message"
                as="textarea"
                rows="5"
                value={this.state.message}
                onChange={this.handleChange}
              ></Form.Control>
            </Form.Group>

            <Button
              className="d-inline-block"
              variant="dark"
              type="submit"
              disabled={this.state.disabled}
              onSubmit={this.handleSubmit}
            >
              Send
            </Button>

            {this.state.emailSent === true && (
              <p className="d-inline success-msg">Email Sent</p>
            )}
            {this.state.emailSent === false && (
              <p className="d-inline error-msg">Email Not Sent</p>
            )}
          </Form>
        </Content>
        <Footer />
      </div>
    );
  }
}

export default ContactPage;
