import React from 'react';
import {
    Box
    , Heading
    , Text
    , useBreakpointValue
    , Image
    , Flex
    , Button
} from '@chakra-ui/react';
import Slider from 'react-slick';

//carousel/slider settings for future multi-banner implementation
const settings = {
    dots: false,
    arrows: false,
    fade: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }
    ]
};

//component for detail page
//used for both movies and series
const Detail = (props) => {

    const [slider, setSlider] = React.useState(null);

    const top = useBreakpointValue({ base: '40%', md: '55%' });
    const side = useBreakpointValue({ base: '5%', md: '40px' });

    return (
        <Box width="98%"
            margin="auto"
            marginTop={30}>
            <Box position={'relative'}
                height={{ base: '300px', md: '550px' }}
                width={'98%'}
                overflow={'hidden'}
                marginTop={30}>
                <link
                    rel="stylesheet"
                    type="text/css"
                    href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
                />
                <link
                    rel="stylesheet"
                    type="text/css"
                    href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
                />
                <Slider {...settings} ref={(slider) => setSlider(slider)}>
                    {props.film ? (
                        <Box
                            height={{ base: '300px', md: '550px' }}
                            position="relative"
                            backgroundPosition="center"
                            backgroundRepeat="no-repeat"
                            backgroundSize="cover"
                            backgroundImage={`url(${props.film.banner})`}>
                            <Box backdropFilter='auto'
                                backdropBlur='5px'
                                backdropContrast='85%'
                                backgroundSize="contain"
                                backgroundImage={`url(${props.film.banner})`}
                                height={{ base: '300px', md: '550px' }}
                                backgroundPosition="center"
                                backgroundRepeat="no-repeat">
                            </Box>
                        </Box>
                    ) : (
                        <Text>Loading...</Text>
                    )}
                </Slider>
            </Box>
            {props.film ? (
                <Flex marginTop={4}
                    alignItems="center"
                    width="98%">
                    <Box flex="1"
                        maxWidth={350}>
                        <Image src={props.film.poster}
                            alt={props.film.title}
                            width="100%"
                            height="100%"
                            objectFit="cover" />
                        <Box display="flex"
                            justifyContent="center"
                            marginTop={10}>
                            <Button
                                backgroundColor="#F3E3A8"
                                size="sm"
                                mx={2}
                                padding="20px"
                                _hover={{ backgroundColor: "#DBBF6F" }}
                            >
                                Rent Price: ${props.film.rentPrice}
                            </Button>
                            <Button
                                backgroundColor="#F3E3A8"
                                size="sm"
                                mx={2}
                                padding="20px"
                                _hover={{ backgroundColor: "#DBBF6F" }}
                            >
                                Buy Price: ${props.film.buyPrice}
                            </Button>
                        </Box>
                    </Box>
                    <Box flex="2"
                        marginLeft={4}>
                        <Heading fontSize="2xl">{props.film.title}</Heading>
                        <Text>{props.film.synopsis}</Text>
                    </Box>
                </Flex>
            ) : (
                <Text>Loading...</Text>
            )}
        </Box>
    );
};

export default Detail;
