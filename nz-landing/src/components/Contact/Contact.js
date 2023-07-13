import React from 'react';
import Form from '../Form/Form';

import { Text, Heading, Box, Stack, Container } from '@chakra-ui/react';

import Social from "../Social/Social"

export default function Contact() {
  return (
    <Container display="flex" flexDirection="row" maxW="100%" justifyContent="space-around">
      <Stack direction={['column', 'row']} maxW="100%" spacing={10}>
        <Box
          display="flex"
          justifyContent="center"
          flexDirection="column"
          gap={["0.2rem","1rem"]}
        >
          <Heading as="h2">Contactenos</Heading>
          <Text>Puede realizar sus consultas completando el formulario</Text>
          <Box>
            <Social />
          </Box>
        </Box>
        <Box>
          <Form />
        </Box>
      </Stack>
    </Container>
  );
}
