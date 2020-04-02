import React from "react";
import "./Pane.css";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";


function Pane(props) {
  return ( 

    <div className="slide">
      <div className="card">
        <div className="card-img" id="img1">
          <div className="card-content">
            <p className="card-theme">{props.info.title}</p>
            <h2 className="card-header">{props.info.header}</h2>
            <p className="card-paragraph">{props.info.body}</p>
          </div>
        </div>
      </div>
    </div>

    
  );
}
export default Pane;
