import React from 'react';

import { Grid, GridItem, Heading, Image, Text, Box } from '@chakra-ui/react'

export default function Brand( props ) {
  
  return (
    <Grid 
      templateColumns={{base:"1fr", md:"repeat(2, 1fr)"}}
      justifyItems="center"
      alignItems="center"
    >
      <GridItem  rowSpan={{base:"1"}} colSpan={{base:"1", md:"1"}}  width={{xl:"100%"}}> 
        <Box display="flex">
        <Image src={props.imageMobile} display={{base:"inline", md:"none"}} width={"100%"}/>
        <Image src={props.imageWeb} display={{base:"none", md:"inline"}} width={"100%"}/>
        </Box>
      </GridItem>
      <GridItem
     
      >
        <Box
          display="flex"
          flexDirection="column"
          gap={10}
          p={{base:"1em", md:"2em", xl:"3em"}}
          alignItems="center"
          justifyContent="center"
        >
        <Heading
          as="h3"
          textAlign="center"
          fontSize={{base:"1.2em", md:"1.5em", lg:"2.5em"}}
        >{props.title}</Heading>
        <Text
          textAlign={{base:"center", md:"justify"}}
          fontSize={{base:"1em", md:"1.2em", lg:"1.7em"}}
          p={{xl:"3em"}}
        
        >{props.description}</Text>
        </Box>
      </GridItem>
    </Grid>
  )  

}