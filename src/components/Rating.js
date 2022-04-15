import React, {useState} from 'react';
import {Flex, IconButton} from "@chakra-ui/react";
import {MdStarRate} from 'react-icons/md';

export function Rating({sendRatingToParent, default_rating}) {
    const [rating, setRating] = useState(default_rating?default_rating:0);
    const stars = [];
    const onClick = (n) => {
        const rating_value = n + 1;
        setRating(rating_value);
        sendRatingToParent(rating_value);

    };
    for (let i = 0; i < 5; i++) {
        if (i < rating){
            stars.push(<IconButton color={'gold'}
                                   variant={'filled'}
                                   size={'1'}
                                   isRound='true'
                                   p={'1'}
                                   icon={<MdStarRate/>} key={i}
                                   onClick={() => onClick(i)}
                                   aria-label={'star'}/>);
        }
        else{
            stars.push(<IconButton color={'gray.200'}
                                   variant={'filled'}
                                   size={'1'}
                                   p={'1'}
                                   icon={<MdStarRate/>} key={i}
                                   onClick={() => onClick(i)}
                                   aria-label={'star'}/>);
        }
    }
    return (
        <Flex>
            {
                stars.map(star=>{
                    return star;
                })
            }
        </Flex>
    );
}

