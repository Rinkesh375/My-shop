import { GridItem, Grid, Text, Image, chakra, Center,Box } from "@chakra-ui/react"


const HelpAssistant = () => {
  return (

    <Box  borderTop="1px solid #dee5e9" >

      <Grid gridTemplateColumns="repeat(3,1fr)"  gap="2rem" margin="auto" w="80%"  > 
      {/* 1 */}

      <GridItem   p="0.5rem" textAlign="center">
        <Center><Image src="https://media6.ppl-media.com/mediafiles/ecomm/home/1499247950_secure-payment.jpg" alt="100% Secure Payment" /></Center>
        <chakra.span fontWeight="bold">100% Secure Payment</chakra.span>
        <Text marginTop="1rem" fontWeight="100">All major credit & debit cards accepted.</Text>

      </GridItem>

      {/* 2 */}
      <GridItem  borderLeft="1px solid #dee5e9" borderRight="1px solid #dee5e9"  p="1rem" textAlign="center">
        <Center><Image src="https://media6.ppl-media.com/mediafiles/ecomm/home/1499247975_beauty-assistant.jpg" alt="Beauty Assistant" /></Center>
        <chakra.span fontWeight="bold">Beauty Assistant</chakra.span>
        <Text marginTop="1rem" fontWeight="100">Tell me what you are looking for and i will work my magic to help you find your perfect match.</Text>

      </GridItem>

      {/* 3 */}

      <GridItem   p="0.5rem" textAlign="center">
        <Center><Image src="https://media6.ppl-media.com/mediafiles/ecomm/home/1499247997_help-center.jpg" alt="Help Center" /></Center>
        <chakra.span fontWeight="bold">Help Center</chakra.span>
        <Text marginTop="1rem" fontWeight="100">"Got a question? Look no further. Browse FAQs or submit your query.</Text>

      </GridItem>

      </Grid>
    </Box>

  )
}

export default HelpAssistant