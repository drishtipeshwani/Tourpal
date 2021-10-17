import React from 'react'
import {
    Flex,
    Container,
    Heading,
    Stack,
    Text,
    Button,
    Image
} from '@chakra-ui/react';
import { api } from '../api/appwrite'
import Illustration from '../assests/Illustration.png'
import { ChakraProvider } from "@chakra-ui/react"

function Home() {

    const loginwithGoogle = async () => {
        try {
            await api.loginWithGoogle();
        } catch (error) {
            console.log(error.message);
        }
    }

    return (
        <div className='home'>
            <ChakraProvider>
                <Container maxW={'5xl'}>
                    <Stack
                        textAlign={'center'}
                        align={'center'}
                        spacing={{ base: 8, md: 10 }}
                        py={{ base: 20, md: 28 }}>
                        <Heading
                            fontWeight={600}
                            fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
                            lineHeight={'110%'}>
                            Welcome to{' '}
                            <Text as={'span'} color={'orange.400'}>
                                TourPals
                            </Text>
                        </Heading>
                        <Text color={'gray.500'} maxW={'3xl'}>
                            Bringing the travel community closer.
                        </Text>
                        <Button
                            rounded={'full'}
                            px={6}
                            colorScheme={'orange'}
                            bg={'orange.400'}
                            _hover={{ bg: 'orange.500' }}
                            onClick={loginwithGoogle}
                        >
                            Login with Google
                        </Button>
                        <Flex w={'full'}>
                            <Image src={Illustration} alt='illustration' />
                        </Flex>
                    </Stack>
                </Container>
            </ChakraProvider>
        </div>
    )
}

export default Home
