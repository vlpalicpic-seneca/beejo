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
  VStack,
  useToast
} from '@chakra-ui/react';

const RegisterModal = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [error, setError] = useState('');

  const toast = useToast();

  useEffect(() => {
    if (props.isOpen) {
      setEmail('');
      setPassword('');
      setConfirmPassword('');
      setFirstName('');
      setLastName('');
      setError('');
    }
  }, [props.isOpen]);

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleRegister = async () => {
    setError('');

    if (!firstName || !lastName || !email || !password || !confirmPassword) {
      setError('Please fill in all fields');
      return;
    }

    if (!validateEmail(email)) {
      setError('Invalid email address');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      const response = await fetch('https://beejo-backend.onrender.com/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          password,
        }),
      });

      const data = await response.json();

      if (response.ok && data.message === "User created successfully.") {
        console.log('Registration successful:', data);
        toast({
          description: "You have been registered successfully.",
          status: "success",
          duration: 5000,
          isClosable: true,
        });
        props.onClose(); 
      } else if (response.status === 409) {
        setError(data.message || 'User already exists.');
      } else {
        setError(data.message || 'An error occurred');
      }
    } catch (error) {
      console.error('Error during registration:', error);
      setError('An error occurred while registering');
    }
  };

  return (
    <Modal isOpen={props.isOpen} onClose={props.onClose}>
      <ModalOverlay />
      <ModalContent color="#372F2F" backgroundColor="#F3E3A8">
        <ModalHeader>
          <VStack>
            <Image src="/beejoLogo.png" alt="Logo" height={70} ratio={1} />
            <Box>Join the Hive</Box>
          </VStack>
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <FormControl>
            <FormLabel color="#372F2F">First Name</FormLabel>
            <Input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              backgroundColor="#F3F1E8"
              borderColor="#7B7875"
              _hover={{ borderColor: "#DBBF6F" }}
              _focus={{ borderColor: "#DBBF6F" }}
            />
          </FormControl>
          <FormControl mt={4}>
            <FormLabel color="#372F2F">Last Name</FormLabel>
            <Input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              backgroundColor="#F3F1E8"
              borderColor="#7B7875"
              _hover={{ borderColor: "#DBBF6F" }}
              _focus={{ borderColor: "#DBBF6F" }}
            />
          </FormControl>
          <FormControl mt={4}>
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
          <FormControl mt={4}>
            <FormLabel color="#372F2F">Confirm Password</FormLabel>
            <Input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              backgroundColor="#F3F1E8"
              borderColor="#7B7875"
              _hover={{ borderColor: "#DBBF6F" }}
              _focus={{ borderColor: "#DBBF6F" }}
            />
          </FormControl>
          {error && <Box color="red.500" mt={4}>{error}</Box>}
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
            >
              Cancel
            </Button>
            <Button
              onClick={handleRegister}
              backgroundColor="#DBBF6F"
              _hover={{ backgroundColor: "#DBBF6F" }}
              color="#372F2F"
            >
              Register
            </Button>
          </ModalFooter>
        </HStack>
      </ModalContent>
    </Modal>
  );
};

export default RegisterModal;
