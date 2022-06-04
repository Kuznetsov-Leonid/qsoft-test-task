import React from 'react';
import { Container, Card, Row, Col, Button } from 'react-bootstrap';
import Caterpillar from '../img/Caterpillar.png';
import Henkel from '../img/Henkel.png';
import Ikea from '../img/Ikea.png';
import JonhDeere from '../img/JonhDeere.png';
import McDonalds from '../img/McDonalds.png';
import Nike from '../img/Nike.png';
import Reebok from '../img/Reebok.png';

const Main = () =>{
    const data = [
        {id: 1, img: Caterpillar, name: 'Caterpillar', style: 'CardImg Caterpillar'},
        {id: 2, img: Henkel, name: 'Henkel', style: 'CardImg Henkel'},
        {id: 3, img: Ikea, name: 'Ikea', style: 'CardImg Ikea'},
        {id: 4, img: JonhDeere, name: 'JonhDeere', style: 'CardImg JonhDeere'},
        {id: 5, img: McDonalds, name: 'McDonalds', style: 'CardImg McDonalds'},
        {id: 6, img: Nike, name: 'Nike', style: 'CardImg Nike'},
        {id: 7, img: Reebok, name: 'Reebok', style: 'CardImg Reebok'}
    ];

    /**
     * 
     * @param {*} props 
     * @returns 
     */
    function MainItem(props){
        const ItemImg   = props.ItemImg
        const ItemName  = props.ItemName
        const ItemStyle = props.ItemStyle
        return(
            <>
                <Col>
                    <div className = 'main-list-item'>
                        <img 
                            variant   = 'top' 
                            src       = {ItemImg.img} 
                            alt       = {ItemName.name}
                            className = {ItemStyle.style}
                        />
                    </div>
                </Col>
            </>
        );
    };

    /**
     * 
     * @param {*} props 
     * @returns 
     */
    function MainList(props){
        const data  = props.data
        const items = data.map((list) =>{
            return <MainItem 
                key          = {list.id}
                ItemImg      = {list}
                ItemName     = {list}
                ItemStyle    = {list}
            />
        });
        return (
            <>
                <Row 
                    xs        = {1} 
                    md        = {4} 
                >
                    {items}     
                </Row>
            </>
        );
    };

    return(
        <>
            <div>
                <Container>
                    <div className = 'main'>
                        <h1 className = 'main-title'>
                            <b>НАШИ ПАРТНЁРЫ</b>
                        </h1>
                    </div>
                    <div className = 'main-list'>
                        <MainList data = {data}/>
                    </div>
                </Container>
            </div>
        </>
    );
}

export default Main