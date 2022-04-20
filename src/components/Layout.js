import React from 'react';
import {HStack, IconButton, useColorMode, VStack} from "@chakra-ui/react";
import {MdHome, MdFavorite, MdWatchLater} from 'react-icons/md';
import {Link} from "react-router-dom";
import {FaMoon, FaSun} from "react-icons/fa";

export function Layout({children}) {
    const {colorMode, toggleColorMode} = useColorMode();
    return (
        <VStack>
            <HStack>
                <Link to={'/'}>
                    <IconButton color={'blue.500'} variant={'filled'} aria-label="menu" icon={<MdHome/>}/>
                </Link>
                <Link to={'/movies/favourites/'}>
                    <IconButton color={'red.500'} variant={'filled'} aria-label="favorite" icon={<MdFavorite/>}/>
                </Link>
                <Link to={'/movies/watch-later/'}>
                    <IconButton color={'green.500'} variant={'filled'} aria-label="watch-later" icon={<MdWatchLater/>}/>
                </Link>
                <IconButton
                    icon={colorMode === 'light' ? <FaSun /> : <FaMoon />}
                    color={colorMode === 'light' ? 'yellow.300' : 'white'}
                    isRound='true'
                    variant={'filled'}
                    size='lg'
                    alignSelf='flex-end'
                    onClick={toggleColorMode}
                    aria-label={'darkmode-button'}/>
            </HStack>
            {children}
        </VStack>
    );
}
