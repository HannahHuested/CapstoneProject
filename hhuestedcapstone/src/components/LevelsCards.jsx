import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Level from "./Level";

export const LevelsCards = () => {

return(
    <div className="Cards">
    <table>
        <tbody>
        <tr>
        <td>
        <Card className = 'cards' bg='dark' text = 'white' border="black">
        <Card.Body>
            <Card.Title>Introduction</Card.Title>
            <Card.Text>
                Circuit basics
            </Card.Text>
            {Level(0)}
        </Card.Body>
    </Card>
        </td>
        <td>
        <Card className = 'cards' bg='dark' text = 'white' border ="secondary">
        <Card.Body>
            <Card.Title>Level 1</Card.Title>
            <Card.Text>
                Introduction to resistors
            </Card.Text>
            {Level(1)}
        </Card.Body>
    </Card>
        </td>
    </tr>
    <tr>
        <td>
        <Card className = 'cards' bg='dark' text = 'white' border="danger">
        <Card.Body>
            <Card.Title>Level 2</Card.Title>
            <Card.Text>
                The resistor color code
            </Card.Text>
            {Level(2)}
        </Card.Body>
    </Card>
        </td>
        <td>
        <Card className = 'cards' bg='dark' text = 'white' border="warning">
        <Card.Body>
            <Card.Title>Level 3</Card.Title>
            <Card.Text>
                Engineering Notation
            </Card.Text>
            {Level(3)}
        </Card.Body>
    </Card>
        </td>
    </tr>
    </tbody>
    </table>

    
    
    </div>
);
}