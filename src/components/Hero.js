import React from 'react';
import { Jumbotron, Container, Row, Col } from 'react-bootstrap';

function Hero(props){
    return(
        <Jumbotron className="bg-transparent jumbotron-fluid p-0">
            <Container fluid={true}>
                <Row className="justify-content-center py-5">
                    <Col md={8} sm={12}>
                        { props.title && <h1 id="title">{props.title}</h1> }
                        { props.sub && <h3 id="sub">{props.sub}</h3> }
                        { props.text && <h3 id="text">{props.text}</h3> }
                    </Col>
                </Row>
            </Container>
        </Jumbotron>
    );
}

export default Hero;