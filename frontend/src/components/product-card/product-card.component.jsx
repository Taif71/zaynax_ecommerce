import React from 'react';

import './product-card.styles.css';


import {
    Container, Row, Col,
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';
import { MDBBtn , MDBCard, MDBCardBody, MDBContainer, MDBRow, MDBCol,
MDBCardImage, MDBCardText,} from 'mdbreact';
  
class ProductCard extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            hover: false           
        }


        this.toggleHover = (e) => {
            e.preventDefault();
            this.setState({
                hover: !this.state.hover
            })
        }
    }
    

    
    
    render() {
        var linkStyle;
        if (this.state.hover) {
          return ((<MDBCard style ={{height: "250px", width: "200px", margin: "20px 10px", background: "white"}}>
            <Button style={{ color:"black", background: "yellow"}} className="btn-center">Add to Cart</Button>
          </MDBCard>))
        } else {
            
           
        }
        
        return (
        // <Container>

            
            <MDBCard 
                onMouseEnter={this.toggleHover}
                onMouseLeave={this.toggleHover}                
                style={{height: "250px", width: "200px", margin: "20px 10px"}} 
                    
            >                
                <MDBContainer>
                    <MDBRow style={{height: "175px"}}>
                        <MDBCol sm="12">
                            <MDBCardImage src="" alt="Card image cap" />
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
                {/* <Row> */}
                    {/* <CardBody> */}
                        <MDBRow>
                            <MDBCol sm="12" tag="p6">
                            <MDBCardText>Milk</MDBCardText>
                            </MDBCol>                        
                        </MDBRow>
                        
                        <MDBRow style={{margin:"20px 0px"}} className="justify-content-between">
                            <MDBCol sm="8">
                                <MDBCardText tag="h6" className="">BDT. 2222</MDBCardText>                            
                            </MDBCol>
                            <MDBCol sm="4">
                                <MDBCardText className="discount-bg">15%</MDBCardText>
                            </MDBCol>
                        </MDBRow>
                        
                    {/* </CardBody> */}
                
            </MDBCard>
        
                
     
        );
    }
 }


export default ProductCard;