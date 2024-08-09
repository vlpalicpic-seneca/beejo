import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';
import { SearchIcon } from '@chakra-ui/icons';
import {
    Box,
    Flex,
    Spacer,
    Image,
    Stack,
    HStack,
    Button,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    IconButton,
    Input,
    InputGroup,
    InputLeftElement,
} from '@chakra-ui/react';
import "../style/Header.css";

const Header = (props) => {
    const [query, setQuery] = useState('');
    const [firstName, setFirstName] = useState(''); 
    const navigate = useNavigate(); 

    useEffect(() => {
        const user = localStorage.getItem('user');
        if (user) {
            const parsedUser = JSON.parse(user);
            setFirstName(parsedUser.firstName || '');
        }
    }, []);

    const handleSearch = () => {
        navigate(`/search?query=${encodeURIComponent(query)}`);
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            handleSearch();
        }
    };

    const handleLogout = () => {
        localStorage.removeItem('user'); 
        props.toggleLoggedIn(); 
        navigate('/');
        window.location.reload();
    };

    const isLoggedIn = !!localStorage.getItem('user'); 

    return (
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
                                <Button as={Link}
                                    to="/series"
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
                                        icon={<FaUser />}
                                        variant="outline"
                                        bg="#DBBF6F" />
                                    <MenuList bg="white" color="black">
                                        {!isLoggedIn ? (
                                            <>
                                                <MenuItem as={Link} onClick={props.onOpenRegister}>Register</MenuItem>
                                                <MenuItem as={Link} onClick={props.onOpenLogin}>Login</MenuItem>
                                            </>
                                        ) : (
                                            <MenuItem as={Link} onClick={handleLogout}>Logout</MenuItem>
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
                    mx="36px"
                    h="100%">
                    <Stack direction="row"
                        spacing={4}
                        marginLeft={5}
                        width="100%">
                        <Box display={{ base: 'none', md: 'block' }} width="100%">
                            <HStack w="100%">
                                <InputGroup>
                                    <InputLeftElement
                                        pointerEvents="none"
                                        children={<SearchIcon color="#372F2F" />} 
                                    />
                                    <Input
                                        placeholder="Search..."
                                        value={query}
                                        onChange={(e) => setQuery(e.target.value)}
                                        size="md"
                                        variant="outline"
                                        borderColor="#372F2F"
                                        color="#372F2F"
                                        _hover={{ borderColor: "#372F2F" }}
                                        onKeyDown={handleKeyDown} 
                                    />
                                </InputGroup>

                                <Menu>
                                    <MenuButton as={IconButton}
                                        icon={<FaUser />}
                                        variant="outline"
                                        bg="white" />
                                    <MenuList bg="white" color="black">
                                        {!isLoggedIn ? (
                                            <>
                                                <MenuItem as={Link} onClick={props.onOpenRegister}>Register</MenuItem>
                                                <MenuItem as={Link} onClick={props.onOpenLogin}>Login</MenuItem>
                                            </>
                                        ) : (
                                            <>
                                                <MenuItem as={Link} to="/user">Hi {firstName}!</MenuItem>
                                                <MenuItem as={Link} onClick={handleLogout}>Logout</MenuItem>
                                            </>
                                        )}
                                    </MenuList>
                                </Menu>
                            </HStack>
                        </Box>
                    </Stack>
                </Flex>
            </HStack>
        </Box>
    );
};

export default Header;
