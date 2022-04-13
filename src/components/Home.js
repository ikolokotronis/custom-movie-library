import React from 'react';
import {VStack} from "@chakra-ui/react";
import {Search} from "./Search";
import {MovieList} from "./MovieList";

export function Home() {
    return (
        <VStack>
            <Search/>
            <MovieList/>
        </VStack>
    );
}
