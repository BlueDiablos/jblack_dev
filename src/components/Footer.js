import React from 'react';
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';

import './Footer.css';


function Footer(){

    return(
        <footer className="mt-5">
        <Container id="text" fluid={true}>
        <Row className="border-top justify-content-between p-3">
            <Col className="p-0" md={3} sm={12} xs={12}>
                
            </Col>
            <Col className="p-0 d-flex justify-content-end" md={3}>
            Developed by Joseph Blackledge
            </Col>
        </Row>
        </Container>
        </footer>
    );

    

}

export default Footer;