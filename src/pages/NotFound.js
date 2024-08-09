// src/pages/NotFound.js
import React from 'react';
import { Box, Text, Button } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <Box bg="#F3F1E8" padding={10} marginTop={10} minHeight="75vh">
      <Text fontSize='3xl' color="#372F2F" width="100%" textAlign="left" marginTop='30px' marginBottom='10px'>
        Page Not Found
      </Text>
      <Button 
        onClick={() => navigate('/')}
        backgroundColor="#F3E3A8"
        _focus={{ backgroundColor: "#DBBF6F" }}
        _hover={{ backgroundColor: "#DBBF6F" }}>Back to Home</Button>
    </Box>
  );
};

export default NotFound;
