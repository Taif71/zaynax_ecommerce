import React from 'react';
 import { MDBContainer, MDBRow, MDBCol } from "mdbreact";

import './dashboard.styles.css';
import Sidebar from '../../components/sidebarnav/sidebar.component';

const DashboardPage = () => {
    return (
        <div>
            <MDBRow style={{ background: "#EFEFEF"}}>
                <MDBCol >
                    <Sidebar />
                </MDBCol>
                   
                <MDBCol>
                    
                </MDBCol>
            
            
            </MDBRow>
        
        </div>
    );
}

export default DashboardPage;