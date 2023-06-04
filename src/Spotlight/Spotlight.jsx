import { Box,  Text,AspectRatio,Image } from "@chakra-ui/react"
import img from "../Images/downappImage.png"


const Spotlight = () => {
  return (
    <Box display="flex" w="80%" margin="2rem auto" justifyContent="space-around" >
      <Box w="315px"   >
        <Text mb="1rem" fontWeight="bold" fontSize="1.5rem">Spotlight</Text>
        {/* <AspectRatio  >
          <iframe width="420" height="315"
src="https://www.youtube.com/embed/NrI9d0XiP7M?rel=0&showinfo=0&autoplay=1">
</iframe>
</AspectRatio> */}
      </Box>

      <Box   >
        <Text mb="1rem" fontWeight="bold" fontSize="1.5rem">Shop on the go</Text>
       <Image src={img}/>
      </Box>
    </Box>
  )
}

export default Spotlight