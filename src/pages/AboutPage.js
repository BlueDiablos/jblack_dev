import React from "react";
import "./AboutPage.css";
import Pane from "../components/Pane";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import Footer from '../components/Footer';


class AboutPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      info: [
        {
          id: 0,
          title: "Who I am",
          header: "Joseph Blackledge",
          body:
            "I am a hardworking, passionate individual who seeks to obtain all the knowledge I can from developers and people from many diverse backgrounds."
            + " I enjoy wearing many different hats as a developer; I find that working on all the aspects of software allows me to understand it deeper."
            + " Frontend, backend, QA testing, Database administration I enjoy it all."
        },
        {
          id: 1,
          title: "Education",
          header: "UNCC",
          body:
            "Graduated from the University of North Carolina at Charlotte with a Bachelors of Science in Computer Science and a Minor in Psychology in May of 2020. " +
            " Here I learned the Computer Science fundementals such as: computer programming, computer organization, data structures and algorithms, operating systems and computer networking." 
            + " I also studied the software engineering process and the different methods and frameworks that help make it successful, like Agile development, Scrum methodologies and version control."
            
        },
      ]
    };
  }

  makePanes = info => {
    return info.map(info => {
      return <Pane info={info} />;
    });
  };

  render() {
    return (
      <div id="App">
        <Container fluid={true}>
          <Row className="justify-content-around">
            {this.makePanes(this.state.info)}
          </Row>
        </Container>
        <Footer/>
      </div>
    );
  }
}

export default AboutPage;
