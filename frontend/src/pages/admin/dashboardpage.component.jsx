import React from 'react';
// import { MDBContainer, MDBRow, MDBCol } from "mdbreact";

import './dashboard.styles.css';
import Sidebar from '../../components/sidebarnav/sidebar.component';

const DashboardPage = () => {
    return (
        <div>
            
            <Sidebar />
            <button type="button" class="btn btn-primary">Primary</button>
            
        
        </div>
    );
}

export default DashboardPage;