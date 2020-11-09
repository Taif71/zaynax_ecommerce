import React from 'react';

import './homepage.styles';

import NavBar from '../../components/navbar/navbar.component';
import ProductCard from '../../components/product-card/product-card.component';

const Homepage = () => {
    return (
        <div className="">
             <NavBar />
             <h1>Homepage</h1>  

             <ProductCard />
        </div>
    );
}

export default Homepage;