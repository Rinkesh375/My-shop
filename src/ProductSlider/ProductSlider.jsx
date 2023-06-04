import featureProduct from "./FeatureProduct"
import Slider from "react-slick";
import { Card, CardBody,  VStack, Image,  Text, HStack, Box, } from '@chakra-ui/react'
import "./FeatureProduct.css"


const ProductSlider = () => {
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <>
            {/* <Grid gridTemplateColumns="repeat(4,1fr)" w="86%" margin="auto"> */}
            <Box width="80%" margin="0 auto">
                <Slider {...settings} >
                    {featureProduct.map((ele, index) => (<Card maxW='sm' key={index} margin="1rem" height="550px">

                        <CardBody>
                            <VStack>
                                <Image w="100%" src={ele.url} alt='Green double couch with wooden legs' borderRadius='lg' />
                                <Text fontWeight="bold" size='md'>{ele.name.substring(0,65)}...</Text>
                            </VStack>

                            <HStack mt='6' spacing='3' justify="space-evenly">
                                <Text > Price {`₹ ${ele.discountprice}`} </Text>
                                <Text  fontWeight="bold" textDecoration="line-through"> {`₹ ${ele.actualPrice}`} </Text>
                            </HStack>
                        </CardBody>


                    </Card>))}
                </Slider>
            </Box>


        

        </>
    )
}

export default ProductSlider