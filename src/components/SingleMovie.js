import React, {useEffect, useState} from 'react';
import {Box, Divider, Flex, Heading, HStack, Image, Spacer, Spinner, Text, VStack} from "@chakra-ui/react";
import {useParams} from "react-router-dom";
import {API_KEY} from "../api/config";

export function SingleMovie({director, writer, actors, plot, poster,
                                runtime, genre, year, country, awards, imdbRating, imdbID}) {
    const [movie, setMovie] = useState();
    const params = useParams();
    const movie_id = params.id;
    useEffect(()=>{
        fetch(`https://www.omdbapi.com/?i=${movie_id}&apikey=${API_KEY}`)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setMovie(data); // set the state
            })
    }, [movie_id]);
    if (!movie) {
        return <Spinner/>
    }
    return (
        <VStack>
            <Heading>{movie.Title}</Heading>
            <Text><i>{movie.Year}</i></Text>
            <Text>{movie.Runtime}</Text>
            <Text color={'green'}>{movie.imdbRating}</Text>
        <Flex pl={'150'} pr={'150'}>
            <Box maxW={'250px'}>
                <Image maxW={'250px'} src={movie.Poster} alt={'poster'} pb={'2'}/>
                <Text>Genre: <b>{movie.Genre}</b></Text>
                <Text>Director: <b>{movie.Director}</b></Text>
                <Text>Writer/s: <b>{movie.Writer}</b></Text>
                <Text>Released: <b>{movie.Released}, {movie.Country}</b></Text>
                <Text>Rated: <b>{movie.Rated}</b></Text>
                <Text>Metascore: <b>{movie.Metascore}</b></Text>
            </Box>
            <Divider orientation={'vertical'} p={'5'}/>
                <Box maxW={'300px'}>
                    <Heading p={'3'} size={'md'}>PLOT</Heading>
                    <Text>{movie.Plot}</Text>
                    <Divider p={'3'}/>
                    <Heading p={'3'} size={'md'}>STARRING</Heading>
                    <Text>{movie.Actors}</Text>
                    <Divider p={'3'}/>
                    <Heading p={'3'} size={'md'}>AWARDS</Heading>
                    <Text>{movie.Awards}</Text>
                </Box>
        </Flex>
        </VStack>
    );
}
