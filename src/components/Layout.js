import React from 'react';
import {HStack, IconButton, VStack} from "@chakra-ui/react";
import {MdHome, MdFavorite, MdWatchLater} from 'react-icons/md';

export function Layout({children}) {
    return (
        <VStack>
            <HStack>
                <IconButton aria-label="menu" icon={<MdHome/>} />
                <IconButton aria-label="favorite" icon={<MdFavorite/>} />
                <IconButton aria-label="watch-later" icon={<MdWatchLater/>} />
            </HStack>
            {children}
        </VStack>
    );
}
