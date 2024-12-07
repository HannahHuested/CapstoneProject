import React from "react";
import Card from 'react-bootstrap/Card';
import Level from "./Level";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export const LevelsCards = () => {

return(
    <div className="Cards">
        <Container fluid='true'>
            <Row>
                <Col>
                    <Card className = 'cards' bg='dark' text = 'white' border="black">
                        <Card.Body>
                            <Card.Title>Introduction</Card.Title>
                            <Card.Text>
                                Circuit basics
                            </Card.Text>
                            {Level(0)}
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className = 'cards' bg='dark' text = 'white' border ="secondary">
                        <Card.Body>
                            <Card.Title>Level 1</Card.Title>
                            <Card.Text>
                                Introduction to resistors
                            </Card.Text>
                            {Level(1)}
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Card className = 'cards' bg='dark' text = 'white' border="danger">
                        <Card.Body>
                            <Card.Title>Level 2</Card.Title>
                            <Card.Text>
                                The resistor color code
                            </Card.Text>
                            {Level(2)}
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className = 'cards' bg='dark' text = 'white' border="warning">
                        <Card.Body>
                            <Card.Title>Level 3</Card.Title>
                            <Card.Text>
                                Engineering Notation
                            </Card.Text>
                            {Level(3)}
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    
    </div>
);
}