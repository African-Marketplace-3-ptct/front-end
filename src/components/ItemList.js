// Temporary location for all my logic and my API call to display Item componenet with Props
import React, { useState, useEffect } from "react";
// import {useParams} from 'react-router-dom';
import axios from "axios";
import Item from './Item'

export const ItemList = (props) => {
  let [itemListState, setItemListState] = useState([]);
  // const params = useParams();

//   API URL HERE
  // const backendAPI = `https://africanmarketplaceapp.herokuapp.com/api/${id}`;


  useEffect((Id) => {
    axios
          .get(`https://africanmarketplaceapp.herokuapp.com/api/${Id}`)
          .then((response) => {
            console.log("Logged", response);
            setItemListState(response.data);
          })
          .catch((error) => console.log(error));
  },[])
  
// const fetchItem = (props) => {
//   axios
//       .get(`http://africanmarketplaceapp.herokuapp.com/api/$(owners.id)`)
//       .then(res => {
        
//         console.log(res); 
//         setItemListState(res.data)})
//       .catch((err) => console.log(err.res))
// }


// useEffect(() => {
//   fetchItem(params.owners.id);
// console.log("USER", params.owners.id);

// }, []);



  return (
    <div style={{ marginTop: '200px', marginBottom: '200px'}}>
      <h1>Market Listings</h1>
      {itemListState.reverse().map((item) => <Item itemName={item.name} key={item.id} itemDescription={item.description} itemPrice={item.price} itemLocation={item.location}/>
      )}
      <button onClick={()=>{props.history.push('/item-form')}}>Add Item</button>
    </ div>
  );
};