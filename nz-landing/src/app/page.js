'use client'

import ServiceContainer from '@/components/ServiceContainer/ServiceContainer'
import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider } from '@chakra-ui/react'

import template from '@/template';
import Initial from '@/components/Initial/Initial';
import Header from '@/components/Header/Header';
import Direction from '@/components/Direction/Direction';
import Contact from '@/components/Contact/Contact';
import Footer from '@/components/Footer/Footer';
import theme from '@/app/theme';

export default function Home() {
  
  return (
    <CacheProvider>
      <ChakraProvider  theme={theme}>
        <Header />
        <Initial />
        <ServiceContainer servicesList={template.servicios}/> 
        <Direction empresa={template.empresa} />  
        <Contact />
        <Footer />
      </ChakraProvider>
    </CacheProvider>
  )
}
