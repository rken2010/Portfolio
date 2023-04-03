import { Box, Heading, Image, Stack, Text } from '@chakra-ui/react'
import React from 'react'

function Works(props) {
  return (
    <Stack
        spacing={0}
        m={0}
        h="100vh"
        bgImage={{base:`${props.imageMobile}`, md:`${props.imageWeb}`}}
        bgPosition="center"
        bgRepeat="no-repeat"
        bgSize="cover"
        justify="end"
        p="1.5em"
    >
        <Box
            display="flex"
            flexDirection="column"
            gap="1.2em" 
            alignItems="center"
            justifyContent="end"
         
        >
            <Heading
                color={props.colorTypograph}
            >
                {props.title}</Heading>
            <Text
                color={props.colorTypograph}
                textAlign="center"
            >
                {props.description}
            </Text>
        </Box>
    </Stack>
  )
}

export default Works