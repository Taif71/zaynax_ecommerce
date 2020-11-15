import React from 'react';

import './navbar.styles.css';

import 
{   
    
    Navbar,
    Nav,
    NavbarBrand,    
           
    NavLink,
    NavItem,    
    NavbarText,   
    Container,
    Row
} 
from 'reactstrap';

import { MDBIcon, MDBContainer, MDBCol, MDBRow } from 'mdbreact'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { user, cart } from '@fortawesome/free-solid-svg-icons";';

// import Searchbar from 'framework7-react';

const NavBar = () => {
    return (
        <div className=''>
            
            <Navbar color="light" light expand="md">
            <MDBContainer>

            <MDBRow>
                <NavbarBrand href="/"><label className="brand"><p className="logo-title"><bold>Zaynax</bold></p></label></NavbarBrand>
                
               
                
                
                <i className="fa fa-spinner fa-spin">ICON</i>
                
                
            </MDBRow>    
                </MDBContainer>
            </Navbar>
            
        </div>
    );
}

export default NavBar;

