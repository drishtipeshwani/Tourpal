import React, { useEffect, useState } from 'react'
import { ChakraProvider, Heading, VStack, Button, Image, Link } from "@chakra-ui/react"
import Navbar from '../components/Navbar'
import Post from '../components/Post'
import { api } from '../api/appwrite'
import { Appwrite } from "appwrite";
import '../styles/Dashboard.css'


var appwrite = new Appwrite();

appwrite
    .setEndpoint('http://localhost/v1') // Set your endpoint
    .setProject('6167fbb64f1f8') // Your Appwrite Project UID
    ;


function Dashboard() {

    const [postItems, setPostItems] = useState([])

    useEffect(() => {
        const getPostData = async () => {
            try {

                await api.getData().then((res) => {
                    console.log(res)
                    const stateData = []; // make a temporary const to store your state to be set
                    res.forEach((doc) => {
                        stateData.push({
                            "location": doc.location,
                            "date": doc.date,
                            "text": doc.experience
                        });
                    });
                    // finally set your state here
                    setPostItems([...stateData]);
                })
            } catch (error) {
                console.log(error.message);
            }
        }
        getPostData();
        console.log(postItems)
    }, [])

    return (
        <div className='dashboard'>
            <ChakraProvider>
                <Navbar />
                <VStack
                    minH={'100vh'}
                    textAlign={'center'}
                    align={'center'}
                    spacing={{ base: 8, md: 10 }}
                    py={{ base: 20, md: 28 }}
                    bgColor='#FCECDD'
                >

                    <Heading color='#583D72'>My Travel Experiences</Heading>
                    <Button
                        px={6}
                        bg={'#583D72'}
                        color='white'
                        _hover={{ bg: 'transparent', color: 'black', border: '2px solid black' }}
                    >
                        <Link href='/addpost'>Add new experience</Link>
                    </Button>
                    {postItems.map((element) => {
                        return (<Post location={element.location} text={element.text} date={element.date} />)
                    })}
                </VStack>
                <a href="https://appwrite.io/" target="_blank" className='appwrite-link'>
                    <img src="https://appwrite.io/images-ee/press/badge-pink-button.svg" alt="Built with Appwrite" />
                </a>
            </ChakraProvider>
        </div>
    )
}

export default Dashboard
