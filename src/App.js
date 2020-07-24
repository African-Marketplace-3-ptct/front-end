import React from 'react';
import logo from './amlogo1.png';
import {Route, Link} from 'react-router-dom';
import './App.css';
import {ItemList}  from './components/ItemList';
import { Login }  from './components/Login';
import { Button } from 'reactstrap';


function App() {
  return (
    <div className="App">
    <img className="logo" src={logo} alt="logo" />
     <div className="nav">
     <Link to='/login'><Button color="success">Shop Owner Login</Button></Link>
      
      </div>
       <header className="App-header">
       <div className="loginForm">
      <Route exact path='/login' component={Login} />
      </div>
        </header>

      
    
      <Route exact path='/itemlist' component={ItemList} />
    </div>
  );
}

export default App;
