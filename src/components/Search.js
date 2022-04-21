import React, {useState} from 'react';
import {
    HStack,
    InputLeftElement,
    InputGroup, Input, useToast,
} from "@chakra-ui/react";
import {SearchIcon} from "@chakra-ui/icons";
import {useDispatch} from "react-redux";
import {fetchMovie} from "../redux/actions/fetchMovie";

export function Search() {
    const [searchValue, setSearchValue] = useState('');
    const dispatch = useDispatch();
    const toast = useToast();
    const onSearchSubmit = (e) => {
        e.preventDefault();
        if (searchValue.length === 0) {
            toast({
                title: 'Error',
                description: 'Please enter a movie name',
                status: 'error',
                duration: 4000,
                isClosable: true,
            });
        } else {
            dispatch(fetchMovie(searchValue));
            setSearchValue('');
        }
    };
    return (
        <HStack>
            <form onSubmit={onSearchSubmit}>
                <InputGroup>
                    <InputLeftElement
                        pointerEvents='none'
                        children={<SearchIcon color='gray.300' />}
                    />
                            <Input value={searchValue} onChange={(e)=>setSearchValue(e.target.value)} type='search-movie' placeholder='Add a movie to your library' />
                </InputGroup>
            </form>
        </HStack>
    );
}
