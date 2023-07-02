'use client'

import ServiceContainer from '@/components/ServiceContainer/ServiceContainer'
import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider } from '@chakra-ui/react'

import template from '@/template';
import Initial from '@/components/Initial/Initial';

export default function Home() {
  
  return (
    <CacheProvider>
      <ChakraProvider>
        <Initial />
        <ServiceContainer servicesList={template.servicios}/>
      </ChakraProvider>
    </CacheProvider>
  )
}
