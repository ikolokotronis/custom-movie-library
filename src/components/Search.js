import React from 'react';
import {
    HStack, Text,
    Input, IconButton,
    InputLeftElement, InputGroup,
} from "@chakra-ui/react";
import {SearchIcon} from "@chakra-ui/icons";

export function Search() {
    return (
        <HStack>
            <InputGroup>
                <InputLeftElement
                    pointerEvents='none'
                    children={<SearchIcon color='gray.300' />}
                />
                <Input type='search-movie' placeholder='Search for a movie' />
            </InputGroup>
        </HStack>
    );
}
