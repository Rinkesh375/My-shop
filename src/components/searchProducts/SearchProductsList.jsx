import React from 'react';
import { useSelector } from 'react-redux';
import SearchProductCard from './SearchProductCard';
import { Center, Grid, HStack, Heading } from '@chakra-ui/react';


const SearchProductsList = () => {
  const {searchArr} = useSelector(state=>state.searchReducer);


  return (
        <>
        {searchArr.length?  <Grid templateColumns={{ base: "1fr", sm: "repeat(2,1fr)", md: "repeat(3,1fr)", lg: "repeat(3,1fr)"  }} gap="6">
        
        {searchArr.map(ele=><SearchProductCard key={ele.id}  {...ele}/>)}
      
      </Grid>:<Heading textAlign="center" as='h2' size='3xl'>No Item Found</Heading>}
      
   
        
        </>
  );
}

export default SearchProductsList;
