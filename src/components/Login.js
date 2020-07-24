import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import axios from 'axios';
import {Form, FormGroup, Label,  Input, Button} from 'reactstrap';


const Login = () => {

    const [ credentials, setCredentials ] = useState({});
    const {push} = useHistory();


    const handleChange = e => {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        });
    }

    const handleLogin =  e => {
        e.preventDefault();
        axios
            .post('http://localhost:5000/api/login', credentials)
            .then(res => {
            console.log(res)
            localStorage.setItem('token', res.data.payload);
            push('/itemslist');
        })
        .catch(err => {
            console.log(err)
        })
    }

    return (  
        <div className="loginform">
        <Form onSubmit={handleLogin}>
         <FormGroup>
        <Label for="username">Username</Label>
        <Input 
            type="username" 
            name="username" 
            id="username" 
            placeholder="Enter a Username"
            onChange={handleChange}
            value={credentials.username}  />
      </FormGroup>
      <FormGroup>
        <Label for="password">Password</Label>
        <Input 
            type="password" 
            name="password" 
            id="password" 
            placeholder="Enter a password"
            onChange={handleChange}
            value={credentials.password} />
      </FormGroup>
      <Button>Login</Button>
      </Form>
        
        </div>
    )

}

export default Login;
 