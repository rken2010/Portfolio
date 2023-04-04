import React from 'react';
import { Image, Box, Stack } from '@chakra-ui/react'


export default function Portfolio( ) {
  
  return (
    <Stack>
    <Box
        flexWrap ="wrap"
        display={{basic:"flex", md:"none"}}
    >
        <Image src="/img/mobile/image-gallery-milkbottles.jpg" alt="milkbottles"/>
        <Image src="/img/mobile/image-gallery-orange.jpg" alt="orange"/>
        <Image src="/img/mobile/image-gallery-cone.jpg" alt="cone"/>
        <Image src="/img/mobile/image-gallery-sugar-cubes.jpg" alt="sugar cubes"/>
    </Box>
     <Box
     flexWrap ="wrap"
     display={{basic:"none", md:"flex"}}
 >
     <Image src="/img/desktop/image-gallery-milkbottles.jpg" alt="milkbottles"/>
     <Image src="/img/desktop/image-gallery-orange.jpg" alt="orange"/>
     <Image src="/img/desktop/image-gallery-cone.jpg" alt="cone"/>
     <Image src="/img/desktop/image-gallery-sugar-cubes.jpg" alt="sugar cubes"/>
    </Box>
    </Stack>

  )
}