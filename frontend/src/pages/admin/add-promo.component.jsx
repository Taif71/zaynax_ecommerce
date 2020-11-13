import React from 'react';

import {MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBCard, MDBCardBody } from 'mdbreact';

// import addPromoForm from '../../components/Forms/add-promoform.component';
import Sidebar from '../../components/sidebarnav/sidebar.component';

class AddPromoPage extends React.Component {


    render() {
        return (
            <div>
                <MDBRow>                    

                    <MDBCol>
                        <Sidebar />
                    </MDBCol>

                    <MDBCol>
                    <MDBContainer className="mt-5 mr-3">
        
                            <MDBRow>
                            <MDBCol md="6">
                                <MDBCard>
                                <MDBCardBody>
                                    <form>
                                    
                                    <div className="grey-text">
                                        <label style={{ marginRight: "167px"}}>Promo Code</label>
                                        <MDBInput                                        
                                        icon="user"
                                        group
                                        type="text"
                                        validate
                                        error="wrong"
                                        success="right"
                                        />
                                        <label style={{ marginRight: "180px"}}>Start Date</label>
                                        <MDBInput
                                        
                                        icon="envelope"
                                        group
                                        type="date"
                                        validate
                                        error="wrong"
                                        success="right"
                                        />
                                        <label style={{ marginRight: "180px"}}>End Date</label>
                                        <MDBInput
                                        
                                        icon="exclamation-triangle"
                                        group
                                        type="date"
                                        validate
                                        error="wrong"
                                        success="right"
                                        />
                                        <label style={{ marginRight: "180px"}}>Discount Rate</label>
                                        <MDBInput
                                        
                                        icon="lock"
                                        group
                                        type="number"
                                        validate
                                        />
                                         <label style={{ marginRight: "180px"}}>Use Time</label>
                                        <MDBInput
                                        
                                        icon="lock"
                                        group
                                        type="number"
                                        validate
                                        />

                                        <MDBRow>
                                            <label style={{ marginRight: "160px", marginLeft: "20px"}}>Active</label>
                                            
                                            <div class="custom-control custom-switch">
                                                <input type="checkbox" class="custom-control-input" id="customSwitches" />
                                                <label class="custom-control-label" for="customSwitches"></label>
                                            </div>
                                        </MDBRow>
                                         
                                        
                                    
                                    </div>
                                    <div className="text-center py-4 mt-3">
                                        <button className="f6 link dim br-pill ph3 pv2 ml-4 mt3 dib black bg-yellow">Add</button>
                                    </div>
                                    </form>
                                </MDBCardBody>
                                </MDBCard>
                            </MDBCol>
                            </MDBRow>
                        </MDBContainer>
                    </MDBCol>
                </MDBRow>
                
               
                
               
                
            </div>
        );
    }
}

export default AddPromoPage;