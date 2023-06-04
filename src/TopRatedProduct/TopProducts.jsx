import { Center, Image, Card, CardBody, Box} from "@chakra-ui/react"
import TopProductImageData from "./TopProductImageData";
import Slider from "react-slick";
const TopProducts = () => {
    const settings = {

        infinite: false,
        speed: 500,
        slidesToShow: 5,
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
                <Image src="https://media6.ppl-media.com/mediafiles/ecomm/misc/1668145103_top-rated-products.gif?tr=f-gif" />
            </Center>

            
            <Box width="85%" margin="0 auto" >
                <Slider {...settings}  >
                    {TopProductImageData.map((ele, index) => {
                        return <Card maxW='sm' key={index} margin="1rem" style={{marginRight:"1rem !important"}} >
                            <CardBody w="100%"><Image w="100%" src={ele} alt={`Image-${index + 1}`} borderRadius='lg' /></CardBody></Card>
                    })}
                </Slider>
            </Box>

        </>


    )
}

export default TopProducts