import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Badge, Box, Flex, HStack, IconButton, SimpleGrid, Spacer, Text} from "@chakra-ui/react";
import {Link} from "react-router-dom";
import {Rating} from "./Rating";
import {MdFavorite, MdWatchLater} from "react-icons/md";
import {setMovieIsFavourite} from "../redux/actions/setMovieIsFavourite";
import {setMovieRating} from "../redux/actions/setMovieRating";
import {setMovieWatchLater} from "../redux/actions/setMovieWatchLater";
import {countColumns} from "./utils/countColumns";

export function FavouriteMovieList() {
    const movies = useSelector(state => state.movies);
    const [favouriteMovies, setFavouriteMovies] = useState([]);
    const dispatch = useDispatch();
    useEffect(()=>{
        setFavouriteMovies(movies.movieList.filter(movie => movie.isFavourite));
    },[movies]);
    if (!favouriteMovies.length) {
        return <Badge colorScheme={'red'}>No favourite movies</Badge>
    }
    return (
        <SimpleGrid columns={countColumns(favouriteMovies.length)}>
            {
                favouriteMovies.map(movie => {
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
                        <Box key={movie.imdbID} maxW={'235px'} border={'1px'} borderRadius={'5'} p={'4'}
                             borderColor={'gray.300'}>
                            <Flex>
                                <Spacer/>
                            </Flex>
                            <img src={`${movie.Poster}`} alt={'poster'}/>
                            <Link to={'/movies/' + movie.imdbID + '/'}><Text
                                fontWeight={'bold'}>{movie.Title}</Text></Link>
                            <Text fontSize='sm'>{movie.Plot}</Text>
                            <Flex>
                                <HStack>
                                    <Rating default_rating={movie.localUserRating}
                                            sendRatingToParent={ratingDataFromChild} stars={() => movie.stars}/>
                                </HStack>
                                <IconButton onClick={onFavoriteClick} variant={'filled'}
                                            color={movie.isFavourite ?
                                                "red.500" : "gray.400"}
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
