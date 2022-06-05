import React from "react";
import { Row, Col, Form } from 'react-bootstrap';
import Logo from '../img/Logo.png';
import Avatar from '../img/Avatar.png';
import SearchIcon from '@mui/icons-material/Search';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';

const Header = () => {
    return(
        <>
            <header className = "Header">
                <div className = "Container">
                    <Row>
                        <Col className = "Header__logo">
                            <div className = "Header__logo__block">
                                <img 
                                    className = "Header__logo__Img" 
                                    src       = {Logo} 
                                    alt       = "QSOFT" 
                                />
                            </div>
                        </Col>
                        <Col 
                            className = "Header__input" 
                            //извиняюсь за костыль
                            style={{'padding':'0'}}>
                            <div className="Header__input__block">
                                {/* при уборке формы вёрстка хедера не ломается */}
                                <Form>
                                    <Form.Control 
                                        className   = "input__aria"
                                        type        = "email" 
                                        placeholder = "Enter email" 
                                    />
                                </Form>
                            </div>
                        </Col>
                        <Col className = "Header__usr">
                            <div className = "Header__usr__block">
                                <span className = "usr__name">
                                    Костантин
                                </span>
                                <span className = "usr__avatar">
                                    <img 
                                        className = "usr__avatar__img" 
                                        src       = {Avatar}
                                        alt       = "K" />
                                </span>   
                            </div>
                            <div className="Header__togal__block">
                                <span>
                                    <PermIdentityIcon 
                                        color="primary" 
                                        fontSize="large" 
                                    />
                                </span>
                            </div> 
                        </Col>
                    </Row>
                    <Row >
                        <Col className = "Header__togal__input">
                            <div >
                                <Form>
                                    <Form.Control 
                                        style       = {{'border':'none'}}
                                        type        = "email" 
                                        placeholder = "Enter email" />
                                </Form>
                            </div>
                        </Col>
                    </Row>
                    
                </div>
            </header>
        </>
    );
}

export default Header