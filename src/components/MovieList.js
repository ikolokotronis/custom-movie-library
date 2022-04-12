import React from 'react';
import {Box, HStack} from "@chakra-ui/react";

export function MovieList() {
    return (
        <HStack>
            <Box border={'1px'} borderRadius={'5'} p={'5'} borderColor={'gray.300'}>
                <img src={'https://picsum.photos/150/150'} alt={'poster'}/>

            </Box>
        </HStack>
    );
}
