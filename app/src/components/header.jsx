import React from 'react';
import { Container, Nav, Navbar, Form, FormControl, Row, Col  } from 'react-bootstrap';
import Logo from '../img/Logo.png';
import Avatar from '../img/Avatar.png';

const Header = () =>{
    return(
    <>
        <header className = 'header'>
            <Container>
                <Row>
                    <Col className = 'header-logo'>
                    <img
                        alt       = "QSOFT"
                        src       = {Logo}
                        className = "d-inline-block align-top logo"
                    />{' '}
                    </Col>
                    <Col className = 'header-search'>
                        <input type="search" />
                    </Col>
                </Row>
            </Container>
        </header>
    </>
    );
}

export default Header