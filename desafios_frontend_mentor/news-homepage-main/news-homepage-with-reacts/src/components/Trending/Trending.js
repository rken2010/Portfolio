import { Box, Stack, HStack, Image, Text, Heading } from '@chakra-ui/react'
import React from 'react'

export default function Trending({ trending}) {
  return (
    <Stack
        as="section"
        direction={{base:"column", md:"row"}}
    >
    { trending.map((trending) =>
        (
        <HStack 
            key={trending.place}
            spacing={5}
        >
            <Box
                maxW={{base:"110px", md:"md", lg:"lg"}}
            >
                <Image
                    src={trending.image}
                    alt={trending.headline}
                    boxSize='100%'
                />
            </Box>
            <Box
                display="flex"
                flexDir="column"           
                gap={1}
            >
                <Text
                    fontSize="2em"
                    fontWeight="700"
                    color="neutral.GrayishBlue"
                >
                    {trending.place}
                </Text>
                <Heading
                    as="h3"
                    fontSize="1.1em"
                    fontWeight="800"
                >
                    {trending.headline}
                </Heading>
                <Text
                    fontSize={{base:"1em"}}
                    color="neutral.DarkGrayishBlue"
                >
                    {trending.lead}
                </Text>
            </Box>
        </HStack> 
        )
    )}  
    </Stack>
    )}