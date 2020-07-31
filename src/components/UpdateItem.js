import React, {useState, useEffect} from 'react'
import {useParams, useHistory} from 'react-router-dom'
import axios from 'axios'

const UpdateForm = props => { 
    const history = useHistory()
    const initialForm = {
        itemName: "",
        itemType: "",
        price: "",
        itemdesc: "",
        imageUrl: "",
        itemLocation: ""
    }
    const [formState, setformState] = useState(initialForm)
    const {id} = useParams()

    const backendAPIURL = `https://africanmarketplaceapp.herokuapp.com/api/items`;

    useEffect(() => { 
        axios.get(`${backendAPIURL}/${id}`)
        .then(res => {
            console.log(res.data[0])
            setformState(res.data[0])

        })
        .catch(err => console.log(err))
    }, [id])

    const formSubmit = (e) => {
        e.preventDefault();
       axios.put(`${backendAPIURL}/${id}`, formState)
       .then(res => {
        console.log(res)
        history.push(`/itemlist`)
        
    })
       .catch(err => console.log(err))
        console.log("Form submitted", formState);   
    }
      
    const inputChange = (e) => {
        e.persist();    
        setformState( {...formState,  [e.target.name]: e.target.value });
      };


    return (
        <div>
    <h1>Update Item</h1>
    <form onSubmit={formSubmit}> 
        <input type='text' name='id' placeholder='id' onChange={inputChange} value={formState.id} ></input>
        <input type='text' name='itemName' placeholder='name' onChange={inputChange} value={formState.itemName} ></input>
        <input type='text' name='itemType' placeholder='name' onChange={inputChange} value={formState.itemType} ></input>
        <input type='text' name='itemdesc' placeholder='description' onChange={inputChange} value={formState.itemdesc}></input>
        <input type='text' name='price' placeholder='price' onChange={inputChange} value={formState.price}></input>
        <input type='text' name='itemLocation' placeholder='location' onChange={inputChange} value={formState.itemLocation}></input>
      <button form-button>Update</button>
    </form>
    </div>
    )
}

export default UpdateForm 