import React from 'react';
import { GridItem,VStack,Box,Image,Stack,HStack,Heading,Text,Grid, Center } from '@chakra-ui/react';



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
