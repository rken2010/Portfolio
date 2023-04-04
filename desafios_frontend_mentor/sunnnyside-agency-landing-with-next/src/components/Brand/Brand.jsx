import React from 'react';

import { Grid, GridItem, Heading, Image, Text, Box } from '@chakra-ui/react'

export default function Brand( props ) {
  
  return (
    <Grid 
      templateColumns={{base:"1fr", md:"repeat(2, 1fr)"}}
      justifyItems="center"
      alignItems="center"
    >
      <GridItem  rowSpan={{base:"1"}} colSpan={{base:"1", md:"1"}} > 
        <Image src={props.imageMobile} display={{base:"inline", md:"none"}} />
        <Image src={props.imageWeb} display={{base:"none", md:"inline"}}/>
      </GridItem>
      <GridItem
     
      >
        <Box
          display="flex"
          flexDirection="column"
          gap={10}
          p={10}
        >
        <Heading
          as="h3"
          textAlign="center"
          fontSize={{base:"1.2em", md:"1.5em", lg:"2em"}}
        >{props.title}</Heading>
        <Text
          textAlign={{base:"center", md:"justify"}}
        
        >{props.description}</Text>
        </Box>
      </GridItem>
    </Grid>
  )  

}