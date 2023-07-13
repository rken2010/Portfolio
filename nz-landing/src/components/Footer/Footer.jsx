import React from 'react';


import { Text, Heading, Icon, Stack, Box, Link } from '@chakra-ui/react';

import { FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';

export default function Footer() {
  
  return (
    <Stack 
      as="footer"
      bg="black"
      direction= {["column", "row"]}    
      p={["1rem","2rem"]} 
      h="25vh"         
      justify="space-evenly"
      align="space-evenly"
      color='white'
    >
      <Stack>
          <Box>
            logo
          </Box>
      </Stack>

      <Stack>
        <Link  href='#'>
          Servicios
        </Link>
        <Link  href='#'>
          Contacto
        </Link>
      </Stack>

    </Stack>
  )
}