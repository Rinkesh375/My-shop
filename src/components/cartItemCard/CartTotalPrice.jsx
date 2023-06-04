import { Box, GridItem, Heading, Stack,Flex,Text,Divider,Tag, HStack,Button } from '@chakra-ui/react';
import React, { useState,useEffect } from 'react';
import { ChakraBaseProvider } from '@chakra-ui/react';

const initalPrice = {
    actualPrice:0,
    discountPrice:0,
 
}

const CartTotalPrice = ({addToCart,placeOrderHandler}) => {
   const [price,setPrice] = useState(initalPrice)
   const {actualPrice,discountPrice} = price
    

    const calculatePrice = ()=>{
        let tempPrice = initalPrice
        for(let ele of addToCart) tempPrice = {...tempPrice,actualPrice:tempPrice.actualPrice+(ele.qty*ele.price+ele.qty*199),discountPrice:tempPrice.discountPrice+(ele.qty*199)};
        setPrice({...tempPrice})

    }
    useEffect(() => {
     calculatePrice()
    }, [addToCart]);
  return (
    <GridItem  p="1rem">
    <Stack>
        <Heading as="h3" size="lg" textAlign="center" >PRICE DETAILS</Heading>
        <Flex fontSize="1.3rem" justify="space-between"><Text color="rgb(136, 99, 251)">Price</Text><Text color="#ff147b">&#8377; {actualPrice}</Text></Flex>
        <Flex fontSize="1.3rem" justify="space-between"><Text color="rgb(136, 99, 251)">Discount</Text><Text color="#ff147b">&#8377; {discountPrice}</Text></Flex>
        <Flex fontSize="1.3rem" justify="space-between"><Text color="rgb(136, 99, 251)">Delivery Charges</Text><Text color="#ff147b">FREE</Text></Flex>
        <Divider orientation='vertical' bg="black" h="1px" />
        <Flex fontSize="1.3rem" justify="space-between"><Text color="rgb(136, 99, 251)">Total Price</Text><Text color="#ff147b">&#8377; {actualPrice-discountPrice}</Text></Flex>
        <Divider orientation='vertical' bg="black" h="1px" />
       <Text  fontSize="1.3rem">You will save <Text as="span" color="#ff147b">&#8377; {discountPrice}</Text> on this order</Text>
    </Stack>
    {addToCart.length?<Stack m="3rem" ><Button bg="#ff147b" onClick={placeOrderHandler} color="white" _hover={{bg:"#ff147b"}}>Place Order</Button></Stack>:null}
    </GridItem>
  );
}

export default CartTotalPrice;
