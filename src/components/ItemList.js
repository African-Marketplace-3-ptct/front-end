// Temporary location for all my logic and my API call to display Item componenet with Props
import React, { useState, useEffect } from "react";
import axios from "axios";
import Item from './Item'

export const ItemList = (props) => {
  let [itemListState, setitemListState] = useState([]);

//   API URL HERE
  const backendAPI = "";

  
  useEffect(() => {
    axios
          .get(backendAPI)
          .then((response) => {
            console.log("Logged", response);
            setitemListState(response.data);
          })
          .catch((error) => console.log(error));
  },[])
  

  return (
    <div style={{ marginTop: '200px', marginBottom: '200px'}}>
      <h1>Market Listings</h1>
      {itemListState.reverse().map((item) => <Item itemName={item.name} key={item.id} itemDescription={item.description} itemPrice={item.price} itemLocation={item.location}/>
      )}
      <button onClick={()=>{props.history.push('/item-form')}}>Add Item</button>
    </ div>
  );
};