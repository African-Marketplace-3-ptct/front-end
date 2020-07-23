import React, {useState} from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, Button
  } from 'reactstrap';
  import { users, shops } from '../data';
  
  
 export const StoreListings = (props) => {
     const  [users, setUser] = useState({});
     const [shops, setShops] = useState({});

    axios



    return (

      <div>
      {shops.map(shop => {
        <Card>
          <CardImg top  src="https://picsum.photos/200" alt="Card image cap" />
          <CardBody>
            <CardTitle>Store name</CardTitle>
           
            <CardText>This describes the store</CardText>
            <Button>Visit Store</Button>
          </CardBody>
        </Card>
      }) }
      
      </div>
    );
  };
  
  