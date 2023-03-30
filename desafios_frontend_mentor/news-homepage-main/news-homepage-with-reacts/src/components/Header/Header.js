import React from 'react'
import NavBar from './NavBar/NavBar'
import logo from "../../assets/logo.svg"
import { Box, HStack, Image } from '@chakra-ui/react'



export default function Header() {
  return (
    <HStack
      as="header"
      spacing={2}
      justify="space-between"
         >
        <Box>
        <Image 
          mt={5}
          mb={5}
          src={logo} alt='Logo' />
        </Box>
        <Box>
          <NavBar />
        </Box>
    </HStack>
  )
}
