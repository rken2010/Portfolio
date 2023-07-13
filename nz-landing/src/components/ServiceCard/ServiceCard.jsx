import React from 'react';

import { Stack, Box, Heading, Button, Text} from '@chakra-ui/react';

export default function CardService({ header, title, descripcion }) {
  return (
  <Stack
    style={{perspective:"800"}}
    
    >
      <Stack
        p="relative"
        w="320px"
        h="400px"
        boxShadow="2xl" 
        borderRadius="25px"
        transition= ".7s ease"
        style={{
          transformStyle: "preserve-3d",
        }}
        _hover={{ transform: 'rotateY(180deg)' }}
      >
        <Stack
          w="100%"
          h="100%"
          boxShadow="2xl" 
          borderRadius="25px"
          style={ {backfaceVisibility: "hidden"}}
          backgroundImage={header}
          backgroundPosition="center"
          backgroundRepeat="no-repeat"
          alignItems={"center"}
          justifyContent={"center"}
          textAlign={"center"}
          color="white"
          textShadow="-3px 5px 5px rgba(0, 0, 0, 0.82)"
          
         >     
            <Heading as="h2" size={{ sm: 'sm', lg: 'lg' }}>
                    {title}
            </Heading>        
        </Stack>
        <Stack 
          
          p={4} 
          position="absolute"
          top= "0"
          left= "0"	
          style={ {backfaceVisibility: "hidden"}}
          transform="rotateY(180deg)"
        >
            <Stack
                spacing={8}
                direction="column"
                alignItems="center"
                justifyContent="center"    
                
            >
                <Box  px="15px" h="100px" display="flex" flexDirection="column" gap={5}>
                  <Heading as="h2" size={{ sm: 'sm', lg: 'md' }}>
                    {title}
                  </Heading>
                  <Heading as="h4" size="xs" fontSize="12px">
                    subtitulo
                  </Heading>
                </Box>
                <Box h="150px" px="15px">
                  <Text>
                  {descripcion}
                  </Text>
                </Box>
                <Box
                  display="flex"
                  h="40px"
                  margin="5px"
                  justifyContent="center"
                  alignItems="center"
                >
                <Button colorScheme="teal" size="md" mb="10px">
                  Consultar
                </Button>
                </Box>
            </Stack>
        </Stack>     
    </Stack>
   </Stack>
   

  );
}

