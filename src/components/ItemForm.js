import React, { useState } from "react";
import * as yup from "yup"; 
import { axiosWithAuth } from "../utils/axiosWithAuth";



// Validation Logic for the item form
// const formSchema = yup.object().shape({
//     name: yup.string().min(2).required("Please name your item"),
//     description: yup.string().required("Please describe your item"),
//     price: yup.number().required("Please enter your item's price"),
//     location: yup.string().required("Please select your item's location")
//   });

export const ItemForm = (props) => {
    const [itemformState, setitemformState] = useState({
      itemName: "",
      itemType: "",
      price: "",
      itemdesc: "",
      imageUrl: "",
      itemLocation: ""
      });
    
      const [errorState, seterrorState] = useState({
        itemName: "",
        itemType: "",
        price: "",
        itemdesc: "",
        imageUrl:"",
        itemLocation: ""
      });

    //   Backend API URL here for the location to POST items to
    const backendAPIURL = `https://africanmarketplaceapp.herokuapp.com/api/items`;

      const formSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted", itemformState);
        axiosWithAuth()
        .post(backendAPIURL, itemformState)
        .then(response => {
          console.log(response.data)
          props.history.push('/itemlist');
        })
        .catch(error => {console.log(error)})
      };
    
      // Form state updates as text is entered and the input changes
      const inputChange = (e) => {
        e.persist();
        // validate(e);
        let value =
          e.target.type === "checkbox" ? e.target.checked : e.target.value;
          setitemformState({ ...itemformState, [e.target.name]: value });
      };

      // Validation logic using yup and the yup schema
      // const validate = (e) => {  
      //   yup
      //     .reach(formSchema, e.target.name)
      //     .validate(e.target.value)
      //     .then((valid) => {
      //       seterrorState({
      //         ...errorState,
      //         [e.target.name]: "",
      //       });
      //     })
      //     .catch((err) => {
      //       console.log(err.errors);
      //       seterrorState({ ...errorState, [e.target.name]: err.errors[0] });
      //     });
      // };
    return (
    <div className="form">
        

      
  
      <form onSubmit={formSubmit} style={{marginTop: '200px'}}>
        <h1>Add a Listing</h1>
        
            <input type="text" name="itemName" onChange={inputChange} value={itemformState.itemName} placeholder="Item Name"/>
            {/* {errorState.name.length > 0 ? (
            <p>{errorState.name} </p>
          ) : null} */}

          <input type="text" name="itemType" onChange={inputChange} value={itemformState.itemType} placeholder="Type of Item "/>
            {/* {errorState.name.length > 0 ? (
            <p>{errorState.name} </p>
          ) : null} */}
        
        
            <input type="textarea" rows="4" name="itemdesc" onChange={inputChange} value={itemformState.itemdesc} placeholder="Item Description" />
            {/* {errorState.description.length > 0 ? (
            <p>{errorState.description} </p>
          ) : null} */}

            <input type="textarea" name="price" onChange={inputChange} value={itemformState.price} placeholder="Item Price" />
            {/* {errorState.price.length > 0 ? (
            <p>{errorState.price} </p>
          ) : null} */}
        
        
        
        <select name="itemLocation" value={itemformState.itemLocation} onChange={inputChange} placeholder="Market Location" > 
        
          <option value="">Select Your Market Location</option>
          <option value="Kenya">Kenya</option>
          <option value="Tanzania">Tanzania</option>
          <option value="Rwanda">Rwanda</option>
          <option value="Uganda">Uganda</option>
        </select>
  
        
        <button type="submit" name="submit">Add Item </button> 
  
  
        
      </ form>
    </div>
    )
  };