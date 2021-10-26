import React, { useState } from 'react'
import {
    ChakraProvider,
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Stack,
    Button,
    Heading,
    Textarea
} from '@chakra-ui/react';
import '../styles/PostForm.css'
import { api } from '../api/appwrite'
import { useHistory } from 'react-router-dom'

function PostForm() {

    const [date, setdate] = useState('2021/10/20')
    const [location, setlocation] = useState('')
    const [content, setcontent] = useState('')


    const history = useHistory()
    let user = ''

    const handleSubmit = async () => {

        try {
            user = await api.getCurrentUser()
            await api.postData(date, location, content, user);
            alert("Added successfully")
            history.push('/dashboard')

        } catch (error) {
            console.log(error.message);
        }
    }

    return (
        <ChakraProvider>
            <Flex
                minH={'100vh'}
                align={'center'}
                justify={'center'}
                bg='#FCECDD'>
                <Stack spacing={8} mx={'auto'} py={12} px={6} width='75%'>
                    <Stack align={'center'}>
                        <Heading fontSize={'4xl'} color='#583D72'>Add Your <span className='span-ctn'>Travel Experience</span></Heading>
                    </Stack>
                    <Box
                        rounded={'lg'}
                        boxShadow={'lg'}
                        p={8} bgColor='white'>
                        <Stack spacing={4}>
                            <FormControl id="date">
                                <FormLabel color='black' fontSize='xl'>Trip date</FormLabel>
                                <Input required type="date" _placeholder={{ color: 'gray.500' }} variant='outline'
                                    borderColor='gray.500' color='black' value={date} onChange={(e) => setdate(e.target.value)} />
                            </FormControl>
                            <FormControl id="location">
                                <FormLabel color='black' fontSize='xl'>Location</FormLabel>
                                <Input required type="text" placeholder="Enter your location" _placeholder={{ color: 'gray.500' }} variant='outline'
                                    borderColor='gray.500' color='black' marginTop={2} value={location} onChange={(e) => setlocation(e.target.value)} />
                            </FormControl>
                            <FormControl id="experience">
                                <FormLabel color='black' fontSize='xl'>Experience</FormLabel>
                                <Textarea required type="text" placeholder="Describe" _placeholder={{ color: 'gray.500' }} variant='outline'
                                    borderColor='gray.500' color='black' value={content} onChange={(e) => setcontent(e.target.value)} />
                            </FormControl>
                            <Flex justifyContent='center'>
                                <Button
                                    px={6}
                                    bg={'#583D72'}
                                    _hover={{ bg: 'transparent', color: '#FF5200', border: '2px solid #FF5200' }}
                                    onClick={handleSubmit}
                                >
                                    Add
                                </Button>
                            </Flex>
                        </Stack>
                    </Box>
                </Stack>
            </Flex>
        </ChakraProvider>
    )
}

export default PostForm
