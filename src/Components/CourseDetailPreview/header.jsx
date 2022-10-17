import React from 'react';
import { Container, ListGroup } from 'react-bootstrap';

const Header = () => {
    return(
        <Container>
            <h1 style={{'margin-top' : '80px'}}>Progamming</h1>
            <ListGroup horizontal>
                <a href=''>
                <ListGroup.Item>Web Developer</ListGroup.Item>
                </a>
                <a href=''>
                <ListGroup.Item>FrontEnd</ListGroup.Item>
                </a>
                <a href=''>
                <ListGroup.Item>This</ListGroup.Item>
                </a>
                <a href=''>
                <ListGroup.Item>This</ListGroup.Item>
                </a>
                <a href=''>
                <ListGroup.Item>This</ListGroup.Item>
                </a> 
                <a href=''>
                <ListGroup.Item>This</ListGroup.Item>
                </a> 
                <a href=''>
                <ListGroup.Item>This</ListGroup.Item>
                </a>
     
    </ListGroup>
        </Container>
        
    )
}


export default Header