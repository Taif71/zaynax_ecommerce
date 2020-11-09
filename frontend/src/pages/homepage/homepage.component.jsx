import React from 'react';

import './homepage.styles.css';

import {Container, Row, Col} from 'reactstrap';


//import NavBar from '../../components/navbar/navbar.component';
import ProductCard from '../../components/product-card/product-card.component';


const Homepage = () => {
    return (
        <div className="">
             {/* <NavBar /> */}
             <h1>Homepage</h1>  

            <Container>
            <Row>
                <Col><ProductCard /></Col>
                <Col><ProductCard /></Col>
                <Col><ProductCard /></Col>
                <Col><ProductCard /></Col>
                <Col><ProductCard /></Col>
            </Row>      
            </Container>  
                    
                                        
            

            
        </div>
    );
}

export default Homepage;