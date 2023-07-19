import {
      Stack,
      HStack,
      Img,
      Divider,
      Flex,
    
      Button,
   
      Text, Box, Grid, GridItem,
      Popover,
      PopoverTrigger,
      PopoverContent,
 
      PopoverBody,

      PopoverArrow,


      Portal
} from "@chakra-ui/react"
import logo from "../Images/Myshop.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHeart} from "@fortawesome/free-regular-svg-icons"
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import SearchInput from "../components/searchProducts/SearchInput";
import { FaUser } from 'react-icons/fa'
import { Link } from "react-router-dom";

import {  useDispatch, useSelector } from "react-redux";
import { loginStatus } from "../redux/userLogin/action";
import { USER_LOGGED_OUT } from "../redux/userLogin/actionTypes";
import { useState } from "react";








const SearchNav = () => {
   
      const isAuth = useSelector(state => state.userLoginReducer.isAuth);
      const [auth,setAuth] = useState(isAuth)
      const dispatch = useDispatch();
      const [open,setOpen] = useState(false)
      let current = JSON.parse(localStorage.getItem("currentUser"));
     
 

      const handleLogout = () => {
            localStorage.removeItem("currentUser");
            setAuth(false)
            dispatch(loginStatus(dispatch, USER_LOGGED_OUT))
      }

      return (
            <Box h="100px">
                  <Grid gridTemplateColumns="1.5fr 1fr 1fr" gap="10rem" height="52px" zIndex={1} w="90%" m="1rem auto">
                        <SearchInput />
                        <GridItem ><Link to="/"><Img src={logo} height="50px" /></Link> </GridItem>
                        <GridItem>
                              <HStack spacing="1rem">   <FontAwesomeIcon color="#ff147b" icon={faHeart} style={{ height: "2.4rem" }} />
                                    <Link  to="/cart"><FontAwesomeIcon color="#ff147b" icon={faCartShopping} style={{ height: "2.5rem" }} /> </Link>
                           
                                   <Box onClick={()=>setOpen(!open)}>
                                    <Popover isOpen={open}>
                                          <PopoverTrigger >
                                                <HStack><Text as="span" fontWeight="bold">{auth || current  ? JSON.parse(localStorage.getItem("currentUser")).name : "Guest"}</Text><FaUser cursor="pointer" color="#ff147b" size="2rem" /></HStack>
                                          </PopoverTrigger>
                                          <Portal>
                                                <PopoverContent  >
                                                      <PopoverArrow />

                                                    
                                                      <PopoverBody>
                                                            <Stack>

                                                            { auth || current ? <Button onClick={handleLogout}>Sign Out</Button> : <Link to="/login" > <Button variant="none">Sign In</Button></Link>}
                                                            { auth ||  current? <Link to="/placedOrder">  <Button  w="100%">Your Order</Button></Link> : null}
                                                            </Stack>
                                                      </PopoverBody>

                                                </PopoverContent>
                                          </Portal>
                                    </Popover>

                                   </Box>

                               


                              </HStack>
                        </GridItem>

                  </Grid>
                  <Flex w="70%" m="auto" justify="space-evenly" mt="2rem" zIndex={1}>
                        <Text pb="1rem" _hover={{ borderBottom: "2px solid #60f", color: "#60f", cursor: "pointer" }}>  SHOP CATEGORIES</Text>
                        <Text _hover={{ borderBottom: "2px solid #60f", color: "#60f", cursor: "pointer" }}>BRANDS</Text>
                        <Text _hover={{ borderBottom: "2px solid #60f", color: "#60f", cursor: "pointer" }}>OFFERS</Text>
                        <Text _hover={{ borderBottom: "2px solid #60f", color: "#60f", cursor: "pointer" }}>NEW</Text>
                        <Text _hover={{ borderBottom: "2px solid #60f", color: "#60f", cursor: "pointer" }}>SPLURGE</Text>
                        <Text _hover={{ borderBottom: "2px solid #60f", color: "#60f", cursor: "pointer" }}>MAGAZINE</Text>
                        <Text _hover={{ borderBottom: "2px solid #60f", color: "#60f", cursor: "pointer" }}>ELITE OFFERS</Text>
                  </Flex>
                  <Divider h="1px" bg="#d7c8c8" />
            </Box>

      )
}

export default SearchNav