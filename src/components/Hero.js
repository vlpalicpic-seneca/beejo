import React from 'react';
import { Link } from 'react-router-dom';
import {
    Box,
    Stack,
    Heading,
    Text,
    Container,
    IconButton,
    useBreakpointValue
} from '@chakra-ui/react';
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
import Slider from 'react-slick';

//settings for carousel/slider
const settings = {
    dots: true,
    arrows: false,
    fade: true,
    infinite: true,
    autoplay: true,
    speed: 1500,
    autoplaySpeed: 4000,
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

//component used in Hero section of homepage
//uses slider from react-slick library
const Hero = (props) => {
    const [slider, setSlider] = React.useState(null);

    //settings for arrow buttons, depending on resolution
    const top = useBreakpointValue({ base: '40%', md: '55%' });
    const side = useBreakpointValue({ base: '5%', md: '40px' });

    return (
        <Box position={'relative'}
            height={{ base: '300px', md: '550px' }}
            width={'98%'}
            overflow={'hidden'}>
            <Text fontSize='3xl'
                color="#372F2F" w="100%"
                textAlign="left"
                marginTop='30px'
                marginBottom='10px'>
                Buzzworthy
            </Text>
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
            <IconButton
                aria-label="left-arrow"
                variant="ghost"
                position="absolute"
                left={side}
                top={top}
                transform={'translate(0%, -50%)'}
                zIndex={2}
                onClick={() => slider?.slickPrev()}>
                <BiLeftArrowAlt size="40px" />
            </IconButton>
            <IconButton
                aria-label="right-arrow"
                variant="ghost"
                position="absolute"
                right={side}
                top={top}
                transform={'translate(0%, -50%)'}
                zIndex={2}
                onClick={() => slider?.slickNext()}>
                <BiRightArrowAlt size="40px" />
            </IconButton>
            <Slider {...settings} ref={(slider) => setSlider(slider)}>
                {props.cards.map((card, index) => (
                    <Box height={{ base: '300px', md: '550px' }}
                        position="relative"
                        backgroundPosition="center"
                        backgroundRepeat="no-repeat"
                        backgroundSize="cover"
                        backgroundImage={`url(${card.banner})`}>
                        <Box backdropFilter='auto'
                            backdropBlur='5px'
                            backgroundColor="rgba(55,47,47,0.7)">
                            <Link to={`/${card.section}/${card._id}`}>
                                <Container size="container.lg"
                                    height="550px"
                                    position="relative">
                                    <Stack
                                        spacing={6}
                                        width={'full'}
                                        maxWidth={'lg'}
                                        position="absolute"
                                        top="40%"
                                        transform="translate(0, -50%)">
                                        <Heading fontSize={{ base: '2xl', md: '4xl', lg: '5xl' }}
                                            color="#F3E3A8">
                                            {card.title}
                                        </Heading>
                                        <Text fontSize={{ base: 'sm', md: 'md', lg: 'lg' }}
                                            color="#F3E3A8">
                                            {card.synopsis}
                                        </Text>
                                    </Stack>
                                </Container>
                            </Link>
                        </Box>
                    </Box>
                ))}
            </Slider>
        </Box>
    );
}

export default Hero;
