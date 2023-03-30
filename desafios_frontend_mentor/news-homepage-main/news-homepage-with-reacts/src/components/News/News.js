import { Box, Heading, Stack, Text } from '@chakra-ui/react'
import React from 'react'

export default function News({news}) {
  
  return (
    <Stack 
        as="section"
        bg="black"
        p={10}
        spacing={15}
        >
        <Heading as="h2" color="primary.SoftOrange">
            New
        </Heading>
        
          { 
            news.map(
              (news)=>
              (
              <Box 
                key={news.title}
                pt={5}
                pb={5}
                borderBottomWidth="1px"
                borderColor="white"
                >
              <Heading 
                as="h3"
                color="white"
                size='md'
                >{news.title}
              </Heading>
              <Text
                color="hsl(233, 8%, 79%)"
              >{news.subtitle}</Text>
              </Box>)
            )
          }
    </Stack>
  )
}
