import React from 'react';
import { GridItem,VStack,Box,Image,Stack,HStack,Heading,Text,Grid, Center } from '@chakra-ui/react';

// "id": 233,
// "image": "https://media6.ppl-media.com/tr:h-235,w-235,c-at_max,oi-AD_35x235_small_kJWM53nMn1.png,ow-60,ofo-top_right,dpr-2/static/img/product/309243/godrej-expert-creme-dark-brown-pack-of-4-17_1_display_1664285423_bd721b85.jpg",
// "name": "Godrej Expert Creme Dark Brown - Pack of 4",
// "price": 115,
// "rating": 3,
// "product_category": "Hair Color",
// "gender": "female",
// "qty": 1,
// "time": 1685882983913

const OrderCard = ({image,name,price,qty,time}) => {
    return (

        <>
          <Center style={{ boxShadow: `rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px` }} p="1rem" w="60%" m="4rem auto 0rem auto" >
            <Grid templateColumns="1fr 3fr 1.5fr" gap="1rem">
            <GridItem>
                <VStack>
                    <Box> <Image w="100%" src={image} alt={name} /> </Box>
                    <Text fontWeight="bold">Quantity - {qty}</Text>
                    
                </VStack>

            </GridItem>

            <GridItem >
                <Stack>
                    <Heading as="h4" size="sm">{name}</Heading>
                    <HStack><Text textDecoration="line-through">&#8377; {price + 199}</Text><Heading>&#8377; {price}</Heading></HStack>
                
                </Stack>

            </GridItem>

            <GridItem>

                <Stack>
                    <Text color="rgb(136, 99, 251)">Order Placed On {new Date(time).toLocaleString()}</Text>
                    <HStack><Text fontSize="1.2rem" fontWeight="bold">Free Delivery</Text><Text fontSize="1rem" textDecoration='line-through'>&#8377; 99</Text></HStack>
                </Stack>

            </GridItem>
            </Grid>
            </Center>
        </>

    );
}

export default OrderCard;
