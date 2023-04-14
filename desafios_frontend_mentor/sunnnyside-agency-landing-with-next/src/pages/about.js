import { Heading, Stack, Text } from '@chakra-ui/react';
import React from 'react';


export default function About( ) {
  
    return (
        <Stack 
            bgImage="url('/img/desktop/image-header.jpg')"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            h="100vh"
        >
            <Heading  as="h1"
            textAlign="center"
            color="neutral.500"
            fontSize={{base:"1.2em", md:"1.5em", lg:"2.5em"}}>We are creatives!</Heading>
            <Text  textAlign={{base:"center", md:"justify"}}
            fontSize={{base:"1em", md:"1.2em", lg:"1.7em"}}
            p={{xl:"3em"}}>
                At Sunnyside, we're not just a regular company. We're a group of creative individuals who strive to bring unique and innovative ideas to life. Our team is made up of designers, writers, developers, marketers, and strategists who all share a passion for creating exceptional work.<br/>
                As a creative agency, we specialize in crafting brands and experiences that captivate and engage audiences. We believe that creativity is the key to success in any industry, and we infuse that philosophy into everything we do.<br/>

            Our approach to creativity is grounded in collaboration and communication. We work closely with our clients to understand their vision, goals, and target audience, and then we use our expertise to develop creative solutions that align with their needs.<br/>

            Whether it's a website, a branding campaign, a social media strategy, or a custom app, we approach each project with a fresh perspective and a commitment to excellence. We believe that great ideas can come from anywhere, and we encourage our team to think outside the box and push the boundaries of what's possible.<br/>

            At Sunnyside, we're proud to be creatives, and we're passionate about helping our clients stand out in a crowded marketplace. Contact us today to learn more about how we can help you bring your creative vision to life.</Text>
            </Stack>
        )
}