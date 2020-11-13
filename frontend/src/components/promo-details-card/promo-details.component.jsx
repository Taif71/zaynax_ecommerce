import React, { Fragment } from 'react';

import {MDBRow, MDBCol, MDBContainer,MDBBtn } from 'mdbreact';

import './promo-details.styles.css';
// import Sidebar from '../sidebarnav/sidebar.component';


class PromoDetails extends React.Component {


    render() {
        return (
            <div>
                <MDBContainer>
                
                <MDBRow>                                                            
                    <MDBCol>
                    <div className="card" style={{ width: "850px", margin: "20px"}}>
                        
                            
                            <div className="card-body">
                            <MDBContainer>
                            <MDBRow className="ml-1">
                                {/* <MDBCol></MDBCol> */}
                                <MDBCol>
                                    <MDBRow>
                                    <p>1</p>
                                    <p className="ml-4">TEXTCODE</p>       
                                    </MDBRow>
                                    
                                </MDBCol>
                                {/* <MDBCol> */}
                                
                                {/* </MDBCol> */}

                                <MDBCol>
                                    <MDBRow className="float-right">
                                        <button className="f6 link dim br-pill ba ph4 pv2 mb2 dib bg-yellow black"> Edit </button>                               
                                        <button className="f6 link dim br-pill ba ph3 pv2 mb2 dib black ml-3">   Active   </button>
                                    </MDBRow>

                                </MDBCol>                                                                
                            </MDBRow>     
                            </MDBContainer>                            
                            </div>
                        

                        <hr style={{margin:"0", padding: "0"}}/>
                        <div className="card-body">
                            <MDBContainer>
                                <MDBRow >
                                    <MDBCol sm="4" className="pr0">
                                        <p className="pr0 mr0" style={{ fontSize: "13px", textAlign: "left" }}>Created at 10:00 AM,3/11/2020</p>
                                    </MDBCol>

                                    <MDBCol sm="2">
                                        <p style={{ fontSize: "13px", textAlign: "left" }}>Usages: 0</p>
                                    </MDBCol>

                                    <MDBCol sm="2" className="pr0">
                                        <p style={{ fontSize: "13px", textAlign: "left" }}>Discount Rate: 3%</p>
                                    </MDBCol>

                                    <MDBCol sm="2" className="pr0">
                                        <p style={{ fontSize: "13px", textAlign: "left" }}>Start Date: 3/11/2020</p>
                                    </MDBCol>

                                    <MDBCol sm="2" className="pr0">
                                        <p  style={{ fontSize: "13px", textAlign: "left" }}>End date: 1/12/2020</p>
                                    </MDBCol>
                                </MDBRow>
                            </MDBContainer>
                        </div>
                    </div>

                     </MDBCol>

                </MDBRow>  
                </MDBContainer>      
            </div>
        );
    }
}

export default PromoDetails;