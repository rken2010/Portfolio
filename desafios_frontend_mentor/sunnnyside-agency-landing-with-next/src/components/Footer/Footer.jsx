import React from 'react';
import { Link, Box, Stack, Image, } from '@chakra-ui/react'
import NextLink from 'next/link'



export default function Portfolio( ) {
  
    return (
        <Stack 
            as="footer"
            bg="primary.500"
            h={{base:"50vh"}}
            justifyContent="space-evenly"
            alignItems="center"
            spacing={5}
            p={5}
        >
            <Box
                color="neutral.100"
            >
                <Image src="/img/logo.svg" w={{base:"150px", md:"170px", xl:"210px"}}/>
           </Box>
            <Box
                display="flex"
                gap={{base:"1.1em", md:"1.5em", xl:"2em"}}
                fontSize={{base:"1em", md:"1.2em", lg:"2em"}}
          
            >
                <Link as={NextLink} href='/about'>About</Link>
                <Link href='#'>Services</Link>
                <Link href='#'>Proyects</Link>
            </Box>
            <Box
                display="flex"
                color="neutral.100"
                gap={{base:"1.3em", md:"1.7em", xl:"2.2em"}}
            >
                <Link href='https://www.facebook.com' isExternal>
                    <Image src="/img/icon-facebook.svg" alt="Facebook" w={{base:"30px", md:"40px", xl:"50px"}}/>
                </Link>
                <Link href='https://www.instagram.com' isExternal>
                    <Image src="/img/icon-instagram.svg" alt="Instagram" w={{base:"30px", md:"40px", xl:"50px"}}/>
                </Link>
                <Link href='https://www.twitter.com' isExternal>
                    <Image src="/img/icon-twitter.svg" alt="Twitter" w={{base:"30px", md:"40px", xl:"50px"}}/>
                </Link>
                <Link href='https://www.pinterest.com' isExternal>
                    <Image src="/img/icon-pinterest.svg" alt="Pinterest" w={{base:"30px", md:"40px", xl:"50px"}}/>
                </Link>
            </Box>
        </Stack>
    )
}