import { Box, Button, GridItem, HStack, Image, VStack, Text, Heading,Grid,Stack } from '@chakra-ui/react';
import React from 'react';



const CartItemCard = ({ id, image, name, price, rating, product_category, gender, qty,index,removeCartItem,updateCartProductQty }) => {
    return (
        <Box style={{ boxShadow: `rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px` }} p="1rem">
            <Grid templateColumns="1fr 3fr 1fr" gap="2rem">
                <GridItem>
                    <VStack>
                        <Box> <Image w="100%" src={image} alt={name} /> </Box>
                        <HStack> <Button color="white" bg="brand.1200" _hover={{ bg: "brand.1200" }} isDisabled={qty == 1} onClick={()=>updateCartProductQty(index,-1)}>-</Button> <Text >{qty}</Text> <Button color="white" bg="brand.1200" _hover={{ bg: "brand.1200" }} onClick={()=>updateCartProductQty(index,1)}>+</Button> </HStack>
                    </VStack>

                </GridItem>

                <GridItem >
                    <Stack>
                        <Heading as="h4" size="sm">{name}</Heading>
                        <HStack><Text textDecoration="line-through">&#8377; {price + 199}</Text><Heading>&#8377; {price}</Heading></HStack>
                    <HStack><Button  color="white" bg="brand.1200" _hover={{ bg: "brand.1200" }} onClick={()=>removeCartItem(index)}>Remove</Button></HStack>
                    </Stack>

                </GridItem>

                <GridItem>

                    <Stack>
                        <Text color="rgb(136, 99, 251)">Delivery by Fri</Text>
                        <HStack><Text fontSize="1.2rem">Free Delivery</Text><Text textDecoration='line-through'>&#8377; 99</Text></HStack>
                    </Stack>

                </GridItem>

            </Grid>
        </Box>
    );
}

export default CartItemCard;
