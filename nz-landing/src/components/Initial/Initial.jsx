import React from 'react'
import { Container, Heading, } from '@chakra-ui/react'

export default function Initial() {
    return (
        <section>
          <Container 
            bgImage="https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=869&q=80"
            bgPos={'center'}
            bgSize={'cover'}
            maxW="100%"
            h="100vh"
          >
            <Heading as={"h1"}>Crea tu lugar en el mundo</Heading>
          </Container>
        </section>
      )
}
