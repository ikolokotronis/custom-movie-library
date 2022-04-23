import React, {useEffect, useState} from 'react';
import {
    Badge,
    Box,
    Divider,
    Flex,
    Heading, HStack,
    IconButton,
    Image,
    Spacer,
    Spinner,
    Text,
    VStack
} from "@chakra-ui/react";
import {Link, useParams} from "react-router-dom";
import {API_KEY} from "../api/config";
import {Rating} from "./Rating";
import {MdFavorite, MdWatchLater} from "react-icons/md";
import {setMovieRating} from "../redux/actions/setMovieRating";
import {setMovieIsFavourite} from "../redux/actions/setMovieIsFavourite";
import {setMovieWatchLater} from "../redux/actions/setMovieWatchLater";
import {useDispatch, useSelector} from "react-redux";

export function SingleMovie() {
    const [movie, setMovie] = useState();
    const [error, setError] = useState();
    const [similarMovies, setSimilarMovies] = useState([]);
    const params = useParams();
    const dispatch = useDispatch();
    const movies = useSelector(state => state.movies);
    const movie_id = params.id;
    useEffect(()=>{
        setSimilarMovies([]);
        fetch(`https://www.omdbapi.com/?i=${movie_id}&apikey=${API_KEY}`)
            .then(response => response.json())
            .then(data => {
                if (data.Response === 'False') {
                    setError(data.Error);
                }
                else {
                    movies.movieList.forEach(movie=>{
                        if(movie.imdbID === data.imdbID){
                            setMovie(movie);
                        }
                        else{
                            if (movie.Director === data.Director) {
                                setSimilarMovies(movies => [...movies, {
                                    similarity: 'Director',
                                    movie
                                }]);
                            }
                            else if (movie.Writer === data.Writer) {
                                setSimilarMovies(movies => [...movies, {
                                    similarity: 'Writer',
                                    movie
                                }]);
                            }
                            else if (movie.Actors === data.Actors) {
                                setSimilarMovies(movies => [...movies, {
                                    similarity: 'Actors',
                                    movie
                                }]);
                            }
                            else if (movie.Genre === data.Genre) {
                                setSimilarMovies(movies => [...movies, {
                                    similarity: 'Genre',
                                    movie
                                }]);
                            }
                        }
                    })
                }
            })
            .catch(error => setError(error));
    }, [movie_id, movies.movieList]);
    console.log(similarMovies);

    const ratingDataFromChild = (rating) => {
        dispatch(setMovieRating(movie, rating));
    }

    const onFavoriteClick = () => {
        dispatch(setMovieIsFavourite(movie));
    }

    const onWatchLaterClick = () => {
        dispatch(setMovieWatchLater(movie));
    }

    if (error) {
        return <Badge colorScheme={'red'}>No movie matches this imdbID</Badge>
    }

    if (!movie) {
        return <Spinner/>
    }

    return (
        <VStack>
            <Heading>{movie.Title}</Heading>
            <Text pt={'1'}><i>{movie.Year}</i></Text>
            <Text>{movie.Runtime}</Text>
            <Text color={()=>{
                if (movie.imdbRating > 8) {
                    return 'green.500'
                } else if (movie.imdbRating > 5) {
                    return 'yellow.500'
                } else {
                    return 'red.500'
                }
            }
            }>{movie.imdbRating}</Text>
        <Flex pl={'150'} pr={'150'}>
            <Box maxW={'250px'}>
                <Image maxW={'250px'} src={movie.Poster} alt={'poster'} pb={'2'}/>
                <Flex pb={'1'} >
                    <Rating default_rating={movie.localUserRating} sendRatingToParent={ratingDataFromChild} stars={() => movie.stars}/>
                    <Spacer/>
                    <IconButton onClick={onFavoriteClick} variant={'filled'}
                                color={movie.isFavourite ?
                                    "red.500" : "gray.300"}
                                aria-label={'favorite'} icon={<MdFavorite/>}/>
                    <IconButton onClick={onWatchLaterClick}  variant={'filled'}
                                color={movie.watchLater ?
                                    "green.500" : "gray.300"}
                                aria-label="watch-later" icon={<MdWatchLater/>} />
                </Flex>
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
            {
                similarMovies.length > 0?
                    <VStack>
                        <Text as={'i'} color={'gray.500'}>See similar movies</Text>
                        <HStack>
                            {
                                similarMovies.map(movie => {
                                    return (
                                        <Box>
                                            <Link to={`/movies/${movie.movie.imdbID}/`}>
                                                <Image src={movie.movie.Poster} alt={'poster'}/>
                                            </Link>
                                        </Box>
                                    )
                                })
                            }
                        </HStack>
                    </VStack>
                    :null
            }
        </VStack>
    );
}
