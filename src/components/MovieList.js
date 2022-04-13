import React from 'react';
import {Box, Flex, HStack, IconButton, SimpleGrid, Spacer, Text} from "@chakra-ui/react";
import { MdStarRate, MdFavorite, MdWatchLater } from "react-icons/md";
import {Rating} from "./Rating";

export function MovieList() {
    return (
        <SimpleGrid columns={3}>
            <Box maxW={'235px'} border={'1px'} borderRadius={'5'} p={'4'} borderColor={'gray.300'}>
                <img src={'https://picsum.photos/200/200'} alt={'poster'}/>
                <Text fontWeight={'bold'}>Title</Text>
                <Text fontSize='sm'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ab amet atque autem consectetur ea esse impedit inventore ipsam, itaque laudantium modi neque nulla provident quas quibusdam veniam vitae voluptatum.</Text>
                <Flex>
                    <HStack>
                        <Rating/>
                    </HStack>
                        <IconButton variant={'filled'} color={'red.500'} aria-label={'favorite'} icon={<MdFavorite/>}/>
                        <IconButton color={'gray.500'} variant={'filled'} aria-label="watch-later" icon={<MdWatchLater/>} />
                </Flex>
            </Box>
            <Box maxW={'235px'} border={'1px'} borderRadius={'5'} p={'4'} borderColor={'gray.300'}>
                <img src={'https://picsum.photos/200/200'} alt={'poster'}/>
                <Text fontWeight={'bold'}>Title</Text>
                <Text fontSize='sm'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ab amet atque autem consectetur ea esse impedit inventore ipsam, itaque laudantium modi neque nulla provident quas quibusdam veniam vitae voluptatum.</Text>
                <Flex>
                    <HStack>
                        <Rating/>
                    </HStack>
                    <IconButton variant={'filled'} color={'red.500'} aria-label={'favorite'} icon={<MdFavorite/>}/>
                    <IconButton variant={'filled'} color={'gray.500'} aria-label={"watch-later"} icon={<MdWatchLater/>} />
                </Flex>
            </Box>
            <Box maxW={'235px'} border={'1px'} borderRadius={'5'} p={'4'} borderColor={'gray.300'}>
                <img src={'https://picsum.photos/200/200'} alt={'poster'}/>
                <Text fontWeight={'bold'}>Title</Text>
                <Text fontSize='sm'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ab amet atque autem consectetur ea esse impedit inventore ipsam, itaque laudantium modi neque nulla provident quas quibusdam veniam vitae voluptatum.</Text>
                <Flex>
                    <HStack>
                        <Rating/>
                    </HStack>
                    <IconButton variant={'filled'} color={'red.500'} aria-label={'favorite'} icon={<MdFavorite/>}/>
                    <IconButton color={'gray.500'} variant={'filled'} aria-label="watch-later" icon={<MdWatchLater/>} />
                </Flex>
            </Box>

        </SimpleGrid>
    );
}
