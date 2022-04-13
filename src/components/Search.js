import React from 'react';
import {
    HStack,
    InputLeftElement,
    InputGroup, Input,
} from "@chakra-ui/react";
import {SearchIcon} from "@chakra-ui/icons";

export function Search() {
    const onSearchSubmit = (e) => {
        e.preventDefault();
        console.log('Searching...');
    };
    return (
        <HStack>
            <form onSubmit={onSearchSubmit}>
                <InputGroup>
                    <InputLeftElement
                        pointerEvents='none'
                        children={<SearchIcon color='gray.300' />}
                    />
                    <Input type='search-movie' placeholder='Search for a movie' />
                </InputGroup>
            </form>
        </HStack>
    );
}
