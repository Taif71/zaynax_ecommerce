import React from 'react';

import './homepage.styles.css';

import {Container, Row, Col} from 'reactstrap';


//import NavBar from '../../components/navbar/navbar.component';
import ProductCard from '../../components/product-card/product-card.component';


class Homepage extends React.Component {
    state = {
        Products: null
    };
        
    async componentDidMount() {
        // const url="https://localhost:8000/";
        const url = 'https://picsum.photos/500/500';
        const response = await fetch(url);
        const data = response.json();

        this.setState({
            Products: data
        });
    }
    render() {
        
    return (
        <div className="">
             
             

            <Container>
            <Row>
                
                    
                    <Col sm="2" className="mr-4">
                        <ProductCard  />
                    </Col>

                    <Col sm="2" className="mr-4">
                        <ProductCard  />                    
                    </Col>

                    <Col sm="2" className="mr-4">
                        <ProductCard  />                    
                    </Col>

                    <Col sm="2" className="mr-4">
                        <ProductCard  />
                    </Col>

                    <Col sm="2" className="mr-4">
                        <ProductCard  />
                    </Col>
                    <Col sm="2" className="mr-4">
                        <ProductCard  />
                    </Col>
                    <Col sm="2" className="mr-4">
                        <ProductCard  />
                    </Col>
                    <Col sm="2" className="mr-4">
                        <ProductCard  />
                    </Col>
                    <Col sm="2" className="mr-4">
                        <ProductCard  />
                    </Col>
                    <Col sm="2" className="mr-4">
                        <ProductCard  />
                    </Col>
                    
                
                                            
            </Row>      
            </Container>  
                    
                                        
            

            
        </div>
    );
 }
}
export default Homepage;