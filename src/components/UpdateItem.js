import React, {useState, useEffect} from 'react'
import {useParams, useHistory} from 'react-router-dom'
import axios from 'axios'

const UpdateForm = props => { 
    const history = useHistory()
    const initialForm = {
        id: '',
        name: '',
        description: '',
        price: '',
        location: [],
    }
    const [formState, setformState] = useState(initialForm)
    const {id} = useParams()

    const backendAPIURL = "";

    useEffect(() => { 
        axios.get(`${backendAPIURL}/${id}`)
        .then(res => {
            console.log(res.data)
            setformState(res.data)

        })
        .catch(err => console.log(err))
    }, [id])

    // const formSubmit = (e) => {
    //     e.preventDefault();
    //    axios.put(`${backendAPIURL}/${id}`, formState)
    // //    NEED TO PASS IN SETTER FUNCTION FROM HIGHER COMPONENT
       
    // //    .then(res => {props.setItemList(res.data)
    //     console.log(res)
    //     history.push(`/item/${id}`)
    //     // NEED TO PASS IN AND CALL GETTER FUNCTION FROM HIGHER COMPONENT
    //     // props.getMovieList()
    // })
    //    .catch(err => console.log(err))
    //     console.log("Form submitted", formState);   
    // }
      
    const inputChange = (e) => {
        e.persist();    
        setformState( {...formState,  [e.target.name]: e.target.value });
      };


    return (
        <div>
    <h1>Update Item</h1>
    <form onSubmit={formSubmit}> 
        <input type='text' name='id' placeholder='id' onChange={inputChange} value={formState.id} ></input>
        <input type='text' name='name' placeholder='name' onChange={inputChange} value={formState.name} ></input>
        <input type='text' name='description' placeholder='description' onChange={inputChange} value={formState.description}></input>
        <input type='text' name='price' placeholder='price' onChange={inputChange} value={formState.price}></input>
        <input type='text' name='location' placeholder='location' onChange={inputChange} value={formState.location}></input>
      <button form-button>Update</button>
    </form>
    </div>
    )
}

export default UpdateForm 