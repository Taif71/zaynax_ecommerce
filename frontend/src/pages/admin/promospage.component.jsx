import React from 'react';

import {MDBRow, MDBCol, MDBContainer } from 'mdbreact';

import PromoDetails from '../../components/promo-details-card/promo-details.component';
import Sidebar from '../../components/sidebarnav/sidebar.component';

class PromoPage extends React.Component {


    render() {
        return (
            <div>
                
                <MDBRow style={{ background: "#EFEFEF"}}>
                    <MDBCol sm="3">
                        <Sidebar />
                    </MDBCol>
                    
                    <MDBCol sm="9">
                        <MDBContainer>
                        <MDBRow className="ml-2">                    
                            <button className="f6 link dim br-pill ph3 pv2 ml-4 mt3 dib black bg-white">Add New Promo</button>                                                        
                        </MDBRow>
                            <PromoDetails />
                            <PromoDetails />
                            
                        </MDBContainer>

                    </MDBCol>

                </MDBRow>     
                
            </div>
        );
    }
}

export default PromoPage;