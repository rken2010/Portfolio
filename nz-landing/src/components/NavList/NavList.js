import React from 'react';

import {
  ListItem,
  ListIcon,
  UnorderedList,
  Icon
} from '@chakra-ui/react'

import { BsFillPinAngleFill } from 'react-icons/bs';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { BsBuilding } from 'react-icons/bs';
import { TbEngine } from 'react-icons/tb';

export default function NavList(props){
  return(
    <UnorderedList
    styleType="none"
    spacing ={5}
    >
      <ListItem className="nav_list-link" p={2}>
        <ListIcon as={BsBuilding} color='green.500' />
        Proyectos y Dirección</ListItem>
      <ListItem className="nav_list-link"  p={2}>
        <ListIcon as={BsFillPinAngleFill} color='green.500' />
        Planos Municipales</ListItem>
      <ListItem className="nav_list-link"  p={2}>
      <ListIcon as={TbEngine} color='green.500' />
        Planos de Instalación sanitaria e Instalación de gas</ListItem>
      <ListItem className="nav_list-link"  p={2}>
      <ListIcon as={BsFillTelephoneFill} color='green.500' />
        Contacto</ListItem>
      )
    </UnorderedList>
  )
}