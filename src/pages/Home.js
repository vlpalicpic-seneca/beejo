import React, { useState, useEffect } from 'react';
import {
  Box
  , VStack
  , Stack
  , Container
} from '@chakra-ui/react';
import Hero from '../components/Hero';
import Feature from '../components/Feature';
import Content from '../components/Content'

//page that serves as homepage
//contains several sections e.g. Hero, Featured, Content
const Home = () => {

  const [heroes, setHeroes] = useState([]);

  //fetches Heroes from server
  useEffect(() => {
    fetch(`https://beejo-backend.onrender.com/heroes`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      //store on heroes state
      .then(data => setHeroes(data))
      .catch(error => console.error('Error fetching heroes:', error));
  }, []);

  return (
    <Box bg="#F3F1E8" padding={10}
      marginTop={10}>
      <VStack>
        <Hero cards={heroes} />
        <Box width="100%">
          <Stack direction={{ base: 'column', md: 'row' }} spacing="0" padding="0">
            <Container maxWidth="container.base">
              <Feature section='movies' />
            </Container>
            <Container maxWidth="container.base">
              <Feature section='series' />
            </Container>
          </Stack>
        </Box>
        <Content />
      </VStack>
    </Box>
  )

};

export default Home;
