
import {
      Input, 
      HStack, 
      Box,
      Icon,
      Img, 
      Divider,
      Flex,
      Menu,
      Button,
      MenuButton,
      MenuList,
      Text

} from "@chakra-ui/react"
import { SearchIcon, ChevronDownIcon,HamburgerIcon } from "@chakra-ui/icons"
import logo from "../Images/Myshop.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHeart, faFaceSmile } from "@fortawesome/free-regular-svg-icons"
import { faCartShopping } from "@fortawesome/free-solid-svg-icons"






const SearchNav = () => {

      return (
            <>
                  <HStack justifyContent="space-around" height="52px" mt="1rem">
                        <Flex borderBottom="2px solid #60f " justify="space-between" px="1rem" align="center"><Input pr="1rem" mr="1rem" variant="none" placeholder="What are you looking for?  " width="auto" /> <Icon as={SearchIcon} /> </Flex>
                        <Img src={logo} height="50px" />
                        <HStack spacing="1rem">   <FontAwesomeIcon icon={faHeart} style={{ height: "2.4rem" }} /> 
                        <Menu >
                              <MenuButton  >
                                    <FontAwesomeIcon icon={faFaceSmile} style={{ height: "2.5rem" }} />
                              </MenuButton>
                              <MenuList display="grid" >
                                    <Button bg="#60f"color="white" variant="none"> Sign In </Button>
                                    <Button  >Your Order</Button>
                                    <Button >Your Account</Button>
                                    <Button >Your Wishlist</Button>
                                    <Button >Become a seller</Button>
                              </MenuList>
                        </Menu> <FontAwesomeIcon icon={faCartShopping} style={{ height: "2.5rem" }} />   </HStack>

                  </HStack>
                  <Flex w="70%" m="auto"  justify="space-evenly" mt="2rem" >
                        <Text pb="1rem" _hover={{borderBottom:"2px solid #60f",color:"#60f",cursor:"pointer"}}>  SHOP CATEGORIES</Text>
                        <Text _hover={{borderBottom:"2px solid #60f",color:"#60f",cursor:"pointer"}}>BRANDS</Text>
                        <Text _hover={{borderBottom:"2px solid #60f",color:"#60f",cursor:"pointer"}}>OFFERS</Text>
                        <Text _hover={{borderBottom:"2px solid #60f",color:"#60f",cursor:"pointer"}}>NEW</Text>
                        <Text _hover={{borderBottom:"2px solid #60f",color:"#60f",cursor:"pointer"}}>SPLURGE</Text>
                        <Text _hover={{borderBottom:"2px solid #60f",color:"#60f",cursor:"pointer"}}>MAGAZINE</Text>
                        <Text _hover={{borderBottom:"2px solid #60f",color:"#60f",cursor:"pointer"}}>ELITE OFFERS</Text>
                  </Flex>
                  <Divider h="1px" bg="#d7c8c8" />
            </>

      )
}

export default SearchNav