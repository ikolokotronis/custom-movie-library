import React from 'react';
import {HStack, IconButton, VStack} from "@chakra-ui/react";
import {MdHome, MdFavorite, MdWatchLater} from 'react-icons/md';

export function Layout({children}) {
    return (
        <VStack>
            <HStack>
                <IconButton color={'blue.500'} variant={'filled'} aria-label="menu" icon={<MdHome/>} />
                <IconButton color={'red.500'} variant={'filled'} aria-label="favorite" icon={<MdFavorite/>} />
                <IconButton color={'gray.500'} variant={'filled'} aria-label="watch-later" icon={<MdWatchLater/>} />
            </HStack>
            {children}
        </VStack>
    );
}
