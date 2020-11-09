import React, {Component} from 'react';
import './App.css';

import NavBar from './components/navbar/navbar.component';
import ProductCard from './components/product-card/product-card.component';
import {Container} from 'reactstrap';

class App extends Component {
  render() {
  return (
    <div className="App">
      

      <NavBar />
      <h1>Start App </h1>  
      <Container>
        <ProductCard />
      </Container>
     
      
      
    </div>
  );
  }
}

export default App;
