import React from 'react';

import {
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  IconButton,
  Box

} from '@chakra-ui/react'

import { HamburgerIcon } from '@chakra-ui/icons'

import NavList from "../NavList/NavList"

export default function NavBar() {

  const { isOpen, onOpen, onClose } = useDisclosure()
  

  return (
    <Box 
      as="nav"
      alignItems='center'

    >
      <IconButton
      bg='brand.200'
      aria-label='Search database'
      icon={<HamburgerIcon />}
      onClick={onOpen}
      w={50}
      m={1}
      />
      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
      >
        <DrawerOverlay />
        <DrawerContent
          bg={"brand.100"}
        >
        <DrawerCloseButton />
          <DrawerBody>
              <NavList />
          </DrawerBody>
        </DrawerContent>
      </Drawer> 
    </Box>
  );
}
