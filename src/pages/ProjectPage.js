import React from "react";
import ProjectCard from "../components/ProjectCard";
import Footer from "../components/Footer";
import "../components/ProjectCard.css";
import Hero from "../components/Hero";
class ProjectPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          info: [
            {
              id: 0,
              title: "Niner Chat",
              header: "Andrioid Chat Application - Group Project",
              link: "https://github.com/BlueDiablos/ninerChat-Front",
              selected: false,
              body:
                "This Chat application was built with a small team using a Python Flask web server and a React Native mobile app for the client. The idea is to allow college"
                + " students to sign in with their university emails and join chat rooms related to their majors - where they could then share information and ask questions."
                +" We designed this mobile application because we felt that many college students, especially within computer science, have a difficult time asking peers for help (feelings of imposter syndrome)."
                + " We hoped that by building a friendly, simple and anonymous chat application this would allow students to communicate more effectively. Of course cheating is of concern, therefore we made adminstrative accounts"
                + " that are assigned to teachers who can see an accounts identity so if cheating were to occur proper responses can be made."
            },
            {
              id: 1,
              title: "Login Authentication",
              header: "Web Application - Personal",
              link: "https://github.com/BlueDiablos/SharpAPI",
              selected: false,
              body:
                "This web application was built using C# and the .Net framework for the server-side application and JavaScript with the React library for the client application. This is a personal project I took on to learn more about the .Net framework and to further understand"
                + " building APIs and its best pratices and to simply just hone in on some of the core object oriented programming skills. It's a single page web applicaiton with a login form that sends information to the server and validates user creation and login. I also experimented and used Entity Framework, an Object Relational Mapping framework"
                + "  for data access."
            },
            {
              id: 2,
              title: "Shopping Cart",
              header: "Web Application - Pair Programming",
              link: "https://github.com/BlueDiablos/ShoppingCartProj",
              selected: false,
              body:
                "This web application was built with a friend and colleague using Java Server Pages. This is a MVC (Model View Controller) project that taught us how different parts of a web application communicate with each other. It"
               + " allows a user to create an account (which gets verified) and add different items to a shopping cart. Aside from learning how to wire up the frontend of an application to a backend and then to the database, we also" 
               + " learned best practices for web security, avoiding major security flaws like SQL injection and cross site scripting. "
            },
            {
              id: 3,
              title: "jblack.dev",
              header: "Web Application - Personal",
              link: "https://github.com/BlueDiablos/jblack_dev",
              selected: false,
              body:
                "This is - well, this is this website you're on right now. Built with JavaScript using the React Library, Express framework (NodeJS) for the backend service for the contact page and hosted using Google Firebase. This website allowed me to hone in on my web development skills"
                + " as well as own a place to showcase my abilities, allow people to reach out and perhaps allow people to understand me a little better. Following the button attatched to this project card you can see exactly how this is designed."
                + " However, the backend service is hidden for security reasons."
            },
          ],
        };
      }
     
      handleClick = id => {
        let info = [...this.state.info];

        info[id].selected = info[id].selected ? false : true;

        info.forEach(item => {
          if(item.id !== id){
            item.selected = false
          }
        });

        this.setState({
          info
        })
      }


      makeCards = (info) => {
        return info.map((info) => {
          return <ProjectCard info={info} 
          click={e => this.handleClick(info.id,e)}
          key={info.id}
        />;
        });
      };
    
      render() {
        return (
          <div id="container ">
             <Hero title={this.props.title} sub={this.props.sub} />
                {this.makeCards(this.state.info)}
            <Footer />
          </div>
        );
      } 
}

export default ProjectPage;