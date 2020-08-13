import React from "react";
import "./Pane.css";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";

function Pane(props) {
  return (
    <div className="wrapper">
       <div className="card">

      </div>
      <div className="card">
        <h2 className="title">{props.info.title}</h2>
        <p className="header"> {props.info.header}</p>
        <p className="paragraph">{props.info.body}</p>
      </div>
     
    </div>
  );
}
export default Pane;
