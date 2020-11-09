import React, {Component} from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import './App.css';

import NavBar from './components/navbar/navbar.component';
// import ProductCard from './components/product-card/product-card.component';
// import {Container} from 'reactstrap';

import HomePage from './pages/homepage/homepage.component';

class App extends Component {
  render() {
  return (
    <div className="App">
      

      <NavBar />
      {/* <h1>Start App </h1>  
      <Container>
        <ProductCard />
      </Container> */}
     
     <Switch>
       <Route exact path='/' component={HomePage}/>
     </Switch>
      
      
    </div>
  );
  }
}

export default App;
