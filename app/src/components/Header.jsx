import React from "react";
import { Row, Col, Form } from 'react-bootstrap';
import Logo from '../img/Logo.png';
import Avatar from '../img/Avatar.png';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';

const Header = () => {

    /**
     * 
     * @param {style} props 
     * @returns input search
     */
    const InputForm = (props) => {
        return(
            <>
                <Form>
                    <Form.Control 
                        style       = {props.style}
                        className   = "input__aria"
                        type        = "search" 
                        placeholder = "Найти..." 
                    />
                </Form>
            </>
        );
    }

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
                                <InputForm className = 'input__aria'/>
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
                            <div>
                                <InputForm 
                                    style = {{'border':'none'}}
                                />
                            </div>
                        </Col>
                    </Row>
                    
                </div>
            </header>
        </>
    );
}

export default Header