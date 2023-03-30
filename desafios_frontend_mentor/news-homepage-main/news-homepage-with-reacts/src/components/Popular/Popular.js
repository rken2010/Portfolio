import { Box, Stack, Image, Heading, Text, Button } from '@chakra-ui/react'
import React from 'react'


export default function Popular( {popular} ) {
    return(
    <Stack
        as="section"
        direction="column"
        spacing={4}
    >
        <Box>
            <Image 
                src={popular.imageMobile} 
                display={ {md:"none"}}
            />
            <Image 
                src={popular.imageDesktop}
                display={{base:"none", md:"initial"}}
            />
        </Box>
        <Stack
            direction={{base:"column",md:"row"}}
            spacing={15}
            >
            
                <Box>
                <Heading as="h2"
                    fontFamily="font-family: 'Inter', sans-serif;"
                    fontWeight="800"
                    fontSize={{base:"2.2em", md:"3.5em"}}
                >{popular.title}</Heading>
                </Box> 
                <Box>
                <Text
                    fontFamily="font-family: 'Inter', sans-serif;"
                    fontWeight="400"
                    fontSize={{base:"0.7em",md:'1.2em'}}
                    mb={5}

                >{popular.text}</Text>
                <Button
                    bg='primary.SoftRed'
                    color="white"
                    borderRadius={0}
                    fontFamily="Inter"
                    fontWeight="700"
                    fontSize='0.7em'
                    w="50%"

                >
                    READ MORE
                </Button>
                </Box>            
        </Stack>
    </Stack>
  )
}
