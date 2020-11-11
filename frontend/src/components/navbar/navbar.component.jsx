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
    Container
} 
from 'reactstrap';


const NavBar = () => {
    return (
        <div className=''>
            
            <Navbar color="light" light expand="md">
            <Container>

                <NavbarBrand href="/">Zaynax</NavbarBrand>
                
                <Collapse navbar>
                <Nav className="mr-auto" navbar>
                    <NavItem>
                        <NavLink href="/components/">Components</NavLink>
                    </NavItem>                    

                </Nav>
                <form class="form-inline d-flex justify-content-center md-form form-sm mt-0">
                <i class="fas fa-search" aria-hidden="true"></i>
                <input class="form-control form-control-sm ml-3 w-75" type="text" placeholder="Search"
                    aria-label="Search" />
                </form>
                <NavbarText>Simple Text</NavbarText>
                </Collapse>

                </Container>
            </Navbar>
            
        </div>
    );
}

export default NavBar;