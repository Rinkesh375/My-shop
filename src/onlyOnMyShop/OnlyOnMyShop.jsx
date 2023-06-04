
import { Grid, GridItem, Image } from "@chakra-ui/react"
import myProuductImages from "./imageData"
const OnlyOnMyShop = () => {
  return (
        <Grid gridTemplateColumns="repeat(2,1fr)" w="87%" m="1rem auto" gap="2rem">
            {myProuductImages?.map((url,index)=>(<GridItem key={index+1}> <Image w="100%" src={url} /> </GridItem>))}
        </Grid>
  )
}

export default OnlyOnMyShop