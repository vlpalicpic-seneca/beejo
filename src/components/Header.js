import React from 'react';
import { Link } from 'react-router-dom';
import {
    Box
    , Flex
    , Spacer
    , Image
    , Stack
    , HStack
    , Button
    , Menu
    , MenuButton
    , MenuList
    , MenuItem
    , IconButton
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import "../style/Header.css";

//component used as header althroughout the entire website
//receives props to handle the opening and closing of modals, as well as to toggle login/logout 
const Header = (props) => (
    <Box as="header"
        className='scallop'
        height="120px"
        backgroundColor="#F3E3A8"
        color="#DBBF6F"
        p={4}
        position="fixed"
        top={0}
        left={0}
        right={0}
        zIndex="1000">
        <HStack align="center">
            <Flex align="center"
                maxWidth="2000px"
                mx="auto"
                height="100%">
                <Stack direction="row"
                    spacing={4}
                    marginLeft={5}
                    width="100%">
                    <Box display={{ base: 'none', md: 'block' }}
                        width="100%">
                        <HStack w="100%">
                            <Button as={Link}
                                to="/movies"
                                backgroundColor="transparent"
                                fontSize="2xl"
                                color="#372F2F"
                                _hover={{ color: "#DBBF6F" }}
                                _active={{ backgroundColor: "transparent" }}>Movies</Button>
                            <Button as={Link} to="/series"
                                backgroundColor="transparent"
                                fontSize="2xl"
                                color="#372F2F"
                                _hover={{ color: "#DBBF6F" }}
                                _active={{ backgroundColor: "transparent" }}>Series</Button>
                        </HStack>
                    </Box>
                    <Spacer />
                    <Box display={{ base: 'block', md: 'none' }}>
                        <HStack>
                            <Menu>
                                <MenuButton as={IconButton}
                                    icon={<HamburgerIcon />}
                                    variant="outline"
                                    bg="white" />
                                <MenuList bg="white" color="black">
                                    <MenuItem as={Link} to="/movies">Movies</MenuItem>
                                    <MenuItem as={Link} to="/series">Series</MenuItem>
                                    {!props.isLoggedIn ? (
                                        <>
                                            <MenuItem as={Link} onClick={props.onOpenRegister}>Register</MenuItem>
                                            <MenuItem as={Link} onClick={props.onOpenLogin}>Login</MenuItem>
                                        </>
                                    ) : (
                                        <MenuItem as={Link} onClick={props.toggleLoggedIn}>Logout</MenuItem>
                                    )}
                                </MenuList>
                            </Menu>
                        </HStack>
                    </Box>
                </Stack>
            </Flex>

            <Spacer />

            <Link to="/">
                <Image src="/beejoLogo.png" alt="Logo" h={100} ratio={1} />
            </Link>

            <Spacer />

            <Flex align="center"
                maxWidth="2000px"
                mx="auto"
                h="100%">
                <Stack direction="row"
                    spacing={4}
                    marginLeft={5}
                    width="100%">
                    <Box display={{ base: 'none', md: 'block' }} width="100%">
                        <HStack w="100%">
                            {!props.isLoggedIn ? (
                                <Box width={250}
                                    display="flex"
                                    justifyContent="flex-end"
                                    paddingRight={4}>
                                    <Button as={Link}
                                        onClick={props.onOpenRegister}
                                        backgroundColor="transparent"
                                        fontSize="2xl"
                                        color="#372F2F"
                                        _hover={{ color: "#DBBF6F" }}
                                        _active={{ backgroundColor: "transparent" }}>
                                        Register
                                    </Button>
                                    <Button onClick={props.onOpenLogin}
                                        backgroundColor="transparent"
                                        fontSize="2xl" color="#372F2F"
                                        _hover={{ color: "#DBBF6F" }}
                                        _active={{ backgroundColor: "transparent" }}>
                                        Login
                                    </Button>
                                </Box>
                            ) : (
                                <Box width={250}
                                    display="flex"
                                    justifyContent="flex-end"
                                    paddingRight={4}>
                                    <Button onClick={props.toggleLoggedIn}
                                        backgroundColor="transparent"
                                        fontSize="2xl"
                                        color="#372F2F"
                                        _hover={{ color: "#DBBF6F" }}
                                        _active={{ backgroundColor: "transparent" }}>
                                        Logout
                                    </Button>
                                </Box>
                            )
                            }
                        </HStack>
                    </Box>
                </Stack>
            </Flex>
        </HStack>
    </Box>
);

export default Header;