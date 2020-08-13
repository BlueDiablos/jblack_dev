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
          header: "Software Developer",
          body:
            "I graduated from the University of North Carolina at Charlotte with a Bachelor of Science in Computer Science and a minor in Psychology in May of 2020"
            + " It was my time at the University where I learned computer science fundementals such as: computer programming, computer organization, data structures and algorithms, operating systems, computer networking and computer architecture."
            + " I also studied the software engineering process and all of the different tools and methods that make it successful, like agile development methods, scrum, version control, user studies and stories and understanding business requirements."
            +" I am a passionate, hardworking, young and dynamic software developer who wants to pursue a career in building solutions to complex problems with a diverse and open minded team, while continuing to learn and grow as a developer and an individual."
            + " I enjoy wearing many different hats as a developer; I find that working on all the aspects of software allows me to understand it deeper."
            + " Frontend, backend, QA testing, and database administration are just a few of the things I enjoy working on. I also have many different hobbies -building mechanical keyboards is perhaps the strangest and most unique among them."
            + " Not only do I tinker with keyboards, I also build computers and home entertainment servers. Aside from technology, I enjoy spending time with friends and family, experiencing new things, listening to music, playing video games"
            + " and reading fantasy and sci-fi."
            
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
