

import React from 'react';
import {Redirect, Link} from 'react-router-dom';

import './sidebar.styles.css';
import { MDBListGroup, MDBContainer, MDBRow, MDBCol } from 'mdbreact';

class Sidebar extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            togglePromo: false,
            toggleProducts: false
        }
        this.showPromo = this.showPromo.bind(this);
       //this.showProducts = this.showProducts.bind(this);
    }

    showPromo = () => {
        this.setState(state => ({
            togglePromo: !state.togglePromo            
           
        }));

        if(this.state.toggleProducts === true) {
            this.setState({
                toggleProducts: false
            })
        }
    }

    // showProducts = () => {
    //     this.setState(state => ({
    //         toggleProducts: !state.toggleProducts
    //     }));


    //     if(this.state.togglePromo === true) {
    //         this.setState({
    //             togglePromo: false
    //         })
    //     }
    // }

  



    render() {
    return (
        
            <div class="sidenav">
            <MDBContainer> 
            
            
                <MDBRow className="mt-5">
                    <MDBCol>
                <p onClick={this.showPromo} style={{ fontSize: "17px"}}>Promotions</p>
                {this.state.togglePromo ?                     
                        <MDBListGroup>
                            <MDBListGroup><Link style={{ fontSize: "13px"}} to='/admin/dashboard/promocode'>Promo Codes</Link></MDBListGroup> 
                            <MDBListGroup><Link style={{ fontSize: "13px"}} to='/admin/add-promo'>Add Promo Codes</Link></MDBListGroup> 
                        </MDBListGroup>                    
                    : '' }
                   </MDBCol> 
                </MDBRow>  
            
                <MDBRow>
                    <MDBCol>
                        <Link style={{ fontSize: "17px"}} to='/'><p >Orders</p></Link>
                    </MDBCol>
                </MDBRow>                
            
                <MDBRow>
                    <MDBCol>
                       <p><Link style={{ fontSize: "17px"}} to='/admin/products'>Products</Link></p>
                        {/* {this.state.toggleProducts ?  
                        onClick={this.showProducts}                   
                        <MDBListGroup>
                        <MDBListGroup><Link style={{ fontSize: "13px"}} to='/admin/dashboard/promocode'><p>Promo Codes</p></Link></MDBListGroup> 
                        <MDBListGroup><Link style={{ fontSize: "13px"}} to='/admin/dashboard/promocode'><p>Add Promo Codes</p></Link>s</MDBListGroup> 
                        </MDBListGroup>                    
                    : '' } */}
                    </MDBCol>    
                </MDBRow>

            
            </MDBContainer>
            </div>
        
    );
    }
}
export default Sidebar;