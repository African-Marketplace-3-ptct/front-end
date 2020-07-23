import React from 'react';
import logo from './amlogo.png';
import {Route, Link} from 'react-router-dom';
import './App.css';
import { StoreListings }  from './components/Customers';
import { Login }  from './components/Business';
import { Button } from 'reactstrap';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" width="300px" height="100%"   />
       <p className="sitename">SAM Business Portal</p>
      </header>
      <div className="navbar">
      <Link to='/customers'><Button color="success">Customers</Button></Link>
      <Link to='/login'><Button color="primary">Business Login</Button></Link>
      </div>
      <Route exact path='/customers' component={StoreListings} />
      <Route exact path='/login' component={Login} />
    </div>
  );
}

export default App;
