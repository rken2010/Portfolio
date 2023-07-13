import React from 'react';

import NavBar from '../NavBar/NavBar';

import { Grid, GridItem, Heading } from '@chakra-ui/react';

export default function Header(props) {
  return (
    <header>
      <Grid templateColumns="50px 1fr" templateRows='1fr' gap={6} bg="brand.100" >
        <GridItem w="100%" >
          <NavBar />
        </GridItem>
        <GridItem>
          <Heading as="h1">{props.empresa}</Heading>
        </GridItem>
      </Grid>
    </header>
  );
}
