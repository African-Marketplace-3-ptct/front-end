import React, {useState} from 'react';
import {useHistory, Link} from 'react-router-dom';
import axios from 'axios';
import {Form, FormGroup, Label,  Input, Button} from 'reactstrap';


const Register = () => {
   
    const [ credentials, setCredentials ] = useState({});
    const {push} = useHistory();


    const handleChange = e => {
         
        setCredentials({
            ...credentials,
             [e.target.name]: e.target.value
        });
         
    }

    const handleRegister = e => {
        e.preventDefault();
        axios
            .post('http://localhost:5000/api/register', credentials)
            .then(res => {
            console.log(res.data)
           
            push('/login')
        })
        .catch(err => {
            console.log('Something is wrong', err)
        })
    }

    return (  
        <div className="registerform">
        <h3>Member Registration</h3>
        <Form onSubmit={handleRegister}>
         <FormGroup>
        <Label for="username">Username </Label>
        <Input 
            type="text" 
            name="username" 
            id="username" 
            placeholder="Enter a Username"
            onChange={handleChange}
           
            />
      </FormGroup>
      <FormGroup>
        <Label for="password">Password </Label>
        <Input 
            type="password" 
            name="password" 
            id="password" 
            placeholder="Enter a password"
            onChange={handleChange}
            
            />
      </FormGroup>
      <Button>Register</Button>
      <p>Already a member? <Link to='/login'>Login Here</Link></p>
      </Form>
        
        </div>
    )

}

export default Register;
 