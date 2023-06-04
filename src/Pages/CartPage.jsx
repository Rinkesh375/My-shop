import React, { useRef, useState } from 'react'
import { useEffect } from 'react';
import { addToCartProducts } from '../components/api/apiCalling';
import CartItemCard from '../components/cartItemCard/CartItemCard';
import { Grid, GridItem, Heading, Stack, useToast } from '@chakra-ui/react';
import { addProductToCart } from '../redux/usersReducer/action';
import CartTotalPrice from '../components/cartItemCard/CartTotalPrice';

const CartPage = () => {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    const { id } = currentUser
    const [addToCart, setAddToCart] = useState([]);
    const toast = useToast()
    let placedOrder = useRef([]);
    




    const getData = async () => {
        let received = await addToCartProducts(id);
        setAddToCart(received.addToCart);
        placedOrder.current =  received.purchased_product


    }
    const removeCartItem = (index) => {
        let newArray = addToCart;
        newArray.splice(index, 1)
        addProductToCart(id, { addToCart: newArray })
        setAddToCart([...newArray])

    }
    const setTimePlacedOrder = (tempArr)=>{
            tempArr = tempArr.map((ele)=>{
                return {...ele,time:new Date().toGMTString()}
            })
            return tempArr;
    }
    const placeOrderHandler = () => {

        addProductToCart(id, { addToCart: [], purchased_product: [...placedOrder.current, ...setTimePlacedOrder(addToCart)] })
        placedOrder.current = [...placedOrder.current,...addToCart]
        console.log(placedOrder.current)
        toast({
            title: 'Order Placed',
            description: `Thank you ${currentUser.name} for shopping with us.`,
            status: 'success',
            duration: 4000,
            isClosable: true,
            position:"top"
          })
          setAddToCart([])

    }
    const updateCartProductQty = (itemIndex, count) => {
        let newArray = addToCart.map((ele, index) => index == itemIndex ? { ...ele, qty: ele.qty + count } : ele)
        addProductToCart(id, { addToCart: newArray })
        setAddToCart(newArray)
    }
    useEffect(() => {
        getData()

    }, [])



    return (
        <Grid templateColumns="3fr 1fr" w="95%" m="3rem auto" gap="2rem">
            {addToCart.length ? <GridItem>
                <Stack>
                    {addToCart?.map((ele, index) => <CartItemCard key={ele.id} {...ele} index={index} removeCartItem={removeCartItem} updateCartProductQty={updateCartProductQty} />)}
                </Stack>
            </GridItem> : <Heading textAlign="center">Your cart is empty!</Heading>}
            <CartTotalPrice addToCart={addToCart} placeOrderHandler ={placeOrderHandler} />

        </Grid>
    )
}

export default CartPage
