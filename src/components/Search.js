import React, {useState} from 'react';
import {
    HStack,
    InputLeftElement,
    InputGroup, Input,
} from "@chakra-ui/react";
import {SearchIcon} from "@chakra-ui/icons";
import {useDispatch, useSelector} from "react-redux";
import {fetchMovie} from "../redux/actions/fetchMovie";

export function Search() {
    const [searchValue, setSearchValue] = useState('');
    const dispatch = useDispatch();
    const onSearchSubmit = (e) => {
        e.preventDefault();
        dispatch(fetchMovie(searchValue));
    };
    return (
        <HStack>
            <form onSubmit={onSearchSubmit}>
                <InputGroup>
                    <InputLeftElement
                        pointerEvents='none'
                        children={<SearchIcon color='gray.300' />}
                    />
                    <Input value={searchValue} onChange={(e)=>setSearchValue(e.target.value)} type='search-movie' placeholder='Search for a movie' />
                </InputGroup>
            </form>
        </HStack>
    );
}
