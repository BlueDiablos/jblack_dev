import React from "react";
import ProjectCard from "../components/ProjectCard";
import Footer from "../components/Footer";
import { Container } from "react-bootstrap";
import pic from "../assets/images/code_snip1.png"
import { Row } from "react-bootstrap";

class ProjectPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          info: [
            {
              id: 0,
              title: "Project Template",
              header: "Header",
              link: "https://www.w3schools.com/cssref/css3_pr_box-shadow.asp",
              imageSrc: pic,
              body:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
            },
            {
              id: 1,
              title: "Project Template",
              header: "Mobile Chat Application",
              imageSrc: pic,
              body:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
            },
            {
              id: 2,
              title: "Project Template",
              header: "Mobile Chat Application",
              imageSrc: pic,
              body:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
            },
            {
              id: 3,
              title: "Project Template",
              header: "Mobile Chat Application",
              imageSrc: pic,
              body:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
            },
          ],
        };
      }
    
      makeCards = (info) => {
        return info.map((info) => {
          return <ProjectCard info={info} />;
        });
      };
    
      render() {
        return (
          <div id="">
            <Container fluid={true}>
              <Row className="justify-content-around">
                {this.makeCards(this.state.info)}
              </Row>
            </Container>
            <Footer />
          </div>
        );
      } 
}

export default ProjectPage;