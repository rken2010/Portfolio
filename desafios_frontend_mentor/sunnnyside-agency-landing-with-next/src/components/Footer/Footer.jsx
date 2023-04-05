import React from 'react';
import { Link, Box, Stack, Image } from '@chakra-ui/react'
import NextLink from 'next/link'


export default function Portfolio( ) {
  
    return (
        <Stack 
            as="footer"
            bg="primary.500"
            justifyContent="center"
            alignItems="center"
            spacing={5}
            p={5}
        >
            <Box
                color="neutral.100"
            >
                <Image 
                    src="/img/logo.svg"
                    margin="0 auto"
                />
            </Box>
            <Box
                display="flex"
                justifyContent="space-evenly"
            >
                <Link as={NextLink} href='/about'>About</Link>
                <Link href='#'>Services</Link>
                <Link href='#'>Proyects</Link>
            </Box>
            <Box
                display="flex"
                color="neutral.100"
                justifyContent="space-evenly"
            >
                <Link href='https://www.facebook.com' isExternal>
                    <Image src="/img/icon-facebook.svg" alt="Facebook"/>
                </Link>
                <Image src="/img/icon-instagram.svg" alt="Instagram"/>
                <Image src="/img/icon-twitter.svg" alt="Twitter"/>
                <Image src="/img/icon-pinterest.svg" alt="Pinterest"/>
            </Box>
        </Stack>
    )
}