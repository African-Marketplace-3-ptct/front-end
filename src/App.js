import React from 'react';
import logo from './amlogo1.png';
import { Route } from 'react-router-dom';
import './App.css';
import {ItemList}  from './components/ItemList';
import Login from './components/Login';
 


function App() {
  return (
    <div className="App">
    <img className="logo" src={logo} alt="logo" />
     <div className="nav">
   
      
      </div>
       <header className="App-header">
       <div className="loginForm">
      <Route exact path='/login' component={Login} />
      </div>
        </header>

      
        <Route exact path='/' component={App} />
      <Route exact path='/itemlist' component={ItemList} />
    </div>
  );
}

export default App;
