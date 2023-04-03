import React from 'react'
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
    Image,
    Heading
    
  } from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'

import { Link } from '@chakra-ui/react'


export default function Header() {

    const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <HStack  
        position="fixed"
        w="100%"
        justifyContent="space-between"
        p="3em"
    >
        <box>
            <Image src='/img/logo.svg' alt="logo"/>
        </box>
        <box>
            <nav>
                <HStack
                spacing={20}
                justify="space-evenly"
                display={{ base: 'none', md: 'initial'}}
                >
                <Link
                    color="white"
                    p="1em"
                    _hover={{
                        background: "white",
                        color: "black",
                        borderRadius:"90px",
                        fontWeight:"800",
                        fontFamily:"Fraunces"
                      }}

                >About</Link>
                <Link
                    color="white"
                    p="1em"
                    _hover={{
                        background: "white",
                        color: "black",
                        borderRadius:"90px",
                        fontWeight:"800",
                        fontFamily:"Fraunces"
                      }}                    
                >Service</Link>
                <Link
                    color="white"
                    p="1em"
                    _hover={{
                        background: "white",
                        color: "black",
                        borderRadius:"90px",
                        fontWeight:"800",
                        fontFamily:"Fraunces"
                      }}
                >Proyects</Link>
                <Link
                    color="white"
                    p="1em"
                    _hover={{
                        background: "white",
                        color: "black",
                        borderRadius:"90px",
                        fontWeight:"800",
                        fontFamily:"Fraunces"
                      }}
                >Contact</Link>
                </HStack>
                <HStack
                justify="end"  
                >
                <Button       
                display={{md:"none"}}
                onClick={onOpen}
                bg="transparent"
                >
                    <Image src='/img/icon-hamburger.svg' alt="menu icon"/>
                </Button>
                <Drawer 
                    placement='right'
                    onClose={onClose}
                    isOpen={isOpen}>
                    <DrawerOverlay />
                        <DrawerContent>
                            <DrawerCloseButton />
                            <DrawerBody>
                            <Stack >
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
        </box>
    </HStack>

   
  )
}
