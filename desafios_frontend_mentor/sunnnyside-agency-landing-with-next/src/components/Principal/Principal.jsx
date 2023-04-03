import { Heading, Image, Box, Stack } from '@chakra-ui/react'
import React from 'react'

function Principal({titulo,other}) {
  return (
    
 <Stack
    justifyContent="center"
    alignItems="center"
 >
  <Box
    position="relative"
    top={0}
    zIndex={-1}
  >
    <Image src="/img/mobile/image-header.jpg" display={{base:"block", md:"none"}}/>
    <Image src="/img/desktop/image-header.jpg" display={{base:"none", md:"block"}}/>
  </Box>
  <Box
    position="absolute"
    display="flex"
    flexDir="column"
    justifyContent="center"
    alignItems="center"
  >
    <Heading 
      as="h2"
      fontSize="2em"
      textTransform="uppercase"
      color="neutral.500"
      textAlign="center"
    >{titulo}</Heading>
    <Image src='\img\icon-arrow-down.svg'/>
  </Box>
 </Stack>
 
);
}

export default Principal
