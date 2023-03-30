import React from 'react'
import iconMenu from "../../../assets/icon-menu.svg"
import {
    Drawer,
    DrawerBody,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button,
    useDisclosure,
    Stack,
    HStack,
    Image
    
  } from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'

import { Link } from '@chakra-ui/react'


export default function NavBar() {

    const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <nav>
        <HStack
          spacing={20}
          justify="space-evenly"
          display={{ base: 'none', md: 'initial'}}
        >
          <Link>Home</Link>
          <Link>News</Link>
          <Link>Popular</Link>
          <Link>Trending</Link>
          <Link>Categories</Link>
          </HStack>
        <HStack
          justify="end"
          
        >
        <Button 
          bg="white"
          display={{md:"none"}}
          onClick={onOpen}>
           <Image 
            src={iconMenu} 
            alt='hamburguer icon' />
         </Button>
        <Drawer 
            placement='right'
            onClose={onClose}
            isOpen={isOpen}>
            <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerBody>
                      <Stack>
                      <Link>Home</Link>
                      <Link>News</Link>
                      <Link>Popular</Link>
                      <Link>Trending</Link>
                      <Link>Categories</Link>
                      </Stack>
                    </DrawerBody>
                </DrawerContent>
        </Drawer>
        </HStack>
    </nav>
  )
}

