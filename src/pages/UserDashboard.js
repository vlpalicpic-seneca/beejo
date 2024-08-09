import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Text, Button, VStack, Spinner, Input } from '@chakra-ui/react';

const UserDashboard = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      const userId = JSON.parse(localStorage.getItem('user'))?._id;

      if (!userId) {
        navigate('/not-found');
        return;
      }

      try {
        const response = await fetch(`https://beejo-backend.onrender.com/user?id=${userId}`);
        const data = await response.json();

        if (response.ok) {
          if (data.user) {
            setUser(data.user);
          } else {
            setError(data.message);
          }
        } else {
          setError('Failed to fetch user data');
        }
      } catch (error) {
        setError('An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  if (loading) {
    return <Spinner size="xl" />;
  }

  if (error) {
    return <Text color="red.500">{error}</Text>;
  }

  if (!user) {
    return <Text>No user data available</Text>;
  }

  return (
    <Box bg="#F3F1E8" padding={10} marginTop={10} minHeight="75vh">
      <Text fontSize='3xl' color="#372F2F" width="100%" textAlign="left" marginTop='30px' marginBottom='10px'>
        User Dashboard
      </Text>
      <VStack spacing={4} p={5}>
        <Box width="100%" maxWidth="500px">
          <Text fontSize="lg" color="#372F2F">First Name:</Text>
          <Input
            value={user.firstName}
            readOnly
            variant="outline"
            maxWidth="500px"
            borderColor="#372F2F"
            _focus={{ borderColor: "#DBBF6F" }}
            _hover={{ borderColor: "#DBBF6F" }}
          />
        </Box>
        <Box width="100%" maxWidth="500px">
          <Text fontSize="lg" color="#372F2F">Last Name:</Text>
          <Input
            value={user.lastName}
            readOnly
            variant="outline"
            maxWidth="500px"
            borderColor="#372F2F"
            _focus={{ borderColor: "#DBBF6F" }}
            _hover={{ borderColor: "#DBBF6F" }}
          />
        </Box>
        <Box width="100%" maxWidth="500px">
          <Text fontSize="lg" color="#372F2F">Email:</Text>
          <Input
            value={user.email}
            readOnly
            variant="outline"
            maxWidth="500px"
            borderColor="#372F2F"
            _focus={{ borderColor: "#DBBF6F" }}
            _hover={{ borderColor: "#DBBF6F" }}
          />
        </Box>
        <Button
          onClick={() => navigate('/')}
          backgroundColor="#F3E3A8"
          _focus={{ backgroundColor: "#DBBF6F" }}
          _hover={{ backgroundColor: "#DBBF6F" }}>
          Start Watching
        </Button>
      </VStack>
    </Box>
  );
};

export default UserDashboard;
