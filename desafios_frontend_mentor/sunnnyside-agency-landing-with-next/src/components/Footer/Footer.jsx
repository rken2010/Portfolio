import React from 'react';
import { Link, Box, Stack } from '@chakra-ui/react'
import NextLink from 'next/link'

export default function Portfolio( ) {
  
    return (
        <Stack 
            as="footer"
            bg="primary.500"
        >
            <Box>
                <Image 
                    src="/img/logo.svg"
                    margin="0 auto"
                />
            </Box>
            <Box>
                <Link as={NextLink} href='/About'>About</Link>
                <Link href='#'>Services</Link>
                <Link href='#'>Proyects</Link>
            </Box>
            <Box>
                <Image src="/img/icon-facebook.svg" alt="Facebbok"/>
                <Image src="/img/icon-instagram.svg" alt="Instagram"/>
                <Image src="/img/icon-twitter.svg" alt="Twitter"/>
                <Image src="/img/icon-pinterest.svg" alt="Pinterest"/>
            </Box>
        </Stack>
    )
}