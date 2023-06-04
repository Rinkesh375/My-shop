import React from 'react'
import { Button, HStack } from '@chakra-ui/react';
import {  useSelector,shallowEqual } from 'react-redux'

const Pagination = ({page,handlePages}) => {

    
    let {totalPages} = useSelector(state=>state.searchReducer,shallowEqual);

  
  return (
    <HStack mb="2rem">
      <Button colorScheme='messenger'  variant='solid' onClick={()=>handlePages(page-1)} isDisabled={page === 1}>Previous</Button>
      <Button colorScheme='messenger' isDisabled={true} variant='solid' >{page}</Button>
      <Button colorScheme='messenger'  variant='solid' isDisabled={page===Math.ceil(totalPages/9)} onClick={()=>handlePages(page+1)}>Next</Button>
    
    </HStack>
  )
}

export default Pagination
