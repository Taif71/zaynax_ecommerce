import React from 'react';
import { MDBCol, MDBRow} from 'mdbreact';

import {Link} from 'react-router-dom';

import ProductCard from '../../components/product-card/product-card.component';
import Sidebar from '../../components/sidebarnav/sidebar.component';
const Adminproducts = () => {

    return (
        <div>
            <MDBRow style={{ background: "#EFEFEF"}}>
                <MDBCol sm="3">    
                    <Sidebar />
                </MDBCol>

                <MDBCol sm="9"> 

                    <Link to='/admin/add-product'><button className="mt-3  f6 no-underline br-pill ph3 pv2 mb2 dib black bg-white">Add New Product</button></Link>
                    <div className="ml-5">
                    <MDBRow>
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                    </MDBRow>
                    </div>
                </MDBCol>
            </MDBRow>
            
        </div>
    );
}

export default Adminproducts;