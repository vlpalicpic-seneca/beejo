import React, { useState, useEffect } from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  FormControl,
  FormLabel,
  Input,
  Image,
  Box,
  Spacer,
  HStack,
  VStack
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

const Login = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem('user');
    if (user) {
      setIsLoggedIn(true);
    }
  }, [props.isOpen]);

  const handleLogin = async () => {
    setError('');

    // Validate form fields
    if (!email || !password) {
      setError('Please fill in all fields');
      return;
    }

    try {
      const response = await fetch('https://beejo-backend.onrender.com/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      if (response.ok) { //success
        const data = await response.json();

        localStorage.setItem('user', JSON.stringify(data));

        console.log('Login successful:', data);
        props.toggleLoggedIn(); 
        props.onClose(); 
        navigate('/user');
        window.location.reload();
      } else if (response.status === 401) {
        setError('Invalid email or password');
      } else {
        setError('An error occurred');
      }
    } catch (error) {
      console.error('Error during login:', error);
      setError('An error occurred while logging in');
    }
  };

  return (
    <Modal isOpen={props.isOpen} onClose={props.onClose}>
      <ModalOverlay />
      <ModalContent color="#372F2F" backgroundColor="#F3E3A8">
        <ModalHeader>
          <VStack>
            <Image src="/beejoLogo.png" alt="Logo" height={70} ratio={1} />
            <Box>{isLoggedIn ? 'You are already logged in' : 'Login to Enter the Hive'}</Box>
          </VStack>
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          {!isLoggedIn && (
            <>
              <FormControl>
                <FormLabel color="#372F2F">Email</FormLabel>
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  backgroundColor="#F3F1E8"
                  borderColor="#7B7875"
                  _hover={{ borderColor: "#DBBF6F" }}
                  _focus={{ borderColor: "#DBBF6F" }}
                />
              </FormControl>
              <FormControl mt={4}>
                <FormLabel color="#372F2F">Password</FormLabel>
                <Input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  backgroundColor="#F3F1E8"
                  borderColor="#7B7875"
                  _hover={{ borderColor: "#DBBF6F" }}
                  _focus={{ borderColor: "#DBBF6F" }}
                />
              </FormControl>
              {error && <Box color="red.500" mt={4}>{error}</Box>}
            </>
          )}
        </ModalBody>
        <HStack>
          <Spacer />
          <ModalFooter>
            <Button
              onClick={props.onClose}
              backgroundColor="#DBBF6F"
              marginRight={3}
              _hover={{ backgroundColor: "#DBBF6F" }}
              color="#372F2F"
              isDisabled={isLoggedIn} 
            >
              Cancel
            </Button>
            {!isLoggedIn && (
              <Button
                onClick={handleLogin}
                backgroundColor="#DBBF6F"
                _hover={{ backgroundColor: "#DBBF6F" }}
                color="#372F2F"
              >
                Login
              </Button>
            )}
          </ModalFooter>
        </HStack>
      </ModalContent>
    </Modal>
  );
};

export default Login;
