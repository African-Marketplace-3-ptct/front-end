import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import {axiosWithAuth} from '../utils/axiosWithAuth'

// Kept the Props names matching to the names used in the ItemForm.js component

const Item = (props) => {

  const token = localStorage.getItem("token")
  const {id} = useParams();
  const history = useHistory()

  const [item, setItem] = useState()


  const fetchItem = (id) => {
    axiosWithAuth()
      .get(`https://africanmarketplaceapp.herokuapp.com/api/items/${id}`)
      .then((res) => setItem(res.data))
      .catch((err) => console.log(err.response));
  };

  useEffect(() => {
    fetchItem(id);
  }, [id]);

   const editHandler = () => history.push(`/update-item/${id}`)
   
   const deleteHandler = e => { 
    e.preventDefault()
    axiosWithAuth()
    .delete(`https://africanmarketplaceapp.herokuapp.com/api/items/${props.itemId}`, item)
    .then(res => {
      console.log('DELETED?', id, res, )
      history.push(`/itemlist`)
      props.getItemList()
  })
     .catch(err => console.log(err))
  }
  return (
    <div className="item">
      <h3>{props.itemName}</h3>
      <p>Description: {props.itemDescription}</p>
      <p>Price: {props.itemPrice}</p>
      <p>Market Location: {props.itemLocation}</p>
      


      {token ? <button onClick={editHandler}>EDIT</button> : ''}
      {token ? <button onClick={deleteHandler}>DELETE</button> : ''}
    </div>
  );
};

export default Item;
