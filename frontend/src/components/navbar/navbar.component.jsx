import React from 'react';

import './navbar.styles.css';

import 
{   
    
    Navbar,
    Nav,
    NavbarBrand,    
    Collapse,        
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

const NavBar = () => {
    return (
        <div className=''>
            
            <Navbar color="light" light expand="md">
            <MDBContainer>

            <MDBRow>
                <NavbarBrand href="/"><label className="brand"><p className="logo-title"><bold>Zaynax</bold></p></label></NavbarBrand>
                
               
                
                
                <MDBIcon icon="shopping-cart" />
                <MDBIcon icon="shopping-cart" />
                
            </MDBRow>    
                </MDBContainer>
            </Navbar>
            
        </div>
    );
}

export default NavBar;


// <Nav className="mr-auto" navbar>
//                     <NavItem>
//                         <NavLink href="/components/">Components</NavLink>
//                     </NavItem>                    

//                 </Nav>