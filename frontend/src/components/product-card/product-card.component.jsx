import React from 'react';

import './product-card.styles.css';


import {
    Container, Row, Col,
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';
  
const ProductCard = ({ products }) => {
    return (
        // <Container>
            <Card style={{height: "250px", width: "200px", margin: "20px 10px"}}>                
                <Container>
                    <Row style={{height: "175px"}}>
                        <Col sm="12">
                            <CardImg src="" alt="Card image cap" />
                        </Col>
                    </Row>
                </Container>
                {/* <Row> */}
                    {/* <CardBody> */}
                        <Row>
                            <Col sm="12" tag="p6">
                            <CardText>Milk</CardText>
                            </Col>                        
                        </Row>
                        
                        <Row style={{margin:"20px 0px"}} className="justify-content-between">
                            <Col sm="8">
                                <CardText tag="h6" className="">BDT. 2222</CardText>                            
                            </Col>
                            <Col sm="4">
                                <CardText className="discount-bg">15%</CardText>
                            </Col>
                        </Row>
                        
                    {/* </CardBody> */}
                
            </Card>
        // </Container>
    );
}

export default ProductCard;