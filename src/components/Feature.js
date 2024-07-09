import React, { useState, useEffect } from 'react';
import { Box, Heading, Grid, GridItem, Text, Image } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Feature = (props) => {
    const [sectionContent, setSectionContent] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // fetch the list of all items
                const listResponse = await fetch(`https://beejo-server.vercel.app/${props.section}`);
                if (!listResponse.ok) {
                    throw new Error(`Failed to fetch list for ${props.section}`);
                }
                const itemList = await listResponse.json();

                // get the id of the first 5 items
                const ids = itemList.slice(0, 5).map(item => item.id);

                // fetch the details of each of the 5 items
                const promises = ids.map(id =>
                    fetch(`https://beejo-server.vercel.app/${props.section}?id=${id}`)
                        .then(response => {
                            if (!response.ok) {
                                throw new Error(`Request for ${props.section} ${id} failed`);
                            }
                            return response.json();
                        })
                );

                const content = await Promise.all(promises);

                //extract the returned data
                const data = content.map(data => data[0]);

                //update state for the section content
                setSectionContent(data);
            } catch (error) {
                console.error('Error fetching content:', error);
            }
        };
        fetchData();
    }, [props.section]);

    const capitalize = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    //component used in Feature section of the homepage
    //this is being used by both movies and series
    return (
        <Box>
            <Text width="100%"
                marginTop='30px'
                marginBottom='10px'
                fontSize='3xl'
                color="#372F2F"
                textAlign="left">
                Featured {capitalize(props.section)}
            </Text>
            <Grid templateColumns={{ base: "1fr", md: "repeat(5, 1fr)" }}
                gap={3}>
                {sectionContent.map(data => (
                    <GridItem
                        width={{ base: "50%", md: "auto" }}
                        justifySelf="center">
                        <Link to={`/${props.section}/${data.id}`}>
                            <Box borderWidth="1px"
                                borderRadius="0px"
                                overflow="hidden"
                                height="100%">
                                <Image src={data.poster}
                                    alt={data.title}
                                    width="100%"
                                    height="100%"
                                    objectFit="cover" />
                            </Box>
                        </Link>
                    </GridItem>
                ))}
            </Grid>
            <Link to={"/" + props.section} >
                <Text fontSize='md'
                    color="#372F2F"
                    width="100%"
                    textAlign="right"
                    marginTop='5px'
                    marginBottom='10px'
                    _hover={{ color: "#DBBF6F" }}>see more
                </Text>
            </Link>
        </Box>
    );
};

export default Feature;
