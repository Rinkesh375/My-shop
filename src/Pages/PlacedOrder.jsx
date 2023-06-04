import React, { useState } from 'react';
import { useEffect } from 'react';
import OrderCard from '../components/PlacedOrderCard/OrderCard';
import { addToCartProducts } from '../components/api/apiCalling';
import { Grid } from '@chakra-ui/react';

const PlacedOrder = () => {
 const currentUser = JSON.parse(localStorage.getItem("currentUser"));
 const [purchasedOrder,setPurchasedOrder] = useState([])
 const getData = async () => {
    let received = await addToCartProducts(currentUser.id);
    setPurchasedOrder(received.purchased_product)
}

 useEffect(()=>{
    getData()
 },[])
  return (
    <Grid>
    {purchasedOrder?.map(ele=><OrderCard key={ele.id} {...ele}/>)}
    </Grid>
  );
}

export default PlacedOrder;
