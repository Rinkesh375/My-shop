import { Stack, VStack, Box, Heading, Input, Center, Button, FormControl, useToast } from '@chakra-ui/react'
import axios from 'axios'
import React, { useState } from 'react'
import { addNewUser } from '../redux/usersReducer/action'
import { useNavigate } from 'react-router-dom'

const userDetails = {
  name: "",
  id: "",
  password: ""
}
const RegisterUser = () => {
  const [userData, setUserData] = useState(userDetails)
  const { name, id, password } = userData;
  const navigate = useNavigate();
  const toast = useToast()
  const handleUserRegister = (e) => {
    e.preventDefault()
   axios.get(`http://localhost:8080/users/${userData.id}`)
   .then(()=>toast({
    title: 'Email already exists.',
    status: 'error',
    duration: 4000,
    isClosable: true,
    position:"top"
  }))
  .catch(()=>{
    addNewUser({...userData,addToCart:[],purchased_product:[]})
    toast({ position:"top",title: 'Account Created.',status: 'success',duration: 4000,isClosable: true,description:"Account has been created successfully"})
    setTimeout(() => {
      navigate("/login")
    }, 4000);
  })
  }
  return (

    <Stack spacing="2rem" w="30%" m="5rem auto" p=" 2rem" style={{ boxShadow: 'rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px' }}>
      <Center><Heading>Register Here</Heading></Center>



      <form onSubmit={handleUserRegister}>
        <Stack spacing="2rem">
          <FormControl isRequired> <Input type='text' placeholder="Enter Your Name :-" required value={name} onChange={(e) => setUserData({ ...userData, name: e.target.value })} /></FormControl>
          <FormControl isRequired><Input type='email' placeholder="Enter Your Email :-" required value={id} onChange={(e) => setUserData({ ...userData, id: e.target.value })} /></FormControl>
          <FormControl isRequired><Input type="password" placeholder='Enter Your Password :-' required value={password} onChange={(e) => setUserData({ ...userData, password: e.target.value })} /></FormControl>

          <Button type='submit' my="2rem" color="white" cursor="pointer" bg="#ff147b" value="Register" _hover={{ color: "white", bg: "#ff147b" }}>Register</Button>

        </Stack>
      </form>

    </Stack>


  )
}

export default RegisterUser
