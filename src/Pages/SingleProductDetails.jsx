import { Heading, Image, Stack, Text, HStack, Button, Box, useToast } from '@chakra-ui/react';
import { AiFillStar } from 'react-icons/ai';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getSingleProduct } from '../redux/singleProductReducer/action';
import { addProductToCart } from '../redux/usersReducer/action';
import { addToCartProducts } from '../components/api/apiCalling';
import HelpAssistant from '../HelpAssistant/HelpAssistant';
import Footer from '../Footer/Footer';



const SingleProductDetails = () => {
    let currentUser = JSON.parse(localStorage.getItem("currentUser"))
    const { product } = useSelector(state => state.singleProductReducer);
    const [addToCart, setAddToCart] = useState([])
    product.qty = 1
    const toast = useToast();
    const { id } = useParams();
    const dispatch = useDispatch();


    const getData = async () => {
        let received = await addToCartProducts(currentUser.id)
        setAddToCart(received.addToCart)

    }
    const checkProductAddedStatus = () => {
       
        getData()
        for (let item of addToCart) if (item.id == product.id) return true
        return false;
    }

    const addToCartHandler = () => {
        if (!currentUser) toast({ title: "Login required", description: "User needs to login", status: "error", duration: 9000, isClosable: true, position: "top" })
        else {

            if (checkProductAddedStatus()) toast({ title: "Product already added in cart", status: "error", duration: 4000, isClosable: true, position: "top" })
            else {
                addProductToCart(currentUser.id, { addToCart: [...addToCart, product] })

                setAddToCart([...addToCart, product])
                toast({ title: "Product Added", status: "success", duration: 4000, isClosable: true, position: "top" })
            }
        }

    }



    useEffect(() => {

        dispatch(getSingleProduct(id, dispatch));
        currentUser &&   getData();
    }, [])




    return (
        <>
        <Stack direction="row" w="70%" m="7rem auto" spacing="6rem">
            <Box>
                <Image w="100%" src={product?.image} alt={product?.name} />
            </Box>
            <Stack textAlign="left" spacing="2rem">
                <Heading as='h4' size='md'>{product?.name}</Heading>
                <HStack>{new Array(Math.floor(product?.rating || 0)).fill().map((ele, index) => <AiFillStar key={index} color='green' />)} </HStack>
                <HStack><Text color='blue.600' fontSize='2xl'>&#8377; {product?.price}</Text> <Heading as="h6" size="xxl" textDecoration="line-through">&#8377; {product?.price + 199}</Heading> <Text color="#298b39">(Save &#8377; 199) </Text></HStack>
                <HStack spacing="2rem"><Button color="white" bg="black" _hover={{ bg: "black" }} onClick={addToCartHandler}>ADD TO CART</Button> </HStack>
            </Stack>

        </Stack>
        <HelpAssistant/>
        <Footer/>
        
        
        </>
    );
}

export default SingleProductDetails;
