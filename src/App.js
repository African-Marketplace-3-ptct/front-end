import React, { useState, useEffect } from "react";
import logo from './amlogo1.png';
import { Route, Switch, Link } from 'react-router-dom';
import './App.css';
import {ItemList}  from './components/ItemList';
import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';
import {ItemForm} from './components/ItemForm';
import Register from './components/Register';
import UpdateForm from './components/UpdateItem'
import {UserContext} from './utils/UserContext'




const App = () => {
  // Context sharing for LOGIN/LOGOUT and Username 
  const [user, setUser] = useState()
  console.log(user)
  

  const logout = () => {
    localStorage.removeItem('token')
    setUser('')
  }
  
  return (
    <div className="App">
    <img className="logo" src={logo} alt="logo" />
  
  
    {user ? <Link onClick={logout} to='/'>Logout </Link> : <Link to='/login'>Login </Link>}
  <Link to='/register'>Register </Link>
  
  <Link to='/itemlist'>Items </Link>
 
        
       <header className="App-header">
      
       
        <UserContext.Provider value={{user, setUser}}>
       <div className="loginForm">
       <Route path='/login' exact  component={Login} />
        <Route path='/register' exact component={Register} />
      </div>
        
        
      <Switch>
        <PrivateRoute exact path='/item-form' component={ItemForm} />
        <PrivateRoute exact path='/update-form/:id' component={UpdateForm} />
        <Route exact path='/itemlist' component={ItemList} />
        <Route exact path='/' component={ItemList} />
       </Switch>
        </UserContext.Provider>
       </header>
    </div>
  );
}

export default App;
