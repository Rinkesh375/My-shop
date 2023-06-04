import { Box,  Flex, Img, Text,chakra,Button, Icon, HStack } from "@chakra-ui/react"
import { CloseIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import Logo from "../Images/Myshop.png"


const DownloadApp = () => {
    return (
        <Box bg="brand.1100" zIndex={1} padding="0.6rem"  >
            <Flex justify="space-around" align="center">
                <Flex >
                    <Link to="/"><Img h="30px" src={Logo} name="logo" /></Link>
                    <Text>⭐️⭐️ FLAT Rs. 100 OFF on your first order! ⭐️⭐️</Text>
                    <Box bg="#fff" padding="0.1rem 0.3rem" border="2px dashed" borderColor="brand.1200" >
                        <chakra.span>Use Code:</chakra.span><chakra.span color="brand.1200">APP FIRST</chakra.span>
                    </Box>
                </Flex>
                <HStack spacing="24px">
                <Button bg="brand.1200" colorScheme='teal' size='sm' paddingX="2rem" _hover={{bg:"brand.1200"}}>Button</Button>
                <Icon as={CloseIcon} />
                </HStack>
            </Flex>



        </Box>
    )
}

export default DownloadApp