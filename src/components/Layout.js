import React from 'react';
import {HStack, IconButton, VStack} from "@chakra-ui/react";
import {MdHome, MdFavorite, MdWatchLater} from 'react-icons/md';
import {Link} from "react-router-dom";

export function Layout({children}) {
    return (
        <VStack>
            <HStack>
                <Link to={'/'}>
                    <IconButton color={'blue.500'} variant={'filled'} aria-label="menu" icon={<MdHome/>}/>
                </Link>
                <Link to={'/favourites/'}>
                    <IconButton color={'red.500'} variant={'filled'} aria-label="favorite" icon={<MdFavorite/>}/>
                </Link>
                <Link to={'/watch-later/'}>
                    <IconButton color={'gray.500'} variant={'filled'} aria-label="watch-later" icon={<MdWatchLater/>}/><
                    /Link>
            </HStack>
            {children}
        </VStack>
    );
}
