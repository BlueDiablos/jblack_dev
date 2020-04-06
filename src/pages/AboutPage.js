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
          title: "Who Am I",
          header: "Joseph Blackledge",
          body:
            "I love technology; building custom computers for all sorts of hobbies online; putting together my own mechanical keyboards; " +
            "following the latest upgrades in hardware; and designing/building software. " +
            "The challenges involved with technology are engaging, entertaining and fulfilling " +
            " --discovering new ways to enrich peoples lives. This is why I pursued Computer Science."
        },
        {
          id: 1,
          title: "Education",
          header: "UNCC",
          body:
            "Graduated From the University of North Carolina at Charlotte where I studied the Agile framework; object oriented "+
            "programming and data structures; database design, tools and theory; Web design; secure "+
            "programming and the SSDLC (Secure Software Development Life Cycle); software architecture and design systems; "+
            "software development life cycle; networking and information systems; computer architecture; logic and algorithms."
            
        },
        {
          id: 2,
          title: "Experience",
          header: "Projects",
          body:
            "I've worked on many projects both in the class room and outside."+
            "I've designed and built a simple login authentication API; "+
            "I was a part of a team that built a chat application for the university called Niner Chat which allowed students to login in with their "+
            ".edu domain and join chatroom's relevant to their major/college. "+
            "I also designed an eCommerce website to simulate how a shopping cart would behave "+
            "and many others with a wide range of different technologies which --all found on my Github."
            
        }
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
