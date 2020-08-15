import React from "react";
import "./ProjectCard.css";
import { useSpring, animated } from "react-spring";

function ProjectCard(props) {
  const style = useSpring({
    from: { opacity: 0, transform: "translate3d(0,-40px,0)" },
    to: { opacity: 1, transform: "translate3d(0,0px,0)" }
  });
  return (
    
    <div className="container">
      <div className="proj-card">
        <h2 className="proj-title">{props.info.title}</h2>
        <p className="proj-header"> {props.info.header}</p>
        <p className="proj-body">{props.info.body}</p>
        <img
        className="card-image"
        src={props.info.imageSrc}
      />
      </div>
    </div>
   
  );
}
export default ProjectCard;