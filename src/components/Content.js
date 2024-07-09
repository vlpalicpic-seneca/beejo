import React from 'react';
import {
  Box
  , Grid
  , Text
  , Image
} from '@chakra-ui/react';
import content1 from '../images/content1.png';
import content2 from '../images/content2.png';

//For What's the buzz? section in Home Page
const Content = () => {

  return (
    <Box paddingLeft={4}
      paddingRight={4}>
      <Text fontSize='3xl'
        color="#372F2F"
        width="100%"
        textAlign="left"
        marginTop='30px'
        marginBottom='10px'>
        What's the buzz?
      </Text>
      <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
        gap={3}>
        <Image src={content1}
          width="100%"
          height="100%"
          objectFit="cover" />
        <Image src={content2}
          width="100%"
          height="100%"
          objectFit="cover" />
      </Grid>
    </Box>
  );
};

export default Content;
