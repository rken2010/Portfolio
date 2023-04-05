import Head from 'next/head'

import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Header from '@/components/Header/Header'
import Principal from '@/components/Principal/Principal'
import Brand from '@/components/Brand/Brand'
import Audience from '@/components/Audience/Audience'
import Works from '@/components/Works/Works'
import Portfolio from '@/components/Portfolio/Portfolio'
import Footer from '@/components/Footer/Footer'
import { AudienceSection, TitleWeb, BrandSection, WorksSection } from '@/content'

import { Stack } from '@chakra-ui/react'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  return (
    <>
      <Head>
        <title>Frontend Mentor | Sunnyside agency landing page</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Barlow:wght@600&family=Fraunces:wght@700;900&display=swap" rel="stylesheet"/>
      </Head>
      <main>
       <Header />
       <Principal titulo={TitleWeb.text}/>
       <Brand title={ BrandSection.title} description={BrandSection.description} imageWeb={BrandSection.imageWeb} imageMobile={BrandSection.imageMobile} lineColor={BrandSection.color}/>
       <Audience title={ AudienceSection.title} description={AudienceSection.description} imageWeb={AudienceSection.imageWeb} imageMobile={AudienceSection.imageMobile} lineColor={AudienceSection.color}/>
       <section className={styles.works} >
          {
            WorksSection.map((WorksSection) => <Works title={ WorksSection.title} description={WorksSection.description} imageWeb={WorksSection.imageWeb} imageMobile={WorksSection.imageMobile} colorTypograph={WorksSection.color} key={WorksSection.title} />
            )
          }
       </section>
       <Portfolio />
       <Footer />
       
      </main>
    </>
  )
}
