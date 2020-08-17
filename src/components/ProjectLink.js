import React from "react";
import { useSpring, animated } from "react-spring";
import "./ProjectLink.css";
import { Button } from "react-bootstrap";
function ProjectLink(props) {
  const style = useSpring({ opacity: 1, from: { opacity: 0 } });
  return (
    <animated.div style={style}>
      <Button href={props.link} target="_blank" rel="noopener noreferrer">
        See Repository
      </Button>
      </animated.div>
   
  );
}

export default ProjectLink;