import React from 'react';

import {
  Stack,
  Box,
  Heading,
  Text,
  Button,
  List,
  ListItem,
} from '@chakra-ui/react';

export default function ServiceCard ({header, title,descripcion}) {
  console.log(title)
  return (
    <Stack
      maxW="320px"
      boxShadow="2xl"
      borderRadius="25px"
      p="0"
      m="25px"
    >
      <Stack
        pos="relative"
        zIndex={1}
        bgImage={header}
        borderTopLeftRadius="30px"
        borderTopRightRadius="25px"
        h="150px"
        color="white"
      >
        <Box p={4} color="white">
          <Heading
            as={"h3"}
            fontSize={"24px"}
            textAlign={"center"}
          >
            {title}
          </Heading>
        </Box>
      </Stack>
      <Stack
        spacing={8}
        direction="column"
        alignItems="space-evenly"
        justifyContent="end"
        h="400px"
      >
        <Box h="100%" px="15px">
          <Heading as="h2" size="lg" noOfLines={1}>
            titulo
          </Heading>
          <Heading as="h4" size="xs" fontSize="12px" noOfLines={1}>
            subtitulo
          </Heading>
        </Box>
        <Box h="100%" px="15px">
          <List spacing={3}>
            <ListItem>{descripcion}</ListItem>
          </List>
        </Box>
        <Box
          h="100%"
          px="15px"
          direction="row"
          margin="5px"
          justifyContent='center'
          alignItems="center"
        >
          <Button colorScheme="teal" size="md" mb="10px">
            Consultar
          </Button>
        </Box>
      </Stack>
    </Stack>
  );
}
