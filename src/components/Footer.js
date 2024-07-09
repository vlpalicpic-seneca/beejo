import React from 'react';
import {
  Box
  , Flex
  , Spacer
  , HStack
} from '@chakra-ui/react';
import { SocialIcon } from 'react-social-icons';
import '../style/Footer.css'

//component used as footer for entire website
const Footer = () => (
  <Box backgroundColor="#372F2F">
    <Box className='scallop-footer'
      backgroundColor="#372F2F"
      color="#F3E3A8" p={8}
      marginTop={8}
      maxWidth={1000}
      mx="auto">
      <Flex justify="space-between"
        align="center"
        mx="auto">
        © 2024 Beejo, Inc.
        <Spacer />
        <HStack spacing={4} placeItems="right">
          <SocialIcon href="https://facebook.com"
            target="_blank"
            url="www.facebook.com"
            bgColor='#F3E3A8'
            fgColor='#372F2F'
            style={{ height: 35, width: 35 }} />
          <SocialIcon
            href="https://x.com"
            target="_blank"
            url="www.x.com"
            bgColor='#F3E3A8'
            fgColor='#372F2F'
            style={{ height: 35, width: 35 }} />
          <SocialIcon
            href="https://instagram.com"
            target="_blank"
            url="www.instagram.com"
            bgColor='#F3E3A8'
            fgColor='#372F2F'
            style={{ height: 35, width: 35 }} />
        </HStack>
      </Flex>
    </Box>
  </Box>
);

export default Footer;
