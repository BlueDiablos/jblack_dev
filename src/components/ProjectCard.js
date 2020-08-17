import React from "react";
import "./ProjectCard.css";
import ProjectLink from "./ProjectLink";
function ProjectCard(props) {

  return (
    
    <div className="container">
      <div className="proj-card" onClick={e => props.click(props.info)}>
        <h2 className="proj-title">{props.info.title}</h2>
        <p className="proj-header"> {props.info.header}</p>
        <p className="proj-body">{props.info.body}</p>
        {props.info.selected && (
        <ProjectLink
          link={props.info.link}
        />
        )}
      </div>
    </div>
   
  );
}
export default ProjectCard;