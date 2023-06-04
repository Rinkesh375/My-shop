import { Image, Center, Card, CardBody, Box } from "@chakra-ui/react"
import Slider from "react-slick";
import LookingForProductData from "./LookingForProductData";

const LookingFor = () => {
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
            <Center>
                <Image src="https://media6.ppl-media.com/tr:w-1280,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1678704732_whats-everyone-looking-for-web.jpg" />
            </Center>

            <Box width="85%" margin="0 auto" >
                <Slider {...settings}  >
                    {LookingForProductData.map((ele, index) => {
                        return <Card maxW='sm' key={index} margin="1rem" height="400px" >
                            <CardBody w="100%"><Image w="100%" src={ele.url} alt={`Image-${index + 1}`} borderRadius='lg' /></CardBody></Card>
                    })}
                </Slider>
            </Box>
        </>
    )
}

export default LookingFor