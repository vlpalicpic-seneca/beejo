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
  Input, Image, Box, Spacer,
  HStack, VStack
} from '@chakra-ui/react';

//component used for Registration modal
const RegisterModal = (props) => (
  <Modal isOpen={props.isOpen}
    onClose={props.onClose}>
    <ModalOverlay />
    <ModalContent color="#372F2F"
      backgroundColor="#F3E3A8">
      <ModalHeader>
        <VStack>
          <Image src="/beejoLogo.png"
            alt="Logo"
            height={70}
            ratio={1} />
          <Box>Join the Hive</Box>
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
        <FormControl mt={4}>
          <FormLabel color="#372F2F">Confirm Password</FormLabel>
          <Input type="password"
            backgroundColor="#F3F1E8"
            borderColor="#7B7875"
            _hover={{ borderColor: "#DBBF6F" }}
            _focus={{ borderColor: "#DBBF6F" }} />
        </FormControl>
      </ModalBody>
      <HStack>
        {/* <Box padding="16px 24px">Already have an account?</Box> */}
        <Spacer />
        <ModalFooter>
          <Button onClick={props.onClose}
            backgroundColor="#DBBF6F"
            marginRight={3}
            _hover={{ backgroundColor: "#DBBF6F" }}
            color="#372F2F">
            Cancel
          </Button>
          <Button onClick={props.onClose}
            backgroundColor="#DBBF6F"
            _hover={{ backgroundColor: "#DBBF6F" }}
            color="#372F2F">
            Register
          </Button>
        </ModalFooter>
      </HStack>
    </ModalContent>
  </Modal>
);

export default RegisterModal;
