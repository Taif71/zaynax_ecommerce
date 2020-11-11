import React, {Component} from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import './App.css';

import NavBar from './components/navbar/navbar.component';

// import ProductCard from './components/product-card/product-card.component';
// import {Container} from 'reactstrap';

import HomePage from './pages/homepage/homepage.component';
import CheckoutPage from './pages/checkoutpage/checkoutpage.component';
import UserSignup from './pages/user-signup/user-signup.component';

import DashboardPage from './pages/admin/dashboardpage.component';

class App extends Component {
  render() {
  return (
    <div className="App">
      

    <NavBar />           
    <Switch>
       <Route exact path='/' component={HomePage}/>
       <Route exact path='/checkout' component={CheckoutPage}/>
       <Route exact path='/user-signup' component={UserSignup} />

       <Route exact path='/admin/dashboard' component={DashboardPage} />
    </Switch>
      
      
    </div>
  );
  }
}

export default App;
