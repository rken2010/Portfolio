import { Stack } from '@chakra-ui/react'
import React from 'react'
import ServiceCard from '../ServiceCard/ServiceCard'

export default function ServiceContainer({servicesList}) {

    
  return (
    <Stack
        display={'flex'}
        flexWrap={'nowrap'}
        justifyContent={"center"}
        alignItems={"center"}
        direction={['column','row']}
    
    >
        { servicesList.map((servicesList) => (
        <ServiceCard  {...servicesList}
           key= {servicesList.id}
            
        />))}
    </Stack>
  )
}
