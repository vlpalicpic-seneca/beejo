import React from 'react';
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


//component used for Login modal
//receives props for opening/closing modal, as well as logging in (updating status/header)
const Login = (props) => {

  //placeholder function to handle login button, toggles login/logout to update header, and closes modal
  const handleLogin = () => {
    props.toggleLoggedIn();
    props.onClose();
  }

  return (
    <Modal isOpen={props.isOpen}
      onClose={props.onClose}>
      <ModalOverlay />
      <ModalContent color="#372F2F"
        backgroundColor="#F3E3A8">
        <ModalHeader>
          <VStack>
            <Image src="/beejoLogo.png"
              alt="Logo" height={70} ratio={1} />
            <Box>Login to Enter the Hive</Box>
          </VStack>
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <FormControl>
            <FormLabel color="#372F2F">Email</FormLabel>
            <Input type="email"
              backgroundColor="#F3F1E8"
              borderColor="#7B7875"
              _hover={{ borderColor: "#DBBF6F" }}
              _focus={{ borderColor: "#DBBF6F" }} />
          </FormControl>
          <FormControl mt={4}>
            <FormLabel color="#372F2F">Password</FormLabel>
            <Input type="password"
              backgroundColor="#F3F1E8"
              borderColor="#7B7875"
              _hover={{ borderColor: "#DBBF6F" }}
              _focus={{ borderColor: "#DBBF6F" }} />
          </FormControl>
        </ModalBody>
        <HStack>
          {/* <Box padding="16px 24px">Don't have an account?</Box> */}
          <Spacer />
          <ModalFooter>
            <Button onClick={props.onClose}
              backgroundColor="#DBBF6F"
              marginRight={3}
              _hover={{ backgroundColor: "#DBBF6F" }}
              color="#372F2F">
              Cancel
            </Button>
            <Button onClick={handleLogin}
              backgroundColor="#DBBF6F"
              _hover={{ backgroundColor: "#DBBF6F" }}
              color="#372F2F">
              Login
            </Button>
          </ModalFooter>
        </HStack>
      </ModalContent>
    </Modal>
  )
};

export default Login;
