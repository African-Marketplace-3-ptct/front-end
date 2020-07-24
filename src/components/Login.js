import React, {useState} from 'react';
import axios from 'axios';


export const Login = (props) => {

    const [setLogin] = useState({});

    const handleChange = (e) => {

    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axios
            .post('http://localhost:5000/api/Login')
            .then(res => {
            console.log(res.data)
            setLogin(res.data)

        })
        .catch(err => {
            console.log(err)
        })
    }

    return (  
        <div className="loginform">
        <form  onSubmit={handleSubmit}>
            <input 
                type="text" 
                name="username" 
                placeholder="Username" 
                onChange={handleChange} 
                value={props.username} 
            /><br />
             <input 
                type="password" 
                name="password" 
                placeholder="password" 
                onChange={handleChange} 
                value={props.password} 
            /><br/>
            <button type="submit">Login</button>
            </form>
        </div>
    )

}

 
