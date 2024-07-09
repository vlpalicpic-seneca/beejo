import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box
    , useBreakpointValue } from '@chakra-ui/react';
import Detail from '../components/Detail';

//page used to display a specific movie/series details
//used for both movies/series
const DetailPage = (props) => {
    const { id } = useParams();
    const [film, setFilm] = useState(null);

    //fetch detail of specific film
    useEffect(() => {
        fetch(`http://localhost:3001/${props.section}/?id=${id}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                if (Array.isArray(data) && data.length > 0) {
                    //store details on state
                    setFilm(data[0]);
                } else {
                    throw new Error('Film not found');
                }
            })
            .catch(error => console.error('Error fetching:', error));
    }, [id, props.section]);

    return (
        <Box bg="#F3F1E8" p={10} mt={10}>
            <Detail film={film} />
        </Box>
    );
};

export default DetailPage;
