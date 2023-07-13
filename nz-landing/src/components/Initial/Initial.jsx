import React from 'react'
import { Container, Heading, VStack } from '@chakra-ui/react'

export default function Initial() {
    return (
      <section>
      <Container
        bgImage="https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=869&q=80"
        maxW="100%"
        h="100vh"
        bgPosition="center"
        bgRepeat="no-repeat"
        bgSize="cover"
        
      >
        <VStack spacing={5} align="center" justify={"center"}>
        <Heading as="h2" variant="primary" fontSize= {{base: '2.5em', lg: '4.5em'}} textShadow="3px 3px #FFF">
          Crea tu lugar en el mundo
        </Heading>

        <Heading as="h3" variant="secondary" fontSize= {{base: '1.5em', lg: '2.5em'}}>
          Hacemos realidad tu sueño
        </Heading>
        </VStack>
      </Container>
    </section>
      )
}
