import { Box, Heading, Stack, Text } from '@chakra-ui/react'
import React from 'react'

function Works(props) {
  return (
    <Stack
        h={{base:"100vh",}}
        w={{md:"50vw"}}
        bgImage={{base:`${props.imageMobile}`, md:`${props.imageWeb}`}}
        bgPosition="center"
        bgRepeat="no-repeat"
        bgSize="cover"
        justify="end"
        
    >
        <Box
            display="flex"
            flexDirection="column"
            gap="1.2em" 
            alignItems="center"
            justifyContent="end"
            p="2em"         
        >
            <Heading
                color={props.colorTypograph}
                fontSize={{md:"1.5em"}}
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