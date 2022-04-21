import React from 'react';
import {Box, Flex, HStack, IconButton, SimpleGrid, Spacer, Spinner, Text} from "@chakra-ui/react";
import { MdFavorite, MdWatchLater } from "react-icons/md";
import {Rating} from "./Rating";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import { CloseButton } from '@chakra-ui/react'
import {removeMovieFromList} from "../redux/actions/removeMovieFromList";
import {setMovieIsFavourite} from "../redux/actions/setMovieIsFavourite";
import {setMovieRating} from "../redux/actions/setMovieRating";
import {setMovieWatchLater} from "../redux/actions/setMovieWatchLater";
import {countColumns} from "../utils/countColumns";

export function MovieList() {
    const movies = useSelector(state => state.movies);
    const dispatch = useDispatch();
    if(movies.isLoading){
        return <Spinner/>
    }

    function onCloseClick(imdbID) {
        dispatch(removeMovieFromList(imdbID));
    }

    return (
        <SimpleGrid columns={countColumns(movies.movieList.length)}>
            {
                movies.movieList.map(movie=>{
                    const ratingDataFromChild = (rating) => {
                        dispatch(setMovieRating(movie, rating));
                    }

                    const onFavoriteClick = () => {
                        dispatch(setMovieIsFavourite(movie));
                    }

                    const onWatchLaterClick = () => {
                        dispatch(setMovieWatchLater(movie));
                    }

                    return (
                        <Box key={movie.imdbID} maxW={'235px'} border={'1px'} borderRadius={'5'} p={'4'} borderColor={'gray.300'}>
                            <Flex>
                                <Spacer/>
                                <CloseButton onClick={()=>onCloseClick(movie.imdbID)} pb={'3'} align-self={'end'}/>
                            </Flex>
                            <img src={`${movie.Poster}`} alt={'poster'}/>
                            <Link to={'/movies/'+movie.imdbID+'/'}><Text fontWeight={'bold'}>{movie.Title}</Text></Link>
                            <Text fontSize='sm'>{movie.Plot}</Text>
                            <Flex>
                                <HStack>
                                    <Rating default_rating={movie.localUserRating} sendRatingToParent={ratingDataFromChild} stars={() => movie.stars}/>
                                </HStack>
                                <IconButton onClick={onFavoriteClick} variant={'filled'}
                                            color={movie.isFavourite ?
                                                "red.500" : "gray.300"}
                                            aria-label={'favorite'} icon={<MdFavorite/>}/>
                                <IconButton onClick={onWatchLaterClick} variant={'filled'}
                                            color={movie.watchLater ?
                                                "green.500" : "gray.300"}
                                            aria-label="watch-later" icon={<MdWatchLater/>} />
                            </Flex>
                        </Box>
                    )
                })
            }

        </SimpleGrid>
    );
}
