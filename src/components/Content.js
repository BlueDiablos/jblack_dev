import React from 'react';
import { Container } from 'react-bootstrap';
import { Row, Col } from 'react-bootstrap';

function Content(props){

return(
    <Container fluid={true}>
        <Row className='justify-content-center'>
            <Col md={8}>
                {props.children}
            </Col>
        </Row>
    </Container>
)


}

export default Content;