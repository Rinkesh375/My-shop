import Slider from "react-slick";
import { Card, CardBody,  Image, Box, } from '@chakra-ui/react'
import CategoryProductData from "./CategoryProductData";
import "./CategoryProduct.css"

const CategoryProduct = () => {
    const settings = {
       
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
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
            <Box width="85%" margin="0 auto" >
                <Slider {...settings}  >
                    {CategoryProductData.map((ele, index) =>{
                        return <Card maxW='sm' key={index} margin="1rem" height="400px" >
                        <CardBody w="100%"><Image w="100%" src={ele.url} alt={`Image-${index+1}`} borderRadius='lg' /></CardBody></Card>
                    } )}
                </Slider>
            </Box>
        </>
    )
}

export default CategoryProduct