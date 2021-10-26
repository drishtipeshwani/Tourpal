import React from 'react'
import {
    ChakraProvider,
    Box,
    Text,
    Flex
} from '@chakra-ui/react';




function Post(props) {
    return (
        <ChakraProvider>
            <Flex>
                <Box
                    bgColor='white'
                    borderRadius='5px'
                    display="flex"
                    flex="1"
                    flexDirection="column"
                    justifyContent="center"
                    padding={2}
                    marginLeft={8}
                    marginRight={8}
                    width='750px'
                    marginTop={{ base: '3', sm: '0' }}>
                    <Flex justifyContent='center' flexDirection='column' padding={2}>
                        <Text marginTop="1" color='black' fontSize='lg' fontWeight='bold' fontStyle='italic'>
                            Location :  {props.location}
                        </Text>
                        <Text marginTop="1" color='black' fontSize='lg' fontWeight='bold' >
                            Date :  {props.date}
                        </Text>
                        <Text
                            as="p"
                            marginTop="2"
                            color={'black'}
                            fontSize="lg">
                            {props.text}
                        </Text>
                    </Flex>

                </Box>
            </Flex>
        </ChakraProvider>
    )
}

export default Post
