import React from 'react';

import { Grid, GridItem, Heading, Image, Text, Box } from '@chakra-ui/react'

export default function Audience( props ) {
  
  return (
    <Grid 
      templateColumns={{base:"1fr", md:"repeat(2, 1fr)"}}
      justifyItems="center"
      alignItems="center"
    >
      <GridItem  
      rowSpan={{base:"2", md:"1"}} colSpan={{base:"1"}}
      > 
      <Box
          display="flex"
          flexDirection="column"
          gap={10}
          p={10}
          justifyContent="center"
          alignItems="center"
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
      <GridItem
        rowSpan={{base:"1 span /2"}} colSpan={{base:"1", md:"2/3"}}
      >
       

        <Image src={props.imageMobile} display={{base:"initial", md:"none"}}/>
        <Image src={props.imageWeb} display={{base:"none", md:"initial"}}/>
      </GridItem>
    </Grid>
  )  

}