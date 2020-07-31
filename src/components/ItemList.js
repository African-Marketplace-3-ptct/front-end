// Temporary location for all my logic and my API call to display Item componenet with Props
import React, { useState, useEffect } from "react";
// import {useParams} from 'react-router-dom';
// import axios from "axios";
import {axiosWithAuth} from '../utils/axiosWithAuth'
import Item from './Item'
import { Link } from "react-router-dom";

export const ItemList = (props) => {
  let [itemListState, setItemListState] = useState([]);
  // const {id} = useParams();
  const token = localStorage.getItem("token")
//   API URL HERE
  const backendAPI = `https://africanmarketplaceapp.herokuapp.com/api/items`;


  useEffect( () => {
    axiosWithAuth()
          .get(backendAPI)
          .then((response) => {
            console.log("Logged", response);
            setItemListState(response.data);
          })
          .catch((error) => console.log(error));
  },[])


  const getItemList = () => {
    axiosWithAuth()
      .get(backendAPI)
      .then(res => setItemListState(res.data))
      .catch(err => console.log(err.response));
  };


  return (
    <div style={{ marginTop: '200px', marginBottom: '200px'}}>
      <h1>Market Listings</h1>
      {itemListState.reverse().map((item) => (
      <Link key={item.id} to={`/update-form/${item.id}`}> 
      <Item itemName={item.itemName} key={item.id} itemDescription={item.itemdesc} itemPrice={item.price} itemLocation={item.itemLocation} itemId={item.id} getItemList={getItemList}/>
      </Link>
      )
      )}
      {token ? <button onClick={()=>{props.history.push('/item-form')}}>Add Item</button> : ''} 
    </ div>
  );
};