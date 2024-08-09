import React, { useState, useEffect} from 'react';
import { Box, Grid, GridItem, Text, Image } from '@chakra-ui/react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Search = (props) => {
    const [sectionContent, setSectionContent] = useState([]);
    const query = new URLSearchParams(useLocation().search).get('query'); // Get query from URL

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://beejo-backend.onrender.com/titleSearch?query=${encodeURIComponent(query)}`);
                if (!response.ok) {
                    throw new Error(`Failed to fetch content for section ${props.section}`);
                }
                const data = await response.json();
                setSectionContent(data);
            } catch (error) {
                console.error('Error fetching content:', error);
            }
        };

        if (query) {
            fetchData();
        }
    }, [query, props.section]); // Dependency on query to re-fetch when it changes

    const capitalize = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    };

    return (
        <Box bg="#F3F1E8" padding={10} marginTop={10}>
            <Text fontSize='3xl' color="#372F2F" width="100%" textAlign="left" marginTop='30px' marginBottom='10px'>
                Search Results
            </Text>
            <Grid templateColumns={{ base: "1fr", md: "repeat(5, 1fr)" }} gap={5}>
                {sectionContent.map(data => (
                    <GridItem width={{ base: "50%", md: "auto" }} justifySelf="center" key={data.id}>
                        <Link to={`/${data.section}/${data.id}`}>
                            <Box borderWidth="1px" borderRadius="0px" overflow="hidden" h="100%">
                                <Text textAlign="center" noOfLines={1} fontWeight="semibold" fontSize="lg" lineHeight="short" backgroundColor="#372F2F" color="#F3E3A8" padding='5px'>
                                    {data.title}
                                </Text>
                                <Image src={data.poster} alt={data.title} width="100%" height="100%" objectFit="cover" />
                            </Box>
                        </Link>
                    </GridItem>
                ))}
            </Grid>
        </Box>
    );
};

export default Search;
