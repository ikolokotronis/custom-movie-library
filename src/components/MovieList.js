import React from 'react';
import {Box, Flex, HStack, IconButton, SimpleGrid, Spinner, Text} from "@chakra-ui/react";
import { MdFavorite, MdWatchLater } from "react-icons/md";
import {Rating} from "./Rating";
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";

export function MovieList() {
    const movies = useSelector(state => state.movies);
    if(movies.isLoading){
        return <Spinner/>
    }

    return (
        <SimpleGrid columns={3}>
            {
                movies.movieList.map(movie=>{
                    const ratingDataFromChild = (rating) => {
                        localStorage.setItem("user_movie_rating:"+movie.imdbID,rating);
                    }

                    return (
                        <Box key={movie.imdbID} maxW={'235px'} border={'1px'} borderRadius={'5'} p={'4'} borderColor={'gray.300'}>
                            <img src={`${movie.Poster}`} alt={'poster'}/>
                            <Link to={'/movies/'+movie.imdbID+'/'}><Text fontWeight={'bold'}>{movie.Title}</Text></Link>
                            <Text fontSize='sm'>{movie.Plot}</Text>
                            <Flex>
                                <HStack>
                                    <Rating default_rating={localStorage.getItem("user_movie_rating:"+movie.imdbID)} sendRatingToParent={ratingDataFromChild} stars={() => movie.stars}/>
                                </HStack>
                                <IconButton variant={'filled'} color={"gray.400"} aria-label={'favorite'} icon={<MdFavorite/>}/>
                                <IconButton variant={'filled'} color={'gray.400'} aria-label="watch-later" icon={<MdWatchLater/>} />
                            </Flex>
                        </Box>
                    )
                })
            }

        </SimpleGrid>
    );
}
