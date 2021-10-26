import React from 'react'
import {
    Container,
    Heading,
    Stack,
    Text,
    Button,
} from '@chakra-ui/react';
import { api } from '../api/appwrite'
import '../styles/Home.css'
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
        <div className='home-ctn'>
            <ChakraProvider>
                <Container>
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
                            <Text as={'span'} color={'#583D72'}>
                                TourPal
                            </Text>
                        </Heading>
                        <Text color={'white'} maxW={'3xl'} fontWeight='bold' fontSize='xl'>
                            Treasure all your beautiful travel experiences at one place with Tourpal.
                        </Text>
                        <Button
                            px={6}
                            colorScheme={'orange'}
                            bg={'orange.400'}
                            _hover={{ bg: 'white', color: 'black' }}
                            onClick={loginwithGoogle}
                        >
                            Login with Google
                        </Button>
                    </Stack>
                </Container>
            </ChakraProvider>
        </div>
    )
}

export default Home
