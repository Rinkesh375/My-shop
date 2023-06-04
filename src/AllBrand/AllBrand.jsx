import { Center, Image ,Grid,GridItem} from "@chakra-ui/react"
import AllBrandImageData from "./AllBrandImageData"

const AllBrand = () => {
  return (
    <>
      <Center>
        <Image src="https://media6.ppl-media.com/tr:w-1280,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1663748349_har-brand-ka-destination_web.jpg" />
      </Center>
      <Grid gridTemplateColumns="repeat(3,1fr)" w="87%" m="1rem auto" gap="2rem">
            {AllBrandImageData?.map((url,index)=>(<GridItem key={index+1}> <Image w="100%" src={url} /> </GridItem>))}
        </Grid>
    </>
  )
}

export default AllBrand