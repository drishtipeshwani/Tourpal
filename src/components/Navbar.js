import React from 'react'
import {
    Box,
    Flex,
    HStack,
    IconButton,
    Button,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuDivider,
    useDisclosure,
    Stack,
    Link,
    Text
} from '@chakra-ui/react'
import { api } from '../api/appwrite'
import { useHistory } from 'react-router-dom'

function Navbar() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const history = useHistory()


    const logoutUser = async () => {
        try {
            await api.userLogout();
            history.push('/')
        } catch (error) {
            console.log(error.message);
        }
    }

    return (
        <Box px={4} bgColor={'#583D72'}>
            <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
                <IconButton
                    size={'md'}
                    aria-label={'Open Menu'}
                    display={{ md: 'none' }}
                    onClick={isOpen ? onClose : onOpen}
                />
                <HStack spacing={8} alignItems={'center'}>
                    <HStack as={'nav'} spacing={4} display={{ base: 'none', md: 'flex' }}>
                        <Button onClick={logoutUser} color='white'>Logout</Button>
                    </HStack>
                </HStack>
            </Flex>

            {isOpen ? (
                <Box pb={4} display={{ md: 'none' }}>
                    <Stack as={'nav'} spacing={4}>
                        <Button onClick={logoutUser} color='white'>Logout</Button>
                    </Stack>
                </Box>
            ) : null}
        </Box>
    )
}

export default Navbar
