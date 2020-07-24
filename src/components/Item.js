import React from 'react';

// Kept the Props names matching to the names used in the ItemForm.js component

const Item = (props) => {

   const token = localStorage.getItem("token")
    
  return (
    <div className="item">
      <h3>{props.itemName}</h3>
      <p>Description: {props.itemDescription}</p>
      <p>Price: {props.itemPrice}</p>
      <p>Market Location: {props.itemLocation}</p>
      

      {/* //   IF or ? - display EDIT BUTTON if they're logged in? */}
      {/* {loggedIn ? 'Hide' : 'Show'} */}
      {/* LOOK FOR TOKEN AND IF NOT THERE, DO NOT RENDER */}
      {/* localStorage.getItem("token");  */}

      {token ? <button>EDIT</button> : ''}
    </div>
  );
};

export default Item;
