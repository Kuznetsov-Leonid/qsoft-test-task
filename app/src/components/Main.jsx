import React from "react";
import { Card, Row, Col } from 'react-bootstrap';
import Henkel from '../img/Henkel.png';
import JonhDeere from '../img/JonhDeere.png';
import McDonalds from '../img/McDonalds.png';
import Ikea from '../img/Ikea.png';
import Reebok from '../img/Reebok.png';
import Nike from '../img/Nike.png';
import Caterpillar from '../img/Caterpillar.png';

const Main = () => { 

    const data = [
        { id: 1, img: Henkel, name: 'Henkel'},
        { id: 2, img: JonhDeere, name: 'JonhDeere'},
        { id: 3, img: McDonalds, name: 'McDonalds'},
        { id: 4, img: Ikea, name: 'Ikea'},
        { id: 5, img: Reebok, name: 'Reebok'},
        { id: 6, img: Nike, name: 'Nike'},
        { id: 7, img: Caterpillar, name: 'Caterpillar'},
    ];

    /**
     * @param   {img, name} props 
     * @returns object with coponents 
     */
    function CardItem(props){
        const img  = props.img
        const name = props.name

        return(
            <>
                <Col md={4}>
                    <Card className = "item__card">
                        <Card.Img 
                            variant   = 'top' 
                            src       = {img.img} 
                            alt       = {name.name}
                            className = 'item__card__img'
                        />
                    </Card>
                </Col>
            </>
        );
    }

    /**
     * 
     * @param {data, items} props 
     * @returns компоненты рендерятся в зависимости от длинны массива данных
     * из data, чем больше полей, тем больше компонентов...
     */
    function CardLest(props){
        const data  = props.data
        const items = data.map((item) =>{
            return <CardItem 
                        key  = {item.id}
                        img  = {item}
                        name = {item}
                    />
        })

        return(
            <>
                <Row 
                    xl = {4}
                    className="Main__list__item g-4"
                >
                    {items}  
                </Row>
            </>
        );
    }


    return(
        <>
            <main className = "Main">
                <div className = "Container">
                    <div className = "Main__title">
                        <p className = "Main__title__txt">
                            наши&nbsp;партнёры
                        </p>
                    </div>
                    <div className="Main__list">
                        <CardLest data = {data}/>
                    </div>
                </div>
            </main>
        </>
    );
}

export default Main