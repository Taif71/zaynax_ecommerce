import React from 'react';

import './product-card.styles.css';


import {
    //Container, Row, Col,
  //  Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';
import { MDBCard, MDBCardBody, MDBContainer, MDBRow, MDBCol,
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
    

    
    // <MDBCard style ={{height: "250px", width: "200px", margin: "20px 10px", background: "white"}}>
    //             <Button style={{ color:"black", background: "yellow"}} className="">Add to Cart</Button>
    //         </MDBCard>;
    // <MDBContainer>
    //         <MDBRow style ={{border: "1px solid black",height: "250px", width: "200px", margin: "20px 10px", background: "white"}}>
    //             <Button style={{ color:"black", background: "yellow", height: "40px"}} className="">Add to Cart</Button>
    //         </MDBRow>
    //         </MDBContainer>
    render() {
        var Component;
        if (this.state.hover) {
          Component = 
            <div style={{height: "250px", width: "200px", margin: ""}} >
                <MDBContainer>
                    <Button style={{ color:"black", background: "yellow", height: "40px", marginTop: "100px"}} className="">Add to Cart</Button>
                </MDBContainer>
            </div>;
            
        } else {
            
           Component = 
           <div style={{height: "250px", width: "200px", margin: ""}} >
           <MDBContainer>
           <MDBRow style={{height: "175px"}}>
               <MDBCol sm="12">
                   <MDBCardImage src="" alt="Card image cap" />
               </MDBCol>
            </MDBRow>
            </MDBContainer>
            
            <MDBContainer>
               <MDBRow>                   
                   <MDBCol sm="12" tag="p6" className="tl">
                        <MDBCardText>Milk</MDBCardText>
                   </MDBCol>                                           
               </MDBRow>
             </MDBContainer>
               
               <MDBRow style={{margin:"20px 0px"}} className="">
                   <MDBCol sm="8">
                       <MDBCardText tag="h6" className="">BDT. 2222</MDBCardText>                            
                   </MDBCol>
                   <MDBCol sm="4">
                       <MDBCardText className="discount-bg">15%</MDBCardText>
                   </MDBCol>
               </MDBRow>
               </div>;
               
           
        }
        
        return (
        // <Container>

            
            <MDBCard 
                onMouseEnter={this.toggleHover}
                onMouseLeave={this.toggleHover}  
                style={{height: "250px", width: "200px", margin: "20px 10px"}}                                              
            >                
                {Component}
                
            </MDBCard>
        
                
     
        );
    }
 }


export default ProductCard;