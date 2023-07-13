'use client'

import Head from 'next/head'

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
        <Head>
        <title>NZ</title>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Martel&family=Parisienne&family=Trykker&display=swap" rel="stylesheet"/>
        </Head>
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
