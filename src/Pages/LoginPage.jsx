import { Heading, Box, Input, Stack, Button, TagLabel, Tag, FormControl, Spinner, useToast } from '@chakra-ui/react';

import { Link, useLocation, useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllExistingUsers } from '../redux/usersReducer/action';
import { loginStatus } from '../redux/userLogin/action';
import { USER_LOGGED_IN } from '../redux/userLogin/actionTypes';

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const toast = useToast();
  const { users } = useSelector(state => state.usersReducer);

  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();


  const checkAuth = () => {

    for (let ele of users) if (ele.id === email && ele.password === password) {
      localStorage.setItem("currentUser", JSON.stringify(ele));
      return true;
    }
    return false;
  }
  const handleLogin = (e) => {
    e.preventDefault();

    if (checkAuth()){
      dispatch(loginStatus(dispatch,USER_LOGGED_IN))
      toast({ position: "top", title: 'Login Successfully', status: 'success', duration: 2000, isClosable: true, })
      setTimeout(() => {
        if(!location.state) navigate("/",{replace:true})
        else navigate(location.state,{replace:true})
      }, 2000);
    }
    else toast({ position: "top", title: 'Login Failed', status: 'error', duration: 4000, isClosable: true, description: "Please check your email and password" })

  }
  useEffect(() => {
    dispatch(getAllExistingUsers(dispatch))
  }, []);
  return (

    <Box w="30%" m="5rem auto" p="2rem" style={{ boxShadow: 'rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px' }}>
      <Heading textAlign="center">Sign In Here</Heading>
      <form onSubmit={handleLogin}>
        <Stack spacing="1rem">
          <Tag bg="none"><TagLabel >Email :</TagLabel></Tag>
          <FormControl isRequired><Input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} /></FormControl>
          <Tag bg="none"><TagLabel>Password :</TagLabel></Tag>
          <FormControl isRequired><Input type="password" required value={password} autoComplete='off'  onChange={(e) => setPassword(e.target.value)} /></FormControl>

          <Box textAlign="center" my="7rem" ><Link to="/register" style={{ marginRight: "1rem" }}><Button color="white" bg="#ff147b" _hover={{ color: "white", bg: "#ff147b" }}>Create New Account</Button></Link><Button _hover={{ color: "white", bg: "#ff147b" }} type='submit' color="white" bg="#ff147b" >Login</Button></Box>
        </Stack>
      </form>
    </Box>

  );
}

export default LoginPage;
