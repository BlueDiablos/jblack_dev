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
          title: "Joseph Blackledge",
          header: "Who Am I",
          body:
            "I am a passionate, hardworking, young and dynamic software developer who wants to pursue a career in building solutions to complex problems with a diverse and open minded team while continuing to learn and grow as a developer and an individual."
            + " I enjoy wearing many different hats as a developer; I find that working on all the aspects of software allows me to understand it deeper."
            + " Frontend, backend, QA testing, and database administration are just a few of the things I enjoy working on. I also have many different hobbies -building mechanical keyboards is perhaps the strangest and most unique among them."
            + " Not only do I tinker with keyboards, I also build computers and home entertainment servers. Aside from technology, I enjoy spending time with friends and family, experiencing new things, listening to music, playing video games"
            + " and reading fantasy and sci-fi."
        },
        {
          id: 1,
          title: "UNCC",
          header: "Education and Experience",
          body:
            "I Graduated from the University of North Carolina at Charlotte with a Bachelors of Science in Computer Science and a Minor in Psychology in May of 2020. " +
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
